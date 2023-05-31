import Header from '@/components/Header'
import LoadMoreButton from '@/components/LoadMoreButton'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-12 p-24">
			<Header />
			<LoadingSpinner />
			<div className="mb-32 flex justify-center lg:mb-0">
				<LoadMoreButton />
			</div>
		</main>
	)
}
