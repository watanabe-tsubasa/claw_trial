import Counter from './components/Counter';
import MessageFetcher from './components/MessageFetcher';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '40px',
      fontFamily: 'system-ui, sans-serif',
      background: '#fafafa'
    }}>
      <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Next.js Trial
        </h1>
        
        <Counter />
        <MessageFetcher />
      </main>
    </div>
  );
}
