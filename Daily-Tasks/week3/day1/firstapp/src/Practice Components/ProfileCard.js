// Day 2 Task 3: Build a Small Profile Card Component

function ProfileCard(props) {

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        textAlign: 'center',
        width: '220px',
    };

    return (
        <div style={cardStyle}>
            <img src={props.image} alt={props.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h2>{props.name}</h2>
            <p>{props.role}</p>
        </div>
    );
}

export default ProfileCard;
