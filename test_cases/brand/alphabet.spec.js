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

    callSpec('commons/brand.mod.js');

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('click: A ( div.Alphabet > ul.alphabets > li.changeBg, 20, 36, 0 )', async function(){
        await driver.sleep(300).wait('div.Alphabet > ul.alphabets > li.changeBg', 30000)
               .sleep(300).mouseMove(20, 36).click(0);
    });

    it('scrollTo: 0, 197', async function(){
        await driver.scrollTo(0, 197);
    });

    it('expect: attr, div.Alphabet > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.Alphabet > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(1) > div.BrandTitle > span, equal, A', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`A`));
    });

    it('click: B ( div.Alphabet > ul.alphabets > li:nth-child(2), 8, 27, 0 )', async function(){
        await driver.sleep(300).wait('div.Alphabet > ul.alphabets > li:nth-child(2)', 30000)
               .sleep(300).mouseMove(8, 27).click(0);
    });

    it('scrollTo: 0, 496', async function(){
        await driver.scrollTo(0, 496);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(2) > div.BrandTitle > span, equal, B', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`B`));
    });

    it('click: C ( div.layout > ul.alphabets > li:nth-child(3), 20, 40, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(3)', 30000)
               .sleep(300).mouseMove(20, 40).click(0);
    });

    it('scrollTo: 0, 795', async function(){
        await driver.scrollTo(0, 795);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(3) > div.BrandTitle > span, equal, C', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`C`));
    });

    it('click: D ( div.layout > ul.alphabets > li:nth-child(4), 11, 39, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(4)', 30000)
               .sleep(300).mouseMove(11, 39).click(0);
    });

    it('scrollTo: 0, 1213', async function(){
        await driver.scrollTo(0, 1213);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(4) > div.BrandTitle > span, equal, D', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`D`));
    });

    it('click: E ( div.layout > ul.alphabets > li:nth-child(5), 22, 46, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(5)', 30000)
               .sleep(300).mouseMove(22, 46).click(0);
    });

    it('scrollTo: 0, 1512', async function(){
        await driver.scrollTo(0, 1512);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(5) > div.BrandTitle > span, equal, E', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`E`));
    });

    it('click: F ( div.layout > ul.alphabets > li:nth-child(6), 9, 23, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(6)', 30000)
               .sleep(300).mouseMove(9, 23).click(0);
    });

    it('scrollTo: 0, 1692', async function(){
        await driver.scrollTo(0, 1692);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(6) > div.BrandTitle > span, equal, F', async function(){
        await driver.sleep(300).wait('div:nth-child(6) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`F`));
    });

    it('click: G ( div.layout > ul.alphabets > li:nth-child(7), 27, 29, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(7)', 30000)
               .sleep(300).mouseMove(27, 29).click(0);
    });

    it('scrollTo: 0, 1991', async function(){
        await driver.scrollTo(0, 1991);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(7) > div.BrandTitle > span, equal, G', async function(){
        await driver.sleep(300).wait('div:nth-child(7) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`G`));
    });

    it('click: H ( div.layout > ul.alphabets > li:nth-child(8), 22, 39, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(8)', 30000)
               .sleep(300).mouseMove(22, 39).click(0);
    });

    it('scrollTo: 0, 2290', async function(){
        await driver.scrollTo(0, 2290);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(8) > div.BrandTitle > span, equal, H', async function(){
        await driver.sleep(300).wait('div:nth-child(8) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`H`));
    });

    it('click: I ( div.layout > ul.alphabets > li:nth-child(9), 19, 37, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(9)', 30000)
               .sleep(300).mouseMove(19, 37).click(0);
    });

    it('scrollTo: 0, 2470', async function(){
        await driver.scrollTo(0, 2470);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(9) > div.BrandTitle > span, equal, I', async function(){
        await driver.sleep(300).wait('div:nth-child(9) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`I`));
    });

    it('click: J ( div.layout > ul.alphabets > li:nth-child(10), 19, 47, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(10)', 30000)
               .sleep(300).mouseMove(19, 47).click(0);
    });

    it('scrollTo: 0, 2650', async function(){
        await driver.scrollTo(0, 2650);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(10) > div.BrandTitle > span, equal, J', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`J`));
    });

    it('click: K ( div.layout > ul.alphabets > li:nth-child(11), 30, 21, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(11)', 30000)
               .sleep(300).mouseMove(30, 21).click(0);
    });

    it('scrollTo: 0, 2830', async function(){
        await driver.scrollTo(0, 2830);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(11) > div.BrandTitle > span, equal, K', async function(){
        await driver.sleep(300).wait('div:nth-child(11) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`K`));
    });

    it('click: L ( div.layout > ul.alphabets > li:nth-child(12), 26, 24, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(12)', 30000)
               .sleep(300).mouseMove(26, 24).click(0);
    });

    it('scrollTo: 0, 3010', async function(){
        await driver.scrollTo(0, 3010);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(12) > div.BrandTitle > span, equal, L', async function(){
        await driver.sleep(300).wait('div:nth-child(12) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`L`));
    });

    it('click: M ( div.layout > ul.alphabets > li:nth-child(13), 33, 39, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(13)', 30000)
               .sleep(300).mouseMove(33, 39).click(0);
    });

    it('scrollTo: 0, 3428', async function(){
        await driver.scrollTo(0, 3428);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(13) > div.BrandTitle > span, equal, M', async function(){
        await driver.sleep(300).wait('div:nth-child(13) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`M`));
    });

    it('click: N ( div.layout > ul.alphabets > li:nth-child(14), 23, 44, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(14)', 30000)
               .sleep(300).mouseMove(23, 44).click(0);
    });

    it('scrollTo: 0, 3846', async function(){
        await driver.scrollTo(0, 3846);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(14) > div.BrandTitle > span, equal, N', async function(){
        await driver.sleep(300).wait('div:nth-child(14) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`N`));
    });

    it('click: O ( div.layout > ul.alphabets > li:nth-child(15), 21, 26, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(15)', 30000)
               .sleep(300).mouseMove(21, 26).click(0);
    });

    it('scrollTo: 0, 4026', async function(){
        await driver.scrollTo(0, 4026);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(15) > div.BrandTitle > span, equal, O', async function(){
        await driver.sleep(300).wait('div:nth-child(15) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`O`));
    });

    it('click: P ( div.layout > ul.alphabets > li:nth-child(16), 24, 29, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(16)', 30000)
               .sleep(300).mouseMove(24, 29).click(0);
    });

    it('scrollTo: 0, 4206', async function(){
        await driver.scrollTo(0, 4206);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(16) > div.BrandTitle > span, equal, P', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`P`));
    });

    it('click: Q ( div.layout > ul.alphabets > li:nth-child(17), 22, 29, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(17)', 30000)
               .sleep(300).mouseMove(22, 29).click(0);
    });

    it('expect: attr, div.layout > ul.alphabets > li:nth-child(17),class, notContain, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(17)', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.not.contain(_(`changeBg`));
    });

    it('click: R ( div.layout > ul.alphabets > li:nth-child(18), 20, 38, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(18)', 30000)
               .sleep(300).mouseMove(20, 38).click(0);
    });

    it('scrollTo: 0, 4505', async function(){
        await driver.scrollTo(0, 4505);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(17) > div.BrandTitle > span, equal, R', async function(){
        await driver.sleep(300).wait('div:nth-child(17) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`R`));
    });

    it('click: S ( div.layout > ul.alphabets > li:nth-child(19), 26, 46, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(19)', 30000)
               .sleep(300).mouseMove(26, 46).click(0);
    });

    it('scrollTo: 0, 4685', async function(){
        await driver.scrollTo(0, 4685);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(18) > div.BrandTitle > span, equal, S', async function(){
        await driver.sleep(300).wait('div:nth-child(18) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`S`));
    });

    it('click: T ( div.layout > ul.alphabets > li:nth-child(20), 26, 24, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(20)', 30000)
               .sleep(300).mouseMove(26, 24).click(0);
    });

    it('scrollTo: 0, 5103', async function(){
        await driver.scrollTo(0, 5103);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(19) > div.BrandTitle > span, equal, T', async function(){
        await driver.sleep(300).wait('div:nth-child(19) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`T`));
    });

    it('click: U ( div.layout > ul.alphabets > li:nth-child(21), 15, 38, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(21)', 30000)
               .sleep(300).mouseMove(15, 38).click(0);
    });

    it('scrollTo: 0, 5402', async function(){
        await driver.scrollTo(0, 5402);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(20) > div.BrandTitle > span, equal, U', async function(){
        await driver.sleep(300).wait('div:nth-child(20) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`U`));
    });

    it('click: V ( div.layout > ul.alphabets > li:nth-child(22), 29, 14, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(22)', 30000)
               .sleep(300).mouseMove(29, 14).click(0);
    });

    it('scrollTo: 0, 5582', async function(){
        await driver.scrollTo(0, 5582);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(21) > div.BrandTitle > span, equal, V', async function(){
        await driver.sleep(300).wait('div:nth-child(21) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`V`));
    });

    it('click: W ( div.layout > ul.alphabets > li:nth-child(23), 13, 37, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(23)', 30000)
               .sleep(300).mouseMove(13, 37).click(0);
    });

    it('scrollTo: 0, 5762', async function(){
        await driver.scrollTo(0, 5762);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(22) > div.BrandTitle > span, equal, W', async function(){
        await driver.sleep(300).wait('div:nth-child(22) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`W`));
    });

    it('click: X ( div.layout > ul.alphabets > li:nth-child(24), 13, 24, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(24)', 30000)
               .sleep(300).mouseMove(13, 24).click(0);
    });

    it('expect: attr, div.layout > ul.alphabets > li:nth-child(24),class, notContain, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(24)', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.not.contain(_(`changeBg`));
    });

    it('expect: text, div:nth-child(22) > div.BrandTitle > span, equal, W', async function(){
        await driver.sleep(300).wait('div:nth-child(22) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`W`));
    });

    it('click: Y ( div.layout > ul.alphabets > li:nth-child(25), 19, 36, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(25)', 30000)
               .sleep(300).mouseMove(19, 36).click(0);
    });

    it('scrollTo: 0, 5942', async function(){
        await driver.scrollTo(0, 5942);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(23) > div.BrandTitle > span, equal, Y', async function(){
        await driver.sleep(300).wait('div:nth-child(23) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`Y`));
    });

    it('click: Z ( div.layout > ul.alphabets > li:nth-child(26), 14, 47, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(26)', 30000)
               .sleep(300).mouseMove(14, 47).click(0);
    });

    it('scrollTo: 0, 6122', async function(){
        await driver.scrollTo(0, 6122);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div:nth-child(24) > div.BrandTitle > span, equal, Z', async function(){
        await driver.sleep(300).wait('div:nth-child(24) > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`Z`));
    });

    it('click: 0-9 ( div.layout > ul.alphabets > li:nth-child(27), 26, 36, 0 )', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li:nth-child(27)', 30000)
               .sleep(300).mouseMove(26, 36).click(0);
    });

    it('scrollTo: 0, 6302', async function(){
        await driver.scrollTo(0, 6302);
    });

    it('expect: attr, div.layout > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.layout > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
    });

    it('expect: text, div.RemoveBottomLine > div.BrandTitle > span, equal, 0-9', async function(){
        await driver.sleep(300).wait('div.RemoveBottomLine > div.BrandTitle > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`0-9`));
    });

    it('click: li.returnTop > a > em.sprite_toolbar, 20, 19, 0', async function(){
        await driver.sleep(300).wait('li.returnTop > a > em.sprite_toolbar', 30000)
               .sleep(300).mouseMove(20, 19).click(0);
    });

    it('scrollTo: 0, 0', async function(){
        await driver.scrollTo(0, 0);
    });

    it('expect: attr, div.Alphabet > ul.alphabets > li.changeBg,class, equal, changeBg', async function(){
        await driver.sleep(300).wait('div.Alphabet > ul.alphabets > li.changeBg', 30000)
            .attr('class')
            .should.not.be.a('error')
            .should.equal(_(`changeBg`));
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
