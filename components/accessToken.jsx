import { useSession, } from "next-auth/react"
// signIn, signOut up here


export default function Component() {
    const { data } = useSession()
    // const [session, loading] = useSession()
    const { accessToken } = data

    return (
        <>
            <div>Access Token: {accessToken}</div>
            {/* {!session && (
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
            {session && (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )} */}
        </>
    )
}