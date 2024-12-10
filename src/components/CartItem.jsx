const CartItem = ({
    id,
    imgSrc,
    name,
    price,
    count,
    cartList,
    setCartList,
}) => {
    const handleRemoveItem = () => {
        const newCratList = cartList.filter((item) => item.id !== id);
        setCartList([...newCratList]);
    };

    const modifyCartItem = (type) => {
        const selectedItem = cartList.find((item) => item.id === id);
        const itemCnt = selectedItem.count;
        if (type === 'up') {
            if (itemCnt === 10) {
                window.alert('장바구니에 담을 수 있는 최대 수량은 10개입니다.');
                return;
            }
            selectedItem.count += 1;
        } else {
            if (itemCnt === 1) {
                window.alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
                return;
            }
            selectedItem.count -= 1;
        }
        setCartList([...cartList]);
    };
    return (
        <li className="flex py-6" id={id}>
            <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={imgSrc}
                    className="h-full w-full object-cover object-center"
                    alt="안든든한 샐러드"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{name}</h3>
                        <p className="ml-4">{price.toLocaleString()}원</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between">
                    <div className="flex text-gray-500">
                        <button
                            className="decrease-btn"
                            onClick={() => modifyCartItem('down')}
                        >
                            -
                        </button>
                        <div className="mx-2 font-bold">{count}개</div>
                        <button
                            className="increase-btn"
                            onClick={() => modifyCartItem('up')}
                        >
                            +
                        </button>
                    </div>
                    <button
                        type="button"
                        className="font-medium text-sky-400 hover:text-sky-500"
                        onClick={handleRemoveItem}
                    >
                        <p className="remove-btn">삭제하기</p>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
