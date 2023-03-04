import { useSession, } from "next-auth/react"
// signIn, signOut up here


export default function Component() {
    const { data } = useSession()
    const { accessToken } = data

    return <div>Access Token: {accessToken}</div>
}