import { useEffect, useState } from "react"
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { Button, Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";

const Products = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    //data get karna  
    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setProduct(response.data)
            console.log(response)
        } catch (error) {
            console.log(error, "Error here")

            toast.error("Error", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: true
            })
        } finally {
            setLoading(false)
        }
    }

    //function trigger hoga
    useEffect(() => {

        getProducts();
    }, [])

    //product delete krna 
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            const response = await axios.delete(
                `https://fakestoreapi.com/products/${id}`
            )
            setProduct((prev) =>
                prev.filter((item) => item.id !== id)
            );
            console.log("deleted: ", response)

        } catch (error) {
            console.log(error, "Error")
        }
        toast.warning("product deleted", {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: true

        })
        setLoading(false)
    }
    const ProductSkeleton = () => {
        return (
            <div className="wwwAPI">
                <Skeleton variant="rectangular" height={180} />
                <Skeleton height={25} style={{ marginTop: 10 }} />
                <Skeleton width="60%" height={25} />
                <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                </div>
            </div>
        );
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const filteredProducts = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            <div className="showTopbar">
                <div className="logo">Store</div>

                <div className="profile" onClick={toggleDropdown}>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="profile-img"
                    />
                    <span className="profile-name">John Doe</span>
                    <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                        <a href="/profile">My Profile</a>
                        <a href="/settings">Settings</a>
                        <a href="/">Logout</a>
                    </div>
                </div>
            </div>

            <div className="ApiProduct">
                <SearchBar
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="pppp">
                    <Button className="productHeading"
                        onClick={() => navigate("/addProductapi")}
                    >
                        <AddIcon /> Add Product
                    </Button>
                </div>
            </div>
            <h2 style={{ marginTop: "20px" }}>Products</h2>

            <div className="d_flex">
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))
                    : filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div className="wwwAPI" key={item.id}>
                                <img
                                    className="productImage"
                                    src={item.image}
                                    alt="Server error"
                                />

                                <div className="productTitle">
                                    <h3>
                                        {item.title.length > 20
                                            ? `${item.title.slice(0, 20)}..`
                                            : item.title}
                                    </h3>
                                    <h3>${item.price}</h3>
                                </div>

                                <div className="productActions">
                                    <Button onClick={() => deleteProduct(item.id)}>
                                        <DeleteIcon sx={{ color: "black" }} />
                                    </Button>

                                    <Button
                                        onClick={() =>
                                            navigate("/editProduct", { state: { product: item } })
                                        }
                                    >
                                        <ModeEditOutlineTwoToneIcon sx={{ color: "black" }} />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>No products found</h3>
                    )}
            </div>


        </>
    )
}

export default Products;