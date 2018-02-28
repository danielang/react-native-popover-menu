/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {PureComponent} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ImageBackground
} from "react-native";

import RNPopover from 'react-native-popover-menu';

const en_politic = 'Politics';
const en_economic = 'Economics';
const en_sport = 'Sport';
const en_people = 'People';
const en_media = 'Media';
const en_science = 'Science';
const en_society = 'Society';
const en_surveys = 'Surveys';
const en_advice = 'Advice';
const en_newsticker = 'Newsticker';
const en_news24 = 'News 24';

export const CATEGORIES_EN_ARR = [en_politic, en_economic, en_sport, en_people, en_media, en_science, en_society, en_surveys, en_advice, en_newsticker, en_news24];


export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    handlePeriodPressed = () => {
        const { t } = this.props;

        const menus = [
            {
                label: 'Period',
                menus: [
                    {
                        label: 'Last week',
                    },
                    {
                        label: 'Last month',
                    },
                    {
                        label: 'Last 6 month',
                    },
                    {
                        label: 'Last year',
                    },
                ]
            }
        ];

        this.refPeriod && RNPopover.Show(this.refPeriod, {
            title: t('period'),
            menus,
            perferedWidth: 200,
            onDone: this.handlePeriodSelectionDone,
        });
    };

    handlePeriodSelectionDone = (index, menuIndex) => {
        // some code
    };

    handleCategoryPressed = () => {
        const categories = CATEGORIES_EN_ARR;

        const menus = [
            {
                label: 'Category',
                menus: categories.map((category, index) => {
                    return {
                        label: (index+1) + ' ' + category,
                    };
                })
            }
        ];

        this.refCategory && RNPopover.Show(this.refCategory, {
            title: 'Category',
            menus,
            onDone: this.handleCategorySelectionDone,
        });
    };

    handleCategorySelectionDone = (index, menuIndex) => {
        // some code
    };

    _refPeriod = (ref) => {
        this.refPeriod = ref;
    };

    _refCategory = (ref) => {
        this.refCategory = ref;
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'#bfbfbf'}
                    underlineColorAndroid={'transparent'}

                    placeholder={'Search something'}
                    returnKeyType={'search'}
                    keyboardType={'default'}
                    enablesReturnKeyAutomatically={true}

                    autoFocus={true}
                    autoGrow={false}
                />
                <View style={styles.parameterBar}>
                    <View style={styles.parameterOption}>
                        <TouchableOpacity ref={this._refPeriod} onPress={this.handlePeriodPressed}>
                            <Text style={styles.parameterOptionText}>Period</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.parameterOption}>
                        <TouchableOpacity ref={this._refCategory} onPress={this.handleCategoryPressed}>
                            <Text style={styles.parameterOptionText}>Category</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    <Text>Search results here</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    textInput: {
        height: 40,
        fontSize: 20,
    },

    parameterBar: {
        height: 40,
        backgroundColor: '#ffffff',
        flexDirection: 'row',

        elevation: 1,
    },

    parameterOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    parameterOptionText: {
        fontSize: 14,
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#222222',
    }
});
