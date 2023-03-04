import { useSession, signIn, signOut } from "next-auth/react"

export default function LOGIN() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => signIn()}>Sign in</button>
        </>
    )
}