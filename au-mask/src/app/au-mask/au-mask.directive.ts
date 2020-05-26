import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { SPECIAL_CHARACTERS, TAB, overWriteCharAtPosition, LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE } from './mask.utils';
import * as includes from 'lodash.includes';
import * as findlastindex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findIndex';
import { maskDigitValidators, neverValidator } from './digit_validators';

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask = '';
  input: HTMLInputElement;
  fullFieldSelected = false;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }
  ngOnInit(): void {
    this.input.value = this.buildPlaceHolder();
  }

  @HostListener('select', ['$event'])
  onSelect($event: UIEvent) {
    this.fullFieldSelected = this.input.selectionStart == 0 && this.input.selectionEnd == this.input.value.length;

  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {

    if ($event.metaKey || $event.ctrlKey) {
      return;
    }


    if (keyCode !== TAB) {
      // Supress Default event
      $event.preventDefault();
    }

    const key = String.fromCharCode(keyCode);

    const cursorPosition = this.input.selectionStart;

    if (this.fullFieldSelected) {
      this.input.value = this.buildPlaceHolder();
      const firstPlaceHolderPosition = findIndex(this.input.value, char => char === '_');

      this.input.setSelectionRange(firstPlaceHolderPosition, firstPlaceHolderPosition);
    }

    switch (keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrowEvent(cursorPosition);
        return;
      case RIGHT_ARROW:
        this.handleRightArrowEvent(cursorPosition);
        return;

      case BACKSPACE:
        this.handleBackSpaceEvent(cursorPosition);
        return;

      case DELETE:
        this.handelDeleteEvent(cursorPosition);
        return;
    }

    const maskDigit = this.mask.charAt(cursorPosition);

    const digitValidator = maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPosition, key);
      this.handleRightArrowEvent(cursorPosition);
    }

  }


  buildPlaceHolder(): string {
    const chars: string[] = this.mask.split('');
    return chars.reduce((result, char) => {
      return result += includes(SPECIAL_CHARACTERS, char) ? char : '_';
    }, '');
  }

  handleBackSpaceEvent(cursorPosition: number) {
    const previousPos = this.calculatePreviousCursorPosition(cursorPosition);
    if (previousPos >= 0) {
      overWriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleLeftArrowEvent(cursorPosition) {
    const previousPos = this.calculatePreviousCursorPosition(cursorPosition);
    if (previousPos >= 0) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  calculatePreviousCursorPosition(cursorPosition: number) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPosition);
    return findlastindex(valueBeforeCursor, char => !includes(SPECIAL_CHARACTERS, char));
  }

  handleRightArrowEvent(cursorPosition) {
    const nextPos = this.calculateNextCursorPosition(cursorPosition);
    if (nextPos >= 0) {
      this.input.setSelectionRange(cursorPosition + nextPos + 1, cursorPosition + nextPos + 1);
    }
  }
  handelDeleteEvent(cursorPosition: number) {
    overWriteCharAtPosition(this.input, cursorPosition, '_');
    this.input.setSelectionRange(cursorPosition, cursorPosition);
  }


  calculateNextCursorPosition(cursorPosition: number) {
    const valueAfterCursor = this.input.value.slice(cursorPosition + 1);
    return findIndex(valueAfterCursor, char => !includes(SPECIAL_CHARACTERS, char));
  }

}
