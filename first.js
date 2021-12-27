const { chromium } = require('playwright');

(async() => {
    
    const browser = await chromium.launch({headless:false, slowMo:50});
    const page = await browser.newPage();
    await page.goto('https://easyshare-dot-staging-cochii-hrd.appspot.com/index.jsp');
    const email = await page.$('#username');

    await email.type('nov24easyshare@setmore.com', { delay : 50});
    const password = await page.$('#password');

    await password.type('Sangeetha21', { delay : 50});
    await page.click('#sm-login-btn', { timeout: 18000 });

    console.log("logged in")
    const waitClick=await page.waitForSelector('#share-booking-links')

    console.log(waitClick)
     waitClick.click();
    


    const getText= await page.$('.my-booking');
    const hover= await page.$("button.ellipsis-button");

    const boundingBox= await hover.boundingBox();
    console.log("boundingBox",boundingBox);
    // await page.mouse.move(340,150)
    // console.log("getText",await getText.isVisible());

    // await browser.close();
})();