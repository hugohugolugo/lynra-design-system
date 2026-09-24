// Canonical brandbook screen — "Your check-in is complete."
function CheckInScreen({ onContinue }) {
  return (
    <div className="screen" style={{position:"relative"}}>
      <DotField/>
      <div className="app-top" style={{position:"relative"}}>
        <div className="brand">
          <img src="../../assets/logos/lynra-symbol-obsidian.svg" alt=""/>
          <span>Portal</span>
        </div>
        <button className="menu-btn" aria-label="Menu">
          <i className="ph-light ph-list" style={{fontSize:18}}></i>
        </button>
      </div>

      <div style={{
        flex: 1, padding: "48px 32px 0",
        display:"flex", flexDirection:"column",
        justifyContent:"center", position:"relative",
      }}>
        <div style={{
          display:"inline-flex", alignItems:"center", gap:10,
          color:"var(--lynra-umber)", fontFamily:"var(--font-body)",
          fontWeight: 600, fontSize: 14,
          marginBottom: 14,
        }}>
          <i className="ph-light ph-check" style={{fontSize:22}}></i>
          Your check-in is complete
        </div>
        <h1 style={{
          fontFamily:"var(--font-display)", fontWeight: 600,
          fontSize: 56, lineHeight: 0.96, letterSpacing:"-0.04em",
          color: "var(--lynra-umber)", margin: 0,
        }}>The village is<br/>ready for you</h1>

        <div style={{
          marginTop: 32, display:"flex", flexDirection:"column", gap: 12,
        }}>
          <button style={{
            background: "var(--bg-elev)",
            color: "var(--lynra-umber)",
            border: 0, borderRadius: "var(--radius-pill)",
            padding: "20px 28px",
            fontFamily:"var(--font-body)", fontWeight: 600, fontSize: 16,
            display:"flex", justifyContent:"space-between", alignItems:"center",
            cursor:"pointer",
            boxShadow: "0 4px 16px rgba(36,36,40,0.06)",
          }} onClick={onContinue}>
            Open dashboard
            <span style={{fontFamily:"var(--font-display)"}}>→</span>
          </button>
          <button style={{
            background: "transparent", color: "var(--lynra-umber)",
            border: 0, padding: 12,
            fontFamily:"var(--font-body)", fontWeight: 500, fontSize: 14,
            cursor:"pointer",
          }}>Read arrival letter</button>
        </div>
      </div>

      <div style={{
        padding: "0 32px 32px",
        display:"flex", justifyContent:"center", position:"relative",
      }}>
        <img src="../../assets/logos/lynra-wordmark-obsidian.svg"
             alt="Lynra" style={{height: 22, opacity: 0.85}}/>
      </div>
    </div>
  );
}
export { CheckInScreen };
if (typeof window !== "undefined") window.CheckInScreen = CheckInScreen;
