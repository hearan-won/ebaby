import ordersService, {findAllOrders} from "./orders-service"
const {Link, useHistory} = window.ReactRouterDOM;

const { useState, useEffect } = React;
const OrdersList = () => {
    const findAllOrders = () =>
        ordersService.findAllOrders()
            .then(orders => setOrders(orders))
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        findAllOrders()
    }, [])

    console.log(orders);
    return( <div>
            <h2>Orders List</h2>
            <ul>
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>
                            <Link to={`/orders/${order.id}`}>
                                {order.id},

                                {order.productId},
                                {order.buyerId},
                                {order.quantity}
                            </Link>
                        </li>)

                            {order.productId},
                                {order.buyerId},
                            {order.quantity}
                            </Link>
                        </li>)

                }
            </ul>
        </div>
    )
}
export default OrdersList;