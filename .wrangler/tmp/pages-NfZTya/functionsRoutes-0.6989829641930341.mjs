import { onRequestGet as __api_food_search_js_onRequestGet } from "D:\\TOOLS WEB TOOLS\\kiro calorie\\functions\\api\\food-search.js"

export const routes = [
    {
      routePath: "/api/food-search",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_food_search_js_onRequestGet],
    },
  ]