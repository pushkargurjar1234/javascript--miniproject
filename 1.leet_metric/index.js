document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.querySelector('.search_btn');
    const usernameinput = document.querySelector(".user_input");
    const statcontainer = document.querySelector('.stats_container');
    const easyprogresscircle = document.querySelector(".easy_progress");
    const mediumprogresscircle = document.querySelector(".medium_progress");
    const hardprogresscircle = document.querySelector(".hard_progress");
    const easylabel = document.querySelector(".easy_label");
    const mediumlabel = document.querySelector(".medium_label");
    const hardlabel = document.querySelector(".hard_label");
    const cardstatuscontainer = document.querySelector(".stats-card");


    function validusername(username) {
        if (username.trim === "") {
            alert("enter the username")
            return false;
        }
        const regex = /^[a-zA-Z0-9_]{1,15}$/
        const ismatching = regex.test(username);
        if (!ismatching) {
            alert("invalid username ");

        }
        return ismatching;
    }


    searchButton.addEventListener('click', function () {
        const username = usernameinput.value;
        console.log(username);
    })






})









