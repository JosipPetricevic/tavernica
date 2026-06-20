// ============================================================
// CLASS DEFINITIONS — Sorcerer, Warlock, Druid, Rogue, Paladin
// ============================================================

const CLASS_DATA = {

  // ─────────────────────────────────────────────
  // SORCERER (Lunar Magic)
  // ─────────────────────────────────────────────
  Sorcerer: {
    hitDie: "d6",
    spellcastingAbility: "CHA",
    spellcastingType: "known",
    hasSorceryPoints: true,
    spellSlots: {
      1:  [2,0,0,0,0,0,0,0,0],
      2:  [3,0,0,0,0,0,0,0,0],
      3:  [4,2,0,0,0,0,0,0,0],
      4:  [4,3,0,0,0,0,0,0,0],
      5:  [4,3,2,0,0,0,0,0,0],
      6:  [4,3,3,0,0,0,0,0,0],
      7:  [4,3,3,1,0,0,0,0,0],
      8:  [4,3,3,2,0,0,0,0,0],
      9:  [4,3,3,3,1,0,0,0,0],
      10: [4,3,3,3,2,0,0,0,0],
      11: [4,3,3,3,2,1,0,0,0],
      12: [4,3,3,3,2,1,0,0,0],
      13: [4,3,3,3,2,1,1,0,0],
      14: [4,3,3,3,2,1,1,0,0],
      15: [4,3,3,3,2,1,1,1,0],
      16: [4,3,3,3,2,1,1,1,0],
      17: [4,3,3,3,2,1,1,1,1],
      18: [4,3,3,3,3,1,1,1,1],
      19: [4,3,3,3,3,2,1,1,1],
      20: [4,3,3,3,3,2,2,1,1],
    },
    sorceryPoints: {
      1:0, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10,
      11:11, 12:12, 13:13, 14:14, 15:15, 16:16, 17:17, 18:18, 19:19, 20:20
    },
    // spells known per level
    spellsKnown: {
      1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, 10:11,
      11:12, 12:12, 13:13, 14:13, 15:14, 16:14, 17:15, 18:15, 19:15, 20:15
    },
    cantripCount: {
      1:4, 2:4, 3:4, 4:5, 5:5, 6:5, 7:5, 8:5, 9:5, 10:6,
      11:6, 12:6, 13:6, 14:6, 15:6, 16:6, 17:6, 18:6, 19:6, 20:6
    },
    // Resources tracked
    resources: {
      sorceryPoints: { label: "Sorcery Points", recharge: "long", max: "level" }
    },
    // Features by level
    features: {
      1: [
        { name: "Spellcasting", desc: "Spellcasting koristi Charismu. Spell Save DC = 8 + PB + CHA mod. Spell Attack = PB + CHA mod." },
        { name: "Sorcerous Origin: Lunar Magic", desc: "Subklasa odabrana na 1. levelu." },
        { name: "Moon Fire (Lunar Magic)", desc: "Učiš Sacred Flame cantrip — ne računa se u broj poznatih cantripa. Sacred Flame može ciljati 1 metu normalno ILI 2 mete unutar 5 ft jedna od druge." },
        { name: "Lunar Embodiment (Lunar Magic)", desc: "Nakon svakog Long Resta biraš lunarnu fazu: Full Moon, New Moon ili Crescent Moon. Dobivas pristup odgovarajućim bonus spellovima (ne računaju se u poznate spellove). Svaki se može castati jednom bez spell slota (recharge: Long Rest)." },
      ],
      2: [
        { name: "Font of Magic", desc: "Dobivaš Sorcery Points (2 na ovom levelu). Flexible Casting: možeš pretvarati SP u spell slotove ili obrnuto.\n\nSP → Slot: 1st=2SP, 2nd=3SP, 3rd=5SP, 4th=6SP, 5th=7SP\nSlot → SP: pretvoriš slot u SP jednak levelu slota." },
      ],
      3: [
        { name: "Metamagic (odaberi 2)", desc: "Odaberi 2 Metamagic opcije: Careful Spell, Distant Spell, Empowered Spell, Extended Spell, Heightened Spell, Quickened Spell, Seeking Spell, Subtle Spell, Transmuted Spell, Twinned Spell." },
      ],
      4: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      5: [{ name: "Magical Guidance (Optional)", desc: "Nakon neuspjelog ability checka: potroši 1 SP za reroll." }],
      6: [
        { name: "Lunar Boons (Lunar Magic)", desc: "Full Moon → Abjuration + Conjuration. New Moon → Evocation + Necromancy. Crescent Moon → Divination + Transmutation.\n\nKada koristiš Metamagic na Lunar spell ili spell odgovarajuće škole: smanji trošak za 1 SP (min 0). Broj korištenja = PB. Recharge: Long Rest." },
        { name: "Waxing and Waning (Lunar Magic)", desc: "Bonus Action: potroši 1 SP da promijeniš aktivnu lunarnu fazu." },
      ],
      10: [{ name: "Metamagic +1", desc: "Dobivaš još jednu Metamagic opciju." }],
      14: [
        { name: "Lunar Empowerment (Lunar Magic)", desc: "Full Moon: Bright light 10ft / dim 10ft. Ti i saveznici u bright lightu imate advantage na saving throwove.\nNew Moon: Advantage na Stealth. U dim light/darkness: napadi protiv tebe imaju disadvantage.\nCrescent Moon: Resistance na Necrotic i Radiant damage." },
      ],
      17: [{ name: "Metamagic +1", desc: "Dobivaš još jednu Metamagic opciju (ukupno 4+)." }],
      18: [
        { name: "Lunar Phenomenon (Lunar Magic)", desc: "Bonus Action. Recharge: Long Rest (ili 5 SP za reuse).\nFull Moon: Biće unutar 30ft → CON save ili Blinded do kraja sljedećeg turna; 1 biće regains 3d8 HP.\nNew Moon: Biće unutar 30ft → DEX save ili 3d10 necrotic + speed=0 do kraja sljedećeg turna; ti postaješ Invisible.\nCrescent Moon: Teleport 60ft; resistance na sav damage do sljedećeg turna." },
      ],
      20: [{ name: "Sorcerous Restoration", desc: "Nakon Short Resta: vraća 4 Sorcery Pointa." }],
    },
    shortRestRestore: ["hitDice", "sorcerousRestoration"],
    longRestRestore: ["spellSlots", "sorceryPoints", "lunarEmbodimentUse", "lunarBoonUses", "lunarPhenomenonUse"],
    // Subclass specific resources
    subclassResources: {
      "Lunar Magic": [
        { id: "lunarPhase", label: "Lunar Phase", type: "select", options: ["Full Moon", "New Moon", "Crescent Moon"], default: "Full Moon" },
        { id: "lunarSpellUsed", label: "Lunar Spell Use", type: "checkbox", recharge: "long" },
        { id: "lunarBoonUses", label: "Lunar Boons Used", type: "counter", maxFormula: "profBonus", recharge: "long" },
        { id: "lunarPhenomenon", label: "Lunar Phenomenon", type: "checkbox", recharge: "long" },
      ]
    }
  },

  // ─────────────────────────────────────────────
  // WARLOCK (Hexblade)
  // ─────────────────────────────────────────────
  Warlock: {
    hitDie: "d8",
    spellcastingAbility: "CHA",
    spellcastingType: "known",
    isPactMagic: true,
    spellSlots: {
      1:  [1,0,0,0,0,0,0,0,0],
      2:  [2,0,0,0,0,0,0,0,0],
      3:  [2,2,0,0,0,0,0,0,0],
      4:  [2,2,0,0,0,0,0,0,0],
      5:  [2,0,2,0,0,0,0,0,0],
      6:  [2,0,2,0,0,0,0,0,0],
      7:  [2,0,0,2,0,0,0,0,0],
      8:  [2,0,0,2,0,0,0,0,0],
      9:  [2,0,0,0,2,0,0,0,0],
      10: [2,0,0,0,2,0,0,0,0],
      11: [3,0,0,0,3,0,0,0,0],
      12: [3,0,0,0,3,0,0,0,0],
      13: [3,0,0,0,3,0,0,0,0],
      14: [3,0,0,0,3,0,0,0,0],
      15: [3,0,0,0,3,0,0,0,0],
      16: [3,0,0,0,3,0,0,0,0],
      17: [4,0,0,0,4,0,0,0,0],
      18: [4,0,0,0,4,0,0,0,0],
      19: [4,0,0,0,4,0,0,0,0],
      20: [4,0,0,0,4,0,0,0,0],
    },
    // Warlock pact magic: all slots are same level
    pactSlotLevel: {
      1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4,
      9:5, 10:5, 11:5, 12:5, 13:5, 14:5, 15:5, 16:5,
      17:5, 18:5, 19:5, 20:5
    },
    spellsKnown: {
      1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, 10:10,
      11:11, 12:11, 13:12, 14:12, 15:13, 16:13, 17:14, 18:14, 19:15, 20:15
    },
    cantripCount: {
      1:2, 2:2, 3:2, 4:3, 5:3, 6:3, 7:3, 8:3, 9:3, 10:4,
      11:4, 12:4, 13:4, 14:4, 15:4, 16:4, 17:4, 18:4, 19:4, 20:4
    },
    invocationsKnown: {
      1:0, 2:2, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5,
      11:5, 12:6, 13:6, 14:6, 15:7, 16:7, 17:7, 18:8, 19:8, 20:8
    },
    mysticArcanum: {11:6, 13:7, 15:8, 17:9},
    features: {
      1: [
        { name: "Otherworldly Patron: The Hexblade", desc: "Subklasa odabrana." },
        { name: "Pact Magic", desc: "2 cantripa, 2 poznata spella. Koristi CHA. Pact Magic slotovi — svi istog levela. Recharge: Short ili Long Rest." },
        { name: "Hexblade's Curse", desc: "Bonus Action: Prokuni metu unutar 30ft na 1 minutu.\n• Bonus damage = PB\n• Crit na 19-20\n• Kad meta umre: vraćaš HP = Warlock level + CHA mod (min 1)\nRecharge: Short ili Long Rest." },
        { name: "Hex Warrior", desc: "Proficiency: Medium Armor, Shields, Martial Weapons.\nNakon Long Resta odaberi 1 oružje (ne Two-Handed) — koristi CHA za attack i damage.\nAko imaš Pact of the Blade: vrijedi za sva Pact oružja." },
      ],
      2: [
        { name: "Eldritch Invocations", desc: "Odaberi 2 Eldritch Invocationa. Možeš zamjenjivati jedan po level upu." },
      ],
      3: [
        { name: "Pact Boon", desc: "Odaberi: Pact of the Blade, Pact of the Chain, Pact of the Tome, Pact of the Talisman, ili Pact of the Star Chain." },
      ],
      4: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      6: [
        { name: "Accursed Specter (Hexblade)", desc: "Kad ubiješ Humanoida: duh postaje Specter s temp HP = pola Warlock levela. Bonus na atk = CHA mod. Sljedeći Long Rest.\nRecharge: Long Rest." },
      ],
      8: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      10: [
        { name: "Armor of Hexes (Hexblade)", desc: "Reakcija kad te pogodi meta pod Hexblade's Curse: baci d6. Na 4-6 napad automatski promašuje." },
      ],
      11: [{ name: "Mystic Arcanum (6th level)", desc: "Odaberi 1 Warlock spell 6. levela. Jednom bez spell slota. Recharge: Long Rest." }],
      13: [{ name: "Mystic Arcanum (7th level)", desc: "Odaberi 1 Warlock spell 7. levela. Jednom bez spell slota. Recharge: Long Rest." }],
      14: [
        { name: "Master of Hexes (Hexblade)", desc: "Kad meta pod Hexblade's Curse umre: odmah premjesti curse na novu metu unutar 30ft. Bez healinga od stare mete." },
      ],
      15: [{ name: "Mystic Arcanum (8th level)", desc: "Odaberi 1 Warlock spell 8. levela. Jednom bez spell slota. Recharge: Long Rest." }],
      17: [{ name: "Mystic Arcanum (9th level)", desc: "Odaberi 1 Warlock spell 9. levela. Jednom bez spell slota. Recharge: Long Rest." }],
      20: [
        { name: "Eldritch Master", desc: "1 minuta molitve patronu → vraća sve Pact Magic slotove. 1× po Long Restu." },
      ],
    },
    shortRestRestore: ["spellSlots", "hexbladeCurse", "hitDice"],
    longRestRestore: ["spellSlots", "hexbladeCurse", "accusedSpecter", "mysticArcanum", "pactTalisman"],
    subclassResources: {
      "The Hexblade": [
        { id: "hexbladeCurse", label: "Hexblade's Curse", type: "checkbox", recharge: "short" },
        { id: "accusedSpecter", label: "Accursed Specter", type: "checkbox", recharge: "long" },
        { id: "mysticArcanum6", label: "Mystic Arcanum (6th)", type: "checkbox", recharge: "long" },
        { id: "mysticArcanum7", label: "Mystic Arcanum (7th)", type: "checkbox", recharge: "long" },
        { id: "mysticArcanum8", label: "Mystic Arcanum (8th)", type: "checkbox", recharge: "long" },
        { id: "mysticArcanum9", label: "Mystic Arcanum (9th)", type: "checkbox", recharge: "long" },
        { id: "eldritchMaster", label: "Eldritch Master", type: "checkbox", recharge: "long" },
      ]
    }
  },

  // ─────────────────────────────────────────────
  // DRUID (Circle of the Moon)
  // ─────────────────────────────────────────────
  Druid: {
    hitDie: "d8",
    spellcastingAbility: "WIS",
    spellcastingType: "prepared",
    prepFormula: "wisModPlusLevel",
    spellSlots: {
      1:  [2,0,0,0,0,0,0,0,0],
      2:  [3,0,0,0,0,0,0,0,0],
      3:  [4,2,0,0,0,0,0,0,0],
      4:  [4,3,0,0,0,0,0,0,0],
      5:  [4,3,2,0,0,0,0,0,0],
      6:  [4,3,3,0,0,0,0,0,0],
      7:  [4,3,3,1,0,0,0,0,0],
      8:  [4,3,3,2,0,0,0,0,0],
      9:  [4,3,3,3,1,0,0,0,0],
      10: [4,3,3,3,2,0,0,0,0],
      11: [4,3,3,3,2,1,0,0,0],
      12: [4,3,3,3,2,1,0,0,0],
      13: [4,3,3,3,2,1,1,0,0],
      14: [4,3,3,3,2,1,1,0,0],
      15: [4,3,3,3,2,1,1,1,0],
      16: [4,3,3,3,2,1,1,1,0],
      17: [4,3,3,3,2,1,1,1,1],
      18: [4,3,3,3,3,1,1,1,1],
      19: [4,3,3,3,3,2,1,1,1],
      20: [4,3,3,3,3,2,2,1,1],
    },
    wildShapeCharges: 2,
    wildShapeMaxCR: {
      2:"1/4 (no fly, no swim)", 3:"1/4 (no fly, no swim)",
      4:"1/2 (no fly)", 5:"1/2 (no fly)", 6:"1/2 (no fly)", 7:"1/2 (no fly)",
      8:"1 (fly ok)", 9:"1 (fly ok)", 10:"1 (fly ok)", 11:"1 (fly ok)",
      12:"1 (fly ok)", 13:"1 (fly ok)", 14:"1 (fly ok)", 15:"1 (fly ok)",
      16:"1 (fly ok)", 17:"1 (fly ok)", 18:"1 (fly ok)", 19:"1 (fly ok)", 20:"Unlimited"
    },
    moonCircleCR: {
      2:1, 3:1, 6:2, 7:2, 8:2, 9:3, 10:3, 11:3, 12:4, 13:4, 14:4, 15:5, 16:5, 17:5, 18:6, 19:6, 20:6
    },
    cantripCount: {
      1:2, 2:2, 3:2, 4:3, 5:3, 6:3, 7:3, 8:3, 9:3, 10:4,
      11:4, 12:4, 13:4, 14:4, 15:4, 16:4, 17:4, 18:4, 19:4, 20:4
    },
    features: {
      1: [
        { name: "Druidic", desc: "Tajni jezik druida. Možeš ostavljati skrivene poruke." },
        { name: "Spellcasting", desc: "WIS za spellcasting. Prepared Spells = WIS mod + Druid level (min 1). Ritual Casting. Slotovi: Long Rest." },
      ],
      2: [
        { name: "Wild Shape", desc: "2 korištenja. Recharge: Short ili Long Rest.\nMax CR prema tablici:\nLvl 2-3: CR 1/4 (no fly/swim)\nLvl 4-7: CR 1/2 (no fly)\nLvl 8+: CR 1 (fly ok)" },
        { name: "Druid Circle: Circle of the Moon", desc: "Subklasa odabrana." },
        { name: "Combat Wild Shape (Moon)", desc: "Wild Shape kao Bonus Action (umjesto Action).\nU Wild Shape formi, Bonus Action + potroši spell slot → heal:\n1st=1d8, 2nd=2d8, 3rd=3d8, 4th=4d8, 5th=5d8..." },
        { name: "Circle Forms (Moon)", desc: "Na lvl 2: Wild Shape do CR 1.\nNa lvl 6: Max CR = Druid level ÷ 3 (round down).\nLvl 6→CR 2, Lvl 9→CR 3, Lvl 12→CR 4, Lvl 15→CR 5, Lvl 18→CR 6" },
      ],
      4: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      6: [
        { name: "Primal Strike (Moon)", desc: "U Beast formi: svi natural attacks računaju se kao Magical za zaobilaženje resistancea." },
      ],
      8: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      10: [
        { name: "Elemental Wild Shape (Moon)", desc: "Potroši 2 Wild Shape korištenja odjednom → pretvori se u Air/Earth/Fire/Water Elemental." },
      ],
      12: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      14: [
        { name: "Thousand Forms (Moon)", desc: "Alter Self at will — bez trošenja spell slota." },
      ],
      18: [
        { name: "Timeless Body", desc: "Svakih 10 godina prolaska: tijelo stari samo 1 godinu." },
        { name: "Beast Spells", desc: "U Wild Shape formi: možeš castati druid spellove (V i S komponente). Bez M komponenti." },
      ],
      20: [
        { name: "Archdruid", desc: "Neograničen Wild Shape. Ignoriraš sve komponente (bez gold costa i potrošnje) — u svim oblicima." },
      ],
    },
    shortRestRestore: ["wildShape", "hitDice"],
    longRestRestore: ["spellSlots", "wildShape", "hitPoints"],
    subclassResources: {
      "Circle of the Moon": [
        { id: "wildShapeCharges", label: "Wild Shape", type: "counter", max: 2, recharge: "short" },
        { id: "elementalWildShape", label: "Elemental Wild Shape Active", type: "checkbox" },
      ]
    }
  },

  // ─────────────────────────────────────────────
  // ROGUE (Soulknife Revisited)
  // ─────────────────────────────────────────────
  Rogue: {
    hitDie: "d8",
    spellcastingAbility: null,
    spellcastingType: "none",
    sneakAttack: {
      1:"1d6", 2:"1d6", 3:"2d6", 4:"2d6", 5:"3d6", 6:"3d6",
      7:"4d6", 8:"4d6", 9:"5d6", 10:"5d6", 11:"6d6", 12:"6d6",
      13:"7d6", 14:"7d6", 15:"8d6", 16:"8d6", 17:"9d6", 18:"9d6",
      19:"10d6", 20:"10d6"
    },
    psionicTalentDie: {
      3:"d6", 4:"d6",
      5:"d8", 6:"d8", 7:"d8", 8:"d8", 9:"d8", 10:"d8",
      11:"d10", 12:"d10", 13:"d10", 14:"d10", 15:"d10", 16:"d10",
      17:"d12", 18:"d12", 19:"d12", 20:"d12"
    },
    features: {
      1: [
        { name: "Expertise", desc: "Odaberi 2 skill proficiencyja (ili 1 skill + Thieves' Tools) → Proficiency Bonus se udvostručuje za njih." },
        { name: "Sneak Attack", desc: "Jednom po turnu: extra damage ako imaš advantage ILI saveznik stoji unutar 5ft od mete. Zahtijeva Finesse ili Ranged weapon. Damage po levelu:\nLvl 1-2: 1d6, Lvl 3-4: 2d6, Lvl 5-6: 3d6, Lvl 7-8: 4d6, Lvl 9-10: 5d6..." },
        { name: "Thieves' Cant", desc: "Tajni jezik lopova." },
      ],
      2: [
        { name: "Cunning Action", desc: "Bonus Action: Dash, Disengage, ili Hide." },
      ],
      3: [
        { name: "Roguish Archetype: Soulknife Revisited", desc: "Subklasa odabrana." },
        { name: "Psionic Talent Die", desc: "Psionic Talent Die počinje kao d6 (lvl 3-4), d8 (5-10), d10 (11-16), d12 (17-20).\nAko baciš MAX → die smanjuje jedan korak. Ako baciš 1 → die raste jedan korak (do max).\nAko d4 baci 4 → unusable do Long Resta." },
        { name: "Psi-Bolstered Knack", desc: "Nakon neuspjelog ability checka (skill/tool prof): baci Psionic Talent Die i dodaj na check." },
        { name: "Psychic Whispers", desc: "Action: Baci PTD, odaberi broj stvorenja = rezultat. Telepatija 1 sat, domet 1 milja." },
        { name: "Psi Replenishment", desc: "Bonus Action: PTD se vraća na početnu veličinu. Recharge: Long Rest." },
        { name: "Psychic Blades", desc: "Prije melee ili ranged atk: manifestiraj Psychic Blade.\n• Simple, Finesse, Thrown (60ft)\n• 1d6 + mod psychic\nBonus Blade (ako je 2. ruka slobodna): Bonus Action, 1d4 + mod psychic." },
      ],
      4: [{ name: "Ability Score Improvement", desc: "+2 jednom scoreu ili +1/+1 dvama." }],
      5: [{ name: "Uncanny Dodge", desc: "Reakcija kad te pogodi napad koji vidiš: damage se prepolovi." }],
      6: [{ name: "Expertise (2. odabir)", desc: "Još 2 skill proficiencyja dobivaju doubled PB." }],
      7: [{ name: "Evasion", desc: "DEX save za pola damagea → uspjeh = 0 damage, neuspjeh = pola." }],
      9: [
        { name: "Soul Blades — Homing Strikes", desc: "Ako Psychic Blade promaši: baci PTD i dodaj na attack roll. Ako pogodi: PTD se smanjuje." },
        { name: "Soul Blades — Psychic Teleportation", desc: "Bonus Action: Manifestiraj Psychic Blade, baci je na lokaciju — teleportiraj se onamo.\nMax udaljenost = 5 × max na trenutnoj PTD:\nd4=20ft, d6=30ft, d8=40ft, d10=50ft, d12=60ft\nNakon: PTD se smanjuje." },
      ],
      11: [{ name: "Reliable Talent", desc: "Proficient ability check: svaki roll 1-9 se tretira kao 10." }],
      13: [
        { name: "Psionic Veil", desc: "Action: Postaneš Invisible (+ sva oprema) na 10 minuta.\nZavršava: naneseš damage ili natjeraš na saving throw.\nRecharge: Long Rest (ili smanji PTD za jedan korak)." },
      ],
      14: [{ name: "Blindsense", desc: "Ako možeš čuti: znaš lokaciju hidden/invisible bića unutar 10ft." }],
      15: [{ name: "Slippery Mind", desc: "Dobiva Wisdom Saving Throw proficiency." }],
      17: [
        { name: "Rend Mind", desc: "Kad naneseš Sneak Attack s Psychic Blades: meta radi WIS save (DC = 8 + PB + DEX mod).\nNeuspjeh: Stunned do kraja tvog sljedećeg turna.\nRecharge: Long Rest (ili smanji PTD za jedan korak)." },
      ],
      18: [{ name: "Elusive", desc: "Dok nisi incapacitated: nitko nema Advantage na attack rollove protiv tebe." }],
      20: [
        { name: "Stroke of Luck", desc: "Promašeni attack → hit, ILI neuspjeli ability check → natural 20. Recharge: Short ili Long Rest." },
      ],
    },
    shortRestRestore: ["strokeOfLuck", "hitDice"],
    longRestRestore: ["psionicTalentDie", "psiReplenishment", "psionicVeil", "rendMind", "strokeOfLuck"],
    subclassResources: {
      "Soulknife Revisited": [
        { id: "ptdSize", label: "Psionic Talent Die", type: "dieSelect", options: ["d12","d10","d8","d6","d4","unusable"], recharge: "long" },
        { id: "psiReplenishment", label: "Psi Replenishment", type: "checkbox", recharge: "long" },
        { id: "psionicVeil", label: "Psionic Veil", type: "checkbox", recharge: "long" },
        { id: "rendMind", label: "Rend Mind", type: "checkbox", recharge: "long" },
        { id: "strokeOfLuck", label: "Stroke of Luck", type: "checkbox", recharge: "short" },
      ]
    }
  },

  // ─────────────────────────────────────────────
  // PALADIN (Oath of Vengeance)
  // ─────────────────────────────────────────────
  Paladin: {
    hitDie: "d10",
    spellcastingAbility: "CHA",
    spellcastingType: "prepared",
    prepFormula: "chaModPlusHalfLevel",
    spellSlots: {
      1:  [0,0,0,0,0],
      2:  [2,0,0,0,0],
      3:  [3,0,0,0,0],
      4:  [3,0,0,0,0],
      5:  [4,2,0,0,0],
      6:  [4,2,0,0,0],
      7:  [4,3,0,0,0],
      8:  [4,3,0,0,0],
      9:  [4,3,2,0,0],
      10: [4,3,2,0,0],
      11: [4,3,3,0,0],
      12: [4,3,3,0,0],
      13: [4,3,3,1,0],
      14: [4,3,3,1,0],
      15: [4,3,3,2,0],
      16: [4,3,3,2,0],
      17: [4,3,3,3,1],
      18: [4,3,3,3,1],
      19: [4,3,3,3,2],
      20: [4,3,3,3,2],
    },
    cantripCount: {},  // Paladin has no cantrips
    layOnHandsPool: (lvl) => lvl * 5,
    divineSenseUses: "1 + CHA modifier",
    divineSmite: {
      1: "2d8", 2: "3d8", 3: "4d8", 4: "5d8"
    },
    oathSpells: {
      3: ["Bane", "Hunter's Mark"],
      5: ["Hold Person", "Misty Step"],
      9: ["Haste", "Protection from Energy"],
      13: ["Banishment", "Dimension Door"],
      17: ["Hold Monster", "Scrying"],
    },
    features: {
      1: [
        { name: "Divine Sense", desc: "Action: Do kraja sljedećeg turna otkrivaš Celestials, Fiends, Undead i posvećena/oskrnavljena mjesta unutar 60ft.\nKoristi: 1 + CHA mod. Recharge: Long Rest." },
        { name: "Lay on Hands", desc: "Healing pool = Paladin level × 5 HP. Action: liječi dodirom. Ili potroši 5 HP za uklanjanje 1 disease ili 1 poison.\nNe djeluje na Undead/Constructs. Recharge: Long Rest." },
      ],
      2: [
        { name: "Fighting Style", desc: "Odaberi Fighting Style." },
        { name: "Spellcasting", desc: "CHA za spellcasting. Prepared Spells = CHA mod + ½ Paladin level.\nSpell slotovi vraćaju se Long Restom." },
        { name: "Divine Smite", desc: "Kad pogodiš melee weapon attackom: potroši spell slot.\n1st=2d8, 2nd=3d8, 3rd=4d8, 4th+=5d8 radiant.\nProtiv Undead/Fiend: +1d8. Max 6d8." },
      ],
      3: [
        { name: "Divine Health", desc: "Imunitet na Disease." },
        { name: "Sacred Oath: Oath of Vengeance", desc: "Subklasa odabrana." },
        { name: "Channel Divinity", desc: "Recharge: Short ili Long Rest.\n• Abjure Enemy (Action): Meta unutar 60ft → WIS save (Fiends/Undead s disadvantageom). Neuspjeh: Frightened 1 min, speed=0. Uspjeh: speed prepolovljen.\n• Vow of Enmity (Bonus Action): Meta unutar 10ft → Advantage na sve atk vs tu metu 1 minutu." },
        { name: "Harness Divine Power (Optional)", desc: "Bonus Action: Potroši Channel Divinity → vrati spell slot max levela ½ PB (round up).\nKoristi: Lvl 3+=1, Lvl 7+=2, Lvl 15+=3. Recharge: Long Rest." },
        { name: "Oath Spells (Vengeance)", desc: "Uvijek pripremljeni, ne računaju se:\nLvl 3: Bane, Hunter's Mark\nLvl 5: Hold Person, Misty Step\nLvl 9: Haste, Protection from Energy\nLvl 13: Banishment, Dimension Door\nLvl 17: Hold Monster, Scrying" },
      ],
      5: [{ name: "Extra Attack", desc: "Napada dva puta Attack akcijom." }],
      6: [
        { name: "Aura of Protection", desc: "Ti i saveznici unutar 10ft (18+: 30ft): +CHA mod na sve Saving Throwove (min +1). Moraš biti conscious." },
      ],
      7: [
        { name: "Relentless Avenger (Vengeance)", desc: "Kad pogodiš Opportunity Attackom: možeš se pomaknuti do ½ speeda bez triggering OA." },
      ],
      10: [
        { name: "Aura of Courage", desc: "Ti i saveznici unutar 10ft (18+: 30ft): imuni na Frightened. Moraš biti conscious." },
      ],
      11: [
        { name: "Improved Divine Smite", desc: "Svaki melee weapon hit: +1d8 radiant bez trošenja spell slota." },
      ],
      14: [
        { name: "Cleansing Touch", desc: "Action: Završi 1 spell na sebi ili willing creature dodirom.\nKoristi: CHA mod (min 1). Recharge: Long Rest." },
      ],
      15: [
        { name: "Soul of Vengeance (Vengeance)", desc: "Dok je meta pod Vow of Enmity: kad napravi attack, možeš Reakcijom izvesti 1 melee weapon attack na nju (ako je u dosegu)." },
      ],
      18: [
        { name: "Aura Improvements", desc: "Aura of Protection i Aura of Courage: 30ft radius (s 10ft na 30ft)." },
      ],
      20: [
        { name: "Avenging Angel (Vengeance)", desc: "Action: Transformacija 1 sat. Recharge: Long Rest.\n• Flying Speed 60ft\n• Aura of Menace (30ft): neprijatelj koji uđe ili počne turn → WIS save ili Frightened 1 min (ili dok ne primi damage). Napadi vs frightened mete imaju Advantage." },
      ],
    },
    shortRestRestore: ["channelDivinity", "hitDice"],
    longRestRestore: ["spellSlots", "divineSense", "layOnHands", "harnessDivinePower", "cleansingTouch", "channelDivinity", "avengingAngel"],
    subclassResources: {
      "Oath of Vengeance": [
        { id: "channelDivinity", label: "Channel Divinity", type: "checkbox", recharge: "short" },
        { id: "divineSense", label: "Divine Sense", type: "counter", maxFormula: "1+chaMod", recharge: "long" },
        { id: "layOnHands", label: "Lay on Hands HP", type: "counter", maxFormula: "level*5", recharge: "long" },
        { id: "harnessDivinePower", label: "Harness Divine Power", type: "counter", maxFormula: "harnessUses", recharge: "long" },
        { id: "cleansingTouch", label: "Cleansing Touch", type: "counter", maxFormula: "chaMod", recharge: "long" },
        { id: "avengingAngel", label: "Avenging Angel", type: "checkbox", recharge: "long" },
      ]
    }
  }
};

// Helper: get spell slots for class at level
function getSpellSlots(className, level) {
  const cd = CLASS_DATA[className];
  if (!cd || !cd.spellSlots) return null;
  return cd.spellSlots[level] || null;
}

// Helper: get prof bonus at level
function getProfBonus(level) {
  return Math.ceil(level / 4) + 1;
}

// Helper: modifier from score
function getAbilityMod(score) {
  return Math.floor((score - 10) / 2);
}

// Helper: format modifier
function fmtMod(m) {
  return m >= 0 ? '+' + m : '' + m;
}
