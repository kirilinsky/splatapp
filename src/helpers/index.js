export const googleHandle = (element) =>
  window.gtag("event", "FakeLandingClick", {
    event_category: "click",
    event_label: element,
  });