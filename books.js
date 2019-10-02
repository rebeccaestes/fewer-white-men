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
    // TODO: turn this into a template literal
    var bookHTML = '<li><em>' + book.title + '</em>, ' + book.author.name + ' ' + isFavorite + ' ' + isReread + ' ' + isYA + '</li>';
    $('ol').append(bookHTML);
  })


  // do stuff like
  var femaleBooks = books.filter (book => {
    return book.author.gender === 'female';
  })

  // var listRaces = [];

  // // JASON
  // for (var i = 0; i < books.length; i++) {
  //   // for now just assuming that no author has more than 2 races
  //   listRaces.push(books[i].author.race[0]);
  //   if (books[i].author.race.length > 1) {
  //     listRaces.push(books[i].author.race[1]);
  //   }
  // }

  // var uniqueRaces = Array.from (new Set(listRaces));
  var uniqueRaces = [];

  // for each book,
  books.forEach(book => {
    // iterate through the author's race
    book.author.race.forEach(race => {
      // and if that race doesn't exist in uniqueRacs,
      if (uniqueRaces.indexOf(race) === -1) {
        // add it
        uniqueRaces.push(race);
      }
    })
  })

  function createRaceChartData() {
    // for each race listed in uniqueRaces
    return uniqueRaces.map(name => {

      // count how many times it comes up in books' authors
      let count = books.filter((book) => {
        return book.author.race.indexOf(name) !== -1;
      }).length;

      // put that number in an object, and return that object
      return {
        race: name,
        count
      }
    })
  }

  let raceData = createRaceChartData();


  // uniqueRaces.forEach(function(value) {
    // need to interpolate race into the variable ... ?
  //   var [race]authors = books.filter(book => {
  //     return book.author.race === value;
  //   })
  // })
  // then you would have groups of whiteAuthors, etc.
  // and I think it would include duplicate entries for authors we read more than once, which I think i want but is worth considering further

  // at some point, crossreference uniqueRaces with uniqueGenders, etc.
  // and filter by other things maybe? like exclude rereads/duplicates
  // and non-representation related, general filtering would be good. like show all my favs, all rereads

  // thought1: iterate through properties of authors to get all the possible props and values
  // then create a filter function that does something like
  // function (prop, value) {
  //   books.filter(book => {
  //     return book.author.[PROP] === 'female';
  //   })
  // }

    //Width and height
var w = 300, h = 300;

const dataset = raceData;

// var outerRadius = w / 2;
// var innerRadius = 0;
// var arc = d3.svg.arc()
//         .innerRadius(innerRadius)
//         .outerRadius(outerRadius);

// var pie = d3.layout.pie();

// //Easy colors accessible via a 10-step ordinal scale
// var color = d3.scale.category10();

// Create SVG element
var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style('border', '1px solid grey');

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 50)
   // .attr("y", 0)
   .attr('y', function (d) {
    return (h - d.count * 10);
   })
   .attr("width", 25)
   // JASON 3
   .attr('height', (d) => d.count * 10 );
   // .attr('height', function (d) {
   //  return d.count * 10;
   // });
   // .attr('height', 50)

svg.selectAll("text")
 .data(dataset)
 .enter()
 .append("text")
 // .text(function (d, i) {
 //  return d.name;
 // })
 .text(function (d, i) {
  return ` ${d.race} has ${d.count} books` ;
 })
 // Add your code below this line
 .attr("x", (d, i) => i * 50)
 .attr('y', function (d) {
  return (h - d.count * 10 - 20);
 })


console.log('1')
//Set up groups
// var arcs = svg.selectAll("g.arc")
//         .data(pie(dataset))
//         .enter()
//         .append("g")
//         .attr("class", "arc")
//         .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

//Draw arc paths
// arcs.append("path")
//     .attr("fill", function(d, i) {
//       return color(i);
//     })
//     .attr("d", arc);

// // //Labels
// arcs.append("text")
//     .attr("transform", function(d) {
//       return "translate(" + arc.centroid(d) + ")";
//     })
//     .attr("text-anchor", "middle")
//     .text(function(d) {
//       return d[0].value;
//     });


})

