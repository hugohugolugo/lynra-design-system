function SiteFooter() {
  const cols = [
    { title: "Villages", items: ["Polaris", "Aurora", "Future locations"] },
    { title: "System", items: ["Operating model", "Sustainability", "For operators"] },
    { title: "Company", items: ["About", "Press", "Careers", "Contact"] },
  ];
  return (
    <footer style={{
      background: "var(--lynra-aluminium)",
      borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
      padding: "64px var(--layout-margin) 32px",
      marginTop: 80,
    }}>
      <div style={{
        display:"grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: 40, paddingBottom: 56,
      }}>
        <div style={{display:"flex", flexDirection:"column", gap: 24}}>
          <img src="../../assets/logos/lynra-wordmark-strawberry-large-obsidian.svg"
               alt="Lynra — A Strawberry Living company"
               style={{height: 56, alignSelf:"flex-start"}}/>
          <p style={{maxWidth: 360, fontSize: 14, color: "var(--lynra-granite)", margin: 0}}>
            Lynra builds villages for the workforce of tomorrow.
            A Strawberry Living company.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.title} style={{display:"flex", flexDirection:"column", gap: 14}}>
            <div style={{
              fontFamily:"var(--font-body)", fontWeight: 600, fontSize: 13,
              letterSpacing: "0.04em", textTransform: "uppercase",
              color: "var(--lynra-granite)",
            }}>{col.title}</div>
            {col.items.map(i => (
              <a key={i} href="#" style={{
                fontSize: 15, color: "var(--fg)", textDecoration:"none", fontWeight: 500,
              }}>{i}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        display:"flex", justifyContent:"space-between", alignItems:"center",
        paddingTop: 24, borderTop: "1px solid rgba(36,36,40,0.15)",
        fontSize: 12, color: "var(--lynra-granite)", letterSpacing: "0.04em", textTransform: "uppercase",
      }}>
        <span>© 2026 Lynra · A Strawberry Living company</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}
export { SiteFooter };
if (typeof window !== "undefined") window.SiteFooter = SiteFooter;
