import { addDays, addYears, differenceInDays, differenceInYears } from 'date-fns';
import { Box, Text } from 'native-base';
import React, { useEffect, useMemo, useState } from 'react';

function Countdown({ birthday, expectedAge }) {
  const [calculateTime, setCalculateTime] = useState(Date.now());
  const [hoursText, setHoursText] = useState(null);

  const [years, days, rest] = useMemo(() => {
    const now = new Date();
    const lastDay = addYears(birthday, expectedAge);

    if (now >= lastDay) {
      return [-1, -1, -1];
    }

    const fullYears = differenceInYears(lastDay, now);
    const fullYearsDate = addYears(now, fullYears);
    const fullDays = differenceInDays(lastDay, fullYearsDate);
    const fullDaysDate = addDays(fullYearsDate, fullDays);
    const restMiliSeconds = lastDay.getTime() - fullDaysDate.getTime();
    return [fullYears, fullDays, restMiliSeconds];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthday, expectedAge, calculateTime]);

  useEffect(() => {
    if (rest <= 0) {
      setCalculateTime(Date.now());
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
  }, [rest]);

  if (!rest) {
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
