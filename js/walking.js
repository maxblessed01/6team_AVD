const time_tag = document.querySelectorAll(".time-tag")
const walk_tag = document.querySelectorAll(".walk-tag")
const button_tag = document.querySelectorAll(".button-tag")

time_tag.forEach((div) => {
  div.addEventListener('click', () => { 
    time_tag.forEach((div) => {
      div.classList.remove('puple-color')
    })
    div.classList.add('puple-color')
  })
})


walk_tag.forEach((div) => {
  div.addEventListener('click', () => { 
    walk_tag.forEach((div) => {
      div.classList.remove('puple-color')
    })
    div.classList.add('puple-color')
  })
})

button_tag.forEach((div) => {
  div.addEventListener('click', () => { 
    button_tag.forEach((div) => {
      div.classList.remove('puple-color')
    })
    div.classList.add('puple-color')
  })
})



