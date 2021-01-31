import React, { FunctionComponent } from 'react';

type Props = {
  text: string | null;
  styles?: string;
};

export const ReadonlyText: FunctionComponent<Props> = ({ text, styles }) => {
  return <p className={styles}>{text}</p>;
};
