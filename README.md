# Working on Practice Problems
The directories 01_recursion, 02_binary_search, and 03_merge_sort, all have files with problem descriptions, a function skeleton, and tests that the implemented function should pass. A problem is complete, once all tests are passed (i.e. they all equal true).

# Node.js
[Node.js](https://nodejs.org/en/) is used to run JavaScript code and node commands.

[Node Version Manager](https://github.com/nvm-sh/nvm) installs and manages Node.js so that there are not conflicts betwene versions and dependencies.

## Setup Node.js (on mac)
Do the following in your terminal...

### download and run the official install script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

### update your terminal config (you will now have access to the nvm command)
source ~/.bashrc

### install a stable version of node
nvm install 10.13.0

### set version 10.13.0 as default version
nvm use 10.13.0

### verify install/config
which node # => /Users/username/.nvm/versions/node/v10.13.0/bin/node

## Execute a script in Node
In your terminal type: node <your_script>.js

## Running practice problems
Visit [practice problems README](./04_practice_problems/README.md)