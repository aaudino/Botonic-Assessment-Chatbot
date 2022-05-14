import { a } from "natural/lib/natural/stemmers/indonesian/stemmer_id";

export const webchat = {
  onInit: (app) => {
    app.open();
  },
  onOpen: (app) => {
    app.addBotText(
      "Hello! Please enter your matriculation number for authentification purposes."
    );
  },

  storageKey: "myCustomBotonicStateKey",
  storage: sessionStorage,
};
