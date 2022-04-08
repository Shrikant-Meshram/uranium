const express = require('express');
const res = require('express/lib/response');


const router = express.Router();
const arr =['fandry','sairat','duniyadari','pk','lagaan','kgf']
router.get('/movies', function (req, res) { 
  

    res.send(arr)
});

//no.2
 router.get('/movies/:indexNumber', function (req, res) {
     const a= req.params.indexNumber
     if(a<arr.length && a>=0){
     res.send(arr[a])
     }
     else{
         res.send('no valid index')
     }
 });

 const arr2 =[ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   router.get('/films', function (req, res) { 
res.send(arr2)
   });

   router.get('/films/:filmsId', function (req, res) { 
    const c = req.params.filmsId
    if(c<arr2.length && c>=0)
{
  res.send(arr2[c])
}
else{
    res.send('no such id')
}
   });
 module.exports = router;
// adding this comment for no reason