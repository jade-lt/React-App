import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HireItem from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HireItem
      title={"Timber Table"}
      imgUrl={
        "https://previews.dropbox.com/p/thumb/ABEGvqmEPHwcTAvnw-TG9g0wD9D4O-_ZKcPzz51h4Tutadnu3jawMqNX07J0Vc9OnFuTGac0zfp9vNKRDE5bFiNub2-6PhYvmjEi8neqkDh--_T23KyFHYab66NOPa0QOK_ZRvcNrPKLUonurT4IEmHVP563mjnPDA-PCbkiDKRu_LT239cTs90A5SSzXP66ndHt74bMIOZvVTghXyYAvhgttL_ewaEaLjlqPMQ1Z7XK3jQSr0zXvLrzH9IJhpQdjpTGBN5PGzWt1JtnWjdBhSzzSoxcktb8ccfzIH2lGBnjqC-qN_aNofjIu-68BopdZsQoHOuF5WioHkh0TU-NOuyYglOHoOV_0To0pEJw1Cnh3g/p.jpeg?fv_content=true&size_mode=5"
      }
      summary={"Recycled timber table with black hairpin legs, 2m x 1m"}
    />
    <HireItem
      title={"Arbor"}
      imgUrl={
        "https://previews.dropbox.com/p/thumb/ABFl7iHtmddOudnB6QGKtHvYzmdXBikdcb71l_aqOVD43l37yC3gn3iuzYoiTAcBPkBZWCpGFXW1XxnVjXRbqmYzhLlEQX8-UMTNV9RuNit5_spm92pj77Yj-3faCSrmi7NDIW37B7hu_u_BuIcvBAWWGAU02FGG7a9MLLUGPSh2hpyVwbtCz9Jjccu5OrSZzkWN888bv3-EqhqkPmaa_y66YUHyxiM_tYThgHk56w1JUZtQUXxlMTMe1c_uUEPi8cwCSt0QfPtbg5S8PMh39YPONUOIbEYI8uUm8e0KLX6ZRs9jMabZuq78umvniLy6SSaniDu3Dyn47I5PpaqxMP_Yg-kHJTqaQu646XbC1s1NSw/p.jpeg?fv_content=true&size_mode=5"
      }
      summary={"Bamboo and fabric arbor, 2m x 1.5m"}
    />
    <HireItem
      title={"Dinner Plate"}
      imgUrl={
        "https://previews.dropbox.com/p/thumb/ABHE0G1VvxRcGcTy9wvnBZlZgA2aHIAo3-1P6RVAoyq1eR80In0lsGebzaMGKEJdn-cyeBKAanbamgLQ8buG1VheyxVV57ymXSHczCEOP8qlP6JbxyaA6iud5C_w8T290eGNwEEmCqVacFQQOMDv49xkbe3VArBH7WiNLGgtUwFtr8FVx3trfZ9Ity4-qqVb6ZTm0VEyH19XFCuDMbLCM22vbeATuSIu_rTi3DN50hFNR1gNgh-klNE7ahWxfH6f7v5xvJUoCItR5ldrb-vC1wFKWkRIQ9ptocGgQ4A-L59NaSLUVeSTpy4VYpRJ0exhAZSyArI5ZySVZpefsrZT-_4qSuPVlIYBOzYRppqoAWKTWw/p.jpeg?size=1600x1200&size_mode=3"
      }
      summary={"Grey ceramic dinner plate, 27cm diameter"}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
