import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getDirectionForLang,
  getDocumentTitleForLang,
  toggleSelectedService,
} from './presentationState';

test('getDirectionForLang maps Arabic to rtl and English to ltr', () => {
  assert.equal(getDirectionForLang('ar'), 'rtl');
  assert.equal(getDirectionForLang('en'), 'ltr');
});

test('getDocumentTitleForLang returns localized Fluenty.services page titles', () => {
  assert.equal(getDocumentTitleForLang('ar'), 'Fluenty.services — نجاحك هو مهمتنا');
  assert.equal(getDocumentTitleForLang('en'), 'Fluenty.services — Your success, our mission');
});

test('toggleSelectedService expands clicked service and collapses when clicked again', () => {
  assert.equal(toggleSelectedService(null, 'websites'), 'websites');
  assert.equal(toggleSelectedService('websites', 'websites'), null);
  assert.equal(toggleSelectedService('websites', 'documents'), 'documents');
});
