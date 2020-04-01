import React from 'react';

import Switch from '../../../toys/Switch';

export default function Exercise2() {
  const [on, setOn] = React.useState(false);

  React.useEffect(() => {
    document.title = `The toggle is ${on ? 'on' : 'off'}!!!`;
  }, [on]);

  return <Switch on={on} onClick={() => setOn(!on)} />;
}
