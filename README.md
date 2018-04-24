![image](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524554414045&di=394a67c00d589c5b391781df40e4abd7&imgtype=0&src=http%3A%2F%2Fimgcache.dealmoon.com%2Fthumbimg.dealmoon.com%2Fdealmoon%2Ffb5%2Fc0a%2Fff9%2F0f220119ebb372f1f5f4460.jpg_300_0_13_ffb1.jpg)
![image](https://camo.githubusercontent.com/742fc8b623bbcfd2aa85322862c4db0061bb53fa/68747470733a2f2f7261772e6769746875622e636f6d2f616c69626162612f75697265636f726465722f6d61737465722f6c6f676f2e706e67) 
================

环境准备
================
1. 安装Node.js: https://nodejs.org/ (version >= v7.x)
2. 配置权限: sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share} (Mac, Linux)
3. 安装chrome: https://www.google.com/chrome/
4. 安装UI Recorder: npm install uirecorder mocha -g
5. 编辑~/.npmrc: 添加registry = https://registry.npm.taobao.org
6. 进到项目根目录安装依赖: npm install
7. 安装selenium-standalone: node_modules/selenium-standalone/bin/selenium-standalone install
8. 启动服务器(运行测试需要): node_modules/selenium-standalone/bin/selenium-standalone start
9. 安装homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
10. 安装GraphicsMagick(图片比对): brew install graphicsmagick


UIRecorder PC标准入门
================

https://github.com/alibaba/uirecorder/blob/master/doc/zh-cn/pc-standard.md

Get more info: [http://uirecorder.com/](http://uirecorder.com/)

How to run all test cases?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows )

How to run specific test case?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows ) test_cases/home.spec.js


How to dock jenkins?
================

1. Add commands

        source ./install.sh
        source ./run.sh

2. Add reports

    > JUnit: reports/index.xml

    > HTML: reports/
