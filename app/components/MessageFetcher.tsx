'use client';

import { useState } from 'react';

export default function MessageFetcher() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/message');
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Message API</h2>
      <button 
        onClick={fetchMessage}
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '15px'
        }}
      >
        {loading ? '読み込み中...' : 'メッセージを取得'}
      </button>
      {message && (
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          {message}
        </p>
      )}
    </div>
  );
}
