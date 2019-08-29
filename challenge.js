const counter = document.getElementById("counter")
const minus = document.getElementById("-")
const plus = document.getElementById("+")
const like = document.getElementById("<3")
const pause = document.getElementById("pause")
const comments = document.getElementById("list")
const form = document.getElementById("comment-form")
const likes = {}

const isRunning = () => {
  return pause.innerText === "pause" ? true : false
}

const increment = () => {
  counter.innerText = parseInt(counter.innerText) + 1
}

const decrement = () => {
  counter.innerText = parseInt(counter.innerText) - 1
}

const handleLike = () => {
  // wat do
}

const handlePause = () => {
  // if paused, all buttons except pause should be disabled
  // switch pause button text to "resume"
  pause.innerText = isRunning() ? "resume" : "pause"

  plus.disabled = isRunning() ? false : true
  minus.disabled = isRunning() ? false : true
  like.disabled = isRunning() ? false : true
  submit.disabled = isRunning() ? false : true
}

const handleSubmit = e => {
  e.preventDefault()

  // create new comment and append to DOM
}

document.addEventListener("DOMContentLoaded", () => {
  plus.addEventListener("click", increment)
  minus.addEventListener("click", decrement)
  like.addEventListener("click", handleLike)
  pause.addEventListener("click", handlePause)
  form.addEventListener("submit", handleSubmit)

  setInterval(() => {
    if (isRunning()) {
      increment()
    }
  }, 1000)
})
