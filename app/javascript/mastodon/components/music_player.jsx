import GreenAudioPlayer from "./greenaudioplayer";
import { useEffect } from "react";
import music from "mastodon/../sounds/Swing_Jazz_Drum.mp3";

export const MusicPlayer = () => {
  useEffect(() => {
    new GreenAudioPlayer(".gap-example");
  }, []);

  return (
    <>
      <div class="gap-example">
        <audio
            src={music} loop="true">
        </audio>
      </div>
    </>
  );
};