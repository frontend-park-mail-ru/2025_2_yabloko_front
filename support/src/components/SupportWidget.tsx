import { defineComponent } from "@antiquemouse/framework";
import styles from "./SupportWidget.module.scss";

export const SupportWidget = defineComponent({
  props: [],

  state() {
    return {
      isOpen: false,
      message: "",
    };
  },

  toggleSupport() {
    this.updateState({ isOpen: !this.state.isOpen });
  },

  handleMessageChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.updateState({ message: value });
  },

  async handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.state.message.trim()) return;

    console.log("Support message:", this.state.message);

    this.updateState({ message: "" });
    alert("Сообщение отправлено!");
  },

  render() {
    return (
      <div class={styles.support}>
        <button
          class={styles.supportToggle}
          onClick={() => this.toggleSupport()}
        >
          {this.state.isOpen ? "✕" : "🛟"}
        </button>

        {this.state.isOpen && (
          <div class={styles.supportWindow}>
            <h3>Поддержка</h3>

            <form onSubmit={(e: Event) => this.handleSubmit(e)}>
              <input
                type="text"
                placeholder="Опишите вашу проблему..."
                value={this.state.message}
                on={{ input: (e: Event) => this.handleMessageChange(e) }}
                class={styles.input}
              />
              <button type="submit" class={styles.submitBtn}>
                Отправить
              </button>
            </form>
          </div>
        )}
      </div>
    );
  },
});
