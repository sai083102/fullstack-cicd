import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [health, setHealth] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then(res => res.json())
      .then(data => setHealth(data.message))
      .catch(() => setHealth('Could not reach backend'));

    fetch(`${API_URL}/api/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(() => setItems([]));
  }, [API_URL]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fullstack CI/CD Demo</h1>
        <p className="status">{health}</p>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
