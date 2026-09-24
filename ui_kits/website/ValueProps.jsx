function ValueProps() {
  const items = [
    { num: "01", title: "Hotel expertise applied at scale",
      body: "Decades of hospitality know-how brought into environments traditionally shaped without it." },
    { num: "02", title: "Beyond function",
      body: "Reliability, stability and comfort are treated as core operational requirements." },
    { num: "03", title: "Community as a system",
      body: "Healthier routines, stronger collaboration and a shared sense of purpose." },
    { num: "04", title: "A partner, not a supplier",
      body: "Holistic responsibility for how environments and services function in everyday operation." },
  ];
  return (
    <section className="section">
      <div className="section-label">Value proposition</div>
      <h2 style={{
        fontFamily:"var(--font-display)", fontWeight:500, fontSize:64,
        lineHeight:0.98, letterSpacing:"-0.04em", margin:"0 0 56px",
        maxWidth: 900,
      }}>
        Lynra takes full responsibility for the<br/>
        environments and services that surround<br/>
        large-scale work
      </h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap: 16}}>
        {items.map(item => (
          <div key={item.num} style={{
            background: "var(--bg-elev)", borderRadius: "var(--radius-md)",
            padding: "24px 24px 28px",
            display:"flex", flexDirection:"column", gap: 32,
            minHeight: 280,
          }}>
            <div style={{
              fontFamily:"var(--font-display)", fontWeight:500,
              fontSize: 32, color: "var(--lynra-red-ember)",
              letterSpacing:"-0.02em", lineHeight: 1,
            }}>{item.num}</div>
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              <h3 style={{
                fontFamily:"var(--font-display)", fontWeight:500,
                fontSize: 26, lineHeight: 1.05, letterSpacing:"-0.02em",
                margin: 0,
              }}>{item.title}</h3>
              <p style={{
                fontFamily:"var(--font-body)", fontWeight:500,
                fontSize: 14, lineHeight: 1.45,
                color: "var(--fg)", opacity: 0.8, margin: 0,
              }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export { ValueProps };
if (typeof window !== "undefined") window.ValueProps = ValueProps;
