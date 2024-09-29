import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../ui/button"
import ModeToggle from "../mode-toggle"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">UX Design Blog</Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
          <Button variant="ghost" asChild><Link to="/articles">Articles</Link></Button>
          <Button variant="ghost" asChild><Link to="/about">About</Link></Button>
          <Button variant="outline" asChild><Link to="/login">Login</Link></Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;