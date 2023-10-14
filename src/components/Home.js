import Mac from "../components/images/Macbook_Pro.jpg"; // Replace with your image path

function Home() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${Mac})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          className="mask"
          style={{
            maxWidth: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            paddingTop: "6rem",
            paddingBottom: "6rem",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">HI</h1>
              <h4 className="mb-3">I'm VEER H JABAK</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                LET'S CONNECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
