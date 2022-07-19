let grid = document.querySelector('.grid')
let span = document.querySelector('span')
let allCard = cardsArray.concat(cardsArray)

allCard.sort(() => 0.5 - Math.random())
let img

// createUI
allCard.forEach((elm, index) => {
  let card = document.createElement('div')
  card.classList.add('div')
  card.setAttribute('name', elm.name)
  card.setAttribute('data-id', index)
  img = document.createElement('img')
  img.classList.add('none')
  //   img.classList.add('block')

  img.src = elm.img
  img.setAttribute('data-id', index)
  card.append(img)
  grid.append(card)
  card.addEventListener('click', handle)

  //
})

let arr = []
let imgSrc = []
let count = 0
let countNum = []

// handle
function handle({ target }) {
  countNum.push(target)
  span.innerHTML = countNum.length
  let img = grid.children[target.dataset.id]
  imgSrc.push(img.children[0].src)
  arr.push(target)
  img.children[0].classList.add('block')

  setTimeout(function () {
    if (imgSrc[0] === imgSrc[1]) {
      img.children[0].classList.add('block')
      arr.splice(0, 2)
      imgSrc.splice(0, 2)
      //   console.log(arr)
      img.children.classList.remove('none')
    }
    if (imgSrc[0] !== imgSrc[1] && imgSrc.length == 2) {
      imgSrc.splice(0, 2)
    }
    if (arr.length === 2) {
      arr.forEach((elm) => {
        elm.children[0].classList.remove('block')
      })
      arr.splice(0, 2)
    }
  }, 500)
}
