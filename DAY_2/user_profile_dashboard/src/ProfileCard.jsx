function ProfileCard({ children, className = "", style = {} }) {
  // base styles for the card (you can move these to CSS instead)
  const baseStyle = {
    maxWidth: "820px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    ...style, 
  };


  return (
    <section
      className={`profile-card ${className}`.trim()}
      style={baseStyle}
      aria-label="User profile card"
    >
      {children}
    </section>
  );
}

export default ProfileCard;