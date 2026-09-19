---
course_title: GitHub Actions
course_id: github-actions
provider: Cohortia
original_reference: GitHub / Udemy / Udemy
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Cloud Computing & DevOps
skills: CI/CD, Automation, Workflow Orchestration, YAML, Git, GitHub
ownership_note: Cohortia curates and rebuilds content to provide an enhanced learning experience and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "GitHub Actions," a comprehensive Cohortia course designed to equip you with the essential skills to automate your software development workflows directly within GitHub. In today's fast-paced development landscape, Continuous Integration (CI) and Continuous Delivery (CD) are not just buzzwords but critical practices for delivering high-quality software rapidly and reliably. GitHub Actions provides a powerful, flexible, and native way to implement these practices, transforming how teams build, test, and deploy their applications. This course will guide you from the foundational concepts of CI/CD to designing and implementing robust automation pipelines.

Throughout this course, you will gain hands-on experience with the core components of GitHub Actions. We will demystify the YAML syntax used to define workflows, explore various events that can trigger your automations, and delve into the structure of jobs and steps that execute your tasks. You'll learn how to leverage a vast marketplace of pre-built actions, manage sensitive data securely with secrets, and understand the different types of runners available for executing your code. By the end of this journey, you'll be proficient in creating sophisticated workflows that automate everything from code linting and testing to complex multi-stage deployments.

This beginner-friendly course is structured to build your knowledge progressively, starting with simple automations and gradually introducing more advanced concepts like conditional execution, artifact management, and reusable workflows. We'll explore practical scenarios and common use cases, ensuring you can apply what you learn to real-world projects. Whether you're a developer looking to streamline your personal projects, a DevOps engineer aiming to optimize team workflows, or simply curious about modern automation practices, this course will provide you with the practical skills and confidence to integrate GitHub Actions effectively into your development toolkit.

Upon completing this course, you will be able to:
*   Explain the core principles and benefits of Continuous Integration (CI) and Continuous Delivery (CD).
*   Design and implement basic GitHub Actions workflows using correct YAML syntax.
*   Configure workflows to trigger automatically on various GitHub events, such as pushes, pull requests, and scheduled intervals.
*   Manage sensitive information and credentials securely within workflows using GitHub Secrets.
*   Utilize GitHub-hosted and self-hosted runners to execute workflow jobs efficiently.
*   Implement conditional logic and control flow to create dynamic and intelligent workflows.
*   Store, retrieve, and manage build artifacts for testing, deployment, or archival purposes.
*   Integrate GitHub Actions with external services and deployment targets to automate delivery.
*   Troubleshoot common workflow failures and optimize workflow performance.
*   Apply best practices for building secure, maintainable, and scalable CI/CD pipelines with GitHub Actions.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Introduction to CI/CD and Your First Workflow | 3 |
| 2 | Workflow Fundamentals: Events, Jobs, and Steps | 3 |
| 3 | Advanced Workflow Logic and Data Management | 4 |
| 4 | Managing Artifacts and Deploying with Environments | 4 |
| 5 | Runners, Custom Actions, and Reusable Workflows | 5 |
| 6 | Practical Applications, Troubleshooting, and Best Practices | 5 |

Total chapters: 24
---

## Module 1: Introduction to CI/CD and Your First Workflow

**Module Goal:** Equip learners with a foundational understanding of Continuous Integration and Continuous Delivery (CI/CD) principles and guide them through creating, running, and understanding their first basic GitHub Actions workflow.

### Chapter 1.1 — Understanding CI/CD: The Foundation of Modern Development

#### Learning objectives
*   Articulate the core concepts of Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment.
*   Explain the critical benefits of adopting CI/CD practices in software development, particularly in a DevOps context.
*   Identify the common challenges faced in traditional development workflows that CI/CD addresses.
*   Recognize how GitHub Actions serves as a powerful tool for implementing CI/CD pipelines.

#### Detailed lesson content
Welcome to the exciting world of GitHub Actions! Before we dive into the specifics of writing workflows, it's crucial to understand the "why" behind this technology. GitHub Actions is a powerful tool for automating tasks, and its primary use case, especially in the Cloud Computing & DevOps landscape, is to enable Continuous Integration and Continuous Delivery (CI/CD). This chapter lays the groundwork by exploring what CI/CD truly means and why it has become an indispensable practice in modern software development.

Imagine a software project where multiple developers are working on different features simultaneously. In a traditional, non-CI/CD environment, each developer might work in isolation for days or weeks, building their feature. When it's finally time to merge all these changes into the main codebase, a phenomenon known as "integration hell" often ensues. Conflicts arise, bugs appear due to incompatible changes, and the process of getting everything to work together can be incredibly time-consuming, frustrating, and prone to errors. This significantly slows down the delivery of new features to users.

Continuous Integration (CI) is the practice designed to solve this problem. At its core, CI advocates for developers to integrate their code changes into a shared main branch frequently – ideally multiple times a day. Every time a developer pushes changes, an automated process kicks off. This process typically involves compiling the code, running unit tests, and performing static code analysis. The goal is to detect integration issues and bugs as early as possible. If the build or tests fail, the team is immediately notified, allowing them to fix the problem quickly while the changes are still fresh in their minds. This "fail fast" approach drastically reduces the complexity and cost of fixing bugs, ensuring the codebase remains in a consistently working state. Think of it like a quality control checkpoint that runs constantly, preventing small issues from snowballing into major crises.

Building upon CI, we have Continuous Delivery (CD). While CI ensures your code is always in an integrated, testable state, Continuous Delivery takes it a step further by ensuring that this integrated code is always in a *deployable* state. This means that after successful integration and automated testing, the software is automatically packaged, configured, and made ready for release to a production-like environment. This includes steps like building deployable artifacts (e.g., Docker images, JAR files, executables), running integration tests, and potentially staging the application for manual quality assurance or user acceptance testing. The key distinction here is that while the software is *ready* for deployment at any time, the actual deployment to production is a manual step, giving the team control over when new features go live. This provides flexibility for business decisions, allowing releases to be timed with marketing campaigns or specific business needs.

Finally, Continuous Deployment is the most advanced form of CD. With Continuous Deployment, every change that successfully passes all automated CI and CD pipeline stages is *automatically* deployed to production without any human intervention. This requires an extremely high level of confidence in your automated testing and infrastructure, as any bug that slips through the pipeline will immediately impact live users. While it offers the fastest path from code commit to production, it's typically adopted by mature teams with robust monitoring, rollback capabilities, and comprehensive test suites. For many organizations, Continuous Delivery strikes a good balance between speed and control, allowing them to release frequently while retaining a final human gate.

The benefits of adopting CI/CD are profound and directly impact a project's success. Firstly, it drastically increases development speed and efficiency. By automating repetitive tasks like building, testing, and packaging, developers can focus more on writing code and less on operational overhead. Secondly, it significantly improves code quality and reduces the number of bugs reaching production. Early detection of issues means they are cheaper and easier to fix. Thirdly, CI/CD fosters better collaboration within development teams. Frequent integration means fewer merge conflicts and a shared understanding of the codebase's health. Lastly, and perhaps most importantly, it enables faster feedback loops. Customers receive new features and bug fixes more rapidly, leading to higher satisfaction and a more competitive product. In the context of Cloud Computing, CI/CD is essential for managing dynamic infrastructure, deploying microservices, and scaling applications efficiently. GitHub Actions provides the framework to define these automated pipelines directly within your code repository, making it a natural fit for modern development practices.

#### Key concepts
*   **Continuous Integration (CI):** A development practice where developers frequently merge their code changes into a central repository, after which automated builds and tests are run.
*   **Continuous Delivery (CD):** An extension of CI that ensures software is always in a deployable state, ready for release to production at any time, often involving automated testing and staging.
*   **Continuous Deployment:** The most advanced form of CD, where every change that passes all automated tests is automatically deployed to production without human intervention.
*   **DevOps:** A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality.
*   **Integration Hell:** The complex and time-consuming process of merging disparate code changes from multiple developers, often leading to numerous conflicts and bugs.
*   **Automated Pipeline:** A series of automated steps (build, test, deploy) that software goes through from development to production.

#### Hands-on activity
**Activity: Reflecting on CI/CD in a Past Project**

Think about a past software project you've worked on (it could be a personal project, an academic one, or professional).

1.  Describe the process of integrating code changes from multiple contributors (if applicable) or deploying new features.
2.  Identify at least two challenges or pain points you encountered in that process.
3.  Based on your understanding of CI/CD from this chapter, how could implementing CI/CD practices have alleviated those challenges? Be specific about which CI/CD aspect (CI, CD, or Continuous Deployment) would have been most beneficial.

**No code template needed for this reflective activity.** Focus on applying the concepts to a real-world scenario.

#### Assessment idea
1.  **Question:** A development team frequently pushes code to a shared repository. After each push, an automated system compiles the code, runs unit tests, and performs static code analysis. If any of these steps fail, the team is immediately notified. Which CI/CD practice is this team primarily implementing?
    *   A) Continuous Deployment
    *   B) Continuous Delivery
    *   C) Continuous Integration
    *   D) Continuous Monitoring

    **Correct Answer:** C) Continuous Integration
    **Explanation:** Continuous Integration (CI) focuses on frequently merging code, running automated builds and tests, and quickly identifying integration issues. The scenario described perfectly matches the definition and goals of CI. Continuous Delivery would involve making the software deployable, and Continuous Deployment would automatically deploy it to production.

2.  **Question:** Your team has implemented a CI/CD pipeline where code is automatically built, tested, and packaged into a deployable artifact after every successful commit. However, the decision to push this artifact to the production environment is still made manually by a release manager. Which CI/CD practice best describes this setup?
    *   A) Continuous Integration
    *   B) Continuous Delivery
    *   C) Continuous Deployment
    *   D) Agile Development

    **Correct Answer:** B) Continuous Delivery
    **Explanation:** In Continuous Delivery, the software is always in a deployable state, meaning it has passed all automated tests and is ready for release. The key differentiator from Continuous Deployment is the manual gate for the final production deployment, which is exactly what the release manager's role represents in this scenario. Continuous Integration is a prerequisite but doesn't cover the deployable artifact stage.

#### AI generation note
Create a 12-minute animated explainer video. Use clear, simple analogies like an assembly line or a chef baking a cake to illustrate CI/CD concepts. Visually differentiate CI, CD, and Continuous Deployment with distinct color schemes or icons. Include animated diagrams showing code flowing through stages (commit -> build -> test -> package -> deploy). Emphasize the "fail fast" principle with a visual representation of immediate feedback. End with a 2-question interactive quiz about the differences between CI and CD. Ensure captions and alt text for all visual elements are available.

### Chapter 1.2 — Exploring GitHub Actions Fundamentals: Workflows, Events, Jobs, and Steps

#### Learning objectives
*   Identify the core components of a GitHub Actions workflow, including workflows, events, jobs, and steps.
*   Understand the structure and syntax of a GitHub Actions workflow file (`.github/workflows/*.yml`).
*   Explain how different events trigger GitHub Actions workflows.
*   Differentiate between jobs and steps, and describe their execution context within a workflow.
*   Recognize the role of actions and commands within a workflow step.

#### Detailed lesson content
Now that we understand the foundational principles of CI/CD, let's turn our attention to GitHub Actions, the powerful automation platform built directly into GitHub. GitHub Actions allows you to automate, customize, and execute your software development workflows right in your repository. You can build, test, and deploy your code directly from GitHub, making it an ideal tool for implementing CI/CD. At its heart, GitHub Actions operates on a few core concepts: **Workflows**, **Events**, **Jobs**, and **Steps**. Understanding these building blocks is crucial for crafting effective automation.

Everything in GitHub Actions starts with a **workflow**. A workflow is an automated, configurable procedure that runs one or more jobs. Workflows are defined in YAML files (`.yml` or `.yaml`) and stored in the `.github/workflows/` directory of your repository. Each YAML file represents a single workflow. For instance, you might have one workflow for building and testing your application, another for deploying to a staging environment, and yet another for linting your code. The YAML format is human-readable and uses indentation to define structure, which is a common source of errors if not handled carefully.

Consider this basic workflow structure:

```yaml
name: My First Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run a one-line script
        run: echo Hello, GitHub Actions!
      - name: Run a multi-line script
        run: |
          echo This is a multi-line script.
          echo It will execute line by line.
```

The `name` key provides a human-readable title for your workflow, which appears in the GitHub Actions UI. The `on` key is perhaps the most critical, as it defines the **event** that triggers the workflow. An event is a specific activity that occurs in your repository, such as a `push` to a branch, a `pull_request` being opened, or even a scheduled time (`schedule`). You can specify a single event, a list of events, or even filter events based on branches, tags, or file paths. For example, `on: push` means the workflow will run every time code is pushed to any branch. `on: [push, pull_request]` would trigger it for both pushes and pull requests. You can also define more granular triggers like `on: push: branches: [main, develop]` to only run for pushes to specific branches. A common mistake is to forget to specify an `on` event, which would result in a workflow that never runs.

Once an event triggers a workflow, it executes one or more **jobs**. A job is a set of steps that execute on the same runner. Runners are virtual machines hosted by GitHub (or self-hosted) that execute your workflow. Each job runs in a fresh instance of a virtual environment, meaning it starts with a clean slate. The `jobs` key in the YAML file defines the different jobs in your workflow. Each job needs a unique identifier (e.g., `build`, `test`, `deploy`). The `runs-on` key within a job specifies the type of runner the job will execute on. Common options include `ubuntu-latest`, `windows-latest`, and `macos-latest`. GitHub provides a variety of pre-configured environments suitable for most development tasks.

Inside each job, you define a sequence of **steps**. A step is an individual task that a job performs. Steps can run commands, execute scripts, or use pre-built "actions." Steps are executed sequentially, and if one step fails, by default, the entire job fails. Each step can have a `name` for better readability in the UI. The `run` keyword is used to execute shell commands directly on the runner. You can run single-line commands or multi-line scripts using the `|` (pipe) character followed by indented lines. For example, `run: npm install && npm test` would install dependencies and then run tests.

Beyond simple commands, GitHub Actions leverages **actions**. Actions are reusable units of code that encapsulate common tasks, simplifying your workflows. They are typically published on the GitHub Marketplace and can be referenced using the `uses` keyword, followed by the action's path and version (e.g., `actions/checkout@v4`). The `actions/checkout@v4` action, for instance, is almost universally used as the first step in any job that needs access to your repository's code. It checks out your repository's code onto the runner, making it available for subsequent steps. Other popular actions include `actions/setup-node` for configuring Node.js environments or `actions/setup-python` for Python. Using actions saves you from writing complex scripts for common tasks and promotes reusability and maintainability. Understanding how to combine these fundamental components – workflows, events, jobs, and steps – is the key to building powerful and efficient CI/CD pipelines with GitHub Actions.

#### Key concepts
*   **Workflow:** An automated, configurable procedure defined in a YAML file (`.github/workflows/*.yml`) that runs one or more jobs.
*   **Event:** A specific activity in a repository (e.g., `push`, `pull_request`, `schedule`) that triggers a workflow.
*   **Job:** A set of steps that execute on the same runner. Each job runs in a fresh virtual environment.
*   **Step:** An individual task within a job, which can run commands, scripts, or use pre-built actions.
*   **Runner:** A virtual machine (GitHub-hosted or self-hosted) that executes a job's steps.
*   **Action:** A reusable unit of code that performs a specific task within a step, often sourced from the GitHub Marketplace.
*   **YAML:** A human-friendly data serialization standard used for writing GitHub Actions workflow files.

#### Hands-on activity
**Activity: Deconstructing a Sample Workflow**

Given the following GitHub Actions workflow file, analyze its components and answer the questions below.

```yaml
# .github/workflows/analyze-code.yml
name: Code Analysis Workflow
on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: pip install flake8
      - name: Run Flake8 linter
        run: flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
```

1.  What is the name of this workflow?
2.  List all the events that will trigger this workflow.
3.  How many jobs are defined in this workflow, and what is its name?
4.  What operating system will the job run on?
5.  What is the purpose of the first step in the `lint` job?
6.  Identify the step that installs a Python package.

#### Assessment idea
1.  **Question:** Which of the following is the correct directory path where GitHub Actions workflow files *must* be stored within a repository?
    *   A) `.github/workflows/`
    *   B) `workflows/`
    *   C) `.github/actions/`
    *   D) `actions/workflows/`

    **Correct Answer:** A) `.github/workflows/`
    **Explanation:** GitHub Actions strictly requires workflow YAML files to be placed in the `.github/workflows/` directory at the root of your repository. Any other location will prevent GitHub from discovering and running your workflows.

2.  **Question:** You want a GitHub Actions workflow to run only when a pull request is opened or updated targeting the `main` branch. Which `on` event configuration would achieve this?
    *   A)
        ```yaml
        on: pull_request
        ```
    *   B)
        ```yaml
        on:
          pull_request:
            branches: [ main ]
        ```
    *   C)
        ```yaml
        on: [pull_request, main]
        ```
    *   D)
        ```yaml
        on:
          push:
            branches: [ main ]
        ```

    **Correct Answer:** B)
    ```yaml
    on:
      pull_request:
        branches: [ main ]
    ```
    **Explanation:** This configuration correctly specifies the `pull_request` event and then uses the `branches` filter to ensure the workflow only triggers if the pull request targets the `main` branch. Option A would trigger for any pull request to any branch. Option C is syntactically incorrect for filtering. Option D triggers on `push` events, not `pull_request` events.

#### AI generation note
Create a 10-minute interactive slide deck with embedded code snippets. Each slide should introduce a core concept (Workflow, Event, Job, Step, Action) with a clear definition and a corresponding highlighted section of a sample YAML workflow. Use animated overlays to draw attention to specific lines of code as each concept is explained. Include a visual diagram showing the flow from an event triggering a workflow, which then runs jobs on runners, composed of sequential steps. End with a drag-and-drop exercise where learners match YAML keywords (`on`, `jobs`, `steps`, `uses`, `run`) to their definitions. Ensure high-contrast visuals and keyboard navigation for the interactive elements.

### Chapter 1.3 — Crafting Your First GitHub Actions Workflow: A Practical Walkthrough

#### Learning objectives
*   Create a new GitHub Actions workflow file within a repository.
*   Configure a workflow to trigger on a `push` event to a specific branch.
*   Utilize the `actions/checkout` action to access repository code.
*   Execute basic shell commands within a workflow step.
*   Interpret the results of a workflow run in the GitHub Actions UI.
*   Identify and troubleshoot common mistakes in workflow file syntax and execution.

#### Detailed lesson content
It's time to get hands-on and build your very first GitHub Actions workflow! This practical walkthrough will guide you step-by-step through creating a simple workflow that triggers on a code push, checks out your repository, and runs a basic script. This foundational understanding is crucial for building more complex CI/CD pipelines later on.

To begin, you'll need a GitHub repository. If you don't have one, you can create a new public or private repository on GitHub.com. For this exercise, an empty repository or one with a simple `README.md` file will suffice.

The first step in creating any workflow is to define its YAML file. Navigate to your repository on GitHub.com, then click on the "Actions" tab. GitHub often provides suggestions for common workflows, but for our first one, we'll create it from scratch. Click on "set up a workflow yourself" or "New workflow" and then "Simple workflow". This will open a web editor with a basic template. Delete the template content and let's start fresh.

Every workflow file must reside in the `.github/workflows/` directory. So, in the web editor, ensure the file path is `.github/workflows/my-first-workflow.yml`. The `.yml` extension is important.

Let's define our workflow:

```yaml
# .github/workflows/my-first-workflow.yml
name: My First Basic Workflow
on:
  push:
    branches: [ main, develop ] # Trigger on push to main or develop branch
  workflow_dispatch: # Allows manual trigger from GitHub UI

jobs:
  explore:
    runs-on: ubuntu-latest # Use a GitHub-hosted Ubuntu runner
    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4 # Action to clone the repository
      - name: List files in the repository
        run: |
          echo "Listing files in the current directory:"
          ls -la
      - name: Display a custom message
        run: echo "Hello from GitHub Actions! This workflow ran successfully."
```

Let's break down each part of this file:
*   `name: My First Basic Workflow`: This is the name that will appear in the GitHub Actions UI, making it easy to identify your workflow runs.
*   `on:`: This section defines when the workflow should run.
    *   `push:`: We're configuring it to run on a `push` event.
    *   `branches: [ main, develop ]`: This filter ensures the workflow only triggers when code is pushed to either the `main` or `develop` branch. If you only have a `main` branch, you can simplify this to `branches: [ main ]`. A common mistake here is to forget to specify branches, which would cause the workflow to run on *every* push to *any* branch, potentially wasting resources.
    *   `workflow_dispatch:`: This is a special event that allows you to manually trigger the workflow from the "Actions" tab in your GitHub repository. It's incredibly useful for testing or running maintenance tasks on demand.
*   `jobs:`: This keyword defines the jobs within our workflow. We have one job named `explore`.
    *   `runs-on: ubuntu-latest`: This specifies that our `explore` job will run on the latest version of an Ubuntu Linux virtual machine provided by GitHub.
    *   `steps:`: This is a sequence of tasks the `explore` job will perform.
        *   `- name: Checkout repository code`: This is the first step.
        *   `uses: actions/checkout@v4`: This is a crucial action. The `actions/checkout@v4` action clones your repository's code onto the runner, making it available for subsequent steps. Without this, your workflow wouldn't have access to your files!
        *   `- name: List files in the repository`: A descriptive name for our next step.
        *   `run: |`: The `run` keyword executes shell commands. We use the `|` (pipe) character to write a multi-line script.
        *   `echo "Listing files in the current directory:"` and `ls -la`: These are standard Linux commands. The `echo` command prints text, and `ls -la` lists all files and directories in the current working directory (which is your repository's root, thanks to `checkout`).
        *   `- name: Display a custom message`: Another simple step.
        *   `run: echo "Hello from GitHub Actions! This workflow ran successfully."`: Prints a final confirmation message.

Once you've entered this YAML content into the file, click the "Commit changes..." button. You can commit directly to the `main` branch for this exercise. As soon as you commit, if you committed to `main` or `develop`, GitHub will detect the `push` event, and your workflow will automatically start running!

To see your workflow in action, navigate back to the "Actions" tab in your repository. You'll see an entry for "My First Basic Workflow" with a yellow dot indicating it's running, or a green checkmark if it completed successfully. Click on the workflow run, then click on the `explore` job. You'll see a detailed log of each step, including the output from your `echo` and `ls -la` commands. If there's an error, the step will be marked with a red 'X', and you can examine the logs to diagnose the issue. Common mistakes include incorrect YAML indentation (YAML is very sensitive to whitespace), typos in commands, or forgetting to `checkout` the repository. Always check the logs carefully; they are your best friend for troubleshooting!

This simple workflow demonstrates the core mechanics of GitHub Actions. You've defined what triggers it (`on`), what tasks it performs (`jobs` and `steps`), and how to use pre-built actions (`uses`). From here, you can expand this foundation to include more complex build, test, and deployment logic, paving the way for full CI/CD implementation.

#### Key concepts
*   **Workflow File:** A YAML file located in `.github/workflows/` that defines an automated process.
*   **`push` event:** A common event trigger for workflows, occurring when code is pushed to the repository.
*   **`workflow_dispatch` event:** An event that allows a workflow to be manually triggered from the GitHub UI.
*   **`actions/checkout@v4`:** A standard GitHub Action used to clone the repository's code onto the runner.
*   **`run` keyword:** Used in a step to execute shell commands directly on the runner.
*   **GitHub Actions UI:** The interface within GitHub where you can view, trigger, and monitor workflow runs and their logs.
*   **YAML Indentation:** Crucial for correct syntax in workflow files; incorrect indentation is a common source of errors.

#### Hands-on activity
**Activity: Create and Run a Simple Python Test Workflow**

In your GitHub repository, create a new file `my_script.py` with the following content:

```python
# my_script.py
def add(a, b):
    return a + b

def test_add():
    assert add(1, 2) == 3
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
    print("All tests passed for add function!")

if __name__ == "__main__":
    test_add()
```

Now, create a new GitHub Actions workflow file at `.github/workflows/python-test.yml` with the following content:

```yaml
# .github/workflows/python-test.yml
name: Python Test Workflow
on:
  push:
    branches: [ main ] # Adjust to your primary branch if not 'main'
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4
      - name: Set up Python environment
        uses: actions/setup-python@v5
        with:
          python-version: '3.x' # Use a specific Python version like '3.9' or '3.10'
      - name: Run Python script
        run: python my_script.py
```

1.  Commit both `my_script.py` and `python-test.yml` to your `main` branch.
2.  Observe the workflow run in the GitHub Actions UI.
3.  Verify that the "Run Python script" step completes successfully and you see the "All tests passed for add function!" message in the logs.
4.  (Optional challenge): Introduce a bug in `my_script.py` (e.g., change `assert add(1, 2) == 3` to `assert add(1, 2) == 4`), commit it, and observe the workflow failure. Fix the bug and commit again.

#### Assessment idea
1.  **Question:** You've created a new workflow file at `.github/workflows/my-workflow.yml`, but it doesn't seem to be running when you push changes to your `feature-branch`. Upon inspection, you find the `on` section of your workflow looks like this:
    ```yaml
    on:
      push:
        branches: [ main ]
    ```
    What is the most likely reason your workflow isn't running on `feature-branch`?
    *   A) The `name` field is missing from the workflow.
    *   B) The `jobs` section is incorrectly formatted.
    *   C) The `push` event is only configured to trigger on the `main` branch.
    *   D) The `actions/checkout` action is missing from the steps.

    **Correct Answer:** C) The `push` event is only configured to trigger on the `main` branch.
    **Explanation:** The `branches: [ main ]` filter under the `push` event explicitly tells GitHub Actions to only trigger this workflow when changes are pushed to the `main` branch. Pushes to `feature-branch` will not trigger it. To make it run on `feature-branch`, you would need to add `feature-branch` to the `branches` list or remove the `branches` filter entirely if you want it to run on all pushes.

2.  **Question:** After committing your first workflow, you navigate to the "Actions" tab in GitHub and see a red 'X' next to your workflow run. You click on the run and then on the job, and you notice the "Checkout repository code" step failed. What is the most probable cause of this failure?
    *   A) The `runs-on` specified an invalid operating system.
    *   B) You forgot to include the `uses: actions/checkout@v4` action as a step.
    *   C) The `name` of the workflow was not unique.
    *   D) The `on` event was configured incorrectly.

    **Correct Answer:** B) You forgot to include the `uses: actions/checkout@v4` action as a step.
    **Explanation:** The `actions/checkout@v4` action is almost always the first step in any job that needs to interact with your repository's code. If this step itself fails, or if it's missing, subsequent steps that rely on the code (like running scripts) would also fail or not even start correctly. While other options could cause failures, a specific failure on "Checkout repository code" strongly points to an issue with that action itself or its absence.

#### AI generation note
Create a 15-minute live coding video. Start with an empty GitHub repository and guide the learner through creating the `my-first-workflow.yml` file step-by-step in the GitHub web editor. Show the commit process, then immediately navigate to the "Actions" tab to demonstrate the workflow running. Highlight the green checkmarks for success and show how to drill down into job logs to see `echo` and `ls -la` outputs. Include a segment where a deliberate YAML indentation error is introduced and fixed, demonstrating how to interpret the error messages in the UI. Use a split-screen view showing the code editor on one side and the GitHub Actions UI on the other. Conclude with a prompt for learners to try modifying the workflow to print their name.
---

## Module 2: Workflow Fundamentals: Events, Jobs, and Steps

This module dives into the core components that define how your GitHub Actions workflows are structured and executed. We'll explore the triggers that initiate a workflow, the independent execution units called jobs, and the individual steps and actions that perform the actual work. By the end of this module, you'll have a solid understanding of how to design robust and efficient CI/CD pipelines using GitHub Actions.

### Chapter 2.1 — Understanding Workflow Triggers: Events

#### Learning objectives
*   Identify and differentiate between various GitHub event types that can trigger a workflow.
*   Configure workflow triggers using the `on` keyword in a GitHub Actions YAML file.
*   Implement event filtering to control when a workflow runs based on specific branches, paths, or activity types.
*   Explain the concept of event payloads and how they provide context to a running workflow.
*   Recognize common mistakes when defining workflow triggers and apply best practices to avoid them.

#### Detailed lesson content
GitHub Actions workflows don't just run spontaneously; they are explicitly started by *events*. An event is a specific activity that occurs in your repository, on GitHub, or at a scheduled time. Understanding these events is the foundational step in designing any CI/CD pipeline, as they dictate *when* your automated processes kick off. The `on` keyword in your workflow YAML file is where you declare which events your workflow should respond to. Without a correctly configured `on` section, your workflow will never execute.

One of the most common event types is `push`. This event triggers a workflow whenever code is pushed to a repository branch. For instance, if you want to run your tests every time a developer pushes new code to the `main` branch, you would configure your workflow to listen for `push` events on that specific branch. The `push` event provides a rich payload of information, including the commit SHA, the committer, and the files changed, which can be invaluable for subsequent steps in your workflow. Another crucial event is `pull_request`, which fires when a pull request is opened, synchronized, or closed. This is ideal for running pre-merge checks like linting, unit tests, and security scans, ensuring that only high-quality code is merged into your main development lines.

Beyond code-related events, GitHub Actions offers a wide array of triggers. The `schedule` event allows you to run workflows at specific times using cron syntax. This is perfect for nightly builds, daily reports, or periodic cleanup tasks that don't depend on code changes. For example, `on: schedule: - cron: '0 0 * * *'` would run your workflow every day at midnight UTC. Another powerful event is `workflow_dispatch`, which enables you to manually trigger a workflow from the GitHub UI, GitHub API, or `gh CLI`. This is incredibly useful for administrative tasks, deployments that require human approval, or running ad-hoc tests. You can even define input parameters for `workflow_dispatch` events, allowing users to provide values that influence the workflow's execution, such as a target environment for a deployment.

Event filtering is a critical technique for refining when your workflows run. While `on: push` will trigger on *any* push, you often only want to run on specific branches. You can use `branches` or `branches-ignore` to specify which branches will (or won't) trigger the workflow. Similarly, `paths` and `paths-ignore` allow you to trigger a workflow only when changes occur in specific directories or files. Imagine a monorepo where you only want to run the backend tests when files in the `backend/` directory are changed. This granular control prevents unnecessary workflow runs, saving compute minutes and speeding up feedback cycles. For `pull_request` events, you can specify `types` like `opened`, `synchronize`, or `closed` to react only to specific stages of a pull request's lifecycle.

Common mistakes often arise from misconfiguring these filters. A frequent error is to assume `on: push` will only run on the default branch; it runs on *all* pushes unless `branches` is specified. Forgetting to specify `branches` for `push` events can lead to workflows running on every feature branch, potentially wasting resources. Another common pitfall is using `branches-ignore` and `branches` together, which can lead to unexpected behavior; it's generally best to stick to one or the other for clarity. When using `paths` filtering, remember that the paths are relative to the root of your repository. If you're working with a monorepo, ensure your paths are precise enough to capture only the relevant changes. Always test your event configurations thoroughly by pushing small changes or opening test pull requests to verify the workflow triggers as expected. Understanding the event payload is also crucial; while you don't define it, knowing that events like `pull_request` provide details like `github.event.pull_request.head.ref` (the source branch) or `github.event.pull_request.base.ref` (the target branch) allows you to write more intelligent and context-aware workflow logic using expressions.

```yaml
name: CI on Push and PR

on:
  push:
    branches:
      - main
      - 'feature/**' # Triggers on pushes to main and any branch starting with 'feature/'
    paths-ignore:
      - 'docs/**'   # Ignores pushes that only change files in the docs directory
  pull_request:
    types: [opened, synchronize, reopened] # Triggers when a PR is opened, updated, or reopened
    branches:
      - main
  schedule:
    - cron: '0 0 * * *' # Runs daily at midnight UTC
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      environment:
        description: 'Environment to deploy to'
        required: true
        type: environment # Special type for environment selection

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Log event details
        run: |
          echo "Workflow triggered by ${{ github.event_name }}"
          echo "Branch: ${{ github.ref }}"
          echo "Commit SHA: ${{ github.sha }}"
          if [ "${{ github.event_name }}" == "workflow_dispatch" ]; then
            echo "Log Level: ${{ github.event.inputs.logLevel }}"
            echo "Environment: ${{ github.event.inputs.environment }}"
          fi
      - name: Run tests
        run: echo "Running tests..."
```
This example demonstrates a comprehensive `on` section, combining `push`, `pull_request`, `schedule`, and `workflow_dispatch` events with various filtering options. It also shows how to access `workflow_dispatch` inputs within a step.

#### Key concepts
*   **Event:** A specific activity in GitHub that triggers a workflow, such as a `push` to a repository, a `pull_request` being opened, or a `schedule` at a defined time.
*   **`on` keyword:** The top-level YAML key in a workflow file used to define which events will trigger the workflow.
*   **Event filtering:** Mechanisms like `branches`, `paths`, and `types` used within an `on` event definition to specify more precisely when a workflow should run, avoiding unnecessary executions.
*   **`push` event:** Triggers a workflow when code is pushed to a specified branch.
*   **`pull_request` event:** Triggers a workflow when a pull request is opened, synchronized, or reopened, often used for pre-merge checks.
*   **`schedule` event:** Triggers a workflow at specified intervals using cron syntax, suitable for recurring tasks.
*   **`workflow_dispatch` event:** Allows manual triggering of a workflow from the GitHub UI, API, or `gh CLI`, often with custom input parameters.
*   **Event payload:** A JSON object containing all the contextual information about the event that triggered the workflow, accessible via the `github.event` context.

#### Hands-on activity
**Activity: Refine Your Workflow Triggers**

Create a new workflow file named `.github/workflows/trigger-practice.yml` in your repository. Your goal is to create a single workflow that demonstrates various trigger types and filtering.

1.  Configure the workflow to run on `push` to the `main` branch, but only if changes occur within the `src/` directory (create this directory if it doesn't exist).
2.  Add a `pull_request` trigger that runs only when a pull request targeting the `main` branch is opened or synchronized.
3.  Include a `schedule` trigger that runs every Monday at 9 AM UTC.
4.  Add a `workflow_dispatch` trigger that accepts two inputs: `release_version` (text, required) and `deploy_to_prod` (boolean, default `false`).
5.  Inside a single job, add steps to:
    *   Checkout the repository.
    *   Print a message indicating which event triggered the workflow (`github.event_name`).
    *   If triggered by `workflow_dispatch`, print the `release_version` and `deploy_to_prod` input values.

**Starter Code:**
```yaml
name: Trigger Practice Workflow

on:
  # Your push event configuration here
  # Your pull_request event configuration here
  # Your schedule event configuration here
  # Your workflow_dispatch event configuration here

jobs:
  show_triggers:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Report Trigger Event
        run: |
          echo "This workflow was triggered by the '${{ github.event_name }}' event."
          # Add conditional logic here to print workflow_dispatch inputs
```

#### Assessment idea
1.  **Question:** You have a GitHub Actions workflow that you want to run under the following conditions:
    *   When code is pushed to any branch *except* `develop`.
    *   When a pull request is opened or updated, specifically targeting the `main` branch.
    *   Manually, allowing a user to specify a `target_environment` (string, required, default `staging`).

    Write the `on` section of the workflow YAML file that satisfies these requirements.

    **Answer:**
    ```yaml
    on:
      push:
        branches-ignore:
          - develop
      pull_request:
        types: [opened, synchronize]
        branches:
          - main
      workflow_dispatch:
        inputs:
          target_environment:
            description: 'The environment to deploy to'
            required: true
            default: 'staging'
            type: string
    ```
    **Explanation:** The `push` event uses `branches-ignore` to exclude the `develop` branch. The `pull_request` event specifies `types` for `opened` and `synchronize` and uses `branches` to target `main`. The `workflow_dispatch` event defines a `target_environment` input with the specified properties.

2.  **Question:** A developer complains that their workflow, configured with `on: push: paths: ['backend/**']`, is not running when they commit changes only to `backend/src/api.py`. However, it *does* run when they commit changes to `frontend/src/app.js` and `backend/src/api.py` simultaneously. What is the most likely reason for this behavior, and how can it be fixed?

    **Answer:** The most likely reason is that the `paths` filter is incorrectly configured or misunderstood. The `paths` filter applies to *all* changes in a push. If *any* file outside of `backend/**` is changed in the same push, the `paths` filter for `backend/**` will not be met, and the workflow will not trigger *unless* there's another path filter that *is* met, or no other path filters. In this specific scenario, the problem description states it *does* run when `frontend/src/app.js` and `backend/src/api.py` are changed together, which contradicts the `paths: ['backend/**']` filter if it's the *only* filter.

    A more precise interpretation of the problem: if the workflow *only* has `on: push: paths: ['backend/**']`, it should run when `backend/src/api.py` changes. If it's *not* running, it's possible there's another `paths` filter or a `paths-ignore` that is overriding or conflicting.

    **
    Let's re-evaluate the question with a common misunderstanding: If the workflow is *intended* to run *only* when `backend/**` changes, but it's *not* running when *only* `backend/src/api.py` changes, this suggests there might be an issue with the path matching itself (e.g., `backend/` vs `backend/**`). However, `backend/**` is the correct glob for matching files within `backend` and its subdirectories.

    A more common scenario for this *exact* symptom (not running for `backend` only, but running for `frontend` and `backend` together) would be if there are *multiple* workflows, and the developer is expecting the `backend` workflow to run, but another workflow (e.g., a `frontend` workflow) is triggering on the combined push.

    Assuming the question implies a single workflow with *only* `paths: ['backend/**']`:
    The problem is likely a misunderstanding of how `paths` works with *multiple* changes in a single commit. If a push contains *only* changes to `backend/src/api.py`, the workflow *should* trigger. If it doesn't, check for:
    1.  **Typo in path:** Is `backend/` spelled correctly? Is the directory structure exactly as expected?
    2.  **Conflicting `paths-ignore`:** Is there a `paths-ignore` that is unintentionally excluding `backend/src/api.py`?
    3.  **Branch filtering:** Is the push happening on a branch that is explicitly ignored by `branches-ignore` or not included by `branches`?

    If the workflow *does* run when `frontend/src/app.js` and `backend/src/api.py` are changed simultaneously, but *not* when only `backend/src/api.py` changes, this is highly unusual for a single workflow with `paths: ['backend/**']`. It would imply that the `paths` filter is somehow failing for single-file changes within the specified path, which is not standard behavior.

    **Revised Answer (addressing the common mistake of expecting a single workflow to run for *any* change if multiple path filters are present, or if multiple workflows are involved):**
    The most likely reason for this behavior is a misunderstanding of how `paths` filtering works across multiple workflows or within a single workflow with complex `on` conditions.
    If the developer has *multiple* workflows, say `backend-ci.yml` with `paths: ['backend/**']` and `frontend-ci.yml` with `paths: ['frontend/**']`, then:
    *   Push to `backend/src/api.py` only: `backend-ci.yml` should run.
    *   Push to `frontend/src/app.js` only: `frontend-ci.yml` should run.
    *   Push to both `backend/src/api.py` and `frontend/src/app.js`: *Both* `backend-ci.yml` and `frontend-ci.yml` should run.

    If the `backend-ci.yml` is *not* running when only `backend/src/api.py` changes, but *does* run when `frontend/src/app.js` is also changed, this is counter-intuitive for a `paths` filter. A more plausible scenario for the *symptom* described is if the developer is looking at the wrong workflow run, or if there's a typo in the `paths` definition, or if the `backend` directory itself is not at the root level as expected.

    **Fix:**
    1.  **Verify Path:** Double-check that the `backend/` directory truly exists at the root of the repository and that `backend/src/api.py` is the correct relative path.
    2.  **Test Isolation:** Create a new, minimal workflow with *only* the `push` event and `paths: ['backend/**']` and push a change *only* to `backend/src/api.py` to isolate the issue.
    3.  **Check `branches` filter:** Ensure there isn't an unintended `branches` or `branches-ignore` filter that is preventing the workflow from running on the specific branch being pushed to.
    4.  **Review other workflows:** If multiple workflows exist, ensure there are no conflicting `paths-ignore` rules or other conditions that might be preventing the intended workflow from triggering.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated diagram illustrating how different GitHub events (push, PR, schedule, dispatch) flow into a workflow. Then, switch to a live coding demo, starting with a basic `on: push` and progressively adding `branches`, `paths-ignore`, `pull_request` with `types`, `schedule` with cron syntax, and finally `workflow_dispatch` with `inputs`. Show how to trigger each event (e.g., making a commit, opening a PR, manually dispatching). Use the GitHub UI to demonstrate the `workflow_dispatch` input form. Include a common mistake segment showing how `paths-ignore` can unintentionally prevent runs. End with a 3-question interactive quiz covering event types and filtering. Visuals should include split-screen code editor and GitHub UI/terminal.

---

### Chapter 2.2 — Defining Workflow Execution: Jobs

#### Learning objectives
*   Define what a "job" is within the context of a GitHub Actions workflow and its role in execution.
*   Configure the `runs-on` keyword to specify the execution environment for a job, including GitHub-hosted and self-hosted runners.
*   Establish dependencies between jobs using the `needs` keyword to control their execution order.
*   Understand and implement job outputs to pass data between dependent jobs.
*   Identify and troubleshoot common issues related to job execution, such as circular dependencies or incorrect runner selection.

#### Detailed lesson content
Once a workflow is triggered by an event, it's time for the real work to begin, and that work is organized into *jobs*. A job is an independent unit of work within a workflow. Each job runs in a fresh instance of the specified virtual environment, meaning its steps execute in isolation from other jobs. This isolation is a fundamental concept in GitHub Actions, ensuring that the environment and state of one job do not inadvertently affect another, promoting reliability and reproducibility. You define jobs under the `jobs` keyword in your workflow YAML file, where each top-level key under `jobs` represents a distinct job.

The first crucial configuration for any job is `runs-on`. This keyword specifies the type of runner that will execute the job. GitHub provides a variety of hosted runners, such as `ubuntu-latest`, `windows-latest`, and `macos-latest`, which come pre-installed with many common tools and software packages. These are convenient and managed entirely by GitHub. For scenarios requiring specific hardware, custom environments, or stricter security, you can use `self-hosted` runners, which you deploy and manage on your own infrastructure. Choosing the right `runs-on` environment is vital; for example, a .NET application might require `windows-latest`, while a Node.js application typically uses `ubuntu-latest`.

Jobs, while independent, often need to execute in a specific order. This is where the `needs` keyword comes into play. By using `needs`, you can define dependencies between jobs, creating a Directed Acyclic Graph (DAG) of execution. A job will only start once all the jobs it `needs` have successfully completed. For example, a `deploy` job might `need` a `build` job to ensure that the application is compiled and tested before deployment. If a job that is `needed` fails, by default, the dependent job will be skipped, preventing further errors. This dependency chaining is essential for building robust CI/CD pipelines where stages must follow a logical sequence.

Sometimes, one job needs to pass information to another. This is achieved using *job outputs*. A job can declare outputs using the `outputs` keyword, and these outputs can then be consumed by downstream jobs that `need` the producing job. For instance, a `build` job might compile a binary and output its version number, which a subsequent `deploy` job then uses to tag a Docker image. To define an output, you specify a key-value pair under `outputs` within a job, where the value is typically derived from a step's output or an expression. Consuming these outputs in a dependent job is done using the `needs.<job_id>.outputs.<output_name>` context. This mechanism is powerful for sharing dynamic data without resorting to artifact storage for small pieces of information.

```yaml
name: Build and Deploy Workflow

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      artifact_path: ${{ steps.prepare_artifact.outputs.path }} # Define an output named artifact_path
      app_version: ${{ steps.get_version.outputs.version }}   # Define an output named app_version
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Get application version
        id: get_version # Assign an ID to this step to reference its outputs
        run: echo "version=$(node -p "require('./package.json').version")" >> $GITHUB_OUTPUT

      - name: Prepare artifact for deployment
        id: prepare_artifact # Assign an ID to this step
        run: |
          mkdir -p ./dist_artifact
          cp -R build/* ./dist_artifact/
          echo "path=./dist_artifact" >> $GITHUB_OUTPUT # Set a step output named 'path'

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: my-app-build
          path: ./dist_artifact

  test:
    runs-on: ubuntu-latest
    needs: build # This job depends on the 'build' job
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: my-app-build
          path: ./downloaded_artifact

      - name: Verify artifact
        run: |
          ls -la ./downloaded_artifact
          echo "Artifact downloaded successfully."

      - name: Run tests
        run: echo "Running tests on downloaded artifact..."

  deploy:
    runs-on: ubuntu-latest
    needs: [build, test] # This job depends on both 'build' and 'test' jobs
    environment: production # Example of deploying to a protected environment
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: my-app-build
          path: ./deploy_target

      - name: Deploy to server
        run: |
          echo "Deploying version ${{ needs.build.outputs.app_version }} from path ${{ needs.build.outputs.artifact_path }} to production..."
          # In a real scenario, this would involve SCP, rsync, or a cloud deployment tool
          echo "Deployment successful for version ${{ needs.build.outputs.app_version }}"
```
This example shows three jobs: `build`, `test`, and `deploy`. The `build` job produces outputs and uploads an artifact. The `test` job downloads the artifact and runs tests, depending on `build`. The `deploy` job depends on both `build` and `test`, downloads the artifact, and uses the `app_version` output from the `build` job for its deployment logic.

Common mistakes in job configuration often involve `needs` and `runs-on`. A classic error is creating a *circular dependency* with `needs`, where Job A needs Job B, and Job B needs Job A. GitHub Actions will detect this and fail the workflow immediately. Always ensure your dependency graph is acyclic. Another mistake is choosing an incorrect `runs-on` runner, leading to missing dependencies or incompatible environments. For instance, trying to run Windows-specific commands on an `ubuntu-latest` runner will obviously fail. When using self-hosted runners, ensure they are online, correctly configured with labels, and have the necessary tools installed. Finally, when passing data between jobs, remember that job outputs are strings. If you need to pass complex data structures, you might need to serialize them (e.g., to JSON) and deserialize them in the consuming job. For larger files or entire directories, artifacts (as shown in the example with `actions/upload-artifact` and `actions/download-artifact`) are the preferred method.

#### Key concepts
*   **Job:** An independent unit of work within a GitHub Actions workflow, consisting of one or more steps, and running in its own virtual environment.
*   **`runs-on`:** A keyword used to specify the type of runner (e.g., `ubuntu-latest`, `windows-latest`, `self-hosted`) that will execute a job.
*   **GitHub-hosted runner:** Virtual machines provided and managed by GitHub, pre-installed with common software.
*   **Self-hosted runner:** A machine that you set up and manage yourself to run GitHub Actions jobs, offering more control over the environment.
*   **`needs`:** A keyword used to define dependencies between jobs, ensuring that a job only starts after all its prerequisite jobs have successfully completed.
*   **Directed Acyclic Graph (DAG):** The structure formed by job dependencies, where jobs flow in one direction without creating loops.
*   **Job outputs:** Data generated by one job that can be consumed by subsequent, dependent jobs using the `needs.<job_id>.outputs.<output_name>` context.
*   **Artifact:** A file or collection of files produced by a job and uploaded to GitHub, which can then be downloaded by other jobs or workflows.

#### Hands-on activity
**Activity: Build a Multi-Job Workflow with Dependencies**

Create a new workflow file named `.github/workflows/multi-job-demo.yml`. This workflow will simulate a simple build and verification process.

1.  Define a job named `setup_environment`:
    *   It should run on `ubuntu-latest`.
    *   It should have a step that prints "Setting up environment..."
    *   It should define an output named `env_id` with a value of `prod-123`.

2.  Define a job named `build_application`:
    *   It should run on `ubuntu-latest`.
    *   It `needs` the `setup_environment` job.
    *   It should have a step that prints "Building application for environment {{env_id}}..." where `{{env_id}}` is the output from the `setup_environment` job.
    *   It should define an output named `build_tag` with a value like `v1.0.0-{{github.run_number}}`.

3.  Define a job named `run_tests`:
    *   It should run on `ubuntu-latest`.
    *   It `needs` the `build_application` job.
    *   It should have a step that prints "Running tests for build {{build_tag}}..." where `{{build_tag}}` is the output from the `build_application` job.
    *   Add a step that simulates a test failure (e.g., `run: exit 1`) to observe how `needs` handles failures. Comment this out initially and uncomment to test failure handling.

4.  Define a job named `deploy_to_staging`:
    *   It should run on `ubuntu-latest`.
    *   It `needs` both `build_application` and `run_tests`.
    *   It should have a step that prints "Deploying build {{build_tag}} to staging..." where `{{build_tag}}` is the output from `build_application`.

**Starter Code:**
```yaml
name: Multi-Job Workflow Demo

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  setup_environment:
    runs-on: ubuntu-latest
    outputs:
      # Define env_id output here
    steps:
      - name: Setup environment
        run: |
          echo "Setting up environment..."
          # Set the env_id output here

  build_application:
    runs-on: ubuntu-latest
    needs: # Specify dependency here
    outputs:
      # Define build_tag output here
    steps:
      - name: Build application
        run: |
          echo "Building application for environment ${{ needs.setup_environment.outputs.env_id }}..."
          # Set the build_tag output here

  run_tests:
    runs-on: ubuntu-latest
    needs: # Specify dependency here
    steps:
      - name: Run tests
        run: |
          echo "Running tests for build ${{ needs.build_application.outputs.build_tag }}..."
          # Uncomment the next line to simulate failure:
          # exit 1

  deploy_to_staging:
    runs-on: ubuntu-latest
    needs: # Specify multiple dependencies here
    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying build ${{ needs.build_application.outputs.build_tag }} to staging..."
```

#### Assessment idea
1.  **Question:** You are designing a CI/CD pipeline for a web application. You have three jobs: `lint`, `test`, and `deploy`.
    *   `lint` checks code style.
    *   `test` runs unit and integration tests.
    *   `deploy` pushes the application to a staging server.
    You want `test` to run only after `lint` completes successfully. `deploy` should only run if both `lint` and `test` complete successfully. All jobs should run on `ubuntu-latest`. Write the `jobs` section of a GitHub Actions workflow that implements these dependencies, including a simple `echo` step for each job.

    **Answer:**
    ```yaml
    jobs:
      lint:
        runs-on: ubuntu-latest
        steps:
          - name: Run linter
            run: echo "Linting code..."

      test:
        runs-on: ubuntu-latest
        needs: lint # Test depends on lint
        steps:
          - name: Run tests
            run: echo "Running unit and integration tests..."

      deploy:
        runs-on: ubuntu-latest
        needs: [lint, test] # Deploy depends on both lint and test
        steps:
          - name: Deploy to staging
            run: echo "Deploying application to staging..."
    ```
    **Explanation:** The `lint` job has no `needs` and runs first. The `test` job specifies `needs: lint`, so it waits for `lint` to finish. The `deploy` job specifies `needs: [lint, test]`, indicating it requires both `lint` and `test` to complete successfully before it starts.

2.  **Question:** A workflow has two jobs, `generate_config` and `use_config`. The `generate_config` job creates a configuration file and needs to pass the *path* to this file to `use_config`.
    *   `generate_config` creates a file `/tmp/app_config.json` and needs to output this path.
    *   `use_config` needs to read this path and then print the content of the file.
    Write the relevant parts of the `generate_config` and `use_config` jobs, including how `generate_config` defines its output and how `use_config` consumes it. Assume both jobs run on `ubuntu-latest`.

    **Answer:**
    ```yaml
    jobs:
      generate_config:
        runs-on: ubuntu-latest
        outputs:
          config_file_path: ${{ steps.create_config.outputs.config_path }} # Define job output
        steps:
          - name: Create config file
            id: create_config # Assign an ID to the step
            run: |
              echo '{"api_key": "some_secret", "env": "dev"}' > /tmp/app_config.json
              echo "config_path=/tmp/app_config.json" >> $GITHUB_OUTPUT # Set step output
              echo "Configuration file created at /tmp/app_config.json"

      use_config:
        runs-on: ubuntu-latest
        needs: generate_config # Depends on generate_config
        steps:
          - name: Read config file
            run: |
              CONFIG_PATH="${{ needs.generate_config.outputs.config_file_path }}"
              echo "Config file path received: $CONFIG_PATH"
              echo "Content of config file:"
              cat "$CONFIG_PATH"
    ```
    **Explanation:** In `generate_config`, a step with `id: create_config` creates the file and then uses `echo "config_path=/tmp/app_config.json" >> $GITHUB_OUTPUT` to set a step output. This step output is then exposed as a job output named `config_file_path` using `outputs: config_file_path: ${{ steps.create_config.outputs.config_path }}`. In `use_config`, the `needs: generate_config` keyword establishes the dependency. The `config_file_path` is then accessed using `needs.generate_config.outputs.config_file_path` and stored in an environment variable for use in the `run` command.

#### AI generation note
Create a 15-minute live coding video. Start with a single job, then introduce `runs-on` with `ubuntu-latest` and `windows-latest` showing the different shell environments (bash vs. powershell). Progress to defining two jobs with a simple `needs` dependency, visualizing the DAG in the GitHub UI. Then, demonstrate how to pass data using `outputs` from one job to another, showing the YAML and the output in the job logs. Include a segment on debugging a circular dependency error. Visuals should include split-screen code editor, GitHub Actions UI showing job graphs, and terminal output. End with an interactive coding exercise where learners modify a workflow to add a new job with a dependency and an output.

---

### Chapter 2.3 — Executing Tasks: Steps and Actions

#### Learning objectives
*   Differentiate between `run` steps (executing shell commands) and `uses` steps (utilizing pre-built actions).
*   Implement `run` steps to execute custom shell commands and scripts within a job.
*   Integrate and configure reusable actions from the GitHub Marketplace using the `uses` keyword, including common actions like `actions/checkout`.
*   Pass inputs to actions and retrieve outputs from actions using the `with` and `id` keywords.
*   Utilize environment variables and conditional execution (`if`) within steps to control their behavior.

#### Detailed lesson content
Within each job, the actual work is performed by a sequence of *steps*. Steps are the smallest building blocks of a workflow, representing individual tasks that execute sequentially within a job's virtual environment. Each job can have multiple steps, and they are executed in the order they are defined. There are two primary types of steps you'll encounter: `run` steps and `uses` steps. Understanding when and how to use each is crucial for building effective workflows.

A `run` step is used to execute arbitrary shell commands or scripts directly on the runner. This is your go-to for custom logic, compiling code, running tests, or interacting with tools that are already installed on the runner. You can write single-line commands or multi-line scripts using the `|` (pipe) character for YAML multi-line strings. For example, `run: npm install` would install Node.js dependencies, and `run: | echo "Hello" && echo "World"` would execute two distinct commands. It's important to remember that `run` steps execute in a shell environment (Bash on Linux/macOS, PowerShell or Cmd on Windows), so you need to be mindful of shell syntax and environment variables. Common mistakes include incorrect shell syntax, assuming certain tools are present when they aren't, or not handling exit codes properly. Always ensure your shell commands are robust and return non-zero exit codes on failure to correctly signal job failure.

The `uses` step, on the other hand, allows you to leverage pre-built *actions*. Actions are reusable pieces of code that encapsulate common tasks, making your workflows more concise, maintainable, and powerful. They can be found on the GitHub Marketplace or created by you. A prime example is `actions/checkout@v4`, which checks out your repository code into the runner's workspace, a fundamental step for almost any workflow. Another common one is `actions/setup-node@v4`, which configures a Node.js environment. When you use an action, you specify its name and version (e.g., `actions/checkout@v4`). This ensures reproducibility and prevents unexpected breaking changes. Actions can accept inputs using the `with` keyword, allowing you to customize their behavior, and they can produce outputs that you can capture and use in subsequent steps.

```yaml
name: Build and Test Node.js App

on: [push, pull_request]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4 # Uses a pre-built action

      - name: Set up Node.js environment
        uses: actions/setup-node@v4 # Another pre-built action
        with:
          node-version: '18' # Input for the setup-node action
          cache: 'npm'       # Caches npm dependencies

      - name: Install dependencies
        run: npm ci # A run step executing a shell command

      - name: Run unit tests
        run: npm test # Another run step

      - name: Lint code
        run: npm run lint # Example of a custom script in package.json

      - name: Get current date for build tag
        id: date_step # Assign an ID to this step to reference its outputs
        run: echo "today=$(date +%Y-%m-%d)" >> $GITHUB_OUTPUT # Sets a step output

      - name: Use date in a subsequent step
        run: echo "Build tag for today: ${{ steps.date_step.outputs.today }}"

      - name: Conditional step - Deploy if on main branch
        if: github.ref == 'refs/heads/main' # Conditional execution
        run: echo "Deploying to production from main branch..."
        env: # Setting environment variables for this step
          DEPLOY_TARGET: production
          API_KEY: ${{ secrets.PROD_API_KEY }} # Accessing a secret
```
This example workflow demonstrates both `run` and `uses` steps. It uses `actions/checkout` and `actions/setup-node` (with inputs), executes `npm` commands via `run` steps, captures a step output (`date_step`), and shows conditional execution (`if`) along with environment variables (`env`) and secrets.

Environment variables play a critical role in steps. GitHub Actions automatically exposes several default environment variables (e.g., `GITHUB_WORKSPACE`, `GITHUB_REF`). You can also define custom environment variables at the workflow, job, or step level using the `env` keyword. This is particularly useful for passing configuration values, API keys (often stored as GitHub Secrets), or other dynamic data to your scripts. For example, `env: MY_VAR: 'some_value'` makes `MY_VAR` available to that step's shell.

Conditional execution, using the `if` keyword, allows you to control whether a step runs based on a specific condition. This is incredibly powerful for creating flexible workflows. For instance, you might only want to deploy to production if the workflow is running on the `main` branch (`if: github.ref == 'refs/heads/main'`) or if a previous step succeeded (`if: success()`). Conditions are written using GitHub Actions expression syntax, which allows you to access contexts like `github`, `env`, `steps`, and `runner`.

Common mistakes include using outdated action versions (always pin to a specific major version like `@v4` or a full SHA for stability), forgetting to pass required inputs to actions, or misinterpreting the outputs of actions. For `run` steps, common pitfalls are shell syntax errors, not making scripts executable (if using separate script files), or failing to set appropriate exit codes for success/failure. Always refer to the action's documentation for its specific inputs and outputs. When working with environment variables and secrets, remember that secrets are not exposed in logs, and they should be treated with extreme care. Never hardcode sensitive information directly into your workflow files.

#### Key concepts
*   **Step:** An individual task within a job, executed sequentially. Steps can be `run` steps or `uses` steps.
*   **`run` step:** Executes shell commands or scripts directly on the runner.
*   **`uses` step:** Executes a pre-built action, typically from the GitHub Marketplace, to perform common tasks.
*   **Action:** A reusable unit of code that performs a specific task, designed to be easily integrated into workflows.
*   **`actions/checkout`:** A common action used to check out the repository's code into the runner's workspace.
*   **`actions/setup-node`:** An action used to set up a Node.js environment on the runner.
*   **`with` keyword:** Used to pass input parameters to an action in a `uses` step.
*   **`id` keyword:** Assigns a unique identifier to a step, allowing its outputs to be referenced by subsequent steps or jobs.
*   **Step outputs:** Data generated by a step that can be consumed by subsequent steps within the same job or by other jobs (if promoted to job outputs).
*   **Environment variables (`env`):** Key-value pairs that provide configuration or dynamic data to a step's execution environment.
*   **Secrets:** Encrypted environment variables stored in GitHub that provide sensitive information (like API keys) to workflows without exposing them in logs or code.
*   **Conditional execution (`if`):** A keyword used to define a condition that determines whether a step should run.

#### Hands-on activity
**Activity: Build a Node.js CI Workflow**

Create a new workflow file named `.github/workflows/node-ci.yml`. This workflow will implement a basic CI pipeline for a Node.js application.

1.  Configure the workflow to trigger on `push` to `main` and `pull_request` targeting `main`.
2.  Define a single job named `node_ci` that runs on `ubuntu-latest`.
3.  Add a `uses` step to checkout the repository code.
4.  Add a `uses` step to set up Node.js version 18, and configure it to cache `npm` dependencies.
5.  Add a `run` step to install Node.js dependencies (`npm ci`).
6.  Add a `run` step to run unit tests (`npm test`).
7.  Add a `run` step to lint the code (`npm run lint`).
8.  Add a step that generates a "build report" and sets a step output named `report_summary` with a value like "Tests passed, Lint passed".
9.  Add a final `run` step that only executes if the workflow is running on the `main` branch (`if: github.ref == 'refs/heads/main'`) and prints "Deployment initiated for main branch with summary: {{report_summary}}".

**Starter Code:**
```yaml
name: Node.js CI Workflow

on:
  # Your event triggers here

jobs:
  node_ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        # Your uses actions/checkout step here

      - name: Setup Node.js
        # Your uses actions/setup-node step here with inputs

      - name: Install dependencies
        # Your npm ci run step here

      - name: Run tests
        # Your npm test run step here

      - name: Lint code
        # Your npm run lint run step here

      - name: Generate Build Report
        id: build_report # Assign an ID
        run: |
          # Set the report_summary step output here
          echo "report_summary=Tests passed, Lint passed" >> $GITHUB_OUTPUT

      - name: Conditional Deployment Message
        # Your conditional run step here, using the report_summary output
        if: # Your condition here
        run: |
          echo "Deployment initiated for main branch with summary: ${{ steps.build_report.outputs.report_summary }}"
```

#### Assessment idea
1.  **Question:** You need to create a GitHub Actions step that performs the following:
    *   Installs Python version 3.9.
    *   Installs dependencies from `requirements.txt`.
    *   Runs a Python script `src/main.py` with an argument `--env production`.
    Write the YAML for a single job with these steps, assuming the repository code is already checked out.

    **Answer:**
    ```yaml
    jobs:
      python_workflow:
        runs-on: ubuntu-latest
        steps:
          - name: Set up Python 3.9
            uses: actions/setup-python@v5 # Using the setup-python action
            with:
              python-version: '3.9'

          - name: Install Python dependencies
            run: pip install -r requirements.txt # Using a run step for pip

          - name: Run main Python script
            run: python src/main.py --env production # Using a run step for script execution
    ```
    **Explanation:** The `actions/setup-python@v5` action is used to configure the Python environment with version 3.9. The `pip install` command is executed as a `run` step to install dependencies. Finally, the `python src/main.py` command is also executed as a `run` step, passing the required argument.

2.  **Question:** A workflow has a step that generates a random number and needs to pass this number to a subsequent step within the *same job* for further processing.
    *   The first step should generate a random integer between 1 and 100 and output it as `random_value`.
    *   The second step should print "The random number is: [value]" using the output from the first step.
    Write the YAML for these two steps within a job.

    **Answer:**
    ```yaml
    jobs:
      random_number_processor:
        runs-on: ubuntu-latest
        steps:
          - name: Generate random number
            id: random_generator # Assign an ID to this step
            run: |
              RANDOM_NUM=$(( RANDOM % 100 + 1 )) # Generate random number
              echo "random_value=$RANDOM_NUM" >> $GITHUB_OUTPUT # Set step output
              echo "Generated random number: $RANDOM_NUM"

          - name: Process random number
            run: |
              echo "The random number is: ${{ steps.random_generator.outputs.random_value }}"
              # Further processing could happen here, e.g., if conditions based on the value
    ```
    **Explanation:** The first step is given an `id: random_generator`. It generates a random number and uses `echo "random_value=$RANDOM_NUM" >> $GITHUB_OUTPUT` to set a step output named `random_value`. The second step then accesses this output using `steps.random_generator.outputs.random_value` in its `run` command.

---

## Module 3: Advanced Workflow Logic and Data Management

This module empowers you to build more sophisticated and robust GitHub Actions workflows. You'll move beyond basic sequential execution to incorporate conditional logic, manage data flow between jobs, reuse common workflow patterns, and securely handle sensitive information. Mastering these concepts is crucial for creating efficient, maintainable, and secure CI/CD pipelines that adapt to diverse project needs.

### Chapter 3.1 — Conditional Execution and Expressions

#### Learning objectives
*   Implement conditional logic in GitHub Actions workflows using `if` statements at both job and step levels.
*   Utilize GitHub Actions expression syntax to create dynamic conditions based on workflow context.
*   Leverage the `github` context to access event, repository, and runner information within conditions.
*   Apply status check functions like `success()`, `failure()`, `always()`, and `cancelled()` to control workflow execution flow.
*   Identify and avoid common pitfalls associated with conditional logic and expression evaluation in GitHub Actions.

#### Detailed lesson content
As your CI/CD pipelines grow in complexity, you'll frequently encounter scenarios where not every step or job needs to run every time. Perhaps you only want to deploy to production when changes are pushed to the `main` branch, or you might want to skip linting on pull requests from forks. This is where conditional execution comes into play, allowing you to define precise rules for when certain parts of your workflow should run. GitHub Actions provides a powerful expression syntax that, combined with the `if` keyword, enables highly flexible and dynamic workflow logic.

The core of conditional execution in GitHub Actions is the `if` keyword, which can be applied to both entire jobs and individual steps. When you add an `if` condition, the associated job or step will only execute if the expression evaluates to `true`. Otherwise, it will be skipped entirely. This is incredibly useful for optimizing workflow run times and ensuring that actions are only performed when necessary. For example, you might have a job that runs unit tests on every push, but a separate deployment job that only runs when the push is to the `main` branch.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run unit tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main' # This job only runs if the push is to main
    steps:
      - name: Deploy to production
        run: echo "Deploying to production..."
```

GitHub Actions expressions are denoted by `${{ <expression> }}` and allow you to access various contexts, functions, and operators. One of the most frequently used contexts is the `github` context, which provides a wealth of information about the workflow run, the triggering event, the repository, and the actor. For instance, `github.event_name` tells you what event triggered the workflow (e.g., `push`, `pull_request`), `github.ref` gives you the branch or tag name (e.g., `refs/heads/main`), and `github.actor` identifies the user who triggered the workflow. These pieces of information are invaluable for crafting precise conditions.

Beyond simple equality checks, you can use a variety of operators within expressions, including logical operators like `&&` (AND), `||` (OR), and `!` (NOT). This allows you to combine multiple conditions, such as running a step only if it's a pull request *and* the target branch is `develop`. You can also use comparison operators (`==`, `!=`, `<`, `<=`, `>`, `>=`) and functions like `contains()`, `startsWith()`, `endsWith()`, and `format()`. For example, `if: contains(github.event.issue.labels.*.name, 'bug')` could be used to trigger a specific action only when an issue labeled 'bug' is created.

Another critical aspect of conditional execution involves status check functions: `success()`, `failure()`, `always()`, and `cancelled()`. These functions are typically used in `if` conditions to determine whether a job or step should run based on the outcome of preceding jobs or steps. `success()` is the default and means the step/job will run only if all preceding steps/jobs succeeded. `failure()` means it will run only if at least one preceding step/job failed. `always()` ensures the step/job runs regardless of previous outcomes, which is perfect for cleanup or notification steps. `cancelled()` runs only if the workflow run was cancelled.

Consider a scenario where you want to send a Slack notification only if your build job fails. You could add a notification job with `if: failure() && github.event_name == 'push'` to ensure it only triggers on a failed push to avoid unnecessary notifications during development. It's a common mistake to forget the `always()` function when you need a step to run regardless of success or failure, leading to cleanup or reporting steps being skipped when an error occurs. Always think about the desired outcome for all possible preceding states.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Simulate a failing step
        run: exit 1 # This step will fail

  notify_on_failure:
    runs-on: ubuntu-latest
    needs: build
    if: failure() # This job runs only if the 'build' job failed
    steps:
      - name: Send Slack notification
        run: echo "Build failed! Sending notification..."
        # Replace with actual Slack notification action
```

When working with expressions, be mindful of syntax. A common mistake is forgetting the `${{ }}` wrapper or misplacing quotes. String literals require single quotes, like `github.ref == 'refs/heads/main'`. Also, understand that contexts like `github` are objects, and you access their properties using dot notation (e.g., `github.event.pull_request.head.ref`). Overly complex `if` conditions can become hard to read and debug. If your logic becomes too convoluted, consider breaking it down into multiple steps or using a small script to evaluate the condition and set an output that can then be used in a simpler `if` statement. Finally, be cautious when using sensitive data within `if` conditions, as expressions are evaluated and could potentially expose information if not handled carefully, though GitHub Actions generally redacts secrets from logs.

#### Key concepts
*   **`if` condition:** A keyword used at the job or step level to conditionally execute based on an expression's truthiness.
*   **Expression syntax (`${{ ... }}`):** The notation used to evaluate dynamic values, contexts, and functions within a workflow.
*   **`github` context:** An object containing metadata about the workflow run, the triggering event, repository, and runner environment.
*   **`github.ref`:** A property within the `github` context that indicates the branch or tag that triggered the workflow (e.g., `refs/heads/main`).
*   **`github.event_name`:** A property within the `github` context that specifies the name of the event that triggered the workflow (e.g., `push`, `pull_request`).
*   **Status check functions:** Functions (`success()`, `failure()`, `always()`, `cancelled()`) used in `if` conditions to determine execution based on the outcome of preceding jobs or steps.
*   **Logical operators:** `&&` (AND), `||` (OR), `!` (NOT) used to combine or negate conditions within expressions.

#### Hands-on activity
**Objective:** Create a workflow that performs different actions based on the branch name and sends a "cleanup" message only if the build job fails.

1.  **Create a new workflow file:** In your repository, create `.github/workflows/conditional-workflow.yml`.
2.  **Define a build job:** This job will simulate a build. Make it fail conditionally to test the `failure()` condition.
3.  **Add a conditional step for `main` branch:** Inside the build job, add a step that only runs if `github.ref` is `refs/heads/main` and prints "Deploying to production environment...".
4.  **Add a conditional step for `develop` branch:** Add another step that only runs if `github.ref` is `refs/heads/develop` and prints "Deploying to staging environment...".
5.  **Add a cleanup job:** Create a separate job named `cleanup` that `needs: build`. This job should only run `if: failure()` and print "Build failed, performing cleanup actions!".
6.  **Test:** Push changes to `main`, `develop`, and then to any other branch where the build job explicitly fails (e.g., by adding `run: exit 1` to a step). Observe the workflow runs and which steps/jobs execute.

```yaml
# .github/workflows/conditional-workflow.yml
name: Conditional Workflow Demo

on:
  push:
    branches:
      - main
      - develop
      - feature/* # For testing failures on other branches
  pull_request:
    branches:
      - main
      - develop

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: echo "Installing dependencies..."

      - name: Run tests (simulated failure for feature branches)
        run: |
          if [[ "${{ github.ref }}" == "refs/heads/feature/"* ]]; then
            echo "Simulating test failure on feature branch..."
            exit 1
          else
            echo "Tests passed on ${{ github.ref }}"
          fi

      - name: Deploy to Production (main branch only)
        if: github.ref == 'refs/heads/main'
        run: echo "Deploying to production environment from ${{ github.ref }}!"

      - name: Deploy to Staging (develop branch only)
        if: github.ref == 'refs/heads/develop'
        run: echo "Deploying to staging environment from ${{ github.ref }}!"

      - name: Generic Build Message (other branches)
        if: github.ref != 'refs/heads/main' && github.ref != 'refs/heads/develop' && success()
        run: echo "Build completed for ${{ github.ref }}"

  cleanup_on_failure:
    runs-on: ubuntu-latest
    needs: build
    if: failure() # This job only runs if the 'build' job failed
    steps:
      - name: Perform Cleanup
        run: echo "Build failed on ${{ github.ref }}, performing cleanup actions!"
```

#### Assessment idea
1.  **Question:** You have a GitHub Actions workflow with two jobs: `build` and `deploy`. The `deploy` job should only run if the `build` job completes successfully AND the workflow was triggered by a push to the `production` branch. Which `if` condition should you add to the `deploy` job?
    *   A) `if: success() && github.ref == 'production'`
    *   B) `if: needs.build.result == 'success' && github.ref == 'refs/heads/production'`
    *   C) `if: github.event_name == 'push' && github.ref == 'refs/heads/production' && success()`
    *   D) `if: github.event_name == 'push' && github.ref == 'production' && needs.build.result == 'success'`

    **Correct Answer:** C) `if: github.event_name == 'push' && github.ref == 'refs/heads/production' && success()`
    **Explanation:**
    *   `success()` is the correct status check function to ensure the preceding job succeeded.
    *   `github.event_name == 'push'` ensures the workflow was triggered by a push event.
    *   `github.ref == 'refs/heads/production'` correctly specifies the target branch. Option B uses `needs.build.result == 'success'` which is not the standard way to check job status in an `if` condition; `success()` is preferred. Option A incorrectly uses `'production'` instead of `'refs/heads/production'` for the branch reference. Option D has similar issues.

2.  **Question:** A step in your workflow needs to execute only if the workflow was triggered by a pull request AND the pull request title contains the word "WIP" (Work In Progress). How would you write the `if` condition for this step?
    *   A) `if: github.event_name == 'pull_request' && contains(github.event.pull_request.title, 'WIP')`
    *   B) `if: github.event.pull_request.title.includes('WIP') && github.event_name == 'pull_request'`
    *   C) `if: github.event_name == 'pull_request' && github.event.pull_request.title == '*WIP*'`
    *   D) `if: github.event_name == 'pull_request' && github.pull_request.title.contains('WIP')`

    **Correct Answer:** A) `if: github.event_name == 'pull_request' && contains(github.event.pull_request.title, 'WIP')`
    **Explanation:**
    *   `github.event_name == 'pull_request'` correctly identifies the pull request event.
    *   The `contains()` function is the correct way to check if a string contains a substring in GitHub Actions expressions.
    *   `github.event.pull_request.title` is the correct path to access the pull request title within the `github` context for a `pull_request` event. Options B, C, and D use incorrect syntax or functions for string manipulation within GitHub Actions expressions.

#### AI generation note
Create a 12-minute live coding video. Begin by explaining the problem of uncontrolled workflow execution and introducing `if` conditions. Demonstrate applying `if: github.ref == 'refs/heads/main'` to a deployment job. Then, show how to use `github.event_name` and `contains()` with `github.event.pull_request.title` for a PR-specific linting step. Illustrate the `success()`, `failure()`, and `always()` functions with a notification step that runs only on failure. Use a split-screen view showing the YAML code on the left and the GitHub Actions UI on the right, highlighting skipped jobs/steps. Include a visual diagram explaining the `github` context structure. Conclude with a 2-question interactive quiz on `if` condition syntax and context usage.

### Chapter 3.2 — Managing Workflow Data: Outputs and Artifacts

#### Learning objectives
*   Differentiate between step outputs, job outputs, and workflow artifacts, understanding their respective use cases for data persistence.
*   Set and retrieve step outputs to pass information between steps within the same job.
*   Define and access job outputs to share data between dependent jobs in a workflow.
*   Utilize the `actions/upload-artifact` and `actions/download-artifact` actions to store and retrieve files or directories across jobs and workflow runs.
*   Implement best practices for managing artifact retention and handling potential issues with large data transfers.

#### Detailed lesson content
In many real-world CI/CD scenarios, your workflow jobs and steps aren't isolated; they often need to share data. For instance, a build job might generate a unique version number that a subsequent deployment job needs, or a test job might produce coverage reports that need to be stored for later analysis. GitHub Actions provides two primary mechanisms for managing and sharing data: **outputs** for structured data exchange and **artifacts** for file-based data persistence. Understanding when and how to use each is fundamental for building robust, multi-stage pipelines.

**Outputs** are designed for passing small, structured pieces of information between steps within a job, or between dependent jobs. There are two main types: step outputs and job outputs.
**Step Outputs** allow a step to emit a value that can be consumed by subsequent steps within the *same job*. To set a step output, you use a special syntax within your `run` command. Historically, this was `echo "::set-output name=<output_name>::<value>"`. However, this method has been deprecated. The modern and recommended approach is to write to the `GITHUB_OUTPUT` environment file.

```yaml
jobs:
  my_job:
    runs-on: ubuntu-latest
    steps:
      - name: Generate a version number
        id: generate_version # Assign an ID to the step
        run: |
          VERSION="1.0.${{ github.run_number }}"
          echo "Generated version: $VERSION"
          echo "app_version=$VERSION" >> $GITHUB_OUTPUT # Set step output using GITHUB_OUTPUT

      - name: Use the generated version
        run: echo "Building application version ${{ steps.generate_version.outputs.app_version }}"
```
In this example, the `generate_version` step sets an output named `app_version`. The subsequent step can then access this output using the syntax `steps.<step_id>.outputs.<output_name>`. This is incredibly useful for passing dynamic values like commit SHAs, build IDs, or configuration flags.

**Job Outputs** extend this concept, allowing you to expose data from one job to another dependent job. To achieve this, you first define the `outputs` at the job level, mapping them to the outputs of specific steps within that job. Then, a dependent job can access these outputs using `needs.<job_id>.outputs.<output_name>`.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: ${{ steps.generate_id.outputs.id }} # Map step output to job output
    steps:
      - name: Generate unique build ID
        id: generate_id
        run: |
          BUILD_ID=$(date +%s)
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT

  deploy:
    runs-on: ubuntu-latest
    needs: build # This job depends on the 'build' job
    steps:
      - name: Use build ID from previous job
        run: echo "Deploying build ID: ${{ needs.build.outputs.build_id }}"
```
This pattern is essential for multi-stage pipelines where information generated in an earlier stage (e.g., a compiled artifact's hash, a dynamically provisioned resource ID) needs to be consumed by a later stage. A common mistake is trying to access step outputs directly from another job; remember, you must explicitly define job outputs to make them available across job boundaries.

While outputs are perfect for small, structured data, **artifacts** are designed for storing and sharing files or directories. Think of artifacts as the actual deliverables of your workflow – compiled binaries, test reports, logs, images, or even entire build directories. Artifacts are uploaded at the end of a job and can then be downloaded by subsequent jobs in the same workflow, or even by other workflows (though this requires specific permissions and approaches outside the scope of basic usage). They are also available for download directly from the GitHub UI for a specified retention period.

The `actions/upload-artifact` and `actions/download-artifact` actions are the standard way to manage artifacts.
To upload an artifact:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build application
        run: mkdir dist && echo "Hello World!" > dist/index.html # Simulate building
      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: my-web-app
          path: dist/ # Path to the directory or file to upload
          retention-days: 5 # Optional: how long to keep the artifact
```
The `name` parameter is crucial as it identifies the artifact. The `path` parameter specifies what files or directories to upload. A common mistake here is providing an incorrect `path` or forgetting to create the directory before uploading.

To download an artifact in a subsequent job:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: my-web-app # Must match the name used during upload
          path: ./downloaded-app # Optional: directory to download into
      - name: Verify downloaded content
        run: ls -R ./downloaded-app && cat ./downloaded-app/index.html
```
When downloading, if you omit the `path`, the artifact will be downloaded into the current working directory of the step. If multiple artifacts with the same name exist (e.g., from different jobs or runs), `download-artifact` will download all of them into separate subdirectories. It's best practice to use unique names for artifacts if you need to distinguish them.

Safety and performance considerations are important for artifacts. Large artifacts can significantly slow down your workflow due to upload/download times and consume more storage. Only upload what's strictly necessary. Also, be mindful of the `retention-days` option; setting it too high can lead to excessive storage usage, while setting it too low might remove artifacts before they are needed. Never upload sensitive information as an artifact if it's not encrypted, as artifacts are generally accessible to anyone who can view the workflow run. For truly sensitive data, GitHub Secrets are the appropriate mechanism, which we will cover in a later chapter.

#### Key concepts
*   **Step Outputs:** Data emitted by a step, accessible by subsequent steps within the same job using `steps.<step_id>.outputs.<output_name>`. Set using `echo "<name>=<value>" >> $GITHUB_OUTPUT`.
*   **Job Outputs:** Data exposed by a job, accessible by dependent jobs using `needs.<job_id>.outputs.<output_name>`. Defined at the job level.
*   **`GITHUB_OUTPUT`:** A special environment file used to set step outputs dynamically from a `run` command.
*   **Artifacts:** Files or directories generated by a workflow that are stored and can be downloaded later, typically for consumption by other jobs or for long-term storage.
*   **`actions/upload-artifact`:** A GitHub Action used to upload files or directories as artifacts.
*   **`actions/download-artifact`:** A GitHub Action used to download previously uploaded artifacts.
*   **Retention Policy:** The duration for which artifacts are stored on GitHub, configurable via `retention-days`.

#### Hands-on activity
**Objective:** Create a multi-job workflow where the first job builds a simple application, generates a build version, sets it as a job output, and uploads the build directory as an artifact. The second job will download the artifact and use the version output.

1.  **Create a new workflow file:** In your repository, create `.github/workflows/data-management.yml`.
2.  **Define the `build` job:**
    *   This job should run on `ubuntu-latest`.
    *   Add a step to simulate building an app: `mkdir build && echo "App content for version $(date +%s)" > build/index.html`.
    *   Add a step to generate a dynamic version number (e.g., `1.0.<run_number>`) and set it as a step output using `GITHUB_OUTPUT`.
    *   Define a job output named `app_version` that maps to your step output.
    *   Use `actions/upload-artifact@v4` to upload the `build` directory with the name `my-app-build`.
3.  **Define the `deploy` job:**
    *   This job should `needs: build`.
    *   Add a step to download the `my-app-build` artifact using `actions/download-artifact@v4`.
    *   Add a step to print the downloaded artifact's content and the `app_version` received from the `build` job.

```yaml
# .github/workflows/data-management.yml
name: Workflow Data Management Demo

on:
  push:
    branches:
      - main
  workflow_dispatch: # Allows manual trigger

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      app_version: ${{ steps.set_version.outputs.version_string }} # Map step output to job output
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Simulate application build
        run: |
          mkdir -p build/dist
          echo "<h1>Hello from Cohortia App!</h1><p>Build content for version ${{ github.run_number }}</p>" > build/dist/index.html
          echo "This is a build log." > build/build.log
          ls -R build

      - name: Generate and set application version
        id: set_version # ID for this step
        run: |
          APP_VERSION="1.0.${{ github.run_number }}"
          echo "Generated App Version: $APP_VERSION"
          echo "version_string=$APP_VERSION" >> $GITHUB_OUTPUT # Set step output

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: my-app-build # Name of the artifact
          path: build/dist/ # Path to the directory to upload
          retention-days: 1 # Keep for 1 day

  deploy:
    runs-on: ubuntu-latest
    needs: build # This job depends on the 'build' job
    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: my-app-build # Must match the artifact name from the 'build' job
          path: ./downloaded-app # Directory to download the artifact into

      - name: Verify downloaded content and use version
        run: |
          echo "Downloaded artifact content:"
          ls -R ./downloaded-app
          echo "--- index.html content ---"
          cat ./downloaded-app/index.html
          echo "---"
          echo "Received App Version from build job: ${{ needs.build.outputs.app_version }}"
```

#### Assessment idea
1.  **Question:** You have a workflow where Job A compiles a C++ application, and Job B needs to run the compiled executable. Which GitHub Actions feature is best suited for passing the compiled executable file from Job A to Job B?
    *   A) Job Outputs
    *   B) Step Outputs
    *   C) Environment Variables
    *   D) Artifacts

    **Correct Answer:** D) Artifacts
    **Explanation:** Job Outputs, Step Outputs, and Environment Variables are primarily for passing small, structured data (like strings, numbers, or simple JSON). Artifacts are specifically designed for storing and transferring files or directories generated during a workflow run, such as compiled executables, build assets, or test reports.

2.  **Question:** Consider the following workflow snippet:
    ```yaml
    jobs:
      job_a:
        runs-on: ubuntu-latest
        outputs:
          my_message: ${{ steps.generate_msg.outputs.message }}
        steps:
          - name: Generate message
            id: generate_msg
            run: echo "message=Hello from Job A!" >> $GITHUB_OUTPUT

      job_b:
        runs-on: ubuntu-latest
        needs: job_a
        steps:
          - name: Display message
            run: echo "Message: ${{ needs.job_a.outputs.my_message }}"
    ```
    If `job_a` successfully completes, what will be printed by the `Display message` step in `job_b`?
    *   A) `Message: Hello from Job A!`
    *   B) `Message: ${{ steps.generate_msg.outputs.message }}`
    *   C) `Message: ` (empty string)
    *   D) An error indicating `my_message` is not found.

    **Correct Answer:** A) `Message: Hello from Job A!`
    **Explanation:**
    *   In `job_a`, the `generate_msg` step correctly sets a step output named `message` with the value "Hello from Job A!" using `GITHUB_OUTPUT`.
    *   `job_a` then maps this step output to its own job output named `my_message`.
    *   In `job_b`, `needs.job_a.outputs.my_message` correctly accesses the `my_message` output from `job_a`, which holds the value "Hello from Job A!".

#### AI generation note
Create a 15-minute mixed-format lesson. Start with a slide explaining the problem of data sharing between jobs and introducing outputs vs. artifacts. Transition to a live coding demo where you build a simple Node.js app, generate a version number (using `GITHUB_OUTPUT`), and upload the `dist` folder as an artifact. Show how to define job outputs. In a second job, demonstrate downloading the artifact and using the job output. Include browser views of the GitHub Actions UI showing the uploaded artifacts. Emphasize common mistakes like `path` issues for artifacts and incorrect output access. Conclude with a hands-on coding exercise where learners modify a workflow to pass a dynamically generated configuration file as an artifact.

### Chapter 3.3 — Reusable Workflows and Actions

#### Learning objectives
*   Explain the benefits of reusability in GitHub Actions, including consistency, maintainability, and reduced boilerplate.
*   Define a reusable workflow using the `on: workflow_call` trigger and specify its inputs, secrets, and outputs.
*   Invoke a reusable workflow from another workflow, passing necessary inputs and secrets.
*   Understand the fundamental concept of custom actions (JavaScript, Docker, Composite) and their role in encapsulating granular logic.
*   Identify scenarios where reusable workflows are preferred over custom actions and vice versa.

#### Detailed lesson content
As your organization adopts GitHub Actions more widely, you'll likely find yourself writing similar sets of steps or even entire jobs across multiple repositories or within different workflows in the same repository. This leads to duplication, which is a common enemy in software development, making maintenance harder and introducing inconsistencies. GitHub Actions addresses this challenge with powerful reusability features: **reusable workflows** and **custom actions**. These mechanisms allow you to define common patterns once and then invoke them wherever needed, promoting the DRY (Don't Repeat Yourself) principle.

**Reusable workflows** are essentially sub-workflows that can be called from other workflows. They are ideal for encapsulating common multi-step processes, such as a standardized build pipeline, a consistent deployment strategy, or a set of security scanning steps that should be applied to all projects. The primary benefit is consistency: every team uses the exact same build process, ensuring uniform quality and reducing configuration drift.

To create a reusable workflow, you define it in a separate `.yml` file, typically within the `.github/workflows/` directory, and specify `on: workflow_call`. This trigger signifies that the workflow is not meant to be run directly by events like `push` or `pull_request`, but rather by another workflow. Reusable workflows can accept `inputs` and `secrets` from the calling workflow, and they can also declare `outputs` to pass data back to the caller.

```yaml
# .github/workflows/reusable-build.yml
name: Reusable Build Workflow

on:
  workflow_call:
    inputs:
      node_version:
        required: true
        type: string
        description: 'Node.js version to use for the build'
      environment:
        required: false
        type: string
        default: 'development'
        description: 'Target environment for the build'
    secrets:
      NPM_TOKEN:
        required: false
        description: 'NPM token for private package access'
    outputs:
      build_artifact_name:
        description: 'Name of the generated build artifact'
        value: ${{ jobs.build.outputs.artifact_name }}

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      artifact_name: ${{ steps.upload_artifact_step.outputs.artifact_name_output }} # Map step output to job output
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node_version }}
      - name: Install dependencies
        run: npm ci
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} # Use secret if provided
      - name: Run build
        run: npm run build -- --env=${{ inputs.environment }}
      - name: Upload Build Artifact
        id: upload_artifact_step
        uses: actions/upload-artifact@v4
        with:
          name: app-build-${{ github.run_id }}
          path: dist/
        run: echo "artifact_name_output=app-build-${{ github.run_id }}" >> $GITHUB_OUTPUT
```

To call this reusable workflow from another workflow, you use the `uses` keyword, pointing to the repository and the path to the reusable workflow file, along with a specific ref (branch, tag, or commit SHA). You then pass the required `inputs` and `secrets` using the `with` keyword.

```yaml
# .github/workflows/caller-workflow.yml
name: Caller Workflow

on:
  push:
    branches:
      - main

jobs:
  call_reusable_build:
    uses: octo-org/my-repo/.github/workflows/reusable-build.yml@main # Call the reusable workflow
    with:
      node_version: '18.x'
      environment: 'production'
    secrets:
      NPM_TOKEN: ${{ secrets.ORG_NPM_TOKEN }} # Pass a secret from the caller's context
    outputs:
      build_name: ${{ jobs.call_reusable_build.outputs.build_artifact_name }}

  deploy:
    runs-on: ubuntu-latest
    needs: call_reusable_build
    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: ${{ needs.call_reusable_build.outputs.build_name }}
          path: ./app
      - name: Deploy to server
        run: echo "Deploying build ${{ needs.call_reusable_build.outputs.build_name }} to production..."
```
Notice how secrets are passed: the calling workflow must explicitly define and pass the secrets it has access to. The reusable workflow then receives them via its `secrets` block. This ensures that secrets are not implicitly shared, maintaining security. A common mistake is forgetting to pass a required input or secret, leading to workflow failures. Always check the `required` field in the reusable workflow's definition.

**Custom Actions**, on the other hand, are more granular, self-contained units of logic designed for specific tasks. While reusable workflows orchestrate multiple jobs and steps, custom actions typically perform a single, focused operation. They are written in JavaScript, as a Docker container, or as a composite run step. You can publish them to the GitHub Marketplace or use them privately within your organization. For example, an action might be responsible for parsing a specific log file, interacting with a third-party API, or generating a unique ID.

When to choose between reusable workflows and custom actions?
*   **Reusable workflows** are best for:
    *   Orchestrating multiple jobs or a complex sequence of steps.
    *   Standardizing entire CI/CD pipelines (e.g., "Build and Test," "Deploy to Staging").
    *   When the logic involves calling multiple existing actions or running complex scripts.
*   **Custom actions** are best for:
    *   Encapsulating a single, well-defined task.
    *   When you need to write custom code (JavaScript) or run a specific tool in a container.
    *   Creating highly portable and shareable components that can be used across many different workflows and repositories.

A common mistake when using reusable workflows is not pinning the `uses` reference to a specific commit SHA or tag (e.g., `octo-org/my-repo/.github/workflows/reusable-build.yml@v1` or `@a1b2c3d`). Using `@main` can introduce breaking changes if the `main` branch of the reusable workflow's repository is updated. Pinning to a specific version or SHA provides stability and security. Always audit any third-party actions or reusable workflows you incorporate into your pipelines to prevent supply chain attacks.

#### Key concepts
*   **Reusable Workflows:** Sub-workflows defined with `on: workflow_call` that encapsulate common jobs and steps, callable from other workflows.
*   **`on: workflow_call`:** The trigger event that designates a workflow as reusable, allowing it to be invoked by other workflows.
*   **Inputs:** Parameters passed from a calling workflow to a reusable workflow, defined in the `on: workflow_call` block.
*   **Secrets:** Sensitive environment variables passed from a calling workflow to a reusable workflow, also defined in the `on: workflow_call` block.
*   **Outputs:** Values emitted by a reusable workflow back to the calling workflow, defined in the `on: workflow_call` block.
*   **Custom Actions:** Self-contained, granular units of logic (JavaScript, Docker, Composite) designed for specific tasks, often published to the GitHub Marketplace.
*   **DRY Principle:** "Don't Repeat Yourself," a software development principle that reusable workflows and actions help enforce.

#### Hands-on activity
**Objective:** Create a reusable workflow that greets a user based on an input name, and then create a calling workflow that invokes this reusable workflow.

1.  **Create the Reusable Workflow:**
    *   In your repository, create `.github/workflows/greeting-workflow.yml`.
    *   Define it with `on: workflow_call`.
    *   Add an `inputs` section that accepts a `name` (string, required, default 'World').
    *   Add a job that uses this `name` input to print a greeting message.
    *   Add an output to the reusable workflow that returns the full greeting message.

2.  **Create the Calling Workflow:**
    *   In your repository, create `.github/workflows/call-greeting.yml`.
    *   Define it with `on: push` to `main` or `workflow_dispatch`.
    *   Add a job that calls your `greeting-workflow.yml` using `uses: <your-username>/<your-repo>/.github/workflows/greeting-workflow.yml@main`.
    *   Pass an `input` for `name` (e.g., `Cohortia Learner`).
    *   Add a step in the calling workflow that prints the output received from the reusable workflow.

```yaml
# .github/workflows/greeting-workflow.yml
name: Reusable Greeting Workflow

on:
  workflow_call:
    inputs:
      name:
        required: true
        type: string
        description: 'The name of the person to greet'
      greeting_prefix:
        required: false
        type: string
        default: 'Hello'
        description: 'Prefix for the greeting message'
    outputs:
      full_greeting:
        description: 'The complete greeting message generated'
        value: ${{ jobs.greet_user.outputs.generated_greeting }}

jobs:
  greet_user:
    runs-on: ubuntu-latest
    outputs:
      generated_greeting: ${{ steps.create_greeting.outputs.greeting_output }}
    steps:
      - name: Create Greeting Message
        id: create_greeting
        run: |
          GREETING="${{ inputs.greeting_prefix }}, ${{ inputs.name }}!"
          echo "$GREETING"
          echo "greeting_output=$GREETING" >> $GITHUB_OUTPUT
```

```yaml
# .github/workflows/call-greeting.yml
name: Call Reusable Greeting

on:
  push:
    branches:
      - main
  workflow_dispatch: # Allows manual triggering

jobs:
  invoke_greeting:
    runs-on: ubuntu-latest
    name: Invoke Reusable Greeting Workflow
    uses: ${{ github.repository }}/.github/workflows/greeting-workflow.yml@main # Replace with your actual repo path
    with:
      name: 'Cohortia Learner'
      greeting_prefix: 'Greetings'
    outputs:
      received_greeting: ${{ jobs.invoke_greeting.outputs.full_greeting }}

  display_final_message:
    runs-on: ubuntu-latest
    needs: invoke_greeting
    steps:
      - name: Display Final Greeting from Reusable Workflow
        run: |
          echo "The reusable workflow said: ${{ needs.invoke_greeting.outputs.received_greeting }}"
```

#### Assessment idea
1.  **Question:** Your organization has multiple repositories, all of which need to run the same set of security scans (linting, vulnerability checks, static analysis) as part of their CI pipeline. Which GitHub Actions feature is the most efficient and maintainable way to implement this standardized scanning process across all repositories?
    *   A) Copy-pasting the scan steps into each repository's workflow.
    *   B) Creating a custom JavaScript action that performs all scans.
    *   C) Defining a reusable workflow in a central repository and calling it from each project's workflow.
    *   D) Using environment variables to enable/disable scan steps in each workflow.

    **Correct Answer:** C) Defining a reusable workflow in a central repository and calling it from each project's workflow.
    **Explanation:**
    *   A) Copy-pasting leads to duplication and maintenance nightmares.
    *   B) A custom JavaScript action is too granular for an entire scanning *process* involving multiple tools; it's better for a single, focused task.
    *   D) Environment variables would only control existing steps, not provide a reusable block of logic.
    *   C) A reusable workflow is perfect for encapsulating a multi-step, multi-job process that needs to be consistently applied across many repositories, promoting DRY and maintainability.

2.  **Question:** You are creating a reusable workflow that requires an API key for authentication. How should you define this API key in the reusable workflow's `on: workflow_call` section so that the calling workflow can securely provide it?
    *   A) As an `input` of type `string`.
    *   B) As a `variable` in the `env` section.
    *   C) As a `secret`.
    *   D) It should be hardcoded in the reusable workflow.

    **Correct Answer:** C) As a `secret`.
    **Explanation:** Sensitive information like API keys should always be handled as secrets. Defining it as a `secret` in the `on: workflow_call` block ensures it's encrypted, redacted from logs, and passed securely from the calling workflow's secrets store. Using an `input` would expose it in plaintext in workflow logs, and hardcoding is a major security vulnerability.

#### AI generation note
Create a 10-minute live coding video. Begin by illustrating the problem of duplicated workflow code. Introduce reusable workflows as the solution. Demonstrate creating a `reusable-deploy.yml` workflow with `on: workflow_call`, defining `inputs` for target environment and `secrets` for a deployment token. Show how to use these inputs/secrets within the reusable workflow. Then, create a `main-ci.yml` workflow that calls `reusable-deploy.yml`, passing specific values for inputs and a repository secret. Use a split-screen view to show both YAML files side-by-side. Include a quick diagram explaining the flow of inputs/secrets between caller and reusable workflow. Conclude with a reflection prompt asking learners to identify a common process in their own projects that could benefit from a reusable workflow.

### Chapter 3.4 — Environment Variables and Secrets

#### Learning objectives
*   Distinguish between default, custom, and dynamic environment variables in GitHub Actions.
*   Set custom environment variables at the workflow, job, and step levels and access them in scripts.
*   Utilize the `GITHUB_ENV` file to dynamically set environment variables that persist across subsequent steps within a job.
*   Understand the purpose and security implications of GitHub Secrets for handling sensitive data.
*   Create, manage, and securely use repository, organization, and environment secrets within workflows, adhering to best practices.

#### Detailed lesson content
In any CI/CD pipeline, you'll often need to configure your build, test, or deployment processes with dynamic values. These might include API endpoints, database connection strings, feature flags, or authentication tokens. GitHub Actions provides robust mechanisms for managing these values through **environment variables** and **secrets**. Understanding how to effectively use them is crucial for creating flexible, secure, and portable workflows.

**Environment variables** provide a way to inject configuration data into your workflow's runtime environment. GitHub Actions automatically exposes a set of **default environment variables** (e.g., `GITHUB_WORKFLOW`, `GITHUB_RUN_ID`, `GITHUB_REPOSITORY`, `RUNNER_OS`) that provide useful context about the current workflow run. You can access these in your scripts just like any other environment variable (e.g., `echo "Running on $RUNNER_OS"`).

Beyond the defaults, you can define your own **custom environment variables** at different scopes:
*   **Workflow level:** Defined at the top level of your workflow file using the `env` keyword. These variables are available to all jobs and steps within that workflow.
*   **Job level:** Defined within a specific `job` using `env`. These are available to all steps within that particular job.
*   **Step level:** Defined within a specific `step` using `env`. These are only available to that single step.

```yaml
name: Environment Variables Demo

on: [push]

env: # Workflow-level environment variable
  GLOBAL_VAR: 'Hello from Workflow!'

jobs:
  my_job:
    runs-on: ubuntu-latest
    env: # Job-level environment variable
      JOB_VAR: 'Hello from Job!'
    steps:
      - name: Access variables
        env: # Step-level environment variable
          STEP_VAR: 'Hello from Step!'
        run: |
          echo "Global: $GLOBAL_VAR"
          echo "Job: $JOB_VAR"
          echo "Step: $STEP_VAR"
          echo "Default Runner OS: $RUNNER_OS" # Accessing a default variable
```
This hierarchical approach allows you to manage variables effectively, overriding values at more specific scopes if needed. A common mistake is assuming a step-level `env` variable will be available to subsequent steps; remember, it's scoped *only* to that step.

For scenarios where you need to set an environment variable dynamically during a step and have it available for *subsequent steps within the same job*, you use the special `GITHUB_ENV` file. Any `KEY=VALUE` pair appended to this file will be available as an environment variable for all following steps in that job.

```yaml
jobs:
  dynamic_env_job:
    runs-on: ubuntu-latest
    steps:
      - name: Generate dynamic value
        run: |
          DYNAMIC_VALUE="build-${{ github.run_number }}"
          echo "Setting DYNAMIC_VAR to $DYNAMIC_VALUE for subsequent steps"
          echo "DYNAMIC_VAR=$DYNAMIC_VALUE" >> $GITHUB_ENV # Write to GITHUB_ENV

      - name: Use dynamic value in next step
        run: echo "The dynamic value is: $DYNAMIC_VAR" # Now DYNAMIC_VAR is available
```
This is incredibly powerful for tasks like generating a unique build ID, fetching a configuration from an API, or processing some data and then making the result available for later steps without needing to use outputs.

**Secrets** are a critical component for securely handling sensitive information in your workflows. Unlike regular environment variables, secrets are encrypted by GitHub, are never exposed in logs (GitHub automatically redacts them), and are not accessible to users with read-only repository permissions. They are essential for storing API keys, database credentials, cloud provider tokens, and other sensitive data that should never be hardcoded or committed to your repository.

GitHub Secrets can be defined at various levels:
*   **Repository secrets:** Specific to a single repository. You manage these in your repository settings under "Secrets and variables" -> "Actions".
*   **Organization secrets:** Available to all or selected repositories within an organization. Managed in organization settings.
*   **Environment secrets:** Specific to a deployment environment (e.g., `production`, `staging`). These allow for fine-grained access control, where only specific branches or manual approvals can trigger workflows that use secrets for a particular environment. Managed in repository settings under "Environments".

To use a secret in your workflow, you access it via the `secrets` context: `${{ secrets.MY_API_KEY }}`.

```yaml
name: Secrets Demo

on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Authenticate with external service
        run: |
          echo "Using API Key: ${{ secrets.MY_API_KEY }}" # Accessing a repository secret
          # In a real scenario, you would pass this to a tool or API call
          curl -H "Authorization: Bearer ${{ secrets.MY_API_KEY }}" https://api.example.com/data
        env:
          SERVICE_URL: 'https://api.example.com' # Using a regular env var
```
**Security Best Practices for Secrets:**
1.  **Never hardcode secrets:** Always use GitHub Secrets.
2.  **Principle of Least Privilege:** Grant access to secrets only where absolutely necessary. Use environment secrets for production deployments to restrict access.
3.  **Rotate secrets:** Regularly change your API keys and tokens.
4.  **Avoid printing secrets:** While GitHub attempts to redact secrets from logs, it's best practice to avoid `echo`ing them directly. If you must inspect a secret for debugging, mask it carefully or use a secure logging mechanism.
5.  **Pin actions:** When using third-party actions that consume secrets, pin them to a full commit SHA, not just a major version, to prevent malicious updates.

A common mistake is trying to access a secret without explicitly defining it in the repository/organization/environment settings, or using incorrect casing (secret names are case-sensitive). Another pitfall is accidentally exposing a secret by printing it to logs or including it in an error message. Always treat secrets with the utmost care.

#### Key concepts
*   **Environment Variables (`env`):** Key-value pairs that provide configuration data to workflow jobs and steps.
*   **Default Environment Variables:** Predefined variables provided by GitHub Actions (e.g., `GITHUB_RUN_ID`, `RUNNER_OS`).
*   **Custom Environment Variables:** User-defined variables set at workflow, job, or step levels.
*   **`GITHUB_ENV`:** A special file used to dynamically set environment variables during a step, making them available to subsequent steps within the same job.
*   **Secrets:** Encrypted environment variables stored in GitHub, used for sensitive data, and automatically redacted from logs.
*   **Repository Secrets:** Secrets scoped to a single GitHub repository.
*   **Organization Secrets:** Secrets available across multiple repositories within an organization.
*   **Environment Secrets:** Secrets tied to specific deployment environments, offering granular access control and protection rules.
*   **`secrets` context:** The object used to access secrets within a workflow (e.g., `${{ secrets.MY_SECRET_NAME }}`).

#### Hands-on activity
**Objective:** Create a workflow that uses custom environment variables at different scopes, dynamically sets an environment variable, and securely uses a GitHub secret to simulate authentication with an external service.

1.  **Set up a Repository Secret:**
    *   Go to your GitHub repository settings.
    *   Navigate to "Secrets and variables" -> "Actions" -> "Repository secrets".
    *   Click "New repository secret" and create a secret named `API_KEY` with a dummy value (e.g., `my-super-secret-token-123`).
2.  **Create a new workflow file:** In your repository, create `.github/workflows/env-and-secrets.yml`.
3.  **Define a workflow:**
    *   Set a workflow-level environment variable `APP_NAME: 'My Cohortia App'`.
    *   Define a job `config_and_auth` that runs on `ubuntu-latest`.
    *   Set a job-level environment variable `CONFIG_ENV: 'Production'`.
    *   Add a step that prints `APP_NAME`, `CONFIG_ENV`, and a step-level variable `BUILD_TYPE: 'Release'`.
    *   Add another step that dynamically sets a new environment variable `BUILD_DATE` using `GITHUB_ENV` (e.g., `BUILD_DATE=$(date +%Y-%m-%d)`).
    *   Add a final step that uses the `BUILD_DATE` variable and the `API_KEY` secret, printing a message like "Authenticating My Cohortia App (Build: YYYY-MM-DD) with API Key: <masked_key>".

```yaml
# .github/workflows/env-and-secrets.yml
name: Environment Variables and Secrets Demo

on:
  push:
    branches:
      - main
  workflow_dispatch: # Allows manual trigger

env: # Workflow-level environment variable
  APP_NAME: 'My Cohortia App'

jobs:
  config_and_auth:
    runs-on: ubuntu-latest
    env: # Job-level environment variable
      CONFIG_ENV: 'Production'
    steps:
      - name: Display static environment variables
        env: # Step-level environment variable
          BUILD_TYPE: 'Release'
        run: |
          echo "Application Name (Workflow-level): $APP_NAME"
          echo "Configuration Environment (Job-level): $CONFIG_ENV"
          echo "Build Type (Step-level): $BUILD_TYPE"
          echo "Runner OS (Default): $RUNNER_OS"

      - name: Dynamically set environment variable for subsequent steps
        run: |
          CURRENT_DATE=$(date +%Y-%m-%d_%H-%M-%S)
          echo "Generated build timestamp: $CURRENT_DATE"
          echo "BUILD_TIMESTAMP=$CURRENT_DATE" >> $GITHUB_ENV # Set for subsequent steps

      - name: Use dynamic variable and a secret
        run: |
          echo "--- Dynamic and Secret Usage ---"
          echo "Current build timestamp: $BUILD_TIMESTAMP" # Accessing dynamically set variable
          echo "Attempting to authenticate $APP_NAME (Build: $BUILD_TIMESTAMP) with API Key: ${{ secrets.API_KEY }}"
          # In a real scenario, you would pass this secret to a tool or API call,
          # e.g., curl -H "Authorization: Bearer ${{ secrets.API_KEY }}" https://api.example.com/secure_endpoint
          echo "Authentication simulation complete."
```

#### Assessment idea
1.  **Question:** You need to pass a database connection string to a deployment script in your GitHub Actions workflow. This connection string contains sensitive credentials. Which method should you use to store and access this string securely?
    *   A) Define it as a workflow-level `env` variable.
    *   B) Store it in a plain text file in the repository and read it.
    *   C) Create a GitHub Secret (e.g., `DB_CONNECTION_STRING`) and access it via `${{ secrets.DB_CONNECTION_STRING }}`.
    *   D) Pass it as a command-line argument directly in the `run` command.

    **Correct Answer:** C) Create a GitHub Secret (e.g., `DB_CONNECTION_STRING`) and access it via `${{ secrets.DB_CONNECTION_STRING }}`.
    **Explanation:** Options A, B, and D would all expose the sensitive database connection string in plaintext, either in workflow logs, the repository, or command history. GitHub Secrets are specifically designed to store and manage sensitive data securely, redacting them from logs and encrypting them.

2.  **Question:** A step in your workflow generates a unique identifier that needs to be used by two *subsequent* steps within the *same job*. Which of the following is the most appropriate way to make this identifier available to those later steps?
    *   A) Set it as a job output.
    *   B) Set it as a step output using `echo "::set-output name=id::value"`.
    *   C) Write the identifier to the `GITHUB_ENV` file.
    *   D) Define it as a workflow-level environment variable.

    **Correct Answer:** C) Write the identifier to the `GITHUB_ENV` file.
    **Explanation:**
    *   A) Job outputs are for passing data between *jobs*, not between steps within the same job.
    *   B) While `::set-output` works, `GITHUB_ENV` is the modern and recommended way to set environment variables for subsequent steps within the same job.
    *   D) Workflow-level environment variables are static and defined at the start of the workflow, not dynamically generated during a step.
    *   Writing to `GITHUB_ENV` allows a step to dynamically create an environment variable that will be available to all following steps in that specific job.

#### AI generation note
Create a 12-minute live coding video. Begin with a brief explanation of environment variables vs. secrets. Demonstrate setting workflow-level, job-level, and step-level `env` variables, showing how they can be accessed and overridden. Then, introduce `GITHUB_ENV` by creating a step that generates a dynamic timestamp and makes it available to a subsequent step. Transition to GitHub Secrets, showing how to create a repository secret in the GitHub UI. Finally, integrate this secret into the workflow, emphasizing secure usage and the automatic redaction in logs. Use a split-screen view for YAML code and terminal output. Include a visual warning about exposing secrets. Conclude with a mini-quiz on the scope and security of environment variables and secrets.

---

## Module 4: Managing Artifacts and Deploying with Environments

This module dives into the crucial aspects of managing data generated by your workflows and orchestrating controlled deployments to various environments using GitHub Actions. You will learn how to persist build outputs, configure secure deployment environments, and implement robust deployment strategies, including manual approvals and dynamic review applications.

### Chapter 4.1 — Storing and Retrieving Build Artifacts

#### Learning objectives
*   Understand the purpose and benefits of using artifacts in GitHub Actions workflows.
*   Learn how to use the `actions/upload-artifact` action to store build outputs and other generated files.
*   Master the `actions/download-artifact` action to retrieve previously uploaded artifacts in subsequent jobs or workflows.
*   Identify common use cases for artifacts, such as passing build outputs between jobs or retaining logs for debugging.
*   Implement artifact retention policies to manage storage efficiently.

#### Detailed lesson content
As your CI/CD workflows become more sophisticated, you'll often encounter scenarios where data generated in one job needs to be consumed by another, or where important outputs from a build need to be stored for later inspection or deployment. This is where GitHub Actions artifacts come into play. An artifact is essentially a file or collection of files that you can upload at the end of a workflow run and download later. Think of artifacts as your workflow's persistent storage mechanism, allowing you to carry data across different jobs, even if those jobs run on different runners, or to save critical outputs long after a workflow completes. Without artifacts, data generated in one job would be lost once that job's runner is decommissioned, making it impossible to pass build results, test reports, or compiled binaries to subsequent deployment jobs.

The primary tool for managing artifacts is the `actions/upload-artifact` action. This action takes a path to the files or directories you want to upload and an optional `name` for the artifact. It's crucial to give your artifacts meaningful names, especially if you plan to upload multiple artifacts within a single workflow run, as this name will be used to identify and retrieve the artifact later. For instance, if you're building a Node.js application, you might upload your compiled JavaScript bundles and `node_modules` as an artifact named `web-app-build`. The `path` parameter can accept single files, directories, or even glob patterns, giving you flexibility in what you choose to store. It's a common practice to upload the entire build directory, or specific outputs like `.jar` files, Docker images (after saving them to a tarball), or test reports. Remember that artifacts are stored on GitHub's servers and are subject to storage limits and retention policies, so it's wise to only upload necessary files.

Once an artifact has been uploaded, you can retrieve it in a subsequent job within the same workflow or even in a different workflow run using the `actions/download-artifact` action. To download an artifact, you typically provide the `name` of the artifact you wish to retrieve. If you omit the `name` parameter, `actions/download-artifact` will download all artifacts associated with the current workflow run. This can be useful if you know you need everything, but it's generally more efficient and clearer to specify the exact artifact you need. When downloaded, artifacts are placed in the runner's working directory, or a specified path, allowing subsequent steps in your job to access and utilize them. For example, a build job might upload a `dist` folder as `web-app-build`, and a later deployment job can download `web-app-build` to access the compiled assets for deployment to a web server.

A common mistake when working with artifacts is incorrect pathing. When uploading, ensure the `path` parameter correctly points to the files or directories relative to the runner's workspace. Similarly, when downloading, understand that the artifact will be extracted into the current working directory of the step, or a specified `path`. If you upload a directory, that directory structure will be preserved upon download. Another pitfall is forgetting about artifact retention. By default, artifacts are retained for 90 days, but you can configure this duration using the `retention-days` input for `actions/upload-artifact`. For sensitive or very large artifacts, you might want a shorter retention period, while for critical build logs or compliance-related outputs, a longer period might be necessary. Always consider the security implications of storing artifacts, especially if they contain sensitive data, and ensure appropriate access controls are in place (though GitHub Actions artifacts are generally only accessible to users with repository access).

Consider a practical scenario: you have a workflow that builds a frontend application and runs unit tests. If the tests pass, you want to deploy this application. Instead of rebuilding the application in the deployment job (which is inefficient and can lead to inconsistencies), you can upload the build output as an artifact from the build job. The deployment job then simply downloads this artifact and proceeds with deployment. This ensures that the exact same build that passed tests is the one being deployed. This pattern is fundamental for robust CI/CD pipelines, guaranteeing consistency and efficiency by separating the build phase from the deployment phase and linking them via artifacts.

```yaml
name: Build and Deploy Frontend

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build frontend
        run: npm run build # This creates a 'dist' directory

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: frontend-build-assets
          path: dist/ # Uploads the entire 'dist' directory
          retention-days: 5 # Retain for 5 days

  deploy:
    needs: build # This job depends on the 'build' job
    runs-on: ubuntu-latest
    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: frontend-build-assets
          path: ./downloaded-assets # Artifacts will be downloaded into this directory

      - name: List downloaded files
        run: ls -R ./downloaded-assets # Verify the contents

      - name: Deploy to hosting
        # In a real scenario, this would involve commands to deploy
        # e.g., using an AWS S3 sync, Netlify CLI, etc.
        run: echo "Deploying assets from ./downloaded-assets to production..."
        # Example: aws s3 sync ./downloaded-assets s3://my-production-bucket --delete
```
In this example, the `build` job creates a `dist` directory containing the compiled frontend assets. It then uploads this entire directory as an artifact named `frontend-build-assets`. The `deploy` job, which only runs after `build` completes successfully, downloads this artifact. Notice how `needs: build` ensures the correct order of execution. The downloaded assets are placed into a `./downloaded-assets` directory on the runner, ready for the deployment step. This modular approach significantly improves workflow efficiency and reliability.

#### Key concepts
*   **Artifact:** A file or collection of files generated during a workflow run that can be stored and retrieved later.
*   **`actions/upload-artifact`:** A GitHub Action used to store files as artifacts from a workflow run.
*   **`actions/download-artifact`:** A GitHub Action used to retrieve previously uploaded artifacts from a workflow run.
*   **Retention Policy:** The duration for which an artifact is stored on GitHub's servers before being automatically deleted.
*   **Workflow Consistency:** Ensuring that the exact same build output that passed tests is the one deployed, often achieved by passing artifacts between jobs.

#### Hands-on activity
**Activity: Build and Test a Python Application, then Store Reports**

Create a GitHub Actions workflow that performs the following steps:
1.  Checks out your repository.
2.  Sets up Python.
3.  Installs `pytest` and `pytest-html`.
4.  Creates a simple Python script (e.g., `test_app.py`) with a few basic tests.
5.  Runs `pytest` to execute tests and generate an HTML test report.
6.  Uploads the generated HTML test report as an artifact named `test-report`.
7.  In a *separate job*, download the `test-report` artifact and list its contents to verify.

**`test_app.py` (Starter Code):**
```python
# test_app.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_subtract():
    assert subtract(5, 3) == 2
    assert subtract(3, 5) == -2
    assert subtract(0, 0) == 0
```

**Workflow Template (`.github/workflows/python-test-artifact.yml`):**
```yaml
name: Python Test and Artifact Upload

on:
  push:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          pip install pytest pytest-html

      - name: Create test file
        run: |
          echo "def add(a, b): return a + b" > test_app.py
          echo "def subtract(a, b): return a - b" >> test_app.py
          echo "def test_add(): assert add(1, 2) == 3" >> test_app.py
          echo "def test_subtract(): assert subtract(5, 3) == 2" >> test_app.py
          # Add more test content from the starter code here if needed

      - name: Run tests and generate report
        run: pytest --html=report.html --self-contained-html

      - name: Upload test report artifact
        uses: actions/upload-artifact@v4
        with:
          name: test-report
          path: report.html
          retention-days: 1

  download-report:
    needs: build-and-test
    runs-on: ubuntu-latest
    steps:
      - name: Download test report artifact
        uses: actions/download-artifact@v4
        with:
          name: test-report
          path: ./downloaded-reports

      - name: List downloaded files
        run: ls -R ./downloaded-reports
```

#### Assessment idea
1.  **Question:** A workflow has two jobs: `build` and `deploy`. The `build` job generates a `build_output.zip` file in the `dist/` directory. How would you ensure this `build_output.zip` is available for the `deploy` job to use, and what is a good name for the artifact?
    *   **Correct Answer:** In the `build` job, you would use the `actions/upload-artifact@v4` action. The `path` parameter should be `dist/build_output.zip` and a good `name` for the artifact would be `application-package`.
        ```yaml
        # In the 'build' job
        - name: Upload application package
          uses: actions/upload-artifact@v4
          with:
            name: application-package
            path: dist/build_output.zip
        ```
        In the `deploy` job, you would then use `actions/download-artifact@v4` with `name: application-package` to retrieve it.
        ```yaml
        # In the 'deploy' job
        - name: Download application package
          uses: actions/download-artifact@v4
          with:
            name: application-package
            path: ./downloaded-app
        ```
        This ensures the `deploy` job receives the exact same `build_output.zip` produced by the `build` job.

2.  **Question:** You've configured an artifact to be retained for 7 days. After 8 days, you notice the artifact is no longer available. What is the most likely reason for this, and how could you have prevented it if you needed it for longer?
    *   **Correct Answer:** The artifact was automatically deleted because its retention period expired. The `retention-days` parameter in the `actions/upload-artifact` action specifies how long GitHub will store the artifact. Since it was set to 7 days, it was purged after 8 days. To prevent this, you would need to increase the `retention-days` value when uploading the artifact, for example, `retention-days: 30` for 30 days. It's important to balance retention needs with storage costs and data hygiene.

#### AI generation note
Create a 12-minute interactive video tutorial. Start by explaining artifacts with a simple analogy (e.g., passing a sealed package between different workers). Then, live-code the Python test report example, showing the `test_app.py` file, the workflow YAML, and the execution in the GitHub Actions UI. Highlight the `upload-artifact` step, then switch to the `download-artifact` job. Use side-by-side code editor and GitHub UI views. Include a visual overlay explaining the `retention-days` parameter. Conclude with a mini-quiz asking about artifact naming best practices and the purpose of `retention-days`.

---

### Chapter 4.2 — Introduction to GitHub Environments

#### Learning objectives
*   Define what a GitHub Environment is and its role in secure and controlled deployments.
*   Understand how to configure environments within your GitHub repository settings.
*   Learn to apply protection rules to environments, including manual approval and waiting timers.
*   Discover how to manage environment-specific secrets to secure sensitive deployment credentials.
*   Explain the benefits of using environments for different stages of your software delivery lifecycle.

#### Detailed lesson content
As you progress from simple CI workflows to full-fledged CI/CD pipelines, you'll inevitably need to deploy your applications to different stages: development, staging, production, and perhaps even review apps for pull requests. Each of these stages often requires different configurations, access controls, and levels of scrutiny before deployment. GitHub Environments provide a powerful mechanism to formalize and secure these deployment targets directly within your repository. An environment is a logical grouping of deployment settings that you can define and associate with specific jobs in your GitHub Actions workflows. It allows you to enforce deployment policies, manage environment-specific secrets, and track deployments more effectively.

To begin using environments, you first need to configure them in your repository settings. Navigate to your repository on GitHub, then go to `Settings > Environments`. Here, you can create new environments, giving them descriptive names like `Staging`, `Production`, `Development`, or `UAT`. Once an environment is created, you can start defining its protection rules. These rules are critical for ensuring that deployments to sensitive environments are properly controlled. The most common protection rules include:

1.  **Required reviewers:** This rule mandates that specific users or teams must approve a workflow run before it can deploy to the environment. This is invaluable for production environments, where a human check is often necessary to prevent accidental or unauthorized deployments. You can specify multiple reviewers, and choose whether one or all of them must approve.
2.  **Wait timer:** This rule introduces a delay before a job that targets the environment can proceed. For example, you might set a 30-minute wait timer for a production deployment, giving you a window to manually cancel the deployment if an issue is discovered immediately after the workflow starts. This provides a safety net and allows for last-minute checks.

These protection rules are enforced by GitHub before a job targeting that environment is allowed to run. If a job attempts to deploy to an environment with protection rules, the workflow run will pause, and a notification will be sent to the required reviewers or the timer will begin. This built-in gatekeeping is a significant security and operational enhancement for your deployment pipelines.

Beyond protection rules, environments also offer a secure way to manage environment-specific secrets. Just as you have repository-level secrets, you can define secrets that are only accessible to jobs targeting a particular environment. This is incredibly useful for storing sensitive credentials like API keys, database connection strings, or cloud provider access tokens that should only be used when deploying to a specific environment. For instance, your `Production` environment might have a `PROD_DB_CONNECTION_STRING` secret, while your `Staging` environment has a `STAGING_DB_CONNECTION_STRING`. By scoping secrets to environments, you reduce the risk of accidentally using production credentials in a staging deployment or vice-versa, and you centralize the management of these sensitive values.

A common mistake is to rely solely on repository secrets for all sensitive data. While repository secrets are fine for general workflow use, environment secrets provide an additional layer of isolation and control, especially when combined with protection rules. For example, if a workflow is compromised, environment secrets are only exposed if the job targeting that environment successfully passes all protection rules. Another pitfall is not thoroughly testing the protection rules. Always perform a test deployment to a non-critical environment with similar rules to ensure they behave as expected before applying them to your most critical environments.

The benefits of using GitHub Environments are substantial. They provide a clear, auditable trail of deployments to specific stages, enhance security by isolating secrets and enforcing approval gates, and bring structure to your CI/CD process. By clearly defining `Staging` and `Production` environments, you establish a consistent framework for how your applications are built, tested, and released, making your deployment pipelines more robust, reliable, and secure. This structured approach is a cornerstone of modern DevOps practices, ensuring that deployments are predictable and well-governed.

Consider a scenario where you're deploying a critical microservice. You'd likely have a `Staging` environment for integration testing and a `Production` environment for live traffic. The `Staging` environment might have a simple wait timer, while the `Production` environment would definitely require manual approval from a specific team lead and a longer wait timer. Both environments would have their own distinct set of secrets for database access, API keys, and deployment credentials, ensuring that the staging deployment uses staging resources and the production deployment uses production resources, completely isolated from each other. This clear separation and control are what make GitHub Environments so powerful.

#### Key concepts
*   **Environment:** A logical deployment target (e.g., Staging, Production) defined within a GitHub repository to manage deployment settings and protection rules.
*   **Protection Rules:** Configurable safeguards for an environment, such as required reviewers or wait timers, that must be satisfied before a job can proceed.
*   **Required Reviewers:** Specific users or teams designated to approve a workflow run before deployment to a protected environment.
*   **Wait Timer:** A configurable delay imposed on a job targeting an environment, providing a window for manual cancellation or last-minute checks.
*   **Environment Secrets:** Sensitive key-value pairs stored at the environment level, accessible only to jobs targeting that specific environment.

#### Hands-on activity
**Activity: Configure a Staging Environment with Protection Rules**

In your GitHub repository, perform the following steps:
1.  Navigate to `Settings > Environments`.
2.  Click "New environment" and name it `Staging`.
3.  Configure a "Required reviewers" protection rule for the `Staging` environment. Add yourself (or a dummy user if you have one) as the reviewer.
4.  Configure a "Wait timer" protection rule for the `Staging` environment, setting it to 5 minutes.
5.  Add an environment secret named `STAGING_API_KEY` with a dummy value (e.g., `my-staging-api-key-123`).
6.  *Do not create a workflow yet.* This activity focuses solely on environment configuration in the GitHub UI. Take screenshots of your configured environment settings.

#### Assessment idea
1.  **Question:** Your team wants to ensure that all deployments to the `Production` environment are reviewed by at least one member of the `DevOps Team` before proceeding. Additionally, they want a 10-minute window after a deployment workflow starts to allow for emergency cancellations. How would you configure the `Production` environment in GitHub to meet these requirements?
    *   **Correct Answer:** You would navigate to `Settings > Environments` in the GitHub repository, then create or select the `Production` environment. Under "Deployment protection rules," you would add:
        *   "Required reviewers": Select the `DevOps Team`.
        *   "Wait timer": Set the duration to 10 minutes.
        This configuration ensures that any job targeting the `Production` environment will pause for 10 minutes, and then require approval from a member of the `DevOps Team` before it can continue.

2.  **Question:** You have a `DB_PASSWORD` that needs to be used for deploying to your `Staging` database and a different `DB_PASSWORD` for your `Production` database. Both are highly sensitive. Where is the most secure and appropriate place to store these passwords within GitHub for use by GitHub Actions, and why?
    *   **Correct Answer:** The most secure and appropriate place to store these passwords is as **environment secrets** within the respective `Staging` and `Production` GitHub Environments.
        *   For the `Staging` database password, you would create an environment secret named `DB_PASSWORD` (or `STAGING_DB_PASSWORD`) within the `Staging` environment.
        *   For the `Production` database password, you would create an environment secret named `DB_PASSWORD` (or `PROD_DB_PASSWORD`) within the `Production` environment.
        This approach provides superior security because:
        1.  **Scope:** Environment secrets are only accessible to jobs that explicitly target that specific environment, preventing accidental exposure or use in other environments.
        2.  **Isolation:** They are separate from repository secrets, adding an extra layer of isolation.
        3.  **Protection Rules:** If the environment has protection rules (like required reviewers), the secrets are not exposed until those rules are satisfied, providing an additional gate.

#### AI generation note
Create an 8-minute animated walkthrough video. Start by showing the GitHub repository settings page and guide the learner through creating a new environment named "Staging". Visually demonstrate adding a "Required reviewers" rule, highlighting where to select users/teams, and then adding a "Wait timer" rule, explaining its purpose. Show how to add an environment secret (`STAGING_DB_USER`) and emphasize its scope. Use clear UI annotations and zoom-ins. Conclude with a quick summary slide on the benefits of environments for security and control.

---

### Chapter 4.3 — Deploying to Environments with GitHub Actions

#### Learning objectives
*   Integrate GitHub Environments into your workflow jobs using the `environment` keyword.
*   Understand how workflow jobs interact with environment protection rules, including manual approvals.
*   Implement `concurrency` to manage simultaneous deployments to the same environment.
*   Track deployment status and history through the GitHub UI.
*   Design a workflow that deploys a simple application to a `Staging` environment with approval.

#### Detailed lesson content
Now that you understand how to configure GitHub Environments, it's time to integrate them into your GitHub Actions workflows to orchestrate controlled deployments. The magic happens with the `environment` keyword, which you can add at the job level within your workflow YAML. When a job includes the `environment` keyword, it signals to GitHub that this job intends to deploy to, or interact with, the specified environment. This is the trigger that activates any protection rules (like required reviewers or wait timers) you've configured for that environment.

Let's say you have a `deploy-to-staging` job. By adding `environment: Staging` to this job, GitHub will check the `Staging` environment's protection rules before allowing the job to execute. If `Staging` has a "Required reviewers" rule, the workflow run will pause at this job, and a banner will appear in the GitHub UI prompting the designated reviewers for approval. If there's a "Wait timer," the workflow will pause for the specified duration. This integration is seamless and provides a robust gatekeeping mechanism for your deployments. It's important to remember that environment protection rules apply *before* the job starts, meaning the job's steps won't execute until all rules are satisfied.

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Build application
        run: echo "Building application..."
        # ... (actual build steps, e.g., npm run build, docker build)
      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: app-package
          path: ./app-dist # Assuming build output is in app-dist

  deploy-to-staging:
    needs: build # This job depends on the 'build' job
    runs-on: ubuntu-latest
    environment: Staging # This job targets the Staging environment
    steps:
      - name: Download application package
        uses: actions/download-artifact@v4
        with:
          name: app-package
          path: ./app-to-deploy

      - name: Access Staging secret
        run: echo "Staging API Key: ${{ secrets.STAGING_API_KEY }}"
        # This secret must be configured in the Staging environment settings

      - name: Deploy to Staging
        run: echo "Deploying app from ./app-to-deploy to Staging..."
        # ... (actual deployment commands, e.g., ssh, kubectl, aws s3 sync)
```
In this example, the `deploy-to-staging` job explicitly targets the `Staging` environment. If `Staging` has a required reviewer, the workflow will pause until approval is granted. Notice how `secrets.STAGING_API_KEY` is accessed. When a job targets an environment, it gains access to that environment's secrets, along with repository secrets. This allows you to securely inject environment-specific credentials into your deployment scripts.

Another critical aspect of deployment is managing `concurrency`. Imagine a scenario where multiple developers push changes to `main` simultaneously, triggering multiple deployment workflows to the `Production` environment. If not managed, these concurrent deployments could lead to race conditions, overwriting issues, or inconsistent states. The `concurrency` keyword helps prevent this by ensuring that only one workflow run (or a specific job within a run) can execute a particular concurrent group at a time. You can define a `group` name and a `cancel-in-progress` strategy.

```yaml
name: CI/CD Pipeline with Concurrency

on:
  push:
    branches:
      - main

jobs:
  # ... (build job as above)

  deploy-to-production:
    needs: build
    runs-on: ubuntu-latest
    environment: Production
    concurrency:
      group: production-deployment # Only one 'production-deployment' can run at a time
      cancel-in-progress: true    # Cancel any currently running 'production-deployment' if a new one starts
    steps:
      - name: Download application package
        uses: actions/download-artifact@v4
        with:
          name: app-package
          path: ./app-to-deploy

      - name: Deploy to Production
        run: echo "Deploying app from ./app-to-deploy to Production..."
        # ... (actual deployment commands)
```
In this `deploy-to-production` job, `concurrency.group: production-deployment` ensures that if a new workflow run attempts to start this job while another `production-deployment` job is already running, the new one will wait. `cancel-in-progress: true` takes this a step further: if a new workflow run starts, any *currently running* job in the `production-deployment` group will be canceled, and the new job will proceed. This is often desired for production deployments, where you usually want the *latest* successful build to be deployed, rather than waiting for an older one to finish.

Common mistakes include forgetting to define `needs` for deployment jobs, which can lead to deployments starting before builds are complete, or misconfiguring `concurrency` groups, leading to unexpected cancellations or blocking. Always test your `concurrency` settings in a non-critical environment first. Also, remember that environment secrets are *only* available to jobs that explicitly use the `environment` keyword. If you try to access an environment secret in a job without this keyword, it will fail.

After a job targeting an environment completes, GitHub provides excellent visibility into the deployment status. You can see a list of deployments for each environment directly in the GitHub UI (`Settings > Environments > [Your Environment] > View deployments`). This deployment history shows which workflow run deployed what, when, and by whom (if an approval was involved), providing a valuable audit trail and helping you track changes to your environments. This comprehensive tracking, combined with protection rules and concurrency control, forms the backbone of a robust and secure CI/CD pipeline.

#### Key concepts
*   **`environment` keyword:** Used in a job definition to associate the job with a specific GitHub Environment, triggering its protection rules and granting access to its secrets.
*   **Deployment Approval:** The process where designated reviewers must manually approve a workflow job before it can deploy to a protected environment.
*   **`concurrency` keyword:** Used to control how many workflow runs or jobs can execute simultaneously within a defined group, preventing race conditions.
*   **`group` (concurrency):** A unique identifier for a set of jobs or workflows that should run concurrently or sequentially.
*   **`cancel-in-progress` (concurrency):** A concurrency strategy that cancels any currently running job in a group if a new job in the same group starts.

#### Hands-on activity
**Activity: Implement a Staging Deployment with Approval and Concurrency**

Building on the previous activity where you configured a `Staging` environment with a reviewer and wait timer, now create a workflow that deploys to it.

1.  Create a file `.github/workflows/deploy-staging.yml`.
2.  Define a `build` job that simulates building an application and uploads an artifact named `web-app-dist`.
3.  Define a `deploy-staging` job that:
    *   `needs` the `build` job.
    *   Targets the `Staging` environment using the `environment` keyword.
    *   Uses `concurrency` with a group name like `staging-deploy` and `cancel-in-progress: true`.
    *   Downloads the `web-app-dist` artifact.
    *   Accesses the `STAGING_API_KEY` environment secret (created in the previous activity) and prints it.
    *   Simulates a deployment by printing a message like "Deploying web-app-dist to Staging...".
4.  Push this workflow to your `main` branch.
5.  Observe the workflow run in the GitHub Actions UI. You should see the `deploy-staging` job pause, awaiting your approval and/or waiting for the timer. Approve the deployment.
6.  Trigger another push to `main` while the first deployment is still awaiting approval or waiting for the timer. Observe how `concurrency` handles this.

**Workflow Template (`.github/workflows/deploy-staging.yml`):**
```yaml
name: Deploy to Staging

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      artifact_id: ${{ steps.upload.outputs.artifact_id }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Simulate build output
        run: |
          mkdir -p web-app-dist
          echo "<h1>Hello from Staging!</h1>" > web-app-dist/index.html
          echo "Build completed at $(date)" > web-app-dist/build-info.txt

      - name: Upload web-app-dist artifact
        id: upload
        uses: actions/upload-artifact@v4
        with:
          name: web-app-dist
          path: web-app-dist/
          retention-days: 1

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: Staging # Link to your configured Staging environment
    concurrency:
      group: staging-deploy-${{ github.ref }} # Unique group per branch, or just 'staging-deploy' for single-branch
      cancel-in-progress: true
    steps:
      - name: Download web-app-dist artifact
        uses: actions/download-artifact@v4
        with:
          name: web-app-dist
          path: ./app-for-staging

      - name: Verify downloaded content
        run: ls -R ./app-for-staging

      - name: Access Staging environment secret
        run: echo "Using Staging API Key: ${{ secrets.STAGING_API_KEY }}"
        # This secret must be defined in your GitHub 'Staging' environment settings

      - name: Simulate deployment to Staging
        run: |
          echo "Initiating deployment to Staging Environment..."
          echo "Deploying files from ./app-for-staging..."
          # In a real scenario, this would be your actual deployment command
          sleep 30 # Simulate deployment time
          echo "Deployment to Staging completed successfully!"
```

#### Assessment idea
1.  **Question:** A workflow has a job named `deploy-prod` that needs to deploy to the `Production` environment. This environment has a "Required reviewers" rule. What keyword must be added to the `deploy-prod` job definition in the workflow YAML to ensure this rule is enforced, and how will the workflow behave when it reaches this job?
    *   **Correct Answer:** The `environment` keyword must be added to the `deploy-prod` job definition, like so: `environment: Production`. When the workflow reaches the `deploy-prod` job, it will pause execution. A banner will appear in the GitHub Actions UI indicating that the job is awaiting approval from the designated reviewers for the `Production` environment. The job's steps will not begin until one of the required reviewers approves the deployment.

2.  **Question:** You have a critical `deploy-to-prod` job. Multiple pushes to the `main` branch could trigger this job, and you want to ensure that only the *latest* deployment attempt to production proceeds, canceling any older, still-running production deployments. How would you configure `concurrency` for this job?
    *   **Correct Answer:** You would configure the `concurrency` keyword within the `deploy-to-prod` job as follows:
        ```yaml
        jobs:
          deploy-to-prod:
            # ... other job configurations
            concurrency:
              group: production-deployment-exclusive
              cancel-in-progress: true
            # ... job steps
        ```
        The `group` parameter provides a unique identifier for this set of concurrent jobs. By setting `cancel-in-progress: true`, if a new workflow run attempts to start a job in the `production-deployment-exclusive` group while another is already running (or waiting), the older one will be canceled, and the new one will take its place. This ensures only the latest deployment proceeds.

#### AI generation note
Create a 15-minute live coding demonstration. Start with a pre-configured `Staging` environment (from the previous chapter). Walk through creating the `deploy-staging.yml` workflow, explaining each section: `needs`, `environment`, `concurrency`, and how environment secrets are accessed. Trigger a push and show the workflow pausing for approval in the GitHub UI. Demonstrate approving the job and then show the deployment steps executing. Trigger a second push quickly to illustrate the `cancel-in-progress` behavior of `concurrency`. Use split-screen views for code and GitHub UI. Include a visual overlay explaining the flow of approval.

---

### Chapter 4.4 — Advanced Environment Configuration and Review Apps

#### Learning objectives
*   Design and implement dynamic environments for pull requests, commonly known as "review apps."
*   Utilize `github.event.pull_request.head.ref` and other context variables to create unique environment names.
*   Understand the lifecycle of review apps, including creation, update, and destruction.
*   Differentiate between environment variables and environment secrets, and apply best practices for their use.
*   Implement a workflow that deploys a preview application for each pull request and cleans it up on PR close.

#### Detailed lesson content
While static environments like `Staging` and `Production` are essential, modern development often benefits from more ephemeral, dynamic environments. These are particularly useful for pull requests, where each feature branch might need its own isolated preview of the application before merging. These are often called "review apps" or "preview environments." GitHub Actions, combined with environments, provides a powerful way to automate the creation and management of these dynamic environments, significantly streamlining the code review process and enabling early testing in a realistic setting.

The core idea behind review apps is to spin up a temporary, isolated deployment of your application whenever a new pull request is opened or updated. This allows developers, designers, and stakeholders to interact with the proposed changes in a live environment without affecting staging or production. Once the pull request is merged or closed, the review app environment is automatically torn down. To achieve this, we leverage GitHub's context variables, specifically `github.event.pull_request.head.ref` or `github.head_ref`, which provides the name of the branch for the pull request. This branch name can then be used to construct a unique environment name, ensuring each PR gets its own isolated deployment.

```yaml
name: Deploy Review App

on:
  pull_request:
    types: [opened, synchronize, closed] # Trigger on PR open, update, and close

jobs:
  deploy-review-app:
    if: github.event_name == 'pull_request' && github.event.action != 'closed'
    runs-on: ubuntu-latest
    environment:
      name: pr-${{ github.event.pull_request.number }} # Dynamic environment name based on PR number
      url: ${{ steps.deploy.outputs.url }} # Optional: URL to the deployed review app
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.ref }} # Checkout the PR branch

      - name: Simulate build and deploy
        id: deploy
        run: |
          echo "Deploying review app for PR #${{ github.event.pull_request.number }} from branch ${{ github.event.pull_request.head.ref }}"
          # In a real scenario, this would deploy to a cloud service (e.g., Netlify, Vercel, AWS Amplify)
          # and output the URL of the deployed app.
          # Example: netlify deploy --dir=dist --prod --json | jq -r .url
          echo "url=https://pr-${{ github.event.pull_request.number }}.example.com" >> $GITHUB_OUTPUT # Set output for environment URL

      - name: Comment on PR with URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀 Review app deployed! Check it out here: ${{ steps.deploy.outputs.url }}`
            })

  destroy-review-app:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    environment:
      name: pr-${{ github.event.pull_request.number }} # Target the same dynamic environment
    steps:
      - name: Simulate teardown
        run: |
          echo "Tearing down review app for PR #${{ github.event.pull_request.number }}"
          # In a real scenario, this would delete the deployed resources
          # Example: netlify deploy --dir=dist --prod --json | jq -r .url
          # Example: aws cloudformation delete-stack --stack-name pr-${{ github.event.pull_request.number }}-stack
```
In this example, the `deploy-review-app` job runs on `opened` or `synchronize` (updates) events. It creates an environment named `pr-XXX` (where XXX is the PR number). The `url` property of the environment can be set dynamically, which GitHub will then display on the pull request page for easy access. The `destroy-review-app` job runs when the PR is `closed`, targeting the same dynamic environment to clean up resources. This `if` condition logic is crucial for controlling when jobs run.

When dealing with dynamic environments, it's vital to differentiate between environment variables and environment secrets.
*   **Environment variables (`env` context):** These are non-sensitive values that can change based on the environment (e.g., `API_BASE_URL=https://api.staging.com`). They are typically defined at the workflow, job, or step level using the `env` keyword.
*   **Environment secrets (`secrets` context):** These are highly sensitive values (e.g., `DB_PASSWORD`, `AWS_SECRET_ACCESS_KEY`) that are stored securely in GitHub's environment settings and are only exposed to jobs targeting that specific environment.

For review apps, you might use environment variables to set the base URL of a backend API specific to that review app's deployment, while still using environment secrets for cloud provider credentials that are shared across all review app deployments but still scoped to an "All Review Apps" environment, for example. Best practices dictate that any sensitive data should *always* be stored as a secret, never hardcoded or stored as a plain environment variable in the workflow YAML.

A common mistake with review apps is neglecting the teardown process. If you don't explicitly clean up the resources created for each review app, you can quickly accumulate orphaned deployments, leading to increased cloud costs and resource sprawl. Always ensure your `on: pull_request: types: [closed]` workflow includes steps to de-provision the dynamic environment. Another pitfall is not making environment names unique enough, leading to conflicts if two PRs somehow generate the same environment name (though `pr-${{ github.event.pull_request.number }}` is usually safe).

Advanced environment configurations might also involve using different runners or runner groups for specific environments (e.g., self-hosted runners for production deployments within a private network). You can specify `runs-on: self-hosted, linux, x64` in your job definition if your environment requires a specific type of runner. This provides even greater control over where your deployments execute, adhering to security and compliance requirements. By mastering dynamic environments and understanding the nuances of variables and secrets, you can build highly flexible, efficient, and secure CI/CD pipelines that adapt to your development workflow.

#### Key concepts
*   **Review Apps (Preview Environments):** Ephemeral, isolated deployments of an application created for each pull request to facilitate testing and review.
*   **Dynamic Environment:** An environment whose name or configuration is generated programmatically during a workflow run, often using context variables.
*   **`github.event.pull_request.head.ref`:** A GitHub context variable that provides the name of the branch from which a pull request originates.
*   **Environment Variables (`env`):** Non-sensitive key-value pairs accessible to a job or step, typically defined directly in the workflow.
*   **Environment Secrets (`secrets`):** Sensitive key-value pairs stored securely in GitHub environment settings, accessible only to jobs targeting that environment.
*   **Lifecycle Management:** The process of creating, updating, and destroying dynamic environments in response to pull request events.

#### Hands-on activity
**Activity: Create a Workflow for Dynamic Review Apps**

Create a workflow that deploys a simple "Hello, PR!" web page as a review app for every pull request and tears it down when the PR is closed.

1.  Create a new file `.github/workflows/review-app.yml`.
2.  Configure the workflow to trigger on `pull_request` events of types `opened`, `synchronize`, and `closed`.
3.  Define a `deploy-review-app` job that:
    *   Runs only if the PR is `opened` or `synchronize`.
    *   Uses a dynamic environment name like `pr-${{ github.event.pull_request.number }}`.
    *   Simulates creating a simple `index.html` file with the PR number and branch name.
    *   Simulates deployment and sets an `outputs.url` for the environment (e.g., `https://pr-${{ github.event.pull_request.number }}.yourdomain.com`).
    *   Adds a comment to the pull request with the deployed URL.
4.  Define a `destroy-review-app` job that:
    *   Runs only if the PR is `closed`.
    *   Targets the same dynamic environment `pr-${{ github.event.pull_request.number }}`.
    *   Simulates tearing down the environment by printing a message.
5.  Create a new branch, make a small change, and open a pull request to `main`. Observe the review app deployment.
6.  Merge or close the pull request and observe the teardown job.

**Workflow Template (`.github/workflows/review-app.yml`):**
```yaml
name: Review App Deployment

on:
  pull_request:
    types: [opened, synchronize, closed]

jobs:
  deploy-review-app:
    if: github.event_name == 'pull_request' && github.event.action != 'closed'
    runs-on: ubuntu-latest
    environment:
      name: pr-${{ github.event.pull_request.number }}
      url: ${{ steps.set-url.outputs.url }} # This will be displayed on the PR
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.ref }}

      - name: Create simulated web content
        run: |
          mkdir -p build
          echo "<h1>Hello from PR #${{ github.event.pull_request.number }}</h1>" > build/index.html
          echo "<p>Branch: ${{ github.event.pull_request.head.ref }}</p>" >> build/index.html
          echo "<p>Deployed at: $(date)</p>" >> build/index.html

      - name: Simulate deployment and set URL
        id: set-url
        run: |
          # In a real scenario, this would be a cloud deployment command
          # that returns the public URL of the deployed app.
          # For this activity, we'll simulate a URL.
          REVIEW_APP_URL="https://pr-${{ github.event.pull_request.number }}.cohortia-demo.com"
          echo "Simulating deployment to: $REVIEW_APP_URL"
          echo "url=$REVIEW_APP_URL" >> $GITHUB_OUTPUT # Set the URL output for the environment

      - name: Comment on PR with Review App URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀 Review app for PR #${{ github.event.pull_request.number }} deployed! Check it out here: ${{ steps.set-url.outputs.url }}`
            })

  destroy-review-app:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    environment:
      name: pr-${{ github.event.pull_request.number }} # Target the same dynamic environment for teardown
    steps:
      - name: Simulate review app teardown
        run: |
          echo "Tearing down review app for PR #${{ github.event.pull_request.number }}..."
          # In a real scenario, this would delete the deployed resources
          sleep 10 # Simulate teardown time
          echo "Review app for PR #${{ github.event.pull_request.number }} successfully torn down."
```

#### Assessment idea
1.  **Question:** You want to create a review app for every pull request, and each review app needs a unique URL. Which GitHub context variable would you use to ensure the environment name and URL are unique for each PR, and how would you incorporate it into the `environment` definition?
    *   **Correct Answer:** You would use `github.event.pull_request.number`. This provides the unique number of the pull request. You can incorporate it into the `environment` definition like this:
        ```yaml
        jobs:
          deploy-review-app:
            environment:
              name: pr-${{ github.event.pull_request.number }}
              url: https://pr-${{ github.event.pull_request.number }}.yourdomain.com
        ```
        This creates an environment with a name like `pr-123` and a corresponding URL, ensuring uniqueness for each pull request.

2.  **Question:** Your review app deployment workflow needs to know the API endpoint for a shared development backend, which is `https://api.dev.example.com`. It also needs an `AWS_ACCESS_KEY_ID` to deploy resources. Which of these should be stored as an environment variable and which as an environment secret, and why?
    *   **Correct Answer:**
        *   The API endpoint (`https://api.dev.example.com`) should be stored as an **environment variable**. It's not sensitive information and can be defined directly in the workflow YAML using the `env` keyword at the job or step level. For example:
            ```yaml
            jobs:
              deploy-review-app:
                env:
                  API_BASE_URL: https://api.dev.example.com
            ```
        *   The `AWS_ACCESS_KEY_ID` should be stored as an **environment secret**. This is highly sensitive credential information that should never be exposed in plain text in your repository. It should be configured in the GitHub Environment settings for your review app environment (or a parent environment if all review apps share the same AWS credentials) and accessed via `secrets.AWS_ACCESS_KEY_ID` in the workflow. This ensures it's encrypted and only exposed to the specific job targeting that environment.

#### AI generation note
Create a 10-minute interactive code demo. Begin by explaining the concept of review apps and their benefits. Then, live-code the `review-app.yml` workflow, focusing on the `on: pull_request` trigger, the `if` conditions for deploy/destroy, and the dynamic `environment.name` using `github.event.pull_request.number`. Show how to create a PR, watch the workflow deploy, and see the comment on the PR with the dynamic URL. Finally, demonstrate closing the PR and the teardown job executing. Use a split-screen view for the code editor and the GitHub PR/Actions UI. Include a reflection prompt asking learners to consider the security implications of environment variables vs. secrets.

---

## Module 5: Runners, Custom Actions, and Reusable Workflows

This module delves into the advanced capabilities of GitHub Actions, empowering you to customize your CI/CD environment, extend functionality with custom code, and streamline your workflows through reusability. You'll learn how to choose and manage the right execution environments for your jobs, build and share your own actions, and structure your automation for maximum efficiency and maintainability.

---

### Chapter 5.1 — Understanding GitHub-Hosted and Self-Hosted Runners

#### Learning objectives
*   Differentiate between GitHub-hosted and self-hosted runners in GitHub Actions.
*   Identify the key characteristics, benefits, and limitations of GitHub-hosted runners.
*   Determine appropriate use cases for employing self-hosted runners in CI/CD pipelines.
*   Recognize common considerations and potential pitfalls when choosing a runner type.

#### Detailed lesson content
When a job in your GitHub Actions workflow executes, it needs an environment to run on. This environment is provided by a *runner*, which is essentially a server with the GitHub Actions runner application installed. Runners listen for available jobs, execute them, and report the results back to GitHub. Understanding the types of runners available is fundamental to designing efficient, secure, and cost-effective CI/CD pipelines.

GitHub offers two primary categories of runners: GitHub-hosted runners and self-hosted runners. GitHub-hosted runners are virtual machines provided and managed by GitHub. When you specify `runs-on: ubuntu-latest`, `windows-latest`, or `macos-latest` in your workflow, you are requesting a GitHub-hosted runner. These runners come pre-installed with a wide array of tools, SDKs, and software, making them incredibly convenient for most common development tasks. They are automatically updated, scaled, and maintained by GitHub, meaning you don't have to worry about infrastructure management. This "zero-ops" approach is a significant advantage, allowing teams to focus purely on their workflow logic rather than server maintenance. Each job runs in a fresh, isolated virtual environment, ensuring consistency and preventing state leakage between runs. However, GitHub-hosted runners operate within GitHub's network and security boundaries, and their specifications (CPU, RAM, storage) are standardized. While generally sufficient, they might not always meet the unique demands of highly specialized or resource-intensive workloads, or those requiring access to private network resources.

Self-hosted runners, on the other hand, are machines that you provision and manage yourself. These can be physical servers, virtual machines, or even containers running in your data center, on your local machine, or in a cloud provider of your choice. You install the GitHub Actions runner application on these machines, and they then register with your GitHub repository, organization, or enterprise account. The primary benefit of self-hosted runners is the unparalleled control they offer. You can customize the hardware specifications, operating system, and pre-installed software to precisely match your project's requirements. This is particularly useful for tasks that demand specific hardware (like GPUs for machine learning), require access to resources within a private network (e.g., internal databases, legacy systems), or need a specific operating system or software version not readily available on GitHub-hosted runners. For example, if your application builds against a very specific version of a compiler or framework that's not standard, a self-hosted runner allows you to configure that environment exactly. Another compelling reason for self-hosted runners can be cost optimization for high-volume builds, as you pay for the infrastructure directly rather than GitHub's per-minute pricing for hosted runners, though this requires careful calculation of operational overhead.

When deciding between GitHub-hosted and self-hosted runners, consider several factors. For most open-source projects and standard application development, GitHub-hosted runners are the recommended default due to their ease of use, maintenance-free nature, and robust feature set. They are excellent for continuous integration, basic deployment tasks, and projects that don't have strict hardware or network access requirements. However, if your project involves proprietary code that must remain within your private network, requires specialized hardware or software, has very long-running jobs that could become expensive on GitHub-hosted runners, or needs to interact with internal services that are not publicly accessible, then self-hosted runners become a powerful and often necessary alternative. It's crucial to weigh the benefits of control and customization against the responsibility of managing and securing your own infrastructure. Common mistakes include underestimating the operational overhead of self-hosted runners (updates, security patches, scaling) or over-provisioning resources, leading to unnecessary costs. Always prioritize security, especially with self-hosted runners, ensuring they operate with the principle of least privilege and are properly isolated.

#### Key concepts
*   **Runner:** A server with the GitHub Actions runner application installed, responsible for executing jobs in a workflow.
*   **GitHub-hosted runner:** Virtual machines provided and managed by GitHub, offering pre-installed software and automatic scaling.
*   **Self-hosted runner:** Machines provisioned and managed by the user, offering full control over hardware, software, and network access.
*   **`runs-on` keyword:** A workflow syntax element used to specify the type of runner a job should execute on.
*   **Isolation:** The characteristic of GitHub-hosted runners where each job runs in a fresh, independent environment.

#### Hands-on activity
Create a simple GitHub Actions workflow that demonstrates the use of both GitHub-hosted and self-hosted runners (conceptually, as you won't set up a self-hosted runner yet). The workflow should have two jobs: one running on `ubuntu-latest` and another with a placeholder for a self-hosted runner.

```yaml
name: Runner Type Demonstration

on: [push]

jobs:
  github-hosted-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run on GitHub-hosted Ubuntu
        run: |
          echo "This job is running on a GitHub-hosted Ubuntu runner."
          echo "Current directory: $(pwd)"
          echo "Node.js version: $(node -v || echo 'Node.js not installed')"
          echo "Python version: $(python3 -V || echo 'Python not installed')"

  self-hosted-placeholder-job:
    # This job will fail if you don't have a self-hosted runner with this label.
    # We'll set up a real self-hosted runner in the next chapter.
    runs-on: [self-hosted, my-custom-label] # Placeholder for a self-hosted runner
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run on a self-hosted runner
        run: |
          echo "This job is intended to run on a self-hosted runner with 'my-custom-label'."
          echo "Current directory: $(pwd)"
          # You can add commands here that would be specific to your self-hosted environment
          # e.g., accessing private network resources or specific software versions.
```

#### Assessment idea
1.  **Question:** Your team needs to run a CI/CD job that compiles a legacy application using a very specific version of a proprietary compiler, which is only available on a Windows Server machine within your corporate network. Which type of GitHub Actions runner would be most appropriate for this scenario, and why?
    *   **Correct Answer:** A self-hosted runner would be most appropriate. This is because GitHub-hosted runners operate within GitHub's network and have standardized software installations, which are unlikely to include a very specific, proprietary, or legacy compiler. A self-hosted runner, managed by your team, can be configured with the exact Windows Server OS, the specific compiler version, and can access resources within your corporate network, fulfilling all the requirements.

2.  **Question:** A developer is setting up a new CI workflow for a public open-source project. The workflow involves building a standard Node.js application and running unit tests. The developer is concerned about minimizing setup and maintenance effort. Which runner type should they choose, and what is a primary advantage of this choice in this context?
    *   **Correct Answer:** The developer should choose a GitHub-hosted runner (e.g., `ubuntu-latest`). A primary advantage in this context is that GitHub-hosted runners require virtually no setup or maintenance effort from the developer. They come pre-installed with common tools like Node.js, are automatically updated, and are scaled by GitHub, allowing the developer to focus solely on the workflow logic.

#### AI generation note
Create a 12-minute animated explainer video with clear diagrams. Start with an analogy of a "task manager" (GitHub Actions) assigning tasks to different "workers" (runners). Visually compare GitHub-hosted (pre-configured, shared workspace, quick setup) vs. self-hosted (customizable, private workspace, more setup). Use split-screen to show a simple YAML workflow specifying `runs-on: ubuntu-latest` on one side and a diagram of GitHub's cloud infrastructure providing that runner on the other. Then, show `runs-on: self-hosted` and a diagram of a user's local server. Highlight pros/cons with text overlays. Include a 3-question interactive mini-quiz on runner selection scenarios.

---

### Chapter 5.2 — Setting Up and Managing Self-Hosted Runners

#### Learning objectives
*   Install and configure the GitHub Actions runner application on a Linux-based machine.
*   Register a self-hosted runner with a GitHub repository or organization.
*   Understand and apply runner labels to target specific jobs to specific self-hosted runners.
*   Implement best practices for securing and maintaining self-hosted runner environments.

#### Detailed lesson content
Having understood the 'why' behind self-hosted runners, let's now dive into the 'how'. Setting up a self-hosted runner involves a few key steps: preparing your machine, downloading and configuring the runner application, and then running it. For this demonstration, we'll focus on a Linux-based machine, which is a common choice for self-hosted runners due to its flexibility and performance. The process is similar for Windows and macOS, with slight variations in commands.

Before you begin, ensure your machine meets the basic requirements: sufficient CPU, memory, and disk space for your anticipated workloads, and network connectivity to GitHub.com. You'll also need `curl` for downloading and `tar` for extracting the runner application. It's highly recommended to create a dedicated user account for the runner application on your host machine, following the principle of least privilege. This user should only have the necessary permissions to execute your workflow jobs and nothing more, minimizing the security risk if the runner is compromised.

The first step is to download the runner application. You'll navigate to your repository's or organization's settings on GitHub, specifically to "Actions" -> "Runners" -> "New self-hosted runner". GitHub will provide you with specific `curl` and `tar` commands tailored to your operating system and architecture. For a typical Linux setup, this might look something like:

```bash
# Create a folder for the runner
mkdir actions-runner && cd actions-runner

# Download the latest runner package
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# Extract the installer
tar xzf actions-runner-linux-x64-2.311.0.tar.gz
```

After extraction, you need to configure the runner. This involves providing the URL of your GitHub repository or organization and a unique registration token, which GitHub also provides on the "New self-hosted runner" page. The `config.sh` script will guide you through this process:

```bash
# Configure the runner
./config.sh --url https://github.com/YOUR_ORG/YOUR_REPO --token A_LONG_REGISTRATION_TOKEN
```

During configuration, you'll be prompted to name your runner and assign labels. Labels are crucial for targeting specific runners from your workflows. By default, runners get labels like `self-hosted`, `Linux`, and `x64`. You can add custom labels, such as `my-gpu-runner` or `legacy-compiler-machine`, to precisely match jobs to runners. For example, if you have a runner with a specific compiler installed, you might add the label `legacy-compiler`. Your workflow job can then specify `runs-on: [self-hosted, legacy-compiler]` to ensure it only runs on that particular machine.

Once configured, you can run the runner application. For development or testing, you can simply execute `./run.sh`. However, for production environments, it's essential to run the runner as a service (e.g., using `systemd` on Linux) to ensure it starts automatically on boot and recovers gracefully from restarts. GitHub provides a script to help with this:

```bash
# Install as a systemd service (Linux example)
sudo ./svc.sh install

# Start the service
sudo ./svc.sh start

# Check service status
sudo ./svc.sh status
```

Running the runner as a service ensures it's always available to pick up jobs. Common mistakes during setup include incorrect permissions for the runner user, firewall rules blocking outbound connections to GitHub, or not running the runner as a persistent service, causing it to stop after a terminal session closes. Always verify connectivity to GitHub and ensure the runner service is active and healthy.

Security is paramount for self-hosted runners. Since they execute arbitrary code from your GitHub workflows, a compromised runner could pose a significant risk to your internal network. Best practices include:
*   **Dedicated Machines:** Use dedicated machines for runners, isolated from other critical infrastructure.
*   **Principle of Least Privilege:** Configure the runner user with minimal necessary permissions.
*   **Network Segmentation:** Restrict network access for runners to only what's necessary for workflow execution.
*   **Regular Updates:** Keep the runner application and the host operating system patched and updated.
*   **Image Scanning:** If using containerized runners, regularly scan your container images for vulnerabilities.
*   **Ephemeral Runners:** Consider using ephemeral runners that are provisioned for a single job and then destroyed, significantly reducing the attack surface.

By carefully setting up and managing your self-hosted runners, you gain powerful control over your CI/CD environment while maintaining a secure posture.

#### Key concepts
*   **Runner Application:** The software installed on a self-hosted machine that connects to GitHub Actions and executes jobs.
*   **Registration Token:** A temporary token used to register a self-hosted runner with a GitHub repository or organization.
*   **Runner Labels:** Custom tags assigned to self-hosted runners, allowing workflows to target specific runners based on their capabilities.
*   **`config.sh`:** The script used to configure the runner application, including setting its name, URL, and labels.
*   **`svc.sh`:** A utility script provided by GitHub to install, start, stop, and uninstall the runner application as a system service.
*   **Principle of Least Privilege:** A security concept where a user or process is granted only the minimum permissions necessary to perform its function.

#### Hands-on activity
Assume you have a Linux VM. Follow the steps to install and configure a self-hosted runner for a repository named `my-org/my-repo`. Assign it the custom label `my-linux-builder`.

```bash
# 1. SSH into your Linux VM.
# 2. Create a directory for the runner and navigate into it.
mkdir actions-runner-demo
cd actions-runner-demo

# 3. Download the runner package (replace version and URL if newer)
#    You'll get the exact URL and version from your GitHub repo settings -> Actions -> Runners -> New self-hosted runner
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# 4. Extract the installer
tar xzf actions-runner-linux-x64-2.311.0.tar.gz

# 5. Run the configuration script (replace URL and TOKEN with your actual values from GitHub)
#    When prompted for labels, add 'my-linux-builder' in addition to the defaults.
./config.sh --url https://github.com/my-org/my-repo --token A_LONG_REGISTRATION_TOKEN --labels my-linux-builder

# 6. Install and start the runner as a service
sudo ./svc.sh install
sudo ./svc.sh start

# 7. Verify the runner is online in your GitHub repository settings and then create a workflow:
# .github/workflows/test-self-hosted.yml
# name: Test Self-Hosted Runner

# on: [push]

# jobs:
#   build:
#     runs-on: [self-hosted, my-linux-builder]
#     steps:
#       - name: Check environment
#         run: |
#           echo "Hello from my self-hosted runner!"
#           uname -a
#           df -h
```

#### Assessment idea
1.  **Question:** You have a self-hosted runner configured with the labels `self-hosted`, `linux`, and `gpu-enabled`. You want a specific job in your workflow to run only on this runner. Which `runs-on` configuration would correctly target this runner?
    *   **A) `runs-on: self-hosted`**
    *   **B) `runs-on: gpu-enabled`**
    *   **C) `runs-on: [self-hosted, gpu-enabled]`**
    *   **D) `runs-on: [linux, gpu-enabled]`**
    *   **Correct Answer:** C) `runs-on: [self-hosted, gpu-enabled]`. When using an array of labels, a job will only run on a runner that possesses *all* the specified labels. While `self-hosted` is a default label, adding `gpu-enabled` ensures that only runners with that specific capability are selected. Option A would run on *any* self-hosted runner, and Option B would not include the default `self-hosted` label, which is generally required.

2.  **Question:** After setting up a self-hosted runner, you notice that it frequently goes offline and stops processing jobs, especially after the server reboots. What is the most likely cause of this issue, and what step should you take to resolve it for a production environment?
    *   **Correct Answer:** The most likely cause is that the runner application is not configured to run as a persistent service. When you simply run `./run.sh`, it stays active only as long as the terminal session is open. To resolve this for a production environment, you should install and start the runner as a system service (e.g., using `sudo ./svc.sh install` and `sudo ./svc.sh start` on Linux) so that it automatically starts on system boot and continues running in the background.

#### AI generation note
Create a 15-minute lab walkthrough video. Start with a fresh Ubuntu VM. Show the exact `curl`, `tar`, and `config.sh` commands, pausing to explain each step. Emphasize creating a dedicated user and the importance of the registration token and labels. Then, demonstrate installing and starting the runner as a `systemd` service using `svc.sh`. Show how to verify the runner's status in GitHub's UI. End with a live execution of the provided `test-self-hosted.yml` workflow, showing the job successfully running on the newly configured runner. Include visual cues for copy-pasting commands and a checklist for common setup issues.

---

### Chapter 5.3 — Creating and Publishing Custom Actions (JavaScript/TypeScript)

#### Learning objectives
*   Explain the purpose and benefits of creating custom GitHub Actions.
*   Structure a JavaScript/TypeScript-based custom action, including `action.yml` and `index.js`.
*   Define inputs, outputs, and environment variables for a custom action.
*   Develop a simple JavaScript action that interacts with workflow data.

#### Detailed lesson content
While GitHub Actions provides a rich marketplace of pre-built actions, there will inevitably be scenarios where you need to perform a highly specific task that no existing action covers. This is where custom actions come into play. Custom actions allow you to encapsulate custom logic, written in JavaScript/TypeScript or as a Docker container, and reuse it across multiple workflows or even share it with the community. They are essentially small, self-contained programs that perform a single, well-defined task within your CI/CD pipeline. The benefits are immense: improved maintainability, reduced duplication, and enhanced abstraction of complex operations. Instead of copying and pasting complex shell scripts into every workflow, you can create a single action and reference it by name.

A JavaScript/TypeScript action is composed primarily of two files: `action.yml` and `index.js` (or `index.ts` if using TypeScript, compiled to `index.js`). The `action.yml` file is the heart of your action's metadata. It defines the action's name, description, inputs it expects, outputs it produces, and how it executes. This YAML file acts as the contract for your action, telling GitHub Actions how to interact with it. For example, you might define an input called `name` that your action uses to greet someone, or an output called `greeting` that other steps can consume.

Let's walk through creating a simple JavaScript action that takes a `who-to-greet` input and outputs a `time` variable. First, create a directory for your action, say `my-greeting-action`. Inside this directory, create `action.yml`:

```yaml
# .github/actions/my-greeting-action/action.yml
name: 'My Greeting Action'
description: 'Greets a person and sets a time output'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet in the log'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted the person'
runs:
  using: 'node20' # Specify the Node.js version
  main: 'index.js' # Entrypoint for the action
```

In this `action.yml`, we define one required input `who-to-greet` with a default value, and one output `time`. The `runs` section specifies that this is a Node.js action and that `index.js` is its entry point.

Next, create `index.js` in the same directory. This is where your JavaScript logic resides. GitHub Actions provides a toolkit library (`@actions/core`) to easily interact with inputs, outputs, and logging. You'll typically install this using `npm install @actions/core`.

```javascript
// .github/actions/my-greeting-action/index.js
const core = require('@actions/core');
const github = require('@actions/github'); // Often useful, though not strictly needed for this simple example

try {
  // Get the input value
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  // Get the current time
  const time = (new Date()).toTimeString();
  core.setOutput("time", time); // Set an output variable

  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message); // Fail the action if an error occurs
}
```

After creating these files, you'll need to install dependencies for your action (like `@actions/core`) and then bundle your JavaScript code into a single file, typically `dist/index.js`, using a tool like `ncc` (Node.js Compiler). This bundling ensures that your action is self-contained and doesn't rely on `node_modules` being present when it runs.

```bash
# In your action's directory (.github/actions/my-greeting-action)
npm init -y
npm install @actions/core @vercel/ncc
npx ncc build index.js --license licenses.txt
```
After bundling, your `action.yml` should point to `dist/index.js` instead of `index.js`.

To use this custom action, you can reference it directly from your repository in a workflow:

```yaml
# .github/workflows/use-my-action.yml
name: Use My Custom Action

on: [push]

jobs:
  greet-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run my custom greeting action
        uses: ./.github/actions/my-greeting-action # Reference the local path to your action
        with:
          who-to-greet: 'Cohortia Learner'
        id: greeting # Give this step an ID to access its outputs
      - name: Get the output time
        run: echo "The greeting time was ${{ steps.greeting.outputs.time }}"
```

Common mistakes include incorrect YAML syntax in `action.yml`, forgetting to bundle JavaScript actions (leading to missing dependency errors), or misnaming inputs/outputs between `action.yml` and `index.js`. Always validate your `action.yml` and ensure your `index.js` correctly uses `core.getInput` and `core.setOutput`. For security, be mindful of any external dependencies your action pulls in and ensure they are from trusted sources. If publishing to the GitHub Marketplace, follow GitHub's guidelines for security and documentation.

#### Key concepts
*   **Custom Action:** A reusable piece of logic encapsulated in a self-contained program, extending GitHub Actions functionality.
*   **`action.yml`:** The metadata file that defines a custom action's name, description, inputs, outputs, and execution method.
*   **Inputs:** Variables that an action accepts from the workflow that calls it.
*   **Outputs:** Variables that an action produces, which can be consumed by subsequent steps or jobs in the workflow.
*   **`@actions/core`:** A GitHub Actions toolkit library for JavaScript actions, providing functions to get inputs, set outputs, log messages, and set action status.
*   **`ncc`:** A Node.js compiler tool used to bundle JavaScript actions into a single file, including all dependencies, for easier distribution and execution.

#### Hands-on activity
Create a new custom JavaScript action named `file-line-counter`. This action should take one input, `file-path`, which is the path to a text file in the repository. The action should then count the number of lines in that file and set an output named `line-count` with the result.

**Starter Code (`.github/actions/file-line-counter/action.yml`):**
```yaml
name: 'File Line Counter'
description: 'Counts the number of lines in a specified file'
inputs:
  file-path:
    description: 'The path to the file to count lines in'
    required: true
outputs:
  line-count:
    description: 'The total number of lines in the file'
runs:
  using: 'node20'
  main: 'dist/index.js' # Remember to bundle!
```

**Your Task (`.github/actions/file-line-counter/index.js`):**
Complete the `index.js` file to read the file, count its lines, and set the output. You'll need `fs` module for file operations.

```javascript
// .github/actions/file-line-counter/index.js
const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

try {
  const filePath = core.getInput('file-path', { required: true });
  // Ensure the path is absolute or relative to the workspace root
  const fullPath = path.join(process.env.GITHUB_WORKSPACE, filePath);

  if (!fs.existsSync(fullPath)) {
    core.setFailed(`File not found at: ${fullPath}`);
  } else {
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const lines = fileContent.split('\n');
    // Filter out empty strings if the file ends with a newline
    const lineCount = lines.filter(line => line.trim() !== '').length;

    core.setOutput('line-count', lineCount);
    console.log(`Successfully counted ${lineCount} lines in ${filePath}`);
  }

} catch (error) {
  core.setFailed(error.message);
}
```
**Don't forget to run `npm init -y`, `npm install @actions/core @vercel/ncc`, and `npx ncc build index.js --license licenses.txt` in the action's directory.**

**Example Workflow to use it (`.github/workflows/test-line-counter.yml`):**
```yaml
name: Test Line Counter Action

on: [push]

jobs:
  count-lines:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create a test file
        run: |
          echo "Line 1" > test.txt
          echo "Line 2" >> test.txt
          echo "Line 3" >> test.txt
          echo "" >> test.txt # Add an empty line at the end
      - name: Use line counter action
        uses: ./.github/actions/file-line-counter
        with:
          file-path: 'test.txt'
        id: counter
      - name: Display line count
        run: echo "The file has ${{ steps.counter.outputs.line-count }} lines."
```

#### Assessment idea
1.  **Question:** You are developing a custom JavaScript action. You need to retrieve a value passed from the calling workflow and then make that value available to subsequent steps in the same workflow. Which two `@actions/core` functions would you use for these tasks, respectively?
    *   **A) `core.getVar()` and `core.setVar()`**
    *   **B) `core.getInput()` and `core.setOutput()`**
    *   **C) `core.readInput()` and `core.writeOutput()`**
    *   **D) `core.param()` and `core.result()`**
    *   **Correct Answer:** B) `core.getInput()` and `core.setOutput()`. `core.getInput()` is used within an action to retrieve values passed via the `with` keyword in the calling workflow. `core.setOutput()` is used to define variables that the action makes available for other steps or jobs to consume.

2.  **Question:** What is the primary purpose of bundling a JavaScript custom action (e.g., using `ncc`) before it's used in a workflow, and what problem does it solve?
    *   **Correct Answer:** The primary purpose of bundling a JavaScript custom action is to compile all its source code and its Node.js dependencies into a single, self-contained JavaScript file (typically `dist/index.js`). This solves the problem of needing to install `node_modules` on the runner every time the action runs, which can be slow and introduce inconsistencies. Bundling ensures that the action is portable, faster to execute, and runs consistently without external dependency resolution at runtime.

#### AI generation note
Create a 15-minute live coding video. Start with an empty directory, then create `action.yml` and `index.js` for the "My Greeting Action" example. Walk through each line of code, explaining `inputs`, `outputs`, `runs`, `core.getInput`, `core.setOutput`. Demonstrate `npm init`, `npm install @actions/core @vercel/ncc`, and `npx ncc build`. Show the resulting `dist/index.js`. Then, create a workflow file that uses this action, demonstrating how to pass inputs and retrieve outputs. Show the workflow run in GitHub, highlighting the logs for input and output values. Include a common mistake section where you intentionally misspell an input name and show the workflow failure.

---

### Chapter 5.4 — Creating and Publishing Custom Actions (Docker Container)

#### Learning objectives
*   Understand the advantages of using Docker container actions compared to JavaScript actions.
*   Structure a Docker-based custom action, including `Dockerfile` and `action.yml`.
*   Define entrypoints and arguments for a Docker container action.
*   Develop a simple Docker action that executes a custom script within its container environment.

#### Detailed lesson content
While JavaScript actions are excellent for many use cases, sometimes you need an even more controlled and isolated environment, or you might prefer to write your action logic in a language other than JavaScript/TypeScript. This is where Docker container actions shine. A Docker action packages your code and its entire runtime environment (including specific operating system, dependencies, and tools) into a Docker image. This guarantees that your action will run consistently across different runners, regardless of their underlying operating system or installed software, as long as they can run Docker. This level of environment consistency is a significant advantage, especially for complex build processes or actions requiring very specific toolchains.

The core components of a Docker container action are a `Dockerfile` and an `action.yml` file. The `Dockerfile` defines how your Docker image is built. It specifies the base image, installs any necessary dependencies, copies your action's code, and sets the entrypoint command that will be executed when the container starts. The `action.yml` for a Docker action is similar to a JavaScript action's `action.yml`, but its `runs` section will specify `using: 'docker'` and point to your `Dockerfile` (or a pre-built Docker image).

Let's create a simple Docker action that runs a Python script to greet someone. First, create a directory for your action, say `my-docker-greeting-action`. Inside this, you'll need three files: `action.yml`, `Dockerfile`, and `entrypoint.py`.

First, the `action.yml`:

```yaml
# .github/actions/my-docker-greeting-action/action.yml
name: 'My Docker Greeting Action'
description: 'Greets a person using a Python script in a Docker container'
inputs:
  who-to-greet:
    description: 'Who to greet in the log'
    required: true
    default: 'World'
outputs:
  time:
    description: 'The time we greeted the person'
runs:
  using: 'docker'
  image: 'Dockerfile' # Points to the Dockerfile in the same directory
  args: # Arguments passed to the entrypoint script
    - ${{ inputs.who-to-greet }} # Pass the input as an argument
```

Notice the `runs` section: `using: 'docker'` indicates a Docker action, `image: 'Dockerfile'` tells GitHub to build the image from the local `Dockerfile`, and `args` passes the `who-to-greet` input as an argument to our entrypoint script.

Next, the `Dockerfile`:

```dockerfile
# .github/actions/my-docker-greeting-action/Dockerfile
FROM python:3.9-slim-buster # Use a lightweight Python base image

# Set the working directory inside the container
WORKDIR /app

# Copy the entrypoint script into the container
COPY entrypoint.py /app/entrypoint.py

# Install any Python dependencies (none for this simple example)
# RUN pip install some-package

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.py

# Define the entrypoint command for the container
ENTRYPOINT ["python", "/app/entrypoint.py"]
```

This `Dockerfile` sets up a Python 3.9 environment, copies our Python script, makes it executable, and defines it as the container's entrypoint.

Finally, the Python script `entrypoint.py`:

```python
# .github/actions/my-docker-greeting-action/entrypoint.py
import os
import sys
from datetime import datetime

def main():
    # GitHub Actions passes inputs as arguments if 'args' is used in action.yml
    # Or as environment variables if 'env' is used in action.yml
    # For 'args', they are sys.argv[1:]
    who_to_greet = sys.argv[1] if len(sys.argv) > 1 else "World"

    print(f"Hello {who_to_greet}!")

    # Set an output variable
    # Outputs are set by printing special commands to stdout
    current_time = datetime.now().strftime("%H:%M:%S")
    print(f"::set-output name=time::{current_time}")

if __name__ == "__main__":
    main()
```

To use this Docker action, you reference its local path in your workflow, just like a JavaScript action:

```yaml
# .github/workflows/use-my-docker-action.yml
name: Use My Custom Docker Action

on: [push]

jobs:
  greet-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run my custom Docker greeting action
        uses: ./.github/actions/my-docker-greeting-action
        with:
          who-to-greet: 'Docker Enthusiast'
        id: greeting # Give this step an ID to access its outputs
      - name: Get the output time
        run: echo "The greeting time was ${{ steps.greeting.outputs.time }}"
```

When this workflow runs, GitHub Actions will first build the Docker image from your `Dockerfile` (if it hasn't been built recently), then run a container from that image, executing your `entrypoint.py` script. The `who-to-greet` input will be passed as an argument, and the `time` output will be captured.

Common mistakes include incorrect `Dockerfile` syntax, issues with file paths inside the container, or not correctly passing inputs as arguments or environment variables to the entrypoint script. Remember that `::set-output` is the mechanism for setting outputs from within a container action. For security, always use trusted base images in your `Dockerfile` and regularly scan your images for vulnerabilities.

#### Key concepts
*   **Docker Container Action:** A custom action packaged as a Docker image, providing a highly consistent and isolated execution environment.
*   **`Dockerfile`:** A text file containing instructions for building a Docker image.
*   **`ENTRYPOINT`:** The command that runs when a Docker container starts, often pointing to the main script of the action.
*   **`args`:** A property in `action.yml` used to pass arguments directly to the container's entrypoint command.
*   **Environment Consistency:** The benefit of Docker actions where the execution environment is identical every time the action runs, regardless of the host runner.
*   **`::set-output name=NAME::VALUE`:** A special command printed to standard output within a container action to set an output variable.

#### Hands-on activity
Create a new custom Docker action named `disk-usage-reporter`. This action should take no inputs and should output the total disk usage of the `/github/workspace` directory (where your repository code is checked out) in a human-readable format. The action should use a lightweight Alpine Linux base image and execute a shell script.

**Starter Code (`.github/actions/disk-usage-reporter/action.yml`):**
```yaml
name: 'Disk Usage Reporter'
description: 'Reports the disk usage of the GitHub workspace'
outputs:
  workspace-disk-usage:
    description: 'The total disk usage of the workspace'
runs:
  using: 'docker'
  image: 'Dockerfile'
```

**Your Task (`.github/actions/disk-usage-reporter/Dockerfile`):**
Complete the `Dockerfile` to use `alpine/git` as a base, copy a script, and set it as the entrypoint.

```dockerfile
# .github/actions/disk-usage-reporter/Dockerfile
FROM alpine/git:latest # A lightweight image with git and shell utilities

WORKDIR /app

COPY entrypoint.sh /app/entrypoint.sh

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
```

**Your Task (`.github/actions/disk-usage-reporter/entrypoint.sh`):**
Complete the `entrypoint.sh` script to use the `du -sh` command and capture its output.

```bash
#!/bin/sh

# Get the disk usage of the workspace directory
# The GITHUB_WORKSPACE environment variable is automatically set by GitHub Actions
WORKSPACE_USAGE=$(du -sh "$GITHUB_WORKSPACE" | awk '{print $1}')

echo "Disk usage of workspace: $WORKSPACE_USAGE"

# Set the output variable
echo "::set-output name=workspace-disk-usage::$WORKSPACE_USAGE"
```

**Example Workflow to use it (`.github/workflows/test-docker-disk-usage.yml`):**
```yaml
name: Test Docker Disk Usage Action

on: [push]

jobs:
  report-disk-usage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run disk usage reporter action
        uses: ./.github/actions/disk-usage-reporter
        id: disk_reporter
      - name: Display workspace disk usage
        run: echo "The workspace is using ${{ steps.disk_reporter.outputs.workspace-disk-usage }} of disk space."
```

#### Assessment idea
1.  **Question:** You need to create a custom action that requires a very specific version of a Java Development Kit (JDK) and a particular set of environment variables that are complex to configure on a standard runner. Which type of custom action (JavaScript or Docker Container) would be more suitable, and why?
    *   **A) JavaScript action, because it's easier to manage dependencies.**
    *   **B) Docker Container action, because it provides a fully isolated and customizable environment.**
    *   **C) JavaScript action, because it runs faster.**
    *   **D) Docker Container action, because it has built-in support for Java.**
    *   **Correct Answer:** B) Docker Container action, because it provides a fully isolated and customizable environment. Docker actions allow you to package the exact JDK version, specific environment variables, and any other required tools directly into the container image, ensuring consistency and avoiding conflicts with the host runner's environment. While JavaScript actions can manage some dependencies, they rely on the host's Node.js environment and are less suitable for highly specific, non-JavaScript runtime requirements.

2.  **Question:** In a Docker container action, how do you typically pass an input value from the `action.yml` to the `ENTRYPOINT` script inside the container, and how do you set an output variable from that script for the calling workflow to consume?
    *   **Correct Answer:** To pass an input value from `action.yml` to the `ENTRYPOINT` script, you typically use the `args` keyword in `action.yml` to pass the input as a command-line argument to the entrypoint script (e.g., `args: [${{ inputs.my-input }}]`). Inside the script, you would then access this value via `sys.argv` (Python) or `$1`, `$2` (shell script). To set an output variable from the script, you print a special command to standard output in the format `::set-output name=OUTPUT_NAME::OUTPUT_VALUE`. GitHub Actions parses this output and registers the variable.

#### AI generation note
Create a 15-minute live coding video. Start by explaining the `Dockerfile` and `action.yml` for the "My Docker Greeting Action". Build the `Dockerfile` locally to demonstrate its functionality before integrating with GitHub Actions. Show how to modify `entrypoint.py` to correctly read arguments and set outputs. Then, integrate it into a workflow, demonstrating how inputs are passed via `args` and outputs are captured. Use a split-screen view: code editor on the left, terminal showing Docker build/run, and then GitHub Actions workflow logs on the right. Include a section on debugging Docker actions by running the container locally.

---

### Chapter 5.5 — Reusable Workflows: Template and Call

#### Learning objectives
*   Explain the concept and benefits of reusable workflows in GitHub Actions.
*   Define a reusable workflow using the `workflow_call` event.
*   Pass inputs, outputs, and secrets between a calling workflow and a reusable workflow.
*   Implement a strategy for structuring and calling reusable workflows to promote DRY principles.

#### Detailed lesson content
As your GitHub Actions usage grows, you'll inevitably find yourself repeating similar job definitions or sequences of steps across multiple workflows. This leads to duplication, makes updates difficult, and increases the chance of inconsistencies. Reusable workflows are GitHub Actions' solution to this problem, enabling you to define a workflow once and then call it from other workflows, promoting the "Don't Repeat Yourself" (DRY) principle. Think of them as subroutines or functions for your CI/CD pipelines, allowing you to create modular, maintainable, and scalable automation.

A reusable workflow is defined in its own YAML file, typically within the `.github/workflows` directory, just like any other workflow. The key difference is that instead of triggering on events like `push` or `pull_request`, it uses the `on: workflow_call` trigger. This trigger explicitly marks the workflow as callable by other workflows.

Let's imagine you have a common build and test process for all your microservices. Instead of replicating this logic in each service's workflow, you can create a reusable workflow:

```yaml
# .github/workflows/reusable-build-test.yml
name: Reusable Build and Test

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
        description: 'The Node.js version to use for building'
      artifact-name:
        required: true
        type: string
        description: 'Name for the build artifact'
    outputs:
      build-status:
        description: 'Status of the build job'
        value: ${{ jobs.build.outputs.status }} # Expose an output from a job
    secrets:
      NPM_TOKEN:
        required: false
        description: 'NPM token for private package access'

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      status: ${{ job.status }} # Capture job status as an output
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
      - name: Install dependencies
        run: npm ci
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} # Use the secret if provided
      - name: Run tests
        run: npm test
      - name: Build application
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: ${{ inputs.artifact-name }}
          path: build/ # Assuming 'build' directory contains compiled app
```

In this reusable workflow:
*   `on: workflow_call`: Makes it callable.
*   `inputs`: Defines parameters that the calling workflow must provide. These are accessed using `inputs.<input_name>`.
*   `outputs`: Defines values that the reusable workflow can pass back to the calling workflow. These are accessed using `jobs.<job_id>.outputs.<output_name>` from within the reusable workflow, and `jobs.<calling_job_id>.outputs.<reusable_workflow_output_name>` from the calling workflow.
*   `secrets`: Defines secrets that the calling workflow can pass. These are accessed using `secrets.<secret_name>`. Note that secrets must be explicitly passed; they are not automatically inherited.

Now, to call this reusable workflow from another workflow in the same repository:

```yaml
# .github/workflows/my-service-ci.yml
name: My Service CI

on: [push]

jobs:
  call-build-test:
    uses: ./.github/workflows/reusable-build-test.yml@main # Path to reusable workflow and branch/tag
    with:
      node-version: '18.x'
      artifact-name: 'my-service-build'
    secrets:
      NPM_TOKEN: ${{ secrets.MY_NPM_TOKEN }} # Pass a secret from the calling workflow's secrets
    id: build_step # Give this step an ID to access its outputs

  deploy:
    needs: call-build-test # This job depends on the reusable workflow completing
    runs-on: ubuntu-latest
    if: success() && needs.call-build-test.outputs.build-status == 'success' # Conditional deployment
    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: my-service-build
      - name: Deploy to staging
        run: echo "Deploying build artifact..."
        # Add deployment steps here
```

In the calling workflow:
*   `uses: ./.github/workflows/reusable-build-test.yml@main`: Specifies the path to the reusable workflow and the branch/tag it should use.
*   `with`: Provides values for the `inputs` defined in the reusable workflow.
*   `secrets`: Provides values for the `secrets` defined in the reusable workflow. Note that `MY_NPM_TOKEN` is a secret defined in the *calling* repository's secrets, which is then passed to the reusable workflow as `NPM_TOKEN`.
*   `id`: Assigning an `id` to the `uses` step allows you to access the reusable workflow's outputs.

Common mistakes include forgetting to define `workflow_call` for the reusable workflow, not explicitly passing inputs or secrets, or incorrect syntax when accessing outputs (remember `jobs.<job_id>.outputs.<output_name>` for the reusable workflow's outputs). Also, ensure the branch or tag specified in `uses` for the reusable workflow is stable (`@main` or `@v1` is better than `@head`). For security, be cautious about which secrets you expose to reusable workflows, especially if they are publicly accessible or from external repositories. Reusable workflows significantly improve the maintainability and consistency of your CI/CD pipelines, making them an indispensable tool for larger projects and organizations.

#### Key concepts
*   **Reusable Workflow:** A workflow designed to be called by other workflows, promoting modularity and reducing duplication.
*   **`on: workflow_call`:** The trigger event that designates a workflow as reusable.
*   **`inputs` (for `workflow_call`):** Parameters that a reusable workflow accepts from the calling workflow.
*   **`outputs` (for `workflow_call`):** Values that a reusable workflow can pass back to the calling workflow.
*   **`secrets` (for `workflow_call`):** Secrets that a reusable workflow can accept from the calling workflow.
*   **`uses: <path/to/workflow>@<ref>`:** The syntax used in a calling workflow to invoke a reusable workflow.
*   **DRY Principle:** "Don't Repeat Yourself," a software development principle that reusable workflows help to enforce.

#### Hands-on activity
Create a reusable workflow that performs a static code analysis check using a tool like `super-linter`. This reusable workflow should take an input `linter-config-path` (optional, default to `.github/linters/.super-linter.yml`) and output a `linter-status` indicating success or failure. Then, create a calling workflow that uses this reusable linter.

**Reusable Workflow (`.github/workflows/reusable-linter.yml`):**
```yaml
name: Reusable Static Code Analysis

on:
  workflow_call:
    inputs:
      linter-config-path:
        required: false
        type: string
        default: '.github/linters/.super-linter.yml'
        description: 'Path to the Super-Linter configuration file'
    outputs:
      linter-status:
        description: 'Status of the linter job (success or failure)'
        value: ${{ jobs.lint.outputs.status }}

jobs:
  lint:
    runs-on: ubuntu-latest
    outputs:
      status: ${{ job.status }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run Super-Linter
        uses: github/super-linter@v5 # Use a specific version, e.g., v5
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # Pass the linter config path if it's not the default
          LINTER_CONFIG_PATH: ${{ inputs.linter-config-path }}
          VALIDATE_ALL_CODEBASE: false # Only lint changed files
          # Add other linter configurations as needed
```

**Calling Workflow (`.github/workflows/main-ci.yml`):**
```yaml
name: Main CI with Linter

on: [push]

jobs:
  run-linter:
    uses: ./.github/workflows/reusable-linter.yml@main # Assuming 'main' branch
    with:
      # Optionally override the default linter-config-path
      # linter-config-path: '.github/my-custom-linter-config.yml'
      # For this example, we'll use the default.
    id: linter_check

  build-and-test:
    needs: run-linter # This job depends on the linter completing
    runs-on: ubuntu-latest
    if: success() && needs.run-linter.outputs.linter-status == 'success'
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Build and Test
        run: |
          echo "Linter passed! Proceeding with build and test..."
          # Your actual build and test commands here
```

#### Assessment idea
1.  **Question:** You have a reusable workflow defined in `repo/.github/workflows/deploy.yml` that takes an `environment` input and a `DEPLOY_KEY` secret. In your main CI workflow, you want to call this reusable workflow for a staging deployment. Which of the following snippets correctly calls the reusable workflow and passes the necessary data? Assume `main` is the branch name.
    *   **A)**
        ```yaml
        jobs:
          staging_deploy:
            uses: ./.github/workflows/deploy.yml@main
            with:
              environment: 'staging'
              DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        ```
    *   **B)**
        ```yaml
        jobs:
          staging_deploy:
            uses: ./.github/workflows/deploy.yml@main
            inputs:
              environment: 'staging'
            secrets:
              DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        ```
    *   **C)**
        ```yaml
        jobs:
          staging_deploy:
            calls: ./.github/workflows/deploy.yml@main
            with:
              environment: 'staging'
            secrets:
              DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        ```
    *   **D)**
        ```yaml
        jobs:
          staging_deploy:
            uses: ./.github/workflows/deploy.yml@main
            with:
              environment: 'staging'
            env:
              DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        ```
    *   **Correct Answer:** B)
        ```yaml
        jobs:
          staging_deploy:
            uses: ./.github/workflows/deploy.yml@main
            inputs:
              environment: 'staging'
            secrets:
              DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        ```
        Explanation: When calling a reusable workflow, `inputs` and `secrets` must be explicitly defined under the `with` and `secrets` keywords, respectively, at the job level of the calling workflow. Option A incorrectly places `DEPLOY_KEY` under `with`. Option C uses `calls` instead of `uses`. Option D incorrectly places `DEPLOY_KEY` under `env`, which is for environment variables within a step, not for passing secrets to a reusable workflow.

2.  **Question:** You have a reusable workflow that generates a unique build ID as an output named `build-id`. How would a calling workflow access this `build-id` output from the reusable workflow's execution? Assume the calling job for the reusable workflow is named `call-build-workflow`.
    *   **Correct Answer:** The calling workflow would access the output using the syntax `${{ jobs.call-build-workflow.outputs.build-id }}`. The `jobs` context is used, followed by the `id` of the job that called the reusable workflow, then `.outputs`, and finally the name of the output variable defined in the reusable workflow's `on: workflow_call: outputs:` section.

#### AI generation note
Create a 12-minute interactive coding demo. Start by explaining the problem of duplicated workflow logic. Then, create the `reusable-build-test.yml` workflow, explaining `workflow_call`, `inputs`, `outputs`, and `secrets` definitions. Show how to define an output from a job (`jobs.build.outputs.status`). Next, create `my-service-ci.yml`, demonstrating `uses`, `with`, and `secrets` to call the reusable workflow. Show how to access the reusable workflow's output (`needs.call-build-test.outputs.build-status`) for conditional job execution. Include a mini-quiz asking users to fill in missing `inputs` or `secrets` sections for a calling workflow.

---

## Module 6: Practical Applications, Troubleshooting, and Best Practices

This final module brings together everything you've learned about GitHub Actions, focusing on real-world application, ensuring your workflows are secure and performant, and equipping you with the skills to diagnose and resolve issues efficiently. We'll explore common CI/CD patterns, delve into critical security considerations, master troubleshooting techniques, optimize your workflows for speed and cost, and finally, integrate GitHub Actions with external services to create powerful, automated pipelines. By the end of this module, you'll be able to design, implement, secure, and maintain robust CI/CD solutions using GitHub Actions, ready to tackle complex automation challenges.

### Chapter 6.1 — Common CI/CD Patterns with GitHub Actions

#### Learning objectives
*   Design and implement GitHub Actions workflows for common application build, test, and deployment scenarios.
*   Apply best practices for building and pushing Docker images using GitHub Actions.
*   Construct workflows for deploying static websites or serverless functions to cloud providers.
*   Understand how to adapt CI/CD patterns for different programming languages and frameworks.

#### Detailed lesson content
As you've progressed through this course, you've gained a solid understanding of the building blocks of GitHub Actions. Now, it's time to apply that knowledge to real-world continuous integration and continuous deployment (CI/CD) patterns that are prevalent in modern software development. Many applications, regardless of their underlying technology, follow similar phases: building the code, running tests, and then deploying the validated artifact. GitHub Actions provides the flexibility to automate these steps for a vast array of project types.

Let's first consider a common pattern: building and testing a Node.js application. A typical workflow for a Node.js project involves setting up the Node.js environment, installing dependencies, running linting checks, executing unit and integration tests, and then potentially building a production-ready bundle. For instance, you might use the `actions/setup-node@v4` action to specify the Node.js version, followed by `npm ci` to install dependencies (using `ci` instead of `install` for CI environments ensures a clean slate and uses `package-lock.json` for deterministic installs). After dependency installation, `npm run lint` and `npm test` are standard commands to ensure code quality and correctness. If tests pass, you might then run `npm run build` to create a production artifact. This entire sequence forms the core of your CI pipeline, ensuring that every push to your repository is automatically validated.

Another critical pattern, especially in cloud-native environments, is building and pushing Docker images. Docker containers provide a consistent environment across development, testing, and production, making them ideal deployment units. A GitHub Actions workflow for Docker typically involves logging into a container registry (like Docker Hub, GitHub Container Registry, or AWS ECR), building the Docker image from your `Dockerfile`, and then pushing the tagged image to the registry. The `docker/login-action@v3` and `docker/build-push-action@v5` actions are indispensable here. When logging in, it's crucial to use GitHub Secrets for your registry credentials, never hardcoding them directly in your workflow file. For example, `DOCKER_USERNAME` and `DOCKER_PASSWORD` could be repository secrets. The build-push action can automatically tag your image with useful information like the Git commit SHA or the branch name, ensuring traceability. A common mistake here is forgetting to specify the `context` for the build, which defaults to the root of the repository, or not correctly configuring the `push` parameter to `true` to actually upload the image.

Beyond building and testing, deployment is the "CD" part of CI/CD. For static websites or single-page applications (SPAs), deployment often means pushing built assets to a cloud storage service like AWS S3, Azure Blob Storage, or Google Cloud Storage, or to a specialized static site host like Netlify or Vercel. Workflows for this pattern typically involve the build steps mentioned above, followed by an action that synchronizes the build output directory with the target storage. For AWS S3, you might use the `aws-actions/configure-aws-credentials@v4` action to set up authentication (preferably using OpenID Connect, which we'll discuss in a later chapter on security) and then use the AWS CLI directly within a `run` step, for example, `aws s3 sync ./build s3://your-bucket-name --delete`. The `--delete` flag is important to remove old files from the bucket that are no longer part of your build. Similarly, for serverless functions, the deployment might involve packaging your function code and uploading it to AWS Lambda, Azure Functions, or Google Cloud Functions, often using a dedicated deployment action or a CLI tool like Serverless Framework.

The beauty of GitHub Actions is its adaptability. While the core patterns remain similar, the specific commands and actions will vary based on your technology stack. For Python applications, you'd use `actions/setup-python@v5` and `pip install -r requirements.txt` followed by `pytest`. For Java, `actions/setup-java@v4` and `mvn clean install` or `gradle build`. The key is to identify the standard build and test commands for your chosen language/framework and then map them to `run` steps in your workflow. Always remember to consider the environment variables, caching strategies, and secret management relevant to your specific application type. By mastering these common patterns, you'll be well-equipped to automate CI/CD for virtually any project.

#### Key concepts
*   **Continuous Integration (CI):** The practice of frequently merging code changes into a central repository, followed by automated builds and tests.
*   **Continuous Deployment (CD):** The practice of automatically deploying all code changes that pass the automated tests to a production environment.
*   **Node.js CI/CD:** Workflows involving `actions/setup-node`, `npm ci`, `npm test`, `npm run build` for JavaScript applications.
*   **Docker CI/CD:** Workflows using `docker/login-action` and `docker/build-push-action` to build and publish container images to a registry.
*   **Static Site Deployment:** Automating the synchronization of built website assets to cloud storage (e.g., AWS S3) or specialized hosting platforms.
*   **`npm ci`:** A command used in CI environments to install dependencies from `package-lock.json` or `npm-shrinkwrap.json`, ensuring deterministic builds.

#### Hands-on activity
**Activity: Build and Deploy a Simple Node.js Static Site**

You will create a GitHub Actions workflow to build a simple Node.js application (e.g., a React app or a plain HTML/CSS/JS site with a build step) and then "deploy" its static assets to a dummy directory within the repository (simulating a static host).

1.  **Set up your repository:**
    *   Create a new GitHub repository or use an existing one.
    *   Inside the repository, create a simple `package.json` file. For simplicity, you can use a basic React app created with `npx create-react-app my-app` and then remove `my-app` and copy its contents to the root, or just create a `package.json` with a `build` script that copies files, e.g.:
        ```json
        {
          "name": "my-static-app",
          "version": "1.0.0",
          "scripts": {
            "build": "mkdir -p build && echo '<h1>Hello from GitHub Actions!</h1>' > build/index.html && echo 'console.log(\"Deployed!\");' > build/script.js"
          }
        }
        ```
    *   Add a `.gitignore` file with `node_modules/` and `build/`.

2.  **Create the workflow file:**
    *   Create a file at `.github/workflows/static-deploy.yml`.

3.  **Workflow content template:**
    ```yaml
    name: Static Site CI/CD

    on:
      push:
        branches:
          - main
      pull_request:
        branches:
          - main

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Set up Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '20' # Or your preferred Node.js version

        - name: Install dependencies
          run: npm ci

        - name: Run build script
          run: npm run build

        # This step simulates deployment by creating a dummy artifact
        # In a real scenario, this would be aws s3 sync, rsync, etc.
        - name: Simulate Deployment
          run: |
            echo "Deployment simulation complete. Built files are in 'build/' directory."
            # For demonstration, we can list the built files
            ls -R build/
            # In a real scenario, you'd push these to a hosting service.
            # Example: aws s3 sync build/ s3://your-bucket-name
    ```

4.  **Commit and push:** Commit the `package.json`, `.gitignore`, and `static-deploy.yml` files, then push to your `main` branch. Observe the workflow run in GitHub Actions.

#### Assessment idea
1.  **Question:** You have a Dockerized Python application and want to build its image and push it to GitHub Container Registry (GHCR) whenever code is pushed to the `main` branch. Which of the following workflow snippets correctly logs into GHCR and builds/pushes an image, assuming `GITHUB_TOKEN` is available and the image should be tagged with `ghcr.io/${{ github.repository }}:latest`?

    A)
    ```yaml
    - name: Log in to GHCR
      run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
    - name: Build and push Docker image
      run: docker build . -t ghcr.io/${{ github.repository }}:latest && docker push ghcr.io/${{ github.repository }}:latest
    ```

    B)
    ```yaml
    - name: Log in to GHCR
      uses: docker/login-action@v3
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: ghcr.io/${{ github.repository }}:latest
    ```

    C)
    ```yaml
    - name: Log in to GHCR
      uses: docker/login-action@v3
      with:
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        tags: ghcr.io/${{ github.repository }}:latest
    ```

    D)
    ```yaml
    - name: Log in to GHCR
      run: docker login ghcr.io -u ${{ github.actor }} -p ${{ secrets.GITHUB_TOKEN }}
    - name: Build and push Docker image
      run: docker build . -t ghcr.io/${{ github.repository }}:latest; docker push ghcr.io/${{ github.repository }}:latest
    ```

    **Correct Answer:** B)
    **Explanation:** Option B uses the recommended `docker/login-action` and `docker/build-push-action` for these tasks. The `login-action` correctly specifies `registry: ghcr.io`, `username: ${{ github.actor }}`, and `password: ${{ secrets.GITHUB_TOKEN }}`. The `build-push-action` correctly sets `context: .`, `push: true` (which is essential for actually pushing the image), and `tags` with the dynamic repository and latest tag. Options A and D use direct `docker` commands but are less robust and idiomatic for GitHub Actions, and D's password handling is less secure. Option C misses `push: true` in the `build-push-action`, which means the image would be built but not pushed.

2.  **Question:** When deploying a static website using GitHub Actions, why is it generally recommended to use `npm ci` instead of `npm install` in your workflow's dependency installation step for Node.js projects?

    **Correct Answer:** `npm ci` is preferred in CI/CD environments because it ensures a clean and deterministic installation of dependencies. It primarily uses the `package-lock.json` (or `npm-shrinkwrap.json`) file to install exact versions of dependencies, rather than resolving them from `package.json` and potentially installing newer, untested versions. This helps prevent "works on my machine" issues and ensures that your CI build environment is consistent across runs, making builds more reliable and reproducible. `npm install`, on the other hand, can update `package-lock.json` and might install different dependency versions if `package.json` allows for ranges (e.g., `^1.0.0`).

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated diagram explaining the Node.js CI/CD flow (checkout -> setup node -> install -> test -> build -> deploy). Follow with a 7-minute live coding demo showing the creation and execution of the Node.js static site workflow, including the `package.json` and `.github/workflows/static-deploy.yml` files. Highlight the `npm ci` and `npm run build` steps in the terminal output. Conclude with a 2-minute segment on Docker CI/CD using `docker/login-action` and `docker/build-push-action`, showing a brief YAML snippet and explaining the parameters. Use a split-screen view for code and terminal/browser. Include specific examples for `actions/setup-node@v4` and `docker/build-push-action@v5`. Ensure captions and alt text for diagrams.

### Chapter 6.2 — Security Best Practices for GitHub Actions

#### Learning objectives
*   Implement secure handling of sensitive data using GitHub Actions secrets and OpenID Connect (OIDC).
*   Configure workflow permissions to adhere to the principle of least privilege.
*   Evaluate and mitigate risks associated with using third-party actions.
*   Integrate code scanning and dependency scanning into GitHub Actions workflows for enhanced security.

#### Detailed lesson content
Security is paramount in any automation pipeline, and GitHub Actions is no exception. A compromised workflow can lead to unauthorized access to your code, infrastructure, or sensitive data. Therefore, understanding and implementing security best practices is crucial to protecting your projects. The core principle guiding security in GitHub Actions, as in many other areas of cybersecurity, is the "principle of least privilege" – granting only the minimum necessary permissions for a task to be completed.

The most common way to handle sensitive information like API keys, database credentials, or cloud provider access tokens is through GitHub Secrets. These secrets are encrypted and stored securely within your repository or organization settings and are never exposed in logs. When a workflow needs a secret, you reference it using `secrets.SECRET_NAME`. For example, `env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}`. A common mistake is to echo secrets directly into logs during debugging; always be vigilant about what you print to the console. Furthermore, be aware of the scope of your secrets: repository secrets are available to workflows in that repository, while organization secrets can be shared across multiple repositories, which can be convenient but also carries a broader risk if compromised. For environments, you can define environment-specific secrets that are only available to jobs targeting that environment, adding another layer of control.

Beyond static secrets, OpenID Connect (OIDC) is a modern and highly secure method for authenticating GitHub Actions workflows directly with cloud providers (like AWS, Azure, GCP) without needing to store long-lived credentials as GitHub Secrets. Instead, GitHub generates a short-lived, verifiable JWT token during a workflow run. Your cloud provider is configured to trust GitHub's OIDC provider and exchange this JWT for temporary cloud credentials. This eliminates the risk of static credentials being leaked or expiring. To implement OIDC, you typically configure an Identity Provider in your cloud account to trust `token.actions.githubusercontent.com` and then create a role or service principal that can assume this identity, granting it the necessary permissions. In your workflow, you use `permissions: id-token: write` and then an action like `aws-actions/configure-aws-credentials@v4` with `role-to-assume` to leverage the OIDC token. This is a significant security upgrade over managing `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` directly.

Another critical security control is managing workflow permissions. By default, workflows are granted a `GITHUB_TOKEN` with a set of default permissions that are often broader than necessary. You can explicitly define `permissions` at the workflow or job level to restrict what the `GITHUB_TOKEN` can do. For instance, if your workflow only needs to read repository contents and write package releases, you might specify:
```yaml
permissions:
  contents: read
  packages: write
  pull-requests: write # if you need to comment on PRs
  id-token: write # if using OIDC
```
Any permissions not explicitly granted will default to `none`. This granular control ensures that even if a workflow is exploited, the blast radius is minimized. For example, if a workflow only needs `contents: read`, it cannot accidentally (or maliciously) push code back to the repository.

The GitHub Actions ecosystem thrives on community-contributed actions, but using third-party actions introduces a supply chain risk. An action from an unknown source could contain malicious code. Always pin actions to a full-length commit SHA (e.g., `uses: actions/checkout@b4546c8d62a82b9e6f3d1797d1900e260c6d5731`) instead of just a major version (`@v4`). While pinning to a major version allows you to receive bug fixes and security patches, pinning to a specific SHA provides absolute immutability, ensuring the exact code you reviewed is always executed. For critical workflows, consider auditing the source code of third-party actions or even self-hosting commonly used actions within your organization. GitHub also offers "verified creator" badges for actions from trusted sources.

Finally, integrate security scanning directly into your CI/CD pipeline. GitHub provides built-in capabilities like CodeQL for code scanning and Dependabot for dependency scanning. Code scanning automatically analyzes your code for security vulnerabilities and coding errors. You can enable it directly from your repository's security tab or add a `github/codeql-action` to your workflow. Dependabot, on the other hand, automatically checks your project's dependencies for known vulnerabilities and creates pull requests to update them. These tools provide continuous security feedback, helping you identify and remediate vulnerabilities early in the development lifecycle, before they reach production. By combining secret management, OIDC, granular permissions, careful action selection, and integrated scanning, you can significantly harden your GitHub Actions workflows against potential threats.

#### Key concepts
*   **GitHub Secrets:** Encrypted environment variables stored in GitHub, used to secure sensitive data like API keys and credentials within workflows.
*   **OpenID Connect (OIDC):** A modern authentication method that allows GitHub Actions workflows to obtain short-lived, temporary credentials from cloud providers without storing static secrets.
*   **Principle of Least Privilege:** The security concept of granting users or processes only the minimum permissions necessary to perform their intended function.
*   **`permissions` keyword:** Used in GitHub Actions workflows to explicitly define the access rights of the `GITHUB_TOKEN` for a workflow or job.
*   **Third-party Actions Security:** The practice of carefully selecting, reviewing, and pinning community actions to specific commit SHAs to mitigate supply chain risks.
*   **Code Scanning:** Automated analysis of source code to find security vulnerabilities and coding errors, often using tools like GitHub CodeQL.
*   **Dependency Scanning:** Automated identification of known vulnerabilities in project dependencies, typically managed by tools like GitHub Dependabot.

#### Hands-on activity
**Activity: Implement OIDC for AWS Authentication**

This activity will guide you through setting up a basic OIDC trust relationship between GitHub Actions and AWS, allowing your workflow to assume an IAM role without storing AWS credentials as GitHub Secrets.

**Prerequisites:**
*   An AWS account with permissions to create IAM Identity Providers and IAM Roles.
*   A GitHub repository.

**Steps:**

1.  **Configure AWS IAM Identity Provider:**
    *   Go to the AWS IAM console -> Identity providers -> Add provider.
    *   Select "OpenID Connect".
    *   **Provider URL:** `https://token.actions.githubusercontent.com`
    *   **Audience:** `sts.amazonaws.com`
    *   Click "Add provider".

2.  **Create an AWS IAM Role for GitHub Actions:**
    *   Go to the AWS IAM console -> Roles -> Create role.
    *   Select "Web identity".
    *   **Identity provider:** Choose the `token.actions.githubusercontent.com` provider you just created.
    *   **Audience:** `sts.amazonaws.com`
    *   Click "Next".
    *   **Permissions:** Attach a policy that grants minimal permissions. For this exercise, let's allow listing S3 buckets: `AmazonS3ReadOnlyAccess`. In a real scenario, you'd create a custom policy with only the necessary permissions.
    *   Click "Next".
    *   **Role name:** `GitHubActionsOIDCExampleRole` (or similar).
    *   Click "Create role".
    *   **Important:** After creating the role, edit its Trust Policy. It should look something like this. If it doesn't, modify it to include a `StringEquals` condition for the subject (repo name) and optionally a `StringLike` for the branch (e.g., `ref:refs/heads/main`). This ensures only specific repositories/branches can assume this role.
        ```json
        {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
              },
              "Action": "sts:AssumeRoleWithWebIdentity",
              "Condition": {
                "StringEquals": {
                  "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
                  "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_ORG/YOUR_REPO_NAME:ref:refs/heads/main"
                }
              }
            }
          ]
        }
        ```
        Replace `YOUR_ACCOUNT_ID`, `YOUR_GITHUB_ORG`, and `YOUR_REPO_NAME` with your actual values.

3.  **Create the GitHub Actions workflow:**
    *   In your GitHub repository, create `.github/workflows/aws-oidc-test.yml`.

4.  **Workflow content template:**
    ```yaml
    name: AWS OIDC Test

    on:
      push:
        branches:
          - main

    jobs:
      test-aws-access:
        runs-on: ubuntu-latest
        permissions:
          id-token: write # Required for OIDC
          contents: read  # Required to checkout code

        steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Configure AWS Credentials with OIDC
          uses: aws-actions/configure-aws-credentials@v4
          with:
            role-to-assume: arn:aws:iam::YOUR_ACCOUNT_ID:role/GitHubActionsOIDCExampleRole # Replace with your AWS Account ID and Role Name
            aws-region: us-east-1 # Or your preferred AWS region

        - name: List S3 buckets (requires S3 read permission on the assumed role)
          run: aws s3 ls
    ```

5.  **Commit and push:** Commit the workflow file and push to your `main` branch. Observe the workflow run. If configured correctly, it should successfully list your S3 buckets without any explicit AWS credentials stored in GitHub Secrets.

#### Assessment idea
1.  **Question:** Your GitHub Actions workflow needs to deploy an application to an AWS S3 bucket. You want to use the most secure method for authenticating with AWS. Which of the following approaches is generally considered the most secure and why?

    A) Store `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as GitHub Repository Secrets and reference them in your workflow.
    B) Hardcode `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` directly into your workflow YAML file.
    C) Configure an AWS IAM Identity Provider for GitHub Actions and use OpenID Connect (OIDC) to assume an IAM role with temporary credentials.
    D) Create a dedicated GitHub App and use its installation token for AWS authentication.

    **Correct Answer:** C)
    **Explanation:** Option C, using OpenID Connect (OIDC) to assume an IAM role, is the most secure approach. It eliminates the need to store long-lived static AWS credentials (access key and secret key) in GitHub Secrets. Instead, GitHub Actions generates a short-lived, verifiable JWT token, which AWS exchanges for temporary credentials. This significantly reduces the risk of credential leakage or expiration. Options A and B involve static credentials, with B being highly insecure due to hardcoding. Option D is not a standard or recommended way to authenticate GitHub Actions with AWS.

2.  **Question:** You are using a third-party GitHub Action `my-org/my-action@v1`. To mitigate supply chain risks and ensure reproducibility, how should you ideally pin this action in your workflow, and why?

    **Correct Answer:** You should pin the action to its full-length commit SHA, for example, `uses: my-org/my-action@a1b2c3d4e5f67890abcdef1234567890abcdef`.
    **Explanation:** Pinning to a full-length commit SHA ensures that your workflow always executes the exact, immutable version of the action's code that you have reviewed (or that has been verified). This prevents unexpected changes, security vulnerabilities, or breaking changes introduced in new minor or patch versions of the action from affecting your workflow without your explicit knowledge. While pinning to a major version (`@v1`) allows you to receive security patches and bug fixes automatically, it also means the underlying code can change, introducing a potential, albeit smaller, supply chain risk. For maximum security and reproducibility, the commit SHA is the strongest choice.

#### AI generation note
Create a 15-minute interactive lesson. Begin with a 4-minute animated explanation of GitHub Secrets vs. OIDC, highlighting the flow of OIDC with AWS. Then, provide a 7-minute guided walkthrough of the "Implement OIDC for AWS Authentication" hands-on activity, showing the AWS IAM console configuration steps (Identity Provider, Role, Trust Policy modification) and the GitHub workflow creation. Use clear screenshots and terminal output for `aws s3 ls`. Conclude with a 4-minute segment on third-party action security (pinning to SHA, verified creators) and a brief overview of CodeQL/Dependabot, showing where to enable them in GitHub UI. Include a reflection prompt: "Consider a scenario where you're deploying to multiple cloud providers. How might OIDC simplify credential management compared to static secrets?"

### Chapter 6.3 — Monitoring, Logging, and Troubleshooting Workflows

#### Learning objectives
*   Navigate and interpret GitHub Actions workflow logs to identify errors and bottlenecks.
*   Utilize advanced logging techniques, including debug logging, to gain deeper insights into workflow execution.
*   Implement conditional logic and error handling strategies to make workflows more robust.
*   Apply effective troubleshooting methodologies to diagnose and resolve common workflow failures.

#### Detailed lesson content
Even the most meticulously designed GitHub Actions workflows can encounter issues. Whether it's a transient network error, a misconfigured environment variable, or a bug in your application's tests, knowing how to effectively monitor, log, and troubleshoot your workflows is an indispensable skill. GitHub Actions provides a robust interface for observing workflow runs and delving into their execution details, which is your primary tool for debugging.

When a workflow fails, the first place to look is the "Actions" tab in your GitHub repository. Here, you'll see a list of all workflow runs, their statuses (success, failure, cancelled), and the associated commit or event. Clicking on a failed run will take you to a detailed view, showing each job and its individual steps. The step that failed will typically be highlighted in red. Clicking on the failed step will expand its logs, providing a chronological output of everything that happened during that step's execution. Pay close attention to error messages, stack traces, and any output that immediately precedes the failure. Often, the root cause is clearly stated in the logs, such as a missing file, an incorrect command, or an authentication error. Don't just skim; read the logs carefully from the point of failure upwards.

For more complex issues, or when the default logs don't provide enough detail, you can enable debug logging. GitHub Actions allows you to set specific environment variables to increase the verbosity of the runner's output. Setting `ACTIONS_STEP_DEBUG` to `true` as a repository secret will enable step debugging, providing more detailed information about the execution of actions. Similarly, `RUNNER_DEBUG` set to `1` will enable runner diagnostic logging, which is even more verbose and can help diagnose issues with the runner itself. Remember to disable these debug flags once you've resolved the issue, as they can expose sensitive information and clutter logs. Another useful technique is to add `echo` or `print` statements within your `run` steps to output the values of variables or the state of your environment at specific points. For instance, `run: echo "Current directory: $(pwd)"` or `run: printenv` can reveal crucial context.

Robust workflows anticipate potential failures and handle them gracefully. The `continue-on-error` keyword, when set to `true` for a step, allows the workflow to proceed even if that specific step fails. This can be useful for non-critical steps like sending a notification or generating a non-essential report, preventing the entire workflow from failing due to a minor issue. However, use it judiciously; you wouldn't want to `continue-on-error` for a critical build or test step. For more sophisticated error handling, you can combine `if` conditions with the `always()` or `failure()` status check functions. For example, `if: ${{ always() }}` ensures a step runs regardless of previous step failures, which is ideal for cleanup or notification steps. `if: ${{ failure() }}}` ensures a step only runs if a previous step in the same job failed, allowing you to trigger specific actions like sending an error report or rolling back a deployment.

When troubleshooting, adopt a systematic approach. First, **reproduce the issue**: Can you make it fail consistently? Is it only on a specific branch or event? Second, **isolate the problem**: Comment out parts of your workflow or simplify steps until you find the exact point of failure. Use `echo` commands to print intermediate values. Third, **check external dependencies**: Is an external API down? Is your cloud provider having issues? Fourth, **review recent changes**: What code or workflow changes were made just before the failure started? Often, the last change is the culprit. Fifth, **consult documentation and community**: GitHub Actions documentation is extensive, and the community forums or Stack Overflow can provide solutions for common problems. Finally, **use the `workflow_dispatch` event** to manually trigger workflows with specific inputs, allowing you to test changes rapidly without pushing new commits. By combining these strategies with careful log analysis, you'll be able to quickly pinpoint and resolve most workflow issues, ensuring your CI/CD pipeline remains reliable and efficient.

#### Key concepts
*   **Workflow Logs:** Detailed chronological output of each step's execution within a GitHub Actions workflow run, accessible via the "Actions" tab.
*   **Debug Logging:** Enabling verbose output from the GitHub Actions runner or specific actions using environment variables like `ACTIONS_STEP_DEBUG` or `RUNNER_DEBUG` (set as secrets).
*   **`continue-on-error`:** A keyword that allows a workflow to proceed to subsequent steps even if the current step fails.
*   **`if` conditions (status check functions):** Using expressions like `if: ${{ always() }}` or `if: ${{ failure() }}` to conditionally execute steps based on the success or failure of previous steps.
*   **`workflow_dispatch` event:** A manual trigger for workflows, allowing for custom inputs, useful for testing and debugging without pushing code.
*   **Systematic Troubleshooting:** A methodical approach to diagnosing issues, involving reproduction, isolation, checking dependencies, and reviewing changes.

#### Hands-on activity
**Activity: Debugging a Failing Workflow and Implementing Error Handling**

You will intentionally introduce a failure into a workflow, then use logging and error handling techniques to diagnose and manage it.

1.  **Set up your repository:**
    *   Use an existing repository or create a new one.
    *   Create a file `.github/workflows/debug-test.yml`.

2.  **Create an intentionally failing workflow:**
    ```yaml
    name: Debugging Exercise

    on:
      push:
        branches:
          - main
      workflow_dispatch:

    jobs:
      build-and-test:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Install dependencies (will fail)
          run: npm install-non-existent-package # This command will intentionally fail
          # continue-on-error: true # Keep this commented for now

        - name: Run tests (should be skipped if install fails)
          run: echo "Running tests..."
          if: success() # Only run if previous steps succeeded

        - name: Always run cleanup
          run: echo "Performing cleanup regardless of previous step status."
          if: always()

        - name: Notify on failure
          run: echo "Workflow failed! Check logs for details."
          if: failure()
    ```

3.  **Commit and push:** Commit `debug-test.yml` and push to `main`. Observe the workflow fail.

4.  **Troubleshoot:**
    *   Go to the "Actions" tab, click on the failed run.
    *   Identify the `Install dependencies (will fail)` step. Expand its logs. What is the error message? (It should indicate `npm install-non-existent-package` is not a valid command).

5.  **Implement `continue-on-error` and re-run:**
    *   Edit `debug-test.yml`. Uncomment `continue-on-error: true` for the `Install dependencies (will fail)` step.
    *   Commit and push.
    *   Observe the workflow run. What happens to the `Run tests` step? (It should still be skipped because `success()` evaluates to false for the previous step, even with `continue-on-error`). What about `Always run cleanup` and `Notify on failure`?

6.  **Enable debug logging (optional, but good practice):**
    *   Go to your repository settings -> Secrets and variables -> Actions -> Repository secrets.
    *   Add a new secret: `ACTIONS_STEP_DEBUG` with value `true`.
    *   Re-run the workflow (e.g., using `workflow_dispatch`). Observe the significantly more verbose logs. Remember to delete the secret afterward.

#### Assessment idea
1.  **Question:** A GitHub Actions workflow is failing consistently at a step that runs a custom shell script. The error message in the logs is generic, like "Process completed with exit code 1." You suspect an environment variable might not be set correctly within the script's execution context. What is the most effective way to quickly debug this specific issue without making significant changes to your repository's code?

    A) Add `echo "DEBUG: MY_VAR=${MY_VAR}"` directly into the shell script at various points and push the changes.
    B) Enable `ACTIONS_STEP_DEBUG` as a repository secret and re-run the workflow.
    C) Modify the failing step in the workflow to include `run: printenv` before executing the script.
    D) Set `continue-on-error: true` for the failing step and check if subsequent steps provide more details.

    **Correct Answer:** C)
    **Explanation:** Option C is the most direct and effective way to diagnose an environment variable issue in a specific step. `printenv` will dump all environment variables available to that step's context, allowing you to see if `MY_VAR` is present and has the expected value. Option A requires modifying the actual script and pushing, which might not be desirable for quick debugging. Option B (`ACTIONS_STEP_DEBUG`) provides very verbose output for the entire step, which might be overkill and harder to parse for a specific variable. Option D (`continue-on-error`) doesn't help diagnose the root cause; it just allows the workflow to proceed.

2.  **Question:** You have a workflow that performs a critical deployment. If any step in the deployment job fails, you want to ensure that a notification is sent to a Slack channel, but the notification step itself should never cause the entire workflow to fail if, for example, the Slack API is temporarily unavailable. How would you configure the notification step in your YAML?

    **Correct Answer:**
    ```yaml
    - name: Send Slack Failure Notification
      if: failure()
      run: |
        echo "Deployment failed! Sending Slack notification..."
        # Your Slack notification command/action here, e.g.,
        # uses: slackapi/slack-github-action@v1.23.0
        # with:
        #   payload: '{"text": "Deployment failed for ${{ github.repository }} on ${{ github.ref_name }}!"}'
        #   channel-id: '#deploy-alerts'
        #   slack-token: ${{ secrets.SLACK_WEBHOOK_URL }}
      continue-on-error: true # Ensure notification step itself doesn't fail the workflow
    ```
    **Explanation:** The `if: failure()` condition ensures that this step only executes if a previous step in the same job has failed. The `continue-on-error: true` for the notification step itself is crucial. It means that even if the Slack API call fails (e.g., due to a network issue or misconfiguration of the Slack action), the overall workflow run will not be marked as failed because of the notification attempt. This ensures that the primary deployment failure is still reported, but the reporting mechanism itself doesn't introduce a new point of failure.

#### AI generation note
Create a 10-minute live coding video. Start by showing a failed workflow run in the GitHub Actions UI, demonstrating how to navigate logs and identify the failing step. Then, live-code the "Debugging a Failing Workflow and Implementing Error Handling" activity, showing the initial failure, then adding `continue-on-error` and `if: failure()`/`if: always()`. Explain the impact of each change on the workflow's behavior. Demonstrate enabling `ACTIONS_STEP_DEBUG` via repository secrets and show the difference in log verbosity. Use a split-screen view for the code editor and the GitHub Actions UI/terminal output. Include a mini-quiz question about interpreting a specific log error message.

### Chapter 6.4 — Optimizing Workflow Performance and Cost

#### Learning objectives
*   Implement caching strategies to reduce workflow execution time and resource consumption.
*   Utilize matrix strategies to parallelize jobs and accelerate testing across multiple configurations.
*   Apply conditional job and step execution to skip unnecessary work.
*   Understand the cost implications of different runner types and optimize their usage.

#### Detailed lesson content
As your GitHub Actions workflows grow in complexity and frequency, optimizing their performance and managing associated costs becomes increasingly important. Slow workflows can hinder developer productivity, and inefficient resource usage can lead to unexpected billing. Fortunately, GitHub Actions provides several powerful features to help you make your CI/CD pipelines faster and more cost-effective.

One of the most effective ways to speed up workflows is by caching dependencies. Many build processes involve installing numerous packages (e.g., `node_modules` for Node.js, `vendor` for PHP, Maven/Gradle dependencies for Java, `pip` packages for Python). These installations can take a significant amount of time. The `actions/cache@v4` action allows you to cache these dependencies between workflow runs. The cache works by storing a directory (e.g., `node_modules/`) based on a unique key, often derived from a dependency manifest file (e.g., `package-lock.json`). If the key matches a previously stored cache, the action restores the directory, skipping the installation step. If no match is found, the installation proceeds, and a new cache is saved.
```yaml
- name: Cache Node.js modules
  uses: actions/cache@v4
  with:
    path: ~/.npm # Or node_modules in your project root
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```
Here, the `key` is based on the OS and a hash of `package-lock.json`. If `package-lock.json` changes, a new cache is generated. `restore-keys` provides fallback keys if an exact match isn't found, allowing for partial cache hits. Properly configured caching can dramatically reduce workflow run times, especially for projects with many dependencies.

Parallelizing jobs is another powerful optimization technique, particularly for testing. If you need to run tests across multiple Node.js versions, different operating systems, or various browser configurations, a `matrix` strategy allows you to define these combinations, and GitHub Actions will run a separate job for each permutation concurrently. This can significantly reduce the total time it takes to get feedback on your changes.
```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node-version: [18, 20]
    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm test
```
This example will create four jobs: Ubuntu with Node 18, Ubuntu with Node 20, Windows with Node 18, and Windows with Node 20, all running in parallel. While matrix jobs consume more runner minutes (and thus potentially more cost), the reduced wall-clock time for feedback can be invaluable.

Conditional execution, using `if` statements, helps avoid unnecessary work. For instance, you might only want to deploy to production when changes are pushed to the `main` branch, or only run linting checks on pull requests.
```yaml
- name: Deploy to Production
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  run: ./deploy-to-prod.sh
```
This step will only run if the push is to the `main` branch. Similarly, you can conditionally skip entire jobs using `if` at the job level. This reduces runner minutes by not executing irrelevant jobs or steps, directly impacting cost and overall pipeline efficiency.

Regarding cost, GitHub-hosted runners consume "runner minutes," which are billed based on the operating system and hardware. Linux runners are generally the cheapest, followed by Windows, and then macOS. For organizations with high workflow usage, or those with specific hardware/software requirements, self-hosted runners can be a cost-effective alternative. Self-hosted runners run on your own infrastructure (your servers, VMs, or containers), meaning you only pay for your infrastructure costs, not GitHub's runner minutes. They also offer more control over the environment and can be pre-warmed with dependencies, further reducing setup time. However, you are responsible for their maintenance, security, and scaling. Carefully evaluate your usage patterns and budget to decide if self-hosted runners are a viable option. Combining these optimization strategies—caching, parallelization, conditional execution, and smart runner selection—will allow you to build efficient, fast, and cost-aware CI/CD pipelines with GitHub Actions.

#### Key concepts
*   **Caching:** Storing and reusing files or directories (like installed dependencies) between workflow runs to reduce execution time.
*   **`actions/cache`:** The official GitHub Action for implementing caching in workflows.
*   **Matrix Strategy:** A feature that allows you to run a job multiple times with different combinations of variables (e.g., OS, Node.js version) in parallel.
*   **Parallelization:** Executing multiple jobs or steps concurrently to reduce the total workflow run time.
*   **Conditional Execution (`if`):** Using expressions to determine whether a job or step should run, based on conditions like branch name, event type, or previous step status.
*   **Runner Minutes:** The unit of billing for GitHub-hosted runners.
*   **Self-hosted Runners:** Runners that you deploy and manage on your own infrastructure, offering cost savings and custom environments.

#### Hands-on activity
**Activity: Implement Caching and a Basic Matrix Job**

You will enhance a Node.js workflow to use dependency caching and then introduce a matrix strategy to test across multiple Node.js versions.

1.  **Set up your repository:**
    *   Use the repository from Chapter 6.1's activity, or create a new one with a `package.json` and a simple `test` script (e.g., `echo "Running tests for Node.js $NODE_VERSION"`).
    *   Ensure you have a `package-lock.json` (run `npm install` locally if you don't).

2.  **Create/Modify the workflow file:**
    *   Create or modify `.github/workflows/optimize-test.yml`.

3.  **Workflow content template:**
    ```yaml
    name: Optimized Node.js CI

    on:
      push:
        branches:
          - main
      pull_request:
        branches:
          - main
      workflow_dispatch:

    jobs:
      build-and-test:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node-version: [18, 20] # Test with Node.js 18 and 20

        steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Set up Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v4
          with:
            node-version: ${{ matrix.node-version }}

        - name: Cache Node.js modules
          uses: actions/cache@v4
          with:
            path: ~/.npm # Common cache location for npm
            key: ${{ runner.os }}-node-${{ matrix.node-version }}-${{ hashFiles('**/package-lock.json') }}
            restore-keys: |
              ${{ runner.os }}-node-${{ matrix.node-version }}-

        - name: Install dependencies
          run: npm ci

        - name: Run tests
          run: npm test
    ```

4.  **Commit and push:** Commit the changes and push to your `main` branch.

5.  **Observe and Compare:**
    *   Go to the "Actions" tab. You should see two parallel jobs running (one for Node 18, one for Node 20).
    *   Observe the first run: the "Cache Node.js modules" step will likely show "Cache not found".
    *   Run the workflow again (e.g., by pushing another empty commit or using `workflow_dispatch`).
    *   Observe the second run: the "Cache Node.js modules" step should now show "Cache restored", and the "Install dependencies" step should be significantly faster or even skipped if `npm ci` detects the cache. Compare the total run times.

#### Assessment idea
1.  **Question:** You have a Python project with many dependencies listed in `requirements.txt`. Your CI workflow runs `pip install -r requirements.txt` in every job, which takes a long time. You want to implement caching to speed this up. Which of the following `actions/cache` configurations is most appropriate for caching Python dependencies?

    A)
    ```yaml
    - uses: actions/cache@v4
      with:
        path: ~/.cache/pip
        key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
    ```

    B)
    ```yaml
    - uses: actions/cache@v4
      with:
        path: .
        key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
    ```

    C)
    ```yaml
    - uses: actions/cache@v4
      with:
        path: /tmp/pip-cache
        key: ${{ runner.os }}-pip-${{ github.sha }}
    ```

    D)
    ```yaml
    - uses: actions/cache@v4
      with:
        path: ~/.cache/pip
        key: ${{ runner.os }}-pip-latest
    ```

    **Correct Answer:** A)
    **Explanation:** Option A correctly identifies the common `pip` cache directory (`~/.cache/pip`) and uses a key that includes the operating system and a hash of `requirements.txt`. Hashing `requirements.txt` ensures that the cache is invalidated and rebuilt only when the dependencies themselves change, which is the desired behavior. Option B caches the entire repository, which is inefficient. Option C uses `github.sha` as the key, which changes with every commit, making the cache ineffective. Option D uses a static key `latest`, which means the cache would never be updated even if `requirements.txt` changes, leading to stale dependencies.

2.  **Question:** Your team wants to ensure that all pull requests are tested against both Ubuntu and Windows environments, and for Node.js projects, specifically against Node.js versions 18 and 20. How would you configure a `matrix` strategy to achieve this?

    **Correct Answer:**
    ```yaml
    jobs:
      test:
        runs-on: ${{ matrix.os }}
        strategy:
          matrix:
            os: [ubuntu-latest, windows-latest]
            node-version: [18, 20]
        steps:
          - uses: actions/checkout@v4
          - name: Set up Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v4
            with:
              node-version: ${{ matrix.node-version }}
          - name: Install dependencies
            run: npm ci
          - name: Run tests
            run: npm test
    ```
    **Explanation:** This configuration correctly defines two matrix variables: `os` with `ubuntu-latest` and `windows-latest`, and `node-version` with `18` and `20`. The `runs-on: ${{ matrix.os }}` ensures the job runs on the specified operating system, and `node-version: ${{ matrix.node-version }}` sets up the correct Node.js environment for each combination. This will result in 2 (OS) * 2 (Node versions) = 4 parallel jobs, covering all specified testing scenarios efficiently.

#### AI generation note
Create a 12-minute interactive code demo. Start by showing a slow workflow run without caching, highlighting the `npm ci` duration. Then, live-code the addition of `actions/cache@v4`, explaining the `path`, `key`, and `restore-keys` parameters. Run the workflow again and show the "Cache restored" message and reduced run time. Next, introduce the `matrix` strategy, demonstrating how to add `os` and `node-version` variables. Show the parallel jobs in the GitHub Actions UI. Conclude with a brief discussion on conditional execution (`if` statements) and self-hosted runners, showing a simple `if` example. Include a mini-quiz asking about the ideal `cache` key for a Python project.

### Chapter 6.5 — Integrating GitHub Actions with External Services and APIs

#### Learning objectives
*   Authenticate GitHub Actions workflows with major cloud providers (AWS, Azure, GCP) using OIDC for secure deployments.
*   Send automated notifications to communication platforms like Slack or Microsoft Teams from workflows.
*   Interact with custom APIs and webhooks from within GitHub Actions.
*   Design workflows that orchestrate deployments across multiple external services.

#### Detailed lesson content
The true power of GitHub Actions lies not just in automating tasks within your repository, but in its ability to integrate seamlessly with a vast ecosystem of external services and APIs. This allows you to build comprehensive CI/CD pipelines that can deploy applications to cloud providers, send notifications, trigger other automation systems, and much more. This chapter focuses on how to securely and effectively connect your workflows to the outside world.

A cornerstone of external integration, especially for cloud deployments, is secure authentication. As discussed in the security chapter, OpenID Connect (OIDC) is the recommended method for authenticating with major cloud providers like AWS, Azure, and Google Cloud Platform. Instead of managing long-lived static credentials, OIDC allows your workflow to obtain short-lived, temporary credentials directly from the cloud provider by presenting a trusted JWT token issued by GitHub. For AWS, you'd use `aws-actions/configure-aws-credentials@v4` with a `role-to-assume` that has a trust policy configured to accept OIDC tokens from GitHub. For Azure, `azure/login@v1` with `client-id`, `tenant-id`, and `subscription-id` can leverage OIDC. Similarly, Google Cloud has actions like `google-github-actions/auth@v2` that facilitate OIDC-based authentication to assume a service account. The setup involves configuring an Identity Provider in your cloud account to trust GitHub's OIDC provider and then creating roles or service accounts with specific permissions that your workflow can assume. This greatly enhances security by minimizing the exposure of sensitive, static credentials.

Beyond cloud deployments, sending notifications is a very common integration. Keeping your team informed about workflow successes, failures, or important deployment events is crucial. GitHub Actions can easily integrate with communication platforms like Slack or Microsoft Teams. There are numerous community actions available for this purpose, such as `slackapi/slack-github-action@v1.23.0` for Slack or `microsoft/teams-webhook-action@v2` for Microsoft Teams. These actions typically require a webhook URL or an OAuth token, which should always be stored as a GitHub Secret.
```yaml
- name: Send Slack notification on failure
  if: failure()
  uses: slackapi/slack-github-action@v1.23.0
  with:
    payload: |
      {
        "text": "Workflow failed for ${{ github.repository }} on branch ${{ github.ref_name }}! See ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
      }
    channel-id: '#devops-alerts'
    slack-token: ${{ secrets.SLACK_WEBHOOK_TOKEN }}
  continue-on-error: true # Ensure notification doesn't cause workflow to fail
```
This snippet demonstrates sending a rich Slack message on workflow failure, including a link to the run. The `continue-on-error: true` is a good practice here, preventing the workflow from failing if the notification itself encounters an issue.

Interacting with custom APIs or triggering webhooks is also straightforward. You can use standard command-line tools like `curl` directly within a `run` step to make HTTP requests. This is useful for triggering external build systems, updating project management tools, or interacting with custom backend services.
```yaml
- name: Trigger external build system
  run: |
    curl -X POST -H "Content-Type: application/json" \
         -H "Authorization: Bearer ${{ secrets.EXTERNAL_API_TOKEN }}" \
         -d '{"event": "github_workflow_completed", "ref": "${{ github.ref }}"}' \
         https://api.example.com/build-trigger
```
Always ensure that API tokens or sensitive data passed in headers or body are sourced from GitHub Secrets. For more complex API interactions, you might consider writing a custom JavaScript or Python script within your workflow, or even creating a custom GitHub Action, to encapsulate the logic.

Designing workflows that orchestrate deployments across multiple external services requires careful planning. You might have a workflow that first deploys a frontend to a static hosting service, then a backend to a container service, and finally updates a database schema. Each of these steps would involve specific actions and authentication methods for the respective services. Environments in GitHub Actions become particularly useful here, allowing you to define different sets of secrets and approval gates for `development`, `staging`, and `production` deployments, ensuring that changes are promoted safely and systematically across your infrastructure. By combining OIDC for secure cloud access, dedicated notification actions, and flexible `curl` commands for custom API interactions, GitHub Actions empowers you to build highly integrated and automated CI/CD pipelines that span your entire technology stack.

#### Key concepts
*   **External Service Integration:** Connecting GitHub Actions workflows to third-party platforms and APIs (e.g., cloud providers, communication tools, custom web services).
*   **Cloud Provider OIDC:** Using OpenID Connect for secure, token-based authentication with AWS, Azure, and GCP, eliminating static credentials.
*   **Notification Actions:** Community or official actions designed to send messages to communication platforms like Slack, Microsoft Teams, or Discord.
*   **`curl` command:** A command-line tool used within `run` steps to make HTTP requests to custom APIs or webhooks.
*   **Webhooks:** Automated messages sent from an application when a certain event occurs, often used to trigger other services.
*   **Orchestration:** Coordinating multiple deployment steps across different external services within a single workflow.

#### Hands-on activity
**Activity: Send a Slack Notification on Workflow Completion**

You will create a workflow that sends a simple notification to a Slack channel upon successful completion.

**Prerequisites:**
*   A Slack workspace where you can create an incoming webhook.
*   A GitHub repository.

**Steps:**

1.  **Create a Slack Incoming Webhook:**
    *   Go to your Slack workspace settings.
    *   Search for "Incoming WebHooks" in the App Directory.
    *   Add the app to your workspace.
    *   Choose a channel to post to and click "Add Incoming WebHooks integration".
    *   Copy the generated "Webhook URL". This URL is sensitive!

2.  **Add Slack Webhook URL as a GitHub Secret:**
    *   In your GitHub repository, go to Settings -> Secrets and variables -> Actions -> Repository secrets.
    *   Add a new secret named `SLACK_WEBHOOK_URL` and paste your Slack Webhook URL as its value.

3.  **Create the workflow file:**
    *   Create a file at `.github/workflows/slack-notify.yml`.

4.  **Workflow content template:**
    ```yaml
    name: Slack Notification Workflow

    on:
      push:
        branches:
          - main
      workflow_dispatch:

    jobs:
      build-and-notify:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Simulate a successful build
          run: |
            echo "Building application..."
            sleep 5 # Simulate work
            echo "Build successful!"

        - name: Send Slack success notification
          uses: slackapi/slack-github-action@v1.23.0
          with:
            payload: |
              {
                "text": "✅ Workflow *${{ github.workflow }}* completed successfully for repository *${{ github.repository }}* on branch `${{ github.ref_name }}`. See run: <${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}|#${{ github.run_number }}>"
              }
            webhook-url: ${{ secrets.SLACK_WEBHOOK_URL }}
            # You can also use channel-id and slack-token if you prefer OAuth based authentication
          if: success() # Only send if the job succeeded
          continue-on-error: true # Don't fail the workflow if Slack notification fails
    ```

5.  **Commit and push:** Commit `slack-notify.yml` and push to your `main` branch.

6.  **Observe:** Check your designated Slack channel. You should receive a notification message from your GitHub Actions workflow.

#### Assessment idea
1.  **Question:** You need to deploy a static website to an AWS S3 bucket using GitHub Actions. To ensure the highest level of security and avoid storing long-lived AWS credentials, which of the following steps are essential for setting up the authentication in your workflow? (Select all that apply)

    A) Store `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as repository secrets.
    B) Configure an IAM Identity Provider in AWS to trust `token.actions.githubusercontent.com`.
    C) Create an IAM Role in AWS with permissions to access S3 and a trust policy that allows the GitHub OIDC provider to assume it.
    D) Use the `aws-actions/configure-aws-credentials@v4` action in your workflow with `role-to-assume` and `aws-region`.
    E) Set `permissions: id-token: write` in your GitHub Actions workflow.

    **Correct Answer:** B, C, D, E
    **Explanation:**
    *   A) Storing static credentials (access key and secret key) is what OIDC aims to replace for better security.
    *   B) This is the first step in establishing the trust relationship between AWS and GitHub's OIDC provider.
    *   C) This creates the role that your workflow will assume, granting it specific permissions (e.g., S3 access) and defining who can assume it (the OIDC provider).
    *   D) This action is specifically designed to leverage the OIDC token to assume the specified IAM role, setting up the necessary environment variables for AWS CLI/SDK.
    *   E) The `id-token: write` permission is crucial for the workflow to generate and present the OIDC JWT token to AWS.

2.  **Question:** You want to trigger a custom deployment script on a remote server via an HTTP POST request from your GitHub Actions workflow. The remote server requires an API key in the `Authorization` header. How would you securely include this API key in your `curl` command within a `run` step?

    **Correct Answer:**
    ```yaml
    - name: Trigger Remote Deployment
      run: |
        curl -X POST \
             -H "Content-Type: application/json" \
             -H "Authorization: Bearer ${{ secrets.REMOTE_DEPLOY_API_KEY }}" \
             -d '{"message": "Deployment initiated by GitHub Actions"}' \
             https://your-remote-server.com/deploy
    ```
    **Explanation:** The API key (`REMOTE_DEPLOY_API_KEY`) should be stored as a GitHub Repository Secret. In the `curl` command, it is securely referenced using `${{ secrets.REMOTE_DEPLOY_API_KEY }}`. This ensures the sensitive key is not exposed in the workflow file, logs, or version control. It's passed directly into the `Authorization` header at runtime.

#### AI generation note
Create a 10-minute mixed-media lesson. Start with a 3-minute conceptual overview of integrating GitHub Actions with external services, using a diagram to illustrate data flow between GitHub, cloud providers (OIDC), and communication tools. Follow with a 5-minute live coding demo of the "Send a Slack Notification on Workflow Completion" activity, showing the Slack webhook setup (briefly, emphasizing security) and the GitHub workflow creation. Highlight the `payload` and `webhook-url` parameters, and the use of `secrets.SLACK_WEBHOOK_URL`. Conclude with a 2-minute segment on using `curl` for custom API interactions, showing a YAML snippet with a `curl` command and emphasizing `secrets` for API keys. Include an interactive element asking learners to identify the correct `curl` syntax for a specific API call.

---

## Final Capstone Project

The capstone project is your opportunity to apply the comprehensive knowledge and practical skills you've gained throughout this GitHub Actions course. You will choose one of three distinct project options, each designed to challenge you to integrate various concepts, from basic workflow creation and event triggers to advanced features like environments, secrets, and artifact management. This project is a chance to build a real-world solution, demonstrate your proficiency, and solidify your understanding of automated CI/CD pipelines with GitHub Actions.

### Project Option 1: CI/CD Pipeline for a Static Website

This project challenges you to build a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a static website. You will configure GitHub Actions to automatically build, lint, and deploy a simple static site whenever changes are pushed to your repository. This project emphasizes fundamental GitHub Actions concepts and practical deployment.

*   **Requirements:**
    *   Create a new GitHub repository containing a basic static website (e.g., HTML, CSS, JavaScript, or a simple Jekyll/Hugo/Vite project).
    *   Develop a GitHub Actions workflow that triggers on `push` events to the `main` branch.
    *   The workflow must include a job that checks out your code.
    *   Implement a step to install necessary dependencies (e.g., Node.js for linting, or a static site generator if applicable).
    *   Include a linting step (e.g., `eslint` for JavaScript, `htmlhint` for HTML) to ensure code quality. The workflow should fail if linting errors are found.
    *   Add a deployment step that publishes your static website to GitHub Pages. This will involve using the `actions/deploy-pages` action or a similar deployment action if you choose another hosting service like Netlify or Vercel (using their respective GitHub Actions).
    *   Ensure the workflow provides clear status updates in GitHub.
*   **Stretch Goals:**
    *   Add a separate workflow or job that runs on `pull_request` events to the `main` branch, performing only linting and potentially a basic build check, without deploying.
    *   Include a custom action or script to minify CSS/JS assets before deployment.
    *   Integrate a status badge for your CI/CD pipeline into your repository's `README.md`.
    *   Utilize environment variables for configuration if any are needed (e.g., a base URL).
*   **Evaluation Criteria:**
    *   **Workflow Correctness (40%):** Does the workflow execute successfully on push? Are all required steps present and correctly configured?
    *   **Deployment Success (30%):** Is the static website successfully deployed and accessible at the specified URL (e.g., GitHub Pages URL)?
    *   **Code Quality Checks (20%):** Does the linting step correctly identify issues and fail the workflow if errors exist?
    *   **Readability and Best Practices (10%):** Is the workflow `YAML` file well-structured, commented, and does it follow GitHub Actions best practices?
*   **Estimated Time:** 8-12 hours

### Project Option 2: Automated API Testing and Reporting

This project focuses on leveraging GitHub Actions to automate the testing of a simple API, generate test reports, and store them as artifacts. This is crucial for maintaining the reliability and quality of backend services. You'll practice running tests in a CI environment and managing workflow artifacts.

*   **Requirements:**
    *   Create a new GitHub repository for a simple API project (e.g., a Python Flask/FastAPI app, a Node.js Express app, or even just a collection of API test scripts using `curl` or `requests`).
    *   Include a set of automated API tests (e.g., using `pytest` for Python, `jest` for Node.js, or `newman` for Postman collections). These tests should interact with a public API or a simple mock API you create.
    *   Develop a GitHub Actions workflow that triggers on `push` events to the `main` branch and `pull_request` events targeting `main`.
    *   The workflow must check out the code, set up the appropriate language environment (e.g., Python, Node.js), and install test dependencies.
    *   Execute the API tests within the workflow. The workflow should fail if any tests fail.
    *   Configure the test runner to generate a test report in a standard format (e.g., JUnit XML, JSON).
    *   Upload the generated test report as a workflow artifact, ensuring it's accessible after the workflow run completes.
*   **Stretch Goals:**
    *   Add a scheduled workflow run (e.g., daily at midnight) to perform a health check on the API.
    *   Integrate a third-party action to publish the test results to a more user-friendly interface (e.g., a simple web page, or a service like Codecov for coverage reports).
    *   Use a GitHub Secret to store an API key if your tests interact with a protected external API.
    *   Implement a conditional step that only uploads artifacts if the tests pass.
*   **Evaluation Criteria:**
    *   **Workflow Execution (35%):** Does the workflow run successfully on specified triggers, installing dependencies and executing tests?
    *   **Test Results (30%):** Do the API tests correctly identify issues (if any are introduced) and pass when the API functions as expected?
    *   **Artifact Management (25%):** Is the test report correctly generated and uploaded as an accessible artifact?
    *   **Security and Best Practices (10%):** Are secrets handled appropriately (if applicable)? Is the workflow readable and efficient?
*   **Estimated Time:** 10-15 hours

### Project Option 3: Multi-Environment Deployment with Approval

This advanced project focuses on implementing a robust deployment pipeline that targets multiple environments (e.g., staging and production) and incorporates manual approval steps for critical deployments. This is a common pattern in professional CI/CD setups, ensuring controlled releases.

*   **Requirements:**
    *   Create a new GitHub repository for a simple application (e.g., a "Hello World" web app in any language) that can be deployed.
    *   Define two distinct GitHub Environments: `Staging` and `Production`.
    *   Develop a GitHub Actions workflow with at least two jobs: one for `Staging` deployment and one for `Production` deployment.
    *   The `Staging` deployment job should trigger automatically on `push` events to a `develop` branch (or similar feature branch). It should deploy the application to a simulated staging endpoint (e.g., print a message "Deploying to Staging..." or use a free tier cloud service like Render/Heroku).
    *   The `Production` deployment job should only trigger after the `Staging` deployment job has successfully completed.
    *   Configure the `Production` environment to require a manual approval from a specific team or user before the deployment job can proceed.
    *   Use environment-specific secrets (e.g., `STAGING_API_KEY`, `PRODUCTION_API_KEY`) within each respective deployment job, even if they are mock values for this project.
    *   Implement conditional logic to ensure the `Production` deployment only runs when changes are merged into the `main` branch.
*   **Stretch Goals:**
    *   Add a "rollback" step or job that can be manually triggered to revert a deployment in case of issues.
    *   Integrate actual deployment commands for a chosen cloud provider (e.g., `aws s3 sync`, `az webapp deploy`, `gcloud app deploy`) using their respective GitHub Actions or CLIs.
    *   Implement a matrix strategy for testing across different configurations before deployment.
    *   Set up environment protection rules beyond just manual approval, such as required reviewers or wait timers.
*   **Evaluation Criteria:**
    *   **Environment Configuration (30%):** Are the `Staging` and `Production` environments correctly defined with appropriate protection rules (especially manual approval)?
    *   **Workflow Logic (30%):** Does the workflow correctly sequence deployments (Staging before Production)? Is the conditional logic for branch merges and environment targeting correct?
    *   **Approval Process (20%):** Does the `Production` deployment correctly pause and require manual approval?
    *   **Secret and Variable Management (10%):** Are environment-specific secrets correctly used and secured within their respective jobs?
    *   **Readability and Scalability (10%):** Is the workflow well-structured and extensible for future environments or steps?
*   **Estimated Time:** 12-18 hours

## Final Examination

This final examination assesses your comprehensive understanding of GitHub Actions, covering all modules from fundamental concepts to advanced deployment strategies. The questions are designed to test your knowledge of workflow syntax, security practices, debugging skills, and the ability to design effective CI/CD pipelines.

---

**Instructions:** Please answer all questions thoroughly. For code-related questions, ensure your syntax is correct and your logic is clear. For design and debugging problems, provide detailed explanations of your reasoning and proposed solutions.

---

### Section 1: Concept Definitions (4 Questions)

1.  **Question:** Explain the primary purpose of a GitHub Actions `workflow` and how it differs from a single `action`.
    *   **Correct Answer/Explanation:** A GitHub Actions `workflow` is an automated, configurable procedure that runs one or more jobs. It's defined in a YAML file and specifies when it should run (triggers), what steps to take, and on which runner. Its primary purpose is to automate tasks like building, testing, and deploying code. A single `action`, on the other hand, is a reusable unit of work within a workflow. It's a pre-built script or program that performs a specific task (e.g., `actions/checkout`, `setup-node`). Workflows orchestrate actions and other commands to achieve a larger goal, while actions are the individual building blocks.
    *   **Partial Credit:** Correctly defining workflow or action individually, but not explaining the relationship, may receive partial credit.

2.  **Question:** Describe the hierarchical relationship between `jobs` and `steps` within a GitHub Actions workflow.
    *   **Correct Answer/Explanation:** In a GitHub Actions workflow, a `job` is a set of `steps` that executes on the same runner. Jobs run in parallel by default, but can be configured to run sequentially using the `needs` keyword. Each job represents a distinct phase of your CI/CD pipeline (e.g., `build`, `test`, `deploy`). A `step`, conversely, is an individual task within a job. Steps are executed in sequential order on the same runner and can be shell commands, actions, or scripts. They share the same filesystem and environment variables within their job.
    *   **Partial Credit:** Correctly defining jobs or steps, but not explaining their relationship or execution order, may receive partial credit.

3.  **Question:** How do `secrets` enhance the security of your GitHub Actions workflows, and why should they be preferred over hardcoding sensitive information?
    *   **Correct Answer/Explanation:** `Secrets` enhance workflow security by providing a secure way to store sensitive information (like API keys, tokens, or credentials) outside of your public repository code. They are encrypted at rest, and GitHub redacts them in workflow logs, preventing accidental exposure. When a workflow needs to access a secret, GitHub injects it as an environment variable into the runner's environment at runtime. This is preferred over hardcoding because hardcoding sensitive data directly into workflow files (which are often public) exposes it to anyone with access to the repository, making it vulnerable to compromise and difficult to rotate. Secrets centralize management and prevent sensitive data from being committed to version control.
    *   **Partial Credit:** Correctly explaining what secrets are or why hardcoding is bad, but not both, may receive partial credit.

4.  **Question:** What is a `matrix strategy` in GitHub Actions, and provide a practical scenario where you would use it.
    *   **Correct Answer/Explanation:** A `matrix strategy` allows you to run a single job multiple times with different combinations of variables. It's defined using the `strategy.matrix` keyword in a job. For each combination generated by the matrix, a separate job run is created. This is incredibly useful for testing your code across multiple environments, operating systems, language versions, or configurations without duplicating workflow code.
        *   **Practical Scenario:** You would use a matrix strategy to test a Python application across different Python versions (e.g., 3.8, 3.9, 3.10) and different operating systems (e.g., `ubuntu-latest`, `windows-latest`). This ensures your application is compatible and functions correctly in various environments.
    *   **Partial Credit:** Correctly defining matrix strategy without a practical scenario, or providing a scenario that isn't a good fit, may receive partial credit.

### Section 2: Code Tracing (3 Questions)

1.  **Question:** Consider the following workflow snippet. What will be the final output printed to the console if the workflow runs on a `push` to the `main` branch?

    ```yaml
    name: Trace Example
    on:
      push:
        branches:
          - main
    jobs:
      my-job:
        runs-on: ubuntu-latest
        steps:
          - name: Step 1
            run: echo "Hello from Step 1"
          - name: Step 2
            run: |
              MESSAGE="Hello from Step 2"
              echo $MESSAGE
          - name: Step 3
            if: ${{ github.ref == 'refs/heads/main' }}
            run: echo "This runs on main"
          - name: Step 4
            if: ${{ github.event_name == 'pull_request' }}
            run: echo "This runs on PR"
    ```

    *   **Correct Answer/Explanation:**
        The output will be:
        ```
        Hello from Step 1
        Hello from Step 2
        This runs on main
        ```
        **Explanation:**
        *   Step 1 runs unconditionally and prints "Hello from Step 1".
        *   Step 2 runs unconditionally, assigns "Hello from Step 2" to `MESSAGE`, and then prints the variable's content.
        *   Step 3 has an `if` condition `github.ref == 'refs/heads/main'`. Since the workflow is triggered by a `push` to the `main` branch, `github.ref` will indeed be `refs/heads/main`, so this step executes and prints "This runs on main".
        *   Step 4 has an `if` condition `github.event_name == 'pull_request'`. Since the workflow is triggered by `push` and not `pull_request`, this condition evaluates to `false`, and the step is skipped.
    *   **Partial Credit:** Missing one of the correct outputs or including an incorrect output may receive partial credit.

2.  **Question:** Analyze the following workflow. If `job-A` succeeds, what will be the status of `job-B` and `job-C`? If `job-A` fails, what will be their status?

    ```yaml
    name: Conditional Jobs
    on: [push]
    jobs:
      job-A:
        runs-on: ubuntu-latest
        steps:
          - run: echo "Running Job A"
      job-B:
        runs-on: ubuntu-latest
        needs: job-A
        if: ${{ always() }}
        steps:
          - run: echo "Running Job B"
      job-C:
        runs-on: ubuntu-latest
        needs: job-A
        if: ${{ success() }}
        steps:
          - run: echo "Running Job C"
    ```

    *   **Correct Answer/Explanation:**
        *   **If `job-A` succeeds:**
            *   `job-B` will run. The `if: ${{ always() }}` condition means `job-B` will always attempt to run, regardless of the success or failure of its `needs` dependencies.
            *   `job-C` will run. The `if: ${{ success() }}` condition means `job-C` will only run if all its `needs` dependencies (in this case, `job-A`) succeed. Since `job-A` succeeded, `job-C` proceeds.
        *   **If `job-A` fails:**
            *   `job-B` will run. The `if: ${{ always() }}` condition ensures it attempts to run even though `job-A` failed.
            *   `job-C` will be skipped. The `if: ${{ success() }}` condition will evaluate to `false` because `job-A` failed, so `job-C` will not execute.
    *   **Partial Credit:** Correctly identifying the status for one of the scenarios (success or failure) but not both, or misinterpreting `always()` or `success()`, may receive partial credit.

3.  **Question:** Given the workflow below, what will be the value of `steps.set_output.outputs.result` in `job-B`?

    ```yaml
    name: Output Chaining
    on: [push]
    jobs:
      job-A:
        runs-on: ubuntu-latest
        outputs:
          my_output: ${{ steps.set_output.outputs.message }}
        steps:
          - id: set_output
            run: echo "message=Hello World" >> "$GITHUB_OUTPUT"
      job-B:
        runs-on: ubuntu-latest
        needs: job-A
        steps:
          - name: Use Output
            id: use_output
            run: |
              echo "The output from Job A is: ${{ needs.job-A.outputs.my_output }}"
              echo "result=${{ needs.job-A.outputs.my_output }} from Job A" >> "$GITHUB_OUTPUT"
    ```

    *   **Correct Answer/Explanation:** The value of `steps.set_output.outputs.result` in `job-B` will be `Hello World from Job A`.
        **Explanation:**
        *   In `job-A`, the step with `id: set_output` sets an output named `message` with the value "Hello World" using `echo "message=Hello World" >> "$GITHUB_OUTPUT"`.
        *   `job-A` then exposes this output as `my_output` via `outputs: my_output: ${{ steps.set_output.outputs.message }}`. So, `job-A.outputs.my_output` becomes "Hello World".
        *   In `job-B`, it depends on `job-A`. The `Use Output` step accesses `job-A`'s output using `needs.job-A.outputs.my_output`, which correctly resolves to "Hello World".
        *   The step then sets its own output `result` using `echo "result=${{ needs.job-A.outputs.my_output }} from Job A" >> "$GITHUB_OUTPUT"`. Therefore, `steps.set_output.outputs.result` in `job-B` will be "Hello World from Job A".
    *   **Partial Credit:** Correctly identifying "Hello World" but missing the " from Job A" part, or vice-versa, may receive partial credit.

### Section 3: Code Writing (4 Questions)

1.  **Question:** Write a GitHub Actions workflow that runs on both `push` events to the `main` branch and `pull_request` events targeting the `main` branch. The workflow should check out the code, set up Node.js version 18.x, install dependencies using `npm install`, and then run tests using `npm test`.

    *   **Correct Answer/Explanation:**

        ```yaml
        name: Node.js CI

        on:
          push:
            branches: [ main ]
          pull_request:
            branches: [ main ]

        jobs:
          build-and-test:
            runs-on: ubuntu-latest

            steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Setup Node.js 18.x
              uses: actions/setup-node@v4
              with:
                node-version: '18.x'
                cache: 'npm' # Caches npm dependencies to speed up builds

            - name: Install dependencies
              run: npm install

            - name: Run tests
              run: npm test
        ```
    *   **Partial Credit:** Missing one of the triggers, incorrect Node.js version setup, or incorrect `npm` commands may receive partial credit.

2.  **Question:** Write a workflow that uses a `matrix strategy` to test a Python application across Python versions 3.8, 3.9, and 3.10 on `ubuntu-latest`. The job should check out the code, set up the specified Python version, install dependencies from `requirements.txt`, and run `pytest`.

    *   **Correct Answer/Explanation:**

        ```yaml
        name: Python Matrix Test

        on: [push, pull_request]

        jobs:
          test:
            runs-on: ubuntu-latest
            strategy:
              matrix:
                python-version: ['3.8', '3.9', '3.10']

            steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Set up Python ${{ matrix.python-version }}
              uses: actions/setup-python@v5
              with:
                python-version: ${{ matrix.python-version }}

            - name: Install dependencies
              run: |
                python -m pip install --upgrade pip
                pip install -r requirements.txt

            - name: Run tests with pytest
              run: pytest
        ```
    *   **Partial Credit:** Incorrect `matrix` syntax, missing `setup-python` action, or incorrect dependency/test commands may receive partial credit.

3.  **Question:** Write a workflow that simulates a deployment process. It should have a job that deploys to a `staging` environment automatically on `push` to the `develop` branch. After the `staging` deployment succeeds, a separate job should deploy to a `production` environment, but only after a manual approval is granted. Assume you have `STAGING_SECRET` and `PRODUCTION_SECRET` defined as repository secrets.

    *   **Correct Answer/Explanation:**

        ```yaml
        name: Multi-Environment Deployment

        on:
          push:
            branches:
              - develop
              - main # To trigger production deployment after merge to main

        jobs:
          deploy-staging:
            runs-on: ubuntu-latest
            environment: Staging # Link to the Staging environment
            if: github.ref == 'refs/heads/develop' # Only run on develop branch pushes
            steps:
            - name: Checkout code
              uses: actions/checkout@v4
            - name: Simulate Staging Deployment
              run: |
                echo "Deploying to Staging environment..."
                echo "Using secret: ${{ secrets.STAGING_SECRET }}"
                # Replace with actual staging deployment commands
                sleep 5 # Simulate deployment time
                echo "Staging deployment complete!"

          deploy-production:
            runs-on: ubuntu-latest
            needs: deploy-staging # Depends on staging deployment success
            environment:
              name: Production # Link to the Production environment
              url: https://your-production-app.com # Optional: URL for the environment
            if: github.ref == 'refs/heads/main' && success() # Only run on main branch pushes AND if staging succeeded
            steps:
            - name: Checkout code
              uses: actions/checkout@v4
            - name: Simulate Production Deployment
              run: |
                echo "Deploying to Production environment..."
                echo "Using secret: ${{ secrets.PRODUCTION_SECRET }}"
                # Replace with actual production deployment commands
                sleep 10 # Simulate deployment time
                echo "Production deployment complete!"
        ```
    *   **Partial Credit:** Missing environment definitions, incorrect `needs` dependency, missing `if` conditions for branches, or not using secrets may receive partial credit.

4.  **Question:** Write a workflow that performs a build and then uploads the build output as a workflow artifact named `my-app-build`. The build process involves creating a simple text file `build_output.txt` with the content "Application Built Successfully" in a directory named `dist`. The workflow should run on `push`.

    *   **Correct Answer/Explanation:**

        ```yaml
        name: Build and Upload Artifact

        on: [push]

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Create build directory and output
              run: |
                mkdir dist
                echo "Application Built Successfully" > dist/build_output.txt
                echo "Build output created in dist/build_output.txt"

            - name: Upload build artifact
              uses: actions/upload-artifact@v4
              with:
                name: my-app-build
                path: dist/
                retention-days: 5 # Optional: retain artifact for 5 days
        ```
    *   **Partial Credit:** Incorrect `upload-artifact` usage, missing `path` or `name`, or incorrect build simulation may receive partial credit.

### Section 4: Design & Debugging Problems (5 Questions)

1.  **Question:** A GitHub Actions workflow is consistently failing on the `Install dependencies` step with an error message similar to "Error: `npm install` failed with exit code 1". You've verified that `npm install` works locally. Suggest three common causes for this issue in a CI environment and outline debugging steps.

    *   **Correct Answer/Explanation:**
        This is a very common issue in CI/CD. Here are three common causes and debugging steps:
        1.  **Missing or Incorrect Dependencies:** The `package.json` or `package-lock.json` might be missing from the repository, or there might be an issue with the `node_modules` cache.
            *   **Debugging Steps:**
                *   **Verify `package.json`:** Ensure `package.json` and `package-lock.json` (or `yarn.lock`) are committed to the repository and accessible.
                *   **Check `npm install` output:** Review the full workflow log for the `Install dependencies` step. The error message usually provides more context about *why* `npm install` failed (e.g., specific package not found, permission error).
                *   **Rebuild cache:** If using `cache: 'npm'` in `setup-node`, try clearing the cache (if possible) or temporarily disabling it to force a fresh install.
        2.  **Node.js Version Mismatch:** The Node.js version used in the CI environment might differ from your local development environment, leading to compatibility issues with certain packages.
            *   **Debugging Steps:**
                *   **Explicitly set Node.js version:** Ensure you are using `actions/setup-node@v4` and explicitly setting the `node-version` (e.g., `node-version: '18.x'`) to match your local environment.
                *   **Check `node -v` in CI:** Add a step before `npm install` to run `node -v` and `npm -v` to confirm the versions being used by the runner.
        3.  **Resource Constraints or Network Issues:** The runner might be running out of memory or disk space, or there could be transient network issues preventing `npm` from downloading packages.
            *   **Debugging Steps:**
                *   **Retry the workflow:** Sometimes, transient network issues resolve themselves on a retry.
                *   **Check runner specs:** While less common for simple `npm install`, if the project is very large, consider if a larger runner type might be needed (though this is typically for self-hosted runners or more complex builds).
                *   **Verbose logging:** Add `npm install --verbose` to get more detailed output, which might reveal network timeouts or memory warnings.
    *   **Partial Credit:** Identifying at least two common causes and providing relevant debugging steps for each.

2.  **Question:** Design a GitHub Actions workflow that automatically lints code, runs unit tests, and then builds a Docker image. This workflow should only proceed to the next stage if all previous stages pass successfully. It should trigger on `push` to the `main` branch.

    *   **Correct Answer/Explanation:**

        ```yaml
        name: CI/CD with Docker Build

        on:
          push:
            branches: [ main ]

        jobs:
          lint:
            runs-on: ubuntu-latest
            steps:
            - name: Checkout code
              uses: actions/checkout@v4
            - name: Setup Node.js (for linting example)
              uses: actions/setup-node@v4
              with:
                node-version: '18.x'
            - name: Install Linting Dependencies
              run: npm install eslint # Example
            - name: Run Linter
              run: npm run lint # Example: assumes 'lint' script in package.json

          test:
            runs-on: ubuntu-latest
            needs: lint # This job depends on 'lint' job
            steps:
            - name: Checkout code
              uses: actions/checkout@v4
            - name: Setup Python (for testing example)
              uses: actions/setup-python@v5
              with:
                python-version: '3.9'
            - name: Install Test Dependencies
              run: pip install -r requirements.txt # Example
            - name: Run Unit Tests
              run: pytest # Example

          build-docker-image:
            runs-on: ubuntu-latest
            needs: test # This job depends on 'test' job
            steps:
            - name: Checkout code
              uses: actions/checkout@v4
            - name: Set up Docker Buildx
              uses: docker/setup-buildx-action@v3
            - name: Log in to Docker Hub (optional, if pushing to registry)
              uses: docker/login-action@v3
              with:
                username: ${{ secrets.DOCKER_USERNAME }}
                password: ${{ secrets.DOCKER_PASSWORD }}
            - name: Build and push Docker image
              uses: docker/build-push-action@v5
              with:
                context: .
                push: false # Set to true to push to registry
                tags: my-app:latest
        ```
        **Explanation:** The `needs` keyword is used to enforce sequential execution. `test` will only run if `lint` succeeds, and `build-docker-image` will only run if `test` succeeds. This ensures that the Docker image is only built after code quality and functionality are verified.
    *   **Partial Credit:** Correctly sequencing jobs with `needs` but missing one of the stages, or incorrect actions for linting/testing/Docker build, may receive partial credit.

3.  **Question:** You have a workflow that runs on every `push` event. However, you want to prevent it from running when only changes to `README.md` or files in a `docs/` directory occur, as these changes don't require a full CI run. How would you modify the `on: push` trigger to achieve this?

    *   **Correct Answer/Explanation:**
        You would use the `paths-ignore` filter within the `push` event trigger.

        ```yaml
        name: Selective CI

        on:
          push:
            branches:
              - main
            paths-ignore:
              - 'README.md'
              - 'docs/**' # Ignores any file in the docs directory and its subdirectories
              - 'LICENSE' # Another common file to ignore

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
            - name: Echo message
              run: echo "Running CI because relevant files changed!"
        ```
        **Explanation:** The `paths-ignore` key specifies patterns of files that, if *only* they are changed in a push, will cause the workflow not to run. If any other files are changed alongside these ignored files, the workflow will still trigger.
    *   **Partial Credit:** Correctly identifying `paths-ignore` but using incorrect syntax or patterns, or only ignoring one file/directory, may receive partial credit.

4.  **Question:** A workflow is deploying to production every time a pull request is merged, but you only want it to deploy if the pull request targets the `main` branch. Currently, it deploys even if a feature branch is merged into `develop` or another non-production branch. How do you fix this?

    *   **Correct Answer/Explanation:**
        The issue likely stems from an overly broad trigger or a missing conditional check within the deployment job. You need to ensure the deployment job's `if` condition specifically checks the target branch of the pull request.

        **Original (problematic) trigger might look like:**
        ```yaml
        on:
          pull_request:
            types: [closed] # Triggers on PR merge
        ```
        This triggers for *any* PR merge.

        **Fix:**
        You can refine the `pull_request` trigger to only run for PRs targeting `main`, or, more robustly, add an `if` condition to the deployment job itself that checks `github.base_ref`.

        **Option 1: Refine the `pull_request` trigger (preferred for clarity):**
        ```yaml
        name: Production Deploy

        on:
          pull_request:
            types: [closed]
            branches: # Only trigger if the PR targets these branches
              - main

        jobs:
          deploy:
            runs-on: ubuntu-latest
            # ... rest of deployment job ...
        ```

        **Option 2: Add a conditional check to the deployment job:**
        ```yaml
        name: Production Deploy

        on:
          pull_request:
            types: [closed] # Triggers for any PR merge

        jobs:
          deploy:
            runs-on: ubuntu-latest
            if: github.event.pull_request.base.ref == 'main' # Check the target branch of the PR
            steps:
            - name: Deploy to Production
              run: echo "Deploying to production after PR merge to main!"
              # ... actual deployment steps ...
        ```
        **Explanation:**
        *   `github.event.pull_request.base.ref` provides the name of the branch the pull request is targeting. By checking if this is `'main'`, we ensure the deployment job only runs when a PR is merged *into* the `main` branch.
        *   Option 1 is often cleaner as it prevents the workflow from even starting if the target branch is not `main`, saving runner minutes. Option 2 allows the workflow to start but then skips the critical job if the condition isn't met.
    *   **Partial Credit:** Suggesting to filter by `github.ref` without specifying `base.ref` or `head.ref`, or only suggesting one of the two valid options, may receive partial credit.

5.  **Question:** Describe how you would set up a reusable workflow for a common build process that multiple repositories in your organization could use. Include details on where the reusable workflow would be defined, how it would be called, and what benefits it provides.

    *   **Correct Answer/Explanation:**
        **Definition:** A reusable workflow is defined in a separate YAML file within a `.github/workflows/` directory of a *central repository* (often a dedicated "workflow" or "template" repository) within the same organization or user account. The reusable workflow file starts with `on: workflow_call:` instead of a standard event trigger like `push` or `pull_request`. It can define `inputs` to accept parameters from the calling workflow and `outputs` to pass data back.

        **Example Reusable Workflow (`.github/workflows/build-node.yml` in `my-org/workflow-templates`):**
        ```yaml
        name: Reusable Node.js Build

        on:
          workflow_call:
            inputs:
              node_version:
                required: true
                type: string
                description: 'Node.js version to use'
              run_tests:
                required: false
                type: boolean
                default: true
                description: 'Whether to run tests after install'
            outputs:
              build_status:
                description: "Status of the build job"
                value: ${{ jobs.build.outputs.status }}

        jobs:
          build:
            runs-on: ubuntu-latest
            outputs:
              status: ${{ steps.check_status.outcome }}
            steps:
            - name: Checkout repository
              uses: actions/checkout@v4
            - name: Setup Node.js ${{ inputs.node_version }}
              uses: actions/setup-node@v4
              with:
                node-version: ${{ inputs.node_version }}
                cache: 'npm'
            - name: Install dependencies
              run: npm install
            - name: Run tests
              if: ${{ inputs.run_tests }}
              run: npm test
            - name: Set build status
              id: check_status
              run: echo "status=success" >> "$GITHUB_OUTPUT" # Or failure
        ```

        **Calling:** Other repositories within the organization would call this reusable workflow using the `uses` keyword in their own workflow files, specifying the repository path and the reference (branch, tag, or SHA). They pass inputs as needed.

        **Example Calling Workflow (`.github/workflows/ci.yml` in `my-org/my-app`):**
        ```yaml
        name: App CI

        on: [push, pull_request]

        jobs:
          ci-pipeline:
            uses: my-org/workflow-templates/.github/workflows/build-node.yml@main
            with:
              node_version: '20.x'
              run_tests: true
            secrets: inherit # Inherit all secrets from the calling repository
        ```

        **Benefits:**
        1.  **DRY (Don't Repeat Yourself):** Avoids duplicating complex workflow logic across many repositories, reducing maintenance overhead.
        2.  **Consistency:** Ensures all projects adhere to the same build, test, or deployment standards.
        3.  **Maintainability:** Changes to the core CI/CD logic only need to be made in one place (the reusable workflow), and all calling workflows automatically pick up the updates (or can be pinned to a specific version).
        4.  **Security:** Centralizes the management of sensitive operations and can enforce best practices across the organization.
    *   **Partial Credit:** Correctly describing definition or calling without explaining the other, or missing key benefits, may receive partial credit.

## Course Conclusion

Congratulations on completing the GitHub Actions course! You have embarked on a transformative journey, mastering the art of automating your software development lifecycle. You've moved beyond theoretical concepts to hands-on application, building robust and efficient CI/CD pipelines that will significantly enhance your productivity and the quality of your projects.

You are now equipped with a powerful skill set. You can confidently design and implement GitHub Actions workflows from scratch, configuring triggers, jobs, and steps to automate everything from code linting and unit testing to multi-environment deployments. You understand how to secure your workflows with secrets, manage complex scenarios using matrix strategies and environments, and leverage artifacts for reporting and traceability. More importantly, you've gained the critical thinking skills to debug common workflow failures and design solutions that are both effective and maintainable.

The world of DevOps and automation is constantly evolving, and your journey with GitHub Actions is just beginning. The skills you've acquired are highly sought after in the industry, making you a valuable asset to any development team. Continue to experiment, build, and explore, and you'll find countless ways to apply and expand your expertise.

### Where to Go Next

To further solidify your expertise and explore advanced topics, consider these next steps and resources:

*   **Official GitHub Actions Documentation:** This is your ultimate reference. Dive deeper into specific actions, advanced contexts, and the latest features. Regularly check for updates and new capabilities.
*   **GitHub Marketplace:** Explore the vast array of community and GitHub-created actions. You'll find solutions for almost any task, from security scanning to cloud deployments.
*   **Contribute to Open Source:** Find open-source projects that use GitHub Actions. Contributing to their workflows or even proposing new ones is an excellent way to gain real-world experience and learn from others.
*   **Deep Dive into Cloud Deployments:** If you haven't already, explore specific cloud providers (AWS, Azure, GCP) and their integration with GitHub Actions. Look into deploying to Kubernetes, serverless functions, or other modern infrastructure.
*   **Advanced DevOps Concepts:** Consider learning about Infrastructure as Code (e.g., Terraform, Pulumi), containerization (Docker, Kubernetes), and monitoring tools. These are natural extensions to your CI/CD knowledge.
*   **Join Communities:** Engage with the GitHub community, DevOps forums (like Reddit's r/devops), or Discord servers dedicated to CI/CD. Share your projects, ask questions, and learn from peers and experts.
*   **Personal Projects:** The best way to learn is by doing. Start a personal project and commit to automating its entire CI/CD pipeline using GitHub Actions. This hands-on experience is invaluable.

This course has provided you with a robust foundation in GitHub Actions. By continuously practicing, exploring new features, and integrating your knowledge with other DevOps tools, you will continue to grow as an automation expert. Embrace the power of automation, and keep building amazing things!

---


> End of Syllabus: GitHub Actions
> Course ID: github-actions
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Cloud Computing & DevOps
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
