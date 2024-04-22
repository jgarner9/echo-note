import logOut from "../controllers/logOut";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div id="home-page-container">
      <h1 id="echo-note-title">Echo Note</h1>
      <button
        onClick={async (e) => {
          await logOut(e);
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
