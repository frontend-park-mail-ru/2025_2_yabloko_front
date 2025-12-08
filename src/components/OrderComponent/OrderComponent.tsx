import { defineComponent } from "@antiquemouse/framework";
import styles from './OrderComponent.module.scss'

interface OrderComponentProps {
    id: string,
    date: string,
    total: string,
    status: string,
    handleClick: any
}

export const OrderComponent = defineComponent({

    render() {

        const props = this.props as OrderComponentProps

        return (
					<div class={styles.cartItem}>
						<div class={styles.cartItem__info}>
							<div class={styles.cartItem__name}>Заказ № {props.id}</div>
							<div class={styles.cartItem__price}>Дата заказа{props.date}</div>
							<div class={styles.cartItem__price}>Стоимость {props.total}</div>
							<div class={styles.cartItem__price}>Статус {props.status}</div>
						</div>
					</div>
				)
    },
})