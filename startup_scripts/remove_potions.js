MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion("apotheosis:resistance", null, null);
    event.removeByPotion("apotheosis:absorption", null, null);
    event.removeByPotion("apotheosis:haste", null, null);
    event.removeByPotion("apotheosis:wither", null, null);
    event.removeByPotion("apotheosis:sundering", null, null);
    event.removeByPotion("apotheosis:grievous", null, null);
    event.removeByPotion("apotheosis:flying", null, null);
    
    event.removeByPotion(null, null, "apotheosis:resistance");
    event.removeByPotion(null, null, "apotheosis:absorption");
    event.removeByPotion(null, null, "apotheosis:haste");
    event.removeByPotion(null, null, "apotheosis:wither");
    event.removeByPotion(null, null, "apotheosis:sundering");
    event.removeByPotion(null, null, "apotheosis:grievous");
    event.removeByPotion(null, null, "apotheosis:flying");
});