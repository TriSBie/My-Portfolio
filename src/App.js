import "./App.css";
import React from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scences/Navbar";
import DotGroup from "./scences/DotGroup";
import Landing from "./scences/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scences/MySkills";
import Projects from "./scences/Projects";

function App() {

  const [selectedPage, setSelectedPage] = React.useState('home') // by default - home landing
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");
  const [isTopOfPage, setIsTopOfPage] = React.useState(false);
  // using single responsibility principle technique.
  // a component should ideally do one thing
  React.useEffect(() => {
    console.log(window.scrollY)
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => { //clean function
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (<DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />)}
        <Landing setSelectedPage={setSelectedPage} />
        <LineGradient />
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

    </div>
  );
}

export default App;
