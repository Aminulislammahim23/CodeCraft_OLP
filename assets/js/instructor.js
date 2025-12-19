// Instructor Data
const instructors = {
    swarna: {
      name: "Farhina Parvin Swarna",
      img: "../assets/image/swarna.jpg",
      bio: "Experienced in teaching programming and software engineering.",
      specialties: "Embedded Systems, Web Technologies",
      courses: "5 Courses"
    },
    mahim: {
      name: "Aminul Islam Mahim",
      img: "../assets/image/mahim.jpeg",
      bio: "Senior Instructor with 8+ years of web development experience.",
      specialties: "Full-Stack Development, JavaScript, React",
      courses: "8 Courses"
    },
    upoma: {
      name: "Upoma Das",
      img: "../assets/image/upoma.jpeg",
      bio: "Senior Instructor with 8+ years of web development experience.",
      specialties: "Full-Stack Development, JavaScript, React",
      courses: "8 Courses"
    },
    sanjil: {
      name: "Sanjil Hossain",
      img: "../assets/image/sanjil.jpeg",
      bio: "Senior Instructor with 8+ years of web development experience.",
      specialties: "Full-Stack Development, JavaScript, React",
      courses: "8 Courses"
    }
   
   
  };
 
  // Show Details in Modal
  function showDetails(key) {
    const instructor = instructors[key];
    document.getElementById("modal-name").textContent = instructor.name;
    document.getElementById("modal-pic").src = instructor.img;
    document.getElementById("modal-bio").textContent = instructor.bio;
    document.getElementById("modal-specialties").textContent = "Specialties: " + instructor.specialties;
    document.getElementById("modal-courses").textContent = instructor.courses;
 
    document.getElementById("profileModal").style.display = "flex";
  }
 
  // Close Modal
  function closeModal() {
    document.getElementById("profileModal").style.display = "none";
  }
 
  // Open Message Form
  function openMessageForm() {
    document.getElementById("profileModal").style.display = "none";
    document.getElementById("messageModal").style.display = "flex";
    document.getElementById("message-instructor-name").textContent = currentInstructor;
  }
 
  // Close Message Form
  function closeMessageForm() {
    document.getElementById("messageModal").style.display = "none";
  }
 
  // Handle Message Form Submit
  document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
   
    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const message = document.getElementById("studentMessage").value;
 
    alert(`Message sent to ${currentInstructor}!\n\nFrom: ${name} (${email})\nMessage: ${message}`);
   
    closeMessageForm();
    this.reset();
  });
 
  //Notification
  let notifications = [
    "New course available: Web Development",
    "Assignment deadline tomorrow",
    "Your instructor replied to your query"
  ];
 
  const bell = document.getElementById("bell");
  const dropdown = document.getElementById("dropdown");
  const list = document.getElementById("notificationList");
  const unreadCount = document.getElementById("unreadCount");
  const markAllRead = document.getElementById("markAllRead");
 
  const emailToggle = document.getElementById("emailToggle");
  const pushToggle = document.getElementById("pushToggle");
 
  // Show notifications
  function showNotifications() {
    list.innerHTML = "";
    notifications.forEach(note => {
      let li = document.createElement("li");
      li.textContent = note;
      li.classList.add("unread");
      list.appendChild(li);
    });
    unreadCount.textContent = notifications.length;
  }
 
  // Toggle dropdown
  bell.onclick = () => {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  };
 
  // Mark all as read
  markAllRead.onclick = () => {
    list.querySelectorAll("li").forEach(li => li.classList.remove("unread"));
    unreadCount.style.display = "none";
  };
 
  // Handle toggles
  emailToggle.onchange = () => {
    alert("Email Notifications: " + (emailToggle.checked ? "ON" : "OFF"));
  };
 
  pushToggle.onchange = () => {
    alert("Push Notifications: " + (pushToggle.checked ? "ON" : "OFF"));
  };
 
  // Initial load
  showNotifications();
 