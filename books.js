$(document).ready(function(){

  class Author {
    constructor(name, data) {
      this.name = name;
      this.gender = data.gender;
      this.race = data.race;
    }
  }

  class Book {
    constructor (title, author, data) {
      this.title = title;
      this.author = author;
      this.year= data.year;
      this.pages = data.pages;
      this.reread = data.reread;
      this.ya = data.ya;
      this.favorite = data.favorite;
    }
  }

  const authors = {
    jkrowling: new Author('J.K. Rowling', {
      gender: 'female',
      race: ['white'],
    }),
    yanlianke: new Author('Yan Lianke', {
      gender: 'male',
      race: ['asian'],
    }),
    minjinlee: new Author('Min Jin Lee', {
      gender: 'female',
      race: ['asian'],
    })
  }

  const books = [
    new Book('Dream of Ding Village', authors.yanlianke, {
      year: '2019', 
      pages: '200',
      reread: false,
      ya: false,
      favorite: false
    }),
    new Book('Pachinko', authors.minjinlee, {
      year: '2019', 
      pages: '200',
      reread: false,
      ya: false,
      favorite: true
    }),
    new Book('Harry Potter &agrave; l\'&eacute;cole des sorciers', authors.jkrowling, {
      year: '2019', 
      pages: '300',
      reread: true,
      ya: true,
      favorite: false
    }),
  ]

  books.forEach (function (book) {
    // var isReread = book.reread;
    // var isFavorite = book.favorite;
    var isReread = book.reread ? '(reread)' : '';
    var isFavorite = book.favorite ? '<strong>!</strong>' : '';
    var isYA = book.ya ? '(YA)' : '';
    var bookHTML = '<li><em>' + book.title + '</em>, ' + book.author.name + ' ' + isFavorite + ' ' + isReread + ' ' + isYA + '</li>';
    $('ol').append(bookHTML);
  })

  // And now you can do stuff like
  books.filter(book => {
    return book.author.gender === 'female';
  })

})

