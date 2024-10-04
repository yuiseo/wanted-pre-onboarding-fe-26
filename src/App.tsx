import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { MOCK_DATA } from './assets/mock_data';

type MockData = {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5; /* 배경색 설정 */
  }
`;

const Wrapper = styled.div`  // 태그를 area에서 div로 수정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const ProductItem = styled.div`
  width: 450px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
`;

function App() {
  const [products, setProducts] = useState<MockData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const PER_PAGE = 10;

  const getMockData = async (pageNum: number) => {
    return new Promise<{ datas: MockData[]; isEnd: boolean }>((resolve) => {
      setTimeout(() => {
        const startIdx = PER_PAGE * (pageNum - 1);
        const endIdx = PER_PAGE * pageNum;
        const datas: MockData[] = MOCK_DATA.slice(startIdx, endIdx);

        const isEnd = endIdx >= MOCK_DATA.length;

        resolve({ datas, isEnd });
      }, 1500);
    });
  };

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // 페이지가 변경될 때마다 데이터 로드
  useEffect(() => {
    const fetchData = async () => {
      if (!hasMore) return;
      setLoading(true);
      const { datas, isEnd } = await getMockData(page);

      setProducts((prevProducts) => [...prevProducts, ...datas]);
      setHasMore(!isEnd);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Product List</h1>
        {products.map((product, index) => (
          <ProductItem
            key={product.productId}
            ref={index === products.length - 1 ? lastElementRef : null} // 마지막 아이템에 ref 추가
          >
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Bought Date: {product.boughtDate}</p>
          </ProductItem>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>End of List</p>}
      </Wrapper>
    </>
  );
}

export default App;
