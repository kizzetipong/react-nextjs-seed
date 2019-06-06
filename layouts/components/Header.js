import  { Component } from 'react'
import MenuBar from '../../modules/common/material/MenuBar';

const MENULIST = [
  {
    id: 'home',
    label: 'HOME',
    path: '/',
  },
  {
    id: 'showcases',
    label: 'Showcases',
    path: '/showcases',
  },
  {
    id: 'todo',
    label: 'Todo App',
    path: '/todo',
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
  },
];

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <MenuBar menus={MENULIST}/>
      </div>
    );
  }
}

export default Header;
