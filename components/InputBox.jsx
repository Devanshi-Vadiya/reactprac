import { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
    setText("");
  };

  return (
    <div>
      <h2>Input Example</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>Submitted Text: {submittedText}</p>
    </div>
  );
}

export default InputBox;
