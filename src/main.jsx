import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import page1 from "./routes/page1";
import page2 from "./routes/page2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "page-one",
                element: <page1 />,
            },
            {
                path: "page-two",
                element: <Page2 />,
            },
        ],


    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
