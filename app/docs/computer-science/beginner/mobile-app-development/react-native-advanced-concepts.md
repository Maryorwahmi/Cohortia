---
course_id: react-native-advanced-concepts
title: React Native Advanced Concepts
provider: Cohortia
platform: Cohortia
cost: Included with Cohortia
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Mobile App Development
skills: Mobile App Development, React Native, State Management, Navigation, Performance Optimization, Native Module Integration, Offline Data, Animations, Testing
level: Beginner
type: Course
duration: Self-paced
url: Cohortia course page (original reference: (URL not verified))
original_reference: Udemy (Stephen Grider) / Online
ownership_note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "React Native Advanced Concepts," a Cohortia course designed to elevate your mobile app development skills beyond the fundamentals. While you might be familiar with the basics of React Native, this course is your gateway to understanding and implementing more sophisticated patterns and features that define truly robust and high-performing applications. We recognize that "advanced concepts" can sound daunting, especially for a beginner, but rest assured, we break down each complex topic into digestible, practical lessons, building your expertise progressively and confidently. Our goal is to empower you to tackle real-world mobile development challenges with a comprehensive toolkit.

Throughout this course, we will dive deep into critical areas often overlooked in introductory materials. You'll learn to manage application state with greater efficiency and scalability, moving beyond simple local component state to leverage powerful patterns like the Context API and the core principles behind Redux. Navigation, a cornerstone of any multi-screen application, will be explored in depth, covering complex structures, authentication flows, and deep linking. We'll also dedicate significant attention to performance optimization, teaching you how to diagnose bottlenecks and implement strategies to ensure your apps are not just functional, but also fast and responsive across various devices.

Furthermore, you will gain practical experience in integrating your React Native applications with the rich capabilities of native device features. This includes working with the camera, geolocation services, and push notifications, along with a conceptual understanding of how native modules bridge the gap between JavaScript and platform-specific code. We'll also equip you with the knowledge to build resilient offline-first applications, ensuring a seamless user experience even without an internet connection. Finally, you'll master the art of creating engaging and fluid user interfaces through advanced animations and sophisticated gesture handling, making your apps not just powerful, but also delightful to use.

By the end of this course, you won't just know about advanced React Native concepts; you'll be able to confidently apply them to build production-ready mobile applications. This journey will transform you from a basic React Native user into a developer capable of architecting and implementing complex features, debugging intricate issues, and delivering polished, performant, and feature-rich mobile experiences. Join us as we unlock the full potential of React Native together, building the skills that will set you apart in the mobile development landscape.

### Learning Outcomes

Upon completing this course, you will be able to:

*   Implement advanced state management patterns using the React Context API and understand the core principles of Redux.
*   Design and build complex navigation structures, including nested navigators, authentication flows, and deep linking with React Navigation.
*   Optimize React Native application performance by identifying bottlenecks, employing memoization techniques, and efficiently rendering large lists.
*   Integrate native device capabilities such as camera, geolocation, and push notifications, and handle necessary permissions.
*   Develop robust offline-first applications with local data persistence using `AsyncStorage` and state persistence libraries.
*   Create engaging user interfaces with custom animations using the `Animated` API and implement complex gestures with `react-native-gesture-handler`.
*   Understand the conceptual framework of native modules and how to leverage third-party native libraries effectively.
*   Apply best practices for debugging, testing, and ensuring accessibility in React Native applications.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | State Management Beyond Basics | 3 |
| 2 | Advanced Navigation & Routing | 3 |
| 3 | Performance & Optimization Techniques | 4 |
| 4 | Integrating Native Capabilities | 4 |
| 5 | Data Persistence & Offline-First Apps | 5 |
| 6 | Advanced UI & User Experience | 5 |

Total chapters: 24
---

## Module 1: State Management Beyond Basics

Module 1: State Management Beyond Basics
Goal: Equip learners with the knowledge and practical skills to implement robust and scalable state management solutions in React Native applications, moving beyond basic `useState` and `useContext` for complex scenarios.

### Chapter 1.1 — Introduction to Advanced State Management Patterns

#### Learning objectives
*   Identify the limitations of `useState` and `useContext` for managing complex application state in React Native.
*   Understand the fundamental principles behind advanced state management libraries, such as single source of truth and predictable state changes.
*   Compare and contrast different categories of state management solutions available in the React Native ecosystem.
*   Determine appropriate scenarios for adopting an advanced state management pattern in a mobile application.

#### Detailed lesson content
As you develop more complex React Native applications, you'll quickly encounter the limitations of managing state solely with React's built-in `useState` and `useContext` hooks. While excellent for local component state and simple global state sharing, they can become cumbersome and lead to unmanageable codebases in larger applications. Imagine an e-commerce app where user authentication status, shopping cart contents, product lists, user preferences, and notification settings all need to be accessible and modifiable from various, deeply nested components. Prop drilling, where you pass props down through many layers of components, becomes a nightmare, making your code hard to read, debug, and refactor. Similarly, `useContext` can lead to performance issues if not carefully optimized, as any update to a context value re-renders all consumers, regardless of whether they actually use the changed part of the state. These challenges highlight the need for more sophisticated state management patterns that offer better organization, predictability, and performance.

Advanced state management patterns are designed to address these scalability and maintainability concerns. At their core, most of these solutions adhere to a few key principles. First, they often promote a **single source of truth**, meaning your entire application's state is stored in one centralized location. This makes it much easier to inspect the current state of your application, debug issues, and ensure consistency across different parts of your UI. Instead of state being scattered across many components, it resides in a predictable, accessible store. Second, these patterns emphasize **predictable state changes**. This means that state can only be modified in specific, well-defined ways, typically through actions or mutations that describe *what happened*. This predictability makes your application's behavior easier to understand, test, and reason about, reducing the likelihood of unexpected bugs. It also facilitates features like undo/redo functionality and state persistence.

The React Native ecosystem offers a rich variety of advanced state management libraries, each with its own philosophy and trade-offs. We can broadly categorize them. There are **Flux-inspired libraries** like Redux, which enforce a strict unidirectional data flow and emphasize immutability. Redux, especially when paired with Redux Toolkit, provides a powerful and mature solution for large-scale applications, offering excellent tooling for debugging and development. Then there are **Proxy-based solutions** like MobX, which leverage observable data structures and reactive programming principles. MobX allows for more direct mutation of state, automatically tracking dependencies and re-rendering components when observed data changes, often leading to less boilerplate code. More recently, **Hook-based and atom-based libraries** have gained popularity, such as Zustand, Recoil, and Jotai. These libraries often feel more "React-native" because they integrate seamlessly with React hooks, providing lightweight and often highly performant solutions that can be easier to pick up for developers already comfortable with hooks. Zustand, for instance, focuses on simplicity and minimal boilerplate, while Recoil and Jotai offer an atom-based approach, allowing you to define small, independent pieces of state that can be subscribed to by components.

Choosing the right state management pattern depends heavily on your project's specific needs, team familiarity, and application complexity. For a small application with limited global state, `useState` and `useContext` might still be perfectly adequate. However, as your application grows, you'll start to notice the benefits of a more structured approach. Consider an application that requires complex data fetching and caching, real-time updates, or intricate user interactions across many screens. In such scenarios, a library like Redux Toolkit provides a robust framework for managing asynchronous operations, handling loading states, and ensuring data consistency. If your priority is a lightweight solution with less boilerplate that still offers global state management, Zustand might be a compelling choice. The key is to understand the problem each pattern solves and how its principles align with your project's requirements. This module will equip you with the knowledge to make informed decisions and implement these patterns effectively, starting with a deeper dive into Redux Toolkit and then exploring alternatives like Zustand and `useReducer` with Context.

#### Key concepts
*   **Prop Drilling:** The process of passing data from a parent component down to deeply nested child components through multiple intermediate components as props.
*   **Single Source of Truth:** A principle in state management where the entire application state is stored in one centralized data structure, making it easier to manage and debug.
*   **Predictable State Changes:** The concept that state can only be modified through explicit, well-defined actions or mutations, leading to a clear and traceable flow of data.
*   **Unidirectional Data Flow:** A pattern where data flows in a single direction (e.g., UI dispatches actions, actions update state, state updates UI), enhancing predictability.
*   **Flux Architecture:** An application architecture pattern for building user interfaces, pioneered by Facebook, which inspired many state management libraries like Redux.
*   **Immutability:** The principle of not directly modifying existing state objects, but instead creating new state objects with the desired changes. This is crucial for predictable state updates and performance optimizations.

#### Hands-on activity
**Activity: Identify Prop Drilling in a Mock App**

You are given a simple React Native application structure that simulates a user profile screen with nested components. Your task is to identify where prop drilling is occurring and propose how a global state management solution *could* simplify the data flow.

**Starter Code (App.js):**
```jsx
// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const UserProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    theme: 'light',
    notificationsEnabled: true,
  });

  const toggleTheme = () => {
    setUserData(prevData => ({
      ...prevData,
      theme: prevData.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={userData.name} currentTheme={userData.theme} />
      <ProfileDetails userEmail={userData.email} />
      <SettingsSection
        theme={userData.theme}
        onToggleTheme={toggleTheme}
        notificationsEnabled={userData.notificationsEnabled}
      />
    </SafeAreaView>
  );
};

const Header = ({ userName, currentTheme }) => (
  <View style={[styles.header, { backgroundColor: currentTheme === 'light' ? '#eee' : '#333' }]}>
    <Text style={[styles.headerText, { color: currentTheme === 'light' ? '#333' : '#eee' }]}>Welcome, {userName}!</Text>
  </View>
);

const ProfileDetails = ({ userEmail }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Contact Info</Text>
    <Text>Email: {userEmail}</Text>
  </View>
);

const SettingsSection = ({ theme, onToggleTheme, notificationsEnabled }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>App Settings</Text>
    <ThemeSwitcher currentTheme={theme} onToggleTheme={onToggleTheme} />
    <NotificationToggle isEnabled={notificationsEnabled} />
  </View>
);

const ThemeSwitcher = ({ currentTheme, onToggleTheme }) => (
  <View style={styles.settingItem}>
    <Text>Theme: {currentTheme}</Text>
    <Button title={`Switch to ${currentTheme === 'light' ? 'Dark' : 'Light'}`} onPress={onToggleTheme} />
  </View>
);

const NotificationToggle = ({ isEnabled }) => (
  <View style={styles.settingItem}>
    <Text>Notifications: {isEnabled ? 'On' : 'Off'}</Text>
    {/* Imagine a Switch component here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default UserProfileScreen;
```

**Instructions:**
1.  Run this code in a React Native environment (e.g., Expo Snack or a local project).
2.  Identify which pieces of state or functions are being passed down through multiple layers of components unnecessarily. List them.
3.  Describe how introducing a global state management solution (like Redux or Zustand, conceptually) would change the data flow for the `theme` property and the `onToggleTheme` function. Specifically, which components would directly access the global state, and which would no longer need to receive props for theme management?

#### Assessment idea
1.  **Question:** You are building a large React Native e-commerce application. The user's authentication status, shopping cart items, and preferred language need to be accessible and modifiable across almost every screen. Which of the following is the *primary* problem you would likely encounter if you relied solely on `useState` and `useContext` for managing these pieces of state?
    *   A) Difficulty in performing asynchronous operations like API calls.
    *   B) Excessive prop drilling and potential performance issues due to widespread re-renders.
    *   C) Lack of built-in UI components for displaying global state.
    *   D) Inability to persist state across app restarts.

    **Correct Answer:** B) Excessive prop drilling and potential performance issues due to widespread re-renders.
    **Explanation:** While `useState` and `useContext` can handle asynchronous operations (with `useEffect`) and state persistence (with libraries like `AsyncStorage`), their main drawbacks in large applications are prop drilling (passing props through many intermediate components) and the performance implications of `useContext` re-rendering all consumers when the context value changes, even if only a small part of the state is relevant to a specific consumer.

2.  **Question:** A core principle of many advanced state management libraries, such as Redux, is the "single source of truth." What does this principle mean in the context of your application's state?
    *   A) All data must originate from a single API endpoint.
    *   B) Your application's entire state is stored in one centralized, immutable object.
    *   C) Only one component at a time can modify the application state.
    *   D) State changes must always be logged to a single file.

    **Correct Answer:** B) Your application's entire state is stored in one centralized, immutable object.
    **Explanation:** The "single source of truth" principle means that all the global state of your application resides in one predictable, centralized location (often called a "store"). This makes it easier to track, debug, and manage the state consistently across the entire application, rather than having scattered pieces of state in various components.

#### AI generation note
Create a 9-minute animated explainer video. Start with a visual representation of a simple component tree using `useState` and `useContext`, showing prop drilling with arrows for data flow. Then, introduce the concept of a "single source of truth" with a centralized store diagram. Briefly animate how Redux, MobX, and Zustand conceptually differ (e.g., Redux: actions -> reducer -> store; MobX: observable -> reaction; Zustand: store hook). Use clear, concise voiceover and text overlays. Include a short interactive quiz at the end asking about the definition of prop drilling.
---
### Chapter 1.2 — Deep Dive into Redux Toolkit for React Native

#### Learning objectives
*   Set up and configure Redux Toolkit in a new or existing React Native project.
*   Understand the core building blocks of Redux Toolkit: store, slices, reducers, and actions.
*   Implement synchronous state updates using `createSlice` and its generated actions.
*   Manage asynchronous data fetching and state updates using `createAsyncThunk`.
*   Integrate the Redux store with React Native components using `useSelector` and `useDispatch` hooks.

#### Detailed lesson content
Redux has long been a cornerstone of state management in the React ecosystem, and with the introduction of **Redux Toolkit (RTK)**, it has become significantly more accessible and powerful for React Native developers. RTK is the official, opinionated, batteries-included toolset for efficient Redux development. It addresses common pain points of traditional Redux, such as excessive boilerplate, complex configuration, and the need for multiple packages, by providing utilities that simplify common tasks. If you've ever felt intimidated by Redux, RTK is designed to change that, making it easier to write good Redux code from the start. It encourages best practices and reduces the mental overhead, allowing you to focus more on your application's logic and less on Redux setup.

Let's begin by setting up Redux Toolkit in a React Native project. First, you need to install the necessary packages: `@reduxjs/toolkit` and `react-redux`. The `react-redux` library provides the React bindings, allowing your components to interact with the Redux store.

```bash
npm install @reduxjs/toolkit react-redux
# or
yarn add @reduxjs/toolkit react-redux
```

Once installed, the first step is to create your Redux store. With RTK, this is done using the `configureStore` function, which automatically sets up a good default store with Redux DevTools Extension support and `redux-thunk` middleware for handling asynchronous actions.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // We'll create this next

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slices here
    // Add other reducers for different features
  },
});
```

Next, you need to make this store available to your React Native application. This is achieved by wrapping your root component with the `Provider` component from `react-redux`, passing your `store` as a prop.

```jsx
// App.js (or index.js)
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import CounterScreen from './src/features/counter/CounterScreen'; // We'll create this soon

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
```

The core concept in Redux Toolkit for managing state for a specific feature is a **slice**. A slice is a collection of reducer logic and actions for a single feature in your application, defined together in a single file. RTK's `createSlice` function generates action creators and action types for you, significantly reducing boilerplate.

Let's create a simple counter slice:

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // A name for this slice of state
  initialState: { value: 0 }, // The initial state for this slice
  reducers: {
    // Reducer functions that directly modify the state (immer handles immutability)
    increment: (state) => {
      state.value += 1; // This looks like mutation, but Immer.js makes it immutable under the hood
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the auto-generated action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer function
export default counterSlice.reducer;
```
Notice how the `reducers` functions appear to directly mutate the `state`. This is a powerful feature of Redux Toolkit, thanks to the `Immer` library, which is included by default. Immer allows you to write "mutating" logic inside your reducers, but it internally translates these mutations into immutable updates, ensuring that Redux's core principle of immutability is maintained without you having to manually spread objects (`{...state, value: state.value + 1}`). This dramatically simplifies reducer logic.

Now, let's create a React Native component to interact with this counter slice:

```jsx
// src/features/counter/CounterScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export default function CounterScreen() {
  // useSelector hook to read data from the store
  const count = useSelector((state) => state.counter.value);
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redux Toolkit Counter</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonGroup}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#007AFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
```
In this component, `useSelector` allows you to extract specific pieces of state from the Redux store. It takes a selector function as an argument, which receives the entire state and returns the desired value. `useDispatch` gives you access to the `dispatch` function, which you use to send actions to the store, triggering state updates.

One of the most common requirements in mobile applications is handling asynchronous operations, such as fetching data from an API. Redux Toolkit simplifies this with `createAsyncThunk`. This utility generates pending, fulfilled, and rejected action types, and allows you to write thunks that dispatch these actions based on the promise lifecycle.

Let's extend our counter to fetch an initial value asynchronously:

```javascript
// src/features/counter/counterSlice.js (updated)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk for fetching initial count
export const fetchInitialCount = createAsyncThunk(
  'counter/fetchInitialCount', // Action type prefix
  async () => {
    // Simulate an API call
    const response = await new Promise(resolve => setTimeout(() => resolve({ data: 100 }), 1000));
    return response.data; // This will be the action.payload for the fulfilled action
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status: 'idle', error: null }, // Add status and error for async operations
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
  // extraReducers handle actions not defined in this slice's `reducers`,
  // typically actions from createAsyncThunk or other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInitialCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload; // Set the initial count from the fetched data
      })
      .addCase(fetchInitialCount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
In your `CounterScreen` component, you would then dispatch `fetchInitialCount` and conditionally render based on the `status`:

```jsx
// src/features/counter/CounterScreen.js (updated)
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, fetchInitialCount } from './counterSlice';

export default function CounterScreen() {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the async thunk when the component mounts
    dispatch(fetchInitialCount());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading initial count...</Text>
      </SafeAreaView>
    );
  }

  if (status === 'failed') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Retry" onPress={() => dispatch(fetchInitialCount())} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redux Toolkit Counter</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonGroup}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
      </View>
    </SafeAreaView>
  );
}

// ... styles remain the same, add errorText style
const styles = StyleSheet.create({
  // ... existing styles
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});
```

Common mistakes when working with Redux Toolkit include forgetting to add your slice's reducer to the `configureStore` call, accidentally mutating state directly outside of `createSlice` reducers (which Immer won't protect), or misusing `useSelector` by selecting too much state, leading to unnecessary re-renders. Always try to select the smallest possible piece of state a component needs. Redux Toolkit provides a robust and scalable solution for managing complex state in React Native, especially when dealing with asynchronous operations and a large number of interconnected components.

#### Key concepts
*   **Redux Toolkit (RTK):** The official, opinionated, batteries-included toolset for efficient Redux development, simplifying setup and reducing boilerplate.
*   **`configureStore`:** A RTK function that wraps the standard Redux `createStore` and automatically sets up the Redux store with good defaults, including Redux DevTools and `redux-thunk`.
*   **`Provider` (from `react-redux`):** A React component that makes the Redux store available to any nested components that need to access it.
*   **Slice:** A concept in Redux Toolkit that combines a reducer, its initial state, and its associated actions into a single file, defined using `createSlice`.
*   **`createSlice`:** A RTK function that automatically generates action creators and action types for a given reducer and state, leveraging Immer for immutable updates.
*   **`useSelector`:** A `react-redux` hook that allows your React components to subscribe to parts of the Redux store state.
*   **`useDispatch`:** A `react-redux` hook that returns a reference to the `dispatch` function from the Redux store, used to send actions.
*   **`createAsyncThunk`:** A RTK utility that simplifies the process of making asynchronous requests by generating pending, fulfilled, and rejected action types and handling the promise lifecycle.
*   **`extraReducers`:** A property within `createSlice` that allows a slice to respond to actions defined outside of its `reducers` field, typically from `createAsyncThunk` or other slices.
*   **Immer.js:** A library included with Redux Toolkit that allows you to write reducers as if you were directly mutating state, while internally handling the immutable updates.

#### Hands-on activity
**Activity: Build a User Profile Slice with Async Data Fetching**

Extend the Redux Toolkit setup by creating a new slice for managing user profile data. This slice should support fetching user details from a mock API and updating a user's name locally.

**Instructions:**
1.  **Create a `userSlice.js` file** in `src/features/user/`.
2.  **Define an initial state** for the user slice that includes `userData` (e.g., `{ id: null, name: '', email: '' }`), `status` ('idle', 'loading', 'succeeded', 'failed'), and `error`.
3.  **Create an async thunk `fetchUserProfile`** using `createAsyncThunk`. This thunk should simulate an API call that resolves after 1.5 seconds with mock user data (e.g., `{ id: 'u123', name: 'Alice Smith', email: 'alice@example.com' }`).
4.  **Add `extraReducers`** to handle the `pending`, `fulfilled`, and `rejected` states of `fetchUserProfile`, updating the `userData`, `status`, and `error` accordingly.
5.  **Add a synchronous reducer `updateUserName`** that takes a `payload` (the new name) and updates the `userData.name` in the state.
6.  **Integrate the `userReducer`** into your `src/app/store.js`.
7.  **Create a `UserProfileScreen.js` component** in `src/features/user/`.
    *   Use `useSelector` to display the user's name, email, and loading status.
    *   Use `useDispatch` to dispatch `fetchUserProfile` when the component mounts (using `useEffect`).
    *   Add a button to dispatch `updateUserName` with a new name.
    *   Display a loading indicator while fetching, and an error message if the fetch fails.
8.  **Replace `CounterScreen` with `UserProfileScreen`** in your `App.js` to see it in action.

**Code Template (`src/features/user/userSlice.js`):**
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async Thunk for fetching user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async () => {
    // Simulate API call
    const response = await new Promise(resolve =>
      setTimeout(() =>
        resolve({
          id: 'u123',
          name: 'Alice Smith',
          email: 'alice@example.com',
        }),
        1500
      )
    );
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: { id: null, name: '', email: '' },
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    updateUserName: (state, action) => {
      // TODO: Implement logic to update state.userData.name
      state.userData.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        // TODO: Set status to 'loading'
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        // TODO: Set status to 'succeeded' and update userData with action.payload
        state.status = 'succeeded';
        state.userData = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        // TODO: Set status to 'failed' and store error message
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateUserName } = userSlice.actions;
export default userSlice.reducer;
```

#### Assessment idea
1.  **Question:** You have a Redux Toolkit slice for managing a list of `products`. You need to add a new product to this list. Which of the following is the *most appropriate* way to define the reducer logic for adding a product within your `createSlice` definition, assuming `state.products` is an array?
    *   A) `addProduct: (state, action) => { state.products.push(action.payload); }`
    *   B) `addProduct: (state, action) => { return { ...state, products: [...state.products, action.payload] }; }`
    *   C) `addProduct: (state, action) => { state.products = state.products.concat(action.payload); }`
    *   D) `addProduct: (state, action) => { state.products = [...state.products, action.payload]; }`

    **Correct Answer:** A) `addProduct: (state, action) => { state.products.push(action.payload); }`
    **Explanation:** Thanks to Immer.js, which is integrated into Redux Toolkit's `createSlice`, you can write mutating logic directly within your reducers. Immer will automatically translate these mutations into immutable updates under the hood. Options B, C, and D are also valid ways to perform immutable updates, but option A is the most concise and idiomatic way when using `createSlice` with Immer.

2.  **Question:** Your React Native component needs to display a user's `profilePictureUrl` from your Redux store and also dispatch an action to `logout`. Which two `react-redux` hooks would you use for these tasks, respectively?
    *   A) `useContext` and `useReducer`
    *   B) `useSelector` and `useCallback`
    *   C) `useSelector` and `useDispatch`
    *   D) `useState` and `useEffect`

    **Correct Answer:** C) `useSelector` and `useDispatch`
    **Explanation:** The `useSelector` hook is used to extract data from the Redux store, making it suitable for accessing `profilePictureUrl`. The `useDispatch` hook provides access to the `dispatch` function, which is used to send actions (like `logout`) to the Redux store to trigger state changes.

#### AI generation note
Create a 12-minute live coding video demonstrating Redux Toolkit setup. Start with a fresh React Native project. First, install RTK and `react-redux`. Then, create `store.js` and wrap `App.js` with `Provider`. Next, implement the `counterSlice.js` with `createSlice` (increment, decrement, incrementByAmount) and show it working in a `CounterScreen.js` component using `useSelector` and `useDispatch`. Emphasize the `Immer` magic. Finally, add `createAsyncThunk` (`fetchInitialCount`) to the slice and integrate loading/error states into the `CounterScreen`. Use a split-screen view of VS Code on the left and a React Native emulator on the right. Highlight code changes as they happen. Include a reflection prompt about the benefits of `createSlice`.
---
### Chapter 1.3 — Alternative State Management: Zustand and Context API with `useReducer`

#### Learning objectives
*   Understand the core principles and advantages of using Zustand for state management in React Native.
*   Implement a global state solution using Zustand with minimal boilerplate.
*   Explore the `useReducer` hook for managing complex local or component-level state.
*   Combine `useReducer` with the React Context API to create a custom, lightweight global state solution.
*   Evaluate when to choose Zustand, `useReducer` with Context, or Redux Toolkit based on application needs.

#### Detailed lesson content
While Redux Toolkit offers a comprehensive and robust solution for large-scale applications, its structured approach might be overkill for every project. Sometimes, you need something lighter, with less boilerplate, that feels more "React-y" and integrates seamlessly with hooks. This is where libraries like **Zustand** shine, and where a deeper understanding of the **Context API combined with `useReducer`** becomes invaluable. These alternatives provide powerful ways to manage state without the full overhead of Redux, offering flexibility and often better performance for specific use cases.

**Zustand** is a small, fast, and scalable bear-bones state-management solution using simplified flux principles. It's built around hooks, making it feel very natural to React developers. Its key advantages include minimal boilerplate, direct access to state without providers (though a provider pattern can be used if desired), and excellent performance due to its subscription model. Unlike `useContext`, Zustand components only re-render when the specific part of the state they subscribe to changes, not the entire context.

Let's see how simple it is to set up a store with Zustand. You define a store as a hook, which can then be used directly in any component.

```javascript
// src/store/bearStore.js
import { create } from 'zustand';

// Define your store
const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  // You can also add async actions directly
  fetchBears: async () => {
    const response = await new Promise(resolve => setTimeout(() => resolve(5), 1000));
    set({ bears: response });
  },
}));

export default useBearStore;
```
To use this store in a React Native component, you simply import the hook and call it, optionally selecting specific pieces of state or actions.

```jsx
// src/components/BearCounter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useBearStore from '../store/bearStore'; // Import your Zustand store

export default function BearCounter() {
  // Select specific state and actions
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const fetchBears = useBearStore((state) => state.fetchBears);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zustand Bear Counter</Text>
      <Text style={styles.countText}>Bears: {bears}</Text>
      <View style={styles.buttonGroup}>
        <Button title="Add Bear" onPress={increasePopulation} />
        <Button title="Remove All" onPress={removeAllBears} />
        <Button title="Fetch Bears (Async)" onPress={fetchBears} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00796b',
  },
  countText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#00acc1',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
  },
});
```
Zustand's simplicity makes it an excellent choice for projects where you need global state but want to avoid the learning curve and boilerplate of Redux. It's particularly good for shared UI state, theme management, or simpler data fetching scenarios.

Now, let's revisit the **Context API** but with a powerful addition: the `useReducer` hook. While `useContext` alone is great for simple, static values or infrequently updated state, it can lead to performance issues because *any* change to the context value will re-render *all* consuming components. `useReducer` provides a more robust way to manage complex state logic, similar to Redux, but typically for local component state or a more contained "global" state via Context.

The `useReducer` hook is an alternative to `useState` for managing more complex state logic that involves multiple sub-values or when the next state depends on the previous one. It takes a reducer function and an initial state, and returns the current state and a `dispatch` function.

```javascript
// Example of useReducer for a local counter
import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function LocalCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
      <Button title="Reset" onPress={() => dispatch({ type: 'reset' })} />
    </View>
  );
}
```

The real power emerges when you combine `useReducer` with the Context API. This pattern allows you to create a custom, domain-specific state management solution that can be shared across your component tree, effectively creating a "mini-Redux" for a specific part of your application. This is ideal when you need a global state for a particular feature (e.g., shopping cart, user preferences) but don't want to pull in a full-fledged library like Redux Toolkit.

```jsx
// src/context/ShoppingCartContext.js
import React, { createContext, useReducer, useContext, useMemo } from 'react';

// 1. Initial State
const initialState = {
  items: [],
  total: 0,
};

// 2. Reducer Function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (!itemToRemove) return state;

      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: newItems,
        total: state.total - (itemToRemove.price * itemToRemove.quantity),
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 3. Create Context
const ShoppingCartContext = createContext();

// 4. Create Provider Component
export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]); // Only re-create if state or dispatch changes

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// 5. Custom Hook for Consumers
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
```
To use this, you'd wrap the part of your app that needs access to the cart state with `ShoppingCartProvider`, and then use `useShoppingCart` in any child component.

```jsx
// App.js (or relevant root component)
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ShoppingCartProvider } from './src/context/ShoppingCartContext';
import ProductListScreen from './src/screens/ProductListScreen'; // Example component

export default function App() {
  return (
    <ShoppingCartProvider>
      <SafeAreaView style={styles.container}>
        <ProductListScreen />
      </SafeAreaView>
    </ShoppingCartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
```
```jsx
// src/screens/ProductListScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useShoppingCart } from '../context/ShoppingCartContext';

const products = [
  { id: 'p1', name: 'Laptop', price: 1200 },
  { id: 'p2', name: 'Mouse', price: 25 },
  { id: 'p3', name: 'Keyboard', price: 75 },
];

export default function ProductListScreen() {
  const { state, dispatch } = useShoppingCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        )}
      />
      <View style={styles.cartSummary}>
        <Text style={styles.cartText}>Cart Items: {state.items.length}</Text>
        <Text style={styles.cartText}>Total: ${state.total.toFixed(2)}</Text>
        <Button title="Clear Cart" onPress={() => dispatch({ type: 'CLEAR_CART' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartSummary: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  cartText: {
    fontSize: 18,
    marginBottom: 5,
  },
});
```
**Common Mistakes and Performance Considerations:** When using `useReducer` with Context, a common mistake is forgetting to memoize the `value` prop of the `Context.Provider` using `useMemo`. If you don't memoize it, a new object will be created on every render of the provider, causing *all* consumers to re-render, even if the actual state hasn't changed in a way that affects them. This defeats the purpose of optimizing with `useReducer` and can lead to the same performance issues as basic `useContext`. Always `useMemo` for your context `value` to ensure stability.

**When to choose which:**
*   **Redux Toolkit:** Best for large, complex applications with many interconnected pieces of global state, requiring robust tooling, predictable state changes, and a clear structure for asynchronous logic. Ideal for teams familiar with Flux architecture.
*   **Zustand:** Excellent for medium-sized applications or parts of large applications where you need global state with minimal boilerplate, direct hook-based access, and good performance without the full Redux ecosystem. Great for shared UI state, themes, or simpler data caches.
*   **Context API + `useReducer`:** Perfect for domain-specific global state that is isolated to a particular feature or subtree of your application. It provides Redux-like state management without external libraries, offering fine-grained control and good performance if `useMemo` is used correctly. It's a great stepping stone before adopting a full library.

Understanding these alternatives empowers you to choose the right tool for the job, leading to more maintainable, performant, and enjoyable React Native development.

#### Key concepts
*   **Zustand:** A lightweight, hook-based state management library for React and React Native, known for its simplicity and minimal boilerplate.
*   **`create` (Zustand):** The primary function in Zustand used to define and create a new state store.
*   **`set` (Zustand):** A function provided by Zustand's `create` method, used to update the state. It can take a partial state object or a function that receives the current state.
*   **`useReducer`:** A React hook that provides an alternative to `useState` for managing more complex state logic, typically involving multiple sub-values or when the next state depends on the previous one. It takes a reducer function and an initial state.
*   **Reducer Function:** A pure function that takes the current state and an action, and returns a new state. It describes how the state changes in response to actions.
*   **`dispatch` (from `useReducer`):** A function returned by `useReducer` that you call with an action object to trigger a state update via the reducer.
*   **Context API with `useReducer`:** A pattern where `useReducer` manages complex state within a React component, and that state and its `dispatch` function are then exposed globally to a component subtree via the Context API, often wrapped in a custom provider and hook.
*   **`useMemo`:** A React hook used to memoize a computed value. Essential for optimizing Context API performance by preventing unnecessary re-renders of consumers when the `value` prop of a `Context.Provider` is an object.

#### Hands-on activity
**Activity: Implement a Theme Switcher using Zustand**

You will create a simple theme switcher (light/dark mode) for your React Native application using Zustand.

**Instructions:**
1.  **Create a `themeStore.js` file** in `src/store/`.
2.  **Define a Zustand store** using `create`.
    *   The initial state should include `theme: 'light'`.
    *   Add an action `toggleTheme` that switches the `theme` between `'light'` and `'dark'`.
3.  **Create a `ThemeSwitcherScreen.js` component** in `src/screens/`.
    *   Import and use the `useThemeStore` hook.
    *   Display the current theme.
    *   Add a button that calls the `toggleTheme` action.
    *   Conditionally style the `SafeAreaView` background and text color based on the current `theme` from the store.
4.  **Replace `ProductListScreen` with `ThemeSwitcherScreen`** in your `App.js` to test it.

**Code Template (`src/store/themeStore.js`):**
```javascript
import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light', // Initial theme
  toggleTheme: () => set((state) => ({
    // TODO: Implement logic to toggle theme between 'light' and 'dark'
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export default useThemeStore;
```

**Code Template (`src/screens/ThemeSwitcherScreen.js`):**
```jsx
import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import useThemeStore from '../store/themeStore'; // Import your Zustand store

export default function ThemeSwitcherScreen() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;

  return (
    <SafeAreaView style={[styles.baseContainer, containerStyle]}>
      <View style={styles.content}>
        <Text style={[styles.baseText, textStyle]}>Current Theme: {theme.toUpperCase()}</Text>
        <Button
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          onPress={toggleTheme}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  content: {
    alignItems: 'center',
  },
  baseText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#f0f0f0',
  },
});
```

#### Assessment idea
1.  **Question:** You are building a React Native application and need a lightweight global state management solution for a simple user preference (e.g., `isDarkModeEnabled`). You want minimal boilerplate and direct hook integration. Which state management library would be the most suitable choice among the following, and why?
    *   A) Redux Toolkit, because it's the most robust and feature-rich.
    *   B) Context API with `useState`, because it's built into React.
    *   C) Zustand, because it offers a simple, hook-based API with less boilerplate than Redux.
    *   D) MobX, because it uses observables for automatic re-renders.

    **Correct Answer:** C) Zustand, because it offers a simple, hook-based API with less boilerplate than Redux.
    **Explanation:** For a simple global preference with minimal boilerplate, Zustand is an excellent choice. It's designed to be lightweight and integrates seamlessly with React hooks, providing direct access to state and actions without the need for `Provider` components (though they can be used). Redux Toolkit is powerful but might be overkill for such a simple case. Context API with `useState` can work but might lead to more re-renders if not carefully managed. MobX is also lightweight but has a different paradigm (observables) which might be more than needed for this specific problem.

2.  **Question:** When combining React's Context API with `useReducer` to manage global state, what is a critical performance optimization step you should take, especially for the `value` prop passed to the `Context.Provider`?
    *   A) Ensure the reducer function is defined inline within the `Provider` component.
    *   B) Wrap the `value` prop in `React.memo` to prevent its re-creation.
    *   C) Use the `useCallback` hook to memoize the `dispatch` function.
    *   D) Use the `useMemo` hook to memoize the entire object passed as the `value` prop.

    **Correct Answer:** D) Use the `useMemo` hook to memoize the entire object passed as the `value` prop.
    **Explanation:** If the `value` prop of `Context.Provider` is an object (which it typically is when passing both state and `dispatch`), and it's not memoized, a new object will be created on every render of the `Provider`. This new object reference will cause all consuming components to re-render, even if the actual data inside the object hasn't changed. `useMemo` ensures that the `value` object is only re-created when its dependencies (`state` and `dispatch` in this case) actually change, preventing unnecessary re-renders of consumers.

#### AI generation note
Create an 11-minute mixed-format lesson. Begin with a 3-minute conceptual overview video of Zustand's simplicity (no providers, direct hooks, bear analogy). Then, switch to a 5-minute live coding demo in React Native, setting up the Zustand `bearStore` and `BearCounter` component, showing state updates and the async `fetchBears` action. Next, transition to a 3-minute interactive code demo showing the `useReducer` hook for a local counter, then visually combining it with Context API for a `ShoppingCartContext`. Emphasize the `useMemo` optimization for the Context Provider's value. Use split-screen for code/emulator, and diagram overlays for Context/Reducer flow. End with a mini-quiz on when to use Zustand vs. Context + `useReducer`.
---

## Module 2: Advanced Navigation & Routing

Navigating through an application is fundamental, but as apps grow in complexity, simple stack navigation often isn't enough. This module dives into advanced navigation patterns, teaching you how to build sophisticated user interfaces with nested navigators, manage dynamic authentication flows, and enable seamless deep linking. You'll learn to architect navigation structures that are both robust and intuitive, preparing your React Native apps for real-world use cases and enhanced user experience.

### Chapter 2.1 — Nested Navigators and Tab/Drawer Integration

#### Learning objectives
*   Understand the necessity and benefits of nesting different types of navigators in React Native applications.
*   Implement common nested navigation patterns, such as a Tab Navigator within a Stack Navigator, or a Drawer Navigator alongside a Stack Navigator.
*   Manage navigation between screens across different nested navigators using appropriate methods.
*   Troubleshoot common issues that arise when combining multiple navigator types.

#### Detailed lesson content
As your React Native application grows, a single type of navigator, like a simple stack, quickly becomes insufficient for managing all possible user flows. Modern mobile applications often feature complex navigation patterns: a main section with tabs, a side drawer for global settings, and specific screens that need to be pushed onto a stack from any of these locations. This is where nested navigators come into play. Nested navigators allow you to combine different navigator types—like Stack, Tab, and Drawer navigators—to create a rich and intuitive user experience. The core idea is that one navigator can be a screen within another navigator, allowing you to define distinct navigation contexts for different parts of your application.

Consider a common scenario: you have a main application area accessible via a bottom tab bar (e.g., Home, Profile, Settings). Each of these tabs might need its own independent navigation history, meaning that navigating from "Home" to "Home Details" should not affect the "Profile" tab's navigation state. This is perfectly achieved by nesting a `StackNavigator` inside each tab of a `BottomTabNavigator`. The `BottomTabNavigator` manages switching between the primary sections, while each `StackNavigator` within a tab manages the history for that specific section. When you navigate to a screen within a tab's stack, the tab bar remains visible, providing context, but the stack navigation happens independently.

Let's illustrate with an example. First, ensure you have `@react-navigation/native`, `@react-navigation/stack`, and `@react-navigation/bottom-tabs` installed. You'll also need their peer dependencies like `react-native-screens` and `react-native-safe-area-context`.

```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npx pod-install ios # For iOS projects
```

Now, let's set up a `BottomTabNavigator` where each tab contains its own `StackNavigator`. This is a very common and robust pattern.

```javascript
// App.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Example icon library

// --- Home Stack ---
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home Details"
        onPress={() => navigation.navigate('HomeDetails')}
      />
    </View>
  );
}

function HomeDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetailsScreen} />
    </HomeStack.Navigator>
  );
}

// --- Profile Stack ---
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Profile Settings"
        onPress={() => navigation.navigate('ProfileSettings')}
      />
    </View>
  );
}

function ProfileSettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Settings Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    </ProfileStack.Navigator>
  );
}

// --- Main Tabs ---
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'ProfileTab') {
              iconName = focused ? 'person' : 'person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Hide header from Tab Navigator itself, stacks will manage their own
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={{ title: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

In this setup, `HomeStackScreen` and `ProfileStackScreen` are components that *each* render a `StackNavigator`. These components are then used as the `component` prop for the `Tab.Screen` elements. This means when you tap the "Home" tab, you are actually navigating to the `HomeStackScreen` component, which then renders its own stack. If you navigate deeper within the "Home" stack, the "Profile" tab's stack remains untouched. This separation of concerns is powerful.

A common mistake when working with nested navigators is attempting to navigate directly to a screen within a nested navigator without specifying the parent navigator. For example, if you are on the `Home` screen and want to navigate to `ProfileSettings`, you cannot simply call `navigation.navigate('ProfileSettings')`. The `navigation` object on the `Home` screen is scoped to its `HomeStack`. To navigate to a screen in another stack or tab, you need to specify the route name of the *parent* navigator first, then the screen within it. For instance, `navigation.navigate('ProfileTab', { screen: 'ProfileSettings' })` would correctly navigate to the `ProfileTab` and then immediately to the `ProfileSettings` screen within that tab's stack.

Another pattern involves a `DrawerNavigator` alongside a `StackNavigator`. Often, a drawer is used for global navigation or settings, while the main content is managed by a stack. You might have your `StackNavigator` as the primary navigator, and one of its screens could render a `DrawerNavigator`. Or, more commonly, the `DrawerNavigator` is the root, and one of its items is a `StackNavigator`.

```javascript
// Example of Drawer Navigator at the root, containing a Stack Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

// ... (previous Stack components like HomeStackScreen)

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackScreen} /> {/* HomeStackScreen is a StackNavigator */}
      <Drawer.Screen name="Settings" component={SettingsScreen} /> {/* A simple screen */}
    </Drawer.Navigator>
  );
}

// Then in App.js:
export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}
```
In this setup, the `DrawerNavigator` is the top-level navigator. When you open the drawer, you see "Home" and "Settings". Tapping "Home" takes you to the `HomeStackScreen`, which then manages its own stack navigation. This allows the drawer to be globally accessible while maintaining independent stack histories for its content areas.

Safety notes: While nesting provides flexibility, over-nesting can lead to complex navigation trees that are hard to debug and reason about. Always strive for the simplest possible navigation structure that meets your app's requirements. Be mindful of performance, as deeply nested navigators can sometimes lead to more components being mounted than necessary. Use `headerShown: false` on parent navigators if you want the child navigators to manage their own headers, preventing duplicate headers.

#### Key concepts
*   **Nested Navigators:** The practice of placing one navigator component inside another, typically by using a navigator as the `component` prop for a `Screen` within another navigator.
*   **Navigation Context:** Each navigator creates its own navigation context, meaning `navigation` props passed to screens within it are scoped to that specific navigator.
*   **Tab Navigator (`createBottomTabNavigator`):** A navigator that displays a tab bar at the bottom of the screen, allowing users to switch between different routes. Often used to house `StackNavigator` instances.
*   **Drawer Navigator (`createDrawerNavigator`):** A navigator that provides a drawer (sliding panel) from the side of the screen, typically used for global app navigation.
*   **Stack Navigator (`createStackNavigator`):** A navigator that provides a way for your app to transition between screens, where each new screen is placed on top of a stack.

#### Hands-on activity
**Challenge: Integrate a Drawer Navigator with a Tab Navigator**

Your task is to extend the previous example. You will create a `DrawerNavigator` that contains the `BottomTabNavigator` you built earlier. This means the drawer will be the root navigator, and one of its items will be your tab-based application.

1.  **Install Drawer Navigator:** If you haven't already, install `@react-navigation/drawer` and its dependencies:
    ```bash
    npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
    npx pod-install ios # For iOS
    ```
    *Important:* Follow the installation instructions for `react-native-gesture-handler` and `react-native-reanimated` carefully, especially adding plugins to `babel.config.js` and wrapping your app in `GestureHandlerRootView`.

2.  **Create a `Settings` screen:** Add a simple `SettingsScreen` component that can be accessed directly from the drawer.

3.  **Nest the Tab Navigator:** Create a `RootDrawerNavigator` component. One of its `Drawer.Screen` components should render your existing `Tab.Navigator` (which itself contains the `StackNavigators`). Add your new `SettingsScreen` as another `Drawer.Screen`.

4.  **Update `App.js`:** Replace the top-level `Tab.Navigator` in `App.js` with your new `RootDrawerNavigator`.

**Starter Code (building on previous example):**

```javascript
// App.js (partial, you'll integrate your existing Tab.Navigator into this)
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // New import
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Required for Drawer

// --- Existing Home Stack and Profile Stack components here (from detailed lesson content) ---
// ... (HomeStackScreen, ProfileStackScreen, HomeScreen, HomeDetailsScreen, ProfileScreen, ProfileSettingsScreen)

// --- Existing Main Tabs component here (from detailed lesson content) ---
const Tab = createBottomTabNavigator();

function MainTabNavigator() { // Rename the previous App component to MainTabNavigator
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

// --- New Settings Screen ---
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Global Settings Screen</Text>
    </View>
  );
}

// --- New Drawer Navigator ---
const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MainApp">
      <Drawer.Screen name="MainApp" component={MainTabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// --- Updated App component ---
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* Important for Drawer */}
      <NavigationContainer>
        <RootDrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
```

#### Assessment idea
1.  **Question:** You have a React Native app with a `DrawerNavigator` as the root. Inside one of the drawer screens, you have a `StackNavigator`, and within that stack, you have a `BottomTabNavigator`. A screen named `ProductDetail` exists within one of the tabs' nested `StackNavigator`. If you are currently on a screen within the `DrawerNavigator` but *outside* the `BottomTabNavigator` (e.g., a "Help" screen directly in the drawer), how would you programmatically navigate to `ProductDetail`?
    *   `navigation.navigate('ProductDetail')`
    *   `navigation.navigate('MainTabs', { screen: 'ProductsTab', params: { screen: 'ProductDetail' } })`
    *   `navigation.navigate('DrawerScreenWithTabs', { screen: 'ProductDetail' })`
    *   `navigation.navigate('ProductsTab', { screen: 'ProductDetail' })`

    **Correct Answer:** `navigation.navigate('MainTabs', { screen: 'ProductsTab', params: { screen: 'ProductDetail' } })`

    **Explanation:** When navigating across multiple nested navigators, you must specify the path from the current navigator down to the target screen. The `navigate` method can take an object with a `screen` property for the next navigator in the hierarchy and a `params` property to pass further navigation instructions. In this case, `MainTabs` is the name of the drawer screen that renders the `BottomTabNavigator`. `ProductsTab` is the name of the tab screen, and `ProductDetail` is the screen within that tab's stack.

2.  **Question:** What is a common pitfall when nesting a `StackNavigator` inside a `BottomTabNavigator` regarding headers? How can you typically resolve it?

    **Correct Answer:** A common pitfall is encountering duplicate headers or an unwanted header from the `BottomTabNavigator` itself, in addition to the headers managed by the nested `StackNavigator`s. This happens because both the `BottomTabNavigator` and the `StackNavigator` can render their own headers by default.

    To resolve this, you typically set `headerShown: false` on the `Tab.Navigator`'s `screenOptions` or `options` for individual `Tab.Screen`s. This tells the `BottomTabNavigator` not to render its own header, allowing the nested `StackNavigator`s to manage their headers independently for each tab, providing a cleaner and more expected UI.

#### AI generation note
Create a 12-minute mixed media lesson. Start with a 3-minute animated diagram explaining the concept of nested navigators (Stack in Tab, Drawer containing Stack). Then, transition to a 7-minute live coding session demonstrating the `BottomTabNavigator` containing two `StackNavigator`s, showing navigation within each stack and cross-tab navigation. Include a split-screen view of code on the left and a React Native emulator on the right. Conclude with a 2-minute segment highlighting common mistakes like incorrect navigation calls and duplicate headers, showing how to fix them in the code. Emphasize a professional, hands-on, and safety-conscious tone. Include captions and alt text for diagrams.

### Chapter 2.2 — Authentication Flows and Conditional Rendering of Navigators

#### Learning objectives
*   Design and implement robust authentication flows (login, signup, logout) within a React Native application.
*   Understand and apply conditional rendering techniques to switch between authenticated and unauthenticated navigation stacks.
*   Utilize React Context API or a similar state management solution to manage global authentication state.
*   Implement secure methods for persisting user authentication tokens across app sessions using `AsyncStorage`.

#### Detailed lesson content
Managing user authentication is a cornerstone of most modern mobile applications. When a user logs in, the application's navigation structure often changes dramatically, shifting from public-facing screens (like login, signup, password reset) to private, authenticated screens (like dashboards, profiles, and app features). This dynamic change in navigation is typically handled by conditionally rendering different top-level navigators based on the user's authentication status.

The most common approach involves having two main navigation stacks: an `AuthStack` for unauthenticated users and an `AppStack` for authenticated users. The `NavigationContainer` (the root of all navigation) then conditionally renders either the `AuthStack` or the `AppStack` based on whether a user token exists or not. This pattern ensures that authenticated users cannot access public routes without logging out, and unauthenticated users cannot access private routes.

To manage the authentication state globally and trigger re-renders of the `NavigationContainer`, we often use React's Context API. This allows us to provide the authentication state and functions (like `signIn`, `signOut`) to any component in the application without prop drilling.

Let's walk through building an authentication flow. First, ensure you have `@react-navigation/native` and `@react-navigation/stack` installed. We'll also need `@react-native-async-storage/async-storage` for persisting the user token.

```bash
npm install @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage
npx pod-install ios
```

Here's how you can structure your `App.js` to handle this:

```javascript
// App.js
import * as React from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- Auth Screens ---
function SignInScreen({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn('dummy-auth-token')} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Button title="Go back to Sign In" onPress={() => navigation.goBack()} />
    </View>
  );
}

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

// --- App Screens (Authenticated) ---
function DashboardScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Welcome to your Dashboard!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const AppStack = createStackNavigator();

function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={DashboardScreen} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  );
}

// --- Auth Context ---
const AuthContext = React.createContext();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
        console.error("Failed to restore token", e);
      }
      // After restoring token, we may need to validate it in production apps
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a real app, send data to your backend and get a token
        // Then store the token in AsyncStorage
        await AsyncStorage.setItem('userToken', data);
        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data) => {
        // In a real app, send data to your backend, get a token
        // Then store the token in AsyncStorage
        await AsyncStorage.setItem('userToken', data);
        dispatch({ type: 'SIGN_IN', token: data });
      },
    }),
    []
  );

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading app...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <AuthStackScreen />
        ) : (
          // User is signed in
          <AppStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

Let's break down the key parts:

1.  **`AuthContext`:** This React Context holds the `signIn`, `signOut`, and `signUp` functions. Screens that need to perform authentication actions can `useContext(AuthContext)` to access these functions.
2.  **`useReducer` for State Management:** We use `React.useReducer` to manage the authentication state (`isLoading`, `userToken`, `isSignout`). This is a robust way to handle complex state transitions.
3.  **`useEffect` for Token Restoration:** The `bootstrapAsync` function in `useEffect` runs once when the app loads. It attempts to retrieve a `userToken` from `AsyncStorage`. If a token is found, the `dispatch` action `RESTORE_TOKEN` updates the state, causing the `NavigationContainer` to render the `AppStack`. If no token, it renders `AuthStack`.
4.  **Conditional Rendering in `App` component:** The core logic is within the `return` statement of the `App` component:
    ```javascript
    {state.userToken == null ? (
      <AuthStackScreen />
    ) : (
      <AppStackScreen />
    )}
    ```
    This line dictates which top-level navigator is rendered based on `state.userToken`.
5.  **`AsyncStorage`:** This is crucial for persisting the user's login session. When a user signs in, their authentication token (e.g., JWT) is stored in `AsyncStorage`. On subsequent app launches, `AsyncStorage` is checked, and if a token exists, the user is automatically logged in. When a user signs out, the token is removed.

Common mistakes and safety notes:
*   **Security of `AsyncStorage`:** While `AsyncStorage` is suitable for storing non-sensitive data, it's not encrypted by default. For highly sensitive tokens or data, consider using more secure storage solutions like `react-native-keychain` or device-specific secure storage APIs. Always store only the token, not user credentials.
*   **Token Expiration and Refresh:** In a real-world application, authentication tokens have an expiration time. You'll need to implement logic to handle expired tokens, typically by attempting to refresh them with a refresh token or by forcing the user to re-authenticate. The current example simplifies this by assuming a persistent token.
*   **Loading State:** It's essential to handle the `isLoading` state properly. During this phase, your app should display a loading indicator (`ActivityIndicator`) to prevent a blank screen or flickering as it checks for the user's token.
*   **Infinite Re-renders:** Be careful with `useEffect` dependencies and `useMemo` for context values. Incorrect dependencies can lead to infinite loops or unnecessary re-renders. Ensure `authContext` is memoized to prevent re-creating the context value on every render, which would cause all consumers to re-render.

This pattern provides a clean separation between authenticated and unauthenticated parts of your application, making it easier to manage permissions and user experience.

#### Key concepts
*   **Authentication Flow:** The sequence of screens and actions a user takes to log in, sign up, or log out of an application.
*   **Conditional Rendering:** The technique of rendering different UI components or navigators based on a specific condition, such as a user's authentication status.
*   **`AuthStack`:** A `StackNavigator` (or any navigator) dedicated to unauthenticated screens like login, signup, and password reset.
*   **`AppStack`:** A `StackNavigator` (or any navigator) dedicated to authenticated screens and the main features of the application.
*   **`AsyncStorage`:** A simple, unencrypted, asynchronous, persistent, key-value storage system for React Native, used here to store user authentication tokens.
*   **React Context API:** A way to pass data through the component tree without having to pass props down manually at every level, ideal for global state like authentication.

#### Hands-on activity
**Challenge: Implement a "Forgot Password" flow within the `AuthStack`**

Your task is to extend the `AuthStack` to include a "Forgot Password" screen.

1.  **Create `ForgotPasswordScreen`:**
    *   This screen should have a text input for the user's email address.
    *   A button to "Reset Password" (which can just console log a message for now).
    *   A button to "Go back to Sign In".

2.  **Add to `AuthStack`:**
    *   Register `ForgotPasswordScreen` as a new screen in your `AuthStack.Navigator`.
    *   Add a button on the `SignInScreen` that navigates to `ForgotPasswordScreen`.

**Starter Code (modify `App.js` from detailed lesson content):**

```javascript
// App.js (partial)
import * as React from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, TextInput } from 'react-native'; // Added TextInput
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- Auth Screens ---
// ... (SignInScreen - MODIFY THIS)
function SignInScreen({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <Button title="Sign In" onPress={() => signIn('dummy-auth-token')} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
      {/* ADD THIS BUTTON */}
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
}

// ... (SignUpScreen)

// --- NEW ForgotPasswordScreen ---
function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={() => console.log('Reset password for:', email)} />
      <Button title="Go back to Sign In" onPress={() => navigation.goBack()} />
    </View>
  );
}

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      {/* ADD THIS SCREEN */}
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
    </AuthStack.Navigator>
  );
}

// ... (App Screens, Auth Context, App component, Styles)

const styles = StyleSheet.create({
  // ... (existing styles)
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});
```

#### Assessment idea
1.  **Question:** Explain why it's generally a bad practice to store sensitive user credentials (like plain-text passwords) directly in `AsyncStorage` in a React Native application. What should you store instead, and what are the implications for security?

    **Correct Answer:** Storing plain-text passwords or other sensitive user credentials directly in `AsyncStorage` is a bad practice because `AsyncStorage` is not encrypted by default. This means that if an attacker gains access to the device's file system (e.g., through a rooted device, malware, or physical access), they could potentially read the stored data, compromising user accounts.

    Instead, you should store an **authentication token** (e.g., a JWT - JSON Web Token) that is issued by your backend server *after* the user successfully authenticates. This token represents the user's session. If this token is compromised, it can often be revoked by the server, and it doesn't directly expose the user's original credentials. For even higher security, consider using libraries like `react-native-keychain` which leverage platform-specific secure storage mechanisms (Keychain on iOS, Keystore on Android) that are designed for sensitive data.

2.  **Question:** You observe that after a user logs in and then closes and reopens your app, they are briefly shown the `SignInScreen` before being redirected to the `DashboardScreen`. What is the most likely cause of this behavior, and how can you prevent it to provide a smoother user experience?

    **Correct Answer:** This behavior is most likely caused by the asynchronous nature of retrieving the user token from `AsyncStorage` during app startup. When the app first launches, `state.isLoading` is `true`, and `state.userToken` is `null`. The `NavigationContainer` initially renders the `AuthStackScreen` because `userToken` is `null`. Only after `AsyncStorage.getItem('userToken')` completes and `dispatch({ type: 'RESTORE_TOKEN', token: userToken })` is called, does `state.userToken` get updated (if a token exists) and `isLoading` becomes `false`, triggering a re-render to the `AppStackScreen`.

    To prevent this "flicker" and provide a smoother user experience, you should ensure that a loading indicator (like an `ActivityIndicator`) is displayed while the app is checking for the user's token. The `NavigationContainer` should only render either the `AuthStackScreen` or `AppStackScreen` *after* the `isLoading` state is `false`. The provided example correctly implements this by rendering a loading view when `state.isLoading` is true.

#### AI generation note
Create a 15-minute live coding video. Begin by setting up the `AuthContext` and `useReducer` for authentication state. Then, implement the `SignInScreen` and `DashboardScreen`, demonstrating how `AsyncStorage` is used to persist a dummy token. Show the conditional rendering of `AuthStackScreen` vs. `AppStackScreen` in `NavigationContainer` based on the `userToken` state. Include a loading spinner during the initial token check. Use a split-screen view with code on the left and an iOS simulator on the right, clearly showing the app transitioning between login and dashboard. Emphasize security considerations for `AsyncStorage`. Conclude with a 2-question interactive quiz on token persistence and security.

### Chapter 2.3 — Deep Linking and Universal Links

#### Learning objectives
*   Understand the concepts of deep linking and universal links in mobile applications.
*   Configure a React Native application to respond to custom URL schemes for deep linking on both iOS and Android.
*   Implement `react-navigation`'s deep linking configuration to map incoming URLs to specific screens.
*   Handle incoming deep links within the application, including initial links and subsequent links while the app is running.
*   Differentiate between deep links and universal links and understand their respective use cases and setup requirements.

#### Detailed lesson content
Deep linking allows users to navigate directly to specific content within your mobile application via a URL, rather than always starting from the app's home screen. This is incredibly powerful for user engagement, marketing campaigns, and integrating with other applications. Imagine a user clicking a link in an email that takes them directly to a specific product page in your e-commerce app, or opening a notification that lands them on a chat conversation.

There are two primary types of deep links:
1.  **Custom URL Schemes (Deep Links):** These use a custom scheme registered with the operating system (e.g., `myapp://product/123`). When a browser or another app tries to open a URL with this scheme, the OS knows to launch your app and pass the URL to it.
2.  **Universal Links (iOS) / App Links (Android):** These are standard `https://` web links that, if your app is installed and configured correctly, will open directly in your app instead of the web browser. If the app isn't installed, or the configuration fails, the link gracefully falls back to opening in the browser. This provides a much smoother user experience and better SEO.

Let's start with setting up custom URL schemes for deep linking in React Native using `react-navigation`. The `NavigationContainer` provides a `linking` prop that simplifies this process significantly.

First, you need to configure your native projects to recognize your custom URL scheme.

**iOS Configuration:**
Open `ios/<YourProjectName>/Info.plist` and add the following:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>myapp</string> <!-- Your custom scheme, e.g., myapp -->
    </array>
    <key>CFBundleURLName</key>
    <string>com.yourcompany.yourapp</string> <!-- Your bundle identifier -->
  </dict>
</array>
```
Replace `myapp` with your desired scheme (e.g., `cohortia`), and `com.yourcompany.yourapp` with your actual bundle identifier.

**Android Configuration:**
Open `android/app/src/main/AndroidManifest.xml` and add an `intent-filter` inside the `<activity>` tag that has `android:name=".MainActivity"`:

```xml
<activity
  android:name=".MainActivity"
  android:label="@string/app_name"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
  android:launchMode="singleTask" <!-- IMPORTANT: Use singleTask for deep links -->
  android:windowSoftInputMode="adjustResize"
  android:exported="true"> <!-- REQUIRED for Android 12+ -->
  <intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
  </intent-filter>
  <!-- Add this intent-filter for deep linking -->
  <intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="myapp" /> <!-- Your custom scheme -->
  </intent-filter>
</activity>
```
Again, replace `myapp` with your custom scheme. The `android:exported="true"` is critical for Android 12 and above. `android:launchMode="singleTask"` ensures that if your app is already running, the existing instance is reused, and the deep link is passed to it, rather than launching a new instance.

Now, in your React Native code, you'll configure `react-navigation` to handle these links:

```javascript
// App.js
import * as React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Product Details (ID: 123)"
        onPress={() => navigation.navigate('Product', { id: '123' })}
      />
    </View>
  );
}

function ProductScreen({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Product Details for ID: {id}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

const config = {
  screens: {
    Home: 'home', // myapp://home
    Product: {
      path: 'product/:id', // myapp://product/123
      parse: {
        id: (id) => `product-${id}`, // Optional: Transform the ID
      },
      stringify: {
        id: (id) => id.replace('product-', ''), // Optional: Transform back for URL
      },
    },
  },
};

const linking = {
  prefixes: ['myapp://', 'https://www.yourapp.com'], // Add your custom scheme and universal link domain
  config,
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

In this code:
*   The `config` object maps URL paths to screen names and defines how parameters are extracted (`parse`) and formatted (`stringify`).
*   The `linking` object specifies the `prefixes` (your custom URL scheme and any universal link domains) and the `config`.
*   The `NavigationContainer` receives this `linking` prop. When an incoming deep link matches a prefix and a path in the config, `react-navigation` will automatically navigate to the corresponding screen with the parsed parameters.

**Testing Deep Links:**
*   **iOS:** Open Safari and type `myapp://product/456`.
*   **Android:** Use `adb shell am start -W -a android.intent.action.VIEW -d "myapp://product/456" com.yourcompany.yourapp` (replace `com.yourcompany.yourapp` with your actual package name).

**Universal Links (iOS) / App Links (Android):**
These are more robust as they use standard `https://` URLs.
*   **iOS Universal Links:** Requires a `apple-app-site-association` file hosted at the root of your web domain (`https://www.yourdomain.com/apple-app-site-association`). This JSON file tells iOS which app IDs are associated with which paths on your domain. You also need to enable "Associated Domains" capability in Xcode.
*   **Android App Links:** Requires a `assetlinks.json` file hosted at `https://www.yourdomain.com/.well-known/assetlinks.json`. This file verifies ownership of the domain and associates it with your app's package name and SHA-256 fingerprint. You also need to add an `intent-filter` with `android:autoVerify="true"` to your `AndroidManifest.xml`.

```xml
<!-- In AndroidManifest.xml for App Links -->
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https"
          android:host="www.yourapp.com" /> <!-- Your domain -->
</intent-filter>
```

**Handling Incoming Links Manually (if not using `react-navigation`'s `linking` prop or for custom logic):**
The `Linking` API from `react-native` provides methods to handle incoming links:
*   `Linking.getInitialURL()`: Used to get the URL that launched the app (when the app was closed).
*   `Linking.addEventListener('url', callback)`: Used to listen for incoming URLs while the app is running (e.g., when another app opens a link to your app).

```javascript
// Example of manual link handling
import { Linking } from 'react-native';

React.useEffect(() => {
  const handleDeepLink = (event) => {
    console.log('Deep link received:', event.url);
    // Parse event.url and navigate accordingly
    // e.g., if (event.url.includes('/product/')) { navigation.navigate('Product', { id: '...' }) }
  };

  Linking.getInitialURL().then((url) => {
    if (url) {
      handleDeepLink({ url });
    }
  });

  const subscription = Linking.addEventListener('url', handleDeepLink);

  return () => {
    subscription.remove();
  };
}, []);
```

Common mistakes and safety notes:
*   **Native Configuration Errors:** Deep linking often fails due to incorrect `Info.plist` (iOS) or `AndroidManifest.xml` (Android) configurations. Double-check scheme names, bundle identifiers, and `exported="true"`/`singleTask` settings.
*   **Universal Link/App Link Domain Verification:** For universal/app links, the `apple-app-site-association` or `assetlinks.json` files must be correctly formatted, accessible via HTTPS, and correctly signed/configured. Any mismatch will cause links to open in the browser.
*   **Handling Missing Parameters:** When a deep link is malformed (e.g., `myapp://product` instead of `myapp://product/123`), your app should gracefully handle missing parameters, perhaps by navigating to a default screen or displaying an error.
*   **Security:** Be cautious about what data you expose in deep link URLs. Avoid passing sensitive information directly.
*   **Testing:** Thoroughly test deep links in various scenarios: app closed, app in background, app in foreground, and from different sources (browser, email, other apps).

Deep linking and universal links are essential for creating a connected and user-friendly mobile experience. Mastering their implementation will significantly enhance your React Native applications.

#### Key concepts
*   **Deep Linking:** The ability to link directly to specific content or screens within a mobile application using a URL.
*   **Custom URL Scheme:** A unique identifier (e.g., `myapp://`) registered with the operating system that tells it which app to open when a URL with that scheme is clicked.
*   **Universal Links (iOS):** Standard `https://` web links that, when clicked, open directly into the corresponding iOS app if installed and configured. Falls back to the web browser if the app is not installed or configuration fails.
*   **App Links (Android):** The Android equivalent of Universal Links, using `https://` web links to open directly into the Android app.
*   **`react-navigation/native` `linking` prop:** A powerful feature that allows you to configure how `react-navigation` handles incoming deep links by mapping URL paths to screen names and parameters.
*   **`Linking` API (`react-native`):** A core React Native module that provides methods to interact with incoming and outgoing app links, allowing for manual handling of URLs.

#### Hands-on activity
**Challenge: Add a "Settings" screen and deep link to it**

Your task is to extend the deep linking example to include a "Settings" screen and make it accessible via a deep link.

1.  **Create `SettingsScreen`:** Add a simple `SettingsScreen` component that displays some text (e.g., "App Settings").

2.  **Add to `StackNavigator`:** Register `SettingsScreen` as a new screen in your `Stack.Navigator` in `App.js`.

3.  **Configure Deep Link:**
    *   Update the `config` object in `linking` to include a path for your `Settings` screen (e.g., `settings`).
    *   The deep link should be `myapp://settings`.

4.  **Test:**
    *   Rebuild your app after native configuration changes.
    *   Test the deep link using a browser (iOS) or `adb` command (Android).

**Starter Code (modify `App.js` from detailed lesson content):**

```javascript
// App.js (partial)
import * as React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ... (HomeScreen, ProductScreen components)

// --- NEW Settings Screen ---
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App Settings</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

const config = {
  screens: {
    Home: 'home',
    Product: {
      path: 'product/:id',
      parse: {
        id: (id) => `product-${id}`,
      },
      stringify: {
        id: (id) => id.replace('product-', ''),
      },
    },
    // ADD THIS SCREEN CONFIG
    Settings: 'settings', // myapp://settings
  },
};

const linking = {
  prefixes: ['myapp://', 'https://www.yourapp.com'],
  config,
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        {/* ADD THIS SCREEN */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

#### Assessment idea
1.  **Question:** Your React Native app uses a custom URL scheme `mycoolapp://`. You want to deep link to a screen called `UserProfile` that accepts a `userId` parameter. If the user clicks a link `mycoolapp://profile/123`, how would you configure the `linking` object in `react-navigation` to correctly navigate to `UserProfile` and pass `123` as `userId`? Provide the relevant `config` snippet.

    **Correct Answer:**
    ```javascript
    const config = {
      screens: {
        // ... other screens
        UserProfile: {
          path: 'profile/:userId', // Matches mycoolapp://profile/123
          parse: {
            userId: (userId) => userId, // The userId is already in the desired format
          },
        },
      },
    };

    const linking = {
      prefixes: ['mycoolapp://'],
      config,
    };
    ```
    **Explanation:** The `path: 'profile/:userId'` defines the URL pattern. The `:userId` part is a placeholder that `react-navigation` automatically parses into a parameter. The `parse` function is optional here as the `userId` is already a string, but it's good practice to include it if any transformation is needed. When `mycoolapp://profile/123` is opened, `react-navigation` will navigate to the `UserProfile` screen, and `route.params.userId` will be `'123'`.

2.  **Question:** Differentiate between a custom URL scheme deep link and an iOS Universal Link in terms of user experience and setup complexity. Which one would you generally prefer for a new application and why?

    **Correct Answer:**
    *   **Custom URL Scheme Deep Link:** Uses a custom prefix (e.g., `myapp://`).
        *   **User Experience:** If the app is installed, it opens the app directly. If the app is *not* installed, the link will typically fail to open anything or show an error, leading to a poor user experience.
        *   **Setup Complexity:** Relatively simpler, primarily involving native configuration in `Info.plist` (iOS) or `AndroidManifest.xml` (Android) and `react-navigation`'s `linking` prop.
    *   **iOS Universal Link:** Uses a standard `https://` URL.
        *   **User Experience:** If the app is installed, it opens the app directly. If the app is *not* installed, the link gracefully falls back to opening the URL in the web browser, providing a much smoother and more robust experience.
        *   **Setup Complexity:** More complex. Requires hosting an `apple-app-site-association` file on your web domain, configuring "Associated Domains" in Xcode, and adding the `https` prefix to `react-navigation`'s `linking` config.

    **Preference:** For a new application, **iOS Universal Links (and Android App Links)** are generally preferred. The main reason is the significantly better user experience due to the graceful fallback to the web browser when the app is not installed. This makes marketing and sharing links much more effective, as users will always land on *some* content, even if it's the web version, rather than hitting a dead end. While setup is more involved, the benefits in user engagement and robustness outweigh the additional effort.

#### AI generation note
Create a 10-minute interactive code demo. Start by explaining the native configuration steps for both iOS (`Info.plist`) and Android (`AndroidManifest.xml`) using animated overlays on screenshots of the respective files. Then, switch to a live coding session demonstrating the `react-navigation` `linking` prop, showing how to define paths and parse parameters for a `Product` screen. Test the deep links using both Safari (iOS simulator) and `adb` commands (Android emulator) in a terminal, with the app running side-by-side. Include a mini-quiz asking about the difference between custom URL schemes and universal links. Emphasize a professional, hands-on, and safety-conscious tone, especially regarding native configuration.

---

## Module 3: Performance & Optimization Techniques

This module will equip you with the essential knowledge and practical techniques to identify, diagnose, and resolve performance bottlenecks in your React Native applications. You will learn how to make your apps faster, smoother, and more responsive, leading to a superior user experience. We will explore the underlying architecture that impacts performance, delve into advanced rendering optimizations, discuss efficient asset management, and master techniques for handling large datasets.

---

### Chapter 3.1 — Understanding React Native Performance Bottlenecks

#### Learning objectives
*   Explain the fundamental architecture of React Native and how it impacts performance.
*   Identify common performance bottlenecks in React Native applications, such as slow JavaScript execution and excessive re-renders.
*   Utilize profiling tools like Flipper and React DevTools to diagnose performance issues.
*   Differentiate between the JavaScript thread and the UI thread and their respective roles in application responsiveness.
*   Understand the concept of the "Bridge" and its implications for communication overhead.

#### Detailed lesson content
Building a React Native application involves more than just writing JavaScript; it's about understanding how that JavaScript interacts with the native UI. At its core, React Native operates on a multi-threaded architecture, primarily involving the JavaScript (JS) thread and the User Interface (UI) thread. The JS thread is where your React code runs, where state updates are processed, and where component logic is executed. The UI thread, on the other hand, is responsible for rendering the actual native components on the screen and handling user interactions like touches and gestures. These two threads communicate via a crucial component known as the "Bridge." The Bridge is a serialization layer that allows asynchronous communication between JavaScript and native modules. While powerful, every message passed across the Bridge incurs a performance cost. Too much data or too frequent communication can lead to a phenomenon known as "Bridge traffic congestion," which can manifest as UI stuttering or slow animations.

Common performance bottlenecks often stem from this architecture. One of the most frequent culprits is excessive re-renders. In React, components re-render whenever their state or props change. While this reactivity is a core strength, unnecessary re-renders of large or complex component trees can bog down the JS thread, leading to noticeable delays in UI updates. Imagine a parent component that updates its state frequently, causing all its children and grandchildren to re-render, even if their own props haven't changed. This cascade of re-renders consumes valuable CPU cycles and can make your app feel sluggish. Another significant bottleneck is slow JavaScript execution. Complex calculations, heavy data processing, or inefficient algorithms running on the JS thread can block it, preventing it from sending UI updates to the native thread promptly. This can lead to a "frozen" UI where the app appears unresponsive.

To effectively address these issues, you first need to identify them. This is where profiling tools become indispensable. Flipper, a desktop debugging platform for mobile apps, is an excellent starting point for React Native. It integrates various tools, including a React DevTools plugin, a Network Inspector, and a Metro Bundler plugin, allowing you to observe component re-renders, inspect network requests, and analyze bundle size. The React DevTools Profiler, accessible through Flipper or directly in your browser for web debugging, provides a detailed flame graph and ranked chart of component renders, helping you pinpoint exactly which components are re-rendering and why. For deeper native-side performance analysis, especially regarding UI thread performance, tools like Xcode Instruments (for iOS) and Android Studio Profiler (for Android) are essential. These native profilers can help you detect issues like excessive CPU usage, memory leaks, or slow UI rendering that might not be immediately apparent from the JavaScript side.

Understanding the distinction between the JS and UI threads is critical. If your JS thread is busy with heavy computations, it cannot efficiently send instructions to the UI thread, resulting in a delayed or janky UI. Conversely, if the UI thread is blocked by complex native animations or large image decoding, the app might freeze even if the JS thread is idle. The goal of performance optimization in React Native is often to minimize the work done on the JS thread, reduce Bridge communication, and ensure the UI thread remains unblocked and responsive. A common mistake beginners make is to jump into "optimizing" code without first profiling. This "premature optimization" often leads to wasted effort on non-bottlenecks or, worse, introduces new bugs and complexities. Always profile first, identify the real problem areas, and then apply targeted optimizations. Remember, the user experience is paramount, and a smooth, responsive application is key to user satisfaction.

#### Key concepts
*   **JavaScript Thread:** The thread where your React Native application's JavaScript code executes, handling logic, state, and component rendering instructions.
*   **UI Thread (Main Thread):** The native thread responsible for rendering actual UI components, handling user input, and managing native modules.
*   **React Native Bridge:** The asynchronous communication layer that facilitates message passing between the JavaScript thread and the native UI thread.
*   **Excessive Re-renders:** A common performance bottleneck where components re-render unnecessarily, consuming CPU cycles and slowing down the application.
*   **Flipper:** A debugging platform for mobile apps that includes tools for React Native, such as a React DevTools plugin, network inspector, and Metro bundler plugin.
*   **React DevTools Profiler:** A tool within React DevTools that visualizes component render times and frequencies, helping identify performance bottlenecks.
*   **Jank:** A term used to describe noticeable stuttering or freezing in the UI, often caused by the UI thread being blocked.

#### Hands-on activity
**Activity: Profiling a Sample Application with Flipper**

1.  **Setup:** Ensure you have Flipper installed on your desktop and a React Native project running on an emulator/device.
2.  **Scenario:** We'll create a simple app with a counter and a list of items. The goal is to observe re-renders.

    ```javascript
    // App.js
    import React, { useState, useCallback } from 'react';
    import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

    const ListItem = React.memo(({ item }) => {
      console.log(`Rendering ListItem: ${item.id}`);
      return (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      );
    });

    export default function App() {
      const [count, setCount] = useState(0);
      const [data, setData] = useState(
        Array.from({ length: 10 }, (_, i) => ({ id: String(i), name: `Item ${i}` }))
      );

      const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

      const addItem = () => {
        setData(prevData => [
          ...prevData,
          { id: String(prevData.length), name: `New Item ${prevData.length}` }
        ]);
      };

      return (
        <View style={styles.container}>
          <Text style={styles.header}>Counter: {count}</Text>
          <Button title="Increment Counter" onPress={increment} />
          <Button title="Add Item to List" onPress={addItem} />

          <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      header: {
        fontSize: 24,
        marginBottom: 20,
      },
      item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
      },
      list: {
        marginTop: 20,
        width: '100%',
      },
    });
    ```
3.  **Instructions:**
    *   Run the app on an emulator/device (`npx react-native run-android` or `npx react-native run-ios`).
    *   Open Flipper. Ensure the React DevTools plugin is active.
    *   In the React DevTools panel, go to the "Profiler" tab.
    *   Click the "Start profiling" button.
    *   In your app, click "Increment Counter" several times.
    *   Click "Add Item to List" several times.
    *   Stop profiling.
    *   Analyze the flame graph and ranked chart. Observe how `ListItem` components re-render when the counter is incremented (despite `React.memo` being used, we'll fix this in the next chapter!). Pay attention to the `console.log` output for `ListItem` to confirm re-renders.

#### Assessment idea
1.  **Question:** Your React Native app feels sluggish when navigating between screens. You suspect performance issues. Which of the following is the *most effective first step* to diagnose the problem?
    A) Immediately refactor complex components to use `React.memo`.
    B) Reduce the number of network requests the app makes.
    C) Use Flipper and React DevTools Profiler to identify rendering bottlenecks.
    D) Convert all images to WebP format.

    **Answer:** C) Use Flipper and React DevTools Profiler to identify rendering bottlenecks.
    **Explanation:** Premature optimization (A, B, D) without understanding the root cause is inefficient and can introduce new problems. The most effective first step is always to profile the application to pinpoint the actual bottlenecks. Flipper and React DevTools Profiler are specifically designed for this purpose in React Native, allowing you to see exactly where time is being spent and which components are re-rendering unnecessarily.

2.  **Question:** A React Native component performs a heavy calculation every time its parent re-renders, even though the calculation's inputs haven't changed. This is likely impacting the app's responsiveness. Which thread is primarily being burdened by this heavy calculation?
    A) The UI Thread
    B) The Native Module Thread
    C) The JavaScript Thread
    D) The Background Thread

    **Answer:** C) The JavaScript Thread
    **Explanation:** Heavy calculations within a React Native component's render logic or lifecycle methods execute on the JavaScript thread. If this thread is busy with computations, it delays sending UI updates to the native UI thread, leading to a perceived slowdown or "jank" in the application. The UI thread is responsible for rendering, while the JavaScript thread handles the logic and calculations.

#### AI generation note
Create a 12-minute video tutorial. Start with an animation illustrating the React Native architecture (JS thread, UI thread, Bridge communication). Then, switch to a live coding session demonstrating the sample application provided in the hands-on activity. Show how to open Flipper, connect to the app, and use the React DevTools Profiler to record and analyze re-renders. Highlight the `console.log` output in the Flipper console as re-renders occur. Use clear on-screen annotations to point out key areas in the profiler (flame graph, ranked chart) and explain how to interpret them. The tone should be encouraging and diagnostic. End with a reflection prompt asking users to consider a past performance issue and how profiling could have helped.

---

### Chapter 3.2 — Optimizing Component Rendering with `memo` and `useCallback`

#### Learning objectives
*   Apply `React.memo` to functional components to prevent unnecessary re-renders based on prop changes.
*   Understand the shallow comparison mechanism used by `React.memo` and `PureComponent`.
*   Utilize the `useCallback` hook to memoize functions and prevent child components from re-rendering due to new function references.
*   Employ the `useMemo` hook to memoize expensive computations and avoid recalculations on every render.
*   Identify scenarios where `memo`, `useCallback`, and `useMemo` are most effective and when their use might be counterproductive.

#### Detailed lesson content
In React Native, just like in web React, optimizing component rendering is paramount for a smooth user experience. The core principle is to prevent components from re-rendering when their props or state haven't truly changed in a meaningful way. `React.memo` is a higher-order component (HOC) that helps achieve this for functional components. When you wrap a functional component with `React.memo`, React performs a shallow comparison of its props with the previous props. If all props are shallowly equal, React skips rendering the component and reuses the last rendered result. This can be a huge performance win, especially for "pure" components that always render the same output given the same inputs. For class components, the equivalent is extending `React.PureComponent`, which provides a similar shallow prop and state comparison.

Let's consider an example. Imagine you have a `ProductCard` component that displays product details. If this component is rendered inside a `FlatList` and the parent component re-renders for reasons unrelated to the `ProductCard`'s data (e.g., a global counter updates), all `ProductCard` instances will re-render by default. By wrapping `ProductCard` with `React.memo`, you instruct React to only re-render it if its `product` prop (or any other prop) has actually changed. The shallow comparison means that if a prop is an object, `React.memo` will only check if the object *reference* has changed, not its internal properties. This is a common mistake: if you pass a new object literal as a prop on every parent render, `React.memo` will still trigger a re-render because the reference is new, even if the object's contents are identical.

```javascript
// Before memo:
const ProductCard = ({ product, onAddToCart }) => {
  console.log(`Rendering ProductCard for ${product.name}`);
  return (
    <View style={styles.card}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product.id)} />
    </View>
  );
};

// After memo:
const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log(`Rendering ProductCard for ${product.name}`);
  return (
    <View style={styles.card}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product.id)} />
    </View>
  );
});
```

While `React.memo` handles prop changes, what about functions passed as props? This is where `useCallback` comes into play. In JavaScript, functions are objects. Every time a functional component re-renders, any functions defined within it are re-created. If you pass one of these newly created functions as a prop to a `React.memo`-wrapped child component, the child will still re-render because the function's reference has changed, failing the shallow comparison. `useCallback` allows you to "memoize" a function, meaning it will return the same function instance across renders as long as its dependencies haven't changed.

```javascript
// In the parent component:
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is re-created on every render
  // const handleAddToCart = (productId) => { /* ... */ };

  // With useCallback, handleAddToCart is memoized
  const handleAddToCart = useCallback((productId) => {
    console.log(`Adding product ${productId} to cart`);
    // Perform cart logic
  }, []); // Empty dependency array means it's created once

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      {/* ProductCard will re-render if onAddToCart changes reference */}
      <ProductCard product={{ id: '1', name: 'Widget', price: 10 }} onAddToCart={handleAddToCart} />
    </View>
  );
};
```
In this example, `handleAddToCart` will only be re-created if any values in its dependency array (`[]` in this case) change. Since the array is empty, `handleAddToCart` remains the same function instance across `ParentComponent` re-renders, allowing `ProductCard` (if memoized) to skip its own re-render when `count` changes.

Similarly, `useMemo` is used to memoize expensive computations. If you have a complex calculation that derives a value from props or state, and this calculation is run on every render, `useMemo` can prevent redundant computations. It will only re-run the provided function if its dependencies change.

```javascript
const MyComponent = ({ data }) => {
  // Without useMemo, this calculation runs on every render
  // const processedData = data.filter(item => item.isActive).map(item => item.value * 2);

  // With useMemo, processedData is only recalculated if 'data' changes
  const processedData = useMemo(() => {
    console.log('Recalculating processedData');
    return data.filter(item => item.isActive).map(item => item.value * 2);
  }, [data]); // Dependency array: recalculate only if 'data' prop changes

  return (
    <View>
      <Text>Processed count: {processedData.length}</Text>
      {/* Render processedData */}
    </View>
  );
};
```

It's crucial to use these hooks judiciously. `React.memo`, `useCallback`, and `useMemo` introduce their own overhead (memory for storing memoized values, and the cost of shallow comparisons). Over-optimizing simple components or computations that are not performance bottlenecks can actually make your code more complex and potentially slower. Always profile first to identify the actual slow parts of your application before applying these optimizations. Common mistakes include incorrect dependency arrays in `useCallback` or `useMemo` (leading to stale closures or unnecessary re-runs) and applying `memo` to components that frequently receive new object/array props or children, negating its benefits.

#### Key concepts
*   **`React.memo`:** A higher-order component for functional components that prevents re-renders if props have not shallowly changed.
*   **`PureComponent`:** The class component equivalent of `React.memo`, performing shallow comparison of props and state.
*   **Shallow Comparison:** A comparison that checks if two values are strictly equal (`===`) for primitives, or if they refer to the same object/array instance for non-primitives. It does not deep-compare object contents.
*   **`useCallback`:** A React Hook that returns a memoized version of a callback function, preventing it from being re-created on every render unless its dependencies change.
*   **`useMemo`:** A React Hook that memoizes the result of an expensive computation, re-running the computation only when its dependencies change.
*   **Dependency Array:** An array passed as the second argument to `useCallback` and `useMemo`, specifying the values that, if changed, will cause the memoized function or value to be re-created/re-calculated.

#### Hands-on activity
**Activity: Optimizing `ProductCard` and `onAddToCart` with `memo` and `useCallback`**

1.  **Starter Code:** Use the `App.js` from the previous chapter's activity, but modify `ListItem` to `ProductCard` and add an `onAddToCart` prop.

    ```javascript
    // App.js - Starter Code
    import React, { useState, useCallback } from 'react';
    import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

    // This component will be optimized
    const ProductCard = ({ product, onAddToCart }) => {
      console.log(`Rendering ProductCard: ${product.name}`);
      return (
        <View style={styles.card}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Button title="Add to Cart" onPress={() => onAddToCart(product.id)} />
        </View>
      );
    };

    export default function App() {
      const [count, setCount] = useState(0);
      const [products, setProducts] = useState(
        Array.from({ length: 5 }, (_, i) => ({ id: String(i), name: `Product ${i}`, price: (i + 1) * 10 }))
      );

      const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

      const handleAddToCart = (productId) => {
        console.log(`Product ${productId} added to cart!`);
        // In a real app, this would update a cart state or send to an API
      };

      return (
        <View style={styles.container}>
          <Text style={styles.header}>Counter: {count}</Text>
          <Button title="Increment Counter" onPress={increment} />

          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard product={item} onAddToCart={handleAddToCart} />
            )}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      header: {
        fontSize: 24,
        marginBottom: 20,
      },
      card: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
      },
      productName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
      },
      list: {
        marginTop: 20,
        width: '100%',
      },
    });
    ```
2.  **Instructions:**
    *   Run the app and observe the console output when you click "Increment Counter". Notice that all `ProductCard` components re-render, even though their `product` data hasn't changed. This is because the `handleAddToCart` function is re-created on every `App` render, causing `ProductCard`'s props to change by shallow comparison.
    *   **Step 1: Apply `React.memo` to `ProductCard`.**
        ```javascript
        const ProductCard = React.memo(({ product, onAddToCart }) => {
          console.log(`Rendering ProductCard: ${product.name}`);
          // ... rest of the component
        });
        ```
    *   **Step 2: Apply `useCallback` to `handleAddToCart`.**
        ```javascript
        // Inside App component:
        const handleAddToCart = useCallback((productId) => {
          console.log(`Product ${productId} added to cart!`);
        }, []); // Add an empty dependency array
        ```
    *   **Step 3: Re-run the app and test.** Now, when you click "Increment Counter", the `ProductCard` components should *not* re-render. Only when you click "Add to Cart" (which calls the `handleAddToCart` function) or if the `products` state changes, should `ProductCard` re-render (or the `FlatList` itself). Observe the console logs to confirm.

#### Assessment idea
1.  **Question:** You have a React Native functional component `UserProfile` that receives `user` and `onEdit` props. The `user` prop is an object, and `onEdit` is a function. The `UserProfile` component re-renders excessively when its parent component updates unrelated state. Which combination of optimizations would be most effective to prevent `UserProfile` from re-rendering unless its `user` data or `onEdit` function *truly* changes?
    A) Wrap `UserProfile` with `React.memo` and wrap the `onEdit` function in the parent with `useMemo`.
    B) Wrap `UserProfile` with `React.memo` and wrap the `onEdit` function in the parent with `useCallback`.
    C) Use `useMemo` for the `user` prop and `useCallback` for the `onEdit` function within `UserProfile` itself.
    D) Convert `UserProfile` to a class component and extend `React.PureComponent`.

    **Answer:** B) Wrap `UserProfile` with `React.memo` and wrap the `onEdit` function in the parent with `useCallback`.
    **Explanation:** `React.memo` is designed to prevent functional components from re-rendering if their props haven't shallowly changed. For the `onEdit` function, which is passed as a prop, `useCallback` in the parent component will ensure that the function reference remains stable across renders, thus satisfying `React.memo`'s shallow comparison for that prop. `useMemo` is for memoizing values, not functions, so option A is incorrect. Option C is incorrect because `useMemo` and `useCallback` are typically used in the *parent* component to stabilize props *before* passing them to a memoized child. Option D is an alternative but `React.memo` is the modern approach for functional components.

2.  **Question:** Consider the following `useCallback` implementation:
    ```javascript
    const [value, setValue] = useState(0);
    const handleClick = useCallback(() => {
      console.log('Current value:', value);
      setValue(value + 1);
    }, []);
    ```
    If `handleClick` is called multiple times, what will be the output of `console.log('Current value:', value);` after the first call?
    A) `Current value: 0` every time.
    B) `Current value: 0`, then `Current value: 1`, then `Current value: 2`, etc.
    C) An error, as `value` is not in the dependency array.
    D) The component will re-render, and `handleClick` will be re-created, leading to correct `value` updates.

    **Answer:** A) `Current value: 0` every time.
    **Explanation:** The `useCallback` hook with an empty dependency array (`[]`) means the `handleClick` function is created only once when the component first mounts. The `value` variable captured within that initial `handleClick` closure will always be `0`, even as the `value` state updates in subsequent renders. This is a common mistake known as a "stale closure." To fix this, `value` should be included in the dependency array (`[value]`), or the `setValue` updater function should be used (`setValue(prevValue => prevValue + 1)`) to avoid needing `value` in the dependency array.

#### AI generation note
Create a 10-minute live coding video. Start with the unoptimized `ProductCard` and `handleAddToCart` from the hands-on activity, showing the console logs indicating re-renders. Then, progressively refactor the code: first, apply `React.memo` to `ProductCard` and demonstrate that it still re-renders due to the changing `onAddToCart` prop. Next, apply `useCallback` to `handleAddToCart` in the parent component, explaining the dependency array. Show the final optimized behavior where `ProductCard` no longer re-renders when the parent's unrelated state changes. Use a split-screen view for code and console output. Conclude with a visual summary slide explaining shallow comparison and the role of dependency arrays.

---

### Chapter 3.3 — Image and Asset Optimization Strategies

#### Learning objectives
*   Explain the performance impact of unoptimized images and assets on React Native applications.
*   Implement strategies for selecting appropriate image formats (JPEG, PNG, WebP) and resolutions.
*   Utilize lazy loading and caching techniques for images to improve initial load times and reduce network usage.
*   Integrate `react-native-fast-image` for enhanced image loading performance.
*   Discuss the benefits and drawbacks of using vector graphics (SVGs) versus raster images.

#### Detailed lesson content
Images and other media assets are often the heaviest components of a mobile application, directly impacting bundle size, initial load times, and memory consumption. An unoptimized image can lead to a sluggish user interface, increased data usage for users, and even out-of-memory crashes on devices with limited resources. Imagine a social media app displaying a feed of high-resolution photos. If each photo is downloaded at its original camera resolution and not properly sized for the device's screen, it wastes bandwidth, takes longer to display, and consumes excessive memory, potentially causing the app to feel slow or crash.

The first step in image optimization is choosing the right format and resolution. JPEG is generally suitable for photographs with many colors and gradients, offering good compression with some loss of quality. PNG is better for images with transparency, sharp edges, or fewer colors, as it uses lossless compression. However, for modern applications, WebP is often the superior choice. Developed by Google, WebP offers both lossless and lossy compression, typically achieving significantly smaller file sizes than JPEG or PNG while maintaining comparable quality. React Native's `Image` component supports WebP natively on most platforms. When it comes to resolution, always serve images at a resolution appropriate for the display density of the target device. React Native handles different pixel densities (e.g., `@2x`, `@3x` assets) automatically, but providing images that are *too large* for any target density is inefficient. Tools can resize images automatically during the build process or you can use image CDNs that handle dynamic resizing.

Beyond static optimization, dynamic strategies like lazy loading and caching are crucial. Lazy loading means an image is only loaded when it's about to appear on screen, rather than all at once. This significantly improves initial load times, especially for lists or feeds with many images. React Native's `FlatList` and `VirtualizedList` components inherently support a form of lazy loading for their `renderItem` content, but for images specifically, you might need additional logic or libraries. Caching stores downloaded images locally on the device, so subsequent requests for the same image don't require re-downloading. This saves data, reduces network requests, and makes the UI appear faster. While the default `Image` component offers basic caching, for more robust and performant caching, especially for network images, a dedicated library like `react-native-fast-image` is highly recommended.

`react-native-fast-image` is a powerful library that leverages native image loading libraries (Glide on Android, SDWebImage on iOS) for superior performance. It provides features like:
*   **Aggressive caching:** Images are cached more effectively and reliably.
*   **Prioritization:** You can prioritize image loading.
*   **Preloading:** Preload images into the cache before they are needed.
*   **GIF/WebP support:** Enhanced support for these formats.
*   **Authorization headers:** Easily add headers for authenticated image sources.

Using `react-native-fast-image` is straightforward. Instead of `Image`, you import and use `FastImage`:

```javascript
import FastImage from 'react-native-fast-image';

// ... in your component
<FastImage
  style={{ width: 200, height: 200 }}
  source={{
    uri: 'https://unsplash.com/photos/a-colorful-abstract-painting-with-a-black-background-9R8Q_n-6L7k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE3NTYxOTYwfA&force=true&w=640',
    headers: { Authorization: 'someAuthToken' },
    priority: FastImage.priority.normal,
    cache: FastImage.cacheControl.immutable, // or .web or .cacheOnly
  }}
  resizeMode={FastImage.resizeMode.contain}
/>
```
This component allows fine-grained control over caching and loading behavior, leading to a much smoother image experience.

Finally, consider vector graphics (SVGs) for icons and simple illustrations. Unlike raster images (JPEG, PNG, WebP) which are pixel-based and lose quality when scaled, SVGs are XML-based and scale perfectly to any resolution without pixelation. This makes them ideal for UI elements that need to look crisp on all screen densities. Libraries like `react-native-svg` allow you to render SVGs in React Native. While SVGs are great for scalability and often smaller file sizes for simple graphics, they can become complex and heavy for detailed images like photographs. A common mistake is using large, unoptimized SVGs or trying to render overly complex SVG paths, which can also impact performance. Always choose the right tool for the job: SVGs for icons and simple shapes, WebP/JPEG/PNG for photographs, optimized for size and resolution.

#### Key concepts
*   **Image Optimization:** The process of reducing image file size and improving loading performance without significantly sacrificing visual quality.
*   **JPEG:** A lossy image compression format, best for photographs and images with continuous tones.
*   **PNG:** A lossless image compression format, best for images with transparency, sharp lines, or fewer colors.
*   **WebP:** A modern image format developed by Google, offering superior compression (both lossy and lossless) compared to JPEG and PNG.
*   **Lazy Loading:** A technique where images are only loaded when they are about to become visible on the screen, improving initial load times.
*   **Image Caching:** Storing downloaded images locally on the device to avoid re-downloading them on subsequent requests.
*   **`react-native-fast-image`:** A third-party library that provides a highly performant image component leveraging native image loading solutions for better caching and loading.
*   **Vector Graphics (SVG):** Resolution-independent images defined by mathematical paths, ideal for icons and illustrations that scale without quality loss.
*   **Raster Graphics:** Pixel-based images (like JPEG, PNG), which can become pixelated when scaled up.

#### Hands-on activity
**Activity: Implementing `react-native-fast-image` with Caching**

1.  **Setup:**
    *   Create a new React Native project or use an existing one.
    *   Install `react-native-fast-image`:
        ```bash
        npm install react-native-fast-image
        cd ios && pod install && cd .. # For iOS
        ```
    *   Ensure you have internet access on your emulator/device.

2.  **Starter Code (`App.js`):**

    ```javascript
    import React, { useState } from 'react';
    import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
    import FastImage from 'react-native-fast-image'; // Import FastImage

    const imageUrls = [
      'https://picsum.photos/id/1003/400/300', // Forest
      'https://picsum.photos/id/1004/400/300', // Beach
      'https://picsum.photos/id/1005/400/300', // Mountain
      'https://picsum.photos/id/1006/400/300', // City
      'https://picsum.photos/id/1008/400/300', // Desert
      'https://picsum.photos/id/1010/400/300', // Lake
    ];

    export default function App() {
      const [reloadKey, setReloadKey] = useState(0); // Used to force image reload

      const forceReload = () => {
        setReloadKey(prevKey => prevKey + 1);
        console.log('Forcing image reload, clearing cache...');
        // In a real app, you might clear FastImage cache explicitly here
        // FastImage.clearDiskCache();
        // FastImage.clearMemoryCache();
      };

      return (
        <View style={styles.container}>
          <Text style={styles.header}>Image Optimization Demo</Text>
          <Button title="Force Reload All Images" onPress={forceReload} />
          <Text style={styles.subHeader}>Observe network requests in Flipper!</Text>

          <ScrollView style={styles.scrollView}>
            {imageUrls.map((url, index) => (
              <View key={`${url}-${reloadKey}-${index}`} style={styles.imageWrapper}>
                <Text style={styles.imageLabel}>Image {index + 1}</Text>
                <FastImage
                  style={styles.image}
                  source={{
                    uri: url,
                    priority: FastImage.priority.normal,
                    // cache: FastImage.cacheControl.web, // Default caching behavior, revalidates
                    // cache: FastImage.cacheControl.immutable, // Cache forever
                    cache: FastImage.cacheControl.cacheOnly, // Only load from cache, no network
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      header: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      subHeader: {
        fontSize: 14,
        marginBottom: 20,
        color: '#666',
      },
      scrollView: {
        width: '100%',
      },
      imageWrapper: {
        marginBottom: 20,
        alignItems: 'center',
      },
      imageLabel: {
        fontSize: 16,
        marginBottom: 5,
      },
      image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
      },
    });
    ```
3.  **Instructions:**
    *   Run the app on an emulator/device.
    *   Open Flipper and navigate to the "Network" plugin.
    *   **First Load:** Observe the network requests as the images load. They should all show up as new requests.
    *   **Second Load (without force reload):** Scroll the images out of view and then back in. Notice that FastImage, by default, will likely serve them from cache without making new network requests (or making very quick revalidation requests).
    *   **Experiment with `cache` property:**
        *   Uncomment `cache: FastImage.cacheControl.immutable` and re-run. The images should load once and then always be served from cache without network requests until the app is fully closed or cache cleared.
        *   Uncomment `cache: FastImage.cacheControl.cacheOnly` and re-run. If the images are not already in cache, they won't load at all from the network. This is useful for offline scenarios.
    *   **Force Reload:** Click the "Force Reload All Images" button. This changes the `key` of the images, forcing React Native to re-mount them and FastImage to re-evaluate. You should see new network requests for the images (unless `cacheOnly` is active and they are not in cache).
    *   **Observe the speed:** Notice how much faster images appear once they are cached.

#### Assessment idea
1.  **Question:** A user complains that your React Native app consumes too much mobile data and images load slowly, especially on slower networks. The app displays many high-resolution product photos. Which of the following is the *least effective* strategy to address these issues?
    A) Implement `react-native-fast-image` with aggressive caching.
    B) Ensure product images are served in WebP format at appropriate resolutions.
    C) Use `FlatList` with `initialNumToRender` and `windowSize` props to lazy load images.
    D) Convert all product photos to SVG format.

    **Answer:** D) Convert all product photos to SVG format.
    **Explanation:** While SVGs are excellent for icons and simple illustrations due to their scalability, they are generally unsuitable for complex photographic images. Converting detailed product photos to SVG would likely result in extremely large file sizes, complex rendering, and potentially worse performance than optimized raster formats like WebP or JPEG. The other options (A, B, C) are all highly effective strategies for optimizing image loading and data usage.

2.  **Question:** You are displaying a list of user avatars in a React Native application. These avatars are small, circular images. You want them to load quickly, be cached efficiently, and appear crisp on all device screen densities without pixelation. Which image format and loading strategy would be most appropriate?
    A) JPEG images, loaded with the standard `Image` component.
    B) PNG images, preloaded into memory on app start.
    C) SVG icons, loaded with `react-native-svg` and cached by the system.
    D) WebP images, loaded with `react-native-fast-image` and lazy-loaded.

    **Answer:** C) SVG icons, loaded with `react-native-svg` and cached by the system.
    **Explanation:** For small, circular avatars that need to be crisp on all densities, SVG is an excellent choice as it scales perfectly without pixelation. `react-native-svg` allows rendering them. While `react-native-fast-image` and WebP (D) are great for general photos, for simple, resolution-independent graphics like avatars, SVGs are often superior for quality and sometimes file size. JPEG (A) and PNG (B) would require multiple resolution assets or risk pixelation, and preloading all avatars (B) might consume too much memory.

#### AI generation note
Create an 11-minute video tutorial. Begin with a visual comparison of JPEG, PNG, and WebP file sizes and quality for a sample image. Then, transition to a live coding demo using the `react-native-fast-image` activity code. Show how to install the library and replace `Image` with `FastImage`. Crucially, use Flipper's Network Inspector side-by-side with the app to demonstrate the caching behavior: show initial network requests, then subsequent requests being served from cache, and finally, how `FastImage.cacheControl.immutable` or `cacheOnly` impacts network activity. Include a clear diagram overlay explaining the difference between lazy loading and eager loading. Emphasize common mistakes like using full-resolution images.

---

### Chapter 3.4 — FlatList and VirtualizedList for Large Datasets

#### Learning objectives
*   Explain the performance challenges of rendering large lists of items in React Native.
*   Utilize `FlatList` to efficiently render long, scrollable lists of data.
*   Configure `FlatList` props such as `keyExtractor`, `initialNumToRender`, and `windowSize` for optimal performance.
*   Understand the concept of virtualization and how `VirtualizedList` provides a low-level interface for custom list rendering.
*   Implement `getItemLayout` for `FlatList` to further improve scroll performance with fixed-height items.

#### Detailed lesson content
One of the most common performance bottlenecks in mobile applications is rendering long lists of data. If you have hundreds or thousands of items to display, simply mapping over an array and rendering a `View` for each item will quickly bring your app to a crawl. This is because React Native would attempt to render *all* components at once, consuming excessive memory and CPU, leading to a janky, unresponsive scroll experience. The solution to this problem is **list virtualization**, and in React Native, the primary components for this are `FlatList` and `VirtualizedList`.

`FlatList` is a high-performance component designed specifically for rendering long lists of data. It works by only rendering the items that are currently visible on the screen, plus a small buffer of items just outside the viewport. As the user scrolls, `FlatList` intelligently recycles and re-renders components, effectively managing memory and ensuring smooth scrolling. This technique is called **virtualization**. Instead of creating a thousand `View` components, `FlatList` might only create 10-20, updating their data as they scroll into view.

To get started with `FlatList`, you primarily need two props: `data` (your array of items) and `renderItem` (a function that takes an item and returns the component to render). Crucially, you *must* also provide a `keyExtractor` prop. `keyExtractor` is a function that takes an item and its index and returns a unique string identifier for that item. React uses these keys to efficiently track items, especially when the list changes (items are added, removed, or reordered). Without a stable and unique key, `FlatList` cannot optimize its rendering and may behave unpredictably or inefficiently. A common mistake is to use the item's index as the key, which can lead to issues if the list order changes. Always use a unique ID from your data if available.

```javascript
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: String(i), title: `Item ${i}` }));

const MyListItem = React.memo(({ title }) => {
  console.log(`Rendering ${title}`); // Observe re-renders
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <MyListItem title={item.title} />}
        keyExtractor={item => item.id} // Crucial for performance
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: { fontSize: 32 },
});
```

For even better performance, especially with items of fixed height, you can use the `getItemLayout` prop. This prop allows `FlatList` to skip measuring the layout of items, which can be an expensive operation. By providing `getItemLayout`, you tell `FlatList` exactly where each item is located and its dimensions, enabling it to jump directly to the correct scroll position without rendering items in between. This is particularly useful for very long lists where initial scroll position is important or very fast scrolling is expected.

```javascript
// ... inside FlatList props
getItemLayout={(data, index) => (
  { length: ITEM_HEIGHT + ITEM_MARGIN_VERTICAL * 2, offset: (ITEM_HEIGHT + ITEM_MARGIN_VERTICAL * 2) * index, index }
)}
```
Here, `ITEM_HEIGHT` and `ITEM_MARGIN_VERTICAL` would be constants representing the fixed dimensions of your list items. If your items have variable heights, `getItemLayout` cannot be used, and `FlatList` will fall back to measuring them dynamically, which is less performant but necessary.

Other important `FlatList` props for optimization include:
*   `initialNumToRender`: The number of items to render in the initial batch. A good value prevents a blank screen but too high can slow down initial load.
*   `windowSize`: The number of items to render above and below the visible area. A larger window means less blank space during fast scrolling but more memory usage.
*   `maxToRenderPerBatch`: How many items to render in each subsequent batch after the initial render.
*   `removeClippedSubviews`: (Android only) Set to `true` to remove off-screen views from the native hierarchy, improving performance.

`VirtualizedList` is a more primitive component that `FlatList` (and `SectionList`) is built upon. It offers the core virtualization logic but requires you to implement `getItem` and `getItemCount` functions yourself, giving you more control over how data is accessed and rendered. You would typically use `VirtualizedList` only if `FlatList` or `SectionList` don't meet your specific, highly customized list rendering needs. For most scenarios, `FlatList` is sufficient and easier to use.

A common mistake is forgetting to memoize your `renderItem` component (using `React.memo` as shown in `MyListItem` above) and the `renderItem` function itself (using `useCallback`) when using `FlatList`. If `renderItem` creates a new component or a new function on every `FlatList` re-render, it can negate some of the virtualization benefits, causing unnecessary re-renders of the visible items. Always combine `FlatList` with `React.memo` and `useCallback` for maximum efficiency.

#### Key concepts
*   **List Virtualization:** A technique used to efficiently render long lists by only rendering the items currently visible on screen, plus a small buffer.
*   **`FlatList`:** A high-performance React Native component for rendering long lists of data with built-in virtualization.
*   **`VirtualizedList`:** A more primitive component that provides the core virtualization logic, allowing for highly customized list implementations. `FlatList` is built on top of `VirtualizedList`.
*   **`keyExtractor`:** A required `FlatList` prop that returns a unique key for each item, enabling React to efficiently track and re-render items.
*   **`renderItem`:** A `FlatList` prop (function) that takes an item from the `data` array and returns the React component to render for that item.
*   **`getItemLayout`:** An optional `FlatList` prop (function) that provides layout information for fixed-height items, allowing `FlatList` to skip measurement and improve scroll performance.
*   **`initialNumToRender`:** A `FlatList` prop that specifies how many items to render in the initial batch.
*   **`windowSize`:** A `FlatList` prop that defines the number of items to render above and below the visible viewport, impacting memory usage and blank space during fast scrolling.

#### Hands-on activity
**Activity: Optimizing `FlatList` with `getItemLayout` and `React.memo`**

1.  **Starter Code (`App.js`):**

    ```javascript
    import React, { useState, useCallback } from 'react';
    import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';

    const { width } = Dimensions.get('window');
    const ITEM_HEIGHT = 100; // Fixed height for our items
    const ITEM_MARGIN_VERTICAL = 5;

    const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: String(i), title: `Item ${i}` }));

    // Memoize the list item component
    const OptimizedListItem = React.memo(({ title, index }) => {
      // console.log(`Rendering Item ${index}: ${title}`); // Uncomment to observe renders
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.index}>Index: {index}</Text>
        </View>
      );
    );
    ```
2.  **Instructions:**
    *   **Step 1: Implement `FlatList` without `getItemLayout`.**
        ```javascript
        // ... inside App component
        return (
          <View style={styles.container}>
            <Text style={styles.header}>FlatList Optimization</Text>
            <FlatList
              data={DATA}
              renderItem={({ item, index }) => <OptimizedListItem title={item.title} index={index} />}
              keyExtractor={item => item.id}
              initialNumToRender={10} // Render 10 items initially
              windowSize={21} // Render 10 above, 10 below, plus 1 visible screen
            />
          </View>
        );
        ```
        Run the app. Scroll quickly. Observe the smoothness (or lack thereof) and optionally uncomment the `console.log` in `OptimizedListItem` to see how many items are rendered initially and as you scroll.
    *   **Step 2: Add `getItemLayout` for fixed-height items.**
        ```javascript
        // ... inside App component, modify FlatList props
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => <OptimizedListItem title={item.title} index={index} />}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          windowSize={21}
          // Add getItemLayout for fixed-height items
          getItemLayout={(data, index) => (
            { length: ITEM_HEIGHT + ITEM_MARGIN_VERTICAL * 2, offset: (ITEM_HEIGHT + ITEM_MARGIN_VERTICAL * 2) * index, index }
          )}
        />
        ```
        Re-run the app. Notice the improved scroll performance, especially during very fast scrolling. The `getItemLayout` prop helps `FlatList` calculate item positions without dynamic measurement.
    *   **Step 3: Verify `React.memo` and `useCallback` (conceptual).**
        In this example, `OptimizedListItem` is already wrapped with `React.memo`. If `renderItem` were a function that created a new component instance or a new callback on every `FlatList` re-render (e.g., if `App` had a state that updated frequently), you would also wrap the `renderItem` function with `useCallback` to ensure its stability. For this specific scenario, `FlatList`'s internal optimizations combined with `React.memo` on the item component are sufficient.

#### Assessment idea
1.  **Question:** You have a React Native application that needs to display a list of 500 customer records. Each record is a simple `View` with `Text` components, and all records have the exact same height. When you implement this list using a simple `ScrollView` and `map()` over the data, the app becomes extremely slow and unresponsive. Which component and optimization strategy would provide the best performance for this scenario?
    A) Use `SectionList` and group the data into sections.
    B) Use `FlatList` with `keyExtractor` and `getItemLayout`.
    C) Use `ScrollView` but implement manual lazy loading logic.
    D) Use `VirtualizedList` and render only 10 items at a time.

    **Answer:** B) Use `FlatList` with `keyExtractor` and `getItemLayout`.
    **Explanation:** `FlatList` is specifically designed for long, scrollable lists and implements virtualization. `keyExtractor` is essential for its efficient rendering. Since all items have the same height, `getItemLayout` can be used to provide `FlatList` with precise layout information, allowing it to skip expensive measurement calculations and significantly improve scroll performance. `SectionList` (A) is for grouped data, not necessarily for raw performance with uniform items. `ScrollView` (C) renders all items at once, making it unsuitable for large lists. `VirtualizedList` (D) is a lower-level component that `FlatList` is built upon; `FlatList` provides a more convenient and often sufficient API for most cases.

2.  **Question:** You are using `FlatList` to display a list of blog posts. Each post has a unique `id`. You've noticed that when you update a piece of state in the parent component (unrelated to the posts themselves), all visible blog post items in the `FlatList` briefly re-render. You've already wrapped your `BlogPostItem` component with `React.memo`. What is the most likely reason for the unnecessary re-renders of `BlogPostItem`s?
    A) The `keyExtractor` is using the item's index instead of its unique `id`.
    B) The `renderItem` function itself is being re-created on every parent render.
    C) The `FlatList`'s `windowSize` prop is set too high.
    D) `getItemLayout` is not implemented, causing layout re-calculations.

    **Answer:** B) The `renderItem` function itself is being re-created on every parent render.
    **Explanation:** Even if `BlogPostItem` is memoized, if the `renderItem` function (passed as a prop to `FlatList`) is re-created on every parent render, `FlatList` will perceive a change in its `renderItem` prop. This will cause `FlatList` to re-render its visible items, even if their data hasn't changed. To prevent this, the `renderItem` function should be wrapped with `useCallback` in the parent component, ensuring its reference remains stable. While a bad `keyExtractor` (A) can cause issues, it typically manifests as incorrect item updates or warnings, not necessarily universal re-renders due to parent state changes. `windowSize` (C) and `getItemLayout` (D) relate to virtualization efficiency, not the re-rendering of individual memoized components due to parent state changes.

#### AI generation note
Create a 13-minute interactive code demo. Start by demonstrating a simple `ScrollView` with 1000 items, highlighting the jank and slow performance. Then, refactor it into a basic `FlatList` with `keyExtractor` and `renderItem`, showing immediate performance improvement. Next, introduce the `getItemLayout` prop for fixed-height items, explaining *why* it helps and demonstrating the further improvement in scroll smoothness. Use a visual overlay to explain the concept of virtualization (only rendering visible items). Include a `console.log` in the `renderItem` component to visually track when items are rendered/re-rendered. The interactive element should be a challenge to refactor a `FlatList` to use `useCallback` for its `renderItem` function when the parent has frequently changing state.

---

## Module 4: Integrating Native Capabilities

**Module Goal:** By the end of this module, you will be able to seamlessly integrate platform-specific functionalities and native UI components into your React Native applications, unlocking the full power of the underlying mobile platforms. You will learn how to bridge JavaScript with native code, leverage existing native UI, access device hardware, and troubleshoot advanced integration challenges.

### Chapter 4.1 — Understanding Native Modules and Bridging

#### Learning objectives
*   Explain the purpose and architecture of React Native's native module bridging mechanism.
*   Create a simple native module on both iOS (Objective-C/Swift) and Android (Java/Kotlin) platforms.
*   Expose native methods and constants to the JavaScript layer of a React Native application.
*   Understand how data types are mapped and handled when passed across the native bridge.
*   Identify common pitfalls and best practices when designing and implementing native modules.

#### Detailed lesson content
React Native's core strength lies in its ability to allow developers to write cross-platform mobile applications using JavaScript. However, mobile platforms like iOS and Android offer a vast array of unique features, APIs, and hardware access that might not have a direct JavaScript equivalent in the standard React Native library. This is where **native modules** come into play. A native module is essentially a piece of platform-specific code (Objective-C/Swift for iOS, Java/Kotlin for Android) that can be invoked and utilized directly from your JavaScript code within React Native. It acts as a bridge, allowing your JavaScript logic to "talk" to the underlying native operating system and its functionalities.

The concept of the "bridge" is fundamental to understanding how React Native operates. It's a communication layer that facilitates asynchronous, serialized message passing between the JavaScript thread (where your React Native code runs) and the native UI thread (where the actual UI rendering and native API calls happen). When you call a native method from JavaScript, the parameters are serialized, sent across the bridge, deserialized on the native side, the native method is executed, and any return value or callback is then serialized again and sent back across the bridge to JavaScript. This asynchronous nature is crucial for maintaining a smooth user interface, as blocking the UI thread with synchronous native calls would lead to a frozen app.

Let's walk through creating a simple native module. Imagine we want a native module that provides a simple "Hello, World!" message or perhaps a more practical utility like getting the device's battery level, which isn't directly exposed by default in React Native.

**For iOS (Objective-C):**

First, open your React Native project in Xcode. In the project navigator, right-click on your project's main group (e.g., `AwesomeProject`) and select `New File...`. Choose `Objective-C File` and name it `CalendarManager`. Make sure to also create a header file (`.h`) for it.

**`CalendarManager.h`:**
```objective-c
#import <React/RCTBridgeModule.h>

@interface CalendarManager : NSObject <RCTBridgeModule>
@end
```
Here, `RCTBridgeModule` is the protocol that marks `CalendarManager` as a native module accessible from JavaScript.

**`CalendarManager.m`:**
```objective-c
#import "CalendarManager.h"
#import <React/RCTLog.h> // For logging to the console

@implementation CalendarManager

// To make this module available to JavaScript
RCT_EXPORT_MODULE();

// Example of an exported method that doesn't return a value
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  // In a real app, you would interact with iOS Calendar API here
}

// Example of an exported method that takes a callback
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@"Event 1", @"Event 2"]; // Dummy data
  callback(@[[NSNull null], events]); // First argument is error, second is data
}

// Example of an exported method that returns a Promise
RCT_EXPORT_METHOD(getCurrentBatteryLevel:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  UIDevice *device = [UIDevice currentDevice];
  device.batteryMonitoringEnabled = YES; // Enable battery monitoring
  float batteryLevel = [device batteryLevel];

  if (batteryLevel > 0) {
    resolve(@(batteryLevel * 100)); // Resolve with battery percentage
  } else {
    NSError *error = [NSError errorWithDomain:@"BatteryDomain" code:100 userInfo:@{NSLocalizedDescriptionKey: @"Could not get battery level"}];
    reject(@"battery_error", @"Failed to retrieve battery level", error);
  }
}

// Exporting constants
- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}

@end
```
The `RCT_EXPORT_MODULE()` macro makes the module discoverable. `RCT_EXPORT_METHOD()` exposes methods. Notice how we handle arguments like `NSString` for text, and special types like `RCTResponseSenderBlock` for callbacks and `RCTPromiseResolveBlock`/`RCTPromiseRejectBlock` for promises. The `constantsToExport` method allows you to expose static values from native to JavaScript.

**For Android (Java):**

Open your React Native project in Android Studio. Navigate to `android/app/src/main/java/com/yourprojectname`. Create a new Java class named `CalendarModule`.

**`CalendarModule.java`:**
```java
package com.yourprojectname; // Make sure this matches your package name

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback; // For callbacks
import com.facebook.react.bridge.Promise; // For promises
import com.facebook.react.bridge.ReadableMap; // For objects/maps
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import android.util.Log;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.content.Context;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Nullable;

public class CalendarModule extends ReactContextBaseJavaModule {
    private static final String TAG = "CalendarModule";
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarManager"; // This name is used in JavaScript to access the module
    }

    // Example of an exported method that doesn't return a value
    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d(TAG, "Create event called with name: " + name + " and location: " + location);
        // In a real app, you would interact with Android Calendar API here
    }

    // Example of an exported method that takes a callback
    @ReactMethod
    public void findEvents(Callback successCallback, Callback errorCallback) {
        try {
            String[] events = {"Event A", "Event B"}; // Dummy data
            successCallback.invoke(events);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    // Example of an exported method that returns a Promise
    @ReactMethod
    public void getBatteryLevel(Promise promise) {
        try {
            IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryStatus = getReactApplicationContext().registerReceiver(null, ifilter);
            int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
            float batteryPct = level / (float)scale;
            promise.resolve(batteryPct * 100);
        } catch (Exception e) {
            promise.reject("BATTERY_ERROR", "Failed to get battery level", e);
        }
    }

    // Exporting constants
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("firstDayOfTheWeek", "Monday");
        return constants;
    }
}
```
The `@ReactMethod` annotation exposes methods to JavaScript. The `getName()` method returns the string name that JavaScript will use to reference this module. Android uses `Callback` and `Promise` types similarly to iOS for asynchronous operations.

After creating the module, you need to register it with React Native. This is done by creating a `ReactPackage`.

**`CalendarPackage.java` (for Android):**
```java
package com.yourprojectname; // Make sure this matches your package name

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CalendarPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new CalendarModule(reactContext)); // Add your module here
        return modules;
    }
}
```

Finally, you need to register this `CalendarPackage` in your `MainApplication.java`:

**`MainApplication.java` (for Android):**
```java
package com.yourprojectname;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          packages.add(new CalendarPackage()); // Add your package here
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.yourprojectname.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
```

**Accessing the module from JavaScript:**

Now, in your React Native JavaScript code, you can import and use your native module:

```javascript
import { NativeModules, Platform } from 'react-native';

const { CalendarManager } = NativeModules;

// Accessing constants
console.log('First day of the week:', CalendarManager.firstDayOfTheWeek);

// Calling a method without a return value
CalendarManager.addEvent('Birthday Party', 'My House');

// Calling a method with a callback
if (Platform.OS === 'ios') { // iOS example uses callback, Android uses Promise for battery
  CalendarManager.findEvents((error, events) => {
    if (error) {
      console.error('Error finding events:', error);
    } else {
      console.log('Found events:', events);
    }
  });
}

// Calling a method with a Promise
async function getBattery() {
  try {
    const batteryLevel = await CalendarManager.getBatteryLevel();
    console.log(`Battery level: ${batteryLevel}%`);
  } catch (e) {
    console.error('Failed to get battery level:', e.code, e.message);
  }
}
getBattery();
```

**Common Mistakes and Safety Notes:**
*   **Forgetting to register the module:** This is a very common oversight, especially on Android where you need to create a `ReactPackage` and add it to `MainApplication.java`. On iOS, `RCT_EXPORT_MODULE()` handles registration.
*   **Incorrect data type mapping:** React Native's bridge automatically handles basic types (strings, numbers, booleans, arrays, objects). However, complex custom objects or specific native types need to be manually serialized/deserialized or handled within the native module. Passing large amounts of data across the bridge frequently can also lead to performance bottlenecks.
*   **Blocking the UI thread:** Native methods should ideally be quick. If a native operation is long-running (e.g., network request, complex computation), it should be executed on a background thread on the native side to avoid freezing the UI. React Native's bridge itself is asynchronous, but the native code it invokes still runs on the native threads.
*   **Error handling:** Always include robust error handling in your native modules, especially when dealing with external APIs or hardware. Use promises (`resolve`/`reject`) or callbacks to communicate success or failure back to JavaScript.
*   **Platform-specific code:** Remember that native modules are platform-specific. You will need separate implementations for iOS and Android, and use `Platform.OS` in JavaScript to conditionally call the correct module or handle differences.
*   **Security:** Be mindful of what native capabilities you expose. Avoid exposing sensitive system functions without proper validation and security checks.

By mastering native modules, you unlock the full potential of React Native, allowing your applications to seamlessly integrate with the underlying platform's unique features and hardware, providing a truly native experience where needed.

#### Key concepts
*   **Native Module:** A platform-specific (iOS/Android) code component that exposes native functionalities to React Native's JavaScript layer.
*   **React Native Bridge:** The communication layer that facilitates asynchronous, serialized message passing between the JavaScript thread and the native UI thread.
*   **`RCT_EXPORT_MODULE()` (iOS):** A macro used in Objective-C/Swift to register a class as a native module.
*   **`@ReactMethod` (Android):** An annotation used in Java/Kotlin to expose a method in a native module to JavaScript.
*   **`ReactPackage` (Android):** An interface that allows you to register one or more native modules and UI view managers with React Native.
*   **`ReactApplicationContext`:** The context object provided to Android native modules, allowing access to application-level resources and services.
*   **`RCTResponseSenderBlock` (iOS) / `Callback` (Android):** Mechanisms for native modules to send results or errors back to JavaScript using a callback pattern.
*   **`RCTPromiseResolveBlock`/`RCTPromiseRejectBlock` (iOS) / `Promise` (Android):** Mechanisms for native modules to send results or errors back to JavaScript using a Promise-based pattern, which is often preferred for better asynchronous flow control.
*   **`constantsToExport` (iOS) / `getConstants()` (Android):** Methods to expose static, immutable values from the native module to JavaScript.

#### Hands-on activity
**Objective:** Create a native module that provides a simple "Toast" message utility on Android and an "Alert" message on iOS.

**Instructions:**
1.  **Create a new React Native project** if you don't have one: `npx react-native init NativeToastApp`
2.  **For Android:**
    *   Navigate to `android/app/src/main/java/com/nativetoastapp`.
    *   Create a new Java class `ToastModule.java`.
    *   Implement the `ToastModule` to extend `ReactContextBaseJavaModule`, override `getName()`, and add a `@ReactMethod` named `show` that takes a `String` message and an `int` duration (e.g., `Toast.LENGTH_SHORT` or `Toast.LENGTH_LONG`). Use `Toast.makeText(getReactApplicationContext(), message, duration).show();`.
    *   Create `ToastPackage.java` to register `ToastModule`.
    *   Register `ToastPackage` in `MainApplication.java`.
3.  **For iOS:**
    *   Open `ios/NativeToastApp.xcworkspace` in Xcode.
    *   Create a new Objective-C file `ToastManager.h` and `ToastManager.m`.
    *   In `ToastManager.h`, import `<React/RCTBridgeModule.h>` and declare `ToastManager` conforming to `RCTBridgeModule`.
    *   In `ToastManager.m`, use `RCT_EXPORT_MODULE()` and `RCT_EXPORT_METHOD(showAlert:(NSString *)message)`. Inside `showAlert`, use `UIAlertController` to display an alert with the given message. Remember to dispatch UI updates to the main thread:
        ```objective-c
        dispatch_async(dispatch_get_main_queue(), ^{
            // UIAlertController code here
        });
        ```
4.  **In your React Native JavaScript code (`App.js`):**
    *   Import `NativeModules` and `Platform`.
    *   Access your `ToastManager` (iOS) or `ToastModule` (Android) from `NativeModules`.
    *   Add buttons to your UI. One button should call `ToastModule.show('Hello from Android!', ToastModule.SHORT)` on Android, and another button should call `ToastManager.showAlert('Hello from iOS!')` on iOS. Use `Platform.OS === 'android'` or `'ios'` to conditionally render/call.

**Starter `App.js`:**
```javascript
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  Platform,
} from 'react-native';

const { ToastModule, ToastManager } = NativeModules; // ToastModule for Android, ToastManager for iOS

const App = () => {
  const showToast = () => {
    if (Platform.OS === 'android') {
      ToastModule.show('Hello from Android Native Module!', ToastModule.SHORT);
    } else {
      ToastManager.showAlert('Hello from iOS Native Module!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Native Module Integration
        </Text>
        <Text style={styles.sectionDescription}>
          Tap the button to invoke platform-specific UI.
        </Text>
        <Button title="Show Native Message" onPress={showToast} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    marginBottom: 20,
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** You've created an Android native module named `MyAwesomeModule` with a method `doSomething(String message)`. In your `MainApplication.java`, you forgot to add `packages.add(new MyAwesomePackage());` to the `getPackages()` list. What will happen when you try to call `NativeModules.MyAwesomeModule.doSomething('test')` from JavaScript?
    *   **Correct Answer:** The application will crash with a `Native module cannot be null` or `undefined` error when `NativeModules.MyAwesomeModule` is accessed. This is because without being registered in `MainApplication.java` via its `ReactPackage`, React Native's bridge has no knowledge of `MyAwesomeModule` and thus cannot find or instantiate it.
2.  **Question:** Explain the primary reason why native module methods should ideally be asynchronous (e.g., using Promises or Callbacks) rather than synchronous, especially for potentially long-running operations.
    *   **Correct Answer:** The primary reason is to prevent blocking the JavaScript thread and, by extension, the native UI thread. React Native applications run their JavaScript code on a separate thread. If a native module method were synchronous and performed a long-running operation (like a network request or heavy computation), it would block the JavaScript thread. Since the JavaScript thread is responsible for sending UI updates to the native UI thread, blocking it would cause the entire application to freeze, making the UI unresponsive and leading to a poor user experience. Asynchronous methods allow the JavaScript thread to continue processing while the native operation runs in the background, resolving or rejecting the Promise/Callback once the operation is complete.

#### AI generation note
Create a 12-minute mixed-format lesson. Begin with an animated diagram explaining the React Native bridge architecture, showing data flow between JavaScript and native threads. Then, transition to a split-screen live coding demonstration. On the left, show an Xcode window creating `CalendarManager.h` and `CalendarManager.m` with `RCT_EXPORT_MODULE()` and `RCT_EXPORT_METHOD()` for `addEvent` and `getBatteryLevel` (using Promises). On the right, show an Android Studio window creating `CalendarModule.java` and `CalendarPackage.java` with `@ReactMethod` for `createCalendarEvent` and `getBatteryLevel` (using Promises), and updating `MainApplication.java`. Conclude with a browser showing the React Native app running on both iOS and Android simulators, demonstrating calls to `CalendarManager.addEvent` (no visual output) and `CalendarManager.getBatteryLevel` (showing battery percentage in a `Text` component) with console logs. Include clear voiceover explaining each step and the rationale behind platform-specific implementations. Highlight common errors like forgetting `RCT_EXPORT_MODULE()` or `getPackages()` registration.

### Chapter 4.2 — Working with Native UI Components

#### Learning objectives
*   Identify scenarios where integrating native UI components is more beneficial than using standard React Native components.
*   Understand the process of wrapping existing native UI views for use within a React Native application.
*   Create a custom native UI component for both iOS (UIView) and Android (View) and expose its properties to JavaScript.
*   Learn how to handle events and communicate user interactions from a native UI component back to JavaScript.
*   Utilize `requireNativeComponent` to integrate custom native UI components into React Native's component tree.

#### Detailed lesson content
While React Native provides a rich set of cross-platform UI components that cover most use cases, there are situations where you might need to leverage platform-specific UI. This could be due to several reasons:
1.  **Performance:** For highly complex or frequently updated UI elements (like advanced maps, video players, or custom drawing surfaces), native components often offer superior performance because they are rendered directly by the platform's UI engine without the overhead of the bridge.
2.  **Platform-specific features:** Some UI elements have unique platform behaviors or visual styles that are difficult or impossible to replicate perfectly with JavaScript. Examples include highly customized `MapView` controls, advanced video players with DRM support, or specific date/time pickers.
3.  **Reusing existing native code:** If you have an existing native application or a third-party native library that provides a custom UI component, wrapping it for React Native can save significant development time compared to rewriting it from scratch in JavaScript.
4.  **Access to underlying native APIs:** Native UI components often have direct access to platform-specific APIs that are tightly coupled with their rendering, such as OpenGL/Metal for graphics, or specific sensor data for interactive UI.

Integrating native UI components involves creating a **View Manager** on the native side. A View Manager is responsible for creating and updating the native view, and for exposing its properties and events to JavaScript. React Native then uses the `requireNativeComponent` function in JavaScript to bridge the gap and allow you to use this native view as if it were a regular React Native component.

Let's consider creating a simple native UI component: a custom `ColorView` that takes a color string from JavaScript and displays a native view with that background color.

**For iOS (Objective-C):**

First, create a `ColorViewManager.h` and `ColorViewManager.m` file.

**`ColorViewManager.h`:**
```objective-c
#import <React/RCTViewManager.h>

@interface ColorViewManager : RCTViewManager
@end
```

**`ColorViewManager.m`:**
```objective-c
#import "ColorViewManager.h"
#import <React/RCTUIManager.h> // For main queue dispatch

// Define a simple UIView subclass for our custom view
@interface CustomColorView : UIView
@property (nonatomic, strong) NSString *hexColor; // Property to receive color from JS
@end

@implementation CustomColorView
// When hexColor is set, update the background color
- (void)setHexColor:(NSString *)hexColor
{
    _hexColor = hexColor;
    // Convert hex string to UIColor (simplified for brevity, real implementation needs error handling)
    unsigned int rgbValue = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexColor];
    [scanner setScanLocation:1]; // bypass '#' character
    [scanner scanHexInt:&rgbValue];
    self.backgroundColor = [UIColor colorWithRed:((rgbValue & 0xFF0000) >> 16)/255.0 green:((rgbValue & 0xFF00) >> 8)/255.0 blue:(rgbValue & 0xFF)/255.0 alpha:1.0];
}
@end

@implementation ColorViewManager

RCT_EXPORT_MODULE(ColorView) // The name 'ColorView' will be used in JavaScript

// This method returns the native view type that this manager manages
- (UIView *)view
{
  return [[CustomColorView alloc] init];
}

// Export properties from JavaScript to native
// RCT_EXPORT_VIEW_PROPERTY(propertyName, type)
RCT_EXPORT_VIEW_PROPERTY(hexColor, NSString)

@end
```
`RCT_EXPORT_MODULE(ColorView)` makes the `ColorViewManager` available in JavaScript under the name `ColorView`. The `view` method is responsible for instantiating the native `UIView` that will be managed. `RCT_EXPORT_VIEW_PROPERTY(hexColor, NSString)` exposes a property named `hexColor` of type `NSString` to JavaScript. When this property is set from JavaScript, the `setHexColor:` method on `CustomColorView` will be called.

**For Android (Java):**

Create `ColorViewManager.java` and `CustomColorView.java` in your `android/app/src/main/java/com/yourprojectname` directory.

**`CustomColorView.java`:**
```java
package com.yourprojectname;

import android.content.Context;
import android.graphics.Color;
import android.view.View;

public class CustomColorView extends View {
    public CustomColorView(Context context) {
        super(context);
        // Default background
        this.setBackgroundColor(Color.BLUE);
    }

    // Method to set background color from hex string
    public void setHexColor(String hexColor) {
        try {
            this.setBackgroundColor(Color.parseColor(hexColor));
        } catch (IllegalArgumentException e) {
            // Handle invalid color string, e.g., log error or set a default
            this.setBackgroundColor(Color.RED); // Fallback to red for invalid colors
        }
    }
}
```

**`ColorViewManager.java`:**
```java
package com.yourprojectname;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import android.graphics.Color;
import android.view.View;

import javax.annotation.Nonnull;

public class ColorViewManager extends SimpleViewManager<CustomColorView> {

    public static final String REACT_CLASS = "ColorView"; // This name is used in JavaScript

    @Override
    @Nonnull
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    @Nonnull
    protected CustomColorView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new CustomColorView(reactContext);
    }

    // Export property 'hexColor' from JavaScript to native
    @ReactProp(name = "hexColor")
    public void setHexColor(CustomColorView view, @Nonnull String hexColor) {
        view.setHexColor(hexColor);
    }
}
```
`SimpleViewManager<CustomColorView>` indicates that this manager handles `CustomColorView` instances. `getName()` returns the name used in JavaScript. `createViewInstance` instantiates the native view. The `@ReactProp(name = "hexColor")` annotation exposes the `hexColor` property to JavaScript, and the `setHexColor` method is called when this property changes.

Just like native modules, native UI components also need to be registered. This is done in the `ReactPackage` you created earlier for native modules, or a separate one. If you have `CalendarPackage.java` from Chapter 4.1, you'd modify it:

**`CalendarPackage.java` (modified for Android):**
```java
package com.yourprojectname;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CalendarPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new ColorViewManager()); // Add your view manager here
        return viewManagers;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        // modules.add(new CalendarModule(reactContext)); // Add your native modules here
        return modules;
    }
}
```
You don't need a separate package for iOS; `RCT_EXPORT_MODULE` handles it.

**Accessing the native UI component from JavaScript:**

```javascript
import React, { useState } from 'react';
import {
  requireNativeComponent,
  View,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';

// Require the native component by the name exported in native code
const NativeColorView = requireNativeComponent('ColorView');

const App = () => {
  const [color, setColor] = useState('#FF0000'); // Initial red color

  const changeColor = () => {
    const newColor = color === '#FF0000' ? '#0000FF' : '#FF0000'; // Toggle between red and blue
    setColor(newColor);
  };

  return (
    <View style={styles.container}>
      <NativeColorView
        style={styles.nativeView}
        hexColor={color} // Pass the color as a prop
      />
      <Button title="Change Color" onPress={changeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nativeView: {
    width: 200,
    height: 200,
    marginVertical: 20,
    // For iOS, you might need to set a default background color in native code
    // For Android, CustomColorView sets a default blue
  },
});

export default App;
```
The `requireNativeComponent('ColorView')` call returns a React component that renders your native `ColorView`. You can then pass props to it just like any other React Native component.

**Handling Events from Native UI to JavaScript:**
Native UI components often need to communicate user interactions (like button presses, scroll events, or changes in selection) back to JavaScript. This is achieved using **event emitters**.

**For iOS:**
You would use `RCTBubblingEventBlock` or `RCTDirectEventBlock` in your `RCT_EXPORT_VIEW_PROPERTY` to expose a callback prop, and then call it from your native view.

**`ColorViewManager.m` (with event):**
```objective-c
// ... (inside @implementation ColorViewManager)
RCT_EXPORT_VIEW_PROPERTY(onColorChanged, RCTDirectEventBlock) // Export an event prop

// ... (inside @implementation CustomColorView)
// Example: if CustomColorView had a button, and you wanted to notify JS when it's tapped
// You'd need to add a tap gesture recognizer or a button target
- (void)handleTap:(UITapGestureRecognizer *)sender {
    if (self.onColorChanged) { // Check if the prop is set
        self.onColorChanged(@{@"newColor": self.hexColor}); // Send data back to JS
    }
}
```

**For Android:**
You use `EventDispatcher` and `RCTEventEmitter` to send events.

**`ColorViewManager.java` (with event):**
```java
// ... (inside ColorViewManager)
@ReactProp(name = "onColorChanged") // This prop will be a function from JS
public void setOnColorChanged(CustomColorView view, @Nullable Callback onColorChanged) {
    // This prop isn't directly set on the view, but used to store the JS callback
    // for later invocation from the view.
    // In a real scenario, you might have a method in CustomColorView like setOnTapListener
    // which then calls back to the manager to dispatch the event.
}

// Example of dispatching an event from the manager (e.g., if CustomColorView had an internal button)
public void sendColorChangedEvent(ThemedReactContext reactContext, CustomColorView view, String newColor) {
    WritableMap event = Arguments.createMap();
    event.putString("newColor", newColor);
    reactContext
        .getJSModule(RCTEventEmitter.class)
        .receiveEvent(view.getId(), "topChange", event); // "topChange" is a generic event name
}
```
Then, in JavaScript, you'd pass a function to the `onColorChanged` prop.

**Common Mistakes and Safety Notes:**
*   **Incorrect `requireNativeComponent` name:** The string passed to `requireNativeComponent` must exactly match the name exported by `RCT_EXPORT_MODULE()` on iOS or `getName()` on Android. Case sensitivity matters.
*   **Missing `ViewManager` registration:** Just like native modules, `ViewManager`s must be registered in a `ReactPackage` on Android. iOS automatically picks up `RCT_EXPORT_MODULE`.
*   **Property type mismatches:** Ensure the type declared in `RCT_EXPORT_VIEW_PROPERTY` (iOS) or `@ReactProp` (Android) matches the type of the property being set on the native side. Incorrect types can lead to runtime errors or unexpected behavior.
*   **UI thread safety:** All UI updates on the native side must happen on the main UI thread. On iOS, use `dispatch_async(dispatch_get_main_queue(), ^{ ... });`. On Android, `ThemedReactContext` usually handles this for `ViewManager` methods, but if you're doing complex operations within your `CustomColorView`, be mindful of thread safety.
*   **Memory leaks:** Be careful with strong references between JavaScript and native objects, especially when dealing with events or callbacks. Ensure that native resources are properly deallocated when the component unmounts.
*   **Performance overhead:** While native UI components can offer performance benefits, the initial setup and communication across the bridge still incur some overhead. Use them judiciously for complex or performance-critical UI, not for every simple element.
*   **Layout issues:** Native components need to be properly sized and positioned by React Native's layout system. Ensure your native view correctly handles layout constraints and dimensions passed from JavaScript.

By integrating native UI components, you gain the flexibility to incorporate highly specialized or performance-intensive UI elements directly into your React Native application, blending the best of both worlds.

#### Key concepts
*   **Native UI Component:** A platform-specific UI element (e.g., `UIView` on iOS, `View` on Android) that is exposed and rendered within a React Native application.
*   **View Manager:** A native class (extending `RCTViewManager` on iOS, `SimpleViewManager` on Android) responsible for creating, managing, and exposing properties/events of a native UI component to JavaScript.
*   **`requireNativeComponent`:** A React Native JavaScript function used to load and integrate a native UI component into the React component tree.
*   **`RCT_EXPORT_MODULE(Name)` (iOS):** Used in `RCTViewManager` subclasses to register the manager and expose the native view under `Name` in JavaScript.
*   **`@ReactProp(name = "propName")` (Android):** An annotation used in `ViewManager` subclasses to expose a property named `propName` from JavaScript to the native view.
*   **`RCT_EXPORT_VIEW_PROPERTY(propName, type)` (iOS):** A macro used in `RCTViewManager` subclasses to expose a property named `propName` of a specific `type` from JavaScript to the native view.
*   **Event Emitters:** Mechanisms (like `RCTDirectEventBlock`/`RCTBubblingEventBlock` on iOS, `RCTEventEmitter` on Android) used to send user interactions or changes from a native UI component back to JavaScript.
*   **`createViewInstance` (Android):** A method in `SimpleViewManager` responsible for instantiating the native `View` object.
*   **`view` (iOS):** A method in `RCTViewManager` responsible for instantiating the native `UIView` object.

#### Hands-on activity
**Objective:** Create a custom native UI component that acts as a simple "Rating Star" view. It should display a number of filled stars based on a `rating` prop (e.g., 1-5) passed from JavaScript.

**Instructions:**
1.  **Continue with your `NativeToastApp` project.**
2.  **For Android:**
    *   Create `RatingView.java` (extends `LinearLayout` or `FrameLayout`) that programmatically adds `ImageView`s (stars) based on a `setRating` method. You'll need star image assets (e.g., `ic_star_filled.png`, `ic_star_empty.png` in `android/app/src/main/res/drawable`).
    *   Create `RatingViewManager.java` (extends `SimpleViewManager<RatingView>`).
    *   Export a `rating` prop using `@ReactProp(name = "rating")` that calls `setRating` on your `RatingView`.
    *   Add `RatingViewManager` to your `CalendarPackage.java` (or a new `RatingPackage.java`).
3.  **For iOS:**
    *   Create `RatingView.h` (extends `UIView`) and `RatingView.m`.
    *   In `RatingView.m`, implement `setRating` that programmatically adds `UIImageView`s (stars) based on the `rating` value. You'll need star image assets (e.g., `star_filled.png`, `star_empty.png` added to your Xcode project).
    *   Create `RatingViewManager.h` and `RatingViewManager.m` (extends `RCTViewManager`).
    *   Use `RCT_EXPORT_MODULE(RatingView)` and `RCT_EXPORT_VIEW_PROPERTY(rating, NSNumber)`.
4.  **In your React Native JavaScript code (`App.js`):**
    *   Import `requireNativeComponent`.
    *   Define `const NativeRatingView = requireNativeComponent('RatingView');`.
    *   Add `NativeRatingView` to your UI, passing a `rating` prop (e.g., `rating={3}`).
    *   Add a button to change the rating dynamically.

**Starter `App.js`:**
```javascript
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  requireNativeComponent,
} from 'react-native';

const NativeRatingView = requireNativeComponent('RatingView');

const App = () => {
  const [currentRating, setCurrentRating] = useState(3); // Initial rating

  const increaseRating = () => {
    setCurrentRating(prev => (prev < 5 ? prev + 1 : 1)); // Cycle 1-5
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Native Rating Component
        </Text>
        <Text style={styles.sectionDescription}>
          Current Rating: {currentRating} stars
        </Text>
        <NativeRatingView
          style={styles.ratingView}
          rating={currentRating} // Pass the rating as a prop
        />
        <Button title="Change Rating" onPress={increaseRating} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    marginBottom: 20,
  },
  ratingView: {
    width: 200, // You might need to adjust this based on your star size and count
    height: 40,
    marginVertical: 20,
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** You are tasked with integrating a highly optimized, custom 3D rendering engine (implemented natively) into a React Native application. Which React Native bridging mechanism would be most appropriate for displaying the 3D output within your app, and why?
    *   **Correct Answer:** The most appropriate mechanism would be to create a **Native UI Component** (using `RCTViewManager` on iOS and `SimpleViewManager` on Android) and integrate it via `requireNativeComponent`. This is because the 3D rendering engine is a visual component that needs to occupy a specific area within the UI. Native UI components are designed precisely for embedding platform-specific views into the React Native component hierarchy, allowing them to participate in layout and receive visual updates directly from the native side, which is crucial for high-performance graphics like 3D rendering. A native module would be less suitable as it's primarily for exposing non-visual native functionalities (like calculating something or accessing device features) rather than rendering UI.
2.  **Question:** When creating an Android `ViewManager` for a custom native UI component, what is the purpose of the `@ReactProp` annotation, and how does it facilitate communication from JavaScript to the native component?
    *   **Correct Answer:** The `@ReactProp` annotation in an Android `ViewManager` is used to expose properties from the JavaScript layer to the native UI component. When a prop with the specified `name` is passed to the `requireNativeComponent` in JavaScript, the React Native bridge automatically calls the corresponding method annotated with `@ReactProp` in the `ViewManager`. This method takes the native view instance and the new prop value as arguments, allowing the `ViewManager` to update the native view's properties (e.g., `setBackgroundColor`, `setText`, `setRating`). This mechanism ensures that changes in JavaScript props are efficiently reflected in the native UI component.

#### AI generation note
Create a 10-minute live coding video. Start with a React Native project with a basic `View`. First, demonstrate creating `CustomColorView.java` and `ColorViewManager.java` in Android Studio, including `@ReactProp` for `hexColor` and registering the `ViewManager` in `MainApplication.java`. Then, switch to Xcode and create `CustomColorView.h/.m` and `ColorViewManager.h/.m` with `RCT_EXPORT_MODULE` and `RCT_EXPORT_VIEW_PROPERTY`. Show how to use `requireNativeComponent('ColorView')` in `App.js` and pass a dynamic `hexColor` prop. The video should feature a split-screen view: code editor on the left, Android emulator and iOS simulator on the right, showing the native colored view changing color dynamically with a button press. Include a brief explanation of when native UI components are necessary, and common issues like incorrect naming or missing registration.

### Chapter 4.3 — Accessing Device Hardware and APIs (Camera, Geolocation, Sensors)

#### Learning objectives
*   Understand how to integrate community-developed React Native libraries for common device hardware access (e.g., camera, geolocation).
*   Correctly configure platform-specific permissions for accessing sensitive device functionalities on both iOS and Android.
*   Implement basic camera functionality, including taking photos and recording videos, using a popular React Native camera library.
*   Retrieve and display current geolocation data, and understand considerations for background location tracking.
*   Explore methods for accessing device sensors (accelerometer, gyroscope) and processing their data.
*   Identify and mitigate privacy and security concerns when accessing device hardware.

#### Detailed lesson content
Modern mobile applications are deeply integrated with device hardware, leveraging features like cameras, GPS, and various sensors to provide rich, interactive experiences. While React Native provides some basic access (e.g., `Geolocation` API), for more advanced or specialized hardware interactions, you'll often rely on well-maintained community packages. These packages typically wrap the native APIs for you, providing a consistent JavaScript interface while handling the complex platform-specific implementations and permission requests.

**1. Accessing the Camera:**
One of the most common hardware features is the camera. Instead of writing a native module from scratch, a popular choice is `react-native-camera` or `react-native-vision-camera`. Let's consider the general steps for integrating such a library.

**Installation:**
```bash
npm install react-native-vision-camera
cd ios && pod install && cd .. # For iOS
```

**Permissions:**
This is critical. Both iOS and Android require explicit permission declarations in their manifest/info files. Without these, your app will crash or fail silently when trying to access the camera.

*   **iOS (`ios/YourProjectName/Info.plist`):**
    ```xml
    <key>NSCameraUsageDescription</key>
    <string>$(PRODUCT_NAME) needs access to your camera for taking photos.</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>$(PRODUCT_NAME) needs access to your microphone for recording videos.</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>$(PRODUCT_NAME) needs access to your photo library to save photos.</string>
    ```
    The strings provide user-facing explanations for *why* your app needs these permissions.

*   **Android (`android/app/src/main/AndroidManifest.xml`):**
    ```xml
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="28" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    ```
    For Android 6.0 (API 23) and above, you also need to request these permissions at runtime using a library like `react-native-permissions` or the built-in `PermissionsAndroid` API.

**Basic Camera Usage (conceptual with `react-native-vision-camera`):**
```javascript
import React, { useRef, useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, PermissionsAndroid, Platform } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

async function requestCameraPermissions() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, // For older Android versions
    ]);
    return granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
           granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED;
  } else { // iOS
    const cameraPermission = await Camera.requestCameraPermission();
    const microphonePermission = await Camera.requestMicrophonePermission();
    return cameraPermission === 'granted' && microphonePermission === 'granted';
  }
}

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const devices = useCameraDevices();
  const [hasPermission, setHasPermission] = useState(false);
  const device = devices.back; // Use the back camera

  useEffect(() => {
    (async () => {
      const permissionGranted = await requestCameraPermissions();
      setHasPermission(permissionGranted);
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
      });
      console.log('Photo taken:', photo.path);
      // You can then upload or display this photo
    }
  };

  if (!hasPermission) {
    return <Text>No camera access</Text>;
  }
  if (device == null) {
    return <Text>No camera device found</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Button title="Take Photo" onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CameraScreen;
```
This example demonstrates permission handling and a basic photo capture. Video recording would involve `cameraRef.current.startRecording` and `stopRecording`.

**Common Camera Mistakes:**
*   **Forgetting `Info.plist`/`AndroidManifest.xml` entries:** The app will crash immediately upon trying to access the camera.
*   **Not requesting runtime permissions:** On Android 6+ and iOS, permissions must be explicitly requested by the user.
*   **Not handling permission denial:** Your UI should gracefully handle cases where the user denies camera access.
*   **Memory management:** Camera frames can be large. Be mindful of memory usage, especially during video recording or continuous photo capture.

**2. Geolocation:**
React Native has a built-in `Geolocation` API, but for more advanced features like background tracking, accuracy control, or faster fixes, community libraries like `react-native-geolocation-service` are often preferred.

**Permissions:**
*   **iOS (`ios/YourProjectName/Info.plist`):**
    ```xml
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>$(PRODUCT_NAME) needs your location to show nearby places.</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>$(PRODUCT_NAME) needs your location to track your route even when in the background.</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>$(PRODUCT_NAME) needs your location to track your route even when in the background.</string>
    ```
    For background location, you also need to enable "Location Updates" in Xcode under `Signing & Capabilities` -> `Background Modes`.

*   **Android (`android/app/src/main/AndroidManifest.xml`):**
    ```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" /> <!-- For Android 10+ background location -->
    ```
    Runtime permissions are also required for Android.

**Basic Geolocation Usage (`react-native-geolocation-service`):**
```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

async function requestLocationPermission() {
  if (Platform.OS === 'ios') {
    const status = await Geolocation.requestAuthorization('whenInUse');
    return status === 'granted';
  } else { // Android
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
}

const LocationTracker = () => {
  const [location, setLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const granted = await requestLocationPermission();
      setPermissionGranted(granted);
      if (granted) {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
          },
          (error) => {
            console.error(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    })();
  }, []);

  if (!permissionGranted) {
    return <Text>Location permission not granted.</Text>;
  }

  return (
    <View>
      <Text>Latitude: {location ? location.coords.latitude : 'N/A'}</Text>
      <Text>Longitude: {location ? location.coords.longitude : 'N/A'}</Text>
      <Text>Accuracy: {location ? location.coords.accuracy : 'N/A'} meters</Text>
    </View>
  );
};

export default LocationTracker;
```
**Background Location Tracking:** This is a complex topic. It consumes significant battery and has strict OS restrictions. On Android 10+, `ACCESS_BACKGROUND_LOCATION` is a separate permission. On iOS, you need `NSLocationAlwaysAndWhenInUseUsageDescription` and `Background Modes` capability. Always inform the user clearly about background tracking and provide an option to disable it.

**3. Device Sensors (Accelerometer, Gyroscope, Magnetometer):**
React Native does not have built-in APIs for these sensors. You'll need a community library like `react-native-sensors`.

**Installation:**
```bash
npm install react-native-sensors
cd ios && pod install && cd ..
```

**Usage (conceptual with `react-native-sensors`):**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 100); // 100ms update interval

const SensorData = () => {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const accelerometerSubscription = accelerometer.subscribe(({ x, y, z }) =>
      setAccelerometerData({ x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) })
    );

    const gyroscopeSubscription = gyroscope.subscribe(({ x, y, z }) =>
      setGyroscopeData({ x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) })
    );

    return () => {
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Accelerometer: X: {accelerometerData.x}, Y: {accelerometerData.y}, Z: {accelerometerData.z}</Text>
      <Text>Gyroscope: X: {gyroscopeData.x}, Y: {gyroscopeData.y}, Z: {gyroscopeData.z}</Text>
    </View>
  );
};

export default SensorData;
```
Sensor data streams continuously, so remember to unsubscribe from them when the component unmounts to prevent memory leaks and unnecessary battery drain.

**Privacy and Security Notes:**
*   **Transparency:** Always be transparent with users about what data you are collecting and why. Provide clear explanations in your app's privacy policy and in the permission request prompts.
*   **Least Privilege:** Request only the permissions your app absolutely needs. Don't ask for camera access if you only need the microphone.
*   **Data Handling:** Securely store and transmit any sensitive data (like location or photos). Comply with relevant data protection regulations (e.g., GDPR, CCPA).
*   **Background Usage:** Be extremely cautious with background hardware access (especially location). It's a major battery drain and often scrutinized by app stores.
*   **Direct Native API Calls:** While community libraries are generally safe, if you decide to implement direct native API calls for hardware, ensure you fully understand the platform's security implications and best practices.

Accessing device hardware is powerful but comes with responsibilities. Always prioritize user privacy, security, and battery efficiency.

#### Key concepts
*   **Community Packages:** Third-party React Native libraries that wrap native APIs to provide JavaScript interfaces for device hardware access (e.g., `react-native-vision-camera`, `react-native-geolocation-service`).
*   **Permissions:** Explicit authorizations required from the user and declared in platform-specific manifest files (`Info.plist` for iOS, `AndroidManifest.xml` for Android) to access sensitive device functionalities.
*   **Runtime Permissions:** Permissions that must be requested from the user at the time of access on Android 6.0+ and iOS, rather than just being declared in the manifest.
*   **`NSCameraUsageDescription` (iOS):** A key in `Info.plist` that provides the user-facing string explaining why camera access is needed.
*   **`android.permission.CAMERA` (Android):** A permission declared in `AndroidManifest.xml` to allow camera access.
*   **Geolocation:** The process of determining the geographical position of a device, often using GPS, Wi-Fi, or cellular networks.
*   **Background Location Tracking:** Continuously monitoring a device's location even when the app is not actively in use, which requires specific permissions and careful handling.
*   **Sensors:** Device components (e.g., accelerometer, gyroscope, magnetometer) that detect and respond to physical input from the environment.
*   **Unsubscribe:** The action of stopping a subscription to a sensor data stream or location updates to prevent resource leaks and battery drain.

#### Hands-on activity
**Objective:** Build a simple "Compass" screen that displays the device's orientation using the Magnetometer and Gyroscope sensors.

**Instructions:**
1.  **Start with a new or existing React Native project.**
2.  **Install `react-native-sensors`:**
    ```bash
    npm install react-native-sensors
    cd ios && pod install && cd ..
    ```
3.  **Implement the Compass component:**
    *   Use `setUpdateIntervalForType` for `SensorTypes.magnetometer` and `SensorTypes.gyroscope`.
    *   Subscribe to both `magnetometer` and `gyroscope` data streams in `useEffect`.
    *   Store the latest `x, y, z` values in state.
    *   Display these values in `Text` components.
    *   **Crucially, unsubscribe from both sensors in the `useEffect` cleanup function.**
4.  **Add permissions (if necessary, though `react-native-sensors` often doesn't require explicit user permissions for these internal sensors):**
    *   For Android, ensure no specific permissions are needed for magnetometer/gyroscope in `AndroidManifest.xml` (usually not required, but good to check documentation).
    *   For iOS, these sensors typically don't require `Info.plist` entries for basic access.

**Starter `App.js` (or a new `CompassScreen.js` component):**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { magnetometer, gyroscope, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

// Set update intervals (e.g., 100ms for 10 updates per second)
setUpdateIntervalForType(SensorTypes.magnetometer, 100);
setUpdateIntervalForType(SensorTypes.gyroscope, 100);

const CompassScreen = () => {
  const [magnetometerData, setMagnetometerData] = useState({ x: 0, y: 0, z: 0 });
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const magnetometerSubscription = magnetometer.subscribe(({ x, y, z }) => {
      setMagnetometerData({ x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) });
    });

    const gyroscopeSubscription = gyroscope.subscribe(({ x, y, z }) => {
      setGyroscopeData({ x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) });
    });

    // Cleanup function to unsubscribe from sensors when component unmounts
    return () => {
      magnetometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Device Orientation Data</Text>

      <View style={styles.sensorCard}>
        <Text style={styles.sensorTitle}>Magnetometer (uT)</Text>
        <Text>X: {magnetometerData.x}</Text>
        <Text>Y: {magnetometerData.y}</Text>
        <Text>Z: {magnetometerData.z}</Text>
      </View>

      <View style={styles.sensorCard}>
        <Text style={styles.sensorTitle}>Gyroscope (rad/s)</Text>
        <Text>X: {gyroscopeData.x}</Text>
        <Text>Y: {gyroscopeData.y}</Text>
        <Text>Z: {gyroscopeData.z}</Text>
      </View>

      <Text style={styles.hint}>
        Rotate your device to see the values change!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  sensorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sensorTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  hint: {
    marginTop: 30,
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default CompassScreen;
```

#### Assessment idea
1.  **Question:** A React Native application needs to capture high-resolution photos and videos. The developer decides to use `react-native-vision-camera`. After installation, they find that the camera preview works, but the app crashes when `takePhoto()` is called. What is the most likely cause of this issue, and what steps should be taken to resolve it?
    *   **Correct Answer:** The most likely cause is missing or incorrectly configured platform-specific permissions. While the camera preview might work with basic camera access, capturing and saving photos/videos often requires additional permissions like `NSPhotoLibraryUsageDescription` (iOS) or `WRITE_EXTERNAL_STORAGE` (Android, for older versions) and, critically, runtime permission requests. To resolve this, the developer should:
        1.  **Verify `Info.plist` (iOS):** Ensure `NSCameraUsageDescription`, `NSMicrophoneUsageDescription` (for video), and `NSPhotoLibraryUsageDescription` are correctly added with descriptive strings.
        2.  **Verify `AndroidManifest.xml` (Android):** Ensure `CAMERA`, `RECORD_AUDIO`, and `WRITE_EXTERNAL_STORAGE` (if targeting older Android versions) permissions are declared.
        3.  **Implement Runtime Permissions:** Use `PermissionsAndroid` (for Android) or the library's specific permission request API (e.g., `Camera.requestCameraPermission()` for `react-native-vision-camera` on iOS) to explicitly ask the user for permission at runtime before attempting to capture media.
        4.  **Handle Permission Denials:** Add logic to gracefully inform the user if permissions are denied and guide them to app settings if necessary.
2.  **Question:** Your React Native app uses `react-native-geolocation-service` to track a user's location. You notice significant battery drain, especially when the app is in the background. What are two common practices or considerations to mitigate excessive battery consumption related to geolocation?
    *   **Correct Answer:**
        1.  **Optimize Location Update Frequency and Accuracy:** Request location updates only as frequently as genuinely needed and at the lowest acceptable accuracy. High accuracy (e.g., `enableHighAccuracy: true`) and very frequent updates consume significantly more power. Adjust parameters like `interval`, `fastestInterval`, and `distanceFilter` to reduce unnecessary updates.
        2.  **Conditional Background Tracking:** Implement logic to stop or drastically reduce location updates when the app moves to the background, unless continuous background tracking is absolutely essential for core app functionality (e.g., a navigation app). If background tracking is necessary, ensure it's enabled only when the user explicitly opts in and is aware of the battery implications. Also, leverage platform-specific background location APIs that are more battery-efficient where possible (though `react-native-geolocation-service` handles some of this). Always remember to unsubscribe from location listeners when they are no longer needed (e.g., when a component unmounts or the app goes to the background).

#### AI generation note
Create a 15-minute interactive lab walkthrough video. The video should start by demonstrating a basic React Native app. Then, guide the learner through installing `react-native-vision-camera` and `react-native-geolocation-service`. Show step-by-step how to add required permissions to `Info.plist` (iOS) and `AndroidManifest.xml` (Android). Implement a `CameraScreen` component that requests runtime permissions and displays a live camera feed. Add a button to `takePhoto` and log the photo path. In a separate section, implement a `LocationTracker` component that requests location permissions and displays the current latitude/longitude. Use a split-screen view for code editor and simulator/device. The interactive element should be a mini-quiz asking about the correct `Info.plist` keys for camera and location.

### Chapter 4.4 — Advanced Native Integration Patterns & Troubleshooting

#### Learning objectives
*   Differentiate between using callbacks and Promises for asynchronous communication between JavaScript and native modules.
*   Implement event emitters to send asynchronous events from native modules back to the JavaScript layer.
*   Utilize native debugging tools (Xcode, Android Studio) to troubleshoot issues within native modules and UI components.
*   Analyze performance considerations related to the React Native bridge and identify strategies for optimization.
*   Apply best practices for managing native dependencies and handling platform-specific code.
*   Implement robust error handling mechanisms for native module interactions.

#### Detailed lesson content
As your React Native applications grow in complexity and integrate more deeply with native capabilities, you'll encounter more advanced patterns and the inevitable need for robust troubleshooting. Understanding how to manage asynchronous operations, handle events, debug effectively, and optimize performance across the bridge becomes paramount.

**1. Callbacks vs. Promises for Asynchronous Operations:**
In Chapter 4.1, we briefly touched upon callbacks (`RCTResponseSenderBlock`/`Callback`) and Promises (`RCTPromiseResolveBlock`/`Promise`). While both facilitate asynchronous communication, Promises generally offer a cleaner, more readable way to handle asynchronous code, especially when dealing with multiple sequential operations (chaining `.then()`) or error handling (`.catch()`).

*   **Callbacks:**
    *   Pros: Simple for single, non-chainable asynchronous operations.
    *   Cons: Can lead to "callback hell" (deeply nested callbacks) for complex sequences. Error handling can be less centralized.
    *   Example: `myNativeModule.doSomething((error, result) => { /* handle */ });`

*   **Promises:**
    *   Pros: Cleaner syntax, especially with `async/await`. Better error propagation and centralized error handling (`.catch()`). Easier to chain multiple asynchronous operations.
    *   Cons: Slightly more setup on the native side.
    *   Example: `try { const result = await myNativeModule.doSomething(); } catch (e) { /* handle */ }`

**Best Practice:** Favor Promises for new native module methods unless there's a specific reason to use callbacks (e.g., an existing native API that strictly uses callbacks and is difficult to convert). Promises align better with modern JavaScript asynchronous patterns.

**2. Event Emitters from Native to JavaScript:**
Sometimes, native code needs to proactively notify JavaScript about changes or events, rather than waiting for JavaScript to call a method. Examples include:
*   Bluetooth device state changes.
*   Background location updates.
*   Sensor data streams.
*   Progress updates for long-running native tasks.

This is achieved using **Event Emitters**.

*   **iOS (`RCTEventEmitter`):**
    Your native module should conform to `RCTEventEmitter`.
    ```objective-c
    // CalendarManager.h
    #import <React/RCTEventEmitter.h>

    @interface CalendarManager : RCTEventEmitter <RCTBridgeModule>
    @end

    // CalendarManager.m
    #implementation CalendarManager
    RCT_EXPORT_MODULE();

    // Required by RCTEventEmitter
    - (NSArray<NSString *> *)supportedEvents
    {
      return @[@"onBatteryStatusChange"]; // Define event names
    }

    // Example method to simulate battery change
    RCT_EXPORT_METHOD(startBatteryMonitoring)
    {
      // Simulate an event after some delay
      dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
          [self sendEventWithName:@"onBatteryStatusChange" body:@{@"level": @(0.75), @"isCharging": @(YES)}];
      });
    }
    @end
    ```
    In JavaScript:
    ```javascript
    import { NativeModules, NativeEventEmitter } from 'react-native';
    const { CalendarManager } = NativeModules;
    const CalendarManagerEmitter = new NativeEventEmitter(CalendarManager);

    const subscription = CalendarManagerEmitter.addListener(
      'onBatteryStatusChange',
      (event) => {
        console.log('Battery status changed:', event.level, event.isCharging);
      }
    );

    // Don't forget to remove the listener when component unmounts
    // subscription.remove();
    ```

*   **Android (`DeviceEventManagerModule.RCTDeviceEventEmitter`):**
    ```java
    // CalendarModule.java
    // ... (inside CalendarModule class)
    private void sendBatteryStatusChangeEvent(double level, boolean isCharging) {
        WritableMap params = Arguments.createMap();
        params.putDouble("level", level);
        params.putBoolean("isCharging", isCharging);
        getReactApplicationContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onBatteryStatusChange", params); // Event name and data
    }

    @ReactMethod
    public void startBatteryMonitoring() {
        // Simulate an event
        new android.os.Handler(Looper.getMainLooper()).postDelayed(
            new Runnable() {
                public void run() {
                    sendBatteryStatusChangeEvent(0.80, false);
                }
            },
            2000
        );
    }
    ```
    JavaScript usage is the same as iOS.

**Common Mistakes with Event Emitters:**
*   **Forgetting `supportedEvents` (iOS):** If you don't list your event names here, they won't be sent.
*   **Not removing listeners:** This can lead to memory leaks and unexpected behavior if components are re-rendered or unmounted but still receive events. Always use the cleanup function in `useEffect`.
*   **Sending events when no listeners are active:** While generally harmless, it's inefficient. On iOS, you can check `[self bridge hasListeners:@"eventName"]`. On Android, there's no direct equivalent, but you can track listener count if needed.

**3. Debugging Native Modules:**
Debugging native code requires using native IDEs.
*   **iOS (Xcode):**
    1.  Open `ios/YourProjectName.xcworkspace` in Xcode.
    2.  Set breakpoints in your Objective-C/Swift code.
    3.  Run the app from Xcode. When your native module method is called, the breakpoint will hit, allowing you to inspect variables and step through code.
    4.  Xcode's console will show `RCTLogInfo` messages.
*   **Android (Android Studio):**
    1.  Open `android` folder in Android Studio.
    2.  Set breakpoints in your Java/Kotlin code.
    3.  Run the app from Android Studio (ensure it's running on the same device/emulator as your React Native packager).
    4.  Android Studio's debugger will attach, and breakpoints will hit.
    5.  Use Logcat (`Log.d`, `Log.e`, etc.) for logging messages.

**Common Debugging Mistakes:**
*   **Not attaching the debugger:** Ensure you run the app from the native IDE to enable debugging.
*   **Breakpoints not hitting:** Check if the native code is actually being executed. Verify module registration and method names.
*   **Ignoring native logs:** Xcode's console and Android Studio's Logcat are invaluable for seeing native errors and messages.

**4. Performance Considerations:**
The React Native bridge, while efficient, is not without overhead. Excessive communication across the bridge can lead to performance bottlenecks.
*   **Batching:** React Native automatically batches calls across the bridge where possible, but frequent, small, synchronous calls can still be problematic.
*   **Serialization/Deserialization:** Data passed across the bridge must be serialized (e.g., to JSON) and then deserialized. Large data payloads or complex object structures can be slow.
*   **Avoid unnecessary calls:** Only call native methods when truly needed. Cache results where appropriate.
*   **Offloading heavy computations:** If a computation is CPU-intensive, it's often better to perform it entirely on the native side (on a background thread) and only send the final result back to JavaScript.
*   **Profiling:** Use React Native's built-in profiler (in Dev Menu) and native profiling tools (Xcode Instruments, Android Studio Profiler) to identify bridge-related bottlenecks. Look for "Bridge" or "Native Module" sections in the profiler.

**5. Best Practices for Native Integration:**
*   **Modularize:** Keep native modules small and focused on a single responsibility.
*   **Clear API Design:** Design a clear, intuitive JavaScript API for your native modules.
*   **Documentation:** Document your native modules thoroughly, including setup steps, permissions, and API usage.
*   **Error Handling:** Implement robust error handling on both native and JavaScript sides. Use Promises for better error propagation.
*   **Platform-specific files:** Use `.ios.js`, `.android.js` suffixes for platform-specific JavaScript code, and conditional logic (`Platform.OS === 'ios'`) to manage differences.
*   **Community Libraries First:** Before writing your own native module, search for existing, well-maintained community libraries. They often handle many edge cases and platform differences.
*   **Version Control:** Ensure your native code is properly version-controlled alongside your JavaScript code.

**6. Handling Native Errors Gracefully:**
When a native module operation fails, it's crucial to communicate this failure back to JavaScript in a structured way.
*   **Promises:** `reject(code, message, errorObject)` is the standard way. `code` is a string identifier for the error type, `message` is a human-readable description, and `errorObject` can be a native `NSError` (iOS) or `Throwable` (Android) for more details.
*   **Callbacks:** Pass an error object as the first argument to the callback (following the Node.js `(err, data)` convention).

**Example of robust error handling (Android Promise):**
```java
// CalendarModule.java
@ReactMethod
public void getBatteryLevel(Promise promise) {
    try {
        // ... (battery level logic)
        if (batteryPct > 0) {
            promise.resolve(batteryPct * 100);
        } else {
            // Specific error for when battery level is unavailable
            WritableMap userInfo = Arguments.createMap();
            userInfo.putString("reason", "Battery manager returned invalid level.");
            promise.reject("BATTERY_UNAVAILABLE", "Could not retrieve battery level.", userInfo);
        }
    } catch (Exception e) {
        // General error for unexpected exceptions
        promise.reject("UNEXPECTED_ERROR", "An unexpected error occurred while getting battery level.", e);
    }
}
```
In JavaScript, you would catch these specific error codes:
```javascript
try {
  const level = await CalendarManager.getBatteryLevel();
  console.log(`Battery: ${level}%`);
} catch (e) {
  if (e.code === 'BATTERY_UNAVAILABLE') {
    console.warn('Battery level not available on this device.');
  } else if (e.code === 'UNEXPECTED_ERROR') {
    console.error('An unexpected error:', e.message);
  } else {
    console.error('Generic error:', e.message);
  }
}
```
This structured approach to error handling makes your application more resilient and easier to debug when native issues arise.

#### Key concepts
*   **Promises:** A JavaScript construct for handling asynchronous operations, providing a cleaner alternative to callbacks for sequential tasks and error handling.
*   **Event Emitters:** A mechanism for native modules to send asynchronous, unsolicited events back to the JavaScript layer.
*   **`RCTEventEmitter` (iOS):** The protocol an iOS native module must conform to to send events to JavaScript.
*   **`DeviceEventManagerModule.RCTDeviceEventEmitter` (Android):** The Android module used by native code to emit events to JavaScript.
*   **`supportedEvents` (iOS):** A method in `RCTEventEmitter` that returns an array of event names the native module can send.
*   **Native Debugging Tools:** IDEs like Xcode (for iOS) and Android Studio (for Android) used to set breakpoints, inspect variables, and view logs within native code.
*   **React Native Bridge Overhead:** The performance cost associated with serializing, transferring, and deserializing data between JavaScript and native threads.
*   **Profiling:** The process of measuring and analyzing the performance of an application to identify bottlenecks, often using specialized tools.
*   **Least Privilege Principle:** A security principle advocating that modules should only be granted the minimum permissions necessary to perform their function.
*   **Error Codes:** Specific string identifiers used in Promise rejections or callback errors to categorize and handle different types of native failures.

#### Hands-on activity
**Objective:** Enhance the `CalendarManager` native module (from Chapter 4.1) to include an event emitter that notifies JavaScript when a "critical event" is about to happen (simulated). Also, practice debugging by intentionally introducing an error and using native IDEs.

**Instructions:**
1.  **Revisit your `NativeToastApp` or `AwesomeProject` from Chapter 4.1.**
2.  **Modify `CalendarManager` (iOS) and `CalendarModule` (Android):**
    *   **Implement Event Emitter:**
        *   **iOS:** Make `CalendarManager` conform to `RCTEventEmitter`. Implement `supportedEvents` to return `@[@"onCriticalEvent"]`. Add a new `RCT_EXPORT_METHOD(scheduleCriticalEventCheck)` that, after a simulated delay (e.g., 3 seconds), calls `sendEventWithName:@"onCriticalEvent" body:@{@"eventName": @"Project Deadline", @"timeRemaining": @(3600)}`.
        *   **Android:** Add a new `@ReactMethod public void scheduleCriticalEventCheck()` that uses `Handler.postDelayed` to simulate a delay and then calls `getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onCriticalEvent", params);` with event data.
3.  **In `App.js`:**
    *   Import `NativeEventEmitter`.
    *   Create a new `NativeEventEmitter(CalendarManager)`.
    *   In a `useEffect` hook, add a listener for `onCriticalEvent` and log the event data. Remember to `unsubscribe` in the cleanup function.
    *   Add a button to call `CalendarManager.scheduleCriticalEventCheck()`.
4.  **Practice Debugging:**
    *   **Introduce an intentional error:** In your native `CalendarManager` (iOS) or `CalendarModule` (Android), within the `scheduleCriticalEventCheck` method, try to access a null object or perform an invalid operation that would cause a native crash (e.g., `NSArray *arr = nil; [arr objectAtIndex:0];`).
    *   **Debug with native IDEs:**
        *   Open the project in Xcode (iOS) or Android Studio (Android).
        *   Set a breakpoint on the line where you introduced the error.
        *   Run the app from the native IDE.
        *   Trigger the `scheduleCriticalEventCheck` from your React Native app.
        *   Observe the debugger hitting the breakpoint and analyze the crash.
        *   Fix the error and verify the event emitter works correctly.

**Starter `App.js` (for event listener):**
```javascript
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  NativeEventEmitter,
  Platform,
} from 'react-native';

const { CalendarManager } = NativeModules;
const CalendarManagerEmitter = new NativeEventEmitter(CalendarManager);

const App = () => {
  const [criticalEvent, setCriticalEvent] = useState(null);

  useEffect(() => {
    const subscription = CalendarManagerEmitter.addListener(
      'onCriticalEvent',
      (event) => {
        console.log('Received critical event:', event);
        setCriticalEvent(event);
      }
    );

    // Cleanup function: remove the listener when the component unmounts
    return () => {
      subscription.remove();
      console.log('Event listener removed.');
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const triggerEvent = () => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') { // Ensure native module exists
      CalendarManager.scheduleCriticalEventCheck();
      console.log('Scheduled critical event check...');
    } else {
      console.log('Native modules not available on web.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Native Event Emitter & Debugging
        </Text>
        <Text style={styles.sectionDescription}>
          Tap to schedule a critical event check.
        </Text>
        <Button title="Schedule Event" onPress={triggerEvent} />

        {criticalEvent && (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Critical Event Alert!</Text>
            <Text>Event Name: {criticalEvent.eventName}</Text>
            <Text>Time Remaining: {criticalEvent.timeRemaining / 60} minutes</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    marginBottom: 20,
  },
  eventCard: {
    marginTop: 30,
    backgroundColor: '#FFEBEE',
    borderRadius: 10,
    padding: 20,
    borderColor: '#EF5350',
    borderWidth: 1,
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 10,
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** You have a React Native application that needs to receive continuous updates from a custom native sensor. You decide to implement this using an event emitter. After setting up the native module and sending events, you notice that your JavaScript component stops receiving updates after navigating away and then back to the sensor screen. What is the most likely reason for this, and how should you fix it?
    *   **Correct Answer:** The most likely reason is that the event listener was not properly removed when the component unmounted, leading to a memory leak, and then a new listener was not re-established when the component remounted. When a component unmounts, its `useEffect` cleanup function should be used to `unsubscribe` from any event listeners to prevent memory leaks. When the component remounts (navigating back), the `useEffect` hook runs again, and a new subscription needs to be established. The fix involves ensuring the `useEffect` hook correctly adds the listener on mount and removes it on unmount using its return cleanup function:
        ```javascript
        useEffect(() => {
          const subscription = NativeSensorEmitter.addListener(
            'onSensorUpdate',
            (data) => { /* handle data */ }
          );
          return () => {
            subscription.remove(); // This is crucial
          };
        }, []);
        ```
2.  **Question:** A React Native app experiences noticeable UI freezes when interacting with a native module that performs complex image processing. The image processing is currently done synchronously on the native side. What is the primary performance bottleneck here, and what is the recommended approach to resolve it?
    *   **Correct Answer:** The primary performance bottleneck is that the synchronous, complex image processing operation on the native side is blocking the native UI thread, which in turn blocks the JavaScript thread (as the bridge waits for the native operation to complete). This causes the entire application to freeze. The recommended approach is to **offload the heavy image processing to a background thread on the native side**. The native module should initiate the image processing on a separate thread (e.g., using `DispatchQueue.global().async` on iOS or an `AsyncTask`/`ExecutorService` on Android) and then, once the processing is complete, use a Promise (`resolve`/`reject`) or a callback to send the result back to JavaScript on the main thread. This allows the UI and JavaScript threads to remain responsive while the heavy work is performed in the background.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with an animated diagram illustrating the difference between callbacks and Promises, emphasizing `async/await` for Promises. Then, transition to a live coding segment. First, show how to modify the `CalendarManager` (iOS) and `CalendarModule` (Android) to implement an event emitter for `onCriticalEvent`, including `supportedEvents` (iOS) and `DeviceEventManagerModule` (Android). Demonstrate subscribing and unsubscribing in `App.js` using `useEffect`. Next, introduce a deliberate crash (e.g., null pointer access) in the native code. Show how to open the project in Xcode and Android Studio, set breakpoints, and step through the code to identify and fix the crash. Conclude with a visual summary of bridge performance considerations and common debugging tips. The interactive element should be a short reflection prompt asking learners to consider when an event emitter is more appropriate than a Promise.

---

## Module 5: Data Persistence & Offline-First Apps

**Goal:** Equip learners with the knowledge and practical skills to implement robust data persistence strategies and design offline-first applications in React Native, ensuring seamless user experiences regardless of network connectivity.

---

### Chapter 5.1 — Introduction to Data Persistence in React Native

#### Learning objectives
*   Understand the fundamental importance of data persistence in modern mobile applications.
*   Identify various data persistence options available within the React Native ecosystem.
*   Evaluate the trade-offs and appropriate use cases for different persistence solutions.
*   Grasp the core concepts of key-value storage as a foundational persistence mechanism.

#### Detailed lesson content
Welcome to Module 5, where we'll explore the critical world of data persistence and how to build robust offline-first applications in React Native. In today's mobile landscape, users expect applications to be fast, responsive, and available even without a constant internet connection. This expectation is precisely why data persistence is not just a nice-to-have feature but a fundamental requirement for almost any serious mobile application. Imagine a to-do list app that forgets all your tasks every time you close it, or a social media feed that disappears when you lose reception. Such an experience would be frustrating and quickly lead to uninstallation. Data persistence allows your application to store information locally on the device, ensuring that user data, settings, and application state are preserved across sessions and available offline.

The need for data persistence extends beyond simply saving user input. It's crucial for managing application state more effectively, caching remote data to improve performance and reduce network requests, and enabling complex features like offline data entry and synchronization. Without a reliable persistence layer, your app would constantly rely on network connectivity, leading to slow loading times, poor user experience in areas with spotty reception, and increased data usage. Furthermore, storing certain data locally can significantly enhance the perceived speed of your application, as fetching data from local storage is orders of magnitude faster than making a network request.

React Native offers a diverse set of tools and libraries for handling data persistence, each with its strengths and ideal use cases. These options range from simple key-value storage for small pieces of data to full-fledged relational and object-oriented databases for complex, structured information. The most common persistence solutions you'll encounter include `AsyncStorage`, which is a simple, unencrypted, asynchronous, persistent key-value storage system built into React Native itself. For more structured data, developers often turn to SQLite, a lightweight relational database, typically accessed via libraries like `react-native-sqlite-storage`. For those who prefer an object-oriented approach and need advanced features like reactive data and synchronization, Realm DB is a powerful alternative. Additionally, for managing global application state with persistence, libraries like Redux Persist can integrate with state management solutions like Redux to automatically save and restore parts of your store.

Choosing the right persistence solution depends heavily on the nature of your data and the requirements of your application. If you only need to store small, unstructured pieces of data like user preferences, authentication tokens, or feature flags, `AsyncStorage` is often the simplest and most efficient choice. It's easy to use and requires minimal setup. However, it's not designed for large datasets, complex queries, or relational data. For applications dealing with lists of items, user profiles, or any data that benefits from structured tables and SQL queries, SQLite becomes a more suitable option. If your data model is heavily object-oriented and you prioritize developer experience, speed, and reactive updates, Realm DB might be the better fit. Each of these solutions has its own learning curve and performance characteristics, and understanding their differences is key to making informed architectural decisions.

A common mistake beginners make is to use `AsyncStorage` for everything, even when a more robust database solution is warranted. While `AsyncStorage` is convenient, trying to store large arrays of complex objects or perform intricate filtering on it can lead to performance bottlenecks and make your code difficult to maintain. Another pitfall is storing sensitive information like unencrypted passwords or API keys directly in local storage. While local storage is generally secure against casual inspection, a rooted or jailbroken device could expose this data. Always consider encryption for sensitive data, even if stored locally. We will delve into the specifics of each solution in subsequent chapters, starting with `AsyncStorage` as our entry point into the world of local data persistence.

#### Key concepts
*   **Data Persistence:** The ability of an application to store data on a device so that it remains available even after the app is closed or the device is restarted.
*   **Offline-First:** An architectural approach where an application prioritizes local data access and functionality, even when network connectivity is unavailable, syncing data with a remote server when online.
*   **AsyncStorage:** A simple, unencrypted, asynchronous, persistent key-value storage system built into React Native for storing small amounts of data.
*   **SQLite:** A lightweight, embedded relational database system commonly used in mobile applications for structured data storage and complex queries.
*   **Realm DB:** An object-oriented mobile database that offers fast performance, reactive data, and an intuitive API for managing complex data models.
*   **Redux Persist:** A library used with Redux to automatically save and rehydrate the Redux store to/from local storage.

#### Hands-on activity
**Activity: Setting Up a Basic User Preferences Store with AsyncStorage**

In this activity, you will initialize a new React Native project and implement a simple user preference storage mechanism using `AsyncStorage`. You'll create a component that allows a user to toggle a dark mode setting and persist this choice.

**Instructions:**
1.  Initialize a new React Native project:
    ```bash
    npx react-native init UserPreferencesApp
    cd UserPreferencesApp
    ```
2.  Open `App.js` and replace its content with the starter code below.
3.  Implement the `loadTheme` and `saveTheme` functions using `AsyncStorage` to retrieve and store the `isDarkMode` boolean value. Remember to handle JSON serialization/deserialization for boolean values if you choose to store them as strings.
4.  Modify the `toggleTheme` function to not only update the component's state but also call `saveTheme` to persist the new preference.
5.  Test your application:
    *   Run the app on an emulator or device (`npx react-native run-android` or `npx react-native run-ios`).
    *   Toggle the theme.
    *   Close and reopen the app. Verify that the theme preference is remembered.

**Starter Code (`App.js`):**

```jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure to install this package

// To install AsyncStorage:
// npm install @react-native-async-storage/async-storage
// cd ios && pod install && cd .. // for iOS

const THEME_KEY = 'userThemePreference';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    // TODO: Implement loading theme from AsyncStorage
    // Hint: Use AsyncStorage.getItem(THEME_KEY)
    // Remember to parse the string value back to a boolean
    // Handle potential errors with a try-catch block
    setIsLoading(false);
  };

  const saveTheme = async (value) => {
    // TODO: Implement saving theme to AsyncStorage
    // Hint: Use AsyncStorage.setItem(THEME_KEY, value)
    // Remember to stringify the boolean value
    // Handle potential errors with a try-catch block
  };

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    await saveTheme(newTheme); // Persist the new theme
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading preferences...</Text>
      </View>
    );
  }

  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <SafeAreaView style={[styles.safeArea, containerStyle]}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, textStyle]}>User Preferences</Text>
        <View style={styles.row}>
          <Text style={textStyle}>Dark Mode:</Text>
          <Switch
            onValueChange={toggleTheme}
            value={isDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <Text style={textStyle}>
          Current Theme: {isDarkMode ? 'Dark' : 'Light'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** Which of the following data persistence solutions is best suited for storing simple, unstructured key-value pairs like user settings or authentication tokens in React Native?
    A) SQLite
    B) Realm DB
    C) AsyncStorage
    D) Redux Persist (without an underlying storage engine)

    **Correct Answer:** C) AsyncStorage
    **Explanation:** AsyncStorage is React Native's built-in, asynchronous key-value storage system, ideal for small, simple, and unstructured data like user preferences or tokens. SQLite and Realm DB are full-fledged databases for structured and complex data, while Redux Persist is a state management utility that *uses* an underlying storage engine like AsyncStorage.

2.  **Question:** A React Native developer is building an application that needs to store a large list of customer records, each with multiple fields (name, address, phone, email) and requires complex queries (e.g., "find all customers in New York"). Which persistence solution would be most appropriate for this scenario, and why?

    **Correct Answer:** SQLite or Realm DB would be most appropriate.
    **Explanation:** For a large list of structured records with multiple fields and the need for complex queries, `AsyncStorage` is unsuitable. `AsyncStorage` is designed for simple key-value pairs and would perform poorly with large, structured datasets and complex filtering. SQLite, as a relational database, excels at managing structured data in tables and executing complex SQL queries efficiently. Realm DB, as an object-oriented database, also handles structured data effectively, often with a more developer-friendly API for object manipulation and reactive updates, making it a strong contender for complex data models. Both provide the necessary features for efficient storage and retrieval of such data.

#### AI generation note
Create a 12-minute video tutorial. Begin with a brief animated introduction explaining the "why" of data persistence in mobile apps. Then, transition to a split-screen live coding demo showing the setup of a new React Native project and the installation of `@react-native-async-storage/async-storage`. Walk through the `App.js` starter code for the hands-on activity, explaining each part. Focus on implementing the `loadTheme` and `saveTheme` functions step-by-step, demonstrating how to use `AsyncStorage.setItem` and `AsyncStorage.getItem` with `JSON.stringify` and `JSON.parse`. Show the app running on an emulator, toggling the theme, closing, and reopening to prove persistence. Highlight common mistakes like forgetting `await` or `JSON.parse` errors with visual cues. Conclude with a 2-question interactive quiz covering the best use cases for `AsyncStorage`. Ensure captions are available and code snippets are clearly visible.

---

### Chapter 5.2 — Implementing Local Key-Value Storage with AsyncStorage

#### Learning objectives
*   Master the fundamental API methods of `AsyncStorage` for storing, retrieving, and removing data.
*   Understand the asynchronous nature of `AsyncStorage` operations and how to handle them using `async/await`.
*   Learn to correctly serialize and deserialize complex JavaScript objects (like arrays and objects) for storage in `AsyncStorage`.
*   Implement robust error handling for `AsyncStorage` operations to build more resilient applications.
*   Identify common pitfalls and best practices when working with `AsyncStorage`, including security considerations for sensitive data.

#### Detailed lesson content
Now that we understand the importance of data persistence and where `AsyncStorage` fits into the React Native ecosystem, let's dive deep into its practical implementation. `AsyncStorage` provides a simple, unencrypted, asynchronous, persistent key-value storage system. It's ideal for storing small amounts of data like user preferences, session tokens, or cached UI states. The "asynchronous" part is crucial: all `AsyncStorage` operations return Promises, meaning they don't block the main JavaScript thread and require `async/await` or `.then().catch()` for proper handling. This non-blocking behavior is essential for maintaining a smooth and responsive user interface.

To use `AsyncStorage`, you first need to install it, as it has been extracted from the React Native core into a community package. You can do this by running `npm install @react-native-async-storage/async-storage` or `yarn add @react-native-async-storage/async-storage`. After installation, if you're targeting iOS, navigate to your `ios` directory and run `pod install` to link the native modules. Once installed, you can import it into any component or utility file: `import AsyncStorage from '@react-native-async-storage/async-storage';`.

The primary methods you'll use are `setItem`, `getItem`, and `removeItem`.
*   `AsyncStorage.setItem(key, value)`: This method stores a `value` associated with a `key`. Both `key` and `value` must be strings. If you need to store numbers, booleans, or complex objects, you must first convert them to strings. The standard way to do this for JavaScript objects and arrays is by using `JSON.stringify()`. For example, to save a user's theme preference:
    ```javascript
    const saveThemePreference = async (theme) => {
      try {
        await AsyncStorage.setItem('userTheme', theme); // 'light' or 'dark'
        console.log('Theme preference saved successfully!');
      } catch (error) {
        console.error('Error saving theme preference:', error);
      }
    };
    ```
*   `AsyncStorage.getItem(key)`: This method retrieves the `value` associated with the given `key`. It returns a Promise that resolves with the stored string value, or `null` if the key does not exist. If you stored a JSON string, you'll need to parse it back into a JavaScript object using `JSON.parse()`.
    ```javascript
    const getThemePreference = async () => {
      try {
        const theme = await AsyncStorage.getItem('userTheme');
        if (theme !== null) {
          console.log('Retrieved theme preference:', theme);
          return theme;
        } else {
          console.log('No theme preference found.');
          return null;
        }
      } catch (error) {
        console.error('Error retrieving theme preference:', error);
        return null;
      }
    };
    ```
*   `AsyncStorage.removeItem(key)`: This method removes the `key-value` pair associated with the given `key`.
    ```javascript
    const clearThemePreference = async () => {
      try {
        await AsyncStorage.removeItem('userTheme');
        console.log('Theme preference removed successfully!');
      } catch (error) {
        console.error('Error removing theme preference:', error);
      }
    };
    ```

A common mistake is forgetting that `AsyncStorage` only stores strings. Attempting to `setItem` a JavaScript object or number directly will result in an error or unexpected behavior. Always remember to `JSON.stringify()` before saving complex data and `JSON.parse()` after retrieving it. For example, storing a user object:
```javascript
// Incorrect:
// await AsyncStorage.setItem('currentUser', { name: 'Alice', id: '123' }); // This will likely fail or store '[object Object]'

// Correct:
const user = { name: 'Alice', id: '123', settings: { notifications: true } };
await AsyncStorage.setItem('currentUser', JSON.stringify(user));

// To retrieve:
const userString = await AsyncStorage.getItem('currentUser');
const retrievedUser = userString ? JSON.parse(userString) : null;
console.log(retrievedUser?.name); // Alice
```
When parsing JSON, it's good practice to wrap `JSON.parse()` in a `try-catch` block, as `getItem` might return `null` or a malformed string, leading to a parsing error.

Beyond these basic operations, `AsyncStorage` also provides methods for more advanced scenarios:
*   `AsyncStorage.clear()`: Deletes all `AsyncStorage` data for your app. Use with caution, typically for logout or resetting app state.
*   `AsyncStorage.getAllKeys()`: Retrieves all keys currently stored. Useful for debugging or listing stored items.
*   `AsyncStorage.multiGet(keys)`: Retrieves multiple items in one go, returning an array of `[key, value]` pairs.
*   `AsyncStorage.multiSet(keyValuePairs)`: Stores multiple key-value pairs simultaneously.
*   `AsyncStorage.multiRemove(keys)`: Removes multiple items.

While `AsyncStorage` is convenient, it's crucial to be aware of its limitations and security implications. It is **not encrypted**, meaning any data stored can be accessed by someone with physical access to the device and the technical know-how to inspect the app's data directory (especially on rooted/jailbroken devices). Therefore, **never store sensitive information like unencrypted passwords, API keys, or personal financial data directly in `AsyncStorage`**. For such data, consider using secure storage solutions like `react-native-keychain` or the device's secure enclave. Also, `AsyncStorage` is not designed for large-scale data storage or complex querying. Storing hundreds or thousands of large objects can lead to performance degradation and slower app startup times. For those scenarios, a database solution like SQLite or Realm DB is far more appropriate. Always remember to handle potential errors gracefully using `try-catch` blocks, as disk I/O operations can sometimes fail.

#### Key concepts
*   **Asynchronous Operations:** Tasks that run in the background without blocking the main thread, typically returning a Promise. `AsyncStorage` operations are asynchronous.
*   **Promise:** An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
*   **`async/await`:** JavaScript syntax used to work with Promises in a more synchronous-looking style, making asynchronous code easier to read and write.
*   **`JSON.stringify()`:** A JavaScript method that converts a JavaScript value (object or array) to a JSON string. Essential for storing complex data in `AsyncStorage`.
*   **`JSON.parse()`:** A JavaScript method that parses a JSON string, constructing the JavaScript value or object described by the string. Essential for retrieving complex data from `AsyncStorage`.
*   **Key-Value Storage:** A simple data storage paradigm where data is stored as a collection of key-value pairs, with each key being unique.

#### Hands-on activity
**Activity: Building a Simple Notes App with AsyncStorage**

In this activity, you'll extend your knowledge of `AsyncStorage` to create a basic notes application. You'll implement functionality to add new notes, display existing notes, and persist them across app sessions using `AsyncStorage`.

**Instructions:**
1.  Continue from your `UserPreferencesApp` or create a new React Native project.
2.  Install `AsyncStorage` if you haven't already:
    ```bash
    npm install @react-native-async-storage/async-storage
    cd ios && pod install && cd .. // for iOS
    ```
3.  Replace the content of `App.js` with the starter code below.
4.  Implement the `loadNotes` function to retrieve all notes from `AsyncStorage`. Notes will be stored as an array of strings, so remember to `JSON.parse` the retrieved string.
5.  Implement the `saveNotes` function to store the current array of notes into `AsyncStorage`. Remember to `JSON.stringify` the array before saving.
6.  Modify the `addNote` function to:
    *   Add the `newNoteText` to the `notes` array.
    *   Call `saveNotes` to persist the updated array.
    *   Clear the `newNoteText` input field.
7.  Test your application:
    *   Add several notes.
    *   Close and reopen the app. Verify that all notes are still present.

**Starter Code (`App.js`):**

```jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = 'myAppNotes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      // TODO: Implement loading notes from AsyncStorage
      // Hint: Get the item, parse it from JSON, and update the 'notes' state.
      // If no notes are found, initialize with an empty array.
    } catch (error) {
      console.error('Failed to load notes:', error);
      Alert.alert('Error', 'Failed to load notes.');
      setNotes([]); // Ensure notes is an array even on error
    } finally {
      setIsLoading(false);
    }
  };

  const saveNotes = async (currentNotes) => {
    try {
      // TODO: Implement saving notes to AsyncStorage
      // Hint: Stringify the 'currentNotes' array and set the item.
    } catch (error) {
      console.error('Failed to save notes:', error);
      Alert.alert('Error', 'Failed to save notes.');
    }
  };

  const addNote = async () => {
    if (newNoteText.trim().length === 0) {
      Alert.alert('Input Error', 'Note cannot be empty.');
      return;
    }
    const updatedNotes = [...notes, newNoteText.trim()];
    setNotes(updatedNotes);
    setNewNoteText('');
    await saveNotes(updatedNotes); // Persist the new list of notes
  };

  const renderNoteItem = ({ item, index }) => (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text>Loading notes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <Text style={styles.title}>My Notes</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Write a new note..."
            value={newNoteText}
            onChangeText={setNewNoteText}
            onSubmitEditing={addNote}
            returnKeyType="done"
          />
          <Button title="Add Note" onPress={addNote} />
        </View>
        <FlatList
          data={notes}
          renderItem={renderNoteItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.notesList}
          contentContainerStyle={styles.notesListContent}
          ListEmptyComponent={<Text style={styles.emptyListText}>No notes yet. Add one!</Text>}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  notesList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  notesListContent: {
    paddingBottom: 20,
  },
  noteItem: {
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
  noteText: {
    fontSize: 16,
    color: '#555',
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** Consider the following code snippet. What will be the value of `retrievedData` after execution, assuming `AsyncStorage` is empty initially and no errors occur?
    ```javascript
    import AsyncStorage from '@react-native-async-storage/async-storage';

    async function processData() {
      const myObject = { id: 1, name: 'Test Item' };
      await AsyncStorage.setItem('itemKey', myObject); // Line A
      const dataString = await AsyncStorage.getItem('itemKey'); // Line B
      const retrievedData = JSON.parse(dataString); // Line C
      return retrievedData;
    }
    ```
    A) `{ id: 1, name: 'Test Item' }`
    B) `"[object Object]"`
    C) `null`
    D) An error will occur at Line C.

    **Correct Answer:** D) An error will occur at Line C.
    **Explanation:** `AsyncStorage.setItem()` expects both the key and value to be strings. In Line A, `myObject` (a JavaScript object) is passed directly as the value without `JSON.stringify()`. `AsyncStorage` will likely attempt to convert it to a string, resulting in `"[object Object]"`. When `getItem` retrieves this string in Line B, `dataString` will be `"[object Object]"`. Attempting to `JSON.parse("[object Object]")` in Line C will throw a `SyntaxError` because `"[object Object]"` is not valid JSON. The correct way would be `await AsyncStorage.setItem('itemKey', JSON.stringify(myObject));`.

2.  **Question:** A React Native developer needs to store a user's JWT (JSON Web Token) for authentication. The token is a string. Which `AsyncStorage` method should be used to save the token, and what is a crucial security consideration for storing such a token?

    **Correct Answer:** The `AsyncStorage.setItem(key, value)` method should be used to save the token.
    **Explanation:** `AsyncStorage.setItem('jwtToken', tokenString)` would be the correct method call. A crucial security consideration is that `AsyncStorage` is **not encrypted**. While it's suitable for storing JWTs for convenience, it means the token could be accessed by a malicious actor if the device is rooted/jailbroken or compromised. For highly sensitive tokens or any critical user data, a more secure, encrypted storage solution like `react-native-keychain` or the device's secure enclave should be considered to prevent unauthorized access.

#### AI generation note
Produce a 15-minute interactive coding lab. Start by reviewing the `AsyncStorage` installation process. Then, guide the learner through the "Simple Notes App" activity. Provide the starter code and have the learner fill in the `loadNotes` and `saveNotes` functions, explaining the use of `JSON.stringify` and `JSON.parse` in detail with visual emphasis on these parts. Show how to handle potential `null` returns from `getItem` and how to use `try-catch` for error handling. Demonstrate adding, viewing, and persisting notes across app restarts on a live emulator. Include a dedicated segment on common mistakes, such as forgetting `await` or `JSON.stringify`, showing the resulting errors in the console. The interactive element will be a code challenge within the lab to implement a "Delete Note" functionality using `removeItem` and updating the `notes` array.

---

### Chapter 5.3 — Relational Data with SQLite and `react-native-sqlite-storage`

#### Learning objectives
*   Determine when a relational database like SQLite is a more suitable choice than key-value storage.
*   Set up and configure SQLite in a React Native project using the `react-native-sqlite-storage` library.
*   Perform fundamental CRUD (Create, Read, Update, Delete) operations using SQL queries within your React Native application.
*   Understand the concept of database transactions and implement them to ensure data integrity.
*   Recognize common security vulnerabilities like SQL injection and learn basic prevention techniques.

#### Detailed lesson content
While `AsyncStorage` is excellent for simple key-value pairs, many applications require more sophisticated data management. When you're dealing with structured data that has relationships between different entities, needs complex querying capabilities, or involves large datasets that would be inefficient to manage with `AsyncStorage`, a relational database like SQLite becomes indispensable. SQLite is a lightweight, serverless, self-contained, transactional SQL database engine that is widely adopted in mobile applications due to its small footprint and robust feature set. It allows you to define tables with columns, specify data types, establish relationships, and perform powerful queries using standard SQL.

To integrate SQLite into your React Native project, the `react-native-sqlite-storage` library is a popular and well-maintained choice. First, you'll need to install it:
```bash
npm install react-native-sqlite-storage
cd ios && pod install && cd .. // for iOS
```
After installation, you can begin by opening a database connection. It's often best to encapsulate your database logic in a separate service or utility file.
```javascript
import { openDatabase } from 'react-native-sqlite-storage';

const getDB = () => {
  return openDatabase(
    {
      name: 'MyDatabase.db',
      location: 'default', // 'default' for Android/iOS documents folder, 'Library' for iOS, 'Shared' for Android external storage
    },
    () => { console.log('Database opened successfully'); },
    error => { console.error('Error opening database:', error); }
  );
};

let db = null; // Global or module-level variable to hold the database instance

export const initDB = async () => {
  if (db) return db; // Return existing instance if already open
  db = await getDB();
  await db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE)',
      [],
      () => console.log('Users table created or already exists'),
      error => console.error('Error creating users table:', error)
    );
  });
  return db;
};
```
In the `initDB` function, we use `db.transaction()` to ensure that our table creation statement is executed atomically. The `executeSql` method takes the SQL query, an array of arguments for placeholders (`?`), a success callback, and an error callback. Using `?` placeholders is crucial for preventing **SQL injection attacks**, a common security vulnerability where malicious SQL code is injected through user input. **Never concatenate user-provided strings directly into your SQL queries.** Always use placeholders.

Once the database and table are set up, you can perform CRUD operations:

**Create (Insert Data):**
```javascript
export const addUser = async (name, email) => {
  if (!db) await initDB(); // Ensure DB is open
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(`User ${name} added successfully!`);
            resolve(true);
          } else {
            console.log('Failed to add user.');
            resolve(false);
          }
        },
        error => {
          console.error('Error adding user:', error);
          reject(error);
        }
      );
    });
  });
};
```

**Read (Query Data):**
```javascript
export const getUsers = async () => {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (tx, results) => {
          const users = [];
          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
          }
          console.log('Retrieved users:', users);
          resolve(users);
        },
        error => {
          console.error('Error getting users:', error);
          reject(error);
        }
      );
    });
  });
};
```
Notice `results.rows.item(i)` to access individual rows. The `results.rows` object is a `SQLResultSetRowList` and not a standard JavaScript array.

**Update Data:**
```javascript
export const updateUserEmail = async (id, newEmail) => {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET email = ? WHERE id = ?',
        [newEmail, id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(`User ${id} email updated to ${newEmail}`);
            resolve(true);
          } else {
            console.log(`No user found with id ${id} or email already ${newEmail}.`);
            resolve(false);
          }
        },
        error => {
          console.error('Error updating user:', error);
          reject(error);
        }
      );
    });
  });
};
```

**Delete Data:**
```javascript
export const deleteUser = async (id) => {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM users WHERE id = ?',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(`User ${id} deleted successfully!`);
            resolve(true);
          } else {
            console.log(`No user found with id ${id}.`);
            resolve(false);
          }
        },
        error => {
          console.error('Error deleting user:', error);
          reject(error);
        }
      );
    });
  });
};
```

**Transactions:** The `db.transaction(callback)` method is fundamental for data integrity. It ensures that a series of SQL statements are executed as a single, atomic unit of work. If any statement within the transaction fails, the entire transaction is rolled back, meaning no changes are committed to the database. This prevents partial updates and keeps your data consistent. For example, if you need to update a user's balance and log the transaction, both operations should happen within a single transaction.

Common mistakes include not handling database connection errors, forgetting to use `db.transaction` for multiple related operations, and most critically, directly embedding user input into SQL queries, which opens the door to SQL injection. Always sanitize inputs and use parameterized queries. Another consideration is database schema migrations. As your app evolves, your database schema might need to change. Managing these changes gracefully (e.g., adding a new column) requires careful planning and often involves versioning your database and executing migration scripts. While `react-native-sqlite-storage` doesn't provide built-in migration tools, you can implement custom logic to check the database version and apply necessary schema updates on app startup.

#### Key concepts
*   **SQLite:** A lightweight, embedded, serverless, transactional SQL database engine popular for mobile applications.
*   **Relational Database:** A database that stores data in tables, where each table has a defined schema (columns and data types), and relationships can be established between tables.
*   **SQL (Structured Query Language):** The standard language for managing and manipulating relational databases.
*   **CRUD Operations:** An acronym for Create, Read, Update, and Delete, representing the four basic functions of persistent storage.
*   **`react-native-sqlite-storage`:** A React Native library that provides an interface to SQLite databases.
*   **Database Transaction:** A sequence of operations performed as a single logical unit of work. Transactions are atomic, consistent, isolated, and durable (ACID properties).
*   **SQL Injection:** A code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.
*   **Placeholder (`?`):** Used in SQL queries to represent values that will be provided separately, preventing SQL injection.

#### Hands-on activity
**Activity: Building a User Management System with SQLite**

In this activity, you will create a simple user management interface that allows you to add, view, and delete users, persisting the data using SQLite and `react-native-sqlite-storage`.

**Instructions:**
1.  Initialize a new React Native project or continue from a previous one.
2.  Install `react-native-sqlite-storage`:
    ```bash
    npm install react-native-sqlite-storage
    cd ios && pod install && cd ..
    ```
3.  Create a new file named `src/services/database.js` and paste the database utility code (initDB, addUser, getUsers, deleteUser) from the detailed lesson content into it. You will need to complete the `initDB` function to create the `users` table.
4.  Replace the content of `App.js` with the starter code below.
5.  Implement the `loadUsers` function in `App.js` to call `getUsers` from your `database.js` service and update the component's state.
6.  Implement the `handleAddUser` function to call `addUser` from your service, then refresh the user list.
7.  Implement the `handleDeleteUser` function to call `deleteUser` from your service, then refresh the user list.
8.  Test your application:
    *   Add new users.
    *   Delete existing users.
    *   Close and reopen the app. Verify that the user list is persisted.

**Starter Code (`App.js`):**

```jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { initDB, addUser, getUsers, deleteUser } from './src/services/database'; // Adjust path if needed

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setupDatabase = async () => {
      try {
        await initDB();
        setDbInitialized(true);
        loadUsers();
      } catch (error) {
        console.error('Database initialization failed:', error);
        Alert.alert('Error', 'Failed to initialize database.');
      }
    };
    setupDatabase();
  }, []);

  const loadUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Failed to load users:', error);
      Alert.alert('Error', 'Failed to load users.');
    }
  };

  const handleAddUser = async () => {
    if (!userName.trim() || !userEmail.trim()) {
      Alert.alert('Input Error', 'Name and Email cannot be empty.');
      return;
    }
    try {
      const success = await addUser(userName.trim(), userEmail.trim());
      if (success) {
        Alert.alert('Success', 'User added!');
        setUserName('');
        setUserEmail('');
        loadUsers(); // Refresh the list
      } else {
        Alert.alert('Error', 'Failed to add user. Email might already exist.');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'An error occurred while adding user.');
    }
  };

  const handleDeleteUser = async (id) => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const success = await deleteUser(id);
              if (success) {
                Alert.alert('Success', 'User deleted!');
                loadUsers(); // Refresh the list
              } else {
                Alert.alert('Error', 'Failed to delete user.');
              }
            } catch (error) {
              console.error('Error deleting user:', error);
              Alert.alert('Error', 'An error occurred while deleting user.');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteUser(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  if (!dbInitialized) {
    return (
      <View style={styles.centered}>
        <Text>Initializing database...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User Manager</Text>

      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="User Email"
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
        />
        <Button title="Add User" onPress={handleAddUser} />
      </View>

      <Text style={styles.subtitle}>Current Users</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.userList}
        contentContainerStyle={styles.userListContent}
        ListEmptyComponent={<Text style={styles.emptyListText}>No users yet. Add one!</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
  },
  inputSection: {
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  userList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  userListContent: {
    paddingBottom: 20,
  },
  userItem: {
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
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** You are building a React Native application that needs to store a complex catalog of products, including categories, subcategories, product details (name, description, price, stock), and customer reviews. Each product can belong to multiple categories, and each review is associated with a specific product and user. Which data persistence solution would be most appropriate for this scenario, and why?
    A) AsyncStorage
    B) Redux Persist
    C) SQLite
    D) FlatList

    **Correct Answer:** C) SQLite
    **Explanation:** This scenario describes a highly structured and relational dataset. Products, categories, reviews, and users are distinct entities with clear relationships (e.g., one-to-many, many-to-many). SQLite, as a relational database, is perfectly suited for defining tables for each entity, establishing foreign key relationships, and performing complex queries (e.g., "find all products in category 'Electronics' with 4+ star reviews"). AsyncStorage is for simple key-value pairs and would be inefficient and difficult to manage for such a complex data model. Redux Persist is a state management enhancer, not a primary data store. FlatList is a UI component, not a persistence solution.

2.  **Question:** A developer is writing an SQL query for a React Native app using `react-native-sqlite-storage`. They have an input field where users can type a `searchName`. The developer constructs the query like this:
    ```javascript
    const searchName = userInput; // Assume userInput comes directly from a TextInput
    const query = `SELECT * FROM products WHERE name = '${searchName}'`;
    tx.executeSql(query, [], successCallback, errorCallback);
    ```
    What is the primary security vulnerability in this approach, and how should it be corrected?

    **Correct Answer:** The primary security vulnerability is **SQL Injection**.
    **Explanation:** By directly concatenating `userInput` (which is `searchName`) into the SQL query string, a malicious user could enter specially crafted input (e.g., `' OR 1=1 --`) that alters the query's intent, potentially exposing or deleting unauthorized data.
    The correct way to prevent this is to use **parameterized queries** with placeholders:
    ```javascript
    const searchName = userInput;
    const query = `SELECT * FROM products WHERE name = ?`; // Use a placeholder
    tx.executeSql(query, [searchName], successCallback, errorCallback); // Pass the value in the arguments array
    ```
    This ensures that the `searchName` is treated as a literal value and not as executable SQL code, effectively neutralizing SQL injection attempts.

#### AI generation note
Design a 15-minute live coding session. Start with a quick overview of SQLite's role in mobile apps. Guide the learner through installing `react-native-sqlite-storage` and linking it. Then, demonstrate creating `src/services/database.js` and implementing `initDB` with a `CREATE TABLE` statement, emphasizing `tx.executeSql` and the `?` placeholder for security. Proceed to implement `addUser`, `getUsers`, and `deleteUser` functions, showing how to handle promises and `results.rows.item(i)`. Integrate these functions into the `App.js` starter code, demonstrating the full CRUD cycle on a live emulator. Highlight the use of `db.transaction` for data integrity. The interactive element will be a challenge to add an `updateUserEmail` function to the `database.js` service and integrate it into the UI. Provide clear console logs for success/failure.

---

### Chapter 5.4 — Object-Oriented Data with Realm DB

#### Learning objectives
*   Understand the advantages of using an object-oriented database like Realm DB over traditional relational databases for certain application types.
*   Define data models (schemas) in Realm DB using JavaScript objects.
*   Perform CRUD operations on Realm objects efficiently.
*   Manage relationships between different Realm objects (one-to-one, one-to-many).
*   Grasp the concept of Realm's live objects and reactive updates.

#### Detailed lesson content
While SQLite provides robust relational data management, some developers find working with SQL queries cumbersome, especially when dealing with complex object graphs in JavaScript. This is where object-oriented databases like Realm DB shine. Realm is a mobile-first, embedded database that allows you to work directly with JavaScript objects, eliminating the need for ORMs (Object-Relational Mappers) and SQL queries for most operations. It's designed for speed, ease of use, and reactive data updates, making it a compelling alternative for many React Native applications. Realm's core strength lies in its ability to map JavaScript objects directly to database records, providing a natural and intuitive development experience.

To get started with Realm DB, you first need to install the `realm` package:
```bash
npm install realm
cd ios && pod install && cd .. // for iOS
```
After installation, the first step is to define your data models, known as schemas in Realm. A schema describes the structure of your objects, including their properties and relationships.
```javascript
// src/models/Task.js
export const TaskSchema = {
  name: 'Task', // Name of the object type
  properties: {
    _id: 'objectId', // Primary key
    name: 'string',
    status: 'string', // e.g., 'Open', 'In Progress', 'Completed'
    priority: 'int', // e.g., 1, 2, 3
    createdAt: 'date',
    user: 'User?', // Optional link to a User object, '?' denotes optional
  },
  primaryKey: '_id',
};

// src/models/User.js
export const UserSchema = {
  name: 'User',
  properties: {
    _id: 'objectId',
    name: 'string',
    email: 'string',
    tasks: 'Task[]', // One-to-many relationship: a User can have many Tasks
  },
  primaryKey: '_id',
};
```
Notice the `_id: 'objectId'` and `primaryKey: '_id'`. Realm often uses `objectId` as a unique identifier, similar to MongoDB's `_id`. Relationships are defined by linking objects: `user: 'User?'` means a Task can optionally be linked to a User, and `tasks: 'Task[]'` means a User can have an array of Task objects.

Once schemas are defined, you open a Realm instance, providing your schemas:
```javascript
import Realm from 'realm';
import { TaskSchema, UserSchema } from '../models'; // Assuming models are in '../models'

let realmInstance = null;

export const getRealm = async () => {
  if (realmInstance) {
    return realmInstance;
  }
  try {
    realmInstance = await Realm.open({
      path: 'myRealmApp', // Name of the Realm file
      schema: [TaskSchema, UserSchema], // All schemas for your app
      schemaVersion: 1, // Increment this when your schema changes
    });
    console.log('Realm opened successfully!');
    return realmInstance;
  } catch (error) {
    console.error('Error opening Realm:', error);
    throw error;
  }
};
```
**CRUD Operations with Realm:**

**Create (Add Data):**
Realm operations are typically performed within a `realm.write()` transaction.
```javascript
export const addTask = async (name, priority, userId) => {
  const realm = await getRealm();
  let newTask;
  realm.write(() => {
    const user = realm.objectForPrimaryKey('User', userId); // Find user by ID
    newTask = realm.create('Task', {
      _id: new Realm.BSON.ObjectId(),
      name,
      status: 'Open',
      priority,
      createdAt: new Date(),
      user: user, // Link to the user object
    });
    user?.tasks.push(newTask); // Add task to user's tasks array if user exists
  });
  console.log('Task added:', newTask);
  return newTask;
};
```
**Read (Query Data):**
Realm queries are highly intuitive and return "live" collections, meaning they automatically update when the underlying data changes.
```javascript
export const getTasks = async () => {
  const realm = await getRealm();
  const tasks = realm.objects('Task').sorted('createdAt', true); // Get all tasks, sorted by creation date
  // You can filter: realm.objects('Task').filtered('status == "Open" AND priority > 1');
  // Or link queries: realm.objects('Task').filtered('user.name == "Alice"');
  console.log('Retrieved tasks:', tasks.map(task => task.toJSON())); // Convert to JSON for logging
  return tasks; // This is a live Realm collection
};
```
**Update Data:**
```javascript
export const updateTaskStatus = async (taskId, newStatus) => {
  const realm = await getRealm();
  realm.write(() => {
    const task = realm.objectForPrimaryKey('Task', taskId);
    if (task) {
      task.status = newStatus;
      console.log(`Task ${taskId} status updated to ${newStatus}`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  });
};
```
**Delete Data:**
```javascript
export const deleteTask = async (taskId) => {
  const realm = await getRealm();
  realm.write(() => {
    const task = realm.objectForPrimaryKey('Task', taskId);
    if (task) {
      realm.delete(task);
      console.log(`Task ${taskId} deleted.`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  });
};
```
**Live Objects and Reactive Updates:** One of Realm's most powerful features is its "live objects" and "live collections." When you retrieve an object or a collection from Realm, you get a reference to the actual data in the database. If that data changes anywhere else in your application (or even from a background sync), your live object/collection will automatically reflect those changes without you needing to re-query. This makes building reactive UIs incredibly straightforward, as your React components can simply re-render when the data they observe changes. You can also attach listeners to collections for more granular control over updates.

**Schema Migrations:** When your data model changes (e.g., adding a new property to `TaskSchema`), you must increment the `schemaVersion` in `Realm.open()` and provide a migration function. This function defines how Realm should transform old data to fit the new schema. Forgetting to manage schema versions or providing incorrect migration logic is a common mistake that can lead to data loss or app crashes. Realm provides detailed documentation on how to handle migrations safely.

Realm also offers Realm Sync, a powerful feature for seamlessly synchronizing data between local devices and the Realm Platform (MongoDB Atlas App Services). While this chapter focuses on local persistence, understanding that Realm has a built-in cloud sync solution is important for scaling your application's data needs. Realm is generally faster than SQLite for many operations, especially for complex object graphs, and its API is often considered more developer-friendly for JavaScript developers. However, it does have a larger binary size compared to SQLite, which might be a consideration for extremely small app bundles.

#### Key concepts
*   **Object-Oriented Database (OODB):** A database management system that stores data as objects, allowing developers to work with data directly as programming language objects without impedance mismatch.
*   **Realm DB:** A mobile-first, embedded object-oriented database that provides fast, reactive data persistence for mobile applications.
*   **Schema:** The definition of the structure of data objects in Realm, including properties, data types, and relationships.
*   **Live Objects/Collections:** Data retrieved from Realm that automatically reflects changes in the underlying database without requiring explicit re-queries.
*   **`realm.write()`:** A method used to perform write operations (create, update, delete) on Realm objects within a transaction.
*   **`realm.objects(schemaName)`:** A method to retrieve a live collection of all objects of a given schema type.
*   **`realm.objectForPrimaryKey(schemaName, primaryKey)`:** A method to retrieve a single object by its primary key.
*   **Relationships:** Connections between different object types (e.g., one-to-one, one-to-many) defined within the schema.
*   **Schema Migration:** The process of updating a database's schema to a new version, often involving transforming existing data.

#### Hands-on activity
**Activity: Building a Task Manager with Realm DB**

In this activity, you will implement a simple task manager application using Realm DB to store and manage tasks. You'll define a `Task` schema, add new tasks, display them, and mark them as complete.

**Instructions:**
1.  Initialize a new React Native project or continue from a previous one.
2.  Install Realm DB:
    ```bash
    npm install realm
    cd ios && pod install && cd ..
    ```
3.  Create a new directory `src/models` and inside it, create `Task.js` with the `TaskSchema` defined in the detailed lesson content (you can simplify by removing the `user` property for this activity).
    ```javascript
    // src/models/Task.js
    import Realm from 'realm';

    export const TaskSchema = {
      name: 'Task',
      properties: {
        _id: 'objectId',
        name: 'string',
        status: 'string', // 'Open', 'Completed'
        priority: 'int', // 1 (high), 2 (medium), 3 (low)
        createdAt: 'date',
      },
      primaryKey: '_id',
    };
    ```
4.  Create `src/services/realmService.js` and paste the `getRealm`, `addTask`, `getTasks`, and `updateTaskStatus` (or `deleteTask`) functions from the detailed lesson content into it. Ensure `getRealm` is properly configured with `TaskSchema`.
5.  Replace the content of `App.js` with the starter code below.
6.  Implement the `loadTasks` function in `App.js` to call `getTasks` from your `realmService.js` and update the component's state. Remember that `getTasks` returns a live collection, so you might need to convert it to a plain array for `FlatList` if you don't want to use Realm's `useQuery` hook (which is more advanced).
7.  Implement the `handleAddTask` function to call `addTask` from your service, then refresh the task list.
8.  Implement the `handleToggleTaskStatus` function to call `updateTaskStatus` from your service. Since Realm collections are live, the UI should automatically update.
9.  Test your application:
    *   Add new tasks.
    *   Mark tasks as complete.
    *   Close and reopen the app. Verify that tasks and their statuses are persisted.

**Starter Code (`App.js`):**

```jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { getRealm, addTask, getTasks, updateTaskStatus } from './src/services/realmService'; // Adjust path
import Realm from 'realm'; // Import Realm for ObjectId

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [realmInitialized, setRealmInitialized] = useState(false);

  useEffect(() => {
    const setupRealm = async () => {
      try {
        const realm = await getRealm();
        setRealmInitialized(true);
        // Listen for changes to the tasks collection
        const liveTasks = realm.objects('Task').sorted('createdAt', true);
        liveTasks.addListener((tasksCollection) => {
          // Convert Realm collection to a plain array for state management
          setTasks(Array.from(tasksCollection));
        });
        // Initial load
        setTasks(Array.from(liveTasks));

        // Clean up listener on unmount
        return () => {
          liveTasks.removeAllListeners();
          if (!realm.isClosed) {
            realm.close(); // Close realm instance when component unmounts
          }
        };
      } catch (error) {
        console.error('Realm initialization failed:', error);
        Alert.alert('Error', 'Failed to initialize Realm database.');
      }
    };
    setupRealm();
  }, []);

  const handleAddTask = async () => {
    if (newTaskName.trim().length === 0) {
      Alert.alert('Input Error', 'Task name cannot be empty.');
      return;
    }
    try {
      await addTask(newTaskName.trim(), 2); // Default priority to medium
      setNewTaskName('');
    } catch (error) {
      console.error('Error adding task:', error);
      Alert.alert('Error', 'An error occurred while adding task.');
    }
  };

  const handleToggleTaskStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === 'Open' ? 'Completed' : 'Open';
    try {
      await updateTaskStatus(taskId, newStatus);
    } catch (error) {
      console.error('Error updating task status:', error);
      Alert.alert('Error', 'An error occurred while updating task status.');
    }
  };

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.taskItem, item.status === 'Completed' && styles.completedTask]}
      onPress={() => handleToggleTaskStatus(item._id, item.status)}
    >
      <Text style={[styles.taskName, item.status === 'Completed' && styles.completedText]}>
        {item.name}
      </Text>
      <Text style={styles.taskStatus}>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  if (!realmInitialized) {
    return (
      <View style={styles.centered}>
        <Text>Initializing Realm database...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <Text style={styles.title}>Realm Task Manager</Text>

        <View style={styles.inputSection}>
          <TextInput
            style={styles.textInput}
            placeholder="New task name"
            value={newTaskName}
            onChangeText={setNewTaskName}
            onSubmitEditing={handleAddTask}
            returnKeyType="done"
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>

        <Text style={styles.subtitle}>My Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item._id.toHexString()} // Realm.BSON.ObjectId needs toHexString
          style={styles.taskList}
          contentContainerStyle={styles.taskListContent}
          ListEmptyComponent={<Text style={styles.emptyListText}>No tasks yet. Add one!</Text>}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f6',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    color: '#34495e',
  },
  inputSection: {
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  taskListContent: {
    paddingBottom: 20,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  completedTask: {
    backgroundColor: '#e0ffe0',
  },
  taskName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskStatus: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** A React Native developer is building an app where users manage a complex hierarchy of projects, tasks, and subtasks. They want to work with data directly as JavaScript objects, benefit from reactive updates to the UI when data changes, and avoid writing SQL queries. Which database solution is best suited for these requirements?
    A) AsyncStorage
    B) SQLite with `react-native-sqlite-storage`
    C) Realm DB
    D) Firebase Realtime Database

    **Correct Answer:** C) Realm DB
    **Explanation:** Realm DB is an object-oriented database that allows developers to work directly with JavaScript objects, eliminating the need for SQL. Its "live objects" and "live collections" provide reactive updates, making it ideal for automatically updating the UI when data changes. AsyncStorage is for simple key-value pairs. SQLite is relational and requires SQL. Firebase Realtime Database is a cloud database, not primarily an embedded local persistence solution.

2.  **Question:** You have defined a Realm schema for a `Product` object. Later, you decide to add a new `description` property (string, optional) to the `Product` schema. What steps must you take to safely introduce this change to your existing Realm database without losing data?

    **Correct Answer:** To safely introduce a schema change in Realm, you must perform a **schema migration**.
    **Explanation:**
    1.  **Update the Schema Definition:** Modify your `ProductSchema` to include the new `description` property:
        ```javascript
        export const ProductSchema = {
          name: 'Product',
          properties: {
            // ... existing properties
            description: 'string?', // New optional property
          },
          primaryKey: '_id',
        };
        ```
    2.  **Increment `schemaVersion`:** In your `Realm.open()` configuration, increment the `schemaVersion` number (e.g., from `1` to `2`).
    3.  **Provide a Migration Function:** Add a `migration` function to your `Realm.open()` configuration. This function will be called by Realm when it detects that the `schemaVersion` in the database is older than the one provided in your configuration. Inside the migration function, you define how to handle the schema change for existing objects. For adding a new optional property, Realm often handles it automatically by assigning `null` to existing objects, but it's good practice to explicitly define it or add default values if needed.
        ```javascript
        realmInstance = await Realm.open({
          path: 'myRealmApp',
          schema: [ProductSchema],
          schemaVersion: 2, // Incremented version
          migration: (oldRealm, newRealm) => {
            if (oldRealm.schemaVersion < 2) {
              // No explicit action needed for adding an optional property,
              // Realm will automatically add 'description' as null to existing objects.
              // If you wanted a default value:
              // const oldObjects = oldRealm.objects('Product');
              // const newObjects = newRealm.objects('Product');
              // for (let i = 0; i < oldObjects.length; i++) {
              //   newObjects[i].description = oldObjects[i].description || 'No description available';
              // }
            }
          },
        });
        ```
    Failing to increment the `schemaVersion` or provide a migration function (when required) will lead to an error and prevent Realm from opening the database.

#### AI generation note
Create a 15-minute live coding video. Begin by explaining the concept of object-oriented databases and Realm's advantages over SQLite for certain use cases. Guide the learner through installing Realm. Then, demonstrate defining the `TaskSchema` and `realmService.js` with `getRealm`, `addTask`, `getTasks`, and `updateTaskStatus`. Emphasize `realm.write()` for all modifications and explain `_id: 'objectId'` and `primaryKey`. Show how to integrate Realm into `App.js`, particularly how to set up the `useEffect` hook to listen to live Realm collections and update React state. Demonstrate adding tasks, marking them complete, and observing the UI update reactively without manual re-fetching. Include a visual explanation of Realm's live objects. The interactive element will be a mini-quiz asking about the correct way to define a one-to-many relationship in a Realm schema.

---

### Chapter 5.5 — Designing Offline-First Architectures

#### Learning objectives
*   Understand the core principles and benefits of designing offline-first applications.
*   Implement strategies for optimistic UI updates to provide immediate user feedback.
*   Explore techniques for background data synchronization with a remote API.
*   Learn how to handle network status changes gracefully and manage data conflicts.
*   Integrate local persistence solutions (like Realm or SQLite) with remote data sources to build a robust offline-first experience.

#### Detailed lesson content
In the realm of mobile app development, user expectations have evolved significantly. Users now demand applications that are not only fast and responsive but also functional regardless of their network connectivity. This is the driving force behind **offline-first architectures**. An offline-first approach prioritizes local data access and functionality, ensuring that the application remains usable and provides a smooth experience even when the device is completely offline or has a spotty connection. Data is primarily stored and managed locally, and synchronization with a remote server happens opportunistically in the background when a network connection is available. This contrasts with "online-first" apps that break or become unresponsive without network access.

The core principles of offline-first design revolve around:
1.  **Local Data Caching:** All critical data that the user interacts with is stored locally on the device using persistence solutions like `AsyncStorage`, SQLite, or Realm DB. This ensures immediate access and eliminates reliance on network latency.
2.  **Optimistic UI Updates:** When a user performs an action (e.g., adding an item, liking a post), the UI is updated immediately as if the action succeeded, even before the data is synchronized with the remote server. This provides instant feedback and a perception of speed.
3.  **Background Synchronization:** Changes made locally are queued and then synchronized with the remote server in the background when connectivity is restored. This process should be robust, handling network fluctuations and retries.
4.  **Conflict Resolution:** When the same data is modified both locally and remotely before synchronization, conflicts can arise. An offline-first architecture needs a strategy to detect and resolve these conflicts (e.g., last-write wins, user intervention, merging).
5.  **Graceful Degradation:** The app should clearly communicate its network status and any limitations when offline, while still providing as much functionality as possible.

Let's consider an example of implementing optimistic UI updates and background synchronization for a simple "like" button. When a user taps "like," instead of waiting for a network request to complete, we immediately update the UI to show the item as liked and increment the like count. Simultaneously, we add this "like" action to a local queue of pending operations.
```javascript
// Example using a simple in-memory queue for pending actions
const pendingActions = [];

const handleLikePost = async (postId) => {
  // 1. Optimistic UI Update
  updateLocalPostState(postId, { liked: true, likesCount: currentLikes + 1 }); // Update Redux/Context state
  
  // 2. Add to local queue for background sync
  pendingActions.push({ type: 'LIKE_POST', postId });
  await AsyncStorage.setItem('pendingActions', JSON.stringify(pendingActions)); // Persist the queue

  // 3. Trigger background sync (e.g., debounce or immediate attempt)
  triggerSync();
};

const triggerSync = async () => {
  if (!isOnline) return; // Check network status
  if (pendingActions.length === 0) return;

  const action = pendingActions[0]; // Take the first action

  try {
    let success = false;
    if (action.type === 'LIKE_POST') {
      await api.likePost(action.postId); // Send to remote API
      success = true;
    }
    // ... handle other action types

    if (success) {
      pendingActions.shift(); // Remove from queue on success
      await AsyncStorage.setItem('pendingActions', JSON.stringify(pendingActions));
      triggerSync(); // Process next action
    }
  } catch (error) {
    console.error('Sync failed for action:', action, error);
    // Implement retry logic, exponential backoff, etc.
    // For now, we'll leave it in the queue to retry later
  }
};
```
This example illustrates a basic queue. In a real application, this queue would be more sophisticated, potentially using a dedicated local database table for pending operations, handling retries with exponential backoff, and ensuring idempotency of API calls. Libraries like `react-native-background-fetch` or `react-native-worklets-core` (for more complex background tasks) can help with scheduling these sync operations even when the app is in the background.

**Network Status Detection:** To effectively implement offline-first, your app needs to know its current network status. The `@react-native-community/netinfo` library is the standard solution for this.
```bash
npm install @react-native-community/netinfo
cd ios && pod install && cd ..
```
```javascript
import NetInfo from '@react-native-community/netinfo';

useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    // Update global state or trigger sync based on state.isConnected
    setIsOnline(state.isConnected);
    if (state.isConnected) {
      triggerSync(); // Attempt to sync when online
    }
  });
  return () => unsubscribe(); // Unsubscribe when component unmounts
}, []);
```
**Conflict Resolution:** This is one of the trickiest aspects. Simple strategies include "last write wins" (the most recent change, local or remote, takes precedence) or "client wins" (local changes always override remote). More complex scenarios might involve merging changes (e.g., for collaborative documents) or prompting the user to resolve conflicts. The choice depends heavily on your application's data model and user experience goals. For instance, if two users modify the same task name offline, you might keep the latest one or show both versions to the user.

**Safety Notes:** When designing offline-first, be mindful of data volume. Storing too much data locally can consume significant device storage and impact performance. Implement data pruning strategies to remove old or irrelevant cached data. Also, ensure sensitive data is encrypted even in local storage, especially if it's part of a sync mechanism that might temporarily expose it. Finally, thoroughly test your sync logic under various network conditions (offline, slow network, intermittent connection) to ensure robustness and prevent data loss. The goal is to provide a seamless experience, not to introduce new points of failure.

#### Key concepts
*   **Offline-First:** An architectural paradigm where an application is designed to function primarily using local data, syncing with a remote server when connectivity is available.
*   **Optimistic UI:** Updating the user interface immediately after a user action, assuming the action will succeed on the server, to provide instant feedback.
*   **Background Synchronization:** The process of sending local changes to a remote server and fetching remote updates in the background, without requiring active user interaction.
*   **Conflict Resolution:** Strategies and mechanisms for handling situations where the same data is modified independently both locally and remotely before synchronization.
*   **`@react-native-community/netinfo`:** A React Native library for detecting and monitoring network connectivity status.
*   **Data Queue:** A temporary storage mechanism (often a local database table or `AsyncStorage`) used to hold pending local operations that need to be synchronized with a remote server.
*   **Idempotency:** The property of an operation that can be applied multiple times without changing the result beyond the initial application. Crucial for robust sync logic.

#### Hands-on activity
**Activity: Implementing Optimistic UI and Basic Offline Sync for a To-Do Item**

In this activity, you'll enhance a simple to-do app to demonstrate optimistic UI updates and a basic offline synchronization queue using `AsyncStorage` and `@react-native-community/netinfo`. When a user toggles a to-do item's completion status, the UI will update instantly, and the change will be queued for "sync" with a simulated API.

**Instructions:**
1.  Initialize a new React Native project.
2.  Install necessary packages:
    ```bash
    npm install @react-native-async-storage/async-storage @react-native-community/netinfo
    cd ios && pod install && cd ..
    ```
3.  Create a `src/services/api.js` file for a simulated API:
    ```javascript
    // src/services/api.js
    const simulateNetworkDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    export const api = {
      updateTodoStatus: async (id, status) => {
        console.log(`[API] Attempting to update todo ${id} to ${status}`);
        await simulateNetworkDelay(1500); // Simulate network latency
        const shouldFail = Math.random() < 0.2; // 20% chance of failure
        if (shouldFail) {
          throw new Error(`[API] Failed to update todo ${id}. Network error.`);
        }
        console.log(`[API] Successfully updated todo ${id} to ${status}`);
        return { id, status, success: true };
      },
      // In a real app, you'd have more API methods (fetch, create, delete)
    };
    ```
4.  Replace the content of `App.js` with the starter code below.
5.  Implement the `loadPendingActions` function to retrieve the `pendingActions` queue from `AsyncStorage`.
6.  Implement the `savePendingActions` function to persist the `pendingActions` queue to `AsyncStorage`.
7.  Implement the `syncPendingActions` function:
    *   Check `isOnline`. If offline, return.
    *   If `pendingActions` is empty, return.
    *   Take the first action from `pendingActions`.
    *   Call the simulated `api.updateTodoStatus`.
    *   If successful, remove the action from the queue and call `syncPendingActions` again recursively to process the next action.
    *   If it fails, log the error and leave the action in the queue for the next sync attempt.
8.  Modify `toggleTodoStatus` to:
    *   Perform the optimistic UI update immediately (`setTodos`).
    *   Add the action to `pendingActions` and save it.
    *   Call `syncPendingActions` to attempt an immediate sync.
9.  Test your application:
    *   Toggle a to-do item's status while online. Observe the immediate UI update and then the console log from the simulated API.
    *   Turn off Wi-Fi/data on your device/emulator. Toggle a to-do item. Observe the UI update and that the API call fails (simulated), but the action is queued.
    *   Turn Wi-Fi/data back on. Observe that the queued actions are processed.

**Starter Code (`App.js`):**

```jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { api } from './src/services/api'; // Adjust path

const TODOS_STORAGE_KEY = 'offlineTodos';
const PENDING_ACTIONS_KEY = 'pendingOfflineActions';

const initialTodos = [
  { id: '1', text: 'Learn React Native Advanced Concepts', completed: false },
  { id: '2', text: 'Build an offline-first app', completed: false },
  { id: '3', text: 'Master data persistence', completed: true },
];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [pendingActions, setPendingActions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isSyncingRef = useRef(false); // To prevent multiple syncs running concurrently

  useEffect(() => {
    const setupApp = async () => {
      await loadTodos();
      await loadPendingActions();
      setIsLoading(false);
    };
    setupApp();

    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
      if (state.isConnected && pendingActions.length > 0) {
        console.log('Network back online, attempting to sync pending actions...');
        syncPendingActions();
      }
    });

    // Initial sync attempt if online and actions exist
    if (isOnline && pendingActions.length > 0) {
      syncPendingActions();
    }

    return () => unsubscribeNetInfo();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    // This effect runs when pendingActions state changes,
    // ensuring the queue is persisted and sync is attempted if online.
    savePendingActions(pendingActions);
    if (isOnline && pendingActions.length > 0) {
      syncPendingActions();
    }
  }, [pendingActions, isOnline]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
      setTodos(storedTodos ? JSON.parse(storedTodos) : initialTodos);
    } catch (error) {
      console.error('Error loading todos:', error);
      setTodos(initialTodos);
    }
  };

  const saveTodos = async (currentTodos) => {
    try {
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(currentTodos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  const loadPendingActions = async () => {
    try {
      const storedActions = await AsyncStorage.getItem(PENDING_ACTIONS_KEY);
      setPendingActions(storedActions ? JSON.parse(storedActions) : []);
    } catch (error) {
      console.error('Error loading pending actions:', error);
      setPendingActions([]);
    }
  };

  const savePendingActions = async (actions) => {
    try {
      await AsyncStorage.setItem(PENDING_ACTIONS_KEY, JSON.stringify(actions));
    } catch (error) {
      console.error('Error saving pending actions:', error);
    }
  };

  const syncPendingActions = async () => {
    if (!isOnline || isSyncingRef.current || pendingActions.length === 0) {
      return;
    }

    isSyncingRef.current = true;
    const actionToSync = pendingActions[0]; // Get the first action

    try {
      let success = false;
      if (actionToSync.type === 'TOGGLE_TODO_STATUS') {
        const { id, completed } = actionToSync.payload;
        await api.updateTodoStatus(id, completed);
        success = true;
      }
      // Add more action types here (e.g., 'ADD_TODO', 'DELETE_TODO')

      if (success) {
        console.log(`Action ${actionToSync.type} for ID ${actionToSync.payload.id} synced successfully.`);
        setPendingActions(prevActions => prevActions.slice(1)); // Remove from queue
      }
    } catch (error) {
      console.error('Failed to sync action:', actionToSync, error.message);
      // Implement retry logic here (e.g., exponential backoff, max retries)
      // For now, we'll leave it in the queue to retry on next sync attempt.
      Alert.alert('Sync Error', `Failed to sync action: ${actionToSync.type}. Will retry.`);
    } finally {
      isSyncingRef.current = false;
    }
  };

  const toggleTodoStatus = async (id) => {
    // 1. Optimistic UI Update
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    await saveTodos(updatedTodos); // Persist local state immediately

    // 2. Add action to pending queue
    const toggledTodo = updatedTodos.find(todo => todo.id === id);
    const newAction = {
      type: 'TOGGLE_TODO_STATUS',
      payload: { id: toggledTodo.id, completed: toggledTodo.completed },
      timestamp: new Date().toISOString(),
    };
    setPendingActions(prevActions => [...prevActions, newAction]);

    // 3. Attempt immediate sync
    syncPendingActions();
  };

  const renderTodoItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.todoItem, item.completed && styles.completedTodo]}
      onPress={() => toggleTodoStatus(item.id)}
    >
      <Text style={[styles.todoText, item.completed && styles.completedText]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading app data...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Offline-First To-Do</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Network Status: <Text style={{ color: isOnline ? 'green' : 'red' }}>
            {isOnline ? 'Online' : 'Offline'}
          </Text>
        </Text>
        <Text style={styles.statusText}>
          Pending Sync Actions: {pendingActions.length}
        </Text>
      </View>

      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
        contentContainerStyle={styles.todoListContent}
        ListEmptyComponent={<Text style={styles.emptyListText}>No todos!</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#343a40',
  },
  statusContainer: {
    padding: 10,
    backgroundColor: '#e9ecef',
    marginHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  statusText: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  todoList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  todoListContent: {
    paddingBottom: 20,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  completedTodo: {
    backgroundColor: '#eafaea',
  },
  todoText: {
    fontSize: 18,
    color: '#343a40',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
});

export default App;
```

#### Assessment idea
1.  **Question:** A user in an offline-first e-commerce app adds an item to their cart. The app immediately updates the cart icon with the new item count and displays a "Item added to cart!" message. Later, when the network connection is restored, the app sends the cart update to the server. This immediate UI feedback before server confirmation is an example of what core offline-first principle?
    A) Background Synchronization
    B) Local Data Caching
    C) Conflict Resolution
    D) Optimistic UI Update

    **Correct Answer:** D) Optimistic UI Update
    **Explanation:** Optimistic UI updates involve immediately reflecting changes in the user interface as if a server operation has succeeded, providing instant feedback to the user, and then synchronizing the actual data with the server in the background. This improves perceived performance and user experience.

2.  **Question:** You are designing an offline-first social media application. A user posts a comment while offline. This comment is stored locally and will be synchronized with the server once an internet connection is available. What is a critical safety consideration for this local storage and synchronization process, especially if the comment might contain sensitive information?

    **Correct Answer:** A critical safety consideration is the **encryption of sensitive data in local storage** and ensuring the **robustness and idempotency of the synchronization mechanism**.
    **Explanation:**
    1.  **Data Encryption:** If the comment (or any other locally stored data) contains sensitive personal information, it must be encrypted even when stored locally. `AsyncStorage` and basic SQLite/Realm are not encrypted by default. Relying solely on device-level security is insufficient for highly sensitive data, especially on rooted/jailbroken devices. Solutions like `react-native-keychain` or custom encryption layers should be used.
    2.  **Robust Synchronization:** The synchronization mechanism must be robust to prevent data loss. This includes:
        *   **Idempotency:** The API endpoint for posting comments should be idempotent, meaning sending the same comment multiple times (e.g., due to retries) does not create duplicate entries on the server.
        *   **Error Handling and Retries:** The sync process must gracefully handle network failures, API errors, and implement retry logic (e.g., exponential backoff) without losing the pending action.
        *   **Conflict Resolution:** If the user edits the comment locally while it's still pending sync, and the server has a different version (e.g., from another device), a conflict resolution strategy is needed to decide which version prevails.

#### AI generation note
Create a 15-minute mixed-format lesson. Start with a 3-minute animated explainer defining offline-first principles, including optimistic UI, background sync, and conflict resolution, using simple diagrams. Transition to a 12-minute live coding demo. Begin by showing the `api.js` and `App.js` starter code for the To-Do app. Walk through implementing `loadPendingActions`, `savePendingActions`, and especially `syncPendingActions`, explaining the queue logic, network check, and simulated API calls. Demonstrate `toggleTodoStatus` with an optimistic UI update, then show the app functioning offline and queuing actions. Finally, turn the network back on to demonstrate the queued actions syncing. Include visual overlays for network status and the pending actions queue. The interactive element will be a reflection prompt asking learners to consider how they would implement conflict resolution for the to-do app if a task was deleted locally but updated remotely.

---

## Module 6: Advanced UI & User Experience
Goal: Empower learners to build highly interactive, visually appealing, and accessible user interfaces in React Native, leveraging advanced animation techniques, custom components, and platform-specific UI patterns.

### Chapter 6.1 — Mastering Animations with Reanimated 2

#### Learning objectives
*   Implement complex, gesture-driven animations using React Native Reanimated 2.
*   Understand and apply `SharedElementTransitions` for smooth navigation between screens.
*   Optimize Reanimated animations for performance and responsiveness on various devices.
*   Debug common issues encountered when working with Reanimated 2.

#### Detailed lesson content
Welcome to the exciting world of advanced animations in React Native! While the built-in `Animated` API is powerful, `React Native Reanimated 2` takes your UI interactions to an entirely new level, offering superior performance, a more declarative API, and the ability to run animations on the UI thread, freeing up the JavaScript thread for other tasks. This means smoother, jank-free animations, even during heavy computations. Reanimated 2 achieves this by allowing you to define animations using a worklet syntax, which are small JavaScript functions that can be executed directly on the UI thread. This completely bypasses the bridge for animation updates, leading to a significant performance boost.

One of the most compelling features of Reanimated 2 is its support for `SharedElementTransitions`. Imagine a scenario where a user taps on an image in a list, and that image seamlessly expands and transitions into a full-screen view on a new screen. This "magic move" effect is precisely what shared element transitions enable, providing a delightful and intuitive user experience. To implement this, you typically wrap the elements you want to share between screens with a `SharedElement` component (often provided by a library like `react-navigation-shared-element` which integrates with Reanimated). You assign a unique `id` to the shared element on both the source and destination screens, and Reanimated handles the interpolation of position, size, and even border radius during the transition. It's crucial that the `id` matches exactly across screens for the transition to work correctly.

Beyond simple transitions, Reanimated 2 truly shines when building gesture-driven animations. Instead of manually tracking gesture states and updating animated values, Reanimated allows you to link gesture events directly to animated styles. For instance, you can create a draggable card component where its `translateX` and `translateY` values are directly controlled by a pan gesture. This is achieved using `react-native-gesture-handler` in conjunction with Reanimated's `useAnimatedGestureHandler` hook. Within the `onStart`, `onActive`, and `onEnd` callbacks of this hook, you can update `SharedValue` objects, which are special Reanimated variables that can be updated on the UI thread. These `SharedValue` objects then drive your `useAnimatedStyle` hook, which applies the transformations to your component. This pattern makes complex interactions like swipe-to-dismiss or pull-to-refresh remarkably straightforward and performant.

Performance optimization is paramount when dealing with animations. With Reanimated 2, the primary optimization comes from its UI thread execution. However, you still need to be mindful of what you animate. Animating properties like `width`, `height`, or `margin` can cause layout recalculations, which are expensive. Whenever possible, prefer animating `transform` properties (like `translateX`, `translateY`, `scale`, `rotate`, `opacity`) as these are handled efficiently by the GPU and don't trigger layout changes. Additionally, avoid complex calculations within your `useAnimatedStyle` or worklets if they are not absolutely necessary, as even UI thread operations have a cost. Common mistakes include forgetting to mark functions as `worklet`s, leading to errors about functions not being callable on the UI thread, or trying to access non-shared values directly within worklets. Always ensure your animated values are `SharedValue` objects when they need to be updated from the UI thread. Debugging Reanimated can sometimes be tricky; make use of `console.log` within your worklets (which will print to the Metro bundler terminal) and the React Native Debugger's performance monitor to identify bottlenecks.

Let's consider a practical scenario: building a Tinder-like swipeable card stack. Each card needs to animate its position and rotation as the user pans it across the screen, and then spring back or fly off-screen depending on the release velocity. With Reanimated 2, you'd use `useAnimatedGestureHandler` to track the pan gesture. In `onActive`, you'd update the card's `translateX` and `rotateZ` based on the gesture's `translationX`. In `onEnd`, you'd use `withSpring` or `withTiming` to animate the card back to its original position or off-screen, potentially incorporating the `velocityX` for a more natural "flick" effect. This level of control and performance is what makes Reanimated 2 an indispensable tool for advanced React Native UI.

#### Key concepts
*   **React Native Reanimated 2:** A powerful animation library for React Native that allows animations to run on the UI thread, improving performance and smoothness.
*   **Worklets:** Small JavaScript functions that can be executed directly on the UI thread, bypassing the JavaScript bridge.
*   **SharedElementTransitions:** A technique for creating seamless "magic move" animations where an element appears to transition smoothly between different screens.
*   **`useAnimatedGestureHandler`:** A Reanimated hook used in conjunction with `react-native-gesture-handler` to drive animations directly from user gestures.
*   **`SharedValue`:** A special Reanimated variable that can be updated on the UI thread and observed by `useAnimatedStyle` to trigger re-renders.
*   **`useAnimatedStyle`:** A Reanimated hook that returns an animated style object, allowing components to react to `SharedValue` changes on the UI thread.
*   **`withSpring`, `withTiming`:** Reanimated functions for defining spring-based and time-based animations, respectively.

#### Hands-on activity
**Activity: Draggable & Snappable Card Component**

Create a simple React Native screen with a single `View` that represents a card. Implement a pan gesture using `react-native-gesture-handler` and `react-native-reanimated` that allows the user to drag the card around the screen. When the user releases the card, it should snap back to its original center position with a spring animation.

**Starter Code (`App.js`):**

```javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const CARD_WIDTH = 200;
const CARD_HEIGHT = 150;

const DraggableCard = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      // TODO: Implement the snap-back animation here
      // Use withSpring to return translateX and translateY to 0
      // Example: translateX.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.card, animatedStyle]} />
    </PanGestureHandler>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <DraggableCard />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#6200EE',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
```

**Instructions:**
1.  Set up a new React Native project (`npx react-native init MyReanimatedApp`).
2.  Install `react-native-reanimated` and `react-native-gesture-handler`:
    `npm install react-native-reanimated react-native-gesture-handler`
    `npx pod-install` (for iOS)
3.  Add the Reanimated Babel plugin to your `babel.config.js`:
    ```javascript
    module.exports = {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        'react-native-reanimated/plugin', // This line must be last.
      ],
    };
    ```
4.  Replace `App.js` with the starter code.
5.  Complete the `onEnd` callback in `onGestureEvent` to make the card snap back to `(0,0)` using `withSpring(0)`.

#### Assessment idea
1.  **Question:** You're building a "swipe to dismiss" feature for a list item. Which combination of Reanimated 2 hooks and `react-native-gesture-handler` components would you primarily use to animate the item's `translateX` property based on user interaction?
    *   A) `useAnimatedValue`, `TapGestureHandler`
    *   B) `useSharedValue`, `useAnimatedStyle`, `PanGestureHandler`, `useAnimatedGestureHandler`
    *   C) `useRef`, `Animated.timing`, `LongPressGestureHandler`
    *   D) `useState`, `useEffect`, `ScrollView`
    **Correct Answer:** B) `useSharedValue`, `useAnimatedStyle`, `PanGestureHandler`, `useAnimatedGestureHandler`
    **Explanation:** To animate `translateX` based on a swipe (pan) gesture, you need `PanGestureHandler` from `react-native-gesture-handler`. The gesture's translation would update a `useSharedValue` which then drives the `translateX` within `useAnimatedStyle`. The `useAnimatedGestureHandler` hook connects the `PanGestureHandler` events to the `useSharedValue` updates, ensuring the animation runs on the UI thread.

2.  **Question:** Why is it generally recommended to animate `transform` properties (like `translateX`, `scale`, `rotate`) over properties like `width` or `height` in Reanimated 2 for better performance?
    **Correct Answer:** Animating `transform` properties is preferred because they are typically handled directly by the GPU and do not trigger layout recalculations. When you animate properties like `width` or `height`, the browser or native layout engine often has to re-calculate the positions and sizes of other elements on the screen, which is an expensive operation that can lead to jank and reduced frame rates, especially on less powerful devices. `transform` animations, on the other hand, are often "composited" and don't affect the document flow or layout, making them much more performant.

#### AI generation note
Create a 12-minute live coding video demonstrating the draggable and snappable card component. Start with an empty project, install dependencies, configure Babel, and then progressively build the `DraggableCard` component. Show the card being dragged and snapping back. Use a split-screen view: code editor on the left, Android emulator on the right. Highlight the `worklet` syntax and explain how `SharedValue` and `useAnimatedStyle` work together. Include a common mistake: forgetting `react-native-reanimated/plugin` in `babel.config.js` and showing the error, then fixing it. End with a 2-question interactive mini-quiz on Reanimated concepts. Ensure captions and high-contrast visuals.

---

### Chapter 6.2 — Building Custom UI Components & Design Systems

#### Learning objectives
*   Design and implement highly reusable and configurable custom UI components in React Native.
*   Understand the principles of a design system and its benefits for mobile app development.
*   Apply best practices for component composition, styling, and prop definition.
*   Integrate custom components into a basic design system structure.

#### Detailed lesson content
As your React Native application grows in complexity, you'll inevitably find yourself needing UI elements that aren't available out-of-the-box or that require specific branding and behavior. This is where building custom UI components becomes essential. Instead of repeatedly writing the same JSX and styling, you encapsulate specific UI patterns and functionalities into dedicated components. The core idea is to create components that are **reusable, composable, and configurable**. Reusability means you can drop them anywhere in your app; composability means they can contain other components; and configurability means their appearance and behavior can be adjusted via props without modifying their internal logic.

When designing a custom component, start by identifying its core purpose and the variations it might need. For example, a custom `Button` component might need different sizes (`small`, `medium`, `large`), colors (`primary`, `secondary`, ``danger`), and states (`disabled`, `loading`). These variations translate directly into component props. Use TypeScript (or PropTypes) to define clear and explicit prop types, making your components easier to use and less prone to errors. For instance, a `Button` component might accept `onPress`, `title`, `variant`, `size`, and `isLoading` props. Inside the component, you'd use these props to conditionally apply styles or render different sub-components (e.g., a `Text` for the title, or an `ActivityIndicator` for the loading state).

Component styling is another critical aspect. While inline styles are convenient for simple cases, for custom components, it's often better to use `StyleSheet.create` for performance and readability. More advanced patterns involve using a theming context (e.g., from `styled-components` or `react-native-paper`) to access global design tokens like colors, fonts, and spacing. This ensures consistency across your app and makes it easy to change themes globally. For example, instead of hardcoding `color: '#6200EE'`, you might use `color: theme.colors.primary`. When composing components, remember the power of the `children` prop. This allows your components to render arbitrary content passed to them, making them incredibly flexible. A `Card` component, for example, might simply provide a styled container, and its `children` prop would render the actual content inside the card.

Now, let's talk about **Design Systems**. A design system is a comprehensive set of standards, principles, and reusable components that guide the design and development of digital products. It's more than just a component library; it includes guidelines for typography, color palettes, spacing, iconography, and even voice and tone. For React Native, a design system typically manifests as a dedicated library of UI components, along with documentation on how to use them. The benefits are immense: increased consistency across your app, faster development cycles (designers and developers work with the same building blocks), improved maintainability, and a single source of truth for your UI.

Building a design system often starts with **design tokens**. These are the atomic units of your design system – things like `color-primary-500`, `spacing-medium`, `font-size-body`. You can define these in a central JavaScript file and then import them into your components. For example:

```javascript
// src/design-tokens/colors.js
export const colors = {
  primary: '#6200EE',
  secondary: '#03DAC6',
  error: '#B00020',
  text: '#212121',
  background: '#FFFFFF',
};

// src/components/Button.js
import { colors } from '../design-tokens/colors';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={{ backgroundColor: colors.primary }} onPress={onPress}>
    <Text style={{ color: colors.background }}>{title}</Text>
  </TouchableOpacity>
);
```

This approach makes it trivial to update your app's entire color scheme by changing a single value in `colors.js`. Common mistakes include creating components that are too specific (not reusable enough) or too generic (requiring too many props to configure). Strive for a balance. Another pitfall is not documenting your components, which makes it hard for other developers (or your future self) to understand how to use them. Consider tools like Storybook for React Native to visually showcase and document your components in isolation. Safety notes: always ensure your custom components handle edge cases gracefully, such as empty data, very long text, or disabled states, to prevent crashes or broken UIs. Test your components thoroughly in various scenarios.

#### Key concepts
*   **Custom UI Components:** Reusable, encapsulated UI elements built from primitive React Native components, designed to serve specific application needs and branding.
*   **Design System:** A comprehensive set of standards, principles, and reusable components that guide the design and development of digital products, ensuring consistency and efficiency.
*   **Design Tokens:** The atomic units of a design system (e.g., colors, typography, spacing values) stored in a central, accessible format.
*   **Reusability:** The ability of a component to be used in multiple places throughout an application without modification.
*   **Composability:** The ability of components to be built from other components, forming complex UIs from simpler parts.
*   **Configurability:** The ability to customize a component's appearance and behavior through props.
*   **`children` prop:** A special prop in React that allows components to render arbitrary content passed between their opening and closing tags.

#### Hands-on activity
**Activity: Building a Themed Custom `Card` Component**

Create a custom `Card` component that accepts `children`, an optional `title`, and an optional `variant` prop (`primary`, `secondary`). The `Card` should apply different background colors and border radii based on the `variant`. Define your colors as design tokens.

**Instructions:**
1.  Create a new file `src/design-tokens/theme.js`:
    ```javascript
    // src/design-tokens/theme.js
    export const theme = {
      colors: {
        primary: '#BB86FC', // A light purple
        secondary: '#03DAC6', // A teal
        background: '#121212', // Dark background
        surface: '#1E1E1E', // Dark surface for cards
        text: '#FFFFFF', // White text
      },
      spacing: {
        small: 8,
        medium: 16,
        large: 24,
      },
      borderRadius: {
        small: 4,
        medium: 8,
      },
    };
    ```
2.  Create a new file `src/components/CustomCard.js`:
    ```javascript
    // src/components/CustomCard.js
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import { theme } from '../design-tokens/theme';

    const CustomCard = ({ children, title, variant = 'surface' }) => {
      const cardStyle = [
        styles.card,
        { backgroundColor: theme.colors[variant] || theme.colors.surface },
        { borderRadius: theme.borderRadius.medium },
      ];

      return (
        <View style={cardStyle}>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
        </View>
      );
    };

    const styles = StyleSheet.create({
      card: {
        padding: theme.spacing.medium,
        margin: theme.spacing.small,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: theme.spacing.small,
        color: theme.colors.text,
      },
    });

    export default CustomCard;
    ```
3.  Modify your `App.js` to use the `CustomCard`:
    ```javascript
    // App.js
    import React from 'react';
    import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
    import CustomCard from './src/components/CustomCard';
    import { theme } from './src/design-tokens/theme';

    export default function App() {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.header}>My App Dashboard</Text>

            <CustomCard title="Welcome" variant="primary">
              <Text style={styles.cardText}>
                This is a primary themed card. It highlights important information.
              </Text>
            </CustomCard>

            <CustomCard title="Notifications">
              <Text style={styles.cardText}>
                You have 3 unread messages.
              </Text>
              <Text style={styles.cardText}>
                Your subscription expires soon.
              </Text>
            </CustomCard>

            <CustomCard title="Analytics" variant="secondary">
              <Text style={styles.cardText}>
                Your daily active users increased by 15% yesterday!
              </Text>
            </CustomCard>

          </ScrollView>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      scrollContent: {
        padding: theme.spacing.medium,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: theme.spacing.large,
        textAlign: 'center',
      },
      cardText: {
        color: theme.colors.text,
        fontSize: 14,
        lineHeight: 20,
      },
    });
    ```
4.  Run the app and observe the themed cards. Experiment with adding more `CustomCard` instances with different `title` and `variant` props.

#### Assessment idea
1.  **Question:** You're tasked with ensuring that all buttons in your React Native app consistently use the company's brand color, font size, and border radius. If these values might change in the future, what is the most effective approach to manage them within a design system context?
    *   A) Hardcode the values directly into each button component's `StyleSheet`.
    *   B) Create a global `constants.js` file with variables like `BRAND_COLOR`, `BUTTON_FONT_SIZE`, and import them into each button.
    *   C) Define these values as design tokens in a central `theme.js` file and have your `Button` component consume them.
    *   D) Use inline styles for each button, dynamically setting colors and fonts.
    **Correct Answer:** C) Define these values as design tokens in a central `theme.js` file and have your `Button` component consume them.
    **Explanation:** Option C represents the core principle of a design system. By defining these values as design tokens in a central `theme.js` (or similar) file, you create a single source of truth. If the brand color changes, you only need to update it in one place, and all components consuming that token will automatically update, ensuring consistency and maintainability. Options A, B, and D are less flexible and lead to more effort when changes are required.

2.  **Question:** What is the primary benefit of using the `children` prop when designing a custom component like a `Modal` or `Card` in React Native?
    **Correct Answer:** The primary benefit of using the `children` prop is to make the component highly **flexible and composable**. It allows the component to render arbitrary content passed to it from its parent, without the custom component needing to know or dictate what that content will be. For a `Modal` or `Card`, this means you can wrap any JSX elements (text, images, other components) inside the `Modal` or `Card` component, and it will render them within its defined layout and styling. This avoids creating many specific variants of a component (e.g., `CardWithText`, `CardWithImage`, `CardWithButtons`) and promotes a cleaner, more adaptable component API.

#### AI generation note
Produce a 10-minute video tutorial. Begin by explaining the concept of custom components and design systems. Then, live code the `CustomCard` component, starting with the `theme.js` file for design tokens. Show how to use `children` and `variant` props. Demonstrate the component in `App.js` with different content and variants. Use a split-screen view: code editor on the left (VS Code with syntax highlighting) and an iOS simulator on the right. Emphasize the benefits of consistency and maintainability. Include a reflection prompt: "How would you extend this `CustomCard` to support an `onPress` prop for interactivity, and where would you define the `rippleColor` if using `TouchableOpacity`?"

---

### Chapter 6.3 — Advanced Gestures & User Interaction

#### Learning objectives
*   Implement complex multi-touch gestures using `react-native-gesture-handler`.
*   Combine multiple gestures to create sophisticated user interactions.
*   Understand and resolve common conflicts between different gesture types.
*   Design and build custom interactive components that respond intuitively to user input.

#### Detailed lesson content
Building truly engaging mobile applications often goes beyond simple taps and scrolls. Users expect fluid, intuitive interactions like pinching to zoom, rotating objects, or complex drag-and-drop functionalities. `react-native-gesture-handler` is the go-to library for implementing these advanced gestures in React Native, providing a more robust and performant alternative to the built-in `PanResponder`. It works by offloading gesture recognition to the native UI thread, similar to `Reanimated`, ensuring smooth interactions even when the JavaScript thread is busy.

Let's start by understanding the fundamental gesture types offered by `react-native-gesture-handler`. Besides `PanGestureHandler` (which we touched upon in the Reanimated chapter), you have `PinchGestureHandler` for scaling, `RotationGestureHandler` for rotating, `TapGestureHandler` for single or double taps, `LongPressGestureHandler`, and `FlingGestureHandler` for quick, directional swipes. Each handler wraps a `View` or `Animated.View` and exposes an `onGestureEvent` prop, which receives an `event` object containing details about the gesture's state and properties (e.g., `scale`, `rotation`, `translationX`, `velocityX`).

The real power emerges when you **combine multiple gestures**. Imagine an image viewer where you can pan to move the image, pinch to zoom, and rotate to change its orientation. You can achieve this by nesting `GestureHandler` components. For example, you might have a `PinchGestureHandler` wrapping a `RotationGestureHandler`, which in turn wraps a `PanGestureHandler`. However, managing the state and applying transformations from multiple concurrent gestures can become complex. This is where `react-native-reanimated` becomes an invaluable partner. By using `useAnimatedGestureHandler` for each gesture and updating `SharedValue` objects for `scale`, `translateX`, `translateY`, and `rotate`, you can seamlessly combine these transformations in a single `useAnimatedStyle` hook.

A common challenge when combining gestures is **gesture conflict resolution**. What happens if a user tries to pan an image while simultaneously pinching it? Or if a `ScrollView` contains a draggable item? `react-native-gesture-handler` provides powerful mechanisms to manage these conflicts. You can use the `simultaneousHandlers` prop to allow multiple gestures to be active at the same time. For example, a `PinchGestureHandler` and a `PanGestureHandler` on the same element might need to be simultaneous. Alternatively, `waitFor` allows one gesture to wait for another to fail before it becomes active. For instance, a `LongPressGestureHandler` might `waitFor` a `TapGestureHandler` to fail, meaning if it's just a quick tap, the tap gesture wins, but if it's held down, the long press activates. The `exclusive` prop can also be used to ensure only one gesture from a group can be active. Understanding the hierarchy and interaction of these props is crucial for creating predictable and smooth user experiences.

Let's walk through a practical example: building a resizable and rotatable sticker component. You'd wrap your sticker `Image` component with a `PanGestureHandler`, a `PinchGestureHandler`, and a `RotationGestureHandler`. Each handler would update its respective `SharedValue` (e.g., `offsetX`, `offsetY`, `scale`, `rotation`). Then, a single `useAnimatedStyle` would combine these `transform` properties:

```javascript
// Inside your component
const translateX = useSharedValue(0);
const translateY = useSharedValue(0);
const scale = useSharedValue(1);
const rotation = useSharedValue(0);

const panGesture = useAnimatedGestureHandler({
  onActive: (event) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  },
  onEnd: () => { /* snap back or persist */ },
});

const pinchGesture = useAnimatedGestureHandler({
  onActive: (event) => {
    scale.value = event.scale;
  },
  onEnd: () => { /* persist scale */ },
});

const rotateGesture = useAnimatedGestureHandler({
  onActive: (event) => {
    rotation.value = event.rotation;
  },
  onEnd: () => { /* persist rotation */ },
});

const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
      { rotateZ: `${rotation.value}rad` },
    ],
  };
});

// In your render method
return (
  <PanGestureHandler onGestureEvent={panGesture}>
    <Animated.View>
      <PinchGestureHandler onGestureEvent={pinchGesture} simultaneousHandlers={rotateGesture}>
        <Animated.View>
          <RotationGestureHandler onGestureEvent={rotateGesture} simultaneousHandlers={pinchGesture}>
            <Animated.View style={[styles.sticker, animatedStyle]}>
              {/* Your sticker content */}
            </Animated.View>
          </RotationGestureHandler>
        </Animated.View>
      </PinchGestureHandler>
    </Animated.View>
  </PanGestureHandler>
);
```

Common mistakes include not wrapping your entire app with `GestureHandlerRootView` (which is required), forgetting to add the Reanimated Babel plugin (if using Reanimated), or misconfiguring `simultaneousHandlers` leading to gestures blocking each other. Debugging gesture issues often involves careful logging of gesture event states and checking the order of gesture activation. Always test your gestures thoroughly on both iOS and Android, as subtle differences in native gesture recognizers can sometimes lead to unexpected behavior.

#### Key concepts
*   **`react-native-gesture-handler`:** A library that provides native-driven gesture recognition for React Native, enabling complex multi-touch interactions.
*   **`GestureHandlerRootView`:** A top-level component that must wrap your application to enable `react-native-gesture-handler`.
*   **`PanGestureHandler`:** Recognizes dragging gestures.
*   **`PinchGestureHandler`:** Recognizes two-finger pinch gestures for scaling.
*   **`RotationGestureHandler`:** Recognizes two-finger rotation gestures.
*   **`TapGestureHandler`:** Recognizes single or multiple taps.
*   **`LongPressGestureHandler`:** Recognizes a sustained press.
*   **`FlingGestureHandler`:** Recognizes quick, directional swipes.
*   **`simultaneousHandlers`:** A prop used to allow multiple gesture handlers to be active concurrently.
*   **`waitFor`:** A prop used to make a gesture handler wait for another specified gesture handler to fail before it can activate.
*   **Gesture Conflict Resolution:** The process of defining rules for how multiple gesture handlers interact and prioritize when user input could trigger more than one.

#### Hands-on activity
**Activity: Pinch-to-Zoom Image Viewer**

Create a simple image viewer screen where the user can pinch to zoom in and out of an image. The image should scale from its original size based on the pinch gesture.

**Starter Code (`App.js`):**

```javascript
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const PinchableImage = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const onPinchGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      // TODO: Update scale.value based on event.scale
      // scale.value = event.scale;
      // Optional: Capture focal point for more advanced zoom
      // focalX.value = event.focalX;
      // focalY.value = event.focalY;
    },
    onEnd: () => {
      // Optional: Snap back to original scale or clamp it
      // scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        // Optional: Implement focal point translation for zoom around a point
        // { translateX: focalX.value },
        // { translateY: focalY.value },
      ],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
      <Animated.View style={styles.container}>
        <Animated.Image
          source={{ uri: 'https://picsum.photos/id/1015/800/600' }} // Example image
          style={[styles.image, animatedStyle]}
          resizeMode="contain"
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
        <PinchableImage />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    width: width,
    height: width * 0.75, // Aspect ratio for the image
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Crucial to prevent image from leaking outside its bounds
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
```

**Instructions:**
1.  Ensure `react-native-gesture-handler` and `react-native-reanimated` are installed and configured (as in Chapter 6.1).
2.  Replace your `App.js` with the starter code.
3.  Complete the `onActive` callback in `onPinchGestureEvent` to update `scale.value` with `event.scale`.
4.  Run the app and test the pinch-to-zoom functionality on the image.

#### Assessment idea
1.  **Question:** You have a `ScrollView` containing multiple `PanGestureHandler` components, each controlling a draggable item. When a user attempts to drag an item, the `ScrollView` often intercepts the gesture, preventing the item from being dragged. How can you resolve this gesture conflict to prioritize the item's `PanGestureHandler`?
    **Correct Answer:** You can resolve this by making the `PanGestureHandler` for the draggable item `exclusive` or by having the `ScrollView`'s internal gesture handler `waitFor` the item's `PanGestureHandler` to fail. A common approach is to wrap the draggable item's `PanGestureHandler` within a `NativeViewGestureHandler` (which is often implicitly used by `ScrollView`) and configure the `ScrollView` to `waitFor` the item's gesture to activate. Alternatively, by setting `activeOffsetX` or `activeOffsetY` on the `PanGestureHandler`, you can make it more specific to horizontal or vertical movement, allowing the `ScrollView` to handle orthogonal scrolling. The simplest solution often involves ensuring the draggable item's `PanGestureHandler` is configured to `activateAfterLongPress` or `minPointers={2}` if it's meant to be a secondary interaction, allowing the `ScrollView` to take precedence for single-finger scrolls. More directly, the `ScrollView` component in `react-native-gesture-handler` can be configured with `simultaneousHandlers` or `waitFor` to interact with its children's gestures.

2.  **Question:** Describe a scenario where using `simultaneousHandlers` would be necessary and explain why.
    **Correct Answer:** `simultaneousHandlers` is necessary when you want two or more distinct gestures to be recognized and active on the same component (or overlapping components) at the same time. A classic example is a **photo editor** where a user needs to be able to **pinch to zoom** *and* **rotate** an image concurrently using two fingers. Without `simultaneousHandlers`, one gesture (e.g., pinch) would typically "win" and prevent the other (e.g., rotation) from activating, leading to a frustrating user experience. By specifying `simultaneousHandlers={[rotationGestureRef]}` on the `PinchGestureHandler` and vice-versa, both gestures can be processed and applied to the image's `scale` and `rotation` transforms simultaneously.

#### AI generation note
Create an 11-minute interactive lab walkthrough. Demonstrate the pinch-to-zoom image viewer activity. Start with the provided starter code and guide learners through completing the `onActive` callback. Then, challenge learners to add a `PanGestureHandler` to allow the image to be dragged around *after* it has been zoomed. Show how to combine these two gestures using `simultaneousHandlers`. Use a split-screen view with the code editor and an Android emulator. Emphasize the `GestureHandlerRootView` requirement. Include a mini-quiz question about gesture conflict resolution after the pan gesture is added.

---

### Chapter 6.4 — Accessibility & Internationalization Best Practices

#### Learning objectives
*   Implement accessibility features in React Native apps, including semantic elements and screen reader support.
*   Understand the importance of internationalization (i18n) and localization (l10n) for global apps.
*   Integrate a localization library to manage multi-language content.
*   Apply best practices for handling dynamic text sizing and right-to-left (RTL) layouts.

#### Detailed lesson content
Building inclusive applications means ensuring they are usable by everyone, regardless of their abilities or location. This is where **Accessibility (A11y)** and **Internationalization (i18n)** come into play. Neglecting these aspects can alienate a significant portion of your potential user base and may even lead to legal compliance issues in some regions.

**Accessibility** in React Native focuses on making your app usable for individuals with disabilities, primarily through screen readers (like VoiceOver on iOS or TalkBack on Android). The core principle is to provide semantic meaning to your UI elements. Every interactive element should clearly communicate its purpose and state. The `accessibilityLabel` prop is your primary tool here. Instead of a screen reader announcing "button" for an icon-only button, `accessibilityLabel="Add to Cart"` provides context. For elements that are purely decorative, set `accessibilityElementsHidden={true}` or `importantForAccessibility="no-hide-descendants"` (Android) to prevent screen readers from announcing them.

Beyond labels, consider `accessibilityHint` for instructions, `accessibilityRole` to describe the component type (e.g., `button`, `header`, `text`), and `accessibilityState` for dynamic states like `checked`, `selected`, or `disabled`. For custom interactive components, ensure they are focusable using `accessible={true}` and that they correctly respond to accessibility events. Testing with actual screen readers is paramount; don't just rely on simulators. Common accessibility mistakes include:
1.  **Missing labels:** Icon-only buttons or images without `accessibilityLabel`.
2.  **Poor contrast:** Text that's hard to read against its background.
3.  **Fixed font sizes:** Preventing users from scaling text to their preference.
4.  **Complex navigation:** Screen readers struggle with non-linear or overly nested UIs.
Always remember that accessibility is an ongoing process, not a one-time feature.

**Internationalization (i18n)** is the process of designing and developing an application so that it can be adapted to various languages and regions without engineering changes. **Localization (l10n)** is the actual process of adapting the internationalized app for a specific locale, which includes translating text, formatting dates/numbers, and adjusting for cultural norms. For React Native, a popular library for handling i18n is `react-i18next` (which builds on `i18next`).

To implement i18n, you typically:
1.  **Define translations:** Create JSON files (or similar) for each language, mapping keys to translated strings.
    ```json
    // en.json
    {
      "welcome": "Welcome",
      "greeting": "Hello, {{name}}!",
      "cartCount": "You have {{count}} item in your cart."
    }
    // es.json
    {
      "welcome": "Bienvenido",
      "greeting": "¡Hola, {{name}}!",
      "cartCount": "Tienes {{count}} artículo en tu carrito."
    }
    ```
2.  **Configure `i18next`:** Initialize the library with your translation files and default language.
3.  **Use `useTranslation` hook:** In your components, use the `t` function from this hook to retrieve translated strings.
    ```javascript
    import { useTranslation } from 'react-i18next';

    function MyComponent() {
      const { t } = useTranslation();
      return <Text>{t('welcome')}</Text>;
    }
    ```
    For dynamic values and pluralization, `i18next` offers powerful features like interpolation (`t('greeting', { name: 'John' })`) and plural rules (`t('cartCount', { count: 1 })` vs. `t('cartCount', { count: 5 })`).

A critical aspect of i18n is handling **Right-to-Left (RTL) layouts**. Languages like Arabic, Hebrew, and Farsi read from right to left, which means your UI layout needs to mirror horizontally. React Native provides built-in support for RTL. When `I18nManager.isRTL` is true, flexbox properties like `marginLeft`/`marginRight` or `paddingLeft`/`paddingRight` automatically reverse their behavior to `marginStart`/`marginEnd`. However, you might need to explicitly use `flexDirection: 'row-reverse'` or `textAlign: 'right'` for specific components. For images or icons that have directional meaning (e.g., a "back" arrow), you might need to conditionally flip them using `transform: [{ scaleX: -1 }]` based on `I18nManager.isRTL`.

Finally, always consider **dynamic text sizing**. Users may have larger font settings on their devices. Use `Text` components, which by default respect these settings. Avoid hardcoding `fontSize` values everywhere; instead, define a typography scale in your design system (e.g., `fontSize: theme.typography.body`) and let the system scale it. Test your app with large font sizes enabled in device settings to ensure layouts don't break and text remains readable.

#### Key concepts
*   **Accessibility (A11y):** Designing and developing applications to be usable by people with disabilities, especially through screen readers.
*   **`accessibilityLabel`:** A prop on `View` and `Text` components that provides a descriptive label for screen readers.
*   **`accessibilityRole`:** A prop that describes the purpose of a UI element for screen readers (e.g., `button`, `header`).
*   **Internationalization (i18n):** The process of designing an application to adapt to various languages and regions.
*   **Localization (l10n):** The process of adapting an internationalized application for a specific locale (e.g., translating text, formatting dates).
*   **`react-i18next`:** A popular React Native library for managing translations and internationalization.
*   **Right-to-Left (RTL) Layouts:** UI layouts designed for languages that read from right to left, requiring horizontal mirroring of elements.
*   **`I18nManager`:** A React Native API to check and manage RTL settings.
*   **Dynamic Text Sizing:** Ensuring that text in an application scales correctly based on user preferences (e.g., larger font settings).

#### Hands-on activity
**Activity: Localized Welcome Screen with RTL Support**

Create a simple welcome screen that displays a greeting in English or Spanish based on the app's locale. Implement a button to switch languages. Ensure the layout adapts for RTL languages (though English/Spanish are LTR, the setup will be ready).

**Instructions:**
1.  Set up a new React Native project.
2.  Install `i18next` and `react-i18next`:
    `npm install i18next react-i18next`
3.  Create `src/i18n.js` for configuration:
    ```javascript
    // src/i18n.js
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import { I18nManager } from 'react-native'; // Import I18nManager

    // The translations
    const resources = {
      en: {
        translation: {
          welcome: 'Welcome to Cohortia!',
          changeLanguage: 'Change Language',
          greeting: 'Hello, {{name}}!',
          language: 'English',
          direction: 'ltr',
        },
      },
      es: {
        translation: {
          welcome: '¡Bienvenido a Cohortia!',
          changeLanguage: 'Cambiar idioma',
          greeting: '¡Hola, {{name}}!',
          language: 'Español',
          direction: 'ltr',
        },
      },
      ar: { // Example for RTL language
        translation: {
          welcome: 'مرحبًا بكم في كوهورتيا!',
          changeLanguage: 'تغيير اللغة',
          greeting: 'أهلاً بك يا {{name}}!',
          language: 'العربية',
          direction: 'rtl',
        },
      },
    };

    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false, // react already safes from xss
        },
      });

    // Function to set language and handle RTL
    export const changeLanguageAndDirection = async (lang) => {
      await i18n.changeLanguage(lang);
      const isRTL = i18n.t('direction') === 'rtl';

      if (I18nManager.isRTL !== isRTL) {
        I18nManager.forceRTL(isRTL);
        // On Android, this requires a reload to apply RTL changes
        // On iOS, it applies immediately in some cases, but a reload is safer.
        // For a real app, you might prompt the user to restart.
        // For this exercise, we'll just force it and note the potential need for restart.
        console.log(`RTL status changed to: ${isRTL}. App might need restart.`);
      }
    };

    export default i18n;
    ```
4.  Modify `App.js`:
    ```javascript
    // App.js
    import './src/i18n'; // Import i18n configuration
    import React from 'react';
    import { SafeAreaView, Text, Button, StyleSheet, I18nManager, View } from 'react-native';
    import { useTranslation } from 'react-i18next';
    import { changeLanguageAndDirection } from './src/i18n';

    export default function App() {
      const { t, i18n } = useTranslation();

      const currentLanguage = i18n.language;

      const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'es' : currentLanguage === 'es' ? 'ar' : 'en';
        changeLanguageAndDirection(newLang);
      };

      // Styles that depend on RTL
      const dynamicStyles = StyleSheet.create({
        container: {
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        },
        text: {
          textAlign: I18nManager.isRTL ? 'right' : 'left',
          fontSize: 24,
          marginBottom: 20,
        },
      });

      return (
        <SafeAreaView style={styles.safeArea}>
          <View style={dynamicStyles.container}>
            <Text style={dynamicStyles.text} accessibilityLabel={t('welcome')}>
              {t('welcome')}
            </Text>
            <Button
              onPress={toggleLanguage}
              title={t('changeLanguage')}
              accessibilityLabel={t('changeLanguage')}
            />
          </View>
          <Text style={[dynamicStyles.text, { fontSize: 18 }]}>
            {t('greeting', { name: 'Learner' })}
          </Text>
          <Text style={[dynamicStyles.text, { fontSize: 16 }]}>
            {t('language')}: {currentLanguage} (RTL: {I18nManager.isRTL ? 'Yes' : 'No'})
          </Text>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 50,
      },
      // Note: dynamic styles are defined within the component for I18nManager changes
    });
    ```
5.  Run the app. Tap the "Change Language" button. Observe the text changing. Note the `I18nManager.isRTL` status. For Arabic, you'll see `I18nManager.isRTL` change, and the layout will attempt to mirror. On Android, a full app restart might be needed for `I18nManager.forceRTL` to take full effect.

#### Assessment idea
1.  **Question:** Your React Native app has an `Image` component displaying a decorative icon that provides no functional information. How should you handle this icon for screen reader users to avoid unnecessary clutter in their audio experience?
    *   A) Set `accessibilityLabel="Decorative icon"`.
    *   B) Set `accessible={false}`.
    *   C) Set `accessibilityElementsHidden={true}` on the `Image` component.
    *   D) Set `importantForAccessibility="no"` (Android) or `accessibilityRole="none"` (iOS).
    **Correct Answer:** C) Set `accessibilityElementsHidden={true}` on the `Image` component.
    **Explanation:** For purely decorative elements that convey no meaningful information, the best practice is to hide them from screen readers entirely. `accessibilityElementsHidden={true}` (or `importantForAccessibility="no-hide-descendants"` on Android) achieves this. `accessible={false}` makes the element not focusable but doesn't necessarily hide its children. `accessibilityLabel` would still cause it to be announced. `accessibilityRole="none"` is an alternative for iOS, but `accessibilityElementsHidden` is more direct for hiding.

2.  **Question:** You are localizing your app for a new language that reads Right-to-Left (RTL). Your current UI uses `flexDirection: 'row'` and `marginLeft` for spacing. What changes might you need to make to ensure the layout correctly mirrors for RTL users?
    **Correct Answer:** For RTL languages, you will need to adjust your styling to account for the mirrored layout.
    1.  **`flexDirection`:** While React Native's Flexbox often handles `row` by implicitly using `row-reverse` when `I18nManager.isRTL` is true, it's good practice to explicitly use `flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'` if you encounter issues or want explicit control.
    2.  **Margins and Paddings:** Instead of `marginLeft` and `marginRight`, use `marginStart` and `marginEnd`. These properties automatically resolve to `marginLeft`/`marginRight` or `marginRight`/`marginLeft` based on `I18nManager.isRTL`. Similarly for `paddingStart` and `paddingEnd`.
    3.  **Text Alignment:** Set `textAlign: I18nManager.isRTL ? 'right' : 'left'` for text components.
    4.  **Directional Icons/Images:** For icons like back arrows, you might need to conditionally apply a `transform: [{ scaleX: -1 }]` to flip them horizontally when `I18nManager.isRTL` is true.
    5.  **`I18nManager.forceRTL(true)`:** You must explicitly set `I18nManager.forceRTL(true)` and potentially restart the app (especially on Android) for the RTL layout to take full effect.

#### AI generation note
Design a 10-minute mixed-media lesson. Start with a slide deck explaining A11y and i18n principles, showing examples of good vs. bad `accessibilityLabel` usage. Then transition to a live coding demo of the `react-i18next` setup and language switching. Show how `I18nManager.isRTL` affects layout properties by toggling between LTR and RTL languages. Use an Android emulator to clearly show the layout mirroring. Include a short quiz on accessibility props. Visual style should include side-by-side code and emulator views, with occasional diagram overlays for i18n architecture.

---

### Chapter 6.5 — Integrating Platform-Specific UI/UX Patterns

#### Learning objectives
*   Identify scenarios where platform-specific UI/UX patterns enhance user experience.
*   Implement common iOS-specific UI components and behaviors (e.g., `ActionSheetIOS`, `DatePickerIOS`).
*   Implement common Android-specific UI components and behaviors (e.g., `ToastAndroid`, `DatePickerAndroid`).
*   Strategically use platform-specific code to achieve native look and feel while maintaining a cross-platform codebase.

#### Detailed lesson content
While React Native's promise is "learn once, write anywhere," there are times when a truly native user experience dictates using platform-specific UI/UX patterns. Blindly forcing a single design across both iOS and Android can sometimes lead to an app that feels "off" or unnatural on one platform. Understanding when and how to leverage native modules and components is a hallmark of an advanced React Native developer. The goal isn't to write two separate apps, but to strategically inject native flavors where they significantly improve usability and adhere to platform guidelines.

Consider common UI elements like date pickers, action sheets, or temporary notifications. iOS users are accustomed to `UIDatePicker` (often presented as a modal or within an `ActionSheet`), while Android users expect `DatePickerDialog` (a floating dialog). Similarly, iOS has `ActionSheetIOS` for a bottom-up menu of actions, whereas Android typically uses `BottomSheet` or `AlertDialog`. React Native provides built-in modules like `ActionSheetIOS`, `DatePickerIOS` (now often replaced by community libraries or `@react-native-community/datetimepicker`), `ToastAndroid`, and `DatePickerAndroid` (also often replaced by community libraries) to access these native UI components.

The key to integrating these patterns gracefully lies in **platform-specific code organization**. React Native offers two primary ways to do this:
1.  **Platform-specific file extensions:** You can create files like `MyComponent.ios.js` and `MyComponent.android.js`. When you `import MyComponent from './MyComponent'`, React Native automatically picks the correct file based on the operating system. This is ideal for components that have entirely different implementations but the same API.
2.  **`Platform` module:** The `Platform` API provides `Platform.OS` (e.g., `'ios'`, `'android'`, `'web'`) and `Platform.select()` which allows you to conditionally render or apply styles based on the platform directly within a single file. This is useful for small variations or conditional logic.

Let's look at `ToastAndroid` as a simple example. For a temporary, non-intrusive message, Android has `ToastAndroid`. iOS doesn't have an equivalent native component, so for iOS, you might use a custom animated `View` or a third-party library that mimics a toast.

```javascript
import { Platform, ToastAndroid, Alert } from 'react-native';

const showToast = (message) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    // For iOS, you might use an Alert or a custom toast component
    Alert.alert('Notification', message);
  }
};

// Usage:
// <Button title="Show Notification" onPress={() => showToast('Item added to cart!')} />
```

For more complex components like `DatePicker`, you'd typically use a community package like `@react-native-community/datetimepicker`, which abstracts away the platform differences but still renders the native pickers. Its API allows you to set `mode` (date, time, datetime) and `display` (default, spinner, calendar, clock) and it handles the underlying native implementation.

Another common area for platform-specific patterns is **navigation bars and headers**. While `react-navigation` provides excellent cross-platform navigation, sometimes you might want to customize the header with native-specific elements (e.g., a search bar that behaves natively on iOS, or a custom action button on Android's toolbar). You can often achieve this by configuring `react-navigation` options or, for highly custom scenarios, by integrating native views directly using `Native Modules` or `Native UI Components` (covered in a previous module).

**Safety notes and common mistakes:**
*   **Over-engineering:** Don't reach for platform-specific solutions unless there's a clear UX benefit. Start with cross-platform and specialize only when necessary.
*   **Inconsistent APIs:** When using platform-specific files, ensure the public API (props, methods) of your `MyComponent.ios.js` and `MyComponent.android.js` files are identical so that the parent component doesn't need to know which platform it's running on.
*   **Testing:** Always test platform-specific code thoroughly on both target platforms. What looks good on iOS might break on Android, and vice-versa.
*   **Keeping up with changes:** Native APIs evolve. Community libraries abstracting native components are often more up-to-date than React Native's built-in `DatePickerIOS`/`Android` modules. Prefer well-maintained community packages.
*   **Bundle size:** Be mindful that including platform-specific code that is never used on a particular platform can slightly increase bundle size, though React Native's bundler often optimizes this.

By judiciously applying platform-specific UI/UX patterns, you can create React Native apps that not only perform well but also feel truly at home on both iOS and Android devices, delighting users with familiar and intuitive interactions.

#### Key concepts
*   **Platform-Specific UI/UX Patterns:** Design and interaction conventions that are unique to a particular mobile operating system (e.g., iOS Action Sheets, Android Toasts).
*   **`Platform` Module:** A React Native API (`Platform.OS`, `Platform.select()`) for detecting the current operating system and conditionally executing code or applying styles.
*   **Platform-Specific File Extensions:** A React Native feature allowing developers to create files like `Component.ios.js` and `Component.android.js`, where the bundler automatically selects the correct file based on the target platform.
*   **`ActionSheetIOS`:** A React Native API for displaying a native iOS action sheet.
*   **`ToastAndroid`:** A React Native API for displaying a native Android toast notification.
*   **`@react-native-community/datetimepicker`:** A popular community package that provides a cross-platform API for rendering native date and time pickers on iOS and Android.
*   **Native Look and Feel:** The quality of an app's UI/UX that makes it indistinguishable from an app built purely with native development tools for that platform.

#### Hands-on activity
**Activity: Platform-Aware Notification Button**

Create a button that, when pressed, displays a short notification. On Android, it should use `ToastAndroid`. On iOS, it should use `Alert.alert` (as a simple native equivalent, though a custom solution would be used in a production app).

**Starter Code (`App.js`):**

```javascript
import React from 'react';
import { SafeAreaView, View, Button, Text, Platform, ToastAndroid, Alert, StyleSheet } from 'react-native';

const PlatformAwareNotification = () => {
  const showNotification = (message) => {
    // TODO: Implement platform-specific notification logic here
    // If Platform.OS === 'android', use ToastAndroid.show()
    // Else (for iOS), use Alert.alert()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Platform-Specific Notifications</Text>
      <Button
        title="Show Notification"
        onPress={() => showNotification('This is a platform-specific notification!')}
      />
      <Text style={styles.platformText}>Running on: {Platform.OS}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <PlatformAwareNotification />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  platformText: {
    marginTop: 30,
    fontSize: 16,
    color: '#666',
  },
});
```

**Instructions:**
1.  Replace your `App.js` with the starter code.
2.  Complete the `showNotification` function to use `ToastAndroid` for Android and `Alert.alert` for iOS.
3.  Run the app on both an Android emulator/device and an iOS simulator/device to observe the different notification behaviors.

#### Assessment idea
1.  **Question:** You need to implement a date selection feature in your React Native app. You want to use the native date picker UI for both iOS and Android. Which approach is generally recommended for achieving this while maintaining a single codebase?
    *   A) Use `DatePickerIOS` and `DatePickerAndroid` directly with `Platform.OS` checks.
    *   B) Create `DatePickerComponent.ios.js` and `DatePickerComponent.android.js` files, each containing platform-specific native module calls.
    *   C) Install and use a community library like `@react-native-community/datetimepicker`.
    *   D) Build a custom JavaScript-only date picker from scratch that mimics native behavior.
    **Correct Answer:** C) Install and use a community library like `@react-native-community/datetimepicker`.
    **Explanation:** While options A and B are technically possible, they require more manual management of native modules and often lead to more complex code. `DatePickerIOS` and `DatePickerAndroid` are also somewhat deprecated in favor of community solutions. Option D is a lot of work and rarely achieves true native feel. Community libraries like `@react-native-community/datetimepicker` are specifically designed to abstract away these platform differences, providing a single, consistent API that renders the appropriate native date picker UI on each platform, making it the most efficient and recommended approach for a single codebase.

2.  **Question:** Explain the primary benefit of using platform-specific file extensions (e.g., `MyComponent.ios.js`, `MyComponent.android.js`) over using `Platform.select()` or `Platform.OS` checks within a single file for managing platform-specific UI.
    **Correct Answer:** The primary benefit of using platform-specific file extensions is **cleaner code separation and improved readability/maintainability** for significantly different implementations. When a component's logic or UI structure varies substantially between platforms, having entirely separate files for each platform (`MyComponent.ios.js` and `MyComponent.android.js`) allows you to keep the code for each platform distinct and focused. This prevents a single file from becoming cluttered with numerous `if (Platform.OS === 'ios')` checks or complex `Platform.select()` objects, which can make the code harder to read, understand, and debug. It also allows for easier collaboration, as developers can work on the iOS or Android version of a component without interfering with the other platform's code in the same file.

#### AI generation note
Generate an 8-minute video tutorial. Start by explaining the concept of platform-specific UI/UX. Then, live code the `PlatformAwareNotification` component, guiding learners through implementing the `showNotification` function using `Platform.OS`, `ToastAndroid`, and `Alert.alert`. Demonstrate the different behaviors by running the app on both an Android emulator and an iOS simulator. Use a split-screen view showing the code editor and both emulators side-by-side. Highlight the `Platform` module. Conclude with a quick recap of when to use platform-specific patterns and a practical scenario: "When would you consider using `ActionSheetIOS` instead of a custom modal component on iOS?"

---

## Final Capstone Project

The capstone project is your opportunity to synthesize the advanced React Native concepts you've learned and apply them to a real-world application. You will choose one of the following project options, each designed to challenge your understanding of navigation, state management, performance, and platform-specific features. Remember to focus on clean code, robust error handling, and a user-friendly experience.

### Project Option 1: Personalized News Feed Application

**Description:** Develop a mobile application that fetches news articles from a public API (e.g., NewsAPI.org, GNews API, or a similar free news API) and displays them in a personalized feed. Users should be able to browse news by categories, view article details, and save articles for later reading.

**Core Requirements:**
*   **Advanced Navigation:** Implement a combination of tab navigation for primary categories (e.g., "Top Stories," "Technology," "Sports") and stack navigation for viewing individual article details.
*   **API Integration:** Fetch news data asynchronously from a chosen public API, handling loading states and potential errors gracefully.
*   **State Management:** Utilize the Context API or a lightweight state management library (like Zustand or Jotai, if introduced in the course) to manage application-wide state, such as user preferences, saved articles, and API data.
*   **Custom Components:** Design and implement reusable components for displaying news cards, category filters, and article detail views.
*   **Local Persistence:** Implement a "Save for Later" feature using `AsyncStorage` to store selected articles locally on the device.
*   **Performance Optimization:** Employ `React.memo`, `useCallback`, and `useMemo` where appropriate to optimize rendering of lists and complex components.
*   **User Interface:** Create an intuitive and responsive UI that adapts well to different screen sizes.

**Stretch Goals:**
*   **Search Functionality:** Add a search bar to filter news articles by keywords.
*   **Offline Mode:** Implement basic caching for news articles to allow viewing previously loaded content offline.
*   **User Authentication (Mock):** Simulate a user login and store a "favorite categories" preference locally.
*   **Animations:** Add subtle animations for screen transitions or list item interactions using `Animated` API or `React Native Reanimated`.

**Evaluation Criteria:**
*   **Functionality (40%):** All core requirements are met and function as expected. API calls are successful, navigation works seamlessly, and articles are saved/retrieved correctly.
*   **Code Quality (30%):** Code is clean, well-organized, properly commented, and follows best practices (e.g., component separation, meaningful variable names). Effective use of advanced React Native hooks and patterns.
*   **User Experience & UI (20%):** The application is visually appealing, responsive, and easy to navigate. Error states and loading indicators are handled gracefully.
*   **Advanced Concepts Application (10%):** Demonstrates a clear understanding and effective application of advanced concepts like Context API, performance optimizations, and platform-specific features.

**Estimated Time:** 20–25 hours

### Project Option 2: Interactive Recipe Book with Local Storage

**Description:** Build a mobile application that allows users to browse a collection of recipes, view detailed instructions, and manage their own custom recipes. The application should prioritize user interaction and local data management.

**Core Requirements:**
*   **Complex UI Layouts:** Design a visually rich interface for displaying recipe lists and detailed recipe views, including images, ingredients, and step-by-step instructions.
*   **Gestures and Animations:** Implement at least one interactive gesture (e.g., swiping to mark a step as complete, long-press to reorder ingredients) using `PanResponder` or `React Native Gesture Handler`. Incorporate subtle animations for transitions or feedback using `Animated` API.
*   **Local Data Persistence:** Store all recipe data (both pre-loaded and user-added) locally using `AsyncStorage` or a more structured local database solution like `Realm` or `WatermelonDB` (if covered in the course).
*   **Form Handling:** Create a form for users to add new recipes, including fields for name, ingredients (dynamic list), instructions, and an optional image.
*   **Image Picker Integration:** Allow users to pick an image from their device's gallery for their custom recipes.
*   **Custom Hooks:** Develop at least one custom hook to encapsulate reusable logic, such as managing form input or handling image selection.
*   **Platform-Specific UI:** Implement minor UI adjustments or features that are specific to iOS or Android where appropriate (e.g., different header styles, platform-specific icons).

**Stretch Goals:**
*   **Recipe Search/Filter:** Allow users to search recipes by name or filter by ingredients.
*   **Shopping List Feature:** Users can add ingredients from multiple recipes to a dynamic shopping list.
*   **Dark Mode Toggle:** Implement a theme switcher that changes the app's color scheme.
*   **Push Notifications (Local):** Set up local notifications for recipe reminders or cooking timers.

**Evaluation Criteria:**
*   **Functionality (40%):** All core features work correctly, including data persistence, form submission, image picking, and gesture interactions.
*   **Code Quality (30%):** Code is well-structured, modular, and adheres to React Native best practices. Custom hooks are effectively utilized.
*   **User Experience & UI (20%):** The app is visually engaging, responsive, and provides clear feedback for user interactions. Gestures feel natural and animations enhance usability.
*   **Advanced Concepts Application (10%):** Demonstrates strong understanding of local data management, custom hooks, gestures, and animations.

**Estimated Time:** 20–25 hours

### Project Option 3: Workout Tracker with Progress Visualization

**Description:** Create a workout tracking application where users can log their exercises, track sets, reps, and weight, and visualize their progress over time. This project emphasizes data management, custom components for data display, and potentially charting libraries.

**Core Requirements:**
*   **Data Entry Forms:** Implement forms for logging individual workout sessions, including exercise name, sets, reps, and weight.
*   **Local Data Storage:** Persist all workout data (exercises, sessions, progress) using `AsyncStorage` or a local database solution.
*   **Progress Visualization:** Display workout data using a simple charting library (e.g., `react-native-chart-kit` or a similar lightweight option) to show trends in weight lifted or reps achieved over time for specific exercises.
*   **Custom Components:** Build reusable components for displaying workout summaries, exercise lists, and individual exercise details.
*   **State Management:** Use the Context API or a chosen state management library to manage workout data across different screens.
*   **Performance Optimization:** Optimize list rendering for long lists of workout sessions or exercises.
*   **Date/Time Handling:** Implement robust handling of dates for logging workouts and filtering progress.

**Stretch Goals:**
*   **Exercise Library:** Allow users to pre-define exercises with default settings.
*   **Workout Templates:** Users can create and save full workout routines.
*   **Filtering/Sorting:** Implement options to filter workouts by date range or sort exercises.
*   **Export Data:** Allow users to export their workout data (e.g., to CSV).
*   **Dark Mode:** Provide a dark theme option for the application.

**Evaluation Criteria:**
*   **Functionality (40%):** All data entry, storage, retrieval, and visualization features work as expected. Data integrity is maintained.
*   **Code Quality (30%):** Code is clean, modular, and well-documented. State management is implemented logically.
*   **User Experience & UI (20%):** The application is easy to use for logging workouts and viewing progress. Charts are clear and informative.
*   **Advanced Concepts Application (10%):** Demonstrates effective use of local data persistence, data visualization, and state management for complex data structures.

**Estimated Time:** 20–25 hours

## Final Examination

This examination covers key concepts and practical skills from all modules of the "React Native Advanced Concepts" course. It is designed to assess your understanding of advanced navigation, state management patterns, performance optimization, animations, and platform-specific development.

---

**Instructions:** Answer all questions to the best of your ability. Show your work for code-related questions.

### Section 1: Concept Definitions (4 Questions)

1.  **Question:** Explain the primary purpose and benefit of using `React.memo` and `useCallback` in a React Native application. Provide a simple scenario where their use would be beneficial.
    **Answer:** `React.memo` is a higher-order component that memoizes a functional component, preventing it from re-rendering if its props haven't changed. `useCallback` is a hook that memoizes a function, preventing it from being re-created on every render if its dependencies haven't changed.
    **Benefit:** Both are primarily used for performance optimization. They reduce unnecessary re-renders, especially in components that receive complex props (like objects or functions) or in large lists, leading to smoother UI and better battery life.
    **Scenario:** Consider a large `FlatList` rendering many `ListItem` components. If `ListItem` receives an `onPress` prop which is a function, and this function is re-created on every render of the parent component, all `ListItem` components would re-render even if their data hasn't changed. Wrapping `ListItem` with `React.memo` and the `onPress` function with `useCallback` would prevent these unnecessary re-renders.

2.  **Question:** Describe the fundamental difference between the React Native Context API and a dedicated state management library like Redux or Zustand. When might you choose one over the other?
    **Answer:** The **React Native Context API** provides a way to pass data through the component tree without having to pass props down manually at every level. It's built into React and is ideal for managing "global" state that changes infrequently or for smaller, less complex applications. It's often used for themes, user authentication status, or locale.
    **Dedicated state management libraries (e.g., Redux, Zustand):** These offer more robust, scalable, and often more opinionated solutions for managing complex application state. They typically provide features like centralized stores, predictable state updates (e.g., Redux's reducers), middleware, and dev tools.
    **When to choose:**
    *   **Context API:** For simpler state needs, infrequent updates, or when you want to avoid adding external dependencies. It's great for drilling props without prop drilling.
    *   **Redux/Zustand:** For large, complex applications with many interdependent state pieces, frequent updates, or when you need advanced debugging tools, middleware for side effects, or a highly predictable state flow. Zustand, in particular, offers a more lightweight and modern approach compared to Redux for many use cases.

3.  **Question:** What is a "Native Module" in React Native, and why would you need to create one?
    **Answer:** A **Native Module** in React Native is a piece of platform-specific code (written in Objective-C/Swift for iOS or Java/Kotlin for Android) that can be invoked from JavaScript. It allows your React Native application to access native device capabilities or third-party SDKs that are not directly exposed by the standard React Native APIs.
    **Why create one:** You would need to create a Native Module when:
    *   You need to access a platform-specific API (e.g., a very specific sensor, a custom hardware interface, or a proprietary SDK) that React Native doesn't provide a JavaScript bridge for.
    *   You need to perform computationally intensive tasks that would block the JavaScript thread, and you want to offload them to the native UI thread or a background thread for better performance.
    *   You are integrating an existing native library or SDK that doesn't have a pre-built React Native wrapper.

4.  **Question:** Explain the concept of the "React Native Bridge" and its role in communication between JavaScript and native code.
    **Answer:** The **React Native Bridge** is the core communication layer that facilitates interaction between the JavaScript thread (where your React Native code runs) and the Native UI thread (where the actual iOS or Android UI components and native modules reside).
    **Role in communication:**
    *   **JavaScript to Native:** When your JavaScript code needs to perform a native operation (e.g., render a native component, access a native module function), it sends a serialized message (usually JSON) across the bridge to the native side. The native side then deserializes the message, executes the corresponding native code, and potentially sends a result back.
    *   **Native to JavaScript:** Conversely, when a native event occurs (e.g., a button press on a native component, a callback from a native module), the native side sends a message back across the bridge to the JavaScript side, which then updates the UI or triggers JavaScript logic.
    The bridge handles serialization/deserialization, queuing of messages, and ensuring that communication is efficient, although it can become a bottleneck if too much data is passed back and forth frequently.

### Section 2: Code Tracing (3 Questions)

1.  **Question:** Consider the following React Native component. Trace the output to the console when the "Increment" button is pressed twice, and then the "Change Name" button is pressed once.

    ```javascript
    import React, { useState, useEffect } from 'react';
    import { View, Text, Button } from 'react-native';

    function MyComponent() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState('Alice');

      useEffect(() => {
        console.log('Effect ran: count is', count);
        return () => {
          console.log('Cleanup ran: count was', count);
        };
      }, [count]);

      useEffect(() => {
        console.log('Name effect ran: name is', name);
      }, [name]);

      console.log('Component rendered: count', count, 'name', name);

      return (
        <View>
          <Text>Count: {count}</Text>
          <Text>Name: {name}</Text>
          <Button title="Increment" onPress={() => setCount(prevCount => prevCount + 1)} />
          <Button title="Change Name" onPress={() => setName('Bob')} />
        </View>
      );
    }
    ```

    **Answer:**

    1.  **Initial Render:**
        *   `Component rendered: count 0 name Alice`
        *   `Effect ran: count is 0`
        *   `Name effect ran: name is Alice`

    2.  **"Increment" button pressed (1st time):**
        *   `Cleanup ran: count was 0` (from previous `count` effect)
        *   `Component rendered: count 1 name Alice`
        *   `Effect ran: count is 1`

    3.  **"Increment" button pressed (2nd time):**
        *   `Cleanup ran: count was 1`
        *   `Component rendered: count 2 name Alice`
        *   `Effect ran: count is 2`

    4.  **"Change Name" button pressed (1st time):**
        *   `Component rendered: count 2 name Bob`
        *   `Name effect ran: name is Bob` (Note: `count` effect does not run again because `count` has not changed.)

2.  **Question:** Given the following `react-navigation` setup, what is the screen stack after the following sequence of actions?
    *   App starts.
    *   Navigate from `Home` to `Details`.
    *   Navigate from `Details` to `Settings`.
    *   Navigate from `Settings` to `Home`.

    ```javascript
    // App.js
    import * as React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { Button, View, Text } from 'react-native';

    function HomeScreen({ navigation }) {
      return (
        <View>
          <Text>Home Screen</Text>
          <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        </View>
      );
    }

    function DetailsScreen({ navigation }) {
      return (
        <View>
          <Text>Details Screen</Text>
          <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
      );
    }

    function SettingsScreen({ navigation }) {
      return (
        <View>
          <Text>Settings Screen</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
      );
    }

    const Stack = createStackNavigator();

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
    ```

    **Answer:**

    1.  **App starts:** `[Home]`
    2.  **Navigate from `Home` to `Details`:** `[Home, Details]`
    3.  **Navigate from `Details` to `Settings`:** `[Home, Details, Settings]`
    4.  **Navigate from `Settings` to `Home`:** `[Home, Details, Settings, Home]` (Using `navigation.navigate('Home')` pushes a *new* instance of `Home` onto the stack, rather than going back to the existing one. To go back, `navigation.goBack()` or `navigation.popToTop()` would be used, or `navigation.replace('Home')` to replace the current screen.)

3.  **Question:** Analyze the following `useEffect` hook. What will be logged to the console, and in what order, if the `value` prop changes from `10` to `20`?

    ```javascript
    import React, { useEffect } from 'react';
    import { Text, View } from 'react-native';

    function MyConditionalEffect({ value }) {
      useEffect(() => {
        if (value > 15) {
          console.log('Value is greater than 15:', value);
        }
        return () => {
          console.log('Cleanup for value:', value);
        };
      }, [value]);

      return (
        <View>
          <Text>Current Value: {value}</Text>
        </View>
      );
    }

    // Usage example:
    // <MyConditionalEffect value={10} />
    // Then later:
    // <MyConditionalEffect value={20} />
    ```

    **Answer:**

    1.  **Initial render with `value={10}`:**
        *   No `console.log('Value is greater than 15:', value);` because `10` is not `> 15`.

    2.  **`value` changes from `10` to `20`:**
        *   `Cleanup for value: 10` (The cleanup function from the previous render, where `value` was `10`, is executed).
        *   `Value is greater than 15: 20` (The effect callback for the new render, where `value` is `20`, is executed, and `20 > 15` is true).

### Section 3: Code Writing (4 Questions)

1.  **Question:** Write a custom React Native hook called `useDebounce` that takes a `value` and a `delay` (in milliseconds) and returns a debounced version of the value. This is useful for delaying expensive operations like search queries.

    **Answer:**

    ```javascript
    import { useState, useEffect } from 'react';

    function useDebounce(value, delay) {
      const [debouncedValue, setDebouncedValue] = useState(value);

      useEffect(() => {
        // Set a timeout to update debounced value after the specified delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        // Cleanup function: clear the timeout if value or delay changes,
        // or if the component unmounts.
        return () => {
          clearTimeout(handler);
        };
      }, [value, delay]); // Re-run effect if value or delay changes

      return debouncedValue;
    }

    // Example Usage:
    /*
    import React, { useState } from 'react';
    import { TextInput, Text, View } from 'react-native';

    function SearchInput() {
      const [searchTerm, setSearchTerm] = useState('');
      const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce by 500ms

      useEffect(() => {
        if (debouncedSearchTerm) {
          // In a real app, you would make an API call here
          console.log('Performing search for:', debouncedSearchTerm);
        }
      }, [debouncedSearchTerm]);

      return (
        <View>
          <TextInput
            placeholder="Search..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={{ borderWidth: 1, padding: 10, margin: 10 }}
          />
          <Text>Searching for: {debouncedSearchTerm}</Text>
        </View>
      );
    }
    */
    ```

2.  **Question:** Implement a simple React Native Context API setup to manage a global `theme` (e.g., 'light' or 'dark') and a function to toggle it. Provide the `ThemeContext.Provider` and an example `useTheme` custom hook for consuming the context.

    **Answer:**

    ```javascript
    import React, { createContext, useState, useContext } from 'react';
    import { View, Text, Button, StyleSheet } from 'react-native';

    // 1. Create the Context
    const ThemeContext = createContext();

    // 2. Create a Provider Component
    export function ThemeProvider({ children }) {
      const [theme, setTheme] = useState('light'); // Initial theme

      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      const themeStyles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme === 'light' ? '#F0F0F0' : '#333333',
        },
        text: {
          color: theme === 'light' ? '#333333' : '#F0F0F0',
        },
        button: {
          backgroundColor: theme === 'light' ? '#007AFF' : '#555555',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        },
        buttonText: {
          color: 'white',
        },
      });

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
          {children}
        </ThemeContext.Provider>
      );
    }

    // 3. Create a custom hook for consuming the context easily
    export function useTheme() {
      const context = useContext(ThemeContext);
      if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
      return context;
    }

    // Example Usage:
    /*
    function AppContent() {
      const { theme, toggleTheme, themeStyles } = useTheme();

      return (
        <View style={themeStyles.container}>
          <Text style={themeStyles.text}>Current Theme: {theme}</Text>
          <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
      );
    }

    export default function App() {
      return (
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      );
    }
    */
    ```

3.  **Question:** Write a React Native component that uses the `Animated` API to fade in a `Text` component from `opacity: 0` to `opacity: 1` over 1000 milliseconds when the component mounts.

    **Answer:**

    ```javascript
    import React, { useRef, useEffect } from 'react';
    import { Animated, Text, View, StyleSheet } from 'react-native';

    function FadeInText({ message }) {
      // Create a ref for the Animated.Value, initialized to 0
      const fadeAnim = useRef(new Animated.Value(0)).current;

      useEffect(() => {
        // Start the animation when the component mounts
        Animated.timing(fadeAnim, {
          toValue: 1, // Animate to opacity 1
          duration: 1000, // Over 1000 milliseconds
          useNativeDriver: true, // Use native driver for better performance
        }).start();
      }, [fadeAnim]); // Dependency array includes fadeAnim to ensure effect runs once

      return (
        <Animated.View // Use Animated.View to apply animation to its style
          style={{
            opacity: fadeAnim, // Bind opacity to the animated value
          }}>
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      );
    }

    const styles = StyleSheet.create({
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
    });

    // Example Usage:
    /*
    export default function App() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FadeInText message="Welcome to React Native!" />
        </View>
      );
    }
    */
    ```

4.  **Question:** You need to display a list of items efficiently in React Native. Write a basic `FlatList` component that renders an array of `data` objects, each with an `id` and a `name` property. Ensure proper `keyExtractor` usage and render each item as a `Text` component.

    **Answer:**

    ```javascript
    import React from 'react';
    import { FlatList, Text, View, StyleSheet } from 'react-native';

    const DATA = [
      { id: '1', name: 'Item One' },
      { id: '2', name: 'Item Two' },
      { id: '3', name: 'Item Three' },
      { id: '4', name: 'Item Four' },
      { id: '5', name: 'Item Five' },
    ];

    function MyFlatList() {
      // Function to render each individual item
      const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      );

      return (
        <FlatList
          data={DATA} // The array of data to display
          renderItem={renderItem} // The function to render each item
          keyExtractor={item => item.id} // Extracts a unique key for each item
          ListHeaderComponent={() => <Text style={styles.header}>My Dynamic List</Text>} // Optional header
          ListFooterComponent={() => <Text style={styles.footer}>End of List</Text>} // Optional footer
        />
      );
    }

    const styles = StyleSheet.create({
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
      },
      title: {
        fontSize: 18,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      footer: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: '#666',
      },
    });

    // Example Usage:
    /*
    export default function App() {
      return (
        <View style={{ flex: 1, paddingTop: 50 }}>
          <MyFlatList />
        </View>
      );
    }
    */
    ```

### Section 4: Design and Debugging Problems (3 Questions)

1.  **Question:** You are building a complex React Native application with many deeply nested components. Several components need to access and update a user's profile information (e.g., `username`, `email`, `avatarUrl`). Currently, you are passing these props down through multiple levels, leading to "prop drilling."
    **Problem:** Describe how prop drilling negatively impacts your application and propose a better solution using a concept learned in this course.
    **Answer:**
    **Negative Impact of Prop Drilling:**
    *   **Reduced Readability & Maintainability:** It becomes difficult to trace where props originate and where they are used, especially as the component tree grows.
    *   **Increased Boilerplate Code:** Intermediate components that don't directly use the props still need to accept and pass them down, adding unnecessary code.
    *   **Refactoring Challenges:** Changing a prop's name or structure at the source requires updating every intermediate component that passes it down, increasing the risk of errors.
    *   **Performance Concerns (minor):** While not the primary issue, unnecessary re-renders can occur if intermediate components re-render due to prop changes they don't directly use.

    **Proposed Solution:** The **React Context API** is an excellent solution for this problem.
    **Implementation Idea:**
    1.  **Create a `UserContext`:** Define a context using `createContext` that will hold the user's profile data and potentially functions to update it.
    2.  **Create a `UserProvider` Component:** This component would wrap the top-level components that need access to the user data. It would manage the user state (e.g., using `useState` or `useReducer`) and pass the `user` object and `updateUser` function down through the `UserContext.Provider`.
    3.  **Consume the Context with `useContext`:** Any deeply nested component needing user data can directly access it using the `useContext(UserContext)` hook, without requiring props to be passed down from its parents.

    This approach centralizes the user state management and makes it accessible to any consumer component, eliminating prop drilling and improving code organization.

2.  **Question:** A user reports that your React Native app, which displays a long list of images in a `FlatList`, feels sluggish and sometimes freezes when scrolling quickly on older devices.
    **Problem:** Identify two common performance bottlenecks in this scenario and suggest specific React Native techniques to mitigate them.
    **Answer:**
    **Common Performance Bottlenecks:**
    1.  **Excessive Re-renders of List Items:** If the `FlatList` items are complex components and they re-render even when their data hasn't changed, it can significantly slow down scrolling. This often happens if the parent component re-renders, causing all children to re-render, or if props (especially functions or objects) are not memoized.
    2.  **Large Image Sizes/Inefficient Image Loading:** Loading many high-resolution images simultaneously can consume a lot of memory and CPU, leading to UI freezes. If images are not properly resized, cached, or loaded asynchronously, performance suffers.

    **Mitigation Techniques:**
    1.  **For Excessive Re-renders:**
        *   **`React.memo` for List Items:** Wrap your `ListItem` component with `React.memo`. This will prevent the `ListItem` from re-rendering if its props haven't changed.
        *   **`useCallback` and `useMemo`:** If your `ListItem` receives functions (e.g., `onPress`) or complex objects as props, use `useCallback` to memoize functions and `useMemo` to memoize objects. This ensures that the props passed to `React.memo` wrapped components are referentially stable, allowing `React.memo` to work effectively.
        *   **`getItemLayout`:** For `FlatList`, providing `getItemLayout` can significantly improve performance by allowing `FlatList` to skip measuring items and directly jump to the correct scroll position. This requires all items to have a fixed height.
        *   **`initialNumToRender`, `maxToRenderPerBatch`, `windowSize`:** Adjust these `FlatList` props to control how many items are rendered initially and in subsequent batches, and how many items are rendered outside the visible area.

    2.  **For Inefficient Image Loading:**
        *   **`FastImage` Library:** Use a specialized image library like `react-native-fast-image` instead of the default `Image` component. `FastImage` offers superior caching, preloading, and GIF support, leading to much smoother image loading and display.
        *   **Image Optimization:** Ensure images are optimized for mobile (appropriate resolution and compression). Consider using image CDNs that can dynamically resize images.
        *   **Lazy Loading/Virtualization (Built-in `FlatList`):** `FlatList` inherently provides virtualization, only rendering items that are currently visible or near the viewport. Ensure you're using it correctly.
        *   **Placeholder Images:** Display placeholders while images are loading to provide a better user experience and prevent layout shifts.

3.  **Question:** You've integrated a third-party native module (e.g., for Bluetooth communication) into your React Native project. After running `npx react-native run-ios`, the app builds successfully but crashes immediately upon launching, with an error message related to "Native module cannot be null."
    **Problem:** What are the most common reasons for this specific error, and what steps would you take to debug and resolve it?
    **Answer:**
    **Common Reasons for "Native module cannot be null" Error:**
    This error typically means that the JavaScript side is trying to access a native module that hasn't been properly linked or initialized on the native side.
    1.  **Incorrect Manual Linking:** If the module requires manual linking (for older React Native versions or complex modules), the steps (e.g., adding header search paths, linking libraries, adding files to "Build Phases" in Xcode, or modifying `MainApplication.java` for Android) might have been missed or done incorrectly.
    2.  **Auto-linking Issues:** While `react-native` CLI often handles auto-linking, sometimes it fails or requires a clean. This can happen due to caching issues or specific module configurations.
    3.  **Podfile/Gradle Sync Issues:** For iOS, `pod install` might not have been run, or it failed. For Android, Gradle might not have synced properly after adding the module.
    4.  **Incorrect Module Name:** The JavaScript code might be trying to import the native module with a different name than what's exposed on the native side (e.g., `NativeModules.MyBluetoothModule` vs. `NativeModules.BluetoothManager`).
    5.  **Target Membership (iOS):** The native files (`.m`, `.swift`, `.java`, `.kt`) might not be included in the target's "Compile Sources" or "Target Membership" settings in Xcode/Android Studio.
    6.  **Missing Permissions/Capabilities:** Less common for "null" but can cause crashes if the module tries to access hardware without necessary permissions.

    **Debugging and Resolution Steps:**
    1.  **Clean and Rebuild:**
        *   **iOS:** `cd ios && pod deintegrate && rm -rf Pods && rm Podfile.lock && cd .. && rm -rf node_modules && npm install && cd ios && pod install && cd .. && npx react-native run-ios` (or `yarn`). Also, clean Xcode build folder (`Product > Clean Build Folder`).
        *   **Android:** `cd android && ./gradlew clean && cd .. && npx react-native run-android`.
    2.  **Verify Auto-linking:**
        *   Check `ios/Podfile` and `android/app/build.gradle` to see if the module's dependencies are correctly listed (usually under `use_native_modules!` for iOS or `apply from: "../../node_modules/..."` for Android).
        *   Run `npx react-native config` to see the detected native modules and their paths.
    3.  **Manual Linking (if necessary/failed auto-linking):**
        *   **Consult Module Documentation:** Refer to the third-party module's `README.md` for specific manual linking instructions.
        *   **iOS (Xcode):**
            *   Ensure the `.xcodeproj` or `.xcworkspace` is open.
            *   Add the module's `.xcodeproj` to your project's Libraries.
            *   Add `lib[ModuleName].a` to "Link Binary With Libraries" in "Build Phases."
            *   Ensure the module's files are in "Compile Sources."
        *   **Android (Android Studio):**
            *   Ensure `new [ModuleName]Package()` is added to `getPackages()` in `MainApplication.java` (or `MainApplication.kt`).
            *   Add `project(':react-native-[module-name]')` to `settings.gradle`.
            *   Add `implementation project(':react-native-[module-name]')` to `dependencies` in `app/build.gradle`.
    4.  **Check JavaScript Import:** Double-check that the `NativeModules` key used in JavaScript (`NativeModules.MyModule`) exactly matches the name exposed by the native code (e.g., `getName()` method in Android, or `RCT_EXPORT_MODULE()` macro in iOS).
    5.  **Inspect Native Logs:** Use Xcode's console or Android Studio's Logcat to view native crash logs. These logs often provide more specific details about *why* the module failed to load. Look for "unrecognized selector," "class not found," or similar errors.
    6.  **Permissions:** Confirm that any necessary permissions (e.g., Bluetooth, Camera) are declared in `Info.plist` (iOS) and `AndroidManifest.xml` (Android). While less likely to cause a "null" error, missing permissions can cause immediate crashes when the module attempts to use a restricted API.

---

## Course Conclusion

Congratulations on completing "React Native Advanced Concepts"! You have embarked on a journey that has significantly deepened your understanding and practical skills in building sophisticated mobile applications with React Native. You've moved beyond the basics, mastering techniques that enable you to create performant, scalable, and highly interactive user experiences.

You are now equipped to tackle complex challenges in mobile development. You can confidently implement advanced navigation patterns, manage application state effectively using the Context API and potentially other libraries, and optimize your app's performance to ensure a smooth user experience. Your skills now include integrating with native modules, creating engaging animations, and handling local data persistence, making you a more versatile and capable React Native developer.

### Where to go next

The world of mobile development is constantly evolving, and continuous learning is key. Here are some recommended next steps and resources to further enhance your expertise:

1.  **Deep Dive into State Management:** While you've explored the Context API, consider dedicating time to master a dedicated state management library like **Redux Toolkit** or **Zustand**. These are widely used in larger applications and offer powerful patterns for managing complex global state.
    *   **Resource:** Official Redux Toolkit documentation, Zustand GitHub page and tutorials.
2.  **Mastering Animations with React Native Reanimated:** The `Animated` API is powerful, but `React Native Reanimated` offers even more control, performance, and flexibility for complex gestures and animations, running entirely on the native UI thread.
    *   **Resource:** Official React Native Reanimated documentation, dedicated online courses on Reanimated.
3.  **Explore Native Module Development:** If you're interested in bridging the gap between JavaScript and native code, delve deeper into writing custom native modules in Swift/Objective-C for iOS and Kotlin/Java for Android. This opens up possibilities for integrating with any native SDK or hardware.
    *   **Resource:** React Native official documentation on Native Modules, iOS/Android native development tutorials.
4.  **Build and Contribute to Open Source:** The best way to solidify your learning is by building more projects. Consider contributing to existing open-source React Native libraries or starting your own. This exposes you to diverse codebases and collaborative development.
    *   **Resource:** GitHub, React Native Community projects.
5.  **Continuous Integration/Continuous Deployment (CI/CD):** Learn about automating your build, test, and deployment processes for React Native apps using tools like Fastlane, GitHub Actions, or Azure DevOps. This is crucial for professional app development.
    *   **Resource:** Fastlane documentation, CI/CD platform documentation.

Keep practicing, keep building, and don't hesitate to engage with the vibrant React Native community. Your journey as an advanced React Native developer has just begun, and the possibilities are limitless. We at Cohortia are excited to see the incredible applications you will create!

---


> End of Syllabus: React Native Advanced Concepts
> Course ID: react-native-advanced-concepts
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Mobile App Development
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
