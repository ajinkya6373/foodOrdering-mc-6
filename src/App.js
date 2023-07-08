import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage, RestaurantDetailPage } from './pages';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/restaurant-detail/:id" element={<RestaurantDetailPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
