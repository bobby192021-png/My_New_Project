import { useEffect, useState } from "react"
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

 const Products = () => {
    const [product,setProduct]= useState([])
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    //data get karna  
    const getProducts = async () => {
        setLoading(true)
        try{
            const response = await axios.get(
               "https://fakestoreapi.com/products"
            );
            setProduct(response.data)
            console.log(response)
        } catch(error){
            console.log(error,"Error here")

            toast.error("Error",{
            position:"top-center",
            autoClose:1000,
            pauseOnHover: true
        })
        }finally{
            setLoading(false)
        }
    }

    //function trigger hoga
    useEffect(()=>{
        getProducts();
    },[])

    //product delete krna 
    const deleteProduct = async (id) => {
        setLoading(true)
        try{
            const response = await axios.delete(
                `https://fakestoreapi.com/products/${id}`
            )
    setProduct((prev) =>
      prev.filter((item) => item.id !== id)
    );
            console.log("deleted: ",response)

        }catch(error){
            console.log(error,"Error")
        }
        toast.warning("product deleted",{
            position:"top-center",
            autoClose:2000,
            pauseOnHover: true

        })
        setLoading(false)
    }
    if (loading) return <h2>Loading products...</h2>;


    return(
        <> 
            <div className="ApiProduct">
            <Button className="productHeading"
              onClick={() => navigate("/addProductapi")}
            >
              <AddIcon /> Add Product
            </Button>
          </div>

        <div className="d_flex">

            
            {product.map((item)=>(
            <div className="wwwAPI">
                <div key={item.id} >
                {/* <h2>Category: {item.category}</h2> */}
               <img
               className="productImage"
                src = {item.image}
                alt="Server error"
                />
                <div className="productTitle">
                <h3>Title: {item.title}</h3>
                </div>
                <h3>Price: {item.price}</h3>
                <div className="productActions">
                <Button
                onClick={()=> deleteProduct(item.id)}
                >
                <DeleteIcon sx={{ color: "black" }}/>   
                </Button>
                <Button
                onClick={()=>navigate("/editProduct",{state:{product:item}})}
                >
                    <ModeEditOutlineTwoToneIcon sx={{ color: "black" }}/>
                </Button>
                </div>
                </div>
            </div>
            ))}

          </div>
          </>
    )
}

export default Products;