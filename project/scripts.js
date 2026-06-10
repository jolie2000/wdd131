/* ========================================
   KAMPALA PLATE - MAIN SCRIPT
   ======================================== */

// ======================================
// DATA STRUCTURES - Objects and Arrays
// ======================================

// Featured dishes data array - containing objects
const featuredDishes = [
  {
    id: 1,
    name: "Matoke",
    category: "main",
    description:
      "Steamed green bananas with peanut sauce. A beloved traditional Ugandan staple.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    restaurant: "Karibu Kitchen",
    price: "UGX 15,000",
    popularity: 5,
  },
  {
    id: 2,
    name: "Posho and Bean Stew",
    category: "main",
    description:
      "Cornmeal served with savory bean stew. Hearty and filling comfort food.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    restaurant: "Local Cafe",
    price: "UGX 8,000",
    popularity: 4,
  },
  {
    id: 3,
    name: "Rolex",
    category: "street",
    description:
      "Chapati wrapped around eggs and vegetables. Popular street food with endless variations.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80",
    restaurant: "Street Vendors",
    price: "UGX 3,000",
    popularity: 5,
  },
  {
    id: 4,
    name: "Luwombo",
    category: "main",
    description:
      "Meat or chicken wrapped in banana leaves and steamed. Authentic and aromatic.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    restaurant: "Traditional Bites",
    price: "UGX 20,000",
    popularity: 4,
  },
  {
    id: 5,
    name: "Samosa",
    category: "street",
    description:
      "Fried pastry with savory filling. Perfect snack for any time of day.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80",
    restaurant: "Street Vendors",
    price: "UGX 2,000",
    popularity: 5,
  },
  {
    id: 6,
    name: "Ugali with Vegetables",
    category: "main",
    description: "Maize meal served with fresh seasonal vegetables and gravy.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    restaurant: "Home Kitchen",
    price: "UGX 12,000",
    popularity: 4,
  },
];

// All food items for food guide
const foodGuide = [
  ...featuredDishes,
  {
    id: 7,
    name: "Mandasi",
    category: "beverages",
    description: "Sweet fried dough pastry. Often served with tea or coffee.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    restaurant: "Bakeries",
    price: "UGX 500",
    popularity: 4,
  },
  {
    id: 8,
    name: "Chapati",
    category: "main",
    description:
      "Flatbread made with flour and cooked on griddle. Versatile and delicious.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    restaurant: "Various",
    price: "UGX 1,500",
    popularity: 5,
  },
  {
    id: 9,
    name: "Muamba",
    category: "beverages",
    description:
      "Ginger and spice-infused beverage. Warm, comforting, and energizing.",
    image:
      "https://images.unsplash.com/photo-1608500218900-8afa135d3beb?auto=format&fit=crop&w=800&q=80",
    restaurant: "Street Vendors",
    price: "UGX 1,000",
    popularity: 3,
  },
];

// Restaurants data array
const restaurants = [
  {
    id: 1,
    name: "Karibu Kitchen",
    cuisine: "ugandan",
    price: "moderate",
    rating: 4.8,
    description: "Authentic Ugandan cuisine in a warm, welcoming atmosphere.",
    address: "Kampala Central",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    specialties: ["Matoke", "Luwombo", "Posho"],
  },
  {
    id: 2,
    name: "Street Eats Kampala",
    cuisine: "ugandan",
    price: "budget",
    rating: 4.5,
    description: "Best street food in central Kampala with authentic flavors.",
    address: "Owino Market Area",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    specialties: ["Rolex", "Samosa", "Muamba"],
  },
  {
    id: 3,
    name: "Traditional Bites",
    cuisine: "east-african",
    price: "moderate",
    rating: 4.6,
    description: "East African cuisine with a modern twist.",
    address: "Kampala Suburbs",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
    specialties: ["Luwombo", "Chapati", "Beans"],
  },
  {
    id: 4,
    name: "Global Table",
    cuisine: "international",
    price: "upscale",
    rating: 4.7,
    description: "International cuisine with Ugandan influences.",
    address: "Downtown Kampala",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    specialties: ["Fusion", "Ugandan Classics", "Fine Dining"],
  },
  {
    id: 5,
    name: "Local Cafe",
    cuisine: "ugandan",
    price: "budget",
    rating: 4.3,
    description: "Casual dining with traditional Ugandan meals.",
    address: "Various Locations",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    specialties: ["Posho", "Beans", "Chapati"],
  },
  {
    id: 6,
    name: "Spice Market",
    cuisine: "east-african",
    price: "moderate",
    rating: 4.4,
    description: "Aromatic East African cuisine with fresh ingredients.",
    address: "Kampala East",
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
    specialties: ["Spiced Rice", "Grilled Meats", "Vegetables"],
  },
];

// ======================================
// UTILITY FUNCTIONS
// ======================================

/**
 * Initialize date elements in footer
 */
function initializeDateElements() {
  const yearElements = document.querySelectorAll("#year");
  const modifiedElements = document.querySelectorAll("#last-modified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });

  modifiedElements.forEach((element) => {
    element.textContent = lastModified;
  });
}

/**
 * Create lazy loading attribute
 */
function addLazyLoading(imgElement) {
  imgElement.loading = "lazy";
}

/**
 * Scroll to section smoothly
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ======================================
// TEMPLATE LITERAL FUNCTIONS
// ======================================

/**
 * Generate dish card HTML using template literals
 */
function createDishCard(dish) {
  return `
    <article class="card">
      <img 
        src="${dish.image}" 
        alt="${dish.name}" 
        class="card-image"
        loading="lazy"
        width="300"
        height="200"
      >
      <div class="card-content">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <p class="restaurant-name"><strong>At:</strong> ${dish.restaurant}</p>
      </div>
      <div class="card-footer">
        <span class="price-tag">${dish.price}</span>
        <span class="rating">${"★".repeat(dish.popularity)}${"☆".repeat(5 - dish.popularity)}</span>
      </div>
    </article>
  `;
}

/**
 * Generate restaurant card HTML using template literals
 */
function createRestaurantCard(restaurant) {
  const specialties = restaurant.specialties.join(", ");
  return `
    <article class="restaurant-card">
      <img 
        src="${restaurant.image}" 
        alt="${restaurant.name}" 
        class="restaurant-image"
        loading="lazy"
        width="300"
        height="200"
      >
      <div class="restaurant-content">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
        <p><strong>Location:</strong> ${restaurant.address}</p>
        <p><strong>Specialties:</strong> ${specialties}</p>
      </div>
      <div class="restaurant-footer">
        <span class="rating">${restaurant.rating}⭐ (${restaurant.rating})</span>
        <button class="add-favorite-btn" data-id="${restaurant.id}" aria-label="Add ${restaurant.name} to favorites">♡ Save</button>
      </div>
    </article>
  `;
}

/**
 * Generate food guide item HTML using template literals
 */
function createFoodItem(food) {
  return `
    <article class="food-item" data-id="${food.id}" data-category="${food.category}">
      <img 
        src="${food.image}" 
        alt="${food.name}" 
        class="food-image"
        loading="lazy"
        width="300"
        height="200"
      >
      <div class="food-content">
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <p><strong>Found at:</strong> ${food.restaurant}</p>
      </div>
      <div class="food-footer">
        <span class="price-tag">${food.price}</span>
        <button class="food-detail-btn" data-id="${food.id}" aria-label="View details for ${food.name}">View Details</button>
      </div>
    </article>
  `;
}

// ======================================
// RENDERING FUNCTIONS
// ======================================

/**
 * Render featured dishes on home page
 */
function renderFeaturedDishes() {
  const dishesContainer = document.getElementById("featured-dishes");
  if (!dishesContainer) return;

  // Show all 6 featured dishes instead of just 3
  const dishesHTML = featuredDishes
    .map((dish) => createDishCard(dish))
    .join("");
  dishesContainer.innerHTML = dishesHTML;
}

/**
 * Render restaurants grid
 */
function renderRestaurants(filter = {}) {
  const container =
    document.getElementById("restaurants-grid") ||
    document.getElementById("restaurants-list");
  if (!container) return;

  // Conditional branching - filter restaurants based on criteria
  let filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine =
      !filter.cuisine || restaurant.cuisine === filter.cuisine;
    const matchesPrice = !filter.price || restaurant.price === filter.price;
    return matchesCuisine && matchesPrice;
  });

  const html = filteredRestaurants
    .map((restaurant) => createRestaurantCard(restaurant))
    .join("");
  container.innerHTML =
    html ||
    `<p>No restaurants match your filters. Try adjusting your search.</p>`;

  // Add event listeners to favorite buttons
  document.querySelectorAll(".add-favorite-btn").forEach((btn) => {
    btn.addEventListener("click", addToFavorites);
  });
}

/**
 * Render food guide items with filtering
 */
function renderFoodGuide(category = "all") {
  const container = document.getElementById("food-grid");
  if (!container) return;

  // Conditional branching - filter by category
  const filtered =
    category === "all"
      ? foodGuide
      : foodGuide.filter((item) => item.category === category);

  const html = filtered.map((food) => createFoodItem(food)).join("");
  container.innerHTML = html;

  // Add event listeners to detail buttons
  document.querySelectorAll(".food-detail-btn").forEach((btn) => {
    btn.addEventListener("click", showFoodDetails);
  });
}

// ======================================
// EVENT HANDLERS
// ======================================

/**
 * Toggle mobile menu
 */
function toggleMenu() {
  const menuBtn = document.getElementById("menu-button");
  const nav = document.getElementById("navigation");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });
}

/**
 * Handle category filter buttons
 */
function setupCategoryFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      renderFoodGuide(category);
    });
  });
}

/**
 * Handle restaurant filters
 */
function setupRestaurantFilters() {
  const cuisineSelect = document.getElementById("cuisine-select");
  const priceSelect = document.getElementById("price-select");
  const resetBtn = document.getElementById("reset-filters");

  if (!cuisineSelect || !priceSelect) return;

  const applyFilters = () => {
    const filter = {
      cuisine: cuisineSelect.value === "all" ? null : cuisineSelect.value,
      price: priceSelect.value === "all" ? null : priceSelect.value,
    };
    renderRestaurants(filter);
  };

  cuisineSelect.addEventListener("change", applyFilters);
  priceSelect.addEventListener("change", applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      cuisineSelect.value = "all";
      priceSelect.value = "all";
      renderRestaurants();
    });
  }
}

/**
 * Show food item details in modal
 */
function showFoodDetails(e) {
  const foodId = parseInt(e.target.getAttribute("data-id"));
  const food = foodGuide.find((item) => item.id === foodId);

  if (!food) return;

  const modal = document.getElementById("food-modal");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalBody) return;

  // Template literal for modal content
  const modalContent = `
    <img src="${food.image}" alt="${food.name}" style="width: 100%; margin-bottom: 1rem; border-radius: 0.5rem;">
    <h2>${food.name}</h2>
    <p><strong>Category:</strong> ${food.category.toUpperCase()}</p>
    <p><strong>Description:</strong> ${food.description}</p>
    <p><strong>Found at:</strong> ${food.restaurant}</p>
    <p><strong>Price:</strong> ${food.price}</p>
    <p><strong>Popularity:</strong> ${"★".repeat(food.popularity)}${"☆".repeat(5 - food.popularity)}</p>
  `;

  modalBody.innerHTML = modalContent;
  modal.style.display = "flex";
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: document.getElementById("name")?.value || "",
    email: document.getElementById("email")?.value || "",
    cuisineType: document.getElementById("cuisine-type")?.value || "",
    priceRange:
      document.querySelector('input[name="price-range"]:checked')?.value || "",
    specialRequests: document.getElementById("special-requests")?.value || "",
    timestamp: new Date().toLocaleString(),
  };

  // Save to localStorage
  saveRecommendationRequest(formData);

  // Show confirmation
  alert(
    `Thank you ${formData.name}! We'll send recommendations to ${formData.email} soon.`,
  );
  form.reset();
}

/**
 * Save recommendation request to localStorage
 */
function saveRecommendationRequest(data) {
  const requests =
    JSON.parse(localStorage.getItem("recommendationRequests")) || [];
  requests.push(data);
  localStorage.setItem("recommendationRequests", JSON.stringify(requests));

  // Update saved recommendations display
  displaySavedRecommendations();
}

/**
 * Display saved recommendations from localStorage
 */
function displaySavedRecommendations() {
  const savedSection = document.getElementById("saved-section");
  const savedList = document.getElementById("saved-list");

  if (!savedSection || !savedList) return;

  const requests =
    JSON.parse(localStorage.getItem("recommendationRequests")) || [];

  if (requests.length === 0) {
    savedSection.style.display = "none";
    return;
  }

  savedSection.style.display = "block";

  const html = requests
    .map(
      (req, index) => `
    <div class="saved-item" style="padding: 1rem; border: 1px solid #e0e0e0; margin-bottom: 1rem; border-radius: 0.5rem;">
      <h3>${req.name}</h3>
      <p><strong>Email:</strong> ${req.email}</p>
      <p><strong>Cuisine:</strong> ${req.cuisineType}</p>
      <p><strong>Budget:</strong> ${req.priceRange}</p>
      <p><strong>Date:</strong> ${req.timestamp}</p>
      <button class="delete-saved" data-index="${index}" aria-label="Delete this recommendation">Delete</button>
    </div>
  `,
    )
    .join("");

  savedList.innerHTML = html;

  // Add delete functionality
  document.querySelectorAll(".delete-saved").forEach((btn) => {
    btn.addEventListener("click", deleteSavedRequest);
  });
}

/**
 * Delete saved recommendation
 */
function deleteSavedRequest(e) {
  const index = parseInt(e.target.getAttribute("data-index"));
  const requests =
    JSON.parse(localStorage.getItem("recommendationRequests")) || [];
  requests.splice(index, 1);
  localStorage.setItem("recommendationRequests", JSON.stringify(requests));
  displaySavedRecommendations();
}

/**
 * Clear all saved recommendations
 */
function clearAllSaved() {
  if (confirm("Are you sure you want to clear all saved recommendations?")) {
    localStorage.removeItem("recommendationRequests");
    displaySavedRecommendations();
  }
}

/**
 * Add restaurant to favorites
 */
function addToFavorites(e) {
  const btn = e.target;
  const restaurantId = parseInt(btn.getAttribute("data-id"));
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) return;

  // Get current favorites from localStorage
  const favorites =
    JSON.parse(localStorage.getItem("favoriteRestaurants")) || [];

  // Toggle favorite
  const isFavorited = favorites.some((r) => r.id === restaurantId);

  if (isFavorited) {
    const index = favorites.findIndex((r) => r.id === restaurantId);
    favorites.splice(index, 1);
    btn.textContent = "♡ Save";
  } else {
    favorites.push(restaurant);
    btn.textContent = "♥ Saved";
  }

  localStorage.setItem("favoriteRestaurants", JSON.stringify(favorites));
  displayFavoriteRestaurants();
}

/**
 * Display favorite restaurants from localStorage
 */
function displayFavoriteRestaurants() {
  const favSection = document.getElementById("favorites-section");
  const favList = document.getElementById("favorites-list");

  if (!favSection || !favList) return;

  const favorites =
    JSON.parse(localStorage.getItem("favoriteRestaurants")) || [];

  if (favorites.length === 0) {
    favSection.style.display = "none";
    return;
  }

  favSection.style.display = "block";
  const html = favorites
    .map((restaurant) => createRestaurantCard(restaurant))
    .join("");
  favList.innerHTML = html;

  // Re-add event listeners
  document.querySelectorAll(".add-favorite-btn").forEach((btn) => {
    btn.addEventListener("click", addToFavorites);
  });
}

/**
 * Close modal when clicking close button or outside
 */
function setupModalHandlers() {
  const modal = document.getElementById("food-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ======================================
// INITIALIZATION
// ======================================

/**
 * Initialize all functionality
 */
function init() {
  // Initialize date elements
  initializeDateElements();

  // Setup menu toggle
  toggleMenu();

  // Render content based on page
  renderFeaturedDishes();
  renderRestaurants();
  renderFoodGuide();

  // Setup filters
  setupCategoryFilter();
  setupRestaurantFilters();

  // Setup modal handlers
  setupModalHandlers();

  // Setup form handling
  const recommendationForm = document.getElementById("recommendation-form");
  if (recommendationForm) {
    recommendationForm.addEventListener("submit", handleFormSubmit);
  }

  // Setup saved/favorite displays
  displaySavedRecommendations();
  displayFavoriteRestaurants();

  // Setup clear all button
  const clearBtn = document.getElementById("clear-saved");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllSaved);
  }
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
