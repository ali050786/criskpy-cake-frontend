import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

// Mock data for demonstration
const articles = {
  1: {
    title: "Introduction to UX Design",
    content: "User Experience (UX) design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function. A good UX design ensures that the user's interaction with the product is as smooth and enjoyable as possible.",
    author: "Jane Doe",
    date: "2024-03-15"
  },
  // Add more mock articles as needed
};

const ArticleView = () => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{article.title}</CardTitle>
          <div className="text-sm text-gray-500">
            By {article.author} | Published on {article.date}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p>{article.content}</p>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link to="/articles">Back to Articles</Link>
        </Button>
      </div>
    </div>
  );
};

export default ArticleView;