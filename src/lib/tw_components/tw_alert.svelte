<script lang="ts">
	import { CheckCircle, ExclamationCircle, InformationCircle, XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let dismissable: boolean = false;
	let dismiss = false;
	export let type: 'success' | 'error' | 'warning' | 'info' = 'success';
	let color =
		type === 'success'
			? 'green'
			: type === 'error'
			? 'red'
			: type === 'warning'
			? 'yellow'
			: 'blue';
	let bg50 =
		type === 'success'
			? 'bg-green-50'
			: type === 'error'
			? 'bg-red-50'
			: type === 'warning'
			? 'bg-yellow-50'
			: 'bg-blue-50';
	let bg100 =
		type === 'success'
			? 'bg-green-100'
			: type === 'error'
			? 'bg-red-100'
			: type === 'warning'
			? 'bg-yellow-100'
			: 'bg-blue-100';
	let color400 =
		type === 'success'
			? 'text-green-400'
			: type === 'error'
			? 'text-red-400'
			: type === 'warning'
			? 'text-yellow-400'
			: 'text-blue-400';
	let color500 =
		type === 'success'
			? 'text-green-500'
			: type === 'error'
			? 'text-red-500'
			: type === 'warning'
			? 'text-yellow-500'
			: 'text-blue-500';
	let color700 =
		type === 'success'
			? 'text-green-700'
			: type === 'error'
			? 'text-red-700'
			: type === 'warning'
			? 'text-yellow-700'
			: 'text-blue-700';
	let color800 =
		type === 'success'
			? 'text-green-800'
			: type === 'error'
			? 'text-red-800'
			: type === 'warning'
			? 'text-yellow-800'
			: 'text-blue-800';
	let icon =
		type === 'success'
			? CheckCircle
			: type === 'error'
			? XCircle
			: type === 'warning'
			? ExclamationCircle
			: InformationCircle;
</script>

{#if !dismiss}
	<div class="rounded-md {bg50} p-4 {$$props.class}">
		<div class="flex">
			<div class="flex-shrink-0">
				<Icon src={icon} theme="mini" class="h-5 w-5 {color400}" />
			</div>
			<div class="ml-3 flex-grow">
				<h3 class="text-sm font-medium {color800}">{title}</h3>
				{#if subtitle}
					<div class="mt-2 text-sm {color700}">
						<p>{subtitle}</p>
					</div>
				{/if}
				{#if $$slots.default}
					<div class="mt-4">
						<slot />
					</div>
				{/if}
			</div>
			{#if dismissable}
				<div class="ml-auto pl-3">
					<div class="-mx-1.5 -my-1.5">
						<button
							on:click={() => (dismiss = true)}
							type="button"
							class="inline-flex rounded-md {bg50} p-1.5 {color500} hover:{bg100} focus:outline-none"
						>
							<span class="sr-only">Dismiss</span>
							<!-- Heroicon name: mini/x-mark -->
							<svg
								class="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
								/>
							</svg>
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
