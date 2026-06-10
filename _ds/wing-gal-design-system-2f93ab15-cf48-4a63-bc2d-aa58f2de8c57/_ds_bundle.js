/* @ds-bundle: {"format":3,"namespace":"WingGalDesignSystem_2f93ab","components":[{"name":"App","sourcePath":"uploads/WingGalApp_1.jsx"}],"sourceHashes":{"assets/CollageIcons.jsx":"662b143e24bd","ui_kits/app/Icons.jsx":"c1d5d80c26ca","ui_kits/app/ScreensDiscovery.jsx":"a1f5dfa52a41","ui_kits/app/ScreensFlow.jsx":"2438673a5479","ui_kits/app/Shared.jsx":"5a03e4eb8e7a","uploads/WingGalApp_1.jsx":"34aac8b58167"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WingGalDesignSystem_2f93ab = window.WingGalDesignSystem_2f93ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/CollageIcons.jsx
try { (() => {
// Wing Gal — Collage Icon System (hand-cut composite SVG illustrations)
// 16 icons + the Star4 "twinkle" sticker. Self-contained: palette baked in.
// Usage:  <CollageIcon name="wing" size={84} rotate={-6} />
// Icon names: wing, bow, martini, rose, disco, heel, lipstick, heartKey,
//             phone, suitcase, skyline, chatBubbles, hands, eye, sparkles, shieldRose
const TOKENS = {
  bubbleGum: "#F8AFB8",
  peachesAndCream: "#F5CBAF",
  dirtyMartini: "#5D5821",
  negroni: "#FE4213",
  spritz: "#F09457",
  sand: "#D6CBB6",
  velvet: "#B9A7AC",
  ink: "#3A3520",
  bone: "#FAEAD8"
};
function CollageIcon({
  name,
  size = 64,
  rotate = 0
}) {
  const icons = {
    // ✦ Going out / nightlife
    martini: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 14 18 L 50 18 L 33 38 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      y1: "32",
      x2: "44",
      y2: "14",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "14",
      r: "3.5",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "13",
      r: "0.8",
      fill: TOKENS.bone
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      y1: "38",
      x2: "33",
      y2: "52",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33",
      cy: "53",
      rx: "11",
      ry: "2",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 18 22 Q 23 24 28 22 T 38 22 Q 43 24 47 22",
      fill: "none",
      stroke: TOKENS.spritz,
      strokeWidth: "1.2",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 42,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Solo travel
    suitcase: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 3} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 24 14 Q 24 8 32 8 Q 40 8 40 14",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "16",
      width: "40",
      height: "32",
      rx: "3",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "28",
      x2: "52",
      y2: "28",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 41 22 L 49 21 L 50 26 L 42 27 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42",
      cy: "24",
      r: "0.8",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 42,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "40",
      r: "3",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    })),
    // ✦ New city / skyline
    skyline: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "22",
      width: "10",
      height: "30",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "14",
      width: "12",
      height: "38",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "26",
      width: "8",
      height: "26",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "18",
      width: "14",
      height: "34",
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "20",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "20",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "28",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "24",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "48",
      y: "24",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "32",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 12 A 5 5 0 1 0 54 16 A 4 4 0 1 1 50 12 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    })),
    // ✦ Heart with key (post-breakup, opening up)
    heartKey: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -6} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 50 L 14 32 Q 8 25 14 19 Q 22 13 32 22 Q 42 13 50 19 Q 56 25 50 32 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "28",
      r: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31",
      y: "29",
      width: "2",
      height: "6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "50",
      x2: "50",
      y2: "58",
      stroke: TOKENS.ink,
      strokeWidth: "0.8",
      strokeDasharray: "2 1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "58",
      r: "3",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55",
      y1: "58",
      x2: "60",
      y2: "58",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58",
      y1: "58",
      x2: "58",
      y2: "60",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60",
      y1: "58",
      x2: "60",
      y2: "61",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 14,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Conversation / company
    chatBubbles: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -2} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 12 L 56 12 Q 60 12 60 16 L 60 30 Q 60 34 56 34 L 44 34 L 38 40 L 38 34 L 32 34 Q 28 34 28 30 L 28 16 Q 28 12 32 12 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 24 L 32 24 Q 36 24 36 28 L 36 42 Q 36 46 32 46 L 22 46 L 16 52 L 16 46 L 8 46 Q 4 46 4 42 L 4 28 Q 4 24 8 24 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 56,
      cy: 48,
      r: 3.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Rose (sisterhood, the brand bouquet)
    rose: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 30 Q 30 42 34 56",
      fill: "none",
      stroke: TOKENS.dirtyMartini,
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 33 42 Q 42 38 44 46 Q 38 48 33 44 Z",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "22",
      r: "14",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 14 Q 38 16 38 22 Q 38 28 32 28 Q 26 28 26 22 Q 26 18 30 17",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "22",
      r: "3",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 14,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Phone (booking the gal)
    phone: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -8} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 16 14 Q 14 12 16 10 L 22 8 Q 24 8 26 10 L 30 16 Q 31 18 29 20 L 26 22 Q 30 30 38 38 L 42 36 Q 44 34 46 36 L 52 40 Q 54 42 54 44 L 52 50 Q 50 54 46 52 Q 28 46 16 28 Q 12 22 16 14 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 52 50 Q 60 52 56 58 Q 50 60 56 64",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 14,
      r: 3.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 14,
      cy: 42,
      r: 2,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    })),
    // ✦ Disco ball (going out)
    disco: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "34",
      r: "16",
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "34",
      x2: "48",
      y2: "34",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "22",
      x2: "44",
      y2: "46",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "46",
      x2: "44",
      y2: "22",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "34",
      rx: "16",
      ry: "6",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "34",
      rx: "6",
      ry: "16",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "26",
      width: "3",
      height: "3",
      fill: TOKENS.bubbleGum
    }), /*#__PURE__*/React.createElement("rect", {
      x: "38",
      y: "40",
      width: "3",
      height: "3",
      fill: TOKENS.peachesAndCream
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "28",
      width: "2",
      height: "2",
      fill: TOKENS.spritz
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "18",
      x2: "32",
      y2: "10",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "9",
      r: "1.5",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 20,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 28,
      r: 2.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Heel (getting ready)
    heel: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -3} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 38 Q 8 32 16 30 L 44 28 Q 54 28 56 36 L 50 40 Q 36 42 24 42 L 14 42 Q 8 42 8 38 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 40 L 50 54 L 47 54 L 47 41",
      fill: TOKENS.ink,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 16 30 Q 24 22 36 24",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 14,
      cy: 20,
      r: 3.5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Lipstick kiss
    lipstick: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 6} 32 32)`
    }, /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "32",
      width: "14",
      height: "20",
      rx: "1.5",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "36",
      width: "14",
      height: "2",
      fill: TOKENS.spritz
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 22 32 L 36 32 L 36 22 Q 36 18 32 16 Q 28 14 26 18 L 22 28 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 44 22 Q 48 20 52 22 Q 48 26 50 28 Q 46 28 44 26 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 44 22 Q 42 24 44 26",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 28,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Wing (the brand mark — sisterhood, having backup)
    wing: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -6} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 44 Q 10 22 28 12 Q 46 6 56 18 Q 58 22 54 24 Q 48 26 42 30 Q 50 30 54 34 Q 56 38 50 40 Q 42 40 36 42 Q 44 44 46 50 Q 46 54 40 54 Q 30 54 20 52 Q 10 50 8 44 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 18 18 Q 22 14 26 18 Q 24 26 18 28 Q 14 26 18 18 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 28 14 Q 32 10 36 14 Q 34 24 28 26 Q 24 22 28 14 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 38 12 Q 44 10 48 16 Q 44 26 38 26 Q 34 22 38 12 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "18",
      x2: "22",
      y2: "26",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "14",
      x2: "31",
      y2: "24",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43",
      y1: "14",
      x2: "42",
      y2: "24",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 16 40 Q 20 36 22 42 Q 18 44 16 40 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 24 44 Q 28 40 30 46 Q 26 48 24 44 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 46 Q 36 42 38 48 Q 34 50 32 46 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 56,
      cy: 10,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 6,
      cy: 20,
      r: 2.5,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 58,
      cy: 48,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Bow (getting ready, the gift, soft femme)
    bow: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 28 28 Q 16 18 8 22 Q 4 26 8 32 Q 4 38 8 42 Q 16 46 28 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 36 28 Q 48 18 56 22 Q 60 26 56 32 Q 60 38 56 42 Q 48 46 36 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 26 Q 20 28 26 30",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 38 Q 20 36 26 34",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 26 Q 44 28 38 30",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 38 Q 44 36 38 34",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "24",
      width: "10",
      height: "16",
      rx: "1.5",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "25",
      x2: "32",
      y2: "39",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 28 38 Q 22 50 18 58 L 14 56 Q 18 48 24 38 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 36 38 Q 42 50 46 58 L 50 56 Q 46 48 40 38 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 56 L 18 58 L 16 60 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 56 L 46 58 L 48 60 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 54,
      cy: 12,
      r: 3.5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 10,
      cy: 14,
      r: 2.5,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    })),
    // ✦ Hand-holding (kept as alt for sisterhood-specific moments)
    hands: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 6 28 L 12 28 L 12 22 Q 12 18 16 18 Q 20 18 20 22 L 20 26 L 22 24 Q 26 22 28 26 L 28 36 Q 28 42 22 44 L 8 44 Q 4 42 4 36 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 58 28 L 52 28 L 52 22 Q 52 18 48 18 Q 44 18 44 22 L 44 26 L 42 24 Q 38 22 36 26 L 36 36 Q 36 42 42 44 L 56 44 Q 60 42 60 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 32,
      cy: 34,
      r: 5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Eye (being seen / being there)
    eye: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 32 Q 32 14 56 32 Q 32 50 8 32 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: "10",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: "4",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "29",
      r: "1.6",
      fill: TOKENS.bone
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      y1: "22",
      x2: "11",
      y2: "18",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "18",
      x2: "20",
      y2: "13",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "16",
      x2: "32",
      y2: "11",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "18",
      x2: "44",
      y2: "13",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      y1: "22",
      x2: "53",
      y2: "18",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 46,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Sparkle constellation (general magic)
    sparkles: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement(Star4, {
      cx: 32,
      cy: 20,
      r: 9,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      sw: 1.6
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 16,
      cy: 42,
      r: 5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      sw: 1.4
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 48,
      cy: 44,
      r: 6,
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      sw: 1.4
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "14",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "20",
      r: "1.2",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "56",
      r: "1.4",
      fill: TOKENS.ink
    })),
    // ✦ Shield with rose (safety)
    shieldRose: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 8 L 50 14 L 50 32 Q 50 46 32 56 Q 14 46 14 32 L 14 14 Z",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "30",
      r: "7",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 24 Q 36 26 36 30 Q 36 34 32 34 Q 28 34 28 30 Q 28 27 30 25",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "30",
      r: "1.5",
      fill: TOKENS.dirtyMartini
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "14",
      x2: "32",
      y2: "18",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "20",
      x2: "24",
      y2: "22",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "20",
      x2: "40",
      y2: "22",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 52,
      cy: 46,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, icons[name] || null);
}

// 4-pointed sticker star (Chani signature). Pinched-x shape, not pointy-5-star.
function Star4({
  cx,
  cy,
  r,
  fill,
  stroke = "#3A3520",
  sw = 1.2
}) {
  // Pinch creates the iconic "twinkle" look
  const p = r * 0.42;
  const path = `M ${cx} ${cy - r} Q ${cx + p} ${cy - p} ${cx + r} ${cy} Q ${cx + p} ${cy + p} ${cx} ${cy + r} Q ${cx - p} ${cy + p} ${cx - r} ${cy} Q ${cx - p} ${cy - p} ${cx} ${cy - r} Z`;
  return /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinejoin: "round"
  });
}

// Expose globally for cross-file Babel scripts
window.CollageIcon = CollageIcon;
window.Star4 = Star4;
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/CollageIcons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icons.jsx
try { (() => {
// Lucide-style stroke icons used across the Wing Gal app (1.75px stroke, round caps).
// Recreated as inline SVG so the kit is self-contained — pairs with the heavier collage outlines.
function Ico({
  name,
  size = 20,
  color = "currentColor",
  fill = "none",
  style
}) {
  const P = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5"
    }),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 4-6 8-6s8 2 8 6"
    })),
    message: /*#__PURE__*/React.createElement("path", {
      d: "M21 11.5a8.5 8.5 0 0 1-12 7.7L3 21l1.8-5.4A8.5 8.5 0 1 1 21 11.5Z"
    }),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"
    }),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.5l1-5.8-4.3-4.1 5.9-.8z"
    }),
    mapPin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    chevronLeft: /*#__PURE__*/React.createElement("path", {
      d: "M15 5l-7 7 7 7"
    }),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "M9 5l7 7-7 7"
    }),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-3.5-3.5"
    })),
    bell: /*#__PURE__*/React.createElement("path", {
      d: "M18 9a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M10.3 21a2 2 0 0 0 3.4 0"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5 10 17l9-10"
    }),
    plus: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    send: /*#__PURE__*/React.createElement("path", {
      d: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
    }),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
    }),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"
    }),
    sparkles: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"
    }),
    menu: /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6 6 18"
    }),
    creditCard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "5",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 10h20"
    })),
    mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "3",
      width: "6",
      height: "11",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 11a7 7 0 0 0 14 0M12 18v3"
    })),
    paperclip: /*#__PURE__*/React.createElement("path", {
      d: "M21 11l-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 6"
    }),
    edit: /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"
    }),
    trending: /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8M15 7h6v6"
    }),
    dollar: /*#__PURE__*/React.createElement("path", {
      d: "M12 2v20M17 6.5C17 4.6 14.8 3 12 3S7 4.6 7 6.5 9.2 10 12 10s5 1.6 5 3.5S14.8 17 12 17s-5-1.6-5-3.5"
    }),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21c0-3.5 3-5.5 7-5.5s7 2 7 5.5M16 5a3.5 3.5 0 0 1 0 6.5M22 21c0-2.5-1.5-4.2-4-5"
    })),
    award: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.5 12.5-1.5 8 5-3 5 3-1.5-8"
    })),
    navigation: /*#__PURE__*/React.createElement("path", {
      d: "M3 11l18-8-8 18-2-8-8-2Z"
    }),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
    })),
    logout: /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
    }),
    more: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.4"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, P[name] || null);
}
window.Ico = Ico;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ScreensDiscovery.jsx
try { (() => {
// Wing Gal app — discovery screens: Onboarding, Home, WingProfile
const {
  useState
} = React;
function ClientOnboarding({
  onDone
}) {
  const [step, setStep] = useState(0);
  const steps = [{
    eyebrow: "Welcome",
    headline: "Sisterhood.\nOn demand.",
    body: "Real, trained women who show up in-person when you need someone in your corner. Not a dating app. Not a chatbot. A human being.",
    cta: "I'm in",
    bg: T.olive,
    fg: T.cream,
    accent: T.coral,
    icon: "wing"
  }, {
    eyebrow: "What she isn't",
    headline: "Not a match.\nNot an alert.\nNot an escort.",
    body: "Wing Women are certified companions trained for nightlife, solo travel, new-city moments, and anywhere else you'd rather not walk in alone.",
    cta: "Got it",
    bg: T.sand,
    fg: T.ink,
    accent: T.coral,
    icon: "shieldRose"
  }, {
    eyebrow: "Tell us about you",
    headline: "What brings you\nhere tonight?",
    cta: "Continue",
    bg: T.cream,
    fg: T.ink,
    accent: T.coral,
    form: "quiz",
    icon: "sparkles"
  }, {
    eyebrow: "One more thing",
    headline: "Where\nare you?",
    body: "We'll match you with Wing Women within a 5-mile radius. You can change your city any time.",
    cta: "Let's go",
    bg: T.velvet,
    fg: T.ink,
    accent: T.coral,
    form: "location",
    icon: "skyline"
  }];
  const s = steps[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: s.bg,
      color: s.fg,
      display: "flex",
      flexDirection: "column",
      padding: "60px 28px 28px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 54,
      left: 28,
      right: 28,
      display: "flex",
      gap: 6
    }
  }, steps.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? s.accent : s.fg + "22",
      transition: "background 0.3s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    className: "fade-up",
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: s.icon,
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: s.accent,
      marginBottom: 16
    }
  }, s.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 48,
      lineHeight: 1.02,
      fontWeight: 500,
      letterSpacing: "-1.5px",
      whiteSpace: "pre-line",
      marginBottom: 20
    }
  }, s.headline), s.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      opacity: 0.8,
      marginBottom: 24
    }
  }, s.body), s.form === "quiz" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 8
    }
  }, [{
    icon: "disco",
    label: "Going out — nightlife or a bar"
  }, {
    icon: "suitcase",
    label: "I'm traveling solo"
  }, {
    icon: "skyline",
    label: "I just moved here"
  }, {
    icon: "heartKey",
    label: "First night out in a while"
  }, {
    icon: "chatBubbles",
    label: "Honestly, I just want company"
  }].map((o, i) => /*#__PURE__*/React.createElement(QuizOption, {
    key: i,
    icon: o.icon,
    label: o.label
  }))), s.form === "location" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: s.fg + "11",
      border: `1px solid ${s.fg}33`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mapPin",
    size: 18,
    color: s.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Oakland, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.6,
      marginTop: 2
    }
  }, "Detected from your location")), /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 18,
    color: s.accent
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => step < steps.length - 1 ? setStep(step + 1) : onDone(),
    style: {
      background: s.bg === T.olive ? T.cream : T.olive,
      color: s.bg === T.olive ? T.olive : "#fff",
      border: "none",
      cursor: "pointer",
      padding: "18px 24px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, s.cta, " ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrowRight",
    size: 18,
    color: s.bg === T.olive ? T.olive : "#fff"
  })), step > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(step - 1),
    style: {
      background: "transparent",
      border: "none",
      color: s.fg,
      fontSize: 13,
      marginTop: 12,
      cursor: "pointer",
      opacity: 0.6
    }
  }, "Back"));
}
function QuizOption({
  icon,
  label
}) {
  const [sel, setSel] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(!sel),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 16px",
      borderRadius: 14,
      cursor: "pointer",
      background: sel ? T.ink : "#fff",
      color: sel ? T.cream : T.ink,
      border: `1.5px solid ${sel ? T.ink : T.sand}`,
      fontSize: 14,
      fontWeight: 500,
      textAlign: "left",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      transform: "translateY(2px)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: icon,
    size: 36
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), sel && /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 16,
    color: T.cream
  }));
}
function ClientHome({
  onSelect,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 12px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      right: 20,
      transform: "rotate(8deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "rose",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.ink + "99",
      fontWeight: 500
    }
  }, "Friday night \xB7 Oakland"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 32,
      lineHeight: 1.05,
      letterSpacing: "-1px",
      color: T.ink,
      marginTop: 4,
      paddingRight: 60
    }
  }, "Hey Sarah. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: T.coral
    }
  }, "Who's with you tonight?"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      display: "flex",
      gap: 8,
      padding: "8px 24px 16px",
      overflowX: "auto"
    }
  }, [{
    label: "Near me"
  }, {
    label: "Tonight"
  }, {
    label: "Confidence",
    icon: "disco"
  }, {
    label: "Emotional",
    icon: "heartKey"
  }, {
    label: "Under $60"
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      padding: "8px 14px",
      background: i === 0 ? T.ink : "#fff",
      color: i === 0 ? T.cream : T.ink,
      border: `1px solid ${i === 0 ? T.ink : T.sand}`,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, f.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: f.icon,
    size: 20
  })), f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, WING_WOMEN.map((w, idx) => /*#__PURE__*/React.createElement("button", {
    key: w.id,
    onClick: () => onSelect(w),
    style: {
      background: "#fff",
      border: `1px solid ${T.sand}`,
      borderRadius: 20,
      padding: 16,
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      animation: `fadeUp 0.4s ease-out ${idx * 0.06}s both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    wing: w,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 22,
      fontWeight: 600,
      color: T.ink,
      lineHeight: 1
    }
  }, w.name), /*#__PURE__*/React.createElement(TierBadge, {
    tier: w.tier
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ink + "88",
      marginTop: 4
    }
  }, w.specialty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8,
      fontSize: 11,
      color: T.ink + "aa",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "star",
    size: 11,
    color: T.coral,
    fill: T.coral
  }), " ", w.rating), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, w.sessions, " sessions"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mapPin",
    size: 11,
    color: T.ink + "aa"
  }), " ", w.distance))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.ink + "66",
      fontWeight: 500
    }
  }, "from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 22,
      fontWeight: 600,
      color: T.ink,
      lineHeight: 1
    }
  }, "$", w.rate), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.ink + "66"
    }
  }, "/session"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      background: w.online ? T.bubbleGum + "66" : T.sand + "44",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: T.ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: w.online ? "#2f9c6e" : T.ink + "55"
    }
  }), w.online ? `Available now · ${w.eta} away` : "Off-duty"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevronRight",
    size: 16,
    color: T.ink + "77"
  }))))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home",
    onNav: onNav
  }));
}
function WingProfile({
  wing,
  onBack,
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: `linear-gradient(150deg, ${wing.color}, ${wing.color}99)`,
      position: "relative",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 54,
      left: 20,
      width: 38,
      height: 38,
      borderRadius: 999,
      background: "#ffffffcc",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevronLeft",
    size: 20,
    color: T.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 30,
      right: 16,
      transform: "rotate(-8deg)",
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "sparkles",
    size: 70
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1,
      textShadow: "0 2px 12px rgba(0,0,0,.2)"
    }
  }, wing.name), /*#__PURE__*/React.createElement(TierBadge, {
    tier: wing.tier
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: 6,
      opacity: 0.95,
      fontWeight: 500
    }
  }, wing.specialty))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      display: "flex",
      gap: 0,
      background: "#fff",
      borderBottom: `1px solid ${T.sand}`
    }
  }, [{
    l: "Rating",
    v: wing.rating,
    i: "star"
  }, {
    l: "Sessions",
    v: wing.sessions,
    i: "award"
  }, {
    l: "Away",
    v: wing.eta,
    i: "navigation"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      borderRight: i < 2 ? `1px solid ${T.sand}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: s.i,
    size: 16,
    color: T.coral
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 22,
      fontWeight: 600,
      color: T.ink,
      lineHeight: 1
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.ink + "88",
      marginTop: 3,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: T.coral,
      marginBottom: 10
    }
  }, "In her words"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 22,
      lineHeight: 1.25,
      color: T.ink,
      fontStyle: "italic"
    }
  }, "\"", wing.bio, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 18
    }
  }, wing.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: "7px 13px",
      background: T.bone,
      border: `1px solid ${T.sand}`,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: T.ink
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "16px 24px 24px",
      background: "linear-gradient(to top, #FAEAD8 70%, transparent)",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.ink + "88"
    }
  }, "from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 28,
      fontWeight: 600,
      color: T.ink,
      lineHeight: 1
    }
  }, "$", wing.rate)), /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      flex: 1,
      background: T.olive,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, "Book ", wing.name, " ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrowRight",
    size: 18,
    color: "#fff"
  }))));
}
Object.assign(window, {
  ClientOnboarding,
  ClientHome,
  WingProfile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ScreensDiscovery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ScreensFlow.jsx
try { (() => {
// Wing Gal app — flow screens: Booking, LiveSession, Chat
const {
  useState: useStateF,
  useEffect: useEffectF
} = React;
function BookingFlow({
  wing,
  onBack,
  onConfirm
}) {
  const [step, setStep] = useStateF(0);
  const [duration, setDuration] = useStateF(2);
  const [time, setTime] = useStateF("9:00 PM");
  const total = wing.rate * duration;
  const titles = ["When & where", "Session details", "Payment & confirm"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: T.cream,
      display: "flex",
      flexDirection: "column",
      paddingTop: 54,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: step > 0 ? () => setStep(step - 1) : onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevronLeft",
    size: 22,
    color: T.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: T.coral,
      textTransform: "uppercase"
    }
  }, "Booking ", wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 22,
      color: T.ink,
      lineHeight: 1.1
    }
  }, titles[step]))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      display: "flex",
      gap: 4
    }
  }, titles.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? T.coral : T.sand
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "0 20px"
    },
    className: "fade-up",
    key: step
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      overflowX: "auto"
    }
  }, ["Tonight", "Tomorrow", "Sat", "Sun", "Mon", "Tue"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      minWidth: 72,
      padding: "12px 0",
      textAlign: "center",
      background: i === 0 ? T.ink : "#fff",
      color: i === 0 ? T.cream : T.ink,
      border: `1px solid ${i === 0 ? T.ink : T.sand}`,
      borderRadius: 12,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", null, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontFamily: SERIF,
      marginTop: 2
    }
  }, 24 + i)))), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Start time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 22
    }
  }, ["7:00 PM", "8:00 PM", "9:00 PM", "9:30 PM", "10:00 PM", "11:00 PM"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTime(t),
    style: {
      padding: "12px 0",
      borderRadius: 12,
      cursor: "pointer",
      background: time === t ? T.ink : "#fff",
      color: time === t ? T.cream : T.ink,
      border: `1px solid ${time === t ? T.ink : T.sand}`,
      fontSize: 13,
      fontWeight: 600
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Where"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${T.sand}`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mapPin",
    size: 18,
    color: T.coral
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T.ink
    }
  }, "The Alley \xB7 3325 Grand Ave"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ink + "99",
      marginTop: 2
    }
  }, "Oakland, CA \xB7 0.6 mi from you")), /*#__PURE__*/React.createElement(Ico, {
    name: "edit",
    size: 16,
    color: T.ink + "77"
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "How long do you need her?"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${T.sand}`,
      borderRadius: 14,
      padding: 20,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDuration(Math.max(1, duration - 1)),
    style: stepBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 40,
      fontWeight: 500,
      color: T.ink,
      lineHeight: 1
    }
  }, duration, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: T.ink + "99",
      marginLeft: 4
    }
  }, duration === 1 ? "hour" : "hours")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDuration(Math.min(8, duration + 1)),
    style: stepBtn
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ink + "88",
      textAlign: "center"
    }
  }, "Most bar / nightlife sessions: 2\u20133 hours")), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "What's the vibe?"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Tell her anything helpful. Example: It's my first night out after a breakup. I want to feel fun, not fragile.",
    style: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: 14,
      border: `1px solid ${T.sand}`,
      background: "#fff",
      fontSize: 13,
      color: T.ink,
      fontFamily: "inherit",
      minHeight: 100,
      resize: "none",
      outline: "none",
      lineHeight: 1.5,
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: T.coral + "44",
      borderRadius: 12,
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "sparkles",
    size: 16,
    color: T.coral,
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ink,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "She'll read this before she shows up."), " The more specific, the better the night."))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${T.sand}`,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      gap: 12,
      alignItems: "center",
      borderBottom: `1px solid ${T.sand}`
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    wing: wing,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 20,
      color: T.ink,
      lineHeight: 1
    }
  }, wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ink + "88",
      marginTop: 2
    }
  }, wing.specialty))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(SumRow, {
    label: "When",
    value: `Tonight · ${time}`
  }), /*#__PURE__*/React.createElement(SumRow, {
    label: "Duration",
    value: `${duration} ${duration === 1 ? "hour" : "hours"}`
  }), /*#__PURE__*/React.createElement(SumRow, {
    label: "Where",
    value: "The Alley, Oakland"
  }), /*#__PURE__*/React.createElement(SumRow, {
    label: "Session rate",
    value: `$${wing.rate}/hr`
  }))), /*#__PURE__*/React.createElement("div", {
    style: lbl
  }, "Payment method"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${T.sand}`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 28,
      borderRadius: 6,
      background: `linear-gradient(135deg, ${T.ink}, ${T.coral})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T.ink
    }
  }, "Visa \xB7 4242"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.ink + "88",
      marginTop: 1
    }
  }, "Expires 09/27")), /*#__PURE__*/React.createElement(Ico, {
    name: "edit",
    size: 16,
    color: T.ink + "77"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      background: T.olive,
      color: T.cream,
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "1px",
      opacity: 0.7,
      textTransform: "uppercase"
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "$", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      textAlign: "right",
      maxWidth: 140
    }
  }, "No charge until your session begins.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: step < 2 ? () => setStep(step + 1) : onConfirm,
    style: {
      width: "100%",
      background: T.olive,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, step < 2 ? "Continue" : `Confirm & book · $${total}`, " ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrowRight",
    size: 18,
    color: "#fff"
  }))));
}
const lbl = {
  fontSize: 13,
  fontWeight: 600,
  color: "#3A352099".replace("99", "aa"),
  marginBottom: 10
};
const stepBtn = {
  width: 40,
  height: 40,
  borderRadius: 999,
  border: `1px solid ${T.sand}`,
  background: "#fff",
  cursor: "pointer",
  fontSize: 20,
  color: T.ink
};
function SumRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.ink + "99"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: T.ink
    }
  }, value));
}
function LiveSession({
  wing,
  onChat,
  onEnd
}) {
  const [elapsed, setElapsed] = useStateF(0);
  useEffectF(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = Math.floor(elapsed / 60),
    secs = String(elapsed % 60).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: T.olive,
      color: T.cream,
      paddingTop: 54,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3ddc84",
      animation: "pulseRing 2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#3ddc84"
    }
  }, "Session live"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: SERIF,
      fontSize: 18
    }
  }, mins, ":", secs)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 28,
      lineHeight: 1.15,
      letterSpacing: "-0.5px"
    }
  }, wing.name, " is with you.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.coral,
      fontStyle: "italic"
    }
  }, "Everything's tracked."))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 20px",
      borderRadius: 20,
      overflow: "hidden",
      flex: 1,
      minHeight: 200,
      position: "relative",
      background: `linear-gradient(135deg, ${T.velvet}88, ${T.olive}cc)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 300",
    preserveAspectRatio: "none"
  }, [...Array(12)].map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: i * 35,
    y1: 0,
    x2: i * 35 + 40,
    y2: 300,
    stroke: T.cream + "22",
    strokeWidth: "1"
  })), [...Array(8)].map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: "h" + i,
    x1: 0,
    y1: i * 40,
    x2: 400,
    y2: i * 40 + 20,
    stroke: T.cream + "22",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M 80 230 Q 180 190 220 140 T 320 70",
    stroke: T.coral,
    strokeWidth: "3",
    fill: "none",
    strokeDasharray: "6 4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "230",
    r: "10",
    fill: T.cream
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "230",
    r: "5",
    fill: T.ink
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "70",
    r: "14",
    fill: T.coral
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "70",
    r: "7",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      background: "#ffffff22",
      backdropFilter: "blur(12px)",
      padding: "8px 12px",
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mapPin",
    size: 13,
    color: T.cream
  }), " The Alley, Oakland")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 12px",
      padding: 16,
      background: "#ffffff11",
      backdropFilter: "blur(10px)",
      border: `1px solid #ffffff22`,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.7,
      marginBottom: 6,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, "Next check-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 26
    }
  }, "in 14 min"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: T.cream,
      color: T.ink,
      border: "none",
      padding: "8px 14px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "I'm good \u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onChat,
    style: {
      background: "#ffffff22",
      border: "none",
      color: T.cream,
      padding: "14px",
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "message",
    size: 16,
    color: T.cream
  }), " Message ", wing.name), /*#__PURE__*/React.createElement("button", {
    onClick: onEnd,
    style: {
      background: T.sand,
      border: "none",
      color: T.ink,
      padding: "14px",
      borderRadius: 14,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600
    }
  }, "End session"), /*#__PURE__*/React.createElement("button", {
    style: {
      gridColumn: "1 / -1",
      background: T.alert,
      border: "none",
      color: "#fff",
      padding: "16px",
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.5px"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "alert",
    size: 18,
    color: "#fff"
  }), " I NEED HELP NOW")));
}
function ChatScreen({
  wing,
  onBack
}) {
  const [msgs, setMsgs] = useStateF([{
    from: "them",
    text: "Hey! I'm Aaliyah — got your booking. I'm 6 min out, walking over now. 🌹",
    time: "9:02 PM"
  }, {
    from: "me",
    text: "Omg thank you. I'm so nervous, haven't done this before.",
    time: "9:03 PM"
  }, {
    from: "them",
    text: "You booked me, which is the hardest step. I'll text when I'm inside. You've got this.",
    time: "9:03 PM"
  }]);
  const [input, setInput] = useStateF("");
  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, {
      from: "me",
      text: input,
      time: "now"
    }]);
    setInput("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: `1px solid ${T.sand}`,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevronLeft",
    size: 22,
    color: T.ink
  })), /*#__PURE__*/React.createElement(Avatar, {
    wing: wing,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SERIF,
      fontSize: 20,
      fontWeight: 600,
      color: T.ink,
      lineHeight: 1
    }
  }, wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#2f9c6e",
      fontWeight: 600,
      marginTop: 2
    }
  }, "\u25CF Session live")), /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 18,
    color: T.ink + "aa"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      background: T.cream,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11,
      color: T.ink + "77",
      margin: "8px 0"
    }
  }, "Friday, 9:00 PM \xB7 Session started"), msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === "me" ? "flex-end" : "flex-start",
      maxWidth: "78%",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      animation: "slideIn 0.3s ease-out both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      background: m.from === "me" ? T.ink : "#fff",
      color: m.from === "me" ? T.cream : T.ink,
      border: m.from === "me" ? "none" : `1px solid ${T.sand}`,
      borderRadius: 18,
      borderBottomRightRadius: m.from === "me" ? 4 : 18,
      borderBottomLeftRadius: m.from === "them" ? 4 : 18,
      fontSize: 14,
      lineHeight: 1.4
    }
  }, m.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.ink + "66",
      textAlign: m.from === "me" ? "right" : "left"
    }
  }, m.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px 24px",
      background: "#fff",
      borderTop: `1px solid ${T.sand}`,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "paperclip",
    size: 20,
    color: T.ink + "77"
  }), /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Message\u2026",
    style: {
      flex: 1,
      padding: "12px 16px",
      borderRadius: 999,
      border: `1px solid ${T.sand}`,
      background: T.cream,
      fontSize: 14,
      outline: "none",
      color: T.ink,
      fontFamily: "inherit"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      background: T.olive,
      border: "none",
      width: 40,
      height: 40,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "send",
    size: 16,
    color: "#fff"
  }))));
}
Object.assign(window, {
  BookingFlow,
  LiveSession,
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ScreensFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shared.jsx
try { (() => {
// Wing Gal app — shared tokens, data, and chrome components.
const T = {
  bubbleGum: "#F8AFB8",
  cream: "#F5CBAF",
  olive: "#5D5821",
  negroni: "#FE4213",
  coral: "#F09457",
  sand: "#D6CBB6",
  velvet: "#B9A7AC",
  ink: "#3A3520",
  bone: "#FAEAD8",
  paper: "#EFD9C2",
  white: "#FFFFFF",
  // aliases
  primary: "#5D5821",
  accent: "#F09457",
  alert: "#FE4213"
};
const SERIF = '"Cormorant Garamond", Georgia, serif';
const WING_WOMEN = [{
  id: 1,
  name: "Aaliyah",
  tier: 3,
  rating: 4.9,
  sessions: 127,
  distance: "0.4 mi",
  eta: "6 min",
  specialty: "Confidence Booster",
  bio: "Former event host in NYC. I read rooms for a living. If you want to walk in somewhere and own it, I've got you.",
  tags: ["Nightlife", "New city", "Solo travel"],
  rate: 79,
  online: true,
  color: T.coral,
  initials: "AA"
}, {
  id: 2,
  name: "Priya",
  tier: 5,
  rating: 5.0,
  sessions: 204,
  distance: "1.1 mi",
  eta: "11 min",
  specialty: "Emotional Support Wing",
  bio: "Trauma-informed, licensed background. For the nights that matter — first night out after a breakup, first time back out, the hard ones.",
  tags: ["Post-breakup", "Trauma-informed", "High stakes"],
  rate: 129,
  online: true,
  color: T.olive,
  initials: "PS"
}, {
  id: 3,
  name: "Marisol",
  tier: 2,
  rating: 4.8,
  sessions: 58,
  distance: "0.7 mi",
  eta: "8 min",
  specialty: "Social Companion",
  bio: "Just moved here myself six months ago. I know the new-city feeling and I know the best bars that actually feel safe.",
  tags: ["Just arrived", "Bars", "Conversation"],
  rate: 49,
  online: true,
  color: T.velvet,
  initials: "MR"
}, {
  id: 4,
  name: "Jules",
  tier: 3,
  rating: 4.9,
  sessions: 91,
  distance: "2.0 mi",
  eta: "14 min",
  specialty: "Confidence Booster",
  bio: "I'll walk up to anyone. Stand-up comic by day. Your wingwoman by night. Let's go.",
  tags: ["Approach coaching", "Dates", "Fun"],
  rate: 79,
  online: false,
  color: T.bubbleGum,
  initials: "JL"
}];

// ---------- PHONE FRAME ----------
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 780,
      background: T.ink,
      borderRadius: 52,
      padding: 10,
      boxShadow: "0 40px 80px -20px rgba(58,53,32,0.4), 0 20px 40px -20px rgba(58,53,32,0.3)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: T.bone,
      borderRadius: 44,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px 0",
      fontSize: 14,
      fontWeight: 600,
      color: T.ink,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:04"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "\u25CF\u25CF\u25CF\u25CF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "5G"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 22,
      height: 11,
      border: `1.5px solid ${T.ink}`,
      borderRadius: 3,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 1,
      background: T.ink,
      width: "80%",
      borderRadius: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: "50%",
      transform: "translateX(-50%)",
      width: 110,
      height: 32,
      background: T.ink,
      borderRadius: 20,
      zIndex: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      width: "100%",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    }
  }, children)));
}
function Avatar({
  wing,
  size = 56
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${wing.color}, ${wing.color}bb)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: SERIF,
      fontSize: size * 0.38,
      fontWeight: 500,
      flexShrink: 0,
      position: "relative"
    }
  }, wing.initials, wing.online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: size * 0.2,
      height: size * 0.2,
      borderRadius: 999,
      background: "#2f9c6e",
      border: "2px solid #fff"
    }
  }));
}
function TierBadge({
  tier
}) {
  const info = tier === 5 ? {
    label: "Certified",
    color: T.olive
  } : tier === 3 ? {
    label: "Confidence",
    color: T.coral
  } : {
    label: "Companion",
    color: T.velvet
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.8px",
      textTransform: "uppercase",
      background: info.color,
      color: "#fff",
      padding: "3px 7px",
      borderRadius: 999
    }
  }, info.label);
}
function BottomNav({
  active,
  onNav
}) {
  const items = [{
    id: "home",
    icon: "home",
    label: "Home"
  }, {
    id: "bookings",
    icon: "calendar",
    label: "Bookings"
  }, {
    id: "chat",
    icon: "message",
    label: "Messages"
  }, {
    id: "account",
    icon: "user",
    label: "You"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 72,
      background: "#fff",
      borderTop: `1px solid ${T.sand}`,
      display: "flex",
      alignItems: "flex-start",
      paddingTop: 12,
      zIndex: 40
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNav && onNav(it.id),
      style: {
        flex: 1,
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        color: on ? T.olive : T.ink + "77"
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      name: it.icon,
      size: 22,
      color: on ? T.olive : T.ink + "77",
      fill: on ? T.olive + "22" : "none"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: on ? 700 : 500
      }
    }, it.label));
  }));
}
Object.assign(window, {
  T,
  SERIF,
  WING_WOMEN,
  PhoneFrame,
  Avatar,
  TierBadge,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shared.jsx", error: String((e && e.message) || e) }); }

// uploads/WingGalApp_1.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
// ---------- DESIGN TOKENS (Wing Gal canonical brand palette) ----------
// Hex codes from the official brand color palette guide.
// Hierarchy: Peaches and Cream is background. Primary palette is Spritz, Dirty Martini, Sand, Velvet.
// Negroni is RESERVED for urgency/SOS only. Bubble Gum is a soft accent.
const TOKENS = {
  // Named brand colors
  bubbleGum: "#F8AFB8",
  // soft pink — accent
  peachesAndCream: "#F5CBAF",
  // peach blush — BACKGROUND
  dirtyMartini: "#5D5821",
  // deep olive — anchor dark / immersive
  negroni: "#FE4213",
  // signal red-orange — RESERVED FOR URGENCY ONLY
  spritz: "#F09457",
  // warm orange — PRIMARY CTA
  sand: "#D6CBB6",
  // khaki neutral — surfaces
  velvet: "#B9A7AC",
  // mauve gray — secondary

  // Surfaces (derived)
  cream: "#F5CBAF",
  // = peachesAndCream (background everywhere)
  paper: "#EFD9C2",
  // slightly deeper peach for cards on background
  bone: "#FAEAD8",
  // lighter peach for raised surfaces

  // Semantic aliases (every component reads from these)
  ink: "#3A3520",
  // deep warm text color (a near-black tinted toward dirty martini for warmth)
  primary: "#5D5821",
  // → dirtyMartini (main CTA — grounded, editorial)
  primaryDark: "#5D5821",
  // → dirtyMartini (anchor dark)
  accent: "#F09457",
  // → spritz (highlight / accent / eyebrow)
  cta: "#5D5821",
  // → dirtyMartini (button fills)
  secondary: "#B9A7AC",
  // → velvet
  alert: "#FE4213",
  // → negroni (urgency only)

  // Legacy aliases — heavily used
  // 'coral' (50+ uses) maps to spritz so all italic accents, eyebrows, stars, icons become warm orange
  // CTA buttons need to be explicitly retagged to TOKENS.cta below in component code
  coral: "#F09457",
  // → spritz (warm highlight)
  peach: "#F09457",
  // → spritz
  pink: "#F8AFB8",
  // → bubbleGum
  blush: "#F5CBAF",
  // → peachesAndCream
  olive: "#5D5821",
  // → dirtyMartini
  mauve: "#B9A7AC",
  // → velvet
  navy: "#5D5821",
  // → dirtyMartini (no navy; replaced)
  cocoa: "#5D5821",
  // → dirtyMartini
  sage: "#B9A7AC" // → velvet
};

// ---------- COLLAGE ICONS (Chani-inspired hand-cut composite illustrations) ----------
// Each icon is a composite of objects + a star/sticker, drawn inline in SVG.
// Designed to feel scrapbook, risograph, tactile — not flat or geometric.

function CollageIcon({
  name,
  size = 64,
  rotate = 0
}) {
  const icons = {
    // ✦ Going out / nightlife
    martini: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 14 18 L 50 18 L 33 38 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      y1: "32",
      x2: "44",
      y2: "14",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "14",
      r: "3.5",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "13",
      r: "0.8",
      fill: TOKENS.bone
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      y1: "38",
      x2: "33",
      y2: "52",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33",
      cy: "53",
      rx: "11",
      ry: "2",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 18 22 Q 23 24 28 22 T 38 22 Q 43 24 47 22",
      fill: "none",
      stroke: TOKENS.spritz,
      strokeWidth: "1.2",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 42,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Solo travel
    suitcase: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 3} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 24 14 Q 24 8 32 8 Q 40 8 40 14",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "16",
      width: "40",
      height: "32",
      rx: "3",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "28",
      x2: "52",
      y2: "28",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 41 22 L 49 21 L 50 26 L 42 27 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42",
      cy: "24",
      r: "0.8",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 42,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "40",
      r: "3",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    })),
    // ✦ New city / skyline
    skyline: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "22",
      width: "10",
      height: "30",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "14",
      width: "12",
      height: "38",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "26",
      width: "8",
      height: "26",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "18",
      width: "14",
      height: "34",
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "20",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "20",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "28",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "24",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "48",
      y: "24",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "32",
      width: "2",
      height: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 12 A 5 5 0 1 0 54 16 A 4 4 0 1 1 50 12 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    })),
    // ✦ Heart with key (post-breakup, opening up)
    heartKey: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -6} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 50 L 14 32 Q 8 25 14 19 Q 22 13 32 22 Q 42 13 50 19 Q 56 25 50 32 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "28",
      r: "3",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31",
      y: "29",
      width: "2",
      height: "6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "50",
      x2: "50",
      y2: "58",
      stroke: TOKENS.ink,
      strokeWidth: "0.8",
      strokeDasharray: "2 1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "58",
      r: "3",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55",
      y1: "58",
      x2: "60",
      y2: "58",
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58",
      y1: "58",
      x2: "58",
      y2: "60",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60",
      y1: "58",
      x2: "60",
      y2: "61",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 14,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Conversation / company
    chatBubbles: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -2} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 12 L 56 12 Q 60 12 60 16 L 60 30 Q 60 34 56 34 L 44 34 L 38 40 L 38 34 L 32 34 Q 28 34 28 30 L 28 16 Q 28 12 32 12 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 24 L 32 24 Q 36 24 36 28 L 36 42 Q 36 46 32 46 L 22 46 L 16 52 L 16 46 L 8 46 Q 4 46 4 42 L 4 28 Q 4 24 8 24 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26",
      cy: "35",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 56,
      cy: 48,
      r: 3.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Rose (sisterhood, the brand bouquet)
    rose: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 30 Q 30 42 34 56",
      fill: "none",
      stroke: TOKENS.dirtyMartini,
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 33 42 Q 42 38 44 46 Q 38 48 33 44 Z",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "22",
      r: "14",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 14 Q 38 16 38 22 Q 38 28 32 28 Q 26 28 26 22 Q 26 18 30 17",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "22",
      r: "3",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 14,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Phone (booking the gal)
    phone: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -8} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 16 14 Q 14 12 16 10 L 22 8 Q 24 8 26 10 L 30 16 Q 31 18 29 20 L 26 22 Q 30 30 38 38 L 42 36 Q 44 34 46 36 L 52 40 Q 54 42 54 44 L 52 50 Q 50 54 46 52 Q 28 46 16 28 Q 12 22 16 14 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 52 50 Q 60 52 56 58 Q 50 60 56 64",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 14,
      r: 3.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 14,
      cy: 42,
      r: 2,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    })),
    // ✦ Disco ball (going out)
    disco: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "34",
      r: "16",
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "34",
      x2: "48",
      y2: "34",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "22",
      x2: "44",
      y2: "46",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "46",
      x2: "44",
      y2: "22",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "34",
      rx: "16",
      ry: "6",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "34",
      rx: "6",
      ry: "16",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "26",
      width: "3",
      height: "3",
      fill: TOKENS.bubbleGum
    }), /*#__PURE__*/React.createElement("rect", {
      x: "38",
      y: "40",
      width: "3",
      height: "3",
      fill: TOKENS.peachesAndCream
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "28",
      width: "2",
      height: "2",
      fill: TOKENS.spritz
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "18",
      x2: "32",
      y2: "10",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "9",
      r: "1.5",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 20,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 28,
      r: 2.5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Heel (getting ready)
    heel: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -3} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 38 Q 8 32 16 30 L 44 28 Q 54 28 56 36 L 50 40 Q 36 42 24 42 L 14 42 Q 8 42 8 38 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 40 L 50 54 L 47 54 L 47 41",
      fill: TOKENS.ink,
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 16 30 Q 24 22 36 24",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 14,
      cy: 20,
      r: 3.5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Lipstick kiss
    lipstick: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 6} 32 32)`
    }, /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "32",
      width: "14",
      height: "20",
      rx: "1.5",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "36",
      width: "14",
      height: "2",
      fill: TOKENS.spritz
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 22 32 L 36 32 L 36 22 Q 36 18 32 16 Q 28 14 26 18 L 22 28 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 44 22 Q 48 20 52 22 Q 48 26 50 28 Q 46 28 44 26 Z",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 44 22 Q 42 24 44 26",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 12,
      cy: 28,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Wing (the brand mark — sisterhood, having backup)
    wing: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -6} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 44 Q 10 22 28 12 Q 46 6 56 18 Q 58 22 54 24 Q 48 26 42 30 Q 50 30 54 34 Q 56 38 50 40 Q 42 40 36 42 Q 44 44 46 50 Q 46 54 40 54 Q 30 54 20 52 Q 10 50 8 44 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 18 18 Q 22 14 26 18 Q 24 26 18 28 Q 14 26 18 18 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 28 14 Q 32 10 36 14 Q 34 24 28 26 Q 24 22 28 14 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 38 12 Q 44 10 48 16 Q 44 26 38 26 Q 34 22 38 12 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "18",
      x2: "22",
      y2: "26",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "14",
      x2: "31",
      y2: "24",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43",
      y1: "14",
      x2: "42",
      y2: "24",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 16 40 Q 20 36 22 42 Q 18 44 16 40 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 24 44 Q 28 40 30 46 Q 26 48 24 44 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 46 Q 36 42 38 48 Q 34 50 32 46 Z",
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 56,
      cy: 10,
      r: 4,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 6,
      cy: 20,
      r: 2.5,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 58,
      cy: 48,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    })),
    // ✦ Bow (getting ready, the gift, soft femme)
    bow: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || -4} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 28 28 Q 16 18 8 22 Q 4 26 8 32 Q 4 38 8 42 Q 16 46 28 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 36 28 Q 48 18 56 22 Q 60 26 56 32 Q 60 38 56 42 Q 48 46 36 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 26 Q 20 28 26 30",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 38 Q 20 36 26 34",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 26 Q 44 28 38 30",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 38 Q 44 36 38 34",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "24",
      width: "10",
      height: "16",
      rx: "1.5",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "25",
      x2: "32",
      y2: "39",
      stroke: TOKENS.ink,
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 28 38 Q 22 50 18 58 L 14 56 Q 18 48 24 38 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 36 38 Q 42 50 46 58 L 50 56 Q 46 48 40 38 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 14 56 L 18 58 L 16 60 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 50 56 L 46 58 L 48 60 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 54,
      cy: 12,
      r: 3.5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 10,
      cy: 14,
      r: 2.5,
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink
    })),
    // ✦ Hand-holding (kept as alt for sisterhood-specific moments)
    hands: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 6 28 L 12 28 L 12 22 Q 12 18 16 18 Q 20 18 20 22 L 20 26 L 22 24 Q 26 22 28 26 L 28 36 Q 28 42 22 44 L 8 44 Q 4 42 4 36 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 58 28 L 52 28 L 52 22 Q 52 18 48 18 Q 44 18 44 22 L 44 26 L 42 24 Q 38 22 36 26 L 36 36 Q 36 42 42 44 L 56 44 Q 60 42 60 36 Z",
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 32,
      cy: 34,
      r: 5,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Eye (being seen / being there)
    eye: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 32 Q 32 14 56 32 Q 32 50 8 32 Z",
      fill: TOKENS.peachesAndCream,
      stroke: TOKENS.ink,
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: "10",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: "4",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "29",
      r: "1.6",
      fill: TOKENS.bone
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      y1: "22",
      x2: "11",
      y2: "18",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "18",
      x2: "20",
      y2: "13",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "16",
      x2: "32",
      y2: "11",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "18",
      x2: "44",
      y2: "13",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      y1: "22",
      x2: "53",
      y2: "18",
      stroke: TOKENS.ink,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 50,
      cy: 46,
      r: 3,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink
    })),
    // ✦ Sparkle constellation (general magic)
    sparkles: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement(Star4, {
      cx: 32,
      cy: 20,
      r: 9,
      fill: TOKENS.spritz,
      stroke: TOKENS.ink,
      sw: 1.6
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 16,
      cy: 42,
      r: 5,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink,
      sw: 1.4
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 48,
      cy: 44,
      r: 6,
      fill: TOKENS.velvet,
      stroke: TOKENS.ink,
      sw: 1.4
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "14",
      r: "1.6",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "20",
      r: "1.2",
      fill: TOKENS.ink
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "56",
      r: "1.4",
      fill: TOKENS.ink
    })),
    // ✦ Shield with rose (safety)
    shieldRose: /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${rotate || 0} 32 32)`
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 32 8 L 50 14 L 50 32 Q 50 46 32 56 Q 14 46 14 32 L 14 14 Z",
      fill: TOKENS.dirtyMartini,
      stroke: TOKENS.ink,
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "30",
      r: "7",
      fill: TOKENS.negroni,
      stroke: TOKENS.ink,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 32 24 Q 36 26 36 30 Q 36 34 32 34 Q 28 34 28 30 Q 28 27 30 25",
      fill: "none",
      stroke: TOKENS.ink,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "30",
      r: "1.5",
      fill: TOKENS.dirtyMartini
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      y1: "14",
      x2: "32",
      y2: "18",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "20",
      x2: "24",
      y2: "22",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "20",
      x2: "40",
      y2: "22",
      stroke: TOKENS.spritz,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement(Star4, {
      cx: 52,
      cy: 46,
      r: 3,
      fill: TOKENS.bubbleGum,
      stroke: TOKENS.ink
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, icons[name] || null);
}

// 4-pointed sticker star (Chani signature). Pinched-x shape, not pointy-5-star.
function Star4({
  cx,
  cy,
  r,
  fill,
  stroke = "#3A3520",
  sw = 1.2
}) {
  // Pinch creates the iconic "twinkle" look
  const p = r * 0.42;
  const path = `M ${cx} ${cy - r} Q ${cx + p} ${cy - p} ${cx + r} ${cy} Q ${cx + p} ${cy + p} ${cx} ${cy + r} Q ${cx - p} ${cy + p} ${cx - r} ${cy} Q ${cx - p} ${cy - p} ${cx} ${cy - r} Z`;
  return /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinejoin: "round"
  });
}

// ---------- MOCK DATA ----------
const WING_WOMEN = [{
  id: 1,
  name: "Aaliyah",
  tier: 3,
  rating: 4.9,
  sessions: 127,
  distance: "0.4 mi",
  eta: "6 min",
  specialty: "Confidence Booster",
  bio: "Former event host in NYC. I read rooms for a living. If you want to walk in somewhere and own it, I've got you.",
  tags: ["Nightlife", "New city", "Solo travel"],
  rate: 79,
  online: true,
  color: TOKENS.coral,
  initials: "AA"
}, {
  id: 2,
  name: "Priya",
  tier: 5,
  rating: 5.0,
  sessions: 204,
  distance: "1.1 mi",
  eta: "11 min",
  specialty: "Emotional Support Wing",
  bio: "Trauma-informed, licensed background. For the nights that matter — first night out after a breakup, first time back out, the hard ones.",
  tags: ["Post-breakup", "Trauma-informed", "High stakes"],
  rate: 129,
  online: true,
  color: TOKENS.olive,
  initials: "PS"
}, {
  id: 3,
  name: "Marisol",
  tier: 2,
  rating: 4.8,
  sessions: 58,
  distance: "0.7 mi",
  eta: "8 min",
  specialty: "Social Companion",
  bio: "Just moved here myself six months ago. I know the new-city feeling and I know the best bars that actually feel safe.",
  tags: ["Just arrived", "Bars", "Conversation"],
  rate: 49,
  online: true,
  color: TOKENS.mauve,
  initials: "MR"
}, {
  id: 4,
  name: "Jules",
  tier: 3,
  rating: 4.9,
  sessions: 91,
  distance: "2.0 mi",
  eta: "14 min",
  specialty: "Confidence Booster",
  bio: "I'll walk up to anyone. Stand-up comic by day. Your wingwoman by night. Let's go.",
  tags: ["Approach coaching", "Dates", "Fun"],
  rate: 79,
  online: false,
  color: TOKENS.pink,
  initials: "JL"
}];
const MESSAGES = [{
  from: "them",
  text: "Hey! Just got your booking 🌹 — I'm pulling up now. Wearing a long black coat, curly hair.",
  time: "9:04 PM"
}, {
  from: "me",
  text: "Omg thank you. I'm inside at the bar on the left. Nervous lol",
  time: "9:05 PM"
}, {
  from: "them",
  text: "Totally normal. We're going to have a good night. I'll be in in 90 seconds. You're already doing the hard part.",
  time: "9:05 PM"
}, {
  from: "them",
  text: "Walking in now 👀",
  time: "9:07 PM"
}];

// ---------- ROOT APP ----------
function App() {
  const [mode, setMode] = useState("client"); // "client" or "wing"
  const [screen, setScreen] = useState("onboarding"); // onboarding, home, profile, booking, session, chat, debrief, account
  const [selectedWing, setSelectedWing] = useState(WING_WOMEN[0]);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [bookingStep, setBookingStep] = useState(0);

  // Reset sub-steps on screen change
  useEffect(() => {
    if (screen !== "onboarding") setOnboardingStep(0);
    if (screen !== "booking") setBookingStep(0);
  }, [screen]);
  const navigate = (s, wing) => {
    if (wing) setSelectedWing(wing);
    setScreen(s);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: `radial-gradient(ellipse at top left, ${TOKENS.bubbleGum}33, transparent 55%), radial-gradient(ellipse at bottom right, ${TOKENS.velvet}33, transparent 55%), ${TOKENS.peachesAndCream}`,
      fontFamily: '"Inter", system-ui, sans-serif',
      padding: "24px 16px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: "-0.5px",
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, "Wing Gal", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      verticalAlign: "super",
      fontWeight: 400
    }
  }, "\u2122")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "88",
      marginTop: 4,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "MVP \xB7 Canonical palette \xB7 ", mode === "client" ? "Client" : "Wing Woman", " view")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      background: TOKENS.paper,
      padding: 4,
      borderRadius: 999,
      border: `1px solid ${TOKENS.sand}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode("client");
      setScreen("onboarding");
    },
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      background: mode === "client" ? TOKENS.ink : "transparent",
      color: mode === "client" ? TOKENS.cream : TOKENS.ink,
      transition: "all 0.2s"
    }
  }, "I need a Wing Gal"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode("wing");
      setScreen("home");
    },
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      background: mode === "wing" ? TOKENS.ink : "transparent",
      color: mode === "wing" ? TOKENS.cream : TOKENS.ink,
      transition: "all 0.2s"
    }
  }, "I am a Wing Woman"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) 380px",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      padding: "28px 28px",
      borderRadius: 24,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 24,
      lineHeight: 1.2,
      fontStyle: "italic",
      marginBottom: 16
    }
  }, "\"Your Wing Gal is 4 minutes away. She's got you.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "App voice \xB7 from the brand guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: TOKENS.bone,
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      padding: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.accent,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Brand Palette"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TOKENS.ink + "88",
      marginBottom: 14,
      fontWeight: 500
    }
  }, "Primary four \xB7 Peaches background"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, [{
    name: "Spritz",
    hex: "#F09457",
    val: TOKENS.spritz,
    role: "highlights"
  }, {
    name: "Dirty Martini",
    hex: "#5D5821",
    val: TOKENS.dirtyMartini,
    role: "primary CTA"
  }, {
    name: "Sand",
    hex: "#D6CBB6",
    val: TOKENS.sand,
    role: "surfaces"
  }, {
    name: "Velvet",
    hex: "#B9A7AC",
    val: TOKENS.velvet,
    role: "secondary"
  }, {
    name: "Peaches & Cream",
    hex: "#F5CBAF",
    val: TOKENS.peachesAndCream,
    role: "background"
  }, {
    name: "Bubble Gum",
    hex: "#F8AFB8",
    val: TOKENS.bubbleGum,
    role: "accent"
  }, {
    name: "Negroni",
    hex: "#FE4213",
    val: TOKENS.negroni,
    role: "SOS only"
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      background: c.val,
      border: `1px solid ${TOKENS.ink}11`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: TOKENS.ink,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: TOKENS.ink + "88",
      fontFamily: "ui-monospace, monospace"
    }
  }, c.hex)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: TOKENS.bone,
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      padding: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.accent,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Collage Icons"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TOKENS.ink + "88",
      marginBottom: 14,
      fontWeight: 500
    }
  }, "Hand-cut, riso-textured, on-brand"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 10,
      alignItems: "end",
      justifyItems: "center"
    }
  }, ["wing", "bow", "martini", "rose", "disco", "heel", "lipstick", "heartKey", "phone", "suitcase", "skyline", "chatBubbles", "hands", "eye", "sparkles", "shieldRose"].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: n,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: n,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: TOKENS.ink + "77",
      textAlign: "center",
      letterSpacing: "0.3px",
      lineHeight: 1.2
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: TOKENS.paper,
      border: `1px solid ${TOKENS.sand}`,
      padding: 24,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.coral,
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, "Screens (", mode === "client" ? "Client" : "Wing Woman", ")"), /*#__PURE__*/React.createElement(NavList, {
    mode: mode,
    screen: screen,
    setScreen: setScreen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 12,
      color: TOKENS.ink + "77",
      lineHeight: 1.6,
      padding: "0 4px"
    }
  }, "Tap any screen to preview it. Toggle the role switcher at the top to see both sides of the marketplace. Everything is interactive \u2014 try booking a session, opening a profile, or sending a message.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, mode === "client" && screen === "onboarding" && /*#__PURE__*/React.createElement(ClientOnboarding, {
    step: onboardingStep,
    setStep: setOnboardingStep,
    onDone: () => navigate("home")
  }), mode === "client" && screen === "home" && /*#__PURE__*/React.createElement(ClientHome, {
    onSelect: w => navigate("profile", w),
    onChat: () => navigate("chat"),
    onSession: () => navigate("session")
  }), mode === "client" && screen === "profile" && /*#__PURE__*/React.createElement(WingProfile, {
    wing: selectedWing,
    onBack: () => navigate("home"),
    onBook: () => navigate("booking")
  }), mode === "client" && screen === "booking" && /*#__PURE__*/React.createElement(BookingFlow, {
    wing: selectedWing,
    step: bookingStep,
    setStep: setBookingStep,
    onBack: () => navigate("profile"),
    onConfirm: () => navigate("session")
  }), mode === "client" && screen === "session" && /*#__PURE__*/React.createElement(LiveSession, {
    wing: selectedWing,
    onChat: () => navigate("chat"),
    onEnd: () => navigate("debrief")
  }), mode === "client" && screen === "chat" && /*#__PURE__*/React.createElement(ChatScreen, {
    wing: selectedWing,
    onBack: () => navigate("session")
  }), mode === "client" && screen === "debrief" && /*#__PURE__*/React.createElement(Debrief, {
    wing: selectedWing,
    onDone: () => navigate("home")
  }), mode === "client" && screen === "account" && /*#__PURE__*/React.createElement(ClientAccount, {
    onBack: () => navigate("home")
  }), mode === "wing" && screen === "home" && /*#__PURE__*/React.createElement(WingHome, {
    onAccept: () => navigate("session"),
    onChat: () => navigate("chat")
  }), mode === "wing" && screen === "onboarding" && /*#__PURE__*/React.createElement(WingOnboarding, {
    onDone: () => navigate("home")
  }), mode === "wing" && screen === "profile" && /*#__PURE__*/React.createElement(WingOwnProfile, {
    onBack: () => navigate("home")
  }), mode === "wing" && screen === "booking" && /*#__PURE__*/React.createElement(WingBookingDetail, {
    onBack: () => navigate("home"),
    onAccept: () => navigate("session")
  }), mode === "wing" && screen === "session" && /*#__PURE__*/React.createElement(WingLiveSession, {
    onChat: () => navigate("chat"),
    onEnd: () => navigate("debrief")
  }), mode === "wing" && screen === "chat" && /*#__PURE__*/React.createElement(ChatScreen, {
    wing: {
      name: "Sarah K.",
      color: TOKENS.pink,
      initials: "SK"
    },
    onBack: () => navigate("session"),
    asWing: true
  }), mode === "wing" && screen === "debrief" && /*#__PURE__*/React.createElement(WingDebrief, {
    onDone: () => navigate("home")
  }), mode === "wing" && screen === "account" && /*#__PURE__*/React.createElement(WingOwnProfile, {
    onBack: () => navigate("home")
  })))), /*#__PURE__*/React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        button { font-family: inherit; }
        .scroll-area::-webkit-scrollbar { width: 0; height: 0; }
        .scroll-area { scrollbar-width: none; }
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 ${TOKENS.coral}88; }
          70% { box-shadow: 0 0 0 16px ${TOKENS.coral}00; }
          100% { box-shadow: 0 0 0 0 ${TOKENS.coral}00; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
      `));
}

// ---------- NAV LIST ----------
function NavList({
  mode,
  screen,
  setScreen
}) {
  const clientScreens = [{
    id: "onboarding",
    label: "Onboarding",
    icon: Sparkles
  }, {
    id: "home",
    label: "Home — browse Wing Women",
    icon: Home
  }, {
    id: "profile",
    label: "Wing Woman profile",
    icon: User
  }, {
    id: "booking",
    label: "Booking flow",
    icon: Calendar
  }, {
    id: "session",
    label: "Live session & safety",
    icon: Shield
  }, {
    id: "chat",
    label: "In-session chat",
    icon: MessageCircle
  }, {
    id: "debrief",
    label: "Post-session debrief",
    icon: Star
  }, {
    id: "account",
    label: "Account & settings",
    icon: Settings
  }];
  const wingScreens = [{
    id: "onboarding",
    label: "Wing Woman onboarding",
    icon: Award
  }, {
    id: "home",
    label: "Dashboard & requests",
    icon: Home
  }, {
    id: "booking",
    label: "Incoming booking",
    icon: Calendar
  }, {
    id: "session",
    label: "Active session",
    icon: Shield
  }, {
    id: "chat",
    label: "Chat with client",
    icon: MessageCircle
  }, {
    id: "debrief",
    label: "Session wrap-up",
    icon: Star
  }, {
    id: "profile",
    label: "My profile & earnings",
    icon: User
  }];
  const list = mode === "client" ? clientScreens : wingScreens;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, list.map(s => {
    const active = screen === s.id;
    const Icon = s.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setScreen(s.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        background: active ? TOKENS.ink : "transparent",
        color: active ? TOKENS.cream : TOKENS.ink,
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        textAlign: "left",
        transition: "all 0.15s"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = TOKENS.sand + "66";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 16,
      strokeWidth: active ? 2.5 : 2
    }), s.label);
  }));
}

// ---------- PHONE FRAME ----------
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 780,
      background: TOKENS.ink,
      borderRadius: 52,
      padding: 10,
      boxShadow: "0 40px 80px -20px rgba(26,29,40,0.4), 0 20px 40px -20px rgba(26,29,40,0.3)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: TOKENS.bone,
      borderRadius: 44,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px 0",
      fontSize: 14,
      fontWeight: 600,
      color: TOKENS.ink,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:04"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "\u25CF\u25CF\u25CF\u25CF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "5G"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 22,
      height: 11,
      border: `1.5px solid ${TOKENS.ink}`,
      borderRadius: 3,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 1,
      background: TOKENS.ink,
      width: "80%",
      borderRadius: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: "50%",
      transform: "translateX(-50%)",
      width: 110,
      height: 32,
      background: TOKENS.ink,
      borderRadius: 20,
      zIndex: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      width: "100%",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    }
  }, children)));
}

// ---------- CLIENT: ONBOARDING ----------
function ClientOnboarding({
  step,
  setStep,
  onDone
}) {
  const steps = [{
    eyebrow: "Welcome",
    headline: "Sisterhood.\nOn demand.",
    body: "Real, trained women who show up in-person when you need someone in your corner. Not a dating app. Not a chatbot. A human being.",
    cta: "I'm in",
    bg: TOKENS.olive,
    fg: TOKENS.cream,
    accent: TOKENS.coral,
    icon: "wing"
  }, {
    eyebrow: "What she isn't",
    headline: "Not a match.\nNot an alert.\nNot an escort.",
    body: "Wing Women are certified companions trained for nightlife, solo travel, new-city moments, and anywhere else you'd rather not walk in alone.",
    cta: "Got it",
    bg: TOKENS.sand,
    fg: TOKENS.ink,
    accent: TOKENS.coral,
    icon: "shieldRose"
  }, {
    eyebrow: "Tell us about you",
    headline: "What brings you\nhere tonight?",
    body: null,
    cta: "Continue",
    bg: TOKENS.cream,
    fg: TOKENS.ink,
    accent: TOKENS.coral,
    form: "quiz",
    icon: "sparkles"
  }, {
    eyebrow: "One more thing",
    headline: "Where\nare you?",
    body: "We'll match you with Wing Women within a 5-mile radius. You can change your city any time.",
    cta: "Let's go",
    bg: TOKENS.velvet,
    fg: TOKENS.ink,
    accent: TOKENS.coral,
    form: "location",
    icon: "skyline"
  }];
  const s = steps[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: s.bg,
      color: s.fg,
      display: "flex",
      flexDirection: "column",
      padding: "60px 28px 28px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 54,
      left: 28,
      right: 28,
      display: "flex",
      gap: 6
    }
  }, steps.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? s.accent : s.fg + "22",
      transition: "background 0.3s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    className: "fade-up",
    key: step
  }, s.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: s.icon,
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: s.accent,
      marginBottom: 16
    }
  }, s.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 48,
      lineHeight: 1.02,
      fontWeight: 500,
      letterSpacing: "-1.5px",
      whiteSpace: "pre-line",
      marginBottom: 20
    }
  }, s.headline), s.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      opacity: 0.8,
      marginBottom: 24
    }
  }, s.body), s.form === "quiz" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 8
    }
  }, [{
    icon: "disco",
    label: "Going out — nightlife or a bar"
  }, {
    icon: "suitcase",
    label: "I'm traveling solo"
  }, {
    icon: "skyline",
    label: "I just moved here"
  }, {
    icon: "heartKey",
    label: "First night out in a while"
  }, {
    icon: "chatBubbles",
    label: "Honestly, I just want company"
  }].map((opt, i) => /*#__PURE__*/React.createElement(QuizOption, {
    key: i,
    icon: opt.icon,
    label: opt.label,
    tokens: TOKENS
  }))), s.form === "location" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: s.fg + "11",
      border: `1px solid ${s.fg}33`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 18,
    color: s.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Oakland, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.6,
      marginTop: 2
    }
  }, "Detected from your location")), /*#__PURE__*/React.createElement(Check, {
    size: 18,
    color: s.accent
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 12,
      background: "transparent",
      border: "none",
      color: s.fg,
      fontSize: 13,
      textDecoration: "underline",
      cursor: "pointer",
      padding: 0,
      opacity: 0.7
    }
  }, "Use a different city"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => step < steps.length - 1 ? setStep(step + 1) : onDone(),
    style: {
      background: s.bg === TOKENS.olive ? TOKENS.peachesAndCream : TOKENS.cta,
      color: s.bg === TOKENS.olive ? TOKENS.olive : "#fff",
      border: "none",
      cursor: "pointer",
      padding: "18px 24px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      letterSpacing: "0.3px"
    }
  }, s.cta, " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  })), step > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(step - 1),
    style: {
      background: "transparent",
      border: "none",
      color: s.fg,
      fontSize: 13,
      marginTop: 12,
      cursor: "pointer",
      opacity: 0.6
    }
  }, "Back"));
}
function QuizOption({
  icon,
  label,
  tokens
}) {
  const [selected, setSelected] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelected(!selected),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 16px",
      borderRadius: 14,
      cursor: "pointer",
      background: selected ? tokens.ink : "#fff",
      color: selected ? tokens.cream : tokens.ink,
      border: `1.5px solid ${selected ? tokens.ink : tokens.sand}`,
      fontSize: 14,
      fontWeight: 500,
      textAlign: "left",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      transform: "translateY(2px)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: icon,
    size: 36
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), selected && /*#__PURE__*/React.createElement(Check, {
    size: 16
  }));
}

// ---------- CLIENT: HOME ----------
function ClientHome({
  onSelect,
  onChat,
  onSession
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 12px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      right: 20,
      transform: "rotate(8deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "rose",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink + "99",
      fontWeight: 500
    }
  }, "Friday night \xB7 Oakland"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 32,
      lineHeight: 1.05,
      letterSpacing: "-1px",
      color: TOKENS.ink,
      marginTop: 4,
      paddingRight: 60
    }
  }, "Hey Sarah. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: TOKENS.coral
    }
  }, "Who's with you tonight?"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      display: "flex",
      gap: 8,
      padding: "8px 24px 16px",
      overflowX: "auto"
    }
  }, [{
    label: "Near me",
    icon: null
  }, {
    label: "Tonight",
    icon: null
  }, {
    label: "Confidence",
    icon: "disco"
  }, {
    label: "Emotional",
    icon: "heartKey"
  }, {
    label: "Under $60",
    icon: null
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      padding: "8px 14px",
      background: i === 0 ? TOKENS.ink : "#fff",
      color: i === 0 ? TOKENS.cream : TOKENS.ink,
      border: `1px solid ${i === 0 ? TOKENS.ink : TOKENS.sand}`,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, f.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: f.icon,
    size: 20
  })), f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, WING_WOMEN.map((w, idx) => /*#__PURE__*/React.createElement("button", {
    key: w.id,
    onClick: () => onSelect(w),
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      padding: 16,
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      animation: `fadeUp 0.4s ease-out ${idx * 0.06}s both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    wing: w,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      fontWeight: 600,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, w.name), /*#__PURE__*/React.createElement(TierBadge, {
    tier: w.tier
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "88",
      marginTop: 4
    }
  }, w.specialty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8,
      fontSize: 11,
      color: TOKENS.ink + "aa",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: 11,
    fill: TOKENS.coral,
    color: TOKENS.coral
  }), " ", w.rating), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, w.sessions, " sessions"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 11
  }), " ", w.distance))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "66",
      fontWeight: 500
    }
  }, "from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      fontWeight: 600,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, "$", w.rate), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TOKENS.ink + "66"
    }
  }, "/session"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      background: w.online ? TOKENS.blush + "66" : TOKENS.sand + "44",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: TOKENS.ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: w.online ? "#2f9c6e" : TOKENS.ink + "55"
    }
  }), w.online ? `Available now · ${w.eta} away` : "Off-duty"), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16,
    color: TOKENS.ink + "77"
  }))))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home"
  }));
}
function Avatar({
  wing,
  size = 56
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${wing.color}, ${wing.color}bb)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: size * 0.38,
      fontWeight: 500,
      flexShrink: 0,
      position: "relative"
    }
  }, wing.initials, wing.online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: size * 0.2,
      height: size * 0.2,
      borderRadius: 999,
      background: "#2f9c6e",
      border: "2px solid #fff"
    }
  }));
}
function TierBadge({
  tier
}) {
  const tierInfo = tier === 5 ? {
    label: "Certified",
    color: TOKENS.olive
  } : tier === 3 ? {
    label: "Confidence",
    color: TOKENS.coral
  } : {
    label: "Companion",
    color: TOKENS.mauve
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.8px",
      textTransform: "uppercase",
      background: tierInfo.color,
      color: "#fff",
      padding: "3px 7px",
      borderRadius: 999
    }
  }, "★".repeat(tier));
}
function BottomNav({
  active
}) {
  const items = [{
    id: "home",
    icon: Home,
    label: "Home"
  }, {
    id: "chat",
    icon: MessageCircle,
    label: "Messages"
  }, {
    id: "sos",
    icon: Shield,
    label: "Safety"
  }, {
    id: "account",
    icon: User,
    label: "Me"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 72,
      background: "#fff",
      borderTop: `1px solid ${TOKENS.sand}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 16px 16px"
    }
  }, items.map(it => {
    const Icon = it.icon;
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 20,
      color: isActive ? TOKENS.coral : TOKENS.ink + "77",
      strokeWidth: isActive ? 2.5 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: isActive ? TOKENS.coral : TOKENS.ink + "77"
      }
    }, it.label));
  }));
}

// ---------- CLIENT: WING PROFILE ----------
function WingProfile({
  wing,
  onBack,
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 320,
      background: `linear-gradient(165deg, ${wing.color}, ${TOKENS.ink})`,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 90,
      right: 22,
      opacity: 0.95,
      transform: "rotate(-8deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "sparkles",
    size: 70
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 100,
      right: -10,
      opacity: 0.85,
      transform: "rotate(12deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "rose",
    size: 64
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 54,
      left: 20,
      background: "#ffffff33",
      border: "none",
      width: 36,
      height: 36,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      top: 54,
      right: 20,
      background: "#ffffff33",
      border: "none",
      width: 36,
      height: 36,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    size: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "0 24px 24px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(TierBadge, {
    tier: wing.tier
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-1.5px",
      lineHeight: 1,
      marginTop: 10
    }
  }, wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.85,
      marginTop: 6,
      fontWeight: 500
    }
  }, wing.specialty))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      margin: "-20px 20px 0",
      borderRadius: 16,
      padding: "16px 20px",
      display: "flex",
      justifyContent: "space-between",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Rating",
    value: wing.rating,
    icon: "\u2605"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: TOKENS.sand
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Sessions",
    value: wing.sessions
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: TOKENS.sand
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "ETA",
    value: wing.eta
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.coral,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "In her words"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      lineHeight: 1.4,
      fontStyle: "italic",
      color: TOKENS.ink,
      fontWeight: 400
    }
  }, "\"", wing.bio, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.ink + "aa",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Best for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, wing.tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: "6px 12px",
      background: TOKENS.paper,
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 500,
      color: TOKENS.ink
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "16px 24px",
      padding: 16,
      background: TOKENS.blush + "55",
      borderRadius: 14,
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "shieldRose",
    size: 48
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink
    }
  }, "Background-checked \xB7 ID verified"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "aa",
      marginTop: 2,
      lineHeight: 1.5
    }
  }, "Every Wing Woman is vetted through Checkr and completes Wing Gal certification."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.ink + "aa",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Recent reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 14,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginBottom: 8
    }
  }, [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 13,
    fill: TOKENS.coral,
    color: TOKENS.coral
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "99",
      marginLeft: 6
    }
  }, "\u2014 M., 2 weeks ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: TOKENS.ink,
      lineHeight: 1.5
    }
  }, "Showed up on time, read the room perfectly, and I actually had fun. I'd been canceling on myself for months. First night out in forever \u2014 already booked her again."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "16px 20px 24px",
      background: "linear-gradient(to top, #fff 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      width: "100%",
      background: TOKENS.cta,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, "Book ", wing.name, " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  }))));
}
function Stat({
  label,
  value,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      fontWeight: 600,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.coral,
      marginRight: 3
    }
  }, icon), value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TOKENS.ink + "99",
      marginTop: 4,
      letterSpacing: "0.8px",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, label));
}

// ---------- CLIENT: BOOKING FLOW ----------
function BookingFlow({
  wing,
  step,
  setStep,
  onBack,
  onConfirm
}) {
  const [duration, setDuration] = useState(2);
  const [selectedTime, setSelectedTime] = useState("9:00 PM");
  const total = wing.rate * duration;
  const stepTitles = ["When & where", "Session details", "Payment & confirm"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.cream,
      display: "flex",
      flexDirection: "column",
      paddingTop: 54,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: step > 0 ? () => setStep(step - 1) : onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22,
    color: TOKENS.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.coral,
      textTransform: "uppercase"
    }
  }, "Booking ", wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      color: TOKENS.ink,
      lineHeight: 1.1
    }
  }, stepTitles[step]))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      display: "flex",
      gap: 4
    }
  }, stepTitles.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? TOKENS.coral : TOKENS.sand
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "0 20px"
    },
    className: "fade-up",
    key: step
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-area",
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      overflowX: "auto"
    }
  }, ["Tonight", "Tomorrow", "Sat", "Sun", "Mon", "Tue"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      minWidth: 72,
      padding: "12px 0",
      textAlign: "center",
      background: i === 0 ? TOKENS.ink : "#fff",
      color: i === 0 ? TOKENS.cream : TOKENS.ink,
      border: `1px solid ${i === 0 ? TOKENS.ink : TOKENS.sand}`,
      borderRadius: 12,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", null, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontFamily: '"Cormorant Garamond", serif',
      marginTop: 2
    }
  }, 24 + i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "Start time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 22
    }
  }, ["7:00 PM", "8:00 PM", "9:00 PM", "9:30 PM", "10:00 PM", "11:00 PM"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setSelectedTime(t),
    style: {
      padding: "12px 0",
      borderRadius: 12,
      cursor: "pointer",
      background: selectedTime === t ? TOKENS.ink : "#fff",
      color: selectedTime === t ? TOKENS.cream : TOKENS.ink,
      border: `1px solid ${selectedTime === t ? TOKENS.ink : TOKENS.sand}`,
      fontSize: 13,
      fontWeight: 600
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "Where"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 18,
    color: TOKENS.coral
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: TOKENS.ink
    }
  }, "The Alley \xB7 3325 Grand Ave"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "99",
      marginTop: 2
    }
  }, "Oakland, CA \xB7 0.6 mi from you")), /*#__PURE__*/React.createElement(Edit3, {
    size: 16,
    color: TOKENS.ink + "77"
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "How long do you need her?"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 14,
      padding: 20,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDuration(Math.max(1, duration - 1)),
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      cursor: "pointer",
      fontSize: 20,
      color: TOKENS.ink
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 40,
      fontWeight: 500,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, duration, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: TOKENS.ink + "99",
      marginLeft: 4
    }
  }, duration === 1 ? "hour" : "hours"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDuration(Math.min(8, duration + 1)),
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      cursor: "pointer",
      fontSize: 20,
      color: TOKENS.ink
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "88",
      textAlign: "center"
    }
  }, "Most bar / nightlife sessions: 2\u20133 hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "What's the vibe?"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Tell her anything helpful. Example: It's my first night out after a breakup. I want to feel fun, not fragile. Help me not spiral if his name comes up.",
    style: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: 14,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      fontSize: 13,
      color: TOKENS.ink,
      fontFamily: "inherit",
      minHeight: 110,
      resize: "none",
      outline: "none",
      lineHeight: 1.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: TOKENS.peach + "55",
      borderRadius: 12,
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 16,
    color: TOKENS.coral,
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "She'll read this before she shows up."), " The more specific, the better the night."))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      gap: 12,
      alignItems: "center",
      borderBottom: `1px solid ${TOKENS.sand}`
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    wing: wing,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "88",
      marginTop: 2
    }
  }, wing.specialty))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "When",
    value: `Tonight · ${selectedTime}`
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Duration",
    value: `${duration} ${duration === 1 ? "hour" : "hours"}`
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Where",
    value: "The Alley, Oakland"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Session rate",
    value: `$${wing.rate}/hr`
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: TOKENS.ink + "aa",
      marginBottom: 10
    }
  }, "Payment method"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 28,
      borderRadius: 6,
      background: `linear-gradient(135deg, ${TOKENS.ink}, ${TOKENS.coral})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: TOKENS.ink
    }
  }, "Visa \xB7 4242"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "88",
      marginTop: 1
    }
  }, "Expires 09/27")), /*#__PURE__*/React.createElement(Edit3, {
    size: 16,
    color: TOKENS.ink + "77"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "1px",
      opacity: 0.7,
      textTransform: "uppercase"
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "$", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      textAlign: "right",
      maxWidth: 140
    }
  }, "No charge until your session begins.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: step < 2 ? () => setStep(step + 1) : onConfirm,
    style: {
      width: "100%",
      background: TOKENS.cta,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, step < 2 ? "Continue" : `Confirm & book · $${total}`, " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  }))));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.ink + "99"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: TOKENS.ink
    }
  }, value));
}

// ---------- CLIENT: LIVE SESSION ----------
function LiveSession({
  wing,
  onChat,
  onEnd
}) {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = Math.floor(elapsed / 60);
  const secs = String(elapsed % 60).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      paddingTop: 54,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3ddc84",
      animation: "pulseRing 2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#3ddc84"
    }
  }, "Session live"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 18
    }
  }, mins, ":", secs)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 28,
      lineHeight: 1.15,
      letterSpacing: "-0.5px"
    }
  }, wing.name, " is with you.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.accent,
      fontStyle: "italic"
    }
  }, "Everything's tracked."))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 20px",
      borderRadius: 20,
      overflow: "hidden",
      flex: 1,
      minHeight: 220,
      position: "relative",
      background: `linear-gradient(135deg, ${TOKENS.mauve}88, ${TOKENS.olive}cc)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 300",
    preserveAspectRatio: "none"
  }, [...Array(12)].map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: i * 35,
    y1: 0,
    x2: i * 35 + 40,
    y2: 300,
    stroke: TOKENS.cream + "22",
    strokeWidth: "1"
  })), [...Array(8)].map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: 0,
    y1: i * 40,
    x2: 400,
    y2: i * 40 + 20,
    stroke: TOKENS.cream + "22",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M 80 230 Q 180 190 220 140 T 320 70",
    stroke: TOKENS.coral,
    strokeWidth: "3",
    fill: "none",
    strokeDasharray: "6 4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "230",
    r: "10",
    fill: TOKENS.cream
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "230",
    r: "5",
    fill: TOKENS.ink
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "70",
    r: "14",
    fill: TOKENS.coral
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "70",
    r: "7",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      background: "#ffffff22",
      backdropFilter: "blur(12px)",
      padding: "8px 12px",
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDCCD The Alley, Oakland")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 12px",
      padding: 16,
      background: "#ffffff11",
      backdropFilter: "blur(10px)",
      border: `1px solid #ffffff22`,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.7,
      marginBottom: 6,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, "Next check-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 26
    }
  }, "in 14 min"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: TOKENS.cream,
      color: TOKENS.ink,
      border: "none",
      padding: "8px 14px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "I'm good \u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onChat,
    style: {
      background: "#ffffff22",
      border: "none",
      color: TOKENS.cream,
      padding: "14px",
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(MessageCircle, {
    size: 16
  }), " Message ", wing.name), /*#__PURE__*/React.createElement("button", {
    onClick: onEnd,
    style: {
      background: TOKENS.sand,
      border: "none",
      color: TOKENS.ink,
      padding: "14px",
      borderRadius: 14,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600
    }
  }, "End session"), /*#__PURE__*/React.createElement("button", {
    style: {
      gridColumn: "1 / -1",
      background: TOKENS.alert,
      border: "none",
      color: "#fff",
      padding: "16px",
      borderRadius: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.5px"
    }
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 18
  }), " I NEED HELP NOW")));
}

// ---------- CHAT ----------
function ChatScreen({
  wing,
  onBack,
  asWing
}) {
  const [msgs, setMsgs] = useState(asWing ? [{
    from: "them",
    text: "Hi! Got your booking — I'm so nervous, I haven't been out in months.",
    time: "9:02 PM"
  }, {
    from: "me",
    text: "You booked me, which is the hardest step. I'm 6 min out, I'll text when I'm inside. You got this. 🌹",
    time: "9:03 PM"
  }] : MESSAGES);
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, {
      from: "me",
      text: input,
      time: "now"
    }]);
    setInput("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: `1px solid ${TOKENS.sand}`,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22,
    color: TOKENS.ink
  })), /*#__PURE__*/React.createElement(Avatar, {
    wing: wing,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      fontWeight: 600,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, wing.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#2f9c6e",
      fontWeight: 600,
      marginTop: 2
    }
  }, "\u25CF Session live")), /*#__PURE__*/React.createElement(Phone, {
    size: 18,
    color: TOKENS.ink + "aa"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      background: TOKENS.cream,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11,
      color: TOKENS.ink + "77",
      margin: "8px 0"
    }
  }, "Friday, 9:00 PM \xB7 Session started"), msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === "me" ? "flex-end" : "flex-start",
      maxWidth: "78%",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      animation: "slideIn 0.3s ease-out both",
      animationDelay: `${i * 0.05}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      background: m.from === "me" ? TOKENS.ink : "#fff",
      color: m.from === "me" ? TOKENS.cream : TOKENS.ink,
      border: m.from === "me" ? "none" : `1px solid ${TOKENS.sand}`,
      borderRadius: 18,
      borderBottomRightRadius: m.from === "me" ? 4 : 18,
      borderBottomLeftRadius: m.from === "them" ? 4 : 18,
      fontSize: 14,
      lineHeight: 1.4
    }
  }, m.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TOKENS.ink + "66",
      paddingLeft: m.from === "them" ? 6 : 0,
      paddingRight: m.from === "me" ? 6 : 0,
      textAlign: m.from === "me" ? "right" : "left"
    }
  }, m.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px 24px",
      background: "#fff",
      borderTop: `1px solid ${TOKENS.sand}`,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Paperclip, {
    size: 20,
    color: TOKENS.ink + "77"
  }), /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Message\u2026",
    style: {
      flex: 1,
      padding: "12px 16px",
      borderRadius: 999,
      border: `1px solid ${TOKENS.sand}`,
      background: TOKENS.cream,
      fontSize: 14,
      outline: "none",
      color: TOKENS.ink,
      fontFamily: "inherit"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      background: TOKENS.cta,
      border: "none",
      width: 40,
      height: 40,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Send, {
    size: 16,
    color: "#fff"
  }))));
}

// ---------- CLIENT: DEBRIEF ----------
function Debrief({
  wing,
  onDone
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [tags, setTags] = useState([]);
  const goodTags = ["Read the room", "Made me laugh", "I felt safe", "Would rebook", "Pushed me (in a good way)", "She's a whole vibe"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.cream,
      paddingTop: 54,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 18,
      transform: "rotate(10deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "lipstick",
    size: 68
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: TOKENS.coral,
      marginBottom: 10
    }
  }, "Session complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 36,
      lineHeight: 1.05,
      color: TOKENS.ink,
      fontWeight: 500,
      letterSpacing: "-1px",
      paddingRight: 70
    }
  }, "How was", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "your night"), " with ", wing.name, "?")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    wing: wing,
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink + "99"
    }
  }, "2 hours \xB7 The Alley, Oakland"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink,
      fontWeight: 600,
      marginTop: 2
    }
  }, "$158 charged to Visa \xB7 4242"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 24px 20px",
      padding: 24,
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      marginBottom: 8
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setRating(n),
    onMouseEnter: () => setHover(n),
    onMouseLeave: () => setHover(0),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: 36,
    fill: n <= (hover || rating) ? TOKENS.coral : "transparent",
    color: n <= (hover || rating) ? TOKENS.coral : TOKENS.ink + "44",
    strokeWidth: 1.5
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink + "99",
      minHeight: 18
    }
  }, rating === 0 ? "Tap to rate" : rating === 5 ? "She's incredible — we'll tell her." : rating >= 3 ? "Glad it was solid." : "Sorry tonight wasn't great. We'll follow up.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: TOKENS.ink + "99",
      marginBottom: 10,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "What made it good?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, goodTags.map(t => {
    const sel = tags.includes(t);
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTags(sel ? tags.filter(x => x !== t) : [...tags, t]),
      style: {
        padding: "8px 14px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        cursor: "pointer",
        background: sel ? TOKENS.ink : "#fff",
        color: sel ? TOKENS.cream : TOKENS.ink,
        border: `1px solid ${sel ? TOKENS.ink : TOKENS.sand}`
      }
    }, t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: TOKENS.ink + "99",
      marginBottom: 10,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "Anything you'd tell her?"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "She'll see this. Keep it real.",
    style: {
      width: "100%",
      padding: 14,
      borderRadius: 14,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      fontSize: 13,
      minHeight: 80,
      resize: "none",
      outline: "none",
      fontFamily: "inherit",
      lineHeight: 1.5,
      color: TOKENS.ink
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      background: TOKENS.cta,
      color: "#fff",
      border: "none",
      padding: "16px",
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Submit & tip"), /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      background: "transparent",
      color: TOKENS.ink + "99",
      border: "none",
      padding: "12px",
      fontSize: 13,
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Maybe later")));
}

// ---------- CLIENT: ACCOUNT ----------
function ClientAccount({
  onBack
}) {
  const items = [{
    icon: User,
    label: "Personal info"
  }, {
    icon: CreditCard,
    label: "Payment methods"
  }, {
    icon: Shield,
    label: "Safety preferences"
  }, {
    icon: Bell,
    label: "Notifications"
  }, {
    collage: "bow",
    label: "Invite a friend — get $20"
  }, {
    icon: Settings,
    label: "App settings"
  }, {
    icon: LogOut,
    label: "Sign out"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 80,
      background: TOKENS.cream
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22,
    color: TOKENS.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 24,
      color: TOKENS.ink
    }
  }, "Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 16px",
      padding: 20,
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${TOKENS.coral}, ${TOKENS.pink})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      fontWeight: 500
    }
  }, "SK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22,
      fontWeight: 600,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, "Sarah K."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: TOKENS.ink + "99",
      marginTop: 4
    }
  }, "Joined March 2026 \xB7 7 sessions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      paddingTop: 16,
      borderTop: `1px solid ${TOKENS.sand}`
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Sessions",
    value: "7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: TOKENS.sand
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Saved",
    value: "3",
    icon: "\u2661"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: TOKENS.sand
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Credit",
    value: "$20"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      overflow: "hidden"
    }
  }, items.map((it, i) => {
    const Icon = it.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        borderBottom: i < items.length - 1 ? `1px solid ${TOKENS.sand}` : "none",
        cursor: "pointer"
      }
    }, it.collage ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        display: "flex",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(CollageIcon, {
      name: it.collage,
      size: 26
    })) : /*#__PURE__*/React.createElement(Icon, {
      size: 18,
      color: TOKENS.ink + "aa"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: TOKENS.ink,
        fontWeight: 500,
        flex: 1
      }
    }, it.label), /*#__PURE__*/React.createElement(ChevronRight, {
      size: 16,
      color: TOKENS.ink + "66"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 20px",
      fontSize: 11,
      textAlign: "center",
      color: TOKENS.ink + "66",
      lineHeight: 1.6
    }
  }, "Wing Gal\u2122 \xB7 v0.1.0 ", /*#__PURE__*/React.createElement("br", null), "Sisterhood, on demand."), /*#__PURE__*/React.createElement(BottomNav, {
    active: "account"
  }));
}

// ---------- WING WOMAN: ONBOARDING ----------
function WingOnboarding({
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      paddingTop: 74,
      paddingBottom: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      right: 16,
      transform: "rotate(-12deg)",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "heel",
    size: 88
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: TOKENS.coral,
      marginBottom: 12
    }
  }, "Become a Wing Woman"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 40,
      lineHeight: 1.02,
      letterSpacing: "-1px",
      fontWeight: 500,
      paddingRight: 70
    }
  }, "You're not a", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: TOKENS.coral
    }
  }, "service provider."), /*#__PURE__*/React.createElement("br", null), "You're the reason", /*#__PURE__*/React.createElement("br", null), "she went out tonight.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.5px",
      opacity: 0.7,
      marginBottom: 12,
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "Certification progress \xB7 3 of 5 complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: "#ffffff22",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60%",
      height: "100%",
      background: TOKENS.coral,
      borderRadius: 3
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [{
    done: true,
    title: "Application submitted",
    sub: "Reviewed Jan 12"
  }, {
    done: true,
    title: "Background check cleared",
    sub: "Via Checkr · Jan 14"
  }, {
    done: true,
    title: "Identity verified",
    sub: "Gov ID + selfie"
  }, {
    done: false,
    active: true,
    title: "Complete Tier 1 training",
    sub: "4 modules · 90 min"
  }, {
    done: false,
    title: "Shadow a first session",
    sub: "Required before solo"
  }].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "14px 16px",
      background: item.active ? TOKENS.coral : "#ffffff0f",
      border: `1px solid ${item.active ? TOKENS.coral : "#ffffff22"}`,
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: item.done ? "#3ddc84" : item.active ? "#fff" : "transparent",
      border: item.done ? "none" : `1.5px solid ${item.active ? "#fff" : "#ffffff66"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, item.done && /*#__PURE__*/React.createElement(Check, {
    size: 14,
    color: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: item.active ? "#fff" : TOKENS.cream
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: item.active ? 0.9 : 0.6,
      marginTop: 2
    }
  }, item.sub)), item.active && /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 28px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      width: "100%",
      background: TOKENS.cream,
      color: TOKENS.ink,
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Continue training")));
}

// ---------- WING WOMAN: HOME DASHBOARD ----------
function WingHome({
  onAccept,
  onChat
}) {
  const [online, setOnline] = useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 80,
      background: TOKENS.cream
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px 8px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink + "99",
      fontWeight: 500
    }
  }, "Friday \xB7 9:02 PM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 28,
      color: TOKENS.ink,
      lineHeight: 1.05,
      letterSpacing: "-0.5px",
      marginTop: 2
    }
  }, "Hey Aaliyah.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${TOKENS.coral}, ${TOKENS.pink})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 18,
      fontWeight: 500
    }
  }, "AA")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "8px 20px 20px",
      padding: "16px 20px",
      background: online ? TOKENS.ink : "#fff",
      color: online ? TOKENS.cream : TOKENS.ink,
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: online ? "#3ddc84" : TOKENS.ink + "33",
      animation: online ? "pulseRing 2s infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, online ? "You're available" : "You're off-duty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginTop: 2
    }
  }, online ? "Clients within 5 mi can book you" : "No incoming requests")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOnline(!online),
    style: {
      width: 48,
      height: 28,
      borderRadius: 999,
      background: online ? TOKENS.coral : TOKENS.ink + "22",
      border: "none",
      cursor: "pointer",
      position: "relative",
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: "#fff",
      display: "block",
      transform: online ? "translateX(20px)" : "translateX(0)",
      transition: "transform 0.2s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 20px",
      padding: 20,
      background: "#fff",
      border: `2px solid ${TOKENS.coral}`,
      borderRadius: 20,
      position: "relative",
      animation: "pulseRing 2.5s infinite"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -22,
      right: 16,
      transform: "rotate(-12deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "phone",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: TOKENS.coral,
      marginBottom: 10
    }
  }, "New booking request"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: TOKENS.pink,
      color: TOKENS.ink,
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 18,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "SK"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 20,
      color: TOKENS.ink,
      lineHeight: 1,
      fontWeight: 600
    }
  }, "Sarah K."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "99",
      marginTop: 3
    }
  }, "New client \xB7 First booking"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: TOKENS.ink,
      lineHeight: 1.5,
      background: TOKENS.paper,
      padding: 12,
      borderRadius: 10,
      marginBottom: 12,
      fontStyle: "italic"
    }
  }, "\"It's my first night out after a breakup. I want to feel fun, not fragile. Help me not spiral if his name comes up.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      fontSize: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.ink + "88"
    }
  }, "When"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Tonight, 9:30 PM")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.ink + "88"
    }
  }, "Duration"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "2 hours")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.ink + "88"
    }
  }, "Where"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "The Alley \xB7 0.6 mi")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.ink + "88"
    }
  }, "Earnings"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: TOKENS.coral
    }
  }, "$110.60"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "14px",
      borderRadius: 999,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      color: TOKENS.ink,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    onClick: onAccept,
    style: {
      padding: "14px",
      borderRadius: 999,
      border: "none",
      background: TOKENS.cta,
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, "Accept \xB7 I'm on my way ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.ink + "aa",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: DollarSign,
    label: "Earnings",
    value: "$684",
    sub: "+18% vs last wk",
    color: TOKENS.coral
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: Calendar,
    label: "Sessions",
    value: "9",
    sub: "2 upcoming",
    color: TOKENS.olive
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: Star,
    label: "Rating",
    value: "4.9",
    sub: "From 7 reviews",
    color: TOKENS.peach
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: TrendingUp,
    label: "Repeat rate",
    value: "67%",
    sub: "+12% vs avg",
    color: TOKENS.mauve
  }))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home"
  }));
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 14,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    color: color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "1px",
      color: TOKENS.ink + "99",
      textTransform: "uppercase"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 28,
      fontWeight: 500,
      color: TOKENS.ink,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "88",
      marginTop: 4
    }
  }, sub));
}

// ---------- WING WOMAN: BOOKING DETAIL ----------
function WingBookingDetail({
  onBack,
  onAccept
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 24,
      background: TOKENS.cream
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22,
    color: TOKENS.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 24,
      color: TOKENS.ink
    }
  }, "New request")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      background: `linear-gradient(135deg, ${TOKENS.coral}, ${TOKENS.pink})`,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      opacity: 0.9
    }
  }, "Earnings"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 44,
      fontWeight: 500,
      lineHeight: 1,
      marginTop: 4
    }
  }, "$110.60"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.9,
      marginTop: 4
    }
  }, "Your 70% of $158 \xB7 includes tip potential")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Client",
    value: "Sarah K. (new)"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "When",
    value: "Tonight \xB7 9:30 PM"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Duration",
    value: "2 hours"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Location",
    value: "The Alley, Oakland"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Distance",
    value: "0.6 mi from you"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Tier requested",
    value: "Confidence (\u2605\u2605\u2605)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      background: TOKENS.paper,
      borderTop: `1px solid ${TOKENS.sand}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.coral,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Client's brief"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 16,
      fontStyle: "italic",
      color: TOKENS.ink,
      lineHeight: 1.45
    }
  }, "\"It's my first night out after a breakup. I want to feel fun, not fragile. Help me not spiral if his name comes up.\""))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAccept,
    style: {
      background: TOKENS.cta,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, "Accept booking ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      color: TOKENS.ink,
      border: `1px solid ${TOKENS.sand}`,
      padding: "14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Decline \u2014 not a fit")));
}

// ---------- WING WOMAN: LIVE SESSION ----------
function WingLiveSession({
  onChat,
  onEnd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      paddingTop: 54,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3ddc84",
      animation: "pulseRing 2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#3ddc84"
    }
  }, "Session live"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 18
    }
  }, "47:12")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 26,
      lineHeight: 1.15,
      letterSpacing: "-0.5px"
    }
  }, "You're with ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: TOKENS.coral
    }
  }, "Sarah"), ".", /*#__PURE__*/React.createElement("br", null), "She's doing great.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 14px",
      padding: 16,
      background: "#ffffff11",
      border: "1px solid #ffffff22",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "1.5px",
      opacity: 0.7,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Her brief"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontStyle: "italic",
      opacity: 0.9,
      lineHeight: 1.5
    }
  }, "First night out after a breakup. Wants to feel fun, not fragile.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "1.5px",
      opacity: 0.7,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Session tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onChat,
    style: {
      background: "#ffffff11",
      border: "1px solid #ffffff22",
      color: TOKENS.cream,
      padding: "16px 12px",
      borderRadius: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      fontWeight: 600,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(MessageCircle, {
    size: 18
  }), "Message Sarah"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ffffff11",
      border: "1px solid #ffffff22",
      color: TOKENS.cream,
      padding: "16px 12px",
      borderRadius: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      fontWeight: 600,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    size: 18
  }), "Share location"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ffffff11",
      border: "1px solid #ffffff22",
      color: TOKENS.cream,
      padding: "16px 12px",
      borderRadius: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      fontWeight: 600,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Clock, {
    size: 18
  }), "Extend session"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ffffff11",
      border: "1px solid #ffffff22",
      color: TOKENS.cream,
      padding: "16px 12px",
      borderRadius: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      fontWeight: 600,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Edit3, {
    size: 18
  }), "Private notes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 24px",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onEnd,
    style: {
      background: TOKENS.cream,
      border: "none",
      color: TOKENS.ink,
      padding: "16px",
      borderRadius: 14,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 700
    }
  }, "Complete session"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: TOKENS.alert,
      border: "none",
      color: "#fff",
      padding: "16px 10px",
      borderRadius: 14,
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 14
  }), " SOS")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px",
      fontSize: 11,
      color: TOKENS.cream + "77",
      lineHeight: 1.5,
      textAlign: "center"
    }
  }, "Ops is on-call. If anything feels off, press SOS \u2014 a human responds in under 60s."));
}

// ---------- WING WOMAN: DEBRIEF ----------
function WingDebrief({
  onDone
}) {
  const [flags, setFlags] = useState([]);
  const quickFlags = ["Client was ready to engage", "Needed more support", "Client asked to extend", "Would work with again", "Something felt off"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      background: TOKENS.cream,
      paddingTop: 54,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 18,
      transform: "rotate(-8deg)"
    }
  }, /*#__PURE__*/React.createElement(CollageIcon, {
    name: "martini",
    size: 72
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: TOKENS.coral,
      marginBottom: 10
    }
  }, "Session complete \xB7 $110.60 earned"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 36,
      lineHeight: 1.05,
      color: TOKENS.ink,
      fontWeight: 500,
      letterSpacing: "-1px",
      paddingRight: 70
    }
  }, "Nice work.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "How did it go?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: TOKENS.ink + "99",
      marginBottom: 10,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "Quick tags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, quickFlags.map(t => {
    const sel = flags.includes(t);
    const alert = t === "Something felt off";
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setFlags(sel ? flags.filter(x => x !== t) : [...flags, t]),
      style: {
        padding: "8px 14px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        cursor: "pointer",
        background: sel ? alert ? TOKENS.alert : TOKENS.ink : "#fff",
        color: sel ? "#fff" : TOKENS.ink,
        border: `1px solid ${sel ? alert ? TOKENS.alert : TOKENS.ink : TOKENS.sand}`
      }
    }, t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: TOKENS.ink + "99",
      marginBottom: 10,
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    }
  }, "Private notes (only you & Wing Gal ops)"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Anything useful for next time. Preferences, triggers, what landed well.",
    style: {
      width: "100%",
      padding: 14,
      borderRadius: 14,
      border: `1px solid ${TOKENS.sand}`,
      background: "#fff",
      fontSize: 13,
      minHeight: 100,
      resize: "none",
      outline: "none",
      fontFamily: "inherit",
      lineHeight: 1.5,
      color: TOKENS.ink
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 24px 20px",
      padding: 18,
      background: TOKENS.dirtyMartini,
      color: TOKENS.peachesAndCream,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      opacity: 0.6,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Payout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 34,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "$110.60"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.6,
      marginTop: 4
    }
  }, "Available to withdraw in 24h")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      textAlign: "right"
    }
  }, "Stripe Connect", /*#__PURE__*/React.createElement("br", null), "\u2022\u2022\u2022\u2022 4219"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      width: "100%",
      background: TOKENS.cta,
      color: "#fff",
      border: "none",
      padding: "16px",
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Submit & wrap up")));
}

// ---------- WING WOMAN: OWN PROFILE ----------
function WingOwnProfile({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100%",
      paddingTop: 54,
      paddingBottom: 80,
      background: TOKENS.cream
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22,
    color: TOKENS.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 24,
      color: TOKENS.ink
    }
  }, "My profile"), /*#__PURE__*/React.createElement(Edit3, {
    size: 18,
    color: TOKENS.ink + "aa"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 16px",
      padding: 20,
      background: `linear-gradient(135deg, ${TOKENS.coral}, ${TOKENS.pink})`,
      borderRadius: 20,
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: "rgba(255,255,255,0.25)",
      border: "2px solid #fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 26,
      fontWeight: 500
    }
  }, "AA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1
    }
  }, "Aaliyah"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.9,
      marginTop: 4,
      fontWeight: 500
    }
  }, "\u2605\u2605\u2605 Confidence Booster"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      fontStyle: "italic",
      opacity: 0.95,
      fontFamily: '"Cormorant Garamond", serif'
    }
  }, "\"Former event host in NYC. I read rooms for a living.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: TOKENS.ink + "aa",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "All-time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: DollarSign,
    label: "Earnings",
    value: "$11.2K",
    sub: "Since Oct",
    color: TOKENS.coral
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: Users,
    label: "Clients served",
    value: "94",
    sub: "67% rebook",
    color: TOKENS.olive
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: Star,
    label: "Avg rating",
    value: "4.9",
    sub: "127 sessions",
    color: TOKENS.peach
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: Award,
    label: "Tier",
    value: "\u2605\u2605\u2605",
    sub: "\u2605\u2605\u2605\u2605\u2605 next",
    color: TOKENS.mauve
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 16px",
      padding: 16,
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: TOKENS.ink
    }
  }, "Availability this week"), /*#__PURE__*/React.createElement(Edit3, {
    size: 16,
    color: TOKENS.ink + "77"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 4
    }
  }, ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
    const active = [4, 5, 6].includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "10px 0",
        textAlign: "center",
        background: active ? TOKENS.coral : TOKENS.paper,
        color: active ? "#fff" : TOKENS.ink + "99",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700
      }
    }, d);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TOKENS.ink + "88",
      marginTop: 10
    }
  }, "Fri\u2013Sun \xB7 7 PM \u2013 2 AM")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 20px",
      background: "#fff",
      border: `1px solid ${TOKENS.sand}`,
      borderRadius: 16,
      overflow: "hidden"
    }
  }, [{
    icon: Award,
    label: "Certification & training"
  }, {
    icon: DollarSign,
    label: "Payouts · Stripe Connect"
  }, {
    icon: Calendar,
    label: "Schedule & availability"
  }, {
    icon: Shield,
    label: "Safety protocols"
  }, {
    icon: Users,
    label: "Wing Woman community"
  }, {
    icon: Settings,
    label: "Settings"
  }].map((it, i, arr) => {
    const Icon = it.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        borderBottom: i < arr.length - 1 ? `1px solid ${TOKENS.sand}` : "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 18,
      color: TOKENS.ink + "aa"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: TOKENS.ink,
        fontWeight: 500,
        flex: 1
      }
    }, it.label), /*#__PURE__*/React.createElement(ChevronRight, {
      size: 16,
      color: TOKENS.ink + "66"
    }));
  })), /*#__PURE__*/React.createElement(BottomNav, {
    active: "account"
  }));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/WingGalApp_1.jsx", error: String((e && e.message) || e) }); }

__ds_ns.App = __ds_scope.App;

})();
