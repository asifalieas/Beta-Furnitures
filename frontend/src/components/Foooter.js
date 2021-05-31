import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Foooter = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Beta Furnitures
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Foooter
