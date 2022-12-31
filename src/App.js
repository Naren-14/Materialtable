import "./App.css";
import TABLE from "./components/table-list.components";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [materials, setMaterials] = useState([{}]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await axios.get("http://localhost:3002/materials");
      setMaterials(response.data);
    };
    fetchMaterials();
  }, []);

  const updatedMaterials = materials.map((material) => {
    const totalPrice = material.price * parseInt(material.qty);
    return { ...material, totalPrice };
  });

  return (
    <div>
      {materials.length > 1 && materials.length > 1 && (
        <Routes>
          <Route path="/" element={<TABLE tableData={updatedMaterials} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
