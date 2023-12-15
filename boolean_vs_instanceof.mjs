import benchmark from './index.mjs'

let boolean = true
let error = new Error()

benchmark(function boolean_strict () {
	if (boolean !== true) {
		return false
	}
	return true
})

benchmark(function boolean_loose () {
	if (boolean != true) {
		return false
	}
	return true
})

benchmark(function boolean_falsey () {
	if (!boolean) {
		return false
	}
	return true
})

benchmark(function boolean_truthy () {
	if (boolean) {
		return true
	}
	return false
})

benchmark(function instanceof_error () {
	if (error instanceof Error) {
		return false
	}
	return true
})
