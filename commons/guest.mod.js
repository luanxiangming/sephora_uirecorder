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

    // callSpec('commons/closer.mod.js');

    it('打开url: {{url}}', async function(){
        await driver.url(_(`{{url}}`));
    });

    it('等待页面加载... ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('断言: 首页SEPHORA logo 图片比对误差 < {{imgdiff}}', async function(){
        let self = this;
        let imgBasePath = self.diffbasePath + '/' + self.caseName + '_' + self.stepId + '.png';
        let imgNewPath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId + '_new.png';
        let imgDiffPath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId + '_diff.png';
        let elemshot = await driver.sleep(300).getScreenshot({
            elem: 'div.search-info-content-logo > a > img',
            filename: imgNewPath
        });
        elemshot = new Buffer(elemshot, 'base64');
        if(!fs.existsSync(imgBasePath) || process.env['npm_config_rebuilddiff']){
            fs.writeFileSync(imgBasePath, elemshot);
        }
        let diff = resemble(elemshot).compareTo(imgBasePath).ignoreColors();
        let diffResult = await new Promise((resolve) => diff.onComplete(resolve));
        diffResult.getDiffImage().pack().pipe(fs.createWriteStream(imgDiffPath));
        diffResult.rawMisMatchPercentage
            .should.below(_('{{imgdiff}}'));
    });

    it('断言：搜索栏显示', async function(){
        await driver.sleep(300).wait('div.search-info-content-inputBox', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('断言：迷你购物车显示', async function(){
        await driver.sleep(300).wait('div.search-info-content-miniCart-main', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('断言：顶部导航栏显示', async function(){
        await driver.sleep(300).wait('div.top-content', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('断言：页面root显示', async function(){
        await driver.sleep(300).wait('div.site', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：热门', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a.title', 30000)
               .sleep(300).mouseMove(105, 13);
    });

    it('断言：热门浮层显示', async function(){
        await driver.sleep(1000).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：功效', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a.title', 30000)
               .sleep(300).mouseMove(45, 14);
    });

    it('断言：功效浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：护肤', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > a.title', 30000)
               .sleep(300).mouseMove(51, 20);
    });

    it('断言：护肤浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：彩妆', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > a.title', 30000)
               .sleep(300).mouseMove(157, 12);
    });

    it('断言：彩妆浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：香水', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > a.title', 30000)
               .sleep(300).mouseMove(132, 12);
    });

    it('断言：香水浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：工具', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > a.title', 30000)
               .sleep(300).mouseMove(158, 6);
    });

    it('断言：工具浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：男士护肤', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > a.title', 30000)
               .sleep(300).mouseMove(174, 13);
    });

    it('断言：男士护肤浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：洗浴护体', async function(){
        await driver.sleep(300).wait('li:nth-child(8) > a.title', 30000)
               .sleep(300).mouseMove(106, 19);
    });

    it('断言：洗浴护体浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('鼠标悬停类目：美发护发', async function(){
        await driver.sleep(300).wait('li:nth-child(9) > a.title', 30000)
               .sleep(300).mouseMove(114, 10);
    });

    it('断言：美发护发浮层显示', async function(){
        await driver.sleep(300).wait('div.navigation-info-content-menu > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', 30000)
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
