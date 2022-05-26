document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    cheatAttempt = true;
  }
});
