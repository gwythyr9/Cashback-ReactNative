import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableHighlight, Linking, } from 'react-native';
import { LIST_DATA } from '../../utils/listData';



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
            data={LIST_DATA}
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