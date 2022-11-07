// const Lesson = require("../models/lesson");
// const AdminDictionary = require("../models/AdminDictionary")
// const youtubeThumbnail = require('youtube-thumbnail');
// module.exports = {
//   getAllLessons: async (req, res) => {
//     try {
//       const lessons = await Lesson.find()
//       res.json(lessons)
//     } catch (err) {
//       console.log(err);
//     }

//   },
//   getOneLesson: async (req, res) => {
//     let id = req.params.id
//     console.log(id)
//     try {
//       const lesson = await Lesson.find({_id:id})
//       if(lesson.length == 0) res.status(404).send({message:'no lesson found'})
//       res.json(lesson)
     
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   postYoutubeLesson: async (req, res) => {

//       try {

// let url = req.body.youtubeLink;
// console.log(url)
// let poster = req.body.poster;
// let data = youtubeThumbnail(url);
// let thumbnail = data.high.url;

//         await Lesson.create({
//           title: req.body.title,
//           url:url,
//           subtitles: req.body.subtitles,
//           thumbnail:thumbnail,
//           poster:poster
        
//         });
//         res.send('youtube lesson added!')
//       } catch (err) {
//         console.log(err);
//       }
    
//   },
//   editLesson: async (req, res) => {
//     if(!req.body){
//       return res
//       .status(400)
//       .send({message: 'nothing to update'})
//     }
//       let id = req.params.id
//       let title = req.body.title
//       let url = req.body.url
//       let subtitles = req.body.subtitles
//       let poster = req.body.poster
//       let lesson = new Lesson({
//         title: title,
//         url:url,
//         subtitles:subtitles,
//         poster:poster
//        })
//        Lesson.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
//          .then(data =>{
//           if(!data){
//             res.status(404).send({message: 'cannot update'})
//           } else{
//             res.send('a lesson has been updated')
//           }
//          })
//          .catch(err =>{
//           res.status(500).send({message:'error update lesson info'})
//          })
//   },
//   deleteLesson: async (req, res) => {

//       const id = req.params.id
//       Lesson.findByIdAndDelete(id, err =>{
//         if(err) return console.log(err)
//         res.send('the lesson was deleted')
       
//        })
 
  
//   },
//   getWords: async (req, res) => {
//     try {
//       const words = await AdminDictionary.find().sort({level:1})
//       res.json(words)
//     } catch (err) {
//       console.log(err);
//     }

//   },
//   postWords: async (req, res) => {
//     try {


//       let level = req.body.level
//       let words = req.body.words
      
//               await AdminDictionary.create({
//                level:level,
//                words:words
              
//               });
//               res.send('word added!')
//             } catch (err) {
//               console.log(err);
//             }
//   }

// }