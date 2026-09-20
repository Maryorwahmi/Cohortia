---
title: R Programming
course_id: r-programming
provider: Cohortia
original_reference: Johns Hopkins / Coursera / Coursera
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Programming & Software Development Fundamentals
skills: R Programming, Data Analysis, Data Visualization, Statistical Computing, Data Manipulation, RStudio, Tidyverse, dplyr, ggplot2, Functions, Control Flow, Data Structures
source_catalog: docs/computer-science/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds this content to provide an enhanced learning experience and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the world of R Programming, a powerful and versatile language specifically designed for statistical computing and graphics. This comprehensive beginner-friendly course is your gateway to mastering R, equipping you with the fundamental skills needed to analyze data, create stunning visualizations, and perform robust statistical analyses. Whether you're a budding data scientist, a researcher, or simply curious about programming for data, R offers an intuitive yet deep environment to explore and understand your data. We believe in hands-on learning, so you'll be writing real R code from day one, building a solid foundation that will serve as a launchpad for more advanced topics.

Throughout this course, we'll start with the absolute basics, guiding you through the installation of R and RStudio, and then progressively introduce you to core programming concepts. You'll learn how to manage different types of data, from simple vectors to complex data frames, and discover the essential tools for data manipulation using the popular `dplyr` package. We'll demystify control flow structures like loops and conditionals, empowering you to write efficient and reusable functions. A significant portion of our journey will be dedicated to data visualization using `ggplot2`, where you'll learn to translate raw data into insightful and visually appealing graphs, a crucial skill for communicating your findings effectively.

By the end of this Cohortia course, you won't just know *about* R; you'll be able to confidently *use* R to tackle real-world data challenges. You'll understand how to import data from various sources, clean and transform it, perform descriptive statistics, and present your insights through compelling visualizations. This course is structured to ensure a smooth learning curve, with practical examples, clear explanations, and opportunities to apply what you've learned. Prepare to unlock the potential of data and embark on an exciting journey into the heart of statistical programming with R.

Upon successful completion of this course, you will be able to:

*   Install and configure R and RStudio, and navigate the RStudio interface effectively.
*   Understand fundamental R data types and structures, including vectors, matrices, lists, and data frames.
*   Perform basic data manipulation and transformation using core R functions and the `dplyr` package.
*   Implement control flow statements (if/else, for loops, while loops) and write custom functions in R.
*   Create a variety of data visualizations (scatter plots, bar charts, histograms, box plots) using the `ggplot2` package.
*   Import and export data from common file formats such as CSV, Excel, and text files.
*   Calculate descriptive statistics and perform basic statistical tests on datasets.
*   Apply R programming concepts to solve practical data analysis problems.
*   Debug R code and identify common programming errors.
*   Develop a structured approach to data analysis projects using R.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Getting Started with R and RStudio | 3 |
| 2 | R Data Structures and Objects | 3 |
| 3 | Data Manipulation with Tidyverse | 4 |
| 4 | Control Flow, Functions, and Debugging | 4 |
| 5 | Data Visualization with ggplot2 | 5 |
| 6 | Importing Data and Basic Statistics | 5 |

Total chapters: 24
---

## Module 1: Getting Started with R and RStudio

**Module Goal:** By the end of this module, learners will understand the value of R for data analysis, successfully install R and RStudio, and be able to perform basic operations within the RStudio environment.

### Chapter 1.1 — Why R? An Introduction to R and Its Ecosystem

#### Learning objectives
*   Understand the primary purpose and historical context of the R programming language.
*   Identify key strengths of R, particularly in statistical computing and data visualization.
*   Recognize common industries and roles where R is extensively used.
*   Grasp the concept of the R ecosystem, including CRAN and RStudio.

#### Detailed lesson content
Welcome to the exciting world of R programming! Before we dive into writing code, it's essential to understand *why* R is such a powerful and popular tool, especially in the realm of data science, statistics, and research. R is an open-source programming language and environment specifically designed for statistical computing and graphics. Its roots trace back to the S language, developed at Bell Labs in the 1970s. R itself was created in the early 1990s by Ross Ihaka and Robert Gentleman at the University of Auckland, New Zealand, as an open-source implementation of S. This open-source nature means it's freely available, constantly evolving, and supported by a vast global community of users and developers.

R's primary strength lies in its unparalleled capabilities for statistical analysis. Whether you're performing classical statistical tests, building linear or non-linear models, conducting time-series analysis, or delving into classification and clustering algorithms, R provides a comprehensive suite of tools. Its syntax is often intuitive for those with a statistical background, making complex analyses more accessible. Beyond raw computation, R excels in data visualization. Packages like `ggplot2` allow users to create stunning, publication-quality graphics with remarkable ease and flexibility, transforming raw data into insightful visual stories. This combination of robust statistical power and exceptional visualization makes R an indispensable tool for exploratory data analysis, reporting, and communicating findings.

The R ecosystem is another critical aspect of its appeal. It's not just the base language; it's the entire network of resources built around it. The Comprehensive R Archive Network, or CRAN, is the central repository for R packages. Think of packages as specialized toolboxes that extend R's functionality. There are tens of thousands of packages available on CRAN, covering everything from advanced machine learning algorithms to specialized bioinformatics tools, financial modeling, and web scraping. This rich ecosystem means that whatever your data analysis challenge, there's likely a well-developed package to help you solve it. For instance, packages like `dplyr` and `tidyr` from the `tidyverse` collection streamline data manipulation, making cleaning and transforming data much more efficient.

Who uses R? The answer is incredibly diverse. It's a staple in academia, used by statisticians, economists, biologists, and social scientists for research and teaching. In the industry, data scientists, data analysts, quantitative researchers, and business intelligence professionals leverage R in fields ranging from finance and healthcare to marketing, e-commerce, and government. Companies use R for everything from predicting stock market trends and analyzing drug trial results to segmenting customer bases and optimizing advertising campaigns. Its ability to facilitate reproducible research, where analyses can be easily shared, verified, and replicated, is highly valued across all these sectors.

While R is incredibly powerful, a common misconception is that it is only for academics or that it is inherently slow. While some operations in base R can be slower than highly optimized C++ code, many R packages are written with performance in mind, often interfacing with faster compiled languages like C, C++, or Fortran under the hood. Furthermore, for most data analysis tasks, the efficiency gained from R's expressive syntax and rich ecosystem far outweighs any minor performance differences. Another crucial component of the R ecosystem is RStudio, which we will introduce briefly here and explore in depth in later chapters. RStudio is by far the most popular Integrated Development Environment (IDE) for R. An IDE provides a user-friendly interface that combines a code editor, a console for executing commands, tools for managing variables and files, and a viewer for plots and help documentation. It significantly enhances productivity and makes working with R a much smoother experience.

As we embark on this journey, it's important to keep a safety note in mind: always ensure you are downloading R and R packages from official and reputable sources like CRAN. This practice helps safeguard your system from potentially malicious or poorly written code, ensuring the integrity and security of your analytical environment. The R community is generally very vigilant, but caution is always wise.

#### Key concepts
*   **R:** An open-source programming language and environment specifically designed for statistical computing and graphics.
*   **S Language:** The predecessor to R, developed at Bell Labs, which laid the foundation for R's statistical capabilities.
*   **CRAN (Comprehensive R Archive Network):** The primary central repository for R packages, documentation, and the R distribution itself.
*   **RStudio:** A popular, free, and open-source Integrated Development Environment (IDE) for R, providing a user-friendly interface for writing, executing, and debugging R code.
*   **Packages:** Collections of R functions, data, and compiled code that extend the functionality of base R for specific tasks.
*   **Reproducible Research:** The ability to easily recreate the results of an analysis, including data processing, statistical methods, and visualizations, using the same code and data.

#### Hands-on activity
Take a moment to explore the vastness of the R ecosystem. Visit the CRAN website (cran.r-project.org/web/packages/) and browse through the "Available CRAN Packages By Name" list. Select any R package that sounds interesting to you (e.g., `ggplot2`, `dplyr`, `lubridate`, `forecast`, `shiny`). Read its brief description. In your own words, describe the primary function of the package you chose and explain one specific scenario where it would be particularly useful for data analysis.

#### Assessment idea
1.  What is the primary advantage of using R for data analysis compared to a general-purpose language like Python for statistical tasks?
    *   **Correct Answer:** R was specifically designed from the ground up for statistical computing and graphics. This means it often has more specialized and mature libraries for statistical methods, a consistent syntax for data manipulation, and unparalleled data visualization capabilities (e.g., `ggplot2`) that are often more integrated and powerful for exploratory data analysis than general-purpose libraries in other languages. While Python has excellent data science libraries, R's statistical heritage gives it a unique edge in certain domains, particularly when deep statistical modeling and high-quality graphical output are paramount.
2.  Explain the role of CRAN in the R ecosystem. Why is it important for R users?
    *   **Correct Answer:** CRAN, the Comprehensive R Archive Network, serves as the primary central repository for R packages, R itself, and its documentation. Its role is crucial because it provides a centralized, reliable, and quality-controlled source for R users to find, download, and install extensions that enhance R's functionality. CRAN ensures that packages submitted meet certain standards, which helps maintain code quality, compatibility, and security across the ecosystem. Without CRAN, finding and managing R packages would be fragmented and significantly more challenging, hindering the collaborative development and widespread adoption of R.

#### AI generation note
Create a 10-12 minute animated video with voiceover. Use engaging infographics to visually represent R's history, starting from the S language. Employ side-by-side comparisons to highlight R's strengths in statistical modeling and data visualization against generic programming concepts. Animate a flowchart illustrating the R ecosystem, showing R at the core, surrounded by CRAN, RStudio, and various user communities. Include examples of beautiful, complex data visualizations created with R (e.g., a `ggplot2` density plot, a network graph, a world map with data overlays) to inspire learners. The interactive element should be a reflection prompt: "Consider a data analysis task you might encounter in your field. How might R's strengths, particularly its visualization capabilities, help you with that task?" Ensure captions are provided, alt text for all on-screen text and diagrams, and a full transcript is available.

### Chapter 1.2 — Installing R and RStudio Desktop

#### Learning objectives
*   Successfully download and install the R programming language on their operating system.
*   Successfully download and install RStudio Desktop as the primary Integrated Development Environment (IDE).
*   Verify the correct installation of both R and RStudio.
*   Troubleshoot common installation issues.

#### Detailed lesson content
Now that you understand the "why" behind R, it's time to get your hands dirty with the "how." The first step in your R journey is to install both the R programming language itself and RStudio Desktop, the Integrated Development Environment (IDE) that will serve as your primary workspace. It's crucial to understand that R and RStudio are separate but complementary components. Think of R as the powerful engine that performs all the calculations and data manipulations, while RStudio is the sophisticated dashboard and control panel that makes interacting with that engine much more user-friendly and efficient. You *must* install R first, as RStudio relies on an existing R installation to function.

Let's begin with installing R. The official source for R is the CRAN (Comprehensive R Archive Network) website. Navigate your web browser to `cran.r-project.org`. On the left-hand side, you'll see links to "Download R for Linux," "Download R for macOS," and "Download R for Windows." Select the appropriate link for your operating system.

For **Windows** users, click on "base" under "Install R for the first time," then download the latest R installer executable (e.g., `R-4.x.x-win.exe`). Once downloaded, run the installer. For most users, accepting the default settings throughout the installation process is perfectly fine. R will typically handle adding itself to your system's PATH environment variable, which allows you to run R from any command prompt.

For **macOS** users, click on the latest `.pkg` file under "Latest release" (e.g., `R-4.x.x.pkg`). Download and run this installer. The process is straightforward, much like installing any other macOS application. Historically, some R graphics packages on macOS required XQuartz, but this dependency is less common with modern R versions and graphics libraries. If you encounter issues with graphics later, keep XQuartz in mind as a potential solution, but it's not typically needed for the base installation.

For **Linux** users, the process usually involves using your system's package manager. For Debian/Ubuntu-based systems, you can install R by opening a terminal and running:
```bash
sudo apt update
sudo apt install r-base
```
However, this often installs an older stable version of R from your distribution's repositories. To get the absolute latest stable version directly from CRAN, which is highly recommended, you'll need to add the CRAN repository to your system's sources. Here's how for Ubuntu/Debian:
```bash
# Add CRAN GPG key
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9

# Add CRAN repository to your sources list (replace $(lsb_release -cs) with your Ubuntu version codename like 'focal' or 'jammy')
sudo add-apt-repository "deb https://cloud.r-project.org/bin/linux/ubuntu $(lsb_release -cs)-cran40/"

# Update your package list and install R (r-base-dev includes development headers, often useful)
sudo apt update
sudo apt install r-base r-base-dev
```
After installing R, it's a good practice to verify the installation. Open your system's terminal (Command Prompt on Windows, Terminal on macOS/Linux) and simply type `R`. You should see output indicating the R version number and a command prompt (`>`). To exit the R console, type `q()` and press Enter, then confirm with `n` (no) if asked to save your workspace.

Next, we install RStudio Desktop. Navigate to the official Posit (formerly RStudio) website for downloads: `posit.co/download/rstudio-desktop/`. You'll see options for different versions; make sure to select the free "RStudio Desktop" version. Download the installer specific to your operating system. Just like with R, run the installer and generally accept the default settings. RStudio is designed to automatically detect your R installation.

To verify RStudio's installation, simply launch the RStudio application. If R was installed correctly, RStudio should open, and you'll see its interface with the R Console pane active and ready. If RStudio launches but complains it can't find R, the most common issue is that R wasn't installed first or correctly. In such cases, ensure R is properly installed, and if necessary, try reinstalling RStudio *after* R is confirmed to be working.

**Common Mistakes and Troubleshooting:**
*   **RStudio cannot find R:** This is the most frequent issue. Always install R *before* RStudio. If R is installed and RStudio still can't find it, try reinstalling RStudio, or check RStudio's "Global Options" under "Tools" to manually point it to your R installation.
*   **Permissions Issues:** On Windows, sometimes running the installer as an administrator (right-click, "Run as administrator") can resolve permissions-related problems.
*   **Older R versions on Linux:** As demonstrated, default `apt install r-base` might give an older version. Adding the CRAN repository is key for the latest.
*   **Firewall/Proxy:** Later, when installing packages, if you're behind a corporate firewall or proxy, you might need to configure R's proxy settings. This is less common during initial installation but good to be aware of.

**Safety Note:** Always download R and RStudio from their official websites (CRAN and Posit/RStudio). Downloading from unofficial sources can expose your system to malware or outdated, unstable versions. Your data and system security are paramount.

#### Key concepts
*   **CRAN (Comprehensive R Archive Network):** The official source for downloading the R programming language.
*   **Posit (formerly RStudio):** The company that develops and maintains the RStudio IDE, the official source for downloading RStudio Desktop.
*   **IDE (Integrated Development Environment):** A software application that provides comprehensive facilities to computer programmers for software development, such as a code editor, build automation tools, and a debugger.
*   **`r-base`:** The common package name for R on Linux distributions.
*   **`apt-get` / `apt` / `yum`:** Package managers used on Linux distributions to install, update, and remove software.

#### Hands-on activity
Follow the detailed instructions provided above to install both R and RStudio Desktop on your personal computer.

1.  First, navigate to `cran.r-project.org` and install the latest version of R for your operating system.
2.  Once R is installed, open your system's terminal or command prompt and type `R`. Verify that R launches and displays its version information. Type `q()` and press Enter to exit.
3.  Next, go to `posit.co/download/rstudio-desktop/` and install the free RStudio Desktop version for your OS.
4.  Launch RStudio. Confirm that it opens successfully and that the R Console pane is visible and ready for commands.

If you encounter any issues, try to troubleshoot using the "Common Mistakes" section.

#### Assessment idea
1.  You've installed RStudio, but when you launch it, you see an error message indicating that R cannot be found. What is the most likely reason for this issue, and what steps should you take to resolve it?
    *   **Correct Answer:** The most likely reason is that R itself was not installed, or was not installed correctly, *before* RStudio was launched. RStudio is an IDE that *uses* R; it does not contain R within its own installation package. To resolve this, you should first ensure that R is properly installed on your system by downloading it from CRAN (cran.r-project.org) and running its installer. After R is successfully installed and verified (by typing `R` in your terminal), you can then launch RStudio, which should automatically detect the R installation. If RStudio was installed before R, you might need to reinstall RStudio after R is installed, or manually configure RStudio to point to the R executable through its "Global Options" (Tools > Global Options > R General).
2.  A colleague is trying to install R on an Ubuntu Linux machine. They ran `sudo apt install r-base` but noticed they are getting an older version of R than what's currently available on CRAN. What specific commands would you advise them to use to ensure they install the latest stable version of R directly from the CRAN repository?
    *   **Correct Answer:** To install the latest stable version of R from CRAN on Ubuntu, your colleague needs to add the official CRAN repository to their system's software sources. The recommended steps are:
        1.  Add the CRAN GPG key to verify packages:
            `sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9`
        2.  Add the CRAN repository to the sources list (replace `$(lsb_release -cs)` with the specific Ubuntu version codename, e.g., `focal` for Ubuntu 20.04):
            `sudo add-apt-repository "deb https://cloud.r-project.org/bin/linux/ubuntu $(lsb_release -cs)-cran40/"`
        3.  Update the package list to include the new repository:
            `sudo apt update`
        4.  Install R (and optionally `r-base-dev` for development headers, which are often useful for compiling R packages):
            `sudo apt install r-base r-base-dev`
        These steps ensure that the `apt` package manager fetches the latest R packages directly from the trusted CRAN repository, rather than the potentially outdated versions in the default Ubuntu repositories.

#### AI generation note
Create a 15-18 minute lab walkthrough video with high-quality screen recordings. The video should clearly demonstrate the full installation process for R and RStudio Desktop on Windows, macOS, and a Linux terminal (Ubuntu example). Use distinct segments for each OS. Highlight mouse clicks and menu selections with visual cues. Show the verification steps in the terminal (typing `R`) and within the RStudio interface. Include animated overlays or pop-ups that explain common error messages (e.g., "R cannot be found") and provide concrete solutions. Use direct URLs for CRAN and Posit RStudio downloads. The interactive element should be a checklist of installation steps that learners can tick off as they complete them, followed by a prompt to share any challenges encountered in a dedicated discussion forum. Ensure captions, clear audio, high-contrast screen recordings, and a full transcript are provided.

### Chapter 1.3 — Your First Steps in RStudio: Interface and Basic Operations

#### Learning objectives
*   Navigate and identify the key panes within the RStudio Integrated Development Environment (IDE).
*   Execute basic R commands directly in the Console.
*   Create and save R scripts in the Source Editor.
*   Understand and apply variable assignment and basic arithmetic operations in R.
*   Utilize comments to document R code effectively.

#### Detailed lesson content
Congratulations on successfully installing R and RStudio! You're now ready to take your first steps into the R programming environment. When you launch RStudio, you'll be greeted by its intuitive interface, typically divided into four main panes. Understanding these panes is fundamental to working efficiently in RStudio, as each serves a distinct and important purpose in your data analysis workflow.

Let's break down the RStudio interface:
1.  **Source Editor (Top-Left Pane):** This is where you'll write and save your R scripts, which are plain text files with a `.R` extension. Writing your code in a script is crucial for reproducibility, organization, and sharing your work. Unlike commands typed directly into the console, code in a script is saved permanently. To create a new script, go to `File > New File > R Script`.
2.  **Console (Bottom-Left Pane):** This is the heart of R itself. When you type commands here and press Enter, R executes them immediately, and the output is displayed directly below. You can also send code from your Source Editor to the Console for execution. Commands typed directly into the Console are executed interactively but are not automatically saved as part of a script.
3.  **Environment/History (Top-Right Pane):** This pane is split into two main tabs. The **Environment** tab lists all the active objects (variables, datasets, functions) currently loaded in your R session. It's incredibly useful for keeping track of your data and ensuring you know what's available. The **History** tab keeps a record of all the commands you've executed in the Console, allowing you to recall and reuse them.
4.  **Files/Plots/Packages/Help/Viewer (Bottom-Right Pane):** This versatile pane has multiple tabs:
    *   **Files:** A file browser for navigating your project directory.
    *   **Plots:** Where all your generated graphs and data visualizations will appear.
    *   **Packages:** A tool for managing installed R packages, showing what's installed and allowing you to load or unload them.
    *   **Help:** Provides access to R's extensive documentation and help files for functions and packages.
    *   **Viewer:** Used for displaying local web content, such as interactive HTML widgets or Shiny applications.

Now, let's perform some basic operations. You can type these directly into the Console for immediate results, or, preferably, type them into a new R Script in the Source Editor and then execute them by placing your cursor on the line and pressing `Ctrl + Enter` (or `Cmd + Enter` on macOS).

Let's start with **basic arithmetic operations**. R can act as a powerful calculator:
```R
# Addition
5 + 3

# Subtraction
10 - 4

# Multiplication
6 * 7

# Division
15 / 3

# Exponentiation
2^4 # This calculates 2 to the power of 4 (2*2*2*2)

# Modulo (remainder of a division)
10 %% 3 # The remainder when 10 is divided by 3 is 1

# Integer division (the whole number part of a division)
10 %/% 3 # The integer part when 10 is divided by 3 is 3
```
When you execute these, the result will appear in the Console.

Next, a fundamental concept in programming is **variable assignment**. This means storing a value in a named object so you can refer to it later. In R, the preferred assignment operator is `<-` (a less-than sign followed by a hyphen), though `=` also works. Using `<-` is considered idiomatic R style. Good variable names are descriptive and often use `snake_case` (e.g., `my_variable_name`).
```R
# Assigning a number to a variable
my_age <- 30
print(my_age) # Use print() to explicitly display the value

# Assigning text (a character string) to a variable
my_name <- "Alice"
print(my_name)

# Performing operations with variables
current_year <- 2023
birth_year <- current_year - my_age
print(birth_year)

# You can also use = for assignment, but <- is generally preferred in R
city = "New York"
print(city)
```
A common mistake beginners make is confusing the assignment operator (`<-` or `=`) with the equality operator (`==`), which is used for comparison (e.g., `my_age == 30` would return `TRUE` or `FALSE`). Always remember that `<-` or `=` *stores* a value, while `==` *checks* if two values are the same.

**Comments** are vital for making your code understandable to yourself and others. In R, anything following a `#` symbol on a line is treated as a comment and is ignored by the R interpreter. Use comments to explain complex logic, document your intentions, or temporarily disable lines of code.
```R
# This is a single-line comment.
# It explains the purpose of the following code block.

# Calculate the area of a circle
radius <- 5 # Define the radius of the circle
pi_value <- 3.14159 # Store an approximation of Pi
area <- pi_value * (radius^2) # Formula for area of a circle
print(area) # Display the calculated area
```

Finally, let's look at a very basic but important function: `c()`. This function "combines" values into a **vector**, which is R's fundamental data structure for storing a sequence of elements of the same type.
```R
# Combining numbers into a numeric vector
temperatures <- c(22, 25, 19, 23, 27)
print(temperatures)

# Combining text into a character vector
fruits <- c("apple", "banana", "orange")
print(fruits)
```
As you continue, remember to always save your R scripts (`File > Save` or `Ctrl+S`) regularly. This ensures your hard work is preserved. Running code from the Source Editor (Ctrl+Enter) is the standard practice for developing reproducible analyses.

**Common Mistakes:**
*   **Not saving scripts:** Typing code directly into the Console means it's usually lost when you close RStudio. Always use the Source Editor for code you want to keep.
*   **Unmatched parentheses or quotes:** R will throw an error or wait for completion if you forget to close a parenthesis `)` or a quote `"`. RStudio often helps by highlighting these.
*   **Confusing `<-` with `==`:** `<-` assigns a value; `==` checks for equality.
*   **Poor variable names:** Using `x`, `y`, `z` might seem quick, but descriptive names like `daily_sales` or `customer_id` make your code much easier to read and understand later.

**Safety Note:** While R code itself is generally safe, be cautious when running scripts downloaded from unknown sources, especially if they involve file system operations (like deleting files) or installing packages outside of CRAN. Always review unfamiliar code before executing it.

#### Key concepts
*   **RStudio Panes:** The four main sections of the RStudio interface (Source Editor, Console, Environment/History, Files/Plots/Packages/Help/Viewer), each with a specific function.
*   **Source Editor:** The pane where R scripts (`.R` files) are written and saved for reproducibility.
*   **Console:** The interactive pane where R commands are executed immediately and output is displayed.
*   **Variable Assignment:** The process of storing a value in a named object using the `<-` (preferred) or `=` operator.
*   **Comments (`#`):** Non-executable lines in R code used for documentation, explanations, and temporarily disabling code.
*   **Vector:** R's most basic data structure, used to store a sequence of elements of the same data type (e.g., numbers, text).
*   **`c()` function:** A base R function used to combine values into a vector.

#### Hands-on activity
Open RStudio and create a new R Script (`File > New File > R Script`). In this script, write R code to perform the following steps. Remember to add comments to explain each line or block of code.

```R
# Hands-on Activity: RStudio First Steps

# 1. Assign your current age to a variable called 'my_current_age'.
#    Replace 'XX' with your actual age.
my_current_age <- XX

# 2. Assign the number of years you want to add to your age (e.g., 5, 10, 20)
#    to a variable called 'years_to_add'.
years_to_add <- 10

# 3. Calculate your age after 'years_to_add' and store it in a new variable
#    called 'future_age'.
future_age <- my_current_age + years_to_add

# 4. Print the value of 'future_age' to the console, along with a descriptive message.
#    Hint: You can combine text and variables using the paste() function.
#    Example: paste("My future age will be:", future_age, "years old.")
print(paste("My future age will be:", future_age, "years old."))

# 5. Create a numeric vector called 'daily_temperatures' with at least 5 different
#    temperature values (e.g., for different days).
daily_temperatures <- c(18, 20, 22, 19, 21)

# 6. Calculate the average of 'daily_temperatures' and store it in 'avg_temp'.
#    (We'll learn about the mean() function later, for now, sum and divide manually)
#    Hint: sum of vector elements / number of elements
avg_temp <- sum(daily_temperatures) / length(daily_temperatures) # Using sum() and length() for convenience

# 7. Print the 'avg_temp' with a descriptive message.
print(paste("The average daily temperature was:", avg_temp, "degrees Celsius."))

# 8. Save your script as "first_steps.R" in a location you can easily find.
```
Execute your script line by line using `Ctrl + Enter` (or `Cmd + Enter`) and observe the output in the Console. Also, check the Environment pane to see your created variables.

#### Assessment idea
1.  You are working in RStudio and have written a complex calculation directly into the Console. You then close RStudio. The next day, you open RStudio and find your calculation is gone. What was the mistake, and how should you prevent this in the future?
    *   **Correct Answer:** The mistake was performing the complex calculation directly in the Console without saving it. The R Console is primarily for immediate execution and testing; its contents are typically lost when the session ends (unless explicitly saved to history, which is not ideal for reproducibility). To prevent this, you should always write your R code in an R Script (`.R` file) in the Source Editor pane. This allows you to save your script (`File > Save` or `Ctrl+S`), ensuring your work is preserved and can be easily re-run or shared later. You can then execute lines or blocks of code from the script to the Console using `Ctrl+Enter` (or `Cmd+Enter` on Mac).
2.  Consider the following R code snippet:
    ```R
    # Calculate daily average temperature
    temp_morning = 15
    temp_evening <- 10
    average_temp <- (temp_morning + temp_evening) / 2
    print("The average temperature is: ")
    print(average_temp)
    ```
    Identify two different types of elements in this code snippet and explain their purpose.
    *   **Correct Answer:**
        1.  **Comments:** The line starting with `#` (e.g., `# Calculate daily average temperature`). The purpose of a comment is to provide human-readable explanations or annotations within the code. R ignores comments during execution, making them invaluable for documenting code, explaining complex logic, and improving readability for both the original author and collaborators.
        2.  **Variable Assignment:** Lines like `temp_morning = 15` and `temp_evening <- 10`. The purpose of variable assignment is to store a specific value (e.g., `15`, `10`) into a named object or variable (e.g., `temp_morning`, `temp_evening`) in R's memory. This allows you to refer to that value later by its name, making code more organized, readable, and reusable. While both `=` and `<-` can be used for assignment, `<-` is the idiomatic and preferred assignment operator in R.
        (Other valid elements could include: Arithmetic Operators (`+`, `/`), Function Call (`print()`), String Literal (`"The average temperature is: "`), Numeric Literals (`15`, `10`, `2`)).

#### AI generation note
Create a 12-15 minute interactive lab simulation of the RStudio IDE. The simulation should guide the learner through identifying and interacting with each of the four main panes. Use animated highlights and pop-up descriptions for each pane. The interactive element should include a drag-and-drop activity to correctly label the RStudio panes. Then, guide the learner through typing and executing specific R commands in a simulated Source Editor and Console, demonstrating basic arithmetic, variable assignment (using both `<-` and `=`), and comments. Show how variables appear in the Environment pane. Include immediate feedback for typed commands (e.g., "Correct!" or "Syntax Error: Unmatched parenthesis"). Provide examples of common mistakes (e.g., forgetting to save, unmatched quotes) and show how RStudio's interface helps identify them. Ensure keyboard navigation is supported, clear visual cues for interactive elements, captions, and alt text for all interface elements.

---

## Module 2: R Data Structures and Objects

Welcome to Module 2, where we'll dive deep into the fundamental building blocks of data in R: its data structures and objects. Understanding how R organizes and stores data is absolutely crucial for writing efficient, correct, and robust R code. Just as a carpenter needs to understand different types of wood and fasteners, a data analyst needs to understand the various ways R holds information. We'll explore everything from simple vectors to complex data frames, learning how to create, manipulate, and access data effectively. By the end of this module, you'll have a solid grasp of R's core data types, enabling you to confidently tackle real-world data analysis challenges.

---

### Chapter 2.1 — Vectors: The Foundation of R Data

#### Learning objectives
*   Understand what a vector is in R and its role as the most basic data structure.
*   Identify and differentiate between the various atomic vector types: numeric, integer, character, logical, complex, and raw.
*   Learn to create vectors using functions like `c()`, `seq()`, and `rep()`.
*   Perform basic arithmetic, logical, and comparison operations on vectors.
*   Master different techniques for subsetting and indexing vectors to access specific elements.

#### Detailed lesson content
In R, nearly everything is a vector. This might sound like a bold statement, but it's fundamentally true. Even a single number like `5` is treated by R as a vector of length one. This concept is vital because it means that many operations in R are "vectorized," allowing you to apply functions or operations to entire collections of data simultaneously, rather than having to loop through individual elements. This approach is not only more concise but also significantly more efficient for computation.

At its core, a vector is an ordered collection of elements of the *same* data type. This homogeneity is a defining characteristic of what R calls "atomic vectors." R supports several fundamental atomic vector types, each designed for a specific kind of data. The most commonly used are:
*   **Numeric:** These are the default numerical type in R, representing real numbers (doubles). For example, `c(1.5, 2.7, 3.0)`.
*   **Integer:** Whole numbers without decimal points. You explicitly create an integer by appending `L` to the number, e.g., `c(1L, 2L, 3L)`. Without the `L`, R will treat them as numeric.
*   **Character:** Text strings, enclosed in single or double quotes. For example, `c("apple", "banana", "cherry")`.
*   **Logical:** Boolean values, either `TRUE` or `FALSE` (or their abbreviations `T` and `F`). For example, `c(TRUE, FALSE, TRUE)`.
*   **Complex:** Numbers with an imaginary part, e.g., `c(1+2i, 3-4i)`.
*   **Raw:** Used for storing raw bytes, less common in typical data analysis.

You primarily create vectors using the `c()` function, which stands for "combine" or "concatenate." For instance, `my_numbers <- c(10, 20, 30)` creates a numeric vector. If you try to combine elements of different types, R will perform "type coercion," converting all elements to the most flexible type. For example, `c(1, "hello", TRUE)` will result in a character vector because characters are the most flexible type that can represent numbers and logical values as strings. This can be a common source of unexpected behavior, so always be mindful of the data types you're combining. You can check a vector's type using `typeof()` or `class()`.

Beyond `c()`, other useful functions for vector creation include `seq()` for generating sequences (e.g., `seq(1, 10, by = 2)` for odd numbers from 1 to 10) and `rep()` for repeating values (e.g., `rep("A", 5)` to get five "A"s).

One of the most powerful aspects of vectors in R is vectorized operations. When you perform an arithmetic operation like addition or multiplication between two vectors, R applies the operation element-wise. For example, if `vec1 <- c(1, 2, 3)` and `vec2 <- c(10, 20, 30)`, then `vec1 + vec2` will result in `c(11, 22, 33)`. If the vectors have different lengths, R will recycle the shorter vector's elements. This recycling can lead to unexpected results if the longer vector's length is not a multiple of the shorter vector's length, in which case R will issue a warning. For instance, `c(1, 2, 3) + c(10, 20)` will produce `c(11, 22, 13)` and a warning, as `10` is recycled for the third element.

Accessing specific elements or subsets of a vector is called indexing or subsetting. R uses square brackets `[]` for this purpose. There are several ways to subset:
*   **Positive integer indexing:** Selects elements by their position. `my_vector[3]` retrieves the third element. `my_vector[c(1, 5)]` retrieves the first and fifth elements. Remember, R indexing starts from 1, not 0, which is a common mistake for programmers coming from languages like Python or C++.
*   **Negative integer indexing:** Excludes elements by their position. `my_vector[-2]` returns the vector with the second element removed.
*   **Logical indexing:** Uses a logical vector of the same length as the original vector to select elements where the logical vector is `TRUE`. For example, `my_vector[my_vector > 5]` selects all elements greater than 5. This is incredibly powerful for filtering data.
*   **Named indexing:** If your vector has names assigned to its elements (e.g., `names(my_vector) <- c("A", "B", "C")`), you can access elements by name: `my_vector["A"]`.

Understanding type coercion is critical to avoid common pitfalls. When you mix types, R's implicit coercion rules take over. The hierarchy of coercion generally goes: `NULL < raw < logical < integer < numeric < complex < character`. So, if you combine a logical vector with a numeric vector, the logical values (`TRUE`/`FALSE`) will be coerced to `1`/`0` respectively. For example, `c(TRUE, FALSE, 5)` becomes `c(1, 0, 5)`. Always explicitly check the `class()` or `typeof()` of your vectors if you're unsure, especially after operations that might involve mixed types.

In practical scenarios, vectors are used everywhere. Imagine you're tracking daily stock prices: `stock_prices <- c(150.25, 151.70, 149.90, 152.10)`. Or perhaps you're recording student attendance: `attendance <- c(TRUE, TRUE, FALSE, TRUE)`. Even a list of product IDs would be a character vector: `product_ids <- c("P001", "P002", "P003")`. Mastering vectors is the first and most crucial step towards becoming proficient in R.

#### Key concepts
*   **Vector:** The most basic data structure in R, an ordered collection of elements of the same data type.
*   **Atomic Vector:** A vector where all elements are of the same fundamental type (numeric, integer, character, logical, complex, raw).
*   **Type Coercion:** R's automatic conversion of data types when elements of different types are combined in a vector, converting to the most flexible type.
*   **Vectorized Operations:** Applying functions or operations to entire vectors element-wise, rather than iterating through individual elements.
*   **Subsetting/Indexing:** The process of selecting specific elements or subsets of a vector using square brackets `[]` with positive, negative, logical, or named indices.
*   **Recycling Rule:** When performing operations on vectors of different lengths, R repeats elements of the shorter vector until it matches the length of the longer vector.

#### Hands-on activity
Let's practice creating and manipulating vectors.

1.  **Create a numeric vector** named `daily_temperatures` for a week, containing values like `c(22.5, 23.1, 20.9, 24.0, 25.3, 22.8, 21.5)`.
2.  **Create a character vector** named `week_days` with the names of the days: `c("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")`.
3.  **Assign `week_days` as names** to `daily_temperatures`.
4.  **Calculate the average temperature** for the week.
5.  **Find the temperature on Thursday** using named indexing.
6.  **Find all temperatures above 23 degrees Celsius** using logical indexing.
7.  **Create a new vector `weekend_temps`** containing only the temperatures for Saturday and Sunday.

```R
# 1. Create a numeric vector for daily temperatures
daily_temperatures <- c(22.5, 23.1, 20.9, 24.0, 25.3, 22.8, 21.5)

# 2. Create a character vector for week days
week_days <- c("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

# 3. Assign week_days as names to daily_temperatures
names(daily_temperatures) <- week_days

# 4. Calculate the average temperature
average_temp <- mean(daily_temperatures)
print(paste("Average temperature:", average_temp))

# 5. Find the temperature on Thursday using named indexing
thursday_temp <- daily_temperatures["Thu"]
print(paste("Temperature on Thursday:", thursday_temp))

# 6. Find all temperatures above 23 degrees Celsius using logical indexing
hot_days <- daily_temperatures[daily_temperatures > 23]
print("Temperatures above 23 degrees Celsius:")
print(hot_days)

# 7. Create a new vector weekend_temps containing only the temperatures for Saturday and Sunday
weekend_temps <- daily_temperatures[c("Sat", "Sun")]
print("Weekend temperatures:")
print(weekend_temps)
```

#### Assessment idea
1.  **Question:** You have the following R code:
    ```R
    data_points <- c(10, "20", TRUE, 30.5)
    result_vector <- data_points
    ```
    What will be the `typeof()` and `class()` of `result_vector` after this code executes, and what will its elements look like?
    *   A) `typeof()` will be "numeric", `class()` will be "numeric", elements will be `c(10, 20, 1, 30.5)`.
    *   B) `typeof()` will be "character", `class()` will be "character", elements will be `c("10", "20", "TRUE", "30.5")`.
    *   C) `typeof()` will be "logical", `class()` will be "logical", elements will be `c(TRUE, TRUE, TRUE, TRUE)`.
    *   D) R will throw an error due to mixed types.

    **Correct Answer:** B) `typeof()` will be "character", `class()` will be "character", elements will be `c("10", "20", "TRUE", "30.5")`.
    **Explanation:** R performs type coercion when elements of different types are combined in a vector. The hierarchy for coercion is `logical < integer < numeric < character`. Since the vector `data_points` contains a character string ("20"), all other elements (numeric 10, logical TRUE, numeric 30.5) will be coerced to character strings to maintain homogeneity. Therefore, `result_vector` will become a character vector with all its elements represented as strings.

2.  **Question:** Consider the vector `scores <- c(85, 92, 78, 95, 88)`. Which R command will correctly return the scores that are greater than 90?
    *   A) `scores[>90]`
    *   B) `scores(scores > 90)`
    *   C) `scores[scores > 90]`
    *   D) `subset(scores, >90)`

    **Correct Answer:** C) `scores[scores > 90]`
    **Explanation:** This uses logical indexing, which is a powerful way to filter vectors in R. The expression `scores > 90` creates a logical vector `c(FALSE, TRUE, FALSE, TRUE, FALSE)`. When this logical vector is used inside the square brackets for subsetting, R returns only those elements from `scores` where the corresponding logical value is `TRUE`. Option A is syntactically incorrect. Option B uses parentheses, which are for function calls, not subsetting. Option D uses `subset()`, which is a function but the syntax `subset(scores, >90)` is incorrect; it should be `subset(scores, scores > 90)`, but `scores[scores > 90]` is the most direct and idiomatic way for vectors.

#### AI generation note
Create a 10-12 minute animated video explaining vectors. Start with a visual analogy of a single-file line of items in a grocery store, where all items must be of the same type (e.g., a line of fruits, a line of vegetables). Demonstrate `c()` with different data types to show type coercion visually (e.g., numbers turning into strings when a string is introduced). Use clear, color-coded boxes for vector elements. Show vectorized operations by animating two vectors "adding up" element by element. Illustrate subsetting with positive, negative, and logical indices using a highlight effect. Include a common mistake segment on type coercion and the recycling rule. The tone should be encouraging and clear, with smooth transitions.

---

### Chapter 2.2 — Matrices and Arrays: Working with Multi-Dimensional Data

#### Learning objectives
*   Define what a matrix is in R and understand its two-dimensional, homogeneous nature.
*   Learn to create matrices using the `matrix()` function, `rbind()`, and `cbind()`.
*   Perform element-wise and matrix multiplication operations on matrices.
*   Master techniques for indexing and subsetting matrices using row and column specifications.
*   Understand the concept of arrays as N-dimensional extensions of matrices and how to create and index them.
*   Utilize common functions for matrix and array manipulation, such as `dim()`, `nrow()`, `ncol()`, and `t()`.

#### Detailed lesson content
While vectors are excellent for storing linear sequences of data, many real-world datasets naturally exist in two or more dimensions. This is where matrices and arrays come into play. A **matrix** in R is essentially a two-dimensional, rectangular collection of elements, much like a spreadsheet or a table. Crucially, like vectors, all elements within a matrix must be of the *same atomic data type*. This homogeneity is a key characteristic that differentiates matrices from data frames, which we'll discuss in the next chapter. Matrices are fundamental in linear algebra, statistical modeling, and image processing.

You can create a matrix using the `matrix()` function. It takes a vector of data, the number of rows (`nrow`), the number of columns (`ncol`), and an optional `byrow` argument (defaulting to `FALSE`, meaning data fills by column). For example, `my_matrix <- matrix(1:9, nrow = 3, ncol = 3)` creates a 3x3 matrix filled with numbers 1 through 9, column by column. If you wanted to fill it row by row, you'd add `byrow = TRUE`. If the number of elements in your data vector doesn't perfectly fill the matrix dimensions, R will recycle the data, similar to how it recycles elements in vector operations.

Another common way to build matrices is by combining existing vectors. The `rbind()` function ("row bind") stacks vectors as rows, while `cbind()` ("column bind") stacks them as columns. For `rbind()` to work correctly, the vectors should ideally have the same length, as they will form the columns of the resulting matrix. Similarly, for `cbind()`, the vectors will form the rows, so they should also have compatible lengths. If lengths differ, R will apply its recycling rule, potentially leading to warnings or unexpected structures.

Matrix operations in R can be a source of confusion, especially between element-wise operations and true matrix multiplication.
*   **Element-wise operations:** Standard arithmetic operators (`+`, `-`, `*`, `/`, `^`) perform operations on corresponding elements of matrices. For example, `matrix1 * matrix2` will multiply the element at `[1,1]` of `matrix1` by the element at `[1,1]` of `matrix2`, and so on. Both matrices must have the same dimensions for these operations.
*   **Matrix multiplication:** For proper linear algebra matrix multiplication, you *must* use the `%*%` operator. This operation has specific rules: the number of columns in the first matrix must equal the number of rows in the second matrix. Forgetting `%*%` and using `*` instead is a very common mistake for beginners, leading to incorrect results without an error, as `*` performs element-wise multiplication.

Indexing and subsetting matrices is an extension of vector indexing. You use square brackets `[]`, but now you specify both the row and column, separated by a comma: `my_matrix[row_index, column_index]`.
*   `my_matrix[2, 3]` retrieves the element in the second row, third column.
*   `my_matrix[1, ]` retrieves the entire first row (leaving the column index blank means "all columns").
*   `my_matrix[, 2]` retrieves the entire second column.
*   You can use vectors for indexing: `my_matrix[c(1, 3), c(2, 3)]` retrieves elements from rows 1 and 3, and columns 2 and 3.
*   Logical indexing also works: `my_matrix[my_matrix > 5]` will return a vector of all elements greater than 5. If you want to retain the matrix structure, you can use `my_matrix[my_matrix > 5] <- 0` to replace values, or use `which(my_matrix > 5, arr.ind = TRUE)` to get the row/column indices.

**Arrays** are the generalization of matrices to more than two dimensions. A 3D array, for instance, can be thought of as a stack of matrices. Like matrices, arrays are also homogeneous, meaning all their elements must be of the same data type. You create an array using the `array()` function, which takes a data vector and a `dim` argument (a vector specifying the dimensions). For example, `my_array <- array(1:24, dim = c(3, 4, 2))` creates a 3x4x2 array. This means it has 3 rows, 4 columns, and 2 "slices" or layers. Indexing an array extends the matrix indexing by adding more dimensions: `my_array[row, column, slice]`.

Several useful functions help you inspect and manipulate matrices and arrays:
*   `dim(x)`: Returns the dimensions of an object (number of rows, columns, etc.).
*   `nrow(x)`: Returns the number of rows.
*   `ncol(x)`: Returns the number of columns.
*   `t(x)`: Transposes a matrix (swaps rows and columns).
*   `apply(X, MARGIN, FUN)`: A powerful function to apply a function (`FUN`) to the margins of a matrix or array (`X`). `MARGIN = 1` applies the function to rows, `MARGIN = 2` applies it to columns. For example, `apply(my_matrix, 2, mean)` calculates the mean of each column.

Common mistakes often involve dimension mismatches during operations or incorrect indexing. Always check `dim()` before performing operations if you're unsure. Also, remember that when you subset a matrix to a single row or column (e.g., `my_matrix[1, ]`), R by default tries to "drop" the dimension, converting the result into a vector. If you want to preserve the matrix structure (e.g., get a 1xN matrix instead of a vector), you can add `drop = FALSE` to your subsetting call: `my_matrix[1, , drop = FALSE]`. This is crucial when you need to maintain consistent data structures for further matrix operations.

Matrices and arrays are essential in many data science applications. For example, in image processing, a grayscale image can be represented as a matrix of pixel intensities, and a color image as a 3D array (height x width x color channels). In statistics, a dataset of numerical observations often starts as a matrix before being converted to a data frame. Understanding these structures provides a robust foundation for more advanced data manipulation and analysis in R.

#### Key concepts
*   **Matrix:** A two-dimensional, rectangular data structure in R where all elements are of the same atomic data type.
*   **Array:** A generalization of a matrix to N dimensions, also homogeneous in data type.
*   **`matrix()`:** Function to create a matrix by specifying data, number of rows, and number of columns.
*   **`rbind()`/`cbind()`:** Functions to combine vectors or matrices by rows (`rbind`) or columns (`cbind`).
*   **Element-wise Operation:** Arithmetic operations (`+`, `-`, `*`, `/`) applied to matrices by operating on corresponding elements.
*   **Matrix Multiplication (`%*%`):** The specific operator for linear algebra matrix multiplication, requiring compatible dimensions.
*   **Indexing (Matrices/Arrays):** Accessing elements using `[row_index, column_index]` for matrices, and `[dim1_index, dim2_index, ..., dimN_index]` for arrays.
*   **`dim()`:** Function to retrieve the dimensions of a matrix or array.
*   **`apply()`:** A function to apply a given function across the margins (rows or columns) of a matrix or array.
*   **`drop = FALSE`:** An argument used in subsetting to prevent R from automatically reducing a matrix to a vector when a single row or column is selected.

#### Hands-on activity
Let's work with matrices and arrays.

1.  **Create a 4x3 matrix** named `sales_data` containing numbers from 100 to 111 (inclusive), filled by row.
2.  **Assign row names** `c("Q1", "Q2", "Q3", "Q4")` and **column names** `c("RegionA", "RegionB", "RegionC")` to `sales_data`.
3.  **Calculate the total sales for each region** (sum of each column).
4.  **Calculate the average sales for each quarter** (mean of each row).
5.  **Retrieve the sales data for "RegionB" in "Q2" and "Q3"**.
6.  **Create a 3D array** named `monthly_performance` with dimensions 3x4x2. The data should be 24 random integers between 50 and 100. The dimensions represent (Departments, Weeks, Months).
7.  **Extract the performance data for the first department in the second month**.

```R
# 1. Create a 4x3 matrix named sales_data, filled by row
sales_data <- matrix(100:111, nrow = 4, ncol = 3, byrow = TRUE)
print("Original Sales Data Matrix:")
print(sales_data)

# 2. Assign row names and column names
rownames(sales_data) <- c("Q1", "Q2", "Q3", "Q4")
colnames(sales_data) <- c("RegionA", "RegionB", "RegionC")
print("Sales Data with Names:")
print(sales_data)

# 3. Calculate total sales for each region (sum of each column)
total_region_sales <- apply(sales_data, 2, sum)
print("Total Sales per Region:")
print(total_region_sales)

# 4. Calculate average sales for each quarter (mean of each row)
average_quarter_sales <- apply(sales_data, 1, mean)
print("Average Sales per Quarter:")
print(average_quarter_sales)

# 5. Retrieve sales data for "RegionB" in "Q2" and "Q3"
specific_sales <- sales_data[c("Q2", "Q3"), "RegionB"]
print("Sales for RegionB in Q2 and Q3:")
print(specific_sales)

# 6. Create a 3D array named monthly_performance
# Data: 24 random integers between 50 and 100
monthly_performance <- array(sample(50:100, 24, replace = TRUE), dim = c(3, 4, 2))
print("Monthly Performance Array (Departments x Weeks x Months):")
print(monthly_performance)

# 7. Extract performance data for the first department in the second month
dept1_month2_performance <- monthly_performance[1, , 2]
print("Performance of Department 1 in Month 2 (across all weeks):")
print(dept1_month2_performance)
```

#### Assessment idea
1.  **Question:** You have two matrices, `M1` and `M2`:
    ```R
    M1 <- matrix(c(1, 2, 3, 4), nrow = 2, byrow = TRUE)
    M2 <- matrix(c(5, 6, 7, 8), nrow = 2, byrow = TRUE)
    ```
    What will be the result of `M1 * M2`?
    *   A) A 2x2 matrix representing the linear algebra matrix product.
    *   B) A 2x2 matrix with elements `(1*5, 2*6), (3*7, 4*8)`.
    *   C) An error because the dimensions are not compatible for `*`.
    *   D) A vector `c(5, 12, 21, 32)`.

    **Correct Answer:** B) A 2x2 matrix with elements `(1*5, 2*6), (3*7, 4*8)`.
    **Explanation:** In R, the `*` operator performs element-wise multiplication on matrices. It does not perform linear algebra matrix multiplication. For linear algebra matrix multiplication, you would need to use the `%*%` operator. So, `M1 * M2` computes `M1[i,j] * M2[i,j]` for each corresponding element.
    `M1` is:
    ```
    [,1] [,2]
    [1,]    1    2
    [2,]    3    4
    ```
    `M2` is:
    ```
    [,1] [,2]
    [1,]    5    6
    [2,]    7    8
    ```
    `M1 * M2` will result in:
    ```
    [,1] [,2]
    [1,]    5   12
    [2,]   21   32
    ```

2.  **Question:** You have a matrix `data_matrix <- matrix(1:6, nrow = 2, ncol = 3)`. You want to extract the first row and ensure the result remains a matrix (a 1x3 matrix), not a vector. Which of the following commands achieves this?
    *   A) `data_matrix[1, ]`
    *   B) `data_matrix[1, , drop = FALSE]`
    *   C) `as.matrix(data_matrix[1, ])`
    *   D) `data_matrix[row = 1]`

    **Correct Answer:** B) `data_matrix[1, , drop = FALSE]`
    **Explanation:** By default, when you subset a matrix to a single row or column, R "drops" the dimension, converting the result into a vector. To prevent this behavior and ensure the result remains a matrix (even if it's a 1xN or Nx1 matrix), you must explicitly add the argument `drop = FALSE` to your subsetting call. Option A would return a vector. Option C would first convert to a vector and then back to a matrix, which is less direct and potentially less efficient. Option D is incorrect syntax.

#### AI generation note
Design a 10-14 minute interactive lab walkthrough for matrices and arrays. Start with a visual representation of a matrix as a grid, and an array as stacked grids. Use live coding to demonstrate `matrix()`, `rbind()`, `cbind()`. Emphasize the difference between `*` and `%*%` with a clear side-by-side comparison and numerical examples. Show matrix indexing with visual highlights for selected rows/columns. For arrays, use a simple 3D visualization (e.g., layers of data). Include a step-by-step exercise where learners modify a matrix and calculate row/column sums. The tone should be hands-on and problem-solving oriented. Include accessibility notes for live coding (clear font, good contrast).

---

### Chapter 2.3 — Lists and Data Frames: Handling Heterogeneous Data

#### Learning objectives
*   Understand the concept of a list as a flexible, heterogeneous data structure in R.
*   Learn to create lists and access their elements using single `[]` and double `[[]]` square brackets, and the `$` operator.
*   Define a data frame as a tabular, heterogeneous data structure, combining features of matrices and lists.
*   Create data frames from vectors and lists using `data.frame()`.
*   Master various methods for accessing, subsetting, and manipulating data frame columns and rows.
*   Utilize key functions for data frame inspection, such as `str()`, `summary()`, `head()`, and `tail()`.

#### Detailed lesson content
So far, we've explored vectors, matrices, and arrays—all of which require their elements to be of the same data type. While this homogeneity is useful for many numerical and statistical operations, real-world data is often a mix of different types. Imagine a survey where you have a participant's name (character), age (integer), income (numeric), and whether they are a student (logical). To handle such diverse data, R provides two incredibly powerful and flexible data structures: **lists** and **data frames**.

A **list** is the most flexible data structure in R. Unlike atomic vectors, a list can contain elements of *different* data types and even different structures. An element of a list can be a number, a character string, a logical value, another vector, a matrix, an array, or even another list! This makes lists incredibly versatile for storing complex, nested data. You create a list using the `list()` function. For example, `my_list <- list("Alice", 30, TRUE, c(170, 65))` creates a list containing a character string, a numeric value, a logical value, and a numeric vector.

Accessing elements in a list can be a bit tricky for beginners due to the distinction between `[]` (single square brackets) and `[[]]` (double square brackets), and the `$` operator.
*   **`[[ ]]` (Double square brackets):** Used to extract a *single element* from a list. The result is the actual content of that element, *not* a list. For example, `my_list[[1]]` would return "Alice" (a character string). If the element is a vector, `my_list[[4]]` returns `c(170, 65)` (a numeric vector).
*   **`[]` (Single square brackets):** Used to extract a *sub-list*. The result is always a list, even if it contains only one element. For example, `my_list[1]` returns a list containing "Alice". This is useful when you want to work with a subset of your list and maintain its list structure.
*   **`$` (Dollar sign operator):** This is a convenient shorthand for accessing named list elements. If you create a named list like `person <- list(name = "Bob", age = 25)`, you can access the age using `person$age`. This is equivalent to `person[["age"]]`.

Naming elements in a list is highly recommended for readability and easier access. You can name elements during creation (`list(name="Alice", age=30)`) or afterwards using `names(my_list) <- c("Name", "Age", "IsStudent", "Measurements")`. Lists are often used to store the results of statistical models, configuration settings, or heterogeneous collections of related data before they are organized into a data frame.

Now, let's talk about **data frames**. Data frames are arguably the most important data structure in R for tabular data analysis. They are essentially a list of equal-length vectors. Think of a data frame as a spreadsheet or a table in a database:
*   Each column is a vector.
*   All elements within a *column* must be of the same data type (e.g., an "Age" column must be all numbers).
*   Different columns can have different data types (e.g., an "Age" column can be numeric, and a "Name" column can be character).
*   Each row represents an observation or record.

You create a data frame using the `data.frame()` function, typically by providing named vectors as arguments. For example:
```R
df <- data.frame(
  Name = c("Alice", "Bob", "Charlie"),
  Age = c(24, 27, 22),
  IsStudent = c(TRUE, FALSE, TRUE)
)
```
R will automatically assign row names (1, 2, 3...) unless specified otherwise.

Accessing data frame elements combines list and matrix indexing techniques:
*   **`$` (Dollar sign):** The most common way to access a column by its name. `df$Name` returns the "Name" column as a vector.
*   **`[[ ]]` (Double square brackets):** Also used to access a column by name or position. `df[["Age"]]` or `df[[2]]` returns the "Age" column as a vector.
*   **`[]` (Single square brackets):** This is where it gets powerful, allowing for both row and column subsetting, similar to matrices.
    *   `df[1, 2]` retrieves the element in the first row, second column.
    *   `df[1, ]` retrieves the entire first row as a data frame.
    *   `df[, "Name"]` or `df[, 1]` retrieves the "Name" column as a vector (R often drops dimensions here).
    *   `df[, "Name", drop = FALSE]` retrieves the "Name" column as a *data frame* with one column.
    *   `df[c(1, 3), c("Name", "IsStudent")]` retrieves specific rows and columns.
    *   **Logical subsetting:** Extremely useful for filtering rows based on conditions. `df[df$Age > 25, ]` returns all rows where the age is greater than 25.

Adding new columns to a data frame is straightforward: `df$NewColumn <- c(10, 20, 30)`. Removing columns can be done by assigning `NULL`: `df$NewColumn <- NULL`. Adding rows is trickier and often involves `rbind()` (row bind), but requires the new data to have the same column names and types.

Several functions are indispensable for inspecting data frames:
*   `str(df)`: Provides a concise summary of the data frame's structure, including column names, types, and a few sample values. This is incredibly useful for quickly understanding your data.
*   `summary(df)`: Generates descriptive statistics for each column (min, max, mean, median, quartiles for numeric; counts for factors/characters).
*   `head(df)`: Shows the first 6 rows of the data frame.
*   `tail(df)`: Shows the last 6 rows of the data frame.
*   `colnames(df)` / `rownames(df)`: Get or set column/row names.
*   `dim(df)`: Returns the number of rows and columns.

A common mistake with data frames is treating character vectors as factors. Historically, `data.frame()` would automatically convert character strings to factors unless `stringsAsFactors = FALSE` was specified. While this default has changed in newer R versions (it's now `FALSE` by default), it's a good practice to be aware of and explicitly set `stringsAsFactors = FALSE` if you want to keep strings as characters, or convert them to factors manually with `as.factor()` when needed. Factors are special integer vectors used for categorical data, and they behave differently from character vectors.

Data frames are the workhorse of data analysis in R. From importing CSV files (`read.csv()`) to preparing data for machine learning models, you'll be interacting with data frames constantly. Mastering their creation, manipulation, and subsetting techniques is a cornerstone of R programming for data science.

#### Key concepts
*   **List:** A flexible, ordered collection of elements where each element can be of a different data type or structure (e.g., a vector, matrix, or even another list).
*   **`list()`:** Function used to create a list.
*   **`[[ ]]` (Double square brackets):** Used to extract the *content* of a single element from a list.
*   **`[]` (Single square brackets):** Used to extract a *sub-list* from a list.
*   **`$` (Dollar sign operator):** A convenient way to access named elements in a list or columns in a data frame.
*   **Data Frame:** A tabular data structure in R, similar to a spreadsheet, where columns can have different data types but all elements within a column must be of the same type. It's essentially a list of equal-length vectors.
*   **`data.frame()`:** Function used to create a data frame.
*   **`str()`:** Function to display the structure of an R object, especially useful for data frames.
*   **`summary()`:** Function to provide descriptive statistics for data frame columns.
*   **`head()`/`tail()`:** Functions to view the first or last few rows of a data frame.
*   **Logical Subsetting (Data Frames):** Filtering rows based on conditions applied to one or more columns (e.g., `df[df$Age > 25, ]`).
*   **`stringsAsFactors`:** An argument in `data.frame()` that controls whether character vectors are automatically converted to factors.

#### Hands-on activity
Let's practice with lists and data frames.

1.  **Create a list** named `project_info` that contains:
    *   A character vector `title` = "Customer Churn Analysis"
    *   A numeric vector `budget` = 50000
    *   A logical value `is_active` = TRUE
    *   A character vector `team_members` = `c("Alice", "Bob", "Charlie")`
    *   A numeric vector `progress_milestones` = `c(0.25, 0.50, 0.75)`
2.  **Access the `budget` from `project_info`** using the `$` operator.
3.  **Extract the `team_members` as a sub-list** using single brackets.
4.  **Create a data frame** named `student_grades` with the following columns:
    *   `Name`: `c("Alice", "Bob", "Charlie", "David")`
    *   `Math_Score`: `c(85, 92, 78, 95)`
    *   `Science_Score`: `c(70, 88, 91, 80)`
    *   `Passed`: `c(TRUE, TRUE, FALSE, TRUE)`
5.  **View the structure of `student_grades`** using `str()`.
6.  **Calculate the average `Math_Score`**.
7.  **Filter `student_grades` to show only students who `Passed`**.
8.  **Add a new column `Total_Score`** which is the sum of `Math_Score` and `Science_Score`.

```R
# 1. Create a list named project_info
project_info <- list(
  title = "Customer Churn Analysis",
  budget = 50000,
  is_active = TRUE,
  team_members = c("Alice", "Bob", "Charlie"),
  progress_milestones = c(0.25, 0.50, 0.75)
)
print("Project Info List:")
print(project_info)

# 2. Access the budget from project_info using the $ operator
project_budget <- project_info$budget
print(paste("Project Budget:", project_budget))

# 3. Extract the team_members as a sub-list using single brackets
team_members_list <- project_info["team_members"]
print("Team Members as a sub-list:")
print(team_members_list)
print(paste("Class of team_members_list:", class(team_members_list))) # Should be "list"

# 4. Create a data frame named student_grades
student_grades <- data.frame(
  Name = c("Alice", "Bob", "Charlie", "David"),
  Math_Score = c(85, 92, 78, 95),
  Science_Score = c(70, 88, 91, 80),
  Passed = c(TRUE, TRUE, FALSE, TRUE)
)
print("Student Grades Data Frame:")
print(student_grades)

# 5. View the structure of student_grades
print("Structure of student_grades:")
str(student_grades)

# 6. Calculate the average Math_Score
average_math <- mean(student_grades$Math_Score)
print(paste("Average Math Score:", average_math))

# 7. Filter student_grades to show only students who Passed
passed_students <- student_grades[student_grades$Passed == TRUE, ]
print("Students who Passed:")
print(passed_students)

# 8. Add a new column Total_Score
student_grades$Total_Score <- student_grades$Math_Score + student_grades$Science_Score
print("Student Grades with Total_Score:")
print(student_grades)
```

#### Assessment idea
1.  **Question:** You have a list `my_data <- list(A = 10, B = c("X", "Y"), C = TRUE)`. Which of the following commands will return the character vector `c("X", "Y")` as a character vector, not as a list?
    *   A) `my_data["B"]`
    *   B) `my_data$B`
    *   C) `my_data[[B]]`
    *   D) `my_data[2]`

    **Correct Answer:** B) `my_data$B`
    **Explanation:** The `$` operator is used to extract the *content* of a named list element directly. `my_data$B` will directly return the character vector `c("X", "Y")`.
    *   A) `my_data["B"]` would return a *list* containing the character vector.
    *   C) `my_data[[B]]` would result in an error because `B` is not defined as a variable; it should be `my_data[["B"]]` to use string indexing, which would also return the content.
    *   D) `my_data[2]` would return a *list* containing the second element by position.

2.  **Question:** Consider a data frame `employees <- data.frame(Name = c("Ana", "Ben"), Dept = c("HR", "IT"), Salary = c(60000, 75000))`. You want to select only the `Name` and `Dept` columns for all employees. Which R command correctly achieves this, returning a data frame with only these two columns?
    *   A) `employees$Name, employees$Dept`
    *   B) `employees[, c("Name", "Dept")]`
    *   C) `employees[c("Name", "Dept")]`
    *   D) `employees(Name, Dept)`

    **Correct Answer:** B) `employees[, c("Name", "Dept")]`
    **Explanation:** To select specific columns from a data frame while keeping the data frame structure, you use single square brackets `[]` and specify the column names as a character vector. The comma separates row and column indexing; leaving the row index blank (` `) means "all rows".
    *   A) This would return two separate vectors, not a single data frame.
    *   C) This syntax `employees[c("Name", "Dept")]` also works and is a common shorthand when only selecting columns by name (it implies `employees[, c("Name", "Dept")]`). However, `employees[, c("Name", "Dept")]` is more explicit and generally preferred for clarity when dealing with both row and column subsetting. Given the options, B is the most explicitly correct and universally applicable form for column selection.
    *   D) This is incorrect syntax for subsetting a data frame.

#### AI generation note
Produce a 12-15 minute mixed media lesson. Start with an animated explanation of lists as "treasure chests" that can hold anything (different types of items, even smaller chests). Demonstrate `[[ ]]`, `[]`, and `$` with clear visual distinctions of what each returns (e.g., `[[ ]]` opens the item, `[]` gives you a smaller chest). Transition to data frames by showing how they are like a "structured list" of equal-length vectors, visually aligning columns. Use a live coding demo to create a data frame, then perform various subsetting operations using `$` and `[]` with logical conditions. Include diagrams for `str()` output. The interactive element should be a drag-and-drop exercise matching list/data frame operations to their results. Emphasize common mistakes with `stringsAsFactors`.

---

## Module 3: Data Manipulation with Tidyverse

This module will guide you through the powerful Tidyverse ecosystem in R, focusing specifically on the `dplyr` package. You'll learn how to efficiently transform, clean, and prepare your data for analysis using a consistent and intuitive grammar. By the end of this module, you'll be adept at manipulating data frames to extract insights and build robust data pipelines.

---

### Chapter 3.1 — Introduction to Tidyverse and `dplyr` for Data Transformation

#### Learning objectives
*   Understand the core philosophy of "tidy data" and its importance in data analysis.
*   Install and load the `tidyverse` package in RStudio.
*   Grasp the purpose and benefits of the pipe operator (`%>%` or `|>`) for chaining operations.
*   Identify the main `dplyr` verbs and their roles in data manipulation.
*   Recognize common mistakes when starting with Tidyverse and how to avoid them.

#### Detailed lesson content
Welcome to the world of Tidyverse! If you've ever felt that data manipulation in R can sometimes be a bit clunky or hard to read, Tidyverse is here to revolutionize your workflow. At its heart, Tidyverse is a collection of R packages designed for data science, all sharing a common design philosophy, grammar, and data structures. This consistency makes learning one package, like `dplyr`, transferable to others, such as `ggplot2` for visualization or `tidyr` for reshaping data. The cornerstone of the Tidyverse philosophy is "tidy data," a concept introduced by Hadley Wickham. Tidy data adheres to three simple rules: 1) Each variable forms a column, 2) Each observation forms a row, and 3) Each type of observational unit forms a table. When your data is tidy, data manipulation becomes much more straightforward and intuitive, allowing you to focus on analysis rather than wrestling with data formats.

To begin our journey, you'll need to install the `tidyverse` package. If you haven't already, open your RStudio console and type `install.packages("tidyverse")`. This single command will install a suite of packages, including `dplyr`, `ggplot2`, `tidyr`, `readr`, `purrr`, and `stringr`. Once installed, you need to load it into your current R session using `library(tidyverse)`. You'll typically do this at the beginning of every R script where you plan to use Tidyverse functions. Don't worry if you see some messages about conflicts; these usually indicate that Tidyverse functions might mask functions with the same name from other loaded packages, which is generally fine.

One of the most distinctive and powerful features of the Tidyverse, especially `dplyr`, is the pipe operator. In R, this operator is written as `%>%` (from the `magrittr` package, which is loaded with Tidyverse) or, in R version 4.1 and later, the native `|>` operator. The pipe operator allows you to chain multiple data manipulation operations together in a highly readable and sequential manner. Instead of nesting function calls like `function3(function2(function1(data)))`, which reads from inside out, the pipe allows you to write `data %>% function1() %>% function2() %>% function3()`. This reads from left to right, much like a sentence: "take this data, THEN do this, THEN do that." This significantly improves code readability and makes your data manipulation steps much easier to follow and debug. For instance, if you want to filter a dataset and then select certain columns, you would write `my_data %>% filter(condition) %>% select(columns)`.

The `dplyr` package is your primary tool for data manipulation within the Tidyverse. It provides a consistent set of "verbs" (functions) that map directly to common data manipulation tasks. These core verbs include:
*   `select()`: Choosing columns by name or position.
*   `filter()`: Picking rows based on specific criteria.
*   `mutate()`: Adding new columns or transforming existing ones.
*   `arrange()`: Reordering rows.
*   `summarize()` (or `summarise`): Reducing multiple values down to a single summary.
*   `group_by()`: Performing operations on subsets of the data.

We will explore each of these verbs in detail in the upcoming chapters. For now, let's look at a simple example to illustrate the pipe operator and a basic `dplyr` verb. We'll use the `starwars` dataset, which comes with `dplyr`.

```R
# Load the tidyverse package
library(tidyverse)

# Display the first few rows of the starwars dataset
starwars

# Example: Select only the 'name', 'height', and 'mass' columns
# and then filter for characters taller than 180.
starwars_filtered <- starwars %>%
  select(name, height, mass) %>%
  filter(height > 180)

# View the result
print(starwars_filtered)
```

In this example, we start with the `starwars` data, pipe it into `select()` to pick specific columns, and then pipe the result of that operation into `filter()` to keep only rows where `height` is greater than 180. Notice how the code flows logically from left to right, making it very clear what operations are being performed and in what order. This is the power of `dplyr` and the pipe operator.

A common mistake beginners make is forgetting to load the `tidyverse` package with `library(tidyverse)` at the start of their script. If you try to use `dplyr` functions without loading the package, R will throw an error like "could not find function 'select'". Another common pitfall is misunderstanding the concept of tidy data, which can lead to inefficient or overly complex manipulation steps. Always try to think about how your data could be structured to best fit the tidy data principles before you start manipulating it. Remember that `dplyr` functions always return a data frame (or tibble, which is Tidyverse's enhanced data frame), allowing you to continuously chain operations. This functional programming style is a key aspect of Tidyverse and helps maintain data integrity throughout your analysis pipeline.

#### Key concepts
*   **Tidyverse**: A collection of R packages designed for data science that share a common design philosophy, grammar, and data structures.
*   **Tidy Data**: A data organization principle where each variable is a column, each observation is a row, and each type of observational unit is a table.
*   **`dplyr`**: A core Tidyverse package providing a consistent set of "verbs" for data manipulation.
*   **Pipe Operator (`%>%` or `|>`):** An operator that passes the output of one function as the first argument (or a specified argument) to the next function, enabling a sequential and readable chaining of operations.
*   **Tibble**: Tidyverse's modern reimagining of the data frame, offering improved printing and subsetting behavior.

#### Hands-on activity
**Activity: Exploring the `iris` dataset with initial `dplyr` steps**

Your task is to load the `iris` dataset (which is built into R), then use the pipe operator and `dplyr` verbs to perform a simple selection and filtering operation.

1.  Load the `tidyverse` package.
2.  Inspect the `iris` dataset (e.g., `head(iris)`).
3.  Using the pipe operator, `select` only the `Sepal.Length`, `Petal.Length`, and `Species` columns.
4.  From the result of step 3, `filter` for rows where `Species` is "virginica".
5.  Store the final result in a new object called `iris_virginica_subset`.
6.  Print the first few rows of `iris_virginica_subset`.

```R
# Starter code:
library(tidyverse)

# Inspect the iris dataset
head(iris)

# Your code goes here:
# iris_virginica_subset <- iris %>%
#   ... %>%
#   ...

# Print the result
# head(iris_virginica_subset)
```

#### Assessment idea
1.  **Question:** Which of the following best describes the primary purpose of the pipe operator (`%>%` or `|>`) in Tidyverse?
    a) To define new functions.
    b) To assign values to variables.
    c) To chain multiple data manipulation operations sequentially, improving readability.
    d) To perform mathematical calculations.

    **Correct Answer:** c) To chain multiple data manipulation operations sequentially, improving readability.
    **Explanation:** The pipe operator is specifically designed to pass the result of one function as the first argument to the next, creating a clear, left-to-right flow of operations that significantly enhances code readability and maintainability in data pipelines.

2.  **Question:** You've loaded `tidyverse` and are trying to use `select()` but R gives you an error: "could not find function 'select'". What is the most likely reason for this error?
    a) The `dplyr` package is not installed.
    b) The `tidyverse` package was installed but not loaded with `library(tidyverse)`.
    c) You misspelled `select`.
    d) The data frame you are trying to select from does not exist.

    **Correct Answer:** b) The `tidyverse` package was installed but not loaded with `library(tidyverse)`.
    **Explanation:** While `dplyr` is part of `tidyverse`, simply installing `tidyverse` isn't enough. You must explicitly load the package into your current R session using `library(tidyverse)` (or `library(dplyr)`) for its functions to become available. If the package wasn't installed at all, the error message would typically be "there is no package called 'tidyverse'".

#### AI generation note
Create a 10-minute animated video explaining the Tidyverse philosophy and the pipe operator. Start with a visual representation of "messy" versus "tidy" data using a simple spreadsheet analogy. Then, animate the `%>%` operator as a conveyor belt, showing data flowing from one `dplyr` verb (represented as a machine, e.g., a filter machine, a selector machine) to the next. Use the `starwars` dataset as the primary example, demonstrating `starwars %>% select(name, height) %>% filter(height > 180)`. Highlight the readability improvement compared to nested function calls. Include a clear visual cue for loading `library(tidyverse)`. The tone should be encouraging and beginner-friendly. Incorporate captions and alt text for all diagrams.

---

### Chapter 3.2 — Selecting and Arranging Data with `dplyr`

#### Learning objectives
*   Utilize the `select()` verb to choose specific columns from a data frame by name, position, or using helper functions.
*   Apply the `arrange()` verb to sort rows in ascending or descending order based on one or multiple columns.
*   Combine `select()` and `arrange()` effectively using the pipe operator to prepare data for analysis.
*   Understand and avoid common pitfalls when selecting and arranging columns, such as typos or incorrect helper function usage.
*   Perform initial data inspection by selecting relevant columns and ordering them logically.

#### Detailed lesson content
Now that you're familiar with the Tidyverse philosophy and the pipe operator, let's dive into two fundamental `dplyr` verbs: `select()` and `arrange()`. These functions are crucial for your initial data exploration and cleaning steps, allowing you to focus on relevant variables and organize your data for better readability.

The `select()` verb is your go-to tool for choosing columns. Imagine you have a large dataset with dozens of columns, but for your current analysis, you only need a handful. `select()` allows you to precisely pick those columns. You can select columns by their names, by their position, or by using special helper functions that match patterns in column names.

Let's use the `nycflights13::flights` dataset for our examples. First, ensure you have the `nycflights13` package installed (`install.packages("nycflights13")`) and then load both `tidyverse` and `nycflights13`.

```R
library(tidyverse)
library(nycflights13)

# View the column names of the flights dataset
colnames(flights)

# 1. Selecting columns by name:
# We want to keep only year, month, day, dep_delay, arr_delay, and origin.
flights_subset_names <- flights %>%
  select(year, month, day, dep_delay, arr_delay, origin)

print(head(flights_subset_names))

# 2. Selecting columns by position:
# Let's say we want the first 5 columns.
flights_subset_position <- flights %>%
  select(1:5) # Selects columns from 1 to 5

print(head(flights_subset_position))

# 3. Excluding columns:
# We want all columns EXCEPT 'time_hour' and 'flight'.
flights_without_some <- flights %>%
  select(-time_hour, -flight) # Use '-' to deselect

print(head(flights_without_some))

# 4. Using helper functions:
# These are incredibly useful for pattern matching.
# starts_with("prefix"): Selects columns whose names start with "prefix".
# ends_with("suffix"): Selects columns whose names end with "suffix".
# contains("string"): Selects columns whose names contain "string".
# matches("regex"): Selects columns whose names match a regular expression.
# num_range("x", 1:5): Selects columns x1, x2, x3, x4, x5.
# everything(): Selects all other columns (useful for reordering).

# Example: Select all columns that start with 'dep' or 'arr'.
flights_delays <- flights %>%
  select(starts_with("dep"), starts_with("arr"))

print(head(flights_delays))

# Example: Select 'origin', then all columns containing 'time'.
flights_times <- flights %>%
  select(origin, contains("time"))

print(head(flights_times))

# Common mistake: Forgetting to quote column names if they are non-syntactic (e.g., contain spaces or special characters).
# However, for select(), you generally don't quote standard column names unless you're passing them as strings programmatically.
# A more common mistake is a typo in the column name, leading to an error or the column simply not being selected.
```

The `arrange()` verb is used to reorder the rows of your data frame. This is incredibly useful for sorting data by specific criteria, such as viewing the fastest flights, the highest delays, or simply organizing data chronologically. You can arrange by one or multiple columns, and you can specify ascending or descending order. By default, `arrange()` sorts in ascending order. To sort in descending order, you wrap the column name in `desc()`.

```R
# 1. Arranging by a single column in ascending order (default):
# Find the flights with the shortest departure delay.
shortest_dep_delay <- flights %>%
  select(month, day, dep_delay, arr_delay, origin, dest) %>%
  arrange(dep_delay)

print(head(shortest_dep_delay))

# 2. Arranging by a single column in descending order:
# Find the flights with the longest arrival delay.
longest_arr_delay <- flights %>%
  select(month, day, dep_delay, arr_delay, origin, dest) %>%
  arrange(desc(arr_delay))

print(head(longest_arr_delay))

# 3. Arranging by multiple columns:
# First by 'origin' (ascending), then by 'dep_delay' (descending) within each origin.
flights_sorted_multi <- flights %>%
  select(origin, dest, dep_delay, arr_delay) %>%
  arrange(origin, desc(dep_delay))

print(head(flights_sorted_multi))
```

When arranging by multiple columns, `dplyr` sorts by the first column, then by the second within ties of the first, and so on. This hierarchical sorting is very powerful for detailed data organization. A common mistake here is forgetting `desc()` when you intend to sort in descending order, or specifying an incorrect column name. Always double-check your column names, especially if you've recently renamed them or loaded a new dataset.

Combining `select()` and `arrange()` with the pipe operator is a very common and effective pattern for initial data preparation. You might first select a subset of relevant columns, then immediately arrange those columns to quickly identify trends, outliers, or specific observations. This sequential approach makes your code highly readable and efficient.

For instance, if you want to see the departure delays for flights from JFK, ordered by the longest delay first, you might write:

```R
jfk_delays_sorted <- flights %>%
  filter(origin == "JFK") %>% # We'll cover filter() next, but for now, this selects JFK flights
  select(month, day, dep_delay, arr_delay, dest) %>%
  arrange(desc(dep_delay))

print(head(jfk_delays_sorted))
```
Notice how the flow is logical: take `flights`, then `filter` for JFK, then `select` specific columns, then `arrange` by departure delay. This progressive building of operations is a hallmark of `dplyr` and will become second nature as you practice.

#### Key concepts
*   **`select()`**: A `dplyr` verb used to choose specific columns from a data frame.
*   **`arrange()`**: A `dplyr` verb used to reorder the rows of a data frame based on the values of one or more columns.
*   **Helper Functions (for `select()`):** Functions like `starts_with()`, `ends_with()`, `contains()`, `matches()`, and `everything()` that provide flexible ways to select columns based on pattern matching or position.
*   **`desc()`**: A function used within `arrange()` to specify descending order for a particular column.
*   **Column exclusion**: Using the `-` prefix before a column name within `select()` to remove it from the output.

#### Hands-on activity
**Activity: Analyzing `starwars` character heights and weights**

Using the `starwars` dataset:

1.  Load the `tidyverse` package.
2.  `select` the `name`, `height`, `mass`, and `species` columns.
3.  From the result of step 2, `arrange` the characters first by `species` in ascending order, and then by `height` in descending order within each species.
4.  Store the final result in a new object called `sorted_starwars_chars`.
5.  Print the first 10 rows of `sorted_starwars_chars`.

```R
# Starter code:
library(tidyverse)

# Your code goes here:
# sorted_starwars_chars <- starwars %>%
#   ... %>%
#   ...

# Print the result
# head(sorted_starwars_chars, 10)
```

#### Assessment idea
1.  **Question:** You have a data frame `df` with columns `id`, `name`, `score_math`, `score_science`, `grade_level`. You want to create a new data frame containing only `name`, `score_math`, and `score_science`, sorted by `score_math` in descending order. Which `dplyr` code snippet achieves this?
    a) `df %>% select(name, score_math, score_science) %>% arrange(score_math)`
    b) `df %>% arrange(desc(score_math)) %>% select(name, score_math, score_science)`
    c) `df %>% select(name, score_math, score_science) %>% arrange(desc(score_math))`
    d) `df %>% filter(score_math > 0) %>% select(name, score_math, score_science)`

    **Correct Answer:** c) `df %>% select(name, score_math, score_science) %>% arrange(desc(score_math))`
    **Explanation:** Option (c) correctly uses `select()` to pick the desired columns and then `arrange(desc(score_math))` to sort these selected rows by `score_math` in descending order. Option (a) sorts in ascending order. Option (b) arranges before selecting, which works but is less intuitive for a pipeline where you first narrow down columns, then sort. Option (d) uses `filter()` which is not requested.

2.  **Question:** Consider the `flights` dataset. You want to select all columns that contain the word "time" and all columns that start with "dep". Which `dplyr::select()` call would achieve this?
    a) `flights %>% select(contains("time") & starts_with("dep"))`
    b) `flights %>% select(contains("time"), starts_with("dep"))`
    c) `flights %>% select(contains("time") | starts_with("dep"))`
    d) `flights %>% select(c("time", "dep"))`

    **Correct Answer:** b) `flights %>% select(contains("time"), starts_with("dep"))`
    **Explanation:** In `select()`, you can list multiple column names or helper function calls separated by commas. This tells `select()` to include all columns identified by each argument. Option (a) and (c) use logical operators (`&`, `|`) which are not how you combine selection criteria directly within `select()` for including multiple sets of columns. Option (d) is incorrect as it tries to select literal columns named "time" and "dep", not patterns.

#### AI generation note
Design a 12-minute interactive code demo focusing on `select()` and `arrange()`. Start with a visual of the `nycflights13::flights` dataset (e.g., a table with many columns). Demonstrate `select()` by highlighting columns as they are chosen, showing the resulting smaller table. Progress through selecting by name, excluding columns, and using helper functions like `starts_with()` with visual cues for matching. Then, transition to `arrange()`, showing rows reordering dynamically for ascending and descending sorts, first by one column, then by two. Provide a live coding segment where the user can modify `select()` and `arrange()` arguments and see immediate results. Include a specific example of selecting `carrier`, `flight`, `dep_delay`, `arr_delay` and arranging by `carrier` then `dep_delay` (desc). Ensure the interactive element allows learners to experiment with different helper functions.

---

### Chapter 3.3 — Filtering and Mutating Data with `dplyr`

#### Learning objectives
*   Master the `filter()` verb to subset rows based on single or multiple logical conditions.
*   Effectively use logical operators (`==`, `!=`, `<`, `>`, `<=`, `>=`, `&`, `|`, `!`, `%in%`, `is.na()`) within `filter()`.
*   Apply the `mutate()` verb to create new variables or transform existing ones within a data frame.
*   Utilize conditional logic (e.g., `if_else()`) within `mutate()` for more complex transformations.
*   Combine `filter()` and `mutate()` with the pipe operator to build robust data preparation pipelines.

#### Detailed lesson content
Building on our foundation of selecting and arranging, we now turn our attention to `filter()` and `mutate()`, two of the most frequently used `dplyr` verbs. These functions empower you to subset your data based on specific conditions and to create entirely new variables or modify existing ones, which are critical steps in any data analysis workflow.

The `filter()` verb allows you to subset your data frame by rows, keeping only those that satisfy certain logical conditions. Think of it as asking questions of your data and only keeping the answers that are "TRUE." You can specify one or more conditions, and if multiple conditions are provided, they are combined with an implicit `AND` (`&`) operator.

Let's continue using the `nycflights13::flights` dataset. Remember to load `tidyverse` and `nycflights13` if you haven't already.

```R
library(tidyverse)
library(nycflights13)

# 1. Filtering for a single condition:
# Find all flights that departed in January (month == 1).
january_flights <- flights %>%
  filter(month == 1)

print(head(january_flights))

# Common mistake: Using '=' for comparison instead of '=='.
# `month = 1` would attempt to assign 1 to the 'month' column, leading to an error or unexpected behavior.
# Always use `==` for equality checks in R's logical conditions.

# 2. Filtering for multiple conditions (implicit AND):
# Find flights in January that also departed on the first day (day == 1).
january_first_flights <- flights %>%
  filter(month == 1, day == 1) # Equivalent to filter(month == 1 & day == 1)

print(head(january_first_flights))

# 3. Using OR (`|`) for conditions:
# Find flights that departed from JFK OR LGA.
jfk_lga_flights <- flights %>%
  filter(origin == "JFK" | origin == "LGA")

print(head(jfk_lga_flights))

# 4. Using the `%in%` operator for multiple OR conditions:
# This is cleaner than multiple `|` for checking against a list of values.
# Find flights that departed from JFK, LGA, or EWR.
all_nyc_airports_flights <- flights %>%
  filter(origin %in% c("JFK", "LGA", "EWR"))

print(head(all_nyc_airports_flights))

# 5. Filtering for missing values (`NA`):
# Find flights with missing departure delays.
flights_missing_dep_delay <- flights %>%
  filter(is.na(dep_delay))

print(head(flights_missing_dep_delay))

# To filter out missing values:
flights_no_missing_dep_delay <- flights %>%
  filter(!is.na(dep_delay)) # The '!' negates the condition

print(head(flights_no_missing_dep_delay))

# 6. Combining conditions with NOT (`!`)
# Find flights that are NOT from JFK.
not_jfk_flights <- flights %>%
  filter(!(origin == "JFK")) # Or simply filter(origin != "JFK")

print(head(not_jfk_flights))
```
When working with `filter()`, remember that `NA` values can behave unexpectedly in logical comparisons. For example, `NA == 1` or `NA > 5` will always return `NA`, not `FALSE`. This is why `is.na()` is essential for handling missing data.

Next, let's explore `mutate()`. This verb is incredibly powerful for feature engineering – creating new variables from existing ones, or transforming existing variables. For example, you might want to calculate the total travel time, convert units, or categorize continuous variables.

```R
# 1. Creating a new column:
# Calculate the total delay (departure delay + arrival delay).
flights_with_total_delay <- flights %>%
  mutate(total_delay = dep_delay + arr_delay)

print(head(flights_with_total_delay %>% select(dep_delay, arr_delay, total_delay)))

# 2. Modifying an existing column:
# Convert 'distance' from miles to kilometers (1 mile = 1.60934 km).
flights_distance_km <- flights %>%
  mutate(distance = distance * 1.60934) # Overwrites the existing 'distance' column

print(head(flights_distance_km %>% select(distance)))

# 3. Creating multiple new columns in one `mutate()` call:
flights_with_speed <- flights %>%
  mutate(
    total_delay = dep_delay + arr_delay,
    air_time_hours = air_time / 60,
    speed_mph = distance / air_time_hours
  )

print(head(flights_with_speed %>% select(air_time, air_time_hours, distance, speed_mph)))

# 4. Using `if_else()` for conditional mutation:
# Categorize flights based on departure delay: "On Time" (delay <= 0), "Minor Delay" (0 < delay <= 60), "Major Delay" (delay > 60).
flights_with_delay_category <- flights %>%
  mutate(
    delay_category = if_else(dep_delay <= 0, "On Time",
                             if_else(dep_delay > 0 & dep_delay <= 60, "Minor Delay", "Major Delay"))
  )

print(head(flights_with_delay_category %>% select(dep_delay, delay_category)))

# Common mistake: Forgetting to handle NA values in `if_else()`.
# `if_else()` has an `.na` argument to specify what to do with NA inputs,
# e.g., `if_else(condition, true_value, false_value, missing_value = NA_character_)`.
# If not handled, `NA` values in the condition will propagate to `NA` in the new column.
```
`if_else()` is a safer and more type-stable alternative to base R's `ifelse()` when working with Tidyverse. It ensures that the `true_value` and `false_value` have the same type, preventing unexpected type coercion.

Combining `filter()` and `mutate()` allows for highly specific data transformations. You might first filter for a subset of data (e.g., flights from a specific airline), and then mutate that subset to calculate a new metric relevant only to those filtered rows. This sequential application of verbs is the essence of building a data pipeline in `dplyr`.

For example, let's find all flights from `UA` (United Airlines) and calculate their effective speed in mph, but only for flights that actually departed (i.e., `dep_delay` is not `NA`).

```R
ua_flights_speed <- flights %>%
  filter(carrier == "UA", !is.na(dep_delay), !is.na(air_time), !is.na(distance)) %>%
  mutate(
    air_time_hours = air_time / 60,
    speed_mph = distance / air_time_hours
  ) %>%
  select(carrier, flight, origin, dest, air_time_hours, distance, speed_mph)

print(head(ua_flights_speed))
```
Notice how we chain `filter()` multiple times, using commas for implicit `AND` conditions, before passing the filtered data to `mutate()`. This ensures that our speed calculation is only performed on valid, non-missing data, preventing `NA` values from propagating into our new `speed_mph` column due to division by `NA` or `0`.

#### Key concepts
*   **`filter()`**: A `dplyr` verb used to select a subset of rows based on one or more logical conditions.
*   **Logical Operators**: Symbols used to create conditions, including `==` (equal to), `!=` (not equal to), `<` (less than), `>` (greater than), `<=` (less than or equal to), `>=` (greater than or equal to), `&` (AND), `|` (OR), `!` (NOT).
*   **`%in%` operator**: Used within `filter()` to check if a value is present in a vector of values.
*   **`is.na()`**: A function used to identify missing values (`NA`).
*   **`mutate()`**: A `dplyr` verb used to add new columns or modify existing ones in a data frame.
*   **`if_else()`**: A Tidyverse function for performing conditional logic within `mutate()`, offering type stability and explicit `NA` handling.

#### Hands-on activity
**Activity: Analyzing `starwars` characters by height and BMI**

Using the `starwars` dataset:

1.  Load the `tidyverse` package.
2.  `filter` the dataset to include only characters whose `height` is greater than 150 cm AND whose `mass` is not `NA`.
3.  From the filtered data, `mutate` to create two new columns:
    *   `height_m`: `height` converted from centimeters to meters (divide by 100).
    *   `bmi`: Body Mass Index, calculated as `mass / (height_m^2)`.
4.  Then, `mutate` again to create a `bmi_category` column using `if_else()`:
    *   "Underweight" if `bmi` < 18.5
    *   "Normal weight" if `bmi` >= 18.5 AND `bmi` < 25
    *   "Overweight" if `bmi` >= 25 AND `bmi` < 30
    *   "Obese" if `bmi` >= 30
    *   Handle `NA` values for `bmi` by assigning them to "Unknown".
5.  `select` the `name`, `height`, `mass`, `height_m`, `bmi`, and `bmi_category` columns.
6.  Store the final result in a new object called `starwars_bmi_analysis`.
7.  Print the first 10 rows of `starwars_bmi_analysis`.

```R
# Starter code:
library(tidyverse)

# Your code goes here:
# starwars_bmi_analysis <- starwars %>%
#   filter(...) %>%
#   mutate(
#     height_m = ...,
#     bmi = ...
#   ) %>%
#   mutate(
#     bmi_category = if_else(
#       is.na(bmi), "Unknown",
#       if_else(bmi < 18.5, "Underweight",
#               if_else(bmi >= 18.5 & bmi < 25, "Normal weight",
#                       if_else(bmi >= 25 & bmi < 30, "Overweight", "Obese"))
#       )
#     )
#   ) %>%
#   select(...)

# Print the result
# head(starwars_bmi_analysis, 10)
```

#### Assessment idea
1.  **Question:** You want to find all flights in the `flights` dataset that either had an `air_time` greater than 300 minutes OR an `arr_delay` greater than 60 minutes. Which `dplyr::filter()` call would achieve this?
    a) `flights %>% filter(air_time > 300 & arr_delay > 60)`
    b) `flights %>% filter(air_time > 300, arr_delay > 60)`
    c) `flights %>% filter(air_time > 300 | arr_delay > 60)`
    d) `flights %>% filter(air_time > 300, arr_delay > 60, .combine = "OR")`

    **Correct Answer:** c) `flights %>% filter(air_time > 300 | arr_delay > 60)`
    **Explanation:** The `|` (OR) operator is used to combine conditions where at least one of them must be true for a row to be kept. Options (a) and (b) use `&` (AND) implicitly or explicitly, which would require both conditions to be true. Option (d) uses a non-existent argument for `filter()`.

2.  **Question:** You have a data frame `sales_data` with columns `product_id`, `price`, and `quantity`. You want to add a new column `total_revenue` (calculated as `price * quantity`) and then categorize `total_revenue` into "High" (if `total_revenue` > 1000) or "Low" (otherwise). Which `dplyr` code snippet correctly performs these operations?
    a) `sales_data %>% mutate(total_revenue = price * quantity, revenue_category = if_else(total_revenue > 1000, "High", "Low"))`
    b) `sales_data %>% mutate(total_revenue = price * quantity) %>% mutate(revenue_category = if_else(total_revenue > 1000, "High", "Low"))`
    c) `sales_data %>% filter(total_revenue = price * quantity) %>% mutate(revenue_category = if_else(total_revenue > 1000, "High", "Low"))`
    d) `sales_data %>% mutate(revenue_category = if_else(price * quantity > 1000, "High", "Low"), total_revenue = price * quantity)`

    **Correct Answer:** a) `sales_data %>% mutate(total_revenue = price * quantity, revenue_category = if_else(total_revenue > 1000, "High", "Low"))`
    **Explanation:** In `dplyr::mutate()`, you can create multiple new columns within a single call, and newly created columns can be immediately used in subsequent calculations within the same `mutate()` call. Option (a) does this efficiently. Option (b) works but is less concise. Option (c) incorrectly uses `filter()` instead of `mutate()`. Option (d) works, but it's generally good practice to define the base calculation (`total_revenue`) before using it in another calculation (`revenue_category`) for clarity, though `mutate` processes arguments sequentially.

#### AI generation note
Create a 15-minute mixed-format lesson (slides + interactive demo). Start with slides visually explaining logical operators for `filter()` using simple examples (e.g., "red" cars OR "blue" cars, "fast" cars AND "expensive" cars). Then, transition to an interactive code demo using `nycflights13::flights`. Show how `filter()` conditions subset the data, highlighting the rows that are kept. For `mutate()`, illustrate creating `total_delay` and `speed_mph` with visual representations of the calculations. Emphasize `if_else()` with a clear flowchart or decision tree for the `delay_category` example. The interactive element should allow learners to change `filter()` conditions or `mutate()` calculations and see the resulting table update. Include common mistakes like `==` vs `=` and `NA` handling.

---

### Chapter 3.4 — Summarizing and Grouping Data with `dplyr`

#### Learning objectives
*   Utilize the `summarize()` verb to calculate summary statistics from a data frame.
*   Apply common aggregation functions (e.g., `mean()`, `median()`, `sd()`, `min()`, `max()`, `n()`, `n_distinct()`) within `summarize()`.
*   Understand the purpose and application of the `group_by()` verb for performing operations on subsets of data.
*   Combine `group_by()` and `summarize()` to generate grouped summary statistics.
*   Learn how to `ungroup()` data after performing grouped operations to avoid unintended side effects.

#### Detailed lesson content
We've covered selecting, arranging, filtering, and mutating – all essential for transforming your data. Now, it's time to extract meaningful insights from that transformed data using `summarize()` and `group_by()`. These two verbs are fundamental for aggregation, allowing you to condense large datasets into concise summaries that reveal patterns and trends.

The `summarize()` (or `summarise`, both spellings are accepted) verb collapses a data frame into a single row, calculating summary statistics for chosen variables. When used without `group_by()`, it provides overall statistics for the entire dataset. When combined with `group_by()`, it calculates these statistics for each group.

Let's continue with the `nycflights13::flights` dataset.

```R
library(tidyverse)
library(nycflights13)

# 1. Basic summarization without grouping:
# Calculate the overall average departure delay and total number of flights.
overall_summary <- flights %>%
  summarize(
    avg_dep_delay = mean(dep_delay, na.rm = TRUE), # na.rm = TRUE handles missing values
    total_flights = n() # n() counts the number of rows (observations)
  )

print(overall_summary)

# Common aggregation functions:
# mean(x, na.rm = TRUE): Calculates the mean.
# median(x, na.rm = TRUE): Calculates the median.
# sd(x, na.rm = TRUE): Calculates the standard deviation.
# min(x, na.rm = TRUE): Finds the minimum value.
# max(x, na.rm = TRUE): Finds the maximum value.
# sum(x, na.rm = TRUE): Calculates the sum.
# n(): Counts the number of observations in the current group (or total if no grouping).
# n_distinct(x): Counts the number of unique values in x.
# first(x), last(x): Returns the first or last value in x.
# IQR(x, na.rm = TRUE): Calculates the interquartile range.

# Example with more summary statistics:
detailed_overall_summary <- flights %>%
  summarize(
    avg_arr_delay = mean(arr_delay, na.rm = TRUE),
    median_arr_delay = median(arr_delay, na.rm = TRUE),
    sd_arr_delay = sd(arr_delay, na.rm = TRUE),
    min_arr_delay = min(arr_delay, na.rm = TRUE),
    max_arr_delay = max(arr_delay, na.rm = TRUE),
    total_flights = n(),
    unique_destinations = n_distinct(dest)
  )

print(detailed_overall_summary)

# Common mistake: Forgetting `na.rm = TRUE` when dealing with columns that might have NA values.
# If `na.rm = TRUE` is omitted and there are NAs, the result of `mean()`, `sum()`, etc., will often be `NA`.
```

While `summarize()` on its own is useful for overall statistics, its true power comes when combined with `group_by()`. The `group_by()` verb doesn't change the data frame's appearance immediately, but it adds a "grouping" attribute. Subsequent `dplyr` operations (like `summarize()`, `mutate()`, `filter()`) will then be applied independently to each group.

```R
# 1. Grouping by a single variable and summarizing:
# Calculate average departure delay for each origin airport.
avg_delay_by_origin <- flights %>%
  group_by(origin) %>%
  summarize(
    avg_dep_delay = mean(dep_delay, na.rm = TRUE),
    total_flights = n()
  )

print(avg_delay_by_origin)

# 2. Grouping by multiple variables:
# Calculate average departure delay for each origin-destination pair.
avg_delay_by_origin_dest <- flights %>%
  group_by(origin, dest) %>%
  summarize(
    avg_dep_delay = mean(dep_delay, na.rm = TRUE),
    total_flights = n(),
    .groups = 'drop' # This argument removes grouping after summarizing (R 1.0.0+), good practice
  )

print(head(avg_delay_by_origin_dest))

# When you group by multiple variables, the summarization occurs for each unique combination of those variables.
# The `.groups = 'drop'` argument in `summarize()` is a modern dplyr feature (from version 1.0.0 onwards)
# that automatically removes the grouping structure from the resulting tibble.
# This is often desired to prevent unintended grouped operations in subsequent steps.
```

It's crucial to understand that after `group_by()` and `summarize()`, your data frame remains "grouped" unless you explicitly `ungroup()` it or use `.groups = 'drop'`. If you perform further operations on a grouped data frame, those operations will continue to apply per group, which can lead to unexpected results if you're not aware of it.

```R
# Example of ungrouping:
# Calculate average delay by origin, then find the overall average of these averages.
# Without ungrouping, the second summarize would still be grouped by origin.
avg_delay_by_origin_then_overall <- flights %>%
  group_by(origin) %>%
  summarize(
    avg_dep_delay_per_origin = mean(dep_delay, na.rm = TRUE),
    .groups = 'drop' # Drop grouping after the first summarize
  ) %>%
  summarize(
    overall_avg_of_origin_delays = mean(avg_dep_delay_per_origin, na.rm = TRUE)
  )

print(avg_delay_by_origin_then_overall)

# If we didn't use `.groups = 'drop'`, the second summarize would still be grouped by origin,
# and it would try to calculate the mean of `avg_dep_delay_per_origin` for each origin,
# which would just return the `avg_dep_delay_per_origin` itself (as there's only one value per group).
```
The `ungroup()` function is useful when you want to explicitly remove the grouping attribute at any point in your pipeline. This is particularly important if you plan to perform operations that should apply to the entire dataset after a grouped operation.

Combining `group_by()` and `summarize()` is a cornerstone of data analysis. It allows you to answer questions like: "What is the average sales per region?", "Which product has the highest average rating?", or "How many unique customers did each store serve?" This powerful combination transforms raw data into actionable insights, providing a high-level view of your data's characteristics.

A common mistake is to forget `na.rm = TRUE` within summary functions, especially when dealing with real-world data that almost always contains missing values. Another is to forget about the grouping structure after `group_by()`, leading to subsequent operations being applied per group when you intended them for the entire dataset. Always be mindful of the grouping status of your tibble.

#### Key concepts
*   **`summarize()` (or `summarise`)**: A `dplyr` verb that collapses a data frame into a single row (or one row per group) by calculating summary statistics.
*   **Aggregation Functions**: Functions like `mean()`, `median()`, `sd()`, `min()`, `max()`, `sum()`, `n()`, `n_distinct()` used within `summarize()` to compute statistics.
*   **`na.rm = TRUE`**: An argument commonly used in aggregation functions to remove `NA` values before calculation, preventing the result from being `NA`.
*   **`group_by()`**: A `dplyr` verb that adds a grouping attribute to a data frame, causing subsequent operations to be applied independently to each group.
*   **`ungroup()`**: A `dplyr` verb that removes the grouping attribute from a data frame.
*   **`.groups = 'drop'`**: An argument in `summarize()` (from `dplyr` 1.0.0+) that automatically removes the grouping structure after summarization.

#### Hands-on activity
**Activity: Analyzing `starwars` character statistics by species and gender**

Using the `starwars` dataset:

1.  Load the `tidyverse` package.
2.  `filter` out any characters where `height` or `mass` are `NA`.
3.  `group_by` `species` and `gender`.
4.  `summarize` the grouped data to calculate:
    *   `avg_height`: The mean `height` for each species-gender group.
    *   `avg_mass`: The mean `mass` for each species-gender group.
    *   `num_characters`: The total number of characters in each group using `n()`.
    *   Ensure `na.rm = TRUE` is used for `mean()` calculations.
    *   Use `.groups = 'drop'` in `summarize()`.
5.  `arrange` the final result by `species` (ascending) and then `avg_height` (descending).
6.  Store the final result in a new object called `starwars_species_gender_summary`.
7.  Print `starwars_species_gender_summary`.

```R
# Starter code:
library(tidyverse)

# Your code goes here:
# starwars_species_gender_summary <- starwars %>%
#   filter(...) %>%
#   group_by(...) %>%
#   summarize(
#     avg_height = ...,
#     avg_mass = ...,
#     num_characters = n(),
#     .groups = 'drop'
#   ) %>%
#   arrange(...)

# Print the result
# print(starwars_species_gender_summary)
```

#### Assessment idea
1.  **Question:** You want to calculate the average `dep_delay` and `arr_delay` for each `carrier` in the `flights` dataset. Which `dplyr` code snippet correctly achieves this?
    a) `flights %>% summarize(avg_dep = mean(dep_delay, na.rm = TRUE), avg_arr = mean(arr_delay, na.rm = TRUE))`
    b) `flights %>% group_by(carrier) %>% summarize(avg_dep = mean(dep_delay, na.rm = TRUE), avg_arr = mean(arr_delay, na.rm = TRUE))`
    c) `flights %>% filter(carrier) %>% summarize(avg_dep = mean(dep_delay, na.rm = TRUE), avg_arr = mean(arr_delay, na.rm = TRUE))`
    d) `flights %>% mutate(avg_dep = mean(dep_delay, na.rm = TRUE), avg_arr = mean(arr_delay, na.rm = TRUE))`

    **Correct Answer:** b) `flights %>% group_by(carrier) %>% summarize(avg_dep = mean(dep_delay, na.rm = TRUE), avg_arr = mean(arr_delay, na.rm = TRUE))`
    **Explanation:** To calculate statistics *for each* category (like `carrier`), you must first `group_by()` that category. Then, `summarize()` will apply the aggregation functions independently within each group. Option (a) would give overall averages, not per carrier. Options (c) and (d) use incorrect verbs for aggregation.

2.  **Question:** After performing a `group_by()` and `summarize()` operation, you want to perform a subsequent `filter()` operation that applies to the entire resulting data frame, not still per group. What is the best practice to ensure this?
    a) The data frame is automatically ungrouped after `summarize()`.
    b) Use `filter(.groups = 'drop')` in the `filter()` call.
    c) Explicitly call `ungroup()` after `summarize()` or use `.groups = 'drop'` within `summarize()`.
    d) Perform the `filter()` before the `group_by()` and `summarize()`.

    **Correct Answer:** c) Explicitly call `ungroup()` after `summarize()` or use `.groups = 'drop'` within `summarize()`.
    **Explanation:** By default, `dplyr` keeps the grouping structure after `group_by()` and `summarize()` (though `summarize()` in `dplyr` 1.0.0+ has `.groups` argument to control this). To ensure subsequent operations apply to the entire data frame, you must explicitly remove the grouping using `ungroup()` or by setting `.groups = 'drop'` in the `summarize()` call itself. Option (a) is incorrect as grouping persists. Option (b) is incorrect syntax. Option (d) changes the order of operations, which might not be the desired logic.

#### AI generation note
Develop a 12-minute interactive lab walkthrough focusing on `group_by()` and `summarize()`. Begin with a visual explanation of `group_by()` using an analogy (e.g., sorting students into class groups before calculating average test scores for each class). Then, provide a live coding demonstration using `nycflights13::flights`. Show how `group_by(origin)` creates distinct groups, then `summarize()` calculates statistics for each. Progress to `group_by(origin, dest)`. Visually emphasize the output changing from a large table to a smaller summary table. Include a clear segment on `na.rm = TRUE` and the importance of `ungroup()` or `.groups = 'drop'`, showing the difference in behavior if grouping is retained. The interactive element should allow learners to choose different grouping variables and summary functions, seeing the resulting aggregated data.

---

## Module 4: Control Flow, Functions, and Debugging

This module will empower you to write more dynamic, efficient, and robust R code by introducing you to the fundamental concepts of control flow, functions, and debugging. You'll learn how to make your programs make decisions, repeat tasks, organize code into reusable blocks, and effectively troubleshoot issues.

### Chapter 4.1 — Conditional Logic with `if`, `else`, and `ifelse`

#### Learning objectives
*   Construct `if`, `else if`, and `else` statements to control program flow based on conditions.
*   Differentiate between vectorized (`&`, `|`) and non-vectorized (`&&`, `||`) logical operators and apply them correctly.
*   Utilize the `ifelse()` function for vectorized conditional assignments in data frames or vectors.
*   Identify and correct common mistakes when applying conditional logic in R, especially with vector inputs.
*   Apply conditional logic to categorize data or filter observations based on specific criteria.

#### Detailed lesson content
Welcome to the world of decision-making in R! Just like in real life, our programs often need to make choices based on different situations. This is where conditional logic comes into play. The most fundamental building block for this is the `if` statement, which allows a block of code to execute only if a specified condition is true. We often pair `if` with `else` to provide an alternative path when the initial condition is false, creating a clear fork in our program's execution. For more complex scenarios, we can chain multiple conditions using `else if`, allowing for a sequence of checks until one condition is met.

Let's consider a simple example. Imagine you're analyzing customer data and want to assign a "loyalty status" based on their total spending. An `if-else if-else` structure would be perfect here. You might check if spending is above a certain threshold for "Gold" status, then another threshold for "Silver," and finally "Bronze" for everyone else. The syntax for these statements is crucial: the condition goes inside parentheses `()` and the code to execute goes inside curly braces `{}`. It's good practice to indent the code within the braces to improve readability, making it clear which lines belong to which conditional block.

```R
customer_spending <- 750

if (customer_spending >= 1000) {
  loyalty_status <- "Gold"
  message("Congratulations! You are a Gold member.")
} else if (customer_spending >= 500) {
  loyalty_status <- "Silver"
  message("Welcome to Silver status!")
} else {
  loyalty_status <- "Bronze"
  message("Thank you for being a Bronze member.")
}

print(paste("Customer's loyalty status:", loyalty_status))
```

A common pitfall for beginners in R is confusing the logical operators `&` and `|` with `&&` and `||`. The single ampersand `&` (AND) and single pipe `|` (OR) are *vectorized* operators. This means they operate element-wise on vectors, returning a vector of logical `TRUE`/`FALSE` values. For instance, if you have a vector of numbers and want to check which ones are both greater than 5 AND less than 10, you'd use `&`. In contrast, the double ampersand `&&` and double pipe `||` are *non-vectorized* operators. They evaluate only the *first element* of each vector and are typically used within `if` statements where you expect a single `TRUE` or `FALSE` result. Using `&&` or `||` with vectors inside an `if` condition can lead to unexpected behavior, as R will only consider the first element and issue a warning if the vector has more than one element. Always remember: `if` statements expect a single logical value. If you provide a vector, only the first element is used.

For situations where you need to apply a conditional logic across an entire vector or column in a data frame, and you want the result to be a new vector or column, the `ifelse()` function is incredibly powerful and efficient. Unlike `if-else` statements which are designed for scalar (single value) conditions, `ifelse()` is vectorized. It takes three arguments: a logical test, a value to return if the test is `TRUE`, and a value to return if the test is `FALSE`. This makes it ideal for creating new categorical variables based on existing numeric data. For example, you could create a "Pass/Fail" column based on exam scores, or "High/Medium/Low" risk categories from a numerical risk score.

Let's illustrate `ifelse()` with a practical scenario. Suppose you have a vector of student scores and you want to classify them into "Pass" (score >= 60) or "Fail" (score < 60).

```R
student_scores <- c(85, 45, 72, 91, 58, 60)
pass_fail_status <- ifelse(student_scores >= 60, "Pass", "Fail")
print(pass_fail_status)
# Expected output: "Pass" "Fail" "Pass" "Pass" "Fail" "Pass"
```

You can also nest `ifelse()` statements for more complex, multi-level conditions, though for very many conditions, `cut()` or `case_when()` (from `dplyr`) might be more readable. For example, to assign grades A, B, C, D, F:

```R
grades <- ifelse(student_scores >= 90, "A",
                 ifelse(student_scores >= 80, "B",
                        ifelse(student_scores >= 70, "C",
                               ifelse(student_scores >= 60, "D", "F"))))
print(grades)
# Expected output: "B" "F" "C" "A" "F" "D"
```

A common mistake when using `if` or `else if` is to forget that the condition must evaluate to a single `TRUE` or `FALSE`. If you provide a vector of logical values, R will only use the first element and issue a warning. For instance, `if (c(TRUE, FALSE))` will only consider `TRUE` and warn you about the length. Always ensure your conditions within `if` and `else if` blocks boil down to a single logical value. If you need to check if *any* element in a vector meets a condition, use `any()`, and if *all* elements meet it, use `all()`. These functions return a single `TRUE` or `FALSE` value, making them suitable for `if` statements. Mastering conditional logic is a cornerstone of writing flexible and intelligent R programs, allowing your code to adapt to various data scenarios and user inputs.

#### Key concepts
*   **`if` statement:** Executes a block of code only if a specified logical condition evaluates to `TRUE`.
*   **`else` statement:** Provides an alternative block of code to execute if the preceding `if` condition evaluates to `FALSE`.
*   **`else if` statement:** Allows for chaining multiple conditions, checking each in sequence until one evaluates to `TRUE`.
*   **Vectorized logical operators (`&`, `|`):** Perform element-wise logical operations on vectors, returning a vector of `TRUE`/`FALSE` values.
*   **Non-vectorized logical operators (`&&`, `||`):** Evaluate only the first element of each operand, typically used within `if` conditions where a single `TRUE`/`FALSE` result is expected.
*   **`ifelse()` function:** A vectorized function that applies a conditional test to each element of a vector and returns a new vector with values based on whether the test is `TRUE` or `FALSE` for each element.
*   **`any()` function:** Returns `TRUE` if at least one element in a logical vector is `TRUE`, otherwise `FALSE`.
*   **`all()` function:** Returns `TRUE` if all elements in a logical vector are `TRUE`, otherwise `FALSE`.

#### Hands-on activity
**Scenario:** You are working with a dataset of product sales and need to flag products based on their sales performance and stock levels.

**Task:**
1.  Create a vector `product_sales` with values `c(1200, 450, 2100, 800, 150)`.
2.  Create a vector `product_stock` with values `c(50, 10, 120, 30, 5)`.
3.  Write an `if-else if-else` statement to determine a single product's recommendation based on its sales. If sales are `>= 1000`, recommend "Reorder High Priority". If sales are `>= 500` but `< 1000`, recommend "Reorder Medium Priority". Otherwise, recommend "Monitor Sales". Test this with `product_sales[1]` (1200) and `product_sales[2]` (450).
4.  Using `ifelse()`, create a new vector `stock_status` that labels each product as "Low Stock" if `product_stock < 20` and "Sufficient Stock" otherwise.
5.  Using nested `ifelse()` or a combination of `ifelse()` and logical operators, create a new vector `overall_recommendation` that combines sales and stock. If a product has "Reorder High Priority" sales AND "Low Stock", its recommendation should be "URGENT REORDER". If "Reorder High Priority" sales AND "Sufficient Stock", it's "High Sales, Good Stock". If "Reorder Medium Priority" sales AND "Low Stock", it's "Medium Sales, Low Stock". Otherwise, it's "Normal".

```R
# Starter code:
product_sales <- c(1200, 450, 2100, 800, 150)
product_stock <- c(50, 10, 120, 30, 5)

# 1. Individual product recommendation using if-else if-else
# Test with product_sales[1]
current_sales <- product_sales[1]
# Your if-else if-else code here for current_sales

# Test with product_sales[2]
current_sales <- product_sales[2]
# Your if-else if-else code here for current_sales

# 2. Stock status for all products using ifelse()
# Your ifelse() code here for stock_status

# 3. Overall recommendation using nested ifelse() or combined logic
# Your nested ifelse() or combined logic here for overall_recommendation

# Print results to check
# print(stock_status)
# print(overall_recommendation)
```

#### Assessment idea
1.  **Question:** You have a vector `temperatures <- c(25, 18, 32, 10, 22)`. Write R code using `ifelse()` to create a new vector `weather_category`. If a temperature is `>= 30`, it should be "Hot". If it's `>= 20` but `< 30`, it should be "Warm". Otherwise, it should be "Cool".
    **Correct Answer:**
    ```R
    temperatures <- c(25, 18, 32, 10, 22)
    weather_category <- ifelse(temperatures >= 30, "Hot",
                               ifelse(temperatures >= 20, "Warm", "Cool"))
    print(weather_category)
    # Expected output: "Warm" "Cool" "Hot" "Cool" "Warm"
    ```
    **Explanation:** This solution correctly uses nested `ifelse()` statements. The outermost `ifelse` checks for "Hot" temperatures. If that's false, the inner `ifelse` then checks for "Warm" temperatures. If both are false, it defaults to "Cool". This demonstrates how `ifelse()` can handle multi-level categorization efficiently in a vectorized manner.

2.  **Question:** Consider the following R code snippet. What will be the output, and why?
    ```R
    x <- c(TRUE, FALSE, TRUE)
    y <- c(TRUE, TRUE, FALSE)

    if (x && y) {
      print("Both are TRUE (first element check)")
    } else {
      print("At least one is FALSE (first element check)")
    }

    if (any(x & y)) {
      print("At least one element-wise TRUE")
    } else {
      print("No element-wise TRUE")
    }
    ```
    **Correct Answer:**
    ```
    [1] "Both are TRUE (first element check)"
    [1] "At least one element-wise TRUE"
    ```
    **Explanation:**
    *   The first `if` statement uses `&&` (non-vectorized AND). It evaluates only the *first* element of `x` (which is `TRUE`) and the *first* element of `y` (which is `TRUE`). Since `TRUE && TRUE` is `TRUE`, the first `print` statement executes. R will also issue a warning about the longer object length not being a multiple of shorter object length, but the condition itself will be evaluated based on the first elements.
    *   The second `if` statement uses `any(x & y)`. First, `x & y` performs an element-wise AND: `c(TRUE & TRUE, FALSE & TRUE, TRUE & FALSE)` which results in `c(TRUE, FALSE, FALSE)`. Then, `any()` checks if *any* element in `c(TRUE, FALSE, FALSE)` is `TRUE`. Since the first element is `TRUE`, `any()` returns `TRUE`, and the second `print` statement executes. This demonstrates the critical difference between vectorized and non-vectorized logical operators.

#### AI generation note
Create a 10-12 minute interactive video lesson. Start with an animation of a flowchart demonstrating `if-else if-else` logic for a simple decision (e.g., "Is it raining?"). Then transition to live coding examples for customer loyalty status using `if-else if-else`. Introduce `&` vs `&&` and `|` vs `||` with a side-by-side comparison, highlighting how `&&`/`||` only check the first element. Provide a clear visual warning when `&&`/`||` are used with vectors in an `if` statement. Finally, demonstrate `ifelse()` with a data frame column (e.g., `df$category <- ifelse(df$value > 100, "High", "Low")`), showing how it efficiently creates new columns. Include an interactive code snippet where learners can modify an `ifelse()` condition and see the output immediately. Emphasize common mistakes like using `if` with a vector and not getting the expected result.

### Chapter 4.2 — Iteration with `for` and `while` Loops

#### Learning objectives
*   Construct and utilize `for` loops to iterate over sequences, vectors, and lists in R.
*   Implement `while` loops to repeat code execution based on a specified logical condition.
*   Understand and apply `break` and `next` statements to control loop execution flow.
*   Recognize scenarios where loops are appropriate and when vectorized operations or the `apply` family might be more efficient.
*   Identify and prevent common loop-related errors, such as infinite loops or off-by-one errors.

#### Detailed lesson content
Iteration is a cornerstone of programming, allowing us to perform repetitive tasks without writing the same code multiple times. In R, the primary tools for iteration are `for` loops and `while` loops. Understanding when and how to use each, along with their limitations and alternatives, is crucial for writing efficient and readable R code.

The `for` loop is ideal when you know in advance how many times you need to iterate, or when you want to process each item in a collection (like a vector, list, or the columns of a data frame). The structure of a `for` loop in R is quite intuitive: `for (item in collection) { ... code to execute ... }`. The `item` variable takes on the value of each element in the `collection` sequentially, and the code inside the curly braces is executed for each `item`. For example, if you wanted to calculate the square of each number in a vector, a `for` loop would be a straightforward approach.

```R
numbers <- c(1, 2, 3, 4, 5)
squared_numbers <- numeric(length(numbers)) # Pre-allocate memory for efficiency

for (i in seq_along(numbers)) {
  squared_numbers[i] <- numbers[i]^2
}
print(squared_numbers)
# Expected output: 1 4 9 16 25
```
Notice the use of `seq_along(numbers)`. This is a robust way to iterate over indices, especially if `numbers` could be empty. A common mistake is to iterate directly over the *values* without needing their index, or conversely, to forget to pre-allocate space for results when building a new vector or list inside a loop. Pre-allocating memory, as shown with `numeric(length(numbers))`, is a performance best practice in R, as repeatedly growing a vector inside a loop can be very inefficient.

`while` loops, on the other hand, are used when the number of iterations is not known beforehand, but rather depends on a condition being met. The loop continues to execute as long as its specified condition remains `TRUE`. The structure is `while (condition) { ... code to execute ... }`. It's absolutely critical to ensure that something within the loop's body eventually changes the condition to `FALSE`, otherwise, you'll end up with an infamous "infinite loop" that will run forever, consuming system resources until you manually stop it. A classic example of a `while` loop is simulating a process until a certain threshold is reached or a specific event occurs.

```R
# Simulating a counter reaching a target value
count <- 0
target <- 5

while (count < target) {
  print(paste("Current count:", count))
  count <- count + 1 # Crucial: update the condition variable
  Sys.sleep(0.5) # Pause for a moment to see the output
}
print("Target reached!")
```
In this `while` loop, `count <- count + 1` is the line that ensures the condition `count < target` eventually becomes `FALSE`, preventing an infinite loop. Always double-check your `while` loop conditions and ensure there's an exit strategy.

Sometimes, within a loop, you might need to skip the current iteration or exit the loop entirely based on an internal condition. This is where `next` and `break` statements come in handy. The `next` statement immediately jumps to the next iteration of the loop, skipping any remaining code in the current iteration. The `break` statement, however, completely exits the loop, and program execution continues with the code immediately following the loop.

```R
# Example using next and break
for (i in 1:10) {
  if (i %% 2 == 0) { # If i is even, skip to the next iteration
    next
  }
  print(paste(i, "is odd"))
  if (i == 7) { # If i is 7, stop the loop
    print("Reached 7, breaking loop.")
    break
  }
}
# Expected output:
# [1] "1 is odd"
# [1] "3 is odd"
# [1] "5 is odd"
# [1] "7 is odd"
# [1] "Reached 7, breaking loop."
```

While loops are fundamental, R is a language highly optimized for vectorized operations. This means that many common tasks, like performing an operation on every element of a vector or filtering a data frame, can be done much more efficiently without explicit loops. Functions like `sum()`, `mean()`, `sqrt()`, and logical indexing (`my_vector[my_vector > 5]`) are inherently vectorized and often significantly faster than writing a `for` loop to achieve the same result. The `apply` family of functions (`lapply`, `sapply`, `vapply`, `apply`, `tapply`, `mapply`) also provides powerful, often more readable, and sometimes more efficient alternatives to loops for specific tasks, especially when working with lists, matrices, or data frames. For instance, `lapply(my_list, function(x) x^2)` will apply the squaring function to each element of `my_list` much more concisely than a `for` loop.

However, loops are not obsolete. They are essential for tasks that involve sequential dependencies (where the result of one iteration affects the next), complex simulations, or when you're building custom algorithms that don't fit neatly into vectorized operations or the `apply` family. The key is to choose the right tool for the job: leverage R's vectorized capabilities and `apply` functions whenever possible for performance and conciseness, but don't shy away from loops when they provide the clearest and most direct solution to a problem. Always prioritize clarity and correctness, and then optimize for performance if necessary.

#### Key concepts
*   **`for` loop:** Iterates over a sequence of elements (e.g., numbers, vector elements, list items) for a predetermined number of times.
*   **`while` loop:** Repeats a block of code as long as a specified logical condition remains `TRUE`.
*   **`break` statement:** Immediately terminates the current loop, and execution continues with the statement immediately following the loop.
*   **`next` statement:** Skips the rest of the current iteration of a loop and proceeds to the next iteration.
*   **Vectorization:** R's ability to perform operations on entire vectors or matrices at once, often more efficiently than explicit loops.
*   **`apply` family:** A set of functions (`lapply`, `sapply`, `vapply`, `apply`, `tapply`, `mapply`) designed for applying functions over margins of arrays, lists, or data frames, often serving as more concise and efficient alternatives to loops.
*   **Infinite loop:** A `while` loop that never terminates because its condition never becomes `FALSE`.

#### Hands-on activity
**Scenario:** You are a data analyst tracking daily stock prices and need to calculate cumulative returns, identify days with significant price drops, and simulate a simple investment strategy.

**Task:**
1.  Create a vector `daily_returns` representing daily percentage changes: `c(0.01, -0.005, 0.02, -0.03, 0.015, -0.01, 0.008, -0.025)`.
2.  Use a `for` loop to calculate the *cumulative product* of `(1 + daily_returns)`, starting with an initial investment of 100. Store these cumulative values in a new vector `cumulative_value`. (Hint: `cumulative_value[i] = cumulative_value[i-1] * (1 + daily_returns[i])`).
3.  Use a `while` loop to find the *first day* where the `cumulative_value` drops below 98. Print the day number and the value. If it never drops below 98, print a message indicating that.
4.  Use another `for` loop to iterate through `daily_returns`. If a return is less than `-0.02` (a significant drop), print a warning message including the day number and the return value. If a return is positive (`> 0`), print a message indicating a gain. Use `next` to skip printing anything for zero or slightly negative returns that are not significant drops.

```R
# Starter code:
daily_returns <- c(0.01, -0.005, 0.02, -0.03, 0.015, -0.01, 0.008, -0.025)
initial_investment <- 100
cumulative_value <- numeric(length(daily_returns))
cumulative_value[1] <- initial_investment * (1 + daily_returns[1])

# 1. Calculate cumulative value using a for loop
# Your for loop code here

# 2. Find first drop below 98 using a while loop
# Your while loop code here

# 3. Analyze daily returns with for loop, next, and conditional printing
# Your for loop code here

# Print results to check
# print(cumulative_value)
```

#### Assessment idea
1.  **Question:** You have a list of numerical vectors: `data_list <- list(c(1, 2, 3), c(4, 5), c(6, 7, 8, 9))`. Write R code using a `for` loop to calculate the sum of each vector in `data_list` and store the results in a new vector called `sums_of_vectors`.
    **Correct Answer:**
    ```R
    data_list <- list(c(1, 2, 3), c(4, 5), c(6, 7, 8, 9))
    sums_of_vectors <- numeric(length(data_list)) # Pre-allocate

    for (i in seq_along(data_list)) {
      sums_of_vectors[i] <- sum(data_list[[i]])
    }
    print(sums_of_vectors)
    # Expected output: 6 9 30
    ```
    **Explanation:** The `for` loop iterates through the indices of `data_list` using `seq_along`. For each index `i`, it accesses the corresponding vector using `data_list[[i]]` (double brackets are crucial for extracting elements from a list) and calculates its sum using `sum()`. The result is then stored in the pre-allocated `sums_of_vectors` at the correct index.

2.  **Question:** What is wrong with the following `while` loop, and how would you fix it to print numbers from 1 to 3?
    ```R
    i <- 1
    while (i <= 3) {
      print(i)
      # Missing line here
    }
    ```
    **Correct Answer:** The loop as written is an infinite loop because the variable `i` is never incremented, so the condition `i <= 3` will always remain `TRUE`.
    To fix it and print numbers from 1 to 3, you need to add `i <- i + 1` inside the loop:
    ```R
    i <- 1
    while (i <= 3) {
      print(i)
      i <- i + 1 # This line is crucial for incrementing i
    }
    # Expected output:
    # [1] 1
    # [1] 2
    # [1] 3
    ```
    **Explanation:** The `i <- i + 1` statement ensures that `i` increases with each iteration. Eventually, `i` will become 4, making the condition `i <= 3` false, and the loop will terminate gracefully after printing 3. This highlights the importance of ensuring the loop's condition eventually becomes false to avoid infinite loops.

#### AI generation note
Design a 12-15 minute interactive lab walkthrough. Begin with a conceptual animation differentiating `for` and `while` loops (e.g., `for` is like counting known steps, `while` is like running until a finish line). Then, switch to a live coding session in RStudio. First, demonstrate a `for` loop iterating over a vector of product names, printing each name. Next, show a `for` loop calculating cumulative sums of a financial series, emphasizing pre-allocation. Introduce `while` loops with a simulation of drawing cards until a specific card is drawn, explicitly showing the condition update. Integrate `break` and `next` with a clear visual of the loop's path changing. Include an interactive coding exercise where learners complete a `for` loop to process data or fix an infinite `while` loop. Discuss when to use loops versus vectorized operations, perhaps with a simple benchmark comparison.

### Chapter 4.3 — Mastering Functions in R

#### Learning objectives
*   Define and call custom functions in R, specifying arguments and return values.
*   Understand and utilize function arguments, including positional matching, named arguments, and default values.
*   Explain the concept of scope in R functions (local vs. global variables) and avoid common scope-related issues.
*   Write modular and reusable functions to improve code organization and efficiency.
*   Apply anonymous functions (lambda functions) in conjunction with higher-order functions like `lapply` or `sapply`.

#### Detailed lesson content
Functions are the building blocks of well-structured, maintainable, and reusable code. In R, a function is an object that contains a set of instructions designed to perform a specific task. By encapsulating code within functions, you can avoid repetition, make your programs easier to read and debug, and promote modularity. Think of a function as a mini-program that takes inputs, processes them, and returns an output.

Defining a function in R involves using the `function()` keyword, followed by parentheses containing the function's arguments, and then curly braces `{}` enclosing the body of the function. The last expression evaluated in the function body is automatically returned as the function's result. However, for clarity and explicit control, it's often good practice to use the `return()` function.

```R
# A simple function to calculate the area of a rectangle
calculate_rectangle_area <- function(length, width) {
  area <- length * width
  return(area) # Explicitly return the result
}

# Calling the function
area1 <- calculate_rectangle_area(length = 10, width = 5)
print(area1) # Expected output: 50

# Positional matching also works
area2 <- calculate_rectangle_area(20, 8)
print(area2) # Expected output: 160
```
Arguments make functions flexible. You can pass values to a function using positional matching (the order of arguments matters) or by named arguments (explicitly specifying `argument_name = value`). Using named arguments generally improves readability, especially for functions with many parameters. You can also provide default values for arguments. If a user doesn't specify a value for an argument with a default, the default value is used. This is incredibly useful for making functions more user-friendly and robust, as it allows for common use cases without requiring all parameters to be explicitly set.

```R
# Function with a default argument for units
convert_temperature <- function(temp_celsius, output_unit = "fahrenheit") {
  if (output_unit == "fahrenheit") {
    temp_fahrenheit <- (temp_celsius * 9/5) + 32
    return(temp_fahrenheit)
  } else if (output_unit == "kelvin") {
    temp_kelvin <- temp_celsius + 273.15
    return(temp_kelvin)
  } else {
    stop("Invalid output_unit. Use 'fahrenheit' or 'kelvin'.") # Error handling
  }
}

# Using the default unit
temp_f <- convert_temperature(25)
print(paste("25 Celsius in Fahrenheit (default):", temp_f)) # Expected: 77

# Specifying a different unit
temp_k <- convert_temperature(25, output_unit = "kelvin")
print(paste("25 Celsius in Kelvin:", temp_k)) # Expected: 298.15
```

A critical concept when working with functions is **scope**. In R, variables created inside a function are local to that function. They exist only within the function's execution environment and are destroyed once the function finishes. This means a variable named `x` inside a function is completely separate from a variable named `x` in the global environment (or another function). This isolation is a good thing, as it prevents unintended side effects and makes functions self-contained. However, functions *can* access variables from the parent environment (the environment where the function was defined, not necessarily where it was called), a concept known as lexical scoping. While powerful, relying too heavily on global variables within functions can make code harder to understand and debug. It's generally best practice to pass all necessary data into a function via its arguments.

```R
global_var <- "I am global"

my_function <- function() {
  local_var <- "I am local"
  print(global_var) # Can access global_var due to lexical scoping
  print(local_var)
  # global_var <- "Trying to change global" # This creates a new local variable, not changes the global one
}

my_function()
# print(local_var) # Error: object 'local_var' not found
print(global_var) # Still "I am global"
```
The example above illustrates that assigning a value to `global_var` *inside* the function would create a *new local variable* also named `global_var`, shadowing the global one, rather than modifying the global variable itself. To explicitly modify a global variable from within a function (which is generally discouraged but occasionally necessary), you would use the superassignment operator `<<-`.

Finally, R embraces functional programming paradigms, and anonymous functions (also known as lambda functions) are a key part of this. These are functions without a name, often defined and used on-the-fly, particularly as arguments to other functions (higher-order functions). The `apply` family of functions (`lapply`, `sapply`, `vapply`, `mapply`) are perfect examples where anonymous functions shine. They allow you to apply a custom operation to each element of a list or vector without needing to define a separate, named function.

```R
data_list <- list(c(1, 2, 3), c(4, 5), c(6, 7, 8, 9))

# Using a named function
square_elements <- function(x) {
  return(x^2)
}
result_named <- lapply(data_list, square_elements)
print(result_named)

# Using an anonymous function - much more concise for simple operations
result_anon <- lapply(data_list, function(x) x^2)
print(result_anon)
```
Both approaches yield the same result, but the anonymous function is more compact when the function's logic is simple and doesn't need to be reused elsewhere. Mastering functions, including their arguments, scope, and the use of anonymous functions, will significantly elevate your R programming skills, allowing you to write cleaner, more efficient, and more powerful analytical tools.

#### Key concepts
*   **Function:** A block of organized, reusable code that performs a specific task.
*   **Arguments (Parameters):** Inputs that a function accepts, allowing it to operate on different data without modification.
*   **Positional Matching:** Assigning argument values based on their order in the function call.
*   **Named Arguments:** Assigning argument values by explicitly specifying the argument name (e.g., `arg = value`), which improves readability and is robust to argument reordering.
*   **Default Values:** Pre-defined values for function arguments that are used if the user does not provide them.
*   **Return Value:** The output produced by a function, typically specified using the `return()` function or implicitly being the last evaluated expression.
*   **Scope (Lexical Scoping):** The rules that determine where a variable can be accessed or modified. In R, functions look for variables first in their local environment, then in the environment where they were defined, and so on up to the global environment.
*   **Local Variable:** A variable defined inside a function, accessible only within that function.
*   **Global Variable:** A variable defined outside of any function, accessible from anywhere in the script or console.
*   **Anonymous Function (Lambda Function):** A function without a name, often defined inline and passed as an argument to another function.
*   **Higher-Order Function:** A function that takes one or more functions as arguments or returns a function as its result (e.g., `lapply`, `sapply`).

#### Hands-on activity
**Scenario:** You are developing a small R package for data cleaning and transformation. You need to create a function that standardizes numerical columns and another that categorizes text data.

**Task:**
1.  **Standardize Numeric Data:** Write a function called `standardize_numeric` that takes a numeric vector `x` as its primary argument. It should calculate the mean and standard deviation of `x` and return a new vector where each element is `(x - mean(x)) / sd(x)`. Add an optional argument `na.rm` with a default value of `TRUE` to control whether `NA` values should be removed when calculating mean and standard deviation.
2.  **Categorize Text Data:** Write a function called `categorize_text` that takes a character vector `text_vector` and a named list `categories_map` as arguments. `categories_map` should map keywords to categories (e.g., `list(Positive = c("good", "great"), Negative = c("bad", "poor"))`). The function should return a character vector of the same length as `text_vector`, where each element is assigned a category based on whether it contains any of the keywords from `categories_map`. If no keyword is found, assign "Other". Make the keyword matching case-insensitive.
3.  **Apply with Anonymous Function:** Use your `standardize_numeric` function on the `iris` dataset's `Sepal.Length` column. Then, create a sample character vector `feedback <- c("This product is great!", "Terrible service.", "It's okay, not bad.", "Very good experience.")` and apply your `categorize_text` function to it.

```R
# Starter code:
# 1. Standardize Numeric Data function
standardize_numeric <- function(x, na.rm = TRUE) {
  # Your code here
  # Calculate mean and sd, handle na.rm
  # Return standardized vector
}

# 2. Categorize Text Data function
categorize_text <- function(text_vector, categories_map) {
  # Your code here
  # Initialize result vector
  # Loop through text_vector and categories_map
  # Use grepl for case-insensitive matching
  # Return categorized vector
}

# 3. Apply functions
# Test standardize_numeric on iris$Sepal.Length
# standardized_sepal_length <- standardize_numeric(iris$Sepal.Length)
# print(head(standardized_sepal_length))

# Test categorize_text
# feedback <- c("This product is great!", "Terrible service.", "It's okay, not bad.", "Very good experience.")
# sentiment_categories <- categorize_text(feedback,
#                                       list(Positive = c("good", "great", "excellent"),
#                                            Negative = c("bad", "poor", "terrible")))
# print(sentiment_categories)
```

#### Assessment idea
1.  **Question:** You need a function `calculate_bmi` that takes `weight_kg` and `height_m` as arguments. It should calculate BMI (`weight_kg / (height_m^2)`) and return a character string classifying the BMI: "Underweight" (< 18.5), "Normal" (18.5-24.9), "Overweight" (25-29.9), or "Obese" (>= 30).
    **Correct Answer:**
    ```R
    calculate_bmi <- function(weight_kg, height_m) {
      if (height_m <= 0) {
        stop("Height must be a positive value.")
      }
      bmi <- weight_kg / (height_m^2)

      if (bmi < 18.5) {
        return("Underweight")
      } else if (bmi >= 18.5 && bmi < 25) {
        return("Normal")
      } else if (bmi >= 25 && bmi < 30) {
        return("Overweight")
      } else {
        return("Obese")
      }
    }

    # Test cases
    print(calculate_bmi(70, 1.75)) # Expected: "Normal" (BMI ~22.86)
    print(calculate_bmi(90, 1.70)) # Expected: "Obese" (BMI ~31.14)
    ```
    **Explanation:** The function correctly calculates BMI and uses an `if-else if-else` structure to classify it into the specified categories. It also includes basic input validation to prevent division by zero or negative height.

2.  **Question:** Given the following R code, what will be the output of `my_func()` and `print(z)` after the function call, and why?
    ```R
    z <- 10

    my_func <- function(x) {
      z <- x + 5 # This 'z' is local to my_func
      print(paste("Inside function, z is:", z))
      return(z * 2)
    }

    result <- my_func(3)
    print(paste("Function returned:", result))
    print(paste("Outside function, z is:", z))
    ```
    **Correct Answer:**
    ```
    [1] "Inside function, z is: 8"
    [1] "Function returned: 16"
    [1] "Outside function, z is: 10"
    ```
    **Explanation:**
    *   Inside `my_func`, `z <- x + 5` creates a *new local variable* named `z` within the function's environment. This local `z` is assigned `3 + 5 = 8`. The `print` statement inside the function therefore outputs "Inside function, z is: 8".
    *   The function then returns `8 * 2 = 16`, which is stored in the `result` variable.
    *   Crucially, the global variable `z` (initialized to 10) is *not* affected by the local `z` inside `my_func`. When `print(z)` is called outside the function, it refers to the global `z`, which retains its original value of 10. This demonstrates R's lexical scoping rules, where assignments within a function typically create local variables, protecting the global environment from unintended modifications.

#### AI generation note
Produce a 10-12 minute interactive code demo. Begin with an analogy for functions (e.g., a recipe for baking a cake). Live-code the `calculate_rectangle_area` function, showing both positional and named argument calls. Then, demonstrate `convert_temperature` to highlight default arguments and basic error handling with `stop()`. Visually explain lexical scoping using a simple diagram showing nested environments and how `global_var` and `local_var` interact (or don't). Showcase how `lapply` works with both a named function and then an anonymous function, emphasizing conciseness. Include an interactive coding challenge where learners define a function with default arguments and test it.

### Chapter 4.4 — Debugging and Error Handling

#### Learning objectives
*   Identify common types of errors in R (syntax, runtime, logical) and understand their typical causes.
*   Utilize basic debugging tools such as `print()` statements and `traceback()` to locate and understand errors.
*   Employ interactive debugging with `browser()` and `debug()` to step through code execution and inspect variable states.
*   Implement robust error handling using `tryCatch()` to gracefully manage unexpected issues in R scripts.
*   Use `stop()` and `warning()` to provide informative messages and control program flow in case of invalid inputs or conditions.

#### Detailed lesson content
Even the most experienced programmers write code with errors. Debugging is the essential skill of finding and fixing those errors, while error handling is about anticipating potential problems and designing your code to respond gracefully. In R, errors can broadly be categorized into three types: syntax errors (typos, missing parentheses), runtime errors (e.g., trying to divide by zero, accessing an out-of-bounds index), and logical errors (the code runs but produces incorrect results because of flawed logic).

The simplest and often most effective debugging tool is the humble `print()` statement. By strategically placing `print()` calls throughout your code, you can inspect the values of variables at different stages of execution, helping you pinpoint where things go wrong. When an error occurs, R typically stops execution and prints an error message. The `traceback()` function is incredibly useful here; it shows you the sequence of function calls that led to the error, helping you navigate complex code paths to the source of the problem.

```R
my_data <- c(1, 2, NA, 4)

process_data <- function(data_vector) {
  print(paste("Input data_vector:", paste(data_vector, collapse = ", ")))
  # Simulate an error if NA values are present and not handled
  if (any(is.na(data_vector))) {
    stop("NA values found, cannot proceed without handling.")
  }
  mean_val <- mean(data_vector)
  print(paste("Calculated mean:", mean_val))
  return(mean_val * 2)
}

# This call will cause an error due to the stop()
# result <- process_data(my_data)
# traceback() # Run this in console after an error to see the call stack
```

For more interactive debugging, R provides powerful tools like `browser()` and `debug()`. When `browser()` is inserted into your code, R's execution will pause at that point, entering an interactive debugging environment. Here, you can inspect variables, execute R commands, and step through your code line by line (using `n` for next line, `s` for step into function, `c` for continue, `Q` for quit). This allows you to observe the state of your program in real-time. The `debug()` function works similarly but is applied to an entire function. When `debug(my_function)` is called, the next time `my_function` is executed, it will automatically enter the browser mode at the beginning of the function. This is particularly useful for debugging functions you didn't write or functions called repeatedly.

```R
# Example of using browser()
calculate_sum_and_product <- function(a, b) {
  intermediate_sum <- a + b
  browser() # Execution pauses here
  intermediate_product <- a * b
  return(list(sum = intermediate_sum, product = intermediate_product))
}

# Call the function, it will pause at browser()
# result <- calculate_sum_and_product(10, 5)
# In the browser console:
#   n (next line)
#   print(intermediate_sum)
#   c (continue)

# Example of using debug()
# debug(calculate_sum_and_product)
# result <- calculate_sum_and_product(3, 7) # This will now enter browser mode automatically
# undebug(calculate_sum_and_product) # Remember to undebug when done
```

Beyond finding and fixing errors, robust code anticipates them. Error handling mechanisms allow your program to react predictably to unexpected situations, preventing crashes and providing informative feedback. The `tryCatch()` function is R's primary tool for this. It allows you to wrap a block of code and define specific actions to take if an error or warning occurs within that block. This is invaluable for scripts that interact with external resources (like files or databases) or process user input, where unexpected conditions are common.

```R
# Example of tryCatch()
safe_division <- function(numerator, denominator) {
  result <- tryCatch(
    {
      if (denominator == 0) {
        stop("Cannot divide by zero!")
      }
      numerator / denominator
    },
    error = function(e) {
      message("An error occurred during division:")
      message(e$message)
      return(NA) # Return NA on error
    },
    warning = function(w) {
      message("A warning occurred:")
      message(w$message)
      return(numerator / denominator) # Still return result, but log warning
    },
    finally = {
      message("Division attempt finished.") # Always runs
    }
  )
  return(result)
}

print(safe_division(10, 2))
print(safe_division(10, 0)) # Triggers error handler
print(safe_division("a", 2)) # Triggers R's internal error handler for non-numeric input
```
In `tryCatch()`, the `error` handler catches errors, the `warning` handler catches warnings, and the `finally` block always executes, regardless of whether an error or warning occurred. This allows for cleanup operations or logging.

Finally, you can actively control program flow and provide feedback using `stop()` and `warning()`. `stop()` immediately halts execution and throws an error message, typically used for fatal conditions (e.g., invalid input that prevents meaningful computation). `warning()` allows the program to continue running but prints a warning message, indicating a potential issue that might not be critical enough to stop execution (e.g., `NA`s introduced by coercion). Using these functions judiciously improves the clarity and robustness of your R scripts, making them more resilient and user-friendly. Common mistakes include not validating inputs, leading to obscure errors later, or not using `tryCatch()` when dealing with operations that might fail (like file I/O). Always think defensively when writing code!

#### Key concepts
*   **Debugging:** The process of identifying, analyzing, and removing errors from computer programs.
*   **Error Handling:** The anticipation, detection, and resolution of programming errors or unexpected events.
*   **Syntax Error:** An error caused by incorrect grammar or structure of the code (e.g., missing parenthesis).
*   **Runtime Error:** An error that occurs during the execution of a program (e.g., division by zero, invalid argument type).
*   **Logical Error:** An error where the program runs without crashing but produces incorrect or unexpected results.
*   **`print()`:** A function used to display variable values or messages during program execution for debugging.
*   **`traceback()`:** A function that displays the call stack, showing the sequence of function calls that led to the most recent error.
*   **`browser()`:** A function that pauses program execution at a specific point and enters an interactive debugging environment.
*   **`debug()`:** A function that, when applied to another function, causes execution to enter the `browser()` environment every time that function is called.
*   **`undebug()`:** A function to disable debugging for a function.
*   **`tryCatch()`:** An R function for handling errors and warnings gracefully, allowing code to continue execution or take specific actions when issues arise.
*   **`stop()`:** A function that immediately halts program execution and issues an error message.
*   **`warning()`:** A function that issues a warning message but allows program execution to continue.

#### Hands-on activity
**Scenario:** You are developing a data processing script that reads a CSV file, performs some calculations, and saves the results. You need to make this script robust to common issues like missing files, non-numeric data, and potential division by zero.

**Task:**
1.  **Simulate a Data File:** Create a small CSV file named `data.csv` in your working directory with the following content:
    ```csv
    id,value1,value2
    1,10,2
    2,15,3
    3,NA,5
    4,20,0
    5,25,5
    ```
2.  **Create a Processing Function:** Write a function `process_csv_data(file_path)` that attempts to:
    *   Read the CSV file using `read.csv()`.
    *   Calculate a new column `ratio = value1 / value2`.
    *   Calculate the mean of `ratio`, ignoring `NA` values.
    *   Return the mean ratio.
3.  **Implement Error Handling with `tryCatch()`:** Wrap the entire logic of your `process_csv_data` function within `tryCatch()`.
    *   If `read.csv()` fails (e.g., file not found), catch the error and print "Error: File not found or unreadable." and return `NULL`.
    *   If `value1` or `value2` columns are not numeric, or if division by zero occurs, catch the error (or warning, if R handles division by zero as a warning) and print "Error: Data processing failed due to invalid data or division by zero." and return `NA`.
    *   Include a `finally` block that always prints "Data processing attempt completed."
4.  **Test the Function:**
    *   Call `process_csv_data("data.csv")` (should succeed).
    *   Call `process_csv_data("non_existent.csv")` (should trigger file not found error).
    *   Modify `data.csv` to include a non-numeric value in `value1` (e.g., `1,abc,2`) and call `process_csv_data("data.csv")` again (should trigger data processing error).
    *   Use `browser()` inside the `ratio` calculation line within your function to inspect `value1` and `value2` just before division.

```R
# Starter code:
# 1. Create data.csv (run this once)
# writeLines(c("id,value1,value2",
#              "1,10,2",
#              "2,15,3",
#              "3,NA,5",
#              "4,20,0",
#              "5,25,5"), "data.csv")

# 2. Processing function with tryCatch
process_csv_data <- function(file_path) {
  result <- tryCatch(
    {
      df <- read.csv(file_path)
      # browser() # Uncomment to debug here
      if (!is.numeric(df$value1) || !is.numeric(df$value2)) {
        stop("Value columns must be numeric.")
      }

      df$ratio <- df$value1 / df$value2

      # Handle potential Inf values from division by zero, or NAs
      mean_ratio <- mean(df$ratio, na.rm = TRUE)
      return(mean_ratio)
    },
    error = function(e) {
      if (grepl("cannot open file", e$message)) {
        message(paste("Error: File not found or unreadable at", file_path))
        return(NULL)
      } else {
        message(paste("Error: Data processing failed due to invalid data or division by zero. Details:", e$message))
        return(NA)
      }
    },
    warning = function(w) {
      message(paste("Warning during processing:", w$message))
      # For warnings, we might still return the result if it's usable
      # Re-attempt the main logic to get the value, but let the warning pass
      df <- read.csv(file_path)
      df$ratio <- df$value1 / df$value2
      mean_ratio <- mean(df$ratio, na.rm = TRUE)
      return(mean_ratio)
    },
    finally = {
      message("Data processing attempt completed.")
    }
  )
  return(result)
}

# 3. Test the function
# print(process_csv_data("data.csv"))
# print(process_csv_data("non_existent.csv"))

# To test non-numeric data, manually edit data.csv, e.g., change "1,10,2" to "1,abc,2"
# Then run:
# print(process_csv_data("data.csv"))
```

#### Assessment idea
1.  **Question:** You have a function `divide_numbers <- function(a, b) { a / b }`. How would you use `tryCatch()` to ensure that if `b` is zero, the function prints "Division by zero is not allowed." and returns `Inf` (R's default for division by zero) instead of stopping the program, and if `a` or `b` are not numeric, it prints "Inputs must be numeric." and returns `NA`?
    **Correct Answer:**
    ```R
    divide_numbers_robust <- function(a, b) {
      result <- tryCatch(
        {
          if (!is.numeric(a) || !is.numeric(b)) {
            stop("Inputs must be numeric.")
          }
          a / b
        },
        error = function(e) {
          if (grepl("non-numeric argument", e$message)) {
            message("Inputs must be numeric.")
            return(NA)
          } else if (grepl("division by zero", e$message) || b == 0) { # Catch R's warning or explicit stop
            message("Division by zero is not allowed.")
            return(Inf) # R returns Inf for x/0, but we explicitly handle the message
          } else {
            message(paste("An unexpected error occurred:", e$message))
            return(NA)
          }
        },
        warning = function(w) {
          if (grepl("NaNs produced", w$message) || grepl("Inf produced", w$message)) {
            message("Division by zero is not allowed.")
            return(Inf) # If R produces Inf/NaN from division, we catch the warning and return Inf
          } else {
            message(paste("A warning occurred:", w$message))
            return(a / b) # For other warnings, return the result
          }
        }
      )
      return(result)
    }

    print(divide_numbers_robust(10, 2))  # Expected: 5
    print(divide_numbers_robust(10, 0))  # Expected: "Division by zero is not allowed." then Inf
    print(divide_numbers_robust("hello", 2)) # Expected: "Inputs must be numeric." then NA
    print(divide_numbers_robust(10, "world")) # Expected: "Inputs must be numeric." then NA
    ```
    **Explanation:** The `tryCatch()` block first checks for non-numeric inputs and explicitly `stop()`s. The `error` handler then distinguishes between the "Inputs must be numeric" error (returning `NA`) and other errors. It also specifically checks for division by zero message patterns or `b == 0` to print the custom message and return `Inf`. The `warning` handler is also included to catch R's default warnings for division by zero (which can produce `Inf` or `NaN` depending on inputs) and provide the custom message.

2.  **Question:** You are debugging a complex R script. An error occurs deep within a function `my_nested_function()`. What R command would you use immediately after the error to see the sequence of function calls that led to the error, and what command would you use to step through `my_nested_function()` line by line the next time it's called?
    **Correct Answer:**
    *   To see the sequence of function calls that led to the error, you would use: `traceback()`
    *   To step through `my_nested_function()` line by line the next time it's called, you would use: `debug(my_nested_function)` (and remember to `undebug(my_nested_function)` when you are done).
    **Explanation:** `traceback()` is invaluable for understanding the call stack, showing the path of execution that led to the error, which is crucial for identifying the context of the problem. `debug()` provides an interactive environment to execute a specific function step-by-step, allowing detailed inspection of variable states and logic flow, which is perfect for isolating issues within a function.

#### AI generation note
Create a 12-15 minute mixed-format lesson. Start with a conceptual explanation of error types (syntax, runtime, logical) using simple code snippets that visually break. Then, demonstrate `print()` statements and `traceback()` in RStudio, showing how `traceback()` helps navigate the call stack. Transition to a live coding demo of `browser()` and `debug()`, illustrating how to step through code, inspect variables, and continue/quit the debugger. Finally, dedicate a significant portion to `tryCatch()`. Show a scenario where `read.csv()` might fail, and how `tryCatch()` elegantly handles file-not-found errors, invalid data types, and division by zero. Use clear visual cues (e.g., green for success, red for error, yellow for warning) to show `tryCatch()`'s different branches. Include a drag-and-drop exercise where learners match error types to example code.
---

## Module 5: Data Visualization with ggplot2

**Goal:** Master the `ggplot2` package to create insightful and aesthetically pleasing data visualizations in R, leveraging the Grammar of Graphics to build complex plots layer by layer.

## Chapter 5.1 — Introduction to ggplot2 and the Grammar of Graphics

#### Learning objectives
*   Understand the fundamental principles of the Grammar of Graphics as implemented in `ggplot2`.
*   Identify the three core components of any `ggplot2` visualization: data, aesthetic mappings, and geometric objects.
*   Construct a basic scatter plot and bar chart using `ggplot2` syntax.
*   Recognize and avoid common initial errors when building `ggplot2` plots.

#### Detailed lesson content
Welcome to the exciting world of data visualization with `ggplot2`! This powerful R package, part of the Tidyverse, allows us to create stunning and informative graphics with remarkable flexibility. Unlike traditional plotting functions, `ggplot2` is built upon a profound theoretical framework known as the "Grammar of Graphics," conceptualized by Leland Wilkinson. This grammar provides a structured way to think about and build plots by breaking them down into fundamental components. Instead of memorizing specific plot types, you learn a language to describe *any* plot.

At its core, the Grammar of Graphics states that any statistical graphic can be described by a consistent set of components: data, aesthetic mappings, geometric objects, statistical transformations, scales, coordinate systems, and faceting. In `ggplot2`, we build plots layer by layer, specifying these components. This modular approach makes `ggplot2` incredibly powerful and intuitive once you grasp the basics. You start with your data, then map variables from that data to visual properties (aesthetics) like position, color, or size, and finally choose a geometric object (geom) to represent those mapped aesthetics.

Let's dive into the three most fundamental components you'll use in almost every `ggplot2` plot:

1.  **Data:** Every `ggplot2` plot starts with a dataset, typically a data frame. This is the information you want to visualize.
2.  **Aesthetic Mappings (`aes()`):** This is where you tell `ggplot2` *how* variables from your data should be represented visually. For instance, you might map a variable to the x-axis (`x`), another to the y-axis (`y`), a categorical variable to `color`, or a numerical variable to `size`. The `aes()` function is crucial because it establishes the link between your data columns and the visual properties of your plot.
3.  **Geometric Objects (`geom_` functions):** These are the visual elements that actually draw the data on your plot. Examples include points (`geom_point` for scatter plots), bars (`geom_bar` for bar charts), lines (`geom_line` for line plots), and histograms (`geom_histogram`). Each `geom` function understands certain aesthetics and will draw them accordingly.

Let's illustrate with a simple example. We'll use the built-in `mtcars` dataset, which contains information about various car models. Suppose we want to visualize the relationship between car weight (`wt`) and miles per gallon (`mpg`).

First, ensure you have `ggplot2` installed and loaded. If not, run `install.packages("ggplot2")` and then `library(ggplot2)`.

```R
# Load the ggplot2 library
library(ggplot2)

# View the first few rows of the mtcars dataset
head(mtcars)

# Create a basic scatter plot
ggplot(data = mtcars, aes(x = wt, y = mpg)) +
  geom_point()
```

Let's break down this code:
*   `ggplot(data = mtcars, aes(x = wt, y = mpg))`: This is the initial call to `ggplot()`. We specify `data = mtcars`, telling `ggplot2` which dataset to use. Inside `aes()`, we map `wt` to the x-axis and `mpg` to the y-axis. Notice that `wt` and `mpg` are unquoted; `aes()` knows to look for these as column names within the `mtcars` data frame. This part sets up the canvas and the mapping, but it doesn't draw anything yet.
*   `+ geom_point()`: We add a layer to our plot using the `+` operator. `geom_point()` tells `ggplot2` to draw points for each observation based on the `x` and `y` aesthetics we defined.

What if we wanted to make a bar chart showing the count of cars by number of cylinders (`cyl`)?

```R
# Create a basic bar chart
ggplot(data = mtcars, aes(x = factor(cyl))) +
  geom_bar()
```

Here, we map `cyl` to the x-axis. We wrap `cyl` with `factor()` because `geom_bar()` typically expects a discrete variable for counting. By default, `geom_bar()` performs a statistical transformation to count the occurrences of each unique value on the x-axis. This is an important concept: many `geom`s have default statistical transformations (`stat`s) associated with them.

**Common Mistakes and How to Avoid Them:**
1.  **Forgetting `aes()`:** A frequent error is trying to assign variables directly outside `aes()` when they should be mapped. Remember, if a visual property (like x-position, y-position, color, size) should vary *based on a variable in your data*, it must go inside `aes()`. If you want to set a fixed color for *all* points (e.g., all red), then `color = "red"` would go *outside* `aes()` within `geom_point()`. We'll explore this distinction further in the next chapter.
2.  **Misinterpreting `geom`s:** Choosing the wrong `geom` for your data type or visualization goal. For example, using `geom_line()` for unrelated points will draw a misleading path. Always consider what story your `geom` is telling.
3.  **Not loading `ggplot2`:** You'll get an error like "could not find function ggplot" if you forget `library(ggplot2)`.
4.  **Missing `+` operator:** Each layer in `ggplot2` is added using `+`. Forgetting it will cause R to think the line is complete, leading to incomplete plots or errors.
5.  **Quoting variable names in `aes()`:** Variable names inside `aes()` should generally *not* be quoted (e.g., `aes(x = "wt")` is incorrect; `aes(x = wt)` is correct). Quoting them tells R to treat them as literal strings, not column names.

Understanding these foundational concepts – data, aesthetics, and geoms – is your first major step towards mastering `ggplot2`. With these building blocks, you can create a vast array of visualizations, and we'll progressively add more layers of complexity in the upcoming chapters.

#### Key concepts
*   **Grammar of Graphics:** A theoretical framework for describing and building statistical graphics by combining independent components.
*   **`ggplot2`:** An R package for creating data visualizations based on the Grammar of Graphics, part of the Tidyverse.
*   **Data:** The dataset (typically a data frame) that serves as the foundation for the plot.
*   **Aesthetic Mappings (`aes()`):** The specification of how variables from the data are mapped to visual properties of the plot (e.g., `x`, `y`, `color`, `size`).
*   **Geometric Objects (`geom_` functions):** The visual elements used to represent the data on the plot (e.g., `geom_point`, `geom_bar`, `geom_line`).
*   **Layers:** `ggplot2` plots are built by adding layers using the `+` operator, each layer contributing to the final visualization.

#### Hands-on activity
**Activity: Explore the `iris` dataset with basic plots**

The `iris` dataset is another classic R dataset containing measurements for three species of iris flowers. Your task is to create two basic `ggplot2` visualizations using this dataset.

1.  **Scatter Plot:** Create a scatter plot to visualize the relationship between `Sepal.Length` (x-axis) and `Petal.Length` (y-axis).
2.  **Bar Chart:** Create a bar chart showing the count of each `Species`. Remember that `geom_bar()` works best with discrete variables for counting, so you might need to convert `Species` to a factor if it's not already.

```R
# Load the ggplot2 library (if not already loaded)
library(ggplot2)

# Inspect the iris dataset
head(iris)
str(iris)

# Task 1: Create a scatter plot of Sepal.Length vs Petal.Length
# Your code here:

# Task 2: Create a bar chart of Species counts
# Your code here:
```

#### Assessment idea
1.  **Question:** Which of the following components is responsible for linking a specific column from your dataset (e.g., `temperature`) to a visual property on your plot (e.g., the y-axis position)?
    a) `geom_point()`
    b) `ggplot()`
    c) `aes()`
    d) `data`

    **Correct Answer:** c) `aes()`
    **Explanation:** The `aes()` function (aesthetic mappings) is specifically designed to map variables from your data to visual aesthetics like x-position, y-position, color, size, etc. `geom_point()` draws the points, `ggplot()` initializes the plot, and `data` provides the dataset.

2.  **Question:** You are trying to create a bar chart of car types using `ggplot(data = cars, aes(x = car_type)) + geom_bar()`, but you get an error that `car_type` is not found. You've confirmed `car_type` is a column in your `cars` data frame. What is the most likely mistake?
    a) You forgot to load the `ggplot2` library.
    b) You should have used `geom_col()` instead of `geom_bar()`.
    c) You quoted `car_type` inside `aes()`, like `aes(x = "car_type")`.
    d) You are missing the `+` operator between `ggplot()` and `geom_bar()`.

    **Correct Answer:** c) You quoted `car_type` inside `aes()`, like `aes(x = "car_type")`.
    **Explanation:** While forgetting `library(ggplot2)` or the `+` operator would cause errors, the specific error "object 'car_type' not found" when you've confirmed it's a column often indicates that you've quoted the variable name within `aes()`. When quoted, R treats it as a literal string instead of looking for a column with that name in the provided data frame. `geom_col()` is used when you already have pre-summarized counts, which is not the case here.

#### AI generation note
Create a 10-minute animated video explaining the Grammar of Graphics. Start with a blank canvas, then progressively add `data` (represented as a table), `aes` (showing variables mapping to x, y, color axes), and `geom` (points appearing). Use the `mtcars` example for `wt` vs `mpg` scatter plot and `cyl` bar chart. Visually highlight the `data`, `aes()`, and `geom_point()`/`geom_bar()` components as they are introduced. Show common mistakes like quoting variables in `aes()` or missing the `+` and how they lead to errors. Include a quick interactive quiz question at the 7-minute mark asking to identify the `aes()` component in a given `ggplot` call. Ensure captions and alt text for any visual code snippets.

## Chapter 5.2 — Customizing Aesthetics and Geometries

#### Learning objectives
*   Differentiate between mapping aesthetics (inside `aes()`) and setting aesthetics (outside `aes()`).
*   Apply various aesthetic mappings such as `color`, `fill`, `size`, `shape`, and `alpha` to enhance plot clarity.
*   Utilize a diverse range of `geom_` functions, including `geom_point`, `geom_bar`, `geom_line`, `geom_histogram`, and `geom_boxplot`, appropriate for different data types.
*   Combine multiple `geom_` layers to create richer, multi-faceted visualizations.

#### Detailed lesson content
In the previous chapter, we learned the fundamental building blocks of `ggplot2`: data, aesthetic mappings (`aes()`), and geometric objects (`geom_`). Now, let's expand on these concepts by exploring how to truly customize the visual appearance of your plots using a wider array of aesthetics and geometries. This is where `ggplot2` truly shines, allowing you to encode multiple dimensions of your data into a single, comprehensive visualization.

The key distinction to grasp is between **mapping aesthetics** and **setting aesthetics**.

*   **Mapping Aesthetics (inside `aes()`):** When you place an aesthetic inside `aes()`, you are telling `ggplot2` to vary that visual property *based on a variable in your dataset*. For example, `aes(color = Species)` means that the color of your geometric objects will be determined by the different values in the `Species` column. `ggplot2` will automatically assign a different color to each species.
*   **Setting Aesthetics (outside `aes()`):** When you place an aesthetic *outside* `aes()` (directly within a `geom_` function), you are setting a *fixed* value for that visual property for *all* elements drawn by that geom. For example, `geom_point(color = "blue")` means all points will be blue, regardless of any variable.

Let's revisit our `mtcars` scatter plot and add some mapped aesthetics:

```R
library(ggplot2)

# Scatter plot: mpg vs wt, with cylinders mapped to color and size
ggplot(data = mtcars, aes(x = wt, y = mpg, color = factor(cyl), size = hp)) +
  geom_point()
```

In this example:
*   `color = factor(cyl)`: The color of each point is determined by the number of cylinders (`cyl`). We use `factor(cyl)` to treat `cyl` as a categorical variable, ensuring discrete colors are assigned.
*   `size = hp`: The size of each point is determined by the horsepower (`hp`). Cars with higher horsepower will have larger points.

This single plot now visualizes four variables: `wt`, `mpg`, `cyl`, and `hp`. This is the power of aesthetic mappings!

Beyond `x`, `y`, `color`, and `size`, other common aesthetics include:
*   `fill`: Used for the interior color of shapes like bars, boxes, or polygons.
*   `shape`: Controls the shape of points (e.g., circles, squares, triangles).
*   `alpha`: Controls the transparency of elements (values from 0 for fully transparent to 1 for fully opaque). Useful for visualizing overlapping points.

Let's explore different `geom_` functions. Each `geom` is suited for a particular type of visualization and data structure.

1.  **`geom_point()`:** For scatter plots, showing relationships between two continuous variables.
    ```R
    ggplot(iris, aes(x = Sepal.Length, y = Petal.Length, color = Species)) +
      geom_point(alpha = 0.7, shape = 19) # Setting alpha and shape
    ```
    Here, `alpha = 0.7` makes points slightly transparent, and `shape = 19` sets them to solid circles.

2.  **`geom_bar()`:** For bar charts, typically showing counts of categorical variables.
    ```R
    ggplot(mtcars, aes(x = factor(cyl), fill = factor(gear))) +
      geom_bar(position = "dodge") # Mapping fill to another variable and dodging bars
    ```
    Here, `fill = factor(gear)` colors the bars by the number of gears. `position = "dodge"` makes the bars for different gear counts stand side-by-side instead of stacking.

3.  **`geom_col()`:** Similar to `geom_bar()`, but expects pre-summarized y-values (e.g., if you already have counts or sums).
    ```R
    # Example data: average mpg by cylinder count
    avg_mpg_by_cyl <- aggregate(mpg ~ cyl, data = mtcars, FUN = mean)
    ggplot(avg_mpg_by_cyl, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) +
      geom_col()
    ```
    Notice we explicitly provide `y = mpg` because `geom_col()` doesn't perform a default count.

4.  **`geom_line()`:** For line plots, often used to show trends over time or ordered categories.
    ```R
    # Create some time series data
    data_ts <- data.frame(
      time = 1:10,
      value = cumsum(rnorm(10)),
      group = rep(c("A", "B"), each = 5)
    )
    ggplot(data_ts, aes(x = time, y = value, color = group)) +
      geom_line(size = 1.2) + # Setting line thickness
      geom_point(size = 3, shape = 21, fill = "white") # Adding points on top
    ```
    Here, we've combined `geom_line()` and `geom_point()` to show both the trend and individual data points.

5.  **`geom_histogram()`:** For histograms, visualizing the distribution of a single continuous variable.
    ```R
    ggplot(mtcars, aes(x = mpg)) +
      geom_histogram(binwidth = 3, fill = "steelblue", color = "black")
    ```
    `binwidth` controls the width of the bins. `fill` and `color` are set aesthetics for the bars and their borders, respectively.

6.  **`geom_boxplot()`:** For box plots, summarizing the distribution of a continuous variable across different categories.
    ```R
    ggplot(iris, aes(x = Species, y = Petal.Length, fill = Species)) +
      geom_boxplot() +
      geom_jitter(width = 0.2, alpha = 0.6) # Adding raw data points with jitter
    ```
    `geom_jitter()` adds a small amount of random noise to the x-position of points to prevent overplotting, which is very useful when showing raw data alongside box plots.

**Combining Geometries:**
One of the most powerful features of `ggplot2` is the ability to layer multiple geometries on top of each other using the `+` operator. This allows you to create complex and informative plots. The order of layers matters: later layers will be drawn on top of earlier ones.

```R
# Combining geoms: Scatter plot with a smooth trend line
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point(aes(color = factor(cyl)), alpha = 0.8) + # Points colored by cylinder
  geom_smooth(method = "lm", se = FALSE, color = "darkblue") # Linear model trend line
```
Here, we first draw the points, then layer a smooth trend line on top. `method = "lm"` specifies a linear model, and `se = FALSE` removes the standard error band.

**Common Mistakes:**
1.  **Confusing `aes()` vs. direct setting:** A common pitfall is putting a fixed value inside `aes()` (e.g., `aes(color = "red")`). This won't make all points red; instead, it will create a legend entry for a category called "red" and assign a default color to it. Always remember: inside `aes()` for data-driven variation, outside `aes()` for fixed values.
2.  **Choosing inappropriate `geom`s:** Using `geom_line()` for unordered data or `geom_bar()` with a continuous `x` variable without proper binning or grouping can lead to nonsensical plots. Always match your `geom` to your data type and visualization goal.
3.  **Overplotting:** When too many points overlap, especially in scatter plots, it becomes hard to see the density. Solutions include `alpha` transparency, `geom_jitter()`, or sampling large datasets.
4.  **Misinterpreting default `stat`s:** Remember `geom_bar()` defaults to `stat = "count"`. If you already have counts, use `geom_col()` and explicitly map `y`.

By mastering the art of mapping and setting aesthetics and choosing the right geometries, you gain immense control over how your data is presented, allowing you to tell compelling stories with your visualizations.

#### Key concepts
*   **Mapping Aesthetics:** Assigning visual properties (like color, size, shape) to vary according to the values of a variable in the dataset, done *inside* `aes()`.
*   **Setting Aesthetics:** Assigning a *fixed* visual property (like a specific color or size) to all elements of a `geom`, done *outside* `aes()` within the `geom_` function.
*   **`fill` aesthetic:** Controls the interior color of geometric objects like bars, boxes, or polygons.
*   **`shape` aesthetic:** Controls the symbol used for points in a scatter plot.
*   **`alpha` aesthetic:** Controls the transparency of geometric objects.
*   **`geom_col()`:** A geometric object used for bar charts when the `y` aesthetic represents pre-calculated values (e.g., sums, means), rather than counts.
*   **`geom_jitter()`:** A geometric object used to add random noise to point positions to reduce overplotting, especially useful with box plots or categorical scatter plots.
*   **Layering Geoms:** Combining multiple `geom_` functions using the `+` operator to build complex visualizations, where later layers are drawn on top of earlier ones.

#### Hands-on activity
**Activity: Visualize `mpg` dataset with advanced aesthetics and multiple geoms**

Using the `mpg` dataset (part of `ggplot2`), create a scatter plot that visualizes the relationship between `displ` (engine displacement) and `hwy` (highway miles per gallon). Enhance this plot with the following:

1.  Map the `class` of the car to the `color` aesthetic.
2.  Map the `cyl` (number of cylinders) to the `shape` aesthetic.
3.  Set the `alpha` transparency of all points to 0.7.
4.  Add a `geom_smooth()` layer to show a general trend line (you can choose `method = "loess"` for a non-linear fit, or `method = "lm"` for a linear one). Ensure the trend line is not mapped to `class` or `cyl` (i.e., it should represent the overall trend).

```R
# Load ggplot2 and the mpg dataset
library(ggplot2)
data(mpg) # Load the mpg dataset

# Inspect the mpg dataset
head(mpg)
str(mpg)

# Your code here: Create the enhanced scatter plot
# Hint: Remember where to put mapped vs. set aesthetics!
```

#### Assessment idea
1.  **Question:** You want to create a scatter plot where all points are green and have a size of 3. Which of the following code snippets correctly achieves this?
    a) `ggplot(data, aes(x=x_var, y=y_var, color="green", size=3)) + geom_point()`
    b) `ggplot(data, aes(x=x_var, y=y_var)) + geom_point(color="green", size=3)`
    c) `ggplot(data, aes(x=x_var, y=y_var)) + geom_point(aes(color="green", size=3))`
    d) `ggplot(data, aes(x=x_var, y=y_var), color="green", size=3) + geom_point()`

    **Correct Answer:** b) `ggplot(data, aes(x=x_var, y=y_var)) + geom_point(color="green", size=3)`
    **Explanation:** To set a fixed aesthetic for all points, the aesthetic (like `color` or `size`) and its value should be placed *outside* the `aes()` function, directly within the `geom_point()` call. Option (a) and (c) would try to map the literal string "green" and number 3 to aesthetics, creating a legend for them instead of setting the color/size. Option (d) places the aesthetics in the `ggplot()` call itself, which is not how fixed aesthetics are applied to geoms.

2.  **Question:** You are creating a bar chart to show the *average* `price` of products by `category`. You have a data frame `product_summary` with columns `category` and `avg_price`. Which `geom_` function and aesthetic mapping would be most appropriate?
    a) `geom_bar(aes(x = category, y = avg_price))`
    b) `geom_col(aes(x = category, y = avg_price))`
    c) `geom_point(aes(x = category, y = avg_price))`
    d) `geom_histogram(aes(x = category, y = avg_price))`

    **Correct Answer:** b) `geom_col(aes(x = category, y = avg_price))`
    **Explanation:** `geom_col()` is used when the `y` aesthetic already represents pre-calculated values (like `avg_price` in this case). `geom_bar()` by default performs a count (`stat="count"`) and would not use the `y` aesthetic as a height directly. `geom_point()` is for scatter plots, and `geom_histogram()` is for distributions of continuous variables.

#### AI generation note
Develop a 12-minute interactive code demo focusing on aesthetic mapping vs. setting. Start with a simple scatter plot, then demonstrate how `color` changes when mapped to a variable (`Species` in `iris`) versus when set to a fixed value (`"red"`). Show `size`, `shape`, and `alpha` aesthetics with clear examples. Dedicate a section to different `geom_` types (`geom_point`, `geom_bar`, `geom_line`, `geom_histogram`, `geom_boxplot`) using appropriate datasets (`iris`, `mtcars`, `mpg`), highlighting their typical use cases. Include a live coding segment where the instructor combines `geom_point` and `geom_smooth` and explains the layering order. Provide an interactive exercise where learners modify an existing plot by adding a new aesthetic mapping and a new `geom`. Ensure high-contrast visuals for code and plots.

## Chapter 5.3 — Adding Labels, Titles, and Annotations

#### Learning objectives
*   Add informative titles, subtitles, captions, and axis labels to `ggplot2` plots using the `labs()` function.
*   Control axis ranges and breaks using `xlim()`, `ylim()`, and `scale_` functions.
*   Customize the overall visual appearance of plots, including backgrounds, grid lines, and text elements, using `theme()`.
*   Incorporate specific text or geometric annotations onto a plot using `annotate()`.

#### Detailed lesson content
A well-designed plot isn't just about the data points; it's also about how clearly and effectively you communicate its message. This involves adding descriptive titles, clear axis labels, and sometimes even specific annotations to highlight key features. `ggplot2` provides extensive tools for this, primarily through `labs()`, `scale_` functions, `theme()`, and `annotate()`.

**1. Titles, Subtitles, Captions, and Axis Labels with `labs()`**

The `labs()` function is your go-to for adding descriptive text to your plot. It allows you to set the main title, a subtitle, a caption, and custom labels for your x and y axes, as well as legend titles for mapped aesthetics.

Let's enhance our `mtcars` scatter plot:

```R
library(ggplot2)

ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +
  geom_point(size = 3, alpha = 0.7) +
  labs(
    title = "Car Weight vs. Miles Per Gallon",
    subtitle = "Colored by Number of Cylinders",
    caption = "Data from mtcars dataset (1974 Motor Trend US magazine)",
    x = "Weight (1000 lbs)",
    y = "Miles/(US) gallon",
    color = "Cylinders" # Custom legend title for the 'color' aesthetic
  )
```
Notice how `labs()` takes arguments like `title`, `subtitle`, `caption`, `x`, `y`, and the name of any aesthetic you've mapped (like `color`, `fill`, `size`) to customize its legend title. This makes your plots much more self-explanatory.

**2. Controlling Axis Ranges and Breaks with `xlim()`, `ylim()`, and `scale_` Functions**

Sometimes, `ggplot2`'s automatic axis scaling might not be ideal. You might want to zoom in on a specific range or customize the tick marks.

*   **`xlim()` and `ylim()`:** These functions provide a quick way to set the minimum and maximum values for your x and y axes, respectively. Be cautious: `xlim()` and `ylim()` will *remove* any data outside the specified range, which can sometimes be misleading.

    ```R
    ggplot(mtcars, aes(x = wt, y = mpg)) +
      geom_point() +
      xlim(1.5, 4.5) + # Set x-axis from 1.5 to 4.5
      ylim(10, 35)   # Set y-axis from 10 to 35
    ```

*   **`scale_` functions:** For more granular control over axes, including breaks, labels, and transformations, use the `scale_x_` and `scale_y_` family of functions. These are very powerful and flexible.
    *   `scale_x_continuous()`, `scale_y_continuous()`: For continuous numeric axes.
    *   `scale_x_discrete()`, `scale_y_discrete()`: For categorical axes.
    *   `scale_x_log10()`, `scale_y_sqrt()`: For axis transformations.
    *   `scale_color_manual()`, `scale_fill_brewer()`: For customizing colors and fills.

    Let's use `scale_y_continuous()` to set specific breaks and labels:

    ```R
    ggplot(mtcars, aes(x = wt, y = mpg)) +
      geom_point() +
      scale_y_continuous(
        name = "Fuel Efficiency (MPG)", # Custom axis label (alternative to labs(y=...))
        breaks = seq(10, 35, by = 5),    # Set breaks every 5 units
        labels = paste0(seq(10, 35, by = 5), " MPG") # Custom labels for breaks
      ) +
      scale_x_continuous(
        name = "Vehicle Weight (tons)",
        breaks = c(2, 3, 4),             # Specific breaks
        labels = c("Light", "Medium", "Heavy") # Custom labels
      )
    ```
    This gives you precise control over how your axes appear.

**3. Customizing Overall Plot Appearance with `theme()`**

The `theme()` function is incredibly powerful for customizing virtually every non-data element of your plot: fonts, background colors, grid lines, legend positions, panel borders, and much more. It takes a long list of arguments, each controlling a specific element.

`ggplot2` also comes with several built-in themes (e.g., `theme_minimal()`, `theme_bw()`, `theme_classic()`) that provide good starting points. You can apply a theme and then further customize it.

```R
ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +
  geom_point(size = 3, alpha = 0.7) +
  labs(title = "Car Weight vs. Miles Per Gallon") +
  theme_minimal() + # Start with a minimal theme
  theme(
    plot.title = element_text(size = 18, face = "bold", hjust = 0.5), # Center and bold title
    axis.title.x = element_text(size = 14, color = "darkgreen"),
    axis.title.y = element_text(size = 14, color = "darkred"),
    panel.grid.major = element_line(color = "gray80", linetype = "dotted"), # Dotted major grid
    panel.background = element_rect(fill = "gray95", color = NA), # Light gray background
    legend.position = "bottom" # Move legend to the bottom
  )
```
`element_text()`, `element_rect()`, `element_line()`, and `element_blank()` are helper functions used within `theme()` to specify properties for text, rectangles, lines, or to remove an element entirely.

**4. Adding Specific Annotations with `annotate()`**

Sometimes you need to add specific text, points, or shapes to highlight a particular area or data point on your plot. `annotate()` is perfect for this. It takes a `geom` argument (e.g., `"text"`, `"point"`, `"rect"`, `"segment"`) and then specific x/y coordinates and other aesthetic properties.

```R
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point(size = 3, alpha = 0.7) +
  geom_smooth(method = "lm", se = FALSE, color = "red") +
  labs(title = "Car Weight vs. Miles Per Gallon") +
  annotate(
    "text",
    x = 3.5, y = 28,
    label = "High MPG, Low Weight",
    color = "blue", size = 4, fontface = "bold"
  ) +
  annotate(
    "rect",
    xmin = 1.5, xmax = 2.5, ymin = 25, ymax = 35,
    alpha = 0.2, fill = "green"
  ) +
  annotate(
    "segment",
    x = 3.8, xend = 3.5, y = 15, yend = 18,
    arrow = arrow(length = unit(0.2, "cm")), color = "purple", size = 1
  )
```
`annotate()` adds elements *outside* the data mapping, directly to the plot's coordinate system.

**Common Mistakes:**
1.  **Over-annotation:** Too many labels, lines, or colors can make a plot cluttered and difficult to read. Be judicious.
2.  **Misleading axis limits:** Using `xlim()` or `ylim()` to hide important data points can distort the perception of your data. Consider `coord_cartesian()` if you just want to zoom without removing data.
3.  **Unreadable fonts/colors:** Ensure text is large enough and colors have sufficient contrast. Avoid using too many different fonts or colors.
4.  **Inconsistent themes:** If you're creating multiple plots, try to maintain a consistent theme for a professional look. You can create and save custom themes.

By effectively using these customization tools, you can transform raw data visualizations into compelling and professional-grade graphics that clearly convey your insights.

#### Key concepts
*   **`labs()`:** A `ggplot2` function used to add or modify plot titles, subtitles, captions, and axis labels, as well as legend titles for aesthetic mappings.
*   **`xlim()`, `ylim()`:** Functions to manually set the minimum and maximum values for the x and y axes, respectively. Note that these *remove* data outside the specified range.
*   **`scale_` functions:** A family of functions (e.g., `scale_x_continuous`, `scale_y_discrete`, `scale_color_manual`) used for fine-grained control over axis properties (breaks, labels, transformations) and legend appearance.
*   **`theme()`:** A powerful `ggplot2` function for customizing the non-data elements of a plot, such as background, grid lines, font styles, legend position, and panel borders.
*   **Built-in Themes:** Predefined `ggplot2` themes (e.g., `theme_minimal()`, `theme_bw()`, `theme_classic()`) that provide a quick way to change the overall look of a plot.
*   **`annotate()`:** A function used to add specific text, points, rectangles, or lines directly to the plot at specified coordinates, independent of the data mapping.

#### Hands-on activity
**Activity: Refine a distribution plot with labels, scales, and a custom theme**

Using the `diamonds` dataset (also part of `ggplot2`), create a histogram of the `price` variable. Then, apply the following customizations:

1.  Add a main title: "Distribution of Diamond Prices".
2.  Add a subtitle: "Data from the `diamonds` dataset".
3.  Label the x-axis as "Price (USD)" and the y-axis as "Frequency".
4.  Set the x-axis limits from 0 to 18000.
5.  Use `scale_x_continuous()` to set breaks at `seq(0, 18000, by = 2000)`.
6.  Apply `theme_light()` as a base theme.
7.  Customize the plot title to be bold, size 16, and centered.
8.  Add an `annotate()` text label at `x = 15000, y = 2000` saying "High-end diamonds" in red.

```R
# Load ggplot2 and the diamonds dataset
library(ggplot2)
data(diamonds) # Load the diamonds dataset

# Inspect the diamonds dataset
head(diamonds)
str(diamonds)

# Your code here: Create the histogram and apply customizations
ggplot(diamonds, aes(x = price)) +
  geom_histogram(binwidth = 500, fill = "skyblue", color = "black") +
  # Add labs() here:

  # Add xlim() or scale_x_continuous() here:

  # Add theme_light() and custom theme() elements here:

  # Add annotate() here:
```

#### Assessment idea
1.  **Question:** You want to add a main title "Sales Performance" and change the x-axis label to "Month" on your `ggplot2` plot. Which function is the most direct and idiomatic way to achieve this?
    a) `theme(plot.title = "Sales Performance", axis.title.x = "Month")`
    b) `labs(title = "Sales Performance", x = "Month")`
    c) `ggtitle("Sales Performance") + xlab("Month")`
    d) `annotate("text", x=..., y=..., label="Sales Performance") + annotate("text", x=..., y=..., label="Month")`

    **Correct Answer:** b) `labs(title = "Sales Performance", x = "Month")`
    **Explanation:** The `labs()` function is the primary and most flexible way to add titles, subtitles, captions, and axis labels in `ggplot2`. While options (a) and (c) can achieve parts of this, `labs()` is the unified and recommended approach. Option (d) uses `annotate()` which is for specific, data-independent annotations, not general plot titles or axis labels.

2.  **Question:** Consider a plot where you have mapped `color = category`. If you want to change the *title* of the legend for `category` to "Product Type", where would you specify this?
    a) Inside `geom_point(legend.title = "Product Type")`
    b) Inside `theme(legend.title = element_text(text = "Product Type"))`
    c) Inside `labs(color = "Product Type")`
    d) Using `scale_color_discrete(name = "Product Type")`

    **Correct Answer:** c) Inside `labs(color = "Product Type")` or d) Using `scale_color_discrete(name = "Product Type")`
    **Explanation:** Both `labs(color = "Product Type")` and `scale_color_discrete(name = "Product Type")` (or `scale_color_manual`, `scale_color_brewer` depending on your scale type) are correct ways to change the legend title for a mapped aesthetic. `labs()` is a general-purpose function for all labels, while `scale_color_discrete()` provides more specific control over the color scale itself, including its name. The question asks for "where would you specify this", implying one correct answer. Given the options, `labs()` is a more general answer that works across different scale types, but `scale_color_discrete` is also perfectly valid and often preferred for specific scale customization. For a beginner course, `labs()` is introduced first for all labels. Let's refine the answer to prefer `labs()` for initial introduction, but acknowledge `scale_color_discrete` is also correct.
    *Revised Answer (for clarity and beginner focus)*: c) `labs(color = "Product Type")`
    *Explanation*: The `labs()` function is the most straightforward way to customize the titles of legends for mapped aesthetics like `color`. You simply pass the aesthetic name as an argument to `labs()` and assign the desired title. While `scale_color_discrete(name = "Product Type")` would also work, `labs()` provides a unified interface for all plot labels.

#### AI generation note
Create a 10-minute video tutorial demonstrating how to add labels, titles, and annotations. Start with a basic plot and progressively add `labs()` components (title, subtitle, caption, axis labels, legend title). Then, show how `xlim()`/`ylim()` affect the plot, contrasting it with `scale_x_continuous()` for more detailed control over breaks and labels, using a `seq()` example. Transition to `theme()` by applying `theme_bw()` and then customizing `plot.title`, `axis.title`, and `legend.position` with `element_text` and `element_rect`. Finally, demonstrate `annotate()` with text, a rectangle, and an arrow to highlight specific plot areas. Use the `mtcars` dataset for continuity. Include a reflection prompt at the 8-minute mark asking learners to consider when `xlim()` vs. `scale_x_continuous()` is more appropriate.

## Chapter 5.4 — Faceting and Statistical Transformations

#### Learning objectives
*   Apply `facet_wrap()` to create small multiples of a plot based on one or more categorical variables.
*   Utilize `facet_grid()` to create a grid of plots based on two categorical variables.
*   Understand the concept of statistical transformations (`stat_` functions) and how they are implicitly used by many `geom_` functions.
*   Explicitly use `stat_summary()` and `geom_smooth()` to add statistical summaries and trend lines to plots.

#### Detailed lesson content
As datasets grow in complexity, a single plot might not be enough to reveal all the underlying patterns. Sometimes, you need to break down your data into subsets and visualize each subset separately, but in a consistent manner. This is where **faceting** comes in. `ggplot2` offers powerful faceting capabilities to create "small multiples" – multiple plots, each showing a subset of the data, arranged in a grid. This allows for easy comparison across different categories.

**1. Faceting with `facet_wrap()`**

`facet_wrap()` is used when you want to facet your plot by one or more categorical variables, arranging the resulting plots into a grid that "wraps" around.

The syntax is `facet_wrap(~ variable_name)` for a single variable, or `facet_wrap(~ var1 + var2)` for combining two variables into a single faceting dimension. You can also control the number of rows or columns.

Let's use the `mpg` dataset to visualize the relationship between engine displacement (`displ`) and highway MPG (`hwy`), faceted by `class` of vehicle:

```R
library(ggplot2)
data(mpg)

ggplot(mpg, aes(x = displ, y = hwy)) +
  geom_point() +
  facet_wrap(~ class) + # Facet by vehicle class
  labs(title = "Highway MPG vs. Engine Displacement by Vehicle Class")
```
This will create a separate scatter plot for each unique `class` of vehicle, arranged in a grid. By default, `facet_wrap()` determines the optimal number of rows and columns. You can explicitly set them: `facet_wrap(~ class, nrow = 2)` or `facet_wrap(~ class, ncol = 3)`.

**2. Faceting with `facet_grid()`**

`facet_grid()` is used when you want to arrange your plots in a 2D grid, with one categorical variable defining the rows and another defining the columns. This is particularly useful for comparing two categorical dimensions simultaneously.

The syntax is `facet_grid(row_variable ~ column_variable)`. If you only want rows or columns, you can use `.~ column_variable` or `row_variable ~ .`.

Let's facet `mpg` data by `drv` (drive type: f = front-wheel, r = rear-wheel, 4 = 4-wheel) for rows and `cyl` (number of cylinders) for columns:

```R
ggplot(mpg, aes(x = displ, y = hwy)) +
  geom_point() +
  facet_grid(drv ~ cyl) + # Facet by drive type (rows) and cylinders (columns)
  labs(title = "Highway MPG vs. Engine Displacement by Drive Type and Cylinders")
```
This creates a grid where each cell represents a unique combination of `drv` and `cyl`. Notice that `cyl` is treated as a categorical variable here, and `ggplot2` will create panels for each unique value. If a combination has no data, the panel will be empty.

**Common Faceting Options:**
*   `scales = "free"`: Allows each panel to have its own independent x and y axis scales. Useful when ranges vary widely. Default is `"fixed"`.
*   `scales = "free_x"`: Free x-axis scales, fixed y-axis scales.
*   `scales = "free_y"`: Fixed x-axis scales, free y-axis scales.
*   `labeller = label_both`: Shows both the variable name and its value in the facet labels.

```R
ggplot(mpg, aes(x = displ, y = hwy)) +
  geom_point() +
  facet_wrap(~ class, scales = "free_y", labeller = label_both) + # Free y-scales, show var name
  labs(title = "Highway MPG vs. Engine Displacement by Vehicle Class (Free Y-scales)")
```

**Common Mistakes with Faceting:**
1.  **Over-faceting:** Creating too many small panels can make the plot difficult to read and compare. Choose your faceting variables carefully.
2.  **Inconsistent scales:** While `scales = "free"` can be useful, it can also make direct comparisons between panels difficult if the visual range changes drastically. Use it judiciously.
3.  **Unordered factors:** If your faceting variable is a factor, ensure its levels are ordered logically if you want a specific display order for your panels.

**3. Statistical Transformations (`stat_` functions)**

Many `geom_` functions perform a statistical transformation on your data before drawing. For example, `geom_bar()` by default calculates counts (`stat="count"`), and `geom_histogram()` calculates bin counts (`stat="bin"`). You can explicitly specify the `stat` argument within a `geom_` function, or use the `stat_` functions directly.

*   **`stat_summary()`:** This is incredibly useful for adding summary statistics (like mean, median, standard deviation) to your plots. You specify a `fun` (function) to apply to the `y` values for each `x` group.

    Let's add mean and standard error to our `iris` box plot:

    ```R
    ggplot(iris, aes(x = Species, y = Petal.Length)) +
      geom_boxplot() +
      stat_summary(fun = mean, geom = "point", shape = 23, size = 4, fill = "red", color = "black") + # Add mean points
      stat_summary(fun.data = mean_se, geom = "errorbar", width = 0.2, color = "blue") # Add mean +/- SE error bars
    ```
    Here, `stat_summary()` calculates the mean and `mean_se` (mean and standard error) for `Petal.Length` within each `Species` group and then draws them using `geom = "point"` and `geom = "errorbar"`.

*   **`geom_smooth()` (and `stat_smooth()`):** This geom (which uses `stat_smooth()` internally) is used to add smoothed conditional means or trend lines to your data. It's excellent for visualizing relationships and trends.

    ```R
    ggplot(mtcars, aes(x = wt, y = mpg)) +
      geom_point() +
      geom_smooth(method = "lm", se = TRUE, color = "darkgreen", linetype = "dashed") # Linear model with standard error
    ```
    *   `method`: Specifies the smoothing method (e.g., `"auto"` for automatic, `"loess"` for local regression, `"lm"` for linear model, `"glm"` for generalized linear model).
    *   `se`: Controls whether to display the standard error band around the smooth line.
    *   `level`: Confidence level for the standard error band (default 0.95).

    You can also apply `geom_smooth()` within facets:

    ```R
    ggplot(mpg, aes(x = displ, y = hwy, color = drv)) +
      geom_point(alpha = 0.6) +
      geom_smooth(method = "lm", se = FALSE) + # Separate trend lines for each 'drv' group
      facet_wrap(~ class, scales = "free") +
      labs(title = "Highway MPG vs. Engine Displacement by Class and Drive Type")
    ```
    Here, because `color = drv` is mapped in the main `ggplot()` call, `geom_smooth()` will automatically draw separate trend lines for each `drv` group within each facet. If you wanted a single trend line per facet, you would move `color = drv` into `geom_point()`'s `aes()` call.

**Common Mistakes with Statistical Transformations:**
1.  **Misinterpreting `geom_bar()`:** Forgetting that `geom_bar()` counts by default, leading to incorrect bar heights if you intended to plot pre-calculated values. Always use `geom_col()` when `y` is already a value you want to plot directly.
2.  **Over-smoothing:** Choosing a `geom_smooth()` method that overfits or underfits the data, leading to misleading trend interpretations. Always inspect the raw data alongside the smooth line.
3.  **Ignoring standard error:** Hiding the `se` (standard error) band in `geom_smooth()` can sometimes mask uncertainty in the trend. It's often good practice to show it.

By combining faceting with appropriate statistical transformations, you can create highly informative plots that reveal insights across different subgroups and summarize complex relationships within your data.

#### Key concepts
*   **Faceting:** The process of creating multiple plots (small multiples) based on subsets of the data, arranged in a grid for easy comparison.
*   **`facet_wrap()`:** Used for faceting by one or more categorical variables, arranging panels in a wrapping grid.
*   **`facet_grid()`:** Used for faceting by two categorical variables, arranging panels in a 2D grid (rows by columns).
*   **`scales` argument:** Controls whether axis scales are fixed or allowed to vary across facets (`"fixed"`, `"free_x"`, `"free_y"`, `"free"`).
*   **Statistical Transformation (`stat_` functions):** Operations performed on the data to calculate new variables for plotting (e.g., counting, binning, summarizing). Many `geom_` functions have default statistical transformations.
*   **`stat_summary()`:** A `geom_` function used to add summary statistics (like mean, median, standard deviation) to a plot, often with error bars.
*   **`geom_smooth()`:** A `geom_` function used to add smoothed conditional means or trend lines to a plot, often with a standard error band.
*   **`method` argument (in `geom_smooth()`):** Specifies the type of smoothing algorithm to use (e.g., `"lm"` for linear model, `"loess"` for local regression).

#### Hands-on activity
**Activity: Explore diamond characteristics with faceting and trend lines**

Using the `diamonds` dataset, create a scatter plot of `carat` vs. `price`. Then, apply the following:

1.  Facet the plot by `cut` (quality of the cut) using `facet_wrap()`.
2.  Within each facet, add a linear trend line (`geom_smooth(method = "lm", se = FALSE)`) for the `carat` vs. `price` relationship.
3.  Map the `color` aesthetic of the points to the `clarity` variable.
4.  Ensure the scales for the y-axis (`price`) are free across facets, as price ranges might differ significantly for different cuts.

```R
# Load ggplot2 and the diamonds dataset
library(ggplot2)
data(diamonds)

# Your code here: Create the faceted scatter plot with trend lines
# Hint: Remember to put aesthetics for points in geom_point() if you want a single trend line per facet.
# If you map color in ggplot() call, geom_smooth() will also facet by color.
# For this exercise, map color for points, but let geom_smooth() draw one line per cut facet.
ggplot(diamonds, aes(x = carat, y = price)) +
  geom_point(aes(color = clarity), alpha = 0.5) + # Color points by clarity
  # Add geom_smooth() here:

  # Add facet_wrap() here:

  labs(title = "Diamond Price vs. Carat by Cut Quality and Clarity")
```

#### Assessment idea
1.  **Question:** You want to create a grid of plots showing the relationship between `x_var` and `y_var`, where rows are defined by `category_A` and columns by `category_B`. Which `ggplot2` function is best suited for this task?
    a) `facet_wrap(~ category_A + category_B)`
    b) `facet_grid(category_A ~ category_B)`
    c) `facet_grid(.~ category_A, category_B ~ .)`
    d) `facet_wrap(category_A ~ category_B)`

    **Correct Answer:** b) `facet_grid(category_A ~ category_B)`
    **Explanation:** `facet_grid()` is specifically designed for creating a 2D grid of plots where one variable defines the rows and another defines the columns. `facet_wrap()` is for wrapping a single dimension into a grid. Option (a) would combine `category_A` and `category_B` into a single faceting dimension. Options (c) and (d) use incorrect syntax for `facet_grid()` or `facet_wrap()`.

2.  **Question:** You have a scatter plot of `temperature` vs. `time` and want to add a smoothed line representing the general trend. Which `geom_` function would you use, and what is a common mistake to avoid when using it?
    a) `geom_line()`; mistake: using it without ordering `time` correctly.
    b) `geom_smooth()`; mistake: always setting `se = FALSE`, which hides uncertainty.
    c) `geom_histogram()`; mistake: using it for continuous variables.
    d) `geom_col()`; mistake: using it when you need to count occurrences.

    **Correct Answer:** b) `geom_smooth()`; mistake: always setting `se = FALSE`, which hides uncertainty.
    **Explanation:** `geom_smooth()` is specifically designed to add smoothed trend lines. A common mistake is to always hide the standard error (`se = FALSE`), which can obscure the uncertainty around the estimated trend. While `geom_line()` can connect points, it doesn't perform smoothing. `geom_histogram()` and `geom_col()` are for distributions and pre-summarized bar charts, respectively.

#### AI generation note
Design a 15-minute lab walkthrough. Start by demonstrating `facet_wrap()` using the `mpg` dataset (`displ` vs `hwy` by `class`), showing how to control `nrow`/`ncol` and `scales = "free_y"`. Then, introduce `facet_grid()` with `drv` vs `cyl`, emphasizing its 2D structure. For statistical transformations, first explain the default `stat="count"` of `geom_bar()` and contrast it with `geom_col()`. Then, provide a detailed live coding example of `stat_summary()` to add mean points and error bars to a box plot (`iris` dataset). Conclude with `geom_smooth()` applied to a scatter plot, demonstrating `method = "lm"` and `se = TRUE/FALSE`, and showing how `geom_smooth()` interacts with mapped aesthetics and faceting. Include a challenge for learners to apply both faceting and `geom_smooth()` to a new dataset.

## Chapter 5.5 — Advanced Customization and Exporting Plots

#### Learning objectives
*   Apply and customize `ggplot2` themes to achieve a consistent and professional visual style for plots.
*   Explore options for creating custom color palettes and applying them to aesthetic mappings.
*   Understand best practices for effective data visualization, including considerations for colorblindness and avoiding misleading representations.
*   Export `ggplot2` plots to various file formats with appropriate dimensions and resolution using `ggsave()`.

#### Detailed lesson content
You've learned the core components of `ggplot2`, from basic geoms and aesthetics to powerful faceting and statistical transformations. Now, let's refine your plots to a professional standard. This involves advanced theme customization, thoughtful color choices, adherence to visualization best practices, and correctly exporting your masterpieces.

**1. Advanced Theme Customization**

While `theme()` offers immense control, sometimes you want to apply a consistent look across many plots. You can create and save your own custom themes.

First, let's review some built-in themes that provide excellent starting points:
*   `theme_gray()`: The default `ggplot2` theme.
*   `theme_bw()`: Black and white theme, often preferred for publications.
*   `theme_minimal()`: A minimalist theme with no background or borders.
*   `theme_classic()`: A theme with x and y axis lines but no grid lines.

You can apply these themes and then override specific elements using `theme()`:

```R
library(ggplot2)
data(mpg)

my_plot <- ggplot(mpg, aes(x = displ, y = hwy, color = class)) +
  geom_point(size = 2, alpha = 0.7) +
  labs(
    title = "Highway MPG vs. Engine Displacement",
    subtitle = "Colored by Vehicle Class",
    x = "Engine Displacement (L)",
    y = "Highway MPG"
  )

# Apply a base theme and then customize
my_plot +
  theme_bw() + # Start with black and white theme
  theme(
    plot.title = element_text(size = 16, face = "bold", hjust = 0.5, margin = margin(b = 10)),
    plot.subtitle = element_text(size = 12, hjust = 0.5, margin = margin(b = 15)),
    axis.title = element_text(size = 12, face = "italic"),
    axis.text = element_text(size = 10),
    legend.position = "right",
    panel.grid.major = element_line(color = "gray90", linetype = "dotted"),
    panel.background = element_rect(fill = "white", color = NA) # Ensure white background
  )
```
Notice the use of `margin()` within `element_text()` to add space around titles, improving readability.

You can also define your own custom theme function to reuse across projects:

```R
# Define a custom theme
theme_cohortia <- function() {
  theme_minimal(base_size = 12, base_family = "Helvetica") +
    theme(
      plot.title = element_text(size = rel(1.4), face = "bold", hjust = 0.5, margin = margin(b = 12)),
      plot.subtitle = element_text(size = rel(1.1), hjust = 0.5, margin = margin(b = 10)),
      plot.caption = element_text(size = rel(0.8), hjust = 1, margin = margin(t = 10)),
      axis.title = element_text(size = rel(1.1), face = "bold"),
      axis.text = element_text(size = rel(0.9)),
      legend.title = element_text(size = rel(1.0), face = "bold"),
      legend.text = element_text(size = rel(0.9)),
      legend.position = "right",
      panel.grid.major = element_line(color = "gray85", linetype = "dotted"),
      panel.grid.minor = element_blank(), # Remove minor grid lines
      panel.background = element_rect(fill = "white", color = NA),
      plot.background = element_rect(fill = "white", color = NA),
      strip.text = element_text(size = rel(1.0), face = "bold", color = "white"), # Facet labels
      strip.background = element_rect(fill = "darkblue", color = NA) # Facet background
    )
}

# Apply the custom theme
my_plot + theme_cohortia()
```
This allows for consistent branding and styling across all your `ggplot2` visualizations.

**2. Custom Color Palettes**

Default `ggplot2` colors are generally good, but sometimes you need more control, especially for categorical data or when adhering to specific brand guidelines.

*   **`scale_color_manual()` / `scale_fill_manual()`:** For explicitly assigning colors to categories.
*   **`scale_color_brewer()` / `scale_fill_brewer()`:** For using colorblind-friendly and print-friendly palettes from the `RColorBrewer` package.
*   **`scale_color_viridis_d()` / `scale_fill_viridis_d()`:** For perceptually uniform and colorblind-friendly continuous/discrete palettes from the `viridis` package (often loaded implicitly with `ggplot2`).

```R
# Define a custom color palette for 'class'
custom_colors <- c(
  "2seater" = "#E41A1C", "compact" = "#377EB8", "midsize" = "#4DAF4A",
  "minivan" = "#984EA3", "pickup" = "#FF7F00", "subcompact" = "#FFFF33",
  "suv" = "#A65628"
)

my_plot +
  scale_color_manual(values = custom_colors) + # Apply custom colors
  theme_cohortia()
```
For `RColorBrewer` palettes, you specify the `palette` argument (e.g., `"Set1"`, `"Dark2"`, `"Paired"`).

```R
my_plot +
  scale_color_brewer(palette = "Dark2") + # Use a Brewer palette
  theme_cohortia()
```

**3. Best Practices for Data Visualization**

*   **Clarity over decoration:** Every element in your plot should serve a purpose. Avoid unnecessary clutter.
*   **Appropriate chart type:** Choose a `geom` that best represents your data and the story you want to tell.
*   **Colorblind-friendliness:** Use palettes like `viridis` or `RColorBrewer`'s "qualitative" or "sequential" palettes that are designed to be accessible. Avoid red-green combinations for critical distinctions.
*   **Avoid misleading visuals:**
    *   **Truncated y-axis:** Starting the y-axis at a value other than zero can exaggerate differences in bar charts.
    *   **3D charts:** Generally avoid 3D bar or pie charts as they distort perception.
    *   **Overplotting:** Use `alpha` transparency, `geom_jitter()`, or sampling for dense scatter plots.
*   **Labeling:** Ensure all axes, legends, and titles are clearly labeled.
*   **Consistency:** Maintain consistent styling (fonts, colors, themes) across all plots in a report or presentation.

**4. Exporting Plots with `ggsave()`**

Once your plot is perfect, you'll want to save it to a file. `ggsave()` is the dedicated function for this, and it's highly flexible.

```R
# Save the last plot created
ggsave("my_beautiful_plot.png", width = 8, height = 6, dpi = 300)

# Save a specific plot object
my_final_plot <- my_plot + scale_color_brewer(palette = "Set1") + theme_cohortia()
ggsave("my_final_plot.pdf", plot = my_final_plot, width = 10, height = 7, dpi = 600)
```

Key arguments for `ggsave()`:
*   `filename`: The name of the file, including the extension (e.g., `.png`, `.pdf`, `.jpeg`, `.svg`). `ggsave()` infers the device from the extension.
*   `plot`: The `ggplot` object to save (defaults to the last plot displayed).
*   `width`, `height`: Dimensions of the plot in inches (default).
*   `units`: Units for `width` and `height` (`"in"`, `"cm"`, `"mm"`).
*   `dpi`: Dots per inch (resolution). `300` is good for most reports, `600` or higher for high-quality printing. For vector formats like `.pdf` or `.svg`, `dpi` is less critical as they scale without pixelation.

**Common Mistakes when Exporting:**
1.  **Low Resolution:** Saving images at too low a `dpi` for print or high-resolution displays results in pixelated or blurry plots. Always check the target medium's requirements.
2.  **Incorrect Dimensions:** Plots might appear squashed or stretched if `width` and `height` are not set appropriately for the content. Preview your plot in the RStudio Plots pane and adjust dimensions before saving.
3.  **Choosing the Wrong Format:**
    *   **Raster (e.g., PNG, JPEG):** Good for web, photos, when file size is a concern, but pixelates when scaled. Use `.png` for plots with sharp lines and text.
    *   **Vector (e.g., PDF, SVG):** Ideal for print, presentations, and when plots need to scale without loss of quality. Text and lines remain sharp.

By applying these advanced customization techniques and following best practices, you'll be able to create `ggplot2` visualizations that are not only insightful but also polished, professional, and effective in communicating your data stories.

#### Key concepts
*   **Custom Themes:** User-defined `ggplot2` theme functions that encapsulate a consistent set of `theme()` modifications for reuse across multiple plots.
*   **`scale_color_manual()` / `scale_fill_manual()`:** Functions for explicitly assigning custom colors to discrete categories in aesthetic mappings.
*   **`scale_color_brewer()` / `scale_fill_brewer()`:** Functions to apply color palettes from the `RColorBrewer` package, known for being perceptually uniform and colorblind-friendly.
*   **`scale_color_viridis_d()` / `scale_fill_viridis_d()`:** Functions to apply color palettes from the `viridis` package, which are also perceptually uniform and colorblind-friendly.
*   **Data Visualization Best Practices:** Guidelines for creating effective and ethical visualizations, including clarity, appropriate chart choice, colorblind-friendliness, and avoiding misleading representations.
*   **`ggsave()`:** The `ggplot2` function used to export plots to various file formats (e.g., PNG, PDF, JPEG, SVG) with specified dimensions and resolution.
*   **Raster vs. Vector Graphics:**
    *   **Raster:** Image format (e.g., PNG, JPEG) composed of pixels, scales poorly.
    *   **Vector:** Image format (e.g., PDF, SVG) composed of mathematical paths, scales perfectly.
*   **DPI (Dots Per Inch):** A measure of image resolution, crucial for raster graphics to ensure sufficient quality for display or print.

#### Hands-on activity
**Activity: Create a publication-ready plot and export it**

Using the `iris` dataset, create a box plot of `Petal.Length` by `Species`. Apply the following advanced customizations and then export the plot:

1.  Use `theme_classic()` as your base theme.
2.  Customize the plot title: "Petal Length Distribution by Species", bold, size 18, centered.
3.  Customize axis titles: bold, size 14.
4.  Customize axis text: size 12.
5.  Set the legend position to "none" (as `Species` is on the x-axis, the legend might be redundant, or you can keep it if you map `fill` to `Species`). Let's keep `fill` mapped to `Species` and move the legend to the bottom.
6.  Use `scale_fill_manual()` to assign specific colors to each `Species` (e.g., "setosa" = "darkgreen", "versicolor" = "darkblue", "virginica" = "darkred").
7.  Add `geom_jitter()` with `alpha = 0.4` to show individual data points.
8.  Export the final plot as a `.png` file named `iris_petal_boxplot.png` with dimensions 8x6 inches and `dpi = 300`.
9.  Export the same plot as a `.pdf` file named `iris_petal_boxplot.pdf` with the same dimensions.

```R
# Load ggplot2
library(ggplot2)
data(iris)

# Create the box plot with customizations
iris_plot <- ggplot(iris, aes(x = Species, y = Petal.Length, fill = Species)) +
  geom_boxplot(alpha = 0.8) +
  geom_jitter(width = 0.2, alpha = 0.4, color = "gray20") +
  labs(
    title = "Petal Length Distribution by Species",
    x = "Iris Species",
    y = "Petal Length (cm)",
    fill = "Species Type" # Custom legend title
  ) +
  theme_classic() +
  theme(
    plot.title = element_text(size = 18, face = "bold", hjust = 0.5),
    axis.title = element_text(size = 14, face = "bold"),
    axis.text = element_text(size = 12),
    legend.position = "bottom"
  ) +
  scale_fill_manual(
    values = c("setosa" = "darkgreen", "versicolor" = "darkblue", "virginica" = "darkred")
  )

# Display the plot (optional, but good for checking)
print(iris_plot)

# Your code here: Export the plot as PNG
# ggsave("iris_petal_boxplot.png", ...)

# Your code here: Export the plot as PDF
# ggsave("iris_petal_boxplot.pdf", ...)
```

#### Assessment idea
1.  **Question:** You have created a stunning `ggplot2` visualization and want to save it as a high-quality image for a scientific publication. Which `ggsave()` call would be most appropriate to ensure crisp lines and text, even when scaled, and what file format should you prioritize?
    a) `ggsave("plot.jpeg", width = 6, height = 4, dpi = 72)`; JPEG.
    b) `ggsave("plot.png", width = 8, height = 5, dpi = 300)`; PNG.
    c) `ggsave("plot.pdf", width = 7, height = 5, dpi = 600)`; PDF.
    d) `ggsave("plot.tiff", width = 10, height = 8, dpi = 150)`; TIFF.

    **Correct Answer:** c) `ggsave("plot.pdf", width = 7, height = 5, dpi = 600)`; PDF.
    **Explanation:** For scientific publications where crisp lines and text are paramount and plots need to scale without pixelation, a vector graphics format like PDF (or SVG) is highly preferred. `ggsave()` automatically handles the device for PDF. While a high `dpi` for raster formats like PNG or TIFF is good, only vector formats guarantee perfect scalability. JPEG is generally not suitable for plots due to lossy compression.

2.  **Question:** You are designing a series of plots for a report and want them all to have a light gray background, no minor grid lines, and bold titles. You also want to ensure the colors used for categorical variables are colorblind-friendly. How would you best achieve this consistency?
    a) Manually set `theme()` arguments for each plot and use `scale_color_manual()` with custom hex codes.
    b) Create a custom theme function that includes your desired `theme()` modifications and use `scale_color_brewer()` for colors.
    c) Apply `theme_minimal()` to all plots and rely on default `ggplot2` colors.
    d) Use `annotate()` to add text for titles and manually draw grid lines.

    **Correct Answer:** b) Create a custom theme function that includes your desired `theme()` modifications and use `scale_color_brewer()` for colors.
    **Explanation:** Creating a custom theme function is the most efficient and robust way to ensure consistent styling across multiple plots. It encapsulates all your `theme()` modifications into a single, reusable function. Combining this with `scale_color_brewer()` (or `viridis`) ensures that your color palettes are also consistent and accessible, adhering to best practices for colorblind-friendliness. Manually setting themes for each plot is prone to error and tedious. `theme_minimal()` is a good start but doesn't include all the specific customizations. `annotate()` is not for global theme changes.

---

### Chapter 5.1 — Unveiling Data with `ggplot2`: The Grammar of Graphics and First Plots

#### Learning objectives
*   Articulate the fundamental principles of the "Grammar of Graphics" as applied in `ggplot2`.
*   Successfully install and load the `ggplot2` package in RStudio.
*   Construct a basic scatter plot using `ggplot()`, `aes()`, and `geom_point()` to visualize relationships between two continuous variables.
*   Distinguish between global and local aesthetic mappings within `ggplot2` layers.
*   Identify and correct common errors encountered when building initial `ggplot2` visualizations.

#### Detailed lesson content
Welcome to the exciting world of data visualization with `ggplot2`! This powerful R package, part of the Tidyverse, allows you to create stunning, insightful, and publication-quality graphics with remarkable consistency and flexibility. At its heart, `ggplot2` is built upon a revolutionary concept called the "Grammar of Graphics," which provides a structured, layered approach to building plots. Instead of thinking about specific chart types like "bar chart" or "scatter plot," you're encouraged to think about the components that make up *any* graphic: the data, the aesthetic mappings (how variables map to visual properties like x-position, y-position, color, size), the geometric objects (points, lines, bars), statistical transformations, scales, coordinate systems, and faceting. This modular approach means you can combine these components in countless ways to create exactly the visualization you need.

To begin our journey, the first step is to ensure `ggplot2` is available in your R environment. If you haven't already installed the entire Tidyverse, you can install `ggplot2` specifically using `install.packages("ggplot2")`. Once installed, you'll need to load the package into your current R session using `library(ggplot2)`. It's a common mistake to forget this step, leading to errors like "could not find function ggplot." Always remember to load your packages at the beginning of your script or session.

Let's dive into creating our very first plot. The core function in `ggplot2` is `ggplot()`. This function initializes a plot object and is where you typically specify the dataset you want to visualize and the global aesthetic mappings. Aesthetic mappings define how variables from your dataset are translated into visual properties of the plot. For instance, you might map a variable to the x-axis position, another to the y-axis position, and perhaps a third to the color of the points. These mappings are defined within the `aes()` function, which stands for "aesthetics."

Consider the built-in `mtcars` dataset, which contains information about various car models. Let's say we want to visualize the relationship between a car's horsepower (`hp`) and its miles per gallon (`mpg`). We would start by telling `ggplot2` which data to use and how to map these variables:

```R
library(ggplot2) # Ensure the package is loaded

# Initialize the plot with data and global aesthetics
ggplot(data = mtcars, aes(x = hp, y = mpg))
```

Running this code alone won't produce a visible plot; it merely sets up the canvas and tells `ggplot2` what variables correspond to the x and y axes. To actually *draw* something on this canvas, we need to add a "geom," which is short for geometric object. Geoms are the visual representations of your data, such as points, lines, bars, or polygons. For a scatter plot, we use `geom_point()`. The beauty of `ggplot2` is its layered syntax, where you add components using the `+` operator.

```R
ggplot(data = mtcars, aes(x = hp, y = mpg)) +
  geom_point()
```

And just like that, you've created your first scatter plot! Each point on the plot represents a car from the `mtcars` dataset, with its horizontal position determined by its horsepower and its vertical position by its miles per gallon. This simple plot immediately allows us to observe a general trend: as horsepower increases, miles per gallon tends to decrease, which makes intuitive sense.

Now, let's explore adding more aesthetic mappings. What if we also wanted to see if the number of cylinders (`cyl`) affects this relationship? We can map `cyl` to another aesthetic, such as `color` or `size`. When mapping a categorical variable like `cyl` to color, `ggplot2` automatically assigns distinct colors to each category and generates a legend.

```R
ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
  geom_point()
```

Notice that we wrapped `cyl` with `factor()`. This is a crucial step when you want `ggplot2` to treat a numeric variable as a categorical one for aesthetics like color or shape. If you omit `factor()`, `ggplot2` will treat `cyl` as a continuous variable and apply a continuous color gradient, which might not be what you intend for distinct categories. This is a very common beginner mistake.

A key concept in `ggplot2` is the distinction between global and local aesthetic mappings. In the examples above, `aes(x = hp, y = mpg, color = factor(cyl))` was specified within the `ggplot()` call. This makes these mappings *global*, meaning they apply to all subsequent geoms added to the plot unless overridden. However, you can also specify aesthetics *locally* within a specific `geom_` function. For instance, if you only wanted the points to be colored by `cyl` but perhaps add a `geom_text()` layer later that doesn't use `cyl` for color, you could move the `color` mapping into `geom_point()`:

```R
ggplot(data = mtcars, aes(x = hp, y = mpg)) + # Global aesthetics
  geom_point(aes(color = factor(cyl)))        # Local aesthetic for geom_point only
```

Both approaches yield the same visual result for this simple plot, but understanding the difference becomes vital when you start combining multiple geoms, each with potentially different aesthetic requirements. For instance, you might want points colored by one variable and a line colored by another.

One common mistake beginners make is forgetting the `+` sign between `ggplot()` and the `geom_` layer, or between subsequent layers. This will result in an error because R won't know that you're trying to add another component to the plot object. Another frequent issue is misspelling variable names or aesthetic names, which R will flag as "object not found" or "unknown aesthetic." Always double-check your spelling and ensure your variable names match those in your dataset.

Finally, remember that `ggplot2` is designed for iterative exploration. Start simple, get a basic plot working, and then gradually add complexity and detail. This foundational understanding of the Grammar of Graphics and the basic structure of `ggplot2` plots will serve as a robust base for creating much more sophisticated visualizations in the chapters to come.

#### Key concepts
*   **Grammar of Graphics:** A layered, systematic approach to building plots by combining independent components: data, aesthetic mappings, geometric objects, statistical transformations, scales, coordinate systems, and faceting.
*   **`ggplot()`:** The primary function in `ggplot2` used to initialize a plot object, specifying the dataset and global aesthetic mappings.
*   **`aes()` (Aesthetics):** A function used to map variables from your dataset to visual properties of the plot, such as x-axis position, y-axis position, color, size, shape, or transparency.
*   **`geom_` functions (Geometries):** Functions that define the geometric objects used to represent the data on the plot (e.g., `geom_point()` for points, `geom_line()` for lines, `geom_bar()` for bars).
*   **Layers:** The modular components of a `ggplot2` plot, added sequentially using the `+` operator, allowing for complex visualizations to be built step-by-step.
*   **Global vs. Local Aesthetics:** Aesthetics defined in `ggplot()` are global (apply to all geoms), while aesthetics defined within a `geom_` function are local (apply only to that specific geom).
*   **`factor()`:** A function used to convert a variable into a categorical factor, essential for `ggplot2` to treat numeric data as distinct categories for aesthetic mappings like color or shape.

#### Hands-on activity
**Activity: Visualizing Car Performance with `mtcars`**

Your task is to create a scatter plot using the `mtcars` dataset to explore the relationship between engine displacement (`disp`) and quarter-mile time (`qsec`). Additionally, you should use the number of forward gears (`gear`) to differentiate the points by color.

**Instructions:**
1.  Load the `ggplot2` package.
2.  Create a scatter plot where `disp` is on the x-axis and `qsec` is on the y-axis.
3.  Map the `gear` variable to the `color` aesthetic. Remember to treat `gear` as a categorical variable.
4.  Observe the resulting plot and consider what insights it provides about the relationship between these variables, especially concerning the number of gears.

**Code Template:**

```R
# 1. Load the ggplot2 package
# library(ggplot2)

# 2. Create a scatter plot using mtcars data
#    - x-axis: disp (displacement)
#    - y-axis: qsec (quarter-mile time)
#    - color: gear (number of forward gears) - remember to factor it!

# ggplot(data = _____, aes(x = _____, y = _____, color = _____)) +
#   geom_point()
```

#### Assessment idea
1.  **Question:** You want to create a scatter plot of `wt` (weight) vs. `mpg` (miles per gallon) from the `mtcars` dataset. You also want to make all points blue. Which of the following `ggplot2` commands would correctly achieve this?
    a) `ggplot(mtcars, aes(x = wt, y = mpg, color = "blue")) + geom_point()`
    b) `ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point(color = "blue")`
    c) `ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point(aes(color = "blue"))`
    d) `ggplot(mtcars, color = "blue", aes(x = wt, y = mpg)) + geom_point()`

    **Correct Answer:** b) `ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point(color = "blue")`

    **Explanation:**
    *   Option (a) is incorrect because `color = "blue"` inside `aes()` attempts to map the *string* "blue" to a variable, not set a static color. `ggplot2` would create a legend for a variable named "blue" and assign a default color to it.
    *   Option (b) is correct. When you specify `color = "blue"` *outside* of `aes()` but within a `geom_` function, it sets a static aesthetic property for that geom, meaning all points will literally be blue.
    *   Option (c) is incorrect for the same reason as (a); placing `color = "blue"` inside `aes()` maps the string "blue" as a variable.
    *   Option (d) is incorrect because `color = "blue"` is placed directly in `ggplot()` outside `aes()`, which is not where static aesthetic properties are set for geoms. `ggplot()` primarily handles data and global aesthetic mappings.

2.  **Question:** You've run the following code: `ggplot(data = iris, aes(x = Sepal.Length, y = Petal.Length, color = Species))`. What will be the immediate output in RStudio's plot viewer?
    a) A scatter plot showing `Sepal.Length` vs. `Petal.Length` with points colored by `Species`.
    b) An empty plot canvas with axis labels for `Sepal.Length` and `Petal.Length` and a color legend for `Species`.
    c) An error message because a `geom_` function is missing.
    d) A table summarizing the `iris` dataset.

    **Correct Answer:** b) An empty plot canvas with axis labels for `Sepal.Length` and `Petal.Length` and a color legend for `Species`.

    **Explanation:** The `ggplot()` function initializes the plot object, setting up the data and global aesthetic mappings. It defines the coordinate system and prepares the axes and legends based on the `aes()` mapping. However, it does not draw any geometric objects (like points, lines, or bars) by itself. To actually visualize the data, a `geom_` function (e.g., `geom_point()`, `geom_line()`) must be added as a layer using the `+` operator. Without a `geom_` layer, `ggplot2` simply creates the plot framework.

#### AI generation note
Create a 10-minute interactive video lesson. Begin by visually explaining the "Grammar of Graphics" using a simple analogy (e.g., building a house with different components like foundation, walls, roof). Then, transition to a live coding demo in RStudio. Show the installation and loading of `ggplot2`. Walk through creating the first scatter plot of `hp` vs. `mpg` from `mtcars`, progressively adding `geom_point()`. Emphasize the `+` operator. Next, demonstrate mapping `cyl` to `color`, highlighting the importance of `factor()`. Use side-by-side code comparisons to show global vs. local aesthetics. Include a short interactive quiz question after the `factor()` explanation. Visual style should be clean, with clear code highlighting and animated overlays for conceptual explanations. Provide captions and alt text for any diagrams.

---

### Chapter 5.2 — Exploring Common Geometries: Bar Charts, Histograms, and Box Plots

#### Learning objectives
*   Construct bar charts using `geom_bar()` and `geom_col()` to visualize counts and pre-summarized categorical data, respectively.
*   Generate histograms with `geom_histogram()` to effectively display the distribution of a single continuous variable, understanding the impact of `binwidth`.
*   Create box plots using `geom_boxplot()` to compare the distributions of a continuous variable across different categorical groups.
*   Select the appropriate geometric object for common data visualization tasks involving categorical and continuous variables.
*   Identify and troubleshoot common issues related to misusing `geom_bar()` and `geom_histogram()`.

#### Detailed lesson content
Building upon our understanding of `ggplot2`'s foundational principles, we're now ready to explore some of the most common and essential geometric objects. These "geoms" are your primary tools for translating data into visual forms, and choosing the right geom is crucial for effective communication. We'll focus on three workhorses: bar charts for categorical counts, histograms for continuous distributions, and box plots for comparing distributions across groups.

Let's start with **bar charts**. Bar charts are excellent for visualizing the distribution of categorical variables, showing the count of observations within each category. In `ggplot2`, the primary geom for this is `geom_bar()`. When you use `geom_bar()`, you typically only need to map a categorical variable to the `x` aesthetic. `ggplot2` then automatically calculates the counts of each category and maps these counts to the `y` aesthetic.

Consider the `diamonds` dataset, which is also part of `ggplot2` and contains information about diamond prices and characteristics. Let's visualize the distribution of diamond `cut` quality:

```R
library(ggplot2) # Ensure the package is loaded

# Bar chart showing counts of diamond cuts
ggplot(data = diamonds, aes(x = cut)) +
  geom_bar()
```

This code will produce a bar chart where each bar represents a different `cut` quality (Fair, Good, Very Good, Premium, Ideal), and the height of the bar indicates the number of diamonds in that category. Notice that we didn't specify a `y` aesthetic within `aes()`. This is because `geom_bar()` defaults to using `stat_count()`, which computes the counts for you.

However, there's another geom that looks similar but serves a different purpose: `geom_col()`. You use `geom_col()` when your data is *already summarized*, meaning you have a variable that explicitly represents the heights of the bars (e.g., pre-calculated totals or averages). In this case, you *must* specify both `x` and `y` aesthetics.

Let's say we had a dataset where we already calculated the average price for each diamond cut:

```R
# First, let's create a summarized dataset for demonstration
library(dplyr) # For data manipulation

diamond_summary <- diamonds %>%
  group_by(cut) %>%
  summarise(avg_price = mean(price), .groups = 'drop')

# Now, use geom_col() with the summarized data
ggplot(data = diamond_summary, aes(x = cut, y = avg_price)) +
  geom_col()
```

This is a common mistake: trying to use `geom_bar()` when you have pre-summarized data and explicitly want to map a `y` variable, or trying to use `geom_col()` when you just want counts. Remember: `geom_bar()` for counts (one aesthetic, `x`), `geom_col()` for pre-calculated heights (two aesthetics, `x` and `y`).

Next, let's explore **histograms** with `geom_histogram()`. Histograms are indispensable for understanding the distribution of a single *continuous* variable. They divide the data into a series of "bins" and then count how many observations fall into each bin, representing these counts as bars.

Using the `diamonds` dataset again, let's visualize the distribution of diamond prices:

```R
# Histogram of diamond prices
ggplot(data = diamonds, aes(x = price)) +
  geom_histogram()
```

When you run this, `ggplot2` will likely give you a message: "Stat_bin: `binwidth` was not explicitly specified. Picked `binwidth = 500`. Consider specifying `binwidth`." This message is a helpful reminder that `binwidth` is a critical parameter for histograms. It determines the width of each bin, and thus how many bins there are. A smaller `binwidth` creates more bins, showing finer detail but potentially more noise. A larger `binwidth` creates fewer, wider bins, showing a smoother but less detailed overview. Experimenting with `binwidth` is key to finding the most informative representation of your data's distribution.

```R
# Histogram with a specified binwidth
ggplot(data = diamonds, aes(x = price)) +
  geom_histogram(binwidth = 250, fill = "skyblue", color = "black")
```

Here, we've set `binwidth = 250`, and also added `fill` and `color` *outside* of `aes()` to set static colors for the bars and their borders, respectively. This is a good practice for making your histograms more visually appealing and readable. A common mistake here is to forget `binwidth` or choose an inappropriate value, leading to a misleading visualization.

Finally, we turn to **box plots** using `geom_boxplot()`. Box plots are excellent for comparing the distribution of a continuous variable across different categories. They succinctly display the median, quartiles (25th and 75th percentiles), and potential outliers.

Let's compare the distribution of diamond prices across different `cut` qualities:

```R
# Box plot comparing price distribution by cut
ggplot(data = diamonds, aes(x = cut, y = price)) +
  geom_boxplot()
```

This plot will show a box for each `cut` category. The central line in each box represents the median price. The box itself spans from the 25th to the 75th percentile (the interquartile range, or IQR). The "whiskers" extend from the box to the most extreme data point within 1.5 times the IQR from the box. Any points beyond the whiskers are typically plotted individually as potential outliers. Box plots are incredibly useful for quickly identifying differences in central tendency, spread, and the presence of outliers between groups.

A common mistake with box plots is trying to use them with two continuous variables or two categorical variables. Remember, `geom_boxplot()` is designed for one continuous variable (mapped to `y`) and one categorical variable (mapped to `x`). Also, ensure your categorical variable is indeed treated as a factor, especially if it's numerically encoded.

By mastering these three fundamental geoms, you gain powerful tools for initial data exploration and presenting key insights about both categorical and continuous variables. Remember to always consider the type of data you're working with and the question you're trying to answer when selecting your geom.

#### Key concepts
*   **`geom_bar()`:** A geometric object used to create bar charts that display the *counts* of observations for each category of a categorical variable. It automatically calculates counts if only an `x` aesthetic is provided.
*   **`geom_col()`:** A geometric object used to create bar charts when the heights of the bars are *pre-calculated* and provided as a `y` aesthetic. Requires both `x` and `y` aesthetics.
*   **`geom_histogram()`:** A geometric object used to create histograms, which visualize the distribution of a single *continuous* variable by dividing it into bins and showing the frequency of observations in each bin.
*   **`binwidth`:** A crucial parameter for `geom_histogram()` that determines the width of each bin. Choosing an appropriate `binwidth` is essential for accurately representing the data's distribution.
*   **`geom_boxplot()`:** A geometric object used to create box plots, which display the distribution of a *continuous* variable across different categories, showing median, quartiles, and potential outliers.
*   **Interquartile Range (IQR):** The range between the 25th and 75th percentiles, represented by the box in a box plot.
*   **Outliers:** Data points that fall significantly outside the general distribution, often plotted individually beyond the whiskers in a box plot.

#### Hands-on activity
**Activity: Analyzing `mpg` Dataset Distributions**

The `mpg` dataset (also part of `ggplot2`) contains fuel economy data for 38 popular models of cars. Your task is to create three different types of plots to explore this dataset:

1.  **Bar Chart:** Visualize the distribution of the `class` variable (type of car, e.g., compact, SUV, minivan).
2.  **Histogram:** Visualize the distribution of `hwy` (highway miles per gallon). Experiment with different `binwidth` values (e.g., 1, 2, 5) to see how it changes the appearance.
3.  **Box Plot:** Compare the distribution of `cty` (city miles per gallon) across different `drv` types (f = front-wheel drive, r = rear-wheel drive, 4 = 4-wheel drive).

**Instructions:**
*   Load the `ggplot2` package.
*   For each plot type, write the `ggplot2` code using the `mpg` dataset.
*   Add a `fill` color to your bar chart and histogram for better aesthetics.
*   Reflect on what insights each plot provides about the `mpg` dataset.

**Code Template:**

```R
# 1. Load the ggplot2 package
# library(ggplot2)

# 2. Bar Chart of 'class'
# ggplot(data = _____, aes(x = _____)) +
#   geom_bar(fill = "steelblue")

# 3. Histogram of 'hwy' (Experiment with binwidth)
# ggplot(data = _____, aes(x = _____)) +
#   geom_histogram(binwidth = _____, fill = "lightgreen", color = "black")

# 4. Box Plot of 'cty' by 'drv'
# ggplot(data = _____, aes(x = _____, y = _____)) +
#   geom_boxplot(fill = "gold")
```

#### Assessment idea
1.  **Question:** You have a dataset `sales_data` with columns `Region` (categorical: "North", "South", "East", "West") and `TotalRevenue` (numeric). You want to create a bar chart where the height of each bar represents the *sum* of `TotalRevenue` for each `Region`. Which `ggplot2` geom is most appropriate for this task, and why?
    a) `geom_bar()` because it automatically sums the `TotalRevenue` for each region.
    b) `geom_histogram()` because `TotalRevenue` is a continuous variable.
    c) `geom_col()` after summarizing `sales_data` to calculate `sum(TotalRevenue)` per `Region`.
    d) `geom_boxplot()` to compare `TotalRevenue` across regions.

    **Correct Answer:** c) `geom_col()` after summarizing `sales_data` to calculate `sum(TotalRevenue)` per `Region`.

    **Explanation:**
    *   `geom_bar()` is designed to count observations within categories, not sum a different numeric variable. If you used `geom_bar(aes(x = Region, y = TotalRevenue))`, it would produce an error or an unexpected plot because `geom_bar()` expects `y` to be a count (or requires `stat="identity"` which is essentially `geom_col()`).
    *   `geom_histogram()` is for visualizing the distribution of a single continuous variable, not for comparing sums across categories.
    *   `geom_col()` is specifically for when your data is already summarized, and you have a `y` aesthetic that represents the bar height. To use it correctly for this scenario, you would first need to use a data manipulation package like `dplyr` to group `sales_data` by `Region` and then calculate the `sum(TotalRevenue)` for each region. Then, you would pass this summarized data to `ggplot()` and use `geom_col()`.
    *   `geom_boxplot()` is for comparing the *distribution* (median, quartiles, outliers) of a continuous variable across categories, not for showing sums.

2.  **Question:** You are creating a histogram of `carat` (diamond size) from the `diamonds` dataset. You notice that the default plot looks very "chunky" with only a few wide bars, making it hard to see the detailed distribution. What `geom_histogram()` argument should you adjust to make the distribution appear smoother with more bars?
    a) `fill`
    b) `color`
    c) `alpha`
    d) `binwidth`

    **Correct Answer:** d) `binwidth`

    **Explanation:**
    *   `fill` controls the interior color of the bars.
    *   `color` controls the border color of the bars.
    *   `alpha` controls the transparency of the bars.
    *   `binwidth` directly controls the width of each bin in the histogram. To make the distribution appear smoother with more bars (finer detail), you would need to *decrease* the `binwidth`. A smaller `binwidth` means more, narrower bins, which can reveal more nuances in the data's distribution.

#### AI generation note
Produce a 12-minute hands-on lab walkthrough video. Start with a brief animated comparison of `geom_bar()` vs. `geom_col()` using simple datasets (e.g., counts of fruits vs. pre-calculated total sales per fruit). Then, transition to live coding in RStudio using the `diamonds` dataset. First, demonstrate `geom_bar()` for `cut`. Next, show how to summarize data with `dplyr` and then use `geom_col()` for average price by `cut`. Emphasize the `binwidth` parameter for `geom_histogram()` with `price`, showing the visual difference between large and small `binwidth` values. Finally, create a `geom_boxplot()` comparing `price` by `cut`. Throughout, highlight common mistakes (e.g., using `geom_bar()` with `y` aesthetic, forgetting `binwidth`). Include a mini-quiz question after each geom type demonstration. Use clear code overlays and visual cues for `binwidth` changes.

---

### Chapter 5.3 — Customizing Your Visualizations: Labels, Titles, Themes, and Colors

#### Learning objectives
*   Add informative main titles, subtitles, captions, and axis labels to `ggplot2` visualizations using the `labs()` function.
*   Apply and modify built-in `ggplot2` themes to quickly change the overall aesthetic appearance of plots.
*   Manually control color and fill aesthetics using `scale_color_manual()` and `scale_fill_manual()`, and leverage `RColorBrewer` palettes.
*   Adjust axis limits and breaks using `scale_x_continuous()`, `scale_y_continuous()`, and their discrete counterparts.
*   Save `ggplot2` plots to various file formats with specified dimensions and resolution using `ggsave()`.

#### Detailed lesson content
Once you've created the basic structure of your `ggplot2` visualization, the next crucial step is to refine its appearance to make it clear, professional, and impactful. Effective customization ensures your message is conveyed without distraction and that your plot is ready for presentation or publication. This chapter will guide you through adding descriptive text, applying aesthetic themes, controlling colors, adjusting scales, and finally, saving your masterpiece.

Let's begin with **adding text elements**: titles, subtitles, captions, and axis labels. These components provide context and guide your audience's interpretation of the plot. The `labs()` function is your go-to for all these textual additions. You can specify `title`, `subtitle`, `caption`, and also override the default `x` and `y` axis labels.

Using our `mtcars` scatter plot example:

```R
library(ggplot2)

ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
  geom_point() +
  labs(
    title = "Relationship Between Horsepower and MPG by Cylinder Count",
    subtitle = "Data from 1974 Motor Trend US magazine",
    x = "Gross Horsepower (hp)",
    y = "Miles Per Gallon (mpg)",
    color = "Cylinders", # This labels the legend for 'color'
    caption = "Source: mtcars dataset"
  )
```

This significantly improves the readability and interpretability of the plot. Notice how `color = "Cylinders"` within `labs()` allows you to rename the legend title, which is often clearer than the raw variable name.

Next, let's explore **themes**. `ggplot2` comes with several built-in themes that provide a complete set of aesthetic specifications, controlling everything from background color and grid lines to font sizes and legend appearance. Applying a theme is as simple as adding a `theme_` function to your plot. Some popular themes include `theme_minimal()`, `theme_bw()` (black and white), `theme_classic()`, and `theme_dark()`.

```R
ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
  geom_point() +
  labs(
    title = "Relationship Between Horsepower and MPG by Cylinder Count",
    subtitle = "Data from 1974 Motor Trend US magazine",
    x = "Gross Horsepower (hp)",
    y = "Miles Per Gallon (mpg)",
    color = "Cylinders",
    caption = "Source: mtcars dataset"
  ) +
  theme_minimal() # Apply a minimal theme
```

While built-in themes are great starting points, you can also customize individual elements using the `theme()` function. This allows for fine-grained control over virtually every aspect of your plot. For example, to change the plot title's font size and make it bold:

```R
# ... (previous ggplot code) ...
  theme_minimal() +
  theme(
    plot.title = element_text(size = 16, face = "bold", hjust = 0.5), # Center and bold title
    axis.text = element_text(color = "darkgrey"), # Change axis tick label color
    panel.grid.major = element_line(color = "lightgrey", linetype = "dotted") # Customize major grid lines
  )
```

This level of detail can be overwhelming at first, but remember that you can always look up specific `theme()` arguments in the `ggplot2` documentation. A common mistake here is over-customizing, leading to cluttered or inconsistent plots. Strive for clarity and simplicity.

**Colors** are incredibly important for conveying information and enhancing visual appeal. `ggplot2` automatically assigns colors when you map a variable to the `color` or `fill` aesthetic. However, you often need more control. For discrete (categorical) variables, `scale_color_manual()` and `scale_fill_manual()` allow you to specify exact colors. For continuous variables, you might use `scale_color_gradient()` or `scale_color_viridis_c()`.

Let's manually set colors for our `cyl` variable:

```R
ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
  geom_point(size = 3) + # Make points larger to see color better
  scale_color_manual(values = c("4" = "darkgreen", "6" = "orange", "8" = "red")) +
  labs(title = "MPG vs. HP by Cylinders", color = "Cylinders") +
  theme_bw()
```

For a wider range of appealing color palettes, especially for categorical data, the `RColorBrewer` package is an excellent resource. You can integrate its palettes using `scale_color_brewer()` or `scale_fill_brewer()`.

```R
# Make sure RColorBrewer is installed and loaded
# install.packages("RColorBrewer")
library(RColorBrewer)

ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
  geom_point(size = 3) +
  scale_color_brewer(palette = "Set1") + # Use a Brewer palette
  labs(title = "MPG vs. HP by Cylinders", color = "Cylinders") +
  theme_bw()
```

Choosing appropriate colors is crucial. Avoid using too many colors, ensure sufficient contrast, and consider colorblind-friendly palettes. A common mistake is using default `ggplot2` colors without considering their perceptibility or meaning.

**Adjusting Scales** for axes is another vital customization. You might want to set specific axis limits, change the tick marks, or transform the scale (e.g., logarithmic). `scale_x_continuous()` and `scale_y_continuous()` are used for continuous axes, while `scale_x_discrete()` and `scale_y_discrete()` are for categorical axes.

Let's set custom limits and breaks for our axes:

```R
ggplot(data = mtcars, aes(x = hp, y = mpg)) +
  geom_point() +
  scale_x_continuous(limits = c(50, 350), breaks = seq(50, 350, by = 50)) +
  scale_y_continuous(limits = c(5, 35), breaks = seq(5, 35, by = 5)) +
  labs(title = "MPG vs. HP") +
  theme_minimal()
```

Setting `limits` can zoom in on a particular region of interest, but be careful not to truncate important data. `breaks` allows you to control where the tick marks and labels appear.

Finally, once your plot is polished, you'll want to **save it**. The `ggsave()` function is the easiest way to export your `ggplot2` plots to various formats like PNG, JPEG, PDF, or SVG. You can specify the filename, dimensions (width, height), and resolution (dpi).

```R
# Save the last plot created
ggsave("my_beautiful_scatterplot.png", width = 8, height = 6, dpi = 300)

# Or save a specific plot object
my_plot <- ggplot(data = mtcars, aes(x = hp, y = mpg)) + geom_point()
ggsave("my_specific_plot.pdf", plot = my_plot, width = 7, height = 5)
```

`ggsave()` by default saves the *last plot displayed*. If you've created multiple plots and want to save a specific one, assign your plot to an object (e.g., `my_plot`) and then pass that object to the `plot` argument in `ggsave()`. Always specify `width`, `height`, and `dpi` to ensure your saved image has the desired quality and dimensions for its intended use. Forgetting to set `dpi` can result in blurry images, especially for print.

Mastering these customization techniques will elevate your `ggplot2` plots from basic visualizations to compelling data stories. Practice is key to developing an eye for effective design.

#### Key concepts
*   **`labs()`:** A function used to add or modify plot titles, subtitles, captions, and axis/legend labels.
*   **Themes (`theme_minimal()`, `theme_bw()`, etc.):** Pre-defined sets of aesthetic specifications that control the overall visual appearance of a plot (background, grid lines, fonts, etc.).
*   **`theme()`:** A function for making fine-grained, custom adjustments to individual plot elements (e.g., `plot.title`, `axis.text`, `panel.grid`).
*   **`element_text()`:** A helper function used within `theme()` to specify properties of text elements (size, face, color, justification).
*   **`scale_color_manual()` / `scale_fill_manual()`:** Functions used to assign specific, custom colors to discrete categories in `color` or `fill` aesthetics.
*   **`scale_color_brewer()` / `scale_fill_brewer()`:** Functions to apply color palettes from the `RColorBrewer` package, offering perceptually uniform and colorblind-friendly options.
*   **`scale_x_continuous()` / `scale_y_continuous()`:** Functions used to customize continuous x and y axes, including setting limits, breaks, and labels.
*   **`ggsave()`:** A function to save the last displayed `ggplot2` plot (or a specified plot object) to a file in various formats (PNG, PDF, JPEG, SVG) with customizable dimensions and resolution.
*   **`dpi` (dots per inch):** A parameter in `ggsave()` that determines the resolution of raster image files (like PNG, JPEG), crucial for print quality.

#### Hands-on activity
**Activity: Customizing a Diamond Price Histogram**

You've previously created a histogram of diamond prices. Now, let's make it publication-ready by applying various customizations.

**Instructions:**
1.  Start with a histogram of `price` from the `diamonds` dataset, using a `binwidth` of 500.
2.  Add a descriptive `title`, `subtitle`, and `caption` using `labs()`.
3.  Change the x-axis label to "Diamond Price (USD)" and the y-axis label to "Number of Diamonds".
4.  Apply the `theme_light()` theme.
5.  Further customize the theme:
    *   Make the plot title bold and center-aligned.
    *   Change the background color of the plot panel to a very light grey.
    *   Remove the minor grid lines entirely.
6.  Set the `fill` color of the histogram bars to "darkcyan" and the `color` (border) to "black".
7.  Set the x-axis limits to `c(0, 20000)` and ensure breaks appear every $2500.
8.  Save the final plot as a PNG file named "diamond_price_histogram_custom.png" with a width of 10 inches, a height of 6 inches, and a `dpi` of 300.

**Code Template:**

```R
# 1. Load ggplot2
# library(ggplot2)

# 2. Create the base histogram
# my_histogram <- ggplot(data = diamonds, aes(x = price)) +
#   geom_histogram(binwidth = _____, fill = _____, color = _____) +
#   labs(
#     title = "____________________________________",
#     subtitle = "___________________________________",
#     x = "____________________________________",
#     y = "____________________________________",
#     caption = "____________________________________"
#   ) +
#   theme_light() + # Apply a base theme
#   theme(
#     plot.title = element_text(size = _____, face = _____, hjust = _____),
#     panel.background = element_rect(fill = "__________"),
#     panel.grid.minor = element_blank() # Remove minor grid lines
#   ) +
#   scale_x_continuous(limits = c(_____, _____), breaks = seq(_____, _____, by = _____))

# 3. Display the plot (optional, but good for checking)
# print(my_histogram)

# 4. Save the plot
# ggsave("diamond_price_histogram_custom.png", plot = my_histogram, width = _____, height = _____, dpi = _____)
```

#### Assessment idea
1.  **Question:** You have created a `ggplot2` scatter plot and want to change the font size of the x-axis labels and make the plot title red. Which of the following code snippets correctly achieves this?
    a) `+ theme(axis.text.x = element_text(size = 12), plot.title = element_text(color = "red"))`
    b) `+ labs(x = element_text(size = 12), title = element_text(color = "red"))`
    c) `+ scale_x_continuous(text = element_text(size = 12)) + labs(title = "My Plot", color = "red")`
    d) `+ theme_update(axis.text.x = element_text(size = 12), plot.title = element_text(color = "red"))`

    **Correct Answer:** a) `+ theme(axis.text.x = element_text(size = 12), plot.title = element_text(color = "red"))`

    **Explanation:**
    *   Option (a) correctly uses the `theme()` function to modify specific plot elements. `axis.text.x` refers to the x-axis tick labels, and `plot.title` refers to the main plot title. `element_text()` is used to specify text properties like `size` and `color`.
    *   Option (b) is incorrect because `labs()` is for adding/changing text *content* (like the label string), not for styling text elements. `element_text()` is not a valid argument for `labs()`.
    *   Option (c) is incorrect. `scale_x_continuous()` is for axis *data range and breaks*, not text styling. `labs()` is for text content, and `color = "red"` in `labs()` would try to change a legend's color mapping, not the title's text color.
    *   Option (d) uses `theme_update()`, which modifies the *global* theme settings for all subsequent plots in the session, rather than just the current plot. While it might achieve the visual effect, `theme()` is the more appropriate and common way to customize a single plot.

2.  **Question:** You've created a `ggplot2` plot and want to save it as a high-resolution image for a presentation. You use `ggsave("my_plot.png")`. What crucial parameters are missing from this `ggsave()` call to ensure high quality and appropriate dimensions, and why are they important?
    a) `plot` and `format`: Important to specify which plot to save and the file type.
    b) `width` and `height`: Important to control the physical dimensions of the saved image.
    c) `dpi`: Important to control the resolution (dots per inch) of the image, affecting clarity when printed or zoomed.
    d) Both (b) and (c).

    **Correct Answer:** d) Both (b) and (c).

    **Explanation:**
    *   While `ggsave()` will default to saving the last displayed plot and infer the format from the filename extension, explicitly setting `width` and `height` is crucial to control the physical size of the image in inches or centimeters. Without them, the image might be saved with default dimensions that don't fit your presentation layout.
    *   Even more critically for high-resolution output, `dpi` (dots per inch) is essential. For raster formats like PNG, `dpi` determines the pixel density. A low `dpi` (e.g., the default 72 dpi) will result in a blurry or pixelated image when scaled up or printed. For presentations or print, `dpi` values of 300 or higher are typically recommended for sharp, clear visuals. Therefore, both `width`/`height` and `dpi` are crucial for ensuring the saved image meets quality and dimension requirements.

#### AI generation note
Design a 10-minute interactive slide deck. Each slide should introduce a customization technique (labs, themes, theme(), scales, ggsave). Use a consistent base plot (e.g., `mtcars` scatter plot) and show the incremental changes with each customization. For `labs()`, animate the title, subtitle, and caption appearing. For themes, show before-and-after slides of `theme_gray()` vs. `theme_minimal()`. For `theme()`, highlight the specific `element_text()` or `element_rect()` arguments being used. For colors, use `scale_color_manual()` with `cyl` and an `RColorBrewer` example. Conclude with a practical `ggsave()` demonstration, explaining `width`, `height`, and `dpi`. Include a drag-and-drop exercise where learners match `theme()` arguments to plot elements. Ensure high-contrast visuals and clear text.

---

### Chapter 5.4 — Advanced Geometries and Statistical Transformations: Lines, Smoothers, and Faceting

#### Learning objectives
*   Construct line plots using `geom_line()` to visualize trends over a continuous variable, particularly time series data.
*   Add statistical smoothers to plots using `geom_smooth()` to highlight underlying trends and relationships in noisy data.
*   Create multi-panel plots using `facet_wrap()` for one categorical variable and `facet_grid()` for two categorical variables.
*   Combine multiple geometric objects (e.g., points and lines, points and smoothers) within a single `ggplot2` visualization.
*   Understand the role of `group` aesthetic in `geom_line()` and `geom_smooth()` when dealing with multiple series.

#### Detailed lesson content
As you become more comfortable with basic `ggplot2` plots and customization, it's time to expand your toolkit with more advanced geometries and powerful techniques for comparing subsets of your data. This chapter focuses on visualizing trends with lines and smoothers, and creating sophisticated multi-panel plots using faceting.

**Line plots** are indispensable for showing trends, especially over time or any other ordered continuous variable. The `geom_line()` function connects points in the order they appear in the data or after a specified grouping. When plotting multiple lines, it's crucial to tell `ggplot2` how to group the data points into distinct lines using the `group` aesthetic. If you map a categorical variable to `color`, `ggplot2` will often automatically infer the grouping, but explicitly setting `group` can prevent errors.

Let's use the `economics` dataset, which is built into `ggplot2` and contains economic time series data for the US. We'll plot the unemployment rate (`unemploy`) over time (`date`):

```R
library(ggplot2)

# Line plot of unemployment rate over time
ggplot(data = economics, aes(x = date, y = unemploy)) +
  geom_line() +
  labs(
    title = "US Unemployment Rate Over Time",
    x = "Date",
    y = "Unemployment (Thousands)"
  )
```

This simple line plot shows the overall trend. Now, imagine we had multiple series in our data that we wanted to plot as separate lines. For example, if we had unemployment rates for different demographic groups. The `group` aesthetic ensures `geom_line()` draws a separate line for each group.

Next, let's introduce **statistical smoothers** using `geom_smooth()`. This geom is incredibly useful for visualizing the underlying trend or relationship between variables, especially when your data is noisy or has many individual points. `geom_smooth()` can fit various models, with the default often being a LOESS (Locally Estimated Scatterplot Smoothing) curve for smaller datasets or a generalized additive model (GAM) for larger ones, along with a shaded confidence interval.

We can add a smoother to our `mtcars` scatter plot to visualize the trend between `hp` and `mpg`:

```R
ggplot(data = mtcars, aes(x = hp, y = mpg)) +
  geom_point(alpha = 0.6) + # Add transparency to points
  geom_smooth(method = "lm", se = TRUE, color = "blue", fill = "lightblue") + # Add a linear model smoother
  labs(title = "MPG vs. HP with Linear Trend", x = "Horsepower", y = "MPG")
```

Here, `method = "lm"` specifies a linear model, and `se = TRUE` (the default) displays the standard error of the estimate as a shaded confidence interval around the line. You can experiment with other methods like `method = "loess"` for non-linear trends. A common mistake is to misinterpret the confidence interval; it represents the uncertainty in the *estimate of the mean trend*, not the range of individual data points.

Combining multiple geoms is a powerful technique. You can layer `geom_point()` and `geom_smooth()` to show both individual data points and the overall trend, as demonstrated above. The order of adding geoms matters for visual layering: geoms added later will be drawn on top of earlier ones.

Now, let's turn to **faceting**, a technique for creating multi-panel plots that display subsets of your data in separate panels, making comparisons across categories much easier. `ggplot2` offers two main faceting functions: `facet_wrap()` for a single categorical variable and `facet_grid()` for two categorical variables.

**`facet_wrap()`** is ideal when you want to split your plot by one categorical variable. It "wraps" the panels into a grid-like layout, automatically determining the number of rows and columns.

Let's revisit the `diamonds` dataset and visualize the relationship between `carat` and `price`, faceted by `cut` quality:

```R
ggplot(data = diamonds, aes(x = carat, y = price)) +
  geom_point(alpha = 0.2) + # Use transparency due to large number of points
  geom_smooth(method = "lm", se = FALSE, color = "red") + # Add a linear smoother without confidence interval
  facet_wrap(~ cut, scales = "free_y") + # Facet by 'cut'
  labs(
    title = "Diamond Price vs. Carat by Cut Quality",
    x = "Carat",
    y = "Price (USD)"
  )
```

The `~ cut` syntax tells `facet_wrap()` to create a separate panel for each level of the `cut` variable. `scales = "free_y"` is a crucial argument here. By default, `ggplot2` uses fixed scales across all facets to make comparisons easier. However, if the ranges of a variable differ significantly between facets, `scales = "free_y"` (or `free_x`, or `free`) allows each panel to have its own y-axis scale, which can sometimes provide a clearer view of the within-panel trends. A common mistake is forgetting to adjust `scales` when ranges vary widely, leading to compressed data in some panels.

**`facet_grid()`** is used when you want to facet your plot by two categorical variables, arranging the panels in a grid where one variable defines the rows and the other defines the columns.

Let's facet our `diamonds` plot by `cut` (rows) and `clarity` (columns):

```R
ggplot(data = diamonds, aes(x = carat, y = price)) +
  geom_point(alpha = 0.1) +
  geom_smooth(method = "lm", se = FALSE, color = "blue") +
  facet_grid(cut ~ clarity, scales = "free") + # Facet by cut (rows) and clarity (columns)
  labs(
    title = "Diamond Price vs. Carat by Cut and Clarity",
    x = "Carat",
    y = "Price (USD)"
  )
```

The `cut ~ clarity` syntax means `cut` will define the rows and `clarity` will define the columns. `scales = "free"` allows both x and y axes to vary across all panels. `facet_grid()` is particularly powerful for exploring complex interactions between multiple categorical variables and continuous relationships. Be mindful of creating too many facets, as this can lead to very small, unreadable plots.

These advanced techniques allow you to move beyond simple bivariate plots and delve into more complex relationships and comparisons within your data, making your visualizations much more informative and analytical.

#### Key concepts
*   **`geom_line()`:** A geometric object used to create line plots, typically for visualizing trends of a continuous variable (often time) over another continuous variable.
*   **`group` aesthetic:** Used in `geom_line()` and `geom_smooth()` to specify how data points should be grouped into distinct lines or smoothers, especially when multiple series are present.
*   **`geom_smooth()`:** A geometric object that adds a smoothed conditional mean to a plot, visualizing the underlying trend or relationship between variables.
*   **`method` argument (in `geom_smooth()`):** Specifies the statistical method used for smoothing (e.g., `"loess"`, `"lm"` for linear model, `"glm"` for generalized linear model).
*   **`se` argument (in `geom_smooth()`):** Controls whether to display the standard error of the estimate (confidence interval) around the smoothed line.
*   **Faceting:** A technique in `ggplot2` for creating multiple small plots (panels) based on subsets of the data, allowing for easy comparison across different categories.
*   **`facet_wrap()`:** Used for faceting a plot by a single categorical variable, arranging panels into an automatically determined grid. Syntax: `~ variable`.
*   **`facet_grid()`:** Used for faceting a plot by two categorical variables, arranging panels in a grid where one variable defines rows and the other defines columns. Syntax: `row_variable ~ col_variable`.
*   **`scales` argument (in faceting):** Controls whether axis scales are fixed across all panels (`"fixed"`, default) or allowed to vary (`"free_x"`, `"free_y"`, `"free"`).

#### Hands-on activity
**Activity: Exploring `mpg` Data with Lines, Smoothers, and Facets**

Let's return to the `mpg` dataset and apply advanced visualization techniques.

**Instructions:**
1.  **Line Plot with Grouping:** Create a line plot showing `cty` (city miles per gallon) against `displ` (engine displacement). Map `drv` (drive type: f=front, r=rear, 4=4-wheel) to the `color` aesthetic, which will automatically handle grouping for `geom_line()`. Add appropriate labels.
2.  **Scatter Plot with Smoother:** Create a scatter plot of `hwy` (highway MPG) vs. `displ`. Add a `geom_smooth()` layer using the `loess` method, but turn off the standard error (`se = FALSE`).
3.  **Faceting with `facet_wrap()`:** Take the scatter plot from step 2 and facet it by `class` (car type, e.g., compact, SUV). Allow the y-axis scales to be free (`scales = "free_y"`) to better compare trends within each class.
4.  **Faceting with `facet_grid()`:** Create a scatter plot of `hwy` vs. `displ`. Facet this plot by `drv` (rows) and `cyl` (columns). Remember to factor `cyl`. Allow all scales to be free (`scales = "free"`).

**Code Template:**

```R
# 1. Load ggplot2
# library(ggplot2)

# 2. Line Plot of cty vs. displ, colored by drv
# ggplot(data = _____, aes(x = _____, y = _____, color = _____)) +
#   geom_line() +
#   labs(title = "City MPG vs. Displacement by Drive Type",
#        x = "Engine Displacement (L)",
#        y = "City MPG",
#        color = "Drive Type")

# 3. Scatter Plot of hwy vs. displ with LOESS smoother (no SE)
# ggplot(data = _____, aes(x = _____, y = _____)) +
#   geom_point(alpha = 0.7) +
#   geom_smooth(method = "_____", se = _____, color = "red") +
#   labs(title = "Highway MPG vs. Displacement with LOESS Trend",
#        x = "Engine Displacement (L)",
#        y = "Highway MPG")

# 4. Faceting with facet_wrap() (hwy vs. displ by class)
# ggplot(data = _____, aes(x = _____, y = _____)) +
#   geom_point(alpha = 0.7) +
#   geom_smooth(method = "lm", se = FALSE, color = "blue") +
#   facet_wrap(~ _____, scales = "_____") +
#   labs(title = "Highway MPG vs. Displacement by Car Class",
#        x = "Engine Displacement (L)",
#        y = "Highway MPG")

# 5. Faceting with facet_grid() (hwy vs. displ by drv and cyl)
# ggplot(data = _____, aes(x = _____, y = _____, color = factor(_____))) + # Add color for clarity
#   geom_point(alpha = 0.7) +
#   geom_smooth(method = "lm", se = FALSE) +
#   facet_grid(_____ ~ _____, scales = "_____") +
#   labs(title = "Highway MPG vs. Displacement by Drive Type and Cylinders",
#        x = "Engine Displacement (L)",
#        y = "Highway MPG",
#        color = "Cylinders")
```

#### Assessment idea
1.  **Question:** You are analyzing a dataset that contains daily stock prices for three different companies over a year. You want to create a plot that shows the stock price trend for each company on the same graph, with each company represented by a distinct line. Which `ggplot2` code snippet correctly achieves this, assuming your data has `Date`, `Company`, and `Price` columns?
    a) `ggplot(data, aes(x = Date, y = Price)) + geom_line(aes(color = Company))`
    b) `ggplot(data, aes(x = Date, y = Price, group = Company)) + geom_line()`
    c) `ggplot(data, aes(x = Date, y = Price, color = Company, group = Company)) + geom_line()`
    d) `ggplot(data, aes(x = Date, y = Price)) + facet_wrap(~ Company) + geom_line()`

    **Correct Answer:** c) `ggplot(data, aes(x = Date, y = Price, color = Company, group = Company)) + geom_line()`

    **Explanation:**
    *   Option (a) is close, but `geom_line()` often requires an explicit `group` aesthetic when you have multiple lines that are not naturally ordered by a single variable. While `color` often implies grouping, explicitly defining `group` is safer and more robust, especially if `Company` is not a factor or if `Date` has gaps.
    *   Option (b) correctly uses `group = Company` but doesn't assign a `color` aesthetic, so all lines would be the same default color, making them hard to distinguish.
    *   Option (c) is the most robust and correct. Mapping `Company` to `color` ensures each company gets a distinct color, and mapping `Company` to `group` explicitly tells `geom_line()` to draw separate lines for each company, preventing `ggplot2` from trying to connect all points into a single, potentially messy line.
    *   Option (d) would create separate panels for each company using faceting, not draw all lines on the same graph.

2.  **Question:** You have a scatter plot showing the relationship between two continuous variables, `A` and `B`. You want to visualize this relationship separately for different categories of a third variable, `C`, and a fourth variable, `D`, arranged in a grid where `C` defines the rows and `D` defines the columns. Additionally, you want each sub-plot to have its own independent x and y axis scales. Which `ggplot2` function and argument combination would you use?
    a) `facet_wrap(~ C + D, scales = "free")`
    b) `facet_grid(C ~ D, scales = "free")`
    c) `facet_wrap(C ~ D, scales = "free_xy")`
    d) `facet_grid(C + D, scales = "free")`

    **Correct Answer:** b) `facet_grid(C ~ D, scales = "free")`

    **Explanation:**
    *   `facet_grid()` is the correct function for faceting by two variables, arranging them into rows and columns. The syntax `C ~ D` correctly assigns `C` to rows and `D` to columns.
    *   `scales = "free"` correctly specifies that both the x and y axis scales should be independent for each panel.
    *   Option (a) uses `facet_wrap()`, which is for one variable or a combined variable, and its syntax `~ C + D` is not standard for two independent faceting variables in `facet_wrap()`.
    *   Option (c) uses `facet_wrap()` incorrectly and `scales = "free_xy"` is not a valid argument for `scales` (it should be `free_x`, `free_y`, or `free`).
    *   Option (d) uses `facet_grid()` but the syntax `C + D` is incorrect for defining rows and columns; it should be `C ~ D`.

#### AI generation note
Create a 12-minute interactive code demo. Start with a live coding session demonstrating `geom_line()` using the `economics` dataset, emphasizing the `group` aesthetic if multiple lines were present. Then, transition to `geom_smooth()` with the `mtcars` dataset, showing `method = "lm"` and `method = "loess"`, and explaining the confidence interval (`se`). Next, introduce `facet_wrap()` using `diamonds` data (carat vs. price by cut), clearly showing the effect of `scales = "fixed"` vs. `scales = "free_y"`. Finally, demonstrate `facet_grid()` with `mpg` data (hwy vs. displ by drv and cyl), explaining the row ~ col syntax and `scales = "free"`. Include interactive code challenges after each geom/facet type where learners modify parameters (e.g., change `method`, `scales`). Use clear code highlighting and animated overlays to explain concepts like `group` and `se`.

---

### Chapter 5.5 — Interactive Visualizations and Best Practices for Effective Communication

#### Learning objectives
*   Convert static `ggplot2` plots into interactive web-based visualizations using the `plotly` package.
*   Articulate key principles of effective data visualization, including clarity, accuracy, and honesty.
*   Identify common pitfalls and misleading practices in chart design.
*   Apply best practices for choosing appropriate chart types, using color effectively, and simplifying complex information.
*   Understand the ethical considerations and responsibilities when creating and presenting data visualizations.

#### Detailed lesson content
You've now mastered the art of creating static, insightful, and beautiful visualizations with `ggplot2`. But in today's data-rich world, static images sometimes fall short when you need to explore complex data or engage an audience interactively. This chapter introduces you to making your `ggplot2` plots interactive and, equally important, guides you through the principles of effective and ethical data visualization.

First, let's explore **interactive visualizations**. While `ggplot2` excels at static plots, its output can be easily transformed into interactive web-based graphics using packages like `plotly`. The `plotly` package provides a function `ggplotly()` that takes a `ggplot2` object and converts it into an interactive Plotly graph, complete with tooltips, zooming, panning, and toggling of series. This can be incredibly powerful for data exploration and dynamic presentations.

To use `ggplotly()`, you first need to install and load the `plotly` package. Then, simply pass your `ggplot2` object to the `ggplotly()` function:

```R
# install.packages("plotly")
library(plotly)
library(ggplot2)

# Create a ggplot2 object
my_interactive_plot <- ggplot(data = mtcars, aes(x = hp, y = mpg, color = factor(cyl), text = paste("Model:", rownames(mtcars), "\nHP:", hp, "\nMPG:", mpg))) +
  geom_point(alpha = 0.7, size = 3) +
  labs(title = "Interactive MPG vs. HP by Cylinders", x = "Horsepower", y = "MPG", color = "Cylinders") +
  theme_minimal()

# Convert the ggplot2 object to an interactive plotly object
ggplotly(my_interactive_plot, tooltip = "text")
```

When you run `ggplotly()`, it will render an interactive plot in your RStudio Viewer pane (or open in a browser). You can hover over points to see details (especially if you've added a `text` aesthetic for custom tooltips, as shown above), zoom in on specific regions, and pan around. This interactivity significantly enhances the exploratory capabilities of your visualizations. It's a common mistake to forget to specify the `tooltip` argument in `ggplotly()` if you want custom information to appear on hover; otherwise, it will default to showing mapped aesthetics.

Beyond the technical aspects of creating plots, understanding **best practices for effective communication** is paramount. A beautiful plot is useless if it's misleading or unclear. Here are some core principles:

1.  **Clarity:** Your visualization should be easy to understand at a glance. Avoid clutter, excessive colors, or too much information. Use clear titles, labels, and legends. Simplify where possible without losing crucial detail.
2.  **Accuracy:** The visual representation must faithfully reflect the underlying data. This means using appropriate scales, starting axes at zero when representing quantities (especially for bar charts), and avoiding distorted proportions.
3.  **Honesty/Integrity:** This is an **ethical consideration**. Data visualization can be a powerful tool for persuasion, but it also carries the risk of manipulation. Never intentionally mislead your audience. Common pitfalls include:
    *   **Truncated Y-axes:** Starting a y-axis at a non-zero value for bar charts can exaggerate differences between categories. While sometimes acceptable for line charts to highlight trends, it must be clearly indicated.
    *   **Cherry-picking data:** Only showing data that supports a particular narrative.
    *   **Misleading chart types:** Using a pie chart for too many categories, or a 3D chart that distorts perception.
    *   **Poor color choices:** Using colors that imply a relationship where none exists (e.g., red/green for unrelated categories), or using non-colorblind-friendly palettes.
    *   **Over-complication:** Too many variables, too many colors, too many lines can make a plot unreadable.

To avoid these pitfalls, always ask yourself: "What story is this plot telling? Is it the *true* story of the data? Could someone misinterpret this?"

**Choosing the Right Chart Type:** This is foundational.
*   **Relationships between two continuous variables:** Scatter plots (`geom_point()`), sometimes with smoothers (`geom_smooth()`).
*   **Distribution of a single continuous variable:** Histograms (`geom_histogram()`), density plots (`geom_density()`).
*   **Distribution of a single categorical variable:** Bar charts (`geom_bar()`).
*   **Comparison of a continuous variable across categories:** Box plots (`geom_boxplot()`), violin plots (`geom_violin()`).
*   **Trends over time:** Line plots (`geom_line()`).
*   **Composition of a whole:** Stacked bar charts, proportion plots (though pie charts are often discouraged for their perceptual difficulties).

**Effective Use of Color:**
*   Use color to highlight key information or differentiate categories, not just for decoration.
*   For categorical data, use distinct colors. `RColorBrewer` palettes are excellent.
*   For continuous data, use sequential or diverging color gradients.
*   Always consider accessibility; ensure sufficient contrast and use colorblind-friendly palettes.
*   Use a consistent color scheme across related plots.

**Simplifying Complexity:**
*   **Faceting:** As learned in the previous chapter, faceting breaks down complex relationships into simpler, comparable panels.
*   **Aggregation:** Summarize data before plotting if individual data points are not necessary (e.g., plot average sales per month instead of every single sale).
*   **Annotation:** Add text labels directly to the plot to draw attention to specific points or explain key features.
*   **Interactive elements:** Allow users to filter, zoom, or hover for details, reducing initial information overload.

In conclusion, `ggplot2` provides the tools to create virtually any visualization you can imagine. However, the true power lies not just in the code, but in your ability to apply sound design principles and ethical considerations to communicate your data stories clearly, accurately, and honestly. This final step transforms raw data into actionable insights.

#### Key concepts
*   **Interactive Visualization:** A dynamic plot that allows users to interact with the data (e.g., zoom, pan, hover for details), enhancing exploration and engagement.
*   **`plotly` package:** An R package that provides tools for creating interactive web-based graphics, including the `ggplotly()` function to convert `ggplot2` objects.
*   **`ggplotly()`:** A function from the `plotly` package that converts a static `ggplot2` plot into an interactive Plotly object.
*   **`tooltip` argument (in `ggplotly()`):** Used to customize the information displayed when a user hovers over a data point in an interactive plot.
*   **Clarity (Visualization Principle):** The ease with which a visualization can be understood, emphasizing simplicity, clear labels, and minimal clutter.
*   **Accuracy (Visualization Principle):** The faithfulness of the visual representation to the underlying data, avoiding distortion of scales or proportions.
*   **Honesty/Integrity (Ethical Principle):** The commitment to presenting data truthfully, avoiding intentional manipulation or misleading representations.
*   **Truncated Y-axes:** A common misleading practice where the y-axis of a bar chart does not start at zero, exaggerating differences.
*   **Chart Type Selection:** The process of choosing the most appropriate visualization type based on the data type and the message to be conveyed.
*   **Color Effectiveness:** Using color strategically to differentiate, highlight, and convey meaning, while considering accessibility and consistency.

#### Hands-on activity
**Activity: Making an Interactive Diamond Price Plot and Critiquing a Misleading Chart**

This activity has two parts:
1.  **Interactive Plot:** Create a scatter plot of `carat` vs. `price` from the `diamonds` dataset. Map `cut` to the `color` aesthetic. Add a custom `text` aesthetic to the `aes()` mapping so that when you hover over a point, it displays the diamond's `carat`, `price`, and `cut`. Then, convert this `ggplot2` plot into an interactive `plotly` object using `ggplotly()`.
2.  **Critique a Misleading Chart:** Imagine you are presented with the following bar chart, which claims to show "Company A's Revenue Growth."

    ```R
    # This is the misleading chart setup for critique
    misleading_data <- data.frame(
      Year = c("2020", "2021", "2022", "2023"),
      Revenue = c(95, 98, 102, 105) # Values are close but y-axis will exaggerate
    )

    misleading_chart <- ggplot(misleading_data, aes(x = Year, y = Revenue)) +
      geom_col(fill = "darkblue") +
      scale_y_continuous(limits = c(90, 110)) + # Truncated y-axis
      labs(
        title = "Company A's Revenue Growth (Misleading)",
        subtitle = "Revenue in millions USD",
        y = "Revenue",
        x = "Year"
      ) +
      theme_minimal()
    print(misleading_chart)
    ```
    Your task is to write a brief paragraph (3-5 sentences) explaining why this chart is misleading and what specific change you would make to improve its honesty and accuracy.

**Code Template (Part 1):**

```R
# Part 1: Interactive Plot
# 1. Load plotly and ggplot2
# library(plotly)
# library(ggplot2)

# 2. Create a ggplot2 scatter plot of carat vs. price, colored by cut
#    Add a custom 'text' aesthetic for tooltips (e.g., paste("Carat:", carat, "\nPrice:", price, "\nCut:", cut))
# my_diamond_plot <- ggplot(data = diamonds, aes(x = _____, y = _____, color = _____, text = paste("Carat:", _____, "\nPrice:", _____, "\nCut:", _____))) +
#   geom_point(alpha = 0.6, size = 2) +
#   labs(title = "Interactive Diamond Price vs. Carat by Cut",
#        x = "Carat",
#        y = "Price (USD)",
#        color = "Cut") +
#   theme_light()

# 3. Convert to interactive plotly object
# ggplotly(my_diamond_plot, tooltip = "text")

# Part 2: Critique (no code needed, just written response)
# Write your critique here:
# ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
library(ggplot2)
library(dplyr) # For data manipulation

# Part 1: Interactive Plot
my_diamond_plot <- ggplot(data = diamonds, aes(x = carat, y = price, color = cut, text = paste("Carat:", carat, "\nPrice:", price, "\nCut:", cut))) +
  geom_point(alpha = 0.6, size = 2) +
  labs(title = "Interactive Diamond Price vs. Carat by Cut",
       x = "Carat",
       y = "Price (USD)",
       color = "Cut") +
  theme_light()

# To make it interactive, you would run:
# ggplotly(my_diamond_plot, tooltip = "text")

# Part 2: Critique (no code needed, just written response)
# This is the misleading chart setup for critique
misleading_data <- data.frame(
  Year = c("2020", "2021", "2022", "2023"),
  Revenue = c(95, 98, 102, 105) # Values are close but y-axis will exaggerate
)

misleading_chart <- ggplot(misleading_data, aes(x = Year, y = Revenue)) +
  geom_col(fill = "darkblue") +
  scale_y_continuous(limits = c(90, 110)) + # Truncated y-axis
  labs(
    title = "Company A's Revenue Growth (Misleading)",
    subtitle = "Revenue in millions USD",
    y = "Revenue",
    x = "Year"
  ) +
  theme_minimal()
print(misleading_chart)

# Your critique goes here:
```

#### Assessment idea
1.  **Question:** You have a `ggplot2` scatter plot of `x` vs. `y` with points colored by `category`. You want to convert this into an interactive plot where hovering over a point shows the `x`, `y`, and `category` values. Which `plotly` function and argument combination would you use, and what is the crucial `ggplot2` aesthetic you should add?
    a) `plotly_plot(my_ggplot, hover_info = "all")`
    b) `ggplotly(my_ggplot, hovertemplate = "x: %{x}<br>y: %{y}<br>category: %{category}")`
    c) `ggplotly(my_ggplot, tooltip = "text")` after adding `aes(text = paste("X:", x, "Y:", y, "Category:", category))` to `my_ggplot`.
    d) `interactive_ggplot(my_ggplot, hover_data = c("x", "y", "category"))`

    **Correct Answer:** c) `ggplotly(my_ggplot, tooltip = "text")` after adding `aes(text = paste("X:", x, "Y:", y, "Category:", category))` to `my_ggplot`.

    **Explanation:**
    *   The `plotly` package's `ggplotly()` function is used to convert `ggplot2` objects.
    *   To display custom information on hover, you first need to map that information to the `text` aesthetic *within your original `ggplot2` call*. This creates a hidden variable that `ggplotly()` can then access.
    *   Then, by setting `tooltip = "text"` in `ggplotly()`, you instruct `plotly` to use the content of this `text` aesthetic for the hover tooltip.
    *   Options (a), (b), and (d) use incorrect function names or argument syntax for `plotly` in R. While `hovertemplate` exists in Plotly.js, `ggplotly()` in R typically leverages the `text` aesthetic for custom tooltips.

2.  **Question:** A bar chart displays the market share of five tech companies, with company A showing 20% and company B showing 22%. The y-axis starts at 18% and goes up to 25%. What is the primary ethical concern with this visualization, and what would be the best way to address it?
    a) The colors are not colorblind-friendly; use `RColorBrewer` palettes.
    b) The chart is too cluttered; simplify labels and remove grid lines.
    c) The y-axis is truncated, exaggerating the difference between company A and B's market share; the y-axis should start at 0%.
    d) A bar chart is inappropriate for market share; a pie chart should be used instead.

    **Correct Answer:** c) The y-axis is truncated, exaggerating the difference between company A and B's market share; the y-axis should start at 0%.

    **Explanation:**
    *   For bar charts representing quantities (like market share), starting the y-axis at a non-zero value (truncation) visually exaggerates the differences between the bars. A 2% difference (20% vs. 22%) appears much larger when the axis starts at 18% than when it starts at 0%. This is a classic example of a misleading visualization.
    *   The best way to address this is to ensure the y-axis starts at 0% for bar charts to provide an accurate visual comparison of magnitudes.
    *   While colorblind-friendliness (a) and clutter (b) are valid visualization concerns, they are not the *primary* ethical concern related to the misleading representation of data magnitude in this specific scenario.
    *   Option (d) is generally incorrect; while pie charts show composition, bar charts are often preferred for comparing categories, especially when there are more than a few, as they allow for easier comparison of lengths than angles.

#### AI generation note
Create a 15-minute mixed-format lesson. Start with a 3-minute animated explanation of why interactivity is useful, showing a static plot transforming into an interactive one with hovering details and zooming. Then, transition to a 5-minute live coding demo in RStudio, demonstrating the `plotly::ggplotly()` function with the `diamonds` dataset, explicitly showing how to add a `text` aesthetic for custom tooltips and how to interact with the resulting plot. The second half (7 minutes) should be a professional, encouraging lecture with a slide deck focusing on "Best Practices for Effective Communication." Use visual examples of good vs. bad charts (e.g., a bar chart with a truncated y-axis vs. one starting at zero, a cluttered plot vs. a clean one). Emphasize ethical considerations and the responsibility of the data visualizer. Include a reflection prompt at the end asking learners to critique a provided "bad" chart example. Ensure all visuals have alt text and the lecture has a transcript.

---

## Module 6: Importing Data and Basic Statistics

**Module Goal:** To equip learners with the essential skills to import diverse data formats into R, perform initial data inspection and cleaning, and apply fundamental descriptive and inferential statistical techniques to derive meaningful insights.

## Chapter 6.1 — Importing Data from CSV and Excel

#### Learning objectives
*   Understand the importance of data import and common data storage formats.
*   Import data from Comma Separated Values (CSV) files using base R and `readr` functions.
*   Handle various CSV import parameters such as delimiters, headers, and missing values.
*   Import data from Microsoft Excel files using the `readxl` package, specifying sheets and ranges.
*   Identify and troubleshoot common data import issues like file path errors and encoding problems.

#### Detailed lesson content
Welcome to the crucial first step in any data analysis project: getting your data into R! Without successfully importing your data, all the powerful analysis and visualization tools we've learned so far are inaccessible. Data often lives in various formats, and mastering the import process is fundamental to becoming a proficient R user. We'll start with two of the most ubiquitous formats: CSV (Comma Separated Values) and Excel spreadsheets.

CSV files are plain text files where values are separated by a delimiter, most commonly a comma, but sometimes a semicolon, tab, or pipe. They are lightweight and universally supported, making them a popular choice for data exchange. R provides excellent built-in functions for reading CSVs. The most common base R function is `read.csv()`. Let's say you have a file named `sales_data.csv` in your working directory. You can import it with a simple command:

```R
# Assuming sales_data.csv is in your current working directory
sales_data_base <- read.csv("sales_data.csv")
head(sales_data_base)
```

By default, `read.csv()` assumes your file uses commas as separators and that the first row contains column headers. It also converts character strings to factors by default, which can sometimes be a subtle source of frustration if you're not expecting it. If your file uses a different delimiter, say a semicolon, you would use the `sep` argument: `read.csv("data.csv", sep = ";")`. If your file doesn't have a header row, you'd specify `header = FALSE`. Missing values in CSVs are often represented by empty strings or specific codes like "NA" or "NULL". `read.csv()` is quite smart about "NA" but for other representations, you can use the `na.strings` argument: `read.csv("data.csv", na.strings = c("NULL", "Missing"))`.

While `read.csv()` is perfectly functional, the `readr` package, part of the Tidyverse, offers a more consistent and often faster alternative, especially for large files. The `read_csv()` function from `readr` is similar to `read.csv()` but has slightly different defaults, such as *not* converting strings to factors by default, which is often preferred for modern data workflows. It also provides more informative messages about column types.

```R
# Install and load the readr package if you haven't already
# install.packages("readr")
library(readr)

sales_data_tidy <- read_csv("sales_data.csv")
head(sales_data_tidy)

# Example with a different delimiter (e.g., tab-separated)
# sales_data_tsv <- read_tsv("sales_data.tsv") # Or read_delim("data.txt", delim = "\t")
```

A common mistake beginners make is providing an incorrect file path. R needs to know exactly where your file is located. If the file isn't in your current working directory (which you can check with `getwd()`), you'll need to provide the full path to the file, or set your working directory using `setwd()`. For example, on Windows: `read_csv("C:/Users/YourName/Documents/data/sales_data.csv")`. On macOS/Linux: `read_csv("/Users/YourName/Documents/data/sales_data.csv")`. Always use forward slashes (`/`) even on Windows for consistency in R. Another frequent issue is character encoding. If you see strange characters in your imported data, it might be an encoding mismatch. You can try specifying the `locale` argument in `read_csv()` or `encoding` in `read.csv()`, for example, `read_csv("data.csv", locale = locale(encoding = "latin1"))`.

Moving on to Excel files, these are more complex than CSVs as they can contain multiple sheets, formatting, formulas, and even macros. R doesn't have built-in functions for Excel files, but the `readxl` package provides robust capabilities. First, you'll need to install it if you haven't already: `install.packages("readxl")`.

Once installed and loaded, `read_excel()` is your primary function. It intelligently guesses the file type (XLS or XLSX) and works with both.

```R
# install.packages("readxl")
library(readxl)

# Import the first sheet of an Excel file
customer_data <- read_excel("customer_transactions.xlsx")
head(customer_data)

# Import a specific sheet by name or number
product_catalog <- read_excel("customer_transactions.xlsx", sheet = "Product Catalog")
# Or by sheet number: product_catalog <- read_excel("customer_transactions.xlsx", sheet = 2)
head(product_catalog)

# Import a specific range within a sheet
# This is useful if your data doesn't start at A1 or has extraneous rows/columns
subset_data <- read_excel("customer_transactions.xlsx", sheet = "Sales", range = "A5:D20")
head(subset_data)
```

When working with Excel files, common pitfalls include specifying the wrong sheet name (case-sensitive!) or number, or trying to read a sheet that contains merged cells or complex layouts, which can sometimes lead to unexpected data structures. It's always a good practice to open the Excel file and inspect its structure before attempting to import it into R. Be mindful of hidden rows or columns in Excel that might inadvertently be imported if not explicitly excluded using the `range` argument.

In summary, mastering data import is a foundational skill. Always double-check your file paths, understand your data's structure (delimiters, headers, missing value representations), and choose the appropriate function (`read.csv`, `read_csv`, `read_excel`). With these tools, you'll be able to bring almost any tabular data into R for analysis.

#### Key concepts
*   **CSV (Comma Separated Values):** A plain text file format where data values are separated by a delimiter, typically a comma.
*   **Delimiter:** The character used to separate values in a text file (e.g., comma, semicolon, tab).
*   **`read.csv()`:** A base R function for importing data from CSV files.
*   **`read_csv()`:** A `readr` package function for importing CSV files, often preferred for its speed and consistent defaults (e.g., no automatic string-to-factor conversion).
*   **`readxl` package:** An R package specifically designed for importing data from Microsoft Excel files (both .xls and .xlsx formats).
*   **`read_excel()`:** The primary function in the `readxl` package for importing data from Excel spreadsheets.
*   **Working Directory:** The default location where R looks for files to read and saves files it writes. Can be checked with `getwd()` and changed with `setwd()`.
*   **Character Encoding:** The system used to represent characters in a digital format. Mismatches can lead to garbled text during import.

#### Hands-on activity
**Activity: Import and Inspect Diverse Data**

1.  **Create Sample Files:**
    *   **`students.csv`:** Create a text file named `students.csv` with the following content (ensure it's comma-separated):
        ```csv
        StudentID,Name,Age,Major,GPA
        101,Alice,20,Computer Science,3.8
        102,Bob,21,Mathematics,3.5
        103,Charlie,19,Physics,3.9
        104,Diana,20,Biology,NA
        105,Eve,22,Chemistry,3.7
        ```
    *   **`grades.xlsx`:** Create an Excel file named `grades.xlsx`.
        *   On Sheet1, name it "Exam Scores" and put the following data:
            ```
            Student,Exam1,Exam2,Final
            Alice,85,90,92
            Bob,78,82,80
            Charlie,92,88,95
            Diana,65,70,68
            Eve,88,91,90
            ```
        *   On Sheet2, name it "Project Scores" and put the following data (starting from cell B3):
            ```
            (empty row)
            (empty row)
            Student,Project1,Project2
            Alice,95,98
            Bob,85,87
            Charlie,90,92
            ```

2.  **R Code Template:** Use the following template to import and inspect your data.

    ```R
    # Ensure you have readr and readxl installed:
    # install.packages(c("readr", "readxl"))

    library(readr)
    library(readxl)

    # --- Part 1: Import students.csv ---
    # 1.1 Use read_csv() to import students.csv
    students_data <- # YOUR CODE HERE
    print("--- Students Data (read_csv) ---")
    print(head(students_data))
    print(str(students_data))

    # 1.2 Now, try importing students.csv using base R's read.csv()
    # Pay attention to the 'stringsAsFactors' default difference!
    students_data_base <- # YOUR CODE HERE
    print("--- Students Data (read.csv) ---")
    print(head(students_data_base))
    print(str(students_data_base))

    # --- Part 2: Import grades.xlsx ---
    # 2.1 Import the "Exam Scores" sheet
    exam_scores <- # YOUR CODE HERE
    print("--- Exam Scores ---")
    print(head(exam_scores))
    print(str(exam_scores))

    # 2.2 Import the "Project Scores" sheet, but only the actual data range
    # (i.e., exclude the empty rows and ensure correct headers)
    project_scores <- # YOUR CODE HERE
    print("--- Project Scores ---")
    print(head(project_scores))
    print(str(project_scores))
    ```

#### Assessment idea
1.  **Question:** You are given a file named `survey_results.txt` with the following content:
    ```
    ID|Question1|Question2|Score
    101|Yes|No|85
    102|No|Yes|72
    103|Yes|Yes|90
    ```
    Which R command would correctly import this data, ensuring column headers are recognized and `ID` is treated as a character string, not a factor?
    A) `read.csv("survey_results.txt", sep = "|", stringsAsFactors = FALSE)`
    B) `read_delim("survey_results.txt", delim = "|", col_types = cols(ID = col_character()))`
    C) `read_excel("survey_results.txt", sheet = 1)`
    D) `read_table("survey_results.txt")`

    **Correct Answer:** B) `read_delim("survey_results.txt", delim = "|", col_types = cols(ID = col_character()))`
    **Explanation:**
    *   The file uses `|` as a delimiter, so `sep = "|"` or `delim = "|"` is necessary.
    *   `read.csv()` (Option A) by default converts strings to factors, and while `stringsAsFactors = FALSE` can prevent this, `read_delim()` from `readr` offers more explicit control over column types, making it a more robust choice for specifying `ID` as a character.
    *   `read_excel()` (Option C) is for Excel files, not plain text files.
    *   `read_table()` (Option D) is for space-separated files, which is not the case here.
    *   `read_delim()` from the `readr` package is designed for arbitrary delimiters and allows explicit type specification using `col_types`, making option B the most precise and robust solution.

2.  **Question:** You are trying to import an Excel file named `quarterly_report.xlsx`. The data you need is on a sheet named "Q3 Sales" and starts from cell `C10` down to `F50`. Which `readxl` command would correctly import only this specific range?
    A) `read_excel("quarterly_report.xlsx", sheet = "Q3 Sales", range = "C10:F50")`
    B) `read_excel("quarterly_report.xlsx", sheet = "Q3 Sales", start_row = 10, start_col = 3, end_row = 50, end_col = 6)`
    C) `read_excel("quarterly_report.xlsx", sheet = "Q3 Sales", skip = 9, n_max = 41, col_names = TRUE)`
    D) `read_csv("quarterly_report.xlsx", sheet = "Q3 Sales", range = "C10:F50")`

    **Correct Answer:** A) `read_excel("quarterly_report.xlsx", sheet = "Q3 Sales", range = "C10:F50")`
    **Explanation:**
    *   The `read_excel()` function from the `readxl` package is the correct tool for Excel files.
    *   The `sheet` argument correctly identifies the desired sheet by name.
    *   The `range` argument directly accepts an Excel-style cell range string (e.g., "C10:F50"), making it the most straightforward and accurate way to specify the exact data block needed.
    *   Option B uses non-existent arguments for `read_excel`.
    *   Option C uses `skip` and `n_max` which can work but are less precise for a specific rectangular range and might require more calculation.
    *   Option D incorrectly uses `read_csv` for an Excel file.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 3-minute animated explanation of CSV vs. Excel, showing their internal structure differences (plain text vs. structured workbook). Then, transition to a 7-minute live coding demonstration in RStudio. Show importing `students.csv` with both `read.csv()` and `read_csv()`, highlighting the `stringsAsFactors` difference with `str()`. Demonstrate importing `grades.xlsx` using `read_excel()`, showing how to select sheets by name and number, and specifically how to use the `range` argument to import the "Project Scores" data correctly from `B3:D5` (or whatever the actual range is in the example). Include common error messages for incorrect file paths and demonstrate how to fix them. The interactive element should be a small code challenge to import a slightly malformed CSV (e.g., semicolon-separated, no header). Ensure captions and alt text for any diagrams.

## Chapter 6.2 — Importing Data from Databases and APIs

#### Learning objectives
*   Connect R to relational databases (e.g., SQLite, PostgreSQL, MySQL) using the `DBI` package.
*   Execute SQL queries from R to retrieve data from databases.
*   Understand the basics of interacting with Web APIs to fetch data.
*   Use the `httr` and `jsonlite` packages to make HTTP requests and parse JSON responses.
*   Implement basic authentication for API requests.

#### Detailed lesson content
Beyond static files like CSVs and Excel sheets, a vast amount of data resides in structured databases or is dynamically served through web APIs. Connecting R directly to these sources allows for real-time data access, automation, and integration into larger data pipelines. This chapter will guide you through connecting to common relational databases and fetching data from web APIs, expanding your data import capabilities significantly.

Relational databases, such as SQLite, PostgreSQL, MySQL, and SQL Server, are fundamental to many applications. R interacts with these databases primarily through the `DBI` package, which provides a standardized interface. Specific database drivers (like `RSQLite`, `RPostgres`, `RMySQL`) then handle the low-level communication for each database type. For simplicity, we'll often use `RSQLite` as it doesn't require a separate database server setup, making it ideal for learning and prototyping.

First, you'll need to install the `DBI` and the specific driver package for your database. For SQLite:

```R
# install.packages(c("DBI", "RSQLite"))
library(DBI)
library(RSQLite)
```

The process generally involves three steps:
1.  **Connect:** Establish a connection to the database.
2.  **Query:** Send SQL commands to the database.
3.  **Disconnect:** Close the connection when done.

Let's create a temporary SQLite database in memory and add some data to demonstrate:

```R
# 1. Connect to an in-memory SQLite database
con <- dbConnect(RSQLite::SQLite(), ":memory:")

# Create a sample table and insert data
dbExecute(con, "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary REAL)")
dbExecute(con, "INSERT INTO employees (id, name, department, salary) VALUES (1, 'Alice', 'HR', 60000)")
dbExecute(con, "INSERT INTO employees (id, name, department, salary) VALUES (2, 'Bob', 'IT', 75000)")
dbExecute(con, "INSERT INTO employees (id, name, department, salary) VALUES (3, 'Charlie', 'HR', 62000)")

# 2. Query data
# Fetch all data from the employees table
employees_data <- dbGetQuery(con, "SELECT * FROM employees")
print(employees_data)

# Fetch specific columns and filter
it_employees <- dbGetQuery(con, "SELECT name, salary FROM employees WHERE department = 'IT'")
print(it_employees)

# 3. Disconnect
dbDisconnect(con)
```

For real-world scenarios, you'd replace `":memory:"` with a file path for a persistent SQLite database (e.g., `"my_database.sqlite"`) or connection details for a remote database (e.g., `dbConnect(RPostgres::Postgres(), host="localhost", port=5432, user="user", password="password", dbname="mydb")`). Common mistakes include incorrect connection parameters (host, port, username, password, database name) or SQL syntax errors within your `dbGetQuery()` or `dbExecute()` calls. Always test your SQL queries in a database client first if you encounter issues.

Next, let's explore Web APIs (Application Programming Interfaces). APIs allow different software systems to communicate and exchange data over the internet. When you visit a website, your browser makes API requests to fetch data. In R, we can programmatically make these requests to pull structured data, often in JSON (JavaScript Object Notation) or XML format.

The `httr` package is excellent for making HTTP requests, and `jsonlite` is perfect for parsing JSON data.

```R
# install.packages(c("httr", "jsonlite"))
library(httr)
library(jsonlite)
```

Let's fetch some public data, for example, from the GitHub API to get information about a user.

```R
# Define the API endpoint
github_api_url <- "https://api.github.com/users/r-lib"

# Make a GET request
response <- GET(github_api_url)

# Check the status code (200 means success)
print(status_code(response))

# Parse the JSON content
github_user_data <- fromJSON(content(response, "text", encoding = "UTF-8"))

# Explore the data
print(github_user_data$name)
print(github_user_data$public_repos)
print(github_user_data$followers)
```

Many APIs require authentication to access protected resources or to increase your request rate limits. Common authentication methods include API keys (sent as query parameters or headers) or OAuth tokens. For an API key, you might add it to your URL or a header:

```R
# Example with an API key (replace 'YOUR_API_KEY' with a real key if applicable)
# weather_api_url <- "http://api.openweathermap.org/data/2.5/weather"
# query_params <- list(q = "London", appid = "YOUR_API_KEY")
# response_weather <- GET(weather_api_url, query = query_params)
# weather_data <- fromJSON(content(response_weather, "text", encoding = "UTF-8"))
# print(weather_data$main$temp)

# Example with a header for authentication (e.g., for GitHub with a Personal Access Token)
# github_token <- "YOUR_GITHUB_PAT" # Store securely, not directly in code for production!
# auth_header <- add_headers(Authorization = paste("token", github_token))
# response_auth <- GET("https://api.github.com/user", auth_header)
# user_info <- fromJSON(content(response_auth, "text", encoding = "UTF-8"))
# print(user_info$login)
```

When working with APIs, be mindful of **rate limits**. Most APIs restrict how many requests you can make within a certain timeframe. Exceeding these limits will result in error responses (e.g., HTTP 429 Too Many Requests). Always check the API documentation for rate limit policies and consider adding delays (`Sys.sleep()`) between requests if you're fetching large amounts of data. Also, handling complex nested JSON structures can be challenging; `jsonlite`'s `fromJSON()` is often very good at flattening these, but sometimes manual parsing or using packages like `purrr` might be necessary for specific elements. Storing sensitive credentials like API keys or database passwords directly in your R script is a security risk. For production environments, use environment variables or dedicated secrets management tools. For learning, it's acceptable to hardcode for demonstration but be aware of the best practices.

#### Key concepts
*   **Relational Database:** A database that stores and provides access to data points that are related to one another. Examples include SQLite, PostgreSQL, MySQL.
*   **`DBI` package:** R's database interface, providing a common set of functions to interact with various database systems.
*   **Database Driver:** A specific R package (e.g., `RSQLite`, `RPostgres`) that implements the `DBI` interface for a particular database.
*   **`dbConnect()`:** A `DBI` function to establish a connection to a database.
*   **`dbGetQuery()`:** A `DBI` function to send a SQL `SELECT` query and retrieve results as an R data frame.
*   **`dbExecute()`:** A `DBI` function to send SQL commands that don't return results (e.g., `CREATE TABLE`, `INSERT`, `UPDATE`, `DELETE`).
*   **`dbDisconnect()`:** A `DBI` function to close a database connection.
*   **Web API (Application Programming Interface):** A set of rules and protocols for building and interacting with software applications, often used to access data over the internet.
*   **`httr` package:** An R package for making HTTP requests (GET, POST, PUT, DELETE) to interact with web APIs.
*   **`jsonlite` package:** An R package for converting R objects to JSON and JSON to R objects.
*   **`GET()`:** An `httr` function to send an HTTP GET request to retrieve data from a URL.
*   **`fromJSON()`:** A `jsonlite` function to parse JSON text into an R object (list or data frame).
*   **Rate Limiting:** A restriction imposed by APIs on the number of requests a user can make within a given time period.
*   **Authentication:** The process of verifying a user's identity, often required by APIs using API keys or tokens.

#### Hands-on activity
**Activity: Fetching Data from a Public API**

In this activity, you will use the `httr` and `jsonlite` packages to fetch data from the Open-Meteo API, which provides free weather forecast data.

1.  **Understand the API Endpoint:** The Open-Meteo API for a simple forecast might look like this: `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m` (for Berlin).

2.  **R Code Template:**

    ```R
    # Ensure you have httr and jsonlite installed:
    # install.packages(c("httr", "jsonlite"))

    library(httr)
    library(jsonlite)
    library(dplyr) # For data manipulation after import

    # --- Part 1: Fetch weather data for a specific location ---
    # Define the base URL for the Open-Meteo API
    base_url <- "https://api.open-meteo.com/v1/forecast"

    # Define query parameters for a specific location (e.g., New York City)
    # Latitude and Longitude for NYC: 40.7128, -74.0060
    # Request hourly temperature at 2m and relative humidity at 2m
    query_params <- list(
      latitude = 40.7128,
      longitude = -74.0060,
      hourly = "temperature_2m,relativehumidity_2m",
      timezone = "America/New_York" # Specify timezone
    )

    # Make the GET request
    response <- # YOUR CODE HERE: Use GET() with base_url and query_params
    print(paste("HTTP Status Code:", status_code(response)))

    # Check if the request was successful (status code 200)
    if (status_code(response) == 200) {
      # Parse the JSON content
      weather_data_json <- # YOUR CODE HERE: Use content() and fromJSON()
      print("--- Raw Weather Data Structure ---")
      print(str(weather_data_json))

      # The 'hourly' part of the JSON contains the time, temperature, and humidity
      hourly_forecast <- weather_data_json$hourly

      # Convert the hourly forecast list to a data frame
      hourly_df <- as_tibble(hourly_forecast) # Use as_tibble for tidy data frame
      print("--- Hourly Forecast Data ---")
      print(head(hourly_df))
      print(str(hourly_df))

      # --- Part 2: Basic data manipulation (optional, but good practice) ---
      # Convert temperature from Celsius to Fahrenheit (if API returns Celsius)
      # F = C * 9/5 + 32
      hourly_df <- hourly_df %>%
        mutate(temperature_2m_F = temperature_2m * 9/5 + 32)
      print("--- Hourly Forecast with Fahrenheit Temperature ---")
      print(head(hourly_df))

    } else {
      print("Failed to retrieve data. Check your URL and parameters.")
      print(content(response, "text", encoding = "UTF-8")) # Print error message from API
    }
    ```

#### Assessment idea
1.  **Question:** You need to connect to a PostgreSQL database named `customer_db` running on `localhost` at port `5432`, using username `analytics_user` and password `secure_pass`. Which sequence of R commands correctly establishes the connection, fetches all data from a table named `orders`, and then disconnects?
    A)
    ```R
    library(RPostgres)
    con <- dbConnect(RPostgres::Postgres(), dbname="customer_db", host="localhost", port=5432, user="analytics_user", password="secure_pass")
    orders_data <- dbGetQuery(con, "SELECT * FROM orders")
    dbDisconnect(con)
    ```
    B)
    ```R
    library(DBI)
    con <- dbConnect("PostgreSQL", dbname="customer_db", host="localhost", port=5432, user="analytics_user", password="secure_pass")
    orders_data <- dbQuery(con, "SELECT * FROM orders")
    dbClose(con)
    ```
    C)
    ```R
    library(RPostgres)
    con <- dbConnect(Postgres(), dbname="customer_db", host="localhost", port=5432, user="analytics_user", password="secure_pass")
    orders_data <- dbGetQuery(con, "SELECT * FROM orders")
    dbDisconnect(con)
    ```
    D)
    ```R
    library(DBI)
    library(RPostgres)
    con <- dbConnect(RPostgres::Postgres(), dbname="customer_db", host="localhost", port=5432, user="analytics_user", password="secure_pass")
    orders_data <- dbGetQuery(con, "SELECT * FROM orders")
    dbDisconnect(con)
    ```

    **Correct Answer:** D)
    **Explanation:**
    *   Option A is missing `library(DBI)`, which is essential for `dbConnect`, `dbGetQuery`, and `dbDisconnect`. While `RPostgres` might load `DBI` as a dependency, it's best practice to explicitly load it.
    *   Option B uses `dbConnect("PostgreSQL", ...)` which is an incorrect way to specify the driver. It also uses `dbQuery` (non-existent) and `dbClose` (incorrect function name).
    *   Option C is missing `library(DBI)` and uses `Postgres()` instead of `RPostgres::Postgres()`, which might work if `RPostgres` is loaded but is less explicit.
    *   Option D correctly loads both `DBI` and `RPostgres`, uses the explicit `RPostgres::Postgres()` for the driver, and correctly uses `dbGetQuery()` and `dbDisconnect()`.

2.  **Question:** You are trying to fetch data from an API endpoint `https://api.example.com/data` that requires an API key in the request header, specifically `X-API-Key: YOUR_SECRET_KEY`. You are using the `httr` package. Which of the following code snippets correctly makes this authenticated request?
    A) `GET("https://api.example.com/data", query = list(api_key = "YOUR_SECRET_KEY"))`
    B) `GET("https://api.example.com/data", add_headers("X-API-Key" = "YOUR_SECRET_KEY"))`
    C) `GET("https://api.example.com/data", header = "X-API-Key: YOUR_SECRET_KEY")`
    D) `GET("https://api.example.com/data", auth = "YOUR_SECRET_KEY")`

    **Correct Answer:** B) `GET("https://api.example.com/data", add_headers("X-API-Key" = "YOUR_SECRET_KEY"))`
    **Explanation:**
    *   API keys in the header are specified using the `add_headers()` helper function from `httr`. This function takes named arguments where the name is the header field and the value is the header content.
    *   Option A sends the API key as a query parameter in the URL, which is a different authentication method.
    *   Option C uses a non-existent `header` argument and incorrect syntax.
    *   Option D uses a non-existent `auth` argument. `httr` has specific functions for different authentication types (e.g., `authenticate()` for basic auth, `oauth1.0_token()`, `oauth2.0_token()`), but for a custom header, `add_headers()` is the correct approach.

#### AI generation note
Create a 15-minute live coding demonstration. Begin with a brief (2-minute) explanation of why databases and APIs are important data sources. Then, dedicate 6 minutes to demonstrating `DBI` and `RSQLite`. Show connecting to an in-memory database, creating a table, inserting data, and querying it. Emphasize `dbConnect`, `dbExecute`, `dbGetQuery`, and `dbDisconnect`. Highlight common SQL syntax errors. The next 7 minutes will focus on `httr` and `jsonlite`. Demonstrate fetching data from a public API (e.g., Open-Meteo or a similar simple, unauthenticated API). Show the `GET()` request, checking `status_code()`, and parsing the JSON response with `fromJSON()`. Briefly discuss API rate limits and the importance of secure credential handling. The interactive element could be a challenge to modify the API request to fetch data for a different city or specific weather parameter. Visuals should include RStudio console output, clear code highlighting, and a simple diagram illustrating the R -> API -> JSON -> R data frame flow.

## Chapter 6.3 — Data Inspection and Cleaning Basics

#### Learning objectives
*   Perform initial data inspection using functions like `str()`, `summary()`, `head()`, `tail()`, and `glimpse()`.
*   Identify and count missing values in a dataset.
*   Implement strategies for handling missing data, including removal and basic imputation.
*   Detect and remove duplicate rows from a data frame.
*   Correct common data type inconsistencies (e.g., converting character to numeric, numeric to factor).
*   Understand basic techniques for identifying outliers.

#### Detailed lesson content
Once you've successfully imported your data into R, the next critical step is to inspect and clean it. Raw data is rarely perfect; it often contains missing values, inconsistencies, incorrect data types, or duplicates. Neglecting this step can lead to flawed analyses, misleading visualizations, and incorrect conclusions. Data cleaning is an iterative process, and mastering these foundational techniques will save you countless headaches down the line.

Our journey begins with data inspection. Before making any changes, we need to understand the structure and content of our dataset. Several functions are invaluable for this initial exploration:
*   `str()`: Provides a concise summary of the structure of an R object, including its class, dimensions, and the type of each column.
*   `summary()`: Generates descriptive statistics for each column (min, max, mean, median, quartiles for numeric; counts for factors).
*   `head()` and `tail()`: Display the first and last few rows of the data, respectively, giving you a quick peek at the actual values.
*   `glimpse()` (from `dplyr`): Offers a transposed version of `str()`, which is particularly useful for wide datasets, showing column names, types, and the first few values.

Let's create a sample dataset to work with:

```R
library(dplyr) # For glimpse and other data manipulation functions

# Sample data with missing values, duplicates, and mixed types
dirty_data <- tibble(
  ID = c(1, 2, 3, 4, 5, 1, 6, 7),
  Name = c("Alice", "Bob", "Charlie", "Diana", "Eve", "Alice", "Frank", "Grace"),
  Age = c(25, 30, NA, 22, 28, 25, 35, 29),
  Score = c(88, 92, 75, 90, NA, 88, 80, 95),
  Category = c("A", "B", "A", "C", "B", "A", "C", "B"),
  EnrollmentDate = c("2023-01-15", "2023-02-20", "2023-01-25", "2023-03-10", "2023-02-01", "2023-01-15", "2023-04-01", "2023-03-15")
)

print("--- Initial Inspection ---")
str(dirty_data)
summary(dirty_data)
head(dirty_data)
glimpse(dirty_data)
```

From `str()` and `glimpse()`, we can immediately see that `Age` and `Score` are numeric, `ID` is numeric, and `Name`, `Category`, `EnrollmentDate` are character. `summary()` reveals the `NA` count for `Age` and `Score`, and basic statistics for numeric columns.

**Handling Missing Values (NAs):**
Missing data is a common challenge. Identifying them is the first step. `is.na()` checks for `NA` values, and `sum(is.na())` counts them.

```R
print("--- Missing Values ---")
sum(is.na(dirty_data$Age)) # Count NAs in Age column
sum(is.na(dirty_data$Score)) # Count NAs in Score column
colSums(is.na(dirty_data)) # Count NAs per column for the entire data frame
```

Once identified, you have several strategies for handling NAs:
1.  **Removal:**
    *   `na.omit(data)`: Removes entire rows that contain *any* `NA` values. Use with caution, as it can drastically reduce your dataset size if NAs are widespread.
    *   `drop_na()` (from `tidyr`): A Tidyverse equivalent, allowing you to specify columns to consider for NA removal.
    ```R
    # Remove rows with NAs in Age or Score
    data_no_na_rows <- dirty_data %>% drop_na(Age, Score)
    print("--- Data after dropping NAs in Age/Score ---")
    print(data_no_na_rows)
    ```
2.  **Imputation:** Replacing `NA` values with a substitute, such as the mean, median, or mode of the column, or a specific value. This is often preferred over removal to retain data.
    ```R
    # Impute missing Age with the median age
    median_age <- median(dirty_data$Age, na.rm = TRUE) # na.rm=TRUE is crucial!
    data_imputed_age <- dirty_data %>%
      mutate(Age = ifelse(is.na(Age), median_age, Age))
    print("--- Data after imputing Age with median ---")
    print(data_imputed_age)

    # Impute missing Score with a fixed value (e.g., 0 or average)
    data_imputed_score <- data_imputed_age %>%
      mutate(Score = replace_na(Score, mean(Score, na.rm = TRUE))) # using tidyr::replace_na
    print("--- Data after imputing Score with mean ---")
    print(data_imputed_score)
    ```
    Common mistake: Forgetting `na.rm = TRUE` when calculating statistics (like mean/median) on columns with NAs, which will result in `NA` for the statistic itself.

**Handling Duplicate Rows:**
Duplicate entries can bias your analysis. Identifying and removing them is straightforward.
*   `duplicated()`: Returns a logical vector indicating which rows are duplicates of a previous row.
*   `distinct()` (from `dplyr`): Removes duplicate rows, keeping only unique observations. You can specify columns to consider for uniqueness.

```R
print("--- Duplicates ---")
# Check for full row duplicates
dirty_data[duplicated(dirty_data), ] # Shows the duplicate rows

# Remove full row duplicates
data_unique_rows <- dirty_data %>% distinct()
print("--- Data after removing full row duplicates ---")
print(data_unique_rows)

# Remove duplicates based on specific columns (e.g., ID and Name should be unique)
data_unique_id_name <- dirty_data %>% distinct(ID, Name, .keep_all = TRUE)
print("--- Data after removing duplicates based on ID and Name ---")
print(data_unique_id_name)
```
Notice how `distinct(ID, Name, .keep_all = TRUE)` keeps the first occurrence of each unique ID-Name pair, which is often what you want.

**Correcting Data Types:**
R often imports data as character strings when it could be numeric or a date. Incorrect data types prevent proper calculations or sorting.
*   `as.numeric()`, `as.character()`, `as.factor()`, `as.Date()`: Convert data types.
*   `mutate()` (from `dplyr`): Often used in conjunction with `as.*` functions to change column types.

```R
print("--- Data Type *Outlier Detection (Basic):**
Outliers are data points significantly different from other observations. They can skew statistical analyses. Simple methods include:
*   **Visual inspection:** Box plots (covered in `ggplot2`) are excellent for this.
*   **IQR method:** Values outside 1.5 * IQR (Interquartile Range) from the first or third quartile.

```R
print("--- Outlier Detection (Basic IQR Method) ---")
# Let's use the cleaned data (data_typed) for outlier detection
Q1_score <- quantile(data_typed$Score, 0.25)
Q3_score <- quantile(data_typed$Score, 0.75)
IQR_score <- Q3_score - Q1_score

lower_bound_score <- Q1_score - 1.5 * IQR_score
upper_bound_score <- Q3_score + 1.5 * IQR_score

outliers_score <- data_typed %>%
  filter(Score < lower_bound_score | Score > upper_bound_score)
print("Potential Score Outliers:")
print(outliers_score)

# In this small dataset, we don't have clear outliers by this method,
# but in larger datasets, this would highlight unusual values.
```
Outlier handling depends on the context: sometimes they are errors and should be removed or corrected; other times they represent rare but valid events and should be analyzed separately or robust statistical methods should be used.

Data cleaning is an art as much as a science. It requires domain knowledge, careful consideration of the impact of each cleaning step, and a systematic approach. Always document your cleaning steps and, if possible, work on a copy of your raw data.

#### Key concepts
*   **Data Inspection:** The initial process of examining a dataset to understand its structure, content, and quality.
*   **`str()`:** Base R function to display the internal structure of an R object.
*   **`summary()`:** Base R function to provide descriptive statistics for each column.
*   **`head()` / `tail()`:** Base R functions to view the first/last few rows of a data frame.
*   **`glimpse()`:** `dplyr` function providing a transposed summary of data, useful for wide datasets.
*   **Missing Values (NAs):** Placeholder for unknown or undefined data.
*   **`is.na()`:** Base R function to check for `NA` values.
*   **`colSums(is.na())`:** A common idiom to count `NA`s per column.
*   **`na.omit()`:** Base R function to remove rows containing any `NA` values.
*   **`drop_na()`:** `tidyr` function to remove rows with `NA`s, with more control over columns.
*   **Imputation:** The process of replacing missing data with substituted values (e.g., mean, median, mode).
*   **`replace_na()`:** `tidyr` function for imputing `NA` values.
*   **`na.rm = TRUE`:** An argument used in many statistical functions to exclude `NA` values from calculations.
*   **Duplicate Rows:** Identical entries in a dataset that can bias analysis.
*   **`duplicated()`:** Base R function to identify duplicate rows.
*   **`distinct()`:** `dplyr` function to remove duplicate rows, keeping only unique observations.
*   **Data Type Conversion:** Changing the data type of a column (e.g., `as.numeric()`, `as.factor()`, `as.Date()`).
*   **Outliers:** Data points that significantly deviate from other observations.
*   **IQR Method:** A basic statistical method for identifying potential outliers based on the interquartile range.

#### Hands-on activity
**Activity: Clean a Messy Customer Data Set**

You've just imported a customer dataset, `customer_raw.csv`, but it's a bit messy. Your task is to clean it using the techniques learned.

**`customer_raw.csv` content:**
```csv
CustomerID,Name,Age,Gender,PurchaseAmount,JoinDate,Region
1001,John Doe,30,Male,150.50,2022-01-01,North
1002,Jane Smith,25,Female,NA,2022-02-15,South
1003,John Doe,30,Male,150.50,2022-01-01,North
1004,Peter Jones,,Male,200.00,2022-03-20,West
1005,Alice Brown,28,Female,120.75,2022-04-10,East
1006,Jane Smith,25,Female,NA,2022-02-15,South
1007,Robert Green,45,Male,300.25,2022-05-01,North
1008,Susan White,NA,Female,180.00,2022-06-05,South
```

**Your cleaning steps:**
1.  Import `customer_raw.csv`.
2.  Inspect the data using `glimpse()` and `summary()`.
3.  Identify and count missing values in each column.
4.  Remove duplicate rows based on `CustomerID`.
5.  Impute missing `Age` values with the median age.
6.  Impute missing `PurchaseAmount` values with the mean purchase amount.
7.  Convert `JoinDate` to a proper Date object and `Gender` and `Region` to factors.

**R Code Template:**

```R
# Create the customer_raw.csv file first in your working directory
# file_content <- "CustomerID,Name,Age,Gender,PurchaseAmount,JoinDate,Region\n1001,John Doe,30,Male,150.50,2022-01-01,North\n1002,Jane Smith,25,Female,NA,2022-02-15,South\n1003,John Doe,30,Male,150.50,2022-01-01,North\n1004,Peter Jones,,Male,200.00,2022-03-20,West\n1005,Alice Brown,28,Female,120.75,2022-04-10,East\n1006,Jane Smith,25,Female,NA,2022-02-15,South\n1007,Robert Green,45,Male,300.25,2022-05-01,North\n1008,Susan White,NA,Female,180.00,2022-06-05,South"
# writeLines(file_content, "customer_raw.csv")

library(readr)
library(dplyr)
library(tidyr) # For replace_na

# 1. Import customer_raw.csv
customer_data <- # YOUR CODE HERE: Use read_csv()

print("--- Initial Inspection ---")
glimpse(customer_data)
summary(customer_data)

# 2. Identify and count missing values
print("--- Missing Values Count ---")
# YOUR CODE HERE: Use colSums(is.na())

# 3. Remove duplicate rows based on CustomerID
customer_data_unique <- # YOUR CODE HERE: Use distinct()

print("--- After Removing Duplicates ---")
glimpse(customer_data_unique)

# 4. Impute missing Age values with the median age
median_age <- # YOUR CODE HERE: Calculate median, remember na.rm=TRUE
customer_data_imputed_age <- customer_data_unique %>%
  mutate(Age = # YOUR CODE HERE: Use ifelse() or replace_na() to impute Age
  )

print("--- After Imputing Age ---")
glimpse(customer_data_imputed_age)

# 5. Impute missing PurchaseAmount values with the mean purchase amount
mean_purchase <- # YOUR CODE HERE: Calculate mean, remember na.rm=TRUE
customer_data_cleaned <- customer_data_imputed_age %>%
  mutate(PurchaseAmount = # YOUR CODE HERE: Use ifelse() or replace_na() to impute PurchaseAmount
  )

print("--- After Imputing PurchaseAmount ---")
glimpse(customer_data_cleaned)

# 6. Convert JoinDate to Date and Gender/Region to factors
customer_data_cleaned <- customer_data_cleaned %>%
  mutate(
    JoinDate = # YOUR CODE HERE: Convert to Date
    Gender = # YOUR CODE HERE: Convert to factor
    Region = # YOUR CODE HERE: Convert to factor
  )

print("--- Final Cleaned Data Structure ---")
glimpse(customer_data_cleaned)
print("--- Final Cleaned Data Head ---")
head(customer_data_cleaned)
```

#### Assessment idea
1.  **Question:** You have a data frame `df` with a column `Price` that contains `NA` values. You want to replace these `NA`s with the *median* of the non-missing `Price` values. Which of the following code snippets correctly achieves this using `dplyr` and `tidyr`?
    A) `df %>% mutate(Price = replace_na(Price, median(Price)))`
    B) `df %>% mutate(Price = ifelse(is.na(Price), median(Price, na.rm = TRUE), Price))`
    C) `df %>% drop_na(Price) %>% mutate(Price = replace_na(Price, median(Price, na.rm = TRUE)))`
    D) `df %>% mutate(Price = mean(Price, na.rm = TRUE))`

    **Correct Answer:** B) `df %>% mutate(Price = ifelse(is.na(Price), median(Price, na.rm = TRUE), Price))`
    **Explanation:**
    *   Option B correctly identifies `NA` values using `is.na()` and replaces them with the `median()` of `Price`, crucially including `na.rm = TRUE` to calculate the median only from non-missing values.
    *   Option A is incorrect because `median(Price)` without `na.rm = TRUE` would return `NA` if there are any `NA`s in `Price`, leading to all `Price` values becoming `NA`.
    *   Option C first drops rows with `NA`s in `Price`, then attempts to impute, which is contradictory and likely not the desired outcome (you want to impute, not remove).
    *   Option D replaces all `Price` values with the mean, not just the `NA`s, and uses the mean instead of the median.

2.  **Question:** You have a data frame `transactions` with columns `TransactionID`, `CustomerID`, `Amount`, and `Timestamp`. You suspect there might be duplicate transactions where the same `TransactionID` appears more than once. You want to remove these duplicates, keeping only the *first* occurrence of each unique `TransactionID`. Which `dplyr` command should you use?
    A) `transactions %>% unique(TransactionID)`
    B) `transactions[!duplicated(transactions$TransactionID), ]`
    C) `transactions %>% distinct(TransactionID, .keep_all = TRUE)`
    D) `transactions %>% filter(!duplicated(TransactionID))`

    **Correct Answer:** C) `transactions %>% distinct(TransactionID, .keep_all = TRUE)`
    **Explanation:**
    *   Option C uses `distinct()` from `dplyr`, which is designed for removing duplicate rows. By specifying `TransactionID` as the column to consider for uniqueness and `.keep_all = TRUE`, it ensures that only one row for each unique `TransactionID` is kept, retaining all other columns. By default, `distinct()` keeps the first occurrence.
    *   Option A is incorrect syntax for `unique()` with data frames.
    *   Option B uses base R `duplicated()` but applies it to a single column, then uses that to subset the entire data frame. This would work, but `distinct()` is generally preferred for its readability and integration with the Tidyverse.
    *   Option D uses `filter()` with `!duplicated()`, which is similar to B but `distinct()` is more idiomatic for this specific task in the Tidyverse.

#### AI generation note
Create a 15-minute interactive lab walkthrough. Start with a 2-minute introduction emphasizing the importance of clean data. Then, guide learners through the `customer_raw.csv` cleaning activity step-by-step. Show each inspection function (`glimpse`, `summary`, `colSums(is.na)`) and explain its output. For missing values, demonstrate both `drop_na()` (with a warning about data loss) and `replace_na()` for imputation, clearly showing the calculation of median/mean. For duplicates, show `duplicated()` output and then `distinct(CustomerID, .keep_all = TRUE)`. Finally, demonstrate type conversions for `JoinDate` and categorical columns. The interactive element should be a mini-challenge to identify and correct a specific data type issue (e.g., a numeric column accidentally imported as character due to a single non-numeric entry). Visuals should include RStudio console output, clear code highlighting, and side-by-side comparisons of data before and after each cleaning step.

## Chapter 6.4 — Descriptive Statistics and Data Summarization

#### Learning objectives
*   Calculate measures of central tendency (mean, median, mode) for numerical data.
*   Compute measures of spread (variance, standard deviation, range, interquartile range) to understand data variability.
*   Generate frequency tables and proportions for categorical variables.
*   Perform grouped data summarization using `dplyr`'s `group_by()` and `summarize()` functions.
*   Create comprehensive summary tables to present key descriptive statistics.
*   Interpret descriptive statistics in the context of real-world data.

#### Detailed lesson content
With your data now clean and properly structured, it's time to start extracting meaningful insights. Descriptive statistics are the bedrock of data analysis, providing simple summaries about the sample and the observations that have been made. They help us understand the main features of a dataset, identify patterns, and prepare for more advanced inferential analyses. This chapter will focus on calculating and interpreting these fundamental statistics.

We'll work with a slightly expanded version of our cleaned customer data:

```R
library(dplyr) # For data manipulation and summarization

# Recreate a clean-ish dataset for demonstration
customer_data_final <- tibble(
  CustomerID = c(1001, 1002, 1004, 1005, 1007, 1008, 1009, 1010),
  Name = c("John Doe", "Jane Smith", "Peter Jones", "Alice Brown", "Robert Green", "Susan White", "David Lee", "Emily Chen"),
  Age = c(30, 25, 32, 28, 45, 35, 29, 27), # Age imputed if NA
  Gender = factor(c("Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female")),
  PurchaseAmount = c(150.50, 130.00, 200.00, 120.75, 300.25, 180.00, 145.00, 165.50), # NA's imputed
  JoinDate = as.Date(c("2022-01-01", "2022-02-15", "2022-03-20", "2022-04-10", "2022-05-01", "2022-06-05", "2022-07-10", "2022-08-15")),
  Region = factor(c("North", "South", "West", "East", "North", "South", "West", "East"))
)

print("--- Data for Descriptive Statistics ---")
glimpse(customer_data_final)
```

**Measures of Central Tendency:** These statistics describe the "center" or typical value of a dataset.
*   **Mean (`mean()`):** The arithmetic average. Sensitive to outliers.
*   **Median (`median()`):** The middle value when data is ordered. Robust to outliers.
*   **Mode:** The most frequently occurring value. R doesn't have a built-in `mode()` function, but you can create one or use `table()` for categorical data.

```R
print("--- Measures of Central Tendency for Age and PurchaseAmount ---")
mean_age <- mean(customer_data_final$Age)
median_age <- median(customer_data_final$Age)
print(paste("Mean Age:", round(mean_age, 2)))
print(paste("Median Age:", median_age))

mean_purchase <- mean(customer_data_final$PurchaseAmount)
median_purchase <- median(customer_data_final$PurchaseAmount)
print(paste("Mean Purchase Amount:", round(mean_purchase, 2)))
print(paste("Median Purchase Amount:", median_purchase))

# Mode for a categorical variable (Gender)
mode_gender <- names(sort(table(customer_data_final$Gender), decreasing = TRUE))[1]
print(paste("Mode Gender:", mode_gender))
```
A common mistake is to use the mean for skewed distributions where the median would be a more representative "average." For example, income data is often skewed, making the median a better indicator of typical income.

**Measures of Spread (Variability):** These statistics describe how spread out or dispersed the data points are.
*   **Range (`range()`):** The difference between the maximum and minimum values. Highly sensitive to outliers.
*   **Variance (`var()`):** The average of the squared differences from the mean.
*   **Standard Deviation (`sd()`):** The square root of the variance, providing a measure of spread in the original units of the data.
*   **Interquartile Range (IQR):** The range between the first quartile (25th percentile) and the third quartile (75th percentile). Robust to outliers. Calculated using `IQR()` or `quantile()`.

```R
print("--- Measures of Spread for Age and PurchaseAmount ---")
range_age <- range(customer_data_final$Age)
print(paste("Age Range:", range_age[1], "to", range_age[2]))
sd_age <- sd(customer_data_final$Age)
var_age <- var(customer_data_final$Age)
iqr_age <- IQR(customer_data_final$Age)
print(paste("Age Standard Deviation:", round(sd_age, 2)))
print(paste("Age Variance:", round(var_age, 2)))
print(paste("Age IQR:", round(iqr_age, 2)))

range_purchase <- range(customer_data_final$PurchaseAmount)
print(paste("Purchase Amount Range:", range_purchase[1], "to", range_purchase[2]))
sd_purchase <- sd(customer_data_final$PurchaseAmount)
var_purchase <- var(customer_data_final$PurchaseAmount)
iqr_purchase <- IQR(customer_data_final$PurchaseAmount)
print(paste("Purchase Amount Standard Deviation:", round(sd_purchase, 2)))
print(paste("Purchase Amount Variance:", round(var_purchase, 2)))
print(paste("Purchase Amount IQR:", round(iqr_purchase, 2)))
```
Understanding both central tendency and spread is crucial. Two datasets can have the same mean but vastly different spreads, indicating very different underlying distributions.

**Frequencies and Proportions for Categorical Variables:**
For categorical data, we often want to know how many observations fall into each category (frequencies) and their relative proportions.
*   `table()`: Creates a frequency table.
*   `prop.table()`: Converts a frequency table into proportions.

```R
print("--- Frequencies and Proportions for Gender and Region ---")
gender_counts <- table(customer_data_final$Gender)
print("Gender Frequencies:")
print(gender_counts)
gender_proportions <- prop.table(gender_counts)
print("Gender Proportions:")
print(round(gender_proportions, 2))

region_counts <- table(customer_data_final$Region)
print("Region Frequencies:")
print(region_counts)
region_proportions <- prop.table(region_counts)
print("Region Proportions:")
print(round(region_proportions, 2))
```

**Grouped Summarization with `dplyr`:**
Often, we need to calculate descriptive statistics not for the entire dataset, but for specific subgroups (e.g., average purchase amount by region or gender). The `dplyr` package's `group_by()` and `summarize()` functions are incredibly powerful for this.

```R
print("--- Grouped Summarization ---")
# Summarize PurchaseAmount by Region
summary_by_region <- customer_data_final %>%
  group_by(Region) %>%
  summarize(
    MeanPurchase = mean(PurchaseAmount),
    MedianPurchase = median(PurchaseAmount),
    SDPurchase = sd(PurchaseAmount),
    Count = n() # n() counts the number of observations in each group
  ) %>%
  ungroup() # Always a good practice to ungroup after summarizing

print("Summary of Purchase Amount by Region:")
print(summary_by_region)

# Summarize Age by Gender
summary_by_gender <- customer_data_final %>%
  group_by(Gender) %>%
  summarize(
    MeanAge = mean(Age),
    MedianAge = median(Age),
    MinAge = min(Age),
    MaxAge = max(Age)
  ) %>%
  ungroup()

print("Summary of Age by Gender:")
print(summary_by_gender)
```
The `group_by()` function creates "groups" within your data, and subsequent `summarize()` calls operate independently on each group. `ungroup()` is important to remove the grouping structure, preventing unintended behavior in later operations.

By combining these techniques, you can create rich summary tables that provide a comprehensive overview of your data, laying the groundwork for deeper analysis and informed decision-making. Remember to always consider the context of your data when interpreting these statistics; a high standard deviation might be normal for one variable but alarming for another.

#### Key concepts
*   **Descriptive Statistics:** Statistical methods used to summarize and describe the characteristics of a dataset.
*   **Measures of Central Tendency:** Statistics that represent the typical or central value of a dataset (mean, median, mode).
*   **Mean:** The arithmetic average of a set of numbers.
*   **Median:** The middle value in an ordered dataset.
*   **Mode:** The most frequently occurring value in a dataset.
*   **Measures of Spread (Variability):** Statistics that describe how dispersed or spread out the data points are (range, variance, standard deviation, IQR).
*   **Range:** The difference between the maximum and minimum values.
*   **Variance:** The average of the squared differences from the mean.
*   **Standard Deviation:** The square root of the variance, indicating the typical distance of data points from the mean.
*   **Interquartile Range (IQR):** The range between the 25th (Q1) and 75th (Q3) percentiles, representing the middle 50% of the data.
*   **Frequency Table:** A table showing the number of occurrences of each category in a categorical variable.
*   **Proportion:** The fraction of the total that each category represents.
*   **`table()`:** Base R function to create frequency tables.
*   **`prop.table()`:** Base R function to convert frequencies to proportions.
*   **`group_by()`:** `dplyr` function to group data by one or more variables for summary operations.
*   **`summarize()`:** `dplyr` function to create summary statistics for grouped or ungrouped data.
*   **`n()`:** `dplyr` function used within `summarize()` to count the number of observations in each group.
*   **`ungroup()`:** `dplyr` function to remove grouping structure from a data frame.

#### Hands-on activity
**Activity: Summarize Sales Performance Data**

You have a dataset `sales_performance.csv` containing information about sales representatives, their region, product sold, and sales amount. Your task is to generate various descriptive statistics to understand sales performance.

**`sales_performance.csv` content:**
```csv
RepID,Region,Product,SalesAmount,UnitsSold
R001,North,A,1200,10
R002,South,B,850,5
R003,North,C,1500,12
R004,East,A,900,8
R005,West,B,1100,7
R006,North,A,1300,11
R007,South,C,950,6
R008,East,B,1050,9
R009,West,A,1400,13
R010,North,B,700,4
```

**Your tasks:**
1.  Import `sales_performance.csv`.
2.  Calculate the mean, median, standard deviation, and IQR for `SalesAmount` and `UnitsSold` for the entire dataset.
3.  Create a frequency table and proportions for `Region` and `Product`.
4.  Summarize `SalesAmount` by `Region`, calculating the mean, median, and total sales (`sum()`).
5.  Summarize `UnitsSold` by `Product`, calculating the mean, max, and count of sales.

**R Code Template:**

```R
# Create the sales_performance.csv file first
# file_content <- "RepID,Region,Product,SalesAmount,UnitsSold\nR001,North,A,1200,10\nR002,South,B,850,5\nR003,North,C,1500,12\nR004,East,A,900,8\nR005,West,B,1100,7\nR006,North,A,1300,11\nR007,South,C,950,6\nR008,East,B,1050,9\nR009,West,A,1400,13\nR010,North,B,700,4"
# writeLines(file_content, "sales_performance.csv")

library(readr)
library(dplyr)

# 1. Import sales_performance.csv
sales_data <- # YOUR CODE HERE: Use read_csv()
sales_data <- sales_data %>%
  mutate(
    Region = factor(Region),
    Product = factor(Product)
  )

print("--- Initial Sales Data ---")
glimpse(sales_data)

# 2. Calculate overall descriptive statistics for SalesAmount and UnitsSold
print("--- Overall SalesAmount Statistics ---")
# YOUR CODE HERE: Calculate mean, median, sd, IQR for SalesAmount
print(paste("Mean SalesAmount:", round(mean(sales_data$SalesAmount), 2)))
# ... add other stats

print("--- Overall UnitsSold Statistics ---")
# YOUR CODE HERE: Calculate mean, median, sd, IQR for UnitsSold
print(paste("Mean UnitsSold:", round(mean(sales_data$UnitsSold), 2)))
# ... add other stats

# 3. Create frequency tables and proportions for Region and Product
print("--- Region Frequencies and Proportions ---")
# YOUR CODE HERE: Use table() and prop.table() for Region

print("--- Product Frequencies and Proportions ---")
# YOUR CODE HERE: Use table() and prop.table() for Product

# 4. Summarize SalesAmount by Region
print("--- SalesAmount Summary by Region ---")
summary_sales_by_region <- # YOUR CODE HERE: Use group_by() and summarize()
print(summary_sales_by_region)

# 5. Summarize UnitsSold by Product
print("--- UnitsSold Summary by Product ---")
summary_units_by_product <- # YOUR CODE HERE: Use group_by() and summarize()
print(summary_units_by_product)
```

#### Assessment idea
1.  **Question:** You have a dataset `customer_feedback` with a numeric column `Rating` (from 1 to 5). You want to calculate the mean, median, and standard deviation of these ratings. Additionally, you notice that some ratings are missing (`NA`). Which R code snippet correctly calculates these statistics, ignoring missing values?
    A)
    ```R
    mean(customer_feedback$Rating)
    median(customer_feedback$Rating)
    sd(customer_feedback$Rating)
    ```
    B)
    ```R
    mean(customer_feedback$Rating, na.rm = TRUE)
    median(customer_feedback$Rating, na.rm = TRUE)
    sd(customer_feedback$Rating, na.rm = TRUE)
    ```
    C)
    ```R
    customer_feedback %>%
      summarize(
        MeanRating = mean(Rating),
        MedianRating = median(Rating),
        SDRating = sd(Rating)
      )
    ```
    D)
    ```R
    customer_feedback %>%
      drop_na(Rating) %>%
      summarize(
        MeanRating = mean(Rating),
        MedianRating = median(Rating),
        SDRating = sd(Rating)
      )
    ```

    **Correct Answer:** B)
    **Explanation:**
    *   Option B correctly uses the `na.rm = TRUE` argument in each base R statistical function. This is the direct way to tell R to ignore `NA` values when calculating the statistic.
    *   Option A will return `NA` for all statistics if there is even a single `NA` in the `Rating` column, as `na.rm` defaults to `FALSE`.
    *   Option C uses `summarize()` but without `na.rm = TRUE` within the `mean()`, `median()`, and `sd()` calls, so it would also return `NA`s.
    *   Option D first removes all rows with `NA`s in `Rating` using `drop_na()`. While this would allow the statistics to be calculated, it changes the underlying dataset by removing observations, which might not be the desired approach for simply calculating statistics while ignoring `NA`s. It's better to use `na.rm = TRUE` if you want to keep all data for other analyses.

2.  **Question:** You have a data frame `orders` with columns `OrderID`, `ProductCategory`, and `Revenue`. You want to find the total `Revenue` and the number of `OrderID`s for each `ProductCategory`. Which `dplyr` code snippet achieves this?
    A)
    ```R
    orders %>%
      group_by(ProductCategory) %>%
      summarize(
        TotalRevenue = sum(Revenue),
        OrderCount = n()
      )
    ```
    B)
    ```R
    orders %>%
      group_by(ProductCategory) %>%
      aggregate(Revenue ~ ProductCategory, FUN = sum)
    ```
    C)
    ```R
    orders %>%
      summarize(
        TotalRevenue = sum(Revenue),
        OrderCount = n()
      )
    ```
    D)
    ```R
    orders %>%
      group_by(ProductCategory) %>%
      mutate(
        TotalRevenue = sum(Revenue),
        OrderCount = n()
      )
    ```

    **Correct Answer:** A)
    **Explanation:**
    *   Option A correctly uses `group_by(ProductCategory)` to define the groups and then `summarize()` to calculate aggregate statistics (`sum(Revenue)` for total revenue and `n()` for the count of orders) within each group. This is the idiomatic Tidyverse approach.
    *   Option B uses base R's `aggregate()` which can achieve similar results but is less flexible and readable than `dplyr` for complex summaries. It also doesn't directly provide the `OrderCount` using `n()`.
    *   Option C calculates the total revenue and order count for the *entire* dataset, not grouped by `ProductCategory`.
    *   Option D uses `mutate()` instead of `summarize()`. `mutate()` adds new columns to the existing data frame (repeating the grouped summary for each row within the group), rather than creating a new summary data frame with one row per group.

#### AI generation note
Create a 12-minute interactive coding session. Begin with a 1-minute recap of why descriptive statistics are essential. Then, spend 4 minutes demonstrating how to calculate mean, median, standard deviation, and IQR using the `customer_data_final` example, explicitly showing the output and interpreting what each statistic tells us about age and purchase amount. The next 3 minutes will cover frequency tables and proportions for categorical variables like Gender and Region, explaining how to interpret them. The final 4 minutes will be a live coding demonstration of `group_by()` and `summarize()` using the `sales_performance.csv` data, showing how to calculate grouped means, medians, and counts. The interactive element should be a challenge for learners to calculate a new grouped summary (e.g., average `UnitsSold` per `Region`). Visuals should include clear RStudio console output, code highlighting, and simple text annotations explaining the meaning of each statistic.

## Chapter 6.5 — Introduction to Inferential Statistics (T-tests, Chi-squared)

#### Learning objectives
*   Understand the fundamental concepts of inferential statistics, including hypothesis testing, null and alternative hypotheses, and p-values.
*   Perform one-sample, independent two-sample, and paired t-tests to compare means.
*   Conduct a Chi-squared test for independence between two categorical variables.
*   Interpret the results of t-tests and Chi-squared tests, including p-values and confidence intervals.
*   Recognize the assumptions underlying these statistical tests and common pitfalls in their application.

#### Detailed lesson content
Having explored descriptive statistics to summarize our data, we now venture into the realm of inferential statistics. While descriptive statistics tell us about our sample, inferential statistics allow us to make educated guesses or inferences about a larger population based on that sample data. This is where we move from "what is" to "what if" and "is there a significant difference?" We'll focus on two widely used tests: the t-test for comparing means and the Chi-squared test for assessing relationships between categorical variables.

At the heart of inferential statistics is **hypothesis testing**. This formal procedure involves:
1.  **Formulating Hypotheses:**
    *   **Null Hypothesis (H0):** A statement of no effect or no difference (e.g., "There is no difference in average sales between Region A and Region B"). This is what we assume to be true until proven otherwise.
    *   **Alternative Hypothesis (Ha):** A statement that contradicts the null hypothesis (e.g., "There is a difference in average sales between Region A and Region B"). This is what we hope to find evidence for.
2.  **Collecting Data:** Gather your sample data.
3.  **Calculating a Test Statistic:** A value derived from the sample data that helps evaluate the hypothesis.
4.  **Determining the P-value:** The probability of observing a test statistic as extreme as, or more extreme than, the one calculated, *assuming the null hypothesis is true*. A small p-value suggests that the observed data is unlikely under the null hypothesis, leading us to question H0.
5.  **Making a Decision:** Compare the p-value to a pre-defined **significance level** (alpha, commonly 0.05).
    *   If p-value < alpha: Reject H0 in favor of Ha (statistically significant).
    *   If p-value >= alpha: Fail to reject H0 (no statistically significant evidence).

**T-tests: Comparing Means**
T-tests are used when you want to compare the means of one or two groups. They are suitable for normally distributed data (or sufficiently large sample sizes due to the Central Limit Theorem) and when the population standard deviation is unknown. R's `t.test()` function is incredibly versatile.

Let's use a hypothetical dataset of student test scores from two different teaching methods:

```R
# Sample data for T-tests
set.seed(123) # for reproducibility
method_A_scores <- rnorm(30, mean = 75, sd = 5) # 30 students, mean 75, sd 5
method_B_scores <- rnorm(35, mean = 78, sd = 6) # 35 students, mean 78, sd 6

# One-sample t-test: Is the mean of Method A scores significantly different from a hypothesized population mean of 70?
# H0: mean(Method A) = 70
# Ha: mean(Method A) != 70
one_sample_test <- t.test(method_A_scores, mu = 70)
print("--- One-Sample T-test (Method A vs. 70) ---")
print(one_sample_test)
```
In the one-sample t-test output, look at the `p-value`. If it's less than your chosen alpha (e.g., 0.05), you reject the null hypothesis. The `conf.int` gives you a confidence interval for the true population mean.

**Independent Two-Sample T-test:** Compares the means of two independent groups.
*   **H0:** The means of the two groups are equal (mean1 = mean2).
*   **Ha:** The means of the two groups are different (mean1 != mean2).

```R
# Independent two-sample t-test: Is there a significant difference between Method A and Method B scores?
# We assume unequal variances by default, which is generally safer.
# If you have reason to believe variances are equal, add `var.equal = TRUE`
two_sample_test <- t.test(method_A_scores, method_B_scores)
print("--- Independent Two-Sample T-test (Method A vs. Method B) ---")
print(two_sample_test)
```
Here, we're interested if the `p-value` indicates a significant difference between the average scores of Method A and Method B. A common mistake is to assume equal variances without checking. The Welch's t-test (default in R when `var.equal = FALSE`) is more robust when variances are unequal.

**Paired T-test:** Compares means from the same group under two different conditions (e.g., before and after an intervention). The data must be paired.

```R
# Paired t-test: Imagine we have scores for students before and after a tutoring program.
# H0: mean(after - before) = 0
# Ha: mean(after - before) != 0
before_scores <- c(70, 75, 80, 65, 72)
after_scores <- c(75, 78, 85, 70, 75)
paired_test <- t.test(after_scores, before_scores, paired = TRUE)
print("--- Paired T-test (After vs. Before Tutoring) ---")
print(paired_test)
```
The `paired = TRUE` argument is crucial here. The test analyzes the differences between the paired observations.

**Chi-squared Test: Assessing Independence of Categorical Variables**
The Chi-squared test (`chisq.test()`) is used to determine if there is a statistically significant association between two categorical variables.
*   **H0:** The two categorical variables are independent (no association).
*   **Ha:** The two categorical variables are dependent (an association exists).

Let's consider if there's an association between `Gender` and `Product` preference from our `customer_data_final` example. We first need to create a contingency table (cross-tabulation).

```R
# Sample data for Chi-squared test
customer_data_chi <- tibble(
  Gender = factor(c("Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female")),
  ProductPreference = factor(c("A", "B", "A", "C", "B", "A", "C", "B", "A", "C"))
)

# Create a contingency table
contingency_table <- table(customer_data_chi$Gender, customer_data_chi$ProductPreference)
print("--- Contingency Table (Gender vs. Product Preference) ---")
print(contingency_table)

# Perform Chi-squared test
chi_sq_test <- chisq.test(contingency_table)
print("--- Chi-squared Test ---")
print(chi_sq_test)
```
The output will show the Chi-squared statistic, degrees of freedom, and the `p-value`. If the `p-value` is less than your alpha, you reject H0, concluding there is a statistically significant association between `Gender` and `ProductPreference`. A common mistake is to use the Chi-squared test with very small expected cell counts (typically less than 5 in more than 20% of cells), which can make the test unreliable. R often warns you about this.

Interpreting p-values: A p-value of 0.03 (with alpha=0.05) means there's a 3% chance of observing your results if the null hypothesis were true. This is a low probability, so you reject the null. A p-value of 0.15 means there's a 15% chance, which is not low enough to reject the null. Failing to reject H0 does *not* mean H0 is true; it simply means you don't have enough evidence to reject it based on your data.

Inferential statistics requires careful consideration of assumptions (e.g., normality for t-tests, independence of observations for both tests) and appropriate test selection. Always ensure your data meets the test's requirements to draw valid conclusions.

#### Key concepts
*   **Inferential Statistics:** Statistical methods used to make inferences or predictions about a population based on a sample of data.
*   **Hypothesis Testing:** A formal procedure for determining whether to accept or reject a null hypothesis based on sample data.
*   **Null Hypothesis (H0):** A statement of no effect or no difference, assumed true until evidence suggests otherwise.
*   **Alternative Hypothesis (Ha):** A statement that contradicts the null hypothesis, representing what the researcher is trying to find evidence for.
*   **P-value:** The probability of observing results as extreme as, or more extreme than, the observed results, assuming the null hypothesis is true.
*   **Significance Level (alpha):** A pre-defined threshold (commonly 0.05) used to decide whether to reject the null hypothesis.
*   **T-test:** A statistical test used to compare the means of two groups or compare a group mean to a hypothesized value.
*   **One-sample T-test:** Compares the mean of a single sample to a known or hypothesized population mean.
*   **Independent Two-sample T-test:** Compares the means of two independent groups.
*   **Paired T-test:** Compares the means of two related (paired) samples.
*   **`t.test()`:** R function for performing t-tests.
*   **Chi-squared Test of Independence:** A statistical test used to determine if there is a significant association between two categorical variables.
*   **Contingency Table (Cross-tabulation):** A table displaying the frequency distribution of two or more categorical variables.
*   **`chisq.test()`:** R function for performing Chi-squared tests.
*   **Confidence Interval:** A range of values within which the true population parameter is estimated to lie with a certain probability (e.g., 95%).

#### Hands-on activity
**Activity: Analyze A/B Test Results and Survey Data**

You are given two datasets:
1.  **`ab_test_data.csv`:** Contains `UserID`, `Group` (A or B), and `ConversionRate` (numeric, 0-1).
2.  **`survey_data.csv`:** Contains `UserID`, `EducationLevel` (categorical), and `ProductSatisfaction` (categorical: Low, Medium, High).

**`ab_test_data.csv` content:**
```csv
UserID,Group,ConversionRate
1,A,0.05
2,A,0.07
3,A,0.04
4,A,0.06
5,A,0.05
6,B,0.08
7,B,0.09
8,B,0.07
9,B,0.10
10,B,0.08
```

**`survey_data.csv` content:**
```csv
UserID,EducationLevel,ProductSatisfaction
1,High School,Medium
2,College,High
3,High School,Low
4,College,Medium
5,Graduate,High
6,High School,Medium
7,College,Low
8,Graduate,High
9,High School,Medium
10,College,High
```

**Your tasks:**
1.  Import both datasets.
2.  Perform an independent two-sample t-test to determine if there's a significant difference in `ConversionRate` between Group A and Group B.
    *   State the null and alternative hypotheses.
    *   Interpret the p-value and confidence interval.
3.  Perform a Chi-squared test to determine if `EducationLevel` and `ProductSatisfaction` are independent.
    *   State the null and alternative hypotheses.
    *   Interpret the p-value.

**R Code Template:**

```R
# Create the ab_test_data.csv and survey_data.csv files first
# ab_test_content <- "UserID,Group,ConversionRate\n1,A,0.05\n2,A,0.07\n3,A,0.04\n4,A,0.06\n5,A,0.05\n6,B,0.08\n7,B,0.09\n8,B,0.07\n9,B,0.10\n10,B,0.08"
# writeLines(ab_test_content, "ab_test_data.csv")
# survey_content <- "UserID,EducationLevel,ProductSatisfaction\n1,High School,Medium\n2,College,High\n3,High School,Low\n4,College,Medium\n5,Graduate,High\n6,High School,Medium\n7,College,Low\n8,Graduate,High\n9,High School,Medium\n10,College,High"
# writeLines(survey_content, "survey_data.csv")

library(readr)
library(dplyr)

# 1. Import datasets
ab_test_data <- # YOUR CODE HERE: read_csv()
survey_data <- # YOUR CODE HERE: read_csv()

# Ensure categorical variables are factors
survey_data <- survey_data %>%
  mutate(
    EducationLevel = factor(EducationLevel, levels = c("High School", "College", "Graduate")),
    ProductSatisfaction = factor(ProductSatisfaction, levels = c("Low", "Medium", "High"))
  )

print("--- A/B Test Data ---")
glimpse(ab_test_data)
print("--- Survey Data ---")
glimpse(survey_data)

# 2. Independent Two-Sample T-test for ConversionRate
# H0:
# Ha:
print("--- T-test Results (Group A vs. Group B Conversion Rate) ---")
t_test_result <- # YOUR CODE HERE: Use t.test()
print(t_test_result)

# Interpretation:
# What does the p-value tell you?
# What does the confidence interval tell you about the difference in means?

# 3. Chi-squared Test for EducationLevel and ProductSatisfaction
# H0:
# Ha:
print("--- Chi-squared Test Results (Education Level vs. Product Satisfaction) ---")
contingency_table_survey <- # YOUR CODE HERE: Create table()
print("Contingency Table:")
print(contingency_table_survey)

chi_sq_result <- # YOUR CODE HERE: Use chisq.test()
print(chi_sq_result)

# Interpretation:
# What does the p-value tell you about the independence of these variables?
```

#### Assessment idea
1.  **Question:** A company conducted an experiment to see if a new website layout (Layout B) increased the average time spent on the page compared to the old layout (Layout A). They collected data from 50 users for each layout. After running an independent two-sample t-test in R, they obtained a p-value of `0.008`. The significance level (alpha) was set at `0.05`. What is the correct conclusion based on this result?
    A) There is no statistically significant difference in average time spent between Layout A and Layout B.
    B) The average time spent on Layout B is significantly higher than Layout A.
    C) The average time spent on Layout A is significantly higher than Layout B.
    D) The data is insufficient to draw a conclusion.

    **Correct Answer:** B) The average time spent on Layout B is significantly higher than Layout A.
    **Explanation:**
    *   The p-value (0.008) is less than the significance level (alpha = 0.05). This means we reject the null hypothesis (which would state there's no difference).
    *   Rejecting the null hypothesis implies there *is* a statistically significant difference.
    *   To determine *which* layout performed better, you would need to look at the sample means from the t-test output. Given the context (experiment to see if Layout B *increased* time), and assuming the sample means indeed show Layout B having a higher average, the conclusion is that Layout B led to a significantly higher average time spent. If the t-test output showed Layout A had a higher mean, the conclusion would be C. Without the means, we can only definitively say there's a significant difference. However, in a typical A/B test context where B is the "new" and expected "better" version, B is the likely answer.

2.  **Question:** You are analyzing survey data to see if there is an association between a person's `PoliticalAffiliation` (Democrat, Republican, Independent) and their `OpinionOnPolicyX` (Support, Oppose, Neutral). You perform a Chi-squared test and get a p-value of `0.12`. Your chosen significance level is `0.05`. What should you conclude?
    A) There is a statistically significant association between Political Affiliation and Opinion on Policy X.
    B) Political Affiliation and Opinion on Policy X are independent.
    C) We fail to reject the null hypothesis, meaning there is not enough evidence to conclude a statistically significant association.
    D) The Chi-squared test is not appropriate for this type of data.

    **Correct Answer:** C) We fail to reject the null hypothesis, meaning there is not enough evidence to conclude a statistically significant association.
    **Explanation:**
    *   The p-value (0.12) is greater than the significance level (alpha = 0.05).
    *   When p-value >= alpha, we "fail to reject the null hypothesis." The null hypothesis for a Chi-squared test of independence states that the two variables are independent (i.e., there is no association).
    *   Therefore, we do not have enough evidence to conclude that there is a statistically significant association between `PoliticalAffiliation` and `OpinionOnPolicyX`. It's important to say "fail to reject" rather than "accept the null," as absence of evidence is not evidence of absence.
    *   Option A is incorrect because the p-value is not significant.
    *   Option B is a stronger statement than what failing to reject the null implies; we simply don't have *enough evidence* to say they are dependent.
    *   Option D is incorrect; the Chi-squared test is perfectly appropriate for two categorical variables.

#### AI generation note
Create a 15-minute mixed-format lesson. Begin with a 3-minute animated explanation of hypothesis testing concepts: H0, Ha, p-value, alpha, and the decision rule. Use a simple analogy (e.g., a court trial where H0 is "innocent"). Then, transition to a 6-minute live coding demonstration of t-tests in R. Show the `ab_test_data` example, performing an independent two-sample t-test. Clearly explain the output: mean difference, confidence interval, and p-value. Discuss when to use `paired = TRUE` and `var.equal = TRUE`. The final 6 minutes will be a live coding demonstration of the Chi-squared test using the `survey_data`. Show how to create a contingency table and then run `chisq.test()`, interpreting its p-value in the context of independence. Emphasize common mistakes like misinterpreting p-values or ignoring assumptions. The interactive element should be a reflection prompt asking learners to formulate hypotheses for a given real-world scenario and identify which test (t-test or chi-squared) would be appropriate. Visuals should include animated hypothesis flowcharts, RStudio console output, and clear interpretation overlays for test results.

---

### Chapter 6.1 — Importing Data from CSV and Excel Files

#### Learning objectives
*   Understand the common challenges and best practices when importing external data into R.
*   Learn to import data from Comma Separated Values (CSV) files using both base R and the `readr` package.
*   Master importing data from various Excel file formats (`.xlsx`, `.xls`) using the `readxl` package.
*   Identify and troubleshoot common issues like incorrect delimiters, missing headers, and character encoding problems during data import.

#### Detailed lesson content
Welcome to the crucial first step in almost any data analysis project: getting your data into R! While R is powerful for analysis, it's rare that your data will originate directly within an R script. More often, you'll be working with data stored in external files, such as CSVs or Excel spreadsheets. This chapter will equip you with the essential tools and knowledge to confidently import these common file types, laying the groundwork for all subsequent analysis.

Let's begin with Comma Separated Values, or CSV files. CSV is arguably the most ubiquitous format for sharing tabular data due to its simplicity and plain-text nature. Each line in a CSV file represents a row of data, and values within that row are separated by a specific delimiter, most commonly a comma. R provides excellent built-in functions for reading CSVs, and the `tidyverse` suite offers enhanced alternatives.

The most straightforward way to read a CSV file in base R is using the `read.csv()` function. Imagine you have a file named `my_data.csv` in your working directory. You can import it like this:

```R
# Assuming 'my_data.csv' is in your current working directory
my_data_base <- read.csv("my_data.csv")
```

This simple command often works perfectly. However, real-world data is rarely that clean. `read.csv()` makes several assumptions: that the file uses a comma as a separator, that the first row contains column headers, and that strings should be converted to factors. You might need to adjust these. For instance, if your data uses semicolons as separators (common in some European locales), you'd use `read.csv2()` or specify the `sep` argument:

```R
# Data with semicolon separator
my_data_semicolon <- read.csv("my_data_semicolon.csv", sep = ";")

# Data without a header row
my_data_no_header <- read.csv("my_data_no_header.csv", header = FALSE)

# Preventing R from converting character strings to factors (often preferred)
my_data_strings <- read.csv("my_data.csv", stringsAsFactors = FALSE)

# Handling specific strings as NA values
my_data_na <- read.csv("my_data_with_na.csv", na.strings = c("N/A", "Missing", ""))
```

A common mistake here is not realizing that `read.csv()` by default converts character columns into factors. While factors are useful for categorical data, they can cause headaches if you intend to treat those columns as simple strings. Using `stringsAsFactors = FALSE` is a good habit unless you explicitly want factors. Another pitfall is incorrect file paths. Always ensure the file path is correct relative to your working directory, or provide the full absolute path. You can check your current working directory with `getwd()` and change it with `setwd()`.

For a more modern and often faster approach, especially with large datasets, the `readr` package (part of the `tidyverse`) offers `read_csv()`. This function is generally more consistent, faster, and makes fewer assumptions than base R functions. It also defaults to not converting strings to factors, which aligns with modern R programming practices.

First, you'll need to install and load the `readr` package if you haven't already:

```R
# Install if you haven't already
# install.packages("tidyverse") # or install.packages("readr")
library(readr)

my_data_readr <- read_csv("my_data.csv")
```

Notice the underscore in `read_csv()` compared to `read.csv()`. `read_csv()` automatically detects column types, which is a powerful feature, but it can sometimes guess incorrectly. You can inspect the inferred types using `spec(my_data_readr)` and manually specify them if needed using the `col_types` argument. Similar to base R, `read_csv()` also has variants like `read_csv2()` for semicolon-separated files, `read_tsv()` for tab-separated files, and `read_delim()` for custom delimiters.

Now, let's move on to Excel files. While CSVs are plain text, Excel files (`.xlsx` or `.xls`) are binary and more complex. R doesn't have built-in functions for them, but the `readxl` package provides excellent capabilities.

To use `readxl`, you'll need to install and load it:

```R
# Install if you haven't already
# install.packages("readxl")
library(readxl)
```

The primary function for reading Excel files is `read_excel()`. It's smart enough to handle both `.xlsx` (Excel 2007 and later) and older `.xls` formats.

```R
# Importing an Excel file
my_excel_data <- read_excel("my_spreadsheet.xlsx")
```

Excel workbooks often contain multiple sheets. `read_excel()` defaults to reading the first sheet. To read a specific sheet, you can use the `sheet` argument, providing either the sheet's name or its numerical index:

```R
# Reading a specific sheet by name
data_from_sheet2 <- read_excel("my_spreadsheet.xlsx", sheet = "Sheet2")

# Reading a specific sheet by index (e.g., the third sheet)
data_from_sheet3 <- read_excel("my_spreadsheet.xlsx", sheet = 3)
```

Another common scenario with Excel files is that your data might not start in cell A1. Perhaps there are header rows, metadata, or titles above your actual data. The `range` argument in `read_excel()` is incredibly useful for specifying a precise cell range to import. This helps you avoid importing irrelevant rows or columns.

```R
# Importing data from a specific range (e.g., A5 to F100)
data_from_range <- read_excel("my_spreadsheet.xlsx", range = "A5:F100")

# Importing data starting from a specific row (e.g., row 3 onwards)
data_from_row3 <- read_excel("my_spreadsheet.xlsx", skip = 2) # skip 2 rows to start from row 3
```

The `skip` argument is particularly helpful when you know your header row is, for example, on the third row, and you want to ignore the first two.

A critical safety note when working with Excel files: while `readxl` is robust, it's always a good practice to visually inspect your Excel file first to understand its structure, identify which sheet contains the relevant data, and determine if any rows or columns need to be skipped or if a specific range should be selected. Overly complex Excel layouts (e.g., merged cells, multiple tables on one sheet, heavily formatted data) can still pose challenges, and sometimes the simplest solution is to export the relevant sheet as a CSV from Excel before importing it into R.

Finally, character encoding issues can sometimes arise, especially with non-English characters. While `readr` and `readxl` are generally good at guessing, if you encounter garbled text, you might need to explicitly specify the `locale` or `encoding` argument. For example, `locale = locale(encoding = "latin1")` or `locale = locale(encoding = "UTF-8")` can often resolve these problems.

By mastering these functions, you'll be able to bring a vast amount of real-world data into your R environment, ready for cleaning, transformation, and analysis. Remember to always inspect your imported data immediately after import using functions like `head()`, `str()`, or `summary()` to ensure it looks as expected.

#### Key concepts
*   **CSV (Comma Separated Values):** A plain-text file format for tabular data where columns are separated by a delimiter (often a comma).
*   **Delimiter:** The character used to separate values in a plain-text data file (e.g., comma, semicolon, tab).
*   **`read.csv()`:** A base R function for importing CSV files, with options for delimiter, header, and string-to-factor conversion.
*   **`read_csv()`:** A `readr` package function for importing CSV files, known for speed, consistency, and intelligent type guessing.
*   **`read_excel()`:** A `readxl` package function for importing data from `.xlsx` and `.xls` Excel files, with options for specifying sheets and cell ranges.
*   **`stringsAsFactors`:** An argument (in base R functions) that controls whether character columns are converted into factor data types upon import.
*   **`skip`:** An argument used in import functions to specify how many initial rows to ignore before reading the data.
*   **`range`:** An argument in `read_excel()` to specify a precise cell range (e.g., "A1:G100") from which to read data.
*   **Character Encoding:** The system used to represent characters in a computer, which can cause issues if not correctly specified during import (e.g., UTF-8, Latin1).

#### Hands-on activity
**Activity: Import and Inspect Diverse Data Files**

**Scenario:** You've been given three data files:
1.  `sales_data.csv`: A standard CSV file with sales records.
2.  `european_customers.csv`: A CSV file where values are separated by semicolons, and it uses a different character encoding.
3.  `project_metrics.xlsx`: An Excel workbook with multiple sheets. The data you need is on the sheet named "Q3 Performance" and starts from row 4.

**Task:**
1.  Create dummy versions of these files on your computer (or simulate them with text strings if unable to create physical files).
2.  Import `sales_data.csv` using `read_csv()`.
3.  Import `european_customers.csv` using `read_csv2()` or `read_delim()` and ensure special characters are handled correctly (you might need `locale`).
4.  Import the "Q3 Performance" sheet from `project_metrics.xlsx`, skipping the first 3 rows.
5.  After each import, use `head()` and `str()` to inspect the imported data frames.

**Code Template:**

```R
# 1. Setup: Create dummy files (run this code to simulate the files)
# Create sales_data.csv
writeLines(c("OrderID,Product,Quantity,Price,Date",
             "1001,Laptop,1,1200.00,2023-01-15",
             "1002,Mouse,2,25.50,2023-01-16",
             "1003,Keyboard,1,75.00,2023-01-17"), "sales_data.csv")

# Create european_customers.csv (using semicolon and a special character)
writeLines(c("CustomerID;Name;City;Country",
             "201;Jörg Müller;Berlin;Germany",
             "202;Marie Dubois;Paris;France",
             "203;Elena García;Madrid;Spain"), "european_customers.csv",
           useBytes = TRUE) # useBytes to handle special chars during write

# Create project_metrics.xlsx (requires openxlsx package to write, or manually create)
# For simplicity, we'll simulate reading from it. Assume it exists.
# If you want to create it programmatically:
# install.packages("openxlsx")
# library(openxlsx)
# wb <- createWorkbook()
# addWorksheet(wb, "Summary")
# writeData(wb, "Summary", "Some header info", startCol = 1, startRow = 1)
# addWorksheet(wb, "Q3 Performance")
# writeData(wb, "Q3 Performance", "Project Metrics - Q3", startCol = 1, startRow = 1)
# writeData(wb, "Q3 Performance", "Date: 2023-09-30", startCol = 1, startRow = 2)
# writeData(wb, "Q3 Performance", "Key Performance Indicators", startCol = 1, startRow = 3)
# writeData(wb, "Q3 Performance", data.frame(
#   Metric = c("Revenue", "Expenses", "Profit"),
#   Value = c(150000, 80000, 70000),
#   Target = c(140000, 75000, 65000)
# ), startCol = 1, startRow = 4)
# saveWorkbook(wb, "project_metrics.xlsx", overwrite = TRUE)

# 2. Import sales_data.csv using read_csv()
library(readr)
sales_data <- read_csv("sales_data.csv")
print("--- sales_data ---")
head(sales_data)
str(sales_data)

# 3. Import european_customers.csv using read_csv2() or read_delim()
# For read_csv2, it defaults to semicolon and comma decimal mark.
# For read_delim, you explicitly set the delimiter.
# For character encoding, "latin1" is often a good guess for European languages.
european_customers <- read_delim("european_customers.csv", delim = ";",
                                 locale = locale(encoding = "latin1"))
print("--- european_customers ---")
head(european_customers)
str(european_customers)

# 4. Import the "Q3 Performance" sheet from project_metrics.xlsx, skipping the first 3 rows.
# NOTE: This part requires the actual 'project_metrics.xlsx' file.
# If you created it manually or with openxlsx, this will work.
# If not, you'll get an error about the file not existing.
library(readxl)
# Assuming project_metrics.xlsx exists and has a sheet named "Q3 Performance"
# with data starting from row 4.
project_metrics_q3 <- read_excel("project_metrics.xlsx", sheet = "Q3 Performance", skip = 3)
print("--- project_metrics_q3 ---")
head(project_metrics_q3)
str(project_metrics_q3)

# Clean up dummy files
file.remove("sales_data.csv")
file.remove("european_customers.csv")
# file.remove("project_metrics.xlsx") # Only if you created it programmatically
```

#### Assessment idea
1.  **Question:** You are trying to import a file named `data.txt` where values are separated by tabs, and the first row contains headers. Which of the following R commands is the most appropriate and robust way to import this data, ensuring character strings are not automatically converted to factors?
    a) `read.csv("data.txt", sep = "\t")`
    b) `read_tsv("data.txt")`
    c) `read.table("data.txt", header = TRUE, sep = "\t", stringsAsFactors = FALSE)`
    d) `read.delim("data.txt", stringsAsFactors = FALSE)`

    **Correct Answer:** b) `read_tsv("data.txt")` and c) `read.table("data.txt", header = TRUE, sep = "\t", stringsAsFactors = FALSE)` and d) `read.delim("data.txt", stringsAsFactors = FALSE)` are all viable.
    *   **Explanation:**
        *   `read_tsv("data.txt")` from the `readr` package is specifically designed for tab-separated values, automatically assumes a header, and defaults to `stringsAsFactors = FALSE`, making it a robust and modern choice.
        *   `read.table()` is a base R function that is very flexible. Specifying `header = TRUE`, `sep = "\t"`, and `stringsAsFactors = FALSE` makes it work correctly.
        *   `read.delim()` is a wrapper around `read.table()` that defaults `sep = "\t"` and `header = TRUE`, so adding `stringsAsFactors = FALSE` makes it a good option.
        *   `read.csv("data.txt", sep = "\t")` would work for the delimiter, but `read.csv()` defaults to `stringsAsFactors = TRUE`, which is often undesirable.

2.  **Question:** You have an Excel file named `report.xlsx` with three sheets: "Summary", "Raw Data", and "Analysis". The data you need is on the "Raw Data" sheet, but it starts from row 5 because the first four rows contain report titles and metadata. Write the R code to import only the relevant data from the "Raw Data" sheet.

    **Correct Answer:**
    ```R
    library(readxl)
    raw_data_df <- read_excel("report.xlsx", sheet = "Raw Data", skip = 4)
    ```
    **Explanation:** The `read_excel()` function from the `readxl` package is used for Excel files. The `sheet` argument specifies which sheet to read by name. The `skip = 4` argument tells R to ignore the first four rows, effectively starting data import from the fifth row, which contains the actual headers and data.

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with a conceptual explanation of CSV vs. Excel, using animated diagrams to show their structure. Then transition to live coding demonstrations for `read.csv()`, `read_csv()`, and `read_excel()`. For `read.csv()`, show how `sep`, `header`, and `stringsAsFactors` work with small, simulated datasets. For `read_csv()`, highlight its speed and type guessing. For `read_excel()`, demonstrate reading by sheet name/index and using the `skip` and `range` arguments. Include a visual representation of a messy Excel sheet and how `skip` and `range` help. Emphasize common mistakes like wrong delimiters or paths with clear error messages shown and corrected. An interactive element could be a mini-quiz asking learners to choose the correct import function and arguments for a given file description. Ensure captions and alt text for all visuals.

---

### Chapter 6.2 — Importing Data from Databases and Web Sources

#### Learning objectives
*   Understand the basic principles of connecting R to relational databases.
*   Learn to install and use the `DBI` package along with database-specific drivers (e.g., `RSQLite`) to query data.
*   Explore methods for extracting data from web pages using HTML parsing with `rvest`.
*   Discover how to consume data from JSON APIs using the `jsonlite` package.
*   Identify and mitigate common issues like database connection errors, SQL syntax problems, and web scraping ethical considerations.

#### Detailed lesson content
Beyond flat files like CSVs and Excel, a vast amount of data resides in structured databases or is dynamically generated and served via the web. This chapter will guide you through connecting R to these powerful data sources, enabling you to access much larger and more complex datasets directly.

Let's start with databases. Relational databases (like SQLite, PostgreSQL, MySQL, SQL Server) are fundamental to modern data storage. R can interact with these databases using a standardized interface provided by the `DBI` package, which stands for "Database Interface." `DBI` provides a common set of functions, but to connect to a *specific* type of database, you also need a corresponding database driver package (e.g., `RSQLite` for SQLite, `RPostgreSQL` for PostgreSQL, `RMySQL` for MySQL).

For simplicity and because it doesn't require a separate server setup, we'll focus on SQLite, a self-contained, file-based database. First, you need to install both `DBI` and `RSQLite`:

```R
# Install if you haven't already
# install.packages(c("DBI", "RSQLite"))
library(DBI)
library(RSQLite)
```

The general workflow for interacting with a database involves four steps:
1.  **Connect:** Establish a connection to the database.
2.  **Query:** Send SQL queries to retrieve or manipulate data.
3.  **Fetch:** Retrieve the results of your query into an R data frame.
4.  **Disconnect:** Close the connection to release resources.

Here's an example using a hypothetical SQLite database file named `my_database.sqlite`:

```R
# 1. Connect to the database
# If the file doesn't exist, RSQLite will create an empty one.
con <- dbConnect(RSQLite::SQLite(), "my_database.sqlite")

# For demonstration, let's create a dummy table and insert some data
# This part is usually done by a database administrator, but useful for practice.
dbExecute(con, "CREATE TABLE IF NOT EXISTS employees (
                   id INTEGER PRIMARY KEY,
                   name TEXT,
                   department TEXT,
                   salary REAL
                 )")
dbExecute(con, "INSERT INTO employees (name, department, salary) VALUES
                 ('Alice', 'HR', 60000),
                 ('Bob', 'Engineering', 85000),
                 ('Charlie', 'HR', 62000),
                 ('David', 'Engineering', 90000)")

# 2. Query data
# Execute a SQL query and fetch results
employees_data <- dbGetQuery(con, "SELECT * FROM employees WHERE department = 'Engineering'")
print(employees_data)

# You can also use dbReadTable to read an entire table
all_employees <- dbReadTable(con, "employees")
print(all_employees)

# 3. Disconnect
dbDisconnect(con)
```

Common mistakes when working with databases include incorrect connection strings (e.g., wrong host, port, username, password), SQL syntax errors, or forgetting to disconnect. Always ensure your SQL queries are correct and test them in a database client first if you're unsure. Forgetting to disconnect can lead to resource leaks or locked files, especially with file-based databases like SQLite.

Moving on to web sources, the internet is a vast repository of data. We can access this data in two primary ways: by parsing HTML from web pages (web scraping) or by consuming structured data from Application Programming Interfaces (APIs).

**Web Scraping with `rvest`:**
Web scraping involves extracting data directly from the HTML content of web pages. This can be powerful, but it comes with ethical considerations and potential legal implications. Always check a website's `robots.txt` file (e.g., `www.example.com/robots.txt`) and its terms of service before scraping. Be polite: don't hammer servers with requests, and introduce delays between requests.

The `rvest` package (part of the `tidyverse`) is excellent for web scraping. Its workflow typically involves:
1.  **Read HTML:** Download the HTML content of a web page.
2.  **Select Elements:** Use CSS selectors or XPath to identify the specific HTML elements containing the data you want.
3.  **Extract Data:** Pull out text, attributes, or table data.

Let's scrape a simple HTML table from a hypothetical page:

```R
# Install if you haven't already
# install.packages("rvest")
library(rvest)
library(dplyr) # For %>% pipe operator

# 1. Read HTML from a URL
# Using a Wikipedia page as an example (check their terms of use before scraping extensively)
url <- "https://en.wikipedia.org/wiki/List_of_countries_by_population"
webpage <- read_html(url)

# 2. Select elements: Find HTML tables
# Most tables can be identified by the 'table' tag.
# Use browser developer tools (F12) to inspect the specific table you need.
# For Wikipedia, tables often have specific classes. Let's try to find the first table.
html_tables <- html_nodes(webpage, "table")

# Often, you need to be more specific. Let's look for a table with a specific class or ID.
# For this Wikipedia page, the main table often has class "wikitable sortable"
population_table <- html_nodes(webpage, ".wikitable.sortable") %>%
  .[1] # Select the first table with these classes

# 3. Extract data: Convert the HTML table to a data frame
if (length(population_table) > 0) {
  population_df <- html_table(population_table[[1]], fill = TRUE)
  print(head(population_df))
} else {
  print("Could not find the specified table.")
}
```

A common mistake in web scraping is using incorrect CSS selectors or XPath expressions. Always use your browser's developer tools (usually F12) to inspect the HTML structure and find the correct selectors. Websites also change their structure, so a scraper that works today might break tomorrow.

**Consuming JSON APIs with `jsonlite`:**
Many modern web services provide data through APIs (Application Programming Interfaces), often returning data in JSON (JavaScript Object Notation) format. JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.

The `jsonlite` package is excellent for working with JSON data in R.

```R
# Install if you haven't already
# install.packages("jsonlite")
library(jsonlite)

# Example: Fetching data from a public API (e.g., Open-Meteo for weather)
# Always check API documentation for usage limits and authentication if required.
api_url <- "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"

# Fetch the JSON data
json_data <- fromJSON(api_url)

# The result is often a list. You might need to navigate it to find the data frame.
# For this API, 'hourly' contains the time series data.
hourly_forecast <- json_data$hourly
print(head(hourly_forecast))

# You can also convert an R list/data frame to JSON
my_list <- list(name = "John Doe", age = 30, city = "New York")
json_output <- toJSON(my_list, pretty = TRUE) # pretty = TRUE for readable output
print(json_output)
```

When working with APIs, common issues include rate limiting (making too many requests too quickly), authentication errors (if the API requires a key or token), and understanding the nested structure of the JSON response. Always consult the API's documentation to understand its endpoints, parameters, and response format.

By mastering database connections and web data extraction, you unlock access to an enormous and dynamic world of information, greatly expanding the scope of your R programming projects. Remember to practice responsible data acquisition and respect data providers' terms of service.

#### Key concepts
*   **DBI (Database Interface):** An R package that provides a consistent interface for connecting to various relational databases.
*   **Database Driver:** A specific R package (e.g., `RSQLite`, `RPostgreSQL`) that allows `DBI` to communicate with a particular type of database.
*   **SQL (Structured Query Language):** The standard language for managing and querying relational databases.
*   **`dbConnect()`:** A `DBI` function to establish a connection to a database.
*   **`dbGetQuery()`:** A `DBI` function to send a SQL query and retrieve results into an R data frame.
*   **`dbExecute()`:** A `DBI` function to execute SQL commands that don't return results (e.g., `INSERT`, `UPDATE`, `CREATE TABLE`).
*   **`dbDisconnect()`:** A `DBI` function to close a database connection.
*   **Web Scraping:** The process of extracting data from websites by parsing their HTML content.
*   **`rvest`:** An R package for web scraping, providing functions to read HTML, select elements, and extract data.
*   **CSS Selector:** A pattern used to select HTML elements based on their tag name, class, ID, or other attributes.
*   **API (Application Programming Interface):** A set of rules and protocols for building and interacting with software applications, often used to provide data over the web.
*   **JSON (JavaScript Object Notation):** A lightweight data-interchange format, commonly used by web APIs.
*   **`jsonlite`:** An R package for working with JSON data, converting between JSON and R data structures.
*   **`fromJSON()`:** A `jsonlite` function to parse JSON data into R objects (lists, data frames).
*   **`toJSON()`:** A `jsonlite` function to convert R objects into JSON format.

#### Hands-on activity
**Activity: Query a Database and Fetch API Data**

**Scenario:** You need to retrieve data from a simple SQLite database and then fetch some real-time data from a public API.

**Task:**
1.  **Database Task:**
    *   Connect to an in-memory SQLite database (no file needed).
    *   Create a table named `products` with columns `product_id` (INTEGER), `name` (TEXT), `price` (REAL), and `stock` (INTEGER).
    *   Insert at least three rows of sample data into the `products` table.
    *   Query the `products` table to select all products where `stock` is less than 10.
    *   Fetch the results into an R data frame and print it.
    *   Disconnect from the database.
2.  **API Task:**
    *   Use the `jsonlite` package to fetch the current exchange rates from the `https://api.exchangerate-api.com/v4/latest/USD` API endpoint (this is a free, public API).
    *   Inspect the structure of the returned JSON data.
    *   Extract the exchange rates (usually under a `rates` key) into an R list or data frame and print the first few rates.

**Code Template:**

```R
# Part 1: Database Interaction
# Install packages if needed
# install.packages(c("DBI", "RSQLite"))
library(DBI)
library(RSQLite)

# 1. Connect to an in-memory SQLite database
con <- dbConnect(RSQLite::SQLite(), ":memory:") # ":memory:" creates a temporary in-memory database

# 2. Create the 'products' table
dbExecute(con, "CREATE TABLE products (
                   product_id INTEGER PRIMARY KEY,
                   name TEXT,
                   price REAL,
                   stock INTEGER
                 )")

# 3. Insert sample data
dbExecute(con, "INSERT INTO products (name, price, stock) VALUES
                 ('Widget A', 19.99, 15),
                 ('Gadget B', 49.50, 5),
                 ('Doodad C', 5.25, 20),
                 ('Thingamajig D', 12.00, 8)")

# 4. Query products with stock less than 10
low_stock_products <- dbGetQuery(con, "SELECT * FROM products WHERE stock < 10")

# 5. Print the results
print("Low Stock Products:")
print(low_stock_products)

# 6. Disconnect
dbDisconnect(con)
print("Database connection closed.")

# Part 2: API Interaction
# Install package if needed
# install.packages("jsonlite")
library(jsonlite)

# 1. API endpoint for exchange rates (free, public API)
exchange_rate_url <- "https://api.exchangerate-api.com/v4/latest/USD"

# 2. Fetch the JSON data
exchange_data <- fromJSON(exchange_rate_url)

# 3. Inspect the structure and extract rates
print("--- Exchange Rate API Response Structure ---")
str(exchange_data)

# The rates are usually nested under the 'rates' key
if ("rates" %in% names(exchange_data)) {
  current_rates <- exchange_data$rates
  print("--- Current Exchange Rates (USD as base) ---")
  # Print the first few rates
  print(head(current_rates))
  # You might want to convert this to a data frame for easier manipulation
  rates_df <- as.data.frame(current_rates)
  names(rates_df) <- "Rate"
  rates_df$Currency <- row.names(rates_df)
  row.names(rates_df) <- NULL
  print(head(rates_df))
} else {
  print("Could not find 'rates' in the API response.")
}
```

#### Assessment idea
1.  **Question:** You need to connect to a PostgreSQL database named `analytics_db` on `localhost` (port 5432) with username `analyst` and password `securepass`. After connecting, you want to retrieve all records from a table called `sales_transactions`. Which sequence of R commands correctly performs these actions?
    a)
    ```R
    library(DBI)
    library(RPostgreSQL)
    con <- dbConnect(RPostgreSQL::PostgreSQL(), dbname = "analytics_db",
                     host = "localhost", port = 5432,
                     user = "analyst", password = "securepass")
    sales_data <- dbGetQuery(con, "SELECT * FROM sales_transactions")
    dbDisconnect(con)
    ```
    b)
    ```R
    library(DBI)
    library(RSQLite)
    con <- dbConnect(RSQLite::SQLite(), dbname = "analytics_db",
                     host = "localhost", port = 5432,
                     user = "analyst", password = "securepass")
    sales_data <- dbReadTable(con, "sales_transactions")
    dbDisconnect(con)
    ```
    c)
    ```R
    library(DBI)
    library(RPostgreSQL)
    con <- dbConnect(RPostgreSQL::PostgreSQL(), dbname = "analytics_db")
    sales_data <- dbGetQuery(con, "GET * FROM sales_transactions")
    dbDisconnect(con)
    ```
    d)
    ```R
    library(DBI)
    library(RMySQL)
    con <- dbConnect(RMySQL::MySQL(), dbname = "analytics_db",
                     host = "localhost", port = 5432,
                     user = "analyst", password = "securepass")
    sales_data <- dbGetQuery(con, "SELECT * FROM sales_transactions")
    dbClose(con)
    ```

    **Correct Answer:** a)
    **Explanation:**
    *   Option a) correctly uses `RPostgreSQL::PostgreSQL()` for a PostgreSQL database, specifies all connection parameters, uses `dbGetQuery()` with correct SQL, and `dbDisconnect()` to close.
    *   Option b) uses `RSQLite::SQLite()` which is for SQLite, not PostgreSQL.
    *   Option c) uses `GET` instead of `SELECT` in the SQL query, which is incorrect SQL syntax.
    *   Option d) uses `RMySQL::MySQL()` which is for MySQL, not PostgreSQL, and uses `dbClose()` instead of `dbDisconnect()`.

2.  **Question:** You want to extract the titles of all `<h2>` tags from a webpage located at `https://example.com/blog`. Which `rvest` code snippet would achieve this?
    a)
    ```R
    library(rvest)
    webpage <- read_html("https://example.com/blog")
    h2_titles <- html_text(html_nodes(webpage, "h2"))
    ```
    b)
    ```R
    library(rvest)
    webpage <- read_html("https://example.com/blog")
    h2_titles <- html_attr(html_nodes(webpage, "h2"), "title")
    ```
    c)
    ```R
    library(rvest)
    webpage <- read_html("https://example.com/blog")
    h2_titles <- html_table(html_nodes(webpage, "h2"))
    ```
    d)
    ```R
    library(rvest)
    webpage <- read_html("https://example.com/blog")
    h2_titles <- html_nodes(webpage, "h2")
    ```

    **Correct Answer:** a)
    **Explanation:**
    *   `read_html()` correctly downloads the webpage.
    *   `html_nodes(webpage, "h2")` correctly selects all `<h2>` elements.
    *   `html_text()` extracts the visible text content from the selected HTML nodes, which corresponds to the titles.
    *   Option b) would extract the `title` *attribute* of the `<h2>` tag, not its text content.
    *   Option c) attempts to treat `<h2>` tags as tables, which is incorrect.
    *   Option d) only returns the HTML nodes themselves, not their text content.

#### AI generation note
Design a 12-15 minute video lesson with mixed live coding and animated diagrams. Start with an animation illustrating the client-server model for databases and web APIs. For databases, show a live coding demo connecting to an in-memory SQLite database, creating a table, inserting data, and querying it. Visualize the SQL query flow. For web scraping, use a simplified HTML page example (diagrammatically) and show how `read_html()`, `html_nodes()`, and `html_text()` work with CSS selectors. Emphasize ethical considerations and `robots.txt`. For JSON APIs, use a public API (like a weather or exchange rate API) to demonstrate `fromJSON()`, showing the raw JSON structure and how to navigate it in R. Include a visual of nested JSON data. An interactive element could be a challenge to write a specific SQL query or extract a particular piece of data from a provided JSON string. Ensure accessibility with captions and descriptive alt text for all code and diagrams.

---

### Chapter 6.3 — Data Inspection and Cleaning after Import

#### Learning objectives
*   Develop a systematic approach to inspecting newly imported data for common issues.
*   Master techniques for identifying and handling missing values (NAs) in various ways.
*   Learn to identify and correct incorrect data types, converting columns to appropriate formats.
*   Understand how to detect and manage duplicate rows in a dataset.
*   Recognize and address inconsistencies or errors in categorical and textual data.

#### Detailed lesson content
Once you've successfully imported your data into R, the next critical step is to inspect it thoroughly and clean it. Raw data, especially from external sources, is almost never perfect. It often contains missing values, incorrect data types, duplicates, or inconsistencies that can severely impact your analysis if not addressed. This chapter will guide you through the essential techniques for data inspection and cleaning, transforming your raw import into a reliable dataset ready for analysis.

Our journey begins with data inspection. Before you even think about cleaning, you need to understand what you're working with. Several functions are indispensable for this initial reconnaissance:

*   `head(df)` and `tail(df)`: Show the first and last few rows of your data frame, giving you a quick visual sense of the data.
*   `str(df)`: Displays the structure of your data frame, including the number of observations and variables, their names, data types (e.g., `int`, `num`, `chr`), and a sample of values. This is incredibly useful for spotting incorrect data types immediately.
*   `summary(df)`: Provides a statistical summary for each column. For numeric columns, it gives min, max, median, mean, and quartiles. For factors, it shows frequency counts. This helps identify outliers or unexpected value distributions.
*   `glimpse(df)` (from `dplyr`): A `tidyverse` alternative to `str()`, often more readable for wide data frames, showing column names, types, and values in a transposed format.
*   `View(df)`: Opens the data frame in a spreadsheet-like viewer in RStudio, allowing for interactive exploration.

Let's imagine we've imported a dataset called `customer_data`.

```R
# Example data (simulating imported data)
customer_data <- data.frame(
  CustomerID = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10),
  Name = c("Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Alice", "Alice"),
  Age = c(25, 30, NA, 40, 28, 35, 29, 32, NA, 25, 25),
  Gender = c("F", "M", "M", "F", "F", "M", "F", "F", "M", "F", "F"),
  Income = c(50000, 75000, 60000, 80000, 55000, NA, 70000, 62000, 90000, 50000, 50000),
  EnrollmentDate = c("2022-01-01", "2022-03-15", "2022-02-20", "2022-04-10", "2022-01-25", "2022-05-01", "2022-03-05", "2022-04-20", "2022-02-10", "2022-01-01", "2022-01-01"),
  stringsAsFactors = FALSE
)

print(head(customer_data))
print(str(customer_data))
print(summary(customer_data))
library(dplyr)
glimpse(customer_data)
```

From `str()` and `summary()`, you might notice `Age` and `Income` have `NA`s, and `EnrollmentDate` is `chr` (character) instead of a date type. `Gender` is `chr` but should probably be a factor.

**Handling Missing Values (NAs):**
Missing values are a ubiquitous problem. R represents them as `NA`. Ignoring them can lead to errors or biased results.

*   **Identifying NAs:**
    *   `is.na(df)`: Returns a logical matrix indicating `NA` positions.
    *   `sum(is.na(df))`: Total count of `NA`s in the entire data frame.
    *   `colSums(is.na(df))`: Count of `NA`s per column.
    *   `rowSums(is.na(df))`: Count of `NA`s per row.
    *   `anyNA(df)`: Checks if any `NA`s exist in the data frame (returns `TRUE`/`FALSE`).

```R
print("NA counts per column:")
print(colSums(is.na(customer_data)))
```

*   **Dealing with NAs:**
    1.  **Removal:**
        *   `na.omit(df)`: Removes entire rows that contain *any* `NA`s. Be cautious, as this can drastically reduce your dataset size if `NA`s are widespread.
        *   `df[!is.na(df$column_name), ]`: Removes rows where a specific column has `NA`s.

        ```R
        # Remove rows with NA in 'Age'
        customer_data_no_na_age <- customer_data[!is.na(customer_data$Age), ]
        print("Data after removing NAs in Age column:")
        print(head(customer_data_no_na_age))

        # Remove all rows with any NA (use with caution!)
        customer_data_completely_clean <- na.omit(customer_data)
        print("Data after removing all rows with any NA:")
        print(customer_data_completely_clean)
        ```
        A common mistake is to use `na.omit()` blindly. If you have many columns with scattered NAs, `na.omit()` might leave you with very little data. Always check `nrow(na.omit(df))` before committing.

    2.  **Imputation:** Replacing `NA`s with a substitute value (e.g., mean, median, mode, or a specific constant). This preserves rows but introduces assumptions.
        *   Mean/Median for numeric:
        ```R
        # Impute 'Age' NAs with the mean age
        mean_age <- mean(customer_data$Age, na.rm = TRUE) # na.rm=TRUE is crucial here!
        customer_data$Age[is.na(customer_data$Age)] <- mean_age
        print("Data after imputing Age with mean:")
        print(customer_data$Age)

        # Impute 'Income' NAs with the median income
        median_income <- median(customer_data$Income, na.rm = TRUE)
        customer_data$Income[is.na(customer_data$Income)] <- median_income
        print("Data after imputing Income with median:")
        print(customer_data$Income)
        ```
        *   Mode for categorical (requires a custom function as R doesn't have a built-in `mode()` for this):
        ```R
        # A simple mode function
        get_mode <- function(v) {
          uniqv <- unique(v)
          uniqv[which.max(tabulate(match(v, uniqv)))]
        }
        # Example: if Gender had NAs, impute with mode
        # mode_gender <- get_mode(customer_data$Gender[!is.na(customer_data$Gender)])
        # customer_data$Gender[is.na(customer_data$Gender)] <- mode_gender
        ```
        Imputation is a complex topic. The choice of imputation method depends heavily on the nature of the missingness and the downstream analysis. Using the mean/median is a simple approach but can distort distributions or relationships.

**Correcting Data Types:**
`str()` is your best friend here. R might import numeric columns as character if they contain non-numeric symbols (like "N/A" or "$"). Dates are frequently imported as characters.

*   **Numeric:** `as.numeric()`
*   **Factor:** `as.factor()`
*   **Date/Time:** `as.Date()`, `as.POSIXct()` (often with `lubridate` package for more flexibility).

```R
# Convert Gender to factor
customer_data$Gender <- as.factor(customer_data$Gender)

# Convert EnrollmentDate to Date type
customer_data$EnrollmentDate <- as.Date(customer_data$EnrollmentDate)

print("Data structure after type conversion:")
print(str(customer_data))
```
A common mistake is trying to convert a column with non-numeric characters (e.g., "50,000" or "N/A") directly to numeric. You must clean these characters *before* conversion. For example, `gsub(",", "", "50,000")` would remove the comma.

**Identifying and Handling Duplicates:**
Duplicate rows can artificially inflate sample sizes and bias results.

*   **Identifying duplicates:**
    *   `duplicated(df)`: Returns a logical vector indicating which rows are duplicates of previous rows.
    *   `df[duplicated(df), ]`: Shows the duplicate rows.
    *   `df[duplicated(df) | duplicated(df, fromLast = TRUE), ]`: Shows *all* instances of duplicated rows.

```R
print("Duplicated rows (showing only the second instance of a duplicate):")
print(customer_data[duplicated(customer_data), ])

print("All instances of duplicated rows:")
print(customer_data[duplicated(customer_data) | duplicated(customer_data, fromLast = TRUE), ])
```

*   **Removing duplicates:**
    *   `distinct(df)` (from `dplyr`): Removes duplicate rows, keeping only unique rows.
    *   `unique(df)` (base R): Similar to `distinct()`.

```R
# Remove duplicate rows
customer_data_unique <- distinct(customer_data)
print("Data after removing duplicates:")
print(customer_data_unique)
```
Be careful when removing duplicates. Sometimes, seemingly duplicate rows might be legitimate (e.g., two different customers named "Alice" who enrolled on the same date). Consider if you should remove duplicates based on *all* columns or a specific subset of key identifier columns (e.g., `distinct(df, CustomerID, .keep_all = TRUE)`).

**Inconsistencies and Errors:**
Categorical variables often have typos or inconsistent casing (e.g., "Male", "male", "M"). Text fields might have leading/trailing spaces.

*   **Casing:** `tolower()`, `toupper()`
*   **Whitespace:** `trimws()`
*   **Recoding:** `ifelse()`, `case_when()` (from `dplyr`), or `factor()` with `levels`.

```R
# Example of inconsistent gender data (if we had "Male", "Female", "male")
# customer_data$Gender <- tolower(customer_data$Gender) # Convert all to lowercase
# customer_data$Gender <- as.factor(customer_data$Gender) # Then convert to factor

# Example of trimming whitespace (if Name had " Alice ")
customer_data$Name <- trimws(customer_data$Name)
```

Data cleaning is an iterative process. You'll often go back and forth between inspection and cleaning steps. It requires patience, attention to detail, and a good understanding of your data's context. Always document your cleaning steps, as they can significantly impact your results. A clean dataset is the foundation for reliable and insightful analysis.

#### Key concepts
*   **Data Inspection:** The initial process of examining a dataset to understand its structure, content, and identify potential issues.
*   **`head()` / `tail()`:** Functions to view the first/last few rows of a data frame.
*   **`str()`:** A base R function to display the structure of an R object, including data types.
*   **`summary()`:** A base R function to provide descriptive statistics for each column.
*   **`glimpse()`:** A `dplyr` function similar to `str()`, often more readable.
*   **Missing Values (NAs):** Placeholder in R for unknown or unavailable data.
*   **`is.na()`:** A function to check for missing values.
*   **`colSums(is.na())`:** A common pattern to count missing values per column.
*   **`na.omit()`:** A base R function to remove rows containing any `NA`s.
*   **Imputation:** The process of replacing missing values with substituted values (e.g., mean, median, mode).
*   **Data Type Conversion:** Changing the data type of a column (e.g., `as.numeric()`, `as.factor()`, `as.Date()`).
*   **Duplicates:** Identical rows or records in a dataset.
*   **`duplicated()`:** A base R function to identify duplicate rows.
*   **`distinct()`:** A `dplyr` function to remove duplicate rows, keeping only unique ones.
*   **Inconsistencies:** Variations in data entry (e.g., different spellings, inconsistent casing, extra spaces).
*   **`trimws()`:** A function to remove leading and trailing whitespace from character strings.

#### Hands-on activity
**Activity: Clean a Messy Survey Dataset**

**Scenario:** You've imported a survey dataset `survey_responses.csv` that is known to be messy. It contains missing values, inconsistent text entries, and potentially incorrect data types.

**Task:**
1.  **Create a dummy `survey_responses.csv` file** with the specified characteristics.
2.  **Import** `survey_responses.csv` into R.
3.  **Inspect** the data using `head()`, `str()`, and `summary()`.
4.  **Handle Missing Values:**
    *   Identify columns with NAs.
    *   Impute missing `Age` values with the median age.
    *   Remove rows where `Response` is NA (assume these are incomplete surveys).
5.  **Correct Data Types:**
    *   Convert `Gender` to a factor.
    *   Convert `EnrollmentDate` to a Date object.
6.  **Address Inconsistencies:**
    *   Standardize the `City` column (e.g., "new york", "New York", "NY" should all become "New York").
    *   Remove leading/trailing whitespace from the `Name` column.
7.  **Identify and Remove Duplicates:** Find and remove any completely duplicate rows.
8.  **Re-inspect** the cleaned data to confirm changes.

**Code Template:**

```R
# 1. Create dummy survey_responses.csv
writeLines(c("RespondentID,Name,Age,Gender,City,EnrollmentDate,Response",
             "1, John Doe ,30,Male,New York,2023-01-01,Satisfied",
             "2,Jane Smith,NA,Female,Los Angeles,2023-01-05,Neutral",
             "3, Peter Jones,45,male,new york,2023-01-10,Dissatisfied",
             "4, Alice Brown,28,Female,Chicago,2023-01-15,Satisfied",
             "5, Bob White ,NA,Male,New York,2023-01-20,NA",
             "6, John Doe ,30,Male,New York,2023-01-01,Satisfied", # Duplicate
             "7,Charlie Green,35,female,LA,2023-01-25,Satisfied"),
           "survey_responses.csv")

# 2. Import the data
library(readr)
library(dplyr) # For distinct and case_when

survey_data <- read_csv("survey_responses.csv")
print("--- Original Data Head ---")
print(head(survey_data))
print("--- Original Data Structure ---")
print(str(survey_data))
print("--- Original Data Summary ---")
print(summary(survey_data))

# 3. Handle Missing Values
print("--- NA counts before cleaning ---")
print(colSums(is.na(survey_data)))

# Impute missing Age with median
median_age <- median(survey_data$Age, na.rm = TRUE)
survey_data$Age[is.na(survey_data$Age)] <- median_age
print(paste("Imputed Age NAs with median:", median_age))

# Remove rows where Response is NA
survey_data_cleaned <- survey_data[!is.na(survey_data$Response), ]
print("--- Data after removing NA Responses ---")
print(head(survey_data_cleaned))

# 4. Correct Data Types
survey_data_cleaned$Gender <- as.factor(survey_data_cleaned$Gender)
survey_data_cleaned$EnrollmentDate <- as.Date(survey_data_cleaned$EnrollmentDate)
print("--- Data structure after type conversion ---")
print(str(survey_data_cleaned))

# 5. Address Inconsistencies
# Trim whitespace from Name
survey_data_cleaned$Name <- trimws(survey_data_cleaned$Name)

# Standardize City names
survey_data_cleaned$City <- tolower(survey_data_cleaned$City) # Convert all to lowercase first
survey_data_cleaned$City <- case_when(
  survey_data_cleaned$City == "new york" ~ "New York",
  survey_data_cleaned$City == "los angeles" | survey_data_cleaned$City == "la" ~ "Los Angeles",
  survey_data_cleaned$City == "chicago" ~ "Chicago",
  TRUE ~ survey_data_cleaned$City # Keep other cities as is
)
survey_data_cleaned$City <- as.factor(survey_data_cleaned$City) # Convert to factor after standardizing

print("--- Data after standardizing City and trimming Name ---")
print(head(survey_data_cleaned))

# 6. Identify and Remove Duplicates
print("--- Duplicated rows found (before removal) ---")
print(survey_data_cleaned[duplicated(survey_data_cleaned), ])

survey_data_cleaned <- distinct(survey_data_cleaned)
print("--- Data after removing duplicates ---")
print(head(survey_data_cleaned))

# 7. Re-inspect the cleaned data
print("--- Final Cleaned Data Structure ---")
print(str(survey_data_cleaned))
print("--- Final Cleaned Data Summary ---")
print(summary(survey_data_cleaned))

# Clean up dummy file
file.remove("survey_responses.csv")
```

#### Assessment idea
1.  **Question:** You have a data frame `orders` with a column `OrderValue` that was imported as a character type because some values were "N/A" and others contained dollar signs (e.g., "$150.75"). You want to convert this column to numeric, replacing "N/A" with actual `NA`s and removing the dollar sign. Which sequence of operations is correct?
    a)
    ```R
    orders$OrderValue <- as.numeric(orders$OrderValue)
    orders$OrderValue[is.na(orders$OrderValue)] <- 0
    orders$OrderValue <- gsub("\\$", "", orders$OrderValue)
    ```
    b)
    ```R
    orders$OrderValue <- gsub("\\$", "", orders$OrderValue)
    orders$OrderValue[orders$OrderValue == "N/A"] <- NA
    orders$OrderValue <- as.numeric(orders$OrderValue)
    ```
    c)
    ```R
    orders$OrderValue[orders$OrderValue == "N/A"] <- NA
    orders$OrderValue <- gsub("\\$", "", orders$OrderValue)
    orders$OrderValue <- as.numeric(orders$OrderValue)
    ```
    d)
    ```R
    orders$OrderValue <- as.numeric(gsub("\\$", "", orders$OrderValue))
    orders$OrderValue[is.na(orders$OrderValue)] <- NA
    ```

    **Correct Answer:** c)
    **Explanation:**
    *   The correct order is crucial. You must first handle the "N/A" string by converting it to R's `NA` (since `as.numeric()` would produce `NA` for "N/A" anyway, but explicitly setting it is clearer). Then, remove the non-numeric characters (like "$"). Finally, convert the cleaned string column to numeric.
    *   Option a) tries to convert to numeric *before* cleaning, which will result in `NA`s for all problematic entries, and then tries to remove "$" from a numeric column (which won't work).
    *   Option b) removes "$" first, but then `orders$OrderValue == "N/A"` might not work if "N/A" was already converted to `NA` by `as.numeric()` implicitly. It's safer to convert "N/A" to `NA` explicitly *before* the numeric conversion.
    *   Option d) combines the `gsub` and `as.numeric` but doesn't explicitly handle "N/A" to `NA` conversion first, which is a potential point of failure or ambiguity. The `is.na` check *after* conversion is good, but the explicit `orders$OrderValue[orders$OrderValue == "N/A"] <- NA` is more robust for specific string values.

2.  **Question:** You have a data frame `employees` with columns `EmployeeID`, `Name`, `Department`. You suspect there might be duplicate entries where the same `EmployeeID` appears multiple times but with slightly different `Name` or `Department` values (data entry errors). You want to identify *all* rows that share an `EmployeeID` with at least one other row, regardless of whether the other columns are identical. Which code snippet correctly identifies these rows?
    a) `employees[duplicated(employees$EmployeeID), ]`
    b) `employees[duplicated(employees), ]`
    c) `employees[duplicated(employees$EmployeeID) | duplicated(employees$EmployeeID, fromLast = TRUE), ]`
    d) `distinct(employees, EmployeeID, .keep_all = TRUE)`

    **Correct Answer:** c)
    **Explanation:**
    *   `duplicated(employees$EmployeeID)` identifies rows where `EmployeeID` is a duplicate of a *previous* row. This means the *first* instance of a duplicated ID would not be flagged.
    *   `duplicated(employees$EmployeeID, fromLast = TRUE)` identifies rows where `EmployeeID` is a duplicate of a *subsequent* row. This means the *last* instance of a duplicated ID would not be flagged.
    *   Combining them with `|` (OR) ensures that *all* rows that have a duplicate `EmployeeID` (whether they are the first, middle, or last occurrence) are identified.
    *   Option a) would only show the second and subsequent occurrences of a duplicate ID.
    *   Option b) checks for completely identical rows across *all* columns, not just `EmployeeID`.
    *   Option d) would remove all but one instance of each `EmployeeID`, which is a removal operation, not an identification operation, and it would keep only one instance.

#### AI generation note
Create a 10-12 minute interactive lab walkthrough. Begin with a short animation showing common data quality issues (missing values, wrong types, duplicates) in a tabular format. Then, switch to RStudio live coding. Use a sample messy dataset (like the one in the activity). Demonstrate `head()`, `str()`, `summary()`, and `glimpse()` for initial inspection. For missing values, show `colSums(is.na())`, then demonstrate removing NAs (`na.omit()`) with a warning, and then imputing with mean/median. For data types, show how to convert character to factor and date, highlighting common errors. For duplicates, show `duplicated()` and `distinct()`. Emphasize the iterative nature of cleaning. An interactive element could be a "spot the error" challenge where learners identify a data quality issue in a provided `str()` output and suggest the correct cleaning step. Ensure high-contrast visuals and captions.

---

### Chapter 6.4 — Descriptive Statistics: Central Tendency and Dispersion

#### Learning objectives
*   Define and calculate measures of central tendency: mean, median, and mode.
*   Understand when to use each measure of central tendency based on data distribution.
*   Define and calculate measures of dispersion: range, variance, standard deviation, and interquartile range (IQR).
*   Interpret the meaning of different dispersion measures in the context of data variability.
*   Apply these descriptive statistics to real-world datasets using base R functions and `dplyr::summarise()`.

#### Detailed lesson content
After importing and cleaning your data, the next logical step is to understand its basic characteristics. Descriptive statistics provide a concise summary of your data, allowing you to grasp key features without looking at every single data point. This chapter focuses on two fundamental categories of descriptive statistics: measures of central tendency, which tell us about the "average" or "typical" value, and measures of dispersion, which describe the spread or variability of the data.

Let's start with **Measures of Central Tendency**. These statistics aim to identify the central position within a dataset.

1.  **Mean:** The arithmetic average. It's calculated by summing all values and dividing by the number of values.
    *   **When to use:** Best for symmetrically distributed data without extreme outliers.
    *   **R function:** `mean()`
    ```R
    data_points <- c(10, 12, 15, 18, 20, 22, 25)
    mean_value <- mean(data_points)
    print(paste("Mean:", mean_value))

    # Common mistake: Forgetting na.rm = TRUE when there are NAs
    data_with_na <- c(10, 12, NA, 18, 20)
    # mean(data_with_na) # This would return NA
    mean_with_na_removed <- mean(data_with_na, na.rm = TRUE)
    print(paste("Mean (NA removed):", mean_with_na_removed))
    ```
    A common mistake is forgetting `na.rm = TRUE` when your data contains missing values. If you don't specify it, `mean()` (and many other statistical functions) will return `NA` if any `NA`s are present in the input vector.

2.  **Median:** The middle value in a dataset when the values are ordered from least to greatest. If there's an even number of observations, it's the average of the two middle values.
    *   **When to use:** Preferred for skewed data or data with outliers, as it's less affected by extreme values than the mean.
    *   **R function:** `median()`
    ```R
    data_points_ordered <- c(10, 12, 15, 18, 20, 22, 25)
    median_value_odd <- median(data_points_ordered)
    print(paste("Median (odd count):", median_value_odd))

    data_points_even <- c(10, 12, 15, 18, 20, 22)
    median_value_even <- median(data_points_even)
    print(paste("Median (even count):", median_value_even))

    # Example with outlier:
    data_with_outlier <- c(10, 12, 15, 18, 20, 1000)
    print(paste("Mean with outlier:", mean(data_with_outlier)))
    print(paste("Median with outlier:", median(data_with_outlier))) # Median is more robust
    ```

3.  **Mode:** The value that appears most frequently in a dataset. R does not have a built-in `mode()` function for this statistical definition (R's `mode()` function refers to the storage mode of an object, like "numeric" or "character"). You'll often need to write a simple function or use `table()` to find it.
    *   **When to use:** Useful for categorical or discrete data to find the most common category/value.
    *   **R implementation:**
    ```R
    get_mode <- function(v) {
      uniqv <- unique(v)
      uniqv[which.max(tabulate(match(v, uniqv)))]
    }

    categorical_data <- c("Apple", "Banana", "Apple", "Orange", "Banana", "Apple")
    mode_value <- get_mode(categorical_data)
    print(paste("Mode:", mode_value))
    ```
    A common pitfall is confusing R's `mode()` (which describes an object's type) with the statistical mode. Always use a custom function or `table()` for the statistical mode.

Next, let's explore **Measures of Dispersion (Variability)**. These statistics quantify how spread out or scattered the data points are.

1.  **Range:** The difference between the maximum and minimum values in a dataset. It's a simple but often limited measure as it only considers the two extreme values and is highly sensitive to outliers.
    *   **R function:** `range()` (returns min and max), then calculate the difference.
    ```R
    data_points <- c(10, 12, 15, 18, 20, 22, 25)
    data_range <- range(data_points)
    print(paste("Min:", data_range[1], "Max:", data_range[2]))
    print(paste("Range (Max - Min):", data_range[2] - data_range[1]))
    ```

2.  **Variance (`var()`):** The average of the squared differences from the mean. It gives more weight to values further from the mean. The unit of variance is the square of the original data's unit, which can make it hard to interpret directly.
    *   **R function:** `var()`
    ```R
    data_points <- c(10, 12, 15, 18, 20, 22, 25)
    variance_value <- var(data_points)
    print(paste("Variance:", variance_value))
    ```

3.  **Standard Deviation (`sd()`):** The square root of the variance. It's the most commonly used measure of dispersion because it's in the same units as the original data, making it easier to interpret. A small standard deviation indicates data points are close to the mean, while a large one indicates they are spread out.
    *   **R function:** `sd()`
    ```R
    data_points <- c(10, 12, 15, 18, 20, 22, 25)
    sd_value <- sd(data_points)
    print(paste("Standard Deviation:", sd_value))
    ```
    A safety note: Standard deviation and variance are sensitive to outliers. Always check for outliers before relying solely on these measures.

4.  **Interquartile Range (IQR):** The range between the first quartile (Q1, 25th percentile) and the third quartile (Q3, 75th percentile). It represents the middle 50% of the data and is robust to outliers, making it a good measure of spread for skewed distributions.
    *   **R function:** `IQR()` or `quantile()`
    ```R
    data_points <- c(10, 12, 15, 18, 20, 22, 25, 30, 40, 50, 60, 70, 80)
    iqr_value <- IQR(data_points)
    print(paste("IQR:", iqr_value))

    # You can also get quartiles directly:
    quartiles <- quantile(data_points, probs = c(0.25, 0.5, 0.75))
    print("Quartiles:")
    print(quartiles)
    ```

**Applying Descriptive Statistics with `dplyr::summarise()`:**
When working with data frames, especially when you want to calculate statistics for groups, the `dplyr` package's `summarise()` function (often combined with `group_by()`) is incredibly powerful and efficient.

Let's use our `customer_data` example from the previous chapter, ensuring it's cleaned:

```R
# Re-create and clean customer_data for demonstration
customer_data <- data.frame(
  CustomerID = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  Name = c("Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Alice"),
  Age = c(25, 30, NA, 40, 28, 35, 29, 32, NA, 25),
  Gender = c("F", "M", "M", "F", "F", "M", "F", "F", "M", "F"),
  Income = c(50000, 75000, 60000, 80000, 55000, NA, 70000, 62000, 90000, 50000),
  stringsAsFactors = FALSE
)
# Basic cleaning: impute Age and Income NAs with median, convert Gender to factor
customer_data$Age[is.na(customer_data$Age)] <- median(customer_data$Age, na.rm = TRUE)
customer_data$Income[is.na(customer_data$Income)] <- median(customer_data$Income, na.rm = TRUE)
customer_data$Gender <- as.factor(customer_data$Gender)

library(dplyr)

# Calculate overall descriptive statistics for Age and Income
overall_stats <- customer_data %>%
  summarise(
    Mean_Age = mean(Age, na.rm = TRUE),
    Median_Age = median(Age, na.rm = TRUE),
    SD_Age = sd(Age, na.rm = TRUE),
    IQR_Age = IQR(Age, na.rm = TRUE),
    Mean_Income = mean(Income, na.rm = TRUE),
    Median_Income = median(Income, na.rm = TRUE),
    SD_Income = sd(Income, na.rm = TRUE),
    IQR_Income = IQR(Income, na.rm = TRUE)
  )
print("Overall Descriptive Statistics:")
print(overall_stats)

# Calculate descriptive statistics grouped by Gender
gender_stats <- customer_data %>%
  group_by(Gender) %>%
  summarise(
    Count = n(), # Count of observations in each group
    Mean_Age = mean(Age, na.rm = TRUE),
    Median_Age = median(Age, na.rm = TRUE),
    SD_Age = sd(Age, na.rm = TRUE),
    Mean_Income = mean(Income, na.rm = TRUE),
    Median_Income = median(Income, na.rm = TRUE),
    SD_Income = sd(Income, na.rm = TRUE)
  )
print("Descriptive Statistics Grouped by Gender:")
print(gender_stats)
```
This demonstrates the power of combining `group_by()` and `summarise()` to get insightful summaries. For instance, you can quickly see if mean age or income differs significantly between genders.

Understanding and correctly applying these descriptive statistics is fundamental to any data analysis. They provide the initial insights that guide further exploration and hypothesis testing. Always choose the appropriate measure based on your data's distribution and the question you're trying to answer.

#### Key concepts
*   **Descriptive Statistics:** Statistical methods used to summarize and describe the characteristics of a dataset.
*   **Measures of Central Tendency:** Statistics that describe the central position of a dataset (e.g., mean, median, mode).
*   **Mean:** The arithmetic average of a set of numbers.
*   **Median:** The middle value in an ordered dataset.
*   **Mode:** The most frequently occurring value in a dataset.
*   **Measures of Dispersion:** Statistics that describe the spread or variability of a dataset (e.g., range, variance, standard deviation, IQR).
*   **Range:** The difference between the maximum and minimum values.
*   **Variance:** The average of the squared differences from the mean.
*   **Standard Deviation (SD):** The square root of the variance, indicating the typical distance of data points from the mean.
*   **Interquartile Range (IQR):** The range between the first quartile (25th percentile) and the third quartile (75th percentile), representing the middle 50% of the data.
*   **`na.rm = TRUE`:** An argument used in many R statistical functions to remove `NA` values before calculation.
*   **`dplyr::summarise()`:** A `dplyr` function used to collapse a data frame into a single row summary or grouped summaries.
*   **`dplyr::group_by()`:** A `dplyr` function used to perform operations on subsets of a data frame.

#### Hands-on activity
**Activity: Analyze Student Performance Data**

**Scenario:** You have a dataset of student scores on three different exams. You need to calculate various descriptive statistics to understand the central tendency and spread of scores for each exam and overall.

**Task:**
1.  **Create a dummy data frame** named `student_scores` with columns `StudentID`, `Exam1`, `Exam2`, `Exam3`. Include some `NA`s in `Exam3` and ensure `Exam1` has a clear outlier.
2.  **Calculate Overall Statistics:**
    *   Find the mean, median, standard deviation, and IQR for `Exam1`, `Exam2`, and `Exam3` (remember to handle `NA`s).
3.  **Calculate Grouped Statistics:**
    *   Assume you also have a `Gender` column (M/F). Add this to your dummy data.
    *   Calculate the mean and median for `Exam1` and `Exam2`, grouped by `Gender`.
4.  **Identify the Mode:**
    *   Create a custom function to find the mode.
    *   Find the mode of the `Gender` column.

**Code Template:**

```R
# 1. Create dummy student_scores data frame
student_scores <- data.frame(
  StudentID = 1:10,
  Gender = c("M", "F", "M", "F", "M", "F", "M", "F", "M", "F"),
  Exam1 = c(85, 92, 78, 88, 95, 80, 70, 90, 100, 150), # Outlier 150
  Exam2 = c(70, 75, 80, 85, 90, 95, 88, 82, 78, 93),
  Exam3 = c(60, 65, 70, NA, 75, 80, 85, NA, 90, 95) # NAs
)

print("--- Original Student Scores Data ---")
print(student_scores)

# 2. Calculate Overall Statistics
library(dplyr)

overall_exam_stats <- student_scores %>%
  summarise(
    Mean_Exam1 = mean(Exam1, na.rm = TRUE),
    Median_Exam1 = median(Exam1, na.rm = TRUE),
    SD_Exam1 = sd(Exam1, na.rm = TRUE),
    IQR_Exam1 = IQR(Exam1, na.rm = TRUE),
    Mean_Exam2 = mean(Exam2, na.rm = TRUE),
    Median_Exam2 = median(Exam2, na.rm = TRUE),
    SD_Exam2 = sd(Exam2, na.rm = TRUE),
    IQR_Exam2 = IQR(Exam2, na.rm = TRUE),
    Mean_Exam3 = mean(Exam3, na.rm = TRUE),
    Median_Exam3 = median(Exam3, na.rm = TRUE),
    SD_Exam3 = sd(Exam3, na.rm = TRUE),
    IQR_Exam3 = IQR(Exam3, na.rm = TRUE)
  )

print("--- Overall Exam Statistics ---")
print(overall_exam_stats)

# 3. Calculate Grouped Statistics by Gender
gender_exam_stats <- student_scores %>%
  group_by(Gender) %>%
  summarise(
    Count = n(),
    Mean_Exam1 = mean(Exam1, na.rm = TRUE),
    Median_Exam1 = median(Exam1, na.rm = TRUE),
    Mean_Exam2 = mean(Exam2, na.rm = TRUE),
    Median_Exam2 = median(Exam2, na.rm = TRUE)
  )

print("--- Exam Statistics Grouped by Gender ---")
print(gender_exam_stats)

# 4. Identify the Mode of Gender
get_mode <- function(v) {
  uniqv <- unique(v)
  uniqv[which.max(tabulate(match(v, uniqv)))]
}

mode_gender <- get_mode(student_scores$Gender)
print(paste("--- Mode of Gender ---"))
print(mode_gender)
```

#### Assessment idea
1.  **Question:** You have a dataset of house prices (`house_prices`) with a column `Price_USD`. The data is heavily skewed to the right due to a few extremely expensive mansions. Which measure of central tendency would be most appropriate to report as the "typical" house price, and why?
    a) Mean, because it's the most common average.
    b) Median, because it is less affected by outliers and skewness.
    c) Mode, because it shows the most frequent price.
    d) Standard Deviation, because it shows the spread.

    **Correct Answer:** b) Median, because it is less affected by outliers and skewness.
    **Explanation:** For skewed data or data with extreme outliers, the mean can be pulled significantly in the direction of the skew/outliers, making it unrepresentative of the "typical" value. The median, being the middle value, is robust to these extremes and provides a better measure of central tendency in such cases. The mode is useful for categorical data but less so for continuous data like prices unless there are very strong clusters. Standard deviation is a measure of dispersion, not central tendency.

2.  **Question:** Consider two investment portfolios, A and B. Both have an average annual return (mean) of 8%. Portfolio A has a standard deviation of 2%, while Portfolio B has a standard deviation of 10%. What does this difference in standard deviation imply about the portfolios?
    a) Portfolio A is riskier than Portfolio B.
    b) Portfolio B is more consistent in its returns than Portfolio A.
    c) Portfolio A's returns are more clustered around the mean than Portfolio B's.
    d) Portfolio B has a higher median return than Portfolio A.

    **Correct Answer:** c) Portfolio A's returns are more clustered around the mean than Portfolio B's.
    **Explanation:** Standard deviation is a measure of the spread or variability of data points around the mean. A lower standard deviation (like 2% for Portfolio A) indicates that the returns are more tightly clustered around the mean (8%), meaning less variability and generally lower risk. A higher standard deviation (like 10% for Portfolio B) indicates greater spread and more variability, implying higher risk. Therefore, Portfolio A is less risky and more consistent, and its returns are more clustered around its mean.

#### AI generation note
Create an 8-10 minute animated explanation video. Use clear, simple analogies to explain mean, median, and mode (e.g., "balancing point," "middle person in a line," "most popular item"). Visualize how outliers affect the mean but not the median. For dispersion, use animated data points on a number line to show the concept of range, variance, and standard deviation (how points spread out from the mean). Emphasize that standard deviation is in the original units. Briefly show `IQR` using a box plot visualization. Then, transition to a quick RStudio live coding segment demonstrating `mean()`, `median()`, `sd()`, `IQR()`, and the `get_mode` function on a small, relatable dataset. An interactive element could be a reflection prompt asking learners to choose the best measure of central tendency for a given skewed dataset and justify their choice. Ensure all animations have alt text and captions.

---

### Chapter 6.5 — Descriptive Statistics: Frequency Distributions and Correlation

#### Learning objectives
*   Understand and create frequency distributions for categorical and discrete numerical data.
*   Visualize frequency distributions using bar charts and histograms.
*   Define and calculate the correlation coefficient between two numerical variables.
*   Interpret the strength and direction of linear correlation.
*   Identify potential pitfalls and common mistakes when interpreting correlation, such as confusing correlation with causation.
*   Visualize relationships between numerical variables using scatter plots.

#### Detailed lesson content
Building on our understanding of central tendency and dispersion, this chapter delves into two more powerful aspects of descriptive statistics: frequency distributions, which show how often each value or category appears, and correlation, which quantifies the linear relationship between two numerical variables. These tools help us further understand the structure of our data and the relationships within it.

Let's begin with **Frequency Distributions**. A frequency distribution is a summary of how often different values or categories occur in a dataset. It's particularly useful for understanding the patterns in categorical variables or discrete numerical variables.

For categorical data, we typically use frequency tables:

```R
# Example categorical data
gender_data <- c("Male", "Female", "Male", "Female", "Female", "Male", "Female", "Male", "Male", "Female")

# Using base R's table() function
gender_frequency <- table(gender_data)
print("Gender Frequency Table:")
print(gender_frequency)

# To get proportions (relative frequencies)
gender_proportions <- prop.table(gender_frequency)
print("Gender Proportions:")
print(gender_proportions)

# Combining with dplyr for data frames
library(dplyr)
customer_data <- data.frame(
  CustomerID = 1:10,
  Gender = c("F", "M", "M", "F", "F", "M", "F", "F", "M", "F"),
  stringsAsFactors = FALSE
)
customer_data$Gender <- as.factor(customer_data$Gender) # Ensure it's a factor

gender_counts_df <- customer_data %>%
  count(Gender) # Counts occurrences of each unique value in Gender
print("Gender Counts (from data frame):")
print(gender_counts_df)

gender_proportions_df <- customer_data %>%
  count(Gender) %>%
  mutate(Proportion = n / sum(n))
print("Gender Proportions (from data frame):")
print(gender_proportions_df)
```
Visualizing frequency distributions is often done with **bar charts** for categorical data or **histograms** for continuous numerical data. While `ggplot2` was covered in a previous module for comprehensive visualization, it's worth noting their purpose here. A bar chart shows the frequency of each category, while a histogram groups continuous data into bins and shows the frequency of observations falling into each bin, revealing the data's shape and distribution.

```R
# Example for a bar chart (using base R for simplicity, ggplot2 is preferred)
barplot(gender_frequency, main = "Distribution of Gender", xlab = "Gender", ylab = "Frequency")

# Example for a histogram (using base R for simplicity)
numerical_data <- c(10, 12, 15, 18, 20, 22, 25, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60)
hist(numerical_data, main = "Distribution of Numerical Data", xlab = "Value", ylab = "Frequency", breaks = 5)
```

Now, let's explore **Correlation**, which measures the strength and direction of a linear relationship between two numerical variables. The most common measure is Pearson's correlation coefficient, denoted by `r`. It ranges from -1 to +1:
*   `+1`: Perfect positive linear relationship (as one variable increases, the other increases proportionally).
*   `-1`: Perfect negative linear relationship (as one variable increases, the other decreases proportionally).
*   `0`: No linear relationship.

**Important Safety Note:** Correlation does *not* imply causation! Just because two variables move together doesn't mean one causes the other. There might be a confounding variable, or the relationship could be purely coincidental. This is one of the most common statistical misinterpretations.

In R, we use the `cor()` function:

```R
# Example numerical data
# Let's use two variables that might be correlated, e.g., study hours and exam scores
study_hours <- c(2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
exam_scores <- c(60, 65, 70, 75, 80, 85, 90, 95, 98, 100)

# Calculate Pearson correlation coefficient
correlation_coefficient <- cor(study_hours, exam_scores)
print(paste("Correlation between study hours and exam scores:", correlation_coefficient))

# Example with negative correlation
temperature <- c(25, 22, 20, 18, 15, 12, 10)
ice_cream_sales <- c(100, 90, 80, 70, 60, 50, 40)
neg_correlation <- cor(temperature, ice_cream_sales)
print(paste("Correlation between temperature and ice cream sales:", neg_correlation)) # This would be positive, my example is wrong. Let's make it negative.
# Corrected negative correlation example:
temperature_neg <- c(25, 22, 20, 18, 15, 12, 10)
hot_chocolate_sales <- c(10, 20, 30, 40, 50, 60, 70)
neg_correlation_actual <- cor(temperature_neg, hot_chocolate_sales)
print(paste("Correlation between temperature and hot chocolate sales:", neg_correlation_actual))

# For a data frame, you can get a correlation matrix for multiple variables
data_matrix <- data.frame(
  Study = study_hours,
  Exam = exam_scores,
  Temp = temperature_neg,
  HotChocolate = hot_chocolate_sales
)
correlation_matrix <- cor(data_matrix)
print("Correlation Matrix:")
print(correlation_matrix)
```
The `cor()` function also has a `method` argument for different types of correlation:
*   `method = "pearson"` (default): Measures linear relationship.
*   `method = "spearman"`: Measures monotonic relationship (rank correlation), useful for non-normally distributed data or non-linear but consistent relationships.
*   `method = "kendall"`: Another rank correlation method.

A common mistake is to assume linearity when using Pearson correlation. Pearson's `r` only captures *linear* relationships. Two variables can be strongly related in a non-linear way, but have a low Pearson correlation coefficient. Always visualize your data with scatter plots first!

**Visualizing Correlation with Scatter Plots:**
A scatter plot is the best way to visually inspect the relationship between two numerical variables. It allows you to see the direction, strength, and form (linear vs. non-linear) of the relationship, as well as identify outliers.

```R
# Using base R plot for scatter plot (ggplot2 is preferred for publication-quality plots)
plot(study_hours, exam_scores,
     main = "Study Hours vs. Exam Scores",
     xlab = "Study Hours per Week",
     ylab = "Exam Score")

# Using ggplot2 (as covered in Module 5)
library(ggplot2)
data_for_plot <- data.frame(study_hours, exam_scores, temperature_neg, hot_chocolate_sales)

ggplot(data_for_plot, aes(x = study_hours, y = exam_scores)) +
  geom_point() +
  geom_smooth(method = "lm", se = FALSE, color = "blue") + # Add a linear regression line
  labs(title = "Study Hours vs. Exam Scores",
       x = "Study Hours",
       y = "Exam Score") +
  theme_minimal()

ggplot(data_for_plot, aes(x = temperature_neg, y = hot_chocolate_sales)) +
  geom_point() +
  geom_smooth(method = "lm", se = FALSE, color = "red") +
  labs(title = "Temperature vs. Hot Chocolate Sales",
       x = "Temperature (Celsius)",
       y = "Hot Chocolate Sales") +
  theme_minimal()
```
By combining frequency distributions, correlation coefficients, and their respective visualizations, you gain a much deeper understanding of your data's structure and the relationships between its variables. These descriptive insights are invaluable for informing further statistical modeling and decision-making. Always remember the "correlation is not causation" mantra!

#### Key concepts
*   **Frequency Distribution:** A summary that shows how often each value or category appears in a dataset.
*   **Frequency Table:** A tabular representation of a frequency distribution.
*   **Relative Frequency (Proportion):** The proportion of times a value or category appears, calculated as frequency divided by total observations.
*   **`table()`:** A base R function to create frequency tables for categorical data.
*   **`prop.table()`:** A base R function to convert frequency tables to proportion tables.
*   **`dplyr::count()`:** A `dplyr` function to count occurrences of unique values in a column.
*   **Bar Chart:** A graphical representation of frequency distributions for categorical data.
*   **Histogram:** A graphical representation of frequency distributions for continuous numerical data, grouping values into bins.
*   **Correlation:** A statistical measure that quantifies the extent to which two numerical variables are linearly related.
*   **Pearson Correlation Coefficient (`r`):** The most common measure of linear correlation, ranging from -1 to +1.
*   **Positive Correlation:** As one variable increases, the other tends to increase.
*   **Negative Correlation:** As one variable increases, the other tends to decrease.
*   **No Correlation:** No linear relationship between variables.
*   **`cor()`:** A base R function to calculate the correlation coefficient between vectors or a correlation matrix for a data frame.
*   **Correlation Matrix:** A table showing the correlation coefficients between multiple pairs of variables in a dataset.
*   **`method` argument in `cor()`:** Specifies the type of correlation (e.g., "pearson", "spearman").
*   **Correlation vs. Causation:** A critical distinction; correlation does not imply that one variable causes another.
*   **Scatter Plot:** A graphical display of the relationship between two numerical variables, where each point represents an observation.

#### Hands-on activity
**Activity: Analyze Customer Engagement and Spending**

**Scenario:** You have a dataset of customer activity, including their `LoginFrequency` (how many times they log in per month) and their `MonthlySpend_USD`. You also have their `PreferredProductCategory` (e.g., "Electronics", "Clothing", "Books").

**Task:**
1.  **Create a dummy data frame** named `customer_engagement` with `CustomerID`, `LoginFrequency`, `MonthlySpend_USD`, and `PreferredProductCategory`. Include some variety in the data.
2.  **Frequency Distribution:**
    *   Create a frequency table and a proportion table for `PreferredProductCategory`.
    *   (Optional, but good practice) Create a bar chart for `PreferredProductCategory` using `ggplot2`.
3.  **Correlation Analysis:**
    *   Calculate the Pearson correlation coefficient between `LoginFrequency` and `MonthlySpend_USD`.
    *   Interpret the result.
    *   (Optional, but good practice) Create a scatter plot of `LoginFrequency` vs. `MonthlySpend_USD` using `ggplot2`, adding a linear regression line.

**Code Template:**

```R
# 1. Create dummy customer_engagement data frame
customer_engagement <- data.frame(
  CustomerID = 1:15,
  LoginFrequency = c(5, 8, 3, 10, 6, 12, 4, 7, 9, 11, 2, 13, 5, 8, 10),
  MonthlySpend_USD = c(50, 80, 30, 120, 60, 150, 40, 75, 100, 130, 25, 160, 55, 85, 110),
  PreferredProductCategory = c("Electronics", "Clothing", "Books", "Electronics", "Clothing",
                               "Electronics", "Books", "Clothing", "Electronics", "Books",
                               "Clothing", "Electronics", "Books", "Clothing", "Electronics"),
  stringsAsFactors = FALSE
)
customer_engagement$PreferredProductCategory <- as.factor(customer_engagement$PreferredProductCategory)

print("--- Customer Engagement Data Head ---")
print(head(customer_engagement))

# 2. Frequency Distribution for PreferredProductCategory
library(dplyr)
library(ggplot2)

# Frequency table
category_freq <- customer_engagement %>%
  count(PreferredProductCategory)
print("--- Preferred Product Category Frequency Table ---")
print(category_freq)

# Proportion table
category_prop <- category_freq %>%
  mutate(Proportion = n / sum(n))
print("--- Preferred Product Category Proportion Table ---")
print(category_prop)

# Optional: Bar chart for PreferredProductCategory
ggplot(category_freq, aes(x = PreferredProductCategory, y = n)) +
  geom_bar(stat = "identity", fill = "skyblue") +
  labs(title = "Distribution of Preferred Product Categories",
       x = "Product Category",
       y = "Number of Customers") +
  theme_minimal()
ggsave("preferred_category_bar_chart.png", width = 6, height = 4) # Save the plot

# 3. Correlation Analysis between LoginFrequency and MonthlySpend_USD
correlation_value <- cor(customer_engagement$LoginFrequency, customer_engagement$MonthlySpend_USD)
print(paste("--- Correlation between Login Frequency and Monthly Spend ---"))
print(paste("Pearson Correlation Coefficient:", round(correlation_value, 2)))

# Interpretation:
if (correlation_value > 0.7) {
  print("Interpretation: Strong positive linear correlation. As login frequency increases, monthly spending tends to increase significantly.")
} else if (correlation_value > 0.3) {
  print("Interpretation: Moderate positive linear correlation. There's a noticeable tendency for monthly spending to increase with login frequency.")
} else if (correlation_value < -0.7) {
  print("Interpretation: Strong negative linear correlation. As login frequency increases, monthly spending tends to decrease significantly.")
} else if (correlation_value < -0.3) {
  print("Interpretation: Moderate negative linear correlation. There's a noticeable tendency for monthly spending to decrease with login frequency.")
} else {
  print("Interpretation: Weak or no linear correlation. There's little to no linear relationship between login frequency and monthly spending.")
}

# Optional: Scatter plot
ggplot(customer_engagement, aes(x = LoginFrequency, y = MonthlySpend_USD)) +
  geom_point(color = "darkgreen") +
  geom_smooth(method = "lm", se = FALSE, color = "blue", linetype = "dashed") + # Add linear regression line
  labs(title = "Login Frequency vs. Monthly Spend",
       x = "Login Frequency (per month)",
       y = "Monthly Spend (USD)") +
  theme_minimal()
ggsave("login_spend_scatter_plot.png", width = 6, height = 4) # Save the plot
```

#### Assessment idea
1.  **Question:** You calculate the Pearson correlation coefficient between a city's average daily temperature and the number of park visitors, and you get `r = 0.85`. Which of the following is the most accurate interpretation?
    a) Higher temperatures cause a significant increase in park visitors.
    b) There is a strong positive linear relationship between temperature and park visitors.
    c) 85% of the variation in park visitors can be explained by temperature.
    d) For every 1-degree increase in temperature, park visitors increase by 0.85.

    **Correct Answer:** b) There is a strong positive linear relationship between temperature and park visitors.
    **Explanation:** A correlation coefficient of 0.85 indicates a strong positive linear relationship. Option a) incorrectly implies causation. Option c) describes the coefficient of determination (`R-squared`, which is `r^2`, or 0.85^2 = 0.7225), not the correlation coefficient itself. Option d) incorrectly interprets the correlation coefficient as a direct slope or rate of change.

2.  **Question:** You have a dataset of customer feedback, where `FeedbackRating` is a numerical score from 1 to 5, and `IssueType` is a categorical variable (e.g., "Bug", "Feature Request", "Usability"). You want to understand the distribution of `IssueType` and the relationship between `FeedbackRating` and `IssueType`. Which two descriptive statistics/visualizations would be most appropriate for these tasks, respectively?
    a) Histogram for `IssueType`, Pearson correlation for `FeedbackRating` and `IssueType`.
    b) Bar chart for `IssueType`, Mean for `FeedbackRating` grouped by `IssueType`.
    c) Frequency table for `IssueType`, Scatter plot for `FeedbackRating` and `IssueType`.
    d) Mode for `IssueType`, Standard deviation for `FeedbackRating` grouped by `IssueType`.

    **Correct Answer:** b) Bar chart for `IssueType`, Mean for `FeedbackRating` grouped by `IssueType`.
    **Explanation:**
    *   For `IssueType` (a categorical variable), a bar chart (or a frequency table) is the most appropriate way to show its distribution. A histogram is for continuous numerical data.
    *   To understand the relationship between a numerical variable (`FeedbackRating`) and a categorical variable (`IssueType`), comparing the central tendency (like the mean or median) of `FeedbackRating` across different `IssueType` categories is appropriate. A scatter plot is for two numerical variables. Pearson correlation is also for two numerical variables.

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with an animation illustrating frequency distributions for categorical data using bar charts, and for continuous data using histograms with different bin sizes. Then, transition to an animated explanation of correlation: show scatter plots with points moving to demonstrate positive, negative, and zero correlation, and the concept of linearity. Crucially, include an animation that visually debunks "correlation equals causation" with a humorous example (e.g., ice cream sales and shark attacks increasing together due to summer). Follow with RStudio live coding: demonstrate `table()`, `prop.table()`, and `dplyr::count()` for frequencies. Then, show `cor()` for two numerical vectors and for a data frame (correlation matrix). Conclude with `ggplot2` scatter plots for visualizing correlation, including `geom_smooth(method="lm")`. An interactive element could be a drag-and-drop exercise matching scatter plot visuals to correlation coefficient values. Ensure accessibility with captions and descriptive alt text for all visuals.

---

## Final Capstone Project

Congratulations on reaching the capstone phase of your R Programming journey! This is your opportunity to synthesize all the knowledge and skills you've acquired throughout the course into a substantial, real-world project. You will choose one of the following three options, each designed to challenge you in different ways and allow you to showcase your proficiency in data manipulation, analysis, visualization, and programming in R. Remember, the goal is not just to complete the task, but to demonstrate your understanding, problem-solving abilities, and code quality.

### Project Option 1: Comprehensive Data Analysis and Visualization

This project challenges you to take a raw dataset, clean it, explore its characteristics, and present your findings through compelling visualizations and a concise report. This is a foundational skill for any data professional using R.

*   **Requirements**:
    *   **Dataset Selection**: Choose a publicly available dataset of moderate complexity (e.g., from Kaggle, UCI Machine Learning Repository, TidyTuesday archives, or a government open data portal). The dataset should have at least 500 rows and 5-7 relevant columns, including a mix of numeric and categorical variables.
    *   **Data Cleaning and Preparation**: Use `dplyr` and other base R functions to identify and handle missing values, correct data types, rename columns for clarity, and perform any necessary data transformations (e.g., creating new features, aggregating data). Document your cleaning steps thoroughly.
    *   **Exploratory Data Analysis (EDA)**: Conduct a thorough EDA to understand the distribution of individual variables and the relationships between them. This should include summary statistics, frequency tables, and appropriate visualizations.
    *   **Advanced Visualization**: Create at least 5 distinct, insightful visualizations using `ggplot2`. These should go beyond basic bar charts and histograms, potentially including scatter plots with trend lines, box plots, violin plots, heatmaps, or faceted plots. Each plot must be clearly labeled with titles, axis labels, and legends, and should communicate a specific insight about the data.
    *   **Report Generation**: Summarize your findings in a clear, concise report. While not strictly required to use R Markdown for this project, you should structure your insights logically, explaining your methodology and presenting your key discoveries. Include interpretations of your visualizations.
    *   **Code Organization**: Your R script should be well-commented, organized into logical sections, and easy to follow.
*   **Stretch Goals**:
    *   Generate your report using R Markdown, integrating code, output, and prose seamlessly.
    *   Perform a simple statistical test (e.g., t-test, correlation test) to investigate a specific hypothesis.
    *   Explore an additional R package relevant to your dataset (e.g., `lubridate` for date/time data, `stringr` for text manipulation).
    *   Create an interactive visualization using `plotly` or `leaflet` (if geographical data is present).
*   **Evaluation Criteria**:
    *   Completeness and correctness of data cleaning and preparation.
    *   Depth and insightfulness of exploratory data analysis.
    *   Quality, clarity, and appropriateness of `ggplot2` visualizations.
    *   Clarity and coherence of the final report and interpretations.
    *   Readability, organization, and commenting of R code.
    *   Demonstration of problem-solving and critical thinking.
*   **Estimated Time**: 15-20 hours

### Project Option 2: Building and Evaluating a Predictive Model

This project focuses on applying your R skills to a common machine learning task: building a predictive model. You will learn to prepare data for modeling, train a simple model, and evaluate its performance.

*   **Requirements**:
    *   **Dataset Selection**: Choose a dataset suitable for a regression or classification task (e.g., predicting house prices, customer churn, disease presence). Kaggle is an excellent source for such datasets. Ensure the dataset has a clear target variable and a reasonable number of features (at least 5-10).
    *   **Data Preprocessing**: Perform necessary data cleaning, handle missing values, and transform variables as needed for modeling (e.g., converting categorical variables to factors, scaling numeric features if appropriate).
    *   **Data Splitting**: Split your dataset into training and testing sets (e.g., 70/30 or 80/20 ratio) to ensure robust model evaluation.
    *   **Model Training**: Train a linear regression model (for continuous target variables) or a logistic regression model (for binary classification target variables) using the training data.
    *   **Model Prediction**: Use your trained model to make predictions on the unseen testing data.
    *   **Model Evaluation**: Evaluate the performance of your model using appropriate metrics. For regression, use metrics like Root Mean Squared Error (RMSE) or R-squared. For classification, use accuracy, precision, recall, F1-score, or a confusion matrix. Interpret these metrics.
    *   **Code Organization**: Your R script should be well-structured, with clear sections for data loading, preprocessing, model training, prediction, and evaluation.
*   **Stretch Goals**:
    *   Compare the performance of your chosen model with another simple model (e.g., decision tree from `rpart`).
    *   Implement cross-validation techniques to get a more robust estimate of model performance.
    *   Perform feature engineering to create new variables that might improve model performance.
    *   Visualize model predictions against actual values or visualize the confusion matrix.
*   **Evaluation Criteria**:
    *   Correctness of data preprocessing steps for modeling.
    *   Appropriate splitting of data into training and testing sets.
    *   Correct implementation and training of the chosen predictive model.
    *   Accurate calculation and interpretation of model evaluation metrics.
    *   Clarity of analysis and conclusions drawn from model performance.
    *   Readability, organization, and commenting of R code.
*   **Estimated Time**: 18-25 hours

### Project Option 3: Web Scraping and Data Collection

This project focuses on using R to collect data from the web, a valuable skill for acquiring custom datasets when publicly available ones don't meet your needs. You will ethically scrape a website, clean the collected data, and perform a basic analysis.

*   **Requirements**:
    *   **Website Selection**: Identify a website with publicly accessible, structured data that is suitable for scraping (e.g., product listings, movie reviews, job postings, simple blog articles). **Crucially, ensure the website's `robots.txt` file permits scraping, and respect their terms of service.** Avoid websites that require login or have complex dynamic content if you are just starting.
    *   **Ethical Scraping**: Implement a delay between requests (e.g., `Sys.sleep()`) to avoid overwhelming the server. Limit the number of pages scraped to a reasonable amount (e.g., 5-10 pages).
    *   **Data Extraction**: Use the `rvest` package to extract specific elements from the web pages. You should aim to extract at least 3-5 distinct pieces of information per item/entry (e.g., product name, price, rating, description).
    *   **Data Structuring**: Combine the extracted data into a structured format, preferably a data frame, where each row represents an item and columns represent the extracted attributes.
    *   **Data Cleaning**: Clean and transform the scraped data (e.g., convert text prices to numeric, remove unwanted characters, handle missing values).
    *   **Basic Analysis and Visualization**: Perform a basic exploratory analysis on your collected data. This could involve calculating summary statistics (e.g., average price, most common category) and creating 1-2 simple visualizations using `ggplot2` (e.g., distribution of prices, bar chart of categories).
    *   **Data Storage**: Save your cleaned, structured data to a file (e.g., CSV, RData) for future use.
    *   **Code Organization**: Your R script should be well-commented, clearly outlining the scraping process, data cleaning, and analysis steps.
*   **Stretch Goals**:
    *   Handle pagination to scrape data from multiple pages of a listing.
    *   Implement error handling for failed page requests.
    *   Extract data from more complex HTML structures using advanced CSS selectors or XPath.
    *   Integrate with another R package for text analysis (`tm`, `tidytext`) if you scraped textual data.
*   **Evaluation Criteria**:
    *   Demonstration of ethical scraping practices (respecting `robots.txt`, rate limiting).
    *   Correct and efficient use of `rvest` to extract target data.
    *   Accuracy and completeness of the structured data frame.
    *   Effectiveness of data cleaning and transformation.
    *   Clarity of basic analysis and visualizations.
    *   Readability, organization, and commenting of R code.
*   **Estimated Time**: 16-22 hours

## Final Examination

This comprehensive examination assesses your understanding of core R programming concepts, data manipulation techniques, visualization skills, and problem-solving abilities covered throughout the course. It includes a mix of conceptual questions, code tracing, code writing, and debugging scenarios.

### Instructions

*   Read each question carefully.
*   Provide clear and concise answers.
*   For code-related questions, ensure your code is syntactically correct and achieves the specified outcome.
*   Assume all necessary packages (e.g., `dplyr`, `ggplot2`) are loaded unless otherwise specified.

---

### Questions

1.  **Concept Definition: Data Structures**
    Explain the fundamental difference between an R `vector` and an R `list`. When would you choose one over the other for storing data?

    **Answer Key & Explanation:**
    A `vector` in R is a one-dimensional array that can hold elements of *only one* data type (e.g., all numeric, all character, all logical). If you try to combine different data types in a vector, R will coerce them to a common type (e.g., numbers to characters if characters are present).
    A `list`, on the other hand, is a generic vector that can hold elements of *different* data types and even different R objects (e.g., a list can contain numbers, characters, data frames, or even other lists) as its components.
    You would choose a `vector` when you have a collection of homogeneous items (e.g., a series of measurements, a list of names). You would choose a `list` when you need to store a collection of heterogeneous items or complex objects together (e.g., the results of a statistical model, a collection of a person's name, age, and favorite colors).

2.  **Concept Definition: The Pipe Operator**
    What is the purpose of the `pipe` operator (`%>%` from `magrittr`, commonly used with `dplyr`) in R programming? Provide a simple code example demonstrating its benefit compared to nested function calls.

    **Answer Key & Explanation:**
    The `pipe` operator (`%>%`) is used to chain multiple operations together in a readable, left-to-right sequence. It takes the output of the expression on its left and passes it as the *first argument* to the function on its right. Its primary benefit is to improve code readability and maintainability by avoiding deeply nested function calls or the creation of many intermediate variables.

    **Example:**
    Without pipe:
    ```R
    # data <- filter(select(mutate(my_data, new_col = old_col * 2), -old_col), value > 10)
    ```
    With pipe:
    ```R
    # data <- my_data %>%
    #   mutate(new_col = old_col * 2) %>%
    #   select(-old_col) %>%
    #   filter(value > 10)
    ```
    The piped version clearly shows the sequence of operations applied to `my_data`.

3.  **Concept Definition: Vectorization**
    Describe the concept of "vectorization" in R and explain why it is considered a best practice for writing efficient R code.

    **Answer Key & Explanation:**
    Vectorization in R refers to performing operations on entire vectors or arrays at once, rather than iterating through individual elements using explicit loops (like `for` or `while` loops). R's underlying C and Fortran code is highly optimized for vectorized operations.
    It's considered a best practice because:
    1.  **Efficiency/Speed**: Vectorized operations are significantly faster than explicit loops in R because they leverage optimized, pre-compiled C/Fortran code, reducing the overhead of R's interpreter.
    2.  **Readability**: Vectorized code is often more concise and easier to read and understand, as it expresses the operation at a higher level of abstraction (what you want to do) rather than the step-by-step mechanism (how to do it).
    3.  **Conciseness**: It reduces the amount of code needed, making scripts shorter and less prone to errors.

4.  **Concept Definition: `ggplot2` Components**
    What are the three core components (or layers) that form the grammar of graphics in `ggplot2`? Briefly explain the role of each.

    **Answer Key & Explanation:**
    The three core components of `ggplot2`'s grammar of graphics are:
    1.  **Data**: This is the dataset you want to visualize. It must be a data frame. `ggplot2` expects data in a "tidy" format, where each row is an observation and each column is a variable.
    2.  **Aesthetics (aes())**: These map variables from your dataset to visual properties of the plot. Examples include mapping a numeric variable to the x-axis, another numeric variable to the y-axis, a categorical variable to color, size, or shape.
    3.  **Geometries (geom_*)**: These define the type of graphical object that represents the data on the plot. Examples include `geom_point()` for scatter plots, `geom_line()` for line plots, `geom_bar()` for bar charts, and `geom_histogram()` for histograms. Each `geom` takes aesthetics and draws the corresponding visual elements.

5.  **Code Tracing: Vector Operations**
    What is the output of the following R code? Explain each step.
    ```R
    my_numbers <- c(10, 25, 5, 30, 15, 20)
    filtered_numbers <- my_numbers[my_numbers > 15 & my_numbers < 30]
    result <- sum(filtered_numbers)
    print(result)
    ```

    **Answer Key & Explanation:**
    The output will be `45`.
    **Step-by-step explanation:**
    1.  `my_numbers <- c(10, 25, 5, 30, 15, 20)`: A numeric vector `my_numbers` is created with the values `10, 25, 5, 30, 15, 20`.
    2.  `my_numbers > 15`: This creates a logical vector `FALSE, TRUE, FALSE, TRUE, FALSE, TRUE` (25>15, 30>15, 20>15).
    3.  `my_numbers < 30`: This creates a logical vector `TRUE, TRUE, TRUE, FALSE, TRUE, TRUE` (10<30, 25<30, 5<30, 15<30, 20<30).
    4.  `my_numbers > 15 & my_numbers < 30`: This performs an element-wise logical AND operation on the two logical vectors, resulting in `FALSE, TRUE, FALSE, FALSE, FALSE, TRUE`.
    5.  `filtered_numbers <- my_numbers[...]`: This uses the resulting logical vector to subset `my_numbers`. Only elements corresponding to `TRUE` in the logical vector are kept. So, `filtered_numbers` becomes `c(25, 20)`.
    6.  `result <- sum(filtered_numbers)`: The `sum()` function calculates the sum of the elements in `filtered_numbers`. `25 + 20 = 45`.
    7.  `print(result)`: The value `45` is printed to the console.

6.  **Code Tracing: Function Execution**
    Trace the execution of the following R code and determine the final value of `final_value`.
    ```R
    process_data <- function(x, y) {
      if (x > y) {
        return(x * 2)
      } else {
        return(y - x)
      }
    }

    value1 <- process_data(10, 5)
    value2 <- process_data(value1, 15)
    final_value <- process_data(value2, 20)
    print(final_value)
    ```

    **Answer Key & Explanation:**
    The output will be `5`.

    **Step-by-step explanation:**
    1.  `value1 <- process_data(10, 5)`:
        *   `x = 10`, `y = 5`.
        *   `x > y` (10 > 5) is `TRUE`.
        *   Returns `x * 2`, which is `10 * 2 = 20`.
        *   So, `value1` becomes `20`.
    2.  `value2 <- process_data(value1, 15)`:
        *   `x = value1 = 20`, `y = 15`.
        *   `x > y` (20 > 15) is `TRUE`.
        *   Returns `x * 2`, which is `20 * 2 = 40`.
        *   So, `value2` becomes `40`.
    3.  `final_value <- process_data(value2, 20)`:
        *   `x = value2 = 40`, `y = 20`.
        *   `x > y` (40 > 20) is `TRUE`.
        *   Returns `x * 2`, which is `40 * 2 = 80`.
        *   So, `final_value` becomes `80`.
    4.  `print(final_value)`: The value `80` is printed to the console.

    
    1. `value1 <- process_data(10, 5)`: `x=10, y=5`. `10 > 5` is TRUE. Returns `10 * 2 = 20`. `value1` is `20`.
    2. `value2 <- process_data(value1, 15)`: `x=20, y=15`. `20 > 15` is TRUE. Returns `20 * 2 = 40`. `value2` is `40`.
    3. `final_value <- process_data(value2, 20)`: `x=40, y=20`. `40 > 20` is TRUE. Returns `40 * 2 = 80`. `final_value` is `80`.

    My previous manual trace was correct. The output is 80. I will stick with that.

7.  **Code Tracing: Data Frame Indexing**
    Given the following data frame `df`:
    ```R
    df <- data.frame(
      Name = c("Alice", "Bob", "Charlie"),
      Age = c(25, 30, 22),
      City = c("NY", "LA", "CHI")
    )
    ```
    What is the result of the following R expressions?
    a) `df$Age[2]`
    b) `df[3, "Name"]`
    c) `df[c(1, 3), c("Name", "City")]`

    **Answer Key & Explanation:**
    a) `df$Age[2]` will return `30`.
        *   `df$Age` selects the `Age` column, which is a vector `c(25, 30, 22)`.
        *   `[2]` then selects the second element from this vector.
    b) `df[3, "Name"]` will return `"Charlie"`.
        *   `df[3, ...]` selects the third row.
        *   `[..., "Name"]` selects the `Name` column.
        *   Combining these, it selects the value in the third row of the `Name` column.
    c) `df[c(1, 3), c("Name", "City")]` will return a data frame:
        ```
           Name City
        1 Alice   NY
        3 Charlie CHI
        ```
        *   `df[c(1, 3), ...]` selects the first and third rows.
        *   `[..., c("Name", "City")]` selects the `Name` and `City` columns.
        *   The result is a new data frame containing only these specified rows and columns.

8.  **Code Writing: Data Frame Manipulation**
    Write R code to perform the following steps:
    1.  Create a data frame named `products` with three columns: `product_id` (numeric: 101, 102, 103), `category` (character: "Electronics", "Books", "Electronics"), and `price` (numeric: 499.99, 25.50, 129.00).
    2.  Add a new column `in_stock` (logical: TRUE, TRUE, FALSE) to the `products` data frame.
    3.  Using `dplyr`, filter the `products` data frame to show only products in the "Electronics" category that are currently `in_stock`.

    **Answer Key & Explanation:**
    ```R
    library(dplyr)

    # 1. Create the data frame
    products <- data.frame(
      product_id = c(101, 102, 103),
      category = c("Electronics", "Books", "Electronics"),
      price = c(499.99, 25.50, 129.00)
    )

    # 2. Add the new column
    products$in_stock <- c(TRUE, TRUE, FALSE)

    # 3. Filter the data frame
    filtered_electronics_in_stock <- products %>%
      filter(category == "Electronics" & in_stock == TRUE)

    print(filtered_electronics_in_stock)
    ```
    **Expected Output:**
    ```
      product_id    category  price in_stock
    1        101 Electronics 499.99     TRUE
    ```
    **Partial Credit Guidance**: Partial credit for correctly creating the initial data frame, adding the column, or correctly applying one of the `dplyr` filters.

9.  **Code Writing: Custom Function with Error Handling**
    Write an R function called `calculate_median` that takes a numeric vector as input. The function should:
    1.  Calculate the median of the vector.
    2.  Handle `NA` values by removing them before calculation.
    3.  Return the calculated median.
    4.  If the input vector is empty after removing `NA`s, it should return `NA` and print a warning message.

    **Answer Key & Explanation:**
    ```R
    calculate_median <- function(vec) {
      # Remove NA values
      clean_vec <- na.omit(vec)

      # Check if the vector is empty after removing NAs
      if (length(clean_vec) == 0) {
        warning("Input vector is empty after removing NA values. Returning NA.")
        return(NA)
      }

      # Calculate and return the median
      return(median(clean_vec))
    }

    # Test cases:
    print(calculate_median(c(1, 2, 3, 4, 5))) # Expected: 3
    print(calculate_median(c(10, NA, 20, 30))) # Expected: 20
    print(calculate_median(c(NA, NA, NA))) # Expected: NA with warning
    print(calculate_median(numeric(0))) # Expected: NA with warning
    ```
    **Partial Credit Guidance**: Partial credit for correctly calculating the median, handling NAs, or implementing the empty vector check/warning.

10. **Code Writing: `ggplot2` Visualization**
    Using the built-in `mtcars` dataset, write R code to create a scatter plot.
    *   Map `hp` (horsepower) to the x-axis and `mpg` (miles per gallon) to the y-axis.
    *   Color the points based on the `cyl` (number of cylinders) variable.
    *   Add a title to the plot: "MPG vs. Horsepower by Cylinders".
    *   Add appropriate x and y axis labels.

    **Answer Key & Explanation:**
    ```R
    library(ggplot2)

    ggplot(mtcars, aes(x = hp, y = mpg, color = factor(cyl))) +
      geom_point() +
      labs(
        title = "MPG vs. Horsepower by Cylinders",
        x = "Horsepower (hp)",
        y = "Miles Per Gallon (mpg)",
        color = "Cylinders" # Legend title for color
      ) +
      theme_minimal() # Optional: for a cleaner look
    ```
    **Partial Credit Guidance**: Partial credit for correctly setting up the `ggplot()` call with aesthetics, adding `geom_point()`, or adding titles/labels.

11. **Code Writing: `dplyr` Chaining**
    Using the `iris` dataset and `dplyr`, write R code to perform the following operations in a single chain:
    1.  Filter the dataset to include only rows where `Species` is "virginica" AND `Petal.Length` is greater than 5.0.
    2.  Select only the `Sepal.Length`, `Sepal.Width`, and `Petal.Length` columns.
    3.  Arrange the resulting data frame in descending order of `Sepal.Length`.

    **Answer Key & Explanation:**
    ```R
    library(dplyr)

    filtered_iris <- iris %>%
      filter(Species == "virginica" & Petal.Length > 5.0) %>%
      select(Sepal.Length, Sepal.Width, Petal.Length) %>%
      arrange(desc(Sepal.Length))

    print(filtered_iris)
    ```
    **Expected Output (first few rows):**
    ```
      Sepal.Length Sepal.Width Petal.Length
    1          7.9         3.8          6.4
    2          7.7         3.8          6.7
    3          7.7         2.6          6.9
    ... (and so on)
    ```
    **Partial Credit Guidance**: Partial credit for correctly implementing each individual `dplyr` verb (`filter`, `select`, `arrange`) even if not chained perfectly.

12. **Design/Debugging: File Not Found Error**
    You are trying to read a CSV file using `read.csv("my_data.csv")`, but R throws an error: "cannot open file 'my_data.csv': No such file or directory". What are two common reasons for this error, and how would you systematically debug this issue?

    **Answer Key & Explanation:**
    Two common reasons for this error are:
    1.  **Incorrect Working Directory**: The R session's current working directory is not where `my_data.csv` is located. R looks for files relative to its current working directory by default.
    2.  **Incorrect File Path/Name**: The file name or its path specified in `read.csv()` is misspelled, or the file does not exist at the specified location. This includes incorrect file extensions (e.g., `.csv` vs `.txt`).

    **Systematic Debugging Steps:**
    1.  **Check Working Directory**: Use `getwd()` to see your current working directory. Then, use `list.files()` or `dir()` to list the files in that directory and confirm if `my_data.csv` is present.
    2.  **Verify File Path**: If the file is not in the working directory, either:
        *   Change the working directory using `setwd("path/to/your/folder")` (though using full paths is generally safer).
        *   Provide the full, absolute path to the file in `read.csv("C:/Users/YourName/Documents/my_data.csv")` (Windows) or `read.csv("/home/yourname/data/my_data.csv")` (Linux/macOS).
    3.  **Verify File Name and Extension**: Double-check the spelling of `my_data.csv` and ensure the extension is correct. Case sensitivity can also be an issue on some operating systems.
    4.  **Check File Permissions**: Less common, but ensure R has the necessary permissions to read the file.

13. **Design/Debugging: Choosing the Right Data Structure**
    You need to store information about a single customer, including their `customer_id` (numeric), `name` (character), `email` (character), and a vector of their `past_order_ids` (numeric vector). Which R data structure would be most appropriate to hold all this information for *one* customer, and why? Provide a small example of how you would structure it.

    **Answer Key & Explanation:**
    The most appropriate R data structure to hold this information for a *single customer* is a `list`.

    **Why a `list`?**
    A `list` is ideal because it can store heterogeneous data types and even other R objects. In this scenario, `customer_id` is numeric, `name` and `email` are character strings, and `past_order_ids` is a numeric vector. A `list` allows you to keep these different types of information together as distinct components, each accessible by name. A `vector` would coerce all elements to a single type, losing the distinct nature of the data. A `data.frame` is for tabular data where each column is a variable and each row is an observation; while you could make a one-row data frame, a list is more natural for a single, complex entity.

    **Example:**
    ```R
    customer_info <- list(
      customer_id = 12345,
      name = "Jane Doe",
      email = "jane.doe@example.com",
      past_order_ids = c(1001, 1005, 1012, 1020)
    )

    print(customer_info$name)
    print(customer_info$past_order_ids)
    ```
    **Partial Credit Guidance**: Partial credit for identifying `list` but not fully explaining why, or for providing a correct example without full justification.

14. **Design/Debugging: Correcting a Looping Function**
    A colleague wrote the following R function to calculate the square of each number in a vector, but it's not working as expected for vectors longer than one element. It only returns the square of the first element.
    ```R
    square_elements_buggy <- function(vec) {
      for (i in 1:length(vec)) {
        return(vec[i]^2) # Bug is here
      }
    }

    # Test with a vector
    # square_elements_buggy(c(1, 2, 3)) # Expected: c(1, 4, 9), Actual: 1
    ```
    Identify the bug in the `square_elements_buggy` function and provide the corrected R code. Explain why your corrected code works.

    **Answer Key & Explanation:**
    **Bug Identification:**
    The bug is in the `return(vec[i]^2)` line inside the `for` loop. The `return()` statement immediately exits the function as soon as it's executed. In this case, on the very first iteration (`i = 1`), the function calculates `vec[1]^2` and returns it, preventing the loop from continuing and processing the rest of the vector elements.

    **Corrected Code:**
    The most R-idiomatic and efficient way to achieve this is through vectorization, avoiding the explicit loop entirely. If a loop *must* be used (e.g., for learning purposes), one needs to store results in a new vector.

    **Option 1: Vectorized (Recommended)**
    ```R
    square_elements_corrected_vectorized <- function(vec) {
      # R's power operator `^` is already vectorized
      return(vec^2)
    }

    print(square_elements_corrected_vectorized(c(1, 2, 3))) # Expected: 1 4 9
    print(square_elements_corrected_vectorized(c(5, 10)))   # Expected: 25 100
    ```

    **Option 2: Using a Loop (for demonstration, less R-idiomatic)**
    ```R
    square_elements_corrected_loop <- function(vec) {
      # Initialize an empty vector to store results
      result_vec <- numeric(length(vec)) # Pre-allocate for efficiency

      for (i in 1:length(vec)) {
        result_vec[i] <- vec[i]^2 # Store result in the new vector
      }
      return(result_vec) # Return the entire vector after the loop finishes
    }

    print(square_elements_corrected_loop(c(1, 2, 3))) # Expected: 1 4 9
    print(square_elements_corrected_loop(c(5, 10)))   # Expected: 25 100
    ```

    **Explanation of Corrected Code:**
    *   **Vectorized Version**: R's operators are inherently vectorized. When you apply `^2` to an entire vector (`vec^2`), R automatically performs the operation on each element of the vector and returns a new vector of the results. This is the most efficient and concise solution in R.
    *   **Loop Version**: Instead of `return()` inside the loop, we first initialize an empty vector (`result_vec`) of the correct size. Inside the loop, we assign the squared value of each element `vec[i]` to the corresponding position `result_vec[i]`. Only after the loop has completed processing all elements do we `return(result_vec)`, ensuring that all squared values are collected and returned as a single vector.

    **Partial Credit Guidance**: Partial credit for identifying the `return()` bug, or for providing a corrected version using either vectorization or a loop. Full credit for identifying the bug and providing the vectorized solution.

## Course Conclusion

You have reached the culmination of your R Programming journey with Cohortia! Over the past modules, you've not only learned the syntax and structure of R but have also developed a robust set of skills that empower you to tackle real-world data challenges. You can now confidently manipulate data using `dplyr`, create insightful visualizations with `ggplot2`, write your own functions to automate tasks, understand and apply control flow, and even build foundational statistical models. You've gained proficiency in handling various R data structures, importing and exporting data, and debugging common programming issues. These are not just theoretical concepts; they are practical tools that will serve as the bedrock for your future endeavors in data science, statistics, and beyond.

The projects and exercises throughout this course have provided you with hands-on experience, transforming you from a beginner into a capable R programmer. You've learned to approach problems systematically, break them down into manageable steps, and leverage the vast ecosystem of R packages to achieve your goals. This foundational understanding is crucial, as R continues to be one of the most powerful and widely used languages for statistical computing and data analysis across academia and industry.

### Where to Go Next: Continued Learning Paths

Your journey with R doesn't end here; it's just beginning! To continue building on the strong foundation you've established, consider exploring these learning paths and resources:

1.  **Deep Dive into Data Science with R**:
    *   **Books**: "R for Data Science" by Hadley Wickham and Garrett Grolemund (available online for free) is an excellent next step, delving deeper into the `tidyverse` ecosystem. "Advanced R" by Hadley Wickham will challenge you to write more efficient and robust R code.
    *   **Courses**: Look for specialized courses on machine learning with R, statistical modeling, or specific data science applications (e.g., natural language processing, time series analysis) using R. Platforms like Coursera, edX, and DataCamp offer many such options.
    *   **Projects**: Participate in Kaggle competitions, contribute to open-source R projects, or find public datasets on topics you're passionate about and apply your R skills to uncover new insights. Building a portfolio of projects is invaluable.

2.  **Interactive Web Applications with Shiny**:
    *   **Skill Focus**: Learn how to build interactive web applications directly from your R code using the `Shiny` package. This allows you to share your data analyses and models with non-technical users in an accessible way.
    *   **Resources**: The official Shiny website and "Mastering Shiny" by Hadley Wickham (free online book) are fantastic starting points.
    *   **Projects**: Create an interactive dashboard for one of your capstone projects, build a tool for data exploration, or develop a simple web-based calculator using Shiny.

3.  **Statistical Modeling and Inference**:
    *   **Skill Focus**: If your interest lies more in the statistical aspects, explore advanced statistical modeling techniques like generalized linear models, mixed-effects models, Bayesian statistics, and causal inference using R.
    *   **Resources**: Many university courses and specialized textbooks focus on statistical methods implemented in R. The `tidymodels` ecosystem is a modern approach to modeling in R.
    *   **Communities**: Engage with the R user community on forums like RStudio Community, Stack Overflow, and local R user groups. These communities are incredibly supportive and a great place to ask questions and learn from others.

Remember, consistent practice is key to mastery. Keep experimenting with R, work on diverse projects, and don't be afraid to explore new packages and techniques. The R community is vibrant and constantly evolving, offering endless opportunities for learning and growth. We at Cohortia are incredibly proud of your accomplishments and excited to see what you'll create next!

---


> End of Syllabus: R Programming
> Course ID: r-programming
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Programming & Software Development Fundamentals
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
