import { useState } from "react";
import { useEffect } from "react";

export default function Service() {
  const services = [
    "Servicii financiare simple și de încredere, inclusiv contabilitate în partidă simplă, adaptate pentru gestionarea eficientă a clădirilor de apartamente.",
    "Încasarea cotelor de întreținere cu profesionalism, asigurând transparență și eficiență pentru locatari și administratori.",
    "Verificări periodice ale facilităților, dotărilor și spațiilor comune pentru a asigura siguranța și bunăstarea locatarilor.",
    "Emiterea somațiilor de plată, întocmirea proceselor verbale, anunțuri și asistență juridică personalizată pentru rezolvarea oricăror probleme.",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section id="services" className="services">
        <div
          className={`container mx-auto px-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
            Servicile noastre
          </h2>
          <div className="service-grid">
            {[
              "Analiză financiară",
              "Casierie",
              "Business Administration",
              "Gestionarea riscurilor",
            ].map((service, index) => (
              <div key={index} className="service-item">
                <h3 className="text-xl font-semibold text-[#800020] mb-4">
                  {service}
                </h3>
                <p>{services[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
