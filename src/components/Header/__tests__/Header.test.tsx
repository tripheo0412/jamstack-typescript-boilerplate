import * as React from 'react'
import Header from '../header'
import {render} from '@testing-library/react'

describe('<Header/>', () => {
	it('should render Header with <TESTING> as title', () => {
		// Arrange
		const {getByText} = render(<Header siteTitle={'TESTING'} />)

		//Act

		// Assert
		expect(getByText('TESTING')).toBeInTheDocument()
	})
})
