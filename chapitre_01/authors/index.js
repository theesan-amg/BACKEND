const express = require("express");
const app = express();
const port = 8100;

var aut = [
  {
    name: "Lawrence Nowellos",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

// VAR

// TOUTE LES ROUTES

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/authors/:authors/", (req, res) => {
  let authors = req.params.authors;
  let book = req.params.books;

  switch (authors) {
    case "1":
      (name = aut[0].name),
        (nationality = aut[0].nationality),
        (books = aut[0].books);
      break;
    case "2":
      (name = aut[1].name), aut[1].nationality;
      aut[1].books;
      break;

    case "3":
      name = aut[2].nationality;
      nationality = aut[2].nationality;
      books = aut[2].books;

      break;
    case "4":
      name = aut[3].nationality;
      nationality = aut[3].nationality;
      books = aut[3].books;
      break;

    default:
      name = "Not Found";
      nationality = "Not Found";
      books = "Not Found";
      break;
  }
  res.json({
    author: name,
    nationality: nationality,
    books: books,
  });
});

// app.get("*", function (req, res) {
//   res.send("404 ERROR");
// });

// ON OUVRE LE SERV

app.listen(port, () => {
  console.log("Server started on port " + port);
});