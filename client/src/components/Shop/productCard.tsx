import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"

export default function ProductCard({ product, variant, itemsRef }: { product: { name: string, price: number, category: string, image: string }, variant: 'default' | 'search', itemsRef?: React.RefObject<HTMLDivElement | null> }) {
    const navigate = useNavigate()

    const [hovered, setHovered] = useState(false)
    const currentProductRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (hovered && itemsRef && currentProductRef.current) {
            for (const child of itemsRef.current?.children || []) {
                if (child === currentProductRef.current) {
                    continue
                }
                if (child instanceof HTMLDivElement) {
                    child.style.setProperty('filter', 'blur(2px)')
                }
            }
        }

        return () => {
            for (const child of itemsRef?.current?.children || []) {
                if (child instanceof HTMLDivElement) {
                    child.style.setProperty('filter', 'none')
                }
            }
        }
    }, [hovered])

    return <motion.div ref={currentProductRef} onClick={() => navigate(`/shop/${product.name}`)}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}
        transition={{ duration: 0.2 }}
        className={variant === 'default' ?
            "flex flex-col rounded-sm justify-center w-fit gap-1 pb-2 cursor-pointer"
            :
            "flex flex-col rounded-sm border-2 border-black shadow-md shadow-black justify-center w-fit gap-1 pb-2 bg-white cursor-pointer"
        }>
        <img src={product.image} alt={product.name} className={variant === 'default' ? 'w-full h-72 object-contain' : 'w-96 h-72 object-contain'} />
        <div className="flex flex-col font-body-font text-center">
            <p className="text-lg text-gray-500 px-4">{product.category}</p>
            <div className="flex flex-col px-4 text-xl">
                <p>{product.name}</p>
                <p>${product.price}.00</p>
            </div>
        </div>
    </motion.div>
}