const product = [
    {
        id: "articulo-01",
        name: 'TEAM 9FORTY CAP',
        price: 2990, 
        url: 'headwear1.png' 
    },
    {
        id: "articulo-02",
        name: 'DR SEASONAL 940',
        price: 2790, 
        url: 'Dr-seasonal-940.png'
    },
    {
        id: "articulo-03",
        name: 'GULF CASUAL CLASSIC',
        price: 2990, 
        url: 'Gulf-casual-classic.png'
    },
    {
        id: "articulo-04",
        name: 'USA VERSITY M',
        price: 2920, 
        url: 'USA-versity-M.png'
    },
    {
        id: "articulo-05",
        name: 'USA VERSITY M BLACK',
        price: 2920, 
        url: 'USA-versity-M-Black.png'
    },
    {
        id: "articulo-06",
        name: 'ESSENTIAL CAP',
        price: 2380, 
        url: 'Essential-cap.png'
    },
    {
        id: "articulo-07",
        name: 'ACTIVE DUALBRAND FULL',
        price: 10190, 
        url: 'Jumpers-uno.png' 
    },
    {
        id: "articulo-08",
        name: 'MENS USA VARSITY',
        price: 5330, 
        url: 'Jumpers-dos.png'
    },
    {
        id: "articulo-09",
        name: 'GULF OVERHEAD HOODIE',
        price: 6170, 
        url: 'Jumpers-tres.png'
    },
    {
        id: "articulo-10",
        name: 'ACTIVE DUALBRAND BLACK',
        price: 10191, 
        url: 'Jumpers-cuatro.png'
    },
    {
        id: "articulo-11",
        name: 'PAPAYA HOODED SWEAT',
        price: 44350, 
        url: 'Jumpers-cinco.png'
    },
    {
        id: "articulo-12",
        name: 'MENS TEAM CORE',
        price: 95110, 
        url: 'Jumpers-seis.png'
    },
];

// Se llama al id del elemento en html que queremos afectar
const contenedorProductos = document.querySelector(".product");
const botonesAgregar = document.querySelector(".buy");

function cargarProductos() {

    product.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
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

botonesAgregar.addEventListener("click", agregarAlCarrito);


const productosEnCarrito = [];

function agregarAlCarrito(product) {
    const id = product.currentTarget.id;
    console.log(id);
};

