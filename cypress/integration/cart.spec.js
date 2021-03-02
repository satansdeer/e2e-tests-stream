context("Cart", () => {
	it("should allow to add items to the cart", () => {
		cy.intercept("http://localhost:4000/products", {
			fixture: "products.json",
		}).as("getProducts");
		cy.visit("/");
		cy.wait("@getProducts");

		cy.contains("button", "Add to cart").click();
		cy.get("span.is-error").should("contain", "1");
	});
});
