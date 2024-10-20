import { Router } from 'express'
const router = Router()
import multer from 'multer'

// Налаштовуємо місце збереження файлів та їх імена
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage })

// альтернатива - без задання правил для імен
// const upload = multer({ dest: 'uploads' })

router.post('/data', upload.single('uFile'), (req, res) => {
  console.log(req.body.uFile)
  console.log(req.body.uName)
  console.log(req.body.uAge)
  res.send(`Welcome ${req.body.uName}, you are ${req.body.uAge}`)
})

router.get('/data', (req, res) => {
  console.log(req.query.uName)
  console.log(req.query.uAge)
  res.send(`Welcome ${req.query.uName}, you are ${req.query.uAge}`)
})

router.get('/add', (req, res) => {
  res.render('add_user_form')
})

export default router
