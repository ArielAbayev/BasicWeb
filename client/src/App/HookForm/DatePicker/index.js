import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Controller, useForm } from 'react-hook-form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { alpha } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export default ({ control }) => (
      <Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="DatePicker"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  margin="normal"
                  disablePast
                  alpha="true"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  {...rest}
                />
              )}
            />
          </MuiPickersUtilsProvider>
    </Box>
);