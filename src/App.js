import "./App.css";
import axios from "axios";

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

  let grandTotal = 0;

  return (
    <div>
      <table className="m-5 table-auto">
        <thead>
          <tr>
            <th className="px-4 border py-2">S.NO</th>
            <th className="px-4 border py-2">NAME OF MATERIAL</th>
            <th className="px-4 border py-2">Price</th>
            <th className="px-4 border py-2">UOM</th>
            <th className="px-4 border py-2">QTY</th>
            <th className="px-4 border py-2">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => {
            const totalPrice = material.price * parseInt(material.qty);
            grandTotal += totalPrice;
            return (
              <tr className="bg-gray-100" key={index}>
                <td className="px-4 border py-2">{index + 1}</td>
                <td className="px-4 border py-2">{material.name}</td>
                <td className="px-4 border py-2">{material.price}</td>
                <td className="px-4 border py-2">{material.uom}</td>
                <td className="px-4 border py-2">{material.qty}</td>
                <td className="px-4 border py-2">{totalPrice}</td>
              </tr>
            );
          })}
          <tr>
            <td className="px-4 border py-2"></td>
            <td className="px-4 border py-2"></td>
            <td className="px-4 border py-2"></td>
            <td className="px-4 border py-2"></td>
            <td className="px-4 border font-bold py-2">Grand Total</td>
            <td className="px-4 border py-2">{grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
