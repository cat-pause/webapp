$(function(){

    // 배너 창 닫기
    $("#close-banner").on('click',()=>{
        $("#banner").addClass("d-none");
    })

    // cart 버튼 누르면, 주문상품의 상품정보 업데이트 -> 결제창으로 이동할것인지 확인
    $("#cart").on('click',()=>{
        var order = {
            buyItem : "라움 4인 그릇 12P",
            buycount: 1,
            buyPrice: 89500
        }
        // .prompt() : 사용자에게 입력창을 띄우는 내장객체 메소드(오래된 메소드)
        // .confirm() : 확인(true), 취소(false)로 의사선택창을 띄움
        var userChoice = confirm("장바구니에 담았습니다. 결제창으로 이동하시겠습니까?");
        userChoice ? location.href="/payment" : null; //라우팅처리 하려면 서버 필요
    })

})