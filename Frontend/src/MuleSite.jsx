import { useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";

const media = "/assets/";
const logo = `${media}logo112-300x133.png`;
const phoneNumbers = [
  { label: "8275448454", href: "tel:+918275448454" },
  { label: "7775996443", href: "tel:+917775996443" },
];
const whatsapp =
  "https://wa.me/918275448454?text=Hello%20Mule%20Travels%2C%20I%27m%20interested%20in%20booking%20a%20travel%20service.";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Cars", to: "/cars/" },
  { label: "Buses", to: "/buses/" },
  { label: "Services", to: "/services/" },
  { label: "Gallary", to: "/gallary/" },
  { label: "About Us", to: "/about-us/" },
  { label: "Contact Us", to: "/contact-us/" },
];

const heroSlides = [
  "cars12.jpeg",
  "crst1-1-1.jpeg",
  "WhatsApp-Image-2026-09-21-at-4.01.44-PM-1.jpeg",
  "grp-pic.jpeg",
  "new1-23.jpeg",
  "new1-27.jpeg",
  "inv1-1.jpeg",
  "grp-pic11.jpeg",
].map((image) => `${media}${image}`);

const representativeCarInteriors = [
  {
    image: "representative-car-interior-1.jpg",
    type: "Representative car interior",
    representative: true,
  },
  {
    image: "representative-car-interior-2.jpg",
    type: "Representative car interior",
    representative: true,
  },
];
const representativeBusInteriors = [
  {
    image: "representative-bus-interior-1.jpg",
    type: "Representative bus interior",
    representative: true,
  },
  {
    image: "representative-bus-interior-2.jpg",
    type: "Representative bus interior",
    representative: true,
  },
];

const cars = [
  {
    name: "Sedan Comfort",
    subtitle: "Comfortable 4+1 Seating",
    image: "5305da8b96c637065b1456f671485179.webp",
    images: [
      { image: "5305da8b96c637065b1456f671485179.webp", type: "Exterior" },
      ...representativeCarInteriors,
    ],
    rate: "₹14/km*",
    description:
      "Comfortable 4+1 seating with air conditioning, GPS, spacious luggage storage, and a professional driver for city rides or outstation journeys.",
    features: [
      "Air Conditioning",
      "GPS Navigation",
      "Spacious Luggage Storage",
      "Professional Driver",
      "City & Outstation Journeys",
    ],
  },
  {
    name: "Maruti Invicto",
    subtitle: "Premium 7-seater SUV",
    image: "2dbbeccb3feff64a6bb678d8164820a0.webp",
    images: [
      { image: "2dbbeccb3feff64a6bb678d8164820a0.webp", type: "Exterior" },
      ...representativeCarInteriors,
    ],
    rate: "₹25/km*",
    description:
      "The Maruti Suzuki Invicto is a premium 7-seater SUV designed for comfort, space, and style. It offers a refined driving experience with modern features and a premium interior. Perfect for family journeys, long drives, and everyday comfort.",
    features: [
      "Premium Interior",
      "Spacious 7-Seater",
      "Smooth Driving",
      "Long Journeys",
    ],
  },
  {
    name: "Toyota Innova Hycross",
    subtitle: "Premium 7/8-seater MPV",
    image: "crst1-1-1.jpeg",
    images: [
      { image: "crst1-1-1.jpeg", type: "Exterior" },
      ...representativeCarInteriors,
    ],
    rate: "₹25/km*",
    description:
      "The Toyota Innova Hycross is a premium 7/8-seater MPV built for comfort, space, and practicality. It combines a refined design with modern features and a smooth driving experience.",
    features: [
      "Refined Design",
      "Spacious 7/8-Seater",
      "Smooth Driving",
      "Long Journeys",
    ],
  },
  {
    name: "Toyota Innova Crysta",
    subtitle: "Premium MPV",
    image: "imm-600x398.webp",
    images: [
      { image: "imm-600x398.webp", type: "Exterior" },
      ...representativeCarInteriors,
    ],
    rate: "₹20/km*",
    description:
      "The Toyota Innova Crysta is a premium MPV known for its comfort, spacious interiors, and reliable performance. Ideal for families, long-distance travel, and everyday driving.",
    features: [
      "Premium Comfort",
      "Spacious Interiors",
      "Reliable Performance",
      "Family Friendly",
      "Long-Distance Travel",
    ],
  },
];

const buses = [
  {
    name: "Mini Coach",
    subtitle: "17+2 seats",
    image: "Mule-Travels-4.png",
    images: [
      { image: "Mule-Travels-4.png", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹34/km",
    description:
      "17+2 seats, air conditioning, pushback seats, GPS, and generous luggage space for comfortable group travel.",
    features: ["17+2 Seats", "Air Conditioning", "Pushback Seats", "GPS", "Luggage Space"],
  },
  {
    name: "Executive Bus",
    subtitle: "41+1 seats",
    image: "WhatsApp-Image-2026-09-21-at-4.01.43-PM-1.jpeg",
    images: [
      { image: "WhatsApp-Image-2026-09-21-at-4.01.43-PM-1.jpeg", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹60/km",
    description:
      "41+1 seats with AC, pushback seating, GPS tracking, and spacious storage for family trips and events.",
    features: ["41+1 Seats", "Air Conditioning", "GPS Tracking", "Spacious Storage"],
  },
  {
    name: "Large Tourist Bus",
    subtitle: "32+1 seats",
    image: "Mule-Travels-1.png",
    images: [
      { image: "Mule-Travels-1.png", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹48/km",
    description:
      "32+1 seats, premium AC, reclining pushback seats, GPS, and ample luggage space for large groups.",
    features: ["32+1 Seats", "Premium AC", "Reclining Seats", "GPS", "Luggage Space"],
  },
  {
    name: "SML Hiroi AC Bus",
    subtitle: "32+1 Seater",
    image: "WhatsApp-Image-2026-09-21-at-4.01.43-PM-2.jpeg",
    images: [
      { image: "WhatsApp-Image-2026-09-21-at-4.01.43-PM-2.jpeg", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹48/km",
    description:
      "The SML Hiroi 32+1 Seater AC Bus is designed for comfortable and reliable group travel. Ideal for school trips, staff transportation, tours, and group journeys.",
    features: ["32+1 Seater", "Air Conditioning", "Spacious Seating", "Group Travel"],
  },
  {
    name: "Urbania AC Seater Bus",
    subtitle: "16+1 Seater",
    image: "new1-24.jpeg",
    images: [
      { image: "new1-24.jpeg", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹34/km",
    permit: "All India Permit",
    description:
      "The Urbania 16+1 Seater AC Bus offers a premium and comfortable travel experience for groups. Ideal for corporate travel, family trips, tours, and group transportation.",
    features: ["16+1 Seater", "Air Conditioning", "Modern Interior", "All India Permit"],
  },
  {
    name: "TATA Winger AC Bus",
    subtitle: "13+1 Seater",
    image: "d1ba0f80adefb7307bd88ad498557fba.webp",
    images: [
      { image: "d1ba0f80adefb7307bd88ad498557fba.webp", type: "Exterior" },
      ...representativeBusInteriors,
    ],
    rate: "₹26/km",
    permit: "All India Permit",
    description:
      "The TATA Winger 13+1 Seater AC Bus offers comfortable and convenient travel for small groups. Ideal for corporate travel, family outings, tours, and group transportation.",
    features: ["13+1 Seater", "Air Conditioning", "Comfortable Seating", "All India Permit"],
  },
];

const services = [
  {
    title: "Local Trips Available",
    image: "ChatGPT-Image-Sep-23-2026-02_11_29-PM.webp",
    rate: "₹5500",
    description:
      "Explore the city and nearby destinations with our convenient local trip services. Whether it’s a family outing, business visit, or a day trip, enjoy comfortable and reliable travel at your convenience.",
  },
  {
    title: "Oneway Airport Drop",
    image: "ChatGPT-Image-Sep-23-2026-03_30_37-PM.webp",
    rate: "₹5500",
    description:
      "Enjoy smooth and timely airport transfers with our reliable pickup and drop-off service. Travel comfortably with professional drivers and well-maintained vehicles.",
  },
  {
    title: "Family & Friends Trip",
    image: "ChatGPT-Image-Sep-23-2026-03_47_56-PM-600x417.webp",
    rate: "₹34/Km",
    description:
      "Travel together, create unforgettable memories, and enjoy every mile with your loved ones. Our family and friends trips offer comfortable travel and spacious vehicles.",
  },
  {
    title: "Premium Travel Services",
    image: "ChatGPT-Image-Sep-23-2026-03_57_13-PM-600x417.webp",
    rate: "Book Now",
    description:
      "Travel in comfort and style with premium vehicles and professional chauffeurs for a smooth, refined, and hassle-free journey.",
  },
  {
    title: "Outstation Trips",
    image: "ChatGPT-Image-Sep-23-2026-04_07_19-PM.webp",
    rate: "₹14/Km",
    description:
      "Enjoy comfortable and hassle-free journeys beyond the city with reliable travel for family, friends, or colleagues.",
  },
  {
    title: "Vacations Special Trip",
    image: "ChatGPT-Image-Sep-23-2026-04_14_46-PM.webp",
    rate: "₹20/Km",
    description:
      "Make your holidays memorable with comfortable, well-planned trips to your favourite destinations.",
  },
];

const gallery = [
  {
    image: "WhatsApp-Image-2026-09-21-at-4.01.45-PM.jpeg",
    alt: "A Mule Travels vehicle ready for a journey",
  },
  {
    image: "WhatsApp-Image-2026-09-21-at-4.01.40-PM.jpeg",
    alt: "A group travelling together",
  },
  { image: "grp-pic11.jpeg", alt: "Mule Travels group trip" },
  {
    image: "WhatsApp-Image-2026-09-27-at-6.56.34-PM-1-e1790517093949.jpeg",
    alt: "A scenic travel destination",
  },
  {
    image: "WhatsApp-Image-2026-09-27-at-6.56.35-PM.jpeg",
    alt: "Travellers enjoying a group journey",
  },
  { image: "cars12.jpeg", alt: "A Mule Travels car" },
  { image: "office1.jpeg", alt: "Mule Travels office" },
  {
    image: "representative-car-interior-1.jpg",
    alt: "Illustrative car interior, not a photo of a specific Mule Travels vehicle",
  },
  {
    image: "representative-bus-interior-1.jpg",
    alt: "Illustrative coach interior, not a photo of a specific Mule Travels bus",
  },
  {
    image: "representative-bus-interior-2.jpg",
    alt: "Illustrative coach seating, not a photo of a specific Mule Travels bus",
  },
];

const testimonialVideos = [
  // Add approved YouTube video IDs here when the customer videos are ready.
  { title: "Customer testimonial video 1", youtubeId: "" },
  { title: "Customer testimonial video 2", youtubeId: "" },
  { title: "Customer testimonial video 3", youtubeId: "" },
  { title: "Customer testimonial video 4", youtubeId: "" },
];

function BookLink({ children = "Book Now", className = "button button-green" }) {
  return (
    <a className={className} href={whatsapp} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="booking-strip">
        <strong>For Booking Please Call:</strong>
        {phoneNumbers.map((phone, index) => (
          <span key={phone.label}>
            {index > 0 && <span className="phone-separator">, </span>}
            <a href={phone.href}>{phone.label}</a>
          </span>
        ))}
      </div>
      <div className="header-main">
        <Link className="brand" to="/" aria-label="Mule Travels home">
          <img src={logo} alt="Mule Travels" />
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Main menu" className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          {navItems.map((item) => (
            <NavLink
              end={item.to === "/"}
              key={item.to}
              onClick={() => setMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-book" href={phoneNumbers[0].href}>
          Call to book
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-width">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/">
            <img src={logo} alt="Mule Travels" />
          </Link>
          <p>Journey Beyond Destinations.</p>
          <p>Pune | Local &amp; Outstation Travel</p>
        </div>
        <div className="footer-column">
          <h2>Menu</h2>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-contacts">
          <h2>Contacts Us</h2>
          <a href="mailto:mulemahesh05@gmail.com">mulemahesh05@gmail.com</a>
          {phoneNumbers.map((phone) => (
            <a href={phone.href} key={phone.label}>
              +91 {phone.label}
            </a>
          ))}
          <h2 className="social-heading">Social sites</h2>
          <a href="https://www.facebook.com/profile.php?id=61594241852170" rel="noreferrer" target="_blank">
            Facebook
          </a>
          <a href="https://www.instagram.com/p/DdGXGusDJ_t/" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href={whatsapp} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
        </div>
        <div className="footer-call">
          <span>Plan your journey</span>
          <p>Premium cars, buses, local tours, and outstation journeys.</p>
          <BookLink>Book Now</BookLink>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} muletravels</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with Mule Travels on WhatsApp"
      className="whatsapp-float"
      href={whatsapp}
      rel="noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16.03 3.2a12.55 12.55 0 0 0-10.7 19.12L3.7 28.8l6.63-1.59a12.55 12.55 0 1 0 5.7-24Zm0 22.87c-1.83 0-3.62-.49-5.2-1.42l-.37-.22-3.94.95 1.05-3.84-.24-.39a10.28 10.28 0 1 1 8.7 4.92Zm5.64-7.7c-.31-.16-1.84-.9-2.13-1-.29-.1-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.57-1.85-1.75-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.67.76.24 1.46.21 2.01.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36Z" />
      </svg>
    </a>
  );
}

function PageTitle({ children, subtitle }) {
  return (
    <div className="page-title">
      <h1>{children}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function HomePage({ onOpenGallery }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const homeTrips = [
    ["Local Rentals", "Comfortable local rides", "cars"],
    ["Outstation Travel", "Reliable outstation travel", "services"],
    ["Bus Rentals", "Spacious bus rentals", "buses"],
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div
          className="hero-photo"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 20, 28, 0.48), rgba(8, 20, 28, 0.44)), url("${heroSlides[slideIndex]}")`,
          }}
        />
        <div className="hero-content">
          <span className="hero-kicker">PUNE · LOCAL &amp; OUTSTATION TRAVEL</span>
          <h1>Travel comfortably with muletravels</h1>
          <p>
            Premium cars, buses, local tours, and outstation journeys with
            transparent pricing and dependable service.
          </p>
          <BookLink>Book Now</BookLink>
          <div className="hero-services">
            {homeTrips.map(([title, text, to]) => (
              <Link key={title} to={`/${to}`}>
                <strong>{title}</strong>
                <span>{text}</span>
              </Link>
            ))}
          </div>
          <span className="hero-scroll">YOUR JOURNEY STARTS HERE</span>
        </div>
      </section>

      <section className="content-width home-fleet">
        <SectionHeading
          eyebrow="TRAVEL YOUR WAY"
          title="Cars"
          text="Comfortable cars for airport transfers, city rides, family trips, and business travel."
        />
        <VehicleGrid onOpenGallery={onOpenGallery} vehicles={cars.slice(1)} />
        <div className="center-action">
          <Link className="button button-outline" to="/cars/">
            Explore our cars <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-bus-section">
        <div className="content-width">
          <SectionHeading
            eyebrow="TRAVEL TOGETHER"
            title="Buses"
            text="Comfortable buses with clear pricing, modern amenities, and dependable service for every group journey."
          />
          <VehicleGrid onOpenGallery={onOpenGallery} vehicles={buses.slice(3)} />
          <div className="center-action">
            <Link className="button button-outline" to="/buses/">
              Explore our buses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <JourneyCTA />
    </main>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function VehicleGrid({ vehicles, onOpenGallery }) {
  return (
    <div className="vehicle-grid">
      {vehicles.map((vehicle) => (
        <article className="vehicle-card" key={vehicle.name}>
          <button
            aria-label={`View photos of ${vehicle.name}`}
            className="vehicle-image vehicle-image-button"
            onClick={() => onOpenGallery(vehicle)}
            type="button"
          >
            <img src={`${media}${vehicle.image}`} alt={vehicle.name} loading="lazy" />
            <span className="vehicle-rate">{vehicle.rate}</span>
          </button>
          <div className="vehicle-card-copy">
            <span className="vehicle-type">{vehicle.subtitle}</span>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.description}</p>
            <Link className="card-link" to="/contact-us/">
              More details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span> {item}
        </li>
      ))}
    </ul>
  );
}

function PhotoGalleryDialog({ photoSet, onClose }) {
  const dialogRef = useRef(null);
  const images = photoSet.images?.length
    ? photoSet.images
    : [{ image: photoSet.image, type: "Exterior" }];
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = images[imageIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  const showImage = (step) => {
    setImageIndex((index) => (index + step + images.length) % images.length);
  };

  return (
    <dialog
      aria-labelledby="vehicle-gallery-title"
      className="vehicle-gallery"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showImage(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showImage(1);
        } else if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      ref={dialogRef}
    >
      <div className="vehicle-gallery-panel">
        <header className="vehicle-gallery-header">
          <div>
            <span className="section-eyebrow">{currentImage.type} PHOTO</span>
            <h2 id="vehicle-gallery-title">{photoSet.name}</h2>
            {currentImage.representative && (
              <p className="vehicle-gallery-note">
                Illustrative interior, not this exact vehicle.
              </p>
            )}
            <p>
              Photo {imageIndex + 1} of {images.length}
            </p>
          </div>
          <button
            aria-label="Close photo gallery"
            className="vehicle-gallery-close"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </header>
        <div className="vehicle-gallery-stage">
          {images.length > 1 && (
            <button
              aria-label="Previous photo"
              className="vehicle-gallery-arrow gallery-previous"
              onClick={() => showImage(-1)}
              type="button"
            >
              ‹
            </button>
          )}
          <img
            alt={`${photoSet.name} ${currentImage.type.toLowerCase()} photo`}
            className="vehicle-gallery-image"
            src={`${media}${currentImage.image}`}
          />
          {images.length > 1 && (
            <button
              aria-label="Next photo"
              className="vehicle-gallery-arrow gallery-next"
              onClick={() => showImage(1)}
              type="button"
            >
              ›
            </button>
          )}
        </div>
        <footer className="vehicle-gallery-footer">
          <div aria-label="Choose a photo" className="vehicle-gallery-thumbnails">
            {images.map((image, index) => (
              <button
                aria-label={`Show ${image.type.toLowerCase()} photo ${index + 1}`}
                aria-pressed={index === imageIndex}
                className={index === imageIndex ? "gallery-thumbnail is-active" : "gallery-thumbnail"}
                key={`${image.image}-${index}`}
                onClick={() => setImageIndex(index)}
                type="button"
              >
                <img alt="" src={`${media}${image.image}`} />
              </button>
            ))}
          </div>
          <a
            className="button button-green gallery-download"
            download={`${photoSet.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${imageIndex + 1}.${currentImage.image.split(".").pop()}`}
            href={`${media}${currentImage.image}`}
          >
            Download photo
          </a>
        </footer>
      </div>
    </dialog>
  );
}

function FleetPage({ isBus = false, onOpenGallery }) {
  const fleet = isBus ? buses : cars;
  return (
    <main>
      <PageTitle subtitle={isBus ? "Comfortable group travel for every occasion." : undefined}>
        {isBus ? "Buses" : "Cars"}
      </PageTitle>
      <section className="fleet-page content-width">
        <SectionHeading
          eyebrow={isBus ? "TRAVEL TOGETHER" : "PUNE · LOCAL & OUTSTATION"}
          title={isBus ? "Premium Bus Rentals" : "Premium Cars Rentals"}
          text={
            isBus
              ? "Comfortable buses with clear pricing, modern amenities, and dependable service for every group journey."
              : undefined
          }
        />
        <div className="fleet-list">
          {fleet.map((vehicle) => (
            <article className="fleet-feature" key={vehicle.name}>
              <button
                aria-label={`View photos of ${vehicle.name}`}
                className="fleet-photo fleet-photo-button"
                onClick={() => onOpenGallery(vehicle)}
                type="button"
              >
                <img src={`${media}${vehicle.image}`} alt={vehicle.name} loading="lazy" />
                <span className="vehicle-rate">{vehicle.rate}</span>
              </button>
              <div className="fleet-copy">
                <span className="section-eyebrow">
                  {isBus ? "BUS RENTAL" : "CAR RENTAL"}
                </span>
                <h2>{vehicle.name}</h2>
                <p className="fleet-subtitle">{vehicle.subtitle}</p>
                <p>{vehicle.description}</p>
                <FeatureList items={vehicle.features} />
                {vehicle.permit && <p className="permit-label">{vehicle.permit}</p>}
                <BookLink>Book Now</BookLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JourneyCTA />
    </main>
  );
}

function ServicesPage({ onOpenGallery }) {
  return (
    <main>
      <PageTitle>Services</PageTitle>
      <section className="content-width services-page">
        <SectionHeading
          eyebrow="LOCAL & OUTSTATION"
          title="Travel made comfortable"
          text="From city rides to holidays with family and friends, find the right trip for you."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <button
                aria-label={`View photo of ${service.title}`}
                className="service-image service-image-button"
                onClick={() =>
                  onOpenGallery({
                    name: service.title,
                    image: service.image,
                    images: [{ image: service.image, type: "Service" }],
                  })
                }
                type="button"
              >
                <img src={`${media}${service.image}`} alt={service.title} loading="lazy" />
              </button>
              <div className="service-copy">
                <span className="service-rate">{service.rate}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <BookLink className="card-link-button">Book Now</BookLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JourneyCTA />
    </main>
  );
}

function GalleryPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = gallery[imageIndex];
  const showImage = (step) => {
    setImageIndex((index) => (index + step + gallery.length) % gallery.length);
  };

  return (
    <main>
      <PageTitle>Gallary</PageTitle>
      <section className="content-width gallery-page">
        <SectionHeading
          eyebrow="TRAVEL MEMORIES"
          title="Explorer Highlights"
          text="Browse premium cars and buses ready for local and outstation journeys. Join us to see amazing journeys and stories that celebrate every adventure."
        />
        <div
          aria-label="Travel photo gallery"
          className="gallery-carousel"
          role="region"
        >
          <button
            aria-label="Previous gallery photo"
            className="gallery-carousel-arrow gallery-carousel-previous"
            onClick={() => showImage(-1)}
            type="button"
          >
            ‹
          </button>
          <figure className="gallery-carousel-slide" aria-live="polite">
            <img
              key={currentImage.image}
              src={`${media}${currentImage.image}`}
              alt={currentImage.alt}
            />
            <figcaption>{currentImage.alt}</figcaption>
          </figure>
          <button
            aria-label="Next gallery photo"
            className="gallery-carousel-arrow gallery-carousel-next"
            onClick={() => showImage(1)}
            type="button"
          >
            ›
          </button>
        </div>
        <div className="gallery-carousel-controls">
          <span aria-live="polite">
            Photo {imageIndex + 1} of {gallery.length}
          </span>
          <div
            aria-label="Choose a gallery photo"
            className="gallery-carousel-thumbnails"
            role="group"
          >
            {gallery.map((item, index) => (
              <button
                aria-label={`Show gallery photo ${index + 1}: ${item.alt}`}
                aria-pressed={index === imageIndex}
                className={
                  index === imageIndex
                    ? "gallery-carousel-thumbnail is-active"
                    : "gallery-carousel-thumbnail"
                }
                key={item.image}
                onClick={() => setImageIndex(index)}
                type="button"
              >
                <img src={`${media}${item.image}`} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        <section className="gallery-testimonials">
          <SectionHeading
            eyebrow="REAL TRAVEL STORIES"
            title="Customer video testimonials"
            text="Customer videos will appear here when their YouTube links are added."
          />
          <div className="testimonial-video-grid">
            {testimonialVideos.map((video) => (
              <article className="testimonial-video-card" key={video.title}>
                {video.youtubeId ? (
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    title={video.title}
                  />
                ) : (
                  <div className="testimonial-video-placeholder">
                    <span aria-hidden="true">▶</span>
                    <p>Customer video coming soon</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </section>
      <JourneyCTA />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <PageTitle>About Us</PageTitle>
      <section className="about-intro content-width">
        <div>
          <span className="section-eyebrow">MULE TRAVELS · PUNE</span>
          <h2>Journey Beyond Destinations.</h2>
          <p>
            At Mule Travels, we believe every journey should be comfortable,
            safe, and hassle-free. Whether you’re travelling around Pune,
            heading out of town, or planning a family trip, we’re here to make
            your travel easy and enjoyable.
          </p>
          <p>
            We focus on comfortable vehicles, professional drivers, and a
            smooth travel experience. From the moment you book your ride to the
            time you reach your destination, we want you to feel relaxed and
            well taken care of.
          </p>
          <BookLink>Plan Your Journey</BookLink>
        </div>
        <img
          src={`${media}WhatsApp-Image-2026-09-21-at-4.01.40-PM.jpeg`}
          alt="Mule Travels group trip"
          loading="lazy"
        />
      </section>
      <section className="about-values">
        <div className="content-width">
          <SectionHeading
            eyebrow="WHAT YOU CAN EXPECT"
            title="Travel with confidence"
          />
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Comfortable, well-maintained vehicles</h3>
              <p>
                Clean, spacious vehicles with comfortable seating, air
                conditioning, and room for your luggage.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Customer support you can count on</h3>
              <p>
                Our team is available to help with your booking, answer
                questions, and assist with your travel plans.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Comfort for every journey</h3>
              <p>
                Choose a suitable ride for family holidays, business trips,
                airport transfers, and weekend getaways.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Safety comes first</h3>
              <p>
                Responsible driving, professional drivers, and well-maintained
                vehicles help you relax along the way.
              </p>
            </article>
            <article>
              <span>05</span>
              <h3>Affordable, transparent pricing</h3>
              <p>
                Get fare details before booking and choose an option that fits
                your travel requirements and budget.
              </p>
            </article>
          </div>
        </div>
      </section>
      <JourneyCTA />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageTitle>Contact Us</PageTitle>
      <section className="contact-page content-width">
        <div className="contact-panel">
          <div className="contact-photo">
            <img
              src={`${media}WhatsApp-Image-2026-09-21-at-4.01.40-PM-1.jpeg`}
              alt="Plan your journey with Mule Travels"
              loading="lazy"
            />
          </div>
          <div className="contact-copy">
            <span className="section-eyebrow">WE’RE HERE TO HELP</span>
            <h2>Plan Your Journey</h2>
            <p>Share your route, dates, and group size; we’ll respond promptly.</p>
            <a href="mailto:mulemahesh05@gmail.com">mulemahesh05@gmail.com</a>
            {phoneNumbers.map((phone) => (
              <a href={phone.href} key={phone.label}>
                +91 {phone.label}
              </a>
            ))}
            <p className="contact-address">Green Park, Phursungi, Pune-411028</p>
            <BookLink>Message us on WhatsApp</BookLink>
          </div>
        </div>
        <div className="location-panel">
          <div>
            <span className="section-eyebrow">VISIT US</span>
            <h2>Our Location</h2>
            <p>Green Park, Phursungi, Pune-411028</p>
            <h3>Hours</h3>
            <p>24 hr Working — please call to book</p>
            {phoneNumbers.map((phone) => (
              <a href={phone.href} key={phone.label}>
                +91 {phone.label}
              </a>
            ))}
          </div>
          <iframe
            title="Mule Travels location in Phursungi, Pune"
            loading="lazy"
            src="https://maps.google.com/maps?q=Green%20Park%2C%20Phursungi%2C%20Pune%20411028&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
      <JourneyCTA />
    </main>
  );
}

function JourneyCTA() {
  return (
    <section className="journey-cta">
      <div className="content-width journey-cta-inner">
        <div>
          <span className="section-eyebrow">LOCAL &amp; OUTSTATION TRAVEL</span>
          <h2>Plan Your Journey</h2>
          <p>
            Premium cars, buses, and tailored tours with transparent pricing
            and dependable support across India.
          </p>
        </div>
        <div className="journey-cta-actions">
          <BookLink>Book Now</BookLink>
          <a href={phoneNumbers[0].href}>Call +91 8275448454</a>
          <a href={phoneNumbers[1].href}>+91 7775996443</a>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found content-width">
      <PageTitle>Page not found</PageTitle>
      <Link className="button button-green" to="/">
        Return home
      </Link>
    </main>
  );
}

export default function MuleSite() {
  const location = useLocation();
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    const titles = {
      "/": "Home",
      "/cars": "Cars",
      "/buses": "Buses",
      "/services": "Services",
      "/gallary": "Gallary",
      "/about-us": "About Us",
      "/contact-us": "Contact Us",
    };
    document.title = `${titles[path] ?? "Page not found"} - muletravels`;
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage onOpenGallery={setActiveGallery} />} />
          <Route path="/cars/" element={<FleetPage onOpenGallery={setActiveGallery} />} />
          <Route path="/buses/" element={<FleetPage isBus onOpenGallery={setActiveGallery} />} />
          <Route path="/services/" element={<ServicesPage onOpenGallery={setActiveGallery} />} />
          <Route path="/gallary/" element={<GalleryPage />} />
          <Route path="/about-us/" element={<AboutPage />} />
          <Route path="/contact-us/" element={<ContactPage />} />
          <Route path="/bus" element={<Navigate replace to="/buses/" />} />
          <Route path="/gallery" element={<Navigate replace to="/gallary/" />} />
          <Route path="/about" element={<Navigate replace to="/about-us/" />} />
          <Route path="/contact" element={<Navigate replace to="/contact-us/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {activeGallery && (
        <PhotoGalleryDialog
          key={activeGallery.name}
          onClose={() => setActiveGallery(null)}
          photoSet={activeGallery}
        />
      )}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
