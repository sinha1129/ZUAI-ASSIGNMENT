import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Blog</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">New Post</Link>
    </nav>
  </header>
);

export default Header;
