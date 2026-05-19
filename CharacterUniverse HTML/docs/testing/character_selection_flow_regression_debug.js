// Browser-console regression helper for Character Prompt Studio.
// Load the site, paste/run this script in the browser console, and read the final table.
(async function runCharacterSelectionFlowRegression() {
  const wait = (ms = 250) => new Promise(resolve => setTimeout(resolve, ms));
  const failures = [];
  const consoleErrors = [];
  const originalConsoleError = console.error;
  console.error = function patchedConsoleError(...args) {
    consoleErrors.push(args.map(String).join(' '));
    originalConsoleError.apply(console, args);
  };
  window.addEventListener('error', event => consoleErrors.push(event.message));

  function assert(name, condition, details = {}) {
    const row = { name, pass: Boolean(condition), ...details };
    if (!row.pass) failures.push(row);
    return row;
  }

  async function clickFirstVisibleCharacter() {
    const card = document.querySelector('.character-card[data-character-id]');
    assert('character grid has visible cards', Boolean(card));
    if (!card) return null;
    card.click();
    await wait();
    return card.dataset.characterId;
  }

  async function selectBySearch(name) {
    window.setUniverse(2);
    await wait();
    window.setFilter('searchChar', name);
    await wait();
    const card = [...document.querySelectorAll('.character-card[data-character-id]')]
      .find(el => el.textContent.includes(name));
    assert(`${name} card is visible`, Boolean(card));
    if (!card) return null;
    card.click();
    await wait();
    return {
      activeStep: document.querySelector('.step-panel.active')?.id || '',
      summary: document.getElementById('characterSummary')?.textContent || '',
      poseCards: document.querySelectorAll('.pose-card').length
    };
  }

  const results = [];
  const expectedCount = String(window.charactersReworkedFinalV3?.length || '');
  results.push(assert('initial character count matches active database', document.getElementById('statCharacters')?.textContent === expectedCount, { expectedCount }));

  window.setUniverse(1);
  await wait();
  const firstId = await clickFirstVisibleCharacter();
  results.push(assert('clicking first visible character changes to step2', document.querySelector('.step-panel.active')?.id === 'step2', { firstId }));

  for (const name of ['Zeus', 'Odin', 'Thor', 'Freyja', 'Hel', 'Fenrir', 'Ratatoskr', 'Sigyn', 'Sol', 'Mani', 'Thrud', 'Hyrrokkin', 'Skoll', 'Fafnir', 'Dvalin']) {
    const result = await selectBySearch(name);
    results.push(assert(`${name} changes active panel to step2`, result && result.activeStep === 'step2', result || {}));
    results.push(assert(`${name} summary contains name`, result && result.summary.includes(name), result || {}));
    results.push(assert(`${name} pose cards render`, result && result.poseCards > 0, result || {}));
  }

  window.goStep(1);
  await wait();
  const secondId = await clickFirstVisibleCharacter();
  results.push(assert('Step 1 then select another character returns to step2', document.querySelector('.step-panel.active')?.id === 'step2', { secondId }));
  results.push(assert('no console errors during regression', consoleErrors.length === 0, { consoleErrors }));

  console.table(results);
  console.log(failures.length ? 'Character selection flow regression failed.' : 'Character selection flow regression passed.');
  return { pass: failures.length === 0, failures, consoleErrors, results };
})();
