const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg"
    },
  
    {
      id: 2,
      nombre: "pizza de Calabacin",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Calabacin"],
      img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-jamon-y-calabacin-1080x671.jpg"
    },
  
    {
      id: 3,
      nombre: "Pizza de Anchoa",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Anchoa", "Oregano"],
      img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/05/pizza-con-anchoas-y-salsa-de-tomate-al-ketchup.jpg"
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort",],
      img: "https://www.supermercedes.com.ar/napoles/wp-content/uploads/2020/04/pizza-con-champinones-y-aceitunas-negras-1080x671-1.jpg"
    },
  
    {
      id: 5,
      nombre: "Pizza Pepperoni",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Pepperoni"],
      img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
    },
  
    {
      id: 6,
      nombre: "Pizza Napolitana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Albhaca"],
      img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/05/pizza-al-ajo-con-tomates-frescos-1080x671.jpg"
    },
  ];

const renderizarPizza  = () => {

    let idPizza = document.getElementById(`id-pizza`).value;
    let idArray = parseInt(idPizza) - 1;

    let imgPizza = document.getElementById(`img-pizza`);
    let nombrePizza = document.getElementById(`nombre-pizza`);
    let precioPizza = document.getElementById(`precio-pizza`);
    let descripcionPizza = document.getElementById(`descripcion-pizza`);

    if (pizzas.length >= idPizza) {

        nombrePizza.innerHTML = pizzas[idArray].nombre;
        precioPizza.innerHTML = pizzas[idArray].precio;
        imgPizza.setAttribute("src", pizzas[idArray].img);
        descripcionPizza = pizzas[idArray].ingredientes;

    } else  {
       alert("No existen mas PIZZAS.")
    }

} 

