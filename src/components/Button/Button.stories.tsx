import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import Button, { btnType } from '.'

const values = [
	'primary',
	'secondary',
	'ternary',
	'danger',
	'primary-hollow',
	'secondary-hollow',
	'ternary-hollow',
	'danger-hollow',
]

storiesOf('Button', module)
	.addDecorator(jsxDecorator)
	.addDecorator(withKnobs)
	.addParameters({
		info: {
			inline: true,
		},
	})
	.add('All Buttons', () => (
		<>
			<Button
				type={select('type', values, values[1]) as btnType}
				text="KnobsTest"
				onClick={action('primary')}
			/>
			<Button type="primary" text="Button" onClick={action('primary')} />
			<Button type="secondary" text="Button" onClick={action('secondary')} />
			<Button type="ternary" text="Button" onClick={action('ternary')} />
			<Button type="danger" text="Button" onClick={action('danger')} />
			<Button
				type="primary-hollow"
				text="Button"
				onClick={action('primary-hollow')}
			/>
			<Button
				type="secondary-hollow"
				text="Button"
				onClick={action('secondary-hollow')}
			/>
			<Button
				type="ternary-hollow"
				text="Button"
				onClick={action('ternary-hollow')}
			/>
			<Button
				type="danger-hollow"
				text="Button"
				onClick={action('danger-hollow')}
			/>
		</>
	))
	.add('Primary', () => (
		<Button type="primary" text="Button" onClick={action('primary')} />
	))
	.add('Secondary', () => (
		<Button type="secondary" text="Button" onClick={action('secondary')} />
	))
	.add('Ternary', () => (
		<Button type="ternary" text="Button" onClick={action('ternary')} />
	))
	.add('Danger', () => (
		<Button type="danger" text="Button" onClick={action('danger')} />
	))
	.add('Primary Hollow', () => (
		<Button
			type="primary-hollow"
			text="Button"
			onClick={action('primary-hollow')}
		/>
	))
	.add('Secondary Hollow', () => (
		<Button
			type="secondary-hollow"
			text="Button"
			onClick={action('secondary-hollow')}
		/>
	))
	.add('Ternary Hollow', () => (
		<Button
			type="ternary-hollow"
			text="Button"
			onClick={action('ternary-hollow')}
		/>
	))
	.add('Danger Hollow', () => (
		<Button
			type="danger-hollow"
			text="Button"
			onClick={action('danger-hollow')}
		/>
	))
