import React from 'react';
import { Route, Routes } from "react-router-dom";
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditBooks from './pages/EditBooks';
import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/' element={<ShowBooks/>}/>
    <Route path='/books/create/:id' element={<CreateBooks/>}/>
    <Route path='/books/edit/:id' element={<EditBooks/>}/>
    <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
)
}

export default App