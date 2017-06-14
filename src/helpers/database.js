import { ref } from '../config/constants'

export const addNewMessage = async (message) => {
    try {
        const messageRef = ref.child('messages')
        await messageRef.push(message)
        console.log('Message Saved')
    } catch (error) {
        console.error('Error caught when saving message!')
        console.error(error.message)
    }
}
