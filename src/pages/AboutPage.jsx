import React from 'react';

const AboutPage = () => {
  const values = [
    { title: "Confianza", desc: "Verificamos cada perfil para tu seguridad." },
    { title: "Cercanía", desc: "Encuentra ayuda en tu mismo barrio." },
    { title: "Simplicidad", desc: "Contacta y cotiza en segundos por WhatsApp." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">Sobre AHORASOMOS3</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Conectamos hogares con profesionales de confianza de manera local y transparente.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-3xl text-green-600 mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-800">{v.title}</h3>
              <p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* Sección adicional de historia */}
        <section className="bg-white rounded-3xl border border-gray-100 p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Historia</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            En AHORASOMOS3, creemos que un espacio limpio es un espacio feliz. Nacimos con la misión 
            de ofrecer servicios de limpieza de alta calidad, confiables y accesibles para hogares y oficinas.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo está formado por profesionales apasionados por el detalle. Utilizamos productos 
            ecológicos y las mejores técnicas para asegurar que cada rincón de tu espacio esté impecable.
          </p>
        </section>

        {/* Estadísticas simples */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
            <div className="text-gray-600 text-sm">Servicios Completados</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Calificación Promedio</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Compromiso</div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">¿Listo para comenzar?</h2>
          <p className="text-gray-600 text-lg">Encuentra el profesional perfecto para tu hogar</p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1"
          >
            Explorar Profesionales
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
