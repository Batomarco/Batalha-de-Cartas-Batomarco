var cartas = [];

var cartasAwaken = [];

//Função para criar uma carta
function criarCarta(nome, imagem, ataque, defesa, magia) {
    return {
        nome: nome,
        imagem: imagem,
        atributos: {
            ataque: ataque,
            defesa: defesa,
            magia: magia,
        }
    }
}

//Adicionar cartas
cartas.push(criarCarta("Alberta", "https://static.wikia.nocookie.net/project-qt/images/0/07/AlbertaChibi.png", 
400, 1134, 242));
cartas.push(criarCarta("Alizee", "https://static.wikia.nocookie.net/project-qt/images/9/98/AlizeeChibi.png",
211, 1802, 214));
cartas.push(criarCarta("Amina", "https://static.wikia.nocookie.net/project-qt/images/2/22/AminaChibi.png",
658, 841, 109));
cartas.push(criarCarta("Amora", "https://static.wikia.nocookie.net/project-qt/images/d/da/ChibiAmora.png",
445, 627, 543));
cartas.push(criarCarta("Amy", "https://static.wikia.nocookie.net/project-qt/images/a/a1/AmyChibi.png",
206, 1706, 236));
cartas.push(criarCarta("Angela", "https://static.wikia.nocookie.net/project-qt/images/b/b7/AngelaChibi.png",
435, 538, 457));
cartas.push(criarCarta("Astarte", "https://static.wikia.nocookie.net/project-qt/images/d/d4/AstarteChibi.png",
396, 603, 490));
cartas.push(criarCarta("Bikini Girls", "https://static.wikia.nocookie.net/project-qt/images/3/31/BikiniGirlsChibi.png",
332, 655, 490));
cartas.push(criarCarta("Billie", "https://static.wikia.nocookie.net/project-qt/images/b/bf/BillieChibi.png",
247, 1847, 196));
cartas.push(criarCarta("Camille", "https://static.wikia.nocookie.net/project-qt/images/a/aa/CamilleChibi.png",
595, 871, 128));
cartas.push(criarCarta("Caroline", "https://static.wikia.nocookie.net/project-qt/images/9/9d/CarolineChibi.png",
446, 623, 448));
cartas.push(criarCarta("Christina", "https://static.wikia.nocookie.net/project-qt/images/8/87/ChristinaChibi.png",
289, 635, 520));
cartas.push(criarCarta("Christmas Devils", "https://static.wikia.nocookie.net/project-qt/images/8/83/ChristmasDevilsChibi.png",
191, 1824, 221));
cartas.push(criarCarta("Clara", "https://static.wikia.nocookie.net/project-qt/images/6/69/ClaraChibi.png",
416, 1071, 245))
cartas.push(criarCarta("Elva", "https://static.wikia.nocookie.net/project-qt/images/d/d0/ElvaChibi.png",
553, 921, 141));
cartas.push(criarCarta("Esther", "https://static.wikia.nocookie.net/project-qt/images/e/e8/EstherChibi.png",
210, 1859, 203));
cartas.push(criarCarta("Evelyn", "https://static.wikia.nocookie.net/project-qt/images/a/a0/EvelynChibi.png",
366, 669, 474));
cartas.push(criarCarta("Flora", "https://static.wikia.nocookie.net/project-qt/images/5/54/FloraChibi.png",
416, 577, 464));
cartas.push(criarCarta("Freya", "https://static.wikia.nocookie.net/project-qt/images/0/0f/FreyaChibi.png",
376, 1208, 241));
cartas.push(criarCarta("Geneva", "https://static.wikia.nocookie.net/project-qt/images/8/85/GenevaChibi.png",
445, 1270, 189));
cartas.push(criarCarta("Giselle", "https://static.wikia.nocookie.net/project-qt/images/c/c7/GiselleChibi.png",
655, 808, 106));
cartas.push(criarCarta("Grace", "https://static.wikia.nocookie.net/project-qt/images/3/3c/GraceChibi.png",
229, 1772, 210));
cartas.push(criarCarta("Haley", "https://static.wikia.nocookie.net/project-qt/images/c/cc/HaleyChibi.png",
225, 1771, 212));
cartas.push(criarCarta("Halloween Witches", "https://static.wikia.nocookie.net/project-qt/images/2/2a/HalloweenWitchesChibi.png",
368, 1280, 255));
cartas.push(criarCarta("Harlee", "https://static.wikia.nocookie.net/project-qt/images/1/1d/HarleeChibi.png",
384, 1194, 239));
cartas.push(criarCarta("Iris", "https://static.wikia.nocookie.net/project-qt/images/0/0e/IrisChibi.png",
643, 831, 109));
cartas.push(criarCarta("Joyce", "https://static.wikia.nocookie.net/project-qt/images/c/c9/JoyceChibi.png",
248, 1770, 200));
cartas.push(criarCarta("Juliana", "https://static.wikia.nocookie.net/project-qt/images/9/97/JulianaChibi.png",
591, 908, 122));
cartas.push(criarCarta("Kaia", "https://static.wikia.nocookie.net/project-qt/images/a/a5/KaiaChibi.png",
659, 836, 990));
cartas.push(criarCarta("Kate", "https://static.wikia.nocookie.net/project-qt/images/f/f3/KateChibi.png",
390, 562, 478));
cartas.push(criarCarta("Katherine", "https://static.wikia.nocookie.net/project-qt/images/4/4c/KatherineChibi.png",
371, 589, 485));
cartas.push(criarCarta("Lillian", "https://static.wikia.nocookie.net/project-qt/images/3/39/LilianChibi.png",
421, 1247, 203));
cartas.push(criarCarta("Lilly", "https://static.wikia.nocookie.net/project-qt/images/8/8c/LillyChibi.png",
705, 793, 139));
cartas.push(criarCarta("Little Reislin", "https://static.wikia.nocookie.net/project-qt/images/e/e5/LittleReislinChibi.png",
409, 614, 457));
cartas.push(criarCarta("Louisa", "https://static.wikia.nocookie.net/project-qt/images/a/a2/LouisaChibi.png",
188, 1769, 233));
cartas.push(criarCarta("Lucy", "https://static.wikia.nocookie.net/project-qt/images/f/f2/LucyChibi.png",
371, 1212, 242));
cartas.push(criarCarta("Luna", "https://static.wikia.nocookie.net/project-qt/images/0/07/LunaChibi.png",
654, 861, 960));
cartas.push(criarCarta("Maeva", "https://static.wikia.nocookie.net/project-qt/images/b/b4/MaeveChibi.png",
436, 1192, 210));
cartas.push(criarCarta("Margaret", "https://static.wikia.nocookie.net/project-qt/images/4/4a/MargaretChibi.png",
158, 1818, 240));
cartas.push(criarCarta("Mina", "https://static.wikia.nocookie.net/project-qt/images/0/07/MinaChibi.png",
641, 756, 125));
cartas.push(criarCarta("Roselyn", "https://static.wikia.nocookie.net/project-qt/images/3/30/RoselynChibi.png",
424, 1279, 200));
cartas.push(criarCarta("Ruby", "https://static.wikia.nocookie.net/project-qt/images/a/a9/RubyChibi.png",
383, 1207, 237));
cartas.push(criarCarta("Saika", "https://static.wikia.nocookie.net/project-qt/images/c/c5/SaikaChibi.png",
660, 739, 118));
cartas.push(criarCarta("Scarlett", "https://static.wikia.nocookie.net/project-qt/images/c/c4/ScarlettChibi.png",
408, 1166, 247));
cartas.push(criarCarta("Summer Ladies", "https://static.wikia.nocookie.net/project-qt/images/3/32/SummerLadiesChibi.png",
656, 704, 127));
cartas.push(criarCarta("Tashia", "https://static.wikia.nocookie.net/project-qt/images/9/94/TashiaChibi.png",
634, 862, 107));
cartas.push(criarCarta("Una", "https://static.wikia.nocookie.net/project-qt/images/e/ed/UnaChibi.png",
452, 548, 445));
cartas.push(criarCarta("Venus", "https://static.wikia.nocookie.net/project-qt/images/c/c1/VenusChibi.png",
393, 744, 439));
cartas.push(criarCarta("Violet", "https://static.wikia.nocookie.net/project-qt/images/c/c9/VioletChibi.png",
650, 835, 104));
cartas.push(criarCarta("Vivian", "https://static.wikia.nocookie.net/project-qt/images/6/63/VivianChibi.png",
330, 750, 473));
cartas.push(criarCarta("Winni", "https://static.wikia.nocookie.net/project-qt/images/3/39/WinniChibi.png",
223, 1547, 259));
cartas.push(criarCarta("Zoey", "https://static.wikia.nocookie.net/project-qt/images/d/de/ZoeyChibi.png",
220, 1716, 226));

//Adicionar cartas
cartasAwaken.push(criarCarta("Alberta", "https://static.wikia.nocookie.net/project-qt/images/c/c6/AlbertaAwakenedChibi.png", 
parseInt(400 + (0.07 * 400)), parseInt(1134 + (0.07 * 1134)), 242));
cartasAwaken.push(criarCarta("Alizee", "https://static.wikia.nocookie.net/project-qt/images/2/29/AlizeeAwakenedChibi.png",
parseInt(211 + (0.07 * 211)), parseInt(1802 + (0.07 * 1802)), 214));
cartasAwaken.push(criarCarta("Amina", "https://static.wikia.nocookie.net/project-qt/images/4/41/AminaAwakenedChibi.png",
parseInt(658 + (0.07 * 658)), parseInt(841 + (0.07 * 841)), 109));
cartasAwaken.push(criarCarta("Amora", "https://static.wikia.nocookie.net/project-qt/images/6/60/ChibiAwakenedAmora.png",
parseInt(445 + (0.07 * 445)), parseInt(627 + (0.07 * 627)), 543));
cartasAwaken.push(criarCarta("Amy", "https://static.wikia.nocookie.net/project-qt/images/6/60/AmyAwakenedChibi.png",
206, parseInt(1706 + (0.07 * 1706)), parseInt(236 +(0.07 * 236))));
cartasAwaken.push(criarCarta("Angela", "https://static.wikia.nocookie.net/project-qt/images/2/2b/AngelaAwakenedChibi.png",
parseInt(435 + (0.07 * 435)), parseInt(538 + (0.07 * 538)), 457));
cartasAwaken.push(criarCarta("Astarte", "https://static.wikia.nocookie.net/project-qt/images/a/ad/AstarteAwakenedChibi.png",
396, parseInt(603 + (0.07 * 603)), parseInt(490 + (0.07 * 490))));
cartasAwaken.push(criarCarta("Bikini Girls", "https://static.wikia.nocookie.net/project-qt/images/5/52/BikiniGirlsAwakenedChibi.png",
parseInt(332 + (0.07 * 332)), parseInt(655 + (0.07 * 655)), 490));
cartasAwaken.push(criarCarta("Billie", "https://static.wikia.nocookie.net/project-qt/images/4/47/BillieAwakenedChibi.png",
parseInt(247 + (0.07 * 247)), parseInt(1847 + (0.07 * 1847)), 196));
cartasAwaken.push(criarCarta("Camille", "https://static.wikia.nocookie.net/project-qt/images/7/70/CamilleAwakenedChibi.png",
parseInt(595 + (0.07 * 595)), parseInt(871 + (0.07 * 871)), 128));
cartasAwaken.push(criarCarta("Caroline", "https://static.wikia.nocookie.net/project-qt/images/a/a3/CarolineAwakenedChibi.png/revision/latest/scale-to-width-down/1000?cb=20210225122321",
parseInt(446 + (0.07 * 446)), 623, parseInt(448 + (0.07 * 448))));
cartasAwaken.push(criarCarta("Christina", "https://static.wikia.nocookie.net/project-qt/images/b/b4/ChristinaAwakenedChibi.png",
289, parseInt(635 + (0.07 * 635)), parseInt(520 + (0.07 * 520))));
cartasAwaken.push(criarCarta("Christmas Devils", "https://static.wikia.nocookie.net/project-qt/images/e/ee/ChristmasDevilsAwakenedChibi.png",
parseInt(191 + (0.07 * 191)), parseInt(1824 + (0.07 * 1824)), 221));
cartasAwaken.push(criarCarta("Clara", "https://static.wikia.nocookie.net/project-qt/images/7/7d/ClaraAwakenedChibi.png",
parseInt(416 + (0.07 * 416)), parseInt(1071 + (0.07 * 1071)), 245))
cartasAwaken.push(criarCarta("Elva", "https://static.wikia.nocookie.net/project-qt/images/5/56/ElvaAwakenedChibi.png",
parseInt(553 + (0.07 * 553)), parseInt(921 + (0.07 * 921)), 141));
cartasAwaken.push(criarCarta("Esther", "https://static.wikia.nocookie.net/project-qt/images/6/6d/EstherAwakenedChibi.png",
parseInt(210 + (0.07 * 210)), parseInt(1859 + (0.07 * 1859)), 203));
cartasAwaken.push(criarCarta("Evelyn", "https://static.wikia.nocookie.net/project-qt/images/0/08/EvelynAwakenedChibi.png",
366, parseInt(669 + (0.07 * 669)), parseInt(474 + (0.07 * 474))));
cartasAwaken.push(criarCarta("Flora", "https://static.wikia.nocookie.net/project-qt/images/1/14/FloraAwakenedChibi.png",
416, parseInt(577 + (0.07 * 577)), parseInt(464 + (0.07 * 464))));
cartasAwaken.push(criarCarta("Freya", "https://static.wikia.nocookie.net/project-qt/images/b/bf/FreyaAwakenedChibi.png",
parseInt(376 + (0.07 * 376)), 1208, parseInt(241 + (0.07 * 241))));
cartasAwaken.push(criarCarta("Geneva", "https://static.wikia.nocookie.net/project-qt/images/7/7b/GenevaAwakenedChibi.png",
parseInt(445 + (0.07 * 445)), parseInt(1270 + (0.07 * 1270)), 189));
cartasAwaken.push(criarCarta("Giselle", "https://static.wikia.nocookie.net/project-qt/images/5/5e/GiselleAwakenedChibi.png",
parseInt(655 + (0.07 * 655)), parseInt(808 + (0.07 * 808)), 106));
cartasAwaken.push(criarCarta("Grace", "https://static.wikia.nocookie.net/project-qt/images/3/38/GraceAwakenedChibi.png",
parseInt(229 + (0.07 * 229)), parseInt(1772 + (0.07 * 1772)), 210));
cartasAwaken.push(criarCarta("Haley", "https://static.wikia.nocookie.net/project-qt/images/5/50/HaleyAwakenedChibi.png",
parseInt(225 + (0.07 * 225)), parseInt(1771 + (0.07 * 1771)), 212));
cartasAwaken.push(criarCarta("Halloween Witches", "https://static.wikia.nocookie.net/project-qt/images/7/7c/HalloweenWitchesAwakenedChibi.png",
parseInt(368 + (0.07 * 386)), parseInt(1280 + (0.07 * 1280)), 255));
cartasAwaken.push(criarCarta("Harlee", "https://static.wikia.nocookie.net/project-qt/images/4/45/HarleeAwakenedChibi.png",
parseInt(384 + (0.07 * 384)), parseInt(1194 + (0.07 * 1194)), 239));
cartasAwaken.push(criarCarta("Iris", "https://static.wikia.nocookie.net/project-qt/images/8/87/IrisAwakenedChibi.png",
parseInt(643 + (0.07 * 643)), parseInt(831 + (0.07 * 831)), 109));
cartasAwaken.push(criarCarta("Joyce", "https://static.wikia.nocookie.net/project-qt/images/1/19/JoyceAwakenedChibi.png",
parseInt(248 + (0.07 * 258)), parseInt(1770 + (0.07 * 1170)), 200));
cartasAwaken.push(criarCarta("Juliana", "https://static.wikia.nocookie.net/project-qt/images/2/22/JulianaAwakenedChibi.png",
parseInt(591 + (0.07 * 591)), 908, parseInt(122 + (0.07 * 122))));
cartasAwaken.push(criarCarta("Kaia", "https://static.wikia.nocookie.net/project-qt/images/e/ef/KaiaAwakenedChibi.png",
parseInt(659 + (0.07 * 659)), parseInt(836 + (0.07 * 836)), 990));
cartasAwaken.push(criarCarta("Kate", "https://static.wikia.nocookie.net/project-qt/images/5/58/KateAwakenedChibi.png",
parseInt(390 + (0.07 * 390)), parseInt(562 + (0.07 * 562)), 478));
cartasAwaken.push(criarCarta("Katherine", "https://static.wikia.nocookie.net/project-qt/images/f/f5/KatherineAwakenedChibi.png",
371, parseInt(589 + (0.07 * 589)), parseInt(485 + (0.07 * 485))));
cartasAwaken.push(criarCarta("Lillian", "https://static.wikia.nocookie.net/project-qt/images/8/83/LilianAwakenedChibi.png",
parseInt(421 + (0.07 * 421)), parseInt(1247 + (0.07 * 1247)), 203));
cartasAwaken.push(criarCarta("Lilly", "https://static.wikia.nocookie.net/project-qt/images/a/ac/LillyAwakenedChibi.png",
parseInt(705 + (0.07 * 705)), parseInt(793 + (0.07 * 793)), 139));
cartasAwaken.push(criarCarta("Little Reislin", "https://static.wikia.nocookie.net/project-qt/images/6/69/LittleReislinAwakenedChibi.png",
parseInt(409 + (0.07 * 409)), parseInt(614 + (0.07 * 614)), 457));
cartasAwaken.push(criarCarta("Louisa", "https://static.wikia.nocookie.net/project-qt/images/8/83/LouisaAwakenedChibi.png",
parseInt(188 + (0.07 * 188)), parseInt(1769 + (0.07 * 1769)), 233));
cartasAwaken.push(criarCarta("Lucy", "https://static.wikia.nocookie.net/project-qt/images/8/8e/LucyAwakenedChibi.png",
parseInt(371 + (0.07 * 371)), parseInt(1212 + (0.07 * 1212)), 242));
cartasAwaken.push(criarCarta("Luna", "https://static.wikia.nocookie.net/project-qt/images/9/90/LunaAwakenedChibi.png",
parseInt(654 + (0.07 * 654)), parseInt(861 + (0.07 * 861)), 960));
cartasAwaken.push(criarCarta("Maeva", "https://static.wikia.nocookie.net/project-qt/images/1/1c/MaeveAwakenedChibi.png",
parseInt(436 + (0.07 * 436)), parseInt(1192 + (0.07 * 1192)), 210));
cartasAwaken.push(criarCarta("Margaret", "https://static.wikia.nocookie.net/project-qt/images/9/9e/MargaretAwakenedChibi.png",
parseInt(158 + (0.07 * 158)), parseInt(1818 + (0.07 * 1818)), 240));
cartasAwaken.push(criarCarta("Mina", "https://static.wikia.nocookie.net/project-qt/images/f/f4/MinaAwakenedChibi.png",
parseInt(641 + (0.07 * 641)), parseInt(756 + (0.07 * 756)), 125));
cartasAwaken.push(criarCarta("Roselyn", "https://static.wikia.nocookie.net/project-qt/images/0/07/RoselynAwakenedChibi.png",
parseInt(424 + (0.07 * 424)), parseInt(1279 + (0.07 * 1279)), 200));
cartasAwaken.push(criarCarta("Ruby", "https://static.wikia.nocookie.net/project-qt/images/5/52/RubyAwakenedChibi.png",
parseInt(383 + (0.07 * 383)), parseInt(1207 + (0.07 * 1207)), 237));
cartasAwaken.push(criarCarta("Saika", "https://static.wikia.nocookie.net/project-qt/images/9/9f/SaikaAwakenedChibi.png",
parseInt(660 + (0.07 * 660)), parseInt(739 + (0.07 * 739)), 118));
cartasAwaken.push(criarCarta("Scarlett", "https://static.wikia.nocookie.net/project-qt/images/0/0d/ScarlettAwakenedChibi.png",
parseInt(408 + (0.07 * 408)), parseInt(1166 + (0.07 * 1166)), 247));
cartasAwaken.push(criarCarta("Summer Ladies", "https://static.wikia.nocookie.net/project-qt/images/6/6b/SummerLadiesAwakenedChibi.png",
parseInt(656 + (0.07 * 656)), parseInt(704 + (0.07 * 704)), 127));
cartasAwaken.push(criarCarta("Tashia", "https://static.wikia.nocookie.net/project-qt/images/d/d3/TashiaAwakenedChibi.png",
parseInt(634 + (0.07 * 634)), parseInt(862 + (0.07 * 862)), 107));
cartasAwaken.push(criarCarta("Una", "https://static.wikia.nocookie.net/project-qt/images/d/d5/UnaAwakenedChibi.png",
parseInt(452 + (0.07 * 452)), 548, parseInt(445 + (0.07 * 445))));
cartasAwaken.push(criarCarta("Venus", "https://static.wikia.nocookie.net/project-qt/images/9/9d/VenusAwakenedChibi.png",
parseInt(393 + (0.07 * 393)), 744, parseInt(439 + (0.07 * 439))));
cartasAwaken.push(criarCarta("Violet", "https://static.wikia.nocookie.net/project-qt/images/1/16/VioletAwakenedChibi.png",
parseInt(650 + (0.07 * 650)), parseInt(835 + (0.07 * 835)), 104));
cartasAwaken.push(criarCarta("Vivian", "https://static.wikia.nocookie.net/project-qt/images/1/14/VivianAwakenedChibi.png",
parseInt(330 + (0.07 * 330)), 750, parseInt(473 + (0.07 * 473))));
cartasAwaken.push(criarCarta("Winni", "https://static.wikia.nocookie.net/project-qt/images/f/f2/WinniAwakenedChibi.png",
parseInt(223 + (0.07 * 223)), parseInt(1547 + (0.07 * 1547)), 259));
cartasAwaken.push(criarCarta("Zoey", "https://static.wikia.nocookie.net/project-qt/images/0/0c/ZoeyAwakenedChibi.png",
parseInt(220 + (0.07 * 220)), parseInt(1716 + (0.07 * 1716)), 226));