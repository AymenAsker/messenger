import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import Messenger from "./Messenger";
import { Provider } from "react-redux";
import store from "./redux/store";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Messenger />
    </Provider>
);
{
    /* <React.StrictMode>
</React.StrictMode> */
}
