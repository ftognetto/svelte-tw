<script lang="ts">
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
		primary: 'bg-primary-50 text-primary-700 ring-primary-700/10',
		gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
		red: 'bg-red-50 text-red-700 ring-red-600/10',
		yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
		green: 'bg-green-50 text-green-700 ring-green-600/20',
		blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
		indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
		purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
		amber: 'bg-amber-50 text-amber-700 ring-amber-700/10',
		orange: 'bg-orange-50 text-orange-700 ring-orange-700/10',
		pink: 'bg-pink-50 text-pink-700 ring-pink-700/10'
	};
	let _size = size === 'sm' ? 'px-1.5 py-0.5' : 'px-2 py-1';
</script>

<span
	class="inline-flex items-center rounded-md text-xs font-medium ring-1 ring-inset {_size} {_colors[
		color
	]} {$$props.class}"
>
	<slot />
</span>
