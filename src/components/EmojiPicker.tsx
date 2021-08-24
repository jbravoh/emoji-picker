import { useState } from "react";
// import Picker from "emoji-picker-react";
import style from "./EmojiPicker.module.css";
import Emojis from "./Emojis"

export function EmojiPicker(): JSX.Element {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [storedEmoji, setStoredEmoji] = useState<string[]>([]);


  const handleEmojiSelect= (emoji: string) => {
    setChosenEmoji(emoji)
    setStoredEmoji(previousValue => [...previousValue.slice(-1), emoji])
  }


  return (
    <div className={style.container}>
      <h1>Emoji Picker</h1>
      <div className={style.labels}>
        <p className={style.label}>Current Emoji: {chosenEmoji}</p>
        <p className={style.label}>Stored Emojis: {storedEmoji} </p>
      </div>
      <div className={style.emojiContainer}>
          {Emojis.map( function(emoji, index) {
              return <button onClick={() => {handleEmojiSelect(emoji)}} key={index}>{emoji}</button>
          })}
      </div>

      <hr />

    </div>
  );
}
