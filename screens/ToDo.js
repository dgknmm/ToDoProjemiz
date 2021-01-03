import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Slider from '../components/Slider.js';
import ToDos from './../components/ToDos';
import Color from '../utils/color';

export default function ToDo() {
  const [selectedDate, setSelectedDate] = useState('');

  const onSelectDate = (date) => {
    const formatedDate =date.format('YYYY-MM-DD');
    setSelectedDate(formatedDate);
  }

  return (
    <View style={styles.container}>
      <Slider onSelectDate={onSelectDate} />
      <ToDos date={selectedDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: 0,
  }
});