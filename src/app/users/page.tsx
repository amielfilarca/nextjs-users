import Header from '@/components/Header'
import LoadMoreButton from '@/components/LoadMoreButton'
import UserList from '@/components/UserList'

export default function Users() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<Header />
			<UserList />
			<div className="mb-32 mt-16 flex justify-center lg:mb-0">
				<LoadMoreButton />
			</div>
		</main>
	)
}
