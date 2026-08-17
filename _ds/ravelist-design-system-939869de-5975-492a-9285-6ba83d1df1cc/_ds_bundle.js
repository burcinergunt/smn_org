/* @ds-bundle: {"format":3,"namespace":"RavelistDesignSystem_939869","components":[{"name":"CategoryChip","sourcePath":"components/badges/CategoryChip.jsx"},{"name":"MOODS","sourcePath":"components/badges/MoodPill.jsx"},{"name":"MoodPill","sourcePath":"components/badges/MoodPill.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ActionRail","sourcePath":"components/feed/ActionRail.jsx"},{"name":"FeedCard","sourcePath":"components/feed/FeedCard.jsx"},{"name":"SegmentedToggle","sourcePath":"components/navigation/SegmentedToggle.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"DetailScreen","sourcePath":"ui_kits/app/DetailScreen.jsx"},{"name":"SAMPLE_FEED","sourcePath":"ui_kits/app/FeedScreen.jsx"},{"name":"FeedScreen","sourcePath":"ui_kits/app/FeedScreen.jsx"},{"name":"LogScreen","sourcePath":"ui_kits/app/LogScreen.jsx"}],"sourceHashes":{"components/badges/CategoryChip.jsx":"86207a7d2788","components/badges/MoodPill.jsx":"0d479e940c86","components/core/Avatar.jsx":"8803ce410787","components/core/Button.jsx":"7c0c97c620c5","components/core/Icon.jsx":"1c8e36091461","components/feed/ActionRail.jsx":"ffdbffeeebee","components/feed/FeedCard.jsx":"870581ecf4b9","components/navigation/SegmentedToggle.jsx":"dff92e1e43c9","components/navigation/TabBar.jsx":"11a3f87dbcda","ui_kits/app/DetailScreen.jsx":"5b6a256c1b26","ui_kits/app/FeedScreen.jsx":"cb687602f0dc","ui_kits/app/LogScreen.jsx":"03b81c103aea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RavelistDesignSystem_939869 = window.RavelistDesignSystem_939869 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/CategoryChip.jsx
try { (() => {
/* Ravelist category chip — always-visible category tag on every experience.
   Light mode: 50 fill + 500 text. Dark mode: 900 fill + 50 text. */

const CAT = {
  food: {
    c50: 'var(--rl-food-50)',
    c500: 'var(--rl-food-500)',
    c900: 'var(--rl-food-900)',
    dotDark: '#cf6a45'
  },
  film: {
    c50: 'var(--rl-film-50)',
    c500: 'var(--rl-film-500)',
    c900: 'var(--rl-film-900)',
    dotDark: '#2bbf9b'
  },
  travel: {
    c50: 'var(--rl-travel-50)',
    c500: 'var(--rl-travel-500)',
    c900: 'var(--rl-travel-900)',
    dotDark: '#cf932f'
  },
  music: {
    c50: 'var(--rl-music-50)',
    c500: 'var(--rl-music-500)',
    c900: 'var(--rl-music-900)',
    dotDark: '#d77b9b'
  },
  books: {
    c50: 'var(--rl-books-50)',
    c500: 'var(--rl-books-500)',
    c900: 'var(--rl-books-900)',
    dotDark: '#5b9fe0'
  },
  products: {
    c50: 'var(--rl-products-50)',
    c500: 'var(--rl-products-500)',
    c900: 'var(--rl-products-900)',
    dotDark: '#6aa52a'
  },
  other: {
    c50: 'var(--rl-other-50)',
    c500: 'var(--rl-other-500)',
    c900: 'var(--rl-other-900)',
    dotDark: '#9a988f'
  }
};
const LABEL = {
  food: 'Food',
  film: 'Film',
  travel: 'Travel',
  music: 'Music',
  books: 'Books',
  products: 'Products',
  other: 'Other'
};
function CategoryChip({
  category = 'food',
  dark = false,
  onPhoto = false,
  dot = true,
  style
}) {
  const c = CAT[category] || CAT.food;

  // On a photo we want a bright readable chip regardless of theme → use the light treatment.
  const light = onPhoto || !dark;
  const bg = light ? c.c50 : c.c900;
  const fg = light ? c.c500 : c.c50;
  const dotColor = light ? c.c500 : c.dotDark;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--rl-font)',
      fontWeight: 500,
      fontSize: 12.5,
      lineHeight: 1,
      padding: '6px 13px',
      borderRadius: 'var(--rl-radius-chip)',
      background: bg,
      color: fg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      background: dotColor
    }
  }), LABEL[category]);
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/badges/MoodPill.jsx
try { (() => {
/* Ravelist mood pill — the signature rating element. Lowercase, never numeric.
   `life-changing` is the ONLY inverted pill (purple fill / light text); all six
   others use a light purple fill with dark purple text in both light & dark. */

const MOODS = ['terrible', 'disappointing', 'meh', 'good', 'great', 'mind-blowing', 'life-changing'];
const SIZES = {
  sm: {
    padding: '6px 13px',
    font: 13
  },
  md: {
    padding: '7px 15px',
    font: 13
  },
  lg: {
    padding: '9px 18px',
    font: 15
  }
};
function MoodPill({
  mood = 'good',
  size = 'md',
  selected = false,
  count,
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const isLife = mood === 'life-changing';
  const ring = selected ? {
    border: `2px solid ${isLife ? '#9B8CFF' : 'var(--rl-primary)'}`,
    boxShadow: `0 0 0 4px ${isLife ? 'rgba(155,140,255,.22)' : 'rgba(83,74,183,.14)'}`
  } : {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--rl-font)',
      fontWeight: 500,
      fontSize: s.font,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--rl-radius-pill)',
      whiteSpace: 'nowrap',
      background: isLife ? 'var(--rl-mood-life-fill)' : 'var(--rl-mood-fill)',
      color: isLife ? 'var(--rl-mood-life-text)' : 'var(--rl-mood-text)',
      ...ring,
      ...style
    }
  }, mood, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: isLife ? 0.7 : 1,
      color: isLife ? 'inherit' : '#8b83cf'
    }
  }, count));
}
Object.assign(__ds_scope, { MOODS, MoodPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/MoodPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/* Ravelist avatar — round; falls back to a category-tinted gradient with the
   user's initial when no image is supplied. */

const CAT = {
  food: ['#B5532E', '#6E2A12'],
  film: ['#138066', '#094B3A'],
  travel: ['#A6660F', '#5C3707'],
  music: ['#B5476A', '#6E2540'],
  books: ['#1E76C7', '#114472'],
  products: ['#4C8A18', '#284B0B'],
  other: ['#74736E', '#444340'],
  purple: ['#7A70D6', '#3C3489']
};
function Avatar({
  initial = '',
  src,
  category = 'purple',
  size = 30,
  style
}) {
  const [a, b] = CAT[category] || CAT.purple;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      background: src ? `center/cover url(${src})` : `linear-gradient(135deg, ${a}, ${b})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--rl-font)',
      fontWeight: 500,
      fontSize: Math.round(size * 0.43),
      color: '#fff',
      overflow: 'hidden',
      ...style
    }
  }, !src && initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ravelist line-icon set — geometry mirrors Lucide (https://lucide.dev),
   ~1.8px stroke, round caps/joins, 24px grid. `filled` swaps heart/bookmark
   to a solid engaged state. Self-contained so the bundle has no CDN dep. */

const PATHS = {
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z',
  bookmark: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z',
  share: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13',
  mapPin: 'M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z',
  user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
  plus: 'M5 12h14 M12 5v14',
  search: 'M21 21l-4.3-4.3',
  camera: 'M4 7h3l2-2h6l2 2h3v12H4z',
  x: 'M18 6 6 18 M6 6l12 12',
  chevronLeft: 'M15 18l-6-6 6-6'
};
function Icon({
  name,
  size = 24,
  filled = false,
  color = 'currentColor',
  strokeWidth = 1.8,
  style
}) {
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  };
  // composite icons that need extra primitives
  if (name === 'mapPin') {
    return /*#__PURE__*/React.createElement("svg", base, /*#__PURE__*/React.createElement("path", {
      d: PATHS.mapPin
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3",
      fill: filled ? '#fff' : 'none'
    }));
  }
  if (name === 'user') {
    return /*#__PURE__*/React.createElement("svg", base, /*#__PURE__*/React.createElement("path", {
      d: PATHS.user
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    }));
  }
  if (name === 'search') {
    return /*#__PURE__*/React.createElement("svg", base, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: PATHS.search
    }));
  }
  if (name === 'camera') {
    return /*#__PURE__*/React.createElement("svg", base, /*#__PURE__*/React.createElement("path", {
      d: PATHS.camera
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "13",
      r: "3.2"
    }));
  }
  if (name === 'grid') {
    return /*#__PURE__*/React.createElement("svg", _extends({}, base, {
      fill: filled ? color : 'none',
      stroke: filled ? 'none' : color
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "8",
      height: "8",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "3",
      width: "8",
      height: "8",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "13",
      width: "8",
      height: "8",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "13",
      width: "8",
      height: "8",
      rx: "2"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", base, /*#__PURE__*/React.createElement("path", {
    d: PATHS[name] || ''
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/* Ravelist button — pill (20px) in three variants. Impact via fill + scale,
   never heavy weight. */

const SIZES = {
  sm: {
    padding: '9px 16px',
    font: 13
  },
  md: {
    padding: '12px 22px',
    font: 15
  },
  lg: {
    padding: '14px 26px',
    font: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leadingIcon,
  disabled = false,
  onClick,
  children,
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--rl-primary)',
      color: 'var(--rl-on-primary)',
      border: 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--rl-text)',
      border: '0.5px solid var(--rl-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--rl-primary)',
      border: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--rl-font)',
      fontWeight: 500,
      fontSize: s.font,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--rl-radius-pill)',
      width: fullWidth ? '100%' : 'auto',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform .08s ease, filter .12s ease',
      WebkitTapHighlightColor: 'transparent',
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: size === 'sm' ? 16 : 18
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feed/ActionRail.jsx
try { (() => {
/* Ravelist immersive action rail — the always-visible heart / save / share
   stack that rides the right edge of a full-bleed feed card. Glass buttons. */

function GlassButton({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--rl-glass)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children);
}
function RailItem({
  children,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      fontFamily: 'var(--rl-font)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(GlassButton, null, children), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500
    }
  }, label));
}
function ActionRail({
  likes = 0,
  liked = false,
  saved = false,
  onLike,
  onSave,
  onShare,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement(RailItem, {
    label: String(likes),
    onClick: onLike
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 24,
    filled: liked,
    color: liked ? 'var(--rl-like)' : '#fff',
    strokeWidth: 1.7
  })), /*#__PURE__*/React.createElement(RailItem, {
    label: saved ? 'Saved' : 'Save',
    onClick: onSave
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bookmark",
    size: 22,
    filled: saved,
    color: "#fff",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement(RailItem, {
    label: "Share",
    onClick: onShare
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 22,
    color: "#fff",
    strokeWidth: 1.8
  })));
}
Object.assign(__ds_scope, { ActionRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feed/ActionRail.jsx", error: String((e && e.message) || e) }); }

// components/feed/FeedCard.jsx
try { (() => {
/* Ravelist immersive feed card (Layout A) — one full-bleed experience.
   Photo fills, content overlays the bottom under a scrim, actions ride the
   right rail. This is a single snap unit; the screen stacks status bar,
   the floating Feed/Discover toggle, and the tab bar around it. */

const GRAD = {
  food: 'linear-gradient(150deg,#B5532E,#993C1D 55%,#6E2A12)',
  film: 'linear-gradient(150deg,#138066,#0F6E56 55%,#094B3A)',
  travel: 'linear-gradient(150deg,#A6660F,#854F0B 55%,#5C3707)',
  music: 'linear-gradient(150deg,#B5476A,#993556 55%,#6E2540)',
  books: 'linear-gradient(150deg,#1E76C7,#185FA5 55%,#114472)',
  products: 'linear-gradient(150deg,#4C8A18,#3B6D11 55%,#284B0B)',
  other: 'linear-gradient(150deg,#74736E,#5F5E5A 55%,#444340)'
};
function FeedCard({
  experience = {},
  liked = false,
  saved = false,
  onLike,
  onSave,
  onShare,
  style
}) {
  const {
    category = 'food',
    mood = 'great',
    title = '',
    context = '',
    photoLabel,
    photoSrc,
    user = {},
    likes = 0
  } = experience;
  const photo = photoSrc ? {
    background: `center/cover url(${photoSrc})`
  } : {
    background: GRAD[category] || GRAD.food
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#000',
      fontFamily: 'var(--rl-font)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      ...photo
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(115deg, rgba(255,255,255,.05) 0 2px, transparent 2px 22px)',
      mixBlendMode: 'overlay'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 60% at 72% 20%, rgba(255,255,255,.2), transparent 60%)'
    }
  }), photoLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      bottom: 232,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.55)'
    }
  }, photoLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 150,
      background: 'var(--rl-scrim-top)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ActionRail, {
    likes: likes,
    liked: liked,
    saved: saved,
    onLike: onLike,
    onSave: onSave,
    onShare: onShare,
    style: {
      position: 'absolute',
      right: 14,
      bottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '60px 20px 22px',
      background: 'var(--rl-scrim-bottom)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryChip, {
    category: category,
    onPhoto: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initial: user.initial,
    category: category,
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, user.handle), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: 'rgba(255,255,255,.7)'
    }
  }, "rated this")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoodPill, {
    mood: mood,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--rl-display-size)',
      fontWeight: 500,
      letterSpacing: 'var(--rl-display-ls)',
      lineHeight: 1.08,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: 'rgba(255,255,255,.78)'
    }
  }, context)));
}
Object.assign(__ds_scope, { FeedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feed/FeedCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedToggle.jsx
try { (() => {
/* Ravelist segmented toggle — the Feed / Discover switch. Two looks:
   `surface` (on a solid header) and `overlay` (floating over a photo). */

function SegmentedToggle({
  options = ['Feed', 'Discover'],
  value,
  onChange,
  variant = 'surface',
  style
}) {
  const active = value ?? options[0];
  const overlay = variant === 'overlay';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: overlay ? 4 : 3,
      padding: overlay ? 4 : 3,
      borderRadius: 'var(--rl-radius-pill)',
      background: overlay ? 'rgba(0,0,0,.28)' : 'var(--rl-surface)',
      backdropFilter: overlay ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: overlay ? 'blur(10px)' : 'none',
      fontFamily: 'var(--rl-font)',
      ...style
    }
  }, options.map(opt => {
    const on = opt === active;
    const styles = overlay ? {
      background: on ? '#fff' : 'transparent',
      color: on ? 'var(--rl-ink)' : 'rgba(255,255,255,.85)'
    } : {
      background: on ? 'var(--rl-primary)' : 'transparent',
      color: on ? '#fff' : 'var(--rl-text-muted)'
    };
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      onClick: () => onChange && onChange(opt),
      style: {
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 500,
        fontSize: 14,
        padding: overlay ? '7px 18px' : '7px 16px',
        borderRadius: overlay ? 16 : 18,
        ...styles
      }
    }, opt);
  }));
}
Object.assign(__ds_scope, { SegmentedToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/* Ravelist tab bar — 56px. Feed · Map · (Log, raised centre FAB) · Profile.
   Discover is NOT here (it's a toggle in the Feed header). */

function Tab({
  icon,
  label,
  active,
  dark,
  onClick
}) {
  const color = active ? 'var(--rl-tab-active)' : 'var(--rl-tab-inactive)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--rl-font)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    filled: active && icon === 'grid',
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500
    }
  }, label));
}
function TabBar({
  active = 'feed',
  dark = false,
  onTab,
  onLog,
  style
}) {
  const go = k => () => onTab && onTab(k);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rl-tabbar-h)',
      display: 'flex',
      alignItems: 'center',
      background: dark ? 'var(--rl-ink)' : 'var(--rl-white)',
      borderTop: `0.5px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'}`,
      fontFamily: 'var(--rl-font)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    icon: "grid",
    label: "Feed",
    active: active === 'feed',
    dark: dark,
    onClick: go('feed')
  }), /*#__PURE__*/React.createElement(Tab, {
    icon: "mapPin",
    label: "Map",
    active: active === 'map',
    dark: dark,
    onClick: go('map')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 76,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLog,
    style: {
      width: 'var(--rl-fab-size)',
      height: 'var(--rl-fab-size)',
      borderRadius: '50%',
      marginTop: -20,
      background: 'var(--rl-primary)',
      border: `3px solid ${dark ? 'var(--rl-ink)' : '#fff'}`,
      boxShadow: 'var(--rl-shadow-fab)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 26,
    color: "#fff",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      marginTop: 1,
      color: 'var(--rl-tab-active)'
    }
  }, "Log")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    icon: "user",
    label: "Profile",
    active: active === 'profile',
    dark: dark,
    onClick: go('profile')
  })));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DetailScreen.jsx
try { (() => {
/* Experience detail — hero photo, the rater's take, the mood spread, and a
   pinned bottom bar whose primary action invites you to rate it yourself. */

const GRAD = {
  food: 'linear-gradient(150deg,#B5532E,#993C1D 55%,#6E2A12)',
  film: 'linear-gradient(150deg,#138066,#0F6E56 55%,#094B3A)',
  travel: 'linear-gradient(150deg,#A6660F,#854F0B 55%,#5C3707)',
  music: 'linear-gradient(150deg,#B5476A,#993556 55%,#6E2540)',
  books: 'linear-gradient(150deg,#1E76C7,#185FA5 55%,#114472)',
  products: 'linear-gradient(150deg,#4C8A18,#3B6D11 55%,#284B0B)',
  other: 'linear-gradient(150deg,#74736E,#5F5E5A 55%,#444340)'
};
function DetailScreen({
  experience,
  dark = false,
  onBack,
  onRate
}) {
  const e = experience;
  const ink = dark ? '#fff' : 'var(--rl-ink)';
  const muted = dark ? 'var(--rl-ink-on-dark-muted)' : 'var(--rl-ink-muted)';
  const faint = dark ? 'var(--rl-ink-on-dark-faint)' : 'var(--rl-ink-faint)';
  const glass = {
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: 'rgba(0,0,0,.34)',
    backdropFilter: 'blur(8px)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? 'dark' : 'light',
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: dark ? 'var(--rl-ink)' : '#fff',
      fontFamily: 'var(--rl-font)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 300,
      background: GRAD[e.category]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,.4) 0%, transparent 28%, transparent 70%, rgba(0,0,0,.15))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 16,
      right: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: glass
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronLeft",
    size: 22,
    color: "#fff",
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: glass
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "share",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: glass
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bookmark",
    size: 20,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryChip, {
    category: e.category,
    onPhoto: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    style: {
      position: 'absolute',
      top: 300,
      left: 0,
      right: 0,
      bottom: 78,
      overflowY: 'scroll',
      padding: '18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoodPill, {
    mood: e.mood,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-0.025em',
      lineHeight: 1.06,
      color: ink
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 9,
      color: muted
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mapPin",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, e.context)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initial: e.user.initial,
    category: e.category,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: ink
    }
  }, e.user.handle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: faint
    }
  }, "rated this \xB7 today")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm"
  }, "Follow"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: dark ? '#cfccc5' : '#3a3833',
      marginTop: 16
    }
  }, e.take), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '0.5px',
      background: dark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.1)',
      margin: '18px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: faint,
      marginBottom: 12
    }
  }, "How others felt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, (e.others || []).map(([m, n], i) => /*#__PURE__*/React.createElement(__ds_scope.MoodPill, {
    key: i,
    mood: m,
    count: n
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 78,
      background: dark ? 'var(--rl-ink)' : '#fff',
      borderTop: `0.5px solid ${dark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.08)'}`,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '0 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      color: 'var(--rl-like)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 24,
    filled: true,
    color: "var(--rl-like)",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500
    }
  }, e.likes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      color: muted
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bookmark",
    size: 24,
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500
    }
  }, "Save")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    style: {
      marginLeft: 'auto'
    },
    onClick: onRate
  }, "Rate this too")));
}
Object.assign(__ds_scope, { DetailScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FeedScreen.jsx
try { (() => {
const {
  useState
} = React;
/* Immersive feed (Layout A) — vertical snap-scroll of full-bleed experiences.
   Status bar + Feed/Discover toggle float over the photo; the tab bar grounds
   the bottom. Tapping a card calls onOpen(index). */

const SAMPLE_FEED = [{
  category: 'music',
  mood: 'life-changing',
  title: 'Fred again.. — closing 40 minutes',
  context: 'Boiler Room London · the room completely lost it',
  photoLabel: 'BOILER ROOM · LIVE SET',
  user: {
    handle: '@nadia.k',
    initial: 'N'
  },
  likes: 2400
}, {
  category: 'film',
  mood: 'mind-blowing',
  title: 'Past Lives — the final scene',
  context: 'Rio cinema · still thinking about it days later',
  photoLabel: 'A24 · CINEMA',
  user: {
    handle: '@jonas.reads',
    initial: 'J'
  },
  likes: 1100
}, {
  category: 'food',
  mood: 'mind-blowing',
  title: 'Uni toast, extra caviar',
  context: 'Kotobuki, Lisbon · worth the whole trip on its own',
  photoLabel: 'THE DISH · NOT THE SPOT',
  user: {
    handle: '@marco.eats',
    initial: 'M'
  },
  likes: 412
}];
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      fontFamily: 'var(--rl-font)'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      opacity: .9
    }
  }, "\u25CF \u25CF \u25CF"));
}
function FeedScreen({
  feed = SAMPLE_FEED,
  onOpen,
  onLog,
  onTab
}) {
  const [tab, setTab] = useState('Feed');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 56,
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory'
    }
  }, feed.map((exp, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: '100%',
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FeedCard, {
    experience: exp,
    onLike: () => {},
    onSave: () => {},
    onShare: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen && onOpen(i),
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SegmentedToggle, {
    variant: "overlay",
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TabBar, {
    active: "feed",
    onTab: onTab,
    onLog: onLog
  })));
}
Object.assign(__ds_scope, { SAMPLE_FEED, FeedScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/LogScreen.jsx
try { (() => {
const {
  useState
} = React;
/* Log / rate composer — the centre tab. Name the experience, pick a category,
   then set the mood on the full 7-level scale (the selected level is ringed). */

const GRAD = {
  food: 'linear-gradient(150deg,#B5532E,#993C1D 55%,#6E2A12)',
  film: 'linear-gradient(150deg,#138066,#0F6E56 55%,#094B3A)',
  travel: 'linear-gradient(150deg,#A6660F,#854F0B 55%,#5C3707)',
  music: 'linear-gradient(150deg,#B5476A,#993556 55%,#6E2540)',
  books: 'linear-gradient(150deg,#1E76C7,#185FA5 55%,#114472)'
};
const C500 = {
  food: 'var(--rl-food-500)',
  film: 'var(--rl-film-500)',
  travel: 'var(--rl-travel-500)',
  music: 'var(--rl-music-500)',
  books: 'var(--rl-books-500)'
};
const LABEL = {
  food: 'Food',
  film: 'Film',
  travel: 'Travel',
  music: 'Music',
  books: 'Books'
};
const Eyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color,
    margin: '22px 0 10px'
  }
}, children);
function LogScreen({
  dark = false,
  onClose,
  onPost
}) {
  const [cat, setCat] = useState('food');
  const [mood, setMood] = useState('mind-blowing');
  const ink = dark ? '#fff' : 'var(--rl-ink)';
  const faint = dark ? 'var(--rl-ink-on-dark-faint)' : 'var(--rl-ink-faint)';
  const chipOff = dark ? {
    background: 'var(--rl-coal)',
    color: 'var(--rl-ink-on-dark-muted)'
  } : {
    background: 'var(--rl-sand)',
    color: 'var(--rl-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? 'dark' : 'light',
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: dark ? 'var(--rl-ink)' : '#fff',
      fontFamily: 'var(--rl-font)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 44,
      left: 0,
      right: 0,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      borderBottom: `0.5px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.07)'}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: dark ? 'var(--rl-coal)' : 'var(--rl-sand)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18,
    color: dark ? '#b6b3ac' : '#5b5852',
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: ink
    }
  }, "New rating"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onPost
  }, "Post")), /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    style: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'scroll',
      padding: '20px 16px 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: faint
  }, "What did you experience?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: ink,
      paddingBottom: 10,
      borderBottom: '1.5px solid var(--rl-primary)'
    }
  }, "Uni toast, extra caviar", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rl-primary)',
      fontWeight: 400
    }
  }, "|")), /*#__PURE__*/React.createElement(Eyebrow, {
    color: faint
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, Object.keys(LABEL).map(k => {
    const on = k === cat;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setCat(k),
      style: {
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: on ? '7px 15px' : '7px 14px',
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 500,
        ...(on ? {
          background: C500[k],
          color: '#fff'
        } : chipOff)
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 4,
        background: '#fff'
      }
    }), LABEL[k]);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      height: 132,
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      background: GRAD[cat]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 75% 20%, rgba(255,255,255,.22), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(0,0,0,.4)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement(Eyebrow, {
    color: faint
  }, "How was it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, __ds_scope.MOODS.map(m => {
    const on = m === mood;
    if (on) return /*#__PURE__*/React.createElement("span", {
      key: m,
      onClick: () => setMood(m),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.MoodPill, {
      mood: m,
      selected: true
    }));
    const life = m === 'life-changing';
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: () => setMood(m),
      style: {
        border: 'none',
        cursor: 'pointer',
        padding: '7px 13px',
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 500,
        ...(life ? {
          background: 'var(--rl-mood-life-fill)',
          color: 'var(--rl-mood-life-text)',
          opacity: .5
        } : chipOff)
      }
    }, m);
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    color: faint
  }, "Your take"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: dark ? '#cfccc5' : '#3a3833'
    }
  }, "Sea-urchin on warm milk bread", /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? '#6a6862' : '#b8b5ad'
    }
  }, " \u2014 what made it special?"))));
}
Object.assign(__ds_scope, { LogScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/LogScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.MOODS = __ds_scope.MOODS;

__ds_ns.MoodPill = __ds_scope.MoodPill;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ActionRail = __ds_scope.ActionRail;

__ds_ns.FeedCard = __ds_scope.FeedCard;

__ds_ns.SegmentedToggle = __ds_scope.SegmentedToggle;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.DetailScreen = __ds_scope.DetailScreen;

__ds_ns.SAMPLE_FEED = __ds_scope.SAMPLE_FEED;

__ds_ns.FeedScreen = __ds_scope.FeedScreen;

__ds_ns.LogScreen = __ds_scope.LogScreen;

})();
