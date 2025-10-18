(function(){
  const DEFAULT_DATA = [];
  const dataUrl = window.__JOMON_DATA_URL__ || "";

  let artifacts = DEFAULT_DATA.slice();
  let readyResolve;
  let loadError = null;

  const ready = new Promise((resolve) => {
    readyResolve = resolve;
  });

  async function loadArtifacts(){
    if(!dataUrl){
      console.warn("JomonQuiz: __JOMON_DATA_URL__ が設定されていないため、問題データは空のままです。");
      readyResolve({artifacts, error: loadError});
      return;
    }

    try{
      const res = await fetch(dataUrl, {cache: "no-store"});
      if(!res.ok){
        throw new Error(`HTTP ${res.status}`);
      }
      const json = await res.json();
      if(!Array.isArray(json)){
        throw new Error("invalid payload");
      }
      artifacts = json;
      loadError = null;
      readyResolve({artifacts, error: loadError});
    }catch(err){
      console.error("JomonQuiz: 問題データの取得に失敗しました", err);
      artifacts = DEFAULT_DATA.slice();
      loadError = err;
      readyResolve({artifacts, error: loadError});
    }
  }

  loadArtifacts();

  function ensureLoaded(){
    if(!artifacts){
      throw new Error("Artifacts are not loaded yet");
    }
    return artifacts;
  }

  window.JomonQuiz = {
    get ready(){ return ready; },
    get ARTIFACTS(){ return ensureLoaded(); },
    get loadError(){ return loadError; },
    getArtifact(id){ return ensureLoaded().find(a => a.id === id) || null; },
    all(){ return ensureLoaded().slice(); },
    isSolved(id){ return localStorage.getItem("jomon:solved:"+id) === "1"; },
    setSolved(id, v=true){ localStorage.setItem("jomon:solved:"+id, v ? "1":""); },
    clearAll(){ ensureLoaded().forEach(a => localStorage.removeItem("jomon:solved:"+a.id)); },
    solvedCount(){ return ensureLoaded().filter(a => window.JomonQuiz.isSolved(a.id)).length; },
    qs(sel, root=document){ return root.querySelector(sel); },
    qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); },
    param(name){ return new URLSearchParams(location.search).get(name); },
    potIMG({src, solved=false, alt="縄文土器"}) {
      const cls = solved ? "pot solved" : "pot unsolved";
      return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
    }
  };
})();
