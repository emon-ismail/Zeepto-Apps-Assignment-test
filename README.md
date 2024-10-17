# Zeepto Apps Test

## Overview
This project is a React application that utilizes various libraries and tools to create an engaging and efficient user interface. Below is an overview of the dependencies used in this project and their purposes.

## Project Features

- **Fetches Data from Gutendex API:** The application retrieves book data from [Gutendex](https://gutendex.com/books) and displays it in a user-friendly format.
- **Search Functionality:** A search bar allows users to filter books by title in real-time.
- **Genre Filtering:** A dropdown filter enables users to filter books based on genre/topic.
- **Wishlist Feature:** Users can save books to their wishlist, which is stored in local storage. Wishlisted books display a love or liked icon, which is clickable to add/remove books from the wishlist.
- **Pagination:** The book list is paginated, allowing users to navigate through pages easily.
- **Responsive Design:** The application is fully responsive, ensuring a good user experience on both desktop and mobile devices.
- **Multiple Pages:** Includes a homepage to show the book list, a wishlist page to show wishlisted books, and individual book detail pages.
- **Navbar:** A navigation bar for easy access to different sections of the application.

## Project Dependencies

1. **@heroicons/react**
   - **Purpose:** A collection of beautiful, high-quality icons designed specifically for React.
   - **Why Use It:** Simplifies adding icons to your project, making your UI more visually appealing and intuitive.

2. **aos (Animate on Scroll)**
   - **Purpose:** A library to add scrolling animations to elements on your webpage.
   - **Why Use It:** Enhances the user experience with smooth animations that trigger on scroll, making your site more engaging and visually appealing.

3. **lottie-react**
   - **Purpose:** A library to render Lottie animations in React applications.
   - **Why Use It:** Allows the use of high-quality animations created in Adobe After Effects as SVG or Canvas, which are lightweight and scalable.

4. **react**
   - **Purpose:** The core library for building user interfaces in a component-based architecture.
   - **Why Use It:** Enables the creation of reusable UI components, making your application modular and easier to maintain.

5. **react-dom**
   - **Purpose:** Serves as the entry point to the DOM and server renderers for React.
   - **Why Use It:** Enables rendering React components to the DOM.

6. **react-router-dom**
   - **Purpose:** A library for routing in React applications.
   - **Why Use It:** Allows dynamic routing and navigation, enabling the creation of single-page applications (SPAs) with multiple views.

7. **react-toastify**
   - **Purpose:** A library for adding toast notifications in React.
   - **Why Use It:** Provides an easy way to display notifications, enhancing user experience with feedback on actions performed.

8. **react-typewriter-effect**
   - **Purpose:** A React component that creates a typewriter effect.
   - **Why Use It:** Adds a unique and engaging animation to text, capturing user attention.

## Development Dependencies

1. **@eslint/js**
   - **Purpose:** ESLint configuration for JavaScript.
   - **Why Use It:** Ensures JavaScript code adheres to best practices and style guidelines.

2. **@types/react & @types/react-dom**
   - **Purpose:** TypeScript definitions for React and React DOM.
   - **Why Use It:** Provides type definitions that improve the development experience.

3. **@vitejs/plugin-react**
   - **Purpose:** Vite plugin for React.
   - **Why Use It:** Facilitates integration of React with Vite.

4. **autoprefixer**
   - **Purpose:** PostCSS plugin to parse CSS and add vendor prefixes.
   - **Why Use It:** Ensures cross-browser compatibility of CSS styles.

5. **eslint**
   - **Purpose:** Tool for identifying and fixing problems in JavaScript code.
   - **Why Use It:** Helps maintain code quality and consistency.

6. **eslint-plugin-react & eslint-plugin-react-hooks**
   - **Purpose:** Plugins for ESLint to lint React-specific code.
   - **Why Use It:** Ensures React components and hooks follow best practices.

7. **globals**
   - **Purpose:** Provides definitions for global variables in your environment.
   - **Why Use It:** Helps ESLint understand global variables.

8. **postcss**
   - **Purpose:** A tool for transforming CSS with JavaScript plugins.
   - **Why Use It:** Allows the use of modern CSS features and syntax.

9. **tailwindcss**
   - **Purpose:** A utility-first CSS framework for creating custom designs.
   - **Why Use It:** Simplifies styling by using utility classes.

10. **vite**
    - **Purpose:** A next-generation front-end tool for faster development.
    - **Why Use It:** Offers a fast development server and optimized builds.

## Summary
By leveraging these libraries and frameworks, this project is equipped to handle a range of requirements from UI design to animations, allowing for a smoother development process and a richer user experience. The choice of **AOS** enhances visual engagement by adding attractive scroll-based animations, while **Lottie** provides high-quality animated graphics, making the application feel modern and interactive.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/emon-ismail/Zeepto-Apps-Assignment-test.git

2.
cd my-practice-test

3.
npm install

4.
npm run dev
