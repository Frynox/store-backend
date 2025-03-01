import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrdenDetallePage from "./pages/OrdenDetallePage";
import CategoriaPage from "./pages/CategoriaPage";

export default function App() {
    return (
        <Router>
            <div className="max-w-lg mx-auto mt-10">
                <h1 className="text-2xl font-bold text-center mb-6">Gestión de Órdenes</h1>

                {/* Barra de Navegación */}
                <nav className="flex justify-around bg-gray-200 p-4 rounded-lg">
                    <Link to="/ordenDetalle" className="text-blue-500">Orden Detalle</Link>
                    <Link to="/categoria" className="text-blue-500">Categorías</Link>
                </nav>

                {/* Definición de Rutas */}
                <Routes>
                    <Route path="/ordenDetalle" element={<OrdenDetallePage />} />
                    <Route path="/categoria" element={<CategoriaPage />} />
                </Routes>
            </div>
        </Router>
    );
}
