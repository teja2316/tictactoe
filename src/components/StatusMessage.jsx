import React from 'react';

const StatusMessage = ({winner, current}) => {
  // const message = winner
  // ? `The Winner Is ${winner}`
  // : `Next Player Is ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every((el)=> el !== null);
  return (
    <h2>      
      {winner && `The Winner Is ${winner}`}
      {!winner && !noMovesLeft && `Next Player Is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O are Tied'}
    </h2>
  );
};

export default StatusMessage;
