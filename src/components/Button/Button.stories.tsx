import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
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
        onClick={() => {
          console.log('primary')
        }}
      />
      <Button
        type="primary"
        text="Button"
        onClick={() => {
          console.log('primary')
        }}
      />
      <Button
        type="secondary"
        text="Button"
        onClick={() => {
          console.log('secondary')
        }}
      />
      <Button
        type="ternary"
        text="Button"
        onClick={() => {
          console.log('ternary')
        }}
      />
      <Button
        type="danger"
        text="Button"
        onClick={() => {
          console.log('danger')
        }}
      />
      <Button
        type="primary-hollow"
        text="Button"
        onClick={() => {
          console.log('primary-hollow')
        }}
      />
      <Button
        type="secondary-hollow"
        text="Button"
        onClick={() => {
          console.log('secondary-hollow')
        }}
      />
      <Button
        type="ternary-hollow"
        text="Button"
        onClick={() => {
          console.log('ternary-hollow')
        }}
      />
      <Button
        type="danger-hollow"
        text="Button"
        onClick={() => {
          console.log('danger-hollow')
        }}
      />
    </>
  ))
  .add('Primary', () => (
    <Button
      type="primary"
      text="Button"
      onClick={() => {
        console.log('primary')
      }}
    />
  ))
  .add('Secondary', () => (
    <Button
      type="secondary"
      text="Button"
      onClick={() => {
        console.log('secondary')
      }}
    />
  ))
  .add('Ternary', () => (
    <Button
      type="ternary"
      text="Button"
      onClick={() => {
        console.log('ternary')
      }}
    />
  ))
  .add('Danger', () => (
    <Button
      type="danger"
      text="Button"
      onClick={() => {
        console.log('danger')
      }}
    />
  ))
  .add('Primary Hollow', () => (
    <Button
      type="primary-hollow"
      text="Button"
      onClick={() => {
        console.log('primary-hollow')
      }}
    />
  ))
  .add('Secondary Hollow', () => (
    <Button
      type="secondary-hollow"
      text="Button"
      onClick={() => {
        console.log('secondary-hollow')
      }}
    />
  ))
  .add('Ternary Hollow', () => (
    <Button
      type="ternary-hollow"
      text="Button"
      onClick={() => {
        console.log('ternary-hollow')
      }}
    />
  ))
  .add('Danger Hollow', () => (
    <Button
      type="danger-hollow"
      text="Button"
      onClick={() => {
        console.log('danger-hollow')
      }}
    />
  ))
