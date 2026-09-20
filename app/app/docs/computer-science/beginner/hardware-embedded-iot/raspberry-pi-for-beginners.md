# Syllabus: Raspberry Pi for Beginners

> **Course ID:** `raspberry-pi-for-beginners`  
> **Title:** Raspberry Pi for Beginners  
> **Provider:** Cohortia  
> **Original reference:** Raspberry Pi Foundation / various open educational resources  
> **Platform:** Cohortia  
> **Level:** Beginner  
> **Type:** Course  
> **Duration:** 7–9 weeks (self-paced, ~5–8 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** Raspberry Pi, Linux, Python, GPIO, physical computing, sensors, actuators, networking, IoT, Flask, MQTT, shell scripting, Raspberry Pi OS  
> **Source catalog:** `docs/catalog-computer-science-research.md`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from the Raspberry Pi Foundation, Coursera, edX, university open-courseware, or other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

Raspberry Pi for Beginners is a hands-on introduction to one of the most influential single-board computers in the world. Unlike a microcontroller such as Arduino, the Raspberry Pi is a complete Linux computer that fits in the palm of your hand. It can run a desktop operating system, connect to the internet, play video, process data, and — just like a microcontroller — interact with LEDs, sensors, motors, and other electronic components through its General Purpose Input/Output (GPIO) header.

This course teaches you how to set up a Raspberry Pi from scratch, navigate the Linux command line, write Python programs that control hardware, build real-world sensor and actuator projects, connect your Pi to the internet and other devices, and deploy small IoT applications. By the end, you will understand not only how to make an LED blink, but how to think like an embedded Linux developer, how to secure a headless device, and how to turn a Raspberry Pi into a web server, data logger, or automation hub.

By the end of this course, you will be able to:

1. Compare Raspberry Pi models and select the right board, power supply, storage, and accessories for a project.
2. Install Raspberry Pi OS, configure Wi-Fi and users, and connect via SSH and VNC without a monitor.
3. Use the Linux terminal for file management, permissions, process control, networking, and automation with shell scripts and cron.
4. Write Python programs on the Raspberry Pi using Thonny, virtual environments, modules, file I/O, and APIs.
5. Read the 40-pin GPIO header, use BCM and BOARD numbering safely, and control digital outputs and inputs with `gpiozero`.
6. Generate PWM signals, read analog sensors through an ADC, and interface buttons, LEDs, buzzers, and relays.
7. Communicate with I2C, SPI, and UART devices such as displays, sensors, GPS modules, and cameras.
8. Build sensor-based projects using the DHT temperature/humidity sensor, HC-SR04 ultrasonic distance sensor, PIR motion sensor, and LCD/OLED displays.
9. Create a simple Flask web server that controls GPIO from a browser and publish sensor data using MQTT.
10. Secure, back up, troubleshoot, and document a complete Raspberry Pi capstone project.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to Raspberry Pi | 1 | 5–6 |
| 2 | Raspberry Pi OS and Linux Essentials | 1.5 | 7–9 |
| 3 | Python Programming on Raspberry Pi | 1.5 | 7–9 |
| 4 | GPIO and Physical Computing | 1.5 | 8–10 |
| 5 | Sensors, Actuators, and Communication Protocols | 1.5 | 8–10 |
| 6 | Networking, IoT, and Web Projects | 1 | 6–8 |
| 7 | Capstone Project and Advanced Topics | 1 | 5–7 |
| 8 | Assessments and Final Examination | 0.5 | 3–4 |

---

## Module 1: Introduction to Raspberry Pi

> **Goal:** Understand what the Raspberry Pi is, how it differs from microcontrollers and desktop computers, explore its hardware, choose the right model and accessories, and complete the first boot and configuration.

---

### Chapter 1.1 — What Is Raspberry Pi and Why Does It Matter?

#### Learning objectives
- Define the Raspberry Pi as a single-board computer running Linux.
- Contrast the Raspberry Pi with microcontrollers such as Arduino and with desktop/laptop computers.
- Explain the mission of the Raspberry Pi Foundation and the global impact of the platform.
- Identify the main use cases: education, prototyping, IoT, home automation, media centers, retro gaming, robotics, and edge computing.

#### Detailed lesson content

The Raspberry Pi is a series of low-cost, credit-card-sized single-board computers developed by the Raspberry Pi Foundation, a UK-based charity. The first Raspberry Pi was released in 2012 with a simple goal: to make computing and digital making affordable and accessible to young people and hobbyists. Since then, more than 60 million units have been sold, and the Raspberry Pi has become one of the most important tools in computer science education, maker culture, and embedded systems development.

A single-board computer, or SBC, is a complete computer built on a single circuit board. Unlike a desktop computer, which has separate motherboard, CPU, RAM, storage, and power supply, the Raspberry Pi integrates a processor, memory, USB ports, networking, HDMI output, and audio onto one small board. The processor is a System on a Chip, or SoC, which means the CPU, GPU, and sometimes other components are manufactured together in one package.

The Raspberry Pi is often compared to Arduino. Both are used to build physical computing projects, but they are fundamentally different. Arduino is a microcontroller platform. A microcontroller runs one program at a time, has very limited memory, and is excellent for simple, real-time control tasks. The Raspberry Pi is a full computer. It can run a multitasking operating system, connect to the internet, run multiple programs simultaneously, and store large files. You can think of Arduino as the brain of a simple appliance, while Raspberry Pi is more like a small personal computer that can also control hardware.

Compared to a laptop or desktop, the Raspberry Pi is slower, has less RAM, and uses much less power. However, it is far cheaper, much smaller, and has a GPIO header that lets it interact with electronics directly. This combination makes it ideal for projects that need both computing power and hardware control, such as home automation hubs, weather stations, security cameras, robots, and IoT gateways.

The Raspberry Pi Foundation supports the platform with free educational resources, a magazine called MagPi, project tutorials, and an official operating system called Raspberry Pi OS. The hardware designs are not fully open-source, but the software ecosystem is built on open-source Linux, Python, and many community libraries. This openness has created a massive community of educators, students, engineers, and makers who share projects and solutions.

Real-world applications of Raspberry Pi include:

- **Education:** teaching programming, networking, and electronics in schools and universities.
- **Prototyping:** building proof-of-concept devices before designing custom hardware.
- **Home automation:** controlling lights, thermostats, and appliances through platforms like Home Assistant.
- **Media centers:** running Kodi or Plex to play videos and music.
- **Retro gaming:** emulating classic game consoles with RetroPie.
- **Robotics:** processing sensor data, running computer vision, and controlling motors.
- **IoT and edge computing:** collecting sensor data, running AI inference locally, and sending data to the cloud.

Understanding the Raspberry Pi's position in the computing landscape helps you decide when to use it instead of a microcontroller or a full desktop machine.

#### Key concepts
- Single-board computer (SBC)
- System on a Chip (SoC)
- Raspberry Pi Foundation and its mission
- Raspberry Pi vs. Arduino vs. desktop computers
- Use cases and applications

#### Hands-on activity
Watch three short Raspberry Pi project videos or read project write-ups. For each one, identify whether the project mainly uses the Pi as a computer, as a controller, or both. Write a short paragraph explaining why a Raspberry Pi was a good choice for each project.

#### Assessment idea
Ask: "You need to build a device that reads a temperature sensor every minute and logs data to a spreadsheet for six months. Would you choose Arduino or Raspberry Pi? Why?" Expected answer: Raspberry Pi, because it can run a full operating system, store files, and handle spreadsheets easily.

#### AI generation note
Create a 7-minute introductory video. Open with a split-screen comparison: a desktop PC, an Arduino board, and a Raspberry Pi. Use motion graphics to show the Pi's SoC, ports, and GPIO header. End with a montage of real projects.

---

### Chapter 1.2 — Raspberry Pi Models and Specifications

#### Learning objectives
- Compare major Raspberry Pi models including Pi Zero, Pi 4, Pi 5, and their variants.
- Understand the impact of processor, RAM, ports, wireless connectivity, and power requirements.
- Choose the right model for a given project based on budget, performance, size, and connectivity needs.
- Identify the key components on the board: SoC, RAM, USB controller, Ethernet, GPIO header, camera connector, display connector.

#### Detailed lesson content

Since 2012, the Raspberry Pi has evolved through many models. Each generation improves performance, connectivity, and power efficiency while keeping the same 40-pin GPIO header so that older accessories and projects remain compatible.

The **Raspberry Pi 5**, released in 2023, is the most powerful model in the standard form factor. It uses a Broadcom BCM2712 quad-core ARM Cortex-A76 CPU running at 2.4 GHz, includes a VideoCore VII GPU, and supports up to 8 GB of LPDDR4X RAM. It has dual 4K HDMI outputs, two USB 3.0 ports, two USB 2.0 ports, Gigabit Ethernet, dual-band Wi-Fi, Bluetooth 5.0, and a dedicated power button. It also adds a PCIe connector for high-speed expansion and a fan connector for active cooling. The Pi 5 requires a 5V 5A USB-C power supply for full performance and is best for desktop use, media centers, AI inference, robotics, and demanding IoT gateways.

The **Raspberry Pi 4 Model B** was a major leap forward. It was the first Pi to support 4K video, dual displays, and up to 8 GB of RAM. It uses a Broadcom BCM2711 quad-core Cortex-A72 CPU at 1.5 or 1.8 GHz and is still widely used. The Pi 4 is excellent for general-purpose computing, web servers, and most maker projects. It can be powered by a 5V 3A USB-C supply.

The **Raspberry Pi 3 Model B+** and earlier Pi 3 models use a quad-core Cortex-A53 CPU. They are slower than the Pi 4 but still capable for many IoT, sensor, and automation projects. They use a micro-USB power connector and have a single full-size HDMI port.

The **Raspberry Pi Zero 2 W** is a tiny board about half the size of a standard Pi. It has a quad-core Cortex-A53 CPU, 512 MB of RAM, built-in Wi-Fi and Bluetooth, and a single micro-USB port for peripherals. It is ideal for space-constrained or low-cost projects such as motion cameras, environmental loggers, and portable devices. The original **Pi Zero W** is even cheaper and slower but still useful for simple tasks.

When selecting a model, consider these factors:

- **Performance:** Does the project need desktop-class performance, or will a slower Zero suffice?
- **Memory:** Will you run multiple services, a database, or a web server? If so, choose 4 GB or 8 GB.
- **Connectivity:** Do you need wired Ethernet, fast Wi-Fi, or Bluetooth?
- **Power:** Will the project run on battery? A Pi Zero uses far less power than a Pi 5.
- **Size and cost:** The Zero family is smaller and cheaper but has fewer ports.
- **GPIO compatibility:** All modern models share the same 40-pin GPIO header.

Key board components include:

- **SoC:** the main processor containing CPU and GPU.
- **RAM chip:** stores running programs and data.
- **USB and Ethernet controller:** manages USB ports and wired networking.
- **GPIO header:** 40 pins for hardware interfacing.
- **MicroSD card slot:** holds the operating system and user data.
- **HDMI ports:** video output.
- **Camera connector:** connects the Raspberry Pi Camera Module.
- **Display connector:** connects official touch displays.
- **Power input:** USB-C on Pi 4/5, micro-USB on older models.

#### Key concepts
- Raspberry Pi 5, Pi 4, Pi 3, Pi Zero 2 W, Pi Zero W
- SoC, CPU, GPU, RAM
- USB, Ethernet, Wi-Fi, Bluetooth
- 40-pin GPIO header compatibility
- Power requirements and selection criteria

#### Hands-on activity
Create a comparison table of at least three Raspberry Pi models. For each model, list CPU, RAM, USB ports, networking, power input, and approximate price. Then choose one model for each of these projects and justify your choice: a smart mirror, a portable plant monitor, and a home media server.

#### Assessment idea
Ask: "Which Raspberry Pi model would you recommend for a battery-powered wildlife camera that must fit inside a small waterproof case?" Expected answer: Raspberry Pi Zero 2 W or Pi Zero W, due to small size, built-in wireless, and lower power consumption.

#### AI generation note
Create a 9-minute slide lesson. Display a physical size comparison and a spec table. Use animated callouts to identify components on a high-resolution board photo. Include decision-tree graphics for model selection.

---

### Chapter 1.3 — Essential Accessories and Power Considerations

#### Learning objectives
- List the essential accessories needed to start using a Raspberry Pi.
- Understand the role of the microSD card, power supply, heat management, case, keyboard, mouse, and monitor.
- Explain voltage, current, and power requirements for reliable operation.
- Recognize symptoms of insufficient power and overheating.

#### Detailed lesson content

A Raspberry Pi is affordable, but it needs a few accessories before it can do anything useful. Knowing which accessories matter and which do not will save you from common beginner frustrations.

The **microSD card** is the most important accessory. It stores the operating system, all your programs, and your data. A slow or unreliable card will cause slow boot times, corrupted files, and random crashes. For Raspberry Pi OS, a minimum of 16 GB is recommended, but 32 GB or 64 GB is better. Look for a card with a high Application Performance Class rating, such as A1 or A2, because random read and write speeds matter more than sequential speeds for an operating system. Brands such as SanDisk, Samsung, and Kingston are widely trusted.

The **power supply** is equally critical. The Raspberry Pi is sensitive to voltage drops. A weak phone charger or a long thin USB cable may deliver only 4.5V under load, causing the low-voltage warning — a small lightning bolt icon on the desktop — and unstable behavior. The official Raspberry Pi power supply is the safest choice. For a Pi 4 or Pi 5, use a 5V 3A or 5V 5A USB-C supply. For a Pi 3, use a 5V 2.5A micro-USB supply. For a Pi Zero, 5V 2A is usually enough. Always use a short, high-quality cable.

**Heat management** becomes important with the Pi 4 and especially the Pi 5. These boards can throttle their CPU speed when they get too hot, reducing performance. A simple heatsink on the main chip helps, and a case with a fan or a dedicated active cooler is recommended for continuous heavy workloads. The Pi 5 has a built-in fan connector and an official active cooler designed for it.

A **case** protects the board from physical damage and short circuits. Make sure the case allows access to the GPIO header and camera connector if you plan to use them. Some cases are designed for passive cooling with metal fins, while others include fans.

A **keyboard, mouse, and monitor** are needed only if you plan to use the Pi as a desktop computer. Many projects run "headless," meaning without a monitor or keyboard, and are controlled remotely over SSH or VNC. For initial setup, you may need a monitor and keyboard, but after that, many users operate their Pi entirely remotely.

Other useful accessories include:

- **A USB-to-TTL serial cable** for debugging when networking fails.
- **A powered USB hub** if you connect many power-hungry USB devices.
- **A Raspberry Pi Camera Module** for computer vision projects.
- **An official touch display** for interactive projects.
- **Breadboards, jumper wires, LEDs, resistors, and sensors** for GPIO experiments.

Understanding power is essential. Power, measured in watts, is the product of voltage and current. The Pi needs a stable 5V. If the current is too low, the voltage drops. A low voltage can corrupt the SD card, cause the Pi to reboot, or make USB devices fail. The lightning bolt warning appears when the input voltage drops below 4.65V. If you see it, replace the power supply or cable immediately.

#### Key concepts
- MicroSD card capacity and speed classes
- Official vs. third-party power supplies
- Voltage drop and the low-voltage warning
- Heatsinks, fans, and thermal throttling
- Headless vs. desktop operation
- Essential and optional accessories

#### Hands-on activity
Make a shopping list for a Raspberry Pi starter kit. Include the Pi model, SD card, power supply, case, and at least five GPIO components. Research real prices online and calculate the total cost.

#### Assessment idea
Ask: "Your Raspberry Pi desktop shows a lightning bolt icon in the corner. What does it mean, and what should you do?" Expected answer: the Pi is receiving insufficient voltage; use the official power supply and a shorter, thicker cable.

#### AI generation note
Create an 8-minute buyer's-guide style video. Show each accessory with close-ups and explain why quality matters. Include a warning segment about fake power supplies and slow SD cards.

---

### Chapter 1.4 — First Boot: Installing Raspberry Pi OS and Initial Configuration

#### Learning objectives
- Install Raspberry Pi OS onto a microSD card using Raspberry Pi Imager.
- Configure Wi-Fi, username, password, and SSH before the first boot.
- Perform the first boot and complete initial setup.
- Use `raspi-config` to enable interfaces and change system settings.

#### Detailed lesson content

Before the Raspberry Pi can run, it needs an operating system. The official operating system is called **Raspberry Pi OS**, formerly known as Raspbian. It is a Debian-based Linux distribution optimized for Raspberry Pi hardware. It comes in several versions: Desktop with recommended software, Desktop without recommended software, and Lite, which has no graphical interface and is used for headless servers.

The easiest way to install Raspberry Pi OS is with the **Raspberry Pi Imager**, a free tool available for Windows, macOS, and Linux. It downloads the correct OS image and writes it to the microSD card automatically. Here is the typical process:

1. Download and install Raspberry Pi Imager from the official Raspberry Pi website.
2. Insert a microSD card into your computer using a card reader.
3. Open Imager, click **Choose Device**, and select your Raspberry Pi model.
4. Click **Choose OS** and select the recommended Raspberry Pi OS 64-bit with desktop.
5. Click **Choose Storage** and select your microSD card.
6. Click the gear icon or **Edit Settings** to configure options before writing:
   - Set a hostname, such as `raspberrypi.local`.
   - Create a username and a strong password. The old default username `pi` is no longer used for security reasons.
   - Enter your Wi-Fi network name and password.
   - Set the locale, including timezone and keyboard layout.
   - Enable SSH if you want remote access.
7. Click **Write** and wait for the process to finish. Eject the card safely.

Insert the microSD card into the Pi, connect the power supply, and the board will boot. The first boot may take a minute or two as the OS expands the filesystem and configures itself.

If you are using a monitor and keyboard, you will see the Raspberry Pi desktop. A setup wizard will guide you through country, language, timezone, and password settings. If you configured everything in Imager, some steps may be skipped.

If you are running headless, you can connect using SSH from another computer on the same network. On Windows, use PowerShell or PuTTY. On macOS or Linux, open a terminal and run:

```bash
ssh username@raspberrypi.local
```

Replace `username` with the username you created. The first time you connect, you will be asked to verify the host's fingerprint. Type `yes` and enter your password.

For remote desktop access, enable VNC through `raspi-config`, the Raspberry Pi configuration tool. Open a terminal and run:

```bash
sudo raspi-config
```

Navigate to **Interface Options**, then **VNC**, and enable it. After a reboot, you can connect with a VNC viewer such as RealVNC Viewer using the Pi's IP address or hostname.

`raspi-config` is also where you enable other important interfaces such as SPI, I2C, UART, and the camera. You will use it frequently throughout the course. Most hardware interface changes require a reboot to take effect.

#### Key concepts
- Raspberry Pi OS versions: Desktop, Lite, 32-bit vs. 64-bit
- Raspberry Pi Imager
- Pre-configuration: hostname, Wi-Fi, SSH, user credentials
- First boot and setup wizard
- SSH and VNC remote access
- `raspi-config`

#### Hands-on activity
Install Raspberry Pi OS on a microSD card using Imager. Configure Wi-Fi and SSH before the first boot. Boot the Pi and connect via SSH from your computer. Run the `lsb_release -a` command to confirm the OS version.

#### Assessment idea
Ask: "You want to run your Pi without a monitor or keyboard. Which two settings should you enable in Raspberry Pi Imager before writing the OS?" Expected answer: Wi-Fi credentials and SSH.

#### AI generation note
Create a 12-minute screen-recording tutorial. Show every step of Imager, first boot, SSH connection, and `raspi-config`. Use zoom-ins for important fields and on-screen text labels.

---

### Chapter 1.5 — Understanding the 40-Pin GPIO Header

#### Learning objectives
- Identify the power, ground, and GPIO pins on the 40-pin header.
- Distinguish between BOARD and BCM numbering systems.
- Recognize special function pins: I2C, SPI, UART, PWM.
- Apply safe voltage and current limits when connecting external circuits.

#### Detailed lesson content

The 40-pin GPIO header is what makes the Raspberry Pi a physical computing platform. GPIO stands for General Purpose Input/Output. These pins can be configured in software to send signals to components such as LEDs and motors, or to receive signals from sensors and buttons.

The 40-pin header has been standard since the Raspberry Pi Model B+ in 2014. The pin layout is the same on the Pi 2, 3, 4, 5, and Zero models, which means a project built for one model usually works on the others. The header provides:

- Two 5V power pins.
- Two 3.3V power pins.
- Eight ground pins.
- Twenty-six general-purpose GPIO pins.
- Special-purpose pins for I2C, SPI, UART, and PWM.

There are two ways to refer to GPIO pins. **BOARD numbering** uses the physical pin number on the header, counting from 1 to 40 starting at the top left when the USB ports face downward. **BCM numbering**, also called Broadcom numbering, uses the GPIO numbers assigned by the Broadcom chip. For example, physical pin 11 is GPIO 17 in BCM mode. Most modern Python tutorials and libraries, including `gpiozero`, use BCM numbering by default.

Here is a simplified pinout for the most commonly used pins:

- Physical pin 1: 3.3V power
- Physical pin 2: 5V power
- Physical pin 6: Ground
- Physical pin 8: GPIO 14, UART TX
- Physical pin 10: GPIO 15, UART RX
- Physical pin 11: GPIO 17
- Physical pin 12: GPIO 18, PWM0
- Physical pin 13: GPIO 27
- Physical pin 15: GPIO 22
- Physical pin 16: GPIO 23
- Physical pin 18: GPIO 24
- Physical pin 22: GPIO 25
- Physical pin 24: GPIO 8, SPI CE0
- Physical pin 26: GPIO 7, SPI CE1
- Physical pin 29: GPIO 5
- Physical pin 31: GPIO 6
- Physical pin 32: GPIO 12, PWM0
- Physical pin 33: GPIO 13, PWM1
- Physical pin 35: GPIO 19, SPI MOSI, PWM1
- Physical pin 36: GPIO 16
- Physical pin 37: GPIO 26
- Physical pin 38: GPIO 20, SPI MISO
- Physical pin 40: GPIO 21, SPI SCLK

Pins 3 and 5 are GPIO 2 and GPIO 3, which also function as the I2C SDA and SCL lines. These pins have built-in 1.8kΩ pull-up resistors on the Raspberry Pi board.

Voltage safety is critical. The Raspberry Pi's GPIO pins operate at **3.3V logic**. Connecting a 5V signal directly to a GPIO pin can permanently damage the SoC. Always use level shifters or voltage dividers when interfacing with 5V devices. Each GPIO pin can source or sink a maximum of about 16 mA, and the total current across all GPIO pins should not exceed 50 mA. For components that need more current, such as motors or relays, use external transistors, motor drivers, or relays.

PWM, or Pulse Width Modulation, is available on specific pins. Hardware PWM is available on GPIO 12, 13, 18, and 19. Software PWM can be used on any GPIO pin but is less precise and uses CPU time. `gpiozero` makes PWM easy with classes such as `PWMLED` and `Servo`.

#### Key concepts
- 40-pin GPIO header layout
- BOARD vs. BCM numbering
- Power pins: 5V, 3.3V, GND
- I2C, SPI, UART pins
- PWM-capable pins
- 3.3V logic and current limits

#### Hands-on activity
Print a GPIO pinout diagram and tape it next to your Pi. Use a multimeter to identify the 5V, 3.3V, and ground pins by measuring voltage relative to a known ground. Identify physical pin 11 and confirm it is GPIO 17 in BCM mode.

#### Assessment idea
Show a GPIO pinout and ask: "You want to connect an LED to GPIO 18. Which physical pin number should you use, and what special feature does GPIO 18 support?" Expected answer: physical pin 12, hardware PWM.

#### AI generation note
Create a 10-minute lesson with a large, animated GPIO pinout diagram. Highlight each category of pins with color coding. Show the difference between BOARD and BCM numbering with a zoomed-in example. Include a safety warning about 5V on GPIO pins.

## Module 2: Raspberry Pi OS and Linux Essentials

> **Goal:** Become comfortable with the Linux terminal, file system, users, permissions, networking, remote access, shell scripting, and task automation on Raspberry Pi OS.

---

### Chapter 2.1 — The Linux Terminal and Basic Commands

#### Learning objectives
- Open and use the terminal on Raspberry Pi OS.
- Understand the command prompt and the shell.
- Use essential commands: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cp`, `mv`, `rm`, `clear`, `history`.
- Use command-line options and flags effectively.

#### Detailed lesson content

The terminal, also called the command line or shell, is a text-based interface for controlling the operating system. On Raspberry Pi OS, the default shell is called Bash. Many tasks that can be done by clicking icons on the desktop can also be done faster in the terminal. More importantly, the terminal is the only way to control a headless Raspberry Pi over SSH.

When you open a terminal, you see a prompt. It usually looks something like this:

```bash
alex@raspberrypi:~ $
```

This prompt tells you several things: the current user is `alex`, the hostname of the Pi is `raspberrypi`, the current directory is `~` which means the user's home folder, and the `$` indicates a normal user prompt. A `#` prompt would indicate the root user, who has full administrative power.

The Linux file system is organized as a tree. The top of the tree is called the root directory and is written as `/`. Inside `/` are folders such as `bin`, `etc`, `home`, `var`, and `usr`. User files live inside `/home/username`. When you open a terminal, you usually start in your home directory, written as `~`.

Here are the most important commands for beginners:

- `pwd` prints the current working directory.
- `ls` lists files and folders in the current directory. Use `ls -la` to show hidden files and detailed permissions.
- `cd` changes directory. `cd ..` goes up one level. `cd ~` goes to the home directory.
- `mkdir` creates a new directory. `mkdir projects` creates a folder called projects.
- `touch` creates an empty file. `touch notes.txt` creates a file called notes.txt.
- `cp` copies a file. `cp notes.txt backup.txt` makes a copy.
- `mv` moves or renames a file. `mv notes.txt old_notes.txt` renames it.
- `rm` removes a file. `rm notes.txt` deletes it. Use `rm -r foldername` to delete a directory and its contents.
- `clear` clears the terminal screen.
- `history` shows a list of previously typed commands.

Most commands accept options that change their behavior. Options usually start with a dash. For example, `ls -l` shows a long listing with file sizes and dates, and `ls -a` shows hidden files. Options can be combined: `ls -la` does both.

Tab completion is a huge time-saver. Start typing a file or command name and press the Tab key. The shell will complete the name if there is only one possibility, or show options if there are several. This reduces typing errors and speeds up navigation.

#### Key concepts
- Terminal, shell, Bash, prompt
- Root directory `/` and home directory `~`
- Core file management commands
- Command options and flags
- Tab completion and command history

#### Hands-on activity
Open a terminal on your Pi. Create a directory called `linux_practice`, navigate into it, create three files named `file1.txt`, `file2.txt`, and `file3.txt`, list them with details, rename `file1.txt` to `notes.txt`, copy it to `notes_backup.txt`, and then delete the original `file1.txt` if it still exists.

#### Assessment idea
Ask: "What command would you use to list all files, including hidden ones, in the current directory with detailed information?" Answer: `ls -la`.

#### AI generation note
Create a 10-minute terminal tutorial video. Show a real terminal window with large text. Demonstrate each command one at a time and display the output. Use callouts for the prompt, options, and tab completion.

---

### Chapter 2.2 — Files, Directories, and Permissions

#### Learning objectives
- Understand the Linux file permission system.
- Read and interpret `ls -l` output.
- Change permissions with `chmod` and ownership with `chown`.
- Use `sudo` safely for administrative tasks.

#### Detailed lesson content

Linux is a multi-user operating system. This means many users can share the same Pi, and the system needs a way to control who can read, write, or run each file. Every file and directory has an owner, a group, and a set of permissions.

When you run `ls -l` in a directory, you see lines like this:

```bash
-rw-r--r-- 1 alex alex 1234 Jun 10 09:15 notes.txt
```

The first character indicates the file type. A dash `-` means a regular file. A `d` means a directory. The next nine characters are the permissions, grouped into three sets of three for the owner, the group, and everyone else.

- `r` means read permission.
- `w` means write permission.
- `x` means execute permission.

In the example `-rw-r--r--`, the owner has read and write permissions, the group has only read permission, and everyone else has only read permission.

Directories use the same permission bits, but their meaning is slightly different. Read permission on a directory lets you list its contents. Write permission lets you create or delete files inside it. Execute permission lets you enter the directory with `cd`.

Permissions can be changed with the `chmod` command. There are two common ways to use `chmod`: symbolic mode and numeric mode. Symbolic mode uses letters such as `u` for user, `g` for group, `o` for others, `+` to add permission, and `-` to remove permission. For example:

```bash
chmod u+x script.py      # add execute permission for the owner
chmod go-w notes.txt     # remove write permission for group and others
chmod a+r document.txt   # add read permission for everyone
```

Numeric mode uses a three-digit number. Each digit represents the permissions for owner, group, and others. The values are calculated by adding read (4), write (2), and execute (1). For example, `chmod 755 script.py` gives the owner read, write, and execute (7 = 4+2+1), and gives the group and others read and execute (5 = 4+1). This is a common permission for executable scripts.

Ownership can be changed with `chown`. You usually need `sudo` to change ownership:

```bash
sudo chown root:root sensitive_file.txt
```

`sudo` stands for "superuser do." It allows a permitted user to run a command with administrative privileges. Because root can do anything, including damage the system, you should use `sudo` only when necessary. Never run random commands copied from the internet with `sudo` without understanding them.

#### Key concepts
- Users, groups, and ownership
- Read, write, and execute permissions
- Interpreting `ls -l` output
- `chmod` symbolic and numeric modes
- `chown` and `sudo`

#### Hands-on activity
Create a file called `secret.txt` and set its permissions so only the owner can read and write it. Create a directory called `shared` and set permissions so the owner can do anything, the group can read and enter, and others can only enter. Verify with `ls -la`.

#### Assessment idea
Given the permission string `drwxr-xr-x`, identify the file type and the permissions for owner, group, and others. Then ask what `chmod 644 file.txt` would set.

#### AI generation note
Create a 10-minute animated lesson. Use color-coded permission blocks and show how symbolic and numeric modes map to them. Include a quiz moment where learners predict the result of a `chmod` command.

---

### Chapter 2.3 — Users, Processes, and System Monitoring

#### Learning objectives
- Understand user accounts and the principle of least privilege.
- Create, delete, and manage users and groups.
- View running processes with `ps` and `top` or `htop`.
- Manage services with `systemctl`.
- Monitor CPU, memory, disk, and network usage.

#### Detailed lesson content

User management is important for security and collaboration. The Raspberry Pi OS no longer ships with a default `pi` user. During setup, you create your own username and password. It is good practice to use a normal user account for everyday work and `sudo` only when you need administrative access.

You can create a new user with the `sudo adduser` command:

```bash
sudo adduser student
```

This creates a home directory at `/home/student`, sets a password, and asks for optional information. To give the new user permission to use `sudo`, add them to the `sudo` group:

```bash
sudo usermod -aG sudo student
```

The `-aG` option appends the user to a group without removing them from other groups. The user must log out and back in for the change to take effect. You can check which groups a user belongs to with the `groups` command.

A process is a running program. Every command you run in the terminal starts a process. You can see the processes you are running with the `ps` command. `ps aux` shows all processes running on the system, along with their CPU and memory usage. The `top` command provides a live, updating view of processes and resource usage. A more user-friendly version called `htop` can be installed with `sudo apt install htop`.

To find a specific process, you can combine `ps` with `grep`:

```bash
ps aux | grep python
```

The vertical bar `|` is called a pipe. It sends the output of one command as input to another command. Pipes are one of the most powerful features of the Linux command line.

Services are background processes that start automatically when the Pi boots. Raspberry Pi OS uses `systemd` to manage services. The command used to control services is `systemctl`. For example:

```bash
sudo systemctl status ssh       # check the SSH service
sudo systemctl stop ssh         # stop the SSH service
sudo systemctl start ssh        # start the SSH service
sudo systemctl enable ssh       # make SSH start on boot
sudo systemctl disable ssh      # do not start SSH on boot
```

Monitoring system resources helps you understand whether your Pi is overloaded. Useful commands include:

- `free -h` shows memory usage in human-readable format.
- `df -h` shows disk space usage.
- `vcgencmd measure_temp` shows the CPU temperature on a Raspberry Pi.
- `uptime` shows how long the system has been running and the average load.

#### Key concepts
- User accounts and the `sudo` group
- Creating users with `adduser` and `usermod`
- Processes, `ps`, `top`, `htop`
- Pipes and `grep`
- `systemctl` and services
- Memory, disk, temperature, and load monitoring

#### Hands-on activity
Create a new user called `guest`. Add `guest` to the `sudo` group. Open a second terminal and log in as `guest` using `su - guest`. Run `whoami` and `groups` to confirm. Then return to your main user and check CPU temperature and free memory.

#### Assessment idea
Ask: "What command shows all running processes sorted by CPU usage in real time, and what command makes a service start automatically on boot?" Answers: `top` or `htop`, and `sudo systemctl enable servicename`.

#### AI generation note
Create a 10-minute system-administration style video. Show a split screen with a user terminal and a process monitor. Demonstrate creating a user, checking processes, and viewing system temperature. Use overlays to explain pipes.

---

### Chapter 2.4 — Networking, SSH, and VNC

#### Learning objectives
- Configure wired and wireless networking on Raspberry Pi OS.
- Find the Raspberry Pi's IP address on a network.
- Connect securely using SSH and copy files with `scp` and `rsync`.
- Set up and use VNC for remote graphical access.
- Understand basic security practices for exposed devices.

#### Detailed lesson content

Networking turns a Raspberry Pi from a standalone computer into a connected device. The Raspberry Pi 3, 4, and 5, as well as the Zero W and Zero 2 W, have built-in Wi-Fi and Bluetooth. The Pi 4 and Pi 5 also have a Gigabit Ethernet port for wired networking. Wired connections are usually faster and more reliable than Wi-Fi, so use Ethernet when possible for servers or long-running projects.

To check your network connection, use the `ip` command:

```bash
ip a
```

This shows all network interfaces and their IP addresses. The wired interface is usually called `eth0`, and the wireless interface is usually called `wlan0`. An IP address looks like `192.168.1.45` and is assigned by your router through DHCP.

You can test connectivity with the `ping` command:

```bash
ping google.com
```

`ping` sends small packets to a remote server and prints the response time. Press Ctrl+C to stop it. If `ping` works, your Pi has internet access.

For headless access, SSH is the most common tool. SSH stands for Secure Shell and provides an encrypted command-line connection over the network. On another computer, open a terminal and run:

```bash
ssh alex@raspberrypi.local
```

If the Pi and your computer are on the same local network, the `.local` hostname usually works thanks to mDNS, also called Bonjour or Avahi. If not, use the Pi's IP address.

To copy files to or from the Pi, use `scp`:

```bash
scp notes.txt alex@raspberrypi.local:/home/alex/
scp alex@raspberrypi.local:/home/alex/data.csv ./
```

For larger transfers or directories, `rsync` is more efficient because it only copies changed files:

```bash
rsync -avz projects/ alex@raspberrypi.local:/home/alex/projects/
```

For graphical remote access, enable VNC through `raspi-config` or the Raspberry Pi Configuration GUI. Then install RealVNC Viewer on your main computer and connect to the Pi's IP address or hostname. VNC is useful when you need to use graphical applications or help someone troubleshoot a desktop issue.

Security matters when a device is networked. Here are basic practices:

- Change the default password and use a strong, unique password.
- Disable password-based SSH and use SSH keys instead for stronger authentication.
- Keep Raspberry Pi OS updated with `sudo apt update && sudo apt upgrade`.
- Disable services you do not need.
- Avoid exposing SSH directly to the public internet without additional protection such as a firewall or VPN.

#### Key concepts
- Wi-Fi, Ethernet, `eth0`, `wlan0`
- IP address, DHCP, `ip a`, `ping`
- SSH, hostname, mDNS
- `scp` and `rsync`
- VNC remote desktop
- Network security basics

#### Hands-on activity
Find your Pi's IP address using `ip a`. Connect to it via SSH from another device. Copy a text file from your computer to the Pi using `scp`. Then enable VNC, connect graphically, and take a screenshot of the desktop.

#### Assessment idea
Ask: "You want to copy a folder named `code` from your laptop to your Pi at IP `192.168.1.50` as user `pi`. Write the `scp` or `rsync` command."

#### AI generation note
Create an 11-minute networking tutorial. Show how to find the IP address, connect via SSH, transfer files, and open a VNC session. Include a security checklist slide at the end.

---

### Chapter 2.5 — Package Management and Software Installation

#### Learning objectives
- Use `apt` to update the package list and install, remove, and upgrade software.
- Understand the difference between system packages and Python packages.
- Install software from source and from downloaded `.deb` files.
- Use `which`, `whereis`, and `man` to locate commands and read documentation.

#### Detailed lesson content

Linux distributions use package managers to install and update software. On Raspberry Pi OS, which is based on Debian, the package manager is called `apt`, short for Advanced Package Tool. Packages are pre-compiled software files stored in online repositories.

Before installing software, update the package list so the system knows about the latest versions:

```bash
sudo apt update
```

To upgrade all installed packages to their latest versions, run:

```bash
sudo apt upgrade
```

You can combine both commands:

```bash
sudo apt update && sudo apt upgrade -y
```

The `&&` means the second command runs only if the first succeeds. The `-y` flag automatically answers yes to confirmation prompts.

To install a package, use `sudo apt install`. For example, to install the text editor `nano` and the system monitor `htop`:

```bash
sudo apt install nano htop
```

To remove a package:

```bash
sudo apt remove htop
```

To remove a package along with its configuration files:

```bash
sudo apt purge htop
```

To clean up unused dependencies:

```bash
sudo apt autoremove
```

Sometimes you need software that is not in the official repositories. For example, you might download a `.deb` file from a vendor's website. You can install it with:

```bash
sudo dpkg -i package-name.deb
sudo apt --fix-broken install
```

Python packages are managed separately with `pip`, the Python package installer. You will learn more about `pip` in the Python module. For now, remember that system packages and Python packages are different. System packages are installed with `apt` and affect the whole operating system. Python packages are installed with `pip` and are usually specific to a user or a project.

To learn about a command, use the `man` command to read its manual page:

```bash
man ls
```

Press `q` to quit the manual viewer. If a command does not have a manual page, you can often use the `--help` option:

```bash
ls --help
```

To find where a command is located on disk, use `which`:

```bash
which python3
```

This prints the path to the executable, such as `/usr/bin/python3`.

#### Key concepts
- `apt`, repositories, packages
- `apt update`, `apt upgrade`, `apt install`, `apt remove`, `apt purge`
- `.deb` packages and `dpkg`
- Difference between `apt` and `pip`
- `man`, `--help`, `which`

#### Hands-on activity
Update your package list and upgrade installed packages. Install `htop`, `neofetch`, and `git` using a single `apt install` command. Open `htop` and observe the processes. Then remove `neofetch` and clean up unused dependencies.

#### Assessment idea
Ask: "What is the difference between `apt update` and `apt upgrade`?" Answer: `apt update` refreshes the package list, while `apt upgrade` installs newer versions of installed packages.

#### AI generation note
Create a 9-minute lesson. Use a terminal screen recording to show package installation. Add callouts explaining what happens at each step. Show how to read a `man` page and use `--help`.

---

### Chapter 2.6 — Shell Scripting and Automation with Cron

#### Learning objectives
- Write simple Bash scripts that combine multiple commands.
- Use variables, conditionals, loops, and arguments in scripts.
- Schedule scripts to run automatically with `cron`.
- Use `systemd` timers as an alternative to cron.

#### Detailed lesson content

A shell script is a text file containing multiple Linux commands that can be executed together. Scripts are powerful because they let you automate repetitive tasks, such as backing up files, checking system health, or collecting sensor data.

Create a simple script called `hello.sh`:

```bash
#!/bin/bash
echo "Hello, Raspberry Pi!"
echo "Today is $(date)"
```

The first line, `#!/bin/bash`, is called a shebang. It tells the system which interpreter to use. To run the script, first make it executable:

```bash
chmod +x hello.sh
./hello.sh
```

The `./` tells the shell to run the script in the current directory.

Scripts can use variables to store values:

```bash
#!/bin/bash
USER_NAME="Alex"
echo "Hello, $USER_NAME!"
```

They can also accept arguments from the command line. `$1` is the first argument, `$2` is the second, and so on:

```bash
#!/bin/bash
echo "First argument: $1"
echo "Second argument: $2"
```

Conditionals let scripts make decisions:

```bash
#!/bin/bash
if [ "$1" = "start" ]; then
  echo "Starting..."
elif [ "$1" = "stop" ]; then
  echo "Stopping..."
else
  echo "Usage: $0 start|stop"
fi
```

Loops let scripts repeat actions. A `for` loop is useful for iterating over files or numbers:

```bash
#!/bin/bash
for i in 1 2 3 4 5; do
  echo "Count: $i"
done
```

A `while` loop repeats while a condition is true:

```bash
#!/bin/bash
count=1
while [ $count -le 5 ]; do
  echo "Count: $count"
  count=$((count + 1))
done
```

Automation is where scripts become really useful. The `cron` daemon runs scheduled tasks on Linux. You edit your cron jobs with:

```bash
crontab -e
```

Each cron line has five time fields followed by the command: minute, hour, day of month, month, and day of week. For example, to run a backup script every day at 3:00 AM:

```bash
0 3 * * * /home/alex/backup.sh
```

To run a script every 10 minutes:

```bash
*/10 * * * * /home/alex/check_temp.sh
```

Special strings make common schedules easier:

- `@reboot` runs a command once at startup.
- `@hourly` runs at the start of every hour.
- `@daily` runs once per day.

For more complex scheduling, `systemd` timers can be used, but cron is usually enough for beginner projects.

#### Key concepts
- Bash scripts and the shebang `#!/bin/bash`
- Variables, arguments, conditionals, loops
- Making scripts executable with `chmod +x`
- `cron`, `crontab`, and scheduling syntax
- `@reboot`, `@hourly`, `@daily`

#### Hands-on activity
Write a script called `system_check.sh` that prints the current date, free disk space, CPU temperature, and memory usage. Make it executable and run it. Then schedule it to run every hour using `cron`, logging the output to `/home/yourname/system_check.log`.

#### Assessment idea
Ask: "Write a cron job that runs `/home/alex/backup.sh` every Sunday at 2:30 AM." Answer: `30 2 * * 0 /home/alex/backup.sh`.

#### AI generation note
Create a 12-minute lesson. Show script creation in a text editor, execution, and scheduling with `cron`. Use animated cron schedule diagrams to explain the five time fields. Show a live log file growing over time.

## Module 3: Python Programming on Raspberry Pi

> **Goal:** Learn to write, run, and organize Python programs on the Raspberry Pi, from basic syntax to file handling, modules, virtual environments, and web APIs.

---

### Chapter 3.1 — Python on Raspberry Pi: Setup, Tools, and First Program

#### Learning objectives
- Explain why Python is the primary language for Raspberry Pi projects.
- Use the Thonny IDE and the terminal to write and run Python programs.
- Understand Python versions, the interpreter, and script execution.
- Write a first Python program that prints output and accepts input.

#### Detailed lesson content

Python is the most popular programming language for the Raspberry Pi. It is pre-installed on Raspberry Pi OS, it has a clean and readable syntax, and it has powerful libraries for GPIO control, data analysis, web development, and machine learning. The Raspberry Pi Foundation officially recommends Python for physical computing, and the `gpiozero` library is written specifically for Python.

Raspberry Pi OS includes at least two versions of Python. `python3` is the current version, Python 3, and is the one you should use. `python` without the `3` may still point to Python 2 on some older systems, but Python 2 is no longer supported. When you write Python code, always call it with `python3`.

You can run Python interactively by opening a terminal and typing:

```bash
python3
```

This opens the Python REPL, which stands for Read-Eval-Print Loop. It lets you type Python commands one at a time and see immediate results. It is excellent for quick experiments. To exit, type `exit()` or press Ctrl+D.

You can also write Python code in a file and run it. Create a file called `hello.py`:

```python
print("Hello, Raspberry Pi!")
name = input("What is your name? ")
print(f"Nice to meet you, {name}!")
```

Run it with:

```bash
python3 hello.py
```

The Raspberry Pi OS desktop includes **Thonny**, a beginner-friendly Python IDE. Thonny highlights syntax, helps you debug, and can run programs with a single click. It is a good choice when you are learning because it shows variables, errors, and the call stack in a simple interface. You can also use VS Code, which can be installed through `apt` or downloaded from Microsoft.

A Python program is just a text file with a `.py` extension. The file can contain functions, classes, variables, and statements. When you run the file, the Python interpreter reads it from top to bottom and executes each line. Unlike compiled languages such as C, Python code is interpreted at runtime, which makes development faster but execution slower.

Python uses indentation to define blocks of code. For example, the body of a function or a loop must be indented consistently, usually by four spaces. This is different from languages that use braces. Proper indentation is not optional in Python; it is part of the syntax.

#### Key concepts
- Python 3 and `python3`
- REPL and script execution
- Thonny IDE and alternatives
- Python syntax and indentation
- `print()` and `input()` functions

#### Hands-on activity
Open Thonny and create a program that asks the user for two numbers, adds them, and prints the result. Run it from Thonny, then save it as `add.py` and run it from the terminal with `python3 add.py`.

#### Assessment idea
Ask: "What is the difference between running `python3` with no arguments and running `python3 script.py`?" Answer: the first opens the interactive REPL; the second runs a script file.

#### AI generation note
Create a 9-minute video showing Thonny and the terminal side by side. Write a simple program live, run it both ways, and explain indentation with animated highlighting.

---

### Chapter 3.2 — Variables, Data Types, Operators, and Strings

#### Learning objectives
- Use variables and understand Python's dynamic typing.
- Work with numbers, strings, booleans, lists, tuples, and dictionaries.
- Use arithmetic, comparison, and logical operators.
- Format strings using f-strings and common string methods.

#### Detailed lesson content

Variables in Python are named references to values. You do not need to declare the type; Python figures it out automatically. This is called dynamic typing.

```python
temperature = 23.5          # float
count = 42                  # integer
is_running = True           # boolean
name = "Living Room"        # string
```

Python has several built-in data types that are essential for Raspberry Pi projects:

- **Integers** are whole numbers: `10`, `-3`, `0`.
- **Floats** are decimal numbers: `3.14`, `-0.5`, `23.5`.
- **Strings** are sequences of characters: `"hello"`, `'Pi'`.
- **Booleans** are `True` or `False`.
- **Lists** store ordered collections: `[1, 2, 3]`.
- **Tuples** are like lists but cannot be changed: `(1, 2, 3)`.
- **Dictionaries** store key-value pairs: `{"temperature": 22, "humidity": 45}`.

Lists are especially useful for storing sensor readings over time:

```python
readings = [22.5, 23.0, 22.8, 23.2]
readings.append(23.5)       # add a new reading
average = sum(readings) / len(readings)
print(f"Average: {average:.2f}")
```

Dictionaries are useful for representing structured data, such as sensor messages:

```python
sensor_data = {
    "device": "pi-01",
    "temperature": 23.5,
    "humidity": 48.0,
    "timestamp": "2026-06-30T10:00:00"
}
print(sensor_data["temperature"])
```

Python supports the usual arithmetic operators: `+`, `-`, `*`, `/`, `//` (integer division), `%` (modulo), and `**` (exponentiation). Comparison operators include `==`, `!=`, `<`, `>`, `<=`, `>=`. Logical operators are `and`, `or`, and `not`.

String formatting is important for creating readable output and log messages. The modern way is to use f-strings:

```python
temperature = 23.456
print(f"Temperature: {temperature:.1f} °C")
```

Common string methods include:

- `.lower()` and `.upper()` to change case.
- `.strip()` to remove whitespace.
- `.split()` to break a string into a list.
- `.replace()` to substitute text.?FM<>
- `.startswith()` and `.endswith()` to check prefixes and suffixes.

#### Key concepts
- Variables and dynamic typing
- Integers, floats, strings, booleans
- Lists, tuples, dictionaries
- Arithmetic, comparison, and logical operators
- f-strings and string methods

#### Hands-on activity
Write a Python script that stores five temperature readings in a list, calculates the average, minimum, and maximum, and prints a formatted summary. Store the results in a dictionary and print it.

#### Assessment idea
Given `data = {"temp": 22.5, "humidity": 60}`, ask how to print `"Temperature: 22.5°C"` using an f-string. Answer: `print(f"Temperature: {data['temp']}°C")`.

#### AI generation note
Create a 10-minute animated lesson. Use visual boxes for variables and data structures. Show string formatting with before-and-after examples. Include a short coding challenge.

---

### Chapter 3.3 — Control Flow: Conditionals and Loops

#### Learning objectives
- Use `if`, `elif`, and `else` to make decisions in code.
- Write `for` and `while` loops.
- Iterate over lists, dictionaries, and ranges.
- Apply control flow to sensor threshold logic and menu systems.

#### Detailed lesson content

Control flow lets your program make decisions and repeat actions. On a Raspberry Pi, this is how you respond to button presses, sensor values, timers, and user input.

An `if` statement checks a condition and runs a block of code only if the condition is true:

```python
temperature = 28.0
if temperature > 25.0:
    print("It is warm.")
elif temperature > 20.0:
    print("It is comfortable.")
else:
    print("It is cold.")
```

Indentation defines which lines belong to each branch. The `elif` keyword stands for "else if" and lets you check multiple conditions. The `else` block runs if none of the conditions are true.

A `for` loop repeats a block of code for each item in a sequence. It is the most common loop in Python:

```python
for i in range(5):
    print(i)
```

This prints the numbers 0 through 4. `range()` generates a sequence of numbers. You can also loop over lists:

```python
sensors = ["temperature", "humidity", "light"]
for sensor in sensors:
    print(f"Reading {sensor}...")
```

A `while` loop repeats as long as a condition remains true. It is useful when the number of iterations is not known in advance:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

Loop control keywords include `break`, which exits the loop immediately, and `continue`, which skips the rest of the current iteration and moves to the next. These are useful for handling special cases.

In Raspberry Pi projects, loops are everywhere. You might read a sensor in a loop, check a button state, update a display, or fade an LED. A common pattern is the main loop that runs forever until the user stops the program:

```python
from time import sleep

while True:
    # read sensors
    # update outputs
    sleep(1)
```

The `while True` loop runs forever. To stop it safely, you can catch the `KeyboardInterrupt` exception that is raised when the user presses Ctrl+C:

```python
try:
    while True:
        print("Running...")
        sleep(1)
except KeyboardInterrupt:
    print("Stopped by user.")
```

#### Key concepts
- `if`, `elif`, `else`
- `for` loops and `range()`
- `while` loops
- `break` and `continue`
- `while True` main loops and `KeyboardInterrupt`

#### Hands-on activity
Write a script that reads a list of temperature values and prints a warning for each value above 30°C. Then modify it to count how many readings are above the threshold and stop early if three consecutive readings are too high.

#### Assessment idea
Trace the output of a nested loop that prints a 3x3 grid of coordinates, or ask learners to write a loop that blinks an LED five times using `gpiozero`.

#### AI generation note
Create a 10-minute lesson. Use a thermostat example for conditionals and a conveyor belt animation for loops. Show a real main loop with Ctrl+C handling.

---

### Chapter 3.4 — Functions, Modules, and Libraries

#### Learning objectives
- Define and call custom functions with parameters and return values.
- Organize code into modules and import them into other scripts.
- Use Python's standard library and third-party libraries.
- Install packages with `pip` and manage project dependencies.

#### Detailed lesson content

Functions are reusable blocks of code that perform a specific task. They make programs easier to read, test, and maintain. In Python, you define a function with the `def` keyword:

```python
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

temp_f = celsius_to_fahrenheit(25)
print(temp_f)
```

Functions can have default parameter values, multiple parameters, and return multiple values as a tuple:

```python
def describe_sensor(name, value, unit="units"):
    return f"{name}: {value} {unit}"

print(describe_sensor("Temperature", 22.5, "°C"))
print(describe_sensor("Humidity", 60, "%"))
```

A module is a Python file that contains functions, classes, and variables. You can import modules into other programs. Python's standard library includes modules for many common tasks:

- `time` and `datetime` for working with dates and delays.
- `json` for reading and writing JSON data.
- `csv` for working with CSV files.
- `os` and `sys` for interacting with the operating system.
- `random` for generating random numbers.
- `math` and `statistics` for calculations.

For example, to read a JSON configuration file:

```python
import json

with open("config.json", "r") as f:
    config = json.load(f)

print(config["sensor_interval"])
```

Third-party libraries extend Python's capabilities. On Raspberry Pi, you will use libraries such as `gpiozero`, `RPi.GPIO`, `smbus2`, `spidev`, `picamera2`, `flask`, and `paho-mqtt`. You install these with `pip`, Python's package installer.

It is best practice to use a virtual environment for each project. A virtual environment is an isolated Python environment that keeps project dependencies separate from the system Python. To create and use one:

```bash
python3 -m venv myproject_env
source myproject_env/bin/activate
pip install gpiozero flask
```

When the environment is active, packages you install with `pip` go into the project folder instead of the system. To deactivate, type `deactivate`.

Organizing code into functions and modules is especially important on the Raspberry Pi because projects often combine hardware control, data logging, networking, and user interfaces. Splitting the code into modules such as `sensors.py`, `display.py`, and `webapp.py` makes the project manageable.

#### Key concepts
- Defining functions with `def`
- Parameters, return values, default arguments
- Importing standard library and third-party modules
- `pip` and virtual environments
- Code organization for Raspberry Pi projects

#### Hands-on activity
Create a module called `conversions.py` with functions to convert between Celsius and Fahrenheit, and between centimeters and inches. Write a second script that imports `conversions` and uses it to process a list of sensor readings.

#### Assessment idea
Ask: "Why should you use a virtual environment when installing Python libraries for a project?" Answer: it isolates dependencies and avoids conflicts with system packages.

#### AI generation note
Create a 10-minute lesson. Use a kitchen analogy: modules are ingredient stations, functions are recipes. Show creating a virtual environment and installing `gpiozero`. Demonstrate importing a custom module.

---

### Chapter 3.5 — File Handling, Data Logging, and Working with APIs

#### Learning objectives
- Read from and write to text, CSV, and JSON files.
- Append data to log files with timestamps.
- Fetch data from web APIs using the `requests` library.
- Parse JSON responses and handle errors gracefully.

#### Detailed lesson content

Most Raspberry Pi projects need to store data. You might log temperature readings, save configuration settings, or record events. Python makes file handling straightforward with the `open()` function.

The recommended way to work with files is using the `with` statement. This ensures the file is closed automatically, even if an error occurs:

```python
with open("notes.txt", "w") as f:
    f.write("First line\n")
    f.write("Second line\n")
```

The second argument to `open()` is the mode. Common modes include:

- `"r"` for reading.
- `"w"` for writing, which overwrites the file.
- `"a"` for appending, which adds to the end without deleting existing content.
- `"r+"` for reading and writing.

To read a file:

```python
with open("notes.txt", "r") as f:
    content = f.read()
    print(content)
```

For data logging, you usually append lines with timestamps. The `datetime` module helps format the current time:

```python
from datetime import datetime

timestamp = datetime.now().isoformat()
line = f"{timestamp},23.5,48\n"

with open("sensor_log.csv", "a") as f:
    f.write(line)
```

CSV files are a simple way to store tabular data. The `csv` module handles quoting and separators correctly:

```python
import csv

with open("readings.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["timestamp", "temperature", "humidity"])
    writer.writerow(["2026-06-30T10:00:00", 23.5, 48])
```

JSON is widely used for configuration files and API data. You can convert Python dictionaries to JSON strings and vice versa:

```python
import json

data = {"temperature": 23.5, "humidity": 48}
json_string = json.dumps(data, indent=2)
print(json_string)

parsed = json.loads(json_string)
print(parsed["temperature"])
```

Web APIs let your Raspberry Pi fetch data from the internet. The `requests` library is the standard tool for this. You may need to install it with `pip install requests`. For example, to get weather data from a public API:

```python
import requests

url = "https://api.open-meteo.com/v1/forecast"
params = {
    "latitude": 51.5,
    "longitude": -0.1,
    "current_weather": "true"
}

try:
    response = requests.get(url, params=params, timeout=10)
    response.raise_for_status()
    data = response.json()
    print(data["current_weather"]["temperature"])
except requests.RequestException as e:
    print(f"Error fetching data: {e}")
```

Error handling is important because networks are unreliable. Always wrap API calls in `try/except` blocks and handle timeouts, connection errors, and unexpected data formats.

#### Key concepts
- `open()` and file modes
- `with` statement for safe file handling
- CSV and JSON data formats
- Data logging with timestamps
- HTTP requests with the `requests` library
- Error handling for file and network operations

#### Hands-on activity
Write a Python script that creates a CSV file called `temperature_log.csv` with columns `timestamp`, `temperature`, and `humidity`. Every 5 seconds, generate a random temperature and humidity value and append a row. Let it run for one minute, then open the CSV file and plot the data in a spreadsheet.

#### Assessment idea
Ask: "What is the difference between opening a file with mode `"w"` and mode `"a"`?" Answer: `"w"` overwrites the file; `"a"` appends to the end.

#### AI generation note
Create an 11-minute lesson. Show file operations in Thonny and the terminal. Build a live data logger and display the growing CSV. Demonstrate an API call and error handling with a simulated network failure.

## Module 4: GPIO and Physical Computing

> **Goal:** Control hardware through the Raspberry Pi's GPIO header using Python, understand digital and analog signals, and build safe, reliable circuits with LEDs, buttons, PWM, and ADC.

---

### Chapter 4.1 — GPIO Fundamentals and Safe Circuit Design

#### Learning objectives
- Explain how the Raspberry Pi GPIO pins work as inputs and outputs.
- Choose between BOARD and BCM numbering and use `gpiozero` conventions.
- Build simple circuits on a breadboard with current-limiting resistors.
- Apply voltage and current limits to protect the Raspberry Pi.

#### Detailed lesson content

The GPIO header is the bridge between the Raspberry Pi and the physical world. Each GPIO pin can be configured as an input or an output under software control. As an output, a pin can send a 3.3V HIGH signal or a 0V LOW signal. As an input, it can read whether an external signal is HIGH or LOW.

The simplest output circuit is an LED. An LED is a diode that emits light when current flows through it. Like all diodes, LEDs allow current to flow in only one direction. The longer leg, called the anode, connects toward the positive supply. The shorter leg, called the cathode, connects toward ground. LEDs must be used with a current-limiting resistor; otherwise they draw too much current and burn out.

To calculate the resistor value, use Ohm's Law. A typical red LED has a forward voltage drop of about 1.8V and a safe current of 10 mA. The GPIO pin supplies 3.3V. The voltage across the resistor is 3.3V minus 1.8V, which is 1.5V. Using Ohm's Law, R = V / I = 1.5V / 0.010A = 150Ω. A standard 220Ω resistor is a safe and common choice. With 220Ω, the current is about 6.8 mA, which is bright enough for indicator LEDs and well within the Pi's limits.

To build the circuit, place the LED and resistor in series between the GPIO pin and ground. When the GPIO pin is HIGH, current flows from the pin, through the resistor and LED, to ground, and the LED lights up.

GPIO pins on the Raspberry Pi are not 5V tolerant. Connecting a 5V signal to a GPIO pin can permanently damage the SoC. If you need to interface with 5V logic, use a logic level shifter or a voltage divider. A voltage divider made with two resistors can reduce a 5V signal to about 3.3V, but a dedicated level shifter is safer and more reliable.

Each GPIO pin can source or sink up to about 16 mA, and the total current across all GPIO pins combined should stay below 50 mA. This is much less than an Arduino pin can provide. For devices that need more current, such as motors, relays, or multiple LEDs, use external drivers. A simple NPN transistor can switch a higher current using a small GPIO current. A motor driver module such as the L298N or L293D can control DC motors and stepper motors safely.

Always power off the Raspberry Pi before connecting or disconnecting circuits to the GPIO header. A momentary short circuit between a 5V pin and a GPIO pin can destroy the board. Use a breadboard and jumper wires carefully, and double-check your wiring before applying power.

#### Key concepts
- GPIO as input and output
- LEDs, anode, cathode, current-limiting resistors
- Ohm's Law for resistor selection
- 3.3V logic and 5V tolerance
- Current limits and external drivers
- Safe wiring practices

#### Hands-on activity
Build a circuit with an LED and a 220Ω resistor connected to GPIO 17. Calculate the expected current. Use a multimeter to measure the voltage across the resistor when the LED is on, and calculate the actual current. Compare it to your calculation.

#### Assessment idea
Ask: "You connect a 5V sensor output directly to a Raspberry Pi GPIO pin. What is the risk?" Answer: the GPIO pin is not 5V tolerant; the sensor output can damage the Pi. A level shifter or voltage divider should be used.

#### AI generation note
Create a 10-minute lesson with a real breadboard demonstration. Show LED orientation, resistor color bands, and Ohm's Law calculation. Include a safety warning graphic about 5V and short circuits.

---

### Chapter 4.2 — Digital Outputs and Inputs with gpiozero

#### Learning objectives
- Install and use the `gpiozero` library.
- Control LEDs and simple digital outputs.
- Read buttons and switches as digital inputs.
- Understand the difference between `Button` and `DigitalInputDevice`.

#### Detailed lesson content

`gpiozero` is the official Python library for controlling GPIO pins on the Raspberry Pi. It is designed to be beginner-friendly while still being powerful enough for advanced projects. It works on all modern Raspberry Pi models, including the Pi 5, because it automatically selects the correct backend, such as `lgpio` on newer boards.

The core idea of `gpiozero` is object-oriented. Instead of configuring pins manually, you create objects that represent components. For example, an LED object represents a physical LED connected to a GPIO pin.

First, make sure `gpiozero` is installed. It is pre-installed on Raspberry Pi OS, but you can install it with:

```bash
sudo apt install python3-gpiozero
```

Here is the classic Blink program:

```python
from gpiozero import LED
from time import sleep

led = LED(17)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

In this code, `LED(17)` creates an LED object connected to GPIO 17, which is physical pin 11. The `on()` and `off()` methods control the LED. The `blink()` method can simplify the code:

```python
from gpiozero import LED

led = LED(17)
led.blink()

input("Press Enter to stop...")
```

`gpiozero` uses BCM numbering by default. This means `LED(17)` refers to GPIO 17, not physical pin 17. You can change to BOARD numbering if you prefer, but BCM is more common in Python tutorials.

Reading a button is just as simple. Connect one side of a momentary pushbutton to GPIO 2 and the other side to ground. `gpiozero` enables the internal pull-up resistor automatically when you create a Button object:

```python
from gpiozero import Button
from time import sleep

button = Button(2)

while True:
    if button.is_pressed:
        print("Button is pressed")
    else:
        print("Button is not pressed")
    sleep(0.1)
```

When the button is not pressed, the internal pull-up resistor keeps the pin HIGH. When the button is pressed, it connects the pin to ground, and the pin reads LOW.

`gpiozero` also supports event-based programming. Instead of checking the button state repeatedly in a loop, you can assign functions to button events:

```python
from gpiozero import LED, Button

led = LED(17)
button = Button(2)

def toggle_led():
    led.toggle()

button.when_pressed = toggle_led

input("Press Enter to exit...")
```

This program toggles the LED each time the button is pressed. Event-based code is cleaner and more efficient than polling, especially for projects with multiple inputs.

#### Key concepts
- `gpiozero` library and object-oriented GPIO control
- BCM numbering and physical pin mapping
- `LED`, `Button`, `DigitalInputDevice` classes
- Internal pull-up resistors
- Event-driven programming with `when_pressed`

#### Hands-on activity
Build a circuit with an LED on GPIO 17 and a button on GPIO 2. Write a Python script using `gpiozero` that turns the LED on when the button is held down and off when it is released. Then modify it so the button toggles the LED on each press.

#### Assessment idea
Ask: "In `gpiozero`, what is the difference between `button.is_pressed` and `button.when_pressed`?" Answer: `is_pressed` checks the state immediately, while `when_pressed` assigns a function to run automatically when the event occurs.

#### AI generation note
Create a 12-minute practical demonstration. Wire the circuit live, type the code in Thonny, and run it. Show polling first, then refactor to event-based code. Highlight the internal pull-up concept with an animation.

---

### Chapter 4.3 — PWM and Analog Output

#### Learning objectives
- Explain Pulse Width Modulation and how it simulates analog output.
- Use `gpiozero` to fade LEDs and control servo motors with PWM.
- Identify hardware PWM-capable pins on the Raspberry Pi.
- Understand the difference between hardware and software PWM.

#### Detailed lesson content

The Raspberry Pi's GPIO pins are digital. They can only be HIGH or LOW. However, many real-world effects need variable output, such as dimming an LED or controlling motor speed. PWM solves this by turning the pin on and off very quickly. The duty cycle, or the percentage of time the pin is on, determines the average power delivered to the load.

When an LED is driven by PWM at 50% duty cycle, it receives full power half the time and no power half the time. Because the switching happens faster than the human eye can perceive, the LED appears half as bright. Similarly, a motor receiving PWM at 75% duty cycle runs at about three-quarters of full speed.

In `gpiozero`, the `PWMLED` class makes fading easy:

```python
from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)

while True:
    led.value = 0.0
    sleep(0.5)
    led.value = 0.5
    sleep(0.5)
    led.value = 1.0
    sleep(0.5)
```

The `value` property accepts a number between 0 and 1, where 0 is off and 1 is fully on. Values in between produce varying brightness.

To create a smooth fade effect, you can use a loop:

```python
from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)

while True:
    for brightness in range(0, 101):
        led.value = brightness / 100
        sleep(0.02)
    for brightness in range(100, -1, -1):
        led.value = brightness / 100
        sleep(0.02)
```

Servo motors are controlled by PWM. A servo expects a pulse every 20 milliseconds. The width of the pulse determines the position. A 1.5 ms pulse typically centers the servo, 1.0 ms moves it to one extreme, and 2.0 ms moves it to the other. `gpiozero` provides a `Servo` class that handles this timing:

```python
from gpiozero import Servo
from time import sleep

servo = Servo(17)

servo.min()
sleep(1)
servo.mid()
sleep(1)
servo.max()
sleep(1)
servo.detach()
```

The Raspberry Pi has hardware PWM on GPIO 12, 13, 18, and 19. Hardware PWM is generated by dedicated circuitry and is very precise. Software PWM can be used on any GPIO pin but is created by the CPU and may be less stable under heavy load. For most beginner projects, `gpiozero` handles PWM transparently and you do not need to worry about the difference.

#### Key concepts
- PWM, duty cycle, frequency
- `PWMLED` and fading LEDs
- `Servo` class and pulse width control
- Hardware PWM pins: GPIO 12, 13, 18, 19
- Software PWM on any GPIO pin

#### Hands-on activity
Build a circuit with an LED on GPIO 17. Write a script that fades the LED in and out smoothly. Then add a second LED on GPIO 27 and make the two LEDs fade in opposite directions.

#### Assessment idea
Ask: "If a PWM signal has a duty cycle of 25%, what percentage of full power does the load receive on average?" Answer: 25%.

#### AI generation note
Create a 10-minute lesson with an oscilloscope-style animation of PWM waveforms. Show the LED at different brightness levels and a servo moving through its range. Explain hardware vs. software PWM with a comparison chart.

---

### Chapter 4.4 — Reading Analog Sensors with an ADC

#### Learning objectives
- Explain why the Raspberry Pi needs an Analog-to-Digital Converter to read analog sensors.
- Interface an MCP3008 ADC with the Raspberry Pi using SPI.
- Read analog values from potentiometers and sensors.
- Convert raw ADC values into meaningful units.

#### Detailed lesson content

The Raspberry Pi's GPIO pins are digital. They can only tell whether a signal is HIGH or LOW. Many sensors, however, produce analog signals that vary continuously. A potentiometer, a light-dependent resistor, and many temperature sensors all output analog voltages. To read these with a Raspberry Pi, you need an Analog-to-Digital Converter, or ADC.

An ADC measures an analog voltage and converts it into a digital number. A 10-bit ADC, such as the MCP3008, divides the input range into 1024 steps. If the reference voltage is 3.3V, a reading of 0 means 0V and a reading of 1023 means 3.3V.

The MCP3008 is a popular ADC for Raspberry Pi. It has eight input channels and communicates using the SPI protocol. SPI uses four wires: MOSI, MISO, SCLK, and CE0. On the Raspberry Pi, these are GPIO 10, GPIO 9, GPIO 11, and GPIO 8, respectively. You must enable SPI using `raspi-config` or the Raspberry Pi Configuration tool before using the MCP3008.

The wiring between an MCP3008 and a Raspberry Pi is as follows:

- MCP3008 VDD to 3.3V
- MCP3008 VREF to 3.3V
- MCP3008 AGND to GND
- MCP3008 CLK to GPIO 11 (SCLK)
- MCP3008 DOUT to GPIO 9 (MISO)
- MCP3008 DIN to GPIO 10 (MOSI)
- MCP3008 CS to GPIO 8 (CE0)
- MCP3008 DGND to GND

In Python, you can read the MCP3008 using the `gpiozero` `MCP3008` class:

```python
from gpiozero import MCP3008
from time import sleep

adc = MCP3008(channel=0)

while True:
    print(adc.value)
    sleep(0.5)
```

The `adc.value` property returns a number between 0 and 1. To convert it to a voltage, multiply by 3.3:

```python
voltage = adc.value * 3.3
print(f"Voltage: {voltage:.2f} V")
```

For a potentiometer connected across 3.3V and ground, the voltage at the wiper varies from 0V to 3.3V as you turn the knob. Reading this voltage lets you create a variable control for brightness, volume, or motor speed.

For a light-dependent resistor in a voltage divider with a fixed resistor, the voltage changes with light intensity. You can calibrate the sensor by recording the ADC value in bright light and in darkness, then map the range to a 0–100% scale.

#### Key concepts
- Analog signals vs. digital GPIO
- ADC resolution and reference voltage
- MCP3008 pinout and SPI wiring
- Enabling SPI on Raspberry Pi OS
- Reading ADC values with `gpiozero`
- Voltage conversion and calibration

#### Hands-on activity
Connect a potentiometer to channel 0 of an MCP3008. Write a Python script that reads the potentiometer value and prints both the raw ADC value and the voltage. Then modify the script to control the brightness of a PWM LED based on the potentiometer position.

#### Assessment idea
If an MCP3008 returns a raw value of 512 with a 3.3V reference, what is the input voltage? Answer: 512 / 1023 * 3.3 ≈ 1.65V.

#### AI generation note
Create an 11-minute lesson. Show the MCP3008 wiring diagram and a live reading in the terminal. Animate how the ADC converts a continuous voltage into discrete numbers. Demonstrate the potentiometer-controlled LED project.

## Module 5: Sensors, Actuators, and Communication Protocols

> **Goal:** Interface with real sensors and actuators, use I2C, SPI, and UART, and build more complex physical computing projects with displays, motors, and cameras.

---

### Chapter 5.1 — Environmental Sensors: Temperature, Humidity, Light, and Motion

#### Learning objectives
- Interface a DHT11 or DHT22 temperature and humidity sensor with the Raspberry Pi.
- Read light levels using an LDR and an ADC.
- Detect motion with a PIR sensor.
- Calibrate sensors and handle common errors such as checksum failures and timeouts.

#### Detailed lesson content

Sensors are the input devices that let a Raspberry Pi perceive the physical world. Environmental sensors measure conditions such as temperature, humidity, light, and motion. Each sensor produces an electrical signal that the Pi can read and convert into useful information.

The DHT11 and DHT22 are popular digital temperature and humidity sensors. The DHT11 is cheaper and less accurate, with a temperature accuracy of about ±2°C and humidity accuracy of about ±5%. The DHT22 is more accurate and has a wider range, but it is slightly more expensive. Both sensors use a single-wire protocol that requires precise timing, so they cannot be read with a simple `Button` class. Instead, you use the `Adafruit_DHT` library or `dht11` package.

To read a DHT22 connected to GPIO 4:

```python
import Adafruit_DHT

sensor = Adafruit_DHT.DHT22
pin = 4

humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

if humidity is not None and temperature is not None:
    print(f"Temp: {temperature:.1f}°C, Humidity: {humidity:.1f}%")
else:
    print("Failed to read sensor")
```

A more modern approach uses the `gpiozero` `DHT22` device or the `adafruit-circuitpython-dht` library. The `adafruit-circuitpython-dht` library requires the `libgpiod2` system package and works well on Raspberry Pi OS Bookworm.

A light-dependent resistor, or LDR, changes resistance based on light intensity. Because the Raspberry Pi has no analog inputs, you use an MCP3008 ADC, as described in the previous module. Connect the LDR in a voltage divider with a fixed resistor, usually 10kΩ, between 3.3V and ground. The junction between the LDR and the resistor connects to an ADC channel. In bright light, the LDR resistance is low, so the ADC reads a high voltage. In darkness, the LDR resistance is high, so the ADC reads a low voltage.

PIR, or Passive Infrared, sensors detect motion by sensing changes in infrared radiation. Warm bodies such as humans emit infrared light. A PIR sensor outputs a HIGH signal when it detects motion. On the Raspberry Pi, a PIR sensor can be connected directly to a GPIO pin because it usually operates at 3.3V or has a 3.3V-compatible output. Use the `gpiozero` `MotionSensor` class:

```python
from gpiozero import MotionSensor
from time import sleep

pir = MotionSensor(18)

while True:
    if pir.motion_detected:
        print("Motion detected!")
    else:
        print("No motion")
    sleep(1)
```

PIR sensors usually have two potentiometers for adjusting sensitivity and the time the output stays HIGH after detection. Event-based code is often better than polling:

```python
from gpiozero import MotionSensor, LED

pir = MotionSensor(18)
led = LED(17)

pir.when_motion = led.on
pir.when_no_motion = led.off

input("Press Enter to exit...")
```

Calibration and error handling are essential with sensors. DHT sensors sometimes return `None` due to timing issues. Always check for valid readings before using them. LDR readings depend on the specific resistor and lighting conditions, so record minimum and maximum values under known conditions and map the output to a percentage.

#### Key concepts
- DHT11 and DHT22 temperature/humidity sensors
- LDR and voltage divider circuits
- PIR motion sensor principles
- Sensor calibration and error handling
- Event-based sensor code

#### Hands-on activity
Connect a DHT22 sensor to GPIO 4 and print temperature and humidity every 2 seconds. Add error handling so the program does not crash when a reading fails. Then connect a PIR sensor to GPIO 18 and turn on an LED for 5 seconds after motion is detected.

#### Assessment idea
Ask: "Why does a Raspberry Pi need an ADC to read an LDR, but not to read a DHT22 or PIR sensor?" Answer: the LDR produces an analog voltage, while the DHT22 and PIR produce digital signals.

#### AI generation note
Create a 12-minute lesson. Show each sensor's wiring and a live Serial-style terminal output. Explain PIR sensitivity adjustments with close-ups. Include a troubleshooting segment for DHT read failures.

---

### Chapter 5.2 — Distance Measurement: Ultrasonic Sensors

#### Learning objectives
- Measure distance using an HC-SR04 ultrasonic sensor.
- Understand the trigger/echo timing principle.
- Use `gpiozero` or manual timing to read the sensor.
- Apply error handling for out-of-range readings.

#### Detailed lesson content

Distance sensors allow a Raspberry Pi to detect how far away an object is. The HC-SR04 ultrasonic distance sensor is one of the most popular. It works by sending out a short burst of high-frequency sound and listening for the echo. Because sound travels at a known speed, the time between the pulse and the echo can be converted into distance.

The HC-SR04 has four pins: VCC, Trig, Echo, and GND. VCC connects to 5V, GND to ground, Trig to a GPIO output pin, and Echo to a GPIO input pin. The Echo pin outputs 5V, which is too high for the Raspberry Pi's 3.3V GPIO inputs. Therefore, you should use a voltage divider on the Echo pin to reduce the voltage to around 3.3V. A common voltage divider uses a 1kΩ resistor and a 2kΩ resistor.

To use the sensor, send a 10-microsecond HIGH pulse to the Trig pin. The sensor then sends eight ultrasonic pulses and sets the Echo pin HIGH. The Echo pin stays HIGH for the amount of time it takes the sound to travel to the object and back. You measure this duration and convert it to distance.

`gpiozero` provides a `DistanceSensor` class that simplifies this:

```python
from gpiozero import DistanceSensor
from time import sleep

sensor = DistanceSensor(echo=24, trigger=23)

while True:
    print(f"Distance: {sensor.distance * 100:.1f} cm")
    sleep(1)
```

If you want to understand the timing manually, you can use the `time` module:

```python
import RPi.GPIO as GPIO
import time

TRIG = 23
ECHO = 24

GPIO.setmode(GPIO.BCM)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

try:
    while True:
        GPIO.output(TRIG, False)
        time.sleep(0.05)
        GPIO.output(TRIG, True)
        time.sleep(0.00001)
        GPIO.output(TRIG, False)

        while GPIO.input(ECHO) == 0:
            pulse_start = time.time()
        while GPIO.input(ECHO) == 1:
            pulse_end = time.time()

        pulse_duration = pulse_end - pulse_start
        distance = pulse_duration * 17150
        print(f"Distance: {distance:.1f} cm")
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()
```

The factor 17150 comes from the speed of sound, approximately 343 meters per second at room temperature, divided by 2 to account for the round trip, and converted to centimeters. The sensor can measure from about 2 cm to 400 cm, though accuracy decreases beyond a few meters.

Error handling is important because ultrasonic sensors can produce unreliable readings when the target is too close, too far, angled, or made of soft sound-absorbing material. Always validate readings and consider using a median filter or averaging multiple samples.

#### Key concepts
- HC-SR04 ultrasonic sensor pins and wiring
- Trigger and Echo signals
- Voltage divider for Echo pin
- Speed of sound and distance formula
- `gpiozero` `DistanceSensor`
- Manual timing with `RPi.GPIO`

#### Hands-on activity
Build a parking sensor with an HC-SR04. Make a buzzer beep faster as an object gets closer. Add a PIR sensor to activate the distance measurement only when motion is detected.

#### Assessment idea
If the Echo pulse lasts 1500 microseconds, what is the distance to the object? Answer: 1500 * 0.034 / 2 = 25.5 cm.

#### AI generation note
Create an 11-minute lesson. Animate the ultrasonic pulse traveling and returning. Show the voltage divider calculation. Demonstrate the parking sensor project with changing beep rates.

---

### Chapter 5.3 — Displays: Character LCD and OLED

#### Learning objectives
- Connect a 16x2 or 20x4 character LCD using I2C.
- Display sensor data and messages on an LCD with Python.
- Use a monochrome OLED display with the SSD1306 driver.
- Format output for readable screens.

#### Detailed lesson content

Displays make your projects interactive by showing data, status, and menus. The classic character LCD, often a 16x2 or 20x4 model, displays text using predefined character blocks. Modern versions include an I2C backpack, which reduces the number of wires from many parallel pins to just four: VCC, GND, SDA, and SCL.

Before using I2C devices, you must enable the I2C interface on the Raspberry Pi. Open `raspi-config`, go to Interface Options, select I2C, and enable it. Then reboot. You can check whether devices are detected with the `i2cdetect` command:

```bash
sudo apt install i2c-tools
sudo i2cdetect -y 1
```

This prints a grid showing the addresses of connected I2C devices. A common LCD I2C address is `0x27` or `0x3F`.

In Python, you can use the `lcd1602` or `rpi_lcd` library, or the `gpiozero` `LCD` class if available. Here is an example using `rpi_lcd`:

```python
from rpi_lcd import LCD
from time import sleep

lcd = LCD()
lcd.text("Hello, Pi!", 1)
lcd.text("Cohortia", 2)
sleep(2)
lcd.clear()
```

OLED displays are more flexible than character LCDs. A 0.96-inch monochrome OLED with an SSD1306 driver can display text, shapes, and simple graphics. It also uses I2C, so wiring is simple. The `luma.oled` library is a popular choice:

```bash
pip install luma.oled
```

Example:

```python
from luma.core.interface.serial import i2c
from luma.core.render import canvas
from luma.oled.device import ssd1306
from PIL import ImageFont

serial = i2c(port=1, address=0x3C)
device = ssd1306(serial)

with canvas(device) as draw:
    draw.text((0, 0), "Hello, OLED!", fill="white")
    draw.text((0, 20), "Temp: 23.5 C", fill="white")
```

When displaying sensor data, formatting matters. Floating-point numbers can be hard to read with too many decimal places. Use Python's f-strings to control precision. Clear old text before writing new values to avoid leftover characters on the screen. Update the display only when values change or at a moderate rate to avoid flicker.

#### Key concepts
- 16x2/20x4 character LCD with I2C backpack
- Enabling I2C and `i2cdetect`
- I2C addresses and libraries
- SSD1306 OLED display
- `luma.oled` and Pillow text rendering
- Formatting and updating displays

#### Hands-on activity
Connect a 16x2 I2C LCD and display temperature and humidity from a DHT22 sensor. Update the display every 2 seconds. Then replace the LCD with an OLED and add a small bar graph for humidity.

#### Assessment idea
Ask: "You run `sudo i2cdetect -y 1` and see the number `27` in the output. What does it mean?" Answer: an I2C device is present at address `0x27`.

#### AI generation note
Create a 10-minute lesson. Compare LCD and OLED side by side. Show the I2C wiring and `i2cdetect` output. Walk through formatting sensor data and demonstrate clearing old values.

---

### Chapter 5.4 — Motors, Relays, and Actuators

#### Learning objectives
- Control the position of a servo motor with `gpiozero`.
- Drive a DC motor using a motor driver module.
- Use a relay to switch high-voltage devices safely.
- Understand external power requirements for actuators.

#### Detailed lesson content

Actuators are the output devices that let a Raspberry Pi move or control things in the physical world. The three most common types are servos, DC motors, and relays.

A servo motor can be positioned at a specific angle. Standard hobby servos can move from 0 to 180 degrees. They have three wires: power, ground, and signal. The signal wire connects to a GPIO pin capable of PWM. `gpiozero` provides a `Servo` class:

```python
from gpiozero import Servo
from time import sleep

servo = Servo(17)

servo.min()
sleep(1)
servo.mid()
sleep(1)
servo.max()
sleep(1)
servo.detach()
```

Some servos are continuous rotation servos, which rotate like DC motors rather than moving to a fixed angle. They are useful for small robots and wheels.

DC motors spin continuously when power is applied. They draw more current than a Raspberry Pi GPIO pin can supply, so you cannot connect them directly. Instead, use a motor driver module such as the L298N or L293D. These modules allow you to control motor speed with PWM and direction with additional logic pins. The `gpiozero` `Motor` class simplifies control:

```python
from gpiozero import Motor
from time import sleep

motor = Motor(forward=17, backward=18)

motor.forward(speed=0.5)
sleep(2)
motor.stop()
```

The motor driver's power supply must be separate from the Raspberry Pi's 5V pin for larger motors. Always connect the grounds of the two power supplies together so they share a common reference.

A relay is an electrically operated switch. It lets a Raspberry Pi control high-voltage devices such as lamps, fans, or pumps using a low-voltage signal. Relay modules designed for microcontrollers usually include an optocoupler and a flyback diode to protect the Pi. You can control a relay with the `gpiozero` `OutputDevice` class:

```python
from gpiozero import OutputDevice
from time import sleep

pump = OutputDevice(20)

pump.on()
sleep(5)
pump.off()
```

Never work with mains voltage unless you have proper training and safety equipment. Even low-voltage projects with relays should be double-checked for loose wires and exposed conductors.

#### Key concepts
- Servo motor control with `Servo`
- DC motor and motor driver modules
- External power supplies and common ground
- Relay modules and high-voltage switching
- Safety practices with actuators

#### Hands-on activity
Connect a servo motor and make it sweep from 0 to 180 degrees and back. Then add a potentiometer to control the servo position manually. If a motor driver is available, make a DC motor spin forward and backward at different speeds.

#### Assessment idea
Ask: "Why should a DC motor not be powered directly from a Raspberry Pi GPIO pin?" Answer: motors draw too much current and can damage the pin or cause the Pi to reset.

#### AI generation note
Create a 12-minute lesson. Show a servo sweeping, a DC motor speed controlled by PWM, and a relay module clicking. Emphasize external power wiring with diagrams and safety warnings.

---

### Chapter 5.5 — I2C, SPI, and UART Communication

#### Learning objectives
- Enable and use I2C, SPI, and UART interfaces on the Raspberry Pi.
- Explain the differences between these three communication protocols.
- Connect and communicate with I2C sensors and displays.
- Use SPI for high-speed devices and UART for serial modules.

#### Detailed lesson content

The Raspberry Pi supports several standard communication protocols that allow it to talk to a wide range of sensors, displays, and modules. The three most important are I2C, SPI, and UART.

I2C, pronounced "I-squared-C," uses two wires: SDA for data and SCL for the clock signal. Each device on the bus has a unique 7-bit address. Multiple devices can share the same two wires as long as their addresses are different. This makes I2C ideal when you have limited GPIO pins. On the Raspberry Pi, GPIO 2 is SDA and GPIO 3 is SCL. Enable I2C with `raspi-config`.

Common I2C devices include LCD displays, OLED displays, real-time clocks, temperature sensors, and the Sense HAT. To find connected devices, use `sudo i2cdetect -y 1`.

SPI, pronounced "S-P-I," uses four wires: MOSI, MISO, SCLK, and CE0. Additional devices can share MOSI, MISO, and SCLK but need their own chip select pin, such as CE1. SPI is generally faster than I2C and is used for devices such as ADCs, some displays, and radio modules. On the Raspberry Pi, MOSI is GPIO 10, MISO is GPIO 9, SCLK is GPIO 11, CE0 is GPIO 8, and CE1 is GPIO 7. Enable SPI with `raspi-config`.

UART, or Universal Asynchronous Receiver-Transmitter, is a serial communication protocol that uses two wires: TX for transmitting and RX for receiving. It is commonly used to communicate with GPS modules, GSM modems, Arduino boards, and serial consoles. On the Raspberry Pi, GPIO 14 is TX and GPIO 15 is RX. By default, these pins are used for a serial console, so you may need to disable the console in `raspi-config` before using them for your own devices.

When choosing a protocol, consider speed, pin count, and device support. I2C uses the fewest pins and supports multiple devices on a shared bus, but it is slower. SPI is faster but uses more pins. UART is simple and widely supported but requires matching baud rates and is usually point-to-point.

#### Key concepts
- I2C: SDA, SCL, addresses, `i2cdetect`
- SPI: MOSI, MISO, SCLK, CE
- UART: TX, RX, baud rate
- Enabling interfaces with `raspi-config`
- Speed vs. pin-count trade-offs

#### Hands-on activity
Enable I2C and SPI on your Pi. Connect an I2C OLED display and an SPI MCP3008 ADC at the same time. Write a Python script that reads an analog value from the MCP3008 and displays it on the OLED.

#### Assessment idea
Ask: "You need to connect a display, a temperature sensor, and a real-time clock, and you are running out of GPIO pins. Which protocol would you prefer and why?" Expected answer: I2C, because all three devices can share the same two wires if they have different addresses.

#### AI generation note
Create an 11-minute lesson. Use animated diagrams to show data traveling on I2C, SPI, and UART buses. Show a real `i2cdetect` output and a simple UART GPS read. Compare the three protocols with a feature table.

---

### Chapter 5.6 — Raspberry Pi Camera Module

#### Learning objectives
- Connect and enable the Raspberry Pi Camera Module.
- Capture still images and video using `picamera2`.
- Process images with OpenCV for basic computer vision.
- Build a simple motion-triggered camera project.

#### Detailed lesson content

The Raspberry Pi has a dedicated camera connector that supports the official Raspberry Pi Camera Module. Camera modules are available in standard and wide-angle versions, with and without infrared support. The Camera Module 3 adds autofocus. The High Quality Camera supports interchangeable lenses.

Before using the camera, enable the camera interface in `raspi-config` under Interface Options. On Raspberry Pi OS Bookworm and later, the recommended Python library is `picamera2`. On older systems, the legacy `picamera` library was used.

Capture a still image:

```python
from picamera2 import Picamera2
from time import sleep

camera = Picamera2()
camera.start()
sleep(2)  # allow time for auto exposure
camera.capture_file("image.jpg")
camera.stop()
print("Image saved")
```

Capture video:

```python
from picamera2 import Picamera2

camera = Picamera2()
camera.start_and_record_video("video.mp4", duration=10)
```

For basic computer vision, you can combine the camera with OpenCV. OpenCV can detect faces, track colors, and perform many other vision tasks. It can be installed with:

```bash
sudo apt install python3-opencv
```

A simple motion detection project compares frames and detects changes:

```python
import cv2
from picamera2 import Picamera2
from gpiozero import MotionSensor

pir = MotionSensor(18)
camera = Picamera2()
camera.start()

while True:
    pir.wait_for_motion()
    frame = camera.capture_array()
    cv2.imwrite("motion.jpg", frame)
    print("Motion captured")
    pir.wait_for_no_motion()
```

Computer vision projects can be computationally intensive. The Raspberry Pi 4 and Pi 5 handle basic OpenCV tasks well, but complex deep-learning models may require optimization or an accelerator such as the Coral USB Accelerator.

#### Key concepts
- Raspberry Pi Camera Module variants
- Enabling the camera interface
- `picamera2` for images and video
- OpenCV installation and basic use
- Motion-triggered camera projects

#### Hands-on activity
Connect a Camera Module and take a photo. Write a script that captures an image when a button is pressed. If you have OpenCV installed, add a feature that detects faces and draws rectangles around them.

#### Assessment idea
Ask: "Which library should you use for the Raspberry Pi camera on Raspberry Pi OS Bookworm?" Answer: `picamera2`.

#### AI generation note
Create a 10-minute lesson. Show camera module installation and a live photo capture. Demonstrate face detection with OpenCV overlays. Explain camera connector orientation carefully.

## Module 6: Networking, IoT, and Web Projects

> **Goal:** Connect the Raspberry Pi to the internet, build a web-controlled GPIO interface, publish sensor data with MQTT, and understand IoT security.

---

### Chapter 6.1 — Building a Simple Web Server with Flask

#### Learning objectives
- Install Flask and create a basic web application.
- Serve HTML pages and handle routes.
- Control GPIO pins from a web browser.
- Read sensor data and display it on a web page.

#### Detailed lesson content

Flask is a lightweight Python web framework. It is perfect for Raspberry Pi projects because it is easy to learn, has few dependencies, and can serve a web interface from the Pi itself. With Flask, you can create a dashboard that controls LEDs, displays sensor readings, and triggers actions from any device on the network.

Install Flask in a virtual environment:

```bash
python3 -m venv web_env
source web_env/bin/activate
pip install flask gpiozero
```

A minimal Flask application looks like this:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Raspberry Pi!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
```

The `host="0.0.0.0"` setting makes the server accessible from other devices on the network, not just from the Pi itself. Save the script as `app.py` and run it with `python3 app.py`. Then open a browser and navigate to `http://raspberrypi.local:5000` or the Pi's IP address followed by `:5000`.

To control an LED from the web, you can add more routes:

```python
from flask import Flask
from gpiozero import LED

app = Flask(__name__)
led = LED(17)

@app.route("/")
def index():
    return """
    <h1>Pi LED Control</h1>
    <a href="/on"><button>Turn On</button></a>
    <a href="/off"><button>Turn Off</button></a>
    """

@app.route("/on")
def turn_on():
    led.on()
    return "LED is ON. <a href='/'>Back</a>"

@app.route("/off")
def turn_off():
    led.off()
    return "LED is OFF. <a href='/'>Back</a>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

This is simple but has a limitation: each button click navigates to a new page. A better approach uses POST requests and JavaScript, but for beginners, link-based control is a good starting point.

To display sensor data, create a route that reads a sensor and returns formatted HTML:

```python
from flask import Flask
from gpiozero import MCP3008

app = Flask(__name__)
adc = MCP3008(channel=0)

@app.route("/")
def index():
    voltage = adc.value * 3.3
    return f"<h1>Sensor Reading</h1><p>Voltage: {voltage:.2f} V</p>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

For production use, Flask's built-in server is not ideal. You can deploy with Gunicorn or run the app behind a reverse proxy with Nginx. For learning and local networks, the built-in server is fine.

#### Key concepts
- Flask web framework
- Routes, views, and HTML responses
- Controlling GPIO from a browser
- Displaying sensor data on a web page
- Virtual environments for web projects

#### Hands-on activity
Build a Flask app with three buttons: Turn On LED, Turn Off LED, and Read Sensor. The sensor page should read an LDR or potentiometer and display the value. Test the app from your phone on the same Wi-Fi network.

#### Assessment idea
Ask: "Why is `host='0.0.0.0'` used when running Flask on a Raspberry Pi?" Answer: it allows other devices on the network to access the web server.

#### AI generation note
Create a 12-minute tutorial. Show Flask installation, route creation, and a live demo where a phone controls a Pi LED. Include a simple HTML button layout and explain client-server interaction.

---

### Chapter 6.2 — IoT Messaging with MQTT

#### Learning objectives
- Understand the MQTT publish-subscribe model.
- Install and configure an MQTT broker such as Mosquitto.
- Publish sensor data from the Raspberry Pi using `paho-mqtt`.
- Subscribe to topics and control GPIO from MQTT messages.

#### Detailed lesson content

MQTT is a lightweight messaging protocol designed for IoT devices. It uses a publish-subscribe model where devices send messages to topics and other devices listen to those topics. A central server called a broker handles message routing. MQTT is ideal for Raspberry Pi projects because it works well over unreliable networks and uses very little bandwidth.

Key MQTT concepts:

- **Broker:** the server that receives and forwards messages. Popular brokers include Mosquitto, HiveMQ, and cloud brokers such as AWS IoT Core.
- **Client:** any device that connects to the broker, such as a Raspberry Pi or a smartphone.
- **Topic:** a string that identifies the subject of a message, such as `home/livingroom/temperature`.
- **Publish:** sending a message to a topic.
- **Subscribe:** listening for messages on a topic.
- **QoS:** Quality of Service level, which controls message delivery reliability.

Install Mosquitto broker on the Raspberry Pi:

```bash
sudo apt install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl start mosquitto
```

Test the broker from the command line. Open two terminal windows. In one, subscribe to a topic:

```bash
mosquitto_sub -t "test/topic"
```

In the other, publish a message:

```bash
mosquitto_pub -t "test/topic" -m "Hello MQTT"
```

The subscriber should immediately display the message.

To publish sensor data from Python, install `paho-mqtt`:

```bash
pip install paho-mqtt
```

Example publisher:

```python
import paho.mqtt.client as mqtt
from time import sleep
from gpiozero import DistanceSensor

client = mqtt.Client()
client.connect("localhost", 1883, 60)

sensor = DistanceSensor(echo=24, trigger=23)

while True:
    distance = sensor.distance * 100
    client.publish("pi/distance", f"{distance:.1f}")
    print(f"Published: {distance:.1f} cm")
    sleep(2)
```

Example subscriber that controls an LED:

```python
import paho.mqtt.client as mqtt
from gpiozero import LED

led = LED(17)

def on_message(client, userdata, msg):
    command = msg.payload.decode()
    print(f"Received: {command}")
    if command == "ON":
        led.on()
    elif command == "OFF":
        led.off()

client = mqtt.Client()
client.on_message = on_message
client.connect("localhost", 1883, 60)
client.subscribe("pi/led")
client.loop_forever()
```

MQTT is the foundation of many smart home and industrial IoT systems. You can connect multiple Raspberry Pis, Arduino boards with Wi-Fi, and mobile apps to the same broker, creating a coordinated network of devices.

#### Key concepts
- MQTT broker, client, topic
- Publish-subscribe pattern
- Mosquitto installation and testing
- `paho-mqtt` publisher and subscriber
- QoS levels

#### Hands-on activity
Set up Mosquitto on your Pi. Write a publisher that sends temperature readings from a DHT22 to `home/temperature` every 5 seconds. Write a subscriber that listens to `home/led` and turns an LED on or off based on received commands. Test both from the command line and from Python.

#### Assessment idea
Ask: "In MQTT, what is the role of the broker, and what is the difference between publishing and subscribing?" Answer: the broker routes messages; publishing sends messages to a topic, and subscribing receives messages from a topic.

#### AI generation note
Create a 12-minute lesson. Use a diagram of a broker with multiple clients. Show command-line MQTT testing and then the Python code. Animate messages flowing between publisher and subscriber.

---

### Chapter 6.3 — Sending Data to the Cloud

#### Learning objectives
- Understand cloud platforms for IoT data storage and visualization.
- Send sensor data to a cloud service using HTTP requests.
- Use platforms such as ThingSpeak, Adafruit IO, or a custom Flask endpoint.
- Discuss API keys, HTTPS, and basic security.

#### Detailed lesson content

Once your Raspberry Pi can collect sensor data, you often want to store that data in the cloud. Cloud platforms let you view data from anywhere, analyze trends, set alerts, and integrate with other services. There are many cloud options for IoT, ranging from simple data logging services to full enterprise platforms.

For beginners, **ThingSpeak** is a popular choice because it has a free tier and accepts HTTP requests directly from the Pi. **Adafruit IO** is another beginner-friendly platform with dashboards and feeds. For larger projects, you might use AWS IoT Core, Google Cloud IoT, Azure IoT Hub, or a self-hosted database.

The general pattern is:

1. The Pi reads a sensor.
2. The Pi formats the data, often as JSON.
3. The Pi sends an HTTP POST or GET request to the cloud API.
4. The cloud service stores the data and displays it on a dashboard.

Here is an example of sending data to ThingSpeak using `requests`:

```python
import requests
from time import sleep
from gpiozero import DistanceSensor

API_KEY = "YOUR_THINGSPEAK_API_KEY"
sensor = DistanceSensor(echo=24, trigger=23)

while True:
    distance = sensor.distance * 100
    url = f"https://api.thingspeak.com/update?api_key={API_KEY}&field1={distance:.1f}"
    try:
        response = requests.get(url, timeout=10)
        print(f"Sent: {distance:.1f} cm, response: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error: {e}")
    sleep(20)
```

ThingSpeak limits free accounts to one update every 15 seconds, so the script waits 20 seconds between sends.

For a custom cloud endpoint, you could create a Flask server on another Pi or a cloud virtual machine:

```python
from flask import Flask, request

app = Flask(__name__)

@app.route("/data", methods=["POST"])
def receive_data():
    data = request.json
    print(data)
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

Security is important when sending data to the cloud. Always use HTTPS when possible. Never hard-code API keys in public repositories. Store keys in environment variables or configuration files that are not committed to version control. On the Pi, you can create a `.env` file and load it with the `python-dotenv` library.

#### Key concepts
- Cloud IoT platforms: ThingSpeak, Adafruit IO, AWS IoT, Azure IoT
- HTTP GET and POST for data logging
- API keys and HTTPS
- JSON payloads
- Keeping credentials secure

#### Hands-on activity
Create a free ThingSpeak account and a channel with one field. Write a Python script that sends temperature data from a DHT22 to ThingSpeak every 20 seconds. View the data on the ThingSpeak dashboard.

#### Assessment idea
Ask: "Why should API keys not be stored directly in Python scripts that are shared online?" Answer: because anyone with the key can access or abuse your account.

#### AI generation note
Create an 11-minute lesson. Show creating a ThingSpeak channel, copying the API key, and running the Pi script. Display the live dashboard and explain HTTPS and API key security with a warning slide.

---

### Chapter 6.4 — IoT Security and Best Practices

#### Learning objectives
- Identify common security risks for Raspberry Pi and IoT devices.
- Secure SSH with key-based authentication and disable password login.
- Configure a firewall with `ufw`.
- Keep software updated and follow the principle of least privilege.

#### Detailed lesson content

Every device connected to a network is a potential target for attackers. Raspberry Pi projects are no exception. A Pi running a web server, MQTT broker, or cloud client can be exploited if it is not properly secured. Security should be considered from the beginning, not added as an afterthought.

The first step is to change default credentials and use strong passwords. If you still have an old image with the default `pi` user, create a new user and delete the default account. Use a password manager to generate unique passwords.

For SSH, key-based authentication is much more secure than passwords. To set it up, generate an SSH key pair on your main computer:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Copy the public key to the Pi:

```bash
ssh-copy-id alex@raspberrypi.local
```

Then disable password authentication by editing `/etc/ssh/sshd_config`:

```bash
PasswordAuthentication no
PermitRootLogin no
```

Restart the SSH service:

```bash
sudo systemctl restart ssh
```

A firewall controls which network traffic is allowed. The `ufw` firewall is easy to use on Raspberry Pi OS:

```bash
sudo apt install ufw
sudo ufw allow 22/tcp      # SSH
sudo ufw allow 80/tcp      # HTTP
sudo ufw allow 1883/tcp    # MQTT
sudo ufw enable
```

Only open ports that you actually need. If you do not need SSH from the internet, do not expose port 22 externally.

Keep the system updated:

```bash
sudo apt update
sudo apt upgrade
```

Disable services you do not use. If your project does not need Bluetooth, consider disabling it. If you do not need the graphical desktop, use Raspberry Pi OS Lite to reduce the attack surface.

Finally, follow the principle of least privilege. Run services as a non-root user whenever possible. Do not store sensitive data in plain text. Use HTTPS for web interfaces. Monitor logs with `journalctl` to detect unusual activity.

#### Key concepts
- Strong passwords and removing default users
- SSH key-based authentication
- `ufw` firewall
- Disabling unnecessary services
- Keeping software updated
- HTTPS and least privilege

#### Hands-on activity
Set up SSH key-based authentication for your Pi and disable password login. Install and configure `ufw` to allow only SSH and HTTP. Verify the firewall status with `sudo ufw status`.

#### Assessment idea
Ask: "What command disables password authentication for SSH, and why is this more secure?" Answer: set `PasswordAuthentication no` in `/etc/ssh/sshd_config`; key-based authentication is harder to brute-force.

#### AI generation note
Create a 10-minute security-focused lesson. Use a hacker-vs-defender visual style. Show generating SSH keys, configuring `ufw`, and updating the system. End with a checklist infographic.

## Module 7: Capstone Project and Advanced Topics

> **Goal:** Integrate all skills into a complete project and explore advanced topics such as running programs at boot, backing up systems, troubleshooting, and next steps.

---

### Chapter 7.1 — Running Programs Automatically at Boot

#### Learning objectives
- Use `systemd` services to run Python scripts at boot.
- Schedule startup tasks with `crontab` `@reboot`.
- Manage long-running background processes reliably.
- Log output from background services.

#### Detailed lesson content

Many Raspberry Pi projects need to start automatically when the board powers on. You might want a sensor logger, a web server, or an MQTT client to begin running without anyone logging in. There are several ways to achieve this, and choosing the right method depends on the complexity of the task.

The simplest method is `crontab` with `@reboot`:

```bash
crontab -e
```

Add a line such as:

```bash
@reboot /usr/bin/python3 /home/alex/myscript.py >> /home/alex/myscript.log 2>&1
```

This runs the script once at boot and redirects both standard output and errors to a log file. It is easy to set up but does not automatically restart the script if it crashes.

For production projects, `systemd` is the better choice. `systemd` is the service manager used by Raspberry Pi OS. It can start a script at boot, restart it if it fails, and manage logging automatically.

Create a service file at `/etc/systemd/system/myproject.service`:

```ini
[Unit]
Description=My Raspberry Pi Project
After=network.target

[Service]
ExecStart=/usr/bin/python3 /home/alex/myproject/main.py
WorkingDirectory=/home/alex/myproject
User=alex
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable myproject.service
sudo systemctl start myproject.service
```

Check the status and logs:

```bash
sudo systemctl status myproject.service
journalctl -u myproject.service -f
```

The `Restart=always` setting ensures the script restarts if it exits unexpectedly. The `User=alex` setting runs the script as a normal user instead of root, which improves security.

#### Key concepts
- `@reboot` in cron
- `systemd` service files
- `systemctl` commands
- Automatic restart and logging
- Running services as non-root users

#### Hands-on activity
Write a simple Python script that logs a message every 10 seconds. Create a `systemd` service to run it at boot. Reboot the Pi and verify that the log file is being written. Check the service status with `systemctl`.

#### Assessment idea
Ask: "What is the main advantage of using a `systemd` service instead of `@reboot` in cron?" Answer: `systemd` can restart the script automatically if it crashes.

#### AI generation note
Create a 10-minute system administration lesson. Show editing the service file, enabling it, rebooting, and checking logs. Use a flowchart to explain the `systemd` lifecycle.

---

### Chapter 7.2 — Backups, Imaging, and Disaster Recovery

#### Learning objectives
- Back up a Raspberry Pi SD card to an image file.
- Restore an SD card from an image.
- Use `rsync` for incremental file backups.
- Document a project so it can be rebuilt.

#### Detailed lesson content

SD cards can fail, become corrupted, or be accidentally overwritten. A reliable backup strategy is essential for any serious Raspberry Pi project. There are two main approaches: full image backups and file-level backups.

A full image backup creates a copy of the entire SD card. You can use Raspberry Pi Imager to read the card back to an image file on your computer. On Linux or macOS, you can also use the `dd` command:

```bash
sudo dd if=/dev/sdX of=backup.img bs=4M status=progress
```

Replace `/dev/sdX` with the device path of your SD card. Be extremely careful with `dd`; writing to the wrong device can destroy data. To restore the image to a new card:

```bash
sudo dd if=backup.img of=/dev/sdX bs=4M status=progress
```

For regular file-level backups, `rsync` is efficient because it only copies files that have changed. You can back up your home directory to an external drive or another computer:

```bash
rsync -avz --delete /home/alex/ /mnt/backup/pi_home/
```

The `--delete` option removes files from the backup that no longer exist on the source, keeping the backup in sync.

You can also create backups over the network:

```bash
rsync -avz /home/alex/projects/ alex@backupserver:/backups/pi/
```

For projects that change frequently, consider automating backups with a `cron` job that runs every night. Store important configuration files, scripts, and data in version control with Git so you can track changes and collaborate.

Disaster recovery also means documenting your project. A good README file should include:

- Project description and goals
- Hardware list with part numbers
- Wiring diagram or photos
- Software dependencies and installation steps
- How to run the project
- How to back up and restore

#### Key concepts
- Full SD card images with Imager or `dd`
- File-level backups with `rsync`
- Incremental backups and `--delete`
- Automated backup with cron
- Project documentation and README files

#### Hands-on activity
Create a full image backup of your Raspberry Pi SD card using Raspberry Pi Imager. Then create an `rsync` script that backs up your project folder to a USB drive every day at midnight using cron.

#### Assessment idea
Ask: "What is the difference between a full image backup and an `rsync` backup?" Answer: a full image backup copies the entire SD card, while `rsync` copies files incrementally and is faster for frequent backups.

#### AI generation note
Create a 9-minute lesson. Show the Imager backup process and an `rsync` command in action. Emphasize the dangers of `dd` and the importance of documentation.

---

### Chapter 7.3 — Troubleshooting and Debugging

#### Learning objectives
- Diagnose common boot, network, and GPIO problems.
- Use logs and command-line tools to find errors.
- Debug Python programs with print statements and Thonny's debugger.
- Apply a systematic approach to hardware and software issues.

#### Detailed lesson content

Troubleshooting is a core skill for anyone working with Raspberry Pi. Problems can be hardware-related, software-related, or a combination of both. A systematic approach saves time and reduces frustration.

When a Pi does not boot, the first thing to check is the power supply. A red power LED that blinks or turns off indicates insufficient power. A steady red LED with no green activity LED may mean the SD card is missing, corrupted, or not flashed correctly. Re-flash the SD card and try again.

If the Pi boots but you cannot connect via SSH, check the network. Make sure the Pi and your computer are on the same network. Find the IP address from your router's admin page or by connecting a monitor. Test connectivity with `ping`.

For GPIO problems, use a multimeter to verify voltages. Check that components are connected to the correct pins. Remember that `gpiozero` uses BCM numbering by default. If an LED does not light, check its orientation and resistor value. If a sensor returns garbage data, verify wiring, enable the correct interface in `raspi-config`, and check library compatibility.

Python errors usually produce a traceback. Read the traceback from the bottom up. The last line tells you the type of error, and the lines above show where it occurred. Common errors include:

- `ModuleNotFoundError`: a required library is not installed.
- `PermissionError`: the script lacks permission to access a file or device.
- `RuntimeError: Unknown platform`: the GPIO library does not support your Pi model.

Use `print()` statements or Python's `logging` module to trace program execution. Thonny's debugger lets you step through code line by line and inspect variables, which is helpful for understanding logic errors.

For services that fail at boot, check the logs with `journalctl`. For example:

```bash
journalctl -u myproject.service
```

A useful troubleshooting mindset is to isolate variables. Test one component at a time. If a project with a sensor and a display does not work, test the sensor alone, then the display alone, then combine them.

#### Key concepts
- Boot problem diagnosis with LEDs
- Network connectivity checks
- Multimeter use for GPIO debugging
- Reading Python tracebacks
- Logging with `print()` and `journalctl`
- Isolating variables in troubleshooting

#### Hands-on activity
Introduce a deliberate bug into a working GPIO script, such as using the wrong pin number or forgetting to enable SPI. Practice finding and fixing the bug using the techniques in this chapter.

#### Assessment idea
Ask: "You run a Python script and see `ModuleNotFoundError: No module named 'gpiozero'`. What are two ways to fix it?" Answers: install the package with `sudo apt install python3-gpiozero` or `pip install gpiozero`.

#### AI generation note
Create a 10-minute debugging lesson. Use a split screen showing a buggy script, a multimeter, and the terminal. Walk through diagnosing and fixing a real problem step by step.

---

### Chapter 7.4 — Capstone Project Brief: Smart Home Environment Station

#### Project description
Design and build a smart home environment station that monitors indoor conditions and makes them available through a web dashboard and MQTT. The station should measure temperature, humidity, and light level, display the current readings on an OLED or LCD, log data to a CSV file, publish readings to an MQTT topic, and host a simple Flask web page that shows the latest values. Optionally, it should trigger a fan or warning LED when temperature exceeds a threshold.

#### Required components
- Raspberry Pi 4 or 5 with Raspberry Pi OS
- DHT22 or DHT11 temperature/humidity sensor
- Light-dependent resistor with an MCP3008 ADC, or a digital light sensor module
- 16x2 I2C LCD or 0.96-inch OLED display
- LED, resistor, and buzzer for alerts
- Relay module and small fan or second LED (optional)
- Breadboard, jumper wires, resistors

#### Functional requirements
1. Read temperature and humidity every 5 seconds and light level every 10 seconds.
2. Display the latest readings on the screen with clear labels.
3. Log all readings with timestamps to a CSV file on the Pi.
4. Publish temperature and humidity to MQTT topics such as `home/temperature` and `home/humidity`.
5. Host a Flask web page that shows the latest readings and refreshes automatically or on demand.
6. Turn on an alert LED when temperature exceeds a user-defined threshold.
7. Use a `systemd` service or cron job to start the main monitoring script automatically at boot.
8. Document the project with a README, wiring diagram, and backup instructions.

#### Recommended milestones
- Day 1: Set up the Pi, test each sensor individually, and print values to the terminal.
- Day 2: Add the display and format the output.
- Day 3: Implement CSV logging and MQTT publishing.
- Day 4: Build the Flask web dashboard and alert logic.
- Day 5: Add auto-start service, assemble, test, and document.

#### Assessment criteria
- All required sensors produce readable values.
- Display is clear and updates without flicker.
- CSV log file grows with correctly formatted rows.
- MQTT messages are received by a subscriber or command-line tool.
- Web dashboard is accessible from another device on the network.
- Alert activates at the configured threshold.
- Project includes documentation and a wiring diagram.

#### AI generation note
Create a 12-minute capstone overview video. Walk through the block diagram, wiring, expected code structure, and grading criteria. Show example photos or renders of a finished enclosure. Encourage learners to customize the project.

## Module 8: Assessments and Final Examination

> **Goal:** Evaluate understanding of Raspberry Pi hardware, Linux, Python, GPIO, sensors, actuators, communication protocols, networking, IoT, and project design.

---

### Module quizzes

Each module includes a short quiz that checks conceptual understanding and practical skills. Answers are provided for self-assessment.

#### Module 1 quiz: Introduction to Raspberry Pi
1. What is the main difference between a Raspberry Pi and an Arduino?
   - The Raspberry Pi is a full Linux computer capable of multitasking and networking; Arduino is a microcontroller that runs one program at a time.
2. Which Raspberry Pi model is best for a low-power, space-constrained IoT project?
   - Raspberry Pi Zero 2 W or Pi Zero W.
3. What does the 40-pin GPIO header provide?
   - Power pins, ground pins, general-purpose input/output pins, and special function pins for I2C, SPI, UART, and PWM.
4. Why is the official Raspberry Pi power supply recommended?
   - It provides a stable 5V and sufficient current, preventing low-voltage warnings and instability.
5. What is the voltage level of the Raspberry Pi GPIO pins?
   - 3.3V logic.

#### Module 2 quiz: Raspberry Pi OS and Linux Essentials
1. What command lists files with detailed permissions?
   - `ls -l` or `ls -la`.
2. What do the letters `r`, `w`, and `x` mean in file permissions?
   - Read, write, and execute.
3. What is the purpose of `sudo`?
   - It runs a command with administrative privileges.
4. What does `crontab -e` do?
   - Opens the cron table for editing scheduled tasks.
5. How do you check the Raspberry Pi's CPU temperature?
   - `vcgencmd measure_temp`.

#### Module 3 quiz: Python Programming on Raspberry Pi
1. What is the difference between a list and a dictionary?
   - A list stores ordered items by index; a dictionary stores key-value pairs.
2. How do you create a virtual environment in Python?
   - `python3 -m venv env_name`.
3. What is an f-string?
   - A string prefixed with `f` that allows embedded expressions, such as `f"Value: {x}"`.
4. What does the `with` statement do when opening a file?
   - It ensures the file is closed automatically, even if an error occurs.
5. Which library is commonly used for HTTP requests in Python?
   - `requests`.

#### Module 4 quiz: GPIO and Physical Computing
1. Why must an LED have a current-limiting resistor?
   - Without it, the LED and GPIO pin can draw too much current and be damaged.
2. What is the logic voltage of Raspberry Pi GPIO pins?
   - 3.3V.
3. What is the default numbering scheme used by `gpiozero`?
   - BCM numbering.
4. What does PWM stand for, and what does it do?
   - Pulse Width Modulation; it simulates analog output by varying the duty cycle of a digital signal.
5. Why does a Raspberry Pi need an ADC to read a potentiometer?
   - The Pi's GPIO pins are digital; an ADC converts the analog voltage into a digital value.

#### Module 5 quiz: Sensors, Actuators, and Communication Protocols
1. How does an HC-SR04 ultrasonic sensor measure distance?
   - It sends a sound pulse and measures the time until the echo returns.
2. What two wires does I2C use?
   - SDA and SCL.
3. Why is a voltage divider needed on the Echo pin of an HC-SR04?
   - The Echo pin outputs 5V, which can damage the Pi's 3.3V GPIO input.
4. What command detects connected I2C devices?
   - `sudo i2cdetect -y 1`.
5. Which library is recommended for the Raspberry Pi Camera Module on Bookworm?
   - `picamera2`.

#### Module 6 quiz: Networking, IoT, and Web Projects
1. What does `host='0.0.0.0'` do in a Flask app?
   - It allows other devices on the network to access the Flask server.
2. What is the role of an MQTT broker?
   - It receives messages from publishers and forwards them to subscribers.
3. Name one beginner-friendly cloud platform for logging IoT data.
   - ThingSpeak or Adafruit IO.
4. Why should API keys not be hard-coded in public scripts?
   - Because anyone who sees the key can access or abuse the associated account.
5. What command enables the `ufw` firewall?
   - `sudo ufw enable`.

#### Module 7 quiz: Capstone and Advanced Topics
1. What is the main advantage of a `systemd` service over `@reboot` in cron?
   - `systemd` can automatically restart the script if it crashes.
2. What command creates a full image backup of an SD card on Linux?
   - `sudo dd if=/dev/sdX of=backup.img bs=4M`.
3. What does `journalctl -u myproject.service` show?
   - Logs for the specified systemd service.
4. What is the principle of least privilege?
   - Giving a user or process only the permissions it needs.
5. What should a good project README include?
   - Description, hardware list, wiring, dependencies, setup steps, usage, and backup instructions.

---

### Final examination

#### Section A: Multiple choice (20 points)
1. Which Raspberry Pi model is most suitable for a high-performance desktop replacement?
   - a) Pi Zero W  b) Pi 3 Model B+  c) Pi 4 or Pi 5  d) Pi Pico
2. Which command updates the package list on Raspberry Pi OS?
   - a) `sudo apt upgrade`  b) `sudo apt update`  c) `sudo apt install`  d) `sudo apt list`
3. What does `chmod 755 script.py` set?
   - a) Read, write, execute for owner; read and execute for group and others
   - b) Read and write for everyone
   - c) Execute only for owner
   - d) Full permissions for everyone
4. Which Python data structure stores key-value pairs?
   - a) List  b) Tuple  c) Dictionary  d) Set
5. What is the BCM GPIO number for physical pin 11 on the Raspberry Pi?
   - a) 17  b) 18  c) 27  d) 22
6. Why is a current-limiting resistor used with an LED?
   - a) To increase brightness  b) To protect the LED and GPIO pin from excess current  c) To reduce voltage to 3.3V  d) To filter noise
7. Which protocol uses the SDA and SCL lines?
   - a) SPI  b) UART  c) I2C  d) MQTT
8. What is the purpose of an MQTT topic?
   - a) To store messages permanently  b) To identify the subject of a message  c) To encrypt messages  d) To assign IP addresses
9. Which Flask argument allows network access from other devices?
   - a) `debug=True`  b) `port=5000`  c) `host='0.0.0.0'`  d) `threaded=True`
10. What should you do before exposing SSH to the internet?
    - a) Use the default password  b) Disable password authentication and use key-based authentication  c) Open port 22 in the router  d) Nothing

#### Section B: Short answer (30 points)
1. Explain the difference between BOARD and BCM GPIO numbering. Which does `gpiozero` use by default?
2. Describe the steps to install Raspberry Pi OS using Raspberry Pi Imager and configure Wi-Fi before the first boot.
3. What is the purpose of a virtual environment in Python, and how do you create and activate one?
4. How does PWM allow a digital pin to control LED brightness?
5. Why should a voltage divider or level shifter be used when connecting a 5V sensor output to a Raspberry Pi GPIO pin?

#### Section C: Code analysis (20 points)
Given the following Python script:

```python
from gpiozero import LED, Button
from signal import pause

led = LED(17)
button = Button(2)

button.when_pressed = led.toggle

pause()
```

1. What hardware is connected to GPIO 17 and GPIO 2?
2. What happens when the button is pressed?
3. What is the purpose of `pause()`?
4. How would you modify the code so the LED turns on only while the button is held down?

#### Section D: Practical problem (30 points)
Design a Python program for a Raspberry Pi that does the following:

- Reads temperature from a DHT22 sensor connected to GPIO 4 every 10 seconds.
- Prints the temperature to the terminal.
- Appends the timestamp and temperature to a CSV file called `temperature_log.csv`.
- Publishes the temperature to an MQTT topic called `home/temperature` using a broker at `localhost`.
- Exits cleanly when the user presses Ctrl+C.

Write the complete Python script. Include necessary imports, the main loop, error handling, and cleanup.

---

### Final exam answer key

#### Section A
1. c) Pi 4 or Pi 5
2. b) `sudo apt update`
3. a) Read, write, execute for owner; read and execute for group and others
4. c) Dictionary
5. a) 17
6. b) To protect the LED and GPIO pin from excess current
7. c) I2C
8. b) To identify the subject of a message
9. c) `host='0.0.0.0'`
10. b) Disable password authentication and use key-based authentication

#### Section B
1. BOARD numbering uses physical pin numbers 1–40. BCM numbering uses the GPIO numbers assigned by the Broadcom chip. `gpiozero` uses BCM by default.
2. Download Raspberry Pi Imager, select the Pi model, choose Raspberry Pi OS, select the SD card, click Edit Settings to configure hostname, username, password, Wi-Fi, locale, and SSH, then click Write.
3. A virtual environment isolates project dependencies from the system Python. Create with `python3 -m venv env_name` and activate with `source env_name/bin/activate`.
4. PWM rapidly switches the pin on and off. The duty cycle controls the average power delivered, making the LED appear dimmer or brighter.
5. The Raspberry Pi GPIO pins are not 5V tolerant. A 5V signal can damage the SoC. A voltage divider reduces the voltage, and a level shifter is safer.

#### Section C
1. An LED is connected to GPIO 17, and a button is connected to GPIO 2.
2. Each press of the button toggles the LED on or off.
3. `pause()` keeps the program running so it can respond to button events.
4. Use `button.when_pressed = led.on` and `button.when_released = led.off`.

#### Section D (sample solution)

```python
import Adafruit_DHT
import paho.mqtt.client as mqtt
import csv
from datetime import datetime
from time import sleep

SENSOR = Adafruit_DHT.DHT22
PIN = 4
CSV_FILE = "temperature_log.csv"
MQTT_BROKER = "localhost"
MQTT_TOPIC = "home/temperature"

client = mqtt.Client()
client.connect(MQTT_BROKER, 1883, 60)

try:
    while True:
        humidity, temperature = Adafruit_DHT.read_retry(SENSOR, PIN)
        if temperature is not None:
            timestamp = datetime.now().isoformat()
            print(f"{timestamp} - Temperature: {temperature:.1f}°C")

            with open(CSV_FILE, "a", newline="") as f:
                writer = csv.writer(f)
                writer.writerow([timestamp, f"{temperature:.1f}"])

            client.publish(MQTT_TOPIC, f"{temperature:.1f}")
        else:
            print("Failed to read sensor")

        sleep(10)
except KeyboardInterrupt:
    print("\nExiting...")
finally:
    client.disconnect()
```

---

## Course conclusion

By completing this course, learners should be able to:

- Select and set up the right Raspberry Pi model and accessories for a project.
- Install, configure, and remotely manage Raspberry Pi OS using the Linux terminal.
- Write Python programs for data processing, file handling, APIs, and GPIO control.
- Build safe circuits with LEDs, buttons, PWM devices, and analog sensors through an ADC.
- Interface with I2C, SPI, and UART devices including displays, sensors, and cameras.
- Create Flask web dashboards, publish sensor data with MQTT, and log data to the cloud.
- Secure, back up, troubleshoot, and document a complete Raspberry Pi project.

This syllabus is designed to serve as a detailed template for future Cohortia courses. Every module and chapter includes the content, context, examples, activities, assessments, and AI generation guidance needed to produce high-quality slides, audio, or video lessons automatically.
