/**
 * @format
 */

import { AppRegistry, DeviceEventEmitter } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CashbackModule from 'ae-cashback-library'; 
import { MERCHANTS } from './src/utils/merchants.js';

AppRegistry.registerComponent(appName, () => App);

CashbackModule.isAccessibilityEnabled((res) => {
    res ? console.log("already enabled") : CashbackModule.openAccessibilitySettings("open aa service");
});

CashbackModule.enableSuccessIcon(false);


DeviceEventEmitter.addListener('cashbackDomains', function (e: Event) {
    console.log("start new event", "coupons domains");
    CashbackModule.setCashbackDomains(MERCHANTS);
});

DeviceEventEmitter.addListener('merchantByIdCashback', function (data: Event) {

    console.log(`start new event ${data}`);
    let found = MERCHANTS.filter((el) => el.merchant_id === data.merchantId);
    CashbackModule.setMerchantCashbackData(found[0])

});
