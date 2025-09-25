import { useState } from "react";
import type { Product } from "../../@types/product";
import OptionSelector from "./optionSelector";
import { motion } from "motion/react";

export default function Product({ product }: { product: Product }) {
    const [size, setSize] = useState(product.sizes[0])
    const [color, setColor] = useState(product.colors[0])

    return <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring' }}
        className="flex flex-col items-center md:items-start md:flex-row h-[80vh] my-12">
        <div className="flex flex-col items-center justify-center w-1/2">
            <img src={product.image} alt={product.name} className="max-w-lg h-96 object-contain" />
        </div>

        <div className="flex flex-col w-full px-4 md:px-0 md:w-1/2 gap-2">
            <div className="flex flex-col">
                <p className="text-3xl font-bold font-header-font">{product.name}</p>
                <p className="text-xl font-header-font">CAD ${product.price}.00</p>
                <p className="text-lg font-nav-font font-bold">{product.category}</p>
            </div>

            <div className="flex flex-col gap-2">
                <OptionSelector selectedOption={color} setOption={setColor} options={product.colors} />
                <OptionSelector selectedOption={size} setOption={setSize} options={product.sizes} />
            </div>

            <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-pointer border-2 border-black rounded-md px-2 py-1 w-fit font-nav-font">Add to Cart</motion.button>

            <p className="text-lg w-[100%] sm:w-[70%] font-body-font">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

    </motion.div>

}