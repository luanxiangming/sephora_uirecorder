UI Recorder test sample project
================

It's a UI Recorder test sample project.

Save your test code here.

Get more info: [http://uirecorder.com/](http://uirecorder.com/)

Start Selenium server before case running
================
node_modules/selenium-standalone/bin/selenium-standalone start

How to run all test cases?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows )

How to run specific test case?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows ) sample/login.spec.js


How to dock jenkins?
================

1. Add commands

        source ./install.sh
        source ./run.sh

2. Add reports

    > JUnit: reports/index.xml

    > HTML: reports/
