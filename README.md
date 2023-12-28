# p5js-js-global-mode-starter

A starter project for coding p5.js in JavaScript.

While we recommend you use [OpenProcessing](https://openprocessing.org/) (or the [p5.js web editor](https://editor.p5js.org/)) to play with p5.js most of the time, this example project is useful if you want to develop locally using (for example) vscode, and perhaps version control.

### Components:

-   index.html - loaded first.
-   p5.js libraries loaded by index.html
-   "js/mySketch.js" - the code for our main p5.js "sketch", loaded by index.html
-   `js/myPalettes.js` - a second javascript file supporting the sketch, also loaded by index.html

# installation / running:

1. Visit this project in GitHub and use the "Use as template" to make your own repo from this template.
2. use git to clone your repo to your development machine
3. open the project in vscode
4. [Install the Live Server vscode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
5. right click on index.html
6. choose "open with live server" (or similar)
7. this should automatically launch your browser to view the html file which in turn will load the mySketch.js and the p5.js library.
8. edit mySketch.js and save the changes - you should immediately be able to observe the changes in the browser.
9. look for errors in the browser js console
10. have fun coding!

Please note we DO NOT use Live Server at all for React development!

## See also 
* [a starter for p5.js with typescript (traditional global mode)](https://github.com/WeAreAcademy/academy-p5js-ts-global-mode-starter)
* [a starter for p5.js with typescript (instance mode - supports ESModules)](https://github.com/nbogie/p5-ts-starter-23)
