const targetDate = new Date("Novmber 4, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
      <div class="time-unit">
          <span id="days">${days}</span>
          <div>DAY</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="hours">${hours < 10 ? `0${hours}` : hours}</span>
          <div>HRS</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span>
          <div>MIN</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="seconds">${seconds}</span>
          <div>SEC</div>
      </div>`;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Countdown Finished!";
  }
}, 1000);


// ////////////////////////////////////////////////////////////////////////////////////////////////// //
const products = [
  {
    title: "Le Dalia Ivory Liégé",
    imagePrimary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/le-tuilli-ivoire1_de480f07-0e23-4872-839f-0503d7cccb76.jpg?v=1676886890",
    imageSecondary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/le-tuilli-ivoire2_0f5ef676-1ffa-4bb6-842f-4d7eaad74dee.jpg?v=1677063525",
    price: "$380.00",
    bestSeller: true,
    isNew: true,
    link: "/products/le-dalia-ivory-liege"
  },
  {
    title: "Le Mini Dalia Black Liégé",
    imagePrimary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-01.webp?v=1677224916",
    imageSecondary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-04.webp?v=1677224925",
    price: "$350.00",
    bestSeller: false,
    isNew: false, 
    link: "/products/le-mini-dalia-black-liege"
  },
  {
    title: "Le Gina Petrol Liégé",
    imagePrimary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.jpg?v=1676886232",
    imageSecondary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-04_6fc019d3-38a9-4a96-be87-9a51a5e9a83a.jpg?v=1677243433",
    price: "$350.00",
    bestSeller: true,
    isNew: true, 
    link: "/products/le-gina-petrol-liege"
  },
  {
    title: "Le Mini Dalia Black Liégé",
    imagePrimary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-01.webp?v=1677224916",
    imageSecondary: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-04.webp?v=1677224925",
    price: "$350.00",
    bestSeller: false,
    isNew: false, 
    link: "/products/le-mini-dalia-black-liege"
  }
];


function createProductCard(product) {
  const cardElement = document.createElement('div');
  cardElement.className = "col-md-3 mb-4";

  cardElement.innerHTML = `
    <div id="card" class="product-card">
      <div class="position-relative">
        ${product.isNew ? '<span class="badge badge-new position-absolute" style="top: 10px; left: 10px;">New</span>' : ''}
        <a href="${product.link}" class="card-img-top" draggable="false">
          <img src="${product.imagePrimary}" alt="${product.title}" class="img-fluid product-image" />
        </a>
        <div id="card-product-form">
          <form method="post" action="/cart/add" id="product_form" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data">
            <input type="hidden" name="form_type" value="product">
            <input type="hidden" name="utf8" value="✓">
            <input type="hidden" name="on_success" value="force_open_drawer">
            <input type="hidden" name="quantity" value="1">
            <input type="hidden" name="id" value="${product.id}">
            <button type="submit" id="addToCart" class="product-card__quick-add-button" style="opacity: 0; transition: opacity 0.3s;">
              <span class="sr-only">Add to cart</span>
              <svg aria-hidden="true" focusable="false" fill="none" width="12" height="12" class="icon icon-plus" viewBox="0 0 12 12">
                <path d="M6 0v12M0 6h12" stroke="currentColor" stroke-width="1"></path>
              </svg>
            </button>
            <input type="hidden" name="product-id" value="7129635553343">
            <input type="hidden" name="section-id" value="template--15179705352255__b0ce58f8-be7a-4c04-9dd1-e43c34483746">
          </form>
        </div>
      </div>
      <div class="row justify-content-center g-3">
        <div class="v-stack justify-items-center gap-2">
          <div class="v-stack justify-items-center gap-1">
            <a href="${product.link}" class="product-title h6">${product.title}</a>
            <div class="price">
              <span class="text-muted">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const imageElement = cardElement.querySelector('.product-image');
  imageElement.addEventListener('mouseenter', () => {
    imageElement.src = product.imageSecondary;
  });
  imageElement.addEventListener('mouseleave', () => {
    imageElement.src = product.imagePrimary;
  });

  const cartBtnElement = cardElement.querySelector('#addToCart');
  const card = cardElement.querySelector('#card');

  card.addEventListener("mouseenter", () => {
    cartBtnElement.style.opacity = 1;
  });

  card.addEventListener("mouseleave", () => {
    cartBtnElement.style.opacity = 0;
  });

  return cardElement;
}


const productContainer = document.getElementById('product-container');
products.forEach(product => {
  productContainer.appendChild(createProductCard(product));
});




