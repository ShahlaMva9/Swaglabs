describe("Select the product with the lowest and highest price ", () => {
  //runs once before all tests in the block
  before(() => {
    //login as a standard user
    const standardUser = Cypress.env("standard_user"); // standart_user is defined in cypress.config.js
    cy.login(standardUser.username, standardUser.password); //cy.login() custom command, see commands.js
  });

  it("should find the products with the cheapest and highest price and add to the cart", () => {
    // Select all products
    cy.get(".inventory_item").then(($products) => {
      let cheapestProduct = null;
      let mostExpensiveProduct = null;
      let cheapestPrice = Infinity;
      let highestPrice = 0;

      // Loop over the products
      $products.each((index, product) => {
        const price = parseFloat(
          product.querySelector(".inventory_item_price").innerText.slice(1)
        );

        //find cheapest product
        if (price < cheapestPrice) {
          cheapestProduct = product;
          cheapestPrice = price;
        }

        //find expensive product
        if (price > highestPrice) {
          mostExpensiveProduct = product;
          highestPrice = price;
        }
      });

      console.log("cheapestProduct", cheapestProduct);
      console.log("mostExpensiveProduct", mostExpensiveProduct);

      // Add products to the cart
      cy.wrap(cheapestProduct)
        .find("button", "#add-to-cart-sauce-labs-backpack")
        .click();
      cy.wrap(mostExpensiveProduct)
        .find("button", "#add-to-cart-sauce-labs-backpack")
        .click();

      //checking the products
      cy.get(".shopping_cart_link").click();
      cy.get(".cart_item").should("have.length", 2);
    });
  });

  //runs once after all tests in the block
  after(() => {
    cy.logout();
    //cy.logout() custom command, see commands.js
  });
});
