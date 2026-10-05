import { chromium } from "playwright";

const browser = await chromium.launch();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await desktop.goto("http://localhost:3001/", { waitUntil: "networkidle" });
await desktop.waitForTimeout(500);
await desktop.screenshot({ path: "C:\\Users\\MARIJA\\AppData\\Local\\Temp\\claude\\c--Users-MARIJA-Documents-GitHub-naucidizajn2\\ec54d8ab-acf7-4a7c-a3ae-e838b473b992\\scratchpad\\hero-v2-desktop.png", fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3001/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: "C:\\Users\\MARIJA\\AppData\\Local\\Temp\\claude\\c--Users-MARIJA-Documents-GitHub-naucidizajn2\\ec54d8ab-acf7-4a7c-a3ae-e838b473b992\\scratchpad\\hero-v2-mobile.png", fullPage: true });

await browser.close();
