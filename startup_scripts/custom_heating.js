CreateHeatJS.registerHeatEvent((event) => {
    event.registerHeat("COOLED", 0x63cde3)
        .addHeatSource("minecraft:packed_ice")
        .register()
})