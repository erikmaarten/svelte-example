LECTURE 5 / ARTICLE BOARD / 45-MINUTE GUIDED FOLLOW-ALONG

1. Extract the ZIP into your course work folder. Do not work inside the ZIP.
2. Open the extracted article-board folder in your editor.
   The open folder must contain package.json directly.
3. Open the editor terminal in that folder.
4. Check: node --version and npm --version.
   Use Node.js 24 LTS with npm. If missing, install from https://nodejs.org
   and reopen the editor before continuing.
5. Run: npm install
   This installs Svelte, SvelteKit and the other declared dependencies locally.
6. Run: npm run dev
7. Open the URL printed in the terminal (usually http://localhost:5173).
   Leave the terminal running. Ctrl+C stops it.

This ZIP already contains the basic project configuration.
Do not run a project generator inside it. Do not double-click +page.svelte.
Use the accompanying guided-exercises PDF and follow the instructor.

STARTER FILES
package.json: commands and required packages.
package-lock.json: the package versions used for this exercise.
svelte.config.js and vite.config.js: framework and development-tool configuration.
src/app.html: HTML document shell.
src/routes/+page.svelte: the home page you will edit.
src/lib/server/articles.js: supplied server-only file-storage helper.
.gitignore: excludes installed packages, generated files and local article data.

You create +page.server.js and about/+page.svelte during the exercises.
The starter has no completed form, action, route or article list.
The helper creates articles.jsonl in this folder on the first successful save.
It is a local teaching example, not a production database.
No accounts, hosting or external services are needed. Internet is needed for install.
