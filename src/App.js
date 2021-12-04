import Home from "./Components/Home";
import { FilterStatesProvider } from "./context/FilterContext";
import { SortProvider } from "./context/SortContext";

function App() {
  return (
    <div className="App">
      <FilterStatesProvider>
        <SortProvider>
          <Home />
        </SortProvider>
      </FilterStatesProvider>
    </div>
  );
}

export default App;
