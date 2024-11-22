import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";

const CartPage = () => {
    const cartListLength = 2;

    return (
        <main>
            { cartListLength === 0 ? <CartEmpty /> : <CartList /> }
        </main>
    );
};

export default CartPage;