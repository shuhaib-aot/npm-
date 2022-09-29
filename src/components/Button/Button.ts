// Button.stories.ts

// import { Meta, StoryFn } from '@storybook/html';



 const Primary= (): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.innerText = 'Button';

  btn.className = [
    'storybook-button',
    'storybook-button--medium',
    'storybook-button--primary',
  ].join(' ');

  return btn;
};

export default Primary;