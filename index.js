const express = require('express')
const app = express()
const port = 5000
//다운로드 받은 bodyParser 불러오기
const bodyParser = require('body-parser');
// 만들어 놓은 모델 가져오기
const {User} = require("./models/User");

// bodyParser에 옵션 주기
app.use(bodyParser.urlencoded({extended: true})); //<application/x-www-form-urlencoded> 이 형식의 데이터를 가져와서 분석할 수 있게 해 줌
app.use(bodyParser.json()); //<application/json> 형식의 데이터를 가져올 수 있게 함


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Minji:julie7864@coco.pfxwdsp.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요!')
})

//회원가입을 위한 route 작성
app.post('/register', (req, res) => { // post request를 했다. ==> postman에서 post로 설정
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body) // req,body로 유저 정보를 가져오는 것
  user.save((err, userInfo) => { // 정보들이 유저 모델에 저장됨
    if (err) return res.json({ sucecess: false, err}) // 만약 오류 나면 클라이언트에게 에러메세지 전달
    return res.status(200).json({ // status(200)은 성공했다는 의미
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})