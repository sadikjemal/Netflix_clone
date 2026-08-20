# Netflix Clone

A responsive Netflix-style interface built with React and Vite.

## Footer section

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

