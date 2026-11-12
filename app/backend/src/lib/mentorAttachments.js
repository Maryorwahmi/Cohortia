const FILE_TYPES_BY_EXTENSION = {
  '.jpg': { mimeType: 'image/jpeg', kind: 'binary' },
  '.jpeg': { mimeType: 'image/jpeg', kind: 'binary' },
  '.png': { mimeType: 'image/png', kind: 'binary' },
  '.webp': { mimeType: 'image/webp', kind: 'binary' },
  '.gif': { mimeType: 'image/gif', kind: 'binary' },
  '.pdf': { mimeType: 'application/pdf', kind: 'binary' },
  '.txt': { mimeType: 'text/plain', kind: 'text' },
  '.md': { mimeType: 'text/markdown', kind: 'text' },
  '.csv': { mimeType: 'text/csv', kind: 'text' },
  '.json': { mimeType: 'application/json', kind: 'text' },
  '.xml': { mimeType: 'application/xml', kind: 'text' },
  '.html': { mimeType: 'text/html', kind: 'text' },
  '.htm': { mimeType: 'text/html', kind: 'text' },
  '.css': { mimeType: 'text/css', kind: 'text' },
  '.js': { mimeType: 'text/javascript', kind: 'text' },
  '.jsx': { mimeType: 'text/javascript', kind: 'text' },
  '.ts': { mimeType: 'text/typescript', kind: 'text' },
  '.tsx': { mimeType: 'text/typescript', kind: 'text' },
  '.py': { mimeType: 'text/x-python', kind: 'text' },
  '.java': { mimeType: 'text/x-java-source', kind: 'text' },
  '.c': { mimeType: 'text/x-c', kind: 'text' },
  '.h': { mimeType: 'text/x-c', kind: 'text' },
  '.cpp': { mimeType: 'text/x-c++', kind: 'text' },
  '.hpp': { mimeType: 'text/x-c++', kind: 'text' },
  '.go': { mimeType: 'text/x-go', kind: 'text' },
  '.rs': { mimeType: 'text/x-rust', kind: 'text' },
  '.sql': { mimeType: 'text/x-sql', kind: 'text' },
  '.yaml': { mimeType: 'text/yaml', kind: 'text' },
  '.yml': { mimeType: 'text/yaml', kind: 'text' },
  '.log': { mimeType: 'text/plain', kind: 'text' },
};

const MAX_FILE_COUNT = 5;
const MAX_BINARY_FILE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BINARY_BYTES = 8 * 1024 * 1024;
const MAX_TEXT_FILE_BYTES = 100 * 1024;
const MAX_TOTAL_TEXT_BYTES = 300 * 1024;

export function normalizeMentorAttachments(attachments) {
  if (!Array.isArray(attachments)) {
    throw new Error('Attachments must be a list of supported files.');
  }
  if (attachments.length > MAX_FILE_COUNT) {
    throw new Error(`Attach no more than ${MAX_FILE_COUNT} files at a time.`);
  }

  let totalBinaryBytes = 0;
  let totalTextBytes = 0;

  return attachments.map((attachment) => {
    if (!attachment || typeof attachment !== 'object' || typeof attachment.name !== 'string') {
      throw new Error('One of the attached files is invalid. Please select it again.');
    }

    const name = attachment.name.split(/[\\/]/).pop().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 150);
    const extension = name.match(/\.[^.]+$/)?.[0].toLowerCase();
    const fileType = extension ? FILE_TYPES_BY_EXTENSION[extension] : null;
    if (!name || !fileType) {
      throw new Error(`"${name || 'Unknown file'}" is not a supported file type.`);
    }

    if (fileType.kind === 'text') {
      if (typeof attachment.textContent !== 'string') {
        throw new Error(`Could not read "${name}". Please choose it again.`);
      }
      const size = Buffer.byteLength(attachment.textContent, 'utf8');
      if (size > MAX_TEXT_FILE_BYTES) {
        throw new Error(`"${name}" is too large. Text files must be 100 KB or smaller.`);
      }
      totalTextBytes += size;
      if (totalTextBytes > MAX_TOTAL_TEXT_BYTES) {
        throw new Error('The combined text in attachments must be 300 KB or smaller.');
      }
      return { name, mimeType: fileType.mimeType, size, textContent: attachment.textContent };
    }

    if (typeof attachment.data !== 'string' || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(attachment.data)) {
      throw new Error(`Could not read "${name}". Please choose it again.`);
    }
    const size = Buffer.from(attachment.data, 'base64').byteLength;
    if (size === 0 || size > MAX_BINARY_FILE_BYTES) {
      throw new Error(`"${name}" is too large. Images and PDFs must be 4 MB or smaller.`);
    }
    totalBinaryBytes += size;
    if (totalBinaryBytes > MAX_TOTAL_BINARY_BYTES) {
      throw new Error('The combined size of images and PDFs must be 8 MB or smaller.');
    }
    return { name, mimeType: fileType.mimeType, size, data: attachment.data };
  });
}
