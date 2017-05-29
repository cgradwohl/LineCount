#### A Node command line app that shows line count of source files, visiting sub-directories recursively.


`$ node line-count.js /my/test/project`


```
/my/test/project/ = 100 files, 10000 lines

--src/ = 50 files, 5000 lines

----components/ = 10 files, 1000 lines

------widgets/ = 8 files, 900 lines

------beta/ = 2 files, 100 lines

----views/ = 40 files, 4000 lines

--test/ = 50 files, 500 lines

----lib/ = 30 files, 100 lines

----src/ = 20 files, 400 lines
```


#### Load a configuration file from the target directory if exists. Use a default configuration if the file doesn’t exist at the target.


`$ cat /my/test/project/.line-count.json`


```
{

"exclude": [

"node_modules",

"test/fixture"

],

"extensions": [

".js", ".jsx", ".json"

]

}
```


#### Notes:

1. write production quality code, not just working code.

2. Use asynchronous fs methods.

3. Use Promises.

4. Support both Unix ("\n") and Windows ("\r\n") end of lines,
advanced features like ignoring comments are not required.

5. Make sure it works on directories with many items.

6. @TODO Please note the output shows the directory hierarchy as a tree-like structure.
Child directories are indented under their parent directory.
(Spaces are replaced with hyphens for depiction. Use spaces in your app).

7. @TODO Each directory shows a sum of its subdirectories and files.

8. @TODO zip your final program, rename it to zipped.pdf to work around a content
filtering, and send it to me via email attachment for review. This is not timed,
but your prompt answer would be appreciated.


<!--  NOTES:

      1. Currently we are using bluebird to turn every object on the fs module
      into a promise.

          - Instead we should just turn fs.stat() and fs.readdir() into promises
          without using bluebird!

      2. The design should be documented and added to the repo as.

      3. Compose Promises to write better code.


-->


<!--  STYLE GUIDE:

      1. file header:

      /**
      * One line description
      *
      * @param {Type} name - description
      * @return {Type}
      */

-->
