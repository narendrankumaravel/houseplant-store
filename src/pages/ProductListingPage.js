import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, thumbnail: '/images/monstera.jpg' },
  { id: 2, name: 'Snake Plant', price: 20, thumbnail: '/images/snake-plant.jpg' },
  { id: 3, name: 'Pothos', price: 15, thumbnail: '/images/pothos.jpg' },
  // Add 3 more plants here
];

function ProductListingPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {plants.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
