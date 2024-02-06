import { createContext, useEffect, useState } from "react";
import {
  AMOE_BEGINNING_PATHS,
  BEGINNING_PATHS,
  MOBILE_BEGINNING_PATHS,
  ROUTES,
} from "../../routes";
import { PossibleFlows, PossiblePaths } from "./types";

type RouteContextType = {
  path: PossiblePaths;
  flow: PossibleFlows;
  setPath: (route: PossiblePaths) => void;
};

export const RouteContext = createContext<RouteContextType>({
  path: "/amoe",
  flow: PossibleFlows.AMOE,
  setPath: () => {},
});

export const RouteProvider: React.FC = () => {
  const [path, setPath] = useState<PossiblePaths>("/amoe");
  const [flow, setFlow] = useState<PossibleFlows>(PossibleFlows.AMOE);

  useEffect(() => {
    const initialPath = window.location.pathname;
    const isAmoe = AMOE_BEGINNING_PATHS.includes(
      initialPath as keyof typeof ROUTES
    );
    const isBeginningPath =
      import.meta.env.DEV ||
      isAmoe ||
      MOBILE_BEGINNING_PATHS.includes(initialPath as keyof typeof ROUTES) ||
      BEGINNING_PATHS.includes(initialPath as keyof typeof ROUTES);
    setFlow(isAmoe ? PossibleFlows.AMOE : PossibleFlows.MOBILE);
    if (isBeginningPath) {
      setPath(initialPath as PossiblePaths);
    } else {
      setPath("/");
    }
  }, []);

  const render = ROUTES[path]?.component;

  return (
    <RouteContext.Provider value={{ path, setPath, flow }}>
      {render ?? <h1>Not found</h1>}
    </RouteContext.Provider>
  );
};
