//#region MISC VARIABLES
let clickStart = false;
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let handMove = false;
let topHand;
let credCardFrontIMG;
let credCardBackIMG;
let cardRotation = 0;
let xCoord = 5;
let coordMouse = {
  display: function () {
    text("(" + mouseX + ", " + mouseY + ")", 300, 400);
    textStyle("bold");
    textSize(20);
  },
};
//#endregion

let credCardFront = {
  display: function () {
    //--------------------------------------------CREDIT CARD FRONT--------------------------------------------
    fill(255, 156, 49);
    rect(219, 130, 539, 315, 17);

    fill(255, 178, 66);
    beginShape();
    vertex(219, 275);
    vertex(219, 167);
    vertex(422, 130);
    vertex(589, 130);
    vertex(697, 445);
    vertex(639, 445);
    vertex(219, 275);
    endShape();
    beginShape();
    vertex(611, 130);
    vertex(678, 130);
    vertex(709, 445);
    vertex(703, 445);
    vertex(611, 130);
    endShape();

    //--------------------------LOGOS--------------------------
    //------CHASE------
    fill("yellow");
    fill(102, 255, 224);
    quad(671, 160, 686, 144, 686, 181, 671, 180);
    quad(691, 145, 710, 145, 727, 162, 691, 161);
    quad(712, 165, 727, 165, 727, 185, 712, 201);
    quad(672, 185, 709, 185, 709, 201, 688, 201);

    //------VISA------
    //V
    beginShape();
    vertex(646, 400);
    vertex(660, 400);
    vertex(663, 418);
    vertex(670, 400);
    vertex(678, 400);
    vertex(667, 429);
    vertex(659, 429);
    vertex(653, 405);
    vertex(646, 400);
    endShape();
    //I
    quad(680, 400, 688, 400, 682, 429, 675, 429);
    //S
    beginShape();
    vertex(708, 401);
    vertex(707, 408);
    vertex(704, 406);
    vertex(701, 406);
    vertex(698, 407);
    vertex(698, 409);
    vertex(707, 416);
    vertex(707, 422);
    vertex(704, 426);
    vertex(698, 429);
    vertex(693, 429);
    vertex(687, 427);
    vertex(688, 420);
    vertex(692, 423);
    vertex(697, 423);
    vertex(700, 421);
    vertex(690, 413);
    vertex(690, 405);
    vertex(696, 400);
    vertex(702, 400);
    vertex(708, 401);
    endShape();

    //A
    beginShape();
    vertex(718, 400);
    vertex(725, 400);
    vertex(725, 400);
    vertex(731, 429);
    vertex(725, 429);
    vertex(724, 424);
    vertex(715, 424);
    vertex(713, 429);
    vertex(706, 429);
    vertex(718, 400);
    endShape();

    //------NUMBERS------
    //1
    beginShape();
    vertex(418, 275);
    vertex(427, 275);
    vertex(427, 301);
    vertex(431, 301);
    vertex(431, 301);
    vertex(431, 305);
    vertex(418, 305);
    vertex(418, 301);
    vertex(422, 301);
    vertex(422, 280);
    vertex(418, 280);
    vertex(418, 275);
    endShape();
    //8
    beginShape();
    vertex(435, 275);
    vertex(446, 275);
    vertex(446, 288);
    vertex(448, 288);
    vertex(448, 305);
    vertex(435, 305);
    vertex(435, 275);
    endShape();

    //5
    beginShape();
    vertex(452, 275);
    vertex(466, 275);
    vertex(466, 279);
    vertex(456, 279);
    vertex(456, 288);
    vertex(466, 288);
    vertex(466, 305);
    vertex(452, 305);
    vertex(452, 301);
    vertex(461, 301);
    vertex(461, 293);
    vertex(452, 293);
    vertex(452, 275);
    endShape();

    //4
    beginShape();
    vertex(469, 275);
    vertex(473, 275);
    vertex(473, 291);
    vertex(478, 291);
    vertex(478, 277);
    vertex(482, 277);
    vertex(482, 291);
    vertex(484, 291);
    vertex(484, 291);
    vertex(484, 295);
    vertex(482, 295);
    vertex(482, 305);
    vertex(478, 305);
    vertex(478, 295);
    vertex(469, 295);
    vertex(469, 275);
    endShape();

    //5
    beginShape();
    vertex(500, 275);
    vertex(513, 275);
    vertex(513, 279);
    vertex(504, 279);
    vertex(504, 288);
    vertex(513, 288);
    vertex(513, 305);
    vertex(500, 305);
    vertex(500, 301);
    vertex(509, 301);
    vertex(509, 293);
    vertex(500, 293);
    vertex(500, 275);
    endShape();

    //0
    rect(517, 275, 13, 30);

    //0
    rect(534, 275, 13, 30);

    //7
    beginShape();
    vertex(551, 275);
    vertex(565, 275);
    vertex(565, 305);
    vertex(561, 305);
    vertex(561, 280);
    vertex(555, 280);
    vertex(555, 284);
    vertex(551, 284);
    vertex(551, 275);
    endShape();

    //3
    beginShape();
    vertex(582, 275);
    vertex(595, 275);
    vertex(595, 305);
    vertex(582, 305);
    vertex(582, 301);
    vertex(591, 301);
    vertex(591, 292);
    vertex(582, 292);
    vertex(582, 288);
    vertex(591, 288);
    vertex(591, 280);
    vertex(582, 280);
    vertex(582, 275);
    endShape();

    //3
    beginShape();
    vertex(599, 275);
    vertex(612, 275);
    vertex(612, 305);
    vertex(599, 305);
    vertex(599, 301);
    vertex(608, 301);
    vertex(608, 292);
    vertex(599, 292);
    vertex(599, 288);
    vertex(608, 288);
    vertex(608, 280);
    vertex(599, 280);
    vertex(599, 275);
    endShape();

    //9
    beginShape();
    vertex(616, 275);
    vertex(629, 275);
    vertex(629, 305);
    vertex(625, 305);
    vertex(625, 290);
    vertex(616, 290);
    vertex(616, 275);
    endShape();

    //1
    beginShape();
    vertex(633, 275);
    vertex(642, 275);
    vertex(642, 301);
    vertex(646, 301);
    vertex(646, 305);
    vertex(633, 305);
    vertex(633, 301);
    vertex(638, 301);
    vertex(638, 280);
    vertex(633, 280);
    vertex(633, 275);
    endShape();

    //2
    beginShape();
    vertex(663, 275);
    vertex(677, 275);
    vertex(677, 292);
    vertex(667, 292);
    vertex(667, 301);
    vertex(677, 301);
    vertex(677, 305);
    vertex(663, 305);
    vertex(663, 288);
    vertex(673, 288);
    vertex(673, 280);
    vertex(663, 280);
    vertex(663, 275);
    endShape();

    //2
    beginShape();
    vertex(681, 275);
    vertex(694, 275);
    vertex(694, 292);
    vertex(685, 292);
    vertex(685, 301);
    vertex(694, 301);
    vertex(694, 305);
    vertex(681, 305);
    vertex(681, 288);
    vertex(690, 288);
    vertex(690, 280);
    vertex(681, 280);
    vertex(681, 275);
    endShape();

    //4
    beginShape();
    vertex(698, 275);
    vertex(702, 275);
    vertex(702, 291);
    vertex(706, 291);
    vertex(706, 277);
    vertex(710, 277);
    vertex(710, 291);
    vertex(712, 291);
    vertex(712, 295);
    vertex(710, 295);
    vertex(710, 305);
    vertex(706, 305);
    vertex(706, 295);
    vertex(698, 295);
    vertex(698, 275);
    endShape();

    //1
    beginShape();
    vertex(715, 275);
    vertex(724, 275);
    vertex(724, 301);
    vertex(728, 301);
    vertex(728, 305);
    vertex(715, 305);
    vertex(715, 301);
    vertex(720, 301);
    vertex(720, 280);
    vertex(715, 280);
    vertex(715, 275);
    endShape();

    //CHIP
    line(268, 285, 336, 285);
    line(268, 294, 336, 294);
    rect(268, 266, 68, 47, 7);
    rect(285, 278, 33, 22, 4);
    line(289, 272, 315, 272);
    line(289, 307, 315, 307);

    //N
    beginShape();
    vertex(269, 350);
    vertex(271, 350);
    vertex(281, 364);
    vertex(281, 350);
    vertex(284, 350);
    vertex(284, 368);
    vertex(281, 368);
    vertex(272, 355);
    vertex(272, 368);
    vertex(269, 368);
    vertex(269, 350);
    endShape();

    //A
    beginShape();
    vertex(293, 350);
    vertex(296, 350);
    vertex(303, 368);
    vertex(300, 368);
    vertex(297, 361);
    vertex(293, 361);
    vertex(290, 368);
    vertex(287, 368);
    vertex(293, 350);
    endShape();

    //T
    beginShape();
    vertex(303, 350);
    vertex(318, 350);
    vertex(318, 353);
    vertex(312, 353);
    vertex(312, 368);
    vertex(309, 368);
    vertex(309, 353);
    vertex(303, 353);
    vertex(303, 350);
    endShape();

    //H
    beginShape();
    vertex(321, 350);
    vertex(324, 350);
    vertex(324, 358);
    vertex(334, 358);
    vertex(334, 350);
    vertex(337, 350);
    vertex(337, 368);
    vertex(334, 368);
    vertex(334, 361);
    vertex(324, 361);
    vertex(324, 368);
    vertex(321, 368);
    vertex(321, 350);
    endShape();

    //A
    beginShape();
    vertex(347, 350);
    vertex(349, 350);
    vertex(356, 368);
    vertex(353, 368);
    vertex(353, 368);
    vertex(350, 361);
    vertex(346, 361);
    vertex(343, 368);
    vertex(340, 368);
    vertex(347, 350);
    endShape();

    //N
    beginShape();
    vertex(359, 350);
    vertex(362, 350);
    vertex(372, 363);
    vertex(372, 350);
    vertex(375, 350);
    vertex(375, 368);
    vertex(372, 368);
    vertex(362, 355);
    vertex(362, 368);
    vertex(359, 368);
    vertex(359, 350);
    endShape();

    //S
    beginShape();
    vertex(402, 353);
    vertex(405, 350);
    vertex(414, 350);
    vertex(417, 351);
    vertex(416, 353);
    vertex(414, 352);
    vertex(406, 352);
    vertex(405, 353);
    vertex(405, 356);
    vertex(407, 358);
    vertex(413, 358);
    vertex(417, 360);
    vertex(417, 365);
    vertex(414, 368);
    vertex(406, 368);
    vertex(402, 366);
    vertex(403, 364);
    vertex(406, 366);
    vertex(413, 366);
    vertex(415, 364);
    vertex(415, 362);
    vertex(413, 361);
    vertex(405, 361);
    vertex(402, 358);
    vertex(402, 353);
    endShape();

    //I
    rect(421, 350, 3, 18);

    //U
    beginShape();
    vertex(428, 350);
    vertex(431, 350);
    vertex(431, 363);
    vertex(433, 366);
    vertex(439, 366);
    vertex(441, 363);
    vertex(441, 350);
    vertex(444, 350);
    vertex(444, 363);
    vertex(440, 368);
    vertex(431, 368);
    vertex(428, 363);
    vertex(428, 350);
    endShape();

    fill(255, 156, 49);
    //A COUNTERSPACE
    triangle(717, 418, 720, 410, 723, 418);
    fill(255, 178, 66);
    //8 COUNTERSPACE
    rect(439, 279, 3, 9);
    rect(439, 292, 5, 9);
    //0 COUNTERSPACE
    rect(521, 280, 5, 21);
    //0 COUNTERSPACE
    rect(538, 280, 5, 21);
    //9 COUNTERSPACE
    rect(620, 279, 5, 7);
    //A COUNTERSPACE
    triangle(294, 358, 295, 355, 296, 358);
    //A COUNTERSPACE
    triangle(347, 358, 348, 355, 349, 358);
  },
};

let credCardBack = {
  display: function () {
    //--------------------------------------------CREDIT CARD BACK--------------------------------------------
    //----------BASE-----------
    fill(164, 240, 228);
    rect(219, 130, 539, 315, 17);

    //-----------Details-----------
    fill("#a7dce5");

    //--------BAR----------
    rect(219, 166, 539, 37);
    rect(254, 344, 214, 25);
    //SHINE
    fill("#8cc6d1");
    quad(273, 166, 333, 166, 367, 203, 332, 203);
    quad(341, 166, 360, 166, 388, 203, 380, 203);
    quad(524, 166, 641, 166, 684, 203, 601, 203);

    quad(280, 344, 308, 344, 320, 369, 303, 369);
    quad(393, 344, 404, 344, 426, 369, 419, 369);
    quad(414, 344, 438, 344, 451, 369, 434, 369);
    fill(255, 178, 66);
    //1
    rect(254, 229, 8, 3);
    rect(259, 229, 3, 29);
    rect(254, 255, 13, 3);
    //8
    rect(272, 229, 10, 16);
    rect(272, 242, 13, 16);
    //5
    rect(289, 228, 14, 30);
    //4
    rect(307, 229, 4, 19);
    rect(307, 244, 14, 4);
    rect(316, 230, 4, 28);
    //5
    rect(338, 228, 14, 30);
    //0
    rect(356, 228, 14, 30);
    //0
    rect(374, 228, 14, 30);
    //7
    rect(391, 228, 14, 30);
    //3
    rect(423, 228, 14, 30);
    //3
    rect(440, 228, 14, 30);
    //9
    rect(458, 228, 14, 30);
    //1
    rect(477, 229, 8, 3);
    rect(482, 229, 3, 29);
    rect(477, 255, 13, 3);
    //2
    rect(508, 228, 14, 30);
    //2
    rect(525, 228, 14, 30);
    //4
    rect(543, 229, 4, 19);
    rect(543, 244, 14, 4);
    rect(552, 230, 4, 28);
    //1
    rect(561, 229, 8, 3);
    rect(566, 229, 3, 29);
    rect(561, 255, 13, 3);

    textSize(22);
    textStyle(BOLD);
    text("Valid Thru:", 253, 306);
    text("05/29", 370, 306);
    text("SEC:", 450, 306);
    text("441", 510, 306);
    text("NATHAN SIU", 253, 335);

    rect(238, 152, 20, 4);
    rect(261, 152, 48, 4);
    rect(413, 152, 136, 4);
    rect(672, 151, 70, 7);
    rect(248, 408, 95, 5);
    rect(248, 422, 123, 7);
    rect(597, 399, 140, 4);
    rect(673, 409, 64, 4);

    fill(164, 240, 228);
    rect(275, 232, 4, 10);
    rect(275, 245, 6, 10);
    rect(293, 232, 12, 10);
    rect(287, 245, 12, 9);
    rect(342, 232, 12, 10);
    rect(336, 245, 12, 9);
    rect(360, 232, 6, 22);
    rect(378, 232, 6, 22);
    rect(395, 232, 6, 22);
    rect(390, 237, 11, 23);
    rect(438, 232, 12, 10);
    rect(438, 246, 12, 8);
    rect(421, 232, 12, 10);
    rect(421, 246, 12, 8);
    rect(463, 232, 5, 8);
    rect(457, 244, 11, 16);
    rect(506, 232, 12, 9);
    rect(512, 245, 11, 9);
    rect(524, 232, 11, 9);
    rect(529, 245, 11, 9);
    noStroke();

    //Valid Thru
    // quad(255, 289, 257, 289, 262, 305, 260, 305);
    // quad(265, 289, 267, 289, 262, 305, 260, 305);
    // beginShape();
    // vertex(268, 296);
    // vertex(270, 294);
    // vertex(276, 294);
    // vertex(277, 296);
    // vertex(277, 305);
    // vertex(271, 305);
    // vertex(268, 303);
    // vertex(268, 301);
    // vertex(268, 301);
    // vertex(271, 299);
    // vertex(274, 299);
    // vertex(274, 297);
    // vertex(272, 297);
    // vertex(271, 297);
    // vertex(268, 296);
    // endShape();
    // rect(281, 289, 2, 16);
    // rect(287, 295, 2, 10);
    // square(287, 290, 2);
    // rect(299, 289, 2, 16);

    // rect(311, 289, 12, 2);
    // rect(316, 289, 2, 16);
    // rect(326, 289, 2, 16);
    // rect(327, 295, 8, 2);
    // rect(333, 295, 2, 10);
    // rect(338, 295, 2, 10);
    // rect(338, 296, 6, 2);

    // rect(372, 289, 7, 16);
    // rect(374, 291, 3, 12);
    // rect(383, 289, 7, 16);
    // rect(385, 291, 6, 5);
    // rect(382, 298, 6, 5);
    // quad(397, 289, 398, 289, 393, 305, 392, 305);

    // rect(401, 289, 7, 16);
    // rect(400, 291, 6, 5);
    // rect(403, 298, 6, 5);

    // rect(411, 289, 7, 16);
    // rect(413, 291, 3, 16);
    // rect(410, 294, 6, 13);

    // rect(460, 289, 2, 10);
    // rect(464, 289, 2, 16);
    // rect(460, 298, 7, 2);

    // rect(471, 289, 2, 10);
    // rect(476, 289, 2, 16);
    // rect(471, 298, 8, 2);

    // rect(482, 289, 6, 2);
    // rect(486, 289, 2, 16);
    // rect(482, 303, 8, 2);

    //NAME
    // rect(255, 316, 13, 16);
    // triangle(255, 313, 265, 313, 265, 327);
    // triangle(258, 321, 266, 333, 258, 333);

    // quad(278, 316, 280, 316, 286, 333, 272, 333);
    // triangle(279, 320, 280, 323, 278, 323);
    // quad(277, 326, 281, 326, 284, 334, 274, 334);

    // rect(287, 316, 14, 2);
    // rect(293, 316, 2, 17);

    // rect(305, 316, 13, 17);
    // rect(307, 315, 9, 8);
    // rect(307, 325, 9, 9);

    // quad(327, 316, 329, 316, 335, 333, 322, 333);
    // triangle(328, 320, 329, 323, 327, 323);
    // quad(326, 326, 330, 326, 333, 334, 324, 334);
  },
};

let handFront = {
  display: function () {
    //-----------------------HAND FRONT-----------------------
    fill(84, 89, 255);
    beginShape();
    vertex(0, 300);
    vertex(9, 298);
    vertex(26, 252);
    vertex(68, 232);
    vertex(122, 115);
    vertex(148, 77);
    vertex(161, 42);
    vertex(179, 28);
    vertex(198, 31);
    vertex(295, 37);
    vertex(315, 35);
    vertex(330, 41);
    vertex(340, 50);
    vertex(401, 95);
    vertex(405, 108);
    vertex(400, 127);
    vertex(384, 133);
    vertex(343, 130);
    vertex(295, 101);
    vertex(227, 102);
    vertex(188, 240);
    vertex(186, 353);
    vertex(196, 408);
    vertex(233, 425);
    vertex(285, 423);
    vertex(320, 421);
    vertex(338, 425);
    vertex(405, 427);
    vertex(415, 433);
    vertex(426, 450);
    vertex(426, 471);
    vertex(409, 489);
    vertex(355, 504);
    vertex(327, 518);
    vertex(273, 527);
    vertex(173, 553);
    vertex(122, 600);
    vertex(73, 612);
    vertex(0, 612);
    vertex(0, 300);
    endShape();

    fill(142, 159, 255);
    beginShape();
    vertex(356, 62);
    vertex(347, 74);
    vertex(347, 74);
    vertex(347, 91);
    vertex(386, 107);
    vertex(398, 99);
    vertex(399, 94);
    vertex(356, 62);
    endShape();
    beginShape();
    vertex(373, 435);
    vertex(395, 434);
    vertex(408, 439);
    vertex(418, 451);
    vertex(420, 470);
    vertex(407, 484);
    vertex(378, 490);
    vertex(373, 435);
    endShape();

    beginShape();
    vertex();
    endShape();

    //SHADOW
    fill("black");
    beginShape();
    vertex(403, 115);
    vertex(401, 125);
    vertex(383, 133);
    vertex(344, 130);
    vertex(294, 101);
    vertex(228, 103);
    vertex(187, 241);
    vertex(187, 352);
    vertex(196, 407);
    vertex(174, 362);
    vertex(149, 358);
    vertex(171, 344);
    vertex(169, 288);
    vertex(180, 244);
    vertex(170, 239);
    vertex(182, 236);
    vertex(197, 154);
    vertex(222, 100);
    vertex(217, 88);
    vertex(228, 97);
    vertex(261, 93);
    vertex(292, 97);
    vertex(299, 90);
    vertex(299, 98);
    vertex(344, 118);
    vertex(371, 123);
    vertex(392, 122);
    vertex(403, 115);
    endShape();
    beginShape();
    vertex(426, 464);
    vertex(427, 471);
    vertex(410, 489);
    vertex(358, 505);
    vertex(326, 519);
    vertex(174, 553);
    vertex(121, 602);
    vertex(85, 610);
    vertex(0, 610);
    vertex(0, 601);
    vertex(79, 589);
    vertex(118, 551);
    vertex(166, 546);
    vertex(166, 535);
    vertex(175, 545);
    vertex(255, 519);
    vertex(318, 513);
    vertex(319, 499);
    vertex(324, 512);
    vertex(361, 496);
    vertex(412, 481);
    vertex(426, 464);
    endShape();
    quad(29, 270, 31, 248, 68, 231, 41, 250);
    triangle(214, 39, 240, 38, 267, 42);
    triangle(320, 40, 316, 48, 315, 59);
    triangle(326, 40, 322, 53, 314, 66);
    triangle(216, 78, 224, 85, 227, 93);
    triangle(186, 202, 187, 174, 193, 157);
    triangle(135, 371, 152, 366, 171, 366);
    triangle(19, 365, 41, 347, 72, 333);
    triangle(236, 106, 294, 104, 267, 107);
    triangle(174, 436, 181, 422, 194, 409);
    triangle(190, 429, 196, 410, 195, 420);
    triangle(72, 583, 86, 566, 106, 553);
    triangle(175, 541, 168, 519, 173, 528);
    triangle(317, 489, 311, 474, 311, 458);
    triangle(319, 483, 318, 434, 321, 456);
    triangle(179, 556, 290, 529, 231, 546);
  },
};

let handTop = {
  display: function () {
    image(topHand, xCoord, 0, 793, 612);
  },
};

function preload() {
  topHand = loadImage("topHand.png");
}

function setup() {
  createCanvas(800, 610);
  background(216, 266, 92);
}

function draw() {
  // STARTING SCREEN
  // credCardBack.display();
  print(xCoord);
  if (clickStart === false) {
    background(216, 266, 92);
    textSize(40);
    textStyle(BOLD);
    text("Drag the hand to the right to", 135, 210);
    text("to reveal the credit card info", 138, 270);
    noStroke();
    fill("black");
    rect(195, 334, 400, 7);
    triangle(595, 324, 625, 338, 595, 350);
    textSize(100);
    text("START", 235, 530);
  }
  // INTERACTION SCREEN
  else {
    if (cardRotation === 0) {
      background(216, 266, 92);
      credCardFront.display();
      handFront.display();
      handTop.display();
      if (xCoord >= 396) {
        print("asdf");
        background(216, 266, 92);
        credCardFront.display();
        handFront.display();
        handTop.display();
        textSize(25);
        textStyle(BOLD);
        text("Press the Left Arrow key to flip the card", 290, 570);
      } else {
        textSize(30);
        textStyle(BOLD);
        text("Keep dragging", 430, 560);
        handTop.display();
      }
    } else if (xCoord >= 396) {
      if (cardRotation === 1) {
        background(216, 266, 92);
        fill("black");
        rect(280, 130, 420, 315, 17);
        textSize(30);
        textStyle(BOLD);
        text("Keep pressing left", 430, 560);
        fill(255, 156, 49);
        rect(275, 130, 420, 315, 17);

        // fill(255, 178, 66);
        // beginShape();
        // vertex(276, 157);
        // vertex(394, 130);
        // vertex(560, 130);
        // vertex(631, 445);
        // vertex(581, 445);
        // vertex(560, 445);
        // vertex(275, 278);
        // endShape();
        // beginShape();
        // vertex(580, 130);
        // vertex(631, 130);
        // vertex(642, 445);
        // vertex(637, 445);
        // vertex(580, 130);
        // endShape();
        // fill(102, 255, 224);
        // rect(300, 266, 50, 47, 7);
        // rect(300, 350, 12, 20);
        // rect(320, 350, 10, 20);
        // rect(335, 350, 15, 20);
        // rect(355, 350, 10, 20);
        // rect(368, 350, 8, 20);
        // rect(390, 350, 15, 20);
        // rect(410, 350, 7, 20);
        // rect(421, 350, 10, 20);
        // rect(583, 400, 15, 30);
        // rect(603, 400, 13, 30);
        // rect(623, 400, 11, 30);
        // rect(638, 400, 10, 30);
        // rect(410, 275, 50, 30);
        // rect(468, 275, 50, 30);
        // rect(526, 275, 50, 30);
        // rect(584, 275, 50, 30);
        // rect(620, 146, 40, 50);

        handFront.display();
        noStroke();
      } else if (cardRotation === 2) {
        background(216, 266, 92);
        fill("black");
        rect(327, 130, 320, 315, 17);
        fill(255, 156, 49);
        rect(320, 130, 320, 315, 17);

        // fill(255, 178, 66);
        // beginShape();
        // vertex(320, 157);
        // vertex(370, 130);
        // vertex(520, 130);
        // vertex(560, 445);
        // vertex(510, 445);
        // vertex(320, 278);
        // endShape();
        // beginShape();
        // vertex(535, 130);
        // vertex(575, 130);
        // vertex(570, 445);
        // vertex(565, 445);
        // vertex(535, 130);
        // endShape();
        // fill(102, 255, 224);
        // rect(335, 266, 35, 47, 7);
        // rect(300, 350, 12, 20);
        // rect(320, 350, 10, 20);
        // rect(335, 350, 15, 20);
        // rect(355, 350, 10, 20);
        // rect(368, 350, 8, 20);
        // rect(390, 350, 15, 20);
        // rect(410, 350, 7, 20);
        // rect(421, 350, 10, 20);
        // rect(550, 400, 12, 30);
        // rect(570, 400, 10, 30);
        // rect(623, 400, 11, 30);
        // rect(638, 400, 10, 30);
        // rect(408, 275, 40, 30);
        // rect(454, 275, 40, 30);
        // rect(500, 275, 40, 30);
        // rect(545, 275, 40, 30);
        // rect(560, 146, 25, 50);

        handFront.display();
        noStroke();
      } else if (cardRotation === 3) {
        background(216, 266, 92);
        fill("black");
        rect(410, 130, 160, 315, 17);
        fill(255, 156, 49);
        rect(400, 130, 160, 315, 17);
        handFront.display();
        noStroke();
      } else if (cardRotation === 4) {
        background(216, 266, 92);
        fill("black");
        rect(470, 130, 20, 315, 2);
        handFront.display();
        noStroke();
      } else if (cardRotation === 5) {
        background(216, 266, 92);
        fill("black");
        rect(394, 130, 160, 315, 17);
        fill(164, 240, 228);
        rect(400, 130, 160, 315, 17);
        handFront.display();
        noStroke();
      } else if (cardRotation === 6) {
        background(216, 266, 92);
        fill("black");
        rect(315, 130, 320, 315, 17);
        fill(164, 240, 228);
        rect(320, 130, 320, 315, 17);
        handFront.display();
        noStroke();
      } else if (cardRotation === 7) {
        background(216, 266, 92);
        fill("black");
        rect(272, 130, 420, 315, 17);
        fill(164, 240, 228);
        rect(275, 130, 420, 315, 17);
        handFront.display();
        noStroke();
      } else if (cardRotation >= 8) {
        background(216, 266, 92);
        credCardBack.display();
        handFront.display();
        noStroke();
      }
    }
  }
  // coordMouse.display();
}

function mousePressed() {
  clickStart = true;
}

function mouseDragged() {
  if (value1 === 0) {
    xCoord = xCoord + 1;
    handDrag = true;
  } else {
    xCoord = xCoord - 1;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cardRotation = cardRotation + 1;
  }
}
