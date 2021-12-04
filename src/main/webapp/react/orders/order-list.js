import orderService from "./order-service";
const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const OrderList = () => {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        orderService.findAllOrders().then(orders => setOrders(orders));
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/orders/new")}>
                Add Order
            </button>

            <ul className="list-group">
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>
                            <Link to={`/orders/${order.id}`}>
                                <label>Order {order.id} </label><br/>
                                <label>Buyer id: {order.bid} </label><br/>
                                <label>Product id: {order.productId}</label><br/>
                                <label>Product quantity: {order.quantity}</label>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default OrderList;