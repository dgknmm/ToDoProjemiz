import React from 'react';
import moment from 'moment';
import { StyleSheet, View, ScrollView } from 'react-native';
import Dates from './dates';

export default class Slider extends React.Component {
    state = {};
    static defaultProps = {      
        showDaysBeforeCurrent: 5,
        showDaysAfterCurrent: 5,
    };
    constructor(props) {
        super(props);
        this.state = {
            allDatesHaveRendered: false,
            currentDateIndex: props.showDaysBeforeCurrent,
            dates: this.getDates(),
            dayWidths: undefined,
            scrollPositionX: 0,
            visibleMonths: undefined,
            visibleYears: undefined,
        };
    }

    getDates = () => {
        const {
            currentDate,
            showDaysBeforeCurrent,
            showDaysAfterCurrent,
        } = this.props;

        const startDay = moment(currentDate || undefined)
            .subtract(showDaysBeforeCurrent + 1, 'days');

        const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

        return [...Array(totalDaysCount)]
            .map(_ => startDay.add(1, 'day').clone());
    };

    onSelectDay = (index) => {
        const { dates } = this.state;
        const { onSelectDate } = this.props;
        this.setState({ currentDateIndex: index });
        onSelectDate(dates[index]);
    };

    onRenderDay = (index, width) => {
        const { dayWidths } = this.state;
        const {
            showDaysBeforeCurrent,
            showDaysAfterCurrent,
        } = this.props;

        const allDatesHaveRendered = dayWidths
            && Object.keys(dayWidths).length >= showDaysBeforeCurrent + showDaysAfterCurrent;

        this.setState(prevState => ({
            allDatesHaveRendered,
            dayWidths: {
                
                ...prevState.dayWidths,
                
                [index]: width,
            },
        }));
    };

    render() {
        const {
            dates,
            currentDateIndex,
        } = this.state;
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                >
                    <Dates
                        dates={dates}
                        currentDateIndex={currentDateIndex}
                        onSelectDay={this.onSelectDay}
                        onRenderDay={this.onRenderDay}
                    />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    visibleMonthAndYear: {
    },
});