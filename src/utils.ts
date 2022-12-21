import type { Core } from "react-easepick";

export function adjustLeftPosition(picker: Core) {
  const rect = (picker.options.element as HTMLElement).getBoundingClientRect();
  const wrapper = picker.ui.wrapper.getBoundingClientRect();

  picker.ui.container.classList.add("calc");
  const container = picker.ui.container.getBoundingClientRect();
  picker.ui.container.classList.remove("calc");

  return rect.left - wrapper.left - container.width + rect.width;
}
