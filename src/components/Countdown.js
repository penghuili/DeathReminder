import { addDays, addYears, differenceInDays, differenceInYears } from 'date-fns';
import { Box, Text } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { AppState } from 'react-native';

function Countdown({ birthday, expectedAge, refresh }) {
  const [[years, days, rest], setYearsDays] = useState([0, 0, 0]);
  const [hoursText, setHoursText] = useState(null);

  const calculateYearsDays = useCallback(() => {
    const now = new Date();
    const lastDay = addYears(birthday, expectedAge);

    if (now >= lastDay) {
      setYearsDays([-1, -1, -1]);
      return;
    }

    const fullYears = differenceInYears(lastDay, now);
    const fullYearsDate = addYears(now, fullYears);
    const fullDays = differenceInDays(lastDay, fullYearsDate);
    const fullDaysDate = addDays(fullYearsDate, fullDays);
    const restMiliSeconds = lastDay.getTime() - fullDaysDate.getTime();
    setYearsDays([fullYears, fullDays, restMiliSeconds]);
  }, [birthday, expectedAge]);

  useEffect(() => {
    calculateYearsDays();
  }, [calculateYearsDays]);

  useEffect(() => {
    if (rest < 1000) {
      calculateYearsDays();
      return;
    }

    let remaining = rest;
    const id = setInterval(() => {
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      remaining = remaining - 1000;

      setHoursText(
        <>
          <Text fontSize="2xl">{hours}H, </Text>
          <Text fontSize="3xl">{minutes}M, </Text>
          <Text fontSize="4xl">{seconds}S</Text>
        </>
      );
    }, 1000);

    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest]);

  useEffect(() => {
    if (refresh) {
      calculateYearsDays();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        calculateYearsDays();
      }
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (rest === -1) {
    return <Text>You are dead.</Text>;
  }

  if (!hoursText) {
    return null;
  }

  return (
    <Box flexDirection="row" alignItems="center" flexWrap="wrap">
      <Text fontSize="lg">{years}Y, </Text>
      <Text fontSize="xl">{days}D, </Text>
      {hoursText}
    </Box>
  );
}

export default Countdown;
