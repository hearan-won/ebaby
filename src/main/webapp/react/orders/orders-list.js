import ordersService from "./orders-service"
const {Link} = window.ReactRouterDOM;
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
                }
            </ul>
        </div>
    )
}
export default OrdersList;