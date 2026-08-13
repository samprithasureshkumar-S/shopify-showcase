function AnnouncementBar({ messages, style }) {
  return (
    <div className="announcement-bar" style={style}>
      <div className="announcement-bar__track">
        {messages.map((message) => (
          <span key={message}>{message}</span>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
