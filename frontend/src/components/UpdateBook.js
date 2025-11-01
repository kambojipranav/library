import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function UpdateBook() {
  const [bookID, setBookID] = useState('');
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState('');

  const searchBook = (e) => {
    e.preventDefault();
    setMessage('');

    axios.get(`http://localhost:5000/books/${bookID}`)
      .then(res => {
        if (res.data) setBook(res.data);
        else setMessage('❌ Book Not Found');
      })
      .catch(() => setMessage('❌ Error Fetching Book Details'));
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/books/update/${bookID}`, book)
      .then(() => setMessage('✅ Book Updated Successfully!'))
      .catch(() => setMessage('❌ Error Updating Book!'));
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow p-4" style={{ width: "35rem" }}>
        <h2 className="text-center mb-3">Update Book</h2>

        {message && <Alert variant="info">{message}</Alert>}

        {/* STEP 1 - SEARCH */}
        <Form onSubmit={searchBook} className="mb-4">
          <Form.Control
            placeholder="Enter Book ID"
            value={bookID}
            onChange={(e) => setBookID(e.target.value)}
            required
          />
          <Button className="mt-3 w-100" variant="secondary" type="submit">Search</Button>
        </Form>

        {/* STEP 2 - EDIT FORM */}
        {book && (
          <Form onSubmit={onUpdate}>
            <Form.Control className="mb-3" name="Book_Name" value={book.Book_Name} onChange={onChange} placeholder="Book Name" required />
            <Form.Control className="mb-3" name="Publisher_Number" value={book.Publisher_Number} onChange={onChange} placeholder="Publisher Number" required />
            <Form.Control className="mb-3" type="date" name="Date_of_Publication" value={book.Date_of_Publication} onChange={onChange} required />
            <Form.Control className="mb-3" type="number" name="No_of_Pages" value={book.No_of_Pages} onChange={onChange} placeholder="No. of Pages" required />
            <Form.Control className="mb-3" type="number" name="Year_of_Publication" value={book.Year_of_Publication} onChange={onChange} placeholder="Year of Publication" required />
            <Form.Control className="mb-3" type="number" name="Cost" value={book.Cost} onChange={onChange} placeholder="Cost" required />

            <Button type="submit" className="w-100" variant="primary">Update Book</Button>
          </Form>
        )}
      </Card>
    </Container>
  );
}

export default UpdateBook;
