type Job = () => unknown

let isScheduler: boolean = false
const jobs: (() => Job)[] = []

export function enqueueJob(job: () => Job): void {
	jobs.push(job)
	schedulerUpdate()
}

function schedulerUpdate(): void {
	if (isScheduler) {
		return
	}

	isScheduler = true
	queueMicrotask(processJobs)
}

function processJobs(): void {
	while (jobs.length > 0) {
		const job = jobs.shift()
		if (job) {
			const result = job()

			Promise.resolve(result).then(
				() => {},
				error => {
					console.error(`[scheduler]: ${error}`)
				},
			)
		}
	}

	isScheduler = false
}
