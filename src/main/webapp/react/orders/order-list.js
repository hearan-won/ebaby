import orderService from "./order-service";
import productService from "../product/product-service";
const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const OrderList = () => {
    const {id} = useParams();
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        //orderService.findAllOrders().then(orders => setOrders(orders));

        if (id) {
            console.log("id", id)
            orderService.findAllOrders().then(orders => setOrders(orders.filter(order => order.bid === parseInt(id))))
        } else {
            orderService.findAllOrders().then(orders => setOrders(orders));
        }
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/orders/new")}>
                Add Order
            </button>
            <h4>Orders information</h4><br/>
            <ul className="list-group">

                <table width="100%">
                    <tr>
                        <th>Order Id</th>
                        <th>Buyer Id</th>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th>See Products</th>
                    </tr>
                    {orders.map(order => <tr>
                                        <td>{order.id}</td>
                                        <td>{order.bid}</td>
                                        <td>{order.productId}</td>
                                        <td>{order.quantity}</td>
                                        {/*<td><button className="wd-btn-primary">See Products</button></td>*/}
                                        <td><Link to={`/orders/${order.id}`}><button className="wd-btn-primary">Edit Order</button></Link></td>
                                        </tr>
                    )}
                </table>
                {
                    // orders.map(order =>
                    //     <li className="list-group-item  wd-buyer-bg"
                    //         key={order.id}>
                    //         <div className="row">
                    //             <div className="col">
                    //         <Link to={`/orders/${order.id}`}>
                    //             <label>Order {order.id} </label><br/>
                    //             <label>Buyer id: {order.bid} </label><br/>
                    //             <label>Product id: {order.productId}</label><br/>
                    //             <label>Product quantity: {order.quantity}</label>
                    //         </Link>
                    //             </div>
                    //             <div className="col">
                    //                 <button className="wd-btn-primary">
                    //                     Products
                    //                 </button>
                    //             </div>
                    //         </div>
                    //     </li>
                    // )
                }
            </ul>
        </div>
    );
}

export default OrderList;