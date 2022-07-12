import { useState } from "react";

export default function useToggle(status) {
  const [on, setOn] = useState(status);

  const toggler = () => {
    setOn((on) => !on);
  };

  return { on, toggler };
}
