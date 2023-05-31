import Header from '@/components/Header'
import LoadMoreButton from '@/components/LoadMoreButton'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<Header />
			<div className="flex flex-1 items-center justify-center">
				<LoadingSpinner />
			</div>
			<div className="mb-32 mt-16 flex justify-center lg:mb-0">
				<LoadMoreButton />
			</div>
		</main>
	)
}
