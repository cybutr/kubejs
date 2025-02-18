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
    ItemEvents.modification((event) => {

    event.modify("kubejs:brass_machine", (item) => {
        item.rarity = "brass"
    })
    event.modify("kubejs:andesite_machine", (item) => {
        item.rarity = "andesite"
    })
    event.modify("kubejs:copper_machine", (item) => {
        item.rarity = "copper"
    })
    event.modify("kubejs:steel_machine", (item) => {
        item.rarity = "steel"
    })
})