(function showPopup() {
    //Declaração das variáveis
    let popupContainer = document.createElement("div");
    let productName = document.querySelector(".product-single__title").innerText;
    let productPrice = document.querySelector(".product-single__price").innerText;
    let productSizesSelector = document.querySelectorAll("#SingleOptionSelector-0 > option");
    const productSizes = Array.from(productSizesSelector, option => option.value);
    let productColorsSelector = document.querySelectorAll("#SingleOptionSelector-1 > option");
    const productColors = Array.from(productColorsSelector, option => option.value);
    let productQuantity = document.querySelector("#Quantity").value;

    //Definição do HTML do container do Pppup
    popupContainer.innerHTML = `
        <style>
            .popup-product-name {
                font-size: 1.5em;
                text-transform: uppercase;
                letter-spacing: .1em;
                font-weight: 400;
            }
            
            #popup-add-to-cart-button {
                text-transform: uppercase;
                background-color: #216EFD;
                color: white;
                font-weight: 600;
                letter-spacing:.03em;
                font-size: 0.8em;
                border: none;
                border-radius: 2px;
                padding: 12px;
                width: 200px;
            }

            #popup-add-to-cart-button:hover {
                background-color: #1958CC;
            }

            #exitButton {
                position: absolute;
                top: 10px;
                right: 10px;
                border: none;
                background-color: transparent;
                cursor: pointer;
                font-size: 16px;
            }
        </style>
        <button id="exitButton">✖</button>
        <h3 class="popup-product-name">${productName}</h3>
        <p id="popup-product-price"><strong>Price:</strong> ${productPrice}</p>
        <label for="popup-product-size">Size</label>
        <select id="popup-product-size">
            ${productSizes.map(function(size) {
            return '<option value="' + size + '">' + size + '</option>';
            }).join('')}
        </select>
        <label for="popup-product-color">Color: </label>
        <select id="popup-product-color">
            ${productColors.map(function(size) {
            return '<option value="' + size + '">' + size + '</option>';
            }).join('')}
        </select>
        <label for="popup-product-quantity">Quantity</label>
        <input type="number" id="popup-product-quantity" value="1" min="1">
        <button id="popup-add-to-cart-button">Add to cart</button>
    `;

    //Definição do CSS do container do Popup
    popupContainer.style.position = "fixed";
    popupContainer.style.zIndex = "9999";
    popupContainer.style.fontFamily = "Karla,sans-serif";
    popupContainer.style.bottom = "20px";
    popupContainer.style.right = "20px";
    popupContainer.style.width = "300px";
    popupContainer.style.background = "#fff";
    popupContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    popupContainer.style.padding = "15px";
    popupContainer.style.borderStyle = "solid";
    popupContainer.style.borderWidth = "1px";
    popupContainer.style.borderColor = "#216EFD";
    popupContainer.style.borderRadius = "5px";

    document.body.appendChild(popupContainer);

    document.getElementById("exitButton").addEventListener("click", function() {
        popupContainer.remove();
    });

    document.getElementById("popup-add-to-cart-button").addEventListener("click", function() {
        let selectedSize = document.getElementById("popup-product-size").value;
        let selectedColor = document.getElementById("popup-product-color").value;

        const nativeAddToCart = document.getElementById("AddToCart-product-template");

        if (nativeAddToCart) {
            nativeAddToCart.click();
        } else {
            alert("Original Add to Cart button not found!");
        }
    })
})();