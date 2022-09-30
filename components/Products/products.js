class Products {

    render () {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, price, img}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}"/>
                    <span>${price}</span>
                    <button>Add to the cart</button>
                </li>
            `;
        })

        const html = `
            <ul>
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