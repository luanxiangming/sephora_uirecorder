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

    callSpec('commons/brand_product.mod.js');

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('expect: attr, a.category-list-detail-btn,class, equal, category-list-detail-btn', async function(){
        await driver.sleep(300).wait('a.category-list-detail-btn', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`category-list-detail-btn`));
    });

    it('click: 护肤 ( a.category-list-detail-btn, 14, 11, 0 )', async function(){
        await driver.sleep(300).wait('a.category-list-detail-btn', 30000)
               .sleep(300).mouseMove(14, 11).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('expect: attr, a.category-list-detail-btn,class, equal, category-list-detail-btn category-list-detail-active', async function(){
        await driver.sleep(300).wait('a.category-list-detail-btn', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`category-list-detail-btn category-list-detail-active`));
    });

    it('expect: text, li.hasMore, equal, 更多选项', async function(){
        await driver.sleep(300).wait('li.hasMore', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`更多选项`));
    });

    it('click: 更多选项 ( li.hasMore, 64, 13, 0 )', async function(){
        await driver.sleep(300).wait('li.hasMore', 30000)
               .sleep(300).mouseMove(64, 13).click(0);
    });

    it('expect: text, li.fold_menu, equal, 精简选项', async function(){
        await driver.sleep(300).wait('li.fold_menu', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`精简选项`));
    });

    it('expect: displayed, ul.filter_item_cont, equal, true', async function(){
        await driver.sleep(300).wait('ul.filter_item_cont', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('expect: displayed, div.cate_prod_cont, equal, true', async function(){
        await driver.sleep(300).wait('div.cate_prod_cont', 30000)
            .displayed()
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('click: 更多 ( li:nth-child(4) > div.brand_btn > div.s_s_btn > a.show_more, 21, 5, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > div.brand_btn > div.s_s_btn > a.show_more', 30000)
               .sleep(300).mouseMove(21, 5).click(0);
    });

    it('expect: attr, li:nth-child(4) > ul.filter_if > li:nth-child(1),class, equal, if_li', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > ul.filter_if > li:nth-child(1)', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`if_li`));
    });

    it('expect: attr, ul.filter_if > li:nth-child(8),class, equal, if_li', async function(){
        await driver.sleep(300).wait('ul.filter_if > li:nth-child(8)', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`if_li`));
    });

    it('click: 保湿补水 ( li:nth-child(4) > ul.filter_if > li:nth-child(1) > a > i, 39, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > ul.filter_if > li:nth-child(1) > a > i', 30000)
               .sleep(300).mouseMove(39, 8).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: 保湿补水 ( a.if_li_item > i, 25, 7, 2 )', async function(){
        await driver.sleep(300).wait('a.if_li_item > i', 30000)
               .sleep(300).mouseMove(25, 7).click(2);
    });

    it('expect: attr, a.if_li_item,class, equal, if_li_item', async function(){
        await driver.sleep(300).wait('a.if_li_item', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`if_li_item`));
    });

    it('click: 更多 ( li.filter_item_line > div.brand_btn > div.s_s_btn > a.show_more, 21, 1, 0 )', async function(){
        await driver.sleep(300).wait('li.filter_item_line > div.brand_btn > div.s_s_btn > a.show_more', 30000)
               .sleep(300).mouseMove(21, 1).click(0);
    });

    it('click: 淡化细纹 ( li.filter_item_line > ul.filter_if > li:nth-child(2) > a > i, 34, 3, 0 )', async function(){
        await driver.sleep(300).wait('li.filter_item_line > ul.filter_if > li:nth-child(2) > a > i', 30000)
               .sleep(300).mouseMove(34, 3).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: 多选 ( li.filter_item_line > div.brand_btn > div.s_s_btn > a.select_more, 13, 8, 0 )', async function(){
        await driver.sleep(300).wait('li.filter_item_line > div.brand_btn > div.s_s_btn > a.select_more', 30000)
               .sleep(300).mouseMove(13, 8).click(0);
    });

    it('click: 保湿补水 ( li.filter_item_line > ul.filter_if > li:nth-child(2) > a > i, 33, 7, 0 )', async function(){
        await driver.sleep(300).wait('li.filter_item_line > ul.filter_if > li:nth-child(2) > a > i', 30000)
               .sleep(300).mouseMove(33, 7).click(0);
    });

    it('click: 确定 ( a.confirm, 28, 10, 0 )', async function(){
        await driver.sleep(300).wait('a.confirm', 30000)
               .sleep(300).mouseMove(28, 10).click(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('expect: attr, li:nth-child(1) > a.if_li_item,class, equal, if_li_item', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a.if_li_item', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`if_li_item`));
    });

    it('expect: attr, li:nth-child(2) > a.if_li_item,class, equal, if_li_item', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a.if_li_item', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`if_li_item`));
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
