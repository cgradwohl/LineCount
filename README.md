#### Please write a Node command line app that shows line count of source files, visiting sub-directories recursively.


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

1. Use asynchronous fs methods.

2. Use Promises.

3. Support both Unix ("\n") and Windows ("\r\n") end of lines,
advanced features like ignoring comments are not required.

4. Make sure it works on directories with many items.

5. Please note the output shows the directory hierarchy as a tree-like structure.
Child directories are indented under their parent directory.
(Spaces are replaced with hyphens for depiction. Use spaces in your app).

6. Each directory shows a sum of its subdirectories and files.

7. write production quality code, not just working code.

8. zip your final program, rename it to zipped.pdf to work around a content
filtering, and send it to me via email attachment for review. This is not timed,
but your prompt answer would be appreciated.

```
> files
[ [ 'file1.js', 'file2.js' ],
  [ 'file1.js', 'file2.js', 'file3.js' ],
  [ 'file1.js' ] ]
> dirs
[ 'path1', 'path2', 'path3' ]
> map
Map {}
> for( let i=0; i<dirs.length; i++){
... map.set(dirs[i], files[i]);
... }
Map {
  'path1' => [ 'file1.js', 'file2.js' ],
  'path2' => [ 'file1.js', 'file2.js', 'file3.js' ],
  'path3' => [ 'file1.js' ] }
> map
Map {
  'path1' => [ 'file1.js', 'file2.js' ],
  'path2' => [ 'file1.js', 'file2.js', 'file3.js' ],
  'path3' => [ 'file1.js' ] }
> map[1]
undefined
> map.forEach( (value, key) => {
... console.log(key, '=', value);
... }
... )
path1 = [ 'file1.js', 'file2.js' ]
path2 = [ 'file1.js', 'file2.js', 'file3.js' ]
path3 = [ 'file1.js' ]
undefined
```
