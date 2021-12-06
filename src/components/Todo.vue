<template>
	<div class="todo-list" :data-layout="layout">
		<div class="todo-list__header">
			<div class="todo-list__title">{{ title }}</div>

			<button @click="addTask" class="todo-list__add-new">
				<TodoIcon :icon="'add'" />
			</button>
		</div>

		<div class="todo-list__content">
			<template v-if="tasks.length > 0 && showSeparateLists">
				<div class="todo-list__items">
					<TodoItem
						@updated-task="storeTasksLocally"
						@done-task="doneTask"
						@remove-task="removeTask"
						v-for="task in pendingTasks"
						:task="task"
					/>
				</div>

				<hr class="todo-list__separator" v-if="doneTasks.length > 0 && pendingTasks.length > 0" />

				<div class="todo-list__items">
					<TodoItem
						@updated-task="storeTasksLocally"
						@done-task="doneTask"
						@remove-task="removeTask"
						v-for="task in doneTasks"
						:task="task"
					/>
				</div>
			</template>

			<template v-else>
				<div class="todo-list__items">
					<TodoItem
						@updated-task="storeTasksLocally"
						@done-task="doneTask"
						@remove-task="removeTask"
						v-for="task in tasks"
						:task="task"
					/>
				</div>
			</template>

			<button v-if="tasks.length === 0" class="todo-list__cta-add" @click="addTask">Click to add a new task</button>
		</div>
	</div>
</template>

<script>
	import TodoIcon from '../components/TodoIcon.vue';
	import TodoItem from '../components/TodoItem.vue';

	export default {
		props: {
			title: { type: String },
			layout: { type: String },
		},

		components: {
			TodoIcon,
			TodoItem,
		},

		data() {
			return {
				tasks: [],
				showSeparateLists: true,
			};
		},

		created() {
			const localState = this.returnTasksLocally();

			if (localState) {
				this.tasks = localState;
			}
		},

		computed: {
			pendingTasks() {
				return this.tasks.filter(task => task.done === false);
			},

			doneTasks() {
				return this.tasks.filter(task => task.done === true);
			},
		},

		methods: {
			addTask() {
				this.tasks.push({ id: this.createID(), text: '', done: false });
				this.storeTasksLocally();
			},

			removeTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks.splice(taskIndex, 1);
				this.storeTasksLocally();
			},

			doneTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
				this.storeTasksLocally();
			},

			createID() {
				return Math.random().toString(36).slice(2);
			},

			storeTasksLocally() {
				window.localStorage.setItem('todo-list-items', JSON.stringify(this.tasks));
			},

			returnTasksLocally() {
				return JSON.parse(window.localStorage.getItem('todo-list-items'));
			},
		},
	};
</script>

<style>
	.todo-list {
		/* 
			variabler fra figma 
		*/

		--background: #f1f1f1;
		--foreground: #000000;
		--inactive: #b0b0b0;
		--highlight: #ff2e00;
		--border-radius: 0.5em;

		position: relative;
		width: 40vw;
		height: 80vh;
		background: var(--background);
		border-radius: var(--border-radius);
		padding: 1em;
		display: flex;
		flex-flow: column nowrap;
	}

	.todo-list__header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		color: var(--highlight);
		font-size: 1.5em;
		padding: 0 0.2em;
		margin-bottom: 0.5em;
	}

	.todo-list__add-new {
		--size: 0.8em;

		min-width: var(--size);
		min-height: var(--size);
		width: var(--size);
		height: var(--size);

		margin-bottom: 0.15em;
	}

	.todo-list__add-new line {
		stroke: var(--highlight);
	}

	.todo-list__add-new:hover line {
		stroke: var(--foreground);
	}

	.todo-list__separator {
		border: 1px solid var(--inactive);
		margin: 1em 0;
		opacity: 0.5;
	}

	.todo-list__content {
		overflow: scroll;
		display: flex;
		flex-flow: column nowrap;
		flex-grow: 2;
		color: var(--inactive);
		z-index: 0;
	}

	.todo-list__cta-add {
		flex-grow: 2;
		padding: 1em;
		color: var(--inactive);
	}
</style>
