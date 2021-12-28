# Лабораторная работа по предмету "Алгоритмические основы машинной графики".
Реализовать алгоритм Кируса-Бека для выпуклых и невыпуклых фигур.
____
## Интерфейс
![Alt-текст](https://sun9-71.userapi.com/impg/HUGFUl8xS0AHN2_-QmhgKj77p5CwmbvVRTQFPQ/rh9D2wuX658.jpg?size=1087x841&quality=96&sign=2baf3a4adbdbff2645a615c277796c83&type=album "Интерфейс")
- "DRAW" - кнопка для рисования фигур (при нажатие на неё на холсте можно начать рисовать точки фигуры (по часовой стрелке), когда все точки проставлены следует повторно нажать эту кнопку).
- "CLEAR" - очищает холст.
- "MOVE LEFT" - передвигает фигуру влево (значение в поле над "MOVE" указывает на какое число будет перемещена фигура). 
- "MOVE RIGTH" - передвигает фигуру вправо.
- "MOVE TOP" - передвигает фигуру вверх.
- "MOVE BOTTOM" - передвигает фигуру вниз.
- "TURN LEFT" - поворачивает фигуру влево.
- "TURN RIGTH" - поворачивает фигуру вправо.
- "SCALE PLUS" - увеличивает фигуру (значение в поле над "SCALE" указывает на какое число будет увеличина (уменьшена) фигура).
- "SCALE MINUS" - уменьшает фигуру.
- "TAB" - передвигает фигуру с переднего плана на задний.
- "Example 1", "Example 2", "Example 3" - готовые примеры.
## Example 1
![Alt-текст](https://sun9-5.userapi.com/impg/TLyzgvaBHs0rpgcTCj8oSBL8Ga5ii4DQ8nLYew/8m0SeCbgM30.jpg?size=1056x838&quality=96&sign=a6e752bb28ed8fe7149c200efa51d87e&type=album "Пример 1")
## Example 2
![Alt-текст](https://sun9-57.userapi.com/impg/ZN4ON_mjnABOoiHeoH4H7athlwn0865QsBaY9A/GjnJ0UsAvKw.jpg?size=1114x847&quality=96&sign=3dbfc7b8f4be39acf51a22f0f681bb38&type=album "Пример 2")
## Example 3
![Alt-текст](https://sun9-23.userapi.com/impg/HPUbboO0cJI7tuRsqNyejbigFdSJ0--V5P562A/PvF8xX1Fc5I.jpg?size=1109x835&quality=96&sign=533a45af66ccfaeae9e07ba6c2c215bb&type=album "Пример 3")
## MOVE LEFT (Example 2, value = 40)
![Alt-текст](https://sun9-14.userapi.com/impg/JDJVPC1yqLBgDdCaNhSypsuOThC1pkk1qPV0ug/1GBvSnT2IqU.jpg?size=1071x845&quality=96&sign=b01de1f2b4119faeb071035acd07bcfc&type=album "MOVE LEFT 40")
## MOVE RIGTH (Example 2, value = 40)
![Alt-текст](https://sun9-84.userapi.com/impg/vivXs1A8rW4Kid9EAT2Q-Ild7vVI27BZ1eBu4Q/S_SVtcQyR_o.jpg?size=1085x844&quality=96&sign=1bb29bf7e50d1390acfc13b6db9b7020&type=album "MOVE RIGTH 40")
## MOVE TOP (Example 2, value = 40)
![Alt-текст](https://sun9-84.userapi.com/impg/vivXs1A8rW4Kid9EAT2Q-Ild7vVI27BZ1eBu4Q/S_SVtcQyR_o.jpg?size=1085x844&quality=96&sign=1bb29bf7e50d1390acfc13b6db9b7020&type=album "MOVE TOP 40")
## MOVE BOTTOM (Example 2, value = 40)
![Alt-текст](https://sun9-33.userapi.com/impg/a2_qxfvFCtOMhoZtyEk6rdbGX0cPPH2CWOmrig/Zhd9f93txpA.jpg?size=1074x845&quality=96&sign=09bb6d64b056e9d70c93631037fdbe3d&type=album "MOVE BOTTOM 40")
## TURN LEFT (Example 2)
![Alt-текст](https://sun9-70.userapi.com/impg/V7QzzWXbIdcdzhjejYmbe0F_GdugimnYprm_tg/kfFnjzemmj8.jpg?size=1143x842&quality=96&sign=b8f693b4da49c9bbc62134f5709b2ef9&type=album "TURN LEFT")
## TURN RIGTH (Example 2)
![Alt-текст](https://sun9-49.userapi.com/impg/BtxVHTMDCMajFj0q86FbMT04lQYmWMBaz9xZqQ/bnlW44lcRA4.jpg?size=1079x844&quality=96&sign=cff10a53104b0ffe51617bfd6095619d&type=album "TURN RIGTH")
## SCALE PLUS (Example 2, value = 1,1)
![Alt-текст](https://sun9-39.userapi.com/impg/nnLed-d-tF7rYRY3qAzg4qEwQGMVb5ss0ZwTfw/T8m9mulRPdc.jpg?size=1124x840&quality=96&sign=19ab2873aa55d3332e611bad5f159e3b&type=album "SCALE PLUS 1,1")
## SCALE MINUS (Example 2, value = 1,1)
![Alt-текст](https://sun9-45.userapi.com/impg/uYymOgXny3jAlh7-b8wZaurJoNovXPKoUeEodw/ikhb1Q_rT8Q.jpg?size=1116x845&quality=96&sign=26385e3d58bf9333a86e0e95efb7c483&type=album "SCALE MINUS 1,1")
## TAB (Example 2)
![Alt-текст](https://sun9-58.userapi.com/impg/_nWcqcpYUoQnHjjySlojZ9ZYVOzWoCL_UD_Zmw/sVT2SErEY1Y.jpg?size=1078x857&quality=96&sign=5321c7635f93f9567c92682eea0d85c8&type=album "TAB")
