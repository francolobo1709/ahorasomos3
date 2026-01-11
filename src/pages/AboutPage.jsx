import React, { useState, useEffect } from 'react';

const AboutPage = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imágenes para el slider (pueden ser URLs reales o placeholders)
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Equipo de limpieza profesional'
    },
    {
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Hogar limpio y organizado'
    },
    {
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Productos de limpieza ecológicos'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Oficina limpia y profesional'
    }
  ];

  // Auto-avanzar slides cada 2 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="about-slider">
      <div className="slider-container">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay con contenido */}
        <div className="slider-overlay">
          <div className="slider-content">
            <div className="slider-text">
              <h1 className="slider-title">Sobre AHORASOMOS3</h1>
              
              <p className="slider-description">
                En AHORASOMOS3, creemos que un espacio limpio es un espacio feliz. Nacimos con la misión de ofrecer servicios de limpieza de alta calidad, confiables y accesibles para hogares y oficinas.
              </p>
              
              <p className="slider-description">
                Nuestro equipo está formado por profesionales apasionados por el detalle. Utilizamos productos ecológicos y las mejores técnicas para asegurar que cada rincón de tu espacio no solo esté limpio, sino también seguro para tu familia, mascotas y empleados.
              </p>

              <div className="slider-values">
                <h3>Nuestros Valores</h3>
                
                <div className="value-item">
                  <h4>🤝 Confianza</h4>
                  <p>Cada miembro de nuestro equipo es verificado y capacitado para tu tranquilidad.</p>
                </div>

                <div className="value-item">
                  <h4>⭐ Calidad</h4>
                  <p>Nos obsesionamos con los detalles para entregar un resultado que supere tus expectativas.</p>
                </div>

                <div className="value-item">
                  <h4>🌱 Sostenibilidad</h4>
                  <p>Usamos productos que son efectivos para la limpieza y amigables con el planeta.</p>
                </div>
              </div>
            </div>

            {/* Botón CTA más abajo */}
            <div className="slider-cta">
              <button 
                className="slider-button"
                onClick={() => onNavigate('contact')}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <button className="slider-nav prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          ❯
        </button>

        {/* Indicadores */}
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;