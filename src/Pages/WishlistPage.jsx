import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Correct import
import 'react-toastify/dist/ReactToastify.css'; // Include toast styles
import book from '../book.json';
import Lottie from 'lottie-react';  // Import Lottie component
import Typewriter from 'react-typewriter-effect'; // Import Typewriter

const WishlistPage = () => {
  const [wishlist, setWishlist] = React.useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  // Function to remove a book from the wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((book) => book.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    // Show toast notification
    toast.success('Book removed from wishlist!', {
      position: 'top-center',
      autoClose: 3000, // Auto close after 3 seconds
    });
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer /> {/* Ensure this is included for the toast notifications */}
      
      {wishlist.length === 0 ? (
        <div>
        <div className="flex justify-center items-center">
  <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
    <Typewriter
      textStyle={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '',
        fontWeight: 'bold',
        
      }}
      startDelay={100}
      cursorColor="#000"
      text="No books in wishlist."
      typeSpeed={150}
      hideCursorAfterText={true}
     
    />
  </h2>
</div>

          
          {/* Lottie Animation */}
          <div className="flex justify-center items-center">
            <Lottie 
              animationData={book} 
              loop={true} 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      ) : (
        
      <div>
          <div className="flex justify-center items-center py-3">
  <h2 className="text-xl  md:text-3xl border-purple-600 border p-3 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
    <Typewriter
      textStyle={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '',
        fontWeight: 'bold',
        
      }}
      startDelay={100}
      cursorColor="#000"
      text="My wishlist."
      typeSpeed={150}
      hideCursorAfterText={true}
     
    />
  </h2>
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {wishlist.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-3xl shadow-md">
              <img
                src={book.formats['image/jpeg'] || 'https://via.placeholder.com/150'}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="mt-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{book.title}</h2>
              <p className=' text-lg' >By: {book.authors[0]?.name}</p>
              {/* <p className='py-1 text-lg'>Genre: {book.subjects.join(', ')}</p> */}

              <div className='flex flex-col pt-8 sm:flex-row justify-between items-center'>
  {/* "See Details" Button */}
  <Link
    to={`/book/${book.id}`}
    className="font-bold mt-4 sm:mt-0 inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto text-center"
  >
    See Details
  </Link>
  
  <button
    onClick={() => removeFromWishlist(book.id)}
    className="mt-2 font-semibold sm:mt-0 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto text-center"
  >
    Remove from Wishlist
  </button>
</div>

            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default WishlistPage;
