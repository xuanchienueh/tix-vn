import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Header_home from "./components/header/Header_home";
import "./App.css";
import Banner from "./components/banner";
import About_us from "./components/About_us";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import List_food from "./components/List_food";
import Delicious from "./components/Delicious";
import Blog_post from "./components/Blog_post";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const app_main = useRef();
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    app_main.current.classList.add(theme);
    return () => {
      app_main.current.classList.remove(theme);
    };
  }, [theme]);

  return (
    <div className="app_main" ref={app_main}>
      <Header_home />
      <Banner />
      <About_us />
      <Restaurant />
      <Category />
      <List_food />
      <Delicious />
      <Blog_post />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
