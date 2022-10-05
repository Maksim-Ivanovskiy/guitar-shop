class Products {

    render () {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, price, img}) => {
            htmlCatalog += `
                <li class="products-container">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}"/>
                    <span class="products-element__price">${price}</span>
                    <button class="products-element__btn">Add to the cart</button>
                </li>
            `;
        })

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    };

    
}

const productsPage = new Products();
productsPage.render();



/* const createProductsLayout = async () => {
    const products = await getProducts();
    
    const productsHTML = products
        .map(product => `
            <li>
                <span>${product.title}</span>
                <img src="${product.image}"/>
                <span>${product.price}</span>
                <button>Add to the cart</button>
            </li>
        `)
        .join('')
    document.querySelector('.products').innerHTML = productsHTML
};

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json();
    console.log({ products })
    return products
};


createProductsLayout() */