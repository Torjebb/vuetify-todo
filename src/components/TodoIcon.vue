<template>
	<svg class="todo-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g v-if="icon === 'done'">
			<circle cx="10" cy="10" r="12" stroke-width="2" />
		</g>

		<g v-else-if="icon === 'add'">
			<line x1="0" y1="10" y2="10" x2="20" stroke-width="2" />
			<line x1="10" y1="20" x2="10" y2="0" stroke-width="2" />
		</g>

		<g v-else-if="icon === 'remove'">
			<line x1="0" y1="20" x2="20" y2="0" stroke-width="2" />
			<line x1="20" y1="20" x2="0" y2="0" stroke-width="2" />
		</g>
	</svg>
</template>

<script>
	export default {
		props: {
			icon: { type: String },
		},
	};
</script>

<style>
	.todo-icon {
		width: 100%;
		height: 100%;
		display: block;
		overflow: visible;
	}

	.todo-icon line,
	.todo-icon circle {
		stroke: var(--foreground);
	}
</style>
