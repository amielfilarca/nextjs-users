'use client'

import useUserStore from '@/stores/userStore'
import { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import UserCard from './UserCard'

const UserList = () => {
	const { users, getUsers } = useUserStore()

	useEffect(() => {
		if (!users.length) {
			getUsers()
		}
	}, [getUsers, users.length])

	return (
		<div className="relative mt-16 grid w-full max-w-7xl content-start justify-center gap-16 lg:grid-cols-3">
			{!users.length && (
				<div className="absolute flex h-full w-full flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			)}
			{users.map(user => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserList
