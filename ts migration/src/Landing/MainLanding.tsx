import helloPandaImage from "../Assets/Img_home_top.png";
import shoppingPandaImage from "../Assets/Frame 2608833.png";
import searchingImage from "../Assets/Img_home_02.png";
import folderImage from "../Assets/Img_home_03.png";
import TradingPandaImage from "../Assets/Img_home_bottom.png";

export function MainLanding() {
  return (
    // 줄바꿈 <br>들 css 'white-space'속성 추가로 수정해보기
    <div>
      <div className="sky-top">
        <div className="두개포함1">
          <div className="box1-text">
            <div className="box1-ht">
              <h1>일상의 모든 물건을 거래해 보세요</h1>
            </div>
            <a className="goo" href="./items/index.html" target="_blank">
              <button className="goo-btn">구경하러 가기</button>{" "}
            </a>
          </div>
          <img src={helloPandaImage} width="50%" alt="장바구니 든 판다" />
        </div>
      </div>
      <div className="hotItemArea">
        <div className="heart-nemo">
          <img
            src={shoppingPandaImage}
            width="50%"
            alt="쇼핑하는 판다 이미지"
          />
          <div className="box2-text">
            <div className="blue-it"> Hot item </div>
            <div className="box2-ht">인기 상품을 확인해 보세요</div>
            <div className="smallExplanation">
              가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
            </div>
          </div>
        </div>
      </div>

      <div className="searchArea">
        <div className="search-nemo">
          <div className="box3-text">
            <div className="blue-it"> Search </div>
            <div className="box3-ht">구매를 원하는 상품을 검색하세요</div>
            <div className="smallExplanation">
              구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
            </div>
          </div>
          <img width="50%" src={searchingImage} alt="검색하는 이미지" />
        </div>
      </div>

      <div className="registerArea">
        <div className="folder-nemo">
          <img src={folderImage} width="50%" alt="판매등록 이미지" />
          <div className="box4-text">
            <div className="blue-it"> Register </div>
            <div className="box4-ht">판매를 원하는 상품을 등록하세요</div>
            <div className="smallExplanation">
              어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
            </div>
          </div>
        </div>
      </div>

      <div className="sky-bottom">
        <div className="두개포함5">
          <div className="box5-text">믿을 수 있는 판다마켓 중고 거래</div>
          <img width="50%" src={TradingPandaImage} alt="거래하는 판다" />
        </div>
      </div>
    </div>
  );
}
