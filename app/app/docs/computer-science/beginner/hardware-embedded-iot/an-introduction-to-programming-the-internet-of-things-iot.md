# Syllabus: An Introduction to Programming the Internet of Things (IoT)

> **Course ID:** `an-introduction-to-programming-the-internet-of-things-iot`  
> **Title:** An Introduction to Programming the Internet of Things (IoT)  
> **Provider:** Cohortia  
> **Original reference:** UC Irvine / Coursera  
> **Platform:** Cohortia  
> **Level:** Beginner  
> **Type:** Course  
> **Duration:** 10–12 weeks (self-paced, ~5–7 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.coursera.org/specializations/iot)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** IoT, Arduino, Raspberry Pi, embedded systems, C programming, Python, sensors, actuators, networking, MQTT, HTTP, REST APIs, cloud platforms, IoT security, system design  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from the University of California Irvine, Coursera, Arduino, Raspberry Pi Foundation, and other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

The Internet of Things (IoT) is one of the most transformative technologies of our time. It is the convergence of the physical world and the digital world — a global network of billions of devices that sense, compute, and communicate, turning ordinary objects into intelligent, connected systems. From smart thermostats that learn your preferences to industrial sensors that predict machine failures before they happen, IoT is reshaping how we live, work, and interact with our environment.

This course gives you a complete foundation in IoT by teaching you how to build real, connected devices from the ground up. You will learn how to program an Arduino microcontroller to read sensors and control actuators, how to program a Raspberry Pi single-board computer to process data and connect to networks, and how to bridge the two platforms into a unified IoT system that communicates with the cloud. You will write C code for the Arduino, Python code for the Raspberry Pi, and use industry-standard protocols like HTTP, MQTT, and REST to send data to cloud services. By the end of the course, you will have built multiple working IoT devices and a complete capstone project that demonstrates the full IoT stack: sensing, processing, networking, and cloud integration.

This course is designed for beginners. No prior experience with electronics, programming, or networking is assumed. If you have already completed the Arduino Programming or Raspberry Pi for Beginners courses in the Cohortia catalog, this course serves as the natural bridge between them, focusing on how the two platforms work together in an IoT architecture and how to connect both to the internet. If you are starting fresh, you will gain all the skills you need to build your first IoT device.

By the end of this course, you will be able to:

1. Explain what the Internet of Things is, how it works, and why it matters in society and industry.
2. Describe the layered architecture of an IoT system: device layer, edge/gateway layer, network layer, cloud layer, and application layer.
3. Program an Arduino Uno in C/C++ to read digital and analog sensors, control LEDs, motors, and actuators, and communicate over serial.
4. Use Arduino shields and modules (Ethernet, Wi-Fi) to connect the Arduino to a local network and the internet.
5. Program a Raspberry Pi in Python to read sensors via GPIO, run a web server, and process data.
6. Connect a Raspberry Pi to a local network and the internet using Wi-Fi and Ethernet.
7. Use IoT communication protocols including HTTP, REST, MQTT, and WebSockets to send and receive data between devices and the cloud.
8. Send sensor data from an Arduino and a Raspberry Pi to cloud platforms (ThingSpeak, Adafruit IO) and visualize it in real-time dashboards.
9. Build a Raspberry Pi gateway that collects data from an Arduino slave device and forwards it to the cloud.
10. Apply basic IoT security principles: encryption, authentication, and secure communication.
11. Follow a structured IoT design process from specification to prototype to deployment.
12. Design, build, and test a complete IoT capstone project that integrates sensing, processing, networking, and cloud connectivity.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to IoT and Embedded Systems | 1 | 5–7 |
| 2 | Arduino for IoT: Programming and Sensors | 1–2 | 7–9 |
| 3 | Arduino for IoT: Actuators, Shields, and Communication | 1–2 | 7–9 |
| 4 | Raspberry Pi for IoT: Python and GPIO | 1–2 | 7–9 |
| 5 | Raspberry Pi for IoT: Networking and Web Services | 1–2 | 7–9 |
| 6 | IoT Protocols and Cloud Integration | 1–2 | 7–9 |
| 7 | IoT Security, System Design, and Edge Computing | 1 | 5–7 |
| 8 | Capstone Project and Final Integration | 1–2 | 6–8 |

---

## Module 1: Introduction to IoT and Embedded Systems

> **Goal:** Understand what IoT is, explore the IoT ecosystem and architecture, and learn the fundamentals of embedded systems design.

---

### Chapter 1.1 — What Is the Internet of Things?

#### Learning objectives
- Define the Internet of Things and distinguish it from the traditional internet.
- Explain the key trends that enabled IoT: cheap sensors, wireless connectivity, cloud computing, and open-source hardware.
- Identify the five layers of an IoT architecture: device, edge/gateway, network, cloud, and application.
- Describe real-world IoT applications across smart home, healthcare, agriculture, industry, and cities.

#### Detailed lesson content

The Internet of Things is the network of physical objects — devices, vehicles, buildings, appliances, and more — embedded with sensors, software, and connectivity that enables them to collect and exchange data. Unlike the traditional internet, which connects people to information and to each other through computers and smartphones, the IoT connects objects to each other and to the cloud, creating a vast, distributed system of intelligent machines that can sense, decide, and act autonomously.

To understand why IoT exists now, we need to look at the convergence of several trends that occurred over the last two decades. First, **sensors became cheap**. A temperature sensor that cost $50 in 2000 costs $1 today. A MEMS accelerometer that was $20 in 2005 is now $0.50. This makes it economically viable to put sensors in almost anything. Second, **wireless connectivity became ubiquitous**. Wi-Fi, Bluetooth, cellular networks, and low-power protocols like LoRa and ZigBee make it possible for small devices to communicate without wires. Third, **cloud computing became accessible**. Services like Amazon Web Services, Microsoft Azure, and Google Cloud provide virtually unlimited storage and processing power at a fraction of the cost of building your own data center. Fourth, **open-source hardware platforms like Arduino and Raspberry Pi** lowered the barrier to entry for building electronic devices, allowing hobbyists, students, and startups to prototype IoT devices quickly and cheaply.

An IoT system is not just a single device. It is a complete architecture with multiple layers:

1. **Device Layer (The Edge):** This is where the physical world meets the digital world. The device layer includes sensors (temperature, humidity, motion, light, pressure), actuators (motors, relays, LEDs, valves), and microcontrollers (Arduino, ESP32, STM32) that read the sensors and control the actuators. These devices are often small, battery-powered, and located in remote or harsh environments.

2. **Edge/Gateway Layer:** The edge layer acts as a bridge between the device layer and the network layer. An edge gateway (often a Raspberry Pi, a dedicated IoT gateway, or a smartphone) collects data from multiple sensors, performs initial processing (filtering, aggregation, compression), and forwards the data to the cloud. Edge computing reduces bandwidth usage and latency by processing data locally instead of sending everything to the cloud.

3. **Network Layer:** The network layer provides the communication infrastructure. It includes local networks (Wi-Fi, Bluetooth, ZigBee, Z-Wave) and wide-area networks (cellular 4G/5G, LoRaWAN, satellite). The choice of network depends on range, bandwidth, power consumption, and cost.

4. **Cloud Layer:** The cloud layer stores, processes, and analyzes the data collected from devices. It includes databases, analytics engines, machine learning models, and API services. Cloud platforms like AWS IoT Core, Azure IoT Hub, and Google Cloud IoT provide scalable infrastructure for managing millions of devices.

5. **Application Layer:** The application layer is the interface between the IoT system and the user. It includes mobile apps, web dashboards, voice assistants, and enterprise systems that present data, send alerts, and allow users to control devices remotely.

Real-world IoT applications include:
- **Smart Home:** Thermostats, security cameras, door locks, lighting systems, and voice assistants that work together to automate and secure the home.
- **Healthcare:** Wearable devices that monitor heart rate, blood pressure, and sleep patterns; remote patient monitoring systems that alert doctors to emergencies.
- **Agriculture:** Soil moisture sensors, weather stations, and automated irrigation systems that optimize water usage and crop yields.
- **Industrial IoT (IIoT):** Predictive maintenance sensors on manufacturing equipment, asset tracking systems, and supply chain monitoring.
- **Smart Cities:** Traffic sensors, air quality monitors, smart parking systems, and waste management sensors that improve urban efficiency and sustainability.

Understanding this architecture is essential because every IoT project you build will involve decisions at every layer. What sensors do you need? What microcontroller is appropriate? How do you connect to the network? Which cloud platform should you use? How do you present the data to the user? This course teaches you to make these decisions intelligently.

#### Key concepts
- IoT definition and scope
- Enabling trends: cheap sensors, wireless connectivity, cloud computing, open-source hardware
- IoT architecture: device, edge/gateway, network, cloud, application layers
- IoT applications across domains
- Difference between IoT and traditional internet

#### Hands-on activity
Research three IoT devices you own or use regularly (e.g., a smart thermostat, a fitness tracker, a smart doorbell). For each device, draw a simple diagram showing the five layers: what sensors/actuators are in the device layer, how it connects to the network, what cloud service it uses, and what the application layer looks like (mobile app, web dashboard). Write one paragraph for each device explaining how data flows through the system.

#### Assessment idea
Ask learners to match five component descriptions to the correct IoT layer: (1) a temperature sensor reading soil moisture → Device layer; (2) a Raspberry Pi filtering and forwarding data → Edge/Gateway layer; (3) a 4G cellular modem → Network layer; (4) a MongoDB database storing time-series data → Cloud layer; (5) a mobile app showing a real-time graph → Application layer.

#### AI generation note
Create an 8-minute animated explainer video. Start with a smart home scene (kitchen, living room, garden) and show IoT devices lighting up one by one. Animate the data flow: a sensor sends a wireless signal to a gateway, the gateway sends data over the internet to a cloud server, the cloud processes the data and sends a notification to a phone. Show the five-layer architecture as a vertical stack with animated arrows connecting layers. End with a reflection prompt: "What is one problem in your daily life that could be solved by an IoT device?"

---

### Chapter 1.2 — Embedded Systems and IoT Design Considerations

#### Learning objectives
- Define an embedded system and explain its role in the IoT device layer.
- Compare microcontrollers, microprocessors, and single-board computers for IoT applications.
- Understand IoT design trade-offs: cost vs. capability, power vs. performance, wired vs. wireless.
- Identify the key constraints of IoT design: power, cost, size, connectivity, security, and response time.

#### Detailed lesson content

Every IoT device is an embedded system — a computer designed for a specific purpose, embedded inside a larger device, and optimized for that purpose. A smart thermostat is an embedded system. A fitness tracker is an embedded system. An industrial vibration sensor is an embedded system. Understanding embedded systems is fundamental to IoT because the device layer is entirely composed of them.

An embedded system has four key components: a **processor** (to run the program), **memory** (to store the program and data), **input/output interfaces** (to connect sensors and actuators), and **software** (the firmware that controls the system). Unlike a general-purpose computer, an embedded system is not designed for the user to install and run arbitrary software. It runs one specific program, often forever, without a screen, keyboard, or mouse.

The processor in an embedded system can be a **microcontroller** (like the ATmega328P in the Arduino Uno), a **microprocessor** (like the ARM Cortex-A53 in the Raspberry Pi), or a **system-on-chip (SoC)** that combines processor, memory, and peripherals on a single chip. The choice of processor depends on the application requirements:

- **Microcontrollers (e.g., Arduino, ESP32, STM32):** Low cost, low power, simple control tasks. Ideal for reading sensors, controlling LEDs, and running simple logic. Cost: $2–$20. Power: milliwatts to hundreds of milliwatts.
- **Single-Board Computers (e.g., Raspberry Pi, BeagleBone):** Higher performance, can run a full operating system (Linux), connect to the internet, and process complex data. Ideal for edge gateways, web servers, and computer vision. Cost: $20–$100. Power: 1–10 watts.
- **SoC with Wireless (e.g., ESP32, nRF52):** Combines a microcontroller with built-in Wi-Fi or Bluetooth. Ideal for battery-powered IoT devices that need wireless connectivity. Cost: $3–$10. Power: very low in sleep mode.

IoT design involves constant trade-offs. Every decision you make affects the others:
- **Cost vs. Capability:** A Raspberry Pi is more capable than an Arduino but costs more and uses more power. For a simple temperature logger, an Arduino with a cheap sensor is the right choice. For a gateway that runs a web server and processes video, a Raspberry Pi is necessary.
- **Power vs. Performance:** A device running on a coin-cell battery must minimize power consumption. This means using a low-power microcontroller, sleeping between measurements, and transmitting data infrequently. A mains-powered device can use a more powerful processor and transmit continuously.
- **Wired vs. Wireless:** Wired connections (Ethernet, USB, serial) are reliable, fast, and secure but require physical cables. Wireless connections (Wi-Fi, Bluetooth, cellular) are flexible but consume more power, have limited range, and are subject to interference.
- **Security vs. Convenience:** Strong encryption and authentication require more processing power and memory, which increases cost and power consumption. A cheap IoT device might skip security to save money, creating vulnerabilities.
- **Response Time vs. Complexity:** A system that must respond in milliseconds (e.g., an emergency stop button) needs simple, predictable hardware and software. A system that can respond in seconds (e.g., a weather station) can use more complex processing.

**Response time** is a critical concept in IoT. It is the time between when the system receives an input and when it responds. For example, when you press a button on a smart light switch, the light should turn on within 100 milliseconds. If it takes 5 seconds, the system feels broken. Response time depends on the sensor reading time, the processing time, the network latency, and the actuation time. IoT designers must measure and optimize each component of the response time.

**Design metrics** for IoT systems include:
- **Unit cost:** the manufacturing cost of the device.
- **Power consumption:** the average energy used per day (critical for battery-powered devices).
- **Size and weight:** important for wearables and embedded applications.
- **Reliability:** the mean time between failures (MTBF).
- **Security:** the resistance to hacking and data breaches.
- **Scalability:** the ability to add more devices without redesigning the system.

#### Key concepts
- Embedded system definition and components
- Microcontroller vs. microprocessor vs. single-board computer
- IoT design trade-offs: cost, power, size, connectivity, security, response time
- Response time and its components
- Design metrics: unit cost, power, reliability, security, scalability
- SoC with wireless (ESP32, nRF52)

#### Hands-on activity
Consider the following IoT device scenarios and choose the appropriate hardware platform for each, justifying your choice with at least two design trade-offs: (1) a wearable fitness tracker that must run for 7 days on a single charge, (2) a smart home gateway that connects 50 ZigBee sensors to the internet and runs a local dashboard, (3) an industrial temperature monitor that is powered by a solar panel and sends data once per hour over a cellular network, (4) a smart door lock that must unlock in under 500 milliseconds when a valid fingerprint is detected.

#### Assessment idea
Ask: "You are designing a soil moisture sensor for a farm. It must be buried in the ground, run on a battery for 2 years, and send data every 6 hours. Which processor would you choose, and what wireless protocol would you use?" Answer: A low-power microcontroller (e.g., Arduino Pro Mini or ESP32 in deep sleep) with a LoRaWAN or cellular NB-IoT module for long-range, low-power communication. Then ask: "Why would you not choose a Raspberry Pi for this application?" Answer: The Raspberry Pi consumes too much power (several watts) and cannot run for 2 years on a battery.

#### AI generation note
Create a 9-minute animated comparison. Show three characters: a microcontroller (small, efficient, battery-powered), a single-board computer (medium, powerful, mains-powered), and a smartphone (large, very powerful, rechargeable). Show each one in a different IoT scenario: the microcontroller in a soil sensor, the SBC in a home gateway, and the smartphone as a user interface. Animate the trade-off triangles: cost vs. capability, power vs. performance, wired vs. wireless. Show a response time diagram with segments labeled: sensor read, process, network, actuate. Include a design decision flowchart.

---

### Chapter 1.3 — Introduction to Networking for IoT

#### Learning objectives
- Explain the basics of IP addressing, TCP/IP, and UDP for IoT communication.
- Understand the difference between client-server and publish-subscribe communication models.
- Describe common IoT network topologies: star, mesh, and point-to-point.
- Identify the role of gateways in connecting constrained devices to the internet.

#### Detailed lesson content

Networking is the glue that holds IoT together. Without the ability to communicate, an IoT device is just an isolated sensor. This chapter introduces the networking concepts that every IoT developer must understand, from basic IP addressing to the specialized protocols used by IoT devices.

The **Internet Protocol (IP)** is the fundamental addressing system of the internet. Every device connected to the internet has an IP address, which is a unique identifier that allows other devices to find and communicate with it. IPv4 addresses are 32-bit numbers written in dotted-decimal notation (e.g., 192.168.1.100). IPv6 addresses are 128-bit numbers written in hexadecimal (e.g., 2001:0db8:85a3::8a2e:0370:7334). Most local networks use **private IP addresses** in the ranges 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. A **router** connects the local network to the internet and performs **Network Address Translation (NAT)**, allowing multiple devices to share a single public IP address.

**TCP (Transmission Control Protocol)** is a reliable, connection-oriented protocol. It guarantees that data is delivered in order and without errors. TCP is used for applications that require reliability, such as web browsing (HTTP), email (SMTP), and file transfer (FTP). However, TCP has overhead: it requires a three-way handshake to establish a connection, and it maintains connection state, which consumes memory. For IoT devices with limited resources, TCP can be too heavy.

**UDP (User Datagram Protocol)** is an unreliable, connectionless protocol. It sends data packets without establishing a connection and without guaranteeing delivery. UDP is faster and lighter than TCP, making it ideal for IoT applications where low latency is more important than guaranteed delivery, such as sensor data streaming, real-time control, and video transmission. Many IoT protocols (including MQTT and CoAP) are built on top of UDP.

**DNS (Domain Name System)** translates human-readable domain names (like www.cohortia.com) into IP addresses. When an IoT device connects to a cloud service, it typically uses a DNS lookup to find the server's IP address. DNS is essential for IoT because cloud services often change their IP addresses, but the domain name remains constant.

**MAC addresses** are hardware addresses assigned to network interfaces. Unlike IP addresses, which can change, MAC addresses are fixed (though they can be spoofed). MAC addresses are used at the local network level (Layer 2 of the OSI model) to identify devices on the same subnet.

**TCP and UDP ports** are numbers that identify specific services on a device. For example, port 80 is used for HTTP, port 443 for HTTPS, port 22 for SSH, and port 1883 for MQTT. When an IoT device sends data to a cloud server, it sends it to a specific IP address and port number.

There are two main communication models in IoT:
- **Client-Server:** The IoT device (client) sends a request to the cloud server and waits for a response. This is the model used by HTTP/REST. The client initiates all communication. The server is always listening.
- **Publish-Subscribe:** The IoT device (publisher) sends data to a message broker, which then forwards it to all subscribers (e.g., mobile apps, web dashboards). The publisher does not need to know who the subscribers are. This is the model used by MQTT. It is more efficient for IoT because devices can send data asynchronously without waiting for a response.

**Network topologies** for IoT include:
- **Star topology:** All devices connect directly to a central hub or gateway. This is simple and common in Wi-Fi networks. The disadvantage is that if the gateway fails, the entire network fails.
- **Mesh topology:** Devices connect to each other and relay data hop-by-hop. This is used in ZigBee, Z-Wave, and Thread networks. The advantage is resilience: if one device fails, data can route around it. The disadvantage is higher latency and complexity.
- **Point-to-point:** Two devices communicate directly. This is used in Bluetooth and LoRa point-to-point links.

A **gateway** is a device that connects the IoT device network to the internet. The gateway translates between the local network protocol (e.g., ZigBee, Bluetooth) and the internet protocol (e.g., TCP/IP over Wi-Fi or Ethernet). The gateway may also perform edge processing, filtering, and aggregation before sending data to the cloud. In many home IoT systems, the gateway is a Wi-Fi router with a ZigBee or Z-Wave radio built in. In industrial IoT, the gateway is often a ruggedized computer (like a Raspberry Pi or an industrial PC) that connects to both the sensor network and the corporate network.

#### Key concepts
- IP addressing: IPv4, IPv6, private IP, NAT
- TCP vs. UDP: reliability, overhead, use cases
- DNS and MAC addresses
- TCP/UDP ports and services
- Client-server vs. publish-subscribe models
- Network topologies: star, mesh, point-to-point
- Gateway role and functions

#### Hands-on activity
Use your home router's admin panel (typically accessed via 192.168.1.1 or 192.168.0.1) to view the list of connected devices. For each device, note its IP address, MAC address, and connection type (Wi-Fi or Ethernet). Identify which devices are IoT devices (smart speakers, TVs, cameras, thermostats) and which are general-purpose computers (laptops, phones). Draw a simple network topology diagram showing your router as the gateway and all connected devices.

#### Assessment idea
Ask: "You are designing a network of 100 soil moisture sensors spread across a 10-acre farm. The sensors are too far from the farmhouse for Wi-Fi. Which network topology and protocol would you choose?" Answer: A mesh topology using LoRaWAN or ZigBee, with a gateway at the farmhouse collecting data from the mesh and forwarding it to the cloud via cellular or Ethernet. Then ask: "Why would you choose UDP over TCP for sending real-time sensor data from a vibration monitor?" Answer: UDP has lower latency and less overhead, which is critical for real-time monitoring. Occasional lost packets are acceptable because the data is continuous.

#### AI generation note
Create a 9-minute animated networking lesson. Show an IP address as a street address on a digital envelope. Show TCP as a certified mail with a handshake and acknowledgment, and UDP as a postcard that is sent without confirmation. Show the client-server model as a restaurant (client orders, server responds) and publish-subscribe as a newspaper subscription (publisher sends, subscribers receive). Show a mesh network with animated data packets hopping from sensor to sensor to gateway. Include a real router admin panel screenshot.

---

## Module 2: Arduino for IoT: Programming and Sensors

> **Goal:** Learn to program the Arduino for IoT applications, read sensors, and communicate with other devices over serial.

---

### Chapter 2.1 — Arduino Setup and C Programming for IoT

#### Learning objectives
- Install and configure the Arduino IDE and understand the board selection process.
- Write Arduino sketches using variables, control structures, functions, and the Serial library.
- Explain the `setup()` and `loop()` structure and how it fits IoT applications.
- Use the Serial Monitor for debugging and communication.

#### Detailed lesson content

The Arduino is the workhorse of IoT prototyping. It is an open-source electronics platform that combines a simple microcontroller board with an easy-to-use programming environment. Because of its low cost, extensive community, and vast ecosystem of shields and libraries, the Arduino is the ideal starting point for building IoT devices. In this module, you will learn the Arduino programming model and how to use it to read sensors and communicate with the world.

Every Arduino program, called a **sketch**, has two required functions: `setup()` and `loop()`. The `setup()` function runs once when the board starts or resets. It is used for initialization: configuring pin modes, starting serial communication, initializing variables, and setting up sensors. The `loop()` function runs continuously, forever, after `setup()` finishes. It is where the main behavior of the program lives: reading sensors, making decisions, controlling actuators, and sending data.

```cpp
void setup() {
  // Initialize serial communication at 9600 baud
  Serial.begin(9600);
  // Configure pin 13 as an output
  pinMode(13, OUTPUT);
}

void loop() {
  // Turn the LED on
  digitalWrite(13, HIGH);
  // Wait 1 second
  delay(1000);
  // Turn the LED off
  digitalWrite(13, LOW);
  // Wait 1 second
  delay(1000);
}
```

In IoT applications, the `loop()` function typically follows a pattern: read a sensor, process the data, send it to a gateway or cloud, and then sleep or wait for the next reading cycle. For example, a temperature logger might read the sensor every 10 seconds, average the last 5 readings, and send the average to the Raspberry Pi gateway once per minute.

Arduino programming is based on C/C++. The key concepts include:
- **Variables and data types:** `int`, `float`, `char`, `boolean`, `long`, `unsigned int`, and `byte`. For IoT applications, choosing the right data type is important because memory is limited. The Arduino Uno has only 2 KB of SRAM.
- **Control structures:** `if`, `else if`, `else`, `for`, `while`, `switch`, `break`, and `continue`. These are used to make decisions and repeat actions.
- **Functions:** Reusable blocks of code with parameters and return values. Functions help organize complex IoT sketches into manageable pieces.
- **Arrays:** Collections of values stored under one name. Arrays are used to store sensor readings, calibration data, and lookup tables.
- **Strings:** In Arduino, strings can be C-style char arrays (recommended for memory efficiency) or `String` objects (easier to use but can cause memory fragmentation).

The **Serial library** is the most important tool for IoT communication on the Arduino. It allows the Arduino to send and receive data over the USB connection (or over hardware serial pins 0 and 1). The Serial Monitor in the Arduino IDE displays the data sent by the Arduino and allows you to send data back.

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  float voltage = sensorValue * (5.0 / 1023.0);
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Voltage: ");
  Serial.println(voltage);
  delay(1000);
}
```

The `Serial.print()` function sends data without a newline. `Serial.println()` sends data followed by a newline and carriage return. In IoT applications, the Arduino typically sends data in a structured format like CSV (`temperature,25.3,humidity,60.2`) or JSON (`{"temp":25.3,"hum":60.2}`), which the receiver can parse.

**Serial parsing** is the process of reading incoming data and extracting values. The Arduino can receive commands from a Raspberry Pi or a PC via serial:

```cpp
void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "READ") {
      int val = analogRead(A0);
      Serial.println(val);
    } else if (command == "LED_ON") {
      digitalWrite(13, HIGH);
    } else if (command == "LED_OFF") {
      digitalWrite(13, LOW);
    }
  }
}
```

This simple command protocol allows the Raspberry Pi to control the Arduino remotely over the serial connection.

#### Key concepts
- Arduino IDE, board selection, and serial port selection
- `setup()` and `loop()` structure
- C variables, control structures, functions, arrays
- Serial library: `Serial.begin()`, `Serial.print()`, `Serial.println()`, `Serial.available()`, `Serial.readStringUntil()`
- Serial data formats: CSV, JSON, command protocols
- Serial parsing and remote control

#### Hands-on activity
Write an Arduino sketch that reads the value of a potentiometer on analog pin A0, converts it to a voltage (0–5V), and prints the result to the Serial Monitor every 500 milliseconds. Then modify the sketch to accept commands from the Serial Monitor: when you type "READ", it prints the current value; when you type "FAST", it changes the delay to 100 ms; when you type "SLOW", it changes the delay to 1000 ms. Test all commands and verify the output.

#### Assessment idea
Ask: "What is the difference between `Serial.print()` and `Serial.println()`?" Answer: `Serial.print()` sends data without a newline; `Serial.println()` sends data followed by a newline and carriage return. Then ask: "Why is it important to use `Serial.available()` before reading from serial?" Answer: `Serial.available()` returns the number of bytes waiting in the serial buffer. If you try to read when no data is available, you will read garbage or block the program.

#### AI generation note
Create a 10-minute live coding tutorial. Show the Arduino IDE with the blink sketch, then modify it to read a sensor and print to serial. Show the Serial Monitor receiving the data. Demonstrate sending commands from the Serial Monitor to the Arduino and watching the LED respond. Use animated callouts for the `setup()` and `loop()` functions. Include a troubleshooting tip for the most common error: wrong board or port selected.

---

### Chapter 2.2 — Reading Digital and Analog Sensors with Arduino

#### Learning objectives
- Interface digital sensors (switches, motion detectors, Hall effect sensors) with the Arduino.
- Interface analog sensors (potentiometers, temperature sensors, light sensors) using `analogRead()`.
- Convert raw sensor readings into meaningful physical units using calibration and conversion formulas.
- Implement sensor averaging, filtering, and threshold detection for robust IoT data.

#### Detailed lesson content

Sensors are the eyes and ears of an IoT device. They convert physical quantities — temperature, light, motion, pressure, distance, humidity — into electrical signals that the Arduino can read and process. Understanding how to interface sensors is the core skill of IoT development. This chapter covers the most common sensor types and how to read them accurately and reliably.

**Digital sensors** produce a binary output: HIGH or LOW, 1 or 0. The simplest digital sensor is a pushbutton switch. When pressed, it connects a pin to ground or power. When released, the pin is disconnected. To read a pushbutton, you configure the pin as an input with an internal pull-up resistor (`INPUT_PULLUP`), which keeps the pin HIGH when the button is not pressed and LOW when pressed.

```cpp
const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(buttonPin);
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Button pressed!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(50);  // Simple debounce
}
```

Other digital sensors include:
- **PIR (Passive Infrared) motion sensor:** Outputs HIGH when motion is detected. Has adjustable sensitivity and duration.
- **Hall effect sensor:** Detects magnetic fields. Outputs HIGH when a magnet is near.
- **Tilt sensor:** A switch that opens or closes when tilted beyond a certain angle.
- **Reed switch:** Closes when a magnet is near, commonly used in door/window sensors.

**Analog sensors** produce a variable voltage that corresponds to the physical quantity being measured. The Arduino's `analogRead()` function reads the voltage on an analog pin and converts it to a number between 0 and 1023 (10-bit resolution). A value of 0 corresponds to 0V, and 1023 corresponds to 5V (or 3.3V on a 3.3V Arduino). To convert the raw reading to voltage: `voltage = (analogRead(pin) / 1023.0) * 5.0;`.

Common analog sensors for IoT include:
- **TMP36 temperature sensor:** Outputs a voltage proportional to temperature. At 25°C, the output is 750 mV. The scale is 10 mV per degree Celsius. The conversion formula is: `temperatureC = (voltage - 0.5) * 100.0;`.
- **Photoresistor (LDR):** Changes resistance based on light intensity. Used in a voltage divider with a fixed resistor to produce a variable voltage.
- **Potentiometer:** A variable resistor that produces a voltage from 0V to Vcc depending on the knob position. Often used as a user input or calibration control.
- **Force-sensitive resistor (FSR):** Changes resistance based on applied pressure.
- **Soil moisture sensor:** Measures the conductivity of soil, which correlates with moisture content.

**Sensor calibration** is the process of converting raw sensor readings into accurate physical units. Every sensor has some error, and calibration corrects for it. There are two types of calibration:
- **Two-point calibration:** You measure the sensor output at two known reference points (e.g., 0°C in ice water and 100°C in boiling water) and use linear interpolation to convert readings.
- **Multi-point calibration:** You take multiple measurements across the range and fit a curve (linear, polynomial, or lookup table) to the data.

```cpp
// Two-point calibration for a temperature sensor
// At 0°C, raw reading is 100
// At 100°C, raw reading is 920
float calibrateTemperature(int raw) {
  float slope = 100.0 / (920.0 - 100.0);  // °C per raw unit
  return (raw - 100.0) * slope;
}
```

**Sensor filtering** is essential because real-world sensor readings are noisy. Electrical interference, temperature drift, and mechanical vibration all introduce noise. Simple filtering techniques include:
- **Averaging:** Take N samples and compute the mean. This reduces random noise by a factor of sqrt(N).
- **Median filter:** Take N samples and use the median value. This is robust against outliers (spike noise) because extreme values do not affect the median.
- **Exponential moving average:** A lightweight filter that uses a weighted average of the current reading and the previous filtered value: `filtered = alpha * current + (1 - alpha) * filtered;` where `alpha` is between 0 and 1. A smaller alpha gives more smoothing but slower response.

**Threshold detection** is used to trigger events when a sensor value crosses a boundary. For example, a smart light might turn on when the ambient light drops below a threshold. To avoid flickering when the sensor hovers near the threshold, use **hysteresis**: turn on when the value drops below a lower threshold, and turn off only when it rises above a higher threshold.

```cpp
const int lowThreshold = 300;   // Turn on below this
const int highThreshold = 500;  // Turn off above this
bool lightOn = false;

void loop() {
  int lightLevel = analogRead(A0);
  if (!lightOn && lightLevel < lowThreshold) {
    digitalWrite(ledPin, HIGH);
    lightOn = true;
  } else if (lightOn && lightLevel > highThreshold) {
    digitalWrite(ledPin, LOW);
    lightOn = false;
  }
}
```

#### Key concepts
- Digital sensors: pushbutton, PIR, Hall effect, tilt, reed switch
- Analog sensors: TMP36, LDR, potentiometer, FSR, soil moisture
- `analogRead()` and voltage conversion
- Sensor calibration: two-point and multi-point
- Sensor filtering: averaging, median, exponential moving average
- Threshold detection and hysteresis
- Sensor noise and error sources

#### Hands-on activity
Build a circuit with a TMP36 temperature sensor on analog pin A0, an LDR on analog pin A1, and a pushbutton on digital pin 2. Write a sketch that reads all three sensors every second, applies a 10-sample average to the temperature and light readings, and prints the calibrated temperature (in °C), the light level (as a percentage 0–100), and the button state to the Serial Monitor in CSV format. Verify that the temperature reading matches a room thermometer and that the light level changes when you cover the LDR.

#### Assessment idea
Given a TMP36 output of 0.73V, calculate the temperature. Answer: (0.73 - 0.5) * 100 = 23°C. Then ask: "You are using a median filter with 5 samples. The samples are [102, 105, 300, 107, 103]. What is the filtered output?" Answer: The sorted samples are [102, 103, 105, 107, 300], so the median is 105. The outlier 300 is ignored. Then ask: "Why is hysteresis better than a single threshold for controlling a device?" Answer: Hysteresis prevents rapid on/off switching when the sensor value hovers near the threshold, which reduces wear and flickering.

#### AI generation note
Create a 10-minute lesson with a real sensor demonstration. Show the TMP36, LDR, and pushbutton on a breadboard. Show the Arduino IDE with the sketch reading all three sensors. Show the Serial Monitor with CSV output. Animate the averaging process: 10 samples being collected and the mean being calculated. Show a hysteresis diagram with two threshold lines and a sensor value bouncing between them. Include a calibration scene with ice water and boiling water. Show a noisy sensor waveform being smoothed by a filter.

---

### Chapter 2.3 — Advanced Sensor Interfacing: I2C, SPI, and Sensor Modules

#### Learning objectives
- Explain the I2C and SPI communication protocols and their use in sensor modules.
- Interface I2C sensors (e.g., DHT22, BME280, MPU6050) using the Wire library.
- Interface SPI devices (e.g., SD card modules, display drivers) using the SPI library.
- Read data from complex sensor modules that combine multiple sensors and communication protocols.

#### Detailed lesson content

While simple sensors connect directly to Arduino pins, many modern IoT sensors are packaged as **modules** that communicate via standardized digital protocols. These modules contain the sensor chip, supporting circuitry, and sometimes a microcontroller that preprocesses the data. The two most common protocols are I2C (Inter-Integrated Circuit) and SPI (Serial Peripheral Interface).

**I2C** is a two-wire protocol that uses a shared data line (SDA) and a shared clock line (SCL). Multiple devices can share the same two wires, each with a unique 7-bit address. This makes I2C ideal for systems with many sensors and limited pins. The Arduino Uno uses analog pin A4 for SDA and A5 for SCL. The Arduino library for I2C is called `Wire`.

```cpp
#include <Wire.h>

#define BME280_ADDRESS 0x76  // I2C address of the BME280 sensor

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void loop() {
  // Read temperature register from BME280
  Wire.beginTransmission(BME280_ADDRESS);
  Wire.write(0xFA);  // Temperature register MSB
  Wire.endTransmission();
  Wire.requestFrom(BME280_ADDRESS, 3);  // Read 3 bytes

  if (Wire.available() == 3) {
    byte msb = Wire.read();
    byte lsb = Wire.read();
    byte xlsb = Wire.read();
    long adc_T = ((long)msb << 12) | ((long)lsb << 4) | (xlsb >> 4);
    // Convert adc_T to temperature using calibration data (simplified)
    Serial.print("Raw temp: ");
    Serial.println(adc_T);
  }
  delay(1000);
}
```

In practice, most I2C sensors have Arduino libraries that handle the low-level communication. For example, the Adafruit BME280 library provides simple functions like `bme.readTemperature()` and `bme.readHumidity()`. However, understanding the underlying protocol is important for debugging, customizing, and writing your own libraries.

Common I2C sensors for IoT:
- **BME280:** Measures temperature, humidity, and barometric pressure. Very popular for weather stations.
- **DHT22/AM2302:** Measures temperature and humidity. Simpler than BME280 but less accurate.
- **MPU6050:** 6-axis accelerometer and gyroscope. Used for motion detection and orientation.
- **BH1750:** Digital light sensor. Measures ambient light in lux.
- **SSD1306:** OLED display driver. Allows the Arduino to display text and graphics.

**SPI** is a four-wire protocol that uses a separate data line for input (MISO), a separate data line for output (MOSI), a shared clock line (SCK), and a chip select line (CS) for each device. SPI is faster than I2C because it has separate data lines for full-duplex communication, but it requires more pins (one CS per device). The Arduino uses pins 11 (MOSI), 12 (MISO), and 13 (SCK) for SPI, plus any digital pin for CS.

```cpp
#include <SPI.h>

const int csPin = 10;  // Chip select pin

void setup() {
  SPI.begin();
  pinMode(csPin, OUTPUT);
  digitalWrite(csPin, HIGH);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(csPin, LOW);
  SPI.transfer(0x00);  // Send command
  byte response = SPI.transfer(0x00);  // Read response
  digitalWrite(csPin, HIGH);
  Serial.println(response);
  delay(1000);
}
```

Common SPI devices for IoT:
- **MicroSD card modules:** For logging large amounts of sensor data to removable storage.
- **NRF24L01:** 2.4 GHz wireless transceiver for low-power communication between Arduinos.
- **MAX7219:** LED matrix driver for displays and indicators.
- **W5100/W5500:** Ethernet controllers for network connectivity (used in Arduino Ethernet shields).

**Sensor modules** often combine multiple sensors and a communication interface on a single PCB. For example, a GPS module contains a GPS receiver chip, an antenna, and a UART interface. An air quality sensor module contains a gas sensor, a temperature sensor, and an I2C interface. When using these modules, you typically include a library, initialize the sensor in `setup()`, and read values in `loop()`.

```cpp
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(9600);
  if (!bme.begin(0x76)) {
    Serial.println("Could not find BME280 sensor!");
    while (1);
  }
}

void loop() {
  Serial.print("Temperature: ");
  Serial.print(bme.readTemperature());
  Serial.println(" °C");
  Serial.print("Humidity: ");
  Serial.print(bme.readHumidity());
  Serial.println(" %");
  Serial.print("Pressure: ");
  Serial.print(bme.readPressure() / 100.0);
  Serial.println(" hPa");
  delay(2000);
}
```

A common mistake when using I2C sensors is **address conflicts**. If two devices on the same bus have the same address, communication fails. Some sensors have address pins (AD0, ADDR) that allow you to change the address by connecting them to power or ground. If you have an address conflict, check the sensor datasheet and change the address pin configuration.

Another common mistake is **missing pull-up resistors**. I2C requires pull-up resistors (typically 4.7 kΩ) on the SDA and SCL lines. Most Arduino boards have internal pull-ups, but they may be too weak for long wires or multiple devices. If communication is unreliable, add external pull-up resistors.

#### Key concepts
- I2C protocol: SDA, SCL, addresses, Wire library
- SPI protocol: MOSI, MISO, SCK, CS, SPI library
- Common I2C sensors: BME280, DHT22, MPU6050, BH1750
- Common SPI devices: SD card, NRF24L01, Ethernet controller
- Sensor libraries and abstraction
- I2C address conflicts and pull-up resistors
- Full-duplex vs. half-duplex communication

#### Hands-on activity
Connect a BME280 sensor to the Arduino via I2C (SDA to A4, SCL to A5, VCC to 3.3V, GND to GND). Install the Adafruit BME280 library and the Adafruit Unified Sensor library. Write a sketch that reads temperature, humidity, and pressure every 2 seconds and prints them to the Serial Monitor. Then connect an SSD1306 OLED display via I2C and display the same readings on the screen. Verify that the sensor readings are reasonable and that the display updates correctly. If you have communication issues, use an I2C scanner sketch to detect the device addresses.

#### Assessment idea
Ask: "You have two I2C devices that both use address 0x68. How can you resolve the address conflict?" Answer: Check the device datasheets for an address pin (AD0, ADDR) and connect it to VCC or GND to change one device's address to 0x69. If the device does not have an address pin, you may need to use an I2C multiplexer (TCA9548A) or a second I2C bus. Then ask: "Why does I2C require pull-up resistors on SDA and SCL?" Answer: I2C uses open-drain outputs, which can only pull the line LOW. The pull-up resistors pull the line HIGH when no device is driving it. Without pull-ups, the lines would float and communication would fail.

#### AI generation note
Create a 10-minute lesson with animated protocol diagrams. Show I2C as a two-lane highway with devices sending packets addressed to specific destinations. Show SPI as a multi-lane highway with a dedicated chip select traffic light for each device. Show the BME280 and OLED on a breadboard with labeled wires. Show the I2C scanner output listing found addresses. Show a real OLED display updating with temperature, humidity, and pressure. Include a troubleshooting segment for missing pull-ups and address conflicts.

---

## Module 3: Arduino for IoT: Actuators, Shields, and Communication

> **Goal:** Learn to control actuators, use Arduino shields for networking, and connect the Arduino to the internet and other devices.

---

### Chapter 3.1 — Actuators: Motors, Servos, Relays, and Displays

#### Learning objectives
- Control DC motors, servo motors, and stepper motors using the Arduino.
- Use relays to switch high-voltage AC devices safely.
- Interface character LCDs and OLED displays for local output.
- Understand the power requirements and safety considerations for driving actuators.

#### Detailed lesson content

Sensors gather data from the world, but **actuators** change the world. An actuator is any device that converts an electrical signal into physical action: a motor that spins, a relay that clicks, a servo that rotates, or a display that shows information. In IoT, actuators are the output side of the system: the smart thermostat opens a valve, the smart lock turns a bolt, the irrigation system opens a water valve. This chapter teaches you how to control the most common actuators with an Arduino.

A **DC motor** converts electrical energy into rotational motion. It has two wires: connect one to power and the other to ground, and it spins. Reverse the connections, and it spins in the opposite direction. However, an Arduino pin cannot supply enough current to drive a motor directly. The Arduino's I/O pins can source or sink a maximum of about 40 mA (20 mA recommended), while even a small DC motor can draw 100 mA or more. To control a motor, you need a **motor driver** such as the L298N or L293D H-bridge. The H-bridge allows you to control the motor's direction and speed using PWM signals from the Arduino.

```cpp
const int motorPin1 = 9;   // L298N IN1
const int motorPin2 = 10;  // L298N IN2
const int enablePin = 11;  // L298N ENA (PWM)

void setup() {
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(enablePin, OUTPUT);
}

void loop() {
  // Forward at half speed
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  analogWrite(enablePin, 128);  // 50% duty cycle
  delay(2000);

  // Stop
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);
  delay(1000);

  // Reverse at full speed
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, HIGH);
  analogWrite(enablePin, 255);  // 100% duty cycle
  delay(2000);
}
```

A **servo motor** is a motor with built-in position feedback. It can rotate to a specific angle (typically 0 to 180 degrees) and hold that position. Servos are controlled by a PWM signal with a specific pulse width: a 1 ms pulse sets the servo to 0 degrees, a 1.5 ms pulse sets it to 90 degrees, and a 2 ms pulse sets it to 180 degrees. The Arduino Servo library handles this timing automatically.

```cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);  // Servo signal pin
}

void loop() {
  myServo.write(0);    // 0 degrees
  delay(1000);
  myServo.write(90);   // 90 degrees
  delay(1000);
  myServo.write(180);  // 180 degrees
  delay(1000);
}
```

Servos are ideal for precise positioning: opening a door, moving a sensor, adjusting a valve, or steering a robot. They draw significant current when moving, so they should be powered by an external supply, not the Arduino's 5V pin.

A **relay** is an electrically operated switch. It allows a low-voltage Arduino to control a high-voltage AC device (like a lamp, a fan, or a pump) safely. The relay has a coil that, when energized by the Arduino, mechanically closes a set of contacts. The Arduino circuit and the high-voltage circuit are completely isolated. **Safety is critical when working with relays:** always use a relay module with an optocoupler for isolation, never touch the high-voltage terminals when power is on, and enclose the relay in a protective case.

```cpp
const int relayPin = 7;

void setup() {
  pinMode(relayPin, OUTPUT);
}

void loop() {
  digitalWrite(relayPin, HIGH);  // Turn relay on
  delay(5000);
  digitalWrite(relayPin, LOW);   // Turn relay off
  delay(5000);
}
```

**Displays** provide local feedback on an IoT device. The most common displays for Arduino are:
- **16x2 Character LCD:** Displays two lines of 16 characters each. Uses the LiquidCrystal library. Can be connected directly (many pins) or via I2C backpack (4 pins).
- **OLED (SSD1306):** A graphical display that can show text, shapes, and simple graphics. Uses I2C or SPI. Very readable and low power.
- **Neopixel/WS2812 LED strips:** Addressable RGB LEDs that can be controlled individually. Great for status indicators and visual feedback.

```cpp
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("IoT System");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print("Temp: ");
  lcd.print(analogRead(A0) * 0.488);  // Convert to temperature
  lcd.print(" C  ");
  delay(1000);
}
```

**Power considerations:** Actuators often require more power than the Arduino can provide. The Arduino's 5V pin can supply about 500 mA when powered by USB, and up to 1A when powered by an external 7–12V supply (via the barrel jack or Vin pin). Motors, servos, and relays should be powered by an external power supply, with the Arduino controlling them via the driver module's signal pins. Always connect the grounds of the external supply and the Arduino together.

#### Key concepts
- DC motors and H-bridge motor drivers (L298N, L293D)
- Servo motors and the Servo library
- Relays for AC device control and safety
- Character LCDs and OLED displays
- Power requirements for actuators
- External power supplies and ground connections
- Safety with high-voltage circuits

#### Hands-on activity
Build a circuit with a servo motor on pin 9, a relay module on pin 7, and an I2C LCD display. Write a sketch that implements a simple smart lock simulation: when a button is pressed, the servo rotates to 90 degrees (unlock position), the relay clicks (simulating a door latch), and the LCD displays "UNLOCKED" for 5 seconds. Then the servo returns to 0 degrees, the relay turns off, and the LCD displays "LOCKED". Use an external 5V power supply for the servo. Test the system and verify the timing.

#### Assessment idea
Show a diagram of a relay module connected to an Arduino and a 120V lamp. Ask: "Why is the relay module safer than connecting the lamp directly to the Arduino?" Answer: The relay provides electrical isolation between the low-voltage Arduino circuit and the high-voltage AC circuit. The Arduino only controls the relay coil (low voltage, low current), while the relay contacts handle the high voltage. Then ask: "Why should you use an external power supply for a servo motor instead of the Arduino's 5V pin?" Answer: Servos can draw hundreds of milliamps when moving, which can exceed the Arduino's 5V regulator capacity and cause the board to reset or become unstable.

#### AI generation note
Create a 10-minute lesson with real hardware demonstrations. Show a servo motor rotating smoothly from 0 to 180 degrees. Show a relay module clicking and an LED turning on. Show a character LCD displaying "IoT System Ready". Show a breadboard with the motor driver, servo, relay, and LCD. Use animated wiring diagrams with color-coded wires. Include a safety warning graphic for high-voltage circuits. Show the power supply connections with ground symbols.

---

### Chapter 3.2 — Arduino Shields for Networking: Ethernet and Wi-Fi

#### Learning objectives
- Use the Arduino Ethernet Shield to connect the Arduino to a wired network.
- Use the Arduino Wi-Fi Shield or ESP8266/ESP32 module to connect wirelessly.
- Send HTTP requests from the Arduino to a web server or cloud service.
- Implement a simple web server on the Arduino for remote control.

#### Detailed lesson content

An IoT device is only useful if it can communicate. While the Arduino Uno does not have built-in networking, it can be connected to the internet using **shields** — add-on boards that plug into the Arduino's headers and provide additional functionality. The most common networking shields are the Ethernet Shield and the Wi-Fi Shield. For modern IoT projects, the **ESP8266** or **ESP32** modules are increasingly popular because they combine a microcontroller with built-in Wi-Fi at a very low cost.

The **Arduino Ethernet Shield** uses the W5100 or W5500 chip to provide a 10/100 Mbps Ethernet connection. It connects to the Arduino via SPI (pins 10, 11, 12, 13) and has an RJ45 jack for a network cable. The shield also has a microSD card slot for logging data. The Ethernet library is included with the Arduino IDE.

```cpp
#include <SPI.h>
#include <Ethernet.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192, 168, 1, 100);
IPAddress server(192, 168, 1, 50);  // Local server IP

EthernetClient client;

void setup() {
  Serial.begin(9600);
  Ethernet.begin(mac, ip);
  delay(1000);

  if (client.connect(server, 80)) {
    Serial.println("Connected to server");
    client.println("GET /data?temp=25.5&hum=60 HTTP/1.1");
    client.println("Host: 192.168.1.50");
    client.println("Connection: close");
    client.println();
  } else {
    Serial.println("Connection failed");
  }
}

void loop() {
  if (client.available()) {
    char c = client.read();
    Serial.print(c);
  }
  if (!client.connected()) {
    client.stop();
    delay(60000);  // Send data every minute
  }
}
```

This sketch sends an HTTP GET request to a local server every minute, including temperature and humidity data as query parameters. The server (which could be a Raspberry Pi running a web server) receives the data and stores it.

The **Arduino Wi-Fi Shield** provides wireless connectivity. However, it has been discontinued, and the modern replacement is the **MKR WiFi 1010** board or external modules. The **ESP8266** (e.g., NodeMCU, Wemos D1 Mini) is a low-cost Wi-Fi module that can be programmed directly with the Arduino IDE. It has a 32-bit processor, more memory than the Arduino Uno, and built-in Wi-Fi. The ESP8266 is often used as a standalone IoT device or as a Wi-Fi shield for an Arduino Uno via serial communication.

```cpp
// ESP8266 standalone sketch using Arduino IDE
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    http.begin(client, "http://api.thingspeak.com/update?api_key=YOURKEY&field1=25.5");
    int httpCode = http.GET();
    Serial.println(httpCode);
    http.end();
  }
  delay(60000);  // Send every minute
}
```

A simple **web server on the Arduino** allows you to control the device from a browser. This is useful for local control when you do not want to rely on the cloud.

```cpp
#include <Ethernet.h>
#include <SPI.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192, 168, 1, 100);
EthernetServer server(80);

void setup() {
  Ethernet.begin(mac, ip);
  server.begin();
  pinMode(13, OUTPUT);
}

void loop() {
  EthernetClient client = server.available();
  if (client) {
    String request = client.readStringUntil('\r');
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println();
    client.println("<html><body>");
    client.println("<h1>Arduino IoT Server</h1>");
    client.println("<a href=\"/LED=ON\"><button>Turn ON</button></a>");
    client.println("<a href=\"/LED=OFF\"><button>Turn OFF</button></a>");
    client.println("</body></html>");

    if (request.indexOf("LED=ON") != -1) digitalWrite(13, HIGH);
    if (request.indexOf("LED=OFF") != -1) digitalWrite(13, LOW);
    client.stop();
  }
}
```

When you visit `http://192.168.1.100` in a browser, you see two buttons. Clicking "Turn ON" sends the request `/LED=ON`, which the Arduino detects and turns the LED on.

**Choosing a networking solution:**
- **Ethernet Shield:** Reliable, fast, no wireless interference. Best for stationary devices near a router. Requires a cable.
- **Wi-Fi (ESP8266/ESP32):** Wireless, low cost, easy to deploy. Best for mobile or hard-to-reach devices. Requires Wi-Fi coverage and power.
- **Cellular (SIM800, NB-IoT):** Works anywhere with cellular coverage. Best for remote outdoor deployments. Requires a SIM card and data plan. More expensive.
- **LoRa/LoRaWAN:** Very long range, very low power. Best for agricultural and environmental sensors spread over large areas. Requires a gateway.

#### Key concepts
- Arduino Ethernet Shield (W5100/W5500) and Ethernet library
- Arduino Wi-Fi Shield and ESP8266/ESP32 modules
- HTTP GET requests from Arduino
- Simple HTTP web server on Arduino
- ESP8266HTTPClient library
- Network options: Ethernet, Wi-Fi, cellular, LoRa
- MAC addresses and IP configuration

#### Hands-on activity
Set up an ESP8266 (NodeMCU) with the Arduino IDE. Connect it to your home Wi-Fi network. Write a sketch that reads a temperature sensor (analog or I2C) and sends the data to ThingSpeak every 30 seconds using HTTP GET. Create a free ThingSpeak account, create a channel, and copy the API key into your sketch. Verify that the data appears on the ThingSpeak dashboard as a real-time graph. Then modify the sketch to also send a tweet or email alert when the temperature exceeds a threshold (using ThingSpeak's React app).

#### Assessment idea
Ask: "You are designing a soil moisture sensor for a farm with no Wi-Fi coverage. The sensor must send data every hour and run on a battery for 6 months. Which networking technology would you choose?" Answer: LoRaWAN or NB-IoT (cellular), because they provide long-range, low-power communication. Wi-Fi would not work due to lack of coverage and high power consumption. Then ask: "Why is an HTTP GET request with query parameters a simple but limited way to send sensor data?" Answer: It is simple because the data is embedded in the URL and easy to parse. It is limited because URLs have length limits, the data is not encrypted (unless HTTPS is used), and there is no acknowledgment or error handling.

#### AI generation note
Create a 10-minute lesson with a split-screen view. On the left, show the Arduino IDE with the ESP8266 code. On the right, show the ThingSpeak dashboard with a real-time temperature graph. Show the web server HTML with buttons. Show the ESP8266 module and the NodeMCU board. Animate the HTTP request traveling from the ESP8266 to the router, then to the ThingSpeak server, then the response coming back. Show a network topology with Ethernet, Wi-Fi, cellular, and LoRa options. Include a troubleshooting tip for Wi-Fi connection failures.

---

### Chapter 3.3 — Connecting Arduino to Raspberry Pi: Serial, I2C, and Bluetooth

#### Learning objectives
- Establish serial communication between an Arduino and a Raspberry Pi.
- Use I2C to connect the Arduino as a slave device to the Raspberry Pi master.
- Use Bluetooth modules (HC-05) to create wireless Arduino-to-Raspberry Pi links.
- Design a protocol for reliable data exchange between the two platforms.

#### Detailed lesson content

In many IoT systems, the Arduino and the Raspberry Pi work together as a team. The Arduino handles the real-time, low-level tasks: reading sensors, controlling actuators, and responding quickly to events. The Raspberry Pi handles the higher-level tasks: running a web server, processing data, connecting to the internet, and providing a user interface. This division of labor leverages the strengths of each platform. The Arduino is the **edge device** (close to the sensors), and the Raspberry Pi is the **edge gateway** (close to the network). This chapter teaches you how to connect them.

**Serial Communication (USB or UART):**
The simplest way to connect an Arduino to a Raspberry Pi is via USB. When you plug the Arduino into the Raspberry Pi's USB port, the Arduino appears as a serial device (typically `/dev/ttyUSB0` or `/dev/ttyACM0`). The Raspberry Pi can then read from and write to the Arduino using Python's `pyserial` library.

On the Arduino side:
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int temp = analogRead(A0);
  Serial.print("TEMP:");
  Serial.println(temp);
  delay(1000);
}
```

On the Raspberry Pi side (Python):
```python
import serial
import time

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.flush()

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        if line.startswith("TEMP:"):
            temp = int(line.split(":")[1])
            print(f"Temperature: {temp}")
    time.sleep(0.1)
```

This is a simple **command protocol** where the Arduino sends `TEMP:VALUE` and the Raspberry Pi parses it. You can extend this protocol to include multiple sensors, actuator commands, and error codes. For example:
- `TEMP:25.5` — temperature reading
- `HUM:60.2` — humidity reading
- `CMD:LED_ON` — command from Pi to Arduino
- `ACK:OK` — acknowledgment from Arduino to Pi

**I2C Communication:**
For a more robust connection, especially when the Arduino and Raspberry Pi are mounted on the same PCB or enclosure, I2C is an excellent choice. The Raspberry Pi acts as the I2C master, and the Arduino acts as the I2C slave. This allows the Raspberry Pi to poll the Arduino for data and send commands without the overhead of USB.

On the Arduino (I2C slave):
```cpp
#include <Wire.h>
#define SLAVE_ADDRESS 0x04

byte dataToSend = 0;

void setup() {
  Wire.begin(SLAVE_ADDRESS);
  Wire.onRequest(requestEvent);
  Wire.onReceive(receiveEvent);
}

void loop() {
  dataToSend = analogRead(A0) / 4;  // Scale to byte
  delay(100);
}

void requestEvent() {
  Wire.write(dataToSend);
}

void receiveEvent(int bytes) {
  while (Wire.available()) {
    char c = Wire.read();
    if (c == '1') digitalWrite(13, HIGH);
    if (c == '0') digitalWrite(13, LOW);
  }
}
```

On the Raspberry Pi (I2C master, Python):
```python
import smbus
import time

bus = smbus.SMBus(1)
SLAVE_ADDRESS = 0x04

while True:
    data = bus.read_byte(SLAVE_ADDRESS)
    print(f"Sensor value: {data}")
    bus.write_byte(SLAVE_ADDRESS, ord('1'))  # Turn LED on
    time.sleep(1)
    bus.write_byte(SLAVE_ADDRESS, ord('0'))  # Turn LED off
    time.sleep(1)
```

I2C requires the Raspberry Pi's I2C interface to be enabled (via `raspi-config`) and the `smbus` Python library to be installed (`sudo apt-get install python3-smbus`). The Arduino connects to the Raspberry Pi's GPIO pins: SDA (GPIO 2, pin 3) and SCL (GPIO 3, pin 5), plus GND.

**Bluetooth Communication:**
For wireless communication between the Arduino and Raspberry Pi, a **Bluetooth serial module (HC-05 or HC-06)** can be used. The HC-05 connects to the Arduino's serial pins (RX, TX) and appears as a Bluetooth serial port on the Raspberry Pi. Once paired, the Raspberry Pi can communicate with the Arduino as if it were connected via a serial cable.

To pair the HC-05 with the Raspberry Pi:
1. Install Bluetooth tools: `sudo apt-get install bluetooth blueman`.
2. Put the HC-05 in AT mode (hold the button while powering on) to configure it.
3. Use `bluetoothctl` to scan, pair, and connect to the HC-05.
4. The HC-05 will appear as a serial port (`/dev/rfcomm0`).
5. Use `pyserial` to communicate with `/dev/rfcomm0` just like a USB serial port.

**Designing a Protocol:**
Regardless of the physical connection, a reliable protocol is essential. A good protocol should:
- Have a clear message format with start and end delimiters.
- Include checksums or CRCs to detect corruption.
- Use acknowledgments to confirm receipt.
- Handle timeouts and retransmissions.
- Be extensible for new sensors and commands.

A simple but robust protocol example:
```
$TEMP,25.5,HUM,60.2,*CHECKSUM\n
```
- `$` is the start delimiter.
- `TEMP,25.5` and `HUM,60.2` are key-value pairs.
- `*CHECKSUM` is a checksum (e.g., XOR of all bytes between `$` and `*`).
- `\n` is the end delimiter.

#### Key concepts
- Arduino-Raspberry Pi serial communication via USB/UART
- Python `pyserial` library
- I2C communication: Arduino as slave, Raspberry Pi as master
- Raspberry Pi `smbus` library and I2C configuration
- Bluetooth serial (HC-05) pairing and communication
- Command protocol design: delimiters, checksums, acknowledgments
- Data parsing and protocol robustness

#### Hands-on activity
Build a system where an Arduino reads a temperature sensor and a light sensor, and a Raspberry Pi displays the readings on a local web page. Connect the Arduino to the Raspberry Pi via USB serial. Write an Arduino sketch that sends `TEMP:25.5,LIGHT:450` every 2 seconds. Write a Python script on the Raspberry Pi that reads the serial port, parses the data, and serves a simple web page using Flask that displays the current temperature and light level in real-time. Open the web page on a phone or computer on the same network and verify that the data updates. Then extend the system so that the web page has buttons to turn an LED on the Arduino on and off (sending commands back via serial).

#### Assessment idea
Ask: "You are building an IoT greenhouse monitor. The Arduino reads soil moisture and temperature sensors. The Raspberry Pi runs a web dashboard. Which communication method would you choose if the Arduino and Raspberry Pi are mounted in the same enclosure, 10 cm apart?" Answer: I2C or USB serial, because both are reliable, low-cost, and easy to implement over short distances. Bluetooth would be unnecessary and adds complexity. Then ask: "Why is a protocol with checksums and delimiters better than sending raw numbers?" Answer: Delimiters allow the receiver to identify the start and end of a message. Checksums detect corruption caused by noise or timing errors. Without them, a garbled message could be misinterpreted as valid data.

#### AI generation note
Create a 12-minute lesson with a split-screen view. On the left, show the Arduino IDE with the serial output sketch. On the right, show the Raspberry Pi terminal with the Python script running. Show the Flask web page with temperature and light readings. Show a user clicking the "LED ON" button and the Arduino's LED lighting up. Show the I2C wiring diagram with SDA and SCL lines. Show the Bluetooth pairing process on the Raspberry Pi. Animate the data flow: sensor → Arduino → serial → Raspberry Pi → Flask → browser. Include a protocol parsing animation showing delimiters and checksums.

---

## Module 4: Raspberry Pi for IoT: Python and GPIO

> **Goal:** Learn to program the Raspberry Pi for IoT applications, control GPIO, read sensors, and prepare the Pi as an IoT gateway.

---

### Chapter 4.1 — Raspberry Pi Setup and Python for IoT

#### Learning objectives
- Install Raspberry Pi OS and configure the Pi for headless operation (SSH, Wi-Fi).
- Use Python 3 on the Raspberry Pi for data processing, file I/O, and networking.
- Use virtual environments and install Python packages with pip.
- Write Python scripts that run automatically at boot using systemd or cron.

#### Detailed lesson content

The Raspberry Pi is the Swiss Army knife of IoT. It is a complete Linux computer that fits in the palm of your hand, with GPIO pins for hardware control, USB ports for peripherals, Ethernet and Wi-Fi for networking, and enough processing power to run a web server, a database, and machine learning models simultaneously. In IoT architectures, the Raspberry Pi typically serves as the **edge gateway**: it collects data from Arduino sensors, processes it, stores it, and forwards it to the cloud. It can also run local dashboards, act as a Wi-Fi access point, and manage device updates.

Setting up the Raspberry Pi for IoT development involves several steps. The **Raspberry Pi Imager** is the easiest way to install the operating system. For IoT projects, you typically want the **Raspberry Pi OS Lite** (64-bit) because it has no graphical interface, saving disk space and memory. You can pre-configure Wi-Fi, SSH, and a username/password before the first boot by editing the Imager's settings or by creating `wpa_supplicant.conf` and `ssh` files on the boot partition of the SD card.

After the first boot, you connect via SSH from another computer:
```bash
ssh username@raspberrypi.local
```

The first tasks on a new Pi are:
1. Update the package list and upgrade installed packages: `sudo apt update && sudo apt upgrade -y`
2. Enable interfaces: `sudo raspi-config` → Interface Options → enable I2C, SPI, UART, Camera, VNC if needed.
3. Configure Wi-Fi: edit `/etc/wpa_supplicant/wpa_supplicant.conf` for static IP or use the Imager's settings.
4. Set a static IP address (optional but recommended for IoT): edit `/etc/dhcpcd.conf`.

**Python on Raspberry Pi:**
Python is the primary language for IoT development on the Raspberry Pi. It is pre-installed, has a vast ecosystem of libraries, and is easier to write and debug than C for high-level tasks. The Raspberry Pi has both Python 2 and Python 3 installed, but you should always use Python 3 (`python3` command).

Python scripts for IoT typically follow this pattern:
1. Import libraries (GPIO, networking, data processing).
2. Initialize hardware (GPIO pins, sensors, serial ports).
3. Enter a main loop that reads sensors, processes data, and acts.
4. Handle exceptions and cleanup on exit.

```python
#!/usr/bin/env python3
import time
import json
from datetime import datetime

# Main loop
try:
    while True:
        # Read sensor (placeholder)
        temperature = 25.5
        humidity = 60.0

        # Create data record
        data = {
            "timestamp": datetime.now().isoformat(),
            "temperature": temperature,
            "humidity": humidity
        }

        # Save to file
        with open("sensor_data.json", "a") as f:
            f.write(json.dumps(data) + "\n")

        print(f"Logged: {data}")
        time.sleep(5)

except KeyboardInterrupt:
    print("Program stopped by user")
```

**Virtual environments** are essential for Python projects. They isolate project dependencies and prevent conflicts between different projects. To create a virtual environment:

```bash
python3 -m venv ~/iot_env
source ~/iot_env/bin/activate
pip install flask requests paho-mqtt pyserial
```

When the environment is activated, any packages you install are placed in the project directory, not the system Python. This makes your project portable and reproducible.

**Running scripts automatically:**
IoT devices often need to run scripts automatically at boot. There are two common methods:
1. **Cron with `@reboot`:** Edit the crontab with `crontab -e` and add: `@reboot /home/pi/iot_env/bin/python /home/pi/project/main.py &`
2. **Systemd service:** Create a service file that starts the script as a background service, handles restarts, and logs output.

```bash
# /etc/systemd/system/iot-sensor.service
[Unit]
Description=IoT Sensor Logger
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/project
ExecStart=/home/pi/iot_env/bin/python /home/pi/project/main.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl enable iot-sensor.service
sudo systemctl start iot-sensor.service
sudo systemctl status iot-sensor.service
```

Systemd is preferred for production IoT systems because it provides process management, automatic restarts, and logging integration.

#### Key concepts
- Raspberry Pi OS Lite installation and headless setup
- SSH, Wi-Fi, and static IP configuration
- Python 3 for IoT: data processing, file I/O, JSON, datetime
- Virtual environments with `venv` and `pip`
- Cron and `@reboot` for scheduled tasks
- Systemd services for background processes
- `raspi-config` for interface enabling

#### Hands-on activity
Set up a Raspberry Pi with Raspberry Pi OS Lite. Configure it for headless operation with Wi-Fi and SSH. Create a Python virtual environment and install the `flask` and `requests` packages. Write a Python script that reads a simulated sensor value (random number between 20 and 30), logs it to a JSON file with a timestamp, and runs every 5 seconds. Set up the script to run automatically at boot using a systemd service. Reboot the Pi and verify that the JSON file is being populated. Check the service status with `systemctl`.

#### Assessment idea
Ask: "What is the advantage of using a virtual environment for a Python IoT project?" Answer: It isolates project dependencies, preventing version conflicts between different projects and making the project reproducible on another device. Then ask: "Why is a systemd service better than a cron `@reboot` job for a long-running IoT script?" Answer: Systemd provides process management, automatic restart on failure, logging, and dependency management (e.g., wait for network before starting). Cron does not restart a script if it crashes.

#### AI generation note
Create a 10-minute screen recording tutorial. Show the Raspberry Pi Imager with settings configuration. Show the first SSH connection. Show `raspi-config` enabling I2C. Show the creation of a virtual environment and package installation. Show the Python script running and writing to a JSON file. Show the systemd service file and the `systemctl` commands. Show the service status as "active (running)". Include annotations for every command.

---

### Chapter 4.2 — Raspberry Pi GPIO and Sensor Interfacing

#### Learning objectives
- Use the RPi.GPIO and gpiozero libraries to control digital outputs and read digital inputs.
- Read analog sensors using an external ADC (MCP3008) or an Arduino-connected sensor.
- Interface I2C and SPI sensors with the Raspberry Pi.
- Use the Raspberry Pi Camera Module for image capture and computer vision.

#### Detailed lesson content

The Raspberry Pi's **GPIO (General Purpose Input/Output)** header is what makes it a physical computing platform. Unlike a microcontroller, the Pi's GPIO pins operate at 3.3V logic, and they can be damaged by 5V signals. The Pi has no built-in analog-to-digital converter (ADC), so it cannot read analog sensors directly without an external ADC chip or an Arduino intermediary. This is a critical difference from the Arduino and must be understood before connecting any hardware.

The 40-pin GPIO header provides:
- 3.3V and 5V power pins (use 3.3V for sensors, 5V for powering motors and relays through drivers).
- Multiple ground pins.
- 26 GPIO pins that can be configured as inputs or outputs.
- Dedicated I2C pins (GPIO 2 = SDA, GPIO 3 = SCL).
- Dedicated SPI pins (GPIO 9 = MISO, GPIO 10 = MOSI, GPIO 11 = SCK).
- Dedicated UART pins (GPIO 14 = TX, GPIO 15 = RX).
- Hardware PWM pins (GPIO 12, 13, 18, 19).

**GPIO Output:** Controlling an LED on the Raspberry Pi is straightforward with `gpiozero`:

```python
from gpiozero import LED
from time import sleep

led = LED(17)  # GPIO 17 (physical pin 11)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

`gpiozero` is the recommended library for beginners because it is simple, object-oriented, and handles edge cases. For more control, `RPi.GPIO` is the lower-level library:

```python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)  # Use BCM numbering
GPIO.setup(17, GPIO.OUT)

while True:
    GPIO.output(17, GPIO.HIGH)
    time.sleep(1)
    GPIO.output(17, GPIO.LOW)
    time.sleep(1)
```

**GPIO Input:** Reading a button uses the same libraries:

```python
from gpiozero import Button

button = Button(18)  # GPIO 18 (physical pin 12)

while True:
    if button.is_pressed:
        print("Button pressed!")
```

For event-driven input, `gpiozero` provides callbacks:

```python
from gpiozero import Button
from signal import pause

def button_pressed():
    print("Button was pressed!")

button = Button(18)
button.when_pressed = button_pressed

pause()  # Keep the program running
```

**Analog Sensors:** Since the Raspberry Pi has no ADC, you need an external chip like the **MCP3008** to read analog sensors. The MCP3008 is an 8-channel, 10-bit SPI ADC. It connects to the Pi's SPI pins and provides 8 analog input channels.

```python
from gpiozero import MCP3008
from time import sleep

adc = MCP3008(channel=0)  # Read channel 0

while True:
    voltage = adc.value * 3.3  # Scale to 0-3.3V
    print(f"Voltage: {voltage:.2f} V")
    sleep(1)
```

The `gpiozero` library includes built-in support for the MCP3008, making it very easy to use. Alternatively, you can use the Arduino as an ADC slave (as shown in Chapter 3.3) and send the readings to the Pi via serial or I2C.

**I2C Sensors:** The Raspberry Pi can read I2C sensors directly using the `smbus` library. For example, the BME280 sensor:

```python
import smbus
from bme280 import BME280  # Using the pimoroni-bme280 library

bus = smbus.SMBus(1)
bme280 = BME280(i2c_dev=bus)

while True:
    temperature = bme280.get_temperature()
    pressure = bme280.get_pressure()
    humidity = bme280.get_humidity()
    print(f"{temperature:.2f} C, {pressure:.2f} hPa, {humidity:.2f} %")
    time.sleep(2)
```

**Raspberry Pi Camera Module:** The Camera Module is a powerful sensor for IoT applications. It can capture still images, record video, and even perform computer vision tasks using OpenCV and TensorFlow Lite.

```python
from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.start_preview()
sleep(5)
camera.capture('/home/pi/image.jpg')
camera.stop_preview()
print("Image captured!")
```

For IoT, the camera can be used for: security monitoring, object detection, optical character recognition (reading meters), and visual inspection. The `picamera` library provides full control over resolution, exposure, white balance, and video encoding.

**Safety reminder:** Always use a current-limiting resistor (330Ω) when connecting LEDs to the Pi's GPIO pins. Never connect a 5V signal directly to a 3.3V GPIO pin. Use a level shifter or voltage divider when interfacing with 5V devices.

#### Key concepts
- Raspberry Pi GPIO: 3.3V logic, 40-pin header
- `gpiozero` and `RPi.GPIO` libraries
- GPIO output (LED) and input (button)
- Event-driven programming with callbacks
- MCP3008 SPI ADC for analog sensors
- I2C sensors on Raspberry Pi using `smbus`
- Raspberry Pi Camera Module and `picamera`
- Safety: current limiting, voltage levels, level shifters

#### Hands-on activity
Connect an LED to GPIO 17 (with a 330Ω resistor), a pushbutton to GPIO 18 (with a 10kΩ pull-up resistor to 3.3V), and an MCP3008 ADC to the SPI pins. Connect a potentiometer to channel 0 of the MCP3008. Write a Python script using `gpiozero` that reads the potentiometer value, turns the LED on when the value exceeds 50%, and prints the value to the console. When the button is pressed, capture the current value and save it to a CSV file with a timestamp. Test the system by turning the potentiometer and pressing the button.

#### Assessment idea
Ask: "Why does the Raspberry Pi need an external ADC like the MCP3008 to read analog sensors, while the Arduino does not?" Answer: The Raspberry Pi has no built-in analog-to-digital converter. Its GPIO pins are digital only. The Arduino has a built-in 10-bit ADC on its analog pins. Then ask: "What is the maximum safe voltage for a Raspberry Pi GPIO pin?" Answer: 3.3V. Connecting 5V can permanently damage the GPIO circuitry and potentially the entire SoC.

#### AI generation note
Create a 10-minute lesson with a real Raspberry Pi and breadboard. Show the LED blinking via `gpiozero`. Show the button press triggering a callback. Show the MCP3008 connected to the SPI pins with a potentiometer. Show the Python script reading the ADC and controlling the LED. Show the Camera Module capturing an image. Include a safety warning graphic with a 3.3V shield and a 5V skull-and-crossbones. Show the wiring diagram with color-coded wires and labeled pins.

---

### Chapter 4.3 — Raspberry Pi as an IoT Gateway and Data Logger

#### Learning objectives
- Design a Raspberry Pi-based data logger that collects, stores, and forwards sensor data.
- Use SQLite for local data storage on the Raspberry Pi.
- Implement data buffering and retry logic for unreliable network connections.
- Use the Raspberry Pi as a local web server for IoT dashboards.

#### Detailed lesson content

One of the most important roles of the Raspberry Pi in IoT is the **gateway**. A gateway sits between the sensor network and the internet, collecting data from multiple sensors, processing it, storing it locally, and forwarding it to the cloud. If the internet connection is down, the gateway buffers the data and retries later. This chapter teaches you how to build a robust gateway using the Raspberry Pi.

**Data Logging with SQLite:**
SQLite is a lightweight, file-based database that requires no server setup. It is perfect for IoT data logging because it stores data in a single file, supports SQL queries, and is reliable even on power failures (when configured with WAL mode). For an IoT sensor logger, you typically create a table with timestamp, sensor ID, and value columns.

```python
import sqlite3
from datetime import datetime

# Create database and table
conn = sqlite3.connect('iot_data.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS sensor_readings
             (timestamp TEXT, sensor_id TEXT, value REAL)''')
conn.commit()

# Insert a reading
timestamp = datetime.now().isoformat()
c.execute("INSERT INTO sensor_readings VALUES (?, ?, ?)",
          (timestamp, "TEMP_01", 25.5))
conn.commit()
conn.close()
```

To query the data:
```python
conn = sqlite3.connect('iot_data.db')
c = conn.cursor()
c.execute("SELECT * FROM sensor_readings ORDER BY timestamp DESC LIMIT 10")
rows = c.fetchall()
for row in rows:
    print(row)
conn.close()
```

SQLite is ideal for IoT because:
- It is serverless: no separate database process to manage.
- It is robust: WAL (Write-Ahead Logging) mode prevents corruption on power loss.
- It is queryable: you can run SQL queries for analytics, aggregation, and filtering.
- It is portable: the `.db` file can be copied, backed up, or transferred to another system.

**Data Buffering and Retry Logic:**
IoT devices often operate in environments with intermittent connectivity. A robust gateway must handle network failures gracefully. The standard approach is:
1. Store every sensor reading in the local SQLite database.
2. Attempt to send the reading to the cloud.
3. If the send succeeds, mark the reading as "sent" in the database.
4. If the send fails, leave the reading as "unsent" and retry later.
5. Periodically scan the database for unsent readings and attempt to send them.

```python
import sqlite3
import requests
import time

CLOUD_URL = "http://api.example.com/sensor"

def send_to_cloud(timestamp, sensor_id, value):
    try:
        response = requests.post(CLOUD_URL, json={
            "timestamp": timestamp,
            "sensor_id": sensor_id,
            "value": value
        }, timeout=5)
        return response.status_code == 200
    except requests.exceptions.RequestException:
        return False

def process_unsent():
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("SELECT rowid, timestamp, sensor_id, value FROM sensor_readings WHERE sent = 0")
    rows = c.fetchall()

    for row in rows:
        rowid, timestamp, sensor_id, value = row
        if send_to_cloud(timestamp, sensor_id, value):
            c.execute("UPDATE sensor_readings SET sent = 1 WHERE rowid = ?", (rowid,))
            conn.commit()
            print(f"Sent: {sensor_id} = {value}")
        else:
            print(f"Failed to send: {sensor_id} = {value}")
            break  # Stop retrying to avoid overwhelming the failed connection

    conn.close()

while True:
    # Read sensor and store locally
    # ...
    process_unsent()
    time.sleep(60)
```

This pattern ensures that no data is lost, even if the internet is down for hours or days. The local database acts as a buffer, and the retry logic ensures that data is eventually uploaded when connectivity returns.

**Flask Web Server for Local Dashboards:**
The Raspberry Pi can run a lightweight web server using Flask, allowing users to view sensor data and control devices from a browser on the local network.

```python
from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def dashboard():
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("SELECT * FROM sensor_readings ORDER BY timestamp DESC LIMIT 20")
    data = c.fetchall()
    conn.close()
    return render_template('dashboard.html', readings=data)

@app.route('/api/data')
def api_data():
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("SELECT timestamp, value FROM sensor_readings WHERE sensor_id = 'TEMP_01' ORDER BY timestamp DESC LIMIT 100")
    data = c.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
```

The `host='0.0.0.0'` setting makes the server accessible from any device on the network. The `/api/data` endpoint returns JSON data that can be consumed by a JavaScript charting library (like Chart.js) to create real-time graphs in the browser.

A simple HTML dashboard can display the latest readings and a chart:
```html
<!DOCTYPE html>
<html>
<head><title>IoT Dashboard</title></head>
<body>
  <h1>Sensor Dashboard</h1>
  <table>
    <tr><th>Time</th><th>Sensor</th><th>Value</th></tr>
    {% for row in readings %}
    <tr><td>{{ row[0] }}</td><td>{{ row[1] }}</td><td>{{ row[2] }}</td></tr>
    {% endfor %}
  </table>
</body>
</html>
```

#### Key concepts
- SQLite for local IoT data storage
- WAL mode for SQLite reliability
- Data buffering and retry logic for unreliable networks
- Flask web server for local dashboards
- REST API design for IoT data access
- JSON data exchange
- Separation of data collection, storage, and presentation

#### Hands-on activity
Build a complete Raspberry Pi data logger system. Create a SQLite database with a `sensor_readings` table including `timestamp`, `sensor_id`, `value`, and `sent` columns. Write a Python script that reads simulated sensor data (or real data from an MCP3008 or I2C sensor) every 10 seconds, stores it in SQLite, and attempts to send it to a free cloud service (ThingSpeak or Adafruit IO) every minute. If the cloud send fails, the data remains marked as unsent. Add a Flask web server that displays the last 20 readings in a table and provides a JSON API endpoint at `/api/data`. Access the dashboard from a phone or computer on the same network. Disconnect the Pi from the internet, let it collect data for a while, then reconnect and verify that the buffered data is uploaded.

#### Assessment idea
Ask: "Why is SQLite a better choice than a plain text file for IoT data logging?" Answer: SQLite provides structured storage, SQL querying, concurrent access, and ACID reliability (with WAL mode). A text file requires manual parsing, is harder to query, and can be corrupted if a write is interrupted. Then ask: "What is the purpose of the `sent` flag in the database table?" Answer: It tracks which readings have been successfully uploaded to the cloud. Unsent readings can be retried later, ensuring no data is lost during network outages.

#### AI generation note
Create a 12-minute lesson with a split-screen view. On the left, show the Python script writing to SQLite. On the right, show the SQLite database being queried with `sqlite3` command-line tool. Show the Flask web server running and the browser displaying the dashboard. Show the network being disconnected, data accumulating, and then being uploaded after reconnection. Animate the data flow: sensor → SQLite → cloud with retry arrows. Show a Chart.js graph updating with real-time data from the JSON API. Include a code annotation for every major section.

---

## Module 5: Raspberry Pi for IoT: Networking and Web Services

> **Goal:** Master IoT networking on the Raspberry Pi, including HTTP, REST APIs, MQTT, and building web services for device control.

---

### Chapter 5.1 — HTTP, REST APIs, and Web Scraping for IoT

#### Learning objectives
- Use Python's `requests` library to send HTTP GET and POST requests to web services.
- Consume public APIs (weather, geolocation, time) from an IoT device.
- Parse JSON responses and extract relevant data for IoT applications.
- Build a REST API with Flask that allows remote control of IoT devices.

#### Detailed lesson content

HTTP is the foundation of web communication, and it is also the most common protocol for IoT devices to communicate with the cloud. Every time your IoT device sends sensor data to a cloud platform, it is likely using HTTP (or its encrypted variant, HTTPS). Understanding how to construct HTTP requests, parse responses, and build REST APIs is essential for IoT development.

**HTTP Methods for IoT:**
- **GET:** Retrieves data from a server. Used to fetch current sensor readings, weather data, or configuration settings.
- **POST:** Sends data to a server. Used to upload sensor readings, log events, or trigger actions.
- **PUT:** Updates an existing resource. Used to update device configuration or settings.
- **DELETE:** Removes a resource. Used to delete old data or unregister a device.

The Python `requests` library makes HTTP operations simple:

```python
import requests
import json

# GET request to fetch weather data
response = requests.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric")
weather = response.json()
temperature = weather["main"]["temp"]
print(f"Current temperature in London: {temperature}°C")

# POST request to send sensor data to a cloud platform
payload = {
    "api_key": "YOUR_KEY",
    "field1": 25.5,
    "field2": 60.0
}
response = requests.post("https://api.thingspeak.com/update", data=payload)
print(f"Response status: {response.status_code}")
```

**REST APIs** are web services that follow a set of architectural principles: stateless communication, resource-based URLs, and standard HTTP methods. For IoT, a REST API might expose endpoints like:
- `GET /api/devices` — list all registered devices
- `GET /api/devices/001/readings` — get the latest readings from device 001
- `POST /api/devices/001/readings` — upload a new reading from device 001
- `PUT /api/devices/001/config` — update the configuration of device 001
- `DELETE /api/devices/001` — remove device 001

Building a REST API with Flask for an IoT gateway:

```python
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/api/readings', methods=['POST'])
def add_reading():
    data = request.get_json()
    timestamp = data.get('timestamp')
    sensor_id = data.get('sensor_id')
    value = data.get('value')

    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("INSERT INTO sensor_readings VALUES (?, ?, ?)",
              (timestamp, sensor_id, value))
    conn.commit()
    conn.close()
    return jsonify({"status": "success"}), 201

@app.route('/api/readings/<sensor_id>', methods=['GET'])
def get_readings(sensor_id):
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("SELECT * FROM sensor_readings WHERE sensor_id = ? ORDER BY timestamp DESC LIMIT 10",
              (sensor_id,))
    rows = c.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/control', methods=['POST'])
def control_device():
    data = request.get_json()
    command = data.get('command')
    # Forward command to Arduino via serial
    # ser.write(f"{command}\n".encode())
    return jsonify({"status": "command sent", "command": command})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

This API allows devices to upload readings, clients to query historical data, and users to send control commands to devices. The `/api/control` endpoint could forward commands to an Arduino via serial (as shown in Chapter 3.3), enabling remote control from anywhere on the network.

**Web Scraping for IoT:**
Sometimes the data you need is available on a website but not through an API. Web scraping uses libraries like `BeautifulSoup` to extract data from HTML pages. However, scraping should be a last resort because it is fragile (websites change) and may violate terms of service. Always prefer APIs when available.

```python
from bs4 import BeautifulSoup
import requests

response = requests.get("https://example.com/weather")
soup = BeautifulSoup(response.text, 'html.parser')
temp = soup.find('span', class_='temperature').text
print(f"Scraped temperature: {temp}")
```

**API Keys and Security:**
Most cloud APIs require an API key for authentication. Never hardcode API keys in your source code. Instead, store them in environment variables or a separate configuration file that is not committed to version control:

```python
import os
API_KEY = os.environ.get('THINGSPEAK_API_KEY')
```

On the Raspberry Pi, set the environment variable in your systemd service file or `.bashrc`:
```bash
export THINGSPEAK_API_KEY="your_key_here"
```

#### Key concepts
- HTTP methods: GET, POST, PUT, DELETE
- Python `requests` library for HTTP
- JSON parsing and construction
- REST API design for IoT
- Flask REST API endpoints for readings and control
- Web scraping with BeautifulSoup
- API key security and environment variables

#### Hands-on activity
Build a Flask REST API on the Raspberry Pi with the following endpoints: `POST /api/sensor` to receive JSON sensor data and store it in SQLite, `GET /api/sensor/<id>` to retrieve the last 10 readings for a sensor, and `POST /api/led` to send an LED control command to a connected Arduino. Test the API using `curl` from another computer on the network. For example: `curl -X POST -H "Content-Type: application/json" -d '{"sensor_id":"TEMP_01","value":25.5}' http://raspberrypi.local:5000/api/sensor`. Verify that the data is stored and that the LED command is forwarded to the Arduino.

#### Assessment idea
Show a JSON payload: `{"sensor_id": "TEMP_01", "value": 25.5, "timestamp": "2026-01-15T10:00:00"}`. Ask: "Write the Python code to send this data to an API endpoint at `http://192.168.1.50:5000/api/sensor` using a POST request." Answer: `requests.post("http://192.168.1.50:5000/api/sensor", json=payload)`. Then ask: "Why should API keys be stored in environment variables instead of the source code?" Answer: Environment variables keep secrets out of the code, preventing them from being exposed in version control, shared repositories, or public code reviews.

#### AI generation note
Create a 10-minute lesson with a split-screen view. On the left, show the Python `requests` code sending data. On the right, show the Flask server receiving the request and the SQLite database being updated. Show a `curl` command in a terminal and the response. Show the REST API endpoints as a visual diagram with arrows for GET, POST, PUT, DELETE. Show a JSON payload being parsed and the values being extracted. Include a security warning about API keys with a lock icon.

---

### Chapter 5.2 — MQTT: The Messaging Protocol for IoT

#### Learning objectives
- Explain why MQTT is the dominant messaging protocol for IoT.
- Understand MQTT concepts: broker, publisher, subscriber, topic, QoS levels.
- Publish and subscribe to MQTT topics using Python and the `paho-mqtt` library.
- Set up a local MQTT broker (Mosquitto) on the Raspberry Pi.

#### Detailed lesson content

While HTTP is excellent for request-response communication, it is not ideal for many IoT scenarios. HTTP requires the client to initiate every interaction, which is inefficient when a device needs to send frequent, small updates. HTTP also has significant overhead: headers, connection setup, and state management. For IoT, where devices may be battery-powered, bandwidth-constrained, and operating over unreliable networks, a lighter, more efficient protocol is needed. That protocol is **MQTT** (Message Queuing Telemetry Transport).

MQTT was invented in 1999 by Andy Stanford-Clark and Arlen Nipper for monitoring oil pipelines over satellite connections. It was designed to be lightweight, efficient, and resilient. Today, MQTT is the de facto standard for IoT messaging, used by AWS IoT, Azure IoT Hub, Google Cloud IoT, and countless other platforms.

The key concepts of MQTT are:
- **Broker:** A server that receives all messages and routes them to the appropriate subscribers. The broker is the central hub of the MQTT network. Popular brokers include **Eclipse Mosquitto** (open-source), **HiveMQ**, **EMQX**, and cloud-managed brokers like AWS IoT Core.
- **Publisher:** A client that sends messages to the broker. An IoT sensor is a publisher: it publishes sensor readings to a topic.
- **Subscriber:** A client that receives messages from the broker. A mobile app or a web dashboard is a subscriber: it subscribes to topics to receive real-time updates.
- **Topic:** A hierarchical string that identifies the subject of a message. Topics use forward slashes as separators, like `home/livingroom/temperature` or `factory/line1/machine/status`. Topics are flexible and can be created dynamically.
- **QoS (Quality of Service):** The delivery guarantee level for a message.
  - **QoS 0:** At most once delivery. The message is sent once with no acknowledgment. Fastest, but may be lost. Best for non-critical data like frequent sensor readings.
  - **QoS 1:** At least once delivery. The message is sent and acknowledged. If no acknowledgment is received, it is resent. May result in duplicate messages. Best for important data where loss is unacceptable but duplicates are tolerable.
  - **QoS 2:** Exactly once delivery. A four-step handshake ensures the message is delivered exactly once. Slowest but most reliable. Best for critical commands like "unlock door" or "emergency stop."
- **Retain flag:** When a message is published with the retain flag set, the broker stores the last message for that topic and sends it immediately to new subscribers. This is useful for configuration values or status indicators that new clients need to know immediately.
- **Last Will and Testament (LWT):** A message that the broker publishes on behalf of the client if the client disconnects unexpectedly. This is used to detect device failures. For example, if a sensor goes offline, the broker publishes `sensor/status = offline` to alert other systems.

Setting up a local MQTT broker on the Raspberry Pi:
```bash
sudo apt-get install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl start mosquitto
```

The Mosquitto broker is now running on port 1883. You can test it from the command line:
```bash
# Subscribe to a topic in one terminal
mosquitto_sub -h localhost -t "test/topic"

# Publish a message in another terminal
mosquitto_pub -h localhost -t "test/topic" -m "Hello MQTT"
```

Using Python with `paho-mqtt`:
```python
import paho.mqtt.client as mqtt
import time
import json

BROKER = "localhost"
PORT = 1883
TOPIC = "home/sensor/temperature"

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(TOPIC)

def on_message(client, userdata, msg):
    print(f"Received: {msg.topic} = {msg.payload.decode()}")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(BROKER, PORT, 60)

# Publish sensor data
for i in range(10):
    payload = json.dumps({"temperature": 20 + i, "unit": "C"})
    client.publish(TOPIC, payload, qos=1)
    time.sleep(2)

client.loop_forever()
```

In an IoT architecture, the Arduino can publish sensor data to the broker via a Wi-Fi module (ESP8266), and the Raspberry Pi can subscribe to the data, process it, and store it. Alternatively, the Raspberry Pi can act as both a subscriber (from the Arduino) and a publisher (to the cloud broker), making it a true IoT gateway.

**MQTT vs. HTTP for IoT:**
- MQTT is more efficient: smaller headers, persistent connections, and publish-subscribe model reduce overhead.
- MQTT supports real-time updates: subscribers receive messages immediately when published, without polling.
- MQTT is better for unreliable networks: QoS levels ensure delivery even over intermittent connections.
- HTTP is simpler and more widely supported: every platform has HTTP libraries, and REST APIs are familiar to web developers.
- HTTP is better for one-off requests: fetching configuration, downloading firmware, or querying historical data.

In practice, many IoT systems use both: MQTT for real-time sensor data and device commands, and HTTP for configuration, firmware updates, and historical data queries.

#### Key concepts
- MQTT architecture: broker, publisher, subscriber
- MQTT topics and hierarchical naming
- QoS levels: 0, 1, 2
- Retain flag and Last Will and Testament (LWT)
- Mosquitto broker installation and configuration
- `paho-mqtt` Python library
- `mosquitto_pub` and `mosquitto_sub` command-line tools
- MQTT vs. HTTP trade-offs

#### Hands-on activity
Install Mosquitto on the Raspberry Pi and verify it is running. Write a Python script using `paho-mqtt` that publishes simulated temperature and humidity data to the topics `home/sensor/temperature` and `home/sensor/humidity` every 5 seconds with QoS 1. Write a second Python script (run it in another terminal) that subscribes to both topics and prints the received messages. Verify that messages are received in real-time. Then, stop the publisher script, set a retained message on `home/sensor/status` with the value `offline`, and start a new subscriber. Verify that the subscriber immediately receives the retained `offline` message. Finally, use the `last_will` feature to publish a `status/offline` message when the publisher disconnects unexpectedly.

#### Assessment idea
Ask: "You are designing a fire alarm system that must send a 'FIRE DETECTED' message to a monitoring station. Which MQTT QoS level should you use, and why?" Answer: QoS 2, because it guarantees exactly-once delivery. A fire alarm message must not be lost (QoS 0 is insufficient) and must not be duplicated (QoS 1 could cause multiple alerts). Then ask: "What is the purpose of the Last Will and Testament in MQTT?" Answer: The LWT is a message that the broker publishes on behalf of a client if the client disconnects unexpectedly. It allows other systems to detect device failures and take appropriate action (e.g., alert an operator that a sensor has gone offline).

#### AI generation note
Create a 10-minute animated lesson. Show the MQTT broker as a central post office receiving letters (messages) from publishers and delivering them to subscribers. Show the topic hierarchy as a file system: `home/livingroom/temperature`. Animate QoS 0 as a letter thrown over a fence, QoS 1 as a certified letter with a return receipt, and QoS 2 as a diplomatic pouch with a four-handshake delivery. Show the `paho-mqtt` Python code with split-screen publisher and subscriber terminals. Show the retained message being delivered immediately to a new subscriber. Show the LWT message being published when a device disconnects. Include a comparison table of MQTT vs. HTTP.

---

### Chapter 5.3 — IoT Cloud Platforms and Data Visualization

#### Learning objectives
- Compare popular IoT cloud platforms: ThingSpeak, Adafruit IO, AWS IoT, and Azure IoT.
- Send data from the Raspberry Pi to ThingSpeak and visualize it in real-time charts.
- Use webhooks and IFTTT to integrate IoT devices with third-party services.
- Understand the trade-offs between free and paid cloud platforms for IoT.

#### Detailed lesson content

Cloud platforms are the backbone of IoT analytics. They store the massive amounts of data generated by sensors, run analytics and machine learning models, and provide dashboards for visualization. For beginners and hobbyists, free cloud platforms like **ThingSpeak** and **Adafruit IO** are excellent starting points. For commercial deployments, **AWS IoT**, **Azure IoT Hub**, and **Google Cloud IoT** provide enterprise-grade scalability, security, and integration.

**ThingSpeak** is a free IoT analytics platform from MathWorks (the makers of MATLAB). It allows you to create channels, send data via HTTP or MQTT, and visualize it in real-time charts. Each channel has up to 8 fields for different data types. ThingSpeak also supports MATLAB analytics, which allows you to run data processing scripts on the incoming data.

To send data to ThingSpeak from the Raspberry Pi:
```python
import requests
import time

API_KEY = "YOUR_WRITE_API_KEY"
URL = "https://api.thingspeak.com/update"

while True:
    temperature = 25.5  # Read from sensor
    humidity = 60.0
    payload = {
        "api_key": API_KEY,
        "field1": temperature,
        "field2": humidity
    }
    response = requests.get(URL, params=payload)
    print(f"Sent: status={response.status_code}")
    time.sleep(15)  # ThingSpeak free tier: minimum 15 seconds between updates
```

ThingSpeak automatically generates charts for each field. You can embed these charts in a web page or share them via a public URL. ThingSpeak also supports **React** (trigger actions based on data thresholds) and **TalkBack** (send commands to devices).

**Adafruit IO** is another free platform with a focus on simplicity and maker-friendly features. It supports dashboards with gauges, charts, maps, and text displays. It has MQTT and REST APIs, and it integrates well with Adafruit's hardware ecosystem. The free tier allows up to 10 feeds and 30 data points per minute.

**IFTTT (If This Then That)** and **Zapier** are automation platforms that connect IoT devices to hundreds of other services. For example, you can create an IFTTT applet that sends you an email when your ThingSpeak channel reports a temperature above 30°C, or that turns on a smart light when a sensor detects motion. IFTTT uses webhooks to receive data from IoT devices and triggers actions on other platforms.

**AWS IoT Core** is the enterprise-grade IoT platform from Amazon. It supports MQTT, HTTPS, and WebSockets. It provides device management, security (X.509 certificates), rules engine (route data to other AWS services), and integration with Lambda, S3, DynamoDB, and SageMaker. AWS IoT is powerful but has a steeper learning curve and costs money beyond the free tier.

**Azure IoT Hub** is Microsoft's equivalent. It supports MQTT, AMQP, and HTTPS. It provides device twins (digital representations of physical devices), direct methods (remote commands), and integration with Azure Stream Analytics, Functions, and Power BI.

**Choosing a platform:**
- **For learning and prototyping:** ThingSpeak or Adafruit IO (free, easy, visual).
- **For small projects with automation:** ThingSpeak + IFTTT or Adafruit IO + IFTTT.
- **For commercial products with scale:** AWS IoT or Azure IoT Hub (scalable, secure, integrated).
- **For data privacy and control:** A self-hosted solution like Mosquitto + InfluxDB + Grafana on the Raspberry Pi.

**Data visualization:** Beyond the built-in charts of cloud platforms, you can build custom dashboards using **Grafana** (open-source visualization platform) or **Node-RED** (visual programming tool for IoT). Grafana connects to databases like InfluxDB or PostgreSQL and creates beautiful, interactive dashboards. Node-RED allows you to wire together IoT devices, APIs, and cloud services using a drag-and-drop interface.

```python
# Example: Sending data to InfluxDB for Grafana visualization
import requests
import time

INFLUX_URL = "http://localhost:8086/write?db=iot_db"

while True:
    temperature = 25.5
    line = f"temperature,sensor=temp_01 value={temperature}"
    requests.post(INFLUX_URL, data=line)
    time.sleep(10)
```

InfluxDB stores time-series data efficiently, and Grafana queries it to create real-time charts. This self-hosted stack (Mosquitto + InfluxDB + Grafana) is popular among advanced IoT enthusiasts because it provides full control and privacy.

#### Key concepts
- ThingSpeak: channels, fields, HTTP API, MATLAB analytics
- Adafruit IO: feeds, dashboards, MQTT/REST
- IFTTT and webhooks for IoT automation
- AWS IoT Core and Azure IoT Hub: enterprise features
- Self-hosted stack: Mosquitto + InfluxDB + Grafana
- Node-RED for visual IoT programming
- Data visualization: real-time charts, gauges, maps
- Platform selection criteria: cost, ease of use, scalability, privacy

#### Hands-on activity
Create a free ThingSpeak account and create a channel with two fields: temperature and humidity. Write a Python script on the Raspberry Pi that sends simulated (or real) sensor data to the channel every 15 seconds. Configure a ThingSpeak React app to send an email alert when the temperature exceeds 30°C. Create an IFTTT applet that turns on a Philips Hue light (or sends a notification) when the ThingSpeak channel updates. Share the public URL of your ThingSpeak chart. Then, install Node-RED on the Raspberry Pi (`sudo npm install -g node-red`) and create a simple flow that reads from an MQTT topic and displays the data in a debug node.

#### Assessment idea
Ask: "You are building a commercial IoT product that will ship 10,000 units. Each unit sends data every minute. Which cloud platform would you choose, and why?" Answer: AWS IoT Core or Azure IoT Hub, because they provide enterprise-grade scalability, device management, security, and integration with analytics and storage services. Free platforms like ThingSpeak would not handle the volume and lack advanced device management features. Then ask: "What is the advantage of a self-hosted Mosquitto + InfluxDB + Grafana stack over a commercial cloud platform?" Answer: Full data privacy and control, no ongoing subscription costs, and no dependency on external services. The trade-off is that you are responsible for maintenance, security, and scalability.

#### AI generation note
Create a 10-minute lesson with multiple platform demos. Show the ThingSpeak dashboard with live charts updating. Show the IFTTT applet creation interface with IoT triggers. Show Node-RED with a drag-and-drop flow connecting an MQTT node to a debug node. Show Grafana with a beautiful temperature graph. Show the AWS IoT console with a device registry. Use a decision matrix graphic for platform selection. Animate the data flow from sensor → Raspberry Pi → cloud → dashboard → alert. Include cost comparison graphics for free vs. paid tiers.

---

## Module 6: IoT Protocols and Cloud Integration

> **Goal:** Deepen understanding of IoT communication protocols and integrate a complete sensor-to-cloud data pipeline.

---

### Chapter 6.1 — Advanced IoT Protocols: CoAP, WebSockets, and Bluetooth Low Energy

#### Learning objectives
- Explain the CoAP protocol and its use in constrained IoT devices.
- Use WebSockets for real-time bidirectional communication between devices and web clients.
- Describe Bluetooth Low Energy (BLE) and its role in wearable and proximity IoT.
- Compare CoAP, MQTT, WebSockets, and BLE for different IoT scenarios.

#### Detailed lesson content

While MQTT and HTTP are the most common IoT protocols, several other protocols are important for specific use cases. Understanding when to use each protocol is a key skill for IoT architects.

**CoAP (Constrained Application Protocol):**
CoAP is a lightweight protocol designed specifically for constrained devices (low-power microcontrollers, small memory, intermittent connectivity). It is standardized by the IETF as RFC 7252 and is often described as "HTTP for IoT." CoAP uses UDP instead of TCP, which reduces overhead and power consumption. It supports request-response (like HTTP GET/POST) and publish-subscribe (like MQTT observe) patterns. CoAP messages are compact binary packets, making them much smaller than HTTP text headers.

A CoAP GET request to read a sensor:
```
CON [MID=1234] GET /sensors/temperature
ACK [MID=1234] 2.05 Content [temperature: 25.5]
```

CoAP uses a four-byte fixed header, optional tokens, and options (similar to HTTP headers but binary). It supports **DTLS** (Datagram TLS) for security. CoAP is used in constrained environments like smart home devices (ZigBee IP, Thread), industrial sensors, and low-power wide-area networks (LPWAN).

Python CoAP client using the `aiocoap` library:
```python
import asyncio
from aiocoap import Context, Message

async def main():
    protocol = await Context.create_client_context()
    request = Message(code=GET, uri='coap://192.168.1.50/sensors/temperature')
    response = await protocol.request(request).response
    print(f"Result: {response.payload.decode()}")

asyncio.run(main())
```

**WebSockets:**
WebSockets provide a full-duplex, persistent connection between a client and a server over a single TCP connection. Unlike HTTP, which is request-response, WebSockets allow both sides to send messages at any time without polling. This makes WebSockets ideal for real-time dashboards, live control interfaces, and bidirectional device communication.

A WebSocket server on the Raspberry Pi using Flask-SocketIO:
```python
from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('sensor_data')
def handle_sensor_data(json_data):
    print(f"Received: {json_data}")
    emit('update', {'status': 'received'}, broadcast=True)

@socketio.on('connect')
def handle_connect():
    print("Client connected")

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
```

A WebSocket client in JavaScript (for a web dashboard):
```javascript
const socket = io('http://raspberrypi.local:5000');
socket.on('update', (data) => {
    console.log('Update:', data);
});
socket.emit('sensor_data', {temperature: 25.5, humidity: 60});
```

WebSockets are used when you need real-time interaction: a web page that updates instantly when a sensor reading changes, or a mobile app that controls a device with immediate feedback.

**Bluetooth Low Energy (BLE):**
BLE is a wireless protocol designed for low-power, short-range communication. It is ideal for wearables, beacons, health monitors, and proximity sensors. BLE devices can run for months or years on a coin-cell battery. A BLE device operates in two modes:
- **Peripheral:** The device advertises its presence and accepts connections from a central device (e.g., a smartphone or Raspberry Pi).
- **Central:** The device scans for peripherals and initiates connections.

The Raspberry Pi can act as a BLE central to read data from BLE sensors (like heart rate monitors, temperature beacons, or fitness trackers). Python's `bluepy` library provides BLE support:

```python
from bluepy.btle import Peripheral, UUID

device = Peripheral("aa:bb:cc:dd:ee:ff")
service = device.getServiceByUUID(UUID("0000180a-0000-1000-8000-00805f9b34fb"))
char = service.getCharacteristics()[0]
value = char.read()
print(f"Sensor value: {value}")
device.disconnect()
```

BLE uses **GATT (Generic Attribute Profile)** for data exchange. Data is organized into **services** (collections of related characteristics), **characteristics** (individual data values), and **descriptors** (metadata about characteristics). For example, a heart rate monitor has a "Heart Rate" service with a "Heart Rate Measurement" characteristic.

**Protocol Comparison:**

| Protocol | Transport | Model | Best For | Overhead |
|----------|-----------|-------|----------|----------|
| HTTP | TCP | Request-Response | Web APIs, config, firmware | High |
| MQTT | TCP | Publish-Subscribe | Sensor data, real-time updates | Low |
| CoAP | UDP | Request-Response + Observe | Constrained devices, LPWAN | Very Low |
| WebSockets | TCP | Bidirectional persistent | Live dashboards, control | Medium |
| BLE | RF (2.4 GHz) | GATT | Wearables, beacons, proximity | Very Low |

#### Key concepts
- CoAP: lightweight, UDP-based, HTTP-like for constrained devices
- WebSockets: full-duplex, persistent, real-time bidirectional
- Flask-SocketIO for WebSocket server
- BLE: peripheral vs. central, GATT services and characteristics
- `bluepy` library for BLE on Raspberry Pi
- `aiocoap` library for CoAP
- Protocol selection based on constraints and use case

#### Hands-on activity
Install `flask-socketio` on the Raspberry Pi and create a WebSocket server that broadcasts sensor readings to all connected clients. Write a simple HTML page that connects to the WebSocket and displays the readings in real-time. Open the page on multiple devices (phone, laptop, tablet) and verify that all clients receive the same updates simultaneously. Then, if you have a BLE sensor (or a smartphone app that simulates a BLE heart rate monitor), use `bluepy` on the Raspberry Pi to scan for BLE devices, connect to the sensor, and read a characteristic value.

#### Assessment idea
Ask: "You are designing a wearable fitness tracker that must run for 6 months on a coin-cell battery and send data to a smartphone. Which protocol would you choose?" Answer: Bluetooth Low Energy (BLE), because it is specifically designed for ultra-low-power, short-range communication between wearables and phones. Then ask: "You are building a real-time stock trading dashboard that must update instantly when market data changes. Would you choose HTTP polling, MQTT, or WebSockets?" Answer: WebSockets, because they provide a persistent, full-duplex connection that allows the server to push updates to the client instantly without polling overhead.

#### AI generation note
Create a 10-minute animated comparison. Show each protocol as a different communication channel: HTTP as a postal service (one letter at a time), MQTT as a radio broadcast (publisher speaks, subscribers listen), CoAP as a text message (short, binary, UDP), WebSockets as a telephone call (persistent, two-way), and BLE as a whisper (short range, low power). Show the Flask-SocketIO server with multiple clients receiving broadcasts. Show a BLE GATT diagram with services, characteristics, and descriptors. Include a protocol selection flowchart.

---

### Chapter 6.2 — Building a Complete Sensor-to-Cloud Pipeline

#### Learning objectives
- Design an end-to-end data pipeline from sensor to cloud.
- Implement each stage of the pipeline: sensing, edge processing, transmission, cloud storage, and visualization.
- Handle errors, retries, and data loss at each stage.
- Test and validate the complete pipeline with real or simulated data.

#### Detailed lesson content

A complete IoT system is not just a sensor and a cloud account. It is a pipeline — a sequence of stages that transforms raw physical data into actionable insights. Each stage has its own challenges, failure modes, and optimization opportunities. This chapter teaches you to design, build, and validate a complete sensor-to-cloud pipeline.

The pipeline stages are:
1. **Sensing:** The sensor converts a physical quantity into an electrical signal. The microcontroller (Arduino) reads the signal via ADC or digital input. Challenges: noise, calibration drift, sensor failure, power consumption.
2. **Edge Processing:** The microcontroller or edge gateway (Raspberry Pi) processes the raw data. This includes filtering, averaging, unit conversion, threshold detection, and compression. Challenges: limited memory, processing power, real-time constraints.
3. **Transmission:** The processed data is sent over a network to the cloud or gateway. Challenges: network latency, packet loss, bandwidth limits, intermittent connectivity, power consumption.
4. **Cloud Ingestion:** The cloud platform receives the data, validates it, and routes it to storage or analytics. Challenges: rate limiting, authentication, API changes, scaling.
5. **Storage:** The data is stored in a database (time-series database, SQL database, or data lake). Challenges: data volume, retention policies, query performance, backup.
6. **Visualization and Analytics:** The data is displayed in dashboards, analyzed for trends, and used to trigger alerts or actions. Challenges: real-time requirements, user experience, alert fatigue.

**Designing the Pipeline:**
Let's design a practical example: a **smart garden monitoring system**.
- **Sensor:** Soil moisture sensor (analog) + DHT22 (digital) + light sensor (analog).
- **Edge Device:** Arduino reads all three sensors every 10 seconds, applies a 5-sample moving average, and sends the averaged data to the Raspberry Pi via serial every 30 seconds.
- **Gateway:** Raspberry Pi receives the data, parses it, adds a timestamp, and stores it in SQLite. Every 2 minutes, it uploads the unsent records to ThingSpeak via HTTP. If the upload fails, it retries on the next cycle.
- **Cloud:** ThingSpeak stores the data and provides charts. An IFTTT applet sends an email when soil moisture drops below a threshold (indicating the plant needs water).
- **Dashboard:** A local Flask web server on the Raspberry Pi displays the current readings and a 24-hour trend graph.

**Arduino Code (Edge):**
```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  long soilSum = 0, lightSum = 0;
  float tempSum = 0, humSum = 0;

  for (int i = 0; i < 5; i++) {
    soilSum += analogRead(A0);
    lightSum += analogRead(A1);
    // DHT22 readings (simplified)
    tempSum += 25.0;
    humSum += 60.0;
    delay(2000);
  }

  int soilAvg = soilSum / 5;
  int lightAvg = lightSum / 5;
  float tempAvg = tempSum / 5;
  float humAvg = humSum / 5;

  Serial.print("SOIL:"); Serial.print(soilAvg);
  Serial.print(",LIGHT:"); Serial.print(lightAvg);
  Serial.print(",TEMP:"); Serial.print(tempAvg);
  Serial.print(",HUM:"); Serial.println(humAvg);
}
```

**Raspberry Pi Code (Gateway):**
```python
import serial
import sqlite3
import requests
import time
from datetime import datetime

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
conn = sqlite3.connect('garden.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS readings
             (timestamp TEXT, soil INT, light INT, temp REAL, hum REAL, sent INT DEFAULT 0)''')
conn.commit()

THINGSPEAK_KEY = "YOUR_KEY"

def upload_to_cloud():
    c.execute("SELECT rowid, timestamp, soil, light, temp, hum FROM readings WHERE sent = 0 LIMIT 10")
    rows = c.fetchall()
    for row in rows:
        rowid, ts, soil, light, temp, hum = row
        url = f"https://api.thingspeak.com/update?api_key={THINGSPEAK_KEY}&field1={soil}&field2={light}&field3={temp}&field4={hum}"
        try:
            r = requests.get(url, timeout=10)
            if r.status_code == 200 and int(r.text) > 0:
                c.execute("UPDATE readings SET sent = 1 WHERE rowid = ?", (rowid,))
                conn.commit()
                print(f"Uploaded: {ts}")
        except requests.exceptions.RequestException as e:
            print(f"Upload failed: {e}")
            return  # Stop retrying until next cycle

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        if line.startswith("SOIL:"):
            parts = line.split(",")
            soil = int(parts[0].split(":")[1])
            light = int(parts[1].split(":")[1])
            temp = float(parts[2].split(":")[1])
            hum = float(parts[3].split(":")[1])
            ts = datetime.now().isoformat()
            c.execute("INSERT INTO readings (timestamp, soil, light, temp, hum) VALUES (?, ?, ?, ?, ?)",
                      (ts, soil, light, temp, hum))
            conn.commit()
            print(f"Stored: {ts}")

    upload_to_cloud()
    time.sleep(10)
```

**Error Handling:**
At each stage, errors can occur:
- Sensor failure: The Arduino detects an out-of-range reading and sends an error code instead of a value. The Raspberry Pi logs the error and alerts the user.
- Serial disconnect: The Raspberry Pi detects that the serial port is missing and attempts to reconnect. Data is buffered in the Arduino's memory until the connection is restored.
- Network failure: The Raspberry Pi marks records as unsent and retries every 2 minutes. If the network is down for hours, the SQLite database grows but no data is lost.
- Cloud API failure: The Raspberry Pi checks the HTTP status code and response body. If ThingSpeak returns a rate-limit error (status 429), it backs off and retries later.

**Validation:**
To validate the pipeline, you should:
1. Verify sensor accuracy by comparing readings to a known reference (e.g., a commercial thermometer).
2. Verify data integrity by checking that the number of records in SQLite matches the number of sensor readings.
3. Verify cloud delivery by comparing the SQLite records to the ThingSpeak channel entries.
4. Verify end-to-end latency by measuring the time from sensor reading to cloud dashboard update.
5. Test fault tolerance by disconnecting the serial cable, Wi-Fi, and power at different stages and verifying recovery.

#### Key concepts
- End-to-end IoT pipeline: sensing, edge processing, transmission, cloud ingestion, storage, visualization
- Data flow design and buffering
- Error handling at each stage
- Data integrity verification
- Latency measurement and optimization
- Fault tolerance testing
- SQLite buffering, HTTP retry, serial reconnection

#### Hands-on activity
Build the complete smart garden monitoring pipeline described above. Use real sensors if available, or simulate the data if not. Verify each stage: the Arduino sends correctly formatted data, the Raspberry Pi parses and stores it, the SQLite database accumulates records, the ThingSpeak channel updates, and the Flask dashboard displays the data. Perform fault tolerance tests: (1) disconnect the serial cable for 5 minutes and verify that data resumes when reconnected, (2) disconnect the Wi-Fi for 10 minutes and verify that buffered data is uploaded when reconnected, (3) intentionally send a malformed message and verify that the parser handles it gracefully. Document the latency from sensor to dashboard for each stage.

#### Assessment idea
Ask: "In the pipeline described above, what happens if the Raspberry Pi loses power for 30 minutes while the Arduino continues to run?" Answer: The Arduino continues to send data over serial, but the Raspberry Pi is not receiving it. When the Pi restarts, it will miss the data that was sent during the outage. To prevent this, the Arduino could store data in its own EEPROM or an SD card module and retransmit it when the Pi comes back online. Alternatively, the Pi could be powered by a UPS. Then ask: "What is the advantage of averaging 5 samples on the Arduino before sending, rather than sending every sample?" Answer: Averaging reduces noise and reduces the data transmission rate, saving bandwidth and power.

#### AI generation note
Create a 12-minute lesson with an animated pipeline diagram. Show data flowing from sensor → Arduino → serial → Raspberry Pi → SQLite → HTTP → ThingSpeak → dashboard. Show each stage with a processing box and a latency timer. Animate error handling: a serial disconnect with a reconnect arrow, a network failure with a retry counter, a malformed message with a warning icon. Show the Flask dashboard with a real-time graph. Show fault tolerance testing with a power-off icon and recovery. Include a latency breakdown table showing the time for each stage.

---

## Module 7: IoT Security, System Design, and Edge Computing

> **Goal:** Understand the security challenges of IoT, apply security best practices, and design robust IoT systems using edge computing principles.

---

### Chapter 7.1 — IoT Security: Threats, Encryption, and Best Practices

#### Learning objectives
- Identify the major security threats to IoT devices and systems.
- Understand encryption, authentication, and authorization in the IoT context.
- Apply security best practices: strong passwords, TLS, certificate pinning, and firmware updates.
- Explain why IoT security is harder than traditional IT security and what makes it critical.

#### Detailed lesson content

IoT security is one of the most important and most neglected aspects of IoT development. Every connected device is a potential entry point for attackers, and the consequences of a compromised IoT device can be severe: a hacked smart lock lets burglars into your home, a compromised medical device endangers patients, and a hijacked industrial sensor can cause factory shutdowns. The 2016 Mirai botnet, which infected hundreds of thousands of IoT devices and used them to launch massive DDoS attacks, demonstrated how dangerous insecure IoT can be.

**Why IoT Security Is Hard:**
1. **Constrained Resources:** IoT devices have limited memory, processing power, and battery life. Running full encryption and authentication stacks is difficult on a microcontroller with 2 KB of RAM.
2. **Physical Accessibility:** IoT devices are often deployed in public or remote locations where attackers can physically access them, extract firmware, or tamper with hardware.
3. **Long Lifespans:** IoT devices may operate for 10–20 years, but security vulnerabilities are discovered constantly. A device that is secure today may be vulnerable tomorrow.
4. **Heterogeneity:** IoT systems involve many different devices, protocols, and vendors, making unified security management difficult.
5. **Lack of User Interface:** Many IoT devices have no screen or keyboard, making it hard for users to configure security settings or notice warnings.

**Major IoT Threats:**
- **Eavesdropping:** An attacker intercepts unencrypted data transmitted between the device and the cloud. For example, eavesdropping on an unencrypted HTTP connection to steal sensor data or API keys.
- **Man-in-the-Middle (MitM):** An attacker intercepts and possibly alters the communication between two parties. For example, an attacker on the same Wi-Fi network intercepts MQTT messages and sends fake commands to the device.
- **Firmware Extraction:** An attacker physically extracts the firmware from a device by reading the flash memory chip. The firmware may contain hardcoded passwords, API keys, or cryptographic secrets.
- **Denial of Service (DoS):** An attacker floods the device or network with traffic, causing it to become unresponsive. A compromised IoT device can also be used to attack other systems (as in the Mirai botnet).
- **Replay Attacks:** An attacker records a valid message (e.g., "unlock door") and replays it later to gain unauthorized access.
- **Credential Stuffing:** Attackers use lists of stolen usernames and passwords from other breaches to try to log in to IoT cloud accounts.

**Security Principles:**
- **Confidentiality:** Ensuring that data is readable only by authorized parties. Achieved through **encryption**.
- **Integrity:** Ensuring that data is not altered in transit or at rest. Achieved through **hashing** and **message authentication codes (MACs)**.
- **Availability:** Ensuring that the system is operational when needed. Achieved through **redundancy**, **fault tolerance**, and **DDoS protection**.
- **Authentication:** Verifying the identity of a device or user. Achieved through **passwords**, **certificates**, or **tokens**.
- **Authorization:** Determining what an authenticated device or user is allowed to do. Achieved through **access control lists** and **role-based access control**.

**Encryption for IoT:**
- **TLS (Transport Layer Security):** Encrypts data in transit. TLS 1.2 or 1.3 should be used for all HTTP, MQTT, and WebSocket connections. On constrained devices, lightweight TLS implementations like **mbedTLS** or **wolfSSL** are used.
- **AES (Advanced Encryption Standard):** Encrypts data at rest. AES-128 or AES-256 is the standard for encrypting stored data.
- **Public Key Cryptography:** Uses a pair of keys (public and private) for authentication and key exchange. X.509 certificates are used in AWS IoT and Azure IoT for device authentication.

**Best Practices for IoT Security:**
1. **Use strong, unique passwords:** Never use default passwords. Generate unique passwords for each device and store them securely.
2. **Use TLS for all communication:** Never send data over unencrypted HTTP or MQTT. Always use HTTPS, MQTTS, or WebSocket Secure (WSS).
3. **Implement certificate pinning:** For high-security devices, hardcode the server's certificate or public key to prevent MitM attacks with fake certificates.
4. **Secure firmware updates:** Devices must be able to receive security patches. Use signed firmware updates (cryptographically signed by the manufacturer) to prevent attackers from installing malicious firmware.
5. **Minimize attack surface:** Disable unnecessary services, close unused ports, and remove debug interfaces (like JTAG) in production devices.
6. **Use a hardware security module (HSM):** For critical devices, store cryptographic keys in a tamper-resistant hardware chip rather than in flash memory.
7. **Implement intrusion detection:** Monitor device behavior for anomalies (e.g., unexpected network traffic, failed login attempts) and alert administrators.
8. **Secure the supply chain:** Verify that hardware components are genuine and have not been tampered with during manufacturing.

On the Raspberry Pi, enabling TLS for the Flask web server:
```python
from flask import Flask
import ssl

app = Flask(__name__)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('server.crt', 'server.key')

@app.route('/')
def hello():
    return "Secure IoT Server"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=443, ssl_context=context)
```

For MQTT with TLS on the Raspberry Pi:
```python
import paho.mqtt.client as mqtt

client = mqtt.Client()
client.tls_set(ca_certs="ca.crt", certfile="client.crt", keyfile="client.key")
client.connect("broker.example.com", 8883)
```

#### Key concepts
- IoT security threats: eavesdropping, MitM, firmware extraction, DoS, replay attacks
- Security principles: confidentiality, integrity, availability, authentication, authorization
- Encryption: TLS, AES, public key cryptography
- X.509 certificates and certificate pinning
- Signed firmware updates
- Attack surface minimization
- Hardware security modules (HSM)
- TLS configuration for Flask and MQTT

#### Hands-on activity
Configure your Flask web server on the Raspberry Pi to use HTTPS with a self-signed certificate. Generate the certificate using OpenSSL: `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes`. Modify the Flask app to use the certificate and test it by accessing `https://raspberrypi.local:5000` from a browser. Note the browser security warning (expected for self-signed certs) and explain why it appears. Then configure your MQTT client to connect to a public test broker (test.mosquitto.org) using TLS on port 8883. Verify the connection using `mosquitto_pub` with the `--cafile` option.

#### Assessment idea
Ask: "Why is the Mirai botnet attack (2016) a significant event in IoT security history?" Answer: Mirai infected hundreds of thousands of IoT devices (cameras, routers) by guessing default passwords, then used them to launch a massive DDoS attack that took down major websites. It demonstrated that insecure IoT devices can be weaponized and used to attack the broader internet. Then ask: "What is the difference between authentication and authorization in IoT?" Answer: Authentication verifies who you are (e.g., a valid device certificate). Authorization determines what you are allowed to do (e.g., read sensor data but not send control commands).

#### AI generation note
Create a 10-minute animated security lesson. Show an IoT device sending unencrypted data, with an attacker intercepting it (eavesdropping). Show TLS encryption as a locked envelope that cannot be opened without the key. Show a certificate as a digital ID card that proves the server's identity. Show the Mirai botnet as a network of infected devices attacking a target. Show a firmware update being signed with a cryptographic key. Show a hardware security module as a vault inside the device. Include a security checklist graphic with checkmarks for each best practice.

---

### Chapter 7.2 — Edge Computing and IoT System Design

#### Learning objectives
- Explain the concept of edge computing and why it is essential for IoT.
- Design an IoT system using a structured methodology: requirements, architecture, components, and testing.
- Apply the principles of modularity, scalability, and maintainability to IoT design.
- Evaluate the trade-offs between cloud-only, edge-only, and hybrid IoT architectures.

#### Detailed lesson content

**Edge computing** is the practice of processing data near the source (at the edge of the network) rather than sending all data to a centralized cloud. In IoT, edge computing means running analytics, filtering, and decision-making on the gateway device (like a Raspberry Pi) or even on the sensor device itself (like an ESP32 or a smart camera) rather than in the cloud.

Why edge computing matters for IoT:
1. **Latency:** Some applications require immediate response. A self-driving car cannot wait 200 milliseconds for a cloud server to decide whether to brake. An industrial robot cannot wait for cloud approval before stopping if a human enters its workspace. Edge computing reduces latency from hundreds of milliseconds to single-digit milliseconds.
2. **Bandwidth:** Sending all raw sensor data to the cloud consumes enormous bandwidth. A factory with 1,000 sensors sending data every second generates 86.4 million data points per day. Edge computing filters and aggregates data locally, sending only summaries, exceptions, or compressed data to the cloud.
3. **Privacy:** Some data is too sensitive to leave the premises. Medical records, financial transactions, and industrial secrets should be processed locally. Edge computing keeps sensitive data on-site.
4. **Reliability:** If the internet connection fails, a cloud-dependent system stops working. An edge computing system can continue operating autonomously, making local decisions and storing data for later synchronization.
5. **Cost:** Cloud storage and data transfer cost money. Edge computing reduces cloud costs by reducing the volume of data sent.

Edge computing is implemented in several ways:
- **Sensor-level edge:** The microcontroller itself performs simple processing (averaging, threshold detection, anomaly detection) before sending data.
- **Gateway-level edge:** The Raspberry Pi or dedicated edge gateway runs complex analytics, machine learning inference, and data aggregation.
- **Regional edge:** A small data center (micro data center) located near the IoT deployment handles heavy processing for a neighborhood, factory, or campus.

**IoT System Design Methodology:**
Building a successful IoT system requires more than just soldering and coding. It requires a structured design process:

1. **Requirements Analysis:** What problem are you solving? Who are the users? What are the constraints (budget, power, size, environment)? What is the acceptable latency? What data must be collected, and how often?

2. **Architecture Design:** Choose the architecture (device, edge, network, cloud, application). Select the hardware platforms (Arduino, Raspberry Pi, ESP32). Choose the communication protocols (serial, I2C, Wi-Fi, MQTT, HTTP). Design the data flow.

3. **Component Selection:** Choose sensors, actuators, communication modules, and power supplies based on the requirements. Create a bill of materials (BOM) with costs.

4. **Prototyping:** Build a proof-of-concept on a breadboard. Write the firmware and software. Test each component individually before integrating.

5. **Integration and Testing:** Connect all components. Test the complete system under normal and fault conditions. Measure latency, power consumption, and data accuracy.

6. **Deployment:** Enclose the device in a protective case. Install it in the target environment. Configure networking and cloud services. Document the installation and operation procedures.

7. **Maintenance and Updates:** Monitor the system for failures. Apply security patches and firmware updates. Collect user feedback and iterate on the design.

**Modularity and Scalability:**
A well-designed IoT system is modular. Each component (sensor node, gateway, cloud service, dashboard) has a well-defined interface and can be replaced or upgraded independently. For example, if you switch from ThingSpeak to AWS IoT, the sensor node and gateway should not need to change because they communicate through a standard protocol (MQTT). Scalability means the system can handle growth: adding more sensors, more users, or more data without redesigning the architecture. A scalable IoT system uses standardized protocols, distributed databases, and load-balanced cloud services.

**Cloud-Only vs. Edge-Only vs. Hybrid:**
- **Cloud-Only:** All processing happens in the cloud. Simple to implement but high latency, high bandwidth, and dependent on internet connectivity. Best for non-time-sensitive analytics.
- **Edge-Only:** All processing happens on the local devices. No cloud dependency, very low latency, but limited processing power and no remote access. Best for isolated or security-critical systems.
- **Hybrid:** Processing is split between edge and cloud. Time-critical decisions are made at the edge; long-term analytics and remote access are handled by the cloud. This is the most common and flexible architecture.

#### Key concepts
- Edge computing definition and benefits: latency, bandwidth, privacy, reliability, cost
- Edge computing levels: sensor, gateway, regional
- IoT system design methodology: requirements, architecture, components, prototyping, integration, deployment, maintenance
- Modularity and scalability principles
- Cloud-only vs. edge-only vs. hybrid architectures
- Bill of Materials (BOM) and cost estimation
- Interface design and protocol standardization

#### Hands-on activity
Design an IoT system for a specific scenario using the methodology above. Choose one of these scenarios: (1) a smart parking lot that detects available spaces and guides drivers, (2) a remote weather station for a mountain cabin with no power grid, (3) a baby monitor that alerts parents if the room temperature exceeds a safe range. For your chosen scenario, write a one-page design document that includes: (1) requirements analysis, (2) architecture diagram (device, edge, network, cloud, application), (3) component list with BOM and estimated cost, (4) data flow description, (5) security considerations, and (6) a plan for testing and deployment. Present your design to a peer or in a written report.

#### Assessment idea
Ask: "A factory robot must stop within 10 milliseconds if a safety sensor detects a human nearby. Should the decision to stop be made in the cloud, at the edge gateway, or on the sensor microcontroller?" Answer: On the sensor microcontroller or a dedicated safety controller at the edge. Cloud latency (50–200 ms) is far too slow for a safety-critical decision. The edge gateway might be acceptable but adds unnecessary latency. The microcontroller can respond in microseconds. Then ask: "Why is a hybrid architecture (edge + cloud) generally preferred over a pure cloud or pure edge architecture for most IoT systems?" Answer: Hybrid provides the best of both worlds: real-time processing and local autonomy at the edge, plus centralized analytics, remote access, and long-term storage in the cloud.

#### AI generation note
Create a 10-minute lesson with an animated system design process. Show the requirements phase with sticky notes, the architecture phase with a block diagram, the component selection with a shopping cart, the prototyping with a breadboard, and the deployment with a device in a case. Show the three architectures (cloud-only, edge-only, hybrid) as side-by-side diagrams with latency arrows. Show a modular system with interchangeable components connected by standard interfaces. Include a design document template with labeled sections.

---

## Module 8: Capstone Project and Final Integration

> **Goal:** Apply all learned skills to design, build, and test a complete IoT system from specification to demonstration.

---

### Chapter 8.1 — Capstone Project: Building a Complete IoT System

#### Learning objectives
- Design a complete IoT system from a project specification.
- Build the hardware prototype using Arduino, sensors, actuators, and Raspberry Pi.
- Write the firmware (Arduino C) and software (Python) for the complete system.
- Integrate the system with a cloud platform and a local dashboard.

#### Detailed lesson content

The capstone project is the culmination of your IoT journey. You will design, build, and test a complete IoT system that integrates everything you have learned: Arduino sensor reading, Raspberry Pi data processing, networking, cloud connectivity, and a user interface. The recommended project is a **Smart Home Environmental Monitor and Controller** that monitors temperature, humidity, and light levels, controls a fan and a lamp, and provides a web dashboard for remote monitoring and control.

**Project Specification:**

1. **Hardware:**
   - Arduino Uno with DHT22 (temperature/humidity), LDR (light), and a relay module (for lamp control).
   - Raspberry Pi 4 with Wi-Fi connection.
   - A small DC fan connected to the Raspberry Pi via a transistor or motor driver.
   - An LED lamp connected to the Arduino relay.

2. **Sensing:**
   - The Arduino reads the DHT22 and LDR every 5 seconds.
   - It computes a 3-sample moving average for temperature and humidity.
   - It sends the averaged data to the Raspberry Pi via USB serial in JSON format: `{"temp":25.5,"hum":60.2,"light":450}`.

3. **Edge Processing:**
   - The Raspberry Pi parses the JSON, adds a timestamp, and stores it in SQLite.
   - The Pi compares the temperature to a threshold (user-configurable via the web dashboard). If the temperature exceeds the threshold, the Pi turns on the DC fan via GPIO.
   - The Pi compares the light level to a threshold. If light is below the threshold, the Pi sends a command to the Arduino to turn on the relay (lamp on).

4. **Cloud Integration:**
   - The Raspberry Pi sends the sensor data to ThingSpeak every 2 minutes.
   - If the internet is down, the Pi buffers the data in SQLite and retries later.
   - ThingSpeak provides real-time charts and an email alert if temperature exceeds 35°C.

5. **Web Dashboard:**
   - The Raspberry Pi runs a Flask web server with a dashboard showing:
     - Current temperature, humidity, and light level.
     - A 24-hour trend chart (using Chart.js).
     - Controls to set the temperature and light thresholds.
     - Buttons to manually turn the fan and lamp on/off.
   - The dashboard is accessible from any device on the local network.

6. **Security:**
   - The Flask server uses HTTPS with a self-signed certificate.
   - The MQTT/HTTP communication uses TLS.
   - The Raspberry Pi has a strong password and SSH key authentication.

**Design Process:**
1. Create the hardware block diagram and wiring plan.
2. Build the Arduino circuit on a breadboard and write the firmware.
3. Test the Arduino standalone: verify sensor readings and serial output.
4. Set up the Raspberry Pi, install software, and write the Python gateway script.
5. Test the Arduino-to-Pi serial communication.
6. Implement the SQLite database and data logging.
7. Implement the cloud upload with retry logic.
8. Build the Flask web server and dashboard.
9. Integrate all components and test the complete system.
10. Perform fault tolerance tests: disconnect serial, disconnect Wi-Fi, send malformed data.
11. Document the system with a report, code listings, and a demo video.

**Alternative Capstone Projects:**
- **Smart Plant Watering System:** Arduino reads soil moisture and controls a water pump. Raspberry Pi schedules watering, sends alerts, and displays plant health data.
- **Home Energy Monitor:** Arduino reads current sensors (CT clamps) on the mains. Raspberry Pi computes power usage, stores historical data, and displays a real-time power chart.
- **Baby Monitor:** Raspberry Pi Camera Module streams video. Arduino reads room temperature and triggers an alert if it exceeds a safe range. Raspberry Pi sends notifications via MQTT.
- **Weather Station:** Arduino reads temperature, humidity, pressure, and wind speed. Raspberry Pi aggregates data, uploads to Weather Underground, and displays a local dashboard.

#### Key concepts
- Complete IoT system design and implementation
- Hardware integration: Arduino + Raspberry Pi + sensors + actuators
- Firmware and software integration
- Cloud integration with buffering and retry
- Web dashboard with real-time data and remote control
- Security implementation
- System documentation and testing
- Fault tolerance verification

#### Hands-on activity
Complete the capstone project over two weeks. Work through each stage of the design process. Start with a working Arduino sensor node, then add the Raspberry Pi gateway, then add the cloud upload, then build the dashboard. Test each stage before adding the next. When the system is complete, create a 3-minute demonstration video showing the dashboard, the sensors responding to changes, and the actuators activating. Write a project report with the specification, architecture diagram, code listings, test results, and a discussion of challenges and solutions.

#### Assessment idea
The capstone project is graded using a rubric that includes: (1) **Hardware** — is the circuit built correctly and safely? (2) **Firmware** — does the Arduino code read sensors and communicate correctly? (3) **Software** — does the Raspberry Pi process data, store it, and upload it? (4) **Integration** — do the Arduino and Raspberry Pi work together seamlessly? (5) **Cloud** — is data visible in the cloud platform with real-time charts? (6) **Dashboard** — is the web dashboard functional, responsive, and user-friendly? (7) **Security** — are basic security measures implemented? (8) **Documentation** — is the report clear, complete, and professional? (9) **Testing** — are fault tolerance tests documented? (10) **Innovation** — does the project include any creative extensions?

#### AI generation note
Create a 15-minute capstone project walkthrough video. Show the hardware setup with labeled components. Show the Arduino IDE with the sensor reading code. Show the Raspberry Pi terminal with the Python gateway running. Show the SQLite database with rows of sensor data. Show the ThingSpeak dashboard with updating charts. Show the Flask web dashboard with a Chart.js graph and control buttons. Show a user clicking "Turn Lamp On" and the relay clicking. Show fault tolerance testing: Wi-Fi disconnected, data buffered, then uploaded. End with a grading rubric and a checklist of deliverables.

---

### Chapter 8.2 — Final Examination and Answer Key

### Section A: Multiple Choice (10 questions, 2 points each)

1. What is the primary difference between the traditional internet and the Internet of Things?
   - A) The IoT uses faster networks.
   - B) The IoT connects physical objects to each other and the cloud. ✓
   - C) The IoT uses only wireless connections.
   - D) The IoT is limited to smart homes.

2. In an IoT architecture, what is the role of the edge/gateway layer?
   - A) It stores all data permanently.
   - B) It bridges the device layer to the network and performs local processing. ✓
   - C) It is the same as the cloud layer.
   - D) It only provides power to devices.

3. Which Arduino function runs continuously after the board starts?
   - A) `setup()`
   - B) `loop()` ✓
   - C) `main()`
   - D) `begin()`

4. What is the purpose of the `Serial.begin(9600)` function in an Arduino sketch?
   - A) It starts a timer.
   - B) It initializes serial communication at 9600 baud. ✓
   - C) It sets the clock speed.
   - D) It configures a PWM pin.

5. Which protocol is best for sending frequent, small sensor updates from a battery-powered device to a cloud platform?
   - A) HTTP with polling
   - B) MQTT with QoS 0 ✓
   - C) FTP
   - D) SMTP

6. What is the main advantage of using SQLite for IoT data logging on a Raspberry Pi?
   - A) It requires a separate server process.
   - B) It is lightweight, serverless, and provides SQL querying. ✓
   - C) It can only store text files.
   - D) It is faster than InfluxDB for time-series data.

7. Why should API keys be stored in environment variables rather than hardcoded in source code?
   - A) Environment variables are faster.
   - B) They keep secrets out of version control and source code. ✓
   - C) They are easier to read.
   - D) They are required by the Python interpreter.

8. What is the primary security risk of sending IoT data over unencrypted HTTP?
   - A) The data is too large.
   - B) An attacker can intercept and read the data. ✓
   - C) The server will crash.
   - D) The device will overheat.

9. What is the purpose of a two-flip-flop synchronizer in digital design?
   - A) To increase clock speed.
   - B) To reduce metastability when crossing clock domains. ✓
   - C) To store data in memory.
   - D) To generate a PWM signal.

10. In a hybrid IoT architecture, where are time-critical decisions typically made?
    - A) In the cloud data center.
    - B) At the edge or on the device itself. ✓
    - C) On the user's smartphone.
    - D) In the DNS server.

### Section B: Short Answer (5 questions, 4 points each)

1. **Explain the difference between a microcontroller and a single-board computer, and give an example of each in IoT.**
   Answer: A microcontroller is a small, low-power processor with integrated memory and peripherals, designed for simple, repetitive control tasks. Example: Arduino Uno (ATmega328P). A single-board computer is a complete computer with a powerful processor, operating system, and extensive I/O, capable of running complex software. Example: Raspberry Pi 4. In IoT, microcontrollers handle sensor reading and actuator control, while SBCs handle data processing, networking, and cloud connectivity.

2. **What is MQTT, and why is it preferred over HTTP for many IoT applications?**
   Answer: MQTT is a lightweight, publish-subscribe messaging protocol designed for IoT. It is preferred over HTTP because it has lower overhead, supports persistent connections, enables real-time push updates without polling, and has QoS levels for reliable delivery. MQTT is also more efficient for battery-powered devices because it minimizes the data transmitted and the connection setup time.

3. **Describe the five layers of an IoT architecture and the function of each.**
   Answer: (1) Device layer: sensors and actuators that interact with the physical world. (2) Edge/gateway layer: collects data from devices, performs local processing, and bridges to the network. (3) Network layer: provides communication infrastructure (Wi-Fi, cellular, LPWAN). (4) Cloud layer: stores, processes, and analyzes data at scale. (5) Application layer: user interfaces (mobile apps, dashboards) that present data and allow control.

4. **What is edge computing, and why is it important for IoT?**
   Answer: Edge computing is processing data near the source (at the edge of the network) rather than sending all data to the cloud. It is important for IoT because it reduces latency (critical for real-time control), reduces bandwidth usage (by filtering data locally), improves privacy (by keeping sensitive data on-site), and increases reliability (by allowing autonomous operation when the internet is down).

5. **You are building an IoT device that sends temperature data to a cloud platform. List three security measures you should implement.**
   Answer: (1) Use TLS/HTTPS to encrypt all data in transit, preventing eavesdropping. (2) Use strong authentication (API keys, certificates, or tokens) to ensure only authorized devices can send data. (3) Store API keys in environment variables or secure hardware, not in the source code. (4) Implement signed firmware updates to patch vulnerabilities. (5) Use a firewall or network segmentation to limit the device's exposure.

### Section C: Code Analysis (3 questions, 5 points each)

1. **Analyze the following Arduino code. What does it do, and what is the potential problem?**
   ```cpp
   void setup() {
     Serial.begin(9600);
   }
   void loop() {
     int val = analogRead(A0);
     Serial.println(val);
   }
   ```
   Answer: The code reads an analog sensor and prints its value to the serial port continuously. The potential problem is that there is no `delay()` in the loop, so it runs as fast as possible (hundreds of times per second). This floods the serial port and the Serial Monitor, making it impossible to read the values. The fix is to add `delay(1000);` or another appropriate delay to control the sampling rate.

2. **The following Python script is supposed to send sensor data to ThingSpeak every 15 seconds. Identify and fix the bug.**
   ```python
   import requests
   import time

   API_KEY = "YOUR_KEY"
   URL = "https://api.thingspeak.com/update"

   while True:
       temp = 25.5
       response = requests.get(URL, params={"api_key": API_KEY, "field1": temp})
       print(response.status_code)
       time.sleep(1)
   ```
   Answer: The bug is that the script sleeps for only 1 second between requests, violating ThingSpeak's free tier rate limit of 15 seconds between updates. This will cause ThingSpeak to reject requests with a 429 error or return 0. The fix is to change `time.sleep(1)` to `time.sleep(15)` or greater. Also, the API key should not be hardcoded; it should be stored in an environment variable.

3. **The following MQTT subscriber code has a logic error. What is it, and how would you fix it?**
   ```python
   import paho.mqtt.client as mqtt

   def on_message(client, userdata, msg):
       print(msg.payload)

   client = mqtt.Client()
   client.on_message = on_message
   client.connect("localhost", 1883)
   client.subscribe("sensors/temperature")
   ```
   Answer: The code connects to the broker and subscribes, but it does not start the network loop. Without `client.loop_forever()` or `client.loop_start()`, the client will not process incoming messages. The fix is to add `client.loop_forever()` at the end, which blocks and continuously processes network events. Alternatively, use `client.loop_start()` for a non-blocking loop in a threaded application.

### Section D: Practical Problem (10 points)

**Design a simple IoT system for a smart refrigerator that monitors temperature and door status.**

Requirements:
- An Arduino reads a temperature sensor (analog) and a door switch (digital) every 5 seconds.
- If the door is open for more than 30 seconds, the Arduino turns on a buzzer.
- The Arduino sends data to a Raspberry Pi via serial in JSON format: `{"temp":4.5,"door":"open"}`.
- The Raspberry Pi stores the data in SQLite and uploads it to ThingSpeak every 2 minutes.
- The Raspberry Pi sends an email alert (via IFTTT or Python `smtplib`) if the temperature rises above 8°C for more than 5 minutes.
- The Raspberry Pi runs a Flask dashboard showing the current temperature and door status.

**Answer:**

Hardware: Arduino Uno with TMP36 temperature sensor (A0), door switch (D2 with internal pull-up), and buzzer (D3). Raspberry Pi connected to Arduino via USB serial.

Arduino Code:
```cpp
#include <ArduinoJson.h>

const int tempPin = A0;
const int doorPin = 2;
const int buzzerPin = 3;
unsigned long doorOpenTime = 0;

void setup() {
  Serial.begin(9600);
  pinMode(doorPin, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  int tempRaw = analogRead(tempPin);
  float voltage = tempRaw * (5.0 / 1023.0);
  float tempC = (voltage - 0.5) * 100.0;

  bool doorOpen = (digitalRead(doorPin) == LOW);  // Active low

  if (doorOpen) {
    if (doorOpenTime == 0) doorOpenTime = millis();
    if (millis() - doorOpenTime > 30000) {
      digitalWrite(buzzerPin, HIGH);
    }
  } else {
    doorOpenTime = 0;
    digitalWrite(buzzerPin, LOW);
  }

  StaticJsonDocument<200> doc;
  doc["temp"] = tempC;
  doc["door"] = doorOpen ? "open" : "closed";
  serializeJson(doc, Serial);
  Serial.println();

  delay(5000);
}
```

Raspberry Pi Code (Python, simplified):
```python
import serial, sqlite3, requests, time, json
from datetime import datetime
from flask import Flask, render_template

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
conn = sqlite3.connect('fridge.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS readings
             (timestamp TEXT, temp REAL, door TEXT, sent INT DEFAULT 0)''')
conn.commit()

API_KEY = "YOUR_KEY"
alert_start = None

app = Flask(__name__)

@app.route('/')
def dashboard():
    c.execute("SELECT * FROM readings ORDER BY timestamp DESC LIMIT 1")
    row = c.fetchone()
    return f"<h1>Fridge Monitor</h1><p>Temp: {row[1]} C</p><p>Door: {row[2]}</p>"

def process_data():
    global alert_start
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        try:
            data = json.loads(line)
            temp = data['temp']
            door = data['door']
            ts = datetime.now().isoformat()
            c.execute("INSERT INTO readings (timestamp, temp, door) VALUES (?, ?, ?)", (ts, temp, door))
            conn.commit()

            if temp > 8.0:
                if alert_start is None:
                    alert_start = time.time()
                elif time.time() - alert_start > 300:
                    send_alert(temp)
            else:
                alert_start = None
        except json.JSONDecodeError:
            pass

def send_alert(temp):
    # Send email via IFTTT webhook or smtplib
    requests.post("https://maker.ifttt.com/trigger/fridge_alert/with/key/YOUR_IFTTT_KEY",
                  json={"value1": temp})

def upload_to_thingspeak():
    c.execute("SELECT rowid, temp, door FROM readings WHERE sent = 0 LIMIT 10")
    for row in c.fetchall():
        rowid, temp, door = row
        door_val = 1 if door == "open" else 0
        url = f"https://api.thingspeak.com/update?api_key={API_KEY}&field1={temp}&field2={door_val}"
        try:
            r = requests.get(url, timeout=10)
            if r.status_code == 200 and int(r.text) > 0:
                c.execute("UPDATE readings SET sent = 1 WHERE rowid = ?", (rowid,))
                conn.commit()
        except:
            pass

if __name__ == '__main__':
    from threading import Thread
    def worker():
        while True:
            process_data()
            upload_to_thingspeak()
            time.sleep(10)
    Thread(target=worker, daemon=True).start()
    app.run(host='0.0.0.0', port=5000)
```

---

## Course Conclusion

Congratulations on completing An Introduction to Programming the Internet of Things. You have traveled the full journey from physical sensors to cloud dashboards. You can now program an Arduino to read sensors and control actuators, program a Raspberry Pi to process data and run web services, connect devices using serial, I2C, and wireless protocols, and send data to the cloud using HTTP and MQTT. You understand the IoT architecture, the security challenges, and the design principles that separate a toy project from a reliable system.

The skills you have gained are the foundation of a career in IoT engineering, embedded systems development, and connected product design. Whether you are building a smart home device, an industrial sensor network, a wearable health monitor, or an agricultural automation system, the principles you learned in this course — sensing, processing, networking, and integrating — will serve you every day.

To continue your learning, consider these next steps:
- **Explore advanced microcontrollers:** Learn the ESP32 (Wi-Fi + Bluetooth built-in) and the STM32 (ARM Cortex-M) for more powerful IoT edge devices.
- **Study machine learning for IoT:** Learn how to run TensorFlow Lite on microcontrollers and Raspberry Pi for edge AI (anomaly detection, voice recognition, computer vision).
- **Build a production IoT product:** Learn PCB design, enclosure design, and manufacturing processes to turn your prototypes into products.
- **Get certified:** Consider AWS IoT Specialty or Microsoft Azure IoT certifications to validate your cloud IoT skills.
- **Join the community:** Participate in IoT forums, hackathons, and open-source projects. Share your projects on GitHub and write about your learning.

Remember: the Internet of Things is not just about connecting devices. It is about connecting the physical world to human intelligence, creating systems that make our lives safer, healthier, and more sustainable. You are now part of that mission. Go build something that matters.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
