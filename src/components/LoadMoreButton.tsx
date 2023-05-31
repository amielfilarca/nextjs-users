'use client'

import useUserStore from '@/stores/userStore'

const LoadMoreButton = () => {
	const { getUsers, totalPages, page } = useUserStore()

	return (
		<button
			onClick={getUsers}
			disabled={page === totalPages}
			className="flex transform items-center rounded-lg bg-blue-600 px-4 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 disabled:cursor-not-allowed disabled:bg-blue-400"
		>
			<svg
				className="mx-1 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
					clipRule="evenodd"
				/>
			</svg>

			<span className="mx-1">Load More</span>
		</button>
	)
}

export default LoadMoreButton
