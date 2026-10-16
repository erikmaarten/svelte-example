// Supplied helper: keep file-system details out of the live exercise.
// This module runs on the server. The data file is outside the public folder.
import { appendFile, readFile } from 'node:fs/promises';

export async function saveArticle(article) {
  await appendFile('articles.jsonl', JSON.stringify(article) + '\n', 'utf8');
}

export async function readArticles() {
  let text;
  try {
    text = await readFile('articles.jsonl', 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  return text.split('\n').filter(line => line.trim()).map(line => JSON.parse(line));
}
