import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Matches } from '../../components';
import Moment from 'moment';
import { reqWorldApi } from '../../api/regWorldCup';

const MatchHistory = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  Moment.locale('es-mx');
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Matches matches={matches} title={'Historial de Partidos'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#400219"
          title="Proximos Partidos"
          onPress={() => navigation.navigate('Proximos-Partidos')}
        />
      </View>
    </View>
  );
};

export default MatchHistory;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 12,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});