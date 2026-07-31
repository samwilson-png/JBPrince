/* @ds-bundle: {"format":4,"namespace":"JBPrinceDesignSystem_e1e326","components":[{"name":"Badge","sourcePath":"components/commerce/Badge.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/commerce/Badge.jsx":"5bc341fd77d0","components/commerce/PriceTag.jsx":"6210fc76d858","components/commerce/ProductCard.jsx":"8d43b7876fc8","components/commerce/QuantityStepper.jsx":"3a0f9395d1e4","components/feedback/Alert.jsx":"4bb6c9db80a7","components/feedback/Tag.jsx":"0802c5597a36","components/forms/Button.jsx":"3c0a715da2ab","components/forms/Checkbox.jsx":"5001c63e9b8c","components/forms/Input.jsx":"d97d135cde3c","components/forms/Select.jsx":"f8bb8d22078b","components/navigation/Breadcrumbs.jsx":"20612904ce5a","components/navigation/NavBar.jsx":"9dc384e561d0","ui_kits/storefront/Screens.jsx":"d76c9b0d864e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JBPrinceDesignSystem_e1e326 = window.JBPrinceDesignSystem_e1e326 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Badge.jsx
try { (() => {
function Badge({
  tone = "neutral",
  children
}) {
  const tones = {
    neutral: {
      background: "var(--neutral-800)",
      color: "#fff"
    },
    red: {
      background: "var(--color-brand-primary)",
      color: "#fff"
    },
    success: {
      background: "var(--color-success-tint)",
      color: "var(--color-success)"
    },
    warning: {
      background: "var(--color-warning-tint)",
      color: "var(--color-warning)"
    },
    danger: {
      background: "var(--color-danger-tint)",
      color: "var(--color-danger)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      display: "inline-block",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
function PriceTag({
  price,
  compareAt,
  size = "md"
}) {
  const sizes = {
    sm: "18px",
    md: "26px",
    lg: "34px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "10px",
      fontFamily: "var(--font-condensed)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes[size],
      fontWeight: 700,
      color: compareAt ? "var(--color-brand-primary)" : "var(--color-text-primary)"
    }
  }, "$", Number(price).toFixed(2)), compareAt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-text-secondary)",
      textDecoration: "line-through"
    }
  }, "$", Number(compareAt).toFixed(2)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  title,
  vendor,
  price,
  compareAt,
  badge
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1",
      background: "var(--neutral-50)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      position: "relative",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-none)",
      transition: "box-shadow var(--duration-base) var(--ease-standard)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--neutral-400)",
      fontSize: "var(--text-sm)"
    }
  }, "Product image"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      left: "10px"
    }
  }, badge)), vendor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)"
    }
  }, vendor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-medium)",
      color: hover ? "var(--color-text-link-hover)" : "var(--color-text-primary)",
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    compareAt: compareAt,
    size: "sm"
  }));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange
}) {
  const dec = () => onChange && onChange(Math.max(min, value - 1));
  const inc = () => onChange && onChange(Math.min(max, value + 1));
  const btnStyle = {
    width: "36px",
    height: "40px",
    border: "1px solid var(--color-border-default)",
    background: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    color: "var(--color-text-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...btnStyle,
      borderRadius: "var(--radius-sm) 0 0 var(--radius-sm)"
    },
    onClick: dec,
    "aria-label": "Decrease quantity"
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    value: value,
    style: {
      width: "44px",
      textAlign: "center",
      border: "1px solid var(--color-border-default)",
      borderLeft: "none",
      borderRight: "none",
      fontSize: "var(--text-base)",
      color: "var(--color-text-primary)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...btnStyle,
      borderRadius: "0 var(--radius-sm) var(--radius-sm) 0"
    },
    onClick: inc,
    "aria-label": "Increase quantity"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  tone = "info",
  title,
  children
}) {
  const tones = {
    info: {
      bg: "var(--color-info-tint)",
      fg: "var(--color-info)"
    },
    success: {
      bg: "var(--color-success-tint)",
      fg: "var(--color-success)"
    },
    warning: {
      bg: "var(--color-warning-tint)",
      fg: "var(--color-warning)"
    },
    danger: {
      bg: "var(--color-danger-tint)",
      fg: "var(--color-danger)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      background: t.bg,
      borderLeft: `3px solid ${t.fg}`,
      padding: "14px 18px",
      borderRadius: "var(--radius-sm)",
      color: "var(--color-text-primary)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      marginBottom: "4px",
      color: t.fg
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)"
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "12px",
      fontWeight: 500,
      background: "var(--neutral-100)",
      color: "var(--color-text-primary)",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: "pointer",
      color: "var(--color-text-secondary)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled,
  icon,
  children,
  onClick,
  type = "button"
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "12px 20px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "15px 28px",
      fontSize: "var(--text-md)"
    }
  };
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-bold)",
    letterSpacing: "var(--tracking-normal)",
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: `background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)`,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--color-brand-primary)",
      color: "var(--color-text-on-red)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text-primary)",
      borderColor: "var(--color-border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-brand-primary)"
    },
    dark: {
      background: "var(--neutral-800)",
      color: "#fff"
    }
  };
  const hover = {
    primary: {
      background: "var(--color-brand-primary-hover)"
    },
    secondary: {
      background: "var(--neutral-100)"
    },
    ghost: {
      background: "var(--color-brand-primary-tint)"
    },
    dark: {
      background: "var(--neutral-700)"
    }
  };
  const [isHover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(isHover && !disabled ? hover[variant] : {})
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    style: style,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--color-text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: "16px",
      height: "16px",
      accentColor: "var(--color-brand-primary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  error,
  helpText,
  value,
  onChange,
  disabled
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      padding: "11px 14px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${error ? "var(--color-danger)" : focused ? "var(--color-border-focus)" : "var(--color-border-default)"}`,
      outline: "none",
      background: disabled ? "var(--neutral-100)" : "#fff",
      color: "var(--color-text-primary)",
      boxShadow: focused ? "0 0 0 3px var(--color-brand-primary-tint)" : "none",
      transition: `border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)`
    }
  }), (error || helpText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--color-text-secondary)"
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      padding: "11px 14px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--color-border-default)",
      background: disabled ? "var(--neutral-100)" : "#fff",
      color: "var(--color-text-primary)",
      outline: "none"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--color-text-secondary)",
      display: "flex",
      gap: "6px",
      flexWrap: "wrap"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "flex",
      gap: "6px"
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", null, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-primary)"
    }
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || "#",
    style: {
      color: "var(--color-text-secondary)",
      textDecoration: "none"
    },
    onMouseOver: e => e.currentTarget.style.color = "var(--color-text-link)",
    onMouseOut: e => e.currentTarget.style.color = "var(--color-text-secondary)"
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logo,
  categories = []
}) {
  const [openIdx, setOpenIdx] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "#fff",
      borderBottom: "1px solid var(--color-border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px"
    }
  }, logo, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px",
      color: "var(--color-text-secondary)",
      fontSize: "var(--text-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    title: "Account"
  }, "\u25CF"), /*#__PURE__*/React.createElement("span", {
    title: "Search"
  }, "\u26B2"), /*#__PURE__*/React.createElement("span", {
    title: "Cart"
  }, "\uD83D\uDED2"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "28px",
      padding: "0 32px 14px",
      fontFamily: "var(--font-condensed)",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, categories.map((cat, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setOpenIdx(i),
    onMouseLeave: () => setOpenIdx(null),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      color: openIdx === i ? "var(--color-brand-primary)" : "var(--color-text-primary)",
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, cat.name), openIdx === i && cat.items && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      background: "#fff",
      border: "1px solid var(--color-border-default)",
      boxShadow: "var(--shadow-md)",
      padding: "12px 0",
      minWidth: "180px",
      zIndex: 10,
      display: "flex",
      flexDirection: "column"
    }
  }, cat.items.map((sub, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      padding: "6px 20px",
      fontWeight: 400,
      textTransform: "none",
      color: "var(--color-text-primary)",
      cursor: "pointer"
    }
  }, sub)))))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Screens.jsx
try { (() => {
const {
  NavBar,
  Breadcrumbs,
  ProductCard,
  PriceTag,
  QuantityStepper,
  Badge,
  Button,
  Alert,
  Input,
  Select
} = window.JBPrinceDesignSystem_e1e326;
const CATEGORIES = [{
  name: "Apparel",
  items: ["Aprons", "Jackets", "Hats", "Gloves & Mits"]
}, {
  name: "Bar Tools",
  items: ["Glass", "Jiggers", "Shakers", "Strainers"]
}, {
  name: "Kitchen Utensils",
  items: ["Spoons", "Peelers", "Whisks", "Graters"]
}, {
  name: "Professional Cutlery",
  items: ["Chef", "Paring", "Bread", "Sharpening"]
}, {
  name: "Cookware",
  items: ["Frying Pans", "Saucepans", "Stock Pots"]
}, {
  name: "Machines",
  items: ["Sous Vide", "Grills", "Chamber Vacuum"]
}, {
  name: "Molds",
  items: ["Ring Molds", "Silicone", "Chocolate"]
}];
const PRODUCTS = [{
  id: "pacojet-4",
  title: "Pacojet 4 System",
  vendor: "Pacojet",
  price: 7899,
  badge: /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "New"),
  blurb: "Pacotizes frozen ingredients into velvety purees, ice creams, and sauces in seconds."
}, {
  id: "titanium-spoon",
  title: "Titanium Gold Spoon",
  vendor: "JB Prince",
  price: 38,
  badge: /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "Brand New"),
  blurb: "Worthy of every chef — a gold titanium finish spoon for precision plating."
}, {
  id: "nigara-knife",
  title: "Nigara SG Strix Chef Knife",
  vendor: "Nigara",
  price: 465,
  blurb: "Handmade Japanese chef's knife with a black wooden handle."
}, {
  id: "kasai-grill",
  title: "Kasai Charcoal Grill",
  vendor: "Kasai",
  price: 1450,
  compareAt: 1650,
  blurb: "A charcoal grill inspired by world-famous Japanese design."
}, {
  id: "dough-mold",
  title: "Laminated Dough Mold",
  vendor: "JB Prince",
  price: 64,
  blurb: "Two-part U-shaped metal mold for laminated dough."
}, {
  id: "chef-press",
  title: "Hestan Chef Press",
  vendor: "Hestan Culinary",
  price: 210,
  blurb: "Part of the Hestan Culinary collection — advanced cookware for the modern kitchen."
}];
function Header({
  onHome,
  cartCount
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--neutral-800)",
      color: "#fff",
      textAlign: "center",
      fontSize: "12px",
      padding: "8px",
      fontFamily: "var(--font-condensed)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, "Check Out Kasai Grills Today!"), /*#__PURE__*/React.createElement(NavBar, {
    logo: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-wordmark.webp",
      alt: "JB Prince",
      style: {
        height: 34,
        cursor: "pointer"
      },
      onClick: onHome
    }),
    categories: CATEGORIES
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--neutral-800)",
      color: "var(--neutral-300)",
      marginTop: "64px",
      padding: "48px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "32px",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.webp",
    style: {
      height: 26,
      marginBottom: 12
    },
    alt: "JB Prince"
  }), /*#__PURE__*/React.createElement("div", null, "36 East 31st Street, 6th Floor", /*#__PURE__*/React.createElement("br", null), "New York, New York"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Local: 212-683-3553", /*#__PURE__*/React.createElement("br", null), "Toll Free: 800-473-0577")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "Company Information"), "Home page", /*#__PURE__*/React.createElement("br", null), "About Us", /*#__PURE__*/React.createElement("br", null), "Shipping Policy", /*#__PURE__*/React.createElement("br", null), "FAQ", /*#__PURE__*/React.createElement("br", null), "News"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "Customer Care"), "Contact Us", /*#__PURE__*/React.createElement("br", null), "Gift Cards", /*#__PURE__*/React.createElement("br", null), "Replacement Parts", /*#__PURE__*/React.createElement("br", null), "Specials & Closeouts"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "Get Updates"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your email"
  })));
}
function Home({
  onSelectProduct,
  onSeeAll
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "420px",
      background: "#111 url() center/cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(0deg, rgba(0,0,0,.55), rgba(0,0,0,.25))",
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: 13,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Redefining Traditional Food Prep"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-3xl)",
      fontWeight: 700,
      marginBottom: 14
    }
  }, "The Pacojet 4"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => onSelectProduct("pacojet-4")
  }, "Discover Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 32px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      color: "var(--color-text-primary)"
    }
  }, "New at JB Prince"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-link)",
      cursor: "pointer",
      fontSize: "var(--text-sm)"
    },
    onClick: onSeeAll
  }, "Shop All Categories \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--grid-gap)"
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onSelectProduct(p.id)
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: p.title,
    vendor: p.vendor,
    price: p.price,
    compareAt: p.compareAt,
    badge: p.badge
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 48px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      marginBottom: 20
    }
  }, "Top Brands"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      flexWrap: "wrap",
      color: "var(--color-text-secondary)",
      fontFamily: "var(--font-condensed)",
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)"
    }
  }, ["JB Prince", "Pacojet", "Kasai Grills", "Comatec", "Pavoni Italia", "Imperia Pasta", "de Buyer", "Matfer", "Mauviel"].map(b => /*#__PURE__*/React.createElement("span", {
    key: b
  }, b)))));
}
function CategoryPage({
  onSelectProduct,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Professional Cutlery"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-3xl)",
      fontWeight: 700,
      margin: "16px 0 8px"
    }
  }, "Professional Cutlery"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)",
      marginBottom: 28
    }
  }, "Chefs, Santoku, Bread, And More"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--grid-gap)"
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onSelectProduct(p.id)
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: p.title,
    vendor: p.vendor,
    price: p.price,
    compareAt: p.compareAt,
    badge: p.badge
  })))));
}
function ProductDetail({
  id,
  onAddToCart,
  onHome
}) {
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: p.vendor,
      href: "#"
    }, {
      label: p.title
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1",
      background: "var(--neutral-50)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--neutral-400)"
    }
  }, "Product image"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: 12,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)",
      marginBottom: 6
    }
  }, p.vendor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      marginBottom: 10
    }
  }, p.title), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    compareAt: p.compareAt,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "20px 0",
      color: "var(--color-text-primary)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, p.blurb), p.id === "pacojet-4" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Backordered"
  }, "Will ship as soon as it is back in stock.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAddToCart(p, qty)
  }, "Add to Cart")), /*#__PURE__*/React.createElement(Select, {
    label: "Shipping",
    options: ["Standard (3–5 days)", "Expedited (1–2 days)"]
  }))));
}
function CartDrawer({
  items,
  onClose,
  onHome
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(20,20,20,.4)",
      zIndex: 50,
      display: "flex",
      justifyContent: "flex-end"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      background: "#fff",
      height: "100%",
      padding: 28,
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: 700
    }
  }, "Your Cart"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      fontSize: 20
    },
    onClick: onClose
  }, "\xD7")), items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, "Your cart is empty."), items.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid var(--color-border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, i.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-text-secondary)"
    }
  }, "Qty ", i.qty)), /*#__PURE__*/React.createElement(PriceTag, {
    price: i.price * i.qty,
    size: "sm"
  }))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement(PriceTag, {
    price: total
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Checkout"))));
}
window.StorefrontKit = {
  Header,
  Footer,
  Home,
  CategoryPage,
  ProductDetail,
  CartDrawer,
  PRODUCTS
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
