import buyerService from "./buyer-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const BuyerFormEditor = () => {
    const {id} = useParams();
    const [buyer, setBuyer] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findBuyerById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateBuyer = (id, buyer) => {
        buyerService.updateBuyer(id, buyer)
            .then(() => {
                goBack()
            });
    }


    const createBuyer = (buyer) =>
        buyerService.createBuyer(buyer)
            .then(() => {
                goBack()
            });

    const findBuyerById = (id) =>
        buyerService.findBuyerById(id)
            .then(buyer => setBuyer(buyer));

    const deleteBuyer = (id) =>
        buyerService.deleteBuyer(id)
            .then(() => {
                goBack()
            });

    const setVIP = (event) => {
        if (event.target.value === '1') {
            setBuyer(buyer =>
                ({...buyer, vip: true}))
        }
        else {
            setBuyer(buyer =>
                ({...buyer, vip: false}))
        }

    }

    return (
        <div>
            <h2>Buyer Editor</h2>
            <label>id</label>
            <input value={buyer.id}/><br/>
            <label>First Name</label>
            <input value={buyer.firstName}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, firstName: e.target.value}))}
            /><br/>
            <label>Last Name</label>
            <input value={buyer.lastName}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, lastName: e.target.value}))}/><br/>
            <label>Username</label>
            <input value={buyer.personName}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, personName: e.target.value}))}/><br/>
            <label>Password</label>
            <input value={buyer.password}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, password: e.target.value}))}/><br/>
            <label>Email </label>
            <input value={buyer.email}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, email: e.target.value}))}/><br/>
            <label>VIP subscription </label>
            <select name="vip"
                    onChange = { (e) => setVIP(e)} >
                <option value="1"  name="vip">True</option>
                <option value="0" selected="true" name="vip">False</option>
            </select><br/>
            <label>Date Of Birth </label>
            <input type="date"
                   value={buyer.dateOfBirth}
                   onChange={(e) =>
                       setBuyer(buyer =>
                           ({...buyer, dateOfBirth: e.target.value}))}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteBuyer(buyer.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateBuyer(buyer.id, buyer)}>
                Update
            </button>

            <button className="btn btn-success"
                    onClick={() => createBuyer(buyer)}>
                Create
            </button>

        </div>
    );
}

export default BuyerFormEditor;