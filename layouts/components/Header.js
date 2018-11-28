import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const linkStyle = {
  marginRight: 15,
}
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  loginBtn: {
    float: 'right',
  },
  headerContainer: {
    margin: '2px 5px 0 5px',
  },
});

const Header = (props) => (
  <div className={props.classes.headerContainer}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/todo">
      <a style={linkStyle}>TODO App</a>
    </Link>
    <Link href="/">
      <Button size="small" variant="contained" color="primary" className={props.classes.loginBtn}>
        Log In
      </Button>
    </Link>
  </div>
)

export default (withStyles(styles)(Header))
