import { coreCss } from "./core";
import { ampCss, resetButtonIcon } from "./amp";
import { lockCss } from "./lock";

const datePickerCss = `${coreCss}${lockCss}${ampCss}`;

export { resetButtonIcon, datePickerCss };
