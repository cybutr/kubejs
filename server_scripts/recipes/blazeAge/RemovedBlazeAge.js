ServerEvents.recipes(event => {
    event.remove({id: "tconstruct:smeltery/casting/seared/smeltery_controller"}),
    event.remove({id: "tconstruct:smeltery/casting/scorched/foundry_controller"}),
    event.remove({id: "tconstruct:smeltery/seared/drain"}),
    event.remove({id: "tconstruct:smeltery/seared/drain_retextured"}),
    event.remove({id: "tconstruct:smeltery/seared/duct_retextured"}),
    event.remove({id: "tconstruct:smeltery/seared/duct"}),
    event.remove({id: "tconstruct:smeltery/seared/chute_retextured"}),
    event.remove({id: "tconstruct:smeltery/seared/chute"}),
    event.remove({id: "tconstruct:smeltery/scorched/drain_retextured"}),
    event.remove({id: "tconstruct:smeltery/scorched/drain"}),
    event.remove({id: "tconstruct:smeltery/scorched/duct_retextured"}),
    event.remove({id: "tconstruct:smeltery/scorched/duct"}),
    event.remove({id: "tconstruct:smeltery/scorched/chute_retextured"}),
    event.remove({id: "tconstruct:smeltery/scorched/chute"})
})