import React, { useState } from 'react';

const Invoice = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', quantity: 1, unitPrice: 100 },
  ]);

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, name: '', quantity: 1, unitPrice: 0 };
    setItems([...items, newItem]);
  };

  const handlesubmit = ()=>{
    window.print()
    alert('Invoice Printed Successfully!')
  }
 
  const handleInputChange = (id, event) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Invoice</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Quantity</th>
            <th className="py-2 px-4 border-b text-left">Unit Price</th>
            <th className="py-2 px-4 border-b text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b"><input type="text" name="name" value={item.name} onChange={e => handleInputChange(item.id, e)} className="border rounded w-full py-1 px-2"/></td>
              <td className="py-2 px-4 border-b"><input type="number" name="quantity" value={item.quantity} onChange={e => handleInputChange(item.id, e)} className="border rounded w-full py-1 px-2"/></td>
              <td className="py-2 px-4 border-b"><input type="number" name="unitPrice" value={item.unitPrice} onChange={e => handleInputChange(item.id, e)} className="border rounded w-full py-1 px-2"/></td>
              <td className="py-2 px-4 border-b">{item.quantity * item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <button onClick={handleAddItem} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add Item</button>
      <button className='mt-4 bg-blue-500 text-white py-2 px-4 ml-[70%] rounded hover:bg-blue-800' onClick={handlesubmit}>Print/Download</button>
      <h2 className="text-xl font-bold mt-6">Total: {calculateTotal()}</h2>
    </div>
  );
};

export default Invoice;
