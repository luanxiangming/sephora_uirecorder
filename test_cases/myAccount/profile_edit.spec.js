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

    callSpec('commons/profile.mod.js');

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('expect: text, div.middle > p, contain, {{nickname}}', async function(){
        await driver.sleep(2000).wait('div.middle > p', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`{{nickname}}`));
    });

    it('click: {{nickname}} ( div.middle > p, 26, 10, 0 )', async function(){
        await driver.sleep(300).wait('div.middle > p', 30000)
               .sleep(300).mouseMove(26, 10).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 60', async function(){
        await driver.scrollTo(0, 60);
    });

    it('mouseDown: div.nick-name > div.SepBaseInput-chen > input, 158, 19, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen > input', 30000)
               .sleep(300).mouseMove(158, 19).mouseDown(0);
    });

    it('mouseUp: div.nick-name > div.SepBaseInput-chen, 158, 19, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen', 30000)
               .sleep(300).mouseMove(158, 19).mouseMove(158, 19).mouseUp(0);
    });

    it('mouseDown: div.icon-clear, 9, 14, 0', async function(){
        await driver.sleep(300).wait('div.icon-clear', 30000)
               .sleep(300).mouseMove(9, 14).mouseDown(0);
    });

    it('mouseUp: div.nick-name > div.SepBaseInput-chen, 181, 21, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen', 30000)
               .sleep(300).mouseMove(181, 21).mouseMove(181, 21).mouseUp(0);
    });

    it('mouseDown: div.nick-name > div.SepBaseInput-chen > input, 157, 12, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen > input', 30000)
               .sleep(300).mouseMove(157, 12).mouseDown(0);
    });

    it('mouseUp: div.nick-name > div.SepBaseInput-chen, 157, 12, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen', 30000)
               .sleep(300).mouseMove(157, 12).mouseMove(157, 12).mouseUp(0);
    });

    it('click: div.icon-clear, 16, 12, 0', async function(){
        await driver.sleep(300).wait('div.icon-clear', 30000)
               .sleep(300).mouseMove(16, 12).click(0);
    });

    it('mouseDown: div.nick-name > div.SepBaseInput-chen > input, 153, 17, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen > input', 30000)
               .sleep(300).mouseMove(153, 17).mouseDown(0);
    });

    it('mouseUp: div.nick-name > div.SepBaseInput-chen, 153, 17, 0', async function(){
        await driver.sleep(300).wait('div.nick-name > div.SepBaseInput-chen', 30000)
               .sleep(300).mouseMove(153, 17).mouseMove(153, 17).mouseUp(0);
    });

    it('sendKeys: {{nickname}}', async function(){
        await driver.sendKeys(_(`{{nickname}}`));
    });

    it('scrollTo: 0, 638', async function(){
        await driver.scrollTo(0, 638);
    });

    it('scrollTo: 0, 893', async function(){
        await driver.scrollTo(0, 893);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('sendKeys: 手机微博登陆', async function(){
        await driver.sendKeys('手机微博登陆');
    });

    it('scrollTo: 0, 893', async function(){
        await driver.scrollTo(0, 893);
    });

    it('click: 保存信息 ( div.save-info, 91, 18, 0 )', async function(){
        await driver.sleep(300).wait('div.save-info', 30000)
               .sleep(300).mouseMove(91, 18).click(0);
    });

    it('acceptAlert: ', async function(){
        await driver.acceptAlert();
    });

    it('keyDown: CTRL', async function(){
        await driver.keyDown('CTRL');
    });

    it('sendKeys: {UP}', async function(){
        await driver.sendKeys('{UP}');
    });

    it('scrollTo: 0, 0', async function(){
        await driver.scrollTo(0, 0);
    });

    it('keyUp: CTRL', async function(){
        await driver.keyUp('CTRL');
    });

    it('click: div.search-info-content-logo > a > img, 104, 18, 0', async function(){
        await driver.sleep(300).wait('div.search-info-content-logo > a > img', 30000)
               .sleep(300).mouseMove(104, 18).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('expect: text, p, contain, {{nickname}}', async function(){
        await driver.sleep(1000).wait('p', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`{{nickname}}`));
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
