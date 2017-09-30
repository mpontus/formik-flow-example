// @flow
import * as React from 'react';

type Props = {|
  title: string,
|};

const Header = (props: Props) => {
  const { title } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
