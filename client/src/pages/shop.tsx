import Navigation from "../components/Navigation/navigation";
import ShopNavigation from "../components/Navigation/shopNavigation";
import Items from "../components/Shop/items";

export default function Shop() {

    return <div className="flex flex-col">
        <Navigation />
        <ShopNavigation />
        <Items />
    </div>
}