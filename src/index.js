import  Express  from "express";
import employes from "./router/employes-router.js"
import index from "./router/index-router.js"
const app = Express()

app.use(Express.json())
app.listen(3000)
app.use('/api',employes)
app.use(index)
console.log("serve corriendo",3000);