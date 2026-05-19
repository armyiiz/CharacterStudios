import { activeCharacters } from './CharacterUniverseReact/src/data/characters/index.ts';
console.log('Total characters:', activeCharacters.length);
const invalidChars = activeCharacters.filter(c => !c);
console.log('Invalid (null/undefined) entries in activeCharacters:', invalidChars.length);
