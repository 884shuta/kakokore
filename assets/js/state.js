(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "火焔型土器",
      site: "（サンプル）新潟県周辺の縄文遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/2.webp",
      description: "（サンプル）口縁部に炎のような装飾が見られる豪壮な土器。展示では造形のリズムと左右対称の美しさに注目してみましょう。",
      question: {
        text: "火焔型土器の特徴として最も適切なのはどれ？",
        choices: [
          "肩から口縁にかけて炎のような突起が巡る",
          "底が三脚になっていて自立しない",
          "表面に金箔が貼られている"
        ],
        correctIndex: 0
      }
    },
    {
      id: "2",
      name: "深鉢形土器",
      site: "（サンプル）東北地方の縄文遺跡",
      potColor: "#A6623A",
      imageUrl:"https://lh3.googleusercontent.com/pw/AP1GczO8FX0I4XxWp6Y8MhnHsBZTUIUbDBXjdD0FUNt5NV6ynQVsPJ4WBdIqqxEq1UtkK-9bbOtERTnLm4dJpZhYmWRttSl9VTVWa07wSUCbHATk2M24XzRgQubxo1iOtLMB6V-chdXVqs_kMbXMCWnubHruMnkzR9xDZlZvROCv2zcnl3iI9Lloq-y5BJUdbxJDhJsJZeh2LUU9grUZroAJ16leUFtIbKnTFXh1S3xRiCz9MmIO_bQcuCOZGgNPcZPbXigKHWeJiErTs-lJxFgNB5G2zHiyLKXeF6IPCyNwl5zUS24vdc8lyqCHWeBC4rsYcBf0SRxH9kJgmS2qwid08kWnaotBWpvelyUzJTSkg1T4GHbYZa2JaEW8vys26RjzlDiGQrWEgpGOHjVIZPUY_AGWwaYal0HJwt7Awa7-xbiK5M8xVQk9lY5AFfoqLvbnjXd_CvKIGWDwskEFtATrFYinlXOJgsQTcj2X2GVfBlBk02OR5SDSAmd_0b2lKa5_wWu_py07Jf-nwRboTw0dCS9kVoEf3D8wOYZCthrAyxSIWWStweKw7B_rSx_A4QvOTypQryWy9WDzRXppGdHbJVC-yjYJb0BCpCmxKiIMPTCYrUMu1a4RJ0lNOfGCNKoZosP1XPRsxt9mHEwPbY4xgd9cLHLrHwQqwjmlpUX_GPEFdd_JM2nEnhiTPTdmg2dmOCsf2iWMyhaefdDz0nukxSTQ8jkqwkN9ObufFOFGj47td9SnPD9CzLZysNvMf1H05LgeEKthUdy1F9dW2eibd_aet-_RRyt-9YUknwJobaJfIGVLpe1Vix5fKVTzaUhAQ3WMoiauGXvNSg9Na_i-ow5eqNwvRhJz4cBSrPHwL5tJPl18puBm89Igsoe4OKoSvTOFTpoh1kS9hL8XmRCOzr1HHZ-tjpk6y_a6d2fqDw1A0o5XLNfCOw=w1584-h2034-s-no?authuser=1s",
      description: "（サンプル）深い鉢形で、煮炊きに適したと考えられる土器。縄目文様のパターンや焼成の色ムラが見どころです。",
      question: {
        text: "深鉢形土器の“深い”形は主に何に向いていたと考えられる？",
        choices: [
          "長距離の運搬",
          "煮炊き・調理",
          "音を鳴らす楽器"
        ],
        correctIndex: 1
      }
    },
     {
      id: "3",
      name: "愛絆土器",
      site: "（サンプル）大分県内の大分市周辺",
      potColor: "#C0763A",
      imageUrl:"assets/img/3.webp",
      description: "（サンプル）ほかのものと比べて形が大きい。よく出土する場所はゲームセンター、カラオケ等。",
      question: {
        text: "愛絆土器の特徴として最も適切なのはどれ？",
        choices: [
          "五月蠅い",
          "太鼓の達人が得意",
          "ほかの土器と比べて大きい"
        ],
        correctIndex: 2
      }
    }
  ];

  // expose
 window.JomonQuiz = {
    ARTIFACTS,
    getArtifact(id){ return ARTIFACTS.find(a => a.id === id) || null; },
    all(){ return ARTIFACTS.slice(); },
    isSolved(id){ return localStorage.getItem("jomon:solved:"+id) === "1"; },
    setSolved(id, v=true){ localStorage.setItem("jomon:solved:"+id, v ? "1":""); },
    clearAll(){ ARTIFACTS.forEach(a => localStorage.removeItem("jomon:solved:"+a.id)); },
    //solvedCount(){ return ARTIFACTS.filter(a => this.isSolved(a.id)).length; },
    solvedCount(){ return ARTIFACTS.filter(a => window.JomonQuiz.isSolved(a.id)).length; },
    // tiny util
    qs(sel, root=document){ return root.querySelector(sel); },
    qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); },
    param(name){ return new URLSearchParams(location.search).get(name); },
    potIMG({src, solved=false, alt="縄文土器"}) {
      const cls = solved ? "pot solved" : "pot unsolved";
      return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
    }
  };
})();

