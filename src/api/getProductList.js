const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw response.json();
    } catch (e) {
        console.log(e);
    }
};

const getProductList = async () => {
    const result = await request('/cartlist/productData.json');
    return result;
};

export default getProductList;
