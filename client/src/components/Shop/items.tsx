import ProductCard from "./productCard"
import { motion } from "motion/react"
import { useRef } from "react"


export default function Items() {
    const itemsRef = useRef<HTMLDivElement | null>(null)
    const items = [
        { name: "Item 1", price: 100, category: "Category", image: "/tshirt.png" },
        { name: "Item 2", price: 200, category: "Category", image: "/tshirt.png" },
        { name: "Item 3", price: 300, category: "Category", image: "/tshirt.png" },
        /*{ name: "Item 2", price: 200, category: "Category ", image: "/tshirt.png" },
        { name: "Item 3", price: 300, category: "Category ", image: "/tshirt.png" },
        { name: "Item 4", price: 300, category: "Category ", image: "/tshirt.png" },
        { name: "Item 4", price: 300, category: "Category ", image: "/tshirt.png" },*/

    ]


    return <motion.div id="items" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring' }} className="flex justify-center">
        <div ref={itemsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {items?.map((item, i) => {
                return <ProductCard itemsRef={itemsRef} product={item} key={i} variant='default' />
            })}
        </div>
    </motion.div>
}