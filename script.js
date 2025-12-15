// =================================================================
// THEME SWITCHING LOGIC
// =================================================================
function setTheme(category) {
    const root = document.documentElement.style;
    let primaryColor, secondaryColor, backgroundGradient;

    switch (category) {
        case 'devotional':
            primaryColor = '#ff9100'; secondaryColor = '#e65100'; 
            backgroundGradient = 'radial-gradient(circle at top right, #331a00 0%, #000000 100%)';
            break;
        case 'romantic':
            primaryColor = '#ff3333'; secondaryColor = '#8b0000'; 
            backgroundGradient = 'radial-gradient(circle at top right, #5c0000 0%, #000000 100%)';
            break;
        case 'solo':
            primaryColor = '#4a90e2'; secondaryColor = '#2d689b'; 
            backgroundGradient = 'radial-gradient(circle at top right, #0a1f44 0%, #000000 100%)';
            break;
        case 'adventurous':
            primaryColor = '#a0522d'; secondaryColor = '#8b4513'; 
            backgroundGradient = 'radial-gradient(circle at top right, #382414 0%, #000000 100%)';
            break;
        case 'family':
            primaryColor = '#8a2be2'; secondaryColor = '#6a1b9a'; 
            backgroundGradient = 'radial-gradient(circle at top right, #2c004c 0%, #000000 100%)';
            break;
        default:
            primaryColor = '#ff9100'; secondaryColor = '#e65100'; 
            backgroundGradient = 'radial-gradient(circle at top right, #331a00 0%, #000000 100%)';
    }

    root.setProperty('--primary-color', primaryColor);
    root.setProperty('--secondary-color', secondaryColor);
    root.setProperty('--background-gradient', backgroundGradient);
}

// =================================================================
// TRAVEL DATA (ITINERARIES)
// =================================================================
const travelData = {
    // --- DEVOTIONAL DATA ---
    devotional: [
        { name: "Varanasi", category: "devotional", price: 9500, itinerary: [["1", "Morning Boat Ride", "Local Food", "Ganga Aarti"], ["2", "Sarnath", "Bakery", "Music"], ["3", "Ghats", "Lassi", "Stroll"], ["4", "Fort", "Pizzeria", "Temple"], ["5", "Yoga", "Aroma", "Reflection"]] },
        { name: "Amritsar", category: "devotional", price: 12000, itinerary: [["1", "Golden Temple", "Langar", "Palki Sahib"], ["2", "Jallianwala Bagh", "Kulcha", "Wagah Border"], ["3", "Museum", "Dhaba", "Heritage Walk"], ["4", "Fort", "Makhan Fish", "Shopping"], ["5", "Temple", "Sweets", "Reflection"]] },
        { name: "Kyoto", category: "devotional", price: 92000, itinerary: [["1", "Shrine", "Market", "Temple"], ["2", "Pavilion", "Udon", "Zen"], ["3", "Rock Garden", "Buddhist Cuisine", "Bamboo"], ["4", "Gardens", "Tea House", "Gion"], ["5", "Temple Grounds", "Food Court", "Shrine"]] },
        { name: "The Vatican City", category: "devotional", price: 150000, itinerary: [["1", "Basilica", "Castel", "Stroll"], ["2", "Museums", "Trattoria", "Trastevere"], ["3", "Audience", "Pizza", "Basilica"], ["4", "Gardens", "Piazza", "Colosseum"], ["5", "Mausoleum", "Gelateria", "Departure"]] },
        { name: "Tirupati", category: "devotional", price: 8000, itinerary: [["1", "Darshan", "Prasadam", "Rituals"], ["2", "Temple", "Thali", "Srinivasa"], ["3", "Waterfall", "Tiffin", "Srinivasa"], ["4", "Fort", "Restaurant", "Mutt"], ["5", "Water body", "Specialty", "Departure"]] }
    ],
    // --- SOLO DATA ---
    solo: [
        { name: "Himachal Pradesh (Kasol)", category: "solo", price: 15000, itinerary: [["1", "Arrival", "Cafe", "Bonfire"], ["2", "Trek", "Dhaba", "River"], ["3", "Exploration", "Cafe", "Stargazing"], ["4", "Gurudwara", "Langar", "Shopping"], ["5", "Market", "Bakery", "Departure"]] },
        { name: "Kyoto", category: "solo", price: 95000, itinerary: [["1", "Bamboo", "Sushi", "Walk"], ["2", "Lanes", "Lunch", "Gion"], ["3", "Pavilion", "Zen", "Alley"], ["4", "Museum", "Ramen", "Bath"], ["5", "Market", "Street Food", "Shrine"]] },
        { name: "Maldives", category: "solo", price: 65000, itinerary: [["1", "Villa", "Buffet", "Yoga"], ["2", "Snorkeling", "Seafood", "Spa"], ["3", "Reading", "Room Service", "Plankton"], ["4", "Kayaking", "Cafe", "Reflection"], ["5", "Swim", "Brunch", "Departure"]] },
        { name: "Goa", category: "solo", price: 18000, itinerary: [["1", "Beach", "Shack", "Market"], ["2", "Churches", "Cuisine", "Walk"], ["3", "Yoga", "Cafe", "Music"], ["4", "Waterfall", "National Park", "Dinner"], ["5", "Tour", "Bistro", "Departure"]] },
        { name: "Iceland", category: "solo", price: 130000, itinerary: [["1", "Lagoon", "Restaurant", "Aurora"], ["2", "Circle", "Farm", "Pool"], ["3", "Waterfalls", "Truck", "Beach"], ["4", "Glacier", "Hofn", "Photography"], ["5", "City", "Hot dogs", "Concert"]] }
    ],
    // --- ROMANTIC DATA ---
    romantic: [
        { name: "Santorini", category: "romantic", price: 140000, itinerary: [["1", "Oia", "Seafood", "Sunset"], ["2", "Beach", "Bistro", "Wine"], ["3", "Cruise", "Lunch", "Springs"], ["4", "Imerovigli", "Fine dining", "Dinner"], ["5", "Shopping", "Souvlakis", "Cinema"]] },
        { name: "Udaipur", category: "romantic", price: 25000, itinerary: [["1", "Palace", "Ambrai", "Boat"], ["2", "Island", "Terrace", "Dance"], ["3", "Sajjangarh", "Rooftop", "Dinner"], ["4", "Museum", "Thali", "Spa"], ["5", "Garden", "Cafe", "Shopping"]] },
        { name: "Paris", category: "romantic", price: 110000, itinerary: [["1", "Eiffel", "Seine", "Stroll"], ["2", "Louvre", "Cafe", "Picnic"], ["3", "Montmartre", "Bistrot", "Portrait"], ["4", "Versailles", "Grounds", "Cabaret"], ["5", "Notre Dame", "Patisseries", "Departure"]] },
        { name: "Bali (Ubud)", category: "romantic", price: 42000, itinerary: [["1", "Monkey Forest", "Warung", "Spa"], ["2", "Terrace", "Organic", "Cocktail"], ["3", "Ritual", "Warung", "Dance"], ["4", "Ridge Walk", "Bakery", "Flower bath"], ["5", "Market", "Brunch", "Yoga"]] },
        { name: "Venice", category: "romantic", price: 120000, itinerary: [["1", "Square", "Trattoria", "Gondola"], ["2", "Palace", "Osteria", "Crawl"], ["3", "Islands", "Burano", "Dinner"], ["4", "Rialto", "Pizza", "Concert"], ["5", "Art", "Caffè", "Gelato"]] }
    ],
    // --- FAMILY DATA ---
    family: [
        { name: "Orlando, Florida", category: "family", price: 200000, itinerary: [["1", "Magic Kingdom", "Guest", "Fireworks"], ["2", "Universal", "Potter", "CityWalk"], ["3", "Animal Kingdom", "Satu'li", "Pandora"], ["4", "SeaWorld", "Sharks", "Aquatica"], ["5", "NASA", "Orbit", "Astronaut"]] },
        { name: "Kerala", category: "family", price: 35000, itinerary: [["1", "Tea Gardens", "Veg", "Museum"], ["2", "Houseboat", "Sadhya", "Cruise"], ["3", "Wildlife", "Terrace", "Safari"], ["4", "Heritage", "Cafe", "Performance"], ["5", "Beach", "Abba", "Relaxation"]] },
        { name: "The Alps", category: "family", price: 180000, itinerary: [["1", "Gondola", "Pizzeria", "Sledding"], ["2", "Lesson", "Hut", "Chalet"], ["3", "Adventure", "Picnic", "Train"], ["4", "Factory", "Farm-to-Table", "Water Park"], ["5", "Sanctuary", "Resort", "Shopping"]] },
        { name: "Kyoto", category: "family", price: 90000, itinerary: [["1", "Temple", "Udon", "Museum"], ["2", "Bamboo", "Bento", "Class"], ["3", "Railway", "Food Court", "Aquarium"], ["4", "Shrine", "Okonomiyaki", "Market"], ["5", "Castle", "Sushi", "Departure"]] },
        { name: "Maldives", category: "family", price: 110000, itinerary: [["1", "Villa", "Kids Buffet", "Sunset"], ["2", "Boat Tour", "BBQ", "Feeding"], ["3", "Activities", "Pizza", "Movie"], ["4", "Picnic", "Sandbank", "Sports"], ["5", "Sandcastle", "Brunch", "Departure"]] }
    ],
    // --- ADVENTUROUS DATA ---
    adventurous: [
        { name: "Ladakh", category: "adventurous", price: 30000, itinerary: [["1", "Leh", "Tibetan Kitchen", "Reflection"], ["2", "Nubra", "Dhaba", "Safari"], ["3", "Pangong", "Mess Hall", "Bonfire"], ["4", "Leh", "Cafe", "Market"], ["5", "Rafting", "German Bakery", "Departure"]] },
        { name: "Rishikesh", category: "adventurous", price: 14000, itinerary: [["1", "Rafting", "Chotiwala", "Aarti"], ["2", "Bungee", "Jump Cafe", "Ashram"], ["3", "Trek", "Beatles Cafe", "Jhula"], ["4", "Safari", "Park", "Camping"], ["5", "Yoga", "Coffee", "Departure"]] },
        { name: "The Alps", category: "adventurous", price: 160000, itinerary: [["1", "Glacier", "Hut", "Spa"], ["2", "Skiing", "Slope-side", "Village"], ["3", "Rafting", "Grill", "Pub"], ["4", "Hiking", "Picnic", "Stargazing"], ["5", "Railway", "Lunch", "Chocolate"]] },
        { name: "Maldives (Water Sports)", category: "adventurous", price: 85000, itinerary: [["1", "Snorkeling", "Beach Grill", "Cruise"], ["2", "Scuba Dive", "Seafood", "Workshop"], ["3", "Jet Ski", "Sandbank", "Deck"], ["4", "Fishing", "Dinner", "Yoga"], ["5", "Wakeboarding", "Brunch", "Departure"]] },
        { name: "Queenstown", category: "adventurous", price: 170000, itinerary: [["1", "Bungee", "Fergburger", "Lakefront"], ["2", "Jet Boat", "Vudu", "Gondola"], ["3", "Milford Sound", "Cruise", "Relaxation"], ["4", "Rafting", "Winnies", "Arrowtown"], ["5", "Trek", "Pub", "Departure"]] }
    ]
};

let allItineraries = [];
Object.keys(travelData).forEach(cat => {
    travelData[cat].forEach(dest => {
        allItineraries.push(dest);
    });
});

let currentSearchResults = [];

// DOM Elements
const searchInput = document.getElementById("mainDestinationInput");
const suggestionsBox = document.getElementById("suggestionsBox");
const categorySelector = document.getElementById('category-selector');
const itineraryCard = document.getElementById('itinerary-card');


// =================================================================
// 1. SEARCH LOGIC
// =================================================================
function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener("keyup", function() {
        const inputVal = this.value.toLowerCase().trim();
        suggestionsBox.innerHTML = "";
        
        if (inputVal.length > 0) {
            const uniqueDestinations = [...new Set(allItineraries.map(d => d.name))];
            
            const matches = uniqueDestinations.filter(place => place.toLowerCase().includes(inputVal));
            
            if (matches.length > 0) {
                suggestionsBox.style.display = "block";
                matches.forEach(match => {
                    const div = document.createElement("div");
                    div.className = "suggestion-item";
                    div.innerText = match;
                    div.onclick = function() {
                        searchInput.value = match;
                        suggestionsBox.style.display = "none";
                        handleMainSearch();
                    };
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.style.display = "none";
            }
        } else {
            suggestionsBox.style.display = "none";
            categorySelector.innerHTML = "";
            itineraryCard.classList.add('hidden');
        }
    });

    document.addEventListener("click", function(e) {
        if (e.target !== searchInput && e.target.closest('.suggestions-box') === null) {
            suggestionsBox.style.display = "none";
        }
    });
}

function handleMainSearch() {
    const inputVal = searchInput.value.toLowerCase().trim();
    categorySelector.innerHTML = "";
    itineraryCard.classList.add('hidden');
    
    if (inputVal === "") {
        alert("Please enter a destination name.");
        return;
    }

    currentSearchResults = allItineraries.filter(dest => dest.name.toLowerCase() === inputVal);

    if (currentSearchResults.length === 0) {
        alert(`Sorry, we do not have a planner for "${searchInput.value}" yet.`);
        return;
    }

    if (currentSearchResults.length === 1) {
        showItinerary(currentSearchResults[0]);
    } else {
        showCategorySelection(currentSearchResults);
    }
}


// =================================================================
// 2. CATEGORY SELECTION LOGIC
// =================================================================
function showCategorySelection(results) {
    alert("Destination found! Please choose one of the available trip categories.");

    itineraryCard.classList.add('hidden');
    categorySelector.innerHTML = "";

    const title = document.createElement('h3');
    title.style.color = 'var(--primary-color)';
    title.style.textAlign = 'center';
    title.innerText = `Select Trip Type for ${results[0].name}`;
    categorySelector.appendChild(title);

    results.forEach(dest => {
        const btn = document.createElement('button');
        btn.className = "dest-btn";
        const label = dest.category.charAt(0).toUpperCase() + dest.category.slice(1);
        btn.innerText = (dest.category === 'family' ? 'Family Trip (#famjam)' : label + ' Trip');
        
        btn.onclick = (e) => {
            document.querySelectorAll('#category-selector .dest-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            setTheme(dest.category); 
            showItinerary(dest);
        };
        categorySelector.appendChild(btn);
    });
}


// =================================================================
// 3. ITINERARY TABLE LOADING FUNCTION 
// =================================================================
function showItinerary(dest) {
    const card = document.getElementById('itinerary-card');
    const title = document.getElementById('itinerary-title');
    const body = document.getElementById('planner-body');
    const priceElement = document.getElementById('estimatedPrice');

    setTheme(dest.category);
    
    // Set Title
    title.innerText = `${dest.name} 5-Day Plan (${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)} Trip)`;
    
    // Set Price (Assuming INR - Indian Rupees)
    const priceValue = dest.price ? dest.price : 15000; 
    priceElement.innerText = `₹ ${priceValue.toLocaleString('en-IN')}`;

    // Populate Table
    body.innerHTML = "";
    dest.itinerary.forEach(day => {
        const row = `<tr>
            <td>Day ${day[0]}</td>
            <td>${day[1]}</td>
            <td>${day[2]}</td>
            <td>${day[3]}</td>
        </tr>`;
        body.innerHTML += row;
    });

    card.classList.remove('hidden');
}


// =================================================================
// 4. UX & RESET FUNCTION
// =================================================================
function resetPlanner() {
    // Clear search input, suggestions, category buttons, and hide card
    document.getElementById("mainDestinationInput").value = "";
    document.getElementById("suggestionsBox").style.display = "none";
    document.getElementById('category-selector').innerHTML = "";
    document.getElementById('itinerary-card').classList.add('hidden');
    
    // Set theme back to default (Devotional)
    setTheme('devotional');
}

// =================================================================
// 5. SIDEBAR TAB SWITCHING LOGIC (NEW)
// =================================================================
function setupSidebarTabs() {
    const tabButtons = document.querySelectorAll('.sidebar-tabs .tab-button');
    // Select all potential tab contents (using a common class or selecting by ID prefix)
    const tabContents = document.querySelectorAll('.review-sidebar .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab'); // e.g., 'reviews' or 'services'

            // 1. Deactivate all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Hide all content panes
            tabContents.forEach(content => content.classList.add('hidden'));

            // 3. Activate the clicked button
            button.classList.add('active');

            // 4. Show the corresponding content (using the ID pattern set in HTML)
            const contentToShow = document.getElementById(`${targetTab}-content`);
            if (contentToShow) {
                contentToShow.classList.remove('hidden');
            }
        });
    });
}

// =================================================================
// INITIAL PAGE LOAD
// =================================================================
window.onload = () => {
    setupSearch();
    setupSidebarTabs(); // Initialize the tab logic
    // Set a default theme on load (Devotional theme)
    setTheme('devotional');
};