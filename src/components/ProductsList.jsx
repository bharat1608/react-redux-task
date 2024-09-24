import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/950/950/detailed/2449/full_body_housing_for_apple_iphone_9_white_maxbhi.com_41205.jpg?t=1719163270",

    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://1589077843.rsc.cdn77.org/temp/1615919542_f237c41d33237fb26980d08697a3d7dc.jpg",
       
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "data:image/jpeg;base64,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",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://www.triveniworld.com/cdn/shop/products/oppo-f19-pro-fantasy-purple-8gb-ram-128gb-storage-preowned-triveni-world-1_1024x1024.jpg?v=1710182549",
      
    
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://www.refurbished.store/cache/images/huawei-p30-multi_600x600_BGresize_16777215-tj.png",
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
