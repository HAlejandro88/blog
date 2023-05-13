import { render, fireEvent } from '@testing-library/react';
import SearchComponent from "../../components/SearchComponent";


describe('test suite for search component', () => {

    const mockSearchFunction = jest.fn();
    const mockItems = [
        {title: "First post"},
        {title: "Second post"},
        {title: "Third post"}
    ];

    test('calls search function with filtered items', () => {
        const { getByPlaceholderText, getByText } = render(
            <SearchComponent search={mockSearchFunction} items={mockItems} />
        );

        const searchInput = getByPlaceholderText("Find your post");
        fireEvent.change(searchInput, { target: { value: "first" } });

        const searchButton = getByText("Search");
        fireEvent.click(searchButton);

        expect(mockSearchFunction).toHaveBeenCalled()
    });
})
