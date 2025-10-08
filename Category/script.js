document.querySelectorAll(".subcategory-list").forEach((list) => {
  list.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      // Tümünden active'i kaldır
      list.querySelectorAll("li").forEach((i) => i.classList.remove("active"));
      // Seçilene active ekle
      item.classList.add("active");
    });
  });
});

// Radio button içeren form seçimleri (Seçenekler ve Fiyat Aralığı)
document.querySelectorAll(".section form").forEach((form) => {
  const labels = form.querySelectorAll("label");

  labels.forEach((label) => {
    label.addEventListener("click", () => {
      // Önce tüm label'ların içinden green sınıfını kaldır
      labels.forEach((l) => l.querySelector("span")?.classList.remove("green"));

      // Tıklanan label içindeki span varsa ona green ekle
      const span = label.querySelector("span");
      if (span) {
        span.classList.add("green");
      }
    });
  });
});
