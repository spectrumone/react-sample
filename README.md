# react-sample
Sample of what React can do using the sample from http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/

###Offline Transform of JSX
First install the Babel command-line tools (requires npm):
* `npm install --global babel-cli`
* `npm install babel-preset-react`


Then, translate your jsx file to plain JavaScript:
* `babel --presets react static --watch --out-dir build`
