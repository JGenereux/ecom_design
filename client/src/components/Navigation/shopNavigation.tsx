import SearchBar from "../Shop/searchBar/searchBar"
import { useState } from "react"

export default function ShopNavigation() {
    const shopLinks = [
        { name: "All", href: "/shop" },
        { name: "Tees", href: "/shop/tees" },
        { name: "Hoodies", href: "/shop/hoodies" },
        { name: "Accessories", href: "/shop/accessories" },
    ]

    const [activeLink, setActiveLink] = useState(shopLinks[0])

    return <div className="flex flex-col w-full px-8 py-2">
        <div className="flex flex-row w-full gap-8">
            <div className="flex flex-col">
                {shopLinks?.map((link) => {
                    return <button className={`font-nav-font text-2xl hover:underline text-start cursor-pointer`} onClick={() => setActiveLink(link)}>{link.name}</button>
                })}
            </div>

            <div className="flex flex-col w-full">
                <SearchBar />
            </div>

            <span className="font-header-font text-4xl underline underline-offset-2">{activeLink.name}</span>
        </div>
    </div>
}