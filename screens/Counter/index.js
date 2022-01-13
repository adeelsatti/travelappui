import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import VectorIconComponents from '../../components/VectorIconComponents';
import {AppStyles} from '../../themes';
import {connect} from 'react-redux';
import * as Actions from '../../constants';

const Counter = props => {
  console.log('propsData: ', props);
  const {count} = props?.count;

  const onIncrementCount = () => {
    const name = 'adeel satti';
    props.addNewUser(name);
    props.incrementCount();
  };

  const onDecrementCount = () => {
    props.decrementCount();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.counterButton} onPress={onIncrementCount}>
        <VectorIconComponents
          name="pluscircleo"
          type="AntDesign"
          size={35}
          color={AppStyles.colorSet.black}
        />
      </TouchableOpacity>

      <Text>{count ?? 'Print counter here'}</Text>

      <TouchableOpacity style={styles.counterButton} onPress={onDecrementCount}>
        <VectorIconComponents
          name="minuscircleo"
          type="AntDesign"
          size={35}
          color={AppStyles.colorSet.black}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  count: state?.count,
  users: state?.users,
});

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrementCount: () => dispatch({type: Actions.COUNTER_DECREMENT}),
    addNewUser: name => dispatch({type: Actions.CREATE_USER, name}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
