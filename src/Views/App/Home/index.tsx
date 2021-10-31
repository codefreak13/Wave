import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';

import {HomeQuery} from '../../../gql';
import type {HomeQuery as HomeQueryType} from '../../../gql/__generated__/HomeQuery.graphql';
import {SignOut} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

const Home = () => {
  const data = useLazyLoadQuery<HomeQueryType>(
    HomeQuery,
    {},
    {fetchPolicy: 'network-only'},
  );

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {main, text, value} = styles;

  return (
    <View style={main}>
      <Text style={text}>
        Full Name: <Text style={value}>{data.me?.fullName}</Text>
      </Text>
      <Text style={text}>
        Mobile Number: <Text style={value}>{data.me?.mobile}</Text>
      </Text>
      <Text style={text}>
        Wallet Balance: <Text style={value}>{data.me?.wallet?.balance}</Text>
      </Text>
      <SignOut />
    </View>
  );
};

export default Home;
