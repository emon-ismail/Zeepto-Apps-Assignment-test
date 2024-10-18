import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="mb-4 px-2 sm:px-4 md:px-6 lg:px-8 bg-white shadow rounded-b-2xl p-6"> {/* Responsive padding */}
      <ol className="list-reset flex flex-wrap justify-center sm:justify-start text-grey-dark">
        {paths.map((path, index) => (
          <li key={index} className="text-sm sm:text-base md:text-lg lg:text-xl">
            <Link 
              to={path.link} 
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:text-blue-700">
              {path.label}
            </Link>
            {/* Responsive spacing between breadcrumb items */}
            {index < paths.length - 1 && (
              <span className="mx-1 sm:mx-2 text-black">/</span> 
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
