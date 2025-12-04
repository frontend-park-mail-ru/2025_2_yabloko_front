import { defineComponent } from "@antiquemouse/framework";
import styles from './OrderComponent.module.scss'

interface OrderComponentProps {
    id: string,
    date: string,
    status: string,
    handleClick: any
}

export const OrderComponent = defineComponent({

    render() {

        const props = this.props as OrderComponentProps

        return (
            <div class={styles.cartItem}>
                <div class={styles.cartItem__info}>
                    <div class={styles.cartItem__name}>{this.id}</div>
                    <div class={styles.cartItem__price}>{this.date} ₽</div>
                </div>
            </div>
        )
    },
})