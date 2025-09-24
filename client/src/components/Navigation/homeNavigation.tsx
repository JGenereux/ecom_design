import { Link } from "react-router-dom"

export default function HomeNavigation() {
    const navLinks = [
        { name: "Shop", href: "/shop" },
        { name: "Agendas", href: "/agendas" },
        { name: "Protocol", href: "/protocol" }
    ]

    return <div className="flex flex-col items-center justify-center h-screen w-screen shadow-gray-300">
        {navLinks?.map((link) => {
            return <Link className="font-nav-font text-4xl hover:underline" to={link.href}>{link.name}</Link>
        })}
    </div>
}