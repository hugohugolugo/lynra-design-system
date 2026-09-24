// Revised 24 Sep 2026 after the brandbook's "Bento layout" page (Figma): one statement
// tile, one quote card, one photo tile — no stats tile, no decorative gradients.
function BentoOverview() {
  return (
    <section className="section">
      <div style={{
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "stretch",
      }}>
        {/* Statement tile — Red Ember with Umber type and peg dots */}
        <div style={{
          background: "var(--lynra-red-ember)",
          borderRadius: "var(--radius-lg)",
          padding: "56px 56px 52px",
          color: "var(--lynra-umber)",
          minHeight: 560,
          display:"flex", flexDirection:"column", justifyContent:"space-between", gap: 40,
          position:"relative",
        }}>
          <PegDots color="var(--lynra-umber)"/>
          <h3 style={{
            fontFamily:"var(--font-display)", fontWeight: 600,
            fontSize: 64, lineHeight: 0.92, letterSpacing: "-0.04em",
            margin: 0, maxWidth: 460, position:"relative",
          }}>
            We develop sustainable villages
          </h3>
          <div style={{display:"flex", flexDirection:"column", gap: 16, maxWidth: 420, position:"relative"}}>
            <p style={{
              fontFamily:"var(--font-body)", fontWeight: 500,
              fontSize: 20, lineHeight: 1.4, margin: 0, color: "var(--lynra-umber)",
            }}>
              We use decades of hotel expertise to design, build and operate villages that make temporary life clear.
            </p>
            <p style={{
              fontFamily:"var(--font-body)", fontWeight: 500,
              fontSize: 15, lineHeight: 1.4, margin: 0, color: "var(--lynra-umber)",
            }}>
              We reduce noise, remove complexity and make every space and process intentional, intuitive and seamless.
            </p>
          </div>
        </div>

        <div style={{display:"grid", gridTemplateRows: "1fr 1fr", gap: 16}}>
          {/* Quote card — white, peg dots */}
          <div style={{
            background: "var(--bg-elev)",
            borderRadius: "var(--radius-lg)",
            padding: "40px 48px",
            position:"relative", display:"flex", alignItems:"center",
          }}>
            <PegDots color="var(--fg)"/>
            <blockquote style={{
              fontFamily:"var(--font-quote)", fontStyle:"italic", fontWeight: 300,
              fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.02em",
              margin: 0, maxWidth: 440, color: "var(--fg)", position:"relative",
            }}>
              “We know it can be challenging to spend long periods away from family and friends.”
            </blockquote>
          </div>

          {/* Photo tile on Clay, caption in Ash */}
          <div style={{
            background: `url(../../assets/imagery/atmosphere-03.png) center / cover no-repeat, var(--lynra-clay)`,
            borderRadius: "var(--radius-lg)",
            position:"relative", overflow:"hidden", minHeight: 260,
          }}>
            <div style={{
              position:"absolute", left: 24, bottom: 20,
              fontFamily:"var(--font-body)", fontSize: 16, fontWeight: 500, color: "#F6F4F4",
            }}>Luleå water reservoir, June 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Four 12px peg dots, 14px in from the corners — the brandbook's peg-board tile marker.
function PegDots({ color }) {
  const dot = (left, top) => (
    <span key={`${left}-${top}`} style={{
      position:"absolute", width: 12, height: 12, borderRadius: "50%",
      background: color, [left ? "left" : "right"]: 14, [top ? "top" : "bottom"]: 14,
    }}/>
  );
  return <>{[dot(1,1), dot(0,1), dot(1,0), dot(0,0)]}</>;
}
export { BentoOverview };
if (typeof window !== "undefined") window.BentoOverview = BentoOverview;
