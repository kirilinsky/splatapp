import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import { First, Second, Third, Fourth, Compare } from "./Views";
import { Header } from "./components";
import ModalInner from "./components/Modal";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const handlePageChange = (number) => {
    if (number === currentPage) return;

    setCurrentPage(number);
  };

  return (
    <div className="App">
      <ModalInner open={open} toggle={toggle} />
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={handlePageChange}
      >
        <First toggle={toggle} handlePageChange={handlePageChange} />
        <Second />
        <Third />
        <Fourth />
        <Compare toggle={toggle} />
      </ReactPageScroller>
    </div>
  );
}

export default App;
