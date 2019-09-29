$(document).ready(function(){

  class Author {
    constructor(name, data) {
      this.name = name;
      this.gender = data.gender;
      this.race = data.race;
    }
  }

  // TODO: what if a book has multiple authors??
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

  // spit out an li for each book, append to page
  books.forEach (function (book) {
    var isReread = book.reread ? '(reread)' : '';
    var isFavorite = book.favorite ? '<strong>!</strong>' : '';
    var isYA = book.ya ? '(YA)' : '';
    var bookHTML = '<li><em>' + book.title + '</em>, ' + book.author.name + ' ' + isFavorite + ' ' + isReread + ' ' + isYA + '</li>';
    $('ol').append(bookHTML);
  })


  // do stuff like
  var femaleBooks = books.filter(book => {
    return book.author.gender === 'female';
  })

  var listRaces = [];

  for (var i = 0; i < books.length; i++) {
    // for now just assuming that no author has more than 2 races
    listRaces.push(books[i].author.race[0]);
    if (books[i].author.race.length > 1) {
      listRaces.push(books[i].author.race[1]);
    }
  }

  var uniqueRaces = Array.from(new Set(listRaces));

  // uniqueRaces.forEach(function(value) {
    // need to interpolate race into the variable ... ?
  //   var [race]authors = books.filter(book => {
  //     return book.author.race === value;
  //   })
  // })
  // then you would have groups of whiteAuthors, etc.
  // and I think it would include duplicate entries for authors we read more than once, which I think i want but is worth considering further

  console.log('2')

  // thought1: iterate through properties of authors to get all the possible props and values
  // then create a filter function that does something like
  // function (prop, value) {
  //   books.filter(book => {
  //     return book.author.[PROP] === 'female';
  //   })
  // }
  

})

