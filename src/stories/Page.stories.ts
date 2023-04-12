import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>; // Todo 확인 필요

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export const SignUp: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const signUpButton = await canvas.getByRole('button', {
      name: /Sign up/i,
    });
    await userEvent.click(signUpButton);

    await expect(await  canvas.getByText("Jane Doe"))
  },
};
