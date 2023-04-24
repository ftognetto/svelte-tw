<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$Props extends HTMLInputAttributes {
		label?: string;
		error?: string;
		containerClass?: string;
		labelClass?: string;
		inputContainerClass?: string;
		inputClass?: string;
		errorClass?: string;
	}
	export let error: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let containerClass: string | undefined = undefined;
	export let labelClass: string | undefined = undefined;
	export let inputContainerClass: string | undefined = undefined;
	export let inputClass: string | undefined = undefined;
	export let errorClass: string | undefined = undefined;
	let fileLabel: string = 'Nessun file selezionato';
	const _onFileChange = (event: any) => {
		if (event.target.files.length > 0) {
			fileLabel = event.target.files[0].name;
		} else {
			fileLabel = 'Nessun file selezionato';
		}
	};
</script>

<div class={containerClass}>
	{#if label}
		<label for={$$props.name} class="block text-sm font-medium text-gray-700 mb-1 {labelClass}"
			>{label}</label
		>
	{/if}

	<div
		class="relative flex cursor-pointer items-center rounded-md border py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 ocus-within:ring-offset-2 focus-within:ring-offset-gray-50 hover:bg-gray-50 {error
			? 'border-red-300 bg-white focus-within:ring-red-500'
			: $$props.disabled
			? 'border-gray-300 bg-gray-50 focus-within:ring-primary-500'
			: 'border-gray-300 bg-white focus-within:ring-primary-500'} {inputContainerClass}"
	>
		<label
			for={$$props.name}
			class="pointer-events-none relative text-sm font-medium {error
				? 'text-red-900'
				: $$props.disabled
				? 'text-gray-500'
				: 'text-gray-900'}"
		>
			{fileLabel}
		</label>

		<input
			type="file"
			class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0 {inputClass}"
			on:change={_onFileChange}
			on:input
			{...$$props}
		/>

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
