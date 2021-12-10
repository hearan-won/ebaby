import productService from "./product-service";

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;


const ProductList = () => {
    const {id} = useParams();

    const history = useHistory();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (id) {
            console.log("id", id)
            productService.findAllProducts().then(products => setProducts(products.filter(product => product.inventoryId === parseInt(id))))
        } else {
            productService.findAllProducts().then(products => setProducts(products));
        }
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/products/new")}>
                Add Product
            </button>
            <h4>Products information</h4><br/>
            <ul className="list-group">

                <table width="100%">
                    <tr>
                        <th>Product Id</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Inventory Id</th>
                    </tr>
                    {
                    products.map(product => <tr>
                            <td>{product.id}</td>
                            <td>{product.category}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.inventoryId}</td>
                            <td><Link to={`/products/${product.id}`}><button className="wd-btn-primary">Edit Product</button></Link></td>
                        </tr>
                    )}
                </table>
                {
                    // products.map(product =>
                    //     <li className="list-group-item  wd-buyer-bg"
                    //         key={product.id}>
                    //         <Link to={`/products/${product.id}`}>
                    //             <label>Product Id: {product.id} </label><br/>
                    //             <label>Category {product.category} </label><br/>
                    //             <label>Name: {product.name}</label><br/>
                    //             <label>Price {product.price} </label><br/>
                    //             <label>Inventory Id: {product.inventoryId}</label>
                    //         </Link>
                    //     </li>
                    // )
                }
            </ul>
        </div>
    );
}

export default ProductList;