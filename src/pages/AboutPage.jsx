import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Sobre CleanSweep</h1>
      
      <div className="space-y-8 text-gray-600 leading-relaxed">
        <p>
          En <span className="font-bold text-green-600">CleanSweep</span>, creemos que un espacio limpio es un espacio feliz. Nacimos con la misión de ofrecer servicios de limpieza de alta calidad, confiables y accesibles para hogares y oficinas.
        </p>
        <p>
          Nuestro equipo está formado por profesionales apasionados por el detalle. Utilizamos productos ecológicos y las mejores técnicas para asegurar que cada rincón de tu espacio no solo esté limpio, sino también seguro para tu familia, mascotas y empleados.
        </p>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Confianza</h3>
                    <p>Cada miembro de nuestro equipo es verificado y capacitado para tu tranquilidad.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Calidad</h3>
                    <p>Nos obsesionamos con los detalles para entregar un resultado que supere tus expectativas.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Sostenibilidad</h3>
                    <p>Usamos productos que son efectivos para la limpieza y amigables con el planeta.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
