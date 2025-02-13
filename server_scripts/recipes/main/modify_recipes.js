ServerEvents.recipes(event => {
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/lpg_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/turbine_engine' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'tfmg:sequenced_assembly/steel_mechanism' }, 'tfmg:screwdriver', '#forge:screwdrivers')
    event.replaceInput({ id: 'functionalstorage:gold_upgrade' }, 'functionalstorage:copper_upgrade', 'kubejs:brass_machine')
    event.replaceInput({ id: 'functionalstorage:copper_upgrade' }, '#functionalstorage:drawer', 'kubejs:copper_machine')
})