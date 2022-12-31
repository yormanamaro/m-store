const product = [
    {
        id: "articulo-01",
        name: 'TEAM 9FORTY CAP',
        price: 29900, 
        url: 'headwear1.png' 
    },
    {
        id: "articulo-02",
        name: 'DR SEASONAL 940',
        price: 27900, 
        url: 'Dr-seasonal-940.png'
    },
    {
        id: "articulo-03",
        name: 'GULF CASUAL CLASSIC',
        price: 29900, 
        url: 'Gulf-casual-classic.png'
    },
    {
        id: "articulo-04",
        name: 'USA VERSITY M',
        price: 29200, 
        url: 'USA-versity-M.png'
    },
    {
        id: "articulo-05",
        name: 'USA VERSITY M BLACK',
        price: 29200, 
        url: 'USA-versity-M-Black.png'
    },
    {
        id: "articulo-06",
        name: 'ESSENTIAL CAP',
        price: 23800, 
        url: 'Essential-cap.png'
    },
    {
        id: "articulo-07",
        name: 'ACTIVE DUALBRAND FULL',
        price: 101900, 
        url: 'Jumpers-uno.png' 
    },
    {
        id: "articulo-08",
        name: 'MENS USA VARSITY',
        price: 53300, 
        url: 'Jumpers-dos.png'
    },
    {
        id: "articulo-09",
        name: 'GULF OVERHEAD HOODIE',
        price: 61.701, 
        url: 'Jumpers-tres.png'
    },
    {
        id: "articulo-10",
        name: 'ACTIVE DUALBRAND BLACK',
        price: 101910, 
        url: 'Jumpers-cuatro.png'
    },
    {
        id: "articulo-11",
        name: 'PAPAYA HOODED SWEAT',
        price: 44.350, 
        url: 'Jumpers-cinco.png'
    },
    {
        id: "articulo-12",
        name: 'MENS TEAM CORE',
        price: 95110, 
        url: 'Jumpers-seis.png'
    },
];


const contenedorProductos = document.querySelector(".product");

function cargarProductos() {

    product.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <div id="contenedor-productos" class="card">
            <figure class="contein-Img">
                <img src= "./public/assets/imgProducts/${product.url}" alt="${product.name}" class="img-Card">
            </figure>
            <h2 class="name-Product">${product.name}</h2>
            <div>
                <p class="price">$ ${product.price} </p>
                <button class="buy" id="${product.id}">Buy</button>
            </div>
            </div>
        `;
        contenedorProductos.append(div);
    })
};

cargarProductos();


