import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = (args: Partial<React.ComponentProps<typeof Modal>>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args?.children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Modal Title',
    children: 'This is the modal content. You can put anything here.',
  },
};

export const WithoutTitle: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    children: 'This modal has no title.',
  },
};

export const WithFooter: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this action?',
    footer: (
      <>
        <Button variant="ghost" onClick={() => {}}>
          Cancel
        </Button>
        <Button onClick={() => {}}>Confirm</Button>
      </>
    ),
  },
};

export const Small: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Small Modal',
    size: 'sm',
    children: 'This is a small modal.',
  },
};

export const Medium: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Medium Modal',
    size: 'md',
    children: 'This is a medium-sized modal (default).',
  },
};

export const Large: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    size: 'lg',
    children: 'This is a large modal with more space for content.',
  },
};

export const ExtraLarge: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Extra Large Modal',
    size: 'xl',
    children: 'This is an extra large modal for extensive content.',
  },
};

export const FullScreen: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Full Screen Modal',
    size: 'full',
    children: 'This modal takes up most of the screen.',
  },
};

export const LongContent: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Modal with Long Content',
    children: (
      <div>
        <p>This modal has scrollable content.</p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ marginBottom: '1rem' }}>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    ),
  },
};

export const NoOverlayClose: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Modal without Overlay Close',
    closeOnOverlayClick: false,
    children: 'You cannot close this modal by clicking the overlay. Use the close button or Escape key.',
  },
};

export const NoEscapeClose: Story = {
  render: (args: Partial<React.ComponentProps<typeof Modal>>) => <ModalWrapper {...args} />,
  args: {
    title: 'Modal without Escape Close',
    closeOnEscape: false,
    children: 'You cannot close this modal with the Escape key. Use the close button or click the overlay.',
  },
};
