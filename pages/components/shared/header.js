import {Navbar, Nav, NavDropdown, Form, FormControl, Button, img,Carousel
} from 'react-bootstrap';
import Link from 'next/link'
const AppLink = ({children, className, href}) =>
<Link href={href}>
  <a className= {className}>{children}</a>
</Link>
export default function Header() { 
    return (
        <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <img
        src="/Logo MML.PNG"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="MacGregor Marine logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <AppLink href="/"><a className="nav-link mr-3">Accueil</a></AppLink>
      <AppLink href="/services"><a className="nav-link mr-3">Services</a></AppLink>
      <AppLink href="/particuliers"> <a className="nav-link mr-3">Particuliers</a></AppLink>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Barge.jpg" 
      width="200"
      height="400"
      alt="Barge"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="remorqueur.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="barge.jpg"
      width="200"
      height="400"
      alt="Barge"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
 )
}
