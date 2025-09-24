import { useEffect } from "react"
import ProductCard from "../productCard"

export default function DisplayProducts({ query, category }: { query: string, category: string }) {
    useEffect(() => {
        const items = document.getElementById("items")
        items?.style.setProperty('filter', 'blur(2px)')

        return () => {
            items?.style.setProperty('filter', 'none')
        }
    }, [])
    console.log(query, category)
    const products = [
        { name: "Product 1", price: 100, category: "Category", image: "/tshirt.jpg" },
        { name: "Product 2", price: 200, category: "Category", image: "/tshirt.jpg" },
        { name: "Product 3", price: 300, category: "Category", image: "/tshirt.jpg" },
    ]

    return <div className="flex flex-row gap-4 absolute z-50 top-10">
        {products?.map((product, i) => {
            return <ProductCard product={product} key={i} variant='search' />
        })}
    </div>
}