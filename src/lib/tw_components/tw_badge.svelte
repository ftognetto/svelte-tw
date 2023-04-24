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
		primary: 'bg-primary-100 text-primary-800',
		gray: 'bg-gray-100 text-gray-800',
		red: 'bg-red-100 text-red-800',
		yellow: 'bg-yellow-100 text-yellow-800',
		green: 'bg-green-100 text-green-800',
		blue: 'bg-blue-100 text-blue-800',
		indigo: 'bg-indigo-100 text-indigo-800',
		purple: 'bg-purple-100 text-purple-800',
		amber: 'bg-amber-100 text-amber-800',
		orange: 'bg-orange-100 text-orange-800',
		pink: 'bg-pink-100 text-pink-800'
	};
	let _size = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-0.5 text-sm';
</script>

<span
	class="inline-flex items-center rounded-full font-medium whitespace-nowrap {_size} {_colors[
		color
	]} {$$props.class}"
>
	<slot />
</span>
