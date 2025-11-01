import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Table } from 'react-bootstrap';

function DisplayBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books/')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="text-center mb-4">All Books</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book ID</th>
              <th>Publisher Number</th>
              <th>Date of Publication</th>
              <th>No. of Pages</th>
              <th>Year</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.Book_ID}>
                <td>{book.Book_Name}</td>
                <td>{book.Book_ID}</td>
                <td>{book.Publisher_Number}</td>
                <td>{book.Date_of_Publication}</td>
                <td>{book.No_of_Pages}</td>
                <td>{book.Year_of_Publication}</td>
                <td>{book.Cost}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default DisplayBook;
