import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function DeleteBook() {
  const [bookID, setBookID] = useState('');
  const [message, setMessage] = useState('');

  const deleteBook = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:5000/books/delete/${bookID}`)
      .then(() => {
        setMessage('✅ Book Deleted Successfully!');
        setBookID('');
      })
      .catch(() => setMessage('❌ Error Deleting Book / Not Found.'));
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow p-4" style={{ width: "30rem" }}>
        <h2 className="text-center mb-3">Delete Book</h2>

        {message && <Alert variant="warning">{message}</Alert>}

        <Form onSubmit={deleteBook}>
          <Form.Control
            placeholder="Enter Book ID"
            value={bookID}
            onChange={(e) => setBookID(e.target.value)}
            required
          />
          <Button className="mt-3 w-100" variant="danger" type="submit">
            Delete
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default DeleteBook;
