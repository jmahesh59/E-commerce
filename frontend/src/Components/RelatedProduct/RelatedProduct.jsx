import React from 'react';
import "./RelatedProduct.css";
import data_product from '../Assets/data.js';
import Item from '../Item/Item'
function RelatedProduct() {
  return (
    <div className='relatesproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
