import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Spiner from "./spiner";
interface Props {
  path: string;
  styles?: string;
}

const LottieW = ({
  path,
  styles = "min-w-[100px] min-h-[100px] max-w-[250px]",
}: Props) => {
  const [animationReady, setAnimationReady] = useState(false);

  const playerClassName = animationReady
    ? ` ${styles}`
    : "";

  const charge = () => {
    setAnimationReady(true);
  };
  return (
    <>
    {!animationReady&& <Spiner/>}
      <Player
        autoplay={true}
        loop={true}
        src={"/lottie/" + path + ".json"}
        className={playerClassName}
        onEvent={(event) => {
          if (event === "load") charge(); // check event type and do something
        }}
      ></Player>
    </>

  );
};

export default LottieW;
