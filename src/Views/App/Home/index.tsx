import React, {Suspense} from 'react';
import {View, Text} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import type {HomeQuery} from './__generated__/HomeQuery.graphql';

import {Loader} from '../../../components';

const Home = () => {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        me {
          id
          fullName
          mobile
          wallet {
            id
            balance
          }
        }
      }
    `,
    {},
  );

  console.log(data, 'gdgd');

  return (
    <View>
      <Text>{data.me?.wallet?.balance}</Text>
      <Text>{data.me?.fullName}</Text>
    </View>
  );
};

export default Home;
