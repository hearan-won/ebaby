import productService from "./product-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const ProductFormEditor = () => {
    const {id} = useParams();
    //const [inventoryId, setInventoryId] = useState({});
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findProductById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateProduct = (id, product) => {
        productService.updateProduct(id, product)
            .then(() => {
                goBack()
            });
    }


    const createProduct = (product) =>
        productService.createProduct(product)
            .then(() => {
                goBack()
            });

    const findProductById = (id) =>
        productService.findProductById(id)
            .then(product => {
                setProduct(product)
            });

    const deleteProduct = (id) =>
        productService.deleteProduct(id)
            .then(() => {
                goBack()
            });
    
    return (
        <div>

            <h2>Product Editor</h2>
            <label>Product Id:</label>
            <input value={product.id}/><br/>
            <label>Current Category: {product.category}</label><br/>
            <label>Select New Category: </label>
            <select name="categories" id="category"
                    onChange = { (e) =>
                        setProduct( product => ({...product, category: e.target.value}))} >
                <option value="FOOD_DRINK">Food & Drinks</option>
                <option value="ELECTRONICS">Electronics</option>
                <option value="APPAREL">Apparel</option>
                <option value="ART">Art</option>
            </select>

            <br/>
            <label>Name: </label>
            <input value={product.name}
                   onChange={(e) =>
                       setProduct(product =>
                                      ({...product, name: e.target.value}))}
            /><br/>
            <label>Price: </label>
            <input value={product.price}
                   onChange={(e) =>
                       setProduct(product =>
                                      ({...product, price: e.target.value}))}
            /><br/>
            <label>Inventory Id: </label>
            <input value={product.inventoryId}
                   onChange={(e) =>
                       setProduct(product =>
                                      ({...product, inventoryId: e.target.value}))}
            /><br/>

            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateProduct(product.id, product)}>
                Update
            </button>

            <button className="btn btn-success"
                    onClick={() => createProduct(product)}>
                Create
            </button>

        </div>
    );
}

export default ProductFormEditor;