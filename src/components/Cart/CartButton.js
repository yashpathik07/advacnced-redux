import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    };

    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
