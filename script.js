// Function to create floating shapes
function createShapes() {
    const shapeTypes = ["circle", "square", "triangle"];
    const background = document.querySelector(".background");
  
    for (let i = 0; i < 15; i++) { // Create 15 shapes
      let shape = document.createElement("div");
      let randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      shape.classList.add("shape", randomShape);
  
      let randomX = Math.random() * window.innerWidth; // Random X position
      let randomSize = Math.random() * 40 + 20; // Random size (20px to 60px)
      let randomSpeed = Math.random() * 10 + 5; // Animation speed (5s to 15s)
  
      shape.style.left = `${randomX}px`;
      shape.style.width = `${randomSize}px`;
      shape.style.height = `${randomSize}px`;
      shape.style.animationDuration = `${randomSpeed}s`;
  
      background.appendChild(shape);
    }
  }
  
  // Call function when page loads
  document.addEventListener("DOMContentLoaded", createShapes);
  
  // Explore button navigation
  function exploreTemplates() {
    window.location.href = "templates.html"; // Update with actual page link
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  

  document.getElementById("navbar-container").innerHTML =
  '<object type="text/html" data="navbar.html" ></object>';

  //login authentification
  const firebaseConfig = {
    apiKey: "AIzaSyB8NaAZ_97XCPoDM1sQBs--Zs9ziQ9FO4c",
    authDomain: "mdesigns-45ff9.firebaseapp.com",
    projectId: "mdesigns-45ff9",
    storageBucket: "mdesigns-45ff9.appspot.com",
    messagingSenderId: "561823508868",
    appId: "1:561823508868:android:f708f90619e31d23c195d1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  

  document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("show-login");
    const signupBtn = document.getElementById("show-signup");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
  
    loginBtn.addEventListener("click", () => {
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
    });
  
    signupBtn.addEventListener("click", () => {
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
    });
  
    // Signup Function
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
  
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          return db.collection("users").doc(user.uid).set({
            name: name,
            email: email
          });
        })
        .then(() => {
          alert("Profile Created! Redirecting to Dashboard...");
          window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
    });
  
    // Login Function
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login Successful! Redirecting...");
          window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
    });
  });
  
// dashboard 

  document.addEventListener("DOMContentLoaded", () => {
    const userInfo = document.getElementById("user-info");
    const logoutBtn = document.getElementById("logout-btn");
  
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users").doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            userInfo.innerHTML = `Hello, ${doc.data().name} (${user.email})`;
          }
        });
      } else {
        window.location.href = "login.html";
      }
    });
  
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        alert("Logged Out!");
        window.location.href = "login.html";
      });
    });
  });

  auth.onAuthStateChanged((user) => {
    if (user) {
      db.collection("users").doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          document.getElementById("user-info").innerHTML = `Hello, ${doc.data().name} (${user.email})`;
        }
      });
    } else {
      // Redirect if not logged in
      window.location.href = "login.html";  
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Running scripts...");
    
    // Example Fix: Ensure Elements Exist Before Accessing Them
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Login form submitted");
        });
    } else {
        console.error("Login form not found!");
    }
});
