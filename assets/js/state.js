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
      imageUrl:"https://private-user-images.githubusercontent.com/142230249/502802361-1047f4cf-2718-44b7-b6ed-995fa41f04de.webp?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA3NTA0ODAsIm5iZiI6MTc2MDc1MDE4MCwicGF0aCI6Ii8xNDIyMzAyNDkvNTAyODAyMzYxLTEwNDdmNGNmLTI3MTgtNDRiNy1iNmVkLTk5NWZhNDFmMDRkZS53ZWJwP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTAxOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTEwMThUMDExNjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NDlmZWU4OTNmZjE2YWNmMThhMjY2Zjk1OGYzN2E1ZjIxNDM4NDUzODY0YjFlNWJmOGM4MmUyNWI5NTM0NTFlNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.nZ1ntmaIKbuNgxkqze8dR72hWpj5f6Yly_dKW8hRoU8",
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

