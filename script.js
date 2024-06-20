function handleContact(event){

    event.preventDefault();

    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.email);
    // console.log(event.target.message);

    const name=event.target.name.value;
    const email=event.target.email.value;
    const message=event.target.message.value;
    
    console.log(name);
    console.log(email);
    console.log(message);

    const successContainer = document.getElementById("success_container");

    console.log(successContainer);

    const namePara = document.createElement("p");
    namePara.innerText = `Your name: ${name}`;
    
    const emailpara = document.createElement("p");
    emailpara.innerText = `Your email: ${email}`;

    const messagepara = document.createElement("p");
    messagepara.innerText = `Your message: ${message}`;

    console.log(namePara);
    console.log(emailpara);
    console.log(messagepara);

    successContainer.appendChild(namePara);
    successContainer.appendChild(emailpara);
    successContainer.appendChild(messagepara);

}

const imageArray = [
    {
        url: "./images/project/image 3.png",
    },

    {
        url: "./images/project/image 5.png",
    },

    {
        url: "./images/project/image 7.png",
    },

    {
        url: "./images/project/image 6.png",
    },

];

function handleShowMoreProject() {

    const projectContainer = document.getElementById("projects");

    for(const item of imageArray)
    {
            // console.log(item);
            const projectDivImage = document.createElement("div");

            projectDivImage.classList.add("project");
            projectDivImage.innerHTML = `
            
            <img src="${item.url}" alt="">

            `;

            projectContainer.appendChild(projectDivImage);

            console.log(projectDivImage);

    }

    console.log("click", projectContainer);
}

// const firstUrlObject = imageArray[0];
// const secondUrlObject = imageArray[1];

// console.log(imageArray);
// console.log(firstUrlObject);
// console.log(firstUrlObject.url);

// for(const item of imageArray)
// {
//         console.log(item);
// }

// const imageslength = imageArray.length;
// console.log(imageslength);

// for(let index=0; index<imageslength ; index++)
// {
//       console.log(index);
//       console.log(imageArray[index]);
// }
