// Importamos tanto nuestra data de articulos
// como nuestra card del index html llamada en nodes.js
import {product} from "../utils/data.js";
import {containProducts} from"../utils/nodes.js";

const templateCard = (product) => {
    return`
        <div class="card">
            <figure class="contein-Img">
                <img src="public/assets/imgProducts/${product.url}" alt="" class="img-Card">
            </figure>
            <h2 class="name-Product">${product.name}</h2>
            <div>
                <p class="price">$${product.price} </p>
                <button class="buy">Buy</button>
            </div>
        </div>
    `
};

// Creamos una funcion para pintar usando nuestra data
// y pasandole los parametros arriba indicados 

const view = () => {
    const view = product.map((product) => templateCard(product));
    containProducts.innerHTML = view.join("");
}

export {view};
