// script.js

// キャラクターデータの配列
const characters = [
    {
        name: "デデデ大王",
        image: "https://www.smashbros.com/assets_v2/img/fighter/dedede/main2.png",
        description: "星のカービィシリーズより参戦！"
    },
    {
        name: "キングクルール",
        image: "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png",
        description: "ドンキーコングシリーズより参戦！"
    },
    // ここに他のキャラクターデータを追加できます
    {
        name: "マリオ",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
        description: "スーパーマリオシリーズの主人公！"
    },
    {
        name: "リンク",
        image: "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
        description: "ゼルダの伝説シリーズの勇者！"
    }
];

// カードを表示するコンテナ要素を取得
const cardListContainer = document.getElementById('card-list-container');

// キャラクターデータに基づいてカードを生成し、コンテナに追加する関数
function createCharacterCards() {
    characters.forEach(character => {
        // カードのHTML要素を作成
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container'); // CSSクラスを追加

        const img = document.createElement('img');
        img.classList.add('card-image'); // CSSクラスを追加
        img.src = character.image;
        img.alt = character.name; // altテキストを設定

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('character-name'); // CSSクラスを追加
        nameDiv.textContent = character.name;

        const descDiv = document.createElement('div');
        descDiv.classList.add('card-description'); // CSSクラスを追加
        descDiv.textContent = character.description;

        // 作成した要素をカードコンテナに追加
        cardContainer.appendChild(img);
        cardContainer.appendChild(nameDiv);
        cardContainer.appendChild(descDiv);

        // カードコンテナをメインのリストコンテナに追加
        cardListContainer.appendChild(cardContainer);
    });
}

// ページが完全に読み込まれた後にカード生成関数を実行
document.addEventListener('DOMContentLoaded', createCharacterCards);
