import { useRouter } from 'next/router'

const Car = () => {
    const router = useRouter()
    const { id } = router.query
    return <h1>Hello {id}</h1>
}

export default Car
