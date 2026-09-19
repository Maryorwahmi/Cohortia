# Syllabus: ROS for Beginners

> **Course ID:** `ros-for-beginners`  
> **Title:** ROS for Beginners  
> **Provider:** Cohortia  
> **Original reference:** Udemy (Anis Koubaa and others)  
> **Platform:** Cohortia  
> **Level:** Beginner  
> **Type:** Course  
> **Duration:** 6–8 weeks (self-paced, ~5–7 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.udemy.com/course/ros-essentials/)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** ROS, robotics middleware, Python, C++, nodes, topics, messages, services, actions, parameters, launch files, URDF, Gazebo, RViz, robot simulation, turtlebot  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from Udemy, Open Robotics, the ROS community, and other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

The Robot Operating System (ROS) is not actually an operating system in the traditional sense. It is a flexible, open-source framework that sits between your robot's hardware and its high-level software, providing the communication infrastructure, libraries, and tools that make building complex robots manageable. ROS is the de facto standard in robotics research and industry, used by organizations from NASA and Amazon to small robotics startups. Whether you are building a drone, a robotic arm, a self-driving car, or a warehouse automation robot, ROS provides the middleware that lets sensors, actuators, algorithms, and user interfaces work together seamlessly.

This course teaches you ROS from the ground up. You will learn how to install ROS, create your own ROS packages, write nodes in Python and C++, and communicate between nodes using topics, services, and actions. You will use ROS's powerful debugging and visualization tools to understand what your robot is doing in real time. You will simulate robots in Gazebo, visualize their sensor data in RViz, and build complete applications that integrate multiple components. By the end of the course, you will have built several working ROS projects including a simulated autonomous robot, a controlled drone, and a maze-navigating robot.

This course is designed for beginners. You do not need prior robotics experience, but you should be comfortable with basic programming (Python or C++). If you have completed the Arduino Programming or Raspberry Pi courses in the Cohortia catalog, this course will show you how to scale your robot projects using ROS's professional-grade architecture. ROS is the bridge between hobbyist robotics and professional robotics — mastering it is essential for anyone who wants to build robots that are modular, scalable, and maintainable.

By the end of this course, you will be able to:

1. Explain what ROS is, how it works, and when to use it in robot development.
2. Install ROS on Ubuntu and configure a catkin workspace for development.
3. Create ROS packages and write nodes in both Python and C++.
4. Implement publisher-subscriber communication using ROS topics.
5. Implement request-response communication using ROS services.
6. Implement long-running task communication using ROS actions with feedback and preemption.
7. Use the ROS Parameter Server to configure nodes dynamically without changing code.
8. Write ROS launch files to start multiple nodes and set parameters with a single command.
9. Use ROS debugging tools including roscore, rosrun, rostopic, rosservice, rqt_graph, RViz, and rosbag.
10. Simulate robots in Gazebo and visualize them in RViz.
11. Build a complete multi-node ROS application with coordinated behavior.
12. Deploy ROS code from simulation to real hardware.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to ROS and Environment Setup | 1 | 5–7 |
| 2 | ROS Core Concepts: Nodes, Topics, and Messages | 1–2 | 7–10 |
| 3 | ROS Services and Client-Server Communication | 1 | 5–7 |
| 4 | ROS Actions for Long-Running Tasks | 1 | 5–7 |
| 5 | ROS Parameters, Launch Files, and System Integration | 1 | 5–7 |
| 6 | ROS Tools, Debugging, and Visualization | 1 | 5–7 |
| 7 | Robot Simulation and Capstone Projects | 1–2 | 7–10 |

---

## Module 1: Introduction to ROS and Environment Setup

> **Goal:** Understand what ROS is, why it matters, and how to set up a complete ROS development environment on Ubuntu.

---

### Chapter 1.1 — What Is ROS and Why Use It?

#### Learning objectives
- Define ROS and distinguish it from a traditional operating system.
- Explain the problems ROS solves: communication, modularity, reusability, and scalability.
- Identify the core components of the ROS ecosystem: nodes, topics, messages, services, actions, and the parameter server.
- Decide when ROS is appropriate for a project and when a simpler custom approach is better.

#### Detailed lesson content

ROS stands for **Robot Operating System**, but that name is misleading. ROS is not an operating system like Linux, Windows, or macOS. It is a **middleware** — a software layer that sits on top of a real operating system (almost always Ubuntu Linux) and provides the communication infrastructure, libraries, and tools that robot developers need. ROS handles the "plumbing" of robotics so that you can focus on the "brain" — the algorithms, behaviors, and user interfaces that make your robot unique.

Imagine you are building a mobile robot with a camera, a LiDAR sensor, wheel motors, and a joystick controller. Without ROS, you would have to write custom code to connect the camera driver to your object detection algorithm, send the detection results to your navigation algorithm, command the motors based on the navigation output, and display everything on a screen. Each of these connections would require you to design a communication protocol, handle data serialization, manage network sockets, and deal with synchronization. If you wanted to replace the camera with a different model, you would have to rewrite all that connection code.

ROS solves this problem by providing a **standardized communication framework**. In ROS, each piece of functionality is a **node** — an independent program that does one thing. The camera driver is a node. The object detection algorithm is a node. The motor controller is a node. The joystick interface is a node. Nodes communicate with each other through **topics** (for streaming data), **services** (for request-response interactions), and **actions** (for long-running tasks with feedback). Because the communication is standardized, you can replace the camera node with a different camera node without changing any other code, as long as the new node publishes the same type of data on the same topic.

This **modularity** is the most important benefit of ROS. It allows you to:
- **Reuse code:** ROS has a vast ecosystem of open-source packages. Need to navigate a robot? Use the `move_base` package. Need to map an environment? Use `gmapping`. Need to plan a robot arm trajectory? Use `MoveIt`. You do not need to reinvent these algorithms.
- **Test in simulation:** ROS integrates with Gazebo, a 3D physics simulator. You can develop and test your robot's behavior in simulation before deploying it on physical hardware, saving time and preventing damage.
- **Scale up:** As your robot becomes more complex, you simply add more nodes. ROS handles the communication between 2 nodes and 200 nodes with the same architecture.
- **Collaborate:** Because ROS is a standard, teams can work on different parts of a robot independently. The perception team works on the camera and LiDAR nodes. The planning team works on the navigation node. The control team works on the motor node. As long as they agree on the topic names and message types, the pieces fit together.

The core components of ROS are:
- **ROS Master:** A central registry that keeps track of all nodes, topics, services, and parameters. When a node starts, it registers itself with the Master. When a node wants to subscribe to a topic, it asks the Master which node is publishing that topic. The Master is started with the `roscore` command.
- **Nodes:** Independent programs that perform computation. A node might read a sensor, process images, plan paths, or control motors. Nodes are written in Python or C++.
- **Topics:** Named buses over which nodes exchange messages. A topic is a one-way stream of data. Publishers send messages to a topic; subscribers receive messages from a topic. Multiple publishers and subscribers can use the same topic.
- **Messages:** Data structures that define the type of information being sent on a topic. ROS provides standard message types for common data: `geometry_msgs/Twist` for velocity commands, `sensor_msgs/LaserScan` for LiDAR data, `std_msgs/String` for text, and many more. You can also define custom message types.
- **Services:** A synchronous request-response mechanism. A service client sends a request to a service server, which processes the request and sends back a response. Services are used for quick, discrete tasks: "get the current battery level," "toggle the LED," "compute the inverse kinematics."
- **Actions:** An asynchronous mechanism for long-running tasks. An action client sends a goal to an action server, which works on the task and sends periodic feedback. The client can cancel the goal at any time. Actions are used for tasks like "move the robot to position (5, 3)," "grasp the object," or "take off and hover at 10 meters."
- **Parameter Server:** A shared dictionary that stores configuration values. Nodes can read and write parameters at runtime. Parameters are used for settings that should be configurable without recompiling code: robot name, sensor frequency, PID gains, simulation mode.

**When to use ROS:** ROS is ideal for complex robots with multiple sensors, actuators, and algorithms that need to communicate. If you are building a robot with more than one microcontroller, or if you need to integrate existing algorithms (SLAM, navigation, perception), ROS is the right choice. ROS is also the standard for robotics research, so if you want to publish papers or collaborate with other researchers, ROS is essential.

**When NOT to use ROS:** For very simple robots with a single microcontroller and one sensor, ROS may be overkill. If you are building a simple line-following robot with an Arduino, ROS adds unnecessary complexity. Similarly, for real-time-critical systems with hard timing constraints (e.g., motor control loops that must run at 1 kHz), ROS's publish-subscribe latency may be too high, and you may need a dedicated real-time system like FreeRTOS or a custom ROS-agnostic control loop.

**ROS versions:** ROS 1 (Noetic, Melodic, Kinetic) has been the standard for over a decade. ROS 2 (Humble, Foxy, Galactic) is the next-generation version with improved real-time support, security, and distributed computing. This course focuses on ROS 1 because it is the most widely used and has the largest package ecosystem, but the concepts are largely transferable to ROS 2.

#### Key concepts
- ROS as middleware, not an operating system
- Modularity, reusability, scalability, and simulation
- ROS Master and `roscore`
- Nodes, topics, messages, services, actions, parameter server
- Standard message types: geometry_msgs, sensor_msgs, std_msgs
- When to use ROS vs. when a simpler approach is better
- ROS 1 vs. ROS 2
- The ROS ecosystem and package reuse

#### Hands-on activity
Write a one-page project specification for a robot you want to build (or imagine building). Identify at least 5 distinct functionalities that would be separate nodes in ROS: e.g., camera driver, object detector, navigator, motor controller, user interface. For each pair of nodes, specify whether they should communicate via topic (streaming), service (request-response), or action (long-running task). Draw a diagram showing the nodes as boxes and the communication channels as arrows labeled with the type (topic, service, action). Submit your diagram and justify each communication choice.

#### Assessment idea
Ask: "You are building a warehouse robot that must navigate autonomously, avoid obstacles, and report its battery level to a central server. Which ROS communication mechanisms would you use for: (1) streaming LiDAR data to the navigation algorithm, (2) requesting the current battery level, (3) commanding the robot to move to a specific location, and (4) reporting that the robot has arrived?" Answer: (1) Topic — LiDAR data is a continuous stream. (2) Service — battery level is a quick, discrete request-response. (3) Action — moving to a location is a long-running task with feedback and the possibility of cancellation. (4) Topic or Service — arrival notification could be a topic (published once) or a service response (if the action returns it). Then ask: "Why might you choose a custom embedded system over ROS for a simple motor controller running at 1 kHz?" Answer: ROS adds communication overhead and latency that may violate the 1 ms timing constraint. A dedicated real-time loop on the microcontroller is more appropriate for hard real-time control.

#### AI generation note
Create an 8-minute animated explainer video. Show a robot as a collection of boxes (nodes) connected by pipes (topics, services, actions). Show the camera node sending a stream of images to the vision node (topic). Show the user interface node asking the battery node for the charge level (service). Show the navigation node commanding the robot to move to a goal, with progress feedback (action). Show the ROS Master as a central switchboard connecting the nodes. Show a Gazebo simulation window with a robot moving in a 3D world. Show the RViz window with sensor data overlaid. End with a reflection prompt: "What robot would you build, and which ROS components would you use?"

---

### Chapter 1.2 — Installing ROS and Setting Up the Development Environment

#### Learning objectives
- Install ROS 1 Noetic on Ubuntu 20.04 (or ROS 1 Melodic on Ubuntu 18.04) using the official repositories.
- Configure the ROS environment, including `~/.bashrc` and workspace setup.
- Create a catkin workspace and understand its directory structure (src, build, devel).
- Verify the installation by running `roscore` and the `turtlesim` simulator.

#### Detailed lesson content

ROS runs on Ubuntu Linux. While ROS 1 can be installed on other operating systems with varying degrees of difficulty, Ubuntu is the officially supported platform and the one used by virtually all ROS developers. For this course, we will use **ROS 1 Noetic Ninjemys** on **Ubuntu 20.04 LTS**. Noetic is the final release of ROS 1 and is the most stable and widely supported version.

**System requirements:**
- A computer with Ubuntu 20.04 installed (either as the main OS, a dual-boot, or a virtual machine like VirtualBox or VMware).
- At least 4 GB of RAM (8 GB recommended for Gazebo simulation).
- At least 20 GB of free disk space.
- An internet connection for downloading packages.

**Installation steps:**

1. **Configure Ubuntu to accept ROS packages:**
   ```bash
   sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
   ```

2. **Add the ROS key:**
   ```bash
   sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
   ```

3. **Update package lists and install ROS:**
   ```bash
   sudo apt update
   sudo apt install ros-noetic-desktop-full
   ```
   The `desktop-full` installation includes ROS, the robot libraries, Gazebo, RViz, and many tools. This download is approximately 2 GB.

4. **Initialize rosdep:**
   ```bash
   sudo rosdep init
   rosdep update
   ```
   `rosdep` is a tool that automatically installs the system dependencies required by ROS packages.

5. **Source the ROS environment:**
   ```bash
   echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
   source ~/.bashrc
   ```
   This command adds the ROS environment variables to your shell configuration, so they are available every time you open a terminal.

6. **Install additional tools:**
   ```bash
   sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
   ```

**Creating a catkin workspace:**
A **catkin workspace** is the directory where you build and develop your ROS packages. It has a specific structure:

```
catkin_ws/
├── src/          # Source code: your packages and cloned repositories
├── build/        # Build files: generated by cmake during compilation
├── devel/        # Development environment: contains setup.bash, compiled libraries, generated messages
└── install/      # Installation directory (optional, for distribution)
```

To create a workspace:

```bash
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws
catkin_make
```

The `catkin_make` command builds the workspace. It compiles any C++ code, generates Python message bindings, and creates the `build/` and `devel/` directories. After building, you must source the workspace's setup file:

```bash
source ~/catkin_ws/devel/setup.bash
```

To make this automatic, add it to `~/.bashrc`:

```bash
echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc
```

**Important:** Always source the workspace setup after `catkin_make` and before running any ROS nodes. The setup file adds your workspace's packages to the ROS package path.

**Verifying the installation:**

1. Open a terminal and run:
   ```bash
   roscore
   ```
   You should see messages indicating that the ROS Master has started, including the ROS Master URI (usually `http://localhost:11311/`).

2. Open a second terminal and run the turtlesim simulator:
   ```bash
   rosrun turtlesim turtlesim_node
   ```
   A window should appear with a turtle in the center.

3. Open a third terminal and run the teleop controller:
   ```bash
   rosrun turtlesim turtle_teleop_key
   ```
   Use the arrow keys to move the turtle around. This confirms that ROS is installed correctly, that nodes can communicate with each other, and that the ROS Master is functioning.

**Troubleshooting common issues:**
- **"Command not found" for `roscore`:** The ROS environment is not sourced. Run `source /opt/ros/noetic/setup.bash` or check your `~/.bashrc`.
- **"Could not find package" when building:** The workspace setup is not sourced, or the package is in the wrong location. Packages must be in the `src/` directory.
- **Gazebo crashes or runs slowly:** Gazebo requires a GPU with OpenGL support. If running in a virtual machine, enable 3D acceleration or reduce the simulation complexity.
- **Port 11311 already in use:** Another `roscore` is running. Either use the existing one or kill it with `killall rosmaster`.

#### Key concepts
- ROS 1 Noetic on Ubuntu 20.04
- APT repositories, keys, and package installation
- `rosdep` for dependency management
- `~/.bashrc` and environment sourcing
- Catkin workspace structure: src, build, devel
- `catkin_make` for building the workspace
- `roscore` as the ROS Master
- `rosrun` for executing nodes
- `turtlesim` as a verification tool
- Troubleshooting common installation issues

#### Hands-on activity
Follow the installation steps above to install ROS 1 Noetic on your Ubuntu system. Create a catkin workspace at `~/catkin_ws`. Verify the installation by running `roscore`, `turtlesim_node`, and `turtle_teleop_key`. Move the turtle around using the arrow keys. Then, use the `rosnode list` command to see all running nodes, and `rostopic list` to see all active topics. Use `rostopic echo /turtle1/cmd_vel` to observe the velocity commands being sent when you press the arrow keys. Document the output of each command in a text file.

#### Assessment idea
Ask: "After running `catkin_make`, why must you run `source ~/catkin_ws/devel/setup.bash` before running your own ROS nodes?" Answer: `catkin_make` compiles the code and generates the `devel/` directory, which contains the compiled libraries, Python modules, and message definitions. The `setup.bash` script adds these to the environment variables (`PYTHONPATH`, `ROS_PACKAGE_PATH`, `LD_LIBRARY_PATH`) so that ROS can find your packages and their generated code. Without sourcing it, ROS will not know your packages exist. Then ask: "What is the purpose of `rosdep`, and when do you use it?" Answer: `rosdep` is a command-line tool that detects and installs the system dependencies (Ubuntu packages) required by ROS packages. You use it when you clone a new package from a repository or when you add dependencies to your package's `package.xml` file. It ensures that all required libraries are installed before you try to build.

#### AI generation note
Create a 10-minute screen recording tutorial. Show the Ubuntu terminal with the installation commands being typed. Show the progress bar during the `apt install` command. Show the catkin workspace being created with `mkdir` and `catkin_make`. Show the `~/.bashrc` file being edited with `echo`. Show `roscore` starting with the ROS Master URI. Show `turtlesim` launching and the turtle appearing. Show the teleop node running and the turtle moving. Show the terminal commands (`rosnode list`, `rostopic list`, `rostopic echo`) with their outputs. Include a troubleshooting segment showing the "command not found" error and the fix (sourcing setup.bash). Use annotated callouts for each command.

---

### Chapter 1.3 — Creating Your First ROS Package and Node

#### Learning objectives
- Create a ROS package using `catkin_create_pkg` with the correct dependencies.
- Understand the structure of a ROS package: `package.xml`, `CMakeLists.txt`, `src/`, `scripts/`, `launch/`, `msg/`, `srv/`.
- Write a simple ROS node in Python that initializes with `rospy.init_node()`.
- Write a simple ROS node in C++ that initializes with `ros::init()` and uses `ros::NodeHandle`.
- Build and run the nodes using `rosrun` and `catkin_make`.

#### Detailed lesson content

A **ROS package** is the basic unit of organization in ROS. It contains all the files needed for a specific piece of functionality: source code, message definitions, launch files, configuration files, and documentation. Packages are placed in the `src/` directory of your catkin workspace. Understanding how to create and structure a package is the first step in ROS development.

To create a package, use the `catkin_create_pkg` command:

```bash
cd ~/catkin_ws/src
catkin_create_pkg my_first_robot std_msgs geometry_msgs roscpp rospy
```

This creates a package named `my_first_robot` with dependencies on `std_msgs`, `geometry_msgs`, `roscpp` (C++ client library), and `rospy` (Python client library). The dependencies are listed in the `package.xml` file, which tells ROS and `rosdep` what other packages are needed.

The package directory structure:

```
my_first_robot/
├── package.xml        # Package metadata: name, version, dependencies, description
├── CMakeLists.txt     # Build instructions for C++ code and message generation
├── src/               # C++ source files
├── scripts/           # Python executable scripts
├── include/           # C++ header files
├── launch/            # Launch files (XML files that start multiple nodes)
├── config/            # Configuration files (YAML, URDF, etc.)
├── msg/               # Custom message definitions
├── srv/               # Custom service definitions
├── action/            # Custom action definitions
└── build/             # Temporary build files (created by catkin_make)
```

The `package.xml` file is the package's manifest. It contains:
- The package name, version, and description.
- The maintainer's name and email.
- The license (e.g., MIT, BSD, Apache).
- Build dependencies (`<build_depend>`): packages needed to compile this package.
- Run dependencies (`<exec_depend>`): packages needed to run this package.

```xml
<?xml version="1.0"?>
<package format="2">
  <name>my_first_robot</name>
  <version>0.0.1</version>
  <description>My first ROS robot package</description>
  <maintainer email="you@example.com">Your Name</maintainer>
  <license>MIT</license>
  
  <build_depend>roscpp</build_depend>
  <build_depend>rospy</build_depend>
  <build_depend>std_msgs</build_depend>
  
  <exec_depend>roscpp</exec_depend>
  <exec_depend>rospy</exec_depend>
  <exec_depend>std_msgs</exec_depend>
</package>
```

The `CMakeLists.txt` file tells `catkin_make` how to build the package. It is more complex than `package.xml` because it specifies compilation flags, executable targets, message generation rules, and installation instructions. For a simple package with only Python nodes, the `CMakeLists.txt` can be minimal. For packages with C++ nodes, it must specify the executable name, source files, and linked libraries.

**Writing a Python node:**

```python
#!/usr/bin/env python3
import rospy

if __name__ == '__main__':
    rospy.init_node('my_first_python_node', anonymous=True)
    rospy.loginfo("Hello, ROS! This is my first Python node.")
    rospy.sleep(2.0)
    rospy.loginfo("Node is shutting down.")
```

Save this as `scripts/my_first_node.py` and make it executable:

```bash
chmod +x scripts/my_first_node.py
```

The `anonymous=True` parameter appends a random string to the node name, allowing multiple instances of the same node to run simultaneously without name conflicts. This is useful when you have multiple sensors of the same type.

**Writing a C++ node:**

```cpp
#include <ros/ros.h>

int main(int argc, char** argv) {
    ros::init(argc, argv, "my_first_cpp_node");
    ros::NodeHandle nh;
    
    ROS_INFO("Hello, ROS! This is my first C++ node.");
    ros::Duration(2.0).sleep();
    ROS_INFO("Node is shutting down.");
    
    return 0;
}
```

Save this as `src/my_first_node.cpp`. To build it, add the following to `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 2.8.3)
project(my_first_robot)

find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
)

catkin_package()

include_directories(
  ${catkin_INCLUDE_DIRS}
)

add_executable(my_first_cpp_node src/my_first_node.cpp)
target_link_libraries(my_first_cpp_node ${catkin_LIBRARIES})
```

Then build and run:

```bash
cd ~/catkin_ws
catkin_make
source devel/setup.bash

# Run the Python node
rosrun my_first_robot my_first_node.py

# Run the C++ node
rosrun my_first_robot my_first_cpp_node
```

**Key points about ROS node initialization:**
- `rospy.init_node()` and `ros::init()` must be called before any other ROS function. They register the node with the ROS Master.
- The node name must be unique across the ROS system. If two nodes have the same name, the second one will cause the first to be deregistered (unless `anonymous=True` is used in Python).
- `ros::NodeHandle` (C++) is the primary interface for creating publishers, subscribers, services, and reading parameters. In Python, the global functions (`rospy.Publisher`, `rospy.Subscriber`) are used directly.

#### Key concepts
- ROS package as the unit of organization
- `catkin_create_pkg` and dependency specification
- `package.xml`: manifest with build and exec dependencies
- `CMakeLists.txt`: build instructions for C++ and messages
- Package directory structure: src, scripts, launch, msg, srv, config
- Python node: `rospy.init_node()`, `rospy.loginfo()`, `anonymous=True`
- C++ node: `ros::init()`, `ros::NodeHandle`, `ROS_INFO()`
- `catkin_make` and sourcing `devel/setup.bash`
- `rosrun` for executing nodes
- Node name uniqueness and anonymous nodes

#### Hands-on activity
Create a new ROS package called `my_first_robot` with dependencies on `roscpp`, `rospy`, and `std_msgs`. Write a Python node in `scripts/hello_ros.py` that prints "Hello, ROS!" and then counts down from 5 to 1, printing each number with a 1-second delay. Write a C++ node in `src/hello_ros.cpp` that does the same thing. Update the `CMakeLists.txt` to build the C++ node. Build the package with `catkin_make`. Run both nodes using `rosrun` and verify the output. Then, modify the Python node to use `anonymous=True` and run two instances simultaneously. Use `rosnode list` to verify that both instances have unique names.

#### Assessment idea
Ask: "What is the difference between `build_depend` and `exec_depend` in `package.xml`?" Answer: `build_depend` specifies packages needed during compilation (e.g., C++ header files, message generation). `exec_depend` specifies packages needed at runtime (e.g., Python libraries, executable nodes). A package may be both a build dependency and an exec dependency (e.g., `std_msgs` is needed to generate message headers at build time and to use the messages at runtime). Then ask: "Why does the C++ node need to be compiled with `catkin_make`, while the Python node does not?" Answer: C++ is a compiled language — the source code must be translated into machine code before it can run. `catkin_make` invokes `cmake` and `make` to compile the C++ source. Python is an interpreted language — the source code is executed directly by the Python interpreter. The Python script only needs to be made executable (`chmod +x`) and placed in the `scripts/` directory.

#### AI generation note
Create a 10-minute screen recording tutorial. Show the terminal with `catkin_create_pkg` being executed. Show the generated `package.xml` and `CMakeLists.txt` files. Show the Python script being written in a text editor and made executable with `chmod`. Show the C++ source being written and the `CMakeLists.txt` being edited. Show `catkin_make` compiling the C++ code with output messages. Show `rosrun` executing both the Python and C++ nodes. Show `rosnode list` displaying the running nodes. Show two instances of the Python node with `anonymous=True` and their unique names in `rosnode list`. Use annotated callouts for each file and command.

---

## Module 2: ROS Core Concepts: Nodes, Topics, and Messages

> **Goal:** Master the publish-subscribe communication pattern that is the heart of ROS. Learn to create publishers, subscribers, and custom message types in both Python and C++.

---

### Chapter 2.1 — Understanding ROS Topics and Publishers

#### Learning objectives
- Explain the publish-subscribe pattern and how topics implement it in ROS.
- Write a ROS publisher in Python that publishes messages at a fixed rate.
- Write a ROS publisher in C++ that publishes messages at a fixed rate.
- Use `rostopic` command-line tools to inspect, echo, and publish to topics.
- Understand message types and how to find documentation for standard messages.

#### Detailed lesson content

The **publish-subscribe pattern** is the most common communication model in ROS. It is a one-to-many, asynchronous messaging pattern: a publisher sends messages to a topic without knowing who (if anyone) is listening, and subscribers receive messages from a topic without knowing who sent them. The ROS Master handles the connection: when a subscriber registers for a topic, the Master tells it which nodes are publishing that topic, and the subscriber establishes a direct TCP connection with each publisher. This direct connection means that once established, messages flow directly from publisher to subscriber without going through the Master, making the system efficient and scalable.

A **topic** is a named bus over which nodes exchange messages. Topics have names like `/robot/cmd_vel`, `/camera/image_raw`, or `/laser/scan`. The slash `/` indicates a global name; topics without a leading slash are relative to the node's namespace. Topic names follow a filesystem-like hierarchy, so `/robot1/cmd_vel` and `/robot2/cmd_vel` are two different topics for two different robots.

A **message** is a typed data structure. ROS messages are defined in `.msg` files and compiled into Python classes and C++ structs. Standard message types include:
- `std_msgs/String`: A simple text string.
- `std_msgs/Int64`: A 64-bit integer.
- `std_msgs/Float64`: A 64-bit floating-point number.
- `geometry_msgs/Twist`: A velocity command with linear and angular components.
- `geometry_msgs/Pose`: A position and orientation in 3D space.
- `sensor_msgs/LaserScan`: A 2D LiDAR scan with ranges and angles.
- `sensor_msgs/Image`: A camera image with pixel data and metadata.

To find the structure of a message type, use the `rosmsg` command:

```bash
rosmsg show geometry_msgs/Twist
```

Output:
```
geometry_msgs/Vector3 linear
  float64 x
  float64 y
  float64 z
geometry_msgs/Vector3 angular
  float64 x
  float64 y
  float64 z
```

This tells you that a `Twist` message contains two `Vector3` fields: `linear` and `angular`. Each `Vector3` has `x`, `y`, and `z` components. For a mobile robot on a 2D plane, only `linear.x` (forward speed) and `angular.z` (rotation rate) are typically used.

**Writing a Python publisher:**

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String

if __name__ == '__main__':
    rospy.init_node('robot_news_radio', anonymous=True)
    pub = rospy.Publisher('/robot_news', String, queue_size=10)
    
    rate = rospy.Rate(2)  # 2 Hz = 2 messages per second
    
    while not rospy.is_shutdown():
        msg = String()
        msg.data = "Hello from the Robot News Radio!"
        pub.publish(msg)
        rospy.loginfo("Published: %s", msg.data)
        rate.sleep()
```

Key elements of the Python publisher:
- `rospy.Publisher('/robot_news', String, queue_size=10)`: Creates a publisher object. The `queue_size` limits how many messages are buffered if the subscriber is not reading fast enough. If the queue is full, old messages are dropped.
- `rospy.Rate(2)`: Creates a rate object that sleeps for the appropriate duration to maintain a 2 Hz publishing rate. This is preferred over `time.sleep()` because it accounts for the time spent in the loop body.
- `rospy.is_shutdown()`: Returns `True` when ROS is shutting down (e.g., the user pressed Ctrl+C). The loop should check this to exit cleanly.
- `pub.publish(msg)`: Sends the message to all subscribers. This is non-blocking — the message is placed in the publisher's outgoing queue and sent asynchronously.

**Writing a C++ publisher:**

```cpp
#include <ros/ros.h>
#include <std_msgs/String.h>

int main(int argc, char** argv) {
    ros::init(argc, argv, "robot_news_radio");
    ros::NodeHandle nh;
    
    ros::Publisher pub = nh.advertise<std_msgs::String>("/robot_news", 10);
    ros::Rate rate(2);  // 2 Hz
    
    while (ros::ok()) {
        std_msgs::String msg;
        msg.data = "Hello from the Robot News Radio!";
        pub.publish(msg);
        ROS_INFO("Published: %s", msg.data.c_str());
        rate.sleep();
    }
    
    return 0;
}
```

Key differences between Python and C++ publishers:
- In C++, the message type is a template parameter to `advertise<T>()`. In Python, the message type is passed as a class object.
- In C++, `ros::ok()` is equivalent to `not rospy.is_shutdown()`.
- In C++, `ROS_INFO` uses `printf`-style formatting. In Python, `rospy.loginfo` uses `%` formatting or string interpolation.
- C++ publishers and subscribers are typically compiled into executables. Python scripts are interpreted at runtime.

**Debugging topics with command-line tools:**

```bash
# List all active topics
rostopic list

# Show detailed information about a topic
rostopic info /robot_news

# Print messages as they arrive (like a subscriber)
rostopic echo /robot_news

# Show the publishing rate of a topic
rostopic hz /robot_news

# Show the bandwidth used by a topic
rostopic bw /robot_news

# Publish a message manually from the terminal
rostopic pub -1 /robot_news std_msgs/String "data: 'Hello from terminal'"

# Publish at a rate (e.g., 5 Hz)
rostopic pub -r 5 /robot_news std_msgs/String "data: 'Repeating message'"
```

These tools are invaluable for debugging. If your robot is not moving, you can use `rostopic echo /cmd_vel` to check if the navigation node is sending velocity commands. If the camera is not working, you can use `rostopic hz /camera/image_raw` to check if images are being published.

**The queue_size parameter:** The `queue_size` in `rospy.Publisher` and `nh.advertise()` is critically important. If the publisher sends messages faster than the subscriber can process them, the messages accumulate in a queue. A `queue_size` of 10 means only the last 10 messages are kept; older messages are dropped. For sensor data that is time-sensitive, a small queue_size is appropriate because old data is irrelevant. For commands that must all be executed, a larger queue_size or a different communication mechanism (like a service or action) may be needed.

#### Key concepts
- Publish-subscribe pattern: one-to-many, asynchronous, decoupled
- Topics as named buses for message streaming
- ROS Master handles connection establishment, not message forwarding
- Direct TCP connection between publisher and subscriber
- Standard message types: std_msgs, geometry_msgs, sensor_msgs
- `rosmsg show` for message structure inspection
- Python publisher: `rospy.Publisher()`, `publish()`, `rospy.Rate()`
- C++ publisher: `nh.advertise<T>()`, `publish()`, `ros::Rate()`
- `rostopic list`, `info`, `echo`, `hz`, `bw`, `pub`
- `queue_size` and message buffering
- `rospy.is_shutdown()` and `ros::ok()` for clean shutdown

#### Hands-on activity
Write a Python publisher node named `number_publisher.py` that publishes integers (starting from 1 and incrementing by 1 each time) to the topic `/number` at a rate of 1 Hz. The message type should be `std_msgs/Int64`. Write a C++ publisher node named `twist_publisher.cpp` that publishes `geometry_msgs/Twist` messages to `/cmd_vel` at 2 Hz, with `linear.x = 0.5` and `angular.z = 0.1`. Build the C++ node. Run both publishers simultaneously. Use `rostopic echo` to verify the messages. Use `rostopic hz` to verify the publishing rates. Then use `rostopic pub` to manually publish a `Twist` message with `linear.x = 2.0` to `/cmd_vel` and observe it with `rostopic echo`.

#### Assessment idea
Ask: "A camera node publishes images at 30 Hz to `/camera/image_raw`. An image processing node subscribes to this topic but can only process 5 images per second. What happens to the unprocessed images, and how does the `queue_size` parameter affect this?" Answer: The subscriber's incoming queue fills up with images. If the subscriber's queue size is 10, it keeps the last 10 images and discards older ones. The camera node's `queue_size` affects how many images the publisher buffers before the subscriber connects. If the subscriber's queue overflows, images are dropped at the subscriber side. To avoid processing stale images, the subscriber should use a small queue_size (e.g., 1) so that it always processes the most recent image. Then ask: "Why is the publish-subscribe pattern more scalable than direct point-to-point connections for a robot with many sensors and algorithms?" Answer: In publish-subscribe, each sensor publishes once, and any number of algorithms can subscribe without the sensor needing to know about them. In point-to-point, each sensor would need a separate connection to each algorithm, resulting in O(N×M) connections for N sensors and M algorithms. Publish-subscribe reduces this to O(N+M) connections, making it much more scalable.

#### AI generation note
Create a 10-minute animated lesson. Show the publish-subscribe pattern as a radio station (publisher) broadcasting to many radios (subscribers). Show the ROS Master as a phone operator connecting the station to the radios. Show the direct TCP connection as a dedicated cable between the station and each radio. Show the message as a labeled envelope with fields. Show the Python and C++ code side by side with highlighted differences. Show the terminal with `rostopic echo` printing messages in real-time. Show `rostopic hz` displaying a frequency counter. Show a queue as a stack of messages with old ones being dropped off the bottom. Include a live coding segment. End with a reflection: "What data from your robot would be best sent as a topic?"

---

### Chapter 2.2 — Writing ROS Subscribers and Message Callbacks

#### Learning objectives
- Write a ROS subscriber in Python that processes incoming messages in a callback function.
- Write a ROS subscriber in C++ that processes incoming messages in a callback function.
- Understand the concept of callback functions and the ROS event loop (`rospy.spin()` and `ros::spin()`).
- Use `rospy.spin()` and `ros::spin()` to keep nodes alive and responsive to callbacks.
- Implement a subscriber-publisher node that transforms incoming data and republishes it.

#### Detailed lesson content

A **subscriber** is a node that receives messages from a topic. In ROS, message delivery is callback-based: when a message arrives, ROS automatically calls a function (the **callback function**) that you define. This function processes the message. The callback model is efficient because your code does not need to poll for new messages; ROS handles the waiting and notifies you when data arrives.

**Writing a Python subscriber:**

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String

def callback(msg):
    rospy.loginfo("Received: %s", msg.data)

if __name__ == '__main__':
    rospy.init_node('robot_news_listener', anonymous=True)
    sub = rospy.Subscriber('/robot_news', String, callback)
    rospy.loginfo("Subscriber is ready. Waiting for messages...")
    rospy.spin()
```

Key elements:
- `rospy.Subscriber('/robot_news', String, callback)`: Creates a subscriber object. The `callback` function is called every time a message arrives on `/robot_news`. The subscriber immediately registers with the ROS Master and establishes connections with any existing publishers.
- `rospy.spin()`: Enters an infinite loop that keeps the node alive and processes callbacks. It does not return until the node is shut down. Think of it as the node's "main loop" — it is waiting for events (messages) and dispatching them to the appropriate callbacks.

**Writing a C++ subscriber:**

```cpp
#include <ros/ros.h>
#include <std_msgs/String.h>

void callback(const std_msgs::String::ConstPtr& msg) {
    ROS_INFO("Received: %s", msg->data.c_str());
}

int main(int argc, char** argv) {
    ros::init(argc, argv, "robot_news_listener");
    ros::NodeHandle nh;
    
    ros::Subscriber sub = nh.subscribe("/robot_news", 10, callback);
    ROS_INFO("Subscriber is ready. Waiting for messages...");
    ros::spin();
    
    return 0;
}
```

Key differences:
- In C++, the callback receives a `ConstPtr` (constant pointer) to the message. This is a shared pointer that avoids copying the message data, which is important for large messages like images or point clouds.
- `nh.subscribe()` returns a `Subscriber` object. In Python, you typically store the subscriber object in a variable (`sub = rospy.Subscriber(...)`) to prevent it from being garbage collected.
- `ros::spin()` is the C++ equivalent of `rospy.spin()`.

**The callback mechanism:** When a message arrives, ROS calls the callback function in a separate thread (in C++) or in the main thread (in Python). In Python, callbacks are processed sequentially in the order they arrive. If a callback takes a long time to execute, subsequent messages may be delayed. To handle this, you can use `rospy.spin()` with a multi-threaded spinner or process messages in a separate thread. In C++, the `subscribe()` function has a `queue_size` parameter that controls how many messages are buffered. If the callback is slow, excess messages are dropped.

**Subscriber-publisher node (a node that both subscribes and publishes):**

A common pattern in ROS is a node that reads data from one topic, processes it, and publishes the result on another topic. For example, a node that reads raw sensor data, applies a filter, and publishes filtered data.

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import Int64

class NumberCounter:
    def __init__(self):
        self.count = 0
        self.sub = rospy.Subscriber('/number', Int64, self.callback)
        self.pub = rospy.Publisher('/number_count', Int64, queue_size=10)
    
    def callback(self, msg):
        self.count += 1
        count_msg = Int64()
        count_msg.data = self.count
        self.pub.publish(count_msg)
        rospy.loginfo("Received: %d, Count: %d", msg.data, self.count)

if __name__ == '__main__':
    rospy.init_node('number_counter', anonymous=True)
    node = NumberCounter()
    rospy.spin()
```

This node subscribes to `/number` and publishes to `/number_count`. Every time it receives a number, it increments its internal counter and publishes the new count. This is a fundamental building block of ROS applications: data flows through a pipeline of nodes, each transforming the data in some way.

**Anonymous nodes for multiple instances:**

When you run multiple instances of the same node (e.g., multiple sensors of the same type), ROS requires each node to have a unique name. If you use `anonymous=True` in Python, ROS appends a random string to the node name, making it unique:

```python
rospy.init_node('sensor_reader', anonymous=True)
```

In C++:
```cpp
ros::init(argc, argv, "sensor_reader", ros::init_options::AnonymousName);
```

This is essential for scalable systems. If you have 10 temperature sensors, you can run the same `temperature_node` executable 10 times, and each instance will have a unique name like `temperature_node_12345`, `temperature_node_67890`, etc.

#### Key concepts
- Subscriber and callback functions
- `rospy.Subscriber()` and `nh.subscribe()`
- `rospy.spin()` and `ros::spin()` as the event loop
- Callback execution: sequential in Python, threaded in C++
- Subscriber-publisher pipeline pattern
- `anonymous=True` for multiple node instances
- `ConstPtr` in C++ for zero-copy message access
- Message buffering and queue_size on the subscriber side

#### Hands-on activity
Write a Python node called `number_counter.py` that subscribes to `/number` (Int64), counts the total number of messages received, and publishes the count on `/number_count` (Int64). Run the `number_publisher.py` from the previous chapter and the `number_counter.py` simultaneously. Verify the output with `rostopic echo /number_count`. Then write a C++ node called `string_reverser.cpp` that subscribes to `/input_string` (String), reverses the string, and publishes the reversed string on `/output_string`. Build and run it. Use `rostopic pub` to send test strings to `/input_string` and verify the output with `rostopic echo /output_string`.

#### Assessment idea
Ask: "A subscriber node has a callback that takes 5 seconds to process each message. The publisher sends messages at 1 Hz. If the subscriber's queue_size is 1, how many messages will be processed in 10 seconds? What if the queue_size is 10?" Answer: With queue_size 1, the subscriber processes only the most recent message. Since the callback takes 5 seconds and messages arrive every 1 second, 4 messages are dropped during each callback. In 10 seconds, the subscriber processes 2 messages (at t=0 and t=5). With queue_size 10, the subscriber buffers up to 10 messages. In 10 seconds, it receives 10 messages and processes 2 of them (at t=0 and t=5), leaving 8 messages in the queue. The key insight is that a slow callback cannot keep up with a fast publisher, regardless of queue size, unless the processing is parallelized or the publishing rate is reduced. Then ask: "Why is `rospy.spin()` necessary in a subscriber node?" Answer: `rospy.spin()` keeps the node alive and allows the ROS event loop to process incoming messages and dispatch them to callbacks. Without it, the node would exit immediately after creating the subscriber, and no messages would be received. In Python, `rospy.spin()` blocks the main thread, but callbacks are executed in the same thread. In C++, `ros::spin()` also blocks, but callbacks can be executed in separate threads if a `MultiThreadedSpinner` is used.

#### AI generation note
Create a 10-minute animated lesson. Show a subscriber node as a mailbox with a callback function as the person who opens the mail. Show messages arriving at the mailbox and the callback being triggered. Show the subscriber-publisher pipeline as a factory assembly line: raw data → processing node → refined data. Show `rospy.spin()` as a "do not disturb" sign that keeps the node open. Show multiple anonymous nodes as identical workers with different name tags. Show the Python and C++ code side by side with callback functions highlighted. Show `rostopic echo` verifying the output. Show a queue as a buffer that fills when the callback is slow. Include a live coding segment with the number counter node. End with a reflection: "What kind of processing would you do in a subscriber-publisher pipeline?"

---

### Chapter 2.3 — Custom Message Types and Message Generation

#### Learning objectives
- Define custom ROS message types using `.msg` files.
- Generate Python and C++ message bindings using `catkin_make`.
- Use custom message types in publisher and subscriber nodes.
- Understand the difference between `.msg`, `.srv`, and `.action` files.
- Use `roscd` and tab completion to navigate the ROS package system.

#### Detailed lesson content

While ROS provides many standard message types, real-world applications often require domain-specific data structures. A drone might need a message that contains latitude, longitude, altitude, and battery voltage. A robotic arm might need a message that contains joint angles, velocities, and torques. ROS allows you to define **custom message types** that are compiled into Python classes and C++ structs automatically, making them as easy to use as standard messages.

**Defining a custom message:**

Custom messages are defined in `.msg` files placed in the `msg/` directory of your package. A `.msg` file is a simple text file that lists the fields of the message, one per line, with the type and name:

```
# File: msg/RobotStatus.msg
string robot_name
int32 battery_percent
float32 temperature
bool is_moving
geometry_msgs/Pose current_pose
```

This message contains a robot name, battery percentage, temperature, a movement flag, and a pose. The `geometry_msgs/Pose` field shows that custom messages can include other messages as fields, enabling complex, nested data structures.

To generate the Python and C++ bindings for this message, you must:

1. Add the `message_generation` dependency to `package.xml`:
   ```xml
   <build_depend>message_generation</build_depend>
   <exec_depend>message_runtime</exec_depend>
   ```

2. Update `CMakeLists.txt` to find the message generation package and declare your message files:
   ```cmake
   find_package(catkin REQUIRED COMPONENTS
     roscpp
     rospy
     std_msgs
     geometry_msgs
     message_generation
   )
   
   add_message_files(
     FILES
     RobotStatus.msg
   )
   
   generate_messages(
     DEPENDENCIES
     std_msgs
     geometry_msgs
   )
   
   catkin_package(
     CATKIN_DEPENDS message_runtime
   )
   ```

3. Build the package:
   ```bash
   cd ~/catkin_ws
   catkin_make
   source devel/setup.bash
   ```

After building, you can import the message in Python:

```python
from my_first_robot.msg import RobotStatus

status = RobotStatus()
status.robot_name = "TurtleBot_01"
status.battery_percent = 85
status.temperature = 42.5
status.is_moving = True
status.current_pose.position.x = 1.0
status.current_pose.position.y = 2.0
```

And in C++:

```cpp
#include <my_first_robot/RobotStatus.h>

my_first_robot::RobotStatus status;
status.robot_name = "TurtleBot_01";
status.battery_percent = 85;
status.temperature = 42.5;
status.is_moving = true;
status.current_pose.position.x = 1.0;
status.current_pose.position.y = 2.0;
```

**ROS navigation commands:**

```bash
# Change to a package's directory
roscd my_first_robot

# Find a package's path
rospack find my_first_robot

# List files in a package
rosls my_first_robot

# Change to a log directory
roscd log
```

These commands are essential for navigating the ROS filesystem. `roscd` is particularly useful because it works regardless of where you are in the terminal — it finds the package in the ROS package path and changes to it.

**Tab completion in ROS:**
ROS provides extensive tab completion for its command-line tools. For example:
- `rosrun my_first_robot <TAB><TAB>` lists all executables in the package.
- `rostopic echo /turtle1/<TAB>` lists all topics under `/turtle1/`.
- `rosservice call /turtle1/teleport_<TAB>` completes the service name.

Tab completion is a huge productivity boost and reduces typing errors. It works because ROS maintains a registry of all packages, nodes, topics, services, and parameters, and the bash completion scripts query this registry.

**Common mistakes with custom messages:**
- Forgetting to add `message_generation` to `CMakeLists.txt` or `package.xml`. This is the most common cause of "module not found" errors when importing custom messages.
- Forgetting to source `devel/setup.bash` after building. The generated message modules are placed in the `devel/` directory, and Python needs to know where to find them.
- Using relative message types without specifying the package name. If you want to include `MyOtherMsg` from another package, you must write `other_package/MyOtherMsg` in the `.msg` file.
- Naming conflicts: two packages should not define messages with the same name, as this can cause ambiguity in the ROS namespace.

#### Key concepts
- Custom message definitions in `.msg` files
- `msg/` directory and field declarations
- Nested messages and standard message fields
- `message_generation` and `message_runtime` dependencies
- `add_message_files()` and `generate_messages()` in `CMakeLists.txt`
- Building with `catkin_make` and sourcing `devel/setup.bash`
- Importing custom messages in Python and C++
- `roscd`, `rospack`, `rosls` for filesystem navigation
- Tab completion for ROS commands
- Common mistakes: missing dependencies, forgetting to source, naming conflicts

#### Hands-on activity
Create a custom message type called `SensorData.msg` in your package with fields: `float32 temperature`, `float32 humidity`, `int32 light_level`, and `string sensor_id`. Update the `package.xml` and `CMakeLists.txt` to build the message. Run `catkin_make` and verify that the message can be imported in Python. Then write a Python publisher node `sensor_publisher.py` that publishes `SensorData` messages to `/sensor_data` at 1 Hz with simulated values (random temperature between 20–30, random humidity between 40–60, incrementing light level, fixed sensor ID). Write a Python subscriber node `sensor_subscriber.py` that subscribes to `/sensor_data`, prints each field, and computes a running average of temperature and humidity. Run both nodes and verify the output with `rostopic echo /sensor_data`.

#### Assessment idea
Ask: "You have defined a custom message `MyMessage.msg` in package `my_pkg`, but when you try to import it in Python with `from my_pkg.msg import MyMessage`, you get an ImportError. What are the three most likely causes?" Answer: (1) `message_generation` was not added to `find_package` in `CMakeLists.txt`. (2) `add_message_files()` and `generate_messages()` were not called in `CMakeLists.txt`. (3) `devel/setup.bash` was not sourced after running `catkin_make`, so Python does not know where the generated message module is located. A fourth possible cause is that `message_runtime` was not added to `catkin_package(CATKIN_DEPENDS ...)`. Then ask: "Why must custom messages be defined in `.msg` files rather than just using Python dictionaries or C++ structs?" Answer: Because ROS needs to know the message structure in advance to generate serialization code, Python bindings, and C++ headers. The `.msg` file is the single source of truth that ROS uses to generate all language-specific code. This ensures that all nodes (regardless of language) can communicate using the same message format. Python dictionaries and C++ structs are language-specific and cannot be automatically serialized for network transmission.

#### AI generation note
Create a 10-minute animated lesson. Show a `.msg` file as a blueprint that generates Python and C++ code. Show the `msg/` directory with the blueprint file. Show `CMakeLists.txt` as a factory that processes the blueprint. Show `catkin_make` as the factory running and producing two products (Python class and C++ struct). Show the generated Python class being imported and used. Show the C++ struct being included and used. Show `roscd` as a teleport command that jumps to the package directory. Show tab completion as a helper ghost that completes commands. Show the three common mistakes as warning signs with fixes. Include a live coding segment with the custom message creation and usage. End with a reflection: "What custom message would you define for your robot?"

---

## Module 3: ROS Services and Client-Server Communication

> **Goal:** Learn to use ROS services for synchronous request-response communication, which is essential for discrete commands and queries.

---

### Chapter 3.1 — Understanding ROS Services

#### Learning objectives
- Explain the difference between topics and services in ROS.
- Write a ROS service server in Python and C++ that receives a request and returns a response.
- Write a ROS service client in Python and C++ that sends a request and waits for a response.
- Use `rosservice` command-line tools to inspect, call, and list services.
- Understand when to use services vs. topics vs. actions.

#### Detailed lesson content

Topics are excellent for continuous data streams, but not all communication is streaming. Sometimes you need to ask a question and get an answer. For example: "What is the current battery level?" "Is the robot currently moving?" "Move the arm to this position." These are discrete, one-time interactions that require a response. ROS **services** provide exactly this: a synchronous request-response mechanism between a client and a server.

A ROS service is defined by:
- A **name** (e.g., `/get_battery_level`, `/toggle_led`, `/move_to_position`).
- A **request message type** (the data sent by the client).
- A **response message type** (the data sent back by the server).

The service model is client-server: a single server node advertises the service, and multiple client nodes can call it. When a client calls the service, it sends a request message and blocks until the server processes the request and returns a response message. This blocking behavior is important: the client's execution pauses until the response arrives. For this reason, services should be used only for fast, discrete tasks. If a service call takes too long, it will freeze the client node.

**Comparison: Topics vs. Services vs. Actions:**

| Feature | Topics | Services | Actions |
|---------|--------|----------|---------|
| Pattern | Publish-Subscribe | Request-Response | Goal-Feedback-Result |
| Direction | One-way | Two-way (sync) | Two-way (async) |
| Use case | Streaming data | Quick queries/commands | Long-running tasks |
| Example | Sensor data, commands | Get status, toggle state | Move to position, grasp object |
| Blocking | No | Yes (client blocks) | No (client gets feedback) |
| Multiple clients | Yes | Yes | Yes |
| Multiple servers | N/A | No (one server per service) | No (one server per action) |
| Cancellation | N/A | No | Yes |

**Defining a custom service:**

Services are defined in `.srv` files placed in the `srv/` directory. A `.srv` file contains the request fields (above the `---` separator) and the response fields (below the separator):

```
# File: srv/SetLed.srv
int32 led_number
bool state
---
bool success
string message
```

This service turns an LED on or off. The request contains the LED number and the desired state. The response indicates whether the operation succeeded and provides a message.

To build the service, add to `CMakeLists.txt`:

```cmake
find_package(catkin REQUIRED COMPONENTS
  ...
  message_generation
)

add_service_files(
  FILES
  SetLed.srv
)

generate_messages(
  DEPENDENCIES
  std_msgs
)
```

**Writing a Python service server:**

```python
#!/usr/bin/env python3
import rospy
from my_first_robot.srv import SetLed, SetLedResponse

def handle_set_led(req):
    rospy.loginfo("Setting LED %d to %s", req.led_number, req.state)
    # Here you would actually control the LED hardware
    success = True
    message = "LED %d set to %s" % (req.led_number, req.state)
    return SetLedResponse(success, message)

if __name__ == '__main__':
    rospy.init_node('led_server')
    srv = rospy.Service('/set_led', SetLed, handle_set_led)
    rospy.loginfo("LED server is ready.")
    rospy.spin()
```

The callback function `handle_set_led` receives the request, processes it, and returns a `SetLedResponse`. The server is created with `rospy.Service()`, which advertises the service to the ROS Master. When a client calls the service, ROS invokes the callback and sends the response back to the client.

**Writing a Python service client:**

```python
#!/usr/bin/env python3
import rospy
from my_first_robot.srv import SetLed

def set_led_client(led_number, state):
    rospy.wait_for_service('/set_led')
    try:
        set_led = rospy.ServiceProxy('/set_led', SetLed)
        resp = set_led(led_number, state)
        return resp.success, resp.message
    except rospy.ServiceException as e:
        rospy.logerr("Service call failed: %s", e)
        return False, "Error"

if __name__ == '__main__':
    rospy.init_node('led_client')
    success, message = set_led_client(1, True)
    rospy.loginfo("Result: %s - %s", success, message)
```

`rospy.wait_for_service('/set_led')` blocks until the service is available. `rospy.ServiceProxy` creates a callable object that acts like a local function but sends the request over the network to the server. The call is blocking: `resp = set_led(...)` does not return until the server has processed the request and sent back the response.

**Writing a C++ service server:**

```cpp
#include <ros/ros.h>
#include <my_first_robot/SetLed.h>

bool handleSetLed(my_first_robot::SetLed::Request& req,
                  my_first_robot::SetLed::Response& res) {
    ROS_INFO("Setting LED %d to %d", req.led_number, req.state);
    res.success = true;
    res.message = "LED set successfully";
    return true;
}

int main(int argc, char** argv) {
    ros::init(argc, argv, "led_server");
    ros::NodeHandle nh;
    
    ros::ServiceServer service = nh.advertiseService("/set_led", handleSetLed);
    ROS_INFO("LED server is ready.");
    ros::spin();
    
    return 0;
}
```

In C++, the service callback receives the request and response by reference and returns a boolean indicating whether the service call succeeded. The response is filled in by the callback.

**Writing a C++ service client:**

```cpp
#include <ros/ros.h>
#include <my_first_robot/SetLed.h>

int main(int argc, char** argv) {
    ros::init(argc, argv, "led_client");
    ros::NodeHandle nh;
    
    ros::ServiceClient client = nh.serviceClient<my_first_robot::SetLed>("/set_led");
    ros::service::waitForService("/set_led");
    
    my_first_robot::SetLed srv;
    srv.request.led_number = 1;
    srv.request.state = true;
    
    if (client.call(srv)) {
        ROS_INFO("Result: %d - %s", srv.response.success, srv.response.message.c_str());
    } else {
        ROS_ERROR("Failed to call service");
    }
    
    return 0;
}
```

`client.call(srv)` is the blocking call. It returns `true` if the service call succeeded and `false` if it failed (e.g., the server crashed or the service is not available).

**Debugging services with command-line tools:**

```bash
# List all active services
rosservice list

# Show detailed information about a service
rosservice info /set_led

# Call a service from the terminal
rosservice call /set_led "led_number: 1
state: true"

# Show the service type
rosservice type /set_led

# Show the arguments expected by a service
rosservice args /set_led
```

`rosservice call` is extremely useful for testing services without writing a client node. You can test your server immediately after writing it by calling it from the terminal.

#### Key concepts
- Services as synchronous request-response communication
- Service definition: name, request message, response message
- `.srv` files with `---` separator
- `add_service_files()` in `CMakeLists.txt`
- Python server: `rospy.Service()`, callback returns response
- Python client: `rospy.wait_for_service()`, `rospy.ServiceProxy()`
- C++ server: `nh.advertiseService()`, callback with request/response references
- C++ client: `nh.serviceClient<T>()`, `client.call(srv)`
- Blocking behavior and when to use services vs. topics vs. actions
- `rosservice list`, `info`, `call`, `type`, `args`
- `rosservice call` for testing

#### Hands-on activity
Create a custom service called `ComputeSum.srv` that takes two integers (`int32 a`, `int32 b`) and returns their sum (`int32 sum`). Write a Python server node `sum_server.py` that computes the sum and returns it. Write a Python client node `sum_client.py` that asks for the sum of 5 and 3. Test the server with `rosservice call` before running the client. Then write a C++ version of the server and client. Build the C++ server and test it with the Python client (and vice versa) to verify that ROS services are language-agnostic. Log the sum computation in the server and print the result in the client.

#### Assessment idea
Ask: "A robot has a service `/get_battery_level` that returns the current battery percentage. A navigation node calls this service every 100 milliseconds. Is this a good design? If not, what would be better?" Answer: This is not a good design. Services are synchronous and blocking. Calling a service every 100 ms means the navigation node blocks every 100 ms, which could cause latency and jitter. A better design is to have the battery node publish the battery level on a topic (e.g., `/battery_level`) at 1 Hz, and have the navigation node subscribe to that topic. This is asynchronous, non-blocking, and more efficient for continuous data. Services should be used for discrete, infrequent queries, not for high-frequency data streaming. Then ask: "Why can a Python client call a C++ service (and vice versa) without any special code?" Answer: Because ROS handles the serialization and deserialization of messages automatically. The `.srv` file is compiled into language-specific bindings, and ROS's communication layer (based on TCP) transmits the serialized request and response between the nodes. The language of the client and server is irrelevant to the communication protocol, as long as both use the same message definition.

#### AI generation note
Create a 10-minute animated lesson. Show topics as one-way highways (streaming) and services as two-way streets (request-response). Show a service call as a person asking a question and waiting for an answer. Show the `.srv` file as a contract with two sections: request and response. Show the Python and C++ server and client code side by side. Show `rosservice call` as a terminal window sending a request and getting a response. Show the service type as a label on the street. Show the blocking behavior as a client node freezing while waiting. Show the comparison table of topics, services, and actions as a three-lane highway. Include a live coding segment with the sum server and client. End with a reflection: "What would you use a service for on your robot?"

---

### Chapter 3.2 — ROS Services with Turtlesim and Practical Applications

#### Learning objectives
- Use ROS services with the `turtlesim` simulator to teleport the turtle, reset the simulation, and spawn new turtles.
- Implement a service-based control system for a simulated robot (e.g., BB-8 or TurtleBot).
- Understand the difference between stateless and stateful services.
- Apply services to real-world robot scenarios: LED control, gripper control, mode switching.

#### Detailed lesson content

The `turtlesim` package is a simple simulator that comes with ROS. It displays a turtle in a 2D window and allows you to control its velocity via topics. But turtlesim also exposes several services that allow you to interact with the simulation in more powerful ways. These services are excellent for learning how services work in a real ROS application.

**Turtlesim services:**

```bash
# List all turtlesim services
rosservice list | grep turtlesim
```

Key services include:
- `/reset`: Clears the screen and resets the turtle to the center. Type: `std_srvs/Empty` (no request or response data).
- `/clear`: Clears the screen without moving the turtle. Type: `std_srvs/Empty`.
- `/kill`: Removes a turtle from the simulation. Type: `turtlesim/Kill` (request: `name`).
- `/spawn`: Creates a new turtle at a specified position. Type: `turtlesim/Spawn` (request: `x`, `y`, `theta`, `name`; response: `name`).
- `/turtle1/teleport_absolute`: Moves the turtle to an absolute position. Type: `turtlesim/TeleportAbsolute`.
- `/turtle1/teleport_relative`: Moves the turtle relative to its current position. Type: `turtlesim/TeleportRelative`.
- `/turtle1/set_pen`: Sets the pen color and width. Type: `turtlesim/SetPen`.

Using these services from the command line:

```bash
# Reset the simulation
rosservice call /reset

# Clear the screen
rosservice call /clear

# Spawn a new turtle named "turtle2" at position (5, 5) with heading 0
rosservice call /spawn "x: 5.0
y: 5.0
theta: 0.0
name: 'turtle2'"

# Teleport turtle1 to position (2, 3) with heading 1.57 (90 degrees)
rosservice call /turtle1/teleport_absolute "x: 2.0
y: 3.0
theta: 1.57"

# Set the pen color to red and width to 3
rosservice call /turtle1/set_pen "r: 255
g: 0
b: 0
width: 3
off: 0"
```

These services demonstrate the two main types of ROS services:
- **Stateless services:** `/reset`, `/clear`, `/kill` — these services do not depend on the current state of the system. They perform an action and return.
- **Stateful services:** `/spawn`, `/teleport_absolute`, `/set_pen` — these services modify the state of the system and return a result that depends on the current state.

**Service-based robot control example:**

Consider a robot with an LED panel that has 3 LEDs. The robot has a service `/set_led` that turns individual LEDs on or off. Another node monitors the battery. When the battery is low, the battery node calls the LED service to turn the red LED on. This is a classic service pattern: a quick, discrete command that changes the robot's state.

```python
# LED Panel Server (from Chapter 3.1)
# Battery Monitor Client
#!/usr/bin/env python3
import rospy
from my_first_robot.srv import SetLed
from sensor_msgs.msg import BatteryState

class BatteryMonitor:
    def __init__(self):
        self.low_battery_threshold = 20
        rospy.wait_for_service('/set_led')
        self.set_led = rospy.ServiceProxy('/set_led', SetLed)
        self.sub = rospy.Subscriber('/battery_state', BatteryState, self.callback)
        self.led_on = False
    
    def callback(self, msg):
        if msg.percentage < self.low_battery_threshold and not self.led_on:
            self.set_led(3, True)  # Turn on red LED (number 3)
            self.led_on = True
            rospy.logwarn("Low battery! LED turned on.")
        elif msg.percentage >= self.low_battery_threshold and self.led_on:
            self.set_led(3, False)
            self.led_on = False
            rospy.loginfo("Battery OK. LED turned off.")

if __name__ == '__main__':
    rospy.init_node('battery_monitor')
    monitor = BatteryMonitor()
    rospy.spin()
```

This pattern — one node publishing state data on a topic, another node subscribing and calling services based on that state — is extremely common in ROS. It combines the strengths of topics (continuous, asynchronous data) and services (discrete, synchronous commands).

**Practical service applications in robotics:**
- **Gripper control:** A service `/gripper/close` with a request specifying the force and a response indicating success. Used for grasping objects.
- **Mode switching:** A service `/set_mode` with request `mode: "autonomous"` or `mode: "manual"`. Changes the robot's operating mode.
- **Parameter update:** A service `/set_pid_gains` that updates the controller gains without restarting the node.
- **Reset/calibration:** A service `/reset_odometry` that zeros the wheel encoder counts.
- **Map saving:** A service `/save_map` that triggers the SLAM node to save the current map to a file.

**Service design best practices:**
- Keep services fast. If a service call takes more than a few milliseconds, consider using an action instead.
- Make services idempotent when possible. Calling `/set_led` with the same arguments twice should have the same effect as calling it once.
- Include success flags and error messages in the response. This allows the client to detect and handle failures.
- Do not use services for high-frequency data streaming. Use topics for that.

#### Key concepts
- Turtlesim services: reset, clear, spawn, teleport, set_pen
- Stateless vs. stateful services
- Service-based control patterns: topic subscriber + service caller
- Practical service applications: gripper, mode switching, calibration, map saving
- Service design best practices: fast, idempotent, informative responses
- Combining topics and services in a single application
- `std_srvs/Empty` for services with no arguments
- ROS service types in turtlesim: Kill, Spawn, TeleportAbsolute, SetPen

#### Hands-on activity
Launch turtlesim and use `rosservice call` to: (1) spawn a second turtle named `turtle2` at (5, 5), (2) teleport `turtle1` to (1, 1) with heading 45°, (3) set `turtle1`'s pen to blue with width 4, (4) move `turtle1` using the teleop keyboard until it draws a square, and (5) kill `turtle2`. Then write a Python script that automates this: it should spawn `turtle2`, draw a circle by publishing velocity commands to `turtle1`, and then kill `turtle2`. Use services for spawning and killing, and topics for velocity commands. Finally, write a service server for a simulated gripper `/gripper/set_position` that takes a requested position (0.0 = open, 1.0 = closed) and returns whether the gripper successfully reached that position. Write a client that tests the gripper at positions 0.0, 0.5, and 1.0.

#### Assessment idea
Ask: "You are designing a robot that can switch between manual control (joystick) and autonomous navigation. Should you use a topic, a service, or an action for the mode switch command?" Answer: A service. The mode switch is a discrete, quick command that changes the robot's state. A service is synchronous, so the client knows immediately whether the switch succeeded. A topic would be asynchronous, and the client would not know when the switch actually happened. An action would be overkill because there is no long-running task with feedback. Then ask: "Why should services be designed to be idempotent when possible?" Answer: Idempotency means that performing the same operation multiple times has the same effect as performing it once. This is important because network messages can be lost or duplicated, and a client might retry a service call. If the service is idempotent, retrying is safe. For example, setting an LED to "on" twice is the same as setting it to "on" once. If the service were not idempotent (e.g., "toggle the LED"), a retry could cause an unintended state change.

#### AI generation note
Create a 10-minute animated lesson. Show the turtlesim window with a turtle being teleported, spawning a second turtle, and changing pen colors. Show the service calls as animated command bubbles entering the turtlesim node. Show the battery monitor pattern as a flowchart: battery node → topic → subscriber → service call → LED node. Show the gripper service as a robotic hand opening and closing. Show service best practices as a checklist: fast, idempotent, informative. Show the comparison of topic/service/action as a decision tree. Include a live coding segment with the turtlesim service automation script. End with a reflection: "What state-changing command on your robot would be best implemented as a service?"

---

## Module 4: ROS Actions for Long-Running Tasks

> **Goal:** Learn to use ROS actions for asynchronous, long-running tasks with feedback and preemption, which is essential for robot motion and task execution.

---

### Chapter 4.1 — Introduction to ROS Actions and Actionlib

#### Learning objectives
- Explain why actions are needed for long-running tasks that services cannot handle.
- Understand the action protocol: goal, feedback, result, and preemption.
- Implement a SimpleActionServer in Python that processes a goal, sends feedback, and returns a result.
- Implement a SimpleActionClient in Python that sends a goal, receives feedback, and handles the result.
- Compare actions with services and topics for different use cases.

#### Detailed lesson content

Services are synchronous: the client sends a request and waits for a response. This works well for quick tasks like "get the battery level" or "turn on the LED." But what if the task takes a long time? Consider a robot arm moving to a target position. The movement might take 5 seconds. If this were a service, the client would block for 5 seconds, unable to do anything else. Worse, the client might want to cancel the movement halfway through if an obstacle appears. Services cannot be canceled once the request is sent. This is where **ROS actions** come in.

ROS actions are the mechanism for **long-running, asynchronous tasks** with feedback and preemption. An action consists of:
- A **goal** sent by the client to the server: "Go to position (5, 3)."
- **Feedback** sent periodically by the server to the client: "I am 30% of the way there."
- A **result** sent by the server when the task is complete: "I have arrived at (5, 3)."
- **Preemption** (cancellation): the client can send a cancel request, and the server stops the task.

The action protocol is implemented by the **actionlib** library, which is part of ROS. Actionlib manages the communication between the client and server using a set of topics behind the scenes. The client and server do not need to know about these topics; they interact with the action through a high-level API.

**Defining a custom action:**

Actions are defined in `.action` files placed in the `action/` directory. The file has three sections separated by `---`:

```
# File: action/CountUntil.action
# Goal
int32 max_number
---
# Result
int32 count
---
# Feedback
float32 percentage
```

This action counts from 1 to `max_number` and sends feedback showing the progress percentage. The result is the final count.

To build the action, add to `CMakeLists.txt`:

```cmake
find_package(catkin REQUIRED COMPONENTS
  ...
  actionlib_msgs
  message_generation
)

add_action_files(
  FILES
  CountUntil.action
)

generate_messages(
  DEPENDENCIES
  std_msgs
  actionlib_msgs
)
```

And add to `package.xml`:
```xml
<build_depend>actionlib_msgs</build_depend>
<exec_depend>actionlib_msgs</exec_depend>
```

**Writing a SimpleActionServer in Python:**

```python
#!/usr/bin/env python3
import rospy
import actionlib
from my_first_robot.msg import CountUntilAction, CountUntilFeedback, CountUntilResult

class CountUntilServer:
    def __init__(self):
        self._as = actionlib.SimpleActionServer('/count_until', CountUntilAction, 
                                                 execute_cb=self.execute_callback, auto_start=False)
        self._as.start()
        rospy.loginfo("CountUntil server is ready.")
    
    def execute_callback(self, goal):
        rospy.loginfo("Goal received: count until %d", goal.max_number)
        
        success = True
        rate = rospy.Rate(2)  # 2 Hz feedback
        
        for i in range(1, goal.max_number + 1):
            if self._as.is_preempt_requested():
                rospy.loginfo("Preempted!")
                self._as.set_preempted()
                success = False
                break
            
            feedback = CountUntilFeedback()
            feedback.percentage = float(i) / float(goal.max_number)
            self._as.publish_feedback(feedback)
            
            rate.sleep()
        
        if success:
            result = CountUntilResult()
            result.count = goal.max_number
            self._as.set_succeeded(result)
            rospy.loginfo("Goal succeeded: counted to %d", result.count)

if __name__ == '__main__':
    rospy.init_node('count_until_server')
    server = CountUntilServer()
    rospy.spin()
```

Key elements of the action server:
- `actionlib.SimpleActionServer`: The server object. It handles the action protocol automatically.
- `execute_cb`: The callback function that processes the goal. It runs in a separate thread.
- `auto_start=False`: Prevents the server from starting before the callback is registered. Call `start()` manually.
- `self._as.is_preempt_requested()`: Checks if the client has requested cancellation. If so, the server should stop the task and call `set_preempted()`.
- `self._as.publish_feedback(feedback)`: Sends feedback to the client during task execution.
- `self._as.set_succeeded(result)`: Sends the final result when the task is complete.
- `self._as.set_preempted()`: Sends a preempted status when the task was canceled.

**Writing a SimpleActionClient in Python:**

```python
#!/usr/bin/env python3
import rospy
import actionlib
from my_first_robot.msg import CountUntilAction, CountUntilGoal

class CountUntilClient:
    def __init__(self):
        self._ac = actionlib.SimpleActionClient('/count_until', CountUntilAction)
        rospy.loginfo("Waiting for action server...")
        self._ac.wait_for_server()
        rospy.loginfo("Action server is available.")
    
    def send_goal(self, max_number):
        goal = CountUntilGoal()
        goal.max_number = max_number
        
        self._ac.send_goal(goal, done_cb=self.done_callback, feedback_cb=self.feedback_callback)
        rospy.loginfo("Goal sent: count until %d", max_number)
    
    def feedback_callback(self, feedback):
        rospy.loginfo("Feedback: %.1f%%", feedback.percentage * 100)
    
    def done_callback(self, status, result):
        rospy.loginfo("Done! Status: %d, Count: %d", status, result.count)
    
    def wait_for_result(self):
        self._ac.wait_for_result()
        return self._ac.get_result()

if __name__ == '__main__':
    rospy.init_node('count_until_client')
    client = CountUntilClient()
    client.send_goal(10)
    rospy.sleep(3.0)
    client._ac.cancel_goal()
    rospy.loginfo("Cancellation requested.")
    rospy.spin()
```

Key elements of the action client:
- `actionlib.SimpleActionClient`: The client object. It connects to the server and manages the action protocol.
- `wait_for_server()`: Blocks until the action server is available.
- `send_goal(goal, done_cb, feedback_cb)`: Sends the goal. The callbacks are optional but recommended for asynchronous operation.
- `done_callback(status, result)`: Called when the action is complete (succeeded, preempted, or aborted). The `status` is an integer code: 1 = pending, 2 = active, 3 = preempted, 4 = succeeded, 5 = aborted.
- `feedback_callback(feedback)`: Called every time the server sends feedback.
- `cancel_goal()`: Sends a preempt request to the server.
- `wait_for_result()`: Blocks until the action completes. Returns the result.

**Action states:**
- `PENDING` (1): The goal has been sent but not yet started.
- `ACTIVE` (2): The goal is currently being processed.
- `PREEMPTED` (3): The goal was canceled by the client.
- `SUCCEEDED` (4): The goal was completed successfully.
- `ABORTED` (5): The goal was aborted by the server (e.g., an error occurred).
- `REJECTED` (6): The server rejected the goal (e.g., invalid parameters).

**Comparison with services:**
- Actions are non-blocking (asynchronous), while services are blocking (synchronous).
- Actions provide feedback during execution; services do not.
- Actions can be canceled; services cannot.
- Actions are more complex to implement than services but essential for motion control and task execution.
- Behind the scenes, actions use multiple topics (goal, cancel, status, feedback, result) to implement the protocol. Actionlib hides this complexity.

#### Key concepts
- Actions for long-running, asynchronous tasks
- Action protocol: goal, feedback, result, preemption
- Actionlib library and `.action` files
- `---` separator for goal, result, and feedback sections
- `add_action_files()` and `actionlib_msgs` dependency
- SimpleActionServer: `execute_cb`, `publish_feedback`, `set_succeeded`, `set_preempted`, `is_preempt_requested()`
- SimpleActionClient: `wait_for_server`, `send_goal`, `done_cb`, `feedback_cb`, `cancel_goal`, `wait_for_result`
- Action states: PENDING, ACTIVE, PREEMPTED, SUCCEEDED, ABORTED, REJECTED
- Comparison: actions vs. services vs. topics
- Actionlib's internal topic usage (hidden from the programmer)

#### Hands-on activity
Create a custom action called `MoveRobot.action` with a goal containing a target pose (`geometry_msgs/Pose target_pose`), a result containing a boolean `success` and a string `message`, and feedback containing the current pose (`geometry_msgs/Pose current_pose`) and a float `progress` (0.0 to 1.0). Write a Python action server `move_robot_server.py` that simulates a robot moving to the target pose over 5 seconds, publishing feedback every 0.5 seconds. The server should handle preemption by stopping the movement. Write a Python action client `move_robot_client.py` that sends a goal to move to position (5, 5) and prints the feedback progress. After 2 seconds, the client should cancel the goal. Run both nodes and observe the action states (PENDING, ACTIVE, PREEMPTED) in the terminal output. Then modify the client to let the action complete successfully and observe the SUCCEEDED state.

#### Assessment idea
Ask: "A drone needs to take off, hover at 10 meters, and then land. The client wants to monitor the altitude during the flight and be able to abort the takeoff if a problem is detected. Should this be implemented as a service or an action? Why?" Answer: An action. The takeoff and hover are long-running tasks that take several seconds. The client needs to receive feedback (altitude updates) during the flight. The client also needs to be able to cancel the operation if necessary. A service would block the client for the entire duration and provide no feedback or cancellation capability. An action is the correct choice for this scenario. Then ask: "What happens if the client calls `cancel_goal()` after the server has already called `set_succeeded()`?" Answer: The cancellation request is ignored because the action is already complete. The client will receive the SUCCEEDED status and the result. The `cancel_goal()` method sends a preempt request to the server, but if the server has already finished, the request has no effect. This is why the client should check the action status before canceling, or design the application to handle the race condition gracefully.

#### AI generation note
Create a 10-minute animated lesson. Show the action protocol as a timeline: goal sent → server accepts → feedback pulses → result returned. Show the service as a single ping (request-response) and the action as a sustained connection with multiple messages. Show the SimpleActionServer as a worker with a status board: ACTIVE, SUCCEEDED, PREEMPTED. Show the client as a manager with a cancel button. Show the internal topics as hidden pipes that actionlib manages automatically. Show the action states as a state machine diagram with transitions. Show the Python code with the server and client side by side. Show `rqt_graph` with the action topics visible. Include a live coding segment with the count-until action. End with a reflection: "What long-running task on your robot would benefit from an action?"

---

### Chapter 4.2 — ROS Actions in C++ and Asynchronous Operation

#### Learning objectives
- Implement a SimpleActionServer in C++ using callback-based goal handling.
- Implement a SimpleActionClient in C++ with asynchronous callbacks for feedback and result.
- Handle goal preemption and cancellation in C++ action servers.
- Use `rqt_graph` to visualize the topic connections created by actionlib.

#### Detailed lesson content

While Python is excellent for rapid prototyping and simple nodes, C++ is the preferred language for performance-critical robotics applications. Action servers for motion control, sensor processing, and real-time task execution are often written in C++ because of its lower latency and better memory control. This chapter teaches you to implement ROS actions in C++ with the same functionality as the Python examples.

**SimpleActionServer in C++:**

```cpp
#include <ros/ros.h>
#include <actionlib/server/simple_action_server.h>
#include <my_first_robot/CountUntilAction.h>

class CountUntilServer {
public:
    CountUntilServer(ros::NodeHandle& nh) :
        _as(nh, "/count_until", boost::bind(&CountUntilServer::executeCB, this, _1), false) {
        _as.start();
        ROS_INFO("CountUntil server is ready.");
    }
    
    void executeCB(const my_first_robot::CountUntilGoalConstPtr& goal) {
        ROS_INFO("Goal received: count until %d", goal->max_number);
        
        bool success = true;
        ros::Rate rate(2);  // 2 Hz feedback
        
        for (int i = 1; i <= goal->max_number; ++i) {
            if (_as.isPreemptRequested()) {
                ROS_INFO("Preempted!");
                _as.setPreempted();
                success = false;
                break;
            }
            
            my_first_robot::CountUntilFeedback feedback;
            feedback.percentage = float(i) / float(goal->max_number);
            _as.publishFeedback(feedback);
            
            rate.sleep();
        }
        
        if (success) {
            my_first_robot::CountUntilResult result;
            result.count = goal->max_number;
            _as.setSucceeded(result);
            ROS_INFO("Goal succeeded: counted to %d", result.count);
        }
    }

private:
    actionlib::SimpleActionServer<my_first_robot::CountUntilAction> _as;
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "count_until_server");
    ros::NodeHandle nh;
    
    CountUntilServer server(nh);
    ros::spin();
    
    return 0;
}
```

Key differences from Python:
- The server is a class with a member variable `_as` of type `SimpleActionServer<CountUntilAction>`.
- The constructor uses `boost::bind` to connect the class method to the action server's callback. The `_1` placeholder represents the goal pointer.
- The goal is passed as a `ConstPtr` (constant shared pointer), which avoids copying the goal data.
- `isPreemptRequested()` and `setPreempted()` use camelCase instead of snake_case.
- `publishFeedback()` and `setSucceeded()` are the same concepts but with C++ syntax.

**CMakeLists.txt for C++ action server:**

```cmake
find_package(catkin REQUIRED COMPONENTS
  roscpp
  actionlib
  actionlib_msgs
  my_first_robot
)

add_executable(count_until_server src/count_until_server.cpp)
add_dependencies(count_until_server ${my_first_robot_EXPORTED_TARGETS})
target_link_libraries(count_until_server ${catkin_LIBRARIES})
```

The `add_dependencies` line is important: it ensures that the action message headers are generated before the C++ code is compiled. Without this, the compiler may fail because the action message headers do not yet exist.

**SimpleActionClient in C++:**

```cpp
#include <ros/ros.h>
#include <actionlib/client/simple_action_client.h>
#include <my_first_robot/CountUntilAction.h>

class CountUntilClient {
public:
    CountUntilClient() : _ac("/count_until", true) {
        ROS_INFO("Waiting for action server...");
        _ac.waitForServer();
        ROS_INFO("Action server is available.");
    }
    
    void sendGoal(int max_number) {
        my_first_robot::CountUntilGoal goal;
        goal.max_number = max_number;
        
        _ac.sendGoal(goal,
                     boost::bind(&CountUntilClient::doneCB, this, _1, _2),
                     boost::bind(&CountUntilClient::activeCB, this),
                     boost::bind(&CountUntilClient::feedbackCB, this, _1));
        ROS_INFO("Goal sent: count until %d", max_number);
    }
    
    void feedbackCB(const my_first_robot::CountUntilFeedbackConstPtr& feedback) {
        ROS_INFO("Feedback: %.1f%%", feedback->percentage * 100);
    }
    
    void activeCB() {
        ROS_INFO("Goal is now active.");
    }
    
    void doneCB(const actionlib::SimpleClientGoalState& state,
                const my_first_robot::CountUntilResultConstPtr& result) {
        ROS_INFO("Done! State: %s, Count: %d", state.toString().c_str(), result->count);
    }
    
    void cancelGoal() {
        _ac.cancelGoal();
        ROS_INFO("Cancellation requested.");
    }

private:
    actionlib::SimpleActionClient<my_first_robot::CountUntilAction> _ac;
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "count_until_client");
    ros::NodeHandle nh;
    
    CountUntilClient client;
    client.sendGoal(10);
    
    ros::Duration(3.0).sleep();
    client.cancelGoal();
    
    ros::spin();
    return 0;
}
```

The C++ client has four callbacks: `doneCB`, `activeCB`, `feedbackCB`, and the goal constructor. `boost::bind` is used to connect the class methods to the action client. The `SimpleClientGoalState` object provides detailed information about the final state of the action.

**Visualizing actions with rqt_graph:**

When you run an action server and client, actionlib creates several topics behind the scenes:
- `/count_until/cancel`
- `/count_until/feedback`
- `/count_until/goal`
- `/count_until/result`
- `/count_until/status`

Run `rqt_graph` and check "Actions" to see the action as a single block, or uncheck "Actions" to see the individual topics. This visualization helps you understand how actionlib abstracts the topic-level communication into a high-level action protocol.

**Asynchronous operation:**

Both the Python and C++ action clients can operate asynchronously, meaning the client's main thread is not blocked while the action is running. This is essential for robots that need to monitor multiple actions simultaneously. For example, a mobile robot might be executing a navigation action while also monitoring a sensor action and a manipulation action. The asynchronous callbacks allow the client to handle all three without blocking.

#### Key concepts
- C++ SimpleActionServer with `boost::bind` and `ConstPtr`
- C++ SimpleActionClient with four callbacks: done, active, feedback, and goal
- `actionlib::SimpleActionServer<T>` and `actionlib::SimpleActionClient<T>`
- `add_dependencies()` in CMakeLists.txt for action message generation
- `waitForServer()` and `sendGoal()` with callback bindings
- `isPreemptRequested()` and `setPreempted()` in C++
- `rqt_graph` visualization of action topics
- Asynchronous operation and multi-action monitoring
- `SimpleClientGoalState` for detailed result information

#### Hands-on activity
Write the C++ action server and client for the `CountUntil` action described in Chapter 4.1. Build the C++ server and test it with the Python client. Then test the Python server with the C++ client. Verify that the action protocol works across languages. Run `rqt_graph` and identify the five topics created by actionlib. Check and uncheck the "Actions" checkbox to see how actionlib abstracts the topics. Write a combined C++ client that sends two goals simultaneously to two different action servers (e.g., `/count_until` and `/count_until_fast`) and monitors both with separate callbacks. Verify that the client handles both feedback streams without blocking.

#### Assessment idea
Ask: "In the C++ action server, why is `boost::bind` used when registering the execute callback?" Answer: `boost::bind` is used to bind a class member function (`executeCB`) to the action server callback slot. The `_1` placeholder represents the goal pointer that the action server will pass to the callback. This is necessary because C++ does not allow passing member functions directly as callbacks (they require an implicit `this` pointer). `boost::bind` wraps the member function and the `this` pointer into a callable object that the action server can invoke. Then ask: "Why is `add_dependencies` important in `CMakeLists.txt` when building a C++ action server?" Answer: `add_dependencies` ensures that the action message headers (e.g., `CountUntilAction.h`) are generated by `catkin_make` before the C++ source file is compiled. Without this dependency, the compiler might try to compile the C++ code before the headers exist, causing a compilation error. This is a common mistake when building C++ nodes that use custom messages or actions.

#### AI generation note
Create a 10-minute animated lesson. Show the C++ action server as a class diagram with the `_as` member and the `executeCB` method. Show `boost::bind` as a wrapper that connects the class method to the action server. Show the four client callbacks as mailboxes: one for feedback, one for active, one for done, and one for the goal. Show `rqt_graph` with the action topics visible as a cluster of five connections. Show the language-agnostic nature of ROS by showing a Python client talking to a C++ server with a translation layer. Show asynchronous operation as a client juggling multiple actions at once. Include a live coding segment with the C++ action server. End with a reflection: "Why is C++ preferred for action servers in production robots?"

---

## Module 5: ROS Parameters, Launch Files, and System Integration

> **Goal:** Learn to configure ROS systems dynamically, launch multiple nodes with a single command, and integrate multiple components into a cohesive application.

---

### Chapter 5.1 — ROS Parameters and the Parameter Server

#### Learning objectives
- Use the ROS Parameter Server to store and retrieve configuration values.
- Set parameters from the command line, from nodes, and from YAML files.
- Understand the difference between private parameters, node parameters, and global parameters.
- Use dynamic parameter types: strings, integers, floats, booleans, and lists.

#### Detailed lesson content

As your ROS application grows, you will have many configuration values that need to be shared across nodes: the robot's name, the sensor read frequency, the PID controller gains, the simulation mode, the map file path, and so on. Hardcoding these values in your source code is a bad practice because it requires recompilation every time you change a setting. ROS provides the **Parameter Server** — a shared, dictionary-like key-value store that allows nodes to read and write configuration values at runtime.

The Parameter Server is created automatically when you run `roscore`. It is accessible to all nodes on the ROS network. Parameters are stored as typed values: integers, floats, booleans, strings, lists, and dictionaries. Each parameter has a unique name (like a filesystem path) such as `/robot_name`, `/sensor_frequency`, or `/robot1/pid_gains/kp`.

**Setting and getting parameters from the command line:**

```bash
# Set a parameter
rosparam set /robot_name "my_robot"
rosparam set /sensor_frequency 40
rosparam set /simulation_mode false

# Get a parameter
rosparam get /robot_name
# Output: my_robot

# List all parameters
rosparam list

# Delete a parameter
rosparam delete /robot_name

# Dump all parameters to a YAML file
rosparam dump params.yaml

# Load parameters from a YAML file
rosparam load params.yaml
```

YAML is the standard format for parameter files. A YAML file for robot configuration might look like:

```yaml
robot_name: "turtlebot_01"
simulation_mode: false
sensor_frequency: 40

pid_gains:
  kp: 2.0
  ki: 0.1
  kd: 0.5

waypoints:
  - [0.0, 0.0]
  - [1.0, 2.0]
  - [3.0, 1.0]
```

**Accessing parameters from Python nodes:**

```python
#!/usr/bin/env python3
import rospy

if __name__ == '__main__':
    rospy.init_node('param_reader')
    
    # Get parameters with default values
    robot_name = rospy.get_param('/robot_name', 'default_robot')
    sensor_freq = rospy.get_param('/sensor_frequency', 10)
    simulation = rospy.get_param('/simulation_mode', True)
    
    # Get nested parameters
    kp = rospy.get_param('/pid_gains/kp', 1.0)
    
    rospy.loginfo("Robot: %s, Freq: %d Hz, Sim: %s, Kp: %.2f",
                  robot_name, sensor_freq, simulation, kp)
    
    # Set a parameter
    rospy.set_param('/status', 'running')
```

**Accessing parameters from C++ nodes:**

```cpp
#include <ros/ros.h>

int main(int argc, char** argv) {
    ros::init(argc, argv, "param_reader");
    ros::NodeHandle nh;
    
    std::string robot_name;
    int sensor_freq;
    bool simulation;
    double kp;
    
    // Get parameters with default values
    nh.param<std::string>("/robot_name", robot_name, "default_robot");
    nh.param<int>("/sensor_frequency", sensor_freq, 10);
    nh.param<bool>("/simulation_mode", simulation, true);
    nh.param<double>("/pid_gains/kp", kp, 1.0);
    
    ROS_INFO("Robot: %s, Freq: %d Hz, Sim: %d, Kp: %.2f",
             robot_name.c_str(), sensor_freq, simulation, kp);
    
    // Set a parameter
    nh.setParam("/status", "running");
    
    return 0;
}
```

**Private vs. global parameters:**

Parameters can be prefixed with the node's name to make them **private** to that node:

```python
# In a node named 'motor_controller'
# This creates a parameter at /motor_controller/max_speed
rospy.get_param('~max_speed', 1.0)
```

The tilde `~` indicates a private parameter. Private parameters are useful for node-specific settings that should not conflict with other nodes. For example, two motor controller nodes (`/left_motor` and `/right_motor`) can each have their own `~max_speed` parameter without conflict.

Global parameters (with a leading `/`) are shared across all nodes. They are useful for system-wide settings like the robot name or simulation mode.

**Parameter best practices:**
- Use parameters for any value that might change between deployments or experiments.
- Use YAML files to store parameter sets for different configurations (e.g., `simulation_params.yaml`, `real_robot_params.yaml`).
- Use private parameters for node-specific settings to avoid naming conflicts.
- Document all parameters in your package's README or documentation.
- Validate parameter values when reading them (e.g., check that a frequency is positive).

#### Key concepts
- Parameter Server as a shared key-value dictionary
- `rosparam` command-line tools: set, get, list, delete, dump, load
- YAML format for parameter files
- `rospy.get_param()` and `rospy.set_param()` in Python
- `nh.param<T>()` and `nh.setParam()` in C++
- Default values for missing parameters
- Nested parameters using `/` separator
- Private parameters with `~` prefix
- Global parameters with `/` prefix
- Parameter best practices: YAML files, validation, documentation

#### Hands-on activity
Create a YAML file `robot_config.yaml` with parameters for a simulated robot: `robot_name`, `max_speed`, `sensor_frequency`, `pid_gains` (nested `kp`, `ki`, `kd`), and a list of `waypoints`. Load the parameters with `rosparam load robot_config.yaml`. Write a Python node `param_reader.py` that reads all these parameters and prints them. Verify that the nested parameters and lists are correctly parsed. Then write a C++ node `param_reader.cpp` that does the same thing. Build and run it. Finally, modify the YAML file to change the `max_speed` and reload the parameters without restarting the node. Observe that the node reads the updated value on its next `get_param` call (or if you implement a re-reading loop, observe the live update).

#### Assessment idea
Ask: "What is the difference between a global parameter (`/robot_name`) and a private parameter (`~max_speed`) in ROS?" Answer: A global parameter is stored at the root of the parameter namespace and is accessible to all nodes. A private parameter is stored under the node's namespace (e.g., `/motor_controller/max_speed`) and is intended for use by that specific node. Private parameters prevent naming conflicts when multiple nodes of the same type are running. For example, two motor controllers can each have their own `~max_speed` without interfering with each other. Then ask: "Why is it better to store configuration values in the Parameter Server rather than hardcoding them in the source code?" Answer: Hardcoded values require recompilation every time the configuration changes, which is slow and error-prone. The Parameter Server allows configuration to be changed at runtime or loaded from files without modifying or recompiling the code. This makes the system more flexible, easier to test with different settings, and more maintainable. It also allows the same compiled node to be used in different environments (simulation vs. real robot) by simply loading different parameter files.

#### AI generation note
Create a 10-minute animated lesson. Show the Parameter Server as a large dictionary or filing cabinet with labeled drawers. Show `rosparam set` as a hand placing a card in a drawer. Show `rosparam get` as a hand retrieving a card. Show the YAML file as a spreadsheet that is loaded into the filing cabinet. Show the Python and C++ code reading from the drawers. Show private parameters as drawers labeled with the node's name. Show global parameters as drawers in the main cabinet. Show parameter reloading as the spreadsheet being updated and the values changing in real-time. Include a live coding segment with the YAML file and parameter reader. End with a reflection: "What parameters would you configure for a robot operating in simulation vs. on a real robot?"

---

### Chapter 5.2 — Launch Files and System Orchestration

#### Learning objectives
- Write XML launch files that start multiple nodes, set parameters, and remap topic names.
- Understand the `<launch>`, `<node>`, `<param>`, `<rosparam>`, `<remap>`, and `<include>` tags.
- Use launch files to start a complete multi-node ROS system with a single command.
- Debug launch files using `roslaunch` and understand common errors.

#### Detailed lesson content

Running a ROS application typically involves starting `roscore`, then starting multiple nodes from different packages, setting parameters, and configuring topic names. Doing this manually for every node is tedious and error-prone. **Launch files** solve this problem by allowing you to define the entire system configuration in a single XML file. With one command (`roslaunch`), you can start `roscore`, set parameters, launch all nodes, and configure their connections.

Launch files are stored in the `launch/` directory of a package and have the `.launch` extension. Here is a simple launch file that starts a publisher and a subscriber:

```xml
<!-- File: launch/my_system.launch -->
<launch>
  <!-- Start roscore (automatic if not already running) -->
  
  <!-- Set global parameters -->
  <param name="robot_name" value="my_robot" />
  <param name="simulation_mode" value="true" />
  
  <!-- Load parameters from a YAML file -->
  <rosparam file="$(find my_first_robot)/config/robot_config.yaml" command="load" />
  
  <!-- Launch the publisher node -->
  <node pkg="my_first_robot" type="my_first_node.py" name="robot_publisher" output="screen" />
  
  <!-- Launch the subscriber node -->
  <node pkg="my_first_robot" type="my_first_node.py" name="robot_subscriber" output="screen" />
  
  <!-- Launch a node with a remapped topic -->
  <node pkg="my_first_robot" type="my_first_node.py" name="remapped_node" output="screen">
    <remap from="/old_topic" to="/new_topic" />
  </node>
  
  <!-- Launch a node with private parameters -->
  <node pkg="my_first_robot" type="my_first_node.py" name="param_node" output="screen">
    <param name="max_speed" value="1.5" />
    <param name="use_imu" value="true" />
  </node>
</launch>
```

**Key launch file tags:**

- `<launch>`: The root element. All other tags go inside it.
- `<node>`: Starts a ROS node. Attributes:
  - `pkg`: The package containing the node.
  - `type`: The executable name (Python script or C++ binary).
  - `name`: The node's name (overrides the name in `init_node()`).
  - `output`: Where to print the node's output. `screen` prints to the terminal. `log` prints to a log file.
  - `respawn`: If `true`, the node will restart automatically if it crashes.
  - `required`: If `true`, the entire launch file shuts down if this node exits.
  - `ns`: The namespace for the node (e.g., `ns="robot1"` prepends `/robot1/` to all topics and services).
- `<param>`: Sets a parameter on the Parameter Server. Can be inside `<launch>` (global) or inside `<node>` (private to that node).
- `<rosparam>`: Loads parameters from a YAML file. `command="load"` loads the file. `command="dump"` saves parameters to a file.
- `<remap>`: Remaps a topic or service name. Used when two packages use different names for the same concept. For example, if one package publishes `/cmd_vel` and another subscribes to `/robot/cmd_vel`, you can remap one to the other.
- `<include>`: Includes another launch file. This allows you to compose launch files from reusable pieces.
- `<arg>`: Defines an argument that can be passed to the launch file from the command line.

**Using arguments in launch files:**

```xml
<launch>
  <arg name="robot_name" default="my_robot" />
  <arg name="simulation" default="true" />
  
  <param name="robot_name" value="$(arg robot_name)" />
  <param name="simulation_mode" value="$(arg simulation)" />
  
  <node pkg="my_first_robot" type="robot_node.py" name="robot">
    <param name="name" value="$(arg robot_name)" />
  </node>
</launch>
```

Launch with arguments:
```bash
roslaunch my_first_robot my_system.launch robot_name:=turtlebot_01 simulation:=false
```

**Including other launch files:**

```xml
<launch>
  <!-- Include the turtlesim launch file -->
  <include file="$(find turtlesim)/launch/multisim.launch" />
  
  <!-- Include another launch file with arguments -->
  <include file="$(find my_first_robot)/launch/sensors.launch">
    <arg name="sensor_freq" value="50" />
  </include>
</launch>
```

The `$(find package_name)` syntax evaluates to the absolute path of the package's directory. This makes launch files portable — they work regardless of where the catkin workspace is located.

**Launching a complete system:**

A typical robot launch file for a mobile robot might look like:

```xml
<launch>
  <!-- Robot description (URDF) -->
  <param name="robot_description" textfile="$(find my_robot)/urdf/robot.urdf" />
  
  <!-- State publishers -->
  <node pkg="robot_state_publisher" type="robot_state_publisher" name="robot_state_publisher" />
  <node pkg="joint_state_publisher" type="joint_state_publisher" name="joint_state_publisher" />
  
  <!-- Sensors -->
  <include file="$(find my_robot)/launch/sensors.launch" />
  
  <!-- Navigation -->
  <include file="$(find my_robot)/launch/navigation.launch" />
  
  <!-- Visualization -->
  <node pkg="rviz" type="rviz" name="rviz" args="-d $(find my_robot)/rviz/robot.rviz" />
</launch>
```

This launch file starts the entire robot system: description, state publishers, sensors, navigation, and visualization. With one command, the entire robot is up and running.

**Common launch file errors:**
- **"Cannot find package"**: The package is not in the ROS package path. Source `devel/setup.bash`.
- **"Cannot find executable"**: The executable name is wrong. Check the `type` attribute. For Python scripts, make sure they are executable (`chmod +x`).
- **"Permission denied"**: The Python script is not executable. Run `chmod +x`.
- **"Node dies immediately"**: Check the node's output for errors. Use `output="screen"` to see the error messages.
- **"Topic not found"**: The topic name might be remapped incorrectly, or the publisher node is not starting.

#### Key concepts
- Launch files as XML system configuration
- `roslaunch` command for starting complete systems
- `<node>` tag: pkg, type, name, output, respawn, required, ns
- `<param>` and `<rosparam>` for parameter setting
- `<remap>` for topic and service name remapping
- `<include>` for composing launch files
- `<arg>` for command-line arguments with `$(arg)` substitution
- `$(find package_name)` for portable paths
- `output="screen"` for debugging node output
- Common launch file errors and troubleshooting

#### Hands-on activity
Write a launch file `my_system.launch` that: (1) sets a global parameter `robot_name` to `"turtlebot_01"`, (2) loads a YAML file `config/robot_params.yaml`, (3) launches the Python publisher node from Chapter 2.1 with the name `number_publisher`, (4) launches the Python subscriber node from Chapter 2.2 with the name `number_counter`, (5) launches a second instance of the publisher with `anonymous=True` and remapped topic `/number` to `/number_copy`, and (6) includes the turtlesim launch file. Run the launch file with `roslaunch` and verify all nodes are running with `rosnode list`. Verify the parameters with `rosparam list` and `rosparam get`. Kill one node with `rosnode kill` and observe that the other nodes continue running. Then modify the launch file to make one node `required="true"` and observe that killing it shuts down the entire launch.

#### Assessment idea
Ask: "You have two packages: `package_A` publishes to `/cmd_vel`, and `package_B` subscribes to `/robot/cmd_vel`. How can you connect them without modifying either package's source code?" Answer: Use a launch file with a `<remap>` tag. In the node that runs `package_B`, add `<remap from="/robot/cmd_vel" to="/cmd_vel" />`. This tells ROS to redirect all subscriptions to `/robot/cmd_vel` within that node to `/cmd_vel` instead. Remapping is a powerful feature that allows you to compose packages without changing their code. Then ask: "What is the difference between `<param>` and `<rosparam>` in a launch file?" Answer: `<param>` sets a single parameter with a single value (e.g., `<param name="max_speed" value="1.5" />`). `<rosparam>` loads multiple parameters from a YAML file (e.g., `<rosparam file="config/params.yaml" command="load" />`). `<rosparam>` is used when you have many parameters organized in a structured file, while `<param>` is used for simple, one-off parameter settings.

#### AI generation note
Create a 10-minute animated lesson. Show the launch file as a control panel with switches for each node. Show `roslaunch` as a big green button that starts everything. Show the XML tags as labeled blocks: `<node>` as a robot, `<param>` as a dial, `<remap>` as a redirect sign, `<include>` as a plug-in module. Show the ROS graph before and after remapping. Show the YAML file being loaded into the parameter server. Show `$(find)` as a compass that locates the package. Show the `required="true"` node as a domino that knocks down the rest when it falls. Show common errors as red warning signs with fixes. Include a live coding segment with the launch file creation and execution. End with a reflection: "What would your robot's main launch file look like?"

---

## Module 6: ROS Tools, Debugging, and Visualization

> **Goal:** Master the ROS ecosystem of debugging, logging, and visualization tools that make development and troubleshooting efficient.

---

### Chapter 6.1 — ROS Command-Line Tools and Logging

#### Learning objectives
- Use `rosnode`, `rostopic`, `rosservice`, `rosparam`, `rosmsg`, `rossrv`, and `rospack` to inspect and debug a running ROS system.
- Configure ROS logging levels (DEBUG, INFO, WARN, ERROR, FATAL) and understand log output destinations.
- Use `roslaunch` with logging and output options.
- Find and interpret log files for debugging node crashes and errors.

#### Detailed lesson content

ROS provides a rich set of command-line tools that allow you to inspect, debug, and manipulate a running ROS system without writing any code. These tools are the bread and butter of ROS development, and mastering them will make you dramatically more productive.

**rosnode — node inspection:**

```bash
# List all running nodes
rosnode list

# Show detailed information about a node
rosnode info /my_node

# Ping a node to check if it is responsive
rosnode ping /my_node

# Kill a node
rosnode kill /my_node

# Clean up stale node registrations
rosnode cleanup
```

`rosnode info` is particularly useful. It shows:
- The node's publications (topics it publishes to).
- The node's subscriptions (topics it subscribes to).
- The node's services (services it advertises).
- The node's PID and URI.
- The connections to other nodes.

**rostopic — topic inspection:**

```bash
# List all active topics
rostopic list

# Show detailed information about a topic
rostopic info /my_topic

# Print messages as they arrive
rostopic echo /my_topic

# Show the message type of a topic
rostopic type /my_topic

# Show the publishing rate (Hz)
rostopic hz /my_topic

# Show the bandwidth usage
rostopic bw /my_topic

# Find topics by message type
rostopic find geometry_msgs/Twist

# Publish a message manually
rostopic pub /my_topic std_msgs/String "data: 'hello'"

# Publish at a rate
rostopic pub -r 10 /my_topic std_msgs/String "data: 'hello'"
```

**rosservice — service inspection:**

```bash
# List all active services
rosservice list

# Show service information
rosservice info /my_service

# Call a service
rosservice call /my_service "request_field: value"

# Show the service type
rosservice type /my_service

# Show the service arguments
rosservice args /my_service
```

**rosparam — parameter inspection:**

```bash
# List all parameters
rosparam list

# Get a parameter value
rosparam get /my_param

# Set a parameter
rosparam set /my_param value

# Dump parameters to a file
rosparam dump params.yaml

# Load parameters from a file
rosparam load params.yaml
```

**rosmsg and rossrv — message inspection:**

```bash
# Show the structure of a message type
rosmsg show geometry_msgs/Twist

# Show the structure of a service type
rossrv show turtlesim/Spawn

# List all message types in a package
rosmsg package std_msgs
```

**rospack — package navigation:**

```bash
# Find the path to a package
rospack find my_package

# List dependencies of a package
rospack depends my_package

# List all packages
rospack list
```

**ROS Logging:**

ROS provides a logging system that is similar to Python's `logging` module or C++ loggers. Each log message has a severity level:
- `DEBUG`: Detailed information for debugging purposes. Only visible if the logging level is set to DEBUG.
- `INFO`: General information about the node's operation. The default level.
- `WARN`: Warning messages that indicate potential problems but do not prevent operation.
- `ERROR`: Error messages that indicate a problem that prevented an operation from completing.
- `FATAL`: Critical errors that indicate the node cannot continue running.

In Python:
```python
rospy.logdebug("This is a debug message: x = %f", x)
rospy.loginfo("Node started successfully.")
rospy.logwarn("Battery is low: %d%%", battery)
rospy.logerr("Failed to connect to sensor.")
rospy.logfatal("Critical error: shutting down.")
```

In C++:
```cpp
ROS_DEBUG("This is a debug message: x = %f", x);
ROS_INFO("Node started successfully.");
ROS_WARN("Battery is low: %d%%", battery);
ROS_ERROR("Failed to connect to sensor.");
ROS_FATAL("Critical error: shutting down.");
```

Log messages are printed to the console (if `output="screen"` is set in the launch file) and also written to log files in `~/.ros/log/`. Each run of `roslaunch` creates a new log directory with a timestamp. You can inspect these log files to find error messages from nodes that have crashed or printed errors.

**Setting the logging level:**

```bash
# Set the logging level for a specific node
rosc.set_logger_level('rosout', 'DEBUG')
```

Or in a launch file:
```xml
<node pkg="my_package" type="my_node.py" name="my_node" output="screen">
  <env name="ROS_PYTHON_LOG_LEVEL" value="DEBUG" />
</node>
```

**rqt_logger_level:** A GUI tool for dynamically changing the logging level of running nodes without restarting them. This is invaluable for debugging: you can set a node to DEBUG to see detailed output, then set it back to INFO to reduce noise.

**Log file locations:**
- `~/.ros/log/latest/` — the most recent log directory.
- `~/.ros/log/latest/rosout.log` — aggregated log messages from all nodes.
- `~/.ros/log/latest/my_node-1.log` — log messages from a specific node.

#### Key concepts
- `rosnode`: list, info, ping, kill, cleanup
- `rostopic`: list, info, echo, type, hz, bw, find, pub
- `rosservice`: list, info, call, type, args
- `rosparam`: list, get, set, dump, load
- `rosmsg`: show, package
- `rossrv`: show
- `rospack`: find, depends, list
- ROS logging levels: DEBUG, INFO, WARN, ERROR, FATAL
- `rospy.loginfo()`, `ROS_INFO()`, `rospy.logerr()`, `ROS_ERROR()`
- Log files in `~/.ros/log/`
- `rqt_logger_level` for dynamic logging level changes
- `output="screen"` for console output in launch files

#### Hands-on activity
Launch the turtlesim system with `roslaunch turtlesim turtlesim.launch` (or run `roscore`, `turtlesim_node`, and `turtle_teleop_key` manually). Use each of the command-line tools above to inspect the system: `rosnode list` to see nodes, `rosnode info` to see their connections, `rostopic list` to see topics, `rostopic echo /turtle1/cmd_vel` to see velocity commands, `rostopic hz /turtle1/cmd_vel` to measure the rate, `rosservice list` to see services, `rosservice call /turtle1/teleport_absolute` to move the turtle, `rosparam list` to see parameters, `rosparam get /background_r` to get the background color. Then, modify the `turtlesim_node` to print a `WARN` log when the turtle hits the wall. Use `rqt_logger_level` to change the logging level to DEBUG and observe the additional output. Find the log files in `~/.ros/log/latest/` and inspect them.

#### Assessment idea
Ask: "A node is publishing messages to a topic, but a subscriber node is not receiving them. What sequence of `rostopic` and `rosnode` commands would you use to diagnose the problem?" Answer: (1) `rostopic list` to verify the topic exists. (2) `rostopic info /topic_name` to verify that both the publisher and subscriber are registered for the topic. (3) `rosnode info /publisher_node` to verify the publisher is actually publishing. (4) `rostopic echo /topic_name` to verify messages are being sent. (5) `rosnode info /subscriber_node` to verify the subscriber is connected to the publisher. If the subscriber is not in the topic's subscriber list, it may have the wrong topic name or the message type may not match. If the topic exists but `rostopic echo` shows no messages, the publisher may not be publishing. Then ask: "Where are ROS log files stored, and why is this useful for debugging?" Answer: ROS log files are stored in `~/.ros/log/latest/` (or a timestamped directory for each `roslaunch` run). They contain the console output of all nodes, including error messages and stack traces. This is useful for debugging because you can inspect the logs after a node has crashed to find the error message that caused the crash. You can also use `roslog` tools to search and filter the logs.

#### AI generation note
Create a 10-minute animated lesson. Show the ROS command-line tools as a detective's toolkit: `rosnode` as a magnifying glass for nodes, `rostopic` as a stethoscope for topics, `rosservice` as a phone for services, `rosparam` as a key for parameters. Show each command with its output in a terminal window. Show logging levels as a traffic light: DEBUG (green), INFO (blue), WARN (yellow), ERROR (red), FATAL (black). Show log files as a filing cabinet with folders organized by timestamp. Show `rqt_logger_level` as a slider that changes the traffic light level. Show a debugging scenario: a node is not working, and the detective uses the toolkit to find the problem. Include a live terminal recording. End with a reflection: "Which ROS tool would you use first when your robot is not behaving as expected?"

---

### Chapter 6.2 — Visualization with rqt_graph, RViz, and rqt

#### Learning objectives
- Use `rqt_graph` to visualize the node-topic graph of a running ROS system.
- Use RViz to visualize sensor data, robot models, and coordinate frames in 3D.
- Use `rqt_plot` to plot topic data in real-time.
- Use `rqt_reconfigure` to dynamically change node parameters at runtime.
- Use `rosbag` to record and playback topic data for debugging and testing.

#### Detailed lesson content

Debugging a ROS system by reading terminal output is like trying to understand a city by reading a phone book. ROS provides powerful visualization tools that allow you to see your robot, its data, and its communication graph in real-time. These tools are essential for understanding what your robot is doing, diagnosing problems, and presenting your work to others.

**rqt_graph — the communication graph:**

`rqt_graph` displays the node-topic graph of your ROS system. Nodes are shown as ellipses, topics as rectangles, and actions as hexagons. The graph shows which nodes are publishing to which topics and which nodes are subscribing. This is the single most useful tool for understanding a ROS system.

```bash
# Launch rqt_graph
rosrun rqt_graph rqt_graph

# Or launch the full rqt GUI with plugins
rqt
```

In `rqt_graph`, you can:
- Hide dead nodes (nodes that are registered but have no connections).
- Hide debug nodes (like `/rosout`).
- Show or hide actions.
- Group nodes by namespace.
- Save the graph as an image.

When you see a node that should be connected to a topic but is not, you have found a bug. When you see two nodes publishing to the same topic with different message types, you have found a configuration error. `rqt_graph` makes these problems visible instantly.

**RViz — the 3D robot visualizer:**

RViz is the flagship visualization tool of ROS. It displays 3D sensor data, robot models, coordinate frames, paths, and maps. It is the primary tool for debugging robot perception, navigation, and manipulation.

```bash
# Launch RViz
rosrun rviz rviz

# Or launch with a configuration file
rosrun rviz rviz -d $(find my_package)/rviz/config.rviz
```

RViz displays data using **displays** that subscribe to specific topics:
- **RobotModel:** Displays the URDF model of the robot (joints, links, meshes).
- **LaserScan:** Displays 2D LiDAR data as a point cloud in the XY plane.
- **PointCloud2:** Displays 3D point clouds from LiDAR or depth cameras.
- **Image:** Displays camera images.
- **TF:** Displays coordinate frames (the robot's body frame, sensor frames, world frame).
- **Path:** Displays planned paths for navigation.
- **Map:** Displays 2D occupancy grid maps.
- **Marker:** Displays custom 3D shapes and text for debugging.

To use RViz, you specify the topic name for each display. For example, to visualize LiDAR data, you add a LaserScan display and set its topic to `/scan`. To visualize the robot model, you add a RobotModel display, which automatically reads the robot description from the `/robot_description` parameter.

**rqt_plot — real-time data plotting:**

```bash
# Plot a single field
rosrun rqt_plot rqt_plot /topic/field

# Plot multiple fields
rosrun rqt_plot rqt_plot /cmd_vel/linear/x /cmd_vel/angular/z

# Plot nested fields
rosrun rqt_plot rqt_plot /sensor_data/temperature
```

`rqt_plot` is invaluable for tuning controllers and debugging sensor data. When you are tuning a PID controller, you can plot the setpoint and the measured value on the same graph to see the tracking error. When you are debugging an IMU, you can plot the accelerometer and gyroscope readings to check for noise and drift.

**rqt_reconfigure — dynamic parameter tuning:**

```bash
rosrun rqt_reconfigure rqt_reconfigure
```

`rqt_reconfigure` provides a GUI for dynamically changing parameters of running nodes. It is particularly useful for tuning PID gains, threshold values, and other control parameters without restarting the node. The node must be written to use `dynamic_reconfigure` (a ROS library for parameter callbacks), but many standard ROS nodes already support it.

**rosbag — recording and playback:**

`rosbag` is a tool for recording and playing back topic data. It is essential for:
- **Debugging:** Record a sensor data stream while the robot is running, then play it back in the lab to reproduce the bug.
- **Testing:** Record test data and play it back to verify that your algorithm produces the same output.
- **Data collection:** Record large datasets for machine learning or analysis.
- **Demonstration:** Record a robot run and play it back to show a demonstration without the robot.

```bash
# Record all topics
rosbag record -a

# Record specific topics
rosbag record /camera/image_raw /scan /cmd_vel

# Record with a custom filename
rosbag record -O my_data.bag /camera/image_raw /scan

# List the contents of a bag file
rosbag info my_data.bag

# Play back a bag file
rosbag play my_data.bag

# Play back at half speed
rosbag play my_data.bag -r 0.5

# Play back in a loop
rosbag play my_data.bag -l
```

When you play back a bag file, the recorded messages are published on the original topics at the original timestamps. This allows you to test your subscriber nodes with real data without having the physical sensors connected.

**Common mistakes with visualization tools:**
- **RViz shows nothing:** The topic name is wrong, or the message type does not match the display type. Check with `rostopic list` and `rostopic type`.
- **RViz shows a "Fixed Frame" error:** The fixed frame (reference coordinate frame) does not exist. Set it to a valid frame like `world`, `map`, or `base_link`.
- **rqt_plot shows flat lines:** The field path is wrong. Use `rostopic echo` to find the correct field name.
- **rosbag playback desyncs:** The bag file was recorded on a system with a different clock. Use `--clock` to publish the simulated clock.

#### Key concepts
- `rqt_graph`: node-topic visualization, debugging connections
- RViz: 3D robot visualization, sensor data display, coordinate frames
- RViz displays: RobotModel, LaserScan, PointCloud2, Image, TF, Path, Map, Marker
- `rqt_plot`: real-time data plotting for tuning and debugging
- `rqt_reconfigure`: dynamic parameter tuning without restarting
- `rosbag`: recording and playback of topic data
- `rosbag record -a`, `rosbag play`, `rosbag info`
- Bag file playback for offline debugging and testing
- Fixed frame in RViz and TF frames
- Common visualization mistakes and troubleshooting

#### Hands-on activity
Launch the turtlesim system. Open `rqt_graph` and observe the graph. Hide dead nodes and debug nodes. Take a screenshot of the graph. Open RViz and add a TF display to visualize the turtle's coordinate frame (note: turtlesim does not publish TF by default, so you may need to add a static transform publisher). Open `rqt_plot` and plot the turtle's position (`/turtle1/pose/x` and `/turtle1/pose/y`) in real-time as you move the turtle with the keyboard. Open `rqt_reconfigure` and explore any available parameters. Record a 30-second bag file of `/turtle1/cmd_vel` and `/turtle1/pose`. Kill the turtlesim node and play back the bag file. Observe the messages being republished with `rostopic echo`. Then write a Python node that subscribes to the republished `/turtle1/pose` and plots the trajectory in a 2D matplotlib graph.

#### Assessment idea
Ask: "You are debugging a navigation algorithm that produces erratic velocity commands. Which ROS tool would you use to visualize the commanded velocity over time, and what would you look for?" Answer: `rqt_plot` is the best tool. You would plot `/cmd_vel/linear/x` and `/cmd_vel/angular/z` over time. You would look for: (1) sudden spikes that indicate the algorithm is producing unrealistic commands, (2) oscillations that indicate the controller is unstable, (3) constant offsets that indicate a bias or calibration error, (4) noise that indicates sensor input problems. By comparing the commanded velocity to the actual velocity (from odometry), you can determine whether the problem is in the planning algorithm or the controller. Then ask: "What is the difference between `rqt_graph` and RViz?" Answer: `rqt_graph` shows the communication topology of the ROS system: which nodes are connected to which topics. It is a graph of the software architecture. RViz shows the physical state of the robot and its environment: the robot's position, sensor data, maps, and paths. It is a 3D visualization of the robot's world. They serve completely different purposes: `rqt_graph` is for debugging software connections, while RViz is for debugging robot behavior and sensor data.

#### AI generation note
Create a 10-minute animated lesson. Show `rqt_graph` as a subway map with stations (nodes) and lines (topics). Show RViz as a 3D window with a robot, LiDAR points, and a map. Show `rqt_plot` as a real-time graph with curves updating. Show `rqt_reconfigure` as a control panel with sliders. Show `rosbag` as a video recorder and player for sensor data. Show a debugging scenario: the robot is moving erratically, and the developer uses `rqt_plot` to see the velocity commands, `rqt_graph` to check the node connections, and RViz to see the robot in 3D. Show the bag file playback as a time machine that replays the sensor data. Include a live screen recording of the tools in action. End with a reflection: "Which visualization tool would you use to debug a robot that is not following its planned path?"

---

## Module 7: Robot Simulation and Capstone Projects

> **Goal:** Apply all ROS skills to build complete robot simulations and a capstone project that integrates multiple components.

---

### Chapter 7.1 — Simulating Robots with Gazebo and URDF

#### Learning objectives
- Understand the URDF format for describing robot kinematics, links, and joints.
- Write a simple URDF file for a mobile robot with wheels and a sensor.
- Launch a robot in Gazebo and control it with ROS topics.
- Use the `gazebo_ros` plugins to connect Gazebo sensors and actuators to ROS topics.

#### Detailed lesson content

Before you deploy code on a real robot, you should test it in simulation. **Gazebo** is the 3D physics simulator that integrates with ROS. It simulates rigid body dynamics, collisions, sensors (cameras, LiDAR, IMU), and actuators (motors, servos). Gazebo allows you to develop and debug your robot's behavior in a safe, repeatable environment before risking physical hardware.

To simulate a robot in Gazebo, you need a **URDF** (Unified Robot Description Format) file. URDF is an XML format that describes the robot's physical structure: its links (rigid bodies), joints (connections between links), and their geometric and inertial properties.

A simple URDF for a mobile robot:

```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <!-- Base link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.3 0.1" />
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1" />
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.3 0.1" />
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0" />
      <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01" />
    </inertial>
  </link>
  
  <!-- Right wheel -->
  <link name="right_wheel">
    <visual>
      <geometry>
        <cylinder radius="0.05" length="0.05" />
      </geometry>
      <material name="black">
        <color rgba="0 0 0 1" />
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder radius="0.05" length="0.05" />
      </geometry>
    </collision>
    <inertial>
      <mass value="0.1" />
      <inertia ixx="0.0001" ixy="0" ixz="0" iyy="0.0001" iyz="0" izz="0.0001" />
    </inertial>
  </link>
  
  <joint name="right_wheel_joint" type="continuous">
    <parent link="base_link" />
    <child link="right_wheel" />
    <origin xyz="0.2 -0.15 0" rpy="0 1.5708 0" />
    <axis xyz="0 0 1" />
  </joint>
  
  <!-- Left wheel (similar structure) -->
  <link name="left_wheel">
    <!-- ... same as right wheel ... -->
  </link>
  
  <joint name="left_wheel_joint" type="continuous">
    <parent link="base_link" />
    <child link="left_wheel" />
    <origin xyz="0.2 0.15 0" rpy="0 1.5708 0" />
    <axis xyz="0 0 1" />
  </joint>
  
  <!-- Gazebo plugin for differential drive -->
  <gazebo>
    <plugin name="differential_drive_controller" filename="libgazebo_ros_diff_drive.so">
      <legacyMode>false</legacyMode>
      <alwaysOn>true</alwaysOn>
      <updateRate>50</updateRate>
      <leftJoint>left_wheel_joint</leftJoint>
      <rightJoint>right_wheel_joint</rightJoint>
      <wheelSeparation>0.3</wheelSeparation>
      <wheelDiameter>0.1</wheelDiameter>
      <torque>0.5</torque>
      <commandTopic>cmd_vel</commandTopic>
      <odometryTopic>odom</odometryTopic>
      <odometryFrame>odom</odometryFrame>
      <robotBaseFrame>base_link</robotBaseFrame>
    </plugin>
  </gazebo>
</robot>
```

Key URDF elements:
- `<link>`: A rigid body with visual, collision, and inertial properties.
- `<joint>`: A connection between two links. Types include `fixed`, `revolute`, `continuous`, `prismatic`, and `floating`.
- `<visual>`: The geometry used for visualization (in RViz and Gazebo).
- `<collision>`: The geometry used for collision detection (often a simplified version of the visual geometry).
- `<inertial>`: The mass and inertia tensor of the link. Required for accurate physics simulation.
- `<gazebo>`: Gazebo-specific properties, including plugins that connect Gazebo to ROS.

**Gazebo plugins:**
Gazebo plugins are shared libraries that add functionality to the simulation. The `gazebo_ros_diff_drive` plugin, for example, subscribes to `/cmd_vel` and applies forces to the wheels to make the robot move. It also publishes odometry data on `/odom`. This means that once the plugin is configured, you can control the simulated robot with the same ROS topics you would use for a real robot.

**Loading the URDF in Gazebo:**

```xml
<!-- launch/robot_gazebo.launch -->
<launch>
  <!-- Load the URDF into the parameter server -->
  <param name="robot_description" textfile="$(find my_first_robot)/urdf/my_robot.urdf" />
  
  <!-- Start Gazebo with an empty world -->
  <include file="$(find gazebo_ros)/launch/empty_world.launch" />
  
  <!-- Spawn the robot in Gazebo -->
  <node pkg="gazebo_ros" type="spawn_model" name="spawn_robot" 
        args="-param robot_description -urdf -model my_robot -x 0 -y 0 -z 0.1" />
  
  <!-- Start robot state publisher -->
  <node pkg="robot_state_publisher" type="robot_state_publisher" name="robot_state_publisher" />
</launch>
```

Launch the simulation:
```bash
roslaunch my_first_robot robot_gazebo.launch
```

Then control the robot:
```bash
rostopic pub /cmd_vel geometry_msgs/Twist "linear:
  x: 0.5
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.2"
```

The robot should move forward and turn in the Gazebo simulation.

**Safety note:** Gazebo is a physics simulator, not a video game. It uses realistic physics models, which means robots can tip over, collide, and behave unexpectedly. Always start with simple robots and low velocities. When you transition from simulation to a real robot, expect differences: real motors have friction, real sensors have noise, and real environments have unpredictable elements.

#### Key concepts
- Gazebo as a 3D physics simulator for ROS
- URDF format for robot description: links, joints, visual, collision, inertial
- Joint types: fixed, revolute, continuous, prismatic, floating
- Gazebo plugins: `gazebo_ros_diff_drive`, `gazebo_ros_laser`, `gazebo_ros_camera`
- Connecting Gazebo to ROS via plugins: `/cmd_vel`, `/odom`, `/scan`, `/camera/image_raw`
- Launching Gazebo with `empty_world.launch`
- Spawning a robot with `spawn_model`
- `robot_state_publisher` for broadcasting TF frames
- Simulation vs. reality: physics, noise, and unpredictability

#### Hands-on activity
Write a URDF file for a simple differential-drive robot with a rectangular base, two cylindrical wheels, and a caster wheel. Add a LiDAR sensor using the `gazebo_ros_ray` plugin. Add a camera using the `gazebo_ros_camera` plugin. Write a launch file `robot_gazebo.launch` that loads the URDF, starts Gazebo, and spawns the robot. Launch the simulation and verify that the robot appears in Gazebo. Publish velocity commands to `/cmd_vel` and observe the robot moving. Check the LiDAR data with `rostopic echo /scan`. Check the camera data with `rostopic echo /camera/image_raw` (or view it in RViz with an Image display). Then write a Python node that reads the LiDAR data and publishes velocity commands to avoid obstacles: if the closest obstacle is within 0.5 meters, turn; otherwise, move forward. Test the obstacle avoidance behavior in Gazebo.

#### Assessment idea
Ask: "Why does the URDF need both `<visual>` and `<collision>` geometry for each link?" Answer: The `<visual>` geometry is used for rendering the robot in RViz and Gazebo. It can be detailed and complex (e.g., a mesh with thousands of triangles) because it only affects what the user sees. The `<collision>` geometry is used by the physics engine for collision detection. It should be simplified (e.g., boxes, cylinders, spheres) because the physics engine must compute collisions in real-time, and complex meshes are computationally expensive. Using separate geometries allows the robot to look realistic while simulating efficiently. Then ask: "What is the purpose of the `gazebo_ros_diff_drive` plugin, and what ROS topics does it use?" Answer: The plugin connects the Gazebo physics simulation to ROS by simulating a differential-drive controller. It subscribes to `/cmd_vel` (velocity commands) and applies torques to the wheel joints to make the robot move. It publishes `/odom` (odometry data) by computing the robot's position from the wheel rotations. It also publishes the TF transform from `odom` to `base_link`. This allows the same ROS code to control both simulated and real robots.

#### AI generation note
Create a 10-minute animated lesson. Show the URDF file as a blueprint that describes a robot's body. Show the links as LEGO bricks and the joints as hinges. Show the visual geometry as a detailed 3D model and the collision geometry as a simplified bounding box. Show Gazebo as a physics sandbox where the robot moves and collides. Show the plugin as a translator that converts ROS messages into physics forces. Show the launch file as a script that sets up the entire scene. Show the robot moving in Gazebo in response to `/cmd_vel` commands. Show the LiDAR data as a fan of rays and the camera as a viewport. Show the obstacle avoidance node as a brain that processes LiDAR data and outputs velocity commands. Include a live screen recording of the Gazebo simulation. End with a reflection: "What sensor would you add to your simulated robot, and why?"

---

### Chapter 7.2 — Capstone Project: Building a Complete ROS Application

#### Learning objectives
- Design and implement a multi-node ROS application that integrates publishers, subscribers, services, actions, and parameters.
- Use launch files to orchestrate the entire application.
- Test the application in simulation and debug it using ROS tools.
- Document the application with clear instructions and architecture diagrams.

#### Detailed lesson content

The capstone project is the culmination of your ROS learning. You will build a complete, multi-node ROS application that demonstrates all the core concepts you have learned. The recommended project is a **simulated warehouse patrol robot** that autonomously navigates between waypoints, avoids obstacles, reports its status, and can be controlled remotely.

**Project specification:**

1. **Robot model:** A differential-drive mobile robot with a LiDAR sensor and a camera, defined in URDF and simulated in Gazebo.

2. **Nodes:**
   - **waypoint_manager** (Python): Reads a list of waypoints from the Parameter Server. Publishes the current target waypoint on `/target_waypoint` (geometry_msgs/Pose). Cycles through the waypoints in a loop.
   - **navigation_controller** (Python): Subscribes to `/target_waypoint` and `/odom`. Computes a simple proportional controller to drive the robot toward the waypoint. Publishes velocity commands on `/cmd_vel` (geometry_msgs/Twist).
   - **obstacle_avoider** (Python): Subscribes to `/scan` (sensor_msgs/LaserScan). If an obstacle is within 0.5 meters directly ahead, publishes a stop command on `/cmd_vel` and sets a parameter `/obstacle_detected` to `true`.
   - **status_monitor** (Python): Subscribes to `/odom` and reads the `/obstacle_detected` parameter. Publishes a `RobotStatus` custom message on `/robot_status` every 1 second, containing the robot's position, whether an obstacle is detected, and the current waypoint index.
   - **led_controller** (Python): A service server `/set_led` that controls a simulated LED panel (3 LEDs). The red LED turns on when `/obstacle_detected` is true. The green LED turns on when the robot is moving. The yellow LED turns on when the robot is at a waypoint.
   - **remote_controller** (C++): An action client that sends a goal to `/move_to_waypoint` (a custom action). The goal is a waypoint index. The action server is implemented in the navigation_controller. The remote controller can cancel the goal at any time.
   - **emergency_stop** (Python): A service client `/emergency_stop` that, when called, sets a parameter `/emergency_stop` to `true`. All nodes check this parameter and stop their operation if it is true.

3. **Communication:**
   - Topics: `/cmd_vel`, `/odom`, `/scan`, `/target_waypoint`, `/robot_status`, `/camera/image_raw`
   - Services: `/set_led`, `/emergency_stop`
   - Actions: `/move_to_waypoint`
   - Parameters: `/waypoints`, `/obstacle_detected`, `/emergency_stop`, `/robot_name`

4. **Launch file:** A single launch file `warehouse_patrol.launch` that starts Gazebo, spawns the robot, starts all nodes, sets parameters, and opens RViz.

5. **Behavior:**
   - The robot starts at waypoint 0.
   - It moves to waypoint 1, then waypoint 2, then back to waypoint 0, in a loop.
   - If an obstacle is detected, the robot stops and the red LED turns on.
   - When the obstacle is cleared, the robot resumes.
   - The status monitor reports the robot's state every second.
   - The remote controller can command the robot to go to a specific waypoint.
   - The emergency stop service halts the entire system.

**Architecture diagram:**

```
[waypoint_manager] --(topic)--> [navigation_controller] --(topic)--> [Gazebo robot]
                                        |                              |
                                        | (action)                     | (topic)
                                        v                              v
[remote_controller]               [obstacle_avoider] <--- [LiDAR]
                                        |
                                        | (topic)
                                        v
[status_monitor] --(topic)--> [RViz/User]
                                        |
                                        | (service)
                                        v
[led_controller]
```

**Implementation tips:**
- Start by implementing one node at a time and testing it with `rostopic` and `rosservice`.
- Use `rqt_graph` frequently to verify that nodes are connected correctly.
- Use `rostopic echo` and `rqt_plot` to verify that data is flowing correctly.
- Use `rosbag` to record a test run and replay it for debugging.
- Document each node with a README that explains its purpose, inputs, outputs, and parameters.
- Use Git for version control. Commit after each working node.

**Testing checklist:**
- [ ] Robot moves between waypoints in simulation.
- [ ] Robot stops when an obstacle is within 0.5 meters.
- [ ] Robot resumes when the obstacle is cleared.
- [ ] Status monitor publishes correct data.
- [ ] LED controller responds to service calls.
- [ ] Remote controller can send and cancel goals.
- [ ] Emergency stop halts all operations.
- [ ] Launch file starts the entire system with one command.
- [ ] RViz displays the robot, sensor data, and status.
- [ ] All nodes are documented and the code is clean.

#### Key concepts
- Multi-node ROS application design
- Integration of topics, services, actions, and parameters
- System architecture and communication diagrams
- Incremental development and testing
- Launch file orchestration
- Simulation-based testing in Gazebo
- Debugging with ROS tools: rqt_graph, rostopic, rosbag, RViz
- Documentation and version control
- Real-world vs. simulation considerations

#### Hands-on activity
Implement the warehouse patrol robot project as described above. Work incrementally: first create the URDF and Gazebo simulation, then add the waypoint manager, then the navigation controller, then the obstacle avoider, then the status monitor, then the LED controller, then the remote controller, then the emergency stop. Test each component individually before integrating. Write a `warehouse_patrol.launch` file that starts the entire system. Create a 3-minute demonstration video showing the robot navigating between waypoints, stopping for obstacles, and responding to the remote controller. Write a project report with the architecture diagram, node descriptions, communication matrix, and testing results.

#### Assessment idea
The capstone project is graded using a rubric that includes: (1) **Architecture** — is the system well-designed with clear separation of concerns? (2) **Implementation** — are all nodes implemented correctly in Python and C++? (3) **Integration** — do all nodes communicate correctly via topics, services, and actions? (4) **Simulation** — does the robot behave correctly in Gazebo? (5) **Launch file** — does the launch file start the entire system? (6) **Debugging** — are ROS tools used effectively? (7) **Documentation** — is the code commented and the README clear? (8) **Innovation** — does the project include any creative extensions? (9) **Testing** — is the testing checklist complete? (10) **Presentation** — is the demo video clear and professional?

#### AI generation note
Create a 15-minute capstone project walkthrough video. Show the Gazebo simulation with the warehouse environment and the robot moving between waypoints. Show `rqt_graph` with all nodes connected. Show RViz with the robot model, LiDAR data, and status display. Show the terminal with `rostopic echo /robot_status` updating. Show the remote controller sending an action goal and the robot responding. Show the obstacle avoidance in action: the robot approaches a box, stops, and the red LED turns on. Show the launch file starting everything with one command. Show the architecture diagram. Show the code in a text editor with comments. End with the grading rubric and a checklist.

---

### Chapter 7.3 — Final Examination and Answer Key

### Section A: Multiple Choice (10 questions, 2 points each)

1. What is ROS?
   - A) A real-time operating system for robots.
   - B) A middleware framework that provides communication infrastructure for robots. ✓
   - C) A programming language for robotics.
   - D) A hardware platform for building robots.

2. In ROS, what is the role of the ROS Master?
   - A) It forwards all messages between nodes.
   - B) It acts as a central registry that connects publishers and subscribers. ✓
   - C) It compiles the ROS packages.
   - D) It controls the robot's motors directly.

3. Which ROS communication mechanism is best for streaming continuous sensor data?
   - A) Services
   - B) Topics ✓
   - C) Actions
   - D) Parameters

4. What is the main difference between a ROS service and a ROS action?
   - A) Services are faster than actions.
   - B) Actions are asynchronous and provide feedback, while services are synchronous and blocking. ✓
   - C) Services can be canceled, but actions cannot.
   - D) Actions are used for small data, while services are used for large data.

5. In a Python ROS node, what does `rospy.spin()` do?
   - A) It rotates the robot.
   - B) It keeps the node alive and processes callbacks. ✓
   - C) It compiles the node.
   - D) It stops the node.

6. What is the purpose of a launch file in ROS?
   - A) To compile C++ code.
   - B) To start multiple nodes, set parameters, and configure the system with a single command. ✓
   - C) To define custom message types.
   - D) To install ROS packages.

7. Which command is used to record topic data for later playback?
   - A) `rostopic record`
   - B) `rosbag record` ✓
   - C) `roslaunch record`
   - D) `rosnode record`

8. What does the `<remap>` tag in a launch file do?
   - A) It changes the node's name.
   - B) It redirects a topic or service name to another name. ✓
   - C) It changes the package name.
   - D) It sets a parameter value.

9. In ROS, a custom message type is defined in which file format?
   - A) `.cpp`
   - B) `.msg` ✓
   - C) `.xml`
   - D) `.yaml`

10. What is the purpose of the `queue_size` parameter in `rospy.Publisher()`?
    - A) It sets the number of subscribers.
    - B) It limits how many messages are buffered before dropping old ones. ✓
    - C) It sets the publishing frequency.
    - D) It determines the message type.

### Section B: Short Answer (5 questions, 4 points each)

1. **Explain the difference between a ROS topic and a ROS service, and give an example of when you would use each.**
   Answer: A ROS topic is a one-way, asynchronous communication channel for streaming data. Publishers send messages to a topic without knowing who is listening. Subscribers receive messages without knowing who sent them. Topics are used for continuous data streams like sensor readings, velocity commands, and status updates. A ROS service is a synchronous, request-response communication mechanism. A client sends a request to a server and waits for a response. Services are used for discrete, quick tasks like querying a battery level, toggling an LED, or computing a value. Example: A camera publishes images on a topic (`/camera/image_raw`) because images are a continuous stream. A node provides a service `/get_battery_level` because the battery level is a discrete value that is requested on demand.

2. **What is the ROS Parameter Server, and why is it useful for robot configuration?**
   Answer: The Parameter Server is a shared, dictionary-like key-value store that is created when `roscore` starts. It allows nodes to store and retrieve configuration values at runtime. It is useful for robot configuration because it separates settings from code. You can change parameters (like PID gains, sensor frequencies, or robot names) by loading a YAML file without modifying or recompiling the source code. This makes the system more flexible, easier to test with different configurations, and allows the same code to run on different robots or in simulation vs. real hardware.

3. **Why is it important to use `anonymous=True` when initializing a ROS node that might have multiple instances running?**
   Answer: ROS requires each node to have a unique name. If two nodes have the same name, the second one will cause the first to be deregistered from the ROS Master. When you run multiple instances of the same node (e.g., multiple sensor nodes of the same type), `anonymous=True` appends a random string to the node name, making each instance unique. For example, `sensor_node` becomes `sensor_node_12345` and `sensor_node_67890`. This allows you to run the same executable multiple times without name conflicts.

4. **Describe the purpose of `rqt_graph` and RViz in ROS development.**
   Answer: `rqt_graph` is a visualization tool that displays the node-topic graph of a running ROS system. It shows which nodes are publishing and subscribing to which topics, making it easy to verify that the communication topology is correct and to find misconfigurations. RViz is a 3D visualization tool that displays the robot's physical state, sensor data, and planned paths. It shows the robot model, LiDAR scans, camera images, coordinate frames, and maps. `rqt_graph` is used for debugging software connections, while RViz is used for debugging robot behavior and perception.

5. **You have a Python publisher and a C++ subscriber. They are using the same topic name and message type, but the subscriber is not receiving messages. What are three possible causes?**
   Answer: (1) The `devel/setup.bash` was not sourced, so the C++ subscriber is not in the ROS package path and cannot be found. (2) The message type names do not match exactly. Even if the `.msg` files look the same, the generated message hashes must match, which requires both packages to use the same message definition from the same package. (3) The topic names do not match exactly, including the leading slash. `/robot_news` and `robot_news` are different topics. (4) The subscriber's queue_size is 0 (infinite), and the subscriber is not spinning (`ros::spin()` or `rospy.spin()` was not called). (5) The C++ node was compiled but the executable name in `rosrun` or the launch file is wrong.

### Section C: Code Analysis (3 questions, 5 points each)

1. **Analyze the following Python node. What does it do, and what is the potential bug?**
   ```python
   import rospy
   from std_msgs.msg import String
   
   def callback(msg):
       print(msg.data)
   
   rospy.init_node('listener')
   sub = rospy.Subscriber('/chatter', String, callback)
   ```
   Answer: The node creates a subscriber for the `/chatter` topic and prints received messages. The bug is that there is no `rospy.spin()` at the end. Without `rospy.spin()`, the Python script will exit immediately after creating the subscriber, and the callback will never be called. The fix is to add `rospy.spin()` at the end of the script to keep the node alive and process callbacks. Additionally, the script does not check `if __name__ == '__main__':`, which is a best practice for ROS nodes.

2. **The following launch file has a bug. What is it, and how would you fix it?**
   ```xml
   <launch>
     <node pkg="my_pkg" type="my_node.py" name="my_node" />
     <param name="max_speed" value="1.5" />
   </launch>
   ```
   Answer: The bug is that the `<param>` tag is outside the `<node>` tag, which makes it a global parameter. If the intention is for `max_speed` to be a private parameter for `my_node`, it should be inside the `<node>` tag. The fixed launch file should be:
   ```xml
   <launch>
     <node pkg="my_pkg" type="my_node.py" name="my_node">
       <param name="max_speed" value="1.5" />
     </node>
   </launch>
   ```
   Another potential issue is that `my_node.py` might not be executable (`chmod +x`). If the node is a Python script, it needs to have executable permissions and a proper shebang line (`#!/usr/bin/env python3`).

3. **The following C++ action server code has a logic error. What is it?**
   ```cpp
   void executeCB(const my_pkg::MyActionGoalConstPtr& goal) {
       for (int i = 0; i < goal->count; ++i) {
           my_pkg::MyActionFeedback feedback;
           feedback.percentage = float(i) / goal->count;
           _as.publishFeedback(feedback);
       }
       my_pkg::MyActionResult result;
       result.success = true;
       _as.setSucceeded(result);
   }
   ```
   Answer: The code does not check for preemption requests. If the client cancels the goal while the server is executing the loop, the server will continue to the end and report success, ignoring the cancellation. The fix is to add a preemption check inside the loop:
   ```cpp
   for (int i = 0; i < goal->count; ++i) {
       if (_as.isPreemptRequested()) {
           _as.setPreempted();
           return;
       }
       my_pkg::MyActionFeedback feedback;
       feedback.percentage = float(i) / goal->count;
       _as.publishFeedback(feedback);
   }
   ```
   Another issue is that the loop runs as fast as possible without any sleep, which could starve other threads. Adding a `ros::Rate` or `ros::Duration::sleep()` would improve the behavior.

### Section D: Practical Problem (10 points)

**Design a ROS system for a smart home robot that patrols a house and reports sensor readings.**

Requirements:
- The robot has a temperature sensor, a motion detector, and a camera.
- A node `sensor_publisher` reads the sensors and publishes: temperature on `/temperature` (Float64), motion status on `/motion` (Bool), and camera images on `/camera/image_raw` (Image).
- A node `patrol_controller` subscribes to `/motion`. If motion is detected, it sends a goal to an action server `/inspect_area` to take a closer look. The action server is in the `camera_node`.
- A node `camera_node` provides the action server `/inspect_area`. When it receives a goal, it publishes a higher-resolution image on `/camera/image_raw` for 10 seconds and sends feedback on the inspection progress. It can be preempted.
- A node `alert_service` provides a service `/send_alert`. When called with a message string, it logs the alert. The `patrol_controller` calls this service when motion is detected.
- A node `dashboard` subscribes to `/temperature`, `/motion`, and `/camera/image_raw`. It displays the data (simulated with print statements).
- Parameters: `/house_name`, `/patrol_interval` (seconds), `/alert_threshold_temp` (degrees).
- A launch file `smart_home.launch` starts all nodes and sets parameters.

**Answer:**

```python
# sensor_publisher.py
#!/usr/bin/env python3
import rospy
from std_msgs.msg import Float64, Bool
from sensor_msgs.msg import Image
import random

def main():
    rospy.init_node('sensor_publisher')
    temp_pub = rospy.Publisher('/temperature', Float64, queue_size=10)
    motion_pub = rospy.Publisher('/motion', Bool, queue_size=10)
    image_pub = rospy.Publisher('/camera/image_raw', Image, queue_size=10)
    
    rate = rospy.Rate(1)
    while not rospy.is_shutdown():
        temp = Float64(data=random.uniform(20.0, 30.0))
        motion = Bool(data=random.random() > 0.8)
        temp_pub.publish(temp)
        motion_pub.publish(motion)
        rospy.loginfo("Temp: %.1f, Motion: %s", temp.data, motion.data)
        rate.sleep()

if __name__ == '__main__':
    main()
```

```python
# patrol_controller.py
#!/usr/bin/env python3
import rospy
import actionlib
from std_msgs.msg import Bool
from std_srvs.srv import SetBool
from my_pkg.msg import InspectAreaAction, InspectAreaGoal

def motion_callback(msg):
    if msg.data:
        rospy.loginfo("Motion detected! Sending inspect goal.")
        client.send_goal(InspectAreaGoal())
        
        alert = rospy.ServiceProxy('/send_alert', SetBool)
        try:
            alert(True)
        except rospy.ServiceException:
            pass

def main():
    global client
    rospy.init_node('patrol_controller')
    client = actionlib.SimpleActionClient('/inspect_area', InspectAreaAction)
    client.wait_for_server()
    rospy.Subscriber('/motion', Bool, motion_callback)
    rospy.spin()

if __name__ == '__main__':
    main()
```

```python
# camera_node.py
#!/usr/bin/env python3
import rospy
import actionlib
from my_pkg.msg import InspectAreaAction, InspectAreaFeedback, InspectAreaResult

def execute_cb(goal):
    rospy.loginfo("Inspection started")
    rate = rospy.Rate(1)
    for i in range(10):
        if server.is_preempt_requested():
            server.set_preempted()
            return
        feedback = InspectAreaFeedback()
        feedback.percentage = (i + 1) / 10.0
        server.publish_feedback(feedback)
        rate.sleep()
    result = InspectAreaResult()
    result.success = True
    server.set_succeeded(result)

def main():
    global server
    rospy.init_node('camera_node')
    server = actionlib.SimpleActionServer('/inspect_area', InspectAreaAction, execute_cb, False)
    server.start()
    rospy.spin()

if __name__ == '__main__':
    main()
```

```python
# alert_service.py
#!/usr/bin/env python3
import rospy
from std_srvs.srv import SetBool, SetBoolResponse

def handle_alert(req):
    if req.data:
        rospy.logwarn("ALERT: Motion detected in the house!")
    return SetBoolResponse(success=True, message="Alert logged")

def main():
    rospy.init_node('alert_service')
    rospy.Service('/send_alert', SetBool, handle_alert)
    rospy.spin()

if __name__ == '__main__':
    main()
```

```xml
<!-- smart_home.launch -->
<launch>
  <param name="house_name" value="my_house" />
  <param name="patrol_interval" value="30" />
  <param name="alert_threshold_temp" value="35.0" />
  
  <node pkg="my_pkg" type="sensor_publisher.py" name="sensor_publisher" output="screen" />
  <node pkg="my_pkg" type="patrol_controller.py" name="patrol_controller" output="screen" />
  <node pkg="my_pkg" type="camera_node.py" name="camera_node" output="screen" />
  <node pkg="my_pkg" type="alert_service.py" name="alert_service" output="screen" />
</launch>
```

---

## Course Conclusion

Congratulations on completing ROS for Beginners. You have mastered the essential skills of ROS development: creating packages, writing nodes in Python and C++, communicating via topics, services, and actions, configuring systems with parameters and launch files, and debugging with ROS's powerful visualization tools. You can now build modular, scalable robot applications that integrate multiple sensors, actuators, and algorithms into a cohesive system.

ROS is the lingua franca of modern robotics. The skills you have learned are the foundation for advanced topics like SLAM, motion planning, manipulation, and autonomous navigation. Whether you are building a drone swarm, a warehouse robot, a surgical assistant, or a home automation system, ROS provides the architecture that makes it possible.

To continue your learning, consider these next steps:
- **Learn ROS 2:** ROS 2 is the next generation of ROS with improved real-time support, security, and distributed computing. The concepts you learned in this course transfer directly to ROS 2.
- **Explore advanced ROS packages:** Learn `MoveIt` for robot arm motion planning, `Navigation Stack` for autonomous mobile robots, and `OpenCV` for computer vision in ROS.
- **Build a real robot:** Apply your ROS skills to a physical robot. The transition from simulation to hardware is where the real learning happens.
- **Contribute to open source:** Find a ROS package you use and contribute bug fixes, documentation, or new features. The ROS community is welcoming and active.
- **Get certified:** Consider the ROS-Industrial certification or similar credentials to validate your skills.

Remember: ROS is a tool, but the real art of robotics is in the algorithms, the design, and the creativity you bring to the system. ROS handles the plumbing so you can focus on the magic. Go build something amazing.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
