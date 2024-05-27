console.log("Ma connected xu haii");

// Select the <h1> element
const h1Element = document.querySelector('h1');
console.log("xxxx---->", h1Element);

// Get the text content of the <h1> element
const h1Text = h1Element.innerText;
console.log("ppppppp-->", h1Text);

// Change the inner text to "Australia"
h1Element.innerText = "Australia";

// Verify the change
console.log("Updated h1 text-->", h1Element.innerText);
