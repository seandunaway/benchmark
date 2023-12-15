let TIME = 60_000

/**
 * @type {(fn: Function) => void}
 */
export default function benchmark (fn) {
	let start = performance.now()
	let now = start
	let op = 0

	while ((start + TIME) > now) {
		fn()

		now = performance.now()
		op++
	}

	let s = (now - start) / 1_000
	let ops = op / s

	let s_s = Math.round(s).toLocaleString()
	let op_s = Math.round(op).toLocaleString()
	let ops_s = Math.round(ops).toLocaleString()

	console.info(`${fn.name}: s: ${s_s}, op: ${op_s}, op/s: ${ops_s}`)
}
