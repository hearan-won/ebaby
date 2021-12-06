import sellerService from "./seller-service";

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const SellerFormEditor = () => {
    const {id} = useParams();
    const [seller, setSeller] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findSellerById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateSeller = (id, seller) => {
        sellerService.updateSeller(id, seller)
            .then(() => {
                goBack()
            });
    }

    const createSeller = (seller) =>
        sellerService.createSeller(seller)
            .then(() => {
                goBack()
            });

    const findSellerById = (id) =>
        sellerService.findSellerById(id)
            .then(seller => setSeller(seller));

    const deleteSeller = (id) =>
        sellerService.deleteSeller(id)
            .then(() => {
                goBack()
            });

    return (
        <div>
            <h2>Seller Editor</h2>
            <label>id</label>
            <input value={seller.id}/><br/>
            <label>First Name</label>
            <input value={seller.firstName}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, firstName: e.target.value}))}/><br/>
            <label>Last Name</label>
            <input value={seller.lastName}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, lastName: e.target.value}))}/><br/>
            <label>Username</label>
            <input value={seller.personName}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, personName: e.target.value}))}/><br/>
            <label>Password</label>
            <input value={seller.password}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, password: e.target.value}))}/><br/>
            <label>Email </label>
            <input value={seller.email}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, email: e.target.value}))}/><br/>
            <label>Date Of Birth </label>
            <input type="date"
                   value={seller.dateOfBirth}
                   onChange={(e) =>
                       setSeller(seller =>
                           ({...seller, dateOfBirth: e.target.value}))}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteSeller(seller.id)}>
                Delete
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateSeller(seller.id, seller)}>
                Update
            </button>
            <button className="btn btn-success"
                    onClick={() => createSeller(seller)}>
                Create
            </button>

        </div>
    )

}

export default SellerFormEditor;