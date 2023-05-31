'use client'

import User from '@/types/User'
import Image from 'next/image'

type Props = {
	user: User
}

const UserCard = ({ user }: Props) => {
	return (
		<div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
			<div className="absolute left-0 top-0 flex items-center rounded-br-full bg-gray-900 p-3">
				<h1 className="mx-3 text-lg font-semibold text-white">{user.id}</h1>
			</div>
			<Image
				className="h-56 w-full object-cover"
				src={user.avatar}
				alt={`${user.first_name} ${user.last_name}`}
				width={100}
				height={100}
				priority
			/>
			<div className="py-5 text-center">
				<a
					href="#"
					className="block text-xl font-bold text-gray-800 dark:text-white"
					tabIndex={0}
					role="link"
				>
					{`${user.first_name} ${user.last_name}`}
				</a>
				<span className="text-sm text-gray-700 dark:text-gray-200">
					{user.email}
				</span>
			</div>
		</div>
	)
}

export default UserCard
