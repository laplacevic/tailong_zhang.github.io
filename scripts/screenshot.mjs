// Dev tool: full-page screenshots for visual verification.
// Usage: node scripts/screenshot.mjs [baseUrl]
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:4321";
const outDir = "/tmp";

const shots = [
  { name: "desktop", width: 1440, height: 900, reducedMotion: "no-preference" },
  { name: "desktop-rm", width: 1440, height: 900, reducedMotion: "reduce" },
  { name: "mobile", width: 375, height: 812, reducedMotion: "reduce" },
  { name: "tablet", width: 768, height: 1024, reducedMotion: "reduce" },
];

const browser = await chromium.launch();
for (const shot of shots) {
  const context = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    reducedMotion: shot.reducedMotion,
  });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(shot.reducedMotion === "reduce" ? 800 : 3500);
  await page.screenshot({
    path: `${outDir}/pw-${shot.name}.png`,
    fullPage: true,
  });
  await context.close();
  console.log(`pw-${shot.name}.png`);
}
await browser.close();
