import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddBook from './components/AddBook';
import DisplayBook from './components/DisplayBook';
import SearchBook from './components/SearchBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/display" element={<DisplayBook />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/update" element={<UpdateBook />} />
        <Route path="/delete" element={<DeleteBook />} />
      </Routes>
    </Router>
  );
}

export default App;
