---
course_id: gitlab-cicd
title: GitLab CI/CD
provider: Cohortia
original_reference: GitLab / Udemy / Udemy
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Cloud Computing & DevOps
skills: DevOps Principles, Continuous Integration (CI), Continuous Delivery (CD), GitLab CI/CD, YAML Configuration, Pipeline Automation, Version Control (Git), Scripting (Bash/Shell), Deployment Automation, Troubleshooting CI/CD
ownership_note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "GitLab CI/CD," a comprehensive Cohortia course designed to equip you with the essential skills to automate your software development lifecycle using GitLab's powerful Continuous Integration and Continuous Delivery features. In today's fast-paced development landscape, the ability to rapidly and reliably deliver software is paramount. This course demystifies the concepts of CI/CD and provides a hands-on journey into configuring, managing, and optimizing pipelines directly within the GitLab ecosystem. Whether you're a developer looking to streamline your workflow, a QA engineer aiming for faster feedback loops, or an operations professional interested in automated deployments, this course will provide a solid foundation.

Throughout this course, we will start with the fundamental principles of CI/CD, understanding why it's crucial for modern software teams. We will then dive deep into GitLab's specific implementation, exploring the `.gitlab-ci.yml` file, GitLab Runners, and the various components that make up a robust pipeline. You'll learn how to define jobs, manage stages, leverage variables, and handle artifacts and caching to build efficient and repeatable processes. The curriculum is structured to progressively build your knowledge, moving from basic pipeline creation to more advanced topics like integrating testing, implementing security scans, and orchestrating deployments to different environments.

By the end of this course, you will not only understand the theoretical underpinnings of CI/CD but also possess the practical ability to design, implement, and troubleshoot your own GitLab CI/CD pipelines. We emphasize practical application, ensuring you gain confidence in automating builds, tests, and deployments for real-world projects. Prepare to transform your development practices, reduce manual errors, accelerate delivery times, and foster a culture of continuous improvement within your team. Join us to unlock the full potential of GitLab CI/CD and elevate your DevOps capabilities.

Upon completing this course, you will be able to:
*   Explain the core principles of Continuous Integration and Continuous Delivery and their benefits.
*   Set up and configure GitLab projects for CI/CD pipeline integration.
*   Write and manage `.gitlab-ci.yml` files to define pipeline jobs and stages.
*   Utilize GitLab Runners effectively for executing CI/CD tasks.
*   Implement advanced pipeline features such as variables, artifacts, caching, and services.
*   Integrate automated testing, code quality checks, and basic security scanning into pipelines.
*   Design and execute deployment strategies to various environments using GitLab CI/CD.
*   Troubleshoot common pipeline failures and optimize pipeline performance.
*   Apply best practices for securing and maintaining GitLab CI/CD pipelines.
*   Automate the build, test, and deployment phases of a software project using GitLab.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Introduction to CI/CD and GitLab Fundamentals | 3 |
| 2 | Building Your First GitLab CI/CD Pipeline | 3 |
| 3 | Advanced Pipeline Configuration and Optimization | 4 |
| 4 | Integrating Testing and Quality Gates | 4 |
| 5 | Orchestrating Deployments and Environments | 5 |
| 6 | Pipeline Maintenance, Security, and Best Practices | 5 |

Total chapters: 24
---

## Module 1: Introduction to CI/CD and GitLab Fundamentals

**Module Goal:** This module introduces the core concepts of Continuous Integration and Continuous Delivery/Deployment (CI/CD) and provides a foundational understanding of GitLab as a comprehensive DevOps platform, preparing learners to leverage its features for automated software development workflows.

---

### Chapter 1.1 — Understanding CI/CD: The Foundation of Modern DevOps

#### Learning objectives
*   Define Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment.
*   Explain the core benefits of implementing CI/CD practices in software development.
*   Differentiate between Continuous Integration, Continuous Delivery, and Continuous Deployment.
*   Identify the typical stages involved in a robust CI/CD pipeline.

#### Detailed lesson content
Welcome to the exciting world of GitLab CI/CD! Before we dive into the specifics of GitLab, it's crucial to establish a solid understanding of what CI/CD truly means and why it has become the backbone of modern software development. CI/CD stands for Continuous Integration, Continuous Delivery, and often, Continuous Deployment. These aren't just buzzwords; they represent a set of practices designed to bring software changes into production faster, more reliably, and with higher quality. Think of it as an automated assembly line for your code, ensuring that every change goes through a rigorous series of checks before it reaches your users.

Let's break down each component, starting with **Continuous Integration (CI)**. At its heart, CI is a development practice where developers frequently merge their code changes into a central repository, typically several times a day. Each integration is then verified by an automated build and automated tests. The primary goal here is to detect integration errors as quickly as possible. Imagine a team of developers all working on different features. Without CI, they might work in isolation for days or weeks, only to find massive integration conflicts when they finally try to combine their code. This "integration hell" is painful and costly. With CI, small, frequent merges mean smaller, easier-to-resolve conflicts. When a developer pushes code, the CI system automatically compiles the code, runs unit tests, integration tests, and often static code analysis. If any of these steps fail, the developer is immediately notified, allowing them to fix the issue while the context is fresh in their mind. This rapid feedback loop is invaluable for maintaining code quality and stability. A common mistake here is for teams to adopt CI but then allow builds to stay broken for extended periods; the "broken window" theory applies – if a build is often red, no one pays attention. The rule of thumb is: if the build breaks, stop everything and fix it.

Moving on, **Continuous Delivery (CD)** extends Continuous Integration by ensuring that all code changes are automatically built, tested, and prepared for release to production. This means that at any point, your codebase is in a deployable state. It doesn't necessarily mean every change *is* deployed to production, but rather that it *could be*. After the CI stage successfully completes, the CD pipeline might package the application, run more extensive end-to-end tests, perform security scans, and then deploy it to a staging or pre-production environment. The key differentiator for Continuous Delivery is the human element: a manual approval step is typically required before deploying to the final production environment. This gives teams the flexibility to decide when to release new features, perhaps bundling several small changes into a larger release or coordinating with marketing efforts. The benefit is immense: reduced risk of deployment failures, faster recovery from issues, and a consistent, repeatable release process. A crucial safety note for CD is to always have a robust rollback strategy. If a deployment to staging or even production goes wrong, you need to be able to revert to a stable previous version quickly.

Finally, we have **Continuous Deployment**. This takes Continuous Delivery a step further by automating the entire release process, including the deployment to production, without any manual intervention. Every change that passes all the automated tests and quality gates in the pipeline is automatically released to end-users. This is the ultimate goal for many high-performing teams, as it maximizes speed and minimizes lead time for changes. However, it requires an extremely high level of confidence in your automated tests and monitoring systems. If a bug slips through, it goes straight to your users. Teams employing Continuous Deployment often use advanced techniques like canary deployments or blue/green deployments to mitigate risk, gradually rolling out new versions to a small subset of users before making it available to everyone. While Continuous Deployment offers the fastest path to market, it's not suitable for every organization or every application, especially those with stringent regulatory requirements or extremely high-risk changes. Regardless of whether you aim for Continuous Delivery or Deployment, the foundational principles of automation, frequent integration, and rapid feedback remain paramount.

#### Key concepts
*   **Continuous Integration (CI):** A development practice where developers frequently merge their code changes into a central repository, and each integration is verified by an automated build and automated tests.
*   **Continuous Delivery (CD):** An extension of CI that ensures all code changes are automatically built, tested, and prepared for release to production, making the codebase always deployable, often with a manual approval for production deployment.
*   **Continuous Deployment:** An advanced form of CD where every change that passes all automated tests is automatically deployed to production without human intervention.
*   **DevOps:** A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality.
*   **Feedback Loop:** The process of quickly getting information back to developers about the quality and functionality of their code changes, enabling rapid **Automated Tests:** Scripts and tools that automatically verify the functionality, performance, and security of software components or the entire application.

#### Hands-on activity
**Activity: Identifying CI/CD Stages in a Scenario**

Imagine you are a DevOps engineer reviewing a new feature implementation. The development team has just pushed code for a new user authentication module. Describe the typical CI/CD stages this code would go through, from commit to potential production deployment.

**Instructions:**
1.  **Commit:** A developer pushes new code to the `feature/auth` branch.
2.  **CI Stage 1: Build & Unit Test:** What happens immediately after the push?
3.  **CI Stage 2: Static Analysis & Linting:** What quality checks might run?
4.  **CD Stage 1: Integration Testing & Packaging:** After CI, what more comprehensive tests run, and how is the application prepared?
5.  **CD Stage 2: Deployment to Staging:** Where might the application be deployed next, and why?
6.  **CD Stage 3: End-to-End Testing:** What kind of testing occurs on the staging environment?
7.  **CD Stage 4 (Optional): Manual Approval/UAT:** What human step might be involved before production?
8.  **CD Stage 5: Deployment to Production:** What is the final step, and what considerations are there?

**Template for your answer:**
```markdown
1.  **Commit:** Developer pushes code.
2.  **CI Stage 1 (Build & Unit Test):**
    *   *Explanation:*
    *   *Example action:*
3.  **CI Stage 2 (Static Analysis & Linting):**
    *   *Explanation:*
    *   *Example action:*
4.  **CD Stage 1 (Integration Testing & Packaging):**
    *   *Explanation:*
    *   *Example action:*
5.  **CD Stage 2 (Deployment to Staging):**
    *   *Explanation:*
    *   *Example action:*
6.  **CD Stage 3 (End-to-End Testing):**
    *   *Explanation:*
    *   *Example action:*
7.  **CD Stage 4 (Optional - Manual Approval/UAT):**
    *   *Explanation:*
    *   *Example action:*
8.  **CD Stage 5 (Deployment to Production):**
    *   *Explanation:*
    *   *Example action:*
```

#### Assessment idea
1.  **Question:** A development team frequently merges small code changes into the main branch, and each merge automatically triggers a build and a suite of unit tests. If any test fails, the team is immediately notified. Which CI/CD practice is primarily being described here?
    *   A) Continuous Deployment
    *   B) Continuous Delivery
    *   C) Continuous Integration
    *   D) Continuous Monitoring

    **Correct Answer:** C) Continuous Integration
    **Explanation:** The description highlights frequent merges, automated builds, and unit tests with immediate feedback on failures, which are the defining characteristics of Continuous Integration. Continuous Delivery and Deployment extend beyond this by focusing on preparing for or automatically deploying to production.

2.  **Question:** Your team has implemented a pipeline where code changes are automatically built, tested, and deployed to a staging environment. However, a human approval is always required before the changes can be pushed to the production environment. What CI/CD practice does this scenario best represent?
    *   A) Continuous Integration
    *   B) Continuous Delivery
    *   C) Continuous Deployment
    *   D) Manual Deployment

    **Correct Answer:** B) Continuous Delivery
    **Explanation:** Continuous Delivery ensures that the software is always in a deployable state and ready for release, often to a staging environment, but it explicitly includes a manual gate for production deployment. Continuous Deployment would automate the final production step, while Continuous Integration focuses solely on the early stages of building and testing merged code.

#### AI generation note
Create a 10-minute animated explainer video. Use clear, engaging diagrams to illustrate the flow of code through CI, CD, and Continuous Deployment. Start with a simple "developer commits code" visual, then show it moving through automated build, test, package, and deploy stages. Differentiate CI, CD, and Continuous Deployment with distinct visual cues (e.g., a "manual approval" icon for CD, fully automated for Continuous Deployment). Include a visual analogy of an assembly line for software. End with a 2-question interactive mini-quiz on distinguishing CI from CD. Ensure captions and alt text for all visual elements.

---

### Chapter 1.2 — Introduction to GitLab: Your All-in-One DevOps Platform

#### Learning objectives
*   Describe GitLab's comprehensive role as a single application for the entire DevOps lifecycle.
*   Identify and explain the purpose of key GitLab features, including Git repositories, CI/CD pipelines, Issue Tracking, and Container Registry.
*   Navigate the GitLab user interface to locate projects, groups, and essential settings.
*   Understand the basic workflow of creating and managing a project within GitLab.

#### Detailed lesson content
Now that we understand the fundamental principles of CI/CD, let's turn our attention to the tool that will enable us to implement these practices: GitLab. GitLab is much more than just a Git repository host; it's a complete, integrated DevOps platform delivered as a single application. This "single application" philosophy is a core differentiator for GitLab. Instead of stitching together multiple disparate tools for version control, issue tracking, CI/CD, security scanning, and monitoring, GitLab provides all these capabilities within one unified interface and data store. This significantly simplifies toolchain management, reduces context switching for developers, and fosters better collaboration across development, operations, and security teams.

At its core, GitLab provides robust **Git repository management**. This is where your source code lives, enabling version control, branching, merging, and collaboration among developers. But GitLab extends far beyond this. Its integrated **CI/CD pipelines** are a cornerstone feature, allowing you to define automated scripts for building, testing, and deploying your applications directly within your project. We'll dive deep into this in subsequent chapters, but for now, understand that GitLab's CI/CD is tightly coupled with your code repository, making it incredibly powerful and easy to configure. Beyond CI/CD, GitLab offers comprehensive **Issue Tracking** and **Project Management** capabilities. You can create issues, assign them to team members, track progress through customizable boards (similar to Kanban or Scrum boards), and link them directly to code changes via Merge Requests. This provides end-to-end traceability from idea to production.

Other crucial features include the **Container Registry**, which allows you to store and manage Docker images directly within your GitLab instance or project, making it seamless to use these images in your CI/CD pipelines. There's also a **Package Registry** for various package types (npm, Maven, NuGet, PyPI, etc.), a **Wiki** for project documentation, and powerful **Security Scanning** tools (Static Application Security Testing - SAST, Dynamic Application Security Testing - DAST, Dependency Scanning, Container Scanning) that can be integrated directly into your CI/CD pipelines to catch vulnerabilities early. Navigating the GitLab UI is intuitive. When you log in, you'll typically see your **Dashboard**, which provides an overview of your recent activity, projects, and groups. **Projects** are where your code, issues, and CI/CD pipelines reside. They are the primary unit of work. **Groups** are used to organize multiple related projects and manage permissions across them, making it easier to manage access for larger teams or departments. For instance, you might have a "Frontend Team" group containing several frontend application projects.

When creating a new project, you can choose to create a blank project, create from a template, or import an existing repository. Once inside a project, you'll find a sidebar navigation with links to the Repository, Issues, Merge Requests, CI/CD, Security & Compliance, and Settings. Spending some time exploring these sections will familiarize you with the platform's layout. A common mistake beginners make is not understanding the distinction and hierarchy between groups and projects, leading to disorganized repositories or complicated permission structures. Always think about how your projects relate to each other and how your teams are structured when deciding on group and project organization. For safety, always ensure that access tokens and deployment credentials are managed securely within GitLab's CI/CD variables and not hardcoded into your `.gitlab-ci.yml` files or committed to your repository. GitLab provides robust features for secure variable management, which we'll explore later.

#### Key concepts
*   **GitLab:** A comprehensive, single application for the entire DevOps lifecycle, providing Git repository management, CI/CD, issue tracking, and more.
*   **Project:** The primary unit of work in GitLab, containing source code, issues, CI/CD pipelines, and other project-specific resources.
*   **Group:** A way to organize multiple related projects and manage user permissions across them, facilitating team collaboration and administration.
*   **Git Repository:** A central location within GitLab where your source code is stored and version-controlled using Git.
*   **CI/CD Pipeline:** An automated workflow defined within GitLab that builds, tests, and deploys your applications based on configuration in a `.gitlab-ci.yml` file.
*   **Issue Tracking:** GitLab's system for managing tasks, bugs, feature requests, and other work items, often visualized on issue boards.
*   **Container Registry:** A built-in registry in GitLab for storing and managing Docker images, seamlessly integrated with CI/CD.

#### Hands-on activity
**Activity: Exploring the GitLab UI and Creating a Project**

This activity will guide you through navigating the GitLab interface and setting up your first project.

**Instructions:**
1.  **Access GitLab:** If you have access to a GitLab instance (e.g., gitlab.com or a company instance), log in. If not, you can explore the public documentation and screenshots, but hands-on is preferred.
2.  **Explore the Dashboard:**
    *   Identify your "Projects" and "Groups" sections.
    *   Look for the "New project" button or link.
3.  **Create a New Project:**
    *   Click "New project".
    *   Select "Create blank project".
    *   **Project name:** `my-first-gitlab-project`
    *   **Project URL:** (This will auto-fill based on your group/username)
    *   **Project slug:** (This will auto-fill)
    *   **Project description (optional):** `A simple project to explore GitLab features.`
    *   **Visibility Level:** Set to "Public" for this exercise (or "Private" if you prefer).
    *   **Initialize repository with a README:** Check this box.
    *   Click "Create project".
4.  **Explore Your New Project:**
    *   Once the project is created, navigate through the left-hand sidebar.
    *   Click on "Project overview", "Repository", "Issues", "Merge requests", and "CI/CD".
    *   Notice the different sections and what they contain. For example, under "Repository", you'll see your `README.md` file. Under "CI/CD", you'll see an empty pipelines page for now.
5.  **Identify Project Settings:**
    *   Click on "Settings" in the sidebar.
    *   Explore "General", "Repository", and "CI/CD" settings. Note where you might configure things like protected branches or CI/CD variables.

**Reflection Prompt:**
What differences did you observe between the "Project overview" and the "Repository" sections? How do you think the "Issues" and "Merge requests" sections will interact with your code?

#### Assessment idea
1.  **Question:** Which of the following is NOT a core feature typically integrated within GitLab's single application DevOps platform?
    *   A) Git Repository Management
    *   B) CI/CD Pipelines
    *   C) Dedicated third-party cloud billing and cost management
    *   D) Issue Tracking and Project Boards

    **Correct Answer:** C) Dedicated third-party cloud billing and cost management
    **Explanation:** While GitLab can integrate with cloud providers and help manage deployments, dedicated third-party cloud billing and cost management is not a core, built-in feature of the GitLab platform itself. The other options (Git repository management, CI/CD pipelines, and issue tracking) are fundamental components of GitLab's integrated DevOps offering.

2.  **Question:** You are organizing multiple projects for different microservices that belong to the same application suite. You want to manage user permissions and visibility for all these related projects collectively. Which GitLab organizational structure would be most appropriate for this scenario?
    *   A) Individual Projects
    *   B) Personal Namespace
    *   C) Groups
    *   D) Sub-modules

    **Correct Answer:** C) Groups
    **Explanation:** GitLab Groups are specifically designed to organize multiple related projects, allowing for collective management of users, permissions, and other settings across all projects within that group. This provides a hierarchical structure that is ideal for managing teams and larger application suites. Individual projects or personal namespaces are less suitable for collective management, and sub-modules relate to Git repository structure, not GitLab's project organization.

#### AI generation note
Create a 12-minute guided walkthrough video. Start with a login to a GitLab instance (gitlab.com), then demonstrate navigating the dashboard, creating a new blank project, and exploring the key sections (Repository, Issues, Merge Requests, CI/CD, Settings) within the newly created project. Use clear screen recordings with mouse pointer highlights. Include a brief explanation of what each section is for as you click through it. Emphasize the "single application" concept visually by showing how all features are accessible from one interface. End with a reflection prompt asking learners to consider how they might organize their own projects and groups. Ensure high-contrast visuals and keyboard-navigable demos.

---

### Chapter 1.3 — Version Control with Git and GitLab: The Foundation

#### Learning objectives
*   Explain the fundamental principles of Git as a distributed version control system.
*   Perform essential Git commands for cloning, adding, committing, pushing, and pulling code.
*   Understand how GitLab acts as a remote Git repository host, facilitating collaboration.
*   Describe the purpose and workflow of creating and merging branches and Merge Requests in GitLab.

#### Detailed lesson content
Before we can automate anything with GitLab CI/CD, we need to ensure our code is properly managed using a version control system. The industry standard for this is **Git**, and GitLab is built around it. Git is a distributed version control system (DVCS), meaning every developer's machine has a complete copy of the repository, including its full history. This is a significant advantage over centralized systems, as it allows developers to work offline, commit locally, and provides redundancy. Git tracks changes to files, allowing you to revert to previous versions, see who made what changes, and collaborate efficiently without overwriting each other's work. It's the bedrock upon which all modern CI/CD practices are built.

Let's quickly recap some essential Git commands that you'll use daily. To start working on an existing project hosted on GitLab, you'll first **clone** it to your local machine:
```bash
git clone <repository-url>
```
For example, `git clone https://gitlab.com/your-username/my-first-gitlab-project.git`. This creates a local copy of the repository. Once you've made changes to your files, you need to tell Git to track these changes. First, you **stage** the changes using `git add`:
```bash
git add . # Stages all changes in the current directory
git add path/to/specific/file.js # Stages a specific file
```
After staging, you **commit** your changes, creating a snapshot of your work with a descriptive message:
```bash
git commit -m "Add new user authentication logic"
```
A common mistake here is writing vague commit messages like "fix" or "update." Good commit messages are crucial for understanding project history and debugging. They should clearly explain *what* was changed and *why*.

Once you've committed locally, you need to **push** your changes to the remote repository on GitLab so others can see them and so your CI/CD pipeline can kick off:
```bash
git push origin main # Pushes changes from your local 'main' branch to the 'origin' remote
```
Conversely, to get the latest changes from the remote repository that other developers have pushed, you'll **pull**:
```bash
git pull origin main # Fetches and merges changes from the 'origin' remote's 'main' branch
```
Always `git pull` before starting new work or before pushing to avoid merge conflicts.

GitLab acts as your **remote Git repository host**. When you `git push` to `origin`, you're sending your local commits to GitLab's servers. GitLab then stores these changes, makes them available to other team members, and crucially, can trigger CI/CD pipelines based on these pushes. This integration is what makes GitLab so powerful. One of the most important concepts for collaboration is **branching**. Developers create branches to isolate their work on new features or bug fixes from the main codebase. This allows multiple developers to work concurrently without interfering with each other's stable code.
```bash
git checkout -b feature/new-dashboard # Creates and switches to a new branch
# ... make changes ...
git push origin feature/new-dashboard # Pushes the new branch to GitLab
```
Once your feature is complete and tested locally, you'll want to integrate it back into the main codebase. In GitLab, this is done through a **Merge Request (MR)**. A Merge Request is GitLab's term for what GitHub calls a Pull Request. It's a formal proposal to merge one branch into another. MRs are not just about merging code; they are a central hub for code review, discussion, automated testing (via CI/CD pipelines), and approvals. When you create an MR in GitLab, it automatically shows the code differences, allows team members to comment on specific lines of code, and often triggers a CI/CD pipeline to run tests on the proposed changes. Only after the code has been reviewed, approved, and all CI/CD checks pass, should the branch be merged into `main`. A critical safety note: always protect your `main` (or `master`) branch in GitLab settings, preventing direct pushes and requiring MRs and approvals for any changes. This ensures code quality and stability.

#### Key concepts
*   **Git:** A distributed version control system (DVCS) used for tracking changes in source code during software development.
*   **Repository (Repo):** A directory where Git stores all the files for a project, along with their revision history.
*   **Commit:** A snapshot of your repository at a specific point in time, along with a message describing the changes.
*   **Branch:** A parallel version of the repository that allows developers to work on new features or fixes without affecting the main codebase.
*   **Merge:** The process of combining changes from one branch into another.
*   **Remote:** A version of your repository hosted on a server, such as GitLab, which allows for collaboration. The default remote is usually named `origin`.
*   **Merge Request (MR):** A GitLab feature (similar to a Pull Request) used to propose changes from one branch to another, facilitating code review, discussion, and automated testing before merging.

#### Hands-on activity
**Activity: Basic Git Workflow and GitLab Merge Request**

This activity will guide you through a fundamental Git workflow, culminating in creating a Merge Request in GitLab.

**Instructions:**
1.  **Prerequisites:** Ensure you have Git installed on your local machine. You should also have created `my-first-gitlab-project` from the previous chapter.
2.  **Clone Your Project:** Open your terminal or command prompt.
    ```bash
    git clone https://gitlab.com/<your-username>/my-first-gitlab-project.git
    cd my-first-gitlab-project
    ```
    (Replace `<your-username>` with your actual GitLab username.)
3.  **Create a New Branch:**
    ```bash
    git checkout -b add-welcome-message
    ```
4.  **Make Changes to a File:** Open the `README.md` file in your favorite text editor. Add a new line at the end:
    ```markdown
    # My First GitLab Project

    This is a simple project to explore GitLab features.

    Welcome to the project! We're learning GitLab CI/CD.
    ```
5.  **Stage and Commit Your Changes:**
    ```bash
    git add README.md
    git commit -m "Add welcome message to README"
    ```
6.  **Push Your New Branch to GitLab:**
    ```bash
    git push origin add-welcome-message
    ```
    You will see a message in your terminal providing a link to create a Merge Request.
7.  **Create a Merge Request in GitLab:**
    *   Go to your `my-first-gitlab-project` on GitLab.
    *   You should see a notification that a new branch was pushed and an option to "Create merge request". Click it.
    *   **Title:** `Add welcome message to README` (auto-filled)
    *   **Description:** `This MR adds a friendly welcome message to the project's README file.`
    *   Leave other options as default for now.
    *   Click "Create merge request".
8.  **Review the Merge Request:**
    *   On the MR page, explore the "Changes" tab to see the diff.
    *   Notice the "Pipelines" tab (it will be empty for now, but this is where CI/CD results would appear).
    *   Click the "Merge" button (you might need to approve it yourself if no other approvers are configured).

#### Assessment idea
1.  **Question:** A developer has just finished writing new code for a feature and wants to save their changes locally, creating a snapshot of the current state of the project with a descriptive message. Which Git command should they use after staging their files?
    *   A) `git push`
    *   B) `git pull`
    *   C) `git commit`
    *   D) `git clone`

    **Correct Answer:** C) `git commit`
    **Explanation:** After staging changes with `git add`, `git commit` is used to record the changes to the local repository, creating a new snapshot with an associated message. `git push` sends changes to a remote, `git pull` fetches and merges changes from a remote, and `git clone` creates a local copy of an entire repository.

2.  **Question:** What is the primary purpose of a Merge Request (or Pull Request) in a platform like GitLab?
    *   A) To immediately deploy code changes to production.
    *   B) To create a new branch for feature development.
    *   C) To propose changes from one branch to another, facilitating code review and automated checks before merging.
    *   D) To revert all previous commits on a branch.

    **Correct Answer:** C) To propose changes from one branch to another, facilitating code review and automated checks before merging.
    **Explanation:** Merge Requests are central to collaborative development. They provide a mechanism to discuss, review, and test proposed code changes from a feature branch before they are integrated into a target branch (like `main`), ensuring quality and preventing issues. They do not immediately deploy to production (that's a later CI/CD step), nor are they for creating new branches or reverting commits.

#### AI generation note
Create a 15-minute interactive coding demo. Start with a terminal showing `git clone` of a sample GitLab project (e.g., the `my-first-gitlab-project` from the hands-on activity). Then, demonstrate creating a new branch, modifying a file (`README.md`), using `git add` and `git commit` with a good commit message, and finally `git push` to the new branch. Transition to a screen recording of the GitLab UI to show how to create a Merge Request from the pushed branch, review the changes, and then merge it. Use a split-screen view for terminal/code editor and GitLab UI. Include a mini-challenge for learners to try creating their own branch and MR. Emphasize common mistakes like vague commit messages and forgetting to `git pull`.

---

## Module 2: Building Your First GitLab CI/CD Pipeline

This module guides you through the foundational steps of creating and managing your first CI/CD pipeline in GitLab. You'll learn the core syntax of the `.gitlab-ci.yml` file, how to define stages and jobs, and how to monitor your pipeline's execution.

### Chapter 2.1 — Understanding the `.gitlab-ci.yml` File

#### Learning objectives
*   Explain the fundamental YAML syntax used in GitLab CI/CD configuration.
*   Identify and define the purpose of core keywords like `stages`, `jobs`, `image`, and `script` within a `.gitlab-ci.yml` file.
*   Construct a basic, single-stage GitLab CI/CD pipeline to execute simple commands.
*   Understand the role of `before_script` and `after_script` for job setup and teardown.

#### Detailed lesson content
Welcome to the heart of GitLab CI/CD: the `.gitlab-ci.yml` file. This single YAML file, placed at the root of your project repository, is where you define your entire CI/CD pipeline. It tells GitLab Runner what to do, when to do it, and in what environment. Mastering this file is the cornerstone of effective CI/CD with GitLab. Let's start by understanding its structure and the YAML syntax it relies on.

YAML (YAML Ain't Markup Language) is a human-friendly data serialization standard. It's widely used for configuration files due to its readability. In `.gitlab-ci.yml`, indentation is crucial – it defines the structure and hierarchy of your configuration. Two spaces are the recommended indentation, and you should never use tabs, as this will lead to syntax errors. Key-value pairs define properties, and lists are represented by hyphens. For instance, `key: value` is a simple pair, while a list of items would look like:
```yaml
items:
  - item1
  - item2
```
A common mistake beginners make is mixing tabs and spaces or using an inconsistent indentation level. Always be meticulous with your spacing; a single misplaced character can break your entire pipeline.

At the highest level, a `.gitlab-ci.yml` file typically defines `stages` and `jobs`. Stages represent the different phases of your pipeline, such as `build`, `test`, `deploy`, or `security_scan`. They execute sequentially by default; all jobs in one stage must complete successfully before the next stage begins. You define your stages as a list:
```yaml
stages:
  - build
  - test
  - deploy
```
This tells GitLab that your pipeline has three distinct phases, and they will run in the order specified.

Within these stages, you define `jobs`. A job is the smallest unit of work in a pipeline. Each job is an independent task that executes a series of commands. Jobs are defined as top-level keys in your `.gitlab-ci.yml` file, and they belong to a specific stage. For example, a `build_job` might belong to the `build` stage. If multiple jobs are defined within the same stage, they run in parallel by default, which is a powerful feature for speeding up your pipelines.

Every job requires at least two fundamental keywords: `image` and `script`. The `image` keyword specifies the Docker image that the GitLab Runner should use to execute the job's commands. This ensures a consistent and isolated environment for your builds. For example, `image: node:16-alpine` would provide a Node.js 16 environment. The `script` keyword contains the actual shell commands that the job will execute. These commands are run inside the Docker container specified by `image`.

Let's look at a simple "Hello World" pipeline:
```yaml
stages:
  - greeting

hello_world_job:
  stage: greeting
  image: alpine/git:latest # A lightweight image with git and basic shell tools
  script:
    - echo "Hello, GitLab CI/CD!"
    - hostname
    - ls -la
```
In this example, we define a single stage called `greeting`. Then, we define a job named `hello_world_job` that belongs to this `greeting` stage. It uses the `alpine/git:latest` Docker image and simply echoes a message, prints the hostname of the runner, and lists the current directory's contents. When this pipeline runs, GitLab will spin up an `alpine/git` container, execute these three commands, and then tear down the container.

Beyond `image` and `script`, jobs can also utilize `before_script` and `after_script`. The `before_script` section defines commands that run *before* the main `script` commands for a job. This is ideal for common setup tasks, like installing dependencies or logging into a private registry. The `after_script` section defines commands that run *after* the main `script` commands, regardless of whether the `script` succeeded or failed. This is useful for cleanup operations or sending notifications.

Consider a simple Node.js project. Before building or testing, you typically need to install project dependencies. This is a perfect use case for `before_script`:
```yaml
stages:
  - build

node_build_job:
  stage: build
  image: node:16-alpine
  before_script:
    - echo "Installing Node.js dependencies..."
    - npm ci # 'ci' is preferred over 'install' in CI environments for reproducibility
  script:
    - echo "Running build command..."
    - npm run build
  after_script:
    - echo "Build job finished."
```
Here, `npm ci` runs before `npm run build`. If `npm ci` fails, the job fails immediately, and `npm run build` is not executed. The `after_script` will run regardless, logging a completion message. This structured approach helps keep your main `script` focused on the primary task and ensures setup and teardown are consistently handled. Understanding these basic building blocks is essential before we dive into more complex pipeline designs.

#### Key concepts
*   **YAML:** A human-friendly data serialization language used for configuration files. Indentation (using spaces, not tabs) is critical for defining structure.
*   **`.gitlab-ci.yml`:** The configuration file located at the root of a GitLab repository that defines the CI/CD pipeline.
*   **Stages:** Logical phases of a pipeline (e.g., `build`, `test`, `deploy`). Stages execute sequentially, and all jobs within a stage must complete before the next stage begins.
*   **Jobs:** The smallest unit of work in a pipeline. Jobs are defined within stages and execute commands in an isolated environment. Jobs within the same stage run in parallel by default.
*   **`image` keyword:** Specifies the Docker image that the GitLab Runner will use to execute a job, providing a consistent and isolated environment.
*   **`script` keyword:** Contains the actual shell commands that a job will execute.
*   **`before_script` keyword:** Defines commands that run before the main `script` of a job, typically for setup tasks like installing dependencies.
*   **`after_script` keyword:** Defines commands that run after the main `script` of a job (regardless of success or failure), typically for cleanup or notifications.

#### Hands-on activity
**Objective:** Create a basic `.gitlab-ci.yml` file to demonstrate a simple pipeline that echoes a message and lists files.

**Instructions:**
1.  In your GitLab project repository, create a new file named `.gitlab-ci.yml` at the root.
2.  Copy and paste the following content into the file.
3.  Commit and push the file to your repository's `main` branch.
4.  Navigate to the "CI/CD > Pipelines" section in your GitLab project to observe the pipeline execution.

**Starter Code:**
```yaml
# .gitlab-ci.yml
stages:
  - explore_environment

my_first_job:
  stage: explore_environment
  image: busybox:latest # A very small and simple Docker image
  before_script:
    - echo "Starting environment exploration..."
  script:
    - echo "Current working directory:"
    - pwd
    - echo "Files in current directory:"
    - ls -alF
    - echo "Environment variables:"
    - env | sort
  after_script:
    - echo "Environment exploration complete."
```
**Expected Outcome:** A pipeline with one stage (`explore_environment`) and one job (`my_first_job`) will run. The job logs will show the current directory, a list of files, and environment variables.

#### Assessment idea
1.  **Question:** Consider the following `.gitlab-ci.yml` snippet. If `job_a` and `job_b` are in the same `build` stage, and `job_c` is in the `test` stage, in what order will these jobs execute?
    ```yaml
    stages:
      - build
      - test

    job_a:
      stage: build
      image: alpine/git:latest
      script: echo "Running Job A"

    job_b:
      stage: build
      image: alpine/git:latest
      script: echo "Running Job B"

    job_c:
      stage: test
      image: alpine/git:latest
      script: echo "Running Job C"
    ```
    **Answer:** `job_a` and `job_b` will run in parallel because they are in the same `build` stage. Once *both* `job_a` and `job_b` have completed successfully, `job_c` will then start executing. This demonstrates the sequential nature of stages and the parallel execution of jobs within a stage.

2.  **Question:** You are trying to set up a job that compiles a C++ application. Before compilation, you need to install `g++`. Which section of the job configuration is the most appropriate place to put the `apt-get install g++` command?
    **Answer:** The `before_script` section is the most appropriate place. Commands in `before_script` run before the main `script` of a job, making it ideal for installing dependencies or performing other setup tasks required for the primary job script to succeed. This ensures the environment is ready before the core compilation commands are executed.

#### AI generation note
Create a 12-minute live coding video demonstrating the creation and execution of a basic `.gitlab-ci.yml` file. Start with an empty GitLab project. Show the process of adding the `.gitlab-ci.yml` file, committing it, and then navigating to the CI/CD > Pipelines section to see it run. Highlight YAML indentation rules and common mistakes (e.g., using tabs). Visually differentiate between `stages`, `jobs`, `image`, `script`, `before_script`, and `after_script` using code highlighting and on-screen text overlays. Use a split-screen view showing the code editor on the left and the GitLab UI (pipeline graph and job logs) on the right. Include a 2-question interactive mini-quiz on YAML syntax and keyword definitions at the end. Use high-contrast visuals and captions.

---

### Chapter 2.2 — Defining Stages and Jobs for a Build Pipeline

#### Learning objectives
*   Design and implement multi-stage CI/CD pipelines to organize complex workflows.
*   Understand and apply the `needs` keyword to define explicit job dependencies across stages.
*   Utilize `artifacts` to pass files and data between different jobs and stages in a pipeline.
*   Implement conditional job execution using `only`, `except`, or `rules` based on branches, tags, or file changes.

#### Detailed lesson content
Building upon our understanding of the basic `.gitlab-ci.yml` structure, it's time to construct more sophisticated pipelines that reflect real-world development workflows. Most applications require more than just a "hello world" echo; they need to be built, tested, and potentially deployed. This is where multi-stage pipelines become essential, allowing us to break down complex processes into manageable, sequential phases.

As we discussed, `stages` define the sequential flow of your pipeline. A typical pipeline might have `build`, `test`, and `deploy` stages. Jobs within the `build` stage would compile your code, jobs in the `test` stage would run unit and integration tests, and jobs in the `deploy` stage would push your application to a server. By default, all jobs within a single stage run in parallel. This parallelism is a huge advantage for speed, but it also means that jobs in different stages cannot directly access the workspace or files generated by jobs in previous stages without explicit configuration.

This brings us to `artifacts`. When a job completes, its workspace is typically discarded. If you need files generated by one job (e.g., compiled binaries, test reports) to be available to a subsequent job in a later stage, you must declare them as `artifacts`. The `artifacts` keyword specifies which files or directories from the job's workspace should be saved and passed to downstream jobs.
```yaml
build_app:
  stage: build
  image: node:16-alpine
  script:
    - npm ci
    - npm run build # This command generates build/index.js
  artifacts:
    paths:
      - build/ # Save the entire 'build' directory
    expire_in: 1 day # Artifacts will be available for 1 day
```
In this `build_app` job, after `npm run build` creates files in the `build/` directory, these files are packaged as artifacts. Any subsequent job in a later stage can then declare `dependencies: ['build_app']` to automatically download and extract these artifacts into its own workspace. A common mistake is forgetting to declare artifacts, leading to "file not found" errors in later stages. Remember, if a job needs something produced by another job, it must be an artifact!

While stages enforce a sequential flow, sometimes you need more granular control over job execution order, especially when jobs in a later stage depend on specific jobs in an *earlier* stage, but not necessarily *all* jobs in that earlier stage. This is where the `needs` keyword comes in. `needs` allows you to explicitly define a directed acyclic graph (DAG) of job dependencies, overriding the default stage-based execution. A job with `needs` will only start after all jobs listed in its `needs` array have successfully completed, even if those jobs are in a different stage.
```yaml
stages:
  - build
  - test
  - deploy

build_frontend:
  stage: build
  image: node:16-alpine
  script: npm run build:frontend
  artifacts:
    paths: [ 'dist/frontend' ]

build_backend:
  stage: build
  image: python:3.9-slim
  script: python setup.py build
  artifacts:
    paths: [ 'dist/backend' ]

test_frontend:
  stage: test
  image: node:16-alpine
  needs: ["build_frontend"] # Only needs frontend build artifacts
  script:
    - npm ci
    - npm run test:frontend
    - echo "Frontend tests passed!"

deploy_all:
  stage: deploy
  image: docker:latest
  needs: ["test_frontend", "build_backend"] # Needs both specific jobs
  script:
    - echo "Deploying frontend and backend..."
    - # ... deployment commands using artifacts from both jobs
```
Here, `test_frontend` explicitly `needs` `build_frontend`. `deploy_all` needs both `test_frontend` and `build_backend`. This allows `deploy_all` to start as soon as `test_frontend` and `build_backend` are done, without waiting for other potential jobs in the `test` stage.

Finally, you often want jobs to run only under specific conditions. For instance, you might only want to deploy to production when changes are merged into the `main` branch, or run specific tests only when certain files have changed. GitLab provides several keywords for conditional job execution:
*   **`only`:** Specifies when a job *should* run (e.g., `only: [main, merge_requests]`).
*   **`except`:** Specifies when a job *should not* run (e.g., `except: [tags]`).
These keywords can filter based on branches, tags, merge requests, or even changes to specific files.
For more advanced and flexible conditional logic, especially when combining multiple conditions, the `rules` keyword is preferred. `rules` allows you to define a list of rules, each with an `if` condition and a `when` action (e.g., `always`, `on_success`, `manual`, `never`).
```yaml
deploy_production:
  stage: deploy
  image: alpine/git:latest
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"' # Only run if on the main branch
      when: on_success
    - when: never # Otherwise, never run this job
  script:
    - echo "Deploying to production environment!"
```
This `deploy_production` job will only run if the commit is on the `main` branch. `rules` offers a powerful and expressive way to control when jobs are included in a pipeline.

By combining stages, artifacts, dependencies with `needs`, and conditional execution with `rules`, you can design robust and efficient CI/CD pipelines that perfectly match your project's requirements. Remember to think about what files need to persist between stages and how jobs relate to each other beyond just their stage order.

#### Key concepts
*   **Multi-stage Pipeline:** A pipeline structured into multiple sequential phases (stages) to organize complex CI/CD workflows (e.g., build, test, deploy).
*   **Parallel Job Execution:** By default, all jobs defined within the same stage run concurrently, speeding up pipeline execution.
*   **`artifacts` keyword:** Used to specify files or directories generated by a job that should be saved and passed on to subsequent jobs in later stages.
*   **`dependencies` keyword:** Used within a job to declare that it requires artifacts from a specific previous job.
*   **`needs` keyword:** Allows explicit definition of job dependencies, overriding the default stage-based sequential execution. A job with `needs` will only start after its specified dependencies have completed.
*   **`only` keyword:** Specifies the conditions (e.g., branches, tags) under which a job *should* be included in the pipeline.
*   **`except` keyword:** Specifies the conditions under which a job *should not* be included in the pipeline.
*   **`rules` keyword:** A more flexible and powerful alternative to `only`/`except` for defining complex conditional logic (`if`, `when`) for job inclusion in a pipeline.

#### Hands-on activity
**Objective:** Extend your previous `.gitlab-ci.yml` to include a `build` and `test` stage, passing build artifacts to the test stage, and using a simple `rules` condition.

**Instructions:**
1.  Open your existing `.gitlab-ci.yml` file.
2.  Modify the file to include a `build` stage and a `test` stage, defining artifacts and dependencies as shown below.
3.  Add a simple `rules` condition to the `test` job.
4.  Commit and push the changes.
5.  Observe the pipeline in GitLab, noting the flow between stages and how artifacts are passed.

**Starter Code (modify your existing `.gitlab-ci.yml`):**
```yaml
stages:
  - build
  - test
  - explore_environment # Keep this from previous chapter, but it will run after test

# Job from previous chapter, modified to run in its own stage
my_first_job:
  stage: explore_environment
  image: busybox:latest
  script:
    - echo "Current working directory:"
    - pwd
    - echo "Files in current directory:"
    - ls -alF

# New build job
build_application:
  stage: build
  image: alpine/git:latest
  script:
    - echo "Simulating application build..."
    - mkdir -p build_output
    - echo "Build artifact content" > build_output/app.txt
    - echo "Another build file" > build_output/config.txt
    - ls -la build_output/
  artifacts:
    paths:
      - build_output/ # This directory will be passed to subsequent jobs

# New test job
test_application:
  stage: test
  image: alpine/git:latest
  needs: ["build_application"] # This job needs artifacts from build_application
  rules:
    - if: '$CI_COMMIT_BRANCH == "main" || $CI_COMMIT_BRANCH == "develop"' # Only run on main or develop branch
      when: on_success
    - when: never # Otherwise, skip this job
  script:
    - echo "Simulating application tests..."
    - ls -la # Verify build_output directory is present
    - cat build_output/app.txt
    - echo "Tests passed for branch $CI_COMMIT_BRANCH!"
```
**Expected Outcome:**
*   A pipeline will run with `build`, `test`, and `explore_environment` stages.
*   The `build_application` job will create `build_output/app.txt` and `build_output/config.txt` and save them as artifacts.
*   The `test_application` job will run *only* if pushed to `main` or `develop` branch. It will successfully access and print the content of `build_output/app.txt` from the artifacts.
*   The `explore_environment` job will run after `test_application` completes.

#### Assessment idea
1.  **Question:** You have a `build` stage with two jobs (`build_frontend`, `build_backend`) and a `test` stage with two jobs (`test_frontend`, `test_backend`). By default, how will these jobs execute relative to each other?
    **Answer:** `build_frontend` and `build_backend` will run in parallel within the `build` stage. Once *both* of them complete successfully, the `test` stage will begin. Then, `test_frontend` and `test_backend` will run in parallel within the `test` stage. This demonstrates the default parallel execution within stages and sequential execution between stages.

2.  **Question:** A job named `deploy_to_staging` needs to use a compiled binary located at `target/app.jar` which is produced by a previous job named `compile_java`. How would you configure the `compile_java` job to make `app.jar` available, and how would you configure `deploy_to_staging` to access it?
    **Answer:**
    *   **For `compile_java`:** You would use the `artifacts` keyword to specify the path to the compiled binary.
        ```yaml
        compile_java:
          stage: build
          image: maven:3.8.5-jdk-11
          script:
            - mvn clean package # This creates target/app.jar
          artifacts:
            paths:
              - target/app.jar # Specify the file to save
        ```
    *   **For `deploy_to_staging`:** You would use the `needs` keyword to declare a dependency on `compile_java`, which will automatically download and extract its artifacts into the `deploy_to_staging` job's workspace.
        ```yaml
        deploy_to_staging:
          stage: deploy
          image: alpine/git:latest
          needs: ["compile_java"] # Declare dependency to get artifacts
          script:
            - ls -la target/ # Verify app.jar is present
            - echo "Deploying target/app.jar..."
            - # ... deployment commands
        ```

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Start with the `.gitlab-ci.yml` from Chapter 2.1. Gradually add `build` and `test` stages. Demonstrate adding `artifacts` to the build job and `needs` to the test job. Show the pipeline graph in GitLab UI updating with the new stages and dependencies. Introduce `rules` for conditional execution, showing how a job might be skipped based on the branch. Use clear visual cues (arrows, highlights) to explain the flow of artifacts and dependencies. Include a code editor on the left and GitLab UI on the right. The interactive element will be a guided coding exercise where learners modify a provided template to add a `deploy` stage that `needs` both `build` and `test` artifacts. Ensure alt text for any diagrams.

---

### Chapter 2.3 — Running and Monitoring Your Pipeline

#### Learning objectives
*   Identify different ways to trigger a GitLab CI/CD pipeline, including automatic and manual methods.
*   Navigate the GitLab UI to monitor pipeline execution, view job statuses, and understand the pipeline graph.
*   Interpret job logs to diagnose failures and identify common issues.
*   Apply basic debugging strategies to troubleshoot failed CI/CD jobs effectively.

#### Detailed lesson content
Once you've defined your `.gitlab-ci.yml` file, the next crucial step is to run and monitor your pipeline. Understanding how pipelines are triggered and how to interpret their output is key to a smooth CI/CD workflow.

The most common way a pipeline is triggered is automatically by a `git push` to your repository. Whenever you commit changes and push them to a branch, GitLab automatically detects the `.gitlab-ci.yml` file and starts a new pipeline run for that commit. Pipelines can also be triggered by creating a new merge request, pushing a tag, or on a schedule. For specific scenarios, you might want to trigger a pipeline manually. This can be done directly from the GitLab UI (CI/CD > Pipelines > Run pipeline) or by adding a `when: manual` rule to a job, allowing it to be started manually from the pipeline view. This is particularly useful for sensitive operations like production deployments that require human approval.
```yaml
deploy_to_production:
  stage: deploy
  image: alpine/git:latest
  script:
    - echo "Initiating production deployment..."
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual # This job will only run if manually triggered
      allow_failure: false # If it fails, the pipeline will be marked as failed
    - when: never # Otherwise, don't include this job
```
In this example, the `deploy_to_production` job will only appear in pipelines on the `main` branch and will require a manual click to start. `allow_failure: false` ensures that if this critical deployment job fails, the entire pipeline is marked as failed, providing clear feedback.

Monitoring your pipelines is primarily done through the GitLab UI. Navigate to your project, then select "CI/CD" from the left sidebar, and then "Pipelines". Here, you'll see a list of all pipeline runs, their status (pending, running, success, failed, canceled, skipped), and the branch/commit they belong to. Clicking on a specific pipeline will take you to the pipeline details page, which provides a visual graph of all stages and jobs. This graph is incredibly helpful for quickly understanding the flow and identifying which jobs are running, waiting, or have failed. Each job in the graph is clickable, leading you to its individual job page.

The job page is where you'll spend most of your debugging time. It displays the job's current status, the runner it executed on, and most importantly, the **job log**. The job log is a detailed output of every command executed by the job, including their standard output and standard error. When a job fails, the log will typically show the command that failed and any error messages produced.
Common failure points include:
*   **Syntax errors in `.gitlab-ci.yml`:** GitLab will usually catch these before the pipeline even starts, showing a "YAML linting failed" error.
*   **Incorrect commands in `script`:** A typo in `npm install` or an incorrect path will cause the shell command to fail.
*   **Missing dependencies:** If your `image` doesn't contain a required tool (e.g., `git`, `docker`, `python`) or your `before_script` fails to install a package, subsequent commands will fail.
*   **Environment issues:** Incorrect environment variables, network connectivity problems, or insufficient permissions on the runner.
*   **Artifacts issues:** Forgetting to declare artifacts or incorrect `dependencies` leading to missing files in downstream jobs.

Debugging a failed job involves carefully reading the job log from bottom to top, looking for error messages. Often, the last few lines before the job fails will contain the critical information. You can also add `echo` statements to your `script` to print variable values or `ls -la` to inspect file paths at different points in the job. For shell scripts, adding `set -ex` at the beginning of your `script` can be invaluable. `set -e` ensures that the script exits immediately if any command fails, and `set -x` prints each command before it's executed, providing a detailed trace of what the script was trying to do.
```yaml
debug_job:
  stage: debug
  image: alpine/git:latest
  script:
    - set -ex # Exit on error, print commands
    - echo "Debugging environment..."
    - ls -la /app # Check if /app directory exists
    - cat /app/config.txt || true # Try to read a file, continue if not found
    - my_non_existent_command # This command will fail and stop the script
    - echo "This line will not be reached."
```
In this example, `my_non_existent_command` will cause the job to fail, and `set -ex` will ensure the failure is immediate and clearly logged.

Safety Note: When debugging or configuring pipelines, **never commit sensitive information directly into your `.gitlab-ci.yml` file or your repository**. This includes API keys, database credentials, or private tokens. Instead, use GitLab CI/CD variables. These variables can be defined at the project, group, or instance level, and can be masked or protected to prevent accidental exposure in logs. We'll explore CI/CD variables in more detail in a later module, but it's a critical safety practice to adopt from the start.

By actively monitoring your pipelines, understanding their states, and effectively using job logs for debugging, you'll gain the confidence to build and maintain robust CI/CD workflows. It's an iterative process: write, run, observe, debug, and refine.

#### Key concepts
*   **Pipeline Trigger:** The event that initiates a pipeline run (e.g., `git push`, merge request, tag push, schedule, manual trigger).
*   **Manual Job:** A job configured with `when: manual` that requires a user to explicitly start it from the GitLab UI.
*   **Pipeline States:** The various statuses a pipeline can have (e.g., `pending`, `running`, `success`, `failed`, `canceled`, `skipped`).
*   **GitLab UI (CI/CD > Pipelines):** The primary interface for viewing pipeline lists, detailed pipeline graphs, and individual job pages.
*   **Job Log:** The detailed output of commands executed by a job, including standard output and error messages, crucial for debugging.
*   **Debugging Strategies:** Techniques like reading logs carefully, adding `echo` statements, using `ls -la` to inspect files, and `set -ex` in shell scripts to trace execution and identify failures.
*   **CI/CD Variables:** Securely stored variables in GitLab (project/group level) used to store sensitive information or configuration values, preventing their exposure in `.gitlab-ci.yml` or logs.

#### Hands-on activity
**Objective:** Trigger a pipeline manually, observe its execution, and then intentionally introduce an error to practice debugging using job logs.

**Instructions:**
1.  Open your `.gitlab-ci.yml` file from the previous chapter.
2.  Add a new job that is configured for manual execution and includes a deliberate error.
3.  Commit and push your changes.
4.  Go to "CI/CD > Pipelines" in GitLab. You should see a new pipeline.
5.  Find the manual job and click the "play" button to start it.
6.  Observe it fail. Click on the failed job to view its logs and identify the error.
7.  Correct the error in your `.gitlab-ci.yml` and push again to see a successful run.

**Starter Code (add this new job to your existing `.gitlab-ci.yml`):**
```yaml
# ... (existing stages and jobs)

manual_debug_job:
  stage: explore_environment # Or a new 'debug' stage if you prefer
  image: alpine/git:latest
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual # This job must be manually triggered
      allow_failure: true # Allow the pipeline to pass even if this job fails
    - when: never
  script:
    - echo "Starting manual debug job..."
    - ls -la /non_existent_directory # This command will intentionally fail
    - echo "This line should not be reached if the above fails."
    - echo "Manual debug job finished."
```
**Expected Outcome:**
*   A new pipeline will be created upon push.
*   The `manual_debug_job` will appear with a "play" icon.
*   Clicking the play icon will start the job, which will then fail.
*   By inspecting the job log, you'll see an error message similar to `ls: /non_existent_directory: No such file or directory`.
*   After correcting the `ls` command (e.g., `ls -la .` or removing the line), the job should pass on a subsequent manual run.

#### Assessment idea
1.  **Question:** A job in your pipeline fails with the error "command not found: npm". You've specified `image: alpine/git:latest` for this job. What is the most likely cause of this failure, and how would you fix it?
    **Answer:** The most likely cause is that the `alpine/git:latest` Docker image does not include Node.js or `npm`. This image is lightweight and primarily for Git operations. To fix this, you should change the `image` keyword to one that includes Node.js, such as `node:16-alpine` or `node:lts`. This ensures the necessary tools are available in the job's execution environment.

2.  **Question:** You have a `deploy_to_production` job that should only run on the `main` branch and requires human approval. How would you configure this job in `.gitlab-ci.yml` to achieve both conditions?
    **Answer:** You would use the `rules` keyword to combine both conditions:
    ```yaml
    deploy_to_production:
      stage: deploy
      image: alpine/git:latest
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"' # Condition 1: Only on main branch
          when: manual # Condition 2: Requires manual trigger
          allow_failure: false # Optional: Make pipeline fail if this job fails
        - when: never # Do not run otherwise
      script:
        - echo "Deploying to production..."
    ```
    This configuration ensures the job is only included in pipelines on the `main` branch and will appear as a manual job in the GitLab UI, requiring a user to click "play" to execute it.

#### AI generation note
Create a 10-minute screen recording video walkthrough of the GitLab UI. Start by showing a successful pipeline, highlighting the pipeline list, graph view, and a successful job log. Then, demonstrate a failed pipeline using the `manual_debug_job` from the hands-on activity. Show how to navigate to the failed job's log, scroll through it, and pinpoint the error message. Explain the `set -ex` command visually with a split-screen showing the code and the resulting verbose log output. Include a segment on how to manually trigger jobs and retry failed jobs. Conclude with a reflection prompt asking learners to identify three common debugging tips. Ensure high-contrast visuals and clear audio.

---

## Module 3: Advanced Pipeline Configuration and Optimization

**Goal:** Equip learners with the skills to design, optimize, and secure complex GitLab CI/CD pipelines, leveraging advanced features for efficient and robust automation.

### Chapter 3.1 — Leveraging Variables and Caching for Efficient Pipelines

#### Learning objectives
*   Identify and utilize different types of GitLab CI/CD variables to manage pipeline configuration.
*   Implement protected and masked variables to securely handle sensitive information within pipelines.
*   Configure pipeline caching strategies to significantly reduce job execution times and resource consumption.
*   Distinguish between effective and ineffective caching scenarios and common pitfalls.

#### Detailed lesson content
As you begin to build more sophisticated CI/CD pipelines, you'll quickly encounter the need to manage configuration dynamically and optimize execution speed. This is where GitLab CI/CD variables and caching become indispensable tools. Variables allow you to store and reuse values throughout your pipeline, making your `.gitlab-ci.yml` files more flexible, readable, and maintainable. Imagine needing to update a version number, an API endpoint, or a deployment target across multiple jobs; without variables, you'd be manually editing many lines. With variables, you define it once and reference it everywhere.

GitLab CI/CD offers several types of variables, each serving a specific purpose. **Predefined variables** are automatically provided by GitLab for every pipeline, giving you access to crucial information like the current branch (`CI_COMMIT_REF_NAME`), commit SHA (`CI_COMMIT_SHA`), project ID (`CI_PROJECT_ID`), and many more. These are incredibly useful for logging, tagging builds, or conditional logic. For instance, you might use `CI_COMMIT_SHORT_SHA` to tag a Docker image with a unique identifier for easier tracking. Then, you have **custom variables**, which you define yourself. These can be set directly in your `.gitlab-ci.yml` file, within the project's CI/CD settings in the GitLab UI, or at the group level. Defining them in the UI or at the group level is particularly powerful because it allows you to manage environment-specific configurations (e.g., `STAGING_URL`, `PRODUCTION_DB_HOST`) without hardcoding them into your repository, which is a significant security and maintenance advantage.

When dealing with sensitive information like API keys, database passwords, or secret tokens, simply defining them as custom variables is not enough. You must use **protected variables** and **masked variables**. A protected variable is only exposed to jobs running on protected branches or tags, typically your `main` or `release` branches, preventing accidental exposure in feature branch pipelines. A masked variable takes security a step further by obscuring its value in job logs, replacing it with `[MASKED]` if it appears. This is crucial because even if a pipeline fails, an unmasked secret could be visible in the logs to anyone with access. Always remember to mark sensitive variables as both protected and masked. Failure to do so is a common security oversight that can lead to credential leakage.

```yaml
variables:
  # A regular custom variable
  BUILD_VERSION: "1.0.0"

  # A variable defined in the UI, marked as 'protected' and 'masked'
  # SECRET_API_KEY: "super-secret-value-from-ui"

build_job:
  stage: build
  script:
    - echo "Building version $BUILD_VERSION"
    - echo "Using API key: $SECRET_API_KEY" # This will be masked in logs if configured correctly
```

Beyond variables, **caching** is your best friend for optimizing pipeline speed. Many build processes involve downloading dependencies (e.g., `npm install`, `pip install`, `bundle install`) or compiling code that hasn't changed. These operations can be time-consuming. Caching allows GitLab Runner to store specific directories or files from one job execution and reuse them in subsequent jobs, or even across different pipelines, significantly reducing execution time. The `cache` keyword in your `.gitlab-ci.yml` is used to define what to cache. You specify `paths` to the directories or files you want to store and a `key` to identify the cache. A common strategy is to use a key based on a dependency file's checksum (e.g., `package-lock.json` for Node.js, `Gemfile.lock` for Ruby) so that the cache is only invalidated and rebuilt when dependencies actually change.

```yaml
cache:
  key: ${CI_COMMIT_REF_SLUG} # Cache per branch
  paths:
    - node_modules/
  policy: pull-push # Default, but good to be explicit

install_dependencies:
  stage: build
  script:
    - npm install
  cache:
    key:
      files:
        - package-lock.json # Cache key depends on this file
    paths:
      - node_modules/
    policy: pull-push # Pull cache before job, push after
```

The `policy` attribute for caching is also important: `pull-push` (the default) means the cache is downloaded before the job and uploaded after; `pull` means it's only downloaded; `push` means it's only uploaded (useful for creating a cache in one job for others to use). Choosing the right `key` is crucial. If your key is too broad (e.g., always `master`), unrelated changes might invalidate the cache for everyone. If it's too specific (e.g., `CI_COMMIT_SHA`), you might not get any cache hits at all. A common mistake is caching large, frequently changing directories that offer little benefit or even slow down the pipeline due to upload/download times. Be selective about what you cache and test its effectiveness. Also, remember that caches are shared across jobs with the same key, but they are not shared across different runners unless they use a shared cache backend. When working with Docker images, consider using Docker layer caching instead of file system caching for dependencies, as it's often more efficient for containerized builds.

#### Key concepts
*   **Variables:** Dynamic placeholders used to store and reuse values within a CI/CD pipeline.
*   **Predefined Variables:** Variables automatically provided by GitLab CI/CD (e.g., `CI_COMMIT_REF_NAME`, `CI_PROJECT_DIR`).
*   **Custom Variables:** User-defined variables, set in `.gitlab-ci.yml`, project/group settings, or CI/CD environment.
*   **Protected Variables:** Custom variables only exposed to jobs running on protected branches or tags, enhancing security.
*   **Masked Variables:** Custom variables whose values are hidden in job logs, preventing sensitive data exposure.
*   **Caching:** A mechanism to store and reuse directories or files between CI/CD jobs to speed up execution by avoiding redundant work (e.g., `node_modules`, `vendor/bundle`).
*   **Cache Key:** An identifier used to determine if a cache is valid and should be reused. Often based on dependency file checksums.
*   **Cache Policy:** Defines whether a job should pull a cache, push a cache, or both (`pull-push`, `pull`, `push`).

#### Hands-on activity
**Objective:** Create a pipeline that uses a custom variable for a build version and caches `node_modules` based on `package-lock.json`.

**Instructions:**
1.  Create a new GitLab project or use an existing one.
2.  Add a simple `package.json` and `package-lock.json` to the root of your repository (e.g., a basic Node.js project).
    ```json
    // package.json
    {
      "name": "my-app",
      "version": "1.0.0",
      "description": "A simple Node.js app",
      "main": "index.js",
      "scripts": {
        "test": "echo \"No tests specified\" && exit 0"
      },
      "dependencies": {
        "express": "^4.17.1"
      }
    }
    ```
3.  Create a `.gitlab-ci.yml` file with the following content.
4.  Commit and push the changes.
5.  Observe the pipeline execution, specifically how the `BUILD_VERSION` is used and how the cache is created and potentially reused on subsequent runs (if you run the pipeline again without changing `package-lock.json`).

**Starter Code (`.gitlab-ci.yml`):**
```yaml
variables:
  BUILD_VERSION: "1.0.0" # Define a custom variable

cache:
  key:
    files:
      - package-lock.json # Cache key depends on package-lock.json
    prefix: npm-cache-
  paths:
    - node_modules/
  policy: pull-push

stages:
  - install
  - build
  - test

install_dependencies:
  stage: install
  script:
    - echo "Installing dependencies for build version $BUILD_VERSION..."
    - npm install
  artifacts:
    expire_in: 1 day # Keep artifacts for debugging if needed
    paths:
      - node_modules/ # Although cached, artifacts ensure availability for subsequent jobs if cache fails

build_app:
  stage: build
  script:
    - echo "Building application (version $BUILD_VERSION)..."
    - # Simulate a build step, e.g., 'npm run build' if you had one
    - echo "Application built successfully."
  needs: ["install_dependencies"] # Ensure install runs first

test_app:
  stage: test
  script:
    - echo "Running tests for version $BUILD_VERSION..."
    - npm test
  needs: ["build_app"]
```

#### Assessment idea
1.  **Question:** You have a sensitive API key, `PRODUCTION_API_KEY`, that should only be available to deployment jobs on your `main` branch and must not be visible in job logs. How would you configure this variable in GitLab CI/CD?
    *   A) Define it in `.gitlab-ci.yml` under `variables:` as `PRODUCTION_API_KEY: "mysecret"`.
    *   B) Define it in the project's CI/CD settings, mark it as "Protected" and "Masked".
    *   C) Define it as a regular custom variable in the UI, but manually censor it from logs.
    *   D) Store it directly in a file in the repository and `cat` it in the script.

    **Correct Answer:** B) Define it in the project's CI/CD settings, mark it as "Protected" and "Masked".
    **Explanation:** Defining sensitive variables directly in `.gitlab-ci.yml` is a security risk as it's stored in plain text in your repository. Manually censoring logs is impractical and error-prone. Storing secrets in the repository is a major security vulnerability. GitLab's CI/CD settings allow you to define variables in a secure, encrypted manner. Marking it "Protected" restricts its availability to protected branches, and "Masked" prevents its value from appearing in job logs, fulfilling both requirements.

2.  **Question:** A pipeline job takes a long time because it re-downloads all Python dependencies (`pip install -r requirements.txt`) every time. You want to cache these dependencies. Which of the following `cache` configurations is most appropriate for `requirements.txt`?

    ```yaml
    # Option 1
    cache:
      key: "python-deps"
      paths:
        - .venv/

    # Option 2
    cache:
      key: ${CI_COMMIT_REF_SLUG}
      paths:
        - .venv/

    # Option 3
    cache:
      key:
        files:
          - requirements.txt
      paths:
        - .venv/

    # Option 4
    cache:
      key: ${CI_PIPELINE_ID}
      paths:
        - .venv/
    ```

    **Correct Answer:** Option 3
    **Explanation:**
    *   Option 1 (`key: "python-deps"`) uses a static key. This means the cache will never be invalidated, even if `requirements.txt` changes, leading to stale dependencies.
    *   Option 2 (`key: ${CI_COMMIT_REF_SLUG}`) creates a separate cache for each branch. While better than a static key, it will rebuild the cache on every commit within a branch, even if `requirements.txt` hasn't changed, leading to unnecessary cache invalidations.
    *   Option 3 (`key: files: - requirements.txt`) is the most appropriate. The cache key is derived from the content of `requirements.txt`. This means the cache will only be invalidated and rebuilt if `requirements.txt` itself changes, ensuring dependencies are only re-downloaded when necessary, providing optimal performance.
    *   Option 4 (`key: ${CI_PIPELINE_ID}`) creates a unique cache for every single pipeline run, effectively negating the benefit of caching as it will always be a cache miss.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated diagram illustrating the flow of variables (predefined, custom, protected/masked) through a pipeline. Then, transition to a live coding demo in a split-screen view: `.gitlab-ci.yml` on the left, GitLab UI CI/CD settings on the right. Show how to define a `BUILD_VERSION` variable in `.gitlab-ci.yml` and a `SECRET_TOKEN` as a protected/masked variable in the UI. Demonstrate how `SECRET_TOKEN` is masked in job logs. Next, explain caching with a visual showing `node_modules` being cached and then reused. Include a practical example of a `cache` configuration using `package-lock.json` as the key. Conclude with a 2-question interactive quiz on variable security and cache key strategies. Ensure captions and high-contrast visuals for accessibility.

---

### Chapter 3.2 — Understanding Artifacts, Dependencies, and Directed Acyclic Graphs (DAG)

#### Learning objectives
*   Explain the purpose and proper configuration of artifacts for sharing data between pipeline jobs.
*   Differentiate between `dependencies` and `needs` keywords for controlling job execution order and data flow.
*   Design efficient pipelines by leveraging Directed Acyclic Graphs (DAGs) to maximize parallelization and minimize feedback loops.
*   Identify common pitfalls related to artifact management and dependency definition in complex pipelines.

#### Detailed lesson content
As pipelines grow in complexity, jobs often need to share data or results with subsequent jobs. For instance, a `build` job might compile an executable, and a `test` job needs that executable to run tests. This is where **artifacts** come into play. Artifacts are files or directories produced by a job that GitLab stores and makes available for download or for use by later jobs in the same pipeline. They are crucial for maintaining the flow of data through your CI/CD process.

You define artifacts using the `artifacts` keyword within a job. You specify `paths` to the files or directories you want to save. It's also good practice to define `expire_in` to automatically remove old artifacts, preventing your storage from growing indefinitely. For example, a build job might compile a Java `.jar` file and save it as an artifact. A later deployment job can then retrieve this `.jar` file to deploy it to a server. Without artifacts, each job would have to re-run the build step, which is inefficient and prone to inconsistencies.

```yaml
build_backend:
  stage: build
  script:
    - echo "Compiling Java application..."
    - ./gradlew build
  artifacts:
    paths:
      - build/libs/*.jar # Save compiled JAR files
    expire_in: 1 week # Keep artifacts for 1 week
    reports:
      junit: build/test-results/test/**/TEST-*.xml # Example of a JUnit report artifact
```

Beyond simply saving files, artifacts also facilitate **dependencies** between jobs. By default, jobs in a later stage automatically download all artifacts from all jobs in previous stages. This implicit dependency can be convenient but also inefficient if a job only needs artifacts from a specific preceding job. This is where the `dependencies` keyword becomes useful. You can explicitly list the names of jobs from which the current job needs artifacts. This fine-grained control prevents unnecessary artifact downloads, speeding up job execution, especially in large pipelines with many stages and jobs.

However, `dependencies` only work within the strict stage order. If `job_C` in `stage_C` needs an artifact from `job_A` in `stage_A`, but `job_B` in `stage_B` also needs `job_A`'s artifact, `job_B` will run after `job_A` and before `job_C`. This linear progression can limit parallelization.

To truly unlock parallelization and create more flexible execution graphs, GitLab CI/CD introduces the concept of **Directed Acyclic Graphs (DAGs)** using the `needs` keyword. Traditionally, jobs in GitLab CI/CD execute stage by stage: all jobs in stage 1 must complete before any job in stage 2 starts, and so on. This creates a linear flow. A DAG, on the other hand, allows you to define explicit relationships between jobs, regardless of their stage. A job can `need` another job, meaning the "needing" job will only start after the "needed" job completes successfully, and it will automatically download the artifacts from the "needed" job. The key benefit here is that jobs that don't depend on each other can run in parallel, even if they are in different stages. This drastically reduces overall pipeline execution time and provides faster feedback.

Consider a scenario where you have a `build_frontend` job, a `build_backend` job, and a `deploy_app` job. `deploy_app` needs artifacts from both `build_frontend` and `build_backend`. Without `needs`, `build_frontend` and `build_backend` would likely be in the same `build` stage, and `deploy_app` in a `deploy` stage. They would run sequentially if placed in different stages, or `deploy_app` would wait for both to finish if in the same stage. With `needs`, you can declare:

```yaml
stages:
  - build
  - test
  - deploy

build_frontend:
  stage: build
  script: echo "Building frontend..."
  artifacts:
    paths:
      - frontend/dist/

build_backend:
  stage: build
  script: echo "Building backend..."
  artifacts:
    paths:
      - backend/target/

run_frontend_tests:
  stage: test
  script: echo "Running frontend tests..."
  needs: ["build_frontend"] # Only needs frontend artifacts

run_backend_tests:
  stage: test
  script: echo "Running backend tests..."
  needs: ["build_backend"] # Only needs backend artifacts

deploy_app:
  stage: deploy
  script:
    - echo "Deploying app..."
    - ls frontend/dist/ # Access frontend artifacts
    - ls backend/target/ # Access backend artifacts
  needs: ["build_frontend", "build_backend", "run_frontend_tests", "run_backend_tests"] # Waits for all these to complete
```

In this example, `run_frontend_tests` and `run_backend_tests` can run in parallel as soon as their respective build jobs are done, even if they are in the `test` stage and the build jobs are in the `build` stage. `deploy_app` then waits for all necessary preceding jobs to finish. This explicit DAG structure allows for maximum parallelization and a much more efficient pipeline flow.

Common mistakes include not defining `expire_in` for artifacts, leading to excessive storage usage. Another common error is using `dependencies` when `needs` would provide better parallelization, or conversely, overusing `needs` in simple pipelines where implicit stage order is sufficient and clearer. Always consider the data flow and execution order carefully. Large artifacts can also slow down pipelines due to significant upload/download times; only artifact what is truly necessary.

#### Key concepts
*   **Artifacts:** Files or directories generated by a CI/CD job that are saved and made available for download or for use by subsequent jobs in the same pipeline.
*   **`artifacts` keyword:** Used in `.gitlab-ci.yml` to define which files/directories to save as artifacts, their expiration, and optional reports.
*   **`expire_in`:** An artifact setting that defines how long artifacts should be retained before automatic deletion.
*   **`dependencies` keyword:** Used within a job to explicitly declare that it requires artifacts from specific preceding jobs within the same or earlier stages.
*   **Directed Acyclic Graph (DAG):** A graph data structure where nodes represent jobs and edges represent dependencies, with no circular dependencies. In CI/CD, it defines the execution order of jobs.
*   **`needs` keyword:** A powerful GitLab CI/CD feature that allows jobs to explicitly define dependencies on other jobs, overriding the default stage-based execution order and enabling parallel execution across stages.

#### Hands-on activity
**Objective:** Create a pipeline that builds a simple frontend and backend, runs tests, and then deploys, demonstrating the use of `artifacts` and `needs` for parallelization.

**Instructions:**
1.  Create a new GitLab project.
2.  Add two empty directories: `frontend/` and `backend/`.
3.  Inside `frontend/`, create a dummy file `index.html`.
4.  Inside `backend/`, create a dummy file `server.js`.
5.  Create a `.gitlab-ci.yml` with the following content.
6.  Commit and push the changes.
7.  Observe the pipeline graph in GitLab CI/CD. Notice how `build_frontend` and `build_backend` run in parallel, and how `test_frontend` and `test_backend` also run in parallel after their respective build jobs complete. Finally, `deploy_app` waits for all of them.

**Starter Code (`.gitlab-ci.yml`):**
```yaml
stages:
  - build
  - test
  - deploy

# Job to build the frontend
build_frontend:
  stage: build
  script:
    - echo "Simulating frontend build..."
    - mkdir -p frontend/dist
    - cp frontend/index.html frontend/dist/index.html # Simulate output
  artifacts:
    paths:
      - frontend/dist/ # Save frontend build output
    expire_in: 1 day

# Job to build the backend
build_backend:
  stage: build
  script:
    - echo "Simulating backend build..."
    - mkdir -p backend/target
    - echo "Backend compiled" > backend/target/app.log # Simulate output
  artifacts:
    paths:
      - backend/target/ # Save backend build output
    expire_in: 1 day

# Job to test the frontend
test_frontend:
  stage: test
  script:
    - echo "Running frontend tests..."
    - ls frontend/dist/ # Verify artifact from build_frontend is available
    - echo "Frontend tests passed."
  needs: ["build_frontend"] # This job needs artifacts from build_frontend

# Job to test the backend
test_backend:
  stage: test
  script:
    - echo "Running backend tests..."
    - ls backend/target/ # Verify artifact from build_backend is available
    - echo "Backend tests passed."
  needs: ["build_backend"] # This job needs artifacts from build_backend

# Job to deploy the application
deploy_app:
  stage: deploy
  script:
    - echo "Deploying application..."
    - echo "Accessing frontend artifacts:"
    - ls frontend/dist/
    - echo "Accessing backend artifacts:"
    - ls backend/target/
    - echo "Deployment complete."
  needs: # This job needs all preceding build and test jobs to complete
    - "build_frontend"
    - "build_backend"
    - "test_frontend"
    - "test_backend"
```

#### Assessment idea
1.  **Question:** You have a pipeline with three jobs: `compile_code` (stage: `build`), `run_unit_tests` (stage: `test`), and `deploy_to_staging` (stage: `deploy`). The `run_unit_tests` job needs the compiled executable from `compile_code`. The `deploy_to_staging` job needs the compiled executable from `compile_code` and also the test reports from `run_unit_tests`. How should you configure the `deploy_to_staging` job to ensure it gets all necessary artifacts and only runs after both preceding jobs successfully complete, while maximizing parallelization?

    **Correct Answer:**
    ```yaml
    deploy_to_staging:
      stage: deploy
      script:
        - echo "Deploying..."
        - ls compiled_executable/ # Assuming compile_code artifacts this
        - ls test_reports/ # Assuming run_unit_tests artifacts this
      needs:
        - job: compile_code
          artifacts: true
        - job: run_unit_tests
          artifacts: true
    ```
    **Explanation:** Using `needs` is crucial here. By specifying `needs: ["compile_code", "run_unit_tests"]` (or the more explicit `job: ... artifacts: true` syntax), you ensure that `deploy_to_staging` will only start after both `compile_code` and `run_unit_tests` have successfully finished. Furthermore, by implicitly or explicitly setting `artifacts: true` for each `needs` entry, the necessary artifacts from both jobs will be downloaded and available in the `deploy_to_staging` job's working directory. This approach also allows `compile_code` and `run_unit_tests` to run as soon as their own dependencies are met, potentially in parallel with other jobs not shown, optimizing the overall pipeline flow better than strict stage-based `dependencies`.

2.  **Question:** A pipeline has a `build_docker_image` job that creates a Docker image and saves its ID as an artifact. A subsequent `scan_image` job needs this Docker image ID to perform a security scan. Which of the following is the most efficient way to pass the Docker image ID from `build_docker_image` to `scan_image`?
    *   A) Store the Docker image ID in a project variable and update it manually.
    *   B) Use `artifacts:paths:` in `build_docker_image` to save a file containing the ID, and then use `dependencies:` in `scan_image` to retrieve it.
    *   C) Print the Docker image ID to standard output in `build_docker_image` and then parse the logs in `scan_image`.
    *   D) Rebuild the Docker image in `scan_image` to get its ID again.

    **Correct Answer:** B) Use `artifacts:paths:` in `build_docker_image` to save a file containing the ID, and then use `dependencies:` (or `needs:`) in `scan_image` to retrieve it.
    **Explanation:**
    *   A) Manual variable updates are not automated and prone to errors.
    *   C) Parsing logs is fragile and not a robust way to pass data between jobs.
    *   D) Rebuilding the image is highly inefficient and defeats the purpose of CI/CD.
    *   B) This is the standard and most efficient approach. The `build_docker_image` job can write the image ID to a small file (e.g., `image_id.txt`) and declare this file as an artifact. The `scan_image` job, by declaring a `needs` or `dependencies` relationship with `build_docker_image`, will automatically download this artifact, making `image_id.txt` available in its working directory to read the ID. This ensures reliable, automated, and efficient data transfer.

#### AI generation note
Produce a 10-minute animated explainer video combined with a live coding demonstration. Start with an animation illustrating the concept of artifacts being passed between jobs, showing files being "picked up" and "dropped off." Then, transition to a split-screen view: `.gitlab-ci.yml` on the left, and the GitLab pipeline graph on the right. First, demonstrate `artifacts:paths:` and `expire_in`. Next, introduce `dependencies` with a simple example. The core of the video should then focus on `needs`, visually showing how `needs` breaks the strict stage order to create a DAG, allowing parallel execution paths. Use a clear, color-coded diagram to show jobs running in parallel versus sequentially. End with a hands-on challenge prompt for learners to modify an existing pipeline to use `needs` for parallelizing build and test jobs. Ensure clear voiceover and text overlays for key YAML keywords.

---

### Chapter 3.3 — Conditional Job Execution with `rules` and `only/except`

#### Learning objectives
*   Understand the limitations of `only`/`except` and when to use them versus the more powerful `rules` keyword.
*   Implement conditional job execution using `rules:if`, `rules:changes`, and `rules:exists` based on various pipeline conditions.
*   Combine multiple `rules` with `when` and `allow_failure` to achieve complex job execution logic.
*   Identify and debug common issues related to incorrect rule ordering or overly complex conditional logic.

#### Detailed lesson content
Not every job in your pipeline needs to run on every commit. You might only want to deploy to production when changes are merged into the `main` branch, or run specific security scans only on merge requests. GitLab CI/CD provides powerful mechanisms to control when jobs execute: the traditional `only`/`except` keywords and the more modern and flexible `rules` keyword.

Historically, **`only` and `except`** were the primary ways to control job execution. These keywords allow you to specify branches, tags, or even file paths that either *only* trigger a job or *except* a job from running. For example, `only: [main]` would make a job run only on the `main` branch, while `except: [develop]` would make it run on all branches *except* `develop`. They are simple and effective for straightforward conditions, especially when dealing with branches and tags.

```yaml
deploy_production:
  stage: deploy
  script:
    - echo "Deploying to production..."
  only:
    - main # This job only runs on the 'main' branch
  except:
    - tags # This job will not run on tags
```

However, `only`/`except` have limitations. They are mutually exclusive (you can't use both `only` and `except` in the same job), and their logic can become cumbersome for complex scenarios involving multiple conditions (e.g., "run if on `main` *and* a specific variable is set *or* if a file in a certain directory changed"). This is where the **`rules` keyword** shines.

`rules` offer a more powerful and flexible way to define conditional job execution. Each rule is an expression that evaluates to `true` or `false`. If a rule evaluates to `true`, the `when` keyword within that rule determines the job's behavior (e.g., `on_success`, `manual`, `never`). Rules are evaluated in order, from top to bottom, and the first rule that matches determines the job's behavior. If no rule matches, the job is skipped by default. This sequential evaluation is critical to understand, as the order of your rules significantly impacts which conditions take precedence.

Let's look at some common `rules` conditions:
*   **`if`:** This is the most versatile condition, allowing you to use CI/CD variables, comparison operators, and logical operators (AND `&&`, OR `||`) to create complex expressions. For example, `if: '$CI_COMMIT_BRANCH == "main" && $DEPLOY_TO_PROD'` means the rule applies only if the branch is `main` AND the `DEPLOY_TO_PROD` variable is true.
*   **`changes`:** This condition checks if specific files or directories have changed in the current commit compared to the target branch (for merge requests) or the previous commit (for branch pushes). This is incredibly useful for optimizing pipelines, allowing you to run frontend tests only when frontend code changes, or backend builds only when backend code changes.
*   **`exists`:** This condition checks for the presence of specific files or directories in the repository. You might use this to run a specific job only if a `Dockerfile` exists in a directory, for instance.
*   **`variables`:** This condition checks if a specific CI/CD variable is defined or has a particular value.

Here's an example demonstrating `rules`:

```yaml
build_and_deploy_frontend:
  stage: deploy
  script:
    - echo "Building and deploying frontend..."
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"' # Rule 1: If on main branch
      changes:
        - frontend/**/* # AND frontend files changed
      when: on_success # Run automatically
    - if: '$CI_COMMIT_BRANCH == "develop"' # Rule 2: If on develop branch
      changes:
        - frontend/**/* # AND frontend files changed
      when: manual # Allow manual trigger
    - if: '$CI_COMMIT_BRANCH == "feature/new-ui"' # Rule 3: If on specific feature branch
      when: on_success # Run automatically
    - when: never # Default: if no rules above match, never run
```
In this example, the job will run automatically on `main` if frontend files change. On `develop`, it will be a manual job if frontend files change. On `feature/new-ui`, it will run automatically regardless of changes. If none of these conditions are met, the job will not run.

You can also combine `rules` with `allow_failure`. This is useful for non-critical jobs that you want to run conditionally but shouldn't block the entire pipeline if they fail. For example, a "linting" job might `allow_failure: true` if it's just providing feedback and not a strict gate.

A common mistake with `rules` is incorrect ordering. Since rules are evaluated from top to bottom, a broad rule at the top might unintentionally match and apply its `when` condition, preventing more specific rules below it from ever being considered. Always place your most specific rules at the top and more general rules towards the bottom, ending with a `when: never` if you want to explicitly skip the job when no other rules match. Another pitfall is creating overly complex `if` statements that are hard to read and debug. Break down complex logic into simpler, chained rules or use helper scripts if necessary. Always test your rules thoroughly by pushing commits that should and should not trigger specific jobs.

#### Key concepts
*   **`only` / `except`:** Legacy keywords for conditional job execution based on branches, tags, or file paths. They are mutually exclusive and less flexible than `rules`.
*   **`rules`:** A modern and powerful keyword for defining complex conditional logic for job execution. Rules are evaluated sequentially.
*   **`rules:if`:** A condition within `rules` that evaluates a boolean expression using CI/CD variables, comparison, and logical operators.
*   **`rules:changes`:** A condition within `rules` that triggers a job if specific files or directories have been modified in the commit.
*   **`rules:exists`:** A condition within `rules` that triggers a job if specific files or directories are present in the repository.
*   **`rules:when`:** Defines the behavior of a job when its rule matches (e.g., `on_success`, `manual`, `never`, `on_failure`).
*   **`allow_failure`:** An attribute that, when set to `true`, allows a job to fail without affecting the overall pipeline status. Can be used within `rules`.
*   **Rule Order of Evaluation:** Rules are evaluated from top to bottom; the first matching rule dictates the job's behavior.

#### Hands-on activity
**Objective:** Implement a pipeline with conditional job execution using `rules` to deploy based on branch and changes, and a manual review job for merge requests.

**Instructions:**
1.  Create a new GitLab project.
2.  Create two dummy directories: `frontend/` and `backend/`.
3.  Create a `.gitlab-ci.yml` file with the following content.
4.  Commit and push to `main`. Observe the `deploy_prod` job running.
5.  Create a new branch, e.g., `feature/new-feature`, and make a change only in `backend/`. Push. Observe `deploy_prod` being skipped, and `review_mr` being available manually.
6.  On `feature/new-feature`, make a change only in `frontend/`. Push. Observe `deploy_prod` being skipped, and `review_mr` being available manually.

**Starter Code (`.gitlab-ci.yml`):**
```yaml
stages:
  - build
  - deploy
  - review

build_app:
  stage: build
  script:
    - echo "Building application..."
  # This job always runs for simplicity
  rules:
    - when: on_success

deploy_prod:
  stage: deploy
  script:
    - echo "Deploying to production environment..."
    - echo "Only runs on 'main' branch if frontend or backend changes."
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"' # Condition 1: Must be on main branch
      changes: # Condition 2: Either frontend OR backend changed
        - frontend/**/*
        - backend/**/*
      when: on_success # If both conditions true, run automatically
    - when: never # Otherwise, never run this job

review_mr:
  stage: review
  script:
    - echo "Manual review required for Merge Request changes."
    - echo "Checking if any files changed in this MR..."
    - # In a real scenario, you might have a script to list changes or trigger a review tool
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"' # Only run for MR pipelines
      when: manual # Make it a manual job
    - when: never # Otherwise, never run this job
```

#### Assessment idea
1.  **Question:** You want a `security_scan` job to run under the following conditions:
    *   It must run automatically on the `main` branch.
    *   It must run automatically for any merge request pipeline.
    *   It should *never* run on any other branches (e.g., feature branches pushed directly).
    *   It should be allowed to fail without blocking the pipeline.

    Which `rules` configuration correctly implements this logic?

    ```yaml
    # Option A
    security_scan:
      stage: security
      script: echo "Running scan..."
      allow_failure: true
      rules:
        - if: '$CI_COMMIT_BRANCH == "main" || $CI_PIPELINE_SOURCE == "merge_request_event"'
          when: on_success
        - when: never

    # Option B
    security_scan:
      stage: security
      script: echo "Running scan..."
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: on_success
          allow_failure: true
        - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
          when: on_success
          allow_failure: true
        - when: never

    # Option C
    security_scan:
      stage: security
      script: echo "Running scan..."
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: on_success
        - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
          when: on_success
        - when: never
      allow_failure: true

    # Option D
    security_scan:
      stage: security
      script: echo "Running scan..."
      only:
        - main
        - merge_requests
      allow_failure: true
    ```

    **Correct Answer:** C)
    **Explanation:**
    *   Option A combines the conditions into a single `if` statement. While logically correct, placing `allow_failure: true` at the job level is generally preferred if it applies to all rule matches for that job.
    *   Option B duplicates `allow_failure: true` within each rule. While functional, it's less DRY and can be confusing if the `allow_failure` state is meant to be consistent for the entire job.
    *   Option C correctly defines the rules for when the job should run (on `main` or for MRs) and then applies `allow_failure: true` at the job level, meaning if *any* of the rules cause the job to run, its failure will be tolerated. This is the most idiomatic and readable way to achieve the desired outcome. The `when: never` at the end ensures it skips on other branches.
    *   Option D uses `only`, which is less flexible for complex conditions and doesn't explicitly handle the "never run on other branches" as cleanly as `rules` with `when: never`. While `only: [main, merge_requests]` would achieve the branch/MR part, `rules` is generally recommended for its power.

2.  **Question:** You have a `lint_javascript` job that should only run if any `.js` files in the `frontend/` directory have changed. How would you configure this using `rules`?

    **Correct Answer:**
    ```yaml
    lint_javascript:
      stage: lint
      script:
        - echo "Linting JavaScript files..."
        - npm run lint:js # Example command
      rules:
        - changes:
            - frontend/**/*.js # Match any JS file in frontend/ and its subdirectories
          when: on_success
        - when: never # If no JS files changed, skip the job
    ```
    **Explanation:** The `rules:changes` keyword is specifically designed for this scenario. By specifying `frontend/**/*.js`, the rule will evaluate to true only if there are changes to JavaScript files within the `frontend` directory or any of its subdirectories. The `when: on_success` ensures it runs automatically if changes are detected, and `when: never` ensures it's skipped otherwise, optimizing the pipeline by only running the linter when relevant files are modified.

#### AI generation note
Create an 11-minute interactive slide deck with embedded mini-videos. Start with slides explaining the limitations of `only`/`except` with simple examples. Then, introduce `rules` with a clear visual hierarchy of how rules are evaluated (top-down, first match wins). Embed a 3-minute live coding demo showing `rules:if` with variables (`$CI_COMMIT_BRANCH`) and logical operators. Follow with another 2-minute demo illustrating `rules:changes` for frontend/backend code. Include animated overlays on the slides to highlight keywords and flow. Conclude with a drag-and-drop exercise where learners reorder `rules` to achieve a specific conditional execution outcome, explaining why the order matters. Ensure high-contrast text and clear visual cues for accessibility.

---

### Chapter 3.4 — Reusable Configuration with Includes and Templates

#### Learning objectives
*   Identify scenarios where pipeline configuration duplication can be reduced using `include`.
*   Implement `include` to import external YAML files from local paths, remote URLs, or other GitLab projects.
*   Leverage GitLab CI/CD templates to standardize common job patterns and extend existing configurations.
*   Design and structure reusable pipeline components to promote DRY principles and improve maintainability.

#### Detailed lesson content
As your GitLab CI/CD pipelines grow, you'll inevitably encounter situations where you're repeating similar job definitions or entire pipeline stages across multiple projects or even within the same `.gitlab-ci.yml` file. This duplication leads to maintenance headaches: if you need to update a common build step, you have to change it in multiple places. This is where **reusable configuration** with the `include` keyword becomes invaluable. The `include` keyword allows you to break down your `.gitlab-ci.yml` into smaller, more manageable, and reusable components.

The `include` keyword allows you to import external YAML files into your main `.gitlab-ci.yml`. GitLab supports several types of includes:
*   **`local`:** Includes a file from the same project's repository. This is perfect for splitting a large `.gitlab-ci.yml` into logical parts (e.g., `build_jobs.yml`, `test_jobs.yml`, `deploy_jobs.yml`).
*   **`remote`:** Includes a file from a public URL. This is less common for internal configurations but can be useful for integrating with external tools that provide CI/CD snippets.
*   **`project`:** Includes a file from another GitLab project within the same GitLab instance. This is incredibly powerful for sharing common CI/CD configurations across an organization's many projects. You specify the `project` path and the `file` path within that project.
*   **`template`:** Includes a built-in GitLab CI/CD template. GitLab provides many predefined templates for common languages and frameworks (e.g., `Auto-DevOps.gitlab-ci.yml`, `Jobs/Build.gitlab-ci.yml`). These are excellent starting points and best practices.

Let's illustrate with an example of including local and project files:

```yaml
# .gitlab-ci.yml
include:
  - local: '.gitlab/ci/build.yml' # Include local build jobs
  - project: 'my-group/shared-ci-config' # Include from another project
    file: '/templates/deploy-to-staging.yml'
  - template: Jobs/Code-Quality.gitlab-ci.yml # Include a built-in template

stages:
  - build
  - test
  - deploy
  - code_quality # Stage defined by Code-Quality template
```

The content of `build.yml` might look something like this:

```yaml
# .gitlab/ci/build.yml
.build_template: # Define a hidden job template
  stage: build
  image: alpine/git:latest
  script:
    - echo "Running generic build step..."

build_frontend:
  extends: .build_template
  script:
    - echo "Building frontend assets..."
    - npm install
    - npm run build

build_backend:
  extends: .build_template
  script:
    - echo "Building backend services..."
    - mvn clean install
```

When using `include`, the included files are effectively merged into the main `.gitlab-ci.yml` file. This merging process is intelligent; if there are conflicts, the main `.gitlab-ci.yml` (or later includes) will override earlier definitions. This allows you to define base configurations in included files and then **extend or override** them in your main pipeline. You can use the `extends` keyword to inherit properties from a hidden job (prefixed with `.`) defined in an included file, and then override specific attributes like `script` or `variables`. This is a cornerstone of creating truly reusable and flexible CI/CD components.

**GitLab CI/CD templates** are a specific and powerful form of inclusion. They provide pre-written, opinionated jobs for common tasks. For instance, `Jobs/Build.gitlab-ci.yml` provides a generic build job that you can then customize. You can include these templates and then use `extends` to modify their behavior, or add `rules` to control when they run.

```yaml
# .gitlab-ci.yml demonstrating template extension
include:
  - template: Jobs/Build.gitlab-ci.yml # Includes a job named 'build'

stages:
  - build
  - test

build: # This job now extends the 'build' job from the template
  image: node:16 # Override the image
  script:
    - echo "Custom Node.js build process..."
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/
```

When designing reusable configurations, think about common patterns:
1.  **Shared stages/jobs:** If multiple projects have the same `lint`, `test`, or `deploy` stages, abstract them into a shared file.
2.  **Environment-specific variables:** Use included files to define variables for different environments (e.g., `dev-vars.yml`, `prod-vars.yml`) and include them conditionally.
3.  **Job templates:** Define hidden jobs (e.g., `.docker_build_template`) that contain common setup (image, before_script) and then `extend` them in specific jobs.

A common mistake is over-inclusion or creating deeply nested include structures that become hard to debug. Keep your included files focused on a single responsibility. Another pitfall is not understanding the merging order: later definitions (including those in the main `.gitlab-ci.yml`) override earlier ones. Always test changes to included files thoroughly, as they can affect many pipelines. Remember that included files are fetched from the default branch of the target project/repository unless a specific `ref` (branch/tag/commit SHA) is specified.

#### Key concepts
*   **`include` keyword:** Used to import external YAML files into the main `.gitlab-ci.yml` file, enabling modularity and reusability.
*   **`include:local`:** Imports a YAML file from the same repository.
*   **`include:remote`:** Imports a YAML file from a public URL.
*   **`include:project`:** Imports a YAML file from another GitLab project within the same GitLab instance.
*   **`include:template`:** Imports a predefined GitLab CI/CD template.
*   **Template:** A pre-written, reusable set of CI/CD jobs or configurations provided by GitLab or created by users.
*   **`extends` keyword:** Used within a job definition to inherit properties from a hidden job (template) defined elsewhere, allowing for customization and overriding.
*   **Hidden Job:** A job whose name starts with a dot (`.`) and is not executed directly but serves as a template for other jobs using `extends`.
*   **DRY Principle (Don't Repeat Yourself):** A software development principle aimed at reducing repetition of information, which `include` and `extends` help achieve in CI/CD.

#### Hands-on activity
**Objective:** Refactor a simple pipeline to use `include` for a shared build template and a local test job definition.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a directory `.gitlab/ci/`.
3.  Inside `.gitlab/ci/`, create a file named `shared_build.yml` with the content provided below.
4.  Inside `.gitlab/ci/`, create a file named `test_jobs.yml` with the content provided below.
5.  Create a main `.gitlab-ci.yml` file with the content provided below.
6.  Commit and push all changes.
7.  Observe the pipeline. Notice how `build_frontend` and `build_backend` use the shared build template, and `run_tests` is included from a separate file.

**Starter Code:**

**`.gitlab/ci/shared_build.yml`:**
```yaml
# This file defines a reusable build template
.base_build_job:
  image: alpine/git:latest # Default image for all builds
  stage: build
  script:
    - echo "Starting generic build process..."
  artifacts:
    expire_in: 1 day
    paths:
      - build_output/ # Generic output path
```

**`.gitlab/ci/test_jobs.yml`:**
```yaml
# This file defines reusable test jobs
run_tests:
  stage: test
  image: alpine/git:latest
  script:
    - echo "Running generic tests..."
    - echo "Tests passed for $CI_JOB_NAME"
  needs: ["build_frontend", "build_backend"] # Needs both build jobs to complete
```

**`.gitlab-ci.yml` (main pipeline file):**
```yaml
include:
  - local: '.gitlab/ci/shared_build.yml' # Include the shared build template
  - local: '.gitlab/ci/test_jobs.yml'    # Include the test job definitions

stages:
  - build
  - test
  - deploy

build_frontend:
  extends: .base_build_job # Extend the shared build template
  script:
    - echo "Building frontend specific assets..."
    - mkdir -p build_output/frontend
    - echo "Frontend built" > build_output/frontend/index.html
  artifacts:
    paths:
      - build_output/frontend/ # Override artifact path for frontend

build_backend:
  extends: .base_build_job # Extend the shared build template
  script:
    - echo "Building backend specific services..."
    - mkdir -p build_output/backend
    - echo "Backend built" > build_output/backend/server.jar
  artifacts:
    paths:
      - build_output/backend/ # Override artifact path for backend

deploy_app:
  stage: deploy
  script:
    - echo "Deploying application with artifacts from frontend and backend..."
    - ls build_output/frontend/
    - ls build_output/backend/
  needs: ["run_tests"] # Ensure tests pass before deploying
```

#### Assessment idea
1.  **Question:** Your organization has multiple projects that all need to perform a standardized Docker image build and push process. This process involves specific `before_script` steps, a `docker build` command, and `docker push` to a private registry. How would you best implement this to ensure consistency and reusability across all projects?
    *   A) Copy and paste the Docker build job definition into each project's `.gitlab-ci.yml`.
    *   B) Define the Docker build steps as a shell script and call it from each `.gitlab-ci.yml`.
    *   C) Create a separate GitLab project containing a `.gitlab-ci.yml` file with a hidden job template (`.docker_build_template`), and then use `include:project` in other projects to extend this template.
    *   D) Use `include:remote` to fetch a Docker build job from a public Gist.

    **Correct Answer:** C) Create a separate GitLab project containing a `.gitlab-ci.yml` file with a hidden job template (`.docker_build_template`), and then use `include:project` in other projects to extend this template.
    **Explanation:**
    *   A) Copy-pasting violates the DRY principle and leads to maintenance nightmares.
    *   B) While better than copy-pasting, it still requires each `.gitlab-ci.yml` to define the job structure and call the script, which isn't as robust or flexible as a full CI/CD job template.
    *   D) Using a public Gist is insecure for private registry credentials and lacks version control within your GitLab instance.
    *   C) This is the most robust and recommended approach. It centralizes the standardized Docker build logic in a single, version-controlled location. Other projects can then simply `include` this shared project's template and `extend` the hidden job, overriding only what's necessary (e.g., image name, Dockerfile path), ensuring consistency and easy updates across the entire organization.

2.  **Question:** You have an included file, `common_variables.yml`, which defines `DEFAULT_IMAGE: "ubuntu:latest"`. In your main `.gitlab-ci.yml`, you include this file and then define `image: "node:16"` at the job level. Which image will the job use? Why?

    **Correct Answer:** The job will use `node:16`.
    **Explanation:** When GitLab CI/CD processes `include` files, it effectively merges them into the main `.gitlab-ci.yml`. The merging strategy is such that later definitions (those appearing lower in the merged YAML, or directly in the main `.gitlab-ci.yml`) take precedence and override earlier definitions. In this case, `common_variables.yml` might define a default image, but the `image: "node:16"` specified directly within the job in the main `.gitlab-ci.yml` file is a more specific and later definition, thus overriding any default from the included file. This allows for flexible base configurations that can be customized at the individual job or pipeline level.

#### AI generation note
Design a 13-minute live coding video. Start with a `.gitlab-ci.yml` that has some duplicated `script` lines for build jobs. Introduce the problem of duplication. Then, refactor the pipeline step-by-step:
1.  Create a `shared_build.yml` file in a `.gitlab/ci/` directory with a hidden job (`.base_build_job`).
2.  Modify the main `.gitlab-ci.yml` to `include:local` this file.
3.  Demonstrate `extends: .base_build_job` for two different build jobs, showing how to override the `script` for each.
4.  Briefly show how to `include:template` for `Jobs/Code-Quality.gitlab-ci.yml` and explain its benefits.
5.  Discuss `include:project` with a visual of two GitLab projects.
Include a split-screen view of the code editor and the GitLab pipeline graph as changes are pushed. Conclude with a reflection prompt asking learners to identify a duplicated pattern in their own projects that could benefit from `include`. Ensure clear, step-by-step instructions and visual highlighting of code changes.

---

## Module 4: Integrating Testing and Quality Gates

**Module Goal:** Equip learners with the knowledge and practical skills to integrate various testing types and quality gates into their GitLab CI/CD pipelines, ensuring code quality, security, and reliability before deployment.

### Chapter 4.1 — Unit and Integration Testing in CI/CD

#### Learning objectives
*   Understand the critical role of automated unit and integration tests in a CI/CD pipeline.
*   Configure GitLab CI/CD to execute unit and integration tests automatically.
*   Generate and interpret test reports within the GitLab UI using JUnit XML artifacts.
*   Implement strategies for failing pipelines based on test failures and code coverage thresholds.
*   Identify and avoid common pitfalls when integrating testing into CI/CD.

#### Detailed lesson content
Automated testing forms the bedrock of any robust CI/CD pipeline, providing rapid feedback on code changes and ensuring that new features or bug fixes don't inadvertently break existing functionality. In this chapter, we'll focus on unit and integration testing, two fundamental types of tests that should be executed early and often in your pipeline. Unit tests verify individual components or functions in isolation, ensuring they behave as expected. Integration tests, on the other hand, check that different parts of your application work correctly together, often involving interactions with databases, APIs, or other services. The beauty of integrating these tests into your GitLab CI/CD pipeline is that every code commit can automatically trigger a test run, giving developers immediate feedback and preventing regressions from reaching later stages of the development lifecycle.

To begin, consider a typical application, perhaps a Node.js application using Jest for testing or a Python application using Pytest. The core idea is to define a `test` stage in your `.gitlab-ci.yml` file where these tests will be executed. Before running the tests, your CI job needs to set up the environment, which usually involves installing dependencies. For a Node.js project, this means running `npm install` or `yarn install`. For Python, it's typically `pip install -r requirements.txt`. Missing this crucial setup step is a very common mistake that leads to pipeline failures, often with cryptic "command not found" errors for your test runner. Always ensure your job has all necessary dependencies installed before attempting to run tests.

Once dependencies are installed, you'll execute your test command. For Jest, it might be `npm test` or `jest`. For Pytest, it's `pytest`. The real power comes from making these test failures halt the pipeline. By default, most test runners will exit with a non-zero status code if tests fail, which GitLab CI/CD interprets as a job failure, subsequently failing the entire pipeline. This "fail-fast" approach is essential for preventing broken code from progressing.

Beyond simply running tests, we want to visualize their results. GitLab CI/CD offers excellent support for displaying test reports directly in the Merge Request widget and pipeline views. This is achieved by generating test reports in the JUnit XML format and configuring your CI job to upload them as artifacts. Many test runners, like Jest (with a reporter like `jest-junit`) or Pytest (with the `--junitxml` flag), can output results in this format.

Let's look at a concrete example for a Node.js project:

```yaml
stages:
  - build
  - test

build_job:
  stage: build
  script:
    - echo "Building the application..."
    - npm install # Install dependencies
    - npm run build # Or any build command
  artifacts:
    paths:
      - node_modules/ # Cache node_modules for subsequent jobs

unit_and_integration_tests:
  stage: test
  image: node:16-alpine # Use a Node.js image
  script:
    - npm install # Re-install if not cached, or use cache
    - npm test -- --ci --json --outputFile=jest-report.json # Run Jest tests and output JSON
    - npm test -- --ci --reporters=default --reporters=jest-junit --outputFile=junit.xml # Run Jest again for JUnit XML
  artifacts:
    when: always # Always upload artifacts, even on failure
    reports:
      junit: junit.xml # Tell GitLab to parse this JUnit XML file
    paths:
      - coverage/ # Optional: upload code coverage reports
  coverage: '/All files[^|]*\|[^|]*\s+([\d\.]+)/' # Regex to extract coverage percentage
```

In this example, the `unit_and_integration_tests` job first installs dependencies (assuming `node_modules` might not be cached or needs a refresh). Then, it runs `npm test`. Notice the use of `--reporters=jest-junit --outputFile=junit.xml`. This ensures that Jest outputs a `junit.xml` file, which GitLab then picks up via `artifacts: reports: junit: junit.xml`. The `when: always` ensures the report is uploaded even if tests fail, which is crucial for debugging. We also include a `coverage` regex, allowing GitLab to display code coverage metrics directly in the Merge Request. A common mistake here is using an incorrect regex or not configuring your test runner to output coverage in a format that GitLab can parse (e.g., Cobertura XML for more detailed reports).

Beyond just running tests, you can enforce quality gates based on test outcomes. If any unit or integration test fails, the pipeline should ideally stop immediately. Furthermore, you can set minimum code coverage thresholds. For instance, you might decide that your project's overall code coverage should never drop below 80%. While GitLab CI/CD itself doesn't have a built-in "fail if coverage drops" feature out of the box, you can integrate external tools or custom scripts that check the coverage report and exit with a non-zero status if the threshold isn't met. For example, a simple shell script could parse the coverage percentage from the `coverage/coverage-summary.json` file (if using Istanbul/nyc) and compare it against a defined minimum. This adds another layer of quality assurance, ensuring that new code is adequately tested.

Another critical aspect is managing test data and environments. For integration tests, you might need a dedicated test database or mock services. Using Docker Compose within your CI job can be an elegant solution for spinning up these dependencies. For example, you could define a `services` block in your `.gitlab-ci.yml` to run a PostgreSQL container alongside your test job, ensuring a clean, consistent environment for each test run.

```yaml
unit_and_integration_tests:
  stage: test
  image: node:16-alpine
  services:
    - postgres:13 # Start a PostgreSQL service
  variables:
    POSTGRES_DB: test_db
    POSTGRES_USER: user
    POSTGRES_PASSWORD: password
    DATABASE_URL: "postgresql://user:password@postgres:5432/test_db" # Connect to the service
  script:
    - npm install
    - npx prisma migrate deploy # Or any database migration command for tests
    - npm test
  # ... artifacts and coverage configuration
```
This demonstrates how to use `services` to provide a database for integration tests, ensuring tests run against a realistic, yet isolated, environment. Remember to configure your application to connect to the service using the correct host (the service alias, e.g., `postgres`) and credentials.

In summary, integrating unit and integration tests into your GitLab CI/CD pipeline is non-negotiable for maintaining code quality and accelerating development. By automating test execution, visualizing results, and enforcing failure criteria, you empower your team to catch issues early, reduce technical debt, and build confidence in your deployments. Always ensure dependencies are correctly handled, test reports are generated in a parsable format, and that your pipeline is configured to fail decisively upon test failures.

#### Key concepts
*   **Unit Testing:** A software testing method where individual units or components of a software are tested in isolation to determine if they are fit for use.
*   **Integration Testing:** A type of software testing where individual units are combined and tested as a group to ensure they function correctly together.
*   **JUnit XML:** A standard XML format for reporting test results, widely supported by CI/CD tools like GitLab for displaying test summaries.
*   **Code Coverage:** A metric that measures the percentage of code lines, branches, or statements executed by tests, indicating how much of your codebase is covered by automated tests.
*   **Fail-Fast Principle:** The practice of stopping a process (like a CI/CD pipeline) as soon as an error is detected, preventing further work on a potentially broken state.
*   **`artifacts: reports: junit`:** A GitLab CI/CD configuration keyword used to specify a JUnit XML file that GitLab should parse and display in the UI.
*   **`coverage` (GitLab CI/CD):** A configuration keyword that uses a regular expression to extract a code coverage percentage from the job log, displaying it in the Merge Request widget.

#### Hands-on activity
**Activity: Integrate Unit Tests for a Simple Python Application**

You have a simple Python Flask application with unit tests written using `pytest`. Your task is to create a `.gitlab-ci.yml` file that runs these tests and generates a JUnit XML report.

**Starter Code:**
Create the following files in a new directory:

`app.py`:
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

`test_app.py`:
```python
import pytest
from app import add, subtract, multiply, divide

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2

def test_subtract():
    assert subtract(5, 3) == 2
    assert subtract(3, 5) == -2

def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-2, 3) == -6

def test_divide():
    assert divide(6, 3) == 2
    assert divide(5, 2) == 2.5
    with pytest.raises(ValueError):
        divide(1, 0)
```

`requirements.txt`:
```
pytest
```

**Task:**
1.  Create a `.gitlab-ci.yml` file in the root of this project.
2.  Define a `test` stage.
3.  Create a job named `python_unit_tests` in the `test` stage.
4.  Use a Python Docker image (e.g., `python:3.9-slim-buster`).
5.  In the `script` section:
    *   Install `pytest` using `pip`.
    *   Run the tests, ensuring `pytest` outputs results to a `junit.xml` file.
6.  Configure the job to upload `junit.xml` as a JUnit report artifact.
7.  Push this project to a GitLab repository and observe the pipeline results.

#### Assessment idea
1.  **Question:** You have a GitLab CI/CD pipeline for a Node.js application. After a recent change, the pipeline started failing in the `test` stage, but the job log only shows "Error: Command failed with exit code 1." You suspect a missing dependency. What is the most likely reason for this error, and how would you typically resolve it within your `.gitlab-ci.yml`?
    *   **Correct Answer:** The most likely reason is that a required Node.js package (e.g., a test runner like Jest or a utility library) was not installed before the test command was executed. The "Command failed with exit code 1" indicates a general failure, often due to missing executables or modules. To resolve this, you would ensure an `npm install` or `yarn install` command is present and successfully executed in the `script` section of your test job *before* the `npm test` command. This ensures all project dependencies, including dev dependencies needed for testing, are available in the CI environment.

2.  **Question:** Your team wants to see a summary of test results directly in the GitLab Merge Request widget. You've configured your test runner to output results to `test-results.xml` in JUnit XML format. What specific configuration do you need to add to your `.gitlab-ci.yml` job to make GitLab display these results?
    *   **Correct Answer:** To make GitLab display JUnit test results, you need to add the `artifacts: reports: junit:` keyword to your test job configuration, pointing to the generated XML file.
        ```yaml
        my_test_job:
          stage: test
          script:
            - # ... commands to run tests and generate test-results.xml
          artifacts:
            when: always # Important to get reports even if tests fail
            reports:
              junit: test-results.xml
        ```
        This tells GitLab to parse `test-results.xml` and display its contents in the relevant UI sections.

#### AI generation note
Create a 12-minute live coding video. The video should start with a simple Python Flask application and `pytest` unit tests. Walk through creating a `.gitlab-ci.yml` file from scratch, adding a `test` stage, installing dependencies (`pip install pytest`), and running tests with `pytest --junitxml=report.xml`. Demonstrate pushing to GitLab, showing the pipeline running, and then navigating to the "Tests" tab in the pipeline view and the Merge Request widget to see the parsed JUnit report. Introduce a failing test case to show how the pipeline fails and how the report highlights the failure. Include a split-screen view of the VS Code editor (code and terminal) on the left and the GitLab UI on the right. End with a reflection prompt asking learners to consider how they would integrate database setup for integration tests in their own projects.
---

### Chapter 4.2 — Code Quality and Static Analysis

#### Learning objectives
*   Explain the benefits of integrating static code analysis into a CI/CD pipeline.
*   Configure GitLab CI/CD to run static code analysis tools (e.g., ESLint, Flake8).
*   Utilize GitLab's Code Quality feature to display code quality reports in Merge Requests.
*   Understand how to interpret static analysis findings and prioritize remediation.
*   Implement basic quality gates based on code quality metrics.

#### Detailed lesson content
Maintaining high code quality is paramount for any sustainable software project. Poor code quality leads to increased technical debt, harder maintenance, more bugs, and slower development cycles. This is where static code analysis comesเข้ามา. Static analysis involves examining your source code without executing it, looking for potential bugs, security vulnerabilities, stylistic inconsistencies, and complex code patterns. Integrating static analysis into your GitLab CI/CD pipeline means that every code change is automatically scrutinized, providing immediate feedback to developers and ensuring that code quality standards are upheld from the very beginning. This proactive approach helps catch issues much earlier than manual code reviews or even dynamic testing, saving significant time and effort in the long run.

Tools like ESLint for JavaScript/TypeScript, Flake8 for Python, RuboCop for Ruby, and SonarQube for a wide range of languages are excellent examples of static analysis tools. The process of integrating them into GitLab CI/CD mirrors that of unit testing: you define a job in your `.gitlab-ci.yml` that installs the tool and then executes it against your codebase. A crucial aspect is to configure these tools to output their findings in a format that GitLab can understand, specifically the Code Quality report format (which is based on the open-source Code Climate engine).

Let's consider an example for a Python project using Flake8, a popular linter that checks for style guide enforcement (PEP 8), programming errors, and complexity.

```yaml
stages:
  - build
  - test
  - code_quality

build_job:
  stage: build
  script:
    - echo "Building the application..."
    - pip install -r requirements.txt
  artifacts:
    paths:
      - .venv/ # Cache virtual environment

python_unit_tests:
  stage: test
  image: python:3.9-slim-buster
  script:
    - pip install -r requirements.txt
    - pytest --junitxml=junit.xml
  artifacts:
    when: always
    reports:
      junit: junit.xml

code_quality_scan:
  stage: code_quality
  image: python:3.9-slim-buster
  allow_failure: true # Allow this job to fail without failing the pipeline initially
  script:
    - pip install flake8
    - flake8 . --output-file=flake8_report.txt # Run Flake8 and save output
    - # Convert flake8_report.txt to Code Climate format
    - pip install gitlab-code-quality # A utility to convert
    - gitlab-code-quality convert --tool flake8 --input flake8_report.txt --output gl-code-quality-report.json
  artifacts:
    reports:
      codequality: gl-code-quality-report.json # GitLab will parse this
    paths:
      - gl-code-quality-report.json # Ensure the report is uploaded
```

In this `code_quality_scan` job, we first install `flake8`. Then, we run `flake8 .` to analyze all Python files in the current directory and direct its output to `flake8_report.txt`. The key step for GitLab integration is converting this raw output into the Code Climate JSON format. Tools like `gitlab-code-quality` (a Python package) or custom scripts can perform this conversion. The resulting `gl-code-quality-report.json` file is then specified under `artifacts: reports: codequality:`. When this artifact is uploaded, GitLab automatically parses it and displays the findings directly in the Merge Request widget, showing new issues, existing issues, and any degradation in code quality.

A common mistake is to make the code quality job immediately block the pipeline. While ultimately you want to enforce quality, it's often better to start with `allow_failure: true` for the code quality job. This allows developers to see the warnings and address them without completely blocking their workflow, especially when introducing static analysis to an existing codebase with many pre-existing issues. Over time, as your team becomes accustomed to the tool and addresses the backlog, you can remove `allow_failure: true` to enforce stricter quality gates.

GitLab's Code Quality feature is powerful because it focuses on *changes*. In a Merge Request, it will highlight only the new issues introduced by the proposed changes, making it easier for developers to focus on fixing what they just broke or introduced. It also compares the quality report of the source branch with the target branch (e.g., `main`), showing if the code quality has improved or degraded.

Beyond just reporting, you can implement quality gates. For example, you might decide that no new critical or major code quality issues should be introduced. While GitLab's native Code Quality widget provides a visual indicator, for strict enforcement, you might need to combine it with a custom script. This script could parse the `gl-code-quality-report.json` file, count issues of specific severities, and then exit with a non-zero status code if the count exceeds a predefined threshold. This would effectively fail the `code_quality_scan` job and, consequently, the entire pipeline.

For more advanced scenarios, especially with larger projects or multiple languages, integrating with a dedicated platform like SonarQube is common. SonarQube provides a comprehensive dashboard for code quality and security, tracks historical trends, and allows for highly configurable quality gates. GitLab CI/CD can trigger SonarQube scans, and SonarQube can then report back to GitLab via its API or by generating a Code Climate compatible report.

```yaml
# Example for SonarQube integration
sonar_scan:
  stage: code_quality
  image: sonarsource/sonar-scanner-cli:latest # Or a custom image with SonarQube scanner
  variables:
    SONAR_HOST_URL: "http://sonarqube.example.com"
    SONAR_TOKEN: "$SONAR_TOKEN" # Stored as a CI/CD variable
    SONAR_PROJECT_KEY: "my-python-app"
  script:
    - sonar-scanner -Dsonar.sources=. -Dsonar.python.version=3.9
    # SonarQube can also generate Code Climate reports for GitLab
    - sonar-scanner -Dsonar.qualitygate.wait=true # Wait for Quality Gate status
  allow_failure: false # Fail the pipeline if SonarQube Quality Gate fails
```
In this SonarQube example, the `sonar-scanner` command is executed. The `-Dsonar.qualitygate.wait=true` flag is crucial as it makes the CI job wait for SonarQube to complete its analysis and evaluate its configured Quality Gate. If the Quality Gate fails (e.g., new bugs introduced, coverage dropped below threshold), the `sonar-scanner` command will exit with a non-zero status, failing the GitLab CI job and thus the pipeline. This provides a very robust quality gate.

Remember that the goal of static analysis is not to achieve a "perfect" score, which is often unattainable and can lead to analysis paralysis. Instead, focus on continuous improvement: fix new issues as they arise, prioritize critical findings, and gradually address existing technical debt. Configure your tools and quality gates pragmatically, aligning them with your team's quality standards and development velocity.

#### Key concepts
*   **Static Code Analysis:** A method of debugging by examining source code without executing the program, looking for potential errors, vulnerabilities, and stylistic violations.
*   **Code Quality:** A measure of how well-written, maintainable, readable, and efficient a codebase is.
*   **Linter:** A static code analysis tool used to flag programming errors, bugs, stylistic errors, and suspicious constructs. Examples: ESLint, Flake8, RuboCop.
*   **Code Climate Format:** An open-source JSON format for reporting code quality issues, which GitLab uses to display its Code Quality reports.
*   **`artifacts: reports: codequality`:** A GitLab CI/CD configuration keyword used to specify a Code Climate JSON file that GitLab should parse and display in the UI.
*   **Quality Gate:** A set of criteria that must be met before a software project can move to the next stage of its lifecycle (e.g., no new critical bugs, minimum code coverage).
*   **SonarQube:** A popular open-source platform for continuous inspection of code quality to perform static analysis of code, manage technical debt, and enforce quality gates.

#### Hands-on activity
**Activity: Integrate ESLint for a Simple JavaScript Project**

You have a simple JavaScript project, and you want to enforce code style and catch potential errors using ESLint.

**Starter Code:**
Create the following files in a new directory:

`package.json`:
```json
{
  "name": "js-app",
  "version": "1.0.0",
  "description": "A simple JS app",
  "main": "index.js",
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}
```

`.eslintrc.json`:
```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

`index.js`:
```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
  var unusedVar = 10; // This should trigger a warning
}

greet("World");
```

**Task:**
1.  Create a `.gitlab-ci.yml` file in the root of this project.
2.  Define a `code_quality` stage.
3.  Create a job named `js_code_quality` in the `code_quality` stage.
4.  Use a Node.js Docker image (e.g., `node:16-alpine`).
5.  In the `script` section:
    *   Install Node.js dependencies (`npm install`).
    *   Run ESLint and output its findings.
    *   Use the `gitlab-eslint-code-quality` tool (or a similar conversion script) to convert ESLint's JSON output into the Code Climate JSON format (`gl-code-quality-report.json`). You might need to install this tool (`npm install -g gitlab-eslint-code-quality`) or use a specific image that has it.
    *   
6.  Configure the job to upload `gl-code-quality-report.json` as a Code Quality report artifact.
7.  Set `allow_failure: true` for this job initially.
8.  Push this project to a GitLab repository and observe the pipeline and Merge Request results.

#### Assessment idea
1.  **Question:** Your team has integrated ESLint into your GitLab CI/CD pipeline, and the `code_quality` job is failing due to a newly introduced stylistic error. The team lead suggests setting `allow_failure: true` for this job temporarily. What is the primary benefit of `allow_failure: true` for a code quality job, and what is a potential drawback if used indefinitely?
    *   **Correct Answer:** The primary benefit of `allow_failure: true` for a code quality job is that it allows the pipeline to continue running even if code quality issues are detected. This is particularly useful when first introducing static analysis to an existing codebase, as it prevents immediate blocking of development due to a large number of pre-existing issues. It provides feedback without halting progress, allowing developers to address issues incrementally. A potential drawback if used indefinitely is that it can lead to "warning fatigue," where developers start to ignore the code quality reports because they don't block the pipeline. This can result in a gradual degradation of code quality over time, undermining the very purpose of integrating static analysis.

2.  **Question:** You've successfully configured your Python project's CI/CD pipeline to run Flake8 and generate a `gl-code-quality-report.json` artifact. However, when you create a new Merge Request with some linting issues, you don't see any code quality information in the Merge Request widget. What is the most likely reason for this, and how would you troubleshoot it?
    *   **Correct Answer:** The most likely reason is that the `artifacts: reports: codequality:` keyword is either missing or incorrectly configured in your `.gitlab-ci.yml` job. GitLab relies on this specific configuration to know which artifact file to parse for code quality reports.
        To troubleshoot:
        1.  **Check `.gitlab-ci.yml`:** Verify that the `codequality` report is correctly specified, for example:
            ```yaml
            artifacts:
              reports:
                codequality: gl-code-quality-report.json
            ```
        2.  **Verify Artifact Existence:** Check the job logs and the "Job artifacts" section in the GitLab UI to ensure that `gl-code-quality-report.json` was actually generated and uploaded by the job. If the file isn't present, the conversion script or Flake8 command might have failed.
        3.  **Check File Path:** Ensure the path specified in `artifacts: reports: codequality:` exactly matches the path where the `gl-code-quality-report.json` file is generated within the CI job's working directory.

#### AI generation note
Design a 10-minute interactive slide deck. The presentation should clearly explain the "why" of static analysis, contrasting it with dynamic testing. Use clear, concise language. Include animated diagrams showing how a linter scans code. Provide code snippets for `package.json`, `.eslintrc.json`, and a `.gitlab-ci.yml` job for ESLint integration, highlighting the `artifacts: reports: codequality` section. Show screenshots of the GitLab Merge Request widget displaying code quality issues. Include a "Common Mistakes" slide covering `allow_failure: true` misuse and incorrect report paths. The interactive element should be a drag-and-drop exercise where learners match a static analysis tool (e.g., ESLint, Flake8, SonarQube) to its primary function or target language.
---

### Chapter 4.3 — Security Scanning (SAST, DAST, Dependency Scanning)

#### Learning objectives
*   Differentiate between Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Dependency Scanning.
*   Enable and configure GitLab's built-in security scanning features in a CI/CD pipeline.
*   Interpret security vulnerability reports generated by GitLab CI/CD.
*   Understand the importance of addressing security findings and common remediation strategies.
*   Recognize the placement of different security scans within the CI/CD pipeline for optimal effectiveness.

#### Detailed lesson content
In today's interconnected world, software security is not an optional extra; it's a fundamental requirement. Integrating security scanning directly into your CI/CD pipeline is a proactive and efficient way to identify and mitigate vulnerabilities early in the development lifecycle, significantly reducing the risk of security breaches. GitLab provides powerful, out-of-the-box security features that can be easily enabled, offering a comprehensive suite of scans: Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Dependency Scanning. Understanding each of these and when to use them is crucial for building secure applications.

**Static Application Security Testing (SAST)** involves analyzing your application's source code, bytecode, or binary code for security vulnerabilities *before* the application is run. SAST is like a spell-checker for security flaws, identifying patterns that indicate common vulnerabilities such as SQL injection, cross-site scripting (XSS), insecure direct object references, and hardcoded credentials. Because it operates on the static code, SAST can be run very early in the pipeline, often immediately after the `build` stage, providing rapid feedback to developers. GitLab's SAST uses various open-source and commercial analyzers for different languages and frameworks, such as Brakeman for Ruby on Rails, Bandit for Python, and Semgrep for multiple languages.

**Dynamic Application Security Testing (DAST)**, in contrast, analyzes the running application to find vulnerabilities. DAST simulates attacks from the outside, much like a malicious actor would, to identify issues that might only manifest at runtime, such as misconfigurations, authentication flaws, or business logic vulnerabilities. Since DAST requires a running application, it's typically performed later in the pipeline, usually after the application has been deployed to a staging or testing environment. GitLab's DAST can be configured to scan your deployed application's URL.

**Dependency Scanning** focuses on identifying known vulnerabilities in your project's open-source dependencies (libraries, frameworks, etc.). Most modern applications rely heavily on third-party components, and these components often contain security flaws that can be exploited. Dependency scanning checks your `package.json`, `requirements.txt`, `Gemfile.lock`, or similar manifest files against public vulnerability databases to alert you to outdated or vulnerable dependencies. This scan is also typically run early in the pipeline, alongside SAST, as it only requires access to your project's dependency manifest.

GitLab makes integrating these scans incredibly straightforward, largely through its Auto DevOps templates. You can include these templates directly in your `.gitlab-ci.yml` file.

Here's how you might enable them:

```yaml
include:
  - template: Security/SAST.gitlab-ci.yml
  - template: Security/DAST.gitlab-ci.yml
  - template: Security/Dependency-Scanning.gitlab-ci.yml

stages:
  - build
  - test
  - deploy # DAST needs a deployed application
  - dast # DAST stage, typically after deploy

variables:
  # SAST configuration (optional, can be overridden)
  SAST_EXCLUDED_ANALYZERS: "semgrep" # Exclude specific analyzers if needed
  SAST_DEFAULT_ANALYZERS: "bandit,brakeman" # Specify analyzers for specific languages

  # DAST configuration
  DAST_WEBSITE: "http://my-staging-app.example.com" # URL of the deployed app for DAST
  DAST_BROWSER_SCAN: "true" # Enable browser-based DAST scan

  # Dependency Scanning configuration
  DS_EXCLUDED_ANALYZERS: "gemnasium-python" # Exclude specific dependency analyzers
```

By simply including these templates, GitLab automatically adds jobs to your pipeline for SAST, DAST, and Dependency Scanning. These jobs will run in their respective stages (SAST and Dependency Scanning usually in `test` or `sast` stages, DAST in a `dast` stage after deployment). GitLab will then generate security reports (`gl-sast-report.json`, `gl-dast-report.json`, `gl-dependency-scanning-report.json`) as artifacts. These reports are parsed and displayed beautifully in the GitLab UI:
*   **Merge Request Widget:** Shows a summary of new and existing vulnerabilities.
*   **Pipeline Security Tab:** Provides an overview of all vulnerabilities detected in a specific pipeline.
*   **Security Dashboard:** Offers a project-level and group-level view of all detected vulnerabilities, with filtering and historical trends.

Interpreting these reports is critical. Each vulnerability typically comes with a severity level (Critical, High, Medium, Low, Info), a description, and often a link to more information or remediation guidance. Common mistakes include ignoring "Low" or "Info" severity findings, or not prioritizing "Critical" and "High" vulnerabilities. While not every "Low" finding needs immediate attention, a backlog of unaddressed vulnerabilities can quickly become overwhelming and increase your attack surface. It's crucial to establish a triage process:
1.  **Review:** Understand the vulnerability and its potential impact.
2.  **Prioritize:** Based on severity, exploitability, and business impact.
3.  **Remediate:** Fix the underlying code, update dependencies, or adjust configurations.
4.  **Dismiss/Justify:** If a finding is a false positive or an acceptable risk, you can dismiss it in GitLab with a justification.

For DAST, a common mistake is to run it against a production environment without proper authorization or during peak hours, potentially causing performance issues or unintended side effects. Always run DAST against a dedicated staging or testing environment that closely mirrors production but is isolated. Another pitfall is not providing DAST with authenticated access if your application has authentication, which can lead to many parts of the application being unscanned. GitLab DAST supports authenticated scans using various methods, including header-based authentication.

```yaml
# Example: DAST with authenticated scan
dast:
  stage: dast
  image: registry.gitlab.com/gitlab-org/security-products/dast/web-scanner:latest
  variables:
    DAST_WEBSITE: "http://my-staging-app.example.com"
    DAST_AUTH_URL: "http://my-staging-app.example.com/login" # URL for the login page
    DAST_USERNAME: "testuser"
    DAST_PASSWORD: "$DAST_USER_PASSWORD" # Stored as a CI/CD variable
    DAST_FULL_SCAN_ENABLED: "true" # Perform a full scan
  artifacts:
    reports:
      dast: gl-dast-report.json
```
This example shows how to configure DAST for an authenticated scan, which is vital for applications with restricted access. The `DAST_AUTH_URL`, `DAST_USERNAME`, and `DAST_PASSWORD` variables (the password should always be a masked CI/CD variable) enable DAST to log in and scan protected areas of your application.

Finally, remember that security scanning is not a one-time activity. It's a continuous process. New vulnerabilities are discovered daily, and your codebase and dependencies are constantly evolving. By embedding these scans into your CI/CD pipeline, you create a continuous feedback loop, making security an integral part of your development workflow rather than an afterthought.

#### Key concepts
*   **Static Application Security Testing (SAST):** Analyzes source code or binaries for security vulnerabilities without executing the application.
*   **Dynamic Application Security Testing (DAST):** Analyzes a running application for security vulnerabilities by simulating external attacks.
*   **Dependency Scanning:** Identifies known security vulnerabilities in third-party libraries and dependencies used by the project.
*   **GitLab Security Templates:** Pre-defined CI/CD configurations (e.g., `Security/SAST.gitlab-ci.yml`) provided by GitLab to easily enable security scanning features.
*   **Vulnerability Report:** A document generated by security scanners detailing identified security flaws, their severity, and potential remediation steps.
*   **Security Dashboard:** A centralized view in GitLab that aggregates and displays all detected vulnerabilities across projects and groups.
*   **`include: template:`:** A GitLab CI/CD keyword used to include predefined CI/CD configuration templates, such as those for security scanning.

#### Hands-on activity
**Activity: Enable SAST and Dependency Scanning for a Node.js Project**

You have a simple Node.js application with a `package.json` file. Your goal is to enable GitLab's built-in SAST and Dependency Scanning features.

**Starter Code:**
Create the following files in a new directory:

`package.json`:
```json
{
  "name": "vulnerable-app",
  "version": "1.0.0",
  "description": "A simple Node.js app with a known vulnerable dependency",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "4.17.15" # Known vulnerable version of lodash
  }
}
```

`index.js`:
```javascript
const express = require('express');
const _ = require('lodash'); // Using a vulnerable version of lodash

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = req.query.data || 'Hello World';
  // Example of a potential SAST finding: direct use of user input without sanitization
  res.send(`<h1>${data}</h1>`); 
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

**Task:**
1.  Create a `.gitlab-ci.yml` file in the root of this project.
2.  In the `.gitlab-ci.yml`, use the `include: template:` keyword to enable both `Security/SAST.gitlab-ci.yml` and `Security/Dependency-Scanning.gitlab-ci.yml`.
3.  Ensure your `package.json` has the `lodash` dependency at version `4.17.15` (this version is known to have vulnerabilities for demonstration).
4.  Push this project to a GitLab repository.
5.  Observe the pipeline results, specifically looking for the SAST and Dependency Scanning jobs.
6.  Navigate to the "Security & Compliance" -> "Vulnerability Report" section of your project to see the aggregated findings. Also check the Merge Request widget if you create a new branch and MR.

#### Assessment idea
1.  **Question:** Your team is developing a new web application. They've integrated SAST into the CI/CD pipeline, but they are concerned about runtime vulnerabilities like misconfigurations or authentication bypasses that SAST might miss. What type of security scanning would you recommend to address these concerns, and at what stage of the CI/CD pipeline should it typically be performed?
    *   **Correct Answer:** To address runtime vulnerabilities like misconfigurations or authentication bypasses, **Dynamic Application Security Testing (DAST)** should be recommended. DAST actively attacks a running application, mimicking real-world attackers, to find vulnerabilities that only manifest when the application is live. DAST should typically be performed **after the application has been deployed to a staging or testing environment** in the CI/CD pipeline, as it requires a fully functional and accessible application instance to scan.

2.  **Question:** A recent Dependency Scanning report in your GitLab pipeline flagged a "Critical" vulnerability in an older version of a commonly used library. Your team is considering whether to ignore this finding because upgrading the library would require significant refactoring. What is a key risk of ignoring critical dependency vulnerabilities, and what is the recommended immediate action?
    *   **Correct Answer:** A key risk of ignoring critical dependency vulnerabilities is that these flaws are often publicly known and actively exploited by attackers. Ignoring them leaves your application highly susceptible to compromise, potentially leading to data breaches, denial of service, or unauthorized access. The recommended immediate action is to **prioritize upgrading the vulnerable dependency to a patched version**. If an immediate upgrade is not feasible due to refactoring effort, the team should explore alternative mitigation strategies, such as isolating the component, applying virtual patches, or implementing compensating controls, while planning for the upgrade as soon as possible. Dismissing a critical vulnerability should only be done with a thorough risk assessment and clear justification.

#### AI generation note
Create an 8-minute animated explainer video. Start by visually differentiating SAST, DAST, and Dependency Scanning with simple, clear graphics (e.g., SAST as a magnifying glass on code, DAST as a robot attacking a running app, Dependency Scanning as a librarian checking books). Show how to add the `include: template:` lines for all three in `.gitlab-ci.yml`. Illustrate the flow of each scan in a pipeline diagram. Then, show screenshots of the GitLab UI: the Merge Request widget with security findings, the Pipeline Security tab, and the project's Vulnerability Report. Highlight severity levels and the ability to dismiss findings. Include a "Safety Note" about running DAST on production. The interactive element could be a multiple-choice question asking learners to identify the best scan type for a given vulnerability scenario (e.g., "Which scan finds SQL injection in source code?").
---

### Chapter 4.4 — Performance Testing and Advanced Quality Gates

#### Learning objectives
*   Understand the importance of performance testing in a CI/CD pipeline and its different types.
*   Integrate performance testing tools (e.g., k6, Locust) into GitLab CI/CD.
*   Define custom quality gates based on performance metrics and other criteria.
*   Implement manual approval steps for critical deployment stages.
*   Leverage GitLab environments and protected branches for advanced quality control.

#### Detailed lesson content
Beyond functional correctness and security, the performance of your application is crucial for user satisfaction and business success. A slow application can lead to frustrated users, abandoned carts, and lost revenue. Integrating performance testing into your CI/CD pipeline allows you to catch performance regressions early, ensuring that new code changes don't inadvertently degrade the user experience. Performance testing encompasses various types, including load testing (checking system behavior under expected load), stress testing (pushing the system beyond normal operational limits), and soak testing (observing system behavior under sustained load over time). By automating these tests, you gain continuous insight into your application's responsiveness and stability.

Tools like k6 (JavaScript API for load testing), JMeter (Java-based, very comprehensive), and Locust (Python-based, easy to script) are popular choices for performance testing. The integration pattern in GitLab CI/CD is similar to other automated tests: define a job, install the tool, and execute your performance test script. For performance tests, it's particularly important to run them against an environment that closely mimics production in terms of hardware, network, and data, but is isolated to avoid impacting real users. A dedicated staging or pre-production environment is ideal.

Let's look at an example using k6, a modern load testing tool that's easy to integrate:

```yaml
stages:
  - build
  - test
  - deploy_staging
  - performance_test
  - deploy_production

build_job:
  stage: build
  script:
    - echo "Building application..."
    # ... build commands

deploy_to_staging:
  stage: deploy_staging
  script:
    - echo "Deploying to staging environment..."
    - # ... deployment commands to a staging URL
  environment:
    name: staging
    url: http://staging.example.com

performance_test:
  stage: performance_test
  image: grafana/k6 # Use the official k6 Docker image
  script:
    - k6 run performance-test.js # Execute the k6 test script
  variables:
    STAGING_URL: http://staging.example.com # Pass staging URL to k6 script
  artifacts:
    when: always
    reports:
      # K6 can output JSON, which can be converted or used for custom analysis
      junit: k6-test-results.xml # If k6 is configured to output JUnit XML
      # For more detailed performance metrics, you might upload a custom JSON report
    paths:
      - k6-test-results.xml
      - k6-metrics.json # Custom metrics for analysis
  allow_failure: true # Initially allow failure, then make it strict
```

In this `performance_test` job, we use the `grafana/k6` Docker image to run a `performance-test.js` script. This script would contain your k6 test logic, making requests to `http://staging.example.com` (passed via `STAGING_URL`). A critical aspect of performance testing is defining clear pass/fail criteria. For instance, you might decide that the 90th percentile response time for a key API endpoint must not exceed 500ms, or that the error rate must be below 1%. K6, like other tools, can be configured to assert these thresholds. If a threshold is violated, k6 will exit with a non-zero status code, failing the CI job.

Initially, you might set `allow_failure: true` for performance tests to gather baseline metrics and fine-tune your thresholds. However, for a true quality gate, you should eventually remove `allow_failure: true` so that performance regressions actively block the pipeline. This ensures that slow code doesn't reach production.

**Advanced Quality Gates:**
Beyond automated test failures, GitLab CI/CD offers powerful mechanisms for implementing more sophisticated quality gates:

1.  **Manual Approvals:** For critical deployments (e.g., to production), you might require a manual review and approval step. This can be configured using `when: manual` in your job definition, combined with protected environments.

    ```yaml
    deploy_to_production:
      stage: deploy_production
      script:
        - echo "Deploying to production environment..."
        - # ... production deployment commands
      environment:
        name: production
        url: http://production.example.com
      when: manual # This job will only run when manually triggered
      only:
        - main # Only available on the main branch
      allow_failure: false # Production deployment should not fail silently
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"' # Only show manual job for main branch
    ```
    This `deploy_to_production` job will appear as a "Manual" action in the pipeline and can only be triggered by users with appropriate permissions (defined in Protected Environments settings).

2.  **Protected Branches and Environments:** GitLab's Protected Branches and Protected Environments features are essential for enforcing quality gates.
    *   **Protected Branches:** You can restrict who can push code to certain branches (e.g., `main`, `release`) and who can merge into them. This ensures that only reviewed and approved code enters critical branches.
    *   **Protected Environments:** You can define which users or groups are allowed to deploy to specific environments (e.g., `production`). This is crucial for controlling access to sensitive deployments and works hand-in-hand with manual jobs. For instance, you could configure the `production` environment to only allow maintainers to trigger manual deployments.

3.  **Custom Logic with `rules` and `needs`:** You can create highly conditional jobs using the `rules` keyword, ensuring jobs only run when specific conditions are met (e.g., only run performance tests on merge requests, or only deploy to production if all previous stages passed). The `needs` keyword allows you to define dependencies between jobs, creating a directed acyclic graph (DAG) that ensures jobs run in a specific order, even across stages, and only if their dependencies succeed.

    ```yaml
    # Example: Custom quality gate based on a script's output
    check_performance_threshold:
      stage: performance_test
      image: alpine/git # Or any image with 'jq' for JSON parsing
      needs: ["performance_test"] # Ensure this runs after the actual performance test
      script:
        - apk add --no-cache jq
        - RESPONSE_TIME=$(jq '.metrics.http_req_duration.p90' k6-metrics.json) # Extract P90 from k6 report
        - if (( $(echo "$RESPONSE_TIME > 500" | bc -l) )); then
        -   echo "ERROR: P90 response time ($RESPONSE_TIME ms) exceeded 500ms threshold!"
        -   exit 1
        - else
        -   echo "SUCCESS: P90 response time ($RESPONSE_TIME ms) is within acceptable limits."
        - fi
      allow_failure: false # This job must pass for the pipeline to continue
    ```
    This `check_performance_threshold` job acts as an explicit quality gate. It parses the `k6-metrics.json` artifact from the `performance_test` job, extracts the 90th percentile response time, and fails the pipeline if it exceeds 500ms. This is a very powerful way to enforce custom, data-driven quality gates.

Common mistakes in performance testing include:
*   **Unrealistic Test Scenarios:** Testing with too few users or an unrealistic load profile that doesn't reflect real-world usage.
*   **Ignoring Baseline:** Not establishing a performance baseline to compare against, making it hard to identify regressions.
*   **Lack of Analysis:** Just running tests without analyzing the results, identifying bottlenecks, or understanding the "why" behind performance changes.
*   **Running Too Late:** Waiting until just before production to run performance tests, making it expensive and difficult to fix issues.

By diligently integrating performance testing and leveraging GitLab's advanced quality gate features, you can ensure that your application not only functions correctly and securely but also delivers an excellent user experience, consistently.

#### Key concepts
*   **Performance Testing:** A type of testing to determine the speed, responsiveness, and stability of a computer, network, software program, or device under a particular workload.
*   **Load Testing:** Assessing system behavior under a specific, anticipated load.
*   **Stress Testing:** Evaluating system behavior beyond normal operational capacity to determine its breaking point.
*   **k6:** An open-source load testing tool that uses JavaScript for scripting test scenarios.
*   **Quality Gate (Advanced):** Specific criteria (e.g., performance thresholds, manual approvals) that must be met before a pipeline can proceed to the next stage, often enforced by custom logic or GitLab features.
*   **Manual Job:** A CI/CD job that requires a user to manually trigger its execution.
*   **Protected Branch:** A GitLab feature that restricts who can push to or merge into specific branches, enforcing code review and quality.
*   **Protected Environment:** A GitLab feature that restricts who can deploy to specific environments (e.g., production), enhancing deployment security.
*   **`when: manual`:** A GitLab CI/CD keyword that configures a job to only run when manually triggered.
*   **`rules`:** A GitLab CI/CD keyword used to define conditional logic for when jobs should or should not run.
*   **`needs`:** A GitLab CI/CD keyword used to define explicit job dependencies, allowing jobs to run in parallel across stages while maintaining order.

#### Hands-on activity
**Activity: Implement a Simple Performance Test with k6 and a Custom Quality Gate**

You have a simple web service (which we'll simulate) and want to add a basic performance test with k6, along with a custom quality gate that checks response times.

**Starter Code:**
Create the following files in a new directory:

`performance-test.js` (k6 script):
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '30s', // for 30 seconds
  thresholds: {
    http_req_duration: ['p(90) < 500'], // 90th percentile response time must be below 500ms
    http_req_failed: ['rate<0.01'], // error rate must be below 1%
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/'); // Using a public test API
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

**Task:**
1.  Create a `.gitlab-ci.yml` file in the root of this project.
2.  Define a `performance` stage.
3.  Create a job named `run_k6_test` in the `performance` stage.
4.  Use the `grafana/k6` Docker image.
5.  In the `script` section, run the `k6 run performance-test.js` command.
6.  Configure `run_k6_test` to output a JUnit XML report (k6 can do this with `--out json=report.json` and then a conversion, or use a custom script for this exercise, let's just output to console first and assume the threshold in options will fail the job).
7.  Add a `check_performance_threshold` job in the same `performance` stage, which *depends* on `run_k6_test`. For simplicity, this job will just check the exit code of the previous job. If `run_k6_test` fails due to a threshold violation, `check_performance_threshold` should also fail (by default, if `needs` job fails, dependent job won't run or will be marked as failed).
8.  Ensure both jobs have `allow_failure: false` to enforce the quality gate.
9.  Push this project to a GitLab repository.
10. Observe the pipeline results. Modify the `thresholds` in `performance-test.js` to intentionally fail (e.g., `p(90) < 10`), then push again to see the pipeline fail.

#### Assessment idea
1.  **Question:** Your team has implemented a `deploy_to_production` job in GitLab CI/CD that uses `when: manual`. They want to ensure that only senior DevOps engineers can trigger this manual deployment. How can you enforce this restriction using GitLab's built-in features?
    *   **Correct Answer:** To restrict who can trigger a manual `deploy_to_production` job, you should use GitLab's **Protected Environments** feature. You would navigate to `Settings > CI/CD > Environments` in your project, find or create the `production` environment, and then configure its "Allowed to deploy" setting. Here, you can specify individual users or groups (e.g., your "Senior DevOps Engineers" group) who have permission to trigger jobs associated with that environment. This ensures that only authorized personnel can initiate the production deployment.

2.  **Question:** A new feature has been merged, and now your `performance_test` job in the CI/CD pipeline is consistently failing because the 90th percentile response time has increased from 300ms to 700ms, exceeding your 500ms threshold. What is the immediate implication of this failure, and what should be the next steps for the development team?
    *   **Correct Answer:** The immediate implication of this pipeline failure is that a **performance regression has been introduced**, and the current code changes are likely to negatively impact user experience if deployed. Because `allow_failure` is likely set to `false` (as it should be for a quality gate), the pipeline will be blocked, preventing further deployment to production.
        The next steps for the development team should be:
        1.  **Investigate:** Analyze the performance test reports and application logs to identify the root cause of the performance degradation. This might involve profiling the new code, checking database queries, or looking for inefficient algorithms.
        2.  **Rollback or Fix:** If the regression is critical, consider reverting the problematic merge request to unblock the pipeline and then work on a fix in a separate branch. Alternatively, if the fix is quick, address the performance bottleneck directly.
        3.  **Retest:** Rerun the performance tests after applying the fix to ensure the issue is resolved and the application meets performance thresholds again.
        4.  **Review Thresholds (Carefully):** While not the first step, if the performance change is expected and acceptable due to new functionality, the team might need to review and adjust the performance thresholds, but this should only be done after thorough analysis and justification, not as a way to bypass issues.

#### AI generation note
Produce a 15-minute mixed-media lesson. Start with a 5-minute animated segment explaining load, stress, and soak testing with simple analogies (e.g., a bridge's capacity). Transition to a 10-minute live coding demo. Show a `performance-test.js` k6 script and a `.gitlab-ci.yml` file. Walk through running the k6 test, showing console output with thresholds. Then, demonstrate how to add a `deploy_to_production` job with `when: manual` and explain Protected Environments in GitLab UI screenshots. Finally, show the custom quality gate job with `jq` parsing a `k6-metrics.json` file and failing the pipeline based on a threshold. Use a split-screen view for code/terminal and GitLab UI. End with a 2-question interactive quiz on selecting the correct quality gate mechanism for a given scenario.
---

## Module 5: Orchestrating Deployments and Environments

This module delves into the critical final stage of the CI/CD pipeline: deployment. We will explore various deployment strategies, learn how to define and manage environments within GitLab CI/CD, implement controlled deployments, and leverage advanced features like Review Apps and Kubernetes integration to build robust, scalable, and safe deployment workflows.

### Chapter 5.1 — Understanding Deployment Strategies: Blue/Green, Canary, and Rolling

#### Learning objectives
*   Differentiate between common deployment strategies: Rolling, Blue/Green, and Canary.
*   Analyze the trade-offs, benefits, and risks associated with each deployment strategy.
*   Identify scenarios where a particular deployment strategy would be most appropriate.
*   Understand how GitLab CI/CD can be configured to support different deployment patterns.

#### Detailed lesson content
Deploying software to production is often the most critical and nerve-wracking step in the entire CI/CD process. A poorly executed deployment can lead to downtime, data corruption, or a degraded user experience, directly impacting business reputation and revenue. To mitigate these risks and ensure a smooth transition of new features and fixes to users, various deployment strategies have evolved. Understanding these strategies is fundamental for any DevOps professional, as it allows us to choose the right approach for different applications, risk profiles, and business needs.

Let's begin with the **Rolling Deployment** strategy. This is perhaps the most straightforward and commonly implemented method, especially for applications running on multiple instances or containers. In a rolling deployment, new versions of an application are gradually deployed to a subset of servers or containers at a time, while the old version continues to serve traffic on the remaining instances. Once the new version is confirmed stable on the updated instances, the deployment proceeds to the next subset, until all instances are running the new version. The key benefit here is minimal downtime, as traffic is always being served by at least some instances. If an issue arises with the new version, the deployment can be halted, and traffic can be routed back to the old instances that are still running, limiting the blast radius of the failure. However, a significant challenge with rolling deployments is managing backward compatibility. During the deployment, both old and new versions of the application are running simultaneously. This means that the new version must be compatible with the existing database schema, APIs, and data formats used by the old version, and vice-versa, to avoid errors or data inconsistencies. For example, if your new application version introduces a mandatory new field to a database table, a rolling deployment could fail if the old application version tries to write to that table without the new field, or if the new application version tries to read from an old version that doesn't have it. Careful planning and schema migrations are crucial.

Next, we have **Blue/Green Deployment**, a strategy designed to virtually eliminate downtime and simplify rollbacks. In a Blue/Green setup, you maintain two identical production environments, let's call them "Blue" and "Green." At any given time, only one environment (e.g., "Blue") is actively serving live traffic, while the other ("Green") remains idle or is used for testing. When a new version of the application is ready for deployment, it is deployed to the inactive "Green" environment. Once deployed, a comprehensive suite of tests (automated and potentially manual) is run against the "Green" environment to ensure everything is working as expected, without affecting live users. If all tests pass, traffic is then instantaneously switched from "Blue" to "Green" using a load balancer or DNS change. The old "Blue" environment is kept on standby. If any issues are detected after the switch, traffic can be immediately reverted back to "Blue," providing an extremely fast and safe rollback mechanism. The primary advantage is zero downtime and low-risk rollbacks. The main drawback is the cost; you effectively need to provision and maintain double the infrastructure, which can be expensive for large-scale applications. Additionally, managing database migrations in a Blue/Green setup requires careful thought. If the new version ("Green") requires a database schema change, that change must be backward compatible with the "Blue" version, or the database migration must be applied in a way that allows both versions to operate correctly, or the database itself must be duplicated and migrated.

Finally, let's explore **Canary Deployment**. This strategy is a refined version of a rolling deployment, focusing on gradual exposure of the new version to a small subset of real users before a full rollout. The name comes from the historical practice of using canaries in coal mines to detect dangerous gases. In a canary deployment, the new application version is deployed to a very small percentage of your user base (e.g., 1-5% of traffic). This "canary" group's experience is closely monitored for errors, performance degradation, or unexpected behavior. If the canary performs well over a predefined period (e.g., hours or days), the new version is gradually rolled out to larger percentages of users, until it eventually replaces the old version entirely. If issues are detected during the canary phase, the rollout is immediately halted, and the small portion of traffic is routed back to the old version, minimizing the impact on the majority of users. Canary deployments are excellent for mitigating risk, especially for critical applications where even a small bug can have significant consequences. They allow for real-world testing with actual user traffic and provide early warning signals. The main challenges include the complexity of traffic routing (often requiring sophisticated load balancers or service meshes), the need for robust monitoring and alerting systems to detect issues quickly, and the potential for a small group of users to experience issues with the new version. Data consistency can also be a concern if the canary version interacts with a shared database in a way that is not backward compatible with the old version.

GitLab CI/CD provides robust capabilities to implement these strategies. For rolling deployments, you can define jobs that update instances iteratively, perhaps using a `script` that targets specific servers or a container orchestration tool like Kubernetes with its built-in rolling update features. GitLab's `environments` keyword, which we'll cover in the next chapter, is crucial for tracking deployments to different stages. For Blue/Green, you might define two distinct environments in GitLab CI/CD (e.g., `production-blue` and `production-green`), deploying to one, running tests, and then manually or automatically switching a load balancer's target. Canary deployments can be achieved by deploying to a small, specific environment or by using advanced traffic routing features of a service mesh (like Istio) or a load balancer, with GitLab CI/CD jobs triggering these updates and monitoring. GitLab's "Deployments" view and environment tracking help visualize the state of each deployment, providing a single pane of glass for your release operations. Regardless of the strategy chosen, comprehensive automated testing, robust monitoring, and clear rollback procedures are non-negotiable components of a successful deployment pipeline.

#### Key concepts
*   **Rolling Deployment:** A deployment strategy where new versions are gradually rolled out to a subset of servers or instances at a time, replacing old versions incrementally.
*   **Blue/Green Deployment:** A deployment strategy involving two identical production environments ("Blue" and "Green"). New versions are deployed to the inactive environment, tested, and then traffic is switched instantaneously, allowing for quick rollbacks.
*   **Canary Deployment:** A deployment strategy where a new version is released to a small, controlled subset of users or servers, monitored for issues, and then gradually rolled out to the entire user base if stable.
*   **Backward Compatibility:** The ability of a new version of software to work with data, configurations, or systems created by an older version. Crucial for rolling and canary deployments.
*   **Load Balancer:** A device or software that distributes network traffic across multiple servers, often used to manage traffic routing during deployments.
*   **Rollback:** The process of reverting an application to a previous, stable version in case of deployment failure or issues.

#### Hands-on activity
**Scenario: Simulating a Rolling Deployment with a simple web application**

You will create a `.gitlab-ci.yml` file that simulates a rolling deployment to two "servers" (represented by different `echo` commands). The goal is to update "Server A" first, then "Server B", with a pause in between.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a `.gitlab-ci.yml` file in the root of your project.
3.  Define a `deploy` stage.
4.  Create two jobs: `deploy_server_a` and `deploy_server_b`.
5.  The `deploy_server_a` job should "deploy" to Server A, then pause for 10 seconds.
6.  The `deploy_server_b` job should "deploy" to Server B, only after `deploy_server_a` succeeds and also pause for 10 seconds.
7.  Use `echo` commands to simulate deployment messages.

**Code Template (`.gitlab-ci.yml`):**

```yaml
stages:
  - deploy

deploy_server_a:
  stage: deploy
  script:
    - echo "Deploying application version $CI_COMMIT_SHORT_SHA to Server A..."
    - sleep 10 # Simulate deployment time and testing
    - echo "Deployment to Server A completed successfully."
  environment:
    name: production
    url: https://example.com/server-a # Placeholder URL
  # Optional: Add a manual step for verification before proceeding
  # when: manual 

deploy_server_b:
  stage: deploy
  script:
    - echo "Deploying application version $CI_COMMIT_SHORT_SHA to Server B..."
    - sleep 10 # Simulate deployment time and testing
    - echo "Deployment to Server B completed successfully."
  environment:
    name: production
    url: https://example.com/server-b # Placeholder URL
  needs: ["deploy_server_a"] # Ensure Server A deploys first
```

**Expected Outcome:**
When you commit this `.gitlab-ci.yml`, a pipeline will run. The `deploy_server_a` job will execute, pause, and complete. Then, the `deploy_server_b` job will start, pause, and complete. Observe the sequential execution in the pipeline view.

#### Assessment idea
1.  **Question:** Your team is deploying a critical e-commerce application. Downtime is unacceptable, and the ability to instantly revert to the previous stable version in case of any post-deployment issues is paramount. Which deployment strategy would you recommend, and why?
    *   **Correct Answer:** Blue/Green Deployment. This strategy involves maintaining two identical environments. The new version is deployed to the inactive environment, thoroughly tested, and then traffic is switched instantaneously. If issues arise, traffic can be immediately switched back to the old, stable environment, ensuring zero downtime and rapid rollbacks.
2.  **Question:** A new feature for a social media application is being rolled out. The team wants to test the feature's performance and user engagement with a small percentage of real users before a full release, to minimize potential negative impact. Which deployment strategy is best suited for this scenario, and what are its primary benefits?
    *   **Correct Answer:** Canary Deployment. This strategy allows the new feature to be deployed to a small, controlled subset of users. Its primary benefits include real-world testing with actual user traffic, early detection of issues (performance, bugs, user experience), and minimized risk to the overall user base, as the rollout can be halted if problems are found.

#### AI generation note
Create a 12-minute animated explainer video. Use clear, simple diagrams to illustrate the flow of traffic and application versions for Rolling, Blue/Green, and Canary deployments. For Rolling, show instances being updated one by one. For Blue/Green, show two distinct environments and a load balancer switching traffic. For Canary, show traffic being split, with a small percentage directed to the new version. Include a voiceover explaining the pros, cons, and use cases for each. Emphasize the importance of backward compatibility and monitoring. End with a reflection prompt: "Consider an application you use daily. Which deployment strategy do you think its developers employ and why?"

### Chapter 5.2 — Defining Environments in GitLab CI/CD

#### Learning objectives
*   Configure and manage deployment environments within your `.gitlab-ci.yml` file.
*   Utilize the `environment` keyword to track deployments and access environment-specific URLs.
*   Implement `on_stop` actions to clean up dynamic environments after use.
*   Understand the lifecycle management of environments within GitLab.

#### Detailed lesson content
In the world of CI/CD, applications rarely go straight from a developer's local machine to production. Instead, they typically flow through a series of environments: development, testing, staging, and finally, production. Each environment serves a specific purpose, providing a safe space to build, test, and validate software before it reaches end-users. GitLab CI/CD offers powerful features to define, manage, and track these environments, providing visibility into where your applications are deployed and what versions are running in each stage.

The cornerstone of environment management in GitLab CI/CD is the `environment` keyword within a job definition. By simply adding this keyword to a deployment job, you inform GitLab that this job is deploying to a specific environment. This unlocks a wealth of features, including a dedicated "Environments" page in your project, deployment history, and the ability to define environment-specific variables.

Consider a typical `.gitlab-ci.yml` structure for deploying to a staging environment:

```yaml
stages:
  - build
  - deploy

build_app:
  stage: build
  script:
    - echo "Building application..."
    - mkdir public
    - echo "<h1>Hello from $CI_COMMIT_SHORT_SHA</h1>" > public/index.html
  artifacts:
    paths:
      - public

deploy_staging:
  stage: deploy
  script:
    - echo "Deploying to staging environment..."
    - # Commands to deploy 'public' directory to your staging server/platform
    - echo "Deployment to staging complete."
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - main # Only deploy to staging from the main branch
```

In this example, the `deploy_staging` job specifies `environment: name: staging`. This tells GitLab that this job is performing a deployment to an environment named "staging." The `url: https://staging.example.com` parameter is particularly useful. Once the job completes, GitLab will display a "View app" button on the job page and in the Environments dashboard, which directly links to the deployed application. This provides immediate feedback and easy access for testers or stakeholders to review the deployed changes.

One of the most powerful features related to environments is the ability to define **dynamic environments**. These are environments that are created on demand, often for feature branches or merge requests, and then automatically torn down when no longer needed. This is incredibly useful for "Review Apps," which we'll cover in detail in a later chapter. For now, let's focus on how to manage the lifecycle of such environments using `on_stop`.

The `on_stop` parameter allows you to specify a job that should be executed when an environment is stopped. This is crucial for cleaning up resources, such as deleting cloud instances, stopping containers, or removing database entries, preventing resource leakage and unnecessary costs.

Here's an example demonstrating `on_stop`:

```yaml
stages:
  - deploy
  - cleanup

deploy_review_app:
  stage: deploy
  script:
    - echo "Deploying review app for branch $CI_COMMIT_REF_SLUG..."
    - # Commands to provision resources and deploy the app
    - echo "Review app deployed to $CI_ENVIRONMENT_URL"
  environment:
    name: review/$CI_COMMIT_REF_SLUG # Dynamic environment name
    url: https://$CI_COMMIT_REF_SLUG.review.example.com # Dynamic URL
    on_stop: stop_review_app # Specify the job to run on stop
  only:
    - branches
  except:
    - main

stop_review_app:
  stage: cleanup
  script:
    - echo "Stopping review app for branch $CI_COMMIT_REF_SLUG..."
    - # Commands to de-provision resources (e.g., delete cloud instances, stop containers)
    - echo "Review app stopped and resources cleaned up."
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: stop # Mark this job as an environment stop action
  when: manual # Often, stopping is a manual action, but can be automated
```

In this setup:
*   `deploy_review_app` creates a dynamic environment named `review/$CI_COMMIT_REF_SLUG` (e.g., `review/feature-branch-1`).
*   It defines an `on_stop` action that points to the `stop_review_app` job.
*   The `stop_review_app` job has `environment: action: stop` which explicitly tells GitLab that this job is responsible for tearing down the environment.
*   The `when: manual` ensures that a user has to manually trigger the `stop_review_app` job from the Environments page, or the merge request widget, giving control over when resources are de-provisioned.

Common mistakes often occur when `on_stop` jobs are not properly configured or when cleanup scripts fail. Always ensure your `on_stop` job has the necessary permissions and robust error handling to guarantee resource de-provisioning. For instance, if your cleanup script relies on an API key that expires, the environment might persist indefinitely, incurring costs. Another common mistake is forgetting to use `action: stop` in the cleanup job, which means GitLab won't correctly update the environment status to "stopped."

Environment protection is another critical aspect. Just as you protect branches, you can protect environments to restrict who can deploy to them. This is configured in your project settings (`Settings > CI/CD > Environments`). For example, you might allow only maintainers to deploy to the `production` environment, while developers can deploy to `staging`. This adds a vital layer of security and control, preventing unauthorized or accidental deployments to critical environments.

In summary, defining environments in GitLab CI/CD provides:
1.  **Visibility:** A centralized view of all your deployments across various environments.
2.  **Tracking:** A clear history of who deployed what, and when.
3.  **Control:** Mechanisms for manual deployments, environment protection, and lifecycle management.
4.  **Integration:** Seamless linking to deployed applications and integration with merge requests for Review Apps.

Mastering these features is essential for building robust, observable, and secure deployment pipelines.

#### Key concepts
*   **Environment Keyword:** A `.gitlab-ci.yml` keyword used in a job to declare that the job deploys to a specific environment, enabling GitLab's environment features.
*   **Environment URL:** A URL specified with the `environment` keyword that GitLab uses to provide a direct link to the deployed application in the UI.
*   **Dynamic Environments:** Environments that are created on demand, typically for feature branches or merge requests, and later torn down.
*   **`on_stop`:** An `environment` parameter that specifies a job to be executed when the environment is stopped, typically for resource cleanup.
*   **`action: stop`:** An `environment` parameter used within the `on_stop` job to explicitly tell GitLab that this job is responsible for stopping/cleaning up the environment.
*   **Environment Protection:** A GitLab project setting that restricts who can deploy to specific environments, enhancing security.

#### Hands-on activity
**Scenario: Creating and stopping a dynamic "feature" environment**

You will create a `.gitlab-ci.yml` that deploys a simple "feature" application to a dynamic environment based on the branch name. You will then manually stop this environment.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a `.gitlab-ci.yml` file.
3.  Define two stages: `deploy` and `cleanup`.
4.  Create a `deploy_feature_app` job that:
    *   Runs in the `deploy` stage.
    *   Uses `CI_COMMIT_REF_SLUG` to create a dynamic environment name (e.g., `feature-branch-name`).
    *   Uses `CI_ENVIRONMENT_URL` to simulate a dynamic URL.
    *   Specifies an `on_stop` job named `stop_feature_app`.
    *   Only runs on branches other than `main`.
    *   Simulates deployment with `echo` commands.
5.  Create a `stop_feature_app` job that:
    *   Runs in the `cleanup` stage.
    *   Uses the same dynamic environment name.
    *   Has `environment: action: stop`.
    *   Is triggered `when: manual`.
    *   Simulates cleanup with `echo` commands.
6.  Commit this `.gitlab-ci.yml` to your `main` branch.
7.  Create a new branch (e.g., `my-new-feature`).
8.  Make a small change (e.g., add a comment) and commit to `my-new-feature`.
9.  Observe the pipeline running on `my-new-feature`.
10. Navigate to `Deployments > Environments` in your GitLab project. Find your dynamic `feature-my-new-feature` environment.
11. Manually stop the environment from the GitLab UI.

**Code Template (`.gitlab-ci.yml`):**

```yaml
stages:
  - deploy
  - cleanup

deploy_feature_app:
  stage: deploy
  script:
    - echo "Deploying feature app for branch '$CI_COMMIT_REF_SLUG'..."
    - echo "Simulating resource provisioning and application deployment."
    - echo "Access your feature app at: https://$CI_COMMIT_REF_SLUG.feature.example.com"
  environment:
    name: feature-$CI_COMMIT_REF_SLUG
    url: https://$CI_COMMIT_REF_SLUG.feature.example.com
    on_stop: stop_feature_app
  only:
    - branches
  except:
    - main # Prevent deploying dynamic environments on main

stop_feature_app:
  stage: cleanup
  script:
    - echo "Stopping feature app for branch '$CI_COMMIT_REF_SLUG'..."
    - echo "Simulating de-provisioning of resources for environment 'feature-$CI_COMMIT_REF_SLUG'."
  environment:
    name: feature-$CI_COMMIT_REF_SLUG
    action: stop
  when: manual
```

**Expected Outcome:**
When you push to `my-new-feature`, a pipeline will run, and the `deploy_feature_app` job will succeed. In `Deployments > Environments`, you will see a new active environment named `feature-my-new-feature` with a "View app" button. When you manually stop it, the `stop_feature_app` job will run, and the environment status will change to "stopped."

#### Assessment idea
1.  **Question:** You have a `deploy_production` job in your `.gitlab-ci.yml` that deploys your application to the `production` environment. You want GitLab to display a "View app" button that links directly to `https://app.yourcompany.com` after a successful deployment. How would you configure the `environment` keyword for this job?
    *   **Correct Answer:**
        ```yaml
        deploy_production:
          stage: deploy
          script:
            - # ... deployment commands ...
          environment:
            name: production
            url: https://app.yourcompany.com
        ```
        Explanation: By adding `url: https://app.yourcompany.com` under the `environment` keyword, GitLab will automatically create a clickable link in the job details and the Environments page, providing quick access to the deployed application.
2.  **Question:** Your team uses dynamic environments for every feature branch to allow for testing before merging. These environments consume cloud resources and need to be cleaned up automatically when the feature branch is deleted or the merge request is closed. Describe how you would configure your `.gitlab-ci.yml` to ensure these resources are de-provisioned, including the relevant keywords and their purpose.
    *   **Correct Answer:**
        To ensure resources are de-provisioned, you would use the `on_stop` and `action: stop` keywords.
        First, in the job that *creates* the dynamic environment (e.g., `deploy_review_app`), you would specify the `on_stop` parameter, pointing to a dedicated cleanup job:
        ```yaml
        deploy_review_app:
          # ... other job config ...
          environment:
            name: review/$CI_COMMIT_REF_SLUG
            url: https://review-$CI_COMMIT_REF_SLUG.example.com
            on_stop: stop_review_app # This links to the cleanup job
        ```
        Then, you would define the `stop_review_app` job itself. This job would contain the scripts to de-provision resources and must include `environment: action: stop` to inform GitLab that this job is responsible for stopping the environment:
        ```yaml
        stop_review_app:
          # ... other job config ...
          script:
            - # Commands to delete cloud resources, stop containers, etc.
          environment:
            name: review/$CI_COMMIT_REF_SLUG # Must match the environment name
            action: stop # Crucial for GitLab to mark the environment as stopped
          when: manual # Or 'always', 'on_success', 'on_failure' depending on desired automation
        ```
        The `on_stop` keyword tells GitLab which job to trigger when the environment is explicitly stopped (e.g., via the GitLab UI, API, or merge request closure). The `action: stop` in the cleanup job is essential for GitLab to correctly update the environment's status from "active" to "stopped" in the UI and internal records.

#### AI generation note
Create a 10-minute interactive code demo. Start with a basic `.gitlab-ci.yml` and incrementally add `environment: name:`, `url:`, and then `on_stop` with a corresponding `action: stop` job. Show the pipeline running, then navigate to the `Deployments > Environments` page to demonstrate the "View app" button and the manual stop action. Use a split-screen view: `.gitlab-ci.yml` on the left, GitLab UI on the right. Highlight common mistakes like forgetting `action: stop` and explain the consequences (resource leakage). Include a mini-quiz asking users to identify the correct `on_stop` configuration.

### Chapter 5.3 — Manual and Scheduled Deployments, and Environment Protection

#### Learning objectives
*   Implement manual job triggers to control deployment execution.
*   Configure scheduled pipelines for recurring deployments or maintenance tasks.
*   Protect branches and environments to restrict access and enhance security.
*   Understand the interplay between protected branches, protected environments, and user permissions.

#### Detailed lesson content
While continuous deployment aims for fully automated releases, there are many scenarios where human intervention or specific timing is required. Critical production deployments, maintenance windows, or scheduled data synchronization tasks often benefit from manual triggers or predefined schedules. GitLab CI/CD provides robust mechanisms for both, alongside powerful environment protection features to ensure only authorized personnel can initiate sensitive operations.

Let's start with **Manual Deployments**. Sometimes, you want a job to run only when explicitly triggered by a user. This is particularly common for deployments to production environments, where a final human review or approval step is desired before pushing changes live. You can achieve this using the `when: manual` keyword in your job definition.

Consider this production deployment job:

```yaml
stages:
  - build
  - test
  - deploy

build_app:
  stage: build
  script:
    - echo "Building application..."
    - mkdir public
    - echo "<h1>Production build $CI_COMMIT_SHORT_SHA</h1>" > public/index.html
  artifacts:
    paths:
      - public

test_app:
  stage: test
  script:
    - echo "Running automated tests..."
    - echo "Tests passed."
  needs: ["build_app"]

deploy_production:
  stage: deploy
  script:
    - echo "Deploying application version $CI_COMMIT_SHORT_SHA to production..."
    - # Actual deployment commands here
    - echo "Deployment to production complete."
  environment:
    name: production
    url: https://your-app.com
  when: manual # This job will only run when manually triggered
  only:
    - main # Only allow manual deployment to production from the main branch
```

With `when: manual`, the `deploy_production` job will appear in the pipeline as a paused job with a "play" button. A user with appropriate permissions can then click this button to initiate the deployment. This provides a crucial gate, allowing for final checks, approvals, or coordination with other teams before a production release. It's a common practice to combine `when: manual` with `only: main` or `only: tags` to ensure that only approved code on the main branch or specific release tags can be deployed to production.

Next, let's look at **Scheduled Deployments**. For tasks that need to run at regular intervals, regardless of code commits, GitLab CI/CD offers pipeline schedules. These are configured directly in the GitLab UI (`CI/CD > Schedules`). A schedule can be set to run daily, weekly, monthly, or at custom intervals using cron syntax.

While schedules are defined in the UI, you can target specific jobs within your `.gitlab-ci.yml` to run only when triggered by a schedule using `only: schedules`. This is useful for:
*   Nightly builds or deployments to a staging environment.
*   Regular data synchronization or backup jobs.
*   Automated cleanup of old artifacts or temporary environments.
*   Generating daily reports.

Example of a job that only runs on a schedule:

```yaml
stages:
  - maintenance

daily_cleanup:
  stage: maintenance
  script:
    - echo "Running daily cleanup script..."
    - # Commands to remove old logs, clear cache, etc.
  only:
    - schedules # This job will ONLY run when triggered by a pipeline schedule
```

You would then create a schedule in the GitLab UI, specify the `main` branch, and set its cron pattern (e.g., `0 2 * * *` for 2 AM daily). When the schedule triggers, only jobs with `only: schedules` (or jobs that don't have an `only`/`except` rule that excludes schedules) will run.

**Environment Protection** is a critical security feature that works hand-in-hand with manual and scheduled deployments. Just like you can protect branches (e.g., `main` branch), you can protect environments to control who can deploy to them. This is configured under `Settings > CI/CD > Environments` in your GitLab project.

When you protect an environment (e.g., `production`), you can specify which users or groups are allowed to deploy to it. This means:
1.  Only users with "Maintainer" role (or higher) by default, or explicitly allowed users, can trigger manual jobs that deploy to a protected environment.
2.  Only pipelines running on protected branches can deploy to protected environments.
3.  Even if a job has `when: manual`, a developer without the necessary permissions will not be able to click the "play" button for a job targeting a protected environment.

This is a powerful combination. For instance, you could have a `production` environment that is protected, allowing only your lead DevOps engineer to manually trigger deployments from the `main` branch. This prevents accidental or unauthorized deployments by junior developers.

**Common mistakes** with environment protection often involve misconfigured permissions. A common scenario is a developer trying to deploy to production, seeing the manual job, but being unable to click it because their role doesn't have permission for the protected environment. Always double-check your environment protection settings and ensure the users or groups intended to deploy have the correct access. Another mistake is relying solely on `when: manual` without also protecting the environment; while `when: manual` requires a click, anyone with commit access could potentially trigger it if the environment isn't protected.

Finally, remember that **protected branches** and **protected environments** work together. If your `deploy_production` job runs `only: main` and `main` is a protected branch, then only users allowed to merge into `main` (and potentially deploy to the protected environment) will be able to trigger that job. This layered security ensures a robust and controlled deployment process for your most critical environments.

#### Key concepts
*   **Manual Job Trigger (`when: manual`):** A GitLab CI/CD keyword that pauses a job in the pipeline, requiring a user to manually trigger its execution.
*   **Pipeline Schedules (`only: schedules`):** A GitLab CI/CD feature allowing pipelines to be triggered automatically at predefined intervals (e.g., daily, weekly) using cron syntax.
*   **Protected Branches:** GitLab feature restricting who can push to or merge into specific branches, often used for `main` or `release` branches.
*   **Protected Environments:** GitLab feature restricting which users or groups can deploy to specific environments (e.g., `production`), adding a layer of security.
*   **Cron Syntax:** A standard format for defining time-based job schedules, used in GitLab pipeline schedules.

#### Hands-on activity
**Scenario: Implementing a manual production deployment and a scheduled cleanup job**

You will set up a pipeline with a manual production deployment job and a job that is configured to run only via a schedule.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a `.gitlab-ci.yml` file with two stages: `deploy` and `maintenance`.
3.  Define a `deploy_production` job:
    *   It should be in the `deploy` stage.
    *   It should have `when: manual`.
    *   It should target an environment named `production`.
    *   It should simulate deployment with an `echo` command.
4.  Define a `scheduled_cleanup` job:
    *   It should be in the `maintenance` stage.
    *   It should have `only: schedules`.
    *   It should simulate cleanup with an `echo` command.
5.  Commit the `.gitlab-ci.yml` to your `main` branch.
6.  Observe the pipeline: the `deploy_production` job should be paused.
7.  Go to `Settings > CI/CD > Environments`. Protect the `production` environment, allowing only "Maintainers" (your current role) to deploy.
8.  Go to `CI/CD > Schedules`. Create a new pipeline schedule:
    *   Description: `Daily Cleanup`
    *   Interval: `Every day (e.g., 0 2 * * *)` (set it for a few minutes in the future for testing, then change back)
    *   Target branch: `main`
    *   Active: checked
9.  Wait for the scheduled pipeline to run. Observe that only the `scheduled_cleanup` job executes.
10. Go back to your latest `main` branch pipeline and manually trigger the `deploy_production` job.

**Code Template (`.gitlab-ci.yml`):**

```yaml
stages:
  - deploy
  - maintenance

deploy_production:
  stage: deploy
  script:
    - echo "Initiating manual deployment to production for version $CI_COMMIT_SHORT_SHA..."
    - echo "Running critical production deployment scripts."
    - echo "Production deployment completed successfully."
  environment:
    name: production
    url: https://your-app.com # Replace with a real URL if applicable
  when: manual
  only:
    - main # Ensure only main branch can be manually deployed to production

scheduled_cleanup:
  stage: maintenance
  script:
    - echo "Running scheduled daily maintenance and cleanup tasks."
    - echo "Removing temporary files and optimizing database."
  only:
    - schedules # This job will only run when triggered by a pipeline schedule
```

**Expected Outcome:**
Your initial pipeline on `main` will show `deploy_production` as a manual job. The `scheduled_cleanup` job will not run. After setting up the schedule, a new pipeline will be triggered at the specified time, and only `scheduled_cleanup` will execute. When you manually trigger `deploy_production`, it will run successfully because you are a maintainer and the environment is protected.

#### Assessment idea
1.  **Question:** Your team requires that all deployments to the `production` environment must be manually approved by a lead engineer. Additionally, only code from the `main` branch should ever be deployed to `production`. How would you configure the `deploy_production` job in `.gitlab-ci.yml` to meet these requirements?
    *   **Correct Answer:**
        ```yaml
        deploy_production:
          stage: deploy
          script:
            - # deployment commands
          environment:
            name: production
          when: manual
          only:
            - main
        ```
        Explanation: `when: manual` ensures a human trigger is required. `only: main` restricts the job to run only for commits on the `main` branch, preventing accidental deployments from feature branches. For added security, the `production` environment itself should also be protected in GitLab's project settings.
2.  **Question:** You need to run a database backup script every Sunday at 3 AM, regardless of any code changes. This script is defined in a job called `backup_database`. How would you configure this job in `.gitlab-ci.yml` and what additional step in the GitLab UI is necessary to make it run as scheduled?
    *   **Correct Answer:**
        In `.gitlab-ci.yml`, the `backup_database` job would be configured with `only: schedules`:
        ```yaml
        backup_database:
          stage: maintenance
          script:
            - echo "Running database backup..."
            - # database backup commands
          only:
            - schedules
        ```
        The additional step in the GitLab UI is to create a **Pipeline Schedule**. You would navigate to `CI/CD > Schedules` in your project, click "New schedule," provide a description, set the interval to `0 3 * * SUN` (for 3 AM on Sunday), select the target branch (e.g., `main`), and ensure it's active. This schedule will then trigger a pipeline at the specified time, and only jobs configured with `only: schedules` will execute.

#### AI generation note
Create an 11-minute mixed-media lesson. Start with a slide presentation explaining `when: manual` and `only: schedules` with code snippets. Then transition to a live demo in GitLab UI: show how to create a pipeline schedule and how a manual job appears in the pipeline view. Demonstrate protecting an environment in `Settings > CI/CD > Environments` and explain its impact on job execution. Use clear visual cues (e.g., red lock icon for protected environments, play button for manual jobs). Include a short reflection activity asking learners to consider a scenario where they would use a manual deployment versus a scheduled one.

### Chapter 5.4 — Advanced Deployment Patterns: Dynamic Environments and Review Apps

#### Learning objectives
*   Explain the concept and benefits of dynamic environments and Review Apps.
*   Configure GitLab CI/CD to automatically provision and de-provision Review Apps for merge requests.
*   Utilize predefined CI/CD variables to create unique environment names and URLs.
*   Integrate Review Apps seamlessly into the merge request workflow.

#### Detailed lesson content
As development teams grow and feature branches proliferate, the challenge of providing isolated, testable environments for each new feature becomes significant. Traditional staging environments can quickly become bottlenecks, as multiple features might be waiting for their turn to be deployed and tested. This is where **Dynamic Environments** and **Review Apps** shine. A Review App is essentially a live, temporary deployment of a feature branch, created automatically for each new merge request. It provides a unique, isolated environment where stakeholders, testers, and fellow developers can interact with the changes directly in a browser, without impacting any shared environments.

The benefits of Review Apps are substantial:
1.  **Accelerated Feedback:** Developers and designers get immediate visual feedback on their changes.
2.  **Improved Collaboration:** Non-technical stakeholders can easily preview features without needing to pull code or set up local environments.
3.  **Early Bug Detection:** Testers can find bugs earlier in the development cycle, reducing the cost of fixing them.
4.  **Reduced Bottlenecks:** Eliminates the need to queue for a shared staging environment.
5.  **Enhanced Code Review:** Provides a live demonstration of the changes, complementing static code analysis.

Implementing Review Apps in GitLab CI/CD leverages the `environment` keyword we discussed earlier, specifically its ability to define dynamic names and URLs using predefined CI/CD variables. The most common variable for this is `$CI_COMMIT_REF_SLUG`, which provides a "slugified" version of the branch name (e.g., `feature/my-new-feature` becomes `feature-my-new-feature`).

Let's look at a typical `.gitlab-ci.yml` configuration for a Review App:

```yaml
stages:
  - build
  - deploy
  - cleanup

build_app:
  stage: build
  script:
    - echo "Building application for branch $CI_COMMIT_REF_SLUG..."
    - mkdir public
    - echo "<h1>Review App for $CI_COMMIT_REF_SLUG</h1>" > public/index.html
  artifacts:
    paths:
      - public
  only:
    - branches
  except:
    - main

deploy_review_app:
  stage: deploy
  script:
    - echo "Deploying review app to a dynamic environment..."
    - # Commands to deploy 'public' to a cloud hosting service (e.g., Netlify, Vercel, S3, Kubernetes)
    - echo "Review app for $CI_COMMIT_REF_SLUG deployed to $CI_ENVIRONMENT_URL"
  environment:
    name: review/$CI_COMMIT_REF_SLUG # Dynamic environment name
    url: https://$CI_COMMIT_REF_SLUG.review.example.com # Dynamic URL based on branch
    on_stop: stop_review_app # Link to the cleanup job
  only:
    - branches
  except:
    - main
  needs: ["build_app"]

stop_review_app:
  stage: cleanup
  script:
    - echo "Stopping review app for branch $CI_COMMIT_REF_SLUG..."
    - # Commands to de-provision resources (e.g., delete cloud instances, remove S3 bucket, kubectl delete)
    - echo "Review app for $CI_COMMIT_REF_SLUG stopped and resources cleaned up."
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: stop
  when: manual # Or 'on_success' if you want automatic cleanup after MR merge
  only:
    - branches
  except:
    - main
```

In this configuration:
*   `deploy_review_app` creates an environment with a unique name like `review/my-feature-branch`.
*   The `url` is also dynamic, allowing each Review App to have its own accessible URL.
*   The `on_stop: stop_review_app` ensures that a cleanup job is defined.
*   The `stop_review_app` job, with `environment: action: stop`, handles the de-provisioning of resources. The `when: manual` ensures the cleanup is triggered either manually from the Environments page or automatically when the associated merge request is closed or merged (GitLab automatically adds a "Stop environment" button to the MR widget).

**Integrating with Merge Requests:** One of the most powerful aspects of Review Apps is their seamless integration with GitLab Merge Requests. When a pipeline runs for a branch that creates a Review App, GitLab automatically adds a "View app" button to the merge request widget. This makes it incredibly easy for anyone reviewing the MR to click and immediately see the changes in action. Furthermore, when the merge request is merged or closed, GitLab can automatically trigger the `on_stop` job to tear down the Review App, ensuring resources are not wasted.

**Common mistakes** when implementing Review Apps include:
1.  **Resource Leaks:** Forgetting to implement the `on_stop` job or having a faulty cleanup script can lead to cloud resources being continuously consumed, incurring unexpected costs. Always test your `on_stop` job thoroughly.
2.  **Permissions Issues:** The CI/CD user (or runner) needs appropriate permissions to provision and de-provision resources in your cloud provider. Ensure your CI/CD variables (like cloud API keys) are correctly configured and have the necessary scope.
3.  **Naming Conflicts:** If not using `$CI_COMMIT_REF_SLUG` or another unique variable, you might accidentally try to deploy multiple Review Apps to the same environment name, leading to conflicts.
4.  **Slow Provisioning:** If your Review App provisioning process is very slow, it can negate some of the benefits. Optimize your deployment scripts and consider using pre-built images or faster cloud services.

Safety notes primarily revolve around cost management and security. Ensure that the cloud resources provisioned for Review Apps are appropriately sized and that the cleanup process is reliable. Also, consider if these dynamic environments need to be publicly accessible or if they should be protected by a VPN or authentication layer, especially if they might contain sensitive data or expose internal APIs.

Review Apps are a cornerstone of modern, agile development workflows, fostering faster feedback loops and higher quality software by making it effortless to preview and test changes in a live context.

#### Key concepts
*   **Dynamic Environments:** On-demand, temporary environments created for specific purposes, such as feature branches or merge requests.
*   **Review Apps:** A specific type of dynamic environment, automatically deployed for each merge request, allowing live preview and testing of changes.
*   **`$CI_COMMIT_REF_SLUG`:** A predefined GitLab CI/CD variable that provides a URL-friendly version of the branch or tag name, ideal for dynamic environment names and URLs.
*   **Merge Request Widget:** A section within a GitLab merge request that displays pipeline status, test results, and, crucially, a "View app" button for Review Apps.
*   **Resource De-provisioning:** The process of cleaning up and releasing cloud resources (servers, databases, storage) that were allocated for a dynamic environment.

#### Hands-on activity
**Scenario: Deploying a Review App for a new feature branch**

You will set up a `.gitlab-ci.yml` to automatically deploy a simple "Hello World" web page as a Review App for any new feature branch.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a `.gitlab-ci.yml` file in the root of your project.
3.  Define `build`, `deploy`, and `cleanup` stages.
4.  Create a `build_static_site` job that:
    *   Builds a simple `index.html` file containing "Hello from Review App for [branch name]".
    *   Saves `public/index.html` as an artifact.
    *   Runs only on branches, excluding `main`.
5.  Create a `deploy_review_app` job that:
    *   Deploys the `public` artifact.
    *   Uses `environment: name: review/$CI_COMMIT_REF_SLUG` and `url: https://$CI_PROJECT_ID-$CI_COMMIT_REF_SLUG.pages.gitlab.io` (using GitLab Pages as a simple host for demonstration).
    *   Sets `on_stop: stop_review_app`.
    *   Runs only on branches, excluding `main`.
6.  Create a `stop_review_app` job that:
    *   Has `environment: name: review/$CI_COMMIT_REF_SLUG` and `action: stop`.
    *   Is `when: manual`.
    *   Simulates cleanup with an `echo` command.
    *   Runs only on branches, excluding `main`.
7.  Commit the `.gitlab-ci.yml` to your `main` branch.
8.  Create a new feature branch (e.g., `feature/add-new-header`).
9.  Make a small change to a non-CI/CD file (e.g., add a line to `README.md`) and commit it to `feature/add-new-header`.
10. Create a Merge Request from `feature/add-new-header` to `main`.
11. Observe the pipeline running for the MR.
12. Check the Merge Request widget for the "View app" button. Click it to see your Review App.
13. Close the Merge Request and observe the `stop_review_app` job being triggered (you might need to manually trigger it from the Environments page if auto-stop isn't configured).

**Code Template (`.gitlab-ci.yml`):**

```yaml
stages:
  - build
  - deploy
  - cleanup

build_static_site:
  stage: build
  script:
    - echo "Building static site for branch '$CI_COMMIT_REF_SLUG'..."
    - mkdir public
    - echo "<h1>Hello from Review App for '$CI_COMMIT_REF_SLUG'!</h1>" > public/index.html
  artifacts:
    paths:
      - public
  only:
    - branches
  except:
    - main

deploy_review_app:
  stage: deploy
  script:
    - echo "Deploying Review App to GitLab Pages..."
    - mv public .public # Rename public to .public for GitLab Pages
    - echo "Review App deployed to: https://$CI_PROJECT_ID-$CI_COMMIT_REF_SLUG.pages.gitlab.io"
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    url: https://$CI_PROJECT_ID-$CI_COMMIT_REF_SLUG.pages.gitlab.io # Using GitLab Pages URL
    on_stop: stop_review_app
  artifacts:
    paths:
      - .public # GitLab Pages expects artifacts in .public
    expire_in: 1 day # Clean up artifacts
  only:
    - branches
  except:
    - main
  needs: ["build_static_site"]

stop_review_app:
  stage: cleanup
  script:
    - echo "Simulating cleanup for Review App '$CI_COMMIT_REF_SLUG'..."
    - echo "In a real scenario, this would delete cloud resources."
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: stop
  when: manual # GitLab will offer to trigger this when MR is closed/merged
  only:
    - branches
  except:
    - main
```

**Expected Outcome:**
After creating a merge request from a feature branch, a pipeline will run, deploying a Review App. The MR widget will show a "View app" button. Clicking it will open a new tab with your "Hello from Review App for [branch name]!" page. When the MR is closed, you will be prompted to stop the environment, and the `stop_review_app` job will execute.

#### Assessment idea
1.  **Question:** Your team wants to implement Review Apps for every new feature branch. You need to ensure that each Review App has a unique URL that reflects the branch name and that resources are automatically cleaned up when the merge request is closed. Describe how you would configure the `environment` keyword in your `deploy_review_app` job and the corresponding cleanup job.
    *   **Correct Answer:**
        For the `deploy_review_app` job, you would use `$CI_COMMIT_REF_SLUG` for both the environment name and to construct a dynamic URL:
        ```yaml
        deploy_review_app:
          # ...
          environment:
            name: review/$CI_COMMIT_REF_SLUG
            url: https://review-$CI_COMMIT_REF_SLUG.yourdomain.com
            on_stop: stop_review_app
          # ...
        ```
        For the cleanup job (`stop_review_app`), you would ensure it targets the same dynamic environment name and has `action: stop`. To enable automatic cleanup upon MR closure, you would set `when: manual` for the `stop_review_app` job, as GitLab automatically provides a "Stop environment" button on the MR widget which triggers this manual job.
        ```yaml
        stop_review_app:
          # ...
          environment:
            name: review/$CI_COMMIT_REF_SLUG
            action: stop
          when: manual # Allows GitLab to offer the stop button on MR closure
          # ...
        ```
2.  **Question:** A developer complains that their Review App environment is still active and consuming cloud resources even after their merge request was merged and the feature branch deleted. What is the most likely reason for this, and what steps should be taken to prevent it in the future?
    *   **Correct Answer:** The most likely reason is that the `on_stop` job, or the cleanup script within it, either failed to run or failed to de-provision resources correctly. This could be due to:
        *   The `on_stop` job not being defined or incorrectly linked.
        *   The `stop_review_app` job not having `environment: action: stop`.
        *   The cleanup script within `stop_review_app` having insufficient permissions to delete cloud resources, or containing errors that cause it to fail silently.
        To prevent this, ensure:
        1.  The `on_stop` parameter in the `deploy_review_app` job correctly points to the cleanup job.
        2.  The cleanup job (`stop_review_app`) explicitly uses `environment: action: stop`.
        3.  The cleanup script is thoroughly tested, has all necessary permissions (e.g., cloud API keys), and includes robust error handling to log any failures.
        4.  Regular audits of active environments are performed to catch any lingering resources.

#### AI generation note
Create a 12-minute live coding video. Start with a basic `main` branch pipeline. Then, create a new feature branch, modify `.gitlab-ci.yml` to add `build`, `deploy_review_app`, and `stop_review_app` jobs using `$CI_COMMIT_REF_SLUG`. Demonstrate pushing the branch, creating a merge request, and showing the "View app" button in the MR widget. Click the "View app" button to show the deployed dynamic site. Finally, close the MR and show the `on_stop` job being triggered and the environment being marked as stopped. Use a split-screen view for code and GitLab UI. Emphasize how `on_stop` prevents resource leaks.

### Chapter 5.5 — Integrating with Kubernetes for Container Orchestration

#### Learning objectives
*   Understand the fundamental role of Kubernetes in container orchestration for modern deployments.
*   Configure GitLab CI/CD to connect and deploy applications to a Kubernetes cluster.
*   Write `.gitlab-ci.yml` jobs that execute `kubectl` commands for deploying and managing resources.
*   Utilize Helm charts within GitLab CI/CD for packaging and deploying complex applications to Kubernetes.

#### Detailed lesson content
For cloud-native applications, **Kubernetes** has become the de-facto standard for container orchestration. It provides a robust platform for automating the deployment, scaling, and management of containerized workloads. Integrating GitLab CI/CD with Kubernetes allows you to leverage the power of both: GitLab for defining your CI/CD pipelines and Kubernetes for running your applications at scale. This combination forms a highly efficient and resilient deployment strategy for modern microservices architectures.

At its core, deploying to Kubernetes involves interacting with the Kubernetes API, typically through the `kubectl` command-line tool. GitLab CI/CD jobs can execute `kubectl` commands just like any other shell script. To enable this, your GitLab Runner needs access to the Kubernetes cluster. This can be achieved in several ways:
1.  **GitLab Kubernetes Agent:** This is the recommended and most secure way. You install an agent in your cluster, and it establishes a secure connection back to GitLab, allowing GitLab CI/CD to interact with the cluster without exposing the Kubernetes API endpoint publicly.
2.  **Service Account Token:** You can configure a Kubernetes service account with specific permissions and provide its token as a CI/CD variable to your runner. The runner then uses `kubectl` configured with this token to authenticate.
3.  **Kubeconfig File:** Similar to the token, you can provide a base64-encoded `kubeconfig` file as a CI/CD variable.

Let's assume you've configured a secure connection (e.g., via the GitLab Kubernetes Agent). Your CI/CD job can then use `kubectl` to apply Kubernetes manifests. A manifest is a YAML file that describes your desired state for Kubernetes resources, such as Deployments, Services, and Ingresses.

Here’s a simple example of a `deploy_to_kubernetes` job in `.gitlab-ci.yml` that deploys a basic Nginx application:

```yaml
stages:
  - deploy

deploy_to_kubernetes:
  stage: deploy
  image:
    name: bitnami/kubectl:latest # Use an image that has kubectl pre-installed
    entrypoint: [""] # Override default entrypoint if needed
  script:
    - echo "Deploying Nginx to Kubernetes..."
    - kubectl config get-contexts # Verify connection (optional)
    - kubectl apply -f kubernetes/deployment.yaml -f kubernetes/service.yaml
    - echo "Nginx deployed to Kubernetes."
  environment:
    name: production
    url: http://nginx.your-cluster.com # Replace with actual service URL
  only:
    - main
```

And the corresponding `kubernetes/deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

And `kubernetes/service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer # Or NodePort, ClusterIP, depending on access needs
```

This pipeline uses the `bitnami/kubectl` Docker image, which conveniently includes `kubectl`. The `kubectl apply -f ...` command ensures that the resources defined in the YAML files are created or updated in the Kubernetes cluster. The `environment` keyword tracks this deployment in GitLab.

For more complex applications, managing raw Kubernetes YAML manifests can become cumbersome. This is where **Helm** comes into play. Helm is a package manager for Kubernetes, allowing you to define, install, and upgrade even the most complex Kubernetes applications as "charts." A Helm chart is a collection of files that describe a related set of Kubernetes resources.

Integrating Helm into your GitLab CI/CD pipeline typically involves:
1.  Adding a Helm client to your CI/CD image (e.g., `alpine/helm`).
2.  Defining your application as a Helm chart.
3.  Using Helm commands (`helm upgrade --install`, `helm uninstall`) in your CI/CD jobs.

Example of a Helm deployment job:

```yaml
stages:
  - deploy

deploy_with_helm:
  stage: deploy
  image:
    name: alpine/helm:latest # Image with Helm client
    entrypoint: [""]
  script:
    - echo "Deploying application with Helm..."
    - helm upgrade --install my-app ./helm-chart --namespace production --create-namespace --set image.tag=$CI_COMMIT_SHORT_SHA
    - echo "Application deployed via Helm."
  environment:
    name: production
    url: http://my-app.your-cluster.com
  only:
    - main
```

In this example, `helm upgrade --install my-app ./helm-chart` will install the chart located in `./helm-chart` if it doesn't exist, or upgrade it if it does. The `--set image.tag=$CI_COMMIT_SHORT_SHA` allows you to dynamically pass values to your Helm chart, such as the Docker image tag corresponding to your current commit.

**Common mistakes** when integrating with Kubernetes include:
1.  **Permission Denied:** The GitLab Runner's Kubernetes service account (or the agent's permissions) not having sufficient RBAC (Role-Based Access Control) permissions to create, update, or delete resources in the target namespace. Always follow the principle of least privilege.
2.  **Incorrect Context/Cluster:** `kubectl` or Helm commands targeting the wrong Kubernetes cluster or namespace due to misconfiguration of `KUBECONFIG` or environment variables.
3.  **Image Pull Errors:** Kubernetes failing to pull your Docker image due to incorrect image name, tag, or lack of authentication to a private registry.
4.  **Helm Chart Errors:** Malformed Helm charts or incorrect values passed during `helm upgrade --install`.

**Safety notes** are crucial here. Ensure your Kubernetes cluster is secure, and that the GitLab Runner or agent has only the necessary permissions. Avoid hardcoding sensitive information (like image pull secrets or API keys) directly in your `.gitlab-ci.yml`; use GitLab CI/CD variables instead. Always validate your Kubernetes manifests and Helm charts in a staging environment before deploying to production. Monitoring your deployments in Kubernetes (using tools like Prometheus, Grafana, or the Kubernetes Dashboard) is essential to quickly detect and respond to issues.

Integrating GitLab CI/CD with Kubernetes and Helm provides a powerful, scalable, and maintainable way to manage your containerized application deployments, bringing true cloud-native CI/CD to life.

#### Key concepts
*   **Kubernetes (K8s):** An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.
*   **`kubectl`:** The command-line tool for interacting with a Kubernetes cluster's API server.
*   **Kubernetes Manifest:** A YAML or JSON file that describes the desired state of Kubernetes resources (e.g., Deployment, Service, Ingress).
*   **Helm:** A package manager for Kubernetes, used to define, install, and upgrade complex applications using "charts."
*   **Helm Chart:** A collection of files that describe a related set of Kubernetes resources, packaged for easy deployment.
*   **GitLab Kubernetes Agent:** The recommended secure method for connecting GitLab CI/CD to a Kubernetes cluster.
*   **RBAC (Role-Based Access Control):** Kubernetes mechanism for defining permissions for users and service accounts.

#### Hands-on activity
**Scenario: Deploying a simple web application to Kubernetes using `kubectl`**

You will simulate deploying a simple Nginx web server to a Kubernetes cluster using `kubectl` commands within a GitLab CI/CD pipeline.

**Instructions:**
1.  Create a new GitLab project.
2.  Create a `kubernetes` directory in the root of your project.
3.  Inside `kubernetes`, create `deployment.yaml` and `service.yaml` files for an Nginx application.
4.  Create a `.gitlab-ci.yml` file with a `deploy_k8s` job.
5.  The `deploy_k8s` job should:
    *   Use a Docker image that includes `kubectl` (e.g., `bitnami/kubectl`).
    *   Execute `kubectl apply -f kubernetes/deployment.yaml -f kubernetes/service.yaml`.
    *   Include a placeholder `environment` definition.
    *   Run only on the `main` branch.
6.  Commit all files to your `main` branch.
7.  Observe the pipeline executing the `kubectl apply` commands.

**Code Template (`kubernetes/deployment.yaml`):**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-app
  labels:
    app: my-nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-nginx
  template:
    metadata:
      labels:
        app: my-nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

**Code Template (`kubernetes/service.yaml`):**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nginx-service
spec:
  selector:
    app: my-nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP # Use ClusterIP for internal access, LoadBalancer for external
```

**Code Template (`.gitlab-ci.yml`):**

```yaml
stages:
  - deploy

deploy_k8s:
  stage: deploy
  image:
    name: bitnami/kubectl:latest # Image with kubectl pre-installed
    entrypoint: [""] # Override default entrypoint if needed
  script:
    - echo "Simulating deployment to Kubernetes cluster..."
    - echo "Applying Kubernetes manifests for my-nginx-app..."
    # In a real scenario, GitLab Runner would be configured to connect to your K8s cluster
    # For this exercise, we're just demonstrating the command execution.
    - kubectl apply -f kubernetes/deployment.yaml -f kubernetes/service.yaml --dry-run=client -o yaml
    - echo "Kubernetes manifests applied (dry-run)."
    - echo "To verify, you would typically run: kubectl get deployments,services"
  environment:
    name: production-k8s
    url: http://my-nginx-service.your-cluster.com # Placeholder URL
  only:
    - main
```

**Expected Outcome:**
The pipeline will run, and the `deploy_k8s` job will execute. You will see output from `kubectl apply --dry-run=client -o yaml`, which simulates applying the manifests without actually deploying to a cluster. This demonstrates how `kubectl` commands are integrated into the pipeline.

#### Assessment idea
1.  **Question:** You are tasked with deploying a new microservice to a Kubernetes cluster using GitLab CI/CD. The microservice is defined by a `deployment.yaml` and a `service.yaml` file located in a `k8s/` directory. Which `kubectl` command would you use in your `.gitlab-ci.yml` script to deploy these resources, and what Docker image would be suitable for this job?
    *   **Correct Answer:**
        The `kubectl` command to deploy these resources would be `kubectl apply -f k8s/deployment.yaml -f k8s/service.yaml`.
        A suitable Docker image for this job would be `bitnami/kubectl:latest` or `lachlanevenson/k8s-kubectl:latest`, as they come with `kubectl` pre-installed.
        Example `.gitlab-ci.yml` snippet:
        ```yaml
        deploy_microservice:
          image: bitnami/kubectl:latest
          script:
            - kubectl apply -f k8s/deployment.yaml -f k8s/service.yaml
        ```
2.  **Question:** Your application's Kubernetes manifests have grown very complex, and you need a way to easily manage different configurations for development, staging, and production environments, as well as handle dependencies. What tool would you integrate with GitLab CI/CD to address this complexity, and what is its primary benefit?
    *   **Correct Answer:** You would integrate **Helm**. Helm is a package manager for Kubernetes that allows you to define, install, and upgrade even the most complex Kubernetes applications as "charts." Its primary benefit is simplifying the packaging, deployment, and management of Kubernetes applications by providing templating capabilities, dependency management, and versioning for your Kubernetes resources, making it easier to manage environment-specific configurations and rollbacks.

#### AI generation note
Create a 15-minute animated diagram and terminal demo. Start with an animation explaining Kubernetes concepts (Pods, Deployments, Services) and how they relate. Then, transition to a terminal demo showing a basic `deployment.yaml` and `service.yaml`. Show a `.gitlab-ci.yml` snippet using `kubectl apply`. Next, introduce Helm: explain charts, values, and `helm upgrade --install`. Show a `.gitlab-ci.yml` snippet integrating Helm. Use visual overlays to highlight `kubectl` and Helm commands. Emphasize the importance of RBAC and secure connections (like the GitLab Agent). Include a final interactive question about choosing between raw `kubectl` and Helm for different use cases.

---

## Module 6: Pipeline Maintenance, Security, and Best Practices

#### Chapter 6.1 — Monitoring and Troubleshooting GitLab CI/CD Pipelines

#### Learning objectives
*   Identify and interpret various pipeline statuses and job logs within the GitLab UI.
*   Utilize GitLab's built-in features like pipeline graphs, job artifacts, and retries to diagnose pipeline failures.
*   Implement effective debugging strategies for CI/CD jobs, including using `before_script` and `script` for diagnostic output.
*   Recognize common pipeline failure patterns and apply appropriate troubleshooting techniques to resolve them.

#### Detailed lesson content
As your GitLab CI/CD pipelines become more complex and critical to your development workflow, simply creating them isn't enough; you must also be adept at monitoring their health and troubleshooting issues when they arise. A failing pipeline can halt development, delay deployments, and impact team productivity. Understanding how to quickly diagnose and resolve these issues is a fundamental skill for any DevOps practitioner. GitLab provides a rich interface and powerful features designed to give you deep insights into your pipeline's execution.

The first step in monitoring is to understand the pipeline's overall status. In GitLab, you'll encounter various states: `pending`, `running`, `success`, `failed`, `canceled`, `skipped`, and `manual`. Each state provides immediate feedback on the pipeline's progress. A `failed` status, while unwelcome, is often the starting point for investigation. When a pipeline fails, navigating to the specific job that failed is crucial. The job log, accessible directly from the job view, is your primary source of information. It contains every command executed, its output, and any errors encountered. It's like looking over the shoulder of the runner as it executes your script. Don't just skim the log; read it carefully from the point of failure upwards, looking for error messages, non-zero exit codes, or unexpected output. Often, the root cause is a simple typo, a missing dependency, or an incorrect path.

Beyond the raw logs, GitLab offers visual aids that are incredibly helpful. The pipeline graph provides a visual representation of all jobs, their stages, and their dependencies. This allows you to quickly see which jobs ran, which were skipped, and where the failure occurred within the overall flow. For complex pipelines with many jobs and stages, this visual overview is invaluable for understanding the execution path. Another powerful feature is job artifacts. Artifacts are files or directories generated by a job that are then stored by GitLab. These can include compiled binaries, test reports, logs, screenshots, or even coverage reports. By configuring your jobs to save relevant artifacts, you can download and inspect them after a job completes, providing critical context for debugging. For instance, if a test job fails, downloading the `test-results.xml` artifact can show you exactly which tests failed and why, without needing to re-run the job locally.

Troubleshooting often involves iterating on your `.gitlab-ci.yml` configuration. When a job fails, you might need to add diagnostic commands to its `script` section. For example, adding `echo "Current directory: $(pwd)"`, `ls -la`, or `env` can reveal critical information about the execution environment, file paths, or available variables. Sometimes, the issue might be transient, such as a network glitch or an external service being temporarily unavailable. In such cases, GitLab's retry mechanism can be useful. You can manually retry a failed job or even an entire failed pipeline from the UI. However, relying solely on retries without understanding the root cause is a common mistake; it merely postpones the inevitable if the underlying problem persists. For more advanced debugging, consider using a dedicated "debug" stage or job that only runs on specific branches or manually, allowing you to execute commands interactively or with verbose logging without impacting your main pipeline flow.

Common failure patterns include dependency installation failures (e.g., `npm install` or `pip install` failing due to network issues or incorrect package versions), compilation errors (syntax errors, missing libraries), test failures (broken code, incorrect test setup), and deployment issues (permission errors, incorrect credentials, environment misconfigurations). For dependency issues, ensure your `Dockerfile` or `before_script` commands correctly set up the environment and that any package managers have access to their registries. For compilation or test failures, the detailed error messages in the job log are your best friend; they often point directly to the line of code causing the problem. Deployment failures often stem from environment-specific configurations; double-check your CI/CD variables and ensure the deployment target has the necessary permissions. Always remember to make small, incremental changes to your `.gitlab-ci.yml` when troubleshooting, committing frequently, and observing the impact of each change. This systematic approach will help you isolate the problem more efficiently and avoid introducing new issues.

#### Key concepts
*   **Pipeline Statuses:** Indicators like `pending`, `running`, `success`, `failed`, `canceled` that show the current state of a pipeline or job.
*   **Job Logs:** Detailed output generated by a CI/CD job, containing all executed commands and their results, crucial for debugging.
*   **Pipeline Graph:** A visual representation of jobs, stages, and their dependencies, providing an overview of pipeline execution flow.
*   **Job Artifacts:** Files or directories produced by a job and stored by GitLab, useful for inspection, reporting, or passing data between jobs.
*   **Retry Mechanism:** The ability to re-run a failed job or pipeline, useful for transient issues but not a substitute for root cause analysis.
*   **Diagnostic Commands:** Commands like `pwd`, `ls`, `env`, `echo` added to scripts to output environment information for debugging purposes.

#### Hands-on activity
**Activity: Debugging a Failing Node.js Pipeline**

You've been given a `.gitlab-ci.yml` file for a simple Node.js application. The pipeline is failing, and your task is to identify and fix the issue using troubleshooting techniques.

1.  **Create a new project in GitLab.**
2.  **Add the following `package.json` to the root of your repository:**
    ```json
    {
      "name": "my-node-app",
      "version": "1.0.0",
      "description": "A simple Node.js app",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Running tests...\" && exit 0",
        "start": "node index.js"
      },
      "dependencies": {
        "express": "^4.17.1"
      }
    }
    ```
3.  **Add an `index.js` file (empty for now) to the root.**
4.  **Add the following (intentionally flawed) `.gitlab-ci.yml`:**
    ```yaml
    stages:
      - build
      - test
      - deploy

    build_job:
      stage: build
      image: node:16-alpine
      script:
        - npm install --prefix ./app # Intentional mistake: `app` directory doesn't exist
      artifacts:
        paths:
          - node_modules/

    test_job:
      stage: test
      image: node:16-alpine
      script:
        - npm test
      dependencies:
        - build_job

    deploy_job:
      stage: deploy
      image: alpine/git
      script:
        - echo "Deploying application..."
        - echo "Deployment complete!"
      needs:
        - test_job
    ```
5.  **Commit these files and push them to your GitLab repository.**
6.  **Observe the failing pipeline.**
7.  **Troubleshoot:**
    *   Navigate to the failed job's log. What error do you see?
    *   Add diagnostic commands (e.g., `pwd`, `ls -la`) to the `build_job`'s `script` section to understand the environment.
    *   Identify the root cause (the `npm install --prefix ./app` command is trying to install dependencies into a non-existent `app` directory).
    *   Correct the `.gitlab-ci.yml` to remove the `--prefix ./app` or create the `app` directory if intended.
    *   Commit and push the fix.
8.  **Verify the pipeline now passes.**

#### Assessment idea
1.  **Question:** A GitLab CI/CD pipeline job is consistently failing with an error message indicating "command not found" for a specific executable, even though you're certain it's installed in the base image. What is the most likely immediate step you should take to diagnose this within the job's script?
    *   A) Immediately rebuild the Docker image with the executable explicitly added to the PATH.
    *   B) Add `echo $PATH` and `which <executable_name>` to the `before_script` or `script` section of the failing job.
    *   C) Assume it's a transient runner issue and retry the job multiple times.
    *   D) Check the GitLab service status page for runner outages.

    **Correct Answer:** B) Add `echo $PATH` and `which <executable_name>` to the `before_script` or `script` section of the failing job.
    **Explanation:** This is the most direct and effective troubleshooting step. `echo $PATH` will show you the current directories searched for executables, and `which <executable_name>` will attempt to locate the executable, revealing if it's installed but not in the PATH, or not installed at all. Options A is premature, C is a temporary workaround, and D is unlikely for a "command not found" error specific to an executable.

2.  **Question:** Your `test` stage job frequently fails, but the logs don't immediately reveal why; they just show a generic "Tests failed" message. You suspect the detailed test reports could help. How can you ensure these reports are available for inspection after the job completes?
    *   A) Configure the job to automatically email the test reports upon failure.
    *   B) Add a `cache` section to the `test` job to store the reports.
    *   C) Define an `artifacts` section in the `test` job's configuration, specifying the path to the test report files.
    *   D) Manually download the runner's entire workspace after the job fails.

    **Correct Answer:** C) Define an `artifacts` section in the `test` job's configuration, specifying the path to the test report files.
    **Explanation:** The `artifacts` keyword is specifically designed to store files generated by a job for later download and inspection. This makes test reports, logs, and other diagnostic outputs readily available in the GitLab UI. Caching is for speeding up subsequent job runs by preserving dependencies, not for storing output for user inspection. Emailing reports isn't a standard GitLab CI/CD feature for this purpose, and manually downloading the runner's workspace is not typically possible or practical.

#### AI generation note
Create a 12-minute interactive video tutorial. Begin by showing a failed pipeline in the GitLab UI, highlighting the red "failed" status. Then, navigate to the specific job log, demonstrating how to scroll through and identify error messages (e.g., "command not found", "exit code 1"). Next, show how to add diagnostic `echo` and `ls -la` commands to a `.gitlab-ci.yml` file, committing the change, and observing the new output in the subsequent pipeline run. Use a split-screen view: GitLab UI on the left showing the pipeline and job logs, and a code editor on the right showing the `.gitlab-ci.yml` modifications. Conclude with a demonstration of downloading job artifacts (e.g., a dummy test report) and explain their value. Include a prompt for learners to try adding diagnostic commands to their own failing pipeline.

---

#### Chapter 6.2 — Securing Your CI/CD Pipelines

#### Learning objectives
*   Understand the importance of securing CI/CD pipelines to prevent unauthorized access and data breaches.
*   Implement best practices for managing sensitive information using GitLab CI/CD variables (masked, protected, file-type).
*   Configure job access control using `only/except` and `rules` to restrict sensitive operations.
*   Leverage GitLab's built-in security scanning features (SAST, DAST, Dependency Scanning, License Compliance) in a pipeline.
*   Explain the security implications of GitLab Runners and best practices for their deployment and management.

#### Detailed lesson content
Securing your CI/CD pipelines is as critical as securing your production applications themselves. A compromised pipeline can be a direct gateway for attackers to access your source code, inject malicious code, steal credentials, or even deploy malicious software to your production environments. This chapter delves into the strategies and features GitLab provides to help you build robust and secure CI/CD workflows, protecting your intellectual property and your users.

One of the primary concerns in CI/CD security is managing sensitive information, such as API keys, database credentials, and private SSH keys. Storing these directly in your `.gitlab-ci.yml` file or committing them to your repository is a severe security risk. GitLab CI/CD variables are the robust solution for this. You can define variables at the project or group level, and crucially, mark them as `protected` and `masked`. A `protected` variable is only available to jobs running on `protected` branches or tags, typically your main development or release branches. This prevents accidental exposure or misuse from feature branches. A `masked` variable ensures that its value is redacted from job logs, preventing it from being accidentally printed and exposed. For very sensitive information like private keys or certificates, GitLab also supports `File` type variables, which are mounted as temporary files in the runner's environment, further reducing the risk of exposure. Always use these features for any secret data. A common mistake is to forget to mask variables, leading to secrets appearing in public logs. Always test your masked variables by intentionally trying to `echo` them in a test job and verifying they appear as `[MASKED]`.

Beyond variable management, controlling *when* and *where* sensitive jobs run is crucial. GitLab's `only/except` keywords and the more powerful `rules` syntax allow you to define precise conditions for job execution. For instance, a deployment job that pushes to production should only run on your `main` or `master` branch and only after all tests have passed. You can also restrict jobs based on user permissions or specific variable presence. For example, `rules: - if: '$CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"'` ensures a production deployment only happens on a direct push to `main`, not on a merge request pipeline. This granular control prevents unauthorized or accidental deployments.

GitLab integrates a suite of security scanning tools directly into your CI/CD pipelines, making it easy to shift left on security. These include:
*   **Static Application Security Testing (SAST):** Analyzes your source code for known vulnerabilities without executing the application. GitLab SAST supports many languages and frameworks.
*   **Dynamic Application Security Testing (DAST):** Analyzes your running web application for vulnerabilities by simulating attacks. This typically runs against a deployed review app or staging environment.
*   **Dependency Scanning:** Identifies known vulnerabilities in your project's dependencies (e.g., `npm` packages, `pip` packages).
*   **Container Scanning:** Scans Docker images for known vulnerabilities.
*   **License Compliance:** Reports on the licenses of your project's dependencies, helping you comply with legal requirements.
*   **Secret Detection:** Scans your repository for accidentally committed secrets.

To enable these, you typically include GitLab-provided templates in your `.gitlab-ci.yml`. For example, `include: - template: Security/SAST.gitlab-ci.yml`. These templates automatically add jobs to your pipeline that perform the scans and report findings directly in the Merge Request widget and security dashboard. Integrating these early in your development cycle helps catch vulnerabilities before they reach production, saving significant time and effort in remediation.

Finally, the security of your GitLab Runners themselves is paramount. Runners are the agents that execute your CI/CD jobs. If a runner is compromised, an attacker could potentially gain access to the environment where your code runs, including any credentials or resources available to the runner. Best practices for runners include:
*   **Least Privilege:** Configure runners with only the necessary permissions to perform their tasks. Avoid running them as `root`.
*   **Isolation:** Use isolated environments for each job, such as Docker containers, to prevent one job from affecting another or gaining access to its data. GitLab's Docker executor does this by default.
*   **Dedicated Runners:** For highly sensitive projects or production deployments, consider using dedicated, isolated runners that only process jobs from specific projects or protected branches.
*   **Regular Updates:** Keep your runner software and underlying operating system up to date to patch known vulnerabilities.
*   **Network Security:** Restrict network access for runners, allowing them to communicate only with necessary services (GitLab, package registries, deployment targets).
*   **Ephemeral Runners:** Whenever possible, use ephemeral runners that are provisioned for a single job and then destroyed, minimizing the attack surface.

By diligently applying these security measures, you build a robust defense around your CI/CD processes, safeguarding your code and infrastructure from potential threats.

#### Key concepts
*   **CI/CD Variables:** Key-value pairs used to store configuration and sensitive data in GitLab CI/CD, defined at project or group level.
*   **Protected Variables:** Variables only accessible to jobs running on protected branches or tags, enhancing security for sensitive environments.
*   **Masked Variables:** Variables whose values are redacted from job logs to prevent accidental exposure of secrets.
*   **File Type Variables:** Variables that are mounted as temporary files in the runner's environment, ideal for private keys or certificates.
*   **`only`/`except`/`rules`:** Keywords used to define conditional execution of jobs based on branches, tags, variables, or other pipeline attributes.
*   **SAST (Static Application Security Testing):** Analyzes source code for vulnerabilities without execution.
*   **DAST (Dynamic Application Security Testing):** Analyzes running applications for vulnerabilities by simulating attacks.
*   **Dependency Scanning:** Identifies known vulnerabilities in project dependencies.
*   **GitLab Runners:** Agents that execute CI/CD jobs; their security is critical to pipeline integrity.
*   **Least Privilege:** A security principle where entities are granted only the minimum permissions necessary to perform their function.

#### Hands-on activity
**Activity: Implementing Secret Management and Security Scans**

You will enhance an existing pipeline to secure sensitive data and integrate basic security scanning.

1.  **Start with a simple Node.js project (or reuse the one from the previous activity).**
2.  **In your GitLab project settings, navigate to `CI/CD > Variables`.**
    *   Add a new variable named `API_KEY` with a dummy value (e.g., `supersecret123`).
    *   Ensure it is marked as **"Protected"** and **"Masked"**.
    *   Add another variable named `SSH_PRIVATE_KEY` with a dummy value representing a private key (e.g., `-----BEGIN OPENSSH PRIVATE KEY-----...-----END OPENSSH PRIVATE KEY-----`).
    *   Set its **Type** to `File`, and mark it as **"Protected"** and **"Masked"**.
3.  **Modify your `.gitlab-ci.yml`:**
    ```yaml
    include:
      - template: Security/SAST.gitlab-ci.yml # Include SAST template
      - template: Security/Dependency-Scanning.gitlab-ci.yml # Include Dependency Scanning template

    stages:
      - build
      - test
      - security
      - deploy

    build_job:
      stage: build
      image: node:16-alpine
      script:
        - npm install
      artifacts:
        paths:
          - node_modules/

    test_job:
      stage: test
      image: node:16-alpine
      script:
        - npm test
      dependencies:
        - build_job

    # Add a job to demonstrate secret usage and verification
    secret_check_job:
      stage: deploy # Use deploy stage for protected variables
      image: alpine/git
      script:
        - echo "API Key: $API_KEY" # This should be masked in logs
        - echo "SSH Key file content:"
        - cat $SSH_PRIVATE_KEY # This should show content, but the variable itself is masked
        - echo "Checking if this job runs only on main branch..."
        - if [ "$CI_COMMIT_BRANCH" == "main" ]; then echo "Running on main branch."; else echo "Not on main branch."; exit 1; fi
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"' # Only run on main branch
          when: on_success
      needs:
        - test_job

    deploy_job:
      stage: deploy
      image: alpine/git
      script:
        - echo "Deploying application using API Key: $API_KEY"
        - echo "Deployment complete!"
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: on_success
      needs:
        - secret_check_job
    ```
4.  **Commit and push these changes to a non-protected branch first (e.g., `feature/security-test`).**
    *   Observe the pipeline. What happens to `secret_check_job` and `deploy_job`? (They should be skipped if not on `main`).
    *   Check the SAST and Dependency Scanning job results.
5.  **Merge your changes into your protected `main` branch.**
    *   Observe the pipeline. All jobs should run.
    *   Inspect the logs for `secret_check_job`. Verify `API_KEY` is masked and `SSH_PRIVATE_KEY` file content is readable (if you cat it).
    *   Review the Security tab in your project for SAST and Dependency Scanning findings.

#### Assessment idea
1.  **Question:** You have a sensitive API token that must be used in a deployment job but should never be visible in job logs and only accessible when deploying from the `production` branch. Which combination of GitLab CI/CD variable settings and job configuration best achieves this?
    *   A) Define the variable as `protected` and `masked` in project settings, and use `only: - production` in the deployment job.
    *   B) Define the variable as `protected` but not `masked`, and use `rules: - if: '$CI_COMMIT_BRANCH == "production"'` in the deployment job.
    *   C) Define the variable as `masked` but not `protected`, and use `only: - production` in the deployment job.
    *   D) Hardcode the variable directly into the `.gitlab-ci.yml` file and use `rules: - if: '$CI_COMMIT_BRANCH == "production"'`.

    **Correct Answer:** A) Define the variable as `protected` and `masked` in project settings, and use `only: - production` in the deployment job.
    **Explanation:** Marking the variable as `protected` ensures it's only available on protected branches (like `production`), and `masked` prevents its value from appearing in logs. The `only: - production` (or `rules` equivalent) further restricts the job itself to run only on that branch. Hardcoding secrets (D) is a major security flaw. Not masking (B) exposes the secret in logs. Not protecting (C) makes the secret available on all branches.

2.  **Question:** Your team wants to automatically scan their application's dependencies for known vulnerabilities as part of every merge request pipeline. Which GitLab CI/CD feature should they integrate into their `.gitlab-ci.yml`?
    *   A) DAST (Dynamic Application Security Testing)
    *   B) SAST (Static Application Security Testing)
    *   C) Secret Detection
    *   D) Dependency Scanning

    **Correct Answer:** D) Dependency Scanning
    **Explanation:** Dependency Scanning is specifically designed to identify known vulnerabilities within your project's third-party dependencies. SAST scans your own source code, DAST scans a running application, and Secret Detection looks for accidentally committed secrets. While all are valuable, Dependency Scanning directly addresses the requirement for scanning dependencies.

#### AI generation note
Produce a 10-14 minute mixed-format lesson. Start with a slide deck explaining the "why" of CI/CD security and the risks of exposed secrets. Transition to a live demo within the GitLab UI, showing how to create `protected` and `masked` CI/CD variables (including a `File` type variable). Then, switch to a code editor to demonstrate adding `include: - template: Security/SAST.gitlab-ci.yml` and `rules` to a `.gitlab-ci.yml` file. Show the pipeline running, highlighting how `masked` variables appear in logs and where security scan results appear in the MR widget and Security Dashboard. Use diagram overlays to illustrate the flow of secrets from GitLab to the runner. Conclude with a mini-quiz on variable types and security scanner purposes.

---

#### Chapter 6.3 — Best Practices for Scalable and Maintainable Pipelines

#### Learning objectives
*   Apply the DRY (Don't Repeat Yourself) principle to `.gitlab-ci.yml` configurations using `extends`, `include`, and templates.
*   Design efficient caching strategies to optimize pipeline execution time and resource usage.
*   Manage job artifacts effectively to pass data between stages and reduce storage overhead.
*   Implement parent-child pipelines for modularity and conditional execution of complex workflows.
*   Optimize pipeline performance by understanding job dependencies and parallelization.

#### Detailed lesson content
As your projects grow and your team expands, your GitLab CI/CD pipelines will naturally become more complex. Without a focus on best practices, these pipelines can quickly become unwieldy, difficult to maintain, slow to execute, and prone to errors. This chapter focuses on strategies to make your pipelines scalable, maintainable, and efficient, ensuring they remain a valuable asset rather than a bottleneck.

The "Don't Repeat Yourself" (DRY) principle is paramount in pipeline configuration. Redundant job definitions, even for slightly different stages, lead to maintenance headaches. GitLab offers several powerful features to help you abstract and reuse configuration. The `extends` keyword allows a job to inherit properties from another job, overriding specific keys as needed. For example, you might define a base `.`job_template` with common `image`, `before_script`, and `cache` settings, and then have multiple jobs `extend: .job_template`. This centralizes common configurations. For even greater reuse across multiple projects or within a large monorepo, the `include` keyword is invaluable. You can `include` external `.gitlab-ci.yml` files from other repositories, local files, or even GitLab's own template library. This allows you to define reusable components (like a `build-docker-image.gitlab-ci.yml` template) once and include them wherever needed, promoting consistency and reducing duplication. Leveraging GitLab's built-in templates for security scans or common tasks is a prime example of this.

Pipeline performance is directly impacted by how you manage dependencies and data. Caching is a critical optimization technique. By defining a `cache` section in your jobs, you can store dependencies (like `node_modules`, `pip` virtual environments, or Maven repositories) between pipeline runs. This significantly speeds up subsequent runs by avoiding repeated downloads and installations. A common mistake is to use a generic cache key, leading to cache invalidation issues or stale caches. Use dynamic cache keys based on relevant files (e.g., `key: "$CI_COMMIT_REF_SLUG-$CI_JOB_NAME"` or `key: "node_modules-$CI_COMMIT_REF_SLUG"`) or content hashes of dependency files (e.g., `key: "npm-$CI_COMMIT_REF_SLUG-{{ checksum "package-lock.json" }}"`) to ensure caches are specific and correctly invalidated. Similarly, job artifacts are used to pass files between jobs in different stages. For example, a `build` job might produce a compiled binary as an artifact, which is then consumed by a `test` job and a `deploy` job. Be mindful of artifact size; large artifacts consume storage and increase pipeline execution time. Define `expire_in` for artifacts to automatically clean up old ones.

For very large or complex repositories, especially monorepos, a single monolithic `.gitlab-ci.yml` can become overwhelming. Parent-child pipelines offer a powerful solution for modularity. A "parent" pipeline can trigger "child" pipelines defined in separate `.gitlab-ci.yml` files (even in subdirectories). This allows you to break down a large pipeline into smaller, independent, and conditionally executable sub-pipelines. For example, a parent pipeline might trigger a child pipeline for only the frontend application if changes are detected in the `frontend/` directory, and another child pipeline for the backend if changes are in `backend/`. This dramatically improves clarity, reduces pipeline execution time by only running relevant parts, and enhances maintainability. You trigger child pipelines using the `trigger` keyword with `strategy: depend` to ensure the parent pipeline waits for the child pipeline to complete.

Optimizing pipeline performance also involves understanding job dependencies and parallelization. GitLab CI/CD automatically parallelizes jobs within the same stage if they don't have explicit `needs` dependencies. Leverage this by designing stages that can run concurrently. For jobs that *do* depend on each other, use the `needs` keyword to specify exact job dependencies, allowing jobs to start as soon as their prerequisites are met, even if they are in different stages, rather than waiting for an entire stage to complete. This creates a Directed Acyclic Graph (DAG) of jobs, maximizing parallelism. For example, `job_A` in `build` stage and `job_B` in `test` stage. If `job_B` only needs `job_A`'s output, you can define `job_B: needs: [job_A]` instead of waiting for all `build` jobs to finish. This can significantly reduce overall pipeline duration, especially in large projects. Regularly review your pipeline graph to identify bottlenecks and opportunities for further parallelization.

By embracing these best practices, you transform your GitLab CI/CD pipelines from mere automation scripts into robust, efficient, and easily managed systems that scale with your project's needs.

#### Key concepts
*   **DRY (Don't Repeat Yourself):** A software development principle aimed at reducing repetition of information.
*   **`extends`:** A GitLab CI/CD keyword allowing jobs to inherit configuration from other jobs, promoting reuse.
*   **`include`:** A keyword to import external `.gitlab-ci.yml` files (from local paths, other projects, or GitLab templates) into the current pipeline.
*   **Caching:** Storing dependencies and intermediate build results between pipeline runs to speed up execution.
*   **Cache Keys:** Identifiers used to manage and invalidate caches, often dynamic to ensure freshness.
*   **Job Artifacts:** Files generated by a job that are stored and can be passed to subsequent jobs or downloaded.
*   **Parent-Child Pipelines:** A mechanism where a main (parent) pipeline triggers one or more independent (child) pipelines, enabling modularity and conditional execution.
*   **`needs` Keyword:** Used to define explicit job dependencies, allowing jobs to run as soon as their prerequisites are met, optimizing parallelization.
*   **DAG (Directed Acyclic Graph):** The underlying structure of a pipeline where jobs and their dependencies form a graph, enabling efficient execution.

#### Hands-on activity
**Activity: Optimizing a Pipeline with `extends`, Caching, and Parent-Child Pipelines**

You will refactor an existing pipeline to improve its maintainability and efficiency.

1.  **Start with the following `.gitlab-ci.yml` for a simple project (imagine `frontend/` and `backend/` directories exist, each with a `package.json`):**
    ```yaml
    stages:
      - setup
      - build
      - test
      - deploy

    # Frontend Build
    frontend_build:
      stage: build
      image: node:16-alpine
      script:
        - cd frontend
        - npm install
        - npm run build
      artifacts:
        paths:
          - frontend/dist/
      cache:
        key: "$CI_COMMIT_REF_SLUG-frontend"
        paths:
          - frontend/node_modules/

    # Backend Build
    backend_build:
      stage: build
      image: node:16-alpine # Imagine this is a different image for backend, e.g., python:3.9-slim
      script:
        - cd backend
        - npm install # Imagine this is `pip install -r requirements.txt` for Python
        - echo "Backend built"
      cache:
        key: "$CI_COMMIT_REF_SLUG-backend"
        paths:
          - backend/node_modules/ # Imagine this is `backend/.venv/` for Python

    # Frontend Test
    frontend_test:
      stage: test
      image: node:16-alpine
      script:
        - cd frontend
        - npm test
      needs:
        - frontend_build

    # Backend Test
      backend_test:
      stage: test
      image: node:16-alpine # Imagine this is python:3.9-slim
      script:
        - cd backend
        - echo "Running backend tests..."
      needs:
        - backend_build

    # Frontend Deploy
    frontend_deploy:
      stage: deploy
      image: alpine/git
      script:
        - echo "Deploying frontend..."
      needs:
        - frontend_test
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'

    # Backend Deploy
    backend_deploy:
      stage: deploy
      image: alpine/git
      script:
        - echo "Deploying backend..."
      needs:
        - backend_test
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
    ```
2.  **Refactor using `extends`:**
    *   Create a base job template (e.g., `.node_job_template`) for common `image`, `cache` settings.
    *   Modify `frontend_build`, `frontend_test` to `extend` this template.
    *   (Optional: Create a `.python_job_template` if you were using Python for backend).
3.  **Implement Parent-Child Pipelines:**
    *   Create a `frontend/.gitlab-ci.yml` and `backend/.gitlab-ci.yml` with their respective build/test/deploy jobs.
    *   Modify the main `.gitlab-ci.yml` to trigger these child pipelines.
    *   Use `rules:changes:` to trigger child pipelines only when relevant files change.
    *   Example for `frontend/.gitlab-ci.yml`:
        ```yaml
        # frontend/.gitlab-ci.yml
        .node_job_template:
          image: node:16-alpine
          cache:
            key: "$CI_COMMIT_REF_SLUG-frontend"
            paths:
              - frontend/node_modules/
            policy: pull-push
          before_script:
            - cd frontend

        stages:
          - build
          - test
          - deploy

        frontend_build:
          stage: build
          extends: .node_job_template
          script:
            - npm install
            - npm run build
          artifacts:
            paths:
              - frontend/dist/

        frontend_test:
          stage: test
          extends: .node_job_template
          script:
            - npm test
          needs:
            - frontend_build

        frontend_deploy:
          stage: deploy
          image: alpine/git # Override image
          script:
            - echo "Deploying frontend..."
          needs:
            - frontend_test
          rules:
            - if: '$CI_COMMIT_BRANCH == "main"'
        ```
    *   Example for main `.gitlab-ci.yml`:
        ```yaml
        # .gitlab-ci.yml (parent)
        stages:
          - trigger_children

        trigger_frontend:
          stage: trigger_children
          trigger:
            include: frontend/.gitlab-ci.yml
            strategy: depend
          rules:
            - if: '$CI_COMMIT_BRANCH == "main"'
              changes:
                - frontend/**/*
        
        trigger_backend:
          stage: trigger_children
          trigger:
            include: backend/.gitlab-ci.yml
            strategy: depend
          rules:
            - if: '$CI_COMMIT_BRANCH == "main"'
              changes:
                - backend/**/*
        ```
4.  **Commit and push the changes.** Observe the new pipeline structure, particularly how child pipelines are triggered and how caching affects subsequent runs.

#### Assessment idea
1.  **Question:** Your GitLab CI/CD pipeline has multiple jobs that all use the same Docker image, execute a common `npm install` command, and need to cache `node_modules`. How can you best reduce duplication in your `.gitlab-ci.yml` configuration for these jobs?
    *   A) Define a global `before_script` and `cache` section at the root of the `.gitlab-ci.yml`.
    *   B) Create a hidden job (e.g., `.base_node_job`) with these common configurations and use the `extends` keyword in other jobs.
    *   C) Copy and paste the common sections into each job, as it's the only way to ensure consistency.
    *   D) Use the `include` keyword to pull in these configurations from an external `common_config.yaml` file.

    **Correct Answer:** B) Create a hidden job (e.g., `.base_node_job`) with these common configurations and use the `extends` keyword in other jobs.
    **Explanation:** The `extends` keyword is specifically designed for this scenario, allowing jobs to inherit properties from a template job (often a hidden job prefixed with `.`) and then override or add specific configurations. While `include` (D) is also for reuse, `extends` is more suitable for sharing common configurations *within* the same `.gitlab-ci.yml` or included files. A global `before_script` (A) might not be appropriate if some jobs have different setup needs, and copying/pasting (C) violates the DRY principle.

2.  **Question:** You are working on a large monorepo with separate `frontend/` and `backend/` applications. You want to run a full CI/CD pipeline for the `frontend` only when changes occur within the `frontend/` directory, and similarly for the `backend`. How can you achieve this efficiently in GitLab CI/CD?
    *   A) Create a single, monolithic `.gitlab-ci.yml` with `rules:changes:` on each job to skip irrelevant jobs.
    *   B) Use two separate `.gitlab-ci.yml` files (one for `frontend`, one for `backend`) and trigger them as parent-child pipelines from a main `.gitlab-ci.yml` using `rules:changes:`.
    *   C) Manually trigger the relevant pipeline from the GitLab UI after each commit.
    *   D) Configure two entirely separate GitLab projects, one for frontend and one for backend.

    **Correct Answer:** B) Use two separate `.gitlab-ci.yml` files (one for `frontend`, one for `backend`) and trigger them as parent-child pipelines from a main `.gitlab-ci.yml` using `rules:changes:`.
    **Explanation:** Parent-child pipelines are ideal for monorepos, allowing you to break down a large pipeline into smaller, independent, and conditionally triggered sub-pipelines. Using `rules:changes:` on the `trigger` job in the parent pipeline ensures that child pipelines are only initiated when relevant files are modified, significantly improving efficiency and reducing pipeline run times. Option A can lead to very long and complex monolithic files. C is manual and not CI/CD. D breaks the monorepo structure.

#### AI generation note
Design a 15-minute interactive coding lab. Start with a pre-configured `.gitlab-ci.yml` that has some redundancy and a basic caching setup. First, guide learners through refactoring using `extends`, demonstrating how to create a hidden job and apply it. Show the impact on the `.gitlab-ci.yml`'s readability. Next, introduce the concept of parent-child pipelines. Provide separate `frontend/.gitlab-ci.yml` and `backend/.gitlab-ci.yml` files and guide learners to modify the main `.gitlab-ci.yml` to trigger them conditionally using `rules:changes:`. The lab should have clear steps, code snippets to copy/paste, and expected outcomes (e.g., "Observe the pipeline graph, notice the child pipelines"). Include a reflection prompt asking how this improves scalability.

---

#### Chapter 6.4 — Advanced CI/CD Variable Management and Environment Configuration

#### Learning objectives
*   Differentiate between various types of GitLab CI/CD variables (predefined, custom, group, project, environment) and their precedence.
*   Utilize `variables` keyword at different scopes (global, job-level) for flexible configuration.
*   Implement dynamic environment configurations using the `environment` keyword and dynamic URLs.
*   Manage sensitive environment-specific data securely using variable groups and external secret management tools.
*   Apply advanced variable expressions and conditional logic within `.gitlab-ci.yml` for complex scenarios.

#### Detailed lesson content
Effective management of variables and environment configurations is crucial for building flexible, robust, and secure CI/CD pipelines. As your projects mature, you'll need to handle different configurations for development, staging, and production environments, often with varying credentials, endpoints, and settings. This chapter dives into advanced techniques for managing these complexities within GitLab CI/CD, moving beyond basic secret storage to dynamic and context-aware configurations.

GitLab CI/CD provides a hierarchy of variables, each with its own scope and precedence. Understanding this hierarchy is key to avoiding unexpected behavior. At the lowest level are **predefined CI/CD variables** (e.g., `$CI_COMMIT_BRANCH`, `$CI_PIPELINE_ID`, `$CI_JOB_URL`), which GitLab automatically provides. Next, you can define **custom variables** at the project level (`Settings > CI/CD > Variables`) and **group level** (`Group > Settings > CI/CD > Variables`). Group variables are inherited by all projects within that group, providing a way to share common configurations across multiple projects. Variables defined directly in the `.gitlab-ci.yml` file using the `variables` keyword (either globally or within a specific job) take precedence over project and group variables. Finally, variables passed via the API when triggering a pipeline have the highest precedence. This layered approach allows you to define defaults at a higher level and override them as needed at lower, more specific levels. A common mistake is to define a variable at the project level and then wonder why a job-level variable isn't taking effect; remember, job-level variables override project-level ones.

The `variables` keyword isn't just for secrets; it's also for general configuration. You can define global variables that apply to all jobs, or specific variables within a job. For example, `variables: APP_VERSION: "1.0.0"` might be a global variable, while a `deploy_production` job might have `variables: DEPLOY_TARGET: "production.example.com"` to override or add specific settings for that deployment. This allows for highly contextual configurations. For dynamic values that change per pipeline run, you can use `script` to generate a variable and then use `artifacts:reports:dotenv` to expose it to subsequent jobs. This is particularly useful for generating unique build IDs or dynamic environment URLs.

Configuring different deployment environments is a core CI/CD requirement. GitLab's `environment` keyword allows you to define deployment environments within your `.gitlab-ci.yml`. This provides several benefits:
*   **Environment Tracking:** GitLab tracks deployments to each environment, showing you which commit is deployed where.
*   **Dynamic Environments:** You can create temporary, dynamic environments for merge requests (e.g., `review/feature-branch-name`).
*   **Dynamic URLs:** The `url` attribute within the `environment` keyword allows you to specify a URL for the deployed environment. GitLab will then display a "View app" button in the merge request and environment page, linking directly to your deployed review app. This is incredibly powerful for enabling quick feedback on new features.
    ```yaml
    deploy_review:
      stage: deploy
      script:
        - deploy_script.sh "$CI_ENVIRONMENT_SLUG" # Example: deploy to a unique URL
      environment:
        name: review/$CI_COMMIT_REF_SLUG # Dynamic environment name
        url: https://$CI_ENVIRONMENT_SLUG.example.com # Dynamic URL
        on_stop: stop_review_app # Define a job to stop this environment
      rules:
        - if: '$CI_COMMIT_BRANCH =~ /feature\/.*/'
    ```
    The `on_stop` keyword is crucial for managing dynamic environments, allowing you to define a cleanup job that runs when the environment is manually stopped or when its source branch is deleted.

For managing sensitive environment-specific data, especially across multiple environments (dev, staging, prod), consider integrating with external secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. While GitLab CI/CD variables are excellent for basic secret management, external tools offer more advanced features like secret rotation, auditing, and fine-grained access control. You can integrate these by having your CI/CD jobs authenticate with the secret manager and fetch secrets at runtime, rather than storing them directly in GitLab variables. This minimizes the exposure window for sensitive data.

Finally, advanced variable expressions and conditional logic enable highly flexible pipelines. You can use complex `rules:if:` conditions that combine multiple variables and regular expressions to determine when jobs should run. For example, `rules: - if: '$CI_COMMIT_BRANCH == "main" && $DEPLOY_TO_PROD == "true"'` ensures a production deployment only happens on the main branch AND if a specific variable is set (perhaps manually triggered or set by another job). You can also use variable expansion within other variables or script commands, allowing for dynamic command generation based on pipeline context. Mastering these variable management techniques empowers you to build sophisticated and adaptable CI/CD workflows that cater to the diverse needs of modern software development.

#### Key concepts
*   **Predefined CI/CD Variables:** Variables automatically provided by GitLab (e.g., `CI_COMMIT_BRANCH`, `CI_JOB_ID`).
*   **Custom Variables:** User-defined variables configured at project or group level, or directly in `.gitlab-ci.yml`.
*   **Variable Precedence:** The order in which GitLab resolves variable values when multiple definitions exist (API > job > global `.gitlab-ci.yml` > project > group > predefined).
*   **`variables` Keyword:** Used in `.gitlab-ci.yml` to define variables globally or per job.
*   **`environment` Keyword:** Defines a deployment environment for a job, enabling tracking, dynamic environments, and review apps.
*   **Dynamic Environments:** Temporary environments created for specific branches (e.g., feature branches) that can be automatically provisioned and de-provisioned.
*   **`url` Attribute:** Within the `environment` keyword, specifies a URL for the deployed environment, creating a "View app" link.
*   **`on_stop` Keyword:** Defines a job to run when an environment is stopped, typically for cleanup.
*   **External Secret Management:** Integrating with tools like HashiCorp Vault to manage and retrieve secrets at runtime, offering enhanced security features.
*   **`artifacts:reports:dotenv`:** A mechanism to expose dynamically generated variables from one job to subsequent jobs in the pipeline.

#### Hands-on activity
**Activity: Dynamic Review Apps and Environment-Specific Variables**

You will enhance a pipeline to deploy dynamic review applications for feature branches and manage environment-specific variables.

1.  **Start with a basic web application (e.g., a simple HTML/CSS/JS app or a Node.js app) that can be served statically or with a simple server.**
2.  **Create a `deploy_review_app.sh` script in your project root:**
    ```bash
    #!/bin/bash
    # This script simulates deploying to a dynamic environment
    # In a real scenario, this would interact with a cloud provider (e.g., Heroku, Netlify, AWS S3)
    
    ENVIRONMENT_NAME=$1
    echo "Simulating deployment to environment: $ENVIRONMENT_NAME"
    echo "Creating a dummy URL for $ENVIRONMENT_NAME..."
    
    # In a real scenario, this would be the actual URL from your deployment service
    DYNAMIC_URL="https://${ENVIRONMENT_NAME}.review.example.com" 
    
    echo "Deployment successful! Access at: $DYNAMIC_URL"
    
    # This line is CRITICAL for GitLab to pick up the URL
    echo "DA_URL=$DYNAMIC_URL" >> deploy.env
    ```
3.  **Create a `stop_review_app.sh` script:**
    ```bash
    #!/bin/bash
    ENVIRONMENT_NAME=$1
    echo "Simulating stopping environment: $ENVIRONMENT_NAME"
    echo "Cleanup complete for $ENVIRONMENT_NAME."
    ```
4.  **Modify your `.gitlab-ci.yml`:**
    ```yaml
    stages:
      - build
      - deploy
      - cleanup

    variables:
      GLOBAL_APP_NAME: "MyAwesomeApp"
      DEFAULT_DEPLOY_HOST: "dev.example.com"

    build_app:
      stage: build
      image: alpine/git
      script:
        - echo "Building $GLOBAL_APP_NAME..."
        - echo "Build artifact created."
      artifacts:
        paths:
          - build_output/ # Assume some build output
        expire_in: 1 day

    deploy_review:
      stage: deploy
      image: alpine/git
      variables:
        DEPLOY_HOST: "review.example.com" # Job-level variable overrides global
      script:
        - echo "Deploying review app for branch: $CI_COMMIT_REF_SLUG"
        - chmod +x ./deploy_review_app.sh
        - ./deploy_review_app.sh "$CI_ENVIRONMENT_SLUG"
      environment:
        name: review/$CI_COMMIT_REF_SLUG
        url: $DA_URL # This will be set dynamically by the script via dotenv
        on_stop: stop_review
      artifacts:
        reports:
          dotenv: deploy.env # Expose DA_URL to GitLab environment tracking
      rules:
        - if: '$CI_COMMIT_BRANCH =~ /feature\/.*/' # Only run on feature branches
          when: on_success

    stop_review:
      stage: cleanup
      image: alpine/git
      script:
        - echo "Stopping review app for branch: $CI_COMMIT_REF_SLUG"
        - chmod +x ./stop_review_app.sh
        - ./stop_review_app.sh "$CI_ENVIRONMENT_SLUG"
      environment:
        name: review/$CI_COMMIT_REF_SLUG
        action: stop
      rules:
        - if: '$CI_COMMIT_BRANCH =~ /feature\/.*/'
          when: manual # Allow manual stopping, or on_success for automatic cleanup on branch delete
    
    deploy_production:
      stage: deploy
      image: alpine/git
      variables:
        DEPLOY_HOST: "prod.example.com" # Production specific override
      script:
        - echo "Deploying $GLOBAL_APP_NAME to production on $DEPLOY_HOST"
      environment:
        name: production
        url: https://prod.example.com
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: manual # Manual deploy to production
    ```
5.  **Commit these files and push to a new feature branch (e.g., `feature/add-review-app`).**
6.  **Observe the pipeline:**
    *   Notice the `deploy_review` job running.
    *   Check the Merge Request widget for the "View app" button. Click it to verify the URL.
    *   Go to `Deployments > Environments` in GitLab to see the dynamic environment listed.
    *   Manually stop the `review/feature-add-review-app` environment and observe the `stop_review` job running.
7.  **Push to `main` branch:** Observe that `deploy_review` is skipped, and `deploy_production` is available for manual trigger.

#### Assessment idea
1.  **Question:** You have a `DATABASE_URL` variable defined at the group level, a different `DATABASE_URL` defined at the project level, and a third `DATABASE_URL` defined within a specific job in your `.gitlab-ci.yml`. Which `DATABASE_URL` value will the job ultimately use?
    *   A) The group-level `DATABASE_URL`.
    *   B) The project-level `DATABASE_URL`.
    *   C) The job-level `DATABASE_URL`.
    *   D) GitLab will throw an error due to conflicting variable definitions.

    **Correct Answer:** C) The job-level `DATABASE_URL`.
    **Explanation:** GitLab CI/CD variables follow a strict precedence. Variables defined at the job level in `.gitlab-ci.yml` have the highest precedence, overriding project-level, group-level, and predefined variables. This allows for fine-grained control and overrides specific to a job's context.

2.  **Question:** Your team wants to automatically provision a temporary, unique environment for each merge request, complete with a clickable URL in the GitLab UI. Which two key features of the `environment` keyword in `.gitlab-ci.yml` are essential to achieve this?
    *   A) `name` with a dynamic variable (e.g., `$CI_COMMIT_REF_SLUG`) and `action: start`.
    *   B) `name` with a dynamic variable and `url` with a dynamic URL.
    *   C) `url` with a static URL and `on_stop` for cleanup.
    *   D) `name` with a static name and `protected: true`.

    **Correct Answer:** B) `name` with a dynamic variable and `url` with a dynamic URL.
    **Explanation:** To create a temporary, unique environment per MR, the `name` attribute must be dynamic (e.g., `review/$CI_COMMIT_REF_SLUG`) to ensure uniqueness. The `url` attribute, also using a dynamic variable (e.g., `$CI_ENVIRONMENT_SLUG` or a variable output from a script via `dotenv`), is critical for GitLab to display the "View app" button and link directly to the deployed review application. `action: start` is implicit, and `on_stop` is for cleanup, not creation. Static names or protected environments don't meet the "temporary, unique per MR" requirement.

#### AI generation note
Create a 12-minute live coding demonstration. Start by explaining variable precedence using a simple diagram. Then, demonstrate creating group and project variables in the GitLab UI. Switch to the code editor to show how to define global and job-specific variables in `.gitlab-ci.yml`, and then run a pipeline to illustrate how precedence works by `echo`ing the variables. Next, focus on dynamic environments: show how to configure the `environment` keyword with dynamic `name` and `url` attributes using `$CI_COMMIT_REF_SLUG`. Demonstrate pushing a feature branch, observing the "View app" button in the MR, and then manually stopping the environment. Use a split-screen view: GitLab UI on the left showing variables, pipelines, and environments, and code editor on the right. Include a challenge for learners to add an `on_stop` job.

---

#### Chapter 6.5 — Disaster Recovery and Pipeline Resilience

#### Learning objectives
*   Understand the importance of disaster recovery planning for GitLab CI/CD infrastructure and configurations.
*   Identify key components of a GitLab instance that require backup for CI/CD continuity.
*   Implement strategies for ensuring high availability and resilience of GitLab Runners.
*   Design idempotent deployment scripts to ensure consistent and safe deployments even after failures.
*   Develop rollback strategies for deployments to mitigate the impact of pipeline-induced issues.

#### Detailed lesson content
Even the most meticulously designed CI/CD pipelines can encounter unforeseen issues, ranging from infrastructure failures to accidental misconfigurations. A robust disaster recovery (DR) plan and a focus on pipeline resilience are essential to minimize downtime, prevent data loss, and ensure business continuity. This final chapter equips you with the knowledge to safeguard your GitLab CI/CD ecosystem against various disruptions, allowing your development and deployment processes to recover quickly and gracefully.

Disaster recovery for GitLab CI/CD primarily involves backing up your GitLab instance and ensuring the resilience of your runners. For the GitLab instance itself, a comprehensive backup strategy is paramount. This includes backing up the PostgreSQL database, Git repositories, CI/CD job artifacts, LFS objects, and configuration files. GitLab provides built-in Rake tasks (e.g., `gitlab-backup create`) that simplify this process, creating a single tar archive of all necessary components. It's crucial to regularly test these backups by performing a full restore to a separate instance to verify their integrity and your recovery procedures. Without a tested backup, your entire CI/CD history, project configurations, and stored artifacts could be lost, severely impacting your ability to develop and deploy. Common mistakes include backing up only the database or repositories, neglecting artifacts or configurations, or not testing the restore process.

Beyond the GitLab instance, the availability and resilience of your GitLab Runners are critical. If your runners go down, your pipelines stop. For self-managed runners, consider deploying them in a highly available configuration. This often means running multiple runner instances behind a load balancer, or using auto-scaling groups in cloud environments. For example, in AWS, you could use an Auto Scaling Group with EC2 instances running the GitLab Runner, configured to scale based on queue depth. The Docker Machine executor for GitLab Runner is particularly well-suited for dynamic scaling, provisioning new Docker containers or virtual machines on demand. For critical pipelines, ensure you have dedicated runners that are always available and not shared with less critical projects, preventing resource contention. Shared runners provided by GitLab.com offer a degree of resilience by being managed by GitLab, but for strict control over environment and security, self-managed runners are often preferred with corresponding DR strategies.

A cornerstone of pipeline resilience, especially for deployments, is **idempotency**. An idempotent operation is one that can be applied multiple times without changing the result beyond the initial application. In the context of deployment scripts, this means that if a deployment script fails halfway through and is re-run, it should pick up where it left off or safely re-apply previous steps without causing corruption or unexpected side effects. For example, creating a database table should check if the table already exists before attempting to create it. Updating a configuration file should use tools that handle existing values gracefully (e.g., `sed` with careful regex, or configuration management tools like Ansible/Chef/Puppet). Non-idempotent scripts are a major source of deployment failures and make recovery difficult. Always design your deployment steps to be repeatable and safe to re-execute.

Finally, planning for **rollback strategies** is essential. Despite all precautions, a deployed application might still exhibit critical issues. Your CI/CD pipeline should facilitate quick and safe rollbacks to a previous, stable version. This typically involves:
1.  **Versioned Deployments:** Ensure each deployment creates a distinct, versioned artifact or image.
2.  **Blue/Green or Canary Deployments:** These advanced deployment strategies inherently support easy rollbacks. In Blue/Green, you deploy to a new "green" environment, test it, and then switch traffic. If issues arise, you simply switch traffic back to the old "blue" environment.
3.  **Deployment History:** GitLab's environment dashboard shows deployment history, making it easy to identify previous successful deployments.
4.  **Automated Rollback Jobs:** Include a dedicated `rollback` job in your `.gitlab-ci.yml` that can be manually triggered. This job would typically point to a previous successful deployment artifact and re-deploy it.
    ```yaml
    rollback_production:
      stage: deploy
      image: alpine/git
      script:
        - echo "Initiating rollback to previous stable version..."
        - # Logic to fetch and deploy previous version (e.g., from a specific tag or artifact)
        - deploy_previous_version.sh "$PREVIOUS_VERSION_TAG"
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: manual # Rollback should always be a manual, deliberate action
      variables:
        PREVIOUS_VERSION_TAG: "v1.2.0" # Example: user defines which version to rollback to
    ```
By incorporating these disaster recovery and resilience practices, you build a CI/CD system that is not only efficient but also robust and capable of withstanding real-world challenges, minimizing risks and ensuring continuous delivery.

#### Key concepts
*   **Disaster Recovery (DR):** The process of preparing for and recovering from a disaster that affects IT systems.
*   **GitLab Backup:** The process of backing up critical GitLab components (database, repositories, artifacts, configurations) for recovery.
*   **GitLab Runners Resilience:** Ensuring the continuous availability and fault tolerance of the agents that execute CI/CD jobs.
*   **High Availability (HA):** A system design approach that ensures a high level of operational performance for a given period.
*   **Idempotency:** The property of an operation that produces the same result regardless of how many times it is executed. Critical for reliable deployment scripts.
*   **Rollback Strategy:** A plan and mechanism to revert a deployed application to a previous, stable state in case of issues.
*   **Blue/Green Deployment:** A deployment strategy that minimizes downtime by running two identical production environments (Blue and Green) and switching traffic between them.
*   **Canary Deployment:** A deployment strategy where new changes are rolled out to a small subset of users first, then gradually to the entire user base.
*   **Automated Rollback Jobs:** Dedicated CI/CD jobs designed to revert a deployment to a previous version, typically triggered manually.

#### Hands-on activity
**Activity: Designing an Idempotent Deployment and Rollback Strategy**

You will create a simplified idempotent deployment script and a rollback job.

1.  **Create a new GitLab project.**
2.  **Create a `deploy.sh` script:**
    ```bash
    #!/bin/bash
    # deploy.sh - Idempotent deployment script

    TARGET_DIR="/app/deployed_version"
    VERSION=$1 # e.g., v1.0.0, v1.0.1

    echo "--- Starting deployment of version: $VERSION ---"

    # Simulate creating a target directory idempotently
    if [ ! -d "$TARGET_DIR" ]; then
        echo "Creating target directory: $TARGET_DIR"
        mkdir -p "$TARGET_DIR"
    else
        echo "Target directory $TARGET_DIR already exists."
    fi

    # Simulate deploying files (e.g., copy build artifacts)
    # In a real scenario, this would copy actual build output
    echo "Copying application files for version $VERSION..."
    echo "This is the content for version $VERSION" > "$TARGET_DIR/index.html"
    echo "Deployment files copied."

    # Simulate database migration (idempotent)
    echo "Running database migrations (idempotent)..."
    # Example: Check if migration has run before applying
    if [ ! -f "$TARGET_DIR/.migration_v1_done" ]; then
        echo "Applying database migration v1..."
        # Simulate actual migration command
        sleep 1
        touch "$TARGET_DIR/.migration_v1_done"
        echo "Migration v1 applied."
    else
        echo "Database migration v1 already applied."
    fi

    echo "Deployment of $VERSION completed successfully."
    ```
3.  **Create a `rollback.sh` script:**
    ```bash
    #!/bin/bash
    # rollback.sh - Script to rollback to a specified version

    TARGET_DIR="/app/deployed_version"
    ROLLBACK_VERSION=$1 # The version to rollback to

    if [ -z "$ROLLBACK_VERSION" ]; then
        echo "Error: Rollback version not specified."
        exit 1
    fi

    echo "--- Initiating rollback to version: $ROLLBACK_VERSION ---"

    # Simulate fetching and deploying the previous version's artifacts
    # In a real scenario, this would involve fetching artifacts for $ROLLBACK_VERSION
    # and deploying them to $TARGET_DIR
    echo "Fetching and deploying artifacts for version $ROLLBACK_VERSION..."
    echo "This is the content for version $ROLLBACK_VERSION (ROLLBACK)" > "$TARGET_DIR/index.html"
    echo "Rollback to $ROLLBACK_VERSION completed successfully."
    ```
4.  **Create a `.gitlab-ci.yml`:**
    ```yaml
    stages:
      - build
      - deploy
      - rollback

    build_app:
      stage: build
      image: alpine/git
      script:
        - echo "Simulating application build for version $CI_COMMIT_TAG or $CI_COMMIT_SHORT_SHA"
        - echo "Build successful."
      artifacts:
        paths:
          - build_output/ # Placeholder for actual build artifacts
        expire_in: 1 hour
      rules:
        - if: '$CI_COMMIT_TAG || $CI_COMMIT_BRANCH == "main"' # Build for tags or main branch

    deploy_production:
      stage: deploy
      image: alpine/git
      script:
        - chmod +x ./deploy.sh
        - ./deploy.sh "${CI_COMMIT_TAG:-$CI_COMMIT_SHORT_SHA}" # Use tag if available, else commit SHA
      environment:
        name: production
        url: https://your-prod-app.com
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: manual # Manual deploy to production
      needs:
        - build_app

    rollback_production:
      stage: rollback
      image: alpine/git
      variables:
        ROLLBACK_TARGET_VERSION: "v1.0.0" # User can override this in manual trigger
      script:
        - chmod +x ./rollback.sh
        - ./rollback.sh "$ROLLBACK_TARGET_VERSION"
      environment:
        name: production
        action: start # Re-activate the environment after rollback
      rules:
        - if: '$CI_COMMIT_BRANCH == "main"'
          when: manual # Rollback is always manual
    ```
5.  **Commit `deploy.sh`, `rollback.sh`, and `.gitlab-ci.yml` to your `main` branch.**
6.  **Simulate a deployment:**
    *   Manually run the `deploy_production` job on `main`. Observe the output of `deploy.sh`.
    *   Run it again. Notice the idempotent messages (e.g., "Target directory already exists", "Migration v1 already applied").
7.  **Simulate a rollback:**
    *   Manually run the `rollback_production` job.
    *   In the "Run pipeline" modal, you can optionally override `ROLLBACK_TARGET_VERSION` to simulate rolling back to a specific previous tag.

#### Assessment idea
1.  **Question:** Your production deployment script occasionally fails due to transient network issues when creating a directory and copying files. When you re-run the pipeline, you find that the directory creation step causes an error because the directory already exists. What principle should you apply to fix this issue, and how would you implement it in the script?
    *   A) High Availability; deploy multiple runners.
    *   B) Idempotency; modify the script to check if the directory exists before creating it (e.g., `mkdir -p`).
    *   C) Rollback; add a job to revert to the previous state.
    *   D) Caching; cache the directory creation step.

    **Correct Answer:** B) Idempotency; modify the script to check if the directory exists before creating it (e.g., `mkdir -p`).
    **Explanation:** The problem describes a non-idempotent operation (creating a directory without checking if it exists). Idempotency ensures that an operation can be safely repeated. Using `mkdir -p` is a common way to make directory creation idempotent as it will create the directory only if it doesn't exist, and do nothing otherwise. Options A, C, and D are relevant CI/CD concepts but do not directly address the issue of a script failing on re-execution due to state changes.

2.  **Question:** After a new feature deployment via your GitLab CI/CD pipeline, critical bugs are discovered in production. Your team needs to quickly revert to the previous stable version. Which of the following is the most effective and recommended approach within GitLab CI/CD for this scenario?
    *   A) Manually revert the problematic commit in the Git repository and re-run the pipeline.
    *   B) Delete the current deployment and manually copy files from a backup.
    *   C) Trigger a dedicated `rollback` job in the pipeline, configured to deploy a known stable artifact or image from a previous successful pipeline run.
    *   D) Pause the current pipeline and wait for a hotfix to be developed and deployed.

    **Correct Answer:** C) Trigger a dedicated `rollback` job in the pipeline, configured to deploy a known stable artifact or image from a previous successful pipeline run.
    **Explanation:** A dedicated `rollback` job is the most effective and recommended approach. It leverages the CI/CD system itself to quickly and reliably revert to a known good state, often by redeploying a previously validated artifact or image. Manually reverting commits (A) can be complex and introduce new issues. Deleting and copying files (B) is error-prone and not automated. Waiting for a hotfix (D) might not be acceptable for critical issues.

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with a conceptual animated diagram explaining idempotency (e.g., showing a `mkdir -p` command and its effect on an empty vs. existing directory). Then, transition to a live coding demo where you build the `deploy.sh` and `rollback.sh` scripts, explaining each idempotent step. Next, integrate these scripts into a `.gitlab-ci.yml`, showing how to configure the `deploy` and `rollback` jobs. Demonstrate running the `deploy` job twice to show idempotency in action via logs. Finally, show how to manually trigger the `rollback` job from the GitLab UI, emphasizing the `ROLLBACK_TARGET_VERSION` variable override. Use a split-screen view for code and terminal output. Include a reflection prompt on why idempotent scripts are crucial for safe deployments.

---

## Final Capstone Project

The capstone project is your opportunity to apply all the knowledge and skills you've gained throughout this GitLab CI/CD course. You will choose one of three project options, each designed to challenge you to integrate various concepts, from basic pipeline creation to advanced features like review apps, Docker integration, and comprehensive testing. This project will serve as a tangible demonstration of your ability to design, implement, and troubleshoot robust CI/CD pipelines using GitLab.

### Project Option 1: Static Website Deployment with Review Apps

This project focuses on automating the deployment of a static website using GitLab Pages, incorporating best practices for CI/CD, including linting, testing, and dynamic review applications for merge requests. It's an excellent way to solidify your understanding of basic pipeline structure, artifact management, and conditional job execution.

**Requirements:**

1.  **Project Setup:** Create a new GitLab project. Initialize a simple static website (e.g., a basic HTML page with some CSS and JavaScript) within this repository. You can use a simple template or create one from scratch.
2.  **Basic CI/CD Pipeline:** Implement a `.gitlab-ci.yml` file that defines a multi-stage pipeline.
    *   **`build` stage:** This stage should prepare your static assets. For a simple site, this might just involve copying files. For a slightly more complex site, you could include a step to minify CSS/JS or compile Sass.
    *   **`test` stage:** Include jobs for linting your HTML, CSS, and JavaScript. You can use tools like HTMLHint, Stylelint, and ESLint. Ensure these jobs fail if linting issues are found.
    *   **`deploy` stage:** Configure a job to deploy your static website to GitLab Pages. This job should only run on the default branch (e.g., `main` or `master`).
3.  **Review Apps:** Implement a "review app" feature. When a new merge request is opened, a dedicated job should deploy a temporary version of the website to a unique URL, allowing stakeholders to preview changes before merging. This review app should automatically be destroyed when the merge request is closed or merged.
4.  **Artifacts and Caching:** Properly configure `artifacts` to pass necessary files between stages and `cache` to speed up dependency installation (if you introduce any build tools that require `npm install` or similar).

**Stretch Goals:**

*   **Custom Domain:** Configure your GitLab Pages site to use a custom domain.
*   **Advanced Build Tool:** Integrate a build tool like Vite or Webpack to bundle and optimize your static assets.
*   **Lighthouse CI Integration:** Add a job to run Google Lighthouse audits on your deployed review app or main site, generating performance reports.
*   **Environment Variables:** Use CI/CD variables to configure aspects of your build or deployment (e.g., API keys if you were to add a simple client-side API call).

**Evaluation Criteria:**

*   **Functional Pipeline:** The CI/CD pipeline runs successfully from commit to deployment.
*   **GitLab Pages Deployment:** The static website is correctly deployed and accessible via GitLab Pages.
*   **Review App Functionality:** Review apps are created for merge requests and destroyed upon closure/merge.
*   **Pipeline Structure:** The `.gitlab-ci.yml` is well-structured, readable, and uses appropriate stages, jobs, rules, artifacts, and caching.
*   **Code Quality:** Linting jobs correctly identify and report issues.
*   **Commit History:** Clear and descriptive commit messages demonstrating an iterative development process.

**Estimated Time:** 8-12 hours

### Project Option 2: Dockerized Application CI/CD

This project challenges you to take a simple application, containerize it using Docker, and then build a comprehensive GitLab CI/CD pipeline to automate the building, testing, and pushing of your Docker image to the GitLab Container Registry. This is fundamental for modern cloud-native deployments.

**Requirements:**

1.  **Application Setup:** Choose or create a simple web application (e.g., a Python Flask app, a Node.js Express app, or a Go HTTP server). The application should have a basic "Hello World" endpoint.
2.  **Dockerization:** Create a `Dockerfile` for your application. Ensure it's optimized for size and security (e.g., use a smaller base image, multi-stage builds if applicable, non-root user).
3.  **Basic CI/CD Pipeline:** Implement a `.gitlab-ci.yml` file.
    *   **`build` stage:** A job that builds your Docker image using `docker build`. This job should leverage the `dind` (Docker-in-Docker) service.
    *   **`test` stage:** Include a job to run unit tests for your application. If your application doesn't have existing tests, write a few simple ones. This job should run *before* pushing the image.
    *   **`push` stage:** A job that logs into the GitLab Container Registry and pushes the built Docker image to your project's registry. The image should be tagged appropriately (e.g., with `$CI_COMMIT_SHA` and `$CI_COMMIT_REF_SLUG`). This job should only run on the default branch or successful tags.
4.  **Container Registry Integration:** Verify that your Docker image appears in your GitLab project's Container Registry.
5.  **Environment Variables:** Use CI/CD variables for any sensitive information (e.g., registry credentials, though GitLab handles this automatically for its own registry).

**Stretch Goals:**

*   **Security Scanning:** Integrate a Docker image scanner (e.g., Trivy, Clair) into your pipeline to check for vulnerabilities before pushing.
*   **Deployment Simulation:** Add a conceptual "deploy" job that prints commands to deploy the Docker image to a target environment (e.g., `docker run`, `kubectl apply`, `gcloud run deploy`). You don't need to set up a live environment, but demonstrate the command structure.
*   **Multi-architecture Builds:** Explore building images for different architectures (e.g., `amd64`, `arm64`) using buildx.
*   **Automated Release:** Implement a job that creates a new Git tag and triggers a release process after a successful push to the `main` branch.

**Evaluation Criteria:**

*   **Functional Application:** The Dockerized application runs correctly locally.
*   **Optimized Dockerfile:** The `Dockerfile` is well-structured and follows best practices.
*   **Successful Image Build:** The CI/CD pipeline successfully builds the Docker image.
*   **Registry Push:** The Docker image is correctly pushed to the GitLab Container Registry with appropriate tags.
*   **Pipeline Structure:** The `.gitlab-ci.yml` is clear, uses `dind` correctly, and manages stages effectively.
*   **Test Integration:** Unit tests run successfully within the pipeline.

**Estimated Time:** 10-15 hours

### Project Option 3: Automated Testing and Code Quality Pipeline

This project focuses on building a robust CI/CD pipeline primarily centered around automated testing and code quality checks. You will integrate various testing types and reporting mechanisms to ensure code integrity and maintainability, making the results visible directly within the GitLab UI.

**Requirements:**

1.  **Codebase Setup:** Start with an existing simple application (e.g., a JavaScript project with Jest tests, a Python project with Pytest, or a Java project with JUnit). If you don't have one, create a small project with a few functions and corresponding unit tests.
2.  **Multi-Stage Testing Pipeline:** Implement a `.gitlab-ci.yml` file with at least three stages:
    *   **`lint` stage:** Include jobs for linting your code (e.g., ESLint for JavaScript, Black/Flake8 for Python, Checkstyle for Java). These jobs should fail if linting issues are detected.
    *   **`test` stage:** Include jobs to run your unit tests. Ensure that test reports are generated in a format GitLab can parse (e.g., JUnit XML format).
    *   **`integration_test` stage:** If applicable, add a job for integration tests. This might involve setting up a temporary database or mock services.
3.  **Test Reporting:** Configure your unit test job to generate a JUnit XML report. Use `artifacts:reports:junit` in your `.gitlab-ci.yml` to make these reports visible in the GitLab merge request widget and pipeline views.
4.  **Code Coverage:** Integrate a code coverage tool (e.g., Istanbul for JS, Coverage.py for Python, JaCoCo for Java). Configure your pipeline to extract the code coverage percentage and display it in the merge request widget.
5.  **Quality Gates:** Implement a mechanism (e.g., using `rules` or `allow_failure`) to ensure that subsequent stages (like a hypothetical `deploy` stage) only run if all previous `lint` and `test` stages pass.

**Stretch Goals:**

*   **Static Application Security Testing (SAST):** Integrate a SAST tool (e.g., Bandit for Python, Find Security Bugs for Java, or GitLab's built-in SAST) to scan your code for security vulnerabilities.
*   **Dynamic Application Security Testing (DAST):** If your application has a deployed instance (even a review app), configure a DAST scan against it.
*   **Custom Quality Script:** Write a custom script that enforces a specific code quality rule (e.g., checks for specific forbidden keywords, ensures all functions have docstrings) and integrate it as a CI job.
*   **Dependency Scanning:** Add a job to scan your project's dependencies for known vulnerabilities.

**Evaluation Criteria:**

*   **Comprehensive Testing:** Unit and integration tests run successfully.
*   **Code Quality Enforcement:** Linting jobs correctly identify and report issues.
*   **Visible Reports:** JUnit test reports and code coverage metrics are correctly displayed in the GitLab UI (merge request widget, pipeline details).
*   **Pipeline Logic:** The `.gitlab-ci.yml` effectively uses stages, jobs, and conditional logic to manage the testing workflow.
*   **Robustness:** The pipeline is resilient to failures in individual quality checks and provides clear feedback.
*   **Efficiency:** Appropriate use of `cache` and `dependencies` to optimize pipeline runtime.

**Estimated Time:** 7-10 hours

## Final Examination

This final examination assesses your comprehensive understanding of GitLab CI/CD, covering pipeline fundamentals, advanced features, Docker integration, and best practices. It includes a mix of conceptual questions, code tracing, code writing, and problem-solving scenarios.

---

**Instructions:** Answer all questions thoroughly. For code-related questions, ensure your syntax is correct and explanations are clear.

---

### Section 1: Concept Definitions (4 questions)

**1. Question:** Explain the core purpose of a GitLab CI/CD pipeline. How does it contribute to the software development lifecycle?

**Answer:**
A GitLab CI/CD pipeline automates the stages of your software development process, from code commit to deployment. Its core purpose is to ensure that every change to the codebase is automatically built, tested, and deployed in a consistent and reliable manner. This automation significantly reduces manual errors, speeds up the delivery cycle, improves code quality through continuous feedback, and enables faster iteration and deployment of new features or bug fixes, ultimately leading to more efficient and robust software delivery.

**2. Question:** Differentiate between `cache` and `artifacts` in GitLab CI/CD. Provide a scenario where each would be appropriately used.

**Answer:**
*   **`cache`**: `cache` is used to store files that are needed across multiple pipeline runs to speed up execution. It's primarily for dependencies or build tools that don't change frequently. Cache contents are global to the project (or job, if scoped) and are implicitly downloaded at the start of a job and uploaded at the end. They are typically used for things like `node_modules`, `pip` virtual environments, or Maven/Gradle caches.
    *   **Scenario for `cache`**: Caching `node_modules` in a Node.js project. The `install_dependencies` job would download and cache `node_modules` after `npm install`. Subsequent jobs like `test` or `build` in later pipeline runs would then quickly retrieve these cached dependencies instead of re-downloading them, saving time.
*   **`artifacts`**: `artifacts` are files or directories explicitly generated by a job that you want to save and pass to subsequent jobs within the *same* pipeline run, or download after the pipeline completes. Artifacts are specific to a job's execution and can be browsed or downloaded from the GitLab UI. They are typically used for build outputs, test reports, compiled binaries, or generated documentation.
    *   **Scenario for `artifacts`**: A `build` job compiles a static website and outputs the `public/` directory. This `public/` directory is declared as an artifact. A subsequent `deploy` job in the same pipeline can then `dependencies` on the `build` job to access these `public/` files and deploy them to a server, ensuring the correct build output is used.

**3. Question:** What is a GitLab Runner, and why is it essential for CI/CD pipelines in GitLab?

**Answer:**
A GitLab Runner is an agent that executes the jobs defined in your `.gitlab-ci.yml` file. It's an open-source application that communicates with the GitLab CI/CD API, picks up jobs, runs them in an isolated environment (like a Docker container, virtual machine, or shell), and sends the results back to GitLab.
It is essential because GitLab itself (the web application) does not execute the CI/CD jobs. Instead, it orchestrates them and delegates the actual work to registered Runners. Without Runners, your CI/CD pipelines would not be able to execute any build, test, or deployment commands, effectively rendering the CI/CD functionality inert. Runners provide the computational resources and execution environments necessary to perform the tasks defined in your pipeline.

**4. Question:** Define "Review App" in the context of GitLab CI/CD and explain its primary benefit.

**Answer:**
A Review App is a dynamic, temporary deployment of your application created for each merge request. It allows developers, designers, and other stakeholders to preview changes in a live, isolated environment before they are merged into the main codebase.
Its primary benefit is to **facilitate early and collaborative feedback**. By providing a live, working version of the proposed changes, Review Apps significantly improve the code review process. Stakeholders can interact with the changes directly, test new features, identify UI/UX issues, and provide feedback without needing to pull the branch, set up a local development environment, or deploy to a staging server. This speeds up the review cycle, reduces errors, and ensures higher quality merges.

### Section 2: Code Tracing (3 questions)

**5. Question:** Consider the following `.gitlab-ci.yml` snippet. Describe the order in which the jobs will execute and explain what will happen if `build_frontend` fails.

```yaml
stages:
  - build
  - test
  - deploy

build_frontend:
  stage: build
  script:
    - echo "Building frontend..."
    - mkdir public
    - echo "<h1>Hello CI/CD</h1>" > public/index.html
  artifacts:
    paths:
      - public/
    expire_in: 1 hour

run_unit_tests:
  stage: test
  script:
    - echo "Running unit tests..."
    - sleep 5 # Simulate tests
    - echo "Tests passed."
  dependencies:
    - build_frontend

deploy_staging:
  stage: deploy
  script:
    - echo "Deploying to staging..."
    - ls public/ # Verify artifacts from build_frontend
    - echo "Deployed to staging."
  dependencies:
    - run_unit_tests
  only:
    - main
```

**Answer:**
**Order of Execution:**
1.  **`build_frontend`**: This job will run first as it belongs to the `build` stage, which is the first stage defined. It will create a `public/` directory and an `index.html` file inside it. These files will be saved as artifacts, expiring in 1 hour.
2.  **`run_unit_tests`**: This job will run next, as it belongs to the `test` stage. It explicitly declares a dependency on `build_frontend`. Although it doesn't *use* the artifacts from `build_frontend` in its script, the `dependencies` keyword ensures that `build_frontend` must complete successfully before `run_unit_tests` starts. It will print "Running unit tests..." and "Tests passed."
3.  **`deploy_staging`**: This job will run last, as it belongs to the `deploy` stage. It depends on `run_unit_tests`. It will access the `public/` artifacts generated by `build_frontend` (which are passed down through `dependencies`), print "Deploying to staging...", list the `public/` directory content, and then print "Deployed to staging." This job will only run if the current branch is `main`.

**What happens if `build_frontend` fails:**
If `build_frontend` fails, the entire pipeline will stop immediately. None of the subsequent jobs (`run_unit_tests` and `deploy_staging`) will execute because they depend on `build_frontend` completing successfully. The pipeline will be marked as "failed."

**6. Question:** Given the following `rules` block for a job, determine when the `deploy_production` job will *run* and when it will *be skipped*.

```yaml
deploy_production:
  stage: deploy
  script:
    - echo "Deploying to production..."
  rules:
    - if: '$CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"'
      when: on_success
    - if: '$CI_COMMIT_TAG =~ /^v\d+\.\d+\.\d+$/'
      when: on_success
    - if: '$CI_PIPELINE_SOURCE == "web"'
      when: manual
    - when: never
```

**Answer:**
The `deploy_production` job will *run* under the following conditions:

*   **Automatic on `main` branch push**: If a commit is pushed directly to the `main` branch (not via a merge request), and all previous jobs in the pipeline succeed.
*   **Automatic on version tag push**: If a Git tag matching the pattern `vX.Y.Z` (e.g., `v1.0.0`, `v2.3.10`) is pushed, and all previous jobs in the pipeline succeed.
*   **Manual via Web UI**: If the pipeline is triggered manually through the GitLab web interface (e.g., from the Pipelines page, "Run pipeline" button), the `deploy_production` job will appear as a manual job that can be started by a user.

The `deploy_production` job will *be skipped* (or not appear) under the following conditions:

*   **Merge Request Pipelines**: If the pipeline is triggered by a merge request (where `$CI_PIPELINE_SOURCE` is typically `merge_request_event` or similar), none of the `if` conditions for automatic execution will match, and the `when: never` rule will apply.
*   **Pushes to other branches**: If a commit is pushed to any branch other than `main` (e.g., a feature branch, `dev`), and it's not a version tag.
*   **Scheduled Pipelines**: If the pipeline is triggered by a schedule.
*   **API Triggers**: If the pipeline is triggered via the API, unless `$CI_PIPELINE_SOURCE` is explicitly set to `web` (which is unlikely for API triggers).
*   **Any other pipeline source or branch/tag not matching the `if` conditions**, and it's not a manual trigger.

**7. Question:** Trace the execution flow for the following pipeline, paying close attention to `needs` and `dependencies`. Assume all jobs succeed.

```yaml
stages:
  - setup
  - build
  - test
  - deploy

prepare_env:
  stage: setup
  script: echo "Preparing environment..."

build_backend:
  stage: build
  script: echo "Building backend..."
  needs: ["prepare_env"] # Explicit dependency

build_frontend:
  stage: build
  script: echo "Building frontend..."
  needs: ["prepare_env"] # Explicit dependency

run_backend_tests:
  stage: test
  script: echo "Running backend tests..."
  dependencies: ["build_backend"] # Implicit dependency on artifacts

run_frontend_tests:
  stage: test
  script: echo "Running frontend tests..."
  dependencies: ["build_frontend"] # Implicit dependency on artifacts

deploy_app:
  stage: deploy
  script: echo "Deploying combined app..."
  needs: ["run_backend_tests", "run_frontend_tests"] # Explicit dependency
```

**Answer:**
The execution flow will be as follows:

1.  **`prepare_env`** (Stage: `setup`): This job runs first as it's in the initial stage and has no dependencies.
2.  **`build_backend`** and **`build_frontend`** (Stage: `build`):
    *   These two jobs will run **concurrently** after `prepare_env` completes successfully.
    *   They both explicitly `need` `prepare_env`, meaning they will only start once `prepare_env` is done.
    *   Since they are in the same stage and don't `need` each other, they can execute in parallel.
3.  **`run_backend_tests`** and **`run_frontend_tests`** (Stage: `test`):
    *   These two jobs will also run **concurrently** after the respective `build` jobs they depend on are complete.
    *   `run_backend_tests` will start after `build_backend` finishes (due to `dependencies: ["build_backend"]`).
    *   `run_frontend_tests` will start after `build_frontend` finishes (due to `dependencies: ["build_frontend"]`).
    *   Even though they are in the same stage, their start times might differ slightly depending on which `build` job finishes first.
4.  **`deploy_app`** (Stage: `deploy`):
    *   This job will run last.
    *   It will only start after *both* `run_backend_tests` and `run_frontend_tests` have completed successfully, as indicated by its `needs` statement.
    *   The `needs` keyword here allows `deploy_app` to start as soon as its explicit dependencies are met, without waiting for other jobs in the `test` stage if there were any that `deploy_app` didn't depend on.

In summary: `prepare_env` -> (`build_backend` & `build_frontend` concurrently) -> (`run_backend_tests` & `run_frontend_tests` concurrently, once their respective build jobs are done) -> `deploy_app` (once both test jobs are done).

### Section 3: Code Writing (4 questions)

**8. Question:** Write a GitLab CI/CD job that builds a Docker image for a Node.js application and pushes it to your project's GitLab Container Registry. Assume your `Dockerfile` is in the root directory and the application version is available as a CI/CD variable `$APP_VERSION`.

**Answer:**

```yaml
# .gitlab-ci.yml snippet

build_and_push_docker_image:
  stage: build
  image: docker:latest # Use the official Docker image for building
  services:
    - docker:dind # Enable Docker-in-Docker for building images
  variables:
    # Define the image name for the project's container registry
    CONTAINER_IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$APP_VERSION
  script:
    - echo "Logging into GitLab Container Registry..."
    # Use CI_REGISTRY_USER and CI_REGISTRY_PASSWORD (pre-defined by GitLab)
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - echo "Building Docker image: $CONTAINER_IMAGE"
    - docker build -t $CONTAINER_IMAGE .
    - echo "Pushing Docker image to registry..."
    - docker push $CONTAINER_IMAGE
  rules:
    # This job should only run on pushes to the main branch or on tags
    - if: '$CI_COMMIT_BRANCH == "main"'
    - if: '$CI_COMMIT_TAG'
```

**Explanation:**
This job uses the `docker:latest` image and the `docker:dind` service to provide a Docker daemon within the job's execution environment. It logs into the GitLab Container Registry using pre-defined CI/CD variables (`$CI_REGISTRY_USER`, `$CI_REGISTRY_PASSWORD`, `$CI_REGISTRY`). It then builds the Docker image, tagging it with a combination of the project's registry path, the branch/tag slug, and the custom `$APP_VERSION` variable. Finally, it pushes the tagged image to the registry. The `rules` ensure it only runs on `main` branch pushes or when a Git tag is created.

**9. Question:** Write a `.gitlab-ci.yml` snippet to deploy a static website to GitLab Pages. The website's build output is located in a directory named `_site/`.

**Answer:**

```yaml
# .gitlab-ci.yml snippet

pages:
  stage: deploy
  script:
    - echo "Deploying static site to GitLab Pages..."
    # Ensure the _site directory exists and contains your static files
    - mv _site/ public/ # GitLab Pages expects files in a 'public/' directory
  artifacts:
    paths:
      - public # Declare 'public/' as an artifact
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"' # Only deploy from the main branch
```

**Explanation:**
The `pages` job is a special job name recognized by GitLab for deploying to GitLab Pages. It must be in the `deploy` stage (or any stage, but `deploy` is conventional) and must produce artifacts in a directory named `public/`. This snippet assumes your build process (in a previous stage, not shown) generates files into `_site/`. The `mv _site/ public/` command moves these generated files into the `public/` directory, which is then declared as an artifact. The `rules` ensure this deployment only happens for the `main` branch.

**10. Question:** Write a `rules` section for a `deploy_production` job that should only run under two conditions:
    1.  When a commit is pushed to the `main` branch.
    2.  When the job is manually triggered from the GitLab UI.
    In both cases, the job should only run if previous stages were successful.

**Answer:**

```yaml
# .gitlab-ci.yml snippet for a deploy_production job

deploy_production:
  stage: deploy
  script:
    - echo "Initiating production deployment..."
    # ... deployment commands ...
  rules:
    # Condition 1: Automatic run on push to 'main' branch
    - if: '$CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"'
      when: on_success
    # Condition 2: Manual trigger from GitLab UI
    - if: '$CI_PIPELINE_SOURCE == "web"'
      when: manual
    # Default: Do not run for any other condition
    - when: never
```

**Explanation:**
The `rules` block is evaluated in order.
*   The first rule `if: '$CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"'` ensures the job runs automatically (`when: on_success`) if a push event occurs on the `main` branch.
*   The second rule `if: '$CI_PIPELINE_SOURCE == "web"'` makes the job a manual one (`when: manual`) if the pipeline was triggered from the GitLab web UI. This allows users to manually start the production deployment.
*   The final `when: never` rule acts as a catch-all, ensuring that if none of the preceding `if` conditions are met, the job will not run at all, preventing unintended deployments. `on_success` is the default `when` value if not specified, but explicitly stating it makes the intent clearer.

**11. Question:** Write a job that uses `cache` to optimize dependency installation for a Node.js project. The job should install `npm` dependencies and then run `npm test`.

**Answer:**

```yaml
# .gitlab-ci.yml snippet

test_nodejs_app:
  stage: test
  image: node:18 # Use a Node.js image
  cache:
    key:
      files:
        - package-lock.json # Key the cache by the lock file
    paths:
      - node_modules/ # Cache the node_modules directory
  script:
    - echo "Checking for cached node_modules..."
    - npm ci --cache .npm --prefer-offline # Use npm ci for clean installs, prefer offline for cache
    - echo "Running tests..."
    - npm test
```

**Explanation:**
This job defines a `cache` block.
*   `key: files: - package-lock.json` ensures that the cache is unique to the exact `package-lock.json` file. If `package-lock.json` changes, a new cache will be created. This prevents using outdated dependencies.
*   `paths: - node_modules/` specifies the directory to cache.
*   In the `script`, `npm ci` is used instead of `npm install` because `npm ci` is designed for CI environments, performing a clean install based on `package-lock.json` and being generally faster and more reliable. `--cache .npm --prefer-offline` further optimizes by using a local npm cache and preferring cached packages. If `node_modules/` is present from a previous cache, `npm ci` will be very fast. If not, it will install dependencies and then the `node_modules/` directory will be cached for future runs. Finally, `npm test` is executed.

### Section 4: Design and Debugging Problems (4 questions)

**12. Question:** A GitLab CI/CD pipeline is failing because a `deploy` job cannot find files generated by a preceding `build` job. What are the most common causes for this issue, and how would you troubleshoot and resolve it?

**Answer:**
**Common Causes:**

1.  **Missing `artifacts` declaration in the `build` job:** The `build` job must explicitly declare the output files/directories as `artifacts` so GitLab knows to save them. If not declared, they are lost after the `build` job completes.
2.  **Missing `dependencies` in the `deploy` job:** The `deploy` job must explicitly declare `dependencies` on the `build` job to ensure it downloads and makes available the artifacts from `build`. Without `dependencies`, the `deploy` job will not receive the artifacts.
3.  **Incorrect `paths` in `artifacts` or `dependencies`:** The paths specified in `artifacts:paths` in the `build` job, or the implicit paths expected by `dependencies` in the `deploy` job, might be incorrect. For example, `build` might output to `dist/`, but `deploy` expects `build/`.
4.  **Artifact expiration:** If `artifacts:expire_in` is set to a very short duration, the artifacts might have expired before the `deploy` job starts (less common for jobs in the same pipeline, but possible in complex scenarios or manual retries).
5.  **Job execution order issues:** If the `deploy` job is in an earlier stage than the `build` job, or if `needs` are misconfigured, the `build` job might not have completed when `deploy` tries to run.

**Troubleshooting and Resolution:**

1.  **Check `build` job's `artifacts`:**
    *   Verify that the `build` job includes an `artifacts` section.
    *   Ensure `paths` within `artifacts` correctly point to the directory or files that need to be passed (e.g., `artifacts: paths: - dist/`).
    *   **Action:** Add/correct `artifacts:paths` in the `build` job.
2.  **Check `deploy` job's `dependencies`:**
    *   Verify that the `deploy` job includes `dependencies: - build_job_name`.
    *   **Action:** Add `dependencies: - build_job_name` to the `deploy` job.
3.  **Inspect job logs and artifact browser:**
    *   Examine the `build` job's log to confirm that the files were indeed created in the expected location.
    *   After the `build` job completes, check the "Job artifacts" section in the GitLab UI for that job to see if the artifacts were uploaded correctly and if you can download them. This confirms the `artifacts` configuration is correct.
    *   In the `deploy` job's log, add `ls -R` or `pwd` commands at the beginning of the script to see what files are present in the working directory. This helps confirm if artifacts were downloaded.
    *   **Action:** Use `ls -R` in jobs to debug paths. Verify artifacts in GitLab UI.
4.  **Confirm stage order:** Ensure the `build` job's stage is defined *before* the `deploy` job's stage in the `stages` section.
    *   **Action:** Adjust `stages` order if necessary.
5.  **Review `needs` keyword (if used):** If `needs` is used instead of `dependencies`, ensure it's correctly referencing the `build` job. `needs` only ensures execution order, not artifact passing, so `dependencies` is usually preferred for artifact exchange.
    *   **Action:** If artifacts are needed, use `dependencies`. If only execution order, `needs` is fine.

**Resolution:** The most common resolution is to ensure the `build` job correctly declares its output as `artifacts` and the `deploy` job correctly declares `dependencies` on the `build` job.

**13. Question:** Design a multi-stage pipeline for a typical web application that involves a backend API (e.g., Python Flask) and a frontend (e.g., React). Describe the stages and the key jobs within each stage, including how artifacts and dependencies would flow.

**Answer:**

**Pipeline Design for a Web Application (Backend API + Frontend)**

**Stages:**
1.  **`prepare`**: Initial setup, dependency caching.
2.  **`build`**: Compiling/building both backend and frontend components.
3.  **`test`**: Running unit, integration, and linting tests for both.
4.  **`package`**: Creating deployable artifacts (e.g., Docker images).
5.  **`deploy`**: Deploying to various environments.

**Detailed Jobs and Flow:**

---

**Stage 1: `prepare`**

*   **Job: `cache_dependencies`**
    *   **Purpose:** Download and cache common dependencies for both backend (e.g., Python `venv`) and frontend (e.g., `node_modules`). This speeds up subsequent jobs.
    *   **Script:** `pip install -r backend/requirements.txt`, `npm install --prefix frontend/`
    *   **Cache:** `key: files: [backend/requirements.txt, frontend/package-lock.json]`, `paths: [backend/.venv/, frontend/node_modules/]`
    *   **Output:** Cached dependencies.
    *   **Dependencies:** None (first job).

---

**Stage 2: `build`**

*   **Job: `build_backend`**
    *   **Purpose:** Compile/prepare the backend application. For Python, this might be minimal, but for Go/Java, it's compilation.
    *   **Script:** `cd backend && python setup.py build` (or `mvn package`, `go build`).
    *   **Artifacts:** Backend build output (e.g., compiled `.jar`, Python distribution).
    *   **Dependencies:** `cache_dependencies` (to use cached Python environment).
*   **Job: `build_frontend`**
    *   **Purpose:** Build the frontend application (e.g., React, Vue) into static assets.
    *   **Script:** `cd frontend && npm run build`.
    *   **Artifacts:** Frontend static assets (e.g., `frontend/dist/`).
    *   **Dependencies:** `cache_dependencies` (to use cached `node_modules`).

---

**Stage 3: `test`**

*   **Job: `lint_backend`**
    *   **Purpose:** Run code style and static analysis for the backend.
    *   **Script:** `cd backend && flake8 .`, `mypy .`.
    *   **Dependencies:** `cache_dependencies` (uses cached Python environment).
    *   **`allow_failure: true` (optional):** For non-critical style warnings.
*   **Job: `unit_test_backend`**
    *   **Purpose:** Run unit tests for the backend.
    *   **Script:** `cd backend && pytest`.
    *   **Artifacts:reports:junit:** Generate JUnit XML report.
    *   **Dependencies:** `cache_dependencies` (uses cached Python environment).
*   **Job: `lint_frontend`**
    *   **Purpose:** Run code style and static analysis for the frontend.
    *   **Script:** `cd frontend && npm run lint`.
    *   **Dependencies:** `cache_dependencies` (uses cached `node_modules`).
*   **Job: `unit_test_frontend`**
    *   **Purpose:** Run unit tests for the frontend.
    *   **Script:** `cd frontend && npm run test -- --ci --json --outputFile=test-results.xml`.
    *   **Artifacts:reports:junit:** Generate JUnit XML report.
    *   **Dependencies:** `cache_dependencies` (uses cached `node_modules`).
*   **Job: `integration_test`**
    *   **Purpose:** Run integration tests that might require both backend and frontend to be conceptually "built" or at least their test dependencies.
    *   **Script:** (e.g., start a mock backend, run Cypress/Playwright tests against a locally served frontend build).
    *   **Dependencies:** `build_backend`, `build_frontend` (to ensure components are ready for integration testing).

---

**Stage 4: `package`**

*   **Job: `docker_build_backend`**
    *   **Purpose:** Build the Docker image for the backend API.
    *   **Script:** `docker build -t $CI_REGISTRY_IMAGE/backend:$CI_COMMIT_SHA backend/`.
    *   **Services:** `docker:dind`.
    *   **Dependencies:** `build_backend` (to ensure backend build artifacts are available for Docker image).
    *   **Artifacts:** None (image pushed to registry).
*   **Job: `docker_build_frontend`**
    *   **Purpose:** Build the Docker image for the frontend (e.g., Nginx serving static files).
    *   **Script:** `docker build -t $CI_REGISTRY_IMAGE/frontend:$CI_COMMIT_SHA frontend/`.
    *   **Services:** `docker:dind`.
    *   **Dependencies:** `build_frontend` (to ensure frontend static assets are available for Docker image).
    *   **Artifacts:** None (image pushed to registry).

---

**Stage 5: `deploy`**

*   **Job: `deploy_staging`**
    *   **Purpose:** Deploy the Dockerized application to a staging environment.
    *   **Script:** (e.g., `kubectl apply -f k8s/staging.yaml`, `helm upgrade --install`).
    *   **Needs:** `docker_build_backend`, `docker_build_frontend` (ensures images are built and pushed).
    *   **Rules:** `if: '$CI_COMMIT_BRANCH == "main"'`
*   **Job: `deploy_production`**
    *   **Purpose:** Deploy the Dockerized application to the production environment.
    *   **Script:** (e.g., `kubectl apply -f k8s/production.yaml`).
    *   **Needs:** `deploy_staging` (ensures staging deployment was successful).
    *   **Rules:** `if: '$CI_COMMIT_BRANCH == "main" && $CI_PIPELINE_SOURCE == "push"'`, `when: manual` (for controlled production rollout).

---

**Artifact and Dependency Flow Summary:**
*   **`cache`**: Used in `prepare` stage to speed up `build` and `test` stages by reusing `node_modules` and Python `venv`.
*   **`artifacts`**: `build_backend` and `build_frontend` jobs produce their respective build outputs as artifacts, which are then consumed by `integration_test` and `docker_build_*` jobs via `dependencies`. Test jobs (`unit_test_*`) produce JUnit reports as artifacts.
*   **`dependencies`**: Used to pass artifacts between jobs within the same pipeline run (e.g., `docker_build_backend` depends on `build_backend`).
*   **`needs`**: Used to define explicit execution order between jobs, potentially across stages, without necessarily passing artifacts (e.g., `deploy_app` needs both `docker_build_backend` and `docker_build_frontend`).

This design ensures a clear separation of concerns, parallel execution where possible, and robust artifact management throughout the CI/CD process.

**14. Question:** A GitLab CI/CD job is running too slowly because it repeatedly downloads large dependencies (e.g., `node_modules/`, Maven `.m2/` repository) in every pipeline run. How can you optimize this job to significantly reduce its execution time?

**Answer:**

The primary method to optimize a job that repeatedly downloads large dependencies is to leverage GitLab CI/CD's **caching mechanism**. Caching allows you to store specific files or directories from one job run and reuse them in subsequent runs, drastically reducing download times.

**Optimization Steps:**

1.  **Identify Cacheable Directories:** Pinpoint the directories where the large dependencies are stored.
    *   For Node.js: `node_modules/`
    *   For Java Maven: `~/.m2/repository/`
    *   For Python: `.venv/` (virtual environment) or `~/.cache/pip/`
    *   For Ruby: `vendor/bundle`
2.  **Define a `cache` block in your `.gitlab-ci.yml`:**
    *   **`key`**: This is crucial. The cache key determines when a cache is reused or invalidated. It should be based on a file that changes when dependencies change.
        *   For Node.js: `key: files: - package-lock.json` (or `yarn.lock`)
        *   For Maven: `key: maven-$CI_COMMIT_REF_SLUG` (or a hash of `pom.xml`)
        *   For Python: `key: files: - requirements.txt`
        Using `$CI_COMMIT_REF_SLUG` in the key can create branch-specific caches, preventing conflicts and ensuring correct dependencies for each branch.
    *   **`paths`**: Specify the directories to cache. These paths are relative to the project root.
        *   Example: `paths: - node_modules/`
    *   **`policy`**: (Optional, default is `pull-push`). Can be set to `pull` (only download, don't upload), `push` (only upload), or `pull-push`. For dependencies, `pull-push` is usually correct.
3.  **Adjust the `script` to use the cache effectively:**
    *   The cache is automatically downloaded before the `script` starts and uploaded after it finishes.
    *   Your script should check if the dependencies exist (due to cache restoration) before attempting to reinstall them. For many package managers, a conditional install or a specific CI command handles this.
        *   **Node.js:** Use `npm ci` or `yarn install --frozen-lockfile`. These commands are designed for CI and will often be faster and more reliable with a cache.
        *   **Maven:** `mvn install -DskipTests` will typically use local `.m2/repository` if present.
        *   **Python:** `pip install -r requirements.txt` will install missing packages.
        *   **Example (Node.js):**
            ```yaml
            my_slow_job:
              stage: build
              image: node:18
              cache:
                key:
                  files:
                    - package-lock.json
                paths:
                  - node_modules/
              script:
                - echo "Checking for cached node_modules..."
                - npm ci --cache .npm --prefer-offline # This command efficiently uses the cache
                - echo "Dependencies ready. Proceeding with build/test."
                # ... rest of your build/test commands ...
            ```

**Troubleshooting and Best Practices:**

*   **Verify Cache Hit/Miss:** In the job logs, look for "Restoring cache" (cache hit) or "No cache found" (cache miss). This confirms if caching is working.
*   **Cache Size:** Be mindful of cache size. Very large caches can take time to upload/download, negating some benefits.
*   **Cache Invalidation:** Ensure your `key` correctly invalidates the cache when dependencies change. If `package-lock.json` changes, the `key` should change, forcing a fresh download and new cache.
*   **Shared Runners vs. Specific Runners:** Caching works best with specific runners that have persistent storage. With shared runners, the cache might be stored on a different machine each time, leading to more cache misses.
*   **Global vs. Job-specific Cache:** You can define a global cache at the top level of `.gitlab-ci.yml` for all jobs, or define it per job for more granular control.

By implementing caching with a well-chosen key and paths, you can drastically reduce the time spent downloading dependencies, making your CI/CD pipelines much faster and more efficient.

**15. Question:** You have a multi-stage pipeline with `build`, `test`, and `deploy` stages. You want to prevent the `deploy` job from running if the `test` job fails. How would you configure this in your `.gitlab-ci.yml`? What if you want the `deploy` job to *always* run, even if `test` fails, but only for a specific branch?

**Answer:**

**Scenario 1: Prevent `deploy` if `test` fails (Standard Behavior)**

By default, GitLab CI/CD jobs in a later stage will **not** run if any job in a preceding stage fails. So, if your `test` job is in the `test` stage and your `deploy` job is in the `deploy` stage, this behavior is automatic.

```yaml
stages:
  - build
  - test
  - deploy

build_app:
  stage: build
  script: echo "Building app..."
  # ... artifacts ...

run_tests:
  stage: test
  script:
    - echo "Running tests..."
    - exit 0 # Simulate success. Change to 'exit 1' to simulate failure.
  # ... test reports ...

deploy_app:
  stage: deploy
  script: echo "Deploying app..."
  # This job will only run if 'run_tests' (and 'build_app') succeed
  # No special configuration needed for this default behavior.
```

**Explanation:**
GitLab CI/CD pipelines are designed to be sequential by stage. If any job within a stage fails (and `allow_failure` is not set to `true` for that job), the entire pipeline is marked as failed, and no subsequent jobs in later stages will execute. Therefore, simply placing `run_tests` in the `test` stage and `deploy_app` in the `deploy` stage achieves the desired outcome without any extra configuration.

---

**Scenario 2: `deploy` job *always* runs, even if `test` fails, but only for a specific branch (e.g., `main`)**

This scenario requires overriding the default `when: on_success` behavior and combining it with specific rules.

```yaml
stages:
  - build
  - test
  - deploy

build_app:
  stage: build
  script: echo "Building app..."
  # ... artifacts ...

run_tests:
  stage: test
  script:
    - echo "Running tests..."
    - exit 1 # This job is configured to fail for demonstration
  # If you want the pipeline to continue even if this job fails,
  # you would typically add: allow_failure: true
  # However, for this specific scenario, we're relying on 'when: always' for deploy.

deploy_app_on_main_regardless_of_tests:
  stage: deploy
  script: echo "Deploying app to main, even if tests failed!"
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"' # Only for the 'main' branch
      when: always # This is the key: run regardless of previous job status
    - when: never # For any other branch, don't run
```

**Explanation:**
1.  **`rules: - if: '$CI_COMMIT_BRANCH == "main"'`**: This rule ensures that the `deploy_app_on_main_regardless_of_tests` job is only considered for pipelines running on the `main` branch.
2.  **`when: always`**: This is the critical part. By setting `when: always`, you explicitly tell GitLab to execute this job regardless of the status of previous jobs in the pipeline (whether they succeeded, failed, or were skipped).
3.  **`rules: - when: never`**: This acts as a catch-all, ensuring that if the branch is *not* `main`, this `deploy` job will not run at all.

With this configuration, if `run_tests` fails on the `main` branch, the `deploy_app_on_main_regardless_of_tests` job will still proceed and execute its script. If `run_tests` fails on any other branch, the `deploy` job will not run due to the `rules` condition.

**Common Mistake:** A common mistake is to use `allow_failure: true` on the `test` job and then expect the `deploy` job to run with `when: on_success`. While `allow_failure: true` allows the pipeline to continue, `when: on_success` still means "only if all previous jobs in the *pipeline* succeeded (or were allowed to fail without stopping the pipeline)". The `when: always` keyword is more explicit and powerful for running jobs irrespective of prior failures.

## Course Conclusion

Congratulations on completing the GitLab CI/CD course! You have embarked on a transformative journey into the heart of modern software development, mastering the tools and techniques that enable rapid, reliable, and automated delivery.

You are now equipped with a robust skillset that allows you to:

*   **Design and Implement CI/CD Pipelines:** Confidently structure `.gitlab-ci.yml` files, defining stages, jobs, and scripts to automate your build, test, and deployment processes.
*   **Manage Dependencies and Artifacts:** Effectively use `cache` to optimize pipeline speed and `artifacts` to pass crucial files between jobs and store build outputs.
*   **Integrate Docker into CI/CD:** Leverage Docker-in-Docker (`dind`) to build, test, and push Docker images to the GitLab Container Registry, a cornerstone of cloud-native applications.
*   **Automate Testing and Code Quality:** Incorporate unit tests, linting, and various reporting mechanisms to ensure high code quality and provide immediate feedback on changes.
*   **Control Pipeline Flow:** Utilize `rules`, `only/except`, `needs`, and `dependencies` to precisely control when and how jobs execute, adapting pipelines to different branches, tags, and events.
*   **Troubleshoot and Optimize:** Identify and resolve common pipeline failures, and apply strategies like caching to improve pipeline efficiency and reduce execution times.
*   **Implement Advanced Features:** Set up review apps for collaborative feedback and understand the principles behind robust deployment strategies to various environments.

These are not just theoretical concepts; they are practical, in-demand skills that will make you an invaluable asset in any software development team. You've learned to build the automated assembly lines that power continuous innovation.

### Where to Go Next: Continued Learning and Resources

Your journey with GitLab CI/CD doesn't end here; it merely begins a new chapter. The world of DevOps and cloud computing is vast and ever-evolving. Here are some suggested next steps and resources to continue your growth:

**1. Deep Dive into Advanced GitLab CI/CD Features:**
*   **Parent/Child Pipelines:** Explore how to break down large pipelines into smaller, more manageable ones for complex projects.
*   **Dynamic Child Pipelines:** Learn to generate pipeline configurations dynamically based on code changes or other conditions.
*   **GitLab Auto DevOps:** Investigate how GitLab can automatically detect, build, test, deploy, and monitor your applications with minimal configuration.
*   **Security Scanning (SAST, DAST, Dependency Scanning):** Integrate GitLab's built-in security features to scan your code and dependencies for vulnerabilities.
*   **Secret Management:** Learn best practices for securely managing sensitive information (API keys, credentials) in your CI/CD pipelines using GitLab's Secret Detection, Vault integration, or CI/CD variables.

**2. Explore Cloud Deployment Targets:**
*   **Kubernetes with GitLab CI/CD:** Learn how to deploy your Dockerized applications to Kubernetes clusters using GitLab's native integrations or custom scripts.
*   **Cloud-Specific Deployments:** Dive into deploying to public cloud providers like AWS (ECS, EKS, Lambda), Google Cloud (Cloud Run, GKE), or Azure (Azure Kubernetes Service, App Services) using GitLab CI/CD.

**3. Broaden Your DevOps Horizon:**
*   **Other CI/CD Tools:** Familiarize yourself with other popular CI/CD platforms like GitHub Actions, Jenkins, CircleCI, or Azure DevOps. Understanding their differences and similarities will make you a more versatile professional.
*   **Infrastructure as Code (IaC):** Learn tools like Terraform or Ansible to manage your infrastructure programmatically, integrating them into your GitLab CI/CD pipelines for automated infrastructure provisioning.
*   **Monitoring and Observability:** Explore tools like Prometheus, Grafana, ELK Stack, or cloud-native monitoring solutions to gain insights into your deployed applications.

**4. Community and Resources:**
*   **GitLab Documentation:** The official GitLab documentation is an incredibly rich and up-to-date resource for all things GitLab CI/CD.
*   **GitLab Community Forum:** Engage with other GitLab users, ask questions, and share your experiences.
*   **DevOps and Cloud-Native Communities:** Join online communities (e.g., CNCF, Reddit's r/devops) to stay current with industry trends and best practices.
*   **Open Source Contributions:** Contribute to open-source projects that use GitLab CI/CD to gain real-world experience and build your portfolio.

**5. Learning Paths:**
*   **DevOps Engineer Learning Path:** This course is a foundational step. Continue by exploring IaC, container orchestration (Kubernetes), cloud platforms, and monitoring.
*   **Cloud Engineer Learning Path:** Focus on a specific cloud provider (AWS, Azure, GCP) and learn how GitLab CI/CD integrates with their services for seamless deployments.
*   **Site Reliability Engineer (SRE) Path:** Combine your CI/CD knowledge with advanced system reliability, performance, and incident management skills.

Keep practicing, keep building, and don't be afraid to experiment. The best way to solidify your understanding is by applying these concepts to real-world projects. The skills you've acquired are highly valuable in today's technology landscape, and your dedication to continuous learning will ensure your success.

---

This course has provided you with the foundational knowledge and practical skills to confidently implement and manage robust CI/CD pipelines using GitLab. You've learned how to automate the software delivery process, ensuring consistency, speed, and reliability from code commit to production. Embrace the power of automation, continue to build and explore, and you'll be well on your way to becoming a proficient DevOps practitioner.

---


> End of Syllabus: GitLab CI/CD
> Course ID: gitlab-cicd
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Cloud Computing & DevOps
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
