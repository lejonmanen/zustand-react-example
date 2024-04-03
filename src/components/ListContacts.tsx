import { useContactStore } from '../data/store'

const ListContacts = () => {
	const contacts = useContactStore(state => state.contacts)

	return (
		<div className="contact-list">
			{contacts.map(c => (
				<div key={c.name}>
					<p> {c.name} </p>
					<p> {c.phone} </p>
				</div>
			))}
		</div>
	)
}

export default ListContacts
