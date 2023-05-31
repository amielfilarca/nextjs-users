'use client'

import useUserStore from '@/stores/userStore'
import { useEffect } from 'react'
import UserCard from './UserCard'

const UserList = () => {
	const { users, getUsers } = useUserStore()

	useEffect(() => {
		if (!users.length) {
			getUsers()
		}
	}, [getUsers, users])

	return (
		<div className="grid w-full max-w-7xl flex-1 place-items-center gap-16 lg:grid-cols-3">
			{users.map(user => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserList
