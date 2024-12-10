import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartToolpane from './components/CartToolpane';
import getProductList from './api/getProductList';
import { useEffect } from 'react';

function App() {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [cartToolpaneOpen, setCartToolpaneOpen] = useState(false);

    const handleOpenCloseCartToolpane = () => {
        setCartToolpaneOpen((prev) => !prev);
    };

    const handleProductItemClick = (e) => {
        handleOpenCloseCartToolpane();
        const productId = e.target.dataset.productid;
        addCartItem(parseInt(productId));
    };

    const addCartItem = (id) => {
        const selectedItem = productList.find((item) => item.id === id);
        const idx = cartList.findIndex((item) => item.id === id);
        if (idx === -1) {
            setCartList((prev) => [...prev, { ...selectedItem, count: 1 }]);
        } else {
            cartList[idx].count += 1;
            setCartList([...cartList]);
        }
    };

    useEffect(() => {
        const fetchProductData = async () => {
            const result = await getProductList();
            setProductList(result);
        };
        fetchProductData();
    }, []);
    return (
        <div className="relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="flex justify-between mb-4">
                    <h2 className="text-3xl font-bold">오늘의 상품</h2>
                    <button
                        id="open-cart-btn"
                        className="fill-gray-400 hover:fill-gray-500"
                        onClick={handleOpenCloseCartToolpane}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
                        </svg>
                    </button>
                </header>
                <ProductList
                    productList={productList}
                    handleProductItemClick={handleProductItemClick}
                />
            </div>
            <div
                id="backdrop"
                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                hidden={!cartToolpaneOpen}
                onClick={handleOpenCloseCartToolpane}
            ></div>
            <CartToolpane
                cartList={cartList}
                setCartList={setCartList}
                cartToolpaneOpen={cartToolpaneOpen}
                handleOpenCloseCartToolpane={handleOpenCloseCartToolpane}
            />
        </div>
    );
}

export default App;
