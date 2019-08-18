import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'gatsby'

export default class NavMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
        {this.props.menu_item.map(item => 
            <Menu.Item as={ Link }  
            name={item.name}
            to={item.link}
            active={activeItem === item.name} 
            onClick={this.handleItemClick} />
        )}
          
        </Menu>
      </div>
    )
  }
}