import Webcam from "react-webcam";
import { Title } from "../../components/Title";
import styles from "./index.module.css";
import { useCallback, useEffect, useRef } from "react";
import logos from "../../assets/logos.png";
import { useAlertOnUnload } from "../../hooks/useAlertOnUnload";
import { useAxios } from "../../axios";
import { useFormDataContext } from "../../hooks/useFormDataContext";
import { PrizeResponse, usePrizeResponse } from "../../hooks/usePrizeResponse";
import * as tmImage from "@teachablemachine/image";

export const Scan = () => {
  interface Model {
    [key: string]: any;
  }

  const mediaRef = useRef<Webcam>(null);
  const interval = useRef<number | null>(null);
  const initiated = useRef(false);
  const URL = "https://teachablemachine.withgoogle.com/models/YdvUHcLXP/";
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  let model: Model;
  let maxPredictions: number;

  useAlertOnUnload();

  const [, submit] = useAxios<PrizeResponse>(
    {
      url: "/image_recognition/award_prize",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    { manual: true }
  );

  const { formData } = useFormDataContext();

  const setPrizeResponse = usePrizeResponse();

  const capture = useCallback(async () => {
    try {
      const imageSrc = mediaRef.current?.getCanvas();

      if (imageSrc) {
        const prediction = await model.predict(imageSrc);
        let response = "No custom labels detected";
        let candyName = "";

        for (let i = 0; i < maxPredictions; i++) {
          const className = prediction[i].className;
          const probability = prediction[i].probability.toFixed(2);

          if (className !== "No Candy" && probability >= 0.9) {
            switch (className) {
              case "Black Forest":
                candyName = "black-forest";
                break;

              case "Laffy Taffy":
                candyName = "laffy-taffy";
                break;

              case "Nerds":
                candyName = "nerds";
                break;

              case "Sweetarts":
                candyName = "sweetarts";
                break;

              case "Trolli":
                candyName = "trolli";
                break;

              default:
                break;
            }

            response = "Prize given";
          }
        }

        const responseData = {
          response,
          success: true,
          candy_name: candyName,
        };

        // @ts-expect-error
        setPrizeResponse(responseData, {
          successCallback: () => {
            interval.current && clearTimeout(interval.current);
          },
        });
      } else {
        console.error("Image not available");
      }
    } catch (e) {
      console.error(e);
    }
  }, [formData, setPrizeResponse, submit]);

  const startInterval = useCallback(() => {
    console.log("Start interval!");

    async function intervalFunction() {
      await capture();
      // @ts-expect-error
      interval.current = setTimeout(intervalFunction, 250);
    }

    intervalFunction();
  }, [capture]);

  useEffect(() => {
    async function init() {
      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();
      console.log(maxPredictions);

      initiated.current = true;
      setTimeout(startInterval, 1500);
      return () => {
        interval.current && clearTimeout(interval.current);
      };
    }

    if (!initiated.current) {
      init();
    }
  }, [startInterval, capture]);

  return (
    <div className={styles.container}>
      <Webcam
        ref={mediaRef}
        audio={false}
        screenshotFormat="image/jpeg"
        imageSmoothing={false}
        disablePictureInPicture
        className={styles.video}
        videoConstraints={{
          facingMode: "environment",
        }}
      />
      <div>
        <Title>Center the logo on your screen</Title>
      </div>
      <div className={styles["focus-area"]}>
        <span />
        <span />
        <span />
        <span />
      </div>
      <img className={styles.logos} src={logos} alt="candy logo" />
    </div>
  );
};
