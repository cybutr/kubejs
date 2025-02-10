//startup_scripts
CreateHeatJS.registerHeatEvent(event =>{
    event.registerHeatLevel("COOLED",0,0x63cde3)
    event.registerHeatSource("COOLED","minecraft:packed_ice")
})