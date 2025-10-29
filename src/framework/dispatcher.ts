export type CommandHandler<T = any> = (payload: T) => void
export type AfterCommandHandler = () => void
export type Unsubscribe = () => void

class Dispatcher {
	#subs = new Map<string, Set<CommandHandler>>()
	#afterHandlers = new Set<AfterCommandHandler>()

	subscribe(commandName: string, handler: CommandHandler): Unsubscribe {
		if (!this.#subs.has(commandName)) {
			this.#subs.set(commandName, new Set())
		}

		const handlers = this.#subs.get(commandName)!

		return () => {
			handlers.delete(handler)

			if (handlers.size == 0) {
				this.#subs.delete(commandName);
			}
		}
	}

	afterEveryCommand(handler: AfterCommandHandler): Unsubscribe {
		this.#afterHandlers.add(handler)

		return () => {
			this.#afterHandlers.delete(handler)
		}
	}

	dispatch<T = any>(commandName: string, payload?: T): void {
		if (this.#subs.has(commandName)) {
			this.#subs.get(commandName)!.forEach(handler => handler(payload))
		}

		this.#afterHandlers.forEach(handler => handler())
	}
}

const dispatcher = new Dispatcher()

export { dispatcher }
