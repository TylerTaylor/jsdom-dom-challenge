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
  const key = parseInt(counter.innerText)

  // if our likes key exists, increment, else set to 1
  likes[key] ? likes[key] += 1 : likes[key] = 1

  const ul = document.querySelector('ul')

  // if we have the like li, update text. else create.
  if (document.getElementById(`like-${key}`)) {
    document.getElementById(`like-${key}`).innerText = `${key} has ${likes[key]} likes`
  } else {
    const li = document.createElement('li')

    li.setAttribute("id", `like-${key}`)
    li.innerText = `${key} has ${likes[key]} likes`
    ul.append(li)
  }
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
  const commentText = form.querySelector('input').value
  const comment = document.createElement('p')
  comment.innerText = commentText
  comments.append(comment)

  // clear comment form
  form.querySelector('input').value = ''
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
