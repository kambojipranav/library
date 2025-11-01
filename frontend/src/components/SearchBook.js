import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button, Alert, Table } from "react-bootstrap";

function SearchBook() {
  const [bookID, setBookID] = useState("");
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState("");

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/books/${bookID}`)
      .then((res) => (res.data ? setBook(res.data) : setMessage("❌ Book Not Found")))
      .catch(() => setMessage("❌ Error Searching Book"));
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow p-4" style={{ width: "38rem" }}>
        <h2 className="text-center mb-3">Search Book</h2>

        <Form onSubmit={searchBook} className="mb-4">
          <Form.Control placeholder="Enter Book ID" value={bookID} onChange={(e) => setBookID(e.target.value)} required />
          <Button className="mt-3 w-100" variant="secondary" type="submit">
            Search
          </Button>
        </Form>

        {message && <Alert variant="warning">{message}</Alert>}

        {book && (
          <Table striped bordered hover>
            <tbody>
              <tr><td>Book Name</td><td>{book.Book_Name}</td></tr>
              <tr><td>Publisher Number</td><td>{book.Publisher_Number}</td></tr>
              <tr><td>Date of Publication</td><td>{book.Date_of_Publication}</td></tr>
              <tr><td>No. of Pages</td><td>{book.No_of_Pages}</td></tr>
              <tr><td>Year of Publication</td><td>{book.Year_of_Publication}</td></tr>
              <tr><td>Cost</td><td>{book.Cost}</td></tr>
            </tbody>
          </Table>
        )}
      </Card>
    </Container>
  );
}

export default SearchBook;
