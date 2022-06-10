const {Router} = require('express');
const router = Router();
const DB = require('./config');


router.get('/', (req, res)=>{
    res.status(200),json({
        message: "ruta status 200"
    });

});



//ingresar listar
router.get('/producto', async (req, res)=>{
    const producto=[];
    sql="select * from registro_producto";

    let result = await DB.Open(sql,[],false);

    console.log(producto);
    result.rows.map(product=>{

        let productoSchema ={
            "ID_PRODUCTO":product[0],
            "CODIGO":product[1],
            "NOMBRE_PRODUCTO":product[2],
            "FAMILIA":product[3],
            "FECHA_VENCIMIENTO":product[4],
            "TIPO_PRODUCTO":product[5],
            "PRECIO":product[6],
            "STOCK":product[7],
            "STOCK_CRITICO":product[8]
        }

        producto.push(productoSchema);
    });
    res.json({producto});
});

//update

router.post('/producto',
function getProducto(req) {
    const producto = {
      ID_PRODUCTO: req.body.ID_PRODUCTO,
      CODIGO: req.body.CODIGO,
      NOMBRE_PRODUCTO: req.body.NOMBRE_PRODUCTO,
      FAMILIA: req.body.FAMILIA,
      FECHA_VENCIMIENTO: req.body.FECHA_VENCIMIENTO,
      TIPO_PRODUCTO: req.body.TIPO_PRODUCTO,
      PRECIO: req.body.PRECIO,
      STOCK: req.body.STOCK,
      STOCK_CRITICO: req.body.STOCK_CRITICO
    };
  
    return producto;
  }
);

  async function post(req, res, next) {
    try {
      let producto = getProducto(req);
  
      producto = await registro_producto.create(producto);
  
      res.status(200).json(producto);
    } catch (err) {
      next(err);
    }
  }



 
  async (req, res, next) => {
          try {
              let producto = getProducto(req);

              producto.ID_PRODUCTO = parseInt(req.params.id, 10);

              producto = await registro_producto.update(producto);

              if (producto !== null) {
                  res.status(200).json(producto);
              } else {
                  res.status(404).end();
              }
          } catch (err) {
              next(err);
          }
      }
  



//reserva listar

router.get('/reserva', async (req, res)=>{
    const reserva=[];
    sql="select * from reserva";

    let result = await DB.Open(sql,[],false);

    console.log(reserva);
    result.rows.map(reser=>{

        let userSchema ={
            "ID_RESERVA":reser[0],
            "FECHA_INICIO":reser[1],
            "FECHA_SALIDA":reser[2],
            "CANT_PERSONAS":reser[3],
            "TIPO_HABITACION":reser[4],
            "REG_HUESPED_TIPO_HABITACION":reser[5],
            "MAESTRO_CLIENTE_RUT_EMPRESA":reser[6],
            "NOMBRE":reser[7],
            "EMAIL": reser[8],
            "TELEFONO":reser[9]
        }

        reserva.push(userSchema);
    });
    res.json({reserva});
});



//ingresar listar
router.get('/pedido', async (req, res)=>{
    const pedido=[];
    sql="select * from registro_ordenpedido";

    let result = await DB.Open(sql,[],false);

    console.log(pedido);
    result.rows.map(ped=>{

        let userSchema ={
            "ID_PEDIDO":ped[0],
            "RUT_PROVEEDOR":ped[1],
            "NOMBRE_PROVEEDOR":ped[2],
            "FECHA_EMISION":ped[3],
            "TOTAL":ped[4]
         
        }

        pedido.push(userSchema);
    });
    res.json({pedido});
});


module.exports= router;


