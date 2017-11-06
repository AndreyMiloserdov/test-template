const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
/*
const options = new chrome.Options()
  .addArguments("no-sandbox")
  .setUserPreferences({'profile.default_content_settings.popups': '0'})
  .setUserPreferences({'profile.default_content_setting_values.notifications': '2'});

var driver = new webdriver.Builder()
  .withCapabilities(options.toCapabilities())
  .build();
*/

const options = new chrome.Options()
  .addArguments("--test-type")
  .addArguments("test-type")
  .addArguments("--start-maximized")
  .addArguments("--disable-web-security")
  .addArguments("--allow-running-insecure-content");
 
     let driver = new Builder() 
         .forBrowser('chrome') 
         .setChromeOptions(options) 
         .build(); 

driver.get('http://www.google.com/ncr');
//driver.wait(until.titleIs('Google'), 10000);
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//driver.sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.wait(until.titleIs('Google'), 10000);
driver.quit();


//userTeacher.chat.addMessage();
//userTeacher.selectTab('Shared Screen');
//userTeacher.noteSelect(1);
//userTeacher.noteMoveTo(20, 50);
