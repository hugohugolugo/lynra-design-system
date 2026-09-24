function BentoOverview() {
  return (
    <section className="section">
      <div className="section-label">Visual concept · peg-board</div>
      <div style={{
        display:"grid",
        gridTemplateColumns: "1.6fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gap: 16,
        gridTemplateAreas: `
          "hero stats photo"
          "hero quote photo"
        `,
      }}>
        {/* Hero tile — Red Ember */}
        <div style={{
          gridArea: "hero",
          background: "var(--lynra-red-ember)",
          borderRadius: "var(--radius-lg)",
          padding: "36px 36px 32px",
          color: "var(--lynra-umber)",
          minHeight: 480,
          display:"flex", flexDirection:"column", justifyContent:"space-between",
          position:"relative", overflow:"hidden",
        }}>
          {/* Decorative marker dots */}
          <div style={{
            position:"absolute", inset:0, opacity:0.18,
            backgroundImage:"radial-gradient(circle at 80% 20%, var(--lynra-umber) 8px, transparent 9px), radial-gradient(circle at 90% 60%, var(--lynra-umber) 14px, transparent 15px), radial-gradient(circle at 70% 85%, var(--lynra-umber) 10px, transparent 11px)",
          }}/>
          <span style={{
            fontFamily:"var(--font-body)", fontSize: 13, fontWeight: 500,
            letterSpacing: "0.04em", textTransform:"uppercase",
            position:"relative",
          }}>We develop</span>
          <h3 style={{
            fontFamily:"var(--font-display)", fontWeight: 700,
            fontSize: 88, lineHeight: 0.92, letterSpacing: "-0.04em",
            margin: 0, position:"relative",
          }}>
            Sustainable<br/>villages for<br/>the workforce<br/>of tomorrow
          </h3>
          <p style={{
            fontFamily:"var(--font-body)", fontWeight: 500,
            fontSize: 15, lineHeight: 1.4, margin: 0, maxWidth: 440,
            position:"relative",
          }}>
            We reduce noise, remove complexity and make every space and process intentional, intuitive and seamless.
          </p>
        </div>

        {/* Stats tile */}
        <div style={{
          gridArea: "stats",
          background: "var(--bg-elev)",
          borderRadius: "var(--radius-lg)",
          padding: 28,
          display:"flex", flexDirection:"column", gap: 16,
          minHeight: 232,
        }}>
          <span className="section-label" style={{margin:0}}>Impact</span>
          <div style={{display:"flex", flexDirection:"column", gap: 18, marginTop:"auto"}}>
            <div>
              <div style={{fontFamily:"var(--font-display)", fontWeight:500, fontSize:64, lineHeight:1, letterSpacing:"-0.03em"}}>
                65<span style={{color:"var(--lynra-red-ember)"}}>%</span>
              </div>
              <div style={{fontSize: 13, color: "var(--fg-muted)", marginTop:6}}>Increased productivity across multiple areas</div>
            </div>
            <div>
              <div style={{fontFamily:"var(--font-display)", fontWeight:500, fontSize:36, lineHeight:1, letterSpacing:"-0.03em"}}>
                –42% <span style={{color:"var(--fg-muted)", fontSize: 14, fontFamily:"var(--font-body)"}}>CO₂e</span>
              </div>
              <div style={{fontSize: 13, color: "var(--fg-muted)", marginTop:6}}>Versus standard temporary housing</div>
            </div>
          </div>
        </div>

        {/* Quote tile — Granite */}
        <div style={{
          gridArea: "quote",
          background: "var(--lynra-granite)",
          borderRadius: "var(--radius-lg)",
          padding: 28,
          color: "var(--lynra-ash)",
          display:"flex", flexDirection:"column", justifyContent:"space-between",
          minHeight: 232,
        }}>
          <blockquote style={{
            fontFamily:"'Frank Ruhl Libre', Georgia, serif",
            fontStyle: "italic", fontWeight: 300,
            fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em",
            margin: 0,
          }}>
            "We know it can be challenging to spend long periods away from family and friends."
          </blockquote>
          <div>
            <div style={{fontWeight: 600, fontSize: 14}}>Mattias Stengl</div>
            <div style={{fontSize: 12, color: "var(--lynra-aluminium)"}}>CEO, Strawberry Living</div>
          </div>
        </div>

        {/* Photo tile */}
        <div style={{
          gridArea: "photo",
          background: `url(../../assets/imagery/atmosphere-03.png) center / cover no-repeat, var(--lynra-clay)`,
          borderRadius: "var(--radius-lg)",
          minHeight: 480,
          position:"relative", overflow:"hidden",
        }}>
          <div style={{
            position:"absolute", inset:0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(36,36,40,0.55) 100%)",
          }}/>
          <div style={{
            position:"absolute", bottom: 24, left: 24, right: 24,
            color: "#F6F4F4",
          }}>
            <div style={{fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.7}}>Luleå water reservoir</div>
            <div style={{fontFamily:"var(--font-display)", fontSize: 26, letterSpacing:"-0.02em", marginTop:6}}>June 2024 site visit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { BentoOverview };
if (typeof window !== "undefined") window.BentoOverview = BentoOverview;
