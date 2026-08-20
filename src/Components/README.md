## 5  About slideShow concept 

  ### React Components and Props
  - Connected `DisplayRow`, `SlideShow`, and `MovieCard`
  components to display movie data.
  - Learned how prop names must match, such as passing
  `movies={movies}` to `SlideShow`.

  ### Rendering Lists in React
  - Used `.map()` to render a movie card for every movie in
  the data array.
  - Added a unique `key={movie.id}` so React can manage the
  list correctly.

  ### Debugging JSX and Imports
  - Fixed common issues such as missing `return` inside
  `.map()`, incorrect folder-name casing, and invalid JSX
  syntax.
  - Learned to read Vite error messages and correct
  component imports and prop names.

  ### Swiper Movie Carousel
  - Added a Swiper carousel with left and right navigation
  arrows.
  - Used `spaceBetween`, `slidesPerView`, and fixed slide
  widths to control movie spacing and scrolling.

  ### Responsive Layout and CSS Modules
  - Used CSS Modules to style each component without
  affecting other files.
  - Made movie cards keep a fixed size on smaller screens,
  hiding extra movies until the user slides.

  ### Hover Effects and UI Spacing
  - Created hover movie cards with extra movie information
  and action icons.
  - Adjusted overflow, padding, margins, image sizes, and
  spacing for a cleaner Netflix-style design.

  ## 6 About API integration with Netflix Clone
   # Netflix Clone

  A responsive Netflix-style web application built with React and Vite.
  It fetches real movie and TV show data from the TMDB API and displays it in Netflix-inspired rows and a
  dynamic banner.

  ## Features

  - Fetches movie and TV show data from the TMDB API
  - Displays trending, Netflix originals, top-rated, and action content
  - Shows a randomly selected Netflix-original banner on each load
  - Reusable Axios instance for API requests
  - Organized API request URLs in the `Utility` folder
  - Responsive movie sliders and Netflix-style interface

  ## API Integration

  This project uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to retrieve
  movie and TV show information.

  The API integration is organized in the `src/Utility` folder:

  - `MovieInstance.jsx` — Creates a reusable Axios instance with the TMDB base URL.
  - `requestUrls.js` — Contains API endpoints for trending, Netflix originals, top-rated, action, comedy,
  horror, romance, and documentary content.

  ## Environment Variables

  Create a `.env` file in the project root and add your TMDB API key:

  ```env
  VITE_TMDB_API_KEY=your_tmdb_api_key_here

  > Never upload your API key to GitHub. Add .env to your .gitignore file.

  ## Technologies Used

  - React
  - Vite
  - Axios
  - TMDB API
  - React Router
  - Swiper
  - Lucide React

  ## Installation

  git clone <your-repository-url>
  cd netflix
  npm install
  npm run dev

  ## Project Structure

  src/
  ├── Components/        # UI components such as Banner, Header, and movie rows
  ├── Utility/
  │   ├── MovieInstance.jsx  # Axios configuration
  │   └── requestUrls.js     # TMDB API endpoints
  ├── App.jsx
  └── main.jsx

  ## Disclaimer

  This project is created for educational purposes only and is not affiliated with Netflix.
  Movie and TV show data and images are provided by TMDB.




## 7 Footer section

The application now includes a reusable, responsive footer inspired by the Netflix layout. It is rendered at the bottom of the main application in `src/App.jsx`.

### What it includes

- Social-media icons for Facebook, Instagram, Twitter, and YouTube, provided by `react-icons`.
- Four columns of Netflix-style navigation links, including Help Centre, Jobs, Terms of Use, Privacy, and Contact Us.
- A copyright notice.
- Responsive layouts: four columns on larger screens, two columns on tablets and phones, and one column on very small screens.
- Hover states for social icons and navigation links.

### Component structure

```text
src/
`-- Components/
    `-- Footer/
        |-- Footer.jsx          # Footer markup and link data
        `-- Footer.module.css   # Scoped responsive styles
```

`Footer.jsx` keeps the link labels in an array and renders each column with `map()`, making the footer easy to update. Its styles are scoped with a CSS Module, so they do not affect other components.

### Usage

```jsx
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

> The current footer links use `#` placeholders. Replace them with real routes or external URLs when those pages are available.

