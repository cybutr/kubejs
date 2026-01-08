ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", event => {
    global.dimensionChanged(event)
})
/**
 * 
 * @param {Internal.EntityTravelToDimensionEvent} event 
 */
global.dimensionChanged = event => {
    const { entity, dimension } = event
    try {
        if (entity.persistentData.inCreativeDimension === true && dimension.location() === 'minecraft:the_end') {
        event.setCanceled(true)
        return
        }

    } catch (error) {
        console.log(error)
    }
}