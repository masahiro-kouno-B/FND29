'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

 
const switchKey = document.querySelectorAll('.switch-key');
const buzzSound = document.getElementById('buzzSound');

document.addEventListener('mousemove', (event) => {
    switchKey.forEach(switchKey => {
    const rect = switchKey.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
        Math.pow(event.clientX - centerX, 2) +
        Math.pow(event.clientY - centerY, 2)
    );

    const hoverDistance = 100; // 近づく距離

    if (distance < hoverDistance) {  // ここを修正：距離がhoverDistanceより小さい場合
        switchKey.classList.add('enlarged');
    } else {
        switchKey.classList.remove('enlarged');
    }
});

});
// / クリックイベントを追加
switchKey.forEach(key => {
    key.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトのリンク動作を防ぐ
        buzzSound.currentTime = 0; // 音を最初から再生
        buzzSound.play(); // 音を再生
        // リンク先に遷移する
        setTimeout(() => {
            window.location.href = key.href; // 音声再生後にリンク先に遷移
        }, 1800); // 音声の長さに応じて時間を調整
    });
});
