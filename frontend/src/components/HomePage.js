import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card className="p-5 text-center shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h1 className="mb-4" style={{ fontWeight: 'bold' }}>📚 King's Library</h1>
        <p className="text-muted mb-4">Manage your library efficiently</p>

        {/* <div className="d-grid gap-3">
          <Button as={Link} to="/add" variant="primary">Add Book</Button>
          <Button as={Link} to="/search" variant="info">Search Book</Button>
          <Button as={Link} to="/update" variant="warning">Update Books</Button>
          <Button as={Link} to="/delete" variant="danger">Delete Books</Button>
          <Button as={Link} to="/display" variant="success">Display Books</Button>
        </div> */}

        {/* Signature / Credit */}
        <div className="mt-4">
          <p style={{ fontSize: "17px", fontWeight: "500", color: "#0d6efd" }}>
            ✅ Done by: <span style={{ color: "#000", fontWeight: "600" }}>Kamboji Pranav</span>
          </p>
        </div>

      </Card>
    </Container>
  );
}

export default HomePage;
