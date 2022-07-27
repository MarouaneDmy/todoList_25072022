import { useState } from "react";

const useModal = () => {
  /* Setting the initial state of the isShowing variable to false. */
  const [isShowing, setIsShowing] = useState(false);

  /**
   * The toggle function is a function that sets the state of the isShowing variable to the opposite of
   * what it currently is.
   */
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
};

export default useModal;