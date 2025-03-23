import { useEffect, useState } from "react";


export const useScrollPosition = (scrollFactor = 0) => {
  const [position, setPosition] = useState(0);

  //this function will set the value of position when the page is scrolled
  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    //removes the eventlistener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return position * scrollFactor;
}

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState('right');
  const { width } = useWindowSize();

  // Determine itemsPerPage based on window width
  const itemsPerPage = width <= 640 ? 2 : width <= 1024 ? 3 : 4; // Adjust based on your breakpoints

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Ensure that currentPage is not out of bounds after a resize
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages); // Reset to the last available page
    }
  }, [totalPages, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setDirection(page > currentPage ? 'right' : 'left');
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    paginatedData,
    currentPage,
    totalPages,
    goToPage,
    direction,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};