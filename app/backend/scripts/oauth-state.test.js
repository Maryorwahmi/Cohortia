import assert from 'node:assert/strict';
import test from 'node:test';
import {statesMatch} from '../src/lib/oauthState.js';

test('OAuth callback state must exactly match the browser-bound cookie', () => {
  const state = 'signed-state-value';

  assert.equal(statesMatch(state, state), true);
  assert.equal(statesMatch(state, `${state}changed`), false);
  assert.equal(statesMatch('', ''), false);
  assert.equal(statesMatch(undefined, state), false);
  assert.equal(statesMatch(state, null), false);
});
