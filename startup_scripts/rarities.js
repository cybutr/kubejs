const $Rarity = Java.loadClass("net.minecraft.world.item.Rarity")
const $UnaryOperator = Java.loadClass("java.util.function.UnaryOperator")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
const $Style = Java.loadClass("net.minecraft.network.chat.Style")
const withColorMethod = $Style.EMPTY.class.declaredMethods.filter((method) => method.name.includes("m_131148_"))[0]

function createRarity (/** @type {string} */ name, /** @type {number} */ colorCode) {
    let color = $UtilsJS.makeFunctionProxy("startup", $UnaryOperator, (style) => {
        return withColorMethod.invoke(style, Color.of(colorCode).createTextColorJS())
    })
    return $Rarity["create(java.lang.String,java.util.function.UnaryOperator)"](name, color)
    }
    createRarity("brass", 0xebc411)
    createRarity("andesite", 0xac9c86)
    createRarity("copper", 0xb87333)
    createRarity("steel", 0x896f6f)
    createRarity("blazing", 0xe95813)
    ItemEvents.modification((event) => {

    // Lists of item IDs per rarity
    let brassItems = ["kubejs:brass_machine"]
    let andesiteItems = ["kubejs:andesite_machine"]
    let copperItems = ["kubejs:copper_machine"]
    let steelItems = ["kubejs:steel_machine"]
    let blazingItems = ["kubejs:blazing_machine"]

    // Apply brass rarity to all brass items
    brassItems.forEach((id) => {
        event.modify(id, (item) => {
            item.rarity = "brass"
        })
    })

    // Apply andesite rarity to all andesite items
    andesiteItems.forEach((id) => {
        event.modify(id, (item) => {
            item.rarity = "andesite"
        })
    })

    // Apply copper rarity to all copper items
    copperItems.forEach((id) => {
        event.modify(id, (item) => {
            item.rarity = "copper"
        })
    })

    // Apply steel rarity to all steel items
    steelItems.forEach((id) => {
        event.modify(id, (item) => {
            item.rarity = "steel"
        })
    })

    // Apply blazing rarity to all blazing items
    blazingItems.forEach((id) => {
        event.modify(id, (item) => {
            item.rarity = "blazing"
        })
    })
})