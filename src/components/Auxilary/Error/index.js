import React from 'react';

export default function Error(props) {
  return (
    <div>
      {props.isError && props.errorMsg}
    </div>
  );
}
