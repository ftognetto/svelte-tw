<script>
	import { Menu, MenuButton, MenuItems, Transition } from '@rgossiaux/svelte-headlessui';
</script>

<Menu as="div" class="relative inline-block text-left">
	<MenuButton
		class="relative -ml-px inline-flex items-center rounded-r-md  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
	>
		<slot name="button" />
	</MenuButton>

	<Transition
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<MenuItems
			class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<div class="py-1">
				<slot name="items" />
			</div>
		</MenuItems>
	</Transition>
</Menu>
