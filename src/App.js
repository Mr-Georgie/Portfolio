import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

import { Transition } from "@headlessui/react";
import useNavigation from "./hooks/useNavigation";

function App() {
  const { navIndex, setNavIndex, navHandler } = useNavigation(1);

  return (
    <div className="app">
      {true && (
        <div className="flex flex-col h-screen">
          <header className="w-full h-[13%]">
            <Navbar setNavIndex={setNavIndex} />
          </header>
          <section className="h-[74%] overflow-y-scroll overflow-x-hidden bg-white dark:bg-[#0A192F]">
            <Transition
              show={navIndex === 1}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Home navHandler={navHandler} />
            </Transition>

            <Transition
              show={navIndex === 2}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <About navHandler={navHandler} />
            </Transition>

            <Transition
              show={navIndex === 3}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Projects navHandler={navHandler} />
            </Transition>
            <Transition
              show={navIndex === 4}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Skill navHandler={navHandler} />
            </Transition>
          </section>
          <footer className="w-full h-[13%]">
            <Footer />
          </footer>
        </div>
      )}
      {false && <LoadingScreen />}
    </div>
  );
}

export default App;
