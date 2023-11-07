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
    <Route path='' element={<ShowBooks/>}/>
    <Route path='' element={<CreateBooks/>}/>
    <Route path='' element={<EditBooks/>}/>
    <Route path='' element={<DeleteBooks/>}/>
    </Routes>
)
}

export default App