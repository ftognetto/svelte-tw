<script lang="ts">
	export let name: string | undefined = undefined;
	export let label: string;
	export let subtitle: string | undefined = undefined;
	export let checked: boolean = false;
	export let value: string = 'on';
	export let subtitleInline: boolean = false;
	export let error: string | string[] | undefined = undefined;
	export let errorClass: string | undefined = undefined;
</script>

<div class="relative flex items-start {$$props.containerClass}">
	<div class="flex h-5 items-center">
		<input
			id={name}
			{name}
			type="checkbox"
			bind:checked
			{value}
			on:change
			class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
		/>
	</div>
	<div class="ml-3 text-sm">
		<label for={name} class="font-medium text-gray-700">{label}</label>
		{#if subtitle}
			{#if subtitleInline}
				<span id="{name}-description" class="text-gray-500">
					{subtitle}
				</span>
			{:else}
				<p id="{name}-description" class="text-gray-500">
					{subtitle}
				</p>
			{/if}
		{/if}
	</div>
	{#if error}
		{#if Array.isArray(error)}
			{#each error as _error}
				<p class="mt-2 text-sm text-red-600 {errorClass}">{_error}</p>
			{/each}
		{:else}
			<p class="mt-2 text-sm text-red-600 {errorClass}">{error}</p>
		{/if}
	{/if}
</div>
