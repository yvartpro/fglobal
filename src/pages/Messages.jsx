import { useEffect, useState } from "react"

export default function Messages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const resp = await fetch("https://technomedea.com/backend/fetch/messages.php")
        if (!resp.ok) throw new Error(resp.statusText)
        const res = await resp.json()
        if (res.data) {
          setMessages(res.data)
        }
      } catch (err) {
        console.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const formatDate = (data) => {
    const now = new Date()
    const date = new Date(data)
    const formatted = date.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    const time = `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`
    return date.getDay() - now.getDay() !== 0 ? formatted : time
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-gray-300 text-lg animate-pulse">
          Chargement des messages...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          📩 Liste des messages
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Gérez vos messages reçus dans le tableau de bord
        </p>
      </div>

      {/* Messages grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center col-span-2">
            Aucun message trouvé.
          </p>
        ) : (
          messages.map((message) => {
            const encodedSubject = encodeURIComponent("Re: " + message.subject)
            const encodedMessage = encodeURIComponent(
              `\n\n--- Message original---\nDe: ${message.name} <${message.email}>\nDate: ${message.created_at}\nObjet: ${message.subject}\n\n${message.text}`
            )

            return (
              <div
                key={message.id}
                className="bg-gray-800/90 rounded-xl shadow-lg border border-gray-700 p-5 hover:scale-[1.02] transition-transform"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-green-400 text-base">
                    {message.name}
                  </span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                    {formatDate(message.created_at)}
                  </span>
                </div>

                {/* Content */}
                <div className="text-gray-200 text-sm">
                  <p className="mb-1">
                    <b className="text-gray-300">Objet:</b> {message.subject}
                  </p>
                  <p className="text-gray-400">{message.text}</p>
                </div>

                {/* Action */}
                <div className="text-right mt-4">
                  <a
                    href={`mailto:${message.email}?subject=${encodedSubject}&body=${encodedMessage}`}
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                  >
                    Répondre
                  </a>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
