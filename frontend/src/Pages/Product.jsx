import React, { useContext  } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  // console.log(productId)
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
