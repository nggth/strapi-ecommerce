import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function Account() {

    const { user, logoutnUser } = useContext(AuthContext)

    if (!user) {
        return (
            <div>
                <p>Please login or register</p>
                <Link href="/">
                    <a>Go back</a>
                </Link>
            </div>
        )
    }
    return (
        <div>
            <Head>
                <title>Account</title>
                <meta name="description" content="The account page, view your orders" />
            </Head>

            <h2>Account</h2>
            <a href="#" onClick={logoutnUser}>Logout</a>
        </div>
    )
}