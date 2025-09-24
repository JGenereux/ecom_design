import ProductCard from "./productCard"
import { motion } from "motion/react"

export default function Items() {
    const items = [
        { name: "Item 1", price: 100, category: "Category", image: "/tshirt.jpg" },
        { name: "Item 2", price: 200, category: "Category", image: "/tshirt.jpg" },
        { name: "Item 3", price: 300, category: "Category", image: "/tshirt.jpg" },
        { name: "Item 2", price: 200, category: "Category ", image: "/tshirt.jpg" },
        { name: "Item 3", price: 300, category: "Category ", image: "/tshirt.jpg" },
        { name: "Item 4", price: 300, category: "Category ", image: "/tshirt.jpg" },
        { name: "Item 4", price: 300, category: "Category ", image: "/tshirt.jpg" },

    ]

    return <motion.div id="items" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring' }} className="flex items-center justify-center my-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {items?.map((item, i) => {
                return <ProductCard product={item} key={i} variant='default' />
            })}
        </div>
    </motion.div>
}