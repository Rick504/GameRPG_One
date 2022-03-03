const knex = require('../models/config/conn_knex')

const exchange = async (req, res, next) => {

        radio_1 = req.body.to_replace_1
        radio_2 = req.body.to_replace_2
        value = req.body.value

        var user = await knex('users').where({id: user_id})
                                        .column('gold', 'supplies','wood')

        var gold = parseInt( user[0].gold ) 
        var supplies = parseInt( user[0].supplies ) 
        var wood = parseInt( user[0].wood ) 

        if (radio_1 === "undefined" || radio_2 === "undefined") { 
            res.send(` <script> 

                            alert('Preencha os campos.');
                            history.back();

                        </script> `)
        }
         
        if (radio_1 === radio_2) {
            res.send(` <script>

                            alert('Valores iguais não podem ser trocados!'); 
                            history.back();

                        </script> `)
        } 

        // Gold for Supplies 
        else if (radio_1 === 'Gold_replace' && radio_2 === 'Supplies_replace') {

                if (gold >= 15) {

                    gold -= value
                    supplies += value/4 * 3
    
                    const results = await knex('users').where({id: user_id}).update({ 
                        supplies: supplies.toFixed(0),
                        gold: gold.toFixed(0)
                    })
    
                    return results

                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }

        } 
        
        // Gold for Wood
        else if (radio_1 === 'Gold_replace' && radio_2 === 'Wood_replace') {

                if (gold >= 15) {

                    gold -= value
                    wood += value/4 * 3

                    const results = await knex('users').where({id: user_id}).update({ 
                        wood: wood.toFixed(0),
                        gold: gold.toFixed(0)
                    })

                    return results
                    
                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }
        } 
        
        // Supplies for Wood 
        else if (radio_1 === 'Supplies_replace' && radio_2 === 'Wood_replace') {

                if (supplies >= 20) {

                    supplies -= value
                    wood += value/4 * 3

                    const results = await knex('users').where({id: user_id}).update({ 
                        supplies: supplies.toFixed(0),
                        wood: wood.toFixed(0)
                    })

                    return results
                    
                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }
        }
        
        // Supplies for Gold 
        else if (radio_1 === 'Supplies_replace' && radio_2 === 'Gold_replace' ) {

                if (supplies >= 20) {

                    supplies -= value
                    gold += value/4 * 3
        
                    const results = await knex('users').where({id: user_id}).update({ 
                        supplies: supplies.toFixed(0),
                        gold: gold.toFixed(0) 
                    })
        
                    return results
                    
                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }
        } 
        
        // Wood for Supplies
        else if (radio_1 === 'Wood_replace' && radio_2 === 'Supplies_replace') {

                if (wood >= 10) {

                    wood -= value
                    supplies += value/4 * 3
        
                    const results =await knex('users').where({id: user_id}).update({ 
                        wood: wood.toFixed(0),
                        supplies: supplies.toFixed(0) 
                    })
        
                    return results
                    
                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }

        } 
        
        // Wood for Gold
        else if (radio_1 === 'Wood_replace' && radio_2 === 'Gold_replace') {

                if (wood >= 10) {

                    wood -= value
                    gold += value/4 * 3
        
                    const results = await knex('users').where({id: user_id}).update({ 
                        wood: wood.toFixed(0),
                        gold: gold.toFixed(0)
                    })
        
                    return results
                    
                } else {
                    res.send(` <script> 

                                    alert('Saldo Insuficiente.'); 
                                    history.back();

                                </script> `)
                }
        } 
    } 

module.exports = { exchange }