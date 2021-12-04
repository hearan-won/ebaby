import inventoryService from "./inventory-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const InventoryFormEditor = () => {
    const {id} = useParams();
    const [sellerId, setSellerId] = useState(null);
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findInventoryById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateInventory = (id, inventory) => {
        inventoryService.updateInventory(id, inventory)
            .then(() => {
                goBack()
            });
    }


    const createInventory = (inventory) =>
        inventoryService.createInventory(inventory)
            .then(() => {
                goBack()
            });

    const findInventoryById = (id) =>
        inventoryService.findInventoryById(id)
            .then(inventory => {
                setSellerId(inventory.seller.id);
                setInventory(inventory)
            });

    const deleteInventory = (id) =>
        inventoryService.deleteInventory(id)
            .then(() => {
                goBack()
            });


    return (
        <div>
            <h2>Inventory Editor</h2>
            <label>id</label>
            <input value={inventory.id}/><br/>
            <label>Location</label>
            <input value={inventory.location}
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, location: e.target.value}))}
            /><br/>
            <label>Seller Id</label>
            <input value={sellerId}
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, seller: {
                               id: e.target.value}}))}
            /><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteInventory(inventory.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateInventory(inventory.id, inventory)}>
                Save
            </button>

            <button className="btn btn-success"
                    onClick={() => createInventory(inventory)}>
                Create
            </button>

        </div>
    );
}

export default InventoryFormEditor;