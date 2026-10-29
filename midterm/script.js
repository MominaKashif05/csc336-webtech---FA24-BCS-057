/* --- TASK 3: CART FUNCTIONALITY, BADGES & PURCHASE LIMITS --- */

document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const maxLimit = 3; // Purchase limit per item based on exam constraints

    // Select all "Add to Cart" or buy buttons (or we can attach to product card actions)
    const cartBadge = document.querySelector(".fa-bag-shopping"); // Adjust selector if you have a badge counter element

    // Example function to handle adding items with limit check
    window.addToCart = function(productName, quantity = 1) {
        if (cartCount + quantity > maxLimit) {
            alert(`Purchase Limit Exceeded! You can only buy a maximum of ${maxLimit} units of this item.`);
            return false;
        }
        
        cartCount += quantity;
        updateCartBadge();
        alert(`Successfully added ${productName} to your cart! Cart total items: ${cartCount}`);
        return true;
    };

    function updateCartBadge() {
        // Find or create badge element next to the shopping bag icon
        let badge = document.querySelector("#cart-badge-count");
        if (!badge && cartBadge) {
            badge = document.createElement("span");
            badge.id = "cart-badge-count";
            badge.className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small";
            badge.style.fontSize = "0.6rem";
            cartBadge.parentElement.style.position = "relative";
            cartBadge.parentElement.appendChild(badge);
        }
        if (badge) {
            badge.textContent = cartCount;
            badge.style.display = cartCount > 0 ? "inline-block" : "none";
        }
    }
});