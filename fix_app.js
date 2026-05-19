const fs = require('fs');
let appTsx = fs.readFileSync('CharacterUniverseReact/src/App.tsx', 'utf-8');
appTsx = appTsx.replace(/\(selectedCharacter as any\)\.personalItem\?\.itemRole/g, '(selectedCharacter as any)?.personalItem?.itemRole');
fs.writeFileSync('CharacterUniverseReact/src/App.tsx', appTsx);
