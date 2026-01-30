ItemEvents.modification(event => {
    // ==========================================
    //              HELPER FUNCTIONS
    // ==========================================

    /**
     * Modifies a standard 4-piece armor set.
     * Note: Armor enchantability/damage cannot be modified in this event.
     */
    const modifyArmorSet = (modid, material, stats) => {
        const parts = ['helmet', 'chestplate', 'leggings', 'boots'];
        const durMult = [13, 15, 16, 11]; 
        
        parts.forEach((part, index) => {
            let suffix = part;
            if (modid === 'northstar' && part === 'chestplate') suffix = 'chestpiece';

            let id = `${modid}:${material}_${suffix}`;

            event.modify(id, item => {
                if (stats.armor) item.armorProtection = stats.armor[index];
                if (stats.toughness) item.armorToughness = stats.toughness;
                if (stats.knockback) item.armorKnockbackResistance = stats.knockback;
                if (stats.durability) item.maxDamage = stats.durability * durMult[index];
            });
        });
    };

    /**
     * Modifies a standard 5-piece tool set.
     * Uses the Tier wrapper to change stats safely.
     */
    const modifyToolSet = (modid, material, stats) => {
        const tools = ['pickaxe', 'axe', 'shovel', 'sword', 'hoe'];
        
        tools.forEach(tool => {
            let id = `${modid}:${material}_${tool}`;
            event.modify(id, item => {
                if (stats.durability) item.maxDamage = stats.durability;
                
                // We must modify stats via the Tier object, not the item directly
                item.tier = tier => {
                    if (stats.speed) tier.speed = stats.speed;
                    if (stats.enchantability) tier.enchantmentValue = stats.enchantability;
                    
                    // CRASH FIX: Set damage bonus on the Tier instead of item.attackDamage
                    // Note: Actual damage = Base Tool Damage + Tier Damage Bonus
                    // We approximate by setting the tier bonus to the requested damage - 2 (generic offset)
                    if (stats.damage) {
                         tier.attackDamageBonus = stats.damage - 2; 
                         if (tier.attackDamageBonus < 0) tier.attackDamageBonus = 0;
                    }
                };
            });
        });
    };

    /**
     * Modifies a single item ID directly.
     */
    const modifyItem = (id, stats) => {
        event.modify(id, item => {
            if (stats.armor) item.armorProtection = stats.armor;
            if (stats.toughness) item.armorToughness = stats.toughness;
            if (stats.knockback) item.armorKnockbackResistance = stats.knockback;
            if (stats.durability) item.maxDamage = stats.durability;
            
            // Only use Tier logic if the user provided tier stats (speed/damage/enchant)
            if (stats.speed || stats.enchantability || stats.damage) {
                item.tier = tier => { 
                    if (stats.speed) tier.speed = stats.speed; 
                    if (stats.enchantability) tier.enchantmentValue = stats.enchantability;
                    if (stats.damage) tier.attackDamageBonus = stats.damage - 1;
                };
            }
            
            // Note: attackSpeed removed as it requires Attributes and crashes direct modification
        });
    };

    // ==========================================
    //              ARMOR BALANCING
    // ==========================================

    modifyArmorSet('minecraft', 'iron', { 
        armor: [2, 5, 4, 2], toughness: 0, durability: 15 
    });
    modifyArmorSet('minecraft', 'diamond', { 
        armor: [3, 7, 5, 3], toughness: 1, durability: 33 
    });
    modifyArmorSet('minecraft', 'netherite', { 
        armor: [3, 8, 6, 3], toughness: 3, knockback: 0.1, durability: 37 
    });
    modifyArmorSet('tfmg', 'steel', { 
        armor: [4, 9, 7, 4], toughness: 4, knockback: 0.2, durability: 50 
    });
    modifyArmorSet('create_sa', 'brass', { 
        armor: [2, 6, 5, 2], toughness: 1, knockback: 0.1, durability: 25 
    });
    modifyArmorSet('create_sa', 'zinc', { 
        armor: [2, 4, 3, 2], toughness: 2, knockback: 0.2, durability: 20 
    });
    modifyArmorSet('create_sa', 'copper', { 
        armor: [2, 6, 5, 2], toughness: 1, knockback: 0, durability: 15 
    });
    modifyArmorSet('northstar', 'iron_space_suit', { 
        armor: [3, 8, 6, 3], toughness: 2, durability: 40 
    });
    modifyArmorSet('northstar', 'martian_steel_space_suit', { 
        armor: [5, 10, 8, 5], toughness: 4, durability: 60 
    });

    const cosmeticHats = [
        'minecraft:turtle_helmet', 'quark:forgotten_hat', 'herbalbrews:witch_hat',
        'herbalbrews:top_hat'
    ];
    cosmeticHats.forEach(hat => modifyItem(hat, { armor: 2, toughness: 1 }));

    modifyItem('vinery:winemaker_boots',    { armor: 2, toughness: 0 });
    modifyItem('vinery:winemaker_leggings', { armor: 4, toughness: 0 });
    modifyItem('vinery:winemaker_apron',    { armor: 5, toughness: 0 });

    modifyItem('brewery:brewfest_hat',      { armor: 2, toughness: 1 });
    modifyItem('brewery:brewfest_blouse',   { armor: 5, toughness: 1 });
    modifyItem('brewery:brewfest_trousers', { armor: 4, toughness: 1 });
    modifyItem('brewery:brewfest_shoes',    { armor: 2, toughness: 1 });
    modifyItem('brewery:brewfest_dress',    { armor: 6, toughness: 1 });

    modifyItem('alexscaves:primordial_helmet', { armor: 7, toughness: 1 });
    modifyItem('alexscaves:primordial_tunic',  { armor: 12, toughness: 1 });
    modifyItem('alexscaves:primordial_pants',  { armor: 9, toughness: 1 });
    
    modifyItem('alexscaves:diving_helmet',     { armor: 5, toughness: 3 });
    modifyItem('alexscaves:diving_chestplate', { armor: 9, toughness: 3 });
    modifyItem('alexscaves:diving_leggings',   { armor: 7, toughness: 3 });
    modifyItem('alexscaves:diving_boots',      { armor: 5, toughness: 3 });

    // ==========================================
    //                TOOL BALANCING
    // ==========================================

    modifyToolSet('minecraft', 'iron', { 
        speed: 5.0, durability: 250, damage: 5, enchantability: 14 
    });
    modifyToolSet('minecraft', 'diamond', { 
        speed: 7.0, durability: 1000, damage: 6, enchantability: 10 
    });
    modifyToolSet('minecraft', 'netherite', { 
        speed: 8.0, durability: 1800, damage: 7, enchantability: 15 
    });

    modifyToolSet('tfmg', 'steel', { 
        speed: 8.5, durability: 2500, damage: 9, enchantability: 5 
    });
    modifyToolSet('tfmg', 'aluminum', { 
        speed: 10.0, durability: 400, damage: 4, enchantability: 12 
    });

    modifyToolSet('create_sa', 'brass', { 
        speed: 9.0, durability: 800, damage: 6, enchantability: 8 
    });
    modifyToolSet('create_sa', 'zinc', { 
        speed: 6.0, durability: 2000, damage: 6, enchantability: 6 
    });
    modifyToolSet('create_sa', 'rose_quartz', { 
        speed: 14.0, durability: 300, damage: 4, enchantability: 15 
    });
    modifyToolSet('create_sa', 'blazing', { 
        speed: 8.0, durability: 1200, damage: 8, enchantability: 10 
    });

    modifyToolSet('northstar', 'martian', {
        speed: 9.0, durability: 2200, damage: 7, enchantability: 10
    });

    modifyItem('quark:pickarang', { durability: 1000 });
    modifyItem('quark:flamerang', { durability: 1500 });

});