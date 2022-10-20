import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

//importando o controller

import * as pageController from '../controllers/pageController'

import * as searchController from '../controllers/searchController'

//criando a rota HOME
router.get("/",pageController.home)
 

// ROTA Cachorro
router.get("/dogs",pageController.dogs)

// ROTA Gato
router.get("/cats",pageController.cats)
// Rota Peixe

router.get("/fishes",pageController.fishes)

router.get("/search", searchController.search)


//exportando o arquivo index.ts
export default router