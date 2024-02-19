import Webcam from "react-webcam";
import { Title } from "../../components/Title";
import styles from "./index.module.css";
import { useCallback, useEffect, useRef } from "react";
import logos from "../../assets/logos.png";
import { useAlertOnUnload } from "../../hooks/useAlertOnUnload";
import { useAxios } from "../../axios";
import { useFormDataContext } from "../../hooks/useFormDataContext";
import { PrizeResponse, usePrizeResponse } from "../../hooks/usePrizeResponse";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

const resizeImage = (src: string, width = 600) => {
  return new Promise<string>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const elem = document.createElement("canvas");
      const scaleFactor = width / img.width;
      elem.width = width;
      elem.height = img.height * scaleFactor;
      const ctx = elem.getContext("2d");
      ctx?.drawImage(img, 0, 0, elem.width, elem.height);
      const data = ctx?.canvas.toDataURL("image/jpeg", 0.75);
      resolve(data || "");
    };
    img.src = src;
  });
};

const srcToBlob = async (src: string) => {
  const res = await fetch(src);
  const blob = await res.blob();
  return blob;
};

export const Scan = () => {
  const mediaRef = useRef<Webcam>(null);
  const interval = useRef<number | null>(null);
  const initiated = useRef(false);
  const URL = "https://teachablemachine.withgoogle.com/models/YdvUHcLXP/";
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  let model, webcam, labelContainer, maxPredictions;

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
      console.log("mediaRef", mediaRef);

      // const imageSrc = mediaRef.current?.getScreenshot();
      const imageSrc = mediaRef.current?.getCanvas();
      if (imageSrc) {
        console.log(imageSrc);
        // const resizedImage = await resizeImage(imageSrc);
        // const blob = await srcToBlob(resizedImage);
        const prediction = await model.predict(imageSrc);
        for (let i = 0; i < maxPredictions; i++) {
          const className = prediction[i].className;
          const probability = prediction[i].probability.toFixed(2);

          if (className !== "No Candy" && probability >= 0.9) {
            switch (className) {
              case 'Black Forest':

                break;

              case 'Laffy Taffy':

                break;

              case 'Nerds':

                break;

              case 'Sweetarts':

                break;

              case 'Trolli':

                break;

              default:
                break;
            }
          }
        }

        // const form = new FormData();
        // form.append("image", blob, "image.jpeg");
        // Object.entries(formData).forEach(([key, value]) => {
        //   form.append(key, value);
        // });
        // const { data } = await submit({
        //   data: form,
        // });
        // const responseData = data;
        // setPrizeResponse(responseData, {
        //   successCallback: () => {
        //     interval.current && clearTimeout(interval.current);
        //   },
        // });
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
