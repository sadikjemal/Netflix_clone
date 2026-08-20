## About slideShow concept 

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

  ## About API integration with Netflix Clone