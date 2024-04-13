import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
