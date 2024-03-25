const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공을 위한 디렉토리 설정
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/mainpage.html');
});

// '/new-protocol.html' 경로에 대한 GET 요청을 처리합니다.
// 이는 'New Protocol' 버튼을 클릭했을 때의 페이지입니다.
app.get('/protocol_setting.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'protocol_setting.html'));
});

app.listen(port, () => {
  console.log(`Training page is running at http://localhost:${port}`);
});



