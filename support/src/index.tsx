import { h } from "@antiquemouse/framework";
import { SupportWidget } from "./components/SupportWidget";

(window as any).h = h;

if (typeof document !== "undefined") {
  const widget = new SupportWidget();
  widget.mount(document.body);
}
