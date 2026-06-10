// Wing Gal app — shared tokens, data, and chrome components.
const T = {
  bubbleGum: "#F8AFB8", cream: "#F5CBAF", olive: "#5D5821", negroni: "#FE4213",
  coral: "#F09457", sand: "#D6CBB6", velvet: "#B9A7AC", ink: "#3A3520",
  bone: "#FAEAD8", paper: "#EFD9C2", white: "#FFFFFF",
  // aliases
  primary: "#5D5821", accent: "#F09457", alert: "#FE4213",
};
const SERIF = '"Cormorant Garamond", Georgia, serif';

const WING_WOMEN = [
  { id: 1, name: "Aaliyah", tier: 3, rating: 4.9, sessions: 127, distance: "0.4 mi", eta: "6 min",
    specialty: "Confidence Booster",
    bio: "Former event host in NYC. I read rooms for a living. If you want to walk in somewhere and own it, I've got you.",
    tags: ["Nightlife", "New city", "Solo travel"], rate: 79, online: true, color: T.coral, initials: "AA" },
  { id: 2, name: "Priya", tier: 5, rating: 5.0, sessions: 204, distance: "1.1 mi", eta: "11 min",
    specialty: "Emotional Support Wing",
    bio: "Trauma-informed, licensed background. For the nights that matter — first night out after a breakup, first time back out, the hard ones.",
    tags: ["Post-breakup", "Trauma-informed", "High stakes"], rate: 129, online: true, color: T.olive, initials: "PS" },
  { id: 3, name: "Marisol", tier: 2, rating: 4.8, sessions: 58, distance: "0.7 mi", eta: "8 min",
    specialty: "Social Companion",
    bio: "Just moved here myself six months ago. I know the new-city feeling and I know the best bars that actually feel safe.",
    tags: ["Just arrived", "Bars", "Conversation"], rate: 49, online: true, color: T.velvet, initials: "MR" },
  { id: 4, name: "Jules", tier: 3, rating: 4.9, sessions: 91, distance: "2.0 mi", eta: "14 min",
    specialty: "Confidence Booster",
    bio: "I'll walk up to anyone. Stand-up comic by day. Your wingwoman by night. Let's go.",
    tags: ["Approach coaching", "Dates", "Fun"], rate: 79, online: false, color: T.bubbleGum, initials: "JL" },
];

// ---------- PHONE FRAME ----------
function PhoneFrame({ children }) {
  return (
    <div style={{ width: 380, height: 780, background: T.ink, borderRadius: 52, padding: 10,
      boxShadow: "0 40px 80px -20px rgba(58,53,32,0.4), 0 20px 40px -20px rgba(58,53,32,0.3)", position: "relative" }}>
      <div style={{ width: "100%", height: "100%", background: T.bone, borderRadius: 44, overflow: "hidden", position: "relative" }}>
        {/* status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 44, zIndex: 50, display: "flex",
          alignItems: "center", justifyContent: "space-between", padding: "14px 28px 0", fontSize: 14, fontWeight: 600,
          color: T.ink, pointerEvents: "none" }}>
          <span>9:04</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 11 }}>●●●●</span><span style={{ fontSize: 11 }}>5G</span>
            <span style={{ display: "inline-block", width: 22, height: 11, border: `1.5px solid ${T.ink}`, borderRadius: 3, position: "relative" }}>
              <span style={{ position: "absolute", inset: 1, background: T.ink, width: "80%", borderRadius: 1 }} />
            </span>
          </span>
        </div>
        {/* dynamic island */}
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 110, height: 32, background: T.ink, borderRadius: 20, zIndex: 100 }} />
        <div className="scroll-area" style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Avatar({ wing, size = 56 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 999, background: `linear-gradient(135deg, ${wing.color}, ${wing.color}bb)`,
      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: SERIF,
      fontSize: size * 0.38, fontWeight: 500, flexShrink: 0, position: "relative" }}>
      {wing.initials}
      {wing.online && <span style={{ position: "absolute", bottom: 2, right: 2, width: size * 0.2, height: size * 0.2, borderRadius: 999, background: "#2f9c6e", border: "2px solid #fff" }} />}
    </div>
  );
}

function TierBadge({ tier }) {
  const info = tier === 5 ? { label: "Certified", color: T.olive } :
               tier === 3 ? { label: "Confidence", color: T.coral } :
               { label: "Companion", color: T.velvet };
  return (
    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase",
      background: info.color, color: "#fff", padding: "3px 7px", borderRadius: 999 }}>{info.label}</span>
  );
}

function BottomNav({ active, onNav }) {
  const items = [
    { id: "home", icon: "home", label: "Home" },
    { id: "bookings", icon: "calendar", label: "Bookings" },
    { id: "chat", icon: "message", label: "Messages" },
    { id: "account", icon: "user", label: "You" },
  ];
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 72, background: "#fff",
      borderTop: `1px solid ${T.sand}`, display: "flex", alignItems: "flex-start", paddingTop: 12, zIndex: 40 }}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button key={it.id} onClick={() => onNav && onNav(it.id)} style={{ flex: 1, background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: on ? T.olive : T.ink + "77" }}>
            <Ico name={it.icon} size={22} color={on ? T.olive : T.ink + "77"} fill={on ? T.olive + "22" : "none"} />
            <span style={{ fontSize: 10, fontWeight: on ? 700 : 500 }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { T, SERIF, WING_WOMEN, PhoneFrame, Avatar, TierBadge, BottomNav });
