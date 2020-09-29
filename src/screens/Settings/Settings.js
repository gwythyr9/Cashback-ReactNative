import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MerchantList from '../../components/MerchantList/MerchantList';

const Settings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MerchantList />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

});

export default Settings;
