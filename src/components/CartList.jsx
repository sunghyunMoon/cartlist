import CartItem from './CartItem';

const CartList = ({ cartList, setCartList }) => {
    return (
        <div id="cart-list">
            <ul className="divide-y divide-gray-200">
                {cartList.map((item) => (
                    <CartItem
                        id={item.id}
                        imgSrc={item.imgSrc}
                        price={item.price}
                        count={item.count}
                        cartList={cartList}
                        setCartList={setCartList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CartList;
