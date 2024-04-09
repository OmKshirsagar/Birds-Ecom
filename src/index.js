document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("../ds/prods.json");
  const dataJson = await response.json();

  let data = dataJson.data;

  let cartTotalProds = 0;
  let cartObj = {};

  function addToCart(pid) {
    if (cartObj[pid]) {
      cartObj[pid].count++;
    } else {
      let prodData = data.find((obj) => obj.id == pid);
      cartObj[prodData.id] = {
        id: prodData.id,
        name: prodData.name,
        price: prodData.price,
        count: 1,
      };
    }
    console.log("cartObj :>> ", cartObj);
    updateCartNum();
  }
  function updateCartNum() {
    let total = 0;
    for (let obj in cartObj) {
      console.log("obj :>> ", obj);
      total += cartObj[obj].count;
    }
    cartTotalProds = total;
    document.getElementById("cart-num").innerHTML =
      cartTotalProds !== 0 ? cartTotalProds : "";
  }
  function removeFromCart(pid) {
    if (cartObj[pid]) {
      if (cartObj[pid].count > 0) {
        cartObj[pid].count--;
        if (cartObj[pid].count === 0) delete cartObj[pid];
      } else {
        delete cartObj[pid];
      }
    }
    console.log("cartObj :>> ", cartObj);
    updateCartNum();
  }

  let newHtml = "";
  console.log("data:", data);
  data.forEach((obj) => {
    newHtml += `
      <div class="col-4 g-3">
        <div class="card">
          <div class="card-header">${obj.name}</div>
          <img src="${obj.img}" class="card-img-top" style="height: 40vh; object-fit: cover; object-position: 70% 20%; border-radius: 0;" alt="${obj.name}" />
          <div class="card-body">
            <h6 class="card-text text-muted">${obj.desc}</h6>
            <p class="card-text text-info ">Price: Rs. ${obj.price}/-</p>
            <button type="button" class="btn btn-success addBtn" data-id="${obj.id}">Add</button>
            <button type="button" class="btn btn-danger removeBtn" data-id="${obj.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("products").innerHTML = newHtml;

  const addBtns = document.querySelectorAll(".addBtn");
  addBtns.forEach((currBtn) => {
    currBtn.addEventListener("click", function (e) {
      let id = e.target.getAttribute("data-id");
      addToCart(id);
    });
  });

  const removeBtns = document.querySelectorAll(".removeBtn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      removeFromCart(id);
    });
  });
  // console.log("newHtml:", newHtml);
});
