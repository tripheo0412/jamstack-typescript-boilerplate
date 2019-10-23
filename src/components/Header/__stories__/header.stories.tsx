import React from 'react'
import Header from '../header'

import { storiesOf } from '@storybook/react'

storiesOf('Header', module).add('default', () => <Header siteTitle="sadad" />, {
	info: '☹️ no emojis',
})
