import { useState } from 'react'

const Profile = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Unable to load profiles.')
      }
      const userData = await response.json()
      setData(userData)
    } catch (fetchError) {
      setError(fetchError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold uppercase text-gray-900 sm:text-4xl">
            User Profiles
          </h1>
          <p className="mt-2 text-gray-600">Click the button to load user information.</p>
          <button
            type="button"
            onClick={fetchData}
            disabled={loading}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Loading profiles...' : 'Show profiles'}
          </button>
        </div>

        {error && <p className="mb-6 text-center font-medium text-red-600">{error}</p>}

        {data.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((user) => (
              <article
                key={user.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h2 className="mb-4 text-xl font-bold text-gray-900">{user.name}</h2>
                <div className="space-y-2 break-words text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-800">Email:</span> {user.email}</p>
                  <p><span className="font-semibold text-gray-800">Phone:</span> {user.phone}</p>
                  <p><span className="font-semibold text-gray-800">Website:</span> {user.website}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Profile