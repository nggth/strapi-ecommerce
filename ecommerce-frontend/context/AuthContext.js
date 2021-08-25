import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from '../utils/urls'

const AuthContext = createContext()

let magic
export const AuthProvider = (props) => {
    const [ user, setUser] = useState(null)
    const rouer = useRouter()

    /**
     * Adds email to user
     * @param {string} email 
     */
    const loginUser = async (email) => {
        try {
            await magic.auth.loginWithMagicLink({ email })
            setUser({email})
            rouer.push('/')
        } catch (err) {
            setUser(null)
        }
    }

    /**
     * Sets the user to null
     */
    const logoutUser = async () => {
        try {
            await magic.user.logout()
            setUser(null)
            rouer.push('/')
        } catch (err) {
            
        }
    }

    const checkUserLoggedIn = async () => {
        try {
            const isLoggedIn = await magic.user.isLoggedIn()

            if(isLoggedIn) {
                const { email } = await magic.user.getMetadata()
                setUser({ email })

                //Jsut for testing
                const token = await getToken()
                console.log("checkUserLoggedIn token", token)
            }
        } catch (err) {
            
        }
    }

    /**
     * Retrieves the Magic Issues Bearer Token
     * This allows User to make authenticated requests.
     */
    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken()
            return token
        } catch (err) {
            
        }
    }

    useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY)

        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, getToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext