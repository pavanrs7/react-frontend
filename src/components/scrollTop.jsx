import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  // This effect runs every time the 'pathname' (the route) changes
  useEffect(() => {
    // Scroll the window to the top left (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: runs only when 'pathname' changes

  // This component renders nothing, it only handles the side effect (scrolling)
  return null;
}

export default ScrollToTop;
