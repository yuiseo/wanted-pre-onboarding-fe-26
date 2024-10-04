import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MOCK_DATA } from '../assets/mock_data';


type MockData = {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
};

export default function DataTable(){
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
    (node: HTMLTableRowElement) => {
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
      <Wrapper>
        <h1>Product List</h1>
        <Table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Bought Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product.productId}
                ref={index === products.length - 1 ? lastElementRef : null}
              >
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>${product.price}</td>
                <td>{product.boughtDate}</td>
              </ProductRow>
            ))}
          </tbody>
        </Table>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>End of List</p>}
      </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 2rem 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    text-align: center;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #ddd;
  }
`;

const ProductRow = styled.tr``;