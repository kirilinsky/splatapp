import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Navigator from "./components/Navigator";
import First from "./Views/First";
import Second from "./Views/Second";

const pages = ["Главная", "Вторая"];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    if (number === currentPage) return;

    setCurrentPage(number);
  };

  return (
    <div className="App">
      <div className="logo"></div>
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={handlePageChange}
      >
        <First />
        <Second />
      </ReactPageScroller>
      <Navigator
        pages={pages}
        action={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
