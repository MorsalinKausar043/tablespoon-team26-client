import { useEffect, useState } from "react";
import { addToDb, getStoredCart, removeFromDb } from "./useLocalStorage";
import firebaseInitializetion from "../firebase/firebase.init";

firebaseInitializetion();

const useProducts = () =>{
    // const { register, handleSubmit, reset } = useForm();
    const [authMessage, setAuthMessage] = useState('');
    const [user, setUser] = useState({});

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    const getStarting = JSON.parse(localStorage.getItem('starting'));

    // All products
    useEffect(() => {
            fetch("https://floating-caverns-25596.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    // cart quantity
    useEffect(() => {
        if (products.length)
        {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart)
            {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct)
                {
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products]);

    // handleAddToCart ---------------------->


    const handleAddToCart = (product) => {
        const newCart = [...cart];
        const existing = cart.find(c => c._id === product._id);
        if(existing){
            product.quantity = product.quantity + 1;
        }
        else{
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product._id);

        setQuantity(quantity + 1);
    };

    const handleQuantityMinus = (product) => {

        setQuantity(quantity < 2 ? 1 : quantity - 1);
    }
   

    // Delete
    const handleRemove = _id => {
        const newCart = cart.filter(product => product._id !== _id);
        setCart(newCart);
        removeFromDb(_id);
    }

    // -------------------------------------------------------------------------
    // Authentication
    // -------------------------------------------------------------------------
    useEffect( () => {
        const authUser = JSON.parse(localStorage.getItem('Auth'));
        setUser(authUser)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('Auth');
        setUser({});
    };


    return {
        products,
        setProducts,
        displayProducts,
        setDisplayProducts,
        getStarting,
        cart,
        setCart,
        handleAddToCart,
        handleQuantityMinus,
        quantity,
        setQuantity,
        handleRemove,
        setAuthMessage,
        authMessage,
        user,
        setUser,
        handleLogout,
    }
}

export default useProducts;