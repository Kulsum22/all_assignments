const express = require("express");

const app = express()

const path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let books = [];

app.get('/books', (req, res) => {
  res.json(books);
});
app.use(express.json()); 
app.post('/books', (req, res) => {

    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  
  const { title, author, publishedDate } = req.body;
  
  if (!title || !author) {
    res.status(400).json({ error: 'Title and author are required.' });
  } else {
    const book = { id, title, author, publishedDate };
    books.push(book);
    
    res.json({ id, title, author, publishedDate });
  }
});

app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(book => book.id === req.params.id);
  
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.json({ message: 'Book deleted successfully.' });
  } else {
    res.status(404).json({ message: 'Book not found.' });
  }
});


app.listen(8000,(req,res) =>{
    console.log("Server is running")
});