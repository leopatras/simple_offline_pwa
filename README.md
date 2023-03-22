# Offline PWA using browser caches
This is a simple html/JS project demonstrating preloading of PWA assets with long browser caching.


The needed test2.html asset is pre loaded (in simple.js) with fetch API calls.
Switching off the network and click on Page2 shows that the built-in browser caches are sufficient as long as the server did put a long cache time while serving. 


As Chrome/Edge demand a service worker for providing an install button in the address bar a skeleton service worker is provided which simply tunnels requests thru. 

No extra service worker caches are needed.


A suitable .htaccess file is included (follow instructions in the file to make apache serving the files long cached).

Test offline in Chrome/Edge(desktop): After navigating to the page: Click  the install button in the address bar.
After that you have the web page/app installed  under chrome://apps / edge://apps. Switch off network, start the app and click on the "Click PAGE 2 when offline" link. It should appear.

Test offline in FF/Safari: Navigate to the page
Switch off network and click on the "Click PAGE 2 when offline" link. It should appear.      

Test offline in Safari mobile:
Navigate to the page and add the page to the home screen.
Tap on the home screen to start the page once from there.
(If you switch off network before running once from home screen it won't work)
Switch off network.
Tap on "Click PAGE 2 when offline". It should appear. 

Test offline in FF mobile:
Navigate to the page and switch off network.
Tap on "Click PAGE 2 when offline". It should appear. 


Test offline in Chrome mobile:
Navigate to the page.
Tap "Add Off App to Home Screen".
Switch off network.
Tap the "Off App" on the home screen.
It should appear and make navigating to page2 possible. 

