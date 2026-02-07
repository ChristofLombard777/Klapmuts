import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { id: "location", label: "Location" },
  { id: "market", label: "Market" },
  { id: "planning", label: "Planning" },
  { id: "options", label: "Options" },
  { id: "next", label: "Next Steps" },
];

const heroMeta = [
  {
    label: "Total land area",
    value: "±4.5632 ha",
  },
  {
    label: "Net industrial developable",
    value: "±4.13 ha",
  },
  {
    label: "Subdivision",
    value: "6 portions (5 industrial + 1 public roads)",
  },
  {
    label: "Current zoning",
    value: "Agriculture & Rural Zone",
  },
  {
    label: "Proposed zoning",
    value: "Portions 1–5: Industrial / Portion 6: Public Roads & Parking",
  },
];

const heroDocs = [
  "Regional map (Western Cape logistics corridor)",
  "Near & far locality maps",
  "Aerial imagery showing Klapmuts industrial growth area",
  "Topographic overview",
  "Boundary overlay of Farm 749",
];

const locationDocs = [
  "Regional map (Western Cape logistics corridor)",
  "Near & far locality maps",
  "Aerial imagery showing Klapmuts industrial growth area",
  "Topographic overview",
  "Boundary overlay of Farm 749",
];

const marketDocs = [];

const planningDocs = [];

const optionDocs = [];


const options = [
  {
    title: "Option 1: As-Is Acquisition",
    subtitle: "Rezoning in progress",
    bullets: [
      "Acquire under existing Agriculture & Rural zoning.",
      "Capture rezoning uplift.",
      "Buyer assumes final rezoning and access resolution risk.",
    ],
  },
  {
    title: "Option 2: Post-Rezoning Vacant Land",
    subtitle: "Lower risk – higher certainty",
    bullets: [
      "Purchase after rezoning approval.",
      "Land delivered vacant and fully rezoned.",
      "Suitable for institutional and certainty-focused developers.",
    ],
  },
  {
    title: "Option 3: Joint Venture Participation",
    subtitle: "Participate as development partner",
    bullets: [
      "Initial payment on agreement.",
      "Balance payable upon rezoning completion.",
      "Co-developer or lead developer roles available.",
      "Reduced upfront capital exposure.",
      "Shared upside post-rezoning.",
    ],
  },
];

const contacts = [
  { name: "Daniel Lombard", phone: "082 425 6835", href: "tel:0824256835" },
  { name: "Joshua Pretorius", phone: "082 940 2000", href: "tel:0829402000" },
  { name: "Emile", phone: "078 157 5436", href: "tel:0781575436" },
];

const buyerTypes = ["Private individual", "Developer", "Institutional investor", "Other"];
const fundingOptions = ["Cash", "Cash and finance", "Finance", "Other"];

const DocLinks = ({ links }) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="doc-pill-band">
      <div className="doc-pill-band__glow" />
      <div className="doc-pill">
        <h3>Supporting documents</h3>
        <div className="doc-grid">
          {links.map((link) => (
            <a className="doc-link" href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, children }) => (
  <div className="section-header">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState(navLinks[0]?.id ?? "");
  const ids = useMemo(() => navLinks.map((link) => link.id), []);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.08, 0.15, 0.25],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">Farm 749 Klapmuts</div>
        <nav className="site-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link${
                activeSection === link.id ? " active" : ""
              }`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn ghost" href="tel:0824256835">
            Call Daniel
          </a>
          <a className="btn primary" href="#book">
            Book a Meeting
          </a>
        </div>
      </header>

      <main>
        <section className="hero-intro">
          <div className="container hero-intro-inner">
            <div className="hero-intro-copy">
              <p className="eyebrow">Industrial opportunity</p>
              <h1>
                Farm 749 Klapmuts: small-to-mid-scale industrial development
                opportunity.
              </h1>
              <p className="intro-lead">
                Urban infill industrial site located west of MR27 / R44,
                immediately adjacent to Klapmuts railway station and taxi
                routes. A compact, efficient industrial footprint with
                rezoning substantially progressed.
              </p>
            </div>
            <div className="hero-intro-tags">
              <span className="tag">MR27 / R44 access</span>
              <span className="tag">Klapmuts railway station</span>
              <span className="tag">Rezoning substantially progressed</span>
            </div>
          </div>
        </section>

        <section className="hero" id="top">
          <div className="hero-vignette" aria-hidden="true">
            <div className="hero-vignette-inner">
              <div className="hero-vignette-deep" />
              <div className="hero-vignette-teal" />
              <div className="hero-vignette-floor" />
              <div className="hero-vignette-frame" />
            </div>
          </div>
          <div className="container hero-grid">
            <div className="hero-amber-wrap">
              <div className="hero-amber-glow hero-amber-glow--base" />
              <div className="hero-amber-glow hero-amber-glow--hover" />
              <div className="hero-content hero-amber">
                <p className="eyebrow">Site overview</p>
                <h2>
                  Strategically located development land with rezoning near
                  completion in Klapmuts.
                </h2>
                <p className="lead">
                  A rezoning-advanced, ±4.6 ha industrial development site,
                  subdivided into 5 industrial erven, strategically located in
                  Klapmuts with confirmed municipal service capacity and one
                  outstanding procedural access item.
                </p>
                <div className="pill-row">
                  <span className="pill">Klapmuts, Western Cape</span>
                  <span className="pill">West of MR27 / R44</span>
                </div>
                <div className="cta-group">
                  <a className="btn primary" href="#book">
                    Book a Meeting
                  </a>
                  <a className="btn outline" href="tel:0829402000">
                    Call Joshua
                  </a>
                </div>
                <div className="hero-meta bento-grid">
                  {heroMeta.map((item) => (
                    <div className="meta-card" key={item.label}>
                      <span className="meta-label">{item.label}</span>
                      <span className="meta-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-visual bento-grid">
              <div className="map-placeholder">
                Regional map, aerial imagery, and topographic map placeholder
              </div>
            </div>
          </div>
        </section>

        <section className="slide dark-section" id="location">
          <div className="container">
            <SectionHeader
              eyebrow="Page 1"
              title="Location, Demographics & Market Drivers"
            >
              Located west of Main Road MR27 / R44. Immediate proximity to
              Klapmuts railway station, taxi routes, and residential area.
            </SectionHeader>
            <div className="two-col bento-grid">
              <div className="card">
                <h3>Location &amp; Access</h3>
                <ul>
                  <li>Located west of Main Road MR27 / R44.</li>
                  <li>Immediate proximity to Klapmuts railway station.</li>
                  <li>Taxi routes (Stellengate Boulevard).</li>
                  <li>Klapmuts residential area.</li>
                  <li>Strong accessibility for labour and light-industrial logistics.</li>
                  <li>TIA confirms non-fatal traffic impact.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Planning &amp; Demographic Context</h3>
                <ul>
                  <li>Identified as Future Development Area K1.4.</li>
                  <li>Included in Stellenbosch Water Master Plan (2017).</li>
                  <li>Included in Stellenbosch Sewer Master Plan (2017).</li>
                  <li>Located inside the urban edge.</li>
                  <li>Intended for employment-generating industrial uses.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Rezoning Summary (Public-Safe)</h3>
              <ul>
                <li>Formal rezoning and subdivision application submitted.</li>
                <li>Application amended following access negotiations with Stellenbosch Municipality.</li>
                <li>Public participation completed.</li>
                <li>Technical reports submitted and accepted.</li>
                <li>Application aligned with municipal planning frameworks.</li>
                <li>Single outstanding procedural item relates to formalised access.</li>
              </ul>
            </div>
            <DocLinks links={locationDocs} />
          </div>
        </section>

        <section className="slide dark-section alt" id="market">
          <div className="container">
            <SectionHeader eyebrow="Page 2" title="Market Drivers &amp; Comparisons">
              Klapmuts positioned on the N1 freight corridor.
            </SectionHeader>
            <div className="card-grid bento-grid">
              <div className="card">
                <h3>Market Drivers (Document-Supported)</h3>
                <ul>
                  <li>Klapmuts positioned on the N1 freight corridor.</li>
                  <li>Area carries ~93% of Cape Town–bound freight traffic.</li>
                  <li>Increasing demand for small-to-mid-scale industrial erven.</li>
                  <li>Limited availability of zoned industrial land in Klapmuts.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Key Investment Highlights</h3>
                <ul>
                  <li>Rezoning substantially progressed.</li>
                  <li>Compact, efficient industrial footprint.</li>
                  <li>Municipal infrastructure capacity confirmed.</li>
                  <li>Proximity to transport and labour.</li>
                  <li>Industrial land scarcity in the node.</li>
                </ul>
              </div>
              <div className="card">
                <h3>What is NOT on this Page (NDA-Gated)</h3>
                <ul>
                  <li>Comparable sale values</li>
                  <li>TPN report</li>
                  <li>Market pricing</li>
                  <li>Yield or IRR commentary</li>
                </ul>
                <p className="note">These documents remain NDA-only.</p>
              </div>
            </div>
            <DocLinks links={marketDocs} />
          </div>
        </section>

        <section className="slide dark-section" id="planning">
          <div className="container">
            <SectionHeader eyebrow="Page 3" title="Planning, Rezoning Status &amp; Service Availability">
              Rezoning well advanced – single outstanding item. Rezoning
              application submitted and under formal municipal review.
            </SectionHeader>
            <div className="two-col bento-grid">
              <div className="card">
                <h3>Rezoning Status</h3>
                <p className="subtle">Well advanced – one procedural item outstanding</p>
                <ul>
                  <li>Application lodged.</li>
                  <li>Public participation completed.</li>
                  <li>Technical reports accepted.</li>
                  <li>Adjacent access land (Farm 717/1) approved by MPT (April 2025).</li>
                  <li>Appeal underway relating to road cost responsibility, not land use.</li>
                </ul>
                <p className="note">After appeal: internal recirculation, then delegated resolution expected.</p>
              </div>
              <div className="card">
                <h3>Environmental</h3>
                <ul>
                  <li>NEMA Environmental Exemption confirmed.</li>
                  <li>Development &lt;5 ha.</li>
                  <li>No listed activities triggered.</li>
                  <li>No fatal environmental flaws identified.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Services &amp; Infrastructure (High-Level, Safe)</h3>
              <div className="two-col bento-grid" style={{ marginTop: '1rem' }}>
                <div>
                  <h4>Water</h4>
                  <ul>
                    <li>Supplied via Klapmuts Lower Reservoir.</li>
                    <li>Sufficient bulk capacity confirmed.</li>
                    <li>Required link services identified.</li>
                    <li>Fire flow compliant (25 ℓ/s).</li>
                  </ul>
                </div>
                <div>
                  <h4>Sewer</h4>
                  <ul>
                    <li>Falls within Klapmuts PS2 drainage area.</li>
                    <li>Sufficient capacity confirmed.</li>
                    <li>Single outfall connection required.</li>
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <h4>Electricity</h4>
                <ul>
                  <li>Eskom licensed supply area.</li>
                  <li>±1.5 MVA capacity available.</li>
                  <li>Underground reticulation planned.</li>
                </ul>
              </div>
            </div>
            <div className="highlight">
              <div>
                <h3>Site Characteristics</h3>
                <p>
                  Generally flat, developable landform. No known material
                  environmental constraints. Suitable for light-industrial
                  development.
                </p>
              </div>
              <div className="badge">One procedural item outstanding</div>
            </div>
            <DocLinks links={planningDocs} />
          </div>
        </section>

        <section className="slide dark-section alt" id="options">
          <div className="container">
            <SectionHeader eyebrow="Page 4" title="Three Purchase / Participation Options">
              Small-to-mid-scale industrial development. Urban infill
              industrial opportunity. Rezoning-driven value creation, not land
              banking.
            </SectionHeader>
            <div className="card-grid bento-grid">
              {options.map((option) => (
                <div className="card option" key={option.title}>
                  <h3>{option.title}</h3>
                  <p className="subtle">{option.subtitle}</p>
                  <ul>
                    {option.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              Commercial terms remain NDA-gated (no pricing, BICLs, JV splits, or comparable sales on this page).
            </p>
            <DocLinks links={optionDocs} />
          </div>
        </section>

        <section className="slide dark-section" id="next">
          <div className="container">
            <SectionHeader eyebrow="Page 5" title="Next Steps">
              NDA required for full access to data room.
            </SectionHeader>
            <div className="card">
              <h3>Next Steps</h3>
              <ul>
                <li>NDA required for full access to data room.</li>
                <li>Detailed planning files, service reports, layouts and financials released post-NDA.</li>
                <li>Site inspections available by appointment.</li>
              </ul>
              <div className="contact-strip" style={{ marginTop: '1.5rem' }}>
                <div className="contact-chip">
                  <div className="chip-avatar">DL</div>
                  <div>
                    <p className="chip-label">Primary Contact</p>
                    <p className="chip-value">Daniel Lombard – 082 425 6835</p>
                  </div>
                </div>
                <div className="contact-chip">
                  <div className="chip-avatar">JP</div>
                  <div>
                    <p className="chip-label">Developer Liaison</p>
                    <p className="chip-value">Joshua Pretorius</p>
                  </div>
                </div>
                <div className="contact-chip">
                  <div>
                    <p className="chip-label">Response Window</p>
                    <p className="chip-value">24–48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Farm 749 Klapmuts</strong>
            <p>±4.6 ha small-to-mid-scale industrial development site with rezoning substantially progressed.</p>
          </div>
          <div className="footer-links">
            <a href="#top">Back to top</a>
            <a href="mailto:info@klapmutsdevelopment.co.za">
              info@klapmutsdevelopment.co.za
            </a>
          </div>
          <div className="footer-meta">
            All rights reserved {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
