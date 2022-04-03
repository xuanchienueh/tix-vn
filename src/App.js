import Header_home from "./components/header/Header_home";
// import {  } from "reactstrap";
import "./App.css";
import Banner from "./components/banner";
import About_us from "./components/About_us";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import List_food from "./components/List_food";
import Delicious from "./components/Delicious";
import Blog_post from "./components/Blog_post";
import Testimonials from "./components/Testimonials";
import DemoUseTrail from "./react-spring/DemoUseTrail";
import DemoUseTransition from "./react-spring/DemoUseTransition";

function App() {
  return (
    <>
      <Header_home />
      <Banner />
      <About_us />
      <Restaurant />
      <Category />
      <List_food />
      <Delicious />
      <Blog_post />
      <Testimonials />
    </>
  );
}

export default App;
