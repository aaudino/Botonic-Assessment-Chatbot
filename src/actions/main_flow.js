import BookRestaurant from "./book-restaurant";
import GetDirections from "./get-directions";
import NotFound from "./not-found";
import ShowWeather from "./show-weather";
import Start from "./start";
import Material from "./learningMaterial";

export const routes = [
  { path: "start", text: "start", action: Start },
  { path: "learningMaterial", text: "materials", action: Material },
  { path: "learningMaterial", payload: /^(materials)$/, action: Material },
  {
    input: (i) => i.intents && i.intents[0].confidence < 0.7,
    action: NotFound,
  },
  { intent: "GetDirections", action: GetDirections },
  { intent: "GetWeather", action: ShowWeather },
  { intent: "BookRestaurant", action: BookRestaurant },
];
