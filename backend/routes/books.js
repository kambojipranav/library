const router = require('express').Router();
let Book = require('../models/Book');

// Add a new book
router.route('/add').post((req, res) => {
    const { Book_Name, Book_ID, Publisher_Number, Date_of_Publication, No_of_Pages, Year_of_Publication, Cost } = req.body;

    const newBook = new Book({
        Book_Name,
        Book_ID,
        Publisher_Number,
        Date_of_Publication: Date.parse(Date_of_Publication),
        No_of_Pages: Number(No_of_Pages),
        Year_of_Publication: Number(Year_of_Publication),
        Cost: Number(Cost),
    });

    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get all books
router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a single book by Book_ID
router.route('/:id').get((req, res) => {
    Book.findOne({ Book_ID: req.params.id })
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
});
// Update a book by Book_ID
router.route('/update/:id').put((req, res) => {
    const { Book_Name, Publisher_Number, Date_of_Publication, No_of_Pages, Year_of_Publication, Cost } = req.body;

    Book.findOneAndUpdate(
        { Book_ID: req.params.id },
        {
            Book_Name,
            Publisher_Number,
            Date_of_Publication: Date.parse(Date_of_Publication),
            No_of_Pages: Number(No_of_Pages),
            Year_of_Publication: Number(Year_of_Publication),
            Cost: Number(Cost),
        },
        { new: true }
    )
        .then(book => {
            if (book) res.json('Book updated!');
            else res.status(404).json('Book not found!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a book by Book_ID
router.route('/delete/:id').delete((req, res) => {
    Book.findOneAndDelete({ Book_ID: req.params.id })
        .then(book => {
            if (book) res.json('Book deleted.');
            else res.status(404).json('Book not found!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
