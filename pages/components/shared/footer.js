import { Row, Col, Card, Container } from 'react-bootstrap';
export default function Footer(){
    return(
<div className="pt-4 my-md-5 pt-md-5 border-top">
      <Container>
        <Row>
          <Col xs={6} md={4}>
          <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Cool stuff</a></li>
          <li><a className="text-muted" href="#">Random feature</a></li>
          <li><a className="text-muted" href="#">Team feature</a></li>
          <li><a className="text-muted" href="#">Stuff for developers</a></li>
          <li><a className="text-muted" href="#">Another one</a></li>
          <li><a className="text-muted" href="#">Last time</a></li>
        </ul> 
          </Col>
          <Col xs={6} md={4}>
          <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Team</a></li>
          <li><a className="text-muted" href="#">Locations</a></li>
          <li><a className="text-muted" href="#">Privacy</a></li>
          <li><a className="text-muted" href="#">Terms</a></li>
        </ul>
          </Col>
          <Col xs={6} md={4}>
          <small className="d-block mb-3 text-muted">&copy; 2020</small>
          </Col>
        </Row>

      <Row mt-2>
				<Col xs={12} sm={12} md={12} mt-2 text-center text-white>
						<p className="h6 text-center">© Made by ARCHIPEL 2020 </p>
				</Col>	
        </Row>
        </Container>
        </div>
    )
}

    