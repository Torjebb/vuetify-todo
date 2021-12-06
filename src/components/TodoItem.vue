<!-- 
	TASK MODEL:
	{ id: '(random)', text: 'A new task', done: false }
-->

<template>
	<div :class="`todo-item ${task.done ? 'todo-item--done' : ''}`">
		<button @click="emitDone" class="todo-item__button" aria-label="Done">
			<TodoIcon :icon="'done'" />
		</button>

		<div class="todo-item__task">
			<input :ref="task.id" type="text" v-model="task.text" placeholder="New task" />
		</div>

		<button @click="emitRemove" class="todo-item__button" aria-label="Remove">
			<TodoIcon :icon="'remove'" />
		</button>
	</div>
</template>

<script>
	/* 
		EVENTS 
		emit -> event
	*/

	import TodoIcon from '../components/TodoIcon.vue';

	export default {
		components: {
			TodoIcon,
		},

		props: {
			task: { type: Object },
		},

		mounted() {
			/* spør alejandro om dette */
			this.$refs[this.task.id].focus();
		},

		updated() {
			this.$emit('updated-task', this.task);
		},

		methods: {
			emitDone() {
				this.$emit('done-task', this.task);
			},

			emitRemove() {
				this.$emit('remove-task', this.task);
			},
		},
	};
</script>

<style>
	.todo-item {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		background: white;
		margin-bottom: 0.25em;
		padding: 0.5em 0.8em;
		color: var(--foreground);
		border-radius: var(--border-radius);
	}

	.todo-item--done {
		color: var(--highlight);
	}

	.todo-item--done circle {
		fill: var(--highlight);
		stroke: var(--highlight);
	}

	.todo-item__button {
		--size: 0.8em;

		min-width: var(--size);
		min-height: var(--size);
		width: var(--size);
		height: var(--size);
	}

	.todo-item__button:hover line {
		stroke: var(--highlight);
	}

	.todo-item__button:hover circle {
		fill: var(--highlight);
		stroke: var(--highlight);
	}

	.todo-item__task {
		flex-grow: 2;
		padding: 0.1em 0.5em 0;
	}

	.todo-item__task input {
		width: 100%;
		outline: 0;
	}
</style>
