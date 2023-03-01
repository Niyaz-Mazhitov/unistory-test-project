import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home';

export default function Pages() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    );
}