function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <span className="icons">
        <i className="ph-light ph-cell-signal-high" style={{fontSize:14}}></i>
        <i className="ph-light ph-wifi-high" style={{fontSize:14}}></i>
        <i className="ph-light ph-battery-high" style={{fontSize:16}}></i>
      </span>
    </div>
  );
}
export { StatusBar };
if (typeof window !== "undefined") window.StatusBar = StatusBar;
