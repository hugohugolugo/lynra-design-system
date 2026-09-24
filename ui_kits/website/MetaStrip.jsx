function MetaStrip({ section = "Villages", chapter = "Visual identity" }) {
  return (
    <div className="meta-strip">
      <span className="muted">Brand ID</span>
      <span>Lynra</span>
      <span className="muted">2026</span>
      <span className="muted">Public</span>
      <span className="sep"></span>
      <span>{section}</span>
      <span className="muted">{chapter}</span>
      <div className="right">
        <span className="muted">EN / SV</span>
      </div>
    </div>
  );
}
export { MetaStrip };
if (typeof window !== "undefined") window.MetaStrip = MetaStrip;
