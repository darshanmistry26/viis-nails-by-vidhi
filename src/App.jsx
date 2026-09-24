import { useEffect, useRef, useState } from "react";
import "./App.css";

const whatsappNumber = "918799441184";
const instagramUrl = "https://www.instagram.com/viis.nails_/";

const CART_STORAGE_KEY = "viis_nails_cart";
const COUPON_STORAGE_KEY = "viis_nails_coupon";
const COUPON_CODE = "VIIS10";
const COUPON_DISCOUNT = 10;
const COUPON_MINIMUM = 400;
const COUPON_MAX_USES = 20;
const COUPON_USAGE_KEY = "viis10_usage_count";

const products = [
  {
    id: 1,
    name: "Nude French — Almond Classic 01",
    category: "Nude French",
    price: 499,
    description:
      "Elegant nude French press-on nails with a clean almond finish.",
    image: "/nails/Nude French — Almond Classic 01.jpg",
  },
  {
    id: 2,
    name: "Nude French — Almond Classic 02",
    category: "Nude French",
    price: 499,
    description:
      "Soft nude French tips designed for a timeless everyday look.",
    image: "/nails/Nude French — Almond Classic 02.jpg",
  },
  {
    id: 3,
    name: "Nude French — Almond Classic 03",
    category: "Nude French",
    price: 499,
    description:
      "Minimal almond French nails with a classy nude base.",
    image: "/nails/Nude French — Almond Classic 03.jpg",
  },
  {
    id: 4,
    name: "Nude French — Almond Classic 04",
    category: "Nude French",
    price: 499,
    description:
      "Chic nude French press-ons perfect for a polished look.",
    image: "/nails/Nude French — Almond Classic 04.jpg",
  },
  {
    id: 5,
    name: "Pink Pearl 01",
    category: "Pink Pearl",
    price: 599,
    description:
      "Pretty pink pearl press-on nails with a soft feminine finish.",
    image: "/nails/Pink Pearl 01.jpg",
  },
  {
    id: 6,
    name: "Pink Pearl 02",
    category: "Pink Pearl",
    price: 599,
    description:
      "Elegant pearl-inspired pink nails for a dreamy finish.",
    image: "/nails/Pink Pearl 02.jpg",
  },
  {
    id: 7,
    name: "Pink Pearl 03",
    category: "Pink Pearl",
    price: 599,
    description:
      "Soft glossy pink pearl nails with a delicate premium look.",
    image: "/nails/Pink Pearl 03.jpg",
  },
  {
    id: 8,
    name: "Pink Pearl 04",
    category: "Pink Pearl",
    price: 599,
    description:
      "Feminine pink pearl press-ons made for special occasions.",
    image: "/nails/Pink Pearl 04.jpg",
  },
  {
    id: 9,
    name: "Pink Pearl 05",
    category: "Pink Pearl",
    price: 599,
    description:
      "Glossy pink pearl nails with an elegant soft finish.",
    image: "/nails/Pink Pearl 05.jpg",
  },
  {
    id: 10,
    name: "Pink Pearl 06",
    category: "Pink Pearl",
    price: 599,
    description:
      "Delicate pink pearl press-ons with a graceful finish.",
    image: "/nails/Pink Pearl 06.jpg",
  },
  {
    id: 11,
    name: "Nude Chrome 01",
    category: "Nude Chrome",
    price: 649,
    description:
      "Modern nude chrome nails with a beautiful reflective finish.",
    image: "/nails/Nude Chrome 01.jpg",
  },
  {
    id: 12,
    name: "Nude Chrome 02",
    category: "Nude Chrome",
    price: 649,
    description:
      "Premium nude chrome press-ons for a sleek modern look.",
    image: "/nails/Nude Chrome 02.jpg",
  },
  {
    id: 13,
    name: "Nude Chrome 03",
    category: "Nude Chrome",
    price: 649,
    description:
      "Soft nude chrome nails with a sophisticated glossy finish.",
    image: "/nails/Nude Chrome 03.jpg",
  },
  {
    id: 14,
    name: "Nude Chrome 04",
    category: "Nude Chrome",
    price: 649,
    description:
      "Elegant chrome press-ons with a luxurious nude tone.",
    image: "/nails/Nude Chrome 04.jpg",
  },
  {
    id: 15,
    name: "Nude Chrome 05",
    category: "Nude Chrome",
    price: 649,
    description:
      "Minimal nude chrome nails with a clean premium aesthetic.",
    image: "/nails/Nude Chrome 05.jpg",
  },
  {
    id: 16,
    name: "Nude Chrome 06",
    category: "Nude Chrome",
    price: 649,
    description:
      "Glossy nude chrome press-ons for an effortlessly polished look.",
    image: "/nails/Nude Chrome 06.jpg",
  },
  {
    id: 17,
    name: "Pink Butterfly Flower 01",
    category: "Pink Butterfly",
    price: 699,
    description:
      "Cute pink butterfly and floral inspired press-on nail design.",
    image: "/nails/Pink Butterfly Flower 01.jpg",
  },
  {
    id: 18,
    name: "Pink Butterfly Flower 02",
    category: "Pink Butterfly",
    price: 699,
    description:
      "Soft pink floral butterfly nails with a playful feminine style.",
    image: "/nails/Pink Butterfly Flower 02.jpg",
  },
  {
    id: 19,
    name: "Pink Butterfly Flower 03",
    category: "Pink Butterfly",
    price: 699,
    description:
      "Pretty butterfly flower press-ons for a romantic look.",
    image: "/nails/Pink Butterfly Flower 03.jpg",
  },
  {
    id: 20,
    name: "Pink Butterfly Flower 04",
    category: "Pink Butterfly",
    price: 699,
    description:
      "Dreamy pink butterfly nails with delicate floral detailing.",
    image: "/nails/Pink Butterfly Flower 04.jpg",
  },
  {
    id: 21,
    name: "Pink Butterfly Flower 05",
    category: "Pink Butterfly",
    price: 699,
    description:
      "Feminine pink butterfly press-ons with a cute floral finish.",
    image: "/nails/Pink Butterfly Flower 05.jpg",
  },
  {
    id: 22,
    name: "Blue Floral 01",
    category: "Blue Floral",
    price: 649,
    description:
      "Elegant blue floral press-on nails with a fresh artistic finish.",
    image: "/nails/Blue Floral 01.jpg",
  },
  {
    id: 23,
    name: "Blue Floral 03",
    category: "Blue Floral",
    price: 649,
    description:
      "Beautiful blue floral nails designed for a graceful statement look.",
    image: "/nails/Blue Floral 03.jpg",
  },
  {
    id: 24,
    name: "Blue Floral 04",
    category: "Blue Floral",
    price: 649,
    description:
      "Soft blue floral press-ons with delicate feminine detailing.",
    image: "/nails/Blue Floral 04.jpg",
  },
  {
    id: 25,
    name: "Blue Floral 05",
    category: "Blue Floral",
    price: 649,
    description:
      "Fresh blue floral nails with a premium handcrafted appearance.",
    image: "/nails/Blue Floral 05.jpg",
  },
  {
    id: 27,
    name: "Navratri Special 01",
    category: "Navratri",
    price: 699,
    description:
      "Festive press-on nails specially styled for Navratri celebrations.",
    image: "/nails/Navratri Special 01.jpg",
  },
  {
    id: 28,
    name: "Navratri Special 02",
    category: "Navratri",
    price: 699,
    description:
      "Festive nails inspired by colourful Navratri celebrations.",
    image: "/nails/Navratri Special 02.jpg",
  },
  {
    id: 29,
    name: "Navratri Special 03",
    category: "Navratri",
    price: 699,
    description:
      "Statement Navratri press-ons made for festive nights.",
    image: "/nails/Navratri Special 03.jpeg",
  },
  {
    id: 30,
    name: "Navratri Special 04",
    category: "Navratri",
    price: 699,
    description:
      "Beautiful festive press-ons perfect for garba and Navratri.",
    image: "/nails/Navratri Special 04.jpeg",
  },
];

const categories = [
  "All",
  "Nude French",
  "Pink Pearl",
  "Nude Chrome",
  "Pink Butterfly",
  "Blue Floral",
  "Navratri",
];

function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.45L4 20l1.08-3.76A8.5 8.5 0 1 1 20.5 11.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-.9.4-1.4.3-1.2-.2-2.6-1-3.8-2.2-1.2-1.2-2-2.6-2.2-3.8-.1-.5 0-1 .3-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCartToast, setShowCartToast] =
    useState(false);

  const [toastProduct, setToastProduct] =
    useState(null);

  const toastTimerRef = useRef(null);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] =
    useState("");

  const [couponError, setCouponError] =
    useState("");

  const [showCouponSuccess, setShowCouponSuccess] =
    useState(false);

  const [couponSavedAmount, setCouponSavedAmount] =
    useState(0);

  const [orderStep, setOrderStep] = useState(null);

  const [customerDetails, setCustomerDetails] =
    useState({
      name: "",
      whatsapp: "",
      address: "",
      city: "",
      pincode: "",
      note: "",
    });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    try {
      const savedCoupon = localStorage.getItem(
        COUPON_STORAGE_KEY
      );

      if (savedCoupon) {
        const parsed = JSON.parse(savedCoupon);

        setCouponCode(parsed.couponCode || "");
        setAppliedCoupon(
          parsed.appliedCoupon || ""
        );

        setCouponSavedAmount(
          parsed.couponSavedAmount || 0
        );
      }
    } catch {
      // Ignore invalid saved coupon data.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      COUPON_STORAGE_KEY,
      JSON.stringify({
        couponCode,
        appliedCoupon,
        couponSavedAmount,
      })
    );
  }, [
    couponCode,
    appliedCoupon,
    couponSavedAmount,
  ]);

  const filteredProducts = products.filter(
    (product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const search = searchTerm
        .toLowerCase()
        .trim();

      const matchesSearch =
        !search ||
        product.name
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search) ||
        product.description
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    }
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const couponDiscount =
    appliedCoupon === COUPON_CODE
      ? Math.round(
          (cartTotal * COUPON_DISCOUNT) / 100
        )
      : 0;

  const finalTotal = Math.max(
    0,
    cartTotal - couponDiscount
  );

  const showCuteCartToast = (product) => {
    setToastProduct(product);
    setShowCartToast(true);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setShowCartToast(false);
    }, 3500);
  };

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showCuteCartToast(product);
    setSelectedProduct(null);
    setShowCart(true);
  };

  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );
  };

  const closeToast = () => {
    setShowCartToast(false);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
  };

  const getCouponUsage = () => {
    return Number(
      localStorage.getItem(COUPON_USAGE_KEY) || 0
    );
  };

  const applyCoupon = () => {
    setCouponError("");

    const enteredCode = couponCode
      .trim()
      .toUpperCase();

    if (!enteredCode) {
      setCouponError(
        "Please enter a coupon code."
      );
      return;
    }

    if (enteredCode !== COUPON_CODE) {
      setCouponError("Invalid coupon code.");
      return;
    }

    if (cartTotal < COUPON_MINIMUM) {
      setCouponError(
        `Minimum cart value for this coupon is ₹${COUPON_MINIMUM}.`
      );
      return;
    }

    const usage = getCouponUsage();

    if (usage >= COUPON_MAX_USES) {
      setCouponError(
        "This coupon has reached its usage limit."
      );
      return;
    }

    const savedAmount = Math.round(
      (cartTotal * COUPON_DISCOUNT) / 100
    );

    setAppliedCoupon(COUPON_CODE);
    setCouponCode(COUPON_CODE);
    setCouponSavedAmount(savedAmount);
    setCouponError("");
    setShowCouponSuccess(true);

    localStorage.setItem(
      COUPON_USAGE_KEY,
      String(usage + 1)
    );
  };

  const removeCoupon = () => {
    setAppliedCoupon("");
    setCouponCode("");
    setCouponSavedAmount(0);
    setCouponError("");
  };

  const closeCouponSuccess = () => {
    setShowCouponSuccess(false);
  };

  const scrollToSection = (id) => {
    setShowMobileMenu(false);

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const handleCustomerChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setCustomerDetails((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const continueToOrder = () => {
    setFormError("");

    if (!cart.length) {
      setFormError("Your cart is empty.");
      return;
    }

    setOrderStep("details");
    setShowCart(false);
  };

  const validateCustomerDetails = () => {
    const {
      name,
      whatsapp,
      address,
      city,
      pincode,
    } = customerDetails;

    if (!name.trim()) {
      setFormError(
        "Please enter your name."
      );
      return false;
    }

    if (!whatsapp.trim()) {
      setFormError(
        "Please enter your WhatsApp number."
      );
      return false;
    }

    if (
      !/^[0-9+\-\s]{10,15}$/.test(
        whatsapp.trim()
      )
    ) {
      setFormError(
        "Please enter a valid WhatsApp number."
      );
      return false;
    }

    if (!address.trim()) {
      setFormError(
        "Please enter your address."
      );
      return false;
    }

    if (!city.trim()) {
      setFormError(
        "Please enter your city."
      );
      return false;
    }

    if (!/^\d{6}$/.test(pincode.trim())) {
      setFormError(
        "Please enter a valid 6-digit pincode."
      );
      return false;
    }

    setFormError("");
    return true;
  };

  const showOrderSummary = () => {
    if (validateCustomerDetails()) {
      setOrderStep("summary");
    }
  };

  // WhatsApp order: same tab, no new _blank/about:blank tab
  const sendOrderToWhatsApp = () => {
    if (!cart.length) return;

    const itemLines = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hello Viis Nails By Vidhi ♡

I would like to place an order.

CUSTOMER DETAILS

Name: ${customerDetails.name}

WhatsApp: ${customerDetails.whatsapp}

Address: ${customerDetails.address}

City: ${customerDetails.city}

Pincode: ${customerDetails.pincode}

Note: ${customerDetails.note || "None"}

ORDER

${itemLines}

Subtotal: ₹${cartTotal}

Coupon: ${
      appliedCoupon
        ? `${appliedCoupon} (-₹${couponDiscount})`
        : "None"
    }

Final Total: ₹${finalTotal}

Please confirm my order. Thank you ♡`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.location.href = url;
  };

  const closeOrderFlow = () => {
    setOrderStep(null);
    setFormError("");
  };

  const openInstagram = () => {
    window.open(
      instagramUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div
          className="brand"
          onClick={() =>
            scrollToSection("home")
          }
        >
          Viis Nails By Vidhi
        </div>

        <div className="nav-links">
          <button
            onClick={() =>
              scrollToSection("home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              scrollToSection("shop")
            }
          >
            Shop
          </button>

          <button
            onClick={() =>
              scrollToSection(
                "collections"
              )
            }
          >
            Collections
          </button>

          <button
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>
        </div>

        <button
          className="cart-nav-btn"
          onClick={() =>
            setShowCart(true)
          }
        >
          Cart
          <span className="cart-count">
            {cartCount}
          </span>
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() =>
            setShowMobileMenu(
              !showMobileMenu
            )
          }
          aria-label="Open menu"
        >
          {showMobileMenu ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {showMobileMenu && (
        <div className="mobile-menu">
          <button
            onClick={() =>
              scrollToSection("home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              scrollToSection("shop")
            }
          >
            Shop
          </button>

          <button
            onClick={() =>
              scrollToSection(
                "collections"
              )
            }
          >
            Collections
          </button>

          <button
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>

          <button
            className="mobile-cart-link"
            onClick={() => {
              setShowMobileMenu(false);
              setShowCart(true);
            }}
          >
            Cart
            <span className="mobile-cart-count">
              {cartCount}
            </span>
          </button>
        </div>
      )}

      {/* HERO */}
      <section
        className="hero"
        id="home"
      >
        <div className="hero-content">
          <p className="hero-small">
            PRESS-ON NAILS • MADE WITH LOVE
          </p>

          <h1>
            Pretty nails,
            <br />
            <span>made for you.</span>
          </h1>

          <p className="hero-description">
            Discover elegant, feminine and
            statement-making press-on nails
            designed to make every moment
            feel a little more beautiful.
          </p>

          <button
            className="hero-btn"
            onClick={() =>
              scrollToSection("shop")
            }
          >
            Shop the Collection
          </button>
        </div>

        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src="/nails/Pink Pearl 01.jpg"
            alt="Viis Nails By Vidhi"
          />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        className="collections-section"
        id="collections"
      >
        <div className="section-heading">
          <p>OUR COLLECTIONS</p>

          <h2>
            Find your style.
          </h2>

          <span>
            From timeless French tips to
            festive statement nails.
          </span>
        </div>

        <div className="category-buttons">
          {categories.map(
            (category) => (
              <button
                key={category}
                className={
                  selectedCategory ===
                  category
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setSelectedCategory(
                    category
                  );

                  scrollToSection(
                    "shop"
                  );
                }}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* SHOP */}
      <section
        className="shop-section"
        id="shop"
      >
        <div className="section-heading shop-heading">
          <p>SHOP NAILS</p>

          <h2>
            {selectedCategory ===
            "All"
              ? "Made to be noticed."
              : selectedCategory}
          </h2>

          <span>
            Choose your favourite set
            and make it yours.
          </span>
        </div>

        <div className="product-search-wrapper">
          <div className="product-search">
            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search your favourite nails..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
            />

            {searchTerm && (
              <button
                className="search-clear"
                onClick={() =>
                  setSearchTerm("")
                }
              >
                ×
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length >
        0 ? (
          <div className="product-grid">
            {filteredProducts.map(
              (product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() =>
                    setSelectedProduct(
                      product
                    )
                  }
                >
                  <div className="product-image-wrap">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />

                    <button
                      className="quick-add"
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="product-info">
                    <p className="product-category">
                      {product.category}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="product-bottom">
                      <span className="product-price">
                        ₹{product.price}
                      </span>

                      <button
                        className="add-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          addToCart(
                            product
                          );
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">
              ⌕
            </div>

            <h3>
              No nails found
            </h3>

            <p>
              Try another search or
              explore our full
              collection.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(
                  "All"
                );
              }}
            >
              View All Nails
            </button>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section
        className="about-section"
        id="about"
      >
        <div className="about-image">
          <img
            src="/nails/Pink Butterfly Flower 01.jpg"
            alt="Viis Nails By Vidhi"
          />
        </div>

        <div className="about-content">
          <p className="about-small">
            ABOUT VIIS NAILS BY VIDHI
          </p>

          <h2>
            Little details
            <br />
            make you shine.
          </h2>

          <p>
            Viis Nails By Vidhi is all
            about making beautiful nails
            simple, stylish and easy to
            wear. Every set is selected
            with love for girls who love
            elegant details and pretty
            little moments.
          </p>

          <p>
            Whether you are getting ready
            for a celebration, a special
            day or simply want to feel
            extra pretty, there is a set
            waiting for you.
          </p>

          <button
            className="about-btn"
            onClick={() =>
              scrollToSection("shop")
            }
          >
            Explore Nails
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >
        <div className="contact-content">
          <p>LET'S CONNECT</p>

          <h2>
            Pretty nails are just a
            message away.
          </h2>

          <span>
            Have a question, want to order
            a set or simply want to see
            more designs? Connect with Viis
            Nails By Vidhi.
          </span>

          <div className="contact-buttons">
            <button
              className="whatsapp-main-btn"
              onClick={() => {
                window.location.href =
                  `https://wa.me/${whatsappNumber}`;
              }}
            >
              <WhatsAppIcon className="whatsapp-icon" />
              WhatsApp Us
            </button>

            <button
              className="instagram-main-btn"
              onClick={openInstagram}
            >
              <InstagramIcon className="instagram-icon" />

              <span>
                @viis.nails_
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            Viis Nails By Vidhi
          </div>

          <p className="footer-tagline">
            Pretty nails. Pretty moments.
            <br />
            Made with love ♡
          </p>

          <div className="footer-links">
            <button
              onClick={() =>
                scrollToSection("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection("shop")
              }
            >
              Shop
            </button>

            <button
              onClick={() =>
                scrollToSection("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Contact
            </button>
          </div>

          <div className="footer-socials">
            <button
              className="footer-social-btn"
              onClick={openInstagram}
            >
              <span className="footer-social-main">
                <InstagramIcon className="footer-instagram-icon" />
                Instagram
              </span>

              <span>
                @viis.nails_
              </span>
            </button>

            <button
              className="footer-social-btn"
              onClick={() => {
                window.location.href =
                  `https://wa.me/${whatsappNumber}`;
              }}
            >
              <span className="footer-social-main">
                <WhatsAppIcon className="footer-whatsapp-icon" />
                WhatsApp
              </span>

              <span>
                Order / Enquiry
              </span>
            </button>
          </div>

          <div className="footer-bottom">
            <span>
              ©{" "}
              {new Date().getFullYear()}{" "}
              Viis Nails By Vidhi
            </span>

            <span>
              Made with love ♡
            </span>
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() =>
                setSelectedProduct(
                  null
                )
              }
            >
              ×
            </button>

            <div className="modal-image-side">
              <img
                src={
                  selectedProduct.image
                }
                alt={
                  selectedProduct.name
                }
              />
            </div>

            <div className="modal-details">
              <span className="modal-category">
                {
                  selectedProduct.category
                }
              </span>

              <h2>
                {
                  selectedProduct.name
                }
              </h2>

              <div className="modal-price">
                ₹
                {
                  selectedProduct.price
                }
              </div>

              <p className="modal-description">
                {
                  selectedProduct.description
                }
              </p>

              <div className="modal-extra">
                <div>
                  <span>
                    Style
                  </span>

                  <strong>
                    {
                      selectedProduct.category
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Collection
                  </span>

                  <strong>
                    Viis Nails
                  </strong>
                </div>
              </div>

              <button
                className="modal-add-btn"
                onClick={() =>
                  addToCart(
                    selectedProduct
                  )
                }
              >
                Add to Cart
              </button>

              <button
                className="modal-whatsapp-btn"
                onClick={() => {
                  const message = `Hello Viis Nails By Vidhi ♡

I am interested in:

${selectedProduct.name}

Price: ₹${selectedProduct.price}

Please share the details.`;

                  window.location.href =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                }}
              >
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART */}
      {showCart && (
        <div
          className="cart-overlay"
          onClick={() =>
            setShowCart(false)
          }
        >
          <div
            className="cart-drawer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="cart-header">
              <div>
                <p>
                  YOUR BAG
                </p>

                <h2>
                  Your Cart
                </h2>
              </div>

              <button
                className="cart-close"
                onClick={() =>
                  setShowCart(false)
                }
              >
                ×
              </button>
            </div>

            {cart.length > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div
                      className="cart-item"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-details">
                        <p>
                          {item.category}
                        </p>

                        <h3>
                          {item.name}
                        </h3>

                        <strong>
                          ₹
                          {item.price *
                            item.quantity}
                        </strong>

                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        className="remove-cart"
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <div className="coupon-section">
                    {!appliedCoupon ? (
                      <>
                        <div className="coupon-heading">
                          <span>
                            EXCLUSIVE OFFER
                          </span>

                          <h3>
                            Have a coupon?
                          </h3>
                        </div>

                        <div className="coupon-input-row">
                          <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={
                              couponCode
                            }
                            onChange={(
                              event
                            ) => {
                              setCouponCode(
                                event.target.value.toUpperCase()
                              );

                              setCouponError(
                                ""
                              );
                            }}
                          />

                          <button
                            onClick={
                              applyCoupon
                            }
                          >
                            Apply
                          </button>
                        </div>

                        <p className="coupon-hint">
                          Use{" "}
                          <strong>
                            VIIS10
                          </strong>{" "}
                          for 10% off on
                          orders above
                          ₹400.
                        </p>

                        {couponError && (
                          <p className="coupon-error">
                            {
                              couponError
                            }
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="applied-coupon">
                        <div>
                          <span>
                            COUPON APPLIED
                          </span>

                          <strong>
                            {
                              appliedCoupon
                            }
                          </strong>
                        </div>

                        <button
                          onClick={
                            removeCoupon
                          }
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="cart-footer">
                  <div className="cart-summary-lines">
                    <div className="cart-total">
                      <span>
                        Subtotal
                      </span>

                      <strong>
                        ₹{cartTotal}
                      </strong>
                    </div>

                    {couponDiscount >
                      0 && (
                      <div className="cart-discount">
                        <span>
                          Discount
                        </span>

                        <strong>
                          -₹
                          {
                            couponDiscount
                          }
                        </strong>
                      </div>
                    )}

                    <div className="cart-total final-cart-total">
                      <span>
                        Total
                      </span>

                      <strong>
                        ₹{finalTotal}
                      </strong>
                    </div>
                  </div>

                  <button
                    className="checkout-btn"
                    onClick={
                      continueToOrder
                    }
                  >
                    Continue to Order
                  </button>

                  <p className="cart-note">
                    Your order will be
                    confirmed personally
                    through WhatsApp.
                  </p>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <div className="empty-cart-icon">
                  ♡
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Your cute nails are
                  waiting for you.
                </p>

                <button
                  className="continue-shopping"
                  onClick={() =>
                    setShowCart(
                      false
                    )
                  }
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ORDER DETAILS */}
      {orderStep === "details" && (
        <div className="order-overlay">
          <div className="order-modal">
            <button
              className="order-close"
              onClick={
                closeOrderFlow
              }
            >
              ×
            </button>

            <div className="order-heading">
              <p>
                ALMOST THERE
              </p>

              <h2>
                Your Details
              </h2>

              <span>
                Enter your details so
                we can confirm your
                order.
              </span>
            </div>

            <div className="order-form">
              <div className="form-group">
                <label>
                  Your Name *
                </label>

                <input
                  name="name"
                  value={
                    customerDetails.name
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>
                  WhatsApp Number *
                </label>

                <input
                  name="whatsapp"
                  value={
                    customerDetails.whatsapp
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="10-digit number"
                />
              </div>

              <div className="form-group full">
                <label>
                  Address *
                </label>

                <textarea
                  name="address"
                  rows="3"
                  value={
                    customerDetails.address
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Enter your complete address"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    City *
                  </label>

                  <input
                    name="city"
                    value={
                      customerDetails.city
                    }
                    onChange={
                      handleCustomerChange
                    }
                    placeholder="City"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Pincode *
                  </label>

                  <input
                    name="pincode"
                    value={
                      customerDetails.pincode
                    }
                    onChange={
                      handleCustomerChange
                    }
                    placeholder="6-digit pincode"
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>
                  Note
                </label>

                <textarea
                  name="note"
                  rows="3"
                  value={
                    customerDetails.note
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Any special note? Optional"
                />
              </div>

              {formError && (
                <div className="form-error">
                  {formError}
                </div>
              )}

              <button
                className="continue-order-btn"
                onClick={
                  showOrderSummary
                }
              >
                Review Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORDER SUMMARY */}
      {orderStep === "summary" && (
        <div className="order-overlay">
          <div className="order-modal">
            <button
              className="order-close"
              onClick={
                closeOrderFlow
              }
            >
              ×
            </button>

            <div className="order-heading">
              <p>
                ORDER SUMMARY
              </p>

              <h2>
                Ready to Order?
              </h2>

              <span>
                Check your details and
                send your order on
                WhatsApp.
              </span>
            </div>

            <div className="summary-customer">
              <div>
                <span>
                  Name
                </span>

                <strong>
                  {
                    customerDetails.name
                  }
                </strong>
              </div>

              <div>
                <span>
                  WhatsApp
                </span>

                <strong>
                  {
                    customerDetails.whatsapp
                  }
                </strong>
              </div>

              <div>
                <span>
                  Address
                </span>

                <strong>
                  {
                    customerDetails.address
                  }
                  <br />
                  {
                    customerDetails.city
                  }{" "}
                  -{" "}
                  {
                    customerDetails.pincode
                  }
                </strong>
              </div>

              {customerDetails.note && (
                <div>
                  <span>
                    Note
                  </span>

                  <strong>
                    {
                      customerDetails.note
                    }
                  </strong>
                </div>
              )}
            </div>

            <div className="summary-items">
              {cart.map((item) => (
                <div
                  className="summary-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price} ×{" "}
                      {item.quantity}
                    </p>
                  </div>

                  <strong>
                    ₹
                    {item.price *
                      item.quantity}
                  </strong>
                </div>
              ))}
            </div>

            <div className="summary-price-box">
              <div className="summary-total">
                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{cartTotal}
                </strong>
              </div>

              {couponDiscount >
                0 && (
                <div className="summary-discount">
                  <span>
                    {
                      appliedCoupon
                    }{" "}
                    discount
                  </span>

                  <strong>
                    -₹
                    {
                      couponDiscount
                    }
                  </strong>
                </div>
              )}

              <div className="summary-total summary-final">
                <span>
                  Total
                </span>

                <strong>
                  ₹{finalTotal}
                </strong>
              </div>

              {couponDiscount >
                0 && (
                <p className="summary-saved">
                  You saved ₹
                  {
                    couponDiscount
                  }{" "}
                  with{" "}
                  {
                    appliedCoupon
                  }{" "}
                  ♡
                </p>
              )}
            </div>

            <div className="summary-actions">
              <button
                className="edit-details-btn"
                onClick={() =>
                  setOrderStep(
                    "details"
                  )
                }
              >
                Edit Details
              </button>

              <button
                className="send-whatsapp-btn"
                onClick={
                  sendOrderToWhatsApp
                }
              >
                Send Order on WhatsApp
              </button>
            </div>

            <p className="whatsapp-note">
              Your order will open
              in WhatsApp for final
              confirmation.
            </p>
          </div>
        </div>
      )}

      {/* CART TOAST */}
      {showCartToast &&
        toastProduct && (
          <div className="cute-cart-toast">
            <div className="toast-heart">
              ♡
            </div>

            <div className="toast-content">
              <h3>
                Your cute nails are
                in the cart ♡
              </h3>

              <p>
                A little more pretty
                is on its way.
              </p>

              <span>
                {
                  toastProduct.name
                }
              </span>
            </div>

            <button
              className="toast-close"
              onClick={
                closeToast
              }
            >
              ×
            </button>
          </div>
        )}

      {/* COUPON SUCCESS */}
      {showCouponSuccess && (
        <div className="coupon-success-overlay">
          <div className="coupon-success-popup">
            <button
              className="coupon-success-close"
              onClick={
                closeCouponSuccess
              }
            >
              ×
            </button>

            <div className="coupon-success-icon">
              ♡
            </div>

            <p className="coupon-success-small">
              COUPON APPLIED
            </p>

            <h2>
              Yay! You saved.
            </h2>

            <p className="coupon-success-message">
              Your code{" "}
              <strong>
                {COUPON_CODE}
              </strong>{" "}
              has been applied
              successfully.
            </p>

            <div className="coupon-saved-line">
              <span>
                You saved
              </span>

              <strong>
                ₹
                {
                  couponSavedAmount
                }
              </strong>
            </div>

            <p className="coupon-success-note">
              A little more pretty,
              for a little less ♡
            </p>

            <button
              className="coupon-success-btn"
              onClick={
                closeCouponSuccess
              }
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;