---
title: Microsoft Azure Cosmos DB Developer Specialty (DP-420)
course_id: microsoft-azure-cosmos-db-developer-specialty-dp-420
provider: Cohortia
original_reference: Microsoft / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Databases
skills: Azure Cosmos DB, NoSQL, Data Modeling, SDK Development, Performance Optimization, Global Distribution, Azure Functions, Change Feed, Security, Monitoring
ownership_note: Cohortia curates and rebuilds content to provide an enhanced learning experience and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the Cohortia course on Microsoft Azure Cosmos DB Developer Specialty (DP-420)! This comprehensive program is meticulously designed for developers, data engineers, and architects who aim to master Azure Cosmos DB, Microsoft's globally distributed, multi-model database service. Whether you're building high-performance, globally scalable applications or preparing for the DP-420 certification exam, this course provides the foundational and advanced knowledge necessary to succeed. We will explore the unique capabilities of Cosmos DB, from its robust consistency models and partitioning strategies to its flexible APIs and seamless integration with the broader Azure ecosystem.

Throughout this course, you will gain hands-on experience in designing, implementing, and monitoring cloud-native applications that leverage Azure Cosmos DB. We'll dive deep into data modeling techniques specific to NoSQL databases, understanding how to optimize for performance and cost. You'll learn to develop applications using the Azure Cosmos DB SDKs for popular programming languages, performing CRUD operations, executing complex queries, and utilizing advanced features like stored procedures, triggers, and the change feed. Our focus will be on practical application, ensuring you can translate theoretical knowledge into real-world solutions.

The curriculum is structured to progressively build your expertise, starting with core concepts and gradually moving towards advanced topics such as global distribution, security best practices, and performance tuning. We will also cover essential operational aspects, including monitoring with Azure Monitor, managing throughput, and implementing disaster recovery strategies. By the end of this course, you will not only be proficient in developing with Azure Cosmos DB but also well-prepared to tackle the challenges of modern data management and achieve the Microsoft Azure Cosmos DB Developer Specialty certification.

This Cohortia course emphasizes a practical, hands-on approach, providing numerous code examples, lab exercises, and real-world scenarios. We encourage an interactive learning environment where you can experiment, troubleshoot, and solidify your understanding. Join us on this journey to become an expert in Azure Cosmos DB, empowering you to build resilient, scalable, and high-performance applications that meet the demands of today's global digital landscape.

Upon completion of this course, you will be able to:
*   Understand the core concepts of Azure Cosmos DB, including its APIs, consistency models, and resource hierarchy.
*   Design efficient and scalable data models for Azure Cosmos DB, incorporating effective partitioning and indexing strategies.
*   Develop robust applications using Azure Cosmos DB SDKs for various programming languages (e.g., .NET, Python, Java).
*   Implement CRUD operations, advanced queries, stored procedures, and transactions within Cosmos DB applications.
*   Integrate Azure Cosmos DB with other Azure services like Azure Functions and Stream Analytics to build event-driven solutions.
*   Optimize Cosmos DB solutions for performance and cost, utilizing features like autoscale throughput and monitoring tools.
*   Implement security best practices and maintain Cosmos DB solutions through backup, restore, and disaster recovery strategies.
*   Prepare effectively for the Microsoft Azure Cosmos DB Developer Specialty (DP-420) certification exam.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Introduction to Azure Cosmos DB and Core Concepts | 3 |
| 2 | Designing and Implementing Data Models | 3 |
| 3 | Developing Applications with Azure Cosmos DB SDKs | 4 |
| 4 | Advanced Application Development and Integration | 4 |
| 5 | Optimizing and Monitoring Azure Cosmos DB | 5 |
| 6 | Maintaining and Securing Azure Cosmos DB Solutions | 5 |

Total chapters: 24
---

## Module 1: Introduction to Azure Cosmos DB and Core Concepts

**Module Goal:** This module provides a comprehensive introduction to Azure Cosmos DB, exploring its unique capabilities as a globally distributed, multi-model database service, and establishing a foundational understanding of its core components and cost model.

---

### Chapter 1.1 — What is Azure Cosmos DB? An Overview of its Global Scale and Multi-Model Nature

#### Learning objectives
*   Explain the core value proposition of Azure Cosmos DB in modern application development.
*   Identify and describe the key features of Azure Cosmos DB, including global distribution, multi-model capabilities, and guaranteed performance.
*   Discuss common use cases where Azure Cosmos DB excels due to its unique architecture.
*   Understand the distinction between traditional NoSQL databases and Azure Cosmos DB's multi-model approach.

#### Detailed lesson content
Modern applications face unprecedented demands: they must be globally accessible, highly responsive, always available, and capable of handling massive volumes of data with fluctuating throughput. Traditional database systems, whether relational or even many single-model NoSQL databases, often struggle to meet these requirements without significant architectural complexity and operational overhead. This is precisely the challenge Azure Cosmos DB was designed to solve. Azure Cosmos DB is Microsoft's globally distributed, multi-model database service, built from the ground up to provide guaranteed low-latency access, high availability, and elastic scalability for applications worldwide. It's not just another NoSQL database; it's a platform that supports multiple NoSQL APIs, allowing developers to choose the best data model and query language for their specific application needs while benefiting from the underlying globally distributed, highly performant infrastructure.

One of the most compelling features of Azure Cosmos DB is its turnkey global distribution. Imagine needing to deploy your application's data across multiple Azure regions—say, North America, Europe, and Asia—to ensure low latency for users in each geography and provide disaster recovery capabilities. With many databases, this would involve complex replication setups, data synchronization challenges, and significant operational burden. Cosmos DB simplifies this immensely, allowing you to distribute your data with a few clicks in the Azure portal or a simple API call. Data is replicated asynchronously across the chosen regions, and you can configure your application to read from the nearest replica and even write to multiple regions, providing both low latency and high availability. This global distribution is not just about availability; it's about bringing data closer to your users, drastically reducing read and write latencies, which is crucial for interactive, real-time applications.

Beyond global distribution, Azure Cosmos DB's multi-model capability is a game-changer. Instead of being locked into a single data model, Cosmos DB supports several popular NoSQL APIs, each optimized for different use cases. You can interact with Cosmos DB using the Core (SQL) API for document data, which is JSON-based and offers a SQL-like query language. For applications already built for MongoDB, Cassandra, or Gremlin (graph database), Cosmos DB provides compatible APIs, meaning you can migrate existing applications with minimal code changes and leverage Cosmos DB's global scale and performance guarantees. There's also an Azure Table API for key-value data, offering a highly scalable alternative to Azure Table Storage. This flexibility allows developers to choose the right tool for the job within a single, unified, and fully managed database service, eliminating the need to manage multiple disparate database technologies.

The performance guarantees offered by Azure Cosmos DB are another cornerstone of its appeal. It provides comprehensive service level agreements (SLAs) for throughput, latency, availability, and consistency. For instance, it guarantees single-digit millisecond latency for point reads and writes at the 99th percentile, which is critical for real-time applications like IoT, gaming, and retail. This predictable performance is achieved through its unique resource governance model based on Request Units (RUs), which we will explore in detail in a later chapter. Furthermore, Cosmos DB offers five well-defined consistency models, from eventual to strong, allowing developers to choose the right balance between consistency, availability, and latency for different parts of their application. Understanding these consistency models is vital for designing robust and performant applications on Cosmos DB.

Common mistakes often arise from treating Cosmos DB like a traditional relational database or even a generic NoSQL store. Developers might try to model highly normalized data or perform complex joins across different containers, which can be inefficient and costly in a document database designed for denormalization and embedded data. Another frequent error is underestimating the impact of global distribution on data consistency, especially when operating in multi-write regions. While Cosmos DB handles much of the complexity, understanding the nuances of eventual consistency and conflict resolution strategies is crucial for data integrity. Safety notes for developers include always considering the impact of data modeling choices on RU consumption and understanding how consistency levels affect application behavior, especially when dealing with critical financial or inventory data.

In essence, Azure Cosmos DB is designed for modern, cloud-native applications that demand global reach, elastic scalability, predictable performance, and high availability. Its use cases span a wide range, from IoT device telemetry and real-time analytics to e-commerce product catalogs, gaming leaderboards, and personalized experiences. It empowers developers to focus on building innovative features rather than spending time on database administration, scaling, and global deployment complexities.

#### Key concepts
*   **Azure Cosmos DB:** Microsoft's globally distributed, multi-model database service for mission-critical applications.
*   **Global Distribution:** The ability to easily distribute and replicate data across multiple Azure regions for low latency and high availability.
*   **Multi-Model:** Support for various data models and APIs (e.g., Core (SQL) API for documents, MongoDB API, Cassandra API, Gremlin API for graphs, Azure Table API for key-value).
*   **NoSQL:** A category of databases that store data in formats other than relational tables, offering flexible schemas and horizontal scalability.
*   **Service Level Agreements (SLAs):** Guaranteed performance metrics for throughput, latency, availability, and consistency provided by Azure Cosmos DB.
*   **Request Units (RUs):** The performance currency in Azure Cosmos DB, representing the cost of database operations.
*   **Consistency Models:** Different levels of data consistency offered by Cosmos DB (e.g., Strong, Bounded Staleness, Session, Consistent Prefix, Eventual).

#### Hands-on activity
**Activity: Create a Free-Tier Azure Cosmos DB Account**

1.  **Objective:** Get hands-on experience navigating the Azure portal to provision a basic Azure Cosmos DB account.
2.  **Steps:**
    *   Log in to the Azure portal (portal.azure.com).
    *   In the search bar, type "Azure Cosmos DB" and select it from the services.
    *   Click "Create" to start creating a new Cosmos DB account.
    *   Select "Azure Cosmos DB for NoSQL" (Core SQL API) as the API.
    *   Choose your Azure subscription and create a new resource group (e.g., `cosmosdb-intro-rg`).
    *   Provide an account name (must be globally unique, e.g., `mycosmosdbaccount12345`).
    *   Select a region close to you (e.g., `East US`).
    *   Crucially, under "Capacity mode," select "Serverless" for a cost-effective introduction, or "Provisioned throughput" and enable "Free Tier Discount" if available.
    *   Leave other settings as default for now.
    *   Review and click "Create." Wait for the deployment to complete.
    *   Once deployed, navigate to your new Cosmos DB account in the portal and explore its overview blade.

#### Assessment idea
1.  **Question:** Your company is developing a new global e-commerce platform that needs to serve users with single-digit millisecond latency for product catalog lookups and order processing, regardless of their geographical location. Which core feature of Azure Cosmos DB makes it uniquely suited for this requirement?
    *   **Correct Answer:** Global distribution. Azure Cosmos DB's turnkey global distribution allows data to be replicated across multiple Azure regions, bringing data physically closer to users worldwide. This significantly reduces network latency for both reads and writes, ensuring a highly responsive user experience across different geographies, which is critical for an e-commerce platform with global reach.
2.  **Question:** A development team wants to migrate an existing application that uses MongoDB to Azure Cosmos DB. They are concerned about rewriting their data access layer. How does Azure Cosmos DB address this concern?
    *   **Correct Answer:** Azure Cosmos DB's multi-model capability includes a MongoDB API compatibility layer. This means the development team can connect their existing MongoDB application to Azure Cosmos DB with minimal to no code changes, leveraging their existing MongoDB drivers and tools. Cosmos DB will interpret MongoDB commands and store the data as documents, providing a seamless migration path while benefiting from Cosmos DB's underlying global distribution and performance guarantees.

#### AI generation note
Create an 8-minute animated explainer video. Start with a visual problem statement showing a global user base struggling with latency. Then introduce Azure Cosmos DB as the solution, visually demonstrating global data replication with animated lines connecting regions on a world map. Highlight the multi-model aspect by showing different API icons (SQL, MongoDB, Cassandra, Gremlin) converging into a single Cosmos DB logo. Use simple, clear diagrams to illustrate consistency models and the concept of RUs without going into deep detail yet. The tone should be inspiring and beginner-friendly. Include a call to action to explore the Azure portal.

---

### Chapter 1.2 — Understanding Core Concepts: Databases, Containers, and Items

#### Learning objectives
*   Differentiate between an Azure Cosmos DB account, database, container, and item.
*   Explain the role and importance of a partition key in Azure Cosmos DB.
*   Describe how logical and physical partitions are used for data distribution and scalability.
*   Identify characteristics of a well-chosen partition key and the potential pitfalls of a poor choice.

#### Detailed lesson content
To effectively work with Azure Cosmos DB, it's crucial to understand its hierarchical structure and the fundamental components that govern how data is stored, scaled, and accessed. At the highest level, you have an **Azure Cosmos DB account**. This is the basic unit of global distribution and high availability. Within an account, you can create one or more **databases**. A database in Cosmos DB is a logical namespace for your containers, similar to a schema in a relational database. It's a way to group related data stores together. For instance, you might have a `Users` database and a `Products` database within the same Cosmos DB account.

The most critical component for understanding scalability and throughput in Azure Cosmos DB is the **container**. Depending on the API you choose, a container might be referred to as a collection (for MongoDB API), a table (for Cassandra or Azure Table API), or a graph (for Gremlin API). Regardless of the name, the container is the fundamental unit of scalability and throughput provisioning. All the items within a container share the same provisioned throughput and are automatically partitioned across physical servers. This automatic partitioning is what allows Cosmos DB to scale horizontally to handle massive amounts of data and requests.

Inside a container, you store **items**. An item is the actual data record within your database, and its structure varies based on the API. For the Core (SQL) API, an item is a JSON document. For the Gremlin API, it's a node or an edge. For the Cassandra API, it's a row. Each item in a container must have a unique identifier, typically an `id` property. When you interact with Cosmos DB, you're primarily working with these items within a specific container.

The concept of **partitioning** is central to Cosmos DB's scalability. When you create a container, you must specify a **partition key**. This is a property within your items that Cosmos DB uses to distribute data across different logical partitions. For example, if you're storing user profiles, `userId` might be a good partition key. All items with the same `userId` value will reside in the same **logical partition**. Cosmos DB then maps these logical partitions to **physical partitions**, which are the actual storage and compute resources (servers) that hold your data. As your data grows or your throughput needs increase, Cosmos DB transparently adds more physical partitions to accommodate the load, distributing your logical partitions across them.

Choosing an effective partition key is paramount for optimal performance and cost-efficiency. A good partition key should have high cardinality, meaning it has a large number of distinct values. This ensures that your data is evenly distributed across many logical partitions, preventing a single partition from becoming too large or receiving too many requests (a "hot partition"). It should also be a property that is frequently used in queries, especially point reads, as querying for items within a single logical partition is much more efficient than querying across multiple partitions. For example, if you frequently retrieve a user's entire profile, `userId` is an excellent partition key because all data for that user will be co-located.

A common mistake is choosing a partition key with low cardinality, such as `country` for a global application. If you only have a few countries, all data for a specific country will end up in the same logical partition. If users from one country generate significantly more traffic, that single partition will become a bottleneck, leading to throttling and poor performance, even if other partitions are underutilized. This is known as a "hot partition." Another mistake is choosing a key that is rarely used in queries, forcing Cosmos DB to scan multiple logical partitions (a "cross-partition query"), which is more expensive in terms of Request Units (RUs) and latency.

Consider a practical scenario: storing product reviews. If you choose `productId` as the partition key, all reviews for a specific product will be in the same logical partition. This is efficient if you frequently query for all reviews of a particular product. However, if you need to query for "all reviews by a specific user across all products," `userId` might be a better partition key, or you might consider a different data modeling strategy, such as duplicating data or using a separate container partitioned by `userId`. The decision depends heavily on your application's read and write patterns. Safety notes include always testing your data model and partition key choices with realistic workloads to identify potential hot spots and optimize RU consumption before deploying to production.

#### Key concepts
*   **Account:** The top-level resource in Azure Cosmos DB, providing global distribution and high availability.
*   **Database:** A logical container for one or more Cosmos DB containers.
*   **Container:** The fundamental unit of scalability and throughput provisioning in Cosmos DB (e.g., Collection, Table, Graph). All items within a container share the same partition key and throughput.
*   **Item:** The actual data record stored within a container (e.g., Document, Row, Node, Edge).
*   **Partition Key:** A property within an item that determines the logical partition an item belongs to, crucial for data distribution and scalability.
*   **Logical Partition:** A set of items that share the same partition key value.
*   **Physical Partition:** The actual storage and compute resources managed by Cosmos DB that host one or more logical partitions.
*   **Hot Partition:** A logical or physical partition that receives a disproportionately high volume of requests, leading to performance bottlenecks.

#### Hands-on activity
**Activity: Create a Cosmos DB Database and Container with a Partition Key using Azure CLI**

1.  **Objective:** Practice creating Cosmos DB resources programmatically and defining a partition key.
2.  **Prerequisites:** Azure CLI installed and logged in (`az login`).
3.  **Steps:**
    *   **Set variables:**
        ```bash
        RESOURCE_GROUP="cosmosdb-intro-rg" # Use the same RG from Chapter 1.1
        ACCOUNT_NAME="mycosmosdbaccount12345" # Use your account name from Chapter 1.1
        DATABASE_NAME="UserManagementDB"
        CONTAINER_NAME="Users"
        PARTITION_KEY_PATH="/userId" # Define the partition key path
        ```
    *   **Create a Cosmos DB Database:**
        ```bash
        az cosmosdb sql database create \
            --account-name $ACCOUNT_NAME \
            --resource-group $RESOURCE_GROUP \
            --name $DATABASE_NAME
        ```
    *   **Create a Cosmos DB Container with a Partition Key:**
        ```bash
        az cosmosdb sql container create \
            --account-name $ACCOUNT_NAME \
            --resource-group $RESOURCE_GROUP \
            --database-name $DATABASE_NAME \
            --name $CONTAINER_NAME \
            --partition-key-path $PARTITION_KEY_PATH \
            --throughput 400 # Provision 400 RUs for demonstration
        ```
    *   **Verify in Portal:** Navigate to your Cosmos DB account in the Azure portal, then to `UserManagementDB`, and verify that the `Users` container has been created with `/userId` as its partition key.

#### Assessment idea
1.  **Question:** You are designing a container to store customer orders. Each order has a unique `orderId`, a `customerId`, and an `orderDate`. You anticipate queries primarily for all orders placed by a specific customer. Which property would be the most appropriate choice for the partition key for this container, and why?
    *   **Correct Answer:** `customerId`. By using `customerId` as the partition key, all orders for a particular customer will be co-located within the same logical partition. This makes queries for "all orders by a specific customer" highly efficient, as Cosmos DB can retrieve all relevant data from a single partition, minimizing RU consumption and latency. If `orderId` were chosen, each order would likely be in its own partition, making cross-partition queries necessary to retrieve all orders for a customer.
2.  **Question:** A developer observes that their Cosmos DB container is experiencing high latency and throttling errors, even though the total provisioned throughput for the account seems sufficient. Upon investigation, they find that a small subset of partition key values is receiving the vast majority of requests. What is this phenomenon called, and what is its primary cause?
    *   **Correct Answer:** This phenomenon is called a "hot partition." It occurs when a partition key is chosen that results in an uneven distribution of data or, more commonly, an uneven distribution of workload across logical partitions. If a few partition key values receive significantly more read or write operations than others, the physical partition hosting those logical partitions becomes overloaded, leading to performance bottlenecks, increased latency, and throttling (HTTP 429 errors). The primary cause is a partition key that does not distribute the workload evenly across the available partitions.

#### AI generation note
Create a 12-minute interactive diagram and live coding demo. Start with an animated diagram illustrating the hierarchy: Account -> Database -> Container -> Item. Then focus on partitioning, showing how a partition key (`/userId`) maps items to logical partitions, and how logical partitions are distributed across physical partitions. Use a split-screen view for a live coding demo: on the left, show C# or Python code creating a container with a partition key and inserting sample items; on the right, show the Azure portal reflecting these changes and visualizing the partition key. Include a specific common mistake scenario where a poor partition key (`/country`) leads to a hot partition, visually demonstrating the imbalance. End with a reflection prompt asking learners to consider partition keys for their own data.

---

### Chapter 1.3 — Request Units (RUs) and Throughput Provisioning

#### Learning objectives
*   Define Request Units (RUs) and explain how they are consumed by various database operations.
*   Identify factors that influence the RU cost of an operation.
*   Compare and contrast manual, autoscale, and serverless throughput provisioning models.
*   Explain how to monitor RU consumption and handle throttling in Azure Cosmos DB.

#### Detailed lesson content
One of the most fundamental concepts for managing cost and performance in Azure Cosmos DB is the **Request Unit (RU)**. Think of an RU as a performance currency. Every operation you perform against your Cosmos DB account—whether it's a read, write, query, or even executing a stored procedure—consumes a certain number of RUs. Instead of thinking about CPU, memory, or I/O operations, you simply provision RUs, and Cosmos DB translates that into the underlying resources needed to guarantee your performance. This abstraction simplifies capacity planning immensely. The RU cost of an operation is influenced by several factors, including the size of the item (larger items consume more RUs), the complexity of the query (e.g., filtering, ordering, aggregation), the number of properties being indexed, and the type of operation (writes are generally more expensive than point reads).

Understanding how RUs are consumed is critical for optimizing your application. A simple point read (fetching an item by its ID and partition key) might cost 1 RU. A simple write operation (inserting a small item) might cost 5-10 RUs. However, a complex query that scans a large portion of your container, performs aggregations, or uses multiple filters without appropriate indexing could easily cost hundreds or thousands of RUs. For example, if you have a container of `Product` items, a point read like `SELECT * FROM c WHERE c.id = 'P123' AND c.category = 'Electronics'` (assuming `category` is the partition key) will be very cheap. But a cross-partition query like `SELECT * FROM c WHERE c.price > 1000 ORDER BY c.price` might be significantly more expensive, especially if `price` is not indexed or if it needs to scan many partitions. Cosmos DB provides the RU cost for every operation in the response headers, which is invaluable for debugging and optimization.

Azure Cosmos DB offers three primary models for provisioning throughput, each suited for different workload patterns:

1.  **Manual Throughput:** This is the traditional model where you explicitly specify the number of RUs per second (RU/s) you want to provision for a database or container. Cosmos DB guarantees that your application will have that capacity available. This model is ideal for workloads with predictable and consistent traffic patterns. You pay for the RUs you provision, regardless of whether you use them all. If your application exceeds the provisioned RUs, Cosmos DB will "throttle" requests, returning an HTTP 429 (Too Many Requests) error, indicating that you need to either retry the request later or increase your provisioned throughput.

2.  **Autoscale Throughput:** This model allows Cosmos DB to automatically and instantly scale the RUs of your database or container within a defined range. You specify a maximum RU/s, and Cosmos DB scales between 10% of that maximum and the maximum itself. For example, if you set autoscale to 4000 RU/s, it will scale between 400 and 4000 RU/s. This is incredibly cost-effective for workloads with variable or unpredictable traffic, as you only pay for the RUs you actually consume within your defined range, not for the peak capacity all the time. Autoscale helps prevent throttling by dynamically adjusting capacity.

3.  **Serverless:** This model is designed for bursty or infrequent workloads where you don't want to provision any throughput upfront. With serverless, you pay only for the RUs consumed by your database operations and the storage consumed by your data. There's no minimum RU/s to provision, and no charge for idle capacity. This is perfect for development/test environments, applications with sporadic usage, or small applications that don't require guaranteed low latency at all times. The trade-off is that serverless has a higher per-RU cost compared to provisioned throughput, and it comes with soft limits on maximum RUs per second, making it less suitable for high-volume, mission-critical production workloads that require strict latency guarantees.

Monitoring RU consumption is essential for cost management and performance tuning. The Azure portal provides detailed metrics on consumed RUs, throttled requests, and latency. You can also access RU consumption programmatically through the SDKs. When throttling occurs (HTTP 429), it's not necessarily an error; it's Cosmos DB's way of telling you that you've exceeded your provisioned capacity. Best practice dictates implementing robust retry logic in your application to gracefully handle 429 errors, often with an exponential backoff strategy, to allow Cosmos DB time to process the backlog or for autoscale to kick in. Common mistakes include ignoring throttling errors, leading to poor user experience, or over-provisioning RUs in manual mode, which results in unnecessary costs. Always right-size your throughput based on actual workload patterns, leveraging autoscale for variable loads.

#### Key concepts
*   **Request Unit (RU):** The performance currency in Azure Cosmos DB, representing the cost of all database operations.
*   **Throughput:** The amount of RUs per second provisioned for a database or container.
*   **Manual Throughput:** A provisioning model where a fixed amount of RUs/s is explicitly set.
*   **Autoscale Throughput:** A dynamic provisioning model where RUs/s automatically scale within a defined range based on actual usage.
*   **Serverless:** A consumption-based model where you pay only for RUs consumed and storage, with no upfront throughput provisioning.
*   **Throttling (HTTP 429):** Occurs when an application exceeds the provisioned RUs/s, causing Cosmos DB to temporarily reject requests.
*   **Retry Logic:** Application code designed to re-attempt operations that fail due to transient errors like throttling.

#### Hands-on activity
**Activity: Provision and Monitor Throughput in the Azure Portal**

1.  **Objective:** Experience provisioning different throughput models and observing RU consumption.
2.  **Prerequisites:** An existing Azure Cosmos DB account and a database/container (from previous activities).
3.  **Steps:**
    *   **Navigate to your Container:** In the Azure portal, go to your Cosmos DB account, then to `UserManagementDB`, and select the `Users` container.
    *   **Provision Manual Throughput:**
        *   Under "Settings," click "Scale & Settings."
        *   If not already, ensure "Manual" is selected for "Throughput type."
        *   Set the "Throughput (RU/s)" to `400`. Click "Save."
    *   **Simulate Load (Optional, but recommended):** Use the Data Explorer in the portal to add a few sample items to the `Users` container. Observe the "Request Units" consumed for each write operation.
        *   Click "New Item" and paste a simple JSON document:
            ```json
            {
                "id": "user1",
                "userId": "user123",
                "name": "Alice",
                "email": "alice@example.com"
            }
            ```
        *   Click "Save." Note the RU cost displayed.
    *   **Switch to Autoscale Throughput:**
        *   Go back to "Scale & Settings" for the `Users` container.
        *   Change "Throughput type" to "Autoscale."
        *   Set "Max RU/s" to `4000`. Click "Save."
        *   Observe the change in the portal. The throughput will dynamically adjust between 400 RU/s and 4000 RU/s.
    *   **Monitor Metrics:**
        *   In the left-hand menu of your Cosmos DB account, under "Monitoring," click "Metrics."
        *   Select "Request Units" as the metric.
        *   Observe the graph showing consumed RUs over time. If you simulated load, you should see spikes corresponding to your operations. Also, look at "Throttled Request Count" to see if any 429s occurred.

#### Assessment idea
1.  **Question:** A developer is building a new IoT solution that will ingest telemetry data from thousands of devices. The data ingestion rate is highly variable, with significant spikes during certain times of the day and very low activity overnight. Which throughput provisioning model would be most cost-effective for this scenario, and why?
    *   **Correct Answer:** Autoscale throughput. For highly variable and unpredictable workloads like IoT telemetry, Autoscale is the most cost-effective option. It allows Cosmos DB to dynamically scale the provisioned RUs up or down within a defined range, ensuring sufficient capacity during peak times while reducing costs during periods of low activity. Manual provisioning would either lead to overpaying for unused capacity during off-peak hours or experiencing throttling during peak spikes. Serverless might be an option for extremely infrequent data, but for thousands of devices with significant spikes, autoscale provides better performance guarantees within a controlled cost range.
2.  **Question:** Your application is experiencing frequent HTTP 429 (Too Many Requests) errors when interacting with an Azure Cosmos DB container configured with manual throughput. What does this error signify, and what immediate action should you consider to mitigate it in your application code?
    *   **Correct Answer:** An HTTP 429 error signifies that your application has exceeded the provisioned Request Units (RUs) per second for the container. Cosmos DB is temporarily throttling your requests to maintain its performance guarantees for other operations. The immediate action to mitigate this in your application code is to implement robust retry logic with an exponential backoff strategy. This means that upon receiving a 429, the application should wait for a short, increasing duration (e.g., 1 second, then 2 seconds, then 4 seconds) before retrying the failed request. This allows the Cosmos DB service to catch up and prevents the application from continuously bombarding the throttled partition.

#### AI generation note
Create a 10-minute video explanation with Azure portal walkthroughs. Start by defining RUs with a simple analogy (e.g., "energy currency"). Show a side-by-side comparison of different operations (point read vs. complex query) and their varying RU costs in the Azure portal's Data Explorer. Then, walk through the Azure portal, demonstrating how to switch a container from manual throughput to autoscale and explaining the cost implications of each. Conclude by showing how to monitor "Request Units" and "Throttled Request Count" metrics in the Azure portal, emphasizing the importance of retry logic for 429 errors. Use a professional, safety-conscious tone, highlighting common pitfalls.

---

## Module 2: Designing and Implementing Data Models

This module delves into the critical aspects of data modeling for Azure Cosmos DB, emphasizing the unique considerations for NoSQL databases. You will learn how to design efficient and scalable data models that leverage Cosmos DB's capabilities, optimize for performance, and apply advanced patterns to solve complex data challenges.

### Chapter 2.1 — Introduction to Data Modeling for NoSQL Databases

#### Learning objectives
*   Differentiate between data modeling principles for relational databases and NoSQL databases.
*   Explain the concepts of denormalization, embedding, and linking in NoSQL data models.
*   Identify the purpose and importance of a partition key in Azure Cosmos DB.
*   Choose an appropriate partition key based on data distribution and access patterns.

#### Detailed lesson content
Welcome to the exciting world of NoSQL data modeling! If you're coming from a relational database background, you'll find that many of the established rules for designing schemas need to be re-evaluated. Relational databases typically prioritize normalization, which means minimizing data redundancy by storing data in separate tables and linking them with foreign keys. This approach is excellent for maintaining data integrity and reducing storage costs, but it often requires complex joins at query time, which can become a performance bottleneck in highly scalable, distributed systems.

NoSQL databases, like Azure Cosmos DB, take a fundamentally different approach. They are often "schema-agnostic" or "schema-free," meaning you don't define a rigid schema upfront. Instead, each document (or item in Cosmos DB terminology) can have its own structure. More importantly, NoSQL databases prioritize read performance and horizontal scalability over strict normalization. This leads to a paradigm where **denormalization** is often the preferred strategy. Denormalization involves duplicating data or embedding related information directly within a single document to reduce the need for joins. For instance, instead of having separate `Order` and `Customer` tables, you might embed customer details directly within the `Order` document if those details are frequently accessed together. This allows for a single, fast read operation to retrieve all necessary information, significantly improving query efficiency and reducing Request Unit (RU) consumption.

When designing your NoSQL data model, you'll primarily consider two techniques: **embedding** and **linking**. Embedding means storing related data directly within a parent document. For example, in a blog application, you might embed comments directly within a `Post` document. This works well when the embedded data is frequently accessed with its parent, is not excessively large, and doesn't need to be independently queried or updated too often. The benefit is fewer network requests and faster reads. However, embedding too much data can lead to large documents, which are less efficient to update and can exceed Cosmos DB's document size limits.

Alternatively, **linking** involves storing related data in separate documents and referencing them by their unique identifiers (IDs). This is similar to foreign keys in relational databases, but without the built-in referential integrity enforcement – that becomes your application's responsibility. For our blog example, if comments can be very numerous, frequently updated, or need to be queried independently (e.g., "show all comments by a specific user"), it would be more efficient to store them as separate `Comment` documents and link them to the `Post` document using the `Post`'s ID. You would then perform two queries: one to get the `Post` and another to get its `Comments`. This approach is better for large, frequently updated, or independently accessed related data. The key is to design for your most frequent query patterns.

A cornerstone of data modeling in Azure Cosmos DB is the **partition key**. This is a property within your documents that Cosmos DB uses to distribute your data horizontally across multiple logical partitions. Think of logical partitions as distinct storage units that allow Cosmos DB to scale out your data and throughput. When you create a container, you must specify a partition key path (e.g., `/userId`, `/productId`). Every document you store in that container must have a value for this partition key. All documents with the same partition key value reside within the same logical partition. A good partition key is crucial for performance and scalability. It should have **high cardinality**, meaning a large number of distinct values, to ensure data is spread evenly across many logical partitions. It should also promote **even distribution of access patterns**, meaning that read and write operations are spread across many partition key values, preventing any single partition from becoming a "hot partition" that receives disproportionately high traffic. A common mistake is to choose a partition key with low cardinality (e.g., `/status` with values like "active", "pending", "completed") or one that leads to skewed access (e.g., `/tenantId` if one tenant has significantly more activity than others), which can severely limit scalability and increase costs. Always design your partition key with your application's most frequent queries and write patterns in mind.

#### Key concepts
*   **Denormalization:** A data modeling strategy where data is duplicated or embedded to reduce joins and optimize read performance, common in NoSQL databases.
*   **Embedding:** Storing related data directly within a parent document, suitable for frequently co-accessed, non-excessive data.
*   **Linking:** Storing related data in separate documents and referencing them by ID, suitable for large, frequently updated, or independently queried related data.
*   **Partition Key:** A property in an Azure Cosmos DB document used to distribute data across logical partitions, enabling horizontal scaling.
*   **Logical Partition:** A distinct storage unit within a Cosmos DB container, holding all documents that share the same partition key value.
*   **High Cardinality:** A characteristic of a good partition key, meaning it has a large number of distinct values to ensure even data distribution.

#### Hands-on activity
**Scenario:** You are designing a data model for a simple e-commerce application that needs to store `Product` information and `Review` information for each product.

**Task:**
1.  Design a JSON structure for a `Product` document that includes basic product details (ID, Name, Description, Price).
2.  Design a JSON structure for `Review` documents (ID, ProductId, UserId, Rating, Comment, Date).
3.  Decide whether to embed `Reviews` within the `Product` document or link them. Justify your choice based on typical e-commerce access patterns (e.g., "show product details with its latest 5 reviews," "show all reviews by a specific user").
4.  Choose a suitable partition key for the `Product` container and justify your choice.
5.  Choose a suitable partition key for the `Review` container (if separate) and justify your choice.

**Starter JSON Structure (for Products):**
```json
// Product document structure
{
  "id": "uniqueProductId123",
  "name": "Super Widget Pro",
  "description": "An amazing widget for all your needs.",
  "price": 99.99,
  "category": "Electronics",
  "manufacturer": "Acme Corp"
}
```

#### Assessment idea
1.  **Question:** You are designing a data model for a social media application where users can create posts, and each post can have many comments. Comments are frequently added and occasionally updated, and you often need to retrieve a post along with its most recent comments. Which data modeling strategy (embedding or linking) would you initially recommend for comments within a post, and why?
    *   **Correct Answer:** For comments, an initial recommendation would be **linking**. While embedding might seem appealing for retrieving posts with comments, comments can be numerous and frequently updated. Embedding a large number of comments directly into a post document could lead to very large documents, making updates to the post or adding new comments less efficient (as the entire document would need to be rewritten). Furthermore, if comments need to be queried independently (e.g., "show all comments by a specific user"), linking them as separate documents with a `postId` reference would be more flexible and efficient. To retrieve a post with its recent comments, you would perform two queries: one for the post and a second, targeted query for comments belonging to that post, potentially ordered by date and limited.
2.  **Question:** An Azure Cosmos DB container stores `SensorReading` documents, each with a `sensorId`, `timestamp`, and `value`. If you choose `/timestamp` as the partition key, what potential issue could arise, and how would it impact the application?
    *   **Correct Answer:** Choosing `/timestamp` as the partition key would likely lead to a **hot partition issue**. All new `SensorReading` documents, which are typically generated in chronological order, would be written to the same logical partition corresponding to the current timestamp range. This would cause a disproportionately high volume of write operations on a single partition, exhausting its provisioned throughput and leading to increased latency, throttled requests, and potentially higher RU consumption for the entire collection. The application would experience performance degradation and errors when trying to ingest new sensor data. A better partition key would be `/sensorId` (if queries often target a single sensor) or a composite key that includes `sensorId` to distribute writes more evenly.

#### AI generation note
Create a 12-minute interactive slide deck. Start with a visual comparison table of relational vs. NoSQL modeling. Use clear diagrams to illustrate denormalization, embedding (e.g., comments in a blog post), and linking (e.g., orders referencing customer IDs). Dedicate 4 minutes to explaining partition keys with animated diagrams showing data distribution across logical partitions for good and bad partition key choices (e.g., `/userId` vs. `/country`). Include JSON code snippets for embedded and linked data models. Conclude with a 2-question interactive quiz on partition key characteristics.

### Chapter 2.2 — Modeling for Performance and Scalability in Azure Cosmos DB

#### Learning objectives
*   Understand the concept of Request Units (RUs) and how they relate to performance and cost.
*   Optimize data models to minimize Request Unit consumption for common read and write operations.
*   Analyze the impact of partition key choice on RU consumption, query performance, and overall scalability.
*   Implement basic indexing strategies to improve query efficiency in Azure Cosmos DB.

#### Detailed lesson content
Building upon our understanding of basic NoSQL data modeling principles, this chapter dives into the crucial aspect of performance and scalability within Azure Cosmos DB. At the heart of Cosmos DB's performance and cost model are **Request Units (RUs)**. An RU is a performance currency that abstracts the system resources (CPU, IOPS, memory) required to perform database operations like reads, writes, queries, and even indexing. Every operation you perform in Cosmos DB consumes a certain number of RUs. The more RUs an operation consumes, the more resources it requires, and consequently, the higher the cost. Understanding and optimizing RU consumption is paramount for building efficient and cost-effective Cosmos DB applications.

Your data modeling choices directly influence RU consumption. For example, performing a simple **point read** (retrieving a single document by its ID and partition key) is the most efficient operation and typically consumes the fewest RUs (often 1 RU). In contrast, complex queries that scan many documents, involve filtering on non-indexed properties, or span multiple logical partitions will consume significantly more RUs. To optimize for reads, prioritize designing your data model to support point reads for your most frequent access patterns. This often means denormalizing data so that all necessary information for a common read operation is available within a single document, accessible via its ID and partition key. For example, if you frequently need to display a user's profile with their recent activity, embedding a summary of activity or linking to a separate activity document with the user ID as its partition key allows for efficient retrieval.

Write operations also consume RUs. Inserting a new document, updating an existing one, or deleting a document all incur RU charges. The size of the document, the number of properties, and the indexing policy all affect write RU consumption. Larger documents generally consume more RUs to write. Batching multiple write operations (e.g., using bulk executor libraries) can improve throughput but doesn't necessarily reduce the total RUs consumed per operation. When considering write performance, it's also important to briefly touch on **consistency levels**. While a deeper dive into consistency is for a later module, choosing a stronger consistency level (like Strong or Bounded Staleness) generally consumes slightly more RUs for writes compared to eventual consistency, as it requires more coordination across replicas.

Revisiting the **partition key** from the previous chapter, its impact on RU consumption and scalability cannot be overstated. A well-chosen partition key ensures that data and operations are evenly distributed across logical partitions, allowing Cosmos DB to scale horizontally effectively. Conversely, a poorly chosen partition key can lead to a **hot partition**. A hot partition occurs when a single logical partition receives a disproportionately high volume of read or write requests. This can exhaust the provisioned throughput allocated to that specific partition, leading to request throttling (HTTP 429 errors), increased latency, and a degraded user experience, even if the overall collection has sufficient RUs provisioned. Operations that span multiple logical partitions, known as **cross-partition queries**, are inherently more expensive in terms of RUs because Cosmos DB has to query multiple underlying physical partitions and aggregate the results. Minimizing cross-partition queries by designing your data model and partition key around your most frequent query patterns is a critical optimization technique.

Finally, **indexing** plays a vital role in query performance. Azure Cosmos DB automatically indexes all properties by default, which is convenient but can be overkill and consume more RUs for writes. You can customize the indexing policy to include or exclude specific paths, or to create **composite indexes**. A custom indexing policy allows you to exclude paths that you know will never be queried, reducing write RU consumption and storage. Composite indexes are particularly useful for queries that have `ORDER BY` clauses on multiple properties or `WHERE` clauses with multiple filters. For example, if you frequently query `WHERE category = 'Electronics' ORDER BY price DESC`, a composite index on `(category ASC, price DESC)` would significantly improve query performance and reduce RUs compared to relying on default indexing. Always analyze your query patterns to determine the most effective indexing strategy. Remember, while indexing improves read performance, it adds overhead to write operations, so it's a balance.

```csharp
// Example: Point read in C#
// This assumes 'id' and 'partitionKey' are known.
// This is the most RU-efficient read operation.
string id = "productId123";
string partitionKey = "Electronics"; // Example partition key value

ItemResponse<Product> response = await container.ReadItemAsync<Product>(id, new PartitionKey(partitionKey));
Product product = response.Resource;
Console.WriteLine($"Product Name: {product.Name}, RUs consumed: {response.RequestCharge}");

// Example: Cross-partition query in C#
// This query will scan across all partitions if 'category' is not the partition key.
// It will consume more RUs than a point read or a single-partition query.
QueryDefinition queryDefinition = new QueryDefinition("SELECT * FROM c WHERE c.category = @category")
    .WithParameter("@category", "Electronics");

using FeedIterator<Product> feedIterator = container.GetItemQueryIterator<Product>(queryDefinition);

double totalRUs = 0;
while (feedIterator.HasMoreResults)
{
    FeedResponse<Product> feedResponse = await feedIterator.ReadNextAsync();
    totalRUs += feedResponse.RequestCharge;
    foreach (Product p in feedResponse)
    {
        Console.WriteLine($"Product: {p.Name}");
    }
}
Console.WriteLine($"Total RUs consumed for cross-partition query: {totalRUs}");

// Example: Custom Indexing Policy (JSON) - exclude specific paths
/*
{
  "indexingMode": "consistent",
  "automatic": true,
  "includedPaths": [
    {
      "path": "/*"
    }
  ],
  "excludedPaths": [
    {
      "path": "/description/*" // Exclude description from indexing
    },
    {
      "path": "/tags/*" // Exclude tags array from indexing
    }
  ],
  "compositeIndexes": [
    [
      {
        "path": "/category",
        "order": "ascending"
      },
      {
        "path": "/price",
        "order": "descending"
      }
    ]
  ]
}
*/
```

#### Key concepts
*   **Request Units (RUs):** A performance currency in Azure Cosmos DB representing the resources consumed by database operations.
*   **Point Read:** The most efficient operation to retrieve a single document by its ID and partition key.
*   **Hot Partition:** A logical partition receiving a disproportionately high volume of requests, leading to performance bottlenecks.
*   **Cross-Partition Query:** A query that spans multiple logical partitions, typically consuming more RUs than single-partition queries.
*   **Indexing Policy:** Configuration that defines which properties are indexed and how, impacting query performance and write RU consumption.
*   **Composite Index:** An index created on multiple properties, useful for queries with `ORDER BY` or complex `WHERE` clauses involving multiple fields.

#### Hands-on activity
**Scenario:** You have an Azure Cosmos DB container storing `Order` documents. Each `Order` has an `orderId`, `customerId`, `orderDate`, `totalAmount`, and `status`. Your application frequently performs the following operations:
1.  Retrieve a specific order by its `orderId`.
2.  Retrieve all orders for a given `customerId`, sorted by `orderDate` descending.
3.  Retrieve all "pending" orders across the entire system.

**Task:**
1.  Propose a partition key for the `Order` container that optimizes for the most frequent operations. Justify your choice.
2.  Describe how your proposed partition key would impact the RU consumption for each of the three operations listed above.
3.  Suggest an indexing strategy (default, custom, or composite) to further optimize operation #2, assuming `customerId` is your chosen partition key. Write the JSON for this indexing policy.

**Starter `Order` Document Structure:**
```json
{
  "id": "order123",
  "customerId": "customerABC",
  "orderDate": "2023-10-26T10:00:00Z",
  "totalAmount": 150.75,
  "status": "pending",
  "items": [
    {"productId": "prod001", "quantity": 1},
    {"productId": "prod002", "quantity": 2}
  ]
}
```

#### Assessment idea
1.  **Question:** A developer observes that a query retrieving a user's recent activity (`SELECT * FROM c WHERE c.userId = 'user123' ORDER BY c.timestamp DESC`) is consistently consuming a high number of Request Units (RUs) despite `userId` being the partition key. What is the most likely reason for the high RU consumption, and what specific indexing strategy could be applied to mitigate this?
    *   **Correct Answer:** The most likely reason for high RU consumption, even with `userId` as the partition key, is the `ORDER BY c.timestamp DESC` clause. While the query is a single-partition query, sorting requires additional processing. To mitigate this, a **composite index** should be created on `userId` and `timestamp`. Specifically, an index on `(userId ASC, timestamp DESC)` would allow Cosmos DB to efficiently retrieve and sort the documents within that user's partition without performing a full scan and in-memory sort.
2.  **Question:** Explain the difference in RU consumption between a point read and a cross-partition query in Azure Cosmos DB. Provide a scenario where minimizing cross-partition queries is critical.
    *   **Correct Answer:** A **point read** is the most efficient operation, typically consuming 1 RU, because it retrieves a single document by its ID and partition key from a known logical partition. Cosmos DB can directly locate and fetch the document. A **cross-partition query**, on the other hand, involves querying data across multiple logical partitions. This requires Cosmos DB to fan out the query to all relevant physical partitions, collect results, and then aggregate them. This process is inherently more resource-intensive and thus consumes significantly more RUs, often scaling linearly with the number of partitions involved and the amount of data scanned.
    *   Minimizing cross-partition queries is critical in scenarios like **real-time dashboards or high-volume transactional systems** where low latency and predictable costs are paramount. For example, if an e-commerce application frequently needs to display a customer's entire order history, and `customerId` is *not* the partition key for orders, querying all orders for a customer would be a cross-partition query. If this operation is performed millions of times a day, the cumulative RU consumption would be extremely high, leading to prohibitive costs and potential throttling. Designing the order data model with `customerId` as the partition key would make this a single-partition query, drastically reducing RUs and improving performance.

#### AI generation note
Create a 15-minute live coding video. Start by demonstrating RU consumption for a point read vs. a simple query (no partition key filter) in the Azure Portal's Data Explorer. Then, show how to create a custom indexing policy (JSON) to exclude paths and add a composite index for a specific query pattern (e.g., `WHERE category = 'Electronics' ORDER BY price`). Run the query before and after applying the composite index, showing the RU reduction. Use a split-screen view of C# code and Azure Portal. Conclude with a hands-on coding challenge to modify an indexing policy for a given query.

### Chapter 2.3 — Advanced Data Modeling Patterns and Best Practices

#### Learning objectives
*   Apply advanced data modeling patterns like the Lookup Pattern and Materialized View Pattern.
*   Effectively model one-to-one, one-to-many, and many-to-many relationships in Cosmos DB.
*   Understand the scope and usage of multi-document transactions with stored procedures.
*   Leverage the Azure Cosmos DB Change Feed for real-time data integration and materialized views.

#### Detailed lesson content
As you become more comfortable with the fundamentals of Cosmos DB data modeling, you'll encounter scenarios that require more sophisticated patterns to achieve optimal performance and scalability. Beyond basic embedding and linking, several advanced patterns can help you tackle complex data relationships and query requirements.

One such pattern is the **Lookup Pattern**. This is particularly useful when you have small, frequently changing pieces of data that are referenced by many documents. Instead of embedding this data in every document (which would require updating many documents if the lookup data changes) or linking to it (which adds an extra read operation), you can store it in a separate "lookup" document. For example, if you have product categories that change infrequently but are referenced by thousands of product documents, you could create a single `Category` document (e.g., `id: "categories", partitionKey: "metadata"`) that contains an array of all categories. When a category name changes, you update only this single lookup document. Your application would then read this lookup document once (perhaps caching it) and use its contents to display category names alongside products.

Another powerful pattern is the **Materialized View Pattern**. This pattern leverages the Azure Cosmos DB Change Feed to create pre-aggregated or denormalized views of your data. Imagine a scenario where you have `Order` documents and `OrderItem` documents, and you frequently need to display a customer's total spending or a daily sales report. Running complex aggregation queries across many documents can be very expensive in terms of RUs. With the Materialized View Pattern, you can use the Change Feed to capture changes to your `Order` and `OrderItem` documents in near real-time. A separate process (e.g., an Azure Function using the Change Feed Processor library) would then consume these changes, perform the necessary aggregations or denormalizations, and write the results to a new "MaterializedView" collection. This Materialized View collection would be optimized for specific read patterns, allowing your application to query a single, pre-computed document for reports or dashboards with minimal RU cost. This shifts the computational cost from read time to write time, which is often more scalable for high-read scenarios.

Modeling relationships in NoSQL databases requires a different mindset than in relational systems.
*   **One-to-one relationships:** Often handled by embedding the related entity directly within the parent document, especially if they are always accessed together and the embedded data is not excessively large.
*   **One-to-many relationships:** Can be modeled by embedding (if the "many" side is small and finite, like a few addresses for a user) or linking (if the "many" side is large, frequently updated, or independently queried, like comments for a post). When linking, the "many" documents would typically have the parent's ID as a property, often also serving as their partition key for efficient retrieval.
*   **Many-to-many relationships:** These are typically handled using an intermediate document, similar to a join table in relational databases. For example, `Students` and `Courses` could have a `Enrollment` document that links a `studentId` to a `courseId`. The partition key for the `Enrollment` collection would depend on the most frequent access patterns (e.g., `/studentId` to find all courses for a student, or `/courseId` to find all students in a course). Remember, referential integrity is not enforced by Cosmos DB; your application must manage it.

For operations that require atomicity, Azure Cosmos DB supports **multi-document transactions** within a single logical partition. These transactions are implemented using **stored procedures**, which are JavaScript functions executed directly within the database engine. A stored procedure can perform multiple operations (e.g., insert, update, delete) on documents that share the *same partition key value*. All operations within the stored procedure are executed as a single, atomic transaction. If any operation fails, the entire transaction is rolled back. This is a powerful feature for maintaining data consistency for related operations. However, it's crucial to remember the primary limitation: **transactions are strictly scoped to a single logical partition.** You cannot perform a multi-document transaction across documents with different partition key values. If your application requires cross-partition atomicity, you would need to implement client-side idempotent retry logic or use an external orchestration service.

```javascript
// Example: Stored procedure for a multi-document transaction (JavaScript)
// This stored procedure updates a product's stock and records an order item,
// assuming both documents share the same partition key (e.g., productId).
function createOrderItemAndUpdateProductStock(productId, orderItem) {
    var collection = getContext().getCollection();
    var collectionLink = collection.getSelfLink();

    // 1. Retrieve the product document
    var productQuery = { query: "SELECT * FROM c WHERE c.id = @id", parameters: [{ name: "@id", value: productId }] };
    var accepted = collection.queryDocuments(collectionLink, productQuery, function (err, feed, options) {
        if (err) throw err;
        if (!feed || !feed.length) throw new Error("Product not found.");

        var product = feed[0];
        if (product.stock < orderItem.quantity) throw new Error("Insufficient stock.");

        // 2. Update product stock
        product.stock -= orderItem.quantity;
        var acceptedUpdate = collection.replaceDocument(product._self, product, function (err, updatedProduct) {
            if (err) throw err;

            // 3. Create the order item document
            orderItem.productId = productId; // Ensure order item links to product
            var acceptedCreate = collection.createDocument(collectionLink, orderItem, function (err, createdOrderItem) {
                if (err) throw err;
                getContext().getResponse().setBody({ product: updatedProduct, orderItem: createdOrderItem });
            });
            if (!acceptedCreate) throw new Error("Failed to create order item.");
        });
        if (!acceptedUpdate) throw new Error("Failed to update product stock.");
    });
    if (!accepted) throw new Error("Failed to query product.");
}
```

Finally, the **Change Feed** is an indispensable feature for integrating Cosmos DB with other services and building event-driven architectures. It provides a persistent, ordered log of all changes that happen in a Cosmos DB container. You can use the Change Feed for various scenarios:
*   **Real-time analytics:** Stream changes to a data warehouse or analytics service.
*   **Data synchronization:** Keep a secondary index or another database in sync.
*   **Materialized views:** As discussed, create pre-computed views for complex queries.
*   **Event sourcing:** Use Cosmos DB as an event store for microservices.
The **Change Feed Processor library** simplifies consuming the change feed by managing leases, distributing work across multiple instances, and handling checkpoints. This allows you to build highly scalable and resilient applications that react to data changes in real-time.

**General Best Practices:**
*   **Design for your queries first:** Understand your application's read and write patterns before designing your data model.
*   **Keep documents small:** Smaller documents generally lead to lower RU consumption for reads and writes.
*   **Choose an optimal partition key:** This is arguably the most critical decision for scalability and cost.
*   **Monitor RUs and adjust:** Continuously monitor your RU consumption and adjust your data model, indexing policy, or provisioned throughput as needed.
*   **Consider consistency levels:** Choose the consistency level that balances your application's requirements for data freshness and performance.

#### Key concepts
*   **Lookup Pattern:** A data modeling pattern for small, frequently referenced, and infrequently changing data, stored in a single document for efficient retrieval.
*   **Materialized View Pattern:** Using the Change Feed to create pre-aggregated or denormalized views of data, optimizing for complex read patterns.
*   **Multi-Document Transaction:** An atomic operation performed on multiple documents within a single logical partition, typically using stored procedures.
*   **Stored Procedure:** A JavaScript function executed server-side in Cosmos DB, used for multi-document transactions and complex operations.
*   **Change Feed:** A persistent, ordered log of all changes in a Cosmos DB container, enabling real-time data integration and event-driven architectures.
*   **Change Feed Processor:** A library that simplifies consuming the Change Feed by managing leases and distributing work.

#### Hands-on activity
**Scenario:** You are building a system where users can "follow" other users. This is a many-to-many relationship. You need to store who follows whom and efficiently retrieve both the list of users a specific user follows and the list of followers for a specific user.

**Task:**
1.  Design a data model (JSON structure) for representing the "follows" relationship using an intermediate document pattern.
2.  Choose a partition key for this "Follows" collection that supports efficient retrieval of both "who a user follows" and "who follows a user." Justify your choice.
3.  Write a simple JavaScript stored procedure that, given a `followerId` and `followedId`, atomically creates a new "Follows" document and increments a `followersCount` property on the `followedId` user's document (assuming both `Follows` and `User` documents can be in the same logical partition for this example for simplicity, e.g., if you partitioned by a derived `relationshipId` or `userId` for the `Follows` document).

**Starter `User` Document Structure:**
```json
{
  "id": "userA",
  "name": "Alice",
  "email": "alice@example.com",
  "followersCount": 10,
  "followingCount": 5
}
```

#### Assessment idea
1.  **Question:** You have a Cosmos DB container storing `Product` documents. Each product has a `categoryId`. You also have a separate list of `Category` names and their descriptions that rarely change. Your application frequently needs to display product details along with the category's description. Describe how you would implement the **Lookup Pattern** for categories to optimize this scenario, explaining the benefits.
    *   **Correct Answer:** To implement the Lookup Pattern, you would create a single document in a separate container (or the same container with a distinct partition key, e.g., `metadata`) that holds an array or map of all category details. For example:
        ```json
        {
          "id": "categoriesLookup",
          "partitionKey": "metadata",
          "categories": [
            {"id": "cat1", "name": "Electronics", "description": "Devices and gadgets"},
            {"id": "cat2", "name": "Books", "description": "Printed and digital literature"}
          ]
        }
        ```
        Your application would perform a single point read on this `categoriesLookup` document (perhaps caching the result) when it starts up or when the lookup data is known to have changed. When displaying a product, the application would then retrieve the product document and use the cached category lookup data to get the category description. The benefit is that instead of embedding category descriptions in every product document (which would require updating thousands of products if a category description changes) or performing a separate read for each category (if categories were separate documents), you perform one highly efficient read for all category data. This significantly reduces RU consumption for read operations and simplifies updates to category metadata.
2.  **Question:** Your application needs to process a series of related operations (e.g., updating an inventory count, recording a sale, and updating a customer's loyalty points) that must either all succeed or all fail atomically. These operations involve documents that share the same partition key. What Azure Cosmos DB feature would you use to achieve this atomicity, and what is its primary limitation?
    *   **Correct Answer:** You would use an Azure Cosmos DB **stored procedure** to achieve this atomicity. A stored procedure allows you to write server-side JavaScript logic that executes as a single, atomic transaction. All operations within the stored procedure on documents sharing the same partition key are guaranteed to either complete successfully or roll back entirely if any part fails. The primary limitation of multi-document transactions via stored procedures is that they are **strictly scoped to a single logical partition**. This means all documents involved in the atomic operation must reside within the same logical partition (i.e., they must share the same partition key value). If your operations need to span documents with different partition keys, stored procedures cannot provide transactional guarantees across those partitions.

#### AI generation note
Create a 15-minute mixed-media video. Start with animated diagrams illustrating the Lookup Pattern (e.g., global config document) and Materialized View Pattern (showing data flow from source collections via Change Feed to a materialized view collection). Then, transition to a live coding demo in C# or JavaScript showing how to define and execute a simple stored procedure for a multi-document transaction within a single logical partition. Include Azure Portal screenshots for deploying the stored procedure. Conclude with a visual summary of Change Feed use cases and a reflection prompt on when to use each advanced pattern.

---

## Module 3: Developing Applications with Azure Cosmos DB SDKs

This module guides you through the practical aspects of building applications that interact with Azure Cosmos DB using its powerful SDKs. You will learn how to connect to your Cosmos DB accounts, perform fundamental data operations, execute complex queries, leverage advanced features like the change feed and stored procedures, and optimize your application's performance for scale and cost-efficiency. By the end of this module, you'll be proficient in developing robust and high-performing applications with Azure Cosmos DB.

---

### Chapter 3.1 — Connecting to Azure Cosmos DB and Performing Basic Operations (CRUD)

#### Learning objectives
*   Securely connect to an Azure Cosmos DB account using the .NET SDK.
*   Programmatically create and manage databases and containers within your Cosmos DB account.
*   Perform essential Create, Read, Update, and Delete (CRUD) operations on items.
*   Understand and correctly utilize the partition key for efficient item operations.
*   Implement robust error handling for common Cosmos DB SDK exceptions.

#### Detailed lesson content
Welcome to the practical side of Azure Cosmos DB development! In this chapter, we'll dive into the core of interacting with your Cosmos DB account using its Software Development Kits (SDKs). While Azure Cosmos DB offers SDKs for various languages like Java, Python, and JavaScript, we'll primarily focus on the .NET SDK (C#) due to its comprehensive features and common usage in the Microsoft ecosystem, which aligns well with the DP-420 certification. The principles you learn here, however, are largely transferable across other SDKs.

Our journey begins with establishing a secure connection to your Azure Cosmos DB account. To do this, you'll need two crucial pieces of information from the Azure Portal: your Cosmos DB endpoint URI and one of your primary keys. The endpoint URI is simply the URL of your Cosmos DB account, typically found in the "Keys" section under "Settings." The primary key acts as a password, granting full administrative access to your account. It's absolutely critical to treat these keys with the utmost security; never hardcode them directly into your application code, especially in production environments. Instead, use secure configuration management systems like Azure Key Vault or environment variables. Once you have these, you'll initialize the `CosmosClient` object, which is the gateway to all your interactions with Cosmos DB. This client is designed to be a singleton, meaning you should instantiate it once per application lifetime and reuse it to optimize performance and resource utilization.

After successfully connecting, the next logical step is to manage your data structure. Azure Cosmos DB organizes data hierarchically: an account contains databases, and databases contain containers. You can programmatically create a database using `CosmosClient.CreateDatabaseIfNotExistsAsync("YourDatabaseName")` and a container using `Database.CreateContainerIfNotExistsAsync("YourContainerName", "/partitionKeyPath")`. When creating a container, specifying a `partitionKeyPath` is paramount. This path, like `"/productId"` or `"/category"`, defines how your data will be distributed across physical partitions, directly impacting performance and scalability. Choosing an effective partition key is one of the most critical design decisions you'll make in Cosmos DB.

With your database and container ready, you can start performing fundamental CRUD operations on your items. An "item" in Cosmos DB is essentially a JSON document. To create a new item, you'll use `Container.CreateItemAsync(item, new PartitionKey(item.PartitionKeyValue))`. Notice the explicit `PartitionKey` parameter; it's essential for Cosmos DB to route the request to the correct physical partition. Reading an item is just as straightforward with `Container.ReadItemAsync<T>(id, new PartitionKey(partitionKeyValue))`. This is known as a "point read" and is the most efficient way to retrieve a single item if you know its `id` and `partitionKey`. Updating an item typically involves `Container.UpsertItemAsync(item, new PartitionKey(item.PartitionKeyValue))`, which will either create the item if it doesn't exist or replace it if it does. Alternatively, `ReplaceItemAsync` can be used if you're certain the item already exists. Finally, to remove an item, you'll use `Container.DeleteItemAsync(id, new PartitionKey(partitionKeyValue))`.

Throughout these operations, it's vital to anticipate and handle potential errors. The Cosmos DB SDK throws `CosmosException` for various issues, such as an item not being found (status code 404), a conflict during creation (status code 409), or throttling (status code 429). By wrapping your Cosmos DB calls in `try-catch` blocks, you can gracefully manage these exceptions, providing meaningful feedback to your users or implementing retry logic where appropriate. For instance, if a `ReadItemAsync` operation fails with a 404, you might inform the user that the requested item does not exist. A common mistake beginners make is to forget the `PartitionKey` parameter in point operations, which can lead to errors or, worse, inefficient cross-partition operations that consume more Request Units (RUs). Always remember that for single-item operations (Create, Read, Upsert, Delete), providing the `PartitionKey` alongside the `id` is crucial for optimal performance. Another common pitfall is not disposing of the `CosmosClient` properly in short-lived applications, though for long-running services, keeping a singleton instance is the best practice.

#### Key concepts
*   **CosmosClient:** The primary object in the SDK for interacting with an Azure Cosmos DB account.
*   **Endpoint URI:** The unique URL of your Azure Cosmos DB account.
*   **Primary Key:** An access key providing administrative privileges to your Cosmos DB account.
*   **Database:** A logical container for one or more Cosmos DB containers.
*   **Container:** The schema-agnostic unit of scalability and throughput in Cosmos DB, holding JSON items.
*   **Item:** A JSON document stored within a Cosmos DB container.
*   **PartitionKey:** A property within an item that determines its logical partition, crucial for data distribution and efficient operations.
*   **CRUD Operations:** The fundamental Create, Read, Update, and Delete operations performed on data.
*   **CosmosException:** The exception type thrown by the Cosmos DB SDK for various API errors.

#### Hands-on activity
**Objective:** Create a .NET console application to connect to Azure Cosmos DB, create a database and container (if they don't exist), and perform basic CRUD operations on a `Product` item.

**Instructions:**
1.  Open Visual Studio and create a new C# Console App (.NET Core).
2.  Install the `Microsoft.Azure.Cosmos` NuGet package.
3.  Replace the content of `Program.cs` with the provided starter code.
4.  **Crucially:** Update the `EndpointUri` and `PrimaryKey` placeholders with your actual Azure Cosmos DB account details.
5.  Run the application. Observe the console output for successful operations.
6.  Verify the created database, container, and item in the Azure Portal's Data Explorer.

**Starter Code (`Program.cs`):**
```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

public class Product
{
    public string Id { get; set; }
    public string Category { get; set; } // This will be our partition key
    public string Name { get; set; }
    public decimal Price { get; set; }
    public bool IsAvailable { get; set; }
}

public class Program
{
    // Replace with your Azure Cosmos DB endpoint and primary key
    private static readonly string EndpointUri = "YOUR_COSMOS_DB_ENDPOINT_URI";
    private static readonly string PrimaryKey = "YOUR_COSMOS_DB_PRIMARY_KEY";

    private static CosmosClient cosmosClient;
    private static Database database;
    private static Container container;

    private static readonly string databaseId = "ProductsDB";
    private static readonly string containerId = "Products";
    private static readonly string partitionKeyPath = "/Category"; // Define partition key path

    public static async Task Main(string[] args)
    {
        try
        {
            cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() {
                ApplicationName = "CosmosDBApp"
            });

            await CreateDatabaseAndContainerAsync();
            await PerformCrudOperationsAsync();
        }
        catch (CosmosException ce)
        {
            Console.WriteLine($"Cosmos DB Exception: {ce.StatusCode} - {ce.Message}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"General Exception: {e.Message}");
        }
        finally
        {
            if (cosmosClient != null)
            {
                cosmosClient.Dispose(); // Dispose the client when done
            }
            Console.WriteLine("\nPress any key to exit.");
            Console.ReadKey();
        }
    }

    private static async Task CreateDatabaseAndContainerAsync()
    {
        Console.WriteLine($"\nCreating database: {databaseId}");
        database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
        Console.WriteLine($"Database '{database.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating container: {containerId}");
        container = await database.CreateContainerIfNotExistsAsync(containerId, partitionKeyPath);
        Console.WriteLine($"Container '{container.Id}' created or retrieved.");
    }

    private static async Task PerformCrudOperationsAsync()
    {
        // 1. Create an item
        Product newProduct = new Product
        {
            Id = Guid.NewGuid().ToString(),
            Category = "Electronics",
            Name = "Laptop Pro X",
            Price = 1299.99m,
            IsAvailable = true
        };

        Console.WriteLine($"\nCreating item: {newProduct.Id} - {newProduct.Name}");
        try
        {
            ItemResponse<Product> createResponse = await container.CreateItemAsync(newProduct, new PartitionKey(newProduct.Category));
            Console.WriteLine($"Created item with Id: {createResponse.Resource.Id}, RU cost: {createResponse.RequestCharge}");
        }
        catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.Conflict)
        {
            Console.WriteLine($"Item with Id {newProduct.Id} already exists.");
        }

        // 2. Read an item
        Console.WriteLine($"\nReading item: {newProduct.Id}");
        try
        {
            ItemResponse<Product> readResponse = await container.ReadItemAsync<Product>(newProduct.Id, new PartitionKey(newProduct.Category));
            Product readProduct = readResponse.Resource;
            Console.WriteLine($"Read item: {readProduct.Name}, Price: {readProduct.Price}, RU cost: {readResponse.RequestCharge}");
        }
        catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
            Console.WriteLine($"Item with Id {newProduct.Id} not found.");
        }

        // 3. Update an item (using Upsert)
        newProduct.Price = 1199.99m; // Discount!
        newProduct.IsAvailable = false; // Temporarily out of stock

        Console.WriteLine($"\nUpserting item: {newProduct.Id} - new price {newProduct.Price}");
        ItemResponse<Product> upsertResponse = await container.UpsertItemAsync(newProduct, new PartitionKey(newProduct.Category));
        Console.WriteLine($"Upserted item with Id: {upsertResponse.Resource.Id}, New Price: {upsertResponse.Resource.Price}, RU cost: {upsertResponse.RequestCharge}");

        // 4. Delete an item
        Console.WriteLine($"\nDeleting item: {newProduct.Id}");
        try
        {
            ItemResponse deleteResponse = await container.DeleteItemAsync<Product>(newProduct.Id, new PartitionKey(newProduct.Category));
            Console.WriteLine($"Deleted item with Id: {newProduct.Id}, RU cost: {deleteResponse.RequestCharge}");
        }
        catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
            Console.WriteLine($"Item with Id {newProduct.Id} not found for deletion.");
        }
    }
}
```

#### Assessment idea
1.  **Question:** You are performing a point read operation in Azure Cosmos DB using the .NET SDK. You have the `id` of the item, but you forget to provide the `PartitionKey` in the `ReadItemAsync` method. What is the most likely outcome, and why is it problematic?
    *   **A) Outcome:** The operation will fail immediately with a `CosmosException` indicating a missing partition key. **Problem:** It prevents the read from happening at all.
    *   **B) Outcome:** The operation will succeed, but it will consume significantly more Request Units (RUs) because Cosmos DB has to scan all partitions. **Problem:** It leads to higher costs and slower performance.
    *   **C) Outcome:** The operation will succeed, but the returned item might be incorrect if multiple items share the same `id` across different partitions. **Problem:** It can lead to data integrity issues.
    *   **D) Outcome:** The SDK will automatically infer the partition key from the item's `id` and perform an efficient read. **Problem:** This is incorrect; the SDK does not infer the partition key.

    **Correct Answer:** B) The operation will succeed, but it will consume significantly more Request Units (RUs) because Cosmos DB has to scan all partitions. **Problem:** It leads to higher costs and slower performance.
    **Explanation:** When performing a point read (or any single-item operation) and omitting the `PartitionKey`, Cosmos DB cannot directly route the request to a specific physical partition. Instead, it treats it as a cross-partition query, scanning all partitions to find the item with the specified `id`. While it might find the item (assuming `id` is unique within the container), this process is much less efficient, consumes more RUs, and results in higher latency compared to a direct point read with the `PartitionKey`. This is a common performance pitfall.

2.  **Question:** You are developing an application that creates new items in an Azure Cosmos DB container. You want to ensure that if an item with the same `id` and `partitionKey` already exists, your application handles it gracefully without crashing. Which `CosmosException` status code should you specifically catch, and what action would be appropriate?
    *   **A) Status Code 404 (NotFound):** Catch this and log a warning that the item doesn't exist.
    *   **B) Status Code 400 (BadRequest):** Catch this and retry the operation after a short delay.
    *   **C) Status Code 409 (Conflict):** Catch this and inform the user that the item already exists, or proceed with an update operation instead.
    *   **D) Status Code 429 (TooManyRequests):** Catch this and immediately throw a critical error.

    **Correct Answer:** C) Status Code 409 (Conflict): Catch this and inform the user that the item already exists, or proceed with an update operation instead.
    **Explanation:** When you attempt to `CreateItemAsync` an item with an `id` and `partitionKey` combination that already exists in the container, Azure Cosmos DB will return a `409 Conflict` status code. Catching this specific `CosmosException` allows your application to handle the scenario gracefully. You might then choose to notify the user, log the event, or, if appropriate for your business logic, switch to an `UpsertItemAsync` or `ReplaceItemAsync` operation to update the existing item instead of failing the creation.

#### AI generation note
Create a 12-minute live coding video. The video should start by showing the Azure Portal to locate the Cosmos DB endpoint URI and primary key. Then, transition to Visual Studio, demonstrating the setup of a .NET console application, installation of the `Microsoft.Azure.Cosmos` NuGet package, and the initialization of `CosmosClient`. Walk through the provided starter code step-by-step, explaining each CRUD operation (`CreateItemAsync`, `ReadItemAsync`, `UpsertItemAsync`, `DeleteItemAsync`) and emphasizing the role of `PartitionKey` in each. Show the console output for successful operations and simulate an error (e.g., trying to read a non-existent item) to demonstrate `CosmosException` handling. Use a split-screen view with code on the left and console output on the right. Conclude with a 2-question interactive mini-quiz on `PartitionKey` usage and error handling.

---

### Chapter 3.2 — Querying Data with the SDKs and LINQ

#### Learning objectives
*   Construct and execute SQL API queries against Azure Cosmos DB using the .NET SDK.
*   Utilize Language Integrated Query (LINQ) to build type-safe queries for Cosmos DB.
*   Implement pagination for large query result sets using continuation tokens.
*   Understand the implications and performance characteristics of cross-partition queries.
*   Monitor and optimize Request Unit (RU) consumption for query operations.

#### Detailed lesson content
After mastering basic CRUD operations, the next essential skill for any Cosmos DB developer is querying data efficiently. Azure Cosmos DB exposes a powerful SQL API, allowing you to query your JSON documents using a familiar SQL-like syntax. The .NET SDK provides robust mechanisms to execute these queries, and it also offers the convenience of Language Integrated Query (LINQ) for a more object-oriented approach.

Executing raw SQL queries through the SDK is straightforward. You'll typically use the `Container.GetItemQueryIterator<T>(queryDefinition)` method. The `QueryDefinition` object is crucial here, as it allows you to construct parameterized SQL queries, which is a critical security best practice to prevent SQL injection attacks. For example, instead of concatenating strings like `SELECT * FROM c WHERE c.category = 'Electronics'`, you would use `new QueryDefinition("SELECT * FROM c WHERE c.category = @category") .WithParameter("@category", "Electronics")`. This ensures that user input is treated as data, not executable code. Once you have the `FeedIterator<T>` (which `GetItemQueryIterator` returns), you iterate through it using a `while (feedIterator.HasMoreResults)` loop and `feedIterator.ReadNextAsync()`, processing batches of results until all items are retrieved.

For C# developers, LINQ offers a more integrated and type-safe way to query data. Instead of writing SQL strings, you can use familiar C# syntax to filter, project, and order your data. The Cosmos DB SDK extends LINQ capabilities, allowing you to write queries against your `IQueryable` collection. You'll typically start with `Container.GetItemLinqQueryable<T>().AsCosmosLinq()`, then apply standard LINQ methods like `Where()`, `Select()`, `OrderBy()`, and finally execute the query with `ToFeedIterator()` or `ToListAsync()`. For instance, to find all products in the "Electronics" category with a price less than $500, you might write: `container.GetItemLinqQueryable<Product>().AsCosmosLinq().Where(p => p.Category == "Electronics" && p.Price < 500).ToFeedIterator()`. The SDK translates these LINQ expressions into optimized SQL queries that are sent to Cosmos DB. The advantages of LINQ include compile-time type checking, which catches errors early, and improved readability for C# developers.

One of the most important aspects of querying in a distributed database like Cosmos DB is understanding query pagination. When a query returns a large number of results, Cosmos DB doesn't send all of them at once. Instead, it returns results in pages, along with a `continuation token`. This token is a string that tells Cosmos DB where to resume the query in the next request. Your application is responsible for managing this token: when you receive a `FeedResponse<T>`, you check `response.ContinuationToken`. If it's not null, you store it and pass it back to the `GetItemQueryIterator` (or `ToFeedIterator` for LINQ) in the next iteration to fetch the subsequent page of results. This mechanism prevents your application from consuming excessive memory and ensures efficient data retrieval for large datasets.

Another critical consideration is cross-partition queries. By default, Cosmos DB queries are scoped to a single logical partition if a `PartitionKey` is provided in the `QueryRequestOptions`. However, if your query doesn't include a filter on the partition key, or if you explicitly set `QueryRequestOptions.MaxConcurrency = -1` and `QueryRequestOptions.MaxItemCount = -1` (or similar options in other SDKs), Cosmos DB performs a cross-partition query. This means the query is fanned out to all physical partitions, and results are aggregated. While necessary for some analytical workloads, cross-partition queries are generally more expensive in terms of Request Units (RUs) and can have higher latency because they involve coordination across multiple servers. Always strive to include a partition key filter in your queries whenever possible to ensure they are single-partition queries, which are significantly more performant and cost-effective.

Monitoring Request Unit (RU) consumption is vital for cost management and performance optimization. Every operation in Cosmos DB, including queries, consumes RUs. The `FeedResponse<T>` object returned by query operations includes a `RequestCharge` property, which tells you exactly how many RUs that specific query consumed. Regularly checking this value, especially for complex or frequently executed queries, helps you identify and optimize expensive operations. Strategies for reducing RU consumption include: using efficient partition keys, creating appropriate indexes, limiting the number of fields projected in `SELECT` statements (only retrieve what you need), and avoiding `ORDER BY` clauses on properties without an index. Ignoring RU consumption can lead to unexpected costs and performance bottlenecks, making it a common mistake for new developers.

#### Key concepts
*   **SQL API:** The query language used by Azure Cosmos DB, similar to SQL.
*   **QueryDefinition:** An object used to construct parameterized SQL queries, preventing SQL injection.
*   **LINQ (Language Integrated Query):** A C# feature allowing type-safe queries against data sources, translated by the SDK into SQL.
*   **FeedIterator<T>:** An iterator used to retrieve query results, typically in pages.
*   **Continuation Token:** A string returned by Cosmos DB to indicate the starting point for the next page of results in a paginated query.
*   **Pagination:** The process of retrieving query results in smaller, manageable chunks.
*   **Cross-Partition Query:** A query that spans multiple physical partitions, generally more expensive and slower than single-partition queries.
*   **Request Units (RUs):** The throughput currency in Azure Cosmos DB, representing the cost of operations.

#### Hands-on activity
**Objective:** Extend the previous .NET console application to insert multiple `Product` items and then query them using both raw SQL API and LINQ, demonstrating pagination and cross-partition querying.

**Instructions:**
1.  Open your existing Visual Studio project from Chapter 3.1.
2.  Modify the `Program.cs` file to add new methods for inserting multiple products and performing queries.
3.  **Crucially:** Ensure your `EndpointUri` and `PrimaryKey` are correctly configured.
4.  Run the application. Observe the console output for query results and RU costs.
5.  Experiment with changing the `WHERE` clause in the SQL query to include/exclude the partition key and observe the RU cost difference.

**Modified Starter Code (`Program.cs` - focus on new methods):**
```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// (Product class and existing CosmosClient/Database/Container setup from Chapter 3.1 remain the same)

public class Program
{
    private static readonly string EndpointUri = "YOUR_COSMOS_DB_ENDPOINT_URI";
    private static readonly string PrimaryKey = "YOUR_COSMOS_DB_PRIMARY_KEY";

    private static CosmosClient cosmosClient;
    private static Database database;
    private static Container container;

    private static readonly string databaseId = "ProductsDB";
    private static readonly string containerId = "Products";
    private static readonly string partitionKeyPath = "/Category";

    public static async Task Main(string[] args)
    {
        try
        {
            cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() {
                ApplicationName = "CosmosDBApp"
            });

            await CreateDatabaseAndContainerAsync();
            await InsertMultipleProductsAsync(); // New method to insert more data
            await QueryProductsWithSqlAsync();   // New method for SQL queries
            await QueryProductsWithLinqAsync();  // New method for LINQ queries
        }
        catch (CosmosException ce)
        {
            Console.WriteLine($"Cosmos DB Exception: {ce.StatusCode} - {ce.Message}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"General Exception: {e.Message}");
        }
        finally
        {
            if (cosmosClient != null)
            {
                cosmosClient.Dispose();
            }
            Console.WriteLine("\nPress any key to exit.");
            Console.ReadKey();
        }
    }

    private static async Task CreateDatabaseAndContainerAsync()
    {
        Console.WriteLine($"\nCreating database: {databaseId}");
        database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
        Console.WriteLine($"Database '{database.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating container: {containerId}");
        // Ensure throughput is set for better query testing (e.g., 400 RUs minimum)
        container = await database.CreateContainerIfNotExistsAsync(containerId, partitionKeyPath, 400);
        Console.WriteLine($"Container '{container.Id}' created or retrieved.");
    }

    private static async Task InsertMultipleProductsAsync()
    {
        Console.WriteLine("\nInserting multiple products...");
        var productsToInsert = new List<Product>
        {
            new Product { Id = Guid.NewGuid().ToString(), Category = "Electronics", Name = "Smartwatch X", Price = 299.99m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Electronics", Name = "Wireless Earbuds", Price = 149.99m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Books", Name = "The Hitchhiker's Guide to the Galaxy", Price = 12.50m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Books", Name = "1984", Price = 9.99m, IsAvailable = false },
            new Product { Id = Guid.NewGuid().ToString(), Category = "HomeGoods", Name = "Coffee Maker", Price = 75.00m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "HomeGoods", Name = "Toaster Oven", Price = 50.00m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Electronics", Name = "Gaming Mouse", Price = 79.99m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Books", Name = "Pride and Prejudice", Price = 8.75m, IsAvailable = true },
            new Product { Id = Guid.NewGuid().ToString(), Category = "Electronics", Name = "Mechanical Keyboard", Price = 120.00m, IsAvailable = false },
            new Product { Id = Guid.NewGuid().ToString(), Category = "HomeGoods", Name = "Blender", Price = 60.00m, IsAvailable = true }
        };

        foreach (var product in productsToInsert)
        {
            try
            {
                await container.CreateItemAsync(product, new PartitionKey(product.Category));
                Console.WriteLine($"  Inserted: {product.Name}");
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.Conflict)
            {
                Console.WriteLine($"  Skipped (already exists): {product.Name}");
            }
        }
        Console.WriteLine("Finished inserting products.");
    }

    private static async Task QueryProductsWithSqlAsync()
    {
        Console.WriteLine("\n--- Querying Products with SQL API (Electronics, paginated) ---");
        string sqlQuery = "SELECT c.id, c.Name, c.Price FROM c WHERE c.Category = @category AND c.Price > @minPrice ORDER BY c.Price DESC";
        QueryDefinition queryDefinition = new QueryDefinition(sqlQuery)
            .WithParameter("@category", "Electronics")
            .WithParameter("@minPrice", 100);

        string continuationToken = null;
        int pageNumber = 1;
        do
        {
            Console.WriteLine($"\n  Fetching page {pageNumber}...");
            FeedIterator<Product> feedIterator = container.GetItemQueryIterator<Product>(
                queryDefinition,
                continuationToken,
                new QueryRequestOptions { MaxItemCount = 3 } // Request 3 items per page
            );

            FeedResponse<Product> response = await feedIterator.ReadNextAsync();
            Console.WriteLine($"  Page RU cost: {response.RequestCharge}");

            foreach (var product in response)
            {
                Console.WriteLine($"    [SQL] Id: {product.Id}, Name: {product.Name}, Price: {product.Price}");
            }

            continuationToken = response.ContinuationToken;
            pageNumber++;
        } while (continuationToken != null);
        Console.WriteLine("--- SQL Query finished ---");

        Console.WriteLine("\n--- Cross-Partition Query Example (All products above $100) ---");
        // No partition key filter, so it's a cross-partition query
        string crossPartitionQuery = "SELECT c.id, c.Name, c.Price, c.Category FROM c WHERE c.Price > 100";
        QueryDefinition crossPartitionQueryDef = new QueryDefinition(crossPartitionQuery);

        FeedIterator<Product> crossPartitionIterator = container.GetItemQueryIterator<Product>(
            crossPartitionQueryDef,
            requestOptions: new QueryRequestOptions {
                MaxConcurrency = -1, // Allow parallel execution across partitions
                MaxItemCount = 100 // Max items to return
            }
        );

        double totalCrossPartitionRUs = 0;
        List<Product> crossPartitionResults = new List<Product>();
        while (crossPartitionIterator.HasMoreResults)
        {
            FeedResponse<Product> response = await crossPartitionIterator.ReadNextAsync();
            totalCrossPartitionRUs += response.RequestCharge;
            crossPartitionResults.AddRange(response.ToList());
        }
        Console.WriteLine($"  Found {crossPartitionResults.Count} products. Total Cross-Partition RU cost: {totalCrossPartitionRUs}");
        foreach (var product in crossPartitionResults)
        {
            Console.WriteLine($"    [Cross-Partition] Name: {product.Name}, Price: {product.Price}, Category: {product.Category}");
        }
        Console.WriteLine("--- Cross-Partition Query finished ---");
    }

    private static async Task QueryProductsWithLinqAsync()
    {
        Console.WriteLine("\n--- Querying Products with LINQ (Books, available) ---");
        // LINQ query for available books
        var linqQuery = container.GetItemLinqQueryable<Product>()
                                 .Where(p => p.Category == "Books" && p.IsAvailable)
                                 .OrderBy(p => p.Name)
                                 .ToFeedIterator(); // Use ToFeedIterator for pagination control

        string continuationToken = null;
        int pageNumber = 1;
        do
        {
            Console.WriteLine($"\n  Fetching page {pageNumber} with LINQ...");
            FeedResponse<Product> response = await linqQuery.ReadNextAsync();
            Console.WriteLine($"  Page RU cost: {response.RequestCharge}");

            foreach (var product in response)
            {
                Console.WriteLine($"    [LINQ] Name: {product.Name}, Price: {product.Price}");
            }

            continuationToken = response.ContinuationToken;
            pageNumber++;
        } while (continuationToken != null);
        Console.WriteLine("--- LINQ Query finished ---");
    }
}
```

#### Assessment idea
1.  **Question:** You need to retrieve all products from the "Electronics" category that cost more than $500. You want to use the .NET SDK and benefit from compile-time type checking. Which of the following approaches is most suitable, and why?
    *   **A) Raw SQL Query:** `SELECT * FROM c WHERE c.Category = 'Electronics' AND c.Price > 500` executed via `GetItemQueryIterator<T>`.
    *   **B) LINQ Query:** `container.GetItemLinqQueryable<Product>().AsCosmosLinq().Where(p => p.Category == "Electronics" && p.Price > 500).ToFeedIterator()`.
    *   **C) Point Read:** Use `ReadItemAsync<Product>(id, new PartitionKey("Electronics"))` for each product.
    *   **D) Stored Procedure:** Write a JavaScript stored procedure to filter and return the products.

    **Correct Answer:** B) LINQ Query: `container.GetItemLinqQueryable<Product>().AsCosmosLinq().Where(p => p.Category == "Electronics" && p.Price > 500).ToFeedIterator()`.
    **Explanation:** The question specifically asks for "compile-time type checking," which is a key advantage of LINQ. While a raw SQL query (A) would work, it lacks type safety. Point reads (C) are for single-item retrieval, not for filtering multiple items. Stored procedures (D) are generally for complex transactional operations or bulk operations, not typically for simple filtering and projection that LINQ handles elegantly and efficiently. The LINQ approach provides strong typing, making your code less prone to runtime errors related to property names or types, and the SDK translates it into an optimized SQL query.

2.  **Question:** Your application needs to display a list of customer orders, potentially thousands of them. To prevent memory issues and improve responsiveness, you decide to implement pagination. Which mechanism provided by the Azure Cosmos DB SDK is essential for fetching subsequent pages of results after the initial query?
    *   **A) `MaxItemCount` property in `QueryRequestOptions`:** This limits the total number of items returned by the entire query.
    *   **B) `continuation token`:** This opaque string is returned with each page of results and indicates where to resume the next request.
    *   **C) `RequestCharge` property in `FeedResponse`:** This tells you the cost of the current page, but not how to get the next.
    *   **D) `OrderBy` clause in the SQL query:** This sorts the results, but doesn't handle pagination.

    **Correct Answer:** B) `continuation token`: This opaque string is returned with each page of results and indicates where to resume the next request.
    **Explanation:** The `continuation token` is the cornerstone of efficient pagination in Azure Cosmos DB. When a query returns more results than can fit in a single `FeedResponse`, Cosmos DB provides this token. Your application must capture this token and pass it back into the `GetItemQueryIterator` (or `ToFeedIterator`) constructor for the subsequent request to fetch the next batch of results. `MaxItemCount` (A) helps define the page size, but the `continuation token` is what links the pages together. `RequestCharge` (C) is for monitoring RUs, and `OrderBy` (D) is for sorting.

#### AI generation note
Create a 15-minute live coding video. Begin by extending the previous console application to insert more diverse data for querying. Demonstrate both SQL API querying with `QueryDefinition` (emphasizing parameterized queries) and LINQ querying with `AsCosmosLinq()`. Show how to implement query pagination using the `continuation token` for both SQL and LINQ. Include a clear demonstration of a cross-partition query, highlighting its RU cost compared to a single-partition query, and explain when it's appropriate. Use a split-screen view for code and console output, and include a visual overlay to explain the `continuation token` flow. End with an interactive coding exercise where learners modify a LINQ query to add another filter and an `OrderBy` clause.

---

### Chapter 3.3 — Working with Change Feed and Stored Procedures

#### Learning objectives
*   Explain the purpose and common use cases of the Azure Cosmos DB Change Feed.
*   Implement a Change Feed Processor using the .NET SDK to react to data changes.
*   Understand the role and benefits of server-side programming with Stored Procedures.
*   Create and execute JavaScript-based Stored Procedures using the .NET SDK.
*   Recognize the transactional scope and limitations of Stored Procedures.

#### Detailed lesson content
Azure Cosmos DB isn't just a database for storing and querying data; it's also a powerful platform for building reactive, event-driven applications. Two key features that enable this are the Change Feed and Stored Procedures. The Change Feed provides a persistent, ordered, and fault-tolerant record of all changes that happen in your Cosmos DB container, while Stored Procedures allow you to execute server-side logic directly on your data.

Let's start with the **Change Feed**. Imagine you need to synchronize data with a search index, update a materialized view, or send real-time notifications whenever an item in your container is created or modified. The Change Feed is perfect for these scenarios. It essentially exposes a stream of changes, allowing applications to "listen" for new data. The most common way to consume the Change Feed is by using the Change Feed Processor library (available for .NET, Java, and JavaScript SDKs). This library simplifies the complex task of processing changes by handling checkpointing, leasing, and parallel processing across multiple consumer instances. To set it up, you'll need a "lease container" in your Cosmos DB account, which the processor uses to store its state (i.e., which changes have been processed). You then create an instance of `ChangeFeedProcessorBuilder`, configure it with your source container, lease container, and a delegate method (`HandleChangesAsync`) that will be invoked whenever new changes are available. The processor automatically manages scale-out by distributing leases among multiple instances, ensuring that each change is processed exactly once. Common mistakes include not setting up a dedicated lease container or not handling transient errors within your `HandleChangesAsync` method, which could lead to missed changes or processing delays.

Next, we explore **Stored Procedures, Triggers, and User-Defined Functions (UDFs)**. These are server-side JavaScript components that execute directly within the Cosmos DB engine, close to your data. Stored Procedures are particularly useful for scenarios requiring transactional consistency across multiple operations on items within the *same logical partition*. For example, if you need to transfer funds between two accounts that reside in the same partition, a stored procedure can ensure that both debit and credit operations succeed or fail together atomically. This is a crucial distinction: stored procedures are transactional *within a single logical partition only*. They cannot guarantee atomicity across different partitions. To create a stored procedure, you write JavaScript code that defines the logic. This JavaScript code is then registered with your Cosmos DB container via the SDK using `Container.Scripts.CreateStoredProcedureAsync()`. Once registered, you can execute it using `Container.Scripts.ExecuteStoredProcedureAsync<T>()`, passing any necessary parameters.

When writing JavaScript for stored procedures, you have access to a server-side context object (`getContext()`) which provides methods to interact with the database, such as `getContext().getResponse().setBody()` to return results, or `getContext().getCollection().createDocument()` to insert items. It's important to be mindful of the Request Unit (RU) limit and execution time limit (5 seconds) for stored procedures. If a stored procedure exceeds these limits, it will be terminated, and an exception will be thrown. You must design your stored procedures to be idempotent and handle potential retries. A common mistake is trying to perform complex analytical queries or cross-partition operations within a stored procedure, which is not its intended purpose and will likely lead to timeouts or excessive RU consumption. Stored procedures are best suited for small, high-performance, transactional batch operations on data within a single partition. For larger, non-transactional batch operations, or for complex analytics, client-side batching or the Change Feed are more appropriate.

#### Key concepts
*   **Change Feed:** A persistent, ordered record of changes to items in an Azure Cosmos DB container.
*   **Change Feed Processor:** A library that simplifies consuming the Change Feed, handling checkpointing, leasing, and parallel processing.
*   **Lease Container:** A dedicated Cosmos DB container used by the Change Feed Processor to store state and manage leases.
*   **HandleChangesAsync:** The delegate method in the Change Feed Processor where your application logic processes incoming changes.
*   **Stored Procedure:** A server-side JavaScript program executed atomically within a single logical partition in Cosmos DB.
*   **Transactional Consistency:** Guarantee that a series of operations either all succeed or all fail together.
*   **getContext():** The server-side context object available within Cosmos DB stored procedures, providing access to collection operations and response methods.
*   **Triggers:** Server-side JavaScript code that executes before (pre-trigger) or after (post-trigger) an item operation.
*   **User-Defined Functions (UDFs):** Server-side JavaScript functions that extend the SQL query language.

#### Hands-on activity
**Objective:** Implement a Change Feed Processor to monitor changes in your `Products` container and create/execute a simple stored procedure to update a product's stock.

**Instructions:**
1.  Open your existing Visual Studio project.
2.  **Create a new container for leases:** In the Azure Portal, navigate to your `ProductsDB` database and create a new container named `leases` with `/id` as its partition key. This is crucial for the Change Feed Processor.
3.  Modify `Program.cs` to include the Change Feed Processor setup and a method to register and execute a stored procedure.
4.  **Crucially:** Update `LeaseContainerId` with the name of your new lease container.
5.  Run the application. Observe the Change Feed Processor logging changes.
6.  While the application is running, manually create or update a product in the Azure Portal's Data Explorer, or use your existing CRUD methods to trigger changes. Watch the console for Change Feed notifications.
7.  Observe the output of the stored procedure execution.

**Modified Starter Code (`Program.cs` - focus on new methods):**
```csharp
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Scripts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

// (Product class and existing CosmosClient/Database/Container setup from Chapter 3.1 & 3.2 remain the same)

public class Program
{
    private static readonly string EndpointUri = "YOUR_COSMOS_DB_ENDPOINT_URI";
    private static readonly string PrimaryKey = "YOUR_COSMOS_DB_PRIMARY_KEY";

    private static CosmosClient cosmosClient;
    private static Database database;
    private static Container container;
    private static Container leaseContainer; // New: for Change Feed Processor

    private static readonly string databaseId = "ProductsDB";
    private static readonly string containerId = "Products";
    private static readonly string leaseContainerId = "leases"; // IMPORTANT: Use the name of your lease container
    private static readonly string partitionKeyPath = "/Category";

    private static ChangeFeedProcessor changeFeedProcessor; // New: Change Feed Processor instance

    public static async Task Main(string[] args)
    {
        try
        {
            cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() {
                ApplicationName = "CosmosDBApp"
            });

            await CreateDatabaseAndContainerAsync();
            await StartChangeFeedProcessorAsync(); // New: Start the Change Feed Processor
            await InsertMultipleProductsAsync(); // Insert some data to trigger change feed
            await ExecuteStoredProcedureAsync(); // New: Execute a stored procedure

            Console.WriteLine("\nChange Feed Processor is running. Make changes in Cosmos DB (e.g., add/update products) to see events.");
            Console.WriteLine("Press any key to stop the Change Feed Processor and exit.");
            Console.ReadKey();

            await StopChangeFeedProcessorAsync(); // New: Stop the Change Feed Processor
        }
        catch (CosmosException ce)
        {
            Console.WriteLine($"Cosmos DB Exception: {ce.StatusCode} - {ce.Message}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"General Exception: {e.Message}");
        }
        finally
        {
            if (cosmosClient != null)
            {
                cosmosClient.Dispose();
            }
        }
    }

    private static async Task CreateDatabaseAndContainerAsync()
    {
        Console.WriteLine($"\nCreating database: {databaseId}");
        database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
        Console.WriteLine($"Database '{database.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating container: {containerId}");
        container = await database.CreateContainerIfNotExistsAsync(containerId, partitionKeyPath, 400);
        Console.WriteLine($"Container '{container.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating lease container: {leaseContainerId}");
        // Lease container requires /id as partition key
        leaseContainer = await database.CreateContainerIfNotExistsAsync(leaseContainerId, "/id", 400);
        Console.WriteLine($"Lease container '{leaseContainer.Id}' created or retrieved.");
    }

    // (InsertMultipleProductsAsync, QueryProductsWithSqlAsync, QueryProductsWithLinqAsync from Chapter 3.2 remain the same)

    private static async Task StartChangeFeedProcessorAsync()
    {
        Console.WriteLine("\nStarting Change Feed Processor...");
        changeFeedProcessor = container.GetChangeFeedProcessorBuilder<Product>("productChangeProcessor", HandleChangesAsync)
            .WithInstanceName("myAppInstance")
            .WithLeaseContainer(leaseContainer)
            .Build();

        await changeFeedProcessor.StartAsync();
        Console.WriteLine("Change Feed Processor started.");
    }

    private static async Task StopChangeFeedProcessorAsync()
    {
        if (changeFeedProcessor != null)
        {
            Console.WriteLine("\nStopping Change Feed Processor...");
            await changeFeedProcessor.StopAsync();
            Console.WriteLine("Change Feed Processor stopped.");
        }
    }

    private static async Task HandleChangesAsync(IReadOnlyCollection<Product> changes, CancellationToken cancellationToken)
    {
        Console.WriteLine($"\n--- Change Feed: {changes.Count} changes received ---");
        foreach (var product in changes)
        {
            Console.WriteLine($"  Change detected: Product '{product.Name}' (ID: {product.Id}, Category: {product.Category})");
            // Here you would implement your business logic, e.g., update a search index, send a notification, etc.
        }
        Console.WriteLine("--- End Change Feed batch ---");
    }

    private static async Task ExecuteStoredProcedureAsync()
    {
        Console.WriteLine("\n--- Stored Procedure Example ---");

        // 1. Define the Stored Procedure JavaScript
        string sprocId = "updateProductStock";
        string sprocBody = @"
            function updateProductStock(productId, category, newStock) {
                var context = getContext();
                var collection = context.getCollection();
                var response = context.getResponse();

                // Query for the item within the current partition
                var query = 'SELECT * FROM c WHERE c.id = ""' + productId + '"" AND c.Category = ""' + category + '""';
                var accept = collection.queryDocuments(
                    collection.getSelfLink(),
                    query,
                    function (err, feed, options) {
                        if (err) throw err;

                        if (!feed || !feed.length) {
                            response.setBody('Product not found in this partition.');
                        } else {
                            var product = feed[0];
                            product.Stock = newStock; // Assuming 'Stock' property exists or will be added
                            var replaceAccept = collection.replaceDocument(
                                product._self,
                                product,
                                function (err, updatedProduct) {
                                    if (err) throw err;
                                    response.setBody('Updated product ' + updatedProduct.id + ' stock to ' + updatedProduct.Stock);
                                }
                            );
                            if (!replaceAccept) throw new Error('Failed to replace document.');
                        }
                    }
                );
                if (!accept) throw new Error('Failed to query document.');
            }";

        // 2. Create/Replace the Stored Procedure
        Console.WriteLine($"\nRegistering Stored Procedure: {sprocId}");
        try
        {
            StoredProcedureResponse sprocResponse = await container.Scripts.CreateStoredProcedureAsync(
                new StoredProcedureProperties
                {
                    Id = sprocId,
                    Body = sprocBody
                });
            Console.WriteLine($"Stored Procedure '{sprocResponse.Resource.Id}' registered. RU cost: {sprocResponse.RequestCharge}");
        }
        catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.Conflict)
        {
            Console.WriteLine($"Stored Procedure '{sprocId}' already exists, attempting to replace.");
            StoredProcedureResponse sprocResponse = await container.Scripts.ReplaceStoredProcedureAsync(
                new StoredProcedureProperties
                {
                    Id = sprocId,
                    Body = sprocBody
                });
            Console.WriteLine($"Stored Procedure '{sprocResponse.Resource.Id}' replaced. RU cost: {sprocResponse.RequestCharge}");
        }

        // 3. Find an existing product to update its stock
        // For demonstration, let's find the "Smartwatch X" which is in "Electronics" category
        Product productToUpdate = (await container.GetItemLinqQueryable<Product>()
                                                  .Where(p => p.Name == "Smartwatch X" && p.Category == "Electronics")
                                                  .ToFeedIterator().ReadNextAsync()).FirstOrDefault();

        if (productToUpdate != null)
        {
            Console.WriteLine($"\nExecuting Stored Procedure '{sprocId}' for product '{productToUpdate.Name}' (ID: {productToUpdate.Id})...");
            int newStockValue = 50; // Example new stock value

            // Execute the stored procedure, passing parameters and the partition key
            ItemResponse<string> executeResponse = await container.Scripts.ExecuteStoredProcedureAsync<string>(
                sprocId,
                new PartitionKey(productToUpdate.Category), // Crucial: PartitionKey for stored procedure execution
                new dynamic[] { productToUpdate.Id, productToUpdate.Category, newStockValue }
            );

            Console.WriteLine($"Stored Procedure result: {executeResponse.Resource}");
            Console.WriteLine($"Stored Procedure RU cost: {executeResponse.RequestCharge}");

            // Verify the update by reading the item (optional)
            ItemResponse<Product> readBackResponse = await container.ReadItemAsync<Product>(productToUpdate.Id, new PartitionKey(productToUpdate.Category));
            Console.WriteLine($"Verified product stock after SP execution: {readBackResponse.Resource.Name}, Stock: {readBackResponse.Resource.Stock ?? "N/A (check Data Explorer)"}");
        }
        else
        {
            Console.WriteLine("Product 'Smartwatch X' not found to execute stored procedure on. Please ensure it was inserted.");
        }
        Console.WriteLine("--- Stored Procedure finished ---");
    }
}
```

#### Assessment idea
1.  **Question:** You are building an e-commerce application and want to update a user's loyalty points in a separate analytical store every time an order is placed in Azure Cosmos DB. Which Azure Cosmos DB feature is best suited for reliably capturing these order creation events and triggering the loyalty point update process?
    *   **A) Stored Procedures:** Execute a stored procedure after each order creation to update loyalty points.
    *   **B) User-Defined Functions (UDFs):** Create a UDF to calculate loyalty points and use it in a query.
    *   **C) Change Feed:** Use the Change Feed Processor to listen for new order items and then update loyalty points.
    *   **D) Direct SDK Calls:** Make a separate SDK call to the analytical store immediately after creating the order item.

    **Correct Answer:** C) Change Feed: Use the Change Feed Processor to listen for new order items and then update loyalty points.
    **Explanation:** The Change Feed is designed for exactly this kind of scenario: reliably capturing all changes (creations, updates, deletions) to items in a container and enabling downstream processing. The Change Feed Processor handles fault tolerance, checkpointing, and scale. Stored procedures (A) are for transactional operations *within a single partition* and are not ideal for triggering external processes. UDFs (B) are for extending query capabilities. Direct SDK calls (D) would couple the order creation tightly with the loyalty update, making the system less resilient and potentially slower if the analytical store is unavailable.

2.  **Question:** You need to implement a complex business logic that involves decrementing inventory for multiple product items and simultaneously creating a new order item. All these operations must succeed or fail together as a single atomic unit. The product items and the order item all reside within the *same logical partition*. Which Azure Cosmos DB feature is the most appropriate for this requirement?
    *   **A) Client-side Transactional Batch:** Use the SDK's `TransactionalBatch` feature to group operations.
    *   **B) Stored Procedure:** Write a JavaScript stored procedure to perform all operations.
    *   **C) Change Feed:** Listen for changes and then perform the operations.
    *   **D) Multiple individual SDK calls:** Perform each operation separately and handle errors in client code.

    **Correct Answer:** B) Stored Procedure: Write a JavaScript stored procedure to perform all operations.
    **Explanation:** Stored procedures are specifically designed to provide transactional consistency for multiple operations that occur *within a single logical partition*. They execute atomically on the server side. While `TransactionalBatch` (A) also provides transactional guarantees for operations within a single partition, the question implies "complex business logic" which often benefits from server-side execution to reduce network round trips and ensure atomicity at the database level. Change Feed (C) is for reacting to changes, not for initiating transactional operations. Multiple individual SDK calls (D) would not guarantee atomicity.

#### AI generation note
Create a 18-minute mixed-format lesson. Start with 5 minutes of animated slides explaining the Change Feed concept, its architecture (source container, lease container, processor instances), and common use cases. Then, transition to a 10-minute live coding demo in Visual Studio. Show the setup of the Change Feed Processor, including the `HandleChangesAsync` method. Demonstrate how to register a simple JavaScript stored procedure via the SDK and then execute it, passing parameters and the partition key. Show the console output for both Change Feed events and stored procedure results. Conclude with 3 minutes of slides explaining the transactional scope of stored procedures and their limitations. Include a reflection prompt asking learners to consider a real-world scenario where the Change Feed would be beneficial.

---

### Chapter 3.4 — Optimizing Performance and Handling Concurrency

#### Learning objectives
*   Identify factors influencing Request Unit (RU) consumption and strategies for optimization.
*   Implement retry policies to gracefully handle throughput throttling (HTTP 429 errors).
*   Apply optimistic concurrency control using `ETag` for safe concurrent updates.
*   Utilize `TransactionalBatch` for atomic, high-performance operations within a single logical partition.
*   Understand and apply SDK best practices for maximizing application performance.

#### Detailed lesson content
Building performant and cost-effective applications with Azure Cosmos DB requires a deep understanding of how to optimize operations and handle concurrency. Request Units (RUs) are the currency of throughput in Cosmos DB, and every operation, from a simple point read to a complex cross-partition query, consumes RUs. Optimizing RU consumption is paramount for managing costs and ensuring your application scales efficiently.

**Request Unit Optimization:** RUs are influenced by several factors: item size (larger items consume more RUs), index policy (more indexes or complex indexing can increase write RUs), query complexity (filters, aggregations, ordering, and cross-partition queries all impact RUs), and consistency level (stronger consistency levels can be slightly more expensive). To optimize, always monitor the `RequestCharge` property in the SDK's response objects. Strategies include:
1.  **Efficient Data Modeling:** Choose an optimal partition key to enable single-partition operations.
2.  **Indexing:** Only index properties that are frequently filtered or ordered. Avoid indexing everything (`*`) unless absolutely necessary, as it increases write costs.
3.  **Point Reads:** Prefer `ReadItemAsync` (point reads) over queries when you know the `id` and `partitionKey`, as they are the cheapest read operations.
4.  **Query Optimization:** Use `QueryDefinition` with parameters, include `partitionKey` filters, and project only necessary fields (`SELECT c.id, c.name` instead of `SELECT *`). Avoid `ORDER BY` on unindexed properties.
5.  **Batching:** For multiple write operations within the same logical partition, use `TransactionalBatch` to reduce network round trips and potentially RUs.

**Handling Throttling (HTTP 429):** When your application consumes RUs faster than your provisioned throughput, Cosmos DB will throttle requests, returning an HTTP 429 (Too Many Requests) status code. The SDKs are designed with built-in retry mechanisms for 429s, which is a significant advantage. However, you should still be aware of it. The `CosmosException` for a 429 will include a `RetryAfter` header, indicating how long your application should wait before retrying the request. While the SDK handles basic retries, for production applications, you might implement more sophisticated retry policies (e.g., exponential backoff with jitter) at a higher level to manage application-wide load. Ignoring 429s or not implementing retries will lead to failed operations and poor user experience.

**Optimistic Concurrency Control (OCC):** In multi-user applications, multiple clients might attempt to update the same item concurrently. Without proper concurrency control, the "last write wins," potentially overwriting legitimate changes. Azure Cosmos DB supports optimistic concurrency control using `ETag` (Entity Tag). Every item in Cosmos DB has an `_etag` property, which is a string identifier that changes whenever the item is updated. When you perform an update or delete operation (e.g., `ReplaceItemAsync` or `DeleteItemAsync`), you can pass the `ETag` of the item you originally read. If the `ETag` on the server matches the `ETag` you provided, the operation succeeds. If they don't match (meaning another client modified the item in the interim), Cosmos DB returns an HTTP 412 (Precondition Failed) status code. Your application can then decide how to resolve the conflict, perhaps by re-reading the item, merging changes, or prompting the user. This prevents accidental data loss due to concurrent modifications.

**TransactionalBatch:** For scenarios requiring atomic operations on multiple items *within the same logical partition*, `TransactionalBatch` is a powerful feature. Unlike stored procedures, which execute JavaScript on the server, `TransactionalBatch` is a client-side API that groups a set of point operations (Create, Upsert, Read, Replace, Delete) and sends them to Cosmos DB as a single request. If any operation within the batch fails, the entire batch is rolled back. This ensures atomicity and can significantly improve performance by reducing network round trips and potentially RU consumption for related operations. For example, if you need to create an order item and simultaneously update the stock of several product items, and all these items share the same partition key (e.g., `orderId` or `customerId`), `TransactionalBatch` is an ideal solution.

**SDK Performance Best Practices:**
1.  **Singleton `CosmosClient`:** Instantiate `CosmosClient` once per application lifetime and reuse it. Creating a new client for every operation is inefficient and resource-intensive.
2.  **Direct Connectivity Mode:** Configure your `CosmosClient` to use `Direct` connectivity mode (`new CosmosClientOptions { ConnectionMode = ConnectionMode.Direct }`). This mode offers better performance by connecting directly to backend replicas, bypassing the gateway for data operations.
3.  **Asynchronous Operations:** Always use the asynchronous methods (`*Async`) provided by the SDK. This prevents blocking threads and improves application responsiveness and scalability.
4.  **Indexing Strategy:** As mentioned, apply a thoughtful indexing strategy.
5.  **Payload Size:** Keep item sizes as small as possible. Avoid storing large binary data directly in Cosmos DB; instead, store metadata and links to blob storage.

By understanding and applying these optimization and concurrency handling techniques, you can build highly performant, scalable, and resilient applications with Azure Cosmos DB.

#### Key concepts
*   **Request Units (RUs):** The throughput currency for all operations in Azure Cosmos DB.
*   **Throttling (HTTP 429):** When Cosmos DB limits requests due to exceeding provisioned throughput.
*   **Retry Policy:** Mechanism to automatically reattempt failed operations, especially for throttling.
*   **Optimistic Concurrency Control (OCC):** A strategy to manage concurrent updates to data without locking, using `ETag`s.
*   **ETag (Entity Tag):** A unique identifier for an item's version, used for OCC.
*   **HTTP 412 (Precondition Failed):** Status code returned when an `ETag` mismatch occurs during an update/delete.
*   **TransactionalBatch:** A client-side SDK feature for grouping multiple point operations within a single logical partition into an atomic transaction.
*   **Singleton CosmosClient:** The practice of creating a single instance of `CosmosClient` and reusing it throughout the application.
*   **Direct Connectivity Mode:** A connection mode that allows the SDK to connect directly to backend replicas for improved performance.

#### Hands-on activity
**Objective:** Modify your application to demonstrate RU monitoring, implement optimistic concurrency control using `ETag`, and use `TransactionalBatch` for a multi-item, single-partition atomic update.

**Instructions:**
1.  Open your existing Visual Studio project.
2.  Add new methods to `Program.cs` to showcase RU monitoring, OCC, and `TransactionalBatch`.
3.  **Crucially:** Ensure your `EndpointUri` and `PrimaryKey` are correctly configured.
4.  Run the application. Observe the RU costs for various operations.
5.  Simulate a concurrency conflict by attempting to update the same item twice, once with an outdated `ETag`, and observe the `412 Precondition Failed` error.
6.  Observe the atomic behavior of `TransactionalBatch`.

**Modified Starter Code (`Program.cs` - focus on new methods):**
```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

// (Product class and existing CosmosClient/Database/Container setup from previous chapters remain the same)

public class Program
{
    private static readonly string EndpointUri = "YOUR_COSMOS_DB_ENDPOINT_URI";
    private static readonly string PrimaryKey = "YOUR_COSMOS_DB_PRIMARY_KEY";

    private static CosmosClient cosmosClient;
    private static Database database;
    private static Container container;
    private static Container leaseContainer;

    private static readonly string databaseId = "ProductsDB";
    private static readonly string containerId = "Products";
    private static readonly string leaseContainerId = "leases";
    private static readonly string partitionKeyPath = "/Category";

    private static ChangeFeedProcessor changeFeedProcessor;

    public static async Task Main(string[] args)
    {
        try
        {
            cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() {
                ApplicationName = "CosmosDBApp",
                ConnectionMode = ConnectionMode.Direct // Use Direct mode for better performance
            });

            await CreateDatabaseAndContainerAsync();
            await InsertMultipleProductsAsync(); // Ensure we have data
            await MonitorRuConsumptionAsync(); // New: Monitor RUs
            await DemonstrateOptimisticConcurrencyAsync(); // New: OCC
            await DemonstrateTransactionalBatchAsync(); // New: TransactionalBatch

            // (Optional: Start/Stop Change Feed Processor if you want to keep it running for background changes)
            // await StartChangeFeedProcessorAsync();
            // Console.WriteLine("\nPress any key to stop Change Feed Processor and exit.");
            // Console.ReadKey();
            // await StopChangeFeedProcessorAsync();
        }
        catch (CosmosException ce)
        {
            Console.WriteLine($"Cosmos DB Exception: {ce.StatusCode} - {ce.Message}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"General Exception: {e.Message}");
        }
        finally
        {
            if (cosmosClient != null)
            {
                cosmosClient.Dispose();
            }
            Console.WriteLine("\nPress any key to exit.");
            Console.ReadKey();
        }
    }

    private static async Task CreateDatabaseAndContainerAsync()
    {
        Console.WriteLine($"\nCreating database: {databaseId}");
        database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
        Console.WriteLine($"Database '{database.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating container: {containerId}");
        container = await database.CreateContainerIfNotExistsAsync(containerId, partitionKeyPath, 400); // Ensure 400 RUs
        Console.WriteLine($"Container '{container.Id}' created or retrieved.");

        Console.WriteLine($"\nCreating lease container: {leaseContainerId}");
        leaseContainer = await database.CreateContainerIfNotExistsAsync(leaseContainerId, "/id", 400);
        Console.WriteLine($"Lease container '{leaseContainer.Id}' created or retrieved.");
    }

    // (InsertMultipleProductsAsync, QueryProductsWithSqlAsync, QueryProductsWithLinqAsync,
    // StartChangeFeedProcessorAsync, StopChangeFeedProcessorAsync, HandleChangesAsync,
    // ExecuteStoredProcedureAsync from previous chapters remain the same)

    private static async Task MonitorRuConsumptionAsync()
    {
        Console.WriteLine("\n--- Monitoring RU Consumption ---");

        // Point Read
        Product sampleProduct = (await container.GetItemLinqQueryable<Product>()
                                                .Where(p => p.Category == "Electronics")
                                                .ToFeedIterator().ReadNextAsync()).FirstOrDefault();
        if (sampleProduct != null)
        {
            ItemResponse<Product> readResponse = await container.ReadItemAsync<Product>(sampleProduct.Id, new PartitionKey(sampleProduct.Category));
            Console.WriteLine($"  Point Read for '{sampleProduct.Name}': RU cost = {readResponse.RequestCharge}");
        }
        else
        {
            Console.WriteLine("  No sample product found for point read demonstration.");
        }

        // Single-partition Query
        QueryDefinition singlePartitionQuery = new QueryDefinition("SELECT c.id, c.Name FROM c WHERE c.Category = 'Books'");
        FeedIterator<dynamic> singlePartitionIterator = container.GetItemQueryIterator<dynamic>(singlePartitionQuery, requestOptions: new QueryRequestOptions {
            PartitionKey = new PartitionKey("Books") // Explicitly specify partition key
        });
        double singlePartitionRUs = 0;
        while (singlePartitionIterator.HasMoreResults)
        {
            FeedResponse<dynamic> response = await singlePartitionIterator.ReadNextAsync();
            singlePartitionRUs += response.RequestCharge;
        }
        Console.WriteLine($"  Single-Partition Query (Category 'Books'): Total RU cost = {singlePartitionRUs}");

        // Cross-partition Query
        QueryDefinition crossPartitionQuery = new QueryDefinition("SELECT c.id, c.Name FROM c WHERE c.Price > 50");
        FeedIterator<dynamic> crossPartitionIterator = container.GetItemQueryIterator<dynamic>(crossPartitionQuery, requestOptions: new QueryRequestOptions {
            MaxConcurrency = -1 // Allow parallel execution across partitions
        });
        double crossPartitionRUs = 0;
        while (crossPartitionIterator.HasMoreResults)
        {
            FeedResponse<dynamic> response = await crossPartitionIterator.ReadNextAsync();
            crossPartitionRUs += response.RequestCharge;
        }
        Console.WriteLine($"  Cross-Partition Query (Price > 50): Total RU cost = {crossPartitionRUs}");
        Console.WriteLine("--- RU Monitoring finished ---");
    }

    private static async Task DemonstrateOptimisticConcurrencyAsync()
    {
        Console.WriteLine("\n--- Demonstrating Optimistic Concurrency Control (OCC) ---");

        // 1. Read an item
        Product originalProduct = (await container.GetItemLinqQueryable<Product>()
                                                  .Where(p => p.Name == "Smartwatch X" && p.Category == "Electronics")
                                                  .ToFeedIterator().ReadNextAsync()).FirstOrDefault();

        if (originalProduct == null)
        {
            Console.WriteLine("  Smartwatch X not found for OCC demo. Please ensure it's inserted.");
            return;
        }

        Console.WriteLine($"  Original Product: {originalProduct.Name}, Price: {originalProduct.Price}, ETag: {originalProduct._etag}");

        // 2. Simulate a concurrent update by another client (or by us directly)
        Product concurrentUpdateProduct = new Product
        {
            Id = originalProduct.Id,
            Category = originalProduct.Category,
            Name = originalProduct.Name,
            Price = originalProduct.Price + 10, // Price increased by another client
            IsAvailable = originalProduct.IsAvailable
        };
        await container.ReplaceItemAsync(concurrentUpdateProduct, concurrentUpdateProduct.Id, new PartitionKey(concurrentUpdateProduct.Category));
        Console.WriteLine($"  Simulated concurrent update. Price changed to {concurrentUpdateProduct.Price}.");

        // 3. Now, try to update the original product using its stale ETag
        originalProduct.Price = originalProduct.Price - 50; // Our intended update
        Console.WriteLine($"  Attempting to update original product with stale ETag: {originalProduct._etag}");
        try
        {
            ItemResponse<Product> ourUpdateResponse = await container.ReplaceItemAsync(
                originalProduct,
                originalProduct.Id,
                new PartitionKey(originalProduct.Category),
                new ItemRequestOptions { IfMatchEtag = originalProduct._etag } // Use IfMatchEtag for OCC
            );
            Console.WriteLine($"  Our update succeeded: {ourUpdateResponse.Resource.Name}, New Price: {ourUpdateResponse.Resource.Price}");
        }
        catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.PreconditionFailed)
        {
            Console.WriteLine($"  OCC Conflict detected! Status: {ex.StatusCode}. ETag mismatch. Our update failed.");
            Console.WriteLine("  This is expected, as another client modified the item.");
            // Here, you would typically re-read the item, merge changes, or inform the user.
        }
        catch (Exception ex)
        {
            Console.WriteLine($"  Unexpected error during OCC demo: {ex.Message}");
        }
        Console.WriteLine("--- OCC Demonstration finished ---");
    }

    private static async Task DemonstrateTransactionalBatchAsync()
    {
        Console.WriteLine("\n--- Demonstrating TransactionalBatch ---");

        // Scenario: Update the price of two products and add a log entry, all within the same partition.
        // For this demo, let's assume 'Electronics' is a single logical partition.
        string partitionKeyValue = "Electronics";

        Product laptop = (await container.GetItemLinqQueryable<Product>()
                                         .Where(p => p.Name == "Laptop Pro X" && p.Category == partitionKeyValue)
                                         .ToFeedIterator().ReadNextAsync()).FirstOrDefault();
        Product earbuds = (await container.GetItemLinqQueryable<Product>()
                                          .Where(p => p.Name == "Wireless Earbuds" && p.Category == partitionKeyValue)
                                          .ToFeedIterator().ReadNextAsync()).FirstOrDefault();

        if (laptop == null || earbuds == null)
        {
            Console.WriteLine("  Laptop Pro X or Wireless Earbuds not found for TransactionalBatch demo. Please ensure they are inserted.");
            return;
        }

        Console.WriteLine($"  Original Laptop price: {laptop.Price}");
        Console.WriteLine($"  Original Earbuds price: {earbuds.Price}");

        laptop.Price -= 50; // Discount laptop
        earbuds.Price -= 10; // Discount earbuds

        // Create a simple log item (assuming it also lives in the 'Electronics' partition)
        var logEntry = new
        {
            Id = Guid.NewGuid().ToString(),
            Category = partitionKeyValue, // MUST be the same partition key
            EventType = "PriceUpdateBatch",
            Timestamp = DateTime.UtcNow,
            AffectedProducts = new[] { laptop.Id, earbuds.Id }
        };

        TransactionalBatch batch = container.CreateTransactionalBatch(new PartitionKey(partitionKeyValue))
            .ReplaceItem(laptop.Id, laptop)
            .ReplaceItem(earbuds.Id, earbuds)
            .CreateItem(logEntry);

        try
        {
            TransactionalBatchResponse batchResponse = await batch.ExecuteAsync();

            if (batchResponse.IsSuccessStatusCode)
            {
                Console.WriteLine($"  TransactionalBatch succeeded! Total RU cost: {batchResponse.RequestCharge}");
                Console.WriteLine($"  Laptop new price: {batchResponse.Get           OperationAtIndex<Product>(0).Resource.Price}");
                Console.WriteLine($"  Earbuds new price: {batchResponse.GetOperationAtIndex<Product>(1).Resource.Price}");
                Console.WriteLine($"  Log entry created: {batchResponse.GetOperationAtIndex<dynamic>(2).Resource.Id}");
            }
            else
            {
                Console.WriteLine($"  TransactionalBatch failed! Status: {batchResponse.StatusCode}, Error: {batchResponse.ErrorMessage}");
                Console.WriteLine($"  Total RU cost: {batchResponse.RequestCharge}");
                Console.WriteLine("  All operations in the batch were rolled back.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"  Error executing TransactionalBatch: {ex.Message}");
        }

        Console.WriteLine("--- TransactionalBatch Demonstration finished ---");
    }
}
```

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB application frequently performs complex queries that involve filtering, ordering, and projecting many fields. You notice that these queries consume a high number of Request Units (RUs). Which of the following actions would be most effective in reducing the RU consumption for these queries?
    *   **A) Increase the provisioned throughput (RUs/sec) of your container.**
    *   **B) Ensure your queries include a filter on the partition key and only `SELECT` the fields you actually need.**
    *   **C) Switch your application's connection mode to Gateway mode.**
    *   **D) Implement optimistic concurrency control using `ETag`s for all read operations.**

    **Correct Answer:** B) Ensure your queries include a filter on the partition key and only `SELECT` the fields you actually need.
    **Explanation:** While increasing provisioned throughput (A) might resolve throttling, it doesn't reduce the RU cost *per query*, only allows more queries to run. Switching to Gateway mode (C) is generally slower than Direct mode. OCC (D) is for concurrent writes, not for optimizing read RU consumption. The most effective way to reduce query RUs is to make the queries themselves more efficient: filtering on the partition key allows for single-partition queries (cheaper), and projecting only necessary fields (`SELECT c.id, c.name` instead of `SELECT *`) reduces the data transferred and processed, thus lowering RUs.

2.  **Question:** You are building a system where multiple users can simultaneously edit a shared document stored as an item in Azure Cosmos DB. To prevent one user's changes from unknowingly overwriting another's, you need to implement a mechanism that detects if the document has been modified by someone else between the time it was read and when an update is attempted. Which Cosmos DB feature is designed to address this specific concurrency challenge?
    *   **A) Change Feed Processor:** To monitor changes and alert users.
    *   **B) Stored Procedures:** To encapsulate update logic and ensure atomicity.
    *   **C) TransactionalBatch:** To group multiple operations into a single transaction.
    *   **D) `ETag` with `IfMatchEtag`:** To implement optimistic concurrency control.

    **Correct Answer:** D) `ETag` with `IfMatchEtag`: To implement optimistic concurrency control.
    **Explanation:** The `ETag` (Entity Tag) is a version identifier for an item. By reading an item's `ETag` and then including it in the `IfMatchEtag` header of a subsequent `ReplaceItemAsync` or `DeleteItemAsync` request, you instruct Cosmos DB to only perform the operation if the `ETag` on the server still matches the one you provided. If they differ, it means the item was modified by another client, and Cosmos DB returns a 412 Precondition Failed error, preventing the overwrite. This is the core mechanism for optimistic concurrency control in Cosmos DB. The other options serve different purposes: Change Feed (A) is for reacting to changes, Stored Procedures (B) are for server-side atomic operations within a partition, and TransactionalBatch (C) is for client-side atomic operations within a partition.

#### AI generation note
Create a 15-minute live coding video. Start by demonstrating RU monitoring for different types of operations (point read, single-partition query, cross-partition query) and show the `RequestCharge` in the console output. Then, walk through the implementation of optimistic concurrency control using `ETag` and `IfMatchEtag`, simulating a concurrent update to trigger a `412 Precondition Failed` error. Finally, demonstrate the use of `TransactionalBatch` for an atomic update of multiple items within the same logical partition. Use a split-screen view for code and console output, and include diagram overlays to explain the `ETag` flow and `TransactionalBatch` atomicity. Conclude with a live refactoring exercise where learners modify a query to reduce its RU consumption.

---

## Module 4: Advanced Application Development and Integration

**Module 4: Advanced Application Development and Integration**

**Module Goal:** This module equips you with advanced techniques to integrate Azure Cosmos DB into complex application architectures, leverage its real-time capabilities, and optimize your solutions for both performance and cost. You will master serverless integrations, event-driven patterns, server-side scripting, and critical optimization strategies to build robust and efficient Cosmos DB applications.

### Chapter 4.1 — Integrating Azure Cosmos DB with Azure Functions

#### Learning objectives
*   Understand the benefits and common use cases for integrating Azure Cosmos DB with Azure Functions.
*   Configure Azure Cosmos DB input and output bindings for Azure Functions.
*   Develop serverless functions that interact with Cosmos DB for data ingestion, retrieval, and processing.
*   Implement robust error handling and logging within Azure Functions interacting with Cosmos DB.
*   Identify common pitfalls when combining Azure Functions and Cosmos DB and how to avoid them.

#### Detailed lesson content
Integrating Azure Cosmos DB with Azure Functions provides a powerful serverless architecture for event-driven applications, allowing you to react to data changes, process data on demand, or execute scheduled tasks without managing underlying infrastructure. Azure Functions excel at handling sporadic workloads, scaling automatically, and only charging you for the compute resources consumed during execution, making them an ideal companion for Cosmos DB's globally distributed, highly available nature. This combination is particularly effective for scenarios like real-time data processing, IoT data ingestion, building materialized views, or implementing microservices that require quick, stateless operations on your NoSQL data.

The core of this integration lies in Azure Functions' binding model. Bindings provide a declarative way to connect your function to data sources and sinks, abstracting away much of the boilerplate code required to interact with services like Cosmos DB. For Cosmos DB, you'll primarily work with input bindings, output bindings, and the special Cosmos DB trigger. An input binding allows your function to read data from a Cosmos DB container, often based on parameters passed to the function or a predefined query. For example, an HTTP-triggered function might receive an item ID and use an input binding to fetch the corresponding document from Cosmos DB. Output bindings, conversely, enable your function to write new documents, update existing ones, or delete documents in a Cosmos DB container. This is incredibly useful for data transformation pipelines where a function might process incoming data and then persist the results in Cosmos DB.

The Cosmos DB trigger is perhaps the most powerful binding for event-driven architectures. It allows your function to automatically execute whenever there are changes (insertions, updates, or deletions) in a specified Cosmos DB container. This trigger leverages the Cosmos DB Change Feed, which we'll explore in more detail in the next chapter. When a change occurs, the trigger passes the changed documents to your function, enabling real-time reactions. Imagine an IoT scenario where sensor data is continuously ingested into a Cosmos DB container. A Cosmos DB triggered function could then immediately process each new sensor reading, perhaps aggregating it, sending alerts if thresholds are exceeded, or pushing updates to a real-time dashboard.

Let's look at a practical example using C#. To configure a Cosmos DB input binding, you'd typically add an attribute to your function method signature. For instance, to retrieve a single document:

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;

public static class GetProductFunction
{
    [FunctionName("GetProduct")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = "products/{id}")] HttpRequest req,
        [CosmosDB(
            databaseName: "ProductsDB",
            collectionName: "Products",
            id: "{id}", // Binds to the {id} from the route
            PartitionKey = "{id}", // Assuming id is also the partition key
            ConnectionStringSetting = "CosmosDbConnectionString")] Product product,
        ILogger log)
    {
        log.LogInformation($"C# HTTP trigger function processed a request for product ID: {req.RouteValues["id"]}");

        if (product == null)
        {
            log.LogWarning($"Product with ID '{req.RouteValues["id"]}' not found.");
            return new NotFoundResult();
        }

        return new OkObjectResult(product);
    }
}

public class Product
{
    public string id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
    public string timestamp { get; set; } // Added for trigger example later
}
```
In this example, the `[CosmosDB]` attribute specifies the database, collection, and how to map the `id` from the HTTP route to the document ID in Cosmos DB. The `ConnectionStringSetting` refers to an application setting that holds your Cosmos DB connection string, a crucial security practice to avoid hardcoding credentials.

For output bindings, the process is similar. You can define an `IAsyncCollector<T>` or a single `T` parameter with the `[CosmosDB]` attribute. For instance, to create a new product:

```csharp
// ... (using directives from above)

public static class CreateProductFunction
{
    [FunctionName("CreateProduct")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "products")] HttpRequest req,
        [CosmosDB(
            databaseName: "ProductsDB",
            collectionName: "Products",
            ConnectionStringSetting = "CosmosDbConnectionString")] IAsyncCollector<Product> productsOut,
        ILogger log)
    {
        log.LogInformation("C# HTTP trigger function processed a request to create a product.");

        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        Product newProduct = JsonConvert.DeserializeObject<Product>(requestBody);

        if (string.IsNullOrEmpty(newProduct?.id))
        {
            newProduct.id = System.Guid.NewGuid().ToString(); // Assign a new ID if not provided
        }
        newProduct.timestamp = System.DateTime.UtcNow.ToString("o"); // Add a timestamp

        await productsOut.AddAsync(newProduct);
        log.LogInformation($"Product '{newProduct.Name}' with ID '{newProduct.id}' created.");

        return new CreatedResult($"/api/products/{newProduct.id}", newProduct);
    }
}
```
Here, `IAsyncCollector<Product> productsOut` allows the function to add multiple `Product` objects to the specified Cosmos DB container.

When using the Cosmos DB trigger, your function signature would look like this:

```csharp
// ... (using directives from above)

public static class ProcessProductChangesFunction
{
    [FunctionName("ProcessProductChanges")]
    public static void Run(
        [CosmosDBTrigger(
            databaseName: "ProductsDB",
            collectionName: "Products",
            ConnectionStringSetting = "CosmosDbConnectionString",
            LeaseCollectionName = "leases",
            CreateLeaseCollectionIfNotExists = true)] IReadOnlyList<Product> input,
        ILogger log)
    {
        if (input != null && input.Count > 0)
        {
            log.LogInformation($"Documents modified: {input.Count}");
            foreach (var doc in input)
            {
                log.LogInformation($"Processed document Id: {doc.id}, Name: {doc.Name}, Timestamp: {doc.timestamp}");
                // Perform further processing, e.g., send to another service, update a materialized view
            }
        }
    }
}
```
The `LeaseCollectionName` setting is critical for the Cosmos DB trigger. The Change Feed Processor uses a "lease" container to store state and coordinate processing across multiple function instances, ensuring that each change is processed exactly once. This lease container must be in the *same database* as the monitored container, but it can be a separate collection. The `CreateLeaseCollectionIfNotExists = true` property is a convenience for development, but in production, you might prefer to create it manually for more control. Common mistakes include forgetting to create the lease collection or configuring it incorrectly, leading to functions not triggering or processing changes repeatedly.

Error handling and logging are paramount in serverless applications. Azure Functions integrate seamlessly with Azure Application Insights, allowing you to capture detailed logs, monitor performance, and trace requests across your distributed system. Within your function code, use the `ILogger` interface to log messages at various levels (Information, Warning, Error, Critical). Implement `try-catch` blocks around critical operations, especially when interacting with external services like Cosmos DB, to gracefully handle exceptions and provide meaningful error messages. For example, a `CosmosException` might indicate a throttled request (status code 429), which your function could potentially retry using a back-off strategy.

A common mistake when integrating is misconfiguring the connection string or database/collection names, leading to runtime errors. Always double-check these settings. Another pitfall is assuming that a Cosmos DB trigger will process *all* historical changes from the beginning of time; it typically starts processing from the current point in time or from a specific LSN (Log Sequence Number) if configured. For initial data synchronization, you might need a separate mechanism. Finally, be mindful of cold starts with Azure Functions, especially in the Consumption plan. While typically fast, the first invocation after a period of inactivity can take longer. For latency-sensitive scenarios, consider a Premium plan or pre-warmed instances.

#### Key concepts
*   **Azure Functions:** A serverless compute service that enables you to run small pieces of code ("functions") without explicitly provisioning or managing infrastructure.
*   **Bindings:** A declarative way to connect your function to data sources and sinks, abstracting away the code for service interaction.
*   **Input Binding:** Allows a function to read data from a service, such as retrieving a document from Cosmos DB.
*   **Output Binding:** Allows a function to write data to a service, such as creating or updating a document in Cosmos DB.
*   **Cosmos DB Trigger:** An Azure Function trigger that automatically executes your function whenever changes occur in a specified Cosmos DB container, leveraging the Change Feed.
*   **Lease Collection:** A dedicated Cosmos DB container used by the Change Feed Processor to store state and coordinate processing across multiple function instances, ensuring reliable and exactly-once processing.
*   **Cold Start:** The delay experienced during the first invocation of a serverless function after a period of inactivity, as the underlying infrastructure needs to be initialized.

#### Hands-on activity
**Activity: Build a Serverless Product API with Azure Functions and Cosmos DB**

In this activity, you will create two Azure Functions: one to create new products and another to retrieve a product by ID, both interacting with Azure Cosmos DB.

**Steps:**
1.  **Set up Azure Cosmos DB:**
    *   Create a new Azure Cosmos DB account (Core (SQL) API).
    *   Create a new database named `ProductsDB`.
    *   Create a new container named `Products` with `/id` as the partition key.
    *   Create a new container named `leases` in the same `ProductsDB` database with `/id` as the partition key (e.g., 400 RU/s). This is for the Change Feed Trigger.
    *   Note down your Cosmos DB connection string (from Keys section).
2.  **Create an Azure Functions Project:**
    *   Open Visual Studio or VS Code.
    *   Create a new Azure Functions project (C#) using the HTTP trigger template.
    *   Install the `Microsoft.Azure.WebJobs.Extensions.CosmosDB` NuGet package.
3.  **Implement `CreateProductFunction`:**
    *   Modify the generated HTTP trigger function or create a new one.
    *   Add a `Product` class definition (as shown in the lesson content).
    *   Configure a Cosmos DB output binding (`IAsyncCollector<Product>`) to write to the `Products` container.
    *   Parse the incoming HTTP request body to create a `Product` object.
    *   Add the product to the output collector.
    *   Ensure proper error handling and logging.
4.  **Implement `GetProductFunction`:**
    *   Create another HTTP trigger function.
    *   Configure a Cosmos DB input binding to retrieve a `Product` by `id` from the `Products` container, using the `{id}` route parameter for both `id` and `PartitionKey`.
    *   Return `NotFoundResult` if the product is not found, otherwise `OkObjectResult`.
    *   Ensure proper error handling and logging.
5.  **Implement `ProcessProductChangesFunction` (Cosmos DB Trigger):**
    *   Create a new Azure Function with the "Cosmos DB trigger" template.
    *   Configure it to monitor the `Products` container and use the `leases` container for leases.
    *   Inside the function, simply log the ID and Name of each changed product.
6.  **Configure `local.settings.json`:**
    *   Add your Cosmos DB connection string to `local.settings.json`:
        ```json
        {
          "IsEncrypted": false,
          "Values": {
            "AzureWebJobsStorage": "UseDevelopmentStorage=true",
            "FUNCTIONS_WORKER_RUNTIME": "dotnet",
            "CosmosDbConnectionString": "AccountEndpoint=YOUR_COSMOSDB_ENDPOINT;AccountKey=YOUR_COSMOSDB_KEY;"
          }
        }
        ```
        Replace `YOUR_COSMOSDB_ENDPOINT` and `YOUR_COSMOSDB_KEY` with your actual values.
7.  **Test Locally:**
    *   Run your Azure Functions project.
    *   Use a tool like Postman or curl to:
        *   `POST` to `http://localhost:7071/api/products` with a JSON body like `{"Name": "Laptop", "Price": 1200, "Category": "Electronics"}`.
        *   Note the `id` returned in the response.
        *   `GET` to `http://localhost:7071/api/products/{id}` (use the ID returned from the POST request).
    *   Observe your function logs for `CreateProductFunction` and `GetProductFunction`.
    *   Crucially, observe the logs for `ProcessProductChangesFunction` – it should trigger and log the new product after the `POST` request.
    *   Verify that products are created and retrieved correctly in Cosmos DB and your function logs.

#### Assessment idea
1.  **Question:** You are building an IoT solution where millions of sensor readings are ingested into an Azure Cosmos DB container. You need to trigger a serverless function to process each new reading in real-time for anomaly detection. Which Azure Function binding type is most suitable for this scenario, and why?
    *   **Correct Answer:** The Cosmos DB Trigger binding is most suitable. It automatically invokes the function whenever new documents or changes appear in the specified Cosmos DB container, leveraging the Change Feed. This allows for real-time, event-driven processing of each sensor reading without the need for polling or complex custom logic, ensuring low latency and efficient resource utilization.
2.  **Question:** Consider an Azure Function with a Cosmos DB input binding configured to retrieve a document. If the specified document `id` does not exist in the Cosmos DB container, what will be the default behavior of the input binding, and how should your function code handle this?
    *   **Correct Answer:** By default, if a document with the specified `id` is not found, the Cosmos DB input binding will pass a `null` value to the function parameter representing the document. Your function code should explicitly check for `null` and implement appropriate logic, such as returning a 404 Not Found HTTP response if it's an HTTP-triggered function, or logging a warning and gracefully exiting if it's a background processing function. Failing to check for `null` would lead to a `NullReferenceException` if you attempt to access properties of the non-existent document.

#### AI generation note
Create a 12-minute live coding video demonstrating the creation of two C# Azure Functions. The first function will be an HTTP POST trigger with a Cosmos DB output binding to create a product. The second will be an HTTP GET trigger with a Cosmos DB input binding to retrieve a product by ID. Also, include a Cosmos DB Trigger function that logs changes. Show the setup in Visual Studio Code, including NuGet package installation and `local.settings.json` configuration. Demonstrate testing both HTTP functions using Postman, showing successful creation and retrieval, and verifying data in the Azure Portal's Data Explorer. Crucially, show the Cosmos DB Trigger function's logs reacting to the product creation. Emphasize error handling for a non-existent product. Include a visual overlay explaining the binding flow. End with a 2-question interactive quiz covering binding types and error scenarios.

---

### Chapter 4.2 — Implementing the Change Feed Pattern

#### Learning objectives
*   Explain the concept of the Azure Cosmos DB Change Feed and its underlying mechanism.
*   Differentiate between the Change Feed pull model and the Change Feed Processor push model.
*   Implement the Change Feed Processor library in a console application or Azure Function to react to data changes.
*   Design and build solutions leveraging the Change Feed for real-time analytics, materialized views, or event sourcing.
*   Understand the importance of the lease container and how it ensures reliable and scalable processing.

#### Detailed lesson content
The Azure Cosmos DB Change Feed is a persistent, ordered, append-only log of all changes that happen within a Cosmos DB container. It records insertions, updates, and deletions (if soft-deleted) to documents, making it a powerful feature for building reactive, event-driven applications. Unlike traditional database triggers that execute within the context of a transaction, the Change Feed operates asynchronously, providing a stream of changes that can be processed independently. This design allows for highly scalable and resilient architectures, decoupling the data modification process from the downstream consumption of those changes.

At its core, the Change Feed works by exposing a sequence of modifications for each logical partition key in your container. When a document is created, updated, or deleted, a record of that change is added to the Change Feed. Consumers can then read this feed, process the changes, and store their progress, allowing them to pick up exactly where they left off even after restarts. This "checkpointing" mechanism is crucial for ensuring reliable processing and avoiding duplicate work. The Change Feed is not a separate storage mechanism; it's an inherent capability of your Cosmos DB container, meaning there's no additional cost for enabling it, only for the Request Units (RUs) consumed by reading the feed.

There are two primary ways to consume the Change Feed: the pull model and the push model. In the **pull model**, your application explicitly makes calls to Cosmos DB to request changes for a specific range of logical partition keys or a specific continuation token. This gives you fine-grained control over when and how changes are retrieved, but it requires your application to manage checkpointing and parallelism across partitions. While flexible, implementing a robust pull model consumer can be complex. You might use the pull model for ad-hoc analysis or when you need to process changes in a very specific, controlled manner.

The more common and recommended approach for most scenarios is the **push model**, implemented via the Change Feed Processor library. This library simplifies Change Feed consumption significantly. Instead of your application polling for changes, the Change Feed Processor acts as an "event listener" that automatically distributes processing across multiple instances of your application (e.g., multiple Azure Function instances). It manages lease containers, checkpointing, error handling, and parallel processing across logical partitions, ensuring that changes are processed reliably and efficiently. The Change Feed Processor is designed for high-scale, continuous processing of changes.

Common use cases for the Change Feed include:
1.  **Real-time Analytics:** Aggregating data as it arrives to update dashboards or generate real-time reports.
2.  **Materialized Views:** Creating optimized read models from a transactional container to serve specific query patterns more efficiently. For example, if your main order container is partitioned by `orderId`, but you frequently query by `customerId`, you could use the Change Feed to populate a separate `CustomerOrders` container partitioned by `customerId`.
3.  **Event Sourcing:** Using Cosmos DB as an event store, where each change is an event that can be replayed to reconstruct application state.
4.  **Data Synchronization:** Replicating data to other data stores (e.g., search indexes like Azure Cognitive Search, data warehouses like Azure Synapse Analytics).
5.  **Cross-Partition Aggregations:** Performing aggregations that span multiple logical partitions, which are otherwise expensive in Cosmos DB.

Let's illustrate with a C# example using the Change Feed Processor library, typically hosted in an Azure Function or a long-running console application.

First, you need to install the `Microsoft.Azure.Cosmos.ChangeFeed` NuGet package.

```csharp
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.ChangeFeed;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging.Console; // For console app logging

public class Product
{
    public string id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
    public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
}

public class ChangeFeedProcessorHost
{
    private readonly CosmosClient _cosmosClient;
    private readonly Container _monitoredContainer;
    private readonly Container _leaseContainer;
    private readonly ILogger _logger;

    public ChangeFeedProcessorHost(string connectionString, string databaseName, string monitoredContainerName, string leaseContainerName, ILogger logger)
    {
        _cosmosClient = new CosmosClient(connectionString);
        _monitoredContainer = _cosmosClient.GetContainer(databaseName, monitoredContainerName);
        _leaseContainer = _cosmosClient.GetContainer(databaseName, leaseContainerName);
        _logger = logger;
    }

    public async Task StartProcessingAsync(CancellationToken cancellationToken)
    {
        ChangeFeedProcessor changeFeedProcessor = _monitoredContainer
            .GetChangeFeedProcessorBuilder<Product>("ProductProcessor", HandleChangesAsync)
            .WithInstanceName("ProductChangeProcessorInstance")
            .WithLeaseContainer(_leaseContainer)
            .WithPollInterval(TimeSpan.FromSeconds(5)) // How often to check for new changes
            .WithStartTime(DateTime.MinValue.ToUniversalTime()) // Process from the beginning, or DateTime.UtcNow for new changes only
            .Build();

        _logger.LogInformation("Starting Change Feed Processor...");
        await changeFeedProcessor.StartAsync();
        _logger.LogInformation("Change Feed Processor started. Press Ctrl+C to stop.");

        // Keep the application running until cancellation is requested
        await Task.Delay(Timeout.Infinite, cancellationToken);

        _logger.LogInformation("Stopping Change Feed Processor...");
        await changeFeedProcessor.StopAsync();
        _logger.LogInformation("Change Feed Processor stopped.");
    }

    private async Task HandleChangesAsync(
        IReadOnlyCollection<Product> changes,
        CancellationToken cancellationToken)
    {
        if (changes != null && changes.Count > 0)
        {
            _logger.LogInformation($"Detected {changes.Count} changes.");
            foreach (var product in changes)
            {
                _logger.LogInformation($"Processing product change: ID={product.id}, Name={product.Name}, Price={product.Price}");
                // Implement your business logic here, e.g.,
                // - Send to another queue/topic
                // - Update a materialized view in another container
                // - Trigger an external API call
                // - Perform aggregation
            }
        }
        await Task.CompletedTask; // Always return a Task
    }

    // Example of how to run this in a console app:
    public static async Task Main(string[] args)
    {
        var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
        var logger = loggerFactory.CreateLogger<ChangeFeedProcessorHost>();

        string connectionString = Environment.GetEnvironmentVariable("CosmosDbConnectionString");
        if (string.IsNullOrEmpty(connectionString))
        {
            logger.LogError("CosmosDbConnectionString environment variable not set.");
            return;
        }

        var host = new ChangeFeedProcessorHost(
            connectionString: connectionString,
            databaseName: "ProductsDB",
            monitoredContainerName: "Products",
            leaseContainerName: "leases",
            logger: logger);

        using var cts = new CancellationTokenSource();
        Console.CancelKeyPress += (sender, eventArgs) =>
        {
            eventArgs.Cancel = true;
            cts.Cancel();
        };

        try
        {
            await host.StartProcessingAsync(cts.Token);
        }
        catch (OperationCanceledException)
        {
            logger.LogInformation("Application shutdown requested.");
        }
        finally
        {
            // Clean up resources if necessary
        }
    }
}
```
In this code, `ProductProcessor` is the name of the Change Feed processor instance, which helps in identifying it and managing its state. The `WithLeaseContainer` method specifies the container where the processor stores its progress (checkpoints) and manages concurrency. The `WithStartTime` method is crucial: `DateTime.MinValue.ToUniversalTime()` tells the processor to start from the beginning of the Change Feed (useful for initial data loads), while `DateTime.UtcNow` tells it to only process changes that occur *after* the processor starts.

The lease container is fundamental to the Change Feed Processor's reliability and scalability. It's a regular Cosmos DB container (usually with a low RU/s throughput) that stores "lease" documents. Each lease document represents a range of logical partitions in the monitored container. The Change Feed Processor instances compete for these leases. Once an instance acquires a lease, it becomes responsible for processing changes for the corresponding partition range. This mechanism ensures that:
*   **Exactly-once processing (effectively):** While the Change Feed itself can deliver changes multiple times (at-least-once), the processor's checkpointing and lease management help achieve near exactly-once processing for most applications by ensuring that a lease is only released after its changes are successfully processed and checkpointed.
*   **Load Balancing:** If you have multiple instances of your Change Feed Processor (e.g., multiple Azure Function app instances), the leases are automatically distributed among them, allowing for parallel processing and scaling out.
*   **Fault Tolerance:** If an instance fails, its leases are eventually picked up by another healthy instance, ensuring continuous processing.

Common mistakes include not creating the lease container before starting the processor, or using a lease container that is not in the same database as the monitored container. Another common issue is not handling transient errors within the `HandleChangesAsync` method. If your processing logic fails, the Change Feed Processor might retry the batch of changes, potentially leading to duplicate processing if your downstream systems are not idempotent. Always design your `HandleChangesAsync` logic to be idempotent, meaning applying the same change multiple times produces the same result as applying it once. Also, be aware of the `WithStartTime` setting; if you intend to process all historical data, ensure it's set correctly. If you only want new changes, `DateTime.UtcNow` is appropriate.

#### Key concepts
*   **Change Feed:** A persistent, ordered, append-only log of all changes (insertions, updates, deletions) that occur within an Azure Cosmos DB container.
*   **Pull Model:** A method of consuming the Change Feed where the application explicitly requests changes and manages its own checkpointing and parallelism.
*   **Push Model (Change Feed Processor):** A higher-level abstraction (library) that automatically manages Change Feed consumption, including lease management, checkpointing, and parallel processing across multiple instances.
*   **Change Feed Processor Library:** A .NET (and Java/Node.js) library that simplifies the implementation of the push model for Change Feed consumption.
*   **Lease Container:** A dedicated Cosmos DB container used by the Change Feed Processor to store state (checkpoints) and coordinate processing across multiple instances, ensuring fault tolerance and load balancing.
*   **Idempotency:** The property of an operation that, when applied multiple times, produces the same result as applying it once. Crucial for robust Change Feed processing.
*   **Materialized View:** A pre-computed summary or transformation of data from a source container, stored in a separate container, optimized for specific query patterns.

#### Hands-on activity
**Activity: Implement a Change Feed Processor for Real-time Product Aggregations**

In this activity, you will set up a Change Feed Processor to monitor your `Products` container and perform a simple aggregation (e.g., counting products per category) in real-time, storing the result in a separate "materialized view" container.

**Steps:**
1.  **Prerequisites:** Ensure you have your Azure Cosmos DB account with `ProductsDB` database and `Products` container (from Chapter 4.1 activity).
2.  **Create Lease and Materialized View Containers:**
    *   In `ProductsDB`, ensure you have a container named `leases` with `/id` as the partition key (e.g., 400 RU/s).
    *   In `ProductsDB`, create another new container named `ProductCategoryAggregates` with `/id` as the partition key (e.g., 400 RU/s). This will be your materialized view.
3.  **Create a Console Application Project:**
    *   Create a new C# Console Application project.
    *   Install the `Microsoft.Azure.Cosmos.ChangeFeed` NuGet package.
    *   Install `Microsoft.Extensions.Logging.Console` for logging.
4.  **Implement `ChangeFeedProcessorHost`:**
    *   Copy the `Product` class from the detailed lesson content.
    *   Define a `ProductCategoryAggregate` class:
        ```csharp
        public class ProductCategoryAggregate
        {
            public string id { get; set; } // Will be the category name
            public string Category { get; set; }
            public int ProductCount { get; set; }
            public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
        }
        ```
    *   Implement the `ChangeFeedProcessorHost` class, similar to the lesson content, but modify its constructor to accept the `ProductCategoryAggregates` container and update `HandleChangesAsync` to perform the aggregation logic:
        ```csharp
        using Microsoft.Azure.Cosmos;
        using Microsoft.Azure.Cosmos.ChangeFeed;
        using Microsoft.Extensions.Logging;
        using System;
        using System.Collections.Generic;
        using System.Threading;
        using System.Threading.Tasks;
        using Microsoft.Extensions.Logging.Console;

        public class Product
        {
            public string id { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
            public string Category { get; set; }
            public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
        }

        public class ProductCategoryAggregate
        {
            public string id { get; set; } // Will be the category name
            public string Category { get; set; }
            public int ProductCount { get; set; }
            public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
        }

        public class ChangeFeedProcessorHost
        {
            private readonly CosmosClient _cosmosClient;
            private readonly Container _monitoredContainer;
            private readonly Container _leaseContainer;
            private readonly Container _aggregateContainer; // New: for materialized view
            private readonly ILogger _logger;

            public ChangeFeedProcessorHost(string connectionString, string databaseName, string monitoredContainerName, string leaseContainerName, string aggregateContainerName, ILogger logger)
            {
                _cosmosClient = new CosmosClient(connectionString);
                _monitoredContainer = _cosmosClient.GetContainer(databaseName, monitoredContainerName);
                _leaseContainer = _cosmosClient.GetContainer(databaseName, leaseContainerName);
                _aggregateContainer = _cosmosClient.GetContainer(databaseName, aggregateContainerName); // Initialize
                _logger = logger;
            }

            public async Task StartProcessingAsync(CancellationToken cancellationToken)
            {
                ChangeFeedProcessor changeFeedProcessor = _monitoredContainer
                    .GetChangeFeedProcessorBuilder<Product>("ProductCategoryAggregator", HandleChangesAsync)
                    .WithInstanceName("ProductCategoryAggregatorInstance")
                    .WithLeaseContainer(_leaseContainer)
                    .WithPollInterval(TimeSpan.FromSeconds(5))
                    .WithStartTime(DateTime.MinValue.ToUniversalTime()) // Start from beginning for initial aggregation
                    .Build();

                _logger.LogInformation("Starting Change Feed Processor for product category aggregation...");
                await changeFeedProcessor.StartAsync();
                _logger.LogInformation("Change Feed Processor started. Press Ctrl+C to stop.");

                await Task.Delay(Timeout.Infinite, cancellationToken);

                _logger.LogInformation("Stopping Change Feed Processor...");
                await changeFeedProcessor.StopAsync();
                _logger.LogInformation("Change Feed Processor stopped.");
            }

            private async Task HandleChangesAsync(
                IReadOnlyCollection<Product> changes,
                CancellationToken cancellationToken)
            {
                if (changes != null && changes.Count > 0)
                {
                    _logger.LogInformation($"Detected {changes.Count} changes.");
                    foreach (var product in changes)
                    {
                        _logger.LogInformation($"Processing product change: ID={product.id}, Category={product.Category}");

                        if (string.IsNullOrEmpty(product.Category)) continue;

                        // Get current aggregate for the category
                        ProductCategoryAggregate currentAggregate = null;
                        try
                        {
                            ItemResponse<ProductCategoryAggregate> readResponse = await _aggregateContainer.ReadItemAsync<ProductCategoryAggregate>(product.Category, new PartitionKey(product.Category));
                            currentAggregate = readResponse.Resource;
                        }
                        catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
                        {
                            // Aggregate doesn't exist, create new
                            currentAggregate = new ProductCategoryAggregate { id = product.Category, Category = product.Category, ProductCount = 0 };
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError($"Error reading aggregate for category {product.Category}: {ex.Message}");
                            continue; // Skip this product for now
                        }

                        // For simplicity, we'll just increment the count for any change (insert/update).
                        // A more robust solution would need to track actual deltas or previous states.
                        currentAggregate.ProductCount++;
                        currentAggregate.LastUpdated = DateTime.UtcNow;

                        // Upsert the updated aggregate
                        await _aggregateContainer.UpsertItemAsync(currentAggregate, new PartitionKey(currentAggregate.id));
                        _logger.LogInformation($"Updated aggregate for category '{currentAggregate.Category}': Count={currentAggregate.ProductCount}");
                    }
                }
                await Task.CompletedTask;
            }

            public static async Task Main(string[] args)
            {
                var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
                var logger = loggerFactory.CreateLogger<ChangeFeedProcessorHost>();

                string connectionString = Environment.GetEnvironmentVariable("CosmosDbConnectionString");
                if (string.IsNullOrEmpty(connectionString))
                {
                    logger.LogError("CosmosDbConnectionString environment variable not set.");
                    return;
                }

                var host = new ChangeFeedProcessorHost(
                    connectionString: connectionString,
                    databaseName: "ProductsDB",
                    monitoredContainerName: "Products",
                    leaseContainerName: "leases",
                    aggregateContainerName: "ProductCategoryAggregates", // Pass aggregate container name
                    logger: logger);

                using var cts = new CancellationTokenSource();
                Console.CancelKeyPress += (sender, eventArgs) =>
                {
                    eventArgs.Cancel = true;
                    cts.Cancel();
                };

                try
                {
                    await host.StartProcessingAsync(cts.Token);
                }
                catch (OperationCanceledException)
                {
                    logger.LogInformation("Application shutdown requested.");
                }
                catch (Exception ex)
                {
                    logger.LogError($"An unhandled exception occurred: {ex.Message}");
                }
            }
        }
        ```
5.  **Configure Environment Variable:**
    *   Set the `CosmosDbConnectionString` environment variable on your machine or in your `launchSettings.json` for local debugging.
6.  **Run and Test:**
    *   Run your console application. It should start the Change Feed Processor.
    *   In the Azure Portal, use Data Explorer to add, update, or delete documents in your `Products` container.
    *   Observe your console application's logs showing it processing changes.
    *   Verify that the `ProductCategoryAggregates` container is updated in real-time with the correct product counts per category.

#### Assessment idea
1.  **Question:** Your e-commerce application stores product reviews in a Cosmos DB container. You need to calculate the average rating for each product in real-time whenever a new review is submitted or an existing review is updated. Which Change Feed consumption model is generally preferred for this scenario, and what critical component does it rely on for reliable, scalable processing?
    *   **Correct Answer:** The **push model** using the Change Feed Processor library is generally preferred. It automatically handles load balancing, fault tolerance, and checkpointing across multiple instances, making it ideal for continuous, real-time processing of changes. It critically relies on a **lease container** to store its state (checkpoints) and coordinate processing among instances, ensuring that each change is processed reliably and efficiently without manual management.
2.  **Question:** You've configured a Change Feed Processor to monitor your `Orders` container. You notice that when your application restarts, it sometimes reprocesses changes that were already handled before the restart. What is a likely cause of this behavior, and how can you mitigate it?
    *   **Correct Answer:** This behavior often indicates an issue with **checkpointing** or the **idempotency** of your processing logic. The Change Feed Processor uses the lease container to store its progress (checkpoints). If the processor fails to update its checkpoint after successfully processing a batch of changes, or if it crashes before a checkpoint is committed, it will restart from the last *successfully committed* checkpoint, potentially reprocessing some changes. To mitigate this:
        1.  Ensure your `HandleChangesAsync` method completes successfully and allows the processor to update its checkpoint.
        2.  Most importantly, design your downstream processing logic to be **idempotent**. This means that applying the same change multiple times should produce the same result as applying it once. For example, when updating an aggregate, ensure you're performing an upsert based on a unique key rather than simply incrementing without checks.

#### AI generation note
Create a 15-minute mixed media lesson. Start with an animated diagram explaining the Change Feed concept, showing data flowing from a monitored container to a lease container and then to a processor. Transition to a live coding demo in C# (console application) implementing the Change Feed Processor to update a materialized view. Show the setup of Cosmos DB containers (monitored, lease, materialized view) in the Azure Portal. Demonstrate inserting/updating documents in the monitored container and showing the real-time updates in the materialized view container and the processor's console logs. Highlight the `WithStartTime` and `WithLeaseContainer` configurations. End with a reflection prompt asking learners to brainstorm three additional use cases for the Change Feed in their own applications.

---

### Chapter 4.3 — Working with Stored Procedures, Triggers, and UDFs

#### Learning objectives
*   Understand the purpose and use cases for server-side programming in Azure Cosmos DB using JavaScript.
*   Develop and execute Cosmos DB Stored Procedures for transactional operations.
*   Implement pre-triggers and post-triggers to enforce data integrity and perform side effects.
*   Create User-Defined Functions (UDFs) to extend Cosmos DB query capabilities.
*   Identify the security, performance, and transactional considerations when using server-side scripts.

#### Detailed lesson content
Azure Cosmos DB offers robust server-side programming capabilities using JavaScript, allowing you to execute logic directly within the database engine. This includes Stored Procedures, Pre-Triggers, Post-Triggers, and User-Defined Functions (UDFs). These features are powerful for scenarios requiring transactional consistency, data validation, complex data transformations, or extending query language functionality, all executed close to your data for reduced network latency and improved performance. However, it's crucial to use them judiciously, as they can also introduce complexity and potential performance bottlenecks if not designed carefully.

**Stored Procedures** are JavaScript functions stored in a Cosmos DB container and executed transactionally against a logical partition. The key benefit of stored procedures is their **transactional guarantee**: all operations within a single stored procedure execution are treated as a single ACID (Atomicity, Consistency, Isolation, Durability) transaction. If any operation within the stored procedure fails, the entire transaction is rolled back. This is invaluable for maintaining data integrity when multiple document operations must succeed or fail together. For example, transferring funds between two accounts, where both debit and credit operations must complete successfully. Stored procedures are executed using the Cosmos DB SDK by calling `container.Scripts.ExecuteStoredProcedureAsync()`. They are always scoped to a single logical partition key value, meaning all documents affected by the stored procedure must reside within the same logical partition. If you need to operate across multiple logical partitions, you'll need to execute the stored procedure multiple times, once for each partition key, losing the single-transaction guarantee.

Here's an example of a simple stored procedure that performs an upsert operation:

```javascript
// storedProcedure.js
function upsertProduct(product) {
    var collection = getContext().getCollection();
    var collectionLink = collection.getSelfLink();
    var response = getContext().getResponse();

    // Validate input
    if (!product || !product.id) {
        throw new Error("Product object with 'id' is required.");
    }

    // Attempt to upsert the document. 'isAccepted' indicates if the operation could be queued.
    // The callback handles the actual result of the upsert.
    var isAccepted = collection.upsertDocument(collectionLink, product, function (err, doc) {
        if (err) {
            // Log the error and potentially re-throw or handle it
            console.error("Error upserting document:", err);
            throw err;
        }
        response.setBody(doc); // Set the response body with the upserted document
    });

    if (!isAccepted) {
        // This means the request was throttled or out of RUs, and couldn't even be queued.
        // The stored procedure should return control to the client to retry.
        response.setBody("Operation not accepted. Please retry.");
        throw new Error("Operation not accepted. Likely throttled or resource-constrained.");
    }
}
```
To execute this from C# (using the .NET SDK):
```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

public class Product
{
    public string id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
    public string LastModified { get; set; } // For trigger example
}

public class UserAccount
{
    public string id { get; set; }
    public string name { get; set; }
    public int credits { get; set; }
    public string type { get; set; }
}

public class CosmosDbService
{
    private readonly CosmosClient _cosmosClient;
    private readonly Container _productsContainer;
    private readonly Container _usersContainer;

    public CosmosDbService(string connectionString, string databaseName, string productsContainerName, string usersContainerName)
    {
        _cosmosClient = new CosmosClient(connectionString);
        _productsContainer = _cosmosClient.GetContainer(databaseName, productsContainerName);
        _usersContainer = _cosmosClient.GetContainer(databaseName, usersContainerName);
    }

    public async Task ExecuteUpsertProductStoredProcedure(Product product)
    {
        try
        {
            var partitionKey = new PartitionKey(product.id); // Stored procedures require a partition key
            StoredProcedureExecuteResponse<Product> result = await _productsContainer.Scripts.ExecuteStoredProcedureAsync<Product>(
                "upsertProduct",
                partitionKey,
                new dynamic[] { product });

            Console.WriteLine($"Upserted Product: {result.Resource.Name}, RUs: {result.RequestCharge}");
        }
        catch (CosmosException ex)
        {
            Console.WriteLine($"Error executing stored procedure: {ex.StatusCode} - {ex.Message}");
        }
    }

    public async Task TransferCredits(string fromUserId, string toUserId, int amount, string partitionKey)
    {
        try
        {
            // The partitionKey parameter here is critical. All documents involved must be in this partition.
            // If users are in different partitions, this SP would fail or need to be called multiple times.
            StoredProcedureExecuteResponse<dynamic> result = await _usersContainer.Scripts.ExecuteStoredProcedureAsync<dynamic>(
                "transferCredits",
                new PartitionKey(partitionKey), // Must provide the partition key for the SP execution
                new dynamic[] { fromUserId, toUserId, amount });

            Console.WriteLine($"Transfer result: {result.Resource.message}, RUs: {result.RequestCharge}");
            Console.WriteLine($"From User: {result.Resource.fromUser.id}, Credits: {result.Resource.fromUser.credits}");
            Console.WriteLine($"To User: {result.Resource.toUser.id}, Credits: {result.Resource.toUser.credits}");
        }
        catch (CosmosException ex)
        {
            Console.WriteLine($"Error executing transferCredits stored procedure: {ex.StatusCode} - {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
    }
    
    public async Task CreateProductWithTrigger(Product product)
    {
        try
        {
            var options = new ItemRequestOptions { PreTriggers = new List<string> { "addLastModified" } };
            ItemResponse<Product> createItemResponse = await _productsContainer.CreateItemAsync(product, new PartitionKey(product.id), options);
            Console.WriteLine($"Product created with timestamp: {createItemResponse.Resource.LastModified}, RUs: {createItemResponse.RequestCharge}");
        }
        catch (CosmosException ex)
        {
            Console.WriteLine($"Error creating product with trigger: {ex.StatusCode} - {ex.Message}");
        }
    }
}
```
Common mistakes with stored procedures include exceeding the execution time limit (5 seconds) or the Request Unit (RU) limit for a single transaction, leading to a rollback. Always design them to be efficient and operate on a limited number of documents within a single partition. If a stored procedure attempts to operate across multiple logical partitions, it will fail with a `BadRequest` (400) error.

**Triggers** are JavaScript functions that execute before (pre-trigger) or after (post-trigger) a document operation (insert, update, delete).
*   **Pre-triggers** execute *before* the main database operation. They are ideal for validating document properties, enforcing business rules, or modifying the document before it's persisted. For example, a pre-trigger could automatically add a `LastModified` timestamp field or validate that a `price` is positive. Pre-triggers can abort the operation if validation fails.
*   **Post-triggers** execute *after* the main database operation has completed. They are typically used for side effects, such as updating an aggregate count in another document (within the same transaction, if in the same partition) or sending a notification. However, for complex or cross-partition side effects, the Change Feed is generally a more scalable and robust solution.

Example of a pre-trigger to add a timestamp:

```javascript
// addLastModifiedTrigger.js
function addLastModified() {
    var context = getContext();
    var request = context.getRequest();

    var documentToCreate = request.getBody();

    // Add or update a LastModified property
    documentToCreate.LastModified = new Date().toISOString();

    request.setBody(documentToCreate); // Update the document body with the new timestamp
}
```
To register and use a trigger:
```csharp
// C# Code (Registering a trigger - typically done once during deployment)
// Read trigger content from file
string triggerBody = File.ReadAllText("addLastModifiedTrigger.js");

TriggerProperties triggerProperties = new TriggerProperties
{
    Id = "addLastModified",
    Body = triggerBody,
    TriggerType = TriggerType.Pre, // Can be Pre or Post
    TriggerOperation = TriggerOperation.All // Can be Create, Update, Delete, All
};

TriggerResponse createResponse = await _productsContainer.Scripts.CreateTriggerAsync(triggerProperties);
Console.WriteLine($"Trigger '{createResponse.Resource.Id}' created.");

// C# Code (Executing an operation with a pre-trigger - see CosmosDbService.CreateProductWithTrigger above)
```
A common mistake with triggers is trying to perform complex, long-running operations. Triggers, especially pre-triggers, should be lightweight and fast to avoid impacting the main database operation's latency. Post-triggers should also be kept simple, and for truly asynchronous, decoupled side effects, the Change Feed is almost always a better choice.

**User-Defined Functions (UDFs)** are JavaScript functions that extend the SQL query language in Cosmos DB. They allow you to embed custom logic directly within your queries, which can be incredibly useful for complex calculations, custom string manipulations, or data transformations that aren't natively supported by Cosmos DB's SQL API. UDFs are executed during query processing and can be invoked in the `SELECT` clause or the `WHERE` clause.

Example of a UDF to calculate sales tax:

```javascript
// calculateSalesTaxUDF.js
function calculateSalesTax(price, taxRate) {
    if (typeof price === 'number' && typeof taxRate === 'number' && price >= 0 && taxRate >= 0) {
        return price * (1 + taxRate);
    }
    return price; // Return original price if inputs are invalid
}
```
To register and use a UDF:
```csharp
// C# Code (Registering a UDF)
string udfBody = File.ReadAllText("calculateSalesTaxUDF.js");

UserDefinedFunctionProperties udfProperties = new UserDefinedFunctionProperties
{
    Id = "calculateSalesTax",
    Body = udfBody
};

UserDefinedFunctionResponse createUdfResponse = await _productsContainer.Scripts.CreateUserDefinedFunctionAsync(udfProperties);
Console.WriteLine($"UDF '{createUdfResponse.Resource.Id}' created.");

// C# Code (Querying with a UDF)
string query = "SELECT c.id, c.Name, c.Price, UDF.calculateSalesTax(c.Price, 0.08) AS PriceWithTax FROM c WHERE c.Category = 'Electronics'";
FeedIterator<dynamic> queryResultSetIterator = _productsContainer.GetItemQueryIterator<dynamic>(query);

while (queryResultSetIterator.HasMoreResults)
{
    FeedResponse<dynamic> currentResultSet = await queryResultSetIterator.ReadNextAsync();
    foreach (var item in currentResultSet)
    {
        Console.WriteLine($"Product: {item.Name}, Price: {item.Price}, PriceWithTax: {item.PriceWithTax}, RUs: {currentResultSet.RequestCharge}");
    }
}
```
UDFs are stateless and should not perform any database operations (like reads or writes). Their primary purpose is data transformation within a query. A common mistake is using UDFs for complex logic that could be better handled client-side or by pre-processing data. Overuse of UDFs, especially in `WHERE` clauses, can also lead to less efficient queries as they might prevent the query optimizer from using indexes effectively, potentially resulting in full container scans. Only use UDFs when the native SQL functions cannot achieve the desired outcome and ensure they are simple and performant.

Security is a paramount concern. Server-side scripts run within the database engine with potentially elevated privileges. Always ensure that your scripts are well-tested, free of vulnerabilities, and only perform necessary operations. Avoid exposing sensitive information or allowing arbitrary code execution. Limit their scope to specific, well-defined tasks.

In summary, server-side programming in Cosmos DB offers powerful tools for specific scenarios requiring transactional guarantees, data validation, or query extension. Use them thoughtfully, prioritizing the Change Feed for asynchronous side effects and client-side logic for complex, non-transactional operations.

#### Key concepts
*   **Server-Side Programming:** Executing logic directly within the Azure Cosmos DB engine using JavaScript.
*   **Stored Procedure:** A JavaScript function stored in Cosmos DB that executes transactionally against a single logical partition, ensuring atomicity for multiple document operations.
*   **Trigger:** A JavaScript function that executes before (pre-trigger) or after (post-trigger) a document operation (insert, update, delete).
*   **Pre-trigger:** Executes *before* the main database operation, typically for data validation or modification. Can abort the operation.
*   **Post-trigger:** Executes *after* the main database operation, typically for side effects or logging (though Change Feed is often preferred for complex side effects).
*   **User-Defined Function (UDF):** A JavaScript function that extends the Cosmos DB SQL query language, allowing custom logic within `SELECT` or `WHERE` clauses.
*   **Transactional Guarantee:** The property that all operations within a stored procedure either succeed completely or fail completely, with the entire transaction rolled back on failure.
*   **Logical Partition:** The unit of scalability and transactionality in Cosmos DB. Stored procedures operate within a single logical partition.

#### Hands-on activity
**Activity: Implement and Test a Stored Procedure and a Pre-Trigger**

You will implement a stored procedure to atomically transfer "credits" between two user accounts and a pre-trigger to ensure a `Product` document always has a `LastModified` timestamp.

**Steps:**
1.  **Prerequisites:** Your Azure Cosmos DB account and `ProductsDB` database.
2.  **Create `Users` Container:**
    *   In `ProductsDB`, create a new container named `Users` with `/id` as the partition key (e.g., 400 RU/s).
    *   Add two sample user documents. Ensure they have the same `id` value if you want to test the SP within a single logical partition (e.g., if `id` is the partition key, then `user1` and `user2` would be in different partitions). For this activity, let's assume `id` is the partition key and we're demonstrating the SP's behavior *within a single partition*. So, for the SP, you'd transfer between two documents that *happen to be in the same partition* based on their partition key. A simpler approach for the SP demo is to use a fixed partition key for the `Users` container, e.g., `/type`, and then `user1` and `user2` would both have `type: "user"`. Let's use `/type` as the partition key for `Users` container.
        ```json
        { "id": "user1", "name": "Alice", "credits": 100, "type": "user" }
        { "id": "user2", "name": "Bob", "credits": 50, "type": "user" }
        ```
        
3.  **Create Stored Procedure (`transferCredits.js`):**
    *   Create a JavaScript file `transferCredits.js` with the following content:
    ```javascript
    function transferCredits(fromUserId, toUserId, amount) {
        var collection = getContext().getCollection();
        var collectionLink = collection.getSelfLink();
        var response = getContext().getResponse();

        if (amount <= 0) {
            throw new Error("Transfer amount must be positive.");
        }

        // Use a SQL query to find documents by id within the current logical partition.
        // The partition key for the execution context is implicitly provided by the client SDK.
        var queryFrom = "SELECT * FROM c WHERE c.id = '" + fromUserId + "'";
        var queryTo = "SELECT * FROM c WHERE c.id = '" + toUserId + "'";

        // Step 1: Query for 'from' user
        var isQueryAccepted1 = collection.queryDocuments(
            collectionLink,
            queryFrom,
            function (err, fromUsers, options) {
                if (err) throw err;
                if (fromUsers.length !== 1) {
                    throw new Error("Source user not found or multiple users found in partition.");
                }

                var fromUser = fromUsers[0];
                if (fromUser.credits < amount) {
                    throw new Error("Insufficient credits for transfer.");
                }

                // Step 2: Query for 'to' user
                var isQueryAccepted2 = collection.queryDocuments(
                    collectionLink,
                    queryTo,
                    function (err, toUsers, options) {
                        if (err) throw err;
                        if (toUsers.length !== 1) {
                            throw new Error("Destination user not found or multiple users found in partition.");
                        }

                        var toUser = toUsers[0];

                        // Step 3: Update 'from' user
                        fromUser.credits -= amount;
                        var isReplaceAccepted1 = collection.replaceDocument(fromUser._self, fromUser, function (err, updatedFromUser) {
                            if (err) throw err;

                            // Step 4: Update 'to' user
                            toUser.credits += amount;
                            var isReplaceAccepted2 = collection.replaceDocument(toUser._self, toUser, function (err, updatedToUser) {
                                if (err) throw err;
                                response.setBody({
                                    message: "Credits transferred successfully.",
                                    fromUser: updatedFromUser,
                                    toUser: updatedToUser
                                });
                            });
                            if (!isReplaceAccepted2) throw new Error("Could not replace toUser (throttled?).");
                        });
                        if (!isReplaceAccepted1) throw new Error("Could not replace fromUser (throttled?).");
                    }
                );
                if (!isQueryAccepted2) throw new Error("Could not query toUser (throttled?).");
            }
        );
        if (!isQueryAccepted1) throw new Error("Could not query fromUser (throttled?).");
    }
    ```
4.  **Create Pre-Trigger (`addLastModifiedTrigger.js`):**
    *   Create a JavaScript file `addLastModifiedTrigger.js` with the content from the lesson.
5.  **C# Console Application:**
    *   Create a new C# Console Application.
    *   Install `Microsoft.Azure.Cosmos` NuGet package.
    *   Add the `Product` and `UserAccount` classes (from lesson content).
    *   Add the `CosmosDbService` class (from lesson content).
    *   In your `Main` method:
        *   Initialize `CosmosDbService` with your connection string, `ProductsDB`, `Products` container, and `Users` container.
        *   **Register the Stored Procedure:** Upload `transferCredits.js` as a stored procedure to the `Users` container.
        *   **Register the Pre-Trigger:** Upload `addLastModifiedTrigger.js` as a pre-trigger (for `All` operations) to your `Products` container.
        *   **Test Stored Procedure:**
            *   Execute `TransferCredits` SP with valid users (`user1`, `user2`) and amount (e.g., 10). The partition key for execution should be `new PartitionKey("user")`. Verify credits change.
            *   Execute with insufficient credits (e.g., `user1`, `user2`, 500). Verify it fails and credits remain unchanged (transactional rollback).
            *   Execute with an invalid amount (e.g., 0).
        *   **Test Pre-Trigger:**
            *   Create a new product using `CreateProductWithTrigger` in the `Products` container. Verify `LastModified` is automatically added.
            *   Update an existing product (e.g., by reading it, modifying a property, and then replacing it with the pre-trigger specified). Verify `LastModified` is updated.
6.  **Verify:** Check the documents in the Azure Portal Data Explorer to confirm changes.

#### Assessment idea
1.  **Question:** You are designing a system where, upon creation of a new `Order` document in Cosmos DB, you need to perform two actions: first, validate that the `totalAmount` is positive, and second, decrement the `stockLevel` of associated `Product` documents. Which server-side programming features are most appropriate for these two distinct requirements, and why?
    *   **Correct Answer:**
        *   For validating `totalAmount`, a **pre-trigger** is most appropriate. It executes *before* the `Order` document is persisted, allowing you to inspect `totalAmount` and abort the operation if it's invalid, preventing bad data from entering the database.
        *   For decrementing `stockLevel` of `Product` documents, the **Change Feed** is the most appropriate and scalable solution. While a post-trigger *could* be used if the `Product` documents are in the same logical partition as the `Order` (to maintain transactionality), this is generally not recommended for complex or cross-partition updates due to performance implications and the potential for long-running operations. The Change Feed allows for asynchronous, decoupled processing, where an Azure Function or a Change Feed Processor can react to the `Order` creation event and then safely update `Product` stock levels in a separate, scalable operation, even if they reside in different logical partitions.
2.  **Question:** A developer implemented a Cosmos DB Stored Procedure to update 1000 documents within a single logical partition. During testing, they observe that the stored procedure frequently fails with a "Request is too large" or "Request exceeded allowed execution time" error. What are the common causes for these errors in stored procedures, and what is the recommended approach to mitigate them?
    *   **Correct Answer:**
        *   **Common Causes:** Stored procedures have strict limits: a maximum execution time of 5 seconds and a maximum Request Unit (RU) consumption per transaction. Updating 1000 documents in a single execution often exceeds these limits, especially if the documents are large or the RUs per second provisioned for the container are low. The "Request is too large" error might also refer to the size of the JavaScript body or the number of operations, though execution time and RU consumption are more common for batch updates.
        *   **Mitigation:** The recommended approach is to **batch operations** on the client-side. Instead of trying to update all 1000 documents in one stored procedure call, the client application should break the updates into smaller batches (e.g., 50-100 documents per batch) and call the stored procedure multiple times, passing one batch at a time. The stored procedure itself should be designed to accept a list of documents and process them iteratively, checking `getContext().getCollection().getResponseBody().length` or similar mechanisms to ensure it doesn't exceed the response size limit, and using `isAccepted = collection.upsertDocument(...)` and checking `isAccepted` to handle throttling gracefully within the SP. For very large-scale, cross-partition batch updates, the Change Feed is often a more robust and scalable pattern.

#### AI generation note
Create a 15-minute live coding video. Begin by explaining the core concepts of Stored Procedures, Triggers, and UDFs with simple diagrams illustrating their execution flow. Then, demonstrate in the Azure Portal how to create and upload a simple Stored Procedure (e.g., the `transferCredits` example). Show how to execute it from a C# console application, passing parameters and handling the response, specifically demonstrating a successful transfer and a failed one due to insufficient funds (showing the transactional rollback). Next, demonstrate creating a pre-trigger (e.g., to add a `LastModified` timestamp) and associating it with a `Create` operation in the C# code. Show the document in Data Explorer before and after the operation, highlighting the trigger's effect. Briefly show how to create a UDF in the portal and use it in a query. Emphasize the transactional nature of SPs and the validation role of pre-triggers. End with a mini-quiz asking about the best use case for each server-side scripting type.

---

### Chapter 4.4 — Performance and Cost Optimization Techniques

#### Learning objectives
*   Understand the Request Unit (RU) model in Azure Cosmos DB and its implications for performance and cost.
*   Optimize indexing policies to improve query performance and reduce RU consumption.
*   Apply effective partitioning strategies to distribute data and throughput efficiently.
*   Leverage SDK features and configurations for client-side performance tuning.
*   Monitor Cosmos DB performance and cost using Azure Monitor and other tools.
*   Implement strategies for cost management, including serverless and autoscale throughput.

#### Detailed lesson content
Optimizing performance and cost in Azure Cosmos DB is crucial for building scalable, efficient, and economically viable applications. The fundamental unit of measure in Cosmos DB is the **Request Unit (RU)**, which is a performance currency representing the cost of database operations. Every operation, from a simple point read to a complex query or stored procedure execution, consumes RUs. The number of RUs consumed depends on factors like document size, index usage, query complexity, and consistency level. Understanding and managing RUs is the cornerstone of both performance and cost optimization. You provision throughput in RUs per second (RU/s), and this determines the maximum rate at which your application can perform operations. Exceeding your provisioned RU/s will result in throttling (HTTP 429 errors), which means your requests are temporarily rejected and need to be retried.

**Indexing policies** significantly impact query performance and RU consumption. By default, Cosmos DB automatically indexes all properties, which is convenient but can be inefficient for large documents or when you only query a subset of properties. Customizing your indexing policy allows you to include specific paths, exclude others, or change index types (e.g., from `Hash` to `Range` for range queries). For example, if you frequently filter or order by a `category` property, ensuring it has a `Range` index will drastically improve query performance. Conversely, if you have large text fields that are never queried, excluding them from indexing can reduce storage costs and RU consumption for write operations. The goal is to create a policy that supports your most common query patterns while minimizing the overhead of indexing unnecessary data. Remember that every write operation (insert, update) also consumes RUs to update the indexes.

**Partitioning strategies** are perhaps the most critical design decision for scalability and cost. Your choice of partition key determines how your data is distributed across logical partitions. An ideal partition key has high cardinality (many unique values), distributes request volume evenly across logical partitions, and is frequently used in your queries (especially point reads and equality filters). A poor partition key choice can lead to "hot partitions," where a single logical partition receives a disproportionately high volume of requests, becoming a bottleneck and leading to throttling, even if your overall RU/s provisioned is sufficient. For instance, if you partition by `country` and most of your users are from "USA", that partition will become hot. Instead, combining `country` with `userId` or using a synthetic key can help distribute the load. Cross-partition queries are generally more expensive (consume more RUs) and have higher latency than intra-partition queries, so designing your data model to keep related data within the same logical partition is a key optimization.

**Client-side SDK configurations** offer several levers for performance tuning.
*   **Direct Connectivity Mode:** For optimal performance, especially with low latency, use Direct connectivity mode. Gateway mode adds an extra network hop.
*   **Batching Operations:** Group multiple point reads or writes into a single batch operation (e.g., using `TransactionalBatch` for operations within the same logical partition) to reduce network round trips and potentially save RUs.
*   **MaxConcurrency:** For parallel operations, configure `MaxConcurrency` in the `CosmosClientOptions` to control the number of concurrent network connections.
*   **Connection Pooling:** Ensure your `CosmosClient` instance is a singleton and reused throughout your application to leverage connection pooling. Creating a new client for every operation is a common and costly mistake.
*   **Retry Policy:** Implement robust retry logic with exponential back-off for throttled requests (HTTP 429). The Cosmos DB SDKs often have built-in retry mechanisms, but understanding and configuring them is important.
*   **Consistency Level:** Choosing the right consistency level is a trade-off between performance, latency, and data consistency guarantees. Stronger consistency levels generally consume more RUs for reads and writes and have higher latency. For many applications, Session or Bounded Staleness offer a good balance.

**Monitoring** is essential for identifying performance bottlenecks and managing costs. Azure Monitor provides comprehensive metrics for Cosmos DB, including:
*   **Total Request Units:** Tracks overall RU consumption.
*   **Normalized RU Consumption:** Indicates how close you are to your provisioned throughput limit (100% means you're being throttled).
*   **Throttled Requests (429s):** Critical for identifying hot partitions or insufficient throughput.
*   **Data Storage:** Monitors your storage usage.
*   **Latency:** Tracks read and write latency.
*   **Index Usage:** Helps identify queries that are not using indexes efficiently.
Set up alerts in Azure Monitor for high RU consumption, high normalized RU consumption, or frequent throttled requests to proactively address issues.

**Cost management strategies** go hand-in-hand with performance optimization.
*   **Autoscale Throughput:** Instead of manually provisioning fixed RU/s, Autoscale automatically scales your throughput up and down based on usage, helping to manage costs during variable workloads and preventing throttling. It scales between a minimum and maximum RU/s, with the maximum being the billing determinant.
*   **Serverless Mode:** For unpredictable and infrequent workloads, Serverless mode is a great option. You only pay for the RUs consumed and the storage used, without provisioning any throughput. It has burst capacity and scales instantly, but has higher per-RU cost compared to provisioned throughput and limits on maximum RUs per second.
*   **Reserved Capacity:** For predictable, high-volume workloads over an extended period, Azure Reserved Capacity can provide significant discounts (up to 65%) on throughput and storage costs.
*   **Time-to-Live (TTL):** For data that expires, configure TTL on documents or containers to automatically delete old data, reducing storage costs and potentially RU consumption for background cleanup.
*   **Right-sizing Throughput:** Regularly review your provisioned throughput (RU/s) against actual usage patterns. If you consistently use far less than you provision, you're overpaying. If you're consistently throttled, you need more. Autoscale helps automate this.

A common mistake is to over-provision RUs "just in case," leading to unnecessary costs. Conversely, under-provisioning leads to poor performance and a bad user experience due to throttling. Another pitfall is ignoring the impact of large documents on RU consumption; larger documents consume more RUs for both reads and writes. Always consider your data access patterns, document sizes, and query complexity when designing your Cosmos DB solution. Regularly review and optimize your indexing policies and partition keys as your application evolves.

#### Key concepts
*   **Request Unit (RU):** The performance currency in Azure Cosmos DB, representing the cost of database operations.
*   **RU/s (Request Units per second):** The throughput you provision for your Cosmos DB containers, determining the maximum rate of operations.
*   **Throttling (HTTP 429):** Occurs when an application exceeds its provisioned RU/s, causing requests to be temporarily rejected.
*   **Indexing Policy:** Configuration that defines which properties are indexed, their index types, and how they are indexed, impacting query performance and write costs.
*   **Partition Key:** A property in your documents that determines the logical partition where the document is stored, crucial for scalability and performance.
*   **Hot Partition:** A logical partition that receives a disproportionately high volume of requests, leading to performance bottlenecks and throttling.
*   **Direct Connectivity Mode:** A client-side SDK connection mode that connects directly to backend replicas, offering lower latency and better performance than Gateway mode.
*   **TransactionalBatch:** An SDK feature allowing multiple point operations (reads, writes, upserts, deletes) within the same logical partition to be executed transactionally and atomically.
*   **Autoscale Throughput:** A feature that automatically adjusts the provisioned RU/s of a container or database based on actual usage, optimizing cost and performance.
*   **Serverless Mode:** A billing model where you only pay for the RUs consumed and storage used, without provisioning throughput, ideal for intermittent or unpredictable workloads.
*   **Time-to-Live (TTL):** A mechanism to automatically delete documents after a specified period, reducing storage costs.

#### Hands-on activity
**Activity: Optimize Indexing and Monitor RU Consumption**

In this activity, you will experience the impact of indexing policies on query performance and RU consumption.

**Steps:**
1.  **Prerequisites:** Your Azure Cosmos DB account and `ProductsDB` database with the `Products` container (partition key `/id`).
2.  **Populate Data:**
    *   Ensure your `Products` container has a reasonable amount of data (e.g., 100-1000 documents). You can use a simple script to generate dummy product data with various categories and prices.
    *   Example data structure:
        ```json
        {
            "id": "prod-12345",
            "name": "Widget X",
            "category": "Electronics",
            "price": 99.99,
            "description": "A detailed description of Widget X...",
            "tags": ["smart", "home", "tech"]
        }
        ```
3.  **Baseline Measurement (Default Indexing):**
    *   Go to your `Products` container in the Azure Portal Data Explorer.
    *   Run a query that orders by a non-partition-key property that's currently only indexed with a `Hash` index (e.g., `SELECT * FROM c ORDER BY c.price DESC`).
    *   Note down the **Request Units (RUs)** consumed for this query.
    *   Run a query that filters on a large text property (e.g., `SELECT * FROM c WHERE CONTAINS(c.description, 'detailed description')`). Note down the RUs.
4.  **Modify Indexing Policy:**
    *   In the Azure Portal, navigate to your `Products` container -> `Settings` -> `Indexing Policy`.
    *   Modify the policy JSON to explicitly include a `Range` index on `price` and exclude `description` from indexing.
    *   Example JSON for a custom indexing policy:
        ```json
        {
          "indexingMode": "consistent",
          "automatic": true,
          "includedPaths": [
            {
              "path": "/price/?",
              "indexes": [
                {
                  "kind": "Range",
                  "dataType": "Number",
                  "precision": -1
                }
              ]
            },
            {
              "path": "/*", // Default index for everything else (Hash is default for /?)
              "indexes": [
                {
                  "kind": "Hash",
                  "dataType": "String",
                  "precision": -1
                },
                {
                  "kind": "Hash",
                  "dataType": "Number",
                  "precision": -1
                }
              ]
            }
          ],
          "excludedPaths": [
            {
              "path": "/description/*" // Exclude description from indexing
            },
            {
              "path": "/_etag/?"
            }
          ]
        }
        ```
    *   Save the changes. It might take a few minutes for the index transformation to complete.
5.  **Re-measure and Compare:**
    *   Re-run the same queries from step 3.
    *   Observe the new RU consumption for the `ORDER BY c.price DESC` query. You should see a significant reduction.
    *   The `CONTAINS(c.description, ...)` query might still be high (as it's a function that often requires scans), but excluding `description` from indexing will reduce RU consumption for *write* operations if `description` is large.
6.  **Explore Azure Monitor:**
    *   Navigate to your Cosmos DB account in the Azure Portal -> `Monitoring` -> `Metrics`.
    *   Explore metrics like "Total Request Units," "Normalized RU Consumption," and "Throttled Requests" (HTTP 429) over time. Simulate load (e.g., by running many queries or writes from your application) and observe how these metrics change.

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB container stores `SensorData` documents, partitioned by `deviceId`. You frequently execute queries like `SELECT * FROM c WHERE c.deviceId = 'sensor123' AND c.timestamp > '2023-01-01T00:00:00Z' ORDER BY c.timestamp DESC`. You observe that these queries consume a high number of RUs and are often throttled. What two key optimization techniques should you investigate first, and how would you apply them?
    *   **Correct Answer:**
        1.  **Indexing Policy Optimization:** The query filters on `timestamp` and orders by `timestamp`. While `deviceId` is the partition key and will be efficient for filtering, `timestamp` likely needs a `Range` index to optimize the range filter (`>`) and the `ORDER BY` clause. You should modify the indexing policy for the `SensorData` container to include a `Range` index on the `timestamp` property.
        2.  **Review Partition Key Strategy / Increase Throughput:** If the throttling is occurring even with an optimized index on `timestamp`, it suggests that the `sensor123` partition itself is receiving too many requests, making it a "hot partition." If this is a common occurrence for many `deviceId`s, you might need to increase the overall provisioned RU/s for the container (or enable Autoscale). If only a *few* `deviceId`s are consistently hot, a deeper review of the partition key might be needed, potentially considering a synthetic partition key (e.g., combining `deviceId` with a time component or a hash) to further distribute the load for those specific high-volume devices, though this adds complexity to queries.
2.  **Question:** You are migrating an existing application to Azure Cosmos DB. The application has highly variable workloads, with peak usage during business hours and very low usage overnight. You want to minimize costs while ensuring performance during peak times. Which Cosmos DB throughput provisioning option is best suited for this scenario, and what are its main benefits?
    *   **Correct Answer:** **Autoscale throughput** is the best option for this scenario.
        *   **Benefits:**
            *   **Cost Optimization:** Autoscale automatically scales the provisioned RU/s up and down based on actual usage, within a defined min/max range. This means you only pay for the throughput you actually use (or the minimum, whichever is higher), significantly reducing costs during off-peak hours compared to manually provisioning for peak capacity 24/7.
            *   **Performance Assurance:** During peak times, Autoscale automatically scales up to the maximum provisioned RU/s, ensuring your application has sufficient throughput to handle the load and avoid throttling, thus maintaining performance and responsiveness.
            *   **Reduced Management Overhead:** It eliminates the need for manual monitoring and adjustments of throughput, simplifying operations.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Start by explaining the RU model and its components with an animated visual. Then, guide the learner through the Azure Portal: showing how to navigate to a Cosmos DB container, inspect its default indexing policy, and run a baseline query to observe RU consumption. Next, demonstrate modifying the indexing policy to add a `Range` index on a specific property and exclude another. Show the index transformation status. Re-run the same query and highlight the significant reduction in RUs. Then, switch to Azure Monitor to show where to find "Total Request Units" and "Normalized RU Consumption" metrics, explaining what to look for and how to interpret throttling. Conclude with a hands-on coding exercise where learners modify an existing C# application to use `TransactionalBatch` for multiple operations within a single partition, comparing RU consumption before and after.

---

## Module 5: Optimizing and Monitoring Azure Cosmos DB

This module will equip you with the essential knowledge and practical skills to optimize the performance and cost-efficiency of your Azure Cosmos DB solutions, as well as effectively monitor their health and troubleshoot common issues. We'll delve into the intricacies of Request Units, indexing strategies, and performance tuning for data operations, culminating in robust monitoring and troubleshooting techniques using Azure's powerful tools.

### Chapter 5.1 — Understanding and Optimizing Request Units (RUs)

#### Learning objectives
*   Define Request Units (RUs) and explain their role in Azure Cosmos DB pricing and performance.
*   Calculate the RU consumption for various data operations, including reads, writes, and queries.
*   Differentiate between provisioned throughput, serverless, and autoscale provisioning models.
*   Implement strategies to optimize RU consumption for common application workloads.
*   Understand the impact of indexing on RU consumption and query performance.

#### Detailed lesson content
Welcome to the critical world of Request Units, or RUs, in Azure Cosmos DB! RUs are the fundamental currency of Cosmos DB, representing a normalized measure of the system resources—CPU, memory, IOPS—consumed by your database operations. Every operation you perform, from a simple point read to a complex query or a document write, consumes RUs. Understanding and optimizing RU consumption is paramount for both cost efficiency and ensuring your application meets its performance SLAs. If you provision too few RUs, your requests will be throttled, leading to increased latency and failed operations. If you provision too many, you're paying for resources you don't use. The goal is to find that sweet spot.

Let's start by demystifying how RUs are consumed. A point read (fetching a single item by its ID and partition key) is typically the cheapest operation, often consuming just 1 RU. However, a document write, especially for larger documents, will consume more RUs because it involves not only writing the data but also updating indexes. Queries are where RU consumption can become highly variable. A query that scans a large portion of your data and doesn't utilize an index efficiently will consume significantly more RUs than a highly selective query that leverages an appropriate index. The size of the document, the number of properties, the complexity of the query, and the consistency level all play a role in RU cost. For instance, writing a 1KB document might cost around 5-7 RUs, while a 100KB document could easily cost 50-70 RUs. When designing your data model, always consider the size of your documents and how frequently they will be updated.

Azure Cosmos DB offers several throughput provisioning models, each with its own advantages. **Provisioned throughput** allows you to specify a fixed amount of RUs per second (RU/s) that your database or container will have available. This is ideal for predictable workloads where you know your peak demand. You pay for the RUs you provision, whether you use them or not. **Autoscale provisioned throughput** is a more dynamic option. You define a maximum RU/s, and Cosmos DB automatically scales the throughput up or down within a range (typically 10% to 100% of your max RU/s), based on your actual usage. This helps manage costs for variable workloads by preventing over-provisioning during low usage periods while ensuring capacity during spikes. Finally, **serverless** is designed for intermittent or unpredictable workloads with low average traffic. You pay only for the RUs consumed by your operations, without needing to provision any throughput upfront. This is excellent for development/test environments, small applications, or event-driven functions. However, serverless has higher per-RU costs compared to provisioned throughput, and it has latency guarantees that are less stringent than provisioned throughput.

Optimizing RU consumption is a continuous process. One of the most impactful strategies is to design efficient queries. Always strive to include the partition key in your queries whenever possible, as this allows Cosmos DB to route the query directly to the relevant physical partition, significantly reducing RU cost and latency. Avoid `SELECT *` in your queries; instead, project only the fields you need. This reduces network payload size and processing overhead. When performing writes, consider batching multiple operations using the transactional batch feature in the SDK for operations within the same logical partition key. For operations across multiple partition keys or large-scale data ingestion, the bulk executor library is invaluable.

Indexing also plays a crucial role in RU optimization. By default, Azure Cosmos DB automatically indexes all properties. While convenient, this can increase write RU cost and storage. Customizing your indexing policy to include only the necessary paths can drastically reduce write RUs. Conversely, ensuring that properties frequently used in query filters, `ORDER BY` clauses, or `JOIN` conditions are indexed will dramatically reduce read RUs for those queries. A common mistake is to rely solely on the default indexing policy without understanding its implications. For example, if you frequently query by a `timestamp` property but it's not indexed, Cosmos DB will perform a full scan, consuming many RUs. By adding an index on `timestamp`, the query becomes much more efficient. Always use the Azure Portal's Data Explorer or the SDK's `RequestCharge` property to monitor the RU cost of your operations and iterate on your indexing and query designs.

```csharp
// Example: Measuring RU cost of a point read
// Assuming 'container' is an initialized CosmosContainer object
string id = "someItemId";
string partitionKey = "somePartitionKey";

ItemResponse<MyItem> response = await container.ReadItemAsync<MyItem>(id, new PartitionKey(partitionKey));
Console.WriteLine($"Point read RU cost: {response.RequestCharge}");

// Example: Measuring RU cost of a query
QueryDefinition queryDefinition = new QueryDefinition(
    "SELECT c.id, c.name FROM c WHERE c.category = @category AND c.price > @price"
)
.WithParameter("@category", "Electronics")
.WithParameter("@price", 500);

using FeedIterator<MyItem> feedIterator = container.GetItemQueryIterator<MyItem>(queryDefinition);

double totalRequestCharge = 0;
while (feedIterator.HasMoreResults)
{
    FeedResponse<MyItem> queryResponse = await feedIterator.ReadNextAsync();
    totalRequestCharge += queryResponse.RequestCharge;
    foreach (MyItem item in queryResponse)
    {
        Console.WriteLine($"Found item: {item.id}");
    }
}
Console.WriteLine($"Query RU cost: {totalRequestCharge}");
```
In the code snippets above, `response.RequestCharge` and `queryResponse.RequestCharge` are your best friends for understanding the real-time RU cost of your operations. Always log these values during development and testing to identify potential performance bottlenecks and high-cost operations. Remember that the RU cost can vary based on the data volume, document size, and the number of items matched by a query. Regularly review your application's RU consumption patterns using Azure Monitor to identify opportunities for further optimization.

#### Key concepts
*   **Request Unit (RU):** A normalized measure of the resources (CPU, memory, IOPS) consumed by Azure Cosmos DB operations.
*   **Provisioned Throughput:** A fixed amount of RU/s allocated to a database or container, paid for whether used or not.
*   **Autoscale Throughput:** Dynamically scales RU/s within a defined range based on actual usage, optimizing cost for variable workloads.
*   **Serverless:** A consumption-based model where you pay only for the RUs consumed, suitable for intermittent or unpredictable workloads.
*   **Point Read:** Retrieving a single item by its ID and partition key, typically the most RU-efficient read operation.
*   **Indexing Policy:** Configuration that defines which properties are indexed, impacting RU cost for writes and query performance/RU cost for reads.
*   **Throttling (429 HTTP status code):** Occurs when an application exceeds the provisioned RU/s, causing requests to be rejected.

#### Hands-on activity
**Activity: Analyze and Optimize RU Consumption for a Query**

**Scenario:** You have an Azure Cosmos DB container storing product data. You need to identify products within a specific category and price range. Your initial query is performing poorly.

**Instructions:**
1.  **Set up:** Create a new Azure Cosmos DB account (if you don't have one) and a SQL API database and container. Name the container `Products`.
2.  **Populate data:** Insert at least 100 sample product documents into the `Products` container. Each document should have `id`, `name`, `category`, `price`, and `description` properties. Ensure you have products across different categories and price ranges.
    ```json
    // Sample product document
    {
        "id": "prod123",
        "name": "Laptop Pro X",
        "category": "Electronics",
        "price": 1200.00,
        "description": "High-performance laptop for professionals."
    }
    ```
3.  **Initial Query:** Execute the following query in the Azure Portal's Data Explorer or via the .NET SDK and record its RU cost.
    ```sql
    SELECT * FROM c WHERE c.category = 'Electronics' AND c.price > 1000
    ```
4.  **Analyze and Optimize:**
    *   Observe the `Request Charge` for this query.
    *   Consider the default indexing policy. Is `category` and `price` indexed? (By default, yes, but we'll explore custom policies later).
    *   Modify the query to project only necessary fields (e.g., `id`, `name`, `price`). Re-run and compare RU cost.
    *   **Challenge:** If your initial RU cost is high, think about what might be causing it. Could it be the `SELECT *`? Could it be the data distribution?
5.  **Reflect:** What changes did you make, and how did they impact the RU cost?

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB application frequently experiences "Request rate is large" (HTTP 429) errors, even though your average RU consumption appears to be well below your provisioned throughput. Which of the following is the MOST likely cause, and what immediate action would you take?
    A) Your indexing policy is too restrictive, causing full scans.
    B) Your application is performing too many point reads per second.
    C) You have a sudden, short burst of requests exceeding your provisioned RU/s.
    D) Your documents are too large, increasing individual operation RU costs.

    **Correct Answer:** C) You have a sudden, short burst of requests exceeding your provisioned RU/s.
    **Explanation:** While A, B, and D can contribute to high RU consumption, throttling (429 errors) specifically indicates that the *rate* of requests has temporarily exceeded the *provisioned throughput capacity*. Even if average consumption is low, short, intense bursts can overwhelm the system. The most immediate action to mitigate this for variable workloads is to switch to **autoscale provisioned throughput** if not already using it, or increase the maximum RU/s for your autoscale setting, to allow Cosmos DB to dynamically scale up during these bursts.

2.  **Question:** You are designing a new Cosmos DB container for an e-commerce application. Product documents average 5KB in size. You anticipate approximately 50 writes per second and 200 point reads per second. Assuming a write operation costs ~10 RUs and a point read costs ~1 RU, what is the MINIMUM estimated provisioned throughput (RU/s) you should consider for this container?
    A) 250 RU/s
    B) 700 RU/s
    C) 1000 RU/s
    D) 1500 RU/s

    **Correct Answer:** B) 700 RU/s
    **Explanation:**
    *   Write RU consumption: 50 writes/second * 10 RUs/write = 500 RU/s
    *   Read RU consumption: 200 reads/second * 1 RU/read = 200 RU/s
    *   Total estimated RU/s = 500 + 200 = 700 RU/s.
    This is a minimum estimate. In a real-world scenario, you would also account for query RUs, indexing overhead, and add a buffer for peak loads.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with an animated diagram explaining what an RU represents (CPU, memory, IOPS). Transition to a live demo in the Azure Portal showing how to set provisioned throughput, autoscale, and serverless, highlighting their cost implications. Then, switch to a live coding session in C#/.NET, demonstrating how to perform point reads and queries, and crucially, how to retrieve and log the `RequestCharge` for each operation. Show how a `SELECT *` query has a higher RU cost than a selective `SELECT` query. Include a split-screen view of code and Azure Portal Data Explorer output. End with a reflection prompt asking learners to consider their own application's workload and choose the best RU provisioning model.

### Chapter 5.2 — Optimizing Indexing Strategies

#### Learning objectives
*   Explain the role of indexing in Azure Cosmos DB for query performance and RU optimization.
*   Configure custom indexing policies, including automatic, manual, and composite indexes.
*   Identify scenarios where composite indexes are beneficial and implement them effectively.
*   Understand the impact of different index types (range, spatial, full-text) and their use cases.
*   Perform index transformations and manage indexing progress.

#### Detailed lesson content
Indexing is the bedrock of efficient data retrieval in any database, and Azure Cosmos DB is no exception. While Cosmos DB automatically indexes all properties by default, this "index everything" approach is a double-edged sword. It simplifies development by ensuring most queries perform reasonably well out-of-the-box, but it comes at a cost: increased RU consumption for write operations (because every write has to update all indexes) and higher storage consumption. Optimizing your indexing strategy is therefore a critical step in fine-tuning your Cosmos DB solution for both performance and cost.

Let's begin by understanding the default behavior. By default, Cosmos DB uses a **consistent index** that updates synchronously with every write operation. This means that as soon as an item is written, its indexed properties are immediately available for queries. The default indexing policy includes all string and number paths for range indexes. While this is convenient, for write-heavy workloads, you might want to be more selective. This is where **custom indexing policies** come into play. You can explicitly include or exclude specific paths from indexing. For example, if you have a `description` field that is very long and never used in queries, you should exclude it from indexing to save write RUs and storage. Conversely, if you frequently query by `category` and `price`, ensure they are explicitly included.

```json
// Example: Custom Indexing Policy
{
  "indexingMode": "consistent",
  "automatic": true,
  "includedPaths": [
    {
      "path": "/*" // Include all paths by default
    },
    {
      "path": "/category/?" // Specifically include category
    },
    {
      "path": "/price/?" // Specifically include price
    }
  ],
  "excludedPaths": [
    {
      "path": "/description/*" // Exclude description from indexing
    },
    {
      "path": "/_etag/?" // Exclude system properties
    }
  ]
}
```
In this policy, we're still including all paths by default, but explicitly excluding `/description/*` and system properties like `_etag`. This can be a good starting point. For even more fine-grained control, you can change `"path": "/*"` to `"path": "/\""` (the root) and then explicitly include only the paths you need.

A particularly powerful feature for optimizing complex queries is **composite indexes**. These are essential when your queries have `ORDER BY` clauses with multiple properties, or when you combine filters with `ORDER BY`. For example, if you frequently query for products by `category` and then order them by `price` in ascending order (`SELECT * FROM c WHERE c.category = 'Electronics' ORDER BY c.price ASC`), a composite index on `(category ASC, price ASC)` would be highly beneficial. Without it, Cosmos DB might have to perform an in-memory sort of the results, which is an expensive operation in terms of RUs. The order of properties in a composite index matters; it must match the order in your `ORDER BY` clause. If you have `ORDER BY c.price, c.category`, you'd need a composite index on `(price ASC, category ASC)`.

```json
// Example: Composite Index for category and price
{
  "indexingMode": "consistent",
  "automatic": true,
  "includedPaths": [
    { "path": "/*" }
  ],
  "excludedPaths": [
    { "path": "/description/*" }
  ],
  "compositeIndexes": [
    [
      { "path": "/category", "order": "ascending" },
      { "path": "/price", "order": "ascending" }
    ],
    [
      { "path": "/price", "order": "ascending" },
      { "path": "/category", "order": "ascending" }
    ]
  ]
}
```
Notice that we've added two composite indexes here to cover different `ORDER BY` scenarios. It's crucial to analyze your most frequent and most expensive queries to determine which composite indexes are truly needed. Over-indexing with composite indexes can also increase write RUs and storage, so be judicious.

Beyond range indexes (which are the default for numbers and strings), Cosmos DB supports other specialized index types. **Spatial indexes** are used for queries involving geospatial data, such as finding points within a polygon or within a certain distance of another point. If your application stores geographical coordinates and performs location-based queries, you'll need to enable spatial indexing for the relevant path. **Full-text search** capabilities are not natively part of Cosmos DB's core indexing but can be achieved by integrating with Azure Cognitive Search. While not an index *type* in the same vein, understanding this limitation is important for text-heavy search requirements.

When you modify an indexing policy, Cosmos DB performs an **index transformation**. This is an asynchronous background process that rebuilds the indexes according to your new policy. During this transformation, your data remains available for reads and writes, but queries might temporarily use the old index or perform less efficiently until the transformation is complete. You can monitor the progress of an index transformation through the Azure Portal or programmatically via the SDK. It's a good practice to plan index policy changes during off-peak hours, especially for large containers, to minimize any potential impact on query performance. A common mistake is to change the indexing policy without understanding the implications or monitoring the transformation progress, leading to unexpected query performance dips. Always test index changes in a non-production environment first.

```csharp
// Example: Setting a custom indexing policy via .NET SDK
// Assuming 'container' is an initialized CosmosContainer object
ContainerProperties containerProperties = await container.ReadContainerAsync();

// Modify indexing policy
containerProperties.IndexingPolicy.IncludedPaths.Clear(); // Clear existing
containerProperties.IndexingPolicy.IncludedPaths.Add(new IncludedPath { Path = "/*" });
containerProperties.IndexingPolicy.ExcludedPaths.Add(new ExcludedPath { Path = "/description/*" });
containerProperties.IndexingPolicy.ExcludedPaths.Add(new ExcludedPath { Path = "/_etag/?" });

// Add composite index
containerProperties.IndexingPolicy.CompositeIndexes.Clear();
containerProperties.IndexingPolicy.CompositeIndexes.Add(new Collection<CompositePath>()
{
    new CompositePath() { Path = "/category", Order = CompositePathSortOrder.Ascending },
    new CompositePath() { Path = "/price", Order = CompositePathSortOrder.Ascending }
});

await container.ReplaceContainerAsync(containerProperties);
Console.WriteLine("Indexing policy updated. Index transformation may begin.");
```
Remember that optimizing indexing is an iterative process. Start with a sensible policy, monitor your query RUs and performance, and then refine your policy based on real-world usage patterns. The goal is to strike a balance between efficient reads and writes, minimizing both RU consumption and storage costs.

#### Key concepts
*   **Indexing Policy:** A JSON document defining how items in a container are indexed, including included/excluded paths and composite indexes.
*   **Included Paths:** Specifies which JSON paths within documents should be indexed.
*   **Excluded Paths:** Specifies which JSON paths should be explicitly excluded from indexing.
*   **Composite Index:** An index on multiple properties, crucial for optimizing queries with `ORDER BY` clauses on multiple fields or combined filters and `ORDER BY`.
*   **Index Transformation:** The asynchronous background process of rebuilding indexes when an indexing policy is changed.
*   **Range Index:** The default index type for numbers and strings, supporting equality, range, and `ORDER BY` queries.
*   **Spatial Index:** Specialized index for geospatial data, enabling efficient queries on geographical coordinates.

#### Hands-on activity
**Activity: Implement and Test a Composite Index**

**Scenario:** You have a `Products` container. You frequently need to query for products of a certain `category` and order them by `price`.

**Instructions:**
1.  **Prerequisites:** Use the `Products` container from the previous activity. Ensure it has at least 100 documents with `category` and `price` properties.
2.  **Initial Query:** Execute the following query in the Azure Portal's Data Explorer or via the .NET SDK and record its RU cost and observe the query plan (if available in SDK or portal).
    ```sql
    SELECT c.id, c.name, c.price FROM c WHERE c.category = 'Electronics' ORDER BY c.price ASC
    ```
    *Note: Without a composite index, this query might show a high RU cost and indicate an in-memory sort.*
3.  **Modify Indexing Policy:** Update the `Products` container's indexing policy to include a composite index on `(category ASC, price ASC)`. You can do this via the Azure Portal (Data Explorer -> Scale & Settings -> Indexing Policy) or programmatically using the .NET SDK.
    ```json
    // Add this to your existing indexing policy
    "compositeIndexes": [
      [
        { "path": "/category", "order": "ascending" },
        { "path": "/price", "order": "ascending" }
      ]
    ]
    ```
4.  **Monitor Transformation:** Wait for the index transformation to complete. You can check its status in the Azure Portal under the container's "Indexing Policy" section or by attempting to query (it will eventually use the new index).
5.  **Re-run Query:** Execute the same query from step 2 again and record its RU cost.
    ```sql
    SELECT c.id, c.name, c.price FROM c WHERE c.category = 'Electronics' ORDER BY c.price ASC
    ```
6.  **Compare and Reflect:** Compare the RU costs and performance (if noticeable) before and after adding the composite index. Explain why the composite index improved the query's efficiency.

#### Assessment idea
1.  **Question:** You have a Cosmos DB container storing user profiles. Each profile has a `lastLoginDate` (DateTime) and `country` (string) property. You frequently run a query to find users who last logged in after a specific date, ordered by their `country` and then by `lastLoginDate`. Which composite index would be most effective for this query?
    ```sql
    SELECT * FROM u WHERE u.lastLoginDate > '2023-01-01T00:00:00Z' ORDER BY u.country ASC, u.lastLoginDate DESC
    ```
    A) `(lastLoginDate ASC, country ASC)`
    B) `(country ASC, lastLoginDate DESC)`
    C) `(lastLoginDate DESC, country ASC)`
    D) `(country ASC, lastLoginDate ASC)`

    **Correct Answer:** B) `(country ASC, lastLoginDate DESC)`
    **Explanation:** The order of properties in the composite index must match the order in the `ORDER BY` clause. The query specifies `ORDER BY u.country ASC, u.lastLoginDate DESC`. Therefore, the composite index `(country ASC, lastLoginDate DESC)` directly supports this ordering, allowing Cosmos DB to fulfill the sort operation efficiently without an in-memory sort.

2.  **Question:** Your Cosmos DB container contains large `productDescription` fields that are never used in query filters or `ORDER BY` clauses, but are always retrieved in full. What is the most effective indexing policy change to reduce write RU consumption and storage cost for this field?
    A) Add a composite index on `productDescription`.
    B) Change the `indexingMode` to `None`.
    C) Add `{"path": "/productDescription/*"}` to `excludedPaths`.
    D) Add `{"path": "/productDescription/?"}` to `includedPaths` with `dataType: "String"`.

    **Correct Answer:** C) Add `{"path": "/productDescription/*"}` to `excludedPaths`.
    **Explanation:** By adding `/productDescription/*` to the `excludedPaths`, you instruct Cosmos DB not to index the content of this field. This directly reduces the work Cosmos DB needs to do during write operations (as it doesn't need to update an index for this field) and saves storage space that would otherwise be consumed by the index. Options A and D would increase indexing overhead, and option B would disable indexing for the entire container, which is usually not desired.

#### AI generation note
Create a 10-minute live coding video. Begin by showing a query with a high RU cost and an in-memory sort indication in the Azure Portal Data Explorer. Then, demonstrate modifying the container's indexing policy in the Azure Portal to add a composite index for the problematic query. Explain the structure of the JSON for the composite index. Show the index transformation progress. After completion, re-run the query to demonstrate the reduced RU cost and improved performance. Include a visual overlay explaining the "order matters" concept for composite indexes. End with a mini-quiz asking about the correct composite index for a given query.

### Chapter 5.3 — Performance Tuning for Data Operations

#### Learning objectives
*   Implement efficient batch operations using transactional batch for operations within a logical partition.
*   Utilize the bulk executor library for high-throughput data ingestion and updates across partitions.
*   Explain the role of the change feed in real-time data processing and integrate it into applications.
*   Develop and deploy stored procedures and User-Defined Functions (UDFs) for server-side logic and aggregation.
*   Understand and apply optimistic concurrency control using ETags to prevent data conflicts.

#### Detailed lesson content
Beyond optimizing RUs and indexing, the way you interact with Azure Cosmos DB through its SDKs and features can dramatically impact your application's performance. This chapter focuses on advanced techniques for tuning your data operations, ensuring efficiency, scalability, and data integrity. We'll explore methods for executing multiple operations, processing real-time data changes, and leveraging server-side logic.

One of the most powerful features for optimizing multiple operations within a single logical partition is the **transactional batch**. This allows you to group several point operations (create, upsert, read, replace, delete) that target the same logical partition key into a single atomic transaction. If any operation within the batch fails, the entire batch is rolled back. This not only ensures data consistency but also significantly reduces network round trips and can be more RU-efficient than executing individual operations, especially for small, frequent updates. Imagine updating several properties of a user profile, all residing within the same partition key. Instead of sending multiple individual requests, you bundle them into one `TransactionalBatch` call.

```csharp
// Example: Transactional Batch for updating multiple items in the same logical partition
// Assuming 'container' is an initialized CosmosContainer object
string partitionKey = "user123";

// Create operations for the batch
TransactionalBatch batch = container.CreateTransactionalBatch(new PartitionKey(partitionKey))
    .UpsertItem(new UserProfile { Id = "user123_profile", PartitionKey = partitionKey, Name = "Alice Smith", Email = "alice.s@example.com" })
    .ReplaceItem("user123_settings", new UserSettings { Id = "user123_settings", PartitionKey = partitionKey, Theme = "dark", Notifications = true });

// Execute the batch
TransactionalBatchResponse batchResponse = await batch.ExecuteAsync();

if (batchResponse.IsSuccessStatusCode)
{
    Console.WriteLine($"Transactional batch succeeded. RU cost: {batchResponse.RequestCharge}");
    // Process results if needed
}
else
{
    Console.WriteLine($"Transactional batch failed: {batchResponse.StatusCode} - {batchResponse.ErrorMessage}");
    // Handle error
}
```
For high-throughput data ingestion or bulk updates across *multiple* logical partitions, the **bulk executor library** (or the equivalent features integrated into the latest SDKs like `.NET SDK v3`'s `Bulk` support) is your go-time solution. This library is specifically designed to maximize throughput by efficiently consuming provisioned RUs. It intelligently batches operations, manages concurrency, and handles throttling (429 errors) with retry logic, allowing you to ingest millions of documents or perform large-scale updates with minimal code. While transactional batch ensures atomicity within a partition, the bulk executor focuses on raw throughput and doesn't guarantee atomicity across the entire bulk operation. It's perfect for scenarios like migrating data, loading IoT sensor readings, or performing large-scale data transformations.

Real-time data processing is a common requirement for modern applications, and the **change feed** in Azure Cosmos DB is the perfect enabler. The change feed provides a persistent, ordered, and fault-tolerant log of all changes that happen in your container. You can use the **Change Feed Processor library** to build highly scalable and resilient applications that react to these changes in real-time. Common use cases include:
*   Triggering serverless functions (Azure Functions) on data changes.
*   Updating a materialized view or cache.
*   Performing analytics on new data.
*   Synchronizing data with other services (e.g., Azure Search, data warehouses).
The Change Feed Processor automatically manages lease containers, distributes processing across multiple instances, and handles checkpoints, making it incredibly easy to consume the change feed reliably.

```csharp
// Example: Setting up a Change Feed Processor (conceptual)
// This requires a separate lease container
// ChangeFeedProcessorBuilder builder = container.GetChangeFeedProcessorBuilder<MyItem>(
//     processorName: "myProcessor",
//     onChangesDelegate: HandleChangesAsync);
//
// ChangeFeedProcessor processor = builder
//     .WithInstanceName("myInstance")
//     .WithLeaseContainer(leaseContainer)
//     .Build();
//
// await processor.StartAsync();

// private static async Task HandleChangesAsync(
//     IReadOnlyCollection<MyItem> changes,
//     CancellationToken cancellationToken)
// {
//     foreach (var item in changes)
//     {
//         Console.WriteLine($"Detected change for item ID: {item.Id}");
//         // Process the item
//     }
// }
```
For server-side logic, Azure Cosmos DB supports **stored procedures** and **User-Defined Functions (UDFs)**, written in JavaScript. Stored procedures can execute transactional operations against items within a single logical partition. They are useful for complex, multi-document operations that require atomicity and high performance, as they execute directly on the database engine. UDFs, on the other hand, are used within SQL queries to extend their functionality, allowing you to define custom logic for filtering or projecting data. While powerful, it's generally recommended to move as much logic as possible to the client-side or serverless functions (like Azure Functions) for better scalability and flexibility, reserving stored procedures and UDFs for scenarios where their specific transactional or query-extension benefits are absolutely necessary. Over-reliance on server-side scripting can lead to "database anti-patterns" where business logic becomes tightly coupled to the database.

Finally, ensuring data integrity in concurrent environments is crucial. Azure Cosmos DB supports **optimistic concurrency control (OCC)** using **ETags**. Every item in Cosmos DB has an `_etag` property, which is a unique identifier that changes every time the item is updated. When you perform an update or delete operation, you can include the `_etag` of the item you last read. If the `_etag` on the server matches the one you provided, the operation proceeds. If they don't match (meaning another client modified the item since you read it), the operation fails with a pre-condition failure (HTTP 412 status code), preventing accidental overwrites. This is a robust mechanism for handling concurrent updates without the overhead of explicit locking.

```csharp
// Example: Optimistic Concurrency Control with ETag
// Assuming 'container' is an initialized CosmosContainer object
string id = "itemToUpdate";
string partitionKey = "pkValue";

// 1. Read the item
ItemResponse<MyItem> readResponse = await container.ReadItemAsync<MyItem>(id, new PartitionKey(partitionKey));
MyItem itemToUpdate = readResponse.Resource;
string originalETag = readResponse.ETag; // Get the ETag

// 2. Modify the item
itemToUpdate.Status = "Processed";

// 3. Attempt to replace the item, providing the original ETag
try
{
    ItemResponse<MyItem> replaceResponse = await container.ReplaceItemAsync(
        itemToUpdate,
        itemToUpdate.Id,
        new PartitionKey(partitionKey),
        new ItemRequestOptions { IfMatchEtag = originalETag }); // Crucial for OCC

    Console.WriteLine($"Item updated successfully. New ETag: {replaceResponse.ETag}");
}
catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.PreconditionFailed)
{
    Console.WriteLine($"Concurrency conflict: Item was modified by another client. Current ETag: {ex.Headers.ETag}");
    // Handle the conflict, e.g., re-read, merge, or inform user
}
catch (Exception ex)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
}
```
By mastering these performance tuning techniques, you can build highly efficient, scalable, and resilient applications on Azure Cosmos DB, capable of handling diverse workloads and ensuring data integrity.

#### Key concepts
*   **Transactional Batch:** A feature allowing multiple point operations targeting the same logical partition key to be executed as a single atomic transaction.
*   **Bulk Executor Library:** A library (or SDK feature) designed for high-throughput data ingestion and updates across multiple logical partitions, optimizing RU consumption and handling throttling.
*   **Change Feed:** A persistent, ordered log of all changes to items in an Azure Cosmos DB container, enabling real-time data processing.
*   **Change Feed Processor:** A library that simplifies consuming the change feed, managing leases, distributing work, and handling checkpoints.
*   **Stored Procedure:** Server-side JavaScript logic executed transactionally within a single logical partition, useful for complex multi-document operations.
*   **User-Defined Function (UDF):** Server-side JavaScript function used within SQL queries to extend query capabilities.
*   **Optimistic Concurrency Control (OCC):** A mechanism using ETags to prevent data conflicts when multiple clients attempt to modify the same item concurrently.
*   **ETag:** A unique identifier associated with each item in Cosmos DB, updated on every modification, used for OCC.

#### Hands-on activity
**Activity: Implement Transactional Batch and Optimistic Concurrency**

**Scenario:** You are building a system where a user's `order` and their `payment_status` (stored as separate documents but within the same logical partition, e.g., using `userId` as partition key) need to be updated atomically. Additionally, you want to prevent concurrent updates to a user's `profile` document.

**Instructions:**
1.  **Set up:** Create a new Cosmos DB SQL API container named `UserTransactions`. Use `/userId` as the partition key.
2.  **Create Sample Data:** Insert two documents for a single user (e.g., `userId: "userA"`):
    *   An `order` document: `{"id": "order123", "userId": "userA", "status": "Pending", "amount": 100}`
    *   A `payment_status` document: `{"id": "payment123", "userId": "userA", "orderId": "order123", "status": "Initiated"}`
    *   A `profile` document: `{"id": "profileA", "userId": "userA", "name": "Jane Doe", "version": 1}`
3.  **Implement Transactional Batch:** Write C# code to perform the following *atomically* for `userA`:
    *   Update `order123`'s `status` to "Processing".
    *   Update `payment123`'s `status` to "Completed".
    *   Execute this as a `TransactionalBatch`. Print the `RequestCharge` and success status.
4.  **Implement Optimistic Concurrency:**
    *   Read the `profileA` document. Store its `_etag`.
    *   Modify the `profileA` document (e.g., increment `version` to 2, change `name`).
    *   Attempt to replace the `profileA` document using the `IfMatchEtag` option with the stored `_etag`.
    *   **Test concurrency conflict:** Before the `ReplaceItemAsync` call, manually update the `profileA` document in the Azure Portal (e.g., change `name` to "Jane Smith"). Then run your code. Observe the `PreconditionFailed` exception.
5.  **Reflect:** Explain how transactional batch ensures atomicity and how ETags prevent data loss from concurrent updates.

#### Assessment idea
1.  **Question:** You need to update the `status` of 5 different items that share the same logical partition key, and these updates must either all succeed or all fail together. Which Cosmos DB feature is the most appropriate and efficient for this scenario?
    A) Using the bulk executor library.
    B) Executing 5 individual `ReplaceItemAsync` calls sequentially.
    C) Creating a stored procedure to perform the updates.
    D) Using a transactional batch.

    **Correct Answer:** D) Using a transactional batch.
    **Explanation:** Transactional batch is specifically designed for atomic operations within a single logical partition. It guarantees that all operations in the batch succeed or fail together, providing the required "all or nothing" consistency. The bulk executor is for high-throughput across partitions (not atomic), individual calls lack atomicity, and while a stored procedure could achieve this, transactional batch is generally preferred for its simpler client-side implementation and better integration with modern SDKs.

2.  **Question:** Your application is experiencing frequent data overwrites where changes made by one user are lost when another user saves an older version of the same document. You want to implement a mechanism to prevent this. Which property of a Cosmos DB item should you leverage, and how?
    A) The `_ts` (timestamp) property; check if the incoming timestamp is newer.
    B) The `_rid` (resource ID) property; ensure it matches.
    C) The `_etag` property; use it with the `IfMatchEtag` option during updates.
    D) The `id` property; ensure it is unique.

    **Correct Answer:** C) The `_etag` property; use it with the `IfMatchEtag` option during updates.
    **Explanation:** The `_etag` property is specifically designed for optimistic concurrency control. By including the `_etag` of the item you last read in your update request using `IfMatchEtag`, you tell Cosmos DB to only apply the update if the `_etag` on the server still matches. If it doesn't, it means the item was modified by another client, and Cosmos DB will return a 412 Precondition Failed error, preventing the overwrite.

#### AI generation note
Create a 15-minute live coding video. Start by demonstrating a scenario where multiple `ReplaceItemAsync` calls are made sequentially, highlighting the lack of atomicity. Then, refactor the code to use `TransactionalBatch` for updating multiple related items within the same logical partition, showing the `IsSuccessStatusCode` and `RequestCharge`. Next, introduce the concept of `_etag` and demonstrate optimistic concurrency control by reading an item, modifying it, and then attempting to replace it with `IfMatchEtag`. Simulate a conflict by manually updating the item in the Azure Portal between the read and replace operations, showing the `PreconditionFailed` exception handling. Include clear console output for RU cost and success/failure messages.

### Chapter 5.4 — Monitoring Azure Cosmos DB with Azure Monitor

#### Learning objectives
*   Identify key metrics in Azure Monitor for assessing Azure Cosmos DB health and performance.
*   Configure diagnostic settings to send Cosmos DB logs and metrics to various destinations.
*   Create and manage alert rules in Azure Monitor for critical Cosmos DB events.
*   Utilize Log Analytics queries (KQL) to analyze Cosmos DB operational data.
*   Integrate Cosmos DB monitoring with Azure Dashboards for a unified view.

#### Detailed lesson content
Effective monitoring is the backbone of any robust application, and Azure Cosmos DB is no exception. Azure Monitor provides a comprehensive suite of tools to collect, analyze, and act on telemetry data from your Cosmos DB resources, ensuring you can proactively identify and resolve performance bottlenecks, troubleshoot issues, and optimize costs. Without proper monitoring, you're flying blind, unable to react to throttling, high latency, or unexpected RU consumption spikes.

The first step in monitoring is understanding the key metrics available. Azure Cosmos DB exposes a wealth of metrics through Azure Monitor, categorized into throughput, storage, latency, availability, and consistency. For **throughput**, critical metrics include `Total Request Units`, `Throttled Requests` (HTTP 429), and `Normalized RU Consumption`. Monitoring `Throttled Requests` is paramount, as a consistent high number indicates your provisioned throughput is insufficient. `Normalized RU Consumption` helps you understand how close you are to saturating your provisioned RUs across all physical partitions. For **latency**, `Avg. Latency` and `Max Latency` for both reads and writes are crucial indicators of user experience. **Storage** metrics like `Data Size` and `Index Size` help you track growth and manage costs. Always keep an eye on these metrics, especially `Throttled Requests`, as they are often the first sign of an impending performance issue.

To get the most out of Azure Monitor, you need to configure **diagnostic settings** for your Cosmos DB account. Diagnostic settings allow you to specify where to send your platform logs and metrics. You can send them to:
1.  **Log Analytics workspace:** This is highly recommended for advanced analysis, as it allows you to use Kusto Query Language (KQL) to query your logs and metrics, create custom dashboards, and integrate with other Azure services.
2.  **Storage account:** Useful for archival purposes or if you need to process logs with external tools.
3.  **Event Hubs:** Ideal for streaming logs to external SIEM systems or custom real-time analytics solutions.
For a developer, sending diagnostics to a Log Analytics workspace is often the most valuable, as it provides immediate query capabilities. Common categories to enable include `DataPlaneRequests`, `MongoRequests`, `GremlinRequests` (depending on your API), `QueryRuntimeStatistics`, and `PartitionKeyStatistics`.

```azurecli
# Azure CLI command to configure diagnostic settings for Cosmos DB
# Replace <resource-group>, <cosmos-account-name>, <log-analytics-workspace-id>
az monitor diagnostic-settings create \
  --name "CosmosDB-Diagnostics" \
  --resource-group <resource-group> \
  --resource <cosmos-account-name> \
  --resource-type "Microsoft.DocumentDB/databaseAccounts" \
  --logs '[{"categoryGroup": "allLogs", "enabled": true}]' \
  --metrics '[{"category": "AllMetrics", "enabled": true}]' \
  --workspace <log-analytics-workspace-id>
```
Once your logs and metrics are flowing into Log Analytics, you can leverage **Kusto Query Language (KQL)** for powerful analysis. KQL allows you to filter, aggregate, join, and visualize your data. For example, you can query `AzureDiagnostics` table to find all throttled requests, or `AzureMetrics` table to analyze RU consumption patterns over time.

```kusto
// KQL query to find throttled requests (HTTP 429) for a specific Cosmos DB account
AzureDiagnostics
| where ResourceProvider == "MICROSOFT.DOCUMENTDB"
| where Category == "DataPlaneRequests"
| where httpStatusCode_d == 429
| project TimeGenerated, Resource, databaseName_s, collectionName_s, requestCharge_s, clientIpAddress_s, duration_s
| order by TimeGenerated desc

// KQL query to visualize Total Request Units over time
AzureMetrics
| where ResourceProvider == "MICROSOFT.DOCUMENTDB"
| where MetricName == "Total Request Units"
| summarize sum(Total) by bin(TimeGenerated, 5m), Resource
| render timechart
```
These queries are incredibly useful for deep dives into performance issues. You can save them, pin them to dashboards, or use them as the basis for alert rules.

**Alert rules** are your proactive defense mechanism. You can configure alerts in Azure Monitor to notify you when specific conditions are met. For Cosmos DB, critical alerts include:
*   **Throttled Requests:** Alert when `Throttled Requests` metric exceeds a certain threshold (e.g., 5% of total requests) over a 5-minute period.
*   **High Normalized RU Consumption:** Alert if `Normalized RU Consumption` consistently stays above 90% of provisioned throughput.
*   **High Latency:** Alert if `Avg. Latency` for reads or writes exceeds an acceptable threshold (e.g., 20ms) for a sustained period.
*   **Data Size Growth:** Alert if `Data Size` grows unexpectedly fast.
These alerts can trigger various actions, such as sending emails, SMS messages, pushing to a webhook, or even triggering an Azure Function to automatically scale throughput (though this requires careful implementation).

Finally, **Azure Dashboards** provide a customizable, unified view of your monitoring data. You can pin charts from metric explorer, KQL query results, and alert status to a single dashboard, giving you an at-a-glance overview of your Cosmos DB health. This is particularly useful for operations teams or for quickly assessing the status of multiple Cosmos DB resources. By combining these tools, you can establish a robust monitoring strategy that ensures the optimal performance and reliability of your Azure Cosmos DB solutions.

#### Key concepts
*   **Azure Monitor:** A comprehensive monitoring solution for collecting, analyzing, and acting on telemetry data from Azure resources.
*   **Metrics:** Numerical values collected at regular intervals, such as `Total Request Units`, `Throttled Requests`, `Avg. Latency`.
*   **Diagnostic Settings:** Configuration that specifies where to send platform logs and metrics (e.g., Log Analytics, Storage Account, Event Hubs).
*   **Log Analytics Workspace:** A service in Azure Monitor that collects and aggregates log data from various sources, enabling querying with KQL.
*   **Kusto Query Language (KQL):** A powerful query language used in Log Analytics for analyzing and visualizing data.
*   **Alert Rules:** Configurable conditions in Azure Monitor that trigger notifications or actions when specific metrics or log events occur.
*   **Azure Dashboards:** Customizable portals in Azure for visualizing monitoring data from various sources in a unified view.
*   **Throttled Requests (HTTP 429):** A metric indicating requests that were rejected due to exceeding provisioned throughput.

#### Hands-on activity
**Activity: Configure Diagnostic Settings and Create a Throttling Alert**

**Scenario:** You want to proactively monitor your Cosmos DB container for throttling events and receive notifications if they occur.

**Instructions:**
1.  **Prerequisites:** Ensure you have an Azure Cosmos DB account and at least one container (e.g., `Products` from previous activities). Also, create an Azure Log Analytics workspace if you don't have one.
2.  **Configure Diagnostic Settings:**
    *   Navigate to your Cosmos DB account in the Azure Portal.
    *   Under "Monitoring," select "Diagnostic settings."
    *   Click "+ Add diagnostic setting."
    *   Give it a name (e.g., `CosmosDB-Prod-Monitoring`).
    *   Select "Send to Log Analytics workspace." Choose your Log Analytics workspace.
    *   Under "Logs," select `DataPlaneRequests` and `QueryRuntimeStatistics`.
    *   Under "Metrics," select `AllMetrics`.
    *   Save the diagnostic setting.
3.  **Generate Throttling:** Intentionally cause throttling on your container. You can do this by:
    *   Temporarily reducing your container's provisioned RU/s to a very low value (e.g., 400 RU/s).
    *   Running a high-volume write or query script that exceeds this low RU/s for a sustained period.
    *   *Safety Note: Remember to revert your RU/s after the activity to avoid unexpected costs or performance impact on actual applications.*
4.  **Verify Logs in Log Analytics:**
    *   Go to your Log Analytics workspace in the Azure Portal.
    *   Select "Logs."
    *   Run a KQL query to check for `httpStatusCode_d == 429` in the `AzureDiagnostics` table for your Cosmos DB account.
    ```kusto
    AzureDiagnostics
    | where ResourceProvider == "MICROSOFT.DOCUMENTDB"
    | where Category == "DataPlaneRequests"
    | where httpStatusCode_d == 429
    | project TimeGenerated, Resource, databaseName_s, collectionName_s, requestCharge_s, clientIpAddress_s
    | order by TimeGenerated desc
    ```
    You should see entries for throttled requests.
5.  **Create an Alert Rule:**
    *   Navigate back to your Cosmos DB account in the Azure Portal.
    *   Under "Monitoring," select "Alerts."
    *   Click "+ Create" -> "Alert rule."
    *   **Condition:** Select "Custom log search." Use the KQL query from step 4. Set "Threshold" to `Greater than 0` and "Period" to `5 minutes` (meaning if any 429 occurs in 5 mins).
    *   **Actions:** Create a new action group to send an email notification to yourself.
    *   **Details:** Give the alert a name (e.g., `CosmosDB-Throttling-Alert`) and severity.
    *   Save the alert rule.
6.  **Reflect:** How quickly did the alert trigger after you generated throttling? How would this help in a production environment?

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB application users are reporting slow response times, but you are not seeing any `Throttled Requests` (HTTP 429) in Azure Monitor. Which of the following metrics would you investigate next to understand the potential cause of the latency?
    A) `Data Size`
    B) `Index Size`
    C) `Avg. Latency` (for reads and writes)
    D) `Normalized RU Consumption`

    **Correct Answer:** C) `Avg. Latency` (for reads and writes)
    **Explanation:** While `Normalized RU Consumption` (D) can indicate you're nearing capacity, the most direct metric for slow response times is `Avg. Latency`. If `Avg. Latency` is high even without throttling, it suggests other issues like inefficient queries, network latency, or client-side processing delays. `Data Size` and `Index Size` (A and B) are storage-related and less directly indicative of immediate performance issues.

2.  **Question:** You want to analyze historical Cosmos DB query performance, including the RU cost and duration of specific queries, and identify any long-running or high-cost queries. Which Azure Monitor destination and query language would be most suitable for this task?
    A) Send metrics to a Storage Account and use Azure CLI to analyze.
    B) Send logs to Event Hubs and use Azure Stream Analytics.
    C) Send diagnostic logs to a Log Analytics workspace and use Kusto Query Language (KQL).
    D) View real-time metrics in the Azure Portal's Metrics Explorer.

    **Correct Answer:** C) Send diagnostic logs to a Log Analytics workspace and use Kusto Query Language (KQL).
    **Explanation:** Sending diagnostic logs (specifically `QueryRuntimeStatistics`) to a Log Analytics workspace allows for detailed, historical analysis of query performance. KQL is specifically designed for querying and analyzing this type of log data, enabling you to filter by query text, RU cost, duration, and other parameters to identify performance bottlenecks. Options A and B are less direct for interactive query analysis, and D provides real-time aggregated metrics but lacks the granular detail of individual query logs.

#### AI generation note
Create a 10-minute interactive lab walkthrough video. Start in the Azure Portal, showing how to navigate to Azure Monitor metrics for a Cosmos DB account, highlighting `Total Request Units`, `Throttled Requests`, and `Avg. Latency` charts. Then, demonstrate configuring diagnostic settings to send `DataPlaneRequests` and `AllMetrics` to a Log Analytics workspace. Switch to Log Analytics, write and execute a KQL query to find throttled requests, explaining each part of the query. Finally, guide the learner through creating an alert rule based on `Throttled Requests` metric, showing how to configure the condition and action group for email notification. Include clear step-by-step instructions and visual cues.

### Chapter 5.5 — Troubleshooting and Best Practices for Performance

#### Learning objectives
*   Diagnose and resolve common performance issues such as throttling, high latency, and inefficient queries.
*   Implement client-side SDK best practices for connection management and retry policies.
*   Apply capacity planning techniques to anticipate and provision for future workload needs.
*   Understand and mitigate common data modeling anti-patterns that lead to performance bottlenecks.
*   Summarize a comprehensive set of best practices for building high-performance Azure Cosmos DB applications.

#### Detailed lesson content
You've learned how to optimize RUs, indexing, and data operations, and how to monitor your Cosmos DB solutions. Now, it's time to put it all together by focusing on troubleshooting common performance issues and adopting a holistic set of best practices. Even with careful design, problems can arise, and knowing how to diagnose and fix them quickly is a crucial skill for any Cosmos DB developer.

The most frequent performance issue you'll encounter is **throttling**, indicated by HTTP 429 errors. As we discussed, this means you've exceeded your provisioned RU/s. The first step is to confirm this using Azure Monitor's `Throttled Requests` metric. If it's a consistent problem, consider increasing your provisioned throughput or switching to autoscale. If it's intermittent, review your application's request patterns. Are there sudden bursts? Can you implement client-side retry logic with exponential backoff? The Cosmos DB SDKs already include robust retry mechanisms for 429s, but ensuring your application correctly handles these retries without blocking is important. Another cause could be a "hot partition," where one logical partition receives a disproportionate amount of requests. If you identify a hot partition (often visible in `Normalized RU Consumption` or `PartitionKeyStatistics` in Log Analytics), you might need to re-evaluate your partition key strategy to distribute data and requests more evenly.

**High latency** can stem from several sources. Beyond throttling, it could be due to inefficient queries (e.g., full scans, lack of proper indexes), network latency between your application and the Cosmos DB region, or client-side processing overhead. Use Azure Monitor's `Avg. Latency` metrics to pinpoint if the latency is on the database side. If queries are the culprit, use the `RequestCharge` and query execution metrics (available in `QueryRuntimeStatistics` via Log Analytics) to identify expensive queries and then optimize them with better indexing or query structure. For network latency, ensure your application is deployed in the same Azure region as your Cosmos DB account. If your application is geographically distributed, consider enabling multi-region writes for Cosmos DB and configuring your application to connect to the nearest replica.

**Client-side SDK best practices** are paramount for performance. Always use a **singleton instance of `CosmosClient`** throughout the lifetime of your application. Creating and disposing `CosmosClient` instances frequently is very expensive in terms of resource utilization and connection overhead. The `CosmosClient` is thread-safe, so a single instance can be shared across multiple threads. Configure the client with appropriate connection modes (Direct mode is generally recommended for optimal performance, especially for low-latency scenarios, while Gateway mode is better for firewalled environments or when direct TCP is not feasible). Ensure your application's retry policy for transient errors (like 429s) is well-configured; the default SDK retries are usually sufficient but can be customized.

```csharp
// Example: Singleton CosmosClient instance
public class CosmosDbService
{
    private static CosmosClient _cosmosClient;
    private static readonly string EndpointUri = "YOUR_COSMOS_DB_ENDPOINT";
    private static readonly string PrimaryKey = "YOUR_COSMOS_DB_PRIMARY_KEY";

    public static CosmosClient Client
    {
        get
        {
            if (_cosmosClient == null)
            {
                _cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions()
                {
                    ConnectionMode = ConnectionMode.Direct, // Or Gateway
                    // Add other options like retry policy, serializer options
                });
            }
            return _cosmosClient;
        }
    }
}
// Usage: var container = CosmosDbService.Client.GetContainer("databaseId", "containerId");
```
**Capacity planning** is essential for anticipating future needs. Based on your application's expected growth, data volume, and query patterns, you should project your future RU consumption and storage requirements. Use historical data from Azure Monitor to understand trends. Consider different throughput models: autoscale is excellent for variable workloads, while provisioned throughput offers predictable performance for consistent high-load scenarios. Regular reviews of your capacity plan (e.g., quarterly) are recommended, adjusting RUs as your application evolves.

**Common data modeling anti-patterns** can lead to significant performance bottlenecks:
*   **Hot partitions:** As mentioned, a partition key that leads to all requests hitting a single logical partition. Solution: Choose a partition key with high cardinality and even distribution of access patterns.
*   **Chatty operations:** Performing many small, individual operations instead of batching them. Solution: Use transactional batch or bulk executor.
*   **Over-indexing:** Indexing every property, leading to high write RUs and storage. Solution: Customize indexing policies.
*   **Under-indexing:** Not indexing properties used in frequent query filters or `ORDER BY` clauses, leading to full scans and high read RUs. Solution: Add necessary indexes, including composite indexes.
*   **Large documents:** While Cosmos DB supports large documents, very large items (e.g., >1MB) can increase RU cost and make operations less efficient. Consider breaking down large documents or storing blobs in Azure Blob Storage and referencing them.

Finally, a comprehensive set of **best practices** for high-performance Cosmos DB applications includes:
1.  **Choose an effective partition key:** High cardinality, even distribution of RUs and storage.
2.  **Optimize indexing policies:** Only index what you need for queries, add composite indexes for multi-field sorts.
3.  **Use `CosmosClient` as a singleton:** Avoid frequent client instantiation.
4.  **Co-locate application and database:** Deploy your application in the same Azure region as Cosmos DB.
5.  **Use transactional batch for atomic operations:** Group operations within a logical partition.
6.  **Leverage bulk executor for high-throughput ingestion:** Efficiently load large datasets.
7.  **Monitor aggressively:** Use Azure Monitor, Log Analytics, and alerts.
8.  **Design efficient queries:** Include partition keys, project only necessary fields, avoid `SELECT *`.
9.  **Implement optimistic concurrency:** Use ETags to prevent data conflicts.
10. **Plan capacity:** Regularly review and adjust provisioned throughput.

By adhering to these principles and being prepared to troubleshoot, you can build and maintain highly performant and cost-effective Azure Cosmos DB solutions.

#### Key concepts
*   **Throttling (HTTP 429):** Occurs when request rate exceeds provisioned throughput, leading to rejected requests.
*   **Hot Partition:** A logical partition that receives a disproportionately high volume of requests, causing performance bottlenecks.
*   **Client-side SDK Best Practices:** Recommendations for using the Cosmos DB SDK effectively, such as singleton `CosmosClient` and connection mode configuration.
*   **`CosmosClient` Singleton:** Using a single instance of `CosmosClient` throughout an application's lifetime to optimize connection management.
*   **Connection Mode:** Configuration for `CosmosClient` (Direct or Gateway) affecting how the client connects to Cosmos DB endpoints.
*   **Capacity Planning:** The process of estimating and provisioning the necessary throughput and storage to meet future application demands.
*   **Data Modeling Anti-patterns:** Suboptimal data modeling choices that lead to performance issues (e.g., hot partitions, over-indexing).
*   **Exponential Backoff:** A retry strategy where the delay between retries increases exponentially, commonly used for transient errors like throttling.

#### Hands-on activity
**Activity: Simulate and Resolve a Hot Partition Scenario**

**Scenario:** You have a `Telemetry` container where all devices report their status using a common `deviceType` as the partition key. This leads to a hot partition when many devices of that type report concurrently.

**Instructions:**
1.  **Set up:** Create a new Cosmos DB SQL API container named `Telemetry`. Initially, use `/deviceType` as the partition key. Set its RU/s to a low value (e.g., 1000 RU/s).
2.  **Simulate Hot Partition:** Write a C# console application that rapidly inserts 1000 documents into the `Telemetry` container. All documents should have `deviceType: "SensorA"` and a unique `id`.
    ```csharp
    // Sample document
    {
        "id": "sensorA_reading_123",
        "deviceType": "SensorA",
        "timestamp": "...",
        "value": 42.5
    }
    ```
    Run this application and observe the `RequestCharge` and any `CosmosException` (429 errors). Monitor `Throttled Requests` in Azure Monitor for your container. You should see significant throttling.
3.  **Analyze Hot Partition:**
    *   In Azure Monitor, go to your Cosmos DB account.
    *   Select "Insights" -> "Performance" -> "Partition Key Heat Map".
    *   Identify the hot partition (e.g., `SensorA`).
4.  **Resolve Hot Partition (Data Modeling Change):**
    *   **Option 1 (New Container):** Create a *new* container named `TelemetryOptimized` with a better partition key. Instead of just `deviceType`, use a composite partition key or a synthetic key that combines `deviceType` with a more granular identifier, like `deviceType_deviceId`. For simplicity, let's use `deviceId` as the new partition key, assuming `deviceId` is unique per device.
    *   **Option 2 (Migrate Data):** If you were in a real scenario, you'd migrate data from `Telemetry` to `TelemetryOptimized` using the change feed or bulk executor. For this exercise, just create the new container.
5.  **Re-Simulate with Optimized Partition Key:** Modify your C# application to insert the 1000 documents into `TelemetryOptimized`. If using `deviceId` as partition key, ensure each document has a unique `deviceId` (e.g., `SensorA_001`, `SensorA_002`, etc., for `deviceType: "SensorA"`).
    ```csharp
    // Sample document for optimized container
    {
        "id": "sensorA_reading_123",
        "deviceType": "SensorA",
        "deviceId": "SensorA_001", // New partition key
        "timestamp": "...",
        "value": 42.5
    }
    ```
    Run the application again. Observe `RequestCharge` and `Throttled Requests`.
6.  **Reflect:** Compare the throttling behavior and RU consumption between the original and optimized partition key strategies. Explain why the change improved performance.

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB application is experiencing high latency and frequent 429 errors. Upon reviewing Azure Monitor, you notice that `Normalized RU Consumption` is consistently at 100% for one specific logical partition key value, while other partitions are underutilized. What is the MOST effective immediate action to mitigate this issue?
    A) Increase the overall provisioned throughput for the container.
    B) Implement client-side exponential backoff and retry logic.
    C) Re-evaluate your partition key strategy to distribute data more evenly.
    D) Optimize all queries to reduce their individual RU cost.

    **Correct Answer:** C) Re-evaluate your partition key strategy to distribute data more evenly.
    **Explanation:** The key indicator here is that `Normalized RU Consumption` is 100% *for one specific logical partition*, while others are underutilized. This clearly points to a "hot partition." Increasing overall throughput (A) might temporarily alleviate the issue but is inefficient and costly as other partitions don't need the extra RUs. Implementing retry logic (B) only handles the symptom, not the root cause. Optimizing queries (D) is always good but won't solve a fundamental hot partition issue if the requests are still concentrated on one key. The most effective long-term solution is to change the partition key to one that distributes requests more evenly across physical partitions.

2.  **Question:** Which of the following is considered a best practice for managing `CosmosClient` instances in a .NET application to ensure optimal performance and resource utilization?
    A) Create a new `CosmosClient` instance for every database operation.
    B) Create a new `CosmosClient` instance for each thread that interacts with Cosmos DB.
    C) Create a single `CosmosClient` instance and reuse it throughout the application's lifetime.
    D) Dispose of the `CosmosClient` instance immediately after each operation to release resources.

    **Correct Answer:** C) Create a single `CosmosClient` instance and reuse it throughout the application's lifetime.
    **Explanation:** `CosmosClient` is designed to be a long-lived, thread-safe object. Creating and disposing it frequently (A, B, D) incurs significant overhead due to connection establishment and resource allocation. Reusing a single singleton instance ensures efficient connection management, reduces resource consumption, and improves overall application performance.

#### AI generation note
Create a 15-minute live coding video. Begin by demonstrating a `CosmosClient` being created per operation, highlighting the performance overhead (e.g., using a stopwatch to show slower execution). Refactor the code to use a singleton `CosmosClient` instance, showing the performance improvement. Then, transition to a scenario where a hot partition is simulated (e.g., by inserting many items with the same partition key and low RU/s, showing 429 errors). Guide the learner to the Azure Monitor "Partition Key Heat Map" to visually identify the hot partition. Discuss how to choose a better partition key and then demonstrate creating a new container with an improved partition key, showing how the new inserts avoid throttling. End with a summary slide of the top 5 performance best practices.

---

## Module 6: Maintaining and Securing Azure Cosmos DB Solutions

**Goal:** Equip learners with the knowledge and practical skills to effectively maintain, monitor, troubleshoot, and secure Azure Cosmos DB deployments, ensuring high availability, performance, and data integrity in production environments.

### Chapter 6.1 — Monitoring and Alerting for Azure Cosmos DB

#### Learning objectives
*   Understand the key metrics and logs available for Azure Cosmos DB in Azure Monitor.
*   Configure diagnostic settings to send Cosmos DB logs and metrics to various destinations.
*   Create effective alert rules based on critical Cosmos DB performance and availability metrics.
*   Interpret monitoring data to identify potential performance bottlenecks or operational issues.
*   Implement best practices for proactive monitoring to ensure optimal Cosmos DB health.

#### Detailed lesson content
Maintaining a high-performing and available Azure Cosmos DB solution in production requires robust monitoring and alerting capabilities. Azure Monitor is the native solution that provides a comprehensive view of your Cosmos DB accounts, offering insights into performance, availability, and usage. It collects metric data, which are numerical values that describe some aspect of a system at a particular point in time, and log data, which are event records captured by the system. Understanding how to leverage these effectively is paramount for any developer or administrator working with Cosmos DB.

Metrics are crucial for real-time performance tracking. For Cosmos DB, Azure Monitor provides a rich set of metrics such as "Total Request Units," "Normalized RU Consumption," "Data Size," "Index Size," "Throttled Requests," "Availability," "Latency," and "Connection Attempts." These metrics can be viewed in the Azure portal's Metrics explorer, allowing you to visualize trends, set time ranges, and split data by dimensions like database name or collection name. For instance, a sudden spike in "Throttled Requests" indicates that your provisioned throughput (RUs) might be insufficient for the current workload, or that a particular query is consuming an excessive amount of RUs. Similarly, an increase in "Latency" could signal network issues or hot partitions within your container. It's important to understand the difference between client-side latency (measured by your application) and server-side latency (measured by Cosmos DB), as issues could originate from either side.

Beyond real-time metrics, diagnostic logs provide detailed operational data that can be invaluable for post-mortem analysis and auditing. Cosmos DB offers several categories of diagnostic logs, including "DataPlaneRequests" (records every data plane operation like reads, writes, queries), "GremlinRequests," "MongoRequests," "CassandraRequests," "TableRequests," "and "QueryRuntimeStatistics" (detailed statistics about query execution). To enable these logs, you must configure diagnostic settings for your Cosmos DB account. This involves selecting which log categories to send and specifying a destination: a Log Analytics workspace for advanced querying and analysis, an Azure Storage account for archiving, or an Azure Event Hub for streaming to external systems. For most operational monitoring and troubleshooting, sending logs to a Log Analytics workspace is the recommended approach, as it allows you to use Kusto Query Language (KQL) to perform powerful searches and aggregations on your log data. For example, you could query `AzureDiagnostics | where ResourceProvider == "MICROSOFT.DOCUMENTDB" and Category == "DataPlaneRequests" | summarize count() by OperationName_s` to see the distribution of operations.

Alerts are the proactive component of monitoring. Instead of constantly watching dashboards, you can configure Azure Monitor to notify you when specific conditions are met based on your metrics or logs. For Cosmos DB, common alert scenarios include:
*   **High Throttled Requests:** Alert when "Throttled Requests" exceed a threshold (e.g., 5% of total requests) for a sustained period. This indicates potential performance degradation or RU under-provisioning.
*   **High Normalized RU Consumption:** Alert when "Normalized RU Consumption" consistently approaches 100%, indicating that your RUs are almost fully utilized and throttling is imminent.
*   **Low Availability:** Alert if "Availability" drops below a certain percentage, signaling potential service disruptions.
*   **High Latency:** Alert if "Server Side Latency" or "P90 Latency" exceeds acceptable thresholds.
*   **Data Size Growth:** Alert if "Data Size" grows unexpectedly fast, which could indicate runaway data ingestion or inefficient data retention policies.
*   **Indexing Progress:** For large collections, monitoring "Index Transformation Progress" can be useful during index policy changes.

When creating an alert rule, you define the scope (your Cosmos DB account), the condition (which metric, threshold, aggregation type, and frequency), the action group (who gets notified via email, SMS, webhook, or Azure Function), and the alert details. It's a common mistake to set alert thresholds too aggressively, leading to alert fatigue, or too leniently, causing critical issues to be missed. Start with reasonable baselines and adjust as you understand your workload patterns better. Always test your alert rules to ensure they trigger correctly and notify the right people. Also consider using action groups to automate responses, such as scaling RUs up or down using an Azure Function in response to throttling alerts. This moves from reactive alerting to proactive auto-scaling.

Finally, remember the importance of a monitoring strategy that includes both application-level and database-level insights. While Azure Monitor provides excellent database-level visibility, your application logs should correlate with Cosmos DB metrics to give a complete picture of performance and user experience. For instance, if application response times are high, checking Cosmos DB latency metrics can help determine if the database is the bottleneck or if the issue lies elsewhere in the application stack. Regularly review your monitoring dashboards and alert configurations, especially after significant changes to your application or Cosmos DB schema, to ensure they remain relevant and effective.

#### Key concepts
*   **Azure Monitor:** A comprehensive monitoring solution in Azure that collects, analyzes, and acts on telemetry data from your cloud and on-premises environments.
*   **Metrics:** Numerical values that describe a system aspect at a point in time (e.g., RU consumption, latency, throttled requests).
*   **Logs:** Event records captured by a system, providing detailed operational data (e.g., DataPlaneRequests, QueryRuntimeStatistics).
*   **Diagnostic Settings:** Configuration to send Cosmos DB logs and metrics to destinations like Log Analytics, Storage Accounts, or Event Hubs.
*   **Log Analytics Workspace:** A service in Azure Monitor that collects and aggregates log data from various sources, enabling powerful querying with KQL.
*   **Kusto Query Language (KQL):** A powerful query language used in Azure Monitor Log Analytics for searching, filtering, and analyzing log data.
*   **Alert Rules:** Automated notifications triggered when specific conditions based on metrics or logs are met, indicating potential issues.
*   **Action Groups:** Collections of notification preferences and actions that can be triggered by an Azure Monitor alert.
*   **Throttled Requests:** Requests to Cosmos DB that are rejected because the provisioned throughput (RUs) has been exceeded.
*   **Normalized RU Consumption:** A metric indicating the percentage of provisioned RUs being utilized.

#### Hands-on activity
**Activity: Configure Diagnostic Settings and Create a Throttling Alert**

1.  **Enable Diagnostic Settings:**
    *   Navigate to your Azure Cosmos DB account in the Azure portal.
    *   Under the "Monitoring" section, select "Diagnostic settings."
    *   Click "+ Add diagnostic setting."
    *   Give it a name (e.g., `cosmosdb-logs-metrics`).
    *   Under "Logs," select "DataPlaneRequests" and "QueryRuntimeStatistics."
    *   Under "Metrics," select "AllMetrics."
    *   Choose "Send to Log Analytics workspace" and select an existing workspace or create a new one.
    *   Click "Save."

2.  **Generate Throttled Requests (Simulated):**
    *   Open Azure Cloud Shell (Bash).
    *   Install the Azure Cosmos DB .NET SDK sample application (or use a simple Python script).
    *   **Python example (requires `azure-cosmos` package):**
        ```python
        import os
        from azure.cosmos import CosmosClient, PartitionKey
        import time

        # Replace with your Cosmos DB account details
        ENDPOINT = "YOUR_COSMOS_DB_ENDPOINT"
        KEY = "YOUR_COSMOS_DB_KEY"
        DATABASE_NAME = "MyDatabase"
        CONTAINER_NAME = "MyContainer"
        PARTITION_KEY_PATH = "/id" # Or your actual partition key path

        client = CosmosClient(ENDPOINT, credential=KEY)
        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        print(f"Attempting to create {CONTAINER_NAME} if it doesn't exist...")
        try:
            database.create_container(id=CONTAINER_NAME, partition_key=PartitionKey(path=PARTITION_KEY_PATH), offer_throughput=400) # Start with low RUs
            print(f"Container {CONTAINER_NAME} created with 400 RUs.")
        except Exception as e:
            if "Conflict" in str(e):
                print(f"Container {CONTAINER_NAME} already exists.")
            else:
                raise e

        print("Starting high-volume writes to trigger throttling...")
        for i in range(500): # Adjust count to ensure throttling
            try:
                item = {"id": f"item{i}", "name": f"Product {i}", "category": "Electronics", "price": i * 10}
                container.create_item(body=item)
                print(f"Inserted item {i}")
            except Exception as e:
                print(f"Error inserting item {i}: {e}")
            time.sleep(0.01) # Small delay to avoid overwhelming immediately, but still trigger throttling
        print("Finished write operations.")
        ```
    *   Run this script against a Cosmos DB container with low RUs (e.g., 400 RU/s) to intentionally cause throttling.

3.  **Create an Alert Rule for Throttled Requests:**
    *   In the Azure portal, navigate to "Azure Monitor" -> "Alerts."
    *   Click "+ Create" -> "Alert rule."
    *   Under "Scope," select your Cosmos DB account.
    *   Under "Condition," click "Add condition."
    *   Search for "Throttled Requests" metric.
    *   Configure the condition:
        *   **Aggregation type:** Total
        *   **Operator:** Greater than
        *   **Threshold value:** 0 (or a small number like 10)
        *   **Unit:** Count
        *   **Aggregation granularity (Period):** 5 minutes
        *   **Frequency of evaluation:** 1 minute
    *   Under "Actions," click "Add action groups." Create a new action group (e.g., `CosmosDB_Alerts`) and configure email notifications to your address.
    *   Under "Details," give the alert a name (e.g., `HighThrottledRequestsAlert`) and a description.
    *   Click "Review + create" and then "Create."
    *   Wait for the alert to trigger after running the high-volume write script.

#### Assessment idea
1.  **Question:** Your Azure Cosmos DB application is experiencing intermittent performance degradation, with users reporting slow response times. You check Azure Monitor and observe a consistent pattern of high "Normalized RU Consumption" (above 90%) and occasional spikes in "Throttled Requests" for your main container. What is the most likely cause of this issue, and what immediate action should you consider?
    *   **Correct Answer:** The most likely cause is that your provisioned throughput (Request Units per second, RUs) for the container is insufficient to handle the current workload. High "Normalized RU Consumption" indicates that the RUs are almost fully utilized, and "Throttled Requests" confirm that Cosmos DB is rejecting requests because the throughput limit has been reached. The immediate action to consider is to scale up the provisioned throughput (RUs) for the affected container or database. This can be done manually via the Azure portal or programmatically using the SDK or Azure CLI/PowerShell.

2.  **Question:** You need to analyze all data plane operations (reads, writes, queries) performed on your Azure Cosmos DB account over the last 24 hours for auditing purposes. Which diagnostic log category should you enable, and where would you typically send these logs for efficient querying and analysis?
    *   **Correct Answer:** To analyze all data plane operations, you should enable the "DataPlaneRequests" diagnostic log category. For efficient querying and analysis, these logs should typically be sent to an Azure Log Analytics workspace. Once in Log Analytics, you can use Kusto Query Language (KQL) to filter, aggregate, and search the log data, for example, to identify specific operations, users, or request patterns.

#### AI generation note
Create a 12-minute interactive video tutorial. Begin by demonstrating how to navigate to Azure Cosmos DB diagnostic settings in the Azure portal and configure them to send "DataPlaneRequests" and "AllMetrics" to a Log Analytics workspace. Then, show a live coding demo using a Python script to perform high-volume write operations against a low-RU Cosmos DB container, intentionally causing throttling. Use a split-screen view showing the Python script running on the left and the Azure portal's Metrics explorer on the right, highlighting "Throttled Requests" and "Normalized RU Consumption" metrics spiking. Conclude by walking through the process of creating an Azure Monitor alert rule for "Throttled Requests" and simulating its trigger. Include an interactive mini-quiz at the end asking about the purpose of KQL in Log Analytics.

### Chapter 6.2 — Troubleshooting Performance and Availability Issues

#### Learning objectives
*   Identify common performance bottlenecks in Azure Cosmos DB applications, such as hot partitions and inefficient queries.
*   Utilize Azure Monitor metrics and logs to diagnose performance and availability issues.
*   Leverage client-side SDK diagnostics to gain insights into request execution details.
*   Understand and troubleshoot issues related to Request Units (RUs), indexing, and data modeling.
*   Apply best practices for resolving common Cosmos DB performance and availability challenges.

#### Detailed lesson content
Troubleshooting performance and availability issues in Azure Cosmos DB is a critical skill for any developer working with the platform. While Cosmos DB is designed for high performance and availability, misconfigurations, inefficient application code, or unexpected workload patterns can lead to degraded experiences. The first step in troubleshooting is always to gather information, and Azure Monitor, as discussed in the previous chapter, is your primary tool for this. However, understanding *what* to look for in the metrics and logs is key.

One of the most common performance issues in Cosmos DB is **hot partitions**. A hot partition occurs when a disproportionate amount of data or request volume is directed to a single logical partition key value, or a small set of values, leading to an uneven distribution of workload across your physical partitions. Since throughput is distributed evenly across physical partitions, a hot partition means that one physical partition is being hammered while others are underutilized. This can result in throttling for requests targeting that hot partition, even if your overall provisioned RUs for the container seem sufficient. To detect hot partitions, you should monitor the "Partition Key Range ID Consumed RU/sec" metric in Azure Monitor, splitting by `PartitionKeyRangeId`. If one range ID consistently shows much higher RU consumption than others, you likely have a hot partition. The solution often involves re-evaluating your partition key strategy to ensure an even distribution of data and requests. This might mean choosing a more granular partition key or using a synthetic partition key.

Another frequent culprit for performance problems is **inefficient queries**. A query that scans a large portion of the data or performs cross-partition operations without an appropriate filter can consume a significant number of RUs and exhibit high latency. Cosmos DB's query engine is highly optimized, but it relies on effective indexing. If a query isn't using an index, it will result in a full scan, which is very costly. To diagnose query performance, enable "QueryRuntimeStatistics" in your diagnostic settings and send them to Log Analytics. You can then query these logs to find slow queries, queries that perform full scans, or queries with high RU charges. For example, `AzureDiagnostics | where Category == "QueryRuntimeStatistics" | order by TotalRequestUnits desc` will show you the most expensive queries. The client-side SDK also provides `RequestCharge` and `ActivityId` in the response, which are useful for correlating with server-side logs. To fix inefficient queries, ensure your indexing policy covers the fields used in `WHERE` clauses, `ORDER BY` clauses, and `GROUP BY` clauses. Avoid `SELECT *` where possible, and prefer point reads by ID and partition key over queries when you know the exact item.

**Throttling** (status code 429) is a direct indicator that your application is attempting to consume more Request Units than you have provisioned. While scaling RUs up is the immediate fix, it's crucial to understand *why* throttling is happening. Is it a temporary spike in traffic? Is it a consistently increasing workload? Or is it due to inefficient operations? Azure Monitor's "Throttled Requests" metric, broken down by operation type, can help identify the problematic operations. The Cosmos DB SDKs automatically retry throttled requests, but excessive throttling can still lead to increased latency and timeouts. Implement proper error handling and back-off strategies in your application code for throttled requests if the default SDK behavior isn't sufficient.

**Client-side diagnostics** are invaluable for understanding what happens between your application and Cosmos DB. The SDKs provide detailed diagnostic information for each request, including network latency, retries, request charge, and server-side latency. For example, in the .NET SDK, you can access `Response.Diagnostics` which provides a JSON string with a wealth of information. This can help differentiate between network issues (high client-side latency, low server-side latency) and database-side issues (high server-side latency). Logging these diagnostics in your application can be extremely helpful for debugging specific problematic requests.

```csharp
// C# .NET SDK example for logging diagnostics
try
{
    ItemResponse<MyItem> response = await container.CreateItemAsync(item, new PartitionKey(item.Id));
    Console.WriteLine($"Item created. Request Charge: {response.RequestCharge} RUs");
    Console.WriteLine($"Diagnostics: {response.Diagnostics.ToString()}");
}
catch (CosmosException ex)
{
    Console.WriteLine($"Error creating item: {ex.StatusCode}. Diagnostics: {ex.Diagnostics.ToString()}");
}
```

**Common mistakes** often include:
*   **Choosing a poor partition key:** This leads to hot partitions and inefficient scaling. Always aim for high cardinality and even distribution.
*   **Over-indexing or under-indexing:** Over-indexing increases write RU cost and storage. Under-indexing leads to expensive queries. Find the right balance.
*   **Not handling retries for throttled requests:** While SDKs do this, understanding the implications and potential for timeouts is important.
*   **Ignoring client-side latency:** Assuming all latency is server-side can lead to misdiagnosis.
*   **Not monitoring regularly:** Proactive monitoring can catch issues before they impact users.

For **availability issues**, Cosmos DB offers high availability by design, with automatic failovers within a region and across regions if configured for multi-region writes. If you experience availability issues, check the Azure status page for regional outages. For multi-region accounts, ensure your application is configured to connect to the nearest available region and handle potential failovers gracefully. The SDKs automatically handle regional failovers, but your application might need to be aware of the current preferred region.

Always remember to build progressively. Start by identifying the symptoms using Azure Monitor. Then, drill down into specific metrics and logs. If necessary, enable client-side diagnostics to pinpoint the exact request causing trouble. Finally, apply the appropriate fix, whether it's adjusting RUs, optimizing queries, or refining your data model.

#### Key concepts
*   **Hot Partition:** An issue where a single logical partition key value or a small set of values receives a disproportionately high volume of requests or stores a large amount of data, leading to performance bottlenecks.
*   **Inefficient Queries:** Queries that consume excessive Request Units (RUs) due to full scans, lack of proper indexing, or cross-partition operations without appropriate filters.
*   **Throttling (429 Status Code):** When Cosmos DB rejects requests because the provisioned throughput (RUs) for a container or database has been exceeded.
*   **Client-side Diagnostics:** Detailed information provided by the Cosmos DB SDKs for each request, including network latency, retries, request charge, and server-side latency, useful for debugging.
*   **Request Charge:** The cost in Request Units (RUs) for a specific operation or query in Cosmos DB.
*   **Indexing Policy:** The configuration that defines how items in a container are indexed, crucial for query performance.
*   **Partition Key Range ID Consumed RU/sec:** An Azure Monitor metric that helps identify hot partitions by showing RU consumption per physical partition.
*   **QueryRuntimeStatistics:** A diagnostic log category that provides detailed statistics about query execution, including RU cost and index usage.

#### Hands-on activity
**Activity: Diagnose a Hot Partition and Optimize a Query**

1.  **Simulate a Hot Partition:**
    *   Create a new Azure Cosmos DB container with a low throughput (e.g., 400 RU/s).
    *   Choose a partition key that is prone to hot-spotting, for example, `/category` where most items fall into a single category.
    *   **Python example (requires `azure-cosmos` package):**
        ```python
        import os
        from azure.cosmos import CosmosClient, PartitionKey
        import time

        ENDPOINT = "YOUR_COSMOS_DB_ENDPOINT"
        KEY = "YOUR_COSMOS_DB_KEY"
        DATABASE_NAME = "MyTroubleDatabase"
        CONTAINER_NAME = "HotPartitionContainer"
        PARTITION_KEY_PATH = "/category" # Intentionally bad partition key for this scenario

        client = CosmosClient(ENDPOINT, credential=KEY)
        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        try:
            database.create_container(id=CONTAINER_NAME, partition_key=PartitionKey(path=PARTITION_KEY_PATH), offer_throughput=400)
            print(f"Container {CONTAINER_NAME} created with 400 RUs.")
        except Exception as e:
            if "Conflict" in str(e):
                print(f"Container {CONTAINER_NAME} already exists.")
            else:
                raise e

        print("Writing items to create a hot partition...")
        for i in range(1000):
            item = {"id": f"item{i}", "name": f"Product {i}", "category": "Electronics", "price": i * 10} # Most items in "Electronics"
            if i % 10 == 0: # Some items in other categories
                item["category"] = f"Category{i % 5}"
            try:
                container.create_item(body=item)
            except Exception as e:
                print(f"Error inserting item {i}: {e}")
            time.sleep(0.005) # Small delay
        print("Finished writing items.")

        print("Performing a query that targets the hot partition...")
        query = "SELECT * FROM c WHERE c.category = 'Electronics'"
        for _ in range(50): # Run multiple times to generate load
            try:
                items = list(container.query_items(query, enable_cross_partition_query=True))
                # print(f"Query returned {len(items)} items. Request Charge: {container.client_connection.last_response_headers['x-ms-request-charge']} RUs")
            except Exception as e:
                print(f"Error querying: {e}")
            time.sleep(0.05)
        print("Finished querying.")
        ```
    *   Run this script.

2.  **Diagnose with Azure Monitor:**
    *   Go to your Cosmos DB account in the Azure portal.
    *   Navigate to "Metrics."
    *   Select the "Total Request Units" metric.
    *   Apply splitting by "PartitionKeyRangeId." Observe if one `PartitionKeyRangeId` shows significantly higher RU consumption. This indicates a hot partition.

3.  **Optimize an Inefficient Query (Conceptual):**
    *   Consider the query `SELECT * FROM c WHERE c.price > 1000 ORDER BY c.name`.
    *   If `price` and `name` are not indexed, this query will be expensive.
    *   **Task:** Modify the indexing policy for your `HotPartitionContainer` to include composite indexes for `price` and `name` to support this query efficiently.
        ```json
        {
            "indexingMode": "consistent",
            "automatic": true,
            "includedPaths": [
                {
                    "path": "/*"
                }
            ],
            "excludedPaths": [
                {
                    "path": "/\"_etag\"/?"
                }
            ],
            "compositeIndexes": [
                [
                    {
                        "path": "/price",
                        "order": "ascending"
                    },
                    {
                        "path": "/name",
                        "order": "ascending"
                    }
                ]
            ]
        }
        ```
    *   Apply this indexing policy in the Azure portal under "Data Explorer" -> "Scale & Settings" -> "Indexing Policy." Note: Index transformations can take time for large datasets.

#### Assessment idea
1.  **Question:** Your Cosmos DB application is experiencing high latency and occasional 429 (throttling) errors, particularly for queries involving the `productCategory` field. You've confirmed that your overall provisioned RUs are adequate. Upon checking Azure Monitor, you see that the "Partition Key Range ID Consumed RU/sec" metric shows one specific Partition Key Range ID consuming disproportionately more RUs than others. What is the most probable root cause, and what is the recommended long-term solution?
    *   **Correct Answer:** The most probable root cause is a "hot partition." This occurs because the `productCategory` field, likely used as the partition key, is leading to an uneven distribution of data and requests, with a large number of requests targeting items within a single logical partition (e.g., "Electronics" category). Even if overall RUs are sufficient, the physical partition hosting this hot logical partition becomes overloaded. The recommended long-term solution is to re-evaluate and change your partition key strategy. You should choose a partition key with high cardinality and even distribution of values, such as a synthetic key combining `productCategory` with another high-cardinality attribute (e.g., `productCategory_productId`) or using a unique identifier if appropriate for your workload. This will distribute the workload more evenly across physical partitions.

2.  **Question:** A developer reports that a specific query, `SELECT c.id, c.name FROM c WHERE c.timestamp > '2023-01-01T00:00:00Z' ORDER BY c.timestamp`, is consistently taking a long time and consuming high RUs, even though `timestamp` is included in the default indexing policy. What diagnostic steps would you recommend to understand why this query is inefficient, and what potential optimization could be applied?
    *   **Correct Answer:**
        *   **Diagnostic Steps:**
            1.  **Check QueryRuntimeStatistics:** Ensure "QueryRuntimeStatistics" are enabled in diagnostic settings and query Log Analytics to see the `TotalRequestUnits` and `IndexUtilization` for this specific query. Look for `IndexUtilization` values close to 0 or indications of full scans.
            2.  **Use Client-side Diagnostics:** Capture the `Response.Diagnostics` from the SDK when executing this query. This will show the `RequestCharge`, `ActivityId`, and detailed server-side metrics, helping to confirm if the query is indeed expensive and if there are any network issues.
            3.  **Examine Indexing Policy:** Even if `timestamp` is included in the default indexing policy, the `ORDER BY c.timestamp` clause might require a specific composite index for optimal performance, especially if combined with other filters.
        *   **Potential Optimization:** The query involves both a range filter (`timestamp > ...`) and an `ORDER BY` clause on the same field. For optimal performance, a **composite index** on `/timestamp` with `order: "ascending"` is highly recommended. The default indexing policy might only have a single-field range index, which is good for filtering but not always for sorting efficiently when combined with a filter. Creating a composite index like `[{ "path": "/timestamp", "order": "ascending" }]` explicitly supports this pattern.

#### AI generation note
Create a 15-minute live coding demonstration. Start by showing the Azure Monitor metrics for a Cosmos DB container experiencing a hot partition (simulated by a Python script writing to a specific partition key). Guide learners on how to identify the hot partition using "PartitionKeyRangeId Consumed RU/sec." Then, introduce an inefficient query and demonstrate how to use client-side SDK diagnostics (e.g., `response.Diagnostics` in C# or `last_response_headers['x-ms-request-charge']` in Python) to measure its RU cost. Walk through modifying the container's indexing policy in the Azure portal to add a composite index that optimizes the query. Re-run the query and show the reduced RU charge and improved performance. Emphasize common mistakes like poor partition key choice. Include a reflection prompt asking learners to consider their own application's partition key strategy.

### Chapter 6.3 — Implementing Security for Azure Cosmos DB

#### Learning objectives
*   Understand the various security layers available for Azure Cosmos DB, including network security and access control.
*   Implement Role-Based Access Control (RBAC) to manage data plane access for users and applications.
*   Configure network security using Virtual Networks (VNets) and Private Endpoints to restrict access.
*   Utilize firewall rules to control access to Azure Cosmos DB from specific IP addresses.
*   Explain the role of data encryption at rest and in transit in Cosmos DB.

#### Detailed lesson content
Security is a paramount concern for any database, and Azure Cosmos DB provides a robust set of features to protect your data. Implementing a strong security posture involves multiple layers, from network isolation to fine-grained access control and data encryption. Understanding and correctly configuring these features is essential to prevent unauthorized access and maintain data integrity.

At the most fundamental level, **network security** controls who can connect to your Cosmos DB account. By default, Cosmos DB accounts are accessible from the internet, but you can restrict this access significantly. The primary mechanisms for network security are:
1.  **IP Firewall:** This allows you to specify a list of IP addresses or IP address ranges that are permitted to connect to your Cosmos DB account. Any connection attempt from an IP address not on this list will be rejected. This is useful for restricting access to known application servers, on-premises networks, or developer workstations.
    ```bash
    # Azure CLI example to add an IP range to Cosmos DB firewall
    az cosmosdb update \
        --name <cosmosdb-account-name> \
        --resource-group <resource-group-name> \
        --ip-range-filter "192.168.1.0/24,10.0.0.1"
    ```
    A common mistake is to open the firewall too broadly (e.g., `0.0.0.0/0` for all IP addresses) or to forget to include the Azure portal's IP address if you need to manage the account via the Data Explorer.

2.  **Virtual Network (VNet) Service Endpoints:** This extends your virtual network's identity to the Azure Cosmos DB service, allowing you to restrict access to your Cosmos DB account to only subnets within your VNet. When enabled, traffic from the VNet to Cosmos DB uses the Azure backbone network, enhancing security and potentially reducing latency.
    ```bash
    # Azure CLI example to add a VNet rule to Cosmos DB
    az cosmosdb network-rule add \
        --name <cosmosdb-account-name> \
        --resource-group <resource-group-name> \
        --virtual-network <vnet-name> \
        --subnet <subnet-name>
    ```

3.  **Azure Private Endpoint:** This is the most secure and recommended option for connecting to Cosmos DB from your VNet. A Private Endpoint creates a private IP address for your Cosmos DB account within your VNet, making the Cosmos DB account accessible only from within that VNet and effectively removing it from the public internet. All traffic flows over the Azure backbone network through a private link, ensuring complete network isolation. This is ideal for highly sensitive applications and compliance requirements.

Beyond network access, **access control** determines *who* can perform *what* operations on your data. Cosmos DB offers two primary models:
1.  **Primary Keys:** Each Cosmos DB account has a primary read-write key and a primary read-only key. These keys grant full administrative access (read-write key) or full read-only access (read-only key) to *all* databases and containers within the account. They are powerful and should be treated like root passwords, typically used only by service principals or configuration management systems, not directly by applications or end-users.
2.  **Role-Based Access Control (RBAC):** This is the modern and recommended approach for managing data plane access. Azure RBAC allows you to assign specific roles (e.g., Cosmos DB Built-in Data Contributor, Cosmos DB Built-in Data Reader) to Azure Active Directory (AAD) identities (users, groups, service principals) at different scopes (account, database, container). This provides granular control and adheres to the principle of least privilege. For example, you can grant a service principal read-only access to a specific container, preventing it from modifying data or accessing other containers.
    ```bash
    # Azure CLI example to assign a built-in data reader role to a service principal
    az cosmosdb sql role assignment create \
        --account-name <cosmosdb-account-name> \
        --resource-group <resource-group-name> \
        --scope "/dbs/MyDatabase/colls/MyContainer" \
        --principal-id <service-principal-object-id> \
        --role-definition-id "00000000-0000-0000-0000-000000000001" # Built-in Data Reader
    ```
    When using RBAC, applications authenticate using AAD tokens, eliminating the need to manage primary keys in application code. This is a significant security improvement.

**Data encryption** is another critical security layer. Azure Cosmos DB automatically encrypts all data at rest using service-managed keys. This means your data, including backups, is encrypted by default without any action required from you. For enhanced security and compliance, you can also enable customer-managed keys (CMK) using Azure Key Vault. With CMK, you control the encryption keys, adding an extra layer of protection. Data in transit is also encrypted using TLS 1.2, ensuring secure communication between your application and Cosmos DB endpoints.

Finally, consider **audit logging**. While not strictly an access control mechanism, it's crucial for security monitoring. As discussed in Chapter 6.1, enabling "DataPlaneRequests" diagnostic logs allows you to audit all operations performed on your data, including who accessed what and when. This is invaluable for detecting suspicious activity and meeting compliance requirements.

Safety notes:
*   Never hardcode primary keys in your application code. Use Azure Key Vault or managed identities for Azure resources.
*   Always apply the principle of least privilege. Grant only the necessary permissions to users and applications.
*   Regularly review your firewall rules and RBAC assignments.
*   For production environments, always prefer Private Endpoints over IP firewalls or VNet service endpoints for the highest level of network isolation.

By combining network security, granular access control with RBAC, and leveraging Cosmos DB's built-in encryption, you can build highly secure applications on Azure Cosmos DB.

#### Key concepts
*   **IP Firewall:** A network security feature that restricts access to a Cosmos DB account to a specified list of IP addresses or ranges.
*   **Virtual Network (VNet) Service Endpoints:** Extends a VNet's identity to Azure services, allowing access to Cosmos DB to be restricted to specific subnets within a VNet.
*   **Azure Private Endpoint:** A network interface that connects you privately and securely to a service powered by Azure Private Link, bringing the service into your VNet.
*   **Primary Keys:** Account-level credentials (read-write and read-only) that grant full access to all resources within a Cosmos DB account.
*   **Role-Based Access Control (RBAC):** A security mechanism that allows fine-grained data plane access control to Cosmos DB resources (account, database, container) for Azure Active Directory identities.
*   **Azure Active Directory (AAD):** Microsoft's cloud-based identity and access management service, used for authenticating identities for RBAC.
*   **Data Encryption at Rest:** Automatic encryption of all data stored in Cosmos DB using service-managed keys.
*   **Customer-Managed Keys (CMK):** An option to use your own encryption keys stored in Azure Key Vault for data encryption at rest in Cosmos DB.
*   **Data Encryption in Transit:** Encryption of data during communication between client applications and Cosmos DB using TLS 1.2.
*   **Principle of Least Privilege:** A security best practice to grant users and applications only the minimum permissions necessary to perform their tasks.

#### Hands-on activity
**Activity: Implement IP Firewall and RBAC for a Cosmos DB Container**

1.  **Configure IP Firewall:**
    *   Navigate to your Azure Cosmos DB account in the Azure portal.
    *   Under "Networking," select "Firewall and virtual networks."
    *   Choose "Selected networks."
    *   Under "Firewall," add your current client IP address. You can find your public IP by searching "what is my ip" in a browser.
    *   **Important:** Also add the IP range for the Azure portal (usually `0.0.0.0` or `104.42.195.92/32` for management, but `Allow access from Azure portal` checkbox usually handles this). For simplicity in this lab, ensure "Allow access from Azure portal" is checked.
    *   Click "Save."
    *   **Test:** Try to access the Data Explorer from a machine with an IP address NOT in your firewall rules. It should fail. Then try from your allowed IP.

2.  **Create an Azure Active Directory Service Principal:**
    *   Open Azure Cloud Shell (Bash).
    *   Create a new service principal:
        ```bash
        az ad sp create-for-rbac --name "CosmosDbAppSP" --role "Contributor" --scopes "/subscriptions/<your-subscription-id>/resourceGroups/<your-resource-group>"
        ```
    *   **Note:** The `Contributor` role here is for creating the SP. We will assign a more granular Cosmos DB data role later.
    *   Copy the `appId` (Client ID) and `password` (Client Secret) from the output. You will need these. Also note the `objectId` of the service principal.

3.  **Assign Cosmos DB RBAC Role to a Container:**
    *   Navigate to your Azure Cosmos DB account in the Azure portal.
    *   Go to "Access Control (IAM)" for the *Cosmos DB account*.
    *   Click "+ Add" -> "Add role assignment."
    *   Select "Role": `Cosmos DB Built-in Data Contributor`.
    *   Select "Assign access to": `User, group, or service principal`.
    *   Search for your newly created service principal (`CosmosDbAppSP`) and select it.
    *   Click "Review + assign."
    *   **Note:** This grants access at the account level. For true least privilege, you would scope it to a specific database or container using Azure CLI. Let's do that next.
    *   **Refine Scope with Azure CLI (more granular):**
        ```bash
        # First, remove the account-level assignment if you made it for this exercise (optional, but good practice for least privilege)
        # az role assignment delete --role "Cosmos DB Built-in Data Contributor" --assignee <service-principal-app-id> --scope "/subscriptions/<your-subscription-id>/resourceGroups/<your-resource-group>/providers/Microsoft.DocumentDB/databaseAccounts/<cosmosdb-account-name>"

        # Get the role definition ID for Built-in Data Contributor
        ROLE_DEF_ID=$(az cosmosdb sql role definition list --account-name <cosmosdb-account-name> --resource-group <resource-group-name> --query "[?roleName=='Cosmos DB Built-in Data Contributor'].id" -o tsv)

        # Assign the role to a specific container
        az cosmosdb sql role assignment create \
            --account-name <cosmosdb-account-name> \
            --resource-group <resource-group-name> \
            --scope "/dbs/<database-name>/colls/<container-name>" \
            --principal-id <service-principal-object-id> \
            --role-definition-id $ROLE_DEF_ID
        ```
    *   Replace `<database-name>`, `<container-name>`, `<service-principal-object-id>` with your actual values.

4.  **Test RBAC Access from an Application (Conceptual):**
    *   You would typically use the `appId` and `password` of the service principal in an application to authenticate and interact with Cosmos DB.
    *   The application should only be able to perform operations on the specific container to which you granted access. Attempts to access other containers or perform unauthorized operations should fail.

#### Assessment idea
1.  **Question:** Your company has a strict security policy requiring that all database access from internal applications must be isolated from the public internet and routed exclusively through the Azure backbone network. Which Azure networking feature would you recommend to achieve this for your Azure Cosmos DB account, and why is it preferred over an IP firewall?
    *   **Correct Answer:** You should recommend using **Azure Private Endpoints**. A Private Endpoint creates a private IP address for the Cosmos DB account within your Virtual Network (VNet), making the account accessible only from within that VNet. All traffic then flows over the Azure backbone network, completely isolating the Cosmos DB account from the public internet. This is preferred over an IP firewall because an IP firewall still exposes the Cosmos DB endpoint to the public internet, albeit with restricted access. Private Endpoints provide true network isolation, preventing any public exposure and offering a higher level of security, which aligns with the strict security policy.

2.  **Question:** You need to grant an Azure Active Directory service principal (representing an application) the ability to read and write data to a *specific container* named `ProductCatalog` within your `InventoryDB` database in Azure Cosmos DB, but it should not have access to any other containers or administrative functions. How would you achieve this using the most secure and granular access control mechanism?
    *   **Correct Answer:** To achieve this using the most secure and granular access control mechanism, you would use **Azure Role-Based Access Control (RBAC)**. You would assign the `Cosmos DB Built-in Data Contributor` role to the Azure Active Directory service principal. Crucially, the scope of this role assignment must be set to the specific container: `/dbs/InventoryDB/colls/ProductCatalog`. This ensures that the service principal has read and write data plane access only to the `ProductCatalog` container and no other resources or administrative privileges within the Cosmos DB account. This adheres to the principle of least privilege.

#### AI generation note
Create a 10-minute interactive lab walkthrough video. Start by demonstrating how to configure an IP firewall for an Azure Cosmos DB account in the Azure portal, including adding the current client IP and allowing Azure portal access. Show a quick test of access restriction. Then, guide learners through creating an Azure Active Directory Service Principal using Azure Cloud Shell. Subsequently, demonstrate how to assign the `Cosmos DB Built-in Data Contributor` RBAC role to this service principal, specifically scoped to a single Cosmos DB container using the Azure CLI. Conclude with a conceptual explanation of how an application would use this service principal to authenticate and interact with Cosmos DB, emphasizing the benefits of RBAC over primary keys. Include a mini-quiz on the difference between IP firewall and Private Endpoints.

### Chapter 6.4 — Backup and Restore Strategies

#### Learning objectives
*   Understand the two primary backup modes in Azure Cosmos DB: periodic and continuous.
*   Configure and manage continuous backup for point-in-time restore capabilities.
*   Explain the process of restoring data from both periodic and continuous backups.
*   Identify scenarios where each backup mode is most appropriate.
*   Discuss the implications of backup modes on data retention, cost, and recovery time objectives (RTO) and recovery point objectives (RPO).

#### Detailed lesson content
Data loss, whether accidental or malicious, can be catastrophic. Azure Cosmos DB provides robust backup and restore capabilities to protect your data, offering two distinct modes: **periodic backup** and **continuous backup**. Understanding the differences and choosing the right strategy for your workload is crucial for meeting your business continuity and disaster recovery (BCDR) requirements.

**Periodic backup** is the default backup mode for all new Azure Cosmos DB accounts. In this mode, Cosmos DB automatically takes full backups of your data at regular intervals without impacting your application's performance or consuming any Request Units (RUs). These backups are stored in a separate Azure Storage account in the same region as your Cosmos DB account, and then geo-redundantly replicated to a paired region. Key characteristics of periodic backup include:
*   **Backup Interval:** By default, backups are taken every 4 hours and retained for 8 hours (2 backups). You can customize this interval to be as frequent as every 1 hour and retain them for up to 30 days.
*   **Restore Process:** To restore data from a periodic backup, you must contact Azure Support. They will restore your data to a new Cosmos DB account. You cannot perform self-service restores directly. This process can take several hours, impacting your Recovery Time Objective (RTO).
*   **Recovery Point Objective (RPO):** The RPO for periodic backups is limited by your backup interval. If your interval is 4 hours, you could potentially lose up to 4 hours of data.
*   **Cost:** Backups are generally included in the Cosmos DB pricing, but extended retention beyond the default might incur additional storage costs.

While periodic backup is simple and automatic, its limitations in RPO and RTO make it less suitable for mission-critical applications requiring minimal data loss and faster recovery.

This is where **continuous backup** comes into play. Introduced as a more advanced feature, continuous backup provides **point-in-time restore** capabilities, allowing you to restore your data to any point within the last 30 days (or 7 days for the free tier). This significantly improves both RPO and RTO. When continuous backup is enabled, Cosmos DB records all changes to your data in a continuous stream.
*   **RPO:** The RPO for continuous backup is near-zero (typically measured in seconds or minutes), as every change is captured.
*   **RTO:** Self-service restore is available directly through the Azure portal, Azure CLI, or PowerShell. You can restore a deleted account, a deleted database, or a deleted container to a new Cosmos DB account at any point within the retention period. The restore operation is much faster than periodic backups, typically completing within minutes to a few hours depending on data size.
*   **Cost:** Continuous backup incurs additional costs for storage of the change feed data and for any restore operations. These costs are typically higher than periodic backups but justified by the improved RPO/RTO.
*   **Enabling:** Continuous backup can only be enabled when creating a new Cosmos DB account. You cannot switch an existing account from periodic to continuous backup directly. If you need to enable it for an existing account, you must migrate your data to a new account configured for continuous backup.

```bash
# Azure CLI example to create a Cosmos DB account with continuous backup
az cosmosdb create \
    --name <new-cosmosdb-account-name> \
    --resource-group <resource-group-name> \
    --locations regionName=<primary-region> failoverPriority=0 \
    --backup-policy-type Continuous \
    --default-consistency-level Session \
    --kind GlobalDocumentDB
```

**Restoring from Continuous Backup:**
The restore process for continuous backup is straightforward:
1.  **Identify the restore point:** Specify the exact timestamp (UTC) to which you want to restore.
2.  **Choose the scope:** You can restore an entire account, a specific database, or a specific container.
3.  **Specify a new target account:** The restore operation always creates a *new* Cosmos DB account with the restored data. You cannot restore over an existing account or container. This is a safety mechanism to prevent accidental data overwrites.

```bash
# Azure CLI example to restore a deleted container from continuous backup
az cosmosdb restore \
    --account-name <source-account-name> \
    --resource-group <source-resource-group-name> \
    --restore-timestamp "2023-10-27T10:30:00Z" \
    --restore-mode PointInTime \
    --target-database-account-name <new-cosmosdb-account-name> \
    --target-resource-group <target-resource-group-name> \
    --restore-database-name <original-database-name> \
    --restore-container-name <original-container-name>
```

**Common Mistakes and Safety Notes:**
*   **Not understanding RPO/RTO:** Many developers assume default backups are sufficient for all scenarios. Always align your backup strategy with your application's RPO/RTO requirements.
*   **Forgetting about cost:** Continuous backup offers superior RPO/RTO but comes with higher costs. Factor this into your budget.
*   **Mismanaging keys for CMK:** If you use customer-managed keys (CMK) for encryption, losing access to your keys in Azure Key Vault will render your data inaccessible, even with backups. Implement robust key management.
*   **Restoring to the wrong point:** Always double-check your restore timestamp when using continuous backup.
*   **Not testing restores:** Regularly test your restore process to ensure it works as expected and that your RTO can be met. This is a critical safety measure.

In summary, for most non-critical applications, periodic backup might suffice. However, for mission-critical systems where data loss must be minimized and rapid recovery is essential, continuous backup with its point-in-time restore capabilities is the clear choice.

#### Key concepts
*   **Periodic Backup:** The default backup mode for Azure Cosmos DB, which automatically takes full backups at regular intervals (e.g., every 4 hours) and retains them for a specified duration.
*   **Continuous Backup:** An advanced backup mode for Azure Cosmos DB that provides point-in-time restore capabilities, allowing restoration to any point within a 30-day (or 7-day) window.
*   **Point-in-Time Restore (PITR):** The ability to restore data to a specific historical timestamp, typically offered by continuous backup.
*   **Recovery Point Objective (RPO):** The maximum tolerable amount of data loss, measured in time (e.g., 4 hours, 1 minute).
*   **Recovery Time Objective (RTO):** The maximum tolerable amount of time to restore a system or service after a disaster or data loss event.
*   **Self-Service Restore:** The ability for users to initiate and manage data restore operations directly (available with continuous backup).
*   **Geo-redundancy:** The practice of replicating data to a geographically distant paired region for disaster recovery.
*   **Change Feed:** A persistent, ordered record of changes to data in a Cosmos DB container, which is leveraged by continuous backup.

#### Hands-on activity
**Activity: Enable Continuous Backup and Perform a Point-in-Time Restore**

1.  **Create a New Cosmos DB Account with Continuous Backup:**
    *   Open Azure Cloud Shell (Bash).
    *   Create a new Cosmos DB account, ensuring `backup-policy-type` is set to `Continuous`.
        ```bash
        RESOURCE_GROUP="CosmosDBBackupRG"
        LOCATION="eastus"
        COSMOS_ACCOUNT_NAME="mycontbackupaccount$(openssl rand -hex 3)" # Unique name

        az group create --name $RESOURCE_GROUP --location $LOCATION

        az cosmosdb create \
            --name $COSMOS_ACCOUNT_NAME \
            --resource-group $RESOURCE_GROUP \
            --locations regionName=$LOCATION failoverPriority=0 \
            --backup-policy-type Continuous \
            --default-consistency-level Session \
            --kind GlobalDocumentDB \
            --public-network-access Enabled # For simplicity in lab
        echo "Cosmos DB account '$COSMOS_ACCOUNT_NAME' created with continuous backup."
        ```
    *   Note the `COSMOS_ACCOUNT_NAME`.

2.  **Create a Database and Container, Insert Data:**
    *   In the Azure portal, navigate to your newly created Cosmos DB account.
    *   Go to "Data Explorer."
    *   Create a new database (e.g., `MyContinuousDB`) and a new container (e.g., `MyItems`) with a partition key of `/id` and 400 RU/s.
    *   Insert a few sample documents.
        ```json
        { "id": "item1", "name": "Product A", "price": 10.99 }
        ```
    *   Insert another document after a short delay (e.g., 1-2 minutes).
        ```json
        { "id": "item2", "name": "Product B", "price": 20.49 }
        ```
    *   **Record the current UTC timestamp** after inserting `item2`. You can use `date -u +"%Y-%m-%dT%H:%M:%SZ"` in Cloud Shell. This will be your restore point.

3.  **Simulate Data Loss (Delete a Container):**
    *   In the Data Explorer, delete the `MyItems` container. Confirm the deletion.

4.  **Perform Point-in-Time Restore:**
    *   In the Azure portal, navigate back to your Cosmos DB account.
    *   Under "Backup & Restore," select "Point in time restore."
    *   Click "Restore."
    *   Select "Restore type": `Container`.
    *   Select your deleted container: `MyItems`.
    *   Enter the **exact UTC timestamp** you recorded earlier as the "Restore point."
    *   Provide a **new target account name** (e.g., `restoredcontbackupaccount$(openssl rand -hex 3)`).
    *   Provide a **new target database name** (e.g., `RestoredDB`).
    *   Provide a **new target container name** (e.g., `RestoredItems`).
    *   Click "Submit."
    *   Monitor the restore process. Once complete, navigate to the *new* Cosmos DB account and verify that `MyItems` container (now named `RestoredItems`) contains `item1` and `item2` as they were at your specified timestamp.

#### Assessment idea
1.  **Question:** Your company is developing a new financial transaction processing system using Azure Cosmos DB. Due to regulatory compliance, the system requires a Recovery Point Objective (RPO) of no more than 5 minutes and a Recovery Time Objective (RTO) of less than 2 hours. Which Azure Cosmos DB backup mode would you choose for this application, and why?
    *   **Correct Answer:** For this application, you should choose **Continuous Backup**.
        *   **RPO:** Continuous backup offers a near-zero RPO (typically seconds to minutes), which easily meets the requirement of no more than 5 minutes of data loss. Periodic backup, with its minimum 1-hour interval, would not meet this RPO.
        *   **RTO:** Continuous backup provides self-service point-in-time restore capabilities directly through the Azure portal/CLI, allowing for much faster recovery times (typically minutes to a few hours) compared to periodic backup which requires contacting Azure Support and can take significantly longer. This meets the RTO requirement of less than 2 hours.

2.  **Question:** You have an existing Azure Cosmos DB account configured with the default periodic backup mode. You now need to enable continuous backup for a new mission-critical container within this account. What steps must you take to achieve this, and what is a key limitation you should be aware of?
    *   **Correct Answer:**
        *   **Steps to achieve this:**
            1.  You cannot directly switch an existing Azure Cosmos DB account from periodic to continuous backup mode.
            2.  Therefore, you must **create a *new* Azure Cosmos DB account** and ensure that you select "Continuous" as the backup policy type during its creation.
            3.  After the new account is provisioned, you will need to **migrate your data** from the existing account's mission-critical container to the new account's container. This migration can be done using tools like Azure Data Factory, Azure Cosmos DB change feed, or custom application code.
        *   **Key limitation:** The primary limitation is that **continuous backup can only be enabled at the time of account creation**. It is not possible to change the backup mode of an existing Cosmos DB account from periodic to continuous. This necessitates creating a new account and migrating data, which adds complexity and downtime considerations if not planned carefully.

#### AI generation note
Create a 12-minute interactive lab walkthrough video. Start by demonstrating the creation of a new Azure Cosmos DB account via the Azure portal, explicitly selecting "Continuous" backup mode. Then, guide the user to create a database and container within this new account and insert two distinct items, pausing briefly between insertions to simulate a time gap. Instruct the user to record the UTC timestamp after the second insertion. Next, simulate data loss by deleting the container. Finally, walk through the point-in-time restore process in the Azure portal, showing how to select the recorded timestamp and restore the deleted container to a *new* Cosmos DB account. Conclude by verifying the restored data in the new account. Include a reflection prompt on how RPO/RTO considerations influence backup strategy.

### Chapter 6.5 — Disaster Recovery and Business Continuity

#### Learning objectives
*   Differentiate between high availability and disaster recovery in the context of Azure Cosmos DB.
*   Configure multi-region write capabilities for enhanced availability and disaster recovery.
*   Understand the process and implications of manual and automatic failovers in Cosmos DB.
*   Explain how consistency levels interact with multi-region deployments for RPO and RTO.
*   Design a comprehensive business continuity plan for Azure Cosmos DB solutions.

#### Detailed lesson content
While backup and restore strategies protect against data loss, **disaster recovery (DR)** and **business continuity (BC)** focus on ensuring your application remains operational even in the face of regional outages or catastrophic failures. Azure Cosmos DB is inherently designed for high availability, but achieving true disaster recovery requires careful configuration, especially for multi-region deployments.

**High Availability vs. Disaster Recovery:**
*   **High Availability (HA):** Refers to the ability of a system to remain operational with minimal downtime, typically within a single region, by automatically switching to redundant components in case of a localized failure (e.g., a server rack failure). Cosmos DB provides HA through its automatic replication within a region across multiple fault domains.
*   **Disaster Recovery (DR):** Refers to the ability to recover from a widespread outage that affects an entire Azure region. This typically involves replicating data to a geographically distant region and having mechanisms to fail over your application to that secondary region.

Azure Cosmos DB supports **multi-region accounts**, allowing you to replicate your data across multiple Azure regions. This is the foundation for robust disaster recovery. When you add regions to your Cosmos DB account, your data is asynchronously replicated to all configured regions.
*   **Single-region write (default):** In this configuration, one region is designated as the write region, and all other regions are read replicas. If the write region becomes unavailable, you must manually initiate a failover to one of the read regions to restore write capability. This impacts RTO.
*   **Multi-region write:** This is the most powerful configuration for disaster recovery and global distribution. With multi-region writes enabled, all regions in your Cosmos DB account become writeable. This means your application can write to any region, and Cosmos DB handles the conflict resolution and eventual consistency across all regions.
    ```bash
    # Azure CLI example to enable multi-region writes for an existing Cosmos DB account
    az cosmosdb update \
        --name <cosmosdb-account-name> \
        --resource-group <resource-group-name> \
        --enable-multiple-write-locations true
    ```
    Multi-region writes significantly improve RTO for write operations during a regional outage, as your application can simply redirect writes to an available region without waiting for a manual failover. It also improves write latency for globally distributed applications by allowing users to write to the nearest region.

**Failover Mechanisms:**
1.  **Automatic Failover:** For multi-region *read-only* accounts (single-region write), Cosmos DB can be configured to automatically fail over the write region to the highest priority read region in case of an outage. This is configured by setting `failoverPriority` for each region. If the primary write region fails, Cosmos DB will automatically promote the next highest priority region to be the new write region. This reduces RTO.
    ```bash
    # Azure CLI example to set failover priority for regions
    az cosmosdb update \
        --name <cosmosdb-account-name> \
        --resource-group <resource-group-name> \
        --locations regionName=eastus failoverPriority=0 regionName=westus failoverPriority=1
    ```
2.  **Manual Failover:** Even with automatic failover enabled, you can always initiate a manual failover through the Azure portal or CLI. This is useful for planned maintenance, disaster recovery drills, or when you need to control the failover process precisely. For multi-region *write* accounts, manual failover is less about restoring write capability (as all regions are writeable) and more about redirecting traffic or designating a new preferred primary region if needed.

**Consistency Levels and RPO/RTO:**
The choice of consistency level significantly impacts the RPO and RTO in multi-region deployments.
*   **Strong Consistency:** Guarantees that all reads see the most recent write. In a multi-region setup, this means writes must be synchronously replicated to all regions before being acknowledged. This results in higher write latency and a higher RTO during a regional outage (as all regions must be available for writes). It also has a higher RPO if a region fails, as the system might need to wait for all regions to catch up.
*   **Bounded Staleness, Session, Consistent Prefix, Eventual Consistency:** These weaker consistency levels allow for asynchronous replication. This means writes are acknowledged faster, and reads might see slightly stale data. This leads to lower write latency and significantly better RPO and RTO during a regional outage, as the system can continue operating with available regions without waiting for full synchronization. For multi-region write accounts, weaker consistency levels are almost always used to leverage the benefits of distributed writes.

**Business Continuity Plan (BCP):**
A comprehensive BCP for Cosmos DB should include:
1.  **Multi-region deployment:** Configure your Cosmos DB account with at least two regions, ideally with multi-region writes enabled for mission-critical applications.
2.  **Automatic failover:** Enable automatic failover for single-region write accounts and define failover priorities.
3.  **Application re-architecture:** Design your application to be region-aware. The Cosmos DB SDKs automatically detect the nearest available region, but your application might need logic to redirect user traffic or reconfigure connection strings in a disaster.
4.  **Regular DR drills:** Periodically test your disaster recovery plan by simulating regional outages and performing manual failovers. This verifies your RTO and ensures your application can recover gracefully.
5.  **Monitoring and alerting:** Set up Azure Monitor alerts for regional availability and failover events to quickly detect and respond to issues.
6.  **Data migration strategy:** If you need to switch backup modes or perform other major changes, have a plan for data migration.

**Common Mistakes:**
*   **Assuming multi-region means zero RPO/RTO:** While multi-region significantly improves these, there's always a non-zero RPO (due to asynchronous replication) and RTO (due to failover time and application reconfiguration).
*   **Not testing failovers:** Never assume your DR plan will work without testing.
*   **Ignoring consistency implications:** Choosing strong consistency in a multi-region write setup can negate many of the performance benefits and increase RTO.
*   **Hardcoding endpoints:** Always use the SDK's built-in region detection or a configuration service to manage Cosmos DB endpoints, rather than hardcoding.
*   **Neglecting application-level DR:** Cosmos DB handles database-level DR, but your application also needs to be resilient and able to operate from a secondary region.

By strategically combining multi-region deployments, appropriate consistency levels, and a well-tested BCP, you can build highly resilient applications on Azure Cosmos DB that can withstand regional disasters.

#### Key concepts
*   **High Availability (HA):** A system's ability to remain operational with minimal downtime, typically within a single region, through redundancy.
*   **Disaster Recovery (DR):** The ability to recover from a widespread outage affecting an entire region, typically involving data replication to another region and failover mechanisms.
*   **Multi-Region Account:** An Azure Cosmos DB account configured to replicate data across multiple Azure regions.
*   **Single-Region Write:** The default configuration for multi-region accounts where only one region is writeable, and others are read replicas. Requires failover to change the write region.
*   **Multi-Region Write:** A configuration where all regions in a Cosmos DB account are writeable, providing improved RTO for writes and lower write latency for globally distributed applications.
*   **Automatic Failover:** Cosmos DB's ability to automatically promote a secondary region to the write region in case of an outage in the primary write region, based on configured failover priorities.
*   **Manual Failover:** The process of manually initiating a failover of the write region to a secondary region, typically for planned maintenance or DR drills.
*   **Consistency Levels:** The guarantees Cosmos DB provides regarding the freshness and order of reads, which significantly impact RPO, RTO, and performance in multi-region deployments.
*   **Business Continuity Plan (BCP):** A comprehensive plan outlining how an organization will continue to operate critical business functions during and after a disaster.
*   **Preferred Regions:** A list of regions specified by an application to guide the Cosmos DB SDK in connecting to the nearest or most optimal region.

#### Hands-on activity
**Activity: Configure Multi-Region Writes and Simulate a Failover**

1.  **Create a Multi-Region Cosmos DB Account (or update existing):**
    *   Open Azure Cloud Shell (Bash).
    *   Create a new Cosmos DB account with two regions and multi-region writes enabled.
        ```bash
        RESOURCE_GROUP="CosmosDBDRRG"
        LOCATION1="eastus"
        LOCATION2="westus"
        COSMOS_ACCOUNT_NAME="mydraccount$(openssl rand -hex 3)" # Unique name

        az group create --name $RESOURCE_GROUP --location $LOCATION1

        az cosmosdb create \
            --name $COSMOS_ACCOUNT_NAME \
            --resource-group $RESOURCE_GROUP \
            --locations regionName=$LOCATION1 failoverPriority=0 \
                       regionName=$LOCATION2 failoverPriority=1 \
            --enable-multiple-write-locations true \
            --default-consistency-level Session \
            --kind GlobalDocumentDB \
            --public-network-access Enabled # For simplicity in lab
        echo "Cosmos DB account '$COSMOS_ACCOUNT_NAME' created with multi-region writes."
        ```
    *   Note the `COSMOS_ACCOUNT_NAME`.

2.  **Create a Database and Container:**
    *   In the Azure portal, navigate to your newly created Cosmos DB account.
    *   Go to "Data Explorer."
    *   Create a new database (e.g., `GlobalDB`) and a new container (e.g., `GlobalItems`) with a partition key of `/id` and 400 RU/s.

3.  **Perform a Manual Failover:**
    *   In the Azure portal, navigate to your Cosmos DB account.
    *   Under "Settings," select "Replicate data globally."
    *   Observe the "Write Regions" (both East US and West US should be marked as writeable).
    *   Click "Manual Failover."
    *   Select the **current primary write region** (e.g., "East US") as the "Current write region."
    *   Select the **target failover region** (e.g., "West US") as the "New write region."
    *   **Note:** For multi-region write accounts, a "manual failover" primarily changes the *preferred* write region for the SDK, and also tests the replication health. It doesn't "fail over" write capability in the same way as single-region write accounts.
    *   Click "OK."
    *   Monitor the failover process. Once complete, the "West US" region should be listed as the primary write region.

4.  **Test Multi-Region Write Capability (Conceptual):**
    *   Develop a simple application (e.g., Python or .NET) that connects to the Cosmos DB account.
    *   Configure the SDK to use a list of preferred regions (e.g., `['West US', 'East US']`).
    *   Perform write operations. The SDK will automatically route writes to the nearest available write region.
    *   **Python example for connecting with preferred regions:**
        ```python
        import os
        from azure.cosmos import CosmosClient

        ENDPOINT = "YOUR_COSMOS_DB_ENDPOINT"
        KEY = "YOUR_COSMOS_DB_KEY"
        DATABASE_NAME = "GlobalDB"
        CONTAINER_NAME = "GlobalItems"

        # Configure preferred regions for the client
        # The SDK will try to connect to the first available region in this list
        preferred_regions = ["West US", "East US"]

        client = CosmosClient(ENDPOINT, credential=KEY, preferred_locations=preferred_regions)
        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        print(f"Connected to Cosmos DB. Preferred regions: {preferred_regions}")

        # Insert an item
        item = {"id": "globalItem1", "city": "Seattle", "temperature": 70}
        container.create_item(body=item)
        print(f"Inserted item: {item['id']}")

        # Read the item
        read_item = container.read_item(item=item['id'], partition_key=item['id'])
        print(f"Read item: {read_item['id']}")

        # You can inspect client.client_connection.last_response_headers for x-ms-activity-location
        # to see which region processed the request.
        ```
    *   Observe that writes and reads are routed to the nearest available region.

#### Assessment idea
1.  **Question:** Your e-commerce application uses Azure Cosmos DB and serves customers globally. It requires extremely low write latency for user-generated content (e.g., product reviews) and must remain fully operational even if an entire Azure region experiences an outage. What Cosmos DB deployment strategy and write configuration would you recommend, and what consistency level would be most appropriate?
    *   **Correct Answer:** For this scenario, you should recommend an **Azure Cosmos DB multi-region account with multi-region write capabilities enabled**. This allows users to write data to the nearest Cosmos DB region, minimizing write latency. If an entire Azure region experiences an outage, the application can seamlessly redirect writes to another available region, ensuring continuous operation and high availability. The most appropriate consistency level would be **Session, Consistent Prefix, or Eventual Consistency**. These weaker consistency levels allow for asynchronous replication, resulting in lower write latency and better RPO/RTO during a regional outage, which aligns with the requirement for continuous operation and low latency. Strong consistency would introduce higher write latency and reduce availability in a multi-region write setup.

2.  **Question:** You have an Azure Cosmos DB account configured for single-region writes, with "East US" as the primary write region and "West US" as a read replica. You've also configured automatic failover with "West US" having a higher failover priority than "East US." During a disaster recovery drill, you want to test the failover process to "West US." What steps would you take to initiate this failover, and what is the primary purpose of performing such a drill?
    *   **Correct Answer:**
        *   **Steps to initiate failover:** You would initiate a **manual failover** through the Azure portal or Azure CLI/PowerShell. In the Azure portal, navigate to your Cosmos DB account, go to "Replicate data globally," and then click "Manual Failover." You would select "East US" as the current write region and "West US" as the new write region. This action would promote "West US" to become the new primary write region.
        *   **Primary purpose of the drill:** The primary purpose of performing such a disaster recovery drill is to **validate and verify the effectiveness of your disaster recovery plan and your application's ability to recover gracefully**. This includes confirming that the failover process works as expected, that your application can successfully connect to and operate with the new write region, and that your Recovery Time Objective (RTO) can be met. It helps identify any unforeseen issues or misconfigurations before a real disaster occurs.

#### AI generation note
Create a 15-minute interactive video tutorial. Start by demonstrating the creation of a new Azure Cosmos DB account in the Azure portal, explicitly configuring two regions (e.g., East US and West US) and enabling multi-region writes. Show how to verify the write regions in the "Replicate data globally" section. Then, walk through the process of performing a manual failover in the Azure portal, explaining its implications for multi-region write accounts. Conclude with a conceptual overview of how an application using the Cosmos DB SDK would leverage preferred regions for optimal routing and how this contributes to business continuity. Include an interactive element asking learners to identify the best consistency level for a globally distributed, low-latency write application.

---

## Final Capstone Project

The capstone project is your opportunity to apply the comprehensive knowledge and practical skills you've gained throughout this course. You will choose one of the following scenarios to design, implement, and demonstrate a solution leveraging Azure Cosmos DB. Each project is designed to integrate concepts from multiple modules, challenging you to think holistically about data modeling, partitioning, indexing, consistency, and application integration.

### Project Option 1: E-commerce Product Catalog and Inventory System

**Scenario:** Design and implement a backend for an e-commerce platform that stores product information, manages inventory levels, and tracks customer reviews. The system needs to handle high read and write volumes, especially for product lookups and inventory updates.

**Requirements:**
1.  **Data Modeling:** Design a schema for products (ID, name, description, price, categories, images, inventory count), product variants (size, color), and customer reviews (customer ID, rating, comment, product ID, timestamp).
2.  **Cosmos DB Implementation:**
    *   Create an Azure Cosmos DB account, database, and at least two containers (e.g., `Products`, `Reviews`).
    *   Implement appropriate partitioning strategies for each container to ensure efficient data distribution and query performance.
    *   Define custom indexing policies to optimize common queries (e.g., searching products by category, filtering reviews by product ID).
    *   Implement CRUD operations (Create, Read, Update, Delete) for products and reviews using an Azure Cosmos DB SDK (e.g., .NET, Python, Node.js).
3.  **Inventory Management:** Use the Change Feed to monitor inventory count changes. When a product's inventory drops below a certain threshold (e.g., 5 units), trigger a simulated reorder notification (e.g., print to console, log to a file).
4.  **Consistency:** Choose an appropriate consistency level for different operations (e.g., strong for inventory updates, session for user reviews). Justify your choices.

**Stretch Goals:**
*   Implement a stored procedure or trigger for server-side validation when adding new products or reviews.
*   Integrate with Azure Functions to process inventory reorder notifications or to pre-process product images before storing their URLs.
*   Implement a simple API endpoint (e.g., using Azure Functions or a basic web app) to expose product data.
*   Add a feature to track product views and recommend related products.

**Evaluation Criteria:**
*   **Data Model Design (25%):** Clarity, efficiency, and appropriateness of the chosen schema for the given domain.
*   **Cosmos DB Configuration (25%):** Correct selection of partitioning keys, indexing policies, and consistency levels with clear justifications.
*   **Functional Implementation (30%):** Successful implementation of CRUD operations, Change Feed processing, and adherence to requirements.
*   **Code Quality & Documentation (10%):** Readability, comments, and clear explanations of design choices.
*   **Performance & Scalability Considerations (10%):** Discussion of how the design supports high throughput and low latency.

**Estimated Time:** 15–20 hours

### Project Option 2: IoT Device Telemetry and Alerting System

**Scenario:** Develop a system to ingest, store, and analyze telemetry data from a fleet of simulated IoT devices. The system should be able to store high volumes of time-series data, allow for efficient querying of recent data, and trigger alerts based on specific data patterns.

**Requirements:**
1.  **Data Modeling:** Design a schema for device telemetry data (device ID, timestamp, sensor readings like temperature, humidity, pressure, location).
2.  **Cosmos DB Implementation:**
    *   Create an Azure Cosmos DB account, database, and a container for telemetry data.
    *   Implement a partitioning strategy optimized for high-volume writes and efficient queries across a specific device or time range.
    *   Define an indexing policy suitable for time-series data, considering potential range queries on timestamps and equality queries on device IDs.
    *   Configure Time-to-Live (TTL) for telemetry data to automatically expire older records (e.g., after 30 days).
3.  **Data Ingestion:** Simulate device data ingestion into Cosmos DB using an SDK. Generate random telemetry data for multiple devices at regular intervals.
4.  **Alerting System:** Use the Change Feed to monitor incoming telemetry data. If a device's temperature reading exceeds a predefined threshold (e.g., 30°C), trigger a simulated alert (e.g., print "ALERT: High Temp on Device X!" to console).
5.  **Querying:** Implement queries to retrieve:
    *   All telemetry data for a specific device within a given time range.
    *   The latest reading for all devices.

**Stretch Goals:**
*   Integrate with Azure IoT Hub to simulate real device connectivity and ingestion.
*   Implement an Azure Function to process Change Feed alerts and send notifications (e.g., email, SMS).
*   Create a simple dashboard (e.g., using a basic web app or local script) to visualize recent telemetry data.
*   Implement a stored procedure to perform server-side aggregations (e.g., average temperature for a device over the last hour).

**Evaluation Criteria:**
*   **Data Model Design (25%):** Effectiveness of the schema for time-series data and efficient querying.
*   **Cosmos DB Configuration (25%):** Appropriate partitioning, indexing, and TTL settings with clear justifications.
*   **Functional Implementation (30%):** Successful data ingestion, Change Feed processing for alerts, and efficient query implementation.
*   **Code Quality & Documentation (10%):** Readability, comments, and clear explanations of design choices.
*   **Performance & Scalability Considerations (10%):** Discussion of how the design handles high write throughput and data retention.

**Estimated Time:** 15–20 hours

### Project Option 3: User Profile and Activity Tracking System

**Scenario:** Build a backend system to manage user profiles, store user preferences, and track user activity logs (e.g., logins, page views, purchases). The system needs to support personalized experiences and provide insights into user behavior.

**Requirements:**
1.  **Data Modeling:** Design a schema for user profiles (user ID, name, email, registration date, preferences, last login) and user activity logs (activity ID, user ID, timestamp, activity type, details).
2.  **Cosmos DB Implementation:**
    *   Create an Azure Cosmos DB account, database, and at least two containers (e.g., `Users`, `ActivityLogs`).
    *   Implement partitioning strategies that optimize for retrieving a user's profile and their associated activity logs efficiently.
    *   Define indexing policies to support common queries like fetching a user by email, or retrieving all activities for a user within a date range.
    *   Implement CRUD operations for user profiles and the ability to add new activity log entries using an Azure Cosmos DB SDK.
3.  **Personalization:** When a user logs in, retrieve their profile and preferences. Use this information to simulate a personalized experience (e.g., "Welcome back, [User Name]! Here are your recommended items based on your preferences.").
4.  **Data Validation/Enrichment:** Implement a JavaScript stored procedure or pre-trigger to ensure that new user profiles have a valid email format or to automatically set a `lastModified` timestamp on profile updates.
5.  **Auditing/Reporting:** Use the Change Feed on the `ActivityLogs` container to simulate an auditing system that logs all user activities to a separate archival storage (e.g., print to console, write to a local file).

**Stretch Goals:**
*   Implement multi-region writes for the `Users` container to enhance global availability and low-latency access for users worldwide.
*   Integrate with Azure Active Directory B2C for user authentication.
*   Create a simple API endpoint to manage user profiles and retrieve activity data.
*   Implement a post-trigger to update a `totalActivities` counter on the user profile whenever a new activity log is added.

**Evaluation Criteria:**
*   **Data Model Design (25%):** Appropriateness of the schema for user profiles and activity tracking, considering relationships and query patterns.
*   **Cosmos DB Configuration (25%):** Effective partitioning, indexing, and use of server-side logic (stored procedures/triggers) with justifications.
*   **Functional Implementation (30%):** Successful CRUD operations, personalization logic, Change Feed processing, and server-side validation/enrichment.
*   **Code Quality & Documentation (10%):** Readability, comments, and clear explanations of design choices.
*   **Security & Compliance Considerations (10%):** Discussion of how the design addresses data privacy and security (e.g., PII handling).

**Estimated Time:** 15–20 hours

## Final Examination

This final examination assesses your comprehensive understanding of Azure Cosmos DB, covering all modules from core concepts to advanced development techniques. Answer all questions thoroughly, providing explanations and code examples where requested.

### Section 1: Concept Definitions (4 Questions)

**Question 1:** Explain the primary differences between the five consistency models offered by Azure Cosmos DB. Provide a scenario where each of "Strong" and "Eventual" consistency would be the most appropriate choice.

**Answer 1:**
Azure Cosmos DB offers five consistency models, each representing a trade-off between consistency, availability, and latency:
1.  **Strong:** Guarantees that reads always return the most recent committed version of an item. All replicas are consistent before a write is acknowledged. Highest consistency, but with higher latency and lower availability.
2.  **Bounded Staleness:** Guarantees that reads might lag behind writes by at most 'K' versions or 'T' time interval. It's a middle ground, offering a balance between strong and eventual.
3.  **Session:** Guarantees monotonic reads, monotonic writes, read-your-own-writes, and write-follows-reads within a single client session. It's the most commonly used for client-centric applications.
4.  **Consistent Prefix:** Guarantees that reads will never see out-of-order writes. If a sequence of writes occurred in order A, B, C, then a client will see A, A-B, or A-B-C, but never B, A, C.
5.  **Eventual:** Guarantees no ordering for reads. Replicas will eventually converge, but reads might return older versions of data. Highest availability and lowest latency.

*   **Scenario for Strong Consistency:** A financial transaction system where every read must reflect the absolute latest balance to prevent overdrafts or double-spending. For example, updating a bank account balance and immediately reading it back.
*   **Scenario for Eventual Consistency:** An IoT sensor data ingestion system where millions of temperature readings are streaming in. It's acceptable for a dashboard to display a reading that is a few seconds old, as long as the system can ingest data at extremely high rates with low latency.

**Question 2:** Describe the purpose of Request Units (RUs) in Azure Cosmos DB. How do RUs relate to throughput provisioning, and what factors influence the RU cost of an operation?

**Answer 2:**
Request Units (RUs) are the normalized currency for throughput in Azure Cosmos DB. They abstract the system resources such as CPU, IOPS, and memory that are consumed by various database operations. Instead of thinking about CPU cores or disk IOPS, you provision throughput in RUs per second (RU/s).

RUs directly relate to throughput provisioning because when you provision `X` RU/s on a container or database, Cosmos DB guarantees that you can perform operations consuming up to `X` RUs per second. If your operations exceed the provisioned RU/s, Cosmos DB will rate-limit requests, resulting in HTTP 429 errors.

Factors that influence the RU cost of an operation include:
*   **Item Size:** Larger items consume more RUs for reads and writes.
*   **Number of Properties:** Items with more properties generally cost more.
*   **Index Policy:** Operations on items with complex or many indexed properties consume more RUs.
*   **Query Complexity:** Queries involving filters, aggregations, ordering, or cross-partition operations consume more RUs than simple point reads.
*   **Number of Documents Returned:** Queries returning more documents cost more RUs.
*   **Data Consistency Level:** Stronger consistency levels generally incur higher RU costs for writes due to the need to synchronize across more replicas.
*   **Stored Procedures/Triggers:** Server-side logic consumes RUs based on the operations performed within them.

**Question 3:** What is the Azure Cosmos DB Change Feed, and how can it be used in a real-world application? Name two common use cases.

**Answer 3:**
The Azure Cosmos DB Change Feed is a persistent, ordered, append-only log of all changes that happen within an Azure Cosmos DB container. It records item creations, updates, and deletions in the order they occur. Unlike a traditional database trigger, the Change Feed is a pull-based mechanism, meaning applications "listen" to it and process changes at their own pace.

It can be used in real-world applications to react to data changes in near real-time without polling the database. The Change Feed Processor Library (often hosted in Azure Functions) simplifies reading and processing the Change Feed, distributing the workload across multiple instances if needed.

Two common use cases are:
1.  **Real-time Analytics and Dashboard Updates:** When new data (e.g., IoT sensor readings, user activity logs) is written to Cosmos DB, the Change Feed can trigger an Azure Function to process these updates, aggregate metrics, and push them to a real-time dashboard or another analytical store.
2.  **Data Synchronization and Materialized Views:** The Change Feed can be used to synchronize data between Cosmos DB and other data stores (e.g., Azure Search, Azure Synapse Analytics, a data warehouse) or to build materialized views. For instance, if you have a highly normalized transactional dataset in one container, you can use the Change Feed to denormalize and project specific data into another container optimized for read-heavy analytical queries.

**Question 4:** Explain the concept of a synthetic partition key. When would you use one, and what are its benefits and potential drawbacks?

**Answer 4:**
A synthetic partition key is a partition key created by concatenating multiple properties from your document into a single string or value. Instead of using a single existing property (like `userId` or `productId`) as the partition key, you might combine `userId` and `orderId` (e.g., `userId_orderId`) or `city` and `state` to form a new, composite partition key.

You would use a synthetic partition key when:
*   **Existing properties alone do not provide sufficient cardinality:** If your natural partition keys (e.g., `country`) have a low number of distinct values, they might lead to "hot partitions" where a few partitions receive a disproportionate amount of requests.
*   **You need to ensure even data distribution for specific query patterns:** By combining properties, you can create a more granular key that distributes data more evenly across logical partitions, especially if your queries frequently involve multiple criteria that can be combined into the synthetic key.
*   **You need to satisfy both high throughput and specific query patterns:** A synthetic key can sometimes allow you to achieve both by creating a unique identifier that is also useful for common query filters.

**Benefits:**
*   **Improved Data Distribution:** Can help distribute data more evenly across logical partitions, preventing hot partitions and improving overall throughput and scalability.
*   **Optimized Query Performance:** If your common queries include all components of the synthetic key, they become single-partition queries, which are highly efficient.
*   **Increased Cardinality:** Allows you to effectively increase the number of logical partitions beyond what individual properties might offer.

**Drawbacks:**
*   **Increased Complexity:** Requires careful design and management, as the application code needs to construct the synthetic key for every operation.
*   **Potential for Larger Partition Key Values:** Concatenating multiple values can result in longer partition keys, slightly increasing storage and RU cost per operation.
*   **Less Intuitive:** Can be less straightforward to understand and manage compared to using a single, natural property.
*   **Cross-Partition Queries:** If queries frequently do not include all components of the synthetic key, they might become cross-partition queries, which are more expensive.

### Section 2: Code Tracing (3 Questions)

**Question 5:** Consider the following JSON document stored in an Azure Cosmos DB container with `/category` as its partition key.

```json
{
  "id": "PROD001",
  "name": "Wireless Headphones",
  "description": "High-fidelity audio experience.",
  "price": 199.99,
  "category": "Electronics",
  "tags": ["audio", "wireless", "headphones"],
  "reviews": [
    { "userId": "user123", "rating": 5, "comment": "Great sound!" },
    { "userId": "user456", "rating": 4, "comment": "Comfortable fit." }
  ]
}
```

Now, analyze the following C# SDK code snippet. What will be the output of `item.id` and `item.price` after this code executes? Assume the `container` object is correctly initialized and connected to the Cosmos DB instance containing the document above.

```csharp
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;

public class Product
{
    public string id { get; set; }
    public string name { get; set; }
    public string description { get; set; }
    public double price { get; set; }
    public string category { get; set; }
}

public async Task GetProductDetails(Container container)
{
    string productId = "PROD001";
    string category = "Electronics"; // Partition key value

    ItemResponse<Product> response = await container.ReadItemAsync<Product>(productId, new PartitionKey(category));
    Product item = response.Resource;

    Console.WriteLine($"Product ID: {item.id}");
    Console.WriteLine($"Product Price: {item.price}");
}
```

**Answer 5:**
The `ReadItemAsync` method performs a point read, which is the most efficient way to retrieve a single item when you know both its `id` and partition key. Given the document and the code, the SDK will successfully fetch the item.

Output:
```
Product ID: PROD001
Product Price: 199.99
```

**Explanation:**
The `ReadItemAsync` call correctly identifies the item by `id` ("PROD001") and its partition key value ("Electronics"). The deserialization into the `Product` class will map the JSON properties to the C# class properties. Therefore, `item.id` will be "PROD001" and `item.price` will be 199.99.

**Question 6:** Consider a Cosmos DB container with `/tenantId` as its partition key. An application uses the following Python SDK code to query for orders.

```python
from azure.cosmos import CosmosClient, PartitionKey
import os

# Assume client and container are initialized
# client = CosmosClient(url, key)
# database = client.get_database("OrdersDB")
# container = database.get_container("OrderItems")

tenant_id = "tenantA"
order_status = "Pending"

query = f"SELECT * FROM c WHERE c.tenantId = '{tenant_id}' AND c.status = '{order_status}'"
items = list(container.query_items(
    query=query,
    partition_key=tenant_id,
    enable_cross_partition_query=False # CRITICAL: Note this parameter
))

for item in items:
    print(f"Order ID: {item['id']}, Status: {item['status']}")
```

What will happen if the `tenant_id` variable is set to `"tenantB"` but the `partition_key` parameter in `query_items` is mistakenly still set to `"tenantA"`? Assume there are documents for both `tenantA` and `tenantB` in the container.

**Answer 6:**
If `tenant_id` is `"tenantB"` but `partition_key` is `"tenantA"`, and `enable_cross_partition_query` is `False`, the query will attempt to execute *only* within the logical partition corresponding to `"tenantA"`.

Output:
The code will likely return an empty list or raise an error indicating that no items were found matching the query within the specified partition, even if items for `tenantB` exist in other partitions. It will *not* return any items belonging to `tenantB`.

**Explanation:**
The `partition_key` parameter in `query_items` explicitly tells the SDK which logical partition to target. When `enable_cross_partition_query` is set to `False`, the SDK will strictly adhere to this single partition. Even though the `WHERE` clause in the SQL query specifies `c.tenantId = 'tenantB'`, the `partition_key` parameter takes precedence for routing the query. Since no documents matching `c.tenantId = 'tenantB'` will be found within the `tenantA` partition, the result set will be empty. This highlights the importance of ensuring the `partition_key` parameter matches the intended partition for single-partition queries.

**Question 7:** You have a Cosmos DB container with `/customerId` as the partition key. Consider the following JavaScript stored procedure:

```javascript
function updateCustomerStatus(customerId, newStatus) {
    var collection = getContext().getCollection();
    var collectionLink = collection.getSelfLink();
    var response = getContext().getResponse();

    // Query to find the customer document
    var query = { query: "SELECT * FROM c WHERE c.id = @customerId", parameters: [{ name: "@customerId", value: customerId }] };

    var accept = collection.queryDocuments(collectionLink, query, function (err, feed, options) {
        if (err) throw err;

        if (feed.length === 0) {
            throw new Error("Customer not found.");
        } else {
            var customer = feed[0];
            customer.status = newStatus;

            // Replace the document with the updated status
            var acceptReplace = collection.replaceDocument(customer._self, customer, function (err, updatedCustomer) {
                if (err) throw err;
                response.setBody(updatedCustomer);
            });

            if (!acceptReplace) throw new Error("Could not update customer status.");
        }
    });

    if (!accept) throw new Error("Could not query for customer.");
}
```
If this stored procedure is executed with `customerId = "CUST123"` and `newStatus = "Active"`, and a document like `{"id": "CUST123", "name": "Alice", "status": "Inactive", "customerId": "CUST123"}` exists in the container, what will be the final `status` of the document after successful execution? What is the `_self` property used for in `replaceDocument`?

**Answer 7:**
After successful execution, the `status` of the document with `id: "CUST123"` will be `"Active"`.

**Explanation:**
1.  The `queryDocuments` call will successfully find the document with `id: "CUST123"` within the partition specified by the stored procedure's execution context (which must match the `customerId` for single-partition execution).
2.  The `customer` object's `status` property is then updated to `"Active"`.
3.  Finally, `collection.replaceDocument(customer._self, customer, ...)` is called. This method replaces the existing document identified by `customer._self` (its self-link) with the modified `customer` object.

The `_self` property is a system-generated property in Azure Cosmos DB documents. It represents the unique, self-referencing URI (link) of the document within the Cosmos DB hierarchy. When performing operations like `replaceDocument` or `deleteDocument` within a stored procedure or trigger, using the `_self` link is the most efficient way to reference the specific document, as it avoids the need for additional lookups based on `id` and partition key.

### Section 3: Code Writing (4 Questions)

**Question 8:** Write a C# SDK code snippet that connects to an Azure Cosmos DB container, creates a new item representing a `BlogPost`, and then reads that item back using a point read. Assume `CosmosClient` and `Container` objects are already initialized. The `BlogPost` class should have `id`, `title`, `author`, `publishDate`, and `category` properties. Use `category` as the partition key.

**Answer 8:**

```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

public class BlogPost
{
    public string id { get; set; }
    public string title { get; set; }
    public string author { get; set; }
    public DateTime publishDate { get; set; }
    public string category { get; set; }
}

public async Task ManageBlogPost(Container container)
{
    // 1. Create a new BlogPost item
    BlogPost newPost = new BlogPost
    {
        id = Guid.NewGuid().ToString(), // Generate a unique ID
        title = "Understanding Azure Cosmos DB Consistency Models",
        author = "Cohortia Instructor",
        publishDate = DateTime.UtcNow,
        category = "Databases" // This will be the partition key value
    };

    try
    {
        // Add the item to the container
        ItemResponse<BlogPost> createResponse = await container.CreateItemAsync(newPost, new PartitionKey(newPost.category));
        Console.WriteLine($"Created item with ID: {createResponse.Resource.id} (RU cost: {createResponse.RequestCharge})");

        // 2. Read the item back using a point read
        ItemResponse<BlogPost> readResponse = await container.ReadItemAsync<BlogPost>(newPost.id, new PartitionKey(newPost.category));
        BlogPost retrievedPost = readResponse.Resource;
        Console.WriteLine($"Retrieved item with ID: {retrievedPost.id}, Title: {retrievedPost.title} (RU cost: {readResponse.RequestCharge})");
    }
    catch (CosmosException ex)
    {
        Console.WriteLine($"Error: {ex.StatusCode} - {ex.Message}");
    }
}
```

**Partial Credit Guidance:**
*   Correct `BlogPost` class definition: 1 point
*   Correct `CreateItemAsync` call with item and partition key: 2 points
*   Correct `ReadItemAsync` call with item ID and partition key: 2 points
*   Basic error handling (try-catch): 1 point

**Question 9:** Write a Python SDK code snippet to perform an upsert operation on a `UserPreference` document. If a document with `id = "user123"` and `userId = "user123"` (which is also the partition key) exists, update its `theme` to "dark". If it doesn't exist, create it with `id = "user123"`, `userId = "user123"`, and `theme = "dark"`.

**Answer 9:**

```python
from azure.cosmos import CosmosClient, PartitionKey
import os

# Assume client and container are initialized
# client = CosmosClient(url, key)
# database = client.get_database("UserDB")
# container = database.get_container("Preferences")

async def upsertUserPreference(container):
    user_id = "user123"
    preference_document = {
        "id": user_id,
        "userId": user_id, # Partition key value
        "theme": "dark",
        "notifications": {
            "email": True,
            "sms": False
        }
    }

    try:
        # Upsert the document
        response = await container.upsert_item(body=preference_document)
        print(f"Upserted document with ID: {response['id']} (RU cost: {response['_request_charge']})")
    except Exception as e:
        print(f"Error during upsert: {e}")

# Example of how to call this (assuming an async context)
# import asyncio
# async def main():
#     # ... initialize client and container ...
#     await upsertUserPreference(container)
# asyncio.run(main())
```

**Partial Credit Guidance:**
*   Correct `preference_document` structure with `id` and partition key: 2 points
*   Correct `upsert_item` call with the document body: 3 points
*   Basic error handling: 1 point

**Question 10:** Write a JavaScript pre-trigger for an Azure Cosmos DB container. This trigger should run *before* an item is created or replaced. Its purpose is to ensure that every document has a `lastModified` timestamp property, which is automatically set to the current UTC time.

**Answer 10:**

```javascript
function setLastModifiedTimestamp() {
    var collection = getContext().getCollection();
    var request = getContext().getRequest();

    var item = request.getBody();

    // Set or update the lastModified timestamp
    item.lastModified = new Date().toISOString();

    request.setBody(item);
}
```

**Partial Credit Guidance:**
*   Correct function signature and `getContext()` calls: 1 point
*   Retrieving the item body from the request: 1 point
*   Setting `item.lastModified` to current UTC time (`toISOString()`): 2 points
*   Setting the modified item body back to the request: 1 point

**Question 11:** Write a C# SDK query that retrieves all `Order` documents from a container where the `customerId` is "CUST007" and the `orderDate` is after January 1, 2023. Assume `customerId` is the partition key and the `Order` class has `id`, `customerId`, `orderDate` (DateTime), and `totalAmount` properties.

**Answer 11:**

```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class Order
{
    public string id { get; set; }
    public string customerId { get; set; }
    public DateTime orderDate { get; set; }
    public double totalAmount { get; set; }
}

public async Task GetCustomerOrders(Container container)
{
    string targetCustomerId = "CUST007";
    DateTime startDate = new DateTime(2023, 1, 1, 0, 0, 0, DateTimeKind.Utc);

    // SQL query to filter by customerId and orderDate
    QueryDefinition queryDefinition = new QueryDefinition(
        "SELECT * FROM o WHERE o.customerId = @customerId AND o.orderDate > @startDate"
    )
    .WithParameter("@customerId", targetCustomerId)
    .WithParameter("@startDate", startDate);

    List<Order> customerOrders = new List<Order>();

    // Execute the query, specifying the partition key for efficiency
    using (FeedIterator<Order> feedIterator = container.GetItemQueryIterator<Order>(
        queryDefinition,
        requestOptions: new QueryRequestOptions { PartitionKey = new PartitionKey(targetCustomerId) }
    ))
    {
        while (feedIterator.HasMoreResults)
        {
            FeedResponse<Order> response = await feedIterator.ReadNextAsync();
            foreach (Order order in response)
            {
                customerOrders.Add(order);
                Console.WriteLine($"Order ID: {order.id}, Date: {order.orderDate.ToShortDateString()}, Total: {order.totalAmount}");
            }
            Console.WriteLine($"Query page RU cost: {response.RequestCharge}");
        }
    }

    Console.WriteLine($"Found {customerOrders.Count} orders for customer {targetCustomerId}.");
}
```

**Partial Credit Guidance:**
*   Correct `QueryDefinition` with SQL string and parameters: 2 points
*   Correct `GetItemQueryIterator` call: 1 point
*   Correctly using `QueryRequestOptions` to specify `PartitionKey`: 2 points
*   Looping through `FeedIterator` results: 1 point

### Section 4: Design and Debugging Problems (3 Questions)

**Question 12:** You are designing a Cosmos DB solution for a social media application to store user posts. Each post has `postId`, `userId`, `timestamp`, `content`, `likesCount`, and `commentsCount`.
*   **Requirement 1:** Users frequently view their own posts in reverse chronological order.
*   **Requirement 2:** The application needs to display a global feed of recent posts (across all users) in reverse chronological order.
*   **Requirement 3:** Updating `likesCount` and `commentsCount` on a post needs to be efficient.

Propose a partitioning strategy for the `Posts` container. Explain your choice, considering how it addresses each requirement. Discuss any trade-offs.

**Answer 12:**
**Proposed Partitioning Strategy:** `/userId`

**Explanation and How it Addresses Requirements:**

*   **Requirement 1 (Users view their own posts):** By partitioning by `/userId`, all posts for a specific user will reside within the same logical partition. When a user requests their own posts, this becomes a single-partition query, which is highly efficient and cost-effective. To retrieve posts in reverse chronological order, an index on `timestamp` (descending) within that partition would be crucial.
    *   Example Query: `SELECT * FROM p WHERE p.userId = 'user123' ORDER BY p.timestamp DESC` (single-partition query)

*   **Requirement 2 (Global feed of recent posts):** This requirement presents a challenge for a `/userId` partition key. A global feed requires querying across *all* partitions to retrieve recent posts. This would be a cross-partition query, which is inherently more expensive and potentially slower than single-partition queries.
    *   To mitigate this, we would need to use `enable_cross_partition_query=True` and potentially provision more RUs. For very high-volume global feeds, a common pattern is to use the Change Feed to populate a separate, denormalized container (or another data store like Azure Search) specifically optimized for global feed queries, or to use a "fan-out" approach where popular posts are duplicated into a "global feed" partition.

*   **Requirement 3 (Efficiently update `likesCount` and `commentsCount`):** When updating a post, you know its `postId` and `userId`. Since `userId` is the partition key, updating a post is a single-partition operation (a point update or replace), which is very efficient and low cost.

**Trade-offs:**
*   **Pros:**
    *   **Excellent for user-specific operations:** Highly efficient for retrieving a user's own data, which is a primary access pattern in social media.
    *   **Efficient updates:** Updating individual posts is fast as it's a single-partition operation.
    *   **Strong data locality:** All data related to a single user is co-located.
*   **Cons:**
    *   **Cross-partition queries for global feeds:** Retrieving a global feed of recent posts will be a cross-partition query, which consumes more RUs and can have higher latency. This might necessitate a secondary indexing strategy or a materialized view pattern using the Change Feed.
    *   **Potential for hot partitions:** If a few users become extremely popular and generate a disproportionately large number of posts or receive many requests, their individual partitions could become "hot," leading to rate limiting. This can be mitigated by ensuring sufficient RU provisioning and monitoring.

**Partial Credit Guidance:**
*   Correctly identifying `/userId` as the partition key: 2 points
*   Explaining how it addresses Req 1 and 3 (single-partition efficiency): 2 points
*   Acknowledging the challenge for Req 2 (cross-partition) and suggesting mitigation: 2 points
*   Discussing trade-offs (hot partitions, global feed cost): 1 point

**Question 13:** A developer reports that a query on an Azure Cosmos DB container is consistently taking too long and consuming a high number of RUs. The container stores `LogEntry` documents with `/sourceSystem` as the partition key.
The problematic query is:
`SELECT * FROM l WHERE l.logLevel = 'ERROR' AND l.timestamp > '2023-01-01T00:00:00Z' ORDER BY l.timestamp DESC`

The developer mentions that `logLevel` can be 'INFO', 'WARN', 'ERROR', 'DEBUG', and `sourceSystem` can be 'WebApp', 'ApiGateway', 'BatchJob'. The current indexing policy is the default automatic indexing.

What is the likely cause of the poor performance, and what specific changes would you recommend to the indexing policy to optimize this query? Justify your recommendations.

**Answer 13:**
**Likely Cause of Poor Performance:**
The query `SELECT * FROM l WHERE l.logLevel = 'ERROR' AND l.timestamp > '2023-01-01T00:00:00Z' ORDER BY l.timestamp DESC` is problematic for a few reasons with a default indexing policy and `/sourceSystem` as the partition key:
1.  **Cross-Partition Query:** The query does not include the partition key (`sourceSystem`) in its `WHERE` clause. This means Cosmos DB has to fan out the query to *all* logical partitions to find documents matching the criteria, making it a cross-partition query, which is expensive in RUs and latency.
2.  **Inefficient Filtering and Ordering:** While default indexing might index `logLevel` and `timestamp`, the combination of an equality filter on `logLevel`, a range filter on `timestamp`, and an `ORDER BY timestamp DESC` without a composite index or an optimized spatial/range index can lead to inefficient index scans and sorting operations, especially if many documents match the `logLevel` filter.

**Recommended Indexing Policy Changes:**
To optimize this specific query, I would recommend the following changes to the indexing policy:

1.  **Composite Index for `logLevel` and `timestamp`:**
    *   Add a composite index on `(logLevel ASC, timestamp DESC)`.
    *   **Justification:** This composite index directly supports the `WHERE` clause filters (`logLevel = 'ERROR'` and `timestamp > '...'`) and the `ORDER BY timestamp DESC` clause. Cosmos DB can use this single index to efficiently filter by `logLevel`, then quickly find and order documents by `timestamp` within that `logLevel` group, avoiding in-memory sorting and full scans.

2.  **Include Paths for `logLevel` and `timestamp` (if not already covered by default):**
    *   Ensure that `/logLevel/?` and `/timestamp/?` are explicitly included in the indexing policy if the default policy somehow excludes them or if you move to a custom policy.
    *   **Justification:** While composite indexes are key, ensuring these individual paths are indexed is a prerequisite for the composite index to work.

3.  **Consider a different Partition Key (Long-term, if feasible):**
    *   While not an indexing policy change, for queries like this, if the `sourceSystem` is not frequently used in queries, a partition key like `/logLevel` or a synthetic key combining `sourceLevel` and a time component might be considered for future optimization if the query pattern becomes dominant. However, changing a partition key is a major undertaking, so indexing is the immediate solution.

**Example Indexing Policy Snippet (within `indexingPolicy` section):**

```json
{
  "indexingMode": "consistent",
  "automatic": true,
  "includedPaths": [
    {
      "path": "/*" // Default, but ensure logLevel and timestamp are covered
    }
  ],
  "excludedPaths": [],
  "compositeIndexes": [
    [
      {
        "path": "/logLevel",
        "order": "ascending"
      },
      {
        "path": "/timestamp",
        "order": "descending"
      }
    ]
  ]
}
```

**Justification for Composite Index Order:**
*   `logLevel` ascending first: The query filters by `logLevel = 'ERROR'`. Placing `logLevel` first in the composite index allows Cosmos DB to quickly jump to the 'ERROR' section of the index.
*   `timestamp` descending second: Once within the 'ERROR' section, the index can then efficiently filter by `timestamp > '...'` and retrieve results already sorted in descending order of `timestamp`, directly satisfying the `ORDER BY` clause.

**Common Mistakes to Avoid:**
*   Creating too many composite indexes: Each index adds overhead to write operations. Only create indexes that directly support critical query patterns.
*   Not considering the partition key: Even with perfect indexing, a cross-partition query will always be more expensive than a single-partition query. If possible, modify the query to include the partition key.

**Partial Credit Guidance:**
*   Identifying cross-partition query as a cause: 2 points
*   Identifying inefficient filtering/ordering as a cause: 2 points
*   Recommending a composite index: 2 points
*   Correctly specifying the order of paths in the composite index and justifying: 2 points
*   Mentioning other relevant considerations (e.g., include paths, partition key change): 1 point

**Question 14:** You are developing a multi-tenant application where each tenant has its own set of `Document` items in a shared Azure Cosmos DB container. Each `Document` has `id`, `tenantId`, `title`, `content`, and `creationDate`. The `tenantId` is used as the partition key.
A critical requirement is that a user from `TenantA` must *never* be able to access or even accidentally query documents belonging to `TenantB`.

How would you implement secure data access to enforce this strict tenant isolation within the shared container, using Azure Cosmos DB's built-in security features? Describe the steps involved.

**Answer 14:**
To enforce strict tenant isolation in a shared container where each tenant's documents are partitioned by `tenantId`, the most appropriate and secure method is to use **Resource Tokens (also known as permission tokens)**. Resource tokens provide granular access to specific resources (like a document, collection, or partition key) for a limited time, without exposing the master key.

**Steps Involved:**

1.  **Create Users (Permissions) for each Tenant/Application:**
    *   For each tenant, create a `User` resource within the Azure Cosmos DB database. This `User` resource is a logical entity within Cosmos DB, not tied to Azure Active Directory users directly, but rather represents an application or a specific tenant's access context.
    *   Example: Create a `User` for `TenantA`, `User` for `TenantB`, etc.

2.  **Create Permissions for each User:**
    *   For each `User` created in step 1, create a `Permission` resource. This `Permission` resource defines what the `User` can access and what operations they can perform.
    *   Crucially, when creating the `Permission` for a tenant, specify the `PartitionKey` value corresponding to that tenant's data.
    *   **Example for TenantA:**
        *   Permission Type: `All` (or `Read`, `Write` as needed)
        *   Resource: The specific container (`Documents` container).
        *   **Partition Key:** `new PartitionKey("TenantA")`
        *   This permission grants `TenantA`'s user access *only* to documents within the logical partition `TenantA` in the `Documents` container.

3.  **Generate Resource Tokens in a Secure Backend Service:**
    *   When a user from `TenantA` logs into your application, your backend service (e.g., an Azure Function, Web API) is responsible for generating a resource token for that specific user.
    *   The backend service uses the Cosmos DB master key (or a read-write key) to create or retrieve the `User` and `Permission` for `TenantA`.
    *   It then requests the resource token for `TenantA`'s permission. This token is a short-lived, cryptographically signed JWT.
    *   The backend service then securely transmits this resource token to the client-side application (e.g., web browser, mobile app). **Crucially, the master key is never exposed to the client.**

4.  **Client-Side Access with Resource Token:**
    *   The client-side application receives the resource token.
    *   It initializes the Cosmos DB SDK (e.g., JavaScript SDK) using this resource token as the authentication key, instead of the master key.
    *   When the client-side application attempts to perform any operation (read, write, query) on the `Documents` container, Cosmos DB will validate the resource token.
    *   If the client attempts to query or access a document with a `tenantId` other than `TenantA`, the request will be rejected by Cosmos DB with an "Unauthorized" (HTTP 401) error, because the resource token's permission is scoped *only* to the `TenantA` partition key.

**How it enforces strict isolation:**
By binding the `Permission` to a specific `PartitionKey` value, Cosmos DB itself enforces that any operation performed with a resource token derived from that permission can *only* affect data within that designated logical partition. This provides a robust, server-side guarantee of tenant isolation at the database level, preventing both accidental and malicious cross-tenant data access.

**Partial Credit Guidance:**
*   Identifying Resource Tokens as the primary solution: 3 points
*   Describing the creation of Cosmos DB `User` and `Permission` resources: 2 points
*   Explaining how `Permission` is scoped to a `PartitionKey`: 2 points
*   Detailing the role of a secure backend service to generate and transmit tokens: 2 points
*   Explaining client-side usage and how isolation is enforced: 2 points

## Course Conclusion

Congratulations on completing the Microsoft Azure Cosmos DB Developer Specialty (DP-420) course! You have embarked on a comprehensive journey through the intricacies of one of Azure's most powerful and globally distributed NoSQL databases. This course has equipped you with the foundational knowledge and practical skills necessary to design, develop, and optimize applications leveraging Azure Cosmos DB.

You can now confidently:
*   **Design Scalable Data Models:** Structure your data effectively for various APIs, understanding the trade-offs between normalization and denormalization in a NoSQL context.
*   **Master Partitioning and Indexing:** Strategically choose partition keys and define indexing policies to ensure high throughput, low latency, and cost-efficient operations for diverse workloads.
*   **Implement Data Consistency:** Select the appropriate consistency model for your application's requirements, balancing availability, latency, and data integrity.
*   **Develop with Cosmos DB SDKs:** Utilize the .NET, Python, or Node.js SDKs to perform CRUD operations, execute queries, and interact with Cosmos DB programmatically.
*   **Leverage Advanced Features:** Implement solutions using the Change Feed for real-time data processing, server-side stored procedures and triggers for transactional logic, and Time-to-Live (TTL) for automatic data lifecycle management.
*   **Secure and Monitor Your Solutions:** Apply best practices for securing your Cosmos DB data using resource tokens and role-based access control, and effectively monitor your database's performance and health.

The skills you've acquired are highly sought after in today's cloud-native development landscape. Azure Cosmos DB is a critical component for building modern, globally distributed, and highly available applications, and you are now proficient in its core development aspects.

### Where to go next

Your learning journey doesn't end here! To solidify your expertise and continue growing as an Azure Cosmos DB specialist, consider these next steps:

1.  **Pursue the DP-420 Certification:** The ultimate validation of your skills is earning the official Microsoft Certified: Azure Cosmos DB Developer Specialty certification. Review the official exam guide and practice tests to ensure you're fully prepared.
2.  **Deep Dive into a Specific API:** While this course covered core concepts applicable to all APIs, consider specializing in a particular API like Cassandra, MongoDB, Gremlin, or Table API if your projects demand it. Each API has its unique nuances and specific use cases.
3.  **Explore Advanced Azure Data Services:** Expand your knowledge by integrating Cosmos DB with other Azure data services. Look into Azure Synapse Analytics for large-scale data warehousing and analytics, Azure Stream Analytics for real-time processing of Change Feed data, or Azure Functions for serverless event-driven architectures.
4.  **Join the Azure Data Community:** Engage with other developers and experts in the Azure Cosmos DB community. Participate in forums, attend virtual events, and contribute to open-source projects. Websites like Microsoft Learn, the official Azure documentation, and various tech blogs are excellent resources.
5.  **Build More Projects:** The best way to reinforce your learning is through hands-on practice. Take on personal projects, contribute to open-source initiatives, or explore hackathons. Experiment with different data models, partitioning strategies, and integration patterns to deepen your understanding.

Keep practicing, keep building, and keep exploring the vast capabilities of Azure Cosmos DB. The cloud is constantly evolving, and your dedication to continuous learning will ensure you remain at the forefront of modern data development. We wish you the best in your future endeavors as an Azure Cosmos DB developer!

---


> End of Syllabus: Microsoft Azure Cosmos DB Developer Specialty (DP-420)
> Course ID: microsoft-azure-cosmos-db-developer-specialty-dp-420
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Databases
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
