export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_149394F04C8DE196'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51JSMeNAJHrByktjfqpCy8Zb7F1nVI32AvshOYjDUUuo68Y9j32oCaC2NxqhltU9wddNLZrfGJdkaicTaytvMY7Uj00foZPVPw5'


/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url
}