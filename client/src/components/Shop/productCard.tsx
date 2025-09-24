import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"

export default function ProductCard({ product, variant }: { product: { name: string, price: number, category: string, image: string }, variant: 'default' | 'search' }) {
    const navigate = useNavigate()

    return <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => navigate(`/shop/${product.name}`)}
        className={variant === 'default' ?
            "flex flex-col rounded-sm shadow-md shadow-black justify-center w-fit gap-1 pb-2 bg-white cursor-pointer"
            :
            "flex flex-col rounded-sm border-2 border-black shadow-md shadow-black justify-center w-fit gap-1 pb-2 bg-white cursor-pointer"
        }>
        <img src={product.image} alt={product.name} className={variant === 'default' ? 'w-full h-92 object-contain' : 'w-full h-72 object-contain'} />
        <div className="flex flex-col font-body-font">
            <p className="text-lg text-gray-500 px-4">{product.category}</p>
            <div className="flex flex-col px-4 text-xl">
                <p>{product.name}</p>
                <p>${product.price}.00</p>
            </div>
        </div>
    </motion.div>
}