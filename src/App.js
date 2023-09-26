import React, { useState } from "react";
import {marked} from "marked";
import "./App.css"; 

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <main className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">Markdown Previewer</h1>
          <div class="underline"></div>
        </header>

        <div className="row">
          <section className="column">
            <div className="input-container">
              <h4 className="section-title">Markdown Input</h4>
              <textarea
                className="input"
                value={markdown}
                onChange={(e) => updateMarkdown(e.target.value)}
              />
            </div>
          </section>

          <section className="column">
            <div className="output-container">
              <h4 className="section-title">Preview</h4>
              <div
                className="output"
                dangerouslySetInnerHTML={{
                  __html: marked(markdown),
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
