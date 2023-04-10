let starter = [
    {
        id: 0,
        image : "images/jabirHayyan.jpg",
        // image : 'url("images/IbneAlHatham.jpg")',
        name: "Jabir Bin Hayan",
        proffesion: "Author,Alchemist,physician,Astronomer,philospher",
        content: "Abū Mūsā Jābir ibn Ḥayyān, died c. 806-816, is the purported author of an enormous number and variety of works in Arabic, often called the Jabirian corpus. The works that survive today mainly deal with alchemy and chemistry, magic, and Shi'ite religious philosophy. ",
    },
{
    id: 1,
    image :"images/AlHaitham.jpg",
    // image :'url("images/IbneAlHatham.jpg")',
    name: "Ibne al Hathaim",
    proffesion: "Physician,Astronomy,Mathematics",
    content: "Ḥasan Ibn al-Haytham was a medieval mathematician, astronomer, and physicist of the Islamic Golden Age from present-day Iraq. Referred to as 'the father of modern optics', he made significant contributions to the principles of optics and visual perception in particular",
},
{
    id: 2,
    image : "images/IbneSina.jpg",
    name: "Ibne Sina",
    proffesion: " Medicine; Aromatherapy",
    content: "Ibn Sina, commonly known in the West as Avicenna, was a polymath who is regarded as one of the most significant physicians, astronomers, philosophers, and writers of the Islamic Golden Age, and the father of early modern medicine.He created a complete philosophical system in the Arabic language",
},
{
    id: 3,
    image : "images/AbbasIbneFinnas.jpg",
    name: " Abbas ibn Firnas",
    proffesion: "	Astronomy, engineering, medicine, invention",
    content: "Abu al-Qasim Abbas ibn Firnas ibn Wirdas al-Takurini, also known as Abbas ibn Firnas, Latinized Armen Firman, was a Berber Andalusian polymath: an inventor, astronomer, physicist, chemist, mathematician engineer, Andalusi musician, and Arabic-language poet. He was reported to have experimented with a form of flight",
},
{
    id: 4,
    image : 'images/AliMoustafaMosharafa.jpg',
    name: "Dr. Ali Moustafa Mosharafa",
    proffesion: "Physics",
    content: "Dr. Ali Moustafa Mosharafa was an Egyptian theoretical physicist. He was professor of applied mathematics in the Faculty of Science at Cairo University, and also served as its first dean. He contributed to the development of the quantum theory as well as the theory of relativity.",
},
{
    id: 5,
    
    image : 'images/hassan-kamel-al-Sabbbah.jpg',
        name: "Hassan Kamel Al-Sabbah",
        proffesion: "Mathematician & Engenieer",
        content: "Hassan Kamel Al-Sabbah was a Lebanese electrical and electronics research engineer, mathematician and inventor. He was born in Nabatieh, Lebanon.The Lebanese engineer Hassan Kamel Assabbah's dream was to build sun-powered cells in the Arabian desert; the main ingredients for solar power are sand (making solar cells) and strong sun (powering it).",
    },
    {
        id: 6,
        image : 'images/SmiaMemni.jpg',
        name: "Samia Abdel Rahim Maimani ",
        proffesion: "Proffesor,Inventor,NeuroSurgeon,Physician",
        content: "Samia Abdel Rahim Maimani (1955 - 20 October 1997) was a Saudi university professor, inventor, physician, and neurosurgeon. She was an alumna of King Faisal University College of Medicine and Charles R. Drew University of Medicine and Science. She was the first Saudi woman to specialize in neurosurgery. She obtained patents in several medical fields.Maimani was born in Saudi Arabia. Her father, Abd al-Rahim Maimani, had an accident that broke his skull, killing him on the spot.",
    },
    {
        id: 7,
        image : 'images/Alkhawarzmi.webp',
        name: "Muḥammad-ibn-Mūsā-al-Khwārizmī",
        proffesion: "Mathematics, astronomy, geography",
        content: "Muḥammad ibn Mūsā al-Khwārizmī, or al-Khwarizmi, was a Persian polymath from Khwarazm, who produced vastly influential works in mathematics, astronomy, and geography. Around 820 CE, he was appointed as the astronomer and head of the library of the House of Wisdom in Baghdad.",
    },
    {
        id: 8,
        image : 'images/Prof_Gamal_Hamdan.jpg',
        name: "Gamal Hamdan",
        proffesion: "Egyptian Scholar",
        content: "Gamal Hamdan was an Egyptian scholar and geographer. Among his most prominent books are The Character of Egypt, Studies of the Arab World, and The Contemporary Islamic World Geography, which form a trilogy on Egypt's natural, economic, political, and cultural character and its position in the world.",
    },
    {
        id: 9,
        image : 'images/sumeraMousa.jpg',
                name: "Sameera Moussa",
                proffesion: "	Nuclear Physics",
                content: "Sameera Moussa  (March 3, 1917 - August 5, 1952) was the first female Egyptian nuclear physicist.[1] Sameera held a doctorate in atomic radiation. She hoped her work would one day lead to affordable medical treatments and the peaceful use of atomic energy. She organized the Atomic Energy for Peace Conference and sponsored a call that set an international conference under the banner 'Atoms for Peace'. She was the first woman to work at Cairo University.",
            },
        ]



//slect element from html.document
// let body = document.getElementsByTagName('body')
// var i = body[0].style.backgroundImage = "url(./'images/jabirBinHayan.jpg')"
// console.log(body[0].style.backgroundImage = "url('images/jabirBinHayan.jpg')")

let images = document.querySelector('.image01')


// console.log(images)

let name = document.querySelector('.person')

// console.log(name.textContent)

let profession = document.querySelector('.profession')

// console.log(profession.textContent)

let content = document.querySelector('.content')

// console.log(content.textContent)

//selecting button from html.document
let leftBtn = document.querySelector('.left')
// console.log(leftBtn)

let rightBtn = document.querySelector('.right')
// console.log(rightBtn)

let randomBtn = document.querySelector('.click')
// console.log(randomBtn)

//initialized value
let clicks = 0;

// let item = starter[9].name;
// console.log(item)
// console.log(starter[0].id)

// for(s = 0 ;s < starter.length; s++){
//     document.write(starter[s].content)
//     console.log(starter[s])
// }
function showContect (add){
    let item = starter[add]
      images.src = item.image
      name.textContent = item.name
      profession.textContent = item.proffesion
      content.textContent = item.content
    //   console.log(item.image)

}
rightBtn.addEventListener('click', () => {
    clicks = ++clicks;
    // console.log(clicks)
    if (clicks < 0 || clicks > starter.length - 1) {
        clicks = 0;
    }
    // console.log(clicks)
  showContect(clicks)
})

leftBtn.addEventListener('click', () => {
    clicks = --clicks;
    // console.log(clicks)
    if (clicks < 0) {
        clicks = starter.length - 1;
    }
    // console.log(clicks)
    showContect(clicks)
})

randomBtn.addEventListener('click', () => {
   
    let random = Math.floor(Math.random() * starter.length)
    // console.log(random)
    showContect(random)
    
})
// console.log(images)
// // console.log(item)