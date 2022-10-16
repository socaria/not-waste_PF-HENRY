import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodDetail } from '../../redux/actions'
import './postDetail.css';
import { useParams } from "react-router-dom";
import { Card, Overlay, ListGroup } from 'react-bootstrap';

const PostDetail = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.prodDetails)
  useEffect(() => {
    dispatch(prodDetail(productId))
  }, [])
  return (
    <>
      <Card style={{ width: '200px' }}>
        <Card.Img variant="top" src={product.image} />
        <ListGroup variant="flush">
          <Card.Title>{product.name}</Card.Title>
          <ListGroup.Item>
            {product.description}
          </ListGroup.Item>
          {/* <ListGroup.Item>
            {product.adress}
          </ListGroup.Item> */}
          {product?.diets && product.diets.map(diet => {
            return (
              <ListGroup.Item key={diet.id}>
                {diet.name}
              </ListGroup.Item>
            )
          })
          }
        </ListGroup>
      
      {product.posts?.map(post => {
        return (
          <ListGroup.Item variant='dark' key={post.id}>
            {post.amount} disponible(s) el {post.date}
          </ListGroup.Item>
        )
      }
      )
      }
      </Card>
    </>
  )
}

export default PostDetail;
