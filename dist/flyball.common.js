/*!
 * flyball.js v0.0.1
 * (c) 2018-2018 Limichange
 * Released under the MIT License.
 */
'use strict';

function getScale () {
  var i = 1;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    var scale = viewport.content.match(/initial-scale=(\d+\.?\d*)/);
    scale && (i = scale[1]);
  }

  return i
}

function getPosition (targetPosition) {
  if (targetPosition.getBoundingClientRect) {
    return targetPosition.getBoundingClientRect()
  } else {
    return targetPosition
  }
}

function createDiv (className) {
  var div = document.createElement('div');
  div.classList.add(className);
  return div
}

function index (from, to) {
  if (!to || !from) {
    return Promise.reject(new Error('need two params'))
  }

  var toPosition = getPosition(to);
  var fromPosition = getPosition(from);

  var a = 9 / parseFloat(getScale());

  var flyball = createDiv('flyball');
  var inner = createDiv('inner');

  inner.style.width = 2 * a + 'px';
  inner.style.height = 2 * a + 'px';

  flyball.style.top = fromPosition.top + 'px';
  flyball.style.left = fromPosition.left + 'px';
  flyball.appendChild(inner);

  document.body.appendChild(flyball);

  var targetPosition = {
    top: toPosition.top - fromPosition.top,
    left: toPosition.left - fromPosition.left
  };

  // For hack
  flyball.clientHeight;

  var prefixs = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

  prefixs.forEach(function (prefix) {
    flyball.style.setProperty((prefix + "transform"), ("translate3d(" + (targetPosition.left) + "px, 0, 0)"));
    inner.style.setProperty((prefix + "transform"), ("translate3d(0 ," + (targetPosition.top) + "px, 0)"));
  });

  return new Promise(function (resolve) {
    inner.addEventListener('transitionend', function () {
      document.body.removeChild(flyball);
      resolve(true);
    });
  })
}

module.exports = index;
