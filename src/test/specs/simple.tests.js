describe('pastebin', () => {

    beforeEach(async () => {
        await browser.url('https://pastebin.com/')
    })

    it('new paste checking attributes', async () => {    

        // set value code from textbox area
        const codeInput = await browser.$('#postform-text');
        await codeInput.setValue("Hello from WebDriver");

        // Verify the value code from the textbox area
        const actualCode = await codeInput.getValue();
        expect(actualCode).toEqual("Hello from WebDriver")

        //Set the expiration time 10 minutes
        const dropdown = await browser.$('#select2-postform-expiration-container');
        await dropdown.click();
        const element = await browser.$('//li[contains(text(),"10 Minutes")]');
        await element.click();

        //Verify the expiration text
        const selector = await dropdown.getText();
        expect(selector).toEqual("10 Minutes");
        
        // set value Paste Name / Title text area
        const selectText = await browser.$('#postform-name');
        await selectText.setValue("helloweb");

        // Verify the value Paste Name / Title text are
        const verify = await selectText.getValue();
        expect(verify).toEqual("helloweb")

    })
})

