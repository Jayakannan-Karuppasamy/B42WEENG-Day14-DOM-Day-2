const h1Element = document.createElement("h1");
h1Element.setAttribute("id", "title");
h1Element.innerText = "FORM DOM ";

const pElement = document.createElement("p");
pElement.setAttribute("id", "description");
pElement.innerText = "DOM manipulation with form";

// Lable Start
const fnameLabelElement = document.createElement("lable");
fnameLabelElement.setAttribute("id", "first-name");
fnameLabelElement.setAttribute("for", "first-name");
fnameLabelElement.innerText = "First Name";

const emailLabelElement = document.createElement("lable");
emailLabelElement.setAttribute("id", "email");
emailLabelElement.setAttribute("for", "email");
emailLabelElement.innerText = "Email";

const lnameLabelElement = document.createElement("lable");
lnameLabelElement.setAttribute("id", "last-name");
lnameLabelElement.setAttribute("for", "lname");
lnameLabelElement.innerText = "Last Name";

const addressLabelElement = document.createElement("lable");
addressLabelElement.setAttribute("id", "address");
addressLabelElement.setAttribute("for", "address");
addressLabelElement.innerText = "Address";

const pincodeLabelElement = document.createElement("lable");
pincodeLabelElement.setAttribute("id", "pincode");
pincodeLabelElement.setAttribute("for", "pincode");
pincodeLabelElement.innerText = "Pincode";

const genderLabelElement = document.createElement("lable");
genderLabelElement.setAttribute("id", "gender");
genderLabelElement.setAttribute("for", "gender");
genderLabelElement.innerText = "Gender";

const genderMaleLblElement = document.createElement("lable");
genderMaleLblElement.setAttribute("id", "gender");
genderMaleLblElement.setAttribute("for", "gender");
genderMaleLblElement.innerText = "Male";

const genderFMaleLblElement = document.createElement("lable");
genderFMaleLblElement.setAttribute("id", "gender");
genderFMaleLblElement.setAttribute("for", "gender");
genderFMaleLblElement.innerText = "Female";

//Choice of food 
const choiceFoodlblElement = document.createElement("lable");
choiceFoodlblElement.setAttribute("id", "choiceOfFood");
choiceFoodlblElement.setAttribute("for", "choiceOfFood");
choiceFoodlblElement.innerText = "Choice of food";

const foodIdilylblElement = document.createElement("lable");
foodIdilylblElement.setAttribute("id", "choiceOfFood");
foodIdilylblElement.setAttribute("for", "choiceOfFood");
foodIdilylblElement.innerText = "Idily";


const DosalblElement = document.createElement("lable");
DosalblElement.setAttribute("id", "choiceOfFood");
DosalblElement.setAttribute("for", "choiceOfFood");
DosalblElement.innerText = "Dosa";

const SapathilblElement = document.createElement("lable");
SapathilblElement.setAttribute("id", "choiceOfFood");
SapathilblElement.setAttribute("for", "choiceOfFood");
SapathilblElement.innerText = "Sapathi";

const PoorilblElement = document.createElement("lable");
PoorilblElement.setAttribute("id", "choiceOfFood");
PoorilblElement.setAttribute("for", "choiceOfFood");
PoorilblElement.innerText = "Poori";

const PongallblElement = document.createElement("lable");
PongallblElement.setAttribute("id", "choiceOfFood");
PongallblElement.setAttribute("for", "choiceOfFood");
PongallblElement.innerText = "Pongal";

const statelblElement = document.createElement("lable");
statelblElement.setAttribute("id", "state");
statelblElement.setAttribute("for", "state");
statelblElement.innerText = "State";

const countrylblElement = document.createElement("lable");
countrylblElement.setAttribute("id", "country");
countrylblElement.setAttribute("for", "country");
countrylblElement.innerText = "Pongal";
// Label end 

// Field start
const fnameElement = document.createElement("input");
fnameElement.setAttribute("type", "text");
fnameElement.setAttribute("id", "first-name");
fnameElement.setAttribute("name", "name");
fnameElement.required = true;
fnameElement.setAttribute("value", "firstname");
fnameElement.setAttribute("placeholder", "first name");

const emailElement = document.createElement("input");
emailElement.setAttribute("type", "email");
emailElement.setAttribute("id", "email");
emailElement.setAttribute("name", "email");
emailElement.setAttribute("required", true);
emailElement.setAttribute("value", "jkannan98471@gmail.com");
emailElement.setAttribute("placeholder", "sample@gmail.com");

const lnameElement = document.createElement("input");
lnameElement.setAttribute("type", "text");
lnameElement.setAttribute("id", "last-name");
lnameElement.setAttribute("name", "lname");
lnameElement.setAttribute("required", true);
lnameElement.setAttribute("placeholder", "last name");
lnameElement.setAttribute("value", "last name");

const addressElement = document.createElement("textarea");
addressElement.setAttribute("id", "address");
addressElement.setAttribute("name", "address");
addressElement.setAttribute("placeholder", "TEXTAREA");
addressElement.setAttribute("value", "address location");

const pincodeElement = document.createElement("input");
pincodeElement.setAttribute("type", "pincode");
pincodeElement.setAttribute("id", "pincode");
pincodeElement.setAttribute("name", "pincode");
pincodeElement.setAttribute("required", true);
pincodeElement.setAttribute("placeholder", "pincode");
pincodeElement.setAttribute("value", "625017");

const genderMaleElement = document.createElement("input");
genderMaleElement.setAttribute("type", "radio");
genderMaleElement.setAttribute("id", "gender");
genderMaleElement.setAttribute("name", "gender");
genderMaleElement.setAttribute("value", "Male");
genderMaleElement.innerText = "Male";

const genderFemaleElement = document.createElement("input");
genderFemaleElement.setAttribute("type", "radio");
genderFemaleElement.setAttribute("id", "gender");
genderFemaleElement.setAttribute("name", "gender");
genderFemaleElement.setAttribute("value", "Female");
genderFemaleElement.innerText = "Female";

const choiceFoodElement1 = document.createElement("input");
choiceFoodElement1.setAttribute("type", "checkbox");
choiceFoodElement1.setAttribute("id", "choiceOfFood");
choiceFoodElement1.setAttribute("name", "choiceOfFood");
choiceFoodElement1.setAttribute("value", "Idily");

const choiceFoodElement2 = document.createElement("input");
choiceFoodElement2.setAttribute("type", "checkbox");
choiceFoodElement2.setAttribute("id", "choiceOfFood");
choiceFoodElement2.setAttribute("name", "choiceOfFood");
choiceFoodElement2.setAttribute("value", "Dosa");

const choiceFoodElement3 = document.createElement("input");
choiceFoodElement3.setAttribute("type", "checkbox");
choiceFoodElement3.setAttribute("id", "choiceOfFood");
choiceFoodElement3.setAttribute("name", "choiceOfFood");
choiceFoodElement3.setAttribute("value", "Sapathi");

const choiceFoodElement4 = document.createElement("input");
choiceFoodElement4.setAttribute("type", "checkbox");
choiceFoodElement4.setAttribute("id", "choiceOfFood");
choiceFoodElement4.setAttribute("name", "choiceOfFood");
choiceFoodElement4.setAttribute("value", "Poori");

const choiceFoodElement5 = document.createElement("input");
choiceFoodElement5.setAttribute("type", "checkbox");
choiceFoodElement5.setAttribute("id", "choiceOfFood");
choiceFoodElement5.setAttribute("name", "choiceOfFood");
choiceFoodElement5.setAttribute("value", "Pangal");

const stateElement = document.createElement("input");
stateElement.setAttribute("type", "text");
stateElement.setAttribute("id", "state");
stateElement.setAttribute("name", "state");
stateElement.required = true;
stateElement.setAttribute("placeholder", "state");

const countryElement = document.createElement("input");
countryElement.setAttribute("type", "text");
countryElement.setAttribute("id", "country");
countryElement.setAttribute("name", "country");
countryElement.required = true;
countryElement.setAttribute("placeholder", "country");

// Field end  
const divForm = document.createElement("div");
divForm.setAttribute("class", "form-group");

const formElement = document.createElement("form");
formElement.setAttribute("id", "form");

const submitBtn = document.createElement("button");
submitBtn.setAttribute("id", "submit");
submitBtn.setAttribute("value", "submit");
submitBtn.classList.add("btn");
submitBtn.classList.add("btn-primary");
submitBtn.innerText = "SUBMIT";

formElement.append(fnameLabelElement, fnameElement, emailLabelElement, emailElement,
    lnameLabelElement, lnameElement, addressLabelElement,
    addressElement, pincodeLabelElement, pincodeElement, genderLabelElement,
    genderMaleElement, genderMaleLblElement, genderFemaleElement, genderFMaleLblElement, choiceFoodlblElement,
    foodIdilylblElement, choiceFoodElement1, DosalblElement, choiceFoodElement2, SapathilblElement,
    choiceFoodElement3, PoorilblElement, choiceFoodElement4, PongallblElement, choiceFoodElement5,
    statelblElement, stateElement, countrylblElement, countryElement, submitBtn);

divForm.append(formElement);


const output_table = document.createElement("table");
output_table.setAttribute("class", "table");
output_table.style.border = "1px solid";

const theadElement = document.createElement("thead");

const trElement = document.createElement("tr");
theadElement.append(trElement);

//
const thFNameElement = document.createElement("th");
thFNameElement.innerText = "First Name";

const thEmailElement = document.createElement("th");
thEmailElement.innerText = "Email";

const thLNameElement = document.createElement("th");
thLNameElement.innerText = "Last Name";

const thAddressElement = document.createElement("th");
thAddressElement.innerText = "Address";

const thPincodeElement = document.createElement("th");
thPincodeElement.innerText = "Pincode";

const thGenderElement = document.createElement("th");
thGenderElement.innerText = "Gender";

const thFoodElement = document.createElement("th");
thFoodElement.innerText = "Food";

const thStateElement = document.createElement("th");
thStateElement.innerText = "State";

const thCountryElement = document.createElement("th");
thCountryElement.innerText = "Country";

trElement.append(thFNameElement, thEmailElement, thLNameElement, thAddressElement, thPincodeElement, thGenderElement, thFoodElement, thStateElement, thCountryElement);

output_table.appendChild(theadElement);

const tbodyElement = document.createElement("tbody");
output_table.appendChild(tbodyElement);



divForm.append(formElement, output_table);
//formElement.append(fnameElement, lnameElement, addressElement, pincodeElement, genderMaleElement, genderFemaleElement);


document.body.append(h1Element, pElement, divForm);