const express=require('express');
const router = express.Router(); 
const MenuItem = require('./../models/MenuItem')

//menu data get starts
router.get('/',async(req,res)=>{
    try{
      const data=await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
  console.log(err);
  res.status(500).json({error:"internal server error"})
    }
  })
  //menu data get end


  //menu data post starts
router.post('/',async(req,res)=>{
    try{
     const data =req.body
     const newMenu = new MenuItem(data);
   const response = await newMenu.save();
   console.log('data saved');
   res.status(200).json(response);
   }catch(err){
   
   console.log(err);
   res.status(500).json({error:'internal server error'}); 
   }
   })
  //menu data post ends

//menu Tastetype starts
router.get('/:TasteType',async(req,res)=>{
    try{
    const TasteType=req.params.TasteType;
    if(TasteType=='sweet'|| TasteType=='sour'||TasteType=='salty'||TasteType=='spicy'){
      const response =await MenuItem.find({taste:TasteType})
      console.log('respones fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:"invalid workType"})
    }
  }
    catch(err){
  console.log(err);
  res.status(500).json({error:"Internal server problem"})
    }
  })
  //Menu Taste type ends


  module.exports=router;
  