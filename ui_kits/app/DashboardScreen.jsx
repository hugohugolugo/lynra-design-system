function DashboardScreen({ onOpenServices, onOpenVillage }) {
  return (
    <div className="screen">
      <div className="app-top">
        <div className="brand">
          <img src="../../assets/logos/lynra-symbol-obsidian.svg" alt=""/>
          <span>Portal</span>
        </div>
        <button className="menu-btn" aria-label="Menu">
          <i className="ph-light ph-list" style={{fontSize:18}}></i>
        </button>
      </div>

      <div className="scroll">
        {/* Greeting */}
        <div style={{padding: "8px 0 24px"}}>
          <div style={{
            fontFamily:"var(--font-body)", fontSize: 12, fontWeight: 600,
            letterSpacing:"0.04em", textTransform:"uppercase",
            color: "var(--fg-muted)",
          }}>Polaris Village · Room 218</div>
          <h2 style={{
            fontFamily:"var(--font-display)", fontWeight: 500,
            fontSize: 36, lineHeight: 1, letterSpacing:"-0.03em",
            margin: "10px 0 0",
          }}>Good morning, Emil</h2>
        </div>

        {/* Stay summary card — Red Ember tile */}
        <div style={{
          background: "var(--lynra-red-ember)",
          color: "var(--lynra-umber)",
          borderRadius: "var(--radius-md)",
          padding: 20, marginBottom: 12,
          position:"relative", overflow:"hidden",
        }}>
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing:"0.04em",
            textTransform:"uppercase", opacity: 0.75,
          }}>Your stay</span>
          <div style={{
            display:"flex", justifyContent:"space-between", alignItems:"flex-end",
            marginTop: 12,
          }}>
            <div>
              <div style={{fontFamily:"var(--font-display)", fontWeight:500, fontSize: 40, letterSpacing:"-0.03em", lineHeight: 1}}>16 nights</div>
              <div style={{fontSize: 13, marginTop: 4, opacity: 0.8}}>12 Jun → 28 Jun · Room 218</div>
            </div>
            <button onClick={onOpenVillage}
                    style={{background:"var(--lynra-umber)", color:"var(--lynra-red-ember)",
                            border:0, borderRadius:999, width:40, height:40, fontFamily:"var(--font-display)", fontSize:20, cursor:"pointer"}}>
              →
            </button>
          </div>
        </div>

        {/* Quick actions grid */}
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr", gap: 8, marginBottom: 12,
        }}>
          <QuickAction icon="ph-spray-bottle" label="Request cleaning"  onClick={onOpenServices}/>
          <QuickAction icon="ph-wrench"       label="Report an issue"  onClick={onOpenServices}/>
          <QuickAction icon="ph-storefront"   label="Polaris: Market"   onClick={onOpenVillage}/>
          <QuickAction icon="ph-barbell"      label="Gym · open 24/7"   onClick={onOpenVillage}/>
        </div>

        {/* Tickets list */}
        <SectionHeader title="Open tickets" count={2}/>
        <TicketRow icon="ph-wrench" title="Tap in bathroom drips"
                   meta="Scheduled · Thu 14:00" status="In progress"/>
        <TicketRow icon="ph-spray-bottle" title="Weekly room cleaning"
                   meta="Recurring · Fri morning" status="Logged"/>

        {/* Activities */}
        <SectionHeader title="This week at Polaris"/>
        <ActivityRow when="Wed 18:00" title="Open gym session" icon="ph-barbell"/>
        <ActivityRow when="Thu 19:30" title="Market evening — fresh produce" icon="ph-storefront"/>
        <ActivityRow when="Sat 09:00" title="Bus to Luleå centrum" icon="ph-van"/>
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: "var(--bg-elev)", border: 0, borderRadius: "var(--radius-md)",
      padding: 18, textAlign: "left", cursor: "pointer",
      display:"flex", flexDirection:"column", gap: 24,
      minHeight: 116,
      fontFamily:"var(--font-body)",
    }}>
      <i className={`ph-light ${icon}`} style={{fontSize: 24, color:"var(--fg)"}}></i>
      <span style={{fontSize: 14, fontWeight: 600, lineHeight: 1.2, color:"var(--fg)"}}>{label}</span>
    </button>
  );
}

function SectionHeader({ title, count }) {
  return (
    <div style={{
      display:"flex", justifyContent:"space-between", alignItems:"baseline",
      padding: "24px 4px 12px",
    }}>
      <h3 style={{
        fontFamily:"var(--font-body)", fontWeight: 600, fontSize: 13,
        letterSpacing: "0.04em", textTransform: "uppercase", margin: 0,
        color: "var(--fg)",
      }}>{title}</h3>
      {count != null && (
        <span style={{fontSize: 12, color:"var(--fg-muted)"}}>{count} active</span>
      )}
    </div>
  );
}

function TicketRow({ icon, title, meta, status }) {
  return (
    <div style={{
      background: "var(--bg-elev)", borderRadius: "var(--radius-md)",
      padding: 14, marginBottom: 8,
      display:"flex", alignItems:"center", gap: 14,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 999,
        background: "var(--lynra-ash)",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <i className={`ph-light ${icon}`} style={{fontSize: 20}}></i>
      </div>
      <div style={{flex: 1, minWidth: 0}}>
        <div style={{fontWeight: 600, fontSize: 14}}>{title}</div>
        <div style={{fontSize: 12, color:"var(--fg-muted)"}}>{meta}</div>
      </div>
      <span style={{
        fontSize: 11, fontWeight: 600, letterSpacing:"0.04em", textTransform:"uppercase",
        color: status === "In progress" ? "var(--lynra-umber)" : "var(--fg-muted)",
        background: status === "In progress" ? "var(--lynra-red-ember)" : "transparent",
        border: status === "In progress" ? "0" : "1px solid var(--border)",
        padding: "5px 10px", borderRadius: 999,
      }}>{status}</span>
    </div>
  );
}

function ActivityRow({ when, title, icon }) {
  return (
    <div style={{
      display:"flex", alignItems:"center", gap: 14,
      padding: "12px 4px", borderBottom: "1px solid var(--divider)",
    }}>
      <i className={`ph-light ${icon}`} style={{fontSize: 22, color:"var(--fg)"}}></i>
      <div style={{flex: 1}}>
        <div style={{fontWeight: 600, fontSize: 14}}>{title}</div>
        <div style={{fontSize: 12, color:"var(--fg-muted)"}}>{when}</div>
      </div>
      <span style={{fontFamily:"var(--font-display)", color:"var(--fg-muted)", fontSize: 18}}>→</span>
    </div>
  );
}

export { DashboardScreen };
if (typeof window !== "undefined") window.DashboardScreen = DashboardScreen;
