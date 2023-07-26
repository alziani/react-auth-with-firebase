import React, { useRef, useState } from "react";
import { Alert, Card, Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ForgorPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.prventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox to get new password ");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          {message && <Alert variant="success"> {message} </Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl type="email" id="email" ref={emailRef} />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", marginTop: "10px" }}
              disabled={loading}
            >
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>{" "}
      </div>
    </>
  );
}

export default ForgorPassword;
