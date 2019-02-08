# foresee-sdk-ionic-sample
This is a test app for testing the ForeSee cordova plugin. This app uses Ionic.

Note that if you use ionic serve and this loads in a browser, the cordova plugins may not work. Always run this on an emulated / real device.

## Install Dependencies
Regardless of platform, run the following command in the project's root directory:

`$ npm install`

## Android Installation:
1. Add the Android platform:

   `$ cordova platform add android`
1. Build and run:

   ```
   $ ionic build android
   $ ionic cordova run android
   ```

## iOS Installation
1. Add the iOS platform: 

   `$ cordova platform add ios`

   Note: you should expect to see the following error in the command's output:

   ```
   Discovered plugin "cordova-plugin-foresee" in config.xml. Adding it to the project
   Installing "cordova-plugin-foresee" for ios
   Failed to install 'cordova-plugin-foresee': Error: pod: Command failed with exit code 1
        at ChildProcess.whenDone (/Users/wayne.burkett/foresee/test/foresee-cordova-test-app-qa/platforms/ios/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
        at emitTwo (events.js:106:13)
        at ChildProcess.emit (events.js:191:7)
        at maybeClose (internal/child_process.js:877:16)
        at Socket.<anonymous> (internal/child_process.js:334:11)
        at emitOne (events.js:96:13)
        at Socket.emit (events.js:188:7)
        at Pipe._handle.close [as _onclose] (net.js:498:12)
   Failed to restore plugin "cordova-plugin-foresee" from config.xml. You might need to try adding it again. Error: Error: pod: Command failed with exit code 1
   ```

   This is a [known Cordova issue](https://issues.apache.org/jira/browse/CB-13597), which we'll address in the next few steps.
1. Go to the iOS dir: 

   `$ cd platforms/ios`
1. Open the `Podfile` in an editor and modify the `platform` line to read `platform :ios, '10.0'`. (This addresses the issue noted above.)
1. Update pods: 

   `$ pod install`
1. Go back to original folder: 

   `$ cd ../..`
1. Build and run:

   ```
   $ ionic cordova build ios
   $ ionic cordova run ios
   ```

   Or run:
   
   `$ ionic cordova emulate ios`

   As of Xcode 10.x you'll need to add the `UseModernBuildSystem=0` build flag: 

   `$ ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"`

   You probaby also want to specify a target (e.g. `--target="iPhone-X, 12.0"`). Putting it all together:

   `$ ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0" --target="iPhone-X, 12.0"`

## Images
1. Application Icon & Splash Screen images:
        
     This is accomplished by using the ionic resource generator, see https://ionicframework.com/docs/cli/cordova/resources/

1. Invitation Logo And Header:

     The invitation logo and header file locations must be referenced from the config.xml file and target the corresponding platform's image directories. Note that the directory path will differ for android vs iOS.

     Android example:

     `<resource-file src="resources/invite_logo.png" target="app/src/main/res/drawable/invite_logo.png" />`

     iOS example:

     `<resource-file src="resources/invite_logo.png" target="invite_logo.png" />`