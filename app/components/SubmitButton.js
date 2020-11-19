import React from 'react';
import AppButton from './AppButton';
import {useFormikContext} from 'formik';

function SubmitButton({title, ...otherProps}) {
  const {handleSubmit} = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={() => {
        handleSubmit();
      }}
      {...otherProps}
    />
  );
}

export default SubmitButton;
