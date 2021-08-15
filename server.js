let express = require("express")
let server = express() //1. ek naya server bnade sirf server bnaya use chalu nhi kra
let data = require("./data.json") //4/ ye data json file se ayga aur agr hume data get krna h to simply likhnge res.json in 11 line

server.get("/movies",function(req,res){ //3. server tu get kr (mtlb) tu le msg client se aur function le request and response ka or fir response send krde in line 11 . ye 11th line wala data jo ki abhi string form m h
    
    
    res.json(data)
})
// 4 task is hm jb request mare to jo data.json file h usme se se saare genre nikale aur use print kra le
server.get("/genre",function(req,res){
let allGenreObject = data.map((el)=>{
    return el.genre
})
let uniqueGenreObject = []
for(let i = 0;i<allGenreObject.length;i++){
    let genreId = allGenreObject[i]["_id"]
    let index = uniqueGenreObject.findIndex(function(el){
        return el._id == genreId
    })
    if(index == -1){
        uniqueGenreObject.push(allGenreObject[i])
    }
}

    res.json(uniqueGenreObject)
    
})
server.listen(4000) //2.messages le use sunna shuru kr de