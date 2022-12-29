const product = [
    {
        id: "articulo-01",
        name: 'TEAM 9FORTY CAP',
        price: 29.900, 
        url: 'headwear1.png' 
    },
    {
        id: "articulo-02",
        name: 'DR SEASONAL 940',
        price: 27.900, 
        url: 'Dr-seasonal-940.png'
    },
    {
        id: "articulo-03",
        name: 'GULF CASUAL CLASSIC',
        price: 29.900, 
        url: 'Gulf-casual-classic.png'
    },
    {
        id: "articulo-04",
        name: 'USA VERSITY M',
        price: 29.200, 
        url: 'USA-versity-M.png'
    },
    {
        id: "articulo-05",
        name: 'USA VERSITY M BLACK',
        price: 29.200, 
        url: 'USA-versity-M-Black.png'
    },
    {
        id: "articulo-06",
        name: 'ESSENTIAL CAP',
        price: 23.800, 
        url: 'Essential-cap.png'
    },
    {
        id: "articulo-07",
        name: 'ACTIVE DUALBRAND FULL',
        price: 101.900, 
        url: 'Jumpers-uno.png' 
    },
    {
        id: "articulo-08",
        name: 'MENS USA VARSITY',
        price: 53.300, 
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
        price: 101.910, 
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
        price: 95.110, 
        url: 'Jumpers-seis.png'
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");

/*function cargarProductos() {

    product.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div id="contenedor-productos" class="card">
            <figure class="contein-Img">
                <img src=""public/assets/imgProducts/${product.url}" alt="${product.name}" class="img-Card">
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

cargarProductos(); */



function cargarProductos() {

    product.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div id="contenedor-productos" class="card">
        <figure class="contein-Img">
            <img src=""public/assets/imgProducts/${product.url}" alt="${product.name}" class="img-Card">
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

}

cargarProductos();





/* 
<div id="contenedor-productos" class="card">
    <figure class="contein-Img">
        <img src="" alt="" class="img-Card">
    </figure>
    <h2 class="name-Product"></h2>
    <div>
        <p class="price">$ </p>
        <button class="buy">Buy</button>
    </div>
</div> 
*/
