import User from '@/types/User'

type Props = {
	page: number
}

export default async function getUsers({
	page
}: Props): Promise<{ data: User[]; total_pages: number }> {
	const res = await fetch(`https://reqres.in/api/users?page=${page}`)
	return res.json()
}
