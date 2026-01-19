EntityEvents.hurt("minecraft:iron_golem", event => {
    const { entity, source } = event;
    const attacker = source.actual;

    if (!attacker) return;

    const attackerClass = attacker.getClass().getName();
    const isFake = attackerClass.includes("Deployer") || attackerClass.includes("FakePlayer");

    if (isFake) {
        // Mark as Fake
        entity.persistentData.putBoolean('KilledByFake', true);
    } else if (attacker.isPlayer()) {
        // If a REAL player hits it, REMOVE the tag.
        // This ensures the loot depends on who actually kills/fights it last.
        entity.persistentData.remove('KilledByFake');
    }
});