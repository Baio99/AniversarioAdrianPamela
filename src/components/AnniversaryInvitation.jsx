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
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/Inicio2023-compressed.mp4', 
        alt: 'Primer video',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/Inicio2023-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023primervideo-compressed.mp4', 
        alt: 'Primeros Momentos',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023primervideo-poster.jpg' 
      },
      { 
        type: 'image', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023primermes.jpg', 
        alt: 'Nuestro primer mes' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-telferico-compressed.mp4', 
        alt: 'Paseo Teleferico',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-telferico-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-rio-compressed.mp4', 
        alt: 'Paseo cascadas',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-09-rio-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-10baile-compressed.mp4', 
        alt: 'Aprendiendo a bailar salsa',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-10baile-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bigboy2023-compressed.mp4', 
        alt: 'Big boy',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bigboy2023-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-11-parque-compressed.mp4', 
        alt: 'era de clases',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-11-parque-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12patascaminadas-compressed.mp4', 
        alt: 'conocimos el metro',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12patascaminadas-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/navidad2023-compressed.mp4', 
        alt: 'Navidad 2023',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/navidad2023-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12fin-compressed.mp4', 
        alt: 'Nuestro fin de Año',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2023-12fin-poster.jpg' 
      },
    ]
  },
  {
    title: "Nosotros 2024",
    items: [
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-02cumple-compressed.mp4', 
        alt: 'Cumple 2023 de ti mi hermosa',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-02cumple-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer-compressed.mp4', 
        alt: 'bailesin',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-04-saludoguanaba-compressed.mp4', 
        alt: 'Saludo',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-04-saludoguanaba-poster.jpg' 
      },
      { 
        type: 'image', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024Paseo.png', 
        alt: 'Paseo guabana republic' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-centro-compressed.mp4', 
        alt: 'En en centro con una quiteña linda de apellifo Ger',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-centro-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-cerro-compressed.mp4', 
        alt: 'En la montañita con un angelito',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-cerro-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-montana-compressed.mp4', 
        alt: 'Tarde de piscina',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-06-montana-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-07-primerano-compressed.mp4', 
        alt: 'Nuestro Primer año del gran amor nuestro',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-07-primerano-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-08-graduacion-compressed.mp4', 
        alt: 'Acompañandote feliz y orgulloso de verte graduada',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-08-graduacion-poster.jpg' 
      },
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-12-navidad-compressed.mp4', 
        alt: 'Celebracion de navidad a mi reina linda',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/2024-12-navidad-poster.jpg' 
      },
    ]
  },
  {
    title: "Nuestras primeras veces",
    items: [
      { 
        type: 'image', 
        src: '/media/foto3.jpg', 
        alt: 'Cena romántica' 
      },
      { 
        type: 'image', 
        src: '/media/foto4.jpg', 
        alt: 'Atardecer juntos' 
      },
    ]
  },
  {
    title: "Nuestros primeros días",
    items: [
      { 
        type: 'image', 
        src: '/media/foto5.jpg', 
        alt: 'Sonrisas compartidas' 
      },
    ]
  },
  {
    title: "Actualmente",
    items: [
      { 
        type: 'video', 
        src: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer-compressed.mp4', 
        alt: 'Baile romántico',
        poster: 'https://Baio99.github.io/AniversarioAdrianPamela/media/bailepamer-poster.jpg' 
      },
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
  Quiero expresarte todo lo que mi corazón siente por ti. Ha pasado tanto tiempo desde que nos conocimos, que recuerdo desde la primera sensación linda que me hiciste sentir. Aunque fue rara, porque no estaba acostumbrado, no podía dejar de pensar en eso tan bonito que sentí. Gracias a la vida, pude lograr encontrarme contigo, y te fuiste adentrando cada vez más fuerte en mi corazón, hasta el punto de que nunca podrás salir de él.
</p>

<p className="text-justify">
  Te he visto crecer, me has visto crecer, en estos dos años que hemos estado juntos, y soy el más feliz por haberte encontrado, por haber encontrado a una chica que, aparte de hermosa, es muy trabajadora y que vale todo el oro del mundo. Créeme que jamás en la vida quiero perderte, nunca quiero que nos separemos, porque yo ya hice mi vida contigo. Tú eres mi futuro, tú eres mis planes en la vida, tú eres mi familia.
</p>

<p className="text-justify">
  Pueden venir malos momentos en los que no nos entendamos, pero mi corazón siempre buscará una solución para poder seguir y hacerte feliz, porque esa es mi meta: hacerte sentir amada, hacerte reír, acompañarte en los días malos, celebrar contigo cuando la vida te hace ver lo valiosa que eres y te pones feliz por tus logros. Le ruego mucho a la vida que me siga permitiendo estar a tu lado, porque no me veo de ninguna otra forma que no sea contigo. Mi corazón siempre me hará ser una mejor persona por tu amor. Por eso, puedo decir que he logrado conocer el verdadero amor de mi vida. Por toda la eternidad, siempre serás tú y nadie más que tú.
</p>

<p className="text-justify">
  Hoy quiero celebrar contigo y con la vida por estar en este momento juntos, sentados uno al lado del otro, compartiendo risas y sensaciones de amor y paz dentro nuestro. Hay que vivir y amar con todo lo que se pueda. Eso hago yo por ti. Tú me ves ahorita a tu lado, y seguirán siendo más momentos que sumo en tu corazón, que sigan aumentando más momentos en nuestras vidas, más sueños compartidos, y haciendo este amor cada vez más fuerte.
</p>

<p className="text-justify">
  Yo seré la persona que siempre se va a morir de amor por ti, que se va a preocupar por todo lo que siente tu corazón, por las cosas que tal vez no cuentas y las tienes dentro tuyo, pero estaré aquí para que llores en mi hombro, para recordarte lo mucho que vales. Recuerda que eres hermosa siendo feliz.
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
  loading="lazy"
  preload="none"
  poster={item.poster || ''}
  className="absolute top-0 left-0 w-full h-full object-contain bg-black"
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