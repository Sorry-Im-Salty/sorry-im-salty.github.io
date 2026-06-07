// Site content. Edit these objects to update the page.

const PROFILE = {
  name: "Salty",
  eyebrow: "FiveM / Lua systems developer",
  role: "Gameplay & Systems Developer — FiveM / Lua",
  blurb:
    "I build multiplayer game systems — competitive game modes, combat and progression systems, and " +
    "the in-game UIs that drive them. Mostly Lua and Vue on a large FiveM roleplay server, with " +
    "foundations in C/C++ from formal game-programming study. Below is my work, grouped by the repos I've shipped to.",
  github: "https://github.com/Sorry-Im-Salty",
  githubLabel: "github.com/Sorry-Im-Salty",
  avatar: "https://github.com/Sorry-Im-Salty.png?size=240",
  location: "Australia",
};

const STATS = [
  { value: "4", label: "Repositories" },
  { value: "740+", label: "Commits authored" },
  { value: "6+", label: "Languages" },
  { value: "2019", label: "Coding since" },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Lua", "JavaScript", "C / C++", "SQL", "HTML / CSS"],
  },
  {
    group: "Frameworks & UI",
    items: ["FiveM / CitizenFX", "Vue 3", "NUI (eventbridge)", "MySQL / oxmysql"],
  },
  {
    group: "Domains",
    items: [
      "Multiplayer game modes",
      "Networked state & sync",
      "Combat / weapons systems",
      "Vehicle & inventory systems",
      "Police / EMS / forensics tooling",
      "Anti-exploit & security hardening",
      "Performance & refactoring",
      "Data structures & algorithms",
      "Client/server architecture",
      "Live-ops & hotfixing",
    ],
  },
];

// Work on fdg-rp/scripting. `commits` are real, verbatim commit subjects.
const FDG_PROJECTS = [
  {
    title: "Nexus Game-Mode Framework",
    scope: "main_nexus · formerly main_area51",
    tag: "Game-Mode Framework",
    year: "2025–26",
    summary:
      "My most extensive project (360+ commits) — a configurable multiplayer game-mode framework, " +
      "originally shipped as 'Area 51' and later renamed Nexus. A shared, refactored core powers " +
      "multiple modes (Infected, Paintball, Search & Destroy, Horror) with map management, spawn " +
      "logic, scoreboards and per-mode tuning.",
    highlights: [
      "Multiple game modes from one shared, refactored core",
      "Hand-built maps (Stab City, Legion Square, Cayo Mansion) with radius/spawn tuning",
      "Live scoreboard + border/zone systems",
      "Per-mode settings (superjump, infected speed)",
    ],
    stack: ["Lua", "Vue 3", "NUI", "SQL"],
    commits: [
      "feat(area51): Initial testing",
      "tweak(area51): Refactor",
      "tweak(area51): New infected maps",
      "tweak(nexus): Optimisations/Cleanup",
      "tweak(nexus): Further extraction",
    ],
  },
  {
    title: "Search & Destroy",
    scope: "nexus",
    tag: "Competitive Game Mode",
    year: "2026",
    summary:
      "A CS-style bomb plant/defuse mode built on the Nexus framework: round logic, attacker/defender " +
      "teams, bombsite mechanics, spectator system, killfeed, and a full lobby UI. Shipped with " +
      "multiple custom maps (Cayo Mansion, Beach, Hangar, Raid).",
    highlights: [
      "Round-based team logic with custom team names & clothing",
      "Spectator system with managed spawns and freeze handling",
      "Killfeed with weapon icons + game-over outro sequencing",
      "Multiple hand-built maps and bombsite layouts",
    ],
    stack: ["Lua", "Vue 3", "NUI", "FiveM"],
    commits: [
      "feat(nexus): Search & Destroy",
      "feat(nexus): S&D Raid map",
      "tweak(nexus): Killfeed icons + cleanup",
      "fix(nexus): S&D Spectator freeze",
      "tweak(nexus): Custom team names",
    ],
  },
  {
    title: "Horror Game Mode",
    scope: "nexus",
    tag: "Asymmetric Game Mode",
    year: "2026",
    summary:
      "An asymmetric monster-vs-survivors mode built on the Nexus framework — monster glow " +
      "effects, custom spawn handling, and EMS-ping blocking to keep the round self-contained.",
    highlights: [
      "Asymmetric round design (monster vs survivors)",
      "Custom visual effects (monster glow)",
      "Spawn-point control and service-ping blocking",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(nexus): Horror gamemode",
      "tweak(nexus): Monster glow",
      "tweak(nexus): Block ems ping + spawnpoints",
    ],
  },
  {
    title: "Battles Combat System",
    scope: "main_battles",
    tag: "Combat / Scoreboard",
    year: "2026",
    summary:
      "A team-based combat system with capture mechanics, a polished spectator scoreboard, and a " +
      "killfeed that correctly handles team-kills and headshots. Included a full UI uplift.",
    highlights: [
      "Capture-objective scoreboard with correct team ordering",
      "Spectator scoreboard view",
      "Team-kill guarding (TK can't move the score)",
      "Killfeed deduplication + headshot handling",
    ],
    stack: ["Lua", "Vue 3", "NUI"],
    commits: [
      "tweak(battles): UI Uplift",
      "tweak(battles): Capture scoreboard",
      "tweak(battles): Prevent TK from updating score",
      "fix(battles): Duplicate killfeed + Headshot",
    ],
  },
  {
    title: "Garage System Rework",
    scope: "core_vehicles",
    tag: "Vehicle System",
    year: "2025",
    summary:
      "A ground-up rework of the vehicle garage system: organisation garages, a raid-garage flow " +
      "with owner sorting/folding, persistent vehicle health, GPS waypoints, tow logic and a fade-in UI.",
    highlights: [
      "Org-owned garages with vehicle preview & retrieval",
      "Raid garage: owner sorting, folding, in-vehicle item icons",
      "Persistent vehicle health + spawn-obstruction handling",
      "GPS waypoints and corrected tow functionality",
    ],
    stack: ["Lua", "Vue 3", "NUI", "SQL"],
    commits: [
      "feat(garage): Rework and consistency!!!",
      "feat(garage): Org garages",
      "feat(garage): Raid functionality",
      "feat(garage): GPS Waypoints",
    ],
  },
  {
    title: "Character Selection",
    scope: "main_charselect",
    tag: "UI / UX System",
    year: "2025",
    summary:
      "Hardened the character selection flow: resolution-aware UI (4K / ultrawide), preview-ped " +
      "model retry & fallback logic for missing characters, and a lockout system to prevent " +
      "race conditions on character swap.",
    highlights: [
      "Responsive UI for 4K and ultrawide displays",
      "Preview-ped retry + female fallback for missing models",
      "Robust recovery for missing characters",
      "Lockout to guard concurrent character swaps",
    ],
    stack: ["Lua", "Vue 3", "NUI"],
    commits: [
      "fix(charSelect): fix char labels for 4k/Ultrawide",
      "fix(charselect): Missing characters",
      "fix(charSelect): Female preview ped fallback",
      "fix(charselect): Lockout",
    ],
  },
  {
    title: "Spraypaint V2",
    scope: "main_spraypaint2",
    tag: "World Interaction",
    year: "2024",
    summary:
      "A networked spray-paint system letting players tag the world with gang logos — built as a " +
      "clean V2 rewrite of the original script (90+ commits).",
    highlights: [
      "Networked, persistent world tagging",
      "Gang-logo support",
      "Full rewrite of the legacy spraypaint resource",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(spraypaint2): Spraypaint V2 script initial",
      "feat(spraypaint2): Added gang logos",
    ],
  },
  {
    title: "Weapons & Holsters",
    scope: "core_weapon",
    tag: "Combat System",
    year: "2025–26",
    summary:
      "Weapon and equipment systems: a clothing-driven holster implementation, parachute " +
      "customisation, automatic-weapon registration and PD weapon fire-mode handling.",
    highlights: [
      "Clothing-based holster system",
      "Parachute customisation",
      "Automatic weapon registration",
      "Fire-mode control for PD weapons",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(holsters): Holster implementation",
      "feat(weapon): Parachute customisation + fixes",
      "tweak(weapon): Automatic weapon register",
    ],
  },
  {
    title: "Dispatch & Distress",
    scope: "main_dispatch",
    tag: "Emergency Services",
    year: "2024",
    summary:
      "A new distress/dispatch system for emergency services, with resource cleanup on player " +
      "disconnect to keep dispatch state consistent.",
    highlights: [
      "New distress signalling system",
      "Dispatch resource cleanup on player leave",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(dispatch): New Distress System",
      "fix(dispatch): Resources updating on ply leave",
    ],
  },
  {
    title: "Court & Legal System",
    scope: "main_court",
    tag: "Roleplay System",
    year: "2024",
    summary:
      "Roleplay legal mechanics including bench-trial notifications and a courthouse lockdown " +
      "feature for the DOJ.",
    highlights: ["Bench-trial notifications", "Courthouse lockdown command"],
    stack: ["Lua", "FiveM"],
    commits: ["feat(court): Bench Trial notification", "feat(court): lockdown"],
  },
  {
    title: "Inventory Enhancements",
    scope: "base_inventory",
    tag: "Core System",
    year: "2025",
    summary:
      "Inventory improvements on the server's core inventory base: simultaneous external + backpack " +
      "viewing, a player-details UI, and cleanup of inventory handlers on character swap.",
    highlights: [
      "View external + backpack inventories together",
      "Player-details inventory UI",
      "Handler cleanup on character swap",
    ],
    stack: ["Lua", "Vue 3", "NUI"],
    commits: [
      "feat(inventory): View both external and backpack",
      "feat(inv): Player Details UI",
      "fix(inventory): Clear inv handlers on char swap",
    ],
  },
  {
    title: "Vehicle Showcase",
    scope: "main_showcase",
    tag: "Feature",
    year: "2025",
    summary:
      "A vehicle showcase feature with SQL persistence and managed vehicle spawning/removal, plus " +
      "fixes for floating vehicles caused by custom MLO loading.",
    highlights: [
      "SQL-backed showcase data",
      "Vehicle spawn & removal management",
      "Floating-vehicle fixes for custom MLOs",
    ],
    stack: ["Lua", "SQL"],
    commits: [
      "feat(showcase): Initial commit",
      "feat(showcase): SQL integration",
      "feat(showcase): Veh removal",
      "fix(showcase): Floating vehs",
    ],
  },
  {
    title: "Mobile Phone Rebuild",
    scope: "main_phone_2",
    tag: "NUI App",
    year: "2025",
    summary:
      "Major work on the in-game phone (130+ commits): a ground-up rebuild plus tablet/cop-phone " +
      "variants, context-aware hotkey handling, and dispatch dialing for 000 emergency calls.",
    highlights: [
      "Full phone rebuild",
      "Tablet & police-phone variants",
      "Context-aware hotkey disabling (e.g. while shoving)",
      "000 / dispatch dial integration",
    ],
    stack: ["Lua", "Vue 3", "NUI"],
    commits: [
      "Phone rebuild",
      "Disable hotkeys for tablet, COPs and Phone",
      "fix(dispatch): 'dial' button fix for 000 calls.",
      "fix(phone): phone shove",
    ],
  },
  {
    title: "Police Systems",
    scope: "main_pd",
    tag: "Roleplay System",
    year: "2025–26",
    summary:
      "Law-enforcement gameplay: a networked tackle mechanic (interior-aware, org-gated), manually " +
      "breakable vehicle windows, and the RAPTOR camera/evidence system.",
    highlights: [
      "Networked tackle with distance + org checks",
      "Manually breakable vehicle windows",
      "RAPTOR camera system cleanup & fixes",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(pd): Tackle",
      "fix(pd): Tackle inside interiors",
      "feat(pd): Manually break veh windows",
      "fix(RAPTOR): Cleanup cams",
    ],
  },
  {
    title: "EMS & Medical",
    scope: "main_ems",
    tag: "Emergency Services",
    year: "2024–26",
    summary:
      "Medical and death systems: a bodybag workflow with auto-notes and item transfer, stretcher " +
      "and pull-from-vehicle handling, and auto-cleanup of consumed medkits.",
    highlights: [
      "Bodybag system with auto-notes + item transfer",
      "Stretcher and pull-from-vehicle logic",
      "Auto-deletion of used medkits",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "tweak(ems): Bodybag Auto Notes",
      "fix(citizen): Pull from veh and stretchers",
      "fix(death): Bodybag item transfer on self-bag",
      "tweak(medkit): Auto-deletion of medkit",
    ],
  },
  {
    title: "Forensic Evidence",
    scope: "main_evidence",
    tag: "Investigation System",
    year: "2024–25",
    summary:
      "A forensics toolkit for investigations: DNA collection, bullet-casing comparison, blood and " +
      "ballistics matching, and a RAPTOR vehicle evidence depot.",
    highlights: [
      "'Take DNA' player interaction",
      "Bullet-casing comparison",
      "Blood & ballistics matching",
      "RAPTOR vehicle evidence depot",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(main_evidence): Added 'Take DNA' interaction",
      "fix(evidence): Compare bullet casings",
      "fix(evidence): Fix blood and ballistics",
      "fix(evidence): RAPTOR vehicle evidence depot",
    ],
  },
  {
    title: "Consumables & Effects",
    scope: "core_effects",
    tag: "Gameplay System",
    year: "2024–25",
    summary:
      "Consumable items and their gameplay effects: craftable salami, functional BAC/breath tests, " +
      "drinkable water to reduce drunkenness, and tuned unarmed damage modifiers.",
    highlights: [
      "Craftable salami effect",
      "Functional BAC / breath-test interaction",
      "Drinkable water (reduces drunkenness)",
      "Unarmed damage modifiers + logging",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "feat(effects): Initial salami effect + craft",
      "feat(effects): Added functional BAC test",
      "add(alcohol): Drinkable water (reduces drunkness)",
      "tweak(effects): unarmed damage + logging",
    ],
  },
  {
    title: "Clothing & Skin System",
    scope: "base_skin",
    tag: "Core System",
    year: "2025–26",
    summary:
      "Character appearance and equipment on the core skin base: backpack support, org/global item " +
      "restrictions with correct priority, ammo retention across ped changes, and ResetPed override " +
      "handling.",
    highlights: [
      "Backpack support",
      "Org / global item restriction priority",
      "Ammo retention across ped changes",
      "ResetPed retains overrides",
    ],
    stack: ["Lua", "FiveM"],
    commits: [
      "fix(skin): org_restrict / global_restrict prio",
      "fix(wep): Ammo loss on ped change",
      "fix(skin): ResetPed retains Overrides",
    ],
  },
  {
    title: "Security & Performance Hardening",
    scope: "base / core",
    tag: "Engineering",
    year: "2025",
    summary:
      "Cross-cutting reliability work: locking down exploitable network events & callbacks, an " +
      "xPlayer refactor, a shared Base.Database/DataSync refactor, and waypoint-logging instrumentation " +
      "across stores, banking, gangs and PTK.",
    highlights: [
      "Limited net events & server callbacks (anti-exploit)",
      "xPlayer refactor across resources",
      "Base.Database / DataSync refactor",
      "Waypoint-log instrumentation for observability",
    ],
    stack: ["Lua", "FiveM", "SQL"],
    commits: [
      "fix(stores): Limit Net Events and callbacks",
      "perf(ptk): xPlayer refactor + wp logs",
      "perf(DataSync): Base.Database refactor",
      "perf(bank): wp logs",
    ],
  },
];

// Work grouped by repository. Each repo lists what I did and the projects within it.
const REPOS = [
  {
    name: "fdg-rp / scripting",
    role: "Senior Developer",
    period: "2024 – 2026",
    meta: "715 commits · 68k+ lines",
    languages: ["Lua", "Vue 3", "JavaScript", "SQL"],
    url: "https://github.com/fdg-rp/scripting",
    summary:
      "The resource monorepo for a large FiveM roleplay server. I own gameplay and systems work " +
      "across game modes, combat, vehicles, inventory and the emergency-services suite, plus the " +
      "Vue NUIs that drive them. This is the bulk of my work — the projects below are highlights.",
    projects: FDG_PROJECTS,
  },
  {
    name: "Sorry-Im-Salty / resources",
    role: "Solo Developer",
    period: "2024",
    meta: "30 commits",
    languages: ["JavaScript", "Lua", "NUI"],
    url: "https://github.com/Sorry-Im-Salty/resources",
    summary:
      "A collection of standalone FiveM scripts and admin/debug tooling I built independently.",
    projects: [
      {
        title: "HandOfGod & Fling Tools",
        scope: "admin tools",
        tag: "Admin Tooling",
        year: "2024",
        summary:
          "Admin/fun commands with a custom HUD, including a 'Hand of God' control and a fling " +
          "command — worked around engine quirks to sync with punch animations and stop crashes.",
        highlights: [
          "Custom HUD tied to command state",
          "Animation-synced HandOfGod control",
          "Crash-hardened fling command",
        ],
        stack: ["JavaScript", "Lua", "NUI"],
        commits: [
          "Added Fling and HandOfGod commands",
          "Workaround (best possible I've found) to sync with punch animations",
          "Removed fling command and fixed up HandOfGod to stop crashes",
        ],
      },
      {
        title: "Ped Spawner Debug HUD",
        scope: "debug",
        tag: "Developer Tooling",
        year: "2024",
        summary:
          "A debug HUD that displays currently spawned peds, with correct show/hide lifecycle " +
          "handling so it never lingers when debug mode is off.",
        highlights: [
          "Live count of spawned peds",
          "Fixed HUD persisting after debug disabled",
          "Fade handling when still enabled",
        ],
        stack: ["JavaScript", "Lua", "NUI"],
        commits: [
          "Implemented a HUD that displays current spawned peds",
          "Fixed the error where the HUD was persisting once debug was disabled (I hate case sensitivity)",
          "Fixed an issue where HUD would fade out when still enabled",
        ],
      },
      {
        title: "Ignition System",
        scope: "vehicles",
        tag: "Vehicle Feature",
        year: "2024",
        summary: "A reworked vehicle ignition command with performance passes and cleanup.",
        highlights: ["Ignition command rework", "Performance improvements & cleanup"],
        stack: ["Lua"],
        commits: ["Ignition command rework", "Performance improvements / Clean up"],
      },
    ],
  },
  {
    name: "Sorry-Im-Salty / AIE-2019",
    role: "Student — Academy of Interactive Entertainment",
    period: "2019",
    meta: "Coursework",
    languages: ["C", "C++"],
    url: "https://github.com/Sorry-Im-Salty/AIE-2019",
    summary:
      "Coursework from my game-programming studies — the fundamentals behind everything since.",
    projects: [
      {
        title: "Data Structures & Algorithms",
        scope: "fundamentals",
        tag: "Education",
        year: "2019",
        summary:
          "Implementations of core CS fundamentals in C/C++: search and sort algorithms, entity " +
          "arrays and iteration, and write-ups on decision-making techniques.",
        highlights: [
          "Linear & bubble sort implementations",
          "Entity arrays and iteration",
          "Decision-making technique write-up",
        ],
        stack: ["C", "C++"],
        commits: [
          "Added LinearSearch and BubbleSort.",
          "Added example entity.",
          "Added Decision Making Technique Section.",
        ],
      },
    ],
  },
  {
    name: "fdg-rp / web-landing",
    role: "Contributor",
    period: "2024",
    meta: "Web",
    languages: ["Vue", "TypeScript"],
    url: "https://github.com/fdg-rp/web-landing",
    summary:
      "The server's public Vue landing/appeals site. I contributed content and copy fixes.",
    projects: [
      {
        title: "Landing & Appeals Content",
        scope: "web",
        tag: "Web",
        year: "2024",
        summary: "Content and copy updates to the public-facing Vue landing site.",
        highlights: ["Appeals page content", "Copy / grammar fixes"],
        stack: ["Vue", "TypeScript"],
        commits: ["Update appeals.md", "Fixed up grammatical errors."],
      },
    ],
  },
];

// A condensed timeline pulled from the commit history.
const TIMELINE = [
  {
    period: "2026",
    title: "Game-mode focus",
    text: "Built Search & Destroy and a Horror mode on the Nexus framework, and shipped the Battles combat/scoreboard system.",
  },
  {
    period: "2025",
    title: "Systems & arenas",
    text: "Most active year (350+ commits): the Nexus game-mode framework (formerly Area 51), full garage rework, weapons/holsters and inventory work.",
  },
  {
    period: "2024",
    title: "FiveM roleplay & personal tooling",
    text: "Joined the FDG server and shipped across the stack (Spraypaint V2, dispatch, court, effects), and built standalone FiveM scripts in my own resources repo.",
  },
  {
    period: "2019",
    title: "Foundations",
    text: "Studied game programming at the Academy of Interactive Entertainment — C/C++ fundamentals, data structures and algorithms.",
  },
];
