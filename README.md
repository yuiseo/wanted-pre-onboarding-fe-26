# 프리온보딩 FE 챌린지 10월 (2024) | 리액트 오픈소스 펼쳐보기

## 챌린지 과제 제출 방법
> 과제를 진행한 repository의 링크를 Gist Comment에 남겨주세요.

## 챌린지 과제 내용
1. 하나의 SinglePage에 Intersection Observer를 이용해 무한스크롤을 구현하세요.
2. 현재 가져온 상품 리스트들의 액수들의 합계를 화면에 보여주세요 (ex. 현재 20개의 상품을 가져온 상태라면 20개 물품의 가격 총 합을 보여주면 됨)

### 무한 스크롤의 조건
1. 페이지를 현재 보여주는 페이지의 최하단으로 이동 시 다음 페이지 정보를 가져오게 합니다.
2. 더이상 가져올 수 없는 상황이라면 더 이상 데이터를 가져오는 함수를 호출하지 않습니다.
3. 로딩 시 로딩 UI가 보여아 합니다. (UI의 형식은 자유)

### 과제 유의 사항
1. React + 함수형 컴포넌트를 사용해서 개발해주세요
2. 제공해드린 Mock 데이터는 수정 및 추가가 가능합니다. 
3. 무한스크롤 관련된 라이브러리 사용 절대 금지
4. 비동기 상태 관리 라이브러리 사용 절대 금지 (ex. tanstack-query)
5. 3, 4번 조건 외의 라이브러리는 자유롭게 사용하셔도 됩니다

### 첨부 코드
구현에만 집중할 수 있도록 mock 데이터와 호출용 promise 함수를 제공해 드리니 아래를 사용하시길 바랍니다.

<details>

```
// 반환되는 데이터의 타입
interface MockData {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
}
```

```
const MOCK_DATA: MockData[] = [
  {
    productId: "66e1c1df3594bb65169e0f9b",
    productName: "Elegant Granite Fish",
    price: 792.0,
    boughtDate: "Sat Jun 01 1985 20:00:06 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0f9c",
    productName: "Intelligent Steel Towels",
    price: 287.0,
    boughtDate: "Sun Jul 02 2017 01:41:40 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0f9d",
    productName: "Intelligent Soft Car",
    price: 603.0,
    boughtDate: "Sun May 09 2010 17:25:02 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0f9e",
    productName: "Practical Plastic Chips",
    price: 420.0,
    boughtDate: "Sun Jun 03 1973 15:54:34 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0f9f",
    productName: "Small Frozen Chair",
    price: 421.0,
    boughtDate: "Sun Nov 11 2018 12:37:55 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa0",
    productName: "Ergonomic Frozen Cheese",
    price: 852.0,
    boughtDate: "Thu May 13 1999 21:20:14 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa1",
    productName: "Luxurious Cotton Fish",
    price: 838.0,
    boughtDate: "Thu Aug 26 2004 11:45:55 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa2",
    productName: "Practical Plastic Mouse",
    price: 280.0,
    boughtDate: "Wed Aug 23 2000 12:01:29 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa3",
    productName: "Elegant Bronze Pizza",
    price: 517.0,
    boughtDate: "Thu Oct 14 1999 14:55:51 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa4",
    productName: "Awesome Concrete Hat",
    price: 867.0,
    boughtDate: "Thu Sep 14 2023 12:48:29 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa5",
    productName: "Ergonomic Concrete Chips",
    price: 418.0,
    boughtDate: "Fri Sep 08 2023 23:56:52 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa6",
    productName: "Generic Soft Ball",
    price: 449.0,
    boughtDate: "Sun Sep 24 1972 08:49:56 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa7",
    productName: "Practical Metal Computer",
    price: 533.0,
    boughtDate: "Fri Jan 09 2015 20:11:42 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa8",
    productName: "Modern Metal Computer",
    price: 623.0,
    boughtDate: "Wed Mar 02 2016 02:26:23 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fa9",
    productName: "Ergonomic Cotton Computer",
    price: 513.0,
    boughtDate: "Sat Jul 02 2016 18:54:19 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0faa",
    productName: "Tasty Soft Cheese",
    price: 663.0,
    boughtDate: "Wed Mar 03 2021 08:39:08 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fab",
    productName: "Bespoke Granite Computer",
    price: 879.0,
    boughtDate: "Wed May 19 1976 08:50:28 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fac",
    productName: "Practical Cotton Hat",
    price: 633.0,
    boughtDate: "Tue Sep 22 1987 00:04:50 GMT+1000 (한국 하계 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fad",
    productName: "Rustic Frozen Bike",
    price: 30.0,
    boughtDate: "Sat Aug 18 2001 14:47:25 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fae",
    productName: "Electronic Frozen Tuna",
    price: 927.0,
    boughtDate: "Mon Jan 19 1998 06:00:00 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0faf",
    productName: "Small Fresh Table",
    price: 118.0,
    boughtDate: "Wed Aug 31 2005 11:18:57 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb0",
    productName: "Handmade Wooden Bike",
    price: 427.0,
    boughtDate: "Sat Jun 04 1983 02:29:03 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb1",
    productName: "Fantastic Fresh Shoes",
    price: 550.0,
    boughtDate: "Tue Dec 05 1972 15:42:44 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb2",
    productName: "Practical Soft Keyboard",
    price: 831.0,
    boughtDate: "Tue Jun 09 1970 17:00:14 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb3",
    productName: "Recycled Soft Chair",
    price: 745.0,
    boughtDate: "Wed Feb 12 1986 05:14:27 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb4",
    productName: "Licensed Metal Car",
    price: 86.0,
    boughtDate: "Thu Sep 10 1981 19:29:46 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb5",
    productName: "Electronic Fresh Towels",
    price: 347.0,
    boughtDate: "Thu Dec 31 2015 07:41:32 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb6",
    productName: "Luxurious Granite Tuna",
    price: 854.0,
    boughtDate: "Sat Dec 22 2007 20:01:24 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb7",
    productName: "Awesome Rubber Tuna",
    price: 921.0,
    boughtDate: "Mon Sep 19 1994 14:25:06 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb8",
    productName: "Unbranded Fresh Chair",
    price: 541.0,
    boughtDate: "Wed Sep 25 1996 13:16:01 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fb9",
    productName: "Modern Wooden Ball",
    price: 349.0,
    boughtDate: "Sun Nov 04 1990 11:48:42 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fba",
    productName: "Licensed Wooden Ball",
    price: 917.0,
    boughtDate: "Fri Jun 12 1998 04:23:57 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fbb",
    productName: "Generic Steel Table",
    price: 446.0,
    boughtDate: "Wed Oct 28 2009 07:15:18 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fbc",
    productName: "Handmade Soft Chair",
    price: 308.0,
    boughtDate: "Mon Jan 27 1992 20:39:27 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fbd",
    productName: "Incredible Granite Bacon",
    price: 866.0,
    boughtDate: "Mon Jun 17 1974 07:42:42 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fbe",
    productName: "Incredible Frozen Computer",
    price: 377.0,
    boughtDate: "Mon Apr 24 2000 23:48:35 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fbf",
    productName: "Gorgeous Rubber Bike",
    price: 481.0,
    boughtDate: "Fri Apr 15 1988 17:00:16 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc0",
    productName: "Generic Granite Chicken",
    price: 501.0,
    boughtDate: "Tue Aug 05 2003 06:45:19 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc1",
    productName: "Oriental Wooden Shoes",
    price: 509.0,
    boughtDate: "Fri Jan 27 1984 06:05:51 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc2",
    productName: "Luxurious Granite Car",
    price: 286.0,
    boughtDate: "Fri Jun 25 2004 13:11:25 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc3",
    productName: "Generic Rubber Tuna",
    price: 660.0,
    boughtDate: "Tue Apr 17 2018 08:08:36 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc4",
    productName: "Incredible Rubber Keyboard",
    price: 171.0,
    boughtDate: "Tue Aug 14 2007 15:41:10 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc5",
    productName: "Ergonomic Steel Bike",
    price: 397.0,
    boughtDate: "Tue Mar 13 1973 05:30:23 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc6",
    productName: "Handmade Soft Tuna",
    price: 839.0,
    boughtDate: "Sat Dec 05 2015 20:12:16 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc7",
    productName: "Elegant Soft Mouse",
    price: 273.0,
    boughtDate: "Mon Jan 02 1989 16:23:16 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc8",
    productName: "Ergonomic Plastic Towels",
    price: 999.0,
    boughtDate: "Tue Sep 06 1977 04:06:29 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fc9",
    productName: "Elegant Wooden Ball",
    price: 633.0,
    boughtDate: "Mon Nov 02 2020 10:27:08 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fca",
    productName: "Ergonomic Steel Gloves",
    price: 424.0,
    boughtDate: "Fri Apr 05 2024 17:17:22 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fcb",
    productName: "Ergonomic Bronze Towels",
    price: 521.0,
    boughtDate: "Tue Jun 23 1970 10:47:48 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fcc",
    productName: "Practical Steel Chicken",
    price: 365.0,
    boughtDate: "Fri May 21 1993 03:42:28 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fcd",
    productName: "Electronic Steel Shirt",
    price: 131.0,
    boughtDate: "Fri Dec 27 1985 08:56:33 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fce",
    productName: "Refined Fresh Shirt",
    price: 589.0,
    boughtDate: "Wed Aug 15 1990 21:48:58 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fcf",
    productName: "Bespoke Steel Fish",
    price: 667.0,
    boughtDate: "Sun Sep 06 2015 15:02:56 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd0",
    productName: "Awesome Bronze Ball",
    price: 987.0,
    boughtDate: "Tue Dec 02 2014 10:22:16 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd1",
    productName: "Refined Steel Gloves",
    price: 554.0,
    boughtDate: "Thu Oct 02 2008 14:30:06 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd2",
    productName: "Sleek Steel Pizza",
    price: 79.0,
    boughtDate: "Tue Dec 19 1995 14:17:03 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd3",
    productName: "Modern Plastic Pants",
    price: 979.0,
    boughtDate: "Sat Mar 19 2016 14:26:14 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd4",
    productName: "Handcrafted Fresh Sausages",
    price: 926.0,
    boughtDate: "Tue Oct 15 1996 19:34:15 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd5",
    productName: "Handmade Rubber Salad",
    price: 775.0,
    boughtDate: "Fri Aug 29 2014 22:52:20 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd6",
    productName: "Fantastic Bronze Shirt",
    price: 136.0,
    boughtDate: "Sat Apr 03 1982 02:01:41 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd7",
    productName: "Handcrafted Cotton Soap",
    price: 973.0,
    boughtDate: "Mon Mar 08 2004 08:10:02 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd8",
    productName: "Elegant Concrete Gloves",
    price: 726.0,
    boughtDate: "Fri Sep 02 2016 13:29:55 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fd9",
    productName: "Practical Cotton Salad",
    price: 175.0,
    boughtDate: "Sun Apr 19 1970 13:22:33 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fda",
    productName: "Sleek Wooden Fish",
    price: 245.0,
    boughtDate: "Tue Jan 22 1985 12:58:37 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fdb",
    productName: "Handcrafted Frozen Bike",
    price: 689.0,
    boughtDate: "Tue Oct 26 1982 06:23:25 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fdc",
    productName: "Tasty Plastic Sausages",
    price: 681.0,
    boughtDate: "Fri Apr 14 2023 05:01:39 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fdd",
    productName: "Ergonomic Rubber Computer",
    price: 380.0,
    boughtDate: "Fri Apr 23 1982 22:38:15 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fde",
    productName: "Incredible Fresh Pants",
    price: 67.0,
    boughtDate: "Tue Feb 10 1976 15:14:18 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fdf",
    productName: "Awesome Metal Keyboard",
    price: 290.0,
    boughtDate: "Fri Oct 16 1992 04:20:38 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe0",
    productName: "Handcrafted Fresh Bacon",
    price: 552.0,
    boughtDate: "Thu Mar 20 1975 20:57:13 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe1",
    productName: "Sleek Fresh Cheese",
    price: 387.0,
    boughtDate: "Sun Jul 15 2012 07:39:52 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe2",
    productName: "Gorgeous Concrete Keyboard",
    price: 813.0,
    boughtDate: "Sun Oct 04 2020 18:08:14 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe3",
    productName: "Handmade Bronze Shoes",
    price: 844.0,
    boughtDate: "Wed Jun 01 2022 08:09:48 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe4",
    productName: "Practical Plastic Keyboard",
    price: 129.0,
    boughtDate: "Sat Nov 01 1997 09:35:09 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe5",
    productName: "Oriental Steel Hat",
    price: 796.0,
    boughtDate: "Fri Dec 01 2017 13:04:34 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe6",
    productName: "Licensed Steel Gloves",
    price: 863.0,
    boughtDate: "Mon Feb 22 2016 12:25:31 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe7",
    productName: "Practical Plastic Mouse",
    price: 337.0,
    boughtDate: "Sun Apr 12 1998 10:53:05 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe8",
    productName: "Elegant Granite Hat",
    price: 602.0,
    boughtDate: "Mon Mar 15 2021 07:41:12 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fe9",
    productName: "Gorgeous Granite Cheese",
    price: 106.0,
    boughtDate: "Tue Mar 19 1996 10:02:45 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fea",
    productName: "Incredible Fresh Pants",
    price: 118.0,
    boughtDate: "Thu Nov 20 1986 04:23:32 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0feb",
    productName: "Ergonomic Cotton Hat",
    price: 316.0,
    boughtDate: "Tue Dec 19 1989 12:57:50 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fec",
    productName: "Fantastic Fresh Chips",
    price: 173.0,
    boughtDate: "Wed Jun 08 2022 04:50:11 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fed",
    productName: "Modern Cotton Gloves",
    price: 392.0,
    boughtDate: "Tue Jun 15 2004 02:21:23 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fee",
    productName: "Elegant Bronze Car",
    price: 469.0,
    boughtDate: "Tue Sep 17 1974 20:32:33 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fef",
    productName: "Sleek Cotton Fish",
    price: 742.0,
    boughtDate: "Thu Dec 09 1982 21:38:33 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff0",
    productName: "Generic Fresh Chips",
    price: 146.0,
    boughtDate: "Sun Nov 01 2015 21:10:10 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff1",
    productName: "Handcrafted Bronze Mouse",
    price: 869.0,
    boughtDate: "Thu Aug 17 2023 05:33:01 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff2",
    productName: "Practical Steel Mouse",
    price: 339.0,
    boughtDate: "Tue Feb 05 1991 20:23:06 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff3",
    productName: "Luxurious Cotton Salad",
    price: 841.0,
    boughtDate: "Tue Mar 02 1976 21:51:55 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff4",
    productName: "Oriental Metal Soap",
    price: 956.0,
    boughtDate: "Mon Apr 24 1972 04:45:37 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff5",
    productName: "Intelligent Concrete Pizza",
    price: 156.0,
    boughtDate: "Sat Aug 18 2012 01:01:23 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff6",
    productName: "Incredible Bronze Gloves",
    price: 900.0,
    boughtDate: "Sat Oct 24 1998 06:45:30 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff7",
    productName: "Modern Frozen Shirt",
    price: 568.0,
    boughtDate: "Sun Jan 25 2009 17:48:15 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff8",
    productName: "Electronic Frozen Cheese",
    price: 806.0,
    boughtDate: "Wed Sep 30 2015 01:18:11 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ff9",
    productName: "Small Cotton Computer",
    price: 213.0,
    boughtDate: "Wed Jun 27 1984 04:26:52 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ffa",
    productName: "Bespoke Bronze Bacon",
    price: 536.0,
    boughtDate: "Wed Nov 24 1976 18:16:41 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ffb",
    productName: "Oriental Wooden Tuna",
    price: 805.0,
    boughtDate: "Tue Mar 08 2016 09:08:52 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ffc",
    productName: "Handmade Granite Bacon",
    price: 13.0,
    boughtDate: "Mon Feb 23 1970 04:06:01 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ffd",
    productName: "Recycled Granite Salad",
    price: 911.0,
    boughtDate: "Sat Feb 18 1995 15:17:00 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0ffe",
    productName: "Handcrafted Cotton Mouse",
    price: 400.0,
    boughtDate: "Mon Dec 30 1996 03:45:50 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e0fff",
    productName: "Refined Plastic Chair",
    price: 529.0,
    boughtDate: "Tue May 03 1988 10:07:07 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1000",
    productName: "Intelligent Bronze Gloves",
    price: 695.0,
    boughtDate: "Thu Oct 13 1983 08:03:40 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1001",
    productName: "Electronic Soft Chair",
    price: 807.0,
    boughtDate: "Sun Aug 05 2001 07:08:44 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1002",
    productName: "Modern Cotton Pants",
    price: 154.0,
    boughtDate: "Sat Apr 29 1978 10:23:12 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1003",
    productName: "Unbranded Metal Pants",
    price: 75.0,
    boughtDate: "Tue Jun 16 1970 00:01:25 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1004",
    productName: "Sleek Fresh Keyboard",
    price: 156.0,
    boughtDate: "Sat Jul 29 2023 10:37:51 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1005",
    productName: "Modern Granite Keyboard",
    price: 276.0,
    boughtDate: "Fri Sep 20 1974 08:25:30 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1006",
    productName: "Sleek Plastic Cheese",
    price: 861.0,
    boughtDate: "Mon Sep 04 1989 00:49:55 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1007",
    productName: "Recycled Fresh Ball",
    price: 878.0,
    boughtDate: "Sun Mar 02 1975 06:08:45 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1008",
    productName: "Handmade Fresh Towels",
    price: 584.0,
    boughtDate: "Wed Apr 02 1975 02:47:50 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1009",
    productName: "Recycled Cotton Chicken",
    price: 797.0,
    boughtDate: "Tue Jun 03 1986 18:47:35 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100a",
    productName: "Handcrafted Concrete Table",
    price: 819.0,
    boughtDate: "Mon Aug 27 1990 16:30:49 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100b",
    productName: "Incredible Plastic Sausages",
    price: 913.0,
    boughtDate: "Wed Jan 19 1977 12:59:15 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100c",
    productName: "Sleek Bronze Salad",
    price: 219.0,
    boughtDate: "Tue Aug 25 1992 17:19:48 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100d",
    productName: "Generic Cotton Ball",
    price: 914.0,
    boughtDate: "Wed Dec 06 1978 07:47:04 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100e",
    productName: "Unbranded Soft Tuna",
    price: 994.0,
    boughtDate: "Mon Aug 09 1999 12:55:40 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e100f",
    productName: "Rustic Soft Keyboard",
    price: 827.0,
    boughtDate: "Mon Dec 02 2013 16:50:52 GMT+0900 (한국 표준시)",
  },
  {
    productId: "66e1c1df3594bb65169e1010",
    productName: "Ergonomic Rubber Keyboard",
    price: 490.0,
    boughtDate: "Sun May 18 2014 05:12:12 GMT+0900 (한국 표준시)",
  },
];

interface MockData {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
}

const PER_PAGE = 10;

// 페이지는 1부터 시작함
export const getMockData = (pageNum: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas: MockData[] = MOCK_DATA.slice(
        PER_PAGE * pageNum,
        PER_PAGE * (pageNum + 1)
      );
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length;

      resolve({ datas, isEnd });
    }, 1500);
  });
};

```
</details>