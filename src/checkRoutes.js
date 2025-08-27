import axios from "axios";

const API_URL = "https://ehipay-backend-production.up.railway.app"; // your backend URL
const routesToCheck = ["/", "/health", "/api", "/status"]; // add your routes here

async function checkRoutes() {
  for (const route of routesToCheck) {
    try {
      const response = await axios.get(`${API_URL}${route}`);
      console.log(`✅ Route ${route} is working. Response:`, response.data);
    } catch (error) {
      if (error.response) {
        console.log(`❌ Route ${route} returned status ${error.response.status}`);
      } else {
        console.log(`⚠️ Could not connect to route ${route}:`, error.message);
      }
    }
  }
}

checkRoutes();
