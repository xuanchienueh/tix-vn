import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./language/i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/types/configStore";
import "./index.css";
import { DOMAIN_API } from "./util/settings/config";
/* cấu hình realtime với websocket và signalR */
import * as signalR from "@aspnet/signalr";
// const signalR = require("@aspnet/signalr");
/* đoạn code để kết nối đến server và lắng nghe sự kiện từ server truyền đến */
// export const connection = new signalR.HubConnectionBuilder()
//   .withUrl(`${DOMAIN_API}/DatveHub`)
//   .configureLogging(signalR.LogLevel.Information)
//   .build();

// connection.start().then(() => {});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
