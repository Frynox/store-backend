export default function OrderSummary({ orderData }) {
  if (!orderData) return null;

  return (
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Resumen de la Orden</h3>
          <ul className="space-y-3">
              {orderData.detalles.map((item) => (
                  <li key={item.id_producto} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                      <div>
                          <p className="font-semibold text-gray-700">{item.nombre_producto}</p>
                          <p className="text-gray-500 text-sm">{item.quantity} x ${item.precio_unitario}</p>
                      </div>
                      <p className="font-bold text-blue-500">${item.precio_total}</p>
                  </li>
              ))}
          </ul>
          <div className="mt-4 text-right">
              <p className="text-lg font-bold text-gray-800">Total: ${orderData.totalGeneral}</p>
          </div>
      </div>
  );
}
