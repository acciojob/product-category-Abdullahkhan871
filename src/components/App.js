import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [click, setClick] = useState("male");
  let products = {
    Male: [
      { id: "m1", name: "Shirts" },
      { id: "m2", name: "Facial-grooming kits" },
      { id: "m3", name: "Hair styling" },
      { id: "m4", name: "Jeans" },
      { id: "m5", name: "Shoes" },
    ],
    Female: [
      { id: "f1", name: "Tops" },
      { id: "f2", name: "Skirts" },
      { id: "f3", name: "Makeup items" },
      { id: "f4", name: "Jewellery" },
      { id: "f5", name: "Sandals" },
    ],
  };
  return (
    <div>
      <select onClick={(e) => setClick(e.target.value)}>
        <option
          value="male"
          key={"male"}
          // onClick={() => setClick("male")}>
        >
          Male
        </option>
        <option value="female" key={"female"}>
          Female
        </option>
      </select>
      <div className="list-item">
        <ul>
          {click == "male" &&
            products.Male.map((item) => <li key={item.id}>{item.name}</li>)}
          {click == "female" &&
            products.Female.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default App;
