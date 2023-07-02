let contentIndex = 0;
const contents = [
    {
        description: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
        clientImage: "./components/img/clients/client8.png",
        clientName: "Zoltan Nemeth",
        clientDescription: "CEO of Pixler Lab"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur usce atfend volutpat. Curabitur fermentum feugiat magna, non facilisis mauris accumsan vel. Vestibulum ultrices finibus rutrum nec venenatis elit condimentum. Quisque vel mi a massa dapibus posuere. Pellentesque ullamcorper, sapien eget consectetur eleifend, arcu lorem consequat sapien, in volutpat libero felis sed ante.",
        clientImage: "./components/img/clients/client6.png",
        clientName: "John Doe",
        clientDescription: "HR of Best Company"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor leo ut metus ullamcorper, ac dapibus odio consectetur. Nullam quis aliquam velit. Sed id convallis ipsum. Quisque mollis semper eros, sed vestibulum urna finibus vitae. Nulla consectetur nunc non arcu mattis, vel lobortis tellus maximus.",
        clientImage: "./components/img/clients/client2.png",
        clientName: "Alisa Penterino",
        clientDescription: "Editor of The Danish Times"
    },
];

function changeContent(direction) {
    if (direction === "left") {
        contentIndex = (contentIndex === 0) ? contents.length - 1 : contentIndex - 1;
    } else if (direction === "right") {
        contentIndex = (contentIndex === contents.length - 1) ? 0 : contentIndex + 1;
    }

    const description = document.querySelector(".satisfaction__text-description");
    const clientImage = document.querySelector(".satisfaction__client-img img");
    const clientName = document.querySelector(".satisfaction__client-name");
    const clientDescription = document.querySelector(".satisfaction__client-description");

    description.textContent = contents[contentIndex].description;
    clientImage.src = contents[contentIndex].clientImage;
    clientName.textContent = contents[contentIndex].clientName;
    clientDescription.textContent = contents[contentIndex].clientDescription;
}