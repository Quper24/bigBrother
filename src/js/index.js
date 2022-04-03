import Navigo from 'navigo';

const router = new Navigo("/", {hash: true});


const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const footerBtn = document.querySelector('.footer__btn')
const goBack = document.querySelector('#goBack');

const closeAllPage = () => {
  library.classList.add('hide');
  book.classList.add('hide');
  add.classList.add('hide');
}


router.on({
  '/': () => {
    closeAllPage();
    library.classList.remove('hide')
  },
  'book': (match) => {
    closeAllPage();
    console.log(match.params)
    book.classList.remove('hide')
  },
  'add': () => {
    closeAllPage();
    add.classList.remove('hide')
  }
}).resolve();


footerBtn.addEventListener('click', () => {
  router.navigate('add');
});

goBack.addEventListener('click', () => {
  router.navigate('/');
});


fetch('http://localhost:3024/api/books/2074454224', {
  method: 'PATCH',
  body: JSON.stringify({
    "label": "ready"
  })
})

fetch('http://localhost:3024/api/books/2074454224', {
  method: 'PATCH',
  body: JSON.stringify({
    "stars": "5"
  })
})

fetch('http://localhost:3024/api/books', {
  method: "POST",
  body: JSON.stringify({
    title: "Гарри Поттер и Философский камень",
    author: "Джоан Роулинг",
    description: "первый роман в серии книг про юного волшебника Гарри Поттера, написанный Дж. К. Роулинг. В нём рассказывается, как Гарри узнает, что он волшебник, встречает близких друзей и немало врагов в Школе Чародейства и Волшебства «Хогвартс», а также с помощью своих друзей пресекает попытку возвращения злого волшебника Волан-де-Морта, который убил родителей Гарри (самому Гарри в тот момент был год от роду).",
  })
})
