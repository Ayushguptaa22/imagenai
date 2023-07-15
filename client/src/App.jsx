import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-32 object-contain" />
      </Link>
      

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#F8F8FF] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className='w-full bg-[#454545] opacity-90 flex-row items-center text-center sm:px-8 px-4 py-4 font-inter font-small'>
     <p>Created by Ayush Gupta &copy; 2023 - <Link to={'https://www.instagram.com/bytethatt.ai/'} className='underline' target='_blank'>Bytethatt</Link></p> 
    </footer>
  </BrowserRouter>
);

export default App;
