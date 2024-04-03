import React from 'react';

function Num9child() {
  console.log('child rendererd');
  return <div>Num9child</div>;
}
export default React.memo(Num9child);
