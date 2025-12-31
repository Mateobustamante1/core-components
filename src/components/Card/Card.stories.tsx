import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a simple card with some content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and some content.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This card has both a title and subtitle.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a footer section.',
    footer: (
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </div>
    ),
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'With header actions',
    children: 'This card has action buttons in the header.',
    headerActions: (
      <>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          ⋮
        </Button>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: 'This card uses the outlined variant.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    variant: 'elevated',
    children: 'This card uses the elevated variant with more shadow.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'Click anywhere on the card',
    children: 'This card has an onClick handler and shows hover effects.',
    onClick: () => alert('Card clicked!'),
  },
};

export const NoPadding: Story = {
  args: {
    title: 'No Padding',
    padding: 'none',
    children: (
      <div style={{ padding: '1rem' }}>
        This card has no padding, but the content can have its own padding.
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    title: 'Small Padding',
    padding: 'sm',
    children: 'This card uses small padding.',
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Large Padding',
    padding: 'lg',
    children: 'This card uses large padding.',
  },
};

export const Complete: Story = {
  args: {
    title: 'Complete Card',
    subtitle: 'With all features',
    headerActions: (
      <Button variant="ghost" size="sm">
        ⋮
      </Button>
    ),
    children: (
      <div>
        <p>This is a complete card example with:</p>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Title and subtitle</li>
          <li>Header actions</li>
          <li>Body content</li>
          <li>Footer with actions</li>
        </ul>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Confirm</Button>
      </div>
    ),
  },
};


