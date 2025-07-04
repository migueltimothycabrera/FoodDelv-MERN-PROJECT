import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storecontext'

const Fooditem = ({id, name, image, price, description}) => {

  const {cartItems, addtoCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        { !cartItems[id]
            ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt=''/>
              : <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtoCart(id)}src={assets.add_icon_green} alt="" />
                </div>
        }
      
      </div>
      <div className='food-item-info'>  
        <div className='food-item-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">P{price}</p>
      </div>
    </div>
  )
}

export default Fooditem