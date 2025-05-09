import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-3 mt-auto">
      <Container>
        &copy; {new Date().getFullYear()} Save Nature Community. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
