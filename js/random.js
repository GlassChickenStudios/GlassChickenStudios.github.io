document.addEventListener("DOMContentLoaded", () => {

    const treeImages = [
        "images/Tree3.png",
        "images/Tree4.png",
        "images/Tree5.png",
        "images/Tree6.png",
        "images/Tree7.png",
        "images/Tree8.png",
        "images/Tree9.png",
        "images/Tree10.png"
    ];

    document.querySelectorAll(".random-tree").forEach(tree => {
        tree.src = treeImages[Math.floor(Math.random() * treeImages.length)];
    });

    const bushImages = [
        "images/bush1.png",
        "images/bush2.png",
        "images/bush3.png",
        "images/bush4.png",
        "images/bush5.png",
        "images/bush6.png",
        "images/bush7.png",
        "images/bush8.png",
        "images/bush9.png",
        "images/bush10.png",
        "images/bush11.png",
        "images/bush12.png",
        "images/bush13.png",
        "images/bush14.png",
        "images/bush15.png",
        "images/bush16.png"
    ];

    document.querySelectorAll(".random-bush").forEach(bush => {
        bush.src = bushImages[Math.floor(Math.random() * bushImages.length)];
    });

});