import React from 'react';

interface Users {
	id: number;
	name: string;
}

async function UserPage() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: Users[] = await res.json();
	// const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default UserPage;
