import React from 'react';

export default function About() {
  return (
    <div className="container">
      <h2>About TextUtil</h2>
      <p>
        TextUtil is a versatile web application designed to help you manipulate text in various ways. Whether you need to convert case, remove extra spaces, or simply analyze and manage text, TextUtil provides you with all the essential tools in one place.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Convert text to uppercase, lowercase, or title case</li>
        <li>Remove extra white spaces</li>
        <li>Text-to-speech feature</li>
        <li>Copy and paste functionality</li>
      </ul>
      <h3>How to use:</h3>
      <p>
        Simply enter your text in the provided text area, and then use the available options to manipulate the text. You can convert case, remove spaces, or copy the text to the clipboard. The text-to-speech feature will read the text aloud to you.
      </p>
      
    </div>
  );
}
