import  Express  from "express";
import employes from "./router/employes-router.js"
import index from "./router/index-router.js"
const app = Express()

app.use(Express.json())
app.use('/api',employes)
app.use(index)

app.use((req,res,next) => {
    res.status(400).json({message: 'pagina no encontrada'
    })
})



export default app; 