import Navigo from 'navigo';

const router = new Navigo("/", {hash: true});


const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const libraryAddBook = document.querySelector('.library__add-book')
const headerBtnAdd = document.querySelector('.header__btn-add')
const buttonsBack = document.querySelectorAll('.header__btn_back');

const closeAllPage = () => {
  library.classList.add('hide');
  book.classList.add('hide');
  add.classList.add('hide');
}


router.on({
  '/': () => {
    closeAllPage();
    library.classList.remove('hide')
    document.body.classList.remove('body_gradient');

  },
  'book': (match) => {
    closeAllPage();
    console.log(match.params)
    book.classList.remove('hide')
    document.body.classList.add('body_gradient');
  },
  'add': () => {
    closeAllPage();
    add.classList.remove('hide')
    document.body.classList.add('body_gradient');
  }
}).resolve();


libraryAddBook.addEventListener('click', () => {
  router.navigate('add');
});

headerBtnAdd.addEventListener('click', () => {
  router.navigate('add');
});

buttonsBack.forEach(btn => {
  btn.addEventListener('click', () => {
    router.navigate('/');
  });
})


const foo = async () => {
  const data = await fetch('http://localhost:3024/api/books/2074454224', {
    method: 'PATCH',
    body: JSON.stringify({
      "label": "ready"
    })
  });

  console.log(data)

  const data2 = await fetch('http://localhost:3024/api/books/2074454224', {
    method: 'PATCH',
    body: JSON.stringify({
      "stars": "5"
    })
  });

  console.log(data2)

  const data3 = await fetch('http://localhost:3024/api/books', {
    method: "POST",
    body: JSON.stringify({
      title: "Гарри Поттер и Философский камень",
      author: "Джоан Роулинг",
      description: "первый роман в серии книг про юного волшебника Гарри Поттера, написанный Дж. К. Роулинг. В нём рассказывается, как Гарри узнает, что он волшебник, встречает близких друзей и немало врагов в Школе Чародейства и Волшебства «Хогвартс», а также с помощью своих друзей пресекает попытку возвращения злого волшебника Волан-де-Морта, который убил родителей Гарри (самому Гарри в тот момент был год от роду).",
    })
  });

  console.log(data3)

}

foo()
