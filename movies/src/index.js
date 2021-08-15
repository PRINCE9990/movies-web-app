import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //2. ye export ho gyi (same level pr hai islie ./app likhre h) render krne ke liye hum import/export use kr rhe h .   3. bootstrap is a library of css vo public folder m index.html ki file m likhi hui h(css ka link uthaya hai bootstrap.js se or use head m daal diya h  or js ka link b uthaya hai jo body m daal diya h)

ReactDOM.render(
  <App/>,

  document.getElementById("root")
);
