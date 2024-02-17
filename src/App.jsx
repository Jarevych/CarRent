import "./App.css";
import Catalog from "./pages/Catalog";
import "./fonts.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Favorite } from "pages/Favorites";
// import Layout from "components/Layout";

function App () {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Layout />} > */}
        <Route index element={<HomePage />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="favorite" element={<Favorite />} />

        <Route path="*" element={<HomePage />} />
        {/* </Route> */}
      </Routes>
     </Layout>
  );
}

export default App;
