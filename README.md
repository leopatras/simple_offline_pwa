# Offline PWA using browser caches
This is a simple html/JS project demonstrating preloading of PWA assets with long browser caching.


The needed test2.html asset is pre loaded (in simple.js) with fetch API calls.
Switching off the network and click on Page2 shows that the built-in browser caches are sufficient as long as the server did put a long cache time while serving. 


As Chrome/Edge demand a service worker for providing an install button in the address bar a skeleton service worker is provided which simply tunnels requests thru. 

No extra service worker caches are needed.


A suitable .htaccess file is included (follow instructions in the file to make apache serving the files long cached).

