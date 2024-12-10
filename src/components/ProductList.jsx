import ProductItem from './ProductItem';

const ProductList = ({ productList, handleProductItemClick }) => {
    if (productList === undefined || productList.length === 0) {
        return '상품이 없습니다.';
    }
    return (
        <>
            <section id="product-list">
                <div
                    id="product-card-grid"
                    className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4"
                >
                    {productList?.map((item) => (
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            imgSrc={item.imgSrc}
                            name={item.name}
                            price={item.price}
                            handleProductItemClick={handleProductItemClick}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductList;
