import Navigation from "../components/Navigation/navigation";
import { useParams } from "react-router-dom";
import Product from "../components/Shop/product";

export default function ProductPage() {
    const { product } = useParams()

    const productName = product?.replace(/-/g, ' ')

    const productData = {
        name: productName || "",
        price: 100,
        category: "Tees",
        image: "/tshirt.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Black", "Green"]
    }

    return <div className="flex flex-col w-full h-screen">
        <Navigation />
        <Product product={productData} />
    </div>
}