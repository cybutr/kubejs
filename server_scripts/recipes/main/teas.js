ServerEvents.recipes(event => {
    event.custom(
        {"type": "herbalbrews:kettle_brewing",
        "experience": 0.8,
        "fluid": [
            {
            "amount": 10
            }
        ],
        "heat_needed": [
            {
            "amount": 45
            }
        ],
        "ingredients": [
            {
            "item": "herbalbrews:dried_black_tea"
            },
            {
            "item": "minecraft:glass_bottle"
            }
        ],
        "result": {
            "item": "herbalbrews:black_tea",
            "effect": "herbalbrews:tough",
            "effectduration": 1800
        },
        "crafting_duration": 20}
    ).id('herbalbrews:black_tea')
})