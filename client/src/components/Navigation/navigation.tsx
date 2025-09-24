import { motion } from "motion/react"
import { Link } from "react-router-dom"

export default function Navigation() {
    return <motion.div className="my-2 flex flex-row justify-center items-end w-screen gap-4">
        <Link to="/agendas">
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="font-header-font text-3xl">Agendas</span>
            </motion.div>
        </Link>
        <Link to="/">
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="font-header-font text-4xl">Grounded</span>
            </motion.div>
        </Link>
        <Link to="/protocol">
            <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="font-header-font text-3xl">Protocol</span>
            </motion.div>
        </Link>
    </motion.div>
}