// Wing Gal app — flow screens: Booking, LiveSession, Chat
const { useState: useStateF, useEffect: useEffectF } = React;

function BookingFlow({ wing, onBack, onConfirm }) {
  const [step, setStep] = useStateF(0);
  const [duration, setDuration] = useStateF(2);
  const [time, setTime] = useStateF("9:00 PM");
  const total = wing.rate * duration;
  const titles = ["When & where", "Session details", "Payment & confirm"];
  return (
    <div style={{ width: "100%", minHeight: "100%", background: T.cream, display: "flex", flexDirection: "column", paddingTop: 54, paddingBottom: 100 }}>
      <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={step > 0 ? () => setStep(step - 1) : onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><Ico name="chevronLeft" size={22} color={T.ink} /></button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: T.coral, textTransform: "uppercase" }}>Booking {wing.name}</div>
          <div style={{ fontFamily: SERIF, fontSize: 22, color: T.ink, lineHeight: 1.1 }}>{titles[step]}</div>
        </div>
      </div>
      <div style={{ padding: "0 20px 20px", display: "flex", gap: 4 }}>
        {titles.map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? T.coral : T.sand }} />)}
      </div>
      <div style={{ flex: 1, padding: "0 20px" }} className="fade-up" key={step}>
        {step === 0 && <>
          <div style={lbl}>Date</div>
          <div className="scroll-area" style={{ display: "flex", gap: 10, marginBottom: 22, overflowX: "auto" }}>
            {["Tonight", "Tomorrow", "Sat", "Sun", "Mon", "Tue"].map((d, i) => (
              <div key={i} style={{ flexShrink: 0, minWidth: 72, padding: "12px 0", textAlign: "center", background: i === 0 ? T.ink : "#fff", color: i === 0 ? T.cream : T.ink, border: `1px solid ${i === 0 ? T.ink : T.sand}`, borderRadius: 12, fontSize: 13, fontWeight: 600 }}>
                <div>{d}</div><div style={{ fontSize: 18, fontFamily: SERIF, marginTop: 2 }}>{24 + i}</div>
              </div>
            ))}
          </div>
          <div style={lbl}>Start time</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 22 }}>
            {["7:00 PM", "8:00 PM", "9:00 PM", "9:30 PM", "10:00 PM", "11:00 PM"].map((t) => (
              <button key={t} onClick={() => setTime(t)} style={{ padding: "12px 0", borderRadius: 12, cursor: "pointer", background: time === t ? T.ink : "#fff", color: time === t ? T.cream : T.ink, border: `1px solid ${time === t ? T.ink : T.sand}`, fontSize: 13, fontWeight: 600 }}>{t}</button>
            ))}
          </div>
          <div style={lbl}>Where</div>
          <div style={{ background: "#fff", border: `1px solid ${T.sand}`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <Ico name="mapPin" size={18} color={T.coral} />
            <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>The Alley · 3325 Grand Ave</div><div style={{ fontSize: 12, color: T.ink + "99", marginTop: 2 }}>Oakland, CA · 0.6 mi from you</div></div>
            <Ico name="edit" size={16} color={T.ink + "77"} />
          </div>
        </>}
        {step === 1 && <>
          <div style={lbl}>How long do you need her?</div>
          <div style={{ background: "#fff", border: `1px solid ${T.sand}`, borderRadius: 14, padding: 20, marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <button onClick={() => setDuration(Math.max(1, duration - 1))} style={stepBtn}>−</button>
              <div style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 500, color: T.ink, lineHeight: 1 }}>{duration}<span style={{ fontSize: 18, color: T.ink + "99", marginLeft: 4 }}>{duration === 1 ? "hour" : "hours"}</span></div>
              <button onClick={() => setDuration(Math.min(8, duration + 1))} style={stepBtn}>+</button>
            </div>
            <div style={{ fontSize: 12, color: T.ink + "88", textAlign: "center" }}>Most bar / nightlife sessions: 2–3 hours</div>
          </div>
          <div style={lbl}>What's the vibe?</div>
          <textarea placeholder="Tell her anything helpful. Example: It's my first night out after a breakup. I want to feel fun, not fragile." style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: `1px solid ${T.sand}`, background: "#fff", fontSize: 13, color: T.ink, fontFamily: "inherit", minHeight: 100, resize: "none", outline: "none", lineHeight: 1.5, boxSizing: "border-box" }} />
          <div style={{ marginTop: 16, padding: 14, background: T.coral + "44", borderRadius: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Ico name="sparkles" size={16} color={T.coral} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 12, color: T.ink, lineHeight: 1.5 }}><b>She'll read this before she shows up.</b> The more specific, the better the night.</div>
          </div>
        </>}
        {step === 2 && <>
          <div style={{ background: "#fff", border: `1px solid ${T.sand}`, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center", borderBottom: `1px solid ${T.sand}` }}>
              <Avatar wing={wing} size={44} />
              <div style={{ flex: 1 }}><div style={{ fontFamily: SERIF, fontSize: 20, color: T.ink, lineHeight: 1 }}>{wing.name}</div><div style={{ fontSize: 12, color: T.ink + "88", marginTop: 2 }}>{wing.specialty}</div></div>
            </div>
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <SumRow label="When" value={`Tonight · ${time}`} /><SumRow label="Duration" value={`${duration} ${duration === 1 ? "hour" : "hours"}`} />
              <SumRow label="Where" value="The Alley, Oakland" /><SumRow label="Session rate" value={`$${wing.rate}/hr`} />
            </div>
          </div>
          <div style={lbl}>Payment method</div>
          <div style={{ background: "#fff", border: `1px solid ${T.sand}`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 28, borderRadius: 6, background: `linear-gradient(135deg, ${T.ink}, ${T.coral})` }} />
            <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>Visa · 4242</div><div style={{ fontSize: 11, color: T.ink + "88", marginTop: 1 }}>Expires 09/27</div></div>
            <Ico name="edit" size={16} color={T.ink + "77"} />
          </div>
          <div style={{ padding: "16px 18px", background: T.olive, color: T.cream, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div><div style={{ fontSize: 11, letterSpacing: "1px", opacity: 0.7, textTransform: "uppercase" }}>Total</div><div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 500, lineHeight: 1 }}>${total}</div></div>
            <div style={{ fontSize: 11, opacity: 0.7, textAlign: "right", maxWidth: 140 }}>No charge until your session begins.</div>
          </div>
        </>}
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <button onClick={step < 2 ? () => setStep(step + 1) : onConfirm} style={{ width: "100%", background: T.olive, color: "#fff", border: "none", padding: "18px", borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          {step < 2 ? "Continue" : `Confirm & book · $${total}`} <Ico name="arrowRight" size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}
const lbl = { fontSize: 13, fontWeight: 600, color: "#3A352099".replace("99", "aa"), marginBottom: 10 };
const stepBtn = { width: 40, height: 40, borderRadius: 999, border: `1px solid ${T.sand}`, background: "#fff", cursor: "pointer", fontSize: 20, color: T.ink };
function SumRow({ label, value }) {
  return <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: T.ink + "99" }}>{label}</span><span style={{ fontWeight: 600, color: T.ink }}>{value}</span></div>;
}

function LiveSession({ wing, onChat, onEnd }) {
  const [elapsed, setElapsed] = useStateF(0);
  useEffectF(() => { const t = setInterval(() => setElapsed((e) => e + 1), 1000); return () => clearInterval(t); }, []);
  const mins = Math.floor(elapsed / 60), secs = String(elapsed % 60).padStart(2, "0");
  return (
    <div style={{ width: "100%", minHeight: "100%", background: T.olive, color: T.cream, paddingTop: 54, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 24px 10px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#3ddc84", animation: "pulseRing 2s infinite" }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#3ddc84" }}>Session live</span>
        <span style={{ marginLeft: "auto", fontFamily: SERIF, fontSize: 18 }}>{mins}:{secs}</span>
      </div>
      <div style={{ padding: "10px 24px 0" }}>
        <div style={{ fontFamily: SERIF, fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.5px" }}>{wing.name} is with you.<br /><span style={{ color: T.coral, fontStyle: "italic" }}>Everything's tracked.</span></div>
      </div>
      <div style={{ margin: "24px 20px", borderRadius: 20, overflow: "hidden", flex: 1, minHeight: 200, position: "relative", background: `linear-gradient(135deg, ${T.velvet}88, ${T.olive}cc)` }}>
        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => <line key={i} x1={i * 35} y1={0} x2={i * 35 + 40} y2={300} stroke={T.cream + "22"} strokeWidth="1" />)}
          {[...Array(8)].map((_, i) => <line key={"h" + i} x1={0} y1={i * 40} x2={400} y2={i * 40 + 20} stroke={T.cream + "22"} strokeWidth="1" />)}
          <path d="M 80 230 Q 180 190 220 140 T 320 70" stroke={T.coral} strokeWidth="3" fill="none" strokeDasharray="6 4" />
          <circle cx="80" cy="230" r="10" fill={T.cream} /><circle cx="80" cy="230" r="5" fill={T.ink} />
          <circle cx="320" cy="70" r="14" fill={T.coral} /><circle cx="320" cy="70" r="7" fill="#fff" />
        </svg>
        <div style={{ position: "absolute", top: 16, left: 16, background: "#ffffff22", backdropFilter: "blur(12px)", padding: "8px 12px", borderRadius: 10, fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}><Ico name="mapPin" size={13} color={T.cream} /> The Alley, Oakland</div>
      </div>
      <div style={{ margin: "0 20px 12px", padding: 16, background: "#ffffff11", backdropFilter: "blur(10px)", border: `1px solid #ffffff22`, borderRadius: 16 }}>
        <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>Next check-in</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: SERIF, fontSize: 26 }}>in 14 min</div>
          <button style={{ background: T.cream, color: T.ink, border: "none", padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>I'm good ✓</button>
        </div>
      </div>
      <div style={{ padding: "12px 20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <button onClick={onChat} style={{ background: "#ffffff22", border: "none", color: T.cream, padding: "14px", borderRadius: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, fontWeight: 600 }}><Ico name="message" size={16} color={T.cream} /> Message {wing.name}</button>
        <button onClick={onEnd} style={{ background: T.sand, border: "none", color: T.ink, padding: "14px", borderRadius: 14, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>End session</button>
        <button style={{ gridColumn: "1 / -1", background: T.alert, border: "none", color: "#fff", padding: "16px", borderRadius: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, fontWeight: 700, letterSpacing: "0.5px" }}><Ico name="alert" size={18} color="#fff" /> I NEED HELP NOW</button>
      </div>
    </div>
  );
}

function ChatScreen({ wing, onBack }) {
  const [msgs, setMsgs] = useStateF([
    { from: "them", text: "Hey! I'm Aaliyah — got your booking. I'm 6 min out, walking over now. 🌹", time: "9:02 PM" },
    { from: "me", text: "Omg thank you. I'm so nervous, haven't done this before.", time: "9:03 PM" },
    { from: "them", text: "You booked me, which is the hardest step. I'll text when I'm inside. You've got this.", time: "9:03 PM" },
  ]);
  const [input, setInput] = useStateF("");
  const send = () => { if (!input.trim()) return; setMsgs([...msgs, { from: "me", text: input, time: "now" }]); setInput(""); };
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", paddingTop: 54 }}>
      <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${T.sand}`, background: "#fff" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><Ico name="chevronLeft" size={22} color={T.ink} /></button>
        <Avatar wing={wing} size={40} />
        <div style={{ flex: 1 }}><div style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: T.ink, lineHeight: 1 }}>{wing.name}</div><div style={{ fontSize: 11, color: "#2f9c6e", fontWeight: 600, marginTop: 2 }}>● Session live</div></div>
        <Ico name="phone" size={18} color={T.ink + "aa"} />
      </div>
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 10, background: T.cream, overflowY: "auto" }}>
        <div style={{ textAlign: "center", fontSize: 11, color: T.ink + "77", margin: "8px 0" }}>Friday, 9:00 PM · Session started</div>
        {msgs.map((m, i) => (
          <div key={i} style={{ alignSelf: m.from === "me" ? "flex-end" : "flex-start", maxWidth: "78%", display: "flex", flexDirection: "column", gap: 2, animation: "slideIn 0.3s ease-out both" }}>
            <div style={{ padding: "10px 14px", background: m.from === "me" ? T.ink : "#fff", color: m.from === "me" ? T.cream : T.ink, border: m.from === "me" ? "none" : `1px solid ${T.sand}`, borderRadius: 18, borderBottomRightRadius: m.from === "me" ? 4 : 18, borderBottomLeftRadius: m.from === "them" ? 4 : 18, fontSize: 14, lineHeight: 1.4 }}>{m.text}</div>
            <div style={{ fontSize: 10, color: T.ink + "66", textAlign: m.from === "me" ? "right" : "left" }}>{m.time}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 14px 24px", background: "#fff", borderTop: `1px solid ${T.sand}`, display: "flex", alignItems: "center", gap: 10 }}>
        <Ico name="paperclip" size={20} color={T.ink + "77"} />
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Message…" style={{ flex: 1, padding: "12px 16px", borderRadius: 999, border: `1px solid ${T.sand}`, background: T.cream, fontSize: 14, outline: "none", color: T.ink, fontFamily: "inherit" }} />
        <button onClick={send} style={{ background: T.olive, border: "none", width: 40, height: 40, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Ico name="send" size={16} color="#fff" /></button>
      </div>
    </div>
  );
}

Object.assign(window, { BookingFlow, LiveSession, ChatScreen });
