import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Loader from '../Reusable components/Loader';

const BookApp = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || ''); // Load search term from localStorage
  const [genre, setGenre] = useState(localStorage.getItem('genre') || ''); // Load genre from localStorage
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const booksPerPage = 10;
  const maxVisiblePages = 5;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

  // Save search term and genre to localStorage when they change
  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('genre', genre);
  }, [genre]);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch(`https://gutendex.com/books/?page=${currentPage}&page_size=${booksPerPage}`);
    const data = await res.json();
    setBooks(data.results);
    setTotalBooks(data.count);
    extractGenres(data.results);
    setLoading(false);
  };

  const extractGenres = (books) => {
    const allGenres = new Set();
    books.forEach((book) => {
      book.subjects.forEach((subject) => {
        allGenres.add(subject);
      });
    });
    setGenres([...allGenres]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleGenreFilter = (e) => {
    setGenre(e.target.value);
  };

  const toggleWishlist = (book) => {
    let updatedWishlist = [...wishlist];
    const bookInWishlist = wishlist.find((item) => item.id === book.id);

    if (bookInWishlist) {
      updatedWishlist = updatedWishlist.filter((item) => item.id !== book.id);
      toast.info('Removed from Wishlist', {
        transition: Zoom,
      });
    } else {
      updatedWishlist.push(book);
      toast.success('Added to Wishlist', {
        transition: Zoom,
      });
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) &&
    (genre ? book.subjects.includes(genre) : true) // Apply genre filter
  );

  const totalPages = Math.ceil(totalBooks / booksPerPage);



  const renderPagination = () => {
    if (totalPages <= 1 || filteredBooks.length <= booksPerPage) return null; // Hide pagination if there's only one page or filtered books are less than booksPerPage

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-300 rounded text-xs sm:text-base"
        >
          Previous
        </button>
      )}
    
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-base ${page === currentPage ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
        >
          {page}
        </button>
      ))}
    
      {currentPage < totalPages && (
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-300 rounded text-xs sm:text-base"
        >
          Next
        </button>
      )}
    </div>
    
    );
  };

  return (
    <div className='md:px-10'>
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        transition={Zoom}
      />
      <div className="shadow rounded-b-2xl text-white p-6 flex flex-col md:flex-row md:justify-between items-center" style={{ backgroundColor: 'var(--bg-color)' }}>
        <h1 className="text-2xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-b-2 border-b-purple-600 hidden md:block" 
          data-aos="zoom-in-left">Book List</h1>
        
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto" data-aos="zoom-in-right">
          <input
            type="text"
            placeholder="Search by title"
            className="px-4 py-3 w-full md:w-64 rounded-lg border-2 border-purple-500 text-black focus:border-pink-500 focus:ring focus:ring-blue-200 transition mb-4 md:mb-0 md:mr-4"
            value={searchTerm}
            onChange={handleSearch}
          />

          <select 
            className="text-black w-full md:w-auto px-4 py-3 rounded-lg border-2 border-purple-500 focus:border-pink-500 focus:ring focus:ring-blue-200 transition"
            onChange={handleGenreFilter} 
            value={genre}
          >
            <option value="">All Books</option> {/* Add an "All Books" option */}
            {genres.map((genre, index) => (
              <option className='text-black font-semibold' key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          {/* <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div> */}
          <Loader></Loader>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <h2 className="text-4xl font-bold text-gray-500">No Books Found</h2>
        </div>
      ) : (
        <>
         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:gap-6 sm:p-6">
  {filteredBooks.map((book) => (
    <div
      key={book.id}
      className="card bg-white shadow-md p-3 rounded-2xl hover:shadow-lg hover:rounded-xl transition-all duration-300"
    >
      <img
        src={book.formats['image/jpeg'] || 'https://via.placeholder.com/150'}
        alt={book.title}
        className="w-full h-40 sm:h-48 object-cover rounded-xl"
      />
      <h2 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        {book.title}
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 py-1">By: {book.authors[0]?.name}</p>
      <p className="text-xs sm:text-sm text-gray-400 py-1">Genre: {book.subjects.join(', ')}</p>
      <p className="text-xs sm:text-sm text-gray-400">ID: {book.id}</p>

      <div className="flex justify-between items-center mt-3 sm:mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(book); // Toggle the wishlist status
          }}
          className={`${
            wishlist.find((item) => item.id === book.id)
              ? 'text-red-600 text-base sm:text-lg font-bold'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-base sm:text-lg'
          }`}
        >
          {wishlist.find((item) => item.id === book.id) ? '❤️ Wishlisted' : '♡ Add to Wishlist'}
        </button>

        <Link to={`/book/${book.id}`} className="inline-block bg-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded">
          Read
        </Link>
      </div>
    </div>
  ))}
</div>


          {filteredBooks.length > 0 && renderPagination()}
        </>
      )}
    </div>
  );
};

export default BookApp;
