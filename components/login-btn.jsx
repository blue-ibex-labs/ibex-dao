import { useSession, signIn, signOut } from "next-auth/react"


export default function LOGIN() {
    const { data: session, status } = useSession({ required: true })
    console.log(session)
    if (status === 'authenticated') {
        return (
            <>

                <h2>Signed in as {session.user.name}</h2> <br />
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <h2>Not signed in</h2> <br />
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => signIn()}>Sign in</button>
        </>
    )
}