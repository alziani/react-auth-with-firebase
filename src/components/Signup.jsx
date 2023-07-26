import React, { useRef, useState } from "react";
import { Alert, Card, Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.prventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">SignUp</h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Form onSubmit={() => handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl type="email" id="email" ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <FormControl type="password" id="password" ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                Password Confirmation
              </Form.Label>
              <FormControl
                type="password"
                id="password-confirm"
                ref={passwordConfirmationRef}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", marginTop: "10px" }}
              disabled={loading}
            >
              SignUp
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>{" "}
      </div>
    </>
  );
}

export default Signup;
