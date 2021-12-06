<template>
	<Todo :title="'Shopping list'" />
</template>

<script>
	import Todo from '../components/Todo.vue';

	export default {
		components: {
			Todo,
		},
	};
</script>
