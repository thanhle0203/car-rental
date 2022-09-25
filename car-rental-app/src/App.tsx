import React from 'react';
import './App.css';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
