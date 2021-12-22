import React, { useState } from 'react';

import Board from './components/Board';

import './App.css';

function App() {
  const [board, setBoard] = useState(
    [               // Tic Tac Toe board state
      '', '', '',   // __|__|__
      '', '', '',   // __|__|__
      '', '', ''    //   |  |
    ]
  );

  return (
    <main>
      <h1>Tic Tac Toe Game</h1>
      <Board />
    </main>
  );
}

export default App;