BlockEvents.modification(event => {
    event.modify('kubejs:glow_solution', block => {
        block.lightEmission = 10
    })
    event.modify('kubejs:flowing_glow_solution', block => {
        block.lightEmission = 10
    })
})