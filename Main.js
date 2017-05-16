import React, { Component } from 'react';
//import Button from 'react-native-button';
import {
    Text,
} from 'react-native';
import Hotcontract from './Hotcontract.js';

import ScrollableTabView,{ DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar />}>
                <Text tabLabel='分類'>健康</Text>
                <Hotcontract tabLabel='熱門合約'></Hotcontract>
                <Text tabLabel='最新合約'>project</Text>
                <Text tabLabel='追蹤的合約'>project</Text>
                <Text tabLabel='參與的合約'>project</Text>
            </ScrollableTabView>
        );
}
}
 