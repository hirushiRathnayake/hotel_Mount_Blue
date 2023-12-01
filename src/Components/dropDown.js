import Dropdown from 'react-bootstrap/Dropdown';
import '../Styles/DropDown.css';

function NavDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.Bname}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{props.sub1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.sub2}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default  NavDropdown;