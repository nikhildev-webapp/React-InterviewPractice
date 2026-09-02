import { useContext } from 'react'
import { ThemeContext } from './Context/ThemContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <main
      className={`flex min-h-screen items-center justify-center px-4 py-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <section
        className={`w-full max-w-lg rounded-2xl p-6 text-center shadow-xl sm:p-10 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <h1 className="text-2xl font-bold sm:text-3xl">Theme Context Demo</h1>
        <p className="mt-3 text-sm opacity-75 sm:text-base">
          The current theme is {theme}.
        </p>
        <button
          type="button"
          onClick={toggleTheme}
          className={`mt-6 rounded-lg px-5 py-3 font-semibold transition ${
            isDark
              ? 'bg-white text-gray-900 hover:bg-gray-200'
              : 'bg-gray-900 text-white hover:bg-gray-700'
          }`}
        >
          Switch to {isDark ? 'light' : 'dark'} mode
        </button>
      </section>
    </main>
  )
}

export default ThemeToggle