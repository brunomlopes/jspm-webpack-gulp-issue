# jspm-webpack-gulp-issue

Try to get jspm, webpack and gulp to play along.
Currently fails because SystemJS creates a global.System.import, and webpack depends on loader-runner@2.4.0 which tests for global.System.Import and uses that if it exists.

# How to get the issue to appear:

> npm run this-fails

```
jspm-webpack [master]> npm run this-fails

> jspm-webpack-gulp@1.0.0 this-fails D:\documents\dev\jspm-webpack
> gulp

[11:22:55] Using gulpfile D:\documents\dev\jspm-webpack\gulpfile.js
[11:22:55] Starting 'default'...
(node:9164) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'default' of undefined
    at D:\documents\dev\jspm-webpack\node_modules\loader-runner\lib\loadLoader.js:6:67
    at <anonymous>
(node:9164) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:9164) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
[11:22:55] Error bundling 'webpack':
Hash: 788db336507bcea9ac1e
Version: webpack 4.39.2
Time: 94ms
Built at: 2019-09-02 11:22:55
   Asset      Size  Chunks             Chunk Names
index.js  4.36 KiB   index  [emitted]  index
Entrypoint index = index.js
[./src/index.js] 537 bytes {index} [not cacheable] [built] [failed] [1 error]

ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
(SystemJS) ENOENT: no such file or directory, open 'D:\documents\dev\jspm-webpack\D:\documents\dev\jspm-webpack\node_modules\babel-loader\lib\index.js'
        Error: ENOENT: no such file or directory, open 'D:\documents\dev\jspm-webpack\D:\documents\dev\jspm-webpack\node_modules\babel-loader\lib\index.js'
        Error loading D:/documents/dev/jspm-webpack/D:\documents\dev\jspm-webpack\node_modules\babel-loader\lib\index.js
[11:22:55] Finished 'default' after 230 ms
```
