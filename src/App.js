import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Layout from './components/layout/layout';
import Home from './pages/Home';
import ArticlesList from './pages/ArticlesList';
import ArticleView from './pages/ArticleView';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<ArticleView />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;