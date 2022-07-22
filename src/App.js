import React, { useEffect, useState } from "react";
import LoadingScreen from "./sections/LoadingScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";

import { Transition } from "@headlessui/react";
import useNavigation from "./hooks/useNavigation";

function App() {
  const { navIndex, setNavIndex, navHandler } = useNavigation(1);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="app">
      {!isLoading && (
        <div className="flex flex-col h-screen">
          <header className="w-full h-[10%] sm:h-[13%]">
            <Navbar setNavIndex={setNavIndex} navIndex={navIndex} />
          </header>
          <section className="h-[80%] sm:h-[74%] overflow-y-scroll overflow-x-hidden bg-white dark:bg-[#02080f]">
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

            <Transition
              show={navIndex === 5}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Contact navHandler={navHandler} />
            </Transition>
          </section>
          <footer className="w-full h-[10%] sm:h-[13%]">
            <Footer />
          </footer>
        </div>
      )}
      <Transition
        show={isLoading}
        enter="transition ease-in-out duration-700 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <LoadingScreen />
      </Transition>
    </div>
  );
}

export default App;
