import React from 'react'
import Button from '.'
import { render, fireEvent } from '@testing-library/react'

describe('<Button />', () => {
	it('onClick receives', () => {
		let testVar = false

		const { getByRole } = render(
			<Button type="primary" onClick={() => (testVar = true)} text="Test" />,
		)
		const button = getByRole('button')

		fireEvent.click(button)
		expect(testVar).toEqual(true)
	})
})
