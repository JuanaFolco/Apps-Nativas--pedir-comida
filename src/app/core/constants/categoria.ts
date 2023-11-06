import { Categoria } from "../interface/categorias";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hamburguesa',
        id: 0,
        imgUrl: 'https://assets.unileversolutions.com/recipes-v2/115358.jpg',
        productos: [{
            id:1,
            nombre: 'Hamburguesa artesanal',
            precio: 2220,
            ingredientes: ['1500.0g Carne molida 80/20',
            '22.0g Sal',
            '2.0g Pimienta molida',
            '10.0n/a Queso americano en tajadas'],
            imagen: 'https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png'

        },
{         id: 2 ,
        nombre: 'Hamburguesa artesanal',
        precio: 3330,
        ingredientes: ['carne a la parrilla, queso, tomate'],
        imagen: 'https://img.freepik.com/fotos-premium/sabrosa-hamburguesa-artesanal-carne-parrilla-queso-tomate-fondo-negro_210435-4381.jpg'
},
{
    id:3,
        nombre: 'Hamburguesa artesanal',
        precio: 4440,
        ingredientes: [],
        imagen: 'https://cdn.create.vista.com/api/media/small/470911278/stock-photo-delicious-beef-burger-tomato-sauce'
     }]
    },
    {
        nombre: 'Pizza',
        id: 1,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzLASQ6GzpvB8sCtRntMDVeptvU2MQVVXJvzbt_B9PxNXM7dQUMJN-XDqLh9EJR0fZ4A&usqp=CAU', 
        productos: [
    
        {
            id:4,
        nombre: 'Pizza de pepperoni',
        precio: 4250,
        ingredientes: ['pizza neoyorquina 40cm de diametro de 8 porciones'],
        imagen:'https://www.picanhacia.com.br/wp-content/uploads/2017/01/Saiba-Como-Fazer-Receita-de-Pizza-de-Calabresa-com-Catupiry-Igual-de-Pizzaria.jpg', 
         },

         {
            id:5,
         nombre: 'Pizza de Mozzarella',
         precio: 5000,
         ingredientes: ['pizza neoyorquina 40cm de diametro de 8 porciones'],
         imagen:'https://th.bing.com/th/id/OIP.TJkQfEpAv3RygtjhkvMIJAHaEI?w=332&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',
         },

         {
            id:6,
        nombre: 'Pizza de Champignones',
         precio: 5000,
         ingredientes: ['pizza neoyorquina 40cm de diametro de 8 porciones'],
         imagen:'https://th.bing.com/th/id/OIP.ze1fbBNSBSZq8jNpdMX3uwHaEk?w=299&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        }]
    },
    {
        nombre: 'Postres',
        id: 2,
        imgUrl: 'data:image/jpeg;base64,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',
        productos: [
            {
                id:7,
                nombre: 'Oreo',
            precio: 1550,
            ingredientes: ['Base de galletita oreo con dulce de leche y crema, decorado con ralladura de oreo'],
            imagen:'https://th.bing.com/th/id/OIP.VfV1vfq46O7tY3V8WGemPQAAAA?pid=ImgDet&rs=1',
             },  
            
             {
                id:8,
                nombre: 'Cheesecake de frutos rojos',
             precio: 1570,
             ingredientes: ['Base de galletita lincoln con mousse de queso al limon, decorado con frutos rojos'],
             imagen:'https://images.deliveryhero.io/image/pedidosya/products/c3605d08-38a2-4d93-8e56-c6828cba0fd5.jpg?quality=90&width=1280&webp=1&dpi=1.5',
              },  

              {
                id:9,
                nombre: 'Marroc',
              precio: 1580,
              ingredientes: ['Base de galletita lincoln, crema de marroc, dulce de leche y crema, decorado con marroc '],
              imagen:'https://images.deliveryhero.io/image/pedidosya/products/ba7fa627-cbc1-4bba-876e-9f3b19dd9324.jpg?quality=90&width=1280&webp=1&dpi=1.5',
               }]
    },
    {
        nombre: 'Bebidas',
        id: 3,
        imgUrl:'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b',   
        productos: [
            {
                id: 10,
                nombre: 'Agua',
                precio: 100,
                ingredientes: [],
                imagen:
                  'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
              },
              {
                id: 11,
                nombre: 'Agua Saborizada Naranja',
                precio: 100,
                ingredientes: [],
                imagen:
                  'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg',
              },
              {
                id: 12,
                nombre: 'Fanta Uva',
                precio: 100,
                ingredientes: [],
                imagen:
                  'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000',
              },
            ],
          },
        ];
   
  