import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogOut = async () => {
    setError("");
    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          <strong> Email : </strong> {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3 ">
            Update profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="btn btn-primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
