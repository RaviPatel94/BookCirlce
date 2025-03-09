import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(res.data.volumeInfo);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load book details");
      }
    };

    fetchBook();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen pt-5 px-3 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen pt-5 px-3 text-center">
        Loading book details...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-5 px-3">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <img
        src={book.imageLinks?.thumbnail}
        alt={`Cover of ${book.title}`}
        className="w-48 h-64 object-cover"
      />
      <p className="mt-4">{book.description}</p>
      <div className="mt-4">
        <strong>Authors:</strong> {book.authors?.join(', ')}
      </div>
      <div className="mt-4">
        <strong>Publisher:</strong> {book.publisher}
      </div>
      <div className="mt-4">
        <strong>Published Date:</strong> {book.publishedDate}
      </div> 
      
    </div>
  );
};

export default BookDetail;