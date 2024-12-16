import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';


// Login dengan Email/Password
export const loginWithEmail = async ({ email, password }: { email: string, password: string }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {
            success: true,
            user: userCredential.user,
        };
    } catch (error) {
        if (error instanceof Error) {
            console.error("Login failed:", error.message);
            return {
                success: false,
                message: error.message,
            };
        } else {
            console.error("Login failed:", error);
            return {
                success: false,
                message: String(error),
            };
        }
    }
};

// Login dengan Google
export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return {
            success: true,
            user: result.user,
        };
    } catch (error) {
        if (error instanceof Error) {
            console.error("Google login failed:", error.message);
            return {
                success: false,
                message: error.message,
            };
        } else {
            console.error("Google login failed:", error);
            return {
                success: false,
                message: String(error),
            };
        }
    }
};


import { signOut } from 'firebase/auth';

export const logout = async () => {
    try {
        await signOut(auth);
        console.log('User successfully logged out');
        return { success: true, message: 'Logout successful' };
    } catch (error) {
        if (error instanceof Error) {
            console.error('Logout failed:', error.message);
            return { success: false, message: error.message };
        }
    }
};
