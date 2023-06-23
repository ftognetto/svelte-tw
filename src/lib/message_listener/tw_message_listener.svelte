<script lang="ts">
	import { Transition } from '@rgossiaux/svelte-headlessui';
	import { CheckCircle, ExclamationTriangle, XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import message_listener_store from './message_listener_store';
	$: errors = $message_listener_store.errors;
	$: infos = $message_listener_store.infos;
	$: messages = [...errors, ...infos].sort((a, b) => a.timestamp - b.timestamp);
</script>

{#each messages as message, i}
	<div
		aria-live="assertive"
		class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-[100]"
		style="top: {82 * i}px"
	>
		<div class="flex w-full flex-col sm:items-end items-center space-y-4">
			<Transition
				show={true}
				enter="transform ease-out duration-300 transition"
				enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
				enterTo="translate-y-0 opacity-100 sm:translate-x-0"
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				{#if message.type === 'error'}
					<div
						class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-red-100"
					>
						<div class="p-4 bg-red-400">
							<div class="flex items-start">
								<div class="flex-shrink-0">
									<Icon src={ExclamationTriangle} class="h-6 w-6 text-white" aria-hidden="true" />
								</div>
								<div class="ml-3 flex-1 pt-0.5">
									{#if message.title}
										<p class="text-sm font-semibold text-white">
											{message.title}
										</p>
									{/if}
									<p class="text-sm text-white" class:mt-1={message.title}>{message.message}</p>
								</div>
								<div class="ml-4 flex flex-shrink-0">
									<button
										type="button"
										class="inline-flex rounded-md text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
										on:click={() => {
											message_listener_store.set({
												...$message_listener_store,
												errors: $message_listener_store.errors.filter(
													(i) => i.timestamp !== message.timestamp
												)
											});
										}}
									>
										<span class="sr-only">Close</span>
										<Icon src={XMark} class="h-5 w-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				{:else if message.type === 'info'}
					<div
						class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-green-100"
					>
						<div class="p-4 bg-green-400">
							<div class="flex items-start">
								<div class="flex-shrink-0">
									<Icon src={CheckCircle} class="h-6 w-6 text-white" aria-hidden="true" />
								</div>
								<div class="ml-3 flex-1 pt-0.5">
									{#if message.title}
										<p class="text-sm font-semibold text-white">
											{message.title}
										</p>
									{/if}
									<p class="text-sm text-white" class:mt-1={message.title}>
										{message.message}
									</p>
								</div>
								<div class="ml-4 flex flex-shrink-0">
									<button
										type="button"
										class="inline-flex rounded-md text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
										on:click={() => {
											message_listener_store.set({
												...$message_listener_store,
												infos: $message_listener_store.infos.filter(
													(i) => i.timestamp !== message.timestamp
												)
											});
										}}
									>
										<span class="sr-only">Close</span>
										<Icon src={XMark} class="h-5 w-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</Transition>
		</div>
	</div>
{/each}
