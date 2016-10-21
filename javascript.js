// プレーヤーを埋め込む場所
var ytArea = 'sample';
 
// 埋め込むYouTube ID
var ytID = 'aIeXZ5sHDrc';
 
// プレーヤーのサイズを指定
var ytWidth = 640;
var ytHeight = 390;
 
// API読み込み後にプレーヤー埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
        height: ytHeight,
        width: ytWidth,
        videoId: ytID
    });
}
