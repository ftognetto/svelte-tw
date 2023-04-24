<script lang="ts">
	export let progress: number;
	export let color:
		| 'primary'
		| 'gray'
		| 'red'
		| 'yellow'
		| 'green'
		| 'blue'
		| 'indigo'
		| 'purple'
		| 'amber'
		| 'orange'
		| 'pink' = 'primary';
	export let size: 'sm' | 'md' = 'sm';
	let _colors: any = {
		primary: 'bg-primary-600',
		gray: 'bg-gray-600',
		red: 'bg-red-600',
		yellow: 'bg-yellow-600',
		green: 'bg-green-600',
		blue: 'bg-blue-600',
		indigo: 'bg-indigo-600',
		purple: 'bg-purple-600',
		amber: 'bg-amber-600',
		orange: 'bg-orange-600',
		pink: 'bg-pink-600'
	};
</script>

<div class="w-full bg-gray-200 rounded-full h-2.5">
	<div class="{_colors[color]} h-2.5 rounded-full" style="width: {progress}%" />
</div>
