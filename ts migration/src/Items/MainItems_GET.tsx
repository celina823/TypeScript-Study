import axios from "axios";
import { useState, useEffect } from "react";
import DefaultImage from "../Assets/img_default.png";
import { MainItemsGetPagination } from "./MainItems_GET_Pagination"; // 페이지네이션 컴포넌트 임포트
import IcHeart from "../Assets/Ic_heart.png";

export function MainItemsGET({ page = 1, keyword = "" }) {
  const [data, setData] = useState(null); // 데이터를 저장할 상태
  const [currentPage, setCurrentPage] = useState(page); // 현재 페이지 상태 관리
  const [totalCount, setTotalCount] = useState(0); // 전체 데이터 개수 상태
  const pageSize = 10; // 한 페이지당 보여줄 항목 수

  // 데이터 불러오는 useEffect 훅
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 페이지 번호를 쿼리 파라미터로 전달
        const response = await axios.get(
          `http://localhost:3001/product?page=${currentPage}&limit=${pageSize}&sort=createdAt&order=desc`
        );
        setData(response.data); // 데이터를 상태에 저장
        setTotalCount(response.data.totalItems); // 전체 데이터 개수 저장
      } catch (error) {
        console.error("에러메세지 ", error); // 에러 발생 시 처리
      }
    };
    fetchData(); // 데이터를 가져오는 함수 실행
  }, [currentPage]); // 페이지가 변경될 때마다 데이터를 새로 가져옴

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalCount / pageSize)) return;
    setCurrentPage(newPage); // 페이지 변경 처리
  };

  // 5개씩 데이터를 나누는 함수
  const chunkData = (data) => {
    const chunked = [];
    for (let i = 0; i < data.length; i++) {
      chunked.push(data[i]);
    }
    return chunked;
  };
  // 1000단위마다 쉼표 넣는 정규 표현식
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div id="productArea">
      {!data ? (
        <p>로딩 중입니다.</p>
      ) : // 데이터가 로드된 후, 각 항목을 map으로 출력 + 데이터가 로드된 후, 5개씩 나누어 2줄로 출력
      data.products && data.products.length > 0 ? (
        <div className="product-grid">
          {chunkData(data.products).map((product, index) => (
            <div id="productOne" key={index} className="product-item">
              <img
                id="productImg"
                src={product.image || DefaultImage} // 이미지가 없으면 디폴트 이미지 사용
                alt={product.name}
              />
              <div id="productContent">
                <div id="productContent-name">{product.name}</div>
                <div id="productContent-price">
                  {formatPrice(product.price)}원
                </div>
                <div id="favoriteSellProduct">
                  <img src={IcHeart} alt="heart icon" />0
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>상품이 없습니다.</p>
      )}
      {/* 페이지네이션 컴포넌트 추가 */}
      <MainItemsGetPagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange} // 페이지 변경 이벤트 핸들러 전달
      />
    </div>
  );
}
