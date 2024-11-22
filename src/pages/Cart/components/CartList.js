import CartCard from "./CartCard";
import Checkout from "./Checkout";
import {useState} from "react";

const CartList = () => {
    const cartList = [
        {
            "id": 10015,
            "name": "Kickstart Your UI Design Career",
            "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
            "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
            "price": 9,
            "poster": "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
            "image_local": "/assets/images/10015.avif",
            "rating": 2,
            "in_stock": false,
            "size": 1,
            "best_seller": false
        }
    ];
    const [checkout, setCheckout] = useState(false);
    const total = cartList.length;
    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    My Cart ({cartList.length})
                </p>
            </section>

            <section>
                { cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                )) }
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold">Total Amount:</span>
                        <span>${total}</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            { checkout && <Checkout setCheckout={setCheckout} />}
        </>
    );
};

export default CartList;