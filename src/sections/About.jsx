function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 40px",
        backgroundColor: "#181818",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "30px",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#b3b3b3",
          }}
        >
          I am a frontend developer passionate about building modern,
          responsive, and visually appealing web applications using React
          and JavaScript.
        </p>
      </div>
    </section>
  );
}

export default About;