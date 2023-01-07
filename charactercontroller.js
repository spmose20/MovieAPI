import Router from "express";

const characters = [

  {
  Name: "Tintin",
  img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTintin_%2528character%2529&psig=AOvVaw1n4EnXAb6o5o9eZii47_JD&ust=1673044516229000&source=images&cd=vfe&ved=0CA8QjhxqFwoTCKCsrNO-sfwCFQAAAAAdAAAAABAE"
  },

  {
  Name: "Captain Haddock" ,
  img: "https://cdn001.tintin.com/public/tintin/img/static/captain-haddock/captain-haddock_v2.jpg"
  },

  {
  Name: "Snowy",
  img: "https://cdn001.tintin.com/public/tintin/img/static/snowy/milou_v3.png"
  },

  {
  Name: "Bianca Castafiore",
  img: "https://cdn001.tintin.com/public/tintin/img/static/bianca-castafiore/castafiore.png"
  },

  {
  Name: "Professor Calculus",
  img: "https://cdn001.tintin.com/public/tintin/img/static/professor-calculus/tournesol-calculus.jpg"
  },

  {
  Name: "Roberto Rastapopoulos",
  img: "https://cdn001.tintin.com/public/tintin/img/static/rastapopoulos/roberto-rastapopoulos.png"
  },

  {
  Name: "General Alcazar",
  img: "https://cdn001.tintin.com/public/tintin/img/static/general-alcazar/alcazar.png"
  },

 {
  Name: "Doctor Muller",
  img: "https://cdn001.tintin.com/public/tintin/img/static/doctor-muller/muller.png"
 },

 {
  Name: "Jolyon Wagg",
  img: "https://cdn001.tintin.com/public/tintin/img/static/jolyon-wagg/lampion.png"
 },

 {
  Name: "The Thompsons",
  img: "https://cdn001.tintin.com/public/tintin/img/static/thomson-and-thompson/dupondt.jpg"
 }
]

const router = Router();


router.get("/", (req, res) => {

  res.status(200).send(characters)
})

router.get("/:id", (req, res) => {

  const id = Number(req.params.id)

  res.status(201).send({

    character: characters[id] || "character does not exist"

  })
})

router.post("/", (req, res) => {

  characters.push(req.body.student)

  res.status(201).send({

    message:"character added"

  })
})


export default router;