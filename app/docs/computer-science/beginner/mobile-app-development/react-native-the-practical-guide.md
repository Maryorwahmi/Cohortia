---
course_title: React Native – The Practical Guide
course_id: react-native-the-practical-guide
provider: Cohortia
original_reference: Udemy (Academind) / Online
platform: Cohortia
level: Beginner–Intermediate
type: Course
duration: 32 hrs
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Mobile App Development
skills: React Native, Expo, navigation, APIs
source_catalog: docs/computer-science/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "React Native – The Practical Guide," your comprehensive journey into building cross-platform mobile applications with JavaScript and React. This course is meticulously designed for developers who are familiar with JavaScript and React and are eager to extend their skills to mobile app development without diving into platform-specific languages like Swift/Objective-C or Kotlin/Java. We will start from the absolute basics, guiding you through setting up your development environment, understanding fundamental React Native concepts, and progressively building complex, real-world applications. Our focus is on practical, hands-on learning, ensuring you gain not just theoretical knowledge but also the confidence to tackle real-world mobile development challenges.

Throughout this guide, you will immerse yourself in the React Native ecosystem, leveraging the power of Expo for rapid development and deployment. We will explore core components, styling techniques, and how to manage application state effectively. As we advance, you'll learn to implement sophisticated navigation patterns, handle user input, display dynamic lists, and interact with device features such as the camera, location services, and local storage. The course culminates in advanced topics like integrating with backend services, implementing user authentication, and preparing your applications for deployment to app stores.

This curriculum emphasizes a progressive learning path, starting with simple concepts and gradually introducing more intricate topics. We believe in learning by doing, so expect numerous coding exercises, practical scenarios, and mini-projects that reinforce your understanding at every step. By the end of this course, you will possess a robust toolkit for developing high-quality, performant mobile applications that run seamlessly on both iOS and Android platforms, positioning you as a proficient React Native developer ready to contribute to the mobile-first world.

**Learning Outcomes:**

*   Set up a complete React Native development environment using Expo CLI.
*   Understand the core principles of React Native, including components, JSX, and the React Native lifecycle.
*   Build responsive and visually appealing user interfaces using React Native's styling system and core components.
*   Implement various navigation patterns (Stack, Tab, Drawer) using React Navigation to create multi-screen applications.
*   Manage application state effectively using React's built-in state management and context API.
*   Integrate device-specific features such as the camera, location services, and local storage into your apps.
*   Perform HTTP requests to communicate with backend APIs and handle asynchronous data.
*   Implement user authentication flows, including sign-up, login, and session management.
*   Debug React Native applications efficiently and understand common pitfalls.
*   Prepare and deploy React Native applications to both Apple App Store and Google Play Store.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Getting Started with React Native & Core Components | 3 |
| 2 | Mastering Component Interaction & State Management | 3 |
| 3 | Handling User Input, Lists, and Styling | 4 |
| 4 | Building Multi-Screen Apps with Navigation | 4 |
| 5 | Accessing Device Features & Backend Communication | 5 |
| 6 | State Management, Authentication & Deployment | 5 |

Total chapters: 24
---

## Module 1: Getting Started with React Native & Core Components

This module introduces you to the exciting world of React Native development. We'll set up your development environment using Expo, build your very first mobile application, and gain a foundational understanding of React Native's core building blocks – the components and styling mechanisms that bring your app's UI to life. By the end of this module, you'll have a running React Native application and a solid grasp of how to display basic content and structure your app's layout.

### Chapter 1.1 — Setting Up Your React Native Development Environment with Expo

#### Learning objectives
*   Successfully install and configure the necessary tools for React Native development using Expo.
*   Create a new React Native project with the Expo CLI.
*   Run your React Native application on a physical device using Expo Go and on an emulator/simulator.
*   Understand the benefits of the Expo managed workflow for rapid development.

#### Detailed lesson content
Welcome to the journey of building mobile applications with React Native! Before we dive into writing code, setting up a robust and efficient development environment is crucial. For beginners, the Expo managed workflow offers an incredibly streamlined experience, abstracting away many complexities of native project configuration. This allows you to focus purely on React Native code, making your initial learning curve much smoother. Expo provides a set of tools and services that simplify development, testing, and deployment, making it an excellent choice for getting started.

Our first step is to ensure you have Node.js installed on your system. React Native, and specifically Expo, relies heavily on Node.js for its JavaScript runtime and package management. You can check if Node.js is already installed by opening your terminal or command prompt and typing `node -v` and `npm -v`. We recommend using a recent LTS (Long Term Support) version of Node.js, typically version 16 or higher, to ensure compatibility with the latest React Native and Expo features. If you don't have Node.js, or if your version is outdated, visit the official Node.js website (nodejs.org) to download and install the appropriate installer for your operating system. For developers who manage multiple Node.js projects, tools like `nvm` (Node Version Manager) or `Volta` are highly recommended, as they allow you to easily switch between different Node.js versions without conflicts.

Once Node.js is ready, the next essential tool is the Expo CLI (Command Line Interface). The Expo CLI is a command-line utility that helps you create, develop, and publish your Expo projects. You install it globally on your system using npm, Node.js's package manager. Open your terminal and run the command `npm install -g expo-cli`. The `-g` flag ensures that the `expo` command is available system-wide. After the installation completes, you can verify it by typing `expo --version`. If you encounter permission errors during global installation, you might need to prefix the command with `sudo` on macOS/Linux or run your terminal as an administrator on Windows.

With the Expo CLI installed, creating your first React Native project is straightforward. Navigate to the directory where you want to store your projects and execute `expo init my-first-app`. Replace `my-first-app` with your desired project name. The `expo init` command will prompt you to choose a template. For most projects, especially when starting, the `blank` template is sufficient, providing a minimal app structure. The `tabs` template offers a pre-configured navigation setup, which can be useful later. After selecting a template, Expo CLI will download the necessary dependencies and set up your project structure. This process might take a few minutes depending on your internet connection.

Once your project is initialized, navigate into your new project directory: `cd my-first-app`. Now, to run your application, simply type `npm start` or `expo start`. This command will start the Expo development server, which bundles your JavaScript code and serves it to your devices. Upon starting, a new browser tab will open, displaying the Expo Developer Tools. This web interface provides various options for running your app. The most convenient way to test on a physical device is to download the "Expo Go" app from your device's app store (available for both iOS and Android). Once installed, open Expo Go and scan the QR code displayed in your terminal or the Expo Developer Tools. Your app will then load directly onto your phone, allowing you to see changes in real-time as you develop.

For a more robust testing environment, especially for debugging, you'll often want to use simulators (for iOS) or emulators (for Android). If you're on macOS, you can install Xcode from the App Store, which includes the iOS Simulator. For Android, you'll need to install Android Studio, which provides the Android Emulator. Once installed and configured, the Expo Developer Tools will detect them, and you can simply click "Run on iOS simulator" or "Run on Android emulator" from the web interface or press `i` or `a` in the terminal where `expo start` is running.

Common mistakes often include Node.js version mismatches, which can lead to cryptic errors during dependency installation. Always ensure you're using a compatible Node.js version. Another common issue is network or firewall restrictions preventing the Expo development server from communicating with your device; ensure your device and computer are on the same local network and that no firewalls are blocking ports used by Expo (typically 19000 and 19001). Finally, remember to always run `npm install -g expo-cli` with appropriate permissions if you encounter access errors. Keeping your dependencies updated by regularly running `npm update` within your project and `npm update -g expo-cli` for the CLI is a good safety practice to leverage the latest features and bug fixes.

#### Key concepts
*   **Node.js:** A JavaScript runtime environment essential for running React Native development tools and managing packages.
*   **npm (Node Package Manager):** The default package manager for Node.js, used to install libraries and tools like Expo CLI.
*   **Expo CLI:** A command-line interface tool that simplifies creating, developing, and publishing React Native projects with Expo.
*   **Expo Go:** A mobile app (iOS/Android) that allows you to quickly open and test Expo projects on your physical device by scanning a QR code.
*   **Managed Workflow:** Expo's development approach that handles native project configuration, allowing developers to focus solely on JavaScript/React Native code without directly touching Xcode or Android Studio.
*   **Simulator/Emulator:** Software that mimics a mobile device, allowing you to test your app on your computer without a physical device.

#### Hands-on activity
**Objective:** Set up your development environment and run a blank React Native app.

1.  **Install Node.js:** If you don't have it, download and install the latest LTS version from [nodejs.org](https://nodejs.org). Verify installation with `node -v` and `npm -v`.
2.  **Install Expo CLI:** Open your terminal/command prompt and run:
    ```bash
    npm install -g expo-cli
    ```
    Verify installation with `expo --version`.
3.  **Create a new project:** Navigate to your desired projects folder and create a new React Native project:
    ```bash
    expo init MyFirstReactNativeApp
    ```
    When prompted, choose the `blank` template.
4.  **Navigate into your project:**
    ```bash
    cd MyFirstReactNativeApp
    ```
5.  **Start the development server:**
    ```bash
    npm start
    ```
6.  **Run on a physical device:** Download the "Expo Go" app on your iOS or Android device. Scan the QR code displayed in your terminal or the Expo Developer Tools browser tab.
7.  **Run on a simulator/emulator (optional):** If you have Xcode (macOS) or Android Studio installed, press `i` (for iOS simulator) or `a` (for Android emulator) in the terminal where `npm start` is running, or click the corresponding option in the Expo Developer Tools.

You should now see the default "Open up App.js to start working on your app!" message on your device or simulator.

#### Assessment idea
1.  **Question:** You've just run `npm install -g expo-cli` but when you try to use `expo start`, your terminal says "command not found". What is a common reason for this, and what steps would you take to troubleshoot it?
    **Correct Answer:** A common reason for "command not found" after a global npm installation is that the npm global bin directory is not in your system's PATH environment variable, or the installation itself failed due to permissions.
    **Troubleshooting steps:**
    *   **Check installation success:** Look for any error messages during `npm install -g expo-cli`.
    *   **Verify permissions:** If on macOS/Linux, try `sudo npm install -g expo-cli`. On Windows, run your command prompt/PowerShell as Administrator.
    *   **Restart terminal:** Sometimes the PATH variable needs a fresh terminal session to update.
    *   **Locate npm global bin:** Run `npm root -g` to find where global packages are installed, then ensure that directory (or its `bin` subdirectory) is in your system's PATH.
2.  **Question:** Explain the primary advantage of using the Expo Go app for testing during early development compared to building a standalone native app for each test cycle.
    **Correct Answer:** The primary advantage of using Expo Go is its speed and simplicity. With Expo Go, you can instantly load and test your app on a physical device by scanning a QR code, without needing to compile a new native build (`.ipa` for iOS or `.apk` for Android) every time you make changes. This significantly accelerates the development feedback loop, allowing for rapid iteration and testing, especially beneficial for beginners. Building standalone apps is a much slower process, typically reserved for final testing or deployment.

#### AI generation note
Create a 12-minute live coding video. Start by briefly showing `node -v` and `npm -v`. Then, demonstrate `npm install -g expo-cli` in the terminal. Proceed to `expo init MyFirstApp` and select the `blank` template, showing the installation process. Finally, run `npm start` and demonstrate scanning the QR code with a physical phone running Expo Go (split-screen showing terminal/QR and phone screen) and then running the app in an iOS simulator. Use a clear, encouraging tone. Include a visual overlay highlighting the `expo init` command and template selection.

---

### Chapter 1.2 — Your First React Native App: Hello World and Basic Structure

#### Learning objectives
*   Identify and understand the fundamental structure of a React Native `App.js` file.
*   Utilize the `View` and `Text` core components to display content.
*   Apply basic styling to components using both inline styles and `StyleSheet.create`.
*   Explain the differences between React Native components and web HTML elements.

#### Detailed lesson content
Now that your development environment is set up, let's dive into the code and build our first meaningful React Native application. When you created your project with `expo init`, it generated an `App.js` file, which serves as the entry point for your application. Open this file in your code editor, and you'll see some boilerplate code. At its core, a React Native application is a collection of components, much like building blocks, that render your user interface.

Let's deconstruct the `App.js` file. You'll typically see `import React from 'react';` at the top, which imports the React library itself, essential for defining components. Below that, you'll find `import { View, Text, StyleSheet } from 'react-native';`. This line is crucial: it imports specific core components and styling utilities directly from the `react-native` library. Unlike web development where you use HTML tags like `<div>` or `<p>`, React Native provides its own set of platform-agnostic components that render to native UI elements on iOS and Android.

The main part of `App.js` is usually a functional component, often named `App`, which returns some JSX (JavaScript XML). JSX is a syntax extension for JavaScript that allows you to write UI structures similar to HTML within your JavaScript code. For example:

```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Cohortia!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

The `export default function App() { ... }` line defines our main application component. Whatever this component returns in its `return` statement is what gets rendered on the screen. In React Native, the most fundamental container component is `View`. Think of `View` as the equivalent of a `<div>` in web development – it's a generic container that supports layout with Flexbox, styling, and touch handling. All other components are typically nested inside `View` components.

To display text in React Native, you **must** use the `Text` component. This is a common point of confusion for web developers; you cannot simply put text directly inside a `View` or other components without wrapping it in `<Text>`. For instance, `<View>Hello</View>` would result in an error. It must be `<View><Text>Hello</Text></View>`. The `Text` component is specifically designed to handle text rendering, including font styles, sizes, colors, and text wrapping, ensuring consistent behavior across platforms.

Styling in React Native is similar to CSS but uses JavaScript objects. You can apply styles directly to components using the `style` prop. For example, `<Text style={{ color: 'blue', fontSize: 20 }}>Hello</Text>`. This is called inline styling. While convenient for simple, one-off styles, the recommended and more performant approach for complex applications is to use `StyleSheet.create`. `StyleSheet.create` takes an object where keys are style names and values are style objects. React Native optimizes these stylesheets by creating a single, immutable style object that can be referenced by component props, leading to better performance and easier maintenance.

Let's look at the `StyleSheet` example from above:
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up all available space
    backgroundColor: '#fff', // White background
    alignItems: 'center', // Centers children horizontally in a column layout (default flexDirection)
    justifyContent: 'center', // Centers children vertically in a column layout
  },
});
```
Here, `styles.container` is an object containing various style properties. We then apply it to our `View` component using `style={styles.container}`. Notice the use of `flex: 1`, `alignItems: 'center'`, and `justifyContent: 'center'`. These are Flexbox properties, a powerful layout system that React Native uses extensively. `flex: 1` tells the `View` to expand and fill all available space, while `alignItems` and `justifyContent` are used to center its child components within it.

A common mistake beginners make is trying to use standard CSS properties like `margin-top` or `font-size`. In React Native, all style properties are camelCase (e.g., `marginTop`, `fontSize`). Also, remember that units are unitless by default and represent density-independent pixels, which means they scale appropriately across different screen densities. Always ensure you import the components you intend to use from `react-native`. Forgetting to `import { Text } from 'react-native';` will lead to a runtime error when you try to use `<Text>`. By understanding these core concepts, you're well on your way to building robust and visually appealing React Native applications.

#### Key concepts
*   **`App.js`:** The main entry point file for a React Native application, typically containing the root component.
*   **JSX:** A syntax extension for JavaScript that allows writing HTML-like structures directly within JavaScript code to define UI.
*   **`View` component:** The most fundamental container component in React Native, analogous to a `<div>` in web development, used for layout and styling.
*   **`Text` component:** The dedicated component in React Native for displaying text content. All text must be wrapped within a `<Text>` component.
*   **`StyleSheet.create`:** A utility for creating optimized and reusable stylesheets in React Native, improving performance and maintainability.
*   **Inline Styling:** Applying styles directly to a component's `style` prop using a JavaScript object (e.g., `style={{ color: 'red' }}`).
*   **Flexbox:** A one-dimensional layout system used extensively in React Native for arranging items within a container.

#### Hands-on activity
**Objective:** Modify your `App.js` to display "Hello Cohortia!" centered on the screen using `View`, `Text`, and `StyleSheet`.

1.  Open the `App.js` file in your `MyFirstReactNativeApp` project (created in Chapter 1.1).
2.  Replace the existing content of `App.js` with the following code. Pay attention to the imports and the `StyleSheet.create` section.

    ```jsx
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.greetingText}>Hello Cohortia!</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f0f8ff', // A light blue background
        alignItems: 'center',
        justifyContent: 'center',
      },
      greetingText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50', // A dark grey color
      },
    });
    ```
3.  Ensure your Expo development server is running (`npm start` in your project directory).
4.  Observe your app on your physical device or simulator. You should see "Hello Cohortia!" prominently displayed in the center of a light blue screen. Experiment with changing `fontSize` or `color` in `greetingText` to see immediate updates.

#### Assessment idea
1.  **Question:** A new React Native developer attempts to display a paragraph of text by writing `<View>This is some text.</View>`. When they run the app, they see an error. Explain why this error occurs and provide the correct way to display the text.
    **Correct Answer:** The error occurs because in React Native, all text content must be explicitly wrapped within a `<Text>` component. Unlike HTML where text can be a direct child of a `div`, React Native's `View` component is a container for other components, not raw text.
    **Correct way:** `<View><Text>This is some text.</Text></View>`
2.  **Question:** You want to style a specific `Text` component with a red color and a font size of 18. Write the JSX and the corresponding `StyleSheet.create` entry to achieve this, and then explain why `StyleSheet.create` is generally preferred over inline styling for such a scenario in a larger application.
    **Correct Answer:**
    ```jsx
    // In App.js or your component file
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>An error occurred!</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorText: {
        color: 'red',
        fontSize: 18,
      },
    });
    ```
    **Explanation:** `StyleSheet.create` is preferred because it optimizes styles by creating a single, immutable stylesheet object. This allows React Native to process styles more efficiently, leading to better performance, especially in complex applications with many components and styles. Furthermore, it promotes better code organization and readability by centralizing style definitions, making it easier to manage, reuse, and update styles across multiple components without duplicating code. Inline styles, while quick for one-off cases, can lead to redundancy and make debugging harder in larger codebases.

#### AI generation note
Create a 10-minute live coding video. Start with the default `App.js` from `expo init`. First, demonstrate the error of placing raw text inside a `View`. Then, introduce the `Text` component to fix it. Gradually add `View` as a container. Refactor inline styles to `StyleSheet.create` for the `container` and `greetingText`. Show the live updates on a simulator throughout the process. Use a split-screen view for the code editor and the simulator. Include a brief interactive mini-quiz at the end asking to identify the correct component for displaying text.

---

### Chapter 1.3 — Understanding Core Components: View, Text, Image, and StyleSheet

#### Learning objectives
*   Deepen your understanding of `View` and `Text` components by exploring their common props for layout and text manipulation.
*   Integrate the `Image` component to display both local assets and network-fetched images.
*   Master advanced `StyleSheet` techniques, including combining multiple style objects and understanding platform-specific styling.
*   Apply core components and styling to build a simple, structured UI element like a profile card.

#### Detailed lesson content
Building on our "Hello Cohortia!" app, let's now explore the core components `View`, `Text`, and introduce the `Image` component, along with more advanced `StyleSheet` capabilities. These components are the foundational elements for almost any React Native UI. A strong grasp of their properties and how they interact with styling is crucial for creating rich and responsive user interfaces.

The `View` component, as we discussed, is the most fundamental container. It's incredibly versatile and forms the backbone of your app's layout. Beyond just `flex: 1`, `alignItems`, and `justifyContent`, `View` supports a wide array of Flexbox properties. For instance, `flexDirection` (default is `column`) can be set to `row` to arrange children horizontally. Properties like `padding` and `margin` (e.g., `paddingHorizontal`, `marginTop`) control spacing, while `borderWidth`, `borderColor`, and `borderRadius` allow you to add visual boundaries and rounded corners. Understanding Flexbox is paramount for React Native layout, as it's the primary mechanism for arranging elements. For example, to create two side-by-side columns, you'd wrap them in a `View` with `flexDirection: 'row'`, and then give each column a `flex: 1` to distribute space evenly.

The `Text` component is equally powerful for displaying diverse textual content. Beyond `fontSize` and `color`, you can control `fontWeight` (e.g., `'bold'`, `'normal'`, or numeric values like `'500'`), `fontStyle` (`'italic'`), and `textAlign` (`'center'`, `'left'`, `'right'`). For long texts, `numberOfLines` can limit the visible lines, and `ellipsizeMode` (e.g., `'tail'`, `'head'`, `'middle'`) determines where the ellipsis (...) appears if the text overflows. A powerful feature of `Text` is its ability to be nested: you can apply different styles to parts of a sentence by nesting `Text` components within each other. For example, `<Text>Hello <Text style={{fontWeight: 'bold'}}>Cohortia</Text>!</Text>` would render "Cohortia" in bold.

Now, let's introduce the `Image` component, essential for any visually rich application. The `Image` component is used to display various types of images.
There are two primary ways to display images:
1.  **Local Images:** For images bundled with your application (e.g., in an `assets` folder), you use `require()` to reference them.
    ```jsx
    <Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />
    ```
    Note that the `style` prop is still necessary to define the `width` and `height` of the image, as React Native doesn't automatically infer these from local assets.
2.  **Network Images:** For images fetched from a URL, you pass an object with a `uri` property to the `source` prop.
    ```jsx
    <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
    ```
    **CRITICAL COMMON MISTAKE:** For network images, you **must** explicitly define `width` and `height` in the `style` prop. If you omit these, the image will not appear because React Native cannot determine its dimensions from the URL alone. Another important style prop for `Image` is `resizeMode` (e.g., `'cover'`, `'contain'`, `'stretch'`), which controls how the image scales within its container. Always consider image optimization for performance, especially for network images, to prevent slow loading times and excessive data usage. You might also want to implement error handling for network images using the `onError` prop.

Finally, let's expand on `StyleSheet`. While `StyleSheet.create` is great for defining distinct style objects, you often need to combine multiple styles. This is easily achieved by passing an array of style objects to the `style` prop:
```jsx
<Text style={[styles.baseText, styles.highlightedText]}>Important Message</Text>
```
In this array, styles defined later in the array will override conflicting properties from earlier styles. For instance, if `baseText` sets `color: 'black'` and `highlightedText` sets `color: 'blue'`, the text will be blue. This pattern is incredibly useful for creating reusable base styles and then applying specific overrides. For truly advanced scenarios, you might encounter `Platform.select` for platform-specific styling (e.g., different margins on iOS vs. Android) or conditional styling based on component props or state, but combining style arrays is a powerful starting point.

Let's apply these concepts to a practical scenario: building a simple user profile card. This card might include a profile picture, the user's name, and a short bio. We'll use `View` for the overall card container and for arranging elements, `Image` for the profile picture, and `Text` for the name and bio, all styled using `StyleSheet`. This exercise will solidify your understanding of how these core components work together to form a structured UI.

#### Key concepts
*   **`View` Props:** Properties like `flexDirection`, `padding`, `margin`, `borderWidth`, `borderRadius` for advanced layout and visual styling.
*   **`Text` Props:** Properties like `numberOfLines`, `ellipsizeMode`, `fontWeight`, `fontStyle`, `textAlign` for detailed text control.
*   **Nested `Text`:** The ability to apply different styles to parts of a text string by nesting `Text` components.
*   **`Image` Component:** Used to display images, supporting both local assets (using `require()`) and network images (using `{ uri: '...' }`).
*   **`resizeMode`:** An `Image` prop that controls how an image scales within its container (`cover`, `contain`, `stretch`, etc.).
*   **Combining Styles:** Applying multiple style objects to a component by passing an array to the `style` prop (e.g., `style={[styles.base, styles.override]}`).
*   **Density-Independent Pixels (dp):** The default unit for dimensions in React Native, ensuring consistent sizing across various screen densities.

#### Hands-on activity
**Objective:** Create a simple user profile card component using `View`, `Text`, and `Image` with appropriate styling.

1.  Open your `App.js` file.
2.  Replace the existing content with the following code. This template sets up a basic structure for a profile card. Your task is to fill in the `Image` and `Text` components and apply the provided styles.

    ```jsx
    import React from 'react';
    import { StyleSheet, Text, View, Image } from 'react-native';

    export default function App() {
      const profileImageUrl = 'https://picsum.photos/id/237/200/200'; // A random dog image

      return (
        <View style={styles.container}>
          <View style={styles.profileCard}>
            {/* 1. Add an Image component here for the profile picture */}
            {/*    - Use the profileImageUrl for the source */}
            {/*    - Apply styles.profileImage */}
            <Image
              source={{ uri: profileImageUrl }}
              style={styles.profileImage}
            />

            {/* 2. Add a Text component for the user's name */}
            {/*    - Content: "Jane Doe" */}
            {/*    - Apply styles.userName */}
            <Text style={styles.userName}>Jane Doe</Text>

            {/* 3. Add a Text component for a short bio */}
            {/*    - Content: "Mobile Developer | React Native Enthusiast" */}
            {/*    - Apply styles.userBio */}
            <Text style={styles.userBio}>Mobile Developer | React Native Enthusiast</Text>

            {/* Challenge: Add another Text component below the bio for a location, e.g., "New York, USA" */}
            {/* Apply a new style for this text, perhaps smaller and lighter color */}
            <Text style={styles.userLocation}>New York, USA</Text>

          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#e0f7fa', // Light cyan background
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60, // Makes it circular
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#00bcd4', // Teal border
      },
      userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#263238', // Dark blue-gray
        marginBottom: 5,
      },
      userBio: {
        fontSize: 16,
        color: '#546e7a', // Medium blue-gray
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      userLocation: { // New style for the challenge
        fontSize: 14,
        color: '#78909c',
        marginTop: 5,
      },
    });
    ```
3.  Save the file and ensure your Expo development server is running (`npm start`).
4.  Observe the profile card on your device/simulator. Experiment with changing the `profileImageUrl` to another image, or adjusting the `borderRadius` of the image.

#### Assessment idea
1.  **Question:** A React Native `Image` component is configured to display a network image using `source={{ uri: 'https://example.com/image.jpg' }}`. However, when the app runs, the image does not appear, and there are no error messages. What is the most probable cause for this issue, and how would you resolve it?
    **Correct Answer:** The most probable cause is that the `width` and `height` properties were not explicitly defined in the `style` prop of the `Image` component. Unlike web browsers, React Native's `Image` component for network sources requires explicit dimensions to render.
    **Resolution:** Add `width` and `height` to the `style` prop, for example: `<Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 200, height: 150 }} />`.
2.  **Question:** You are designing a `Text` component for a user's name. You want the name to be large and bold, but if the name is too long, you want it to truncate with an ellipsis at the end after two lines. Provide the JSX and `StyleSheet` properties to achieve this, and explain the role of each property.
    **Correct Answer:**
    ```jsx
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
      const longName = "Johnathan Bartholomew Smith-Wickerson III";
      return (
        <View style={styles.container}>
          <Text style={styles.userName} numberOfLines={2} ellipsizeMode="tail">
            {longName}
          </Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      userName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        width: 200, // Give it a fixed width to demonstrate truncation
      },
    });
    ```
    **Explanation:**
    *   `fontSize: 28`: Sets the size of the text to 28 density-independent pixels, making it large.
    *   `fontWeight: 'bold'`: Makes the text bold.
    *   `numberOfLines={2}`: This prop limits the text to a maximum of two lines. If the text exceeds this, it will be truncated.
    *   `ellipsizeMode="tail"`: This prop specifies where the ellipsis (...) should appear if the text is truncated. `"tail"` means the ellipsis will appear at the end of the text. Other options include `"head"` (at the beginning) and `"middle"` (in the middle).
    *   `width: 200`: (Added for demonstration) A fixed width is often needed to force truncation for `numberOfLines` to take effect, as `Text` components naturally try to expand.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Guide learners step-by-step through building the profile card from the hands-on activity. Start with an empty `App.js` (or the previous chapter's output). First, add the main `View` container and `profileCard` styles. Then, introduce the `Image` component, demonstrating both local (briefly, as a concept) and network image usage with `profileImageUrl`. Emphasize the `width` and `height` requirement for network images. Next, add `Text` components for name and bio, applying `userName` and `userBio` styles. Demonstrate how `flexDirection: 'column'` (default for `View`) and `alignItems: 'center'` center the elements. As an interactive element, challenge learners to add a `borderWidth` and `borderColor` to the profile image, and then add the `userLocation` text with its new style. Use a split-screen view showing the code editor and the live simulator updates.
---

## Module 2: Mastering Component Interaction & State Management

This module dives into the heart of dynamic React Native applications: how components interact, respond to user input, and manage their internal data. You will learn to build interactive forms, handle complex application state, and efficiently share data across your component tree, moving beyond static displays to create truly responsive and engaging mobile experiences.

### Chapter 2.1 — Handling User Input with Text Inputs & Buttons

#### Learning objectives
*   Capture and manage text input from users using the `TextInput` component.
*   Implement interactive buttons using the `Button` component and custom touchables.
*   Manage local component state to store and display user input effectively.
*   Utilize `KeyboardAvoidingView` to ensure input fields remain visible when the keyboard appears.

#### Detailed lesson content
Building interactive mobile applications hinges on effectively capturing user input. Two fundamental components for this in React Native are `TextInput` for text entry and `Button` for triggering actions. The `TextInput` component is your gateway to allowing users to type information, whether it's a username, a search query, or a message. It's much like an `<input type="text">` element in web development, but specifically designed for mobile. To make `TextInput` useful, you'll primarily interact with its `onChangeText` prop, which is a function that gets called every time the text changes, and the `value` prop, which controls the displayed text. This pattern, where the component's value is controlled by React state, is known as a "controlled component" and is the recommended approach in React Native. For instance, to store a user's typed name, you would use React's `useState` hook to declare a state variable, say `[name, setName]`, and then bind `value={name}` and `onChangeText={setName}` to your `TextInput`.

Buttons, on the other hand, are for explicit actions. React Native provides a basic `Button` component which is simple to use with `title` and `onPress` props. The `onPress` prop takes a function that executes when the button is tapped. While `Button` is convenient, it offers limited styling capabilities. For more control over the appearance and behavior of your interactive elements, you'll often turn to "Touchable" components like `TouchableOpacity`, `TouchableHighlight`, or `TouchableWithoutFeedback`. These components wrap any other React Native component (like `Text` or `Image`) and make it respond to touches, providing visual feedback in the process. `TouchableOpacity` is a popular choice as it gently fades the wrapped content when pressed, offering a clear visual cue to the user. When implementing a button, remember to always provide feedback to the user, whether it's a visual change, a toast message, or navigating to a new screen. A common mistake is to forget to bind an `onPress` handler, leaving the button unresponsive.

Consider a practical scenario: building a simple login form. You'd likely have two `TextInput` components for username and password, and a `Button` to submit. Each `TextInput` would manage its own state using `useState`. For the password field, it's crucial to use the `secureTextEntry` prop on `TextInput` to obscure the input. When the submit button is pressed, the `onPress` handler would gather the current values from the username and password states and perform an action, such as logging them to the console or sending them to an authentication service. This is where your local component state becomes invaluable, holding the transient data that defines the current interaction.

One common challenge in mobile app development is dealing with the on-screen keyboard. When a user taps into a `TextInput`, the keyboard often slides up from the bottom, potentially obscuring the input field or other important UI elements. To mitigate this, React Native provides the `KeyboardAvoidingView` component. You wrap your content, especially your input fields, within `KeyboardAvoidingView`, and it automatically adjusts its position or padding to keep the active input field visible above the keyboard. It has a `behavior` prop, which can be `'padding'`, `'height'`, or `'position'`, and an `enabled` prop to toggle its functionality. Always test your forms on various device sizes and with the keyboard active to ensure a smooth user experience. Neglecting `KeyboardAvoidingView` can lead to frustrating usability issues for your users, making parts of your app inaccessible.

```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Attempting login with:', { username, password });
    // In a real app, you'd send this to an authentication API
    alert(`Logging in as ${username}...`);
    setUsername('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Submit Login" onPress={handleLogin} color="#007AFF" />

        <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => alert('Forgot password pressed!')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;
```

#### Key concepts
*   **`TextInput`**: A core component for allowing users to enter text, configurable with props like `onChangeText`, `value`, `placeholder`, and `secureTextEntry`.
*   **`Button`**: A basic component for triggering actions, providing a simple `title` and `onPress` prop.
*   **`TouchableOpacity`**: A highly customizable component that wraps other elements to make them touchable, providing visual feedback (opacity change) on press.
*   **`useState` Hook**: A React hook used to add state to functional components, allowing components to manage and update their internal data.
*   **Controlled Component**: An input form element whose value is controlled by React state, ensuring the state is always the single source of truth for the input's value.
*   **`KeyboardAvoidingView`**: A component used to automatically adjust the position of content to prevent the on-screen keyboard from obscuring input fields.

#### Hands-on activity
**Build a Simple Task Creator**

Create a new React Native component called `TaskCreator`. This component should:
1.  Display a `TextInput` where the user can type a new task.
2.  Have a `Button` (or `TouchableOpacity` wrapping `Text`) labeled "Add Task".
3.  When the "Add Task" button is pressed, take the current text from the `TextInput` and log it to the console, then clear the `TextInput`.
4.  Ensure the `TextInput` is always visible, even when the keyboard is active, using `KeyboardAvoidingView`.

**Code Template:**
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

const TaskCreator = () => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim().length > 0) {
      console.log('New Task Added:', taskText);
      // In a real app, you'd add this to a list of tasks
      setTaskText(''); // Clear the input after adding
    } else {
      alert('Task cannot be empty!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Create New Task</Text>
        {/* Your TextInput and Button go here */}
        {/* Remember to manage taskText state with TextInput */}
        {/* And call handleAddTask on button press */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00796b',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#00bcd4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  button: {
    width: '90%',
    backgroundColor: '#00bcd4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskCreator;
```

#### Assessment idea
1.  **Question:** You're building a registration form in React Native. You have a `TextInput` for the user's email address. Which two props are essential for making this `TextInput` a "controlled component" that stores the email in a `useState` hook and updates it as the user types?
    *   A) `placeholder` and `keyboardType`
    *   B) `value` and `onChangeText`
    *   C) `onFocus` and `onBlur`
    *   D) `maxLength` and `autoCapitalize`

    **Correct Answer:** B) `value` and `onChangeText`
    **Explanation:** The `value` prop sets the current text displayed in the `TextInput`, and `onChangeText` is a callback function that receives the new text as an argument whenever the user types. By binding `value` to a state variable and `onChangeText` to the state's setter function (e.g., `setEmail`), you create a controlled component where React state is the single source of truth for the input's value.

2.  **Question:** Your React Native screen has a `TextInput` at the very bottom, and when the user taps it, the on-screen keyboard covers the input field. What is the most appropriate component to use to automatically adjust the layout and keep the `TextInput` visible?
    *   A) `ScrollView`
    *   B) `View` with `flex: 1`
    *   C) `KeyboardAvoidingView`
    *   D) `SafeAreaView`

    **Correct Answer:** C) `KeyboardAvoidingView`
    **Explanation:** `KeyboardAvoidingView` is specifically designed for this exact problem. It automatically repositions its children to avoid being obscured by the on-screen keyboard. While `ScrollView` could allow scrolling, it doesn't automatically adjust based on keyboard presence, and `View` or `SafeAreaView` do not offer this specific keyboard-avoidance functionality.

#### AI generation note
Create a 12-minute live coding video demonstrating the `LoginScreen` example. Start with a blank Expo project. First, implement two `TextInput` components for username and password, showing how `useState` manages their values and `secureTextEntry` works. Then add a `Button` and a `TouchableOpacity` for "Forgot Password", explaining the difference. Finally, integrate `KeyboardAvoidingView` and demonstrate its effect by bringing up the keyboard, showing how the inputs stay visible. Use a split-screen view with code on the left and an Expo Go simulator on the right. Conclude with a 2-question interactive mini-quiz on `TextInput` props and `KeyboardAvoidingView` usage.

### Chapter 2.2 — Advanced State Management with `useState` and `useReducer`

#### Learning objectives
*   Effectively manage multiple independent and related state variables using the `useState` hook.
*   Understand the purpose and benefits of the `useReducer` hook for complex state logic.
*   Implement state management using `useReducer`, including the `reducer` function, `initialState`, and `dispatch` actions.
*   Determine when to choose `useState` versus `useReducer` based on the complexity of state transitions.

#### Detailed lesson content
As your React Native applications grow, you'll inevitably encounter scenarios where managing component state becomes more intricate than a single counter or a simple text input. While `useState` is incredibly versatile, managing many independent state variables can sometimes lead to verbose code or make it harder to reason about related pieces of state. For instance, if you have a form with five different input fields, you could declare five separate `useState` calls: `[firstName, setFirstName]`, `[lastName, setLastName]`, `[email, setEmail]`, and so on. This is perfectly valid for independent pieces of state. However, if these pieces of state are logically related, such as fields within a single user profile object, it might be more organized to manage them as a single state object: `const [userProfile, setUserProfile] = useState({ firstName: '', lastName: '', email: '' });`. When updating such an object, remember the immutability principle: always create a *new* object with the updated properties, rather than directly modifying the existing state object. For example, `setUserProfile(prevProfile => ({ ...prevProfile, firstName: 'Jane' }));`.

When state logic becomes genuinely complex, involving multiple interdependent sub-states, or when state transitions depend on the previous state in a non-trivial way, the `useReducer` hook often provides a cleaner and more predictable solution. Think of `useReducer` as an alternative to `useState` for more sophisticated state management, inspired by the Redux pattern. It's particularly useful when you have complex state logic that involves multiple sub-values, or when the next state depends on the previous one, and you want to centralize the state update logic outside of your component. The `useReducer` hook takes two arguments: a `reducer` function and an `initialState`. It returns the current `state` and a `dispatch` function.

The `reducer` function is the core of `useReducer`. It's a pure function that takes two arguments: the current `state` and an `action` object. Its responsibility is to return the *new* state based on the `action` it receives. The `action` object typically has a `type` property (a string describing the action, like `'INCREMENT'`, `'ADD_ITEM'`, or `'UPDATE_FIELD'`) and often a `payload` property containing any data needed for the update. For example, an `action` to add an item to a shopping cart might look like `{ type: 'ADD_ITEM', payload: { id: 'p1', name: 'Product A', quantity: 1 } }`. Inside the `reducer`, you'd use a `switch` statement on `action.type` to handle different state transitions. It's crucial that the `reducer` function is pure: it should not perform side effects (like API calls) and should always return a *new* state object, never mutate the original `state` directly. Mutating state directly is a common mistake that leads to unpredictable behavior and makes debugging difficult because React won't detect a state change and won't re-render.

Let's consider a shopping cart scenario. With `useState`, you might have `[items, setItems]` for the list of products, `[totalPrice, setTotalPrice]` for the sum, and `[discount, setDiscount]` for applied promotions. Each update would require multiple `set` calls. With `useReducer`, you could have a single `cartState` object `{ items: [], totalPrice: 0, discount: 0 }`. Actions like `'ADD_ITEM'`, `'REMOVE_ITEM'`, `'APPLY_DISCOUNT'` would be dispatched, and the `reducer` would handle all the necessary calculations (updating `items`, recalculating `totalPrice`, etc.) in one centralized place. This makes the state logic more testable and easier to understand.

When deciding between `useState` and `useReducer`, ask yourself: Is the state simple (e.g., a boolean, a string, a number) and updated independently? Use `useState`. Is the state complex, involving multiple related values, and are the updates dependent on the previous state or involve complex logic? `useReducer` is likely a better fit. `useReducer` also shines when you need to optimize performance for components that trigger many re-renders, as `dispatch` calls are stable across re-renders and can be passed down without causing child components to re-render unnecessarily if they use `React.memo`.

```javascript
import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// 1. Define the initial state for our shopping cart
const initialCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// 2. Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      let updatedItems;
      if (existingItemIndex > -1) {
        // Item already exists, increase quantity
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // New item, add with quantity 1
        updatedItems = [...state.items, { ...newItem, quantity: 1 }];
      }

      const newTotalPrice = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const newTotalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    }
    case 'REMOVE_ITEM': {
      const itemIdToRemove = action.payload.id;
      const itemToRemove = state.items.find(item => item.id === itemIdToRemove);

      if (!itemToRemove) return state; // Item not found

      let updatedItems;
      if (itemToRemove.quantity > 1) {
        // Decrease quantity if more than 1
        updatedItems = state.items.map(item =>
          item.id === itemIdToRemove
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove item completely if quantity is 1
        updatedItems = state.items.filter(item => item.id !== itemIdToRemove);
      }

      const newTotalPrice = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const newTotalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    }
    case 'CLEAR_CART':
      return initialCartState;
    default:
      return state;
  }
};

const products = [
  { id: 'p1', name: 'React Native T-Shirt', price: 25.99 },
  { id: 'p2', name: 'Expo Mug', price: 12.50 },
  { id: 'p3', name: 'Cohortia Sticker Pack', price: 5.00 },
];

const ShoppingCart = () => {
  // 3. Use useReducer hook
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name} (x{item.quantity})</Text>
      <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })} style={styles.removeItemButton}>
        <Text style={styles.removeItemButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Products</Text>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          <Button
            title="Add to Cart"
            onPress={() => dispatch({ type: 'ADD_ITEM', payload: product })}
            color="#28a745"
          />
        </View>
      ))}

      <Text style={styles.header}>Your Cart ({cartState.totalItems} items)</Text>
      {cartState.items.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartState.items}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          style={styles.cartList}
        />
      )}

      <View style={styles.cartSummary}>
        <Text style={styles.totalText}>Total: ${cartState.totalPrice.toFixed(2)}</Text>
        <Button title="Clear Cart" onPress={() => dispatch({ type: 'CLEAR_CART' })} color="#dc3545" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#343a40',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    flex: 1,
    color: '#495057',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#6c757d',
  },
  cartList: {
    maxHeight: 200, // Limit height for cart display
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    flex: 1,
    color: '#343a40',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#495057',
  },
  removeItemButton: {
    backgroundColor: '#dc3545',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeItemButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontStyle: 'italic',
    color: '#6c757d',
    marginTop: 10,
  },
  cartSummary: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    paddingTop: 15,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
});

export default ShoppingCart;
```

#### Key concepts
*   **`useState` for Multiple States**: Using multiple calls to `useState` for independent state variables, or a single `useState` call with an object for related state.
*   **Immutable Updates**: The principle of always returning a new state object or array when updating state, rather than directly modifying the existing one, to ensure React detects changes and re-renders correctly.
*   **`useReducer` Hook**: A React hook for managing complex state logic, especially when state transitions involve multiple sub-values or depend on the previous state.
*   **`reducer` Function**: A pure function that takes the current state and an action object, then returns the new state. It should never mutate the original state.
*   **`action` Object**: An object dispatched to the `reducer`, typically containing a `type` property (a string describing the action) and an optional `payload` with data.
*   **`dispatch` Function**: A function returned by `useReducer` that you call with an `action` object to trigger a state update.

#### Hands-on activity
**Refactor a Simple Counter to use `useReducer`**

You previously built a simple counter using `useState`. Now, refactor it to use `useReducer`. The counter should have buttons to increment, decrement, and reset.

**Code Template:**
```javascript
import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// 1. Define the initial state
const initialCounterState = { count: 0 };

// 2. Define the reducer function
// It takes the current state and an action, and returns the new state.
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // Return a new state object, do not mutate the original
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return initialCounterState; // Reset to initial state
    default:
      return state; // Always return current state for unknown actions
  }
};

const CounterWithReducer = () => {
  // 3. Use the useReducer hook
  // `state` is the current state, `dispatch` is the function to send actions
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {state.count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
        <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} color="orange" />
        <Button title="Reset" onPress={() => dispatch({ type: 'RESET' })} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  countText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default CounterWithReducer;
```
Your task is to complete the `counterReducer` logic for `DECREMENT` and `RESET` actions and ensure the buttons correctly `dispatch` these actions.

#### Assessment idea
1.  **Question:** You are building a complex form with multiple fields (name, email, address, phone, etc.) and several validation rules. Some fields depend on others (e.g., if "country" is "USA", "state" field becomes required). Which React hook would generally be a more suitable choice for managing the state of this form, and why?
    *   A) `useState`, because it's simpler and sufficient for any number of state variables.
    *   B) `useReducer`, because it centralizes complex state logic and transitions, making it easier to manage interdependent fields and validation.
    *   C) `useState`, but only if you combine all fields into a single state object.
    *   D) `useReducer`, but only if you avoid using `action.payload`.

    **Correct Answer:** B) `useReducer`, because it centralizes complex state logic and transitions, making it easier to manage interdependent fields and validation.
    **Explanation:** While `useState` can manage multiple fields, `useReducer` excels in scenarios with complex state logic, multiple related state transitions, and dependencies between state variables. Its `reducer` function provides a clear, centralized place to define how different actions affect the entire form state, including validation logic that might span multiple fields.

2.  **Question:** In a `useReducer` implementation, what is the primary rule for updating the state within the `reducer` function?
    *   A) You must directly modify properties of the `state` object and then return it.
    *   B) You must always return a completely new object or array that represents the next state, without mutating the original `state` object.
    *   C) You can mutate the `state` object, but only if you immediately call `dispatch` again.
    *   D) The `reducer` function should perform side effects like API calls before returning the state.

    **Correct Answer:** B) You must always return a completely new object or array that represents the next state, without mutating the original `state` object.
    **Explanation:** The `reducer` function must be a pure function. This means it should not have side effects and, crucially, it must never mutate the original `state` object. Instead, it should create and return a *new* state object (or array) with the desired changes. This immutability is fundamental to how React detects state changes and optimizes re-renders, preventing subtle bugs and making state predictable.

#### AI generation note
Create a 15-minute mixed-media lesson. Begin with animated diagrams illustrating the flow of `state`, `action`, and `dispatch` in `useReducer`. Then, transition to a live coding session demonstrating the `ShoppingCart` example. Show the initial `useState` approach for simple items, then refactor it to `useReducer`, highlighting the benefits for managing item quantities, total price, and adding/removing items. Include a side-by-side comparison of how a similar logic would look with `useState` vs `useReducer`. Emphasize immutable updates. Use a split-screen view for code and Expo Go simulator. Conclude with a reflection prompt asking learners to identify a scenario in their own projects where `useReducer` would be beneficial.

### Chapter 2.3 — Prop Drilling vs. Context API

#### Learning objectives
*   Identify and understand the problems associated with "prop drilling" in React Native applications.
*   Explain how the React Context API provides a solution for sharing state across the component tree without prop drilling.
*   Implement the Context API using `createContext`, `Context.Provider`, and the `useContext` hook.
*   Make informed decisions about when to use the Context API versus local component state or prop passing.

#### Detailed lesson content
As your React Native application grows in complexity, you'll inevitably encounter a pattern known as "prop drilling." This occurs when you need to pass data from a parent component to a deeply nested child component, but the intermediate components in the tree don't actually need that data themselves. They simply act as conduits, "drilling" the props down through multiple layers. Imagine a scenario where your `App` component holds a `userTheme` (e.g., 'light' or 'dark') and a deeply nested `UserProfileCard` component needs to know this theme to style itself. If `UserProfileCard` is several levels down (e.g., `App -> HomeScreen -> SettingsScreen -> UserProfileCard`), you'd have to pass `userTheme` as a prop from `App` to `HomeScreen`, then `HomeScreen` to `SettingsScreen`, and finally `SettingsScreen` to `UserProfileCard`.

Prop drilling, while functional, introduces several drawbacks. First, it significantly reduces code readability and maintainability. Components become cluttered with props they don't directly use, making it harder to understand a component's true responsibilities. Second, it impairs component reusability. If you want to reuse an intermediate component (like `SettingsScreen`) in a different part of your app where the `userTheme` isn't available or needed, you either have to refactor it or pass dummy props, which is cumbersome. Third, it can lead to unnecessary re-renders. If any intermediate component re-renders, it might cause its children to re-render even if their relevant props haven't changed, potentially impacting performance in very large component trees.

The React Context API offers an elegant solution to prop drilling by providing a way to share values like state, functions, or themes across the component tree without explicitly passing props at every level. It's designed for "global" data that many components might need, such as the current authenticated user, theme preferences, or language settings. The Context API consists of three main parts:
1.  **`React.createContext()`**: This function creates a Context object. When creating it, you can provide a default value, which is used if a component tries to consume the context without a matching Provider above it in the tree.
2.  **`Context.Provider`**: This component is placed higher up in your component tree. It accepts a `value` prop, which is the data you want to make available to all its descendants. All components nested within this `Provider` (regardless of how deep) can access this `value`.
3.  **`useContext` Hook**: This hook is used in a functional component to consume the value provided by the nearest `Context.Provider` above it. You pass the Context object (created by `createContext`) to `useContext`, and it returns the current context `value`.

Let's illustrate with a theme switcher. You would create a `ThemeContext` using `createContext`. Then, at the top level of your application (e.g., in `App.js`), you would wrap your main component tree with `<ThemeContext.Provider value={currentTheme}>`. Inside this `Provider`, you might have a button to toggle `currentTheme` between 'light' and 'dark'. Any component, no matter how deeply nested, can then call `const theme = useContext(ThemeContext);` to get the `currentTheme` value and apply appropriate styles. This completely bypasses the need to pass `theme` as a prop through intermediate components.

A common practice is to create a custom Context Provider component to encapsulate the state management logic related to the context. For example, a `ThemeProvider` component could manage the `currentTheme` state internally using `useState` and then provide both the `currentTheme` and a `toggleTheme` function through the `ThemeContext.Provider`. This makes the context reusable and keeps your main `App` component cleaner.

While powerful, the Context API is not a replacement for all state management. It's best suited for data that is considered "global" or "application-wide" within a specific subtree. For frequently changing state or localized component state, `useState` or `useReducer` within the component itself (or passed as props to immediate children) is often more appropriate and performant. Overusing Context for every piece of state can lead to performance issues, as a change in the `Provider`'s `value` will cause *all* consuming components to re-render, even if they only use a small part of the provided value. Always consider the scope and update frequency of your data before deciding on a state management strategy.

```javascript
import React, { createContext, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

// 1. Create a Context object
const ThemeContext = createContext({
  theme: 'light', // Default theme
  toggleTheme: () => {}, // Default empty function
});

// 2. Create a custom Provider component
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    backgroundColor: currentTheme === 'light' ? '#f0f2f5' : '#333',
    color: currentTheme === 'light' ? '#333' : '#f0f2f5',
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Components that consume the context
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.toggleContainer}>
      <Text style={[styles.toggleText, { color: theme === 'light' ? '#333' : '#f0f2f5' }]}>
        Current Theme: {theme.toUpperCase()}
      </Text>
      <Switch
        onValueChange={toggleTheme}
        value={theme === 'dark'}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

const DeeplyNestedComponent = () => {
  const { theme, themeStyles } = useContext(ThemeContext);
  return (
    <View style={[styles.nestedCard, { backgroundColor: themeStyles.backgroundColor }]}>
      <Text style={[styles.nestedText, { color: themeStyles.color }]}>
        I'm a deeply nested component!
      </Text>
      <Text style={[styles.nestedSubText, { color: themeStyles.color }]}>
        My background is {theme} mode.
      </Text>
    </View>
  );
};

const ContextDemoApp = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { themeStyles } = useContext(ThemeContext); // Access themeStyles here too

  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.header, themeStyles]}>React Native Context API Demo</Text>
      <ThemeToggleButton />
      <View style={styles.middleSection}>
        <DeeplyNestedComponent />
      </View>
      <Text style={[styles.footer, themeStyles]}>
        This footer also respects the {themeStyles.color === '#333' ? 'light' : 'dark'} theme.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute content
    paddingVertical: 50, // Add vertical padding
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toggleText: {
    fontSize: 18,
    marginRight: 15,
    fontWeight: '600',
  },
  middleSection: {
    flex: 1, // Allow middle section to take available space
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  nestedCard: {
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    minHeight: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
  nestedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  nestedSubText: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    fontStyle: 'italic',
  }
});

export default ContextDemoApp;
```

#### Key concepts
*   **Prop Drilling**: The practice of passing data from a parent component down through multiple layers of intermediate components that don't need the data themselves, just to reach a deeply nested child.
*   **React Context API**: A built-in React feature that provides a way to pass data through the component tree without having to pass props down manually at every level.
*   **`createContext`**: A function used to create a Context object, which can hold a default value.
*   **`Context.Provider`**: A component that wraps a part of the component tree and makes the `value` prop available to all its descendants.
*   **`useContext` Hook**: A React hook used within functional components to subscribe to a Context object and read its current value.
*   **Global State Management**: Managing data that needs to be accessible by many components across different parts of the application, often handled by Context API for medium-scale needs.

#### Hands-on activity
**Implement a User Authentication Context**

Create a simple authentication context that can store a user's logged-in status and their username.
1.  Define an `AuthContext` using `createContext`.
2.  Create an `AuthProvider` component that manages `isLoggedIn` (boolean) and `username` (string) states using `useState`. This provider should also expose `login` and `logout` functions.
3.  Wrap your main `App` component with `AuthProvider`.
4.  Create a `LoginScreen` component that uses `useContext` to access `login` and `isLoggedIn`. It should display a `TextInput` for username and a button to "Login". If `isLoggedIn` is true, it should show a "Logout" button that calls `logout`.
5.  Create a `UserProfile` component that uses `useContext` to display the `username` if `isLoggedIn` is true.

**Code Template:**
```javascript
import React, { createContext, useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

// 1. Create AuthContext
const AuthContext = createContext({
  isLoggedIn: false,
  username: null,
  login: (name) => {},
  logout: () => {},
});

// 2. Create AuthProvider component
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const login = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername(null);
    setIsLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn,
    username,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. LoginScreen component (to be completed)
const LoginScreen = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [inputUsername, setInputUsername] = useState('');

  const handleLogin = () => {
    if (inputUsername.trim().length > 0) {
      login(inputUsername);
      setInputUsername('');
    } else {
      alert('Please enter a username!');
    }
  };

  return (
    <View style={styles.authContainer}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.loggedInText}>Welcome, {inputUsername || 'User'}!</Text>
          <Button title="Logout" onPress={logout} color="red" />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={inputUsername}
            onChangeText={setInputUsername}
            autoCapitalize="none"
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

// 4. UserProfile component (to be completed)
const UserProfile = () => {
  const { isLoggedIn, username } = useContext(AuthContext);

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileHeader}>User Profile</Text>
      {isLoggedIn ? (
        <Text style={styles.profileText}>Logged in as: {username}</Text>
      ) : (
        <Text style={styles.profileText}>Please log in to view profile.</Text>
      )}
    </View>
  );
};

// Main App component to bring it all together
const AuthDemoApp = () => {
  return (
    <AuthProvider>
      <View style={styles.appContainer}>
        <Text style={styles.appTitle}>Authentication Demo</Text>
        <LoginScreen />
        <UserProfile />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  authContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loggedInText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#28a745',
  },
  profileContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  profileHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00796b',
  },
  profileText: {
    fontSize: 18,
    color: '#333',
  },
});

export default AuthDemoApp;
```
Your task is to ensure the `LoginScreen` and `UserProfile` components correctly use `useContext` to display the authentication status and username, and that the login/logout buttons function as expected.

#### Assessment idea
1.  **Question:** You have an application where the user's preferred language (`'en'`, `'es'`, `'fr'`) needs to be accessible by nearly every component in the application, including deeply nested ones. You currently pass the `language` prop down through 5-6 layers of components. What problem are you encountering, and what is the most appropriate React Native solution?
    *   A) You are encountering a "state mutation" problem; the solution is to use `useReducer`.
    *   B) You are encountering "prop drilling"; the solution is to use the React Context API.
    *   C) You are encountering a "component reusability" issue; the solution is to use `FlatList`.
    *   D) You are encountering "performance bottlenecks"; the solution is to use `React.memo`.

    **Correct Answer:** B) You are encountering "prop drilling"; the solution is to use the React Context API.
    **Explanation:** Passing a prop through many intermediate components that don't directly use it is the definition of prop drilling. The React Context API is specifically designed to solve this by providing a way to share data like language preferences across the component tree without explicit prop passing at every level.

2.  **Question:** Consider the following code snippet for creating and consuming a context:
    ```javascript
    // App.js
    const MyContext = createContext('default');

    const ParentComponent = () => {
      const value = 'Hello from Context!';
      return (
        <MyContext.Provider value={value}>
          <ChildComponent />
        </MyContext.Provider>
      );
    };

    // ChildComponent.js
    const ChildComponent = () => {
      // How would you access the 'value' from MyContext here?
      // ...
      return <Text>{contextValue}</Text>;
    };
    ```
    Which line of code correctly accesses the `value` from `MyContext` within `ChildComponent`?
    *   A) `const contextValue = MyContext.value;`
    *   B) `const contextValue = useContext(MyContext);`
    *   C) `const contextValue = this.context;`
    *   D) `const contextValue = getContext(MyContext);`

    **Correct Answer:** B) `const contextValue = useContext(MyContext);`
    **Explanation:** For functional components, the `useContext` hook is the standard way to consume a context. You pass the Context object (created by `createContext`) to `useContext`, and it returns the current value provided by the nearest `Context.Provider` above it in the component tree.

#### AI generation note
Create a 15-minute interactive video lesson. Start with an animated component tree diagram visually demonstrating "prop drilling" with a `theme` prop being passed through multiple layers. Highlight the complexity it introduces. Then, introduce the Context API as a solution, showing how `createContext`, `Context.Provider`, and `useContext` work together. Live code the `ContextDemoApp` example, building the `ThemeProvider`, `ThemeToggleButton`, and `DeeplyNestedComponent` step-by-step, showing the immediate visual changes in the Expo Go simulator as the theme toggles. Use visual overlays to trace the data flow with and without Context. Include an interactive coding exercise where learners fill in the missing `useContext` calls in a provided component.
---

## Module 3: Handling User Input, Lists, and Styling

**Module Goal:** By the end of this module, you will be able to build interactive React Native applications that capture user input, display dynamic data efficiently, and apply sophisticated styling techniques to create visually appealing and responsive user interfaces across different platforms.

### Chapter 3.1 — Capturing User Input with `TextInput` and Buttons

#### Learning objectives
*   Understand the purpose and essential props of the `TextInput` component for capturing various types of user input.
*   Implement state management using `useState` to control and react to changes in `TextInput` values.
*   Utilize the `Button` component to trigger actions and handle user interactions.
*   Develop basic form handling logic, including input validation and submission.
*   Identify and avoid common pitfalls when working with user input components.

#### Detailed lesson content
Building interactive mobile applications fundamentally relies on the ability to capture information from the user. In React Native, the primary component for text-based input is `TextInput`. This versatile component allows users to type text, numbers, and other data into your application. At its core, `TextInput` is a controlled component, meaning its value is managed by React state. You'll typically bind its `value` prop to a state variable and update that state whenever the text changes using the `onChangeText` prop. For instance, if you have a state variable `username` and a setter `setUsername`, your `TextInput` would look something like `<TextInput value={username} onChangeText={setUsername} />`. This pattern ensures that your component always reflects the current state and that state updates are handled predictably.

`TextInput` offers a rich set of props to customize its behavior and appearance. For example, `placeholder` provides a hint to the user about what to type, `keyboardType` optimizes the on-screen keyboard for specific input types (like `'numeric'`, `'email-address'`, or `'url'`), and `secureTextEntry` masks the input for sensitive data like passwords. You can also control whether the input can span multiple lines using `multiline` and set a `maxLength` to limit input length. It's crucial to select the appropriate `keyboardType` to enhance user experience and prevent input errors. Imagine asking for a phone number and presenting a full QWERTY keyboard instead of a numeric one – that's a common friction point you can easily avoid.

Beyond text input, users often need to trigger actions, and for this, React Native provides the `Button` component. While simple, `Button` is highly effective for basic interactions. Its essential props are `title`, which sets the text displayed on the button, and `onPress`, which takes a function to be executed when the button is tapped. For more complex or custom-styled buttons, you'll often wrap a `Text` component inside a `TouchableOpacity` or `Pressable` component, which offer greater flexibility in styling and interaction feedback. However, for straightforward actions, `Button` is a quick and easy solution.

Let's consider a practical scenario: building a simple "Add Item" form. You'd have a `TextInput` for the item's name and a `Button` to add it to a list. When the user types, the `TextInput`'s `onChangeText` handler updates a state variable. When they tap the button, the `onPress` handler would take the current value from the state, perform any necessary validation (e.g., checking if the input is empty), and then add the item to an array, perhaps stored in another state variable representing the list. A common mistake here is forgetting to clear the `TextInput` after submission; you can achieve this by updating the `TextInput`'s `value` state back to an empty string within your `onPress` handler. Another pitfall is not handling edge cases like empty input. Always consider how your application should behave when the user provides invalid or no input. For instance, you might disable the button until there's valid input or show an error message. Remember, good user experience anticipates user behavior, both ideal and less-than-ideal.

```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const AddItemForm = () => {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (itemText.trim().length === 0) {
      Alert.alert('Invalid Input', 'Please enter an item name.', [{ text: 'Okay' }]);
      return;
    }
    setItems(currentItems => [...currentItems, { id: Math.random().toString(), value: itemText }]);
    setItemText(''); // Clear input after adding
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter new item..."
        onChangeText={setItemText}
        value={itemText}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={true}
      />
      <Button title="Add Item" onPress={handleAddItem} color="#841584" />
      <View style={styles.itemList}>
        {items.map(item => (
          <Text key={item.id} style={styles.item}>
            {item.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  itemList: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddItemForm;
```
In the example above, notice how `itemText` from `useState` is both the `value` prop and updated by `onChangeText`. This creates a controlled component. The `handleAddItem` function performs basic validation and then adds the new item to the `items` array, demonstrating a common pattern for managing lists of user-generated content. Safety note: When dealing with user input, always be mindful of potential security vulnerabilities, especially if you're sending this data to a backend. While client-side validation (like checking for empty strings) is good for UX, server-side validation is critical for security.

#### Key concepts
*   **`TextInput`**: A core React Native component for capturing text-based user input.
*   **Controlled Component**: A component whose form data is handled by React state, meaning its value is set by a state variable and updated via an `onChange` handler.
*   **`value` prop**: The current text value of the `TextInput`, typically bound to a state variable.
*   **`onChangeText` prop**: A callback function that is invoked when the text in the `TextInput` changes, receiving the new text as an argument.
*   **`Button`**: A basic component for rendering a clickable button with a title and an `onPress` handler.
*   **`onPress` prop**: A callback function executed when the `Button` is tapped.
*   **`keyboardType`**: A `TextInput` prop that suggests which type of on-screen keyboard to display (e.g., `'numeric'`, `'email-address'`).

#### Hands-on activity
**Build a Simple Login Form**

Create a new React Native component called `LoginForm`. This component should include:
1.  Two `TextInput` components: one for "Username" and one for "Password".
2.  The "Password" `TextInput` should use `secureTextEntry`.
3.  A `Button` with the title "Login".
4.  Use `useState` hooks to manage the username and password input values.
5.  When the "Login" button is pressed, display an `Alert` showing the entered username and password (e.g., "Logging in with Username: [username], Password: [password]").
6.  Ensure the input fields clear after the alert is dismissed.

**Starter Code:**
```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const LoginForm = () => {
  // Your state variables here
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    Alert.alert(
      'Login Attempt',
      `Username: ${username}\nPassword: ${password}`,
      [{ text: 'OK', onPress: () => {
        setUsername('');
        setPassword('');
      }}]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Your TextInput components */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* Your Button component */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default LoginForm;
```

#### Assessment idea
1.  **Question:** You are building a `TextInput` for an email address. Which `keyboardType` prop would you use to provide the most user-friendly experience, and why?
    *   **Correct Answer:** You should use `keyboardType="email-address"`. This `keyboardType` specifically optimizes the on-screen keyboard by including the "@" symbol and a period ('.') directly on the main keyboard layout, making it faster and easier for users to type email addresses without switching keyboard modes.
2.  **Question:** Explain the concept of a "controlled component" in the context of a React Native `TextInput`. What are the two essential props you need to manage its state effectively?
    *   **Correct Answer:** A controlled component is a form input element whose value is entirely managed by React state. Instead of the DOM handling its own state, React becomes the "single source of truth." For a `TextInput`, the two essential props are `value` and `onChangeText`. The `value` prop binds the `TextInput`'s displayed text to a state variable, and the `onChangeText` prop is a callback function that updates that state variable whenever the user types, thus keeping React's state synchronized with the input field.

#### AI generation note
Create a 12-minute interactive code demo video. Begin by demonstrating a basic `TextInput` and `Button` with no state management, showing how input isn't captured. Then, refactor live to introduce `useState` for both `TextInput` value and `onChangeText`, and for the `Button`'s `onPress` handler. Show different `keyboardType` options (numeric, email-address) and `secureTextEntry` in action. Use a split-screen view with code on the left and a live Expo simulator on the right. Include a brief segment on common mistakes like forgetting to clear input or validate, showing how to fix them. Conclude with a mini-quiz asking about `TextInput` props.

### Chapter 3.2 — Displaying Dynamic Data with `ScrollView` and `FlatList`

#### Learning objectives
*   Differentiate between `ScrollView` and `FlatList` components and understand their respective use cases.
*   Implement `ScrollView` for displaying a small, static number of items that may exceed screen height.
*   Utilize `FlatList` to efficiently render long lists of dynamic data, understanding its performance benefits.
*   Correctly configure `FlatList` using `data`, `renderItem`, and `keyExtractor` props.
*   Identify and debug common performance issues related to list rendering in React Native.

#### Detailed lesson content
Displaying lists of data is a fundamental requirement for almost any mobile application, whether it's a list of messages, products, or user profiles. React Native provides two primary components for this purpose: `ScrollView` and `FlatList`. Understanding when to use each is crucial for both performance and user experience.

The `ScrollView` component is essentially a container that allows its content to be scrolled if it exceeds the height of the screen. Think of it like a web page where you can scroll down to see more content. It's straightforward to use: you simply wrap your content inside a `ScrollView`, and it becomes scrollable. However, `ScrollView` renders *all* of its children at once, regardless of whether they are currently visible on the screen. For a small number of items, this is perfectly fine. If you have a static "About Us" page with a lot of text, or a form with many input fields that might extend beyond the screen, `ScrollView` is the ideal choice. It's simple, requires minimal configuration, and works well for content that doesn't change frequently or grow indefinitely. A common mistake is using `ScrollView` for very long lists, which can lead to significant performance issues as the number of items grows, consuming excessive memory and causing UI lag.

For dynamic, potentially very long lists, `FlatList` is the go-to component. `FlatList` is designed for efficiency. Instead of rendering all items at once, it only renders the items currently visible on the screen, plus a small buffer of items just above and below the visible area. As the user scrolls, `FlatList` intelligently "recycles" components, rendering new items into existing component slots rather than creating new ones from scratch. This technique, known as "virtualization," dramatically reduces memory consumption and improves rendering performance, making it suitable for lists with hundreds or even thousands of items.

To use `FlatList`, you need to provide three essential props:
1.  **`data`**: An array of data items that `FlatList` will render. Each item in this array will correspond to a row in your list.
2.  **`renderItem`**: A function that takes an object with an `item` property (representing a single data item from your `data` array) and returns a React component to render for that item. This is where you define the structure and content of each list row.
3.  **`keyExtractor`**: A function that takes a data item and its index, and returns a unique string identifier for that item. This key is crucial for React to efficiently track items, especially when they are added, removed, or reordered. Without a proper `keyExtractor`, React Native will issue warnings about missing keys, and list performance can degrade significantly. It's best practice to use a stable, unique ID from your data (e.g., `item.id`). If your data doesn't have unique IDs, you can fall back to using the item's index, but be aware that this can cause issues if your list items are reordered.

Let's illustrate with an example of a task list:

```javascript
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const initialTasks = [
  { id: '1', text: 'Learn React Native basics' },
  { id: '2', text: 'Set up development environment' },
  { id: '3', text: 'Build a simple component' },
  { id: '4', text: 'Understand state management' },
  { id: '5', text: 'Explore styling options' },
  { id: '6', text: 'Implement user input' },
  { id: '7', text: 'Display data in a list' },
  { id: '8', text: 'Add navigation between screens' },
  { id: '9', text: 'Connect to an API' },
  { id: '10', text: 'Deploy the app to Expo' },
  // Imagine many more tasks here...
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        // Optional: Add other props for customization
        // ListHeaderComponent={() => <Text style={styles.listHeader}>Upcoming</Text>}
        // ListEmptyComponent={() => <Text style={styles.emptyList}>No tasks found!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  taskText: {
    fontSize: 18,
    color: '#555',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  },
});

export default TaskList;
```
In this `TaskList` example, `FlatList` efficiently displays a potentially long list of tasks. Each task object has a unique `id`, which is used by `keyExtractor`. The `renderTaskItem` function defines how each individual task is rendered. `FlatList` also offers other useful props like `ListHeaderComponent`, `ListFooterComponent`, and `ListEmptyComponent` for adding content before, after, or when the list is empty, respectively. `onRefresh` and `refreshing` props enable pull-to-refresh functionality, common in many mobile apps.

A brief mention about `SectionList`: If your data is grouped into distinct sections (e.g., "Today's Tasks", "Tomorrow's Tasks"), `SectionList` is an extension of `FlatList` that allows you to render headers for each section, providing a more structured display. While more complex, its principles are similar to `FlatList`. When choosing between `ScrollView` and `FlatList`, always consider the size and dynamic nature of your data. Prioritize `FlatList` for performance with large datasets.

#### Key concepts
*   **`ScrollView`**: A component that allows all its content to be scrolled if it exceeds the screen dimensions. Renders all children at once.
*   **`FlatList`**: An efficient component for rendering long lists of data. It uses virtualization to only render visible items, improving performance and memory usage.
*   **Virtualization**: A technique used by `FlatList` where only a subset of items (those visible on screen plus a buffer) are rendered at any given time, recycling components as the user scrolls.
*   **`data` prop (FlatList)**: An array of JavaScript objects that `FlatList` uses to populate the list.
*   **`renderItem` prop (FlatList)**: A function that receives an object `{ item, index, separators }` and returns a React component to render for each item in the `data` array.
*   **`keyExtractor` prop (FlatList)**: A function that takes a data `item` and `index` and returns a unique string identifier for that item. Essential for performance and correct list behavior.
*   **`SectionList`**: A specialized list component for rendering data that is grouped into sections, each with its own header.

#### Hands-on activity
**Display a List of Products**

Create a new React Native component called `ProductList`. This component should:
1.  Define an array of at least 5 product objects, each with an `id`, `name`, and `price` (e.g., `{ id: 'p1', name: 'Laptop', price: 1200 }`).
2.  Use a `FlatList` to display these products.
3.  For each product, render a `View` containing two `Text` components: one for the product `name` and one for the `price`.
4.  Ensure `keyExtractor` is correctly implemented using the product `id`.
5.  Add some basic styling to make each product item visually distinct (e.g., a background color, padding, border).

**Starter Code:**
```javascript
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PRODUCTS = [
  { id: 'p1', name: 'Wireless Headphones', price: 199.99 },
  { id: 'p2', name: 'Smartwatch', price: 249.00 },
  { id: 'p3', name: 'Portable Charger', price: 35.50 },
  { id: 'p4', name: 'Bluetooth Speaker', price: 79.99 },
  { id: 'p5', name: 'Gaming Mouse', price: 59.99 },
  { id: 'p6', name: 'USB-C Hub', price: 45.00 },
  // Add more products if you like!
];

const ProductList = () => {
  const renderProductItem = ({ item }) => {
    // Implement your product item rendering here
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Products</Text>
      {/* Implement your FlatList here */}
      <FlatList
        data={PRODUCTS}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#eef',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#444',
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default ProductList;
```

#### Assessment idea
1.  **Question:** You need to display a static "Terms and Conditions" page that contains a large amount of text, potentially exceeding the screen height. Which React Native component is the most appropriate for this task, and why?
    *   **Correct Answer:** `ScrollView` is the most appropriate component. Because the content is static and not a dynamic, potentially infinite list, `ScrollView` is simpler to implement and doesn't incur the overhead of virtualization that `FlatList` uses. While `FlatList` is optimized for performance with large datasets, `ScrollView` is perfectly suited for rendering all its children at once for fixed, non-repeating content.
2.  **Question:** A developer is experiencing severe performance issues (UI lag) when displaying a list of 1000 user comments using `ScrollView`. What is the fundamental problem, and which component should they switch to? What are the three essential props needed for the recommended component?
    *   **Correct Answer:** The fundamental problem is that `ScrollView` renders all 1000 comments at once, consuming excessive memory and processing power, leading to UI lag. The developer should switch to `FlatList`. The three essential props for `FlatList` are:
        1.  `data`: The array of comment objects to be displayed.
        2.  `renderItem`: A function that defines how each individual comment item will be rendered.
        3.  `keyExtractor`: A function that provides a unique key for each comment item, crucial for React's efficient rendering and updates.

#### AI generation note
Create a 10-minute mixed format lesson. Start with a 3-minute animated diagram explaining the difference between `ScrollView` (all items rendered) and `FlatList` (virtualization, only visible items rendered). Then, transition to a 7-minute live coding demo. First, show a `ScrollView` with 5 static items, then demonstrate its inefficiency by adding 1000 items (showing potential lag). Next, refactor the code to use `FlatList` with `data`, `renderItem`, and `keyExtractor`, showing the performance improvement. Use a split-screen view for code and Expo simulator. Include a reflection prompt asking learners to consider when `ScrollView` is still the right choice.

### Chapter 3.3 — Styling React Native Components with `StyleSheet`

#### Learning objectives
*   Understand the fundamental differences between styling in React Native and web CSS.
*   Utilize `StyleSheet.create()` to define and manage styles in a structured and optimized manner.
*   Apply common style properties like `color`, `fontSize`, `margin`, `padding`, `borderWidth`, and `borderRadius` to components.
*   Learn how to apply multiple styles to a single component and understand style precedence.
*   Recognize common styling mistakes and best practices for maintainable stylesheets.

#### Detailed lesson content
Styling in React Native shares many conceptual similarities with CSS for the web, but with crucial differences. Instead of CSS files, you define styles directly within your JavaScript code using JavaScript objects. The most common and recommended way to do this is by using `StyleSheet.create()`. This method takes an object where keys are your style names (e.g., `'container'`, `'buttonText'`) and values are style objects, much like inline styles but with significant benefits. `StyleSheet.create()` optimizes your styles by sending them to the native side only once, converting them into platform-specific native styles, which improves performance. It also provides validation for style properties, catching typos early.

When you define styles, you use camelCase for property names (e.g., `backgroundColor` instead of `background-color`). Values are typically numbers for dimensions (like `width`, `height`, `margin`, `padding`, `fontSize`), which are automatically converted to device-independent pixels (dp). Colors can be specified using hex codes, RGB, RGBA, or named colors.

Let's look at some common style properties:
*   **Layout**: `width`, `height`, `flex` (for flexible box layout, covered in the next chapter), `margin`, `padding`. Margin creates space *outside* the component, while padding creates space *inside* the component, between its content and its border.
*   **Typography**: `fontSize`, `color`, `fontWeight`, `textAlign`, `fontFamily`.
*   **Borders**: `borderWidth`, `borderColor`, `borderRadius`. `borderRadius` is particularly useful for creating rounded corners, a common UI element.
*   **Background**: `backgroundColor`.
*   **Shadows (iOS)**: `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`.
*   **Elevation (Android)**: `elevation` (a single property that approximates shadows).

Applying styles to a component is done via the `style` prop. This prop accepts either a single style object or an array of style objects. When an array is provided, the styles are merged from left to right, meaning later styles in the array will override earlier ones if there are conflicting properties. This allows for powerful composition of styles, where you can define base styles and then apply specific overrides. For example, `<Text style={[styles.baseText, styles.highlightedText]} />` would apply `baseText` styles first, then `highlightedText` styles, with `highlightedText` properties taking precedence.

Consider the following example for styling a simple card component:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ title, description, price }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <View style={styles.buttonContainer}>
        <Text style={[styles.button, styles.primaryButton]}>Add to Cart</Text>
        <Text style={[styles.button, styles.secondaryButton]}>Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 }, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 6, // iOS shadow
    elevation: 8, // Android shadow
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 120,
  },
  primaryButton: {
    backgroundColor: '#28a745', // Green
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d', // Gray
    color: '#fff',
  },
});

export default ProductCard;
```
In this `ProductCard` example, we define a variety of styles within `StyleSheet.create()`. Notice how `shadow` properties are used for iOS and `elevation` for Android to achieve a similar visual effect. The `button` and `primaryButton`/`secondaryButton` styles demonstrate applying multiple styles to achieve a desired look while maintaining reusability.

Common mistakes include using inline styles excessively, which can make components harder to read and debug, and can hinder performance slightly as styles are re-created on every render. Another mistake is forgetting that React Native styles do not inherit like CSS. For example, if you set `fontFamily` on a parent `View`, its child `Text` components will *not* automatically inherit that font unless you explicitly apply it to them or use a custom `Text` component wrapper. Always test your styles on both iOS and Android, as minor differences in rendering engines or default component styles can sometimes lead to unexpected visual discrepancies. Safety note: While React Native styles are generally safe, be mindful of accessibility. Ensure sufficient color contrast for text, and avoid very small font sizes that are difficult to read for users with visual impairments.

#### Key concepts
*   **`StyleSheet.create()`**: A method used to create a stylesheet object from a given style object. It optimizes style definitions for performance and provides validation.
*   **CamelCase**: The naming convention for style properties in React Native (e.g., `backgroundColor`, `fontSize`).
*   **Device-Independent Pixels (dp)**: The unit of measurement for dimensions in React Native, which scales automatically based on screen density.
*   **`style` prop**: The prop used to apply styles to a React Native component. It can accept a single style object or an array of style objects.
*   **Style Precedence**: When an array of styles is passed to the `style` prop, styles are merged from left to right, with later styles overriding earlier ones in case of conflicts.
*   **`elevation`**: An Android-specific style property used to create shadows.
*   **`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`**: iOS-specific style properties used to create shadows.

#### Hands-on activity
**Style a User Profile Card**

Create a new React Native component called `UserProfileCard`. This component should display a user's name, email, and a short bio.
1.  Use `View` and `Text` components to structure the card.
2.  Define styles using `StyleSheet.create()` for:
    *   A main container `View` for the card (e.g., with a background color, padding, border radius, and shadow/elevation).
    *   The user's name (`Text`) with a larger, bold font.
    *   The user's email (`Text`) with a slightly smaller font and a different color.
    *   The bio (`Text`) with appropriate line height and text alignment.
3.  Experiment with `margin` and `padding` to create spacing within and around the card elements.
4.  Apply an array of styles to one of your `Text` components to demonstrate style merging.

**Starter Code:**
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileCard = () => {
  return (
    <View style={styles.container}>
      {/* Implement your user profile card here */}
      <View style={styles.card}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={[styles.bio, { fontStyle: 'italic' }]}>
          Passionate mobile developer with a keen eye for UI/UX and a love for clean code.
          Always eager to learn new technologies and build impactful applications.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Light blue background
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    width: '90%', // Occupy 90% of screen width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 12, // Android shadow
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#263238', // Dark grey
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#455a64', // Medium grey
    marginBottom: 15,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#546e7a', // Slightly lighter grey
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default UserProfileCard;
```

#### Assessment idea
1.  **Question:** You have a `Text` component and want to apply two sets of styles: `baseTextStyle` (defining `fontSize` and `color`) and `errorTextStyle` (defining `color` and `fontWeight`). If `errorTextStyle` should override `baseTextStyle` for conflicting properties, how would you apply these styles using the `style` prop?
    *   **Correct Answer:** You would apply them as an array, with `errorTextStyle` coming after `baseTextStyle`: `<Text style={[styles.baseTextStyle, styles.errorTextStyle]}>Error Message</Text>`. When an array is passed to the `style` prop, styles are merged from left to right, meaning properties in later style objects will override conflicting properties in earlier ones.
2.  **Question:** What is the primary benefit of using `StyleSheet.create()` over inline styles (e.g., `{ color: 'red', fontSize: 16 }`) for defining styles in a React Native application?
    *   **Correct Answer:** The primary benefit of `StyleSheet.create()` is performance optimization and style validation. When you use `StyleSheet.create()`, React Native sends the styles to the native side only once, where they are converted into platform-specific native styles. This is more efficient than creating new style objects on every render, which happens with inline styles. Additionally, `StyleSheet.create()` provides basic validation for style properties, helping to catch typos or invalid property usage early in development. It also promotes better code organization and reusability.

#### AI generation note
Create an 8-minute live coding video. Start with a basic `View` and `Text` component and apply inline styles. Then, refactor to use `StyleSheet.create()`, demonstrating the syntax and benefits. Show how to apply various common styles like `backgroundColor`, `padding`, `margin`, `borderRadius`, `fontSize`, `color`, and `fontWeight`. Demonstrate applying an array of styles to a component, explaining style precedence. Use a split-screen view with code on the left and a live Expo simulator on the right. Include visual examples of iOS shadows and Android elevation. End with a quick challenge for the learner to apply a specific set of styles to a new component.

### Chapter 3.4 — Advanced Styling: Flexbox, Dimensions, and Platform-Specific Styles

#### Learning objectives
*   Master Flexbox properties (`flexDirection`, `justifyContent`, `alignItems`, `flex`) to create complex and responsive layouts.
*   Utilize the `Dimensions` API to dynamically adjust styles based on screen width and height.
*   Implement platform-specific styling using the `Platform` module for tailored UI experiences on iOS and Android.
*   Apply conditional styling to components based on state or props.
*   Understand best practices for building adaptive and maintainable UIs across different devices.

#### Detailed lesson content
While basic styling covers appearance, creating truly adaptive and visually appealing layouts in React Native often requires more advanced techniques. Flexbox is the cornerstone of layout in React Native, much like it is in modern web development. It provides a powerful and efficient way to arrange, align, and distribute space among items in a container, making it ideal for responsive design. Every `View` in React Native implicitly acts as a Flexbox container, with `flexDirection: 'column'` as its default.

The core Flexbox properties you'll use are:
*   **`flexDirection`**: Defines the main axis of the Flexbox container. `'column'` (default) arranges items vertically, and `'row'` arranges them horizontally.
*   **`justifyContent`**: Aligns items along the main axis. Options include `'flex-start'`, `'flex-end'`, `'center'`, `'space-between'`, `'space-around'`, `'space-evenly'`.
*   **`alignItems`**: Aligns items along the cross axis (perpendicular to the main axis). Options include `'flex-start'`, `'flex-end'`, `'center'`, `'stretch'`, `'baseline'`.
*   **`flex`**: A property applied to *children* of a Flexbox container. It's a shorthand for `flexGrow`, `flexShrink`, and `flexBasis`. A common use is `flex: 1`, which means the item will grow to fill available space. If multiple items have `flex: 1`, they will share the space equally.

Mastering these properties allows you to build virtually any layout. For instance, creating a header with a title centered and two icons on either side would involve a `View` with `flexDirection: 'row'`, `justifyContent: 'space-between'`, and `alignItems: 'center'`.

Beyond Flexbox, responsive design often requires knowing the device's screen dimensions. The `Dimensions` API provides the current width and height of the device screen or window. You can retrieve these values using `Dimensions.get('window')` or `Dimensions.get('screen')`. `Dimensions.get('window')` returns the dimensions of the visible window, while `Dimensions.get('screen')` returns the full dimensions of the device screen, including the status bar. These values are crucial for dynamically adjusting styles, such as setting image sizes, font sizes, or component widths as a percentage of the screen. For example, you might want an image to always take up 80% of the screen width, regardless of the device.

```javascript
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ResponsiveHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.icon}>⚙️</Text>
      <Text style={styles.title}>My App</Text>
      <Text style={styles.icon}>🔔</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200EE', // Deep purple
    paddingHorizontal: width * 0.05, // 5% of screen width padding
    paddingVertical: height * 0.02, // 2% of screen height padding
    width: '100%',
    height: height * 0.1, // 10% of screen height
  },
  title: {
    color: '#fff',
    fontSize: width * 0.06, // Font size scales with screen width
    fontWeight: 'bold',
  },
  icon: {
    fontSize: width * 0.07,
  },
});

export default ResponsiveHeader;
```
In this `ResponsiveHeader` example, `Dimensions.get('window')` is used to calculate padding, height, and font sizes dynamically, ensuring the header scales appropriately across different screen sizes.

React Native also allows for platform-specific styling using the `Platform` module. This is essential because iOS and Android often have distinct design guidelines and visual conventions. `Platform.OS` returns either `'ios'` or `'android'`, allowing you to apply conditional styles. For example, you might want a button to have a blue background on iOS and a green background on Android. Even more powerful is `Platform.select()`, which takes an object where keys are platform names (`'ios'`, `'android'`, `'native'`, `'default'`) and values are the styles to apply. This cleans up conditional logic significantly.

```javascript
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformSpecificButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Click Me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        backgroundColor: '#007AFF', // iOS blue
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        backgroundColor: '#4CAF50', // Android green
        elevation: 5,
      },
      default: { // Fallback for other platforms (e.g., web)
        backgroundColor: '#FFC107',
      }
    }),
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlatformSpecificButton;
```
Here, `Platform.select` applies different background colors and shadow properties based on the operating system. This ensures a native look and feel without complex `if/else` statements. You can also conditionally apply styles based on component props or state, such as changing a button's color when it's disabled. A common mistake is to over-engineer platform-specific styles when a single, unified design could work well. Use it judiciously when there's a clear UX benefit or design requirement. Safety note: When dynamically adjusting font sizes or component dimensions, always test on the smallest and largest target devices to ensure legibility and prevent UI elements from overlapping or becoming unusable.

#### Key concepts
*   **Flexbox**: A layout model that allows items within a container to be arranged, aligned, and distributed space efficiently.
*   **`flexDirection`**: A Flexbox property that defines the main axis (row or column) along which items are laid out.
*   **`justifyContent`**: A Flexbox property that aligns items along the main axis of the container.
*   **`alignItems`**: A Flexbox property that aligns items along the cross axis (perpendicular to the main axis) of the container.
*   **`flex`**: A Flexbox property applied to child components to make them grow or shrink to fill available space. `flex: 1` is common for filling available space.
*   **`Dimensions` API**: A React Native API (`Dimensions.get('window')`, `Dimensions.get('screen')`) used to retrieve the current width and height of the device screen or window.
*   **`Platform` module**: A React Native module that provides information about the platform the app is running on (`Platform.OS`) and allows for platform-specific code and styling (`Platform.select()`).
*   **Platform-Specific Styling**: Applying different styles based on whether the app is running on iOS, Android, or other platforms to match native design conventions.

#### Hands-on activity
**Build a Responsive Dashboard Layout**

Create a `DashboardLayout` component that demonstrates Flexbox, `Dimensions`, and `Platform.select`.
1.  Create a main `View` container that uses Flexbox to center its content vertically and horizontally.
2.  Inside, create two `View` components side-by-side (e.g., "Card 1" and "Card 2"). Each card should take up roughly half the screen width, with some spacing between them. Use `flexDirection: 'row'` and `flex: 1` or specific widths based on `Dimensions`.
3.  Each card should have a different background color based on `Platform.OS` (e.g., iOS: light blue, Android: light green).
4.  The text inside each card should have a `fontSize` that scales with the device's screen width.

**Starter Code:**
```javascript
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const DashboardLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardRow}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    // Implement Flexbox and Dimensions based styling here
    width: width * 0.45, // Each card takes 45% of screen width
    height: width * 0.45, // Make it square
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.025, // Spacing between cards
    // Implement Platform.select for background color
    ...Platform.select({
      ios: {
        backgroundColor: '#BBDEFB', // Light blue for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        backgroundColor: '#C8E6C9', // Light green for Android
        elevation: 8,
      },
    }),
  },
  cardText: {
    // Implement font size scaling with Dimensions
    fontSize: width * 0.05, // Font size scales with screen width
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DashboardLayout;
```

#### Assessment idea
1.  **Question:** You are designing a header for your app that needs to display a logo on the left, a title in the center, and a user profile icon on the right, all aligned vertically. Which Flexbox properties would you primarily use on the header's container `View` to achieve this layout?
    *   **Correct Answer:** You would use `flexDirection: 'row'` to arrange items horizontally. Then, `justifyContent: 'space-between'` would distribute the logo, title, and icon with equal space between them, pushing the logo to the left and the icon to the right. Finally, `alignItems: 'center'` would vertically center all three items within the header.
2.  **Question:** Explain a scenario where using the `Dimensions` API would be more appropriate than hardcoding pixel values for component sizes. Provide a simple code example using `Dimensions`.
    *   **Correct Answer:** The `Dimensions` API is crucial for creating responsive layouts that adapt to different screen sizes and orientations. Hardcoding pixel values (e.g., `width: 300`) would result in components looking too large on small screens or too small on large screens, leading to a poor user experience. A scenario where `Dimensions` is appropriate is when you want an image or a banner to always occupy a certain percentage of the screen width, regardless of the device.
    *   **Code Example:**
        ```javascript
        import { Dimensions, Image, StyleSheet } from 'react-native';

        const { width } = Dimensions.get('window'); // Get current window width

        const styles = StyleSheet.create({
          bannerImage: {
            width: width * 0.9, // Image takes 90% of screen width
            height: width * 0.5, // Height is 50% of its calculated width to maintain aspect ratio
            resizeMode: 'cover',
            borderRadius: 10,
          },
        });

        // Usage: <Image source={{ uri: 'https://example.com/banner.jpg' }} style={styles.bannerImage} />
        ```

#### AI generation note
Create a 15-minute interactive code demo video. Start by explaining Flexbox concepts with visual diagrams (main axis, cross axis). Then, live code a complex layout: a header with left/center/right aligned elements, followed by a two-column content area, and a footer. Demonstrate `flexDirection`, `justifyContent`, `alignItems`, and `flex` properties extensively. Next, integrate `Dimensions.get('window')` to make the layout responsive, showing how elements resize dynamically as the simulator's orientation changes. Finally, use `Platform.select()` to apply different background colors and border styles to a component based on iOS/Android. Use a split-screen view for code and Expo simulator, with diagram overlays for Flexbox explanations. Conclude with a hands-on challenge to refactor a given non-responsive layout using Flexbox and `Dimensions`.

---

## Module 4: Building Multi-Screen Apps with Navigation

This module will equip you with the essential skills to construct sophisticated multi-screen React Native applications. You'll learn how to implement various navigation patterns, pass data seamlessly between screens, and manage complex user flows like authentication, transforming your single-screen apps into fully functional, intuitive mobile experiences.

---

### Chapter 4.1 — Introduction to React Navigation and Stack Navigator

#### Learning objectives
*   Understand the fundamental role of navigation in multi-screen mobile applications.
*   Set up and configure the `react-navigation` library in an Expo project.
*   Implement a basic `StackNavigator` to manage screen transitions.
*   Define and register individual screens within a navigation stack.
*   Navigate between screens using basic navigation actions.

#### Detailed lesson content
As your React Native applications grow beyond a single view, you'll quickly realize the need for a robust system to manage different screens and the transitions between them. This is where navigation comes into play. Think of navigation as the roadmap for your app, guiding users through various features and content. Without it, your application would be a static, single-page experience, which isn't very useful for most mobile apps. The `react-navigation` library is the de facto standard for handling navigation in React Native, offering a highly customizable and performant solution for a wide array of navigation patterns. It's built on top of native primitives, ensuring a smooth user experience that feels integrated with the platform.

To get started with `react-navigation`, the first step is to install the necessary packages in your Expo project. Open your terminal in your project's root directory and run `npx expo install react-navigation/native react-native-screens react-native-safe-area-context`. The `react-navigation/native` package provides the core navigation utilities, while `react-native-screens` and `react-native-safe-area-context` are crucial dependencies that optimize performance and handle device-specific UI concerns like notches and status bars. Once these are installed, you'll need to install the specific navigator you intend to use. For our first foray, we'll focus on the `StackNavigator`, which provides a way for your app to transition between screens where each new screen is placed on top of a stack. When you navigate back, the top screen is popped off the stack, revealing the previous one. Install it with `npx expo install @react-navigation/stack`.

The heart of any `react-navigation` setup is the `NavigationContainer`. This component manages your app's navigation tree and contains the navigation state. You should wrap your entire app's component tree with a `NavigationContainer`, typically in your `App.js` file. This ensures that all navigation-related components have access to the navigation context. Inside the `NavigationContainer`, you'll define your navigators. A `StackNavigator` is created using the `createStackNavigator` function. This function returns an object containing two components: `Navigator` and `Screen`. The `Navigator` component is responsible for rendering the navigation stack, and inside it, you define individual `Screen` components. Each `Screen` component requires a `name` prop, which is a unique identifier for that screen, and a `component` prop, which specifies the React component to render for that screen.

Let's illustrate with a simple example. Imagine an app with two screens: a `Home` screen and a `Details` screen.
```javascript
// App.js
import 'react-native-gesture-handler'; // Important for react-navigation/stack
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is the Details Screen.</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Item Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
```
In this code, `HomeScreen` and `DetailsScreen` are functional components that receive a `navigation` prop. This prop is automatically passed to all screen components rendered by `react-navigation` and contains various methods for interacting with the navigation stack. To navigate from `HomeScreen` to `DetailsScreen`, we use `navigation.navigate('Details')`. The argument `'Details'` corresponds to the `name` prop we assigned to the `DetailsScreen` in our `Stack.Navigator`. Similarly, `navigation.goBack()` allows you to return to the previous screen in the stack. It's crucial to remember to import `react-native-gesture-handler` at the very top of your `App.js` file, as it's a fundamental dependency for `react-navigation/stack` to ensure smooth gesture-based transitions. Failing to do so can lead to unexpected behavior or crashes, especially on Android.

Common mistakes often include forgetting to wrap the entire app in `NavigationContainer`, incorrectly naming screens (the `name` prop must match the string passed to `navigation.navigate`), or not installing all necessary dependencies. Always double-check your `package.json` and the official `react-navigation` documentation for the latest installation instructions. By mastering the `StackNavigator`, you're laying a solid foundation for building more complex navigation flows in your React Native applications.

#### Key concepts
*   **Navigation Container:** A component that manages the navigation tree and state for your entire application.
*   **Stack Navigator:** A type of navigator that provides a way to transition between screens, where each new screen is placed on top of a stack.
*   **Screen Component:** A React component registered with a navigator, representing a distinct view or page in your application.
*   **`navigation` prop:** An object automatically passed to screen components, containing methods for navigating, setting options, and interacting with the navigation state.
*   **`navigation.navigate()`:** A method used to transition to a specific screen by its registered name.
*   **`navigation.goBack()`:** A method used to return to the previous screen in the navigation stack.

#### Hands-on activity
**Build a Simple Product Catalog Navigation**

Create a new Expo project. Implement a `StackNavigator` with three screens: `ProductListScreen`, `ProductDetailScreen`, and `AboutScreen`.
1.  `ProductListScreen`: Display a list of dummy product names (e.g., "Laptop", "Smartphone", "Headphones"). Each item should have a button to navigate to `ProductDetailScreen`.
2.  `ProductDetailScreen`: This screen should simply display "Product Details" for now. Include a button to navigate to `ProductListScreen` and another button to navigate to `AboutScreen`.
3.  `AboutScreen`: Display "About Our Company". Include a button to go back to the previous screen.

**Code Template:**
```javascript
// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Define your screen components here (ProductListScreen, ProductDetailScreen, AboutScreen)
// Remember to destructure { navigation } from props for each screen.

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        {/* Define your Stack.Screen components here */}
        {/* Example: <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
  }
});
```

#### Assessment idea
1.  **Question:** What is the primary purpose of the `NavigationContainer` component in `react-navigation`?
    **Answer:** The `NavigationContainer` component is essential because it manages the entire navigation state of your application. It wraps your app's navigation tree, providing the necessary context and state management for all navigators and screens to function correctly. Without it, `react-navigation` cannot track the current screen, handle transitions, or manage the navigation history.

2.  **Question:** You've implemented a `StackNavigator` with two screens: `ScreenA` and `ScreenB`. From `ScreenA`, you navigate to `ScreenB` using `navigation.navigate('ScreenB')`. If you then call `navigation.goBack()` from `ScreenB`, which screen will be displayed?
    **Answer:** If you call `navigation.goBack()` from `ScreenB`, `ScreenA` will be displayed. The `StackNavigator` works like a stack of cards; `ScreenA` is at the bottom, and `ScreenB` is placed on top. `navigation.goBack()` removes the topmost screen (`ScreenB`) from the stack, revealing the screen directly beneath it (`ScreenA`).

#### AI generation note
Create a 12-minute live coding video demonstrating the setup of `react-navigation` and a `StackNavigator`. Start with an empty Expo project, install dependencies, implement `NavigationContainer`, `createStackNavigator`, and two basic screens (`Home`, `Details`). Show navigation between them using `navigation.navigate` and `navigation.goBack`. Use a split-screen view with code on the left and a simulator (iOS and Android) on the right. Highlight the `navigation` prop and its methods. Include a 2-question interactive quiz at the end about `NavigationContainer` and `goBack()`. Ensure captions are available.

---

### Chapter 4.2 — Navigating Between Screens and Passing Data

#### Learning objectives
*   Differentiate between various navigation actions like `navigate`, `push`, `goBack`, and `popToTop`.
*   Pass data (parameters) from one screen to another using the `params` object.
*   Access and utilize passed parameters on the destination screen.
*   Dynamically update screen options, such as the header title, based on passed data.
*   Understand common pitfalls and best practices when passing data between screens.

#### Detailed lesson content
Building upon our understanding of the `StackNavigator`, let's delve deeper into the various ways you can control navigation flow and, crucially, how to share information between different parts of your application. While `navigation.navigate()` is your go-to for simple transitions, `react-navigation` offers more granular control. The `navigate` method will try to find an existing instance of the target screen in the stack and navigate to it, or push a new one if it doesn't exist. This is generally safe for most use cases. However, sometimes you explicitly want to add a new screen to the stack, even if an identical screen already exists. For this, you use `navigation.push()`. Imagine a social media app where you can tap on a user's profile from various places; `push` would let you keep adding new profile screens to the stack, allowing the user to go back through their viewing history. Conversely, `navigation.goBack()`, as we've seen, pops the top screen off the stack. For more drastic navigation, `navigation.popToTop()` will remove all screens from the stack except the first one, effectively taking you back to the very first screen in your navigator. This is useful for scenarios like logging out or completing a multi-step form.

One of the most common requirements in multi-screen applications is passing data from one screen to another. For instance, if you have a list of products and you tap on one, you'll want to display the details of *that specific product* on the detail screen. `react-navigation` handles this elegantly through route `params`. When you call `navigation.navigate()` or `navigation.push()`, you can pass a second argument, which is an object containing the parameters you wish to send. These parameters become available on the destination screen via the `route` prop, specifically `route.params`.

Let's enhance our previous example to pass a product ID from the `HomeScreen` to the `DetailsScreen`:
```javascript
// HomeScreen.js (or part of App.js)
// ... (imports)
function HomeScreen({ navigation }) {
  const productId = 'p123'; // Example product ID
  const productName = 'Premium Wireless Headphones';

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <Button
        title="View Product Details"
        onPress={() => navigation.navigate('Details', {
          productId: productId,
          name: productName,
          price: 199.99
        })}
      />
      <Button
        title="Go to Details (Another Product)"
        onPress={() => navigation.push('Details', {
          productId: 'p456',
          name: 'Ultra-Fast SSD Drive',
          price: 129.99
        })}
      />
    </View>
  );
}

// DetailsScreen.js (or part of App.js)
// ... (imports)
function DetailsScreen({ route, navigation }) {
  // Access parameters via route.params
  const { productId, name, price } = route.params;

  // You can also dynamically set screen options, like the header title
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.detailText}>ID: {productId}</Text>
      <Text style={styles.detailText}>Name: {name}</Text>
      <Text style={styles.detailText}>Price: ${price.toFixed(2)}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Home (pop to top)"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
// ... (styles)
```
In `HomeScreen`, we pass an object `{ productId: productId, name: productName, price: 199.99 }` as the second argument to `navigation.navigate()`. On `DetailsScreen`, we destructure `route.params` to get `productId`, `name`, and `price`. It's good practice to provide default values or check for the existence of `route.params` or specific keys if the parameter might not always be present, to prevent runtime errors. For instance, `const { productId = 'N/A' } = route.params || {};`.

A powerful feature is the ability to dynamically update screen options, such as the header title, based on the data received. In `DetailsScreen`, we use `React.useLayoutEffect` and `navigation.setOptions({ title: name })` to change the header title to the product's name. `useLayoutEffect` is preferred over `useEffect` here because it runs synchronously after all DOM mutations but before the browser paints, ensuring the header updates before the user sees the screen. Always include `navigation` and any state/props used in `setOptions` in the dependency array of `useLayoutEffect`.

Common mistakes include forgetting to pass the `route` prop to the destination screen component, trying to access `route.params` when no parameters have been passed (leading to `undefined` errors), or attempting to modify `route.params` directly (parameters are immutable). If you need to update parameters, `navigation.setParams()` can be used, but this is less common for initial data passing and more for dynamic updates within the same screen. Always ensure the data you pass is serializable (e.g., strings, numbers, booleans, plain objects, arrays), as complex objects like functions or class instances can cause issues, especially with state persistence or deep linking.

#### Key concepts
*   **`navigation.push()`:** A navigation action that always adds a new screen to the top of the stack, even if the screen already exists in the stack.
*   **`navigation.popToTop()`:** A navigation action that removes all screens from the stack except the first one, returning to the initial screen.
*   **Route Parameters (`params`):** Data passed from one screen to another during navigation, accessible via the `route.params` object on the destination screen.
*   **`route` prop:** An object automatically passed to screen components, containing information about the current route, including its name and parameters.
*   **`navigation.setOptions()`:** A method used to dynamically update the options for the current screen, such as the header title or buttons.
*   **`React.useLayoutEffect`:** A React hook similar to `useEffect` but fires synchronously after all DOM mutations, useful for layout-dependent updates like setting navigation options.

#### Hands-on activity
**Implement a Dynamic User Profile Screen**

Extend your previous product catalog app.
1.  **`UserListScreen`:** Create a new screen that displays a list of dummy user names (e.g., "Alice", "Bob", "Charlie"). Each name should be a pressable item.
2.  **`UserProfileScreen`:** When a user's name is pressed from `UserListScreen`, navigate to `UserProfileScreen`. Pass the `userId` and `userName` as parameters.
3.  **Dynamic Header:** On `UserProfileScreen`, use `navigation.setOptions()` to dynamically set the header title to "Profile: [userName]" using the passed `userName` parameter.
4.  **Display Details:** Display the `userId` and `userName` on the `UserProfileScreen` content area.
5.  **Navigation Actions:** Add a button on `UserProfileScreen` to `goBack()` and another button (if applicable) to `popToTop()` (e.g., back to the main `ProductList` if that's your root).

**Code Template:**
```javascript
// App.js (add new screens and update navigator)
import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// UserListScreen Component
function UserListScreen({ navigation }) {
  const users = [
    { id: 'u1', name: 'Alice' },
    { id: 'u2', name: 'Bob' },
    { id: 'u3', name: 'Charlie' },
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => navigation.navigate('UserProfile', { userId: item.id, userName: item.name })}
          >
            <Text style={styles.userText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// UserProfileScreen Component
function UserProfileScreen({ route, navigation }) {
  // Access params here
  const { userId, userName } = route.params;

  // Use useLayoutEffect to set header options
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: `Profile: ${userName}` });
  }, [navigation, userName]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.detailText}>User ID: {userId}</Text>
      <Text style={styles.detailText}>Name: {userName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      {/* Add another button for popToTop if desired, e.g., to ProductList */}
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Users' }} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        {/* Add your other screens like ProductList and ProductDetail here if you're extending */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  userText: {
    fontSize: 18,
  }
});
```

#### Assessment idea
1.  **Question:** Explain the key difference between `navigation.navigate('ScreenName')` and `navigation.push('ScreenName')` when using a `StackNavigator`. Provide a scenario where `push` would be more appropriate than `navigate`.
    **Answer:** The primary difference lies in how they handle existing screens in the stack. `navigation.navigate('ScreenName')` will first check if `ScreenName` already exists in the stack. If it does, it will navigate to that existing instance, effectively "popping" any screens above it. If `ScreenName` is not in the stack, it will push a new instance onto the stack. In contrast, `navigation.push('ScreenName')` *always* pushes a new instance of `ScreenName` onto the stack, regardless of whether an instance already exists.
    A scenario where `push` is more appropriate is when you have a feed of articles, and tapping an article takes you to `ArticleDetailScreen`. If the user is on `ArticleDetailScreen` for "Article A" and then taps a related article link for "Article B" *within* "Article A"'s content, you'd want to `push` a new `ArticleDetailScreen` for "Article B". This allows the user to press "back" and return to "Article A", and then press "back" again to return to the feed, preserving the full history of viewed articles. If `navigate` were used, it might try to go back to an existing `ArticleDetailScreen` for "Article A" and lose the context of the current article.

2.  **Question:** You are building an e-commerce app. From a `ProductListScreen`, you want to navigate to a `ProductDetailScreen` and display the selected product's `id` and `name`. Write the code snippet for calling the navigation action from `ProductListScreen` and accessing these parameters on `ProductDetailScreen`.
    **Answer:**
    **From `ProductListScreen`:**
    ```javascript
    // Assuming 'product' is an object like { id: 'p001', name: 'Smartphone' }
    function ProductListScreen({ navigation }) {
      const product = { id: 'p001', name: 'Smartphone' }; // Example product
      return (
        <Button
          title="View Smartphone Details"
          onPress={() => navigation.navigate('ProductDetail', {
            productId: product.id,
            productName: product.name
          })}
        />
      );
    }
    ```
    **On `ProductDetailScreen`:**
    ```javascript
    function ProductDetailScreen({ route }) {
      const { productId, productName } = route.params;

      return (
        <View>
          <Text>Product ID: {productId}</Text>
          <Text>Product Name: {productName}</Text>
        </View>
      );
    }
    ```

#### AI generation note
Produce a 10-minute interactive code demo. Start by showing the difference between `navigate` and `push` with a simple counter app where `push` creates new instances. Then, demonstrate passing `productId` and `productName` from a `ProductListScreen` to a `ProductDetailScreen`. Show how to access `route.params` and use `React.useLayoutEffect` to set the header title dynamically. Use a split-screen view with code on the left and a live simulator on the right. Highlight the `route` prop in the debugger. Include a short coding challenge for the learner to add a `price` parameter and display it.

---

### Chapter 4.3 — Exploring Different Navigators: Tab and Drawer

#### Learning objectives
*   Identify appropriate use cases for `BottomTabNavigator` and `DrawerNavigator`.
*   Implement a `BottomTabNavigator` for primary navigation within an application.
*   Implement a `DrawerNavigator` for secondary or less frequently accessed navigation options.
*   Customize the appearance and behavior of tab and drawer navigators (icons, labels, headers).
*   Understand how to nest different types of navigators to create complex navigation hierarchies.

#### Detailed lesson content
While the `StackNavigator` is excellent for managing sequential screens, most real-world applications require more diverse navigation patterns to provide a good user experience. This is where `BottomTabNavigator` and `DrawerNavigator` come into play. These navigators offer distinct UI patterns for organizing your app's content and features, catering to different interaction models.

The `BottomTabNavigator` is ideal for primary, top-level navigation, typically displaying 3-5 distinct sections of your app that users frequently switch between. Think of social media apps with tabs for "Home," "Search," "Reels," "Notifications," and "Profile." Each tab usually represents its own independent navigation stack. To implement this, you'll first install the necessary package: `npx expo install @react-navigation/bottom-tabs`. Then, similar to `createStackNavigator`, you'll use `createBottomTabNavigator()` to get `Tab.Navigator` and `Tab.Screen` components. Each `Tab.Screen` will define a tab, with its `name` and `component`. The `options` prop for `Tab.Screen` is particularly useful here, allowing you to customize the tab's appearance, such as `tabBarLabel` for the text, and `tabBarIcon` for an icon (often using libraries like `expo/vector-icons`).

Here's an example of a simple `BottomTabNavigator`:
```javascript
// App.js or a dedicated Navigator.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Example icon library

// Dummy Screens
function FeedScreen() { return <View style={styles.screen}><Text style={styles.title}>Feed</Text></View>; }
function SearchScreen() { return <View style={styles.screen}><Text style={styles.title}>Search</Text></View>; }
function ProfileScreen() { return <View style={styles.screen}><Text style={styles.title}>Profile</Text></View>; }

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide default header if individual screens have their own StackNavigators
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({ /* ... */ });
```
Notice the `screenOptions` prop on `Tab.Navigator`. This function receives the `route` object, allowing you to conditionally render icons or labels based on the active tab. `headerShown: false` is a common option when nesting a `TabNavigator` inside a `StackNavigator` or when individual tab screens manage their own headers.

The `DrawerNavigator`, often called a "hamburger menu," is typically used for secondary navigation, settings, or less frequently accessed features. It slides out from the side of the screen (left or right) to reveal a list of navigation options. This is useful for apps with many sections that don't fit neatly into a bottom tab bar. Install it with `npx expo install @react-navigation/drawer`.
```javascript
// App.js or a dedicated Navigator.js
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; // Needed if this is the root navigator

// Dummy Screens
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function SettingsScreen() { return <View style={styles.screen}><Text style={styles.title}>Settings</Text></View>; }

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: 'Main Home' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
// ... (styles)
```
In a `DrawerNavigator`, you can use `navigation.openDrawer()` to programmatically open the drawer and `navigation.closeDrawer()` to close it. The `drawerLabel` option allows you to customize the text displayed in the drawer menu.

The true power of `react-navigation` comes from **nesting navigators**. You can place any navigator inside another. A common pattern is to have a `StackNavigator` for each tab within a `BottomTabNavigator`. This means each tab has its own independent navigation history. For example, your "Feed" tab might have a stack (`FeedScreen` -> `PostDetailScreen`), while your "Profile" tab has another stack (`ProfileScreen` -> `EditProfileScreen`). The overall structure would look something like this:
```javascript
// App.js (Root Navigator)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ... import TabNavigator and DrawerNavigator components

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* Maybe a login screen here first */}
        <RootStack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
        {/* Or a DrawerNavigator could be the main app */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// TabNavigator.js (contains Tab Navigator, each tab might be a Stack Navigator)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const FeedStack = createStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FeedHome" component={FeedScreen} />
      <FeedStack.Screen name="PostDetails" component={PostDetailScreen} />
    </FeedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedStackScreen} /> {/* Nested Stack */}
      <Tab.Screen name="Profile" component={ProfileScreen} /> {/* Simple screen or another stack */}
    </Tab.Navigator>
  );
}
```
When nesting, remember that the `navigation` prop refers to the *nearest* navigator. If you're inside `FeedStackScreen` and call `navigation.navigate('PostDetails')`, it will navigate within the `FeedStack`. To navigate to a screen in a *different* navigator (e.g., from `FeedStackScreen` to `ProfileScreen` in the `TabNavigator`), you need to specify the navigator name and then the screen name: `navigation.navigate('Profile')`. If the `Profile` tab itself contains a stack, you'd navigate like `navigation.navigate('Profile', { screen: 'EditProfile' })`. This nested navigation syntax is crucial for complex apps.

Common mistakes include not installing the correct navigator package, forgetting to wrap the entire app in `NavigationContainer` (if it's the root), or mismanaging `headerShown` options, leading to duplicate headers or missing headers. Always consider the user's mental model: tabs are for distinct sections, drawers for less frequent actions, and stacks for sequential journeys within those sections.

#### Key concepts
*   **Bottom Tab Navigator:** A navigation pattern where primary app sections are accessible via tabs at the bottom of the screen.
*   **Drawer Navigator:** A navigation pattern where secondary app sections or settings are accessible via a menu that slides out from the side of the screen.
*   **`createBottomTabNavigator()`:** A function from `@react-navigation/bottom-tabs` used to create a tab navigator.
*   **`createDrawerNavigator()`:** A function from `@react-navigation/drawer` used to create a drawer navigator.
*   **`screenOptions`:** A prop on navigator components to define common options for all screens within that navigator, often used for dynamic tab icons or header visibility.
*   **`tabBarIcon` / `drawerIcon`:** Options within `screenOptions` to render custom icons for tabs or drawer items.
*   **Nesting Navigators:** The practice of placing one type of navigator inside another (e.g., a `StackNavigator` inside a `BottomTabNavigator`) to build complex navigation hierarchies.

#### Hands-on activity
**Build a Hybrid App with Tabs and a Drawer**

Create an Expo app that combines different navigation patterns:
1.  **Root Stack Navigator:** Your `App.js` should contain a `NavigationContainer` wrapping a `StackNavigator`. This `StackNavigator` will contain a single `Screen` called "MainApp".
2.  **Bottom Tab Navigator (MainApp):** The `MainApp` component should be a `BottomTabNavigator` with three tabs:
    *   "Home": This tab should contain its own `StackNavigator` with `HomeScreen` and `DetailScreen`. From `HomeScreen`, you can navigate to `DetailScreen`.
    *   "Feed": A simple `FeedScreen`.
    *   "Settings": This tab should contain a `DrawerNavigator`.
3.  **Drawer Navigator (Settings Tab):** The `Settings` tab's component should be a `DrawerNavigator` with two screens: `ProfileSettingsScreen` and `AppPreferencesScreen`.
4.  **Customization:**
    *   Add `Ionicons` (from `@expo/vector-icons`) to your bottom tabs.
    *   Ensure headers are managed appropriately (e.g., `headerShown: false` on the `Tab.Screen` if the nested `StackNavigator` handles headers).
    *   Add a button on `HomeScreen` to navigate to `DetailScreen` (within its own stack).
    *   Add a button on `FeedScreen` to open the drawer (this will require careful navigation to the parent drawer).

**Code Template:**
```javascript
// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// --- Screen Components ---
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to Home Detail" onPress={() => navigation.navigate('HomeDetail')} />
    </View>
  );
}
function HomeDetailScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Detail Screen</Text>
    </View>
  );
}
function FeedScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Feed Screen</Text>
      {/* How to open drawer from here? Hint: use `navigation.openDrawer()` but ensure context */}
      {/* You might need `useNavigation` hook from '@react-navigation/native' if this screen is deeply nested */}
    </View>
  );
}
function ProfileSettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile Settings</Text>
    </View>
  );
}
function AppPreferencesScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>App Preferences</Text>
    </View>
  );
}

// --- Navigators ---
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Overview' }} />
      <HomeStack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'Home Item' }} />
    </HomeStack.Navigator>
  );
}

const SettingsDrawer = createDrawerNavigator();
function SettingsDrawerScreen() {
  return (
    <SettingsDrawer.Navigator>
      <SettingsDrawer.Screen name="Profile" component={ProfileSettingsScreen} />
      <SettingsDrawer.Screen name="Preferences" component={AppPreferencesScreen} />
    </SettingsDrawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'FeedTab') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'SettingsTab') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide header for the tab navigator itself
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="FeedTab" component={FeedScreen} options={{ title: 'Feed' }} />
      <Tab.Screen name="SettingsTab" component={SettingsDrawerScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="MainApp" component={MainAppTabs} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
```

#### Assessment idea
1.  **Question:** You are designing a mobile app for a news publication. The app needs to display "Latest News," "Categories," "Saved Articles," and "User Profile" as main sections. Additionally, there's a "Contact Us" and "About" page that are less frequently accessed. Which `react-navigation` navigators would you choose for the main sections and the less-accessed pages, and why?
    **Answer:** For the main sections ("Latest News," "Categories," "Saved Articles," "User Profile"), a `BottomTabNavigator` would be the most appropriate choice. This is because these are primary, frequently accessed sections of the app, and a bottom tab bar provides quick, persistent access to them, making it easy for users to switch between main functionalities.
    For the less frequently accessed pages ("Contact Us," "About"), a `DrawerNavigator` would be suitable. These pages are typically secondary or utility-focused and don't require constant visibility. Placing them in a drawer menu keeps the main UI clean while still making them accessible when needed. Each tab in the `BottomTabNavigator` could then contain its own `StackNavigator` to manage the navigation history within that specific section.

2.  **Question:** You have a `BottomTabNavigator` where one of the tabs is named "DashboardTab" and its component is a `StackNavigator` called `DashboardStackScreen`. Inside `DashboardStackScreen`, there's a screen named "Analytics". From another tab's screen (e.g., "SettingsTab"), how would you navigate directly to the "Analytics" screen within the "DashboardTab" stack?
    **Answer:** To navigate to a screen within a nested navigator from a different navigator, you need to specify the target navigator's name and then the screen name within that navigator.
    The correct navigation call would be:
    ```javascript
    navigation.navigate('DashboardTab', { screen: 'Analytics' });
    ```
    Here, `'DashboardTab'` refers to the `name` of the `Tab.Screen` that contains the `DashboardStackScreen`. The `{ screen: 'Analytics' }` object then tells the `DashboardTab` navigator to navigate to its child screen named `'Analytics'`. This syntax is crucial for navigating across different navigation contexts.

#### AI generation note
Create a 15-minute mixed-format lesson. Begin with a 5-minute animated diagram explaining when to use Tab vs. Drawer navigators, showing user flow examples. Then, transition to a 10-minute live coding demo. Implement a `BottomTabNavigator` with three tabs (Home, Feed, Settings). Make the "Settings" tab a `DrawerNavigator` with two screens. Show how to add `Ionicons` to tabs and how to nest the `Home` tab within its own `StackNavigator`. Demonstrate navigation between tabs and opening the drawer. Use a split-screen view for the live coding. Include a reflection prompt asking learners to consider which navigator pattern would suit a specific app idea they have.

---

### Chapter 4.4 — Advanced Navigation Patterns and Authentication Flow

#### Learning objectives
*   Implement a conditional rendering strategy for navigators based on user authentication status.
*   Manage authentication state (login/logout) to dynamically switch between authentication and main app navigators.
*   Utilize `navigation.reset()` for clearing navigation history during critical state changes (e.g., logout).
*   Understand the basic concept of deep linking and how `react-navigation` handles it.
*   Leverage `useNavigation` and `useRoute` hooks for accessing navigation props in non-screen components.

#### Detailed lesson content
As your applications become more sophisticated, you'll encounter scenarios that require more advanced navigation techniques. One of the most common and critical patterns is managing the **authentication flow**. Most apps have distinct experiences for logged-in and logged-out users. For instance, a user who isn't logged in should only see a login/signup screen, while a logged-in user should see the main application content (tabs, drawer, etc.). `react-navigation` allows you to achieve this by conditionally rendering different sets of navigators based on your application's authentication state.

The core idea is to have two separate top-level navigators: an `AuthNavigator` (containing screens like Login, Signup, Forgot Password) and an `AppNavigator` (containing your main app screens like Home, Profile, Feed, possibly nested tabs/drawers). Your root `App` component then determines which of these navigators to render based on whether a user is authenticated. This authentication state is typically managed globally, perhaps using React Context, Redux, or a simple `useState` hook for demonstration purposes.

Let's outline a simplified authentication flow:
```javascript
// App.js (Root component)
import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthContext'; // Assume this context exists

// --- Auth Screens ---
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

// --- Main App Navigators (e.g., your TabNavigator from previous chapter) ---
import MainAppNavigator from './navigators/MainAppNavigator'; // This would be your Tab/Drawer/Stack combo

const AuthStack = createStackNavigator();
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null); // Represents authentication state

  // In a real app, you'd check AsyncStorage or an API for a token
  useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        // Restore token from storage or check session
        token = null; // For demo, assume no token initially
      } catch (e) {
        // Restoring token failed
      }
      setUserToken(token);
      setIsLoading(false);
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      // In a real app, send data to API, get token
      setUserToken('dummy-auth-token');
    },
    signOut: () => setUserToken(null),
    signUp: async (data) => {
      // In a real app, register user, get token
      setUserToken('dummy-auth-token');
    },
  }), []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken == null ? (
          // No token found, user isn't signed in
          <AuthStackNavigator />
        ) : (
          // User is signed in
          <MainAppNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
In this `App.js`, `userToken` determines which navigator is rendered. When a user signs in, `setUserToken` updates, causing `MainAppNavigator` to render. When they sign out, `setUserToken(null)` causes `AuthStackNavigator` to render.

Crucially, when a user logs out, you often want to clear the entire navigation history of the main app and reset the stack to the authentication flow. This prevents the user from pressing "back" and landing on a screen they shouldn't have access to. The `navigation.reset()` method is perfect for this. It replaces the current navigation state with a new one.
```javascript
// Example Logout button in MainAppNavigator
import { useNavigation } from '@react-navigation/native'; // Hook for non-screen components

function ProfileScreen() {
  const navigation = useNavigation();
  const { signOut } = React.useContext(AuthContext);

  const handleLogout = () => {
    signOut(); // Update auth state
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }], // 'Auth' would be the name of your AuthStackNavigator in the root
    });
  };

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
```
The `navigation.reset()` method takes an object with `index` (the active route index) and `routes` (an array of route objects that will form the new stack). For a logout, you typically reset to a single route pointing to your authentication navigator.

Another advanced concept is **Deep Linking**. This allows your app to respond to external URLs or universal links, opening specific screens within your app. For example, clicking `myapp://products/123` might open the `ProductDetailScreen` for product ID `123`. `react-navigation` provides a `linking` prop for `NavigationContainer` to configure this. It maps URL paths to screen names and parameters.
```javascript
// In App.js, within NavigationContainer
const linking = {
  prefixes: ['myapp://', 'https://www.myapp.com'], // Universal links
  config: {
    screens: {
      MainApp: { // Name of your MainAppNavigator
        path: 'app',
        screens: {
          HomeTab: { // Name of your HomeTab in MainAppNavigator
            path: 'home',
            screens: {
              HomeDetail: 'product/:productId', // Maps to HomeStackScreen's HomeDetail
            },
          },
          // ... other tabs/screens
        },
      },
      Auth: { // Name of your AuthStackNavigator
        path: 'auth',
        screens: {
          SignIn: 'login',
        },
      },
    },
  },
};

<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
  {/* ... navigators */}
</NavigationContainer>
```
Finally, for components that are *not* screen components (e.g., a custom header component, a utility component nested deep in the UI tree), you might still need access to the `navigation` or `route` objects. The `useNavigation()` and `useRoute()` hooks from `@react-navigation/native` provide this functionality. `useNavigation()` returns the `navigation` prop of the nearest navigator, and `useRoute()` returns the `route` prop of the current screen. These hooks are invaluable for decoupling components from direct prop drilling.

Common mistakes in authentication flows include not clearing sensitive data on logout, failing to use `navigation.reset()` which can lead to users navigating back into restricted areas, or issues with asynchronous token retrieval leading to UI flashes or incorrect navigator rendering. Always ensure your authentication state management is robust and handles loading states gracefully.

#### Key concepts
*   **Authentication Flow:** The process of managing user login, signup, and logout, often involving conditional rendering of different navigators.
*   **Conditional Navigator Rendering:** Displaying either an `AuthNavigator` or an `AppNavigator` based on the user's authentication status.
*   **`navigation.reset()`:** A method used to replace the entire navigation state, effectively clearing the history and resetting the stack to a specified set of routes.
*   **Deep Linking:** The ability for an application to open to a specific screen based on a URL or universal link from outside the app.
*   **`linking` prop:** A prop on `NavigationContainer` used to configure deep linking by mapping URL patterns to screen names.
*   **`useNavigation()` Hook:** A React hook from `@react-navigation/native` that provides access to the `navigation` object in any component, not just screen components.
*   **`useRoute()` Hook:** A React hook from `@react-navigation/native` that provides access to the `route` object (including `params`) in any component.

#### Hands-on activity
**Implement an Authentication Switcher**

Build a simplified authentication flow:
1.  **`AuthContext`:** Create a simple React Context (`AuthContext.js`) to manage `userToken` and provide `signIn`, `signOut`, `signUp` functions.
2.  **`SignInScreen`:** Create a `SignInScreen` with a button that calls `signIn()` from `AuthContext`.
3.  **`MainAppScreen` (Placeholder):** Create a `MainAppScreen` (this could be your `TabNavigator` from the previous activity, or a simple `Text` component for now) that displays "Welcome, Authenticated User!" and a "Logout" button.
4.  **Conditional Rendering:** In your `App.js`, use `useState` for `userToken` and conditionally render either an `AuthStackNavigator` (containing `SignInScreen`) or your `MainAppScreen` within `NavigationContainer`.
5.  **Logout with Reset:** When the "Logout" button is pressed in `MainAppScreen`, call `signOut()` from `AuthContext` and then use `navigation.reset()` to navigate back to the `SignIn` screen, clearing the main app's history.
6.  **`useNavigation` Hook:** In your `SignInScreen`, add a button to navigate to a `SignUpScreen`. Since `SignInScreen` is a direct child of `AuthStackNavigator`, it receives `navigation` as a prop. However, for practice, try to create a *separate component* (e.g., `AuthFooter`) within `SignInScreen` that contains a "Sign Up" button and uses `useNavigation()` to navigate to `SignUpScreen`.

**Code Template:**
```javascript
// AuthContext.js
import React from 'react';
export const AuthContext = React.createContext();

// screens/SignInScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext';
import { useNavigation } from '@react-navigation/native'; // For AuthFooter example

function AuthFooter() {
  const navigation = useNavigation();
  return (
    <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
  );
}

export default function SignInScreen() {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Sign In</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <AuthFooter /> {/* Using useNavigation hook here */}
    </View>
  );
}

// screens/SignUpScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext';

export default function SignUpScreen() {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Sign Up</Text>
      <Button title="Register" onPress={() => signUp()} />
    </View>
  );
}

// screens/MainAppScreen.js (This will be the component rendered when authenticated)
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function MainAppScreen() {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation(); // Get navigation object

  const handleLogout = () => {
    signOut();
    // Reset the navigation stack to the Auth screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }], // 'Auth' is the name of the AuthStackNavigator in App.js
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome, Authenticated User!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

// App.js
import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './AuthContext';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainAppScreen from './screens/MainAppScreen'; // Your main app content

const AuthStack = createStackNavigator();
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null); // null for logged out, string for logged in

  useEffect(() => {
    // Simulate checking for a token on app start
    setTimeout(() => {
      // For demo: userToken remains null, so it starts logged out
      setIsLoading(false);
    }, 1000);
  }, []);

  const authContext = useMemo(() => ({
    signIn: async () => {
      // Simulate API call
      setTimeout(() => {
        setUserToken('dummy-auth-token');
      }, 500);
    },
    signOut: () => {
      setUserToken(null);
    },
    signUp: async () => {
      // Simulate API call
      setTimeout(() => {
        setUserToken('dummy-auth-token');
      }, 500);
    },
  }), []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken == null ? (
          <AuthStackNavigator />
        ) : (
          <MainAppScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
```

#### Assessment idea
1.  **Question:** Describe the purpose of `navigation.reset()` in the context of an authentication flow. Why is it generally preferred over `navigation.navigate()` for a logout action?
    **Answer:** The purpose of `navigation.reset()` in an authentication flow, particularly during a logout action, is to completely clear the entire navigation history of the authenticated part of the application and replace it with a new, clean navigation state, typically pointing back to the authentication screens. This is crucial for security and user experience. It's preferred over `navigation.navigate()` because `navigation.navigate()` would simply push the login screen onto the existing stack. If `navigate` were used, a user could press the "back" button from the login screen and potentially return to sensitive screens of the logged-in app, which is a significant security vulnerability and a confusing user experience. `reset` ensures that there is no accessible history of the previous authenticated session.

2.  **Question:** You have a custom `Header` component that is not a screen component but needs to display the current screen's title and provide a button to navigate back. How would you access the current screen's title and the `navigation` object within this `Header` component? Provide a code snippet.
    **Answer:** You would use the `useRoute()` hook to get the current screen's title (from `route.name` or `route.params` if dynamically set) and the `useNavigation()` hook to get the `navigation` object.
    **Code Snippet:**
    ```javascript
    import React from 'react';
    import { View, Text, Button, StyleSheet } from 'react-native';
    import { useNavigation, useRoute } from '@react-navigation/native';

    function CustomHeader() {
      const navigation = useNavigation();
      const route = useRoute(); // Accesses the route object of the current screen

      // The title might be set in screen options or derived from route.name/params
      const screenTitle = route.params?.title || route.name;

      return (
        <View style={styles.headerContainer}>
          {navigation.canGoBack() && ( // Check if there's a screen to go back to
            <Button title="< Back" onPress={() => navigation.goBack()} />
          )}
          <Text style={styles.headerTitle}>{screenTitle}</Text>
          {/* Potentially other header elements */}
        </View>
      );
    }

    const styles = StyleSheet.create({
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingTop: 40, // Adjust for status bar
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
    ```

#### AI generation note
Create a 15-minute live coding video. Start by setting up `AuthContext` and `useState` for `userToken`. Implement `AuthStackNavigator` (SignIn, SignUp) and a placeholder `MainAppScreen`. Demonstrate conditional rendering in `App.js` based on `userToken`. Show a login flow that sets `userToken` and switches to `MainAppScreen`. Then, implement a logout button in `MainAppScreen` that calls `signOut()` and uses `navigation.reset()` to return to `SignInScreen`. Visually emphasize the stack clearing in the simulator. Finally, demonstrate using `useNavigation()` and `useRoute()` within a non-screen component (e.g., a custom header or footer). Include a 2-question interactive quiz about `navigation.reset()` and `useNavigation()`/`useRoute()`.

---

## Module 5: Accessing Device Features & Backend Communication

This module delves into expanding your React Native applications beyond basic UI, enabling them to interact with the device's native capabilities and communicate with external services. You'll learn how to integrate features like the camera, photo library, and location services, as well as how to perform network requests to backend APIs for data retrieval and user authentication. Mastering these skills is crucial for building truly dynamic and feature-rich mobile applications.

### Chapter 5.1 — Accessing the Device Camera and Photo Library

#### Learning objectives
*   Understand the necessary permissions and configuration for accessing device media.
*   Implement `expo-image-picker` to allow users to select images from their photo library.
*   Integrate `expo-camera` to enable users to capture new photos directly within the app.
*   Display selected or captured images within a React Native component.
*   Handle potential errors and user cancellations during media access.

#### Detailed lesson content
Modern mobile applications often require interaction with the device's native hardware, and the camera and photo library are among the most frequently accessed features. React Native, particularly when leveraging the Expo ecosystem, provides straightforward ways to integrate these capabilities. The `expo-image-picker` library allows your users to select existing images or videos from their device's media library, while `expo-camera` empowers your app to utilize the device's camera to capture new photos or record videos. Both are essential tools for building social media apps, profile picture uploads, document scanning, or any application requiring visual input.

Before diving into the code, it's crucial to understand the concept of permissions. Mobile operating systems like iOS and Android are designed with user privacy in mind. This means your application cannot simply access sensitive features like the camera or photo library without explicit user consent. When you use `expo-image-picker` or `expo-camera`, these libraries automatically handle the native permission requests for you. However, as a developer, you must be prepared to gracefully handle scenarios where the user denies permission. A common mistake is to assume permissions will always be granted, leading to crashes or non-functional features if they aren't. Always check the permission status before attempting to access the hardware. For instance, `expo-image-picker` provides functions like `requestCameraPermissionsAsync()` and `requestMediaLibraryPermissionsAsync()` which return an object indicating the current permission status. You should check the `status` property of this object; if it's not `granted`, you should inform the user why the feature is needed and guide them to enable it in their device settings.

Let's begin with `expo-image-picker`. After installing it with `expo install expo-image-picker`, you can import it and use its `launchImageLibraryAsync` method. This method opens the device's photo library, allowing the user to browse and select an image. It returns a promise that resolves to an object containing information about the selected asset, such as its URI, width, height, and potentially base64 data if requested. A critical aspect here is the `allowsEditing` option, which, when set to `true`, enables a basic cropping tool, improving the user experience for profile pictures or specific image dimensions. Remember to always wrap your image picker calls in a `try...catch` block to handle unexpected errors, although the library itself is quite robust. The `launchImageLibraryAsync` function also returns a `cancelled` property, which you must check. If `cancelled` is `true`, the user closed the picker without selecting an image, and your app should simply continue without processing any image.

For capturing new photos, `expo-camera` offers a powerful and flexible API. Unlike `expo-image-picker`, which is a single function call, `expo-camera` involves rendering a `Camera` component in your application. This component acts as a live viewfinder. Within this component, you can add buttons to trigger actions like `takePictureAsync()`. Similar to the image picker, camera access requires permissions, which you can request using `Camera.requestCameraPermissionsAsync()`. When a picture is taken, `takePictureAsync()` returns an object similar to `launchImageLibraryAsync`, containing the URI of the captured image. A common practical scenario involves displaying a preview of the captured image immediately after it's taken, giving the user a chance to accept or retake it. You can achieve this by storing the image URI in your component's state and rendering an `Image` component with that URI. Safety note: When dealing with user-generated content, especially images, always consider how you will store, display, and potentially upload these images securely. If uploading to a backend, ensure proper authentication and authorization, and sanitize any metadata. Avoid storing sensitive information directly in image metadata without encryption.

Consider an application where users can upload a profile picture. You'd typically present two options: "Choose from Library" and "Take Photo." Each option would trigger the respective `expo-image-picker` or `expo-camera` functionality. After a successful selection or capture, you would update your component's state with the image URI, display a preview, and then offer an "Upload" button to send the image to a backend server. The URI returned by both functions is a local file path on the device. To display it, you simply pass it to the `source` prop of an `Image` component: `<Image source={{ uri: selectedImageUri }} style={styles.image} />`. If you need to upload this image to a server, you'll typically use `FormData` to send the image file along with other data in a multipart/form-data request. This involves reading the file from the URI and appending it to the `FormData` object.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

export default function ImagePickerAndCamera() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');

      const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    if (!mediaLibraryPermission) {
      Alert.alert('Permission required', 'Please grant media library access to pick an image.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const takePhoto = async () => {
    if (!cameraPermission) {
      Alert.alert('Permission required', 'Please grant camera access to take a photo.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  if (cameraPermission === null || mediaLibraryPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (cameraPermission === false && mediaLibraryPermission === false) {
    return <View><Text>No access to camera or media library.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a photo" onPress={takePhoto} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
```
This example demonstrates how to request permissions and then use both `launchImageLibraryAsync` and `launchCameraAsync` to get an image. Notice how the permissions are requested once on component mount and how the `selectedImage` state is used to display the chosen image. This foundational knowledge will allow you to integrate rich media experiences into your React Native applications.

#### Key concepts
*   **Permissions (iOS/Android):** User consent required for apps to access sensitive device features like camera or photo library.
*   **`expo-image-picker`:** An Expo library for selecting images or videos from the device's media library.
*   **`launchImageLibraryAsync()`:** Function from `expo-image-picker` to open the photo library.
*   **`expo-camera`:** An Expo library for accessing the device's camera to capture photos or videos.
*   **`Camera` component:** A React Native component from `expo-camera` that renders a live camera feed.
*   **`takePictureAsync()`:** Method on the `Camera` component to capture a photo.
*   **Image URI:** A local file path or remote URL pointing to an image asset, used by the `Image` component.
*   **`cancelled` property:** A boolean indicating if the user closed the picker/camera without selecting/capturing.

#### Hands-on activity
**Activity: Profile Picture Uploader**

Build a simple screen that allows a user to set their profile picture. The screen should have two buttons: "Select from Gallery" and "Take New Photo". After an image is selected or captured, display a preview of the image in an `Image` component. Include a placeholder image if no profile picture has been set yet. Ensure that permission requests are handled gracefully, displaying an alert if permissions are denied.

**Starter Code:**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Button, Image, Alert, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera'; // You'll need to install expo-camera if you haven't

export default function ProfilePictureScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

  useEffect(() => {
    // TODO: Request camera and media library permissions here
    // Set cameraPermission and mediaLibraryPermission state based on status
  }, []);

  const handlePickImage = async () => {
    // TODO: Implement image picking from gallery using ImagePicker.launchImageLibraryAsync
    // Handle permissions, user cancellation, and update profileImage state
  };

  const handleTakePhoto = async () => {
    // TODO: Implement taking a new photo using ImagePicker.launchCameraAsync
    // Handle permissions, user cancellation, and update profileImage state
  };

  if (cameraPermission === null || mediaLibraryPermission === null) {
    return <View style={styles.container}><Text>Loading permissions...</Text></View>;
  }
  if (cameraPermission === false && mediaLibraryPermission === false) {
    return <View style={styles.container}><Text>Permissions not granted. Cannot access camera or photos.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Profile Picture</Text>
      <View style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text>No Image</Text>
          </View>
        )}
      </View>
      <Button title="Select from Gallery" onPress={handlePickImage} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Take New Photo" onPress={handleTakePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imageContainer: {
    marginBottom: 30,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

#### Assessment idea
1.  **Question:** A user reports that they can't select an image from their gallery in your React Native app. You've used `expo-image-picker` and confirmed it's installed. What is the most likely reason for this issue, and how would you debug it?
    **Answer:** The most likely reason is that the app doesn't have the necessary media library permissions. To debug, first, check the `mediaLibraryPermission` state in your component (or the result of `ImagePicker.requestMediaLibraryPermissionsAsync()`). If it's `false` or `null`, the permission was denied or not yet requested. You should display an `Alert` to the user explaining that permission is required and guide them to their device settings to enable it. On iOS, you also need to ensure `NSPhotoLibraryUsageDescription` is present in your `Info.plist` (handled automatically by Expo in `app.json` for managed workflow).
2.  **Question:** You want to allow users to take a photo and immediately crop it to a square aspect ratio before displaying it. How would you configure `expo-image-picker` or `expo-camera` to achieve this?
    **Answer:** Both `ImagePicker.launchImageLibraryAsync()` and `ImagePicker.launchCameraAsync()` accept an options object. To enable cropping and specify an aspect ratio, you would set `allowsEditing: true` and `aspect: [1, 1]` (for a square) within this options object. For example:
    ```javascript
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Enable cropping
      aspect: [1, 1],     // Set aspect ratio to square
      quality: 1,
    });
    ```

#### AI generation note
Create a 12-minute interactive video tutorial. Start by explaining the importance of permissions. Then, live-code a React Native component that uses `expo-image-picker` to select an image from the gallery, showing the permission request flow and how to handle `cancelled` status. Follow up by integrating `expo-camera` to take a new photo, demonstrating the `Camera` component and `takePictureAsync()`. Use a split-screen view for code and a simulated mobile device showing the UI and image selection/capture process. Emphasize common mistakes like not checking permissions or `cancelled` status. Include a short interactive quiz at the end asking about permission handling.

### Chapter 5.2 — Working with Device Location and Maps

#### Learning objectives
*   Understand the different types of location permissions and their implications for user privacy.
*   Implement `expo-location` to request and obtain the device's current geographical coordinates.
*   Subscribe to real-time location updates for tracking user movement.
*   Display geographical data using a map component, specifically `react-native-maps`.
*   Handle location errors, permission denials, and GPS availability gracefully.

#### Detailed lesson content
Location services are a cornerstone of many modern mobile applications, from ride-sharing and delivery apps to fitness trackers and social platforms. React Native provides robust ways to access a device's geographical position, primarily through the `expo-location` library within the Expo ecosystem. This library abstracts away the complexities of native platform APIs, offering a unified interface for requesting permissions, fetching current location, and subscribing to continuous location updates.

Before any location data can be accessed, your application must obtain the user's permission. This is a critical privacy consideration. There are typically two main types of location permissions: "When in Use" (foreground) and "Always" (background). "When in Use" permission allows your app to access location data only while it's actively open and in the foreground. "Always" permission, on the other hand, grants access even when your app is closed or running in the background. For most common use cases, "When in Use" is sufficient and generally preferred by users due to privacy concerns. Requesting "Always" permission should only be done if absolutely necessary for your app's core functionality (e.g., a navigation app that needs to track location even when the screen is off). `expo-location` provides functions like `requestForegroundPermissionsAsync()` and `requestBackgroundPermissionsAsync()` to handle these requests. Just like with camera permissions, it's vital to check the permission status and inform the user if access is denied, guiding them on how to enable it manually. A common mistake is not explaining *why* location is needed, which can lead to users denying the request.

Once permissions are granted, fetching the current location is straightforward using `expo-location.getCurrentPositionAsync()`. This function returns a promise that resolves to a `LocationObject` containing coordinates (latitude, longitude), altitude, speed, heading, and a timestamp. You can pass options to this function to control the accuracy of the location data (e.g., `accuracy: Location.Accuracy.High`) and the maximum age of a cached position. Keep in mind that higher accuracy often consumes more battery, so choose the appropriate accuracy level for your application's needs. For applications requiring continuous tracking, `expo-location.watchPositionAsync()` is the go-to method. It sets up a listener that calls a provided callback function whenever the device's location changes, allowing you to update your UI or send data to a backend in real-time. Remember to store the subscription object returned by `watchPositionAsync()` and call its `remove()` method when the component unmounts to prevent memory leaks and unnecessary battery drain.

Displaying location data visually is often best achieved using a map component. While Expo provides some basic map integration, `react-native-maps` (developed by Airbnb) is the de facto standard for robust map functionality in React Native. It provides a `MapView` component that acts as a wrapper around native map SDKs (Google Maps on Android, Apple Maps on iOS). To use `react-native-maps` in an Expo project, you'll install it with `expo install react-native-maps`. Once installed, you can render a `MapView` component, providing it with an `initialRegion` prop that defines the initial center coordinates and zoom level. You can also add `Marker` components to highlight specific points of interest on the map, often using the user's current location. A practical scenario might involve displaying the user's current location with a blue dot and then adding markers for nearby points of interest fetched from an API.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'; // Make sure to 'expo install react-native-maps'

export default function LocationAndMapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert(
          'Location Permission Required',
          'Please enable location services for this app in your device settings to use this feature.',
          [{ text: 'OK' }]
        );
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const updateLocation = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    setMapRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Button title="Update Location" onPress={updateLocation} />
      {mapRegion && (
        <MapView
          style={styles.map}
          initialRegion={mapRegion}
          showsUserLocation={true} // Shows a blue dot for the user's location
          onRegionChangeComplete={setMapRegion} // Optional: update region when user moves map
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={"My Location"}
              description={"You are here!"}
            />
          )}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});
```
Common mistakes include not handling the `status` of permission requests, leading to silent failures. Another is failing to include necessary privacy descriptions in `app.json` (for Expo) or `Info.plist`/`AndroidManifest.xml` (for bare React Native projects), which can cause app rejections during store submission. Always ensure your `app.json` includes `NSLocationWhenInUseUsageDescription` (for iOS) and `android.permission.ACCESS_FINE_LOCATION`, `android.permission.ACCESS_COARSE_LOCATION` (for Android) with clear descriptions. Safety note: Location data is highly sensitive. If you're collecting and storing user location, ensure you have a clear privacy policy, obtain explicit consent, and implement robust security measures to protect this data from unauthorized access. Only collect location data that is strictly necessary for your app's functionality.

#### Key concepts
*   **Location Permissions:** User consent required to access device location (Foreground "When in Use", Background "Always").
*   **`expo-location`:** An Expo library for accessing device location services.
*   **`requestForegroundPermissionsAsync()`:** Function to request "When in Use" location permission.
*   **`getCurrentPositionAsync()`:** Function to get a single, current location reading.
*   **`watchPositionAsync()`:** Function to subscribe to continuous location updates.
*   **`LocationObject`:** The object returned by `expo-location` functions, containing `coords` (latitude, longitude, etc.), `timestamp`.
*   **`react-native-maps`:** A popular community library for displaying interactive maps in React Native.
*   **`MapView` component:** The main component from `react-native-maps` for rendering a map.
*   **`Marker` component:** Used within `MapView` to place pins or custom icons at specific coordinates.

#### Hands-on activity
**Activity: "Find Me" Map Application**

Create a React Native screen that displays a map. When the screen loads, it should request foreground location permissions. If granted, it should fetch the user's current location and display it on the map with a `Marker`. Include a button that, when pressed, re-centers the map on the user's current location and updates the marker if the user has moved.

**Starter Code:**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function FindMeMap() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    (async () => {
      // TODO: Request foreground location permissions
      // If granted, set permissionGranted to true and fetch initial location
      // Set currentLocation and mapRegion states
    })();
  }, []);

  const centerMapOnUser = async () => {
    if (!permissionGranted) {
      Alert.alert('Permission Denied', 'Location access is required to center the map.');
      return;
    }
    // TODO: Fetch current location and update mapRegion state
  };

  if (!permissionGranted) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Location permission not granted. Please enable it in settings.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Current Location</Text>
      {currentLocation && (
        <Text style={styles.coordinates}>
          Lat: {currentLocation.coords.latitude.toFixed(4)}, Lon: {currentLocation.coords.longitude.toFixed(4)}
        </Text>
      )}
      {mapRegion && (
        <MapView
          style={styles.map}
          region={mapRegion} // Use region instead of initialRegion to allow updates
          showsUserLocation={true}
          onRegionChangeComplete={(region) => setMapRegion(region)} // Keep mapRegion updated if user pans
        >
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
              }}
              title="You Are Here"
              description="This is your current position."
            />
          )}
        </MapView>
      )}
      <Button title="Recenter Map" onPress={centerMapOnUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coordinates: {
    fontSize: 16,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 400,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
});
```

#### Assessment idea
1.  **Question:** A user reports that their location is not updating on the map in your fitness tracking app, even though they're actively moving. You are using `expo-location.getCurrentPositionAsync()` inside a `useEffect` hook with an empty dependency array. What is the problem, and what function should you use instead?
    **Answer:** The problem is that `getCurrentPositionAsync()` only fetches the location once when the component mounts. For continuous tracking, you need to use `expo-location.watchPositionAsync()`. This function establishes a listener that will invoke a callback every time the device's location changes, providing real-time updates. You would also need to ensure the subscription is cleaned up when the component unmounts.
2.  **Question:** Explain the difference between "When in Use" and "Always" location permissions. When would you typically request "Always" permission, and what are the user experience implications?
    **Answer:** "When in Use" (foreground) permission allows the app to access location data only while it's actively open and visible to the user. "Always" (background) permission grants access even when the app is closed or running in the background. You would typically request "Always" permission for apps whose core functionality relies on continuous background tracking, such as navigation apps, geofencing services, or parental control apps. The user experience implication is that "Always" permission is more intrusive and raises greater privacy concerns, often leading to lower grant rates. Developers should only request it when absolutely necessary and provide a clear, compelling explanation to the user about why it's needed to improve the chances of approval.

#### AI generation note
Produce a 15-minute mixed-media lesson. Start with a slide deck explaining location permission types ("When in Use" vs. "Always") and privacy considerations. Then, transition to a live coding demo where you implement `expo-location.requestForegroundPermissionsAsync()` and `getCurrentPositionAsync()`. Show the location data in a `Text` component. Next, integrate `react-native-maps`, displaying the user's location with a `Marker`. Use a split-screen view for code and a mobile emulator showing the map and location updates. Emphasize how to handle permission denials with `Alert` messages. Conclude with a reflection prompt asking learners to consider ethical implications of location tracking.

### Chapter 5.3 — Storing Data Locally with Async Storage

#### Learning objectives
*   Understand the purpose and limitations of `AsyncStorage` for local data persistence.
*   Implement `expo-async-storage` to store simple key-value pairs asynchronously.
*   Retrieve stored data from `AsyncStorage` and integrate it into component state.
*   Handle common operations like updating and deleting data in `AsyncStorage`.
*   Recognize when `AsyncStorage` is appropriate versus other data storage solutions.

#### Detailed lesson content
In mobile application development, the ability to store data locally on the device is fundamental for improving user experience, enabling offline functionality, and persisting user preferences. `AsyncStorage` serves as a simple, unencrypted, asynchronous, persistent key-value storage system for React Native applications. It's ideal for storing small amounts of data like user settings, session tokens, or cached data that doesn't require a full-fledged database. For Expo projects, the recommended library is `expo-async-storage`, which provides a wrapper around the native `AsyncStorage` implementations for iOS and Android.

The core principle of `AsyncStorage` is its key-value pair structure. You associate a string `key` with a string `value`. Since `AsyncStorage` only stores strings, if you need to store objects or arrays, you must first serialize them into a JSON string using `JSON.stringify()` before saving, and then parse them back into JavaScript objects using `JSON.parse()` after retrieving. This is a common point of confusion and a frequent mistake for beginners. Failing to stringify objects before saving will result in `[object Object]` being stored, making the data unusable upon retrieval. Similarly, forgetting to parse retrieved JSON strings will leave you with a string instead of the desired object.

Storing data is done using `AsyncStorage.setItem(key, value)`. This is an asynchronous operation, meaning it returns a Promise. You should always `await` this Promise or use `.then().catch()` to handle its completion and potential errors. For example, to save a user's theme preference: `await AsyncStorage.setItem('userTheme', 'dark');`. Retrieving data is equally asynchronous, using `AsyncStorage.getItem(key)`. This also returns a Promise that resolves to the stored string value, or `null` if no item exists for that key. A typical pattern involves fetching data from `AsyncStorage` when a component mounts, using `useEffect`, and then setting that data into the component's state. This ensures that your UI reflects any previously saved preferences or data.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // expo install @react-native-async-storage/async-storage

export default function AsyncStorageDemo() {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  useEffect(() => {
    // Load username from AsyncStorage when the component mounts
    const loadUsername = async () => {
      try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
          setStoredUsername(value);
          setUsername(value); // Also set the input field to the stored value
        }
      } catch (e) {
        Alert.alert('Error', 'Failed to load username.');
        console.error('Error loading username:', e);
      }
    };

    loadUsername();
  }, []);

  const saveUsername = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      setStoredUsername(username);
      Alert.alert('Success', 'Username saved!');
    } catch (e) {
      Alert.alert('Error', 'Failed to save username.');
      console.error('Error saving username:', e);
    }
  };

  const removeUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setUsername('');
      setStoredUsername('');
      Alert.alert('Success', 'Username removed!');
    } catch (e) {
      Alert.alert('Error', 'Failed to remove username.');
      console.error('Error removing username:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage Demo</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Save Username" onPress={saveUsername} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Remove Username" onPress={removeUsername} color="red" />
      <View style={{ marginVertical: 20 }} />
      <Text style={styles.storedText}>Stored Username: {storedUsername || 'None'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  storedText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '500',
  },
});
```
Beyond `setItem` and `getItem`, `AsyncStorage` also provides `removeItem(key)` to delete a specific item and `clear()` to remove all items (use with extreme caution!). For more advanced scenarios, `getAllKeys()` can retrieve an array of all stored keys, and `multiSet()`, `multiGet()`, `multiRemove()` allow for batch operations, which can be more efficient for multiple key-value pairs.

While `AsyncStorage` is incredibly useful, it's important to understand its limitations. It's not designed for large amounts of data, complex queries, or relational data. For those needs, you'd typically look into solutions like SQLite databases (e.g., `expo-sqlite`), Realm, or WatermelonDB. Furthermore, `AsyncStorage` is unencrypted, meaning sensitive data like passwords should *never* be stored directly in it. For such highly sensitive information, secure alternatives like `expo-secure-store` (for small, sensitive key-value pairs) or a robust authentication system with token management are essential. Safety note: Always assume data in `AsyncStorage` can be accessed by a determined user with root access to their device. Therefore, never store unencrypted personal identifiable information (PII) or authentication credentials directly. Use it for non-sensitive data or encrypted tokens provided by a secure backend.

#### Key concepts
*   **`AsyncStorage`:** An asynchronous, unencrypted, persistent key-value storage system for React Native.
*   **Key-Value Pair:** Data is stored and retrieved using a unique string `key` associated with a string `value`.
*   **Asynchronous Operations:** All `AsyncStorage` methods return Promises, requiring `await` or `.then().catch()` for proper handling.
*   **`JSON.stringify()`:** Used to convert JavaScript objects/arrays into JSON strings for storage.
*   **`JSON.parse()`:** Used to convert JSON strings retrieved from storage back into JavaScript objects/arrays.
*   **`setItem(key, value)`:** Stores a key-value pair.
*   **`getItem(key)`:** Retrieves the value associated with a key.
*   **`removeItem(key)`:** Deletes a specific key-value pair.
*   **`clear()`:** Deletes all stored data (use with caution).

#### Hands-on activity
**Activity: User Settings Manager**

Create a simple settings screen where users can save their preferred app theme (e.g., 'light' or 'dark') and a personalized greeting message. Use `AsyncStorage` to persist these settings. When the app loads, retrieve the saved settings and display them. Include input fields for the greeting message and a button to toggle the theme, along with a "Save Settings" button and a "Clear All Settings" button.

**Starter Code:**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserSettings() {
  const [greetingMessage, setGreetingMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // TODO: Load greetingMessage and isDarkMode from AsyncStorage when component mounts
    // Remember to parse JSON for isDarkMode if stored as boolean
  }, []);

  const saveSettings = async () => {
    try {
      // TODO: Save greetingMessage and isDarkMode to AsyncStorage
      // Remember to stringify isDarkMode if storing as boolean
      Alert.alert('Success', 'Settings saved!');
    } catch (e) {
      Alert.alert('Error', 'Failed to save settings.');
      console.error(e);
    }
  };

  const clearAllSettings = async () => {
    Alert.alert(
      'Confirm Clear',
      'Are you sure you want to clear all settings?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          onPress: async () => {
            try {
              // TODO: Clear all items from AsyncStorage
              // Reset local state (greetingMessage, isDarkMode)
              Alert.alert('Success', 'All settings cleared!');
            } catch (e) {
              Alert.alert('Error', 'Failed to clear settings.');
              console.error(e);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const themeStyle = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyle.container]}>
      <Text style={[styles.title, themeStyle.text]}>User Settings</Text>

      <Text style={[styles.label, themeStyle.text]}>Greeting Message:</Text>
      <TextInput
        style={[styles.input, themeStyle.input]}
        placeholder="Enter a greeting message"
        value={greetingMessage}
        onChangeText={setGreetingMessage}
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
      />

      <View style={styles.row}>
        <Text style={[styles.label, themeStyle.text]}>Dark Mode:</Text>
        <Switch
          onValueChange={setIsDarkMode}
          value={isDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <Button title="Save Settings" onPress={saveSettings} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Clear All Settings" onPress={clearAllSettings} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
});

const lightStyles = StyleSheet.create({
  container: { backgroundColor: '#f5f5f5' },
  text: { color: '#333' },
  input: { borderColor: '#ccc', backgroundColor: '#fff' },
});

const darkStyles = StyleSheet.create({
  container: { backgroundColor: '#333' },
  text: { color: '#eee' },
  input: { borderColor: '#555', backgroundColor: '#444', color: '#eee' },
});
```

#### Assessment idea
1.  **Question:** You want to store a user's favorite list of items, which is an array of strings `['apple', 'banana', 'cherry']`, in `AsyncStorage`. Write the code snippet to store and retrieve this array correctly.
    **Answer:**
    To store:
    ```javascript
    const favoriteItems = ['apple', 'banana', 'cherry'];
    try {
      await AsyncStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    } catch (e) {
      console.error("Error saving favorite items:", e);
    }
    ```
    To retrieve:
    ```javascript
    try {
      const storedValue = await AsyncStorage.getItem('favoriteItems');
      if (storedValue !== null) {
        const favoriteItems = JSON.parse(storedValue);
        console.log("Retrieved favorite items:", favoriteItems); // Will be ['apple', 'banana', 'cherry']
      }
    } catch (e) {
      console.error("Error retrieving favorite items:", e);
    }
    ```
    Explanation: Since `AsyncStorage` only stores strings, the array must be converted to a JSON string using `JSON.stringify()` before saving. Upon retrieval, `JSON.parse()` is used to convert the JSON string back into a JavaScript array.
2.  **Question:** What are two significant limitations of `AsyncStorage`, and when would you consider using an alternative solution?
    **Answer:**
    1.  **Unencrypted:** Data stored in `AsyncStorage` is not encrypted. This means it's not suitable for highly sensitive information like passwords, credit card numbers, or unencrypted PII, as it could be accessed by a determined user with device root access.
    2.  **Key-Value Only & Performance for Large Data:** While it handles simple objects via JSON serialization, it's not designed for complex data models, relational data, or very large datasets. Performance can degrade with many items or large values.
    You would consider an alternative solution like `expo-secure-store` for small amounts of sensitive data (like authentication tokens). For large, structured, or relational data, or when complex queries are needed, a local database solution like `expo-sqlite`, Realm, or WatermelonDB would be more appropriate.

#### AI generation note
Design an 11-minute interactive lab walkthrough. Begin by explaining `AsyncStorage`'s purpose and the string-only limitation. Then, guide learners through implementing `AsyncStorage.setItem()` and `AsyncStorage.getItem()` for a simple text input field, showing how to persist and retrieve the text across app restarts. Next, demonstrate storing and retrieving a boolean (e.g., dark mode preference) using `JSON.stringify()` and `JSON.parse()`. Include a step-by-step code demonstration with console logs to show data types. Conclude with a mini-quiz on correct JSON serialization.

### Chapter 5.4 — Making HTTP Requests to Backend APIs

#### Learning objectives
*   Understand the fundamentals of HTTP requests (GET, POST, PUT, DELETE) and their use in client-server communication.
*   Utilize the native `fetch` API in React Native to send and receive data from RESTful APIs.
*   Implement `async/await` syntax for handling asynchronous network operations cleanly.
*   Manage loading states and error handling for network requests within React Native components.
*   Understand basic API response structures and how to parse JSON data.

#### Detailed lesson content
The true power of a mobile application often comes from its ability to communicate with backend servers, fetching dynamic content, submitting user data, and interacting with external services. This communication primarily happens via HTTP requests to Application Programming Interfaces (APIs). In React Native, the `fetch` API, a global function available in modern JavaScript environments, is the standard way to make these network requests. It's a promise-based mechanism that provides a powerful and flexible way to interact with web servers.

Understanding HTTP methods is crucial for effective API communication. The most common methods are:
*   **GET:** Used to retrieve data from the server. It should not have side effects on the server. Examples: fetching a list of products, getting user profile details.
*   **POST:** Used to submit new data to the server. Examples: creating a new user, submitting a form.
*   **PUT:** Used to update existing data on the server. It typically replaces the entire resource. Examples: updating a user's entire profile.
*   **PATCH:** Used to partially update existing data on the server. Examples: updating only a user's email address.
*   **DELETE:** Used to remove data from the server. Examples: deleting a product, removing a user account.

When making a `fetch` request, you pass the URL of the API endpoint as the first argument. For `GET` requests, this is often sufficient. For other methods (POST, PUT, DELETE), you'll typically pass a second argument: an options object. This object allows you to specify the HTTP method, headers (like `Content-Type` or `Authorization`), and a request body. A common mistake is forgetting to set the `Content-Type` header to `application/json` when sending JSON data in a `POST` or `PUT` request. Without this header, the server might not correctly parse your request body.

The `fetch` API returns a Promise that resolves to a `Response` object. This `Response` object contains information about the server's response, such as its status code (e.g., 200 for success, 404 for not found, 500 for server error) and headers. To access the actual data (e.g., JSON), you need to call another method on the `Response` object, such as `response.json()` for JSON data, or `response.text()` for plain text. These methods also return Promises, so you'll often chain them. Using `async/await` syntax makes this process much cleaner and more readable than traditional `.then()` chaining, especially when dealing with multiple asynchronous operations.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, FlatList, Alert } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // A public API for testing

export default function APIRequestDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) { // Check if HTTP status is 2xx
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (e) {
      setError(e.message);
      Alert.alert('Error', `Failed to fetch posts: ${e.message}`);
      console.error('Fetch error:', e);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    setLoading(true);
    setError(null);
    try {
      const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      Alert.alert('Success', `New post created with ID: ${data.id}`);
      // Optionally re-fetch all posts to show the new one, or add it to state
      fetchPosts();
    } catch (e) {
      setError(e.message);
      Alert.alert('Error', `Failed to create post: ${e.message}`);
      console.error('Create post error:', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Retry" onPress={fetchPosts} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts from JSONPlaceholder</Text>
      <Button title="Create New Post" onPress={createPost} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  postItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});
```
It's crucial to manage the state of your component during network requests. Typically, you'll have a `loading` state (e.g., `useState(true)`) to show an `ActivityIndicator` while data is being fetched, and an `error` state (`useState(null)`) to display error messages if something goes wrong. Always include a `try...catch` block around your `fetch` calls to gracefully handle network errors (like no internet connection) or API-specific errors. Furthermore, it's good practice to check the `response.ok` property (which is `true` for 2xx status codes) before attempting to parse the JSON. If `response.ok` is `false`, it indicates an HTTP error, and you should throw an error to be caught by your `catch` block.

While `fetch` is built-in, some developers prefer libraries like `axios` for their additional features, such as automatic JSON transformation, request/response interceptors, and better error handling defaults. However, for most basic to intermediate use cases, `fetch` is perfectly capable and avoids adding an extra dependency. Safety note: When making requests to your own backend, always use HTTPS to encrypt data in transit. Never hardcode sensitive API keys directly into your client-side code, especially if they grant extensive permissions. Instead, use a backend proxy or environment variables that are not exposed in the client bundle. Be mindful of Cross-Origin Resource Sharing (CORS) policies if your API is hosted on a different domain than your web app (though less of an issue for native mobile apps, it can affect web-based Expo builds).

#### Key concepts
*   **HTTP Methods (GET, POST, PUT, DELETE):** Standard actions for interacting with web resources.
*   **API (Application Programming Interface):** A set of rules and protocols for building and interacting with software applications.
*   **`fetch` API:** A native JavaScript API for making network requests, returning Promises.
*   **`Response` object:** The object returned by `fetch`, containing status, headers, and methods to parse the body (e.g., `json()`).
*   **`async/await`:** JavaScript syntax for writing asynchronous code that looks and behaves like synchronous code, making Promises easier to work with.
*   **`Content-Type` header:** An HTTP header specifying the format of the request or response body (e.g., `application/json`).
*   **Loading State:** A UI state (often using `ActivityIndicator`) to inform the user that data is being fetched.
*   **Error Handling:** Mechanisms (e.g., `try...catch`, checking `response.ok`) to gracefully manage network or API errors.

#### Hands-on activity
**Activity: Simple Todo List with API**

Build a simple screen that fetches a list of todos from a public API (e.g., `https://jsonplaceholder.typicode.com/todos`). Display these todos in a `FlatList`. Include a loading indicator while fetching and an error message if the fetch fails. Add a button to "Add New Todo" which makes a `POST` request to the same API with a dummy todo item (e.g., `{ title: 'New Todo', completed: false, userId: 1 }`). After adding, re-fetch the list to show the updated data (note: `jsonplaceholder` is a fake API, so the POST won't actually persist, but it will return a new item with an ID, simulating success).

**Starter Code:**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';

const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default function TodoListApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Implement GET request to TODO_API_URL
      // Check response.ok, parse JSON, and update todos state
    } catch (e) {
      setError(e.message);
      Alert.alert('Error', `Failed to fetch todos: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    setLoading(true);
    setError(null);
    try {
      const newTodo = {
        title: 'Learn React Native APIs',
        completed: false,
        userId: 1,
      };
      // TODO: Implement POST request to TODO_API_URL
      // Set Content-Type header and JSON.stringify the body
      // Check response.ok, parse JSON, and then call fetchTodos() to refresh the list
      Alert.alert('Success', 'Todo added (simulated)!');
    } catch (e) {
      setError(e.message);
      Alert.alert('Error', `Failed to add todo: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading todos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Retry" onPress={fetchTodos} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <Button title="Add New Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text style={item.completed ? styles.completedText : styles.pendingText}>
              {item.completed ? 'Completed' : 'Pending'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  completedText: {
    color: 'green',
    fontWeight: 'bold',
  },
  pendingText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});
```

#### Assessment idea
1.  **Question:** You are making a `POST` request to an API endpoint to create a new user. The server expects the user data as a JSON object in the request body. You've written the following `fetch` call:
    ```javascript
    const userData = { name: 'John Doe', email: 'john@example.com' };
    fetch('https://api.example.com/users', {
      method: 'POST',
      body: userData, // PROBLEM HERE
    });
    ```
    Identify two critical issues with this code snippet that would prevent the request from working correctly.
    **Answer:**
    1.  **`body` must be a string:** The `body` property of a `fetch` request must be a string (or a `FormData` object, `Blob`, etc.). Directly passing a JavaScript object like `userData` will not work. It needs to be converted to a JSON string using `JSON.stringify(userData)`.
    2.  **Missing `Content-Type` header:** When sending JSON data, the `Content-Type` header must be set to `application/json`. Without this, the server won't know how to correctly parse the incoming data, often leading to a 400 Bad Request error.
    Corrected code:
    ```javascript
    const userData = { name: 'John Doe', email: 'john@example.com' };
    fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Added Content-Type header
      },
      body: JSON.stringify(userData), // Stringified the body
    });
    ```
2.  **Question:** Explain how `async/await` improves the readability and maintainability of network request code compared to traditional Promise `.then()` chaining.
    **Answer:** `async/await` allows you to write asynchronous code in a sequential, synchronous-like manner. Instead of chaining multiple `.then()` callbacks, each returning a new Promise, `await` pauses the execution of the `async` function until the Promise resolves, and then unwraps its value. This eliminates "callback hell" and makes the flow of control much easier to follow, especially when dealing with multiple sequential asynchronous operations or error handling with `try...catch` blocks. It results in code that is often more concise, less nested, and mimics the natural way humans read instructions, thus significantly improving readability and maintainability.

#### AI generation note
Create a 14-minute live coding video. Start by explaining the `fetch` API and common HTTP methods. Then, live-code a React Native component that fetches data from `https://jsonplaceholder.typicode.com/users` using `async/await`. Display the users in a `FlatList`. Demonstrate proper loading state management with `ActivityIndicator` and error handling with `try...catch` and `Alert`. Next, add a button to perform a `POST` request to create a dummy user, showing how to set headers and `JSON.stringify` the body. Use a split-screen view for code and a mobile emulator showing the UI and network activity. Conclude with a quick challenge to implement a `DELETE` request.

### Chapter 5.5 — Implementing User Authentication (Token-based)

#### Learning objectives
*   Understand the principles of token-based authentication for securing API access.
*   Implement a user login flow, sending credentials to a backend and receiving an authentication token.
*   Securely store the authentication token using `AsyncStorage` or `expo-secure-store`.
*   Attach the authentication token to subsequent API requests for authorized access.
*   Implement a logout mechanism that clears the token and resets the user's session.

#### Detailed lesson content
User authentication is a critical component of most real-world applications, allowing users to prove their identity and access personalized or protected resources. In mobile applications interacting with backend APIs, token-based authentication has become the de facto standard. Instead of sending username and password with every request, the user logs in once, receives a unique token, and then sends this token with all subsequent requests. This approach is stateless on the server (meaning the server doesn't need to remember session details for each user) and more secure than traditional cookie-based sessions for APIs.

The typical token-based authentication flow involves several steps. First, the user provides their credentials (username/email and password) through a login form in your React Native app. These credentials are then sent to a backend API endpoint (e.g., `/api/login`) via a `POST` request. The backend verifies these credentials against its user database. If valid, the server generates an authentication token (often a JSON Web Token, or JWT) and sends it back to the client in the response. This token is essentially a cryptographically signed string that contains information about the user and their permissions.

Once the token is received by the client, it must be stored securely and persistently. For this, `AsyncStorage` (as discussed in Chapter 5.3) is a common choice for non-highly sensitive tokens, or `expo-secure-store` for more sensitive tokens that require encryption at rest. `expo-secure-store` is specifically designed for storing small, sensitive pieces of data like authentication tokens, API keys, or other secrets, as it leverages native secure storage mechanisms (Keychain on iOS, Keystore on Android). A common mistake is storing tokens in plain JavaScript variables, which would be lost upon app closure or refresh. Persisting the token means the user doesn't have to log in every time they open the app.

After the token is stored, it becomes the "key" to accessing protected API routes. For every subsequent request to a protected endpoint, the authentication token must be included in the request headers, typically in the `Authorization` header with a `Bearer` prefix (e.g., `Authorization: Bearer <your_token_here>`). The backend then intercepts this header, validates the token (checks its signature, expiration, and claims), and if valid, grants access to the requested resource. If the token is missing, invalid, or expired, the backend should respond with a 401 Unauthorized or 403 Forbidden status code, prompting the client to log in again.

```javascript
import React, { useState, useEffect, createContext, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Or expo-secure-store for more security

// --- Auth Context for global token management ---
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken'); // Use SecureStore.getItemAsync for more security
        if (token) {
          setAuthToken(token);
        }
      } catch (e) {
        console.error('Failed to load token:', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadToken();
  }, []);

  const signIn = async (username, password) => {
    setIsLoading(true);
    try {
      // Simulate API call
      const response = await new Promise(resolve => setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve({ ok: true, token: 'fake-jwt-token-12345' });
        } else {
          resolve({ ok: false, message: 'Invalid credentials' });
        }
      }, 1000));

      if (response.ok) {
        await AsyncStorage.setItem('userToken', response.token); // Use SecureStore.setItemAsync
        setAuthToken(response.token);
        return true;
      } else {
        Alert.alert('Login Failed', response.message);
        return false;
      }
    } catch (e) {
      Alert.alert('Error', 'An error occurred during login.');
      console.error('Login error:', e);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('userToken'); // Use SecureStore.deleteItemAsync
      setAuthToken(null);
    } catch (e) {
      console.error('Failed to remove token:', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// --- Login Screen Component ---
function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isLoading } = useAuth();

  const handleLogin = async () => {
    const success = await signIn(username, password);
    if (success) {
      Alert.alert('Success', 'Logged in!');
      // Navigate to authenticated part of the app
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      {isLoading && <ActivityIndicator size="small" color="#0000ff" style={{ marginTop: 10 }} />}
    </View>
  );
}

// --- Protected Screen Component ---
function ProtectedScreen() {
  const { authToken, signOut, isLoading } = useAuth();
  const [protectedData, setProtectedData] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  const fetchProtectedData = async () => {
    setDataLoading(true);
    try {
      // Simulate API call to a protected endpoint
      // In a real app, this would be a fetch call with the Authorization header
      const response = await new Promise(resolve => setTimeout(() => {
        if (authToken) {
          resolve({ ok: true, data: `Welcome, user with token: ${authToken.substring(0, 10)}...` });
        } else {
          resolve({ ok: false, message: 'Unauthorized' });
        }
      }, 1000));

      if (response.ok) {
        setProtectedData(response.data);
      } else {
        Alert.alert('Access Denied', response.message);
        setProtectedData(null);
      }
    } catch (e) {
      Alert.alert('Error', 'Failed to fetch protected data.');
      console.error('Protected data fetch error:', e);
    } finally {
      setDataLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Content</Text>
      {authToken ? (
        <>
          <Text style={styles.loggedInText}>You are logged in!</Text>
          <Button title="Fetch Protected Data" onPress={fetchProtectedData} disabled={dataLoading} />
          {dataLoading && <ActivityIndicator size="small" color="#0000ff" style={{ marginTop: 10 }} />}
          {protectedData && <Text style={styles.protectedDataText}>{protectedData}</Text>}
          <View style={{ marginVertical: 20 }} />
          <Button title="Logout" onPress={signOut} color="red" disabled={isLoading} />
        </>
      ) : (
        <Text>Please log in to view this content.</Text>
      )}
    </View>
  );
}

// --- Main App Component (for demonstration) ---
export default function App() {
  const { authToken, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading app...</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      {authToken ? <ProtectedScreen /> : <LoginScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loggedInText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  protectedDataText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
```
The final step is implementing a logout mechanism. This involves simply removing the stored authentication token from `AsyncStorage` (or `expo-secure-store`) and then updating the application's state to reflect that the user is no longer authenticated. This typically means redirecting the user back to the login screen. It's crucial to handle token expiration. Your backend should send an appropriate status code (e.g., 401) when a token is expired or invalid. Your client-side code should then catch this, clear the token, and prompt the user to re-authenticate. Safety note: Never store passwords directly in `AsyncStorage` or `expo-secure-store`. Only store the token. Ensure your backend uses strong hashing algorithms for passwords and that tokens have a reasonable expiration time. When tokens expire, force re-authentication.

#### Key concepts
*   **Token-based Authentication:** An authentication method where a client receives an access token after login and sends it with subsequent requests.
*   **JSON Web Token (JWT):** A common standard for creating tokens that securely transmit information between parties as a JSON object.
*   **Login Flow:** The sequence of steps from user inputting credentials to receiving and storing an authentication token.
*   **`Authorization` Header:** An HTTP header used to send authentication credentials (e.g., `Bearer <token>`) with a request.
*   **`AsyncStorage` / `expo-secure-store`:** Local storage mechanisms used to persist the authentication token on the device. `expo-secure-store` offers better security for sensitive data.
*   **Protected Routes:** API endpoints that require a valid authentication token for access.
*   **Logout Mechanism:** The process of removing the stored token and invalidating the user's session on the client side.
*   **Token Expiration:** Tokens have a limited lifespan; expired tokens require re-authentication.

#### Hands-on activity
**Activity: Secure Profile Screen**

Build upon the previous `AsyncStorage` and HTTP request knowledge. Create a simple authentication flow:
1.  **Login Screen:** A screen with username and password inputs and a "Login" button. When pressed, it simulates a `POST` request to a fake API (you can use a simple `setTimeout` to mimic network delay and a hardcoded username/password like 'test'/'password'). If successful, it "receives" a dummy token (e.g., `'my-super-secret-token'`).
2.  **Auth Context:** Create a React Context (`AuthContext`) to manage the authentication token globally. This context should store the token in state, provide `signIn` and `signOut` functions, and load the token from `AsyncStorage` (or `expo-secure-store`) on app startup.
3.  **Protected Screen:** A screen that is only visible if `authToken` exists in the `AuthContext`. It should display a "Welcome!" message and a "Logout" button.
4.  **Conditional Rendering:** In your main `App` component, conditionally render either the `LoginScreen` or the `ProtectedScreen` based on the `authToken`'s presence.

**Starter Code:**
Use the provided example code above as a comprehensive starter. Your task is to:
1.  Ensure `AsyncStorage` (or `expo-secure-store`) is correctly installed.
2.  Implement the `AuthProvider` and `useAuth` hook.
3.  Fill in the `signIn` and `signOut` logic within the `AuthProvider` to interact with `AsyncStorage` for token persistence.
4.  Ensure the `App` component correctly uses `AuthContext` to switch between `LoginScreen` and `ProtectedScreen`.
5.  (Optional challenge) Modify `ProtectedScreen` to make a *simulated* `fetch` request to a "protected" endpoint, adding the `authToken` to the `Authorization` header.

#### Assessment idea
1.  **Question:** After a user successfully logs in, your React Native app receives an authentication token from the backend. Explain why it's crucial to store this token persistently and what would happen if you failed to do so. What is the recommended way to store such a token, and why?
    **Answer:** It's crucial to store the token persistently (e.g., using `AsyncStorage` or `expo-secure-store`) so that the user doesn't have to log in every time they close and reopen the app. If the token is not stored persistently, it would be lost when the app is closed or refreshed, forcing the user to re-authenticate, leading to a poor user experience. The recommended way to store a sensitive authentication token is using `expo-secure-store`. This is because `expo-secure-store` leverages native secure storage mechanisms (Keychain on iOS, Keystore on Android) to encrypt the data at rest, providing a higher level of security compared to `AsyncStorage`, which stores data unencrypted.
2.  **Question:** You have a protected API endpoint `/api/profile` that requires an authentication token. You've retrieved the token and stored it in a variable `userToken`. Write a `fetch` request snippet that correctly sends this token to the protected endpoint.
    **Answer:**
    ```javascript
    const userToken = 'your_retrieved_auth_token_here'; // Assume this token is loaded from storage

    const fetchUserProfile = async () => {
      try {
        const response = await fetch('https://api.yourapp.com/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`, // Attach the token here
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            // Handle unauthorized/forbidden: e.g., clear token, redirect to login
            console.warn('Unauthorized access. Token might be invalid or expired.');
            // await AsyncStorage.removeItem('userToken'); // Example of clearing token
            // navigateToLoginScreen();
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User profile data:', data);
        return data;
      } catch (e) {
        console.error('Failed to fetch user profile:', e);
        throw e; // Re-throw to allow calling component to handle
      }
    };
    ```
    Explanation: The token is included in the `Authorization` header, prefixed with `Bearer `. This is the standard format for sending JWTs. The backend will then extract and validate this token to grant access.

#### AI generation note
Create a 16-minute live coding video. Begin by explaining token-based authentication concepts and the role of JWTs. Live-code a login screen with username/password inputs. Demonstrate a simulated `POST` request to a login API endpoint. Show how to receive a dummy token and store it using `AsyncStorage` (mention `expo-secure-store` as a more secure alternative). Then, create a protected screen that only renders if a token is present in `AuthContext`. Show how to attach the token to a *simulated* `GET` request to a protected API endpoint. Finally, implement a logout function that clears the token from storage. Use a split-screen view for code and a mobile emulator, demonstrating the login, access, and logout flow. Include a reflection prompt on token security.

---

## Module 6: State Management, Authentication & Deployment

**Module Goal:** Equip learners with advanced state management techniques, secure user authentication patterns, and the practical knowledge required to prepare, build, and deploy React Native applications to both the Google Play Store and Apple App Store.

### Chapter 6.1 — Advanced State Management with Context API

#### Learning objectives
*   Understand the limitations of prop drilling in complex React Native applications.
*   Implement React's Context API to manage global state efficiently across components.
*   Create and utilize Context Providers and Consumers (or the `useContext` hook) effectively.
*   Apply Context API to manage application-wide settings such as themes or user preferences.
*   Identify scenarios where Context API is a suitable solution for state management.

#### Detailed lesson content
As your React Native application grows in complexity, you'll inevitably encounter a common challenge known as "prop drilling." This occurs when you need to pass data from a parent component down to deeply nested child components, requiring intermediate components in the tree to receive and forward props that they don't actually use themselves. While acceptable for shallow hierarchies, prop drilling quickly makes your codebase harder to read, maintain, and refactor. Imagine passing a user object or a theme setting through five or six layers of components just to reach the one that needs it; this is precisely the problem React's Context API aims to solve.

The Context API provides a way to share values like user authentication status, theme settings, or language preferences across the component tree without explicitly passing props through every level. It allows you to create a "context" that holds data, a "provider" component that makes this data available to all its descendants, and "consumers" (or more commonly, the `useContext` hook) that read the data from the context. This pattern effectively creates a global data store for specific pieces of state, making them accessible to any component that needs them, regardless of their position in the component tree, as long as they are wrapped by the corresponding Provider.

Let's walk through an example of implementing a theme switcher using the Context API. First, we define our context using `React.createContext()`. This function returns a Context object with a Provider and a Consumer. The argument passed to `createContext` is the default value, which is used when a component tries to read context without a matching Provider above it in the tree, or if the Provider doesn't supply a value. For our theme, we might define an object with `theme` (e.g., 'light' or 'dark') and a `toggleTheme` function.

```javascript
// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme(); // 'light' or 'dark'
  const [theme, setTheme] = useState(colorScheme || 'light');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || 'light');
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

In this `ThemeProvider`, we're using `useState` to manage the current theme and `useEffect` to listen for system theme changes using `Appearance` from `react-native`. The `toggleTheme` function updates this state. Crucially, the `value` prop of `ThemeContext.Provider` is where we pass the actual data and functions that our consumers will access. This `value` can be any JavaScript object, array, or primitive.

To make this theme available throughout our app, we wrap our root component (typically `App.js` or `index.js`) with the `ThemeProvider`:

```javascript
// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from './ThemeContext';
import HomeScreen from './HomeScreen'; // A component that will use the theme

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

Now, any component rendered within `HomeScreen` (or `HomeScreen` itself) can access the theme context. To consume the context, we use the `useContext` hook, which is the modern and preferred way over the `ThemeContext.Consumer` component. The `useContext` hook takes the Context object as an argument and returns the current context value for that context.

```javascript
// HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ThemeContext from './ThemeContext';

function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.screen, containerStyle]}>
      <Text style={textStyle}>Current Theme: {theme.toUpperCase()}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

export default HomeScreen;
```

In this `HomeScreen` component, we simply call `useContext(ThemeContext)` to get the `theme` and `toggleTheme` function. Notice how `HomeScreen` doesn't receive `theme` or `toggleTheme` as props; it directly accesses them from the context. This significantly cleans up component interfaces and reduces boilerplate.

A common mistake when using Context API is to put too much state into a single context. While powerful, Context API is not a replacement for more robust state management libraries like Redux for very complex, frequently updated, or highly interconnected global state. Context API causes all consuming components to re-render whenever the `value` prop of the Provider changes. If you have a single large context that updates frequently, it can lead to unnecessary re-renders across your application. For this reason, it's often better to create multiple, smaller contexts for different domains of state (e.g., `AuthContext`, `ThemeContext`, `CartContext`) rather than one monolithic `AppContext`. Another common pitfall is forgetting to wrap the consuming component (or its parent) with the `Provider`, leading to errors where the context value is `undefined` or the default value. Always ensure your Provider is higher up in the component tree than any component that needs to consume its context.

#### Key concepts
*   **Prop Drilling:** The process of passing data from a parent component down to deeply nested child components through intermediate components that don't directly use the data.
*   **Context API:** A React feature that allows data to be passed through the component tree without having to pass props down manually at every level.
*   **`React.createContext()`:** A function that creates a Context object, which comes with a `Provider` and a `Consumer` component.
*   **Context Provider:** A React component (`MyContext.Provider`) that makes the context's value available to all its descendant components. It accepts a `value` prop.
*   **`useContext` Hook:** A React Hook that allows function components to subscribe to context changes. It takes a Context object (the value returned from `React.createContext`) and returns the current context value for that context.
*   **Context Consumer:** (Less common now) A React component (`MyContext.Consumer`) that subscribes to context changes. It requires a function as a child.

#### Hands-on activity
**Activity: User Settings Context**

Create a new React Native project using Expo. Implement a `SettingsContext` that manages a user's preference for notifications (boolean: `true`/`false`) and a preferred display name (string).

1.  **Create `SettingsContext.js`:**
    *   Define `SettingsContext` using `createContext`.
    *   Create `SettingsProvider` component.
    *   Inside `SettingsProvider`, use `useState` for `notificationsEnabled` (default `true`) and `displayName` (default "Guest User").
    *   Provide functions `toggleNotifications` and `updateDisplayName` that modify these states.
    *   Pass the state values and functions via the `value` prop of `SettingsContext.Provider`.

2.  **Wrap `App.js`:**
    *   Wrap your main application component (e.g., `<MyAppComponent />`) with `<SettingsProvider>`.

3.  **Create `SettingsScreen.js`:**
    *   This component should consume `SettingsContext` using `useContext`.
    *   Display the current `notificationsEnabled` status with a `Switch` component.
    *   Display the current `displayName` with a `Text` component.
    *   Include a `TextInput` and a `Button` to allow the user to update their `displayName`.
    *   Include a `Button` to toggle notifications.

**Starter Code for `SettingsContext.js`:**

```javascript
// SettingsContext.js
import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
  notificationsEnabled: true,
  displayName: 'Guest User',
  toggleNotifications: () => {},
  updateDisplayName: (name) => {},
});

export const SettingsProvider = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [displayName, setDisplayName] = useState('Guest User');

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const updateDisplayName = (name) => {
    setDisplayName(name);
  };

  const contextValue = {
    notificationsEnabled,
    displayName,
    toggleNotifications,
    updateDisplayName,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
```

#### Assessment idea
1.  **Question:** You are building a React Native application and need to manage a user's authentication token, which is required by many different components across your app. You decide to use React's Context API. Which of the following is the most appropriate place to define your `AuthContext.Provider` to ensure the token is accessible globally?
    *   A) Inside every component that needs the authentication token.
    *   B) As a child of the specific component that first fetches the token.
    *   C) At the root of your component tree, typically in `App.js`, wrapping your main application components.
    *   D) Inside a separate utility file, without rendering it as a component.

    **Correct Answer:** C) At the root of your component tree, typically in `App.js`, wrapping your main application components.
    **Explanation:** To make the authentication token (or any global state managed by Context) available to *all* components that might need it, the `Provider` must be rendered high up in the component tree, ensuring all potential consumers are its descendants. Placing it in `App.js` is the standard practice for application-wide state.

2.  **Question:** Consider a `ThemeContext` that provides `theme` (string) and `toggleTheme` (function). If a component `MyComponent` consumes this context, and the `toggleTheme` function is called, what is the expected behavior regarding `MyComponent`'s re-rendering?
    *   A) `MyComponent` will not re-render because `toggleTheme` is a function, not a state variable.
    *   B) `MyComponent` will re-render only if its own internal state changes.
    *   C) `MyComponent` will re-render because the `theme` value in the context has changed, causing the `value` prop of the `ThemeContext.Provider` to update.
    *   D) `MyComponent` will re-render only if it explicitly calls `forceUpdate()`.

    **Correct Answer:** C) `MyComponent` will re-render because the `theme` value in the context has changed, causing the `value` prop of the `ThemeContext.Provider` to update.
    **Explanation:** When the state managed within the `ThemeContext.Provider` (in this case, `theme`) changes, the `value` prop passed to the `Provider` updates. Any component that consumes this context (like `MyComponent`) will detect this change and re-render to reflect the new context value. This is a core mechanism of the Context API.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 2-minute animated diagram illustrating prop drilling and its drawbacks. Transition to a 7-minute live coding demo showing the creation of `ThemeContext`, `ThemeProvider`, and how to consume it with `useContext` in `App.js` and `HomeScreen.js`. Include a split-screen view of the code editor and a React Native emulator updating the UI. Emphasize the `value` prop of the Provider. Conclude with a 3-minute discussion on common mistakes (e.g., monolithic context, forgetting Provider) using visual code snippets highlighting the errors. Include a reflection prompt: "When would you choose Context API over simple prop passing for state management?"

### Chapter 6.2 — Introduction to Redux Toolkit for Complex State

#### Learning objectives
*   Understand the core principles of Redux and why it's used for complex application state.
*   Set up a Redux store in a React Native application using Redux Toolkit.
*   Define and implement Redux "slices" using `createSlice` for managing specific domains of state.
*   Dispatch actions and select state from the Redux store in React Native components using `useDispatch` and `useSelector`.
*   Explain the benefits of Redux Toolkit in simplifying Redux development.

#### Detailed lesson content
While React's Context API is excellent for sharing certain types of global state, especially those that don't change very frequently or aren't highly interconnected, it can become cumbersome for managing very complex application state. When you have many pieces of state that interact with each other, require complex asynchronous operations, or need a predictable state container with robust debugging tools, Redux often becomes the preferred solution. Redux provides a single source of truth for your application's state, making it highly predictable and easier to debug. However, traditional Redux setup involved a lot of boilerplate code – defining action types, action creators, and reducers separately. This is where Redux Toolkit comes in.

Redux Toolkit (RTK) is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux tasks, reduces boilerplate, and includes best practices by default. It makes Redux much easier to learn and use, especially for beginners, while still providing the full power of Redux. The core idea behind RTK is to streamline the process of setting up a Redux store, defining reducers, and creating actions.

The central component of any Redux application is the **store**. The store holds the entire state tree of your application. You create it using `configureStore` from Redux Toolkit. This function automatically sets up a Redux store with good defaults, including Redux DevTools Extension integration and `redux-thunk` for asynchronous logic.

```javascript
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer from './todosSlice'; // We'll create this later

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer, // Add our todos reducer here
  },
});
```

Here, `reducer` is an object where keys are the names of your state slices and values are the corresponding reducer functions.

The most significant innovation in Redux Toolkit is `createSlice`. A "slice" is a small, self-contained piece of your Redux state logic. `createSlice` automatically generates action creators and action types for you, and allows you to write "mutating" logic inside reducers, which is then internally translated into immutable updates using the Immer library. This dramatically simplifies reducer logic.

Let's create a `todosSlice` to manage a list of to-do items.

```javascript
// store/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos', // A name for this slice of state
  initialState: [], // The initial state for this slice
  reducers: {
    addTodo: (state, action) => {
      // Immer allows us to "mutate" the state directly,
      // but under the hood, it creates a new immutable state.
      state.push({
        id: new Date().toISOString(), // Simple unique ID
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions; // Export action creators
export default todosSlice.reducer; // Export the reducer function
```

In this `todosSlice`, `name` identifies the slice, `initialState` provides the default value, and `reducers` is an object where each key corresponds to an action type. The functions inside `reducers` are called "case reducers." `createSlice` automatically generates action creators with the same names (e.g., `addTodo`, `toggleTodo`, `removeTodo`) and a single reducer function for the entire slice.

To connect our React Native app to the Redux store, we use the `Provider` component from `react-redux`. This is similar to `Context.Provider`.

```javascript
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Our Redux store
import TodoScreen from './TodoScreen'; // A component that will use Redux

export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}
```

Now, any component wrapped by the `Provider` can interact with the Redux store using hooks from `react-redux`: `useSelector` to read state and `useDispatch` to dispatch actions.

```javascript
// TodoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './store/todosSlice';

function TodoScreen() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos); // Select the 'todos' slice of state
  const dispatch = useDispatch(); // Get the dispatch function

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText)); // Dispatch the addTodo action
      setTodoText('');
    }
  };

  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))} style={styles.todoTextContainer}>
        <Text style={[styles.todoText, item.completed && styles.completedTodoText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Remove" onPress={() => dispatch(removeTodo(item.id))} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={todoText}
          onChangeText={setTodoText}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  todoTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  completedTodoText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  list: {
    flex: 1,
  },
});

export default TodoScreen;
```

A common mistake is to forget to wrap your root component with `Provider` or to pass the incorrect `store` prop. Another pitfall is trying to mutate state directly outside of `createSlice`'s reducers or `createReducer` functions; always remember that Redux state should be treated as immutable. Redux Toolkit's `createSlice` handles this immutability for you when you write "mutating" logic inside the `reducers` object, but if you were to manually update state in a component and try to dispatch it, you'd need to ensure immutability yourself. For asynchronous operations (like fetching data from an API), Redux Toolkit provides `createAsyncThunk`, which simplifies handling pending, fulfilled, and rejected states for your async actions. We'll explore `createAsyncThunk` in a later chapter when we deal with backend communication.

#### Key concepts
*   **Redux:** A predictable state container for JavaScript apps, providing a single source of truth for application state.
*   **Redux Toolkit (RTK):** The official, opinionated, batteries-included toolset for efficient Redux development, simplifying setup and reducing boilerplate.
*   **Store:** The single JavaScript object that holds the entire state tree of your application.
*   **`configureStore`:** A Redux Toolkit function that sets up a Redux store with good defaults, including Redux DevTools and `redux-thunk`.
*   **Slice:** A small, self-contained piece of your Redux state logic, typically defined using `createSlice`.
*   **`createSlice`:** A Redux Toolkit function that automatically generates action creators and action types, and allows for "mutating" logic in reducers (handled immutably by Immer).
*   **Reducers:** Pure functions that take the current state and an action, and return a new state.
*   **Actions:** Plain JavaScript objects that describe what happened in the application. They have a `type` property and often a `payload`.
*   **`useSelector` Hook:** A `react-redux` hook used in functional components to extract data from the Redux store state.
*   **`useDispatch` Hook:** A `react-redux` hook used in functional components to get the `dispatch` function, which is used to dispatch actions to the store.

#### Hands-on activity
**Activity: Shopping Cart Management**

Extend your previous React Native project (or start a new Expo project). Implement a Redux Toolkit slice for managing a simple shopping cart.

1.  **Install Redux Toolkit and React Redux:**
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

2.  **Create `store/index.js`:**
    *   Set up your Redux store using `configureStore`.

3.  **Create `store/cartSlice.js`:**
    *   Define a `cartSlice` using `createSlice`.
    *   `name`: `'cart'`
    *   `initialState`: `[]` (an empty array to hold cart items).
    *   `reducers`:
        *   `addItem(state, action)`: Adds an item to the cart. If the item (identified by `id`) already exists, increment its `quantity`. Otherwise, add the new item with `quantity: 1`. `action.payload` should be `{ id, name, price }`.
        *   `removeItem(state, action)`: Removes an item from the cart by `id`. `action.payload` is the `id`.
        *   `updateQuantity(state, action)`: Updates the quantity of an item. `action.payload` should be `{ id, quantity }`. Ensure quantity doesn't go below 1.

4.  **Wrap `App.js`:**
    *   Wrap your main application component with `<Provider store={store}>`.

5.  **Create `CartScreen.js`:**
    *   Display a list of items currently in the cart using `useSelector`.
    *   For each item, show its `name`, `price`, and `quantity`.
    *   Include buttons to `+` and `-` the quantity of each item, dispatching `updateQuantity`.
    *   Include a button to `Remove` an item, dispatching `removeItem`.
    *   Display the total price of all items in the cart.
    *   Add a simple "Add Product" button that dispatches `addItem` with a hardcoded product (e.g., `{ id: 'p1', name: 'Laptop', price: 1200 }`).

**Starter Code for `store/cartSlice.js`:**

```javascript
// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ id, name, price, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
```

#### Assessment idea
1.  **Question:** You are building a React Native app and need to manage user data (e.g., username, email, profile picture URL) that is fetched from an API and needs to be accessible across many different screens. You decide to use Redux Toolkit. Which of the following best describes the role of `createSlice` in this scenario?
    *   A) `createSlice` is used to create a new instance of the Redux store for each user.
    *   B) `createSlice` defines a self-contained piece of your Redux state (like `userSlice`), automatically generating action creators and a reducer for it.
    *   C) `createSlice` is a hook used in components to select specific parts of the state.
    *   D) `createSlice` is primarily for handling asynchronous data fetching from APIs.

    **Correct Answer:** B) `createSlice` defines a self-contained piece of your Redux state (like `userSlice`), automatically generating action creators and a reducer for it.
    **Explanation:** `createSlice` is the core utility in Redux Toolkit for defining how a specific part of your application's state (a "slice") should behave. It encapsulates the initial state, reducers, and automatically generates action creators, significantly reducing the boilerplate traditionally associated with Redux.

2.  **Question:** In a React Native component, you want to display the current count from a Redux store's `counter` slice and also dispatch an `increment` action. Which two `react-redux` hooks would you primarily use for these operations?
    *   A) `useContext` and `useState`
    *   B) `useReducer` and `useCallback`
    *   C) `useSelector` and `useDispatch`
    *   D) `useEffect` and `useRef`

    **Correct Answer:** C) `useSelector` and `useDispatch`
    **Explanation:** `useSelector` is used to extract (select) data from the Redux store's state and make it available in your component. `useDispatch` provides the `dispatch` function, which is used to send actions to the Redux store, triggering state changes via reducers. These two hooks are fundamental for interacting with a Redux store from React components.

#### AI generation note
Create a 15-minute live coding video. Begin with a brief (1-minute) explanation of Redux Toolkit's benefits over traditional Redux. Then, demonstrate setting up `configureStore` and creating a `todosSlice` with `addTodo`, `toggleTodo`, and `removeTodo` reducers. Show how `createSlice` automatically generates actions. Next, integrate the store into `App.js` using `react-redux`'s `Provider`. Finally, build a `TodoScreen` component, demonstrating `useSelector` to display todos and `useDispatch` to add, toggle, and remove them, with real-time updates in the emulator. Use a split-screen view for code and emulator. Highlight the "mutating" logic within `createSlice` and explain how Immer handles immutability. End with a 2-question interactive quiz on `createSlice` and `useSelector`/`useDispatch`.

### Chapter 6.3 — User Authentication Flows in React Native

#### Learning objectives
*   Understand the fundamental concepts of user authentication in mobile applications.
*   Implement common authentication flows: user registration, login, and logout.
*   Integrate a backend authentication service (e.g., Firebase Authentication) with a React Native app.
*   Manage user session state and persist authentication across app restarts.
*   Secure navigation and protect routes based on the user's authentication status.

#### Detailed lesson content
User authentication is a critical component of most modern applications, allowing users to register, log in, and access personalized or protected content. In React Native, implementing authentication involves not only handling UI for login/signup but also securely communicating with a backend service, managing authentication tokens, and persisting user sessions. While you could build your own backend, services like Firebase Authentication, AWS Amplify, or Auth0 provide robust, scalable, and secure authentication solutions out-of-the-box, significantly simplifying development. For this chapter, we'll focus on Firebase Authentication, a popular choice for React Native developers due to its ease of integration and comprehensive features.

The typical authentication flow involves several steps:
1.  **User Registration (Sign Up):** A user provides credentials (email, password) to create a new account. The app sends these to the backend, which creates the user and returns an authentication token.
2.  **User Login (Sign In):** An existing user provides credentials. The backend verifies them and returns an authentication token.
3.  **Session Management:** The authentication token (e.g., a JWT - JSON Web Token) is stored securely on the device. This token is then sent with subsequent requests to protected API endpoints to prove the user's identity.
4.  **Logout:** The app clears the stored token and informs the backend (if necessary) to invalidate the session.
5.  **Authentication State Persistence:** The app needs to remember if a user is logged in even after the app is closed and reopened.

Let's integrate Firebase Authentication. First, you need to set up a Firebase project and enable Email/Password authentication. Then, install the Firebase SDK in your React Native project:

```bash
npm install firebase
# For Expo projects, ensure you've configured Firebase with your app.json
# and potentially installed expo-dev-client if you're using native modules
# beyond what Expo Go supports, though Firebase Auth often works fine with Expo Go.
```

Next, initialize Firebase in your app:

```javascript
// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace with your actual Firebase config from your project settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

Now, we can create functions for registration, login, and logout. We'll also need a way to track the user's authentication status globally. This is a perfect use case for React Context API or Redux Toolkit. Let's use Context for simplicity in this example.

```javascript
// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig'; // Your firebase config

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Firebase user object
  const [loading, setLoading] = useState(true); // To check initial auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe; // Clean up subscription
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children once loading is complete */}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

In `AuthContext.js`, `onAuthStateChanged` is crucial. It sets up an observer that listens for changes to the user's sign-in state. This means if a user logs in, logs out, or their token refreshes, this callback fires, and our `user` state updates. This is how we maintain a real-time authentication status. We also use a `loading` state to prevent rendering authenticated routes before Firebase has had a chance to check the initial authentication state.

Next, wrap your app with `AuthProvider` and create login/signup screens.

```javascript
// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import AppNavigator from './AppNavigator'; // Our navigation stack

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
```

Now, let's consider navigation. We'll use React Navigation to create different stacks for authenticated and unauthenticated users. This is often called "authentication flow" or "auth gates."

```javascript
// AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from './AuthContext';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

function MainAppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome!' }} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  );
}

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainAppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

In `AppNavigator.js`, we use the `user` and `loading` state from `AuthContext` to conditionally render either the `AuthNavigator` (for unauthenticated users) or `MainAppNavigator` (for authenticated users). The `loading` state ensures we don't flash the wrong screen while Firebase is checking the user's initial status.

**Common Mistakes & Safety Notes:**
*   **Storing sensitive data insecurely:** Never store raw passwords or unencrypted tokens directly in `AsyncStorage` without proper encryption. Firebase Auth handles token storage securely for you. If you're using custom tokens, use libraries like `react-native-keychain` or `expo-secure-store` for secure storage.
*   **Not handling loading states:** If you don't show a loading indicator while checking authentication status, users might see a brief flash of the login screen before being redirected to the home screen, or vice-versa, leading to a poor user experience.
*   **Not handling errors:** Always include `try-catch` blocks around authentication calls (`login`, `signup`) to catch and display errors (e.g., "Invalid credentials", "Email already in use") to the user.
*   **Exposing Firebase API Key:** While Firebase API keys are generally safe to include in client-side code (they are designed for public access), ensure you restrict them to only the services your app needs (e.g., only Authentication) in your Firebase project settings. Do not expose other sensitive backend keys.

This robust pattern ensures that your app's UI always reflects the current authentication state, providing a smooth and secure user experience.

#### Key concepts
*   **Authentication:** The process of verifying the identity of a user.
*   **Firebase Authentication:** A backend service provided by Google Firebase for managing user authentication (email/password, social logins, phone number, etc.).
*   **`onAuthStateChanged`:** A Firebase function that provides a real-time listener for changes in the user's sign-in state.
*   **`createUserWithEmailAndPassword`:** Firebase function to register a new user with email and password.
*   **`signInWithEmailAndPassword`:** Firebase function to log in an existing user with email and password.
*   **`signOut`:** Firebase function to log out the current user.
*   **Authentication Token:** A credential (e.g., JWT) issued by the backend after successful authentication, used to authorize subsequent requests to protected resources.
*   **Secure Navigation (Auth Gates):** Conditionally rendering different navigation stacks or routes based on the user's authentication status.
*   **Session Persistence:** The ability for an application to remember a user's logged-in status across app restarts or reloads.

#### Hands-on activity
**Activity: Implement Login and Logout UI**

Building upon the Firebase Authentication setup discussed in the lesson:

1.  **Ensure Firebase is configured:** Make sure your `firebaseConfig.js` is correctly set up and Firebase Auth is enabled in your Firebase project.

2.  **Create `LoginScreen.js`:**
    *   Use `useContext(AuthContext)` to access the `login` function.
    *   Include two `TextInput` components for email and password.
    *   Add a `Button` to trigger the `login` function.
    *   Display error messages (e.g., "Invalid credentials") if the login fails.
    *   Add a `Button` to navigate to a `SignupScreen`.

3.  **Create `SignupScreen.js`:**
    *   Use `useContext(AuthContext)` to access the `signup` function.
    *   Include two `TextInput` components for email and password.
    *   Add a `Button` to trigger the `signup` function.
    *   Display error messages (e.g., "Email already in use") if signup fails.
    *   Add a `Button` to navigate back to `LoginScreen`.

4.  **Update `HomeScreen.js`:**
    *   Use `useContext(AuthContext)` to access the `user` object and `logout` function.
    *   Display a welcome message, e.g., "Welcome, {user.email}!".
    *   Add a `Button` to log out, which calls the `logout` function.

**Starter Code for `LoginScreen.js`:**

```javascript
// LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AuthContext from './AuthContext'; // Assuming AuthContext.js is in the same directory

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
      // Login successful, navigation handled by AppNavigator based on AuthContext
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
```

#### Assessment idea
1.  **Question:** You've implemented Firebase Authentication in your React Native app. To ensure that your app always knows the current user's login status (e.g., if they just logged in, logged out, or reopened the app), which Firebase Authentication function is most suitable for setting up a real-time listener for changes in the user's sign-in state?
    *   A) `signInWithEmailAndPassword`
    *   B) `createUserWithEmailAndPassword`
    *   C) `onAuthStateChanged`
    *   D) `getCurrentUser`

    **Correct Answer:** C) `onAuthStateChanged`
    **Explanation:** `onAuthStateChanged` is specifically designed to provide a real-time, persistent listener for the user's authentication state. It will notify your app whenever the user signs in, signs out, or their session token refreshes, making it ideal for managing global authentication state and conditional rendering of UI.

2.  **Question:** After a user successfully logs into your React Native app, you want to redirect them from the `LoginScreen` to the `HomeScreen`. Simultaneously, you want to prevent them from navigating back to the `LoginScreen` using the back button. Using React Navigation, what is the most effective way to achieve this?
    *   A) Use `navigation.navigate('HomeScreen')`.
    *   B) Use `navigation.push('HomeScreen')`.
    *   C) Use `navigation.replace('HomeScreen')`.
    *   D) Use a conditional rendering approach where `LoginScreen` is simply removed from the component tree.

    **Correct Answer:** C) Use `navigation.replace('HomeScreen')`.
    **Explanation:** `navigation.replace('HomeScreen')` replaces the current screen in the navigation stack with `HomeScreen`. This means the `LoginScreen` is no longer in the history, and the user cannot navigate back to it using the back button, which is the desired behavior after a successful login. `navigation.navigate` would just add `HomeScreen` on top, allowing a back navigation.

#### AI generation note
Create a 14-minute mixed-media lesson. Start with a 2-minute animated diagram illustrating the full authentication flow (signup -> login -> session -> logout) with Firebase as the backend. Transition to a 8-minute live coding demo showing the setup of `firebaseConfig.js`, `AuthContext.js` (emphasizing `onAuthStateChanged`), and `AppNavigator.js`'s conditional rendering based on `user` and `loading` state. Show the app switching between login/signup screens and the main app screens in the emulator. Include a 4-minute discussion on common authentication pitfalls (insecure storage, missing error handling, loading states) with code examples of `try-catch` blocks and `expo-secure-store` mention. Interactive element: A mini-quiz on the purpose of `onAuthStateChanged`.

### Chapter 6.4 — Preparing Your App for Production & Deployment

#### Learning objectives
*   Understand the key differences between development and production builds in React Native.
*   Implement performance optimizations, including image compression and code splitting, for a production app.
*   Manage environment variables to configure different settings for development and production environments.
*   Generate appropriate app icons and splash screens for various device resolutions and platforms.
*   Configure and prepare your Expo project for an EAS Build, including `app.json` and `eas.json` settings.

#### Detailed lesson content
Developing a React Native app is one thing; preparing it for a public release on app stores is another entirely. The development environment, often optimized for speed and debugging, differs significantly from the production environment, which prioritizes performance, security, and stability. This chapter focuses on the crucial steps to transition your app from a development prototype to a polished, production-ready application using Expo's powerful Ecosystem, particularly `EAS Build` and `EAS Submit`.

One of the first areas to address for production is **performance optimization**. Mobile users expect fast, responsive applications.
*   **Image Optimization:** Large, unoptimized images are a major culprit for slow loading times and increased app size. Always compress your images before including them in your project. Tools like TinyPNG or ImageOptim can significantly reduce file sizes without noticeable quality loss. Consider using modern image formats like WebP where supported. For dynamic images, ensure your backend serves appropriately sized images, and use React Native's `Image` component with `resizeMode` and `cache` props effectively.
*   **Code Splitting/Bundling:** While React Native's Metro bundler handles much of this, be mindful of importing large libraries or modules unnecessarily. Tree-shaking (removing unused code) is automatically applied to some extent, but conscious modularization helps.
*   **Minification and Obfuscation:** These steps reduce the size of your JavaScript bundle and make it harder to reverse-engineer. Expo's build process (`EAS Build`) handles this automatically for release builds.
*   **Removing Debugging Tools:** Ensure you remove or disable development-only features like `console.log` statements, React Native Debugger, or Flipper in production builds. While `console.log` statements are often automatically stripped in release builds, explicit removal is safer.

**Environment Variables** are essential for managing different configurations between development, staging, and production. For example, your development API endpoint might be `http://localhost:3000`, while your production API is `https://api.yourapp.com`. Hardcoding these values is a recipe for disaster. Expo provides a straightforward way to handle environment variables using `app.json` and `extra` fields, or by using `.env` files with a library like `react-native-dotenv`.

Using `app.json` `extra` field:
```json
// app.json
{
  "expo": {
    "name": "My Awesome App",
    // ... other config
    "extra": {
      "apiUrl": "https://api.yourapp.com",
      "someOtherKey": "someProductionValue"
    }
  }
}
```
You can then access these in your app using `expo-constants`:
```javascript
import Constants from 'expo-constants';
const apiUrl = Constants.expoConfig.extra.apiUrl;
```
For different environments, you might use a custom `app.config.js` file that conditionally loads different values based on an environment variable like `process.env.APP_ENV`.

```javascript
// app.config.js
export default ({ config }) => {
  const isProduction = process.env.APP_ENV === 'production';
  return {
    ...config,
    extra: {
      apiUrl: isProduction ? 'https://api.yourapp.com' : 'http://localhost:3000/dev',
    },
  };
};
```
Then run `APP_ENV=production expo prebuild` or `APP_ENV=production eas build`.

**App Icons and Splash Screens** are the first visual impressions of your app. They need to be professional and adhere to platform-specific guidelines. Expo makes this process incredibly easy. You just need to provide a single high-resolution image for your icon and splash screen in your `app.json` (or `app.config.js`), and Expo will generate all the necessary sizes and configurations for iOS and Android.

```json
// app.json
{
  "expo": {
    // ...
    "icon": "./assets/icon.png", // A 1024x1024 PNG with transparency
    "splash": {
      "image": "./assets/splash.png", // A 1242x2436 PNG
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.yourappname" // Required for iOS builds
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.yourappname" // Required for Android builds
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```
Ensure your `icon.png` is at least 1024x1024 pixels with a transparent background. For the splash screen, a common size is 1242x2436 pixels. Expo's `adaptiveIcon` for Android is crucial for modern Android devices.

Finally, **configuring for EAS Build** is the bridge to deployment. `eas.json` is where you define build profiles for different environments (development, preview, production). Each profile can specify platform-specific settings, build types, and credentials.

```json
// eas.json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      },
      "android": {
        "resourceClass": "m-medium"
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      },
      "android": {
        "resourceClass": "m-medium"
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m-medium"
      },
      "android": {
        "resourceClass": "m-medium"
      }
    }
  }
}
```
The `production` profile is what you'll use for submitting to app stores. You might specify a `resourceClass` (build machine size), and `distribution` (e.g., `store` for app store submissions, `internal` for internal testing). EAS will handle signing your app, but you'll need to provide your Apple Developer Program and Google Play Console credentials to EAS securely.

Common mistakes include:
*   **Forgetting unique identifiers:** `bundleIdentifier` for iOS and `package` for Android must be unique across all apps on their respective stores.
*   **Incorrect app icons/splash screens:** Not adhering to resolution or transparency requirements can lead to blurry assets or rejection.
*   **Hardcoding sensitive keys:** Never hardcode API keys or secrets directly in your JavaScript code, especially if they grant extensive access. Use environment variables or secure credential storage.
*   **Ignoring platform-specific settings:** iOS and Android have unique requirements (e.g., privacy manifest for iOS, specific permissions for Android). Ensure your `app.json` and native configurations (`Info.plist`, `AndroidManifest.xml` if you've ejected) reflect these. Expo's `app.json` abstracts many of these, but you still need to be aware.

By meticulously preparing your app, you ensure a smooth deployment process and a high-quality user experience.

#### Key concepts
*   **Production Build:** An optimized version of your app for release, prioritizing performance, security, and stability over development features.
*   **Performance Optimization:** Techniques to improve app speed and responsiveness, including image compression, efficient code, and minification.
*   **Image Optimization:** Reducing image file sizes (e.g., using TinyPNG, WebP format) to decrease app bundle size and improve load times.
*   **Environment Variables:** Configuration values that vary between deployment environments (development, staging, production), typically managed using `app.json` `extra` or `.env` files.
*   **`app.json` / `app.config.js`:** The primary configuration file for Expo projects, defining app name, icon, splash screen, platform-specific settings, and more.
*   **App Icon:** The visual representation of your app on the device's home screen.
*   **Splash Screen:** The initial screen displayed when your app launches, often showing a logo or branding.
*   **EAS Build:** Expo Application Services Build, a cloud-based service for building native binaries (APK, AAB for Android; IPA for iOS) of your React Native app.
*   **`eas.json`:** The configuration file for EAS Build, defining different build profiles (development, preview, production) and their settings.
*   **Bundle Identifier (iOS) / Package Name (Android):** Unique identifiers for your app on the respective app stores.

#### Hands-on activity
**Activity: Configure Production Settings for an Expo App**

Take your existing React Native project (or create a new one with `npx create-expo-app my-production-app`).

1.  **Add `eas.json`:**
    *   Initialize EAS in your project: `eas build:configure` (if not already done).
    *   Review the generated `eas.json`. Add a `production` profile if it's not already there, ensuring `distribution` is set to `"store"`.

2.  **Update `app.json` / `app.config.js`:**
    *   **App Icon:** Replace the default `icon.png` in `assets` with a custom 1024x1024 PNG image. Update the `icon` path in `app.json`.
    *   **Splash Screen:** Replace the default `splash.png` with a custom high-resolution splash screen image. Update the `splash` path, `resizeMode`, and `backgroundColor` in `app.json`.
    *   **Adaptive Icon (Android):** Provide an `adaptive-icon.png` (a foreground image for Android's adaptive icons) and configure `adaptiveIcon` in the `android` section of `app.json`.
    *   **Unique Identifiers:** Set a unique `bundleIdentifier` in the `ios` section and a unique `package` in the `android` section. Example: `com.yourname.myproductionapp`.
    *   **Environment Variables:** Add an `extra` field to `app.json` (or `app.config.js`) to define a `productionApiUrl` and a `developmentApiUrl`. Use `expo-constants` to demonstrate accessing these in a simple `Text` component.

3.  **Simulate Environment Variable Usage:**
    *   Create a simple component that displays `Constants.expoConfig.extra.apiUrl`.
    *   Explain how you would use `APP_ENV=production eas build` to switch the API URL.

**Starter `app.config.js` (if you prefer JS config):**

```javascript
// app.config.js
import 'dotenv/config'; // If using dotenv for local env vars

export default ({ config }) => {
  const isProduction = process.env.APP_ENV === 'production' || process.env.NODE_ENV === 'production';

  return {
    ...config,
    name: "My Production App",
    slug: "my-production-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/custom-icon.png", // Ensure this path is correct
    splash: {
      image: "./assets/custom-splash.png", // Ensure this path is correct
      resizeMode: "cover",
      backgroundColor: "#4630EB"
    },
    updates: {
      "fallbackToCacheTimeout": 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourname.myproductionapp" // REPLACE THIS
    },
    android: {
      "adaptiveIcon": {
        "foregroundImage": "./assets/custom-adaptive-icon.png", // Ensure this path is correct
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourname.myproductionapp" // REPLACE THIS
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      productionApiUrl: "https://api.myproductionapp.com",
      developmentApiUrl: "http://localhost:3000/api",
      currentApiUrl: isProduction ? "https://api.myproductionapp.com" : "http://localhost:3000/api"
    }
  };
};
```

#### Assessment idea
1.  **Question:** You are preparing your React Native app for production deployment using Expo. You have a large number of high-resolution images that are making your app bundle size excessively large. What is the most effective strategy to address this issue without significantly compromising visual quality?
    *   A) Remove all images from the app and use only vector graphics.
    *   B) Store all images on a remote server and fetch them on demand, without any local caching.
    *   C) Compress images using tools like TinyPNG, convert them to efficient formats like WebP where possible, and ensure React Native's `Image` component uses appropriate `resizeMode` and caching.
    *   D) Increase the minimum Android SDK version to automatically handle image compression.

    **Correct Answer:** C) Compress images using tools like TinyPNG, convert them to efficient formats like WebP where possible, and ensure React Native's `Image` component uses appropriate `resizeMode` and caching.
    **Explanation:** Image optimization is crucial for app performance. Compressing images reduces file size, using modern formats improves efficiency, and proper `Image` component usage (like `resizeMode` and caching) ensures images are displayed and managed effectively, leading to a smaller app bundle and better user experience.

2.  **Question:** Your React Native app needs to connect to different API endpoints for development and production environments. You are using Expo. Which of the following is the recommended way to manage these environment-specific API URLs?
    *   A) Hardcode both URLs in your JavaScript code and manually change them before each build.
    *   B) Use `console.log()` to print the correct URL based on the current build type.
    *   C) Define the API URLs in the `extra` field of your `app.json` (or `app.config.js`) and access them via `expo-constants`, potentially using conditional logic based on build environment variables.
    *   D) Store the API URLs directly in `AsyncStorage` and retrieve them at app startup.

    **Correct Answer:** C) Define the API URLs in the `extra` field of your `app.json` (or `app.config.js`) and access them via `expo-constants`, potentially using conditional logic based on build environment variables.
    **Explanation:** Expo's `app.json` (or `app.config.js`) `extra` field, combined with `expo-constants`, provides a robust and officially supported way to manage environment-specific variables like API URLs. You can use conditional logic within `app.config.js` to set the correct URL based on a build environment variable (e.g., `APP_ENV`), ensuring the correct endpoint is used for each build type.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute visual explanation of why production preparation is vital (performance, security, branding). Transition to a 6-minute live demonstration of configuring `app.json` for icons, splash screens, and environment variables using `extra` and `expo-constants`. Show how to test accessing `Constants.expoConfig.extra.apiUrl` in a component. Include a brief visual of `eas.json` structure for `production` profile. Conclude with a 3-minute segment on common mistakes like unoptimized images (showing before/after examples), hardcoded secrets, and incorrect bundle identifiers, using diagram overlays. Interactive element: A short quiz on the purpose of `app.json` fields.

### Chapter 6.5 — Publishing to App Stores (Google Play & Apple App Store)

#### Learning objectives
*   Understand the requirements and processes for publishing a React Native app to Google Play Store and Apple App Store.
*   Generate release builds for both Android and iOS using Expo Application Services (EAS Build).
*   Navigate the Google Play Console to create a new app, upload an AAB, and configure store listings.
*   Navigate Apple App Store Connect to create a new app, upload an IPA, and configure metadata.
*   Identify common reasons for app rejection and best practices to ensure successful submission.

#### Detailed lesson content
The culmination of your React Native development journey is getting your application into the hands of users, which means publishing it to the official app stores: Google Play Store for Android and Apple App Store for iOS. While the process can seem daunting, Expo Application Services (EAS) significantly streamlines this, handling much of the complex native build and signing processes for you. However, understanding the requirements and steps for each store is crucial for a successful submission.

Before you even start the build process, ensure you have developer accounts:
*   **Google Play Console:** A one-time registration fee (currently $25 USD).
*   **Apple Developer Program:** An annual fee (currently $99 USD).
You'll need these accounts to manage your apps, upload builds, and configure store listings.

**Generating Release Builds with EAS Build:**
EAS Build is a cloud service that builds native binaries (APK/AAB for Android, IPA for iOS) of your Expo project. It handles the native tooling (Xcode, Android Studio, Gradle) in the cloud.

1.  **Login to EAS:** `eas login`
2.  **Configure `eas.json`:** As discussed in the previous chapter, ensure your `eas.json` has a `production` profile with `distribution: "store"`.
3.  **Initiate the build:**
    *   For Android: `eas build --platform android --profile production`
    *   For iOS: `eas build --platform ios --profile production`
EAS will prompt you for any necessary credentials (like Apple Developer Program team ID, Google Service Account key) and securely manage them. It will then queue your build in the cloud. Once the build is complete, you'll get a link to download the `.aab` (Android App Bundle) and `.ipa` (iOS App Archive) files. These are the files you will upload to the respective app stores.

**Publishing to Google Play Store:**
1.  **Create a New App:** Log in to your Google Play Console. Click "Create app."
2.  **App Details:** Provide basic information like app name, default language, and whether it's an app or a game.
3.  **Internal Testing (Optional but Recommended):** Upload your first AAB to an internal test track. This allows you to test the final build on real devices before wider release.
4.  **Store Listing:** This is what users see on the Play Store.
    *   **App Name, Short Description, Full Description:** Craft compelling text.
    *   **Graphics:** Upload high-quality screenshots (for various device types), a feature graphic, and your app icon (512x512 PNG).
    *   **Category:** Select the appropriate category for your app.
    *   **Contact Details:** Provide support email, website, and privacy policy URL.
5.  **App Content:** Complete questionnaires regarding privacy policy, ads, content rating, target audience, news app status, COVID-19 contact tracing status, data safety, and financial features. This is critical for approval. Use the "Content rating" section to get an official rating for your app.
6.  **Release Management:**
    *   **Production Track:** Navigate to "Production" in the release section.
    *   **Create New Release:** Upload your `.aab` file. Google Play will analyze it and show you the version code, size, and other details.
    *   **Release Notes:** Write clear and concise release notes for your users.
    *   **Review and Rollout:** Once everything is configured, submit your app for review. After approval, you can roll out your app to production.

**Publishing to Apple App Store:**
1.  **Create a New App:** Log in to App Store Connect. Click "My Apps" and then the "+" button to create a "New App."
2.  **App Information:** Provide platform (iOS), app name, primary language, bundle ID (must match your `app.json` `bundleIdentifier`), and SKU (a unique ID for your app, typically `com.yourcompany.yourappname`).
3.  **Pricing and Availability:** Set your app's price and distribution territories.
4.  **Prepare for Submission (Version Tab):**
    *   **Build:** Upload your `.ipa` file using `eas submit --platform ios` (or Transporter app if you downloaded the IPA manually). Once processed, select the build for your submission.
    *   **Screenshots:** Upload high-resolution screenshots for various device sizes (iPhone, iPad).
    *   **Promotional Text, Description, Keywords:** Write compelling marketing text.
    *   **Support URL, Marketing URL, Privacy Policy URL:** Provide these links.
    *   **App Icon:** Upload a 1024x1024 PNG icon.
    *   **Category:** Select the appropriate category.
    *   **Rating:** Complete the "Content Rights" and "Age Rating" questionnaires.
    *   **Copyright:** Enter copyright information.
    *   **Trade Compliance:** Answer questions about encryption.
    *   **App Review Information:** Provide contact details for the reviewer, any necessary demo account credentials, and notes for the reviewer.
5.  **Submit for Review:** Once all required fields are complete, click "Submit for Review."

**Common Rejection Reasons & Best Practices:**
*   **Incomplete Metadata:** Missing screenshots, descriptions, privacy policy URLs, or contact information. **Best Practice:** Double-check all fields before submission.
*   **Crashes/Bugs:** Apps that crash or have significant bugs will be rejected. **Best Practice:** Thoroughly test your release build on various devices and OS versions.
*   **Poor UI/UX:** Unresponsive UI, confusing navigation, or non-native feel (less common with React Native if styled well). **Best Practice:** Adhere to platform design guidelines (Human Interface Guidelines for iOS, Material Design for Android).
*   **Misleading Information:** Screenshots or descriptions that don't accurately represent the app's functionality. **Best Practice:** Be honest and clear about your app's features.
*   **Privacy Violations:** Not providing a clear privacy policy or collecting user data without consent. **Best Practice:** Always have a clear, easily accessible privacy policy.
*   **Broken Functionality:** Features advertised in the description or shown in screenshots that don't work. **Best Practice:** Test everything! Provide reviewer notes for any non-obvious features or login credentials.
*   **Copyright/Trademark Infringement:** Using copyrighted material or trademarks without permission. **Best Practice:** Use original assets or ensure you have proper licenses.
*   **Minimum Functionality:** Apps that offer very little utility or are just a website wrapped in an app. **Best Practice:** Ensure your app provides unique value and takes advantage of native mobile features.

After submission, be patient. Review times vary (days to weeks). If rejected, carefully read the rejection notes, fix the issues, and resubmit. Remember, successful deployment is a significant milestone, and with careful preparation, you can achieve it!

#### Key concepts
*   **Google Play Console:** Google's web-based platform for managing and publishing Android applications.
*   **Apple App Store Connect:** Apple's web-based platform for managing and publishing iOS applications.
*   **EAS Build:** Expo Application Services Build, a cloud service for generating production-ready native binaries (AAB for Android, IPA for iOS).
*   **Android App Bundle (AAB):** The publishing format for Android apps, containing all your app's compiled code and resources, allowing Google Play to optimize delivery for different devices.
*   **iOS App Archive (IPA):** The package format for iOS apps, containing the app's binary and resources.
*   **Store Listing (Google Play) / Product Page (App Store):** The public-facing information about your app, including name, description, screenshots, and icon.
*   **Content Rating:** A rating assigned to your app based on its content, required by both stores.
*   **Privacy Policy:** A legal document outlining how your app collects, uses, and manages user data.
*   **Review Process:** The period during which app store teams examine your app for compliance with their guidelines before approval.
*   **Common Rejection Reasons:** Typical issues that lead to an app being denied publication, such as bugs, incomplete metadata, or policy violations.

#### Hands-on activity
**Activity: Simulate App Store Listing Creation**

This activity will not involve actual submission but will guide you through preparing the necessary assets and text.

1.  **Prepare App Icons & Splash Screens:**
    *   Ensure you have a 1024x1024 PNG icon (`icon.png`).
    *   Ensure you have a high-resolution splash screen image (`splash.png`).
    *   (Optional, but recommended for Android) A foreground image for adaptive icons (`adaptive-icon.png`).

2.  **Generate Screenshots:**
    *   Using your React Native app (from previous activities), take 5-8 high-quality screenshots that showcase your app's best features. Aim for different device sizes (e.g., iPhone 13, iPhone SE, iPad for iOS; a modern Android phone, a tablet for Android). You can use the Expo Go app's screenshot feature or a simulator/emulator.
    *   Consider adding captions or feature highlights to your screenshots using a graphic editor.

3.  **Draft Store Listing Text:**
    *   **App Name:** (e.g., "My Awesome Todo App")
    *   **Short Description (Google Play, max 80 chars):** Write a concise, engaging summary.
    *   **Full Description (Google Play, max 4000 chars):** Detail your app's features, benefits, and unique selling points.
    *   **Promotional Text (App Store, max 170 chars):** A short, compelling text that appears above your description.
    *   **Description (App Store, max 4000 chars):** Similar to Google Play's full description.
    *   **Keywords (App Store, max 100 chars):** A comma-separated list of terms users might search for.
    *   **Privacy Policy URL:** (e.g., `https://www.yourapp.com/privacy`)
    *   **Support URL:** (e.g., `https://www.yourapp.com/support`)

4.  **Review `app.json`:**
    *   Verify `bundleIdentifier` (iOS) and `package` (Android) are unique.
    *   Confirm `version` and `buildNumber` (or `versionCode` for Android) are correctly set.

#### Assessment idea
1.  **Question:** You have completed developing your React Native app and are ready to submit it to both the Google Play Store and Apple App Store. You are using Expo Application Services (EAS). Which command would you use to generate the production-ready Android App Bundle (AAB) for submission?
    *   A) `expo publish`
    *   B) `eas build --platform android --profile development`
    *   C) `eas build --platform android --profile production`
    *   D) `react-native run-android --variant=release`

    **Correct Answer:** C) `eas build --platform android --profile production`
    **Explanation:** `eas build` is the command to generate native binaries using EAS. The `--platform android` specifies the target platform, and `--profile production` ensures that the build uses the settings defined in your `eas.json`'s `production` profile, which is typically configured for app store submission (e.g., `distribution: "store"`).

2.  **Question:** You've submitted your React Native app to the Apple App Store, but it was rejected. The rejection reason states "2.1 - App Completeness: Your app crashed on launch." What is the most important immediate action you should take to resolve this?
    *   A) Change the app's description and screenshots to be more appealing.
    *   B) Immediately resubmit the same build, hoping it passes the second time.
    *   C) Thoroughly test your app on various iOS devices and simulators, identify the crash's root cause, fix it, and then generate a new build for resubmission.
    *   D) Contact Apple support and argue that your app does not crash on your development device.

    **Correct Answer:** C) Thoroughly test your app on various iOS devices and simulators, identify the crash's root cause, fix it, and then generate a new build for resubmission.
    **Explanation:** A crash on launch is a critical bug that will always lead to rejection. The immediate and most important action is to diagnose and fix the underlying issue. This involves comprehensive testing, debugging, and then creating a new, stable build for resubmission. Arguing with Apple or resubmitting an uncorrected build is unproductive and will lead to further rejections.

#### AI generation note
Create a 15-minute video walkthrough. Begin with a 2-minute overview of developer accounts and the general submission flow. Transition to a 5-minute live demo showing `eas build --platform android --profile production` and `eas build --platform ios --profile production`, explaining the output (AAB, IPA). Then, dedicate 4 minutes to a guided tour of the Google Play Console, highlighting "Create app," "Store Listing," and "App Content" sections with screenshots/mockups. Follow with a 4-minute guided tour of App Store Connect, focusing on "New App," "App Information," and "Prepare for Submission" with screenshots/mockups. Conclude with a rapid-fire list of common rejection reasons with visual cues. Interactive element: A checklist for learners to prepare their own app store listing assets.

---

## Final Capstone Project

Upon completing this comprehensive guide, you are now equipped to build sophisticated mobile applications using React Native. The capstone project is your opportunity to synthesize all the knowledge and skills you've acquired throughout the course into a practical, real-world application. You will choose one of the following project options, each designed to challenge you to integrate various modules, from component design and state management to API integration and navigation. This project is not just an assessment; it's a portfolio piece that demonstrates your proficiency in React Native.

Each project comes with a set of core requirements that must be met to successfully complete the assignment. Additionally, stretch goals are provided to encourage you to explore advanced topics, implement more complex features, and truly make the application your own. Remember to prioritize clean code, robust error handling, and a user-friendly interface. The estimated timeframes are suggestions; focus on learning and building a quality application.

### Project Option 1: Recipe Finder & Organizer App

This application will allow users to discover recipes, view their details, and save their favorites for easy access later. It's a fantastic way to practice API integration, navigation, and local data persistence.

**Requirements:**
*   **Recipe Search:** Implement a search bar that allows users to find recipes by keyword (e.g., "pasta," "chicken curry"). This should utilize a public recipe API (e.g., Spoonacular API, TheMealDB API).
*   **Recipe List Display:** Show search results in a scrollable list (using `FlatList`), displaying key information like recipe name and a thumbnail image.
*   **Recipe Detail View:** When a user taps on a recipe from the list, navigate to a detailed screen showing ingredients, instructions, and preparation time.
*   **Favorite Recipes:** Allow users to "favorite" recipes from the detail screen. These favorited recipes should be stored locally using `AsyncStorage` and accessible from a dedicated "Favorites" tab or screen.
*   **Navigation:** Utilize React Navigation (Stack and Tab Navigators) to manage transitions between the search screen, detail screen, and favorites screen.
*   **Styling:** Apply consistent and appealing styling using `StyleSheet` and Flexbox for responsive layouts.

**Stretch Goals:**
*   **Dietary Filters:** Add options to filter search results by dietary restrictions (e.g., vegetarian, gluten-free) or cuisine type.
*   **Offline Mode:** Implement a basic offline mode where favorited recipes' details are cached and viewable without an internet connection.
*   **User Accounts (Mock):** Simulate user authentication to demonstrate how different users might have different favorite lists.
*   **Share Functionality:** Allow users to share a recipe link via their device's native sharing capabilities.

**Evaluation Criteria:**
*   **Functionality (40%):** All core requirements met, app runs without crashes, API integration is robust, local storage works correctly.
*   **Code Quality (30%):** Clean, readable, well-organized code; appropriate use of components, props, and state; error handling implemented.
*   **UI/UX (20%):** Intuitive navigation, appealing design, responsive layout across different device sizes.
*   **Technical Understanding (10%):** Demonstrates a clear understanding of React Native concepts and best practices.

**Estimated Time:** 20-30 hours

### Project Option 2: Simple E-commerce Product Catalog

Build a basic mobile storefront that displays products, allows users to view details, and add items to a shopping cart. This project emphasizes data fetching, complex state management, and multi-screen navigation.

**Requirements:**
*   **Product Listing:** Display a catalog of products fetched from a public e-commerce API (e.g., Fake Store API, or create a mock JSON API). Products should be categorized and presented in a scrollable list or grid.
*   **Product Detail Page:** Tapping on a product should navigate to a dedicated screen showing its image, description, price, and an "Add to Cart" button.
*   **Shopping Cart:** Implement a shopping cart feature where users can add multiple products. The cart state should persist across app sessions using `AsyncStorage`.
*   **Cart View:** A dedicated screen to view items currently in the cart, adjust quantities, and remove items. Display the total price.
*   **Basic Checkout Flow:** A simulated checkout button that clears the cart and provides a confirmation message. No actual payment processing is required.
*   **Navigation:** Use a combination of Stack and Tab Navigators for seamless transitions between product categories, product details, and the shopping cart.
*   **Styling:** Create a clean, modern e-commerce interface using Flexbox and `StyleSheet` for layout and visual appeal.

**Stretch Goals:**
*   **Product Search:** Add a search bar to filter products by name or description.
*   **User Authentication (Mock):** Simulate login/logout and associate a cart with a specific (mock) user.
*   **Product Reviews:** Display mock reviews for products.
*   **Push Notifications:** Implement a local push notification when an item is added to the cart or a "checkout successful" message.

**Evaluation Criteria:**
*   **Functionality (40%):** All core features implemented, cart logic is sound, data persistence works, API calls are handled robustly.
*   **Code Quality (30%):** Modular components, effective state management (especially for the cart), good error handling for API requests.
*   **UI/UX (20%):** Clear product presentation, intuitive cart management, responsive design.
*   **Technical Understanding (10%):** Demonstrates mastery of state, props, navigation, and `AsyncStorage`.

**Estimated Time:** 25-35 hours

### Project Option 3: Personal Finance Tracker

Develop an application that allows users to track their income and expenses, categorize transactions, and view a summary of their financial activity. This project focuses on data input, local data management, and basic data visualization.

**Requirements:**
*   **Transaction Input:** Users can add new income or expense transactions, specifying the amount, description, category (e.g., Food, Transport, Salary), and date.
*   **Transaction List:** Display all recorded transactions in a sortable and filterable list, showing amount, description, category, and date.
*   **Data Persistence:** All transactions must be stored locally using `AsyncStorage` and loaded when the app starts.
*   **Summary View:** A dedicated screen showing a summary of financial activity, including total income, total expenses, and current balance.
*   **Category Management:** Allow users to add or remove custom transaction categories.
*   **Navigation:** Implement a Stack Navigator for adding transactions and a Tab Navigator for switching between the transaction list and summary view.
*   **Styling:** Design a clear and functional interface for data entry and display, using `StyleSheet` and Flexbox.

**Stretch Goals:**
*   **Data Visualization:** Integrate a charting library (e.g., `react-native-chart-kit`) to display income/expense trends or category breakdowns (e.g., pie chart of expenses by category).
*   **Budgeting Feature:** Allow users to set monthly budgets for specific categories and show progress towards those budgets.
*   **Recurring Transactions:** Implement functionality for setting up recurring income or expense entries.
*   **Export Data:** Provide an option to export transactions (e.g., as a CSV string).

**Evaluation Criteria:**
*   **Functionality (40%):** All transaction operations work correctly, data persists reliably, summary calculations are accurate, category management is functional.
*   **Code Quality (30%):** Well-structured components, robust data handling logic, clear state management, efficient use of `AsyncStorage`.
*   **UI/UX (20%):** User-friendly forms for transaction input, clear presentation of financial data, intuitive navigation.
*   **Technical Understanding (10%):** Demonstrates strong grasp of forms, local storage, and data aggregation in React Native.

**Estimated Time:** 20-30 hours

## Final Examination

This final examination is designed to assess your comprehensive understanding of React Native concepts, practical application skills, and problem-solving abilities. It covers all modules, from foundational React principles to advanced topics like navigation, API integration, and local storage. The exam consists of a mix of question types, including conceptual definitions, code tracing, code writing, and design/debugging scenarios. Take your time, read each question carefully, and provide detailed answers.

### Section 1: Concept Definitions (4 Questions)

**Question 1:** Explain the fundamental difference between `useState` and `useRef` hooks in React Native, providing a scenario where each would be the appropriate choice.

**Answer 1:**
The `useState` hook is used for managing state that, when updated, triggers a re-render of the component. It's ideal for data that directly influences the UI's appearance or behavior, such as a counter, input field value, or a list of items. When `useState`'s setter function is called, React re-renders the component with the new state value.

The `useRef` hook, on the other hand, is used to create a mutable `ref` object whose `.current` property can hold any value, similar to an instance variable in a class component. Crucially, updating a `ref`'s `.current` property **does not** trigger a component re-render. `useRef` is suitable for accessing DOM elements directly (though less common in React Native as you don't directly manipulate the DOM), storing a mutable value that doesn't need to trigger re-renders (e.g., a timer ID, a previous state value, or a reference to an imperative handle), or maintaining a value across re-renders without causing them.

**Scenario Example:**
*   **`useState`:** Managing the text input value in a search bar. When the user types, the `useState` hook updates the input value, causing the component to re-render and display the new text.
*   **`useRef`:** Storing a reference to a `TextInput` component to imperatively `focus()` it when a button is pressed. The `ref` allows direct interaction with the underlying native component without triggering unnecessary re-renders when the `ref` itself is updated.

**Question 2:** Describe the primary purpose of the `useEffect` hook. Provide an example of a side effect that `useEffect` handles, and explain how its dependency array influences its execution.

**Answer 2:**
The `useEffect` hook's primary purpose is to handle "side effects" in functional components. Side effects are operations that interact with the outside world or have an impact beyond the component's render cycle. Common side effects include data fetching, subscriptions, manually changing the DOM (less relevant in RN but conceptually similar to interacting with native views), setting up timers, or logging. `useEffect` allows you to run code after every render (or specific renders) where the component has been committed to the screen.

**Example Side Effect:** Data fetching from an API.
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      });

    // Cleanup function (optional, but good practice for subscriptions/timers)
    return () => {
      // For instance, if you had a subscription, you'd unsubscribe here.
      // No specific cleanup needed for a simple fetch, but demonstrates the concept.
    };
  }, [userId]); // Dependency array

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    return <Text>User not found.</Text>;
  }

  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
}
```
**Dependency Array Influence:**
The dependency array (the second argument to `useEffect`, `[userId]` in the example) controls when the effect function re-runs.
*   **Empty array (`[]`):** The effect runs only once after the initial render, similar to `componentDidMount` in class components. It will not re-run on subsequent renders.
*   **No array (omitted):** The effect runs after *every* render of the component. This can lead to performance issues or infinite loops if not handled carefully.
*   **Array with values (`[prop1, state2]`):** The effect runs after the initial render and then only if any of the values in the dependency array have changed between renders. In the example, the effect will re-fetch user data only if the `userId` prop changes. This prevents unnecessary API calls if other state or props update but `userId` remains the same.

**Question 3:** What is the React Native bridge, and why is it a crucial component in how React Native apps function?

**Answer 3:**
The React Native bridge is a communication layer that facilitates interaction between the JavaScript thread (where your React Native code runs) and the native UI thread (where the actual native components and platform APIs run). It's a crucial component because JavaScript cannot directly access or manipulate native UI elements or platform-specific APIs (like the camera, GPS, or Bluetooth).

**Why it's crucial:**
1.  **Cross-Platform Abstraction:** It allows developers to write most of their application logic in JavaScript, and the bridge translates these instructions into native calls for iOS and Android. When you write `<View>` or `<Text>`, React Native uses the bridge to create the corresponding `UIView` (iOS) or `android.view.View` (Android) on the native side.
2.  **Performance:** While JavaScript handles the business logic and component rendering instructions, the actual UI rendering is done natively. This means the UI remains responsive and performs at a high frame rate, even if the JavaScript thread is busy.
3.  **Access to Native Modules:** The bridge provides a mechanism for JavaScript to invoke native modules (e.g., `NativeModules.Camera`) to access platform-specific features not available in JavaScript, and for native code to send events back to JavaScript.
4.  **Asynchronous Communication:** Communication across the bridge is asynchronous and serialized. Messages (like UI updates or native API calls) are batched and sent across the bridge efficiently, minimizing overhead.

In essence, the bridge is the interpreter that allows your JavaScript code to "speak" to the underlying iOS and Android operating systems, enabling the promise of "learn once, write anywhere" while still delivering native performance and access to platform features.

**Question 4:** Explain the difference between `alignItems` and `justifyContent` in React Native's Flexbox layout system. Provide a simple code example demonstrating each.

**Answer 4:**
In React Native's Flexbox, both `alignItems` and `justifyContent` control the alignment of children within a container, but they operate along different axes.

*   **`justifyContent`:** This property defines how children are distributed along the **main axis** of the flex container. The main axis is determined by the `flexDirection` property (which defaults to `column` in React Native).
    *   If `flexDirection` is `column` (default), `justifyContent` aligns items vertically.
    *   If `flexDirection` is `row`, `justifyContent` aligns items horizontally.
    *   Common values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

*   **`alignItems`:** This property defines how children are distributed along the **cross axis** of the flex container. The cross axis is perpendicular to the main axis.
    *   If `flexDirection` is `column`, `alignItems` aligns items horizontally.
    *   If `flexDirection` is `row`, `alignItems` aligns items vertically.
    *   Common values: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`.

**Code Example:**

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxAlignment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>justifyContent: center (main axis)</Text>
      <View style={[styles.boxContainer, { justifyContent: 'center' }]}>
        <View style={styles.item} />
        <View style={styles.item} />
      </View>

      <Text style={styles.header}>alignItems: center (cross axis)</Text>
      <View style={[styles.boxContainer, { alignItems: 'center' }]}>
        <View style={styles.item} />
        <View style={styles.item} />
      </View>

      <Text style={styles.header}>justifyContent: space-between & alignItems: flex-end</Text>
      <View style={[styles.boxContainer, { justifyContent: 'space-between', alignItems: 'flex-end' }]}>
        <View style={styles.item} />
        <View style={styles.item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  boxContainer: {
    height: 100, // Fixed height for demonstration
    width: '90%', // Fixed width for demonstration
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    flexDirection: 'column', // Default, but explicit for clarity
  },
  item: {
    width: 40,
    height: 40,
    backgroundColor: 'dodgerblue',
    margin: 5,
  },
});

export default FlexboxAlignment;
```
In the example above, `boxContainer` has `flexDirection: 'column'`.
*   `justifyContent: 'center'` will center the blue `item` boxes vertically within `boxContainer`.
*   `alignItems: 'center'` will center the blue `item` boxes horizontally within `boxContainer`.

### Section 2: Code Tracing (3 Questions)

**Question 5:** Consider the following React Native component. What will be displayed on the screen after the "Increment" button is pressed twice, and then the "Reset" button is pressed once?

```javascript
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Counter;
```

**Answer 5:**
1.  **Initial state:** `count` is `0`. Screen displays "Count: 0".
2.  **"Increment" pressed once:** `handleIncrement` is called. `setCount(prevCount => prevCount + 1)` updates `count` from `0` to `1`. Screen re-renders, displaying "Count: 1".
3.  **"Increment" pressed a second time:** `handleIncrement` is called again. `setCount(prevCount => prevCount + 1)` updates `count` from `1` to `2`. Screen re-renders, displaying "Count: 2".
4.  **"Reset" pressed once:** `handleReset` is called. `setCount(0)` updates `count` to `0`. Screen re-renders, displaying "Count: 0".

**Final Output:** The screen will display "Count: 0".

**Question 6:** Imagine a React Navigation Stack Navigator configured as follows. If the user starts on the `HomeScreen`, then navigates to `DetailsScreen`, then to `SettingsScreen`, and finally presses the hardware back button (or swipe back gesture on iOS), which screen will they land on?

```javascript
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// (Assume HomeScreen, DetailsScreen, SettingsScreen exist with navigation.navigate calls)
// Example navigation from HomeScreen: navigation.navigate('Details');
// Example navigation from DetailsScreen: navigation.navigate('Settings');
```

**Answer 6:**
The Stack Navigator works like a stack of cards. When you navigate to a new screen, it's pushed onto the top of the stack. When you go back, the top screen is popped off.

1.  **Start:** Stack: `[Home]`
2.  **Navigate to `DetailsScreen`:** Stack: `[Home, Details]`
3.  **Navigate to `SettingsScreen`:** Stack: `[Home, Details, Settings]`
4.  **Press back button:** The `Settings` screen is popped off the stack.

**Final Screen:** The user will land on the `DetailsScreen`.

**Question 7:** Given the following component, what will be the background color of the `Text` component when `isWarning` is `true` and `isActive` is `false`?

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledComponent = ({ isWarning, isActive }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.baseText,
          isWarning && styles.warningText,
          isActive ? styles.activeText : styles.inactiveText,
          { fontSize: 18 } // Inline style
        ]}
      >
        Hello Styled World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  warningText: {
    backgroundColor: 'orange',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'blue',
    backgroundColor: 'lightblue',
  },
  inactiveText: {
    color: 'gray',
    backgroundColor: 'lightgray',
  },
});

export default StyledComponent;
```

**Answer 7:**
React Native's `StyleSheet` merging behavior for arrays of styles is that later styles in the array override earlier ones for conflicting properties.

Let's trace the `backgroundColor` property:
1.  `styles.baseText`: `backgroundColor: 'white'`
2.  `isWarning && styles.warningText`: Since `isWarning` is `true`, `styles.warningText` is applied. This sets `backgroundColor: 'orange'`. (Overrides 'white')
3.  `isActive ? styles.activeText : styles.inactiveText`: Since `isActive` is `false`, `styles.inactiveText` is applied. This sets `backgroundColor: 'lightgray'`. (Overrides 'orange')
4.  `{ fontSize: 18 }`: This inline style only affects `fontSize`, not `backgroundColor`.

**Final Background Color:** The background color of the `Text` component will be `'lightgray'`.

### Section 3: Code Writing (4 Questions)

**Question 8:** Write a functional React Native component named `Greeting` that accepts a `name` prop (string) and an optional `age` prop (number). If `age` is provided, it should display "Hello, [name]! You are [age] years old." Otherwise, it should display "Hello, [name]!"

**Answer 8:**

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        Hello, {name}!
        {age ? ` You are ${age} years old.` : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Greeting;

// Example Usage:
// <Greeting name="Alice" />
// <Greeting name="Bob" age={30} />
```
**Partial Credit Guidance:**
*   Correct functional component structure: +2 points
*   Correctly accepts `name` and `age` props: +2 points
*   Correctly displays "Hello, [name]!": +2 points
*   Correctly conditionally displays age: +4 points
*   Basic styling: +1 point

**Question 9:** Write a React Native component that fetches a list of 5 random users from the `https://randomuser.me/api/?results=5` API and displays their names (first and last) in a `FlatList`. Include a loading indicator and error handling.

**Answer 9:**

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (e) {
        setError(e.message);
        Alert.alert("Error", "Failed to fetch users. Please check your network connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name.first} {item.name.last}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  userItem: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default UserList;
```
**Partial Credit Guidance:**
*   Correct functional component with `useState` and `useEffect`: +3 points
*   Successful API call using `fetch` (or `axios`): +3 points
*   Displays data in `FlatList`: +4 points
*   Includes loading indicator: +2 points
*   Includes basic error handling (e.g., `try/catch`, `Alert`): +3 points
*   `keyExtractor` for `FlatList`: +1 point
*   Basic styling: +2 points

**Question 10:** Set up a basic React Navigation Stack Navigator with two screens: `LoginScreen` and `DashboardScreen`. The `LoginScreen` should have a button that navigates to the `DashboardScreen`. The `DashboardScreen` should have a button that navigates back to the `LoginScreen` (using `replace` to prevent going back to dashboard with hardware back button).

**Answer 10:**

```javascript
// App.js (Main Navigator Setup)
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// LoginScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // In a real app, you'd perform authentication here.
    // After successful login, replace the current screen to prevent going back to login.
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
});

export default LoginScreen;

// DashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    // In a real app, you'd clear user session here.
    // Replace the current screen to go back to login, clearing the dashboard from stack.
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Screen</Text>
      <Text style={styles.subtitle}>Welcome to your app!</Text>
      <Button title="Log Out" onPress={handleLogout} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#004d40',
  },
});

export default DashboardScreen;
```
**Partial Credit Guidance:**
*   Correct `NavigationContainer` and `createNativeStackNavigator` setup in `App.js`: +3 points
*   `LoginScreen` component with a button: +2 points
*   `DashboardScreen` component with a button: +2 points
*   `LoginScreen` navigates to `DashboardScreen` using `navigation.replace('Dashboard')`: +4 points
*   `DashboardScreen` navigates back to `LoginScreen` using `navigation.replace('Login')`: +4 points
*   Basic styling for both screens: +1 point

**Question 11:** Write a React Native component that uses `AsyncStorage` to save and display a user's preferred theme (e.g., 'light' or 'dark'). It should have two buttons to switch between 'light' and 'dark' themes. The theme should persist across app restarts.

**Answer 11:**

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@MyApp:theme';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load theme from AsyncStorage when component mounts
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme !== null) {
          setTheme(storedTheme);
        }
      } catch (e) {
        Alert.alert("Error", "Failed to load theme.");
        console.error("Error loading theme:", e);
      } finally {
        setLoading(false);
      }
    };

    loadTheme();
  }, []); // Run once on mount

  const saveTheme = async (newTheme) => {
    try {
      await AsyncStorage.setItem(THEME_KEY, newTheme);
      setTheme(newTheme);
    } catch (e) {
      Alert.alert("Error", "Failed to save theme.");
      console.error("Error saving theme:", e);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading theme...</Text>
      </View>
    );
  }

  const containerStyle = theme === 'dark' ? styles.darkContainer : styles.lightContainer;
  const textStyle = theme === 'dark' ? styles.darkText : styles.lightText;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.currentThemeText, textStyle]}>Current Theme: {theme.toUpperCase()}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Set Light Theme" onPress={() => saveTheme('light')} disabled={theme === 'light'} />
        <View style={{ width: 10 }} /> {/* Spacer */}
        <Button title="Set Dark Theme" onPress={() => saveTheme('dark')} disabled={theme === 'dark'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  currentThemeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default ThemeSwitcher;
```
**Partial Credit Guidance:**
*   Correct `useState` for theme and `useEffect` for loading: +3 points
*   Correctly uses `AsyncStorage.getItem` to load theme on mount: +4 points
*   Correctly uses `AsyncStorage.setItem` to save theme: +4 points
*   Two buttons to switch themes: +2 points
*   Displays current theme: +1 point
*   Basic styling reflecting the theme: +2 points
*   Includes loading state: +1 point
*   Basic error handling for `AsyncStorage` operations: +1 point

### Section 4: Design & Debugging Problems (4 Questions)

**Question 12:** You are debugging a React Native application and encounter the error message `TypeError: undefined is not an object (evaluating 'someObject.someProperty')`. Describe three common causes for this error and how you would approach debugging each.

**Answer 12:**
This is one of the most common errors in JavaScript and React Native, indicating that you're trying to access a property or method on a variable that is currently `undefined`.

**Common Causes and Debugging Approaches:**

1.  **Asynchronous Data Not Yet Loaded:**
    *   **Cause:** You're trying to render or use data that is being fetched asynchronously (e.g., from an API call, `AsyncStorage`, or a database) before the data has actually arrived and been set in your component's state. Initially, the state variable holding the data might be `null` or `undefined`.
    *   **Debugging:**
        *   **Check initial state:** Ensure your state variables that hold data are initialized to a safe default (e.g., `useState(null)`, `useState([])` for lists, `useState({})` for objects).
        *   **Conditional Rendering:** Implement conditional rendering to only display components that rely on the data *after* the data has been successfully loaded. Use a loading state (`isLoading`) and render a loading indicator or `null` until the data is available.
            ```javascript
            if (loading || !data) {
              return <ActivityIndicator />;
            }
            return <Text>{data.property}</Text>; // Now data is guaranteed to exist
            ```
        *   **Optional Chaining (`?.`)**: Use optional chaining (`data?.property`) when accessing nested properties. This will gracefully return `undefined` instead of throwing an error if `data` is `null` or `undefined`.
        *   **Console Logging:** Log the value of `someObject` *before* the line where the error occurs to see its actual value.

2.  **Incorrect Prop Passing or Missing Prop:**
    *   **Cause:** A parent component fails to pass a required prop to a child component, or passes `undefined` for a prop that the child expects to be an object. The child then tries to access a property on this `undefined` prop.
    *   **Debugging:**
        *   **Component Tree Inspection:** Use React DevTools (available for React Native) to inspect the component tree and verify that the correct props are being passed from parent to child.
        *   **`console.log(props)`:** In the child component, log the `props` object at the beginning of its render function to see what it's actually receiving.
        *   **Default Props/Values:** Provide default values for props using destructuring (`const MyComponent = ({ data = {} }) => { ... }`) or `defaultProps` (though less common in functional components) to ensure the prop is at least an empty object if not provided.
        *   **Prop Types (TypeScript/PropTypes):** Use TypeScript or `PropTypes` to define the expected shape and type of your props. This helps catch missing or incorrect props during development.

3.  **Typos or Misspellings:**
    *   **Cause:** A simple typo in a variable name, object property, or function call can lead to `undefined`. For example, trying to access `user.adress` instead of `user.address`.
    *   **Debugging:**
        *   **Careful Code Review:** Manually review the line indicated in the error message and the surrounding code for any misspellings.
        *   **`console.log` the object:** Log the object (`console.log(someObject)`) to see its actual structure and available properties. This helps identify if a property name is incorrect.
        *   **IDE Autocompletion:** Leverage your IDE's autocompletion features, which can help prevent typos by suggesting valid property names.

**Question 13:** You've built a React Native screen with a `FlatList` that displays 1000 items. Users are reporting that the list feels sluggish and unresponsive, especially when scrolling quickly. Identify two common performance issues with `FlatList` and describe how you would optimize the component to address these problems.

**Answer 13:**
`FlatList` is designed for efficiently rendering large lists, but it still requires proper configuration to avoid performance bottlenecks. Two common issues leading to sluggishness are:

1.  **Excessive Re-renders of List Items:**
    *   **Problem:** If your `renderItem` function creates complex components or if the data for items changes frequently, `FlatList` might re-render items more often than necessary. When the parent `FlatList` component re-renders (e.g., due to state changes in the parent), all visible `renderItem` components might also re-render, even if their underlying data hasn't changed.
    *   **Optimization Strategy:**
        *   **`React.memo` for `renderItem` components:** Wrap your individual list item components with `React.memo`. This is a higher-order component that memoizes the component, preventing it from re-rendering if its props have not changed.
            ```javascript
            // MyListItem.js
            import React from 'react';
            import { View, Text, StyleSheet } from 'react-native';

            const MyListItem = React.memo(({ item, onPress }) => {
              // This component will only re-render if 'item' or 'onPress' props change
              return (
                <View style={styles.item}>
                  <Text>{item.title}</Text>
                  <Button title="Details" onPress={() => onPress(item.id)} />
                </View>
              );
            });
            // ... styles ...
            export default MyListItem;

            // In FlatList parent component:
            <FlatList
              data={data}
              renderItem={({ item }) => <MyListItem item={item} onPress={handleItemPress} />}
              keyExtractor={item => item.id.toString()}
            />
            ```
        *   **Stable `renderItem` and `keyExtractor`:** Ensure your `renderItem` prop is a stable function (not recreated on every parent render) and that `keyExtractor` provides a unique and stable key for each item. `keyExtractor` is crucial for React to efficiently identify which items have changed, been added, or removed.

2.  **Over-rendering Off-screen Items and Large `initialNumToRender`:**
    *   **Problem:** `FlatList` tries to render a certain number of items initially (`initialNumToRender`) and maintains a buffer of items above and below the visible viewport (`windowSize`). If `initialNumToRender` is too high, or if `windowSize` is excessively large, `FlatList` might render many items that are not immediately visible, consuming memory and CPU.
    *   **Optimization Strategy:**
        *   **Adjust `initialNumToRender`:** Start with a reasonable `initialNumToRender` value (e.g., 10-20, depending on item height) that covers the initial screen view. Avoid setting it too high.
        *   **Optimize `getItemLayout`:** If all your list items have a fixed height, provide the `getItemLayout` prop. This allows `FlatList` to calculate the exact position and dimensions of items without having to render them, significantly improving scroll performance, especially for long lists.
            ```javascript
            const ITEM_HEIGHT = 100; // Assuming all items are 100px tall

            <FlatList
              data={data}
              renderItem={({ item }) => <MyListItem item={item} />}
              keyExtractor={item => item.id.toString()}
              getItemLayout={(data, index) => (
                { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
              )}
              initialNumToRender={10} // Adjust as needed
              maxToRenderPerBatch={5} // Render more items in batches
              windowSize={21} // Default is 21 (10 above, 10 below, 1 visible)
            />
            ```
        *   **Reduce `windowSize` (with caution):** While `windowSize` helps pre-render items for smooth scrolling, reducing it too much can lead to blank areas during fast scrolling. Experiment to find a balance. The default of `21` is often a good starting point.
        *   **`removeClippedSubviews` (Android specific):** For Android, setting `removeClippedSubviews={true}` can improve performance by unmounting off-screen views, but it can sometimes cause issues with complex layouts. Use with caution and test thoroughly.

By combining `React.memo` with proper `FlatList` configuration like `getItemLayout` and optimized rendering parameters, you can significantly improve the perceived responsiveness and smoothness of large lists.

**Question 14:** You are designing a mobile application that needs to display user-generated content, including text and images. The app must look good on various screen sizes, from small phones to large tablets. Describe your approach to creating a responsive layout for this content in React Native.

**Answer 14:**
Creating a responsive layout in React Native involves leveraging Flexbox, conditional styling, and dimension APIs to adapt the UI to different screen sizes and orientations. Here's a comprehensive approach:

1.  **Embrace Flexbox for Layout:**
    *   **Default `flexDirection: 'column'`:** React Native's default `flexDirection` is `column`. Use `flex: 1` on root containers to ensure they take up available space.
    *   **`flexDirection: 'row'` for horizontal layouts:** For elements that should sit side-by-side (e.g., an image next to text, or buttons in a row), explicitly set `flexDirection: 'row'`.
    *   **`justifyContent` and `alignItems`:** Master these properties to control spacing and alignment along the main and cross axes. Use values like `space-between`, `center`, `flex-start`, `flex-end` to distribute content dynamically.
    *   **`flexWrap`:** For elements that might overflow a single row (e.g., tags), use `flexWrap: 'wrap'` to allow them to flow onto the next line.
    *   **`flex` property on children:** Use `flex: 1` on child components to make them expand and contract proportionally within their parent. For example, in a row, `flex: 1` on two items makes them each take half the width.

2.  **Relative Units and Percentages:**
    *   **Avoid Fixed Widths/Heights (mostly):** While absolute pixel values are sometimes necessary, rely more on `flex`, percentages (`width: '50%'`), and `Dimensions` API to define sizes relative to the screen.
    *   **`padding` and `margin`:** Use consistent `padding` and `margin` values, or scale them based on screen size (see point 3).

3.  **`Dimensions` API for Screen Size Awareness:**
    *   **Get Screen Width/Height:** Use `Dimensions.get('window').width` and `Dimensions.get('window').height` to get the current screen dimensions.
    *   **Conditional Styling:** Apply different styles based on screen width (e.g., if `width < 768` for phones, apply one set of styles; for tablets, another).
        ```javascript
        import { Dimensions, StyleSheet } from 'react-native';
        const { width } = Dimensions.get('window');
        const isTablet = width >= 768;

        const styles = StyleSheet.create({
          container: {
            flexDirection: isTablet ? 'row' : 'column', // Layout changes for tablet
            padding: isTablet ? 30 : 15,
          },
          image: {
            width: isTablet ? '40%' : '100%',
            height: isTablet ? 200 : 150,
            resizeMode: 'contain',
          },
          textContainer: {
            flex: 1,
            padding: isTablet ? 20 : 10,
          },
        });
        ```
    *   **Orientation Changes:** The `Dimensions` API updates on orientation changes, allowing you to react to landscape vs. portrait modes.

4.  **`PixelRatio` for Font Sizes and Icons:**
    *   **Scale Font Sizes:** Use `PixelRatio.getFontScale()` or a custom scaling function to adjust font sizes slightly based on device density, ensuring text is readable without being too small or too large.
    *   **`moderateScale` (external library):** Libraries like `react-native-size-matters` provide `moderateScale` functions that help scale sizes (fonts, dimensions) consistently across different screen densities and sizes, which is often more robust than simple `PixelRatio` scaling.

5.  **Platform-Specific Code (`Platform` API):**
    *   For minor differences, use `Platform.OS === 'ios'` or `Platform.OS === 'android'` to apply platform-specific styles or logic (e.g., different shadow properties, safe area handling).
    *   For larger differences, consider platform-specific files (e.g., `MyComponent.ios.js`, `MyComponent.android.js`).

6.  **`SafeAreaView` for Notches and Status Bars:**
    *   Always wrap your top-level content in `SafeAreaView` from `react-native` to ensure content isn't obscured by device notches, status bars, or home indicators, especially on iOS.

**Example Scenario (User-Generated Content Card):**
For a card displaying user content (image, title, description):
*   **Small Screens (Phones):** Image at the top, full width. Text below it.
*   **Large Screens (Tablets):** Image on the left (e.g., 40% width), text content on the right (e.g., 60% width), using `flexDirection: 'row'`.
*   **Font sizes:** Slightly larger on tablets.
*   **Padding:** More generous padding on larger screens.

By combining these techniques, you can create flexible and adaptable layouts that provide an optimal user experience across the diverse range of mobile devices.

**Question 15:** A user reports that your React Native app crashes frequently when they try to upload large images. You suspect it's related to memory management or network timeouts. What steps would you take to debug and mitigate this issue?

**Answer 15:**
Crashing during large image uploads often points to memory pressure on the device or network instability leading to timeouts. Here's a systematic approach to debug and mitigate:

**Debugging Steps:**

1.  **Reproduce the Issue:**
    *   Get exact steps from the user.
    *   Test on various devices (especially older/lower-spec devices) and network conditions (slow Wi-Fi, cellular data).
    *   Try different image sizes (e.g., 1MB, 5MB, 10MB, 20MB) to pinpoint the threshold.

2.  **Monitor Memory Usage:**
    *   **Xcode Instruments (iOS):** Use the "Allocations" and "Leaks" instruments to monitor memory usage during the upload process. Look for sudden spikes or continuous memory growth.
    *   **Android Studio Profiler:** Use the Memory Profiler to track heap usage, object allocations, and identify potential memory leaks.
    *   **React Native Debugger/Flipper:** While primarily for JS, these can sometimes give hints if JS objects are growing excessively.

3.  **Check Network Requests:**
    *   **Flipper/React Native Debugger:** Monitor network requests. Check the status code, request/response size, and most importantly, the duration of the upload. Look for timeouts or failed requests.
    *   **Server Logs:** Coordinate with backend developers to check server-side logs for errors, timeouts, or excessively large payload rejections.

4.  **Examine Image Processing Code:**
    *   Review the code responsible for selecting, reading, and preparing the image for upload. Are you loading the full-resolution image into memory unnecessarily?
    *   Check for any synchronous operations on large data that might block the UI thread.

**Mitigation Strategies:**

1.  **Image Compression and Resizing (Client-Side):**
    *   **Implement Image Manipulation:** Before uploading, compress and/or resize the image on the client-side. Libraries like `react-native-image-picker` or `react-native-image-crop-picker` often provide options for `quality` (compression) and `maxWidth`/`maxHeight` (resizing).
        ```javascript
        // Example with react-native-image-crop-picker
        ImagePicker.openPicker({
          width: 1024, // Max width
          height: 1024, // Max height
          cropping: true, // Allow cropping
          quality: 0.7, // Compress to 70% quality
          mediaType: 'photo',
        }).then(image => {
          // image.path will now point to the compressed/resized image
          // Upload this image
        }).catch(e => console.log(e));
        ```
    *   **Benefit:** Reduces memory footprint on the device and network bandwidth usage, speeding up uploads and reducing server load.

2.  **Background Uploads and Progress Indicators:**
    *   **Use Native Background Uploads:** For very large files, consider using native background upload libraries (e.g., `react-native-background-upload` or `react-native-fs` with background upload capabilities). These leverage the OS's background task APIs, making uploads more resilient to app closures or network interruptions.
    *   **Show Progress:** Implement a progress bar or indicator to give users feedback during the upload. This improves UX and helps distinguish between a slow upload and a crash.
    *   **Retry Mechanism:** Implement a retry logic for failed uploads due to network issues.

3.  **Chunked Uploads:**
    *   **Break into Smaller Parts:** For extremely large files (e.g., videos, very high-res images), consider breaking the file into smaller chunks and uploading them sequentially. The server then reassembles these chunks. This requires more complex client and server-side logic but is very robust.

4.  **Optimize Network Request Configuration:**
    *   **Increase Timeout:** If using `fetch` or `axios`, ensure the timeout is sufficient for large uploads, especially on slower networks.
        ```javascript
        // Example with fetch (using AbortController for timeout)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 seconds
        fetch(url, { method: 'POST', body: formData, signal: controller.signal })
          .then(response => { /* ... */ })
          .catch(error => {
            if (error.name === 'AbortError') {
              console.log('Request timed out');
            } else {
              console.error('Fetch error:', error);
            }
          })
          .finally(() => clearTimeout(timeoutId));
        ```
    *   **Error Handling:** Implement robust error handling for network requests, including specific messages for different error types (e.g., network disconnected, server error, timeout).

By systematically debugging and applying these mitigation strategies, you can significantly improve the reliability and user experience of large image uploads in your React Native application.

## Course Conclusion

Congratulations on completing "React Native – The Practical Guide"! You've embarked on an incredible journey, transforming from a beginner to a confident developer capable of building sophisticated cross-platform mobile applications. You now possess a robust skill set that extends beyond just writing code; you understand the core principles that drive modern mobile development.

You are now proficient in utilizing React Native and Expo to create engaging user interfaces, manage complex application states with hooks, navigate seamlessly between screens using React Navigation, and interact with external data sources through API calls. You've mastered styling with Flexbox, persisted data locally with `AsyncStorage`, and gained valuable insights into debugging and optimizing your applications for performance. These aren't just theoretical concepts; you've applied them through hands-on exercises and are ready to tackle real-world challenges.

The world of mobile development is dynamic and ever-evolving, and your journey doesn't end here. The skills you've acquired in this course provide a strong foundation, but continuous learning and practice are key to staying at the forefront. We encourage you to keep building, experimenting, and contributing to the vibrant React Native community.

### Where to go next:

1.  **Deep Dive into Advanced React Native Topics:**
    *   **Animations:** Explore `React Native Reanimated` for complex, high-performance animations.
    *   **Native Modules & UI Components:** Learn how to write custom native modules in Swift/Objective-C (iOS) or Java/Kotlin (Android) to extend React Native's capabilities or integrate existing native SDKs.
    *   **Maps & Location Services:** Integrate mapping libraries like `react-native-maps` and leverage device location.
    *   **Push Notifications:** Implement push notification services (e.g., Firebase Cloud Messaging, Expo Notifications).
    *   **Camera & Gallery:** Work with device camera and image/video galleries.
2.  **Explore Advanced State Management:**
    *   For larger applications, consider dedicated state management libraries like **Redux**, **Zustand**, or **MobX**, or master the **React Context API** for simpler global state.
3.  **Full-Stack Mobile Development:**
    *   Pair your front-end React Native skills with a backend framework. Learn **Node.js with Express**, **Python with Django/Flask**, or cloud platforms like **Firebase** or **AWS Amplify** to build complete, end-to-end mobile solutions.
4.  **Engage with the Community:**
    *   Join the official **React Native Community** on Discord, follow relevant blogs (e.g., freeCodeCamp, dev.to), participate in open-source projects on GitHub, and attend local meetups or online conferences. Learning from others and contributing your own knowledge is invaluable.
5.  **Build More Projects:**
    *   The best way to solidify your learning is by building. Take on personal projects, contribute to open-source, or even try to replicate existing popular apps. Each project will teach you something new and strengthen your problem-solving abilities.

This course has equipped you with the essential tools and knowledge to build beautiful, performant, and robust mobile applications. Embrace the challenges, celebrate your successes, and continue to explore the endless possibilities that React Native offers. We are excited to see what you will create!

---


> End of Syllabus: React Native – The Practical Guide
> Course ID: react-native-the-practical-guide
> Total modules: 6
> Total chapters: 24
> Level: Beginner–Intermediate
> Subcategory: Mobile App Development
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
