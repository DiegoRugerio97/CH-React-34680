// Cart component - Display items in CartContext
// Styling
import "./Cart.css";
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext } from "react";
// React Router imports
import { Link } from 'react-router-dom';
// BS imports
import Container from 'react-bootstrap/Container';
import CartTable from "./CartTable/CartTable";
import ContinueBrowsing from "./ContinueBrowsing/ContinueBrowsing";


const Cart = () => {

    const { cart, cartTotal, cartQuantity } = useContext(CartContext);

    const cartIsEmpty = cart.length === 0;

    return <Container>
        {!cartIsEmpty && <>
            <CartTable cart={cart} cartTotal={cartTotal} cartQuantity={cartQuantity} />
            <Link to={"/checkout"}>Checkout</Link>
        </>}
        {cartIsEmpty && <ContinueBrowsing />}
    </Container>

}

export default Cart;
