import { writable } from 'svelte/store';

const messageListenerStore = writable<{
	settings: { defaultErrorMessage: string; defaultInfoMessage: string };
	errors: { type: 'error'; title?: string; message: string; timestamp: number }[];
	infos: { type: 'info'; title?: string; message: string; timestamp: number }[];
}>({
	errors: [],
	infos: [],
	settings: {
		defaultErrorMessage: "Si è verificato un'errore",
		defaultInfoMessage: 'Azione completata con successo'
	}
});

export default {
	subscribe: messageListenerStore.subscribe,
	set: messageListenerStore.set
};

export const showError = (message?: string, title?: string) => {
	addMessage('error', message, title);
};
export const showInfo = (message?: string, title?: string) => {
	addMessage('info', message, title);
};

const addMessage = (type: 'error' | 'info', message?: string, title?: string) => {
	const timestamp = new Date().getTime();
	if (type === 'error') {
		messageListenerStore.update((state) => ({
			...state,
			errors: [
				...state.errors,
				{ message: message || state.settings.defaultErrorMessage, title, timestamp, type: 'error' }
			]
		}));
		setTimeout(() => {
			messageListenerStore.update((state) => ({
				...state,
				errors: [...state.errors].filter((e) => e.timestamp !== timestamp)
			}));
		}, 5000);
	} else if (type === 'info') {
		messageListenerStore.update((state) => ({
			...state,
			infos: [
				...state.infos,
				{
					message: message || state.settings.defaultInfoMessage,
					title,
					timestamp,
					type: 'info'
				}
			]
		}));
		setTimeout(() => {
			messageListenerStore.update((state) => ({
				...state,
				infos: [...state.infos].filter((e) => e.timestamp !== timestamp)
			}));
		}, 5000);
	}
};
