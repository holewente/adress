const szemelyek=[
    {
        id: 1,
        name: "Don John",
        number: "12-322-622",
        adress: "don_john@ymail.com",
    },
    {
        id: 2,
        name: "Elizabeth Westland",
        number: "06-112-312",
        adress: "e47w@outlook.com",
    },
    {
        id: 3,
        name: "John Smith",
        number: "10-345-678",
        adress: "johnamith@gmail.com"
    }
]
console.log(szemelyek)
if(!localStorage.getItem('szemelyek')){
    localStorage['szemelyek']=JSON.stringify(szemelyek)
}
let kapcsolatok=JSON.parse(localStorage.getItem('szemelyek'))
function show(){
    document.querySelector(".megjelenites").innerHTML=""
    for(let obj of kapcsolatok){
        //console.log(obj)
        document.querySelector('.megjelenites').innerHTML+=`
        <div class="border-left elem${obj.name}">
                <li id="${obj.id}" onclick="mutat(this)">${obj.name} <i class="fa-solid kuka btn fa-trash-can" onclick="torol(this)"></i></li>
        </div>
        `
    }
}
show()

function mutat(obj){
    console.log(obj.id)

}
function hozzaad(){
    let n=document.getElementById('nev').value
    let sz=document.getElementById('tel').value
    let c=document.getElementById('email').value
    if(n=="" || sz=="" || c==""){
        alert("Adatok kitöltése kötelező!")
        
    }
    else{
    let newContact={}
    newContact.id=kapcsolatok.length+1
    newContact.name=n
    newContact.number=sz
    newContact.adress=c
    kapcsolatok.push(newContact)
    console.log(kapcsolatok)
    localStorage['szemelyek']=JSON.stringify(kapcsolatok)
    show()
    }
}

function torol(obj){
    console.log(obj.parentElement.id)
    let id=obj.parentElement.id
    //console.log(id)
    let newArr=kapcsolatok.filter(obj=>id != obj.id)
    kapcsolatok=newArr
    localStorage['szemelyek']=JSON.stringify(kapcsolatok)
    //document.querySelector('li').innerHTML=""
    show()
}
function del(){
    document.querySelector('.megjelenites').innerHTML=""
    localStorage.clear()
    show()
}
function checkemail(obj){
    console.log(obj.value)
    if(!obj.value.includes('@')){
        alert("Helytelen email cím!")
        obj.value=""
    }
}
