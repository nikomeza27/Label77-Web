import { useMemo, useState } from "react";
import {
  Coffee,
  Clock3,
  Droplet,
  Briefcase,
  HardHat,
  KeyRound,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Package,
  Shield,
  Shirt,
  X,
} from "lucide-react";

const whatsappNumber = "50688888888";
const whatsappMessage = "Hola, quiero informacion sobre productos personalizados.";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Contacto", href: "#contacto" },
];

const products = [
  { name: "Camisas", description: "Poliester y algodon sublimables", icon: Shirt },
  { name: "Suteres", description: "Personalizados para regalo, marca o equipo", icon: Shirt },
  { name: "Tazas", description: "Ceramicas de 11oz y 15oz", icon: Coffee },
  { name: "Botellas", description: "Termos y botellas deportivas", icon: Droplet },
  { name: "Gorras", description: "Variedad de estilos y colores", icon: HardHat },
  { name: "Llaveros", description: "Acrilicos y metalicos", icon: KeyRound },
  { name: "Bolsos y mochilas", description: "Ideales para personalizar con logos o nombres", icon: Briefcase },
  { name: "Almohadas", description: "Detalles decorativos con tus disenos favoritos", icon: Package },
  { name: "Mousepad", description: "Superficie personalizada para oficina o gaming", icon: Monitor },
];

const productPlaceholders = {
  Camisas: [
    "Placeholder camiseta blanca sublimable",
    "Placeholder camiseta deportiva personalizada",
    "Placeholder camiseta con logo empresarial",
  ],
  Suteres: [
    "Placeholder suter clasico personalizado",
    "Placeholder hoodie con nombre o logo",
    "Placeholder suter para equipo o grupo",
  ],
  Tazas: [
    "Placeholder taza 11oz personalizada",
    "Placeholder taza magica con diseno",
    "Placeholder taza para regalo",
  ],
  Botellas: [
    "Placeholder botella deportiva sublimable",
    "Placeholder termo personalizado",
    "Placeholder botella promocional",
  ],
  Gorras: [
    "Placeholder gorra clasica personalizada",
    "Placeholder gorra para evento",
    "Placeholder gorra con branding",
  ],
  Llaveros: [
    "Placeholder llavero acrilico",
    "Placeholder llavero metalico",
    "Placeholder llavero recuerdo",
  ],
  "Bolsos y mochilas": [
    "Placeholder bolso de tela personalizado",
    "Placeholder mochila escolar con nombre",
    "Placeholder bolso promocional para negocio",
  ],
  Almohadas: [
    "Placeholder almohada decorativa",
    "Placeholder cojin con foto personalizada",
    "Placeholder almohada para regalo especial",
  ],
  Mousepad: [
    "Placeholder mousepad rectangular",
    "Placeholder mousepad gamer personalizado",
    "Placeholder mousepad corporativo",
  ],
};

const gallery = [
  { type: "Taza", description: "Diseno personalizado", icon: "TZ" },
  { type: "Camisa", description: "Logo empresarial", icon: "CM" },
  { type: "Gorra", description: "Evento deportivo", icon: "GR" },
  { type: "Botella", description: "Regalo corporativo", icon: "BT" },
  { type: "Llavero", description: "Recuerdo especial", icon: "LL" },
  { type: "Taza", description: "Cumpleanos", icon: "TZ" },
];

const steps = [
  {
    number: "01",
    title: "Elige tu producto",
    description:
      "Selecciona la base que deseas personalizar: taza, camisa, gorra, botella o llavero.",
  },
  {
    number: "02",
    title: "Envia tu diseno",
    description:
      "Mandanos tu diseno, logo o idea por WhatsApp. Tambien podemos ayudarte a crear uno.",
  },
  {
    number: "03",
    title: "Te cotizamos",
    description: "Te enviamos el precio y tiempo de entrega segun tu pedido. Sin compromiso.",
  },
  {
    number: "04",
    title: "Produccion y entrega",
    description: "Producimos tu pedido y coordinamos la entrega o retiro cuando este listo.",
  },
];

const delivery = [
  {
    title: "Sin local fisico",
    description: "Trabajamos desde nuestro taller. No tenemos tienda abierta al publico.",
    icon: MapPin,
  },
  {
    title: "Entregas coordinadas",
    description:
      "Coordinamos la entrega en un punto conveniente para ambos, o enviamos por encomienda.",
    icon: Clock3,
  },
  {
    title: "Retiro seguro",
    description:
      "Si prefieres recoger, te recibimos en nuestra ubicacion privada con previo aviso.",
    icon: Shield,
  },
];

const socialLinks = [
  { label: "Instagram", href: "#", short: "IG" },
  { label: "Facebook", href: "#", short: "FB" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0].name);

  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    []
  );

  const selectedPlaceholders = productPlaceholders[selectedProduct] ?? [];

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-row">
            <a href="#inicio" className="brand">
              <span className="brand-title">
                Label<span>77</span>
              </span>
              <span className="brand-subtitle">Costa Rica</span>
            </a>

            <nav className="desktop-nav" aria-label="Principal">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="button button-primary desktop-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>

            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="mobile-nav" id="mobile-menu" aria-label="Movil">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a
                className="button button-primary mobile-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Pedir por WhatsApp
              </a>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>
                  Personalizamos
                  <br />
                  <span>tus ideas</span>
                </h1>
                <p>
                  Sublimacion en tazas, camisas, gorras y mas. Hacemos realidad tus
                  disenos personalizados en Costa Rica.
                </p>
                <div className="hero-actions">
                  <a
                    className="button button-primary button-large"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="button-icon" />
                    Hacer pedido por WhatsApp
                  </a>
                  <a className="button button-outline button-large" href="#productos">
                    Ver productos
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-card">
                  <div className="hero-gradient" />
                  <div className="hero-card-content">
                    <div className="hero-mockup-grid">
                      {products.slice(0, 4).map((product) => {
                        return (
                          <div key={product.name} className="hero-mockup">
                            <div className="mockup-inner">
                              <div className="mockup-image-placeholder">
                                <span className="mockup-placeholder-tag">Imagen</span>
                                <span className="mockup-placeholder-name">{product.name}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-card" id="productos">
          <div className="container">
            <div className="section-header">
              <h2>Nuestros Productos</h2>
              <p>
                Todos nuestros productos son por encargo. Elige tu base, envianos tu
                diseno y nosotros lo hacemos realidad.
              </p>
            </div>

            <div className="products-grid">
              {products.map((product) => {
                const Icon = product.icon;
                const isActive = selectedProduct === product.name;
                return (
                  <button
                    key={product.name}
                    type="button"
                    className={`card product-card product-filter${isActive ? " is-active" : ""}`}
                    onClick={() => setSelectedProduct(product.name)}
                    aria-pressed={isActive}
                  >
                    <div className="product-icon">
                      <Icon />
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="product-results">
              <div className="product-results-header">
                <p className="product-results-kicker">Categoria seleccionada</p>
                <h3>{selectedProduct}</h3>
                <p className="product-results-copy">
                  Aqui puedes mostrar los productos que manejas en esta categoria. Por
                  ahora deje placeholders para que luego pongamos fotos o nombres reales.
                </p>
              </div>

              <div className="product-placeholder-grid">
                {selectedPlaceholders.map((item) => (
                  <article key={item} className="product-placeholder-card">
                    <div className="product-placeholder-media">Placeholder</div>
                    <div className="product-placeholder-body">
                      <h4>{item}</h4>
                      <p>Espacio listo para imagen, nombre del producto y detalles.</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="note-pill">
              Todos los productos son por encargo - no manejamos stock listo
            </div>
          </div>
        </section>

        <section className="section" id="ejemplos">
          <div className="container">
            <div className="section-header">
              <h2>Trabajos Realizados</h2>
              <p>Algunos ejemplos de disenos que hemos creado para nuestros clientes</p>
            </div>

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <article key={`${item.type}-${index}`} className="gallery-card">
                  <div className="gallery-backdrop" />
                  <div className="gallery-center">
                    <div className="gallery-badge">{item.icon}</div>
                    <p className="gallery-title">{item.type}</p>
                    <p className="gallery-text">{item.description}</p>
                  </div>
                  <div className="gallery-overlay">Ver ejemplo</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-card" id="como-pedir">
          <div className="container">
            <div className="section-header">
              <h2>Como funciona?</h2>
              <p>
                Pedir tu producto personalizado es muy facil. Todo el proceso es por
                WhatsApp.
              </p>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <article key={step.number} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="note-pill">
              Todo es por encargo - producimos especialmente para ti
            </div>
          </div>
        </section>

        <section className="section" id="entrega">
          <div className="container">
            <div className="section-header">
              <h2>Entrega y Retiro</h2>
              <p>Nos adaptamos a lo que te funcione mejor. Todo se coordina por WhatsApp.</p>
            </div>

            <div className="delivery-grid">
              {delivery.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="card delivery-card">
                    <div className="delivery-icon">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="trust-pill">
              <Shield size={18} />
              <span>Tu confianza es nuestra prioridad</span>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contacto">
          <div className="container">
            <div className="cta-box">
              <h2>
                Tienes una idea?
                <br />
                <span>Nosotros la hacemos realidad</span>
              </h2>
              <p>
                Escribenos por WhatsApp y cuentanos que tienes en mente. Te ayudamos
                desde el diseno hasta la entrega.
              </p>
              <a
                className="button button-primary button-large cta-button"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="button-icon" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand-wrap">
            <span className="brand-title">
              Label<span>77</span>
            </span>
            <span className="brand-subtitle">Costa Rica</span>
            <p>Sublimacion personalizada</p>
          </div>

          <div className="social-links">
            {socialLinks.map((item) => {
              return (
                <a key={item.label} href={item.href} aria-label={item.label}>
                  <span>{item.short}</span>
                </a>
              );
            })}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle />
            </a>
          </div>

          <p className="footer-copy">&copy; {new Date().getFullYear()} Label77 Costa Rica</p>
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle />
      </a>
    </>
  );
}

export default App;
