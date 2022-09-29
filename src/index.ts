// Button.stories.ts

// import { Meta, StoryFn } from '@storybook/html';
import "./style.scss"
interface Button {
    label: string
}

export const Button= (arg: Button): HTMLButtonElement => {
    const btn = document.createElement('button');
    btn.innerText = arg.label;
    btn.classList.add("primary")
  
    return btn;
  };
  