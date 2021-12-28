import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import Table from '../components/Table'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
      console.log(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Table
        data={[
          {
            id: 1,
            name: 'Jack',
            email: 'jack@gmail.com',
          },
          {
            id: 2,
            name: 'Mary',
            email: 'mary@gmail.com',
          },
          {
            id: 3,
            name: 'John',
            email: 'john@gmail.com',
          },
          {
            id: 4,
            name: 'asif',
            email: 'asif@gmail.com',
          },
        ]}
      ></Table>
    </>
  )
}

export default HomeScreen
