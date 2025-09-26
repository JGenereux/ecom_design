import SearchBar from "../Shop/searchBar/searchBar"
import { useEffect, useState } from "react"

export default function ShopNavigation() {
    const shopLinks = [
        { name: "All", href: "/shop" },
        { name: "Tees", href: "/shop/tees" },
        { name: "Hoodies", href: "/shop/hoodies" },
        { name: "Accessories", href: "/shop/accessories" },
    ]

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const [activeLink, setActiveLink] = useState(shopLinks[0])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 640)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setIsMobile(window.innerWidth < 640)
            })
        }
    }, [])

    return <div className="flex flex-col w-full px-4 md:px-8 py-1 sm:py-2">
        {isMobile ? <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full">
                <SearchBar />
            </div>

            <div className="flex flex-col">
                {shopLinks?.map((link, i) => {
                    return <button key={i} className={`font-nav-font text-lg hover:underline text-start cursor-pointer`} onClick={() => setActiveLink(link)}>{link.name}</button>
                })}
            </div>

        </div> :
            <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                    {shopLinks?.map((link, i) => {
                        return <button key={i} className={`font-nav-font text-2xl hover:underline text-start cursor-pointer`} onClick={() => setActiveLink(link)}>{link.name}</button>
                    })}
                </div>

                <div className="flex flex-col w-full">
                    <SearchBar />
                </div>

            </div>
        }
    </div>
}