import React from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
// import { ProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo(props => {
  // const [state, dispatch] = useStore();
  // const state = useStore[0];
  const disptch = useStore(false)[1];

  // const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', pops.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
