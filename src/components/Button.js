import JSX from '@pinuts/jsx-runtime';

export default class Button {
    constructor(attributes) {
        this.attributes = attributes || {};
        this.buttonElement = (
            <button class={`btn ${this.attributes.class || ''}`} type="button">
                <span class="btn__text"> {this.attributes.caption}</span>
            </button>
        );
        if (this.attributes.onclick) {
            this.buttonElement.addEventListener(
                'click',
                this.attributes.onclick
            );
        }
    }

    render() {
        return this.buttonElement;
    }

    disable() {
        this.buttonElement.disabled = true;
        return this;
    }

    enable() {
        this.buttonElement.disabled = false;
        return this;
    }
}
