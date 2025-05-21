// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  let cartItems = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartItems++;
      cartCount.textContent = cartItems;
      alert("Item added to cart!");
    });
  });
});
