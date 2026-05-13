const scenes = {
  start: {
    text: "夜明け前、あなたは小さな実験室で目を覚ました。机の上には、まだ名前のないゲーム案が光っている。",
    choices: [
      { label: "ゲーム案に触れてみる", next: "touchIdea" },
      { label: "窓の外を確認する", next: "lookOutside" },
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
