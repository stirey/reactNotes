/* FUNCTIONAL COMPONENTS */
//Functional components have the following traits
// Rendering of information with or without changing state
// Hook ready-- useState and useEffect can cause informational and presentational changes in our functional components.
// No 'this' keyword. Class components use 'this' extensively.
// Often used as child components that will receive 'props' (aka properties) from a parent component.
// Note: component names must be capitalized and they generally are Pascal cased. THis means that all separate words have capital letters.
// Most of the time, when you call an instance of a component, it will be called similarly to an HTML self closing tag. 

import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import reactIcon from '../../../src/assets/reactIcon.png'

const FunctionalComponentDemo = () => {
    return (
    <div className="main">
        <div className="mainDiv">
                <h1>
                    Functional Component
                </h1>
                <p>
                    Functional Components are the primary tool in React to build a small, modular piece of your page.
                </p>
                </div>

                <div>
                <dl>
                <dt>
                Can use state
                </dt>
                <dd>
                With the 'useState' hook, functional components can now both render a display to the page and update the information.    
                </dd>
                <dt>
                No 'this' keyword
                </dt>    
                <dd>
                Older class components use 'this', functional components have no 'this' object.
                </dd>
                <dt>
                Can use effects
                </dt>
                <dd>
                With the 'useEffect' hook, functional components can perform side effect with any props or state changes.  
                </dd>
                <dt>
                   return() 
                </dt>
                <dd>
                    Must return a single element, but this element may have nested elements inside.
                </dd>
                </dl>
                </div>

                <div>
                <h1>
                    Functional Syntax versus Arrow Function
                </h1>
                <h2>Challenge</h2>

                <Row>
                <Col md="6">
                <HelloWorld />
                </Col>
                <Col md="6">
                <HelloWorldFatArrow />
                </Col>
                </Row>
        </div>       
    </div> 
    );
};

export default FunctionalComponentDemo;

const HelloWorld = () => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" id="reactIcon" src={reactIcon} alt="Card image cap" />
          <CardBody>
            <CardTitle>React</CardTitle>
            <CardSubtitle>Demo</CardSubtitle>
            <CardText>This is a practice challenge to utilize fat arrow functions, reactStrap components and linking to images in my assets folder</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  const HelloWorldFatArrow = () => {
      return (
        <div>
        <Card>
          <CardImg top width="100%" id="reactIcon" src={reactIcon} alt="Card image cap" />
          <CardBody>
            <CardTitle>React</CardTitle>
            <CardSubtitle>Demo</CardSubtitle>
            <CardText>This is a practice challenge to utilize fat arrow functions, reactStrap components and linking to images in my assets folder</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      )
  }
