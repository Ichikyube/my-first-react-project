import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from '/imports/ui/App';
import theme from '/imports/ui/theme';

Meteor.startup(() => {
  render(   <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>, document.getElementById('react-target'));
});
