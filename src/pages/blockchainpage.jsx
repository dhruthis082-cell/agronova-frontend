import Blockchain from "../components/Blockchain";

function BlockchainPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 px-6">
            <h1 className="orbitron text-5xl text-center text-green-400 glow font-black">
                BLOCKCHAIN SUPPLY SYSTEM
            </h1>

            <Blockchain />
        </div>
    );
}

export default BlockchainPage;