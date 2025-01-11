import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const FinalBill = () => {
  const [isPaid, setIsPaid] = useState(false);
  const products = useSelector((state) => state.cart.items);

  

  // Calculate the total amount
  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handlePay = () => {
    setIsPaid(true);
    alert('Payment successful!');
  };

  const totalAmount = calculateTotal();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Bill Summary</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${product.price.toFixed(2)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button
        onClick={handlePay}
        disabled={isPaid}
        style={{
          padding: '10px 20px',
          backgroundColor: isPaid ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: isPaid ? 'not-allowed' : 'pointer',
          borderRadius: '5px',
        }}
      >
        {isPaid ? 'Paid' : 'Pay Amount'}
      </button>
    </div>
  );
};

export default FinalBill;
