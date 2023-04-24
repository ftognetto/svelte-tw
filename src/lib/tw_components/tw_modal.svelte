<script lang="ts">
	import { Dialog, DialogTitle, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let show = false;
	export let title: string;
</script>

<Transition {show}>
	<Dialog as="div" class="relative z-10" on:close={() => (show = false)}>
		<TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
		</TransitionChild>

		<div class="fixed inset-0 z-10 overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				>
					<div
						class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-screen max-w-sm sm:max-w-lg sm:p-6 {$$props.class}"
					>
						<div class="flex mb-4">
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex-1">
								{title}
							</DialogTitle>
							<div class="flex-shrink">
								<button
									type="button"
									class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
									on:click={() => (show = false)}
								>
									<span class="sr-only">Close</span>
									<Icon src={XMark} class="h-6 w-6" />
								</button>
							</div>
						</div>

						<slot />
					</div>
				</TransitionChild>
			</div>
		</div>
	</Dialog>
</Transition>
