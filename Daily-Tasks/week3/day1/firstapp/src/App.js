

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Greeting from './Practice Components/Greeting';
import ProfileCard from './Practice Components/ProfileCard';
import CounterApp from './Practice Components/CounterApp';
import UserForm from './Practice Components/UserForm';

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

      {/* Day 2 Task 3: Build a Small Profile Card Component */}
      <div style={{ display: "flex", justifyContent: "center"}}>
        <ProfileCard
          name="Priya"
          role="Frontend Devoloper"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <ProfileCard
          name="Himanshu Awasthi"
          role="Backend Devoloper"
          image="https://randomuser.me/api/portraits/men/32.jpg"
          />

      </div>

      {/* Day 3 Task 1: Create a Simple Counter App (Increment/Decrement) */}
      <CounterApp />

      {/* Day 3 Task 2: Build a Form That Displays Input Data Dynamically */}
      <UserForm />

      <Footer />
    </div>
  );
}

export default App;
