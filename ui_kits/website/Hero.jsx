function Hero() {
  return (
    <section style={{
      paddingTop: 24, paddingBottom: 96,
      display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "end",
    }}>
      <div style={{display:"flex", flexDirection:"column", gap:40}}>
        <span className="section-label" style={{margin:0}}>A Strawberry Living company</span>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: 110, lineHeight: 0.95, letterSpacing: "-0.04em",
          color: "var(--fg)", margin: 0,
        }}>
          Lynra builds villages<br/>
          that make temporary<br/>
          life work really well
        </h1>
        <div style={{display:"flex", gap: 16}}>
          <button className="cta-pill">
            Explore villages <span style={{fontFamily:"var(--font-display)"}}>→</span>
          </button>
          <button className="cta-ghost">For operators</button>
        </div>
      </div>

      <div style={{
        position: "relative",
        background: "var(--lynra-aluminium)",
        borderRadius: "var(--radius-md)",
        aspectRatio: "4/5",
        overflow: "hidden",
        backgroundImage: "url(../../assets/imagery/atmosphere-03.png)",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{
          position:"absolute", inset:0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(36,36,40,0.45) 100%)",
        }}/>
        <div style={{
          position:"absolute", left: 24, bottom: 24, right: 24,
          display:"flex", justifyContent:"space-between", alignItems:"end", gap: 16,
        }}>
          <div style={{display:"flex", flexDirection:"column", gap:4}}>
            <span style={{
              fontFamily:"var(--font-body)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", color: "#F6F4F4",
              opacity: 0.7,
            }}>Now serving</span>
            <span style={{
              fontFamily:"var(--font-display)", fontSize: 32, fontWeight: 500,
              letterSpacing: "-0.025em", color: "#F6F4F4", lineHeight: 1,
            }}>Polaris Village</span>
            <span style={{color:"#F6F4F4", opacity:0.8, fontSize: 13}}>Luleå, SE · 540 rooms · Opened 2026</span>
          </div>
          <button style={{
            background:"#F6F4F4", color:"var(--fg)", border:0,
            borderRadius: 999, width:44, height:44, cursor:"pointer",
            fontFamily:"var(--font-display)", fontSize: 22,
          }}>→</button>
        </div>
      </div>
    </section>
  );
}
export { Hero };
if (typeof window !== "undefined") window.Hero = Hero;
