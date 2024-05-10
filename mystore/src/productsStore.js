/*price_1PEjXNARYka1w8MTyE6urFIL deadpool 
price_1PEjWqARYka1w8MTL1cxiAXU storm
price_1PEjYmARYka1w8MT8XHowojt the flash
price_1PEjZYARYka1w8MTlCIHWjIq green
price_1PEjaKARYka1w8MTf9LfIC8B bp
*/
const productsArray = [
    {
        id: "price_1PEjWqARYka1w8MTL1cxiAXU",
        title: "Storm",
        price: 10.00,
        image: "storm.jpg",
        description:"Marvel comic Storm"
    },
    {
        id: "price_1PEjXNARYka1w8MTyE6urFIL",
        title: "DeadPool",
        price: 5.00,
        image: "dp.jpg",
        description: "Marvel comic DeadPool"
    },
    {
        id: "price_1PEjYmARYka1w8MT8XHowojt",
        title: "The Flash",
        price: 30.00,
        image: "flash.jpg",
        description: "DC comic The Flash"
    },
    {
        id: "price_1PEjZYARYka1w8MTlCIHWjIq",
        title: "Green Lantern",
        price: 25.00,
        image: "gl.jpg",
        description: "Marvel comic Green Lantern"
    },
    {
        id: "price_1PEjaKARYka1w8MTf9LfIC8B",
        title: "Black Panther",
        price: 5.00,
        image: "bp.jpg",
        description: "Marvel comic Black Panther"
    }

];

async function getAllProducts() {
    try {
        const response = await fetch('http://localhost:4023/products');
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}
async function getProductData(ID) {
    try {
        const response = await fetch(`http://localhost:4023/products/${ID}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error(`Failed to fetch product with ID ${ID}:`, error);
        throw error; // Rethrowing the error to handle it in the calling function
    }
}

export { getAllProducts, getProductData, productsArray };