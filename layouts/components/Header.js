import  { Component } from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/styles'

const linkStyle = {
  marginRight: 15,
}
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(20),
  },
  headerContainer: {
    margin: '2px 5px 0 5px',
  },
});

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.headerContainer}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/todo">
          <a style={linkStyle}>TODO</a>
        </Link>
      </div>
    );
  }
}

export default (withStyles(styles)(Header))
