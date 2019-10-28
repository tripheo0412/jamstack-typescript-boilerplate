import React from 'react'
import Header from '../header'

import { storiesOf } from '@storybook/react'

storiesOf('Header', module)
	.addParameters({
		info: {
			inline: true,
		},
	})
	.add('default', () => <Header siteTitle="sadad" />)
