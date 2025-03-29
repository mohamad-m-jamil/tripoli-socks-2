import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Basket = ({ basket, setBasket }) => {
  const whatsappNumber = '81365212';

  const basketMessage = basket
    .map(item => `${item.caption} - ${item.price}`) // Changed from name to caption
    .join('\n');

  const sendOrder = () => {
    if (basket.length === 0) return;
    const message = `Hello, I'm interested in these products:\n\n${basketMessage}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const removeFromBasket = (index) => {
    setBasket(prevBasket => prevBasket.filter((_, i) => i !== index));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <div className="basket">
      <h2>Shopping Basket</h2>

      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              {item.caption} - {item.price} {/* Changed from name to caption */}
              <button className="remove-item-button" onClick={() => removeFromBasket(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="basket-buttons">
        <button 
          className="send-order-button" 
          disabled={basket.length === 0} 
          onClick={sendOrder}
        >
          <FaWhatsapp /> Send Order
        </button>
        <button className="clear-basket-button" onClick={clearBasket}>
          Clear Basket
        </button>
      </div>
    </div>
  );
};

export default Basket;