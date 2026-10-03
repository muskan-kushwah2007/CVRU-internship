import {useParams} from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();

    return (
        <div>   
            <h1>User Profile</h1>
            <p>This is the user profile page for user with ID: {userId}</p>
        </div>
    );
}   

export default UserProfile;