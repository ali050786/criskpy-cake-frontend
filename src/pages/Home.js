import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

const featuredArticles = [
  { id: 1, title: "Introduction to UX Design", excerpt: "Learn the basics of UX design and why it's crucial for modern applications." },
  { id: 2, title: "The Importance of User Research", excerpt: "Discover why user research is the foundation of great UX design." },
  { id: 3, title: "Designing for Accessibility", excerpt: "Explore techniques to make your designs inclusive and accessible to all users." },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to UX Design Blog</h1>
        <p className="text-xl mb-8">Explore the latest insights and trends in UX design.</p>
        <Button asChild className="px-6 py-2 text-lg">
          <Link to="/articles">Browse All Articles</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
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
      </section>
    </div>
  );
};

export default Home;