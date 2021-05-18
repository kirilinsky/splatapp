import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Navigator from "./components/Navigator";
import First from "./Views/First";
import Second from "./Views/Second";
import Third from "./Views/Third";

import logo from "./assets/img/logo.png";
import Four from "./Views/Four";

const pages = ["Главная", "Наши услуги", "Фильтр", "Попробовать"];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    if (number === currentPage) return;

    setCurrentPage(number);
  };

  return (
    <div className="App">
      <img src={logo} className="logo" />
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={handlePageChange}
      >
        <First />
        <Second />
        <Third />
        <Four />
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
