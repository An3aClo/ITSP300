/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
var frameModule = require("ui/frame");
var ProfileViewModel = require("./Profile-view-model");

var profileViewModel = new ProfileViewModel();

function pageLoaded(args) {
  /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
  var page = args.object;


  page.bindingContext = profileViewModel;
}

function bmiButton(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./demo-bmi/demo-bmi-page");
}

function changePassButton(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./changePass/changePass-page");
}

function getDetails(){

  textName : 
  textSurname : 
  textEmail :
  textPhone :
  textIDNo : 
}

exports.pageLoaded = pageLoaded;
exports.bmiButton = bmiButton;
