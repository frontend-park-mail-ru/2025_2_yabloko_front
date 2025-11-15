import { h } from "@antiquemouse/framework";
import { SupportApp } from './components/SupportWidget'

(window as any).h = h;

if (typeof document !== "undefined") {
  const widget = new SupportApp()
  widget.mount(document.body);
}
