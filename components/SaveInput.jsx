import { useState } from "react";

function SaveInput() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState([]);

  const handleSubmit = () => {
    if (text === "") return;

    setSavedText([...savedText, text]);
    setText("");
  };

  return (
    <div>
      <h2>Save Text</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Saved Section</h3>

      {savedText.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default SaveInput;
