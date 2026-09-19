---
title: Game AI Programming
course_id: game-ai-programming
provider: Cohortia
original_reference: University of Alberta / Coursera
platform: Cohortia
level: Intermediate
type: Course
duration: 6 weeks
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Artificial Intelligence
subcategory: Reinforcement Learning & Game AI
skills: Game tree search, minimax, alpha-beta, MCTS, heuristics, evaluation
source_catalog: docs/artificial-intelligence/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds this content and does not claim sole ownership of third-party source material from the University of Alberta / Coursera.
---

## Course Overview

Welcome to Game AI Programming, an intermediate-level course designed to equip you with the fundamental and advanced techniques for building intelligent agents in games. This course delves deep into the core algorithms and methodologies that power compelling and challenging in-game adversaries and companions. From classic board games to real-time strategy, understanding how to design AI that can make strategic decisions, navigate complex environments, and adapt to player actions is crucial for creating engaging interactive experiences. We'll move beyond simple scripting to explore the mathematical and algorithmic underpinnings of truly smart game AI.

Throughout this program, you will gain hands-on experience implementing various game AI algorithms, starting with foundational search techniques and progressing to sophisticated adversarial and Monte Carlo methods. We will emphasize practical application, providing you with the tools and insights to analyze game states, develop effective evaluation functions, and prune search spaces efficiently. The curriculum is structured to progressively build your expertise, ensuring you not only understand *what* these algorithms do but also *how* to implement and optimize them in a game development context.

This Cohortia course is tailored for aspiring game developers, AI engineers, and anyone interested in the intersection of artificial intelligence and interactive entertainment. A basic understanding of programming (preferably Python or C++) and data structures is recommended to get the most out of the practical exercises. By the end of this course, you will possess a robust toolkit for designing and implementing sophisticated game AI, capable of enhancing player engagement and delivering memorable gameplay experiences.

### Learning Outcomes

Upon successful completion of this course, you will be able to:

*   Design and implement intelligent agents capable of operating within various game environments.
*   Apply classical search algorithms (e.g., A*) for pathfinding and state-space exploration in games.
*   Understand and implement adversarial search algorithms, specifically Minimax, for two-player zero-sum games.
*   Optimize game tree search efficiency using Alpha-Beta Pruning techniques.
*   Develop effective heuristic functions and evaluation criteria for complex game states.
*   Implement Monte Carlo Tree Search (MCTS) for games with large branching factors and imperfect information.
*   Design and integrate decision-making systems like Finite State Machines and Behavior Trees for agent control.
*   Analyze the trade-offs between different AI techniques based on game genre and computational constraints.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Game AI & Agent Design | 8 |
| 2 | Classical Search for Game Navigation | 8 |
| 3 | Adversarial Search: The Minimax Principle | 8 |
| 4 | Optimizing Adversarial Search: Alpha-Beta Pruning | 8 |
| 5 | Heuristics and Evaluation Functions | 8 |
| 6 | Advanced Tree Search: Monte Carlo Tree Search | 8 |
| 7 | Decision Making & Behavior Architectures | 8 |
| 8 | Beyond Search: Introduction to Learning Agents | 8 |

Total chapters: 64
---

## Module 1: Foundations of Game AI & Agent Design

This module introduces the core concepts of Artificial Intelligence as applied to video games. You'll learn what makes game AI unique, explore fundamental agent architectures, and delve into practical techniques for controlling non-player characters (NPCs) and enabling intelligent decision-making and navigation within game worlds.

---

### Chapter 1.1 — Introduction to Game AI and Agent Paradigms

#### Learning objectives
*   Differentiate between general Artificial Intelligence and Artificial Intelligence specifically designed for games.
*   Identify the primary goals and challenges of implementing AI in game development.
*   Explain the characteristics and applications of reactive, deliberative, and hybrid agent architectures.
*   Recognize common pitfalls in game AI design and strategies to avoid them.
*   Understand the role of AI in enhancing player experience and game immersion.

#### Detailed lesson content
Welcome to the exciting world of Game AI Programming! This course isn't just about making computers smart; it's about making them *fun* to play against, *believable* as characters, and *challenging* enough to keep players engaged. Unlike general AI, which often strives for optimal, human-level, or even superhuman performance, game AI has a different mandate: to enhance the player's experience. A perfect AI that never makes a mistake might be impressive, but it's rarely fun to play against. Our goal is to create AI that feels intelligent, adapts, and provides a compelling experience, whether it's a cunning enemy, a helpful companion, or a bustling city of NPCs.

Game AI encompasses a broad spectrum of techniques, ranging from simple rule-based systems to complex machine learning models. At its heart, game AI is about creating agents – non-player characters (NPCs) or environmental elements – that exhibit behavior that appears intelligent. This includes everything from basic pathfinding for a character to navigate a level, to complex decision-making for a boss enemy, to procedural generation of game content, and even simulating economies or social interactions within a virtual world. The challenges are unique: game AI must often operate in real-time, react quickly to player actions, and provide a sense of agency and personality without consuming excessive computational resources. A common mistake beginners make is trying to create an "all-knowing" AI that perfectly counters every player move. This often leads to frustration for the player and a feeling of unfairness, ultimately detracting from the game. Instead, we often introduce "fudge factors," intentional imperfections, or even observable "thinking" delays to make the AI feel more human and less like a cheating algorithm.

When designing game agents, we typically categorize their architectures into three main paradigms: reactive, deliberative, and hybrid. **Reactive agents** are the simplest. They operate on a direct perception-action cycle, meaning they react immediately to their current sensory input without maintaining an internal model of the world or engaging in complex planning. Think of a simple enemy that immediately attacks if the player is within a certain range, or flees if its health drops below a threshold. These agents are fast, predictable, and computationally cheap, making them ideal for many background NPCs or simple environmental hazards. However, they lack foresight and can easily get stuck in local optima or exhibit repetitive, exploitable behaviors. A common mistake with reactive agents is making their reactions too instantaneous, which can feel unfair to the player. Introducing a slight delay or a "wind-up" animation for an attack can make it feel more natural.

**Deliberative agents**, on the other hand, maintain an internal model of the world, reason about their environment, and engage in planning before acting. They might use techniques like game tree search (which we'll explore in later modules) to evaluate future outcomes of their actions. These agents can exhibit much more complex and strategic behaviors, making them suitable for challenging boss characters, strategic opponents, or characters that need to achieve long-term goals. The trade-off is increased computational cost and complexity in development. Planning takes time and resources, which can be a bottleneck in real-time game environments. A potential pitfall here is over-planning, where the agent spends too much time thinking and not enough acting, leading to a sluggish or unresponsive feel.

Finally, **hybrid agents** combine the strengths of both reactive and deliberative approaches. They often have a reactive layer for immediate responses to urgent threats or opportunities, coupled with a deliberative layer for long-term planning and strategic decision-making. For example, an enemy might immediately dodge a projectile (reactive) while simultaneously planning its next attack sequence based on the player's position and its own tactical objectives (deliberative). This architecture allows for both quick reflexes and sophisticated strategy, providing a rich and believable AI experience. Many modern game AIs employ hybrid architectures to balance responsiveness with intelligent, goal-oriented behavior. The challenge with hybrid systems lies in effectively integrating the different layers and managing the interplay between immediate reactions and long-term plans to avoid conflicting behaviors. Ensuring smooth transitions between reactive and deliberative modes is crucial for believable agent behavior.

Consider a simple example of a reactive agent in Python. This agent merely responds to its immediate environment:

```python
class SimpleEnemyAI:
    def __init__(self, health=100, attack_range=5, flee_health_threshold=20):
        self.health = health
        self.attack_range = attack_range
        self.flee_health_threshold = flee_health_threshold
        self.state = "idle" # Initial state

    def update(self, player_distance, player_visible):
        if self.health <= 0:
            self.state = "dead"
            return

        if self.health < self.flee_health_threshold:
            self.state = "flee"
        elif player_visible and player_distance <= self.attack_range:
            self.state = "attack"
        elif player_visible:
            self.state = "pursue"
        else:
            self.state = "patrol" # Default if no immediate threat

        # In a real game, based on self.state, the enemy would perform actions
        # print(f"Enemy state: {self.state}")

# Example usage:
enemy = SimpleEnemyAI()
enemy.update(player_distance=10, player_visible=True) # Player far, visible
print(f"Enemy state: {enemy.state}") # Output: pursue

enemy.update(player_distance=3, player_visible=True) # Player close, visible
print(f"Enemy state: {enemy.state}") # Output: attack

enemy.health = 15 # Enemy takes damage
enemy.update(player_distance=3, player_visible=True) # Player close, visible, but enemy low health
print(f"Enemy state: {enemy.state}") # Output: flee
```
This simple `SimpleEnemyAI` demonstrates a basic reactive system. It checks conditions (health, player distance, visibility) and immediately transitions to a corresponding state. There's no planning for the future, just an immediate response to the current situation. This forms the bedrock for more complex behaviors we'll build upon.

#### Key concepts
*   **Game AI:** Artificial Intelligence specifically designed to enhance player experience, create believable characters, and provide engaging challenges within a game, often prioritizing fun over optimal performance.
*   **Agent:** An autonomous entity within a game environment (e.g., NPC, enemy, companion) that perceives its environment and acts upon it.
*   **Reactive Agent:** An agent that responds immediately to its current sensory input without internal world models or complex planning. Fast and simple but can be predictable.
*   **Deliberative Agent:** An agent that maintains an internal model of the world, reasons about its environment, and plans actions before executing them. Capable of complex strategy but computationally more expensive.
*   **Hybrid Agent:** An agent architecture combining reactive and deliberative layers to achieve both immediate responsiveness and long-term strategic behavior.
*   **Player Experience (PX):** The overall feeling and engagement a player has while interacting with a game, which game AI aims to enhance.

#### Hands-on activity
**Activity: Design a Simple Reactive NPC**

**Goal:** Implement a basic reactive AI for a non-player character (NPC) in a text-based scenario.

**Scenario:** You are creating a simple "Guard" NPC for a fantasy game. The guard has three states: `Patrol`, `Alert`, and `Chase`.
*   If no player is detected, the guard `Patrol`s.
*   If a player is detected within a `vision_range` but outside `attack_range`, the guard becomes `Alert`.
*   If a player is detected within `attack_range`, the guard `Chase`s.

Your task is to complete the `update` method of the `GuardAI` class based on the provided conditions.

**Starter Code:**
```python
class GuardAI:
    def __init__(self, vision_range=10, attack_range=3):
        self.vision_range = vision_range
        self.attack_range = attack_range
        self.current_state = "Patrol" # Initial state

    def update(self, player_distance, player_detected):
        """
        Updates the guard's state based on player distance and detection.
        player_distance: int, the distance to the player.
        player_detected: bool, True if player is visible, False otherwise.
        """
        # --- YOUR CODE STARTS HERE ---
        # Implement the logic to set self.current_state based on the rules:
        # 1. If player_detected is False, state is "Patrol".
        # 2. If player_detected is True:
        #    a. If player_distance <= self.attack_range, state is "Chase".
        #    b. Else (player_distance > self.attack_range but within vision), state is "Alert".

        if not player_detected:
            self.current_state = "Patrol"
        else:
            if player_distance <= self.attack_range:
                self.current_state = "Chase"
            elif player_distance <= self.vision_range: # Player detected, but outside attack range, within vision
                self.current_state = "Alert"
            else: # Player detected, but outside vision_range (shouldn't happen if player_detected is true, but good for robustness)
                self.current_state = "Patrol" # Or some other default

        # --- YOUR CODE ENDS HERE ---
        print(f"Guard is currently in state: {self.current_state}")

# Test Cases:
print("--- Test Case 1: Player not detected ---")
guard = GuardAI()
guard.update(player_distance=20, player_detected=False) # Expected: Patrol

print("\n--- Test Case 2: Player detected, far away (outside vision range) ---")
guard = GuardAI()
guard.update(player_distance=15, player_detected=True) # Expected: Patrol (if player_detected is true, but distance is too far for vision_range)
# *Question:** A game developer implements an AI for a stealth game enemy. This enemy instantly turns and shoots the player the moment they enter its line of sight, regardless of distance or cover. What is the most likely issue with this AI's design from a player experience perspective, and which agent paradigm does it most closely resemble?
    *   **Correct Answer:** The most likely issue is that the AI is too perfect and reactive, making the game unfair and frustrating for the player. It removes the challenge and satisfaction of stealth, as there's no opportunity for the player to react or use cover effectively. This AI most closely resembles a **reactive agent**, as it operates on a direct perception-action cycle (player seen -> shoot) without any apparent internal world model, planning, or consideration for game mechanics like cover or player reaction time.
2.  **Question:** Describe a scenario where a purely deliberative AI agent might be a poor choice for a game character, and suggest how a hybrid agent approach could improve its behavior.
    *   **Correct Answer:** A purely deliberative AI agent might be a poor choice for a fast-paced action game character, such as an enemy in a fighting game or a minion in a real-time strategy (RTS) game. If the agent spends too much time planning its optimal move (e.g., calculating all possible combos in a fighting game or evaluating all unit movements in an RTS), it could lead to noticeable delays, making the character feel unresponsive, sluggish, or "laggy." This would break immersion and negatively impact the player's experience in a game that demands quick reactions. A hybrid agent could improve this by incorporating a reactive layer for immediate threats or opportunities. For instance, the fighting game character could have a reactive layer that instantly blocks incoming attacks or performs a quick counter-jab, while a deliberative layer works in the background to plan more complex attack sequences or strategic positioning. This allows for both quick reflexes and sophisticated long-term strategy, balancing responsiveness with intelligent behavior.

#### AI generation note
Create a 7-minute animated video explaining the core differences between general AI and game AI. Use clear analogies, like a chess engine (general AI, optimal) versus a game boss (game AI, fun/challenging). Visually represent reactive, deliberative, and hybrid agents with simple character animations and thought bubbles showing their internal processes. For reactive, show an enemy instantly attacking. For deliberative, show an enemy pausing to "think" with a mini-map/plan appearing. For hybrid, show both quick reflexes and a background planning process. Include a 2-question interactive quiz at the end, asking to identify agent types from scenarios. Ensure captions and alt text for diagrams are available.

---

### Chapter 1.2 — State Machines and Behavior Trees for Agent Control

#### Learning objectives
*   Implement Finite State Machines (FSMs) to manage NPC behavior and transitions between states.
*   Understand the limitations of FSMs, particularly in complex scenarios, and how Hierarchical State Machines (HSMs) address them.
*   Design and implement basic Behavior Trees (BTs) using common node types like Sequence, Selector, and Leaf nodes.
*   Compare and contrast FSMs and Behavior Trees, identifying appropriate use cases for each.
*   Apply state machine and behavior tree concepts to practical game AI scenarios for emergent and dynamic character control.

#### Detailed lesson content
Building upon our understanding of agent paradigms, let's dive into two of the most fundamental and widely used techniques for controlling game AI: Finite State Machines (FSMs) and Behavior Trees (BTs). These tools provide structured ways to define how an NPC behaves, reacts to its environment, and progresses through different actions.

A **Finite State Machine (FSM)** is a mathematical model of computation. It's a simple yet powerful concept where an agent can be in one of a finite number of "states" at any given time. The agent transitions between these states based on specific "events" or "conditions." Think of a traffic light: it has states like Red, Yellow, and Green, and it transitions between them based on timers. In games, an enemy NPC might have states like `Idle`, `Patrol`, `Chase`, `Attack`, and `Flee`. Each state defines a set of actions the NPC performs while in that state, and transitions define the conditions under which the NPC moves from one state to another.

For example, an enemy in an `Idle` state might just stand still. If it detects the player, it transitions to `Chase`. In the `Chase` state, it moves towards the player. If the player gets too close, it transitions to `Attack`. If its health drops too low, it transitions to `Flee`. The FSM provides a clear, explicit, and easy-to-understand way to model these behaviors. They are excellent for simple, well-defined behaviors with a limited number of states and clear transition rules. A common mistake when using FSMs is creating too many states and transitions, leading to what's often called "spaghetti code" or "spaghetti states," where the logic becomes tangled and difficult to manage. This is particularly true when trying to represent complex, nested behaviors.

Here's a basic Python example of an FSM for an enemy:

```python
class EnemyFSM:
    def __init__(self):
        self.state = "Patrol" # Initial state
        self.health = 100
        self.player_distance = float('inf')
        self.is_player_visible = False

    def update(self):
        if self.state == "Patrol":
            self._handle_patrol()
        elif self.state == "Chase":
            self._handle_chase()
        elif self.state == "Attack":
            self._handle_attack()
        elif self.state == "Flee":
            self._handle_flee()
        # print(f"Current State: {self.state}")

    def _handle_patrol(self):
        # Actions in Patrol state: Move along a path
        # print("Patrolling...")
        if self.is_player_visible and self.player_distance < 10:
            self.state = "Chase"
            # print("Transitioning to Chase (player detected)!")

    def _handle_chase(self):
        # Actions in Chase state: Move towards player
        # print(f"Chasing player at distance {self.player_distance}...")
        if not self.is_player_visible or self.player_distance >= 10:
            self.state = "Patrol" # Lost sight or player too far
            # print("Transitioning to Patrol (player lost)!")
        elif self.player_distance < 2:
            self.state = "Attack"
            # print("Transitioning to Attack (player in range)!")
        elif self.health < 20:
            self.state = "Flee"
            # print("Transitioning to Flee (low health)!")

    def _handle_attack(self):
        # Actions in Attack state: Perform attack animation, deal damage
        # print("Attacking player!")
        if self.player_distance >= 2:
            self.state = "Chase" # Player moved out of range
            # print("Transitioning to Chase (player out of range)!")
        elif self.health < 20:
            self.state = "Flee"
            # print("Transitioning to Flee (low health)!")

    def _handle_flee(self):
        # Actions in Flee state: Run away from player
        # print("Fleeing!")
        if self.health >= 50 and not self.is_player_visible: # Recovered some health and player lost
            self.state = "Patrol"
            # print("Transitioning to Patrol (recovered/safe)!")

# Simulate game loop
enemy = EnemyFSM()
enemy.update() # Patrol
enemy.is_player_visible = True
enemy.player_distance = 5
enemy.update() # Chase
enemy.player_distance = 1
enemy.update() # Attack
enemy.health = 15
enemy.update() # Flee
enemy.is_player_visible = False
enemy.health = 60
enemy.update() # Patrol
```

To mitigate the "spaghetti code" problem, **Hierarchical State Machines (HSMs)** introduce the concept of nested states. A state can contain sub-states, and transitions can occur at different levels of the hierarchy. For example, an `Attack` state might have sub-states like `MeleeAttack`, `RangedAttack`, or `Reload`. This allows for better organization and reuse of logic, as transitions from any sub-state can go to a higher-level state (e.g., `Flee` from any attack sub-state).

While FSMs are great for sequential, distinct behaviors, they can become cumbersome for complex, reactive, and emergent AI. This is where **Behavior Trees (BTs)** shine. A Behavior Tree is a hierarchical, tree-like structure that defines how an AI agent should behave. It's composed of various types of nodes:
*   **Root:** The starting point of the tree.
*   **Control Flow Nodes:**
    *   **Sequence (`->`):** Executes its children from left to right. If a child succeeds, it moves to the next. If a child fails, the Sequence fails immediately. The Sequence only succeeds if all its children succeed. (e.g., "Open door THEN walk through").
    *   **Selector (`?`):** Executes its children from left to right. If a child succeeds, the Selector succeeds immediately. If a child fails, it moves to the next. The Selector only fails if all its children fail. (e.g., "IF player visible THEN attack ELSE patrol").
*   **Decorator Nodes:** Modify the behavior of a single child (e.g., `Inverter` (succeeds if child fails, fails if child succeeds), `Repeater` (repeats child N times or forever)).
*   **Leaf Nodes:** These are the actual actions or conditions.
    *   **Action Nodes:** Perform an action (e.g., `MoveToPlayer`, `Attack`, `PlayAnimation`). They return `Success`, `Failure`, or `Running`.
    *   **Condition Nodes:** Check a condition (e.g., `IsPlayerVisible`, `HasLowHealth`). They return `Success` or `Failure`.

BTs are evaluated from the root downwards. When a node is executed, it returns one of three statuses: `Success`, `Failure`, or `Running`. `Running` means the action is still in progress and needs to be continued in the next update cycle. This allows BTs to handle long-running actions naturally.

The primary advantage of BTs is their modularity and reusability. You can easily add, remove, or rearrange nodes without significantly impacting other parts of the tree. They are also highly readable, as the tree structure often directly maps to logical decision-making processes. For example, a BT can elegantly express "If the player is visible, then (if player is in attack range, attack; else, chase); otherwise, patrol." This logic would be more cumbersome to express in a flat FSM. A common mistake with BTs is creating overly deep or wide trees without proper organization, making them hard to debug. It's crucial to break down complex behaviors into smaller, manageable sub-trees.

Here's a conceptual Python structure for a Behavior Tree:

```python
class Node:
    def evaluate(self):
        raise NotImplementedError

class ActionNode(Node):
    def __init__(self, action_func):
        self.action_func = action_func

    def evaluate(self):
        return self.action_func() # Returns Success, Failure, or Running

class ConditionNode(Node):
    def __init__(self, condition_func):
        self.condition_func = condition_func

    def evaluate(self):
        return "Success" if self.condition_func() else "Failure"

class Sequence(Node):
    def __init__(self, children):
        self.children = children

    def evaluate(self):
        for child in self.children:
            status = child.evaluate()
            if status == "Failure" or status == "Running":
                return status # If any child fails or is running, sequence stops
        return "Success" # All children succeeded

class Selector(Node):
    def __init__(self, children):
        self.children = children

    def evaluate(self):
        for child in self.children:
            status = child.evaluate()
            if status == "Success" or status == "Running":
                return status # If any child succeeds or is running, selector stops
        return "Failure" # All children failed

# Example usage (conceptual):
# Assume these functions exist in the game context
def is_player_visible(): return True # or False
def is_player_in_attack_range(): return False # or True
def perform_attack(): print("Attacking!"); return "Success"
def move_to_player(): print("Moving to player!"); return "Running"
def patrol_area(): print("Patrolling area."); return "Success"

# Build a simple BT:
# If player visible: (If player in attack range: Attack; Else: Move to player)
# Else: Patrol
bt_root = Selector([
    Sequence([
        ConditionNode(is_player_visible),
        Selector([
            Sequence([
                ConditionNode(is_player_in_attack_range),
                ActionNode(perform_attack)
            ]),
            ActionNode(move_to_player)
        ])
    ]),
    ActionNode(patrol_area)
])

# In a game loop:
# bt_root.evaluate()
```
Behavior Trees are particularly effective for complex NPCs that need to switch between many different behaviors dynamically, such as a sophisticated enemy that can patrol, chase, attack, use abilities, retreat, and call for reinforcements. They offer greater flexibility and scalability compared to FSMs for these kinds of emergent behaviors.

In summary, FSMs are excellent for clear, sequential processes with a limited number of distinct states. They are easy to debug and understand for simpler behaviors. Behavior Trees, on the other hand, provide a more modular and scalable approach for complex, hierarchical, and reactive AI, allowing for more emergent and dynamic behaviors. Choosing between them often depends on the complexity of the desired AI and the specific game mechanics. Many games even combine both, using FSMs for high-level state management (e.g., "combat mode" vs. "exploration mode") and BTs within those states to manage granular actions.

#### Key concepts
*   **Finite State Machine (FSM):** A model of computation where an agent can be in one of a finite number of states, transitioning between them based on specific events or conditions.
*   **State:** A distinct mode of behavior for an agent (e.g., `Idle`, `Patrol`, `Attack`).
*   **Transition:** A rule that dictates when an agent moves from one state to another.
*   **Hierarchical State Machine (HSM):** An extension of FSMs where states can contain sub-states, allowing for more organized and reusable behavior logic.
*   **Behavior Tree (BT):** A hierarchical, tree-like structure used to define complex AI behavior through a combination of control flow, decorator, and leaf nodes.
*   **Control Flow Nodes:** Nodes in a BT that manage the execution order of their children (e.g., `Sequence`, `Selector`).
*   **Leaf Nodes:** The terminal nodes in a BT that perform actions or check conditions (e.g., `ActionNode`, `ConditionNode`).
*   **Node Status:** The result returned by a BT node after evaluation: `Success`, `Failure`, or `Running`.

#### Hands-on activity
**Activity: Implement a Simple Behavior Tree for a Gatherer NPC**

**Goal:** Create a basic Behavior Tree for an NPC whose goal is to gather resources.

**Scenario:** Your NPC needs to:
1.  Check if it has enough wood.
2.  If not, check if there's a tree nearby.
3.  If a tree is nearby, move to the tree and gather wood.
4.  If no tree is nearby, wander randomly.

You'll use the provided simplified `Node` classes.

**Starter Code:**
```python
# Simplified Behavior Tree Node Classes (for this exercise)
class Node:
    def evaluate(self):
        raise NotImplementedError("Subclasses must implement evaluate()")

class ActionNode(Node):
    def __init__(self, name, action_func):
        self.name = name
        self.action_func = action_func

    def evaluate(self):
        print(f"Executing Action: {self.name}")
        return self.action_func() # Returns "Success", "Failure", or "Running"

class ConditionNode(Node):
    def __init__(self, name, condition_func):
        self.name = name
        self.condition_func = condition_func

    def evaluate(self):
        result = self.condition_func()
        print(f"Checking Condition: {self.name} -> {'Success' if result else 'Failure'}")
        return "Success" if result else "Failure"

class Sequence(Node):
    def __init__(self, name, children):
        self.name = name
        self.children = children

    def evaluate(self):
        print(f"Evaluating Sequence: {self.name}")
        for child in self.children:
            status = child.evaluate()
            if status == "Failure" or status == "Running":
                return status
        return "Success"

class Selector(Node):
    def __init__(self, name, children):
        self.name = name
        self.children = children

    def evaluate(self):
        print(f"Evaluating Selector: {self.name}")
        for child in self.children:
            status = child.evaluate()
            if status == "Success" or status == "Running":
                return status
        return "Failure"

# --- NPC World State and Actions ---
class GathererNPC:
    def __init__(self):
        self.wood_count = 0
        self.has_tree_nearby = False
        self.target_tree_location = None # For more advanced logic

    def has_enough_wood(self):
        return self.wood_count >= 5

    def find_tree(self):
        # Simulate finding a tree
        if not self.has_tree_nearby:
            # Randomly "find" a tree sometimes
            import random
            self.has_tree_nearby = random.choice([True, False, False]) # 1/3 chance
            if self.has_tree_nearby:
                print("Found a tree nearby!")
        return self.has_tree_nearby

    def move_to_tree(self):
        print("Moving to tree...")
        # In a real game, this would be a long-running action
        # For simplicity, let's make it instantly succeed here
        return "Success"

    def gather_wood(self):
        print("Gathering wood...")
        self.wood_count += 1
        print(f"Wood count: {self.wood_count}")
        return "Success"

    def wander(self):
        print("Wandering aimlessly...")
        return "Success"

# --- YOUR CODE STARTS HERE ---
# Create an instance of the NPC
npc = GathererNPC()

# Build the Behavior Tree
# Root Selector: (Has enough wood? -> Success) OR (Gather wood sequence) OR (Wander)
# Gather wood sequence: (Find tree? -> Success) THEN (Move to tree) THEN (Gather wood)

# 1. Define Leaf Nodes (Conditions and Actions)
condition_has_enough_wood = ConditionNode("HasEnoughWood", npc.has_enough_wood)
condition_find_tree = ConditionNode("FindTree", npc.find_tree)
action_move_to_tree = ActionNode("MoveToTree", npc.move_to_tree)
action_gather_wood = ActionNode("GatherWood", npc.gather_wood)
action_wander = ActionNode("Wander", npc.wander)

# 2. Build the "Gather Wood" Sequence
gather_wood_sequence = Sequence("GatherWoodSequence", [
    condition_find_tree,
    action_move_to_tree,
    action_gather_wood
])

# 3. Build the Root Selector
root_behavior_tree = Selector("RootBehavior", [
    condition_has_enough_wood, # If has enough wood, this succeeds, and the BT stops
    gather_wood_sequence,      # If not enough wood, try to gather
    action_wander              # If cannot gather (no tree), then wander
])

# --- YOUR CODE ENDS HERE ---

# Simulate game loop updates
print("\n--- NPC Behavior Simulation ---")
for i in range(10):
    print(f"\n--- Update Cycle {i+1} ---")
    root_behavior_tree.evaluate()
    print(f"NPC Wood Count: {npc.wood_count}")
    if npc.wood_count >= 5:
        print("NPC has enough wood. Behavior tree should prioritize this.")
```

#### Assessment idea
1.  **Question:** A game character needs to perform a complex attack sequence: first, it checks if the player is in range; if so, it plays a "wind-up" animation, then performs a "strike" animation, and finally applies damage. If the player moves out of range at any point, the sequence should abort. Which Behavior Tree control flow node is best suited to manage this entire sequence, and why?
    *   **Correct Answer:** A **Sequence** node is best suited for this. A Sequence node executes its children in order, and if any child fails or is still `Running`, the Sequence itself will fail or remain `Running`. In this scenario, checking if the player is in range (`ConditionNode`) must succeed before the animation (`ActionNode`) starts. If the player moves out of range during the wind-up or strike, the condition check (or a continuous check within the animation actions) would fail, causing the entire Sequence to fail and abort the attack, which is the desired behavior.
2.  **Question:** You are designing an AI for a shopkeeper NPC. The shopkeeper should prioritize selling items if a player is present and has gold. If no player is present, the shopkeeper should check inventory and restock if necessary. If neither of these conditions is met, the shopkeeper should simply idle. Which Behavior Tree control flow node would you use as the root of this decision-making process, and why?
    *   **Correct Answer:** A **Selector** node would be the most appropriate root for this decision-making process. A Selector node tries its children in order and succeeds as soon as one of its children succeeds (or is `Running`). This allows for prioritization. The shopkeeper's BT root would be a Selector with children ordered as follows:
        1.  A `Sequence` (or `ConditionNode` + `ActionNode`) to handle "Sell items if player present and has gold." If this succeeds, the shopkeeper sells, and the Selector stops.
        2.  A `Sequence` (or `ConditionNode` + `ActionNode`) to handle "Restock if no player and inventory low." If the first option failed, it tries this. If this succeeds, the shopkeeper restocks, and the Selector stops.
        3.  An `ActionNode` for "Idle." If both previous options failed, the shopkeeper idles.
        This structure ensures that the highest priority action that can be performed is executed, which is exactly what a Selector provides.

#### AI generation note
Create a 10-minute interactive code demo. Start by showing a simple FSM for an enemy patrol/chase/attack. Then, refactor the same logic into a Behavior Tree, visually highlighting the different node types (Sequence, Selector, Action, Condition) as they are built. Use a split-screen view: Python code on the left, and a simple animated diagram on the right showing the FSM state transitions or the BT node evaluation flow. Include a hands-on coding challenge where learners complete a missing `Selector` or `Sequence` node in a provided BT structure. Emphasize common mistakes like FSM "spaghetti" and how BTs offer better modularity.

---

### Chapter 1.3 — Pathfinding Algorithms: A* and Dijkstra's

#### Learning objectives
*   Explain the fundamental concepts of graph representation for pathfinding in game environments.
*   Implement Dijkstra's algorithm to find the shortest path in a weighted graph.
*   Understand the role of heuristic functions in informed search algorithms.
*   Implement the A* search algorithm, including common heuristic choices, to find optimal paths efficiently.
*   Compare the performance and characteristics of Dijkstra's and A* algorithms in various game scenarios.

#### Detailed lesson content
One of the most common and critical tasks for AI in games is **pathfinding**: enabling an agent to navigate from one point to another in a game world while avoiding obstacles and finding the most efficient route. Whether it's an enemy chasing the player, a friendly NPC moving to a quest objective, or a unit in a strategy game, effective pathfinding is essential for believable and functional AI.

At its core, pathfinding is a graph search problem. We represent the game world as a **graph**, where locations are **nodes** (or vertices) and the possible movements between them are **edges** (or connections). Each edge can have a **weight** or **cost**, representing factors like distance, terrain difficulty, or time taken to traverse. For grid-based games (like many RPGs or strategy games), each cell on the grid can be a node, and movement between adjacent cells forms edges. For more complex environments, navigation meshes or waypoints can be used to define the graph.

Let's begin with **Dijkstra's Algorithm**, a classic algorithm for finding the shortest paths between nodes in a graph, particularly useful when edge weights are non-negative. Dijkstra's works by systematically exploring the graph, maintaining a set of visited nodes and a record of the shortest distance found so far from the starting node to every other node. It always expands the unvisited node with the smallest known distance.

Here's how Dijkstra's algorithm generally proceeds:
1.  Initialize the distance to the start node as 0 and all other nodes as infinity.
2.  Maintain a priority queue (or min-heap) of unvisited nodes, ordered by their current shortest distance.
3.  While the priority queue is not empty:
    a.  Extract the node `u` with the smallest distance from the priority queue.
    b.  Mark `u` as visited.
    c.  For each neighbor `v` of `u`:
        i.  If `v` is not visited and the distance to `u` plus the cost of the edge `u-v` is less than the current recorded distance to `v`, update `v`'s distance.
        ii. Add or update `v` in the priority queue.

Dijkstra's guarantees finding the shortest path in graphs with non-negative edge weights. Its main limitation for game AI is that it explores in all directions, radiating outwards from the start node until it finds the target. This can be inefficient for large maps where the target is far away, as it explores many irrelevant paths.

Consider a simple grid-based example for Dijkstra's. We'll represent the grid with `(row, col)` tuples.

```python
import heapq

def dijkstra(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    # dist[node] = shortest distance from start to node
    dist = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    dist[start] = 0
    
    # parent[node] = previous node in the shortest path
    parent = {}

    # priority queue: (distance, node)
    pq = [(0, start)]
    
    # Directions for 4-way movement (up, down, left, right)
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while pq:
        d, (r, c) = heapq.heappop(pq)

        # If we already found a shorter path to (r,c), skip
        if d > dist[(r, c)]:
            continue

        # If we reached the end, reconstruct path
        if (r, c) == end:
            path = []
            curr = end
            while curr != start:
                path.append(curr)
                curr = parent[curr]
            path.append(start)
            return path[::-1] # Reverse to get start-to-end path

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            
            # Check boundaries and if it's a valid path (e.g., not an obstacle)
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != '#': # '#' denotes obstacle
                # Cost to move to neighbor (assume 1 for empty cells, more for difficult terrain)
                move_cost = 1 
                
                if dist[(r, c)] + move_cost < dist[(nr, nc)]:
                    dist[(nr, nc)] = dist[(r, c)] + move_cost
                    parent[(nr, nc)] = (r, c)
                    heapq.heappush(pq, (dist[(nr, nc)], (nr, nc)))
    
    return None # No path found

# Example Grid: '.' is path, '#' is obstacle
# S = Start, E = End
grid_map = [
    ['.', '.', '.', '.', '.'],
    ['.', '#', '.', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '.', '#', '.'],
    ['.', '.', '.', '.', '.']
]

start_node = (0, 0)
end_node = (4, 4)

# Pathfinding with Dijkstra
# path = dijkstra(grid_map, start_node, end_node)
# if path:
#     print("Dijkstra Path:", path)
# else:
#     print("No path found by Dijkstra.")
```

This brings us to **A* (A-star) Search**, arguably the most popular and powerful pathfinding algorithm in games. A* is an "informed search" algorithm, meaning it uses a **heuristic function** to guide its search towards the goal. Unlike Dijkstra's, which explores indiscriminately, A* prioritizes exploring nodes that are likely to be on the shortest path.

A* evaluates each node `n` using a cost function `f(n) = g(n) + h(n)`:
*   `g(n)`: The actual cost of the path from the start node to `n`. This is the same as the distance calculated by Dijkstra's.
*   `h(n)`: The estimated cost (heuristic) of the path from node `n` to the end node. This is where the "informed" part comes in. A good heuristic estimates this cost without actually computing the full path.

For A* to guarantee finding the shortest path (i.e., be *optimal*), the heuristic function `h(n)` must be **admissible** (never overestimates the true cost to the goal) and ideally **consistent** (monotonically non-decreasing along any path). Common admissible heuristics for grid-based movement include:
*   **Manhattan Distance:** `abs(n.x - end.x) + abs(n.y - end.y)` (for 4-way movement).
*   **Euclidean Distance:** `sqrt((n.x - end.x)^2 + (n.y - end.y)^2)` (for 8-way movement or continuous spaces).

The A* algorithm proceeds very similarly to Dijkstra's, but it uses `f(n)` as the priority for its queue instead of just `g(n)`. This means it will prioritize nodes that are both close to the start (`g(n)` is small) and close to the end (`h(n)` is small). A common mistake is using a non-admissible heuristic, which can lead to A* finding a path quickly but not necessarily the *shortest* path. Another pitfall is a heuristic that is too complex to compute, negating the performance benefits.

Let's adapt our Dijkstra's code to A*:

```python
def a_star(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    
    # Heuristic function (Manhattan distance for 4-way movement)
    def heuristic(node_a, node_b):
        return abs(node_a[0] - node_b[0]) + abs(node_a[1] - node_b[1])

    # g_score[node] = cost from start to node
    g_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    g_score[start] = 0

    # f_score[node] = g_score[node] + heuristic(node, end)
    f_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    f_score[start] = heuristic(start, end)
    
    parent = {} # To reconstruct path

    # priority queue: (f_score, node)
    pq = [(f_score[start], start)]
    
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # 4-way movement

    while pq:
        current_f, (r, c) = heapq.heappop(pq)

        if (r, c) == end:
            path = []
            curr = end
            while curr != start:
                path.append(curr)
                curr = parent[curr]
            path.append(start)
            return path[::-1]

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != '#':
                move_cost = 1 # Assuming uniform cost for now
                
                tentative_g_score = g_score[(r, c)] + move_cost
                
                if tentative_g_score < g_score[(nr, nc)]:
                    parent[(nr, nc)] = (r, c)
                    g_score[(nr, nc)] = tentative_g_score
                    f_score[(nr, nc)] = g_score[(nr, nc)] + heuristic((nr, nc), end)
                    heapq.heappush(pq, (f_score[(nr, nc)], (nr, nc)))
    
    return None

# Example Grid (same as before)
# path_a_star = a_star(grid_map, start_node, end_node)
# if path_a_star:
#     print("A* Path:", path_a_star)
# else:
#     print("No path found by A*.")
```

In many game scenarios, A* is preferred over Dijkstra's because it's significantly more efficient for goal-directed searches, especially in large environments. Dijkstra's is still valuable when you need to find the shortest path from a single source to *all* other nodes (e.g., calculating influence maps), or when no good heuristic is available. For dynamic environments where obstacles appear and disappear, both algorithms might need to be re-run, or more advanced techniques like incremental pathfinding or hierarchical pathfinding (e.g., HPA*) can be employed for performance optimization. Safety note: for real-time games, pathfinding can be computationally intensive. It's crucial to optimize your graph representation, use efficient data structures (like priority queues), and consider running pathfinding on separate threads or at lower frequencies for distant targets to avoid framerate drops.

#### Key concepts
*   **Pathfinding:** The process of finding a route between two points in a game environment, often avoiding obstacles and optimizing for distance or cost.
*   **Graph:** A mathematical structure representing a set of objects (nodes) where some pairs of the objects are connected by links (edges).
*   **Node (Vertex):** A point or location in a graph.
*   **Edge (Connection):** A link between two nodes in a graph, often with an associated cost or weight.
*   **Dijkstra's Algorithm:** A graph search algorithm that finds the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights. It explores outwards in all directions.
*   **A* (A-star) Search:** An informed graph search algorithm that finds the shortest path between a start and end node. It uses a heuristic function to guide its search, making it more efficient than Dijkstra's for goal-directed searches.
*   **Heuristic Function (`h(n)`):** An estimate of the cost from a given node `n` to the goal node.
*   **Cost Function (`f(n)`):** In A*, `f(n) = g(n) + h(n)`, where `g(n)` is the actual cost from the start to `n`, and `h(n)` is the estimated cost from `n` to the goal.
*   **Admissible Heuristic:** A heuristic that never overestimates the true cost to reach the goal. Essential for A* to guarantee optimality.
*   **Manhattan Distance:** A common admissible heuristic for grid-based pathfinding, calculated as `abs(x1-x2) + abs(y1-y2)`.

#### Hands-on activity
**Activity: Implement A* with Different Heuristics**

**Goal:** Modify the provided A* implementation to use both Manhattan and Euclidean heuristics and observe their impact on pathfinding in a grid.

**Scenario:** You have a grid map with obstacles. Your task is to implement the `heuristic` function for both Manhattan and Euclidean distances and then run A* with each to see the path found.

**Starter Code:**
```python
import heapq
import math

def a_star_with_heuristic(grid, start, end, heuristic_type="manhattan"):
    rows, cols = len(grid), len(grid[0])
    
    def manhattan_heuristic(node_a, node_b):
        return abs(node_a[0] - node_b[0]) + abs(node_a[1] - node_b[1])

    def euclidean_heuristic(node_a, node_b):
        return math.sqrt((node_a[0] - node_b[0])**2 + (node_a[1] - node_b[1])**2)

    # --- YOUR CODE STARTS HERE ---
    # Select the heuristic function based on heuristic_type
    if heuristic_type == "manhattan":
        h_func = manhattan_heuristic
    elif heuristic_type == "euclidean":
        h_func = euclidean_heuristic
    else:
        raise ValueError("Invalid heuristic type. Choose 'manhattan' or 'euclidean'.")
    # --- YOUR CODE ENDS HERE ---

    g_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    g_score[start] = 0

    f_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    f_score[start] = h_func(start, end) # Use the selected heuristic
    
    parent = {}

    pq = [(f_score[start], start)]
    
    # Directions for 8-way movement (for Euclidean, though Manhattan typically uses 4)
    # For this exercise, let's stick to 4-way for simplicity in grid paths
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] 

    while pq:
        current_f, (r, c) = heapq.heappop(pq)

        if (r, c) == end:
            path = []
            curr = end
            while curr != start:
                path.append(curr)
                curr = parent[curr]
            path.append(start)
            return path[::-1]

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != '#':
                move_cost = 1 
                
                tentative_g_score = g_score[(r, c)] + move_cost
                
                if tentative_g_score < g_score[(nr, nc)]:
                    parent[(nr, nc)] = (r, c)
                    g_score[(nr, nc)] = tentative_g_score
                    f_score[(nr, nc)] = g_score[(nr, nc)] + h_func((nr, nc), end) # Use the selected heuristic
                    heapq.heappush(pq, (f_score[(nr, nc)], (nr, nc)))
    
    return None

# Example Grid: '.' is path, '#' is obstacle
grid_map = [
    ['.', '.', '.', '.', '.'],
    ['.', '#', '.', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '.', '#', '.'],
    ['.', '.', '.', '.', '.']
]

start_node = (0, 0)
end_node = (4, 4)

print("--- A* with Manhattan Heuristic ---")
path_manhattan = a_star_with_heuristic(grid_map, start_node, end_node, heuristic_type="manhattan")
if path_manhattan:
    print("Path:", path_manhattan)
else:
    print("No path found.")

print("\n--- A* with Euclidean Heuristic ---")
path_euclidean = a_star_with_heuristic(grid_map, start_node, end_node, heuristic_type="euclidean")
if path_euclidean:
    print("Path:", path_euclidean)
else:
    print("No path found.")

# Observe: For 4-way grid movement, Manhattan distance is often more accurate
# as it reflects the actual number of grid steps. Euclidean might explore slightly
# more nodes if it's not perfectly aligned with grid movement costs.
```

#### Assessment idea
1.  **Question:** A game level features a large, open plain with a distant objective, but also a small, dense forest with winding paths and varying terrain costs. For which part of the map would Dijkstra's algorithm be significantly less efficient than A* search, and why?
    *   **Correct Answer:** Dijkstra's algorithm would be significantly less efficient than A* search for finding a path across the **large, open plain to a distant objective**. Dijkstra's explores outwards in all directions from the start node until it reaches the target. In a large, open area, it would waste computational resources exploring many paths that lead away from the objective. A*, on the other hand, uses a heuristic (like Manhattan or Euclidean distance) to estimate the distance to the goal, allowing it to prioritize nodes that are closer to the objective and thus "cut corners" in its search, making it much more efficient for goal-directed pathfinding in vast, open spaces. For the dense forest with varying terrain costs, both might perform similarly well if the heuristic is not perfectly aligned with the complex costs, but A* would still likely have an edge due to its goal-directed nature.
2.  **Question:** You are implementing A* for a game where units can move diagonally (8 directions) on a grid. Which heuristic function (Manhattan or Euclidean distance) would generally be more appropriate and why, assuming uniform movement cost for all 8 directions?
    *   **Correct Answer:** For 8-directional movement on a grid with uniform movement costs, the **Euclidean distance** heuristic (`sqrt((x1-x2)^2 + (y1-y2)^2)`) would generally be more appropriate. This is because Euclidean distance more accurately reflects the "as the crow flies" shortest possible distance in a continuous space, which aligns better with the possibility of diagonal movement. Manhattan distance, which only considers horizontal and vertical steps, would underestimate the cost in diagonal movements, potentially making it less accurate and less efficient for 8-way movement. While both can be admissible, Euclidean distance provides a tighter (more informed) estimate for diagonal movement, leading to A* exploring fewer nodes and finding the optimal path more quickly in such scenarios.

#### AI generation note
Create a 12-minute animated explainer video with interactive elements. Start by visualizing a simple grid graph. First, demonstrate Dijkstra's algorithm step-by-step, showing how it expands nodes equally in all directions, highlighting the `g_score` updates. Then, introduce A* by adding the `h_score` and `f_score` calculation, visually illustrating how the heuristic guides the search directly towards the target, showing fewer irrelevant nodes being explored. Use color-coding for `g_score`, `h_score`, and `f_score` values on the grid nodes. Include a segment explaining admissible heuristics with a visual comparison of Manhattan vs. Euclidean distance on a grid. The interactive element should be a mini-quiz asking learners to identify the correct heuristic for a given movement type (4-way vs. 8-way).

---

### Chapter 1.4 — Decision Making with Utility Functions and Goal-Oriented Action Planning (GOAP)

#### Learning objectives
*   Understand the concept of utility functions and how they are used to quantify the desirability of actions for an AI agent.
*   Design simple utility functions that consider multiple factors for decision-making.
*   Explain the core principles of Goal-Oriented Action Planning (GOAP) as an AI architecture.
*   Identify the key components of a GOAP system: world state, goals, actions, preconditions, and effects.
*   Implement a conceptual GOAP system to enable agents to plan sequences of actions to achieve dynamic goals.

#### Detailed lesson content
As we've explored reactive behaviors and pathfinding, it's time to elevate our game AI to more sophisticated decision-making. While FSMs and Behavior Trees are excellent for defining *how* an agent behaves, they can become rigid when an agent needs to dynamically choose *what* to do based on complex, changing circumstances and multiple competing objectives. This is where **Utility Functions** and **Goal-Oriented Action Planning (GOAP)** come into play, offering more flexible and emergent AI behaviors.

**Utility Functions** provide a quantitative approach to decision-making. Instead of hard-coded rules or state transitions, an agent evaluates all its possible actions at a given moment and assigns a numerical "utility score" to each. The action with the highest utility score is then chosen. This allows for nuanced decisions based on multiple, weighted factors. For example, an enemy might need to decide between `Attack`, `Heal`, or `Flee`. The utility of `Attack` might increase with the player's low health but decrease with the enemy's low health. The utility of `Heal` might increase significantly if the enemy's health is critical. The utility of `Flee` might be high if the enemy is outnumbered.

The power of utility systems lies in their flexibility. You can define utility curves, combine multiple factors (e.g., urgency, risk, reward, distance, resource availability) using weighted sums or more complex functions, and easily tweak these weights to change an AI's personality or strategy. A common mistake is using linear utility functions for everything; often, non-linear functions (e.g., exponential increase in utility for healing when health is very low) better reflect complex decision-making. Another pitfall is not normalizing utility scores, leading to one factor dominating all others.

Here's a conceptual Python example of a utility-based decision for an enemy:

```python
class EnemyUtilityAI:
    def __init__(self, health=100, ammo=10):
        self.health = health
        self.ammo = ammo
        self.player_distance = 10 # Example initial distance
        self.player_health = 100 # Example initial player health

    def calculate_attack_utility(self):
        utility = 0
        # Base utility for attacking
        utility += 50
        # Increase utility if player is close
        utility += max(0, 10 - self.player_distance) * 5
        # Increase utility if player is low health
        utility += max(0, 100 - self.player_health) * 0.5
        # Decrease utility if enemy has low ammo
        utility -= max(0, 10 - self.ammo) * 3
        # Decrease utility if enemy has low health
        utility -= max(0, 100 - self.health) * 0.2
        return max(0, utility) # Ensure non-negative utility

    def calculate_flee_utility(self):
        utility = 0
        # Base utility for fleeing
        utility += 10
        # Increase utility significantly if enemy health is very low
        if self.health < 30:
            utility += (30 - self.health) * 10
        # Increase utility if player is very close (high threat)
        if self.player_distance < 3:
            utility += (3 - self.player_distance) * 15
        return max(0, utility)

    def calculate_reload_utility(self):
        utility = 0
        # Base utility for reloading
        utility += 20
        # Increase utility significantly if ammo is low
        if self.ammo < 3:
            utility += (3 - self.ammo) * 20
        # Decrease utility if player is very close (dangerous to reload)
        if self.player_distance < 5:
            utility -= (5 - self.player_distance) * 10
        return max(0, utility)

    def make_decision(self):
        actions = {
            "Attack": self.calculate_attack_utility(),
            "Flee": self.calculate_flee_utility(),
            "Reload": self.calculate_reload_utility()
        }
        
        best_action = None
        max_utility = -float('inf')

        print(f"Current State: Health={self.health}, Ammo={self.ammo}, Player Dist={self.player_distance}, Player Health={self.player_health}")
        for action, utility in actions.items():
            print(f"  {action} Utility: {utility:.2f}")
            if utility > max_utility:
                max_utility = utility
                best_action = action
        
        print(f"Decision: {best_action} (Utility: {max_utility:.2f})")
        return best_action

# Example usage:
enemy_ai = EnemyUtilityAI(health=80, ammo=7)
enemy_ai.make_decision() # Likely Attack

enemy_ai.health = 20
enemy_ai.player_distance = 2
enemy_ai.make_decision() # Likely Flee

enemy_ai.health = 80
enemy_ai.ammo = 1
enemy_ai.player_distance = 10
enemy_ai.make_decision() # Likely Reload
```

While utility functions help choose the *next* best action, they don't inherently provide a way to plan a *sequence* of actions to achieve a long-term goal. This is where **Goal-Oriented Action Planning (GOAP)** comes in. GOAP is an AI architecture that allows agents to dynamically plan action sequences to achieve specific goals, much like a human plans to achieve an objective. It's particularly powerful for creating emergent and believable AI behavior in complex simulations or open-world games.

The core components of a GOAP system are:
1.  **World State:** A set of facts or propositions describing the current state of the game world (e.g., `has_axe=False`, `wood_collected=0`, `is_hungry=True`).
2.  **Goals:** Desired future world states (e.g., `has_wood=True`, `is_fed=True`). Goals are typically prioritized.
3.  **Actions:** Specific operations an agent can perform. Each action has:
    *   **Preconditions:** A set of world state facts that must be true for the action to be executable.
    *   **Effects:** A set of world state facts that become true (or false) after the action is executed.
    *   **Cost:** A numerical value representing the effort or time required to perform the action.

GOAP works by essentially performing a search (often A* or Dijkstra's) on a "planning graph" where nodes are world states and edges are actions. The planner starts with a goal and tries to find a sequence of actions that, when executed in reverse, transform the goal state into the current world state (backward chaining). Alternatively, it can start from the current world state and find a sequence that leads to the goal (forward chaining). The path with the lowest total action cost is the chosen plan.

For example, a GOAP agent might have a goal `has_wood=True`.
*   **Action: `ChopWood`**
    *   Preconditions: `has_axe=True`, `at_tree=True`
    *   Effects: `has_wood=True`
    *   Cost: 5
*   **Action: `GetAxe`**
    *   Preconditions: `at_blacksmith=True`
    *   Effects: `has_axe=True`
    *   Cost: 3
*   **Action: `GoToBlacksmith`**
    *   Preconditions: None
    *   Effects: `at_blacksmith=True`
    *   Cost: 2
*   **Action: `GoToTree`**
    *   Preconditions: None
    *   Effects: `at_tree=True`
    *   Cost: 1

If the current world state is `has_axe=False`, `at_tree=False`, `at_blacksmith=False`, and the goal is `has_wood=True`, the GOAP planner would construct a plan like: `GoToBlacksmith` -> `GetAxe` -> `GoToTree` -> `ChopWood`. This plan is then executed step-by-step. If the world state changes (e.g., someone else takes the axe), the plan becomes invalid, and the agent re-plans.

The main advantage of GOAP is its ability to generate emergent behaviors. Agents don't follow predefined scripts; they figure out how to achieve their goals dynamically. This leads to more believable and less predictable AI. It also makes AI development more modular, as you simply define actions and their effects, and the planner handles the sequencing. A common mistake is defining overly broad actions or preconditions/effects that are not specific enough, leading to illogical plans. Another challenge is the computational cost of planning in real-time; for very complex scenarios, GOAP might need optimizations like partial planning or hierarchical planning.

Both utility systems and GOAP offer powerful ways to create more intelligent and dynamic game AI. Utility functions are great for immediate, context-sensitive decisions, while GOAP excels at long-term, goal-driven strategic planning. Often, they are combined, where utility functions might help an agent choose which goal to pursue, and GOAP then plans how to achieve that chosen goal.

#### Key concepts
*   **Utility Function:** A numerical function that quantifies the desirability or "goodness" of an action or state for an AI agent, allowing it to choose the best option from a set of alternatives.
*   **Goal-Oriented Action Planning (GOAP):** An AI architecture where agents dynamically construct plans (sequences of actions) to achieve specific goals based on their current world state and available actions.
*   **World State:** A collection of facts or propositions that describe the current conditions and properties of the game environment relevant to the agent.
*   **Goal:** A desired future state of the world that an agent aims to achieve.
*   **Action:** A discrete operation an agent can perform, defined by its preconditions, effects, and cost.
*   **Preconditions:** The set of world state facts that must be true before an action can be executed.
*   **Effects:** The changes to the world state that occur after an action is successfully executed.
*   **Planning Graph:** A conceptual graph where nodes represent world states and edges represent actions, used by GOAP to search for a plan.
*   **Emergent Behavior:** Complex, intelligent behavior that arises from the interaction of simpler rules or components, often a hallmark of GOAP.

#### Hands-on activity
**Activity: Design a Simple GOAP Action Set**

**Goal:** Define a set of GOAP actions, including their preconditions, effects, and costs, for a "Survivalist" NPC whose primary goal is to `is_fed=True`.

**Scenario:** The Survivalist NPC needs to eat. They can either `Hunt` for food or `Forage` for berries. Hunting requires a `has_weapon=True` and being `at_forest=True`. Foraging just requires being `at_forest=True`. They can `CraftWeapon` if they have `has_materials=True` and are `at_camp=True`. They can `GatherMaterials` if they are `at_forest=True`. They can `GoToForest` or `GoToCamp`.

Your task is to define the `preconditions`, `effects`, and `cost` for each action.

**Starter Code:**
```python
class GOAPAction:
    def __init__(self, name, preconditions, effects, cost):
        self.name = name
        self.preconditions = preconditions  # Dictionary: {fact: bool_value}
        self.effects = effects              # Dictionary: {fact: bool_value}
        self.cost = cost

    def __str__(self):
        return (f"Action: {self.name}, Cost: {self.cost}\n"
                f"  Preconditions: {self.preconditions}\n"
                f"  Effects: {self.effects}")

# --- YOUR CODE STARTS HERE ---
# Define the actions for the Survivalist NPC

# Goal: {'is_fed': True}

# Actions:
# 1. Hunt
# 2. Forage
# 3. CraftWeapon
# 4. GatherMaterials
# 5. GoToForest
# 6. GoToCamp

actions = [
    GOAPAction(
        name="Hunt",
        preconditions={'has_weapon': True, 'at_forest': True, 'is_fed': False},
        effects={'is_fed': True, 'has_weapon': False}, # Weapon might break or be consumed
        cost=10
    ),
    GOAPAction(
        name="Forage",
        preconditions={'at_forest': True, 'is_fed': False},
        effects={'is_fed': True},
        cost=5
    ),
    GOAPAction(
        name="CraftWeapon",
        preconditions={'has_materials': True, 'at_camp': True, 'has_weapon': False},
        effects={'has_weapon': True, 'has_materials': False},
        cost=7
    ),
    GOAPAction(
        name="GatherMaterials",
        preconditions={'at_forest': True, 'has_materials': False},
        effects={'has_materials': True},
        cost=4
    ),
    GOAPAction(
        name="GoToForest",
        preconditions={'at_camp': True}, # Assuming starting at camp to go to forest
        effects={'at_forest': True, 'at_camp': False},
        cost=3
    ),
    GOAPAction(
        name="GoToCamp",
        preconditions={'at_forest': True}, # Assuming starting at forest to go to camp
        effects={'at_camp': True, 'at_forest': False},
        cost=2
    ),
    # Add an initial "Start" action for planning visualization if needed
    # GOAPAction(
    #     name="Start",
    #     preconditions={},
    #     effects={'at_camp': True}, # Initial state
    #     cost=0
    # )
]

# --- YOUR CODE ENDS HERE ---

# Print out the defined actions to verify
print("--- Survivalist NPC GOAP Actions ---")
for action in actions:
    print(action)
    print("-" * 30)

# Example initial world state:
initial_world_state = {
    'has_weapon': False,
    'has_materials': False,
    'at_forest': False,
    'at_camp': True,
    'is_fed': False
}

goal = {'is_fed': True}

print("\nInitial World State:", initial_world_state)
print("Goal:", goal)

# In a full GOAP system, a planner would now find a sequence of actions
# to transform the initial_world_state into the goal.
# For example, a plan might be: GoToForest -> GatherMaterials -> GoToCamp -> CraftWeapon -> GoToForest -> Hunt
# Or: GoToForest -> Forage (if no weapon needed)
```

#### Assessment idea
1.  **Question:** An enemy AI in a strategy game needs to decide whether to attack a player's base, retreat to heal, or gather resources. It has limited health, resources, and a current distance to the player's base. Explain how a utility function approach would allow this AI to make a dynamic decision, and provide an example of two factors that would increase the utility of "Attack Base."
    *   **Correct Answer:** A utility function approach would allow this AI to make a dynamic decision by assigning a numerical "utility score" to each possible action (Attack Base, Retreat to Heal, Gather Resources) based on the current game state. The AI would calculate these scores for all available actions and then choose the action with the highest utility. This allows for flexible, context-sensitive decisions rather than rigid rules. Two factors that would increase the utility of "Attack Base" could be:
        1.  **Player Base Health is Low:** If the player's base is close to being destroyed, the utility of attacking increases significantly, as it presents a high-reward, potentially game-ending opportunity.
        2.  **Enemy Army Strength is High (relative to Player Defense):** If the AI's army is significantly stronger than the player's current defenses, the chance of a successful attack is higher, thus increasing its utility.
        Other factors like "distance to base is low" or "AI has abundant resources" could also increase attack utility.
2.  **Question:** You are designing a GOAP system for a villager NPC whose goal is `has_food=True`. You have an action `BakeBread`. What would be appropriate **preconditions** and **effects** for this action?
    *   **Correct Answer:**
        *   **Preconditions:**
            *   `has_flour=True` (The villager needs flour to bake bread)
            *   `has_water=True` (Water is often needed for dough)
            *   `at_oven=True` (The villager must be at an oven to bake)
            *   `is_hungry=True` (Optional, but could ensure they only bake if needed for themselves or the village)
        *   **Effects:**
            *   `has_food=True` (The primary outcome of baking bread)
            *   `has_flour=False` (The flour is consumed)
            *   `has_water=False` (The water is consumed)
            *   `is_hungry=False` (If `is_hungry` was a precondition and they eat the bread)
            *   `oven_occupied=True` (Optional, for a multi-villager scenario, the oven might be busy for a duration)
        The preconditions describe what must be true *before* the action, and the effects describe what becomes true (or false) *after* the action.

#### AI generation note
Create an 11-minute mixed-media lesson. Start with an animated explanation of utility functions, showing a character making a decision by comparing "score bars" for different actions (e.g., Attack: 75, Flee: 20, Reload: 50). Then, transition to GOAP with a visual representation of a planning graph. Use a simple "gather wood" example, illustrating the world state, goals, actions, preconditions, and effects. Animate the planning process, showing how GOAP searches backward from the goal to the current state to build a plan. Include a side-by-side comparison of how a FSM might handle a situation versus a GOAP agent. The interactive element should be a drag-and-drop exercise where learners match preconditions and effects to a given action for a GOAP system.

---

