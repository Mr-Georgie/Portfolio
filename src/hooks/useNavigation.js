import { useState } from "react";

export default function useNavigation(number) {
  const [navIndex, setNavIndex] = useState(number);

  const navHandler = (direction) => {
    if (direction === "next") {
      setNavIndex((currentIndex) => currentIndex + 1);
    }
    if (direction === "previous") {
      setNavIndex((currentIndex) => currentIndex - 1);
    }
  };
  return { navIndex, setNavIndex, navHandler };
}
