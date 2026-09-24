function VillageCard({ name, location, status, rooms, accent }) {
  return (
    <div style={{
      background: "var(--bg-elev)", borderRadius: "var(--radius-md)",
      overflow: "hidden", display:"flex", flexDirection:"column",
      cursor: "pointer", transition: "transform 200ms",
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{
        aspectRatio: "16/10",
        background: accent || "var(--lynra-aluminium)",
        position: "relative", overflow:"hidden",
      }}>
        <span style={{
          position:"absolute", left:-8, top:-16,
          fontFamily:"var(--font-display)", fontWeight:500,
          fontSize: 180, lineHeight: 1, letterSpacing:"-0.03em",
          color: "var(--lynra-umber)", opacity: 0.85,
        }}>{name[0]}</span>
        <div style={{
          position:"absolute", top: 16, right: 16,
          background:"rgba(36,36,40,0.85)", color:"#F6F4F4",
          padding:"4px 10px", borderRadius: 999,
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase",
        }}>{status}</div>
      </div>
      <div style={{padding: 20, display:"flex", flexDirection:"column", gap: 8}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
          <h3 style={{
            fontFamily:"var(--font-display)", fontWeight: 500, fontSize: 28,
            letterSpacing:"-0.02em", margin: 0, lineHeight:1,
          }}>{name}</h3>
          <span style={{fontFamily:"var(--font-display)", color: "var(--fg-muted)"}}>→</span>
        </div>
        <div style={{display:"flex", gap: 16, color: "var(--fg-muted)", fontSize: 13, fontWeight: 500}}>
          <span>{location}</span><span>·</span><span>{rooms} rooms</span>
        </div>
      </div>
    </div>
  );
}
export { VillageCard };
if (typeof window !== "undefined") window.VillageCard = VillageCard;
