import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";


const articles = [
  { id: 1, title: "Introduction to UX Design", excerpt: "Learn the basics of UX design and why it's crucial for modern applications." },
  { id: 2, title: "The Importance of User Research", excerpt: "Discover why user research is the foundation of great UX design." },
  { id: 3, title: "Designing for Accessibility", excerpt: "Explore techniques to make your designs inclusive and accessible to all users." },
  { id: 4, title: "UX Design Trends for 2024", excerpt: "Stay ahead of the curve with these emerging UX design trends." },
  { id: 5, title: "The Role of AI in UX Design", excerpt: "Understand how artificial intelligence is shaping the future of UX design." },
];

const ArticlesList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map(article => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to={`/articles/${article.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;