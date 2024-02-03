//Sintaxis básica. Segunda pre-entrega

//Para declarar variables let

let savedPin = "Ramiro Galvan"
let savedPassword = "1234"
let ingresar = false;


alert ("Bienvenido a Expreso Pilar")


//Login
for (let i=2; i>=0; i--) {
 let userPin = prompt ("Ingresa tu usuario. Tenes " + (i + 1) +  " intentos");
 let userPassword = prompt ("Ingresa tu contraseña. Tenes " + (i + 1) + " intentos");

 if (userPin == savedPin) {
    (userPassword == savedPassword) 
    alert ("Login exitoso")
    ingresar = true;
    break
    }else{
        alert ("Error. Te quedan " + i+ " intentos")
    }
}    

if (ingresar) {
    let saldo =  500; 
    let opcion = prompt ("Elegi una opción:  \n1-Saldo  \n2-Comprar pasajes  \n3-Deposito \n4- Presiona x para cancelar ");
    while (opcion != "X" && opcion != "x") {
        switch (opcion) {
            case "1": alert ("Tu saldo es $"+saldo)
               break
            case "2":retirarDinero() 
               break   
        }
        let opcion = prompt ("Elegi una opción:  /n1-Saldo  /n2-Comprar pasajes  /n3-Deposito /n4- Presiona x para cancelar "); 
    }

    function retirarDinero() {
        let retiro = parseInt (prompt( "Cantidad de pasajes"))
        if(retiro <= saldo) {
            saldo-=retiro
            alert("Compra exitosa. Tu nuevo saldo es $"+saldo)
        }else{
            alert ("Fondos insuficientes!")
        }
    }
}

// Array de tickets

const productos = [
        {id:1, nombre:"un ticket", precio:4900},
        {id:2, nombre:"dos tickets", precio:9800},
        {id:3, nombre:"tres tickets", precio:14700},
]
   
let producto = productos.find(item => item.id === 3);
console.log(producto.nombre + " (" + producto.precio + "precio)")

class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.totalPagar = 0;
        this.totalDescuento = 3;
    }

    agregarProducto(id) {
        let producto = productos.find (prod => prod.id === id);

        if (producto) {
            this.productos.push(producto);
            console.log ("Agregaste el producto a" + producto.id + "al carrito");
        } else {
            console.log ("No se encontro el producto deseado" + id + "!")
        }
    }

    listarCarrito () {{
          this.productos.forEachitem (item=>
          console.log (item.id + "-" + item.nombre + "- $" + item.precio))
        }
    }

    calcularTotalProductos (){
        return this.productos.length;

    }
    
    calcularSumaTotalProductos (){
        
        this.productos.forEach (item => {
            this.totalPagar += item.precio;
        })

        return this.totalPagar;
    }

    aplicarDescuento () {
        if (this.calcularTotalProductos() >= this.maxtotalDescuento) {
            return Math.round (this.totalPagar - ((this.totalPagar * this.descuento) /100));
        }
    }

    calcularTotalPagar () {
         let total = 0;

        this.productos.forEach(item => {
            total += item.precio;
        })

        return total;
    }
}    

const  carrito = new Carrito();
 let opcionSeleccionada = 3;
 
while (opcionSeleccionada !=0) {
    opcionSeleccionada = parseInt(prompt(" Seleccione el ticket a agregar: 0 para Salir\n\n" + listarProductos()));
    
    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

carrito.agregarProducto(1);
carrito.agregarProducto(2);
carrito.agregarProducto(3);
carrito.listarCarrito();
console.log ("Elemento del carrito " +  carrito.calcularTotalProductos())
let totalCompra  = carrito.calcularSumaTotalProductos();
let aplicarDescuento = carrito.aplicarDescuento();
console.log ("Total de la compra: $" + totalCompra );
console.log ("Descuento: $" + aplicarDescuento);
let totalFinal = totalCompra - aplicarDescuento;
console.log ("Precio final: $" + totalFinal);





    

  
 

