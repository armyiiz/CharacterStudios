// Character data index for the plain-script website runtime.
// Backward-compatible aliases keep existing app code and tests working.
const characterModules = {
  core: coreCharacters,
  elysianApex: elysianApexCharacters,
  elysianApexExpansionV2: elysianApexExpansionV2Characters,
  elysianApexExpansion2: elysianApexExpansion2Characters,
  elysianApexExpansion3: elysianApexExpansion3Characters,
  norseValkyrieDominion: norseValkyrieDominionCharacters,
  norseValkyrieDominionExpansion2: norseValkyrieDominionExpansion2Characters,
  solarNecropolisEgypt: solarNecropolisEgyptCharacters,
  solarNecropolisEgyptExpansion2: solarNecropolisEgyptExpansion2Characters,
  heavenlyKamiWarCourt: heavenlyKamiWarCourtCharacters,
  heavenlyKamiWarCourtExpansion2: heavenlyKamiWarCourtExpansion2Characters,
  heavenlyKamiWarCourtExpansion3: heavenlyKamiWarCourtExpansion3Characters
};

const norseValkyrieDominionFaction = {
  id: 23,
  name: "Norse Valkyrie Dominion",
  thaiName: "อาณาจักรวัลคีรีนอร์ส",
  icon: "ᚱ",
  universe: "Arcadia",
  mythology: "Norse",
  characterCount: 100
};

const characterFactions = [
  elysianApexFaction,
  norseValkyrieDominionFaction,
  solarNecropolisEgyptFaction,
  heavenlyKamiWarCourtFaction
];

const charactersReworkedFinalV3 = [
  ...coreCharacters,
  ...elysianApexCharacters,
  ...elysianApexExpansionV2Characters,
  ...elysianApexExpansion2Characters,
  ...elysianApexExpansion3Characters,
  ...norseValkyrieDominionCharacters,
  ...norseValkyrieDominionExpansion2Characters,
  ...solarNecropolisEgyptCharacters,
  ...solarNecropolisEgyptExpansion2Characters,
  ...heavenlyKamiWarCourtCharacters,
  ...heavenlyKamiWarCourtExpansion2Characters,
  ...heavenlyKamiWarCourtExpansion3Characters
];

const charactersReworkedFinalV2 = charactersReworkedFinalV3;

if (typeof window !== "undefined") {
  window.characterModules = characterModules;
  window.characterFactions = characterFactions;
  window.norseValkyrieDominionFaction = norseValkyrieDominionFaction;
  window.solarNecropolisEgyptFaction = solarNecropolisEgyptFaction;
  window.heavenlyKamiWarCourtFaction = heavenlyKamiWarCourtFaction;
  window.charactersReworkedFinalV3 = charactersReworkedFinalV3;
  window.charactersReworkedFinalV2 = charactersReworkedFinalV3;
}

if (typeof module !== "undefined") {
  module.exports = {
    characterModules,
    characterFactions,
    norseValkyrieDominionFaction,
    solarNecropolisEgyptFaction,
    heavenlyKamiWarCourtFaction,
    charactersReworkedFinalV3,
    charactersReworkedFinalV2
  };
}
