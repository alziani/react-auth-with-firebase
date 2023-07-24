import React from "react";
import { Card, Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">SignUp</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl type="email" id="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <FormControl type="password" id="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                Password Confirmation
              </Form.Label>
              <FormControl type="password" id="password-confirm" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", marginTop: "10px" }}
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
