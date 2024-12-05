import { GameContainer } from './components/GameContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8">
        Can we have a date ;)
      </h1>
      <GameContainer />
    </div>
  );
}

export default App;