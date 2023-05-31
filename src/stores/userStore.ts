import getUsers from '@/lib/getUsers'
import User from '@/types/User'
import { create } from 'zustand'

interface UserStore {
	users: User[]
	page: number
	totalPages: number
	getUsers: () => void
}

const useUserStore = create<UserStore>((set, get) => ({
	users: [],
	page: 0,
	totalPages: 1,
	getUsers: async () => {
		const { data, total_pages } = await getUsers({ page: get().page + 1 })

		set(state => ({
			users: [...state.users, ...data],
			page: state.page + 1,
			totalPages: total_pages
		}))
	}
}))

export default useUserStore
