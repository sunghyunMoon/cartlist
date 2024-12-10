import { useEffect } from 'react';
import CartList from './CartList';

const CartToolpane = ({
    cartList,
    setCartList,
    cartToolpaneOpen,
    handleOpenCloseCartToolpane,
}) => {
    const totlaPrice = cartList.reduce(
        (acc, cur) => acc + cur.price * cur.count,
        0
    );

    const saveCartList = (e) => {
        e.preventDefault();
        localStorage.setItem('cartList', JSON.stringify(cartList));
    };

    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, [setCartList]);

    return (
        <aside className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* 장바구니의 가시성은 아래 div의 (id="shopping-cart") class명으로 제어합니다. 
  translate-x-full: 장바구니 닫힘 translate-x-0: 장바구니 열림 */}
            <section
                className={`pointer-events-auto w-screen max-w-md transition ease-in-out duration-500 translate-x-${
                    cartToolpaneOpen ? '0' : 'full'
                }`}
                id="shopping-cart"
            >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-xl font-bold">장바구니</h2>
                            <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                >
                                    <svg
                                        id="close-cart-btn"
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        onClick={handleOpenCloseCartToolpane}
                                    >
                                        <path
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* 아래 하드코딩 되어있는 장바구니 목록들을 유저 상호작용에 맞게 렌더링 되도록 변경해주세요.  */}
                        <CartList
                            cartList={cartList}
                            setCartList={setCartList}
                        />
                    </div>
                    <div className="border-t border-gray-200 p-6">
                        <div className="flex justify-between font-medium">
                            <p>결제금액</p>
                            <p className="font-bold" id="total-count">
                                {totlaPrice.toLocaleString()}원
                            </p>
                        </div>
                        <a
                            id="payment-btn"
                            href="./"
                            className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
                            onClick={saveCartList}
                        >
                            결제하기
                        </a>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                또는
                                <button
                                    type="button"
                                    className="font-medium text-sky-400 hover:text-sky-500"
                                >
                                    쇼핑 계속하기
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default CartToolpane;
