import React from 'react'
import { ButtonGroup } from 'react-bootstrap';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import  Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = ({category, categoryClick, searchClick, input, setInput}) => {
    return (
        <div>
        <Navbar expand="lg" bg="dark" variant='dark'  >
        <Container>
            <Navbar.Brand>
                <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav 
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "100px"}}
            navbarScroll
            >
                <Nav.Link>
                    <Link to="/cart">Cart</Link>
                </Nav.Link>
                <NavDropdown title="Category" id="navbarScrollingDropdown">
                    {
                    category.map((elem, index) => {
                        return(
                            <NavDropdown.Item
                            onClick={() => categoryClick(elem)}
                            key={index}
                            href='#action'
                            >
                                {elem}
                            </NavDropdown.Item>
                        );
                    })}
                </NavDropdown>
            </Nav>
            <Form className='d-flex'>
                <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={searchClick} variant='outline-success'>Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Header