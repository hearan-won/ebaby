import productService from "./product-service";

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const ProductList = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.findAllProducts().then(products => setProducts(products));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/products/new")}>
                Add Product
            </button>

            <ul className="list-group">
                {
                    products.map(product =>
                        <li className="list-group-item  wd-buyer-bg"
                            key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <label>Product Id: {product.id} </label><br/>
                                <label>Category {product.category} </label><br/>
                                <label>Name: {product.name}</label><br/>
                                <label>Price {product.price} </label><br/>
                                <label>Inventory Id: {product.inventoryId}</label>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default ProductList;