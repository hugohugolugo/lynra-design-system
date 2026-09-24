function QuoteBlock() {
  return (
    <section className="section" style={{
      background: "var(--lynra-obsidian)",
      borderRadius: "var(--radius-lg)",
      padding: "80px 80px 64px",
      color: "var(--lynra-ash)",
      marginTop: 16,
    }}>
      <div style={{maxWidth: 980}}>
        <span className="section-label" style={{margin:"0 0 32px"}}>Brand's promise</span>
        <h2 style={{
          fontFamily:"var(--font-display)", fontWeight: 500,
          fontSize: 84, lineHeight: 0.98, letterSpacing: "-0.04em",
          color: "var(--lynra-ash)", margin: 0,
        }}>
          Beyond function for people.<br/>
          <span style={{color:"var(--lynra-red-ember)"}}>Built to perform for the business.</span>
        </h2>
      </div>
    </section>
  );
}
export { QuoteBlock };
if (typeof window !== "undefined") window.QuoteBlock = QuoteBlock;
