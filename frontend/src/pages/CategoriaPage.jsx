import CategoryProducts from "../components/CategoryProducts.jsx";

export default function CategoriaPage() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Productos por Categoría</h2>
            <CategoryProducts />
        </div>
    );
}
