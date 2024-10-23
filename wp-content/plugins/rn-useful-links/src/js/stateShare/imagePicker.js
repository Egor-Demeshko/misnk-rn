import writable from "./createWritable";

export const CardPickerState = writable();

export function activateRedactor(link) {
    CardPickerState.update((oldValue) => link);
}