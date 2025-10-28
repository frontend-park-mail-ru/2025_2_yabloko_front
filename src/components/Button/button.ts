"use strict";


export type ButtonCallback = (event: Event) => void;

interface ButtonProps {
    type: 'primary' | 'accent' | 'success' | 'error';
    text: string;
    onClick: ButtonCallback;
}

export class Button extends Component {

    constructor(parent: HTMLElement) {
        super(parent, 'button/button', {})
    }

    render(props: ButtonProps) {
        super.render({...props})
    }
}