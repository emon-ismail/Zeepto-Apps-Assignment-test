import { createBrowserRouter } from 'react-router-dom';

 import Home from '../Pages/Home';
 import Layout from '../Layout/Layout';
import Book from '../Pages/Book';
import WishlistPage from '../Pages/WishlistPage';
import BookDetails from '../Pages/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",  // Root path with Layout
    element: <Layout />,  // Layout component is common
    children: [
      {
        path: "/",  // Empty string as path will match '/'
        element: <Home />,  // Home component for '/'
      },
      {
        path: "/book",  // Empty string as path will match '/'
        element: <Book />,  // Home component for '/'
      },
      {
        path: "/wishlist",  // Empty string as path will match '/'
        element: <WishlistPage />,  // Home component for '/'
      },
     
      {
        path: "/book/:id",  // Empty string as path will match '/'
        element: <BookDetails />,  // Home component for '/'
      },
     
    
    ],
  },
]);

export default router;
