# React-BlogApp

First of all, I use to work with Visual Studio and I love using TypeScript for JS frameworks, so this project is focused in React Framework using VS and TypeScript, however there is no definitelytyped repository for react-native but @bgrieder has created a <a hfref="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/6651">PR</a>.
I won't use typescript in this project until the the react-native definitelytyped repository is not published.


I begun creating a Typescript-React project (React-ReactJSTypeScript) and after that a React-Native project (React-ReactNativeHello).


This is another experiment to see how can I reuse business logic between a React web and the react-native Apps.
For now it's just the skeleton (web and android), as I didn't reuse anything, but I could make it work with Visual Studio, the web compiler extension for JSX files and the android emulator.

Also I have created a React Native module for notifications as it's missing from the react native android Apis. 
This is pretty cool because in theory is one of the most advanced features.

<h4>Let's create the environment</h4>

Sorry, if the below steps don't work for you. I am making changes to the project and maybe there are missing node dependencies or I forgot to write down something.
If you are using Visual Studio 2015 and you have installed the web compiler extension, we can start.

1- Follow carefully the <a href="https://facebook.github.io/react-native/docs/getting-started.html#content">React Native QuickStart guide </a>.

2- Once you have everything up and running, clone this repository using the VS github extension.

3- Run the "npm install" command on both BlogApp and BlogApp/BlogApp folders and you should be done.


If you run the web site it will work.
If you run the android app and you are using Windows don't forget to run the "node node_modules/react-native/packager/packager.js" command on the "BlogApp/BlogApp" path and then "react-native run-android"

Hope this help.



