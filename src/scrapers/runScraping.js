import puppeteer from "puppeteer";
import scrapeCetrogar from "./sites/Cetrogar.js";
import scrapeMegatone from "./sites/Megatone.js";
import scrapeMusimundo from "./sites/Musimundo.js";
import scrapeFravega from "./sites/Fravega.js";
import scrapeNaldo from "./sites/Naldo.js";
import scrapeOnCity from "./sites/OnCity.js";

const webs = {
    "Cetrogar": "https://www.cetrogar.com.ar/catalogsearch/result/?q=SmartTV",
/*     "Megatone": "https://www.megatone.net",
    "Musimundo": "https://www.musimundo.com",
    "Fravega": "https://www.fravega.com",
    "Naldo": "https://www.naldo.com.ar",
    "OnCity": "https://www.oncity.com" */
}

export const scrapers = {
    Cetrogar: scrapeCetrogar,
/*     Megatone: scrapeMegatone,
    Musimundo: scrapeMusimundo,
    Fravega: scrapeFravega,
    Naldo: scrapeNaldo,
    OnCity: scrapeOnCity */
};

async function runScraping() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();

    for (const [key, value] of Object.entries(webs)){
        console.log(`Scraping ${key}...`);
        await page.goto(value);
        if (scrapers[key]){
            await scrapers[key](page);
        }
    }

    await browser.close();
}

export default runScraping;