import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { useAnimate, usePresence } from "motion/react"
import { useEffect } from "react"

export default function HomeNavigation() {
    const navLinks = [
        { name: "Shop", href: "/shop" },
        { name: "Agendas", href: "/agendas" },
        { name: "Protocol", href: "/protocol" }
    ]

    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                if (scope.current instanceof HTMLDivElement) {
                    for (const child of scope.current.children) {
                        if (child instanceof HTMLAnchorElement) {
                            child.style.opacity = '0'
                        }
                    }

                    for (const child of scope.current.children) {
                        if (child instanceof HTMLAnchorElement) {
                            await animate(child, { opacity: [0, 1], x: [-100, 0] }, { duration: 0.3 })
                        }
                    }
                }
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent])

    return <motion.div ref={scope} className="flex flex-col items-center justify-center h-screen w-screen shadow-gray-300">
        {navLinks?.map((link, i) => {
            return <Link key={link.href} id={`link-${i}`} className="font-nav-font text-4xl hover:underline" to={link.href}>{link.name}</Link>
        })}
    </motion.div>
}