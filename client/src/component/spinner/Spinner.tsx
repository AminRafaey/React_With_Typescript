import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const Spinner: React.FC = () => (
  <Loader
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
    }}
    animation="grow"
    variant="primary"
  />
);
export default Spinner;
