function TabBar({ active, onChange }) {
  const tabs = [
    { id: "dash",    label: "Portal",   icon: "ph-house-simple" },
    { id: "village", label: "Village",  icon: "ph-map-pin" },
    { id: "service", label: "Services", icon: "ph-spray-bottle" },
    { id: "profile", label: "Account",  icon: "ph-user" },
  ];
  return (
    <div className="tab-bar">
      {tabs.map(t => (
        <button key={t.id} className={active === t.id ? "active" : ""}
                onClick={() => onChange(t.id)}>
          <i className={`ph-light ${t.icon}`}></i>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
export { TabBar };
if (typeof window !== "undefined") window.TabBar = TabBar;
