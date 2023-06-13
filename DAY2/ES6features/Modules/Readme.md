1. include all js files in html as src.
    Issues: 
    a. the order of dependency is required.
    b. The files are downloaded one by one.
    c. Html has to know about this all the time

2. Have each file be a module of exported and private functions
    a. Html file knows the first file and the rest are downloaded 
       when this file executes




Multiple Typed exports - 
While importing
** import {x, y, z} from  ./file.js

Only one Default export - Use default keyword when exporting
While importing - skip the { } braces.
** import Add from ./file.js
** import Addition from ./file.js

Both work
- Addition is an alias.
- This can be any value.