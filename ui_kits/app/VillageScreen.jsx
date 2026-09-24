function VillageScreen() {
  return (
    <div className="screen">
      <div className="app-top">
        <div className="brand">
          <img src="../../assets/logos/lynra-symbol-obsidian.svg" alt=""/>
          <span>Village</span>
        </div>
        <button className="menu-btn" aria-label="Map">
          <i className="ph-light ph-map-trifold" style={{fontSize:18}}></i>
        </button>
      </div>

      <div className="scroll">
        <div style={{padding: "8px 0 20px"}}>
          <div style={{
            fontFamily:"var(--font-body)", fontSize: 14, fontWeight: 500,
            color: "var(--fg-muted)",
          }}>Now · Luleå, SE</div>
          <h2 style={{
            fontFamily:"var(--font-display)", fontWeight: 500,
            fontSize: 42, lineHeight: 0.98, letterSpacing:"-0.03em",
            margin: "10px 0 0",
          }}>Polaris<br/>Village</h2>
        </div>

        {/* Tone-on-tone "Gym Open" card */}
        <div style={{
          background:"var(--lynra-red-ember)",
          color:"var(--lynra-umber)",
          borderRadius:"var(--radius-md)",
          padding: 18, marginBottom: 8,
          overflow:"hidden", position:"relative", height: 140,
        }}>
          <div style={{position:"relative", zIndex:1, display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
            <span style={{fontSize: 14, fontWeight: 500}}>Open now · 24/7</span>
            <span style={{fontFamily:"var(--font-display)", fontSize: 52, lineHeight: 0.9, letterSpacing:"-0.04em", fontWeight: 500}}>Gym</span>
          </div>
          <span style={{
            position:"absolute", right:-16, top:-14,
            fontFamily:"var(--font-display)", fontWeight:500,
            fontSize: 200, letterSpacing:"-0.04em",
            color:"var(--lynra-umber)", opacity: 0.1, lineHeight: 1,
          }}>Gym</span>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 8, marginBottom: 16}}>
          <VillageTile icon="ph-storefront" title="Market" meta="07:00 → 22:00" tone="warm"/>
          <VillageTile icon="ph-armchair"   title="Lounge" meta="Open" tone="dark"/>
          <VillageTile icon="ph-van"        title="Shuttle" meta="Every 30 min"/>
          <VillageTile icon="ph-shield-check" title="Reception" meta="24/7"/>
        </div>

        {/* Wayfinding row */}
        <SectionHeader title="Wayfinding"/>
        <WayRow label="Polaris: Market"    meta="Building B · ground floor"/>
        <WayRow label="Gym Opened"          meta="Building B · level 1"/>
        <WayRow label="Rooms 220 – 240"     meta="Building C · level 2"/>
        <WayRow label="Reception"           meta="Main entrance"/>
      </div>
    </div>
  );
}

function VillageTile({ icon, title, meta, tone }) {
  const styles = {
    warm: { bg: "var(--lynra-aluminium)", fg: "var(--fg)" },
    dark: { bg: "var(--lynra-obsidian)",  fg: "var(--lynra-ash)" },
    default: { bg: "var(--bg-elev)", fg: "var(--fg)" },
  }[tone || "default"];
  return (
    <button style={{
      background: styles.bg, color: styles.fg, border:0,
      borderRadius:"var(--radius-md)", padding: 16, textAlign:"left",
      display:"flex", flexDirection:"column", gap: 20,
      minHeight: 110, cursor:"pointer", fontFamily:"var(--font-body)",
    }}>
      <i className={`ph-light ${icon}`} style={{fontSize:22}}></i>
      <div>
        <div style={{fontFamily:"var(--font-display)", fontWeight:500, fontSize:22, letterSpacing:"-0.02em", lineHeight:1}}>{title}</div>
        <div style={{fontSize:12, opacity:0.7, marginTop:4}}>{meta}</div>
      </div>
    </button>
  );
}

function WayRow({ label, meta }) {
  return (
    <div style={{
      display:"flex", justifyContent:"space-between", alignItems:"center",
      padding: "16px 4px", borderBottom: "1px solid var(--divider)",
    }}>
      <div>
        <div style={{fontFamily:"var(--font-display)", fontWeight: 500, fontSize: 20, letterSpacing:"-0.02em", lineHeight:1}}>{label}</div>
        <div style={{fontSize: 12, color:"var(--fg-muted)", marginTop: 4}}>{meta}</div>
      </div>
      <span style={{fontFamily:"var(--font-display)", fontSize: 28, color:"var(--fg)"}}>→</span>
    </div>
  );
}

export { VillageScreen };
if (typeof window !== "undefined") window.VillageScreen = VillageScreen;
