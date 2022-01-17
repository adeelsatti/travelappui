import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import VectorIconComponents from '../../components/VectorIconComponents';
import {AppStyles} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../Actions';

const Counter = () => {
  const [findValue, setFindValue] = useState('hello');
  const countValue = useSelector(state => state?.count);
  const {count} = countValue;
  const dispatch = useDispatch();
  const obj = {a: {b: {c: {d: [{a: 1}, {b: 2}], e: 'Hello'}}}};
  const nestedArray = [
    ['EDUCBA', 'Online IT Platform', ['Hi', 'Happy']],
    ['Courses', 'Java'],
    ['Fee', '5000'],
    ['Hot Course', 'Java'],
  ];

  const onIncrementCount = () => {
    dispatch(increment());
  };

  const onDecrementCount = () => {
    dispatch(decrement());
  };

  const findValueE = obj => {
    const {a} = obj;
    const {b} = a;
    const {c} = b;
    const {...d} = c;

    const [first, ...second] = nestedArray;
    const [third, ...forth] = second;
    const [fifth, ...sixth] = forth;
    const [seven] = sixth;
    console.log('second :', seven[0]);
    setFindValue(seven[1]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={onIncrementCount}>
          <VectorIconComponents
            name="pluscircleo"
            type="AntDesign"
            size={35}
            color={AppStyles.colorSet.black}
          />
        </TouchableOpacity>

        <Text style={styles.buttonText && styles.counterButton}>
          {count ?? 'Print counter here'}
        </Text>

        <TouchableOpacity
          style={styles.counterButton}
          onPress={onDecrementCount}>
          <VectorIconComponents
            name="minuscircleo"
            type="AntDesign"
            size={35}
            color={AppStyles.colorSet.black}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.counterButton}
        onPress={() => findValueE(obj)}>
        <Text>Find Value is</Text>
      </TouchableOpacity>
      <Text>{findValue}</Text>
    </View>
  );
};

export default Counter;
