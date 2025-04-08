import HeaderFull from "@/components/header/header-full";

export default function ProductPage() {
    return (
        <div className="flex flex-col items-center h-screen">
            <HeaderFull />
            <h1 className="text-4xl font-bold mb-4">Product Page</h1>
            <p className="text-lg">This is the product page content.</p>
        </div>
    );
}