import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopyText = () => {
    try {
      // Create a temporary textarea element
      const textarea = document.createElement("textarea");
      textarea.value = text; // Set the text to be copied
      document.body.appendChild(textarea); // Append it to the body
      textarea.select(); // Select the text inside the textarea
      document.execCommand("copy"); // Copy the text
      document.body.removeChild(textarea); // Remove the textarea element
      alert("Copied to Clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text. Please try again.");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
  };

  const handleFindAndReplace = () => {
    let newText = text.replaceAll(findText, replaceText);
    setText(newText);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleWordFrequency = () => {
    let words = text.split(/\s+/).filter((word) => word.length > 0);
    let frequency = {};
    words.forEach((word) => {
      word = word.toLowerCase();
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return Object.entries(frequency)
      .map(([word, count]) => `${word}: ${count}`)
      .join(", ");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h3 className="mb-2">{props.heading}</h3>
        <textarea
          className="form-control mb-3"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleChange}
          id="myBox"
          rows="5"
          placeholder="Enter text here"
        ></textarea>
        <div className="mb-3">
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleSpeak}
          >
            Speak
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleSentenceCase}
          >
            Sentence Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-2"
            onClick={handleDownload}
          >
            Download Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mb-2 mx-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
        <div className="mb-3">
          <h4>Find and Replace</h4>
          <input
            type="text"
            placeholder="Find"
            className="form-control mb-2"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Replace"
            className="form-control mb-2"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
          <button
            disabled={findText.length === 0 || replaceText.length === 0}
            className="btn btn-info"
            onClick={handleFindAndReplace}
          >
            Replace Text
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((word) => word.length !== 0).length} words
          and {text.length} characters
        </p>
        <p>Characters (excluding spaces): {text.replace(/\s/g, "").length}</p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.length !== 0).length}{" "}
          Minutes read
        </p>
        <h4>Word Frequency:</h4>
        <p>
          {text.length > 0 ? handleWordFrequency() : "No words to analyze."}
        </p>
        <h4>Text Preview:</h4>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </>
  );
}
