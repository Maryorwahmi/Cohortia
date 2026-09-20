# Syllabus: Robotics Specialization

> **Course ID:** `robotics-specialization`  
> **Title:** Robotics Specialization  
> **Provider:** Cohortia  
> **Original reference:** UPenn / Coursera  
> **Platform:** Cohortia  
> **Level:** Intermediate  
> **Type:** Specialization  
> **Duration:** 6–8 months (self-paced, ~8–10 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.coursera.org/specializations/robotics)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** Robotics, kinematics, dynamics, control theory, motion planning, computer vision, perception, state estimation, Kalman filters, particle filters, SLAM, MATLAB, aerial robotics, legged locomotion, wheeled robots  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from the University of Pennsylvania GRASP Laboratory, Coursera, and other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

Robotics is the engineering discipline that bridges the physical and digital worlds, creating machines that can sense, think, and act autonomously in complex environments. From drones that deliver medical supplies to warehouses, to rovers that explore the surface of Mars, to surgical robots that assist in life-saving operations, robotics is transforming every industry and expanding the boundaries of what machines can do. The Robotics Specialization gives you a rigorous, mathematically grounded foundation in the core principles of modern robotics: how robots move, how they plan their motions, how they perceive the world, and how they estimate their own state and the state of their environment.

This specialization is designed for learners who have a solid foundation in mathematics and programming and are ready to apply those skills to the study of autonomous systems. You will learn from the same curriculum developed by the GRASP Laboratory at the University of Pennsylvania, one of the world’s premier robotics research institutions. The course is MATLAB-centric, using MATLAB (or its free alternative, GNU Octave) as the primary tool for simulation, algorithm implementation, and control design. You will write code that controls virtual quadrotors, plans collision-free paths for robot arms, simulates legged locomotion, extracts 3D structure from camera images, and estimates a robot’s position using probabilistic filters.

By the end of this specialization, you will be able to:

1. Use linear algebra, calculus, and probability to model robotic systems mathematically.
2. Derive the kinematics and dynamics of a quadrotor and design PD/PID controllers to stabilize its flight.
3. Implement graph-based and sampling-based motion planning algorithms (A*, PRM, RRT) to find collision-free paths in complex environments.
4. Analyze the stability and dynamics of legged and wheeled robots using bioinspired templates and nonlinear dynamics.
5. Model camera geometry, calibrate cameras, extract and match visual features, and estimate 3D pose from 2D images.
6. Implement Kalman filters and extended Kalman filters for state estimation under uncertainty.
7. Build occupancy grid maps and use particle filters for robot localization in unknown environments.
8. Integrate sensing, estimation, planning, and control into a complete autonomous system through a capstone project.
9. Evaluate the trade-offs between different robotic platforms, algorithms, and sensor configurations for real-world applications.
10. Read and interpret research papers in robotics, understanding the mathematical notation and experimental methodology.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Mathematical Foundations for Robotics | 2 | 10–14 |
| 2 | Aerial Robotics | 2 | 12–16 |
| 3 | Computational Motion Planning | 2 | 10–14 |
| 4 | Mobility | 2 | 10–14 |
| 5 | Perception | 2 | 12–16 |
| 6 | Estimation and Learning | 2 | 10–14 |
| 7 | Capstone Project and Final Integration | 2 | 10–14 |

---

## Module 1: Mathematical Foundations for Robotics

> **Goal:** Build the mathematical toolkit — linear algebra, calculus, and probability — that underpins every robotics algorithm in this specialization.

---

### Chapter 1.1 — Linear Algebra for Robotics

#### Learning objectives
- Represent positions, orientations, and coordinate transformations using vectors and matrices.
- Construct and apply rotation matrices in 2D and 3D.
- Use homogeneous transformations to combine rotations and translations into a single matrix operation.
- Compute matrix inverses, determinants, and eigenvalues relevant to robotics.

#### Detailed lesson content

Every robot lives in a world of coordinates. Whether a quadrotor is hovering at a specific point in space, a robot arm is reaching for an object, or a rover is navigating a room, the robot must understand where it is, where things are, and how to move between places. Linear algebra is the language of coordinates, and it is the first mathematical tool every roboticist must master.

A **vector** is an ordered list of numbers that represents a point or a direction in space. In robotics, a 3D position vector `p = [x, y, z]^T` describes the location of a robot or an object relative to a coordinate frame. A **coordinate frame** is a set of three orthogonal axes (x, y, z) with a defined origin. Every measurement in robotics is made relative to some frame: the robot’s body frame, the world frame, the camera frame, or the sensor frame.

A **matrix** is a rectangular array of numbers that can represent linear transformations: rotations, scaling, shearing, and projections. In robotics, the most important matrix is the **rotation matrix**, which describes the orientation of one coordinate frame relative to another.

In 2D, a rotation matrix that rotates a vector by angle θ is:

```
R(θ) = [cos(θ)  -sin(θ)]
       [sin(θ)   cos(θ)]
```

If a point `p` is expressed in frame B, and we want to express it in frame A, we multiply by the rotation matrix that describes the orientation of B relative to A: `p_A = R_AB * p_B`.

In 3D, rotation is more complex because there are three axes to rotate around. A rotation around the z-axis by angle θ is:

```
Rz(θ) = [cos(θ)  -sin(θ)  0]
        [sin(θ)   cos(θ)  0]
        [0        0       1]
```

Similar matrices exist for rotations around the x-axis (Rx) and y-axis (Ry). Any 3D orientation can be represented as a sequence of these basic rotations. However, the order matters: rotating first around x and then around y gives a different result than rotating first around y and then around x. This is why aerospace and robotics use conventions like **roll-pitch-yaw** (intrinsic rotations) or **Z-Y-X Euler angles**.

A **homogeneous transformation matrix** combines rotation and translation into a single 4×4 matrix:

```
T = [R  p]
    [0  1]
```

Where `R` is a 3×3 rotation matrix and `p` is a 3×1 translation vector. The bottom row `[0 0 0 1]` makes the matrix multiplicable with homogeneous coordinates. To transform a point from frame B to frame A: `p_A_homogeneous = T_AB * p_B_homogeneous`. This is incredibly powerful because it allows us to chain transformations. If we know the transformation from the camera to the robot body (`T_body_camera`) and from the robot body to the world (`T_world_body`), we can compute the transformation from the camera to the world by simple matrix multiplication: `T_world_camera = T_world_body * T_body_camera`.

In MATLAB, these operations are straightforward:

```matlab
% Define a rotation of 30 degrees around the z-axis
theta = deg2rad(30);
Rz = [cos(theta) -sin(theta) 0;
      sin(theta)  cos(theta) 0;
      0           0          1];

% Define a translation vector
t = [1; 2; 3];

% Construct the homogeneous transformation matrix
T = [Rz, t; 0, 0, 0, 1];

% Transform a point from the body frame to the world frame
p_body = [0.5; 0.2; 1.0; 1];  % Homogeneous coordinates
p_world = T * p_body;
```

The **inverse** of a homogeneous transformation matrix has a special form that is faster to compute than a general matrix inverse:

```matlab
% For T = [R, p; 0, 0, 0, 1], the inverse is:
% T_inv = [R', -R'*p; 0, 0, 0, 1]
R = T(1:3, 1:3);
p = T(1:3, 4);
T_inv = [R', -R'*p; 0, 0, 0, 1];
```

This is important because if we know `T_AB` (the transformation from B to A), the inverse `T_BA` gives us the transformation from A to B.

Other key linear algebra concepts for robotics include:
- **Dot product:** `a · b = |a||b|cos(θ)` — used to compute angles between vectors and projections.
- **Cross product:** `a × b` — produces a vector perpendicular to both a and b, used to compute moments and torques.
- **Determinant:** `det(R)` — for a rotation matrix, the determinant is always 1. If it is not, the matrix is not a valid rotation (it may include reflection or scaling).
- **Eigenvalues and eigenvectors:** For a matrix A, eigenvalues λ and eigenvectors v satisfy `Av = λv`. Used in stability analysis and principal component analysis.
- **Singular Value Decomposition (SVD):** Any matrix can be decomposed into `A = UΣV^T`. Used in solving linear systems, least-squares problems, and in computer vision algorithms like essential matrix decomposition.

#### Key concepts
- Vectors, matrices, and coordinate frames
- Rotation matrices in 2D and 3D (Rx, Ry, Rz)
- Euler angles and roll-pitch-yaw conventions
- Homogeneous transformation matrices
- Matrix chaining: `T_AC = T_AB * T_BC`
- Inverse of homogeneous transformations
- Dot product, cross product, determinant, eigenvalues, SVD

#### Hands-on activity
Write a MATLAB script that defines three coordinate frames: the world frame (at the origin), the robot body frame (translated by [2, 1, 0] and rotated 45° around z), and the camera frame (translated by [0.1, 0, 0.05] relative to the body, no rotation). Define a point in the camera frame: `p_camera = [0.5; 0.3; 2.0; 1]`. Compute the point's coordinates in the world frame by chaining the transformations. Then compute the inverse transformation to verify that applying the inverse returns the original camera-frame coordinates.

#### Assessment idea
Given a rotation matrix `R = [0.866, -0.5, 0; 0.5, 0.866, 0; 0, 0, 1]`, what is the rotation angle? Answer: `θ = 30°` (or π/6 radians), because `cos(30°) = 0.866` and `sin(30°) = 0.5`. Then ask: "Why does the order of rotations matter in 3D?" Answer: 3D rotations are non-commutative — rotating around the x-axis and then the y-axis gives a different final orientation than rotating around y and then x. This is why aerospace and robotics use explicit conventions (like Z-Y-X Euler angles) to define rotation order.

#### AI generation note
Create a 10-minute animated video with 3D coordinate frames. Show the world frame at the origin, the robot body frame translated and rotated, and a camera frame attached to the body. Animate a point moving from the camera frame to the body frame to the world frame via matrix multiplication. Show the rotation matrix as a "hinge" that rotates the axes. Show matrix chaining as a sequence of hinges. Use color-coded axes: x-red, y-green, z-blue. Include a live MATLAB coding segment showing the transformation being computed. End with a reflection question: "Why is it important to know which frame a measurement is expressed in?"

---

### Chapter 1.2 — Calculus and Differential Equations for Robotics

#### Learning objectives
- Compute derivatives and integrals of vector-valued functions relevant to robot motion.
- Set up and solve ordinary differential equations (ODEs) that describe robotic systems.
- Use numerical integration (Euler, Runge-Kutta) to simulate robot dynamics in MATLAB.
- Understand the relationship between position, velocity, and acceleration in rotating frames.

#### Detailed lesson content

Robots move. To understand, predict, and control that movement, we need calculus. The position of a robot is a function of time: `p(t) = [x(t), y(t), z(t)]^T`. Its velocity is the derivative of position: `v(t) = dp/dt = [dx/dt, dy/dt, dz/dt]^T`. Its acceleration is the derivative of velocity: `a(t) = dv/dt = d²p/dt²`. In robotics, these are not just abstract mathematical functions — they are the actual quantities that sensors measure (IMUs measure acceleration, encoders measure velocity, GPS measures position) and that controllers manipulate (motors apply forces to change acceleration).

When a robot rotates, the relationship between angular velocity and the rate of change of the rotation matrix is given by the **skew-symmetric matrix**:

```
dR/dt = R * Ω
```

Where `Ω` is the skew-symmetric matrix of the angular velocity vector `ω = [ωx, ωy, ωz]^T`:

```
Ω = [0     -ωz   ωy]
    [ωz     0    -ωx]
    [-ωy   ωx     0  ]
```

This is a fundamental equation in robotics because it tells us how the orientation of a robot changes over time given its angular velocity. An IMU measures `ω` directly, and we can integrate this equation to track the robot's orientation over time.

**Ordinary Differential Equations (ODEs)** describe how a system evolves over time. A general ODE has the form:

```
dx/dt = f(x, u, t)
```

Where `x` is the state vector (position, velocity, orientation), `u` is the control input (motor forces, thrust), and `t` is time. For example, the dynamics of a simple mass-spring-damper system (which models many robotic joints) is:

```
m * d²x/dt² + c * dx/dt + k * x = F(t)
```

Where `m` is mass, `c` is damping coefficient, `k` is spring constant, and `F(t)` is the applied force. This is a second-order linear ODE. In robotics, we rarely solve these analytically because the systems are nonlinear. Instead, we use **numerical integration**.

**Euler's method** is the simplest numerical integration technique. Given `dx/dt = f(x)`, the next state is:

```
x_{n+1} = x_n + dt * f(x_n)
```

Where `dt` is the time step. Euler's method is easy to implement but has poor accuracy for large `dt`. A better method is the **4th-order Runge-Kutta (RK4)** method, which uses four intermediate evaluations to achieve much higher accuracy:

```matlab
function x_next = rk4_step(f, x, u, dt)
    k1 = f(x, u);
    k2 = f(x + dt*k1/2, u);
    k3 = f(x + dt*k2/2, u);
    k4 = f(x + dt*k3, u);
    x_next = x + dt*(k1 + 2*k2 + 2*k3 + k4)/6;
end
```

In MATLAB, the built-in `ode45` function implements an adaptive Runge-Kutta method and is the standard tool for simulating robot dynamics:

```matlab
% Define the dynamics of a simple pendulum
% dx/dt = [v; -(g/L)*sin(theta)]
g = 9.81;
L = 1.0;

f = @(t, x) [x(2); -(g/L)*sin(x(1))];

% Initial state: theta = 0.1 rad, omega = 0
x0 = [0.1; 0];

% Simulate for 10 seconds
[t, x] = ode45(f, [0 10], x0);

% Plot theta over time
plot(t, x(:,1));
xlabel('Time (s)');
ylabel('Angle (rad)');
```

This script simulates a pendulum swinging under gravity. In robotics, we use `ode45` to simulate quadrotors, robot arms, mobile robots, and any other system whose dynamics can be described by an ODE.

**Numerical stability** is a critical concern. If the time step `dt` is too large, the simulation can become unstable and produce nonsensical results (e.g., energy growing without bound). For stiff systems (systems with very fast and very slow dynamics), `ode45` may be too slow, and specialized solvers like `ode15s` are needed.

**Velocity in a rotating frame:** When a point is expressed in a rotating frame, its velocity in the inertial (world) frame includes both the velocity relative to the rotating frame and the velocity due to the frame's rotation:

```
v_world = v_body + ω × r
```

Where `v_body` is the velocity of the point in the body frame, `ω` is the angular velocity of the body frame, and `r` is the position of the point in the body frame. This is the **Coriolis effect**, and it is essential for understanding the dynamics of rotating robots like quadrotors and spacecraft.

#### Key concepts
- Position, velocity, and acceleration as vector derivatives
- Skew-symmetric matrix and angular velocity
- Ordinary differential equations (ODEs) in robotics
- Euler's method for numerical integration
- 4th-order Runge-Kutta (RK4) method
- MATLAB `ode45` for ODE simulation
- Numerical stability and time step selection
- Coriolis effect and velocity in rotating frames
- Stiff systems and specialized solvers

#### Hands-on activity
Write a MATLAB script that simulates a damped harmonic oscillator (mass-spring-damper) using both Euler's method and `ode45`. Plot the position over time for both methods on the same graph. Use parameters: `m = 1 kg`, `c = 0.5 N·s/m`, `k = 2 N/m`, `F(t) = 0`. Initial conditions: `x(0) = 1 m`, `v(0) = 0`. Run the Euler simulation with `dt = 0.1` and `dt = 0.01`, and compare the results to `ode45`. Observe how the Euler method with `dt = 0.1` becomes unstable and inaccurate, while `dt = 0.01` is closer to `ode45`. Discuss why `ode45` is preferred for robotics simulations.

#### Assessment idea
Given the ODE `dx/dt = -2x` with initial condition `x(0) = 5`, what is the exact solution at `t = 1`? Answer: `x(t) = 5 * e^(-2t)`, so `x(1) = 5 * e^(-2) ≈ 0.677`. Then ask: "Why is numerical integration necessary for most robotic systems, even when we know the exact ODE?" Answer: Most robotic systems have nonlinear ODEs (like `d²θ/dt² = -(g/L)*sin(θ)` for a pendulum) that do not have closed-form analytical solutions. Numerical integration allows us to simulate these systems on a computer.

#### AI generation note
Create a 10-minute animated lesson. Show a pendulum swinging with real-time graphs of angle, velocity, and acceleration. Animate Euler's method as a series of small steps, showing how large steps overshoot and small steps follow the curve better. Show the RK4 method as four intermediate evaluations that "preview" the curve before taking the step. Show MATLAB code running in a split screen with the graph updating. Show the Coriolis effect as a rotating platform with a ball rolling on it, demonstrating the apparent deflection. Use color-coded curves for each method.

---

### Chapter 1.3 — Probability and Statistics for Robotics

#### Learning objectives
- Model uncertain sensor measurements and robot states using probability distributions.
- Use Gaussian (normal) distributions to represent noise and uncertainty in robotics.
- Apply covariance matrices to describe multi-dimensional uncertainty.
- Understand Bayesian inference as the foundation for state estimation and sensor fusion.

#### Detailed lesson content

No sensor is perfect. A GPS reading might be off by 5 meters. A camera might misidentify an object. An IMU might drift over time. A wheel encoder might slip on a slippery surface. Robotics is fundamentally about operating in the presence of uncertainty, and probability is the mathematical language of uncertainty.

A **random variable** is a quantity whose value is determined by chance. In robotics, sensor measurements are random variables because they are corrupted by noise. We describe the behavior of a random variable using a **probability distribution**. The most important distribution in robotics is the **Gaussian (normal) distribution**, also known as the bell curve:

```
p(x) = (1 / (σ * sqrt(2π))) * exp(-(x - μ)² / (2σ²))
```

Where `μ` (mu) is the mean (the expected value) and `σ` (sigma) is the standard deviation (a measure of spread). In robotics, the mean represents our best estimate of a quantity, and the standard deviation represents our uncertainty about that estimate. If a GPS sensor reports a position of 10 meters with a standard deviation of 2 meters, we are 95% confident that the true position is between 6 and 14 meters (within ±2σ).

For multi-dimensional quantities (like a robot's position and orientation in 3D space), we use a **multivariate Gaussian distribution**:

```
p(x) = (1 / sqrt((2π)^n * det(Σ))) * exp(-0.5 * (x - μ)^T * Σ^(-1) * (x - μ))
```

Where `μ` is now a vector of means and `Σ` (sigma) is a **covariance matrix**. The covariance matrix is symmetric and positive definite. Its diagonal elements are the variances of each variable, and its off-diagonal elements are the covariances, which describe how variables are correlated. For example, if the x and y position errors are positively correlated, a large x error tends to occur with a large y error.

```matlab
% Define a 2D Gaussian for a robot position
mu = [10; 5];          % Mean position (x, y)
Sigma = [4, 1;         % Covariance matrix
         1, 9];

% Generate random samples from this distribution
samples = mvnrnd(mu, Sigma, 1000);

% Plot the samples
scatter(samples(:,1), samples(:,2), '.');
hold on;
plot(mu(1), mu(2), 'r+', 'MarkerSize', 10, 'LineWidth', 2);
```

**Bayesian inference** is the process of updating our beliefs about a quantity as we receive new evidence. The foundation is **Bayes' theorem**:

```
P(state | measurement) = P(measurement | state) * P(state) / P(measurement)
```

In robotics terms:
- `P(state)` is the **prior** — what we believed about the robot's state before seeing the measurement.
- `P(measurement | state)` is the **likelihood** — how likely the measurement is, given a particular state.
- `P(state | measurement)` is the **posterior** — what we believe about the state after seeing the measurement.
- `P(measurement)` is the **evidence** — a normalizing constant that ensures the posterior is a valid probability distribution.

Bayesian inference is the foundation of virtually every state estimation algorithm in robotics, including Kalman filters, particle filters, and Bayesian networks. When a robot fuses data from multiple sensors (e.g., GPS + IMU + wheel odometry), it is using Bayesian inference to combine the priors and likelihoods from each sensor into a single, more accurate posterior estimate.

**Properties of Gaussian distributions that make them ideal for robotics:**
1. The sum of two independent Gaussian random variables is also Gaussian. This makes sensor fusion mathematically tractable.
2. A linear transformation of a Gaussian random variable is also Gaussian. This makes it easy to propagate uncertainty through linear models.
3. The Gaussian distribution is fully described by its mean and covariance, which are compact representations.
4. The Gaussian is the maximum-entropy distribution for a given mean and variance, making it the least-assumptive choice when only mean and variance are known.

**Common mistakes in robotics probability:**
- Assuming all noise is Gaussian. While Gaussian noise is common, some sensors produce non-Gaussian noise (e.g., outliers, multimodal distributions). Kalman filters assume Gaussian noise, which can fail when the noise is not Gaussian.
- Ignoring covariance. Treating x and y errors as independent when they are actually correlated can lead to overconfident or underconfident estimates.
- Forgetting to normalize. When computing a posterior, forgetting to divide by the evidence `P(measurement)` leads to a distribution that does not sum to 1.

#### Key concepts
- Random variables and probability distributions
- Gaussian (normal) distribution: mean (μ) and standard deviation (σ)
- Multivariate Gaussian and covariance matrix (Σ)
- Correlation and independence
- Bayes' theorem: prior, likelihood, posterior, evidence
- Sensor fusion and Bayesian inference
- Properties of Gaussian distributions under linear transformations
- Common mistakes: non-Gaussian noise, ignoring covariance, forgetting normalization

#### Hands-on activity
Write a MATLAB script that implements Bayesian sensor fusion for a 1D robot position. The robot has a prior belief that its position is Gaussian with `μ = 10`, `σ = 3`. It receives a sensor measurement that is also Gaussian with `μ = 12`, `σ = 2`. Use the Gaussian fusion formulas: `μ_post = (σ_meas² * μ_prior + σ_prior² * μ_meas) / (σ_prior² + σ_meas²)` and `σ_post² = (σ_prior² * σ_meas²) / (σ_prior² + σ_meas²)`. Plot the prior, likelihood, and posterior distributions on the same graph. Then add a second measurement with `μ = 11`, `σ = 1.5` and fuse it with the posterior. Observe how the uncertainty decreases with each measurement.

#### Assessment idea
A robot's GPS sensor reports its position as `μ = 50 m`, `σ = 5 m`. The robot's wheel odometry estimates its position as `μ = 48 m`, `σ = 2 m`. Assuming both estimates are Gaussian and independent, what is the fused estimate? Answer: `μ_post = (2² * 50 + 5² * 48) / (5² + 2²) = (4*50 + 25*48) / 29 = (200 + 1200) / 29 = 48.28 m`. `σ_post² = (25 * 4) / 29 = 3.45`, so `σ_post = 1.86 m`. The fused estimate is `48.28 ± 1.86 m`, which is more accurate than either sensor alone. Then ask: "Why does the posterior have a smaller standard deviation than either the prior or the measurement?" Answer: Because fusing two independent sources of information reduces uncertainty. The posterior combines the information from both sensors, making it more precise.

#### AI generation note
Create a 10-minute animated lesson. Show the Gaussian bell curve with a draggable mean and standard deviation. Show two bell curves (prior and measurement) overlapping, and animate the posterior curve forming in the middle with a narrower peak. Show a robot with two sensors (GPS and wheel encoder) sending signals to a fusion node. Show the covariance matrix as an ellipse that changes shape and orientation. Show the Bayesian update formula with each term highlighted in a different color. Include a live MATLAB coding segment showing the fusion script. End with a reflection: "Why is it important that the posterior uncertainty decreases with each measurement?"

---

## Module 2: Aerial Robotics

> **Goal:** Understand the kinematics, dynamics, and control of quadrotors, and implement flight controllers and trajectory generators in MATLAB.

---

### Chapter 2.1 — Quadrotor Kinematics and Dynamics

#### Learning objectives
- Model the 3D position and orientation (pose) of a quadrotor using rotation matrices and homogeneous transforms.
- Derive the equations of motion for a quadrotor in 1D, 2D, and 3D.
- Understand the relationship between motor thrust, torques, and the resulting motion (roll, pitch, yaw, thrust).
- Implement a quadrotor dynamics simulator in MATLAB.

#### Detailed lesson content

A quadrotor is a helicopter with four rotors arranged in a cross configuration. It is one of the most popular platforms in aerial robotics because it is mechanically simple (no swashplate, no tail rotor), dynamically stable, and capable of hovering, vertical takeoff and landing, and agile maneuvering. However, it is also underactuated: it has four motors but six degrees of freedom (3D position + 3D orientation), meaning it cannot control all six independently. It must tilt to move horizontally, which couples its translational and rotational dynamics.

The **state** of a quadrotor is described by twelve variables: three position coordinates `(x, y, z)`, three velocity components `(vx, vy, vz)`, three orientation angles (roll, pitch, yaw), and three angular velocity components `(ωx, ωy, ωz)`. The **control inputs** are the four motor thrusts `(u1, u2, u3, u4)`, which produce a total thrust and three torques.

The four rotors generate forces and moments as follows:
- **Total thrust:** The sum of all four rotor thrusts, acting upward in the body z-direction. This controls altitude.
- **Roll torque:** The difference between the thrust of the left and right rotors. This causes rotation around the body x-axis.
- **Pitch torque:** The difference between the thrust of the front and back rotors. This causes rotation around the body y-axis.
- **Yaw torque:** The reaction torque from the rotors. Two rotors spin clockwise, and two spin counterclockwise. When all four spin at the same speed, the net yaw torque is zero. Increasing the speed of the clockwise rotors and decreasing the counterclockwise rotors produces a net yaw torque. This controls heading.

To understand the dynamics, we start with the **1D model** (vertical motion only). In this simplified model, the quadrotor moves only along the z-axis, and the control input is the total thrust `u`. The equation of motion is:

```
m * z̈ = u - m * g
```

Where `m` is the mass, `z̈` is the vertical acceleration, `u` is the total thrust, and `g` is gravity. This is a simple second-order system. If `u > m*g`, the quadrotor accelerates upward. If `u < m*g`, it accelerates downward. If `u = m*g`, it hovers at constant altitude.

In **2D**, we add horizontal motion (x-axis) and rotation (pitch angle θ). The equations become:

```
ẍ = (u / m) * sin(θ)
z̈ = (u / m) * cos(θ) - g
θ̈ = τ / Iy
```

Where `τ` is the pitch torque and `Iy` is the moment of inertia around the y-axis. Notice that horizontal motion `ẍ` is generated by tilting the quadrotor (changing θ) and applying thrust. The quadrotor cannot move horizontally without tilting. This is the **underactuation** property: the system has two control inputs (thrust `u` and torque `τ`) but three degrees of freedom (x, z, θ).

In **3D**, the full equations of motion are derived from Newton's second law and Euler's equations for rotational dynamics. The translational dynamics in the inertial frame are:

```
m * p̈ = R * [0; 0; u] - [0; 0; m*g]
```

Where `p = [x; y; z]` is the position vector, `R` is the rotation matrix from the body frame to the inertial frame, and `u` is the total thrust. The rotational dynamics in the body frame are:

```
I * ω̇ = τ - ω × (I * ω)
```

Where `I` is the inertia matrix, `ω` is the angular velocity vector, and `τ` is the torque vector. The term `ω × (I * ω)` is the **gyroscopic torque**, which arises from the fact that the rotors are spinning and the body is rotating. It is significant for agile quadrotors but can often be neglected for slow, stable flight.

In MATLAB, we can implement the full 3D dynamics as a function for use with `ode45`:

```matlab
function dxdt = quadrotor_dynamics(t, x, u, m, g, I)
    % State vector: [x; y; z; vx; vy; vz; roll; pitch; yaw; wx; wy; wz]
    p = x(1:3);      % Position
    v = x(4:6);      % Velocity
    angles = x(7:9); % Roll, pitch, yaw
    w = x(10:12);    % Angular velocity
    
    % Rotation matrix from body to world
    R = eul2rotm(angles', 'ZYX');
    
    % Total thrust and torques from motor inputs
    u_total = u(1);       % Total thrust
    tau = u(2:4);         % Roll, pitch, yaw torques
    
    % Translational dynamics
    dpdt = v;
    dvdt = (R * [0; 0; u_total] - [0; 0; m*g]) / m;
    
    % Rotational dynamics (simplified, neglecting gyroscopic torque)
    danglesdt = w;  % Simplified: assume small angles
    dwdt = I \ tau;
    
    dxdt = [dpdt; dvdt; danglesdt; dwdt];
end
```

**Important note on rotation representation:** Euler angles (roll, pitch, yaw) are intuitive but suffer from **gimbal lock**, a singularity where two axes align and one degree of freedom is lost. For this reason, aerospace and robotics often use **quaternions** for rotation representation. Quaternions are four-dimensional numbers `q = [w, x, y, z]` that can represent any 3D rotation without singularities. The conversion between quaternions and rotation matrices is well-defined and computationally efficient. For the purposes of this course, we will primarily use Euler angles with the understanding that quaternions are preferred for production systems.

#### Key concepts
- Quadrotor configuration: four rotors, underactuated system
- 1D dynamics: vertical motion and thrust
- 2D dynamics: horizontal motion, pitch, and underactuation
- 3D dynamics: Newton-Euler equations, gyroscopic torque
- State vector: 12 variables (position, velocity, orientation, angular velocity)
- Control inputs: four motor thrusts producing thrust and three torques
- Rotation matrix in dynamics: `m * p̈ = R * [0; 0; u] - [0; 0; m*g]`
- Euler angles and gimbal lock
- Quaternions as an alternative to Euler angles
- MATLAB `ode45` for quadrotor simulation

#### Hands-on activity
Write a MATLAB script that simulates a quadrotor in 2D (x, z, θ) using `ode45`. Use parameters: `m = 0.5 kg`, `Iy = 0.01 kg·m²`, `g = 9.81 m/s²`. Implement a controller that makes the quadrotor hover at `z = 2 m` and `x = 0 m` with `θ = 0`. The controller should apply `u = m*g` for hover and add small corrections based on position error. Plot the trajectory of the quadrotor in the x-z plane over 10 seconds. Then try a trajectory where the quadrotor starts at `x = 0` and must move to `x = 5` while maintaining altitude. Observe how the quadrotor must pitch forward to generate horizontal acceleration, then pitch backward to decelerate.

#### Assessment idea
Ask: "A quadrotor has four motors and six degrees of freedom (3 position + 3 orientation). Why is it called underactuated?" Answer: Because it has fewer control inputs (4 motor thrusts) than degrees of freedom (6). It cannot directly control all six states independently. It must tilt to move horizontally, which couples its orientation and position. Then ask: "What is gimbal lock, and why is it a problem for quadrotors using Euler angles?" Answer: Gimbal lock occurs when the pitch angle is ±90°, causing the roll and yaw axes to align. At this singularity, the system loses one degree of freedom, and numerical computations become unstable. This is why production quadrotors use quaternions instead of Euler angles.

#### AI generation note
Create a 10-minute animated 3D visualization. Show a quadrotor with four rotors spinning. Show the thrust vectors as arrows. Show the decomposition of motor thrusts into total thrust, roll torque, pitch torque, and yaw torque. Show the 2D simulation: the quadrotor tilting forward to accelerate horizontally, then tilting back to stop. Show the x-z plane trajectory as a curved path. Show the 1D, 2D, and 3D equations of motion appearing on screen with highlighted terms. Show gimbal lock as two axes collapsing into one. Include a live MATLAB coding segment with the `ode45` simulation. End with a reflection: "Why must a quadrotor tilt to move horizontally?"

---

### Chapter 2.2 — Control Theory for Aerial Vehicles

#### Learning objectives
- Design PD and PID controllers for quadrotor attitude and altitude stabilization.
- Understand the concept of a control loop: reference, error, controller output, and plant response.
- Analyze controller stability using the concept of damping and natural frequency.
- Generate smooth trajectories for quadrotor waypoint navigation.

#### Detailed lesson content

Control theory is the science of making systems behave as we want them to. In robotics, control is what keeps a quadrotor hovering steadily, what makes a robot arm follow a precise path, and what prevents a mobile robot from veering off course. The most fundamental controller in robotics is the **PID controller** (Proportional-Integral-Derivative), and it is the first tool we use to stabilize a quadrotor.

A control system has four components:
1. **Reference (setpoint):** The desired state we want the system to achieve (e.g., hover at z = 2 m, roll = 0°).
2. **Plant:** The physical system being controlled (e.g., the quadrotor).
3. **Sensor:** Measures the actual state of the plant (e.g., an IMU for orientation, a barometer for altitude).
4. **Controller:** Computes the control input based on the difference between the reference and the measured state.

The **error** is the difference between the reference and the measured state: `e(t) = r(t) - y(t)`. The controller's job is to drive this error to zero.

A **PD controller** (Proportional-Derivative) computes the control input as:

```
u(t) = Kp * e(t) + Kd * de(t)/dt
```

Where `Kp` is the proportional gain and `Kd` is the derivative gain. The proportional term pushes the system toward the reference: if the error is large, the control input is large. The derivative term resists motion: if the system is moving fast toward the reference, the derivative term applies braking force to prevent overshoot. Together, they create a damped oscillation that settles at the reference.

For a quadrotor hovering at altitude `z_des`, the PD controller is:

```matlab
function u = altitude_controller(z, z_dot, z_des, Kp_z, Kd_z, m, g)
    e_z = z_des - z;
    u = m*g + Kp_z * e_z - Kd_z * z_dot;
end
```

The `m*g` term is the **feedforward** component: it provides the thrust needed to counteract gravity, so the controller only needs to correct deviations from hover. The `Kp_z * e_z` term pushes the quadrotor toward the desired altitude, and the `-Kd_z * z_dot` term damps vertical oscillations.

For attitude control (roll, pitch, yaw), we use three separate PD controllers, one for each axis:

```matlab
function tau = attitude_controller(angles, angles_dot, angles_des, Kp, Kd)
    e = angles_des - angles;
    tau = Kp .* e - Kd .* angles_dot;
end
```

Where `angles` is `[roll; pitch; yaw]`, `angles_des` is the desired orientation, and `tau` is the torque vector.

A **PID controller** adds an **integral** term:

```
u(t) = Kp * e(t) + Ki * ∫e(t)dt + Kd * de(t)/dt
```

The integral term accumulates the error over time and applies a correction proportional to the total accumulated error. This eliminates **steady-state error**: a constant offset that remains even after the system has settled. For example, if a quadrotor is hovering slightly below the desired altitude due to a constant disturbance (like wind), the integral term will gradually increase the thrust until the altitude error is eliminated. However, the integral term can cause **integrator windup** if the system is saturated (e.g., the motor is at maximum thrust). Anti-windup techniques limit the integral term when the actuator is saturated.

**Tuning PID gains** is both an art and a science. The gains must be large enough to respond quickly but small enough to avoid instability. Common tuning methods include:
- **Ziegler-Nichols method:** A systematic experimental method for finding approximate gains.
- **Manual tuning:** Start with `Kp` small, increase until oscillation, then add `Kd` to dampen, then add `Ki` to eliminate steady-state error.
- **Optimization:** Use simulation to optimize gains for a specific performance metric (e.g., minimum settling time, minimum overshoot).

**Trajectory generation** is the process of creating a smooth, feasible path from the current state to a desired state. For a quadrotor, a simple trajectory is a sequence of waypoints connected by smooth curves. A common approach is to use **minimum-snap trajectories**, where the trajectory is a polynomial (typically 7th-order) that minimizes the integral of the snap (fourth derivative of position) subject to constraints on position, velocity, and acceleration at the waypoints. This ensures that the trajectory is smooth and that the motor commands (which depend on acceleration) do not change abruptly.

In MATLAB, a simple trajectory generator using cubic polynomials:

```matlab
function [pos, vel, acc] = cubic_trajectory(p0, p1, v0, v1, T, t)
    % p0, p1: initial and final positions
    % v0, v1: initial and final velocities
    % T: total duration
    % t: current time (0 <= t <= T)
    
    a0 = p0;
    a1 = v0;
    a2 = (3*(p1 - p0) - T*(2*v0 + v1)) / T^2;
    a3 = (2*(p0 - p1) + T*(v0 + v1)) / T^3;
    
    pos = a0 + a1*t + a2*t^2 + a3*t^3;
    vel = a1 + 2*a2*t + 3*a3*t^2;
    acc = 2*a2 + 6*a3*t;
end
```

This generates a smooth trajectory with continuous position, velocity, and acceleration, which is important for quadrotor flight because discontinuous acceleration would require infinite jerk (rate of change of acceleration) and would be impossible for the motors to follow.

#### Key concepts
- Control system components: reference, plant, sensor, controller
- Error signal: `e(t) = r(t) - y(t)`
- PD controller: `u = Kp*e + Kd*de/dt`
- PID controller: `u = Kp*e + Ki*∫e*dt + Kd*de/dt`
- Feedforward control: `m*g` for hover
- Steady-state error and integral term
- Integrator windup and anti-windup
- PID tuning methods: Ziegler-Nichols, manual, optimization
- Trajectory generation: waypoints, cubic polynomials, minimum-snap
- Damping, natural frequency, and stability

#### Hands-on activity
Write a MATLAB script that simulates a quadrotor altitude controller using a PD controller with `ode45`. The quadrotor starts at `z = 0` and must reach `z_des = 5 m`. Try different values of `Kp` and `Kd`: (1) `Kp = 1`, `Kd = 0` (unstable oscillation), (2) `Kp = 5`, `Kd = 2` (stable but slow), (3) `Kp = 10`, `Kd = 5` (fast but some overshoot), (4) `Kp = 20`, `Kd = 8` (fast with minimal overshoot). Plot `z(t)` for all four cases on the same graph. Then modify the controller to PID by adding an integral term with `Ki = 2`. Introduce a constant disturbance (e.g., `d = 0.5 N` downward force) and observe how the PID controller eliminates steady-state error while the PD controller cannot. Plot the results and discuss the trade-offs.

#### Assessment idea
Ask: "A quadrotor is hovering at z = 1.9 m but the desired altitude is z = 2.0 m. The error has been constant for 10 seconds. Which term of a PID controller will eventually eliminate this steady-state error?" Answer: The integral term (Ki). The proportional term produces a constant correction proportional to the error, but if there is a constant disturbance (like wind), the proportional term alone may not be enough to reach the setpoint. The integral term accumulates the error over time and increases the control input until the error is zero. Then ask: "What is integrator windup, and how can it be prevented?" Answer: Integrator windup occurs when the actuator is saturated (e.g., motor at maximum thrust) but the integral term continues to accumulate, causing a large overshoot when the actuator recovers. It can be prevented by limiting the integral term (clamping) when the actuator is saturated.

#### AI generation note
Create a 10-minute animated lesson. Show a control loop diagram with animated arrows: reference → error → controller → plant → sensor → back to error. Show the PD controller as a spring (proportional) and a damper (derivative) attached to a mass. Show the PID controller with an additional accumulator (integral) filling a bucket. Show the four altitude responses on the same graph with different colors. Animate the overshoot, oscillation, and settling for each case. Show the disturbance as a wind arrow pushing the quadrotor down, and the integral term gradually increasing the thrust to counteract it. Show a cubic trajectory as a smooth curve passing through waypoints. Include a live MATLAB coding segment.

---

### Chapter 2.3 — Motion Planning and Waypoint Navigation

#### Learning objectives
- Generate smooth trajectories between waypoints in 3D space.
- Implement a waypoint-following controller that tracks a trajectory.
- Understand the difference between trajectory generation and trajectory tracking.
- Analyze the trade-offs between aggressive and conservative flight trajectories.

#### Detailed lesson content

Flying a quadrotor is not just about stabilizing it in the air — it is about making it go where we want it to go. **Motion planning** is the problem of finding a path from a start state to a goal state that avoids obstacles and respects the robot's dynamics. **Trajectory generation** is the problem of converting a path into a time-parameterized trajectory: a function that specifies the robot's desired position, velocity, and acceleration at every instant in time. **Trajectory tracking** is the problem of making the robot follow that trajectory using feedback control.

A **waypoint** is a specific point in space that the robot must pass through. A mission for a quadrotor might consist of a sequence of waypoints: take off at (0, 0, 0), fly to (10, 0, 5), then to (10, 10, 5), then to (0, 10, 5), then land at (0, 0, 0). The simplest way to connect waypoints is with straight lines, but this creates discontinuous velocity at the waypoints (the robot would have to instantaneously change direction). Instead, we use smooth curves.

**Cubic polynomial trajectories** ensure continuity of position and velocity. A cubic polynomial has the form:

```
p(t) = a0 + a1*t + a2*t^2 + a3*t^3
```

With four coefficients, we can satisfy four constraints: initial position, final position, initial velocity, and final velocity. For a quadrotor, we typically want zero initial and final velocity (the robot starts and ends at rest), which simplifies the coefficients.

**Quintic polynomial trajectories** (5th-order) ensure continuity of position, velocity, and acceleration. This is important for quadrotors because the motor thrust is proportional to acceleration, and discontinuous acceleration would require infinite motor torque. Quintic trajectories are more complex but produce smoother flight.

**Minimum-snap trajectories** are the gold standard for quadrotor flight. A quadrotor's dynamics are differentially flat, meaning that the full state (position, velocity, orientation, angular velocity) and the control inputs can be expressed as functions of the position and its derivatives. Specifically, the motor thrusts are related to the fourth derivative of position (snap). By minimizing the integral of snap squared over the trajectory, we obtain a trajectory that is smooth and easy for the quadrotor to follow. In practice, this is solved as a quadratic programming (QP) problem.

**Trajectory tracking control** uses the generated trajectory as a reference and applies feedback control to correct deviations. A common approach is **cascade control**:
1. The outer loop (position control) computes the desired velocity based on the position error.
2. The middle loop (velocity control) computes the desired acceleration based on the velocity error.
3. The inner loop (attitude control) computes the desired torques based on the attitude error.

```matlab
function u = cascade_controller(x, x_ref, v_ref, a_ref, Kp_pos, Kd_pos, Kp_att, Kd_att, m, g)
    % Outer loop: position control
    v_des = v_ref + Kp_pos * (x_ref(1:3) - x(1:3));
    
    % Middle loop: velocity control
    a_des = a_ref + Kd_pos * (v_des - x(4:6));
    
    % Convert desired acceleration to thrust and attitude
    u_total = m * norm(a_des + [0; 0; g]);
    
    % Inner loop: attitude control (simplified)
    angles_des = acceleration_to_angles(a_des);
    tau = Kp_att * (angles_des - x(7:9)) - Kd_att * x(10:12);
    
    u = [u_total; tau];
end
```

**Safety considerations in aerial robotics:**
- **Geofencing:** Define a virtual boundary that the quadrotor must not cross. If it approaches the boundary, the controller forces it to turn back.
- **Emergency landing:** If the battery is low or communication is lost, the quadrotor must land safely. This requires a descent trajectory that avoids obstacles.
- **Collision avoidance:** Detect obstacles (using sensors like LiDAR or cameras) and replan the trajectory in real-time to avoid them.
- **Fail-safe mechanisms:** If a motor fails, the quadrotor cannot maintain stable flight. Some hexacopters and octocopters can tolerate one motor failure, but a quadrotor cannot. Fail-safe systems should immediately trigger an emergency landing.

#### Key concepts
- Waypoints and mission planning
- Trajectory generation: cubic, quintic, minimum-snap
- Trajectory tracking: reference following vs. path following
- Cascade control: position → velocity → attitude
- Differential flatness of quadrotor dynamics
- Quadratic programming (QP) for trajectory optimization
- Geofencing and safety boundaries
- Emergency landing and collision avoidance
- Fail-safe mechanisms for motor failure

#### Hands-on activity
Write a MATLAB script that generates a minimum-snap trajectory through four waypoints in 3D: (0, 0, 0), (5, 0, 3), (5, 5, 3), (0, 5, 0). Use cubic polynomials for each segment with zero velocity at the waypoints. Plot the 3D trajectory and the velocity and acceleration profiles as functions of time. Then simulate a quadrotor tracking this trajectory using the cascade controller from Chapter 2.2. Add a small random wind disturbance and observe how the controller compensates. Plot the actual trajectory alongside the reference trajectory.

#### Assessment idea
Ask: "Why is a straight-line path between waypoints unacceptable for quadrotor flight?" Answer: A straight-line path has discontinuous velocity at the waypoints (the robot would have to instantaneously change direction). This requires infinite acceleration, which is impossible for the motors to produce. A smooth trajectory (e.g., cubic polynomial) ensures continuous velocity and acceleration. Then ask: "What is differential flatness, and why is it useful for quadrotor trajectory generation?" Answer: Differential flatness means that all states and control inputs can be expressed as functions of a flat output (position) and its derivatives. For quadrotors, the flat output is the position, and the orientation and motor thrusts can be computed from the position derivatives. This allows us to plan trajectories in the flat output space (position) and then compute the required control inputs, simplifying the planning problem significantly.

#### AI generation note
Create a 10-minute animated lesson. Show a 3D map with waypoints connected by a smooth, curved trajectory (not straight lines). Show the velocity profile as a continuous curve and the acceleration profile as another continuous curve. Show the cascade control as three nested loops with animated arrows. Show the quadrotor following the reference trajectory with a small deviation caused by wind, and the controller correcting it. Show a geofence as a wireframe box and the quadrotor bouncing off it. Show an emergency landing sequence. Include a live MATLAB coding segment with the trajectory generation and tracking. End with a reflection: "What safety features would you add to a delivery drone flying over a city?"

---

## Module 3: Computational Motion Planning

> **Goal:** Master algorithms for finding collision-free paths for robots in complex environments, from graph search to sampling-based methods.

---

### Chapter 3.1 — Configuration Space and Graph Search

#### Learning objectives
- Define the configuration space (C-space) of a robot and distinguish it from the workspace.
- Represent obstacles in C-space and construct a collision-free graph.
- Implement graph search algorithms: Breadth-First Search (BFS), Dijkstra's algorithm, and A*.
- Analyze the time and space complexity of each algorithm.

#### Detailed lesson content

Motion planning is one of the most fundamental problems in robotics: given a robot, a start configuration, a goal configuration, and a set of obstacles, find a collision-free path from start to goal. This problem appears in every domain of robotics: a robot arm reaching for an object on a cluttered table, a mobile robot navigating a warehouse, a surgical robot maneuvering inside a patient's body, and a drone flying through a forest.

The key insight that makes motion planning tractable is the concept of **configuration space (C-space)**. The **workspace** is the physical space in which the robot operates (the 3D room, the 2D floor plan). The **C-space** is the space of all possible robot configurations. For a mobile robot moving on a 2D plane, the C-space is 3-dimensional: `(x, y, θ)`, where `x` and `y` are position and `θ` is orientation. For a robot arm with 6 joints, the C-space is 6-dimensional: `(θ1, θ2, θ3, θ4, θ5, θ6)`, one angle for each joint.

The importance of C-space is that obstacles in the workspace become **C-obstacles** in the C-space. A C-obstacle is the set of all robot configurations that would cause a collision with a workspace obstacle. In the C-space, the robot is represented as a single point, and the problem reduces to finding a path for that point from the start to the goal that avoids the C-obstacles. This transforms a complex geometric problem into a pathfinding problem in a (possibly high-dimensional) space.

For a 2D mobile robot that is a point (no geometry), the C-space is just the 2D workspace, and obstacles are the same. For a circular robot with radius `r`, the C-obstacle is the workspace obstacle expanded by `r` (the Minkowski sum of the obstacle and a disk of radius `r`). For a polygonal robot, the C-obstacle computation is more complex and involves rotating the robot and computing the swept volume.

Once the C-space is represented as a graph (or grid), we can use graph search algorithms to find a path. The three most important algorithms are:

**Breadth-First Search (BFS):** BFS explores all neighbors at the current depth before moving to the next depth. It is guaranteed to find the shortest path in an unweighted graph (where all edges have the same cost). BFS is simple but memory-intensive because it stores all nodes at the current depth.

```matlab
function path = bfs(graph, start, goal)
    queue = {start};
    visited = containers.Map();
    visited(mat2str(start)) = true;
    parent = containers.Map();
    
    while ~isempty(queue)
        current = queue{1};
        queue(1) = [];
        
        if isequal(current, goal)
            path = reconstruct_path(parent, start, goal);
            return;
        end
        
        for neighbor = graph.neighbors(current)
            if ~visited.isKey(mat2str(neighbor))
                visited(mat2str(neighbor)) = true;
                parent(mat2str(neighbor)) = current;
                queue{end+1} = neighbor;
            end
        end
    end
    path = [];  % No path found
end
```

**Dijkstra's Algorithm:** Dijkstra's algorithm finds the shortest path in a weighted graph (where edges have different costs). It maintains a priority queue of nodes ordered by their distance from the start. At each step, it extracts the node with the smallest distance and relaxes its edges. Dijkstra's algorithm is guaranteed to find the optimal path but can be slow for large graphs because it explores in all directions.

**A* (A-Star) Algorithm:** A* is the most widely used pathfinding algorithm in robotics. It is like Dijkstra's algorithm but uses a **heuristic function** `h(n)` to estimate the cost from node `n` to the goal. The algorithm prioritizes nodes with the smallest `f(n) = g(n) + h(n)`, where `g(n)` is the cost from the start to `n` and `h(n)` is the estimated cost from `n` to the goal. If the heuristic is **admissible** (never overestimates the true cost), A* is guaranteed to find the optimal path. If the heuristic is also **consistent** (satisfies the triangle inequality), A* is optimally efficient — no other algorithm that uses the same heuristic can explore fewer nodes.

Common heuristics for grid-based pathfinding:
- **Euclidean distance:** `h(n) = sqrt((x_n - x_goal)^2 + (y_n - y_goal)^2)` — always admissible.
- **Manhattan distance:** `h(n) = |x_n - x_goal| + |y_n - y_goal|` — admissible for 4-connected grids.
- **Zero heuristic:** `h(n) = 0` — A* reduces to Dijkstra's algorithm.

```matlab
function path = astar(grid, start, goal, heuristic)
    open_set = PriorityQueue();
    open_set.insert(start, heuristic(start, goal));
    
    g_score = containers.Map();
    g_score(mat2str(start)) = 0;
    
    parent = containers.Map();
    
    while ~open_set.isEmpty()
        current = open_set.pop();
        
        if isequal(current, goal)
            path = reconstruct_path(parent, start, goal);
            return;
        end
        
        for neighbor = grid.neighbors(current)
            tentative_g = g_score(mat2str(current)) + grid.cost(current, neighbor);
            
            if ~g_score.isKey(mat2str(neighbor)) || tentative_g < g_score(mat2str(neighbor))
                g_score(mat2str(neighbor)) = tentative_g;
                f_score = tentative_g + heuristic(neighbor, goal);
                open_set.insert(neighbor, f_score);
                parent(mat2str(neighbor)) = current;
            end
        end
    end
    path = [];
end
```

**Complexity analysis:**
- BFS: O(V + E) time, O(V) space, where V is the number of vertices and E is the number of edges.
- Dijkstra: O((V + E) log V) time with a priority queue, O(V) space.
- A*: O((V + E) log V) time in the worst case, but much faster in practice with a good heuristic. O(V) space.

For a 2D grid with resolution `n × n`, V = n² and E ≈ 4n², so all three algorithms run in O(n² log n) time with a priority queue. However, A* with a good heuristic often explores only a small fraction of the grid, making it dramatically faster.

#### Key concepts
- Configuration space (C-space) vs. workspace
- C-obstacles and Minkowski sum
- Graph representation of C-space
- Breadth-First Search (BFS): unweighted shortest path
- Dijkstra's algorithm: weighted shortest path
- A* algorithm: heuristic-guided search
- Admissible and consistent heuristics
- Euclidean and Manhattan distance heuristics
- Time and space complexity analysis
- 2D grid-based pathfinding

#### Hands-on activity
Write a MATLAB script that implements A* pathfinding on a 2D grid. Create a 50×50 grid with randomly placed obstacles (20% of cells). Define a start cell at (5, 5) and a goal cell at (45, 45). Implement A* with the Euclidean distance heuristic. Visualize the grid (black for obstacles, white for free space), the explored nodes (blue), and the final path (red). Compare the number of nodes explored by A* to the number explored by Dijkstra's algorithm (which is A* with h(n) = 0) on the same grid. Run the experiment 10 times with different random obstacle configurations and compute the average ratio of explored nodes.

#### Assessment idea
Ask: "Why is the configuration space (C-space) more useful than the workspace for motion planning?" Answer: In the C-space, the robot is represented as a single point, and obstacles become regions that the point must avoid. This transforms the complex geometric problem of moving a shaped robot around shaped obstacles into a simpler pathfinding problem for a point in a (possibly high-dimensional) space. Then ask: "What is an admissible heuristic, and why is it important for A*?" Answer: An admissible heuristic never overestimates the true cost to the goal. It is important because if the heuristic is admissible, A* is guaranteed to find the optimal (shortest) path. If the heuristic overestimates, A* may find a suboptimal path.

#### AI generation note
Create a 10-minute animated lesson. Show the workspace with a robot and obstacles, then transform to the C-space where the robot becomes a point and the obstacles become C-obstacles. Show BFS as a wave expanding uniformly from the start. Show Dijkstra as a wave expanding according to edge costs. Show A* as a wave that is pulled toward the goal by the heuristic. Show the three algorithms side by side on the same grid, with counters showing the number of explored nodes. Show the Euclidean heuristic as a straight-line distance arrow. Show the final path highlighted in red. Include a live MATLAB coding segment with the grid visualization. End with a reflection: "When would you prefer Dijkstra over A*?"

---

### Chapter 3.2 — Sampling-Based Motion Planning

#### Learning objectives
- Explain the Probabilistic Roadmap (PRM) method and its two phases: construction and query.
- Implement the Rapidly-exploring Random Tree (RRT) algorithm for single-query planning.
- Understand the RRT* algorithm and its asymptotic optimality guarantee.
- Compare graph-based and sampling-based methods for different planning scenarios.

#### Detailed lesson content

Graph search algorithms like A* work well for low-dimensional C-spaces (2D or 3D grids), but they become impractical for high-dimensional C-spaces. A robot arm with 6 joints has a 6-dimensional C-space. A humanoid robot with 30 joints has a 30-dimensional C-space. A grid with just 10 discrete values per dimension in 6D has 10^6 = 1,000,000 nodes — too many to explore exhaustively. For high-dimensional spaces, we need a different approach: **sampling-based motion planning**.

Sampling-based planners do not explicitly construct the entire C-space. Instead, they randomly sample configurations in the C-space and build a graph or tree incrementally by connecting valid (collision-free) samples. They are probabilistically complete: as the number of samples increases, the probability of finding a valid path approaches 1 (if one exists). They are not guaranteed to find the optimal path, but they scale much better to high dimensions than grid-based methods.

**Probabilistic Roadmap (PRM):** PRM is a multi-query planner. It precomputes a roadmap (graph) of the C-space in an offline phase, and then answers multiple path queries online by connecting the start and goal to the roadmap and searching it.

The PRM algorithm has two phases:
1. **Construction phase:**
   - Sample N random configurations in the C-space.
   - Keep only the collision-free samples (valid samples).
   - For each valid sample, find its k nearest neighbors (using Euclidean distance in C-space).
   - For each neighbor, check if the straight-line path between them is collision-free.
   - If yes, add an edge between them in the roadmap.

2. **Query phase:**
   - Given a start and goal configuration, find the nearest nodes in the roadmap.
   - Connect the start and goal to the roadmap if the connections are collision-free.
   - Search the roadmap (using A* or Dijkstra) for the shortest path from start to goal.

```matlab
function roadmap = prm_construct(cspace, N, k)
    roadmap.nodes = [];
    roadmap.edges = {};
    
    % Sample N configurations
    for i = 1:N
        q = cspace.random_sample();
        if cspace.is_valid(q)
            roadmap.nodes = [roadmap.nodes; q];
        end
    end
    
    % Connect nearest neighbors
    for i = 1:size(roadmap.nodes, 1)
        neighbors = knn(roadmap.nodes, roadmap.nodes(i,:), k);
        for j = 1:length(neighbors)
            if cspace.is_collision_free(roadmap.nodes(i,:), roadmap.nodes(neighbors(j),:))
                roadmap.edges{i} = [roadmap.edges{i}, neighbors(j)];
            end
        end
    end
end
```

PRM is efficient for multi-query problems because the expensive construction phase is done once. However, it requires a known, static environment. If the environment changes, the roadmap must be rebuilt.

**Rapidly-exploring Random Tree (RRT):** RRT is a single-query planner designed for problems where the environment may change or where we only need to plan one path. It grows a tree from the start configuration toward the goal by randomly sampling the C-space and biasing the growth toward unexplored regions.

The RRT algorithm:
1. Initialize the tree with the start configuration.
2. Repeat:
   - Sample a random configuration `q_rand` in the C-space.
   - Find the nearest node `q_near` in the tree to `q_rand`.
   - Extend the tree from `q_near` toward `q_rand` by a fixed step size `Δq`, producing `q_new`.
   - If the path from `q_near` to `q_new` is collision-free, add `q_new` to the tree.
   - If `q_new` is close to the goal, try to connect directly to the goal.
   - If the connection is successful, return the path.

```matlab
function tree = rrt(cspace, start, goal, max_iter, step_size)
    tree.nodes = start;
    tree.parent = 0;
    
    for i = 1:max_iter
        q_rand = cspace.random_sample();
        [q_near, idx_near] = nearest_neighbor(tree.nodes, q_rand);
        q_new = steer(q_near, q_rand, step_size);
        
        if cspace.is_collision_free(q_near, q_new)
            tree.nodes = [tree.nodes; q_new];
            tree.parent = [tree.parent; idx_near];
            
            if norm(q_new - goal) < step_size
                if cspace.is_collision_free(q_new, goal)
                    tree.nodes = [tree.nodes; goal];
                    tree.parent = [tree.parent; size(tree.nodes,1)-1];
                    return;
                end
            end
        end
    end
end
```

RRT is fast and simple, but the path it finds is often jagged and suboptimal. It may take unnecessary detours and have sharp turns that are difficult for a robot to follow.

**RRT* (RRT Star):** RRT* is an improved version of RRT that asymptotically converges to the optimal path. After adding a new node, RRT* does two things that RRT does not:
1. **Rewiring:** It checks if the new node provides a shorter path to any of its neighbors, and if so, it rewires the tree to use the new node as the parent.
2. **Optimal parent selection:** When adding a new node, it considers all neighbors within a certain radius and chooses the parent that gives the lowest cost from the start.

These additional steps make RRT* slightly slower per iteration than RRT, but the resulting path is much better and approaches the optimal path as the number of iterations increases.

**Comparison of methods:**
- **Grid-based (A*):** Best for low-dimensional C-spaces (2D, 3D) with known obstacles. Finds optimal paths. Becomes intractable for dimensions > 4.
- **PRM:** Best for high-dimensional C-spaces with multiple queries and static environments. Requires precomputation. Probabilistically complete.
- **RRT:** Best for single-query problems in high-dimensional spaces. Fast but suboptimal. Good for real-time replanning.
- **RRT*:** Best when path quality matters. Slower than RRT but converges to optimal. Good for offline planning.

#### Key concepts
- Sampling-based motion planning and probabilistic completeness
- PRM: construction phase and query phase
- RRT: random sampling, nearest neighbor, steering, tree extension
- RRT*: rewiring and optimal parent selection
- Asymptotic optimality
- Single-query vs. multi-query planners
- Comparison: grid-based, PRM, RRT, RRT*
- Collision checking and validity testing
- High-dimensional C-space challenges

#### Hands-on activity
Write a MATLAB script that implements RRT and RRT* for a 2D point robot navigating around polygonal obstacles. Define a 2D workspace with 3–5 rectangular obstacles. Use a start point at (1, 1) and a goal at (9, 9). Run RRT for 1000 iterations and plot the tree and the path. Then run RRT* for 1000 iterations on the same problem and plot the tree and the path. Compare the path lengths. Then increase the iterations to 5000 for both and compare again. Observe how RRT* improves the path with more iterations, while RRT does not. Plot the path length as a function of iterations for RRT* to visualize convergence.

#### Assessment idea
Ask: "You are planning a path for a 7-degree-of-freedom robot arm in a cluttered environment. Would you use A* or RRT?" Answer: RRT (or RRT*), because the C-space is 7-dimensional, which is far too large for a grid-based method like A*. A* would require discretizing a 7D space, resulting in an intractable number of nodes. RRT scales to high dimensions by sampling rather than discretizing. Then ask: "What is the key difference between RRT and RRT* that allows RRT* to converge to the optimal path?" Answer: RRT* rewires the tree after adding each new node. If a new node provides a shorter path to an existing node, RRT* updates the parent of that existing node. This local optimization ensures that the tree gradually improves and approaches the optimal path as the number of samples increases.

#### AI generation note
Create a 10-minute animated lesson. Show PRM as a cloud of points with lines connecting nearby valid points, forming a roadmap. Show the query phase as a start and goal connecting to the roadmap and a path being found. Show RRT as a tree growing from the start, with branches reaching toward random samples. Show RRT* as the same tree but with branches being rewired (cut and reconnected) to shorter paths. Show the path length decreasing over iterations for RRT*. Show a side-by-side comparison of RRT and RRT* paths on the same problem. Show a 7D C-space as a grid that becomes impossibly large, contrasted with RRT sampling points directly. Include a live MATLAB coding segment. End with a reflection: "When would you prefer PRM over RRT?"

---

### Chapter 3.3 — Potential Fields and Gradient-Based Methods

#### Learning objectives
- Implement the potential field method for real-time obstacle avoidance and goal attraction.
- Understand the problem of local minima and how to escape them.
- Use gradient descent for path optimization and smooth trajectory refinement.
- Compare potential fields with sampling-based methods for reactive planning.

#### Detailed lesson content

While PRM and RRT are powerful for global motion planning, they are computationally expensive and not well-suited for real-time reactive control. When a robot is moving through a dynamic environment — where obstacles may appear or move unexpectedly — it needs a planner that can react instantly. **Potential field methods** provide exactly this: a fast, local reactive control strategy that can be computed in real-time.

The potential field method imagines the robot as a charged particle moving in a force field. The goal exerts an **attractive force** that pulls the robot toward it. Obstacles exert **repulsive forces** that push the robot away. The robot moves in the direction of the net force, which is the negative gradient of the potential field.

The attractive potential is typically a quadratic function of the distance to the goal:

```
U_att(q) = 0.5 * K_att * ||q - q_goal||²
```

The attractive force is the negative gradient of this potential:

```
F_att(q) = -K_att * (q - q_goal)
```

The repulsive potential is defined only near obstacles and increases as the robot approaches an obstacle:

```
U_rep(q) = 0.5 * K_rep * (1/d(q) - 1/d0)²   if d(q) <= d0
U_rep(q) = 0                                 if d(q) > d0
```

Where `d(q)` is the distance from the robot to the nearest obstacle, `d0` is the influence distance (beyond which obstacles have no effect), and `K_rep` is the repulsive gain. The repulsive force is:

```
F_rep(q) = K_rep * (1/d(q) - 1/d0) * (1/d(q)²) * ∇d(q)
```

The total force is `F_total = F_att + F_rep`, and the robot moves in the direction of `F_total`.

```matlab
function F = potential_field_force(q, q_goal, obstacles, K_att, K_rep, d0)
    % Attractive force
    F_att = -K_att * (q - q_goal);
    
    % Repulsive force
    F_rep = [0; 0];
    for i = 1:length(obstacles)
        d = distance_to_obstacle(q, obstacles{i});
        if d < d0
            grad_d = gradient_distance(q, obstacles{i});
            F_rep = F_rep + K_rep * (1/d - 1/d0) * (1/d^2) * grad_d;
        end
    end
    
    F = F_att + F_rep;
end
```

**Local minima** are the biggest problem with potential field methods. A local minimum occurs when the attractive and repulsive forces balance each other, trapping the robot in a position that is not the goal. For example, if the robot is between two obstacles and the goal is on the other side, the repulsive forces from the obstacles may cancel the attractive force from the goal, leaving the robot stuck.

Several strategies exist to escape local minima:
- **Random walk:** When the robot detects it is stuck, it moves in a random direction for a short distance to break the balance.
- **Wavefront propagation:** Precompute a global potential field that has no local minima by propagating from the goal outward (like a BFS in a grid).
- **Navigation functions:** Construct a potential field that is guaranteed to have no local minima (mathematically proven). These are complex to compute but provide global convergence guarantees.
- **Hybrid approach:** Use a global planner (like PRM or RRT) to find an approximate path, and use potential fields locally for obstacle avoidance and smoothing.

**Gradient descent** is a general optimization technique that follows the negative gradient of a cost function to find a minimum. In motion planning, we can use gradient descent to optimize a trajectory by defining a cost function that penalizes proximity to obstacles, deviation from the goal, and high curvature (sharp turns). The trajectory is iteratively refined by moving each waypoint in the direction of the negative gradient.

```matlab
function trajectory = gradient_descent_path(trajectory, obstacles, alpha, iterations)
    for iter = 1:iterations
        for i = 2:length(trajectory)-1
            grad = compute_gradient(trajectory(i,:), obstacles);
            trajectory(i,:) = trajectory(i,:) - alpha * grad;
        end
    end
end
```

**Comparison with sampling-based methods:**
- **Potential fields:** Fast, reactive, local. Good for real-time obstacle avoidance. Bad for global planning due to local minima.
- **Sampling-based (RRT, PRM):** Slower, global. Good for finding a feasible path in complex environments. Bad for real-time reactive control.
- **Best practice:** Use a global planner to find an initial path, then use potential fields or gradient descent to refine the path and handle dynamic obstacles.

#### Key concepts
- Potential field: attractive and repulsive components
- Attractive potential: quadratic, proportional to distance to goal
- Repulsive potential: inverse-square, limited to influence distance d0
- Total force as negative gradient of potential
- Local minima problem and escape strategies
- Random walk, wavefront propagation, navigation functions
- Gradient descent for trajectory optimization
- Hybrid planning: global + local
- Real-time reactive control vs. global planning

#### Hands-on activity
Write a MATLAB script that implements a potential field controller for a 2D point robot. Define a goal at (10, 10) and three circular obstacles at different locations. Simulate the robot starting at (0, 0) and moving under the potential field forces. Use `K_att = 1`, `K_rep = 10`, `d0 = 3`. Plot the robot's trajectory. Try to create a local minimum by placing two obstacles symmetrically between the start and the goal. Observe the robot getting stuck. Then implement the random walk escape strategy: if the robot's position does not change significantly for 10 iterations, add a random perturbation to the force. Observe the robot escaping and reaching the goal. Plot the force vectors as arrows at each step.

#### Assessment idea
Ask: "A mobile robot is navigating a corridor with a potential field controller. It encounters a U-shaped obstacle with the goal at the opening. What problem will it face, and how can it be solved?" Answer: The robot will face a local minimum. The repulsive forces from the U-shaped obstacle will push the robot into the bottom of the U, and the attractive force from the goal will not be strong enough to pull it out. Solutions: (1) random walk to escape the minimum, (2) use a global planner to find a path around the obstacle, (3) use a wavefront-based navigation function that has no local minima. Then ask: "Why is a hybrid approach (global planner + local potential field) generally preferred over using either method alone?" Answer: The global planner ensures the robot will eventually reach the goal (no local minima), while the local potential field provides fast, reactive obstacle avoidance for dynamic obstacles that the global planner did not know about.

#### AI generation note
Create a 10-minute animated lesson. Show the potential field as a landscape with a valley at the goal (attractive) and hills around obstacles (repulsive). Show the robot as a ball rolling downhill toward the goal. Show a local minimum as a small valley that traps the ball. Show the random walk escape as the ball bouncing out of the trap. Show the hybrid approach as a global path (dotted line) combined with local potential field forces (arrows) that keep the robot away from unexpected obstacles. Show gradient descent as a path being smoothed by iterative refinement. Include a live MATLAB coding segment with the potential field simulation. End with a reflection: "In what real-world scenario would a potential field be more useful than RRT?"

---

## Module 4: Mobility

> **Goal:** Understand the principles of locomotion for legged and wheeled robots, from bioinspired templates to nonlinear dynamics and actuator design.

---

### Chapter 4.1 — Legged Locomotion and Bioinspired Templates

#### Learning objectives
- Explain why legged locomotion is more versatile than wheeled locomotion for complex terrain.
- Analyze the Spring-Loaded Inverted Pendulum (SLIP) model as a template for running and hopping.
- Understand the compass gait model and its implications for walking stability.
- Identify the trade-offs between stability, energy efficiency, and speed in legged robots.

#### Detailed lesson content

Wheels are efficient on flat, hard surfaces, but they fail on soft ground, stairs, rubble, and uneven terrain. Legs, on the other hand, can step over obstacles, adapt to uneven surfaces, and maintain balance on slopes. This is why animals use legs, and why legged robots are essential for applications like search-and-rescue in collapsed buildings, exploration of rocky planets, and navigating human environments designed for bipeds.

However, legged locomotion is fundamentally more complex than wheeled locomotion. A wheeled robot has a simple kinematic constraint: it moves in the direction it is pointed, and its velocity is proportional to wheel speed. A legged robot must coordinate multiple joints, maintain balance, manage foot contact and liftoff, and recover from disturbances. The dynamics are nonlinear, hybrid (switching between contact and flight phases), and underactuated (the robot cannot directly control its center of mass position during flight).

To make legged locomotion tractable, roboticists use **bioinspired templates** — simplified models that capture the essential dynamics of animal locomotion without the complexity of full morphology. The most important template is the **Spring-Loaded Inverted Pendulum (SLIP)** model.

The SLIP model represents a running animal (or robot) as a point mass mounted on a massless springy leg. The leg touches the ground at a certain angle, compresses during stance, stores elastic energy, and then extends to push the mass into the next flight phase. Despite its simplicity, the SLIP model accurately predicts the center-of-mass trajectories of humans, dogs, kangaroos, and cockroaches during running.

The SLIP model has four parameters:
- **Leg stiffness (k):** How stiff the spring is. Stiffer legs produce shorter, bouncier strides.
- **Rest length (L0):** The length of the leg when uncompressed.
- **Touchdown angle (α):** The angle at which the leg hits the ground. A steeper angle produces a higher hop.
- **Initial velocity (v):** The horizontal speed at touchdown.

During the **stance phase** (when the leg is on the ground), the dynamics are:

```
m * ẍ = k * (L0 - L) * sin(α)
m * z̈ = k * (L0 - L) * cos(α) - m * g
```

Where `L` is the current leg length and `α` is the leg angle. During the **flight phase** (when the leg is off the ground), the dynamics are simple projectile motion:

```
ẍ = 0
z̈ = -g
```

The transitions between stance and flight are determined by leg contact and liftoff conditions. This hybrid dynamics makes the SLIP model challenging to analyze but also rich in behavior. Depending on the parameters, the SLIP model can exhibit stable periodic orbits (sustained running), chaotic behavior, or falling.

**Stability analysis** of the SLIP model is done using **Poincaré maps**. A Poincaré map is a technique for analyzing periodic systems by looking at the state of the system at a specific point in the cycle (e.g., at each touchdown). If the system returns to the same state after each cycle, it is stable. If small perturbations grow, it is unstable. For the SLIP model, researchers have found that running is stable for a range of touchdown angles and leg stiffnesses, which explains why animals can run without actively controlling every step.

The **compass gait** model is another bioinspired template, this time for walking. It consists of two rigid legs connected by a pin joint at the hip, with a point mass at the hip. The legs swing like a compass, and walking is a sequence of falls and catches. The compass gait model demonstrates that walking can be a **passive dynamic** process: gravity does most of the work, and the robot does not need motors at every joint. This insight led to the development of passive dynamic walkers — robots that can walk down a shallow slope with no power at all.

**Trade-offs in legged locomotion:**
- **Stability vs. speed:** A stable gait (like a walk) is slow but robust. A fast gait (like a run) is less stable but more efficient at high speeds.
- **Energy efficiency vs. versatility:** Statically stable gaits (where the center of mass stays within the support polygon) are safe but energy-inefficient. Dynamically stable gaits (like running) are efficient but require active balance control.
- **Leg complexity vs. terrain adaptability:** More legs (hexapod, quadruped) provide better stability but more complex coordination. Fewer legs (biped) are less stable but more versatile in human environments.

#### Key concepts
- Legged vs. wheeled locomotion: terrain adaptability
- Bioinspired templates: simplified models of animal locomotion
- Spring-Loaded Inverted Pendulum (SLIP) model
- SLIP parameters: leg stiffness, rest length, touchdown angle, initial velocity
- Stance phase and flight phase dynamics
- Hybrid dynamics and contact transitions
- Poincaré maps for stability analysis
- Compass gait model and passive dynamic walking
- Stability vs. speed vs. energy efficiency trade-offs
- Statically stable vs. dynamically stable gaits

#### Hands-on activity
Write a MATLAB script that simulates the SLIP model in 2D. Use parameters: `m = 1 kg`, `k = 1000 N/m`, `L0 = 1 m`, `α = 70°`, `v = 2 m/s`. Simulate one complete hop (stance + flight) using `ode45` for the stance phase and analytical projectile motion for the flight phase. Plot the center-of-mass trajectory (x vs. z) and the leg length as a function of time. Then vary the touchdown angle (try 60°, 70°, 80°) and observe how the hop height and distance change. Finally, try reducing the leg stiffness to `k = 500 N/m` and observe how the stance phase becomes longer and the hop lower. Discuss the implications for robot design.

#### Assessment idea
Ask: "The SLIP model has no explicit motor or controller. How can it still produce stable running?" Answer: The SLIP model produces stable running through passive dynamics. The spring in the leg stores and releases energy, and the geometry of the leg touchdown angle creates a natural restoring force. For certain parameter ranges, the system has a stable periodic orbit, meaning small perturbations decay over successive hops. This is why animals can run with minimal active control — their muscles and tendons act like springs. Then ask: "What is the difference between statically stable and dynamically stable locomotion?" Answer: In statically stable locomotion, the robot's center of mass remains within the support polygon (the convex hull of the contact points) at all times. If the robot stops, it will not fall. In dynamically stable locomotion, the center of mass may leave the support polygon during parts of the gait, and the robot relies on active control and momentum to maintain balance. Walking is statically stable; running is dynamically stable.

#### AI generation note
Create a 10-minute animated lesson. Show a cheetah running, a human walking, and a cockroach scurrying. Show the SLIP model as a point mass on a springy leg, with the leg compressing and extending. Animate the center-of-mass trajectory as a series of arcs. Show the Poincaré map as a point returning to the same location after each cycle. Show the compass gait as a two-legged pendulum falling and catching. Show a passive dynamic walker on a shallow slope, moving with no power. Show a quadruped, hexapod, and biped side by side, highlighting stability polygons. Include a live MATLAB coding segment with the SLIP simulation. End with a reflection: "Why might a bipedal robot be preferred over a wheeled robot for exploring a collapsed building?"

---

### Chapter 4.2 — Nonlinear Dynamics and Actuator Design

#### Learning objectives
- Analyze the nonlinear dynamics of legged robots using phase portraits and limit cycles.
- Understand the role of energy and power in locomotion.
- Select actuators (motors, servos, series elastic actuators) based on torque, speed, and power requirements.
- Evaluate the trade-offs between rigid and compliant actuation for legged robots.

#### Detailed lesson content

Legged robots are inherently nonlinear systems. The equations of motion involve trigonometric functions (from joint angles), switching conditions (from foot contact), and velocity-dependent forces (like friction and damping). Understanding these nonlinear dynamics is essential for designing controllers and actuators that can produce stable, efficient locomotion.

A **phase portrait** is a graphical tool for analyzing nonlinear systems. It plots the state variables against each other (e.g., position vs. velocity) and shows the trajectories of the system over time. For a simple pendulum, the phase portrait shows closed orbits (oscillations) near the stable equilibrium and open trajectories (rotations) at high energies. The points where trajectories intersect themselves are called **fixed points** or **equilibria**. The behavior near a fixed point determines the system's stability: if trajectories spiral toward the fixed point, it is stable; if they spiral away, it is unstable.

For legged robots, the phase portrait is more complex because the system switches between different dynamics (stance and flight) depending on the state. A **limit cycle** is a closed trajectory in the phase portrait that is isolated (no other trajectories nearby are closed). Limit cycles are important in robotics because they represent **stable periodic gaits**: a walking or running motion that repeats indefinitely. If a small perturbation pushes the system away from the limit cycle, and the system returns to it, the limit cycle is **stable**. Stable limit cycles are the goal of legged robot control.

```matlab
% Phase portrait of a simple pendulum
theta = linspace(-2*pi, 2*pi, 20);
omega = linspace(-5, 5, 20);
[TH, OM] = meshgrid(theta, omega);

% dtheta/dt = omega
% domega/dt = -(g/L)*sin(theta)
g = 9.81; L = 1;
dTH = OM;
dOM = -(g/L)*sin(TH);

quiver(TH, OM, dTH, dOM);
xlabel('Angle (rad)');
ylabel('Angular velocity (rad/s)');
```

**Energy and power** are critical considerations in legged robot design. The energy cost of locomotion is often measured by the **specific cost of transport (COT)**, defined as the energy consumed per unit weight per unit distance traveled. For animals, the COT is remarkably low: humans walk with a COT of about 0.2, while cockroaches run with a COT of about 0.1. For robots, the COT is typically much higher because motors are less efficient than muscles, and robots often use rigid, heavy limbs instead of lightweight, springy ones.

To reduce energy consumption, legged robots use **compliant actuation** — actuators that include springs or elastic elements to store and release energy, mimicking the tendons and ligaments of animals. The most common compliant actuator is the **Series Elastic Actuator (SEA)**.

A Series Elastic Actuator consists of a motor connected to the load through a spring. The motor controls the spring deflection, and the spring transmits force to the load. The spring provides several benefits:
1. **Force sensing:** The force transmitted to the load is proportional to the spring deflection (`F = k * Δx`), which can be measured easily. This provides accurate, low-noise force feedback without expensive force sensors.
2. **Shock tolerance:** The spring absorbs impacts and protects the motor from damage. If the robot hits the ground hard, the spring compresses and dissipates the energy.
3. **Energy storage:** The spring stores elastic energy during compression and releases it during extension, reducing the energy required from the motor. This is why SEAs are used in running robots like Boston Dynamics' Spot.
4. **Stable force control:** The spring makes the actuator naturally compliant, which is safer for human-robot interaction. If a person bumps into the robot, the spring deflects rather than transmitting a rigid, dangerous force.

**Actuator selection** for legged robots involves balancing torque, speed, and power:
- **Torque:** The motor must produce enough torque to support the robot's weight and accelerate the limbs. For a humanoid robot, hip and knee joints may require torques of 50–100 N·m.
- **Speed:** The motor must be able to move the limbs fast enough for the desired gait. Running requires higher joint speeds than walking.
- **Power:** Power = torque × angular velocity. The motor must be able to deliver the required power at the operating point.
- **Bandwidth:** The motor must respond quickly enough to maintain balance. A bandwidth of 10–20 Hz is typical for legged robots.

**Common actuator types:**
- **DC motors with gearboxes:** High torque, low speed, but rigid and heavy. Common in early humanoid robots.
- **Servo motors:** Integrated motor, gearbox, and controller. Easy to use but often underpowered for large robots.
- **Series Elastic Actuators (SEAs):** Best for legged robots. Compliant, efficient, and safe. Used in modern robots like MIT's Cheetah and Boston Dynamics' Spot.
- **Hydraulic actuators:** Very high power density. Used in Boston Dynamics' Atlas. Noisy and require a hydraulic pump.
- **Pneumatic actuators:** Lightweight and compliant. Used in soft robots. Low power and difficult to control precisely.

#### Key concepts
- Nonlinear dynamics and phase portraits
- Fixed points, equilibria, and stability analysis
- Limit cycles and stable periodic gaits
- Specific cost of transport (COT)
- Series Elastic Actuator (SEA): structure and benefits
- Compliant actuation vs. rigid actuation
- Actuator selection criteria: torque, speed, power, bandwidth
- DC motors, servos, SEAs, hydraulic, pneumatic actuators
- Energy efficiency in legged locomotion

#### Hands-on activity
Write a MATLAB script that computes and plots the phase portrait of a simple pendulum with damping. Use `g = 9.81`, `L = 1`, and damping coefficient `c = 0.1`. Plot the phase portrait with `quiver` and overlay a few trajectories starting from different initial conditions (e.g., `θ = 0.5, ω = 0`; `θ = 2.5, ω = 0`; `θ = 3.14, ω = 0`). Observe how trajectories spiral toward the stable equilibrium at `(0, 0)` and how trajectories starting near `θ = π` (the unstable upright position) fall away. Then, write a function that computes the specific cost of transport for a hypothetical robot: given mass `m = 10 kg`, distance traveled `d = 100 m`, energy consumed `E = 5000 J`, and gravity `g = 9.81`, compute `COT = E / (m * g * d)`. Compare this to the biological COT of a human (0.2) and discuss what design changes could improve efficiency.

#### Assessment idea
Ask: "A Series Elastic Actuator has a spring between the motor and the load. How does this spring help the robot run more efficiently?" Answer: The spring stores elastic energy when the leg compresses during stance and releases it when the leg extends to push off the ground. This reduces the energy the motor must provide, similar to how tendons in animals store and release energy during running. The spring also protects the motor from shock loads and provides natural force sensing. Then ask: "Why is hydraulic actuation used in Boston Dynamics' Atlas but not in most commercial robots?" Answer: Hydraulic actuators provide extremely high power density and torque, which is necessary for the explosive, dynamic movements of Atlas (backflips, running). However, they are noisy, require a heavy hydraulic pump and fluid reservoir, and are complex to maintain. For most commercial robots, electric motors with gearboxes or SEAs are preferred for their simplicity, cleanliness, and lower cost.

#### AI generation note
Create a 10-minute animated lesson. Show the phase portrait of a pendulum with trajectories spiraling into a stable fixed point. Show the limit cycle as a closed loop that attracts nearby trajectories. Show the energy flow in a running robot: kinetic energy → potential energy → elastic energy → kinetic energy. Show a Series Elastic Actuator as a motor connected to a spring connected to a leg, with the spring compressing and extending. Show the force vs. deflection graph for the spring. Show different actuator types side by side: DC motor (rigid), SEA (springy), hydraulic (pump + piston), pneumatic (air cylinder). Show a Boston Dynamics Spot robot running and a humanoid robot walking. Include a live MATLAB coding segment with the phase portrait. End with a reflection: "What is the most important property of an actuator for a robot that will work near humans?"

---

### Chapter 4.3 — Wheeled Robots and Kinematics

#### Learning objectives
- Derive the forward kinematics of differential-drive and Ackermann-steered robots.
- Implement odometry: estimating position from wheel encoder measurements.
- Understand nonholonomic constraints and their implications for wheeled robot control.
- Compare wheeled and legged locomotion for different application domains.

#### Detailed lesson content

Wheeled robots are the workhorses of the robotics industry. They are simpler, cheaper, and more reliable than legged robots, and they excel on flat, structured surfaces. Warehouse robots, autonomous cars, vacuum cleaners, and Mars rovers all use wheels. Understanding wheeled robot kinematics is essential because even legged robots often use wheels for long-distance travel, and the principles of odometry and constraints apply broadly.

**Differential-drive robots** are the simplest wheeled configuration. They have two fixed wheels on a common axis, driven by separate motors, and one or more castor wheels for stability. By controlling the speeds of the two drive wheels, the robot can move forward, backward, turn in place, and follow curved paths.

The **forward kinematics** of a differential-drive robot relates the wheel speeds to the robot's velocity in the world frame. Let `v_L` and `v_R` be the linear velocities of the left and right wheels, and `L` be the distance between the wheels (track width). The robot's forward velocity `v` and angular velocity `ω` are:

```
v = (v_R + v_L) / 2
ω = (v_R - v_L) / L
```

If both wheels move at the same speed, the robot moves straight. If the right wheel moves faster than the left, the robot turns left. If the wheels move at equal but opposite speeds, the robot turns in place.

**Odometry** is the process of estimating the robot's position by integrating its velocity over time. Given the wheel speeds measured by encoders, we can compute the robot's change in position and orientation over a small time step `dt`:

```
Δx = v * cos(θ) * dt
Δy = v * sin(θ) * dt
Δθ = ω * dt
```

Where `θ` is the robot's current heading. This is **dead reckoning** — estimating position by integrating velocity without external sensors. Odometry is simple and cheap but accumulates error over time due to wheel slip, uneven terrain, and encoder quantization. A robot that drives in a circle for 10 minutes using only odometry may end up meters away from its expected position.

```matlab
function pose = odometry_update(pose, v_L, v_R, L, dt)
    v = (v_R + v_L) / 2;
    omega = (v_R - v_L) / L;
    
    pose.x = pose.x + v * cos(pose.theta) * dt;
    pose.y = pose.y + v * sin(pose.theta) * dt;
    pose.theta = pose.theta + omega * dt;
end
```

**Ackermann steering** is the geometry used in cars. The front wheels are steered at different angles so that all wheels roll without slipping around a common center of rotation. The **Ackermann condition** ensures that the inner wheel turns more sharply than the outer wheel:

```
tan(θ_inner) = L / (R - w/2)
tan(θ_outer) = L / (R + w/2)
```

Where `L` is the wheelbase, `w` is the track width, and `R` is the turning radius. Ackermann steering is nonholonomic: the robot cannot move sideways (it cannot instantaneously change its y-position without changing its orientation). This is a **nonholonomic constraint** — a velocity constraint that cannot be integrated to a position constraint.

**Nonholonomic constraints** are one of the most important concepts in wheeled robot kinematics. A constraint is nonholonomic if it restricts the robot's velocities but not its positions. For example, a car cannot move sideways, but it can reach any position and orientation by driving forward, turning, and reversing. This means the robot's configuration space is connected (any state is reachable) but the path to reach it is constrained. Nonholonomic systems require specialized control algorithms, such as **pure pursuit** (following a path by steering toward a point ahead on the path) and **Stanley method** (steering toward the closest point on the path with a correction for heading error).

**Comparing wheeled and legged locomotion:**
- **Wheeled:** Efficient on flat ground, simple control, low cost, high speed. Cannot navigate stairs, soft ground, or obstacles larger than the wheel radius.
- **Legged:** Versatile on complex terrain, can step over obstacles, climb stairs, and adapt to uneven surfaces. Higher energy cost, more complex control, more expensive.
- **Hybrid:** Some robots combine wheels and legs (whegs, wheel-legged robots) to get the best of both worlds. For example, a robot with wheels that can extend legs when encountering obstacles.

**Mars rovers** (like NASA's Perseverance) use a **rocker-bogie suspension** system with six wheels. The rocker-bogie allows the rover to climb over rocks larger than the wheel radius while keeping the body relatively level. Each wheel has its own motor, and the middle wheels are steered. This hybrid approach combines the efficiency of wheels with some of the terrain adaptability of legs.

#### Key concepts
- Differential-drive kinematics: forward velocity and angular velocity from wheel speeds
- Odometry and dead reckoning
- Encoder-based position estimation and error accumulation
- Ackermann steering geometry and the Ackermann condition
- Nonholonomic constraints: velocity restrictions vs. position reachability
- Pure pursuit and Stanley method for path tracking
- Wheeled vs. legged vs. hybrid locomotion
- Rocker-bogie suspension for rough terrain

#### Hands-on activity
Write a MATLAB script that simulates a differential-drive robot following a square path using odometry. The robot starts at `(0, 0)` with heading `θ = 0`. It must drive to `(5, 0)`, turn 90°, drive to `(5, 5)`, turn 90°, drive to `(0, 5)`, turn 90°, and return to `(0, 0)`. Use wheel speeds `v_L = 0.5 m/s` and `v_R = 0.5 m/s` for straight segments. For turning, use `v_L = -0.3 m/s` and `v_R = 0.3 m/s` (turn in place). Use `L = 0.3 m` (track width) and `dt = 0.01 s`. Plot the robot's path in the x-y plane. Then add noise to the wheel speeds (Gaussian with `σ = 0.02 m/s`) and observe how the path drifts. Plot the noisy path alongside the ideal path and discuss the limitations of odometry.

#### Assessment idea
Ask: "A differential-drive robot has wheel speeds v_L = 0.4 m/s and v_R = 0.6 m/s. The track width is L = 0.5 m. What is the robot's forward velocity and angular velocity?" Answer: `v = (0.4 + 0.6) / 2 = 0.5 m/s`. `ω = (0.6 - 0.4) / 0.5 = 0.4 rad/s`. The robot moves forward at 0.5 m/s while turning left at 0.4 rad/s. Then ask: "Why is a car's motion constraint (cannot move sideways) called nonholonomic?" Answer: Because the constraint is on the velocity (the car cannot have a sideways velocity component), not on the position. Despite this velocity constraint, the car can reach any position and orientation by a sequence of forward and turning motions. The constraint is non-integrable — it cannot be written as a constraint on the configuration variables alone.

#### AI generation note
Create a 10-minute animated lesson. Show a differential-drive robot with two wheels and a castor. Show the wheel speed vectors and the resulting robot velocity and angular velocity. Show the robot following a square path in the x-y plane. Show odometry error accumulation as the path gradually drifts from the ideal square. Show a car with Ackermann steering, highlighting the different steering angles of the inner and outer wheels. Show the nonholonomic constraint as a "no sideways motion" sign. Show a Mars rover with rocker-bogie suspension climbing over a rock. Show a side-by-side comparison: wheeled robot (fast, flat ground), legged robot (slow, rough terrain), hybrid robot (medium speed, adaptable). Include a live MATLAB coding segment with the odometry simulation. End with a reflection: "When would you choose legs over wheels for a robot?"

---

## Module 5: Perception

> **Goal:** Master the computer vision techniques that allow robots to see, understand, and navigate their environments using cameras.

---

### Chapter 5.1 — Camera Models and Projective Geometry

#### Learning objectives
- Model the pinhole camera and understand the perspective projection equation.
- Distinguish between intrinsic and extrinsic camera parameters.
- Calibrate a camera using a checkerboard pattern to estimate intrinsic parameters.
- Understand lens distortion (radial and tangential) and how to correct it.

#### Detailed lesson content

Perception is the bridge between the physical world and the robot's internal model of that world. While humans rely primarily on vision, robots can use many sensors: cameras, LiDAR, radar, sonar, infrared, and tactile sensors. In this module, we focus on **computer vision** — the use of cameras to extract geometric and semantic information about the environment. Cameras are the most common perception sensor in robotics because they are cheap, lightweight, passive (do not emit energy), and provide rich information (color, texture, shape).

The foundation of computer vision is the **pinhole camera model**. A pinhole camera is a dark box with a tiny hole (aperture) that allows light to enter. Light from a point in the world passes through the pinhole and projects onto the image plane on the opposite side of the box. The image is inverted, but the geometry is simple and well-defined.

The **perspective projection equation** relates a 3D point in the world `P = [X, Y, Z]^T` to its 2D projection `p = [u, v]^T` on the image plane:

```
u = f * X / Z + cx
v = f * Y / Z + cy
```

Where `f` is the focal length (distance from the pinhole to the image plane), and `(cx, cy)` is the principal point (the intersection of the optical axis with the image plane). This equation tells us that the apparent size of an object in the image is inversely proportional to its distance from the camera. A object that is twice as far away appears half as large.

In homogeneous coordinates, the projection can be written as a matrix multiplication:

```
[u]   [f  0  cx]   [X]
[v] = [0  f  cy] * [Y]
[1]   [0  0  1 ]   [Z]
```

The 3×3 matrix is called the **intrinsic matrix** (or camera matrix) and is denoted `K`. It contains the **intrinsic parameters** of the camera: focal length `f`, principal point `(cx, cy)`, and (for non-square pixels) the pixel aspect ratio. These parameters are fixed for a given camera and lens and do not change when the camera moves.

The **extrinsic parameters** describe the position and orientation of the camera in the world. They are represented by a rotation matrix `R` and a translation vector `t`, which together form the homogeneous transformation `T = [R | t]`. The full projection from a world point `P` to an image point `p` is:

```
p_homogeneous = K * [R | t] * P_homogeneous
```

Or in expanded form:

```
[u]     [f  0  cx]   [r11 r12 r13 t1]   [X]
[v]  =  [0  f  cy] * [r21 r22 r23 t2] * [Y]
[1]     [0  0  1 ]   [r31 r32 r33 t3]   [Z]
                                      [1]
```

This is the fundamental equation of camera geometry. It has 6 extrinsic parameters (3 for rotation, 3 for translation) and 5 intrinsic parameters (f, cx, cy, and two distortion coefficients). To use a camera for robotics, we must first **calibrate** it — estimate the intrinsic parameters and, if necessary, the distortion coefficients.

**Camera calibration** is typically done using a checkerboard pattern. The checkerboard has known dimensions, and its corners are easy to detect in images. By taking images of the checkerboard from different viewpoints, we obtain a set of 3D-2D correspondences. These correspondences are used to solve for the intrinsic parameters using an optimization algorithm (like the Zhang method or a nonlinear least-squares solver).

In MATLAB, camera calibration is done with the Computer Vision Toolbox:

```matlab
% Detect checkerboard corners in a set of images
imageFiles = dir('calibration_images/*.jpg');
images = cell(1, length(imageFiles));
for i = 1:length(imageFiles)
    images{i} = imread(fullfile(imageFiles(i).folder, imageFiles(i).name));
end

% Detect corners
[imagePoints, boardSize] = detectCheckerboardPoints(images);

% Generate world coordinates of the corners
squareSize = 25; % mm
worldPoints = generateCheckerboardPoints(boardSize, squareSize);

% Calibrate the camera
[cameraParams, imagesUsed, estimationErrors] = estimateCameraParameters(...
    imagePoints, worldPoints, 'ImageSize', size(images{1}, [1 2]));

% Display results
display(cameraParams);
```

**Lens distortion** is a deviation from the ideal pinhole model caused by the lens. Real lenses introduce two types of distortion:
- **Radial distortion:** Straight lines appear curved, especially near the edges of the image. This is caused by the lens having a different focal length at different distances from the optical center. It is modeled as: `x_distorted = x * (1 + k1*r² + k2*r⁴ + k3*r⁶)`.
- **Tangential distortion:** The image plane is not perfectly parallel to the lens, causing points to be shifted tangentially. Modeled as: `x_distorted = x + [2*p1*x*y + p2*(r² + 2*x²)]`.

The distortion coefficients `(k1, k2, k3, p1, p2)` are estimated during calibration and used to undistort images:

```matlab
undistortedImage = undistortImage(originalImage, cameraParams);
```

Undistortion is essential for accurate 3D reconstruction, visual odometry, and any application that relies on precise geometric measurements from images.

#### Key concepts
- Pinhole camera model and perspective projection
- Perspective projection equation: `u = f*X/Z + cx`, `v = f*Y/Z + cy`
- Intrinsic matrix K: focal length f, principal point (cx, cy)
- Extrinsic parameters: rotation R and translation t
- Full projection equation: `p = K * [R|t] * P`
- Camera calibration with checkerboard patterns
- Zhang method and nonlinear least-squares calibration
- Radial distortion: k1, k2, k3
- Tangential distortion: p1, p2
- Undistortion and its importance for 3D reconstruction

#### Hands-on activity
If you have a webcam or camera, take 10–15 images of a printed checkerboard pattern from different angles and distances. Use MATLAB's `estimateCameraParameters` function to calibrate the camera. Extract the focal length, principal point, and distortion coefficients. Undistort one of the images and compare it to the original. Measure the distortion by drawing straight lines on the original image (they will appear curved near the edges) and on the undistorted image (they should be straight). If you do not have a camera, use the MATLAB example dataset (`cameraCalibrator` app demo data) and follow the same steps.

#### Assessment idea
Ask: "A camera has focal length f = 500 pixels and principal point (cx, cy) = (320, 240). A 3D point P = [2, 1, 5] meters is projected onto the image. What are the image coordinates (u, v)?" Answer: `u = 500 * 2 / 5 + 320 = 200 + 320 = 520`. `v = 500 * 1 / 5 + 240 = 100 + 240 = 340`. The point projects to `(520, 340)` pixels. Then ask: "Why must camera calibration be performed before using the camera for 3D measurements or robot navigation?" Answer: Because the projection equation requires the intrinsic parameters (focal length, principal point) and distortion coefficients to accurately map 3D points to 2D image points. Without calibration, measurements will be inaccurate, and 3D reconstruction will have systematic errors. Distortion is particularly important because it causes straight lines to appear curved, which affects feature detection and pose estimation.

#### AI generation note
Create a 10-minute animated lesson. Show the pinhole camera as a box with a tiny hole, with light rays from a 3D point converging through the hole to form an inverted image. Show the perspective projection equation with animated substitutions. Show the intrinsic matrix K and extrinsic matrix [R|t] as labeled blocks. Show the full projection as a pipeline: 3D point → world coordinates → camera coordinates → image coordinates. Show the checkerboard calibration process: a person taking photos from different angles, corners being detected, and the calibration parameters being computed. Show radial distortion as a grid being bent outward (barrel distortion) or inward (pincushion distortion). Show the undistortion process as the grid being straightened. Include a live MATLAB coding segment with the calibration code. End with a reflection: "What would happen if you used an uncalibrated camera for robot navigation?"

---

### Chapter 5.2 — Feature Extraction and Matching

#### Learning objectives
- Detect and describe local features in images using SIFT, SURF, and ORB.
- Match features between images using descriptor distance and ratio test.
- Use RANSAC to robustly estimate geometric transformations from feature matches.
- Understand the scale-space representation and the difference of Gaussians (DoG).

#### Detailed lesson content

A camera captures millions of pixels, but most of them are redundant. A white wall contains no useful information for navigation. What matters are the **distinctive points** in the image: corners, edges, textures, and patterns that can be reliably detected and matched across different images. These distinctive points are called **features** or **keypoints**, and the process of finding them is **feature extraction**.

Feature extraction is the foundation of many robotics tasks: visual odometry (estimating motion by tracking features across frames), SLAM (building a map by matching features), object recognition, and loop closure detection. A good feature detector must satisfy several properties:
- **Repeatability:** The same feature should be detected in different images of the same scene, even under changes in viewpoint, lighting, and scale.
- **Distinctiveness:** The feature should have a unique description that allows it to be matched correctly to the corresponding feature in another image.
- **Locality:** The feature should be local (small region) so that it is robust to occlusion and clutter.
- **Quantity:** There should be enough features in the image to provide robust matching.

**SIFT (Scale-Invariant Feature Transform)** is one of the most famous feature detectors. It works in four steps:
1. **Scale-space extrema detection:** The image is convolved with Gaussian filters at multiple scales (standard deviations). The Difference of Gaussians (DoG) is computed by subtracting adjacent Gaussian-filtered images. Local extrema (maxima and minima) in the DoG across scale and space are candidate keypoints.
2. **Keypoint localization:** Candidate keypoints are refined by fitting a 3D quadratic function to the local DoG values. Keypoints with low contrast or on edges are discarded.
3. **Orientation assignment:** A gradient orientation histogram is computed in a neighborhood around each keypoint. The dominant orientation is assigned to the keypoint, making it rotation-invariant.
4. **Descriptor computation:** A 128-dimensional vector is computed by sampling gradient orientations in a 16×16 neighborhood around the keypoint, divided into 4×4 subregions. This descriptor captures the local image appearance in a way that is robust to illumination changes and small geometric deformations.

**SURF (Speeded-Up Robust Features)** is a faster alternative to SIFT that uses Haar wavelets and integral images for efficient computation. It produces a 64-dimensional descriptor and is approximately 3× faster than SIFT while maintaining comparable accuracy.

**ORB (Oriented FAST and Rotated BRIEF)** is an even faster feature detector designed for real-time applications. It uses the FAST corner detector (which compares pixel intensities on a circle around a candidate point) and the BRIEF descriptor (a binary string computed by comparing pixel intensities at pairs of points). ORB is rotation-invariant and approximately two orders of magnitude faster than SIFT, making it ideal for real-time robotics applications like drone navigation and mobile robot SLAM.

```matlab
% Feature detection and matching in MATLAB
img1 = imread('image1.jpg');
img2 = imread('image2.jpg');

% Detect SIFT features
pts1 = detectSIFTFeatures(rgb2gray(img1));
pts2 = detectSIFTFeatures(rgb2gray(img2));

% Extract descriptors
[features1, validPts1] = extractFeatures(rgb2gray(img1), pts1);
[features2, validPts2] = extractFeatures(rgb2gray(img2), pts2);

% Match features
indexPairs = matchFeatures(features1, features2, 'MaxRatio', 0.7);

% Extract matched points
matchedPts1 = validPts1(indexPairs(:,1));
matchedPts2 = validPts2(indexPairs(:,2));

% Display matches
showMatchedFeatures(img1, img2, matchedPts1, matchedPts2);
```

**Feature matching** is the process of finding correspondences between features in two images. The simplest approach is **nearest-neighbor matching:** for each feature in image 1, find the closest feature in image 2 (in descriptor space). However, this can produce many false matches. A better approach is the **ratio test:** compute the distance to the nearest neighbor and the second-nearest neighbor. If the ratio is below a threshold (typically 0.7–0.8), the match is accepted. This rejects ambiguous matches where the two closest features are very similar.

**RANSAC (Random Sample Consensus)** is an algorithm for robustly fitting a model to data that contains outliers. In feature matching, many of the matches are incorrect (outliers) due to repetitive textures, occlusion, or noise. RANSAC works by randomly selecting a minimal set of matches (e.g., 4 matches for a homography, 8 for a fundamental matrix), fitting a geometric model, and counting how many other matches are consistent with that model (inliers). This process is repeated many times, and the model with the most inliers is kept.

```matlab
% Estimate geometric transformation using RANSAC
[tform, inlierPts1, inlierPts2] = estimateGeometricTransform2D(...
    matchedPts1, matchedPts2, 'affine', 'MaxNumTrials', 2000);

% Display inliers only
showMatchedFeatures(img1, img2, inlierPts1, inlierPts2);
```

RANSAC is essential for robotics because real-world feature matching always produces outliers, and a single outlier can catastrophically corrupt a pose estimate if not rejected.

#### Key concepts
- Feature detection: keypoints, corners, edges, textures
- SIFT: scale-space, DoG, keypoint localization, orientation, descriptor
- SURF: Haar wavelets, integral images, speed improvement
- ORB: FAST corners, BRIEF descriptors, binary strings, real-time performance
- Feature matching: nearest neighbor, ratio test, descriptor distance
- RANSAC: random sampling, model fitting, inlier counting, outlier rejection
- Repeatability, distinctiveness, locality, quantity
- Scale-space representation and Gaussian pyramids
- Homography and fundamental matrix estimation

#### Hands-on activity
Write a MATLAB script that detects and matches ORB features between two images of the same scene taken from different viewpoints. Use the ratio test with threshold 0.8. Then use RANSAC to estimate the affine transformation between the images. Display the matched features before and after RANSAC. Count the number of matches before RANSAC (total matches) and after RANSAC (inliers). Compute the inlier ratio (inliers / total matches) and discuss how it depends on the viewpoint difference between the images. Try with three pairs of images: (1) small viewpoint change (5° rotation), (2) medium change (30° rotation), (3) large change (60° rotation). Plot the inlier ratio vs. viewpoint change.

#### Assessment idea
Ask: "Why is the ratio test (comparing the distance to the nearest neighbor and the second-nearest neighbor) better than simple nearest-neighbor matching for feature correspondence?" Answer: The ratio test rejects ambiguous matches. If the two nearest neighbors have very similar distances, the feature is not distinctive enough to be matched reliably. By requiring the nearest neighbor to be significantly closer than the second-nearest, the ratio test ensures that the match is unambiguous and reduces the number of false correspondences. Then ask: "How does RANSAC handle outliers in feature matching?" Answer: RANSAC randomly selects a minimal subset of matches, fits a geometric model (e.g., homography or affine transformation), and counts how many other matches are consistent with that model (inliers). It repeats this process many times and keeps the model with the most inliers. Matches that are not consistent with the best model are rejected as outliers. This makes the final pose estimate robust to a large percentage of incorrect matches.

#### AI generation note
Create a 10-minute animated lesson. Show the SIFT detector as a pyramid of Gaussian-blurred images, with the DoG highlighting blobs and corners at different scales. Show the ORB detector as a FAST circle test, with pixels being compared. Show feature descriptors as small patches with arrows indicating gradient directions. Show matching as lines connecting corresponding features in two images. Show the ratio test as two distance bars: one short (nearest neighbor) and one long (second-nearest). Show RANSAC as a random selection of 4 matches, a model being fitted, and consistent matches lighting up green while inconsistent ones turn red. Show the final result with only green (inlier) matches. Include a live MATLAB coding segment with the ORB detection and RANSAC. End with a reflection: "What would happen if you tried to estimate a robot's motion using feature matching without RANSAC?"

---

### Chapter 5.3 — Pose Estimation and Structure from Motion

#### Learning objectives
- Estimate the relative pose (rotation and translation) between two camera views using the essential matrix and epipolar geometry.
- Triangulate 3D points from matched 2D features in two images.
- Understand bundle adjustment as a nonlinear optimization for refining camera poses and 3D structure.
- Implement a simple Structure from Motion (SfM) pipeline in MATLAB.

#### Detailed lesson content

Once we have matched features between two images, the next question is: what is the geometric relationship between the two camera views? This is the **pose estimation** problem: given two images of the same scene, find the rotation `R` and translation `t` between the two camera positions. Pose estimation is the foundation of visual odometry (tracking the camera's motion over time) and SLAM (simultaneously building a map and tracking the camera's position within it).

The geometric relationship between two views is described by **epipolar geometry**. When two cameras view the same 3D point, the three points (the 3D point and the two camera centers) form a plane called the **epipolar plane**. The intersection of this plane with each image plane is a line called the **epipolar line**. All points on one epipolar line correspond to points on the other epipolar line. This constraint is powerful because it reduces the search for correspondences from a 2D region to a 1D line.

The **essential matrix** `E` encodes the epipolar geometry for calibrated cameras (cameras with known intrinsic parameters). It relates the coordinates of a point in one image to the epipolar line in the other image:

```
p2^T * E * p1 = 0
```

Where `p1` and `p2` are the normalized image coordinates (coordinates divided by the focal length). The essential matrix has the form `E = [t]× * R`, where `[t]×` is the skew-symmetric matrix of the translation vector `t` and `R` is the rotation matrix. The essential matrix has 5 degrees of freedom (3 for rotation, 3 for translation, minus 1 for scale ambiguity — translation can only be recovered up to scale).

The **fundamental matrix** `F` is the generalization of the essential matrix for uncalibrated cameras. It has 7 degrees of freedom and is computed from pixel coordinates rather than normalized coordinates. The fundamental matrix is related to the essential matrix by `F = K'^(-T) * E * K^(-1)`, where `K` and `K'` are the intrinsic matrices of the two cameras.

The **8-point algorithm** is a linear method for estimating the essential or fundamental matrix from at least 8 point correspondences. Given 8 matched points, we set up a linear system `A * f = 0`, where `f` is the vectorized matrix. The solution is the singular vector corresponding to the smallest singular value of `A`. The estimated matrix is then refined by enforcing the rank-2 constraint (for the fundamental matrix) or the decomposition property (for the essential matrix).

Once we have the essential matrix, we can decompose it into rotation `R` and translation `t` (up to scale). There are four possible decompositions, and the correct one is determined by checking which one places the 3D points in front of both cameras (positive depth).

```matlab
% Estimate essential matrix and decompose into R and t
E = estimateEssentialMatrix(matchedPts1, matchedPts2, cameraParams);
[R, t] = relativeCameraPose(E, cameraParams, matchedPts1, matchedPts2);
```

**Triangulation** is the process of computing the 3D position of a point from its projections in two images. Given the camera poses `(R1, t1)` and `(R2, t2)` and the image points `p1` and `p2`, the 3D point `P` is the intersection of the two rays from the camera centers through the image points. In practice, due to noise, the rays do not intersect exactly, so we find the point that minimizes the distance to both rays (using least squares or the midpoint method).

```matlab
% Triangulate 3D points from matched features
cameraPose1 = rigidtform3d(eye(3), [0 0 0]);
cameraPose2 = rigidtform3d(R, t);

points3D = triangulate(matchedPts1, matchedPts2, ...
    cameraProjection(cameraParams, cameraPose1), ...
    cameraProjection(cameraParams, cameraPose2));
```

**Structure from Motion (SfM)** is the process of reconstructing a 3D scene and the camera trajectory from a sequence of images. A simple SfM pipeline works as follows:
1. Extract and match features between consecutive image pairs.
2. Estimate the essential matrix and decompose into `R` and `t`.
3. Triangulate 3D points from the matched features.
4. Repeat for the next image pair, using the previous camera pose as a reference.
5. Refine the camera poses and 3D points using **bundle adjustment**.

**Bundle adjustment** is a nonlinear optimization technique that simultaneously refines all camera poses and 3D point positions to minimize the **reprojection error**. The reprojection error is the distance between the observed image points and the projected 3D points. Bundle adjustment minimizes the sum of squared reprojection errors over all cameras and all points:

```
minimize Σ ||p_i - π(K, R_i, t_i, P_j)||²
```

Where `p_i` is the observed image point, `π` is the projection function, and `P_j` is the 3D point. Bundle adjustment is typically solved using the Levenberg-Marquardt algorithm, which is a combination of gradient descent and Gauss-Newton methods. It is the gold standard for refining SfM reconstructions and is used in virtually all modern SLAM systems.

**Scale ambiguity** is a fundamental limitation of SfM from monocular cameras. Because the essential matrix only determines translation up to scale, the absolute scale of the scene cannot be determined from images alone. The reconstructed scene could be a miniature model or a full-scale environment. To recover absolute scale, additional information is needed: known object dimensions, stereo cameras, IMU measurements, or GPS.

#### Key concepts
- Epipolar geometry: epipolar plane, epipolar lines, epipoles
- Essential matrix: `E = [t]× * R`, 5 degrees of freedom
- Fundamental matrix: uncalibrated generalization, 7 degrees of freedom
- 8-point algorithm for estimating E and F
- Decomposition of E into R and t (4 solutions)
- Triangulation: computing 3D points from 2D correspondences
- Structure from Motion (SfM) pipeline
- Bundle adjustment: minimizing reprojection error
- Levenberg-Marquardt algorithm
- Scale ambiguity in monocular SfM

#### Hands-on activity
Write a MATLAB script that implements a simplified two-view Structure from Motion pipeline. Take two images of a textured object (or use the MATLAB `vision.PhotoCamera` example data). Detect and match ORB features between the images. Estimate the essential matrix using the 8-point algorithm with RANSAC. Decompose the essential matrix into `R` and `t`. Triangulate the matched features to obtain 3D points. Plot the 3D points and the two camera positions in a 3D scatter plot. Then implement a simple bundle adjustment by iteratively refining the camera poses and 3D points to minimize the reprojection error. Plot the reprojection error before and after bundle adjustment.

#### Assessment idea
Ask: "The essential matrix E = [t]× * R has 5 degrees of freedom. Why not 6 (3 for R + 3 for t)?" Answer: Because translation can only be recovered up to scale. Multiplying t by any scalar and dividing the 3D points by the same scalar gives the same image projections. Therefore, the magnitude of t is arbitrary, and only its direction is fixed. This removes one degree of freedom, leaving 5. Then ask: "What is the reprojection error, and why does bundle adjustment minimize it?" Answer: The reprojection error is the distance between an observed image point and the projection of the corresponding 3D point onto the image plane. Bundle adjustment minimizes the sum of squared reprojection errors over all cameras and points because doing so produces the maximum likelihood estimate of the camera poses and 3D structure under Gaussian noise assumptions. It is the optimal way to refine an SfM reconstruction.

#### AI generation note
Create a 10-minute animated lesson. Show two cameras viewing a 3D point, with the epipolar plane and epipolar lines highlighted. Show the essential matrix as a transformation that maps a point in one image to a line in the other. Show the 8-point algorithm as a linear system being solved. Show the 4 possible R,t decompositions and the depth test that selects the correct one. Show triangulation as two rays intersecting at a 3D point. Show the SfM pipeline as a flowchart with images → features → matches → E → R,t → 3D points. Show bundle adjustment as an iterative process where camera positions and 3D points gradually shift to reduce the reprojection error (shown as shrinking arrows). Show a 3D point cloud growing as more images are added. Include a live MATLAB coding segment. End with a reflection: "How could you resolve the scale ambiguity in a monocular SfM system?"

---

## Module 6: Estimation and Learning

> **Goal:** Master probabilistic state estimation techniques that allow robots to know where they are, build maps, and track objects despite sensor noise.

---

### Chapter 6.1 — State Estimation with Kalman Filters

#### Learning objectives
- Derive the Kalman Filter equations for linear Gaussian systems.
- Implement a Kalman Filter in MATLAB for a simple 1D tracking problem.
- Extend the Kalman Filter to nonlinear systems using the Extended Kalman Filter (EKF).
- Apply the EKF to estimate the position and orientation of a mobile robot.

#### Detailed lesson content

A robot that does not know where it is cannot navigate. **State estimation** is the problem of determining the robot's state (position, velocity, orientation, and other relevant variables) from noisy sensor measurements. Because all sensors are imperfect, state estimation is fundamentally a problem of filtering noise and fusing information from multiple sources. The Kalman Filter is the most important algorithm for state estimation in robotics, and it is the foundation of virtually every modern localization and navigation system.

The **Kalman Filter (KF)** is an optimal recursive estimator for linear systems with Gaussian noise. It was invented by Rudolf Kalman in 1960 and has since become the workhorse of estimation in aerospace, robotics, economics, and many other fields. The Kalman Filter operates in two steps that repeat at each time step:

1. **Prediction step:** Use the system model to predict the next state and its uncertainty.
2. **Update step:** Use the measurement to correct the prediction, producing a more accurate estimate.

The system model for a linear discrete-time system is:

```
x_k = A * x_{k-1} + B * u_{k-1} + w_{k-1}
z_k = H * x_k + v_k
```

Where:
- `x_k` is the state vector at time `k`.
- `u_{k-1}` is the control input.
- `z_k` is the measurement.
- `A` is the state transition matrix.
- `B` is the control input matrix.
- `H` is the measurement matrix.
- `w` is the process noise (Gaussian with covariance `Q`).
- `v` is the measurement noise (Gaussian with covariance `R`).

The Kalman Filter equations are:

**Prediction:**
```
x̂_k|k-1 = A * x̂_{k-1|k-1} + B * u_{k-1}
P_k|k-1 = A * P_{k-1|k-1} * A^T + Q
```

**Update:**
```
K_k = P_k|k-1 * H^T * (H * P_k|k-1 * H^T + R)^(-1)
x̂_k|k = x̂_k|k-1 + K_k * (z_k - H * x̂_k|k-1)
P_k|k = (I - K_k * H) * P_k|k-1
```

Where `K_k` is the **Kalman gain**, which determines how much the measurement should be trusted relative to the prediction. If the measurement is very noisy (large `R`), the Kalman gain is small, and the filter relies more on the prediction. If the prediction is very uncertain (large `P`), the Kalman gain is large, and the filter relies more on the measurement.

```matlab
% Kalman Filter for 1D position tracking
% State: [position; velocity]
% Measurement: position from GPS

A = [1, dt; 0, 1];      % State transition
B = [0.5*dt^2; dt];     % Control input
H = [1, 0];             % Measurement matrix
Q = [0.01, 0; 0, 0.001]; % Process noise covariance
R = 0.5;                % Measurement noise covariance

x = [0; 0];             % Initial state estimate
P = eye(2);             % Initial covariance

for k = 1:N
    % Prediction
    x = A * x + B * u(k);
    P = A * P * A' + Q;
    
    % Update
    K = P * H' / (H * P * H' + R);
    x = x + K * (z(k) - H * x);
    P = (eye(2) - K * H) * P;
    
    % Store estimate
    x_est(k) = x(1);
end
```

**The Extended Kalman Filter (EKF)** extends the Kalman Filter to nonlinear systems by linearizing the system dynamics and measurement functions around the current state estimate. For a nonlinear system:

```
x_k = f(x_{k-1}, u_{k-1}) + w_{k-1}
z_k = h(x_k) + v_k
```

The EKF uses the Jacobian matrices of `f` and `h`:

```
F = ∂f/∂x (evaluated at x̂_{k-1|k-1})
H = ∂h/∂x (evaluated at x̂_k|k-1)
```

And then applies the standard Kalman Filter equations with these linearized matrices.

```matlab
% EKF for mobile robot position estimation
% State: [x; y; theta]
% Measurement: GPS (x, y) and compass (theta)

for k = 1:N
    % Prediction (nonlinear)
    x_pred = x + v*dt*cos(theta);
    y_pred = y + v*dt*sin(theta);
    theta_pred = theta + omega*dt;
    
    % Jacobian of prediction
    F = [1, 0, -v*dt*sin(theta);
         0, 1,  v*dt*cos(theta);
         0, 0,  1];
    
    % Predict covariance
    P = F * P * F' + Q;
    
    % Measurement prediction
    z_pred = [x_pred; y_pred; theta_pred];
    H = eye(3);
    
    % Update
    K = P * H' / (H * P * H' + R);
    x = [x_pred; y_pred; theta_pred] + K * (z_k - z_pred);
    P = (eye(3) - K * H) * P;
end
```

The EKF is widely used in robotics for localization, sensor fusion, and object tracking. However, it has limitations: it assumes Gaussian noise and unimodal distributions, and it can fail if the nonlinearity is severe (the linearization is a poor approximation). For these cases, more advanced filters like the Unscented Kalman Filter (UKF) or particle filters are used.

**Key properties of the Kalman Filter:**
- **Optimality:** For linear Gaussian systems, the Kalman Filter is the minimum mean-square error estimator.
- **Recursive:** It only needs the previous estimate and the current measurement. It does not need to store all past measurements.
- **Computationally efficient:** Each iteration involves only matrix multiplications and a matrix inversion of size equal to the measurement dimension (typically small).
- **Uncertainty quantification:** The covariance matrix `P` provides a measure of the estimation uncertainty.

#### Key concepts
- State estimation and filtering
- Kalman Filter: prediction and update steps
- State transition matrix A, measurement matrix H
- Process noise covariance Q, measurement noise covariance R
- Kalman gain K and its interpretation
- Extended Kalman Filter (EKF) for nonlinear systems
- Jacobian matrices F and H for linearization
- Optimality, recursion, efficiency, and uncertainty quantification
- Limitations: Gaussian assumption, unimodal distribution, linearization errors

#### Hands-on activity
Write a MATLAB script that implements an EKF for a mobile robot tracking its position using GPS and wheel odometry. The robot moves in a 2D plane with state `[x; y; theta]`. The control input is `[v; omega]` (forward velocity and angular velocity). The GPS provides noisy measurements of `(x, y)`. The wheel odometry provides noisy measurements of `(v, omega)`. Run the simulation for 100 time steps with `dt = 0.1 s`. The robot follows a circular trajectory with `v = 1 m/s` and `omega = 0.2 rad/s`. Add Gaussian noise to the GPS (`σ = 0.5 m`) and odometry (`σ_v = 0.1 m/s`, `σ_omega = 0.05 rad/s`). Plot the true trajectory, the GPS measurements, and the EKF estimate. Compute the root-mean-square error (RMSE) of the GPS measurements and the EKF estimate relative to the true trajectory. Observe how the EKF produces a smoother, more accurate estimate than either sensor alone.

#### Assessment idea
Ask: "A Kalman Filter has process noise covariance Q and measurement noise covariance R. If Q is very large and R is very small, will the filter trust the prediction or the measurement more?" Answer: The filter will trust the measurement more. A large Q means the prediction is very uncertain (the system model is noisy or inaccurate). A small R means the measurement is very precise. The Kalman gain will be close to 1, so the update step will heavily weight the measurement and largely ignore the prediction. Then ask: "Why does the EKF linearize the nonlinear system dynamics around the current state estimate?" Answer: Because the standard Kalman Filter equations only work for linear systems. By linearizing the nonlinear functions `f` and `h` using their Jacobian matrices, the EKF approximates the nonlinear system as a linear one locally, allowing the standard Kalman Filter equations to be applied. This approximation works well when the system is approximately linear over the range of uncertainty, but it can fail for highly nonlinear systems or large uncertainties.

#### AI generation note
Create a 10-minute animated lesson. Show the Kalman Filter as a two-step dance: prediction (step forward) and update (step back based on measurement). Show the prediction as a Gaussian distribution shifting and spreading. Show the measurement as a second Gaussian distribution. Show the update as the two distributions being multiplied, producing a narrower, more accurate Gaussian. Show the Kalman gain as a slider between "trust prediction" and "trust measurement." Show the EKF as a nonlinear curve being approximated by a tangent line at the current estimate. Show the mobile robot simulation with true trajectory (green), GPS measurements (red dots), and EKF estimate (blue line). Include a live MATLAB coding segment. End with a reflection: "What would happen to the Kalman Filter if the sensor suddenly started producing completely wrong measurements?"

---

### Chapter 6.2 — Occupancy Grid Mapping and SLAM

#### Learning objectives
- Build an occupancy grid map from range sensor measurements using the inverse sensor model.
- Understand the SLAM problem: simultaneous localization and mapping.
- Explain the difference between online SLAM and full SLAM.
- Implement a simple occupancy grid mapping algorithm in MATLAB.

#### Detailed lesson content

A robot that knows where it is but has no map is lost in the dark. A robot that has a map but does not know where it is on the map is equally lost. **SLAM (Simultaneous Localization and Mapping)** is the problem of building a map of an unknown environment while simultaneously keeping track of the robot's location within that map. SLAM is one of the most important and challenging problems in robotics, and it is the enabling technology for autonomous navigation in unknown environments.

Before tackling SLAM, we first understand **mapping** — the problem of building a map given known robot poses. The most common map representation in robotics is the **occupancy grid map**. An occupancy grid divides the environment into a grid of cells, and each cell stores the probability that it is occupied by an obstacle. A cell with probability 0.9 is almost certainly occupied. A cell with probability 0.1 is almost certainly free. A cell with probability 0.5 is unknown.

The occupancy grid is updated using a **Bayesian filtering** approach. When the robot receives a sensor measurement (e.g., from a LiDAR or sonar), we update the occupancy probability of each cell using the **inverse sensor model**. The inverse sensor model tells us the probability that a cell is occupied given the sensor measurement and the robot's pose.

For a range sensor like LiDAR, the inverse sensor model works as follows:
- Cells along the ray up to the measured distance are likely free (the sensor would have detected an obstacle if one were there).
- The cell at the measured distance is likely occupied (the sensor detected something there).
- Cells beyond the measured distance are unknown (the sensor did not see them).

The update is done using the log-odds representation to avoid numerical underflow:

```
l_t = l_{t-1} + inverse_sensor_model - l_0
```

Where `l_t` is the log-odds of occupancy at time `t`, and `l_0` is the prior log-odds (typically 0, corresponding to probability 0.5).

```matlab
function grid = occupancy_grid_mapping(grid, pose, range_reading, angles, cell_size)
    % pose: [x, y, theta]
    % range_reading: distances from LiDAR
    % angles: angles of each LiDAR beam
    
    for i = 1:length(range_reading)
        % End point of the ray
        x_end = pose(1) + range_reading(i) * cos(pose(3) + angles(i));
        y_end = pose(2) + range_reading(i) * sin(pose(3) + angles(i));
        
        % Ray tracing: mark cells along the ray as free
        [x_cells, y_cells] = bresenham_line(pose(1), pose(2), x_end, y_end);
        for j = 1:length(x_cells)-1
            grid(y_cells(j), x_cells(j)) = grid(y_cells(j), x_cells(j)) - 0.1;
        end
        
        % Mark the end cell as occupied
        grid(y_cells(end), x_cells(end)) = grid(y_cells(end), x_cells(end)) + 0.4;
    end
end
```

**SLAM** combines mapping with localization. The challenge is that the robot's pose is unknown, so we cannot simply map as described above. The error in the robot's pose estimate (from odometry) causes the map to become inconsistent. Small errors accumulate over time, and the map becomes distorted.

There are two main formulations of SLAM:
- **Online SLAM:** Estimate the current robot pose and the map, given all measurements up to the current time. This is what a robot needs to navigate in real-time.
- **Full SLAM:** Estimate the entire robot trajectory and the map, given all measurements. This is used for offline map refinement and loop closure.

The SLAM problem can be formulated as a probabilistic inference problem:

```
P(x_{0:t}, m | z_{1:t}, u_{1:t})
```

Where `x_{0:t}` is the robot trajectory, `m` is the map, `z_{1:t}` are the measurements, and `u_{1:t}` are the control inputs. This is a high-dimensional joint distribution, and computing it exactly is intractable. SLAM algorithms approximate this distribution using various techniques:

- **EKF-SLAM:** Uses the Extended Kalman Filter to estimate the joint state of the robot pose and landmark positions. Scales poorly to large environments (the covariance matrix grows with the number of landmarks).
- **FastSLAM:** Uses particle filters to represent the pose distribution and EKFs for each landmark. More scalable than EKF-SLAM.
- **Graph-based SLAM:** Represents the SLAM problem as a graph where nodes are robot poses and landmarks, and edges are constraints from measurements. The graph is optimized using nonlinear least-squares (e.g., the Levenberg-Marquardt algorithm). This is the dominant approach in modern SLAM (e.g., Google Cartographer, g2o, GTSAM).
- **Visual SLAM:** Uses cameras as the primary sensor. Examples include ORB-SLAM, LSD-SLAM, and SVO. These systems extract features from images, estimate camera motion, and build sparse or dense maps.

**Loop closure** is a critical concept in SLAM. When the robot returns to a previously visited location, it should recognize that it has been there before and correct the accumulated drift. Loop closure detection is typically done by comparing the current sensor data (image or LiDAR scan) to all previous data and finding a match. Once a loop is detected, the graph optimization algorithm adjusts the entire trajectory to be consistent with the loop closure constraint.

```matlab
% Simple loop closure detection using image similarity
% Compare current image descriptor to all previous descriptors
similarities = cosine_similarity(current_descriptor, all_descriptors);
[best_match, best_idx] = max(similarities);
if best_match > threshold
    disp('Loop closure detected!');
    % Add loop closure constraint to graph
    add_loop_closure_edge(graph, current_pose_idx, best_idx);
end
```

#### Key concepts
- Occupancy grid map: cell-based probability representation
- Inverse sensor model: updating cell probabilities from range measurements
- Log-odds representation for numerical stability
- Ray tracing and Bresenham's line algorithm
- SLAM problem: simultaneous localization and mapping
- Online SLAM vs. full SLAM
- EKF-SLAM, FastSLAM, graph-based SLAM, visual SLAM
- Graph optimization and nonlinear least-squares
- Loop closure detection and drift correction
- Modern SLAM systems: ORB-SLAM, Cartographer, g2o, GTSAM

#### Hands-on activity
Write a MATLAB script that implements a simple occupancy grid mapping algorithm for a 2D mobile robot. Create a 100×100 grid representing a 10m × 10m environment. Define a rectangular obstacle in the center. Simulate the robot moving around the perimeter of the environment with a simulated LiDAR sensor (180° field of view, 1° resolution). For each pose, compute the range readings using ray casting against the obstacle. Update the occupancy grid using the inverse sensor model with log-odds. Visualize the grid after each step using `imagesc` with a color map where white = free, black = occupied, and gray = unknown. After the robot completes one full loop, show the final map and compare it to the ground truth obstacle.

#### Assessment idea
Ask: "Why is SLAM more difficult than mapping with known poses?" Answer: In mapping with known poses, the sensor measurements can be directly projected into the world frame using the known robot position. In SLAM, the robot's pose is unknown and must be estimated from the same sensors used for mapping. Errors in pose estimation cause the map to become distorted, and map errors cause pose estimation to fail. The two problems are coupled, making SLAM fundamentally harder. Then ask: "What is loop closure, and why is it important for SLAM?" Answer: Loop closure is the detection of a previously visited location. It is important because it allows the SLAM algorithm to correct accumulated drift. Without loop closure, the robot's pose estimate drifts over time, and the map becomes globally inconsistent. Loop closure provides a constraint that forces the trajectory to be consistent with the map, dramatically improving accuracy.

#### AI generation note
Create a 10-minute animated lesson. Show the occupancy grid as a 2D array being updated cell by cell. Show a LiDAR scan as rays emanating from the robot, with free cells along the ray and an occupied cell at the endpoint. Show the log-odds update as a bar rising for occupied cells and falling for free cells. Show SLAM as a robot building a map while navigating, with the pose estimate drifting over time. Show loop closure as the robot recognizing a room it has seen before, and the map snapping back into alignment. Show EKF-SLAM as a covariance ellipse growing over time. Show graph-based SLAM as a network of poses and landmarks being tightened by optimization. Show modern SLAM systems like ORB-SLAM and Cartographer as commercial products. Include a live MATLAB coding segment with the occupancy grid. End with a reflection: "What would be the biggest challenge for a SLAM system in a featureless corridor?"

---

### Chapter 6.3 — Particle Filter Localization

#### Learning objectives
- Explain the Monte Carlo method and its use in robotics for approximate inference.
- Implement a particle filter for robot localization in a known map.
- Understand the importance of resampling and the problems of particle degeneracy.
- Compare particle filters with Kalman filters for different localization scenarios.

#### Detailed lesson content

The Kalman Filter and EKF work well for systems with unimodal Gaussian distributions, but many robotics problems have multimodal distributions or non-Gaussian noise. For example, when a robot first starts up, it has no idea where it is — its position could be anywhere in the map. This is a **uniform distribution**, not a Gaussian. When a robot enters a room that looks identical to another room, it may have two equally likely hypotheses for its position. This is a **bimodal distribution**. For these problems, the Kalman Filter fails because it can only represent a single Gaussian mode. The **particle filter** (also known as the Monte Carlo Localization or MCL) is the solution.

A particle filter represents the probability distribution over the robot's state using a set of **particles** — random samples drawn from the distribution. Each particle is a hypothesis: a specific guess at the robot's state. The collection of particles approximates the full probability distribution. Where particles are dense, the probability is high. Where particles are sparse, the probability is low.

The particle filter algorithm operates in three steps:

1. **Prediction:** Each particle is propagated forward using the robot's motion model (e.g., odometry). The new position of each particle is computed by adding the robot's displacement plus random noise:

```matlab
for i = 1:num_particles
    particles(i).x = particles(i).x + delta_x + noise_x;
    particles(i).y = particles(i).y + delta_y + noise_y;
    particles(i).theta = particles(i).theta + delta_theta + noise_theta;
end
```

2. **Update:** Each particle is weighted by how well it explains the sensor measurement. Particles that predict sensor readings similar to the actual measurement receive high weights. Particles that predict very different readings receive low weights. For a range sensor, the weight is typically computed as the likelihood of the observed ranges given the particle's pose:

```matlab
for i = 1:num_particles
    expected_ranges = ray_cast(particles(i), map);
    weight = 1;
    for j = 1:num_beams
        weight = weight * gaussian_likelihood(z(j), expected_ranges(j), sigma);
    end
    particles(i).weight = weight;
end
```

3. **Resampling:** Particles are drawn with replacement from the current set, with probability proportional to their weights. High-weight particles are duplicated. Low-weight particles are discarded. After resampling, all particles have equal weight. This step concentrates the particles in the high-probability regions of the state space.

```matlab
% Resampling (systematic resampling)
weights = [particles.weight];
weights = weights / sum(weights);
cumulative = cumsum(weights);

new_particles = [];
step = 1 / num_particles;
start = rand() * step;

for i = 1:num_particles
    idx = find(cumulative >= start + (i-1)*step, 1);
    new_particles(i) = particles(idx);
    new_particles(i).weight = 1 / num_particles;
end
particles = new_particles;
```

**Particle degeneracy** is the main problem with particle filters. Over time, most particles end up with negligible weight, and only a few particles dominate. This means the filter is effectively using only a few samples to represent the distribution, which leads to poor approximation. The resampling step mitigates this, but resampling too frequently causes another problem: **particle impoverishment**. When high-weight particles are duplicated many times, the particle set loses diversity, and the filter may fail to track the true state if it deviates from the dominant hypothesis.

Strategies to combat degeneracy and impoverishment:
- **Adaptive resampling:** Only resample when the effective number of particles (a measure of weight concentration) falls below a threshold.
- **Rao-Blackwellized particle filters:** Use Kalman filters for the linear part of the state and particles for the nonlinear part. This reduces the dimensionality of the particle space.
- **Regularization:** Add small random perturbations to particles after resampling to maintain diversity.

**Comparison: Particle Filter vs. Kalman Filter**
- **Kalman Filter:** Works for linear Gaussian systems. Unimodal (single hypothesis). Very efficient. Cannot handle multimodal distributions or non-Gaussian noise.
- **Particle Filter:** Works for any distribution (nonlinear, non-Gaussian, multimodal). Can represent multiple hypotheses. Computationally expensive (number of particles scales with state dimension). Can suffer from particle degeneracy.
- **Best practice:** Use Kalman filters for well-localized robots with Gaussian noise (e.g., GPS + IMU fusion). Use particle filters for global localization (robot does not know its initial position) or for non-Gaussian sensor models (e.g., sonar with multipath).

**Monte Carlo Localization (MCL)** is the application of particle filters to robot localization in a known map. MCL is the standard algorithm for localization in mobile robotics and is used in systems like the iRobot Roomba and warehouse automation robots. When the robot starts, particles are uniformly distributed across the map. As the robot moves and senses, the particles converge to the true position. If the robot is kidnapped (moved to a new location without being told), the particle filter can recover by injecting random particles across the map (a technique called **random particle injection** or **KLD-sampling**).

```matlab
% Monte Carlo Localization in MATLAB
function particles = mcl_localize(particles, map, odometry, measurement, num_particles)
    % Prediction
    particles = motion_update(particles, odometry);
    
    % Update
    particles = sensor_update(particles, map, measurement);
    
    % Resampling
    particles = resample(particles);
end
```

#### Key concepts
- Particle filter: non-parametric representation of probability distribution
- Particles as state hypotheses
- Prediction step: motion model with noise
- Update step: sensor likelihood weighting
- Resampling: proportional to weights, systematic resampling
- Particle degeneracy and impoverishment
- Effective number of particles and adaptive resampling
- Rao-Blackwellized particle filters
- Monte Carlo Localization (MCL) in known maps
- Random particle injection for kidnapped robot recovery
- Comparison: particle filter vs. Kalman filter

#### Hands-on activity
Write a MATLAB script that implements a particle filter for a 2D mobile robot localizing in a known map. Create a 20×20 grid map with a few rectangular obstacles. Define the robot's true trajectory as a circle around the center of the map. Simulate noisy odometry (`σ = 0.1 m` per step) and noisy range sensor measurements (`σ = 0.2 m`). Initialize 1000 particles uniformly across the free space. Run the particle filter for 100 steps. At each step, visualize the particles as blue dots, the true position as a red dot, and the estimated position (mean of particles) as a green dot. Observe how the particles converge from a uniform distribution to a tight cluster around the true position. Then simulate a "kidnapping" at step 50: move the true robot to a new random location. Observe whether the filter recovers, and experiment with adding random particle injection to improve recovery.

#### Assessment idea
Ask: "A robot is lost in a building with two identical corridors. Its sensor readings are equally consistent with both corridors. Can a Kalman Filter represent this situation? Can a particle filter?" Answer: A Kalman Filter cannot represent this situation because it is a unimodal estimator — it can only represent a single Gaussian hypothesis. It would produce an estimate halfway between the two corridors, which is wrong. A particle filter can represent this situation because it maintains a set of particles. Some particles will cluster in one corridor, and others will cluster in the other corridor, accurately representing the bimodal distribution. Then ask: "What is particle impoverishment, and how does it affect the particle filter's performance?" Answer: Particle impoverishment occurs when resampling causes the particle set to lose diversity, with many particles being duplicates of the same few high-weight particles. This reduces the filter's ability to track the true state if it deviates from the dominant hypothesis. It can be mitigated by adaptive resampling, regularization, or using a larger number of particles.

#### AI generation note
Create a 10-minute animated lesson. Show the probability distribution as a landscape, and the particle filter as a set of dots sampling that landscape. Show the prediction step as dots moving according to the motion model. Show the update step as dots growing larger (high weight) or shrinking (low weight). Show resampling as the large dots being duplicated and the small dots disappearing. Show a Kalman Filter as a single Gaussian ellipse vs. a particle filter as many dots. Show MCL as a robot navigating a map with particles converging to its location. Show kidnapping as the robot teleporting and the particles scattering, then recovering. Show adaptive resampling as a threshold being crossed. Include a live MATLAB coding segment with the particle filter simulation. End with a reflection: "When would you prefer a particle filter over an EKF for robot localization?"

---

## Module 7: Capstone Project and Final Integration

> **Goal:** Apply all learned skills to design, build, and test a complete robotic system in simulation or hardware.

---

### Chapter 7.1 — Track A: Mobile Inverted Pendulum Simulation

#### Learning objectives
- Model the dynamics of a mobile inverted pendulum (MIP) as a two-wheeled balancing robot.
- Design a PD controller to balance the pendulum and control the robot's position.
- Implement an Extended Kalman Filter to estimate the MIP's state from noisy sensors.
- Simulate the complete MIP system in MATLAB and evaluate its stability and performance.

#### Detailed lesson content

The Mobile Inverted Pendulum (MIP) is a classic control problem in robotics: a two-wheeled robot that must balance an inverted pendulum while moving around. This is the same principle used in the Segway, the Toyota i-REAL, and many educational robots. The MIP is an excellent capstone project because it combines all the major themes of this specialization: dynamics modeling, control theory, state estimation, and simulation.

The MIP consists of a chassis with two wheels, a motor for each wheel, and an IMU (accelerometer and gyroscope) mounted on the chassis. The state of the MIP includes:
- The position and velocity of the wheels `(x, ẋ)`.
- The angle and angular velocity of the pendulum `(θ, θ̇)`.

The dynamics of the MIP are derived from the Lagrangian equations of motion. The result is a set of coupled nonlinear differential equations that relate the motor torques to the accelerations of the wheels and the pendulum. For a simplified 2D model (motion in the x-z plane), the equations are:

```
(M + m) * ẍ + m * L * θ̈ * cos(θ) - m * L * θ̇² * sin(θ) = F
m * L * ẍ * cos(θ) + (m * L² + I) * θ̈ - m * g * L * sin(θ) = -F * L * cos(θ)
```

Where:
- `M` is the mass of the wheels and base.
- `m` is the mass of the pendulum (chassis).
- `L` is the distance from the wheel axis to the center of mass of the pendulum.
- `I` is the moment of inertia of the pendulum.
- `F` is the force applied by the wheels (proportional to motor torque).
- `g` is gravity.

These equations are nonlinear due to the `sin(θ)` and `cos(θ)` terms and the `θ̇²` term. To design a controller, we linearize the system around the upright equilibrium (`θ = 0`, `θ̇ = 0`):

```
(M + m) * ẍ + m * L * θ̈ = F
m * L * ẍ + (m * L² + I) * θ̈ - m * g * L * θ = -F * L
```

This linearized system can be written in state-space form `ẋ = A*x + B*u`, where `x = [x; ẋ; θ; θ̇]` and `u = F`. The state-space matrices `A` and `B` can be used to design a state feedback controller using pole placement or LQR (Linear Quadratic Regulator).

For this capstone, we use a **PD controller** with two control loops:
1. **Inner loop (balance control):** A PD controller that applies torque to keep the pendulum upright. The control law is: `τ_balance = Kp_theta * (0 - θ) + Kd_theta * (0 - θ̇)`. This is like balancing a broomstick on your hand: if it leans left, you move your hand left to catch it.
2. **Outer loop (position control):** A PD controller that drives the robot to a desired position. The control law is: `x_des = Kp_x * (x_target - x) + Kd_x * (0 - ẋ)`. This desired position is converted to a desired tilt angle: `θ_des = x_des / L` (a small forward tilt makes the robot accelerate forward).

The total control input is:
```
F = Kp_theta * (θ_des - θ) + Kd_theta * (0 - θ̇)
```

**State estimation with EKF:** The MIP's sensors (IMU) provide noisy measurements of the pendulum angle and angular velocity. We use an EKF to fuse the IMU measurements with the wheel encoder odometry to obtain a clean estimate of the full state.

```matlab
% MIP state: [x; x_dot; theta; theta_dot]
% Measurement: [theta_imu; theta_dot_imu; x_dot_encoder]

% EKF prediction using the linearized dynamics
x_pred = A * x + B * F;
P_pred = A * P * A' + Q;

% EKF update
H = [0, 0, 1, 0;      % theta measurement
     0, 0, 0, 1;      % theta_dot measurement
     0, 1, 0, 0];     % x_dot measurement
K = P_pred * H' / (H * P_pred * H' + R);
x = x_pred + K * (z - H * x_pred);
P = (eye(4) - K * H) * P_pred;
```

**Simulation in MATLAB:**
```matlab
% MIP parameters
M = 0.5;    % Wheel mass (kg)
m = 1.0;    % Chassis mass (kg)
L = 0.3;    % Pendulum length (m)
I = 0.1;    % Moment of inertia (kg*m^2)
g = 9.81;

% Controller gains
Kp_theta = 50;
Kd_theta = 10;
Kp_x = 2;
Kd_x = 1;

% Simulate
tspan = [0 10];
x0 = [0; 0; 0.1; 0];  % Initial state: slightly tilted
[t, x] = ode45(@(t,x) mip_dynamics(t, x, Kp_theta, Kd_theta, Kp_x, Kd_x, M, m, L, I, g), tspan, x0);

% Plot
figure;
subplot(2,1,1);
plot(t, x(:,1));
ylabel('Position (m)');
subplot(2,1,2);
plot(t, x(:,3));
ylabel('Pendulum Angle (rad)');
xlabel('Time (s)');
```

**Safety note:** The MIP is inherently unstable. If the pendulum angle exceeds a certain threshold (typically ±30°), the controller cannot recover, and the robot will fall. In simulation, this is not a problem, but for a physical MIP, a fail-safe mechanism should detect the fall and cut power to the motors to prevent damage.

#### Key concepts
- Mobile Inverted Pendulum (MIP) dynamics
- Lagrangian equations of motion
- Linearization around the upright equilibrium
- State-space representation: `ẋ = A*x + B*u`
- Cascade control: inner balance loop + outer position loop
- PD controller design for balancing and position control
- EKF for state estimation from IMU and wheel encoders
- MATLAB simulation with `ode45`
- Stability limits and fail-safe mechanisms

#### Hands-on activity
Implement the complete MIP simulation in MATLAB. Define the nonlinear dynamics function, the PD controller, and the EKF state estimator. Simulate the MIP starting from an initial tilt of `θ = 0.1 rad` with the goal of maintaining `x = 0` and `θ = 0`. Plot the position, velocity, angle, and angular velocity over 10 seconds. Experiment with different controller gains: (1) too low `Kp_theta` (unstable oscillation), (2) too high `Kp_theta` (high-frequency oscillation), (3) good gains (stable balance). Then add a position command: at `t = 3 s`, set `x_target = 2 m`. Observe the robot tilt forward to accelerate, then tilt backward to decelerate and stop at the target. Add Gaussian noise to the IMU and encoder measurements and observe how the EKF filters the noise. Plot the estimated state alongside the true state.

#### Assessment idea
Ask: "Why does the MIP controller need two nested loops (inner balance + outer position) rather than a single controller?" Answer: The balance loop is a fast, high-gain controller that must respond quickly to keep the pendulum upright (a task with a small time constant). The position loop is a slower, lower-gain controller that moves the robot to the desired location (a task with a larger time constant). Separating them into nested loops ensures that the fast balance dynamics are controlled independently of the slow position dynamics. If a single controller tried to do both, it would be difficult to tune because the two tasks have different time scales and stability requirements. Then ask: "What happens if the initial tilt angle is too large (e.g., θ = 1 rad ≈ 57°)?" Answer: The linearized controller will fail because the system is far from the linearization point. The nonlinear dynamics are significantly different, and the controller may not produce enough torque to recover. The MIP will fall. This demonstrates the importance of the region of stability for linear controllers.

#### AI generation note
Create a 10-minute animated lesson. Show the MIP as a two-wheeled robot with a pendulum. Show the balance control as a hand catching a falling broomstick. Show the position control as a person leaning forward to walk. Show the nested control loops as two concentric circles: the inner circle (fast) controlling angle, the outer circle (slow) controlling position. Show the EKF as a filter smoothing the noisy IMU signal. Show the MATLAB simulation with four graphs (position, velocity, angle, angular velocity) updating in real-time. Show the robot responding to a position command by tilting forward and backward. Show a failure case where the tilt is too large and the robot falls. Include a live MATLAB coding segment. End with a reflection: "What real-world robots use the same balancing principle as the MIP?"

---

### Chapter 7.2 — Track B: Building and Programming a Physical Rover

#### Learning objectives
- Assemble a physical rover using a Raspberry Pi, motors, motor driver, and sensors.
- Program the Raspberry Pi to read sensors and control motors using Python.
- Implement a simple autonomous navigation behavior: obstacle avoidance using IR or ultrasonic sensors.
- Log sensor data and motor commands for analysis and debugging.

#### Detailed lesson content

While simulation is essential for learning and testing, robotics is ultimately about building real machines that interact with the physical world. Track B of the capstone project gives you the opportunity to build a simple autonomous rover using a Raspberry Pi, motors, and sensors. This project integrates the hardware skills from the Arduino and IoT courses with the software and algorithmic skills from this robotics specialization.

**Hardware components:**
- **Raspberry Pi 4** (or Raspberry Pi Zero 2 W for a smaller rover): The brain of the robot. It runs Linux, processes sensor data, and controls the motors.
- **Motor driver (L298N or TB6612FNG):** Controls the speed and direction of two DC motors. The Raspberry Pi's GPIO pins cannot drive motors directly (insufficient current), so a motor driver is required.
- **Two DC motors with wheels:** Provide locomotion. Use motors with encoders if possible (for odometry).
- **Chassis:** A simple robot chassis or a 3D-printed frame.
- **Power supply:** A USB power bank for the Raspberry Pi and a separate battery pack (e.g., 4 AA batteries or a 7.4V LiPo) for the motors.
- **Sensors:**
  - **Ultrasonic range sensor (HC-SR04):** Measures distance to obstacles using sonar. Cheap and simple but has limited range (~2–4 m) and can be confused by soft surfaces.
  - **Infrared (IR) proximity sensor:** Detects obstacles at short range. Good for detecting edges and cliffs.
  - **IMU (MPU6050):** Measures acceleration and angular velocity. Useful for detecting collisions and estimating orientation.
  - **Pi Camera Module:** Provides visual feedback. Can be used for simple line following or object detection (optional, more advanced).
- **Breadboard and jumper wires:** For prototyping the circuit.

**Wiring:**
- Connect the motor driver's input pins to Raspberry Pi GPIO pins (e.g., GPIO 17, 18, 22, 23 for motor direction and PWM).
- Connect the motor driver's output pins to the DC motors.
- Connect the motor driver's power pins to the motor battery pack.
- Connect the HC-SR04 trigger pin to GPIO 24 and echo pin to GPIO 25.
- Connect the MPU6050 to the Raspberry Pi's I2C bus (SDA to GPIO 2, SCL to GPIO 3).
- Connect the Pi Camera Module to the CSI port.

**Python control code:**
```python
import RPi.GPIO as GPIO
import time

# Motor pins
MOTOR_A_FWD = 17
MOTOR_A_BWD = 18
MOTOR_B_FWD = 22
MOTOR_B_BWD = 23

# Ultrasonic sensor pins
TRIG = 24
ECHO = 25

GPIO.setmode(GPIO.BCM)
for pin in [MOTOR_A_FWD, MOTOR_A_BWD, MOTOR_B_FWD, MOTOR_B_BWD]:
    GPIO.setup(pin, GPIO.OUT)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

def set_motor_speed(left_speed, right_speed):
    # left_speed and right_speed: -1 to 1
    GPIO.output(MOTOR_A_FWD, left_speed > 0)
    GPIO.output(MOTOR_A_BWD, left_speed < 0)
    GPIO.output(MOTOR_B_FWD, right_speed > 0)
    GPIO.output(MOTOR_B_BWD, right_speed < 0)

def read_distance():
    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)
    
    start_time = time.time()
    while GPIO.input(ECHO) == 0:
        start_time = time.time()
    
    end_time = time.time()
    while GPIO.input(ECHO) == 1:
        end_time = time.time()
    
    distance = (end_time - start_time) * 34300 / 2
    return distance

# Simple obstacle avoidance
if __name__ == '__main__':
    try:
        while True:
            dist = read_distance()
            print(f"Distance: {dist:.1f} cm")
            
            if dist < 20:  # Obstacle detected within 20 cm
                set_motor_speed(-0.5, 0.5)  # Turn left
                time.sleep(0.5)
            else:
                set_motor_speed(0.6, 0.6)  # Move forward
            
            time.sleep(0.1)
    except KeyboardInterrupt:
        GPIO.cleanup()
```

**Autonomous navigation behavior:**
The simplest autonomous behavior is **obstacle avoidance** (also known as **bug algorithm** or **wall following**). The robot moves forward until it detects an obstacle, then turns away from it. More sophisticated behaviors can be implemented:
- **Line following:** Use an IR sensor array to detect a black line on a white surface and follow it. This is common in robotics competitions.
- **Random walk with obstacle avoidance:** The robot moves in random directions, avoiding obstacles. This explores the environment without a map.
- **Light following:** Use a light sensor to move toward the brightest area. Mimics phototaxis in insects.
- **Wall following:** The robot maintains a constant distance from a wall on its left or right side. This can be used to navigate corridors.

**Data logging:**
Logging sensor data and motor commands is essential for debugging and analysis. Use Python's `logging` module or a simple CSV writer to record data at each time step. Log the timestamp, distance reading, motor speeds, and any other relevant data. After the experiment, plot the data to understand the robot's behavior.

**Safety:**
- Always test the motor driver and motors with a simple script before connecting sensors.
- Use a separate power supply for motors and the Raspberry Pi to prevent voltage drops that reset the Pi.
- Add a power switch or emergency stop button.
- Be careful with LiPo batteries: they can catch fire if shorted or damaged. Use a protection circuit.
- Start testing on a flat, open surface to avoid the robot falling off a table or hitting obstacles.

#### Key concepts
- Raspberry Pi rover hardware: motors, motor driver, sensors, power supply
- GPIO control for motors and sensors
- HC-SR04 ultrasonic distance measurement
- PWM motor speed control
- Simple autonomous behaviors: obstacle avoidance, line following, wall following
- Python `RPi.GPIO` library
- Data logging for debugging and analysis
- Safety with motor drivers, batteries, and power supplies
- I2C communication with MPU6050 IMU
- Pi Camera Module for visual navigation (optional)

#### Hands-on activity
Build the physical rover as described above. Start with the motor control: write a Python script that makes the rover move forward, backward, turn left, and turn right for 2 seconds each. Verify that the motors respond correctly. Then add the HC-SR04 ultrasonic sensor and write a script that prints the distance reading every 0.5 seconds. Verify that the distance is accurate by measuring with a ruler. Finally, implement the obstacle avoidance behavior: the rover moves forward and turns left when it detects an obstacle within 20 cm. Test the behavior by placing obstacles in the robot's path and observing its response. Log the distance readings and motor commands to a CSV file, then plot the data in MATLAB or Python to analyze the robot's behavior.

#### Assessment idea
Ask: "Why does the Raspberry Pi need a separate motor driver (like the L298N) rather than connecting the motors directly to the GPIO pins?" Answer: The Raspberry Pi's GPIO pins can only supply a few milliamps of current, while DC motors can draw hundreds of milliamps or even amps when starting or under load. Connecting a motor directly to a GPIO pin would damage the pin and potentially the entire Raspberry Pi. The motor driver contains power transistors that can handle the high current required by the motors and is controlled by low-current signals from the GPIO pins. Then ask: "The ultrasonic sensor works by sending a sound pulse and measuring the time until the echo returns. What could cause the sensor to give an incorrect reading?" Answer: Several factors: (1) soft or angled surfaces that absorb or deflect the sound pulse rather than reflecting it, (2) multiple reflections causing the sensor to detect the wrong echo, (3) objects outside the sensor's beam width (the sensor has a cone-shaped detection area), (4) temperature affecting the speed of sound (the sensor assumes a fixed speed), (5) rapid motion causing the target to move between pulse transmission and echo reception.

#### AI generation note
Create a 10-minute video with a split-screen view. On the left, show the hardware assembly: Raspberry Pi, motor driver, motors, sensors, and wiring. On the right, show the Python code being written and tested. Show the rover moving forward, detecting an obstacle with the ultrasonic sensor, and turning. Show the distance reading on the console updating in real-time. Show the data log file being opened and the CSV data being plotted. Show a safety warning about LiPo batteries and a power switch being flipped. Show the I2C connection to the MPU6050 and the sensor readings. Include a troubleshooting segment: "If the motors don't move, check the power supply voltage and the motor driver connections." End with a reflection: "What sensor would you add to improve the rover's navigation?"

---

### Chapter 7.3 — Final Examination and Answer Key

### Section A: Multiple Choice (10 questions, 2 points each)

1. What is the primary purpose of a homogeneous transformation matrix in robotics?
   - A) To rotate vectors in 2D space only.
   - B) To combine rotation and translation into a single matrix operation. ✓
   - C) To compute the determinant of a rotation matrix.
   - D) To solve differential equations numerically.

2. In a quadrotor, which control input produces a yaw rotation?
   - A) Increasing the total thrust of all four motors.
   - B) Creating a differential in thrust between clockwise and counterclockwise rotors. ✓
   - C) Tilting the front rotors up and the back rotors down.
   - D) Reducing the thrust of the left rotors and increasing the right rotors.

3. What is the key advantage of A* over Dijkstra's algorithm for pathfinding?
   - A) A* always finds the shortest path; Dijkstra does not.
   - B) A* uses a heuristic to guide the search toward the goal, typically exploring fewer nodes. ✓
   - C) A* requires less memory than Dijkstra.
   - D) A* works for unweighted graphs, while Dijkstra only works for weighted graphs.

4. The Spring-Loaded Inverted Pendulum (SLIP) model is used to study:
   - A) The aerodynamics of fixed-wing aircraft.
   - B) The dynamics of running and hopping in legged animals and robots. ✓
   - C) The steering geometry of wheeled vehicles.
   - D) The control of underwater robots.

5. In camera calibration, what do the intrinsic parameters describe?
   - A) The position and orientation of the camera in the world.
   - B) The focal length, principal point, and distortion coefficients of the camera lens. ✓
   - C) The color balance and exposure settings of the camera.
   - D) The frame rate and resolution of the camera sensor.

6. What is the fundamental limitation of the Kalman Filter that the Extended Kalman Filter (EKF) attempts to address?
   - A) The Kalman Filter is too computationally expensive for real-time applications.
   - B) The Kalman Filter only works for linear systems; the EKF linearizes nonlinear systems. ✓
   - C) The Kalman Filter cannot handle multiple sensors.
   - D) The Kalman Filter requires continuous-time measurements.

7. In a particle filter, what happens during the resampling step?
   - A) Particles are randomly redistributed across the entire state space.
   - B) Particles are drawn with replacement proportional to their weights, concentrating high-probability hypotheses. ✓
   - C) All particles are assigned equal weights regardless of their likelihood.
   - D) The number of particles is increased to improve accuracy.

8. What is the primary cause of drift in robot odometry?
   - A) The robot's wheels are too large.
   - B) Errors accumulate from wheel slip, uneven terrain, and encoder quantization. ✓
   - C) The robot's battery voltage is too low.
   - D) The robot's motors are too powerful.

9. In Structure from Motion (SfM), why can the absolute scale of the scene not be determined from monocular images alone?
   - A) The camera sensor is too small.
   - B) The essential matrix only determines translation up to scale. ✓
   - C) The images are not sharp enough.
   - D) The scene contains no identifiable features.

10. What is the main advantage of a Series Elastic Actuator (SEA) over a rigid motor for legged robots?
    - A) It is cheaper to manufacture.
    - B) It stores elastic energy, provides force sensing, and absorbs shocks. ✓
    - C) It has higher maximum torque.
    - D) It requires less electrical power to operate.

### Section B: Short Answer (5 questions, 4 points each)

1. **Explain the difference between the workspace and the configuration space (C-space) of a robot, and give an example of each for a 6-DOF robot arm.**
   Answer: The workspace is the physical space in which the robot operates — the set of all positions and orientations that the robot's end-effector can reach in the real world. For a 6-DOF robot arm, the workspace is a 3D volume with boundaries determined by the arm's reach. The C-space is the space of all possible robot configurations — the set of all joint angles. For a 6-DOF arm, the C-space is 6-dimensional (one angle per joint). The workspace is where the robot physically moves; the C-space is where the planning algorithm searches for paths. Obstacles in the workspace become C-obstacles in the C-space.

2. **Describe the two main steps of the Kalman Filter and explain what each step does.**
   Answer: (1) Prediction step: Uses the system model (state transition matrix A and control input B) to predict the next state and its uncertainty (covariance P). This step propagates the estimate forward in time based on what we know about the system's dynamics. (2) Update step: Uses the sensor measurement to correct the prediction. The Kalman gain K determines how much to trust the measurement versus the prediction. The state estimate is updated by adding the innovation (measurement minus predicted measurement) weighted by K. The covariance is updated to reflect the reduced uncertainty after incorporating the measurement.

3. **Why is the particle filter better than the EKF for global localization (when the robot does not know its initial position)?**
   Answer: The EKF is a unimodal estimator — it represents the state as a single Gaussian distribution. If the robot does not know its initial position, the distribution is uniform (or multimodal), which cannot be represented by a single Gaussian. The particle filter, by contrast, represents the distribution using a set of particles. It can initialize particles uniformly across the entire map and let them converge to the true position as the robot moves and senses. This allows the particle filter to handle arbitrary distributions, including uniform and multimodal distributions, which the EKF cannot.

4. **What is the purpose of bundle adjustment in Structure from Motion, and what does it optimize?**
   Answer: Bundle adjustment is a nonlinear optimization technique that simultaneously refines all camera poses and 3D point positions in a Structure from Motion reconstruction. It optimizes the reprojection error — the distance between the observed image points and the projected 3D points — by adjusting the camera parameters (rotation, translation, intrinsics) and the 3D point coordinates. It produces the maximum likelihood estimate of the scene geometry under the assumption of Gaussian noise. Bundle adjustment is essential for accurate SfM because it corrects the accumulated errors from pairwise pose estimation and triangulation.

5. **You are designing a robot to navigate the rocky surface of Mars. Would you choose a wheeled or legged design, and why?**
   Answer: A hybrid wheeled design with advanced suspension (like the rocker-bogie system used by NASA's rovers) is the best choice. Pure wheeled robots are efficient but cannot climb over rocks larger than the wheel radius. Pure legged robots are more versatile on rough terrain but are more complex, less reliable, and less energy-efficient. The rocker-bogie suspension allows six wheels to maintain contact with uneven terrain while keeping the body relatively level. It combines the efficiency of wheels with the terrain adaptability of a passive suspension system. For a Mars mission, reliability and energy efficiency are critical, making wheels with good suspension preferable to legs.

### Section C: Code Analysis (3 questions, 5 points each)

1. **Analyze the following MATLAB code for a potential field controller. What does it do, and what is the potential problem?**
   ```matlab
   function F = controller(q, q_goal, obstacles)
       F = -2 * (q - q_goal);
       for i = 1:length(obstacles)
           d = norm(q - obstacles{i});
           F = F + 10 * (q - obstacles{i}) / d^3;
       end
   end
   ```
   Answer: The code computes a potential field force: an attractive force toward the goal and repulsive forces from obstacles. The attractive force is proportional to the distance to the goal. The repulsive force is inversely proportional to the cube of the distance to the obstacle. The potential problem is the **local minimum problem**: if the robot is between two obstacles with the goal on the other side, the attractive and repulsive forces may balance, trapping the robot. Additionally, the repulsive force is not limited to an influence distance, so all obstacles affect the robot regardless of distance, which is computationally inefficient and can cause distant obstacles to unnecessarily distort the path. A better implementation would use a finite influence distance `d0` and an escape strategy for local minima.

2. **The following code is supposed to implement a Kalman Filter prediction step for a 1D position-velocity system. Identify and fix the bug.**
   ```matlab
   x = A * x + B * u;
   P = A * P + Q;
   ```
   Answer: The bug is in the covariance prediction equation. The correct equation is `P = A * P * A' + Q`. The original code `A * P + Q` is incorrect because it does not account for how the uncertainty in the state propagates through the state transition. The term `A * P * A'` projects the covariance through the dynamics, scaling and rotating the uncertainty ellipsoid according to the system matrix A. The `+ Q` adds the process noise covariance. Without the `A'` on the right, the covariance update is mathematically incorrect and will produce wrong uncertainty estimates.

3. **The following code attempts to compute the rotation matrix from Euler angles. It has a logic error. What is it?**
   ```matlab
   function R = euler2rotm(phi, theta, psi)
       Rx = [1 0 0; 0 cos(phi) -sin(phi); 0 sin(phi) cos(phi)];
       Ry = [cos(theta) 0 sin(theta); 0 1 0; -sin(theta) 0 cos(theta)];
       Rz = [cos(psi) -sin(psi) 0; sin(psi) cos(psi) 0; 0 0 1];
       R = Rx * Ry * Rz;
   end
   ```
   Answer: The code computes `R = Rx * Ry * Rz`, which corresponds to rotating first around z, then around y, then around x (extrinsic rotations about fixed axes) or equivalently intrinsic rotations about x, then y, then z (depending on convention). However, the function name `euler2rotm` does not specify the convention, which is ambiguous. The main logic error is that the function assumes a specific rotation order (Z-Y-X or X-Y-Z) without documenting it. In robotics, the convention is critical. A more serious issue is that if `theta = ±90°` (pitch = ±90°), the function suffers from **gimbal lock**: `Rx` and `Rz` align, and the rotation loses one degree of freedom. The function should either use quaternions (which avoid gimbal lock) or document the convention and warn about the singularity. Additionally, for the standard aerospace Z-Y-X convention (roll-pitch-yaw), the correct order is `R = Rz * Ry * Rx`, not `Rx * Ry * Rz`.

### Section D: Practical Problem (10 points)

**Design a control system for a two-wheeled balancing robot (Mobile Inverted Pendulum) that must balance in place and move to a target position.**

Requirements:
- The robot has state `[x; x_dot; theta; theta_dot]` where `x` is wheel position, `theta` is pendulum angle.
- The linearized dynamics are: `x_dot = A*x + B*u` where `u` is the motor force.
- The robot has a noisy IMU that measures `theta` and `theta_dot` with noise `σ = 0.05`.
- The robot has wheel encoders that measure `x_dot` with noise `σ = 0.1`.
- The robot must balance at `theta = 0` and move to `x_target = 3 m`.
- Design a cascade controller (inner balance + outer position) and an EKF for state estimation.
- Write the MATLAB code and simulate for 10 seconds.

**Answer:**

```matlab
% MIP Parameters
M = 0.5; m = 1.0; L = 0.3; I = 0.1; g = 9.81;
dt = 0.01; T = 10; N = T/dt;

% Linearized state-space matrices (computed from Lagrangian dynamics)
% A = [0, 1, 0, 0;
%      0, 0, -m*g/(M+m), 0;
%      0, 0, 0, 1;
%      0, 0, (M+m)*g/(m*L), 0];
% B = [0; 1/(M+m); 0; -1/(m*L)];

A = [0, 1, 0, 0;
     0, 0, -3.27, 0;
     0, 0, 0, 1;
     0, 0, 32.67, 0];
B = [0; 0.67; 0; -2.22];

% Controller gains
Kp_theta = 60; Kd_theta = 15;
Kp_x = 3; Kd_x = 2;

% EKF setup
x_est = [0; 0; 0.05; 0];  % Initial estimate (slightly tilted)
P = diag([0.1, 0.01, 0.01, 0.001]);
Q = diag([0.001, 0.001, 0.001, 0.001]);
R = diag([0.05^2, 0.05^2, 0.1^2]);  % IMU theta, IMU theta_dot, encoder x_dot

H = [0, 0, 1, 0;    % theta measurement
     0, 0, 0, 1;    % theta_dot measurement
     0, 1, 0, 0];   % x_dot measurement

% Storage
x_true = zeros(4, N);
x_est_hist = zeros(4, N);
u_hist = zeros(1, N);

% True initial state
x = [0; 0; 0.05; 0];

for k = 1:N
    % Target
    x_target = 3 * (k > 300);  % Start moving at t = 3s
    
    % Outer loop: position control
    x_des = Kp_x * (x_target - x_est(1)) + Kd_x * (0 - x_est(2));
    theta_des = x_des / L;  % Convert position error to desired tilt
    theta_des = max(min(theta_des, 0.3), -0.3);  % Limit tilt
    
    % Inner loop: balance control
    u = Kp_theta * (theta_des - x_est(3)) + Kd_theta * (0 - x_est(4));
    u = max(min(u, 10), -10);  % Limit force
    
    % Simulate true dynamics (simplified Euler integration)
    x_dot = A * x + B * u;
    x = x + x_dot * dt + sqrt(Q) * randn(4,1) * sqrt(dt);
    
    % Measurement
    z = H * x + sqrt(R) * randn(3,1);
    
    % EKF Prediction
    x_pred = x_est + (A * x_est + B * u) * dt;
    F = eye(4) + A * dt;
    P_pred = F * P * F' + Q * dt;
    
    % EKF Update
    K = P_pred * H' / (H * P_pred * H' + R);
    x_est = x_pred + K * (z - H * x_pred);
    P = (eye(4) - K * H) * P_pred;
    
    % Store
    x_true(:,k) = x;
    x_est_hist(:,k) = x_est;
    u_hist(k) = u;
end

% Plot
t = (1:N) * dt;
figure;
subplot(3,1,1);
plot(t, x_true(1,:), 'b', t, x_est_hist(1,:), 'r--');
legend('True', 'Estimated');
ylabel('Position (m)');
subplot(3,1,2);
plot(t, x_true(3,:), 'b', t, x_est_hist(3,:), 'r--');
ylabel('Pendulum Angle (rad)');
subplot(3,1,3);
plot(t, u_hist);
ylabel('Control Force (N)');
xlabel('Time (s)');
```

This code implements a cascade controller with an EKF. The robot balances at the origin for 3 seconds, then moves to `x = 3 m`. The inner loop maintains the pendulum angle near zero, while the outer loop generates a desired tilt to achieve position control. The EKF fuses the IMU and encoder measurements to provide a clean state estimate despite sensor noise. The plots show the true state, the estimated state, and the control force over time.

---

## Course Conclusion

Congratulations on completing the Robotics Specialization. You have mastered the mathematical foundations and engineering principles that make modern robots possible. You can now model the kinematics and dynamics of aerial and ground robots, design controllers that stabilize and guide them, plan collision-free paths through complex environments, extract 3D structure from camera images, and estimate robot state using probabilistic filters. You have built and simulated complete robotic systems, from a balancing robot to an autonomous rover.

The skills you have gained are the foundation of a career in robotics engineering, autonomous systems, and mechatronics. Whether you are designing drones for aerial photography, building warehouse robots for logistics, developing surgical robots for healthcare, or creating exploration rovers for planetary science, the principles of dynamics, control, planning, perception, and estimation will be your daily tools.

To continue your learning, consider these next steps:
- **Study ROS (Robot Operating System):** ROS is the standard software framework for robotics. Learning ROS will allow you to integrate hardware, sensors, and algorithms into complete robot systems.
- **Explore deep learning for robotics:** Learn how to use neural networks for robot perception (object detection, segmentation) and control (reinforcement learning, imitation learning).
- **Build a more advanced robot:** Design and build a robot with more degrees of freedom, more sensors, and more complex behaviors. Consider entering a robotics competition like RoboCup or NASA's RMC.
- **Read research papers:** Follow top robotics conferences (ICRA, IROS, RSS) and read papers on topics that interest you. Implement the algorithms and reproduce the results.
- **Get hands-on experience:** Intern or work at a robotics company. The best way to learn robotics is to build real robots and solve real problems.

Robotics is a field that combines the rigor of mathematics, the creativity of engineering, and the wonder of making machines that can think and act. You are now equipped to contribute to this exciting and transformative field. Go build something that moves, explores, and helps the world.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
