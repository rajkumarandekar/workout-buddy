import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    alert("user logged out");
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="k">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc12e7de-9d9f-4e48-b8b8-3349db865465/d72e64n-1fdefd9a-dcc6-4a2f-9278-a5fa9b4d454f.png/v1/fill/w_600,h_436,q_75,strp/workout_lab___fitness_hub_logo_by_raocreations-d72e64n.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mL2ZjMTJlN2RlLTlkOWYtNGU0OC1iOGI4LTMzNDlkYjg2NTQ2NS9kNzJlNjRuLTFmZGVmZDlhLWRjYzYtNGEyZi05Mjc4LWE1ZmE5YjRkNDU0Zi5wbmciLCJ3aWR0aCI6Ijw9NjAwIiwiaGVpZ2h0IjoiPD00MzYifV1dLCJ3bWsiOnsicGF0aCI6Ii93bS9mYzEyZTdkZS05ZDlmLTRlNDgtYjhiOC0zMzQ5ZGI4NjU0NjUvcmFvY3JlYXRpb25zLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.8dm54cWnKDiXmm4K6pFVfraoRLfXnS0sw89yMS4SO8g"
              alt="img1"
              className="logo1"
            />
            <h1>Workout Buddy</h1>
          </div>
        </Link>

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
