import { useCallback } from "react";
import { useRouteContext } from "./useRouteContext";
import { PossibleFlows } from "../contexts/RouteContext/types";
import { CandyMap, PossibleCandies } from "../config/candies";

export enum PossibleResponses {
  WIN = "Prize given",
  LOSE = "No prize",
  NOT_FOUND = "No custom labels detected",
  NOT_CUSTOM_LABEL = "Product not found, please try again",
  TRY_AGAIN_TOMORROW = "Try again tomorrow",
  EMAIL_NOT_FOUND = "Email not found",
}

export type PrizeResponse = {
  response: PossibleResponses;
  success: boolean;
  candy_name: keyof typeof CandyMap;
};

export const usePrizeResponse = () => {
  const { setPath, flow } = useRouteContext();
  const setPrizeResponse = useCallback(
    (
      data: PrizeResponse,
      options?: {
        successCallback?: () => void;
        failCallback?: () => void;
      }
    ) => {
      console.log('data:', data);

      const { successCallback, failCallback } = options ?? {};
      const { response, candy_name } = data;
      const candyKeys = Object.keys(CandyMap);
      const randomIndex = Math.floor(
        Math.floor(Math.random() * candyKeys.length)
      );
      const randomCandyKey = candyKeys[randomIndex] ?? "sweet-tarts";
      const candy: PossibleCandies =
        CandyMap[candy_name ?? randomCandyKey] ?? "st";
      if (response === PossibleResponses.WIN) {
        successCallback?.();
        setPath(`/animation/win/${candy}`);
      } else if (response === PossibleResponses.LOSE) {
        successCallback?.();
        setPath(`/animation/lose/${candy}`);
      } else if (response === PossibleResponses.TRY_AGAIN_TOMORROW) {
        successCallback?.();
        setPath(`/animation/already-awarded/${candy}`);
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
