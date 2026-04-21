import { useMemo, useState } from "react";
import {
  Briefcase,
  Clock3,
  Coffee,
  Droplet,
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
import headerLogo from "./assets/logo/label77-header-cropped.png";
import heroExampleImage from "./assets/logo/WhatsApp Image 2026-04-19 at 5.14.53 PM.jpeg";

const whatsappNumber = "50660500296";
const whatsappMessage = "Hola, quiero informacion sobre productos personalizados.";
const imagePlaceholder = "Placeholder";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Contacto", href: "#contacto" },
];

const productIcons = {
  camisas: Shirt,
  suteres: Shirt,
  tazas: Coffee,
  botellas: Droplet,
  gorras: HardHat,
  llaveros: KeyRound,
  bolsos: Briefcase,
  almohadas: Package,
  mousepad: Monitor,
};

const productImageModules = import.meta.glob("./assets/products/*/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
});

const galleryImageModules = import.meta.glob("./assets/examples/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
});

function humanizeSlug(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPathSegments(path) {
  return path.split("/");
}

// Edita aqui cada categoria y sus productos.
// Para cada item puedes cambiar: name, description e image.
const fallbackProductCatalog = [
  {
    id: "camisas",
    name: "Camisas",
    description: "Poliester y algodon sublimables",
    icon: "camisas",
    items: [
      {
        name: "Placeholder camiseta blanca sublimable",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder camiseta deportiva personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder camiseta con logo empresarial",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "suteres",
    name: "Suteres",
    description: "Personalizados para regalo, marca o equipo",
    icon: "suteres",
    items: [
      {
        name: "Placeholder suter clasico personalizado",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder hoodie con nombre o logo",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder suter para equipo o grupo",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "tazas",
    name: "Tazas",
    description: "Ceramicas de 11oz y 15oz",
    icon: "tazas",
    items: [
      {
        name: "Placeholder taza 11oz personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder taza magica con diseno",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder taza para regalo",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "botellas",
    name: "Botellas",
    description: "Termos y botellas deportivas",
    icon: "botellas",
    items: [
      {
        name: "Placeholder botella deportiva sublimable",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder termo personalizado",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder botella promocional",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "gorras",
    name: "Gorras",
    description: "Variedad de estilos y colores",
    icon: "gorras",
    items: [
      {
        name: "gorra clasica personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: "",

      },
      {
        name: "Placeholder gorra clasica personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder gorra clasica personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder gorra clasica personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder gorra para evento",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder gorra con branding",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "llaveros",
    name: "Llaveros",
    description: "Acrilicos y metalicos",
    icon: "llaveros",
    items: [
      {
        name: "Placeholder llavero acrilico",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder llavero metalico",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder llavero recuerdo",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "bolsos",
    name: "Bolsos y mochilas",
    description: "Ideales para personalizar con logos o nombres",
    icon: "bolsos",
    items: [
      {
        name: "Placeholder bolso de tela personalizado",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder mochila escolar con nombre",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder bolso promocional para negocio",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "almohadas",
    name: "Almohadas",
    description: "Detalles decorativos con tus disenos favoritos",
    icon: "almohadas",
    items: [
      {
        name: "Placeholder almohada decorativa",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder cojin con foto personalizada",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder almohada para regalo especial",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
  {
    id: "mousepad",
    name: "Mousepad",
    description: "Superficie personalizada para oficina o gaming",
    icon: "mousepad",
    items: [
      {
        name: "Placeholder mousepad rectangular",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder mousepad gamer personalizado",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
      {
        name: "Placeholder mousepad corporativo",
        description: "Espacio listo para imagen, nombre del producto y detalles.",
        image: imagePlaceholder,
      },
    ],
  },
];

const fallbackGallery = [
  { type: "Taza", description: "Diseno personalizado", icon: "TZ" },
  { type: "Camisa", description: "Logo empresarial", icon: "CM" },
  { type: "Gorra", description: "Evento deportivo", icon: "GR" },
  { type: "Botella", description: "Regalo corporativo", icon: "BT" },
  { type: "Llavero", description: "Recuerdo especial", icon: "LL" },
  { type: "Taza", description: "Cumpleanos", icon: "TZ" },
];

const productCatalog = fallbackProductCatalog.map((category) => {
  const dynamicItems = Object.entries(productImageModules)
    .filter(([path]) => {
      const segments = getPathSegments(path);
      return segments[segments.length - 2] === category.id;
    })
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, image]) => {
      const segments = getPathSegments(path);
      const fileName = segments[segments.length - 1];
      const readableName = humanizeSlug(fileName);

      return {
        name: readableName,
        description: category.description,
        image,
      };
    });

  if (dynamicItems.length === 0) {
    return category;
  }

  return {
    ...category,
    items: dynamicItems,
  };
});

const gallery = (() => {
  const dynamicGallery = Object.entries(galleryImageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, image]) => {
      const segments = getPathSegments(path);
      const fileName = segments[segments.length - 1];

      return {
        type: "Ejemplo",
        description: humanizeSlug(fileName),
        image,
      };
    });

  if (dynamicGallery.length > 0) {
    return dynamicGallery;
  }

  return fallbackGallery;
})();

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
  const [selectedProductId, setSelectedProductId] = useState(productCatalog[0].id);
  const [selectedItemKey, setSelectedItemKey] = useState(
    `${productCatalog[0].id}-0-${productCatalog[0].items[0]?.name ?? ""}`
  );
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const whatsappUrl = useMemo(
    () => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    []
  );

  const selectedProduct =
    productCatalog.find((category) => category.id === selectedProductId) ?? productCatalog[0];
  const selectedItem =
    selectedProduct.items.find(
      (item, index) => `${selectedProduct.id}-${index}-${item.name}` === selectedItemKey
    ) ?? selectedProduct.items[0];

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-row">
            <a href="#inicio" className="brand">
              <img src={headerLogo} alt="Label77 Costa Rica" className="brand-logo" />
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
                    <div className="hero-example-frame">
                      <img
                        src={heroExampleImage}
                        alt="Ejemplo de producto personalizado Label77"
                        className="hero-example-image"
                      />
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
              {productCatalog.map((product) => {
                const Icon = productIcons[product.icon];
                const isActive = selectedProductId === product.id;
                return (
                  <button
                    key={product.name}
                    type="button"
                    className={`card product-card product-filter${isActive ? " is-active" : ""}`}
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setSelectedItemKey(`${product.id}-0-${product.items[0]?.name ?? ""}`);
                    }}
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
                <h3>{selectedProduct.name}</h3>
                <p className="product-results-copy">
                  Aqui puedes mostrar los productos que manejas en esta categoria. Por
                  ahora deje placeholders para que luego pongamos fotos o nombres reales.
                </p>
              </div>

              <div className="product-placeholder-grid">
                {selectedProduct.items.map((item, index) => (
                  <article
                    key={`${selectedProduct.id}-${index}-${item.name}`}
                    className={`product-placeholder-card product-image-card${
                      selectedItemKey === `${selectedProduct.id}-${index}-${item.name}` ? " is-active" : ""
                    }`}
                    onMouseEnter={() => setSelectedItemKey(`${selectedProduct.id}-${index}-${item.name}`)}
                  >
                    <div className="product-placeholder-media">
                      {item.image && item.image !== imagePlaceholder ? (
                        <img src={item.image} alt={item.name} className="product-placeholder-img" />
                      ) : (
                        <span className="product-placeholder-text">{imagePlaceholder}</span>
                      )}
                      <div className="product-image-info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
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
                <button
                  key={`${item.type}-${index}`}
                  type="button"
                  className="gallery-card"
                  onClick={() => setSelectedGalleryItem(item)}
                  aria-label={`Ver imagen grande de ${item.description}`}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.description} className="gallery-image" />
                  ) : (
                    <div className="gallery-backdrop" />
                  )}
                  {!item.image ? (
                    <div className="gallery-center">
                      <div className="gallery-badge">{item.icon}</div>
                    </div>
                  ) : null}
                  <div className="gallery-overlay">Ver</div>
                </button>
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

      {selectedGalleryItem ? (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del ejemplo"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div className="gallery-modal-dialog" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedGalleryItem(null)}
              aria-label="Cerrar vista ampliada"
            >
              <X size={22} />
            </button>
            <img
              src={selectedGalleryItem.image}
              alt={selectedGalleryItem.description}
              className="gallery-modal-image"
            />
          </div>
        </div>
      ) : null}

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
