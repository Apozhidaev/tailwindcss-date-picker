import { coreCss } from "./core";
import { ampCss, resetButtonIcon } from "./amp";
import { lockCss } from "./lock";
import { rangeCss } from "./range";
import { presetCss } from "./preset";

const rangePickerCss = `${coreCss}${lockCss}${rangeCss}${presetCss}${ampCss}`;

export { resetButtonIcon, rangePickerCss };
