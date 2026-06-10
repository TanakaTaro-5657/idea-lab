const scenes = {
  start: {
    text: "夜明け前、あなたは小さな実験室で目を覚ました。机の上には、まだ名前のないゲーム案が光っている。",
    choices: [
      { label: "ゲーム案に触れてみる", next: "touchIdea" },
      { label: "窓の外を確認する", next: "lookOutside" },
      { label: "青い設計図を開く", next: "blueprintEnding" },
      { label: "試作ロボットに話しかける", next: "robotEnding" },
      { label: "屋上のアンテナを調整する", next: "antennaEnding" },
    ],
  },
  touchIdea: {
    text: "光は小さな星になり、画面の中で跳ねた。『まずは動く形にしよう』という声が聞こえる。",
    choices: [
      { label: "最小版として保存する", next: "savePrototype" },
      { label: "もう少し観察する", next: "observe" },
    ],
  },
  lookOutside: {
    text: "窓の外では、朝日が街を淡く照らしている。今日も新しいアイデアを試すには十分な時間がありそうだ。",
    choices: [
      { label: "実験室に戻る", next: "touchIdea" },
      { label: "朝の空気を吸い込む", next: "freshStart" },
    ],
  },
  observe: {
    text: "星はノートに短い文章と二つの選択肢を描いた。これだけでも、小さな物語は始められる。",
    choices: [
      { label: "完成にする", next: "savePrototype" },
    ],
  },
  freshStart: {
    text: "胸の奥に、次のプロトタイプの種が灯った。実験はまだ始まったばかりだ。",
    choices: [
      { label: "最初から遊ぶ", next: "start", restart: true },
    ],
  },
  blueprintEnding: {
    text: "青い設計図には、まだ誰も見たことのない街づくりゲームの全体像が描かれていた。あなたは迷わず最初の区画を塗り、共同制作の未来へ踏み出した。エンディング：設計図の街。",
    choices: [
      { label: "最初から遊ぶ", next: "start", restart: true },
    ],
  },
  robotEnding: {
    text: "試作ロボットは小さくうなずき、あなたのゲーム案に効果音と拍手を足してくれた。実験室は一人ではない開発チームになった。エンディング：相棒ロボット。",
    choices: [
      { label: "最初から遊ぶ", next: "start", restart: true },
    ],
  },
  antennaEnding: {
    text: "屋上のアンテナが朝焼けを受けて光り、遠くのプレイヤーから感想が届き始めた。小さな実験は世界へ配信された。エンディング：夜明けの発信。",
    choices: [
      { label: "最初から遊ぶ", next: "start", restart: true },
    ],
  },
  savePrototype: {
    text: "あなたは最初のプロトタイプに『夜明け前の実験室』と名付けた。idea-lab の一つ目の実験は成功だ。",
    choices: [
      { label: "最初から遊ぶ", next: "start", restart: true },
    ],
  },
};

const storyText = document.querySelector("#story-text");
const choices = document.querySelector("#choices");

function renderScene(sceneId) {
  const scene = scenes[sceneId];

  storyText.textContent = scene.text;
  choices.innerHTML = "";

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = choice.restart ? "choice-button restart" : "choice-button";
    button.textContent = choice.label;
    button.addEventListener("click", () => renderScene(choice.next));
    choices.appendChild(button);
  });
}

renderScene("start");
