import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableHighlight, Linking, } from 'react-native';

const DATA = [
    {
        id: '1',
        name: 'Wildberries',
        link: 'wildberries.ru',
        description: 'одежда, обувь и аксессуары',
    },
    {
        id: '2',
        name: 'Citilink',
        link: 'citilink.ru',
        description: 'электроника и техника',
    },
    {
        id: '3',
        name: 'mvideo',
        link: 'mvideo.ru',
        description: 'электроника и техника',
    },
    {
        id: '4',
        name: 'ozon',
        link: 'ozon.ru',
        description: 'универсальные магазины',
    },
    {
        id: '5',
        name: 'dns-shop',
        link: 'dns-shop.ru',
        description: 'электроника и техника',
    },
    {
        id: '6',
        name: 'lamoda',
        link: 'lamoda.ru',
        description: 'одежда, обувь и аксессуары',
    },
    {
        id: '7',
        name: 'petrovich',
        link: 'petrovich.ru',
        description: 'товары для дома',
    },
    {
        id: '8',
        name: 'apteka',
        link: 'apteka.ru',
        description: 'красота и здоровье',
    },
    {
        id: '9',
        name: 'utkonos',
        link: 'utkonos.ru',
        description: 'FMCG',
    },

];

const Item = ({ name, description, link }) => (
    <View style={styles.item}>
        <View style={styles.itemInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.itemLink}>
            <TouchableHighlight
                style={styles.linkButton}
                onPress={() =>
                    Linking.openURL(`https://${link}`)
                }>
                <View style={styles.linkText}>
                    <Text>Shop Now</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>
);

const MerchantList = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} description={item.description} link={item.link} />
    );
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemInfo: {
        flexDirection: 'column'
    },
    itemLink: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    name: {
        fontSize: 20,
    },
    description: {
        fontSize: 14,
    },
    linkButton: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
    },
    linkText: {
        fontSize: 14,
    },
});

export default MerchantList;