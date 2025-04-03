ServerEvents.recipes(event => {
    let sc = (output, input, amount) => {
        event.stonecutting(Item.of(output, amount), input).id(`kubejs:stonecutting/${output.split(':')[1]}`)
    }
    let sm = (output, input, template, upgradeItem) => {
        event.smithing(output, template, input, upgradeItem).id(`kubejs:smithing/${output.split(':')[1]}`)
    }
    sc('create:industrial_iron_block', 'create_dd:industrial_iron_ingot', 2)
    event.recipes.create.emptying([Fluid.of('create_dd:chromatic_waste', 90), 'create_dd:compound_base'], 'create_dd:chromatic_compound').id('kubejs:emptying/chromatic_compound')
})