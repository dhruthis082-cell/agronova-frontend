import Navbar from "../components/Navbar";
import Marketplace from "../components/Marketplace";

function MarketplacePage() {
    return (
        <div className="bg-[#02150d] min-h-screen text-white overflow-hidden">

            <Navbar />

            <div className="pt-36">

                <Marketplace />

            </div>

        </div>
    );
}

export default MarketplacePage;