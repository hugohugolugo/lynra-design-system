function ServiceScreen() {
  const services = [
    { icon: "ph-spray-bottle",  title: "Room cleaning",         meta: "Weekly · included" },
    { icon: "ph-basket",        title: "Departure cleaning",    meta: "On request" },
    { icon: "ph-wrench",        title: "Maintenance",           meta: "Same-day response" },
    { icon: "ph-shirt-folded",  title: "Laundry",               meta: "Self-service · 24/7" },
    { icon: "ph-shield-check",  title: "Security",              meta: "On site · 24/7" },
    { icon: "ph-headset",       title: "24/7 Support",          meta: "Live · 0 min wait" },
    { icon: "ph-armchair",      title: "Guest lounge",          meta: "Polaris: Lounge" },
    { icon: "ph-van",           title: "Shuttle bus",           meta: "Hourly to Luleå" },
  ];
  return (
    <div className="screen">
      <div className="app-top">
        <div className="brand">
          <img src="../../assets/logos/lynra-symbol-obsidian.svg" alt=""/>
          <span>Services</span>
        </div>
        <button className="menu-btn" aria-label="Search">
          <i className="ph-light ph-magnifying-glass" style={{fontSize:18}}></i>
        </button>
      </div>

      <div className="scroll">
        <div style={{padding: "8px 0 24px"}}>
          <div style={{
            fontFamily:"var(--font-body)", fontSize: 12, fontWeight: 600,
            letterSpacing:"0.04em", textTransform:"uppercase",
            color: "var(--fg-muted)",
          }}>Polaris Village</div>
          <h2 style={{
            fontFamily:"var(--font-display)", fontWeight: 500,
            fontSize: 36, lineHeight: 1, letterSpacing:"-0.03em",
            margin: "10px 0 0",
          }}>Calibrated services<br/>at your door</h2>
        </div>

        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr", gap: 8,
        }}>
          {services.map(s => (
            <button key={s.title} style={{
              background:"var(--bg-elev)", border:0, borderRadius:"var(--radius-md)",
              padding: 18, textAlign:"left", cursor:"pointer",
              display:"flex", flexDirection:"column", gap: 24, minHeight: 132,
              fontFamily:"var(--font-body)",
            }}>
              <i className={`ph-light ${s.icon}`} style={{fontSize:24}}></i>
              <div>
                <div style={{fontWeight:600, fontSize:14, lineHeight:1.2, marginBottom:4, color:"var(--fg)"}}>{s.title}</div>
                <div style={{fontSize:12, color:"var(--fg-muted)"}}>{s.meta}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Maintenance confirmation card (canonical brandbook example) */}
        <div style={{
          background:"var(--lynra-obsidian)", color:"var(--lynra-ash)",
          borderRadius:"var(--radius-md)", padding: 20, marginTop: 16,
          display:"flex", flexDirection:"column", gap: 16,
        }}>
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing:"0.04em", textTransform:"uppercase",
            color: "var(--lynra-haze)",
          }}>Last ticket · #B-2418</span>
          <p style={{
            fontFamily:"var(--font-body)", fontWeight: 500, fontSize: 16,
            lineHeight: 1.4, margin: 0, color: "var(--lynra-ash)",
          }}>
            Your request is logged and scheduled. We will update you when the issue is resolved.
          </p>
          <div style={{
            display:"flex", gap: 8, alignItems:"center",
            paddingTop: 12, borderTop: "1px solid var(--lynra-granite)",
          }}>
            <i className="ph-light ph-clock" style={{fontSize:18, color:"var(--lynra-haze)"}}></i>
            <span style={{fontSize: 13, color:"var(--lynra-haze)"}}>Estimated · Thu 14:00 — 16:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { ServiceScreen };
if (typeof window !== "undefined") window.ServiceScreen = ServiceScreen;
