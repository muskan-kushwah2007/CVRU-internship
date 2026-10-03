// Day 2 Task 2: Pass Data as Props and Render Dynamically

function Greeting(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>Welcome to my React app.</p>
            <p>{props.topic}</p>
        </div>
    );
}

export default Greeting;