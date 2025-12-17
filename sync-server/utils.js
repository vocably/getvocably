import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

export async function listFiles(dir) {
  try {
    // Read recursively. Items are file names relative to 'dir'.
    const entries = await readdir(dir, { recursive: true });
    const filePaths = [];

    // Check each entry to ensure it's a file
    for (const entry of entries) {
      const fullPath = join(dir, entry);

      // Use stat() to get file type information
      const stats = await stat(fullPath);

      if (stats.isFile()) {
        filePaths.push(entry); // Push the path relative to the start folder
      }
    }

    return filePaths;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return [];
  }
}
