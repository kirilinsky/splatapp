import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import { First, Second, Third, Fourth, Compare } from "./Views";
import { Header } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    if (number === currentPage) return;

    setCurrentPage(number);
  };

  return (
    <div className="App">
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={handlePageChange}
      >
        <First handlePageChange={handlePageChange} />
        <Second />
        <Third />
        <Fourth />
        <Compare />
      </ReactPageScroller>
    </div>
  );
}

export default App;
