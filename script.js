var randomDataCells = document.getElementsByClassName('randomDataCell');

// 定义一个函数生成随机数据
function generateRandomData() {
return Math.floor(Math.random() * 100); // 生成一个 0 到 99 之间的随机数
}

// 遍历数组，为每个单元格插入随机数据
for (var i = 0; i < randomDataCells.length; i++) {
randomDataCells[i].textContent = generateRandomData();
}






// 初次加载显示结果
showRandomResult();
// 定时刷新结果（例如，每隔5秒刷新一次）
setInterval(showRandomResult, 5000);
