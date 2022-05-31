const {Router} = require('express');
const router = Router();
const DB = require('./config');


router.get('/', (req, res)=>{
    res.status(200),json({
        message: "ruta status 200"
    });

});

router.get('/producto', async (req, res)=>{
    const producto=[];
    sql="select * from registro_producto";

    let result = await DB.Open(sql,[],false);

    console.log(producto);
    result.rows.map(product=>{

        let userSchema ={
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

        producto.push(userSchema);
    });
    res.json({producto});
});



module.exports= router;