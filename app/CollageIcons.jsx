// Wing Gal — Collage Icon System (hand-cut composite SVG illustrations)
// 16 icons + the Star4 "twinkle" sticker. Self-contained: palette baked in.
// Usage:  <CollageIcon name="wing" size={84} rotate={-6} />
// Icon names: wing, bow, martini, rose, disco, heel, lipstick, heartKey,
//             phone, suitcase, skyline, chatBubbles, hands, eye, sparkles, shieldRose
const TOKENS = {
  bubbleGum: "#F8AFB8", peachesAndCream: "#F5CBAF", dirtyMartini: "#5D5821",
  negroni: "#FE4213", spritz: "#F09457", sand: "#D6CBB6", velvet: "#B9A7AC",
  ink: "#3A3520", bone: "#FAEAD8",
};

function CollageIcon({ name, size = 64, rotate = 0 }) {
  const icons = {
    // ✦ Going out / nightlife
    martini: (
      <g transform={`rotate(${rotate || -4} 32 32)`}>
        {/* glass cone */}
        <path d="M 14 18 L 50 18 L 33 38 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* olive on toothpick */}
        <line x1="33" y1="32" x2="44" y2="14" stroke={TOKENS.ink} strokeWidth="1.2" />
        <circle cx="44" cy="14" r="3.5" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.2" />
        <circle cx="43" cy="13" r="0.8" fill={TOKENS.bone} />
        {/* stem */}
        <line x1="33" y1="38" x2="33" y2="52" stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* base */}
        <ellipse cx="33" cy="53" rx="11" ry="2" fill="none" stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* surface squiggle */}
        <path d="M 18 22 Q 23 24 28 22 T 38 22 Q 43 24 47 22" fill="none" stroke={TOKENS.spritz} strokeWidth="1.2" opacity="0.7" />
        {/* sticker star */}
        <Star4 cx={12} cy={42} r={4} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Solo travel
    suitcase: (
      <g transform={`rotate(${rotate || 3} 32 32)`}>
        {/* handle */}
        <path d="M 24 14 Q 24 8 32 8 Q 40 8 40 14" fill="none" stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* body */}
        <rect x="12" y="16" width="40" height="32" rx="3" fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* horizontal stripe */}
        <line x1="12" y1="28" x2="52" y2="28" stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* tag */}
        <path d="M 41 22 L 49 21 L 50 26 L 42 27 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.2" />
        <circle cx="42" cy="24" r="0.8" fill={TOKENS.ink} />
        {/* sticker */}
        <Star4 cx={50} cy={42} r={4} fill={TOKENS.spritz} stroke={TOKENS.ink} />
        <circle cx="20" cy="40" r="3" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.2" />
      </g>
    ),

    // ✦ New city / skyline
    skyline: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        {/* buildings */}
        <rect x="10" y="22" width="10" height="30" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.6" />
        <rect x="20" y="14" width="12" height="38" fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.6" />
        <rect x="32" y="26" width="8" height="26" fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" />
        <rect x="40" y="18" width="14" height="34" fill={TOKENS.velvet} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* windows */}
        <rect x="23" y="20" width="2" height="3" fill={TOKENS.ink} />
        <rect x="27" y="20" width="2" height="3" fill={TOKENS.ink} />
        <rect x="23" y="28" width="2" height="3" fill={TOKENS.ink} />
        <rect x="44" y="24" width="2" height="3" fill={TOKENS.ink} />
        <rect x="48" y="24" width="2" height="3" fill={TOKENS.ink} />
        <rect x="44" y="32" width="2" height="3" fill={TOKENS.ink} />
        {/* moon sticker */}
        <path d="M 50 12 A 5 5 0 1 0 54 16 A 4 4 0 1 1 50 12 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.2" />
      </g>
    ),

    // ✦ Heart with key (post-breakup, opening up)
    heartKey: (
      <g transform={`rotate(${rotate || -6} 32 32)`}>
        {/* heart */}
        <path d="M 32 50 L 14 32 Q 8 25 14 19 Q 22 13 32 22 Q 42 13 50 19 Q 56 25 50 32 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* keyhole */}
        <circle cx="32" cy="28" r="3" fill={TOKENS.ink} />
        <rect x="31" y="29" width="2" height="6" fill={TOKENS.ink} />
        {/* key dangling on string */}
        <line x1="32" y1="50" x2="50" y2="58" stroke={TOKENS.ink} strokeWidth="0.8" strokeDasharray="2 1.5" />
        <circle cx="52" cy="58" r="3" fill="none" stroke={TOKENS.ink} strokeWidth="1.6" />
        <line x1="55" y1="58" x2="60" y2="58" stroke={TOKENS.ink} strokeWidth="1.6" />
        <line x1="58" y1="58" x2="58" y2="60" stroke={TOKENS.ink} strokeWidth="1.2" />
        <line x1="60" y1="58" x2="60" y2="61" stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* sticker */}
        <Star4 cx={12} cy={14} r={3} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Conversation / company
    chatBubbles: (
      <g transform={`rotate(${rotate || -2} 32 32)`}>
        {/* back bubble */}
        <path d="M 32 12 L 56 12 Q 60 12 60 16 L 60 30 Q 60 34 56 34 L 44 34 L 38 40 L 38 34 L 32 34 Q 28 34 28 30 L 28 16 Q 28 12 32 12 Z"
              fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* front bubble */}
        <path d="M 8 24 L 32 24 Q 36 24 36 28 L 36 42 Q 36 46 32 46 L 22 46 L 16 52 L 16 46 L 8 46 Q 4 46 4 42 L 4 28 Q 4 24 8 24 Z"
              fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* dots in front bubble */}
        <circle cx="14" cy="35" r="1.6" fill={TOKENS.ink} />
        <circle cx="20" cy="35" r="1.6" fill={TOKENS.ink} />
        <circle cx="26" cy="35" r="1.6" fill={TOKENS.ink} />
        {/* sticker */}
        <Star4 cx={56} cy={48} r={3.5} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Rose (sisterhood, the brand bouquet)
    rose: (
      <g transform={`rotate(${rotate || 4} 32 32)`}>
        {/* stem */}
        <path d="M 32 30 Q 30 42 34 56" fill="none" stroke={TOKENS.dirtyMartini} strokeWidth="1.8" />
        {/* leaf */}
        <path d="M 33 42 Q 42 38 44 46 Q 38 48 33 44 Z" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* outer petals */}
        <circle cx="32" cy="22" r="14" fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* inner spirals */}
        <path d="M 32 14 Q 38 16 38 22 Q 38 28 32 28 Q 26 28 26 22 Q 26 18 30 17" fill="none" stroke={TOKENS.ink} strokeWidth="1.2" />
        <circle cx="32" cy="22" r="3" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* sticker */}
        <Star4 cx={50} cy={14} r={3} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Phone (booking the gal)
    phone: (
      <g transform={`rotate(${rotate || -8} 32 32)`}>
        {/* receiver */}
        <path d="M 16 14 Q 14 12 16 10 L 22 8 Q 24 8 26 10 L 30 16 Q 31 18 29 20 L 26 22 Q 30 30 38 38 L 42 36 Q 44 34 46 36 L 52 40 Q 54 42 54 44 L 52 50 Q 50 54 46 52 Q 28 46 16 28 Q 12 22 16 14 Z"
              fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* curly cord */}
        <path d="M 52 50 Q 60 52 56 58 Q 50 60 56 64" fill="none" stroke={TOKENS.ink} strokeWidth="1.4" />
        {/* sticker */}
        <Star4 cx={50} cy={14} r={3.5} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
        {/* small star */}
        <Star4 cx={14} cy={42} r={2} fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Disco ball (going out)
    disco: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        {/* ball */}
        <circle cx="32" cy="34" r="16" fill={TOKENS.velvet} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* facets */}
        <line x1="16" y1="34" x2="48" y2="34" stroke={TOKENS.ink} strokeWidth="0.8" />
        <line x1="20" y1="22" x2="44" y2="46" stroke={TOKENS.ink} strokeWidth="0.8" />
        <line x1="20" y1="46" x2="44" y2="22" stroke={TOKENS.ink} strokeWidth="0.8" />
        <ellipse cx="32" cy="34" rx="16" ry="6" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        <ellipse cx="32" cy="34" rx="6" ry="16" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        {/* highlight squares */}
        <rect x="22" y="26" width="3" height="3" fill={TOKENS.bubbleGum} />
        <rect x="38" y="40" width="3" height="3" fill={TOKENS.peachesAndCream} />
        <rect x="40" y="28" width="2" height="2" fill={TOKENS.spritz} />
        {/* hanger */}
        <line x1="32" y1="18" x2="32" y2="10" stroke={TOKENS.ink} strokeWidth="1.2" />
        <circle cx="32" cy="9" r="1.5" fill={TOKENS.ink} />
        {/* sparkles */}
        <Star4 cx={50} cy={20} r={3} fill={TOKENS.spritz} stroke={TOKENS.ink} />
        <Star4 cx={12} cy={28} r={2.5} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Heel (getting ready)
    heel: (
      <g transform={`rotate(${rotate || -3} 32 32)`}>
        {/* shoe sole */}
        <path d="M 8 38 Q 8 32 16 30 L 44 28 Q 54 28 56 36 L 50 40 Q 36 42 24 42 L 14 42 Q 8 42 8 38 Z"
              fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* heel */}
        <path d="M 50 40 L 50 54 L 47 54 L 47 41" fill={TOKENS.ink} stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* opening curve */}
        <path d="M 16 30 Q 24 22 36 24" fill="none" stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* sticker */}
        <Star4 cx={14} cy={20} r={3.5} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Lipstick kiss
    lipstick: (
      <g transform={`rotate(${rotate || 6} 32 32)`}>
        {/* tube */}
        <rect x="22" y="32" width="14" height="20" rx="1.5" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* tube band */}
        <rect x="22" y="36" width="14" height="2" fill={TOKENS.spritz} />
        {/* bullet */}
        <path d="M 22 32 L 36 32 L 36 22 Q 36 18 32 16 Q 28 14 26 18 L 22 28 Z"
              fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* kiss mark */}
        <path d="M 44 22 Q 48 20 52 22 Q 48 26 50 28 Q 46 28 44 26 Z" fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1" />
        <path d="M 44 22 Q 42 24 44 26" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        {/* star */}
        <Star4 cx={12} cy={28} r={3} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Wing (the brand mark — sisterhood, having backup)
    wing: (
      <g transform={`rotate(${rotate || -6} 32 32)`}>
        {/* main wing arc — outer silhouette */}
        <path d="M 8 44 Q 10 22 28 12 Q 46 6 56 18 Q 58 22 54 24 Q 48 26 42 30 Q 50 30 54 34 Q 56 38 50 40 Q 42 40 36 42 Q 44 44 46 50 Q 46 54 40 54 Q 30 54 20 52 Q 10 50 8 44 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* primary feathers (top row, longest) */}
        <path d="M 18 18 Q 22 14 26 18 Q 24 26 18 28 Q 14 26 18 18 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 28 14 Q 32 10 36 14 Q 34 24 28 26 Q 24 22 28 14 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 38 12 Q 44 10 48 16 Q 44 26 38 26 Q 34 22 38 12 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.2" strokeLinejoin="round" />
        {/* secondary feather details — center vein lines */}
        <line x1="22" y1="18" x2="22" y2="26" stroke={TOKENS.ink} strokeWidth="0.8" />
        <line x1="32" y1="14" x2="31" y2="24" stroke={TOKENS.ink} strokeWidth="0.8" />
        <line x1="43" y1="14" x2="42" y2="24" stroke={TOKENS.ink} strokeWidth="0.8" />
        {/* lower fluff feathers (rounded scallops) */}
        <path d="M 16 40 Q 20 36 22 42 Q 18 44 16 40 Z" fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.1" />
        <path d="M 24 44 Q 28 40 30 46 Q 26 48 24 44 Z" fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.1" />
        <path d="M 32 46 Q 36 42 38 48 Q 34 50 32 46 Z" fill={TOKENS.spritz} stroke={TOKENS.ink} strokeWidth="1.1" />
        {/* sticker stars — twinkles in the air around the wing */}
        <Star4 cx={56} cy={10} r={4} fill={TOKENS.spritz} stroke={TOKENS.ink} />
        <Star4 cx={6} cy={20} r={2.5} fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} />
        <Star4 cx={58} cy={48} r={3} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Bow (getting ready, the gift, soft femme)
    bow: (
      <g transform={`rotate(${rotate || -4} 32 32)`}>
        {/* left ribbon loop */}
        <path d="M 28 28 Q 16 18 8 22 Q 4 26 8 32 Q 4 38 8 42 Q 16 46 28 36 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* right ribbon loop */}
        <path d="M 36 28 Q 48 18 56 22 Q 60 26 56 32 Q 60 38 56 42 Q 48 46 36 36 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* loop inner shadows / fold lines */}
        <path d="M 14 26 Q 20 28 26 30" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        <path d="M 14 38 Q 20 36 26 34" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        <path d="M 50 26 Q 44 28 38 30" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        <path d="M 50 38 Q 44 36 38 34" fill="none" stroke={TOKENS.ink} strokeWidth="0.8" />
        {/* center knot */}
        <rect x="27" y="24" width="10" height="16" rx="1.5" fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1.6" />
        {/* knot crease */}
        <line x1="32" y1="25" x2="32" y2="39" stroke={TOKENS.ink} strokeWidth="0.8" />
        {/* left trailing tail */}
        <path d="M 28 38 Q 22 50 18 58 L 14 56 Q 18 48 24 38 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.4" strokeLinejoin="round" />
        {/* right trailing tail */}
        <path d="M 36 38 Q 42 50 46 58 L 50 56 Q 46 48 40 38 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.4" strokeLinejoin="round" />
        {/* tail tips (notched V) */}
        <path d="M 14 56 L 18 58 L 16 60 Z" fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 50 56 L 46 58 L 48 60 Z" fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.2" strokeLinejoin="round" />
        {/* sticker star */}
        <Star4 cx={54} cy={12} r={3.5} fill={TOKENS.spritz} stroke={TOKENS.ink} />
        <Star4 cx={10} cy={14} r={2.5} fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Hand-holding (kept as alt for sisterhood-specific moments)
    hands: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        {/* left hand (peach) */}
        <path d="M 6 28 L 12 28 L 12 22 Q 12 18 16 18 Q 20 18 20 22 L 20 26 L 22 24 Q 26 22 28 26 L 28 36 Q 28 42 22 44 L 8 44 Q 4 42 4 36 Z"
              fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* right hand (bubble gum) */}
        <path d="M 58 28 L 52 28 L 52 22 Q 52 18 48 18 Q 44 18 44 22 L 44 26 L 42 24 Q 38 22 36 26 L 36 36 Q 36 42 42 44 L 56 44 Q 60 42 60 36 Z"
              fill={TOKENS.bubbleGum} stroke={TOKENS.ink} strokeWidth="1.6" strokeLinejoin="round" />
        {/* clasp star */}
        <Star4 cx={32} cy={34} r={5} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Eye (being seen / being there)
    eye: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        {/* almond */}
        <path d="M 8 32 Q 32 14 56 32 Q 32 50 8 32 Z" fill={TOKENS.peachesAndCream} stroke={TOKENS.ink} strokeWidth="1.8" strokeLinejoin="round" />
        {/* iris */}
        <circle cx="32" cy="32" r="10" fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.4" />
        <circle cx="32" cy="32" r="4" fill={TOKENS.ink} />
        {/* highlight */}
        <circle cx="29" cy="29" r="1.6" fill={TOKENS.bone} />
        {/* lashes */}
        <line x1="14" y1="22" x2="11" y2="18" stroke={TOKENS.ink} strokeWidth="1.2" />
        <line x1="22" y1="18" x2="20" y2="13" stroke={TOKENS.ink} strokeWidth="1.2" />
        <line x1="32" y1="16" x2="32" y2="11" stroke={TOKENS.ink} strokeWidth="1.2" />
        <line x1="42" y1="18" x2="44" y2="13" stroke={TOKENS.ink} strokeWidth="1.2" />
        <line x1="50" y1="22" x2="53" y2="18" stroke={TOKENS.ink} strokeWidth="1.2" />
        {/* tear-star */}
        <Star4 cx={50} cy={46} r={3} fill={TOKENS.spritz} stroke={TOKENS.ink} />
      </g>
    ),

    // ✦ Sparkle constellation (general magic)
    sparkles: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        <Star4 cx={32} cy={20} r={9} fill={TOKENS.spritz} stroke={TOKENS.ink} sw={1.6} />
        <Star4 cx={16} cy={42} r={5} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} sw={1.4} />
        <Star4 cx={48} cy={44} r={6} fill={TOKENS.velvet} stroke={TOKENS.ink} sw={1.4} />
        <circle cx="50" cy="14" r="1.6" fill={TOKENS.ink} />
        <circle cx="14" cy="20" r="1.2" fill={TOKENS.ink} />
        <circle cx="32" cy="56" r="1.4" fill={TOKENS.ink} />
      </g>
    ),

    // ✦ Shield with rose (safety)
    shieldRose: (
      <g transform={`rotate(${rotate || 0} 32 32)`}>
        {/* shield */}
        <path d="M 32 8 L 50 14 L 50 32 Q 50 46 32 56 Q 14 46 14 32 L 14 14 Z"
              fill={TOKENS.dirtyMartini} stroke={TOKENS.ink} strokeWidth="1.8" strokeLinejoin="round" />
        {/* small rose center */}
        <circle cx="32" cy="30" r="7" fill={TOKENS.negroni} stroke={TOKENS.ink} strokeWidth="1.4" />
        <path d="M 32 24 Q 36 26 36 30 Q 36 34 32 34 Q 28 34 28 30 Q 28 27 30 25" fill="none" stroke={TOKENS.ink} strokeWidth="1" />
        <circle cx="32" cy="30" r="1.5" fill={TOKENS.dirtyMartini} />
        {/* rays */}
        <line x1="32" y1="14" x2="32" y2="18" stroke={TOKENS.spritz} strokeWidth="1.4" />
        <line x1="22" y1="20" x2="24" y2="22" stroke={TOKENS.spritz} strokeWidth="1.4" />
        <line x1="42" y1="20" x2="40" y2="22" stroke={TOKENS.spritz} strokeWidth="1.4" />
        {/* sticker */}
        <Star4 cx={52} cy={46} r={3} fill={TOKENS.bubbleGum} stroke={TOKENS.ink} />
      </g>
    ),
  };

  return (
    <svg
      width={size} height={size} viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
    >
      {icons[name] || null}
    </svg>
  );
}

// 4-pointed sticker star (Chani signature). Pinched-x shape, not pointy-5-star.
function Star4({ cx, cy, r, fill, stroke = "#3A3520", sw = 1.2 }) {
  // Pinch creates the iconic "twinkle" look
  const p = r * 0.42;
  const path = `M ${cx} ${cy - r} Q ${cx + p} ${cy - p} ${cx + r} ${cy} Q ${cx + p} ${cy + p} ${cx} ${cy + r} Q ${cx - p} ${cy + p} ${cx - r} ${cy} Q ${cx - p} ${cy - p} ${cx} ${cy - r} Z`;
  return <path d={path} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />;
}

// Expose globally for cross-file Babel scripts
window.CollageIcon = CollageIcon;
window.Star4 = Star4;
