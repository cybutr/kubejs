MoreJSEvents.villagerTrades((event) => {
    event.removeModdedTrades(['advancedperipherals:computer_scientist'], 1)
    event.removeVanillaTrades(['advancedperipherals:computer_scientist'], 1)
})

MoreJSEvents.updateWandererOffers((event) => {
    event.getOffers().forEach((offer) => {
        if (event.firstInput == "advancedperipherals:peripheral_casing") {
            let trades = event.getOffers()
            event.addRandomOffer(trades)
        }
    })
})
