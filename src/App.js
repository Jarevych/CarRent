import "./App.css";
import Catalog from "./pages/Catalog";
import "./fonts.css";
// import { Filter } from './components/Filter';
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </Layout>
  );
}

export default App;
