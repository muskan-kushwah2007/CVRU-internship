function GreetingProps(props){
    return(
        <>
            <h3>Hello ! {props.name}</h3>
            <p>you are learning {props.topic} today.</p>
        </>
    );
}
export default GreetingProps;