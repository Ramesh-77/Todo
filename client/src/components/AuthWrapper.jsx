export const AuthWrapper = ({ children }) => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 gap-5 py-5">
            {children}
        </div>
    )
}