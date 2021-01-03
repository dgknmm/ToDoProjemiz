import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../utils/color';
import { ScrollView} from 'react-native-gesture-handler';

export default class ToDos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const list = [
            {
                when:'10:30 AM',
                name: 'Spor',
                icon: 'done-all',
                subtitle: 'Sabah sporu yap'
            }
            
        ];
        return (
            <View style={styles.container}>
                <Text style={styles.dateTitle}>Yapılacak : {this.props.date}</Text>
                <ScrollView>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftIcon={{name:l.icon}}
                                title={l.name}
                                rightSubtitle={l.when}
                                subtitle={l.subtitle}
                                bottomDivider
                                checkBox={ true }
                            />
                        ))
                    }
                </ScrollView>
                <Button
                type="clear"
                icon={
                    <Icon name="plus-circle" size={50} color={Color.primary} />
                }
                buttonStyle={styles.fabButton}
                title=""
                >

                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        width: '100%',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    dateTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primary,
        padding: 5,
        width: '100%',
        textAlign: 'center'
    }
});