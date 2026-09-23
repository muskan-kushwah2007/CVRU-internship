import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import GreetingProps from './PracticeComponents/GreetingProps.js';
import ProfileCard from './PracticeComponents/ProfileCard.js';
import CounterApp from './PracticeComponents/CounterApp.js';
import UserForm from './PracticeComponents/UserForm.js';

function App() {
  return (
    // week3 day 1 task
    <div>
      <Header />
      <main>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>
        <div>
          <GreetingProps name="Priya" topic="React Components" />
          <GreetingProps name="Rohan" topic="JSX & Props" />
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <ProfileCard name="Arjun Kumar"
            role="Frontent Developer"
            image="https://randomuser.me/api/portraits/men/32.jpg"/>
            <ProfileCard name="Sneha Verma"
            role="UI/UX Designer"
            image="https://randomuser.me/api/portraits/women/44.jpg"/>
        </div>
        <div>
          {/* Day 3 Task Componets */}
          <CounterApp/>
          <UserForm/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;