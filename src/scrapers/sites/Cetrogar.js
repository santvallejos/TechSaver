async function scrapeCetrogar(page) {
    const result = await page.evaluate(() => {
        /* 
        <span id="product-price-35727" data-price-amount="326799" data-price-type="finalPrice" class="price-wrapper ">
            <span class="price">$&nbsp;326.799</span>
        </span>
        */
        const prices = document.querySelectorAll('span.price-wrapper[data-price-type="finalPrice"] span.price');
        const data = [];
        prices.forEach(price => {
            data.push(price.innerText);
        });
        return data;
    });
    console.log(result);
}

export default scrapeCetrogar;