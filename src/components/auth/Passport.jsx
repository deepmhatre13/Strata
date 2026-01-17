import { GoogleOAuthProvider } from '@react-oauth/google'

export function Passport({ children }) {
  // Get Google Client ID from environment variable
  // For development, you can use a placeholder or set it in .env
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  )
}
