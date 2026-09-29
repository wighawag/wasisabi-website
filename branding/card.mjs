// Renders branding/card.html to web/static/preview.jpg (1280x640), the
// og:image. Run after `pnpm i` (Playwright comes from web/'s devDependencies)
// and after build.mjs (the card embeds enso.svg).
import {createRequire} from 'node:module';
import {dirname, join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(here, '../web/package.json'));
const {chromium} = require('@playwright/test');

const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1280, height: 640}});
await page.goto(pathToFileURL(join(here, 'card.html')).href, {waitUntil: 'networkidle'});
await page.evaluate(() => document.fonts.ready);
await page.screenshot({path: join(here, '../web/static/preview.jpg'), type: 'jpeg', quality: 86});
await browser.close();
console.log('wrote web/static/preview.jpg');
