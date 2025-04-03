ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:kerosene",
            "amount": 1000
        },
        "burnTime": 5400,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:kerosene",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:lpg",
            "amount": 1000
        },
        "burnTime": 8100,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:lpg",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:gasoline",
            "amount": 1000
        },
        "burnTime": 8100,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:gasoline",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:diesel",
            "amount": 1000
        },
        "burnTime": 10800,
        "superheated": false,
        "conditions": [
            {
                "fluidTag": "forge:diesel",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:propane",
            "amount": 1000
        },
        "burnTime": 16200,
        "superheated": false,
        "conditions": [
            {
                "fluidTag": "forge:propane",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:creosote",
            "amount": 1000
        },
        "burnTime": 8100,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:creosote",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:napalm",
            "amount": 1000
        },
        "burnTime": 8100,
        "superheated": false,
        "conditions": [
            {
                "fluidTag": "forge:napalm",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:naphtha",
            "amount": 1000
        },
        "burnTime": 12000,
        "superheated": false,
        "conditions": [
            {
                "fluidTag": "forge:naphtha",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })
})
