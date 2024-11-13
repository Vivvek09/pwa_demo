const container = document.querySelector('.container')

const coffees = [
  {
    name: 'Espresso',
    image: 'images/coffee1.jpg',
  },
  {
    name: 'Americano',
    image: 'images/coffee2.jpg',
  },
  {
    name: 'Latte',
    image: 'images/coffee3.jpg',
  },
  {
    name: 'Cappuccino',
    image: 'images/coffee4.jpg',
  },
  {
    name: 'Macchiato',
    image: 'images/coffee5.jpg',
  },
  {
    name: 'Mocha',
    image: 'images/coffee6.jpg',
  },
  {
    name: 'Flat White',
    image: 'images/coffee7.jpg',
  },
  {
    name: 'Affogato',
    image: 'images/coffee8.jpg',
  },
  {
    name: 'Irish Coffee',
    image: 'images/coffee9.jpg',
  },
]

const showCoffees = () => {
  let output = ''
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `),
  )
  container.innerHTML = output
}

document.addEventListener('DOMContentLoaded', showCoffees)

// Registed service worker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker
//       .register('/serviceWorker.js')
//       .then((res) => console.log('service worker registered'))
//       .catch((err) => console.log('service worker not registered', err))
//   })
// }
