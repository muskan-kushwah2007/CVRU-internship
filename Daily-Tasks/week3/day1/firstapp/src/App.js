

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Greeting from './Practice Components/Greeting';

function App() {
  return (
    <div>
      {/* Day 2 Tasks */}
      <Header />
      <main>
        <h2>Welcome to My First React App</h2>
        <p>This is a simple React app created with Create React App.</p>
      </main>
      {/* Day 2 Tasks 2: Pass Data as Props and Render Dynamically */}
      <div>
        <Greeting name="Priya" topic="React Components!" />
        <Greeting name="Rohan" topic="React Props!" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
