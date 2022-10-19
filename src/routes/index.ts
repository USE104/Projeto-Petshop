import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

//criando a rota HOME
router.get("/",(req:Request,res:Response) =>{
    res.send("ROTA HOME FUNCIONANDO")
})


// ROTA Cachorro
router.get("/cachorros",(req:Request,res:Response) =>{
    res.send("ROTA Página Cachorro")
})


// ROTA Gato
router.get("/gatos",(req:Request,res:Response) =>{
    res.send("ROTA Página Gato")
})

// Rota Peixe

router.get("/peixes",(req:Request,res:Response) =>{
    res.send("Rota Página Peixe")
})

//exportando o arquivo index.ts
export default router