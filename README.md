<<<<<<< HEAD
https://github.com/voximplant/react-native-foreground-service?tab=readme-ov-file

npm install @voximplant/react-native-foreground-service --save

// Change react-native-foreground-service build.gradle
node_modules > @voximplant > android > build.gradle

   Change versions as in android > build.gradle

// AndroidManifest.xml Permissions
<uses-permission android:name="android.permission.WAKE_LOCK"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>

// Add end of Android Tag
<service android:name="com.voximplant.foregroundservice.VIForegroundService"> </service>
=======
# BackgroundTask
>>>>>>> 034ca890ac3b63d8b70b3e28c554db8f2adafe85

npm i react-native-background-actions

https://www.npmjs.com/package/react-native-background-actions
https://github.com/Rapsssito/react-native-background-actions/blob/HEAD/INSTALL.md

// Add end of android tag into AndroidManifest.xml
<service android:name="com.asterinet.react.bgactions.RNBackgroundActionsTask" android:foregroundServiceType="shortService"/>


<!-- Send Github -->
git config --global user.email "info.bizlanka@gmail.com"
git config --global user.name "dhananja6557"

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dhananja6557/BackgroundTask.git
git push -u origin main

<!-- Recommit -->
git add .
git remote add origin https://github.com/dhananja6557/BackgroundTask.git
git commit -m "first commit 2"
git branch -M main
git push -u origin main

