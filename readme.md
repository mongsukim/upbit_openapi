# upbit open api


```npm install```

실행 
```node script.js```

 


https://docs.upbit.com/docs/upbit-quotation-restful-api#2-%EC%BA%94%EB%93%A4-%EC%A1%B0%ED%9A%8C

#### 캔들 조회

캔들이란 일반적으로 봉이라고 불리기도 하며 차트를 구성하는 기본적인 막대입니다.
업비트 시세 API를 통해 얻을 수 있는 캔들 중 분 캔들(분봉) 이란 각각의 막대가 1, 3, 5, 10, 30, 60분 간격의 시세를 종합한 정보라고 할 수 있습니다.

예를 들어 KRW-BTC (원화, 비트코인 마켓)에서 가장 최근으로부터 5분봉을 3개 가져오고 싶다면 다음과 같이 요청할 수 있습니다.

```
curl --request GET \
  --url 'https://api.upbit.com/v1/candles/minutes/5?market=KRW-BTC&count=3'
```