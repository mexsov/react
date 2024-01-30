import { StyledButton } from '../../20240125/0129-styling/StyledNavBar';

export const NavBar = () => {
    return (
        <div>
            <nav style={{ backgroundColor: 'pink', padding: '50px 30px' }}>Navbarmngkm</nav>
            {/* <button className='css-button'>press me</button> */}
            <Button variant="primary">Primary</Button>
        <StyledButton>styles-component</StyledButton>
        </div>
    );
};
import Button from 'react-bootstrap/Button';

export default NavBar;