import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Header from 'components/MainLayout/components/Header';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Ducati Store
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    background:
      'linear-gradient(to right, green 0%, green 33%, white 33%, white 66%, red 66%, red 100%);',
  },
  container: {
    paddingBottom: theme.spacing(8),
  },
  footer: {
    padding: theme.spacing(2),
    background:
      'linear-gradient(to right, green 0%, green 33%, white 33%, white 66%, red 66%, red 100%);',
    height: 80,
  },
}));

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: FunctionComponent<IMainLayout> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main>
        <Container className={classes.container} maxWidth='md'>
          {children!}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Thank you for your purchase!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
};

export default MainLayout;
