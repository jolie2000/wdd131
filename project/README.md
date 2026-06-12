# Kampala Plate - Local Food Discovery Website

## About This Project

**Kampala Plate** is a responsive web application designed to help people discover local food and dining experiences in Kampala, Uganda. The site showcases traditional Ugandan dishes, popular restaurants, and provides personalized dining recommendations.

This is a complete web development project created for WDD 131 - Dynamic Web Fundamentals, demonstrating mastery of HTML5, CSS3, and vanilla JavaScript.

---

## Site Pages

### 1. **Home Page (index.html)**

- Hero section with site introduction
- Featured dishes section with six local recommendations
- Popular restaurants grid
- Recommendation request form
- Saved recommendations display (from localStorage)

### 2. **Food Guide (food-guide.html)**

- Complete catalog of Kampala dishes
- Category filtering (All, Main Courses, Street Food, Beverages)
- Food item cards with details
- Modal popup for food item details
- Responsive grid layout

### 3. **Restaurants (restaurants.html)**

- Browse restaurants by cuisine and price
- Filter by cuisine type (Ugandan, East African, International)
- Filter by price range (Budget, Moderate, Upscale)
- Save favorite restaurants
- Favorites section (from localStorage)

### 4. **Thank You (thank-you.html)**

- Form submission confirmation
- Next steps information
- Links to explore site further

### 5. **References (references.html)**

- Citations for all content used
- Technology references
- Development information

### 6. **Site Plan (siteplan.html)**

- Original project planning document
- Color scheme and typography definitions
- Wireframes for the design

---

## Features

### Responsive Design

- Mobile optimized (480px+)
- Tablet friendly (768px+)
- Desktop full-featured (1200px+)
- Hamburger menu for mobile navigation

### Interactive JavaScript

- Dynamic content rendering
- Form submission with validation
- Filter functionality (categories, price ranges, cuisine types)
- Modal dialogs for details
- localStorage for data persistence

### User Interactions

1. **Browse dishes** - Filter by food category
2. **Find restaurants** - Filter by cuisine and price
3. **Save recommendations** - Form submission stores data locally
4. **Favorite restaurants** - Click to save/unsave
5. **Mobile navigation** - Responsive hamburger menu

### Data Management

- Recommendation requests saved to localStorage
- Favorite restaurants saved to localStorage
- Data persists between page refreshes
- Can delete individual or all saved items

---

## Technical Implementation

### HTML (index.html, \*.html files)

- Semantic HTML5 elements
- Proper heading hierarchy
- Form validation
- ARIA labels for accessibility
- Meta tags for SEO

### CSS (styles.css)

- CSS3 with Grid and Flexbox
- Responsive media queries
- CSS custom properties for colors
- PARC design principles
- WCAG AA color contrast compliance

### JavaScript (scripts.js)

- 18+ functions for site functionality
- DOM manipulation and event listeners
- Conditional logic for filtering
- Object-oriented data structures
- Template literals for string output
- localStorage API for persistence

---

## Color Scheme

- **Primary Color:** #174c43 (Forest Green) - Headers, footer, primary text
- **Secondary Color:** #f2b84b (Harvest Gold) - Buttons, highlights, accents
- **Background:** #fff8ec (Warm Ivory) - Page background
- **Text:** #222 (Near black) for dark text, #666 for lighter text

---

## Typography

- **Headings:** Merriweather (serif) - Professional, editorial feel
- **Body Text:** Nunito (sans-serif) - Clean, readable, friendly

Fonts are loaded from Google Fonts API.

---

## Key JavaScript Features

### Functions

- `initializeDateElements()` - Auto-updates copyright year
- `createDishCard()` - Generates dish HTML with template literals
- `renderFeaturedDishes()` - Displays top dishes on home page
- `renderRestaurants()` - Lists restaurants with filtering
- `handleFormSubmit()` - Processes form submissions
- `saveRecommendationRequest()` - Stores data in localStorage
- `addToFavorites()` - Toggle restaurant favorites
- `setupCategoryFilter()` - Enable food category filtering
- `setupRestaurantFilters()` - Enable restaurant filtering
- Plus 9+ supporting functions

### Array Methods Used

- `.map()` - Transform arrays to HTML
- `.filter()` - Filter items by criteria
- `.find()` - Locate specific items
- `.some()` - Check item existence
- `.splice()` - Remove array items
- `.join()` - Combine array elements

### localStorage Features

- Save recommendation requests
- Save favorite restaurants
- Display saved data on load
- Delete individual items
- Clear all data

---

## How to Use

### For Visitors

1. Visit the home page to see featured dishes
2. Use "Food Guide" to browse all dishes by category
3. Visit "Restaurants" to find dining options
4. Fill out the recommendation form to get personalized suggestions
5. Click Save to bookmark favorite restaurants
6. Your data is saved automatically

### For Developers

1. All files are in the `/project` folder
2. Styles are in `styles.css`
3. JavaScript is in `scripts.js`
4. HTML structure uses semantic elements
5. Data is stored in arrays of objects at top of `scripts.js`

---

## Responsive Breakpoints

- **Mobile (480px):** Single column, hamburger menu, optimized touch targets
- **Tablet (768px):** Two columns, menu still shows
- **Desktop (1200px+):** Full grid layout, expanded navigation

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Accessibility Features

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Alt text on all images
- Form labels properly associated with inputs

---

## Performance Optimization

- Native lazy loading on images (`loading="lazy"`)
- CSS Grid for efficient layouts
- Minimal JavaScript (no frameworks)
- Optimized color palette
- Efficient event delegation

---

## Testing

To test the site:

1. Check mobile view (480px width)
2. Check tablet view (768px width)
3. Check desktop view
4. Test form submission and localStorage
5. Test filtering functionality
6. Test favorite save/remove
7. Open DevTools console to verify no errors
8. Run Lighthouse audit for performance

---

## File Structure

```
project/
|-- images/                 # Local optimized SVG images
|-- index.html              # Home page
|-- food-guide.html         # Food browsing page
|-- restaurants.html        # Restaurant browsing page
|-- thank-you.html          # Form confirmation
|-- references.html         # Citations page
|-- siteplan.html           # Project planning doc
|-- styles.css              # Main stylesheet
|-- scripts.js              # JavaScript functionality
|-- siteplan.css            # Siteplan styling
|-- readme.md               # Project documentation
`-- project-checklist.md    # Testing checklist
```

---

## Credits

**Created by:** Uwase Jolie
**Course:** WDD 131 - Dynamic Web Fundamentals
**Date:** 2026
**Institution:** Brigham Young University - Idaho

---

## Learning Outcomes Demonstrated

✓ Semantic HTML5 structure
✓ Responsive CSS3 design with media queries
✓ Vanilla JavaScript (no frameworks)
✓ DOM manipulation and event handling
✓ Functional programming with array methods
✓ Object-oriented data structures
✓ Template literal string manipulation
✓ Browser Storage API (localStorage)
✓ Accessibility best practices
✓ Design principles (PARC)
✓ User interface design
✓ Project planning and organization

---

## Future Enhancements

Possible additions:

- Backend API integration
- User accounts and authentication
- Ratings and reviews system
- Map integration showing restaurant locations
- Search functionality
- Dietary filter options (vegetarian, vegan, halal, etc.)
- Image gallery for restaurants

---

## License

This project is an educational work created for coursework. Content is for learning purposes.

---

**Last Updated:** 2026-06-10
