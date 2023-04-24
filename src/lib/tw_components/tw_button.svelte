<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let color:
		| 'primary'
		| 'primaryLight'
		| 'gray'
		| 'grayLight'
		| 'red'
		| 'redLight'
		| 'yellow'
		| 'yellowLight'
		| 'amber'
		| 'amberLight'
		| 'green'
		| 'greenLight'
		| 'blue'
		| 'blueLight'
		| 'indigo'
		| 'indigoLight'
		| 'purple'
		| 'purpleLight' = 'primary';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	let _class =
		size === 'xs'
			? 'rounded px-2 py-1 text-xs'
			: size === 'sm'
			? 'rounded px-2 py-1 text-sm'
			: size === 'md'
			? 'rounded-md px-2.5 py-1.5 text-sm'
			: size === 'lg'
			? 'rounded-md px-3 py-2 text-sm'
			: 'rounded-md px-3.5 py-2.5 text-sm';
	let _iconClass =
		size === 'xs'
			? '-ml-0.5 mr-1 h-4 w-4'
			: size === 'sm'
			? '-ml-0.5 mr-1 h-4 w-4'
			: size === 'md'
			? '-ml-1 mr-1.5 h-4 w-4'
			: size === 'lg'
			? '-ml-1 mr-1.5 h-4 w-4'
			: '-ml-1 mr-2 h-4 w-4';
	let _colors: any = {
		primary: 'bg-primary-600 hover:bg-primary-700 focus-visibile:ring-primary-500 text-white',
		primaryLight:
			'bg-primary-100 hover:bg-primary-200 focus-visibile:ring-primary-500 text-primary-700',
		gray: 'bg-gray-600 hover:bg-gray-700 focus-visibile:ring-gray-500 text-white',
		grayLight: 'bg-gray-100 hover:bg-gray-200 focus-visibile:ring-gray-500 text-gray-700',
		red: 'bg-red-600 hover:bg-red-700 focus-visibile:ring-red-500 text-white',
		redLight: 'bg-red-100 hover:bg-red-200 focus-visibile:ring-red-500 text-red-700',
		yellow: 'bg-yellow-600 hover:bg-yellow-700 focus-visibile:ring-yellow-500 text-white',
		yellowLight: 'bg-yellow-100 hover:bg-yellow-200 focus-visibile:ring-yellow-500 text-yellow-700',
		amber: 'bg-amber-600 hover:bg-amber-700 focus-visibile:ring-amber-500 text-white',
		amberLight: 'bg-amber-100 hover:bg-amber-200 focus-visibile:ring-amber-500 text-amber-700',
		green: 'bg-green-600 hover:bg-green-700 focus-visibile:ring-green-500 text-white',
		greenLight: 'bg-green-100 hover:bg-green-200 focus-visibile:ring-green-500 text-green-700',
		blue: 'bg-blue-600 hover:bg-blue-700 focus-visibile:ring-blue-500 text-white',
		blueLight: 'bg-blue-100 hover:bg-blue-200 focus-visibile:ring-blue-500 text-blue-700',
		indigo: 'bg-indigo-600 hover:bg-indigo-700 focus-visibile:ring-indigo-500 text-white',
		indigoLight: 'bg-indigo-100 hover:bg-indigo-200 focus-visibile:ring-indigo-500 text-indigo-700',
		purple: 'bg-purple-600 hover:bg-purple-700 focus-visibile:ring-purple-500 text-white',
		purpleLight: 'bg-purple-100 hover:bg-purple-200 focus-visibile:ring-purple-500 text-purple-700'
	};
</script>

<button
	{...$$restProps}
	{type}
	class="tw-button inline-flex items-center font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    {_class} 
    {_colors[color]} 
    {$$props.class}"
	on:click
>
	{#if $$slots.icon}
		<span class={_iconClass}><slot name="icon" /></span>
	{/if}
	<slot />
</button>
