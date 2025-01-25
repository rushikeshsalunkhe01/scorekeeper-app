import { createRoot } from "react-dom/client";
import Home from "./views/Home"
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Home/>
    </>
)