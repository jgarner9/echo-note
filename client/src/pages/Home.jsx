import logOut from "../controllers/logOut"

const Home = () => {
  return (
    <div id="home-page-container">
      <h1>Echo Note</h1>
      <button onClick={(e) => {logOut(e)}}>Log Out</button>
    </div>
  );
};

export default Home;
