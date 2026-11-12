import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeMentorAttachments } from '../src/lib/mentorAttachments.js';

test('normalizes image, PDF, and text attachments', () => {
  const [image, pdf, text] = normalizeMentorAttachments([
    { name: 'screen.PNG', mimeType: 'image/png', data: Buffer.from('image').toString('base64') },
    { name: 'brief.pdf', mimeType: 'application/pdf', data: Buffer.from('pdf').toString('base64') },
    { name: 'notes.md', mimeType: 'text/markdown', textContent: '# Notes' },
  ]);

  assert.equal(image.mimeType, 'image/png');
  assert.equal(image.size, 5);
  assert.equal(pdf.mimeType, 'application/pdf');
  assert.equal(text.mimeType, 'text/markdown');
  assert.equal(text.textContent, '# Notes');
});

test('rejects unsupported, invalid, and oversized attachments', () => {
  assert.throws(() => normalizeMentorAttachments([{ name: 'archive.zip' }]), /not a supported file type/);
  assert.throws(() => normalizeMentorAttachments([{ name: 'image.png', data: 'invalid' }]), /Could not read/);
  assert.throws(() => normalizeMentorAttachments([{ name: 'notes.txt', textContent: 'x'.repeat(100 * 1024 + 1) }]), /100 KB or smaller/);
  assert.throws(() => normalizeMentorAttachments(Array.from({ length: 6 }, (_, index) => ({
    name: `${index}.txt`,
    textContent: 'ok',
  }))), /no more than 5 files/);
});
