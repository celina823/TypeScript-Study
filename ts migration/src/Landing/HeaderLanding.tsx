import pandaHomeImage from "../Assets/NavHome.png";

export function HeaderLanding() {
  const handleLoginClick = () => {
    location.href = "./login/login.html"; // 로그인 페이지로 이동
  };
  return (
    <div id="head-box">
      <div id="headContainer" className="head-box">
        <a rel="home" className="home" href="/">
          <img className="panda-home" src={pandaHomeImage} />
        </a>
        <a href="./login/login.html" target="_self">
          <button className="login-btn" onClick={handleLoginClick}>
            로그인
          </button>
        </a>
      </div>
    </div>
  );
}
