// save user info when they submit, then redirect to profile.
const signUpForm = document.forms.SignUp;

signUpForm.addEventListener("submit", function(event) {
  // 1. stop the page from refreshing
  event.preventDefault();

  // 2. get the data out of the form
  const name = signUpForm.elements.name.value;
  const jobTitle = signUpForm.elements.jobTitle.value;

  // 3. use utility method to save user data
  saveUserToLocalStorage(name, jobTitle);

  // 4. send the user off to their profile page
  window.location.href = "/user/profile.html";
});

// utility method
function saveUserToLocalStorage(name, jobTitle) {
  const userJSON = {
    "name": name,
    "jobTitle": jobTitle
  };

  // 1. serialize the data
  const userStringified = JSON.stringify(userJSON);

  // 2. save the serialized data to localstorage
  localStorage.setItem("_cb_user", userStringified);
}
