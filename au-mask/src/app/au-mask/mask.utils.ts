


export const TAB = 9,
    LEFT_ARROW = 37,
    RIGHT_ARROW = 39,
    BACKSPACE = 8,
    DELETE = 46;

export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "\/", "-"];


export function overWriteCharAtPosition(input: HTMLInputElement, cursorPosition: number, key: string) {
    const currentString = input.value;
    input.value = currentString.slice(0, cursorPosition) + key + currentString.slice(cursorPosition + 1);
}


