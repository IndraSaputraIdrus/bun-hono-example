const title = document.getElementById("title")

fetch("/api")
  .then(res => res.json())
  .then(data => title.textContent = data.message)

