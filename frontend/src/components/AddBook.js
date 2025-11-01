import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

function AddBook() {
  const [book, setBook] = useState({
    Book_Name: "",
    Book_ID: "",
    Publisher_Number: "",
    Date_of_Publication: "",
    No_of_Pages: "",
    Year_of_Publication: "",
    Cost: "",
  });

  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/books/add", book)
      .then(() => {
setMessage("✅ Book Added Successfully!")
setBook({
    Book_Name: "",
    Book_ID: "",
    Publisher_Number: "",
    Date_of_Publication: "",
    No_of_Pages: "",
    Year_of_Publication: "",
    Cost: "",
  });
  })
      .catch(() => setMessage("❌ Error Adding Book!"));
    
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow p-4" style={{ width: "32rem" }}>
        <h2 className="text-center mb-4">Add Book</h2>

        {message && <Alert variant="info">{message}</Alert>}

        <Form onSubmit={onSubmit}>
          <Form.Control className="mb-3" placeholder="Book Name" name="Book_Name" onChange={onChange} required />
          <Form.Control className="mb-3" placeholder="Book ID" name="Book_ID" onChange={onChange} required />
          <Form.Control className="mb-3" placeholder="Publisher Number" name="Publisher_Number" onChange={onChange} required />
          <Form.Control className="mb-3" type="date" name="Date_of_Publication" onChange={onChange} required />
          <Form.Control className="mb-3" type="number" placeholder="No of Pages" name="No_of_Pages" onChange={onChange} required />
          <Form.Control className="mb-3" type="number" placeholder="Year of Publication" name="Year_of_Publication" onChange={onChange} required />
          <Form.Control className="mb-3" type="number" placeholder="Cost" name="Cost" onChange={onChange} required />
          <Button type="submit" className="w-100" variant="primary">
            Add Book
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddBook;
