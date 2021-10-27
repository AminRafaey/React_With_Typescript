import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Navbar bg="light" variant="light">
      <Container className="me-auto d-flex justify-content-end">
        <Button variant="outline-primary" onClick={() => history.push("/add")}>Add</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
