ServerEvents.recipes(e => {
    function r(craft) { e.remove({ id: craft }) }
    var removeId = [
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_omega_tier',
        'createcasing:sequenced_assembly/chorium_ingot',
        'createcasing:crafting/adjustable_chain_drive/creative',
        'createcasing:crafting/chain_drive/creative_zinc',
        'createcasing:crafting/chain_drive/creative',
        'createcasing:crafting/depot/creative',
        'createcasing:crafting/press/creative',
        'createcasing:crafting/mixer/creative',
        'createcasing:crafting/gearbox/creative_vertical_from_conversion',
        'createcasing:crafting/gearbox/creative',
        'createcasing:crafting/gearbox/creative_from_conversion',
        'createcasing:item_application/creative_casing',
        'minecraft:lodestone',
        'minecraft:cake',
        'sophisticatedbackpacks:inception_upgrade',
        'create_mechanical_extruder:extruding/scoria',
        'create_mechanical_extruder:extruding/andesite',
        'create_mechanical_extruder:extruding/netherack',
        'create_mechanical_extruder:extruding/ochrum',
        'create_mechanical_extruder:extruding/obsidian',
        'create_mechanical_extruder:extruding/snow_block',
        'create_mechanical_extruder:extruding/sandstone',
        'create_mechanical_extruder:extruding/diorite',
        'create_mechanical_extruder:extruding/advanced_obsidian',
        'create_mechanical_extruder:extruding/asurine',
        'create_mechanical_extruder:extruding/deepslate',
        'create_mechanical_extruder:extruding/granite',
        'create_mechanical_extruder:extruding/crimsite',
        'create_extra_casing:crafting/rgb_casing',
        'create_extra_casing:mixing/rgb_casing',
        'create_d2d:crafting/burner',
        'create_d2d:burner_blasting',
        'create_d2d:burner_smelting',
        'create_d2d:burner_smoking',
        'create_d2d:mechanical_crafting/gatling_breaker',
        'create_d2d:crafting/coal_piece_from_coal',
        'create_d2d:crafting/coal_from_coal_piece',
        'create_d2d:crafting/diamond_shard_from_diamond',
        'create_d2d:crafting/diamond_from_diamond_shard',
        'create_d2d:crafting/lapis_lazuli_shard_from_lapis_lazuli',
        'create_d2d:crafting/lapis_lazuli_from_lapis_lazuli_shard',
        'create_d2d:crafting/hydraulic_press',
        'create_d2d:crafting/stirling_engine',
        'create_d2d:crafting/fan_catalyst/splashing_sail',
        'create_d2d:crafting/fan_catalyst/haunting_sail',
        'create_d2d:crafting/fan_catalyst/smoking_sail',
        'create_d2d:crafting/fan_catalyst/blasting_sail',
        'createcasing:crafting/configurable_gearbox/creative',
        'framedblocks:phantom_paste_from_phantom_membrane',
        'framedblocks:phantom_paste_from_chorus_fruit'
    ]
    removeId.forEach(C => { r(C) })
})