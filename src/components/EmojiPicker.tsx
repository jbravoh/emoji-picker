import { useState } from "react";
// import Picker from "emoji-picker-react";
import style from "./EmojiPicker.module.css";
import Emojis from "./Emojis";

export function EmojiPicker(): JSX.Element {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [storedEmoji, setStoredEmoji] = useState<string[]>([]);

  const handleEmojiSelect = (emoji: string) => {
    setChosenEmoji(emoji);
  };

  const handleStoreEmoji = () => {
    setStoredEmoji((previousValue) => [
      ...previousValue.slice(-4),
      chosenEmoji,
    ]);
  };

  const handleResetStore = () => {
    setStoredEmoji([]);
  };

  return (
    <div className={style.container}>
      <h1>Emoji Picker</h1>
      <div className={style.emojiContainer}>
        {Emojis.map(function (emoji, index) {
          return (
            <button
              className={style.emojiButton}
              onClick={() => {
                handleEmojiSelect(emoji);
              }}
              key={index}
            >
              {emoji}
            </button>
          );
        })}
      </div>
      <p className={style.label}>Current Emoji: {chosenEmoji}</p>
      <p className={style.label}>Stored Emojis: </p>

      <ul className={style.stored}>
        {storedEmoji.map((emoji, index) => {
          return <li key={index}>{emoji}</li>;
        })}
      </ul>

      <hr />
      <button className={style.button} onClick={handleStoreEmoji}>
        Store Emojis
      </button>
      <button className={style.button} onClick={handleResetStore}>
        Reset stored emojis
      </button>
    </div>
  );
}
