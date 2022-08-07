import React, { ReactElement } from 'react';
import s from './styles';

import { Headline1 } from '@components/lds/typography';
import AppLayout from '~/components/AppLayout';
import { ScanScreenNavigationProp } from '~/types/navigation';

const Scan = ({
  navigation,
  route,
}: ScanScreenNavigationProp): ReactElement => {
  return (
    <AppLayout>
      <Headline1>Scan</Headline1>
    </AppLayout>
  );
};

export default Scan;
