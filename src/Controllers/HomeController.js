
const Test = require('../Models/Test');



module.exports = {

    async index(request, response){

       const test = await Test.create({
            id: 1,
            text: 'teste'
       });

      return response.json({text: "teu cu men"});

    },

 
}