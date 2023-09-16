import React, { useEffect, useState } from "react";
import LoadingScreen from "./sections/LoadingScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Others from "./sections/Others";
import ContactMe from "./sections/ContactMe";

import { Transition } from "@headlessui/react";
import useNavigation from "./hooks/useNavigation";

function App() {
  const { navIndex, setNavIndex } = useNavigation(1);

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
        <div className="flex flex-col">
          <header className="w-full relative">
            <Navbar setNavIndex={setNavIndex} navIndex={navIndex} />
          </header>
          <section className="">
            <Home />
            <Experience />
            <Projects />
            <Others />
            <ContactMe />
          </section>
          <footer className="w-full">
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
