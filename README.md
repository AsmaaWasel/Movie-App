# Movie-App🎞️
This project is a simple movie browsing web application built with React. Let's break down its key components and functionality:

Home Component: The Home component is the main page of the application. It displays a list of movies fetched from The Movie Database (TMDb) API using the Axios library. The list of movies is obtained from the API's "discover" endpoint, which provides a list of popular movies.

Navigation: The navigation bar at the top of the page contains links to the home page (/) and an about page (/about). These links are implemented using React Router's Link component, providing a seamless navigation experience within the single-page application.

Movie Cards: Each movie is displayed as a card containing its title, poster image, and average rating. These movie cards are dynamically generated based on the data fetched from the API. Clicking on a movie card navigates the user to a detailed view of that movie.

Styling: The project includes CSS styles for various elements such as the navigation bar, movie cards, and overall layout. The styling provides a visually appealing and user-friendly interface for browsing movies.

Responsive Design: The layout of the application is designed to be responsive, ensuring that it looks good and functions well across different screen sizes and devices.

Overall, this project demonstrates how to build a basic movie browsing application using React, Axios for fetching data from an API, and React Router for navigation. It provides users with a simple yet effective way to explore and discover movies.
