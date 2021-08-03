const express = require('express');
const books = require('../model/books');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    let briefs = []
    books.forEach(element => {
        let {bookId, title, author, cover} = element;
        briefs.push({bookId, title, author, cover});
    });
    res.json(briefs);
});

router.get('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    let book = books.find(element => element.bookId == bookId);
    res.json(book);
});