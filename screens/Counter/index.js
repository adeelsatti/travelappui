import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import VectorIconComponents from '../../components/VectorIconComponents';
import {AppStyles} from '../../themes';
import {connect} from 'react-redux';
import * as Actions from '../../constants';

const Counter = props => {
  console.log(props);
  const {count} = props?.count;

  const onIncrementCount = () => {
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
});

//const actionsCreators = Object.assign({}, {changeCounter});

const mapDispatchToProps = dispatch => {
  return {
    //actions: bindActionCreators({...actionsCreators}, dispatch),
    incrementCount: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrementCount: () => dispatch({type: Actions.COUNTER_DECREMENT}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
