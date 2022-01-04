import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const FetchUsersComponents = () => {
  const [count, setCount] = useState(count);
  useEffect(() => {
    firestore()
      .collection('travel1')
      .get()
      .then(querySnapshot => {
        setCount(querySnapshot.size);
      });
  }, []);
};
export default FetchUsersComponents;
