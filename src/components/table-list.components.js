function TABLE(props) {
  const grandTotal = props.tableData.reduce((accumulator, material) => {
    return accumulator + material.totalPrice;
  }, 0);
  git;

  return (
    <div className="w-full flex-col flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Table List</h1>
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
          {props.tableData.map((material, index) => {
            return (
              <tr className="bg-gray-100" key={index}>
                <td className="px-4 border py-2">{index + 1}</td>
                <td className="px-4 border py-2">{material.name}</td>
                <td className="px-4 border py-2">{material.price}</td>
                <td className="px-4 border py-2">{material.uom}</td>
                <td className="px-4 border py-2">{material.qty}</td>
                <td className="px-4 border py-2">{material.totalPrice}</td>
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

export default TABLE;
