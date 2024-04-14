// App.jsx
import wp from './assets/wp.jpeg';
import Landing from './Component/Landing';

function App() {
  return (
    <div className="relative w-full h-screen">
      <img className='absolute inset-0 w-full h-full object-cover' src={wp} alt="background" />
      <Landing />
    </div>
  );
}

export default App;
