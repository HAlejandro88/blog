import { render , fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBarComponent from "../../components/NavBarComponent";
;

describe('test suite for NavBarComponent', () => {
    /*test('the logo shows successfuly', () => {
        const { getByAltText } = render(<NavBarComponent />);
        const logo = getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });*/


    test('the nav link of Blog navigate successfuly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <NavBarComponent />
            </MemoryRouter>
        );
        const blogLink = getByText('Blog');
        fireEvent.click(blogLink);
        expect(window.location.pathname).toBe('/');
    });
})






