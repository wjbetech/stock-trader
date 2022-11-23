import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StockDetails } from "./Pages/StockDetails";
import { StockOverview } from "./Pages/StockOverview";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          {/* overview page component */}
          <Route
            path="/"
            element={ <StockOverview /> }
          />
          {/* details page component */}
          <Route
            path="/details/:stockName"
            element={ <StockDetails /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
