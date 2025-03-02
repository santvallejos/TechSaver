import puppeteer from "puppeteer";

async function scrapingExample() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250,
    });
    const page = await browser.newPage();

    await page.goto("https://www.fravega.com/l/?keyword=galaxy");

    await browser.close();
}

export default scrapingExample;