import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import DatePicker from '../HookForm/DatePicker';

const useStyles = makeStyles((theme) => ({
  form : {
    display: 'flex',
    maxWidth: '800px',
    marginTop: '20%'
  }
}));

const defaultValues = {
  DatePicker: new Date()
}

export default() => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className={classes.form}>
      <DatePicker control={control}/>
    </form>
  );
}
