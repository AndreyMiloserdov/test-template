const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options()
  .addArguments("--test-type")
  .addArguments("test-type")
  .addArguments("--start-maximized")
  .addArguments("--disable-web-security")
  .addArguments("--allow-running-insecure-content");
 
const driver = new Builder() 
  .forBrowser('chrome') 
  .setChromeOptions(options) 
  .build(); 


driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 3000);
driver.manage().window().setPosition(0, 0);
driver.manage().window().setSize(800, 600);

driver.wait((done) => {
  setTimeout(() => consoe.log(111), 8000);
}, 10000);

driver.quit()



