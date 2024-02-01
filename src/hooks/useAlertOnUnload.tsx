import { useEffect } from "react";

export const useAlertOnUnload = () => {
  useEffect(() => {
    const alertUser = (
      event: WindowEventHandlersEventMap["beforeunload"],
    ) => {
      event.preventDefault();
      return (event.returnValue = "");
    };
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
};
