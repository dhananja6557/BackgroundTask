https://github.com/voximplant/react-native-foreground-service?tab=readme-ov-file

npm install @voximplant/react-native-foreground-service --save

// Change react-native-foreground-service build.gradle
node_modules > @voximplant > android > build.gradle

   Change versions as in android > build.gradle

// Permissions
<uses-permission android:name="android.permission.WAKE_LOCK"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>

// Add end of Android Tag
<service android:name="com.voximplant.foregroundservice.VIForegroundService"> </service>