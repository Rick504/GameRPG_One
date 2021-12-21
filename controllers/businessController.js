const exchange = async (req, res, next) => {

    const { to_replace_1, to_replace_2 } = await req.body
    

    console.log(to_replace_1);
    console.log(to_replace_2);

        if (to_replace_1 === to_replace_2) {
            
                res.send("<script>alert('Valores iguais não podem ser trocados!'); history.back()</script>")
        }
        // res.redirect('/Business/'+ user_id)

        res.end()
      } 


module.exports = { 
    exchange
 }