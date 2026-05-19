import { coreCharacters } from './characters_core';
import { elysianApexCharacters, elysianApexFaction } from './characters_elysian_apex';
import { elysianApexExpansion2Characters } from './characters_elysian_apex_expansion_2';
import { elysianApexExpansion3Characters } from './characters_elysian_apex_expansion_3';
import { elysianApexExpansionV2Characters } from './characters_elysian_apex_expansion_v2_simple_items';
import { heavenlyKamiWarCourtCharacters, heavenlyKamiWarCourtFaction } from './characters_heavenly_kami_war_court';
import { heavenlyKamiWarCourtExpansion2Characters } from './characters_heavenly_kami_war_court_expansion_2';
import { heavenlyKamiWarCourtExpansion3Characters } from './characters_heavenly_kami_war_court_expansion_3';
import { norseValkyrieDominionCharacters } from './characters_norse_valkyrie_dominion';
import { norseValkyrieDominionExpansion2Characters } from './characters_norse_valkyrie_dominion_expansion_2';
import { solarNecropolisEgyptCharacters, solarNecropolisEgyptFaction } from './characters_solar_necropolis_egypt';
import { solarNecropolisEgyptExpansion2Characters } from './characters_solar_necropolis_egypt_expansion_2';

const norseValkyrieDominionFaction = {
  id: 23,
  name: "Norse Valkyrie Dominion",
  thaiName: "อาณาจักรวัลคีรีนอร์ส",
  icon: "ᚱ",
  universe: "Arcadia",
  mythology: "Norse",
  characterCount: 100
};

export const activeCharacters = [
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

export const characterFactions = [
  elysianApexFaction,
  norseValkyrieDominionFaction,
  solarNecropolisEgyptFaction,
  heavenlyKamiWarCourtFaction
];

export {
  coreCharacters,
  elysianApexCharacters,
  elysianApexExpansionV2Characters,
  elysianApexExpansion2Characters,
  elysianApexExpansion3Characters,
  norseValkyrieDominionCharacters,
  norseValkyrieDominionExpansion2Characters,
  solarNecropolisEgyptCharacters,
  solarNecropolisEgyptExpansion2Characters,
  heavenlyKamiWarCourtCharacters,
  heavenlyKamiWarCourtExpansion2Characters,
  heavenlyKamiWarCourtExpansion3Characters,

  elysianApexFaction,
  norseValkyrieDominionFaction,
  solarNecropolisEgyptFaction,
  heavenlyKamiWarCourtFaction
};
