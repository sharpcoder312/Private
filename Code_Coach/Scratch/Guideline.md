+ Sprite // Stage

  + Sprite

    + 코딩을 할 때 필요한 재료들
    + 내 컴퓨터에 있는 스프라이트 업로드 또는 직접 그리기 가능
    + 여러개 동시 추가 가능
    + 서프라이즈 기능
      + 이미 제공된 스프라이트 중 랜덤으로 하나 추가

    + 예시
      + 캐릭터, 과일, 숫자 등

  + Stage
    + 말그대로 무대
    + 스테이지별로 무대 변경 가능

&nbsp;

+ Code // Costumes // Sounds
  + Code
    + 코드 변경
    + Motion ( ≒ Function 함수)
    + Looks
  + Costumes
    + Sprite 커스텀 가능
  + Sounds
    + 소리 추가 또는 변경

&nbsp;

+ Motions
  + function 함수와 같은 맥락
  + 무엇을 할지 알려줌

+ Looks

  + color effect
    + 대상이 가지고있는 고유한 색에 따라 상대적 효과
    + 수치 : 0 ~ 200
    + 100 : 가장 정반대의 색 지정 // 200 : 색 다시 되돌아옴(원래 색 설정)
    + color effect 외에 설정할 수 있는 항목들이 많다

  + clear graphic effects
    + 그 전까지의 모든 그래픽 효과를 모두 지움

&nbsp;

+ Sound

  + 각 스프라이트들은 고유의 소리를 가지고있다
  + 소리가 마음에 들지 않는다면 Sounds 탭에서 변경 가능하다
  + `until done` vs `basic`
    + until done은 노래 끝까지 재생
    + basic에서는 Control섹션의 wait seconds로 얼마동안 재생할 것인지 설정 가능

  + 음량 : 0 ~ 100% 설정 가능
    + 100이 기본 설정이며 최대 수치임

&nbsp;

+ Events
  + ~했을 때 (condition && boolean)
  + timer 
    + Sensing섹터에서 타이머 초기화 하거나 깃발 눌러서 초기화 가능
  + message
    + 스프라이트들이 서로 통신할 때 사용
    + broadcast
      + 신호 보내기
      + 신호 보내고 기다리기
        + 기다리기는 신호를 보낸 다른 스프라이트의 모든 행동이 끝나야지 다음 코드 실행

+ Control

  + forever
    + 프로그램 강제 종료 전까지 계속 반복
    + if then과 자주 사용 (검사 시간 관련)

  + script
    + 해당 논리 블록

  + when I start as a clone
    + 복제되었을 때
    + 복제본에게만 적용



+ Sensing

  + 육각형
    + 불리언 물음

  + set drag mode draggable
    + 전체 화면에서 드래그 가능 여부

  + x position of 스프라이트1

    + 같은 무대 내의 다른 스프라이트의 정보 체크

    + 자기 자신의 정보 체크는 Motion섹션에서 알 수 있었다

      

+ Operators

  + 3개 이상의 연산
    + 중첩 기능 사용

  + not
    + true => false
    + false => true

  + mod
    + 나누기

  + round
    + 반올림

  + abs // floor // ceiling // sqrt
    + 절댓값 // 버림 // 올림 // 제곱근



+ Variables