import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import AmplifyRTNPushNotification
import RNShareMenu

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    AmplifyPushNotification.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
  }

  override func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    AmplifyPushNotification.didReceiveRemoteNotification(userInfo, withCompletionHandler: completionHandler)
  }

  override func application(_ app: UIApplication,
                              open url: URL,
                              options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    let handledByShareMenu = ShareMenuManager.application(app, open: url, options: options)
    let handledByLinkingManager = RCTLinkingManager.application(app, open: url, options: options)
    return handledByShareMenu || handledByLinkingManager
  }

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "VocablyPro"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
