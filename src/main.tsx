import * as React from "react";
import { createRoot } from "react-dom/client";
import { css, Global } from "@emotion/react";
import { App } from "./App";

const styles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={styles} />
    <App />
  </React.StrictMode>
);
