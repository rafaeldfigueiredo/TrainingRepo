import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<createBook/>}/>
      <Route path="books/details/:id" element={<showBook/>}/>
      <Route path="/books/edit/:id" element={<editBook/>}/>
      <Route path="/books/delete/:id" element={<deleteBook/>}/>
    </Routes>
  )
}