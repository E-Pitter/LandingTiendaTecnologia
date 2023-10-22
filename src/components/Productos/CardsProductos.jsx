import React from 'react'
import { ButtonContainerStyled, ProductoWrapper, ProductosContainer } from './CardsproductosStyles'
import {products } from "../../data/Products"
import CardProducto from './CardProducto'
import Button from '../UI/Button/Button'


const CardsProductos = () => {
  return <>
    <ProductoWrapper>
      <h2>Nuestros Productos</h2>
        <ProductosContainer>
          {
            products.map((food) => {
              return <CardProducto key={food.id}{...food} />
            } )
          }
        </ProductosContainer>
        <ButtonContainerStyled>
          <Button>Ver menos</Button>
          <Button disabled >Ver mas</Button>
        </ButtonContainerStyled>
    </ProductoWrapper>
  </>
}

export default CardsProductos