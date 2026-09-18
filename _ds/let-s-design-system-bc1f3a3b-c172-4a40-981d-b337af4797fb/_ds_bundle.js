/* @ds-bundle: {"format":4,"namespace":"LetSDesignSystem_bc1f3a","components":[],"sourceHashes":{"ui_kits/email/components.jsx":"cf2e126f3783","ui_kits/marketing/components.jsx":"8934e5f1156f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LetSDesignSystem_bc1f3a = window.LetSDesignSystem_bc1f3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/email/components.jsx
try { (() => {
/* eslint-disable */
const {
  useState
} = React;
const C = {
  orange: 'rgb(241,90,34)',
  orangeDark: 'rgb(231,86,19)',
  ink: '#000',
  navy: 'rgb(35,43,89)',
  panel: 'rgb(234,234,234)',
  white: '#fff',
  black: 'rgb(17,15,12)'
};
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.orange,
      padding: '14px 36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 96,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lets-logo-square.png",
    alt: "Let's",
    style: {
      height: 68
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: C.white,
      letterSpacing: '-0.005em'
    }
  }, "Frota sob medida para sua empresa"));
}
function Hero({
  eyebrow,
  titleOrange,
  titleBlack,
  sub,
  image
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 600,
      borderRadius: '0 0 0 122px',
      overflow: 'hidden',
      background: '#1a1a1a'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(0.85) contrast(1.05)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-lets-pattern.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.12,
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(0,0,0,0) 42%, rgb(0,0,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 67,
      right: 67,
      bottom: 60
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: C.orange,
      marginBottom: 18
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: C.orange
    }
  }, titleOrange), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: C.white,
      marginTop: -4
    }
  }, titleBlack), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 32,
      color: C.white,
      marginTop: 28,
      lineHeight: 1.15,
      maxWidth: 900
    }
  }, sub)));
}
function Section({
  children,
  panel = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: panel ? C.panel : C.white,
      padding: panel ? '52px 67px 33px' : '44px 67px'
    }
  }, children);
}
function Body({
  children,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 22,
      lineHeight: 1.5,
      color: '#000',
      fontWeight: bold ? 700 : 400
    }
  }, children);
}
function Check({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 22,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "24",
    viewBox: "0 0 42 31",
    style: {
      flexShrink: 0,
      marginTop: 4,
      color: C.orange
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 16 L14 26 L39 4",
    stroke: "currentColor",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, children));
}
function Alert({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 22,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 40 40",
    style: {
      flexShrink: 0,
      marginTop: 2,
      color: C.orange
    },
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "20"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "9",
    width: "4",
    height: "14",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "29",
    r: "2.2",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("span", null, children));
}
function QuoteCard({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `3px solid ${C.orange}`,
      borderRadius: '0 70px 0 70px',
      padding: '40px 48px',
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 24,
      lineHeight: 1.4,
      maxWidth: 820
    }
  }, children);
}
function CTAFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: C.white,
      height: 220,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-lets-pattern.png",
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -80,
      width: '120%',
      opacity: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 67,
      top: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 32,
      color: C.orange,
      lineHeight: 1.05
    }
  }, "Transpar\xEAncia que", /*#__PURE__*/React.createElement("br", null), "move o futuro."), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 51 37",
    width: "50",
    height: "36",
    fill: C.orange,
    style: {
      marginLeft: 6,
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "13.9",
    cy: "5",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "35.9",
    cy: "5",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 50 24 C 48.7 22.8 46.5 22.6 45.1 23.9 C 44.8 24.1 37.9 30 25.8 30.1 C 15.3 30.2 7.8 25.6 5.7 23.9 C 4.3 22.6 2.1 22.8 0.8 24.2 C -0.4 25.7 -0.2 27.9 1.2 29.1 C 1.6 29.5 10.5 37 25.5 37 C 25.6 37 25.8 37 25.9 37 C 40.3 36.9 48.7 29.9 49.6 29.2 C 51.1 27.9 51.2 25.7 50 24.3 Z"
  }))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: '#000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.orange,
      padding: '36px 60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: C.white
    }
  }, "lets.com.br"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "instagram"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "facebook"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "linkedin"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lets-logo-square.png",
    alt: "",
    style: {
      height: 90
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 60,
      background: 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 12,
      color: '#fff'
    }
  }, "uma empresa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: 38,
      color: C.navy,
      letterSpacing: '0.04em',
      lineHeight: 1
    }
  }, "VIXPAR")))));
}
function SocialIcon({
  kind
}) {
  const wrap = {
    width: 36,
    height: 36,
    border: '2.5px solid #fff',
    borderRadius: 8,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  };
  if (kind === 'instagram') return /*#__PURE__*/React.createElement("span", {
    style: wrap
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 19 19",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.6 0h7.8C16.5 0 19 2.5 19 5.6v7.8c0 3.1-2.5 5.6-5.6 5.6H5.6C2.5 19 0 16.5 0 13.4V5.6C0 2.5 2.5 0 5.6 0zm4 4.8a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 1.9a2.9 2.9 0 110 5.8 2.9 2.9 0 010-5.8zm5-3.3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
  })));
  if (kind === 'facebook') return /*#__PURE__*/React.createElement("span", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: 22,
      lineHeight: 1,
      marginTop: -2
    }
  }, "f"));
  return /*#__PURE__*/React.createElement("span", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: 13,
      lineHeight: 1
    }
  }, "in"));
}
Object.assign(window, {
  TopBar,
  Hero,
  Section,
  Body,
  Check,
  Alert,
  QuoteCard,
  CTAFooter,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components.jsx
try { (() => {
/* eslint-disable */
const {
  useState
} = React;
const MC = {
  orange: 'rgb(241,90,34)',
  orangeDark: 'rgb(231,86,19)',
  ink: '#000',
  navy: 'rgb(35,43,89)',
  panel: 'rgb(234,234,234)',
  white: '#fff',
  black: 'rgb(17,15,12)'
};
function Nav({
  active,
  onNav
}) {
  const items = ['Soluções', 'Operações reguladas', 'Sobre', 'Contato'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: '#fff',
      padding: '18px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #eaeaea',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lets-logo-square.png",
    alt: "Let's",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(i);
    },
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 16,
      color: active === i ? MC.orange : '#000',
      fontWeight: active === i ? 700 : 500,
      textDecoration: 'none'
    }
  }, i)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: MC.orange,
      color: '#fff',
      border: 0,
      borderRadius: 999,
      padding: '12px 24px',
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, "Solicitar proposta")));
}
function MktHero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 580,
      overflow: 'hidden',
      borderRadius: '0 0 0 122px',
      background: '#1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 30% 40%, #2a2a2a, #0a0a0a 70%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-lets-pattern.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -100,
      top: 60,
      width: 720,
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 67,
      top: 110,
      right: 67
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: MC.orange,
      marginBottom: 22
    }
  }, "Frota sob medida para sua empresa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 88,
      lineHeight: 0.98,
      color: MC.orange,
      letterSpacing: '-0.015em'
    }
  }, "Transpar\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 88,
      lineHeight: 0.98,
      color: '#fff',
      letterSpacing: '-0.015em',
      marginTop: -6
    }
  }, "que move o futuro."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 22,
      color: '#fff',
      marginTop: 28,
      maxWidth: 720,
      lineHeight: 1.4,
      opacity: 0.92
    }
  }, "Gest\xE3o completa de frotas para empresas que operam onde o erro n\xE3o \xE9 uma op\xE7\xE3o. Documenta\xE7\xE3o em dia, telemetria, manuten\xE7\xE3o preventiva e zero improviso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: MC.orange,
      color: '#fff',
      border: 0,
      borderRadius: 999,
      padding: '16px 32px',
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 17,
      cursor: 'pointer'
    }
  }, "Solicitar proposta"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: 999,
      padding: '14px 30px',
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 17,
      cursor: 'pointer'
    }
  }, "Conhe\xE7a as solu\xE7\xF5es"))));
}
function StatRow() {
  const stats = [['+15 anos', 'de experiência em frotas reguladas'], ['100%', 'documentação rastreável'], ['24/7', 'monitoramento e suporte'], ['ANEFAC', 'Troféu Transparência 2025']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '60px 67px',
      borderBottom: '1px solid #eaeaea'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 36
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: 44,
      color: MC.orange,
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 16,
      color: '#000',
      marginTop: 10,
      lineHeight: 1.4
    }
  }, l)))));
}
function ProblemSection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MC.panel,
      padding: '80px 67px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1106,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.15,
      marginBottom: 24
    }
  }, "Em algumas \xE1reas, a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: MC.orange
    }
  }, "toler\xE2ncia a erros \xE9 zero"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 20,
      lineHeight: 1.5,
      color: '#000',
      marginBottom: 36,
      maxWidth: 880
    }
  }, "Existem opera\xE7\xF5es que ", /*#__PURE__*/React.createElement("strong", null, "n\xE3o perdoam improvisos"), ", n\xE3o permitem atrasos e ", /*#__PURE__*/React.createElement("strong", null, "n\xE3o toleram falhas processuais"), ". Para essas opera\xE7\xF5es, a precis\xE3o \xE9 a \xFAnica margem de erro aceit\xE1vel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14,
      maxWidth: 880
    }
  }, ['Documentação, laudos e licenças sempre em dia', 'Customizações obrigatórias e específicas', 'Telemetria e rastreamento rigoroso', 'Manutenção preventiva sem falhas'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "20",
    viewBox: "0 0 42 31",
    style: {
      flexShrink: 0,
      marginTop: 4,
      color: MC.orange
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 16 L14 26 L39 4",
    stroke: "currentColor",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 18,
      lineHeight: 1.4
    }
  }, t))))));
}
function SolutionsGrid() {
  const items = [{
    t: 'Locação de frota leve',
    d: 'Veículos selecionados conforme o perfil operacional, com renovação programada e gestão de quilometragem.'
  }, {
    t: 'Locação pesada e especiais',
    d: 'Caminhões, utilitários e veículos customizados para operações reguladas e de alta complexidade.'
  }, {
    t: 'Telemetria + compliance',
    d: 'Rastreamento em tempo real, alertas de condução e relatórios prontos para auditoria.'
  }, {
    t: 'Gestão de manutenção',
    d: 'Rede credenciada, manutenção preventiva e indicadores de disponibilidade da frota.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '80px 67px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1106,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontStyle: 'italic',
      fontSize: 56,
      lineHeight: 1,
      color: MC.orange
    }
  }, "Como a Let's"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontStyle: 'italic',
      fontSize: 56,
      lineHeight: 1,
      color: '#000',
      marginTop: -2
    }
  }, "protege sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18,
      marginTop: 48
    }
  }, items.map(({
    t,
    d
  }) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: `2px solid ${MC.orange}`,
      borderRadius: '0 32px 0 32px',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 22,
      color: '#000',
      marginBottom: 10
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 16,
      lineHeight: 1.5,
      color: '#333'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: MC.orange,
      textDecoration: 'none'
    }
  }, "Saiba mais \u2192")))))));
}
function CTABand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MC.orange,
      padding: '64px 67px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-lets-pattern.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -50,
      top: -40,
      width: 600,
      opacity: 0.18,
      mixBlendMode: 'overlay'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1106,
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.15,
      color: '#fff',
      maxWidth: 700
    }
  }, "Sua frota est\xE1 pronta para esse n\xEDvel de exig\xEAncia?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 16,
      color: '#fff',
      marginTop: 12,
      opacity: 0.95
    }
  }, "Fale com um especialista da Let's. Resposta em at\xE9 24 h \xFAteis.")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#000',
      color: '#fff',
      border: 0,
      borderRadius: 999,
      padding: '18px 36px',
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 17,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, "Solicitar proposta")));
}
function MktFooter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: '#000'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: MC.orange,
      padding: '40px 60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: 24,
      color: '#fff'
    }
  }, "lets.com.br"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['instagram', 'facebook', 'linkedin'].map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: 34,
      height: 34,
      border: '2.5px solid #fff',
      borderRadius: 8,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: k === 'linkedin' ? 12 : 18
    }
  }, k === 'instagram' ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 19 19",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.6 0h7.8C16.5 0 19 2.5 19 5.6v7.8c0 3.1-2.5 5.6-5.6 5.6H5.6C2.5 19 0 16.5 0 13.4V5.6C0 2.5 2.5 0 5.6 0zm4 4.8a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 1.9a2.9 2.9 0 110 5.8 2.9 2.9 0 010-5.8zm5-3.3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
  })) : k === 'facebook' ? 'f' : 'in')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lets-logo-square.png",
    alt: "",
    style: {
      height: 70
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 50,
      background: 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontSize: 11,
      color: '#fff'
    }
  }, "uma empresa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 900,
      fontSize: 30,
      color: MC.navy,
      letterSpacing: '0.04em',
      lineHeight: 1
    }
  }, "VIXPAR")))));
}
Object.assign(window, {
  Nav,
  MktHero,
  StatRow,
  ProblemSection,
  SolutionsGrid,
  CTABand,
  MktFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components.jsx", error: String((e && e.message) || e) }); }

})();
