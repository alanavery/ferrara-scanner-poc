import { useCallback } from "react";
import { useRouteContext } from "./useRouteContext";
import { PossibleFlows } from "../contexts/RouteContext/types";

export enum PossibleResponses {
  WIN = "Prize given",
  LOSE = "No prize",
  NOT_FOUND = "No custom labels detected",
  NOT_CUSTOM_LABEL = "Product not found, please try again",
  TRY_AGAIN_TOMORROW = "Try again tomorrow",
  EMAIL_NOT_FOUND = "Email not found",
}

export const CandyMap = {
  "sweet-tarts": "st",
  trolli: "tl",
  nerds: "nd",
  "gummy-bear": "gb",
  "laffy-taffy": "lt",
};

export enum PossibleCandies {}

export type PrizeResponse = {
  response: PossibleResponses;
  success: boolean;
  candy_name: keyof typeof CandyMap;
};

export const usePrizeResponse = () => {
  const { setPath, flow } = useRouteContext();
  const setPrizeResponse = useCallback(
    (
      response: PossibleResponses,
      options?: {
        successCallback?: () => void;
        failCallback?: () => void;
      }
    ) => {
      const { successCallback, failCallback } = options ?? {};
      if (response === PossibleResponses.WIN) {
        successCallback?.();
        setPath("/animation/win/st");
      } else if (response === PossibleResponses.LOSE) {
        successCallback?.();
        setPath("/animation/lose/st");
      } else if (response === PossibleResponses.TRY_AGAIN_TOMORROW) {
        successCallback?.();
        setPath("/animation/already-awarded/st");
      } else if (response === PossibleResponses.EMAIL_NOT_FOUND) {
        successCallback?.();
        setPath(flow === PossibleFlows.AMOE ? "/amoe" : "/email-form");
      } else {
        failCallback?.();
      }
    },
    [flow, setPath]
  );

  return setPrizeResponse;
};
