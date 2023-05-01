<script lang="ts">
	export let name: string;
	export let label: string;
	export let subtitle: string | undefined = undefined;
	export let checked: boolean = false;
	export let value: string = 'on';
	export let subtitleInline: boolean = false;
</script>

<div class="relative flex items-start {$$props.containerClass}">
	<div class="flex h-5 items-center">
		<input
			id={name}
			{name}
			type="checkbox"
			{checked}
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
</div>
