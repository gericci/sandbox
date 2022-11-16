Modal

Custom implementation


Angular Material CDK implementation

Angular material offers some useful accessibility libraries.
https://material.angular.io/cdk/a11y/overview



This sandbox project contains 2 examples of accessibility implementation on a modal component.

Accessibility guideline:
* The modal container must define : `role="dialog"` and `aria-modal="true"`.
* When the modal title is displayed, it must be linked by the `aria-labelledby` attribute. When the title is not displayed, the modal container must defined the `aria-label` attribute.

Keyboard interaction.
* TAB key should change the focus on each interactif element of the modal (SHIFT+TAB for reverse order).
* ESC key should allow to close the modal.

Modal behavior:
* When the modal is opened: 
  * The focus is set on the first interactive element in the modal.
  * The keyboard focus should not allow to select an element outside the modal.
* When the modal is closed:
  * The focus is set on the element that opens the modal.
  * When it's possible, the modal windows should not appear in the DOM (but it's not mandatory).
  * But when the modal code source is still present, the container must have `display: none` or `visibility: hidden` set.



First example: custom implementation.

* The open/close behavior is done with help of `ToggleOpen()` function and the onShow/onHide EventEmitter.

* The focus on the first modal element is done with the `[appAutofocus]` binding.

* The keyboard focus is managed by the `handleKeyEvents(event)`.

* The focus is restored when the modal is closed with the onHide EventEmitter (and listener `AutofocusDirective`).

Second example: CDK implementation.

* The focus on the first modal element is (still) done with the `[appAutofocus]` binding.

* The keyboad focus is managed by `cdkTrapFocus [cdkTrapFocusAutoCapture]="true"` feature.














