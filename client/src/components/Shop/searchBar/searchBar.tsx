import { useState } from "react";
import DisplayProducts from "./displayProducts"

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");

    return <div className="relative flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
            <select className="border-2 px-2 shadow-md shadow-black font-nav-font focus:outline-none" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="tees">Tees</option>
                <option value="hoodies">Hoodies</option>
                <option value="accessories">Accessories</option>
            </select>
            <input type="text" placeholder="Search" className="border-2 px-2 shadow-md shadow-black w-2xs font-nav-font focus:outline-none" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        {query.length > 0 && <DisplayProducts query={query} category={category} />}
    </div>
}

