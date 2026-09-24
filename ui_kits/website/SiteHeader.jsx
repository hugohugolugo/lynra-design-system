function SiteHeader({ active, onNav }) {
  const items = ["Villages", "System", "About", "Press", "Contact"];
  return (
    <header className="header">
      <a href="#" onClick={(e)=>{e.preventDefault(); onNav("Villages");}}>
        <img src="../../assets/logos/lynra-logo-horizontal-obsidian.svg" alt="Lynra"/>
      </a>
      <nav className="nav">
        {items.map(label => (
          <button key={label}
                  className={active === label ? "active" : ""}
                  onClick={() => onNav(label)}>
            {label}
          </button>
        ))}
      </nav>
      <button className="cta-pill" onClick={() => onNav("Book")}>
        Book a viewing <span style={{fontFamily:"var(--font-display)"}}>→</span>
      </button>
    </header>
  );
}
export { SiteHeader };
if (typeof window !== "undefined") window.SiteHeader = SiteHeader;
