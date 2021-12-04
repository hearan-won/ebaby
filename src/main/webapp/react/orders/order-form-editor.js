import orderService from "./order-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const OrderFormEditor = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findOrderById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateOrder = (id, order) => {
        orderService.updateOrder(id, order)
            .then(() => {
                goBack()
            });
    }


    const createOrder = (order) =>
        orderService.createOrder(order)
            .then(() => {
                goBack()
            });

    const findOrderById = (id) =>
        orderService.findOrderById(id)
            .then(order => setOrder(order));

    const deleteOrder = (id) =>
        orderService.deleteOrder(id)
            .then(() => {
                goBack()
            });

    return (
        <div>
            <h2>Order Editor</h2>
            <label>id</label>
            <input value={order.id}/><br/>
            <label>Product Id</label>
            <input value={order.productId}
                   onChange={(e) =>
                       setOrder(order =>
                           ({...order, productId: e.target.value}))}
            /><br/>
            <label>Quantity</label>
            <input value={order.quantity}
                   onChange={(e) =>
                       setOrder(order =>
                           ({...order, quantity: e.target.value}))}
            /><br/>
            <label>Buyer Id</label>
            <input value={order.bid}
                   onChange={(e) =>
                       setOrder(order =>
                           ({...order, bid: e.target.value}))}
            /><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteOrder(order.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateOrder(order.id, order)}>
                Update
            </button>

            <button className="btn btn-success"
                    onClick={() => createOrder(order)}>
                Create
            </button>

        </div>
    );
}

export default OrderFormEditor;