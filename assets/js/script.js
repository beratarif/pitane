document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("cartButton");
  const cartPanel = document.getElementById("cartPanel");
  const cartItems = document.getElementById("cartItems");
  const emptyCartMessage = document.getElementById("emptyCartMessage");

  let cart = [];

  // Paneli aç/kapat
  cartButton.addEventListener("click", function (e) {
    e.stopPropagation();
    cartPanel.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!cartPanel.contains(e.target) && !cartButton.contains(e.target)) {
      cartPanel.classList.remove("show");
    }
  });

  // Sepete ekle
  document.querySelectorAll(".add-to-cart").forEach(function (button) {
    button.addEventListener("click", function () {
      const name = this.dataset.name;
      const price = parseFloat(this.dataset.price);

      // Aynı ürün varsa adedi artır
      const existingItem = cart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      renderCart();
    });
  });

  function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      emptyCartMessage.style.display = "block";
      return;
    }

    emptyCartMessage.style.display = "none";

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.quantity} x ₺${item.price}`;
      cartItems.appendChild(li);
    });
  }
});
