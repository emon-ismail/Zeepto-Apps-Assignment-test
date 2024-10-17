import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Breadcrumb from './Breadcrumb'; // Import the Breadcrumb component

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // React Router v6 navigation hook

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://gutendex.com/books/${id}`);
        if (!res.ok) throw new Error('Failed to fetch book data.');
        const data = await res.json();
        setBook(data);
        setLoading(false);
        document.title = data.title; // Set the document title dynamically
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen"> {/* Full screen height */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error loading book details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-6"> {/* Responsive container */}
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Books', link: '/' },
          { label: book ? book.title : 'Book Details', link: '#' },
        ]}
      />

      {book ? (
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-8 max-w-4xl mx-auto">
          <img
            src={book.formats['image/jpeg'] || 'https://via.placeholder.com/150'}
            alt={book.title}
            className="w-full h-64 sm:h-96 object-cover rounded-md" // Larger height on bigger screens
          />
          <h1 className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold mt-4">
            {book.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-2">By: {book.authors[0]?.name}</p>
          <p className="text-lg sm:text-xl text-gray-500 mt-2">Id: {book.id}</p>
          <p className="text-md sm:text-lg text-gray-400 mt-2">Subjects: {book.subjects.join(', ')}</p>
          <p className="text-md sm:text-lg text-gray-500 mt-2">Languages: {book.languages.join(', ')}</p>
          <p className="text-md sm:text-lg text-gray-500 mt-2">Media Type: {book.media_type}</p>
          <p className="text-sm sm:text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500-500 mt-4">
            Download Count: {book.download_count || 'No download count available'}
          </p>

          {/* Add download links */}
          <div className="mt-4">
            <a
              href={book.formats['application/epub+zip']}
              className="text-blue-500 hover:underline"
              download
            >
              Download EPUB
            </a>
            {' | '}
            <a
              href={book.formats['application/x-mobipocket-ebook']}
              className="text-blue-500 hover:underline"
              download
            >
              Download MOBI
            </a>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate(-1)} // Use navigate(-1) to go back
            className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Go Back
          </button>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">No book details found.</p>
      )}
    </div>
  );
};

export default BookDetails;
