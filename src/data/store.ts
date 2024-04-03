import { create } from 'zustand'
import { defaultContacts } from './contacts';

export type Contact = {
	name: string;
	phone: string;
}
type Store = {
	contacts: Contact[];
	addContact: (contact: Contact) => void;
	editContact: (name: string, newContact: Contact) => void;
	removeContact: (name: string) => void;
}

export const useContactStore = create<Store>(set => ({
	contacts: defaultContacts,

	addContact: (contact: Contact) => set(state => {
		// returnera nästa state
		return {
			contacts: [ ...state.contacts, contact ]
		}
	}),

	// Vi utgår från att namnet är unikt
	// TODO: lägg till id i datan
	editContact: (name, newContact) => {
		set(state => ({
			contacts: state.contacts.map(c => {
				if( c.name === name ) {
					return newContact
				} else {
					return c
				}
			})
		}))
	},
	removeContact: name => set(state => {
		const newContacts = state.contacts.filter(c => c.name !== name)
		return {
			contacts: newContacts
		}
	})
}))

