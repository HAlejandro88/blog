import { render } from '@testing-library/react';
import NewsComponent from "../../components/NewsComponent";


describe('NewsComponent', () => {
    test('renders the title and text', () => {
        const { getByText } = render(<NewsComponent />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const titleElement = getByText('Título de la columna de texto');
        expect(titleElement).toBeInTheDocument();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const textElement = getByText('Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.');
        expect(textElement).toBeInTheDocument();
    });

    test('renders the image', () => {
        const { getByAltText } = render(<NewsComponent />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const imageElement = getByAltText('image');
        expect(imageElement).toBeInTheDocument();
    });
});