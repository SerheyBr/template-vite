document.addEventListener("DOMContentLoaded", function () {
  new SlimSelect({
    select: "#service",
    settings: {
      showSearch: false,
      placeholderText: "Выберите услугу",
    },
  });
});
