import JSX from '@pinuts/jsx-runtime'; // TODO: no linter warning here
import Button from './Button.js';

export default class StartView {
    constructor(container) {
        this.container = container;
    }

    run() {
        this.container.appendChild(this.render());
    }

    handleSubmit() {
        alert(
            'Entered text: ' +
                (this.components.textInput.value
                    ? this.components.textInput.value
                    : '(empty)') +
                '\nCheckbox value: ' +
                this.components.checkbox.checked
        );
    }

    render() {
        this.components = {
            heading: <h1>Nice heading</h1>,
            link: (
                <a href="https://reactjs.org/docs/introducing-jsx.html">
                    JSX documentation
                </a>
            ),
            sendButton: new Button({
                caption: 'Submit',
                onclick: () => this.handleSubmit()
            }),
            textInput: <input></input>,
            checkbox: <input type="checkbox"></input>
        };

        return (
            <div class="container">
                {this.components.heading}
                {this.components.link}
                <div class="input">{this.components.textInput}</div>
                <div class="input">{this.components.checkbox}</div>
                <div class="input">{this.components.sendButton}</div>
            </div>
        );
    }
}
