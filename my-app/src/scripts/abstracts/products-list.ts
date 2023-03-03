import { Template } from "./interfaces"

import img1813 from "../../assets/images/1813.jpg";
import img4875 from "../../assets/images/4875.jpg";
import imgB33 from "../../assets/images/b33.jpg";
import imgCandeleholder from "../../assets/images/candleholder.jpg";
import imgHammerYellow from "../../assets/images/hammer-yellow.jpg";
import imgKoror from "../../assets/images/koror.jpg";
import imgMg5Red from "../../assets/images/mg5-red.jpg";
import imgMg5White from "../../assets/images/mg5-white.jpg";
import imgModus from "../../assets/images/modus.jpg";
import imgPhilippe from "../../assets/images/philippe.jpg";
import imgPlia from "../../assets/images/plia.jpg";
import imgTango from "../../assets/images/tango.jpg";
import imgTogo from "../../assets/images/togo.jpg";
import imgWassily from "../../assets/images/wassily.jpg";

 export class Product implements Template {
    id: number;
    name: string;
    amount: number;
    year: number;
    cost: number;
    color: string;
    producer: string;
    image: string[];
    designer: string;
    type: string;
    popularity: number;
    isInCart: boolean;
    constructor(id: number, name: string, amount: number, year: number, cost: number, color: string, producer: string, 
      image: string[], designer: string, type: string, popularity: number, isInCart: boolean) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.year = year;
      this.cost = cost;
      this.color = color;
      this.producer = producer;
      this.image = image;
      this.designer = designer;
      this.type = type;
      this.popularity = popularity;
      this.isInCart = isInCart;
    }
 }

 export const products: Product[] = [  //TODO: add image array and color array
  {
    id: 1,
    name: "Handkerchief",
    amount: 4,
    year: 1980,
    cost: 1100,
    color: "blue",
    producer: "KNOLL",
    image: [
      "https://www.dropbox.com/s/2zza2lm2471jsev/320723699_211602001249726_2173405130734800551_n.jpg?raw=1",
      "https://www.dropbox.com/s/39j4jakq2d9uyoa/320454038_173695628680785_1353928483448305383_n.jpg?raw=1",
      "https://www.dropbox.com/s/h4ntbedrq32h251/320814010_135985395956113_9162783042946699984_n.jpg?raw=1",
      "https://www.dropbox.com/s/p6amwetieam76ed/320490739_133500239313387_5510244588796398780_n.jpg?raw=1",
      "https://www.dropbox.com/s/hh9p1cgwv1oo79t/320452662_201677209017300_3442773997170667449_n.jpg?raw=1",
    ],
    designer: "Massimo and Vignelli",
    type: "armchair",
    popularity: 105,
    isInCart:  false,
  },
  {
    id: 2,
    name: "Plia",
    amount: 2,
    year: 1970,
    cost: 300,
    color: "metal",
    producer: "CASTELLI",
    image: [imgPlia],
    designer: "Giancarlo Piretti",
    type: "chair",
    popularity: 27,
    isInCart:  false,
  },
  {
    id: 3,
    name: "267",
    amount: 2,
    year: 1988,
    cost: 900,
    color: "",
    producer: "",
    image: [
      "https://www.dropbox.com/s/grji8slt411w4xo/292094162_790698159005422_3073661545130271939_n.jpg?raw=1",
      "https://www.dropbox.com/s/kgcpxnbjlmv7z9e/292179800_1204894000297905_8642493222711396688_n.jpg?raw=1",
      "https://www.dropbox.com/s/qzyzm2p6te8uhja/291954642_1052299288780108_3236617131203959635_n.jpg?raw=1",
      "https://www.dropbox.com/s/odu1029xfuajo1j/292508690_1470851193365615_3553999051102207180_n.jpg?raw=1",
    ],
    designer: "Marcel Baugier",
    type: "composition",
    popularity: 20,
    isInCart:  false,
  },
  {
    id: 4,
    name: "Tulipe",
    amount: 6,
    year: 1970,
    cost: 1600,
    color: "white",
    producer: "KNOLL",
    image: [
      "https://www.dropbox.com/s/564j9bdeekaddfp/291924713_747247566513524_5770865159640914153_n.jpg?raw=1",
      "https://www.dropbox.com/s/duiwq67ktszcank/292008044_1385187365309407_4464630775215895778_n.jpg?raw=1",
      "https://www.dropbox.com/s/cs0r3xoy24xmq03/292134393_453287896194486_4345079245405236591_n.jpg?raw=1",
      "https://www.dropbox.com/s/4homw7l4e19fg46/291898558_361013496182388_2960157824416198971_n.jpg?raw=1",
      "https://www.dropbox.com/s/b7pdicvmebmakqm/291815492_774086283777002_2626909886186640657_n.jpg?raw=1",
      "https://www.dropbox.com/s/8x5tzp09r93u654/292231573_5239521532810289_7075275309471129610_n.jpg?raw=1",
      "https://www.dropbox.com/s/ydflawgo1qaskpy/291779918_413651787370956_6993784662247130722_n.jpg?raw=1",
    ],
    designer: "Eero Saarinen",
    type: "chair",
    popularity: 84,
    isInCart:  false,
  },
  {
    id: 5,
    name: "Pelikan",
    amount: 4,
    year: 1990,
    cost: 1850,
    color: "metal",
    producer: "FRITZ HANSEN",
    image: [
      "https://www.dropbox.com/s/kbb34qqxysrgmr5/291391017_1429364990914358_8291762237268393121_n.jpg?raw=1",
      "https://www.dropbox.com/s/h0e47b3d6rb3t82/290869196_1006355046692966_4632465878699992132_n.jpg?raw=1",
      "https://www.dropbox.com/s/kkxs3u9y2242p6t/291245825_5432102733512880_3618720498638921692_n.jpg?raw=1",
      "https://www.dropbox.com/s/kq6uizrarb6q6k2/290875650_5659391924116079_7824253417756409038_n.jpg?raw=1",
      "https://www.dropbox.com/s/x2a542fuoh5czs1/290761298_1142687896308601_6579140690468203944_n.jpg?raw=1",
      "https://www.dropbox.com/s/widxyk39utiad0p/290954942_1208567203295200_1852708070255415607_n.jpg?raw=1",
    ],
    designer: "Niels Gammelgaard & Lars Mathiesen",
    type: "chair",
    popularity: 35,
    isInCart:  false,
  },
  {
    id: 6,
    name: "268",
    amount: 1,
    year: 1988,
    cost: 900,
    color: "",
    producer: "",
    image: [
      "https://www.dropbox.com/s/kf11su979l5nklx/290700063_350790180462372_1032177251807544774_n.jpg?raw=1",
      "https://www.dropbox.com/s/ssietzpot68co7g/290929103_574110950762739_6511019995010784640_n.jpg?raw=1",
      "https://www.dropbox.com/s/zmu6mioq213qnh9/290682999_607078673954002_5874510495546099278_n.jpg?raw=1",
      "https://www.dropbox.com/s/cun5dl07yyigcbd/290636773_392124212760025_3454438372244796136_n.jpg?raw=1",
    ],
    designer: "Marcel Baugier",
    type: "composition",
    popularity: 24,
    isInCart:  false,
  },
  {
    id: 7,
    name: "P40",
    amount: 3,
    year: 1980,
    cost: 1850,
    color: "red",
    producer: "",
    image: [
      "https://www.dropbox.com/s/p7utngup01g96js/290606913_1510240682765574_8549842965070704847_n.jpg?raw=1",
      "https://www.dropbox.com/s/8zfpl9of6gaaiq5/289924089_182720747532237_3062537639798211896_n.jpg?raw=1",
      "https://www.dropbox.com/s/sa2iw8pqo7gqi2b/290092743_137968095528224_4374691224102770357_n.jpg?raw=1",
      "https://www.dropbox.com/s/gwngru3l1lq1u81/290704234_154848133782827_2718607643253578123_n.jpg?raw=1",
    ],
    designer: "Giancarlo Venghi & Gianfranco Gualtierotti",
    type: "armchair",
    popularity: 405,
    isInCart:  false,
  },
  {
    id: 8,
    name: "Hammer",
    amount: 12,
    year: 1974,
    cost: 700,
    color: "red",
    producer: "FRITZ HANSEN",
    image: [
      "https://www.dropbox.com/s/pl6gebw4twdfxzc/289360668_3234181716799921_5780514625474162464_n.jpg?raw=1",
      "https://www.dropbox.com/s/kkm3dzlg1sml3kl/290019532_1059278658018849_8635374253044643436_n.jpg?raw=1",
      "https://www.dropbox.com/s/8hyehyva3p10w2t/289437054_694372468322578_9024814690698924213_n.jpg?raw=1",
      "https://www.dropbox.com/s/67som4j8y79s4iu/289799105_719441145992523_4894362198455054460_n.jpg?raw=1",
    ],
    designer: "Arne Jacobsen",
    type: "chair",
    popularity: 41,
    isInCart:  false,
  },
  {
    id: 9,
    name: "Roger Carpon",
    amount: 1,
    year: 1950,
    cost: 3000,
    color: "black",
    producer: "",
    image: [
      "https://www.dropbox.com/s/dno0owss2cyuboj/289382672_1233827800722877_3598778605827798358_n.jpg?raw=1",
      "https://www.dropbox.com/s/6ts010lwqm78z22/289437970_612485303208760_2145406000641404931_n.jpg?raw=1",
      "https://www.dropbox.com/s/5lj16iwz68kmk5f/289295816_163104469535859_8129117307990883456_n.jpg?raw=1",
      "https://www.dropbox.com/s/bv94br89ctec12i/289235338_721727009037746_7949069273307028712_n.jpg?raw=1",
      "https://www.dropbox.com/s/hszmm8844n1xfqg/289714178_565971768392427_2860346527511674277_n.jpg?raw=1",
    ],
    designer: "Roger Carpon",
    type: "table",
    popularity: 55,
    isInCart:  false,
  },
  {
    id: 10,
    name: "B64",
    amount: 4,
    year: 1950,
    cost: 470,
    color: "yellow",
    producer: "KNOLL",
    image: [
      "https://www.dropbox.com/s/bkuiqdxlc65zfy2/278910336_580347466326349_9154229151391984089_n.jpg?raw=1",
      "https://www.dropbox.com/s/x34uvv526rq1gpw/278833210_706780494084121_9052475668687687344_n.jpg?raw=1",
      "https://www.dropbox.com/s/aaabb545h0sm7nj/278778715_381219430531062_4144755772628653483_n.jpg?raw=1",
      "https://www.dropbox.com/s/85vr9j5tklcfl67/278806177_684113026142237_6597168094687934857_n.jpg?raw=1",
      "https://www.dropbox.com/s/n7jlrv87spzsrs5/278886874_1142896869865159_4371030618109627145_n.jpg?raw=1",
      "https://www.dropbox.com/s/5xfot5twumyaj9y/278788715_495485092363535_7774576069075834936_n.jpg?raw=1",
      "https://www.dropbox.com/s/tvh3j71yqy5wwnh/278832833_383822743622793_2527787144722596998_n.jpg?raw=1",
      "https://www.dropbox.com/s/ta6eks00a9ddsb9/278786002_708335110614908_3318333899876883231_n.jpg?raw=1",
      "https://www.dropbox.com/s/0v4od8esh222fhc/278786288_352465146703317_3198492781720744466_n.jpg?raw=1",
    ],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 63,
    isInCart:  false,
  },
  {
    id: 11,
    name: "4875",
    amount: 1,
    year: 1950,
    cost: 350,
    color: "white",
    producer: "KARTELL",
    image: [img4875],
    designer: "Carlo Bartoli",
    type: "chair",
    popularity: 54,
    isInCart:  false,
  },
  {
    id: 12,
    name: "Wassily",
    amount: 1,
    year: 1970,
    cost: 2870,
    color: "black",
    producer: "KNOLL",
    image: [imgWassily],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 137,
    isInCart:  false,
  },
  {
    id: 13,
    name: "1813",
    amount: 1,
    year: 1970,
    cost: 60,
    color: "green",
    producer: "GILAC",
    image: [img1813],
    designer: "",
    type: "mirror",
    popularity: 34,
    isInCart:  false,
  },
  {
    id: 14,
    name: "Hammer",
    amount: 2,
    year: 1974,
    cost: 700,
    color: "yellow",
    producer: "FRITZ HANSEN",
    image: [imgHammerYellow],
    designer: "Arne Jacobsen",
    type: "chair",
    popularity: 56,
    isInCart:  false,
  },
  {
    id: 15,
    name: "Tango",
    amount: 1,
    year: 1980,
    cost: 690,
    color: "black",
    producer: "ARTELUCE",
    image: [imgTango],
    designer: "Stephen Copeland",
    type: "lamp",
    popularity: 40,
    isInCart:  false,
  },
  {
    id: 16,
    name: "mg5",
    amount: 2,
    year: 1970,
    cost: 1480,
    color: "white",
    producer: "KNOLL",
    image: [imgMg5White],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 80,
    isInCart:  false,
  },
  {
    id: 17,
    name: "1",
    amount: 2,
    year: 1960,
    cost: 40,
    color: "metal",
    producer: "DANSK",
    image: [imgCandeleholder],
    designer: "Jens Harald Quistgaard",
    type: "candleholder",
    popularity:57,
    isInCart:  false,
  },
  {
    id: 18,
    name: "B33",
    amount: 1,
    year: 1970,
    cost: 800,
    color: "black",
    producer: "KNOLL",
    image: [imgB33],
    designer: "Marcel Breuer",
    type: "chair",
    popularity: 81,
    isInCart:  false,
  },
  {
    id: 19,
    name: "Koror",
    amount: 2,
    year: 1950,
    cost: 80,
    color: "blue",
    producer: "HOLMEGAARD",
    image: [imgKoror],
    designer: "Per Lutken",
    type: "vase",
    popularity: 50,
    isInCart:  false,
  },
  {
    id: 20,
    name: "Togo",
    amount: 2,
    year: 1980,
    cost: 8560,
    color: "white",
    producer: "LIGNE ROSET",
    image: [imgTogo],
    designer: "Mitchel Ducaroy",
    type: "sofa",
    popularity: 205,
    isInCart:  false,
  },
  {
    id: 21,
    name: "Modus",
    amount: 1,
    year: 1970,
    cost: 340,
    color: "black",
    producer: "TECNO",
    image: [imgModus],
    designer: "OSVALDO BORSANI",
    type: "armchair",
    popularity: 50,
    isInCart:  false,
  },
  {
    id: 22,
    name: "mg5",
    amount: 4,
    year: 1970,
    cost: 1480,
    color: "red",
    producer: "KNOLL",
    image: [imgMg5Red],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 117,
    isInCart:  false,
  },
  {
    id: 23,
    name: "Philippe Rogier",
    amount: 2,
    year: 1970,
    cost: 270,
    color: "metal",
    producer: "OXAR",
    image: [imgPhilippe],
    designer: "Philippe Rogier",
    type: "lamp",
    popularity: 90,
    isInCart:  false,
  },
  {
    id: 24,
    name: "DSS",
    amount: 6,
    year: 1999,
    cost: 845,
    color: "blue",
    producer: "VITRA",
    image: [
      "https://www.dropbox.com/s/zfsoevjd91d3her/271671998_671154454053523_5897906362727775501_n.jpg?raw=1",
      "https://www.dropbox.com/s/ozhgg3kr0ckbef4/271612905_1158376881660405_2986420389144614548_n.jpg?raw=1",
      "https://www.dropbox.com/s/1qr2s5szi6c6s5v/271629883_349072453718861_90470367624754011_n.jpg?raw=1",
      "https://www.dropbox.com/s/8sl3zuitycn0w0k/271547043_142202821526916_2352232772186673518_n.jpg?raw=1",
      "https://www.dropbox.com/s/pfp9z1d46c95st7/271547043_1015353982668799_3614649826073952868_n.jpg?raw=1",
      "https://www.dropbox.com/s/3m72qlhg0ujfd4e/271771072_631040011556562_9140307875736113251_n.jpg?raw=1",
      "https://www.dropbox.com/s/eapytipvhhjsg07/271633428_455560722879043_8327792048259218419_n.jpg?raw=1",
      "https://www.dropbox.com/s/ds3j1uhyuh7pqc2/271680294_2695473604091589_4785957597690793499_n.jpg?raw=1",
    ],
    designer: "CHARLES & RAY EAMES",
    type: "chair",
    popularity: 59,
    isInCart:  false,
  },
  {
    id: 25,
    name: "41701",
    amount: 1,
    year: 1977,
    cost: 122,
    color: "black",
    producer: "OSRAM",
    image: ["https://www.dropbox.com/s/1r6kjrjqx62wv5m/302187540_145305161198015_8567532113954371301_n.jpg?raw=1"],
    designer: "DIETTER WITTE",
    type: "lamp",
    popularity: 39,
    isInCart:  false,
  },
  {
    id: 26,
    name: "Brumbury",
    amount: 1,
    year: 1972,
    cost: 2100,
    color: "orange",
    producer: "GUZZINI",
    image: ["https://www.dropbox.com/s/addmm845i3edov1/P1550742.jpg.webp?raw=1"],
    designer: "Luigi Massoni",
    type: "lamp",
    popularity: 26,
    isInCart:  false,
  },
  {
    id: 27,
    name: "Harveiluce",
    amount: 2,
    year: 1977,
    cost: 368,
    color: "white",
    producer: "GUZZINI",
    image: ["https://www.dropbox.com/s/fa2yumzpcf2fm1l/296155398_144982371488711_1090905325727216530_n.jpg?raw=1"],
    designer: "HARVEY GUZZINI",
    type: "lamp",
    popularity: 41,
    isInCart:  false,
  },
  {
    id: 28,
    name: "Atollo",
    amount: 1,
    year: 1973,
    cost: 1285,
    color: "bronze",
    producer: "Oluce",
    image: ["https://www.objekt-vintage.nl/wp-content/uploads/2023/01/atollo-4.jpg"],
    designer: "VICO MAGISTRETTI",
    type: "lamp",
    popularity: 979,
    isInCart:  false,
  },
  {
    id: 29,
    name: "Mod 4043",
    amount: 1,
    year: 1964,
    cost: 5760,
    color: "metal",
    producer: "Kartell",
    image: ["https://www.objekt-vintage.nl/wp-content/uploads/2021/08/kartell-lamp-5.jpg"],
    designer: "FILIPPO PANSECA",
    type: "lamp",
    popularity: 76,
    isInCart:  false,
  },
  {
    id: 30,
    name: "Akari 26N",
    amount: 2,
    year: 1977,
    cost: 400,
    color: "beige",
    producer: "Icamu Noguchi",
    image: ["https://www.objekt-vintage.nl/wp-content/uploads/2022/07/noguchi-6.jpg"],
    designer: "ISAMU NOGUCHI",
    type: "lamp",
    popularity: 106,
    isInCart:  false,
  },
  {
    id: 31,
    name: "DSS",
    amount: 1,
    year: 1999,
    cost: 580,
    color: "beige",
    producer: "MOBILIER INTERNATIONAL",
    image: [
      "https://www.dropbox.com/s/uo94q9f2bmpr77s/329303113_2520774264764911_3548043673155170363_n.jpg?raw=1",
      "https://www.dropbox.com/s/vz4628cwy1offjm/328015371_525938532974137_46031411522993445_n.jpg?raw=1",
      "https://www.dropbox.com/s/wadcnj0wzzrwaa3/329223567_532454095387869_5353416199862996879_n.jpg?raw=1",
      "https://www.dropbox.com/s/3bslzjyg2vfcyqq/329387115_711223327456235_3782779584295211162_n.jpg?raw=1",
      "https://www.dropbox.com/s/qf6csk4utgpn6f9/329239903_213269654523440_5856540326226040454_n.jpg?raw=1",
      "https://www.dropbox.com/s/9ypk6zhc63mzf7y/329400292_1672678163190304_36491615475606797_n.jpg?raw=1",
      "https://www.dropbox.com/s/tx1bmhwy5hiymo1/329411018_517185077206617_4196147414243612268_n.jpg?raw=1",
      "https://www.dropbox.com/s/97ttt1yqiwqf5gt/329427708_508623921354442_5497916582776364674_n.jpg?raw=1",
      "https://www.dropbox.com/s/06pzcc0zjtunirs/329433724_3333549440189886_5803367990211121210_n.jpg?raw=1",
    ],
    designer: "EAMES",
    type: "chair",
    popularity: 38,
    isInCart:  false,
  },
  {
    id: 32,
    name: "mg5",
    amount: 3,
    year: 1978,
    cost: 2700,
    color: "black",
    producer: "MATEO GRASSI",
    image: [
      "https://www.dropbox.com/s/r2ubk4qx65kto7o/80851804_451759219035954_8449772583093775043_n.jpg?raw=1",
      "https://www.dropbox.com/s/tp4w56pg786xy7g/79848776_1020605241659677_8325141204623400203_n.jpg?raw=1",
      "https://www.dropbox.com/s/32v2eo8tz9lmp99/81672532_582140362577928_7506333725284735082_n.jpg?raw=1"
    ],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 43,
    isInCart:  false,
  },
  {
    id: 33,
    name: "Togo",
    amount: 4,
    year: 1986,
    cost: 4500,
    color: "black",
    producer: "LIGNE ROSET",
    image: [
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-1.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-2.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-3.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-4.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-5.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-6.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-7.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-8.jpg",
      "https://www.objekt-vintage.nl/wp-content/uploads/2022/09/togo-black-9.jpg",
    ],
    designer: "Michel Ducaboy",
    type: "sofa",
    popularity: 47,
    isInCart:  false,
  },
  {
    id: 34,
    name: "Togo",
    amount: 4,
    year: 1989,
    cost: 4600,
    color: "orange",
    producer: "LIGNE ROSET",
    image: [
      "https://www.dropbox.com/s/grh03sob0wgdc3j/28152293_339850559849152_7621842920462614528_n.jpg?raw=1",
      "https://www.dropbox.com/s/z3izfi10709w1gg/27891603_300201123838951_704128139780947968_n.jpg?raw=1",
      "https://www.dropbox.com/s/ldmm3y1xl40scnu/27893786_186338475193237_6859693234256347136_n.jpg?raw=1",
    ],
    designer: "Michel Ducaboy",
    type: "sofa",
    popularity: 36,
    isInCart:  false,
  },
  {
    id: 35,
    name: "Wassily",
    amount: 2,
    year: 1961,
    cost: 2300,
    color: "leather",
    producer: "KNOLL",
    image: [
      "https://www.dropbox.com/s/m1q3072lcavrp9n/328999732_163634306463114_8288992693189577022_n.jpg?raw=1",
      "https://www.dropbox.com/s/ez9sa9la06fc6gg/330980134_1662791940832529_4381199918026516725_n.jpg?raw=1",
      "https://www.dropbox.com/s/6vmpcynxn8hub3c/330232578_170895865666735_9163075144169606804_n.jpg?raw=1",
    ],
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 332,
    isInCart:  false,
  },
  {
    id: 36,
    name: "Hammer",
    amount: 4,
    year: 1964,
    cost: 540,
    color: "brown",
    producer: "FRITZ HANSEN",
    image: [
      "https://www.dropbox.com/s/qugzl35fa30c436/153580710_173461001031777_8998960847421713863_n.jpg?raw=1",
      "https://www.dropbox.com/s/87rdvbjywcn2vjt/154149771_250045853270087_5801351057922375416_n.jpg?raw=1",
      "https://www.dropbox.com/s/l95yryltcboyix9/154180329_3637004133092850_5871861297821453093_n.jpg?raw=1",
      "https://www.dropbox.com/s/5gf0vqqe9ls8cog/150780611_580161812961400_1717451351092552256_n.jpg?raw=1",
      "https://www.dropbox.com/s/jfnf8i1jd87k0un/154511767_901432973938577_6591100472971158503_n.jpg?raw=1",
      "https://www.dropbox.com/s/jfzj7nhb8uqa49a/154856311_265069648323523_8288460663755511316_n.jpg?raw=1",
      "https://www.dropbox.com/s/52al98awesqp8oa/153519841_248280656960383_529526766181453820_n.jpg?raw=1",
      "https://www.dropbox.com/s/ha48i9wwsq9c52j/152841969_285090913133871_8359586301942973155_n.jpg?raw=1",
    ],
    designer: "Arne Jacobsen",
    type: "chair",
    popularity: 376,
    isInCart:  false,
  },
 ]

 if (localStorage.getItem("products") === null) {
  localStorage.setItem('products', JSON.stringify(products))
}
 

