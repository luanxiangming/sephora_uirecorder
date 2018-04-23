const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: {{url}}', async function(){
        await driver.url(_(`{{url}}`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('expect: displayed, div.navigation-info-content-menu, equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 热门 ( li:nth-child(1) > a.title, 110, 17 )', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a.title', 30000)
               .sleep(300).mouseMove(110, 17);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 功效 ( li:nth-child(2) > a.title, 144, 17 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a.title', 30000)
               .sleep(300).mouseMove(144, 17);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 护肤 ( li:nth-child(3) > a.title, 116, 16 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > a.title', 30000)
               .sleep(300).mouseMove(116, 16);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 彩妆 ( li:nth-child(4) > a.title, 123, 6 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > a.title', 30000)
               .sleep(300).mouseMove(123, 6);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 香水 ( li:nth-child(5) > a.title, 114, 13 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > a.title', 30000)
               .sleep(300).mouseMove(114, 13);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 工具 ( li:nth-child(6) > a.title, 102, 15 )', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > a.title', 30000)
               .sleep(300).mouseMove(102, 15);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 男士护肤 ( li:nth-child(7) > a.title, 102, 18 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > a.title', 30000)
               .sleep(300).mouseMove(102, 18);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 洗浴护体 ( li:nth-child(8) > a.title, 107, 5 )', async function(){
        await driver.sleep(300).wait('li:nth-child(8) > a.title', 30000)
               .sleep(300).mouseMove(107, 5);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('mouseMove: 美发护发 ( li:nth-child(9) > a.title, 97, 6 )', async function(){
        await driver.sleep(300).wait('li:nth-child(9) > a.title', 30000)
               .sleep(300).mouseMove(97, 6);
    });

    it('expect: displayed, div.navigation-info-content-menu > div:nth-child(3), equal, true', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('expect: displayed, div.weeklySpecial-info-content-left > a > img, equal, true', async function(){
        await driver.sleep(300).wait('div.weeklySpecial-info-content-left > a > img', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('expect: displayed, div.weeklySpecial-info-content-right > a:nth-child(1) > img, equal, true', async function(){
        await driver.sleep(300).wait('div.weeklySpecial-info-content-right > a:nth-child(1) > img', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('expect: displayed, div.weeklySpecial-info-content-right > a:nth-child(2) > img, equal, true', async function(){
        await driver.sleep(300).wait('div.weeklySpecial-info-content-right > a:nth-child(2) > img', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if(match){
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                    'chromeOptions': {
                        'args': ['--enable-automation']
                    }
                });
                if(proxy){
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if(hosts){
                    sessionConfig.hosts = hosts;
                }
                self.driver = driver.session(sessionConfig).maximize().config({
                    pageloadTimeout: 300000, // page onload timeout
                    scriptTimeout: 5000, // sync script timeout
                    asyncScriptTimeout: 10000 // async script timeout
                });
                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
                if(self.skipAll){
                    self.skip();
                }
            });

            afterEach(async function(){
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if(currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)){
                    self.skipAll = true;
                }
                if(!/^(closeWindow):/.test(title)){
                    let filepath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId;
                    let driver = self.driver;
                    try{
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: '+url+' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                    }
                    catch(e){}
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code){
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function catchError(error){

}
