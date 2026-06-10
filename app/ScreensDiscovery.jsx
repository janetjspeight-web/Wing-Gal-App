// Wing Gal app — discovery screens: Onboarding, Home, WingProfile
const { useState } = React;

function ClientOnboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const steps = [
    { eyebrow: "Welcome", headline: "Sisterhood.\nOn demand.",
      body: "Real, trained women who show up in-person when you need someone in your corner. Not a dating app. Not a chatbot. A human being.",
      cta: "I'm in", bg: T.olive, fg: T.cream, accent: T.coral, icon: "wing" },
    { eyebrow: "What she isn't", headline: "Not a match.\nNot an alert.\nNot an escort.",
      body: "Wing Women are certified companions trained for nightlife, solo travel, new-city moments, and anywhere else you'd rather not walk in alone.",
      cta: "Got it", bg: T.sand, fg: T.ink, accent: T.coral, icon: "shieldRose" },
    { eyebrow: "Tell us about you", headline: "What brings you\nhere tonight?",
      cta: "Continue", bg: T.cream, fg: T.ink, accent: T.coral, form: "quiz", icon: "sparkles" },
    { eyebrow: "One more thing", headline: "Where\nare you?",
      body: "We'll match you with Wing Women within a 5-mile radius. You can change your city any time.",
      cta: "Let's go", bg: T.velvet, fg: T.ink, accent: T.coral, form: "location", icon: "skyline" },
  ];
  const s = steps[step];
  return (
    <div style={{ width: "100%", height: "100%", background: s.bg, color: s.fg, display: "flex", flexDirection: "column", padding: "60px 28px 28px", position: "relative" }}>
      <div style={{ position: "absolute", top: 54, left: 28, right: 28, display: "flex", gap: 6 }}>
        {steps.map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? s.accent : s.fg + "22", transition: "background 0.3s" }} />)}
      </div>
      <div style={{ marginTop: 48, flex: 1, display: "flex", flexDirection: "column" }} className="fade-up" key={step}>
        <div style={{ marginBottom: 20 }}><CollageIcon name={s.icon} size={84} /></div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: s.accent, marginBottom: 16 }}>{s.eyebrow}</div>
        <div style={{ fontFamily: SERIF, fontSize: 48, lineHeight: 1.02, fontWeight: 500, letterSpacing: "-1.5px", whiteSpace: "pre-line", marginBottom: 20 }}>{s.headline}</div>
        {s.body && <div style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.8, marginBottom: 24 }}>{s.body}</div>}
        {s.form === "quiz" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
            {[{ icon: "disco", label: "Going out — nightlife or a bar" },
              { icon: "suitcase", label: "I'm traveling solo" },
              { icon: "skyline", label: "I just moved here" },
              { icon: "heartKey", label: "First night out in a while" },
              { icon: "chatBubbles", label: "Honestly, I just want company" }].map((o, i) => <QuizOption key={i} icon={o.icon} label={o.label} />)}
          </div>
        )}
        {s.form === "location" && (
          <div style={{ marginTop: 8 }}>
            <div style={{ background: s.fg + "11", border: `1px solid ${s.fg}33`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <Ico name="mapPin" size={18} color={s.accent} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600 }}>Oakland, CA</div><div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>Detected from your location</div></div>
              <Ico name="check" size={18} color={s.accent} />
            </div>
          </div>
        )}
      </div>
      <button onClick={() => step < steps.length - 1 ? setStep(step + 1) : onDone()}
        style={{ background: s.bg === T.olive ? T.cream : T.olive, color: s.bg === T.olive ? T.olive : "#fff", border: "none", cursor: "pointer",
          padding: "18px 24px", borderRadius: 999, fontSize: 15, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {s.cta} <Ico name="arrowRight" size={18} color={s.bg === T.olive ? T.olive : "#fff"} />
      </button>
      {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: "transparent", border: "none", color: s.fg, fontSize: 13, marginTop: 12, cursor: "pointer", opacity: 0.6 }}>Back</button>}
    </div>
  );
}

function QuizOption({ icon, label }) {
  const [sel, setSel] = useState(false);
  return (
    <button onClick={() => setSel(!sel)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 14, cursor: "pointer",
      background: sel ? T.ink : "#fff", color: sel ? T.cream : T.ink, border: `1.5px solid ${sel ? T.ink : T.sand}`, fontSize: 14, fontWeight: 500, textAlign: "left", transition: "all 0.15s" }}>
      <span style={{ flexShrink: 0, transform: "translateY(2px)" }}><CollageIcon name={icon} size={36} /></span>
      <span style={{ flex: 1 }}>{label}</span>
      {sel && <Ico name="check" size={16} color={T.cream} />}
    </button>
  );
}

function ClientHome({ onSelect, onNav }) {
  return (
    <div style={{ width: "100%", minHeight: "100%", paddingTop: 54, paddingBottom: 80 }}>
      <div style={{ padding: "20px 24px 12px", position: "relative" }}>
        <div style={{ position: "absolute", top: 8, right: 20, transform: "rotate(8deg)" }}><CollageIcon name="rose" size={56} /></div>
        <div style={{ fontSize: 13, color: T.ink + "99", fontWeight: 500 }}>Friday night · Oakland</div>
        <div style={{ fontFamily: SERIF, fontSize: 32, lineHeight: 1.05, letterSpacing: "-1px", color: T.ink, marginTop: 4, paddingRight: 60 }}>
          Hey Sarah. <br /><span style={{ fontStyle: "italic", color: T.coral }}>Who's with you tonight?</span>
        </div>
      </div>
      <div className="scroll-area" style={{ display: "flex", gap: 8, padding: "8px 24px 16px", overflowX: "auto" }}>
        {[{ label: "Near me" }, { label: "Tonight" }, { label: "Confidence", icon: "disco" }, { label: "Emotional", icon: "heartKey" }, { label: "Under $60" }].map((f, i) => (
          <div key={i} style={{ flexShrink: 0, padding: "8px 14px", background: i === 0 ? T.ink : "#fff", color: i === 0 ? T.cream : T.ink, border: `1px solid ${i === 0 ? T.ink : T.sand}`, borderRadius: 999, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
            {f.icon && <span style={{ display: "inline-flex" }}><CollageIcon name={f.icon} size={20} /></span>}{f.label}
          </div>
        ))}
      </div>
      <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        {WING_WOMEN.map((w, idx) => (
          <button key={w.id} onClick={() => onSelect(w)} style={{ background: "#fff", border: `1px solid ${T.sand}`, borderRadius: 20, padding: 16, cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: 12, animation: `fadeUp 0.4s ease-out ${idx * 0.06}s both` }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Avatar wing={w} size={56} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: T.ink, lineHeight: 1 }}>{w.name}</div><TierBadge tier={w.tier} />
                </div>
                <div style={{ fontSize: 12, color: T.ink + "88", marginTop: 4 }}>{w.specialty}</div>
                <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 11, color: T.ink + "aa", fontWeight: 500 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Ico name="star" size={11} color={T.coral} fill={T.coral} /> {w.rating}</span><span>·</span><span>{w.sessions} sessions</span><span>·</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Ico name="mapPin" size={11} color={T.ink + "aa"} /> {w.distance}</span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: T.ink + "66", fontWeight: 500 }}>from</div>
                <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: T.ink, lineHeight: 1 }}>${w.rate}</div>
                <div style={{ fontSize: 10, color: T.ink + "66" }}>/session</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: w.online ? T.bubbleGum + "66" : T.sand + "44", borderRadius: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: T.ink }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: w.online ? "#2f9c6e" : T.ink + "55" }} />
                {w.online ? `Available now · ${w.eta} away` : "Off-duty"}
              </div>
              <Ico name="chevronRight" size={16} color={T.ink + "77"} />
            </div>
          </button>
        ))}
      </div>
      <BottomNav active="home" onNav={onNav} />
    </div>
  );
}

function WingProfile({ wing, onBack, onBook }) {
  return (
    <div style={{ width: "100%", minHeight: "100%", paddingBottom: 100 }}>
      <div style={{ height: 200, background: `linear-gradient(150deg, ${wing.color}, ${wing.color}99)`, position: "relative", display: "flex", alignItems: "flex-end" }}>
        <button onClick={onBack} style={{ position: "absolute", top: 54, left: 20, width: 38, height: 38, borderRadius: 999, background: "#ffffffcc", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(8px)" }}>
          <Ico name="chevronLeft" size={20} color={T.ink} />
        </button>
        <div style={{ position: "absolute", top: 30, right: 16, transform: "rotate(-8deg)", opacity: 0.9 }}><CollageIcon name="sparkles" size={70} /></div>
        <div style={{ padding: "0 24px 20px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 600, lineHeight: 1, textShadow: "0 2px 12px rgba(0,0,0,.2)" }}>{wing.name}</div><TierBadge tier={wing.tier} />
          </div>
          <div style={{ fontSize: 14, marginTop: 6, opacity: 0.95, fontWeight: 500 }}>{wing.specialty}</div>
        </div>
      </div>
      <div style={{ padding: "18px 24px", display: "flex", gap: 0, background: "#fff", borderBottom: `1px solid ${T.sand}` }}>
        {[{ l: "Rating", v: wing.rating, i: "star" }, { l: "Sessions", v: wing.sessions, i: "award" }, { l: "Away", v: wing.eta, i: "navigation" }].map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? `1px solid ${T.sand}` : "none" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}><Ico name={s.i} size={16} color={T.coral} /></div>
            <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: T.ink, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: 10, color: T.ink + "88", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "24px 24px 0" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: T.coral, marginBottom: 10 }}>In her words</div>
        <div style={{ fontFamily: SERIF, fontSize: 22, lineHeight: 1.25, color: T.ink, fontStyle: "italic" }}>"{wing.bio}"</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
          {wing.tags.map((t) => <span key={t} style={{ padding: "7px 13px", background: T.bone, border: `1px solid ${T.sand}`, borderRadius: 999, fontSize: 12, fontWeight: 600, color: T.ink }}>{t}</span>)}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 24px 24px", background: "linear-gradient(to top, #FAEAD8 70%, transparent)", display: "flex", gap: 12, alignItems: "center" }}>
        <div><div style={{ fontSize: 11, color: T.ink + "88" }}>from</div><div style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: T.ink, lineHeight: 1 }}>${wing.rate}</div></div>
        <button onClick={onBook} style={{ flex: 1, background: T.olive, color: "#fff", border: "none", padding: "18px", borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          Book {wing.name} <Ico name="arrowRight" size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { ClientOnboarding, ClientHome, WingProfile });
