export default function Page() {
  return( <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Nossos Valores</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Valor 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Valor 1</h2>
            <p className="text-gray-700">
              Descreva aqui o seu primeiro valor e o que ele significa para a sua empresa.
            </p>
          </div>

          {/* Valor 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Valor 2</h2>
            <p className="text-gray-700">
              Descreva aqui o seu segundo valor e o que ele significa para a sua empresa.
            </p>
          </div>

          {/* Valor 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Valor 3</h2>
            <p className="text-gray-700">
              Descreva aqui o seu terceiro valor e o que ele significa para a sua empresa.
            </p>
          </div>
        </div>
      </div>
    </div>)
}