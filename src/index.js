import getScale from './getScale'
import './index.css'

function getPosition (targetPosition) {
  if (targetPosition.getBoundingClientRect) {
    return targetPosition.getBoundingClientRect()
  } else {
    return targetPosition
  }
}

function createDiv (className) {
  const div = document.createElement('div')
  div.classList.add(className)
  return div
}

export default function (from, to) {
  if (!to || !from) {
    return Promise.reject(new Error('need two params'))
  }

  const toPosition = getPosition(to)
  const fromPosition = getPosition(from)

  const a = 9 / parseFloat(getScale())

  const flyball = createDiv('flyball')
  const inner = createDiv('inner')

  inner.style.width = 2 * a + 'px'
  inner.style.height = 2 * a + 'px'

  flyball.style.top = fromPosition.top + 'px'
  flyball.style.left = fromPosition.left + 'px'
  flyball.appendChild(inner)

  document.body.appendChild(flyball)

  const targetPosition = {
    top: toPosition.top - fromPosition.top,
    left: toPosition.left - fromPosition.left
  }

  // For hack
  flyball.clientHeight

  const prefixs = ['-webkit-', '-moz-', '-ms-', '-o-', '']

  prefixs.forEach(prefix => {
    flyball.style.setProperty(`${prefix}transform`, `translate3d(${targetPosition.left}px, 0, 0)`)
    inner.style.setProperty(`${prefix}transform`, `translate3d(0 ,${targetPosition.top}px, 0)`)
  })

  return new Promise((resolve) => {
    inner.addEventListener('transitionend', () => {
      document.body.removeChild(flyball)
      resolve(true)
    })
  })
}
