package com.blogapp.modules.notification;

import android.app.Notification;
import android.app.NotificationManager;
import android.support.v4.app.NotificationCompat;
import android.R;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.common.MapBuilder;

import java.util.Map;

/**
 * {@link NativeModule} that allows JS to show a notification.
 */
public class NotificationModule extends ReactContextBaseJavaModule {

  private static final String DRAWABLE_STAT_NOTIFICATION = "NOTIFICATION";

  public NotificationModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "NotificationAndroid";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = MapBuilder.newHashMap();
    constants.put(DRAWABLE_STAT_NOTIFICATION, R.drawable.ic_popup_sync);
    return constants;
  }

  @ReactMethod
  public void show(String message, String title, int drawable, int notificationID) {
    NotificationCompat.Builder mBuilder =
			new NotificationCompat.Builder(getReactApplicationContext())
			.setSmallIcon(drawable)
			.setContentTitle(title)
			.setContentText(message);

	NotificationManager mNotificationManager = (NotificationManager)
                getReactApplicationContext().getSystemService(getReactApplicationContext().NOTIFICATION_SERVICE);
        // Including the notification ID allows you to update the notification later on.
        mNotificationManager.notify(notificationID, mBuilder.build());
  }
  
}
