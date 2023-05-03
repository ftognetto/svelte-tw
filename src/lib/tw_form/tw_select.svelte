<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';
	interface $$Props extends HTMLSelectAttributes {
		label?: string;
		error?: string;
		containerClass?: string;
		labelClass?: string;
		inputContainerClass?: string;
		inputClass?: string;
		errorClass?: string;
		items: { name: string | number; value: string | number }[];
		value?: string | number;
	}
	export let error: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let containerClass: string | undefined = undefined;
	export let labelClass: string | undefined = undefined;
	export let inputContainerClass: string | undefined = undefined;
	export let inputClass: string | undefined = undefined;
	export let errorClass: string | undefined = undefined;
	export let items: { name: string | number; value: string | number }[];
	export let value: string | number | undefined = undefined;
</script>

<div class={containerClass}>
	{#if label}<label
			for={$$props.name}
			class="block text-sm font-medium leading-6 {$$props.disabled
				? 'text-gray-500'
				: 'text-gray-700'} {labelClass}">{label}</label
		>
	{/if}
	<div class="relative mt-1 rounded-md {$$props.disabled ? '' : 'shadow-sm'} {inputContainerClass}">
		<select
			class="mt-2 block w-full rounded-md sm:text-sm
			{$$props.disabled
				? 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500 placeholder:text-gray-300'
				: error
				? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
				: 'border-gray-300 focus:border-primary-500 focus:ring-primary-500 placeholder:text-gray-300'} 
			{inputClass}"
			{...$$props}
			bind:value
			on:change
			on:input
		>
			{#if $$props.placeholder}
				<option disabled selected value="">{$$props.placeholder}</option>
			{/if}
			{#each items as i}
				<option value={i.value}>{i.name}</option>
			{/each}
		</select>
		{#if error}
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<svg
					class="h-5 w-5 text-red-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		{/if}
	</div>
	{#if error}<p class="mt-2 text-sm text-red-600 {errorClass}">{error}</p>{/if}
</div>
