import { useContext } from "react"
import {
    DropdownMenu,
    DropdownItem,
    MenuMenu,
    MenuItem,
    Button,
    Dropdown,
    Menu,
  } from 'semantic-ui-react'
import { LogInContext } from "../../context/LogInContext"

const Dashboard = (props) => {

    const {userName} = useContext(LogInContext);

    const MESSAGE = "Hoşgeldin" + " " + userName;  

    return(
        <div>
             <Menu size='small' className="dashboardMenu">
        <MenuItem
          name={MESSAGE}
        />
        <MenuItem
          name='messages'
        />

        <MenuMenu position='right'>
          <Dropdown item text='Language'>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Russian</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <MenuItem>
            <Button primary>Sign Up</Button>
          </MenuItem>
        </MenuMenu>
      </Menu>
        </div>
    )
}  

export default Dashboard
  