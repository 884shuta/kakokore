(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "火焔型土器",
      site: "（サンプル）新潟県周辺の縄文遺跡",
      potColor: "#f80aa5ff",
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
      potColor: "#d0ff00ff",
      imageUrl:"assets/img/kaen.webp",
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
      potColor: "#2d00f5ff",
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
    getArtifact(id){ return ARTIFACTS.find(a => a.id === id) || null; },//IDに対応する土器オブジェクトを返す
    // all(){ return ARTIFACTS.slice(); },//全土器オブジェクトの配列を返す
    isSolved(id){ return localStorage.getItem("jomon:solved:"+id) === "1"; },//IDに対応する土器が解答済みかどうかを返す
    setSolved(id, v=true){ localStorage.setItem("jomon:solved:"+id, v ? "1":""); },//IDに対応する土器の解答済み状態を設定する
    clearAll(){ ARTIFACTS.forEach(a => localStorage.removeItem("jomon:solved:"+a.id)); },//全土器の解答済み状態をクリアする
    solvedCount(){ return ARTIFACTS.filter(a => window.JomonQuiz.isSolved(a.id)).length; },//解答済みの土器の数を返す
    qs(sel, root=document){ return root.querySelector(sel); },//セレクタに対応する最初の要素を返す
    qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); },//セレクタに対応するすべての要素を配列で返す
    param(name){ return new URLSearchParams(location.search).get(name); },//URLクエリパラメータの値を返す
    potIMG({src, solved=false, alt="縄文土器"}) {//土器画像のHTMLを返す
      const cls = solved ? "pot solved" : "pot unsolved";
      return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
    }
  };
})();

