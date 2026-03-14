'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
        {count}
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={decrement}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          -
        </button>
        <button 
          onClick={reset}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          Reset
        </button>
        <button 
          onClick={increment}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          +
        </button>
      </div>
    </div>
  );
}
