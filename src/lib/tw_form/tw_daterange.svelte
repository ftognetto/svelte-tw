<script lang="ts">
	export let nameFrom: string;
	export let nameTo: string;
	export let label: string | undefined = undefined;
	export let labelFrom: string | undefined = undefined;
	export let labelTo: string | undefined = undefined;
	export let placeholder: string = label || nameFrom;
	export let valueFrom: string | undefined = undefined;
	export let valueTo: string | undefined = undefined;
	export let errorFrom: string | undefined = undefined;
	export let errorTo: string | undefined = undefined;

	export let autocomplete: boolean = false;
	export let readonly: boolean = false;

	$: inputClass =
		'relative block w-full bg-transparent pl-10 focus:z-10 focus:border-primary-500 focus:ring-primary-500 text-sm ' +
		$$props.inputClass;
	$: if (errorFrom || errorTo) {
		inputClass += ' border-red-300';
	} else {
		inputClass += ' border-gray-300';
	}
</script>

<fieldset>
	{#if label}
		<legend class="block text-sm font-medium text-gray-700">{label}</legend>
	{/if}
	<div class="flex -space-x-px mt-1">
		<div class="w-1/2 min-w-0 flex-1 relative">
			<label for={nameFrom} class="sr-only">{labelFrom}</label>
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<span class="text-gray-500 sm:text-sm">{labelFrom}</span>
			</div>
			<input
				id={nameFrom}
				type="date"
				name={nameFrom}
				bind:value={valueFrom}
				{placeholder}
				class="{inputClass} rounded-none rounded-bl-md rounded-tl-md"
				{readonly}
				on:change
				on:input
			/>
		</div>
		<div class="min-w-0 flex-1 relative">
			<label for={nameTo} class="sr-only">{labelTo}</label>
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<span class="text-gray-500 sm:text-sm">{labelTo}</span>
			</div>
			<input
				id={nameTo}
				type="date"
				name={nameTo}
				value={valueTo || ''}
				{placeholder}
				class="{inputClass} rounded-none rounded-br-md rounded-tr-md"
				{readonly}
				on:change
				on:input
			/>
		</div>
	</div>
	{#if errorFrom || errorTo}
		<div class="mt-2 text-sm text-red-600">
			{#if errorFrom}
				{@html errorFrom.split(',').join('<br/>')}
			{:else if errorTo}
				{@html errorTo.split(',').join('<br/>')}
			{/if}
		</div>
	{/if}
	<slot />
</fieldset>
