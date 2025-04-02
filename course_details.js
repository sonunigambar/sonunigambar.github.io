
    function showCourseDetails(courseName) {
        let courseContent = "";
        let price = "";

        if (courseName === "Java Programming") {
            price = 4000;
            courseContent = `
        <div class="highlight">
            <p><i class="fas fa-book-open"></i> <strong>Course Overview:</strong> This course covers Java from beginner to advanced level, including OOP, Collections, Streams, and Multithreading.</p>
        </div>
        <ul class="list-group mb-3">
            <li class="list-group-item"><i class="fas fa-clock"></i> <strong>Duration:</strong> 2 months</li>
            <li class="list-group-item"><i class="fas fa-check-circle"></i> <strong>Prerequisites:</strong> No prior knowledge required</li>
            <li class="list-group-item"><i class="fas fa-users"></i> <strong>Who Should Enroll:</strong> Beginners, College Students, Working Professionals</li>
            <li class="list-group-item"><i class="fas fa-trophy"></i> <strong>Benefits:</strong> Hands-on coding, real-world projects, and interview preparation</li>
        </ul>
        <!-- Course Brochure Download Section -->
        <div class="text-center brochure-section">
            <a href="./Core_Java_Training.pdf" download class="btn btn-primary">
                <i class="fas fa-download"></i> Download Course Brochure
            </a>
        </div>
        <div class="refund-policy text-center">
            <h4 class="text-dark"><i class="fas fa-gift text-warning"></i> <strong>Exclusive Offer!</strong></h4>
            <p class="text-dark"><i class="fas fa-check-circle text-success"></i> <strong>Get an 80% Refund!</strong></p>
            <p>📢 <strong>Complete the 2-month course, pass the final exam, and we will refund 80% of your course fee!</strong></p>
            <p class="text-danger"><i class="fas fa-clock"></i> Hurry! Limited Time Offer</p>
        </div>
    `;
        }
        else if (courseName === "Spring Boot") {
            price = 5000;
            courseContent = `
                <div class="highlight">
                    <p><i class="fas fa-book-open"></i> <strong>Course Overview:</strong> Master Spring Boot, Microservices, and REST API development.</p>
                </div>
                <ul class="list-group mb-3">
                    <li class="list-group-item"><i class="fas fa-clock"></i> <strong>Duration:</strong> 3 months</li>
                    <li class="list-group-item"><i class="fas fa-list"></i> <strong>Topics Covered:</strong> Spring Boot, REST APIs, Microservices, JPA, Hibernate</li>
                    <li class="list-group-item"><i class="fas fa-check-circle"></i> <strong>Prerequisites:</strong> Basic Java knowledge</li>
                    <li class="list-group-item"><i class="fas fa-users"></i> <strong>Who Should Enroll:</strong> Java Developers, Backend Engineers</li>
                    <li class="list-group-item"><i class="fas fa-trophy"></i> <strong>Benefits:</strong> Real-world projects, Deployment, API Security</li>
                </ul>
                <div class="refund-policy text-center">
                    <h4 class="text-dark"><i class="fas fa-gift text-warning"></i> <strong>Exclusive Offer!</strong></h4>
                    <p class="text-dark"><i class="fas fa-check-circle text-success"></i> <strong>Get an 70% Refund!</strong></p>
                    <p>📢 <strong>Complete the 2-month course, pass the final exam, and we will refund 70% of your course fee!</strong></p>
                    <p class="text-danger"><i class="fas fa-clock"></i> Hurry! Limited Time Offer</p>
                </div>
            `;
        }
            else if (courseName === "Interview Preparation") {
                price = 6000;
                courseContent = `
                    <div class="highlight">
                        <p><i class="fas fa-book-open"></i> <strong>Course Overview:</strong> Crack top product-based company interviews with hands-on Java, Spring Boot, REST API, and real-world projects.</p>
                    </div>
                    <ul class="list-group mb-3">
                        <li class="list-group-item"><i class="fas fa-clock"></i> <strong>Duration:</strong> 3 months</li>
                        <li class="list-group-item"><i class="fas fa-list"></i> <strong>Topics Covered:</strong> Core Java, DSA, Spring Boot, REST APIs, System Design, Real-time Project</li>
                        <li class="list-group-item"><i class="fas fa-check-circle"></i> <strong>Prerequisites:</strong> Basic Java knowledge</li>
                        <li class="list-group-item"><i class="fas fa-users"></i> <strong>Who Should Enroll:</strong> Java Developers, Job Seekers, Freshers & Experienced Professionals</li>
                        <li class="list-group-item"><i class="fas fa-trophy"></i> <strong>Benefits:</strong> Mock Interviews, Resume Building, Coding Assignments, Real-world projects</li>
                    </ul>
                    <div class="refund-policy text-center">
                        <h4 class="text-dark"><i class="fas fa-gift text-warning"></i> <strong>Exclusive Offer!</strong></h4>
                        <p class="text-dark"><i class="fas fa-check-circle text-success"></i> <strong>Get an 60% Refund!</strong></p>
                        <p>📢 <strong>Complete the course, pass mock interviews, and get an 60% refund on your fee!</strong></p>
                        <p class="text-danger"><i class="fas fa-clock"></i> Limited Slots Available – Enroll Now!</p>
                    </div>
                `;
            }
    
    
        // ✅ Update modal title dynamically
    document.getElementById("modalCourseTitle").innerText = courseName;
    
    // // ✅ Inject dynamic content inside the modal
    document.getElementById("courseDetails").innerHTML = courseContent;

    document.getElementById("enroll-btn").innerHTML = " Enroll Now for ₹"+price+" & Unlock Your Refund!";
    document.querySelector(".enroll-btn").setAttribute("onclick", `enrollNow('${courseName}')`);

    // // ✅ Update the Enroll button dynamically
    // document.getElementById("enrollButton").setAttribute("onclick", `enrollNow('${courseName}')`);

    
    
    var courseModal = new bootstrap.Modal(document.getElementById('courseModal'));
    courseModal.show();
}
