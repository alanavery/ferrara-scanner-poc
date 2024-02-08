import { Animation } from "./components/Animation";
import { AlreadyAwarded } from "./screens/AlreadyAwarded";
import { EmailForm } from "./screens/EmailForm";
import { HomeAMOE } from "./screens/HomeAMOE";
import { Instructions } from "./screens/Instructions";
import { NotWinner } from "./screens/NotWinner";
import { OfficialRules } from "./screens/OfficialRules";
import { Scan } from "./screens/Scan";
import { Winner } from "./screens/Winner";
import { WinnerFormConfirmation } from "./screens/WinnerFormConfirmation";

export const ROUTES = {
  "/": { component: <EmailForm /> },
  "/email-form": { component: <EmailForm /> },
  "/amoe": { component: <HomeAMOE /> },
  "/instructions": { component: <Instructions /> },
  "/winner": { component: <Winner /> },
  "/winner-confirmation": {
    component: <WinnerFormConfirmation />,
  },
  "/not-winner": {
    component: <NotWinner />,
  },
  "/already-awarded": {
    component: <AlreadyAwarded />,
  },
  "/scan": {
    component: <Scan />,
  },
  "/animation/win/st": {
    component: <Animation candy="st" state="win" />,
  },
  "/animation/lose/st": {
    component: <Animation candy="st" state="lose" />,
  },
  "/animation/already-awarded/st": {
    component: <Animation candy="st" state="already-awarded" />,
  },
  "/animation/win/tl": {
    component: <Animation candy="tl" state="win" />,
  },
  "/animation/lose/tl": {
    component: <Animation candy="tl" state="lose" />,
  },
  "/animation/already-awarded/tl": {
    component: <Animation candy="tl" state="already-awarded" />,
  },
  "/animation/win/nd": {
    component: <Animation candy="nd" state="win" />,
  },
  "/animation/lose/nd": {
    component: <Animation candy="nd" state="lose" />,
  },
  "/animation/already-awarded/nd": {
    component: <Animation candy="nd" state="already-awarded" />,
  },
  "/animation/win/gb": {
    component: <Animation candy="gb" state="win" />,
  },
  "/animation/lose/gb": {
    component: <Animation candy="gb" state="lose" />,
  },
  "/animation/already-awarded/gb": {
    component: <Animation candy="gb" state="already-awarded" />,
  },
  "/animation/win/lt": {
    component: <Animation candy="lt" state="win" />,
  },
  "/animation/lose/lt": {
    component: <Animation candy="lt" state="lose" />,
  },
  "/animation/already-awarded/lt": {
    component: <Animation candy="lt" state="already-awarded" />,
  },
  "/official-rules": {
    component: <OfficialRules />,
  },
};

export const MOBILE_BEGINNING_PATHS: (keyof typeof ROUTES)[] = [
  "/",
  "/email-form",
];

export const AMOE_BEGINNING_PATHS: (keyof typeof ROUTES)[] = ["/amoe"];
export const BEGINNING_PATHS: (keyof typeof ROUTES)[] = ["/official-rules"];
