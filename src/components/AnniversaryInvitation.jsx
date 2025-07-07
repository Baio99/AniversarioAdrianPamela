import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Lock, Music, Play, Pause } from 'lucide-react';
// En la parte superior de tu archivo (después de los imports)
//import Head from 'next/head';

const AnniversaryInvitation = () => {
  const [currentSection, setCurrentSection] = useState('invitation');
  const [formData, setFormData] = useState({ place: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const mediaSections = [
  {
    title: "Nosotros 2023",
    items: [
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/Inicio2023.mp4', alt: 'Primer video' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023primervideo.mp4', alt: 'Primeros Momentos' },
      { type: 'image', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023primermes.jpg', alt: 'Nuestro primer mes' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-teleferico.mp4', alt: 'Paseo Teleferico' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-rio.mp4', alt: 'Paseo cascadas' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-10baile.mp4', alt: 'Aprendiendo a bailar salsa' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bigboy2023.mp4', alt: 'Big boy' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-11-parque.mp4', alt: 'era de clases' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12patascaminadas.mp4', alt: 'conocimos el metro' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/navidad2023.mp4', alt: 'conocimos el metro' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12fin.mp4', alt: 'Momentos especiales' },
      // Agrega más items de 2023 aquí
    ]
  },
  {
    title: "Nosotros 2024",
    items: [
      { type: 'image', src: 'https://Baio99.github.io/AniversarioAdrianPamela/public/media/logo192.png', alt: 'Día en la playa' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-02cumple.mp4', alt: 'Cumple 2023 de ti mi hermosa' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer.mp4', alt: 'bailesin' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-04-saludoguanaba.mp4', alt: 'Saludo' },
      { type: 'image', src: 'https://Baio99.github.io/AniversarioAdrianPamela/public/media/2024Paseo.png', alt: 'Paseo guabana republic' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-centro.mp4', alt: 'En en centro con una quiteña linda de apellifo Ger' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-cerro.mp4', alt: 'En la montañita con un angelito' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-montana.mp4', alt: 'Tarde de piscina' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-07-primerano', alt: 'Nuestro Primer año del gran amor nuestro' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-08-graduacion', alt: 'Acompañandote feliz y orgulloso de verte graduada' },
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-12-navidad', alt: 'Celebracion de navidad a mi reina linda' },
    ]
  },
  {
    title: "Nuestras primeras veces",
    items: [
      { type: 'image', src: '/media/foto3.jpg', alt: 'Cena romántica' },
      { type: 'image', src: '/media/foto4.jpg', alt: 'Atardecer juntos' },
      // Agrega más "primeras veces" aquí
    ]
  },
  {
    title: "Nuestros primeros días",
    items: [
      { type: 'image', src: '/media/foto5.jpg', alt: 'Sonrisas compartidas' },
      // Agrega más items de primeros días aquí
    ]
  },
  {
    title: "Actualmente",
    items: [
      { type: 'video', src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer.mp4', alt: 'Baile romántico' },
      // Agrega más items actuales aquí
    ]
  }
];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateAndSubmit = () => {
    const newErrors = {};

    if (formData.place.toLowerCase().trim() !== 'omi') {
      newErrors.place = 'Lugar incorrecto';
    }

    if (formData.password.toLowerCase().trim() !== 'adrianteama') {
      newErrors.password = 'Palabra clave incorrecta';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCurrentSection('love-letter');
      setIsPlaying(true);
    }
  };

useEffect(() => {
  if (currentSection === 'love-letter') {
    // Calcula el total de items en todas las secciones
    const totalItems = mediaSections.reduce((sum, section) => sum + section.items.length, 0);
    
    const interval = setInterval(() => {
      setCurrentMediaIndex(prev => (prev + 1) % totalItems);
    }, 4000);
    
    return () => clearInterval(interval);
  }
}, [currentSection]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  if (currentSection === 'invitation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Heart className="w-2 h-2 text-pink-300 opacity-30" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-md w-full">
          {/* Tarjeta principal */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
            {/* Encabezado */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Heart className="w-16 h-16 text-rose-300 animate-pulse" />
                  <div className="absolute inset-0 animate-ping">
                    <Heart className="w-16 h-16 text-rose-300 opacity-30" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 font-serif">
                Feliz Aniversario
              </h1>
              <div className="text-6xl font-bold text-rose-300 mb-4 animate-bounce">
                2 Años
              </div>


              <div className="max-w-xs mx-auto space-y-3 px-5 py-4 bg-white/10 rounded-lg border border-rose-200/30 backdrop-blur-xs">
                {[
                  "Una cordial invitación para la mujer que ilumina mi vida con solo una sonrisa",
                  "Mañana quiero verte, abrazarte y ver tu belleza que cada día me enamora más",
                  "Te invito con todo mi corazón… ven tan hermosa como siempre, o aún más, si eso es posible"
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-lg leading-tight text-rose-50"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      textShadow: '0 0 5px rgba(255, 182, 193, 0.7)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>


            </div>

            {/* Detalles de la cita */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-rose-500/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🕔</span>
                </div>
                <div>
                  <p className="font-semibold">Te pasare recogiendo</p>
                  <p className="text-rose-200">5:00 PM - Día Lunes</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-rose-500/30 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Lugar de la cita</p>
                  <p className="text-rose-200 italic">🗺️ Incógnita... Es sorpresa</p>
                </div>
              </div>
            </div>

            {/* Formulario de acceso */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Lock className="w-8 h-8 text-rose-300 mx-auto mb-2" />
                <p className="text-rose-100 text-sm">
                  Descifra los secretos para continuar, los tendras el dia de mañana
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-rose-200 text-sm font-medium mb-2">
                    ¿Lugar donde te llevé?
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${errors.place ? 'border-red-400' : 'border-white/30'
                      } text-white placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300`}
                    placeholder="Escribe el lugar..."
                  />
                  {errors.place && (
                    <p className="text-red-300 text-sm mt-1 animate-shake">{errors.place}</p>
                  )}
                </div>

                <div>
                  <label className="block text-rose-200 text-sm font-medium mb-2">
                    Palabra clave especial
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${errors.password ? 'border-red-400' : 'border-white/30'
                      } text-white placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300`}
                    placeholder="Nuestra palabra especial..."
                  />
                  {errors.password && (
                    <p className="text-red-300 text-sm mt-1 animate-shake">{errors.password}</p>
                  )}
                </div>
              </div>

              <button
                onClick={validateAndSubmit}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Ingresar</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Control de música */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMusic}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Heart className="w-3 h-3 text-pink-300 opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6">
        {/* Carta de amor */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl border border-white/20 animate-fade-in">
          <div className="text-center mb-8">
            <Music className="w-12 h-12 text-rose-300 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-white mb-2 font-serif">
              Para ti, mi amor
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-white space-y-6 font-serif text-lg leading-relaxed">
              <p className="text-rose-100 italic text-xl text-center mb-8">
                "En este día tan especial..."
              </p>

              <p className="text-justify">
                Mi querida amor, en este día quiero decirte que estos dos años a tu lado
                han sido los más hermosos de mi vida. Cada momento compartido contigo
                se ha convertido en un tesoro invaluable que guardo en mi corazón.
              </p>

              <p className="text-justify">
                Tu sonrisa ilumina mis días más oscuros, tu risa es la melodía más
                hermosa que conozco, y tu amor es el regalo más preciado que la vida
                me ha dado. Contigo he aprendido que el amor verdadero no solo existe
                en los cuentos, sino que vive en cada pequeño gesto, en cada mirada
                cómplice, en cada abrazo sincero.
              </p>

              <p className="text-justify">
                Hoy celebramos no solo dos años juntos, sino también la promesa de
                muchos más años llenos de aventuras, risas, sueños compartidos y
                un amor que crece cada día más fuerte.
              </p>

              <p className="text-center text-rose-200 text-xl font-bold mt-8">
                Te amo más de lo que las palabras pueden expresar
              </p>

              <p className="text-right text-rose-300 italic text-lg mt-6">
                Con todo mi amor,<br />
                Tu Adrian 💕
              </p>
            </div>
          </div>
        </div>

        {/* Álbum de fotos y videos */}
        {/* Álbum de fotos y videos por secciones */}
<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
  <h3 className="text-2xl font-bold text-white text-center mb-8 font-serif">
    Nuestros Recuerdos
  </h3>

  {mediaSections.map((section, sectionIndex) => (
    <div key={sectionIndex} className="mb-12 last:mb-0">
      {/* Título de la sección */}
      <h4 className="text-xl font-bold text-rose-300 mb-6 pb-2 border-b border-rose-300/30 font-serif">
        {section.title}
      </h4>
      
      {/* Grid de multimedia */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 ${
              currentMediaIndex === sectionIndex * 100 + itemIndex ? 
              'ring-4 ring-rose-400 scale-105' : ''
            }`}
          >
            <div className="aspect-square overflow-hidden relative">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              )}
              
              {/* Fallback en caso de error */}
              <div className="w-full h-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center" style={{ display: 'none' }}>
                <span className="text-white text-6xl">
                  {item.type === 'image' ? '📸' : '🎥'}
                </span>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium drop-shadow-lg">
                {item.alt}
              </p>
            </div>
            
            {item.type === 'video' && (
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
            
            {/* Overlay romántico */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-rose-500/20 to-pink-500/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .prose {
          max-width: none;
        }
        
        .prose p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default AnniversaryInvitation;