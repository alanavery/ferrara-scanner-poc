import { createContext, useEffect, useState } from "react";
import { ROUTES } from "../../routes";
import { PossibleFlows, PossiblePaths } from "./types";

type RouteContextType = {
  path: PossiblePaths;
  flow: PossibleFlows;
  setPath: (route: PossiblePaths) => void;
};

export const RouteContext = createContext<RouteContextType>(
  {
    path: "/amoe",
    flow: PossibleFlows.AMOE,
    setPath: () => {},
  },
);

export const RouteProvider: React.FC = () => {
  const [path, setPath] = useState<PossiblePaths>("/amoe");
  const [flow, setFlow] = useState<PossibleFlows>(
    PossibleFlows.AMOE,
  );

  useEffect(() => {
    const initialPath = window.location.pathname;
    if (["/", "/amoe"].includes(initialPath)) {
      setFlow(PossibleFlows.AMOE);
      setPath("/amoe");
    } else {
      setFlow(PossibleFlows.MOBILE);
      setPath("/email-form");
    }
    if (import.meta.env.DEV) {
      setPath(initialPath as PossiblePaths);
    }
  }, []);

  const render = ROUTES[path]?.component;

  return (
    <RouteContext.Provider value={{ path, setPath, flow }}>
      {render ?? <h1>Not found</h1>}
    </RouteContext.Provider>
  );
};
