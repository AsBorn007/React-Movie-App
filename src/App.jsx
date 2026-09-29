import { Button } from "@mui/material";
import MoviesCollection from "./Pages/MoviesCollection";
import HeaderBar from "./Component/AppBar";
import Footer from "./Component/Footer";

export const App = () => {
  return (
    <>
      <HeaderBar />
      <MoviesCollection />
      <Button />
      <Footer/>
    </>
  );
};
