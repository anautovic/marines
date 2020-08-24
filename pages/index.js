
import styles from '../styles/Home.module.css'
import css from 'styled-jsx/css'
import {Animated} from "react-animated-css";
import { motion } from 'framer-motion';
import Head from 'next/head'
//import {Animated} from "react-animated-css";
//import {Navbar, Nav, NavDropdown, Form, FormControl, 
//} from 'react-bootstrap';
import { Row, Col, Card, Container, Button, img,Carousel } from 'react-bootstrap';
import Header from  './components/shared/header'
import Footer from  './components/shared/footer'
export default function Home() {
  return (
    <div>
       <Head>
      <title>Macgregor marine service</title>
      <link rel="icon" href="/favicon.PNG" />
      
    </Head>
      
      <Header/>
    



      <div className="container mt-5">
      <Row>
    <Col sm={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">MacGregor Marine Services</h2>
    <p className="card-text mb-auto justify">
    Est une entreprise spécialisée dans les services maritimes et l’affrètement dans le golfe de guinée.
Constituée d’une équipe de professionnel à votre écoute. Nous vous offrons une solution adaptée et sur
mesure pour chaque type d’opération.
      </p>







      <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .10
    }
  },
}}>
   <p className="card-text mb-auto justify">
    Est une entreprise spécialisée dans les services maritimes et l’affrètement dans le golfe de guinée.
Constituée d’une équipe de professionnel à votre écoute. Nous vous offrons une solution adaptée et sur
mesure pour chaque type d’opération.
      </p>
</motion.div>







      </div>
      </div>
    </Col>
    <Col sm={6}>
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="Damen.jpg" />
  </Card>

       
      
    </Col>
    <br>
    </br>
  </Row>



  <Row className= "mt-5">
    <Col sm={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">Zone d'activité </h2>
    <p className="card-text mb-auto justify">
    Afin de répondre aux contraintes de lieu, nous vous proposons des solutions à chaque projet, à travers des
            études de faisabilité logistique et des plans d’exécution.
      </p>
      </div>
      </div>
    </Col>
    <Col sm={6}>
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="zone d'activité.PNG" />
  </Card>
 </Animated>
    

       </Col>
    <br>
    </br>
  </Row>

 


      </div>
<Footer />


      

      <style jsx>{
        `.mb-2{
          color: #002e5d;
          
        }
        `
      }

      </style>
</div>
  )
}
