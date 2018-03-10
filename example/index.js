import flyball from '../src/index'
import './index.css'

const from = document.getElementById('from1')
const to = document.getElementById('to1')

document.getElementById('btn').addEventListener('click', () => {
  flyball(from, to)
})
