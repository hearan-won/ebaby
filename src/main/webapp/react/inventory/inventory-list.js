import inventoryService from "./inventory-service";
const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const InventoryList = () => {
    const history = useHistory();
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        inventoryService.findAllInventorys().then(inventorys => setInventorys(inventorys));
    }, []);

    return (
        <div>
            <h2>Inventory List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/inventorys/new")}>
                Add Inventory
            </button>

            <ul className="list-group">
                {
                    inventorys.map(inventory =>
                        <li className="list-group-item"
                            key={inventory.id}>
                            <Link to={`/inventorys/${inventory.id}`}>
                                <label>Inventory  {inventory.id} </label><br/>
                                <label>Seller id: {inventory.sellerId}</label><br/>
                                <label>Company location: {inventory.location}</label>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default InventoryList;