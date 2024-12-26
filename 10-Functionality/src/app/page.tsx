import React from 'react'
import Hero from './hero'
import Brand from './component/brand'
import Ceramics from './component/ceramics'
import Product from './component/product'
import Club from './component/club'
import Studio from './component/studio'

const page = () => {
  return (
    <div>
      <Hero/>
      <Brand/>
      <Ceramics/>
      <Product/>
      <Club/>
      <Studio/>
    </div>
  )
}

export default page;