import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import './App.css';


const NavBar = ({ web3Handler, account }) => {
    return (
      <Navbar expand='lg' bg="light" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home' >Home</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/mint">Mint</Nav.Link>
            </Nav>
            <Nav>
            {account ? (
                <Nav.Link
                   href={`https://etherscan.io/address/${account}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="button nav-button btn-sm mx-4">
                   <Button variant="outline-dark">
                      {account.slice(0, 5) + '...' + account.slice(38, 42)}
                   </Button>

                 </Nav.Link>
              ) : (
                   <Button onClick={web3Handler} variant="outline-dark">Connect Wallet</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;