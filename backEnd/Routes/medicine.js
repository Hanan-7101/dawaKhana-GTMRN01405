
const express =require('express')
const router= express.Router()
const{
    getMedicines,createMedicine, getMedicine, deleteMedicine, updateMedicine
}=require('../Controllers/medicineController')
//all medicines
router.get('/',getMedicines)

router.get("/:id",getMedicine); 

router.post('/',createMedicine)

router.delete('/:id',deleteMedicine)

router.patch("/:id",updateMedicine)


module.exports =router;