import page from "./lib/page.js";
import homeView from "./views/homeView.js";


// Setup routes
page('/', homeView);

// Start routing
page();