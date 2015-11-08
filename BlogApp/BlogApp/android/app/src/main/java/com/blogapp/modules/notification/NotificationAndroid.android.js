/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NotificationAndroid
 */

'use strict';

var RCTNotificationAndroid = require('NativeModules').NotificationAndroid;

/**
 * This exposes the native NotificationAndroid module as a JS module. This has a function 'showText'
 * which takes the following parameters:
 *
 * 1. String mesage: A string with the notification message
 * 2. String title: A string with the notification title
 * 3. int drawable: An integer with the notification icon
 * 4. int notificationID: An integer with the notification ID
 */

var NotificationAndroid = {

    NOTIFICATION: RCTNotificationAndroid.NOTIFICATION,

    show: function (
        message: string,
        title: string,
        drawable:int,
        notificationID: int,
    ): void {
        RCTNotificationAndroid.show(message, title, drawable, notificationID);
    },

};

module.exports = NotificationAndroid;
