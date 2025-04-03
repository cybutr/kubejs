ServerEvents.recipes((event) => {
    event.forEachRecipe({ input: 'minecraft:water_bucket', type: 'minecraft:crafting_shapeless' }, (recipe) => {
        if (recipe.getOriginalRecipeResult() === 'create:dough' || recipe.getOriginalRecipeResult() === 'create:wheat_dough') return

        const new_ingredients = [];
        recipe.getOriginalRecipeIngredients().forEach((ingredient) => {
            ingredient.stacks.forEach((recipe_item) => {
                if (recipe_item === '1 water_bucket') return;
                new_ingredients.push(recipe_item)
            })
        })

        new_ingredients.push(Fluid.of('minecraft:water', 1000));

        recipe.id(`${recipe.getId()}_manual_only`);
        event.recipes.createMixing(
            recipe.getOriginalRecipeResult(),
            new_ingredients,
        )
    })
})
// priority: 1

const $TagValue = Java.loadClass('net.minecraft.world.item.crafting.Ingredient$TagValue');

/// From the Latvian dev Discord: https://discord.com/channels/303440391124942858/1112036782607978690/1112036782607978690
/// Returns a private field from a Java class.
/// param cls: The class to fetch from.
/// param field: The class.field to get.
function get_private_field(cls, field) {
    const cls_field = cls.class.getDeclaredField(field);
    cls_field.setAccessible(true);
    return cls_field.get(cls);
}

/// Checks an Ingredient object for a tag.
/// param ingredient: net.minecraft.world.item.crafting.Ingredient
/// FORGE ONLY! Fabric support method below.
function getIngredientTag(ingredient) {
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let value of get_private_field(ingredient, 'f_43902_')) {
        if (value instanceof $TagValue) {
            return get_private_field(value, 'f_43959_').location();
        }
    }
    return null;
    /// IF USING FABRIC, uncomment the following and comment the function body above:
    // for (let value of get_private_field(ingredient, 'field_9019')) {
    //     if (value instanceof $TagValue) {
    //         return get_private_field(value, 'field_9022').location();
    //     }
    // }
    // return null;
}

/// Converts any automated mixing recipe with a provided container into a fluid mixing recipe.
/// param event: ServerEvents.recipes((event) => event)
/// param container: Container to remove from automated mixing recipes, ie. 'minecraft:milk_bucket'
/// param fluid: Fluid to add to the new recipe, ie. Fluid.of('minecraft:milk', 1000)
/// param blacklist: any recipe output that should not get a new recipe
/// param tag_filter: needed for removing any recipe that is part of an item tag.
/// ie. pass 'forge:milk' for something like 'minecraft:milk_bucket' to remove it in the recipe.
/// Note: This function will skip over any previously set manual recipe.
function convertMixingContainerRecipeToFluid(event, container, fluid, blacklist, tag_filter) {
    // eslint-disable-next-line no-param-reassign
    if (!blacklist) blacklist = [];
    // eslint-disable-next-line no-param-reassign
    if (!tag_filter) tag_filter = '';

    event.forEachRecipe({ input: container, type: 'minecraft:crafting_shapeless' }, (recipe) => {
        // Don't convert anything that's already manual
        if (recipe.getId().endsWith('_manual_only')) return;

        // Blacklist any recipe ID that was passed
        let return_flag = false;
        blacklist.forEach((item) => {
            if (recipe.result === item) return_flag = true;
        });
        if (return_flag) return;

        const new_ingredients = [];
        let fluid_multiplier = 0;
        recipe.getOriginalRecipeIngredients().forEach((ingredient) => {
            // Step 1: Filter plain container item
            // Straight away, scan to filter the item to filter as a plain item only.
            // This is so if the filter item has a tag, it isn't added by mistake
            let return_flag_filter_item = false;
            ingredient.stacks.forEach((recipe_item) => {
                // If multiple items were passed, check for all of them
                if (container.constructor === Array) {
                    container.forEach((container_i) => {
                        if (recipe_item === `${container_i}`) return_flag_filter_item = true;
                        fluid_multiplier += 1;
                    });
                // Otherwise just check for the one item
                } else if (typeof container === 'string' && recipe_item === `${container}`) {
                    return_flag_filter_item = true;
                    fluid_multiplier += 1;
                }
            });
            if (return_flag_filter_item) return;

            // Step 2: Add tag items, and filter out tag filter
            // Check if the current ingredient is a tag
            let ingredient_tag = getIngredientTag(ingredient);
            if (ingredient_tag !== null) ingredient_tag = `#${ingredient_tag}`;
            let return_flag_tag = false;
            // If multiple tags were passed, filter them ALL out of the recipe
            if (tag_filter.constructor === Array) {
                tag_filter.forEach((tag_to_filter) => {
                    if (ingredient_tag !== null && ingredient_tag !== tag_to_filter && typeof tag_to_filter === 'string') {
                        new_ingredients.push(ingredient_tag);
                        return_flag_tag = true;
                    } else if (ingredient_tag === tag_to_filter && typeof tag_to_filter === 'string') {
                        return_flag_tag = true;
                        fluid_multiplier += 1;
                    }
                });
            // Otherwise just filter the one tag out
            } else if (ingredient_tag !== null && typeof ingredient_tag === 'string' && ingredient_tag !== tag_filter) {
                new_ingredients.push(ingredient_tag);
                return_flag_tag = true;
            } else if (ingredient_tag === tag_filter && typeof ingredient_tag === 'string') {
                return_flag_tag = true;
                fluid_multiplier += 1;
            }
            if (return_flag_tag) return;

            // Step 3: Plain items
            // Now we check each plain ingredient if it wasn't passed as a tag.
            // Kinda like step 1, but we now know the item is ok to add.
            ingredient.stacks.forEach((recipe_item) => {
                // If multiple items were passed, check for all of them
                let return_flag_item = false;
                if (container.constructor === Array) {
                    container.forEach((container_i) => {
                        if (recipe_item === `${container_i}`) return_flag_item = true;
                        fluid_multiplier += 1;
                    });
                // Otherwise just check for the one item
                } else if (typeof container === 'string' && recipe_item === `${container}`) {
                    return_flag_item = true;
                    fluid_multiplier += 1;
                }
                if (return_flag_item) return;
                new_ingredients.push(recipe_item);
            });
        });

        // Set the fluid multiplier to 1 just in case
        if (fluid_multiplier === 0) fluid_multiplier = 1;
        // Make a new fluid based on the passed fluid's properties, with the proper amount of liquid
        // However, fluids can't hold more than 1000mb in basins
        let new_fluid = null;
        if (fluid.getAmount() * fluid_multiplier <= 1000) {
            new_fluid = Fluid.of(fluid.getFluid(), fluid.getAmount() * fluid_multiplier);
        } else {
            new_fluid = Fluid.of(fluid.getFluid(), 1000);
        }
        new_ingredients.push(new_fluid);

        // Add the old recipe's ingredients to a new mixing recipe
        recipe.id(`${recipe.getId()}_manual_only`);
        event.recipes.createMixing(
            recipe.result,
            new_ingredients,
        );
    });
}

/* ServerEvents.recipes((event) => {
    convertMixingContainerRecipeToFluid(event, 'minecraft:water_bucket', Fluid.of('minecraft:water', 1000), ['create:dough', 'create:wheat_dough']);
    convertMixingContainerRecipeToFluid(event, 'minecraft:honey_bottle', Fluid.of('create:honey', 250));
    convertMixingContainerRecipeToFluid(event, 'neapolitan:milk_bottle', Fluid.of('minecraft:milk', 250), [], '#forge:milk');
    convertMixingContainerRecipeToFluid(event, 'farmersdelight:milk_bottle', Fluid.of('minecraft:milk', 250), [], '#forge:milk');
    convertMixingContainerRecipeToFluid(event, 'minecraft:milk_bucket', Fluid.of('minecraft:milk', 1000), [], '#forge:milk');
}); */
