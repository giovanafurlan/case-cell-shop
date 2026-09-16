1. Crie um fluxograma desse endpoint POST /checkout que finaliza a compra para melhor visualização do processo

2. Qual a melhor forma de fazer uma listagem de campos necessários para um endpoint

Id do cliente (int) único
Id do produto (int) lista

3. Help me create the front-end interface for an e-commerce page using the latest version of the Tailwind framework, it should display a complete list of hardcoded products, including options to add items to the cart and select the quantity

4. Help me create a toggle button so the user can switch between light and dark modes on the website.

5. Example of a mobile phone case product structure, add more random examples

  {
    id: "1",
    name: "Lilo & Stitch Case",
    phoneModel: "iPhone 15 Pro",
    brand: "Apple",
    price: 10,
    category: "Disney",
    imageUrl: "/images/products/1.png",
    description: "Cute Stitch watercolor case for iPhone 15 Pro",
    inStock: true,
  },

6. Help me with a component to search for phone cases at the top of the page and also filter by brand and category

7. Help me implement a POST API request called `/checkout`
- The request body must contain: the ID of the product selected by the user and the specified quantity
- It must include error handling for scenarios such as: if a product with ID 1 has 10 units in stock and the user attempts to add more than 10 to the cart, the system must return an error message
- The request must be triggered when the user clicks the "add to cart" button
- It must reduce the product stock after the addition `product.stock -= quantity`