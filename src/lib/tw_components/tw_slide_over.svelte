<script lang="ts">
	import {
		Dialog,
		DialogTitle,
		TransitionChild,
		TransitionRoot
	} from '@rgossiaux/svelte-headlessui';
	import { XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let open = false;
</script>

<TransitionRoot show={open} class={$$props.class}>
	<Dialog class="relative z-10" on:close={() => (open = false)}>
		<div class="fixed inset-0" />

		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
					<TransitionChild
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div class="pointer-events-auto w-screen max-w-md h-full">
							<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
								<div class="px-4 sm:px-6">
									<div class="flex items-start justify-between">
										<DialogTitle class="text-base font-semibold leading-6 text-gray-900">
											<slot name="title" />
										</DialogTitle>
										<div class="ml-3 flex h-7 items-center">
											<button
												type="button"
												class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
												on:click={() => (open = false)}
											>
												<span class="sr-only">Close panel</span>
												<Icon src={XMark} class="h-6 w-6" />
											</button>
										</div>
									</div>
								</div>
								<div class="relative mt-6 flex-1 px-4 sm:px-6">
									<slot />
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</div>
	</Dialog>
</TransitionRoot>
