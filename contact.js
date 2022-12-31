

// FOR PREVIEW PANEl
document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState === "complete"){
        console.log("readystate = complete");
        preview();
    }
});

const displayTitle = document.getElementById("displayTitle");
const bedClass= document.querySelector(".bed");
const tablesClass= document.querySelector(".table");
const chairsClass= document.querySelector(".chair");
const doorClass= document.querySelector(".door");
const dressingClass= document.querySelector(".dressing");
const kitchenClass= document.querySelector(".kitchen");
const inteiorClass= document.querySelector(".interiors");
const otherClass= document.querySelector(".other");
const bedsId = document.getElementById("bedsAndMasterbed");
const tableId =document.getElementById("tables");
const chairId =document.getElementById("chairAndStools");
const doorId = document.getElementById("doorsAndWindows");
const dressingId = document.getElementById("dressingTable");
const kitchenId = document.getElementById("kitchenModule");
const masterId = document.getElementById("masterbedRoom");
const otherId = document.getElementById("otherFurniture");

const helper = (v1,v2,v3,v4,v5,v6,v7,v8,v9) =>{
    displayTitle.style.display = v1;
    bedsId.style.display = v2;
    tableId.style.display = v3;
    chairId.style.display = v4;
    doorId.style.display = v5;
    dressingId.style.display = v6;
    kitchenId.style.display = v7;
    masterId.style.display = v8;
    otherId.style.display = v9;
} 

const preview = () =>{
    bedClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    tablesClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    chairsClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    doorClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    dressingClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    kitchenClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    inteiorClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
    otherClass.addEventListener("click",(event)=>{
        helper("none","none","none","none","none","none","none","none","none");
    });
   
}

// GETING QOUTE FROM JSON
/*  const reqData = async () =>{
	const respose = await fetch('./quote.json');
	const quoteData = await respose.json();
	
	console.log(quoteData);
 }

 reqData(); */
/*  console.log(data); */
//RAMDOM NUMBER
const number = Math.floor(Math.random() *10) +2;
const numberString = number.toString();
/* console.log(numberString);
console.log(typeof numberString); */
//QOUTE OBJECT
const qouteCollection ={
	q1:{
		author:"Steve Jobs",
		qoute:"Design is not just what it looks like and feels like. Design is how it works."
	},
	q2:{
		author:"Lorinda Mamo",
		qoute:"Every great design begins with an even better story."
	},
	q3:{
		author:" Albert Einstein (German physicist)",
		qoute:"A table, a chair, a bowl of fruit and a violin; what else does a man need to be happy?"
	},
	q4:{
		author:"Charles Shackleton (Master Craftsman)",
		qoute:"In 100 years time all the corners are rounded off, there are dents, dings. It is a souvenir of life and history."
	},
	q5:{
		author:"Frank Lloyd Wright",
		qoute:"Study nature, love nature, stay close to nature. It will never fail you."
	},
	q6:{
		author:"Ghost",
		qoute:"Keep Your Blood In, You’ll Need Every Drop."
	},
	q7:{
		author:"Soap",
		qoute:"Kids, Guns And Balloons... That’s A New One."
	},
	q8:{
		author:"Sun Tzu",
		qoute:"A leader leads by example not by force."
	},
	q9:{
		author:"Herbert Hoover",
		qoute:"Older men declare war. But it is the youth that must fight and die."
	},
	q10:{
		author:"Prem Ramchandani",
		qoute:"I regret I have but one life to give for my country."
	},
	q11:{
		author:"Captain Manoj Pandey",
		qoute:"If a death strikes before I prove my blood, I promise, I will kill death."
	}

}

//GETTING ELEMENT ID
const qouteMain = document.getElementById("qouteMain");
const qouteAuthor = document.getElementById("qouteAuther");
// MAKING QOUTE ID 
const qouteId = "q"+numberString;


switch (qouteId) {
	case "q1":
		qouteMain.innerHTML = qouteCollection.q1.qoute;
		qouteAuthor.innerHTML = qouteCollection.q1.author;
		console.log(qouteCollection.q1.author)
		break;
	case "q2":
		qouteMain.innerHTML = qouteCollection.q2.qoute;
		qouteAuthor.innerHTML = qouteCollection.q2.author;
		console.log(qouteCollection.q2.author)
		break;
	case "q3":
		qouteMain.innerHTML = qouteCollection.q3.qoute;
		qouteAuthor.innerHTML = qouteCollection.q3.author;
		console.log(qouteCollection.q3.author)
		break;
	case "q4":
		qouteMain.innerHTML = qouteCollection.q4.qoute;
		qouteAuthor.innerHTML = qouteCollection.q4.author;
		console.log(qouteCollection.q4.author)
		break;
	case "q5":
		qouteMain.innerHTML = qouteCollection.q5.qoute;
		qouteAuthor.innerHTML = qouteCollection.q5.author;
		console.log(qouteCollection.q5.author)
		break;
	case "q6":
		qouteMain.innerHTML = qouteCollection.q6.qoute;
		qouteAuthor.innerHTML = qouteCollection.q6.author;
		console.log(qouteCollection.q6.author)
		break;
	case "q7":
		qouteMain.innerHTML = qouteCollection.q7.qoute;
		qouteAuthor.innerHTML = qouteCollection.q7.author;
		console.log(qouteCollection.q7.author)
		break;
	case "q8":
		qouteMain.innerHTML = qouteCollection.q8.qoute;
		qouteAuthor.innerHTML = qouteCollection.q8.author;
		console.log(qouteCollection.q8.author)
		break;
	case "q9":
		qouteMain.innerHTML = qouteCollection.q9.qoute;
		qouteAuthor.innerHTML = qouteCollection.q9.author;
		console.log(qouteCollection.q9.author)
		break;
	case "q10":
		qouteMain.innerHTML = qouteCollection.q10.qoute;
		qouteAuthor.innerHTML = qouteCollection.q10.author;
		console.log(qouteCollection.q10.author)
		break;
	case "q11":
		qouteMain.innerHTML = qouteCollection.q11.qoute;
		qouteAuthor.innerHTML = qouteCollection.q11.author;
		console.log(qouteCollection.q11.author)
		break;

	default:
		console.log("😀")
		break;
}