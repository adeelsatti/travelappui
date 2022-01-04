import firestore from '@react-native-firebase/firestore';

const HeaderComponent = ({setLoading, arrayUsers, setResults}) => {
  setLoading(true);
  const result = firestore().collection('travel1').get();
  Promise.all(
    result?.docs.map(async doc => {
      const data = await doc?.data();
      arrayUsers.push({data});
    }),
    setResults(arrayUsers),
    setLoading(false),
  );
};

export default HeaderComponent;
