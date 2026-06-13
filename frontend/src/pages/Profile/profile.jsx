import { useContext } from "react";
import { AuthContext } from "../../context/AppRoutes";
import "./Profile.css";

function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>My Profile</h1>

                <div className="profile-info">
                    <p>
                        <strong>Name:</strong>{" "}
                        {user?.name || "User Name"}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {user?.email || "user@email.com"}
                    </p>

                    <p>
                        <strong>Role:</strong> Student
                    </p>

                    <p>
                        <strong>Status:</strong> Active
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;