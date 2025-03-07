# Create Mod Production Lines

## Compact Recipes

### Dirt
```mermaid
graph LR
    C[Compact]
    C --> out0["Dirt"]
```

### Unknown
```mermaid
graph LR
    C[Compact]
```

### Fortrens
```mermaid
graph LR
    C[Compact]
    C --> out0["Fortrens"]
```

### Ink Sac
```mermaid
graph LR
    C[Compact]
    C --> out0["Ink Sac"]
```

## Crush Recipes

### Sturdy Shards
```mermaid
graph LR
    in0["Sturdy Sheet"] --> C
    C[Crush]
    C --> out0["2x Sturdy Shards"]
    C -.-> out1["1x Sturdy Shards (50%)"]
```

### Crushed Deepslate
```mermaid
graph LR
    C[Crush]
    C --> out0["Crushed Deepslate"]
    C -.-> out1["1x Crushed Deepslate (50%)"]
```

### Limestone Shard
```mermaid
graph LR
    in0["Limestone"] --> C
    C[Crush]
    C --> out0["Limestone Shard"]
    C -.-> out1["1x Limestone Shard (50%)"]
```

### Limesand
```mermaid
graph LR
    in0["Limestone Shard"] --> C
    C[Crush]
    C --> out0["Limesand"]
    C -.-> out1["1x Limesand (50%)"]
```

## Distill Recipes

### Water
```mermaid
graph LR
    in0["1000mb Water"] --> D
    D[Distill]
    D --> out0["875mb Water"]
    D --> out1["125mb Purified Water"]
```

## Fill Recipes

### Brass Casing
```mermaid
graph LR
    in0["#forge:stripped_logs"] --> F
    f0["90mb Molten Brass"] --> F
    F[Fill]
    F --> out0["Brass Casing"]
```

### Glowstone Dust
```mermaid
graph LR
    in0["Redstone"] --> F
    f0["250mb Glow Solution"] --> F
    F[Fill]
    F --> out0["Glowstone Dust"]
```

### Rose Quartz
```mermaid
graph LR
    in0["Quartz"] --> F
    f0["630mb Molten Redstone"] --> F
    F[Fill]
    F --> out0["Rose Quartz"]
```

### Cum Bottle
```mermaid
graph LR
    f0["250mb Cum"] --> F
    F[Fill]
    F --> out0["Cum Bottle"]
```

### Unknown
```mermaid
graph LR
    in0["Thermite Grenade"] --> F
    f0["750mb Liquid Plastic"] --> F
    F[Fill]
```

### Diamond Grit Sandpaper
```mermaid
graph LR
    f0["750mb Molten Diamond"] --> F
    F[Fill]
    F --> out0["Diamond Grit Sandpaper"]
```

## Mix Recipes

### Bauxite Slurry
```mermaid
graph LR
    in0["2x Bauxite Shard"] --> M
    f0["175mb Caustic Solution"] --> M
    f1["200mb Water"] --> M
    M[Mix]
    M --> out0["850mb Bauxite Slurry"]
```

### Caustic Solution
```mermaid
graph LR
    f0["250mb Water"] --> M
    f1["125mb Molten Redstone"] --> M
    M[Mix]
    M --> out0["375mb Caustic Solution"]
```

### Crystalline Acid
```mermaid
graph LR
    in0["2x Glowstone Dust"] --> M
    in1["Redstone"] --> M
    f0["200mb Sulfuric Acid"] --> M
    M[Mix]
    M --> out0["450mb Crystalline Acid"]
```

### Enriched Water
```mermaid
graph LR
    in0["3x Redstone"] --> M
    f0["300mb Purified Water"] --> M
    f1["125mb Honey"] --> M
    M[Mix]
    M --> out0["200mb Enriched Water"]
```

### Glow Solution
```mermaid
graph LR
    in0["3x Glow Berries"] --> M
    f0["150mb Honey"] --> M
    M[Mix]
    M --> out0["350mb Glow Solution"]
```

### Gold Solution
```mermaid
graph LR
    in0["6x Gold Nugget"] --> M
    f0["120mb Honey"] --> M
    f1["200mb Crystalline Acid"] --> M
    M[Mix]
    M --> out0["240mb Gold Solution"]
```

### Liquid Garnish
```mermaid
graph LR
    in0["#forge:seeds"] --> M
    f0["250mb Water"] --> M
    M[Mix]
    M --> out0["400mb Liquid Garnish"]
```

### Nitrogen
```mermaid
graph LR
    f0["1000mb Water"] --> M
    f1["250mb Cooling Fluid"] --> M
    M[Mix]
    M --> out0["200mb Nitrogen"]
```

### Ochrum
```mermaid
graph LR
    in0["4x Stone"] --> M
    in1["Ochrum Shard"] --> M
    f0["450mb Enriched Water"] --> M
    M[Mix]
    M --> out0["4x Ochrum"]
```

### Unknown
```mermaid
graph LR
    in0["#minecraft:saplings"] --> M
    f0["250mb Earth Slime"] --> M
    M[Mix]
```

### Volcanic Acid
```mermaid
graph LR
    in0["2x Blaze Powder"] --> M
    f0["350mb Lava"] --> M
    M[Mix]
    M --> out0["750mb Volcanic Acid"]
```

### Zinc Solution
```mermaid
graph LR
    in0["6x Zinc Nugget"] --> M
    f0["100mb Crystalline Acid"] --> M
    M[Mix]
    M --> out0["200mb Zinc Solution"]
```

### Propane
```mermaid
graph LR
    f0["500mb Kerosene"] --> M
    f1["350mb Gasoline"] --> M
    f2["150mb Naphtha"] --> M
    M[Mix]
    M --> out0["1000mb Propane"]
```

## Pressurize Recipes

### Asurine
```mermaid
graph LR
    in0["Stone"] --> P
    f0["300mb Nitrogen"] --> P
    f1["40mb Molten Zinc"] --> P
    P[Pressurize]
    P --> out0["Asurine"]
```

### Calcite
```mermaid
graph LR
    P[Pressurize]
    P --> out0["Calcite"]
```

### Copper Sulfate
```mermaid
graph LR
    in0["Copper Ingot"] --> P
    f0["200mb Sulfuric Acid"] --> P
    f1["200mb Water"] --> P
    P[Pressurize]
    P --> out0["Copper Sulfate"]
```

### Molten Zinc
```mermaid
graph LR
    in0["Asurine Shard"] --> P
    f0["850mb Purified Water"] --> P
    f1["200mb Lava"] --> P
    P[Pressurize]
    P --> out0["350mb Molten Zinc"]
```

### Molten Refined Obsidian
```mermaid
graph LR
    in0["Powdered Obsidian"] --> P
    in1["Sturdy Shards"] --> P
    f0["600mb Molten Obsidian"] --> P
    f1["600mb Molten Obsidian"] --> P
    P[Pressurize]
    P --> out0["100mb Molten Refined Obsidian"]
    P --> out1["Obsidian Alloy"]
```

### Sulfur
```mermaid
graph LR
    in0["Sulfuric Crystal"] --> P
    f0["80mb Purified Water"] --> P
    f1["200mb Lava"] --> P
    P[Pressurize]
    P --> out0["Sulfur"]
```

### Sulfuric Acid
```mermaid
graph LR
    in0["Nitrate Dust"] --> P
    f0["1000mb Water"] --> P
    f1["1000mb Sulfur Trioxide"] --> P
    P[Pressurize]
    P --> out0["1000mb Sulfuric Acid"]
```

### Zinc Sulfate
```mermaid
graph LR
    in0["Zinc Ingot"] --> P
    f0["200mb Sulfuric Acid"] --> P
    f1["200mb Water"] --> P
    P[Pressurize]
    P --> out0["Zinc Sulfate"]
```

## Sequence Recipes

### Alumina Crystal
```mermaid
graph LR
    subgraph Metadata
        loops["2 Loops"]
    end
    start["Quartz"]
    F0["Filling"]
    start --> F0
    in0["125mb Crystalline Acid"] --> F0
    F1["Filling"]
    F0 --> F1
    in1["75mb Glow Solution"] --> F1
    F2["Filling"]
    F1 --> F2
    in2["100mb Fertilizer"] --> F2
    F2 --> out0["Alumina Crystal"]
```

### Asurine Shard
```mermaid
graph LR
    start["Obsidian Alloy"]
    F0["Filling"]
    start --> F0
    in0["150mb Crystalline Acid"] --> F0
    C1["Cutting"]
    F0 --> C1
    D2["Deploying"]
    C1 --> D2
    in2["Quartz"] --> D2
    F3["Filling"]
    D2 --> F3
    in3["250mb Zinc Solution"] --> F3
    P4["Pressing"]
    F3 --> P4
    P4 -.-> out0["3x Asurine Shard (75%)"]
    P4 -.-> out1["2x Asurine Shard (20%)"]
    P4 -.-> out2["Light Blue Dye (5%)"]
```

### Bauxite
```mermaid
graph LR
    subgraph Metadata
        loops["3 Loops"]
    end
    start["Alumina Crystal"]
    F0["Filling"]
    start --> F0
    in0["90mb Bauxite Slurry"] --> F0
    D1["Deploying"]
    F0 --> D1
    in1["Redstone"] --> D1
    D1 --> out0["Bauxite"]
```

### Bauxite Shard
```mermaid
graph LR
    subgraph Metadata
        loops["2 Loops"]
    end
    start["Obsidian Alloy"]
    F0["Filling"]
    start --> F0
    in0["125mb Caustic Solution"] --> F0
    C1["Cutting"]
    F0 --> C1
    F2["Filling"]
    C1 --> F2
    in2["100mb Fertilizer"] --> F2
    F2 -.-> out0["2x Bauxite Shard (80%)"]
    F2 -.-> out1["3x Bauxite Shard (20%)"]
```

### Calcite Catalyst
```mermaid
graph LR
    subgraph Metadata
        loops["2 Loops"]
    end
    start["Limestone Shard"]
    P0["Pressing"]
    start --> P0
    F1["Filling"]
    P0 --> F1
    in1["200mb Liquid Garnish"] --> F1
    F2["Filling"]
    F1 --> F2
    in2["180mb Water"] --> F2
    F2 --> out0["Calcite Catalyst"]
```

### Deepslate Alloy
```mermaid
graph LR
    start["Andesite Alloy"]
    P0["Pressing"]
    start --> P0
    D1["Deploying"]
    P0 --> D1
    in1["Crushed Deepslate"] --> D1
    D2["Deploying"]
    D1 --> D2
    in2["Crushed Deepslate"] --> D2
    D2 --> out0["Deepslate Alloy"]
```

### Electron Tube
```mermaid
graph LR
    start["Empty Tube"]
    D0["Deploying"]
    start --> D0
    in0["Polished Rose Quartz"] --> D0
    P1["Pressing"]
    D0 --> P1
    P1 --> out0["Electron Tube"]
```

### Empty Tube
```mermaid
graph LR
    start["Glass Bottle"]
    F0["Filling"]
    start --> F0
    in0["180mb Molten Iron"] --> F0
    C1["Cutting"]
    F0 --> C1
    P2["Pressing"]
    C1 --> P2
    P2 --> out0["Empty Tube"]
```

### Lapis Lazuli
```mermaid
graph LR
    start["Lapis Lazuli Catalyst"]
    C0["Cutting"]
    start --> C0
    D1["Deploying"]
    C0 --> D1
    in1["Quartz"] --> D1
    F2["Filling"]
    D1 --> F2
    in2["350mb Water"] --> F2
    P3["Pressing"]
    F2 --> P3
    P3 -.-> out0["2x Lapis Lazuli (95%)"]
    P3 -.-> out1["2x Blue Dye (5%)"]
```

### Lapis Lazuli Catalyst
```mermaid
graph LR
    subgraph Metadata
        loops["2 Loops"]
    end
    start["Stone"]
    D0["Deploying"]
    start --> D0
    F1["Filling"]
    D0 --> F1
    C2["Cutting"]
    F1 --> C2
    P3["Pressing"]
    C2 --> P3
    P3 -.-> out0["4x Lapis Lazuli Catalyst (75%)"]
    P3 -.-> out1["3x Lapis Lazuli Catalyst (25%)"]
```

### Netherrack
```mermaid
graph LR
    start["Cobblestone"]
    D0["Deploying"]
    start --> D0
    in0["Nether Wart"] --> D0
    F1["Filling"]
    D0 --> F1
    in1["60mb Fertilizer"] --> F1
    F2["Filling"]
    F1 --> F2
    in2["125mb Lava"] --> F2
    F2 --> out0["Netherrack"]
```

### Ochrum Shard
```mermaid
graph LR
    start["Obsidian Alloy"]
    D0["Deploying"]
    start --> D0
    in0["Gold Nugget"] --> D0
    F1["Filling"]
    D0 --> F1
    in1["50mb Molten Slag"] --> F1
    C2["Cutting"]
    F1 --> C2
    F3["Filling"]
    C2 --> F3
    in3["150mb Gold Solution"] --> F3
    F4["Filling"]
    F3 --> F4
    in4["250mb Lava"] --> F4
    F4 -.-> out0["3x Ochrum Shard (75%)"]
    F4 -.-> out1["2x Ochrum Shard (20%)"]
    F4 -.-> out2["Yellow Dye (5%)"]
```

### Sulfuric Crystal
```mermaid
graph LR
    start["Obsidian Alloy"]
    F0["Filling"]
    start --> F0
    in0["175mb Volcanic Acid"] --> F0
    F1["Filling"]
    F0 --> F1
    in1["250mb Sulfuric Solution"] --> F1
    C2["Cutting"]
    F1 --> C2
    D3["Deploying"]
    C2 --> D3
    in3["Quartz"] --> D3
    P4["Pressing"]
    D3 --> P4
    P4 -.-> out0["2x Sulfuric Crystal (90%)"]
    P4 -.-> out1["Sulfuric Crystal (10%)"]
```

### Andesite Machine
```mermaid
graph LR
    start["Andesite Casing"]
    D0["Deploying"]
    start --> D0
    in0["Anuggets"] --> D0
    D1["Deploying"]
    D0 --> D1
    in1["Anuggets"] --> D1
    D2["Deploying"]
    D1 --> D2
    in2["Cogwheel"] --> D2
    D3["Deploying"]
    D2 --> D3
    in3["Saws"] --> D3
    P4["Pressing"]
    D3 --> P4
    P4 --> out0["Andesite Machine"]
```

### Unknown
```mermaid
graph LR
    start["Unknown Input"]
    C0["Cutting"]
    start --> C0
    P1["Pressing"]
    C0 --> P1
    F2["Filling"]
    P1 --> F2
    D3["Deploying"]
    F2 --> D3
```

```mermaid
graph LR
    No sequence found
```
```mermaid
graph LR
    No sequence found
```
```mermaid
graph LR
    No sequence found
```
```mermaid
graph LR
    No sequence found
```
```mermaid
graph LR
    No sequence found
```
### Steel Mechanism
```mermaid
graph LR
    start["Heavy Plate"]
    start --> out0["Steel Mechanism"]
    start -.-> out1["Heavy Plate (8%)"]
    start -.-> out2["Steel Ingot (8%)"]
    start -.-> out3["Aluminum Ingot (5%)"]
    start -.-> out4["Industrial Pipe (3%)"]
```

### Steel Machine
```mermaid
graph LR
    start["Heavy Machinery Casing"]
    D0["Deploying"]
    start --> D0
    in0["Steel Mechanism"] --> D0
    D1["Deploying"]
    D0 --> D1
    in1["Electron Tube"] --> D1
    F2["Filling"]
    D1 --> F2
    in2["40mb Molten Slag"] --> F2
    D3["Deploying"]
    F2 --> D3
    in3["Turbine Blade"] --> D3
    D4["Deploying"]
    D3 --> D4
    in4["Screwdrivers"] --> D4
    D4 --> out0["Steel Machine"]
```

## Vacuum Recipes

### Sulfuric Solution
```mermaid
graph LR
    in0["Sulfur Dust"] --> V
    f0["200mb Lava"] --> V
    f1["75mb Glow Solution"] --> V
    V[Vacuum]
    V --> out0["300mb Sulfuric Solution"]
```

