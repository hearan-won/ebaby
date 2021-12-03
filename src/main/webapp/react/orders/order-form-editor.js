import ordersService from "./orders-service"
const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const OrdersFormEditor = () => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        findOrdersById(id)
    }, []);
    const findOrdersById = (id) =>
        ordersService.findOrdersById(id).then(order => setOrder(order))

    console.log(order.quantity);
    return (
        <div>
            <h2>Orders Editor</h2>
            <label>ID</label>
            <input value={order.id}/><br/>
            <label>Product ID</label>
            <input value={order.productId}/><br/>
            <label>Buyer ID</label>
            <input value={order.buyerId}/><br/>
            <label>Quantity</label>
            <input value={order.quantity}/><br/>
            <button>Cancel</button>
            <button>Delete</button>
            <button>Create</button>
            <button>Save</button>
        </div>
    )
}

export default OrdersFormEditor;