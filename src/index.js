import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ViewBookmarks from './components/ViewBookmarks';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="bookmarks" element={<ViewBookmarks />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);