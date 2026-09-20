---
course_id: red-hat-certified-engineer-rhce
title: Red Hat Certified Engineer (RHCE)
provider: Cohortia
platform: Cohortia
level: Intermediate–Advanced
type: Certificate
duration: Exam
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Operating Systems & System Administration
skills: Ansible automation, system management
original_reference: Red Hat / Online
ownership_note: Cohortia curates and rebuilds this content to provide a structured learning experience and does not claim sole ownership of third-party source material.
---

## Course Overview

The Red Hat Certified Engineer (RHCE) course is meticulously designed to prepare system administrators for the challenges of managing large, complex Red Hat Enterprise Linux (RHEL) environments through automation. This program focuses intensely on the practical application of Ansible for automating system administration tasks, which is the core requirement for the current RHCE exam (EX294). Learners will move beyond manual command-line operations to embrace idempotent, scalable, and repeatable automation solutions, a critical skill set in modern IT infrastructure management. We will delve into the architecture of Ansible, mastering inventory management, playbook creation, and the effective use of modules to control various system components.

This Cohortia course provides a comprehensive journey through the essential domains of RHEL system administration, all viewed through the lens of Ansible automation. We will cover everything from managing services, processes, and storage to configuring networking, securing systems, and handling user accounts—all using Ansible playbooks and roles. The curriculum is structured to build proficiency progressively, starting with Ansible fundamentals and advancing to complex automation scenarios, including error handling, templating, and vault usage for sensitive data. Emphasis is placed on understanding the underlying RHEL concepts while simultaneously developing robust Ansible solutions.

Beyond theoretical knowledge, this course is heavily geared towards hands-on practical application. Learners will engage with numerous labs and exercises designed to simulate real-world system administration challenges. The goal is not just to pass the RHCE exam but to cultivate a deep understanding of automation principles and best practices that are immediately applicable in a professional setting. We will explore common pitfalls, debugging strategies, and performance considerations to ensure that the automation solutions developed are not only functional but also efficient and maintainable.

By the end of this program, participants will possess the confidence and expertise to automate virtually any system administration task on RHEL. They will be adept at designing, implementing, and troubleshooting Ansible-based automation solutions, making them invaluable assets in any organization leveraging Red Hat technologies. This course is ideal for experienced Linux system administrators looking to validate their skills and elevate their career trajectory by mastering the art of automation with Ansible.

Upon successful completion of this course, you will be able to:

*   Design and implement Ansible inventories and configuration files for managing diverse RHEL environments.
*   Develop robust Ansible playbooks using YAML syntax to automate a wide array of system administration tasks.
*   Automate the management of RHEL services, processes, and cron jobs efficiently and reliably.
*   Configure and manage local and network storage, including filesystems, LVM, and mounts, using Ansible.
*   Automate network interface configuration, firewall rules, and DNS client settings on RHEL systems.
*   Manage user accounts, groups, sudo access, and SSH key-based authentication with Ansible.
*   Implement security enhancements, including SELinux policy management and firewall configuration, through automation.
*   Utilize advanced Ansible features such as roles, templates, and vaults to create scalable and secure automation solutions.
*   Debug Ansible playbooks and troubleshoot common automation issues effectively.
*   Apply best practices for Ansible playbook development, version control, and performance optimization.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | RHCE Exam & Ansible Fundamentals | 4 |
| 2 | Core Ansible Playbook Development | 5 |
| 3 | Automating System Services & Processes | 5 |
| 4 | Ansible for Storage Management | 6 |
| 5 | Network Configuration with Ansible | 6 |
| 6 | User, Group, and Security Automation | 7 |
| 7 | Advanced Ansible Features & Roles | 7 |
| 8 | Troubleshooting, Optimization & Exam Prep | 8 |

Total chapters: 48
---

## Module 1: RHCE Exam & Ansible Fundamentals

This module lays the groundwork for your journey to becoming a Red Hat Certified Engineer. We'll start by demystifying the RHCE exam itself, understanding its performance-based nature and the critical skills it assesses. From there, we'll dive into the fundamental concepts of Ansible, the primary automation tool emphasized in the RHCE curriculum. You'll learn how to set up Ansible, manage your inventory, and write your first playbooks to automate common system administration tasks, preparing you for more advanced topics in subsequent modules.

### Chapter 1.1 — RHCE Exam Overview and Preparation Strategies

#### Learning objectives
*   Understand the format, objectives, and scoring of the Red Hat Certified Engineer (RHCE) exam (EX294).
*   Identify the key skill domains tested in the RHCE exam, with a focus on Ansible automation.
*   Develop effective study and practice strategies tailored for a performance-based certification.
*   Recognize common pitfalls and learn how to avoid them during the exam.

#### Detailed lesson content
Welcome to your first step towards becoming a Red Hat Certified Engineer! The RHCE certification is a highly respected credential in the IT industry, signifying your ability to automate Red Hat Enterprise Linux (RHEL) system administration tasks using Ansible and other tools. Unlike many certifications that rely on multiple-choice questions, the RHCE exam (EX294) is entirely performance-based. This means you won't be answering theoretical questions; instead, you'll be given a live RHEL environment and a set of practical tasks to complete. Your success hinges on your ability to execute these tasks accurately and efficiently within a specified time limit, typically three to four hours. This hands-on approach ensures that certified professionals possess real-world problem-solving skills, making the RHCE exceptionally valuable to employers.

The core objective of the RHCE exam is to validate your proficiency in automating system administration tasks across a fleet of RHEL systems. This primarily revolves around Ansible automation. You'll be expected to demonstrate skills in configuring Ansible, managing inventories, writing and executing playbooks, and using various Ansible modules to perform tasks such as managing users and groups, configuring network services, deploying software, managing storage, and implementing security policies. It's not just about knowing *how* to use Ansible, but *how to use it effectively* to achieve specific system states. For example, you might be asked to ensure a specific web server package is installed and running on a group of servers, or to create a new user with specific permissions across multiple machines. Every task will require you to think like an administrator automating their daily duties.

Preparing for a performance-based exam requires a different approach than traditional study methods. Rote memorization of commands will only get you so far. Instead, you must focus on hands-on practice, repetition, and understanding the underlying concepts. Set up your own lab environment – virtual machines are excellent for this – and practice every objective listed in Red Hat's official exam objectives. Don't just follow tutorials; try to solve problems independently. Experiment with different Ansible modules, understand their parameters, and learn how to debug when things don't work as expected. Time management is also crucial. During the exam, you'll be under pressure, so practicing tasks under timed conditions can help you build speed and confidence. Break down complex problems into smaller, manageable steps, and always verify your work. A common mistake candidates make is rushing through tasks and forgetting to confirm that the desired state has actually been achieved.

One of the most significant pitfalls in the RHCE exam is misinterpreting the question or failing to read it thoroughly. Each task description is precise and contains all the necessary information. Forgetting a small detail, like a specific port number, a user's primary group, or a file's exact permissions, can lead to points deduction or even complete failure for that task. Another common error is syntax mistakes in Ansible playbooks – YAML is sensitive to indentation, and a single misplaced space can render your playbook unusable. Always validate your YAML syntax before execution. Furthermore, ensure you understand the difference between `ansible.builtin.dnf` and `ansible.builtin.yum` (depending on RHEL version), or `ansible.builtin.service` and `ansible.builtin.systemd`. While Ansible often provides aliases, it's best practice to use the fully qualified collection name for clarity and future compatibility. Finally, always remember to use `become: yes` or `sudo` when your tasks require elevated privileges, and ensure your Ansible control node has proper SSH access to all managed nodes without password prompts. Failing to set up SSH keys correctly is a frequent stumbling block for beginners.

#### Key concepts
*   **Performance-Based Exam:** An examination format where candidates complete practical tasks in a live environment rather than answering theoretical questions.
*   **EX294:** The official exam code for the Red Hat Certified Engineer (RHCE) certification.
*   **Ansible Automation:** The primary skill tested, focusing on using Ansible to automate system administration tasks.
*   **Lab Environment:** A personal setup (e.g., virtual machines) used for hands-on practice and experimentation.
*   **Idempotency:** The property of an operation that, when applied multiple times, produces the same result as if it were applied only once. Ansible modules are designed to be idempotent.
*   **YAML Syntax:** The human-readable data serialization standard used for writing Ansible playbooks, highly sensitive to indentation.

#### Hands-on activity
**Activity: RHCE Study Plan & Lab Setup**

1.  **Review Exam Objectives:** Go to the official Red Hat website and find the current objectives for the RHCE (EX294) exam. List the top 5 areas you feel least confident about.
2.  **Plan Your Lab:** Design a simple virtual machine (VM) lab environment. You'll need at least two RHEL 8 or 9 VMs: one designated as your Ansible Control Node and another as a Managed Node.
    *   **Control Node:** Install Ansible here.
    *   **Managed Node:** This will be a target for your Ansible automation.
3.  **Basic VM Setup:**
    *   Install your chosen RHEL version on both VMs.
    *   Ensure both VMs can communicate via network.
    *   Configure SSH access from the Control Node to the Managed Node using SSH keys (passwordless authentication). This is critical for Ansible.
    *   Create a non-root user on both machines and grant `sudo` privileges to this user on the Managed Node.

**Self-reflection:** What challenges did you face setting up SSH key-based authentication? How did you troubleshoot them?

#### Assessment idea
1.  **Question:** Which of the following best describes the format of the Red Hat Certified Engineer (RHCE) exam (EX294)?
    a) A series of multiple-choice questions covering theoretical concepts.
    b) A hands-on, performance-based exam requiring the completion of practical tasks in a live RHEL environment.
    c) An oral examination with a Red Hat instructor.
    d) A take-home project to be submitted within a week.

    **Correct Answer:** b) A hands-on, performance-based exam requiring the completion of practical tasks in a live RHEL environment.
    **Explanation:** The RHCE exam is renowned for its practical nature. Candidates are presented with a real RHEL system and a set of objectives to achieve, demonstrating their ability to apply system administration and automation skills, primarily with Ansible.

2.  **Question:** You are writing an Ansible playbook to install a package and start a service on a remote RHEL server. You've noticed your playbook fails with permission errors even though the user running Ansible has SSH access. What is the most likely common mistake you've overlooked in your playbook?
    a) Incorrect YAML indentation.
    b) Missing the `hosts:` directive.
    c) Forgetting to include `become: yes` for tasks requiring root privileges.
    d) Not specifying the `name:` parameter for the package module.

    **Correct Answer:** c) Forgetting to include `become: yes` for tasks requiring root privileges.
    **Explanation:** Installing packages and starting/stopping system services typically require root privileges. Without `become: yes` (or `become: true`) in your playbook or task, Ansible will attempt to run these commands as the connecting user, leading to permission denied errors if that user doesn't have the necessary elevated rights.

#### AI generation note
Create a 12-minute video tutorial. Begin with an animated overview of the RHCE exam structure, emphasizing its performance-based nature and the role of Ansible. Transition to a live terminal demo showing how to set up two RHEL 9 VMs (using VirtualBox or KVM) and configure passwordless SSH from the control node to the managed node. Highlight common SSH key setup mistakes and debugging steps. Include on-screen text overlays for key commands and concepts. End with a reflection prompt asking users to share their biggest exam preparation concerns.

---

### Chapter 1.2 — Introduction to Ansible for System Automation

#### Learning objectives
*   Explain the core principles and advantages of Ansible as an automation engine.
*   Describe the basic architecture of Ansible, including control nodes and managed nodes.
*   Install and configure Ansible on a Red Hat Enterprise Linux system.
*   Create and manage a basic static inventory file.
*   Execute ad-hoc Ansible commands to interact with managed nodes.

#### Detailed lesson content
Ansible is a powerful open-source automation engine that simplifies complex IT tasks such as configuration management, application deployment, and orchestration. At its heart, Ansible is designed for simplicity and efficiency. One of its most significant advantages is its **agentless** architecture. Unlike many other automation tools that require a special software agent to be installed and maintained on every managed server, Ansible communicates with managed nodes primarily over standard SSH protocols. This means there's no need to deploy or manage additional daemons, reducing overhead and potential security vulnerabilities. This agentless approach makes Ansible incredibly easy to set up and start using, as long as your control node has SSH access to your target systems.

The basic architecture of Ansible involves two main components: the **control node** and **managed nodes**. The control node is the machine where Ansible is installed and from which you run your automation tasks. This is typically your workstation or a dedicated server. Managed nodes (also known as hosts) are the servers or devices that Ansible manages. These can be physical servers, virtual machines, cloud instances, network devices, or even Windows machines (with specific configurations). Communication between the control node and managed nodes is primarily via SSH for Linux/Unix systems, and WinRM for Windows systems. Ansible uses a declarative language, meaning you describe the desired state of your systems, and Ansible figures out how to get them to that state. This also ties into Ansible's **idempotency**: if a task is run multiple times, it will only make changes if the system is not already in the desired state, preventing unnecessary modifications and ensuring consistency.

Installing Ansible on a Red Hat Enterprise Linux system is straightforward. Since Ansible is included in the AppStream repository for RHEL 8 and 9, you can install it using the `dnf` package manager. First, ensure your system is subscribed and has access to the appropriate repositories. Then, a simple command will get Ansible up and running: `sudo dnf install ansible`. After installation, you can verify it by checking the version: `ansible --version`. This output will show you the Ansible version, Python version, and the paths where Ansible looks for configuration files and modules. It's a good habit to always check the version, especially in production environments, to ensure consistency.

Once Ansible is installed, the next crucial step is to define your **inventory**. The inventory file tells Ansible which hosts it can manage. By default, Ansible looks for `/etc/ansible/hosts`. This file can be in INI or YAML format. For a basic setup, the INI format is very common. You can list individual hosts or group them logically. For example, you might have a group for web servers and another for database servers.

```ini
# /etc/ansible/hosts example
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com
db2.example.com

[all:vars]
ansible_user=devops
ansible_ssh_private_key_file=/home/devops/.ssh/id_rsa
```

In this example, `web1.example.com` and `web2.example.com` are grouped under `[webservers]`. We've also defined global variables under `[all:vars]` to specify the SSH user and private key file, which Ansible will use to connect to all hosts by default. Common mistakes here include incorrect hostnames or IP addresses, or forgetting to specify the correct SSH user if it differs from the user running Ansible. Always ensure your inventory accurately reflects your target environment.

With Ansible installed and your inventory configured, you can start running **ad-hoc commands**. These are single-line commands executed directly from the command line, useful for quick tasks or testing connectivity. The syntax is `ansible <pattern> -m <module_name> -a "<module_arguments>"`. For instance, to verify SSH connectivity to all hosts defined in your inventory, you can use the `ping` module: `ansible all -m ping`. This command will attempt to connect to every host in your inventory and execute the `ping` module, which simply checks if Ansible can communicate with the remote host and execute a basic command. If successful, it will return a "pong" message. If you want to check the uptime of your web servers, you might use: `ansible webservers -m command -a "uptime"`. Remember that ad-hoc commands are great for quick checks, but for complex, repeatable, and version-controlled automation, you'll use playbooks, which we'll cover in the next chapter. A common mistake with ad-hoc commands is forgetting to specify the module (`-m`) or its arguments (`-a`), or attempting to run commands that require elevated privileges without configuring `become` (which is typically done in playbooks or `ansible.cfg`).

#### Key concepts
*   **Agentless:** Ansible does not require any special software to be installed on managed nodes; it uses standard protocols like SSH.
*   **Control Node:** The machine where Ansible is installed and from which automation tasks are initiated.
*   **Managed Node (Host):** A server or device that Ansible manages.
*   **Inventory:** A file (INI or YAML) that lists the hosts Ansible can manage, often grouped logically.
*   **Ad-hoc Command:** A single Ansible command executed directly from the command line, useful for quick, one-off tasks.
*   **`dnf`:** The default package manager for Red Hat Enterprise Linux 8 and 9, used to install Ansible.
*   **`ping` module:** A basic Ansible module used to test connectivity to managed nodes.
*   **Idempotency:** The principle that applying an operation multiple times yields the same result as applying it once.

#### Hands-on activity
**Activity: Install Ansible and Run Your First Ad-Hoc Command**

1.  **Install Ansible:** On your designated Ansible Control Node (RHEL VM), open a terminal and install Ansible:
    ```bash
    sudo dnf install ansible -y
    ```
    Verify the installation:
    ```bash
    ansible --version
    ```
2.  **Create Inventory File:** Create a simple inventory file named `my_inventory.ini` in your home directory (`~/my_inventory.ini`). Replace `your_managed_node_ip` with the actual IP address or hostname of your Managed Node VM.
    ```ini
    # ~/my_inventory.ini
    [servers]
    your_managed_node_ip ansible_user=your_ssh_username ansible_ssh_private_key_file=/home/your_ssh_username/.ssh/id_rsa
    ```
    *   **Important:** Replace `your_ssh_username` with the non-root user you configured on your managed node, and ensure the `id_rsa` path is correct for your SSH key on the control node.
3.  **Test Connectivity with `ping` module:** Run an ad-hoc command to ping your managed node:
    ```bash
    ansible servers -i ~/my_inventory.ini -m ping
    ```
    You should see a `SUCCESS` message with `pong`. If you get an error, troubleshoot your SSH connection or inventory file.
4.  **Run a `command` module ad-hoc command:** Get the uptime of your managed node:
    ```bash
    ansible servers -i ~/my_inventory.ini -m command -a "uptime"
    ```

#### Assessment idea
1.  **Question:** Which of the following is a key advantage of Ansible's architecture compared to tools that require agents on managed nodes?
    a) Faster execution speeds for complex tasks.
    b) Reduced network bandwidth usage.
    c) Simplified setup and maintenance due to agentless communication over SSH.
    d) Enhanced security through encrypted agent-to-server communication.

    **Correct Answer:** c) Simplified setup and maintenance due to agentless communication over SSH.
    **Explanation:** Ansible's agentless nature means there's no need to install, configure, or maintain special software on each managed server, significantly simplifying initial setup and ongoing maintenance compared to agent-based systems.

2.  **Question:** You have just installed Ansible on your control node and created an inventory file at `/home/devops/hosts.ini`. You want to run an ad-hoc command to check the disk space (`df -h`) on all servers in the `webservers` group defined in this inventory. Which command would achieve this?
    a) `ansible webservers -m shell -a "df -h"`
    b) `ansible -i /home/devops/hosts.ini webservers -m command -a "df -h"`
    c) `ansible all -m df -h`
    d) `ansible webservers --inventory /home/devops/hosts.ini --exec "df -h"`

    **Correct Answer:** b) `ansible -i /home/devops/hosts.ini webservers -m command -a "df -h"`
    **Explanation:** This command correctly specifies the inventory file using `-i`, targets the `webservers` group, uses the `command` module (`-m command`) for executing a simple shell command, and passes the command as an argument (`-a "df -h"`). The `shell` module (option a) would also work, but `command` is generally preferred for simple, non-piped commands for security reasons.

#### AI generation note
Produce a 10-minute interactive code demo. Start by explaining Ansible's agentless architecture with a simple diagram. Then, transition to a live terminal showing the `sudo dnf install ansible` command and `ansible --version` output. Guide users through creating `~/my_inventory.ini` with a `[servers]` group and host variables for SSH. Demonstrate `ansible servers -i ~/my_inventory.ini -m ping` and `ansible servers -i ~/my_inventory.ini -m command -a "hostname"`. Include a mini-quiz asking about the purpose of the inventory file.

---

### Chapter 1.3 — Understanding Ansible Playbooks and Modules

#### Learning objectives
*   Explain the purpose and structure of Ansible playbooks.
*   Identify and utilize common Ansible modules for system administration tasks.
*   Write a basic Ansible playbook to install packages and manage services.
*   Understand the concept of idempotency in the context of Ansible playbook execution.
*   Debug common playbook errors related to YAML syntax and module parameters.

#### Detailed lesson content
While ad-hoc commands are useful for quick, one-off tasks, the true power of Ansible lies in **playbooks**. Playbooks are YAML-formatted files that define a set of ordered tasks to be executed on specified hosts. They are the core of Ansible automation, allowing you to orchestrate complex multi-step workflows, configure systems to a desired state, and deploy applications in a repeatable and version-controlled manner. Think of a playbook as a recipe for your infrastructure: it describes exactly what ingredients (tasks) to use and in what order, to achieve a specific culinary outcome (system state). Because playbooks are text files, they can be stored in version control systems like Git, enabling collaboration, change tracking, and easy rollback.

A typical Ansible playbook starts with `---` (YAML document start marker) and is a list of one or more "plays." Each play targets a specific group of hosts and defines a series of tasks to run on those hosts. The basic structure of a play includes:
*   `name`: A human-readable description of the play.
*   `hosts`: Specifies which hosts or groups from your inventory this play will run against.
*   `become`: (Optional) Set to `yes` or `true` if tasks in this play require elevated privileges (e.g., `sudo`).
*   `vars`: (Optional) Defines variables specific to this play.
*   `tasks`: A list of individual tasks to be executed.

Each task within a play also has a `name` and then calls an **Ansible module**. Modules are reusable units of code that Ansible executes on the managed nodes. Ansible comes with a vast collection of modules, covering almost every system administration need: package management (`ansible.builtin.dnf`, `ansible.builtin.apt`), service management (`ansible.builtin.service`), file manipulation (`ansible.builtin.copy`, `ansible.builtin.file`), user and group management (`ansible.builtin.user`, `ansible.builtin.group`), and much more. When you invoke a module, you pass it arguments (parameters) to specify its behavior.

Let's look at a simple playbook example to install the Nginx web server and ensure its service is running and enabled:

```yaml
---
- name: Configure Nginx web server
  hosts: webservers
  become: yes # This play requires root privileges
  tasks:
    - name: Ensure Nginx package is installed
      ansible.builtin.dnf:
        name: nginx
        state: present

    - name: Ensure Nginx service is running and enabled
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes

    - name: Ensure Nginx configuration file is present
      ansible.builtin.copy:
        src: files/nginx.conf
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
      notify: restart nginx # This handler will be triggered if the file changes

  handlers: # Handlers are tasks that only run when notified
    - name: restart nginx
      ansible.builtin.service:
        name: nginx
        state: restarted
```

To execute this playbook, you would use the `ansible-playbook` command: `ansible-playbook -i ~/my_inventory.ini nginx_config.yml`.
In this example, the `ansible.builtin.dnf` module ensures the `nginx` package is `present`. If Nginx is already installed, Ansible will detect this and report "ok" without making any changes, demonstrating **idempotency**. If it's not installed, it will install it. Similarly, the `ansible.builtin.service` module ensures the `nginx` service is `started` and `enabled` to start on boot. The `ansible.builtin.copy` module copies a local `nginx.conf` file from the control node's `files` directory to `/etc/nginx/nginx.conf` on the managed node. Notice the `notify: restart nginx` directive. This is a powerful feature: the `restart nginx` handler (defined in the `handlers` section) will *only* be triggered if the `copy` task actually makes a change (i.e., the `nginx.conf` file on the managed node was different from the source). This prevents unnecessary service restarts, further enhancing efficiency and idempotency.

Common mistakes when writing playbooks often revolve around YAML syntax. YAML is very sensitive to indentation; use spaces, not tabs, and be consistent. A common error is misaligning a task or module parameter, which will cause the `ansible-playbook` command to fail with a parsing error. Always double-check your indentation. Another frequent issue is incorrect module parameters or forgetting required parameters. Refer to the official Ansible documentation for each module (`ansible-doc <module_name>`) to ensure you're using the correct arguments and values. For instance, `state: present` is common, but `state: absent` would remove a package or file, and `state: latest` would ensure the newest version of a package. Understanding these nuances is key to writing effective playbooks. Safety note: Always test your playbooks in a development or staging environment before deploying them to production, especially those that make significant system changes or restart critical services.

#### Key concepts
*   **Playbook:** A YAML file that defines a set of automation tasks to be executed by Ansible.
*   **Play:** A section within a playbook that targets a specific group of hosts and defines tasks for them.
*   **Task:** An individual action to be performed by Ansible, typically by invoking an Ansible module.
*   **Ansible Module:** A reusable unit of code that performs a specific function on managed nodes (e.g., install a package, start a service).
*   **`become: yes`:** A directive in a play or task to run commands with elevated privileges (e.g., `sudo`).
*   **`ansible.builtin.dnf`:** An Ansible module for managing packages on RHEL/CentOS systems using DNF.
*   **`ansible.builtin.service`:** An Ansible module for managing system services (start, stop, enable, disable).
*   **`ansible.builtin.copy`:** An Ansible module for copying files from the control node to managed nodes.
*   **Handler:** A task that only runs when explicitly `notified` by another task, often used for service restarts after configuration changes.
*   **YAML Indentation:** The crucial use of spaces to define structure in YAML files; incorrect indentation leads to syntax errors.

#### Hands-on activity
**Activity: Write and Execute Your First Playbook**

1.  **Create Playbook File:** On your Ansible Control Node, create a new directory for your playbooks and a file named `webserver_setup.yml`:
    ```bash
    mkdir ~/ansible_projects
    cd ~/ansible_projects
    nano webserver_setup.yml
    ```
    Paste the following content into `webserver_setup.yml`:
    ```yaml
    ---
    - name: Configure basic web server with Apache
      hosts: servers # Assuming 'servers' is the group in your inventory from Chapter 1.2
      become: yes
      tasks:
        - name: Ensure httpd package is installed
          ansible.builtin.dnf:
            name: httpd
            state: present

        - name: Ensure httpd service is running and enabled
          ansible.builtin.service:
            name: httpd
            state: started
            enabled: yes

        - name: Open firewall port for HTTP (80/tcp)
          ansible.posix.firewalld:
            service: http
            permanent: yes
            state: enabled
          notify: reload firewalld

        - name: Create a simple index.html file
          ansible.builtin.copy:
            content: "<h1>Hello from Ansible!</h1>"
            dest: /var/www/html/index.html
            owner: apache
            group: apache
            mode: '0644'

      handlers:
        - name: reload firewalld
          ansible.builtin.service:
            name: firewalld
            state: reloaded
    ```
    *   **Note:** You might need to install the `ansible.posix` collection if not already present: `ansible-galaxy collection install ansible.posix`.
2.  **Execute the Playbook:** Run the playbook, making sure to point to your inventory file from Chapter 1.2:
    ```bash
    ansible-playbook -i ~/my_inventory.ini webserver_setup.yml
    ```
3.  **Verify:** After the playbook completes, SSH into your Managed Node and verify:
    *   Is `httpd` installed and running? (`systemctl status httpd`)
    *   Is port 80 open? (`sudo firewall-cmd --list-all`)
    *   Can you access the web page from your control node or host machine using `curl http://your_managed_node_ip`?

#### Assessment idea
1.  **Question:** Consider the following Ansible playbook snippet:
    ```yaml
    ---
    - name: Manage user accounts
      hosts: all
      become: yes
      tasks:
        - name: Ensure 'devuser' exists
          ansible.builtin.user:
            name: devuser
            state: present
            shell: /bin/bash
            home: /home/devuser
    ```
    If this playbook is executed on a managed node where `devuser` already exists with the specified shell and home directory, what will be the reported status of the "Ensure 'devuser' exists" task?
    a) `CHANGED`
    b) `FAILED`
    c) `SKIPPED`
    d) `OK`

    **Correct Answer:** d) `OK`
    **Explanation:** Ansible modules are designed to be idempotent. If the desired state (user `devuser` existing with the specified shell and home directory) is already met on the managed node, the task will report `OK` (or `success` with no changes) because no modifications were necessary. It will not report `CHANGED` unless it actually had to create the user or modify its attributes.

2.  **Question:** You are writing an Ansible playbook and want to ensure a service, `mywebapp`, is restarted only if its configuration file (`/etc/mywebapp/config.conf`) has been updated by a previous task. Which Ansible feature should you use to achieve this conditional restart?
    a) `vars`
    b) `loop`
    c) `notify` and `handlers`
    d) `when`

    **Correct Answer:** c) `notify` and `handlers`
    **Explanation:** The `notify` and `handlers` mechanism is specifically designed for this scenario. A task that modifies a configuration file can `notify` a handler. The handler, which contains the task to restart the service, will only execute if it receives a notification, meaning the configuration file was indeed changed. This ensures idempotency and avoids unnecessary service restarts.

#### AI generation note
Develop a 15-minute live coding video. Start by explaining playbook structure using a simplified diagram. Then, live-code the `webserver_setup.yml` playbook from the hands-on activity, explaining each section (`name`, `hosts`, `become`, `tasks`, `handlers`) and module (`dnf`, `service`, `firewalld`, `copy`) as you type. Demonstrate running the playbook with `ansible-playbook` and show the output, highlighting `CHANGED` vs. `OK` states. Include a visual of accessing the web page from the control node. Conclude with a common mistake (YAML indentation error) and how to debug it.

---

### Chapter 1.4 — Ansible Inventory Management and Dynamic Inventories

#### Learning objectives
*   Configure static Ansible inventory files using both INI and YAML formats.
*   Define and utilize host variables and group variables within an inventory.
*   Understand variable precedence in Ansible and how it affects configuration.
*   Explain the concept of dynamic inventory and its benefits.
*   Implement basic dynamic inventory by leveraging existing scripts or cloud plugins.

#### Detailed lesson content
Effective inventory management is fundamental to scalable and flexible Ansible automation. The inventory file, as we discussed, is where Ansible finds its managed nodes. While we started with a simple INI-formatted static inventory, Ansible offers much more sophisticated ways to organize your hosts, assign variables, and even dynamically discover infrastructure. A **static inventory** is a manually created file that lists hosts and groups. It's suitable for smaller, stable environments, but becomes cumbersome as your infrastructure grows or changes frequently.

Ansible supports two primary formats for static inventories: INI and YAML. The INI format is simple and widely used, especially for quick setups.
```ini
# INI format example: /etc/ansible/hosts
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com ansible_port=2222
db2.example.com

[all:vars]
ansible_user=devops
ansible_ssh_private_key_file=/home/devops/.ssh/id_rsa
```
In this INI example, `db1.example.com` has a host-specific variable `ansible_port=2222`. The `[all:vars]` section defines variables that apply to all hosts.

The YAML format, often preferred for its readability and ability to handle more complex data structures, offers a more structured way to define hosts, groups, and variables.
```yaml
# YAML format example: ~/ansible_projects/inventory.yml
all:
  children:
    webservers:
      hosts:
        web1.example.com:
        web2.example.com:
    databases:
      hosts:
        db1.example.com:
          ansible_port: 2222
        db2.example.com:
  vars:
    ansible_user: devops
    ansible_ssh_private_key_file: /home/devops/.ssh/id_rsa
```
Both formats achieve the same goal, but YAML provides a clearer hierarchy, especially when dealing with nested variables or complex data types.

Beyond listing hosts, inventories are crucial for assigning **variables** to hosts and groups. These variables allow you to customize playbook behavior for different environments or specific machines.
*   **Host Variables:** Variables specific to a single host. These can be defined directly in the inventory file (as seen with `ansible_port` for `db1.example.com`), or in separate files located in `inventory_dir/host_vars/<hostname>.yml`.
*   **Group Variables:** Variables that apply to all hosts within a specific group. These can be defined in the inventory file (e.g., `[webservers:vars]`), or in separate files located in `inventory_dir/group_vars/<groupname>.yml`.
*   **Global Variables:** Variables that apply to all hosts, typically defined in `[all:vars]` in INI or `all:vars:` in YAML.

Understanding **variable precedence** is critical. Ansible collects variables from many sources (inventory, playbooks, command line, roles, etc.), and when there are conflicting variable definitions, Ansible applies a specific order of precedence. Generally, variables defined closer to the host (e.g., host variables) override those defined at a broader scope (e.g., group variables, global variables). For example, if `ansible_user` is defined in `[all:vars]` as `devops` but also in `host_vars/web1.example.com.yml` as `webadmin`, `webadmin` will be used for `web1.example.com`. A common mistake is assuming a variable is set globally when a more specific definition is overriding it, leading to unexpected behavior. Always use `ansible-inventory --list` or `ansible -m debug -a "var=ansible_vars"` to inspect resolved variables if you suspect precedence issues.

While static inventories are fine for fixed environments, modern infrastructures are often dynamic. Cloud instances spin up and down, containers are ephemeral, and IP addresses change. This is where **dynamic inventory** comes into play. A dynamic inventory is a script or plugin that Ansible can execute to fetch inventory information from external sources like cloud providers (AWS EC2, Azure, Google Cloud), virtualization platforms (VMware, OpenStack), or configuration management databases (CMDBs).
The benefits are immense:
1.  **Accuracy:** Inventory is always up-to-date, reflecting the current state of your infrastructure.
2.  **Scalability:** Easily manage hundreds or thousands of hosts without manual updates.
3.  **Flexibility:** Automatically group hosts based on tags, regions, instance types, or other metadata from the source.

Ansible comes with many built-in dynamic inventory plugins. For example, if you're using AWS, you can configure the `aws_ec2` plugin. You would typically create an inventory configuration file (e.g., `aws_ec2.yml`) that tells the plugin how to connect to AWS and how to group instances.

```yaml
# ~/ansible_projects/aws_ec2.yml
plugin: aws_ec2
regions:
  - us-east-1
filters:
  instance-state-name: running
keyed_groups:
  - key: tags.Environment
    prefix: env_
  - key: tags.Role
    prefix: role_
```
Then, you can use this with `ansible-playbook -i ~/ansible_projects/aws_ec2.yml playbook.yml`. Ansible will execute the plugin, query AWS for running EC2 instances in `us-east-1`, and create groups like `env_production` or `role_webserver` based on their tags. This eliminates the manual effort of updating `/etc/ansible/hosts` every time an instance is launched or terminated. For the RHCE exam, while you might not directly configure a cloud provider, understanding the concept of dynamic inventory and how to use a simple script-based one is valuable. A common safety note for dynamic inventories is ensuring your credentials for the external source (e.g., AWS API keys) are securely managed and not hardcoded into your inventory files.

#### Key concepts
*   **Static Inventory:** A manually created file (INI or YAML) that lists hosts and groups.
*   **INI Format:** A simple, common format for static inventory files.
*   **YAML Format:** A structured, readable format for static inventory, good for complex data.
*   **Host Variables:** Variables specific to a single managed host.
*   **Group Variables:** Variables that apply to all hosts within a specific group.
*   **Variable Precedence:** The order in which Ansible resolves conflicting variable definitions, with more specific variables overriding broader ones.
*   **Dynamic Inventory:** A script or plugin that automatically generates inventory information by querying external sources (e.g., cloud providers, CMDBs).
*   **Inventory Plugin:** A module that enables Ansible to connect to external data sources for dynamic inventory.

#### Hands-on activity
**Activity: Advanced Static Inventory with Host and Group Variables**

1.  **Create a New Inventory Structure:** In your `~/ansible_projects` directory, create a new inventory file and `group_vars` and `host_vars` directories:
    ```bash
    cd ~/ansible_projects
    nano my_advanced_inventory.ini
    mkdir group_vars host_vars
    ```
    Populate `my_advanced_inventory.ini`:
    ```ini
    # ~/ansible_projects/my_advanced_inventory.ini
    [webservers]
    web1.example.com
    web2.example.com

    [databases]
    db1.example.com

    [all:vars]
    ansible_user=devops
    ansible_ssh_private_key_file=/home/devops/.ssh/id_rsa
    default_message="Hello from Ansible!"
    ```
    Create a group variable file for `webservers`:
    ```bash
    nano group_vars/webservers.yml
    ```
    Content for `group_vars/webservers.yml`:
    ```yaml
    ---
    http_port: 80
    welcome_message: "Welcome to our web server!"
    ```
    Create a host variable file for `db1.example.com`:
    ```bash
    nano host_vars/db1.example.com.yml
    ```
    Content for `host_vars/db1.example.com.yml`:
    ```yaml
    ---
    db_name: main_database
    welcome_message: "Welcome to the database server!" # This will override group_vars for db1
    ```
    *   **Note:** Replace `web1.example.com`, `web2.example.com`, and `db1.example.com` with the actual hostnames or IP addresses of your managed nodes. If you only have one managed node, assign it to both `webservers` and `databases` groups for testing purposes.

2.  **Create a Playbook to Display Variables:** Create `display_vars.yml`:
    ```bash
    nano display_vars.yml
    ```
    Content for `display_vars.yml`:
    ```yaml
    ---
    - name: Display host and group variables
      hosts: all
      tasks:
        - name: Print variables
          ansible.builtin.debug:
            msg: |
              Hostname: {{ inventory_hostname }}
              Ansible User: {{ ansible_user }}
              Default Message: {{ default_message }}
              HTTP Port (if webserver): {{ http_port | default('N/A') }}
              DB Name (if database): {{ db_name | default('N/A') }}
              Welcome Message: {{ welcome_message }}
    ```

3.  **Execute and Observe Precedence:**
    ```bash
    ansible-playbook -i my_advanced_inventory.ini display_vars.yml
    ```
    Observe the output. Notice how `welcome_message` changes for `db1.example.com` due to host variable precedence.

#### Assessment idea
1.  **Question:** You have an Ansible inventory with the following definitions:
    *   `group_vars/webservers.yml`: `max_connections: 100`
    *   `host_vars/server1.example.com.yml`: `max_connections: 200`
    *   `inventory.ini`: `[all:vars] max_connections: 50`
    If `server1.example.com` is a member of the `webservers` group, what will be the effective value of `max_connections` when a playbook runs against `server1.example.com`?
    a) `50`
    b) `100`
    c) `200`
    d) The playbook will fail due to conflicting definitions.

    **Correct Answer:** c) `200`
    **Explanation:** Ansible follows a strict variable precedence. Host variables (from `host_vars/server1.example.com.yml`) have higher precedence than group variables (from `group_vars/webservers.yml`), which in turn have higher precedence than global inventory variables (from `[all:vars]`). Therefore, `max_connections: 200` will be the effective value.

2.  **Question:** Your company uses AWS EC2 instances that are frequently launched and terminated. You need to ensure your Ansible inventory always reflects the current state of your running instances, grouped by their `Environment` tag. Which Ansible feature is best suited for this requirement?
    a) Manually updating a static INI inventory file daily.
    b) Using a static YAML inventory file with `host_vars` for each instance.
    c) Implementing a dynamic inventory plugin, such as `aws_ec2`, to automatically discover and group instances.
    d) Writing an Ansible playbook that periodically pings all possible IP ranges to find active hosts.

    **Correct Answer:** c) Implementing a dynamic inventory plugin, such as `aws_ec2`, to automatically discover and group instances.
    **Explanation:** Dynamic inventory plugins are designed for highly fluid environments like cloud platforms. They query the cloud provider's API to get real-time information about instances, including their state and tags, and then generate an inventory on the fly. This eliminates manual updates and ensures accuracy and scalability.

#### AI generation note
Create a 15-minute mixed-format lesson. Start with an animated diagram illustrating the difference between INI and YAML inventory formats, then demonstrate creating `my_advanced_inventory.ini`, `group_vars/webservers.yml`, and `host_vars/db1.example.com.yml` in a terminal. Explain variable precedence with visual overlays highlighting which variable takes effect. Show the `display_vars.yml` playbook execution and its output, pointing out the resolved variable values. Conclude with a conceptual explanation of dynamic inventory using a simple flow diagram showing Ansible querying a cloud provider. Include a reflection prompt asking how dynamic inventory could improve their current infrastructure management.

---

## Module 2: Core Ansible Playbook Development

This module dives deep into the heart of Ansible automation: playbooks. You'll learn how to craft powerful, declarative automation scripts using YAML, leverage Ansible's extensive module library, manage dynamic configurations with variables and facts, implement conditional logic and loops, and finally, organize your automation into reusable roles. Mastering these concepts is fundamental to becoming proficient with Ansible and excelling in the RHCE exam.

---

### Chapter 2.1 — Understanding Ansible Playbooks and YAML Syntax

#### Learning objectives
*   Define the purpose and structure of Ansible playbooks for system automation.
*   Explain the fundamental concepts of YAML syntax, including indentation, key-value pairs, lists, and dictionaries.
*   Identify and correct common YAML syntax errors in Ansible playbooks.
*   Construct a basic Ansible playbook to execute simple tasks on managed hosts.

#### Detailed lesson content
Ansible playbooks are the core of Ansible automation. They are plain text files written in YAML (YAML Ain't Markup Language) that describe a series of steps, or "plays," to be executed on a set of managed hosts. Think of a playbook as a to-do list for your servers, where each item on the list is a specific task you want Ansible to perform. Unlike traditional scripting, playbooks are declarative, meaning you describe the *desired state* of your systems, and Ansible figures out how to get there. This declarative nature is a powerful feature, as it makes playbooks more readable, maintainable, and less prone to errors compared to imperative scripts.

At its most fundamental level, a playbook is a list of plays, and each play is a list of tasks. A play targets a group of hosts defined in your Ansible inventory and specifies the user context (e.g., `become: yes` for privilege escalation) under which tasks will run. Each task then calls an Ansible module, passing it specific arguments to achieve a desired outcome. For instance, a task might use the `dnf` module to install a package, or the `service` module to ensure a service is running. The beauty of playbooks lies in their simplicity and readability, largely thanks to YAML.

YAML is a human-friendly data serialization standard that is widely used for configuration files. Its primary characteristic is its reliance on indentation to denote structure, rather than braces or tags. This makes YAML files very clean and easy to read, but it also means that correct indentation is absolutely critical. A single space out of place can render an entire playbook invalid. Key-value pairs are defined with a colon (`key: value`), lists are denoted by hyphens (`- item`), and dictionaries (or maps) are structured by indentation. For example, a simple key-value pair might be `name: Install Nginx`, while a list of packages could be:
```yaml
packages:
  - nginx
  - httpd-tools
```
And a dictionary representing service parameters might look like:
```yaml
service_config:
  name: nginx
  state: started
  enabled: yes
```
Understanding these basic YAML constructs is paramount to writing effective Ansible playbooks. Common mistakes often revolve around incorrect indentation (mixing tabs and spaces is a classic pitfall), missing colons, or incorrect list/dictionary formatting. Always use spaces for indentation, typically two or four, and be consistent. Modern text editors and IDEs often have YAML linting tools that can help catch these errors early.

Let's look at a basic playbook structure. A playbook always starts with a list indicator (`-`) because it's a list of plays. Each play then defines its `hosts`, which specifies which machines from your inventory this play will target. The `become: yes` directive tells Ansible to escalate privileges (like `sudo`) before executing tasks on the remote host, which is essential for most system administration tasks. Finally, the `tasks` section is another list, where each item is a task. Each task typically has a `name` for readability and calls an Ansible `module` with its specific arguments.

Consider this minimal playbook, `first_playbook.yml`, which creates a directory on your target hosts:
```yaml
---
- name: Ensure a specific directory exists
  hosts: webservers
  become: yes
  tasks:
    - name: Create the /opt/my_app_data directory
      ansible.builtin.file:
        path: /opt/my_app_data
        state: directory
        mode: '0755'
        owner: root
        group: root
```
In this example, the play is named "Ensure a specific directory exists", targets hosts in the `webservers` group, and uses `become: yes` for root privileges. The single task within this play is named "Create the /opt/my_app_data directory" and uses the `ansible.builtin.file` module. This module ensures the specified `path` exists as a `directory` with the given `mode`, `owner`, and `group`. If the directory already exists with these properties, Ansible will report "ok" (no change needed), demonstrating its idempotent nature. If it doesn't exist or its properties are different, Ansible will make the necessary changes and report "changed." This declarative approach ensures that running the playbook multiple times will always result in the desired state without unintended side effects.

Safety Note: Always validate your YAML files before running them, especially for complex playbooks. Tools like `yamllint` or even `ansible-playbook --syntax-check` can help catch errors before execution. Incorrect YAML can lead to playbooks failing or, worse, executing unintended operations.

#### Key concepts
*   **Playbook:** A YAML file containing a list of plays that define automation tasks to be executed on managed hosts.
*   **YAML (YAML Ain't Markup Language):** A human-friendly data serialization standard used for Ansible playbooks, relying on indentation for structure.
*   **Play:** A section within a playbook that targets a specific group of hosts and defines the tasks to be run on them.
*   **Task:** An individual action within a play, which calls an Ansible module to achieve a specific desired state.
*   **Host:** A remote server or device managed by Ansible, defined in the inventory.
*   **`become`:** An Ansible directive used to escalate privileges (e.g., `sudo`) on the managed host for tasks requiring root access.
*   **Idempotence:** The property of Ansible tasks where running them multiple times produces the same result as running them once, without unintended side effects.

#### Hands-on activity
**Activity: Create Your First Directory Playbook**

1.  **Objective:** Write an Ansible playbook to create a new directory and a file inside it on your target host(s).
2.  **Instructions:**
    *   Create a new file named `create_content.yml`.
    *   Define a play that targets your `control_node` (or `localhost` if testing locally) or a specific host group from your inventory.
    *   Ensure the play uses `become: yes` as directory and file creation often requires elevated privileges.
    *   Add a task to create a directory named `/opt/my_app_config` with permissions `0770`, owned by `root`, and group `root`.
    *   Add a second task to create a file named `/opt/my_app_config/config.txt` with content "This is my application configuration." Ensure the file has permissions `0644`.
3.  **Code Template:**
    ```yaml
    ---
    - name: Setup application configuration directory and file
      hosts: your_target_host_group # Replace with 'control_node', 'localhost', or your inventory group
      become: yes
      tasks:
        - name: Ensure /opt/my_app_config directory exists
          # Use the 'ansible.builtin.file' module here
          # path: ...
          # state: ...
          # mode: ...
          # owner: ...
          # group: ...

        - name: Create config.txt file inside the directory
          # Use the 'ansible.builtin.copy' module here
          # content: ...
          # dest: ...
          # mode: ...
    ```
4.  **Verification:** After running the playbook (`ansible-playbook create_content.yml`), log into your target host and verify the directory and file exist with the correct permissions and content using commands like `ls -ld /opt/my_app_config`, `ls -l /opt/my_app_config/config.txt`, and `cat /opt/my_app_config/config.txt`.

#### Assessment idea
1.  **Question:** Examine the following Ansible playbook snippet. What is the primary YAML syntax error that would prevent this playbook from running successfully, and how would you correct it?
    ```yaml
    ---
    - name: Configure web server
      hosts: webservers
      become: yes
      tasks:
        - name: Install Apache
          ansible.builtin.dnf:
            name: httpd
            state: latest
        - name: Start Apache service
          ansible.builtin.service:
            name: httpd
            state: started
          enabled: yes
    ```
    **Correct Answer and Explanation:**
    The primary YAML syntax error is incorrect indentation for the `enabled: yes` parameter under the "Start Apache service" task. In YAML, parameters for a module must be indented at the same level as the module's name. In the provided snippet, `enabled: yes` is indented to the same level as `ansible.builtin.service`, making it appear as a separate, top-level key for the task, rather than an argument to the `service` module.

    **
    ```yaml
    ---
    - name: Configure web server
      hosts: webservers
      become: yes
      tasks:
        - name: Install Apache
          ansible.builtin.dnf:
            name: httpd
            state: latest
        - name: Start Apache service
          ansible.builtin.service:
            name: httpd
            state: started
            enabled: yes # Corrected indentation
    ```
    By indenting `enabled: yes` to match `name: httpd` and `state: started`, it becomes a proper argument for the `ansible.builtin.service` module.

2.  **Question:** You need to write an Ansible playbook to ensure a specific user account (`devuser`) exists on all your application servers, and that this user is part of the `developers` group. Which two Ansible modules would be most appropriate for these tasks, and how would you structure the tasks within a playbook?
    **Correct Answer and Explanation:**
    The most appropriate modules would be `ansible.builtin.user` to manage the user account and `ansible.builtin.group` to ensure the group exists.

    **Playbook Structure:**
    ```yaml
    ---
    - name: Ensure devuser and developers group exist
      hosts: app_servers # Assuming 'app_servers' is your inventory group
      become: yes
      tasks:
        - name: Ensure 'developers' group exists
          ansible.builtin.group:
            name: developers
            state: present

        - name: Ensure 'devuser' exists and is in 'developers' group
          ansible.builtin.user:
            name: devuser
            state: present
            groups: developers
            append: yes # Important: 'append: yes' adds the user to the group without removing them from others
            shell: /bin/bash # Optional: set a default shell
            comment: "Developer User" # Optional: add a comment
    ```
    **Explanation:**
    *   The `ansible.builtin.group` module with `state: present` ensures the `developers` group exists. If it doesn't, Ansible creates it. If it does, Ansible does nothing (idempotent).
    *   The `ansible.builtin.user` module with `state: present` ensures the `devuser` exists. If not, it's created.
    *   The `groups: developers` parameter adds `devuser` to the `developers` group.
    *   `append: yes` is crucial here. Without it, if `devuser` already exists and is part of other groups, specifying `groups: developers` would remove them from all other groups, leaving them *only* in `developers`. `append: yes` ensures `devuser` is added to `developers` while retaining membership in any other existing groups. This is a common safety consideration when managing user group memberships.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated explanation of Ansible playbooks and YAML's role, highlighting indentation and structure with visual cues (color-coding keys, values, lists). Then, transition to a 7-minute live coding demo in a split-screen view: terminal on the left, text editor (VS Code with YAML linter) on the right. Demonstrate writing the `first_playbook.yml` example, intentionally introduce a YAML indentation error, show the linter catching it, correct it, and then execute the playbook with `ansible-playbook --syntax-check` and `ansible-playbook`. Show the output, including `changed` and `ok` states. Conclude with a 2-minute interactive drag-and-drop exercise where learners correct a mis-indented YAML snippet. Ensure high-contrast visuals and captions.

---

### Chapter 2.2 — Working with Ansible Modules

#### Learning objectives
*   Explain the concept of Ansible modules and their role in task execution.
*   Understand and apply the principle of idempotency in Ansible module usage.
*   Utilize `ansible-doc` to find information about available modules and their parameters.
*   Implement common Ansible modules (`dnf`, `service`, `copy`, `file`, `user`, `group`) to manage system resources.

#### Detailed lesson content
Ansible's power largely stems from its vast collection of modules. A module is a discrete unit of code that Ansible executes on the managed host. Each module is designed to perform a specific task, such as installing a package, managing a service, creating a file, or configuring a user. When a task in your playbook calls a module, Ansible executes that module on the remote machine, passing any specified arguments. The module then performs its action and returns data to the control node, indicating whether a change was made and providing any relevant output.

A cornerstone concept when working with Ansible modules is **idempotency**. An idempotent operation is one that, when applied multiple times, produces the same result as applying it once. In the context of Ansible, this means if you run a playbook containing an idempotent task, and the desired state is already met on the managed host, the task will report "ok" (no change) and will not perform any unnecessary actions. If the desired state is not met, the module will make the necessary changes and report "changed." This is incredibly powerful because it allows you to run your playbooks repeatedly without fear of breaking existing configurations or causing unintended side effects. For example, if you use the `dnf` module to install a package that is already installed, Ansible will simply verify its presence and move on, reporting "ok." This contrasts sharply with traditional shell scripts, where you often need to add complex conditional logic (e.g., `if [ ! -f /etc/nginx/nginx.conf ]; then ...`) to ensure tasks are not re-executed unnecessarily.

Ansible provides a rich set of built-in modules for common system administration tasks. Let's explore some of the most frequently used ones, which are essential for RHCE certification:

*   **`ansible.builtin.dnf` (or `yum` for older RHEL/CentOS):** Manages packages on Red Hat-based systems.
    ```yaml
    - name: Ensure Nginx is installed and latest
      ansible.builtin.dnf:
        name: nginx
        state: latest
    - name: Remove an old package
      ansible.builtin.dnf:
        name: old-package
        state: absent
    ```
    This module is idempotent; it won't reinstall an already installed package.

*   **`ansible.builtin.service`:** Manages system services.
    ```yaml
    - name: Ensure Nginx service is running and enabled at boot
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes
    - name: Stop a service
      ansible.builtin.service:
        name: firewalld
        state: stopped
    ```
    Again, idempotent. If the service is already running, it stays running.

*   **`ansible.builtin.copy`:** Copies files from the control node to the managed host.
    ```yaml
    - name: Copy Nginx configuration file
      ansible.builtin.copy:
        src: /path/to/local/nginx.conf
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
    ```
    This module is idempotent if the destination file's content and metadata match the source. If they differ, it will copy and report "changed."

*   **`ansible.builtin.file`:** Manages files, directories, and symlinks.
    ```yaml
    - name: Ensure application log directory exists
      ansible.builtin.file:
        path: /var/log/my_app
        state: directory
        mode: '0755'
    - name: Remove an old file
      ansible.builtin.file:
        path: /tmp/old_file.txt
        state: absent
    ```
    Idempotent for creating, deleting, or modifying file/directory attributes.

*   **`ansible.builtin.user`:** Manages user accounts.
    ```yaml
    - name: Create a new user 'webadmin'
      ansible.builtin.user:
        name: webadmin
        state: present
        shell: /bin/bash
        groups: wheel
        append: yes
    ```
    Idempotent. If the user exists, it ensures their properties match. `append: yes` is crucial for adding to groups without removing from others.

*   **`ansible.builtin.group`:** Manages groups.
    ```yaml
    - name: Ensure 'webdevs' group exists
      ansible.builtin.group:
        name: webdevs
        state: present
    ```
    Idempotent.

While these modules cover a wide range of tasks, sometimes you might need to execute arbitrary shell commands. For this, Ansible provides the `ansible.builtin.shell` and `ansible.builtin.command` modules. The `command` module is simpler and safer, executing commands without shell processing (no pipes, redirects, variables). The `shell` module, on the other hand, executes commands through a shell (like `/bin/sh`), allowing for more complex operations.

**Common Mistake and Safety Note:** Avoid using `shell` or `command` when a dedicated Ansible module exists. Dedicated modules are generally more robust, handle idempotency correctly, and are less prone to errors or security vulnerabilities. For example, instead of `shell: useradd myuser`, use `ansible.builtin.user: name=myuser state=present`. If you must use `shell`, ensure your command is idempotent or include checks to prevent repeated execution. For example, `shell: touch /tmp/my_file.txt && echo "created" || echo "exists"` is not truly idempotent in its reporting, and `shell: echo "Hello" > /tmp/output.txt` will always overwrite the file, reporting "changed" every time, which might not be your intention.

To discover modules and their parameters, the `ansible-doc` command-line tool is your best friend. For example, `ansible-doc dnf` will display detailed documentation for the `dnf` module, including its options, examples, and return values. This is an invaluable resource for learning new modules and troubleshooting.

```bash
ansible-doc dnf
```
This command will output comprehensive details about the `dnf` module, including:
*   **Synopsis:** A brief description of what the module does.
*   **Parameters:** A list of all available options, their types, defaults, and whether they are required.
*   **Notes:** Important considerations or usage tips.
*   **Examples:** Practical code snippets demonstrating how to use the module in a playbook.

By effectively utilizing `ansible-doc` and understanding the principles of idempotency, you can confidently build powerful and reliable automation with Ansible modules.

#### Key concepts
*   **Module:** A discrete unit of code that Ansible executes on managed hosts to perform specific tasks (e.g., installing packages, managing services).
*   **Idempotency:** The property of an operation where applying it multiple times yields the same result as applying it once, without unintended side effects.
*   **`ansible-doc`:** A command-line utility used to view detailed documentation for Ansible modules, including parameters and examples.
*   **`ansible.builtin.dnf` (or `yum`):** Module for managing packages on Red Hat-based systems.
*   **`ansible.builtin.service`:** Module for managing system services (start, stop, restart, enable, disable).
*   **`ansible.builtin.copy`:** Module for copying files from the control node to managed hosts.
*   **`ansible.builtin.file`:** Module for managing files, directories, and symlinks (create, delete, set permissions).
*   **`ansible.builtin.user`:** Module for managing user accounts (create, modify, delete).
*   **`ansible.builtin.group`:** Module for managing groups (create, delete).
*   **`ansible.builtin.shell` / `ansible.builtin.command`:** Modules for executing arbitrary shell commands; generally preferred to use specific modules when available.

#### Hands-on activity
**Activity: Web Server Setup with Common Modules**

1.  **Objective:** Create a playbook that installs the Nginx web server, ensures its service is running, and deploys a custom `index.html` file.
2.  **Instructions:**
    *   Create a file named `webserver_setup.yml`.
    *   Create a local directory named `files` and place a simple `index.html` file inside it (e.g., `<h1>Welcome to Ansible Nginx!</h1>`).
    *   Write a play that targets your `webservers` group (or `localhost` for testing).
    *   Add a task to install the `nginx` package using `ansible.builtin.dnf`.
    *   Add a task to copy your `index.html` from the `files` directory on your control node to `/usr/share/nginx/html/index.html` on the managed host, ensuring `owner: root`, `group: root`, and `mode: '0644'`.
    *   Add a task to ensure the `nginx` service is `started` and `enabled` using `ansible.builtin.service`.
3.  **Code Template (`webserver_setup.yml`):**
    ```yaml
    ---
    - name: Configure Nginx web server
      hosts: webservers # Or 'localhost' if testing locally
      become: yes
      tasks:
        - name: Install Nginx package
          # Use ansible.builtin.dnf here to install 'nginx'

        - name: Copy custom index.html
          # Use ansible.builtin.copy here
          # src: ./files/index.html
          # dest: /usr/share/nginx/html/index.html
          # owner: ...
          # group: ...
          # mode: ...

        - name: Ensure Nginx service is running and enabled
          # Use ansible.builtin.service here
          # name: ...
          # state: ...
          # enabled: ...
    ```
    **Code Template (`files/index.html`):**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ansible Nginx</title>
    </head>
    <body>
        <h1>Hello from Ansible-configured Nginx!</h1>
        <p>This page was deployed by an Ansible playbook.</p>
    </body>
    </html>
    ```
4.  **Verification:** After running the playbook, use `systemctl status nginx` on the target host to verify the service is running. Then, use `curl http://localhost` (or the target host's IP) to verify the custom `index.html` content is served.

#### Assessment idea
1.  **Question:** You need to ensure that a specific configuration file, `/etc/my_app/app.conf`, exists on your server with specific content and permissions. If the file already exists but has different content or permissions, it should be updated. If it doesn't exist, it should be created. Which Ansible module is the most appropriate for this task, and why? Provide a minimal task example.
    **Correct Answer and Explanation:**
    The most appropriate module is `ansible.builtin.copy`.

    **Why `ansible.builtin.copy`?**
    The `copy` module is designed to transfer files from the control node to the managed hosts. Crucially, it is **idempotent** regarding file content and permissions. If the destination file already exists and its content, owner, group, and mode match the source and specified parameters, the module will report "ok" (no change). If any of these attributes differ, it will update the file and report "changed." This perfectly matches the requirement to create if absent and update if different. While `ansible.builtin.file` can create a file, it cannot manage its content; `ansible.builtin.template` is also an option for dynamic content, but `copy` is simpler for static files.

    **Minimal Task Example:**
    ```yaml
    - name: Ensure app.conf exists with correct content and permissions
      ansible.builtin.copy:
        src: /path/to/local/app.conf # Path to the configuration file on your Ansible control node
        dest: /etc/my_app/app.conf
        owner: myappuser
        group: myappgroup
        mode: '0600'
    ```

2.  **Question:** Consider the following Ansible task:
    ```yaml
    - name: Execute a custom script
      ansible.builtin.shell: /opt/my_scripts/update_db.sh
    ```
    Explain two potential drawbacks or safety concerns of using the `ansible.builtin.shell` module for tasks like this, especially compared to using specific Ansible modules.
    **Correct Answer and Explanation:**
    1.  **Lack of Idempotency (Commonly):** Many shell scripts are not inherently idempotent. If `/opt/my_scripts/update_db.sh` modifies the database every time it runs, using `ansible.builtin.shell` will cause it to run every time the playbook is executed, reporting "changed" even if the database is already in the desired state. This can lead to unnecessary resource consumption, longer playbook runs, and potential data corruption if the script isn't designed for repeated execution. Dedicated Ansible modules, on the other hand, are built with idempotency in mind.
    2.  **Security Risks and Error Handling:** The `shell` module executes commands as if typed directly into a shell, which means it's susceptible to shell injection vulnerabilities if variables are not properly sanitized. Furthermore, error handling within shell scripts often needs to be explicitly managed (e.g., `set -e`), and Ansible's ability to interpret and react to shell script failures might be less granular than with dedicated modules that return structured data. Specific modules often have built-in error checking and provide clearer, more consistent feedback to Ansible. For instance, a module like `ansible.builtin.mysql_db` would handle database operations more safely and idempotently.

#### AI generation note
Create a 10-minute live coding video. Start by introducing the concept of modules and idempotency with a simple animated diagram. Then, transition to a split-screen terminal and text editor view. Demonstrate using `ansible-doc dnf` and `ansible-doc service` to find module information. Implement a playbook that installs `httpd`, copies a basic `index.html` from a local `files` directory to `/var/www/html`, and ensures `httpd` is running and enabled. Show running the playbook twice to highlight idempotency (first run: "changed", second run: "ok"). Include a common mistake scenario where `shell: systemctl restart httpd` is used, and explain why `ansible.builtin.service` is preferred. End with a 2-question interactive quiz on module selection and idempotency.

---

### Chapter 2.3 — Managing Variables and Facts

#### Learning objectives
*   Explain the importance and benefits of using variables in Ansible playbooks.
*   Define and utilize variables at different scopes: playbook, host, group, and extra variables.
*   Describe Ansible facts, how they are gathered, and how to use them within playbooks.
*   Understand Ansible's variable precedence rules and identify potential conflicts.

#### Detailed lesson content
Variables are a cornerstone of flexible and reusable Ansible automation. Instead of hardcoding values like package names, file paths, or service ports directly into your playbooks, you can use variables. This allows you to create generic playbooks that can be easily adapted to different environments (development, staging, production) or different sets of hosts without modifying the playbook itself. Imagine managing web servers where the Nginx port might be 80 in one environment and 8080 in another, or different application versions deployed across various groups of servers. Variables make these scenarios manageable and prevent repetitive code.

Ansible provides several ways to define variables, each with its own scope and precedence:

1.  **Playbook Variables (`vars` keyword):** Defined directly within a playbook or a specific play. These variables are local to that playbook or play.
    ```yaml
    ---
    - name: Configure web server
      hosts: webservers
      vars:
        nginx_port: 8080
        app_version: "1.2.3"
      tasks:
        - name: Ensure Nginx is configured on port {{ nginx_port }}
          ansible.builtin.template:
            src: nginx.conf.j2
            dest: /etc/nginx/nginx.conf
    ```
    Here, `nginx_port` and `app_version` are available to all tasks within this play.

2.  **Inventory Variables (Host and Group Variables):** These are defined in your inventory file or in separate `host_vars/` and `group_vars/` directories.
    *   **Host Variables:** Specific to a single host. For example, in `inventory/host_vars/web1.example.com.yml`:
        ```yaml
        nginx_port: 8080
        server_id: "WEB01"
        ```
    *   **Group Variables:** Apply to all hosts within a specific group. For example, in `inventory/group_vars/webservers.yml`:
        ```yaml
        nginx_port: 80
        default_app_version: "1.0.0"
        ```
    These variables are automatically loaded by Ansible when targeting the respective hosts or groups. This is a very common and powerful way to manage environment-specific configurations.

3.  **Extra Variables (`-e` or `--extra-vars`):** Passed on the command line when running `ansible-playbook`. These have high precedence and are useful for overriding variables temporarily or for passing sensitive information.
    ```bash
    ansible-playbook configure_app.yml -e "nginx_port=80 app_env=production"
    ```
    You can also pass a YAML file with extra variables:
    ```bash
    ansible-playbook configure_app.yml -e @prod_vars.yml
    ```

In addition to user-defined variables, Ansible automatically gathers information about your managed hosts, known as **Ansible Facts**. These facts are discovered by the `ansible.builtin.setup` module (which runs by default at the start of most plays unless explicitly disabled with `gather_facts: no`). Facts include details like the operating system (`ansible_os_family`), network interfaces (`ansible_interfaces`), memory (`ansible_memtotal_mb`), disk space, CPU information, and much more.

You can view all facts for a host by running `ansible your_host -m setup`. Facts are incredibly useful for making playbooks dynamic and intelligent. For instance, you might use `ansible_os_family` to apply different package installation tasks for Red Hat-based systems versus Debian-based systems, or `ansible_default_ipv4.address` to configure a service to listen on a specific IP.

```yaml
---
- name: Display host facts
  hosts: all
  tasks:
    - name: Print OS family
      ansible.builtin.debug:
        msg: "This host is part of the {{ ansible_os_family }} family."

    - name: Print default IP address
      ansible.builtin.debug:
        msg: "The default IPv4 address is {{ ansible_default_ipv4.address }}."
```

**Variable Precedence:** Understanding how Ansible resolves variables when multiple definitions exist is crucial to avoid unexpected behavior. Ansible has a well-defined precedence order. While the full list is extensive, here's a simplified view of common sources from lowest to highest precedence (meaning higher precedence values override lower ones):

1.  Role defaults (`defaults/main.yml`)
2.  Inventory variables (group_vars/all, host_vars)
3.  Playbook variables (`vars` section)
4.  Role variables (`vars/main.yml`)
5.  Extra variables (`-e` on command line)

**Common Mistake:** A frequent mistake is defining a variable at a lower precedence level (e.g., in `group_vars`) and then expecting it to override a variable defined at a higher precedence (e.g., in the playbook's `vars` section or via `-e`). Always remember that variables passed via `-e` will almost always win, making them powerful for one-off overrides but requiring caution.

**Safety Note:** When dealing with sensitive information like passwords or API keys, never hardcode them into playbooks or inventory files. Instead, use Ansible Vault to encrypt these variables. This ensures that sensitive data is stored securely and only decrypted at runtime when needed. We will cover Ansible Vault in a later module.

By mastering variables and facts, you unlock the full potential of Ansible, enabling you to write highly adaptable, robust, and intelligent automation for diverse environments.

#### Key concepts
*   **Variable:** A placeholder for a value that can be defined and used in Ansible playbooks, allowing for flexible and reusable automation.
*   **Playbook Variables:** Variables defined directly within a playbook or play using the `vars` keyword, scoped to that specific playbook/play.
*   **Inventory Variables:** Variables defined within the Ansible inventory, either directly in the inventory file or in `host_vars/` and `group_vars/` directories.
*   **Host Variables:** Inventory variables specific to a single managed host.
*   **Group Variables:** Inventory variables that apply to all hosts within a specific inventory group.
*   **Extra Variables (`-e` / `--extra-vars`):** Variables passed on the command line at runtime, offering high precedence for overriding values.
*   **Ansible Facts:** Information automatically gathered by Ansible about managed hosts (e.g., OS, network, memory), accessible as variables within playbooks.
*   **`ansible.builtin.setup` module:** The module responsible for gathering Ansible facts.
*   **Variable Precedence:** The defined order in which Ansible resolves variable values when multiple definitions exist, from lowest to highest priority.

#### Hands-on activity
**Activity: Dynamic User Creation with Variables and Facts**

1.  **Objective:** Create a playbook that dynamically creates a user based on host-specific variables and displays system information using facts.
2.  **Instructions:**
    *   Create an inventory file (e.g., `inventory.ini`) with at least two hosts, and define a `host_vars` file for each.
    *   For `host_vars/host1.example.com.yml`:
        ```yaml
        username: devops_user1
        user_comment: "First DevOps User"
        ```
    *   For `host_vars/host2.example.com.yml`:
        ```yaml
        username: devops_user2
        user_comment: "Second DevOps User"
        ```
    *   Create a playbook `dynamic_user.yml`.
    *   The play should target `all` hosts and use `become: yes`.
    *   Add a task to create a user using the `ansible.builtin.user` module. The `name` and `comment` for the user should come from the `username` and `user_comment` host variables. Ensure `state: present` and `shell: /bin/bash`.
    *   Add a second task using `ansible.builtin.debug` to display the `ansible_hostname` and `ansible_os_family` facts for each host.
3.  **Code Template (`inventory.ini`):**
    ```ini
    [servers]
    host1.example.com
    host2.example.com
    ```
    **Code Template (`host_vars/host1.example.com.yml`):**
    ```yaml
    username: devops_user1
    user_comment: "First DevOps User"
    ```
    **Code Template (`host_vars/host2.example.com.yml`):**
    ```yaml
    username: devops_user2
    user_comment: "Second DevOps User"
    ```
    **Code Template (`dynamic_user.yml`):**
    ```yaml
    ---
    - name: Create users and display facts
      hosts: servers # Or 'all'
      become: yes
      tasks:
        - name: Create user {{ username }}
          # Use ansible.builtin.user module
          # name: ...
          # comment: ...
          # state: ...
          # shell: ...

        - name: Display host information
          # Use ansible.builtin.debug module
          # msg: "Hostname: {{ ... }}, OS Family: {{ ... }}"
    ```
4.  **Verification:** Run the playbook (`ansible-playbook -i inventory.ini dynamic_user.yml`). Observe the output for the debug messages, and then log into each target host to verify the respective user accounts were created (e.g., `id devops_user1`).

#### Assessment idea
1.  **Question:** You have a playbook that configures an application. You want to set the application's listening port to `8080` by default, but allow it to be easily overridden to `80` for production deployments without modifying the playbook file. Describe how you would achieve this using Ansible variables, specifying where each variable would be defined and how the override would be applied.
    **Correct Answer and Explanation:**
    To achieve this, we would use a combination of **playbook variables** for the default and **extra variables** for the override.

    *   **Default Definition (Playbook Variable):** Define `app_port: 8080` within the `vars:` section of the playbook itself. This sets the default value.
        ```yaml
        ---
        - name: Configure application
          hosts: app_servers
          vars:
            app_port: 8080 # Default port
          tasks:
            - name: Configure application to listen on port {{ app_port }}
              ansible.builtin.template:
                src: app_config.j2
                dest: /etc/app/config.conf
        ```
    *   **Override (Extra Variable):** When running the playbook for a production deployment, use the `--extra-vars` (or `-e`) command-line option to pass `app_port=80`. Due to Ansible's variable precedence, extra variables have a higher priority than playbook variables, so `80` will override `8080`.
        ```bash
        ansible-playbook configure_application.yml -e "app_port=80"
        ```
    This approach ensures the playbook is generic, provides a sensible default, and allows for easy, non-invasive overrides for specific environments.

2.  **Question:** You are writing a playbook to install different packages based on the operating system family of the managed host (e.g., `httpd` on Red Hat, `apache2` on Debian). Which Ansible feature would you use to determine the OS family, and how would you incorporate it into a task? Provide a task snippet.
    **Correct Answer and Explanation:**
    You would use **Ansible Facts**, specifically the `ansible_os_family` fact, to determine the operating system family.

    **How to Incorporate:**
    Ansible automatically gathers facts at the beginning of most plays (unless `gather_facts: no` is explicitly set). These facts are then available as variables within your playbook. You can use conditional statements (`when:`) to execute tasks only if `ansible_os_family` matches a specific value.

    **Task Snippet:**
    ```yaml
    ---
    - name: Install web server package based on OS family
      hosts: all
      become: yes
      tasks:
        - name: Install Apache on Red Hat-based systems
          ansible.builtin.dnf:
            name: httpd
            state: latest
          when: ansible_os_family == "RedHat"

        - name: Install Apache on Debian-based systems
          ansible.builtin.apt:
            name: apache2
            state: latest
          when: ansible_os_family == "Debian"
    ```
    **Explanation:**
    *   The first task will only run on hosts where the `ansible_os_family` fact is "RedHat" (e.g., RHEL, CentOS, Fedora).
    *   The second task will only run on hosts where `ansible_os_family` is "Debian" (e.g., Debian, Ubuntu).
    This allows a single playbook to intelligently adapt its actions to different operating systems, making it highly versatile.

#### AI generation note
Create a 15-minute interactive lab walkthrough. Start with a 2-minute explanation of variable types and precedence using a visual hierarchy diagram. Then, guide learners through creating an inventory with `host_vars` and `group_vars` files. Demonstrate a playbook that uses these variables to create users with different names/comments on different hosts. Show how to use `ansible-playbook -e` to override a variable. Next, demonstrate `ansible -m setup` to gather facts and then modify the playbook to use `ansible.builtin.debug` to print `ansible_os_family` and `ansible_default_ipv4.address`. The interactive element will be a guided exercise to modify the playbook to use a `when` condition based on `ansible_os_family`. Use a split-screen view of the terminal and the text editor, highlighting variable names and their values. Ensure all steps are keyboard-navigable.

---

### Chapter 2.4 — Conditionals, Loops, and Handlers

#### Learning objectives
*   Implement conditional logic using the `when` statement to execute tasks based on specific criteria.
*   Utilize loops (`loop` keyword) to perform repetitive tasks efficiently over lists or dictionaries.
*   Configure and trigger handlers to perform actions only when a change has occurred in a previous task.
*   Identify common scenarios where conditionals, loops, and handlers significantly improve playbook efficiency and reliability.

#### Detailed lesson content
To build truly intelligent and efficient automation, your playbooks need to adapt to different situations. This is where conditionals, loops, and handlers come into play. These features allow you to control the flow of execution, perform repetitive actions without duplicating code, and react gracefully to changes in your infrastructure.

**Conditionals (`when` statement):**
The `when` statement allows you to execute a task only if a certain condition is met. This condition is typically a Jinja2 expression that evaluates to `true` or `false`. You can use facts, variables, or even the results of previous tasks in your conditions. This is incredibly powerful for tailoring actions to specific hosts or states.

For instance, you might want to install a package only on a specific operating system family, or restart a service only if a configuration file exists.
```yaml
---
- name: Conditional task execution
  hosts: all
  become: yes
  tasks:
    - name: Install Nginx on Red Hat-based systems
      ansible.builtin.dnf:
        name: nginx
        state: latest
      when: ansible_os_family == "RedHat"

    - name: Create a file only if a specific variable is set to true
      ansible.builtin.file:
        path: /tmp/important_marker.txt
        state: touch
      when: create_marker_file | default(false) # Using a default filter for safety
    ```
    In the second example, `create_marker_file` is a variable that might be set via `extra-vars` or `group_vars`. The `| default(false)` filter ensures that if the variable isn't defined, the condition defaults to `false` instead of raising an error. You can combine multiple conditions using `and` and `or`:
    ```yaml
    - name: Debug message for specific OS and architecture
      ansible.builtin.debug:
        msg: "This is a 64-bit RedHat system."
      when: ansible_os_family == "RedHat" and ansible_architecture == "x86_64"
    ```
    **Common Mistake:** Forgetting to quote string comparisons in `when` conditions (e.g., `when: ansible_os_family == RedHat` instead of `when: ansible_os_family == "RedHat"`). While sometimes it works, it's safer and more consistent to quote strings.

**Loops (`loop` keyword):**
Loops are essential for performing the same task multiple times with different input values. Instead of writing separate tasks for each item, you can use a loop to iterate over a list of items, directories, users, or even complex dictionaries. The `loop` keyword is the modern and preferred way to implement loops in Ansible, replacing older constructs like `with_items`.

```yaml
---
- name: Manage multiple packages and users
  hosts: webservers
  become: yes
  vars:
    web_packages:
      - httpd
      - php
      - mariadb-server
    app_users:
      - name: appuser1
        uid: 1001
      - name: appuser2
        uid: 1002
  tasks:
    - name: Install required web packages
      ansible.builtin.dnf:
        name: "{{ item }}"
        state: latest
      loop: "{{ web_packages }}" # Looping over a simple list

    - name: Create application users
      ansible.builtin.user:
        name: "{{ item.name }}"
        uid: "{{ item.uid }}"
        state: present
        shell: /bin/bash
      loop: "{{ app_users }}" # Looping over a list of dictionaries
```
In the loop, `{{ item }}` refers to the current element being processed. When looping over a list of dictionaries, you can access dictionary keys using dot notation (e.g., `{{ item.name }}`). Loops significantly reduce playbook size and improve maintainability.

**Handlers (`notify` keyword):**
Handlers are special tasks that only run when explicitly notified by another task. They are typically used for actions that should only occur if a configuration change has taken place, such as restarting a service after its configuration file has been updated. This ensures idempotency and avoids unnecessary service interruptions.

Handlers are defined in a `handlers:` section within your playbook (or a role's `handlers/main.yml`). A task "notifies" a handler using the `notify` keyword, referencing the handler's name.

```yaml
---
- name: Configure and restart Nginx
  hosts: webservers
  become: yes
  tasks:
    - name: Copy Nginx configuration file
      ansible.builtin.copy:
        src: /path/to/local/nginx.conf
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart Nginx # This task will notify the handler if it changes the file

    - name: Ensure Nginx is running
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes

  handlers:
    - name: Restart Nginx
      ansible.builtin.service:
        name: nginx
        state: restarted
```
In this example, the "Restart Nginx" handler will *only* run if the "Copy Nginx configuration file" task reports "changed" (meaning the configuration file was actually updated). If the configuration file was already identical, the copy task would report "ok," and the handler would not be triggered. Handlers are executed at the end of a play, after all regular tasks have been processed, or at specific points if `flush_handlers` is used.

**Common Mistake:** Forgetting to add `notify` to a task that modifies a configuration file, leading to the service not restarting and the changes not taking effect. Another mistake is defining a handler but never notifying it. Also, remember that handlers are typically executed once per play, even if notified multiple times by different tasks within that play.

By combining conditionals, loops, and handlers, you can create highly sophisticated and reliable Ansible playbooks that respond intelligently to the state of your managed systems, making your automation more robust and efficient.

#### Key concepts
*   **`when` statement:** A conditional directive in Ansible that allows a task to execute only if a specified Jinja2 expression evaluates to `true`.
*   **`loop` keyword:** A directive used to iterate over lists, dictionaries, or sequences, allowing a single task to be executed multiple times with different inputs.
*   **`item` variable:** A special variable available within a loop that represents the current element being processed in the iteration.
*   **Handler:** A special type of task that is only executed when explicitly "notified" by another task, typically used for actions like service restarts after configuration changes.
*   **`notify` keyword:** Used within a task to trigger a named handler if the task reports a "changed" status.
*   **Jinja2:** The templating language used by Ansible for expressions, variables, and conditionals.

#### Hands-on activity
**Activity: Dynamic Firewall Configuration with Loops and Handlers**

1.  **Objective:** Create a playbook to configure `firewalld` rules dynamically using a loop and restart the `firewalld` service only if rules were changed.
2.  **Instructions:**
    *   Create a playbook named `firewall_config.yml`.
    *   Define a list of ports in your playbook's `vars` section that you want to open (e.g., `80/tcp`, `443/tcp`, `22/tcp`).
    *   The play should target your `webservers` group (or `localhost`) and use `become: yes`.
    *   Add a task that uses the `ansible.posix.firewalld` module to add each port from your list to the `public` zone, ensuring it's `permanent` and `state: enabled`. This task should `notify` a handler.
    *   Define a handler named "Reload firewalld" that uses the `ansible.builtin.service` module to `reload` the `firewalld` service.
3.  **Code Template (`firewall_config.yml`):**
    ```yaml
    ---
    - name: Configure firewalld rules and reload
      hosts: webservers # Or 'localhost'
      become: yes
      vars:
        open_ports:
          - 80/tcp
          - 443/tcp
          - 22/tcp
      tasks:
        - name: Add firewall rules for open_ports
          # Use ansible.posix.firewalld module
          # zone: public
          # permanent: yes
          # state: enabled
          # port: "{{ item }}" # Loop variable
          # notify: Reload firewalld
          loop: "{{ open_ports }}"

      handlers:
        - name: Reload firewalld
          # Use ansible.builtin.service module
          # name: firewalld
          # state: reloaded
    ```
4.  **Verification:**
    *   Run the playbook (`ansible-playbook firewall_config.yml`).
    *   On the first run, observe that the `firewalld` tasks report "changed" and the handler is notified and runs.
    *   Run the playbook again. Observe that the `firewalld` tasks report "ok" and the handler is *not* notified, thus not running.
    *   On the target host, verify the rules with `firewall-cmd --list-ports`.

#### Assessment idea
1.  **Question:** You have a list of users, some of whom should be created with a specific UID, and others should just use the default UID.
    ```yaml
    users_to_create:
      - name: alice
        uid: 1001
      - name: bob
      - name: charlie
        uid: 1003
    ```
    Write an Ansible task using a loop and a conditional (`when`) that creates these users. For users with a `uid` specified, use that UID; otherwise, let Ansible assign a default UID.
    **Correct Answer and Explanation:**
    ```yaml
    - name: Create users with conditional UID
      ansible.builtin.user:
        name: "{{ item.name }}"
        uid: "{{ item.uid | default(omit) }}" # Use 'omit' if uid is not defined
        state: present
        shell: /bin/bash
      loop: "{{ users_to_create }}"
    ```
    **Explanation:**
    *   The `loop: "{{ users_to_create }}"` iterates over each dictionary in the `users_to_create` list.
    *   `name: "{{ item.name }}"` sets the username from the `name` key of the current item.
    *   `uid: "{{ item.uid | default(omit) }}"` is the key part for the conditional logic.
        *   `item.uid` attempts to access the `uid` key from the current dictionary.
        *   The `| default(omit)` filter is used. If `item.uid` exists (e.g., for `alice` and `charlie`), its value is used.
        *   If `item.uid` is *not* defined (e.g., for `bob`), the `default` filter provides `omit`. `omit` is a special Ansible keyword that tells the module to *not pass this parameter at all*. This allows the `ansible.builtin.user` module to use its default behavior for UID assignment, effectively achieving the conditional UID setting without an explicit `when` clause on the task itself.

2.  **Question:** A playbook is designed to deploy a new version of a web application. This involves copying new application files and then restarting the `apache` service. The current playbook looks like this:
    ```yaml
    ---
    - name: Deploy web application
      hosts: webservers
      become: yes
      tasks:
        - name: Copy new application files
          ansible.builtin.copy:
            src: ./app_files/
            dest: /var/www/html/
            owner: apache
            group: apache
            mode: '0755'

        - name: Restart Apache service
          ansible.builtin.service:
            name: httpd
            state: restarted
    ```
    Identify a potential inefficiency or issue with this playbook regarding service restarts, and explain how to improve it using an Ansible handler.
    **Correct Answer and Explanation:**
    **Potential Inefficiency/Issue:**
    The current playbook will *always* restart the Apache service, even if the "Copy new application files" task reports "ok" (meaning no files were changed because they were already identical). This leads to unnecessary service downtime and can impact application availability, even when no actual changes were deployed. The service restart task is not idempotent in its execution condition.

    **Improvement using an Ansible Handler:**
    To improve this, we should use a handler. The `Restart Apache service` task should be converted into a handler, and the `Copy new application files` task should `notify` this handler *only if* it makes a change.

    **Improved Playbook:**
    ```yaml
    ---
    - name: Deploy web application
      hosts: webservers
      become: yes
      tasks:
        - name: Copy new application files
          ansible.builtin.copy:
            src: ./app_files/
            dest: /var/www/html/
            owner: apache
            group: apache
            mode: '0755'
          notify: Restart Apache # Notify handler if files are changed

      handlers:
        - name: Restart Apache
          ansible.builtin.service:
            name: httpd
            state: restarted
    ```
    **Explanation:**
    Now, the "Restart Apache" handler will *only* be triggered and executed if the `ansible.builtin.copy` task actually copies or modifies files (i.e., it reports "changed"). If the application files are already up-to-date, the copy task will report "ok," and the handler will not be run, preventing an unnecessary service restart. This makes the playbook more efficient, truly idempotent in its effect, and minimizes application downtime.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with a 3-minute animated explanation of `when`, `loop`, and `notify`/handlers, using flowcharts to illustrate execution paths. Transition to a 10-minute live coding demo in a split-screen terminal and text editor. First, demonstrate a `when` condition to install `httpd` only on Red Hat systems (using `ansible_os_family`). Second, show a loop to create multiple users from a list of dictionaries. Third, build the Nginx config and restart handler example, explicitly showing the "changed" vs "ok" status and how it affects handler execution. Conclude with a 2-minute interactive "fix the playbook" exercise where learners correct a playbook that restarts a service unnecessarily. Emphasize visual cues for `changed` vs `ok` status in terminal output.

---

### Chapter 2.5 — Organizing Playbooks with Roles

#### Learning objectives
*   Explain the benefits of using Ansible roles for structuring and organizing automation content.
*   Describe the standard directory structure of an Ansible role.
*   Create a new Ansible role using `ansible-galaxy init`.
*   Integrate and apply roles within Ansible playbooks.

#### Detailed lesson content
As your Ansible automation grows in complexity, managing a single, monolithic playbook becomes challenging. You'll find yourself duplicating tasks, handlers, and variables across different playbooks, making maintenance a nightmare. This is where **Ansible Roles** become indispensable. Roles provide a standardized, reusable, and modular way to organize your automation content. They encapsulate all the necessary components (tasks, handlers, variables, files, templates, metadata) for a specific function or application into a well-defined directory structure.

The primary benefits of using roles are:
1.  **Reusability:** Roles are self-contained and can be easily shared across different projects, teams, or even with the wider Ansible community (via Ansible Galaxy).
2.  **Modularity:** They break down complex automation into smaller, manageable, and logical units. For example, one role for Nginx, another for a database, and another for application deployment.
3.  **Readability and Maintainability:** The standardized structure makes it easy for anyone to understand where different pieces of automation logic reside.
4.  **Best Practices:** Roles encourage following Ansible best practices for content organization.

A standard Ansible role follows a specific directory structure. When you create a role, Ansible expects to find certain subdirectories, each serving a distinct purpose:

```
my_role/
├── defaults/        # Default variables for the role (lowest precedence)
│   └── main.yml
├── handlers/        # Handlers that can be notified by tasks
│   └── main.yml
├── tasks/           # Main tasks to be executed by the role
│   └── main.yml
├── templates/       # Jinja2 templates for configuration files
├── files/           # Static files to be copied to managed hosts
├── vars/            # Other variables for the role (higher precedence than defaults)
│   └── main.yml
├── meta/            # Metadata about the role (author, license, dependencies)
│   └── main.yml
└── README.md        # Documentation for the role
```

*   **`tasks/main.yml`:** This is the entry point for the role's execution. It contains the list of tasks that the role will perform.
*   **`handlers/main.yml`:** Contains handlers that can be notified by tasks within this role (or other roles/playbooks).
*   **`defaults/main.yml`:** Defines default variables for the role. These have the lowest precedence, meaning they can be easily overridden by any other variable source (inventory, playbook, extra vars). This is useful for providing sensible defaults that users can customize.
*   **`vars/main.yml`:** Defines variables specific to the role that have a higher precedence than `defaults`. These are typically variables that are integral to the role's function and less likely to be overridden.
*   **`files/`:** Contains static files that the role might need to copy to managed hosts using the `ansible.builtin.copy` module. Files placed here can be referenced directly by name (e.g., `src: my_static_file.txt`).
*   **`templates/`:** Contains Jinja2 template files (e.g., `nginx.conf.j2`) that the role uses with the `ansible.builtin.template` module. These templates allow for dynamic configuration based on variables.
*   **`meta/main.yml`:** Contains metadata about the role, such as author, license, and dependencies on other roles.

Creating a new role is straightforward using the `ansible-galaxy init` command. This command scaffolds the entire directory structure for you, saving time and ensuring consistency.

```bash
ansible-galaxy init my_nginx_role
```
This command will create the `my_nginx_role` directory with all the standard subdirectories and `main.yml` files.

Once a role is created and populated with tasks, handlers, and other content, you integrate it into a playbook using the `roles:` keyword. The playbook then becomes much simpler, primarily serving to define which hosts to target and which roles to apply.

Consider a playbook `site.yml` that applies an Nginx role:
```yaml
---
- name: Deploy web infrastructure
  hosts: webservers
  become: yes
  roles:
    - my_nginx_role
```
When this playbook runs, Ansible will execute the tasks defined in `my_nginx_role/tasks/main.yml` on all hosts in the `webservers` group. Any handlers defined in `my_nginx_role/handlers/main.yml` will be available, and variables from `my_nginx_role/defaults/main.yml` and `my_nginx_role/vars/main.yml` will be loaded.

**Common Mistakes:**
*   **Misunderstanding variable precedence:** Forgetting that `defaults/main.yml` has the lowest precedence, so variables defined there can be easily overridden.
*   **Incorrect file/template paths:** When using `ansible.builtin.copy` or `ansible.builtin.template` within a role, you don't need to specify the full path to `files/` or `templates/`. Ansible automatically looks in the correct role subdirectory. For example, `src: nginx.conf.j2` will correctly find `my_nginx_role/templates/nginx.conf.j2`.
*   **Not notifying handlers:** Defining handlers in `handlers/main.yml` but forgetting to `notify` them from tasks when changes occur.

Roles are a critical concept for any serious Ansible user, especially for RHCE candidates. They promote modularity, reusability, and best practices, making your automation more scalable and maintainable.

#### Key concepts
*   **Role:** A standardized, reusable, and modular unit of Ansible automation content that encapsulates tasks, handlers, variables, files, and templates.
*   **`ansible-galaxy init`:** A command-line utility used to scaffold the standard directory structure for a new Ansible role.
*   **Role Directory Structure:** The specific organization of subdirectories within a role (e.g., `tasks/`, `handlers/`, `defaults/`, `files/`, `templates/`, `vars/`, `meta/`).
*   **`defaults/main.yml`:** Contains default variables for a role, having the lowest variable precedence.
*   **`vars/main.yml`:** Contains variables specific to a role, with higher precedence than `defaults`.
*   **`tasks/main.yml`:** The main entry point for a role, containing the list of tasks to be executed.
*   **`handlers/main.yml`:** Contains handlers defined within a role that can be notified by tasks.
*   **`files/`:** Directory within a role for static files to be copied to managed hosts.
*   **`templates/`:** Directory within a role for Jinja2 template files.
*   **`roles:` keyword:** Used in a playbook to apply one or more roles to the targeted hosts.

#### Hands-on activity
**Activity: Create and Apply a Basic Nginx Role**

1.  **Objective:** Create a reusable Ansible role for Nginx installation and configuration, and then apply it using a simple playbook.
2.  **Instructions:**
    *   Initialize a new role named `nginx_webserver` using `ansible-galaxy init`.
    *   Inside `nginx_webserver/tasks/main.yml`:
        *   Add a task to install the `nginx` package using `ansible.builtin.dnf`.
        *   Add a task to copy a default `nginx.conf` template. For this, create `nginx_webserver/templates/nginx.conf.j2` with a basic Nginx server block (e.g., listening on port `{{ nginx_port }}`).
        *   Add a task to ensure the `nginx` service is started and enabled. This task should `notify` a handler.
    *   Inside `nginx_webserver/handlers/main.yml`:
        *   Add a handler named "Restart Nginx" that restarts the `nginx` service.
    *   Inside `nginx_webserver/defaults/main.yml`:
        *   Define a default variable `nginx_port: 80`.
    *   Create a playbook `deploy_web.yml` that targets your `webservers` group (or `localhost`) and applies the `nginx_webserver` role.
3.  **Code Template (`deploy_web.yml`):**
    ```yaml
    ---
    - name: Deploy Nginx web server using a role
      hosts: webservers # Or 'localhost'
      become: yes
      roles:
        - nginx_webserver
    ```
    **Code Template (`nginx_webserver/defaults/main.yml`):**
    ```yaml
    nginx_port: 80
    ```
    **Code Template (`nginx_webserver/tasks/main.yml`):**
    ```yaml
    ---
    - name: Install Nginx package
      ansible.builtin.dnf:
        name: nginx
        state: latest

    - name: Copy Nginx configuration template
      ansible.builtin.template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart Nginx

    - name: Ensure Nginx service is running and enabled
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes
    ```
    **Code Template (`nginx_webserver/handlers/main.yml`):**
    ```yaml
    ---
    - name: Restart Nginx
      ansible.builtin.service:
        name: nginx
        state: restarted
    ```
    **Code Template (`nginx_webserver/templates/nginx.conf.j2`):**
    ```nginx
    # Basic Nginx configuration template
    user  nginx;
    worker_processes  auto;

    error_log  /var/log/nginx/error.log notice;
    pid        /var/run/nginx.pid;

    events {
        worker_connections  1024;
    }

    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log  main;

        sendfile        on;
        #tcp_nopush     on;

        keepalive_timeout  65;

        #gzip  on;

        include /etc/nginx/conf.d/*.conf;

        server {
            listen       {{ nginx_port }}; # Using the variable here
            server_name  localhost;

            #access_log  /var/log/nginx/host.access.log  main;

            location / {
                root   /usr/share/nginx/html;
                index  index.html index.htm;
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   /usr/share/nginx/html;
            }
        }
    }
    ```
4.  **Verification:** Run the playbook (`ansible-playbook deploy_web.yml`). Verify Nginx is installed, running, and listening on port 80 (or your overridden port) using `ss -tunlp | grep nginx` and `curl http://localhost`.

#### Assessment idea
1.  **Question:** You've created an Ansible role named `database_server` to install and configure MariaDB. You want to ensure that the MariaDB root password is set to a secure, unique value for each environment (development, staging, production). Where in the role's structure would you define a *default* password that can be easily overridden, and where would you define the *actual* environment-specific password without modifying the role itself?
    **Correct Answer and Explanation:**
    *   **Default Password:** The default password (`mariadb_root_password: "insecure_default"`) should be defined in `database_server/defaults/main.yml`. Variables in `defaults/` have the lowest precedence, making them ideal for providing sensible but easily overridden default values.
        ```yaml
        # database_server/defaults/main.yml
        mariadb_root_password: "insecure_default_password"
        ```
    *   **Environment-Specific Password:** The actual environment-specific password should be defined in `group_vars/` or `host_vars/` for the respective environment groups or hosts. For example, for a production environment, you might have `group_vars/production.yml`:
        ```yaml
        # inventory/group_vars/production.yml
        mariadb_root_password: "very_secure_prod_password_123!"
        ```
        When the playbook targets hosts in the `production` group, this variable will override the default defined in the role. For sensitive data like passwords, these variables should always be encrypted using **Ansible Vault**.

2.  **Question:** You are developing a role `app_deploy` that needs to copy a static `config.ini` file and a Jinja2 template `settings.py.j2`. Explain where these two files should be placed within the `app_deploy` role's directory structure and how you would reference them in tasks within `app_deploy/tasks/main.yml`.
    **Correct Answer and Explanation:**
    *   **`config.ini` (Static File):** This static file should be placed in the `app_deploy/files/` directory.
        *   **Reference in task:**
            ```yaml
            - name: Copy static config.ini
              ansible.builtin.copy:
                src: config.ini # Ansible automatically looks in 'files/'
                dest: /etc/app/config.ini
            ```
    *   **`settings.py.j2` (Jinja2 Template):** This template file should be placed in the `app_deploy/templates/` directory.
        *   **Reference in task:**
            ```yaml
            - name: Generate settings.py from template
              ansible.builtin.template:
                src: settings.py.j2 # Ansible automatically looks in 'templates/'
                dest: /opt/app/settings.py
            ```
    **Explanation:**
    Ansible's role structure is designed to simplify paths. When using the `ansible.builtin.copy` module, if `src` is a relative path, Ansible first looks in the role's `files/` directory. Similarly, for `ansible.builtin.template`, it first looks in the role's `templates/` directory. This convention eliminates the need to specify full, verbose paths within role tasks, making them cleaner and more portable.

#### AI generation note
Create a 12-minute live coding video. Begin with a 2-minute conceptual overview of roles and their benefits, visually depicting the directory structure. Then, demonstrate `ansible-galaxy init my_app_role` in the terminal. Navigate into the new role directory and populate `tasks/main.yml`, `handlers/main.yml`, `defaults/main.yml`, and create `templates/app.conf.j2` with a variable. Show how to create a simple `site.yml` playbook to apply this role. Run the playbook, showing the output and how the default variable is used. As an interactive element, prompt learners to modify `deploy_web.yml` to override the `nginx_port` variable via `group_vars` and re-run to see the change. Use clear split-screen views of the terminal and text editor, highlighting file paths and code.

---

## Module 3: Automating System Services & Processes

This module delves into the practical application of Ansible for managing core system services and processes on Red Hat Enterprise Linux systems. You will learn to automate common administrative tasks such as service control, package management, task scheduling, firewall configuration, and user/group administration, building essential skills for an RHCE.

---

### Chapter 3.1 — Managing Services with Ansible

#### Learning objectives
*   Understand how Ansible's `service` module interacts with `systemd` on RHEL systems.
*   Automate the starting, stopping, restarting, and reloading of system services.
*   Configure services to start automatically at boot time using Ansible.
*   Identify and resolve common issues encountered when managing services with Ansible.
*   Appreciate the idempotent nature of Ansible's service management.

#### Detailed lesson content
On Red Hat Enterprise Linux (RHEL) systems, `systemd` is the init system and service manager that has largely replaced the traditional `SysVinit` system. It's responsible for managing system startup, processes, and services after the kernel has booted. As an RHCE, you'll frequently interact with `systemd` to ensure critical applications and system components are running correctly. Manually managing services across many servers can be tedious, error-prone, and inconsistent. This is where Ansible shines, providing a powerful and idempotent way to automate service management.

Ansible's primary tool for interacting with `systemd` services is the `ansible.builtin.service` module. This module allows you to declaratively define the desired state of a service. Instead of telling the system *how* to start a service (e.g., `systemctl start httpd`), you tell Ansible *what* the desired state is (e.g., `httpd` should be `started`), and Ansible figures out the necessary commands. This declarative approach is fundamental to Ansible's power and its idempotency. Idempotency means that running the same playbook multiple times will always result in the same system state without causing unintended side effects or making unnecessary changes. If a service is already running and you tell Ansible to start it, Ansible will detect its current state and do nothing, reporting a "changed: false" status.

The `ansible.builtin.service` module has several key parameters. The `name` parameter specifies the service you want to manage (e.g., `httpd`, `nginx`, `sshd`). The `state` parameter defines the desired operational status of the service. Common values for `state` include `started` (ensures the service is running), `stopped` (ensures the service is not running), `restarted` (stops and then starts the service), and `reloaded` (tells the service to reload its configuration without a full restart, if the service supports it). The distinction between `restarted` and `reloaded` is important: `restarted` causes a brief outage as the service is completely shut down and brought back up, while `reloaded` aims for zero-downtime configuration updates. For services like `httpd` or `nginx`, `reloaded` is often preferred after configuration changes.

Another crucial parameter is `enabled`. This boolean parameter (`yes` or `no`) controls whether the service is configured to start automatically at boot time. Setting `enabled: yes` is equivalent to running `systemctl enable <service_name>`, ensuring your services persist across system reboots. Conversely, `enabled: no` prevents the service from starting automatically. When managing services, it's often a good practice to ensure the service is both `started` and `enabled` to guarantee it's running now and will continue to run after a reboot.

Let's consider a practical scenario. Imagine you need to ensure the `httpd` web server is installed, running, and configured to start at boot on a fleet of RHEL servers. Your Ansible task would look something like this:

```yaml
- name: Ensure httpd is installed, started, and enabled
  ansible.builtin.service:
    name: httpd
    state: started
    enabled: yes
```

This single task ensures all three conditions are met. If `httpd` isn't installed, Ansible will implicitly handle the installation (assuming a package manager like `dnf` is available and configured). If it's stopped, it will be started. If it's disabled, it will be enabled. This declarative power simplifies complex system administration.

Common mistakes when using the `service` module often include typos in the service `name`, which will lead to Ansible being unable to find the service. Always verify the exact service name using `systemctl list-unit-files --type=service` on a target host. Another mistake is forgetting the `enabled: yes` parameter, leading to services not starting after a reboot. Sometimes, a service might fail to start due to underlying configuration errors or missing dependencies. In such cases, Ansible will report a failure, and you'll need to investigate the service's logs on the target host using `journalctl -xeu <service_name>` to diagnose the root cause. When troubleshooting, remember that Ansible is merely executing commands on the target; the service's behavior is still governed by `systemd` and its configuration.

A critical safety note when managing services: be extremely cautious when stopping or restarting critical services in a production environment. Always test your playbooks in a staging environment first. If you're managing a cluster or load-balanced application, consider using rolling updates to minimize downtime. Forgetting to re-enable a critical service after a `state: stopped` operation can lead to prolonged outages after a system reboot. Always use `check_mode` (dry run) with `-C` or `--check` flags when you're unsure about the impact of a playbook.

#### Key concepts
*   **`systemd`**: The init system and service manager used on modern RHEL systems, responsible for managing processes and services.
*   **`ansible.builtin.service` module**: Ansible module used to manage the state of system services.
*   **`state` parameter**: Defines the desired operational status of a service (e.g., `started`, `stopped`, `restarted`, `reloaded`).
*   **`enabled` parameter**: Controls whether a service is configured to start automatically at system boot (`yes` or `no`).
*   **Idempotency**: The property of an operation where executing it multiple times produces the same result as executing it once, without causing unintended side effects.
*   **`reloaded` state**: Instructs a service to reload its configuration without a full restart, minimizing downtime.
*   **`daemon-reload`**: A `systemd` command (often implicitly handled by Ansible when needed) that reloads the `systemd` manager configuration, typically after new or modified unit files are deployed.

#### Hands-on activity
You are tasked with ensuring the `nginx` web server is installed, running, and configured to start automatically at boot on your RHEL servers. Additionally, you need to ensure the `firewalld` service is also running and enabled, and then restart `nginx` to pick up any potential configuration changes (even if none were made yet, for demonstration).

**Instructions:**
1.  Create a new Ansible playbook named `manage_web_services.yml`.
2.  Add tasks to:
    *   Ensure the `nginx` package is installed. (Hint: use the `ansible.builtin.dnf` module, which we'll cover more in the next chapter, but for now, you can use `state: present` for the package).
    *   Ensure the `nginx` service is `started` and `enabled`.
    *   Ensure the `firewalld` service is `started` and `enabled`.
    *   Perform a `restarted` operation on the `nginx` service.

**`manage_web_services.yml` template:**
```yaml
---
- name: Configure Web Services
  hosts: webservers # Assuming you have a 'webservers' group in your inventory
  become: yes

  tasks:
    - name: Ensure nginx package is installed
      ansible.builtin.dnf:
        name: nginx
        state: present

    - name: Ensure nginx service is started and enabled
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes

    - name: Ensure firewalld service is started and enabled
      ansible.builtin.service:
        name: firewalld
        state: started
        enabled: yes

    - name: Restart nginx service
      ansible.builtin.service:
        name: nginx
        state: restarted
```
Run this playbook against your target RHEL hosts and verify the service status using `systemctl status nginx` and `systemctl status firewalld` on the target.

#### Assessment idea
1.  **Question:** You have an Ansible task to manage the `sshd` service:
    ```yaml
    - name: Ensure SSH service is running
      ansible.builtin.service:
        name: sshd
        state: started
    ```
    After running this task, you reboot your server, and the `sshd` service is no longer running. What parameter is missing from this task, and why is it important for persistent service management?
    **Correct Answer:** The missing parameter is `enabled: yes`. This parameter is crucial because it configures the `sshd` service to start automatically at boot time via `systemd`. Without `enabled: yes`, the service might be started manually or by the playbook, but its startup configuration won't persist across reboots, meaning it won't be active after the system comes back online.

2.  **Question:** What is the primary functional difference between `state: restarted` and `state: reloaded` when managing a service like `httpd` with Ansible? Provide a scenario where each would be the preferred choice.
    **Correct Answer:**
    *   `state: restarted` performs a complete stop and then a start of the service. This means the service process is terminated and then a new process is initiated. This typically causes a brief period of unavailability or downtime for the service.
    *   `state: reloaded` sends a signal to the service (e.g., SIGHUP for `httpd` or `nginx`) instructing it to reload its configuration files without shutting down the main process. If the service supports it, this allows configuration changes to take effect with minimal to no downtime.
    **Scenario for `restarted`:** You've upgraded a critical library that `httpd` links against, or you've made a change that requires the service to completely re-initialize its internal state (e.g., a major version upgrade of the application). In these cases, a full restart is necessary to ensure the new components are loaded.
    **Scenario for `reloaded`:** You've simply updated `httpd`'s virtual host configuration to add a new website or change a logging directive. Since these changes typically don't require a full process restart, `reloaded` would be preferred to avoid interrupting existing connections or serving requests.

#### AI generation note
Create a 12-minute live coding video. Begin by demonstrating the current status of `httpd` and `firewalld` services on a clean RHEL VM using `systemctl status`. Then, write a playbook that ensures `httpd` and `firewalld` are installed (using `dnf`), `started`, and `enabled`. Execute the playbook, showing the "changed" status. Next, modify the playbook to set `httpd` to `state: stopped` and run it, verifying the service is down. Finally, change it back to `state: started` and `enabled`, and then add a task to `restarted` `httpd`, explaining the difference between `restarted` and `reloaded` verbally. Include a split-screen view of the Ansible playbook code on the left and the terminal output (showing `ansible-playbook` execution and `systemctl` commands) on the right. End with a reflection prompt asking learners to describe a situation where `reloaded` is better than `restarted`.

---

### Chapter 3.2 — Automating Package Management

#### Learning objectives
*   Utilize the `ansible.builtin.dnf` module for robust package management on RHEL 8+ systems.
*   Automate the installation, update, and removal of software packages across multiple managed hosts.
*   Manage software repositories on target systems using Ansible.
*   Implement strategies for version pinning specific packages to maintain application stability.
*   Understand the importance of GPG key verification and how to handle it in Ansible.

#### Detailed lesson content
Effective package management is a cornerstone of system administration, ensuring that software is consistently installed, updated, and removed across your infrastructure. On Red Hat Enterprise Linux 8 and newer, `dnf` (Dandified YUM) is the default package manager, offering improved performance and dependency resolution over its predecessor, `yum`. While `yum` commands still largely work as aliases, `dnf` is the underlying engine. Automating package management with Ansible brings immense benefits: it guarantees consistency, simplifies security patching, streamlines software deployments, and significantly reduces the potential for human error.

Ansible's primary module for managing packages on RHEL systems is `ansible.builtin.dnf`. This module is highly versatile and handles a wide range of package operations. The most common parameters you'll use are `name` and `state`. The `name` parameter specifies the package or list of packages you want to manage. For example, `name: httpd` for a single package or `name: ["nginx", "php-fpm"]` for multiple packages.

The `state` parameter dictates the desired status of the package:
*   `state: present`: Ensures the package is installed. If it's already installed, Ansible does nothing. If it's not installed, Ansible installs the latest available version.
*   `state: latest`: Ensures the package is installed and updated to the newest available version. This is useful for keeping systems patched.
*   `state: absent`: Ensures the package is removed from the system.
*   `state: reinstalled`: Reinstalls an already installed package.

For instance, to ensure the `htop` utility is installed on your servers, your task would be:

```yaml
- name: Ensure htop is installed
  ansible.builtin.dnf:
    name: htop
    state: present
```

To update all packages on a system, you can use `name: "*" with state: latest`. However, exercise extreme caution with this in production environments, as it can introduce breaking changes or unexpected behavior. It's often better to update specific packages or use more controlled update strategies.

```yaml
- name: Update all packages (use with caution in production)
  ansible.builtin.dnf:
    name: "*"
    state: latest
```

Managing software repositories is another critical aspect. While `dnf` primarily interacts with configured repositories (like those in `/etc/yum.repos.d/`), Ansible can help you manage these repository configuration files. A common approach is to use the `ansible.builtin.copy` module to place a `.repo` file (e.g., for the EPEL repository) into `/etc/yum.repos.d/`. Once the repository file is in place, `dnf` will automatically discover and use it.

```yaml
- name: Add EPEL repository
  ansible.builtin.copy:
    src: files/epel.repo # Assuming you have this file in your 'files' directory
    dest: /etc/yum.repos.d/epel.repo
    owner: root
    group: root
    mode: '0644'

- name: Install a package from EPEL (e.g., cowsay)
  ansible.builtin.dnf:
    name: cowsay
    state: present
    enablerepo: epel # Explicitly enable EPEL for this task if not globally enabled
```

Sometimes, you need to install a very specific version of a package to maintain compatibility or avoid regressions. This is known as version pinning. You can achieve this by specifying the full package name and version in the `name` parameter: `name: "package-name-1.2.3"`. When you use `state: present` with a version-pinned package, Ansible will install that specific version and will not upgrade it even if a newer version becomes available.

```yaml
- name: Install specific version of git
  ansible.builtin.dnf:
    name: "git-2.39.1"
    state: present
```

Common mistakes in package management include incorrect package names, which will result in Ansible reporting that the package cannot be found. Repository access issues (e.g., network problems, incorrect URL in `.repo` file) are also frequent. Another common issue is GPG key verification failures. `dnf` relies on GPG keys to verify the authenticity of packages. If a repository's GPG key isn't imported, `dnf` will refuse to install packages. While you can temporarily bypass this with `disable_gpg_check: yes` in the `dnf` module, this is a significant security risk and should **never** be used in production without a clear understanding of the implications. The correct approach is to ensure the GPG key is properly imported (e.g., using `rpm --import` or by configuring `gpgkey` and `gpgcheck=1` in the `.repo` file).

Safety notes for package management are paramount. Always test package updates in a staging environment before deploying to production. Use `check_mode` (`-C`) to perform a dry run and see what changes Ansible *would* make without actually applying them. Be aware that updating critical system libraries or kernel packages can sometimes require a system reboot. Plan for potential service disruptions when performing major updates.

#### Key concepts
*   **`dnf`**: The default package manager for RHEL 8+ systems, used for installing, updating, and removing software packages.
*   **`ansible.builtin.dnf` module**: Ansible module specifically designed for managing packages on `dnf`-based systems.
*   **`state: present`**: Ensures a package is installed.
*   **`state: latest`**: Ensures a package is installed and updated to its newest available version.
*   **`state: absent`**: Ensures a package is removed.
*   **Repository Management**: The process of adding, configuring, or removing software repositories (e.g., EPEL) from which packages are sourced.
*   **Version Pinning**: Installing a specific version of a package to prevent automatic updates and maintain compatibility.
*   **GPG Key Verification**: A security mechanism used by `dnf` to verify the authenticity and integrity of packages using cryptographic signatures.
*   **`disable_gpg_check`**: A parameter in the `dnf` module to temporarily bypass GPG key verification (use with extreme caution).

#### Hands-on activity
You need to manage several packages on your RHEL hosts. Specifically, you want to:
1.  Ensure the `tmux` package is installed.
2.  Ensure the `wget` package is updated to the `latest` version.
3.  Remove the `nano` package if it's present.
4.  Install `epel-release` and then install the `cowsay` package from the EPEL repository.

**Instructions:**
1.  Create a new Ansible playbook named `manage_packages.yml`.
2.  Add tasks to perform the operations listed above.

**`manage_packages.yml` template:**
```yaml
---
- name: Automate Package Management
  hosts: all # Or a specific group like 'servers'
  become: yes

  tasks:
    - name: Ensure tmux is installed
      ansible.builtin.dnf:
        name: tmux
        state: present

    - name: Ensure wget is at the latest version
      ansible.builtin.dnf:
        name: wget
        state: latest

    - name: Ensure nano is absent
      ansible.builtin.dnf:
        name: nano
        state: absent

    - name: Ensure EPEL repository is installed
      ansible.builtin.dnf:
        name: epel-release
        state: present

    - name: Install cowsay from EPEL
      ansible.builtin.dnf:
        name: cowsay
        state: present
        enablerepo: epel # Explicitly enable EPEL for this task
```
Run this playbook against your target RHEL hosts. Verify the package states using `dnf list installed <package_name>` and `dnf info <package_name>` on the target.

#### Assessment idea
1.  **Question:** You need to ensure the `git` package is installed on your RHEL servers, but you specifically want to install version `2.39.1` and prevent it from being updated automatically by future `dnf update` operations. How would you write an Ansible task to achieve this?
    **Correct Answer:**
    ```yaml
    - name: Ensure git version 2.39.1 is installed
      ansible.builtin.dnf:
        name: "git-2.39.1" # Specify the exact version
        state: present    # Ensures it's installed, but won't upgrade if already present
    ```
    **Explanation:** By specifying the full package name including the version (`git-2.39.1`) in the `name` parameter, `dnf` will target that specific version. Using `state: present` ensures that if this version is not installed, it will be installed. If `git-2.39.1` is already installed, Ansible will report no changes. If a newer version of `git` is available, `state: present` will *not* upgrade it, effectively pinning the version.

2.  **Question:** Your Ansible playbook fails when trying to install a package from a newly added custom repository, with an error indicating a GPG key issue. What is a common cause for this, and how can you temporarily bypass it (with a warning about security implications)?
    **Correct Answer:** A common cause for a GPG key issue is that the GPG key used to sign packages in the new repository has not been imported into the system's RPM database. `dnf` (and `yum`) by default verifies package signatures for security.
    To temporarily bypass this, you can add `disable_gpg_check: yes` to your `ansible.builtin.dnf` task:
    ```yaml
    - name: Install package from custom repo (temporarily disabling GPG check)
      ansible.builtin.dnf:
        name: my_custom_package
        state: present
        enablerepo: my_custom_repo
        disable_gpg_check: yes # WARNING: This is a security risk!
    ```
    **Warning:** Disabling GPG checks means the system will install packages without verifying their authenticity or integrity. This makes your system vulnerable to malicious or corrupted packages and is **not recommended for production environments**. The proper solution is to obtain and import the legitimate GPG key for the repository using `rpm --import /path/to/key.gpg` or by configuring the `gpgkey` and `gpgcheck=1` directives within the `.repo` file itself.

#### AI generation note
Create a 10-minute live coding video. Start with a RHEL VM and show `dnf list installed` for a few common packages. Write a playbook to install `htop` (if not present), ensure `wget` is `latest`, and remove `nano`. Execute the playbook, showing the "changed" status for `htop` and `wget` if updates occurred, and "ok" for `nano` if it was already absent. Then, demonstrate adding the EPEL repository using `ansible.builtin.dnf` (for `epel-release`) and then installing `cowsay` from it. Show the `dnf info cowsay` output. Emphasize the difference between `state: present` and `state: latest`. Include a split-screen view of the Ansible playbook code and the terminal output. End with a mini-quiz asking about the correct `state` parameter to install a specific version of a package.

---

### Chapter 3.3 — Scheduling Tasks with Ansible (Cron)

#### Learning objectives
*   Understand the purpose and fundamental syntax of `cron` jobs for scheduling recurring tasks on Linux systems.
*   Automate the creation, modification, and removal of user-specific and system-wide `cron` jobs using Ansible.
*   Configure various `cron` job parameters, including user, environment variables, and specific job commands.
*   Implement `cron` jobs for common administrative tasks such as backups, log rotation, and system monitoring.
*   Identify and troubleshoot common issues related to `cron` job execution with Ansible.

#### Detailed lesson content
On Linux systems, `cron` is the traditional and ubiquitous utility for scheduling commands or scripts to run automatically at specified intervals. It's an indispensable tool for routine administrative tasks like generating reports, performing backups, cleaning up temporary files, or rotating logs. Understanding `cron` is essential for any system administrator, and automating its management with Ansible ensures consistency, reduces manual errors, and provides a centralized way to manage scheduled tasks across your entire infrastructure.

A `cron` job consists of a schedule and a command to execute. The schedule is typically defined by five fields representing minute, hour, day of month, month, and day of week. For example, `0 2 * * *` means "at 2:00 AM every day." User-specific `cron` jobs are managed via `crontab` files, typically located in `/var/spool/cron/` and edited with the `crontab -e` command. System-wide `cron` jobs are often placed in `/etc/crontab`, `/etc/cron.d/`, or in directories like `/etc/cron.hourly/`.

Ansible's `ansible.builtin.cron` module is your go-to tool for managing `cron` entries. It's designed to be idempotent, meaning it will create, modify, or remove a `cron` job only if the desired state is different from the current state. Key parameters for the `cron` module include `name` (a unique identifier for the job), `job` (the command to execute), `user` (the user whose `crontab` the job will be added to), and the scheduling parameters (`minute`, `hour`, `day`, `month`, `weekday`). You can also use `special_time` for common intervals like `@reboot`, `@hourly`, `@daily`, `@weekly`, `@monthly`, or `@yearly`.

Let's say you want to schedule a daily backup script (`/opt/scripts/daily_backup.sh`) to run at 3:00 AM as the `root` user. Your Ansible task would look like this:

```yaml
- name: Schedule daily backup script
  ansible.builtin.cron:
    name: "Daily Backup"
    minute: "0"
    hour: "3"
    job: "/opt/scripts/daily_backup.sh >> /var/log/daily_backup.log 2>&1"
    user: root
    state: present
```

The `job` parameter includes the script path and output redirection (`>> /var/log/daily_backup.log 2>&1`) which is crucial for capturing any output or errors from the script, as `cron` jobs typically don't have an interactive terminal. The `state: present` ensures the job exists; if it's already there with the specified `name`, Ansible will ensure its parameters match. To remove a `cron` job, you simply set `state: absent` with the correct `name`.

A common challenge with `cron` jobs is their minimal execution environment. Unlike an interactive shell, `cron` jobs often run with a very limited `PATH` and few environment variables. This can lead to scripts failing because they can't find commands (e.g., `python` instead of `/usr/bin/python`). To mitigate this, always use absolute paths for commands within your `cron` jobs. If your script requires specific environment variables, the `ansible.builtin.cron` module allows you to set them using the `environment` parameter:

```yaml
- name: Schedule script with custom environment variable
  ansible.builtin.cron:
    name: "My Script with JAVA_HOME"
    minute: "0"
    hour: "1"
    job: "/usr/local/bin/my_java_app.sh"
    user: appuser
    environment:
      JAVA_HOME: "/usr/lib/jvm/java-11-openjdk"
      MY_CUSTOM_VAR: "value"
    state: present
```

For system-wide `cron` jobs, which are typically placed in `/etc/cron.d/`, you can use the `cron_file` parameter with the `ansible.builtin.cron` module. This allows you to manage `cron` entries in a separate file, which is often preferred for application-specific scheduled tasks.

```yaml
- name: Add system-wide cron job for app monitoring
  ansible.builtin.cron:
    name: "App Monitoring"
    cron_file: app_monitor # Creates /etc/cron.d/app_monitor
    minute: "*/5"
    job: "/usr/local/bin/monitor_app.py"
    user: root
    state: present
```

Common mistakes include incorrect `cron` syntax (e.g., wrong number of asterisks), forgetting to make the script executable (`chmod +x`), or the script having permission issues. Always ensure the `user` specified in the Ansible task has the necessary permissions to execute the `job`. When troubleshooting, check the system logs (`journalctl -xeu cron` or `/var/log/cron`) for any errors reported by `cron` itself. More importantly, ensure your script redirects its output to a file so you can inspect its execution.

Safety notes: Be extremely careful when scheduling commands that can modify or delete data, especially with `root` privileges. Always test `cron` jobs in a non-production environment first. Use `check_mode` (`-C`) with your Ansible playbooks to verify the changes before applying them. Ensure your scripts are robust and handle errors gracefully. A poorly written `cron` job can consume excessive resources, fill up disk space with logs, or even cause system instability.

#### Key concepts
*   **`cron`**: A time-based job scheduler in Unix-like operating systems.
*   **`crontab`**: The command used to create, edit, and view `cron` jobs for individual users. Also refers to the file format for `cron` entries.
*   **`ansible.builtin.cron` module**: Ansible module for managing `cron` entries.
*   **`name` parameter**: A unique identifier for an Ansible-managed `cron` job.
*   **`job` parameter**: The command or script to be executed by the `cron` job.
*   **`user` parameter**: Specifies the user whose `crontab` the job will be added to.
*   **`special_time`**: Shorthand for common `cron` schedules (e.g., `@daily`, `@reboot`).
*   **`environment` parameter**: Allows setting specific environment variables for a `cron` job.
*   **`cron_file` parameter**: Used to manage system-wide `cron` jobs by creating a file in `/etc/cron.d/`.
*   **Absolute Paths**: The practice of using full paths for commands and scripts within `cron` jobs due to `cron`'s minimal `PATH` environment.

#### Hands-on activity
You need to set up a simple `cron` job on your RHEL hosts to demonstrate Ansible's capabilities.
1.  Create a `cron` job that runs every 5 minutes as the `root` user. This job should append the current date and time to a file named `/tmp/ansible_cron_test.log`.
2.  After verifying it works, modify the same `cron` job to run hourly instead of every 5 minutes, using `special_time`.
3.  Finally, remove the `cron` job.

**Instructions:**
1.  Create an Ansible playbook named `manage_cron_jobs.yml`.
2.  Implement the tasks as described above.

**`manage_cron_jobs.yml` template:**
```yaml
---
- name: Manage Cron Jobs
  hosts: all
  become: yes

  tasks:
    - name: Create a cron job to log current time every 5 minutes
      ansible.builtin.cron:
        name: "Ansible Cron Test Log"
        minute: "*/5"
        job: "echo \"$(date)\" >> /tmp/ansible_cron_test.log"
        user: root
        state: present

    - name: Pause for a few seconds to let the first cron trigger (optional, for demo)
      ansible.builtin.pause:
        seconds: 10

    - name: Verify the log file content
      ansible.builtin.command: cat /tmp/ansible_cron_test.log
      register: log_content
      changed_when: false # This task is for verification, not changing state
    - name: Display log content
      ansible.builtin.debug:
        var: log_content.stdout_lines

    - name: Modify the cron job to run hourly using special_time
      ansible.builtin.cron:
        name: "Ansible Cron Test Log" # Must match the name of the job to modify
        special_time: "@hourly"
        job: "echo \"Hourly $(date)\" >> /tmp/ansible_cron_test.log"
        user: root
        state: present

    - name: Remove the cron job
      ansible.builtin.cron:
        name: "Ansible Cron Test Log"
        state: absent
```
Run the playbook in stages (e.g., comment out the modification and removal tasks initially). Verify the `crontab -l` output for `root` and the contents of `/tmp/ansible_cron_test.log` on the target host after each stage.

#### Assessment idea
1.  **Question:** You need to schedule a Python script named `/opt/scripts/data_processor.py` to run every Monday at 1:00 AM as the `appuser`. This script requires the `PYTHONPATH` environment variable to be set to `/usr/local/lib/python3.9/site-packages`. How would you write an Ansible task to achieve this?
    **Correct Answer:**
    ```yaml
    - name: Schedule weekly data processing script
      ansible.builtin.cron:
        name: "Weekly Data Processor"
        minute: "0"
        hour: "1"
        weekday: "1" # Monday
        user: "appuser"
        job: "/usr/bin/python3 /opt/scripts/data_processor.py >> /var/log/data_processor.log 2>&1"
        environment:
          PYTHONPATH: "/usr/local/lib/python3.9/site-packages"
        state: present
    ```
    **Explanation:** This task uses `minute`, `hour`, and `weekday` for the schedule. The `user` parameter ensures it runs as `appuser`. The `job` parameter includes the absolute path to the Python interpreter and script, along with output redirection. The `environment` parameter correctly sets `PYTHONPATH` for the job's execution context.

2.  **Question:** You've created an Ansible playbook to add a `cron` job, and Ansible reports it as "changed," but the job never seems to execute, and you can't find any errors in `syslog` or `journalctl`. What are two common reasons for this silent failure, and how can you debug them?
    **Correct Answer:**
    Two common reasons for a `cron` job's silent failure are:
    1.  **Incorrect `PATH` or environment variables:** `cron` jobs run with a minimal `PATH` and environment, which often differs from an interactive shell. Scripts relying on commands not in `cron`'s default `PATH` (e.g., `python` instead of `/usr/bin/python3`, or custom binaries) will fail.
        **Debugging:**
        *   Always use **absolute paths** for all commands and scripts within the `job` parameter.
        *   If specific environment variables are needed, set them explicitly using the `environment` parameter in the `ansible.builtin.cron` module.
        *   Add a temporary `cron` job to log the environment: `job: "env > /tmp/cron_env.log"` to inspect what `cron` provides.
    2.  **Script permissions or shebang issues:** The script itself might not be executable, or its shebang line (e.g., `#!/bin/bash`) might be missing or incorrect, preventing the system from knowing how to execute it.
        **Debugging:**
        *   Ensure the script has execute permissions: `chmod +x /path/to/script.sh`.
        *   Verify the shebang line is correct and points to a valid interpreter.
        *   Test running the script manually as the `cron` user: `sudo -u <cron_user> /path/to/script.sh`.

#### AI generation note
Create a 12-minute live coding video. Start by showing an empty `crontab -l` for the `root` user on a RHEL VM. Write a playbook to create a `cron` job that echoes "Ansible Cron is running at $(date)" to `/tmp/ansible_cron_output.log` every minute. Run the playbook, then show `crontab -l` and `tail -f /tmp/ansible_cron_output.log` to demonstrate it working. Next, modify the playbook to change the job to run `@hourly` using `special_time`, and show the `crontab -l` update. Discuss the importance of absolute paths and output redirection. Finally, add a task to remove the `cron` job with `state: absent`. Include a split-screen view of the playbook and the terminal output. End with an interactive coding exercise: "Write an Ansible task to schedule a script `/usr/local/bin/check_disk_space.sh` to run daily at 4:15 AM as the `root` user, logging its output to `/var/log/disk_check.log`."

---

### Chapter 3.4 — Configuring Firewalls with Ansible

#### Learning objectives
*   Understand the role of `firewalld` in RHEL security and its zone-based approach to network filtering.
*   Automate `firewalld` configuration using the `ansible.posix.firewalld` module.
*   Add and remove services, ports, and port forwarding rules to `firewalld`.
*   Manage `firewalld` zones and ensure persistent firewall configurations across reboots.
*   Implement `firewalld` rich rules for advanced and granular network access control.

#### Detailed lesson content
Network security is paramount in any IT environment, and on Red Hat Enterprise Linux systems, `firewalld` is the dynamic firewall management solution. Unlike its predecessor `iptables`, `firewalld` uses a zone-based approach, which simplifies configuration by grouping network interfaces and traffic into different security zones (e.g., `public`, `internal`, `trusted`). Each zone has its own set of rules, making it easier to manage network access based on the trust level of the network connection. As an RHCE, you'll be responsible for securing your servers, and automating `firewalld` configuration with Ansible is crucial for maintaining consistent security policies across your infrastructure.

Automating `firewalld` with Ansible provides several advantages: it ensures that all servers adhere to the same security posture, reduces the risk of human error during manual configuration, and allows for rapid deployment of security updates. The `ansible.posix.firewalld` module is the primary tool for this. Before you start configuring rules, it's essential to ensure the `firewalld` service itself is running and enabled, which you can do using the `ansible.builtin.service` module from the previous chapter.

The `ansible.posix.firewalld` module has several key parameters. `zone` specifies which `firewalld` zone the rule applies to (e.g., `public` is the default for external interfaces). `service` allows you to open predefined services (like `http`, `https`, `ssh`). `port` allows you to open specific TCP or UDP ports (e.g., `8080/tcp`). `state` controls whether the rule is `enabled` (present) or `disabled` (absent).

Crucially, `firewalld` has both a *runtime* configuration (active immediately but lost on reboot) and a *permanent* configuration (persists across reboots but requires a reload to become active). Ansible's `firewalld` module simplifies this with the `permanent` and `immediate` parameters.
*   `permanent: yes`: Ensures the rule is written to the permanent configuration, so it survives reboots.
*   `immediate: yes`: Applies the rule to the runtime configuration immediately, without needing a `firewall-cmd --reload`.
For most production scenarios, you'll want to set both `permanent: yes` and `immediate: yes` to ensure the rule is active now and persists.

Let's say you need to open TCP ports 80 (HTTP) and 443 (HTTPS) in the `public` zone for a web server, and ensure the `ssh` service is also allowed.

```yaml
- name: Ensure firewalld is running and enabled
  ansible.builtin.service:
    name: firewalld
    state: started
    enabled: yes

- name: Allow HTTP service in public zone
  ansible.posix.firewalld:
    zone: public
    service: http
    state: enabled
    permanent: yes
    immediate: yes

- name: Allow HTTPS service in public zone
  ansible.posix.firewalld:
    zone: public
    service: https
    state: enabled
    permanent: yes
    immediate: yes

- name: Ensure SSH service is allowed in public zone (safety measure)
  ansible.posix.firewalld:
    zone: public
    service: ssh
    state: enabled
    permanent: yes
    immediate: yes
```

For more complex scenarios, `firewalld` offers "rich rules," which provide granular control over network traffic based on source/destination IP addresses, protocols, ports, and actions (accept, reject, drop, masquerade, forward-port). The `rich_rule` parameter allows you to define these directly. For example, to allow SSH only from a specific source IP address:

```yaml
- name: Allow SSH only from specific IP using a rich rule
  ansible.posix.firewalld:
    zone: public
    rich_rule: 'rule family="ipv4" source address="192.168.1.100" service name="ssh" accept'
    state: enabled
    permanent: yes
    immediate: yes
```
Remember that `firewalld` processes rules in a specific order, and rich rules generally have higher precedence.

Common mistakes when configuring `firewalld` with Ansible include forgetting `permanent: yes`, which leads to rules being lost after a reboot. Another critical error is accidentally blocking your own SSH access to the server. Always ensure that the `ssh` service is allowed in the relevant zone before making other changes. Incorrect service or port names can also cause issues. When troubleshooting, use `firewall-cmd --list-all --zone=<zone_name>` on the target host to inspect the active rules.

Safety notes are paramount when dealing with firewalls. Always test your firewall playbooks in a non-production environment first. When working remotely, ensure you have an emergency console or out-of-band access (like IPMI or iLO) in case you accidentally lock yourself out. A common best practice is to have a task that explicitly allows SSH from your Ansible control node's IP address as one of the very first firewall rules. Use `check_mode` (`-C`) to preview the changes before applying them.

#### Key concepts
*   **`firewalld`**: The dynamic firewall management solution for RHEL systems, using a zone-based approach.
*   **Zones**: Security contexts in `firewalld` (e.g., `public`, `internal`) to which network interfaces and traffic are assigned, each with its own rules.
*   **`ansible.posix.firewalld` module**: Ansible module for managing `firewalld` configurations.
*   **`service` parameter**: Allows enabling/disabling predefined services (e.g., `http`, `ssh`).
*   **`port` parameter**: Allows opening/closing specific TCP or UDP ports.
*   **`permanent: yes`**: Ensures firewall rules persist across system reboots.
*   **`immediate: yes`**: Applies firewall rules to the runtime configuration immediately.
*   **Rich Rules**: Advanced `firewalld` rules providing granular control based on source/destination, protocols, ports, and actions.
*   **Runtime vs. Permanent Configuration**: The distinction between active rules that are lost on reboot and rules saved to disk that persist.

#### Hands-on activity
You need to configure `firewalld` on your RHEL servers to allow access for a new application.
1.  Ensure the `firewalld` service is running and enabled.
2.  Open TCP port `8080` in the `public` zone, ensuring the change is both permanent and immediate.
3.  Add a rich rule to allow `ping` (ICMP) from any source to the `public` zone, also permanently and immediately.
4.  Remove the `http` service from the `public` zone (if it was previously allowed).

**Instructions:**
1.  Create an Ansible playbook named `configure_firewall.yml`.
2.  Implement the tasks as described above.

**`configure_firewall.yml` template:**
```yaml
---
- name: Configure Firewalld
  hosts: webservers # Or your target group
  become: yes

  tasks:
    - name: Ensure firewalld service is running and enabled
      ansible.builtin.service:
        name: firewalld
        state: started
        enabled: yes

    - name: Allow TCP port 8080 in public zone
      ansible.posix.firewalld:
        zone: public
        port: 8080/tcp
        state: enabled
        permanent: yes
        immediate: yes

    - name: Allow ICMP (ping) from any source in public zone using a rich rule
      ansible.posix.firewalld:
        zone: public
        rich_rule: 'rule protocol value="icmp" accept'
        state: enabled
        permanent: yes
        immediate: yes

    - name: Remove HTTP service from public zone (if present)
      ansible.posix.firewalld:
        zone: public
        service: http
        state: disabled
        permanent: yes
        immediate: yes
```
Run this playbook against your target RHEL hosts. Verify the firewall rules using `firewall-cmd --list-all --zone=public` on the target. Test access to port 8080 and `ping` from another machine.

#### Assessment idea
1.  **Question:** You need to configure `firewalld` on a RHEL server to allow incoming traffic on TCP port `9000` for a new application. This change must survive a reboot and take effect immediately. Additionally, you want to ensure the `ssh` service is allowed in the `public` zone. Write an Ansible playbook task (or tasks) to achieve this.
    **Correct Answer:**
    ```yaml
    - name: Ensure firewalld is running and enabled
      ansible.builtin.service:
        name: firewalld
        state: started
        enabled: yes

    - name: Allow TCP port 9000 permanently and immediately
      ansible.posix.firewalld:
        zone: public
        port: 9000/tcp
        state: enabled
        permanent: yes
        immediate: yes

    - name: Ensure SSH service is allowed in public zone (critical for remote access)
      ansible.posix.firewalld:
        zone: public
        service: ssh
        state: enabled
        permanent: yes
        immediate: yes
    ```
    **Explanation:** The first task ensures `firewalld` itself is operational. The second task uses the `port` parameter to open `9000/tcp` and crucially sets both `permanent: yes` (for persistence) and `immediate: yes` (for immediate application). The third task explicitly ensures the `ssh` service is allowed in the `public` zone, which is a vital safety measure to prevent locking yourself out.

2.  **Question:** After deploying a `firewalld` configuration with Ansible, you find that the changes are active, but after a server reboot, they are lost. What parameter did you likely forget in your `ansible.posix.firewalld` tasks, and why is it important?
    **Correct Answer:** You likely forgot to set `permanent: yes` in your `ansible.posix.firewalld` tasks.
    **Importance:** The `permanent` parameter ensures that the `firewalld` configuration is written to disk (e.g., to XML files in `/etc/firewalld/zones/`). Without `permanent: yes`, changes are only applied to the *runtime* configuration, which is volatile and lost when the `firewalld` service restarts or the system reboots. For production systems, it is almost always necessary to make changes permanent to ensure security policies persist.

#### AI generation note
Create a 12-minute live coding video. Start by showing `firewall-cmd --list-all --zone=public` on a default RHEL VM. Write a playbook to ensure `firewalld` is running, then add `http` and `https` services to the `public` zone, setting both `permanent: yes` and `immediate: yes`. Execute the playbook and show `firewall-cmd --list-all` to confirm the changes. Next, demonstrate opening a custom port like `8080/tcp` and then adding a simple rich rule to allow `ping` (ICMP). Emphasize the difference between `permanent` and `immediate` and the importance of `ssh` access. Include a split-screen view of the playbook, `firewall-cmd` output, and potentially a `curl` command to test web access. End with a reflection prompt: "Why is it critical to use `permanent: yes` when configuring `firewalld` with Ansible for production systems, and what are the risks if you don't?"

---

### Chapter 3.5 — User and Group Management with Ansible

#### Learning objectives
*   Automate the creation, modification, and deletion of local user accounts and groups on RHEL systems.
*   Configure essential user attributes such as UID, GID, home directory, default shell, and password hashes using Ansible.
*   Securely manage user SSH keys for passwordless authentication.
*   Implement `sudo` access for users and groups using Ansible, adhering to security best practices.
*   Understand critical safety considerations and common mistakes in automated user and group management.

#### Detailed lesson content
Managing user accounts and groups is a fundamental aspect of system administration, crucial for maintaining security, controlling access to resources, and ensuring accountability on your RHEL servers. Manually creating, modifying, and deleting users and groups across many systems is not only time-consuming but also prone to inconsistencies and security vulnerabilities. Ansible provides powerful modules to automate these tasks, ensuring a standardized and secure approach to identity management.

Ansible offers two primary modules for this purpose: `ansible.builtin.group` for managing groups and `ansible.builtin.user` for managing user accounts. Both modules are idempotent, meaning they will only make changes if the current state differs from the desired state.

The `ansible.builtin.group` module is straightforward. You typically use `name` to specify the group name and `state` to define its presence (`present` to create/ensure existence, `absent` to remove). You can also specify a `gid` if you need a specific Group ID.

```yaml
- name: Ensure 'developers' group exists
  ansible.builtin.group:
    name: developers
    state: present
    gid: 2000 # Optional: specify a GID
```

The `ansible.builtin.user` module is more comprehensive, allowing you to manage a wide array of user attributes. Key parameters include:
*   `name`: The username.
*   `state`: `present` to create/ensure existence, `absent` to remove.
*   `uid`: Optional, specific User ID.
*   `group`: The primary group for the user.
*   `groups`: A comma-separated list of supplementary groups the user should be a member of.
*   `append`: `yes` if you want to add the user to `groups` without removing them from other existing groups.
*   `shell`: The user's default login shell (e.g., `/bin/bash`, `/sbin/nologin`).
*   `home`: The user's home directory path.
*   `password`: The hashed password for the user. **Critical safety note:** Never store plain-text passwords in your playbooks. Always use a hashed password (e.g., generated with `mkpasswd -m sha-512` on a Linux system) and, for production, store it securely using Ansible Vault.
*   `ssh_key_file`, `ssh_key_type`, `ssh_key_options`: For securely managing SSH public keys.

Let's create a new user `jdoe`, add them to the `developers` group, set their shell, and add an SSH public key for passwordless login:

```yaml
- name: Create user 'jdoe'
  ansible.builtin.user:
    name: jdoe
    state: present
    shell: /bin/bash
    home: /home/jdoe
    group: developers # Primary group
    groups: developers,sudo # Supplementary groups, assuming 'sudo' group exists
    append: yes # Add to groups without removing from others
    password: "{{ 'your_hashed_password_here' | password_hash('sha512') }}" # Use Ansible Vault!

- name: Add SSH public key for jdoe
  ansible.builtin.authorized_key:
    user: jdoe
    state: present
    key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD3b... jdoe@workstation"
```
The `ansible.builtin.authorized_key` module is specifically designed for managing SSH public keys in `~/.ssh/authorized_keys` and is generally preferred over manually copying files for security and idempotency.

When deleting users, `state: absent` will remove the user account. If you also want to remove their home directory and mail spool, add `remove: yes`. This is a destructive action, so use it with extreme caution.

```yaml
- name: Remove user 'olduser' and their home directory
  ansible.builtin.user:
    name: olduser
    state: absent
    remove: yes
```

Managing `sudo` access is another critical security task. You can grant users or groups `sudo` privileges by creating files in the `/etc/sudoers.d/` directory. This is generally preferred over directly editing `/etc/sudoers` because it allows for modular configurations and reduces the risk of syntax errors breaking `sudo` entirely. You can use the `ansible.builtin.copy` module to place a `sudoers` file, or `ansible.builtin.lineinfile` for simpler additions.

```yaml
- name: Grant 'developers' group NOPASSWD sudo access
  ansible.builtin.copy:
    content: '%developers ALL=(ALL) NOPASSWD: ALL'
    dest: /etc/sudoers.d/developers
    owner: root
    group: root
    mode: '0440'
    validate: /usr/sbin/visudo -cf %s # Critical: validate sudoers syntax
```
The `validate` parameter with `visudo -cf %s` is extremely important here. It ensures that the `sudoers` file syntax is correct before it's written, preventing you from accidentally locking yourself out of `sudo` access.

Common mistakes include using plain-text passwords, incorrect SSH key formats, forgetting to add users to necessary supplementary groups, or making syntax errors in `sudoers` files. Always verify user creation with `id <username>` and `cat /etc/passwd` (or `getent passwd`). Verify `sudo` access by attempting a `sudo` command as the new user.

Safety notes: Always test user and group management playbooks in a non-production environment first. Be extremely careful when deleting users with `remove: yes`, as it permanently deletes their data. When managing `sudo` access, double-check your rules, and always use the `validate` parameter with `visudo` to prevent system-wide `sudo` failures. For sensitive data like passwords, always use Ansible Vault to encrypt them.

#### Key concepts
*   **`ansible.builtin.group` module**: Ansible module for managing local groups.
*   **`ansible.builtin.user` module**: Ansible module for managing local user accounts.
*   **`state: present/absent`**: Parameters to create/ensure existence or remove users/groups.
*   **`uid`/`gid`**: User ID and Group ID.
*   **`shell`**: The default login shell for a user.
*   **`home`**: The user's home directory.
*   **`password` (hashed)**: Securely storing user passwords using cryptographic hashes.
*   **`ansible.builtin.authorized_key` module**: Dedicated module for managing SSH public keys in `~/.ssh/authorized_keys`.
*   **`sudo` access**: Granting users or groups elevated privileges.
*   **`/etc/sudoers.d/`**: Directory for modular `sudo` configuration files.
*   **`validate` parameter**: Used with modules like `copy` to validate file syntax (e.g., `visudo` for `sudoers` files).
*   **Ansible Vault**: A feature for encrypting sensitive data in Ansible playbooks.

#### Hands-on activity
You need to set up a new administrative user and group on your RHEL servers.
1.  Create a group named `ops_team` with a specific GID of `3000`.
2.  Create a user named `ansible_admin` with a UID of `3001`, `/bin/bash` shell, and add them as a primary member of the `ops_team` group.
3.  Add a provided SSH public key (`ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDQ... ansible_admin@control`) to `ansible_admin`'s `authorized_keys`.
4.  Grant the `ops_team` group `NOPASSWD` sudo access by creating a file in `/etc/sudoers.d/`.

**Instructions:**
1.  Create an Ansible playbook named `manage_users_groups.yml`.
2.  Implement the tasks as described above.

**`manage_users_groups.yml` template:**
```yaml
---
- name: Manage Users and Groups
  hosts: all
  become: yes

  tasks:
    - name: Ensure 'ops_team' group exists with GID 3000
      ansible.builtin.group:
        name: ops_team
        gid: 3000
        state: present

    - name: Create user 'ansible_admin' with UID 3001 and add to 'ops_team'
      ansible.builtin.user:
        name: ansible_admin
        uid: 3001
        shell: /bin/bash
        home: /home/ansible_admin
        group: ops_team # Primary group
        state: present
        # For production, use a hashed password and Ansible Vault:
        # password: "{{ 'your_hashed_password_here' | password_hash('sha512') }}"

    - name: Add SSH public key for ansible_admin
      ansible.builtin.authorized_key:
        user: ansible_admin
        state: present
        key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDQ... ansible_admin@control"

    - name: Grant 'ops_team' group NOPASSWD sudo access
      ansible.builtin.copy:
        content: '%ops_team ALL=(ALL) NOPASSWD: ALL'
        dest: /etc/sudoers.d/ops_team_sudo
        owner: root
        group: root
        mode: '0440'
        validate: /usr/sbin/visudo -cf %s # Critical for safety!
```
Run this playbook against your target RHEL hosts. Verify the user and group creation using `id ansible_admin` and `getent group ops_team`. Test `sudo` access by attempting to `ssh` into the target as `ansible_admin` and then running `sudo whoami`.

#### Assessment idea
1.  **Question:** You need to create a new user named `devops_user` on your RHEL servers. This user should have a home directory, `/bin/bash` as their default shell, and be a member of a new group called `devops`. Additionally, you must add their public SSH key (provided as a string: `ssh-rsa AAAAB3NzaC... devops_user@workstation`) to their `authorized_keys`. Write the Ansible tasks to achieve this, ensuring the password is not stored in plain text.
    **Correct Answer:**
    ```yaml
    - name: Create 'devops' group
      ansible.builtin.group:
        name: devops
        state: present

    - name: Create 'devops_user' with home directory and shell
      ansible.builtin.user:
        name: devops_user
        state: present
        shell: /bin/bash
        home: /home/devops_user
        groups: devops # Add to supplementary group
        append: yes    # Append to groups if other groups exist
        # For production, use Ansible Vault for the hashed password:
        # password: "{{ 'your_hashed_password_here' | password_hash('sha512') }}"

    - name: Add SSH public key for devops_user
      ansible.builtin.authorized_key:
        user: devops_user
        state: present
        key: "ssh-rsa AAAAB3NzaC... devops_user@workstation"
    ```
    **Explanation:** The first task creates the `devops` group. The second task creates the `devops_user`, sets their shell and home directory, and adds them to the `devops` group. The `append: yes` ensures they are added to `devops` without removing them from any other groups they might already be in. The `password` parameter is shown with a placeholder for a hashed password, emphasizing the need for secure storage (Ansible Vault). The third task uses the `ansible.builtin.authorized_key` module, which is the secure and idempotent way to manage SSH access.

2.  **Question:** You've created a user `testuser` with Ansible, and now you want to remove them and their home directory completely. How would you modify your Ansible `user` task to achieve this, and what is a critical safety consideration when performing such an action?
    **Correct Answer:** To remove the user and their home directory, you would use:
    ```yaml
    - name: Remove testuser and their home directory
      ansible.builtin.user:
        name: testuser
        state: absent
        remove: yes # This ensures the home directory and mail spool are deleted
    ```
    **Critical Safety Consideration:** Deleting a user with `remove: yes` is a **destructive and irreversible action**. It permanently removes all files and data within that user's home directory. Before executing this, you must ensure that:
    1.  The home directory does not contain any critical data or configurations that need to be preserved or backed up.
    2.  The user is not actively running any processes that would be abruptly terminated, potentially leading to data corruption.
    3.  You have double-checked the username to prevent accidental deletion of the wrong user account. Always proceed with extreme caution and verification.

#### AI generation note
Create a 15-minute live coding video. Start by showing the current user and group lists (`getent passwd`, `getent group`). Write a playbook to create a new group `developers` and then a user `alice` with `/bin/bash` shell, home directory, and as a member of `developers`. Demonstrate adding an SSH public key for `alice` using `ansible.builtin.authorized_key`. Explain how to generate a hashed password using `mkpasswd` (without storing it in the playbook) and the importance of Ansible Vault. Show `id alice` and `ls -ld /home/alice`. Next, demonstrate how to remove `alice` and her home directory using `state: absent` and `remove: yes`, emphasizing the destructive nature. Briefly show how to create a `sudoers.d` file for the `developers` group using `ansible.builtin.copy` and the `validate` parameter. Include a split-screen view of the playbook, terminal commands (e.g., `id`, `ls`, `cat /etc/sudoers.d/`), and `ssh` login attempts (before and after key addition). End with a mini-quiz on the difference between `state: absent` and `state: absent, remove: yes`.

---

## Module 4: Ansible for Storage Management

This module empowers you to master the automation of Linux storage configurations using Ansible, a critical skill for any Red Hat Certified Engineer. You will learn to manage physical disks, partitions, filesystems, Logical Volume Management (LVM) components, and even network storage solutions like NFS and iSCSI, all through idempotent Ansible playbooks. By the end of this module, you'll be able to confidently deploy and manage complex storage infrastructures with efficiency and consistency, minimizing manual errors and ensuring system reliability.

## Chapter 4.1 — Introduction to Storage Management with Ansible

#### Learning objectives
*   Explain the fundamental concepts of Linux storage, including partitions, filesystems, and Logical Volume Management (LVM).
*   Articulate the benefits and necessity of automating storage management tasks with Ansible.
*   Identify core Ansible modules relevant to basic disk and filesystem operations.
*   Understand the importance of idempotency when automating storage changes.

#### Detailed lesson content
Welcome to the critical domain of storage management, a cornerstone of any robust IT infrastructure. As an RHCE, you're not just expected to understand how to configure storage manually, but how to do so efficiently, consistently, and at scale using automation tools like Ansible. Before we dive into the automation specifics, let's briefly revisit the foundational concepts of Linux storage. At its most basic, storage in Linux involves physical disks, which are then divided into partitions. These partitions are then formatted with filesystems (like ext4 or XFS) to make them usable for storing data. For more flexible and dynamic storage, we use Logical Volume Management (LVM), which abstracts the physical storage into logical units that can be easily resized and managed.

Why automate storage management with Ansible? Imagine you have fifty servers, and each needs a new 100GB partition, formatted with XFS, and mounted at `/data`. Manually logging into each server, running `fdisk` or `parted`, `mkfs`, and editing `/etc/fstab` is not only tedious but highly prone to human error. A single typo could lead to data loss or system instability. Ansible, on the other hand, allows you to define the desired state of your storage infrastructure in a declarative playbook. You write the playbook once, and Ansible ensures that all target servers conform to that state. This brings immense benefits: consistency across your fleet, reduced operational overhead, faster deployments, and a significantly lower risk of errors. Furthermore, Ansible's idempotent nature means you can run the same playbook multiple times without causing unintended side effects; if the storage is already in the desired state, Ansible will simply report that no changes are needed.

Ansible provides a rich set of modules specifically designed for storage management. For basic disk partitioning, you might leverage the `community.general.parted` module, which wraps the `parted` command-line utility. To create and manage filesystems, the `community.general.filesystem` module is invaluable, allowing you to format partitions with various filesystem types. For mounting filesystems and managing the `/etc/fstab` file, the `ansible.posix.mount` module is your go-to. When dealing with LVM, you'll work with modules like `community.general.lvg` for Volume Groups and `community.general.lvol` for Logical Volumes. We'll explore these in detail in subsequent chapters. It's crucial to remember that storage operations are inherently high-risk. A mistake can lead to irreversible data loss. Therefore, always test your Ansible playbooks thoroughly in a development or staging environment before deploying them to production. Ensure you have proper backups in place, and understand the implications of each task. For instance, formatting a partition (`mkfs`) will erase all data on it. Your playbooks should reflect a clear understanding of these consequences and include checks or conditional logic where necessary to prevent accidental data destruction. Always think about the desired end-state and how to achieve it safely and idempotently.

#### Key concepts
*   **Physical Disk:** The raw storage device (e.g., `/dev/sda`).
*   **Partition:** A logical division of a physical disk.
*   **Filesystem:** The structure used to organize and store files on a partition (e.g., ext4, XFS).
*   **Logical Volume Management (LVM):** A system that provides a more flexible way to manage disk space than traditional partitioning, allowing for easy resizing and snapshotting.
*   **Idempotency:** The property of an operation that means it produces the same result whether it is executed once or multiple times. Ansible modules are designed to be idempotent.
*   **Ansible Modules for Storage:** Specialized modules like `parted`, `filesystem`, `mount`, `lvg`, and `lvol` for automating storage tasks.

#### Hands-on activity
**Activity: Explore Current Storage State with Ansible Ad-Hoc Commands**

Your task is to use Ansible ad-hoc commands to gather information about the storage on your managed nodes. This will help you understand the current state before attempting any changes.

1.  **Check disk usage:**
    ```bash
    ansible all -m ansible.builtin.command -a "df -h"
    ```
2.  **List block devices:**
    ```bash
    ansible all -m ansible.builtin.command -a "lsblk"
    ```
3.  **View partition tables (careful with `fdisk`, it's interactive by default, use `sfdisk -l` for non-interactive):**
    ```bash
    ansible all -m ansible.builtin.command -a "sudo sfdisk -l"
    ```
    *Self-reflection:* What information did you gather from these commands? How might this information be useful when planning storage automation?

#### Assessment idea
1.  **Question:** You need to ensure a new 50GB partition is created on `/dev/sdb` on all your web servers, formatted with XFS, and mounted at `/var/www/data`. Which of the following Ansible modules would you primarily use to achieve the *partitioning* step?
    A) `ansible.builtin.mount`
    B) `community.general.filesystem`
    C) `community.general.parted`
    D) `ansible.builtin.copy`

    **Correct Answer:** C) `community.general.parted`
    **Explanation:** The `community.general.parted` module is specifically designed for managing disk partitions, including creating, deleting, and resizing them. `ansible.builtin.mount` handles mounting filesystems, `community.general.filesystem` handles formatting filesystems, and `ansible.builtin.copy` is for copying files.

2.  **Question:** Explain the concept of idempotency in the context of Ansible storage automation and provide a simple example of how it benefits system administrators.

    **Correct Answer:** Idempotency means that an operation, when executed multiple times, will produce the same result as if it were executed only once, without causing unintended side effects after the first successful run. In Ansible storage automation, this is a huge benefit because it allows administrators to run the same playbook repeatedly without worrying about accidentally re-formatting a filesystem that's already correctly formatted, or re-creating a partition that already exists. For example, if an Ansible playbook includes a task to create an XFS filesystem on `/dev/sdb1`, running that playbook will format `/dev/sdb1` with XFS if it's not already. If the playbook is run again, Ansible will detect that `/dev/sdb1` is already XFS-formatted and report "ok" (no change), rather than attempting to re-format it and potentially erasing data. This ensures consistency and safety, especially in continuous deployment scenarios.

#### AI generation note
Create a 7-minute animated video. Begin with an analogy of building a house (physical disk, rooms as partitions, furniture as filesystems). Then, transition to a server room visual, showing a system administrator manually configuring storage on multiple servers, highlighting the pain points (time, errors). Introduce Ansible as the solution, showing a single playbook automating the same tasks across all servers with a "green checkmark" for idempotency. Visually demonstrate `df -h` and `lsblk` output before and after a conceptual Ansible storage task. Include a reflection prompt: "How does Ansible's idempotency fundamentally change how you approach system administration tasks compared to manual scripting?"

---

## Chapter 4.2 — Managing Physical Disks and Partitions with Ansible

#### Learning objectives
*   Utilize the `community.general.parted` module to create and manage disk partitions.
*   Configure primary, extended, and logical partitions using Ansible playbooks.
*   Implement safe practices and idempotency checks when modifying partition tables.
*   Troubleshoot common issues encountered during automated partitioning.

#### Detailed lesson content
Managing physical disks and their partitions is a fundamental skill for any system administrator, and automating this with Ansible brings unparalleled efficiency and consistency. In Linux, disks are typically identified as `/dev/sda`, `/dev/sdb`, and so on. Before we can store any data, these disks need to be partitioned. Partitions define separate areas on a disk, allowing you to organize data, install multiple operating systems, or allocate space for specific purposes. Ansible's `community.general.parted` module is your primary tool for this. It provides a declarative way to manage partition tables, abstracting away the complexities of command-line tools like `parted` or `fdisk`.

When working with `parted`, you'll specify the `device` (e.g., `/dev/sdb`), the `number` of the partition, its `part_start` and `part_end` (often in MB or GB), and the `state` (e.g., `present` or `absent`). A common mistake is to forget that `parted` operates on the entire disk. If you define a partition that overlaps with an existing one, or if you attempt to create a partition on a disk that already has a partition table, you might encounter errors or, worse, unintended data loss. Always inspect the disk's current state with `lsblk` or `sudo sfdisk -l` before applying any changes. The `parted` module is designed to be idempotent; if a partition with the specified parameters (device, number, start, end) already exists, Ansible will report no changes. However, if you change the `part_end` of an existing partition, `parted` will attempt to resize it, which can be a destructive operation if not handled carefully, especially if a filesystem already exists on it.

Let's consider a practical scenario: you've added a new `/dev/sdb` disk to your server, and you need to create a single primary partition that spans the entire disk. Here's how you might do it with Ansible:

```yaml
---
- name: Configure new disk partitions
  hosts: webservers
  become: yes
  tasks:
    - name: Ensure /dev/sdb has a GPT partition table
      community.general.parted:
        device: /dev/sdb
        number: 1
        state: present
        part_start: 1MiB
        part_end: 100%
        fs_type: ext4 # This will be formatted later, but parted can set the type hint
        flags: [ 'boot' ] # Example flag, use with caution
      register: parted_result
      # This is a critical safety check. Never proceed without careful consideration.
      # In a real scenario, you might want a prompt or a very specific condition.
      when: parted_result.changed or not parted_result.changed # Always run for idempotency check

    - name: Display parted results
      ansible.builtin.debug:
        var: parted_result
```

Notice the `part_start: 1MiB` and `part_end: 100%`. Using `1MiB` for the start is a best practice to align partitions correctly, especially for modern disks and GPT partition tables. The `fs_type` parameter in `parted` primarily sets a partition type hint; it doesn't actually format the filesystem. That's a separate step we'll cover in the next chapter. For older MBR partition tables, you might specify `part_type: primary` or `part_type: logical`. Modern systems widely use GPT (GUID Partition Table), which doesn't have the primary/extended/logical distinction in the same way MBR does, allowing for many primary-like partitions. The `parted` module handles this distinction based on the partition table type it detects or creates.

**Safety Note:** Modifying partition tables is one of the most dangerous operations you can perform on a system. Always ensure you are targeting the correct device. Double-check your `device` parameter. A common mistake is to accidentally target `/dev/sda` (your OS disk) instead of `/dev/sdb` (your new data disk). This can render your system unbootable or destroy critical data. It's highly recommended to use `check_mode` (`ansible-playbook --check ...`) first to see what changes Ansible *would* make, and always have backups. If you're creating partitions on a disk that already contains data, ensure you have explicitly backed up that data, as partition table changes can make existing data inaccessible.

#### Key concepts
*   **GPT (GUID Partition Table):** A modern standard for the layout of partition tables on a physical storage device, replacing the older Master Boot Record (MBR).
*   **MBR (Master Boot Record):** An older standard for partition tables, limited to 4 primary partitions (or 3 primary + 1 extended, which can contain logical partitions).
*   **Primary Partition:** A bootable partition on an MBR disk. GPT disks don't have this distinction.
*   **Extended Partition:** A special type of MBR partition that can contain multiple logical partitions.
*   **Logical Partition:** A partition created within an extended partition on an MBR disk.
*   **`community.general.parted` module:** An Ansible module used to manage disk partition tables.
*   **`part_start` / `part_end`:** Parameters in `parted` to define the start and end sectors/sizes of a partition.

#### Hands-on activity
**Activity: Create a New Partition on a Virtual Disk**

For this activity, you'll need a virtual machine with an unpartitioned disk (e.g., `/dev/sdb`). If you don't have one, you can add a new virtual disk to your VM.

1.  **Verify the new disk:** On your managed node, run `lsblk` to identify the new, unpartitioned disk.
2.  **Create a playbook `create_partition.yml`:**
    ```yaml
    ---
    - name: Create a new primary partition on /dev/sdb
      hosts: your_target_host
      become: yes
      tasks:
        - name: Ensure /dev/sdb exists and create a single primary partition
          community.general.parted:
            device: /dev/sdb
            number: 1
            state: present
            part_type: primary # Use 'primary' for MBR, or omit for GPT default
            part_start: 1MiB
            part_end: 100%
          register: new_partition_result

        - name: Display partition creation result
          ansible.builtin.debug:
            var: new_partition_result
    ```
3.  **Run the playbook in check mode first:**
    ```bash
    ansible-playbook create_partition.yml --check
    ```
4.  **Run the playbook for real:**
    ```bash
    ansible-playbook create_partition.yml
    ```
5.  **Verify the partition:** After the playbook runs, use `ansible your_target_host -m ansible.builtin.command -a "sudo sfdisk -l /dev/sdb"` or `lsblk` to confirm the new partition `/dev/sdb1` exists.

#### Assessment idea
1.  **Question:** You have a new disk `/dev/sdc` and need to create two primary partitions: `/dev/sdc1` of 10GB and `/dev/sdc2` using the remaining space. Write an Ansible task using `community.general.parted` to create the first partition, `/dev/sdc1`, ensuring it's a primary partition and starts at 1MiB.

    **Correct Answer:**
    ```yaml
    - name: Create /dev/sdc1 as a 10GB primary partition
      community.general.parted:
        device: /dev/sdc
        number: 1
        state: present
        part_type: primary
        part_start: 1MiB
        part_end: 10GB
    ```
    **Explanation:** This task correctly specifies the `device`, `number`, `state: present`, `part_type: primary` (important for MBR or explicit intent), and the `part_start` and `part_end` for a 10GB partition.

2.  **Question:** What is a critical safety consideration when using the `community.general.parted` module in an Ansible playbook, and how can you mitigate the risk?

    **Correct Answer:** A critical safety consideration is the risk of data loss or system instability if the wrong device is targeted or if an existing partition with valuable data is accidentally modified or deleted. The `device` parameter is absolute and does not perform sanity checks beyond existence.
    **Mitigation:**
    *   **Double-check `device` parameter:** Always verify that the `device` parameter points to the correct, intended disk (e.g., `/dev/sdb` for a new disk, not `/dev/sda` which might contain the OS).
    *   **Use `check_mode`:** Run the playbook with `ansible-playbook --check` first to see what changes Ansible *would* make without actually executing them.
    *   **Backups:** Ensure all critical data on the target system is backed up before performing any partition modifications.
    *   **Target specific hosts:** Use strict host targeting in your playbooks (e.g., `hosts: specific_new_storage_servers`) rather than `hosts: all` when performing destructive operations.
    *   **Conditional execution:** Add `when:` clauses to tasks to ensure they only run under specific, safe conditions (e.g., `when: "'/dev/sdb' in ansible_facts.devices"`).

#### AI generation note
Create a 10-minute live coding video. Start with `lsblk` on a VM with an unpartitioned `/dev/sdb`. Write a playbook to create a single primary partition on `/dev/sdb` using `community.general.parted`, demonstrating `part_start`, `part_end`, and `state: present`. Show running the playbook with `--check` mode, then without. Verify with `lsblk` and `sudo sfdisk -l /dev/sdb`. Include a dedicated segment on common mistakes like targeting the wrong device and how to use `check_mode` as a safety net. Use a split-screen view for the Ansible playbook on the left and terminal output on the right. Conclude with a mini-quiz asking about the purpose of `part_type` vs. `fs_type` in `parted`.

---

## Chapter 4.3 — Creating and Managing Filesystems with Ansible

#### Learning objectives
*   Format partitions with various filesystem types (e.g., ext4, XFS) using Ansible.
*   Mount filesystems persistently by managing `/etc/fstab` entries with Ansible.
*   Configure filesystem options and permissions post-creation.
*   Understand and troubleshoot common issues related to filesystem creation and mounting.

#### Detailed lesson content
Once you've partitioned your disks, the next crucial step is to create filesystems on those partitions. A filesystem provides the structure that the operating system uses to store and retrieve files. Without a filesystem, a partition is just raw, unusable space. In Linux, common filesystem types include `ext4` (a robust and widely used journaling filesystem) and `XFS` (known for its scalability and performance, especially with large files and directories, and the default for RHEL 7+). Ansible simplifies this process significantly with the `community.general.filesystem` module for formatting and the `ansible.posix.mount` module for mounting.

The `community.general.filesystem` module allows you to format a block device (a partition) with a specified filesystem type. You'll typically provide the `dev` parameter (e.g., `/dev/sdb1`) and the `fstype` (e.g., `ext4` or `xfs`). It's important to understand that this operation is destructive; it will erase all existing data on the specified partition. Therefore, always ensure you are targeting the correct partition. The module is idempotent, meaning if the partition is already formatted with the specified `fstype`, it will report "ok" without re-formatting. For example, to format `/dev/sdb1` with XFS, your task would look like this:

```yaml
- name: Format /dev/sdb1 with XFS
  community.general.filesystem:
    dev: /dev/sdb1
    fstype: xfs
    force: no # Important: prevents accidental re-formatting if fstype is unknown or different
  register: format_result
```
The `force: no` parameter is a critical safety measure. If set to `yes`, it will force a re-format even if the `fstype` doesn't match or is unknown, potentially leading to data loss. Always keep `force: no` unless you are absolutely certain you want to re-format an existing filesystem. After creating the filesystem, you might want to adjust its label or UUID, though Ansible often handles UUIDs automatically for mounting.

Once a filesystem is created, it needs to be mounted to a directory (a mount point) in the Linux filesystem hierarchy to become accessible. This is where the `ansible.posix.mount` module comes in. This module manages entries in `/etc/fstab`, which ensures that filesystems are mounted automatically at boot time, making the mount persistent. You'll specify the `path` (the mount point, e.g., `/mnt/data`), the `src` (the device or UUID, e.g., `/dev/sdb1` or `UUID=...`), the `fstype` (e.g., `xfs`), and `opts` (mount options like `defaults`, `noatime`, `nofail`). The `state` parameter is crucial: `mounted` ensures the filesystem is mounted and an `/etc/fstab` entry exists; `present` only ensures the `/etc/fstab` entry exists; `unmounted` ensures it's not mounted; and `absent` removes the `/etc/fstab` entry. For persistent mounts, `state: mounted` is typically what you want.

Here's an example combining formatting and mounting:

```yaml
---
- name: Create and mount a new XFS filesystem
  hosts: storage_servers
  become: yes
  tasks:
    - name: Ensure /mnt/data directory exists
      ansible.builtin.file:
        path: /mnt/data
        state: directory
        mode: '0755'

    - name: Format /dev/sdb1 with XFS
      community.general.filesystem:
        dev: /dev/sdb1
        fstype: xfs
        force: no
      when: format_result is not defined or format_result.changed # Only format if necessary or first run
      register: format_result

    - name: Mount /dev/sdb1 to /mnt/data and ensure fstab entry
      ansible.posix.mount:
        path: /mnt/data
        src: /dev/sdb1 # Or use UUID for robustness: src: "UUID={{ ansible_facts.mounts | selectattr('device', 'equalto', '/dev/sdb1') | map(attribute='uuid') | first }}"
        fstype: xfs
        opts: defaults,noatime
        state: mounted
      register: mount_result
```
**Common Mistakes and Safety Notes:**
1.  **Mount point doesn't exist:** The `mount` module won't create the mount point directory. Always ensure the target directory exists using `ansible.builtin.file` with `state: directory` *before* attempting to mount.
2.  **Incorrect device/UUID:** Using the wrong `src` in the `mount` task can lead to mounting the wrong filesystem or failure to mount. Using UUIDs is generally more robust than device names (like `/dev/sdb1`) because device names can change across reboots or hardware changes. You can get a device's UUID using `blkid` or `ansible_facts.devices` after formatting.
3.  **Bad `fstab` entry:** An incorrect entry in `/etc/fstab` (wrong `fstype`, `opts`, or `src`) can prevent the system from booting. The `nofail` option in `opts` can mitigate this by allowing the system to boot even if a mount fails, but it's better to ensure correctness. Test your mounts manually (`mount /mnt/data`) before relying solely on `fstab`.
4.  **Filesystem corruption:** Abruptly unmounting a filesystem or power loss during write operations can corrupt the filesystem. Always ensure proper unmounting procedures or graceful shutdowns.

After mounting, you might need to adjust permissions or ownership of the mount point. For example, `ansible.builtin.file` can be used to set `owner`, `group`, and `mode` on `/mnt/data` to allow specific users or applications to write data. This ensures that the newly accessible storage is also usable by the intended services.

#### Key concepts
*   **Filesystem:** A method and data structure that an operating system uses to control how data is stored and retrieved.
*   **`ext4`:** The fourth extended filesystem, a widely used journaling filesystem for Linux.
*   **`XFS`:** A high-performance journaling filesystem, often preferred for large filesystems and high-throughput applications, default on RHEL 7+.
*   **Mount Point:** A directory in the filesystem hierarchy where a filesystem is attached and made accessible.
*   **`/etc/fstab`:** A system configuration file that contains information about filesystems and their mount points, used to mount filesystems automatically at boot.
*   **`community.general.filesystem` module:** Ansible module for creating (formatting) filesystems.
*   **`ansible.posix.mount` module:** Ansible module for managing filesystem mounts and `/etc/fstab` entries.
*   **UUID (Universally Unique Identifier):** A unique identifier for a filesystem, often preferred over device names for persistent mounting as device names can change.

#### Hands-on activity
**Activity: Format and Mount a Partition**

Building on the previous activity, you will now format the partition you created and mount it persistently.

1.  **Pre-requisite:** Ensure you have a partition like `/dev/sdb1` (from the previous activity) available on your target host.
2.  **Create a playbook `format_mount.yml`:**
    ```yaml
    ---
    - name: Format and mount /dev/sdb1
      hosts: your_target_host
      become: yes
      tasks:
        - name: Ensure mount point directory exists
          ansible.builtin.file:
            path: /data_storage
            state: directory
            mode: '0755'

        - name: Format /dev/sdb1 with XFS
          community.general.filesystem:
            dev: /dev/sdb1
            fstype: xfs
            force: no # Keep this for safety!

        - name: Get UUID of the new filesystem for fstab
          ansible.builtin.command: blkid -s UUID -o value /dev/sdb1
          register: sdb1_uuid
          changed_when: false # This command doesn't change system state

        - name: Mount /dev/sdb1 to /data_storage and ensure fstab entry
          ansible.posix.mount:
            path: /data_storage
            src: "UUID={{ sdb1_uuid.stdout }}" # Use UUID for robustness
            fstype: xfs
            opts: defaults,noatime
            state: mounted
          notify: Reload systemd daemon # Handler to ensure systemd sees new fstab entry

      handlers:
        - name: Reload systemd daemon
          ansible.builtin.systemd:
            daemon_reload: yes
    ```
3.  **Run the playbook:**
    ```bash
    ansible-playbook format_mount.yml
    ```
4.  **Verify:** After the playbook runs, use `ansible your_target_host -m ansible.builtin.command -a "df -h /data_storage"` and `ansible your_target_host -m ansible.builtin.command -a "cat /etc/fstab"` to confirm the filesystem is mounted and the `/etc/fstab` entry exists.

#### Assessment idea
1.  **Question:** You need to format `/dev/sdc2` with the `ext4` filesystem and then mount it permanently at `/app_data` with default options, ensuring the mount point directory exists. Write the complete Ansible playbook tasks to achieve this, including ensuring the mount point.

    **Correct Answer:**
    ```yaml
    - name: Ensure /app_data directory exists
      ansible.builtin.file:
        path: /app_data
        state: directory
        mode: '0755'

    - name: Format /dev/sdc2 with ext4
      community.general.filesystem:
        dev: /dev/sdc2
        fstype: ext4
        force: no

    - name: Get UUID of /dev/sdc2 for fstab
      ansible.builtin.command: blkid -s UUID -o value /dev/sdc2
      register: sdc2_uuid
      changed_when: false

    - name: Mount /dev/sdc2 to /app_data and ensure fstab entry
      ansible.posix.mount:
        path: /app_data
        src: "UUID={{ sdc2_uuid.stdout }}"
        fstype: ext4
        opts: defaults
        state: mounted
    ```
    **Explanation:** The solution correctly creates the mount point directory first, then formats the partition with `ext4` using `force: no` for safety. It then retrieves the UUID for robust mounting and finally uses `ansible.posix.mount` to ensure the filesystem is mounted and an `/etc/fstab` entry is present, using the UUID for `src`.

2.  **Question:** A system administrator configured a new mount point `/var/log/archive` using Ansible, but after a reboot, the filesystem is not mounted, and the system fails to boot. Upon inspection, they find an incorrect `fstype` specified in `/etc/fstab`. What option could have been added to the `ansible.posix.mount` task's `opts` parameter to prevent the system from failing to boot, even though the mount itself would still fail?

    **Correct Answer:** The `nofail` option.
    **Explanation:** Adding `opts: defaults,nofail` to the `ansible.posix.mount` task would instruct the system to continue booting even if the mount operation for `/var/log/archive` fails (e.g., due to an incorrect `fstype` or `src`). While the filesystem would not be mounted, the system would still become accessible, allowing the administrator to troubleshoot and correct the `fstab` entry without being locked out.

#### AI generation note
Create a 12-minute interactive lab walkthrough. Start with a VM that has `/dev/sdb1` partitioned but unformatted. Guide learners through writing a playbook to: 1) create a mount point `/data`, 2) format `/dev/sdb1` with XFS, 3) retrieve the UUID using `blkid`, and 4) mount it permanently using the UUID in `/etc/fstab`. Emphasize the `force: no` parameter and the importance of UUIDs. Include a step where the learner verifies the mount with `df -h` and `cat /etc/fstab`. The interactive element should be a challenge to modify the playbook to use `ext4` instead of `XFS` and remount. Highlight common pitfalls like missing mount directories.

---

## Chapter 4.4 — Logical Volume Management (LVM) with Ansible - Part 1: Physical and Volume Groups

#### Learning objectives
*   Explain the core components of Logical Volume Management (LVM): Physical Volumes (PVs), Volume Groups (VGs), and Logical Volumes (LVs).
*   Create and initialize Physical Volumes (PVs) from raw disks or partitions using Ansible.
*   Create and extend Volume Groups (VGs) by adding PVs using Ansible.
*   Understand the advantages of LVM for flexible storage management.

#### Detailed lesson content
Logical Volume Management (LVM) is a powerful and flexible way to manage disk space in Linux, offering significant advantages over traditional partitioning. Instead of being rigidly tied to physical partitions, LVM abstracts the underlying storage, allowing you to create logical volumes that can be easily resized, moved, and snapshotted without downtime. This flexibility is invaluable in dynamic environments where storage requirements frequently change. As an RHCE, mastering LVM automation with Ansible is essential for building scalable and adaptable storage solutions.

LVM operates on three main concepts:
1.  **Physical Volumes (PVs):** These are the raw building blocks of LVM. A PV can be a whole disk (e.g., `/dev/sdb`) or a partition (e.g., `/dev/sdb1`) that has been initialized for use by LVM. Once a disk or partition is designated as a PV, it can no longer be directly used for traditional filesystems.
2.  **Volume Groups (VGs):** A VG is a pool of one or more PVs. It aggregates the storage capacity of its constituent PVs into a single, larger storage pool. You can think of a VG as a virtual "super disk" from which you can carve out logical volumes. VGs can be extended by adding more PVs, effectively increasing their total capacity.
3.  **Logical Volumes (LVs):** These are the flexible "partitions" that are created from the free space within a Volume Group. LVs are what you format with filesystems (like ext4 or XFS) and mount to directories. The beauty of LVs is that they can be resized (extended or, with caution, reduced) even while online, provided the filesystem supports it.

To automate the creation and management of PVs and VGs, Ansible provides the `community.general.lvg` module (for Volume Groups) and implicitly handles PV creation when adding devices to a VG. When you add a raw disk or partition to a Volume Group using `community.general.lvg`, Ansible will automatically initialize it as a Physical Volume if it hasn't been already. This simplifies the process, as you don't always need a separate `pvcreate` equivalent task.

Let's walk through the process of creating PVs and VGs with Ansible. First, ensure you have unpartitioned disks or partitions available (e.g., `/dev/sdb`, `/dev/sdc`).

```yaml
---
- name: Configure LVM Physical Volumes and Volume Groups
  hosts: lvm_servers
  become: yes
  tasks:
    - name: Ensure /dev/sdb and /dev/sdc are initialized as Physical Volumes and added to 'data_vg'
      community.general.lvg:
        vg: data_vg
        pvs:
          - /dev/sdb
          - /dev/sdc
        state: present
      register: lvg_creation_result

    - name: Display LVM VG creation/extension result
      ansible.builtin.debug:
        var: lvg_creation_result
```

In this playbook, the `community.general.lvg` module is used. The `vg` parameter specifies the name of the Volume Group (`data_vg`). The `pvs` parameter takes a list of devices (`/dev/sdb`, `/dev/sdc`) that should be part of this Volume Group. If these devices are not already PVs, Ansible will initialize them as such. If the `data_vg` does not exist, it will be created. If it does exist, and the specified PVs are not yet part of it, they will be added, effectively extending the Volume Group. This module is idempotent; running it multiple times will only make changes if the desired state is not met.

**Safety Note:** Just like with partitioning, working with LVM involves modifying block devices, which carries a risk of data loss. Always verify the correct device names. If you add a disk that already contains data (even if it's not partitioned), `lvg` will overwrite its header to initialize it as a PV, making existing data inaccessible. Always ensure you are working with new, empty disks or partitions, or that you have backed up any existing data. Using `vgdisplay` and `pvdisplay` commands on your target hosts (via `ansible.builtin.command`) before and after running your playbooks is a good practice to verify the LVM state.

Common mistakes include trying to add a device that is already part of another VG, or attempting to use a device that is currently mounted or in use by another process. Ansible will typically report an error in such cases. Always ensure devices are unmounted and not in active use before attempting to add them to a Volume Group. LVM provides a layer of abstraction that makes storage management far more agile. Understanding PVs and VGs is the first step towards leveraging this power.

#### Key concepts
*   **Physical Volume (PV):** A physical disk or disk partition initialized for use by LVM.
*   **Volume Group (VG):** A pool of one or more Physical Volumes, providing a unified storage space from which Logical Volumes can be created.
*   **Logical Volume (LV):** A flexible, resizable "partition" carved out of a Volume Group, on which filesystems are created.
*   **`community.general.lvg` module:** An Ansible module used to manage LVM Volume Groups, including creation and extension by adding Physical Volumes.
*   **`pvcreate`:** The command-line utility to initialize a disk or partition as a Physical Volume (implicitly handled by `lvg` module when adding new devices).
*   **`vgcreate`:** The command-line utility to create a Volume Group (implicitly handled by `lvg` module).
*   **`vgextend`:** The command-line utility to add Physical Volumes to an existing Volume Group (implicitly handled by `lvg` module).

#### Hands-on activity
**Activity: Create a Volume Group from Multiple Disks**

You'll need a virtual machine with at least two unpartitioned disks (e.g., `/dev/sdb` and `/dev/sdc`).

1.  **Verify disks:** On your managed node, run `lsblk` to identify the new, unpartitioned disks.
2.  **Create a playbook `create_vg.yml`:**
    ```yaml
    ---
    - name: Create an LVM Volume Group
      hosts: your_target_host
      become: yes
      tasks:
        - name: Ensure 'app_vg' Volume Group exists and includes /dev/sdb and /dev/sdc
          community.general.lvg:
            vg: app_vg
            pvs:
              - /dev/sdb
              - /dev/sdc
            state: present
          register: vg_status

        - name: Display Volume Group status
          ansible.builtin.debug:
            var: vg_status
    ```
3.  **Run the playbook:**
    ```bash
    ansible-playbook create_vg.yml
    ```
4.  **Verify LVM components:** After the playbook runs, use `ansible your_target_host -m ansible.builtin.command -a "sudo pvdisplay"` and `ansible your_target_host -m ansible.builtin.command -a "sudo vgdisplay app_vg"` to confirm the PVs and VG are created and configured correctly.

#### Assessment idea
1.  **Question:** You have two new disks, `/dev/sdd` and `/dev/sde`, and you need to create a Volume Group named `web_data_vg` that utilizes both of these disks. Write the Ansible task that accomplishes this.

    **Correct Answer:**
    ```yaml
    - name: Create 'web_data_vg' Volume Group from /dev/sdd and /dev/sde
      community.general.lvg:
        vg: web_data_vg
        pvs:
          - /dev/sdd
          - /dev/sde
        state: present
    ```
    **Explanation:** The `community.general.lvg` module is correctly used with `vg: web_data_vg` to name the Volume Group and `pvs` listing both `/dev/sdd` and `/dev/sde`. `state: present` ensures the VG is created and the PVs are added if they don't already exist.

2.  **Question:** Explain the primary benefit of using LVM Volume Groups over traditional disk partitioning, especially in a dynamic server environment.

    **Correct Answer:** The primary benefit of LVM Volume Groups over traditional disk partitioning is the flexibility and dynamic management of storage space. With traditional partitioning, resizing a partition is often complex, risky, and may require downtime. LVM abstracts the physical storage, allowing administrators to pool multiple physical disks or partitions into a single Volume Group. From this VG, Logical Volumes can be created and resized (extended or, with caution, reduced) on the fly, often without needing to unmount the filesystem or reboot the server. This is crucial in dynamic environments where storage needs can change rapidly, enabling administrators to easily expand application storage or reallocate resources without significant service interruption.

#### AI generation note
Create a 9-minute animated diagram and terminal demo video. Start with an animation explaining PVs, VGs, and LVs conceptually (e.g., disks as bricks, VGs as a wall, LVs as windows in the wall). Transition to a terminal, showing `lsblk` on a system with `/dev/sdb` and `/dev/sdc`. Live code an Ansible playbook using `community.general.lvg` to create a VG from these disks. Show the output of `pvdisplay` and `vgdisplay` before and after the playbook run. Include a common mistake section on trying to use a disk already in use. The interactive element should be a prompt asking learners to identify the command to display free space in a Volume Group.

---

## Chapter 4.5 — Logical Volume Management (LVM) with Ansible - Part 2: Logical Volumes

#### Learning objectives
*   Create Logical Volumes (LVs) of specified sizes from existing Volume Groups using Ansible.
*   Extend and reduce the size of Logical Volumes using Ansible.
*   Implement filesystem resizing after LV modifications.
*   Create and manage LVM snapshots for backup and recovery purposes with Ansible.

#### Detailed lesson content
Having mastered Physical Volumes and Volume Groups, it's time to delve into Logical Volumes (LVs), the most flexible component of LVM. Logical Volumes are the storage units that you format with filesystems and mount, much like traditional partitions. However, unlike partitions, LVs can be easily resized, both extended and, with proper care, reduced, providing unparalleled agility in storage management. Ansible's `community.general.lvol` module is your primary tool for automating LV creation and modification.

To create a Logical Volume, you need to specify the `vg` (Volume Group) from which it should be carved, the `lv` (Logical Volume) name, and its `size`. The size can be specified in absolute units (e.g., `10G`) or as a percentage of the VG's free space (e.g., `100%FREE`). It's a best practice to leave some free space in a VG for future extensions or snapshots. After creating the LV, you'll typically format it with a filesystem using `community.general.filesystem` and then mount it using `ansible.posix.mount`, just as you would with a physical partition.

Here's an example of creating a 20GB Logical Volume named `app_lv` within the `data_vg` Volume Group:

```yaml
---
- name: Create and configure Logical Volumes
  hosts: lvm_servers
  become: yes
  tasks:
    - name: Create a 20GB Logical Volume named 'app_lv' in 'data_vg'
      community.general.lvol:
        vg: data_vg
        lv: app_lv
        size: 20G
        state: present
      register: lv_creation_result

    - name: Display LV creation result
      ansible.builtin.debug:
        var: lv_creation_result

    - name: Format /dev/data_vg/app_lv with XFS
      community.general.filesystem:
        dev: /dev/data_vg/app_lv
        fstype: xfs
        force: no

    - name: Ensure mount point /app_data exists
      ansible.builtin.file:
        path: /app_data
        state: directory
        mode: '0755'

    - name: Get UUID of /dev/data_vg/app_lv for fstab
      ansible.builtin.command: blkid -s UUID -o value /dev/data_vg/app_lv
      register: app_lv_uuid
      changed_when: false

    - name: Mount /dev/data_vg/app_lv to /app_data and ensure fstab entry
      ansible.posix.mount:
        path: /app_data
        src: "UUID={{ app_lv_uuid.stdout }}"
        fstype: xfs
        opts: defaults,noatime
        state: mounted
```

**Extending and Reducing Logical Volumes:**
One of LVM's killer features is the ability to resize LVs. To extend an LV, you simply increase its `size` parameter in the `community.general.lvol` module. After extending the LV, you *must* also resize the filesystem on it to utilize the newly allocated space. For `ext4`, use `resize2fs`; for `XFS`, use `xfs_growfs`. These commands can often be run on a mounted filesystem.

```yaml
    - name: Extend 'app_lv' to 30GB
      community.general.lvol:
        vg: data_vg
        lv: app_lv
        size: 30G # New desired size
        state: present

    - name: Resize XFS filesystem on 'app_lv'
      ansible.builtin.command: xfs_growfs /app_data # Mount point of the LV
      when: ansible_facts.mounts | selectattr('mount', 'equalto', '/app_data') | map(attribute='fstype') | first == 'xfs'
      # Or for ext4: ansible.builtin.command: resize2fs /dev/data_vg/app_lv
```
**Safety Note on Reduction:** Reducing an LV is extremely risky and should only be done with absolute certainty and a prior backup. You *must* first reduce the filesystem to a size smaller than the target LV size, then reduce the LV. If the LV is reduced more than the filesystem, data corruption will occur. The `community.general.lvol` module supports `size_reduction: yes` for this, but it's a dangerous operation.

**LVM Snapshots:**
LVM snapshots provide a "point-in-time" copy of a Logical Volume. They are incredibly useful for backups, testing, or rolling back changes. When a snapshot is created, it doesn't copy the entire LV; instead, it creates a small, separate LV that tracks changes to the original LV. The original LV is called the "origin." The snapshot only stores the differences.

To create a snapshot with Ansible:
```yaml
    - name: Create a snapshot of 'app_lv'
      community.general.lvol:
        vg: data_vg
        lv: app_lv_snap
        size: 5G # Size of the snapshot volume (for storing changes)
        snapshot: app_lv # The origin LV to snapshot
        state: present
```
This creates a new LV named `app_lv_snap` that is a snapshot of `app_lv`. You can then mount `app_lv_snap` (it will contain the data of `app_lv` at the time of snapshot creation) and back up its contents. To remove a snapshot, set `state: absent` for the snapshot LV.

**Common Mistakes:**
1.  **Forgetting to resize the filesystem:** After extending an LV, the filesystem on it won't automatically grow. You must explicitly run `xfs_growfs` or `resize2fs`.
2.  **Reducing LV without reducing filesystem:** This is a recipe for data loss. Always shrink the filesystem *first*.
3.  **Snapshot size:** If the snapshot LV is too small to record all changes to the origin LV, it can become full and unusable. Monitor snapshot usage.
4.  **Incorrect LV path:** Remember LVs are typically located at `/dev/VG_NAME/LV_NAME` (e.g., `/dev/data_vg/app_lv`).

LVM, when used correctly with Ansible, transforms storage management from a static, cumbersome task into a dynamic, flexible, and automated process.

#### Key concepts
*   **Logical Volume (LV):** A flexible, resizable "partition" carved out of a Volume Group.
*   **`community.general.lvol` module:** Ansible module for managing LVM Logical Volumes (creation, extension, reduction, snapshots).
*   **Filesystem Resizing:** The process of expanding or shrinking a filesystem to match the size of its underlying Logical Volume.
*   **`xfs_growfs`:** Command to extend an XFS filesystem.
*   **`resize2fs`:** Command to extend or reduce an ext4 filesystem.
*   **LVM Snapshot:** A "point-in-time" copy of a Logical Volume, useful for backups and recovery.
*   **Origin LV:** The original Logical Volume from which a snapshot is taken.
*   **Snapshot LV:** The Logical Volume that stores the changes made to the origin LV since the snapshot was created.

#### Hands-on activity
**Activity: Create, Extend, and Snapshot a Logical Volume**

You'll need a VM with a Volume Group (e.g., `app_vg` from the previous activity) with sufficient free space.

1.  **Pre-requisite:** Ensure `app_vg` exists and has free space (`sudo vgdisplay app_vg`).
2.  **Create a playbook `manage_lv.yml`:**
    ```yaml
    ---
    - name: Manage LVM Logical Volumes
      hosts: your_target_host
      become: yes
      tasks:
        - name: Create a 10GB Logical Volume 'web_lv' in 'app_vg'
          community.general.lvol:
            vg: app_vg
            lv: web_lv
            size: 10G
            state: present

        - name: Format /dev/app_vg/web_lv with ext4
          community.general.filesystem:
            dev: /dev/app_vg/web_lv
            fstype: ext4
            force: no

        - name: Ensure mount point /var/www/html exists
          ansible.builtin.file:
            path: /var/www/html
            state: directory
            mode: '0755'

        - name: Mount /dev/app_vg/web_lv to /var/www/html and ensure fstab entry
          ansible.posix.mount:
            path: /var/www/html
            src: /dev/app_vg/web_lv # Using device path for simplicity, UUID is also good
            fstype: ext4
            opts: defaults
            state: mounted

        - name: Extend 'web_lv' to 15GB
          community.general.lvol:
            vg: app_vg
            lv: web_lv
            size: 15G
            state: present

        - name: Resize ext4 filesystem on /dev/app_vg/web_lv
          ansible.builtin.command: resize2fs /dev/app_vg/web_lv
          when: ansible_facts.mounts | selectattr('mount', 'equalto', '/var/www/html') | map(attribute='fstype') | first == 'ext4'

        - name: Create a 2GB snapshot of 'web_lv' named 'web_lv_backup'
          community.general.lvol:
            vg: app_vg
            lv: web_lv_backup
            size: 2G
            snapshot: web_lv
            state: present
    ```
3.  **Run the playbook:**
    ```bash
    ansible-playbook manage_lv.yml
    ```
4.  **Verify:** Use `ansible your_target_host -m ansible.builtin.command -a "sudo lvdisplay"` and `ansible your_target_host -m ansible.builtin.command -a "df -h /var/www/html"` to confirm the LV size, filesystem size, and snapshot existence.

#### Assessment idea
1.  **Question:** You have a Volume Group named `db_vg` and need to create a 50GB Logical Volume named `db_data_lv` within it. After creation, this LV must be formatted with XFS and mounted persistently at `/var/lib/mysql`. Write the Ansible tasks to achieve this, including ensuring the mount point directory exists.

    **Correct Answer:**
    ```yaml
    - name: Create a 50GB Logical Volume 'db_data_lv' in 'db_vg'
      community.general.lvol:
        vg: db_vg
        lv: db_data_lv
        size: 50G
        state: present

    - name: Format /dev/db_vg/db_data_lv with XFS
      community.general.filesystem:
        dev: /dev/db_vg/db_data_lv
        fstype: xfs
        force: no

    - name: Ensure mount point /var/lib/mysql exists
      ansible.builtin.file:
        path: /var/lib/mysql
        state: directory
        mode: '0755'

    - name: Mount /dev/db_vg/db_data_lv to /var/lib/mysql and ensure fstab entry
      ansible.posix.mount:
        path: /var/lib/mysql
        src: /dev/db_vg/db_data_lv # Can use UUID for robustness
        fstype: xfs
        opts: defaults,noatime
        state: mounted
    ```
    **Explanation:** This sequence correctly creates the LV, formats it with XFS, ensures the mount point directory exists, and then mounts the LV persistently, making it ready for database use.

2.  **Question:** A system administrator extended an LVM Logical Volume from 10GB to 20GB using Ansible. However, `df -h` still shows the filesystem size as 10GB. What critical step was likely missed, and what Ansible task would rectify this for an `ext4` filesystem?

    **Correct Answer:** The critical step missed was resizing the filesystem *after* extending the Logical Volume. Extending the LV only increases the underlying block device size; the filesystem itself needs to be told to expand to fill that new space.
    **Rectification Task (for ext4):**
    ```yaml
    - name: Resize ext4 filesystem on the extended Logical Volume
      ansible.builtin.command: resize2fs /dev/your_vg_name/your_lv_name
      # Replace /dev/your_vg_name/your_lv_name with the actual LV device path
    ```
    **Explanation:** The `resize2fs` command (for `ext4` filesystems) is used to expand the filesystem to fill the available space on its underlying block device. For XFS filesystems, `xfs_growfs` would be used instead. This task should be run *after* the `community.general.lvol` task that extends the LV.

#### AI generation note
Create a 15-minute live coding demonstration. Start with a system having a VG with free space. First, demonstrate creating an LV, formatting it with `ext4`, and mounting it. Then, extend the LV's size using `community.general.lvol` and show the `df -h` output before and after running `resize2fs`. Next, create an LVM snapshot of the LV, mount the snapshot, and show its contents. Finally, demonstrate removing the snapshot. Use a split-screen for code and terminal output. Include a "What if I forget `resize2fs`?" segment. The interactive element is a mini-quiz on the order of operations for LV reduction (filesystem first, then LV).

---

## Chapter 4.6 — Advanced Storage Scenarios: NFS and iSCSI with Ansible

#### Learning objectives
*   Configure an NFS server to export directories using Ansible.
*   Configure an NFS client to mount remote NFS shares persistently using Ansible.
*   Set up an iSCSI target (server) to provide block storage using Ansible.
*   Configure an iSCSI initiator (client) to connect to and use remote iSCSI targets using Ansible.
*   Understand the use cases and differences between NFS and iSCSI.

#### Detailed lesson content
Beyond local disk management and LVM, modern infrastructures often rely on network-attached storage (NAS) and storage area networks (SAN) for shared data and high availability. As an RHCE, you'll frequently encounter Network File System (NFS) for file-level sharing and iSCSI for block-level sharing. Automating the setup and management of these services with Ansible is crucial for consistent and scalable deployments.

**Network File System (NFS):**
NFS allows clients to access files over a network as if they were stored locally. It's a file-level sharing protocol, meaning clients see and interact with files and directories. Ansible can automate both NFS server and client configurations.

**NFS Server Configuration:**
On the server side, you need to install the `nfs-utils` package, define the directories to export in `/etc/exports`, and ensure the NFS services are running.

```yaml
---
- name: Configure NFS Server
  hosts: nfs_servers
  become: yes
  tasks:
    - name: Ensure nfs-utils package is installed
      ansible.builtin.yum:
        name: nfs-utils
        state: present

    - name: Ensure directory to export exists
      ansible.builtin.file:
        path: /srv/nfs_share
        state: directory
        mode: '0755'

    - name: Configure NFS export in /etc/exports
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/srv/nfs_share *(rw,sync,no_root_squash,no_subtree_check)"
        state: present
        create: yes
        owner: root
        group: root
        mode: '0644'
      notify: Restart nfs-server

    - name: Enable and start nfs-server service
      ansible.builtin.service:
        name: nfs-server
        state: started
        enabled: yes

  handlers:
    - name: Restart nfs-server
      ansible.builtin.service:
        name: nfs-server
        state: restarted
```
The `lineinfile` module is used here to add the export definition. The `*(rw,sync,no_root_squash,no_subtree_check)` options grant read/write access to all clients (`*`), ensure data is written to disk before acknowledging (`sync`), prevent root users on clients from being squashed to `nfsnobody` (`no_root_squash`), and disable subtree checking for better performance.

**NFS Client Configuration:**
On the client side, you also need `nfs-utils` and then mount the remote share, typically in `/etc/fstab` for persistence.

```yaml
---
- name: Configure NFS Client
  hosts: nfs_clients
  become: yes
  tasks:
    - name: Ensure nfs-utils package is installed
      ansible.builtin.yum:
        name: nfs-utils
        state: present

    - name: Ensure mount point for NFS share exists
      ansible.builtin.file:
        path: /mnt/nfs_data
        state: directory
        mode: '0755'

    - name: Mount NFS share from nfs_server.example.com
      ansible.posix.mount:
        path: /mnt/nfs_data
        src: nfs_server.example.com:/srv/nfs_share
        fstype: nfs
        opts: defaults,_netdev # _netdev ensures it waits for network
        state: mounted
```
The `_netdev` option in `opts` is crucial for NFS mounts in `/etc/fstab`, ensuring the system waits for the network to be up before attempting to mount the share, preventing boot failures.

**iSCSI (Internet Small Computer System Interface):**
iSCSI provides block-level storage over a network, effectively allowing a client (initiator) to treat a remote disk (target) as if it were a local SCSI disk. This is ideal for applications requiring raw block access, like databases or virtual machine disk images.

**iSCSI Target Configuration (Server):**
Setting up an iSCSI target is more complex, often involving `targetcli` or `lio_utils`. Ansible can manage this using modules like `community.general.targetcli`. Here's a simplified conceptual example:

```yaml
---
- name: Configure iSCSI Target
  hosts: iscsi_target_servers
  become: yes
  tasks:
    - name: Ensure targetcli package is installed
      ansible.builtin.yum:
        name: targetcli
        state: present

    - name: Create a backing store for iSCSI (e.g., a file or LV)
      community.general.lvol: # Or use ansible.builtin.file for a file-based backstore
        vg: data_vg
        lv: iscsi_lun1
        size: 100G
        state: present

    - name: Configure iSCSI target (simplified)
      community.general.targetcli:
        name: iqn.2023-01.com.example:storage.target1 # Unique IQN
        state: present
        disks:
          - path: /dev/data_vg/iscsi_lun1 # The backing store
            lun: 0
        acl:
          - iqn: iqn.2023-01.com.example:client.initiator1 # Client IQN
            state: present
        portals:
          - ip_address: "{{ ansible_default_ipv4.address }}"
            port: 3260
            state: present
      notify: Restart target

  handlers:
    - name: Restart target
      ansible.builtin.service:
        name: target
        state: restarted
```
This task creates an iSCSI target, defines a LUN (Logical Unit Number) backed by an LV, sets up an Access Control List (ACL) for a specific initiator IQN, and configures a network portal.

**iSCSI Initiator Configuration (Client):**
On the client, you need `iscsi-initiator-utils` to discover and log in to iSCSI targets.

```yaml
---
- name: Configure iSCSI Initiator
  hosts: iscsi_client_servers
  become: yes
  tasks:
    - name: Ensure iscsi-initiator-utils package is installed
      ansible.builtin.yum:
        name: iscsi-initiator-utils
        state: present

    - name: Set iSCSI initiator name
      ansible.builtin.lineinfile:
        path: /etc/iscsi/initiatorname.iscsi
        regexp: '^InitiatorName='
        line: "InitiatorName=iqn.2023-01.com.example:client.initiator1"
        state: present
      notify: Restart iscsid

    - name: Discover iSCSI targets
      community.general.iscsi:
        targetname: iqn.2023-01.com.example:storage.target1
        portal: iscsi_target.example.com:3260
        state: present # This discovers and logs in

    - name: Ensure iSCSI service is enabled and started
      ansible.builtin.service:
        name: iscsid
        state: started
        enabled: yes
      notify: Restart iscsid

    - name: Wait for iSCSI device to appear
      ansible.builtin.wait_for:
        path: /dev/disk/by-path/ip-iscsi_target.example.com:3260-iscsi-iqn.2023-01.com.example:storage.target1-lun-0
        state: present
        timeout: 60

    - name: Format the new iSCSI disk (e.g., /dev/sdd, verify with lsblk first!)
      community.general.filesystem:
        dev: /dev/sdd # IMPORTANT: Verify this device name with lsblk after discovery
        fstype: xfs
        force: no

    - name: Ensure mount point /iscsi_data exists
      ansible.builtin.file:
        path: /iscsi_data
        state: directory
        mode: '0755'

    - name: Mount iSCSI disk to /iscsi_data
      ansible.posix.mount:
        path: /iscsi_data
        src: /dev/sdd # Use UUID for production for robustness
        fstype: xfs
        opts: defaults,_netdev
        state: mounted

  handlers:
    - name: Restart iscsid
      ansible.builtin.service:
        name: iscsid
        state: restarted
```
After discovery and login, the iSCSI target will appear as a new block device (e.g., `/dev/sdd`) on the client, which can then be partitioned, formatted, and mounted like a local disk. The `_netdev` option is again critical for persistent mounts.

**Common Mistakes and Safety Notes:**
*   **Firewall:** Ensure firewall rules are configured to allow NFS (ports 111, 2049) and iSCSI (port 3260) traffic. Ansible's `ansible.posix.firewalld` module can automate this.
*   **Network Latency:** Both NFS and iSCSI are sensitive to network latency and bandwidth. Ensure a robust network connection.
*   **Security:** `no_root_squash` in NFS exports can be a security risk if not carefully controlled. Implement host-specific access (e.g., `192.168.1.0/24(...)`) instead of `*`. iSCSI ACLs are crucial.
*   **Device Naming:** For iSCSI, the device name (e.g., `/dev/sdd`) can vary. Using `/dev/disk/by-path/` or UUIDs for `src` in `ansible.posix.mount` is far more reliable.
*   **Idempotency:** When configuring iSCSI targets, ensure your `targetcli` tasks are idempotent to avoid creating duplicate resources.

Understanding the distinction between file-level (NFS) and block-level (iSCSI) storage and how to automate their setup with Ansible is key for managing complex, distributed storage environments.

#### Key concepts
*   **Network File System (NFS):** A distributed file system protocol that allows a user on a client computer to access files over a computer network much like local storage is accessed.
*   **iSCSI (Internet Small Computer System Interface):** An IP-based storage networking standard for linking data storage facilities, allowing clients to treat remote storage as local block devices.
*   **NFS Server:** The machine exporting directories to be shared.
*   **NFS Client:** The machine mounting remote NFS shares.
*   **`/etc/exports`:** The configuration file on an NFS server that defines which directories are shared and with what options.
*   **iSCSI Target:** The server providing block storage over the network.
*   **iSCSI Initiator:** The client connecting to and using the iSCSI target.
*   **IQN (iSCSI Qualified Name):** A unique identifier for iSCSI initiators and targets.
*   **LUN (Logical Unit Number):** A unique identifier for a logical disk presented by an iSCSI target.
*   **`community.general.targetcli` module:** An Ansible module for configuring iSCSI targets.
*   **`community.general.iscsi` module:** An Ansible module for configuring iSCSI initiators (discovery, login).
*   **`_netdev` mount option:** An `fstab` option that tells the system to wait for the network to be available before attempting to mount the filesystem.

#### Hands-on activity
**Activity: Configure an NFS Server and Client**

You'll need two virtual machines: one to act as an NFS server and another as an NFS client. Ensure they can communicate over the network.

1.  **NFS Server Playbook (`nfs_server.yml`):**
    ```yaml
    ---
    - name: Configure NFS Server
      hosts: nfs_server_host # Replace with your NFS server hostname/IP
      become: yes
      tasks:
        - name: Install nfs-utils
          ansible.builtin.yum:
            name: nfs-utils
            state: present

        - name: Create export directory
          ansible.builtin.file:
            path: /srv/shared_data
            state: directory
            mode: '0777' # For easy testing, adjust for production

        - name: Add export to /etc/exports
          ansible.builtin.lineinfile:
            path: /etc/exports
            line: "/srv/shared_data *(rw,sync,no_root_squash)"
            state: present
            create: yes

        - name: Start and enable nfs-server
          ansible.builtin.service:
            name: nfs-server
            state: started
            enabled: yes

        - name: Reload exports
          ansible.builtin.command: exportfs -ra
    ```
2.  **NFS Client Playbook (`nfs_client.yml`):**
    ```yaml
    ---
    - name: Configure NFS Client
      hosts: nfs_client_host # Replace with your NFS client hostname/IP
      become: yes
      tasks:
        - name: Install nfs-utils
          ansible.builtin.yum:
            name: nfs-utils
            state: present

        - name: Create mount point
          ansible.builtin.file:
            path: /mnt/nfs_share
            state: directory
            mode: '0755'

        - name: Mount NFS share
          ansible.posix.mount:
            path: /mnt/nfs_share
            src: nfs_server_ip_or_hostname:/srv/shared_data # Replace with your NFS server's IP/hostname
            fstype: nfs
            opts: defaults,_netdev
            state: mounted
    ```
3.  **Run playbooks:** First run `nfs_server.yml`, then `nfs_client.yml`.
4.  **Verify:** On the client, run `df -h /mnt/nfs_share` and create a test file: `ansible nfs_client_host -m ansible.builtin.command -a "touch /mnt/nfs_share/test_file_from_client"`. Then, on the server, verify the file exists: `ansible nfs_server_host -m ansible.builtin.command -a "ls /srv/shared_data"`.

#### Assessment idea
1.  **Question:** You need to configure an NFS server to export the `/data/backups` directory to a specific client with IP `192.168.1.100`, allowing read-only access and ensuring root user squashing. Write the Ansible `lineinfile` task for `/etc/exports` and the corresponding handler to reload NFS exports.

    **Correct Answer:**
    ```yaml
    - name: Add /data/backups export for specific client
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/data/backups 192.168.1.100(ro,sync,root_squash)"
        state: present
        create: yes
      notify: Reload NFS exports

    # ... later in handlers section ...
    handlers:
      - name: Reload NFS exports
        ansible.builtin.command: exportfs -ra
        listen: "Reload NFS exports" # Matches the notify name
    ```
    **Explanation:** The `lineinfile` task correctly specifies the path, the export line with `ro` (read-only) and `root_squash` for the specific IP address. The `notify` triggers the `Reload NFS exports` handler, which executes `exportfs -ra` to apply the changes without restarting the entire NFS service.

2.  **Question:** Differentiate between NFS and iSCSI in terms of the level of storage access they provide and provide a typical use case for each in an enterprise environment.

    **Correct Answer:**
    *   **NFS (Network File System)** provides **file-level storage access**. Clients interact with shared directories and individual files over the network, similar to how they would with local filesystems.
        *   **Typical Use Case:** Centralized home directories for users, shared web content for web servers, or a common repository for application logs where multiple servers need to read/write specific files.
    *   **iSCSI (Internet Small Computer System Interface)** provides **block-level storage access**. Clients (initiators) connect to remote iSCSI targets and see them as raw block devices (like a local hard drive). The client is then responsible for partitioning, formatting (creating a filesystem), and mounting this block device.
        *   **Typical Use Case:** Providing storage for virtual machine disk images (VMware, KVM), database storage where direct block access and high I/O performance are critical, or creating a SAN (Storage Area Network) over standard Ethernet.

#### AI generation note
Create a 14-minute mixed-format lesson. Start with a diagram visually comparing NFS (shared folder icon) and iSCSI (disk drive icon) with their respective network paths. Then, switch to a live coding demo for configuring an NFS server and client using the provided playbooks. Show `exportfs -v` on the server and `df -h` on the client. Follow this with a conceptual walkthrough of the iSCSI target/initiator setup using animated diagrams for the `targetcli` and `iscsi` modules, highlighting IQNs and LUNs. Conclude with a comparison table summarizing the pros and cons of NFS vs. iSCSI. Include an interactive element where learners identify the correct `fstab` option for network mounts.

---

### Chapter 4.1 — Managing Logical Volumes with Ansible

#### Learning objectives
*   Understand the fundamental components and hierarchy of Logical Volume Management (LVM): Physical Volumes (PVs), Volume Groups (VGs), and Logical Volumes (LVs).
*   Utilize Ansible's `community.general.lvg` module to create and manage Volume Groups from physical disks or partitions.
*   Employ Ansible's `community.general.lvol` module to create, resize, and remove Logical Volumes within existing Volume Groups.
*   Implement playbooks that ensure LVM configurations are idempotent, handling creation, extension, and removal of storage resources reliably.
*   Identify and troubleshoot common issues encountered during LVM setup and management using Ansible.

#### Detailed lesson content
Logical Volume Management (LVM) is a powerful and flexible storage management scheme that abstracts the underlying physical storage. Instead of directly working with physical disks or partitions, LVM allows system administrators to create logical volumes that can span multiple physical devices, offering dynamic resizing capabilities, snapshots, and easier management of storage resources. For an RHCE, mastering LVM is crucial, and automating its management with Ansible significantly enhances efficiency and consistency across multiple systems.

At its core, LVM operates on a three-tiered hierarchy. The lowest layer consists of **Physical Volumes (PVs)**, which are raw disk partitions or entire disks initialized for LVM. These PVs are then grouped into **Volume Groups (VGs)**, which act as a pool of storage. Finally, from these VGs, you carve out **Logical Volumes (LVs)**, which are the flexible, resizable partitions that operating systems directly interact with, typically formatted with a filesystem and mounted. The beauty of LVM lies in this abstraction: LVs can be resized without downtime (in many cases), and VGs can be extended by adding more PVs, all while the underlying filesystem remains accessible.

When automating LVM with Ansible, we primarily interact with the `community.general.lvg` module for Volume Groups and the `community.general.lvol` module for Logical Volumes. Let's start with creating a Volume Group. Before you can create a VG, you need to prepare your physical disks or partitions as PVs. This typically involves partitioning a disk (e.g., `/dev/sdb1`) and then initializing it with `pvcreate`. While Ansible doesn't have a direct `pvcreate` module, you can use the `community.general.parted` module to partition disks and then the `ansible.builtin.command` or `ansible.builtin.shell` module to run `pvcreate`. However, for simplicity and typical RHCE scenarios, we often assume the PVs are already prepared or focus on managing VGs and LVs on pre-existing PVs.

To create a Volume Group named `vg_data` using a physical volume `/dev/sdb1`, your Ansible playbook task would look something like this:

```yaml
- name: Ensure Volume Group 'vg_data' exists
  community.general.lvg:
    vg: vg_data
    pvs: /dev/sdb1
    state: present
```

This task is idempotent; if `vg_data` already exists using `/dev/sdb1`, Ansible will do nothing. If `/dev/sdb1` is not a PV, the task will fail, highlighting the need for proper PV preparation. A common mistake here is forgetting to initialize the physical device as a PV before attempting to add it to a VG, leading to errors like "Device /dev/sdb1 not found or not a PV". Always ensure `pvcreate /dev/sdb1` has been run on the target host first.

Once you have a Volume Group, you can create Logical Volumes within it. Let's create an LV named `lv_web` with a size of 10GB within our `vg_data` Volume Group:

```yaml
- name: Ensure Logical Volume 'lv_web' exists in 'vg_data'
  community.general.lvol:
    vg: vg_data
    lv: lv_web
    size: 10G
    state: present
```

The `size` parameter accepts various units (G, M, T). You can also specify a percentage of the VG's free space. For example, `size: 100%FREE` would create an LV using all available free space in the VG. This is particularly useful for maximizing storage utilization.

One of LVM's greatest strengths is its ability to resize LVs. If `lv_web` needs more space, you can easily extend it. Let's say we want to extend it to 20GB:

```yaml
- name: Extend Logical Volume 'lv_web' to 20GB
  community.general.lvol:
    vg: vg_data
    lv: lv_web
    size: 20G
    state: present # 'present' ensures it exists and matches the size
    resizefs: true # Automatically resize the filesystem if supported
```

The `resizefs: true` parameter is incredibly powerful. It tells Ansible to not only extend the underlying logical volume but also to automatically grow the filesystem residing on it (e.g., ext4, xfs) to fill the new space. This dramatically simplifies what would otherwise be a multi-step manual process involving `lvextend` and `resize2fs` or `xfs_growfs`. However, it's a safety note that `resizefs: true` only works for *extending* filesystems online. Shrinking filesystems typically requires unmounting them and using specific filesystem tools, which is a more complex and riskier operation not directly handled by `resizefs: true`. Always back up critical data before performing any shrinking operations.

To remove an LV, you simply set its `state` to `absent`:

```yaml
- name: Remove Logical Volume 'lv_web'
  community.general.lvol:
    vg: vg_data
    lv: lv_web
    state: absent
    force: yes # Required to remove an active LV
```

The `force: yes` parameter is critical when removing an LV that might still be active or mounted. Without it, the task will likely fail, preventing accidental data loss. This is a crucial safety mechanism. Before removing an LV, ensure any filesystems on it are unmounted and their entries are removed from `/etc/fstab` to prevent boot issues. Similarly, to remove a Volume Group, all LVs within it must first be removed.

```yaml
- name: Remove Volume Group 'vg_data'
  community.general.lvg:
    vg: vg_data
    state: absent
```

This task will only succeed if `vg_data` contains no active Logical Volumes. If LVs still exist, the task will fail, prompting you to remove them first. This progressive removal ensures data safety.

In a real-world scenario, you might have a playbook that sets up storage for a new application server. This could involve:
1.  Ensuring a disk is partitioned correctly (using `parted` or `fdisk` via `command`/`shell`).
2.  Initializing the partition as a PV (`pvcreate` via `command`/`shell`).
3.  Creating a VG (`lvg` module).
4.  Creating one or more LVs (`lvol` module).
5.  Formatting the LVs with a filesystem (using the `community.general.filesystem` module, which we'll cover in the next chapter).
6.  Mounting the LVs (using the `ansible.posix.mount` module).

This modular approach allows for highly flexible and maintainable storage automation. Always test your LVM playbooks in a development or staging environment before deploying to production, especially when dealing with `state: absent` or resizing operations. Understanding the underlying LVM commands (`pvdisplay`, `vgdisplay`, `lvdisplay`, `lvextend`, `lvreduce`, `vgremove`, `lvremove`) will greatly aid in troubleshooting Ansible playbook failures.

#### Key concepts
*   **Physical Volume (PV):** A physical disk or disk partition initialized for use by LVM.
*   **Volume Group (VG):** A collection of one or more Physical Volumes, forming a pool of storage from which Logical Volumes are allocated.
*   **Logical Volume (LV):** A flexible, resizable "virtual partition" carved out of a Volume Group, used by the operating system.
*   **`community.general.lvg` module:** An Ansible module used to create, modify, or remove LVM Volume Groups.
*   **`community.general.lvol` module:** An Ansible module used to create, modify, or remove LVM Logical Volumes.
*   **Idempotency:** The property of an Ansible task where running it multiple times produces the same result as running it once; crucial for configuration management.
*   **`resizefs: true`:** An `lvol` module parameter that automatically resizes the filesystem on an LV after extending the LV.

#### Hands-on activity
**Scenario:** You need to expand the storage capacity of a web server by adding a new 5GB Logical Volume for application logs. Assume `/dev/sdb` is an unpartitioned disk available on your target host.

**Steps:**
1.  **Prepare the PV:** Partition `/dev/sdb` to create `/dev/sdb1` and initialize it as a Physical Volume.
2.  **Extend/Create VG:** Ensure a Volume Group named `vg_apps` exists. If it doesn't, create it using `/dev/sdb1`. If it does, ensure `/dev/sdb1` is added to it.
3.  **Create LV:** Create a new Logical Volume named `lv_logs` of 5GB within `vg_apps`.
4.  **Verify:** After running the playbook, log into the target host and verify the creation of the VG and LV using `vgdisplay` and `lvdisplay`.

**Playbook Template (`lvm_setup.yml`):**

```yaml
---
- name: Configure LVM for application logs
  hosts: webservers
  become: true # Requires root privileges for LVM operations

  tasks:
    - name: Ensure /dev/sdb1 is partitioned for LVM (using parted)
      community.general.parted:
        device: /dev/sdb
        number: 1
        state: present
        part_type: primary
        fs_type: LVM2_member # Set the partition type for LVM
        flags: [ lvm ] # Add the LVM flag
        label: gpt # Use GPT partitioning scheme
      register: parted_result
      # This task might require 'parted' to be installed on the target host.
      # You might add a pre-task to ensure 'parted' is installed:
      # - name: Ensure parted is installed
      #   ansible.builtin.package:
      #     name: parted
      #     state: present

    - name: Initialize /dev/sdb1 as a Physical Volume
      ansible.builtin.command: pvcreate /dev/sdb1
      args:
        creates: /dev/sdb1 # Only run if /dev/sdb1 is not already a PV
      # Note: 'creates' checks for file existence. For PVs, a more robust check
      # might involve 'pvdisplay' output, but 'creates' is often sufficient
      # for initial setup.

    - name: Ensure Volume Group 'vg_apps' exists and includes /dev/sdb1
      community.general.lvg:
        vg: vg_apps
        pvs: /dev/sdb1
        state: present

    - name: Create Logical Volume 'lv_logs' of 5GB in 'vg_apps'
      community.general.lvol:
        vg: vg_apps
        lv: lv_logs
        size: 5G
        state: present

    - name: Display LVM configuration (for verification)
      ansible.builtin.command: "{{ item }}"
      loop:
        - vgdisplay vg_apps
        - lvdisplay /dev/vg_apps/lv_logs
      register: lvm_status
      changed_when: false # This command doesn't change system state

    - name: Print LVM status
      ansible.builtin.debug:
        var: lvm_status.results
```

**Instructions:**
1.  Save the playbook as `lvm_setup.yml`.
2.  Ensure your `inventory.ini` file has a `[webservers]` group with your target host(s).
3.  Run the playbook: `ansible-playbook -i inventory.ini lvm_setup.yml`
4.  After execution, SSH into your target host and run `sudo vgdisplay vg_apps` and `sudo lvdisplay /dev/vg_apps/lv_logs` to confirm the LVM setup.

#### Assessment idea
1.  **Question:** You have a Volume Group named `vg_data` with 50GB of free space. You want to create a new Logical Volume `lv_backup` that uses exactly half of the *remaining* free space. Which Ansible `community.general.lvol` task correctly achieves this?
    a)
    ```yaml
    - name: Create lv_backup
      community.general.lvol:
        vg: vg_data
        lv: lv_backup
        size: 25G
        state: present
    ```
    b)
    ```yaml
    - name: Create lv_backup
      community.general.lvol:
        vg: vg_data
        lv: lv_backup
        size: 50%FREE
        state: present
    ```
    c)
    ```yaml
    - name: Create lv_backup
      community.general.lvol:
        vg: vg_data
        lv: lv_backup
        size: 25%VG
        state: present
    ```
    d)
    ```yaml
    - name: Create lv_backup
      community.general.lvol:
        vg: vg_data
        lv: lv_backup
        size: 50%
        state: present
    ```
    **Correct Answer:** b)
    **Explanation:** The `size: 50%FREE` parameter explicitly tells the `lvol` module to allocate 50% of the *currently free* space within the specified Volume Group. Option a) assumes you know the exact free space and hardcodes it, which isn't dynamic. Option c) `50%VG` would allocate 50% of the *total* VG size, not just the free space. Option d) `50%` is ambiguous and not a valid unit for `lvol`.

2.  **Question:** A system administrator runs an Ansible playbook to extend an existing Logical Volume `/dev/vg_web/lv_content` from 50GB to 100GB. The playbook task includes `resizefs: true`. After the playbook runs, the `lvdisplay` command shows the LV size as 100GB, but `df -h /mnt/content` (where `/dev/vg_web/lv_content` is mounted) still reports the filesystem as 50GB. What is the most likely reason for this discrepancy?
    a) The `resizefs: true` parameter only works for XFS filesystems, and the LV uses ext4.
    b) The filesystem was mounted read-only, preventing the resize operation.
    c) The `resizefs: true` parameter failed because the filesystem was in use, and the `lvol` module cannot resize filesystems online.
    d) The `resizefs: true` parameter failed due to an unsupported filesystem type or an issue with the underlying filesystem, and the `lvol` module's `resizefs` capability is limited to specific conditions.
    **Correct Answer:** d)
    **Explanation:** While `resizefs: true` is designed to work with common filesystems like ext4 and XFS (and often works online for extension), it's not foolproof. The most likely reason for it failing to resize the *filesystem* despite the LV being extended is an underlying issue with the filesystem itself (e.g., corruption, specific mount options preventing resize, or a less common filesystem type that `resizefs` doesn't support). Option a) is incorrect as `resizefs` supports both ext4 and XFS. Option b) is plausible but less likely to be the *most* likely reason if the LV itself was extended. Option c) is incorrect because `lvol` *can* resize filesystems online for extension under normal circumstances. The `resizefs` parameter is a convenience wrapper; if it fails, manual intervention with `resize2fs` or `xfs_growfs` would be necessary, which might then reveal the root cause.

#### AI generation note
Create a 12-minute live coding video demonstrating LVM management with Ansible. Begin by explaining PVs, VGs, and LVs with simple block diagrams. Then, switch to a terminal view showing how to prepare a raw disk (`/dev/sdb`) by partitioning it with `parted` (using `command` module for `pvcreate`). Follow this with live coding of an Ansible playbook to:
1.  Create a Volume Group (`vg_data`) using the prepared PV.
2.  Create a Logical Volume (`lv_web`) of 5GB within `vg_data`.
3.  Extend `lv_web` to 10GB using `resizefs: true`.
4.  Remove `lv_web` and then `vg_data` (demonstrating `force: yes` for LV removal).
Show `vgdisplay`, `lvdisplay`, and `df -h` commands before and after each Ansible task to verify changes. Highlight common mistakes like forgetting `pvcreate` or `force: yes`. Use a split-screen view with the playbook on the left and terminal output on the right. Conclude with a 2-question interactive quiz on LVM components and Ansible module parameters.

---

### Chapter 4.2 — Automating File System Creation and Mounting

#### Learning objectives
*   Utilize Ansible's `community.general.filesystem` module to create and manage various types of filesystems (e.g., ext4, xfs) on logical volumes or disk partitions.
*   Configure the `/etc/fstab` file using Ansible's `ansible.posix.mount` module to ensure persistent mounting of filesystems across reboots.
*   Understand and apply various mount options in `/etc/fstab`, such as `defaults`, `nofail`, and `x-systemd.automount`, for robust system behavior.
*   Implement playbooks that correctly handle filesystem creation, mounting, and unmounting, ensuring idempotency and proper error handling.
*   Troubleshoot common issues related to filesystem mounting, including incorrect `fstab` entries and missing mount points.

#### Detailed lesson content
Once you've provisioned your raw storage, whether it's a physical partition, a Logical Volume, or a VDO volume, the next crucial step is to prepare it for use by the operating system. This involves creating a filesystem on it and then mounting that filesystem to a specific directory in the file hierarchy. Automating these steps with Ansible ensures consistency, reduces manual errors, and makes scaling your infrastructure much simpler.

Ansible provides the `community.general.filesystem` module for creating filesystems. This module is versatile and supports common filesystem types like `ext4`, `xfs`, `vfat`, and `swap`. Before creating a filesystem, it's good practice to ensure the underlying block device exists and is ready. For instance, if you're creating a filesystem on a Logical Volume, you'd ensure the LV has been successfully created by a previous task (as covered in Chapter 4.1).

Here’s an example of creating an XFS filesystem on an existing Logical Volume `/dev/vg_data/lv_web`:

```yaml
- name: Create XFS filesystem on /dev/vg_data/lv_web
  community.general.filesystem:
    fstype: xfs
    dev: /dev/vg_data/lv_web
    state: present # Ensures the filesystem exists
```

The `state: present` parameter makes this task idempotent. If an XFS filesystem already exists on `/dev/vg_data/lv_web`, Ansible will detect it and do nothing. If a different filesystem type exists, or no filesystem exists, it will create an XFS filesystem. A critical safety note here: running `filesystem` with `state: present` on a device that already has a filesystem will *overwrite* the existing filesystem if the `fstype` parameter is different or if the filesystem is corrupted, leading to data loss. Always be absolutely sure of your target device and its current state before executing this task. For production environments, consider adding a `when` condition to only format if the device is truly unformatted or if a specific `fstype` is not already present.

After creating the filesystem, the next step is to make it accessible to the operating system by mounting it. For temporary mounts, you can use the `ansible.posix.mount` module with `state: mounted`. However, for persistent mounts that survive reboots, you need to add an entry to the `/etc/fstab` file. The `ansible.posix.mount` module handles both of these scenarios gracefully.

Let's create a mount point and then mount our `/dev/vg_data/lv_web` to `/mnt/webdata`, making it persistent:

```yaml
- name: Ensure mount point /mnt/webdata exists
  ansible.builtin.file:
    path: /mnt/webdata
    state: directory
    mode: '0755'

- name: Mount /dev/vg_data/lv_web to /mnt/webdata persistently
  ansible.posix.mount:
    path: /mnt/webdata
    src: /dev/vg_data/lv_web
    fstype: xfs
    opts: defaults,nofail
    state: mounted # Ensures it's mounted now
    fstab: /etc/fstab # Ensures it's added to fstab for persistence
```

Let's break down the parameters of the `mount` module:
*   `path`: The mount point directory on the target system (e.g., `/mnt/webdata`).
*   `src`: The block device to be mounted (e.g., `/dev/vg_data/lv_web`). You can also use UUIDs or LABELs for `src`, which is generally recommended for robustness against device name changes. To get the UUID of a device, you can use `ansible.builtin.command: blkid -s UUID -o value /dev/vg_data/lv_web`.
*   `fstype`: The filesystem type (e.g., `xfs`, `ext4`).
*   `opts`: Mount options, a comma-separated list. `defaults` includes `rw, suid, dev, exec, auto, nouser, async`. `nofail` is particularly useful for non-critical filesystems; it tells the system not to halt the boot process if the device is unavailable. Another useful option is `x-systemd.automount`, which allows systemd to automount the filesystem on first access, potentially speeding up boot times if many filesystems are configured.
*   `state: mounted`: This ensures the filesystem is currently mounted. If it's not, Ansible will mount it. If it is, Ansible does nothing.
*   `fstab: /etc/fstab`: This is the key parameter for persistence. It instructs Ansible to add or update an entry in `/etc/fstab` to ensure the filesystem is mounted automatically on boot.

A common mistake is forgetting to create the mount point directory before attempting to mount. The `mount` module will fail if the `path` does not exist. Always ensure the directory is created first using the `ansible.builtin.file` module.

If you need to unmount a filesystem, you can use `state: unmounted`. To remove its entry from `/etc/fstab` as well, you would use `state: absent`:

```yaml
- name: Unmount /mnt/webdata and remove from fstab
  ansible.posix.mount:
    path: /mnt/webdata
    state: absent # Unmounts and removes fstab entry
```

This task will first attempt to unmount the filesystem. If successful, it will then remove the corresponding entry from `/etc/fstab`. If the filesystem is busy and cannot be unmounted, the task will fail. You might need to kill processes using the filesystem or force unmount (though forcing unmount can lead to data corruption if not done carefully).

For improved robustness, especially in environments where device names might change (e.g., cloud instances), it's highly recommended to use UUIDs (Universally Unique Identifiers) or filesystem labels in `/etc/fstab` instead of device paths like `/dev/vg_data/lv_web`.

To get the UUID of a filesystem, you can use the `blkid` command:

```bash
$ sudo blkid /dev/vg_data/lv_web
/dev/vg_data/lv_web: UUID="a1b2c3d4-e5f6-7890-1234-567890abcdef" TYPE="xfs"
```

You can integrate this into your Ansible playbook:

```yaml
- name: Get UUID of /dev/vg_data/lv_web
  ansible.builtin.command: blkid -s UUID -o value /dev/vg_data/lv_web
  register: web_lv_uuid
  changed_when: false

- name: Mount /dev/vg_data/lv_web to /mnt/webdata using UUID
  ansible.posix.mount:
    path: /mnt/webdata
    src: "UUID={{ web_lv_uuid.stdout }}" # Use UUID for src
    fstype: xfs
    opts: defaults,nofail,x-systemd.automount
    state: mounted
    fstab: /etc/fstab
```

Using UUIDs makes your `/etc/fstab` entries much more resilient to changes in the underlying block device enumeration. This is a best practice for RHCE-level system administration.

Remember to always test your `fstab` configurations. A common safety check after modifying `/etc/fstab` is to run `sudo mount -a`. This command attempts to mount all filesystems listed in `/etc/fstab` that are not already mounted. If there are errors, `mount -a` will report them, allowing you to fix them before a reboot potentially renders the system unbootable. If you suspect an `fstab` error might prevent booting, you can temporarily comment out the problematic line or set `nofail` for non-critical mounts.

#### Key concepts
*   **Filesystem:** A structured way that an operating system stores and organizes files on a storage device (e.g., ext4, xfs).
*   **Mount Point:** A directory in the file system hierarchy where a storage device's filesystem is attached and made accessible.
*   **`/etc/fstab`:** The system configuration file that contains information about filesystems that are automatically mounted at boot time.
*   **`community.general.filesystem` module:** An Ansible module used to create filesystems of various types on block devices.
*   **`ansible.posix.mount` module:** An Ansible module used to mount/unmount filesystems and manage entries in `/etc/fstab`.
*   **UUID (Universally Unique Identifier):** A unique identifier assigned to a filesystem, recommended for use in `/etc/fstab` for robust mounting.
*   **Mount Options (`opts`):** Parameters passed to the kernel when mounting a filesystem, controlling its behavior (e.g., `defaults`, `nofail`, `x-systemd.automount`).
*   **`mount -a`:** A command to test `/etc/fstab` entries by attempting to mount all unmounted filesystems listed in it.

#### Hands-on activity
**Scenario:** You have a new Logical Volume `/dev/vg_data/lv_db` (assume it's already created from the previous activity or exists) that needs to be formatted with `ext4`, mounted to `/var/lib/mysql`, and made persistent across reboots.

**Steps:**
1.  **Create Filesystem:** Format `/dev/vg_data/lv_db` with an `ext4` filesystem.
2.  **Create Mount Point:** Ensure the mount point `/var/lib/mysql` exists.
3.  **Mount Persistently:** Mount `/dev/vg_data/lv_db` to `/var/lib/mysql` and add the appropriate entry to `/etc/fstab` using its UUID, with `defaults` and `nofail` options.
4.  **Verify:** After running the playbook, log into the target host and verify the mount using `df -h /var/lib/mysql` and check `/etc/fstab` content.

**Playbook Template (`filesystem_mount.yml`):**

```yaml
---
- name: Configure filesystem and mount for database
  hosts: dbservers # Assuming this LV is for database servers
  become: true

  tasks:
    - name: Get UUID of /dev/vg_data/lv_db
      ansible.builtin.command: blkid -s UUID -o value /dev/vg_data/lv_db
      register: db_lv_uuid
      changed_when: false
      failed_when: db_lv_uuid.rc != 0 or not db_lv_uuid.stdout # Ensure UUID is found

    - name: Create ext4 filesystem on /dev/vg_data/lv_db
      community.general.filesystem:
        fstype: ext4
        dev: /dev/vg_data/lv_db
        state: present

    - name: Ensure mount point /var/lib/mysql exists
      ansible.builtin.file:
        path: /var/lib/mysql
        state: directory
        mode: '0755'
        owner: root
        group: root

    - name: Mount /dev/vg_data/lv_db to /var/lib/mysql persistently
      ansible.posix.mount:
        path: /var/lib/mysql
        src: "UUID={{ db_lv_uuid.stdout }}"
        fstype: ext4
        opts: defaults,nofail
        state: mounted
        fstab: /etc/fstab

    - name: Verify mount status
      ansible.builtin.command: df -h /var/lib/mysql
      register: df_output
      changed_when: false

    - name: Print mount status
      ansible.builtin.debug:
        var: df_output.stdout_lines

    - name: Verify fstab entry
      ansible.builtin.command: grep "UUID={{ db_lv_uuid.stdout }}" /etc/fstab
      register: fstab_entry
      changed_when: false

    - name: Print fstab entry
      ansible.builtin.debug:
        var: fstab_entry.stdout_lines
```

**Instructions:**
1.  Save the playbook as `filesystem_mount.yml`.
2.  Ensure your `inventory.ini` file has a `[dbservers]` group with your target host(s) and that `/dev/vg_data/lv_db` exists on these hosts.
3.  Run the playbook: `ansible-playbook -i inventory.ini filesystem_mount.yml`
4.  After execution, SSH into your target host and run `sudo df -h /var/lib/mysql` and `cat /etc/fstab` to confirm the filesystem is mounted and the entry is present.

#### Assessment idea
1.  **Question:** You are writing an Ansible playbook to mount a new XFS filesystem `/dev/sdb1` to `/data/app`. You want this mount to be persistent and to allow the system to boot even if `/dev/sdb1` is temporarily unavailable. Which of the following `ansible.posix.mount` tasks correctly configures this?
    a)
    ```yaml
    - name: Mount /dev/sdb1
      ansible.posix.mount:
        path: /data/app
        src: /dev/sdb1
        fstype: xfs
        opts: defaults
        state: mounted
        fstab: /etc/fstab
    ```
    b)
    ```yaml
    - name: Mount /dev/sdb1
      ansible.posix.mount:
        path: /data/app
        src: /dev/sdb1
        fstype: xfs
        opts: defaults,nofail
        state: mounted
        fstab: /etc/fstab
    ```
    c)
    ```yaml
    - name: Mount /dev/sdb1
      ansible.posix.mount:
        path: /data/app
        src: /dev/sdb1
        fstype: xfs
        opts: nofail
        state: present
        fstab: /etc/fstab
    ```
    d)
    ```yaml
    - name: Mount /dev/sdb1
      ansible.posix.mount:
        path: /data/app
        src: /dev/sdb1
        fstype: xfs
        opts: defaults,nofail
        state: mounted
    ```
    **Correct Answer:** b)
    **Explanation:** Option b) correctly uses `opts: defaults,nofail` to allow booting even if the device is unavailable and `state: mounted` along with `fstab: /etc/fstab` to ensure both immediate mounting and persistence. Option a) lacks `nofail`. Option c) uses `state: present`, which is not a valid `state` for the `mount` module to achieve a mounted state. Option d) misses `fstab: /etc/fstab`, so the mount would not be persistent.

2.  **Question:** A junior administrator created an Ansible playbook to set up a new filesystem. The playbook includes the following tasks:
    ```yaml
    - name: Create ext4 filesystem
      community.general.filesystem:
        fstype: ext4
        dev: /dev/sdb1
        state: present

    - name: Ensure mount point exists
      ansible.builtin.file:
        path: /data/logs
        state: directory

    - name: Mount /dev/sdb1
      ansible.posix.mount:
        path: /data/logs
        src: /dev/sdb1
        fstype: ext4
        opts: defaults
        state: mounted
        fstab: /etc/fstab
    ```
    After running the playbook, the administrator attempts to write files to `/data/logs` but receives "Permission denied" errors, even though the `df -h` command shows `/dev/sdb1` mounted at `/data/logs`. What is the most likely cause of the permission issue?
    a) The `fstype` should have been `xfs` for better permissions handling.
    b) The `ansible.builtin.file` task for the mount point is missing `owner` and `group` parameters, leaving it owned by root.
    c) The `opts: defaults` parameter in the `mount` task is incorrect and prevents write access.
    d) The `community.general.filesystem` module did not correctly set permissions during formatting.
    **Correct Answer:** b)
    **Explanation:** When `ansible.builtin.file` creates a directory without explicit `owner` or `group` parameters, it defaults to `root:root`. If the application or user attempting to write to `/data/logs` is not root, they will encounter "Permission denied" errors. The solution is to add `owner` and `group` (and potentially `mode`) to the `ansible.builtin.file` task to match the user/group that needs write access. Filesystem type (a), mount options (c), and the `filesystem` module (d) are generally not the direct cause of this specific permission issue on a newly mounted, default-permissioned mount point.

#### AI generation note
Produce a 10-minute interactive lab walkthrough video. Start with a clean virtual machine. First, show how to manually verify an unformatted device and check for existing mount points. Then, demonstrate a live coding session where an Ansible playbook is built step-by-step to:
1.  Create an `ext4` filesystem on `/dev/vg_data/lv_db` (assuming it exists).
2.  Create the mount point `/var/lib/mysql`.
3.  Obtain the UUID of `/dev/vg_data/lv_db` using `command` module.
4.  Mount the LV to `/var/lib/mysql` using its UUID, with `defaults,nofail` options, and ensure persistence in `/etc/fstab`.
Show `df -h`, `cat /etc/fstab`, and `sudo mount -a` commands in the terminal after each relevant task. Highlight the importance of UUIDs and the `nofail` option. Include a small interactive coding exercise where learners modify the playbook to change the mount options to `ro,nodev` and then revert.

---

### Chapter 4.3 — Configuring SWAP Space using Ansible

#### Learning objectives
*   Understand the purpose and importance of swap space in Linux systems, especially for memory management and system stability.
*   Utilize Ansible's `community.general.swapfile` module to create and manage swap files.
*   Automate the creation of swap partitions using LVM (Logical Volume Management) and the `community.general.filesystem` module.
*   Configure swap entries in `/etc/fstab` for persistent activation across reboots using the `ansible.posix.mount` module.
*   Implement playbooks that dynamically adjust swap configuration based on system requirements, ensuring idempotency and best practices.

#### Detailed lesson content
Swap space, often referred to as virtual memory, is a crucial component of memory management in Linux systems. When the physical RAM (Random Access Memory) is fully utilized, the operating system moves less frequently accessed pages of memory from RAM to a designated area on the hard disk or SSD, known as swap space. This process, called "swapping out," frees up physical RAM for more active processes. While disk-based swap is significantly slower than RAM, it prevents applications from crashing due to out-of-memory errors and helps maintain system stability, especially under heavy memory load. For RHCE, understanding and automating swap configuration is essential for optimizing server performance and reliability.

There are two primary ways to implement swap space: as a **swap partition** or as a **swap file**. Both can be managed effectively with Ansible. A swap partition is a dedicated disk partition formatted specifically for swap. A swap file, on the other hand, is a regular file created within an existing filesystem, which is then designated as swap space. Swap files offer greater flexibility as they can be easily created, resized, or removed without repartitioning disks, making them ideal for dynamic environments or when you need to quickly add temporary swap.

Ansible provides the `community.general.swapfile` module specifically for managing swap files. Let's say you want to ensure a 2GB swap file exists at `/swapfile` on your system:

```yaml
- name: Ensure a 2GB swap file exists
  community.general.swapfile:
    path: /swapfile
    size_mb: 2048 # Size in megabytes
    state: present
```

This task is highly idempotent. If `/swapfile` doesn't exist, it will be created and formatted as swap. If it exists but is not swap, it will be reformatted. If it exists and is already swap, Ansible will do nothing. If the `size_mb` differs from the existing swap file, the module will resize it. This module also handles the activation of the swap file.

After creating the swap file, you need to ensure it's activated automatically on boot. This is done by adding an entry to `/etc/fstab`. We can use the `ansible.posix.mount` module for this, just like with regular filesystems:

```yaml
- name: Add /swapfile to /etc/fstab and activate
  ansible.posix.mount:
    path: none # For swap files, path is 'none'
    src: /swapfile
    fstype: swap
    opts: defaults
    state: present # Ensures the entry is in fstab
    fstab: /etc/fstab
```

Notice the `path: none` for swap files; this is the standard convention in `/etc/fstab` for swap. The `state: present` here only ensures the `fstab` entry exists. To ensure the swap is *active* right after the playbook runs, you might need an additional step if the `swapfile` module didn't activate it (though it typically does).

Alternatively, you can create a dedicated **swap partition**. This often involves using LVM. First, you'd create a Logical Volume (as discussed in Chapter 4.1) and then format it as swap using the `community.general.filesystem` module.

Here's how you might create a 4GB swap LV and configure it:

```yaml
- name: Ensure Logical Volume 'lv_swap' of 4GB exists in 'vg_system'
  community.general.lvol:
    vg: vg_system
    lv: lv_swap
    size: 4G
    state: present

- name: Create swap filesystem on /dev/vg_system/lv_swap
  community.general.filesystem:
    fstype: swap
    dev: /dev/vg_system/lv_swap
    state: present

- name: Add /dev/vg_system/lv_swap to /etc/fstab and activate
  ansible.posix.mount:
    path: none
    src: /dev/vg_system/lv_swap
    fstype: swap
    opts: defaults
    state: present
    fstab: /etc/fstab

- name: Activate all configured swap devices
  ansible.builtin.command: swapon -a
  changed_when: true # Assume swapon -a always causes a change if new swap is found
```

The `swapon -a` command activates all swap devices listed in `/etc/fstab` that are not already active. This ensures that any newly configured swap is immediately available without requiring a reboot.

A common mistake is incorrectly sizing swap space. While there's no universal rule, a general guideline for modern systems with ample RAM (e.g., 8GB or more) is to have swap equal to RAM if you need hibernation, or 1/2 to 1x RAM for general server use, up to a certain limit (e.g., 8GB or 16GB). For systems with less RAM (e.g., 4GB or less), 1.5x to 2x RAM might be appropriate. Always monitor your system's memory usage (`free -h`, `top`) to determine optimal swap size.

Another important aspect is `swappiness`. This kernel parameter controls how aggressively the kernel swaps processes out of physical memory and into swap space. A value of `0` tells the kernel to avoid swapping processes out of physical memory for as long as possible, while `100` tells it to aggressively swap processes out. The default is typically `60`. For servers with fast storage and plenty of RAM, a lower `swappiness` (e.g., `10` or `20`) is often preferred to keep more data in faster RAM. For desktops or systems with slower storage, a higher `swappiness` might be acceptable.

You can configure `swappiness` persistently using Ansible:

```yaml
- name: Set swappiness to 10 persistently
  ansible.builtin.sysctl:
    name: vm.swappiness
    value: '10'
    state: present
    sysctl_set: true
    reload: true # Reloads sysctl settings immediately
    sysctl_file: /etc/sysctl.d/99-swappiness.conf # Recommended for custom settings
```

This task creates or updates a configuration file in `/etc/sysctl.d/` to ensure the `swappiness` setting persists across reboots. Using a dedicated file in `/etc/sysctl.d/` is a best practice as it keeps custom settings separate from the main `/etc/sysctl.conf` file, making management cleaner.

Safety note: Excessive swapping can degrade system performance significantly due to slow disk I/O. If your system is constantly swapping, it's often an indication that you need more physical RAM, not just more swap space. Swap is a safety net, not a performance booster.

#### Key concepts
*   **Swap Space:** A designated area on a storage device used by the operating system to temporarily store inactive memory pages, acting as virtual RAM.
*   **Swap Partition:** A dedicated disk partition formatted specifically for use as swap space.
*   **Swap File:** A regular file created within an existing filesystem that is designated as swap space.
*   **`community.general.swapfile` module:** An Ansible module for creating, resizing, and managing swap files.
*   **`fstype: swap`:** The filesystem type used when formatting a device or file for swap.
*   **`swapon -a`:** A command to activate all swap devices listed in `/etc/fstab`.
*   **`swappiness`:** A kernel parameter (`vm.swappiness`) that controls how aggressively the kernel uses swap space.
*   **`ansible.builtin.sysctl` module:** An Ansible module used to manage kernel parameters, including `swappiness`.

#### Hands-on activity
**Scenario:** You need to configure a new server to have a 1GB swap file at `/data/swapfile` and set its `swappiness` to `15` for improved performance on a database server.

**Steps:**
1.  **Create Swap File:** Ensure a 1GB swap file exists at `/data/swapfile`.
2.  **Make Swap Persistent:** Add an entry for `/data/swapfile` to `/etc/fstab` to ensure it's activated on boot.
3.  **Activate Swap:** Ensure all configured swap devices are active immediately.
4.  **Set Swappiness:** Configure the `vm.swappiness` kernel parameter to `15` and make it persistent.
5.  **Verify:** After running the playbook, log into the target host and verify the swap status using `swapon --show` and `free -h`, and check `cat /proc/sys/vm/swappiness`.

**Playbook Template (`configure_swap.yml`):**

```yaml
---
- name: Configure swap file and swappiness
  hosts: dbservers # Target database servers
  become: true

  tasks:
    - name: Ensure /data directory exists for swapfile
      ansible.builtin.file:
        path: /data
        state: directory
        mode: '0755'

    - name: Ensure a 1GB swap file exists at /data/swapfile
      community.general.swapfile:
        path: /data/swapfile
        size_mb: 1024 # 1GB
        state: present

    - name: Add /data/swapfile to /etc/fstab for persistence
      ansible.posix.mount:
        path: none
        src: /data/swapfile
        fstype: swap
        opts: defaults
        state: present
        fstab: /etc/fstab

    - name: Activate all configured swap devices (including new swapfile)
      ansible.builtin.command: swapon -a
      changed_when: true # Assume this command will make a change if new swap is found

    - name: Set vm.swappiness to 15 persistently
      ansible.builtin.sysctl:
        name: vm.swappiness
        value: '15'
        state: present
        sysctl_set: true
        reload: true
        sysctl_file: /etc/sysctl.d/99-swappiness.conf

    - name: Verify swap status
      ansible.builtin.command: "{{ item }}"
      loop:
        - swapon --show
        - free -h
        - cat /proc/sys/vm/swappiness
      register: swap_verification
      changed_when: false

    - name: Print swap verification results
      ansible.builtin.debug:
        var: swap_verification.results
```

**Instructions:**
1.  Save the playbook as `configure_swap.yml`.
2.  Ensure your `inventory.ini` file has a `[dbservers]` group with your target host(s).
3.  Run the playbook: `ansible-playbook -i inventory.ini configure_swap.yml`
4.  After execution, SSH into your target host and run `sudo swapon --show`, `sudo free -h`, and `cat /proc/sys/vm/swappiness` to confirm the swap file is active and `swappiness` is set.

#### Assessment idea
1.  **Question:** You need to configure a new server to have 4GB of swap space using a dedicated Logical Volume `/dev/vg_system/lv_newswap`. Which sequence of Ansible tasks correctly sets this up and ensures it's persistent across reboots?
    a)
    ```yaml
    - community.general.lvol: vg: vg_system, lv: lv_newswap, size: 4G, state: present
    - community.general.filesystem: fstype: swap, dev: /dev/vg_system/lv_newswap, state: present
    - ansible.posix.mount: path: none, src: /dev/vg_system/lv_newswap, fstype: swap, opts: defaults, state: mounted, fstab: /etc/fstab
    ```
    b)
    ```yaml
    - community.general.lvol: vg: vg_system, lv: lv_newswap, size: 4G, state: present
    - community.general.filesystem: fstype: swap, dev: /dev/vg_system/lv_newswap, state: present
    - ansible.posix.mount: path: none, src: /dev/vg_system/lv_newswap, fstype: swap, opts: defaults, state: present, fstab: /etc/fstab
    - ansible.builtin.command: swapon -a
    ```
    c)
    ```yaml
    - community.general.swapfile: path: /dev/vg_system/lv_newswap, size_mb: 4096, state: present
    - ansible.posix.mount: path: none, src: /dev/vg_system/lv_newswap, fstype: swap, opts: defaults, state: present, fstab: /etc/fstab
    ```
    d)
    ```yaml
    - community.general.lvol: vg: vg_system, lv: lv_newswap, size: 4G, state: present
    - ansible.posix.mount: path: /dev/vg_system/lv_newswap, fstype: swap, opts: defaults, state: mounted, fstab: /etc/fstab
    ```
    **Correct Answer:** b)
    **Explanation:** Option b) correctly creates the Logical Volume, formats it as swap, adds it to `/etc/fstab` for persistence (using `state: present` for `mount` module's `fstab` management), and then explicitly activates it with `swapon -a`. Option a) uses `state: mounted` for the `mount` module, which is not the correct state for managing `fstab` entries for swap (it should be `present` or `absent`). Option c) incorrectly tries to use `swapfile` module on an LV, which is meant for regular files. Option d) misses the crucial step of formatting the LV as swap using `community.general.filesystem`.

2.  **Question:** A server is experiencing performance issues, and `free -h` shows that swap space is being heavily utilized despite having 32GB of RAM. The `vm.swappiness` value is currently at the default of `60`. The system administrator wants to reduce the kernel's tendency to swap. Which Ansible task correctly sets `vm.swappiness` to `10` and ensures this setting persists across reboots?
    a)
    ```yaml
    - name: Set swappiness
      ansible.builtin.sysctl:
        name: vm.swappiness
        value: '10'
        state: present
    ```
    b)
    ```yaml
    - name: Set swappiness
      ansible.builtin.sysctl:
        name: vm.swappiness
        value: '10'
        state: present
        reload: true
    ```
    c)
    ```yaml
    - name: Set swappiness
      ansible.builtin.sysctl:
        name: vm.swappiness
        value: '10'
        state: present
        sysctl_set: true
        reload: true
        sysctl_file: /etc/sysctl.d/99-custom.conf
    ```
    d)
    ```yaml
    - name: Set swappiness
      ansible.builtin.command: echo "vm.swappiness=10" >> /etc/sysctl.conf
    ```
    **Correct Answer:** c)
    **Explanation:** Option c) uses the `ansible.builtin.sysctl` module correctly with `state: present` to ensure the setting exists, `sysctl_set: true` to apply it immediately, `reload: true` to reload all sysctl settings, and specifies `sysctl_file` for persistent and clean configuration management. Option a) might not persist the change. Option b) reloads but doesn't explicitly ensure persistence via a config file. Option d) is an imperative `command` task that is not idempotent, can lead to duplicate entries, and is not the Ansible-preferred way to manage `sysctl` settings.

#### AI generation note
Design a 10-minute animated video explaining swap concepts and demonstrating Ansible. Start with an animation illustrating how RAM and swap interact when memory is low. Then, transition to a split-screen view: on the left, an Ansible playbook is written to create a 1GB swap file and configure `swappiness` to `15`; on the right, a terminal shows `free -h`, `swapon --show`, and `cat /proc/sys/vm/swappiness` output before and after each task. Include visual overlays explaining `path: none` for `fstab` and the purpose of `sysctl_file`. Conclude with a quick interactive drag-and-drop exercise matching `swappiness` values to their effects on system behavior.

---

### Chapter 4.4 — Implementing VDO Volumes with Ansible

#### Learning objectives
*   Explain the benefits and use cases of Virtual Data Optimizer (VDO) technology for block storage, including data deduplication and compression.
*   Utilize Ansible's `community.general.vdo` module to create and manage VDO volumes on block devices.
*   Configure filesystems and mount points on VDO volumes, ensuring proper integration with the operating system.
*   Implement playbooks that automate the entire VDO setup process, from volume creation to persistent mounting, ensuring idempotency.
*   Monitor VDO volume statistics and troubleshoot common issues related to VDO deployment and performance.

#### Detailed lesson content
In modern data centers, efficient storage utilization is paramount. Red Hat's Virtual Data Optimizer (VDO) is a block virtualization technology designed to reduce the amount of physical storage required to store data. It achieves this through **data deduplication** and **compression**, making it an incredibly valuable tool for workloads with highly repetitive data, such as virtual machine images, container layers, or backup repositories. VDO presents a logical volume to the operating system, but internally it optimizes data before writing it to the underlying physical storage, saving significant space and potentially reducing I/O operations. For an RHCE, understanding and automating VDO deployment is a key skill for optimizing storage infrastructure.

VDO operates as a layer between a physical block device (or an LVM Logical Volume) and the filesystem. When data is written to the VDO volume, it first passes through a deduplication layer, which identifies and eliminates redundant blocks of data. Unique blocks are then compressed before being written to the physical storage. This means that you can provision a VDO volume that appears much larger to the operating system than the actual physical storage it consumes, offering a high degree of overprovisioning potential.

Ansible provides the `community.general.vdo` module to manage VDO volumes. Before creating a VDO volume, you need to ensure you have an underlying block device ready, such as a raw disk (`/dev/sdd`), a partition (`/dev/sdd1`), or an LVM Logical Volume (`/dev/vg_data/lv_raw`).

Here's an example of creating a VDO volume named `vdo_data` on the physical device `/dev/sdd`:

```yaml
- name: Ensure VDO volume 'vdo_data' exists on /dev/sdd
  community.general.vdo:
    name: vdo_data
    device: /dev/sdd
    state: present
    # Additional parameters for VDO creation:
    # vdo_logical_size: "10T" # The logical size presented to the OS (can be larger than physical)
    # vdo_block_map_cache_size: "128M" # Cache size for block mapping
    # vdo_slab_size: "2G" # Size of each slab in the VDO volume
    # vdo_compression: yes # Enable compression (default is yes)
    # vdo_deduplication: yes # Enable deduplication (default is yes)
```

The `name` parameter specifies the name of the VDO volume, which will typically appear as `/dev/mapper/vdo_data`. The `device` is the underlying physical block device. `state: present` ensures the VDO volume exists. When creating a VDO volume, you can specify `vdo_logical_size`, which is the apparent size of the volume to the operating system. This can be significantly larger than the actual physical storage available, allowing for overprovisioning. For instance, if `/dev/sdd` is 1TB, you might set `vdo_logical_size: "10T"` to present a 10TB volume, expecting deduplication and compression to make it fit.

A crucial safety note: Once a VDO volume is created, changing its `vdo_logical_size` is not straightforward and often requires recreating the volume and restoring data. Plan your logical size carefully. Also, ensure the underlying device is empty or contains data you are willing to lose, as VDO creation will overwrite it.

After the VDO volume is created, it behaves like any other block device. You can create a filesystem on it and then mount it. Let's create an XFS filesystem on our `vdo_data` volume and mount it persistently:

```yaml
- name: Create XFS filesystem on /dev/mapper/vdo_data
  community.general.filesystem:
    fstype: xfs
    dev: /dev/mapper/vdo_data
    state: present

- name: Ensure mount point /data/vdo_storage exists
  ansible.builtin.file:
    path: /data/vdo_storage
    state: directory
    mode: '0755'

- name: Mount /dev/mapper/vdo_data to /data/vdo_storage persistently
  ansible.posix.mount:
    path: /data/vdo_storage
    src: /dev/mapper/vdo_data
    fstype: xfs
    opts: defaults,x-systemd.requires=vdo.service # Ensure VDO service starts before mount
    state: mounted
    fstab: /etc/fstab
```

Notice the `x-systemd.requires=vdo.service` option in the `mount` task. This is a critical mount option for VDO volumes. It ensures that the `vdo.service` (which manages VDO volumes) is started and the VDO volume is activated *before* the filesystem attempts to mount during boot. Without this, the system might fail to mount the VDO-backed filesystem, potentially leading to boot failures if the mount point is critical.

To remove a VDO volume, you first need to unmount any filesystems on it and remove their `fstab` entries, then set the `vdo` module's `state` to `absent`:

```yaml
- name: Unmount /data/vdo_storage and remove from fstab
  ansible.posix.mount:
    path: /data/vdo_storage
    state: absent

- name: Ensure VDO volume 'vdo_data' is absent
  community.general.vdo:
    name: vdo_data
    state: absent
```

Monitoring VDO performance and space savings is also important. The `vdostats` command provides detailed information about deduplication ratios, compression ratios, and physical space usage. You can use Ansible's `command` module to gather this information for reporting or conditional logic:

```yaml
- name: Get VDO statistics for vdo_data
  ansible.builtin.command: vdostats --human-readable /dev/mapper/vdo_data
  register: vdo_stats
  changed_when: false

- name: Print VDO statistics
  ansible.builtin.debug:
    var: vdo_stats.stdout_lines
```

Common mistakes include not setting the `x-systemd.requires=vdo.service` option in `fstab`, which leads to boot issues. Another is miscalculating the `vdo_logical_size` or underestimating the actual physical storage needed, leading to the VDO volume filling up faster than expected if deduplication/compression isn't as effective as anticipated. Always monitor `vdostats` to understand actual usage.

VDO is a powerful technology, but it does introduce a layer of complexity. It requires CPU resources for deduplication and compression, so consider the impact on system performance, especially on resource-constrained systems. However, for specific workloads, the storage savings and I/O reduction can far outweigh the overhead.

#### Key concepts
*   **Virtual Data Optimizer (VDO):** A Linux block virtualization technology that uses deduplication and compression to reduce physical storage requirements.
*   **Deduplication:** The process of identifying and eliminating duplicate blocks of data, storing only one unique instance.
*   **Compression:** Reducing the size of data blocks to save storage space.
*   **`community.general.vdo` module:** An Ansible module used to create, modify, and remove VDO volumes.
*   **Logical Size:** The apparent size of a VDO volume presented to the operating system, which can be larger than the physical storage.
*   **`/dev/mapper/vdo_name`:** The device path for an active VDO volume.
*   **`x-systemd.requires=vdo.service`:** An `fstab` mount option ensuring the VDO service is active before mounting the filesystem.
*   **`vdostats` command:** A utility for monitoring VDO volume statistics, including deduplication and compression ratios.

#### Hands-on activity
**Scenario:** You need to set up a VDO volume for a container image registry. Assume `/dev/sde` is an unformatted disk on your target host. You want to create a VDO volume named `vdo_registry` on `/dev/sde` with a logical size of `5T`, then format it with `xfs`, and mount it persistently to `/var/lib/containers`.

**Steps:**
1.  **Create VDO Volume:** Create `vdo_registry` on `/dev/sde` with a `vdo_logical_size` of `5T`.
2.  **Create Filesystem:** Format the VDO volume (`/dev/mapper/vdo_registry`) with `xfs`.
3.  **Create Mount Point:** Ensure `/var/lib/containers` directory exists.
4.  **Mount Persistently:** Mount the VDO volume to `/var/lib/containers` using its `/dev/mapper/` path, `xfs` filesystem type, `defaults,x-systemd.requires=vdo.service` options, and ensure it's in `/etc/fstab`.
5.  **Verify:** After running the playbook, log into the target host and verify the VDO volume using `vdostats`, `df -h /var/lib/containers`, and check `/etc/fstab`.

**Playbook Template (`vdo_setup.yml`):**

```yaml
---
- name: Configure VDO volume for container registry
  hosts: registry_servers # Target servers for container registry
  become: true

  tasks:
    - name: Ensure VDO package is installed
      ansible.builtin.package:
        name: vdo
        state: present

    - name: Ensure VDO service is enabled and started
      ansible.builtin.service:
        name: vdo
        enabled: true
        state: started

    - name: Ensure VDO volume 'vdo_registry' exists on /dev/sde
      community.general.vdo:
        name: vdo_registry
        device: /dev/sde
        state: present
        vdo_logical_size: "5T" # Logical size presented to the OS
        vdo_compression: yes
        vdo_deduplication: yes

    - name: Create XFS filesystem on /dev/mapper/vdo_registry
      community.general.filesystem:
        fstype: xfs
        dev: /dev/mapper/vdo_registry
        state: present

    - name: Ensure mount point /var/lib/containers exists
      ansible.builtin.file:
        path: /var/lib/containers
        state: directory
        mode: '0755'

    - name: Mount /dev/mapper/vdo_registry to /var/lib/containers persistently
      ansible.posix.mount:
        path: /var/lib/containers
        src: /dev/mapper/vdo_registry
        fstype: xfs
        opts: defaults,x-systemd.requires=vdo.service
        state: mounted
        fstab: /etc/fstab

    - name: Verify VDO status and mount
      ansible.builtin.command: "{{ item }}"
      loop:
        - vdostats --human-readable /dev/mapper/vdo_registry
        - df -h /var/lib/containers
      register: vdo_verification
      changed_when: false

    - name: Print VDO verification results
      ansible.builtin.debug:
        var: vdo_verification.results
```

**Instructions:**
1.  Save the playbook as `vdo_setup.yml`.
2.  Ensure your `inventory.ini` file has a `[registry_servers]` group with your target host(s) and that `/dev/sde` is an available, unformatted disk.
3.  Run the playbook: `ansible-playbook -i inventory.ini vdo_setup.yml`
4.  After execution, SSH into your target host and run `sudo vdostats --human-readable /dev/mapper/vdo_registry`, `sudo df -h /var/lib/containers`, and `cat /etc/fstab` to confirm the VDO setup.

#### Assessment idea
1.  **Question:** You have successfully created a VDO volume named `vdo_logs` on `/dev/sdc`. You then formatted it with `ext4` and mounted it to `/var/log/app`. However, after a server reboot, the filesystem fails to mount, and the system enters emergency mode. Upon inspection of `/etc/fstab`, the entry for `vdo_logs` looks like this:
    ```
    /dev/mapper/vdo_logs /var/log/app ext4 defaults 0 0
    ```
    What is the most likely reason for the mount failure after reboot?
    a) The `fstype` should have been `xfs` for VDO volumes.
    b) The `defaults` option is insufficient for VDO volumes.
    c) The `vdo.service` did not start before the mount attempt, and the `fstab` entry lacks the necessary dependency.
    d) The VDO volume was not properly activated before the `fstab` entry was processed.
    **Correct Answer:** c)
    **Explanation:** The most likely reason is that the `vdo.service` (which activates VDO volumes) did not start or initialize the VDO volume before the system attempted to mount `/dev/mapper/vdo_logs`. The `fstab` entry needs the `x-systemd.requires=vdo.service` option to ensure this dependency is met. Option a) is incorrect; VDO supports various filesystems. Option b) is too vague; `defaults` is fine, but the *missing* option is critical. Option d) is related to c), but the specific `fstab` option is the direct fix for the persistence issue.

2.  **Question:** A system administrator is planning to deploy a VDO volume for a backup repository on a 2TB physical disk. They expect a 4:1 deduplication and compression ratio on average for their backup data. To maximize the apparent storage space, what `vdo_logical_size` would be appropriate to configure for the VDO volume using the `community.general.vdo` module?
    a) `2T`
    b) `4T`
    c) `8T`
    d) `16T`
    **Correct Answer:** c)
    **Explanation:** VDO's logical size represents the *apparent* size to the operating system, which can be significantly larger than the physical storage due to deduplication and compression. With a 2TB physical disk and an expected 4:1 ratio, the logical size can be 4 times the physical size. Therefore, 2TB * 4 = 8TB. Setting `vdo_logical_size: "8T"` would present an 8TB volume to the OS, which would utilize the 2TB physical disk efficiently given the expected data reduction.

#### AI generation note
Create a 12-minute video tutorial with a strong emphasis on visual explanations and live terminal demos. Start with an animated diagram explaining how VDO performs deduplication and compression. Then, switch to a live coding session where an Ansible playbook is written to:
1.  Install the `vdo` package and ensure the `vdo` service is running.
2.  Create a VDO volume (`vdo_registry`) on a raw disk (`/dev/sde`) with a `5T` logical size.
3.  Format the VDO volume with `xfs`.
4.  Create a mount point (`/var/lib/containers`).
5.  Mount the VDO volume persistently, highlighting `x-systemd.requires=vdo.service`.
Show `vdostats --human-readable` and `df -h` output at relevant steps. Include a visual overlay explaining the `vdo_logical_size` concept. End with a reflection prompt asking learners to consider scenarios where VDO would be most beneficial and least beneficial.

---

### Chapter 4.5 — Automating Stratis Storage Management

#### Learning objectives
*   Understand the purpose and benefits of Stratis as a local storage management solution, including its simplified management of pools and filesystems.
*   Utilize Ansible's `community.general.stratis` module to create and manage Stratis storage pools.
*   Employ the `community.general.stratis` module to create, destroy, and manage filesystems within Stratis pools.
*   Implement playbooks that automate the entire Stratis setup, from pool creation to persistent mounting of filesystems, ensuring idempotency.
*   Monitor Stratis pool and filesystem status and troubleshoot common issues encountered during Stratis deployment.

#### Detailed lesson content
Stratis is a local storage management solution for Linux that aims to simplify common storage tasks. It provides a user-friendly way to manage pools of storage and create filesystems from them, abstracting away much of the complexity often associated with LVM or traditional disk management. Think of Stratis as a "next-generation" approach to local storage, offering features like thin provisioning, snapshots, and a unified interface for managing storage, all built on top of `dm-thin` and `XFS`. For an RHCE, Stratis offers a modern, simplified alternative to LVM for certain use cases, and automating it with Ansible makes it even more powerful.

The core concept in Stratis is a **pool**. A Stratis pool is created from one or more block devices (e.g., `/dev/sdb`, `/dev/sdc`). From this pool, you then create **filesystems**, which are thinly provisioned by default. This means a filesystem only consumes physical space as data is written to it, allowing for efficient overprovisioning of storage. Stratis filesystems are always XFS, leveraging XFS's robustness and performance.

Ansible provides the `community.general.stratis` module to interact with Stratis. Before you can use Stratis, you need to ensure the `stratisd` service is installed and running on your target host.

Here's how you might ensure the `stratisd` service is active:

```yaml
- name: Ensure stratisd package is installed
  ansible.builtin.package:
    name: stratisd
    state: present

- name: Ensure stratisd service is enabled and started
  ansible.builtin.service:
    name: stratisd
    enabled: true
    state: started
```

Once `stratisd` is running, you can create a Stratis pool. Let's create a pool named `app_pool` using `/dev/sdb`:

```yaml
- name: Ensure Stratis pool 'app_pool' exists on /dev/sdb
  community.general.stratis:
    state: present
    name: app_pool
    devices: /dev/sdb
```

The `devices` parameter can accept a single device or a list of devices (e.g., `[ /dev/sdb, /dev/sdc ]`). Stratis automatically handles RAID-like striping and redundancy if multiple devices are provided, simplifying multi-disk setups. A safety note: Creating a Stratis pool will overwrite any existing data on the specified devices. Always ensure the devices are empty or contain data you are willing to lose.

After creating a pool, you can create filesystems within it. Let's create a filesystem named `web_data` in `app_pool`:

```yaml
- name: Ensure Stratis filesystem 'web_data' exists in 'app_pool'
  community.general.stratis:
    state: present
    pool: app_pool
    filesystem: web_data
```

This task creates a thinly provisioned XFS filesystem. The device path for this filesystem will typically be `/stratis/app_pool/web_data`.

To make the Stratis filesystem accessible, you need to mount it. Just like with LVM or VDO, you'll create a mount point and then use the `ansible.posix.mount` module to mount it persistently.

```yaml
- name: Ensure mount point /srv/webdata exists
  ansible.builtin.file:
    path: /srv/webdata
    state: directory
    mode: '0755'

- name: Mount /stratis/app_pool/web_data to /srv/webdata persistently
  ansible.posix.mount:
    path: /srv/webdata
    src: /stratis/app_pool/web_data
    fstype: xfs
    opts: defaults,x-systemd.requires=stratisd.service # Crucial for boot
    state: mounted
    fstab: /etc/fstab
```

The `x-systemd.requires=stratisd.service` mount option is vital for Stratis filesystems. It ensures that the `stratisd` service is running and the pool/filesystem is activated before the system attempts to mount it during boot, preventing potential boot failures.

Stratis also supports snapshots, which are read-only copies of a filesystem at a specific point in time. While the `stratis` Ansible module doesn't directly expose snapshot creation, you can use the `ansible.builtin.command` module to execute `stratis filesystem snapshot` commands if needed, or rely on future module enhancements.

To remove a filesystem, you first unmount it and remove its `fstab` entry, then set the `stratis` module's `state` to `absent` for the filesystem:

```yaml
- name: Unmount /srv/webdata and remove from fstab
  ansible.posix.mount:
    path: /srv/webdata
    state: absent

- name: Ensure Stratis filesystem 'web_data' is absent
  community.general.stratis:
    state: absent
    pool: app_pool
    filesystem: web_data
```

Similarly, to remove a pool, all filesystems within it must first be removed. Then, you can remove the pool:

```yaml
- name: Ensure Stratis pool 'app_pool' is absent
  community.general.stratis:
    state: absent
    name: app_pool
```

Monitoring Stratis can be done with the `stratis pool list` and `stratis filesystem list` commands. These provide information on pool size, free space, and filesystem usage.

```yaml
- name: Get Stratis pool list
  ansible.builtin.command: stratis pool list --json
  register: stratis_pools
  changed_when: false

- name: Print Stratis pool list
  ansible.builtin.debug:
    var: stratis_pools.stdout
```

Common mistakes with Stratis include forgetting to start the `stratisd` service, or missing the `x-systemd.requires=stratisd.service` option in `/etc/fstab`, leading to unmountable filesystems after a reboot. Another consideration is that Stratis is designed for local storage. For network-attached storage, other solutions like NFS or iSCSI are more appropriate. Stratis simplifies local storage, but it's important to understand its scope.

#### Key concepts
*   **Stratis:** A local storage management solution for Linux that simplifies the creation and management of storage pools and filesystems.
*   **Pool:** The fundamental storage unit in Stratis, created from one or more block devices.
*   **Filesystem:** A thinly provisioned XFS filesystem created within a Stratis pool.
*   **Thin Provisioning:** Allocating storage space only as it is actually consumed, rather than pre-allocating the full logical size.
*   **`community.general.stratis` module:** An Ansible module used to manage Stratis pools and filesystems.
*   **`stratisd` service:** The daemon that manages Stratis pools and filesystems.
*   **`/stratis/pool_name/filesystem_name`:** The typical device path for a Stratis filesystem.
*   **`x-systemd.requires=stratisd.service`:** An `fstab` mount option ensuring the `stratisd` service is active before mounting the filesystem.

#### Hands-on activity
**Scenario:** You need to set up a new Stratis pool and filesystem for a development environment. Assume `/dev/sdf` is an unformatted disk on your target host. You will create a pool named `dev_pool` on `/dev/sdf`, then a filesystem named `dev_home` within it, and mount it persistently to `/home/devuser`.

**Steps:**
1.  **Ensure Stratis Service:** Install `stratisd` and ensure its service is running.
2.  **Create Stratis Pool:** Create a pool named `dev_pool` on `/dev/sdf`.
3.  **Create Stratis Filesystem:** Create a filesystem named `dev_home` within `dev_pool`.
4.  **Create Mount Point:** Ensure `/home/devuser` directory exists.
5.  **Mount Persistently:** Mount the Stratis filesystem to `/home/devuser` using its `/stratis/` path, `xfs` filesystem type, `defaults,x-systemd.requires=stratisd.service` options, and ensure it's in `/etc/fstab`.
6.  **Verify:** After running the playbook, log into the target host and verify the Stratis setup using `stratis pool list`, `stratis filesystem list`, `df -h /home/devuser`, and check `/etc/fstab`.

**Playbook Template (`stratis_setup.yml`):**

```yaml
---
- name: Configure Stratis for development environment
  hosts: dev_servers # Target development servers
  become: true

  tasks:
    - name: Ensure stratisd package is installed
      ansible.builtin.package:
        name: stratisd
        state: present

    - name: Ensure stratisd service is enabled and started
      ansible.builtin.service:
        name: stratisd
        enabled: true
        state: started

    - name: Ensure Stratis pool 'dev_pool' exists on /dev/sdf
      community.general.stratis:
        state: present
        name: dev_pool
        devices: /dev/sdf

    - name: Ensure Stratis filesystem 'dev_home' exists in 'dev_pool'
      community.general.stratis:
        state: present
        pool: dev_pool
        filesystem: dev_home

    - name: Ensure mount point /home/devuser exists
      ansible.builtin.file:
        path: /home/devuser
        state: directory
        mode: '0755'
        owner: devuser # Assuming 'devuser' exists and needs ownership
        group: devuser

    - name: Mount /stratis/dev_pool/dev_home to /home/devuser persistently
      ansible.posix.mount:
        path: /home/devuser
        src: /stratis/dev_pool/dev_home
        fstype: xfs
        opts: defaults,x-systemd.requires=stratisd.service
        state: mounted
        fstab: /etc/fstab

    - name: Verify Stratis pool and filesystem status
      ansible.builtin.command: "{{ item }}"
      loop:
        - stratis pool list
        - stratis filesystem list dev_pool
        - df -h /home/devuser
      register: stratis_verification
      changed_when: false

    - name: Print Stratis verification results
      ansible.builtin.debug:
        var: stratis_verification.results
```

**Instructions:**
1.  Save the playbook as `stratis_setup.yml`.
2.  Ensure your `inventory.ini` file has a `[dev_servers]` group with your target host(s) and that `/dev/sdf` is an available, unformatted disk. Also, ensure a `devuser` exists on the target system, or adjust the `owner`/`group` in the `file` task.
3.  Run the playbook: `ansible-playbook -i inventory.ini stratis_setup.yml`
4.  After execution, SSH into your target host and run `sudo stratis pool list`, `sudo stratis filesystem list dev_pool`, `sudo df -h /home/devuser`, and `cat /etc/fstab` to confirm the Stratis setup.

#### Assessment idea
1.  **Question:** You are configuring a Stratis filesystem `data_fs` within a pool `data_pool` to be mounted at `/mnt/data`. You've created the pool and filesystem with Ansible. Which of the following `ansible.posix.mount` tasks correctly ensures this filesystem is mounted persistently and reliably after a reboot?
    a)
    ```yaml
    - name: Mount data_fs
      ansible.posix.mount:
        path: /mnt/data
        src: /stratis/data_pool/data_fs
        fstype: xfs
        opts: defaults
        state: mounted
        fstab: /etc/fstab
    ```
    b)
    ```yaml
    - name: Mount data_fs
      ansible.posix.mount:
        path: /mnt/data
        src: /stratis/data_pool/data_fs
        fstype: xfs
        opts: defaults,nofail
        state: mounted
        fstab: /etc/fstab
    ```
    c)
    ```yaml
    - name: Mount data_fs
      ansible.posix.mount:
        path: /mnt/data
        src: /stratis/data_pool/data_fs
        fstype: xfs
        opts: defaults,x-systemd.requires=stratisd.service
        state: mounted
        fstab: /etc/fstab
    ```
    d)
    ```yaml
    - name: Mount data_fs
      ansible.posix.mount:
        path: /mnt/data
        src: /dev/data_pool/data_fs
        fstype: xfs
        opts: defaults,x-systemd.requires=stratisd.service
        state: mounted
        fstab: /etc/fstab
    ```
    **Correct Answer:** c)
    **Explanation:** Option c) correctly uses the `x-systemd.requires=stratisd.service` option, which is crucial for Stratis filesystems to ensure the `stratisd` service is active before the mount attempt during boot. Option a) and b) lack this critical option, potentially leading to boot failures. Option d) uses an incorrect `src` path; Stratis filesystems are typically found under `/stratis/pool_name/filesystem_name`, not `/dev/`.

2.  **Question:** A system administrator needs to create a Stratis pool named `archive_pool` using two physical disks, `/dev/sdg` and `/dev/sdh`. Which Ansible `community.general.stratis` task correctly creates this pool?
    a)
    ```yaml
    - name: Create archive_pool
      community.general.stratis:
        state: present
        name: archive_pool
        device: /dev/sdg,/dev/sdh
    ```
    b)
    ```yaml
    - name: Create archive_pool
      community.general.stratis:
        state: present
        name: archive_pool
        devices: /dev/sdg /dev/sdh
    ```
    c)
    ```yaml
    - name: Create archive_pool
      community.general.stratis:
        state: present
        name: archive_pool
        devices: [ "/dev/sdg", "/dev/sdh" ]
    ```
    d)
    ```yaml
    - name: Create archive_pool
      community.general.stratis:
        state: present
        pool: archive_pool
        devices: [ "/dev/sdg", "/dev/sdh" ]
    ```
    **Correct Answer:** c)
    **Explanation:** The `devices` parameter of the `community.general.stratis` module expects a YAML list of block devices. Option c) correctly provides this list. Option a) uses a comma-separated string for `device`, which is incorrect. Option b) uses space-separated devices, which is also incorrect for a YAML list. Option d) incorrectly uses `pool` instead of `name` for the pool creation task.

#### AI generation note
Produce an 11-minute video tutorial focusing on Stratis. Begin with a high-level overview of Stratis's benefits (simplicity, thin provisioning, snapshots) compared to traditional LVM, using a simple comparison diagram. Then, transition to a live coding demonstration:
1.  Show how to install `stratisd` and enable/start the service.
2.  Write a playbook to create a Stratis pool (`dev_pool`) on `/dev/sdf`.
3.  Create a filesystem (`dev_home`) within `dev_pool`.
4.  Create the mount point `/home/devuser`.
5.  Mount the filesystem persistently, emphasizing `x-systemd.requires=stratisd.service`.
Interleave terminal commands (`stratis pool list`, `stratis filesystem list`, `df -h`) to verify each step. Include a visual overlay explaining thin provisioning. End with a mini-quiz asking about the key differences between Stratis and LVM.

---

### Chapter 4.6 — Managing Network File Systems (NFS/SMB) with Ansible

#### Learning objectives
*   Understand the fundamental concepts of Network File System (NFS) and Server Message Block (SMB/CIFS) for sharing files across a network.
*   Utilize Ansible to configure an NFS server, including exporting directories and managing firewall rules.
*   Automate the mounting of NFS shares on client systems, ensuring persistent access via `/etc/fstab`.
*   Implement basic SMB client configuration to mount Windows/Samba shares on Linux systems.
*   Address security considerations, common mistakes, and best practices when managing network file systems with Ansible.

#### Detailed lesson content
While local storage solutions like LVM, VDO, and Stratis are excellent for individual servers, many enterprise environments rely heavily on **Network File Systems (NFS)** and **Server Message Block (SMB)** for sharing data across multiple hosts. NFS is a widely used distributed file system protocol, primarily for Unix-like systems, enabling clients to access files over a network as if they were stored locally. SMB, often associated with Windows (where it's known as CIFS), provides similar functionality for sharing files, printers, and serial ports, and is commonly used to integrate Linux clients into Windows-centric networks via Samba. For an RHCE, automating the setup and management of both NFS and SMB clients and servers with Ansible is a critical skill.

Let's start with **NFS server configuration**. To share a directory via NFS, the server needs to have the `nfs-utils` package installed, the `nfs-server` service running, and the directory configured in the `/etc/exports` file. Ansible can automate all these steps.

First, ensure the necessary package and service are present:

```yaml
- name: Ensure nfs-utils package is installed
  ansible.builtin.package:
    name: nfs-utils
    state: present

- name: Ensure nfs-server service is enabled and started
  ansible.builtin.service:
    name: nfs-server
    enabled: true
    state: started
```

Next, create the directory you want to export and set appropriate permissions. This is crucial for security and functionality.

```yaml
- name: Ensure NFS export directory /srv/nfs/shared_data exists
  ansible.builtin.file:
    path: /srv/nfs/shared_data
    state: directory
    mode: '0755'
    owner: nobody # Often good practice for NFS exports
    group: nobody
```

Now, configure the `/etc/exports` file. The `ansible.builtin.lineinfile` or `ansible.builtin.blockinfile` modules are suitable for this. A common export might allow a specific subnet read/write access.

```yaml
- name: Add /srv/nfs/shared_data export to /etc/exports
  ansible.builtin.lineinfile:
    path: /etc/exports
    line: "/srv/nfs/shared_data 192.168.1.0/24(rw,sync,no_root_squash)"
    state: present
  notify: Reload NFS exports
```

The options `rw` (read/write), `sync` (writes are committed to disk before replying), and `no_root_squash` (root on the client is treated as root on the server) are common. `no_root_squash` is powerful but also a security risk, as it grants full root privileges to the client's root user on the exported directory. Use it with caution, typically only for trusted clients or specific scenarios like VM images. After modifying `/etc/exports`, you need to tell the NFS server to reload its configuration, which can be done with a handler.

```yaml
# In handlers/main.yml or at the end of the playbook
- name: Reload NFS exports
  ansible.builtin.command: exportfs -ra
  listen: Reload NFS exports # Matches the notify name
```

Finally, configure the firewall to allow NFS traffic. NFS uses several ports, including 2049 (NFS), 111 (rpcbind), and dynamic ports for services like `mountd` and `nlockmgr`. It's best to allow the `nfs` service through `firewalld`.

```yaml
- name: Allow NFS service through firewall
  ansible.posix.firewalld:
    service: nfs
    permanent: true
    state: enabled
    immediate: true # Apply rules immediately
```

For **NFS client configuration**, the client also needs `nfs-utils` installed. Then, you can mount the remote share. For persistent mounts, use `ansible.posix.mount` and `/etc/fstab`.

```yaml
- name: Ensure nfs-utils package is installed on client
  ansible.builtin.package:
    name: nfs-utils
    state: present

- name: Ensure NFS client mount point /mnt/nfs_data exists
  ansible.builtin.file:
    path: /mnt/nfs_data
    state: directory
    mode: '0755'

- name: Mount NFS share from nfsserver.example.com:/srv/nfs/shared_data
  ansible.posix.mount:
    path: /mnt/nfs_data
    src: nfsserver.example.com:/srv/nfs/shared_data
    fstype: nfs
    opts: defaults,_netdev # _netdev ensures it waits for network
    state: mounted
    fstab: /etc/fstab
```

The `_netdev` option in `fstab` is crucial for network mounts. It tells the system to wait until the network is up before attempting to mount the filesystem, preventing boot failures if the network isn't ready.

Now, let's briefly touch on **SMB client configuration**. To mount an SMB/CIFS share on a Linux client, you typically need the `cifs-utils` package.

```yaml
- name: Ensure cifs-utils package is installed
  ansible.builtin.package:
    name: cifs-utils
    state: present

- name: Ensure SMB client mount point /mnt/smb_share exists
  ansible.builtin.file:
    path: /mnt/smb_share
    state: directory
    mode: '0755'

- name: Mount SMB share from smbserver.example.com:/myshare
  ansible.posix.mount:
    path: /mnt/smb_share
    src: //smbserver.example.com/myshare
    fstype: cifs
    opts: "credentials=/etc/smb-credentials,uid=1000,gid=1000,_netdev" # Use credentials file for security
    state: mounted
    fstab: /etc/fstab
```

For SMB, it's highly recommended to use a credentials file (e.g., `/etc/smb-credentials`) to store the username and password, rather than embedding them directly in `fstab`. This file should have strict permissions (e.g., `0600`) to protect sensitive information.

```ini
username=myuser
password=mypassword
```

You can manage this file with Ansible's `ansible.builtin.template` or `ansible.builtin.copy` module, ensuring proper permissions.

```yaml
- name: Create SMB credentials file
  ansible.builtin.template:
    src: smb-credentials.j2 # Template file on control node
    dest: /etc/smb-credentials
    owner: root
    group: root
    mode: '0600'
  vars:
    smb_username: "myuser"
    smb_password: "mypassword"
```

Safety notes for network filesystems:
1.  **Security:** `no_root_squash` on NFS is a major security risk. Use it only when absolutely necessary and with trusted clients. For SMB, always use a credentials file with restricted permissions.
2.  **Firewall:** Ensure firewall rules are correctly configured on both server and client to allow necessary traffic.
3.  **Network Dependency:** Always use `_netdev` for network mounts in `fstab` to prevent boot issues.
4.  **SELinux:** SELinux can sometimes prevent NFS or SMB mounts. Ensure appropriate SELinux contexts are set on mount points and exported directories (e.g., `semanage fcontext -a -t nfs_t "/srv/nfs/shared_data(/.*)?"` and `restorecon -Rv /srv/nfs/shared_data`). Ansible's `ansible.posix.sefcontext` and `ansible.posix.selinux_permissive` modules can help manage this.

Automating network storage ensures consistent, reliable access to shared resources across your infrastructure, which is fundamental for many applications and services.

#### Key concepts
*   **Network File System (NFS):** A distributed file system protocol allowing clients to access files over a network as if they were local.
*   **Server Message Block (SMB/CIFS):** A network file sharing protocol primarily used by Windows, also supported on Linux via Samba.
*   **`/etc/exports`:** The configuration file on an NFS server that defines which directories are shared and with what permissions.
*   **`nfs-utils`:** The package containing NFS server and client utilities.
*   **`exportfs -ra`:** Command to re-export all NFS shares after changes to `/etc/exports`.
*   **`no_root_squash`:** An NFS export option that treats the client's root user as the server's root user (high security risk).
*   **`_netdev`:** An `fstab` mount option for network filesystems, ensuring the network is up before mounting.
*   **`cifs-utils`:** The package containing SMB/CIFS client utilities.
*   **Credentials file:** A file (e.g., `/etc/smb-credentials`) used to store SMB username and password securely, separate from `fstab`.
*   **SELinux Context:** Security labels applied to files and directories by SELinux, which must be correct for network mounts to function.

#### Hands-on activity
**Scenario:** You need to configure an NFS server and an NFS client.
**Server Task:** Export `/data/web_content` from `nfsserver.example.com` to the `webservers` subnet (`192.168.1.0/24`) with read-write access and root squashing.
**Client Task:** Mount this NFS share on `webclient.example.com` to `/var/www/html` persistently.

**Playbook Template (`nfs_config.yml`):**

```yaml
---
- name: Configure NFS Server
  hosts: nfsserver
  become: true

  tasks:
    - name: Ensure nfs-utils package is installed
      ansible.builtin.package:
        name: nfs-utils
        state: present

    - name: Ensure nfs-server service is enabled and started
      ansible.builtin.service:
        name: nfs-server
        enabled: true
        state: started

    - name: Ensure NFS export directory /data/web_content exists
      ansible.builtin.file:
        path: /data/web_content
        state: directory
        mode: '0755'
        owner: nobody
        group: nobody

    - name: Add /data/web_content export to /etc/exports
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/data/web_content 192.168.1.0/24(rw,sync,root_squash)"
        state: present
      notify: Reload NFS exports

    - name: Allow NFS service through firewall
      ansible.posix.firewalld:
        service: nfs
        permanent: true
        state: enabled
        immediate: true

  handlers:
    - name: Reload NFS exports
      ansible.builtin.command: exportfs -ra
      listen: Reload NFS exports

- name: Configure NFS Client
  hosts: webclients
  become: true

  tasks:
    - name: Ensure nfs-utils package is installed on client
      ansible.builtin.package:
        name: nfs-utils
        state: present

    - name: Ensure NFS client mount point /var/www/html exists
      ansible.builtin.file:
        path: /var/www/html
        state: directory
        mode: '0755'

    - name: Mount NFS share from nfsserver.example.com:/data/web_content
      ansible.posix.mount:
        path: /var/www/html
        src: nfsserver.example.com:/data/web_content
        fstype: nfs
        opts: defaults,_netdev
        state: mounted
        fstab: /etc/fstab

    - name: Verify NFS mount on client
      ansible.builtin.command: df -h /var/www/html
      register: df_output
      changed_when: false

    - name: Print NFS mount status
      ansible.builtin.debug:
        var: df_output.stdout_lines
```

**Instructions:**
1.  Save the playbook as `nfs_config.yml`.
2.  Ensure your `inventory.ini` file has `[nfsserver]` and `[webclients]` groups, with `nfsserver.example.com` and `webclient.example.com` (or their IP addresses) defined.
3.  Ensure `nfsserver.example.com` has an IP in the `192.168.1.0/24` subnet or adjust the export rule accordingly.
4.  Run the playbook: `ansible-playbook -i inventory.ini nfs_config.yml`
5.  After execution, SSH into `nfsserver.example.com` and run `sudo exportfs -v` to verify exports. SSH into `webclient.example.com` and run `sudo df -h /var/www/html` to verify the mount. Try creating a file on the client in `/var/www/html` to test write access.

#### Assessment idea
1.  **Question:** An administrator is configuring an NFS server to export `/shared/backups` to clients in the `10.0.0.0/24` network. The clients should have read-only access, and root users on the client should not have root privileges on the server. Which Ansible `ansible.builtin.lineinfile` task correctly adds this export to `/etc/exports`?
    a)
    ```yaml
    - name: Add backup export
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/shared/backups 10.0.0.0/24(rw,no_root_squash)"
        state: present
    ```
    b)
    ```yaml
    - name: Add backup export
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/shared/backups 10.0.0.0/24(ro,root_squash)"
        state: present
    ```
    c)
    ```yaml
    - name: Add backup export
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/shared/backups 10.0.0.0/24(ro,no_root_squash)"
        state: present
    ```
    d)
    ```yaml
    - name: Add backup export
      ansible.builtin.lineinfile:
        path: /etc/exports
        line: "/shared/backups 10.0.0.0/24(rw,root_squash)"
        state: present
    ```
    **Correct Answer:** b)
    **Explanation:** The requirement is read-only access (`ro`) and root squashing (`root_squash`). Option b) correctly specifies both of these options. Option a) provides read-write and no root squashing. Option c) provides read-only but no root squashing. Option d) provides read-write and root squashing.

2.  **Question:** You are setting up an NFS client to mount `nfsserver.example.com:/data/exports` to `/mnt/nfs_data`. You've installed `nfs-utils` and created the mount point. Which `ansible.posix.mount` task ensures this mount is persistent and handles potential network unavailability during boot?
    a)
    ```yaml
    - name: Mount NFS share
      ansible.posix.mount:
        path: /mnt/nfs_data
        src: nfsserver.example.com:/data/exports
        fstype: nfs
        opts: defaults
        state: mounted
        fstab: /etc/fstab
    ```
    b)
    ```yaml
    - name: Mount NFS share
      ansible.posix.mount:
        path: /mnt/nfs_data
        src: nfsserver.example.com:/data/exports
        fstype: nfs
        opts: defaults,nofail
        state: mounted
        fstab: /etc/fstab
    ```
    c)
    ```yaml
    - name: Mount NFS share
      ansible.posix.mount:
        path: /mnt/nfs_data
        src: nfsserver.example.com:/data/exports
        fstype: nfs
        opts: defaults,_netdev
        state: mounted
        fstab: /etc/fstab
    ```
    d)
    ```yaml
    - name: Mount NFS share
      ansible.posix.mount:
        path: /mnt/nfs_data
        src: nfsserver.example.com:/data/exports
        fstype: nfs
        opts: defaults,nofail,_netdev
        state: mounted
        fstab: /etc/fstab
    ```
    **Correct Answer:** d)
    **Explanation:** For network mounts, `_netdev` is essential to ensure the system waits for the network to be up. `nofail` is also highly recommended for network mounts to prevent the system from entering emergency mode if the NFS server is temporarily unreachable during boot. Option d) includes both `defaults`, `nofail`, and `_netdev`, providing the most robust persistent mount configuration. Option a) lacks both `nofail` and `_netdev`. Option b) lacks `_netdev`. Option c) lacks `nofail`.

#### AI generation note
Create a 15-minute mixed-format lesson. Start with a conceptual diagram explaining NFS client-server interaction and then SMB. Transition to a live coding session:
1.  **NFS Server:** Write a playbook to install `nfs-utils`, start `nfs-server`, create `/data/web_content`, add an export to `/etc/exports` (e.g., `192.168.1.0/24(rw,sync,root_squash)`), and configure `firewalld`. Show `exportfs -v` and `firewall-cmd --list-all` output.
2.  **NFS Client:** Write a playbook to install `nfs-utils`, create `/var/www/html`, and mount the NFS share persistently using `defaults,_netdev` options. Show `df -h` and `cat /etc/fstab`.
3.  **SMB Client (briefly):** Show a quick example of a `mount` task for an SMB share using a credentials file, explaining the `cifs-utils` package and the security implications of the credentials file.
Use a split-screen view for code and terminal output. Emphasize security considerations for `no_root_squash` and credentials files. Include a reflection prompt on the trade-offs between NFS and SMB for different use cases.

---

## Module 5: Network Configuration with Ansible

**Module Goal:** Master the use of Ansible for automating complex network configurations on Red Hat Enterprise Linux systems, ensuring reliable and scalable network management.

### Chapter 5.1 — Understanding Network Interfaces with Ansible

#### Learning objectives
*   Identify and differentiate between physical network devices and NetworkManager connection profiles on Red Hat Enterprise Linux.
*   Utilize `nmcli` and `ip` commands to inspect current network interface configurations.
*   Explain how Ansible gathers network-related facts and interpret relevant fact variables.
*   Introduce the `community.general.nmcli` module for basic network interface management.
*   Recognize common pitfalls when managing network interfaces and apply best practices for safe automation.

#### Detailed lesson content
Managing network interfaces is a foundational skill for any system administrator, and automating this process with Ansible is a core component of the RHCE certification. Red Hat Enterprise Linux (RHEL) primarily uses `NetworkManager` for managing network connections. `NetworkManager` is a dynamic network configuration daemon that simplifies the process of configuring network interfaces, handling everything from wired and wireless connections to VPNs and mobile broadband. While `NetworkManager` provides a robust framework, administrators often interact with it through command-line tools like `nmcli` (NetworkManager Command Line Interface) or graphical tools. For lower-level inspection and manipulation, the `ip` command (part of the `iproute2` suite) remains invaluable, offering detailed insights into network devices, routing tables, and more.

When we talk about network interfaces in the context of `NetworkManager`, it's crucial to distinguish between a *network device* (like `eth0` or `enp0s3`) and a *connection profile*. A network device is the physical or virtual hardware interface itself. A connection profile, on the other hand, is a set of configurations (IP address, DNS servers, gateway, etc.) that `NetworkManager` applies to a specific device. You can have multiple connection profiles for a single device, allowing you to switch configurations easily (e.g., a "work" profile and a "home" profile for a laptop's Wi-Fi adapter). Ansible, through its modules, will typically interact with these connection profiles.

Before making any changes, it's always good practice to understand the current state of your network. The `ip` command is excellent for this. For instance, `ip a` (short for `ip addr show`) will display all network interfaces and their assigned IP addresses, broadcast addresses, and states. `ip route show` will show the routing table, indicating how traffic leaves your system. For `NetworkManager`-specific information, `nmcli` is your go-to tool. `nmcli device status` shows the state of your network devices, while `nmcli connection show` lists all defined connection profiles, their UUIDs, and which device they are currently active on. Understanding the output of these commands is vital for troubleshooting and verifying Ansible's actions.

Ansible's power lies in its ability to gather facts about remote systems. By default, most Ansible playbooks will execute the `ansible.builtin.setup` module (or `gather_facts: yes`) at the beginning, collecting a vast amount of information about the target host. This includes detailed network facts, which are stored in variables like `ansible_facts.interfaces`, `ansible_facts.default_ipv4`, and `ansible_facts.network_resources`. For example, `ansible_facts.interfaces` will list all active network interfaces, and for each, you can find its MAC address, IP addresses, MTU, and more. `ansible_facts.default_ipv4` provides information about the primary IPv4 address and gateway. These facts are incredibly useful for creating conditional logic in your playbooks or simply for reporting and auditing purposes. You can inspect these facts using the `ansible.builtin.debug` module with `msg="{{ ansible_facts }}"` or by filtering for specific network facts.

When it comes to automating network configuration, Ansible offers several modules. For `NetworkManager`-managed systems, the `community.general.nmcli` module is the primary tool. This module allows you to manage network connections, devices, and generic `NetworkManager` settings. It's idempotent, meaning you can run the same playbook multiple times, and it will only make changes if the desired state is not already met. This is a critical feature for reliable automation. The `nmcli` module can create, modify, delete, activate, and deactivate connection profiles. For instance, you can use it to ensure a specific connection profile exists on a given device, configure its IPv4 settings, or set its DNS servers.

A common mistake newcomers make is confusing the network *device name* (e.g., `enp0s3`) with the *connection name* (e.g., `System enp0s3` or `my-static-connection`). While `NetworkManager` often creates a default connection profile with a name similar to the device, they are distinct entities. When using `nmcli` or the `community.general.nmcli` module, you'll often specify the `conn_name` parameter, which refers to the connection profile, not the device itself. Another pitfall is not understanding that `NetworkManager` dynamically applies settings. If you manually edit `/etc/sysconfig/network-scripts/ifcfg-eth0` (an older, less preferred method for `NetworkManager` systems) without telling `NetworkManager` to reload or reactivate the connection, your changes might not take effect or might be overwritten. Always use `nmcli` or the Ansible `nmcli` module for consistent management.

Safety is paramount when automating network changes, especially on remote systems. A misconfigured network interface can lead to loss of connectivity, potentially locking you out of your server. Always test your Ansible playbooks in a controlled lab environment before deploying them to production. When working remotely, consider using a console connection or out-of-band management (like IPMI or iLO) as a fallback. Ensure your playbooks are designed to be idempotent and that they include verification steps. For example, after configuring an IP address, you might include a task to `ping` a known host or check the interface status to confirm the change was successful. This proactive approach minimizes the risk of network outages and ensures smooth, automated network management.

#### Key concepts
*   **NetworkManager:** The primary daemon on RHEL for managing network connections and configurations.
*   **`nmcli`:** NetworkManager Command Line Interface, used for interacting with NetworkManager from the terminal.
*   **`ip` command:** A low-level command-line utility for displaying and manipulating routing, network devices, interfaces, and tunnels.
*   **Network Device:** The physical or virtual hardware interface (e.g., `enp0s3`, `eth0`).
*   **Connection Profile:** A named set of network configurations (IP, DNS, gateway) managed by NetworkManager and applied to a device.
*   **Ansible Facts:** Information gathered by Ansible about target hosts, including detailed network configurations (`ansible_facts.interfaces`, `ansible_facts.default_ipv4`).
*   **`community.general.nmcli` module:** An Ansible module specifically designed for managing NetworkManager connections and devices.
*   **Idempotency:** The property of an operation that produces the same result regardless of how many times it is executed. Ansible modules are designed to be idempotent.

#### Hands-on activity
**Objective:** Gather network facts from a target host and display active network connections using Ansible.

1.  **Create an inventory file** (e.g., `inventory.ini`) with your target RHEL host(s).
    ```ini
    [webservers]
    server1 ansible_host=192.168.1.10
    ```
    *Replace `192.168.1.10` with your actual target host IP.*

2.  **Create a playbook** named `network_info.yml`:
    ```yaml
    ---
    - name: Gather and display network information
      hosts: webservers
      become: yes
      gather_facts: yes # This is usually true by default, but explicitly stating it is good practice

      tasks:
        - name: Display all gathered network facts
          ansible.builtin.debug:
            var: ansible_facts.network_resources

        - name: List active NetworkManager connections
          community.general.nmcli:
            command: connection show --active
          register: active_connections

        - name: Display active connections output
          ansible.builtin.debug:
            var: active_connections.stdout_lines
    ```

3.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini network_info.yml
    ```

4.  **Observe the output:** You should see a detailed dump of `ansible_facts.network_resources` which includes information about interfaces, their IP addresses, MAC addresses, and more. Following that, you'll see a list of active NetworkManager connections as parsed from the `nmcli connection show --active` command.

#### Assessment idea
1.  **Question:** A system administrator needs to quickly identify the primary IPv4 address and default gateway of a remote RHEL server using Ansible. Which Ansible fact variable would provide this information most directly and efficiently?
    *   A) `ansible_facts.interfaces`
    *   B) `ansible_facts.default_ipv4`
    *   C) `ansible_facts.network_resources`
    *   D) `ansible_facts.all_ipv4_addresses`

    **Correct Answer:** B) `ansible_facts.default_ipv4`
    **Explanation:** While `ansible_facts.interfaces` and `ansible_facts.network_resources` contain comprehensive network details, `ansible_facts.default_ipv4` is specifically designed to provide the primary IPv4 address, netmask, and default gateway for the system, making it the most direct source for this specific information.

2.  **Question:** You observe an RHEL server with a network device named `enp1s0`. When you run `nmcli connection show`, you see a connection profile named `Wired connection 1` associated with `enp1s0`. If you want to modify the IP address settings for this interface using the `community.general.nmcli` Ansible module, which parameter would you use to specify which connection to modify?
    *   A) `device`
    *   B) `interface`
    *   C) `conn_name`
    *   D) `profile_id`

    **Correct Answer:** C) `conn_name`
    **Explanation:** The `community.general.nmcli` module operates on NetworkManager connection profiles. The `conn_name` parameter is used to specify the name of the connection profile (e.g., `Wired connection 1`) that you intend to modify, create, or delete, rather than the physical device name.

#### AI generation note
Create a 12-minute interactive video tutorial. Start with a split-screen view: left side showing a terminal executing `ip a` and `nmcli connection show` on a RHEL VM, right side showing an Ansible playbook being written. Demonstrate how `gather_facts` works by debugging `ansible_facts.network_resources`. Then, show a simple Ansible playbook using `community.general.nmcli` to list connections. Include visual overlays explaining the difference between device names and connection names. The interactive element should be a prompt for the learner to identify a specific piece of network information (e.g., the MAC address of `enp0s3`) from the displayed `ansible_facts` output. Ensure captions and high-contrast visuals.

### Chapter 5.2 — Configuring Static IP Addresses

#### Learning objectives
*   Differentiate between static and dynamic IP address configurations and their use cases.
*   Automate the configuration of static IPv4 addresses, netmasks, gateways, and DNS servers using the `community.general.nmcli` Ansible module.
*   Understand the idempotency of Ansible network configuration tasks and its importance.
*   Identify and troubleshoot common issues related to static IP configuration, such as incorrect CIDR notation or DNS resolution problems.
*   Implement best practices for ensuring network connectivity and remote access during IP address changes.

#### Detailed lesson content
Configuring static IP addresses is a fundamental task in server administration. Unlike dynamic IP addresses, which are assigned automatically by a DHCP server, a static IP remains constant, making it ideal for servers, network devices, and any system that needs a consistent, predictable address for services or remote access. For RHEL systems, `NetworkManager` is the preferred tool for managing these configurations, and Ansible provides a powerful, idempotent way to automate this.

To configure a static IP address using Ansible, the `community.general.nmcli` module is your primary interface. This module allows you to manipulate NetworkManager connection profiles. When setting a static IP, you'll typically specify the connection name (`conn_name`), the IPv4 address (`ip4`), the gateway (`gw4`), and DNS servers (`dns4`). It's crucial to provide the IP address in CIDR (Classless Inter-Domain Routing) notation, which combines the IP address and the subnet mask into a single value (e.g., `192.168.1.10/24`). The `/24` indicates that the first 24 bits of the IP address are used for the network portion, corresponding to a subnet mask of `255.255.255.0`.

Let's look at a practical example. Suppose you want to configure a static IP of `192.168.1.100` with a subnet mask of `255.255.255.0`, a gateway of `192.168.1.1`, and DNS servers `8.8.8.8` and `8.8.4.4` for a connection profile named `my-static-eth0` on device `eth0`. Your Ansible task would look something like this:

```yaml
- name: Configure static IP for my-static-eth0
  community.general.nmcli:
    conn_name: my-static-eth0
    ifname: eth0
    type: ethernet
    ip4: 192.168.1.100/24
    gw4: 192.168.1.1
    dns4:
      - 8.8.8.8
      - 8.8.4.4
    state: present
    autoconnect: yes
    # Ensure the connection is activated after configuration
    # This is important for changes to take effect immediately
    # activate: yes
```

Notice the `state: present` and `autoconnect: yes` parameters. `state: present` ensures that the connection profile exists and is configured as specified. If it doesn't exist, it will be created. If it exists but its settings differ, it will be modified. This is the essence of Ansible's idempotency – you define the desired end-state, and Ansible works to achieve it without unnecessary changes. `autoconnect: yes` ensures the connection attempts to activate automatically on boot. While the `nmcli` module can activate the connection directly, it's often safer to separate the configuration from the activation, or rely on `NetworkManager` to handle activation on boot or device availability. For immediate activation, you might add a separate task using `nmcli: conn_name: my-static-eth0 state: activated`.

It's worth noting that while `NetworkManager` is the primary method, older RHEL systems or specific configurations might still rely on the traditional `ifcfg` files located in `/etc/sysconfig/network-scripts/`. While `NetworkManager` generally manages these files, you *could* use the `ansible.builtin.template` module to deploy custom `ifcfg` files. However, this approach is less flexible and more prone to conflicts with `NetworkManager`'s dynamic capabilities. For RHCE, understanding `nmcli` and the `community.general.nmcli` module is paramount.

Common mistakes when configuring static IPs include incorrect CIDR notation (e.g., `/32` for a network, which is a host address), specifying an unreachable gateway, or providing invalid DNS server addresses. An incorrect gateway will prevent your system from reaching networks outside its local subnet, while bad DNS servers will lead to name resolution failures, making it impossible to access resources by hostname. Always double-check these values. Another common issue is forgetting to restart or reactivate the network connection after making changes. While Ansible's `nmcli` module often handles this implicitly or can be explicitly told to activate, if you were making manual changes, a `nmcli connection up <conn_name>` or `systemctl restart NetworkManager` would be necessary.

Safety is paramount during network configuration. Changing a server's IP address, especially remotely, carries the risk of losing connectivity. Before applying any changes, ensure you have a backup plan. This might involve having console access (e.g., via a hypervisor or IPMI), or configuring a temporary, secondary IP address that you can fall back to if the primary configuration fails. When testing, always use a non-critical test environment first. After applying the changes with Ansible, include verification steps in your playbook. For example, use the `ansible.builtin.ping` module to test connectivity to the gateway or a known external IP address, or use `ansible.builtin.command: ip a show dev eth0` to verify the IP address has been applied correctly. This proactive validation helps confirm successful configuration and minimizes downtime.

```yaml
# Example ifcfg-eth0 file content for reference (not recommended for Ansible automation with NetworkManager)
# TYPE="Ethernet"
# PROXY_METHOD="none"
# BROWSER_ONLY="no"
# BOOTPROTO="none"
# DEFROUTE="yes"
# IPV4_FAILURE_FATAL="no"
# IPV6INIT="yes"
# IPV6_AUTOCONF="yes"
# IPV6_DEFROUTE="yes"
# IPV6_FAILURE_FATAL="no"
# IPV6_ADDR_GEN_MODE="stable-privacy"
# NAME="eth0"
# UUID="<some-uuid>"
# DEVICE="eth0"
# ONBOOT="yes"
# IPADDR="192.168.1.100"
# PREFIX="24"
# GATEWAY="192.168.1.1"
# DNS1="8.8.8.8"
# DNS2="8.8.4.4"
```
The above `ifcfg` file content is provided for historical context and understanding, but the `community.general.nmcli` module is the modern and preferred Ansible approach for RHEL network configuration.

#### Key concepts
*   **Static IP Address:** A manually assigned, permanent IP address for a network interface, ideal for servers and network devices.
*   **Dynamic IP Address:** An IP address automatically assigned by a DHCP server, typically for client devices.
*   **CIDR (Classless Inter-Domain Routing):** A method for specifying IP addresses and their associated network masks (e.g., `192.168.1.100/24`).
*   **Gateway:** The IP address of the router that connects a local network to other networks (e.g., the internet).
*   **DNS Servers:** Servers that translate human-readable domain names (e.g., `google.com`) into IP addresses.
*   **`community.general.nmcli` module:** The Ansible module used to configure NetworkManager connection profiles, including static IP settings.
*   **`state: present`:** An Ansible parameter ensuring the desired configuration exists and is applied.
*   **`autoconnect: yes`:** An `nmcli` connection parameter that ensures the connection activates automatically when the device becomes available.

#### Hands-on activity
**Objective:** Create an Ansible playbook to configure a static IPv4 address, gateway, and DNS servers for a specific network interface on a target RHEL host.

1.  **Identify a test interface:** On your RHEL target host, identify a network interface that you can safely reconfigure (e.g., `eth0` or `enp0s3` in a lab environment). Ensure you have console access or a fallback network connection.

2.  **Create a playbook** named `configure_static_ip.yml`:
    ```yaml
    ---
    - name: Configure static IP address on a network interface
      hosts: webservers # Or your specific host group
      become: yes

      vars:
        interface_name: eth0 # Replace with your target interface name
        connection_profile_name: my-static-conn
        static_ip: 192.168.1.200/24 # Use an IP appropriate for your lab network
        gateway_ip: 192.168.1.1    # Use your lab gateway IP
        dns_servers:
          - 8.8.8.8
          - 8.8.4.4

      tasks:
        - name: Ensure the network connection is down before making changes (optional but safer)
          community.general.nmcli:
            conn_name: "{{ connection_profile_name }}"
            state: absent
          ignore_errors: yes # Ignore if connection doesn't exist

        - name: Create or modify the static IP connection profile
          community.general.nmcli:
            conn_name: "{{ connection_profile_name }}"
            ifname: "{{ interface_name }}"
            type: ethernet
            ip4: "{{ static_ip }}"
            gw4: "{{ gateway_ip }}"
            dns4: "{{ dns_servers }}"
            state: present
            autoconnect: yes
            # ip4_method: manual # This is implied when ip4 is set, but can be explicit

        - name: Activate the new static IP connection
          community.general.nmcli:
            conn_name: "{{ connection_profile_name }}"
            state: activated

        - name: Verify the IP address configuration
          ansible.builtin.command: "ip -4 addr show dev {{ interface_name }}"
          register: ip_output
          changed_when: false

        - name: Display current IP configuration
          ansible.builtin.debug:
            var: ip_output.stdout_lines

        - name: Verify network connectivity to gateway
          ansible.builtin.ping:
            data: "{{ gateway_ip }}"
          delegate_to: localhost # Run ping from the Ansible controller to the target's gateway
          when: gateway_ip is defined and gateway_ip != ''

        - name: Verify DNS resolution (e.g., ping google.com)
          ansible.builtin.command: "ping -c 3 google.com"
          register: ping_google_output
          changed_when: false
          ignore_errors: yes # Ping might fail if DNS is still propagating or firewall blocks ICMP

        - name: Display ping google.com output
          ansible.builtin.debug:
            var: ping_google_output.stdout_lines
    ```

3.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini configure_static_ip.yml
    ```
4.  **Verify:** After running, check the `ip_output` and `ping_google_output` in the Ansible output. You can also log into the target host and run `ip a show dev <interface_name>` and `nmcli connection show <connection_profile_name>` to confirm.

#### Assessment idea
1.  **Question:** You are configuring a RHEL server's `eth0` interface with a static IP address `172.16.5.10` and a subnet mask of `255.255.255.128`. Which of the following `ip4` values for the `community.general.nmcli` module is correct?
    *   A) `172.16.5.10/255.255.255.128`
    *   B) `172.16.5.10/25`
    *   C) `172.16.5.10`
    *   D) `ip4_address: 172.16.5.10, netmask: 255.255.255.128`

    **Correct Answer:** B) `172.16.5.10/25`
    **Explanation:** The `ip4` parameter in the `community.general.nmcli` module expects the IP address in CIDR notation. A subnet mask of `255.255.255.128` corresponds to a `/25` prefix length (128 = 2^7, so 32 - 7 = 25 bits for the network portion).

2.  **Question:** After running an Ansible playbook that configures a static IP address, you lose SSH connectivity to the remote server. What is the most likely immediate cause of this issue, assuming the playbook syntax was correct?
    *   A) The `state: present` parameter was omitted.
    *   B) The `autoconnect: yes` parameter was set.
    *   C) An incorrect `gw4` (gateway IP) was provided, or the connection was not properly activated.
    *   D) The `type: ethernet` parameter was incorrect.

    **Correct Answer:** C) An incorrect `gw4` (gateway IP) was provided, or the connection was not properly activated.
    **Explanation:** If the `gw4` (gateway IP) is incorrect, the server might not be able to route traffic outside its local subnet, including back to your Ansible controller. Similarly, if the new connection profile wasn't activated (either explicitly or implicitly by NetworkManager), the old configuration might still be in effect, or the interface might be down, leading to loss of connectivity. `state: present` ensures the configuration exists, `autoconnect: yes` is for boot-time activation, and `type: ethernet` is usually a static value, none of which directly cause immediate connectivity loss after a successful configuration application.

#### AI generation note
Create a 15-minute live coding video. Begin by showing a RHEL VM with a DHCP-assigned IP. Then, write an Ansible playbook step-by-step to configure a static IP address, gateway, and two DNS servers using the `community.general.nmcli` module. Demonstrate the playbook execution. Use a split-screen view: Ansible playbook on the left, terminal output (showing `nmcli connection show`, `ip a`, and `ping` commands) on the right. Include a segment on common mistakes like incorrect CIDR notation and how to verify changes. The interactive element will be a short coding challenge where learners modify the playbook to change the DNS servers, followed by a reflection prompt on the importance of idempotency in network configuration.

### Chapter 5.3 — Managing Network Bonds and Teams

#### Learning objectives
*   Explain the concepts of network bonding and network teaming, including their primary use cases and differences.
*   Describe various bonding modes (e.g., active-backup, balance-rr, 802.3ad) and their implications.
*   Automate the creation and configuration of network bond and team interfaces using the `community.general.nmcli` Ansible module.
*   Add and manage slave interfaces to bond and team master connections.
*   Understand common issues and safety considerations when implementing network bonding or teaming configurations.

#### Detailed lesson content
As systems become more critical and network demands increase, ensuring network redundancy and increased bandwidth becomes essential. On Red Hat Enterprise Linux, two primary technologies address these needs: network bonding and network teaming. Both involve aggregating multiple physical network interfaces into a single logical interface, but they differ in their underlying implementation and flexibility. Understanding how to automate these configurations with Ansible is a key RHCE skill.

**Network bonding** (also known as link aggregation or NIC teaming in some contexts) combines two or more physical network interfaces (slaves) into a single logical interface (master). The primary goals are fault tolerance (if one physical link fails, traffic continues over the others) and load balancing (distributing traffic across multiple links to increase aggregate throughput). Bonding is managed by the kernel's bonding driver. There are several bonding modes, each offering different behaviors:
*   **`mode=0` (balance-rr / Round-robin):** Transmits packets in sequential order from the first available slave to the last. Provides load balancing and fault tolerance.
*   **`mode=1` (active-backup):** Only one slave is active at a time. Another slave becomes active only if the active one fails. Provides fault tolerance. This is a very common and safe mode.
*   **`mode=4` (802.3ad / LACP):** Creates an aggregation group that shares the same speed and duplex settings. Requires a switch that supports LACP (Link Aggregation Control Protocol). Provides load balancing and fault tolerance. This mode offers the best performance and redundancy for compatible hardware.

**Network teaming** is a more modern alternative to bonding, managed by the `teamd` daemon. It offers greater flexibility and extensibility compared to bonding. `teamd` allows for runtime configuration changes and supports various runners (equivalent to bonding modes) that define how traffic is distributed and how failover occurs. Teaming can be more sophisticated in its failure detection and recovery. For instance, it can use more advanced link monitoring mechanisms.

Automating bond and team creation with Ansible primarily uses the `community.general.nmcli` module, as both are managed by `NetworkManager`. The process involves two main steps:
1.  **Create the master bond or team interface:** Define the logical interface, its type (`bond` or `team`), and its specific settings (like bonding mode or team runner).
2.  **Add slave interfaces:** Associate the physical network interfaces with the master bond or team.

Let's illustrate with an Ansible playbook for creating an active-backup bond:

```yaml
---
- name: Configure Network Bonding (Active-Backup)
  hosts: webservers
  become: yes

  vars:
    bond_name: bond0
    bond_mode: active-backup # mode=1
    slave_interfaces:
      - enp0s8 # Replace with your actual slave interface names
      - enp0s9
    bond_ip: 192.168.2.10/24
    bond_gw: 192.168.2.1
    bond_dns:
      - 8.8.8.8

  tasks:
    - name: Ensure bond master connection exists and is configured
      community.general.nmcli:
        conn_name: "{{ bond_name }}"
        type: bond
        ifname: "{{ bond_name }}"
        ip4: "{{ bond_ip }}"
        gw4: "{{ bond_gw }}"
        dns4: "{{ bond_dns }}"
        mode: "{{ bond_mode }}"
        state: present
        autoconnect: yes

    - name: Add slave interfaces to the bond
      loop: "{{ slave_interfaces }}"
      community.general.nmcli:
        conn_name: "{{ item }}-slave" # Create a unique connection name for each slave
        ifname: "{{ item }}"
        type: ethernet
        master: "{{ bond_name }}" # Associate with the bond master
        state: present
        autoconnect: yes
        # Ensure slave connections are brought up after being added to the bond
        # This will activate the bond interface as well
        # activate: yes

    - name: Ensure bond master connection is activated
      community.general.nmcli:
        conn_name: "{{ bond_name }}"
        state: activated

    - name: Verify bond status
      ansible.builtin.command: "cat /proc/net/bonding/{{ bond_name }}"
      register: bond_status
      changed_when: false

    - name: Display bond status
      ansible.builtin.debug:
        var: bond_status.stdout_lines
```

For network teaming, the structure is very similar, but you'd use `type: team` and specify a `runner` instead of `mode`. For example, `runner: activebackup`.

```yaml
    - name: Ensure team master connection exists and is configured
      community.general.nmcli:
        conn_name: "{{ team_name }}"
        type: team
        ifname: "{{ team_name }}"
        ip4: "{{ team_ip }}"
        gw4: "{{ team_gw }}"
        dns4: "{{ team_dns }}"
        runner: activebackup # Specify the team runner
        state: present
        autoconnect: yes
```

Common mistakes include incorrect bonding modes (e.g., using `802.3ad` without a compatible switch), forgetting to assign IP addresses to the *bond/team master* (not the slaves), or not bringing up the master connection after configuration. When configuring slave interfaces, ensure they are set to `master: <bond_name>` and do not have their own IP configurations, as the master handles the IP.

Safety is paramount when configuring bonding or teaming. Misconfigurations can lead to complete network outages. Always test these configurations in a lab environment first. When deploying to production, ensure you have out-of-band management access (like a console or IPMI) as a fallback. It's also critical to ensure that the physical switch ports connected to your bonded or teamed interfaces are configured correctly (e.g., for LACP if using `802.3ad`). If the switch is not configured for LACP, `802.3ad` bonding will fail. Always verify the status using commands like `cat /proc/net/bonding/bond0` for bonding or `teamdctl team0 state` for teaming after applying changes. Ansible's `ansible.builtin.command` module can be used to run these verification commands and `ansible.builtin.debug` to display their output, providing critical feedback on the success of your automation.

#### Key concepts
*   **Network Bonding (Link Aggregation):** Combining multiple physical network interfaces into a single logical interface for redundancy and/or increased bandwidth.
*   **Network Teaming:** A more flexible and modern alternative to bonding, also aggregating multiple interfaces into one, managed by the `teamd` daemon.
*   **Bonding Modes:** Different algorithms for how traffic is distributed and how failover occurs in a bond (e.g., `active-backup`, `balance-rr`, `802.3ad`).
*   **`802.3ad` (LACP):** A bonding mode requiring switch support for Link Aggregation Control Protocol, offering advanced load balancing and fault tolerance.
*   **`teamd`:** The daemon responsible for managing network teams on RHEL.
*   **Runner:** The equivalent of a bonding mode for network teaming, defining its operational behavior.
*   **Master Interface:** The logical bond or team interface that holds the IP configuration.
*   **Slave Interface:** The physical network interfaces that are members of a bond or team.
*   **`community.general.nmcli` module:** The Ansible module used to configure both bond and team master and slave connections.

#### Hands-on activity
**Objective:** Create an Ansible playbook to configure an `active-backup` network bond with two slave interfaces on a target RHEL host.

1.  **Identify two unused network interfaces** on your RHEL target host (e.g., `enp0s8`, `enp0s9`). Ensure they are not currently configured or in use. You can check with `ip a` and `nmcli device status`.

2.  **Create a playbook** named `configure_network_bond.yml`:
    ```yaml
    ---
    - name: Configure Network Bonding (Active-Backup)
      hosts: webservers # Or your specific host group
      become: yes

      vars:
        bond_name: bond0
        bond_mode: active-backup # mode=1
        slave_interfaces:
          - enp0s8 # IMPORTANT: Replace with your actual unused interface names
          - enp0s9
        bond_ip: 192.168.2.10/24 # Use an IP appropriate for your lab network
        bond_gw: 192.168.2.1    # Use your lab gateway IP
        bond_dns:
          - 8.8.8.8

      tasks:
        - name: Ensure slave connections are absent if they exist (cleanup)
          loop: "{{ slave_interfaces }}"
          community.general.nmcli:
            conn_name: "{{ item }}"
            state: absent
          ignore_errors: yes # Ignore if connection doesn't exist

        - name: Ensure bond master connection exists and is configured
          community.general.nmcli:
            conn_name: "{{ bond_name }}"
            type: bond
            ifname: "{{ bond_name }}"
            ip4: "{{ bond_ip }}"
            gw4: "{{ bond_gw }}"
            dns4: "{{ bond_dns }}"
            mode: "{{ bond_mode }}"
            state: present
            autoconnect: yes

        - name: Add slave interfaces to the bond
          loop: "{{ slave_interfaces }}"
          community.general.nmcli:
            conn_name: "{{ item }}-slave" # Create a unique connection name for each slave
            ifname: "{{ item }}"
            type: ethernet
            master: "{{ bond_name }}" # Associate with the bond master
            state: present
            autoconnect: yes

        - name: Ensure bond master connection is activated
          community.general.nmcli:
            conn_name: "{{ bond_name }}"
            state: activated

        - name: Verify bond status using /proc/net/bonding
          ansible.builtin.command: "cat /proc/net/bonding/{{ bond_name }}"
          register: bond_status
          changed_when: false

        - name: Display bond status
          ansible.builtin.debug:
            var: bond_status.stdout_lines

        - name: Verify IP address on bond interface
          ansible.builtin.command: "ip -4 addr show dev {{ bond_name }}"
          register: ip_output
          changed_when: false

        - name: Display bond IP configuration
          ansible.builtin.debug:
            var: ip_output.stdout_lines
    ```

3.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini configure_network_bond.yml
    ```
4.  **Verify:** After running, examine the `bond_status` and `ip_output` in the Ansible output. Log into the target host and run `ip a show dev bond0` and `cat /proc/net/bonding/bond0` to confirm the bond is active and configured correctly.

#### Assessment idea
1.  **Question:** A system administrator wants to configure network bonding on a RHEL server to provide fault tolerance, where one network interface is active and another takes over if the first fails. Which bonding mode should be selected for this requirement?
    *   A) `balance-rr` (mode 0)
    *   B) `active-backup` (mode 1)
    *   C) `802.3ad` (mode 4)
    *   D) `broadcast` (mode 5)

    **Correct Answer:** B) `active-backup` (mode 1)
    **Explanation:** The `active-backup` bonding mode is specifically designed for fault tolerance, ensuring that only one slave interface is active at a time, with others standing by to take over upon failure.

2.  **Question:** You've created an Ansible playbook to configure a network bond named `bond0` with two slave interfaces, `enp0s8` and `enp0s9`. You've configured the `bond0` master with an IP address. However, after running the playbook, `enp0s8` and `enp0s9` still show their original IP addresses when you run `ip a`. What is the most likely reason for this issue?
    *   A) The `bond_mode` parameter was omitted from the master configuration.
    *   B) The `community.general.nmcli` module was not used for the slave interfaces.
    *   C) The slave interfaces were not explicitly configured to be part of the `bond0` master connection.
    *   D) The `bond0` master connection was not activated after configuration.

    **Correct Answer:** C) The slave interfaces were not explicitly configured to be part of the `bond0` master connection.
    **Explanation:** When configuring bonding, the slave interfaces should not retain their own IP addresses. They must be explicitly associated with the master bond interface using the `master` parameter in their `community.general.nmcli` configuration. The master bond interface then holds the IP address for the aggregated link. If the slaves still have their own IPs, it indicates they were not correctly enslaved to the bond.

#### AI generation note
Create a 15-minute animated diagram and live coding video. Start with an animated explanation of network bonding and teaming concepts, illustrating `active-backup` and `802.3ad` modes with network diagrams showing traffic flow and failover. Then, transition to a live coding session where an Ansible playbook is written to configure an `active-backup` bond. Show the playbook creating the bond master and then adding two slave interfaces. Use a split-screen view: playbook on the left, terminal output showing `nmcli connection show`, `ip a`, and `cat /proc/net/bonding/bond0` on the right. Highlight the `master` parameter for slave interfaces. The interactive element will be a mini-quiz asking learners to identify the correct bonding mode for a given scenario (e.g., fault tolerance without switch configuration).

### Chapter 5.4 — Implementing Firewall Rules with `firewalld` and Ansible

#### Learning objectives
*   Understand the fundamental concepts of `firewalld` on RHEL, including zones, services, ports, and rich rules.
*   Utilize the `firewall-cmd` utility for manual firewall management.
*   Automate the configuration of `firewalld` zones, services, and ports using the `ansible.posix.firewalld` module.
*   Implement advanced firewall rules using `firewalld` rich rules through Ansible.
*   Identify common mistakes and best practices for securely managing `firewalld` with Ansible.

#### Detailed lesson content
A robust firewall is a critical component of server security, and on Red Hat Enterprise Linux, `firewalld` is the default dynamic firewall management tool. Unlike older `iptables` configurations, `firewalld` introduces the concept of *zones*, which are predefined sets of rules that can be applied to network interfaces based on their trust level. This zone-based approach simplifies firewall management by allowing administrators to apply rules to entire network segments rather than individual interfaces or IP addresses. Common zones include `public` (for untrusted networks), `internal` (for trusted internal networks), `home`, and `drop` (to drop all incoming packets).

Within these zones, you can configure access for *services* (predefined rules for common applications like HTTP, SSH, FTP), *ports* (specific TCP/UDP ports), and more granular *rich rules*. Rich rules provide the most flexibility, allowing you to specify source/destination IP addresses, protocols, logging, and actions (accept, reject, drop). `firewalld` also supports *permanent* rules, which persist across reboots, and *runtime* rules, which are active immediately but disappear after a reboot unless explicitly made permanent. The `firewall-cmd` utility is the command-line tool for interacting with `firewalld`. For example, `firewall-cmd --get-active-zones` shows which zones are active, and `firewall-cmd --zone=public --add-service=http --permanent` adds the HTTP service permanently to the public zone.

Automating `firewalld` configuration with Ansible is highly efficient and repeatable. The `ansible.posix.firewalld` module is specifically designed for this purpose. This module allows you to manage zones, services, ports, and rich rules in an idempotent manner. You can add or remove services, open or close ports, and define complex rich rules, all within your playbooks.

Let's consider an example of opening SSH and HTTP services in the `public` zone permanently:

```yaml
---
- name: Configure firewalld for web server
  hosts: webservers
  become: yes

  tasks:
    - name: Ensure firewalld service is running and enabled
      ansible.builtin.systemd:
        name: firewalld
        state: started
        enabled: yes

    - name: Allow SSH service in the public zone
      ansible.posix.firewalld:
        zone: public
        service: ssh
        state: enabled # Equivalent to --add-service
        permanent: yes
        immediate: yes # Apply changes immediately

    - name: Allow HTTP service in the public zone
      ansible.posix.firewalld:
        zone: public
        service: http
        state: enabled
        permanent: yes
        immediate: yes

    - name: Open a custom port (e.g., 8080/tcp) in the public zone
      ansible.posix.firewalld:
        zone: public
        port: 8080/tcp
        state: enabled # Equivalent to --add-port
        permanent: yes
        immediate: yes
```

The `state: enabled` parameter in the `ansible.posix.firewalld` module corresponds to adding a service or port, while `state: disabled` removes it. The `permanent: yes` parameter ensures the rule persists across reboots, and `immediate: yes` applies the change to the runtime configuration immediately. Omitting `immediate: yes` would only apply the change to the permanent configuration, requiring a `firewall-cmd --reload` or `systemctl restart firewalld` to take effect.

For more granular control, rich rules are invaluable. Suppose you want to allow only a specific IP address (`192.168.1.50`) to access port `22` (SSH) on your server, while blocking all other SSH access. You would typically add a rich rule to allow the specific IP, and then ensure the general SSH service is *not* enabled in that zone, or add a more general rich rule to block SSH from other sources.

```yaml
    - name: Allow SSH from specific IP using a rich rule
      ansible.posix.firewalld:
        zone: public
        rich_rule: 'rule family="ipv4" source address="192.168.1.50" port port="22" protocol="tcp" accept'
        state: present
        permanent: yes
        immediate: yes

    - name: Ensure general SSH service is not enabled in public zone (if rich rule is preferred)
      ansible.posix.firewalld:
        zone: public
        service: ssh
        state: disabled
        permanent: yes
        immediate: yes
```

Common mistakes include forgetting `permanent: yes`, which leads to rules disappearing after a reboot. Another common error is applying rules to the wrong zone, or having conflicting rules (e.g., allowing a service globally but then trying to block it with a rich rule, where rule order matters). Always test your firewall changes cautiously. A misconfigured firewall can lock you out of your system or expose it to vulnerabilities. It's a good practice to include a task that opens SSH access from your Ansible controller's IP address *before* making any other changes, as a safety net.

Before deploying extensive firewall changes, ensure you have a clear understanding of the network traffic flow and the services running on your server. After applying changes with Ansible, always verify using `firewall-cmd --list-all --zone=<your_zone>` to confirm that the rules have been applied as intended. This verification step is crucial for maintaining security and connectivity. Ansible's `ansible.builtin.command` and `ansible.builtin.debug` modules can be used to automate these verification steps within your playbook.

#### Key concepts
*   **`firewalld`:** The dynamic firewall management daemon on RHEL, using zones for rule organization.
*   **Zone:** A predefined set of firewall rules applied to network interfaces based on their trust level (e.g., `public`, `internal`).
*   **Service:** A predefined rule for common applications (e.g., `http`, `ssh`).
*   **Port:** A specific TCP or UDP port number (e.g., `80/tcp`, `443/tcp`).
*   **Rich Rule:** A highly granular firewall rule allowing specification of source/destination, protocols, ports, and actions.
*   **`firewall-cmd`:** The command-line utility for interacting with `firewalld`.
*   **Permanent Rules:** Firewall rules that persist across system reboots.
*   **Runtime Rules:** Firewall rules active immediately but lost on reboot unless made permanent.
*   **`ansible.posix.firewalld` module:** The Ansible module for automating `firewalld` configurations.
*   **`immediate: yes`:** An `ansible.posix.firewalld` parameter to apply changes to the runtime configuration immediately.

#### Hands-on activity
**Objective:** Create an Ansible playbook to configure `firewalld` on a target RHEL host, enabling SSH and HTTP services, opening a custom port, and implementing a rich rule.

1.  **Ensure `firewalld` is installed and running** on your target RHEL host. You can check with `systemctl status firewalld`.

2.  **Create a playbook** named `configure_firewall.yml`:
    ```yaml
    ---
    - name: Configure firewalld rules
      hosts: webservers # Or your specific host group
      become: yes

      vars:
        admin_ip: 192.168.1.0/24 # Replace with your Ansible controller's IP or a trusted subnet
        web_port: 8080/tcp

      tasks:
        - name: Ensure firewalld service is running and enabled
          ansible.builtin.systemd:
            name: firewalld
            state: started
            enabled: yes

        - name: Allow SSH service in the public zone permanently
          ansible.posix.firewalld:
            zone: public
            service: ssh
            state: enabled
            permanent: yes
            immediate: yes

        - name: Allow HTTP service in the public zone permanently
          ansible.posix.firewalld:
            zone: public
            service: http
            state: enabled
            permanent: yes
            immediate: yes

        - name: Open a custom web port (e.g., 8080/tcp) in the public zone permanently
          ansible.posix.firewalld:
            zone: public
            port: "{{ web_port }}"
            state: enabled
            permanent: yes
            immediate: yes

        - name: Add a rich rule to allow ICMP (ping) from a specific admin subnet
          ansible.posix.firewalld:
            zone: public
            rich_rule: 'rule family="ipv4" source address="{{ admin_ip }}" protocol value="icmp" accept'
            state: present
            permanent: yes
            immediate: yes

        - name: Verify firewalld rules in the public zone
          ansible.builtin.command: "firewall-cmd --zone=public --list-all"
          register: firewall_status
          changed_when: false

        - name: Display current firewalld public zone configuration
          ansible.builtin.debug:
            var: firewall_status.stdout_lines
    ```

3.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini configure_firewall.yml
    ```
4.  **Verify:** After running, check the `firewall_status` output. You can also log into the target host and run `firewall-cmd --zone=public --list-all` to confirm the services, ports, and rich rule are listed. Test connectivity (e.g., `ssh` from a non-admin IP, `ping` from the admin IP, try to access a web server on port 8080 if one is running).

#### Assessment idea
1.  **Question:** A system administrator needs to open TCP port 443 for HTTPS traffic in the `public` zone of a RHEL server using Ansible, ensuring the rule persists after a reboot and takes effect immediately. Which of the following Ansible tasks correctly achieves this?
    *   A)
        ```yaml
        - ansible.posix.firewalld:
            zone: public
            port: 443/tcp
            state: enabled
            permanent: yes
        ```
    *   B)
        ```yaml
        - ansible.posix.firewalld:
            zone: public
            service: https
            state: enabled
            immediate: yes
        ```
    *   C)
        ```yaml
        - ansible.posix.firewalld:
            zone: public
            port: 443/tcp
            state: enabled
            permanent: yes
            immediate: yes
        ```
    *   D)
        ```yaml
        - ansible.posix.firewalld:
            zone: public
            port: 443/tcp
            action: add
            permanent: yes
            runtime: yes
        ```

    **Correct Answer:** C)
    **Explanation:** To ensure the rule persists across reboots, `permanent: yes` is required. To make it active immediately, `immediate: yes` is also necessary. `state: enabled` is the correct parameter to add a port or service. Option A misses `immediate: yes`. Option B uses `service: https` which is valid but the question specifically asks for port 443/tcp. Option D uses `action: add` and `runtime: yes` which are not standard parameters for this module.

2.  **Question:** You have an Ansible playbook that adds a `firewalld` rich rule to allow all traffic from `192.168.10.0/24` to the `internal` zone. After running the playbook, you discover that hosts within `192.168.10.0/24` still cannot connect to services on the server. You check `firewall-cmd --zone=internal --list-all` and confirm the rich rule is present. What is a common mistake that could cause this issue?
    *   A) The `permanent: yes` parameter was omitted from the rich rule.
    *   B) The `firewalld` service was not restarted after applying the rule.
    *   C) The network interface connected to the `192.168.10.0/24` subnet is not assigned to the `internal` zone.
    *   D) The `state: present` parameter was used instead of `state: enabled`.

    **Correct Answer:** C) The network interface connected to the `192.168.10.0/24` subnet is not assigned to the `internal` zone.
    **Explanation:** `firewalld` rules are applied based on zones. If the network interface through which `192.168.10.0/24` traffic arrives is assigned to a different zone (e.g., `public`), then the rich rule defined for the `internal` zone will not apply to that traffic, even if the rule itself is correctly defined. `permanent: yes` and `immediate: yes` ensure the rule is active, and `state: present` is correct for rich rules.

#### AI generation note
Create a 12-minute interactive lab walkthrough video. Start by showing `firewall-cmd --list-all` on a default RHEL system. Guide learners through writing an Ansible playbook to: 1) enable `firewalld` service, 2) add `http` and `https` services to the `public` zone, 3) open a custom port `9000/tcp`, and 4) implement a rich rule to allow SSH from a specific IP address. Show the playbook execution and then verify the changes using `firewall-cmd --zone=public --list-all`. Include a visual overlay explaining the `permanent` and `immediate` parameters. The interactive element will be a step-by-step modification of the playbook to remove a previously added rule, followed by a check of the firewall status.

### Chapter 5.5 — Configuring DNS and NTP Services

#### Learning objectives
*   Explain the importance of DNS resolution and NTP synchronization in a networked environment.
*   Automate the configuration of client-side DNS resolvers using the `community.general.nmcli` Ansible module.
*   Automate the configuration of the `chrony` NTP client using Ansible's `ansible.builtin.template` or `ansible.builtin.lineinfile` modules.
*   Verify DNS resolution and NTP synchronization on a RHEL system.
*   Identify common misconfigurations for DNS and NTP and their impact on system operations.

#### Detailed lesson content
Accurate time synchronization and reliable name resolution are two often-overlooked but absolutely critical services for any networked system. Without proper DNS (Domain Name System) configuration, your servers cannot resolve hostnames to IP addresses, making it impossible to access websites, communicate with other servers by name, or even perform many system updates. Similarly, without NTP (Network Time Protocol) synchronization, your server's clock can drift, leading to issues with logging, security certificates, authentication (e.g., Kerberos), and data consistency in distributed systems. Automating these configurations with Ansible ensures consistency and reliability across your RHEL fleet.

For client-side DNS resolution on RHEL, `NetworkManager` is typically responsible for managing the `/etc/resolv.conf` file, which lists the DNS servers your system uses. While you *could* manually edit `/etc/resolv.conf` or use `ansible.builtin.template`, the recommended and most robust approach is to configure DNS servers as part of a `NetworkManager` connection profile using the `community.general.nmcli` module. This ensures that the DNS settings are tied to a specific network interface and persist correctly.

Here's how you might configure DNS servers for an existing connection profile named `System eth0`:

```yaml
---
- name: Configure DNS resolvers for a network connection
  hosts: webservers
  become: yes

  vars:
    connection_name: System eth0 # Replace with your actual connection name
    dns_servers:
      - 192.168.1.1 # Primary DNS server
      - 8.8.8.8     # Secondary DNS server
    dns_search_domains:
      - example.com
      - mycorp.local

  tasks:
    - name: Set DNS servers for the specified connection
      community.general.nmcli:
        conn_name: "{{ connection_name }}"
        dns4: "{{ dns_servers }}"
        dns4_search: "{{ dns_search_domains }}"
        state: present # Ensure the connection exists and apply changes
        # activate: yes # Uncomment if you want to explicitly activate the connection after change
                      # NetworkManager often applies changes dynamically, but explicit activation can ensure immediate effect.

    - name: Verify DNS configuration by checking /etc/resolv.conf
      ansible.builtin.command: "cat /etc/resolv.conf"
      register: resolv_conf_output
      changed_when: false

    - name: Display /etc/resolv.conf content
      ansible.builtin.debug:
        var: resolv_conf_output.stdout_lines

    - name: Test DNS resolution for a known hostname
      ansible.builtin.command: "host google.com" # 'host' command from bind-utils package
      register: dns_test_output
      changed_when: false

    - name: Display DNS resolution test result
      ansible.builtin.debug:
        var: dns_test_output.stdout_lines
```

For NTP synchronization, RHEL 8 and later primarily use `chrony` instead of `ntpd`. `chrony` is a more modern and accurate implementation of NTP, designed to synchronize system clocks with NTP servers. Configuring `chrony` involves editing its main configuration file, `/etc/chrony.conf`. The `ansible.builtin.template` module is ideal for managing this file, allowing you to deploy a standardized `chrony.conf` across your servers.

A typical `chrony.conf` will specify `pool` or `server` directives to point to NTP sources. You should choose reliable NTP servers, such as those provided by your organization, a public NTP pool (e.g., `pool 2.rhel.pool.ntp.org iburst`), or a local NTP server.

```yaml
---
- name: Configure Chrony NTP client
  hosts: webservers
  become: yes

  vars:
    ntp_servers:
      - 0.rhel.pool.ntp.org iburst
      - 1.rhel.pool.ntp.org iburst
      - ntp.example.com iburst # Your internal NTP server

  tasks:
    - name: Ensure chrony package is installed
      ansible.builtin.package:
        name: chrony
        state: present

    - name: Deploy chrony.conf from template
      ansible.builtin.template:
        src: chrony.conf.j2 # Path to your Jinja2 template file
        dest: /etc/chrony.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart chronyd

    - name: Ensure chronyd service is running and enabled
      ansible.builtin.systemd:
        name: chronyd
        state: started
        enabled: yes

    - name: Verify NTP synchronization status
      ansible.builtin.command: "chronyc sources"
      register: chrony_sources_output
      changed_when: false

    - name: Display chrony sources
      ansible.builtin.debug:
        var: chrony_sources_output.stdout_lines

  handlers:
    - name: Restart chronyd
      ansible.builtin.systemd:
        name: chronyd
        state: restarted
```

The `chrony.conf.j2` template would look something like this:

```jinja2
# Use public NTP servers from the pool project.
{% for server in ntp_servers %}
server {{ server }}
{% endfor %}

# Record the rate at which the system clock gains or loses time.
driftfile /var/lib/chrony/drift

# Enable kernel synchronization of the real-time clock (RTC).
rtcsync

# Allow NTP client access from local network.
# allow 192.168.0.0/16

# Listen for NTP requests on all interfaces.
# bindcmdaddress 0.0.0.0

# Log system clock changes.
logdir /var/log/chrony
```

Common mistakes for DNS include providing incorrect DNS server IPs, which leads to name resolution failures. Always test DNS resolution after configuration using `host <hostname>` or `dig <hostname>`. For NTP, a common issue is `chronyd` not starting or not being enabled, or firewall rules blocking UDP port 123 (NTP). Ensure your firewall allows outgoing UDP 123 to your NTP servers. If `chronyc sources` shows no active sources, check network connectivity and firewall rules.

Safety note: Incorrect DNS configuration can render your server effectively unreachable by name, impacting many services. Incorrect NTP can cause subtle but severe issues with authentication, logging, and data integrity. Always verify these services after configuration. For `chrony`, wait a few minutes after starting the service before checking `chronyc sources`, as it takes time to synchronize.

#### Key concepts
*   **DNS (Domain Name System):** A hierarchical and decentralized naming system for computers, services, or any resource connected to the Internet or a private network.
*   **`/etc/resolv.conf`:** The standard Linux file that specifies the IP addresses of DNS servers and search domains.
*   **NTP (Network Time Protocol):** A networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.
*   **`chrony`:** The default NTP client and server implementation on modern RHEL systems, replacing `ntpd`.
*   **`chronyd`:** The daemon for the `chrony` service.
*   **`chronyc`:** The command-line utility to monitor and control `chronyd`.
*   **`community.general.nmcli` module:** Used for configuring DNS servers via NetworkManager connection profiles.
*   **`ansible.builtin.template` module:** Ideal for deploying configuration files like `/etc/chrony.conf` using Jinja2 templates.
*   **`ansible.builtin.lineinfile` module:** Can be used for small, targeted modifications to configuration files.

#### Hands-on activity
**Objective:** Create an Ansible playbook to configure client-side DNS resolvers using `nmcli` and set up `chrony` to synchronize with public NTP servers.

1.  **Create a Jinja2 template file** named `chrony.conf.j2` in a `templates` directory next to your playbook:
    ```jinja2
    # Use public NTP servers from the pool project.
    {% for server in ntp_servers %}
    server {{ server }}
    {% endfor %}

    # Record the rate at which the system clock gains or loses time.
    driftfile /var/lib/chrony/drift

    # Enable kernel synchronization of the real-time clock (RTC).
    rtcsync

    # Allow NTP client access from local network.
    # allow 192.168.0.0/16

    # Listen for NTP requests on all interfaces.
    # bindcmdaddress 0.0.0.0

    # Log system clock changes.
    logdir /var/log/chrony
    ```

2.  **Create a playbook** named `configure_dns_ntp.yml`:
    ```yaml
    ---
    - name: Configure DNS and NTP services
      hosts: webservers # Or your specific host group
      become: yes

      vars:
        primary_interface_conn: System eth0 # Replace with your primary network connection name
        dns_servers_list:
          - 192.168.1.1 # Your local DNS server or a public one
          - 8.8.8.8
        ntp_pool_servers:
          - 0.rhel.pool.ntp.org iburst
          - 1.rhel.pool.ntp.org iburst

      tasks:
        - name: Configure DNS servers for the primary network connection
          community.general.nmcli:
            conn_name: "{{ primary_interface_conn }}"
            dns4: "{{ dns_servers_list }}"
            state: present
            # activate: yes # Uncomment if explicit activation is needed

        - name: Install chrony package
          ansible.builtin.package:
            name: chrony
            state: present

        - name: Deploy chrony.conf using template
          ansible.builtin.template:
            src: chrony.conf.j2
            dest: /etc/chrony.conf
            owner: root
            group: root
            mode: '0644'
          notify: Restart chronyd

        - name: Ensure chronyd service is running and enabled
          ansible.builtin.systemd:
            name: chronyd
            state: started
            enabled: yes

        - name: Verify DNS resolution for a common domain
          ansible.builtin.command: "dig +short google.com" # 'dig' command from bind-utils
          register: dig_output
          changed_when: false

        - name: Display DNS resolution result
          ansible.builtin.debug:
            var: dig_output.stdout_lines

        - name: Verify NTP synchronization status
          ansible.builtin.command: "chronyc sources"
          register: chrony_status
          changed_when: false
          
        - name: Display chrony synchronization status
          ansible.builtin.debug:
            var: chrony_status.stdout_lines

      handlers:
        - name: Restart chronyd
          ansible.builtin.systemd:
            name: chronyd
            state: restarted
            daemon_reload: yes # Important for systemd services after config changes
    ```

3.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini configure_dns_ntp.yml
    ```
4.  **Verify:** Check the Ansible output for `dig_output` and `chrony_status`. Log into the target host and run `cat /etc/resolv.conf`, `dig google.com`, and `chronyc sources` to confirm successful configuration and synchronization. Note that `chronyc sources` might take a few minutes to show synchronized sources.

#### Assessment idea
1.  **Question:** A system administrator uses Ansible to configure DNS servers for a RHEL host's `eth0` interface. After running the playbook, `cat /etc/resolv.conf` shows the correct DNS servers, but `dig google.com` still fails. What is the most likely cause?
    *   A) The `community.general.nmcli` module was not used.
    *   B) The `chronyd` service is not running.
    *   C) The `firewalld` service is blocking outgoing DNS queries (UDP port 53).
    *   D) The `state: present` parameter was omitted from the `nmcli` task.

    **Correct Answer:** C) The `firewalld` service is blocking outgoing DNS queries (UDP port 53).
    **Explanation:** If `/etc/resolv.conf` is correct, the system knows which DNS servers to query. However, if the firewall is blocking outgoing UDP traffic on port 53 (the standard DNS port), the queries will never reach the DNS servers, leading to resolution failures. `chronyd` is for NTP, and `state: present` ensures the configuration exists, but wouldn't cause a resolution failure if the config is already written.

2.  **Question:** You've deployed a `chrony.conf` file to a RHEL server using `ansible.builtin.template` and ensured `chronyd` is running and enabled. However, `chronyc sources` shows no synchronized NTP sources. What is a common troubleshooting step you should perform?
    *   A) Check the `chrony.conf` file for incorrect `server` or `pool` directives.
    *   B) Restart the `NetworkManager` service.
    *   C) Verify the `chrony` package is installed.
    *   D) Check `/etc/resolv.conf` for correct DNS server entries.

    **Correct Answer:** A) Check the `chrony.conf` file for incorrect `server` or `pool` directives.
    **Explanation:** If `chronyd` is running but not synchronizing, the most direct cause is often an issue with the configured NTP sources. This could mean the `server` or `pool` entries in `chrony.conf` are incorrect, unreachable, or simply not providing valid time. While other options might be part of a broader troubleshooting process, checking the `chrony.conf` content for valid NTP sources is the most immediate and relevant step.

#### AI generation note
Create a 15-minute live coding video. Start by showing a RHEL VM with default DNS and NTP settings. First, write an Ansible playbook to configure DNS servers for the primary network connection using `community.general.nmcli`. Show `cat /etc/resolv.conf` and `dig google.com` before and after. Second, write a playbook to deploy a `chrony.conf` template, install `chrony`, and ensure `chronyd` is running. Show `chronyc sources` output. Use a split-screen view: playbook on the left, terminal output on the right. Highlight common pitfalls like firewall blocking NTP. The interactive element will be a mini-quiz asking learners to identify the correct `nmcli` parameter for setting DNS search domains.

### Chapter 5.6 — Advanced Network Debugging and Troubleshooting with Ansible

#### Learning objectives
*   Leverage Ansible facts for comprehensive network introspection and data gathering.
*   Utilize Ansible to execute common network diagnostic commands (`ip`, `ss`, `ping`, `traceroute`) on remote hosts.
*   Develop playbooks for automated network connectivity checks and port scanning.
*   Implement conditional logic in Ansible playbooks based on network state or diagnostic output.
*   Deploy and use network analysis tools like `tcpdump` with Ansible for deeper troubleshooting.

#### Detailed lesson content
Even with robust automation, network issues can arise. The ability to efficiently debug and troubleshoot network problems on remote RHEL systems is a critical skill for an RHCE. Ansible, while primarily an automation tool, is also incredibly powerful for gathering diagnostic information, executing troubleshooting commands, and even deploying specialized tools across your infrastructure. This chapter focuses on using Ansible not just to configure, but to *diagnose* and *resolve* network-related challenges.

The first line of defense in network troubleshooting with Ansible is **Ansible facts**. As discussed in Chapter 5.1, `ansible.builtin.setup` (or `gather_facts: yes`) collects a wealth of network information. Specifically, `ansible_facts.interfaces` provides details about each network interface (IPs, MACs, state, MTU), `ansible_facts.default_ipv4` gives the primary IPv4 configuration, and `ansible_facts.network_resources` offers a more structured view of all network connections. By simply debugging these facts, you can quickly ascertain the configured IP addresses, gateway, DNS servers, and interface states without manually logging into each server. This is invaluable for identifying configuration drift or unexpected states.

Beyond facts, Ansible can execute any command or script on remote hosts, making it a perfect orchestrator for standard network diagnostic tools.
*   **`ip a` (or `ip addr show`):** Displays IP addresses and interface status.
*   **`ip route show`:** Shows the routing table.
*   **`ss -tulpn` (or `netstat -tulpn`):** Lists open TCP/UDP ports and the processes listening on them. This is crucial for verifying if a service is actually running and accessible.
*   **`ping <destination>`:** Tests basic ICMP connectivity to a host.
*   **`traceroute <destination>`:** Shows the path packets take to a destination, helping identify routing issues.
*   **`nmcli connection show`:** Lists NetworkManager connection profiles.
*   **`firewall-cmd --list-all`:** Verifies `firewalld` rules.

You can wrap these commands in Ansible tasks using `ansible.builtin.command` or `ansible.builtin.shell`. The `register` keyword is key here, as it captures the output of the command into a variable, which can then be debugged or used in subsequent conditional tasks.

```yaml
---
- name: Network Troubleshooting Playbook
  hosts: webservers
  become: yes

  tasks:
    - name: Gather network facts (if not already gathered)
      ansible.builtin.setup
      when: ansible_facts is not defined or not ansible_facts.keys()

    - name: Display primary IP and gateway
      ansible.builtin.debug:
        msg: "Primary IP: {{ ansible_facts.default_ipv4.address }}, Gateway: {{ ansible_facts.default_ipv4.gateway }}"

    - name: Check open ports on the server
      ansible.builtin.command: "ss -tulpn"
      register: open_ports_output
      changed_when: false

    - name: Display open ports
      ansible.builtin.debug:
        var: open_ports_output.stdout_lines

    - name: Test connectivity to an external host (e.g., google.com)
      ansible.builtin.command: "ping -c 3 google.com"
      register: ping_google_output
      ignore_errors: yes # Ping might fail if network is down
      changed_when: false

    - name: Display ping results
      ansible.builtin.debug:
        var: ping_google_output.stdout_lines

    - name: Check if SSH port (22) is listening
      ansible.builtin.command: "ss -ltn | grep ':22'"
      register: ssh_port_check
      changed_when: false

    - name: Report SSH port status
      ansible.builtin.debug:
        msg: "SSH port 22 is listening: {{ 'Yes' if ssh_port_check.stdout else 'No' }}"
```

**Conditional execution** is a powerful feature for troubleshooting. You can use the `when` clause to run tasks only if certain conditions are met. For example, you might only try to restart a service if a port is *not* listening, or only run `traceroute` if `ping` fails.

```yaml
    - name: Run traceroute if ping to external host failed
      ansible.builtin.command: "traceroute google.com"
      register: traceroute_output
      when: ping_google_output.rc != 0 # Only if ping returned a non-zero exit code (failed)
      changed_when: false

    - name: Display traceroute results
      ansible.builtin.debug:
        var: traceroute_output.stdout_lines
      when: ping_google_output.rc != 0
```

Sometimes, deeper packet-level analysis is required. Tools like `tcpdump` are invaluable for this. You can use Ansible to ensure `tcpdump` is installed and then execute it to capture traffic.

```yaml
    - name: Ensure tcpdump is installed
      ansible.builtin.package:
        name: tcpdump
        state: present

    - name: Capture network traffic on eth0 for 10 seconds (example: port 80)
      ansible.builtin.shell: "timeout 10 tcpdump -i eth0 -w /tmp/capture.pcap 'port 80' || true"
      args:
        creates: /tmp/capture.pcap # Only run if capture.pcap doesn't exist
      register: tcpdump_capture
      changed_when: true # This command changes state (creates a file)

    - name: Fetch the captured pcap file
      ansible.builtin.fetch:
        src: /tmp/capture.pcap
        dest: /tmp/ansible_captures/{{ inventory_hostname }}/
        flat: yes
      when: tcpdump_capture.rc == 0 # Only fetch if capture was successful
```
*Safety Note:* Running `tcpdump` on busy production servers can consume significant resources and generate large files. Be judicious and specific with your filters.

Common troubleshooting mistakes include not gathering enough information before making assumptions, overlooking firewall rules, or misinterpreting command output. Always check the return code (`rc`) of commands for success/failure, and carefully examine `stdout_lines` for diagnostic messages. When deploying tools or running diagnostic commands, consider the impact on the target system. For example, `nmap` can be resource-intensive and might be seen as a security threat.

By integrating these diagnostic capabilities into your Ansible workflows, you can build powerful, automated troubleshooting playbooks that can quickly identify and even proactively resolve network issues across your RHEL infrastructure, moving beyond reactive manual debugging to a more systematic and efficient approach.

#### Key concepts
*   **Ansible Facts:** Detailed information gathered about target hosts, including network configurations.
*   **Network Introspection:** The process of examining and understanding the current state and configuration of a network.
*   **`ansible.builtin.command` / `ansible.builtin.shell`:** Ansible modules for executing arbitrary commands on remote hosts.
*   **`register` keyword:** Used to capture the output and return code of an Ansible task into a variable.
*   **`ip` command:** Utility for displaying and manipulating routing, network devices, interfaces, and tunnels.
*   **`ss` command:** Utility to investigate sockets, showing listening ports and connections.
*   **`ping`:** A network utility to test the reachability of a host on an Internet Protocol (IP) network.
*   **`traceroute`:** A network diagnostic tool for displaying the route and measuring transit delays of packets across an IP network.
*   **`tcpdump`:** A powerful command-line packet analyzer for capturing and analyzing network traffic.
*   **Conditional Logic (`when`):** Ansible feature to execute tasks only if specified conditions are met.
*   **`ansible.builtin.debug`:** Module for printing variables or messages during playbook execution.

#### Hands-on activity
**Objective:** Create an Ansible playbook to gather detailed network facts, check common network services, and test external connectivity on a target RHEL host.

1.  **Create a playbook** named `network_diagnostics.yml`:
    ```yaml
    ---
    - name: Perform advanced network diagnostics
      hosts: webservers # Or your specific host group
      become: yes
      gather_facts: yes # Ensure facts are gathered

      tasks:
        - name: Display detailed network interface facts
          ansible.builtin.debug:
            var: ansible_facts.interfaces

        - name: Display NetworkManager connection status
          community.general.nmcli:
            command: connection show
          register: nmcli_connections
          changed_when: false

        - name: Print NetworkManager connections
          ansible.builtin.debug:
            var: nmcli_connections.stdout_lines

        - name: Check active listening ports
          ansible.builtin.command: "ss -tulpn"
          register: listening_ports
          changed_when: false

        - name: Display active listening ports
          ansible.builtin.debug:
            var: listening_ports.stdout_lines

        - name: Test connectivity to Google DNS (8.8.8.8)
          ansible.builtin.command: "ping -c 4 8.8.8.8"
          register: ping_external_dns
          ignore_errors: yes
          changed_when: false

        - name: Display ping results to external DNS
          ansible.builtin.debug:
            var: ping_external_dns.stdout_lines

        - name: Run traceroute to external DNS if ping failed
          ansible.builtin.command: "traceroute 8.8.8.8"
          register: traceroute_external_dns
          when: ping_external_dns.rc != 0
          ignore_errors: yes
          changed_when: false

        - name: Display traceroute results
          ansible.builtin.debug:
            var: traceroute_external_dns.stdout_lines
          when: ping_external_dns.rc != 0

        - name: Verify firewalld public zone rules
          ansible.builtin.command: "firewall-cmd --zone=public --list-all"
          register: firewalld_public_rules
          changed_when: false

        - name: Display firewalld public zone rules
          ansible.builtin.debug:
            var: firewalld_public_rules.stdout_lines
    ```

2.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory.ini network_diagnostics.yml
    ```
3.  **Analyze the output:** Review the debug messages for `ansible_facts.interfaces`, `nmcli_connections`, `listening_ports`, `ping_external_dns`, `traceroute_external_dns`, and `firewalld_public_rules`. Interpret the output to understand the network state of your target host.

#### Assessment idea
1.  **Question:** A system administrator suspects a service on a RHEL server is not starting correctly, and therefore not listening on its expected port (e.g., port 80 for HTTP). Which Ansible task would be most effective to quickly verify if any process is listening on TCP port 80 on the remote server?
    *   A)
        ```yaml
        - ansible.builtin.command: "netstat -tuln | grep ':80'"
          register: port_check
        ```
    *   B)
        ```yaml
        - ansible.posix.firewalld:
            port: 80/tcp
            state: enabled
        ```
    *   C)
        ```yaml
        - ansible.builtin.debug:
            var: ansible_facts.interfaces
        ```
    *   D)
        ```yaml
        - ansible.builtin.service:
            name: httpd
            state: started
        ```

    **Correct Answer:** A)
    **Explanation:** The `netstat -tuln` (or `ss -tulpn`) command is specifically designed to list active listening TCP/UDP ports. Piping it to `grep ':80'` filters for port 80, directly answering whether a process is listening on that port. Option B configures the firewall, C displays interface facts, and D starts a service, none of which directly verify if a port is listening.

2.  **Question:** You have an Ansible playbook that attempts to ping an external IP address. If the ping fails, you want the playbook to automatically run `traceroute` to the same IP. Which Ansible construct is best suited to implement this conditional execution?
    *   A) Using `block` and `rescue` sections.
    *   B) Using the `when` conditional statement on the `traceroute` task.
    *   C) Running both `ping` and `traceroute` tasks unconditionally.
    *   D) Using `delegate_to: localhost` for the `traceroute` task.

    **Correct Answer:** B) Using the `when` conditional statement on the `traceroute` task.
    **Explanation:** The `when` conditional statement in Ansible allows a task to be executed only if a specified condition is true. By registering the result of the `ping` task and checking its return code (`rc`), the `traceroute` task can be made to run only when the `ping` task indicates a failure (`ping_task_result.rc != 0`).

---

## Module 6: User, Group, and Security Automation

This module focuses on leveraging Ansible to automate the management of users, groups, and critical security configurations on Red Hat Enterprise Linux systems. You will learn to streamline tasks like creating user accounts, managing sudo privileges, deploying SSH keys for secure access, configuring SELinux policies, setting up firewalls, ensuring accurate time synchronization, and automating software updates. Mastering these automation techniques is crucial for maintaining secure, compliant, and efficiently managed systems in an enterprise environment, directly aligning with the Red Hat Certified Engineer objectives.

---

### Chapter 6.1 — Automating User and Group Management

#### Learning objectives
*   Understand how to create, modify, and delete local user accounts using Ansible.
*   Learn to manage local groups, including creating new groups and assigning users to them.
*   Identify and apply common user and group attributes such as UID, GID, home directory, and shell.
*   Recognize and avoid common pitfalls when automating user and group management.

#### Detailed lesson content
Managing user and group accounts is a fundamental aspect of system administration, and automating these tasks with Ansible brings significant efficiency and consistency, especially across a large number of servers. Instead of manually logging into each machine to run `useradd`, `usermod`, `userdel`, `groupadd`, or `groupdel` commands, Ansible allows you to define the desired state of your users and groups in a declarative playbook. This ensures that all systems conform to a standardized access policy, reducing human error and improving security posture.

The core of user management in Ansible lies with the `ansible.builtin.user` module. This module is incredibly versatile and allows you to perform a wide range of operations. To create a new user, you typically specify the `name` and `state: present`. For instance, to create a user named `devops_user`, you would use `name: devops_user state: present`. Beyond simple creation, you can define the user's `uid` (User ID), `home` directory, `shell`, `password` (though using `password` directly in playbooks is generally discouraged due to security, and `authorized_key` for SSH access is preferred), and even `comment` for descriptive purposes. When setting a password, it's critical to use a hashed password generated by `mkpasswd -m sha-512` or `python -c 'import crypt; print(crypt.crypt("your_password", crypt.mksalt(crypt.METHOD_SHA512)))'` rather than plain text. Ansible will then ensure that the user exists with these specified attributes. If the user already exists but with different attributes, Ansible will modify them to match the playbook's definition.

```yaml
- name: Create a new system user
  ansible.builtin.user:
    name: appuser
    comment: "Application Service User"
    uid: 1001
    home: /opt/appuser
    shell: /sbin/nologin
    state: present
    password: "$6$saltsalt$hashedpasswordhere" # Use a securely generated hash
```

Similarly, the `ansible.builtin.group` module handles group management. You can create a new group with `name` and `state: present`, and specify its `gid` (Group ID). For example, `name: developers state: present gid: 2000`. Once groups are created, you can assign users to them. The `ansible.builtin.user` module includes a `groups` parameter, which accepts a comma-separated list of secondary groups. A common mistake here is to simply list the groups without also specifying `append: yes`. If `append: yes` is omitted, Ansible will remove the user from any groups not explicitly listed in the `groups` parameter, potentially revoking legitimate access. Always remember to use `append: yes` when you intend to add a user to additional groups without affecting their existing secondary group memberships.

```yaml
- name: Ensure 'developers' group exists
  ansible.builtin.group:
    name: developers
    gid: 2000
    state: present

- name: Add 'devops_user' to 'developers' group
  ansible.builtin.user:
    name: devops_user
    groups: developers
    append: yes
    state: present # Ensure user also exists
```

When it comes to deleting users or groups, the `state: absent` parameter is used. For users, `state: absent` will remove the user account. You can also specify `remove: yes` to delete the user's home directory and mail spool, which is often desired for complete cleanup. For groups, `state: absent` will remove the group, but it's important to ensure no users are primarily associated with that group before deletion, as this can lead to orphaned files. Always consider the implications of deletion and ensure proper backups or data migration if necessary. A common safety note is to always test user/group management playbooks on non-production or staging environments first, especially when deleting accounts, to prevent accidental data loss or access issues. Additionally, ensure your automation adheres to your organization's identity and access management (IAM) policies and auditing requirements.

#### Key concepts
*   **`ansible.builtin.user` module:** Ansible module for managing user accounts (creation, modification, deletion).
*   **`ansible.builtin.group` module:** Ansible module for managing system groups.
*   **UID (User ID):** A unique numerical identifier for each user account.
*   **GID (Group ID):** A unique numerical identifier for each group.
*   **Primary Group:** The main group a user belongs to, typically sharing the same name as the user.
*   **Secondary Groups:** Additional groups a user can belong to, granting access to resources owned by those groups.
*   **`state: present` / `state: absent`:** Parameters used to ensure a resource exists or does not exist, respectively.
*   **`append: yes`:** Crucial parameter for the `user` module to add users to secondary groups without removing them from existing ones.

#### Hands-on activity
**Scenario:** Your organization needs to standardize user accounts across several development servers. You need to create a new `qa_team` group and two new users, `qa_lead` and `qa_engineer`, ensuring they are both members of the `qa_team` group. `qa_lead` should have a UID of 1005 and `qa_engineer` a UID of 1006. Both should have `/bin/bash` as their shell.

**Instructions:**
1.  Create an Ansible playbook named `manage_qa_users.yml`.
2.  Define tasks to:
    *   Create the `qa_team` group with GID 2005.
    *   Create the `qa_lead` user with UID 1005, shell `/bin/bash`, and add them to the `qa_team` group.
    *   Create the `qa_engineer` user with UID 1006, shell `/bin/bash`, and add them to the `qa_team` group.
3.  Ensure the playbook is idempotent (running it multiple times has the same effect).
4.  Run the playbook against your target host(s) (e.g., `ansible-playbook -i inventory.ini manage_qa_users.yml`).
5.  Verify the users and groups were created correctly on the target system using commands like `id qa_lead`, `id qa_engineer`, and `getent group qa_team`.

**Code Template (`manage_qa_users.yml`):**
```yaml
---
- name: Manage QA team users and groups
  hosts: all # Or specific host group like 'dev_servers'
  become: true # Required for user/group management

  tasks:
    - name: Ensure 'qa_team' group exists
      ansible.builtin.group:
        name: qa_team
        gid: 2005
        state: present

    - name: Create 'qa_lead' user and add to 'qa_team'
      ansible.builtin.user:
        name: qa_lead
        uid: 1005
        shell: /bin/bash
        groups: qa_team
        append: yes
        state: present

    - name: Create 'qa_engineer' user and add to 'qa_team'
      ansible.builtin.user:
        name: qa_engineer
        uid: 1006
        shell: /bin/bash
        groups: qa_team
        append: yes
        state: present
```

#### Assessment idea
1.  **Question:** A system administrator wants to add an existing user `john` to a new secondary group `project_alpha` using Ansible. They write the following task:
    ```yaml
    - name: Add john to project_alpha group
      ansible.builtin.user:
        name: john
        groups: project_alpha
        state: present
    ```
    What is a potential issue with this task, and how would you correct it to ensure `john` retains membership in his other secondary groups?

    **Answer:** The potential issue is that without `append: yes`, this task will remove `john` from *all* other secondary groups he might currently be a member of, leaving him only in `project_alpha` (and his primary group). This is a common mistake that can lead to unintended loss of access.
    To correct this, the `append: yes` parameter must be added:
    ```yaml
    - name: Add john to project_alpha group (corrected)
      ansible.builtin.user:
        name: john
        groups: project_alpha
        append: yes # This is the crucial addition
        state: present
    ```

2.  **Question:** You need to completely remove a user named `old_employee` from a system, including their home directory and mail spool. Write the Ansible task to achieve this.

    **Answer:**
    ```yaml
    - name: Remove old_employee completely
      ansible.builtin.user:
        name: old_employee
        state: absent
        remove: yes # This ensures home directory and mail spool are deleted
    ```
    Explanation: `state: absent` tells Ansible to remove the user account. `remove: yes` is an additional parameter specific to the `user` module that instructs it to also delete the user's home directory and mail spool, ensuring a clean removal.

#### AI generation note
Create a 12-minute interactive video tutorial. Start with a brief explanation of the `user` and `group` modules. Then, perform a live coding demo where you create a new group (`dev_team`) and two users (`dev1`, `dev2`) with specific UIDs/GIDs and shells, adding them to `dev_team` using `append: yes`. Show the playbook execution and then verify user/group creation on the target system using `id` and `getent group`. Highlight the common mistake of omitting `append: yes` with a quick demonstration of its effect. Include a side-by-side view of the Ansible playbook and the terminal output. Conclude with a 2-question interactive quiz on user/group module parameters.

---

### Chapter 6.2 — Managing Sudo Privileges with Ansible

#### Learning objectives
*   Understand the purpose and structure of the `/etc/sudoers` file and its associated configuration.
*   Learn to grant specific sudo privileges to users and groups using Ansible.
*   Identify and implement best practices for managing sudoers entries, including `NOPASSWD` and command aliases.
*   Recognize the critical safety considerations when modifying sudoer configurations.

#### Detailed lesson content
Granting administrative privileges, specifically `sudo` access, is a critical security task. Misconfigurations in the `/etc/sudoers` file can either create security vulnerabilities by granting too much access or lead to operational roadblocks by restricting necessary administrative actions. Automating `sudoers` management with Ansible ensures consistency, reduces the risk of manual errors, and provides an auditable record of privilege assignments. The traditional way to edit `/etc/sudoers` is via `visudo`, which performs syntax checking to prevent locking out administrators. When automating, we need to replicate this safety and precision.

Ansible provides several ways to manage the `/etc/sudoers` file or its drop-in configuration files within `/etc/sudoers.d/`. The most robust and recommended approach for adding specific, granular entries is often to create separate files in `/etc/sudoers.d/`. This modular approach makes it easier to manage, audit, and troubleshoot individual privilege grants without modifying the main `/etc/sudoers` file directly. The `ansible.builtin.copy` module is excellent for this, allowing you to copy a pre-configured sudoers file (template or static) to the `/etc/sudoers.d/` directory. Remember that files in `/etc/sudoers.d/` must have strict permissions: `0440` (read-only for root and members of the root group).

```yaml
- name: Deploy sudoers file for 'devops' group
  ansible.builtin.copy:
    src: files/devops_sudoers # Local file in your control node
    dest: /etc/sudoers.d/devops
    owner: root
    group: root
    mode: '0440'
    validate: /usr/sbin/visudo -cf %s # Crucial for syntax validation
  notify: Restart sshd # If sudoers changes might affect SSH daemon
```

The `validate` parameter in the `copy` module is absolutely crucial here. It uses `visudo -cf %s` to check the syntax of the copied file *before* it's actually placed in `/etc/sudoers.d/`. If the syntax is invalid, the copy operation will fail, preventing a broken `sudoers` configuration that could potentially lock out all administrative users. This is a vital safety mechanism.

Inside the `files/devops_sudoers` file, you might define entries like this:
```
# /etc/sudoers.d/devops
%devops ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart httpd, /usr/bin/systemctl status httpd
%devops ALL=(ALL) /usr/bin/dnf install *, /usr/bin/dnf update *
```
This example grants members of the `devops` group `NOPASSWD` access to restart and check the status of `httpd`, and also to install and update any packages using `dnf`. `NOPASSWD` means they won't be prompted for their password when executing these specific commands with `sudo`. While convenient, `NOPASSWD` should be used judiciously and only for commands that pose minimal security risk if executed without explicit password confirmation.

For simpler, single-line modifications or when you need to ensure a specific line exists or is absent in a file (like the main `/etc/sudoers` or a specific file in `/etc/sudoers.d/`), the `ansible.builtin.lineinfile` module can be used. This module is powerful for managing individual lines, but care must be taken with regular expressions and idempotency.

```yaml
- name: Ensure 'wheel' group has NOPASSWD sudo access
  ansible.builtin.lineinfile:
    path: /etc/sudoers
    regexp: '^%wheel\s+ALL=\(ALL\)\s+ALL$'
    line: '%wheel ALL=(ALL) NOPASSWD: ALL'
    validate: /usr/sbin/visudo -cf %s
    state: present
```
In this `lineinfile` example, we're modifying the main `/etc/sudoers` file. The `regexp` parameter matches the existing line for the `wheel` group, and `line` specifies the desired content. Again, `validate` is critical. A common mistake is to make `sudoers` entries too broad, granting `ALL` privileges when only a few specific commands are needed. Always follow the principle of least privilege: grant only the necessary permissions. Another mistake is to forget to ensure the user or group actually exists before granting them sudo access. Always combine sudoers tasks with user and group management tasks from the previous chapter.

Safety notes are paramount here:
1.  **Always use `validate: /usr/sbin/visudo -cf %s`** when modifying `sudoers` files. This is your primary safeguard against syntax errors.
2.  **Maintain a separate root login or console access** to your servers. If you accidentally lock out `sudo` access, you'll need a way to recover.
3.  **Test thoroughly** on non-production systems.
4.  **Be precise with commands:** Use full paths to binaries (e.g., `/usr/bin/systemctl` instead of `systemctl`) to prevent users from executing malicious scripts with the same name found earlier in their `PATH`.
5.  **Audit `sudo` usage:** Implement logging for `sudo` commands (`Defaults logfile=/var/log/sudo.log`) to track who is doing what.

By carefully crafting your Ansible playbooks and adhering to these best practices, you can automate sudo privilege management securely and efficiently.

#### Key concepts
*   **`/etc/sudoers`:** The main configuration file for `sudo` privileges.
*   **`/etc/sudoers.d/`:** Directory for modular `sudo` configuration files, preferred for organization and auditing.
*   **`visudo`:** The command-line utility used to safely edit the `sudoers` file, providing syntax checking.
*   **`NOPASSWD`:** A `sudoers` keyword that allows a user or group to execute specified commands without being prompted for a password.
*   **Principle of Least Privilege:** Granting users or groups only the minimum permissions necessary to perform their tasks.
*   **`validate` parameter:** A crucial parameter in Ansible's `copy` and `lineinfile` modules that executes a command (like `visudo -cf %s`) to validate the content before deployment.
*   **`%groupname`:** Syntax in `sudoers` to apply rules to all members of a specific group.

#### Hands-on activity
**Scenario:** You need to grant members of the `web_admins` group the ability to restart and check the status of the `httpd` service without a password, and also to manage files within `/var/www/html` using `chown` and `chmod`. You should create a dedicated sudoers file for this group.

**Instructions:**
1.  Create a local file named `files/web_admins_sudoers` in your Ansible control node.
2.  Add the necessary `sudoers` entry to this file for the `web_admins` group.
3.  Create an Ansible playbook named `configure_web_sudo.yml`.
4.  Define tasks to:
    *   Ensure the `web_admins` group exists (if not already handled in a previous playbook).
    *   Copy the `files/web_admins_sudoers` file to `/etc/sudoers.d/web_admins` on the target host(s).
    *   Ensure the copied file has `owner: root`, `group: root`, and `mode: '0440'`.
    *   Crucially, use the `validate` parameter with `visudo -cf %s` to check syntax.
5.  Run the playbook and verify the sudo privileges work for a test user in the `web_admins` group.

**Code Template (`files/web_admins_sudoers`):**
```
# /etc/sudoers.d/web_admins
%web_admins ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart httpd, /usr/bin/systemctl status httpd
%web_admins ALL=(ALL) /usr/bin/chown *, /usr/bin/chmod *
```

**Code Template (`configure_web_sudo.yml`):**
```yaml
---
- name: Configure sudo privileges for web_admins
  hosts: all # Or specific host group like 'web_servers'
  become: true

  tasks:
    - name: Ensure 'web_admins' group exists
      ansible.builtin.group:
        name: web_admins
        state: present

    - name: Deploy sudoers file for 'web_admins' group
      ansible.builtin.copy:
        src: files/web_admins_sudoers
        dest: /etc/sudoers.d/web_admins
        owner: root
        group: root
        mode: '0440'
        validate: /usr/sbin/visudo -cf %s
```

#### Assessment idea
1.  **Question:** A new `db_admins` group needs `NOPASSWD` access to restart the `postgresql` service and run `pg_dump` on a database server. You decide to create a file `/etc/sudoers.d/db_admins`. What is the minimum essential `sudoers` entry you would put in that file, and what Ansible task would you use to deploy it securely?

    **Answer:**
    **`sudoers` entry (`files/db_admins_sudoers`):**
    ```
    %db_admins ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart postgresql, /usr/bin/pg_dump
    ```
    **Ansible task:**
    ```yaml
    - name: Deploy sudoers file for 'db_admins' group
      ansible.builtin.copy:
        src: files/db_admins_sudoers
        dest: /etc/sudoers.d/db_admins
        owner: root
        group: root
        mode: '0440'
        validate: /usr/sbin/visudo -cf %s
    ```
    Explanation: The `sudoers` entry grants `NOPASSWD` access to the `db_admins` group for the specified commands, using their full paths for security. The Ansible `copy` task ensures the file is placed correctly with the right permissions and, critically, validates its syntax using `visudo` before applying it, preventing potential lockout issues.

2.  **Question:** Why is it generally considered a bad practice to directly modify `/etc/sudoers` using `ansible.builtin.lineinfile` for complex privilege assignments, and what is the recommended alternative?

    **Answer:** Directly modifying `/etc/sudoers` with `lineinfile` for complex privilege assignments is generally discouraged for several reasons:
    *   **Complexity:** `lineinfile` is best for single-line changes. Complex `sudoers` entries often span multiple lines or require specific formatting that is difficult to manage idempotently and reliably with regular expressions.
    *   **Merge Conflicts:** If multiple playbooks or administrators try to modify the main `/etc/sudoers` file, it can lead to merge conflicts or unexpected overwrites.
    *   **Readability and Auditability:** A single, large `/etc/sudoers` file can become difficult to read and audit.
    *   **Risk of Error:** While `lineinfile` can use `validate`, managing complex regexes increases the chance of error.

    The recommended alternative is to use **drop-in files in the `/etc/sudoers.d/` directory**. This approach offers:
    *   **Modularity:** Each privilege grant can reside in its own file (e.g., `/etc/sudoers.d/web_admins`), making it easier to manage, enable, disable, or audit specific rules.
    *   **Simplicity:** You can use the `ansible.builtin.copy` module to deploy a complete, pre-tested file, rather than manipulating individual lines.
    *   **Safety:** Each file can still be validated with `visudo -cf %s` during the `copy` operation.
    *   **Collaboration:** Different teams can manage their own sudoers files without interfering with others.

#### AI generation note
Design a 10-minute interactive lab walkthrough. Begin by explaining the `sudoers` file structure and the importance of `visudo`. Guide learners through creating a `files/auditors_sudoers` file locally that grants a `auditors` group `NOPASSWD` access to `journalctl` and `tail -f /var/log/messages`. Then, demonstrate writing and executing an Ansible playbook using `ansible.builtin.copy` with the `validate` parameter to deploy this file to `/etc/sudoers.d/`. Show how to create a test user, add them to `auditors`, and then verify their sudo access by attempting the allowed commands. Include common mistakes like incorrect file permissions on `sudoers.d` files and forgetting the `validate` parameter. The interactive element should be a guided exercise where learners modify the playbook to add another command to the `auditors_sudoers` file.

---

### Chapter 6.3 — Automating SSH Key-Based Authentication

#### Learning objectives
*   Understand the principles of SSH key-based authentication and its security benefits.
*   Learn to deploy SSH public keys to managed hosts using the `ansible.posix.authorized_key` module.
*   Identify best practices for managing SSH keys, including key generation and permissions.
*   Recognize common issues and security considerations when automating SSH key deployment.

#### Detailed lesson content
SSH key-based authentication is the cornerstone of secure, passwordless access to Linux systems, particularly in automated environments. Instead of relying on passwords, which can be brute-forced or guessed, SSH keys use a pair of cryptographic keys: a private key (kept secret on the client machine) and a public key (distributed to the servers you want to access). When you attempt to connect, the server challenges your client, which then proves its identity using the private key without ever sending it over the network. This method significantly enhances security and is essential for Ansible's own operation, as Ansible typically connects to managed hosts via SSH. Automating the distribution of public keys ensures consistent access for administrators, automation users, and monitoring systems.

The primary Ansible module for managing SSH public keys is `ansible.posix.authorized_key`. This module is designed specifically to manage entries in the `~/.ssh/authorized_keys` file for a given user on the remote host. It handles the idempotency automatically: if the key already exists, it does nothing; if it's missing, it adds it; if you specify `state: absent`, it removes it.

To add a public key, you need to specify the `user` for whom the key is being managed, the `key` itself (the public key string), and `state: present`. The `key` parameter can accept the public key content directly as a string, or it can read the content from a local file using `{{ lookup('file', 'path/to/id_rsa.pub') }}`. Using the `lookup('file', ...)` method is generally preferred as it keeps the public key content out of the playbook itself, making the playbook more readable and preventing accidental exposure of the key material in version control if not handled carefully.

```yaml
- name: Ensure SSH public key is present for 'devops_user'
  ansible.posix.authorized_key:
    user: devops_user
    state: present
    key: "{{ lookup('file', '~/.ssh/id_rsa.pub') }}" # Path to the public key on the control node
    # Optional: specify key type and comment if not present in the key file
    # key_options: 'from="192.168.1.0/24",no-port-forwarding'
```

In this example, we're deploying the public key from the Ansible control node's `~/.ssh/id_rsa.pub` file to the `devops_user`'s `authorized_keys` file on the target host. It's crucial that the `devops_user` already exists on the target host (which can be ensured using the `ansible.builtin.user` module from Chapter 6.1). The `authorized_key` module also correctly sets the permissions on `~/.ssh` (usually `0700`) and `~/.ssh/authorized_keys` (usually `0600`), which is vital for SSH to function correctly. Incorrect permissions are a very common reason why SSH key authentication fails; if these directories or files are world-writable, SSH will refuse to use them.

You can also specify `key_options` to add restrictions to the key's usage. For example, `key_options: 'from="192.168.1.0/24",no-port-forwarding'` would restrict access using this key to connections originating from the `192.168.1.0/24` subnet and disable port forwarding. This adds an extra layer of security, especially for automation accounts.

To remove an SSH public key, you simply set `state: absent`:

```yaml
- name: Remove an old SSH public key for 'devops_user'
  ansible.posix.authorized_key:
    user: devops_user
    state: absent
    key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC..." # The exact public key string to remove
```
When removing keys, you must provide the *exact* public key string that you want to remove. If you're using `lookup('file', ...)` for removal, ensure the file contains only the key you intend to remove.

**Common mistakes and safety notes:**
1.  **Incorrect Permissions:** The most frequent issue. Ensure `~/.ssh` is `0700` and `~/.ssh/authorized_keys` is `0600`. The `authorized_key` module handles this by default, but if you're manually managing, be aware.
2.  **User Not Existing:** The target user must exist on the remote host before you can add a key to their `authorized_keys` file.
3.  **Private Key Exposure:** Never distribute private keys. Only public keys should be shared.
4.  **Key Management:** For robust key management, consider using an SSH agent or a centralized key management system. For automation, dedicated SSH keys should be generated for service accounts rather than reusing personal keys.
5.  **Revocation:** Have a clear process for revoking keys when an employee leaves or a key is compromised. Automating `state: absent` is part of this process.
6.  **Key Comments:** Use descriptive comments in your public keys (e.g., `ssh-rsa ... user@host-purpose`) to easily identify them in `authorized_keys` files.

Automating SSH key deployment is a powerful way to manage access securely and efficiently, forming a critical component of any robust system administration strategy.

#### Key concepts
*   **SSH Key-Based Authentication:** A secure method of authentication using a pair of cryptographic keys (private and public) instead of passwords.
*   **Private Key:** The secret part of the SSH key pair, kept securely on the client machine.
*   **Public Key:** The shareable part of the SSH key pair, distributed to servers to grant access.
*   **`~/.ssh/authorized_keys`:** The file on a Linux server that stores public keys authorized to log in as a specific user.
*   **`ansible.posix.authorized_key` module:** Ansible module specifically designed for managing entries in `authorized_keys` files.
*   **`lookup('file', 'path')`:** An Ansible lookup plugin used to read the content of a file from the control node.
*   **`key_options`:** Parameter in `authorized_key` module to add restrictions (e.g., `from`, `no-port-forwarding`) to the deployed key.
*   **Idempotency:** The property of an operation that produces the same result regardless of how many times it is executed.

#### Hands-on activity
**Scenario:** You need to deploy a new SSH public key for an automation user named `ansible_svc` to all your web servers. This key should allow access but disable port forwarding for security reasons.

**Instructions:**
1.  On your Ansible control node, if you don't have one, generate a new SSH key pair for the automation user (e.g., `ssh-keygen -t rsa -b 4096 -f ~/.ssh/ansible_svc_key -N ""`). Note the path to the public key (e.g., `~/.ssh/ansible_svc_key.pub`).
2.  Create an Ansible playbook named `deploy_automation_key.yml`.
3.  Define tasks to:
    *   Ensure the `ansible_svc` user exists on the target hosts (if not already present).
    *   Deploy the public key from `~/.ssh/ansible_svc_key.pub` to the `ansible_svc` user's `authorized_keys` file on the target hosts.
    *   Include `key_options` to disable port forwarding for this key.
4.  Run the playbook against your target host(s) (e.g., `ansible-playbook -i inventory.ini deploy_automation_key.yml`).
5.  Verify the key was deployed by attempting to SSH into a target host as `ansible_svc` using the private key (`ssh -i ~/.ssh/ansible_svc_key ansible_svc@your_target_ip`).

**Code Template (`deploy_automation_key.yml`):**
```yaml
---
- name: Deploy SSH key for automation user
  hosts: web_servers # Assuming you have a 'web_servers' group in your inventory
  become: true # Needed to manage users

  vars:
    automation_user: ansible_svc
    automation_public_key_path: ~/.ssh/ansible_svc_key.pub # Path on the control node

  tasks:
    - name: Ensure automation user exists
      ansible.builtin.user:
        name: "{{ automation_user }}"
        state: present

    - name: Deploy public key for automation user with restricted options
      ansible.posix.authorized_key:
        user: "{{ automation_user }}"
        state: present
        key: "{{ lookup('file', automation_public_key_path) }}"
        key_options: 'no-port-forwarding'
```

#### Assessment idea
1.  **Question:** You have a public key stored in `/tmp/new_admin_key.pub` on your Ansible control node, and you want to add it to the `admin_user` account on all your servers. Write the Ansible task to accomplish this.

    **Answer:**
    ```yaml
    - name: Add new admin public key
      ansible.posix.authorized_key:
        user: admin_user
        state: present
        key: "{{ lookup('file', '/tmp/new_admin_key.pub') }}"
    ```
    Explanation: The `ansible.posix.authorized_key` module is used. `user: admin_user` specifies the target user. `state: present` ensures the key exists. `key: "{{ lookup('file', '/tmp/new_admin_key.pub') }}"` reads the content of the public key file from the Ansible control node and provides it to the module.

2.  **Question:** An old automation key, identified by the public key string `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC... old-automation-key`, needs to be revoked for the user `old_automation_user` across all production servers. Write the Ansible task to remove this specific key.

    **Answer:**
    ```yaml
    - name: Remove old automation public key
      ansible.posix.authorized_key:
        user: old_automation_user
        state: absent
        key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC... old-automation-key"
    ```
    Explanation: Similar to adding, `state: absent` is used for removal. It's crucial to provide the *exact* public key string that needs to be removed. Ansible will then scan the `authorized_keys` file for that user and remove the matching entry.

#### AI generation note
Create an 11-minute mixed-media lesson. Start with a visual explanation of SSH key pairs and the authentication flow using diagrams. Then, switch to a live coding demonstration. First, show how to generate an SSH key pair on the control node. Next, write a playbook using `ansible.posix.authorized_key` and `lookup('file', ...)` to deploy the public key to a test user on a remote host. Demonstrate verifying access via `ssh -i`. Discuss and visually highlight the importance of correct file permissions (`~/.ssh` and `authorized_keys`). Conclude with a segment on `key_options` and a practical example of restricting key usage. The interactive element will be a drag-and-drop exercise matching SSH key components (private key, public key, authorized_keys) to their correct locations/roles.

---

### Chapter 6.4 — Implementing SELinux Policies with Ansible

#### Learning objectives
*   Understand the fundamental concepts of SELinux (modes, types, contexts, booleans).
*   Learn to manage SELinux modes (enforcing, permissive, disabled) using Ansible.
*   Automate the configuration of SELinux file contexts and booleans.
*   Identify common SELinux troubleshooting steps and how to integrate them into Ansible workflows.

#### Detailed lesson content
SELinux (Security-Enhanced Linux) is a mandatory access control (MAC) system that provides an additional layer of security beyond traditional discretionary access control (DAC) based on user and group permissions. Instead of just checking who owns a file or process, SELinux policies define how processes interact with files, network ports, and other processes based on their security context. While powerful, SELinux can be challenging to configure manually. Automating SELinux policy management with Ansible ensures consistency, reduces misconfigurations, and helps maintain a strong security posture across your Red Hat systems.

SELinux operates in three main modes: `enforcing` (enforces policies, denies access, logs actions), `permissive` (logs actions but does not deny access, useful for troubleshooting), and `disabled` (SELinux is turned off). While `disabled` might seem like an easy way out, it significantly weakens your system's security. The goal is always to run in `enforcing` mode.

Ansible provides the `ansible.posix.selinux` module to manage the SELinux mode.
```yaml
- name: Set SELinux to enforcing mode
  ansible.posix.selinux:
    state: enforcing
    policy: targeted # Common policy
```
This task sets the SELinux mode to `enforcing`. The `policy` parameter specifies the SELinux policy to use (e.g., `targeted` is the default and most common). Changes to the SELinux mode require a reboot to take full effect if switching from `disabled` to `enforcing` or vice-versa for the kernel, but runtime changes between `enforcing` and `permissive` are immediate.

The core of SELinux configuration involves managing **file contexts** and **booleans**.
**File contexts** define the type of access allowed for files and directories. For example, if you host a website from a non-standard directory like `/srv/mywebapp`, you need to ensure that the web server (e.g., Apache's `httpd`) has the correct SELinux context to read and serve files from there. The default context for web content is `httpd_sys_content_t`. You can use `ansible.posix.sefcontext` to define persistent file context rules and `ansible.builtin.command` (or `ansible.builtin.shell`) to apply them with `restorecon`.

```yaml
- name: Define SELinux context for custom web directory
  ansible.posix.sefcontext:
    target: '/srv/mywebapp(/.*)?' # Recursive context for the directory
    setype: httpd_sys_content_t
    state: present

- name: Apply SELinux context to custom web directory
  ansible.builtin.command: restorecon -Rv /srv/mywebapp
  changed_when: true # restorecon always exits 0 even if no changes
```
The `sefcontext` module defines the rule in the SELinux policy. The `restorecon` command then applies this rule to the actual files and directories. The `changed_when: true` is important because `restorecon` returns an exit code of 0 even if no changes were made, which Ansible would interpret as "no change" by default.

**SELinux booleans** are switches that enable or disable specific SELinux policy rules without requiring a full policy recompilation. They are often used to allow or deny common system behaviors, like allowing Apache to connect to network shares or allowing users to share their home directories. The `ansible.posix.seboolean` module manages these.

```yaml
- name: Allow HTTPD to connect to network (if needed)
  ansible.posix.seboolean:
    name: httpd_can_network_connect
    state: yes
    persistent: yes # Make the change persist across reboots
```
The `persistent: yes` parameter is crucial. If omitted, the boolean change will only be temporary and will revert after a reboot. Always set `persistent: yes` unless you specifically intend a temporary change.

**Troubleshooting SELinux:**
When SELinux prevents an application from functioning, you'll often see "Access Denied" messages in `/var/log/audit/audit.log` (or `journalctl -xe`). The `sealert -a /var/log/audit/audit.log` command (from the `setroubleshoot-server` package) is invaluable for interpreting these logs and suggesting solutions, often including `semanage fcontext` or `seboolean` commands that you can then translate into Ansible tasks.

**Common mistakes and safety notes:**
1.  **Disabling SELinux:** While tempting for quick fixes, disabling SELinux should be a last resort and only done temporarily for troubleshooting, never in production.
2.  **Forgetting `persistent: yes`:** For `seboolean` changes, omitting `persistent: yes` means the change won't survive a reboot.
3.  **Forgetting `restorecon`:** After defining a `sefcontext` rule, you must run `restorecon` to apply it to existing files.
4.  **Broad `sefcontext` rules:** Be as specific as possible with target paths to avoid unintended consequences.
5.  **Troubleshooting:** Learn to use `audit2allow` to generate custom SELinux policy modules, but use this as a last resort and with extreme caution, as it can weaken security if not carefully reviewed. Focus on existing booleans and contexts first.

Mastering SELinux automation is a key skill for any RHCE, ensuring your systems are both secure and functional.

#### Key concepts
*   **SELinux (Security-Enhanced Linux):** A mandatory access control (MAC) system that enforces security policies based on security contexts.
*   **SELinux Modes:**
    *   `enforcing`: Enforces policies, denies access, logs.
    *   `permissive`: Logs actions but does not deny access.
    *   `disabled`: SELinux is turned off.
*   **SELinux Context:** A label applied to processes, files, and network ports that defines their security attributes (user, role, type, sensitivity).
*   **SELinux File Context:** The type component of an SELinux context applied to files and directories (e.g., `httpd_sys_content_t`).
*   **`ansible.posix.selinux` module:** Manages the overall SELinux mode.
*   **`ansible.posix.sefcontext` module:** Defines persistent file context rules.
*   **`restorecon` command:** Applies defined SELinux file context rules to files and directories.
*   **SELinux Boolean:** A switch to enable or disable specific SELinux policy rules (e.g., `httpd_can_network_connect`).
*   **`ansible.posix.seboolean` module:** Manages SELinux booleans.
*   **`audit.log`:** The log file where SELinux denials are recorded.
*   **`sealert`:** A utility to interpret SELinux audit logs and suggest solutions.

#### Hands-on activity
**Scenario:** You are deploying a custom application that needs to write logs to `/var/log/my_app` and serve static files from `/opt/my_app/public`. By default, SELinux prevents this. You need to configure SELinux to allow these operations.

**Instructions:**
1.  Create an Ansible playbook named `configure_app_selinux.yml`.
2.  Define tasks to:
    *   Ensure the directory `/var/log/my_app` exists and has the correct SELinux type for application logs (`var_log_t`).
    *   Ensure the directory `/opt/my_app/public` exists and has the correct SELinux type for web content (`httpd_sys_content_t`).
    *   Apply these contexts using `restorecon`.
    *   Enable the `allow_execheap` boolean persistently, assuming your application requires it (this is a common boolean for certain application types, though use with caution).
3.  Run the playbook against your target host(s).
4.  Verify the SELinux contexts using `ls -Z /var/log/my_app` and `ls -Z /opt/my_app/public`.
5.  Verify the boolean status using `getsebool allow_execheap`.

**Code Template (`configure_app_selinux.yml`):**
```yaml
---
- name: Configure SELinux for custom application
  hosts: all # Or specific host group
  become: true

  tasks:
    - name: Ensure /var/log/my_app directory exists
      ansible.builtin.file:
        path: /var/log/my_app
        state: directory
        mode: '0755'

    - name: Define SELinux context for /var/log/my_app as var_log_t
      ansible.posix.sefcontext:
        target: '/var/log/my_app(/.*)?'
        setype: var_log_t
        state: present

    - name: Apply SELinux context to /var/log/my_app
      ansible.builtin.command: restorecon -Rv /var/log/my_app
      changed_when: true

    - name: Ensure /opt/my_app/public directory exists
      ansible.builtin.file:
        path: /opt/my_app/public
        state: directory
        mode: '0755'

    - name: Define SELinux context for /opt/my_app/public as httpd_sys_content_t
      ansible.posix.sefcontext:
        target: '/opt/my_app/public(/.*)?'
        setype: httpd_sys_content_t
        state: present

    - name: Apply SELinux context to /opt/my_app/public
      ansible.builtin.command: restorecon -Rv /opt/my_app/public
      changed_when: true

    - name: Enable 'allow_execheap' SELinux boolean persistently
      ansible.posix.seboolean:
        name: allow_execheap
        state: yes
        persistent: yes
```

#### Assessment idea
1.  **Question:** A web server is configured to serve content from `/web/data`. After deployment, users report "Permission Denied" errors when trying to access the site, and `audit.log` shows SELinux denials related to `httpd` and `/web/data`. The system's SELinux is in `enforcing` mode. What two Ansible tasks would you add to a playbook to resolve this issue, assuming `/web/data` should have the standard web content SELinux type?

    **Answer:**
    ```yaml
    - name: Define SELinux context for /web/data
      ansible.posix.sefcontext:
        target: '/web/data(/.*)?'
        setype: httpd_sys_content_t
        state: present

    - name: Apply SELinux context to /web/data
      ansible.builtin.command: restorecon -Rv /web/data
      changed_when: true
    ```
    Explanation: The first task uses `ansible.posix.sefcontext` to define a persistent rule that any files or directories within `/web/data` should have the `httpd_sys_content_t` SELinux type, which is appropriate for web content. The second task then uses `restorecon` to immediately apply this newly defined context to all existing files and directories under `/web/data`. This resolves the "Permission Denied" issues caused by incorrect SELinux contexts.

2.  **Question:** You need to temporarily switch a server's SELinux mode to `permissive` for troubleshooting, but you want to ensure it reverts to `enforcing` after a reboot. How would you achieve this using Ansible?

    **Answer:**
    To temporarily switch to `permissive` without making it persistent, you would use:
    ```yaml
    - name: Set SELinux to permissive mode temporarily
      ansible.posix.selinux:
        state: permissive
        policy: targeted # Or the current policy
    ```
    Explanation: The `ansible.posix.selinux` module with `state: permissive` changes the mode at runtime. By *not* specifying `selevel` or modifying `/etc/selinux/config` (which would require a reboot for full effect), this change is only effective until the next reboot. Upon reboot, the system will read its persistent configuration from `/etc/selinux/config` and revert to the `enforcing` mode, assuming that's what's configured there.

#### AI generation note
Develop a 13-minute animated video with live terminal demonstrations. Begin with an animated explanation of SELinux concepts (subject, object, type, context, policy, mode) with clear diagrams. Transition to a terminal demo showing how to check SELinux status (`sestatus`, `getenforce`). Then, perform a live coding session:
1.  Change SELinux mode to `permissive` using `ansible.posix.selinux`.
2.  Demonstrate creating a non-standard web directory, showing an `httpd` access denial in `audit.log`.
3.  Write and execute tasks to define a `sefcontext` rule for the directory and apply it with `restorecon`.
4.  Show enabling an SELinux boolean (`httpd_can_network_connect_db`) using `ansible.posix.seboolean` with `persistent: yes`.
5.  Verify changes using `ls -Z` and `getsebool`.
Include visual overlays of `audit.log` output and `sealert` suggestions. The interactive element will be a short quiz asking learners to identify the correct SELinux module for a given task (e.g., changing mode vs. setting a boolean).

---

### Chapter 6.5 — Automating Firewall Configuration (firewalld)

#### Learning objectives
*   Understand the architecture and concepts of `firewalld` (zones, services, ports, rich rules).
*   Learn to enable, disable, and manage `firewalld` using Ansible.
*   Automate the opening and closing of ports and services in `firewalld` zones.
*   Implement persistent and runtime firewall changes using Ansible.

#### Detailed lesson content
Firewalls are a critical component of network security, controlling inbound and outbound traffic to protect systems from unauthorized access. On Red Hat Enterprise Linux, `firewalld` is the default dynamic firewall management service. Unlike older `iptables` scripts, `firewalld` uses zones to manage trust levels for network interfaces and provides a more user-friendly interface for configuring rules. Automating `firewalld` configuration with Ansible ensures that your firewall policies are consistently applied across all your servers, reducing misconfigurations and enhancing overall security.

The `firewalld` service itself can be managed like any other system service using Ansible's `ansible.builtin.service` module. It's good practice to ensure `firewalld` is installed and running.

```yaml
- name: Ensure firewalld is installed and running
  ansible.builtin.package:
    name: firewalld
    state: present

- name: Start and enable firewalld service
  ansible.builtin.service:
    name: firewalld
    state: started
    enabled: yes
```

The core of `firewalld` configuration in Ansible is handled by the `ansible.posix.firewalld` module. This module allows you to manage services, ports, sources, interfaces, and rich rules within `firewalld` zones. `firewalld` operates with two configurations: `runtime` (immediate, temporary changes) and `permanent` (changes that persist across reboots). For most automation tasks, you'll want to make changes permanent.

To open a specific port for a service, you define the `port`, `zone`, `state` (present/absent), and crucially, `permanent: yes`.

```yaml
- name: Open HTTP (port 80) in the public zone permanently
  ansible.posix.firewalld:
    port: 80/tcp
    zone: public
    state: enabled
    permanent: yes
    immediate: yes # Apply immediately without reloading firewalld
```
Here, `port: 80/tcp` specifies the port and protocol. `zone: public` indicates which firewall zone this rule applies to (e.g., `public`, `internal`, `trusted`). `state: enabled` means the rule should be active. `permanent: yes` writes the rule to the permanent configuration, and `immediate: yes` applies the change to the runtime configuration without needing a full `firewalld` reload, which can briefly interrupt network connections.

Instead of ports, you can often use predefined `firewalld` services, which encapsulate common port configurations (e.g., `http`, `https`, `ssh`).

```yaml
- name: Allow SSH service in the public zone permanently
  ansible.posix.firewalld:
    service: ssh
    zone: public
    state: enabled
    permanent: yes
    immediate: yes
```

For more complex scenarios, `firewalld` offers **rich rules**, which provide fine-grained control over traffic. Rich rules allow you to specify source/destination IP addresses, protocols, ports, and actions (accept, reject, drop).

```yaml
- name: Allow specific IP to access port 5432 (PostgreSQL) in public zone
  ansible.posix.firewalld:
    rich_rule: 'rule family="ipv4" source address="192.168.1.100" port port="5432" protocol="tcp" accept'
    zone: public
    state: enabled
    permanent: yes
    immediate: yes
```
The `rich_rule` parameter takes the full rich rule string. Constructing these strings can be complex, so it's often helpful to test them manually with `firewall-cmd --permanent --add-rich-rule='...'` first.

**Common mistakes and safety notes:**
1.  **Locking Yourself Out:** The most critical mistake. Always ensure you have a fallback access method (e.g., console access, a separate management network, or a `firewalld` rule that explicitly allows your SSH connection) before making significant firewall changes. Test rules on non-critical systems first.
2.  **Forgetting `permanent: yes`:** Changes made without `permanent: yes` are only runtime and will be lost after a `firewalld` reload or system reboot.
3.  **Forgetting `immediate: yes`:** If `immediate: yes` is omitted, the change will only apply to the permanent configuration and won't take effect until `firewalld` is reloaded or the system reboots. This can lead to confusion if you're expecting immediate connectivity.
4.  **Incorrect Zones:** Applying rules to the wrong zone (e.g., applying a rule to `internal` when the interface is in `public`) will result in the rule not taking effect.
5.  **Overly Permissive Rules:** Avoid opening too many ports or using overly broad rich rules. Follow the principle of least privilege: only open what's absolutely necessary.
6.  **Conflicting Rules:** Be aware of the order and priority of rules, especially when using rich rules or multiple zones.

Automating `firewalld` with Ansible is a powerful way to enforce network security policies, but it requires careful planning and testing to avoid unintended consequences.

#### Key concepts
*   **`firewalld`:** The dynamic firewall management service on Red Hat Enterprise Linux.
*   **Zones:** Logical groupings of network interfaces or source addresses with predefined trust levels (e.g., `public`, `internal`, `trusted`).
*   **Services:** Predefined sets of ports and protocols for common applications (e.g., `ssh`, `http`, `https`).
*   **Ports:** Specific network ports and protocols (e.g., `80/tcp`, `443/tcp`).
*   **Rich Rules:** Advanced `firewalld` rules for fine-grained control, allowing specification of source/destination IPs, protocols, ports, and actions.
*   **`runtime` configuration:** Immediate, temporary `firewalld` changes.
*   **`permanent` configuration:** `firewalld` changes that persist across reboots.
*   **`ansible.posix.firewalld` module:** Ansible module for managing `firewalld` rules.
*   **`state: enabled` / `state: disabled`:** Parameters to activate or deactivate a `firewalld` rule.
*   **`immediate: yes`:** Applies `permanent` changes to the `runtime` configuration immediately without a full `firewalld` reload.

#### Hands-on activity
**Scenario:** You have a new application server that needs to allow incoming traffic on port `8080/tcp` for the application, and port `3306/tcp` for a database connection, but only from a specific management subnet `192.168.50.0/24`. All other external traffic to these ports should be blocked.

**Instructions:**
1.  Create an Ansible playbook named `configure_app_firewall.yml`.
2.  Define tasks to:
    *   Ensure `firewalld` is installed and running.
    *   Add a rich rule to the `public` zone to allow `8080/tcp` from `192.168.50.0/24`.
    *   Add a rich rule to the `public` zone to allow `3306/tcp` from `192.168.50.0/24`.
    *   Ensure both rules are `permanent` and `immediate`.
3.  Run the playbook against your target application server.
4.  Verify the rules using `firewall-cmd --list-all --zone=public`.
5.  Test connectivity from a host *within* `192.168.50.0/24` and a host *outside* that subnet to port 8080 and 3306.

**Code Template (`configure_app_firewall.yml`):**
```yaml
---
- name: Configure firewalld for application server
  hosts: app_servers # Or specific host group
  become: true

  tasks:
    - name: Ensure firewalld is installed
      ansible.builtin.package:
        name: firewalld
        state: present

    - name: Ensure firewalld service is running and enabled
      ansible.builtin.service:
        name: firewalld
        state: started
        enabled: yes

    - name: Allow app port 8080/tcp from management subnet
      ansible.posix.firewalld:
        rich_rule: 'rule family="ipv4" source address="192.168.50.0/24" port port="8080" protocol="tcp" accept'
        zone: public
        state: enabled
        permanent: yes
        immediate: yes

    - name: Allow DB port 3306/tcp from management subnet
      ansible.posix.firewalld:
        rich_rule: 'rule family="ipv4" source address="192.168.50.0/24" port port="3306" protocol="tcp" accept'
        zone: public
        state: enabled
        permanent: yes
        immediate: yes
```

#### Assessment idea
1.  **Question:** A web server needs to expose HTTPS (port 443) to the public internet. Write an Ansible task to permanently open this port in the `public` zone and apply the change immediately.

    **Answer:**
    ```yaml
    - name: Open HTTPS (port 443) in public zone
      ansible.posix.firewalld:
        port: 443/tcp
        zone: public
        state: enabled
        permanent: yes
        immediate: yes
    ```
    Explanation: The `ansible.posix.firewalld` module is used. `port: 443/tcp` specifies the port and protocol. `zone: public` targets the appropriate zone. `state: enabled` ensures the rule is active. `permanent: yes` makes the change persist across reboots, and `immediate: yes` applies it to the runtime configuration without requiring a `firewalld` reload.

2.  **Question:** You previously opened port `8000/tcp` for a testing application in the `public` zone, but the application has been decommissioned. Write an Ansible task to permanently close this port.

    **Answer:**
    ```yaml
    - name: Close port 8000/tcp in public zone
      ansible.posix.firewalld:
        port: 8000/tcp
        zone: public
        state: disabled
        permanent: yes
        immediate: yes # Or reload firewalld if many changes
    ```
    Explanation: By setting `state: disabled`, the `firewalld` module will remove the specified port rule. `permanent: yes` ensures it's removed from the persistent configuration, and `immediate: yes` removes it from the runtime configuration.

#### AI generation note
Create a 12-minute live coding video. Start with an overview of `firewalld` zones and services using a simple diagram. Then, demonstrate a playbook:
1.  Ensure `firewalld` is installed and running.
2.  Show how to open `http` service permanently in the `public` zone using `ansible.posix.firewalld` with `immediate: yes`.
3.  Demonstrate verifying the rule with `firewall-cmd --list-all`.
4.  Introduce rich rules by adding a rule to allow SSH only from a specific IP address, showing the `rich_rule` syntax.
5.  Highlight common mistakes like forgetting `permanent: yes` and the importance of `immediate: yes`.
6.  Show how to remove a rule.
Include split-screen views of the Ansible playbook, terminal output, and `firewall-cmd` verification. The interactive element will be a coding challenge to add a rule for a custom port (e.g., 9000/tcp) to a different zone (e.g., `internal`).

---

### Chapter 6.6 — Managing Network Time Protocol (NTP/Chrony) with Ansible

#### Learning objectives
*   Understand the importance of accurate system time and the role of NTP/Chrony.
*   Learn to install and configure `chrony` as an NTP client using Ansible.
*   Automate the synchronization of system time with specified NTP servers.
*   Identify best practices for `chrony` configuration and common troubleshooting steps.

#### Detailed lesson content
Accurate system time is far more critical than it might seem at first glance. It is essential for a wide range of system functions, including proper logging, secure authentication (e.g., Kerberos, certificate validity), consistent timestamps in databases, and reliable scheduling of tasks. Discrepancies in system time can lead to severe operational issues, data corruption, and security vulnerabilities. On Red Hat Enterprise Linux, `chrony` has largely replaced the older `ntpd` as the preferred network time protocol (NTP) client and server due to its better performance in intermittent network conditions, faster synchronization, and enhanced security features. Automating `chrony` configuration with Ansible ensures all your servers maintain precise time synchronization, which is vital for a robust and secure infrastructure.

The first step in automating `chrony` configuration is to ensure the `chrony` package is installed and the service is enabled and running. This can be done using the `ansible.builtin.package` and `ansible.builtin.service` modules.

```yaml
- name: Ensure chrony package is installed
  ansible.builtin.package:
    name: chrony
    state: present

- name: Ensure chronyd service is running and enabled
  ansible.builtin.service:
    name: chronyd
    state: started
    enabled: yes
```

The core configuration for `chrony` resides in the `/etc/chrony.conf` file. While you could use `ansible.builtin.lineinfile` to modify individual lines, the most robust and idempotent way to manage configuration files like `chrony.conf` is using the `ansible.builtin.template` module. This allows you to define a Jinja2 template for the configuration file, which Ansible then renders and deploys to the target host. This approach ensures the entire file matches your desired state, making it easy to manage complex configurations and include dynamic variables.

A typical `chrony.conf` template will define `server` or `pool` directives to specify NTP sources. It's good practice to use multiple NTP sources for redundancy and accuracy. You can also specify `driftfile`, `rtcsync`, and `makestep` directives.

```jinja2
# /etc/chrony.conf.j2
# Use public NTP servers from the pool.ntp.org project.
# Please consider joining the pool (https://www.pool.ntp.org/join.html).
{% for ntp_server in ntp_servers %}
server {{ ntp_server }} iburst
{% endfor %}

# Record the rate at which the system clock gains/loses time.
driftfile /var/lib/chrony/drift

# Enable kernel PPS synchronization if available.
# refclock PPS /dev/pps0 lock SYNC

# Enable real-time clock (RTC) synchronization.
rtcsync

# In first three updates with NTP server, allow step-*Common mistakes and safety notes:**
1.  **Incorrect NTP Servers:** Using unreachable or unreliable NTP servers will prevent synchronization. Always use a pool of reliable servers (e.g., `pool.ntp.org` or your organization's internal NTP servers).
2.  **Firewall Blocking NTP:** NTP uses UDP port 123. Ensure your firewall (e.g., `firewalld` from Chapter 6.5) allows outbound UDP 123 traffic to your NTP servers. If the server is also providing NTP, inbound UDP 123 must be allowed.
3.  **Forgetting to Restart Service:** Changes to `chrony.conf` require a `chronyd` restart to apply. Use a `notify` handler.
4.  **Large Time Jumps:** If a system's time is significantly off (minutes or hours), `chrony` might refuse to step the clock too aggressively to avoid issues with applications sensitive to time jumps. The `makestep` directive helps, but for very large discrepancies, manual intervention (e.g., `chronyc -s`) or a reboot might be necessary.
5.  **Security:** If running `chrony` as a server, restrict client access using `allow` directives to prevent abuse.

After configuration, you can verify synchronization status on the target host using `chronyc tracking` and `chronyc sources`. These commands provide details on the current synchronization state, reference ID, stratum, and the status of configured NTP sources.

#### Key concepts
*   **NTP (Network Time Protocol):** A networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.
*   **Chrony:** A modern implementation of NTP client and server, preferred on RHEL for its robustness and faster synchronization.
*   **`chronyd`:** The daemon that runs the `chrony` service.
*   **`/etc/chrony.conf`:** The main configuration file for `chrony`.
*   **`server` / `pool` directives:** Lines in `chrony.conf` specifying the NTP servers or pools to synchronize with.
*   **`driftfile`:** A file where `chrony` records the system clock's drift rate.
*   **`rtcsync`:** Directive to enable synchronization of the hardware real-time clock (RTC) from the system clock.
*   **`makestep`:** Directive to allow `chrony` to step the clock (make large adjustments) under certain conditions.
*   **`ansible.builtin.template` module:** Used to deploy configuration files from Jinja2 templates.
*   **`chronyc` command:** Command-line utility to monitor and control `chronyd`.

#### Hands-on activity
**Scenario:** You need to configure all your application servers to synchronize their time with a set of internal NTP servers (`ntp1.internal.local`, `ntp2.internal.local`) and also ensure the `chrony` service is running.

**Instructions:**
1.  Create a Jinja2 template file named `chrony.conf.j2` in your Ansible project directory.
2.  Populate it with the necessary `chrony` configuration, using a variable for the NTP servers.
3.  Create an Ansible playbook named `configure_chrony.yml`.
4.  Define tasks to:
    *   Ensure the `chrony` package is installed.
    *   Deploy your `chrony.conf.j2` template to `/etc/chrony.conf`.
    *   Ensure the `chronyd` service is running and enabled.
    *   Include a handler to restart `chronyd` if the configuration file changes.
5.  Define the `ntp_servers` variable in your playbook or inventory.
6.  Run the playbook against your target host(s).
7.  Verify the `chrony` status using `chronyc tracking` and `chronyc sources` on the target system.

**Code Template (`chrony.conf.j2`):**
```jinja2
# /etc/chrony.conf.j2
# Cohortia internal NTP servers
{% for server in ntp_servers %}
server {{ server }} iburst
{% endfor %}

driftfile /var/lib/chrony/drift
rtcsync
makestep 1 3
logdir /var/log/chrony
```

**Code Template (`configure_chrony.yml`):**
```yaml
---
- name: Configure chrony for time synchronization
  hosts: app_servers # Or 'all'
  become: true

  vars:
    ntp_servers:
      - ntp1.internal.local
      - ntp2.internal.local
      - 0.rhel.pool.ntp.org # Fallback public server

  tasks:
    - name: Ensure chrony package is installed
      ansible.builtin.package:
        name: chrony
        state: present

    - name: Deploy chrony configuration file
      ansible.builtin.template:
        src: chrony.conf.j2
        dest: /etc/chrony.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart chronyd

    - name: Ensure chronyd service is running and enabled
      ansible.builtin.service:
        name: chronyd
        state: started
        enabled: yes

  handlers:
    - name: Restart chronyd
      ansible.builtin.service:
        name: chronyd
        state: restarted
```

#### Assessment idea
1.  **Question:** After deploying a `chrony.conf` template with Ansible, you notice that the system is still synchronizing with the old NTP servers. What is the most likely reason for this, and how would you fix it in your Ansible playbook?

    **Answer:** The most likely reason is that the `chronyd` service was not restarted after the configuration file was updated. `chronyd` needs to be restarted to load new configurations.
    To fix this, you must ensure the `ansible.builtin.template` task notifies a handler to restart `chronyd`.
    **Fix:**
    ```yaml
    # In the tasks section:
    - name: Deploy chrony configuration file
      ansible.builtin.template:
        src: chrony.conf.j2
        dest: /etc/chrony.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart chronyd # <--- This line is crucial

    # In the handlers section:
    handlers:
      - name: Restart chronyd
        ansible.builtin.service:
          name: chronyd
          state: restarted
    ```

2.  **Question:** You need to verify if `chrony` is actively synchronizing with its configured NTP sources on a remote host. What command would you run on the target system to check this status?

    **Answer:** You would use the `chronyc tracking` command.
    ```bash
    chronyc tracking
    ```
    Explanation: `chronyc tracking` provides detailed information about the system's current time synchronization status, including the reference ID, stratum, system time offset, root delay, and the last update time. This helps confirm if `chrony` is successfully synchronizing and with which source. You could also use `chronyc sources` to see a list of configured NTP sources and their individual status.

#### AI generation note
Create a 10-minute interactive code demo. Start by explaining why accurate time is critical, using examples like logging and authentication. Show how to check current time and `chrony` status (`timedatectl`, `chronyc tracking`) on a system. Then, guide learners through writing a playbook:
1.  Install `chrony`.
2.  Create a `chrony.conf.j2` template with multiple NTP servers.
3.  Deploy the template using `ansible.builtin.template` and set up a `notify` handler to restart `chronyd`.
4.  Execute the playbook.
5.  Verify the new configuration and synchronization status using `chronyc sources` and `chronyc tracking`.
Include a visual overlay of the `chrony.conf` file and the `chronyc` output. The interactive element will be a fill-in-the-blanks exercise for the `chrony.conf.j2` template, requiring learners to add `server` entries.

---

### Chapter 6.7 — Automating Package and Software Updates

#### Learning objectives
*   Understand the importance of regular package and software updates for security and stability.
*   Learn to use Ansible's `dnf` (or `yum`) module to install, update, and remove packages.
*   Automate the management of software repositories.
*   Implement strategies for performing system-wide updates and handling security patches.

#### Detailed lesson content
Keeping systems up-to-date with the latest software packages and security patches is a cornerstone of system administration. Neglecting updates can lead to security vulnerabilities, unstable system behavior, and compatibility issues. Manually updating packages across many servers is tedious and error-prone. Ansible provides robust modules to automate package management, ensuring your Red Hat Enterprise Linux systems are consistently patched and running the desired software versions.

On RHEL 8 and newer, `dnf` is the default package manager, replacing `yum`. Ansible provides the `ansible.builtin.dnf` module (which can also act as `ansible.builtin.yum` for older RHEL versions, as `dnf` provides a `yum` compatibility layer). This module is highly versatile, allowing you to install, update, remove, and manage packages and groups of packages.

To ensure a specific package is installed, you use `name` and `state: present`. If the package is already installed, Ansible does nothing (idempotency).

```yaml
- name: Ensure httpd package is installed
  ansible.builtin.dnf:
    name: httpd
    state: present
```

To update a package to its latest available version, you can use `state: latest`. This is crucial for applying security patches.

```yaml
- name: Update httpd package to the latest version
  ansible.builtin.dnf:
    name: httpd
    state: latest
```

To perform a full system update, updating *all* installed packages to their latest versions, you can omit the `name` parameter and set `state: latest`. This is equivalent to running `dnf update -y`.

```yaml
- name: Perform a full system update
  ansible.builtin.dnf:
    name: '*' # Or omit 'name' entirely
    state: latest
    update_cache: yes # Ensure package cache is refreshed
```
The `update_cache: yes` parameter is important. It tells `dnf` to refresh the package metadata cache (equivalent to `dnf makecache`) before performing the operation. This ensures that `dnf` has the most current information about available packages and updates. Without it, `state: latest` might not pull the absolute newest versions if the cache is stale.

You can also install groups of packages, which is useful for setting up common environments (e.g., "Development Tools").

```yaml
- name: Install "Development Tools" package group
  ansible.builtin.dnf:
    name: "@Development Tools" # Note the '@' prefix for package groups
    state: present
```

Removing packages is straightforward with `state: absent`:

```yaml
- name: Remove an unwanted package
  ansible.builtin.dnf:
    name: unwanted_package
    state: absent
    autoremove: yes # Remove dependencies that are no longer needed
```
The `autoremove: yes` parameter is helpful for cleaning up orphaned dependencies.

Beyond individual packages, Ansible can also manage `dnf` repositories using the `ansible.builtin.yum_repository` (which works for `dnf` too) or `ansible.builtin.dnf_repository` modules. This is essential for adding third-party repositories or configuring internal ones.

```yaml
- name: Add EPEL repository
  ansible.builtin.dnf_repository:
    name: epel
    description: Extra Packages for Enterprise Linux
    baseurl: https://download.fedoraproject.org/pub/epel/$releasever/$basearch/
    gpgcheck: yes
    gpgkey: /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-{{ ansible_distribution_major_version }}
    enabled: yes
    state: present
```
This task adds the EPEL repository, specifying its details. After adding a new repository, it's often a good idea to run `update_cache: yes` on a subsequent `dnf` task to refresh the metadata.

**Common mistakes and safety notes:**
1.  **Not Refreshing Cache:** Forgetting `update_cache: yes` can lead to installing older package versions or missing updates.
2.  **Updating Blindly:** While automation is good, blindly running `state: latest` on production systems without testing can introduce regressions. Implement a phased rollout strategy (e.g., update dev, then staging, then production).
3.  **Repository Conflicts:** Adding too many repositories or conflicting ones can lead to dependency resolution issues. Only add trusted and necessary repositories.
4.  **Reboot Requirements:** Kernel updates or updates to critical system libraries often require a system reboot to take full effect. Your automation should account for this, possibly with a `reboot` task or by notifying administrators.
5.  **Rollback Strategy:** Always have a rollback strategy in place before major updates. This might involve snapshots or careful testing.
6.  **Package Naming:** Ensure you use the correct package names. `dnf search` or `dnf provides` can help identify them.

Automating package and software updates is a fundamental practice for maintaining a secure and reliable RHEL environment, and Ansible makes this process efficient and consistent.

#### Key concepts
*   **`dnf` (Dandified YUM):** The default package manager for RHEL 8 and later, used for installing, updating, and removing packages.
*   **`ansible.builtin.dnf` module:** Ansible module for managing packages using `dnf`.
*   **`state: present` / `state: latest` / `state: absent`:** Parameters to ensure a package is installed, updated to the newest version, or removed, respectively.
*   **`update_cache: yes`:** Parameter to refresh the package metadata cache (equivalent to `dnf makecache`).
*   **`autoremove: yes`:** Parameter to remove orphaned dependencies when removing a package.
*   **Package Groups:** Collections of related packages (e.g., `@Development Tools`) that can be installed together.
*   **Repositories:** Locations where software packages are stored and retrieved from.
*   **`ansible.builtin.dnf_repository` / `ansible.builtin.yum_repository` modules:** Ansible modules for managing `dnf` (or `yum`) repositories.
*   **EPEL (Extra Packages for Enterprise Linux):** A popular third-party repository providing additional software for RHEL.

#### Hands-on activity
**Scenario:** You need to ensure all your web servers have the `nginx` web server installed and updated to the latest version, the `php-fpm` package is installed, and the EPEL repository is enabled to access additional software.

**Instructions:**
1.  Create an Ansible playbook named `update_web_packages.yml`.
2.  Define tasks to:
    *   Ensure the EPEL repository is present and enabled.
    *   Ensure the `nginx` package is installed and at its `latest` version, refreshing the cache first.
    *   Ensure the `php-fpm` package is installed.
3.  Run the playbook against your target web servers.
4.  Verify the installation and versions of `nginx` and `php-fpm` on the target systems using `rpm -q nginx` and `rpm -q php-fpm`.
5.  Verify EPEL repository status using `dnf repolist`.

**Code Template (`update_web_packages.yml`):**
```yaml
---
- name: Manage web server packages and repositories
  hosts: web_servers # Or 'all'
  become: true

  tasks:
    - name: Ensure EPEL repository is present and enabled
      ansible.builtin.dnf_repository:
        name: epel
        description: Extra Packages for Enterprise Linux
        baseurl: https://download.fedoraproject.org/pub/epel/$releasever/$basearch/
        gpgcheck: yes
        gpgkey: /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-{{ ansible_distribution_major_version }}
        enabled: yes
        state: present

    - name: Ensure nginx is installed and updated to latest, refreshing cache
      ansible.builtin.dnf:
        name: nginx
        state: latest
        update_cache: yes # Important to get latest versions after repo changes

    - name: Ensure php-fpm is installed
      ansible.builtin.dnf:
        name: php-fpm
        state: present
```

#### Assessment idea
1.  **Question:** You want to ensure all packages on your database servers are updated to their latest available versions, and you want to make sure the package manager's cache is refreshed before doing so. Write the Ansible task to achieve this.

    **Answer:**
    ```yaml
    - name: Perform full system update on database servers
      ansible.builtin.dnf:
        name: '*' # Or omit this line entirely for a full update
        state: latest
        update_cache: yes
    ```
    Explanation: The `ansible.builtin.dnf` module is used. `name: '*'` (or omitting `name`) tells `dnf` to consider all installed packages. `state: latest` ensures they are updated to their newest versions. `update_cache: yes` is critical to refresh the package metadata from all configured repositories, ensuring `dnf` has the most current information before performing the update.

2.  **Question:** A critical security vulnerability has been identified in a specific package, `vulnerable_lib`. You need to ensure this package is immediately removed from all affected systems, along with any dependencies that are no longer needed. Write the Ansible task.

    **Answer:**
    ```yaml
    - name: Remove vulnerable_lib package and its dependencies
      ansible.builtin.dnf:
        name: vulnerable_lib
        state: absent
        autoremove: yes
    ```
    Explanation: `state: absent` instructs `dnf` to remove the specified package. `autoremove: yes` is added to automatically remove any packages that were installed as dependencies of `vulnerable_lib` and are no longer required by any other installed software, helping to clean up the system.

#### AI generation note
Create a 12-minute live coding video. Begin by explaining the importance of package updates and the role of `dnf`. Demonstrate how to check package versions (`rpm -q`) and available updates (`dnf check-update`). Then, perform a live coding session:
1.  Show how to install a new package (`htop`) using `ansible.builtin.dnf` with `state: present`.
2.  Demonstrate updating a specific package (`nginx`) to `state: latest` with `update_cache: yes`.
3.  Show a full system update using `name: '*' state: latest update_cache: yes`.
4.  Demonstrate adding the EPEL repository using `ansible.builtin.dnf_repository`.
5.  Show how to remove a package with `state: absent` and `autoremove: yes`.
Include split-screen views of the Ansible playbook, `dnf` commands, and `rpm -q` verification. Discuss common mistakes like forgetting `update_cache` and the importance of testing. The interactive element will be a short coding exercise to install a package group (e.g., "Web Server") and then verify its installation.

---

## Module 7: Advanced Ansible Features & Roles

This module delves into the more sophisticated aspects of Ansible, equipping you with the knowledge to design, implement, and manage complex automation solutions. You will learn how to structure your automation with roles, secure sensitive data, extend Ansible's capabilities, and optimize performance for large-scale deployments, culminating in integrating Ansible into modern CI/CD pipelines.

### Chapter 7.1 — Understanding and Implementing Ansible Roles

#### Learning objectives
*   Explain the purpose and benefits of using Ansible roles for structured automation.
*   Identify the standard directory structure of an Ansible role and the function of each component.
*   Create a new Ansible role using `ansible-galaxy init` and populate its essential directories.
*   Implement a playbook to apply a custom-developed Ansible role to target hosts.
*   Differentiate between role variables, playbook variables, and host/group variables in the context of roles.

#### Detailed lesson content
As you progress with Ansible automation, especially in a Red Hat Certified Engineer context, you'll find that simple playbooks can quickly become unwieldy and difficult to maintain. Imagine a playbook that configures a web server, a database, and a monitoring agent – it would be hundreds of lines long, repetitive, and hard to debug. This is where Ansible roles become indispensable. Roles provide a standardized, reusable, and self-contained way to organize your automation content. They allow you to break down complex automation tasks into logical, manageable units, promoting modularity, reusability, and easier collaboration within teams. Think of a role as a blueprint for a specific component or service, encapsulating all the necessary tasks, variables, templates, and files required to configure it.

The primary benefit of roles is their ability to enforce a consistent directory structure. When you create a role, Ansible expects specific subdirectories, each serving a distinct purpose. For instance, the `tasks` directory contains the main playbook files (e.g., `main.yml`) that define the actions to be performed. The `handlers` directory holds tasks that are only triggered when notified by other tasks, typically for service restarts or reloads. `templates` is where Jinja2 template files reside, used for generating configuration files dynamically. `files` stores static files that need to be copied to target hosts without modification. `vars` contains role-specific variables, while `defaults` provides default values for variables that can be overridden. `meta` holds metadata about the role, including dependencies and author information. This standardized structure makes it easy for anyone familiar with Ansible to understand and navigate a role, regardless of who created it.

To get started with roles, the `ansible-galaxy` command-line tool is your best friend. It's used for managing Ansible content, including creating new roles, installing roles from Ansible Galaxy (a hub for community-contributed roles), and even packaging your own roles for distribution. When you run `ansible-galaxy init my_webserver_role`, Ansible creates a new directory named `my_webserver_role` with the complete, standard role structure already in place. This saves you the effort of manually creating each subdirectory and ensures consistency. Once the structure is there, you populate the relevant directories. For example, in `my_webserver_role/tasks/main.yml`, you might define tasks to install the Nginx package, ensure the service is running, and copy a configuration file. In `my_webserver_role/templates/nginx.conf.j2`, you'd place the Nginx configuration template, possibly using Jinja2 variables to customize settings based on the target host.

Applying a role to your target hosts is straightforward. Instead of listing individual tasks in your playbook, you simply reference the role. A typical playbook might look like this:

```yaml
---
- name: Deploy web server with Nginx role
  hosts: webservers
  become: yes
  roles:
    - my_webserver_role
```

In this example, the `webservers` group in your inventory will have the `my_webserver_role` applied to them. Ansible automatically looks for the role in predefined paths (or paths specified in `ansible.cfg`), executes the `tasks/main.yml`, and then processes any handlers, templates, or files as defined within the role.

Understanding variable precedence is crucial when working with roles. Ansible has a well-defined order of precedence for variables, and roles introduce their own layers. Generally, variables defined in `defaults/main.yml` within a role have the lowest precedence, meaning they can be easily overridden. This is ideal for providing sensible defaults that users can customize. Variables in `vars/main.yml` within a role have higher precedence than defaults but can still be overridden by variables defined directly in the playbook, host variables, or group variables. The highest precedence typically comes from extra variables passed via the command line (`-e "key=value"`). A common mistake is to define a variable in `defaults` expecting it to be immutable, only to find it overridden by a group variable. Always remember that `defaults` are meant to be easily overridden, while `vars` are more specific to the role itself but still subject to higher-precedence variables. For RHCE, you must be adept at managing these variable layers to ensure your automation behaves predictably across different environments.

Another important aspect is idempotency. Roles, like all good Ansible content, should be idempotent. This means running a role multiple times should result in the same system state without causing unintended side effects after the first successful run. For instance, a task to install a package should only install it if it's not already present. If it's already installed, the task should report "ok" without making changes. This is fundamental for reliable automation and is a core principle you should adhere to when designing your roles.

#### Key concepts
*   **Ansible Role:** A standardized, reusable, and self-contained unit of automation content that organizes tasks, handlers, templates, files, and variables for a specific purpose.
*   **`ansible-galaxy`:** A command-line tool for managing Ansible content, including initializing new roles and installing roles from Ansible Galaxy.
*   **Role Directory Structure:** The predefined set of subdirectories (e.g., `tasks`, `handlers`, `templates`, `files`, `vars`, `defaults`, `meta`) that constitute an Ansible role.
*   **`defaults/main.yml`:** A file within a role that defines default variables, which have the lowest precedence and are easily overridden.
*   **`vars/main.yml`:** A file within a role that defines role-specific variables, with higher precedence than defaults but still overridable by higher-level variables.
*   **Idempotency:** The property of an Ansible task or role where running it multiple times produces the same result as running it once, without causing unintended side effects.

#### Hands-on activity
**Activity: Create and Apply a Basic Web Server Role**

1.  **Initialize a new role:**
    ```bash
    ansible-galaxy init webserver
    ```
2.  **Populate `webserver/tasks/main.yml`:**
    ```yaml
    ---
    - name: Ensure Nginx package is installed
      ansible.builtin.dnf:
        name: nginx
        state: present

    - name: Copy Nginx configuration template
      ansible.builtin.template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
      notify: Restart Nginx

    - name: Ensure Nginx service is running and enabled
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: true
    ```
3.  **Create `webserver/templates/nginx.conf.j2`:**
    ```jinja2
    user  nginx;
    worker_processes  auto;

    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;

    events {
        worker_connections  1024;
    }

    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log  main;

        sendfile        on;
        #tcp_nopush     on;

        keepalive_timeout  65;

        #gzip  on;

        include /etc/nginx/conf.d/*.conf;

        server {
            listen       {{ nginx_port | default(80) }};
            server_name  {{ ansible_hostname }};
            root         /usr/share/nginx/html;
            index        index.html index.htm;
        }
    }
    ```
4.  **Create `webserver/defaults/main.yml`:**
    ```yaml
    ---
    nginx_port: 80
    ```
5.  **Create `webserver/handlers/main.yml`:**
    ```yaml
    ---
    - name: Restart Nginx
      ansible.builtin.service:
        name: nginx
        state: restarted
      listen: "Restart Nginx" # This matches the notify in tasks
    ```
6.  **Create a playbook `deploy_web.yml` in the same directory as your `webserver` role:**
    ```yaml
    ---
    - name: Deploy web server
      hosts: webservers
      become: yes
      roles:
        - webserver
      vars:
        nginx_port: 8080 # Override default port for this playbook
    ```
7.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory deploy_web.yml
    ```
    (Ensure `webservers` is defined in your `inventory` file and points to a RHEL host.)

#### Assessment idea
1.  **Question:** You've created an Ansible role named `database` with a variable `db_port` defined in `defaults/main.yml` as `5432`. In your inventory file, for a specific host `db1`, you define `db_port: 5433`. In the playbook applying the role, you also pass an extra variable `-e "db_port=5434"`. What will be the effective value of `db_port` on `db1` when the role runs?
    *   A) `5432`
    *   B) `5433`
    *   C) `5434`
    *   D) The playbook will fail due to conflicting variable definitions.

    **Correct Answer:** C) `5434`
    **Explanation:** Ansible follows a strict variable precedence order. Extra variables passed via the command line (`-e`) have the highest precedence, overriding all other variable sources including host variables, group variables, and role defaults. Therefore, `db_port` will be `5434`.

2.  **Question:** Describe two distinct benefits of organizing Ansible automation into roles compared to using a single, monolithic playbook for all tasks. Provide a practical example for each benefit.

    **Correct Answer:**
    1.  **Modularity and Reusability:** Roles break down complex automation into smaller, self-contained units. This means a role developed for a specific component (e.g., an `apache_webserver` role) can be easily reused across multiple projects or environments without copying and pasting tasks.
        *   **Practical Example:** An `apache_webserver` role can be used to set up web servers for a development environment, a staging environment, and a production environment, simply by calling the role in different playbooks or with different variables.
    2.  **Improved Collaboration and Maintainability:** The standardized directory structure of roles makes it easier for multiple team members to work on different parts of an automation project simultaneously. It also simplifies debugging and updates, as changes to one component are isolated within its role.
        *   **Practical Example:** One team member can be responsible for maintaining the `database_server` role, while another focuses on the `application_deployment` role. If a bug is found in the database configuration, only the `database_server` role needs to be updated and tested, without impacting the application deployment logic.

#### AI generation note
Create a 12-minute interactive video tutorial. Begin by explaining the problem of complex playbooks and introduce roles as the solution. Visually demonstrate `ansible-galaxy init webserver` and then walk through populating `tasks/main.yml`, `templates/nginx.conf.j2`, `defaults/main.yml`, and `handlers/main.yml` with the provided code examples. Use a split-screen view showing the code editor on the left and a terminal on the right for `ansible-galaxy` commands. Conclude by running the `deploy_web.yml` playbook and showing Nginx running on the target host (e.g., `systemctl status nginx`, `curl localhost:8080`). Include a quick interactive quiz question about variable precedence at the 8-minute mark. Ensure captions and high-contrast visuals.

### Chapter 7.2 — Role Dependencies and Handlers

#### Learning objectives
*   Configure role dependencies within the `meta/main.yml` file to ensure proper execution order.
*   Explain the lifecycle and purpose of Ansible handlers in responding to state changes.
*   Implement `notify` statements within tasks to trigger specific handlers.
*   Design idempotent handlers that safely restart or reload services only when necessary.
*   Troubleshoot common issues related to handler notification and execution.

#### Detailed lesson content
Building upon the foundation of Ansible roles, we now explore two critical features that enhance their power and reliability: role dependencies and handlers. As your automation scales, certain roles might logically require other roles to be executed first. For instance, a `webserver` role might depend on a `firewall` role to open necessary ports, or a `database` role might need a `storage` role to provision disk space. Role dependencies, defined in the `meta/main.yml` file, allow you to specify these prerequisites, ensuring that dependent roles are run before the main role. This maintains a logical execution order and prevents failures due to missing components or configurations.

The `meta/main.yml` file is part of the standard role structure and serves as a place for metadata about your role. Besides author information and license details, it's where you define dependencies. The `dependencies` key takes a list of other roles. When a role with dependencies is called in a playbook, Ansible will first execute all its dependent roles in the specified order, and only then proceed with the tasks of the main role. This is a powerful mechanism for composing complex automation from smaller, specialized roles. For example, if your `webserver` role depends on a `common_packages` role that installs essential utilities, you'd list `common_packages` in the `webserver` role's `meta/main.yml`. When you run the `webserver` role, `common_packages` will execute first, ensuring all necessary tools are present before the web server configuration begins. A common mistake here is to create circular dependencies, where Role A depends on Role B, and Role B depends on Role A. Ansible will detect this and raise an error, so always design your dependencies as a directed acyclic graph.

Handlers, on the other hand, are special tasks that are only run when explicitly `notified` by other tasks. They are primarily used for actions that should only occur when a change has been made, such as restarting a service after its configuration file has been updated, or reloading a daemon after a new certificate is deployed. The key characteristic of handlers is that they are executed only once at the end of a play, even if multiple tasks `notify` the same handler. This ensures efficiency and prevents unnecessary restarts or reloads, which is critical for maintaining application uptime. Without handlers, you might be tempted to restart a service after every configuration file copy, even if the file hasn't changed, leading to unnecessary service interruptions.

To use handlers, you first define them in the `handlers/main.yml` file within your role. Each handler is a regular Ansible task, but it includes a special `listen` keyword that gives it a unique name. For example:

```yaml
# handlers/main.yml
---
- name: Restart Nginx
  ansible.builtin.service:
    name: nginx
    state: restarted
  listen: "restart_nginx_service" # The name tasks will notify
```

Then, in your regular tasks, you use the `notify` keyword to trigger a handler. The value of `notify` must exactly match the `listen` name of the handler:

```yaml
# tasks/main.yml
---
- name: Copy Nginx configuration template
  ansible.builtin.template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
    owner: root
    group: root
    mode: '0644'
  notify: "restart_nginx_service" # This triggers the handler
```

If the `template` task reports a change (i.e., the configuration file was actually updated), it will `notify` the "restart_nginx_service" handler. If the file was already identical, the task will report "ok" and the handler will not be notified. Ansible collects all notified handlers throughout a play and executes them at the end, in the order they were first notified, but only once per unique handler name. This "run once at the end" behavior is a cornerstone of Ansible's idempotency and efficiency.

A common pitfall with handlers is forgetting that they are only executed if a task reports a "changed" state. If your task is idempotent but doesn't correctly register a change (e.g., using `command` module without `creates` or `removes` and it always returns changed), the handler might always run. Conversely, if a task *should* notify a handler but doesn't report a change when it should (e.g., a `copy` module where the destination file is always considered "changed" even if content is identical due to permissions), the handler might not run when expected. Always test your tasks to ensure they correctly report changes. Forcing a handler to run, regardless of task changes, can be done using the `meta: flush_handlers` task, but this should be used sparingly as it bypasses the core benefit of handlers.

Safety notes for handlers: Be extremely cautious with handlers that perform destructive actions or restart critical services. Ensure your handlers are as idempotent as possible. For example, a `restarted` state for a service is generally safer than `stopped` followed by `started` in separate tasks, as `restarted` handles the service's current state more gracefully. Always test handlers in a staging environment before deploying to production. For RHCE, mastering handlers is crucial for building robust, efficient, and production-ready automation.

#### Key concepts
*   **Role Dependencies:** A mechanism to specify that one Ansible role requires another role to be executed first, defined in `meta/main.yml`.
*   **`meta/main.yml`:** A file within a role that contains metadata about the role, including author information, license, and role dependencies.
*   **Handlers:** Special tasks in Ansible that are only executed when explicitly `notified` by other tasks, typically used for actions like service restarts or reloads.
*   **`notify` keyword:** Used within a task to trigger a handler when the task reports a "changed" state.
*   **`listen` keyword:** Used within a handler definition to give it a unique name, which tasks use with `notify` to trigger it.
*   **Handler Execution:** Handlers are collected throughout a play and executed only once at the end of the play, in the order they were first notified, if they were notified at all.

#### Hands-on activity
**Activity: Implement Role Dependencies and Handlers for a Web Server**

1.  **Create a `common_packages` role:**
    ```bash
    ansible-galaxy init common_packages
    ```
2.  **Populate `common_packages/tasks/main.yml`:**
    ```yaml
    ---
    - name: Ensure common utilities are installed
      ansible.builtin.dnf:
        name:
          - vim
          - git
          - curl
        state: present
    ```
3.  **Modify your existing `webserver` role's `meta/main.yml` (from Chapter 7.1) to add a dependency:**
    ```yaml
    # webserver/meta/main.yml
    galaxy_info:
      author: Your Name
      description: An Ansible role for deploying Nginx web server.
      license: MIT

      min_ansible_version: "2.1"

      platforms:
        - name: EL
          versions:
            - "8"
            - "9"

      galaxy_tags:
        - web
        - nginx
        - http

    dependencies:
      - role: common_packages # This line adds the dependency
    ```
4.  **Ensure `webserver/tasks/main.yml` and `webserver/handlers/main.yml` are set up as in Chapter 7.1, with the `notify: "Restart Nginx"` and `listen: "Restart Nginx"` respectively.**
5.  **Create a playbook `deploy_full_stack.yml` in the same directory as your roles:**
    ```yaml
    ---
    - name: Deploy web server with dependencies and handlers
      hosts: webservers
      become: yes
      roles:
        - webserver # This will automatically pull in common_packages due to dependency
    ```
6.  **Run the playbook:**
    ```bash
    ansible-playbook -i inventory deploy_full_stack.yml
    ```
    Observe the output: the `common_packages` role should run first, followed by the `webserver` role. If you modify `webserver/templates/nginx.conf.j2` and re-run, you should see the `Restart Nginx` handler being notified and executed.

#### Assessment idea
1.  **Question:** You have an Ansible playbook that applies a role named `app_deploy`. This `app_deploy` role has a dependency on a `db_setup` role defined in its `meta/main.yml`. During a playbook run, which role's tasks will execute first, and why?
    *   A) `app_deploy` tasks will execute first, then `db_setup` tasks, because `app_deploy` is listed first in the playbook.
    *   B) `db_setup` tasks will execute first, then `app_deploy` tasks, because `db_setup` is a declared dependency.
    *   C) Both roles' tasks will execute in parallel, as Ansible optimizes for speed.
    *   D) The playbook will fail because you cannot define dependencies between roles this way.

    **Correct Answer:** B) `db_setup` tasks will execute first, then `app_deploy` tasks, because `db_setup` is a declared dependency.
    **Explanation:** When a role declares a dependency in its `meta/main.yml`, Ansible ensures that the dependent roles are executed *before* the role that declares the dependency. This guarantees that any prerequisites are met before the main role's tasks begin.

2.  **Question:** Explain the primary benefit of using an Ansible handler to restart a service (e.g., Nginx) after a configuration file change, instead of simply including a `service: name=nginx state=restarted` task directly after the `template` task.

    **Correct Answer:** The primary benefit of using an Ansible handler is **idempotency and efficiency**.
    If you include a `service: name=nginx state=restarted` task directly after the `template` task, the Nginx service would be restarted *every single time* the playbook runs, regardless of whether the configuration file actually changed. This leads to unnecessary service interruptions and wasted execution time.
    By contrast, an Ansible handler is only `notified` and executed if the preceding task (e.g., the `template` task) reports a "changed" state, meaning the configuration file was actually modified. Furthermore, if multiple tasks notify the *same* handler within a play, the handler will still only execute *once* at the end of the play. This ensures that the service is restarted only when absolutely necessary, minimizing downtime and improving the overall efficiency and reliability of your automation.

#### AI generation note
Design a 10-minute animated explainer video combined with live terminal demonstrations. Start with a clear diagram illustrating the flow of role dependencies (e.g., `webserver` role depending on `common_packages`). Then, show modifying `meta/main.yml` and running the playbook, highlighting the execution order in the terminal output. Transition to handlers, explaining their "notify and listen" mechanism with a visual metaphor (e.g., a bell ringing). Demonstrate modifying an Nginx template, running the playbook, and showing the `changed` status and handler notification/execution. Emphasize the "only once at the end of the play" behavior. Include a quick interactive multiple-choice question on handler behavior at the 7-minute mark. Ensure clear audio and visual cues for `changed` vs `ok` states.

### Chapter 7.3 — Advanced Jinja2 Templating for Dynamic Configuration

#### Learning objectives
*   Utilize Jinja2 filters to transform and manipulate data within templates.
*   Apply conditional logic (if/elif/else) within templates to generate varied configurations based on variables.
*   Implement loops (for) within templates to dynamically generate repetitive configuration blocks.
*   Access and utilize Ansible facts within templates for host-specific configurations.
*   Debug common Jinja2 templating errors, including undefined variables and syntax issues.

#### Detailed lesson content
Jinja2 templating is a cornerstone of dynamic configuration management with Ansible, allowing you to generate custom configuration files, scripts, or even entire code blocks based on variables and facts. While basic variable substitution is straightforward, the true power of Jinja2 lies in its advanced features: filters, tests, loops, and conditional statements. As an RHCE, you'll frequently encounter scenarios where static configuration files are insufficient, and you'll need to craft highly dynamic templates to cater to diverse environments and host-specific requirements.

**Filters** are functions that you can apply to variables to transform their values. They are applied using the pipe (`|`) symbol. For example, `{{ my_string | upper }}` converts a string to uppercase, and `{{ my_list | join(',') }}` joins elements of a list into a comma-separated string. More complex filters are incredibly useful for system administration. The `to_nice_json` filter, for instance, can pretty-print JSON data, which is invaluable when generating configuration files that require JSON input. The `hash('sha256')` filter can generate a SHA256 hash of a string, useful for password hashes or checksums. For network configurations, the `ipaddr` filter suite is powerful, allowing you to extract network information like `{{ ansible_default_ipv4.address | ipaddr('network') }}` to get the network address from an IP. A common mistake is forgetting that filters are applied sequentially, so `{{ my_string | lower | capitalize }}` will first lowercase the string, then capitalize only the first letter.

**Conditional logic** allows your templates to generate different output based on the value of a variable or the result of a test. The `if`, `elif`, and `else` constructs work similarly to programming languages. This is incredibly useful for creating flexible templates. Imagine a firewall rule template that needs to open different ports depending on whether the host is a web server or a database server.

```jinja2
{% if service_type == 'web' %}
listen 80;
listen 443 ssl;
{% elif service_type == 'database' %}
listen 5432;
{% else %}
# Default configuration or error
{% endif %}
```

Here, `service_type` would be an Ansible variable. **Tests** are often used within `if` statements to check conditions. For example, `{% if my_variable is defined %}` checks if a variable exists, `{% if my_list is empty %}` checks if a list is empty, or `{% if my_number is divisibleby(2) %}` checks for even numbers. These tests provide fine-grained control over template logic.

**Loops** are essential for generating repetitive configuration blocks, such as creating multiple user accounts, defining several virtual hosts, or setting up numerous firewall rules. Jinja2's `for` loop iterates over lists or dictionaries.

```jinja2
# Example: Creating multiple virtual hosts
{% for vhost in web_vhosts %}
server {
    listen {{ vhost.port }};
    server_name {{ vhost.domain }};
    root {{ vhost.docroot }};
    index index.html;
}
{% endfor %}
```

Here, `web_vhosts` would be a list of dictionaries, each containing `port`, `domain`, and `docroot` keys. Ansible's `with_items` or `loop` constructs in tasks often feed these lists directly into templates. This dynamic generation capability significantly reduces boilerplate and makes your configurations scalable.

**Ansible facts** are automatically gathered information about the target hosts (e.g., IP addresses, operating system, memory, CPU). These facts are available as variables within your templates and are invaluable for host-specific configurations. For example, `{{ ansible_default_ipv4.address }}` can be used to bind a service to a specific IP address, or `{{ ansible_distribution }}` to conditionally include distribution-specific configuration snippets. Using facts ensures that your templates adapt automatically to the characteristics of each managed node.

Debugging Jinja2 templates can sometimes be challenging. Common errors include:
*   **Undefined variables:** If you try to use a variable that hasn't been defined, Jinja2 will raise an error. Always ensure your variables are set, or use the `| default('some_value')` filter to provide a fallback.
*   **Syntax errors:** Missing `{% endfor %}` or `{% endif %}` tags, incorrect filter syntax, or mismatched braces (`{{` vs `{%`) are frequent culprits. Ansible's error messages usually point to the line number in the template.
*   **Whitespace issues:** Sometimes, unwanted blank lines or spaces appear due to control structures. The `{%-` (strip leading whitespace) and `-%}` (strip trailing whitespace) tags can help manage this. For example, `{%- for item in list -%}`.

Safety notes: When generating sensitive configurations like SSH authorized keys or database credentials, ensure that the variables containing sensitive data are handled securely (e.g., using Ansible Vault, which we'll cover next). Avoid embedding hardcoded sensitive information directly in templates. Also, be mindful of the complexity of your templates. While powerful, overly complex templates can become difficult to read and maintain. Strive for clarity and break down logic into smaller, manageable parts if necessary.

Mastering advanced Jinja2 templating is a critical skill for an RHCE, enabling you to create truly flexible, robust, and dynamic automation solutions that adapt to the nuances of any Red Hat Enterprise Linux environment.

#### Key concepts
*   **Jinja2 Templating:** A powerful templating engine used by Ansible to generate dynamic configuration files, scripts, and other text-based content.
*   **Filters:** Functions applied to variables within templates (using `|`) to transform their values (e.g., `| upper`, `| join`, `| to_nice_json`, `| hash`, `| ipaddr`).
*   **Conditional Logic (`if`/`elif`/`else`):** Control structures within templates that allow different content to be rendered based on specific conditions or variable values.
*   **Loops (`for`):** Control structures within templates that iterate over lists or dictionaries to generate repetitive blocks of content dynamically.
*   **Ansible Facts:** Automatically gathered information about target hosts (e.g., `ansible_default_ipv4.address`, `ansible_distribution`) that can be used as variables in templates.
*   **Tests:** Conditions used within `if` statements to check properties of variables (e.g., `is defined`, `is empty`, `is divisibleby`).

#### Hands-on activity
**Activity: Dynamic User and Firewall Rule Generation**

1.  **Create a new role `dynamic_config`:**
    ```bash
    ansible-galaxy init dynamic_config
    ```
2.  **Populate `dynamic_config/tasks/main.yml`:**
    ```yaml
    ---
    - name: Ensure users are created
      ansible.builtin.user:
        name: "{{ item.name }}"
        state: present
        groups: "{{ item.groups | default([]) | join(',') }}"
        shell: "{{ item.shell | default('/bin/bash') }}"
        password: "{{ item.password | default(omit) }}" # Omit if not provided
      loop: "{{ managed_users }}"
      when: managed_users is defined and managed_users | length > 0

    - name: Generate dynamic firewall rules
      ansible.builtin.template:
        src: firewall_rules.conf.j2
        dest: /etc/firewalld/rules.d/ansible-generated.xml
        owner: root
        group: root
        mode: '0644'
      notify: Reload firewalld
    ```
3.  **Create `dynamic_config/templates/firewall_rules.conf.j2`:**
    ```jinja2
    {# This template generates firewalld rich rules based on variables #}
    <rule family="ipv4">
    {% for rule in firewall_rules %}
      {% if rule.state == 'present' %}
      <rule>
        <source address="{{ rule.source_ip | default('0.0.0.0/0') }}"/>
        <port port="{{ rule.port }}" protocol="{{ rule.protocol | default('tcp') }}"/>
        <accept/>
      </rule>
      {% endif %}
    {% endfor %}
    </rule>
    ```
4.  **Create `dynamic_config/handlers/main.yml`:**
    ```yaml
    ---
    - name: Reload firewalld
      ansible.builtin.command: firewall-cmd --reload
      listen: "Reload firewalld"
    ```
5.  **Create a playbook `apply_dynamic_config.yml` in the same directory as your role:**
    ```yaml
    ---
    - name: Apply dynamic configurations
      hosts: all
      become: yes
      roles:
        - dynamic_config
      vars:
        managed_users:
          - name: devuser1
            groups: ['wheel', 'users']
            shell: /bin/bash
          - name: opsuser
            groups: ['users']
            shell: /bin/bash
            password: "$6$rounds=656000$hQ.1.6f3.X.Q.s.T$y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.T.y.X.Q.s.

### Chapter 7.4 — Advanced Error Handling and Debugging in Ansible

#### Learning objectives
*   Implement conditional error handling using `failed_when` and `changed_when` to customize task outcomes.
*   Utilize `ignore_errors` and `block/rescue/always` constructs for robust playbook execution and graceful failure management.
*   Master Ansible's debugging tools, including verbosity levels, `ansible-playbook --step`, and the interactive debugger.
*   Identify common pitfalls in Ansible error handling and apply best practices to prevent unexpected playbook behavior.

#### Detailed lesson content
Even the most meticulously crafted Ansible playbooks can encounter unexpected issues during execution. These issues might stem from network glitches, incorrect permissions, unexpected system states on target hosts, or even subtle bugs in your own automation logic. Robust error handling is paramount for ensuring your automation is reliable, resilient, and predictable, especially in production environments. Without proper error handling, a single failed task could halt an entire deployment, leaving your infrastructure in an inconsistent state.

Ansible provides several mechanisms to manage errors gracefully. One fundamental concept is idempotency, which means running a playbook multiple times should yield the same result without causing unintended side effects. However, even idempotent tasks can report failures or changes that need specific handling. The `failed_when` directive allows you to define custom conditions under which a task should be considered a failure, even if the underlying command or module technically succeeded. For instance, if you're checking a service status and it returns "not running," you might want that to be a failure in your playbook, even though the `command` module itself executed without error. Similarly, `changed_when` lets you control when a task is reported as "changed," which is crucial for accurate reporting and for preventing unnecessary subsequent tasks that depend on actual changes. If a task always reports "changed" but doesn't actually alter the system, it can lead to confusion and inefficient automation.

Consider a scenario where you're running a shell command that might return a non-zero exit code for a perfectly valid, non-error condition. For example, checking if a package is *not* installed. A command like `dpkg -s mypackage` will exit with 1 if `mypackage` is not installed. If your goal is to ensure it's *not* there, a non-zero exit code is actually a success for your logic. In such cases, you can combine `failed_when` with the `rc` (return code) variable to override Ansible's default failure detection. You can also inspect the `stdout` or `stderr` of a command for specific keywords to determine success or failure. For example, if a script outputs "ERROR" but exits with 0, you can use `failed_when: "'ERROR' in result.stdout"`.

```yaml
- name: Check if a specific service is running (and fail if not)
  ansible.builtin.command: systemctl is-active my_critical_service
  register: service_status
  failed_when: service_status.rc != 0 or 'inactive' in service_status.stdout
  changed_when: false # This task only checks, doesn't change anything
  tags: [ 'error_handling' ]

- name: Ensure a package is NOT installed (custom success condition)
  ansible.builtin.shell: dpkg -s unwanted-package > /dev/null 2>&1
  register: pkg_check
  failed_when: pkg_check.rc == 0 # Fail if the package IS installed
  changed_when: false
  tags: [ 'error_handling' ]
```

Sometimes, you might encounter tasks that are known to be flaky or where a failure is acceptable, perhaps because a subsequent task will rectify the situation. For these cases, `ignore_errors: true` can be applied to a task. While convenient, use this with caution. Blindly ignoring errors can mask critical issues and lead to an unstable system state. It's generally better to handle specific error conditions rather than broadly ignoring all failures. A more structured approach for handling errors is the `block`, `rescue`, and `always` structure. This construct is similar to `try-catch-finally` in programming languages. Tasks within a `block` are executed normally. If any task within the `block` fails, control is transferred to the `rescue` section, where you can define tasks to run to recover from the error, log the failure, or send notifications. The `always` section, if present, will run regardless of whether the `block` succeeded or failed, making it ideal for cleanup operations like releasing locks or ensuring services are in a known state.

```yaml
- name: Attempt to configure a service with rollback
  block:
    - name: Stop the service
      ansible.builtin.service:
        name: my_app_service
        state: stopped

    - name: Deploy new configuration
      ansible.builtin.copy:
        src: files/new_config.conf
        dest: /etc/my_app_service/config.conf
      notify: restart my_app_service

    - name: Start the service
      ansible.builtin.service:
        name: my_app_service
        state: started

  rescue:
    - name: Log configuration failure
      ansible.builtin.debug:
        msg: "Failed to deploy new configuration for my_app_service on {{ inventory_hostname }}. Attempting rollback."

    - name: Revert to old configuration (if backup exists)
      ansible.builtin.copy:
        src: files/old_config.conf
        dest: /etc/my_app_service/config.conf
        remote_src: true # Assuming old_config.conf is on the remote host
      ignore_errors: true # Don't fail if old config doesn't exist

    - name: Ensure service is stopped if rollback failed
      ansible.builtin.service:
        name: my_app_service
        state: stopped
      when: ansible_failed_result is defined and ansible_failed_result.failed # Only if previous rescue task failed

  always:
    - name: Send notification about deployment status
      ansible.builtin.debug:
        msg: "Deployment attempt for my_app_service on {{ inventory_hostname }} completed."
      # In a real scenario, this would be a notification module (e.g., mail, slack)
```

When errors do occur, effective debugging is essential. Ansible provides several tools to help you pinpoint the root cause. The most common is increasing verbosity using the `-v`, `-vv`, `-vvv`, or even `-vvvv` flags with `ansible-playbook`. `-v` shows changed tasks, `-vv` adds more output, `-vvv` shows module arguments and more detailed output, and `-vvvv` adds connection debugging. This output can reveal exactly what commands Ansible is executing, the arguments passed to modules, and the raw output from remote hosts, which is invaluable for diagnosing issues.

For interactive debugging, `ansible-playbook --step` is incredibly useful. This flag prompts you before executing each task, allowing you to decide whether to run it, skip it, or even enter an interactive shell on the target host to inspect the environment manually. This is particularly helpful when you're unsure about the state of a system or the exact impact of a task. Another related option is `--start-at-task "Task Name"`, which allows you to resume a playbook from a specific task, saving time during development and testing by not re-running already successful tasks.

Finally, Ansible includes an interactive debugger that can be invoked when a task fails. You can enable it by setting the `ANSIBLE_DEBUGGER` environment variable to `on_failed` or `always`, or by using the `debugger` keyword in your playbook. When a task fails, Ansible will drop you into an interactive Python shell where you can inspect variables, re-run tasks with different parameters, or even skip the task. This is a powerful tool for live troubleshooting and understanding the exact state of variables at the point of failure.

```yaml
# To enable the debugger for a specific task or globally
- name: Task that might fail
  ansible.builtin.command: /usr/bin/non_existent_command
  register: result
  # debugger: on_failed # Can be set here or via ANSIBLE_DEBUGGER env var
```
To use the debugger: `ANSIBLE_DEBUGGER=on_failed ansible-playbook your_playbook.yml`. When a task fails, you'll see a prompt like `(Pdb)`. Here, you can type `p result` to print the registered variable, `n` to go to the next task, `r` to retry the current task, or `q` to quit.

Common mistakes include relying too heavily on `ignore_errors: true` without understanding the implications, not using `failed_when` to correctly interpret command outputs, and neglecting to test error paths in playbooks. Always consider how your playbook will behave when things go wrong, not just when they go right. Safety notes: Be careful when using `--step` or the debugger in production environments, as pausing execution can impact service availability. Always test your error handling strategies thoroughly in a development or staging environment before deploying to production.

#### Key concepts
*   **`failed_when`**: A task directive that allows you to define custom conditions (based on registered variables, return codes, stdout, etc.) under which a task should be marked as failed.
*   **`changed_when`**: A task directive that allows you to define custom conditions under which a task should be marked as "changed," overriding Ansible's default detection.
*   **`ignore_errors`**: A task directive that prevents Ansible from stopping playbook execution if the task fails. Use with caution.
*   **`block` / `rescue` / `always`**: A structured error handling construct similar to `try-catch-finally`, allowing you to define a block of tasks, tasks to run on failure (`rescue`), and tasks to run regardless of success or failure (`always`).
*   **Ansible Debugger**: An interactive tool that allows you to inspect variables and control playbook flow at the point of failure, enabling live troubleshooting.
*   **Verbosity (`-v`, `-vvv`)**: Command-line flags used with `ansible-playbook` to increase the amount of output, providing more details about task execution and module arguments.
*   **`--step`**: A command-line flag for `ansible-playbook` that prompts you before executing each task, allowing for interactive control and inspection.
*   **`--start-at-task`**: A command-line flag for `ansible-playbook` that allows you to begin playbook execution from a specified task, useful for resuming failed runs or testing specific sections.

#### Hands-on activity
**Scenario:** You need to ensure a specific system utility (`htop`) is present on your managed nodes. However, your playbook should gracefully handle cases where the package manager might temporarily fail or where the package is already installed, and you want to log specific messages based on the outcome.

**Instructions:**
1.  Create a playbook named `debug_and_error_handling.yml`.
2.  Include a task that attempts to install `htop`.
3.  Add `ignore_errors: true` to this installation task to prevent immediate playbook failure.
4.  Following the installation task, add a `block/rescue/always` structure.
    *   In the `block`, include a task that checks if `htop` is installed (e.g., using `command: which htop`).
    *   Use `failed_when` on this `which htop` task to explicitly fail if `htop` is *not* found.
    *   In the `rescue` section, include a `debug` task that prints a message indicating `htop` installation failed or was not found.
    *   In the `always` section, include a `debug` task that prints a message indicating the completion of the `htop` check/installation attempt.
5.  Run the playbook with varying verbosity (`-v`, `-vvv`) and then use `--step` to walk through it.
6.  (Optional but recommended for deeper understanding): Intentionally make the installation task fail (e.g., by providing an invalid package name or breaking the package manager temporarily) and observe the `rescue` block's execution. Then try using the debugger.

**Code Template (`debug_and_error_handling.yml`):**
```yaml
---
- name: Demonstrate advanced error handling and debugging
  hosts: all
  become: true
  tasks:
    - name: Ensure htop is installed (ignoring initial errors)
      ansible.builtin.package:
        name: htop
        state: present
      register: htop_install_result
      ignore_errors: true # Temporarily ignore errors for demonstration

    - name: Verify htop installation and handle outcomes
      block:
        - name: Check if htop executable exists
          ansible.builtin.command: which htop
          register: which_htop_result
          failed_when: which_htop_result.rc != 0
          changed_when: false
          # debugger: on_failed # Uncomment to enable debugger on failure for this task

        - name: Htop is successfully installed and found
          ansible.builtin.debug:
            msg: "SUCCESS: htop is installed and found at {{ which_htop_result.stdout }}"
          when: which_htop_result.rc == 0

      rescue:
        - name: Handle htop installation failure or not found
          ansible.builtin.debug:
            msg: "WARNING: htop was not found or installation failed. Details: {{ htop_install_result | default({}) }}"
          when: htop_install_result is defined and htop_install_result.failed

        - name: Htop was not found after initial check
          ansible.builtin.debug:
            msg: "ERROR: 'which htop' command failed. Htop might not be installed or path is incorrect."
          when: which_htop_result is defined and which_htop_result.failed

      always:
        - name: Final status message for htop check
          ansible.builtin.debug:
            msg: "Htop installation/verification attempt completed on {{ inventory_hostname }}."
```

#### Assessment idea

**Question 1:** You have an Ansible playbook task that executes a shell script. This script is designed to return an exit code of `0` on success, `1` if a minor issue occurred but the operation completed, and `2` if a critical error prevented completion. You want Ansible to consider the task a failure only if the script returns `2`. If it returns `0` or `1`, it should be considered successful. How would you configure the `failed_when` directive for this task?

**Correct Answer 1:**
```yaml
- name: Run script with custom failure logic
  ansible.builtin.shell: /path/to/your/script.sh
  register: script_output
  failed_when: script_output.rc == 2
```
**Explanation:** The `failed_when` directive evaluates a conditional expression. Ansible automatically registers the return code of shell/command tasks in the `rc` variable of the registered result. By setting `failed_when: script_output.rc == 2`, we instruct Ansible to mark this task as "failed" only when the return code is exactly `2`. For `0` or `1`, the task will be considered successful by Ansible.

**Question 2:** Describe a scenario where using `ignore_errors: true` would be appropriate, and explain why the `block/rescue/always` construct might be a more robust alternative for similar situations.

**Correct Answer 2:**
**Scenario for `ignore_errors: true`:** A suitable scenario for `ignore_errors: true` might be a task that attempts to remove a temporary file or directory that might not always exist. For example, `ansible.builtin.file: path=/tmp/my_temp_dir state=absent`. If the directory doesn't exist, the `rmdir` command (which Ansible might use internally) would typically fail, but this failure is benign and doesn't prevent the playbook from continuing. Ignoring the error here is acceptable because the desired end state (directory absent) is achieved regardless.

**Why `block/rescue/always` is more robust:** While `ignore_errors: true` simply bypasses the failure, `block/rescue/always` provides a structured way to *react* to failures.
*   **`block`**: Contains the primary tasks that are expected to succeed.
*   **`rescue`**: Allows you to define specific recovery or cleanup tasks that *only run if a task in the `block` fails*. This enables you to log the error, attempt a rollback, notify administrators, or try an alternative approach.
*   **`always`**: Ensures certain tasks (e.g., releasing locks, re-enabling services, sending final status notifications) run regardless of whether the `block` succeeded or failed.

This structure provides much finer control over error handling, allowing for graceful degradation, recovery, and consistent cleanup, which `ignore_errors: true` cannot achieve. `ignore_errors` should be reserved for truly non-critical failures where no specific action is needed other than continuing the playbook.

---

### Chapter 7.5 — Ansible Vault for Sensitive Data Management

#### Learning objectives
*   Understand the necessity of Ansible Vault for securing sensitive information within automation workflows.
*   Perform basic Ansible Vault operations: creating, editing, viewing, encrypting, and decrypting files and strings.
*   Integrate vaulted variables and files into Ansible playbooks and roles effectively.
*   Implement best practices for managing vault passwords and securing sensitive data in a team environment.

#### Detailed lesson content
In any automation workflow, dealing with sensitive data like passwords, API keys, private SSH keys, and database credentials is an unavoidable reality. Storing such information directly in plain text within your playbooks or inventory files is a severe security risk, especially when these files are committed to version control systems like Git. Anyone with access to your repository could potentially compromise your systems. This is precisely where Ansible Vault comes into play. Ansible Vault is a powerful feature that allows you to encrypt sensitive data at rest, making it unreadable without the correct password. When your playbooks run, Ansible uses the provided vault password to decrypt the data in memory, use it, and then discard it, ensuring that sensitive information is never exposed in plain text on disk or in logs.

The core of Ansible Vault is symmetric encryption, meaning the same password is used for both encryption and decryption. This password is the critical piece of the puzzle, and its secure management is paramount. You can encrypt entire files, specific variables within a file, or even individual strings.

Let's start with the basic operations. To create a new encrypted file, you use `ansible-vault create <filename>`. Ansible will prompt you for a new vault password and then open the file in your default editor. Anything you type into this file will be encrypted when you save and exit. For example, `ansible-vault create group_vars/all/vault.yml` would create an encrypted YAML file for all hosts.

```bash
ansible-vault create group_vars/all/vault.yml
# New Vault password: [type your password]
# Confirm New Vault password: [type your password again]
# (Opens editor, e.g., vi or nano)
# Add your sensitive variables:
# db_password: MySuperSecretDBPassword
# api_key: abcdef1234567890
# Save and exit.
```

Once created, you can view the encrypted content using `ansible-vault view <filename>` and edit it with `ansible-vault edit <filename>`. Both commands will prompt you for the vault password to decrypt the file temporarily for viewing or editing. To encrypt an existing plain-text file, use `ansible-vault encrypt <filename>`. This is useful if you accidentally created a sensitive file in plain text and need to secure it. Conversely, `ansible-vault decrypt <filename>` will turn an encrypted file back into plain text (use this with extreme caution!).

You can also encrypt individual strings for use directly in a playbook or `vars` file. The command `ansible-vault encrypt_string 'mysecretvalue'` will prompt for a vault password and then output an encrypted string in a YAML-compatible format. This is handy for small, isolated secrets.

```bash
ansible-vault encrypt_string 'mysecretvalue' --name 'my_secret_variable'
# New Vault password:
# Confirm New Vault password:
#
# my_secret_variable: !vault |
#   $ANSIBLE_VAULT;1.1;AES256
#   31303866343534343834316631333330366631653835633336336637383238613437363630663462
#   ... (long encrypted string)
```
You would then copy this entire block, including `my_secret_variable: !vault |`, into your `vars` file or playbook.

Integrating vaulted data into your playbooks is straightforward. Ansible automatically looks for `vault.yml` files within `group_vars` and `host_vars` directories. If you've encrypted a file named `group_vars/all/vault.yml`, Ansible will attempt to decrypt it when needed, provided it has access to the vault password. For other encrypted files, you can explicitly include them using `vars_files` or `include_vars`:

```yaml
- name: Deploy application with sensitive credentials
  hosts: webservers
  vars_files:
    - group_vars/all/vault.yml   # Ansible will automatically try to decrypt this
    - secret_api_keys.yml        # If this is encrypted, Ansible will attempt decryption
  tasks:
    - name: Configure database connection
      ansible.builtin.template:
        src: templates/db_config.j2
        dest: /etc/app/db_config.conf
      vars:
        db_user: "{{ db_username }}" # db_username could come from vault.yml
        db_pass: "{{ db_password }}" # db_password could come from vault.yml

    - name: Set API key in environment
      ansible.builtin.lineinfile:
        path: /etc/profile.d/app_vars.sh
        line: "export APP_API_KEY={{ api_key }}" # api_key from vault.yml or secret_api_keys.yml
        create: true
        mode: '0644'
```

The crucial part is providing Ansible with the vault password at runtime. There are several ways to do this, each with its own security implications:
1.  **Command-line prompt:** `ansible-playbook --ask-vault-pass my_playbook.yml`. This is interactive and suitable for manual runs.
2.  **Vault password file:** `ansible-playbook --vault-password-file /path/to/vault_pass.txt my_playbook.yml`. This is the most common and recommended approach for automated systems. The `vault_pass.txt` file should contain *only* the vault password and must be secured with strict file permissions (e.g., `chmod 0600`). It should *never* be committed to version control.
3.  **Environment variable:** `ANSIBLE_VAULT_PASSWORD_FILE=/path/to/vault_pass.txt ansible-playbook my_playbook.yml`. Similar to the file option, but uses an environment variable.
4.  **`ansible.cfg`:** You can specify `vault_password_file = /path/to/vault_pass.txt` in your `ansible.cfg` file. This makes it automatic for all playbooks run from that configuration.

For team environments and more complex scenarios, Ansible Vault supports **Vault IDs**. This allows you to encrypt different files with different passwords, each identified by a unique ID. For example, you might have a `dev` vault and a `prod` vault, each with its own password.
`ansible-vault encrypt --vault-id dev@prompt dev_secrets.yml`
`ansible-vault encrypt --vault-id prod@/path/to/prod_pass.txt prod_secrets.yml`
When running a playbook, you can specify multiple vault IDs: `ansible-playbook --vault-id dev@prompt --vault-id prod@/path/to/prod_pass.txt my_playbook.yml`.

**Common mistakes and safety notes:**
*   **Hardcoding passwords:** The most common mistake is avoiding Vault altogether and embedding plain-text passwords. Don't do it!
*   **Losing the vault password:** If you lose your vault password, your encrypted data is irrecoverable. Back up your vault passwords securely.
*   **Committing `vault_pass.txt` to Git:** The file containing your vault password should *never* be committed to version control. Use `.gitignore` to exclude it.
*   **Incorrect file permissions:** Ensure your `vault_pass.txt` file has restrictive permissions (e.g., `chmod 0600 vault_pass.txt`) so only the owner can read it.
*   **Over-encrypting:** Not everything needs to be in the vault. Only truly sensitive data. Encrypting non-sensitive configuration adds unnecessary overhead.
*   **Exposing decrypted data:** While Ansible decrypts in memory, be careful not to accidentally print sensitive variables to logs using `debug` tasks without proper filtering. Use `no_log: true` on tasks that handle sensitive data if you're concerned about log exposure.

By diligently using Ansible Vault and following these best practices, you can significantly enhance the security posture of your automation, making your RHCE automation tasks more robust and compliant.

#### Key concepts
*   **Ansible Vault**: A feature within Ansible that allows for encrypting sensitive data (passwords, API keys, etc.) at rest, making it unreadable without a vault password.
*   **Symmetric Encryption**: The same password is used for both encrypting and decrypting the data.
*   **`ansible-vault create`**: Command to create a new encrypted file.
*   **`ansible-vault edit`**: Command to edit an existing encrypted file.
*   **`ansible-vault view`**: Command to view the decrypted content of an encrypted file.
*   **`ansible-vault encrypt`**: Command to encrypt an existing plain-text file.
*   **`ansible-vault decrypt`**: Command to decrypt an encrypted file back to plain text.
*   **`ansible-vault encrypt_string`**: Command to encrypt an individual string, useful for embedding directly into playbooks or `vars` files.
*   **`--ask-vault-pass`**: Command-line flag to prompt for the vault password during playbook execution.
*   **`--vault-password-file`**: Command-line flag to specify a file containing the vault password, recommended for automation.
*   **Vault IDs**: A feature allowing multiple vault files to be encrypted with different passwords, each identified by a unique ID, useful for managing secrets across different environments (e.g., dev, prod).
*   **`no_log: true`**: A task directive that prevents sensitive task output from being logged, enhancing security.

#### Hands-on activity
**Scenario:** You need to deploy an application that requires a database password and an API key. These credentials must be securely stored and never appear in plain text in your Git repository.

**Instructions:**
1.  Create a directory structure for your Ansible project:
    ```
    my_secure_app/
    ├── inventory
    │   └── hosts
    ├── group_vars
    │   └── all
    │       └── vault.yml
    └── playbooks
        └── deploy_app.yml
    ```
2.  Create a plain `inventory/hosts` file with at least one target host (e.g., `localhost`).
    ```ini
    [all]
    localhost ansible_connection=local
    ```
3.  Use `ansible-vault create group_vars/all/vault.yml` to create an encrypted file. When prompted, set a strong password (remember it!).
4.  Inside `group_vars/all/vault.yml` (which will open in your editor after `ansible-vault create`), add the following sensitive variables:
    ```yaml
    db_password: SuperSecretDbPass123!
    app_api_key: abcdef1234567890abcdef1234567890
    ```
    Save and exit the editor.
5.  Create a `playbooks/deploy_app.yml` playbook that uses these vaulted variables. For demonstration, we'll just print them using `debug` (but in a real scenario, you'd use them in templates or module arguments).
    ```yaml
    ---
    - name: Deploy secure application components
      hosts: all
      tasks:
        - name: Display database password (for demonstration, use with no_log in production)
          ansible.builtin.debug:
            msg: "Database Password: {{ db_password }}"
          # In a real scenario, you'd use no_log: true here or avoid printing secrets

        - name: Display API key (for demonstration, use with no_log in production)
          ansible.builtin.debug:
            msg: "Application API Key: {{ app_api_key }}"
          # In a real scenario, you'd use no_log: true here or avoid printing secrets

        - name: Simulate configuration file creation with sensitive data
          ansible.builtin.copy:
            content: |
              [database]
              password={{ db_password }}
              [api]
              key={{ app_api_key }}
            dest: /tmp/app_config.conf
            mode: '0600'
          # This task itself does not log the content, but the file on target host contains it.
          # Ensure appropriate permissions on the destination file.
    ```
6.  Run the playbook, providing the vault password via `--ask-vault-pass`:
    `ansible-playbook -i inventory/hosts playbooks/deploy_app.yml --ask-vault-pass`
7.  Observe that Ansible prompts for the password and then successfully uses the decrypted variables.
8.  (Optional): Create a `vault_pass.txt` file (e.g., in `/tmp/vault_pass.txt`) containing *only* your vault password. Set its permissions to `chmod 0600 /tmp/vault_pass.txt`. Then run the playbook using `--vault-password-file /tmp/vault_pass.txt`.

#### Assessment idea

**Question 1:** You have a file named `prod_credentials.yml` containing sensitive production database credentials in plain text. You need to encrypt this file and integrate it into your Ansible playbooks. After encryption, how would you ensure that Ansible can decrypt and use these variables during playbook execution without prompting for a password every time, assuming the vault password is stored in `/opt/ansible/vault_key.txt`?

**Correct Answer 1:**
First, encrypt the existing plain-text file:
```bash
ansible-vault encrypt prod_credentials.yml
# You will be prompted to enter and confirm the vault password.
```
Next, ensure the `/opt/ansible/vault_key.txt` file exists and contains *only* the vault password, with appropriate permissions (e.g., `chmod 0600 /opt/ansible/vault_key.txt`).
To integrate and run the playbook without prompting, you would use the `--vault-password-file` argument:
```bash
ansible-playbook -i inventory/hosts my_playbook.yml --vault-password-file /opt/ansible/vault_key.txt
```
Alternatively, you could configure this in `ansible.cfg` for automatic use:
```ini
# ansible.cfg
[defaults]
vault_password_file = /opt/ansible/vault_key.txt
```
**Explanation:** `ansible-vault encrypt` converts the plain-text file into an encrypted one. The `--vault-password-file` flag (or `vault_password_file` in `ansible.cfg`) tells Ansible where to find the vault password, allowing it to automatically decrypt any vaulted files or strings it encounters during playbook execution.

**Question 2:** Explain the security implications of using `ansible.builtin.debug: msg="{{ sensitive_variable }}"` in a playbook that uses Ansible Vault, and suggest a safer alternative for handling sensitive output during debugging or logging.

**Correct Answer 2:**
**Security Implications:** When `ansible.builtin.debug: msg="{{ sensitive_variable }}"` is used, even if `sensitive_variable` comes from an Ansible Vault-encrypted file, Ansible will decrypt it in memory and then print its plain-text value to the console and potentially to logs (e.g., `syslog`, `journald`, CI/CD pipeline logs). This defeats the purpose of Ansible Vault, as the sensitive information becomes exposed in plain text in the execution output, which could be viewed by unauthorized individuals or stored in insecure log systems.

**Safer Alternative:** The safer alternative is to use the `no_log: true` directive on the task that handles or processes the sensitive variable. This prevents Ansible from logging the task's output, including any arguments or registered variables, to the console or log files.
For example:
```yaml
- name: Process sensitive data securely
  ansible.builtin.shell: "echo '{{ sensitive_variable }}' | some_command_that_uses_it"
  no_log: true # Prevents the command and its output from being logged

- name: Debug a task without exposing sensitive data
  ansible.builtin.debug:
    msg: "Task completed successfully, sensitive data processed."
  # Do NOT include the sensitive variable directly in the msg
  # If you absolutely need to verify a sensitive variable during development,
  # do it in a secure, isolated environment and remove the debug task before production.
```
Additionally, ensure that any files created or modified with sensitive data have appropriate restrictive file permissions (e.g., `mode: '0600'`) to prevent unauthorized access on the target host.

---

### Chapter 7.6 — Scaling Ansible with Collections, Dynamic Inventory, and Performance Tuning

#### Learning objectives
*   Understand the purpose and benefits of Ansible Collections for modularity and content distribution.
*   Install and utilize Ansible Collections to extend Ansible's capabilities.
*   Implement dynamic inventory to manage hosts in ephemeral or cloud environments.
*   Apply various performance tuning techniques to optimize Ansible playbook execution for large-scale deployments.

#### Detailed lesson content
As your infrastructure grows and your automation needs become more complex, managing Ansible content and ensuring efficient execution becomes increasingly important. Ansible provides powerful features like Collections, Dynamic Inventory, and various performance tuning options to help you scale your automation effectively.

**Ansible Collections** are the modern way to package and distribute Ansible content. Before Collections, roles, modules, and plugins were often distributed separately or bundled in ways that could lead to dependency issues. Collections provide a standardized, versioned structure to bundle all types of Ansible content (roles, modules, plugins, playbooks, documentation) into a single, shareable unit. This modularity makes it easier to manage dependencies, share content across teams, and consume content from the broader Ansible community or third-party vendors. For example, cloud providers often release their Ansible modules and plugins as Collections, simplifying the automation of their services.

To use a Collection, you first need to install it using `ansible-galaxy collection install <collection_name>`. For instance, `ansible-galaxy collection install community.general` installs a widely used collection containing many general-purpose modules and plugins. Once installed, you can refer to content within a collection using its fully qualified collection name (FQCN), like `community.general.ini_file` instead of just `ini_file`. This explicit naming prevents conflicts and makes your playbooks more readable and maintainable. You can also define `collections:` at the top of your playbook or role to specify a list of collections to search, allowing you to use shorter names for modules from those collections.

```yaml
---
- name: Example playbook using an Ansible Collection
  hosts: localhost
  collections:
    - community.general # Specify the collection to use
  tasks:
    - name: Ensure an INI file section exists
      community.general.ini_file: # Using FQCN or short name if 'collections' is defined
        path: /tmp/my_config.ini
        section: database
        option: host
        value: db.example.com
        state: present
```

**Dynamic Inventory** is another critical feature for scaling Ansible. In traditional, static inventory files, you manually list all your hosts. This becomes impractical in dynamic environments like cloud platforms (AWS, Azure, GCP), virtualized infrastructure (VMware), or container orchestration systems (Kubernetes), where hosts are frequently provisioned, de-provisioned, or change their IP addresses. Dynamic inventory allows Ansible to query an external source (like a cloud API, a CMDB, or a custom script) at runtime to get an up-to-date list of hosts and their variables.

Ansible provides numerous inventory plugins for common cloud providers. For example, to use the AWS EC2 inventory plugin, you would typically configure it in an `aws_ec2.yml` file:
```yaml
# aws_ec2.yml
plugin: amazon.aws.aws_ec2
regions:
  - us-east-1
filters:
  tag:Environment: production
  instance-state-name: running
keyed_groups:
  - key: tags.Name
    prefix: tag_Name_
  - key: tags.Role
    prefix: tag_Role_
```
Then, you would run your playbook referencing this file: `ansible-playbook -i aws_ec2.yml my_playbook.yml`. Ansible would query the AWS API, filter instances, and dynamically group them based on tags, providing a real-time inventory. For less common sources, you can write custom inventory scripts that output JSON in a specific format. Dynamic inventory ensures your automation always targets the correct, current set of hosts.

**Performance Tuning** is essential when managing hundreds or thousands of hosts. Ansible's default settings are often suitable for smaller environments, but for large-scale deployments, you'll want to optimize.
*   **`forks`**: This parameter (set in `ansible.cfg` or via `--forks` on the command line) controls how many parallel processes Ansible spawns to communicate with managed nodes. Increasing `forks` can speed up execution by running tasks on more hosts concurrently, but it also consumes more resources on the control node. A common starting point is 10-20, but you might go higher depending on your control node's CPU/RAM and network latency.
*   **`pipelining`**: Enabled by default in modern Ansible, `pipelining = True` in `ansible.cfg` reduces the number of network round-trips by sending multiple module operations over a single SSH connection. This significantly improves performance, especially over high-latency networks.
*   **`fact_caching`**: Gathering facts (`gather_facts: true`) can be time-consuming, especially on many hosts. If host facts don't change frequently, you can cache them using `fact_caching` (e.g., `jsonfile` or `redis`) in `ansible.cfg`. This allows Ansible to retrieve facts from the cache instead of the remote host, saving considerable time on subsequent runs. You can also control fact gathering per play or task with `gather_facts: false` and explicitly gather specific facts with `ansible.builtin.setup` module when needed.
*   **`strategy` plugins**: Ansible uses a "linear" strategy by default, meaning all hosts in a batch execute a task before moving to the next task. The `free` strategy allows hosts to proceed through the playbook at their own pace, as soon as they finish a task. This can be faster if tasks have varying execution times, but it might make debugging harder as hosts can be in different states. You can set `strategy: free` in your playbook.
*   **Asynchronous tasks**: For long-running tasks (e.g., installing large software packages, running database migrations), `async` and `poll` keywords allow Ansible to start a task and then check its status periodically, freeing up the control node to manage other tasks. This prevents timeouts and allows for more efficient use of resources.

```yaml
---
- name: Demonstrate performance tuning with async tasks
  hosts: webservers
  tasks:
    - name: Start a very long-running process asynchronously
      ansible.builtin.shell: /opt/long_running_script.sh
      async: 3600 # Allow task to run for up to 1 hour
      poll: 10    # Check status every 10 seconds
      register: long_task_result

    - name: Wait for the long-running process to complete (if poll was 0)
      ansible.builtin.async_status:
        jid: "{{ long_task_result.ansible_job_id }}"
      register: async_status_result
      until: async_status_result.finished
      retries: 360 # Retry 360 times (360 * 10s = 1 hour)
      delay: 10
      when: long_task_result.ansible_job_id is defined and long_task_result.poll == 0
```

**Common mistakes:**
*   **Not using Collections:** Sticking to older, unmaintained modules when better, more robust options exist in Collections.
*   **Static inventory for dynamic infrastructure:** Manually updating host lists in cloud environments leads to errors and stale data.
*   **Default `forks` for large fleets:** Running with a low `forks` count on hundreds of hosts will make playbooks run very slowly.
*   **Unnecessary `gather_facts`:** Gathering facts on every play when they are not needed or rarely change adds significant overhead.
*   **Ignoring `pipelining`**: Disabling it or not ensuring it's enabled can drastically slow down SSH connections.

By leveraging Collections for content management, dynamic inventory for real-time host management, and judiciously applying performance tuning techniques, you can build a scalable, efficient, and maintainable Ansible automation platform for even the largest and most dynamic infrastructures.

#### Key concepts
*   **Ansible Collections**: A standardized format for packaging and distributing Ansible content (roles, modules, plugins, playbooks, documentation) into a single, versioned unit.
*   **FQCN (Fully Qualified Collection Name)**: The full name used to reference content within a collection (e.g., `community.general.ini_file`).
*   **`ansible-galaxy collection install`**: Command to install an Ansible Collection.
*   **Dynamic Inventory**: A mechanism for Ansible to retrieve an up-to-date list of hosts and their variables by querying an external source (e.g., cloud APIs, CMDBs) at runtime.
*   **Inventory Plugins**: Modules that allow Ansible to interface with specific dynamic inventory sources (e.g., `amazon.aws.aws_ec2` for AWS EC2).
*   **`forks`**: A parameter controlling the number of parallel processes Ansible uses to communicate with managed nodes, impacting execution speed and control node resource usage.
*   **`pipelining`**: An optimization that reduces network round-trips by sending multiple module operations over a single SSH connection.
*   **`fact_caching`**: A feature to store gathered host facts in a cache (e.g., JSON file, Redis) to avoid re-gathering them on subsequent playbook runs, improving performance.
*   **`gather_facts: false`**: A playbook or task directive to disable fact gathering, useful when facts are not needed or are cached.
*   **`strategy` plugins**: Control how Ansible executes tasks across hosts (e.g., `linear` for sequential batches, `free` for hosts to proceed independently).
*   **Asynchronous tasks (`async`, `poll`)**: Allow Ansible to start long-running tasks in the background and periodically check their status, preventing timeouts and improving efficiency.

#### Hands-on activity
**Scenario:** You want to manage configuration files on a set of web servers, potentially in a cloud environment, using a module from a specific collection. You also want to ensure your playbook runs efficiently.

**Instructions:**
1.  **Install a Collection:** Install the `community.general` collection if you haven't already:
    `ansible-galaxy collection install community.general`
2.  **Create a Dynamic Inventory Placeholder:** For this exercise, we'll simulate a dynamic inventory. Create a file named `dynamic_inventory.py` with the following content. This script will simply return a static inventory, but it demonstrates the *mechanism* of dynamic inventory. In a real scenario, this script would query a cloud API.
    ```python
    #!/usr/bin/env python3
    import json
    print(json.dumps({
        "webservers": {
            "hosts": ["localhost"],
            "vars": {
                "http_port": 80,
                "max_connections": 200
            }
        },
        "_meta": {
            "hostvars": {
                "localhost": {
                    "ansible_connection": "local"
                }
            }
        }
    }))
    ```
    Make it executable: `chmod +x dynamic_inventory.py`
3.  **Create an `ansible.cfg` for Performance:** Create an `ansible.cfg` file in your project directory to set `forks` and `pipelining`.
    ```ini
    # ansible.cfg
    [defaults]
    inventory = ./dynamic_inventory.py
    forks = 5
    pipelining = True
    # fact_caching = jsonfile
    # fact_caching_connection = ./fact_cache
    # fact_caching_timeout = 86400
    ```
4.  **Create a Playbook using Collection and Tuning:** Create a playbook `configure_webserver.yml` that uses a module from `community.general` and demonstrates fact caching control.
    ```yaml
    ---
    - name: Configure web server with dynamic inventory and collections
      hosts: webservers
      gather_facts: false # Disable fact gathering for performance, if not needed
      collections:
        - community.general

      tasks:
        - name: Ensure web server config directory exists
          ansible.builtin.file:
            path: /etc/nginx/conf.d
            state: directory
            mode: '0755'

        - name: Configure Nginx site using ini_file module
          community.general.ini_file:
            path: /etc/nginx/conf.d/mysite.conf
            section: server
            option: listen
            value: "{{ http_port }}"
            state: present
          notify: restart nginx # Placeholder handler

        - name: Set max connections
          community.general.ini_file:
            path: /etc/nginx/nginx.conf
            section: http
            option: worker_connections
            value: "{{ max_connections }}"
            state: present
          notify: restart nginx # Placeholder handler

        - name: Gather facts explicitly if needed later (e.g., for specific hardware info)
          ansible.builtin.setup:
          when: false # Only run if you actually need facts later in the playbook
          # In a real scenario, you might have a condition here.

      handlers:
        - name: restart nginx
          ansible.builtin.service:
            name: nginx
            state: restarted
          listen: "restart nginx" # Use listen for generic handler calls
    ```
5.  **Run the Playbook:** Execute the playbook. Notice how Ansible uses the `dynamic_inventory.py` and the `ansible.cfg` settings.
    `ansible-playbook configure_webserver.yml`
    You can add `-vvv` to see more details about the execution strategy and module calls.

#### Assessment idea

**Question 1:** You are managing a large fleet of cloud instances where hosts are frequently created and destroyed. You also need to apply specific configurations based on tags assigned to these instances (e.g., `Environment: production`, `Role: webserver`). Explain why a static inventory file is unsuitable for this scenario and how Ansible's dynamic inventory, specifically using an inventory plugin, addresses these challenges.

**Correct Answer 1:**
**Why Static Inventory is Unsuitable:**
A static inventory file requires manual updates whenever a host is provisioned, de-provisioned, or its attributes (like IP address or tags) change. In a dynamic cloud environment with frequent changes, this manual process is:
1.  **Error-prone:** Human errors can lead to incorrect host lists or outdated configurations.
2.  **Time-consuming:** Constantly updating the inventory is a significant operational overhead.
3.  **Stale data:** The inventory quickly becomes outdated, leading to playbooks targeting non-existent hosts or missing new ones.
4.  **Lack of flexibility:** It's difficult to dynamically group hosts based on real-time attributes like cloud tags.

**How Dynamic Inventory Addresses Challenges:**
Ansible's dynamic inventory, especially through inventory plugins (e.g., `amazon.aws.aws_ec2` for AWS), addresses these issues by:
1.  **Real-time data:** It queries the cloud provider's API (or another external source) at runtime to fetch the current state of the infrastructure, ensuring the inventory is always up-to-date.
2.  **Automated grouping:** Inventory plugins can automatically group hosts based on various criteria, such as cloud tags (`Environment`, `Role`), instance types, or regions. This eliminates manual grouping and allows for highly targeted automation.
3.  **Reduced manual effort:** No manual updates are needed for the host list, significantly reducing operational overhead.
4.  **Scalability:** It scales seamlessly with the size of your infrastructure, whether you have tens or thousands of instances.
5.  **Single source of truth:** The cloud provider's API becomes the single source of truth for your infrastructure, reducing configuration drift between your inventory and the actual environment.

**Question 2:** You are running an Ansible playbook on 500 remote servers, and it's taking an excessively long time. You suspect that the default Ansible settings are not optimized for this scale. Identify two key Ansible configuration parameters or strategies you would investigate to improve performance, and explain how each contributes to faster execution.

**Correct Answer 2:**
Two key Ansible performance tuning parameters/strategies to investigate are `forks` and `pipelining`, along with `fact_caching` or `gather_facts` control.

1.  **`forks`**:
    *   **Contribution to performance:** The `forks` parameter (`ansible.cfg` or `--forks` CLI option) controls the number of parallel processes Ansible spawns to communicate with managed nodes. By default, `forks` is often set to 5. For 500 servers, this means Ansible processes tasks on only 5 hosts at a time, leading to very slow execution. Increasing `forks` (e.g., to 50 or 100, depending on control node resources) allows Ansible to manage more hosts concurrently, drastically reducing the overall playbook execution time.
    *   **How it helps:** More parallel connections mean tasks complete faster across the entire fleet.

2.  **`pipelining`**:
    *   **Contribution to performance:** `pipelining = True` (in `ansible.cfg`) reduces the number of SSH connections and round-trips required per task. Instead of opening a new SSH connection and transferring a temporary script for each module execution, Ansible sends multiple module operations over a single, persistent SSH connection. This minimizes network latency overhead.
    *   **How it helps:** Fewer SSH connections and reduced network traffic translate directly to faster task execution, especially noticeable over high-latency networks or when running many small tasks.

**(Bonus/Alternative for 2nd point): `fact_caching` or `gather_facts` control**:
*   **Contribution to performance:** By default, Ansible gathers facts from all managed nodes at the beginning of each play (`gather_facts: true`). This process can be very time-consuming for 500 servers.
    *   **`gather_facts: false`**: If your playbook doesn't rely on host facts, setting `gather_facts: false` at the play level can eliminate this overhead entirely.
    *   **`fact_caching`**: If facts are needed but don't change frequently, enabling `fact_caching` (e.g., `jsonfile` or `redis`) in `ansible.cfg` allows Ansible to store facts locally and retrieve them from the cache on subsequent runs, avoiding the need to connect to remote hosts for fact gathering.
*   **How it helps:** Avoiding or optimizing fact gathering saves significant time, especially for large inventories, as it reduces the initial connection and data transfer overhead.

---

### Chapter 7.7 — Integrating Ansible with CI/CD and Version Control

#### Learning objectives
*   Understand the importance of version control (Git) for managing Ansible playbooks and infrastructure as code.
*   Explain the core principles of Continuous Integration (CI) and Continuous Delivery (CD) in the context of Ansible automation.
*   Design and implement basic CI/CD workflows for Ansible playbooks, including syntax checking, linting, and dry runs.
*   Apply best practices for integrating Ansible automation into a robust and secure CI/CD pipeline.

#### Detailed lesson content
In modern IT operations, infrastructure is increasingly treated as code, and Ansible playbooks are a prime example of this paradigm. Just like application code, your Ansible automation scripts should be managed meticulously, collaborated on efficiently, and deployed reliably. This is where the integration of Ansible with version control systems, primarily Git, and Continuous Integration/Continuous Delivery (CI/CD) pipelines becomes indispensable.

**Version Control with Git** is the foundational practice for managing infrastructure as code. Storing your Ansible playbooks, roles, inventory, and configuration files in a Git repository provides a comprehensive history of changes, enables collaboration among team members, and facilitates easy rollback to previous working states. A typical Git workflow involves:
1.  **Cloning** the central repository.
2.  Creating a **feature branch** for new development or bug fixes.
3.  Making changes, **committing** them with descriptive messages.
4.  **Pushing** the branch to the remote repository.
5.  Opening a **Pull Request (PR)** for code review.
6.  **Merging** the changes into the main branch (e.g., `main` or `master`) after approval.

This workflow ensures that all changes are tracked, reviewed, and approved before being integrated into the main codebase, preventing accidental or unauthorized modifications to your automation. For Ansible, this means that every change to a playbook, even a single variable, goes through a controlled process.

Once your Ansible content is version-controlled, the next logical step is to integrate it into a **CI/CD pipeline**. CI/CD is a methodology that aims to automate the entire software delivery process, from code commit to deployment.
*   **Continuous Integration (CI)** focuses on frequently merging code changes into a central repository and automatically building and testing the integrated code. For Ansible, CI typically involves automated checks on playbooks after every commit.
*   **Continuous Delivery (CD)** extends CI by ensuring that the software can be released to production at any time. For Ansible, this means automatically deploying infrastructure changes or application updates using tested playbooks.

A robust CI/CD pipeline for Ansible might involve several stages:
1.  **Trigger:** A Git push to a specific branch (e.g., `main` or `develop`) or the creation/update of a Pull Request triggers the pipeline.
2.  **Static Analysis & Linting:** Tools like `ansible-lint` are run to check playbooks for syntax errors, adherence to best practices, and potential issues. This catches many problems early without needing to execute the playbook.
    ```bash
    ansible-lint my_playbook.yml
    ```
3.  **Syntax Check:** Ansible itself can perform a syntax check without attempting to connect to managed nodes. This is a quick way to catch basic YAML or Jinja2 syntax errors.
    ```bash
    ansible-playbook --syntax-check my_playbook.yml
    ```
4.  **Dry Run / Check Mode:** This is a critical step for Ansible in CI/CD. Running playbooks with `--check` (or `check_mode: true` in a play) simulates execution without making any actual changes on the target hosts. Combining this with `--diff` shows exactly what changes *would have been made*. This allows you to verify the intended outcome without risking unintended modifications.
    ```bash
    ansible-playbook my_playbook.yml --check --diff -i inventory/hosts
    ```
5.  **Integration Testing (Optional but Recommended):** For complex playbooks or roles, you might deploy a temporary test environment (e.g., using Docker or Vagrant) and run your playbooks against it. Tools like Molecule are designed specifically for testing Ansible roles.
6.  **Deployment (CD):** If all previous stages pass, the pipeline can proceed to deploy the changes to staging or production environments. This typically involves running the actual Ansible playbook. Different deployment strategies can be employed, such as rolling updates, blue/green deployments, or canary releases, depending on the application and infrastructure.

**Best Practices for Ansible in CI/CD:**
*   **Idempotency:** Ensure your playbooks are idempotent. This is crucial for CI/CD, as playbooks might be run multiple times. An idempotent playbook will achieve the desired state without causing side effects on subsequent runs.
*   **Modularity:** Break down your automation into smaller, reusable roles. This improves maintainability, testability, and collaboration.
*   **Secrets Management:** Integrate Ansible Vault (as discussed in Chapter 7.5) with your CI/CD system. The vault password should be securely stored in the CI/CD platform's secret management system (e.g., Jenkins credentials, GitLab CI/CD variables, GitHub Actions secrets) and passed to Ansible at runtime via `--vault-password-file` or an environment variable. Never hardcode secrets in your pipeline scripts.
*   **Environment Separation:** Use separate inventories, `group_vars`, or `host_vars` for different environments (dev, staging, prod) to prevent accidental deployments or configuration mixing.
*   **Logging and Monitoring:** Ensure your CI/CD pipeline captures Ansible's output and integrates with your logging and monitoring systems. This provides visibility into deployment status and helps in troubleshooting.
*   **Automated Rollback:** Plan for rollback strategies. While Ansible itself doesn't have a built-in rollback feature, your playbooks should be designed to revert changes if a deployment fails or causes issues. This often involves deploying a previous known-good version of your infrastructure code.

**Common mistakes:**
*   **No version control:** Not using Git for playbooks, leading to chaos and unrecoverable changes.
*   **Skipping linting/syntax checks:** Deploying playbooks with basic errors that could have been caught early.
*   **No dry runs:** Directly applying changes to production without first verifying the intended outcome in check mode.
*   **Hardcoding secrets:** Storing sensitive information directly in pipeline scripts or Git.
*   **Manual deployments:** Relying on manual execution of playbooks, which is slow, error-prone, and lacks auditability.

By embracing Git and integrating Ansible into a robust CI/CD pipeline, you transform your infrastructure management into a reliable, repeatable, and auditable process, aligning with modern DevOps principles and preparing you for advanced RHCE scenarios.

#### Key concepts
*   **Version Control (Git)**: A system for tracking changes in files and coordinating work on those files among multiple people, essential for managing Ansible playbooks as code.
*   **CI/CD (Continuous Integration/Continuous Delivery)**: A methodology to automate the entire software delivery process, from code commit to deployment.
*   **Continuous Integration (CI)**: The practice of frequently merging code changes into a central repository and automatically building and testing the integrated code.
*   **Continuous Delivery (CD)**: An extension of CI that ensures software can be reliably released to production at any time.
*   **`ansible-lint`**: A tool for checking Ansible playbooks, roles, and collections for syntax errors, best practices, and potential issues.
*   **`ansible-playbook --syntax-check`**: A command-line option to verify the syntax of a playbook without executing any tasks.
*   **`ansible-playbook --check` (Check Mode)**: A command-line option that runs a playbook in a "dry run" mode, simulating changes without actually applying them to target hosts.
*   **`ansible-playbook --diff`**: A command-line option used with `--check` to show the differences that *would* have been applied to files or configurations.
*   **Idempotency**: The property of a playbook or task to produce the same result regardless of how many times it is executed, crucial for CI/CD.
*   **Secrets Management**: Securely handling sensitive data (passwords, API keys) within the CI/CD pipeline, often using Ansible Vault and the CI/CD platform's secret storage.

#### Hands-on activity
**Scenario:** You have an Ansible playbook that deploys a simple web server. You want to integrate this playbook into a basic CI workflow to ensure its quality before deployment.

**Instructions:**
1.  **Initialize a Git Repository:** Create a new directory for your project and initialize a Git repository.
    ```bash
    mkdir ansible-ci-cd-demo
    cd ansible-ci-cd-demo
    git init
    ```
2.  **Create an Inventory File:**
    ```ini
    # inventory/hosts
    [webservers]
    localhost ansible_connection=local
    ```
3.  **Create a Sample Playbook:**
    ```yaml
    # site.yml
    ---
    - name: Deploy a simple Nginx web server
      hosts: webservers
      become: true
      tasks:
        - name: Ensure Nginx package is installed
          ansible.builtin.package:
            name: nginx
            state: present

        - name: Ensure Nginx service is running and enabled
          ansible.builtin.service:
            name: nginx
            state: started
            enabled: true

        - name: Deploy a custom index.html
          ansible.builtin.copy:
            content: "<h1>Hello from Ansible CI/CD!</h1>"
            dest: /usr/share/nginx/html/index.html
            mode: '0644'
          notify: restart nginx

      handlers:
        - name: restart nginx
          ansible.builtin.service:
            name: nginx
            state: restarted
    ```
4.  **Commit Your Files:**
    ```bash
    git add .
    git commit -m "Initial commit: Add Nginx deployment playbook"
    ```
5.  **Simulate CI Checks:** Run the following commands to simulate what a CI pipeline would do:
    *   **Syntax Check:**
        `ansible-playbook site.yml --syntax-check`
    *   **Linting (install `ansible-lint` first if you don't have it: `pip install ansible-lint`):**
        `ansible-lint site.yml`
    *   **Dry Run with Diff:**
        `ansible-playbook site.yml --check --diff -i inventory/hosts`
        Observe the output, which shows what changes *would* be made.
6.  **Make a Change and Re-run Checks:**
    *   Edit `site.yml`, change the `index.html` content to something else.
    *   Run the dry run again and observe the `--diff` output showing the proposed change.
    *   Commit the change: `git commit -am "Update index.html content"`
7.  **(Optional) Actual Deployment:** If you're satisfied with the dry run, you can actually deploy the changes:
    `ansible-playbook site.yml -i inventory/hosts`
    Verify by accessing `http://localhost` in your browser if Nginx is installed locally.

#### Assessment idea

**Question 1:** A developer on your team makes a change to an Ansible playbook and pushes it to a feature branch in Git. Before this change can be merged into the `main` branch and potentially deployed, you want to automatically verify its quality. List three distinct types of automated checks that should be part of your Continuous Integration (CI) pipeline for this Ansible playbook, and provide the Ansible command or tool used for each.

**Correct Answer 1:**
1.  **Syntax Check:**
    *   **Purpose:** To quickly catch basic YAML parsing errors or invalid Jinja2 syntax within the playbook. This is the fastest initial check.
    *   **Command:** `ansible-playbook --syntax-check my_playbook.yml`

2.  **Linting (Best Practices Check):**
    *   **Purpose:** To check the playbook against a set of predefined rules and best practices (e.g., variable naming, task structure, use of deprecated features). This helps maintain code quality and consistency.
    *   **Tool/Command:** `ansible-lint my_playbook.yml`

3.  **Dry Run / Check Mode with Diff:**
    *   **Purpose:** To simulate the execution of the playbook on target hosts without making any actual changes. The `--diff` flag provides a detailed report of what changes *would have been made*, allowing for verification of the intended outcome.
    *   **Command:** `ansible-playbook my_playbook.yml --check --diff -i inventory/hosts`

**Question 2:** Your team is setting up a CI/CD pipeline for Ansible playbooks. They are debating how to securely handle sensitive credentials (like database passwords and API keys) within the pipeline. Explain why hardcoding these credentials directly in the pipeline script or committing them to the Git repository is a critical security vulnerability, and describe the recommended approach using Ansible Vault in a CI/CD context.

**Correct Answer 2:**
**Why Hardcoding/Committing Credentials is a Vulnerability:**
Hardcoding sensitive credentials directly into CI/CD pipeline scripts (e.g., `gitlab-ci.yml`, `Jenkinsfile`) or committing them to a Git repository (even if private) creates critical security vulnerabilities:
1.  **Exposure:** Anyone with access to the repository or the pipeline configuration can view the plain-text credentials. This includes current and former team members, or even external attackers if the repository is compromised.
2.  **Auditability:** Changes to credentials are not properly tracked or managed.
3.  **Rotation:** It complicates credential rotation, as every instance of the hardcoded secret needs to be manually updated.
4.  **Compliance:** Violates most security compliance standards (e.g., SOC 2, ISO 27001).
5.  **Replay Attacks:** If pipeline logs are compromised, credentials could be extracted and used for replay attacks.

**Recommended Approach with Ansible Vault in CI/CD:**
The recommended approach involves using Ansible Vault in conjunction with the CI/CD platform's built-in secret management features:
1.  **Encrypt Secrets with Ansible Vault:** All sensitive data (passwords, API keys, SSH keys) should be encrypted using Ansible Vault and stored in your Git repository. This ensures that the secrets are never stored in plain text at rest.
2.  **Secure Vault Password Storage:** The Ansible Vault password itself should *never* be committed to Git. Instead, it should be stored securely within the CI/CD platform's secret management system (e.g., as a "Secret Variable" in GitLab CI/CD, a "Credential" in Jenkins, or a "Secret" in GitHub Actions). These systems are designed to store sensitive values encrypted and inject them as environment variables during pipeline execution.
3.  **Pass Vault Password at Runtime:** During the CI/CD pipeline execution, the securely stored vault password is retrieved from the CI/CD platform's secrets manager and passed to Ansible using the `--vault-password-file` option or an environment variable (`ANSIBLE_VAULT_PASSWORD_FILE`). The content of this file (or the variable) is typically generated on the fly within the secure execution environment of the pipeline and never persisted.
    *   Example: `ansible-playbook my_playbook.yml --vault-password-file <(echo "$CI_VAULT_PASSWORD")` (using process substitution for an environment variable).
This method ensures that sensitive data is encrypted in the repository, and the decryption key (the vault password) is only available within the secure, transient execution environment of the CI/CD pipeline, minimizing exposure.

---

## Module 8: Troubleshooting, Optimization & Exam Prep

This final module is dedicated to equipping you with the critical skills needed to diagnose and resolve system issues, optimize performance, and strategically prepare for the Red Hat Certified Engineer (RHCE) exam. We'll explore systematic troubleshooting methodologies, delve into advanced diagnostic tools for various system components, and learn how to leverage Ansible for both problem identification and automated remediation. Finally, we'll cover effective exam preparation techniques and undertake comprehensive practice labs to solidify your readiness for the RHCE certification.

---

### Chapter 8.1 — Essential Troubleshooting Methodologies

#### Learning objectives
*   Apply a systematic, structured approach to troubleshooting complex Linux system issues.
*   Utilize core Linux commands and utilities for initial problem diagnosis.
*   Interpret system logs and journal entries to identify root causes of failures.
*   Understand the importance of documentation and communication in the troubleshooting process.
*   Leverage Ansible for initial fact gathering and diagnostic data collection.

#### Detailed lesson content
Effective troubleshooting is less about knowing every single command and more about adopting a methodical approach. When a system isn't behaving as expected, the first instinct might be to randomly try solutions, but this often leads to more confusion and wasted time. Instead, a structured methodology, much like the scientific method, provides a clear path. Start by defining the problem precisely: What is happening? When did it start? What changed recently? Is it affecting all users or just some? Is it reproducible? Gathering these initial facts is crucial. Once the problem is defined, formulate a hypothesis about the potential cause. For instance, if a web server isn't responding, a hypothesis could be "the web server service is stopped" or "the firewall is blocking access."

After forming a hypothesis, the next step is to test it. This involves using diagnostic tools and commands to gather evidence. For example, to check if a service is running, you'd use `systemctl status httpd`. If the service is indeed stopped, your hypothesis is confirmed, and you can proceed to restart it. If it's running, your hypothesis is disproven, and you move on to the next most likely cause. This iterative process of hypothesize, test, and analyze continues until the root cause is identified. Always remember to isolate the problem. If a service isn't starting, check its dependencies. Is the network available? Is storage mounted? Are necessary libraries present? Breaking down a complex problem into smaller, manageable pieces makes it much easier to tackle.

One of the most powerful tools for initial diagnosis on a Red Hat system is `journalctl`. This command allows you to query and display messages from the systemd journal, which collects logs from various sources, including the kernel, services, and applications. You can filter `journalctl` output by time (`-S "20 minutes ago"`), by service (`-u httpd`), or by priority (`-p err`). For example, `journalctl -xe` will show you the most recent log entries, including explanatory text and related messages, which is incredibly useful for understanding why a service failed to start. Another invaluable tool is `dmesg`, which displays the kernel ring buffer messages. These messages often contain critical information about hardware detection, driver issues, or kernel panics that occur during boot. Running `dmesg -T` will show timestamps in a human-readable format, helping you pinpoint issues related to system startup.

Beyond logs, understanding process and network state is vital. Commands like `ps aux` provide a snapshot of running processes, allowing you to see which processes are consuming resources or if a critical process is missing. `lsof -i :80` can tell you which process is listening on port 80, useful for diagnosing web server conflicts. For more in-depth process analysis, `strace` can trace system calls and signals, revealing exactly what a program is doing at a low level. While `strace` output can be verbose, it's incredibly powerful for debugging elusive application issues, showing file access, network connections, and library calls.

Ansible plays a significant role in modern troubleshooting by automating the information-gathering phase. Instead of manually logging into multiple servers to run `journalctl` or `dmesg`, you can write a simple Ansible playbook to collect this data centrally. For instance, an ad-hoc command like `ansible all -m shell -a "journalctl -xe --since '1 hour ago'"` can quickly fetch recent log entries from all managed hosts. For more structured data, you can use the `setup` module to gather facts, or custom scripts to extract specific configuration details. A playbook could collect service statuses, network configurations, or even specific log file snippets, storing them on the control node for later analysis. This not only saves time but also ensures consistency in data collection, which is paramount when dealing with distributed systems. Always remember to document your findings and the steps you took. This creates a knowledge base for future issues and aids in communication with team members. A common mistake is to jump to conclusions without sufficient evidence; always verify your assumptions with concrete data. Another pitfall is making changes without a rollback plan. Before implementing a fix, ensure you know how to revert it if it causes new problems.

#### Key concepts
*   **Systematic Troubleshooting:** A structured, iterative approach to problem-solving, involving problem definition, hypothesis formulation, testing, and analysis.
*   **`journalctl`:** A utility for querying and displaying messages from the systemd journal, providing centralized logging for kernel, services, and applications.
*   **`dmesg`:** Displays the kernel ring buffer messages, useful for diagnosing hardware and kernel-related issues during boot.
*   **`ps aux`:** Command to view all running processes on the system, showing process ID, CPU/memory usage, and command.
*   **`lsof`:** "List Open Files" command, used to list open files and the processes that opened them, including network sockets.
*   **`strace`:** A diagnostic, debugging and instructional tool used to monitor and tamper with interactions between user-space processes and the Linux kernel.
*   **Ansible for Diagnostics:** Using Ansible playbooks or ad-hoc commands to automate the collection of diagnostic information (logs, service status, system facts) from multiple hosts.
*   **Root Cause Analysis:** The process of identifying the fundamental reason for a problem, rather than just addressing its symptoms.

#### Hands-on activity
**Scenario:** A critical web service (`httpd`) on your managed nodes is intermittently failing to start after a system reboot. You need to gather diagnostic information efficiently using Ansible.

**Task:** Create an Ansible playbook that performs the following steps on your web servers:
1.  Checks the status of the `httpd` service.
2.  Gathers the last 50 lines of the `journalctl` output for the `httpd` service.
3.  Collects the last 20 lines of the `dmesg` output.
4.  Saves this information into a separate file on the Ansible control node for each managed host.

**`troubleshoot_web.yml` template:**
```yaml
---
- name: Troubleshoot Web Service Issues
  hosts: webservers
  become: yes
  tasks:
    - name: Check httpd service status
      systemd:
        name: httpd
        state: started
      register: httpd_status
      ignore_errors: true # Continue even if service is not started

    - name: Gather journalctl output for httpd
      shell: journalctl -u httpd --since "1 hour ago" -n 50 --no-pager
      register: journal_output
      changed_when: false

    - name: Gather dmesg output
      shell: dmesg -T | tail -n 20
      register: dmesg_output
      changed_when: false

    - name: Create diagnostic report directory
      delegate_to: localhost
      file:
        path: "./diagnostics/{{ inventory_hostname }}"
        state: directory
      run_once: true # Ensure directory is created only once on localhost

    - name: Save httpd service status to file
      delegate_to: localhost
      copy:
        content: |
          HTTPD Service Status for {{ inventory_hostname }}:
          -------------------------------------------------
          {{ httpd_status.stdout | default('Service status check failed or service not found.') }}
          {{ httpd_status.stderr | default('') }}
        dest: "./diagnostics/{{ inventory_hostname }}/httpd_status.txt"
      when: httpd_status is defined

    - name: Save journalctl output to file
      delegate_to: localhost
      copy:
        content: |
          Journalctl Output for httpd on {{ inventory_hostname }}:
          -----------------------------------------------------
          {{ journal_output.stdout }}
        dest: "./diagnostics/{{ inventory_hostname }}/journal_httpd.log"
      when: journal_output is defined

    - name: Save dmesg output to file
      delegate_to: localhost
      copy:
        content: |
          Dmesg Output for {{ inventory_hostname }}:
          ------------------------------------------
          {{ dmesg_output.stdout }}
        dest: "./diagnostics/{{ inventory_hostname }}/dmesg.log"
      when: dmesg_output is defined

```
**Instructions:**
1.  Save the above content as `troubleshoot_web.yml`.
2.  Ensure you have a `webservers` group defined in your Ansible inventory.
3.  Run the playbook: `ansible-playbook troubleshoot_web.yml`.
4.  Inspect the generated files in the `diagnostics/` directory on your control node.

#### Assessment idea
1.  **Question:** You are troubleshooting a service that fails to start. You've checked `systemctl status <service_name>` and it shows "failed." Which `journalctl` command would be most effective for quickly identifying recent errors related to this specific service?
    *   A) `journalctl -f`
    *   B) `journalctl -u <service_name> -xe`
    *   C) `journalctl --list-boots`
    *   D) `journalctl -p debug`

    **Correct Answer:** B) `journalctl -u <service_name> -xe`
    **Explanation:** `journalctl -u <service_name>` filters output specifically for the named service. The `-x` option adds explanatory text to messages, and `-e` jumps to the end of the journal, showing the most recent entries, which are usually the most relevant for a failed service start. Option A tails the journal, which is useful for live monitoring but not for past failures. Options C and D are for listing boots and showing debug messages, respectively, which are less direct for this specific problem.

2.  **Question:** A critical application on your server is experiencing intermittent crashes. You suspect it might be related to low-level system calls or interactions with the kernel. Which Linux utility would be most suitable for tracing these interactions in detail?
    *   A) `top`
    *   B) `netstat`
    *   C) `strace`
    *   D) `lsof`

    **Correct Answer:** C) `strace`
    **Explanation:** `strace` is specifically designed to trace system calls and signals made by a process. It provides a detailed log of every interaction a program has with the kernel, including file operations, network communication, and memory management, making it invaluable for diagnosing low-level application issues. `top` monitors system resources, `netstat` shows network connections, and `lsof` lists open files, none of which provide the granular system call tracing that `strace` offers.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 3-minute animated diagram illustrating the systematic troubleshooting flow (define, hypothesize, test, analyze). Transition to a 7-minute live terminal demo showing `journalctl -u httpd -xe`, `dmesg -T | tail`, `lsof -i :22`, and `strace -p <PID>` on a simulated problem (e.g., a stopped service, a port conflict). Emphasize common mistakes like guessing or not checking logs. Conclude with a 2-minute segment explaining how Ansible ad-hoc commands can gather this data across multiple hosts, showing `ansible webservers -a "journalctl -u httpd -xe"`. Ensure high-contrast terminal output and clear voiceover. Include an interactive prompt for learners to reflect on a past troubleshooting experience.

---

### Chapter 8.2 — Diagnosing System Performance Issues

#### Learning objectives
*   Identify common system performance bottlenecks (CPU, memory, I/O, network).
*   Utilize standard Linux utilities (`top`, `htop`, `vmstat`, `iostat`, `sar`) to monitor system resource usage.
*   Interpret performance metrics to pinpoint the root cause of slowdowns.
*   Understand the impact of different workloads on system performance.
*   Automate the collection and basic analysis of performance data using Ansible.

#### Detailed lesson content
System performance is a critical aspect of system administration. A slow system can impact user experience, application availability, and overall productivity. Diagnosing performance issues requires understanding the key resources a system utilizes: CPU, memory, disk I/O, and network I/O. A bottleneck in any of these areas can degrade overall performance. The first step in performance troubleshooting is often to get a high-level overview of system activity, and for this, `top` or `htop` are indispensable. `top` provides a real-time summary of system resource usage, including CPU, memory, swap, and a list of processes sorted by CPU utilization. `htop` is an enhanced, interactive version of `top` that offers a more user-friendly interface, easier process manipulation, and visual CPU/memory meters. When using `top`, pay attention to the `wa` (wait I/O) percentage in the CPU line; a high `wa` indicates that the CPU is idle, waiting for disk I/O, suggesting a disk bottleneck. Also, observe the load average (the three numbers representing the average number of processes in the run queue over 1, 5, and 15 minutes); if these numbers consistently exceed the number of CPU cores, your system is likely CPU-bound.

For more detailed analysis of specific resource types, dedicated tools are available. To investigate memory issues, `free -h` gives a quick summary of total, used, and free memory, including swap space. However, `vmstat` (virtual memory statistics) provides a more dynamic view, showing statistics about processes, memory, paging, block I/O, traps, and CPU activity. Running `vmstat 1` will update the statistics every second, allowing you to observe trends. Look at the `si` (swap in) and `so` (swap out) columns; if these are consistently non-zero, your system is actively swapping, which is a strong indicator of memory pressure. Swapping significantly degrades performance because disk access is orders of magnitude slower than RAM.

Disk I/O performance is another common bottleneck. `iostat` is the go-to tool for monitoring disk utilization. Running `iostat -x 1` provides extended statistics, including `%util` (percentage of time the disk is busy), `r/s` (reads per second), `w/s` (writes per second), `rkB/s` (read kilobytes per second), and `wkB/s` (write kilobytes per second). A `%util` consistently close to 100% suggests a disk bottleneck. Also, look at `await` (average wait time for I/O operations) and `svctm` (average service time); high values here indicate slow disk response. Understanding the difference between sequential and random I/O is also important; databases often perform random I/O, while backups might be sequential.

Network performance can be trickier to diagnose as it involves components outside the local server. However, local network statistics can provide clues. `ss -s` (socket statistics) gives a summary of current network connections. `sar -n DEV 1` provides network interface statistics, showing `rxpck/s` (received packets per second), `txpck/s` (transmitted packets per second), and `rxkB/s`/`txkB/s` (received/transmitted kilobytes per second). High error rates or dropped packets (`rxerr/s`, `txerr/s`) can indicate physical layer issues or overloaded network interfaces. `ping` and `traceroute` remain fundamental for basic connectivity and latency checks.

When using these tools, it's crucial to establish a baseline. What does "normal" look like for your system under typical load? Without a baseline, it's hard to determine if current metrics are indicative of a problem or just expected behavior. Common mistakes include focusing on a single metric without considering the overall system context, or trying to optimize a resource that isn't the actual bottleneck. For example, adding more RAM won't help if the system is CPU-bound. Always approach performance tuning systematically, identifying the bottleneck, making a targeted change, and then re-evaluating.

Ansible can greatly assist in performance monitoring by automating the collection of these metrics across an entire infrastructure. You can write playbooks that execute `vmstat`, `iostat`, or `sar` commands on remote hosts, capture their output, and store it for later analysis or feed it into a monitoring system. For example, an Ansible task using the `shell` module could run `iostat -x 1 5` to get 5 samples of disk I/O statistics, then save the output to a file on the control node. This allows for scheduled performance data collection, helping to identify trends and proactively address potential issues before they become critical. Remember that while Ansible can collect the data, interpreting it still requires human expertise and understanding of the underlying tools.

#### Key concepts
*   **CPU Bottleneck:** When the CPU is consistently at or near 100% utilization, or load averages significantly exceed the number of CPU cores.
*   **Memory Bottleneck:** Occurs when the system runs out of physical RAM and starts heavily utilizing swap space, leading to significant slowdowns.
*   **Disk I/O Bottleneck:** When disk read/write operations are slow, causing processes to wait for data, characterized by high `wa` (wait I/O) in `top` or high `%util` in `iostat`.
*   **Network I/O Bottleneck:** When the network interface or connection is saturated or experiencing high error rates, limiting data transfer.
*   **`top` / `htop`:** Real-time process and system resource monitoring tools, providing an overview of CPU, memory, and process activity.
*   **`vmstat`:** Reports virtual memory statistics, including processes, memory, paging, block I/O, and CPU activity.
*   **`iostat`:** Reports CPU utilization and I/O statistics for devices and partitions.
*   **`sar`:** (System Activity Reporter) A comprehensive tool for collecting, reporting, and saving system activity information, including CPU, memory, I/O, and network statistics over time.
*   **Baseline:** A set of performance metrics collected under normal operating conditions, used as a reference point to identify deviations.

#### Hands-on activity
**Scenario:** You need to monitor the performance of your database servers to identify potential bottlenecks. Specifically, you want to capture CPU, memory, and disk I/O statistics over a short period.

**Task:** Create an Ansible playbook that connects to your `dbservers` group, runs `vmstat 1 5` and `iostat -x 1 5`, and then saves the output of each command to a separate file on the Ansible control node, prefixed with the hostname and a timestamp.

**`monitor_db_performance.yml` template:**
```yaml
---
- name: Monitor Database Server Performance
  hosts: dbservers
  become: yes
  tasks:
    - name: Get current timestamp
      command: date +%Y%m%d%H%M%S
      register: current_timestamp
      changed_when: false

    - name: Gather vmstat output
      shell: vmstat 1 5
      register: vmstat_output
      changed_when: false

    - name: Gather iostat output
      shell: iostat -x 1 5
      register: iostat_output
      changed_when: false

    - name: Create performance reports directory
      delegate_to: localhost
      file:
        path: "./performance_reports/{{ inventory_hostname }}"
        state: directory
      run_once: true

    - name: Save vmstat output to file
      delegate_to: localhost
      copy:
        content: |
          VMStat Output for {{ inventory_hostname }} at {{ current_timestamp.stdout }}:
          ------------------------------------------------------------------
          {{ vmstat_output.stdout }}
        dest: "./performance_reports/{{ inventory_hostname }}/vmstat_{{ current_timestamp.stdout }}.log"
      when: vmstat_output is defined

    - name: Save iostat output to file
      delegate_to: localhost
      copy:
        content: |
          IOStat Output for {{ inventory_hostname }} at {{ current_timestamp.stdout }}:
          ------------------------------------------------------------------
          {{ iostat_output.stdout }}
        dest: "./performance_reports/{{ inventory_hostname }}/iostat_{{ current_timestamp.stdout }}.log"
      when: iostat_output is defined

```
**Instructions:**
1.  Save the above content as `monitor_db_performance.yml`.
2.  Ensure you have a `dbservers` group defined in your Ansible inventory.
3.  Run the playbook: `ansible-playbook monitor_db_performance.yml`.
4.  Inspect the generated files in the `performance_reports/` directory on your control node.

#### Assessment idea
1.  **Question:** You observe that `top` consistently shows a high `wa` (wait I/O) percentage, often above 50%. Which system resource is most likely the primary bottleneck in this scenario?
    *   A) CPU
    *   B) Memory
    *   C) Disk I/O
    *   D) Network

    **Correct Answer:** C) Disk I/O
    **Explanation:** A high `wa` (wait I/O) percentage in `top` specifically indicates that the CPU is spending a significant amount of time idle, waiting for disk I/O operations to complete. This is a classic symptom of a disk I/O bottleneck, where the storage subsystem cannot keep up with the demands of the applications.

2.  **Question:** Your application is running slowly, and you notice that `vmstat` output consistently shows non-zero values in the `si` and `so` columns. What does this indicate, and what is its likely impact on performance?
    *   A) High CPU utilization; the system is CPU-bound.
    *   B) Active swapping; the system is experiencing memory pressure and performance degradation.
    *   C) Network saturation; the network interface is overloaded.
    *   D) Disk corruption; the filesystem needs to be checked.

    **Correct Answer:** B) Active swapping; the system is experiencing memory pressure and performance degradation.
    **Explanation:** In `vmstat` output, `si` represents "swap in" (data read from swap space) and `so` represents "swap out" (data written to swap space). Consistent non-zero values in these columns mean the system is actively moving data between RAM and disk (swap), which is significantly slower than accessing RAM. This indicates that the system is running out of physical memory (memory pressure), leading to performance degradation as the CPU waits for data from the much slower disk.

#### AI generation note
Create a 15-minute live coding and terminal demo. Begin with a quick overview of performance bottlenecks (1 minute, using a simple diagram). Then, spend 10 minutes demonstrating `top`, `htop`, `vmstat 1`, `iostat -x 1`, and `sar -u 1` on a virtual machine under simulated load (e.g., using `stress-ng` to generate CPU, memory, or I/O load). Highlight key metrics and how to interpret them for each tool. Use a split-screen view: terminal on the left, a simple bar chart visualization of resource usage on the right (if possible, otherwise just terminal). Conclude with a 4-minute segment showing an Ansible playbook collecting `vmstat` and `iostat` data from multiple hosts, emphasizing how to save and review the output. Include a common mistake warning about "premature optimization."

---

### Chapter 8.3 — Advanced Network Troubleshooting

#### Learning objectives
*   Diagnose and resolve common network connectivity issues using a structured approach.
*   Utilize advanced network utilities (`ss`, `ip`, `nmcli`, `firewall-cmd`) for detailed analysis.
*   Troubleshoot DNS resolution problems and understand their impact on applications.
*   Identify and resolve firewall configuration issues that block network traffic.
*   Automate network diagnostic checks and configuration verification with Ansible.

#### Detailed lesson content
Network issues can be particularly challenging because they often involve multiple layers and components, from the local host to remote servers and intermediate network devices. A systematic approach is crucial. Start with the basics: Is the network cable plugged in? Is the interface up? `ip a` will show you the status of all network interfaces, their IP addresses, and whether they are `UP` or `DOWN`. If an interface is down, `ip link set <interface_name> up` can bring it online. Next, verify basic connectivity using `ping <destination_ip>` or `ping <destination_hostname>`. If `ping` to an IP works but to a hostname fails, it points to a DNS resolution issue.

DNS (Domain Name System) is a frequent culprit in network problems. If services cannot resolve hostnames, they often fail or experience significant delays. To diagnose DNS, first check `/etc/resolv.conf` to ensure it points to valid DNS servers. You can test these servers directly using `dig <hostname> @<dns_server_ip>` or `nslookup <hostname> <dns_server_ip>`. If `dig` fails, the DNS server might be unreachable or misconfigured. Another common issue is local caching; `systemd-resolve --flush-caches` can clear the local DNS cache if you suspect stale entries. Remember, DNS issues can manifest as "network unreachable" errors even when the physical network is fine.

Routing is another critical layer. If your server can reach local hosts but not external ones, the default gateway might be incorrect or missing. `ip r` displays the kernel's routing table. Look for a default route (destination `0.0.0.0/0`) pointing to your gateway. If it's missing or incorrect, you might need to add or modify it. For persistent changes, you'd typically use `nmcli` or configure network scripts. `traceroute <destination_ip>` can help identify where traffic is stopping along its path, showing each hop and its latency. This is invaluable for pinpointing issues outside your immediate control, such as an overloaded router or a blocked path.

Firewalls are designed to protect systems, but misconfigured firewalls are a leading cause of connectivity problems. Red Hat systems typically use `firewalld`. To check its status, use `systemctl status firewalld`. To see currently active zones and rules, `firewall-cmd --get-active-zones` and `firewall-cmd --list-all --zone=<zone_name>` are essential. If a service isn't accessible, verify that the necessary ports or services are allowed in the correct zone. For example, `firewall-cmd --list-all --zone=public` might show that `http` (port 80) is not allowed. You can temporarily add a rule with `--add-service=http` or `--add-port=80/tcp` (without `--permanent`) to test if the firewall is the issue. If it resolves the problem, make the change permanent. A common mistake is forgetting to reload the firewall after making permanent changes (`firewall-cmd --reload`).

For deeper insights into network connections, `ss` (socket statistics) is a modern replacement for `netstat`. `ss -tunap` will show all TCP and UDP connections, listening sockets, process IDs, and program names. This is incredibly useful for seeing if a service is actually listening on the expected port, if connections are established, or if there are too many connections in a particular state (e.g., `TIME_WAIT`). For example, if your web server is not responding, `ss -tunap | grep :80` will quickly tell you if `httpd` is listening on port 80.

Ansible can be a powerful ally in network troubleshooting and configuration management. You can write playbooks to:
*   **Gather network facts:** Use the `setup` module to collect interface details, IP addresses, and routing tables.
*   **Check DNS resolution:** Execute `dig` or `nslookup` commands on remote hosts and capture their output.
*   **Verify firewall rules:** Run `firewall-cmd --list-all` and parse the output to ensure correct rules are in place.
*   **Test connectivity:** Use the `ping` module or shell commands like `ping` and `traceroute` to test reachability.
*   **Enforce network configuration:** Use modules like `nmcli` or `firewalld` to correct misconfigurations consistently across your fleet.

For example, an Ansible task could check if a specific port is open in `firewalld` and, if not, add it. This ensures that your network policies are consistently applied and helps prevent misconfigurations from causing outages. Always remember to test network changes in a controlled environment before deploying to production, especially firewall rules, as incorrect rules can lock you out of a system.

#### Key concepts
*   **`ip a`:** Displays IP addresses and network interface information.
*   **`ip r`:** Displays the kernel routing table.
*   **`ping`:** Tests network connectivity to a host.
*   **`traceroute`:** Traces the path that packets take to a network host, identifying intermediate hops.
*   **DNS Resolution:** The process of translating human-readable hostnames into IP addresses.
*   **`dig` / `nslookup`:** Utilities for querying DNS servers.
*   **`firewalld`:** The dynamic firewall manager used on Red Hat systems.
*   **`firewall-cmd`:** Command-line client for `firewalld` to manage firewall rules.
*   **`ss`:** (Socket Statistics) A utility to investigate sockets, providing more detailed information than `netstat`.
*   **`nmcli`:** (NetworkManager Command Line Interface) A tool for controlling NetworkManager and reporting network status.

#### Hands-on activity
**Scenario:** You suspect that a web server (`webserver1`) is unable to connect to a database server (`dbserver1`) on port `3306` due to a firewall issue or incorrect routing. You need to use Ansible to diagnose the problem.

**Task:** Create an Ansible playbook that performs the following diagnostic checks from `webserver1` towards `dbserver1`:
1.  Checks if `dbserver1` is reachable via `ping`.
2.  Attempts to resolve `dbserver1`'s hostname using `dig`.
3.  Checks if `webserver1` can establish a TCP connection to `dbserver1` on port `3306` using `nc -zvw3`.
4.  Lists the active firewall rules on `webserver1` (if `firewalld` is running).

**`diagnose_db_connectivity.yml` template:**
```yaml
---
- name: Diagnose Database Connectivity from Webserver
  hosts: webservers # Assuming webserver1 is in this group
  become: yes
  vars:
    db_host: dbserver1 # Replace with actual hostname or IP of your database server
    db_port: 3306

  tasks:
    - name: Ping database server
      ansible.builtin.ping:
        data: "{{ db_host }}"
      register: ping_result
      ignore_errors: true

    - name: Display ping result
      debug:
        msg: "Ping to {{ db_host }}: {{ ping_result.ping | default('Failed') }}"

    - name: Resolve database server hostname
      command: dig +short {{ db_host }}
      register: dig_result
      changed_when: false
      ignore_errors: true

    - name: Display DNS resolution result
      debug:
        msg: "DNS resolution for {{ db_host }}: {{ dig_result.stdout | default('Failed to resolve') }}"

    - name: Check TCP connectivity to database port
      shell: nc -zvw3 {{ db_host }} {{ db_port }}
      register: nc_result
      changed_when: false
      ignore_errors: true

    - name: Display TCP connectivity result
      debug:
        msg: "TCP connectivity to {{ db_host }}:{{ db_port }}: {{ nc_result.stdout | default('Failed') }}"

    - name: Check firewalld status
      systemd_service:
        name: firewalld
        state: started
        enabled: yes
      check_mode: yes # Only check, don't change
      register: firewalld_status
      ignore_errors: true

    - name: List firewalld rules if active
      command: firewall-cmd --list-all --zone=public # Adjust zone if needed
      register: firewall_rules
      changed_when: false
      when: firewalld_status.status.ActiveState == 'active'
      ignore_errors: true

    - name: Display firewalld rules
      debug:
        msg: "Firewalld rules on {{ inventory_hostname }}: {{ firewall_rules.stdout | default('Firewalld not active or failed to retrieve rules.') }}"
      when: firewalld_status.status.ActiveState == 'active'

```
**Instructions:**
1.  Save the above content as `diagnose_db_connectivity.yml`.
2.  Ensure `webservers` and `dbserver1` (or its IP) are correctly defined in your Ansible inventory. Replace `db_host` variable with the actual hostname or IP.
3.  Run the playbook: `ansible-playbook diagnose_db_connectivity.yml`.
4.  Analyze the debug output to identify potential network, DNS, or firewall issues.

#### Assessment idea
1.  **Question:** A web application on your server is unable to connect to an external API, reporting "Name or service not known." You can `ping` the API server's IP address successfully. What is the most likely cause of this issue, and which command would you use to investigate it further on your server?
    *   A) Firewall blocking the API port; `firewall-cmd --list-all`
    *   B) Incorrect routing; `ip r`
    *   C) DNS resolution failure; `dig <api_hostname>`
    *   D) Network interface is down; `ip a`

    **Correct Answer:** C) DNS resolution failure; `dig <api_hostname>`
    **Explanation:** The error "Name or service not known" combined with successful `ping` to the IP address strongly indicates a DNS resolution problem. The system can reach the destination by IP but cannot translate the hostname to an IP. `dig <api_hostname>` is the primary tool to query DNS servers and diagnose resolution issues.

2.  **Question:** You've configured a new HTTP service on your server, but clients cannot connect to it. You've verified that the `httpd` service is running and listening on port 80 using `ss -tunap | grep :80`. What is the next most probable component to check for blocking incoming connections?
    *   A) The default gateway configuration.
    *   B) The local DNS server configuration.
    *   C) The `firewalld` rules on the server.
    *   D) The network cable connection.

    **Correct Answer:** C) The `firewalld` rules on the server.
    **Explanation:** If the service is running and listening locally (`ss` confirms this), and assuming basic network connectivity is present (which is implied if you can even try to connect), the firewall is the most likely component blocking incoming connections. `firewalld` on Red Hat systems can prevent external access to open ports. Checking the default gateway or DNS is less relevant if the service is confirmed to be listening locally. The network cable would prevent any connectivity, not just to a specific service.

#### AI generation note
Create a 15-minute live terminal demo. Start by simulating a network issue (e.g., misconfigured `/etc/resolv.conf`, a missing default route, or a `firewalld` rule blocking HTTP). Walk through the diagnostic process step-by-step: `ip a`, `ping`, `dig`, `ip r`, `ss -tunap`, and `firewall-cmd --list-all`. Show how each command provides clues. Then, demonstrate how to use Ansible to automate these checks across a group of servers, showing a playbook that runs `dig` and `firewall-cmd` and collects the output. Use clear, color-coded terminal output and visual overlays to highlight key information. Include a safety note about testing firewall changes carefully.

---

### Chapter 8.4 — Storage and Filesystem Recovery

#### Learning objectives
*   Diagnose common storage-related issues, including full filesystems and disk errors.
*   Utilize tools like `df`, `du`, `lsblk`, `fdisk`, `parted`, and `xfs_repair` for storage management and recovery.
*   Understand the process of identifying and repairing filesystem corruption.
*   Troubleshoot Logical Volume Manager (LVM) problems, such as missing or inactive logical volumes.
*   Implement basic backup and restore strategies for critical data.

#### Detailed lesson content
Storage is the backbone of any system, and issues with disks or filesystems can lead to data loss, application failures, and system instability. Diagnosing storage problems often begins with checking available space. `df -h` provides a summary of disk space usage for all mounted filesystems, showing total size, used space, available space, and percentage used. A common issue is a filesystem reaching 100% utilization, which can prevent applications from writing data or even cause system instability. If a filesystem is full, `du -sh /*` (and then drilling down) can help identify which directories are consuming the most space. Remember that `df` reports space from the perspective of the filesystem, while `du` reports space from the perspective of files and directories; discrepancies can occur if files are deleted but still held open by processes.

Beyond full disks, physical disk errors or filesystem corruption are more severe. `lsblk` is an excellent tool for listing block devices (disks, partitions, LVM logical volumes) in a tree-like format, helping you visualize the storage layout. `fdisk -l` or `parted -l` can provide detailed partition table information. If a disk is failing, `dmesg` often shows I/O errors or sector read failures. Modern disks also support S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology), and tools like `smartctl` (from the `smartmontools` package) can query disk health attributes, providing early warnings of impending disk failure.

Filesystem corruption can occur due to sudden power loss, hardware failures, or software bugs. For XFS filesystems, which are common on Red Hat systems, `xfs_repair` is the primary tool for checking and repairing corruption. **Crucially, `xfs_repair` should only be run on an unmounted filesystem.** Attempting to run it on a mounted filesystem can lead to further data corruption. The typical procedure involves booting into rescue mode or unmounting the affected filesystem, then running `xfs_repair /dev/<device_name>`. Always back up critical data before attempting any repair, as `xfs_repair` can sometimes make things worse if the corruption is severe. For ext4 filesystems, `fsck` (specifically `fsck.ext4`) serves a similar purpose.

Logical Volume Manager (LVM) adds a layer of abstraction over physical disks, providing flexibility in managing storage. However, LVM itself can experience issues. Common LVM problems include:
*   **Missing Physical Volumes (PVs):** If a disk containing a PV fails or is removed, the Volume Group (VG) and Logical Volumes (LVs) built upon it will be affected. `pvscan` lists all PVs.
*   **Inactive Logical Volumes (LVs):** LVs might not be active after a reboot or if a VG is not properly activated. `vgscan` lists VGs, `lvscan` lists LVs. `vgchange -ay <volume_group_name>` activates all LVs in a VG.
*   **Insufficient Free Space:** While LVM allows resizing, you still need free extents within the VG to extend an LV. `vgs` and `lvs` show free space within VGs and LV sizes, respectively.

Troubleshooting LVM often involves checking the status of PVs, VGs, and LVs in that order. If an LV is missing, trace back to its VG and then its PVs. The `lvdisplay`, `vgdisplay`, and `pvdisplay` commands provide detailed information about each component.

Safety notes are paramount in storage management. **Never run `xfs_repair` or `fsck` on a mounted filesystem.** Always have current backups of critical data before performing any disk or filesystem repair operations. When dealing with LVM, be cautious with commands that modify the volume structure, especially `lvremove`, `vgremove`, and `pvremove`, as these can lead to irreversible data loss.

Ansible can be used to automate routine storage checks and even some recovery steps. For example, a playbook could:
*   Monitor disk space usage on all servers and alert if thresholds are exceeded.
*   Check LVM status (`lvscan`, `vgscan`) and report any inactive LVs.
*   Even automate the unmounting and `xfs_repair` process (though this requires careful orchestration and ideally human oversight for critical systems).

```yaml
- name: Check XFS filesystem health
  hosts: fileservers
  become: yes
  tasks:
    - name: Get mount points for XFS filesystems
      ansible.builtin.command: findmnt -l -t xfs -o TARGET --noheadings
      register: xfs_mount_points
      changed_when: false

    - name: Unmount XFS filesystems for repair (DANGER: Use with extreme caution!)
      ansible.posix.mount:
        path: "{{ item }}"
        state: unmounted
      when: xfs_mount_points.stdout_lines | length > 0
      loop: "{{ xfs_mount_points.stdout_lines }}"
      # NOTE: This task is highly dangerous in production. Only for demonstration or rescue scenarios.
      # You would typically reboot into rescue mode or ensure no I/O before unmounting.

    - name: Get device paths for unmounted XFS filesystems
      ansible.builtin.command: findmnt -l -t xfs -o SOURCE --noheadings
      register: xfs_device_paths
      changed_when: false
      when: xfs_mount_points.stdout_lines | length > 0

    - name: Run xfs_repair on unmounted XFS filesystems
      ansible.builtin.command: xfs_repair -n {{ item }} # -n for dry run, remove for actual repair
      register: xfs_repair_result
      changed_when: false
      when: xfs_device_paths.stdout_lines | length > 0
      loop: "{{ xfs_device_paths.stdout_lines }}"
      ignore_errors: true # Continue even if a repair fails

    - name: Report xfs_repair results
      debug:
        msg: "xfs_repair on {{ item.item }}: {{ item.stdout }}"
      loop: "{{ xfs_repair_result.results }}"
      loop_control:
        label: "{{ item.item }}"
      when: xfs_repair_result.results is defined and xfs_repair_result.results | length > 0

    - name: Remount XFS filesystems (after repair attempt)
      ansible.posix.mount:
        path: "{{ item }}"
        state: mounted
      when: xfs_mount_points.stdout_lines | length > 0
      loop: "{{ xfs_mount_points.stdout_lines }}"
```
This example playbook demonstrates how Ansible could interact with `xfs_repair`, but it comes with a strong warning. For critical systems, manual intervention in rescue mode is often preferred for filesystem repairs to ensure data integrity and prevent accidental data loss. Always prioritize backups and careful planning.

#### Key concepts
*   **`df -h`:** Reports disk space usage of mounted filesystems in human-readable format.
*   **`du -sh`:** Estimates file space usage, useful for finding large directories.
*   **`lsblk`:** Lists information about all available block devices (disks, partitions, LVM).
*   **`xfs_repair`:** A utility for checking and repairing XFS filesystems. **Must be run on an unmounted filesystem.**
*   **`fsck`:** A general command for checking and repairing Linux filesystems (e.g., ext4). **Must be run on an unmounted filesystem.**
*   **LVM (Logical Volume Manager):** A system that provides a more advanced way to manage disk space than traditional partitioning.
*   **Physical Volume (PV):** A physical disk or partition used by LVM.
*   **Volume Group (VG):** A collection of one or more PVs, forming a pool of storage.
*   **Logical Volume (LV):** A virtual partition carved out of a VG, which can be resized dynamically.
*   **`pvscan`, `vgscan`, `lvscan`:** Commands to scan for and display LVM components.
*   **S.M.A.R.T.:** Technology for monitoring disk health and predicting failures.

#### Hands-on activity
**Scenario:** You need to perform a health check on the storage of your server, specifically checking disk space, identifying large directories, and verifying LVM logical volume status.

**Task:** Create an Ansible playbook that performs the following on a target host:
1.  Reports disk space usage for all mounted filesystems.
2.  Finds the top 5 largest directories under `/var` (excluding `/var/lib/docker` if present, to focus on system logs/data).
3.  Lists all active Logical Volumes (LVs).
4.  Reports any inactive Volume Groups (VGs).

**`storage_health_check.yml` template:**
```yaml
---
- name: Perform Storage Health Check
  hosts: your_target_host # Replace with a host in your inventory
  become: yes
  tasks:
    - name: Get disk space usage
      ansible.builtin.command: df -h
      register: df_output
      changed_when: false

    - name: Display disk space usage
      debug:
        msg: |
          Disk Space Usage:
          -----------------
          {{ df_output.stdout }}

    - name: Find top 5 largest directories under /var (excluding /var/lib/docker)
      ansible.builtin.shell: |
        du -h --max-depth=1 /var | grep -v "/var/lib/docker" | sort -rh | head -n 5
      register: du_output
      changed_when: false

    - name: Display top 5 largest directories in /var
      debug:
        msg: |
          Top 5 Largest Directories in /var (excluding /var/lib/docker):
          -------------------------------------------------------------
          {{ du_output.stdout }}

    - name: List active Logical Volumes
      ansible.builtin.command: lvscan --active
      register: lvscan_active_output
      changed_when: false
      ignore_errors: true # lvscan might fail if no LVM is present

    - name: Display active Logical Volumes
      debug:
        msg: |
          Active Logical Volumes:
          -----------------------
          {{ lvscan_active_output.stdout | default('No active LVs found or LVM not present.') }}

    - name: List inactive Volume Groups
      ansible.builtin.command: vgscan --inactive
      register: vgscan_inactive_output
      changed_when: false
      ignore_errors: true # vgscan might fail if no LVM is present

    - name: Display inactive Volume Groups
      debug:
        msg: |
          Inactive Volume Groups:
          -----------------------
          {{ vgscan_inactive_output.stdout | default('No inactive VGs found or LVM not present.') }}

```
**Instructions:**
1.  Save the above content as `storage_health_check.yml`.
2.  Replace `your_target_host` with a valid hostname from your Ansible inventory.
3.  Run the playbook: `ansible-playbook storage_health_check.yml`.
4.  Review the debug output for any potential storage issues.

#### Assessment idea
1.  **Question:** You receive an alert that the `/var` filesystem on a critical server is 100% full. After running `df -h`, you confirm this. Which command would you use next to identify which specific directories within `/var` are consuming the most space?
    *   A) `lsblk`
    *   B) `fdisk -l`
    *   C) `du -sh /var/*`
    *   D) `xfs_repair /dev/sda1`

    **Correct Answer:** C) `du -sh /var/*`
    **Explanation:** `du -sh /var/*` (or `du -sh --max-depth=1 /var`) is the correct command to recursively summarize the disk usage of each directory directly under `/var`. This helps pinpoint the specific subdirectories that are consuming the most space, allowing you to investigate further. `lsblk` and `fdisk -l` show block device and partition information, which is not relevant for finding large files/directories. `xfs_repair` is for filesystem corruption, not space usage.

2.  **Question:** You suspect filesystem corruption on an XFS filesystem mounted at `/data`. You've identified the underlying device as `/dev/vg01/lvdata`. What is the **critical first step** before attempting to repair this filesystem with `xfs_repair`?
    *   A) Reboot the server.
    *   B) Run `vgchange -ay vg01`.
    *   C) Unmount the `/data` filesystem.
    *   D) Check `dmesg` for I/O errors.

    **Correct Answer:** C) Unmount the `/data` filesystem.
    **Explanation:** It is absolutely critical to unmount an XFS filesystem before running `xfs_repair` on it. Running `xfs_repair` on a mounted filesystem can lead to severe and irreversible data corruption. While checking `dmesg` is good for diagnosis, and rebooting might put you in rescue mode where unmounting is easier, unmounting the filesystem is the direct prerequisite for `xfs_repair`. `vgchange` activates LVM volumes, which is not the primary concern here.

#### AI generation note
Create a 14-minute mixed-format lesson. Start with a 4-minute animated diagram explaining the LVM hierarchy (PVs -> VGs -> LVs -> Filesystems). Transition to a 7-minute live terminal demo. Show `df -h`, `du -sh /var/log`, `lsblk`, `lvscan`, `vgscan`, and `pvscan` on a VM with LVM configured. Simulate a full filesystem scenario and show how to locate large files. Briefly explain the concept of `xfs_repair` and `fsck`, emphasizing the **critical safety note** about unmounting. Conclude with a 3-minute segment demonstrating an Ansible playbook that checks disk space and LVM status, highlighting how to collect this information across multiple hosts. Include a reflection prompt about backup strategies.

---

### Chapter 8.5 — Service and Application Troubleshooting

#### Learning objectives
*   Diagnose and resolve common issues with `systemd` managed services.
*   Analyze application logs to pinpoint the root cause of application failures.
*   Troubleshoot issues with common services like web servers (Apache, Nginx) and databases (MariaDB, PostgreSQL).
*   Understand the role of SELinux and firewall in service accessibility.
*   Automate service status checks and log collection using Ansible.

#### Detailed lesson content
When an application or service isn't working, the first place to look is its status and logs. On Red Hat systems, `systemd` manages most services. The command `systemctl status <service_name>` is your initial diagnostic tool. It tells you if a service is `active (running)`, `inactive (dead)`, or `failed`. If it's `failed`, the output often includes recent log entries that provide clues. For example, `systemctl status httpd` will show you if the Apache web server is running and any recent errors. If a service is `inactive`, try `systemctl start <service_name>`. If it fails to start, immediately follow up with `journalctl -u <service_name> -xe` to get detailed error messages. Common reasons for service failures include incorrect configuration files, missing dependencies, port conflicts, or permission issues.

Application logs are paramount for understanding why an application is misbehaving. While `systemd` captures some output, many applications maintain their own dedicated log files, typically found in `/var/log/<application_name>/` or within the application's installation directory. For example, Apache logs are usually in `/var/log/httpd/` (access_log, error_log), and MariaDB logs are often in `/var/log/mariadb/` (or `/var/log/mysql/`). When examining logs, look for keywords like "error," "fail," "warning," "exception," or specific error codes. Pay attention to timestamps to correlate issues with events. Tools like `tail -f <log_file>` are useful for real-time monitoring of logs as you try to reproduce an issue. `grep` and `awk` are powerful for filtering and parsing large log files to find relevant information.

Troubleshooting common services involves specific checks. For web servers like Apache (`httpd`) or Nginx:
*   **Configuration:** Check syntax with `apachectl configtest` or `nginx -t`. A syntax error will prevent the service from starting.
*   **Ports:** Ensure the web server is listening on the correct port (e.g., 80, 443) using `ss -tunap | grep :80`.
*   **Document Root:** Verify that the document root directory (e.g., `/var/www/html`) exists and contains the necessary files, and that the web server process has read permissions.
*   **SELinux/Firewall:** These are frequent culprits. If you can access the web server locally but not remotely, check `firewall-cmd --list-all` to ensure ports 80/443 are open. If the web server serves a "Forbidden" page or `audit.log` shows AVC denials, SELinux might be blocking access to files or network ports. `setenforce 0` (temporarily permissive mode) can help diagnose if SELinux is the issue, but remember to re-enable it and apply correct SELinux contexts with `semanage fcontext` and `restorecon`.

For databases like MariaDB or PostgreSQL:
*   **Service Status:** `systemctl status mariadb` or `systemctl status postgresql`.
*   **Log Files:** Check `/var/log/mariadb/mariadb.log` or `/var/lib/pgsql/data/log/postgresql-<version>-<date>.log` for startup errors, connection issues, or query failures.
*   **Client Connectivity:** Test connectivity from the application server using command-line clients (e.g., `mysql -u user -p -h <db_ip>`) to isolate if the problem is with the database itself or the application's connection string.
*   **Permissions:** Database user permissions are critical. Ensure the application user has the necessary privileges.

A common mistake is to restart a service repeatedly without investigating the root cause, which can mask the underlying problem or make it harder to diagnose. Another pitfall is ignoring SELinux or firewall, especially after fresh installations or migrations. Always consider these security layers when a service is inaccessible.

Ansible is an excellent tool for automating service checks and even for basic remediation. You can write playbooks to:
*   **Check service status:** Use the `systemd` module to query service states across multiple hosts.
*   **Gather logs:** Use the `fetch` module to retrieve application log files from remote servers for centralized analysis.
*   **Verify configuration:** Use the `command` or `shell` module to run configuration syntax checks (e.g., `nginx -t`).
*   **Manage SELinux contexts:** Use the `sefcontext` and `restorecon` commands via the `command` module to ensure correct file contexts.
*   **Restart services:** If a problem is known to be transient, you can automate service restarts, but always with caution and monitoring.

```yaml
- name: Troubleshoot web service
  hosts: webservers
  become: yes
  tasks:
    - name: Check httpd service status
      systemd:
        name: httpd
      register: httpd_status

    - name: Display httpd service status
      debug:
        msg: "HTTPD service status: {{ httpd_status.status.ActiveState }}"

    - name: Fetch httpd error log if service is failed
      ansible.builtin.fetch:
        src: /var/log/httpd/error_log
        dest: /tmp/ansible_logs/{{ inventory_hostname }}/
        flat: yes
      when: httpd_status.status.ActiveState == 'failed'

    - name: Check firewalld rules for http
      command: firewall-cmd --list-all --zone=public | grep http
      register: firewall_http_check
      changed_when: false

    - name: Display firewalld http rule check
      debug:
        msg: "Firewall HTTP rule check: {{ firewall_http_check.stdout }}"

    - name: Check SELinux context for web root
      command: ls -Zd /var/www/html
      register: selinux_web_root_context
      changed_when: false

    - name: Display SELinux context for web root
      debug:
        msg: "SELinux context for /var/www/html: {{ selinux_web_root_context.stdout }}"
```
This playbook demonstrates how to combine `systemd` status checks, log fetching, and security context verification to get a comprehensive picture of a web service's health.

#### Key concepts
*   **`systemctl status <service_name>`:** Checks the current status of a `systemd` service.
*   **`journalctl -u <service_name> -xe`:** Displays detailed log entries for a specific `systemd` service, including explanatory text.
*   **Application Logs:** Dedicated log files maintained by applications (e.g., `/var/log/httpd/error_log`) providing detailed operational information.
*   **`tail -f`:** Follows the end of a file, showing new lines as they are added, useful for real-time log monitoring.
*   **SELinux (Security-Enhanced Linux):** A security mechanism that enforces mandatory access controls, often a source of "permission denied" errors for services.
*   **`firewalld`:** The dynamic firewall daemon that controls network access to services.
*   **Port Conflict:** When two services attempt to listen on the same network port, causing one or both to fail.
*   **`apachectl configtest` / `nginx -t`:** Commands to test the syntax of Apache and Nginx configuration files, respectively.

#### Hands-on activity
**Scenario:** A newly deployed web application on your `appserver` is intermittently failing to serve content, sometimes showing a "Forbidden" error, other times just a blank page. You need to diagnose the issue using Ansible.

**Task:** Create an Ansible playbook that performs the following on your `appserver`:
1.  Checks the status of the `httpd` service.
2.  Fetches the last 100 lines of `/var/log/httpd/error_log` to the control node.
3.  Checks the SELinux context of the web application's document root (`/var/www/html`).
4.  Lists the `firewalld` rules for the `public` zone to ensure HTTP/HTTPS are allowed.

**`troubleshoot_app_service.yml` template:**
```yaml
---
- name: Troubleshoot Web Application Service
  hosts: appservers # Assuming your appserver is in this group
  become: yes
  tasks:
    - name: Check httpd service status
      systemd:
        name: httpd
      register: httpd_status

    - name: Display httpd service status
      debug:
        msg: "HTTPD service status on {{ inventory_hostname }}: {{ httpd_status.status.ActiveState }}"

    - name: Fetch httpd error log
      ansible.builtin.shell: tail -n 100 /var/log/httpd/error_log
      register: error_log_content
      changed_when: false
      ignore_errors: true # Continue even if log file is not found

    - name: Save httpd error log to control node
      delegate_to: localhost
      copy:
        content: |
          Error Log from {{ inventory_hostname }}:
          -------------------------------------
          {{ error_log_content.stdout | default('Error log not found or empty.') }}
        dest: "./app_logs/{{ inventory_hostname }}_error_log.txt"
      when: error_log_content.stdout is defined

    - name: Check SELinux context of web document root
      ansible.builtin.command: ls -Zd /var/www/html
      register: selinux_context
      changed_when: false

    - name: Display SELinux context
      debug:
        msg: "SELinux context for /var/www/html on {{ inventory_hostname }}: {{ selinux_context.stdout }}"

    - name: List firewalld rules for public zone
      ansible.builtin.command: firewall-cmd --list-all --zone=public
      register: firewall_rules
      changed_when: false

    - name: Display firewalld rules
      debug:
        msg: |
          Firewalld Public Zone Rules on {{ inventory_hostname }}:
          ---------------------------------------------------
          {{ firewall_rules.stdout }}

```
**Instructions:**
1.  Save the above content as `troubleshoot_app_service.yml`.
2.  Ensure `appservers` group is defined in your Ansible inventory.
3.  Run the playbook: `ansible-playbook troubleshoot_app_service.yml`.
4.  Inspect the debug output and the saved error log file in `./app_logs/` to diagnose the issue.

#### Assessment idea
1.  **Question:** A critical `systemd` service, `mywebapp.service`, fails to start after a configuration change. You run `systemctl status mywebapp` and see `Active: failed`. Which command provides the most detailed information about why the service failed to start?
    *   A) `tail -f /var/log/messages`
    *   B) `journalctl -u mywebapp -xe`
    *   C) `ps aux | grep mywebapp`
    *   D) `firewall-cmd --list-all`

    **Correct Answer:** B) `journalctl -u mywebapp -xe`
    **Explanation:** `journalctl -u mywebapp -xe` is the most effective command. `-u mywebapp` filters the journal for the specific service, `-x` adds explanatory text, and `-e` jumps to the end of the journal, showing the latest, most relevant entries, which are crucial for diagnosing startup failures. `tail -f /var/log/messages` might show some general system messages but won't be as specific. `ps aux` checks running processes, and `firewall-cmd` checks firewall rules, neither of which directly explain why a service failed to start.

2.  **Question:** Your Apache web server is running, and `firewall-cmd --list-all` shows that `http` and `https` services are allowed in the `public` zone. However, when you try to access a new web application in `/var/www/html/newapp`, you get a "403 Forbidden" error. Which security mechanism is most likely causing this issue, and what is a common way to diagnose it?
    *   A) NetworkManager blocking access; check `nmcli`.
    *   B) Incorrect file permissions; check `ls -l /var/www/html/newapp`.
    *   C) SELinux preventing access; check `audit.log` or temporarily set `setenforce 0`.
    *   D) DNS resolution failure; check `/etc/resolv.conf`.

    **Correct Answer:** C) SELinux preventing access; check `audit.log` or temporarily set `setenforce 0`.
    **Explanation:** A "403 Forbidden" error, especially when the web server is running and firewall rules are correct, is a strong indicator of an SELinux issue. SELinux can prevent the web server process from accessing files or directories with incorrect security contexts. Checking `/var/log/audit/audit.log` for AVC (Access Vector Cache) denials is the primary diagnostic step. Temporarily setting `setenforce 0` (permissive mode) can confirm if SELinux is the culprit, but it should be re-enabled after diagnosis. Incorrect file permissions (B) are also a possibility, but SELinux often overlays traditional permissions and is a very common cause of "Forbidden" errors on Red Hat systems.

#### AI generation note
Create a 15-minute live coding and terminal demo. Start with a non-functional web service (e.g., `httpd` with a syntax error in its config, or an SELinux context issue on its document root). Walk through the diagnostic steps: `systemctl status httpd`, `journalctl -u httpd -xe`, `apachectl configtest`, checking `/var/log/httpd/error_log`, then `ls -Zd /var/www/html` and `firewall-cmd --list-all`. Show how to identify the specific error. Then, demonstrate an Ansible playbook that automates these checks, fetches logs, and reports SELinux contexts and firewall rules. Use a split-screen view for code and terminal output. Include a common mistake warning about ignoring SELinux.

---

### Chapter 8.6 — Optimizing System Resources with Ansible

#### Learning objectives
*   Identify opportunities for system resource optimization on Linux servers.
*   Configure kernel parameters using `sysctl` to improve performance.
*   Manage resource limits for users and processes using `ulimit` and `systemd` unit files.
*   Implement cron jobs for automated system maintenance and optimization tasks.
*   Automate the application of optimization settings across multiple hosts using Ansible.

#### Detailed lesson content
System optimization is about tuning your server to perform its best for its specific workload. It's not always about adding more hardware; often, it's about making better use of existing resources. Before optimizing, remember the golden rule: **measure, change, measure again.** Without a baseline and post-change measurements, you won't know if your optimizations are effective or if they've introduced new problems.

One significant area for optimization is kernel parameters, managed via `sysctl`. These parameters control various aspects of the kernel's behavior, from network buffer sizes to virtual memory management. For example, if you're running a high-traffic web server, you might want to increase `net.core.somaxconn` (maximum number of connections that can be queued for acceptance) or `net.ipv4.tcp_tw_reuse` (allows reusing `TIME_WAIT` sockets). To view current kernel parameters, use `sysctl -a`. To set a temporary parameter, use `sysctl -w <parameter>=<value>`. For persistent changes, you edit files in `/etc/sysctl.d/` (e.g., `/etc/sysctl.d/99-custom-settings.conf`) and then apply them with `sysctl --system`. A common mistake is making changes without understanding their impact, which can lead to system instability or security vulnerabilities. Always consult documentation and test thoroughly.

Resource limits, often referred to as `ulimit` settings, control the maximum resources a process or user can consume, such as the number of open files, maximum memory, or maximum number of processes. These are crucial for preventing a single runaway process from consuming all system resources. You can view current limits with `ulimit -a`. For system-wide persistent changes, you typically edit `/etc/security/limits.conf` or files in `/etc/security/limits.d/`. For example, to allow a database user to open more files, you might add `dbuser soft nofile 65536` and `dbuser hard nofile 65536`. For services managed by `systemd`, resource limits can also be set directly in the service unit file using directives like `LimitNOFILE` or `LimitNPROC` in the `[Service]` section. After modifying a unit file, remember to run `systemctl daemon-reload` and then restart the service.

Automated maintenance tasks are another form of optimization. `cron` is the standard utility for scheduling commands or scripts to run periodically. Common cron jobs include:
*   Log rotation (often handled by `logrotate`, but custom scripts can be scheduled).
*   Temporary file cleanup (`tmpwatch` or custom scripts).
*   Database backups.
*   Performance data collection (as discussed in Chapter 8.2).
*   Security scans.

You can manage user-specific cron jobs with `crontab -e` or system-wide cron jobs by placing scripts in `/etc/cron.daily`, `/etc/cron.weekly`, `/etc/cron.monthly`, or by editing `/etc/crontab`. When writing cron jobs, always use absolute paths for commands and consider the environment variables available to cron, which are often minimal. A common mistake is writing a script that works interactively but fails in cron due to missing environment variables or relative paths.

Ansible is exceptionally well-suited for applying optimization settings across an entire fleet of servers. Instead of manually editing `sysctl` files or `limits.conf` on dozens of machines, you can use Ansible modules to ensure consistency and repeatability.
*   **`sysctl` module:** This module allows you to manage kernel parameters.
    ```yaml
    - name: Set kernel parameter for high connections
      ansible.posix.sysctl:
        name: net.core.somaxconn
        value: "65536"
        state: present
        sysctl_set: yes
        reload: yes
    ```
*   **`pam_limits` module:** This module manages entries in `/etc/security/limits.conf`.
    ```yaml
    - name: Increase nofile limit for dbuser
      community.general.pam_limits:
        domain: dbuser
        limit_type: soft
        limit_item: nofile
        value: 65536
    ```
*   **`cron` module:** For scheduling cron jobs.
    ```yaml
    - name: Schedule daily log cleanup script
      ansible.builtin.cron:
        name: "cleanup old logs"
        minute: "0"
        hour: "2"
        job: "/usr/local/bin/cleanup_logs.sh"
        user: root
    ```
*   **`systemd` module:** For managing `systemd` service unit files, including setting `LimitNOFILE`.
    ```yaml
    - name: Set LimitNOFILE for custom service
      ansible.builtin.lineinfile:
        path: /etc/systemd/system/mycustomapp.service
        regexp: '^LimitNOFILE='
        line: 'LimitNOFILE=65536'
        state: present
      notify: reload systemd daemon and restart mycustomapp
    ```
These Ansible modules ensure that your optimization strategies are applied uniformly and can be easily audited and rolled back if necessary. Always test your optimization changes in a staging environment before deploying to production.

#### Key concepts
*   **`sysctl`:** A utility to modify kernel parameters at runtime and persistently.
*   **Kernel Parameters:** Tunable settings that control various aspects of the Linux kernel's behavior.
*   **`ulimit`:** A command to get and set resource limits for processes.
*   **Resource Limits:** Constraints on the amount of system resources (e.g., open files, memory) a user or process can consume.
*   **`/etc/security/limits.conf`:** Configuration file for setting persistent resource limits for users and groups.
*   **`cron`:** A time-based job scheduler in Unix-like computer operating systems.
*   **`crontab`:** The command used to create, view, and edit cron jobs.
*   **`systemd` unit files:** Configuration files for `systemd` services, where resource limits can also be defined.
*   **Optimization Baseline:** Initial performance metrics used to evaluate the effectiveness of tuning changes.

#### Hands-on activity
**Scenario:** You need to optimize a group of web servers (`webservers`) to handle more concurrent connections and ensure a daily log cleanup script runs.

**Task:** Create an Ansible playbook that performs the following:
1.  Sets the `net.core.somaxconn` kernel parameter to `65536` for better network queue handling.
2.  Increases the `nofile` (number of open files) `ulimit` for the `apache` user (or the user running your web server) to `65536` (both soft and hard limits).
3.  Schedules a daily cron job to run a hypothetical log cleanup script (`/usr/local/bin/cleanup_web_logs.sh`) at 3:00 AM.
4.  Creates the placeholder cleanup script.

**`optimize_webservers.yml` template:**
```yaml
---
- name: Optimize Web Servers for Performance and Maintenance
  hosts: webservers
  become: yes
  tasks:
    - name: Set net.core.somaxconn kernel parameter
      ansible.posix.sysctl:
        name: net.core.somaxconn
        value: "65536"
        state: present
        sysctl_set: yes
        reload: yes

    - name: Increase nofile ulimit for apache user
      community.general.pam_limits:
        domain: apache # Or the user your web server runs as (e.g., www-data, nginx)
        limit_type: soft
        limit_item: nofile
        value: 65536

    - name: Increase hard nofile ulimit for apache user
      community.general.pam_limits:
        domain: apache
        limit_type: hard
        limit_item: nofile
        value: 65536

    - name: Create placeholder web log cleanup script
      ansible.builtin.copy:
        content: |
          #!/bin/bash
          # Web log cleanup script
          echo "$(date): Running web log cleanup..." >> /var/log/web_cleanup.log
          find /var/log/httpd -type f -name "*.log-*" -mtime +7 -delete
          echo "$(date): Web log cleanup completed." >> /var/log/web_cleanup.log
        dest: /usr/local/bin/cleanup_web_logs.sh
        mode: '0755'

    - name: Schedule daily web log cleanup cron job
      ansible.builtin.cron:
        name: "Daily web log cleanup"
        minute: "0"
        hour: "3"
        job: "/usr/local/bin/cleanup_web_logs.sh"
        user: root
        state: present

```
**Instructions:**
1.  Save the above content as `optimize_webservers.yml`.
2.  Ensure `webservers` group is defined in your Ansible inventory.
3.  Run the playbook: `ansible-playbook optimize_webservers.yml`.
4.  Verify the `sysctl` setting with `sysctl net.core.somaxconn` on a target host.
5.  Verify the `ulimit` setting by checking `/etc/security/limits.conf` and then running `su - apache -c "ulimit -n"` (you might need to log out and back in for changes to take effect for interactive sessions, but services pick them up on restart).
6.  Verify the cron job with `crontab -l` as root on a target host.

#### Assessment idea
1.  **Question:** You need to persistently increase the maximum number of open files for a specific service managed by `systemd`. Which of the following is the most direct and recommended way to achieve this using Ansible?
    *   A) Edit `/etc/security/limits.conf` using the `ansible.builtin.lineinfile` module.
    *   B) Use the `ansible.posix.sysctl` module to set `fs.file-max`.
    *   C) Modify the service's `systemd` unit file (e.g., `/etc/systemd/system/myservice.service`) to include `LimitNOFILE` and then `systemctl daemon-reload`.
    *   D) Schedule a cron job to run `ulimit -n` at boot.

    **Correct Answer:** C) Modify the service's `systemd` unit file (e.g., `/etc/systemd/system/myservice.service`) to include `LimitNOFILE` and then `systemctl daemon-reload`.
    **Explanation:** For `systemd`-managed services, the `LimitNOFILE` directive within the `[Service]` section of its unit file is the most direct and recommended way to set resource limits specifically for that service. This overrides global `ulimit` settings for the service. While `limits.conf` (A) can set global user limits, it's less granular for specific services. `sysctl fs.file-max` (B) sets a system-wide maximum, not a per-process limit. A cron job (D) would not apply to a running service's limits.

2.  **Question:** You've implemented a custom kernel parameter change using `sysctl -w net.ipv4.tcp_tw_reuse=1`. However, after a reboot, the setting reverts to its default. How can you ensure this setting persists across reboots using Ansible?
    *   A) Add the command `sysctl -w net.ipv4.tcp_tw_reuse=1` to `/etc/rc.local`.
    *   B) Use the `ansible.posix.sysctl` module with `state: present` and `sysctl_set: yes`.
    *   C) Modify the `GRUB_CMDLINE_LINUX` parameter in `/etc/default/grub`.
    *   D) Create a cron job to run `sysctl -w` every minute.

    **Correct Answer:** B) Use the `ansible.posix.sysctl` module with `state: present` and `sysctl_set: yes`.
    **Explanation:** The `ansible.posix.sysctl` module is designed to manage kernel parameters persistently. When `state: present` and `sysctl_set: yes` are used, Ansible will ensure the parameter is set at runtime and also creates/updates a configuration file in `/etc/sysctl.d/` (or `/etc/sysctl.conf`) to make the change persistent across reboots. Options A and D are less robust or inefficient, and C is for kernel boot parameters, not runtime `sysctl` settings.

#### AI generation note
Create a 14-minute live coding and terminal demo. Start with a brief explanation of `sysctl` and `ulimit` (2 minutes). Then, spend 8 minutes demonstrating how to manually change a `sysctl` parameter (`net.core.somaxconn`) and a `ulimit` setting (`nofile` for a user) and verify them. Show how these changes are temporary unless made persistent. Transition to a 4-minute segment showing an Ansible playbook using the `sysctl`, `pam_limits`, and `cron` modules to apply these changes persistently across multiple hosts. Emphasize the `sysctl_set: yes` and `reload: yes` options. Include a common mistake warning about not testing changes. Use split-screen for code and terminal.

---

### Chapter 8.7 — RHCE Exam Preparation Strategies

#### Learning objectives
*   Understand the format and structure of the Red Hat Certified Engineer (RHCE) exam (EX294).
*   Develop effective time management and problem-solving strategies for the performance-based exam.
*   Set up a personal practice environment that closely mimics the exam conditions.
*   Identify common pitfalls and strategies to avoid them during the exam.
*   Leverage official Red Hat documentation and practice resources effectively.

#### Detailed lesson content
The Red Hat Certified Engineer (RHCE) exam (EX294) is a performance-based exam, which means you won't be answering multiple-choice questions. Instead, you'll be given a set of real-world tasks on a live system, and you'll need to use your Ansible automation skills to complete them. This format requires not just knowledge, but practical application and problem-solving under pressure. Understanding this fundamental difference is the first step in effective preparation. The exam typically involves configuring multiple systems (nodes) from an Ansible control node, performing tasks such as managing services, configuring storage, setting up networking, and enforcing security policies, all using Ansible playbooks.

Effective time management is critical. The exam has a strict time limit (typically 4 hours), and you'll have numerous tasks to complete. A common strategy is to first read through all the tasks carefully. Identify tasks that build upon each other and those that are independent. Prioritize tasks: tackle the easier, higher-point tasks first to build confidence and secure points. Don't get stuck on a single difficult task for too long. If you're struggling, make a note, move on, and return to it later if time permits. Remember that partial credit is often awarded, so even an incomplete solution might earn some points.

Setting up a personal practice environment that closely mimics the exam conditions is invaluable. This means:
1.  **Using a Red Hat Enterprise Linux (RHEL) system:** Ideally, use the same major version as the exam. CentOS Stream or Rocky Linux can be good alternatives for practice, as they are downstream of RHEL.
2.  **Dedicated Ansible Control Node:** Practice from a clean Ansible control node, just like in the exam.
3.  **Multiple Managed Nodes:** Set up at least 2-3 managed nodes to practice deploying changes across multiple targets. Virtual machines (using VirtualBox, KVM, or cloud instances) are perfect for this.
4.  **No Internet Access (for tasks):** While you'll need internet for updates and package installations during setup, practice solving problems without relying on external search engines. The exam environment typically provides local access to official Red Hat documentation.
5.  **Clean Slate:** Practice resetting your environment to a known state after each practice session. This simulates the exam where you start with a clean system.

During the exam, you'll have access to the official Red Hat documentation. Learn how to use `man` pages, `info` pages, and the local `docs.redhat.com` equivalent efficiently. Knowing how to quickly find information about Ansible modules, `systemd` services, or `firewalld` commands will save you precious time. Don't memorize every single parameter; instead, focus on understanding concepts and knowing where to find the details.

Common pitfalls to avoid:
*   **Not using Ansible:** The RHCE is an Ansible automation exam. While you *can* perform some tasks manually, you won't get full credit unless you use Ansible. Practice writing idempotent playbooks.
*   **Lack of Idempotence:** Your playbooks should be able to run multiple times without causing unintended side effects or errors if the desired state is already met.
*   **Forgetting `become: yes`:** Many tasks require root privileges. Forgetting `become: yes` or `become_user: root` in your tasks is a common mistake.
*   **Incorrect Inventory:** Ensure your Ansible inventory is correctly configured and that you can reach all managed nodes.
*   **SELinux/Firewall Issues:** As discussed in previous chapters, these security features are often overlooked and can cause tasks to fail. Always consider them.
*   **Not verifying tasks:** After running an Ansible playbook, always verify that the task was completed successfully on the managed node. Don't assume success.
*   **Ignoring instructions:** Read each task's requirements carefully. If it specifies a particular user, directory, or configuration, adhere to it precisely.

Ansible itself can be used to set up your practice lab. You can write an Ansible playbook to provision virtual machines, configure their network settings, install Ansible on the control node, and set up the initial inventory. This not only automates your lab setup but also gives you more practice with Ansible itself.

```yaml
- name: Setup RHCE Practice Lab Environment
  hosts: localhost
  connection: local
  gather_facts: no
  vars:
    vm_count: 3
    vm_base_name: rhce-node
    vm_memory: 2048
    vm_cpus: 1
    vm_disk_size: 20G
    network_interface: enp0s3 # Adjust based on your VirtualBox/KVM setup

  tasks:
    - name: Ensure libvirt/VirtualBox is installed (example for VM provisioning)
      ansible.builtin.package:
        name: "{{ item }}"
        state: present
      loop:
        - libvirt-daemon-kvm
        - virt-install
        - virt-manager
      # OR for VirtualBox:
      # - name: Install VirtualBox (manual step or use community.general.virtualbox modules)
      #   debug:
      #     msg: "Please ensure VirtualBox is installed manually or via a separate playbook."

    - name: Create virtual machines (example using virt-install for KVM)
      ansible.builtin.command: >
        virt-install
        --name {{ vm_base_name }}{{ item }}
        --ram {{ vm_memory }}
        --vcpus {{ vm_cpus }}
        --disk path=/var/lib/libvirt/images/{{ vm_base_name }}{{ item }}.qcow2,size={{ vm_disk_size | regex_replace('G', '') }}
        --os-variant rhel8.0
        --network bridge=virbr0,model=virtio
        --location 'http://download.eng.bos.redhat.com/rhel-8/rhel-8-for-x86_64-baseos-rpms/os/' # Replace with local ISO or accessible URL
        --extra-args "console=ttyS0,115200n8 serial console=tty0 inst.ks=http://your_kickstart_server/kickstart.cfg" # Adjust for kickstart
        --noautoconsole
      loop: "{{ range(1, vm_count + 1) | list }}"
      ignore_errors: true # In case VMs already exist
      # NOTE: This is a complex task. A full VM provisioning playbook is beyond this scope but shows the concept.
      # For a simpler setup, manually create VMs and then use Ansible for post-provisioning.

    - name: Wait for VMs to be reachable (adjust for specific VM IP discovery)
      ansible.builtin.wait_for_connection:
        delay: 10
        timeout: 300
      delegate_to: "{{ vm_base_name }}{{ item }}" # Assumes VMs are reachable by name in inventory
      loop: "{{ range(1, vm_count + 1) | list }}"
      ignore_errors: true # In case some VMs are not yet up

    - name: Add VM IPs to inventory (manual step for simplicity, or dynamic inventory)
      debug:
        msg: "Please manually add the IPs of {{ vm_base_name }}1, {{ vm_base_name }}2, etc., to your Ansible inventory."

    - name: Configure initial Ansible SSH access (example)
      ansible.builtin.shell: |
        ssh-copy-id -o StrictHostKeyChecking=no -f root@{{ vm_base_name }}{{ item }} # Assumes root login for initial setup
      loop: "{{ range(1, vm_count + 1) | list }}"
      delegate_to: localhost
      ignore_errors: true # If already configured
      # NOTE: This assumes passwordless SSH from control node to VMs for root.

    - name: Ensure Ansible is installed on control node
      ansible.builtin.package:
        name: ansible-core
        state: present

    - name: Verify Ansible inventory
      ansible.builtin.command: ansible-inventory --list
      delegate_to: localhost
      run_once: yes

```
This playbook illustrates the concept of using Ansible to prepare a practice environment, although actual VM provisioning can be complex and platform-dependent. The key is to automate as much of your lab setup as possible.

#### Key concepts
*   **Performance-Based Exam:** An exam format where candidates complete tasks on a live system, rather than answering theoretical questions.
*   **EX294:** The exam code for the Red Hat Certified Engineer certification.
*   **Ansible Control Node:** The machine from which Ansible commands and playbooks are executed.
*   **Managed Node:** A remote host that Ansible manages.
*   **Idempotence:** The property of an operation that produces the same result regardless of how many times it is executed. Essential for Ansible playbooks.
*   **Practice Environment:** A replicated exam-like setup for hands-on preparation.
*   **Official Documentation:** Red Hat's comprehensive documentation, available locally during the exam, serving as the primary reference.
*   **Time Management:** Strategically allocating time to tasks during the exam to maximize points.
*   **Verification:** The critical step of confirming that an Ansible task has successfully achieved its desired state on the managed node.

#### Hands-on activity
**Scenario:** You need to set up a consistent practice environment for your RHCE exam preparation, including an Ansible inventory and basic connectivity checks.

**Task:**
1.  **Manual VM Setup:** Manually create at least two RHEL 8/9 virtual machines (e.g., `node1`, `node2`) using VirtualBox, KVM, or a cloud provider. Ensure they have network connectivity and SSH access.
2.  **Ansible Inventory:** Create an Ansible inventory file (`inventory.ini`) on your control node that includes these two VMs in a `[rhce_nodes]` group.
3.  **Connectivity Playbook:** Write an Ansible playbook (`check_lab.yml`) that pings all hosts in the `[rhce_nodes]` group and gathers their `ansible_facts` to confirm connectivity and basic system information.
4.  **Verification:** Run the playbook and verify that all nodes are reachable and facts are gathered.

**`inventory.ini` template:**
```ini
[rhce_nodes]
node1 ansible_host=192.168.122.10 # Replace with actual IP or hostname
node2 ansible_host=192.168.122.11 # Replace with actual IP or hostname

[all:vars]
ansible_user=devops # Replace with your SSH user
ansible_private_key_file=~/.ssh/id_rsa # Replace with your SSH key path
ansible_python_interpreter=/usr/bin/python3
```

**`check_lab.yml` template:**
```yaml
---
- name: Verify RHCE Practice Lab Connectivity
  hosts: rhce_nodes
  gather_facts: yes
  tasks:
    - name: Ping all managed nodes
      ansible.builtin.ping:

    - name: Display basic system information
      debug:
        msg: |
          Hostname: {{ ansible_hostname }}
          OS: {{ ansible_distribution }} {{ ansible_distribution_major_version }}
          Kernel: {{ ansible_kernel }}
          IP Address: {{ ansible_default_ipv4.address }}

```
**Instructions:**
1.  Set up your VMs as described.
2.  Create `inventory.ini` and `check_lab.yml` with the provided content, adjusting IPs and SSH details.
3.  Run the playbook: `ansible-playbook -i inventory.ini check_lab.yml`.
4.  Observe the output to confirm successful pings and fact gathering from both `node1` and `node2`.

#### Assessment idea
1.  **Question:** You are taking the RHCE exam and encounter a task that requires configuring a complex `firewalld` rule. You remember the general concept but can't recall the exact syntax for the `firewall-cmd` command. What is the most effective strategy to find the correct syntax within the exam environment?
    *   A) Skip the task and move on, hoping to remember it later.
    *   B) Try various combinations of `firewall-cmd` options until one works.
    *   C) Use `man firewall-cmd` or consult the local Red Hat documentation for `firewalld`.
    *   D) Attempt to guess the syntax based on other `firewall-cmd` examples you know.

    **Correct Answer:** C) Use `man firewall-cmd` or consult the local Red Hat documentation for `firewalld`.
    **Explanation:** The RHCE exam environment provides access to official Red Hat documentation (man pages, info pages, and potentially a local version of `docs.redhat.com`). The most effective strategy is to leverage these resources to find the precise syntax and examples, rather than guessing or wasting time on trial and error.

2.  **Question:** During an RHCE practice lab, you write an Ansible playbook to create a new user. You run it once, and it succeeds. You then run it a second time, and it reports a "changed" status, even though the user already exists. What principle of good Ansible playbook design is your playbook violating, and why is it important for the RHCE exam?
    *   A) It's violating modularity; playbooks should be broken into smaller roles.
    *   B) It's violating idempotence; the playbook should produce the same result regardless of how many times it's run if the target state is met. This is crucial for reliability and avoiding unintended changes.
    *   C) It's violating parallelism; the playbook should run tasks concurrently.
    *   D) It's violating security; the playbook might expose sensitive information.

    **Correct Answer:** B) It's violating idempotence; the playbook should produce the same result regardless of how many times it's run if the target state is met. This is crucial for reliability and avoiding unintended changes.
    **Explanation:** Idempotence is a core principle of Ansible. A well-written Ansible task (or playbook) should only report "changed" if an actual change was made to bring the system to the desired state. If the user already exists, the task should report "ok" (no change). Violating idempotence can lead to unnecessary operations, errors, or unintended side effects, which is penalized in the RHCE exam where efficiency and correctness are key.

#### AI generation note
Create a 12-minute video lesson. Start with a 3-minute segment explaining the performance-based nature of the RHCE exam and its typical task categories. Transition to a 5-minute segment demonstrating how to set up a minimal KVM/VirtualBox lab environment (showing VM creation, network configuration, and Ansible inventory setup). Emphasize the importance of a "clean slate" for practice. Conclude with a 4-minute segment on exam strategies: time management, using local documentation (`man` pages, `info`), and avoiding common pitfalls like forgetting `become: yes` or not verifying tasks. Use screen recordings of terminal commands and a simple diagram for time management. Include a reflection prompt for learners to plan their practice schedule.

---

### Chapter 8.8 — Final RHCE Practice Lab & Review

#### Learning objectives
*   Apply all learned Ansible skills to solve a comprehensive, multi-faceted system administration scenario.
*   Integrate troubleshooting and optimization techniques within an Ansible automation workflow.
*   Demonstrate proficiency in managing services, storage, networking, users, and security using Ansible.
*   Review key RHCE objectives and identify areas for further study.
*   Build confidence in tackling complex, exam-like automation challenges.

#### Detailed lesson content
Welcome to the final comprehensive practice lab for the Red Hat Certified Engineer (RHCE) course! This chapter is designed to bring together all the Ansible automation and system management skills you've acquired throughout the course. The goal is to simulate an exam-like scenario where you'll need to apply your knowledge to solve a series of interconnected problems on multiple managed nodes. This isn't just about executing commands; it's about designing and implementing robust, idempotent Ansible solutions.

Think of this lab as a mini-project. You'll be presented with a scenario and a set of requirements. Your approach should mirror what you've learned for the exam:
1.  **Read Carefully:** Understand all requirements before you start. Identify dependencies between tasks.
2.  **Plan Your Playbook:** Sketch out the structure of your playbook. Which hosts will each task run on? What modules will you use? What variables are needed?
3.  **Incremental Development:** Don't try to write the entire playbook at once. Build it task by task, testing each component as you go.
4.  **Idempotence is Key:** Ensure your tasks are idempotent. Running the playbook multiple times should yield the same result without errors or unnecessary changes.
5.  **Verification:** After running your playbook, always verify on the managed nodes that the desired state has been achieved. Use `ssh` and manual commands to confirm.
6.  **Documentation:** While not strictly required for the exam, commenting your playbook helps clarify your logic and is good practice.

This practice lab will cover a broad range of RHCE objectives, including:
*   **Service Management:** Ensuring services are running, enabled, and configured correctly.
*   **Storage Management:** Creating and extending LVM logical volumes, managing filesystems.
*   **Network Configuration:** Setting up IP addresses, hostnames, and managing firewall rules.
*   **User and Group Management:** Creating users, setting passwords, managing group memberships.
*   **Security Enhancements:** Configuring SELinux contexts, applying security best practices.
*   **Web Server Configuration:** Deploying web content, configuring virtual hosts.
*   **Database Configuration:** Basic setup or client configuration for database access.

You will need to leverage various Ansible modules such as `ansible.builtin.systemd`, `ansible.builtin.filesystem`, `community.general.lvol`, `ansible.builtin.nmcli`, `ansible.posix.firewalld`, `ansible.builtin.user`, `ansible.builtin.group`, `ansible.builtin.copy`, `ansible.builtin.template`, `ansible.posix.selinux`, and `ansible.posix.sysctl`. Remember to use `become: yes` for tasks requiring elevated privileges.

A common mistake in comprehensive labs is to rush through tasks without proper verification. This often leads to cascading failures where a problem in an early task impacts subsequent tasks, making debugging much harder. Take your time, verify each step, and don't be afraid to use `ansible-playbook --check` or `ansible-playbook --syntax-check` to catch errors early. If you get stuck, refer to the official documentation (man pages, info pages) or your course materials. The ability to self-diagnose and find solutions is a critical RHCE skill.

After completing the lab, take time for a thorough review. What went well? What challenges did you face? Which topics felt less familiar? This self-assessment is crucial for identifying areas where you might need additional practice. The RHCE is challenging, but with consistent practice and a solid understanding of Ansible and RHEL system administration, you are well-prepared. Good luck with your final preparations!

#### Key concepts
*   **Comprehensive Scenario:** A multi-step, interconnected problem designed to test a broad range of skills.
*   **RHCE Objectives:** The specific skills and knowledge areas tested by the Red Hat Certified Engineer exam.
*   **Idempotent Playbooks:** Playbooks designed to achieve a desired state without causing side effects if run multiple times.
*   **Verification:** The process of confirming that an automated task has successfully achieved its intended outcome.
*   **Self-Diagnosis:** The ability to identify, troubleshoot, and resolve issues independently.
*   **Ansible Module Integration:** Combining various Ansible modules to address different system administration domains within a single playbook.
*   **Exam Simulation:** Practicing under conditions that closely resemble the actual certification exam.
*   **Post-Lab Review:** Analyzing performance and identifying areas for further study after completing a practice exercise.

#### Hands-on activity
**Scenario: Deploying and Securing a Web Application with Database Connectivity**

You are tasked with deploying a new web application on `webserver1` that connects to a database on `dbserver1`. Both servers are RHEL 8/9.

**Requirements (to be implemented using a single Ansible playbook):**

**On `webserver1`:**
1.  Ensure the `httpd` web server is installed, running, and enabled.
2.  Create an LVM Logical Volume named `webapp_data` (5G) within an existing Volume Group (assume `vg_app`) and format it with XFS.
    *   
3.  Mount `webapp_data` at `/srv/webapp` and ensure it's persistent across reboots.
4.  Deploy a simple `index.html` file to `/srv/webapp/index.html` with content "Hello from WebApp!".
5.  Set the correct SELinux context for `/srv/webapp` and its contents so `httpd` can serve files from it.
6.  Configure `firewalld` to allow HTTP (port 80) traffic.
7.  Create a system user `webadmin` with a password of `redhat` (for testing, in real-world use, use strong passwords or SSH keys).
8.  Ensure `webadmin` can restart the `httpd` service without a password via `sudo`.

**On `dbserver1`:**
1.  Ensure the `mariadb` database server is installed, running, and enabled.
2.  Configure `firewalld` to allow MariaDB (port 3306) traffic from `webserver1`'s IP address only.
3.  Create a MariaDB user `webapp_user` with password `webapp_pass` that can connect from `webserver1`'s IP address.
4.  Grant `webapp_user` all privileges on a new database named `webapp_db`.

**Verification Steps (manual after playbook run):**
*   From your control node, SSH to `webserver1`:
    *   `systemctl status httpd`
    *   `df -h /srv/webapp`
    *   `ls -Zd /srv/webapp/index.html`
    *   `curl http://localhost/index.html` (should show "Hello from WebApp!")
    *   `firewall-cmd --list-all`
    *   `sudo -u webadmin systemctl restart httpd` (should work without password)
*   From your control node, SSH to `dbserver1`:
    *   `systemctl status mariadb`
    *   `firewall-cmd --list-all`
    *   `mysql -u webapp_user -pwebapp_pass -h <webserver1_ip_address> webapp_db -e "SELECT 1;"` (should connect successfully)

**`rhce_final_lab.yml` template:**
```yaml
---
- name: RHCE Final Practice Lab - WebApp Deployment
  hosts: all
  become: yes
  vars:
    webserver_ip: "192.168.122.10" # Replace with actual IP of webserver1
    dbserver_ip: "192.168.122.11"  # Replace with actual IP of dbserver1
    # Assuming vg_app exists on webserver1 or you will create it manually/via another task

  tasks:
    # --- Tasks for webserver1 ---
    - name: Ensure httpd is installed, running, and enabled on webserver1
      ansible.builtin.systemd:
        name: httpd
        state: started
        enabled: yes
      when: inventory_hostname == 'webserver1'

    - name: Create webapp_data Logical Volume on webserver1
      community.general.lvol:
        vg: vg_app # Assuming vg_app exists or is created elsewhere
        lv: webapp_data
        size: 5G
        state: present
      when: inventory_hostname == 'webserver1'

    - name: Format webapp_data LV with XFS on webserver1
      ansible.builtin.filesystem:
        fstype: xfs
        dev: "/dev/vg_app/webapp_data"
      when: inventory_hostname == 'webserver1'

    - name: Create /srv/webapp mount point on webserver1
      ansible.builtin.file:
        path: /srv/webapp
        state: directory
        mode: '0755'
      when: inventory_hostname == 'webserver1'

    - name: Mount webapp_data LV persistently on webserver1
      ansible.posix.mount:
        path: /srv/webapp
        src: "/dev/vg_app/webapp_data"
        fstype: xfs
        state: mounted
        opts: defaults
      when: inventory_hostname == 'webserver1'

    - name: Deploy index.html to /srv/webapp on webserver1
      ansible.builtin.copy:
        content: "Hello from WebApp!"
        dest: /srv/webapp/index.html
        mode: '0644'
      when: inventory_hostname == 'webserver1'

    - name: Set correct SELinux context for /srv/webapp on webserver1
      ansible.posix.sefcontext:
        target: "/srv/webapp(/.*)?"
        setype: httpd_sys_content_t
        state: present
      when: inventory_hostname == 'webserver1'
      notify: Restore SELinux contexts on webserver1

    - name: Configure firewalld to allow HTTP on webserver1
      ansible.posix.firewalld:
        service: http
        permanent: yes
        state: enabled
        zone: public
      when: inventory_hostname == 'webserver1'
      notify: Reload firewalld on webserver1

    - name: Create webadmin user on webserver1
      ansible.builtin.user:
        name: webadmin
        password: "{{ 'redhat' | password_hash('sha512') }}" # Hashed password for 'redhat'
        state: present
      when: inventory_hostname == 'webserver1'

    - name: Allow webadmin to restart httpd without password on webserver1
      ansible.builtin.lineinfile:
        path: /etc/sudoers.d/webadmin_sudo
        create: yes
        mode: '0440'
        line: 'webadmin ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart httpd'
        validate: 'visudo -cf %s'
      when: inventory_hostname == 'webserver1'

    # --- Tasks for dbserver1 ---
    - name: Ensure mariadb is installed, running, and enabled on dbserver1
      ansible.builtin.systemd:
        name: mariadb
        state: started
        enabled: yes
      when: inventory_hostname == 'dbserver1'

    - name: Configure firewalld to allow MariaDB from webserver1 on dbserver1
      ansible.posix.firewalld:
        port: 3306/tcp
        permanent: yes
        state: enabled
        zone: public
        source: "{{ webserver_ip }}"
      when: inventory_hostname == 'dbserver1'
      notify: Reload firewalld on dbserver1

    - name: Create MariaDB database and user on dbserver1
      community.mysql.mysql_user:
        name: webapp_user
        password: webapp_pass
        host: "{{ webserver_ip }}" # Allow connection from webserver1 IP
        priv: "webapp_db.*:ALL"
        state: present
        append_privs: yes
      when: inventory_hostname == 'dbserver1'

    - name: Create webapp_db database on dbserver1
      community.mysql.mysql_db:
        name: webapp_db
        state: present
      when: inventory_hostname == 'dbserver1'

  handlers:
    - name: Restore SELinux contexts on webserver1
      ansible.builtin.command: restorecon -Rv /srv/webapp
      when: inventory_hostname == 'webserver1'

    - name: Reload firewalld on webserver1
      ansible.builtin.systemd:
        name: firewalld
        state: reloaded
      when: inventory_hostname == 'webserver1'

    - name: Reload firewalld on dbserver1
      ansible.builtin.systemd:
        name: firewalld
        state: reloaded
      when: inventory_hostname == 'dbserver1'

```
**Instructions:**
1.  Set up your `webserver1` and `dbserver1` VMs. Ensure `vg_app` exists on `webserver1` (you might need to manually create a small PV and VG for it, e.g., `pvcreate /dev/sdb1; vgcreate vg_app /dev/sdb1`).
2.  Update `webserver_ip` and `dbserver_ip` variables in the playbook with your actual VM IP addresses.
3.  Ensure your Ansible inventory includes `webserver1` and `dbserver1` in the `[all]` group or separate groups.
4.  Install `community.mysql` collection if not already installed: `ansible-galaxy collection install community.mysql`.
5.  Run the playbook: `ansible-playbook rhce_final_lab.yml`.
6.  Perform the manual verification steps listed above to confirm all requirements are met.

#### Assessment idea
1.  **Question:** After running your `rhce_final_lab.yml` playbook, you try to access `http://webserver1/index.html` from your control node, but you get a "403 Forbidden" error. You've confirmed `httpd` is running and `firewalld` allows HTTP. What is the most likely remaining issue, and what Ansible task could be missing or incorrect?
    *   A) The `webapp_data` Logical Volume is not activated; missing `community.general.lvol` task with `state: present`.
    *   B) The `index.html` file has incorrect permissions; missing `ansible.builtin.file` task to set `mode: '0644'`.
    *   C) The SELinux context for `/srv/webapp` is incorrect; missing `ansible.posix.sefcontext` and `restorecon` tasks.
    *   D) The `webadmin` user cannot restart `httpd`; missing `ansible.builtin.lineinfile` for `sudoers`.

    **Correct Answer:** C) The SELinux context for `/srv/webapp` is incorrect; missing `ansible.posix.sefcontext` and `restorecon` tasks.
    **Explanation:** A "403 Forbidden" error, even with `httpd` running and `firewalld` open, is a classic symptom of incorrect SELinux contexts preventing the web server from accessing the content. The playbook includes `ansible.posix.sefcontext` to define the context and a handler to `restorecon`, which are critical for `httpd` to serve files from non-standard locations like `/srv/webapp`. If these were missing or misconfigured, SELinux would block access.

2.  **Question:** You run the `rhce_final_lab.yml` playbook, and the task to create the MariaDB user `webapp_user` on `dbserver1` fails with an error indicating a connection issue from `webserver1`. You verify `mariadb` is running on `dbserver1` and `httpd` on `webserver1`. What is the most probable cause, and what Ansible task should you check on `dbserver1`?
    *   A) `dbserver1`'s `mariadb` service is not enabled; check `ansible.builtin.systemd` for `mariadb`.
    *   B) `webserver1`'s hostname is not resolvable by `dbserver1`; check `ansible.builtin.hosts` or `dig`.
    *   C) `dbserver1`'s `firewalld` is blocking port 3306 from `webserver1`; check `ansible.posix.firewalld` for port 3306 and `source`.
    *   D) The `webapp_db` database was not created; check `community.mysql.mysql_db`.

    **Correct Answer:** C) `dbserver1`'s `firewalld` is blocking port 3306 from `webserver1`; check `ansible.posix.firewalld` for port 3306 and `source`.
    **Explanation:** If the MariaDB service is running, but a connection *from a specific host* fails, the firewall on the database server is the most common culprit. The `firewalld` rule on `dbserver1` needs to explicitly allow port 3306/tcp, and critically, it needs to specify `source: "{{ webserver_ip }}"` to permit connections only from the web server. If this rule is missing or incorrect, the connection will be denied.

#### AI generation note
Create a 20-minute comprehensive live coding video. Present the "WebApp Deployment" scenario and its requirements at the beginning. Then, step-by-step, build the `rhce_final_lab.yml` playbook, explaining each task and module choice as it's added. Demonstrate running the playbook and then perform the manual verification steps on both `webserver1` and `dbserver1` (SSH, `systemctl status`, `df`, `ls -Zd`, `curl`, `sudo`, `mysql` client). Use split-screen for code and terminal output. Highlight common pitfalls and how the playbook addresses them (e.g., SELinux contexts, firewall rules, idempotent LVM creation). Conclude with a final review of key RHCE objectives covered.

---

## Final Capstone Project

Congratulations on reaching this stage of your Red Hat Certified Engineer journey! The capstone project is your opportunity to synthesize the knowledge and practical skills you've acquired throughout this course. You'll apply advanced Ansible automation to solve real-world system administration challenges, demonstrating your proficiency in managing, securing, and deploying services on Linux systems. Choose one of the following three project options, each designed to challenge you and showcase a broad range of your RHCE competencies.

### Project Option 1: Automated Multi-Tier Web Application Deployment with Load Balancing

This project challenges you to deploy a complete, multi-tier web application stack using Ansible, ensuring high availability and robust performance. You will set up a load balancer, multiple web servers, and a database server, automating every step of the configuration.

**Requirements:**
*   **Infrastructure:** Provision at least five virtual machines or cloud instances: one Ansible control node, one HAProxy load balancer, two web servers (e.g., Apache HTTPD or Nginx), and one database server (e.g., PostgreSQL or MariaDB).
*   **Ansible Playbooks & Roles:** Develop a structured Ansible project using roles for each component (load balancer, web server, database).
*   **Load Balancer:** Configure HAProxy to distribute traffic evenly across the web servers. Ensure HAProxy starts automatically and monitors the health of the web servers.
*   **Web Servers:** Install and configure your chosen web server (Apache or Nginx) on at least two nodes. Deploy a simple static HTML page or a basic dynamic application (e.g., a Python Flask "Hello World" app) to demonstrate functionality. Ensure web servers start on boot.
*   **Database Server:** Install and configure a database server. Create a database and a user with appropriate permissions. If deploying a dynamic application, ensure it can connect to this database.
*   **Networking & Firewall:** Configure firewall rules (e.g., `firewalld`) on all servers to allow necessary traffic (SSH, HTTP/HTTPS, database port, HAProxy port) while blocking unnecessary ports.
*   **Idempotency:** All playbooks must be idempotent, meaning running them multiple times yields the same system state without errors.
*   **Variables & Vault:** Use Ansible variables for configurable parameters (e.g., web server port, database name, user credentials). Protect sensitive information (like database passwords) using Ansible Vault.

**Stretch Goals:**
*   **SSL Termination:** Implement SSL/TLS termination on the HAProxy load balancer, securing traffic between clients and HAProxy.
*   **Dynamic Inventory:** Explore using a dynamic inventory script (e.g., for AWS EC2, Vagrant, or a custom script) instead of a static `ini` file.
*   **Monitoring Agent:** Deploy a basic monitoring agent (e.g., Node Exporter for Prometheus, or a custom script) to gather metrics from your servers.
*   **Rolling Updates:** Design your playbooks to perform rolling updates for the web servers, ensuring no downtime during application deployment.

**Evaluation Criteria:**
*   **Functionality:** The entire application stack must be operational and accessible through the HAProxy load balancer.
*   **Ansible Best Practices:** Proper use of roles, variables, handlers, and Vault. Playbooks should be well-structured, readable, and idempotent.
*   **Security:** Correct firewall configuration and secure handling of sensitive data.
*   **Documentation:** Clear `README.md` explaining how to set up and run the project, including any assumptions or prerequisites.
*   **Troubleshooting:** Ability to identify and resolve issues encountered during deployment.

**Estimated Time:** 20–25 hours

---

### Project Option 2: Secure File Server with Advanced SELinux Policies and Automated Backups

This project focuses on building a highly secure file server using Ansible, emphasizing robust access control and data integrity through custom SELinux policies and automated backup procedures.

**Requirements:**
*   **Infrastructure:** Provision at least three virtual machines: one Ansible control node, one dedicated file server (e.g., for NFS or Samba shares), and one client machine to access the shares.
*   **File Sharing Service:** Install and configure either NFS or Samba on the file server. Create at least two distinct shares with different access permissions (e.g., one read-only, one read-write for specific users/groups).
*   **User & Group Management:** Use Ansible to create necessary users and groups on both the file server and client, ensuring consistent UIDs/GIDs where appropriate.
*   **SELinux Enforcement:**
    *   Ensure SELinux is in enforcing mode on the file server.
    *   Configure existing SELinux booleans (e.g., `samba_enable_home_dirs`, `nfs_export_all_rw`) as needed.
    *   Define and apply custom SELinux file contexts to the shared directories.
    *   If necessary, create a simple custom SELinux policy module to allow a specific, non-standard operation (e.g., a script running in the shared directory with specific permissions).
*   **Firewall Configuration:** Configure `firewalld` on the file server to only allow necessary traffic for the chosen file sharing service and SSH.
*   **Automated Backups:** Implement an Ansible playbook to perform daily backups of the shared directories to a local directory on the file server, or to a separate backup volume/directory. Use a cron job managed by Ansible to schedule these backups.
*   **Ansible Vault:** Protect any sensitive credentials (e.g., user passwords, if not using SSH keys) using Ansible Vault.

**Stretch Goals:**
*   **Client-Side Mounting:** Automate the mounting of the file shares on the client machine using Ansible, ensuring they persist across reboots.
*   **Remote Backup Target:** Configure backups to a remote target (e.g., another server via `rsync` over SSH, or a cloud storage bucket if you have access).
*   **Audit Logging:** Configure `auditd` to log access attempts to the shared directories and analyze the logs.
*   **Quota Management:** Implement disk quotas for specific users or groups on the shared directories.

**Evaluation Criteria:**
*   **Functionality:** File shares must be accessible from the client with correct permissions. Backups must run successfully.
*   **Security:** SELinux must be enforcing and correctly configured, demonstrating a clear understanding of its role. Firewall rules must be appropriate.
*   **Ansible Quality:** Well-structured playbooks, idempotency, proper variable usage, and secure handling of sensitive data.
*   **SELinux Proficiency:** Correct application of file contexts, booleans, and demonstration of understanding custom policy creation.
*   **Documentation:** A comprehensive `README.md` explaining the setup, SELinux policy details, and how to verify functionality.

**Estimated Time:** 22–28 hours

---

### Project Option 3: DevOps Toolchain Integration: Git, Jenkins (or similar CI), and Ansible for Application Deployment

This project simulates a basic CI/CD pipeline, integrating Git for version control, a continuous integration server (like Jenkins or GitLab CI), and Ansible for automated application deployment. You will set up an environment where code changes trigger an automated build and deployment process.

**Requirements:**
*   **Infrastructure:** Provision at least three virtual machines: one Ansible control node, one CI server (e.g., Jenkins, GitLab Runner, or a simple build server), and one application server where the application will be deployed.
*   **Version Control:** Set up a Git repository (local or remote like GitHub/GitLab) containing a simple application (e.g., a Python Flask app, a Node.js app, or even just a static HTML site) and your Ansible playbooks.
*   **CI Server Setup:** Install and configure a CI server (e.g., Jenkins).
    *   Configure a job that polls your Git repository for changes or is triggered by a webhook.
    *   The CI job should perform a basic build step (e.g., `npm install`, `pip install -r requirements.txt`, or just copying files).
    *   The CI job must then trigger an Ansible playbook to deploy the application to the application server. This can be done by running `ansible-playbook` from the CI server, or by having Ansible pull the code.
*   **Application Deployment with Ansible:**
    *   Develop Ansible playbooks to deploy your chosen application to the application server. This includes installing dependencies, copying application files, configuring a web server (e.g., Nginx as a reverse proxy), and ensuring the application service starts and runs correctly.
    *   Ensure the deployment playbook can handle updates (e.g., deploying a new version of the application).
*   **Service Management:** Ensure the application service is managed by `systemd` and starts on boot.
*   **Firewall Configuration:** Configure `firewalld` on all servers to allow necessary traffic (SSH, CI server UI port, application port).
*   **Ansible Vault:** Use Ansible Vault to protect any sensitive information, such as API keys or database credentials for the application.

**Stretch Goals:**
*   **Testing Integration:** Add a simple test step to your CI pipeline (e.g., unit tests, linting, or a basic integration test after deployment).
*   **Environment Separation:** Extend the project to deploy to different environments (e.g., `staging` and `production`) using different Ansible inventories and variables, potentially requiring manual approval in the CI pipeline for `production` deployments.
*   **Containerization (Basic):** Instead of deploying directly, have Ansible deploy a Docker container running your application.
*   **Notifications:** Configure the CI server to send email or Slack notifications on build success or failure.

**Evaluation Criteria:**
*   **Pipeline Functionality:** A change in the Git repository must successfully trigger the CI job, which then automatically deploys the updated application to the application server.
*   **Ansible Quality:** Robust, idempotent playbooks using best practices for application deployment and service management.
*   **CI Configuration:** Correct setup of the CI job, including source code management, build steps, and Ansible integration.
*   **Application Availability:** The deployed application must be accessible and functional.
*   **Documentation:** A detailed `README.md` outlining the entire setup, including Git repository structure, CI job configuration, and how to trigger a deployment.

**Estimated Time:** 25–30 hours

---

## Final Examination

This comprehensive examination assesses your mastery of the Red Hat Certified Engineer curriculum, covering Ansible automation, system management, security, and troubleshooting. It combines conceptual understanding with practical application, requiring you to demonstrate your ability to design, implement, and debug solutions in a Linux environment.

**Instructions:**
*   Answer all questions thoroughly and precisely.
*   For code-writing questions, assume a standard Ansible environment and `firewalld` for firewall management unless specified otherwise.
*   For debugging scenarios, provide a logical thought process and concrete steps.

---

### Section 1: Concept Definitions (4 questions)

**Question 1:** Explain the concept of "idempotency" in the context of Ansible. Why is it a crucial principle for automation, and how does Ansible achieve it?
**Answer 1:** Idempotency means that an operation, when applied multiple times, produces the same result as applying it once. In Ansible, this means that running a playbook multiple times will ensure the system reaches the desired state without causing unintended side effects or errors on subsequent runs if the system is already in that state. It's crucial because it allows administrators to run playbooks repeatedly without fear of breaking existing configurations, simplifying change management, error recovery, and continuous deployment. Ansible achieves idempotency primarily through its modules, which are designed to check the current state of a system before making changes. For example, the `package` module will only install a package if it's not already installed, and the `service` module will only start a service if it's not already running.

**Question 2:** Describe the primary difference between the `copy` module and the `template` module in Ansible. Provide a scenario where each would be the more appropriate choice.
**Answer 2:**
*   The `copy` module is used to copy a file directly from the Ansible control node to the managed host. It's suitable for static files that don't require any dynamic content or variable substitution.
*   The `template` module, on the other hand, uses the Jinja2 templating engine to process a file on the control node before copying it to the managed host. This allows for dynamic content generation, variable substitution, conditional logic, and loops within the file.

**Scenario Examples:**
*   **`copy` module:** Copying a static SSL certificate file (`server.crt`) or a pre-compiled binary to a managed host.
*   **`template` module:** Generating a custom Nginx virtual host configuration file (`nginx.conf`) where the server name, port, or backend IP addresses are derived from Ansible variables, or creating a `motd` file that includes the hostname and current date.

**Question 3:** What is the purpose of `ansible-vault`, and how does it enhance security in Ansible automation?
**Answer 3:** `ansible-vault` is a feature in Ansible that allows you to encrypt sensitive data, such as passwords, API keys, SSH private keys, or other confidential information, within Ansible playbooks, variables, or other files. It enhances security by preventing sensitive data from being stored in plain text in your version control system (like Git). When `ansible-vault` encrypts a file, it requires a password to decrypt and read its contents. This means that only authorized users with the vault password can access the sensitive data, significantly reducing the risk of exposure if your repository is compromised.

**Question 4:** Explain the role of "handlers" in Ansible playbooks. How do they differ from regular tasks, and why are they important for service management?
**Answer 4:** Handlers in Ansible are tasks that are triggered only when explicitly notified by another task. They are typically used for operations that need to run only when a change has occurred, such as restarting a service after a configuration file has been updated.
*   **Difference from regular tasks:** Regular tasks execute unconditionally (unless skipped by `when` conditions). Handlers, however, remain dormant until a task explicitly uses the `notify` keyword to call them by name. Even if multiple tasks notify the same handler, the handler will only run once at the end of the play, after all regular tasks have completed.
*   **Importance for service management:** Handlers are crucial for efficient and idempotent service management. For example, if you modify an Nginx configuration file, you only want to restart the Nginx service if the configuration file actually changed. If the configuration file was already in the desired state, restarting Nginx would be an unnecessary operation. Handlers ensure that services are restarted or reloaded only when necessary, preventing unnecessary downtime or resource consumption, and maintaining the idempotency of your playbooks.

---

### Section 2: Code Tracing (3 questions)

**Question 5:** Consider the following Ansible playbook and `hosts` inventory file. Describe the exact content of `/etc/motd` on `server2.example.com` after the playbook successfully executes.

**Inventory (`hosts`):**
```ini
[webservers]
server1.example.com
server2.example.com
```

**Playbook (`trace_motd.yml`):**
```yaml
---
- name: Configure MOTD
  hosts: webservers
  vars:
    company_name: "Cohortia"
  tasks:
    - name: Ensure MOTD directory exists
      ansible.builtin.file:
        path: /etc/motd.d
        state: directory
        mode: '0755'

    - name: Create custom MOTD file
      ansible.builtin.copy:
        content: |
          Welcome to {{ ansible_hostname }}!
          Managed by {{ company_name }}.
        dest: /etc/motd
        mode: '0644'
```

**Answer 5:**
The playbook uses the `ansible.builtin.copy` module with the `content` parameter, which means the content is generated directly within the playbook. The `ansible_hostname` variable is a fact collected by Ansible, which will resolve to the hostname of the *current* managed host.
Therefore, on `server2.example.com`, the `/etc/motd` file will contain:
```
Welcome to server2.example.com!
Managed by Cohortia.
```
*Partial credit guidance: Full credit requires the exact content. Partial credit if the `company_name` is correct but `ansible_hostname` is incorrect or generic.*

**Question 6:** Given the following Ansible inventory and playbook, which hosts will have the `httpd` package installed, and which hosts will have the `nginx` package installed?

**Inventory (`hosts`):**
```ini
[group_a]
host1.example.com
host2.example.com

[group_b]
host3.example.com
host4.example.com

[all:vars]
default_package: httpd
```

**Playbook (`trace_packages.yml`):**
```yaml
---
- name: Install packages based on group
  hosts: all
  tasks:
    - name: Install default package
      ansible.builtin.package:
        name: "{{ default_package }}"
        state: present

    - name: Install nginx on group_b
      ansible.builtin.package:
        name: nginx
        state: present
      when: "'group_b' in group_names"
```

**Answer 6:**
1.  **`host1.example.com` (in `group_a`):**
    *   The first task (`Install default package`) will install `httpd` because `default_package` is `httpd` for all hosts.
    *   The second task (`Install nginx on group_b`) has a `when` condition `'group_b' in group_names`. Since `host1` is not in `group_b`, this task will be skipped.
    *   Result: `httpd` installed.

2.  **`host2.example.com` (in `group_a`):**
    *   Similar to `host1`, the first task will install `httpd`.
    *   The second task will be skipped.
    *   Result: `httpd` installed.

3.  **`host3.example.com` (in `group_b`):**
    *   The first task will install `httpd`.
    *   The second task's `when` condition `'group_b' in group_names` will evaluate to true. Therefore, `nginx` will also be installed.
    *   Result: `httpd` and `nginx` installed.

4.  **`host4.example.com` (in `group_b`):**
    *   Similar to `host3`, the first task will install `httpd`.
    *   The second task will install `nginx`.
    *   Result: `httpd` and `nginx` installed.

**Summary:**
*   `host1.example.com`: `httpd`
*   `host2.example.com`: `httpd`
*   `host3.example.com`: `httpd`, `nginx`
*   `host4.example.com`: `httpd`, `nginx`

*Partial credit guidance: Full credit requires correct packages for all hosts. Partial credit if some hosts are correct but others are not.*

**Question 7:** Analyze the following playbook snippet. Assuming the `httpd` service is currently *not* running and the `/etc/httpd/conf/httpd.conf` file *does not* exist initially, describe the sequence of events and the final state of the `httpd` service after this playbook executes.

```yaml
---
- name: Manage HTTPD service and config
  hosts: webservers
  tasks:
    - name: Ensure httpd package is installed
      ansible.builtin.package:
        name: httpd
        state: present

    - name: Create httpd configuration file
      ansible.builtin.copy:
        content: "ServerName localhost"
        dest: /etc/httpd/conf/httpd.conf
        mode: '0644'
      notify:
        - Restart httpd

    - name: Ensure httpd service is running and enabled
      ansible.builtin.service:
        name: httpd
        state: started
        enabled: true
      notify:
        - Restart httpd

  handlers:
    - name: Restart httpd
      ansible.builtin.service:
        name: httpd
        state: restarted
```

**Answer 7:**
1.  **`Ensure httpd package is installed`:** This task will install the `httpd` package. Since it's assumed not installed, this task will report a "changed" status.
2.  **`Create httpd configuration file`:** This task will create `/etc/httpd/conf/httpd.conf` with the content "ServerName localhost". Since the file did not exist, this task will report a "changed" status. Because it changed, it will `notify` the "Restart httpd" handler.
3.  **`Ensure httpd service is running and enabled`:** This task will attempt to start the `httpd` service and enable it to start on boot. Since the service was not running, this task will report a "changed" status. Because it changed, it will `notify` the "Restart httpd" handler.
4.  **Handler Execution:** After all tasks in the play have completed, Ansible will check for notified handlers. Even though the "Restart httpd" handler was notified twice, it will only run *once*. The handler will execute, restarting the `httpd` service.

**Final State:**
*   The `httpd` package will be installed.
*   The file `/etc/httpd/conf/httpd.conf` will exist with the content "ServerName localhost".
*   The `httpd` service will be running.
*   The `httpd` service will be enabled to start automatically on system boot.

*Partial credit guidance: Full credit requires correct sequence and final state. Partial credit if the sequence is mostly correct but misses the single execution of the handler, or if the final state is partially correct.*

---

### Section 3: Code Writing (4 questions)

**Question 8:** Write an Ansible playbook to install the Nginx web server, ensure it starts on boot, and then start the service immediately.

**Answer 8:**
```yaml
---
- name: Deploy Nginx web server
  hosts: webservers # Assuming 'webservers' is a group in your inventory
  become: true      # Required for package installation and service management
  tasks:
    - name: Install Nginx package
      ansible.builtin.package:
        name: nginx
        state: present

    - name: Ensure Nginx service is enabled and started
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: true

    - name: Open HTTP port in firewall
      ansible.posix.firewalld:
        service: http
        permanent: true
        state: enabled
      notify:
        - Reload firewalld

  handlers:
    - name: Reload firewalld
      ansible.builtin.service:
        name: firewalld
        state: reloaded
```
*Partial credit guidance: Full credit requires correct package installation, service management (started and enabled), and basic firewall configuration with a handler. Partial credit if firewall is missing or incorrect, or if the service is only started but not enabled.*

**Question 9:** Write an Ansible task to create a user named `appuser` with a specific UID of `1001` and GID of `1001`, and add this user to the `wheel` group. The user's home directory should be `/home/appuser` and their shell should be `/bin/bash`.

**Answer 9:**
```yaml
    - name: Create appuser with specific UID/GID and add to wheel group
      ansible.builtin.user:
        name: appuser
        uid: 1001
        group: appuser # This implicitly creates the primary group 'appuser' with GID 1001
        groups: wheel
        append: true   # Add to wheel group without removing from other groups
        home: /home/appuser
        shell: /bin/bash
        state: present
```
*Partial credit guidance: Full credit requires correct user, UID, GID, home, shell, and group membership. Partial credit if some attributes are missing or incorrect.*

**Question 10:** Write an Ansible playbook to ensure a specific line, `MaxConnections=100`, exists in the `/etc/myapp/config.conf` file. If the file does not exist, it should be created. If the line exists but is commented out (e.g., `# MaxConnections=50`), it should be uncommented and updated. If the line exists with a different value (e.g., `MaxConnections=50`), it should be updated to `MaxConnections=100`.

**Answer 10:**
```yaml
---
- name: Manage specific line in application configuration
  hosts: app_servers # Assuming 'app_servers' is a group in your inventory
  become: true
  tasks:
    - name: Ensure application configuration directory exists
      ansible.builtin.file:
        path: /etc/myapp
        state: directory
        mode: '0755'

    - name: Ensure MaxConnections line is correctly set in config.conf
      ansible.builtin.lineinfile:
        path: /etc/myapp/config.conf
        regexp: '^#?MaxConnections=' # Matches 'MaxConnections=' or '#MaxConnections='
        line: 'MaxConnections=100'
        create: true                 # Create the file if it doesn't exist
        mode: '0644'
        backup: true                 # Create a backup of the original file before modification
```
*Partial credit guidance: Full credit requires correct `lineinfile` usage with `regexp`, `line`, `create`, and `backup`. Partial credit if `regexp` is too specific or too generic, `create` is missing, or it doesn't handle commented lines.*

**Question 11:** Design the directory structure for an Ansible role named `webserver` that would typically be used to deploy and configure a basic web server (e.g., Apache or Nginx). Include the essential subdirectories and briefly explain the purpose of each.

**Answer 11:**
The standard Ansible role directory structure is crucial for organization and reusability. For a `webserver` role, the structure would look like this:

```
webserver/
├── defaults/
│   └── main.yml
├── handlers/
│   └── main.yml
├── tasks/
│   └── main.yml
├── templates/
│   └── webserver.conf.j2
├── files/
│   └── index.html
├── vars/
│   └── main.yml
├── meta/
│   └── main.yml
└── README.md
```

**Purpose of each subdirectory:**
*   **`defaults/`**: Contains default variables for the role. These variables have the lowest precedence, meaning they can be easily overridden by variables defined elsewhere (e.g., in `vars/`, inventory, or command line). `main.yml` is the standard file name.
*   **`handlers/`**: Contains handlers, which are tasks that are only run when explicitly notified by other tasks. For a web server, this would typically include tasks to restart or reload the web server service. `main.yml` is the standard file name.
*   **`tasks/`**: Contains the main sequence of tasks for the role. This is where the core logic of installing, configuring, and starting the web server resides. `main.yml` is the standard file name, and it often includes other task files (e.g., `install.yml`, `configure.yml`, `firewall.yml`) using `include_tasks`.
*   **`templates/`**: Stores Jinja2 template files (`.j2` extension). These are used by the `template` module to generate configuration files dynamically on the managed hosts, incorporating variables from the role or inventory. For a web server, this would include `webserver.conf.j2` or `vhost.conf.j2`.
*   **`files/`**: Contains static files that are copied directly to managed hosts without any processing. These are used by the `copy` module. For a web server, this might include a static `index.html` page or SSL certificate files.
*   **`vars/`**: Contains variables specific to this role. These variables have a higher precedence than `defaults/` variables and are intended for variables that are integral to the role's function and less likely to be overridden. `main.yml` is the standard file name.
*   **`meta/`**: Contains metadata about the role, such as author, license, platforms supported, and dependencies on other roles. `main.yml` is the standard file name.
*   **`README.md`**: A markdown file providing documentation for the role, explaining its purpose, how to use it, and any configurable variables.

*Partial credit guidance: Full credit requires all essential directories and a correct description of their purpose. Partial credit if some directories are missing or descriptions are unclear.*

---

### Section 4: Design & Debugging Problems (4 questions)

**Question 12:** You have an Ansible playbook that attempts to restart the `nginx` service after updating its configuration. The playbook consistently fails with a "permission denied" error when trying to execute the `systemctl restart nginx` command. What are the three most common causes for this issue, and how would you go about debugging and resolving it?

**Answer 12:**
**Common Causes:**
1.  **Insufficient Privileges (Missing `become`):** The most frequent cause. Restarting services requires root privileges. If the Ansible task or the play itself is not configured to use `become: true` (or `sudo: yes` in older Ansible versions), the user Ansible connects as will not have the necessary permissions.
2.  **Incorrect `ansible_user` Privileges:** Even with `become: true`, the user Ansible connects as (`ansible_user`) might not be configured in `/etc/sudoers` to allow `sudo` access, or it might require a password that isn't being provided (e.g., `ansible_become_password` or `ansible_ask_become_pass`).
3.  **SELinux or AppArmor Enforcement:** Security modules like SELinux (on Red Hat-based systems) or AppArmor (on Debian/Ubuntu) can restrict what processes can do, even if they have root privileges. An incorrect or overly restrictive SELinux policy could prevent `systemctl` from restarting `nginx`, especially if `nginx` was installed or configured in a non-standard way.

**Debugging and Resolution Steps:**
1.  **Verify `become`:**
    *   First, check the Ansible task or play where the service restart is failing. Ensure `become: true` is present.
    *   If it's a handler, ensure the handler itself or the play it belongs to has `become: true`.
    *   **Resolution:** Add `become: true` to the relevant task or play.
2.  **Test `sudo` manually:**
    *   SSH into the target server as the `ansible_user` (e.g., `ssh ansible_user@target_host`).
    *   Attempt to run the command manually with `sudo`: `sudo systemctl restart nginx`.
    *   If it prompts for a password, your Ansible inventory or command line needs `ansible_become_password` or `-K`.
    *   If it says "user is not in the sudoers file" or "user is not allowed to run sudo," then the `ansible_user` needs to be added to the `sudoers` file (e.g., by adding them to the `wheel` group and ensuring `wheel` has sudo access, or by creating a custom sudoers entry).
    *   **Resolution:** Configure `sudo` for `ansible_user` on the target host, or provide the `become_password` to Ansible.
3.  **Check SELinux/AppArmor logs:**
    *   On the target host, check the system logs for SELinux or AppArmor denials.
    *   For SELinux: `sudo ausearch -m AVC -ts today` or `sudo journalctl -t audit | grep AVC`. Look for entries related to `nginx` or `systemctl`.
    *   **Resolution:** If SELinux is the cause, you might need to:
        *   Change file contexts: `sudo restorecon -Rv /etc/nginx` (if files were copied incorrectly).
        *   Enable SELinux booleans: `sudo setsebool -P httpd_can_network_connect on` (example for Apache, similar for Nginx if needed).
        *   Generate a custom SELinux policy module (for complex, non-standard scenarios, often using `audit2allow`).
        *   Temporarily set SELinux to permissive mode (`sudo setenforce 0`) to confirm it's the issue, but always re-enable enforcing mode after debugging.

*Partial credit guidance: Full credit requires identifying at least three common causes and providing concrete debugging and resolution steps for each. Partial credit if causes are identified but solutions are vague, or if fewer than three causes are given.*

**Question 13:** You need to design an Ansible inventory for a complex production environment that includes separate staging and production groups for a multi-tier application. The application has web servers, application servers, and database servers. Additionally, variables for database connection strings differ between staging and production. Outline the structure of your inventory files and explain how you would manage the group and host variables.

**Answer 13:**
**Inventory Structure:**
A common and robust approach uses a directory-based inventory, allowing for better organization and separation of concerns.

```
inventory/
├── hosts.ini             # Main inventory file for host assignments
├── group_vars/
│   ├── all.yml           # Variables applicable to all hosts
│   ├── webservers.yml    # Variables for all web servers
│   ├── appservers.yml    # Variables for all application servers
│   ├── dbservers.yml     # Variables for all database servers
│   ├── staging.yml       # Variables specific to the staging environment
│   └── production.yml    # Variables specific to the production environment
└── host_vars/
    ├── web01.staging.yml # Host-specific variables for web01 in staging
    └── db01.prod.yml     # Host-specific variables for db01 in production
```

**File Contents and Variable Management:**

1.  **`hosts.ini` (Host Assignments):**
    This file defines the hosts and their membership in various groups. It combines functional groups (webservers, appservers, dbservers) with environmental groups (staging, production).

    ```ini
    # inventory/hosts.ini

    [webservers]
    web01.staging.example.com
    web02.staging.example.com
    web01.production.example.com
    web02.production.example.com

    [appservers]
    app01.staging.example.com
    app02.staging.example.com
    app01.production.example.com
    app02.production.example.com

    [dbservers]
    db01.staging.example.com
    db01.production.example.com

    [staging:children]
    webservers
    appservers
    dbservers

    [production:children]
    webservers
    appservers
    dbservers

    # Grouping hosts by environment (explicitly for clarity, though 'children' implies it)
    [staging:vars]
    environment=staging

    [production:vars]
    environment=production
    ```
    *Explanation:* Hosts are assigned to their functional roles (e.g., `webservers`) and then these functional groups are made children of the environment groups (`staging`, `production`). This allows for targeting `ansible-playbook -i inventory site.yml -l staging` or `ansible-playbook -i inventory site.yml -l webservers`.

2.  **`group_vars/` (Group Variables):**
    *   **`all.yml`**: Contains variables common to *all* hosts, regardless of environment or role. E.g., `ansible_user: cohortia_admin`, `ntp_server: ntp.example.com`.
    *   **`webservers.yml`**: Variables specific to all web servers across all environments. E.g., `web_port: 80`, `web_docroot: /var/www/html`.
    *   **`appservers.yml`**: Variables specific to all application servers. E.g., `app_port: 8080`, `java_version: 11`.
    *   **`dbservers.yml`**: Variables specific to all database servers. E.g., `db_engine: postgresql`, `db_port: 5432`.
    *   **`staging.yml`**: Variables specific to the *staging* environment. This is where the staging database connection string would reside.
        ```yaml
        # inventory/group_vars/staging.yml
        db_connection_string: "jdbc:postgresql://db01.staging.example.com:5432/app_staging_db"
        app_log_level: DEBUG
        ```
    *   **`production.yml`**: Variables specific to the *production* environment. This is where the production database connection string would reside.
        ```yaml
        # inventory/group_vars/production.yml
        db_connection_string: "jdbc:postgresql://db01.production.example.com:5432/app_prod_db"
        app_log_level: INFO
        ```
    *Explanation:* This hierarchical approach ensures that variables are applied at the correct scope. Functional group variables apply to all hosts within that function, while environment group variables override or supplement them for specific environments. Variables in `staging.yml` and `production.yml` will have higher precedence than `webservers.yml`, `appservers.yml`, etc., when a host belongs to both.

3.  **`host_vars/` (Host Variables):**
    Used for variables that are unique to a *single* host, overriding any group variables.
    *   **`web01.staging.yml`**: Might contain `web_extra_config: "some_specific_setting"`.
    *   **`db01.prod.yml`**: Could contain `db_backup_schedule: "0 2 * * *"`.
    *Explanation:* This is for truly unique host configurations that cannot be generalized to a group.

**Variable Precedence:** Ansible applies variables based on a well-defined precedence order. In this setup, `host_vars` will override `group_vars` (including environment-specific `group_vars`), which will override `all.yml` and role `defaults`. This allows for fine-grained control while maintaining a clean, DRY (Don't Repeat Yourself) inventory.

*Partial credit guidance: Full credit requires a clear directory structure, correct `hosts.ini` with nested groups, and a good explanation of how `group_vars` and `host_vars` are used to manage different variable scopes, especially for environment-specific settings. Partial credit if the structure is incomplete or the explanation of variable precedence is missing/incorrect.*

**Question 14:** You need to deploy a sensitive API key to multiple servers using Ansible. Describe the secure method for achieving this, including the specific Ansible features you would use and the steps involved. Why is simply putting the key in a plain text variable file a bad idea?

**Answer 14:**
Storing sensitive API keys in plain text variable files is a **very bad idea** because it exposes critical credentials to anyone with access to your Ansible repository. If your repository is stored in version control (like Git), the key's history would be permanently recorded, making it vulnerable to accidental exposure or malicious access. This directly violates security best practices and can lead to severe data breaches or unauthorized system access.

The secure method for deploying sensitive API keys involves using **Ansible Vault**.

**Ansible Features Used:**
1.  **`ansible-vault`**: For encrypting files containing sensitive variables.
2.  **`ansible.builtin.template` or `ansible.builtin.copy` (with `content` from a vaulted variable)**: For deploying the key to the target servers.

**Steps Involved:**

1.  **Create a Vault-Encrypted Variable File:**
    Instead of putting the API key directly into `group_vars/all.yml` or `vars/main.yml`, create a separate, vault-encrypted file.
    ```bash
    ansible-vault create group_vars/all/secrets.yml
    ```
    You will be prompted to set a new vault password. Choose a strong, unique password.

2.  **Add the Sensitive API Key to the Vault File:**
    Inside `group_vars/all/secrets.yml` (which `ansible-vault create` will open in your default editor), add your API key:
    ```yaml
    # group_vars/all/secrets.yml (encrypted)
    my_application_api_key: "super_secret_api_key_12345"
    ```
    Save and close the file. Ansible Vault will encrypt its contents.

3.  **Reference the Vaulted Variable in Your Playbook:**
    In your Ansible playbook, you can now reference `my_application_api_key` just like any other variable. Ansible will automatically decrypt the `secrets.yml` file at runtime if the vault password is provided.

    ```yaml
    ---
    - name: Deploy application with sensitive API key
      hosts: app_servers
      become: true
      tasks:
        - name: Ensure application config directory exists
          ansible.builtin.file:
            path: /etc/myapp
            state: directory
            mode: '0755'

        - name: Deploy application configuration with API key
          ansible.builtin.template:
            src: templates/app_config.j2
            dest: /etc/myapp/config.conf
            mode: '0600' # Restrict permissions for sensitive config
          notify:
            - Restart myapp_service
    ```

4.  **Create a Template File (e.g., `templates/app_config.j2`):**
    This template will use the vaulted variable to inject the API key into the final configuration file on the target server.

    ```jinja2
    # templates/app_config.j2
    [Application]
    API_KEY={{ my_application_api_key }}
    DEBUG=False
    ```

5.  **Provide the Vault Password During Playbook Execution:**
    When running the playbook, you need to provide the vault password.
    *   **Interactive:** `ansible-playbook -i inventory site.yml --ask-vault-pass`
    *   **From a file:** `ansible-playbook -i inventory site.yml --vault-password-file ~/.vault_pass.txt` (ensure `~/.vault_pass.txt` is secure, e.g., `chmod 600 ~/.vault_pass.txt`)
    *   **Using `ansible.cfg`:** Configure `vault_password_file` in `ansible.cfg`.

**Additional Security Considerations:**
*   **Permissions on Target:** Ensure the deployed configuration file on the target server has restrictive permissions (e.g., `mode: '0600'`) so only the necessary user (e.g., root or the application user) can read it.
*   **Vault Password Management:** Securely manage your vault password. Do not commit it to version control. Use a password manager, environment variables, or a secure credential store.
*   **No Plain Text in Logs:** Be careful not to accidentally print the decrypted key to standard output or logs during playbook execution.

By following these steps, your sensitive API key remains encrypted at rest within your repository and is only decrypted in memory during playbook execution, significantly enhancing the security of your automation.

*Partial credit guidance: Full credit requires explaining why plain text is bad, identifying `ansible-vault` as the solution, detailing the steps (create vault file, add variable, reference in playbook/template, run with password), and mentioning target file permissions. Partial credit if some steps are missing or the explanation of security benefits is incomplete.*

**Question 15:** An Ansible-configured service (e.g., `myapp.service`) is not starting after a system reboot, even though `systemctl status myapp` shows it as "enabled" and the Ansible playbook reports success. What are the most likely causes for this behavior, and how would you troubleshoot it?

**Answer 15:**
When a service is enabled but fails to start after a reboot, it often points to issues beyond simple service management. The "enabled" status only means `systemd` is configured to *try* to start it, not that it *succeeds*.

**Most Likely Causes:**

1.  **Service Dependencies Not Met:** The `myapp.service` might depend on another service, a network interface, a mount point, or a specific file system that isn't fully ready or available at the exact moment `myapp.service` attempts to start during the boot sequence. `systemd` has dependency management, but misconfigurations can occur.
2.  **Application-Level Errors:** The service unit itself might be correct, but the underlying application binary or script that `myapp.service` executes has an error (e.g., incorrect path, missing library, configuration error, database connection failure) that prevents it from starting successfully.
3.  **Resource Limits/Environment Issues:** The service might be failing due to resource constraints (e.g., memory limits, file descriptor limits) or an incomplete environment (e.g., missing environment variables, incorrect working directory) when started by `systemd` during boot, compared to when it's manually started after the system is fully up.
4.  **SELinux/AppArmor Denials:** Security modules might prevent the service from accessing necessary files, ports, or executing certain operations during boot, even if it works when manually started later.

**Troubleshooting Steps:**

1.  **Check Service Status and Logs Immediately After Reboot:**
    *   `sudo systemctl status myapp.service`: This will show the current state, any recent errors, and often the last few log lines.
    *   `sudo journalctl -u myapp.service --no-pager`: This is the most critical step. It will display all logs specifically from your service unit. Look for error messages, failed dependencies, or application-specific output that indicates why it failed.
    *   `sudo journalctl -b -p err`: Check for general system errors during the last boot.

2.  **Manually Start the Service and Check Logs:**
    *   After the system has fully booted and settled, try to start the service manually: `sudo systemctl start myapp.service`.
    *   If it starts successfully, this strongly suggests a dependency or timing issue during boot. If it still fails, the problem is likely within the application or its configuration.
    *   Again, check `sudo journalctl -u myapp.service --no-pager` after the manual attempt.

3.  **Review `myapp.service` Unit File:**
    *   `sudo systemctl cat myapp.service`: Examine the contents of the unit file (`/etc/systemd/system/myapp.service` or similar).
    *   **Focus on:**
        *   `ExecStart`: Is the path to the executable correct?
        *   `WorkingDirectory`: Is it set correctly?
        *   `User`/`Group`: Is the service running as the correct user with appropriate permissions?
        *   `Environment`: Are all necessary environment variables set?
        *   `Requires=`, `After=`: Are there any missing or incorrect dependencies (e.g., `After=network-online.target`, `After=postgresql.service`)? If the application needs the network or a database to be fully up, `After=network-online.target` and `Requires=network-online.target` (or similar for the database) are crucial.
        *   `Restart=on-failure`: Is it configured to restart if it crashes?

4.  **Check Application Configuration and Permissions:**
    *   Verify that all configuration files used by `myapp` are present, correctly configured, and have the right permissions for the user `myapp` runs as.
    *   Check file contexts with `ls -Z /path/to/myapp/config` and `sudo restorecon -Rv /path/to/myapp` if SELinux is active.

5.  **Check SELinux/AppArmor Denials:**
    *   `sudo ausearch -m AVC -ts boot`: Look for SELinux denials specifically during the boot process.
    *   If denials are found, use `audit2allow` or modify existing SELinux booleans to permit the necessary operations.

**Resolution Strategy Example (if dependency issue):**
If logs indicate the service failed because a database was not ready, you would modify the `myapp.service` unit file (via Ansible `template` module) to include:
```ini
[Unit]
Description=My Application Service
After=network-online.target postgresql.service # Ensure network and DB are up
Requires=network-online.target postgresql.service # Fail if network or DB not available

[Service]
# ... other service settings ...

[Install]
WantedBy=multi-user.target
```
After modifying the unit file, remember to run `sudo systemctl daemon-reload` and then `sudo systemctl enable myapp.service` (if not already) and `sudo systemctl start myapp.service` via Ansible, then reboot to test.

*Partial credit guidance: Full credit requires identifying at least three common causes and providing concrete, actionable troubleshooting steps, including specific commands and what to look for in logs/unit files. Partial credit if causes are identified but solutions are vague, or if troubleshooting steps are incomplete.*

---

## Course Conclusion

You have now completed the Red Hat Certified Engineer (RHCE) course, a significant achievement that positions you as a highly capable and efficient Linux system administrator with a strong emphasis on automation. Throughout this journey, you've not only deepened your understanding of core Linux system management but have also mastered Ansible, transforming manual, error-prone tasks into reliable, repeatable, and scalable automation solutions.

You are now proficient in using Ansible to manage complex system configurations, deploy multi-tier applications, enforce robust security policies with firewalls and SELinux, and troubleshoot intricate system and automation issues. Your ability to design idempotent playbooks, structure roles effectively, and secure sensitive data with Ansible Vault demonstrates a comprehensive skill set that is in high demand across the technology industry. This course has equipped you with the practical expertise to automate virtually any aspect of a Linux environment, making you an invaluable asset in any modern IT or DevOps team.

### Where to Go Next: Continued Learning and Career Paths

The world of technology is constantly evolving, and your journey as a Red Hat Certified Engineer is just beginning. To continue building upon your strong foundation, consider the following next steps and potential career paths:

1.  **Pursue Official Red Hat Certifications:** The ultimate next step for many is to take the official Red Hat Certified Engineer (EX294) exam. This will validate your skills with an industry-recognized certification. You might also consider the Red Hat Certified System Administrator (RHCSA) exam (EX200) if you haven't already, as it's a prerequisite for RHCE.
2.  **Deep Dive into Advanced Ansible:** Explore more advanced Ansible topics such as developing custom modules and plugins, integrating with Ansible Tower/AWX for enterprise-grade automation, or delving into dynamic inventory sources for cloud environments.
3.  **Embrace DevOps and Cloud-Native Technologies:** Your Ansible skills are a perfect stepping stone into the broader DevOps ecosystem. Learn about containerization with Docker, orchestration with Kubernetes, and continuous integration/continuous delivery (CI/CD) pipelines with tools like Jenkins, GitLab CI, or GitHub Actions.
4.  **Explore Cloud Platforms:** Apply your automation skills to public cloud providers like AWS, Azure, or Google Cloud Platform. Learn how to provision and manage cloud resources using Infrastructure as Code (IaC) tools like Terraform, often integrating with Ansible for configuration management.
5.  **Contribute to Open Source and Community Engagement:** Engage with the Ansible community, contribute to open-source projects, or participate in forums and user groups. Sharing your knowledge and learning from others is an excellent way to stay current and expand your network.

Remember, consistent practice is key. Continue building personal projects, automating tasks in your home lab, and seeking opportunities to apply your Ansible and Linux skills. The confidence and efficiency you've gained will serve you well as you navigate the exciting and challenging landscape of modern system administration and automation. We at Cohortia are incredibly proud of your dedication and achievements, and we look forward to seeing the incredible impact you'll make in your career.

---


> End of Syllabus: Red Hat Certified Engineer (RHCE)
> Course ID: red-hat-certified-engineer-rhce
> Total modules: 8
> Total chapters: 48
> Level: Intermediate–Advanced
> Subcategory: Operating Systems & System Administration
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
